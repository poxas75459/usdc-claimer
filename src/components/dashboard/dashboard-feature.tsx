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
    "3ck34y1WA1MVjBfUS7ZGd2qJENU3bkTh1ZsFBx7CgEtTcLYaWqBWW6dm2XSTpnKCuz3wx9C9nNh43vZquD71apXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fxLbKcGJS4qtdNXN6dUKyC8Fd3LWUmK6CGigank7bwz2y2cBsmJBinthwG1B7GowaEDv6AuT1xLgR2XY7zFf4T4",
  "key1": "K73jxjR9EEgLSDyWfUg9bpD1w127N3zZEHLpWdBnrcYEZ1ojwMSrUi4FAcLwmPtzWUZTN8aFBJx4Yzfk6nKmMno",
  "key2": "3dU31k7MNaeTu9ASEechuuey5t3kVfzQ3K46Rs9Kx43HR73VYyjr7JAqkD4tWMizr69k29oCZhzgcxzwWJPnAQ2U",
  "key3": "4yTDymhkQHyJurDRkiK8NXgkYeMsRe5aBfaK3xqxNJsow5j3kus5uHVjMDYrAfpDfPZgRrz85VDWp7jNzo3UTSZv",
  "key4": "5jh745aVHvLzHo8fXZvyZkyS6DgJL5v1ZjKJhDCkAeda9ifD9m5NmPctQdytbQsyuKaGFbxFZWJF8XcWLSuVzRtX",
  "key5": "3wEP6LvehfAmReWKL5t8hFqYeFGVbkKXskKNb3UYhHHFyReDeKHpaMzqDNSHAH51dAAjzgS1CEN7Hcpb5baXosvq",
  "key6": "4RmV5P2CYQmDZsvHHusvLgMW9umJgSVVaF5m3BY2yBSkVYCZc1tdHth3nv96YjyuTN6tQraFYTcwg5pSSiLAAU6i",
  "key7": "3sCJJKHxPKFs8SMgThY549byRU9kMYo2YLBgP94HjDbKxbiEJ1CgSjRRMdjcwtYHBiD6hb15NhWkPFU4F77Sz4sj",
  "key8": "2K1jphPUvivvSt1YxAsW3xAFWsmnYr4uA1ocvambXhwkKscLFgC1Hy13RodFe8VUpCJF6hrLPCMbuRLDKKAuqFYK",
  "key9": "5EQ6NMNe4wnTacLwf8DnuguPXu8ogVGq9Hg1AfvjCMFoxSngSpSDX1PGfPJLXnGWez3WXMcM5ssryL46LGfpL6Fm",
  "key10": "2Cjk6Cp5BfaTckCkdcwST3WSSeXjuqmBXUjNF7SbCGBahikRdvMRPcVCmfSPiy2GiiHYUJgmpMWLbB4DGLCmqDn2",
  "key11": "2fTd7rhBioNHGDpAUiDgPBzqP3A56gzN9ieArd9dPawJFZT5uaGuBsF9naoq45EZQhjghopRXFG5k4G8qA9H98Se",
  "key12": "4MWsYmZ7ZFZc9seMSvAMiqQGRc1WBYrss6HAVBJfUueJWQVEnWAGcrbJoBhFVsumJo2B6CvoMtfPorUEqFG1Naj5",
  "key13": "2yRPT325ttJPbAyXachyGttJHsLJP3k58Pji5n8ctE7ZKMcAn4wphyALdGqQV32MyPknn1hEb6iCxYUx6stk8aid",
  "key14": "3Zkzy7jiNpPu6ZacPpPov1oSErMCcM6K32cRoxa98ZzDFYoSx4iyVXtEAmgHYxUZQSW13yfQWiDCi9v4KdfsZLXq",
  "key15": "b36y9HXB7bwCaZH5CAH5epsHJ3hT9bSFvWy5kNLwzwXBxcQB8KVLBCVo6aLoEngEMhJFL9DFcmD8q5MTW4fWQ2t",
  "key16": "2Mrr2mbXYP7zjN3LAewZUzaTgQ2qeSZv9UGHWeo2YBgoj4ZxTkS21qu6nkBNmvT7Qh2rSs47Svc7rNWSfJPMf8Lv",
  "key17": "3kRtWEHMVupWfH657r612swVgEZKtvXZ3SjzDLu5LL3w26U298SWZGX2JhVQgxSe1pKEHNQfBqnpbHPgiwx1yFMp",
  "key18": "4X6MpkNnQbUzupUHbxvfnM96zxkQjRHSu6wzEf3SzFi3cAHHN5p2xLyAcbtyoMBH9j6VYWuht9bx8ooZ3ES6NffX",
  "key19": "5mxX33EFSA14o9sTKUqqsRasXjALebCRRe78UdipzGvTZ51nqY9bFhsiE9rAxuLRzuoV48WkXJH8KpR4e9eVJhMS",
  "key20": "Eja6HfL1Vx5zpnu413n2byTPoSHi9K5XeZxheP5CiJxgCWTcsRKhvfBxU9HCQ9VMBi4HNYy5mhRNDE3xpu9GTFn",
  "key21": "JnAJnAWKyRJcZG9oadgCNRTYN4TfxEFKzEp3GeP4niGtjtNKX6fkaYGfD97Y7AfXiUiEkcKQFpAjcefiJMGQJju",
  "key22": "3CfDKPAS3Z21jNpaAg7hrJodWBBn5o2TertiyEnR5nux4XGFAg9DHHzoYiE6ZBoBVPkp8TQ3G6pNNE2eg5YZHY8K",
  "key23": "4X9MYZe7LC936Sj548Jxt1R6nMGsCbeYzE1h7ewYAdfspc986mPcwMVcykNtjvUGYn1LE69d61Bu67MK5jQpYbUS",
  "key24": "kDrpdua9W1CsfJsfg7C8PcSipz9AWWYK89WMeQFHYaRrKwgacaJC8n5pyjP6s7ZzmZkMHVCNQ2id23orUPss9Cf",
  "key25": "3yoLbxP7H131HNUHdVTKC8Xt2iH1dp2k8yxT3jDENNWqCJcStAd5kDMMCmnfyS6kTs9XzxkjaRrcvyvwbbKr1sGN"
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
