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
    "5C9vcT9D6iGCUgDKcJMjK3w6jJpY2TyrQH5NUHRUgNrcwWR8WNpQtwKq6mH9Lu1gRCgdwapUj3y5YM67CiSceKpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iArR3zu8UMMdAKAC3jgiCai1tTgHkKGvnANKHUoBkABQ6KU2bGdiGyWjTbrwmsvVYEkmoAhDu6DxSmRCbtYqheT",
  "key1": "41k3KmZV7VLmcrueZgWieHE2qfMvjiyPMu3JCkySCDthAEC9E2UqoYiqEoWZKUuaMKaePKBGLkh7XiExHD7Cviqb",
  "key2": "55LxPQnxUXfKDeVt7QXUNFP9fiSSrf9zUrksghqV7nJXhmSqWdU14wETQpqY2XnqLvQ8trWYfqLHFy6EVSTaEzfW",
  "key3": "4L5BFLsW4EgLHLooRj6AuTkMr3CiandtEf3tDGXz1bftzsPiXN6UFccu6MVYb7nJv7CAKB6aKHta7Ww4wjRbgpJo",
  "key4": "5HJvyeDBWj6vTs7foRBGBJEYupnaoGZDaDk6ePTnkcUab7SEyN3VQJmZaFMmh1iskoiTTaB8Vgvrfw2GBzXAt3GG",
  "key5": "5GSU1FBULkcqJv6zgcJK3NGv4uzy6e6xCvnuqTm2PWTC1Q2ck6qk21EFzedHYM4xfdn69MAgVtjjt1SDXLKpb8Vu",
  "key6": "jxTuL9hPDFmaxoDCgjkLJL7px4aqXgpEWgezSgW5vxokYRiqJwMLDrpWeRYLLqpT1ix6pJdeoCQ8a7i56mtmWMp",
  "key7": "2N51ak3pEodr8yPheXTTc4d1EDvULbWZpfA8n5RQdmf648dnKocZ255jLLducwVKjgG72Lx7pARsAgDjzj6dK2Rp",
  "key8": "467uU5iNyXJZd2h8XNs9rP5HmR8kzdP23FLkS7K9shaZhPkMQDViK5nFERXvrWMPR4TPKn8Ybx5da3EiNTxfzkqE",
  "key9": "66jPFz8WnFXfj2kAe5uaRZSgNj8zb9CuEzgy8a4q5k5obn9Tzvpkfga6Mh9WdK4tzfThnehL4mkStjzzHCjA5cwA",
  "key10": "2R721AGjMArhs2MK92CyKvijVGhbXsHGxsvg434XN6aSqMUM18fNj6KRuDTbomh9fEBjSCUVokKqgCaWfyx2Knid",
  "key11": "2Kfktj4o2U2tudoZo5vZovR5aNuRj7VET93uiRKroexaFKYapbmvFZqe8tCXSLKun7HQP5poYuE21dHkxGwBoSzs",
  "key12": "3ADbWRTt7KntfTsXJLkJsEU5iGD5kjiEbiCR4jjb8UxwtpQ5AQtoW4Q3fQbYpsYgKkAJ1m2hN985CAygjxbo4VPP",
  "key13": "4UMocMpk4iyam4ZsGNszVzcPSJv1PGCUhSs5EUj8F2tT9f3dgVc5wydp3mszupuF6UFADhLeauAVAVqho53qGuFE",
  "key14": "4twhfFTYGDFi6aNGNtwuEwbwWczCkNG69bpzC3t6Bh7HWMhYN3ABpU9eQp4eXC2SLjLGEMzu28YkNVETe8Qp8s2k",
  "key15": "2RqxEXQeoHk6s8jQZdCMf4bushZYDFavj1A7AyN2TA3RG5izHpctbxj4wFqfL4SNhW44cEy5BcuBgxat2FYd9dTT",
  "key16": "5jvQxQBsaFDgTTR7TsNLykcPGz7TSyon2RV8QWVrKeknzVw9bsdJMGvyZo4n22SwQZbjoHDHqBtyusf2cqZDvtRp",
  "key17": "2hereHkRvp4dCM7WKM5FQq1LFGQTsGmekVgKobVQnSu1YA6V2BT4n2erjL5aQQHHvwwqD796G6nD1BRyYgJepefy",
  "key18": "35yeRm8MMm343VSUBBZZ37Jt7f1CAZPinwsFVMcGFukvKyJBD3zo26bStJBtkQDUbSNWR6bNWiAeyZyGMkisGPvg",
  "key19": "3bon19c73ajkMeNSj7tZ73VAkrfapgHWi82RmdCZPxS81vpR2wXw4yh2h1SUK79Nm7ZBeWC2ETzni7n9vz7uoa2F",
  "key20": "cxFcKs35LZ4qk5JTPfbYc7ybcZYhMh12AZ8nkj4affv5koyBTkDM3W79mXWwNp9ZZUmvKw97Zcvp4VSWPF9NMKj",
  "key21": "ktdnFZUfmxLKz2ZMZf2jASrpaRFVD39y3xoVGGMBTaDKxNMdPLYGbxZ89C6ZBzpUE8XCpyGvir5DEveDejiBjVM",
  "key22": "3e6Z9vUgpCNDYfs1HCuuJqgwfTjbBWLYpEUDk6KbhKBPiasKxxPAixbHwo2PGuSHyB21mvGVcTFmfhcE8pVpAbFW",
  "key23": "U8Djzk2Wtc4CDFaQnqAfggqLVh1qQXvZaHz1U3yzAA2hzh4HTFET25AYAyZ9H56FLQ1GYSLfnH3szXU369BTk52",
  "key24": "2DdrgyK49nBkNQj1hSkdXW24PnwaVPNReKgGUSETJgZkksajmMsaC9y8XvR57fQSphLZV1JTMrveJ3WKqNgjmdWA"
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
