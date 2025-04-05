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
    "5mHBkpiSSeFBSvDLiiSmTJzvYUe2vBqtJMNpruQ126XbRQ9Dh1Ceqi8daD67fsbyjEaV3ZA7buvjyah3gVhC7t7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9QNtZqYokVgrdTvsjhhygzQxoN7wRAmy449ewwhEXR6T4FVuw7te5fPKLHC2YJ3tsWYcxUGXRcdwGwTKBcYhPS",
  "key1": "27Bbo1yEgxgp9EaNtJAhNoTyiTbNoX5i4k1mN9EYawDKwuqa9Eo3MtzxLLAwnGhigeRvBpkmv9EtJ25ry4NbRRwM",
  "key2": "c8honqEtf3Hq5CUC38G2bpHj7VeAnDDspPxaEFRXGwaR3KAqgq8Vva28DTv3TSbDPfRvUTwEacEtofrQxNaoFuF",
  "key3": "qADzQuYzUJfXEE8mvBKmARaDgPKyiHLypJbThGNwjZ9bBNxgDWy87mRrQ8wAySS6LLGhp348PW7Bi4qWmiQ8vkb",
  "key4": "2ubZkosNv39aeDzUp9ao24feXDDvb1LK4CUqrEhUaHZVkSfxSfHowq9wHYQAg39H3uNwZC8ExJyZUpv9WNHuTTtu",
  "key5": "4fGJb91uuwWS7R8Lt23tpE5FonMgFbu8ut4H9SuXKBCyjBqZj3WU3GqeyHXjsTeHFoJtmAJiiixPgBTZKJZatoVH",
  "key6": "izcC5jZLt156S3up93mYTd9osT5xYYDqQ3Np6361ToPdsnNm4LY8ZpKHjNoxWtYFbwtMX16bAsncKrTGeYxwyxn",
  "key7": "2kH3zcUwwg87ZiPa8EgJLTw3E5PXZZoWYhpNRuSnSLsAo1j1nXfqXcWMQqmxzcZHT3ZBgYZbxdQRS8aPgnArK3Wm",
  "key8": "5S3yUAHwcTfn3hVZ6GzxetRhqh5Efq4huLDiCS86NBUsgDZdFtVcFibcagEs77CiohXkw74u8AGXkVbj3p9NM6s",
  "key9": "4rg8iyZUCUTEFWqyM2pubwHmB7jUgJSvp7uxjniA3AuXPHHzbNRCVsn9GB8GWtoRnoRwa7FEeBzL5VmMTKWNCJGP",
  "key10": "4cxfqCN11jg4uvTfJd3XJGSR3HnEXirEFGQaAHVMt5MMYwiZWDWzMapF274LTVgrXXjcn6tvEH2bP5FyxBRYg3ed",
  "key11": "hx1QWKCdg2yamDq4YgPKr1efgMZWe7J8ftDBT6geDr9t4K5xmQcJnHU89VXz4rRbBm1bpJKYbAgXk5t5NDyziFp",
  "key12": "3nerijAuUfBDrmZytpY94J7mVTd9ncV2AmNsdSiS9P5Ut9Qx1QFzCGRFrQC8pgNXZwP5Uv2wB6ar6hmbkJAhQPGY",
  "key13": "4bhJaVonk4qVYnnuNSCD9U4YQACQ9v7kUSA4rC2mfyLrXn8nPZW49BwMLF27hbf7wzhPzMweB5Qka5wLShpERQsN",
  "key14": "TrgM1nepWyFB65NxdmqyJpGKEMheVwXcfUf8deHcGDZxf2UUtH3dT9iU8MQQbziY2mW22Cn5ZsvH2y8jojXvYGX",
  "key15": "S9Ju1NF9as6F1AwuxqJjvKapmt8GKPquPWTQatfPyJQ4LrGyfsWzhZeQQUFULa6fiovEbUPpuv8Jh6XZ8T1UbbS",
  "key16": "4jsB4138pzbqZgBs1VdvWEmFVu3WB3b35fLkpLCKZaCHiKKExCgjBXzJh2c1kVyfEG2Mi2U2Khrhb9ervo2Zb2wD",
  "key17": "2iaofT5GnYwgNB2xv7voLxXabK3mp3z99hGq4DnbDhRhY2KEfqa1GbByMiybQAXRvNPGTCcDzDkyx23CKXx75nTy",
  "key18": "342zDCqf3Jc17X2hxTfWN2sQpsAHDmNu7yJ1xTwhTvU6VjCRqwdehjuWKhXSXFcuSteKpDZRiYq443wnjtr5UdSQ",
  "key19": "3N8Zd6HoN9fS6LqwW6fvCEGfWWSqUVsWdwSWASG8kLzD1MNe1ZaMKkfYxu6iMpyisr63AL3pqopehixcyCbKqdeJ",
  "key20": "T9taH4fc8jZptweKSJBKAPUcJrDUxdnBWyJHZAzGG3LJtha5Ew8zLwYfwSx27iLH22rtKp3nyR8iTw8P8DpmnAa",
  "key21": "22kZAchD5pG646XrtkHtvTEGKsZ5LqaAL8xfWQGC3sQnHAQ3bb138R1N9Nw7qfvvxHUvjN8zAaUb7enh8Go2CbYb",
  "key22": "yjRk7HUpfnqkXRpfRcV2QyqEvnDhrmdiQKvp2PtKSSQG1bGNSoB6QqmfBiCZe8jRVb42Q6g9zyinS9j7g881KGG",
  "key23": "351aYpWDYyqfKPwRJe4VhtpF19az41EykqdYjCs4iPFDaYppV852GvEEnnCehtcjMh9RoyK2asyFn7Lg9WBzV2Fb",
  "key24": "2fEXrqpRJihuMJQfr2Gc1xmJBdpVZf8SRPCc9YCvWmtHtum6ycR1WddmoWZN7mrhYn6SN18zsyqzCUZv6SGy6BgS",
  "key25": "vQkp5sCYYmpG9sAfX7Q2RmYhPCAGb7LspZSooGTGmMtQnidUXQXeUppdV7xqnK3nJ2xzeHF2y6NgKfNwAAqdk6m"
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
