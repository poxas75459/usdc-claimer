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
    "5PJoJnd7brzsPsF4wdBuv17EfbiiJpj67qq1YcMZg2p81X2kzy8SgBoXi3UZUsVYfnZwNUGm3FmToZYroR4awn7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8JnYb9WwdoaKoRYfXJW4RRZuwQyEWGYfNoqZoSf4yeNWJfwjr8MMQQzhCLdMhuY8bqhv5WAdXFu2S7jSW3RH4W",
  "key1": "6rg4jP7d9QfwcQZY1rAEKXpKo9HRgL9teEpz9dgwwLBMqM7BNzWEALYre6rsZd8TyFqG764BzdVbFx3jo7ybSiA",
  "key2": "2L9Xx8bQzexhLi7XFJAyjY9FvqcTZQVzPDmhc8hq9JTC2kYkUuqLUfHyXQhYxXFaoPF1hTJKLmYiyZBHytCCyoWX",
  "key3": "5UkSRW8LUEPnaPi7kKnFX6qzpzo96Hc3i7L11FathTkuxyi5xbxBhcPdvpyXtS249qpqaETKjA8wfriWgajWuxoG",
  "key4": "3vH6g6Vc76Lu5CitGZgZT15NfWGb7GJLMN7Q23KycsS4Uy84rcZCEwEgym8gVpCZ6h2P13J5dcogwt2jRibjtZpi",
  "key5": "3sZG3RKeRaNfP4cJP3o1XAM7f79TByKZRf2ydzCY9zjKUC1MwrdpJwRanoB91VBKvgf7nNGCWtrMqo1PphBJeUM4",
  "key6": "iHTaEZTozTxeKYteJudKpEJT7hwsi9vdcUx6MeJN74Ayjrmz583Ho3qmHzmYd4eFb7cXmQiriNdhxLJPLF2wbBg",
  "key7": "4YiEULqWdnWv5Aam7hrPa2M5NuBPTMNLJtziGyuN3XFwtBzqCqFpd3xm8dGBm5gtiYt79JTyA1K6nz2Fa7FA3qV1",
  "key8": "oWHptCXmfjre4niG14C8LewJR9tB7eBG8wmpMSmeBEA4MQ9N64vng9bKtJGGBT6JL7eMKCS4rdyB3getULf1Fnv",
  "key9": "4P7imSSw1YV7s8nVUoAEGkQpn5PrihVvaqKYNvzc1JuD3rZdMmj2Bkv9h4XdVSUF4RVhgq3rjZYe3mbsERDGk6ka",
  "key10": "2ASzXvJrrzHd7nSvSFhirgdxZcB7bqwAGGyauv5xqUMRgYPJYD7Lc22FB3hXEHMzjsAnZejXApU5uUjowSr1qASy",
  "key11": "5KmsDVG3uMkQdTWFbLEwN9e93VLQd8p9z77BXWRoqZCv1Y9X3PSH8eAbuqTCyJd5png5SqtmB9N3MWDqzSeW4DrB",
  "key12": "4pEETKACjaKPWQTjfk7E87y5v4HRf664wa7dcwvokA64sh8zdxkpdGWsb1EAcpacQKzsHJrZZSDUEB6ouVtRgKMj",
  "key13": "RgwTWWmthRDDRFEBa9XcczcnauU8iKckZR9NVkL6piTkVEa4P88dnTzzY1LhiLJB8YgNBBcTA46cH7kHXtNAbRT",
  "key14": "hgGzpBKe8b3c4uFCgjhTXqELpBW1QK4GapsZN6gGtTPoVnz1VwgBipDxAvy2sZnbQg8h3prBrDrcG4d39SNc2cU",
  "key15": "3XB2Dw6jLuAhBKqVezJURmaamhmXjcfY6tFfd32K6gq5GVvcskEDkw46YMoLWu9ATzBn7TRGfEPUabdKREt8jtRB",
  "key16": "2LuqEGX7aV8CAqGSruMgYWMQhrt35N9UkZxgfftGWmFQKYHFeafd1CBhRF7paPpapRkBHfviZMg7wWdhHgAafeCn",
  "key17": "5MEyhKQm3d64VZSXu9uo1ifVd3cWTBGRf3F8Xy63AwbKs7FGWTDaJydwvSW78ZZJdcbgNvuJC7cdVsVt3XrqcQcK",
  "key18": "4Gz7D7r5aivu1pFCCu57iCp38mXJPLTTori5DShAYcnhqetZHxXuzzsQbf7tcU44hpjMVBWN93ER9s98UAUuHQB8",
  "key19": "42gCFeCqquiQBnHWJdrE58khb6LCvye878w78anUgE7j1vzAu2EyHGupNZpwMf2YAPPrTKsYJeFS1EWTdPKCvxof",
  "key20": "5KGrgY8biTjJNL9VYBGWukT51Se89LjiDbsc7UyfyJpqaiDasEpxzj78Ud2aGKp35gR17bZYufJgcBiFrgGUdnFs",
  "key21": "3ynewTKaj1G4rn32oCEEQXaFoR37ggv4H1gucUmCn9KeNK4kU4BuTJRL97D6aQqZwEhzy8LyYwo6kNEVNCrE9qrP",
  "key22": "5Xu9GKZbuYTtyGBnRigCvsvozFZbp4Gjji9kn6CGmBpbbM1btb2L7kZPSPozejBEz6D92pHWKHcbv7HH9ixZ9uoR",
  "key23": "62hn59CNza7aXrtnmqtYvMRyTx8gzFXwSP52etCdjfGXbsDnGirXH5wvP1D6f8ujupPgNXTtJWLXCnnUdc4J6Q35",
  "key24": "3tdNXJTYo76QkZkqvFaU2e6iyQq6bDpHo9uyHqynk6yiwL5pdh4G62sy8SZuG8YJ2igyFt6s2TpAiTSbbQjsmHHV",
  "key25": "2YMHL67CkjM467V8cuffkyv7BZwCtnutZg7LVEwgiMJCNa7qmg5nnFciC823x5UZtv7CeBAEx6BBYZjoySHkWmdX"
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
