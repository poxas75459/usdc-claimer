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
    "58RNwKsyo9wSksPGmyNoa9NCgc2GmEfUoPy833J8HH2mJbsXcX2Y4kLeztCP8XgP4Yr3Fe9Zu2Kiv1Q2jw3uJMc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1XkgcVke73EDFzV67e1L2r3rv1Mw5UJuPag3tJfrBpg5WYhKekcegQAeHE6p5Qu97h53PAZazienEdSARCNoow",
  "key1": "CTsKmnRg695cdEuRdxK2U27SLXZTJbYMnq2BYkujgEH3WWqncTyHqTdVS7BSkyBbvmWVrRwuaYvyKXyJS1KyZgB",
  "key2": "4TWncuVBoCrLBYq4ENBFd3yLWMAAwqAJZy5c3qzx6Qtm5ysyp9LkMbNJbEKwTMzCzHAsNm2NVvRWHSbTn1nKgzYp",
  "key3": "GGtjZZKzz8zdeFYuUXMy35ET2xQVa9NQD1819sS8QmYUQQaRqXGL1Zs7v57ZfER7VJtTcHfMMSSN3Ja5Mu9whGp",
  "key4": "51sWQAHJFZRnzzUeJ57aGaaScgwwKmo39B1UK7TsNxfdy3sG9MB3BuRuHpiaHeYsajePRNimTwbbtUMPhtDnz99P",
  "key5": "5bjAZfRZ5PVb8XYHwBeK6hyv3Yh82RybQXi2hrfXst2XnWeLscypn4aWXixnP27Saz9MEKPKpS8rarq1Pv5TLWQn",
  "key6": "2Qabp9JA71EbuBYmC3VTh3LWNFQA6528c9NVveYCCCWrELDphQyV2n9AqmqUn3HBJwHyqEwak9TMs1QMx9xRzkLi",
  "key7": "5zMaDhVVo8PfcbTqfiZ4CSvENk7sPiBiFcU2MgefD99ugmL8LRASWnxJP4Q6qKMvPmyxLq2EDYf76cPCR2cJ9a9k",
  "key8": "2y1iA8mp98VdoxwoYqZYrzbbKYEjkzvjX3qzShpRbL2rqAbPypX8NghFKmFcSpjRMnwyimL4KtXagiczdSfGfJHe",
  "key9": "62566nmLGEJ1SpP3kVVotg6jh6Q3QcuFipPRpQHee8zNu5r1fBkv7EVcZ8AtF5rHa3edGVujARaYUPGPgHzXXBLm",
  "key10": "25NCJWUFvE73TQUimZZg5TbuRjMSejcMPnu158jwjaePKtx1k9sA2QCCkwXTXjenTJysdg1wWZPZFaUncadEVaH1",
  "key11": "4p3uRnBTmu9AidjNSmny6x94zYCyr9SDQpRUGdB86cuvShWosuSmnCFMqAm84EtF5HK8bBEt6n7C4sASvfe8W6Pq",
  "key12": "5nfdjzBrModss55TsAUahGT1amvE7HA5fcL33PRxzcYdvMEWitnCU4pMJjQzz1vxbA2g2h8DvfGR1gGsWvAExqmZ",
  "key13": "5pqfuau1Xhkp8pC8p9hAFtbqECSiXtGtsyqwYXauLDU3qpwgaEMexv3zAhwGAVhShc5orjLJKV8vMH6VbyyxA3Dm",
  "key14": "3ZBMq1kt87MkHoMb2krtBU7yW44DT1CYkNoXMt267GWtiNw1JJYHFN3cnBmfe52ftZKVmRovMBu3JUMokUdodYwv",
  "key15": "gPPWVeqWXkZpZ6kVGHSKyZf3Di5DUCQ7RrKZ2dqhprW8VadLdtVKyXpSYJftY69JfDVxh9s1eWV2eCKfRczBhR9",
  "key16": "4jjgNj5w18frWaYvQdhPHEsK4E6EZn5axKTfgBcbg76GXnQxLBHCCnPzn2thZ4ohFVstsxoiYBd7izB5zWc2pDPj",
  "key17": "2uLp1FiCFVap4gpEdftbeJwqdMLn1tXL54y7qfHjr972i8R4ACnP4KFyPci9NeQ1zqo2FtFrvEYRC1wbKnJKWpGS",
  "key18": "mPekJDCDwq3kYjo2VcvomfeShbPiiemBZurCWeiGSLRo3Jwj8asCh1sof4Ve7sZmMu3DU5wrRUD66g8FsmLjv1K",
  "key19": "32uxb19KUmJaf1y4NE3J2CnkDdVna6h6gppyH6PwPZxPr3WTeXTb2WkPKrzUhi3dKSNfERGS8vHhSqUxdLyhkVMT",
  "key20": "bT8nDg9snBEXoDU7e31UXdsGFAsBgK8heznPHuBYet7UEaqzJmwLhA8P3Jz2keq5VmZtq7WmFSpAKhCtNdGC9Qw",
  "key21": "3ugZqRa119gDzWsWw9Txd3UbbkSzbPirJTN4E27XG3AoY6xoBmcKEGr3VsiV3CU3Mfcq3AXKk6EadX97uGiraHby",
  "key22": "23ssbAPduRPhhHzVDpE2WVmEGftSzm4tuJWD5KAAHBWXV8GgMVzJdX8xTjmPDugYk1Jips8uNpEzW3KaYZ5uBzM1",
  "key23": "3tkgcJWZEHeYnUqD7eJP57PhxgMe8j9xCV55hQG9hjLuA3vV7DBUtBXv7ttJEaFENBsT68d6SU9rhXy9EgcgF9sf",
  "key24": "3swwgKfJd7n8a1zPMXNc57HF4RCRPURKHXWk1frfhvLJP8LT72P3F1PARhm7kLihMPmMt5fEEnQpNiEfMCHrm4QF",
  "key25": "5865rZvUE3dSUWNhE2wiMium4KogeDEHAYGh4S1iRGZ3cK9TCszdhiU3LngYNh8ULbF3bGd4CXY1fGmvHorH12cH",
  "key26": "3ijoRqX6WPQTBRFY88Z2aC1b4Yq7zPtPvbWJouvXDWFYxbbgx4V69PdoAszh8WiToqYV1oZhXHrtVUHEnWuFsSaF",
  "key27": "3xBzt5P4i8QjzuoyyoGXVuZCzvzkBeobrTjG8kBSCmpZXH5j2DstkNim6fMtmUw6LsRyDXmECniZeR4fMA3zbp1D",
  "key28": "4zpVD7aRZKYuZSxkLK7igoq9WtaLZe5smVuNTX5RVzAbzRDcbHnqVpvPQkNqKshT1ZwZzk5gYW6wNZ4zmz9SAvqW",
  "key29": "5gFJ9bojSH2aHxiACaEiaCi2sfcHuX5qxbji2LgXh84Q45vrN1ZsE6xmejrHW7k5p5KkFXybeDzF216ZzTjzUSZw",
  "key30": "49MahWsK7R5bXXM8JkaR6FRajcPD2RcJKBm5LcwDFeCKYGhhpUipenCYABLsV7d8DsAQnberocW4Joqs9QFSapeu",
  "key31": "37o7zQ3VBz8nVnxY9mLzcq98uuWKdE8Zir4FPjZqiHU8WVFPG7jM9JxfovfrBZ5nK3rbue9u1yjC8TJSZovzGh2b",
  "key32": "2CCiQGmvTNDYZtpmkfpHUMi1mnknbwjZmiAyiPwN1fRhn2b27tQz8JDS8ZFgDESsBS7nFEGwV5N1pkSDfi7hYMLx",
  "key33": "3bbwzpzV7N8s1rBic1FjAZjy2SjFZtxNAyLa8jgZi6vEXW7ctZ4boo5Mhjmxnk2eFtJiR5N1aG5ykr9HRyEXnoLj",
  "key34": "M1wuqG8BbuLBUhoX6sdt6m4euPji8HjdF1iUoxnwi2jgBsA3reDPd3xp1KBw2cYUSCfUVTv9MmocZQND7uSi7Tf",
  "key35": "6gAf377XvhM7sB3X8Ak3QRUtsXi2kyPwR3eByhG8Ed3ChEAnk9jFZf4ZtyF98Fwc1TWqbk4JC9uYNWFvvNqW3wW",
  "key36": "TbCiRx7ZGqTHdCcWQNfsTdr2nQiJdtqQqGtJWoLivP9j3eaQjEuJj8BcBUAYDct1WVPx31yN4wrMNXs2X8nshsE"
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
