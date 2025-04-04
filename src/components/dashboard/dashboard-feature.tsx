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
    "5WdNRkA7UcJTGdr9Dch927NFLgKmj3Jr7ntjztB95QBnRku4CCVReaaZStwr1SMfR5vodstPvxUi5QYFHhBoxaQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1N8Vovh7tNfM6WLCQnHk5CBQ7zArcVqnxpmHTBXb19k7JZ1hxbewPejwyPoKPdm11ZjvxrJggxakZ7ifHWjDZVc",
  "key1": "teZrvd9f4wFHRCw1ButL2sa9dCNdY8AMgTA2TVDHwa4VWqzLE4u69SckU3ykciWMtaw5SJhnYKZFRKc9zC9HQTk",
  "key2": "5HLyCenTPBPWswQQPvfVMPz6ymoLXiq5NfbE9HJTeG6iR7Xih9hSuqt6JT7Ld26QEW8tufhgNDh2mSBkt8oLrzuL",
  "key3": "3kacP5UdZTPsPMDErcB7UhE5oCUjoukqcncr5QM6gxeii3TfMVYAWbEuYzGCwtykWftku5B7n2HjcBht1sZSnyQi",
  "key4": "2YwG8HBCJ5S2cDAzPnkxwCn857Ys7E55uWnF5AfY8UVdTNNPWiz5shbxsmXZFJ4zdwnDPBaFKVK35ZnhfUZ37Yd5",
  "key5": "XLvv3gvxMzzVSSohWe13ysZ6bhQsgRUUeWpPRP9ptvQnrEFZxmhMxYY1YFfvmGvkiekccsd5wLzRbqQFyFvEjeP",
  "key6": "CnBrZpFFCrmEv2YwhCqhyGBLteYGswAA5uzRGce3wUQXNY3Vrqs4NufN2MLWrWLE5D8JHWbC9u5v6pWgCzTkuSX",
  "key7": "pYc7REMqgHtmBPU6SaTMPRGSmZ7rtRJCWPDhvPkvNeM3fUcUFKTmhZtmTVZr6s6XVxZHTNyRHtDwRMrQFFuKtNi",
  "key8": "4h3HkkAVLo7GyxPdbQjLRpsccdxizdVdkBJrzELa46UTN76UwjJGjPgdwRBcfUbRqtKU16CdAnypftfTdXxy8mzE",
  "key9": "3yEboCrgUiomBopE8f5jMp32gHfG6ZjyuqZAuDsJHiqo2pZHv4K1eTiUToLsJCXzgozMT7nKyYLgzonvCFbQdbwK",
  "key10": "5YLaxuHxvqZwEH9z1y2PZeHwNX1QF1ajbXdssjqQmUiZE6pkf8SNEZ7DiQUfTxBPq9yxP3BKqJ9D3mAGVCTaTEXv",
  "key11": "4zbPBo6w6Zk56mVWRDgH88JvFkjHHUaPwAkTVmhiwx1kQtwDWKqTpcoNKrax44P55rFZazP15qMuFwwAdpJBcoGx",
  "key12": "X7zfQDHQqJsE7sMNN95QXxx1UN7yZaAmmEByfjvdpPwtzVzJiRGa9H6Moh1fS3q4G69rcav8zMZmbb4qkhFpmM3",
  "key13": "2oFrQsfBgdbyA3kCsD528qE9gJffeiCayx5hhUjrNvregW1aZTbL3U6J34U3r2UuRSV1gcpYzoKkSCA3APee5wNi",
  "key14": "66VdsnTxVKoTRsiXFQzqatzw57LNLoyq9tAtacEyAhfikG8Q6Me73o7w25wGh7Uu4YUMU45piAAoxbv53PCcNMt1",
  "key15": "5HjgToddxs9QWLeLwYkRbjdqyRnkdXDVZ7nKd8BiF9xxwqvnoH1HSgDnpcJmbu1TjCtj9ywutGjUaGyAzZY7X4ch",
  "key16": "3WGi88GTwxyLb7tSsJwqga2bCoNfDAz2Y1XrKqsNc9oLfCtPDdDBdSJNjyF4AvbP8Vt42mCUZi5inrEYPLvqPsM1",
  "key17": "3XTBpxJxPRrupQz3HNAf8WMqZjpmh7uYjR6aEgCxUP1vFwvmzKfzd3wuoJSSStVuLF8oSj8K7Nk2pMjwj9GfMDWM",
  "key18": "2eaLmLnTv3wNYmVbsDknArHDQm2LLh9sZUj4Q2gugp23BymwQ5Ve3MqR85coXJVBBcEL6H9oTgdnDPmL44p7EtzV",
  "key19": "5giZMBBqS64NmZHp2gVT6eQLdcom9xZaYz1msvZ4yXrS9beq483CqXyYomVuU7P1DGPzD2RHGXbJSxA2LQv7gE83",
  "key20": "2ZrEVMffLtYn4FBDt5FvR8f6HZqYoAD8UXQcUag3UsHk7AgYHUyaSkAnQfHN9cGy9ccV2nR1uKqrQLqdUr2AES6z",
  "key21": "3XEYuxGVy7zxCmJXrHGyg8eQBs63vM2zhMVFGUHZStXc9fXJjQ2e9hyyoCJGZaAMciccLNm6465TRCqm9FBpEbci",
  "key22": "4dqsCeLAXFo3pWf6m9w3XFmZeA8DKHpv78B6E3JD9PPAvM3VFvJdtgCJjyi6tLTW12C68gNWwDFi6e9QMYbm6iGa",
  "key23": "G62sq6WWgBr3Yj3FQQLwGNi7jgqfPairyrMNeikqaRTwVL8kA7CV8MAebLEj1Du3pUmPvquJMahwTeZLBdaPiwp",
  "key24": "5R9EqPVE9WwGYQFkKF9kzh6UYT3MGTVC29Q59iWPbZuyfnXcMdQtU4DTujAaU5kxRQhKfNSHr3Pj6WocpsP6okXd",
  "key25": "52guN3C6ajDmaEwhBdQ79nhoAvfgrqvwfF8vqJUoLgQRcXEUQ52RJnafQDW3mPNoKnWck4wTGpqSQ9SpD9hahr6W",
  "key26": "CH8bf4Bjw8omwT1dQPYUkEE8RX26zcBcnVFwfZ2X2nouzhUnmFjUmJ6kL69sn4iQqKAj6GUHvFMupgg6LcGvMyR"
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
