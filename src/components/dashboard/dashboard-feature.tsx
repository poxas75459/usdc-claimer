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
    "62wVmbb4MRh2kDJ8sgu4t57Mua7jwMYhzNu3mYXjMVpidsRvJY9HoLUmxVViMW6EL4jF2NkjJRduhNy4GmxU1ovn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jECQkKjo9hGgQ4Fdf79LLf6Xyf9UiV3WabE9MzDzbJZ22qdif1RhVDjbsVYu31gMpByvjNkhzssrZ138xBgFoNv",
  "key1": "3cqH3Roykb61RwT4GjnQN4ps1LbdFVCK549bCdmrNGxQE1zDPWAwaLtpY4Pnaa2zPNB25SrG7h96TKaQT2j5gXSv",
  "key2": "65nVM61sPakQEhDaxF39yAQ8QpPqBddjJrGQfBcpV8EFis5PqmBHDd1gvH4BqN3CCcGxZ6K1V4hwtZECftCkfW2M",
  "key3": "3MrJ213mMteedXpaV1rmbrQkzAGfJgayH5tyL3jsr38XAscKVu4Z4WnU9eixuiskr7Md47BLhkUz1epCrW2qHmf7",
  "key4": "2UAzGRiJ7iWVbasbJrYDHQtLZRPzu1TDRYpe7fm8cW16bKyho8V1mB6c59cM3WFgNrBcqmrHNJQTYw9p6pZHMxy7",
  "key5": "5FUTrGGs8TMkcLx6aHY8JfQj28DQcARNFveUQqSHj2RXxr3GK3PkyxbQetNS8uQqeCUhcE4fqurQXkejjJFKxZuN",
  "key6": "axeaEm5bCWPsgXYCthn7dWJuujsWDwHELU8BrLR4Qz5kpwo2ydn1btAWdEa7DwNXgZg1xuAAYUCDeTxV4KAsGNq",
  "key7": "Rpz6srttt3mMXA1GQM4CgZrf8ZqaefVJkkpKPGiWDTLjRrsTCkEn24QHzp3NdBMrArMnBq9NQxvzoL6HPFQKEbb",
  "key8": "qre1panRXspuvQEeKzaQmAEWygR7LZcBYk5E3fRsx2Busiv9H3GfcXA8xejSwo9bBH5tptzaJr4BwhAzVaHARmT",
  "key9": "4CU7JoydvRXxmZJaJboyxxRoYABkgQ5LWAM1xMaH19aqfZfjMK17NK3omk8YepQzGr63UEc4ZBbstgCgXowMiF9p",
  "key10": "5X8PNWUM5ztw3pf3xLkSCTRk3QqpTK2PXN7BK8xcmpntdRkLu3XjQBvwvp5CVqqQg3nveMA4f7zfKXqj31jTdEbV",
  "key11": "g7ZdNtDAiYTzrAPqDjcAWc5CCpEbubSmAmnwKXFPCdqz1rCecMK6tHGRxvWkLeXQd7w636tchwrfYShc36VWTwC",
  "key12": "2hhzQX4u2fN8KPKKgsykbiWjJ1a3ih6TCfSPu87WrZe39DeQhJ1qHSU69cxkWaoVq6SSPMgAQNWAst5JiHkru333",
  "key13": "f1kZp9Qn3CfsLRJvT2tASXFgzLtnsMGNTSiWzytU4FDT351xLeLMKiVm89ai15mUbcDyRa6km8ca7pXAzrfDqBo",
  "key14": "53RVxpzQ7XNnMhRQJJY6qynQQpJRj8Q2VCMEx8PiFj9TXZrXdDLjR54TAX7kgPHox2HsezDRAdcKYSyYiVd9cU8r",
  "key15": "gSiFhNqdjxVUHiTtcBwD49PdEwGjJRfqYvrRDZJZZAUzT7oK3wabLUojmJdhgfuhbDxfZWbU9QeLzY92tgW159G",
  "key16": "zn5Vq3Kci6wB6pHD1gPMuEjNnrHgTb1ZSJX91Ztsfg3TRPRwB474TNoU2VxW2DZWgnzFPGTZTenN5i5TNSm9U1Q",
  "key17": "5uDQxvyia9Y47zbcyTQ9BC18Py4frMCzx9c3Nx7A5uLhge6enC7ezKEGtKHuU6wJ6JBptidZ6uwNw1d7pL21t1JV",
  "key18": "5gocLGY9Ui1Vo1aauZ6MpPbCeHoNfdrus35yqeZjMxJdhaYaWBo8fs2P3mkmNM3K9HeQk4vADj32uJHPFnyN7c5P",
  "key19": "2c7n6FEXzaepf3WKi5HAmftBKP5Y4JCxRrXg8diKW3ngUWfYzjC27qqmzP6Nyjs8AHzejJG46c2sULYtoebxP1BT",
  "key20": "xiv2MYfyh1bBFSxJPtEYAAstqt73YVyZtmHC9PBWcWRWY5pwhtR5vmUzbUStdHLbLTzJjXigvP9HkgioF2zgsKi",
  "key21": "2Sg64w7jFTpXWqXbCM1qkbc7mhGJuU6PXgxYVgWje3sMedr1xnDmJZFqAxscQdBQBgvAptkkVYbS2582cNi7B5VF",
  "key22": "3tnxWP8Vq8hGE786kypzfUkmRfT2v5AFvCrijcXYiozCSEf5W3JoevQWwTpuZzBMVy8hjSZftRQSfvn6XDXy7vNC",
  "key23": "5XwbhEbsNdiM9egCQMh4E1Gdtvy6ZDyenbyejHMkvetAAM9pVVB8WwTrS9e9XGokGAVtXx2Xb9qVeojdxStG2PHM",
  "key24": "2q7X1HUsCKdzwHpAGAaU1oU3WaqJYmj74csEMtmPeTXWHP3HFRuprzxbsCkyuvARqaNKYp8anvUCHFeot91x83Hy",
  "key25": "4nLTMFgGxVy5ANVQ5HFyyes5DHMdxvdr93Nk6p8hHFQ3nCRX1ah3ZNCWo7CThm5VRegvZXWMURdh4fYidCwheutw",
  "key26": "5MWM1XSKe2nKGHsDrdFZ1ptEpHF89zJw5e9vSDUpCnu6m6C1iHygHZWXypeKW7zpEiPkwP4W5Dnc5gwqQYPUBvpD",
  "key27": "3Et7dM48A2tJE9wj9k6Ed21K1pdSHuDicVqH4VbNmbaxEuUXkpLz3pvLNnS6dr8fyKRw7qq4i68cWFXtZQLpDdNG",
  "key28": "2UuF1YKWgcb8BQzZxxHMB3tjgGRk1yMGLbNrX3Rh7Dnwy9CWArNyQiZ5RxikYVHaU1sqMVA8TjpJf76emGMrFTEU",
  "key29": "3EtAH8jmMKWEkhLDVVJSueTtdDuRsrUz1cBhYqc9sDezyvJq5PBD1dXbscy8XaoSN9KMR7wX6voTCnwyBtsB9YRi"
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
