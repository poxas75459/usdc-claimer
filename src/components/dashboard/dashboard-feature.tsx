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
    "4tWiAV5FXnbSmYVEyKWj3WevJTYj3R9CfvNnXFR1UCwfMarX5JhfFM8xhB1hcytt7yB46Zh5djo9oYcDu39FmU2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFQunR9BATjfgsS6TM5JqvpitD4p5UCRxMnRfJ3fDK3VPKrJweG3bDTf9NFeshL5YPpcsumB8AMAF4deq7Njebi",
  "key1": "4vEpYYKca3Pge4SWAtksGpX8gGwainhV1GvropeUTRcWCkUZjaihoKizjnaGEi1SMPGqdL1PWNUgjjYEohcpqHVh",
  "key2": "59ZxsBJXpUR869QBhExyrWoJDyUDky4Vck1PeKNu5oNSQFwPMTpRuvytmG4Vr2KvmW6uTWJqguVf9cpUgWwBLpuT",
  "key3": "3ZTREQGCS9aYwE62BiM5Db1T1M2aXwP2YCtgiAA8WBybeJThEDkJWd5ZHSZQCNag9hVkUaf3sXeWjvKg3Bj8jTXn",
  "key4": "2d51GXxvZQ55zv9CaYtPPgCmLUTXcUnkEer4HBHhcUofrHMCqJEQJ5V6gGv2s9zRnKWXAeupj4FMS6xTfSJeKBA8",
  "key5": "63LExkdL1u5EgZ4NtscqwZTfKHWsdF3g7KSKFJ976QwgLVda72tabYLm1Cvet5efxTkf8bdJmGPwCnvmrLmPtGgJ",
  "key6": "5EbgUhykwnskiz47p1CtTH1U2dEjhWSXP6o4iWAh7ZJXdwfqdXXqmrE41URndqd7jhfchASsN92qqxBDE53YvgFj",
  "key7": "5A1kK6zjBGMEhbjsyM8eDbCCXsDFhUv9agzbmVz5sg2Z2LY6TnKYBKVLf2B4VJGui526Av7xQ7qg7oJovrdNSkZr",
  "key8": "3U1p7FUJFEj2WTXJVAFWVM65qsu1CDF3X3uxvtUy4HGUqd4pGAALBhn6JJxWkE7E4gK48WLVj5WKS2eQVrMq4RBJ",
  "key9": "37mswupPwiU1xoVnpNp3MBtjKWCPhoxzM1pnQTPQJ3AZxNHqdTJwRE8PyH5TdJHEJYf2wuv7arHqtAoNaSCQGWHW",
  "key10": "4LceSan7QnHvcBiRCeubRitFNmFtPZ1TQUMb6VC6DrKSNjGDCp9didqhQLwn67aV2t4cNAGngrh5uoCvo323XqwU",
  "key11": "3TXzExxErVe44y4xqyJrb3jQYRe8yhitRX7rRX6xwkFaKHwG8uAdKXA4KTeg6dbznhhsvZvCVAjWUejfDxDYk7aJ",
  "key12": "5bi5D9LVWP2SbkDSR2rjE7ayr8TvN1MQEPesXrrWyix95UhZHi4JMfbecnv3p4sC6gEs3qHW67ikyrLmjYCdBYpV",
  "key13": "Gd2ViEcMndrbB7sVtAznr6HRMM11RBPVF9nzvDJwHNnifvziYD7f49xXxPPFtFbPUeHTJxR9mScQgK9ft7SKY72",
  "key14": "4KgpLWsTsCn9KwGPixCwX5379q3XjSFywfXTSHSMHdymNGTYq7YhcdzrJSDCtjkm44EqZo7xERKeXZvTxztsWhNF",
  "key15": "3voyugi8NnC7pBAzJKEviYTMngsaWP1zoqh7dVGJaZLMCUvb8SchqyStSu1DYuB355k9PkWHh44UD5cfsb8vjnoR",
  "key16": "5fjcGRPpEteXrxYSuE9b8RerfNengh6hbNuT4yMYaZA1k9psk9wZY4HTXB8VHzAQeuUNvRwCu3wWDnW8orC9QyZT",
  "key17": "5UUGeHRzexD3xzNjnRgsLBvNUoV4bxHUCD1GCLsTJGibK9WL3yWJNGamrR8Y2w88cjuGuh4M8omFxua3zSCCAXAi",
  "key18": "2maNvTAGrUNvtTo4KPgygHPM1Uty5uNS5ur7dT6gZ1iNFEpCRwQZqPhpzbs2JMBYPMTTCF6aDVhyVuhHt29Yf2Dz",
  "key19": "3vRhRsMaGm65XxjgsUnvEZVcApNrk5N3NrwVKimGEFtbSpNLpDTQHCmafRHGN5KZmGmkBCcFvBrrSMpNh1ahxFCo",
  "key20": "4cn8QcCYDKbohJspzsoCm59CLskeZ6z7dACMmCPAwVUkfjrM5BHhDGDbNeftDV7xQzGPfW31PCv63c5KH6HMef1H",
  "key21": "3hHRU4svcm1XutKjeQaAgwgo1VsBmoEUjiWgV84ZLwSN6z75VbRpLNFsoZgfrXMztfqd9177mmxQySBS4MgSsb7d",
  "key22": "5UPd4ZTBmydNEgSxfrFDYEeXT6cK8TijysqyStmbVTLc1F1Z5M6hgEjP5JUfq9q822JvattYXPdomm8aybqk9ViU",
  "key23": "GhAVGZQA8HJimYKn64i6y9ZznQL3aoRXVeTSMhff3m8F94YZgnYqzFA1FT8LBju5Y9aaH8Sb635Zkc5L6Meqavc",
  "key24": "56dEdcqei9YbFkM6dF8dMeRRHzizJGK7SNhUAcFYJqKVQazBbk95ZyK7ZR7HgzPWfFV2bu4qvkgNsXaTMTuYDbMw",
  "key25": "3nPSVkiQPVFewWKH5DiwM6BodUY6rdrEGRWXE2FSAi6m3GLbvL2Y4nkWTLm41MkSGsnB4tS9JnMTpUh9SZgMyC1e",
  "key26": "5bYeDeMHmBE75NyJqMYDcv2DtiUmPt5v9aKm8RJGVugDLEKPUwZ5GsWrZVcn14Q9Hm5VNysREmaSvyZcjpHUaoAA",
  "key27": "UJj3ub9NAtYor9bT1e2jGCJr1WLpYswYmXV7da8HcjqoRtFqAR6bbSbYvDb6Bc8uoYZ9N8JvzBBCigSHwAm9c8p"
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
