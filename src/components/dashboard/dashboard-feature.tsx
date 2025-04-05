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
    "3iK1282Qs44bWVj785Q1aZ1oJ2eVLXcph4zFLi5gNzULQCvFT71qsw3ngVahZqCYdbcL3qfUyeTYYaSY5gvP2d4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TvnmDBjKS3sLDb1SSxmB8TF8qe2CFQraYJQSPesw6agcQuZTZAPvcNNS2af5ZHpU3MGvViV59kWHVp5si2s3ffd",
  "key1": "58iniXUfkRHoyfqUVS6kuBbJ5gZ4C4Kja5i1pHNmSEASaCs7rckQd9kdUkbi6h1g6aNvRMywFBFf2i7wi1Y1SRvh",
  "key2": "5cEb6hdMfEDjgQzWRvGDSUwWDE3YeQd9rBnijBHtmwY9uU6DDPT2Ua7DY8QKnkJVskBTHApEdmqp5iY1cnitXZr",
  "key3": "3eZqrcYPvrnoWwtV76EYqt2CmrQxpPnJicHrYZJQyYx25Z4Fa8Vjb5tfW3PzGagyzt77SddFCgvjTPhdAXjCXpwF",
  "key4": "5bPeUXoZHJAystH7ReqmJV3AUm33ki2Ci2d2tMp4TQppFmsLrzG1SABkLB7SFWfngWNfi1oZSqtqDbnzVmS8KEHC",
  "key5": "4Hdg2mYfs8FLHV524JtfhNYDRjy8a2NMadGBhhHFGgk6VZHjV9axURLGB8J7Kr7y3VqgiS3CYYEWinrYUkaK3vYY",
  "key6": "3JZRpCMWskdGRXWCgp85dYB6zGcqwDKDNrDTvkV3uSRShsVTMZ5BZiTRBr4CFbcVVDckE7SnCdvqkUoRnUyRjr4e",
  "key7": "3JraH2ntqy1Wuhyhm5EvHLHZyfKsMobgMFrcToNSAWSWcpiwbiq5JkiS31sCVxKHZcsN3eu5gNyc2SYEsrBgLdYW",
  "key8": "9MBBgvSPn9GyqhZ93YYJZAdUkdPtiikNAXK8Gno4ttGTapvVhMpUdjtnhnPw256P1iwpkwe9S51GuU6FmZQhvuH",
  "key9": "4Cx32cofmG6ftgYLQnLkA9MSnUkqFvwiPZB4tuC8d9xoBtrq5tx9cYEFvbAw8dDCzmNnerPr255n7THCvBvZxcZt",
  "key10": "3pfeHanAWPKHQb48o7KZ7ASv6j4TnbiN7wBDXYnmizfbTq8UrozCBvzu5Fz5KgU9jLSXNvyn1mFqhsjRsRneLBDe",
  "key11": "cy4DZrX7d5K6ud8jYPACT7fybEdRPKydX8tqozp9jzWTtxRVSavyJ3qVcPks6UcZtT3pWYY25dCkANHVjCFSmDH",
  "key12": "61K93uLGkGWvbf7WJA5PxYwANVvAJx6cmbD4iJa8kRacoNnrJeRyiZDfcVmajkxPDzD1YgcNf1hHzvScxTLWMgKk",
  "key13": "62w8JP2wZyXM9zL1DD6JmdzPtRkBizQixRWMDamhxiFyG6q4z1CegD8EaaMAbRN6dot38UtgXd75DJHWZ6NfuYnD",
  "key14": "4GqS1MPnNn8RUa42RaY3nrKr7vpyBKFQ9cLEdF9SaLVeWonBPYpMBd9t5Qw3VjxFTBD6MVBd6irpgDfdECsPdqxD",
  "key15": "5JwTE4FH1b4XkvCakfBqq6zKTfeDaHFykrDfzUe7B65XKzAVZ4MgP4Zp7y9PD6JoHrsgK2wLAcSfGhWA8xBhzZyP",
  "key16": "4se1bmJXYsaf1sVAjpZPTHWd8SJbKbT6WgR6SSEwDh9KkkNgK97cRi8An5Zo1Ykbq8gh4BEmrdHUvguYF8C1D5tH",
  "key17": "4fLygVrnvweQ3CjH3bUiPGJfhoUsTTEaDEkeyjZevgf7at3Jz34N9qSpDvMfs3L4xSUgXRYk2GRjmLgTJ2ZRV7an",
  "key18": "2fXZgkY3NpDswVTWEEm7eGcgvnMFt7omUpsZ7XQc7ykX7QXt5UoUJHwa89PmnkLLLV6PkymsvCXmtui5dyWvugB9",
  "key19": "2EwvM4299wA6VE47XF1h4oTfBS2J5BuLxKLCJbpDQHNvEh9P8kf3JBVgrMnAf8G4iYtv2rjmqsLuAFbqnQAsPDZx",
  "key20": "5K2XNQqfAozv6KUMK5wCDJp6CKmVqi7hzLfuDGaSc98sMnKCPpz1bLcCLZWGkNTcDAS3AT2QTyVkD5w6FRRmKXkA",
  "key21": "2QgcY2bv4dTVMaHE4EXHACdYn6Fu6AdzigGY97hN1bBb89hi2rei38Hr6kftNscuUv2DEb5fNhS2p9Jw3FZrNUH2",
  "key22": "SvcSyqRLxuHzNHSuaz2q8EdYpBF2rWofKijqDEv5SpXQM7P66uv8GZd32dotGGFpjuhMoTBxAcuUmv7Jz4t1xah",
  "key23": "5MCKd3vaMrNeDU35NXSjdMCe4ehvWknQJzoqm21dLBjjYN5sni6KzgeF4qsA7gETBhDp9UwhD7mrLhQaTPXCsSvo",
  "key24": "4v53YW9dwanSNBHzHVdAZ8wmPpg4FjeMWQVh8uRDqVfehFsHntN81jdiwnTwAV5fp6hs7tGXy8vAHuokrC6sN8v7",
  "key25": "3UDHSjsrvJysRerftLtfHGyro3nbdymSq98D4R7Ej5UYYkoYVbgtmzZg6CjtWkXNeMTaD6dxpQkK7Cf55WMCeWna",
  "key26": "4ipegJQaAdFmD8pQGxTghbqsrDHagBLdruzfJEzsANvcrfTq2VEbKXkqZek5BeRe9rCsFjWvXanTcwJ88p2EdkP3",
  "key27": "468vY2gx27kZCwb6XfEXvebNDfkAksEBN1AXL4AhvKAFGvQAza9uUxtXaxJTWDkSD2doLXXmHohM5HNmR365aD8E",
  "key28": "66yt6fm4qDRygVQHrZA2VdrzVzv4vB2vuty7gxrXyS3HBjhwMX8jRATaEQtAzUh5EYbnkP7ESyfU91qyRYiqtj2K",
  "key29": "5pc26pbJEJ2DAN56UzubaAiCbLLyHfMkrvdC1W9nao8i7ZG3ssu1iR5DgAcFFqrx23ropM7nuE4sm6XvFwjeJduM",
  "key30": "568D1RgGM5UenQeR6V3CWxKXmdGVXSZywyd9ssoBWzQtXXvuNa9VFke2RVXYNgQJgA4cV9txnrgu5XiS5uUVHXjP",
  "key31": "2vnTV8gxBe242XU7r787fi3wS2dKdLeFtaBoJw4Aco7CcDCEjNr25V4LjmpqTSMufCH7tD3nQPSMTy5YDeccw5YU",
  "key32": "3b6GSWqmxWB8qrSHS4sJgdC93C5sUHgHvCzLa8GUxoze9UJ9XgGF15dTp4hSdPScxdmRJSLFWcUGMH8DsHXYdKoQ",
  "key33": "4qT55NesHya9Ca29SPeiw6QUpxKfyvrCsUeoJPy5UuiB89dprELJDENu8Be2dhwEXvPa8BbMU8DpiFMrs31XoLc8",
  "key34": "NBwdogBFcZV7BBjrm7QHEEonWEMUcHy3UJhWqxt9ZEKoro6jdtpKAjjLk8c232wBtethrTkR5e6CwyXtB9x3Cuw"
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
