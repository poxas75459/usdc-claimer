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
    "25VriuQ49eCVbMMTGFo6XYjSHFojLQ9drqd74HHSfg6DZGt9zusLJj1zviz2saESJ6P9i4Pwkg4bNg5XBKtuLWyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quwmrBKTPieeF4v1pHDMukyxzHqUkkqowTf4SQRNGCAXiAixGfBiPBPHALppyvAvvGKKUSWH2g1s7b4CjmTSvTF",
  "key1": "62Co3LZWX7cMAzZ4MmWQrec19MdZNzzXSSbcUv3tjYZgNJnH6z9DErqfATZh3YhoGZj7kfdKKTSnPZakFWWbRMye",
  "key2": "5BBE8QybrFb2znFuBrmz3rsjBcTSfFA3SzqZvuzFPMn6XdsbnAj2735eshHgCXmEin1ZtyjE8HSPkcXT6dNVuwzt",
  "key3": "kd8b7EVW8cU2djg3wAZK8aFyHV46YAGj65Vqr565NYpeLbE5WpnhNMGmraDQoP9nhU9QbybMPYVK3sdGBJeSziR",
  "key4": "5fpv2dWmDc1V7e1yvJn5M4Tk2V6pAQ57cUjHKHuAmaoYP9HBVUfAAYwA1VRCbXGjcCk9K7AiwGwz43Wx5ySWpuCN",
  "key5": "vFGM4aNwb5f3fDgLPQehc5f84tLUL6fa5BMr3Zu8aRL8nQo2XVJ2ur9UAKSovPCJcymVZyehuh7X74K2ks9B6X2",
  "key6": "4QFQaZHoi1NT8A9fMWDUfKhuSZX3yvopwBDJJafmMiJ6cf2fdyDj9Duy4y5nUdudoSCazDRan8ucEX8jvqHTrLs4",
  "key7": "4Hz7nu8NAj2YjgMgXFaojXwLAXJjm13Q9ERviH86KVFESUfeoP3qGGJ2RYRk3tcEiyVxyiUnAWsFxxvR6zaYMego",
  "key8": "4MU3tA1giWqgnGobpxdimRMaq2pSgifQSTyCEuVvYwWoud9B4Uk5EzzWbBcUfnFcCd4Xibs2J6C9wS9qZJhh6Y1U",
  "key9": "55xtkXnpF2zQMK8XV9j6F1DpvABvzU4UP1TNbQGFSt3QPT75LzNjssTxirszTFAHvXbdoiYmYab9QvM3kL99NHpi",
  "key10": "3voPECSxNdnHiuyyGP8xQnT9s6ai39EsThsRAJ3K4KRF5jsVb5p16RixfowzgBf5hTgVUbgsAMpp3PvFpjCnJo2N",
  "key11": "3tafWHmCzzqFQLF8BxBgZHvS2ttVFaVVdjfCnxQEsBEaofh1wb31d2jN7bpaBiF4PyjWGPbm3iqD9NXGwHtjHgxt",
  "key12": "5h8jH7Q5VByp2RozpbXHYTQjeUje5h2UNXtPwPKowgknSnvzyGMTquhH1WoNgcoY9S2P6C4tSrxC5XDk9hf4WTGv",
  "key13": "5ugmzrGX3LQMLG5xeFneEe5fyvkPK7a6aQsikWZkRdfyWKMCRPhrs1rPZWVupHnK9SDNXy4JCxVPg38xq6cCidJ3",
  "key14": "5vLpzUpjvsDUN7wDHKHs6waTRa9JzZGsWPuZba6E8s8kxJFuGLCYiavGiK2QVqsnEPdVKvJR8HJeh1euLdnsRRZY",
  "key15": "tG1iBGdfHvg5suYpQBCJrLQS4ZQfJWX74tFQxM86dJjFwiKfmPZnVBP6gFCY9qM7nGvPBskXkWmu7Ex3P4vcLaR",
  "key16": "RtbKZhSNsDv4zaavm2mjS7XnGWgTjU1YZgSwpfzAcbAfMajN1Vhb8XKmsrJuv8j46j2w6X68FXm3LfQNfYrRsh9",
  "key17": "dwDjnENbJtnhENJE33y88cEYoVDBF7zLaDiGiVf2F9i8EtysQHrf7MTxn4LxPgUSNYxgxs2HzptLq6vCmUWbcKx",
  "key18": "5XCdHdCRH3sesHsThpWZfb7QYcfNZV4jyStXgLMAAsbKX8i8wYGkgHwfNTENuykzR1iJQdLVZMqstmntNb3DJpiD",
  "key19": "3PvC3F7NM6wCgcXR4mXjE8zXNb95F7s1G5JufQq91Yzg85rERjWodhTbRk5HeDjG5jjbsP1Z8vSUwHbFH2Ldws3S",
  "key20": "3g8uxEcZYo5iJGvubhfa5CZ7mfvy1wiQLNikB1Q7FeimdjD92gRwaXPRZD9ioEc7Aj8U9ejBszJyBpBtT13FrefR",
  "key21": "3uocmUxSdGnW8Tj2jS9zMHie2EUXr9rogDdNfPSWe5xY3u4jmZXgg2EYboGgAbEecERpPKcD3SXhxsk5JwsLYh1g",
  "key22": "5ikXXx1jtNEPNnbWYEAVwTeSuJzkq3a1z462w7JLJYQ8ECSSeCgHhCE1WBRYtitKhF4AouRrbaYZoufATcizQxjr",
  "key23": "GVWAH56oXCEdC8JPkgTPVFMkaqkqzisgV97qgei983t7PLgpwmugjPZ4ZCGDJGG23dQGJjQgqTHYJuQx8ZDLzYY",
  "key24": "HYLeCCoeDTd3rgktSTajij8AxXpcKu4u4emfoLHkK7yg4zsLT1V7yvUuwpVkR87MkYGGue3ZTgMVEqeUaucp3ZD",
  "key25": "4HmwBh3ZTc2jpexZnzM1cST9oinyv96Hr4ocXVPtbnYotVidA5ay8GE62NNecDUYtZA8NXt9TRea3AHwLfMAnacD",
  "key26": "3jzoRBCTcHNvaZTkCx4m8sQsNCyRKNhBxzBZptxAjbAQvuLDzeDc6pyhMhx2wc2RTcQgyABJ1r5FDLb774SkQFkM",
  "key27": "9ZCeDTW66a7pfpkDy9U2QELX14uaryJirboSPcaJoRQk2Qvuo8QCKQaFSkXEJShra8pP7PZ8PKHARPhhzGT5pgV",
  "key28": "2Lynm9DuqBzQjfrZYmoqq48EkKxhPkbnMW6h4BNVp5W3EqEmbhwkaaLJLoaRQ9H7XCszXPfcW7f18q51k6CjP9pJ",
  "key29": "5Pt2YqQvZAQvzMSebBbymdgKd3Xg7pXHqAJNLDJbA51KLjqnAKBJkvsnRC8jdtiHHEwoGyErcWWMv6KBjkvi5RjJ",
  "key30": "LrucgVkkVw5sGK49oAuBfamjzwvgC2XsPCLmBmK1eVoonXRMULghV1Gi7Kmj9UZnrhrGfayrwYePRqpzStfAxAA",
  "key31": "AZWYCREKNT8p2AZQii2MAnUSp2R6rPvp1mnAu15sMyDbwmsfZqHTV2ScDEHb1biWLP8AHQw8RaejTKSfHuPhaAi",
  "key32": "3orsmzUCkpWYv3EvRyKNF5RBj5hRxiUted8N3LVk1YmxQ4KPnq2z4y37y29cggLRpH4bUcVJC4MctyGJ4XcgDVxJ",
  "key33": "5WTAmkDMRcjCVwxpdheBdef5tmNCc2Q8RQ2iru5mwsski9J93mxqNP2FcpeEPc71YyDnWo4QW6V5YAUKa4UodU1D"
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
