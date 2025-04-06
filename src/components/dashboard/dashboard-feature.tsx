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
    "YKCQtrcvWvYujuMPFddGjHH4WMcL5SfFQQP2bs1oAYAhdCegmmV5N3Xd1K7SYMy5NnhEhfkQ8j2iekTtgCZv91r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSSVoiexhG6f5sFjtTqbcRdAkz7fHcXyfcHbmyHgDiyq16NQLwZYahRiQKKPfTGGFCTwF2UGSfgZHKEBkhNFez8",
  "key1": "3gdsrEC84dM1syfCH3xaQerR2CQzHP6awdLSmtftrfmcJTeQRjV2dfT5u1WYrawrYoyWGbxHJkvVvB9cR8MDs2Vn",
  "key2": "5kR6qc38RCnNF9dJKS2V6Cmx3VGjKFykXXeN95wU7dotevrtbirQQUQMKQ5TBuoLjHBH3y17j1CBs28LR2ggDBGa",
  "key3": "9ATom2UcHgD7rvW4mA88JVsoxCabbQyVafh9ww6ew9WHE1dwtp79JnqjPNNzh3JoRdacBZKLFPATHokfp88uGEv",
  "key4": "2m7hVronwKU3P9NyVVK7Chasqt28oRzGFEjbWqmqweZsvZRBcNQi9Ro9o9xGxZp9ZvuS1Y8wUQtv3MsY5m8qmjNw",
  "key5": "4VQJvTec7kboiy1QaW9XU316owcFpwVmB9AbjSX8g1U9a8XSRgKEzabpWjrbG2GPESbmoRzX9HnxCh7XwHoFHsed",
  "key6": "4ryudCHDWmXqYVytuCG9NQxdHrZBHFznb4LMj3BJTpaXFFBgixsrKVY8ma5JAuiWsxQ2qmb9UkrUV581t3BKxAUP",
  "key7": "4mYUM9ZbMaFHrsSo5ZUStmmgy16HeA3RPdK2K5dqypnGkBx6dMDvzx7fmZj9ceJVSpQG9uriZ8WuMzjs2zZwoeHu",
  "key8": "2CiFQcHSujQuh76Q6kLM3ZZQtsfS5y75TA7GYEaQErmHsfApUKdtFzaoSNhVj8Et4WeDZ6P6v5KgEksUbzgHb1sZ",
  "key9": "3apUGwSkuNE1W5hkguqRvZccx5MpCPwxpCrVDbYVKe4c5euTSu3yr2YXLVAYL4ofAvqxuX6KqJQWSbBazZzbipo3",
  "key10": "2qSpshPEH51TRDMzR5tBUT2AKPqAgvQngBmyPTinTQBkakvErtnqXTxGZ5nQMwVHzK3PbPcJfJ8LBq71wiPq1ouU",
  "key11": "5kaCLA2Ak4rLzvtE9YnCpUG5CpC8JVdpqm9FwMuZCzUZ66VA4k8kST6RZiDXn3sa7Vxy7ijSXtW1JEqr5QUbLiZ1",
  "key12": "49qRT9Ag4dP28sye2YamXpRZWwHZ4VAxBRQ3GBSKPXB17zEnVmksc5Q1Nj9zMNCVzR33SR3bm5ziyYwNkwTgdorj",
  "key13": "22HtZBa7p7SecXERAz6xpVamzUAxwDograduG8NsMvJ3XJw6SMehZncRx5RpQz9KZRfnDdQcHDcFKurMcJeNJ3v5",
  "key14": "4BuZ59Mnm2AH2LBnkYTyN3iyJJ7Qyd2MfGgEyfR7qoo4avMfjqCkd4HduugYAJLwWBGAQA747kzMccqEKjyfEPeG",
  "key15": "4SDcsCXzx9Dzvwg2pxzX7yCCFgAxGXC5mWT3D3QxFd9w1hVRCnWtdwMCpGmoFaPSRHSAskEryLt6rFZCnr5evfY8",
  "key16": "64rZrKeJfSMNTY75hWdmyc7vNCPChe1quYaRosySFX7e4taiafKjRewVemwCKzWRqHErygnNxAAg1dzRTqeiVV2S",
  "key17": "gNaqaSeLTuE9FqirP7m2eYZHa182na66uQu7CBa4114H1tBxXY9PcuD4AX984YNmYE8PG2ZNqkhvb6MuHwpRq7B",
  "key18": "atKxCYMSPyjbyshun5zha8vzr9CDBKDtpSg5vbSfRzxRHHEpEqBwn1qVouM5ao9DsfaRfTJfDmk42TdWvtzAZZd",
  "key19": "2LzMrYUDEi3GbnEAHs7Wttw1u4VX49KJAWMNoWA5r15fKUnuny5MEpusCq2WRjgTwiZALNVueZDhSJw11CFeLyiP",
  "key20": "5jdr5iUHyzLnZ5f6VWXNdwXsv7PgshsMLMAxNJs7qZSd4xdpnrf5f3TcWULmCBrH5B7e8QXttq1cLkdmXEvSmSW5",
  "key21": "461njzebBZ5qXAatU8TvWwNjfLMZUmPh3nDPLEdfsSbSXDE7tKEN53TG4xrrKHrFBvi3qnrLbeE6mr4pYuALjK5e",
  "key22": "q3ZJ7tVWKHwW4v9zoCcwruArtUP9bGYkB8uwn6sWTLUasqmJDq8znkj4NHp4yE7umVD4PfgPvYnyyZbbq1MRMxp",
  "key23": "5LHWrc7hhoxHsdJfGDjBJTshdhmmS86pa8YqQ5NDTQmrJkH3rTKPtSBisDeQLdfQq1ssHh31ky71nGK6qAUDs85a",
  "key24": "5jtB2bFGrzgQNhLmVuqb2oB5qhvddDmTZ4YZwMsd829tJM4oMrqF2Xb62kP316fvp7cS7KEgJmip5s44X3gRnZxz",
  "key25": "2Bw3Ut2KmZt6qybiATdYrC17MVRGvpwa4REJQAZPLwZP53Pu47pAqRRcZuJLj6fKfKcbYc6J4gu2MbFKGaqU3rEe",
  "key26": "3vkMxqTp5ZRi6aduPNHsaUz72QTGwDYpa6tjbnZoC15NN9345bkTB4KiyFeHwUNfRgMJiScKBpwizeGnX89zugK2",
  "key27": "3kvuJvFH9VjKfBboo4JhnYVs2Gj5Vo6YiUoj17GwJ3VHcMcJK8Lg5FzpuChMDkG5yeewHd5EhKeDHbdZnogNL1pR",
  "key28": "5zmzubd6k4sx3FbyunY6RUdTMgHBbScmQ38DqZ3YeoGg3m3jDmh5fnTQS6pLJcoJswrYMPbTQFqicRKBiFdfpfnr",
  "key29": "Z41U2VXxTdFw6sDYiUkZfPYdD79acMQDDDevCUNeFt7nK4PefiR1dNNS4PEt1LTemscDRmGjubbc9455Vq5YZex",
  "key30": "mia7Tc7buve1nqtrGVM8BWrEJUBLUypYRYoNE8EPc96C97s8mQjaBDTyf3UViiJ8wBxz4eqFCgHP4KNWn5FCuuk"
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
