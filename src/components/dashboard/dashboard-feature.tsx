/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4UCCgUUqBnFGkQBgZQ6ZaKVa2v4QSWDy6rWRTGWNW55FpZiEm1FmKismu9iaHBoosvkidtychNhjC5c3eHhfyunK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1pTW2MhHFneKQYt7cTpryxuva9L9q6Ym2Hxz6rTgyHwXVvD8nkQ2cLgMuMjX5kHnDC3Vkw2GFhP6UgSbiSjJdC",
  "key1": "47DX65uDQfuYBHheiorJEi5Zjzsj6pPHLSMUPvcf8PVxWQDDfprBwgGgNk9ZCJH9e7ysBZpH9JKGkGSsXv8vJ2sp",
  "key2": "sEfVFQ6k8aacqEMaPdHgihD9xLnEcgwogXR3BdYGK8ZCyemL3pa7U6irusXHkaMdMwcZEk4NDe9o5MQpPiR98Uy",
  "key3": "2ARpuoM5VXhAYP1PLgLbboekgGfyDDtY9h9QkcVGPnAjdDyUkLTgHhKyh27qdvLUXVhVVBKzTRLdEiUJqepsvHF3",
  "key4": "45abFHYYjSkBnrU2LiP8KWQiCAPbWnYYwFEed98K32mGy1PpWJheFyQ9vn2EEnVbwjjkZztiXxekXj4pPQPzXDbL",
  "key5": "2zPZ6Yr4YZ1JuGUZfyHzMrtssUeVGN2Vm3sSXLZiK2iG3PZNg1xysRFkMQu5ZtoK2MAo1V9GBK4eDHKkFovJkxJH",
  "key6": "37Z5yQ5EwprQCKxmkfTDcUxEmCFWqVkVvi3QarKqQNksHZpqyxsyCogG7TWw9L4fPpjSzqNTxx76xSfjqKnFnMCP",
  "key7": "5t3d5cWpW6iwfkoCUxp51qt7XqdS9Ge5HjomDS1MZvZjt51WySkWHq2osJrZEKFEcCBYrQ62Svr1PvK1daybrPyT",
  "key8": "5y1jR4dVX1axq7wrGPbg51crCELpgGxKw5uqPW2kD6oParBX4kCktxSrw5pAo9nPmwPj5RpMbGikPy2y2sLkARTU",
  "key9": "51vLdyK6YuBk2jWnfNhJm1XZkJT3M6kgjAegSoKhN85zGAcWzq7s5qtDKKWi1HYs3HpGpt97JkvKRnmg3mcf9b44",
  "key10": "dqFsPV87eYwxFqt7huU27bKRNuju64C9YeTQcoy5k1Lq7XoexmKqcw2TYDxPrknsW3w8oWc1JjoMz3dWZ6i9zV7",
  "key11": "2X6GRsLmK3wvjDsoG7SuXevajEkY71K7uDN9Tzqxch49HYXG3Bwo7GAjEmTRyaLSxZpcsbwjN7sTVDTe5JbXmcKL",
  "key12": "BUSDT3ANx82UBnXBQuK122sjS5ECS2Wvyb3vFWtqVP6iuRFsCYZqErQmUViVr2NaoL6me7DEbChjQHfVRhf5FP6",
  "key13": "49bgMQnjo1fjPq59MKdFTj8HAgbuV6vWffNMZnpEmj7p9f6FSVKsyp11iaH5N8daRM77oCuxfQmgUFQwjB6nbr2q",
  "key14": "FwXUhXxmjP2v9Z3D9CRvZPyQHS86Y44Qoi1mAdHcmXyjt1AtTLBexzo6FRARv32PnAibdhn3u2kmFyovdFqajaG",
  "key15": "5JcnDpPERdSFjEaQ3obzqtrbfvnMYqE8eS8LwdcEUrJem7kRvxG73zSNKGMejFFKnWUceY2gx6KY7VyHCFeDK8F",
  "key16": "63zss4vvm27M9XwwoiP6azwbUiQELN3w9U9bt6o4qi972K9bhk544pjCeGYmEKMib6WXAw31f5TgZaFFr1LUhgBX",
  "key17": "51rE8M1sX1n7EbiCrrZn1Cf2c9tVCyjcFWiUP9SXepRY6r2XURaHZPwvKb3UNhZCjfTWYd7KPpzpKvQnHuARsj5G",
  "key18": "4GXDs9JGPhcfsEpvUvMH6eWRWXNeeshxpvQDYcC3CD5iHpeARWnJZE9EHqAQvq8Y1XysdMwcXkLQjbEHz8uwEEPk",
  "key19": "5mpZ8neMqaPQzeFGUnZZDZ9Lq4UoN8DcRFSgoeLTqLFV6HmYHytzYpyjLejh78Tuz6GdFD2Wsw9cLgBPRandXR2A",
  "key20": "iZUN4yRJQVYoNmiQCCCLFCoVPwdCsYnPcBUY4Die54JJTtjganVYv2NRrtRdLjaigNJU8MqbyJ6zG8DUzVy8w4h",
  "key21": "372es2KVkYrJPuTFtk7Bc8cqdQtWpeDm3F6tzKg5BGAXHbUsMUNHbHPX14Z2UiftyUR7ZPqN8n2SpbjZmN6pGhor",
  "key22": "5p1JmazW9CAGdAKi5qe2pqLS6A5Np15yV56Pd1bHqtb1h8zuevLqCPBxTB6hR9huYwDiCqsZ89h2VtsgzUP6bRaG",
  "key23": "4DAzUj2g9uwovHSpoF54NeHpvbTpp7d3LvECi9dah2vja6HFjRMbr7Zd4CvYbt6EFXfHYpNa12ukGkSx4KAsnRen",
  "key24": "2dsYEycSwUpQZwPWPjomBmesq6DzbvnzuN8hvd3v6miopiWF3BxPT8XY2YndidhESZYHuq32nuMczGufbqFLCNvr",
  "key25": "2LUUhqAjzXxacBhViSn9NUiyGsFHvjNatrxPEgtjtRdoniGtEDPCYaoRL5ZFoGs84q1dhz1ATfkMcTbavbNjBABG",
  "key26": "3VQWSS7fVxXg53scF7QC8tEEAkaB6ncu53NpU6KGW4opp9HhesFyqmLaWu3y5CLJAAwCXPrNnE7mMNa4VZG7WnxV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
