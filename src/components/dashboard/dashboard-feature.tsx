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
    "34mgRoEMZmTkyVjWdSmMS5FhqmxCNGirtceuLRj3YsnPTSgUVyTaMGqU8T6Sjb5mwHNrqNgPsedHkZ6rMBMegyJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u5GpvK9UWTT14iZ7oUeqvuRLBLsT14XKyuhozkFhi4crZ1LjCifyjqjhPJypdpZq7dTH7RxPjFQ8NYkxoMmKN9t",
  "key1": "5uFodFtgpz497nhTFvt9L79ni4ynk571Ndz882rAsPDhqo6pvvTmVVEw9Bjfb7sgNzhhmh6HkKkPyztKb8jSnVzJ",
  "key2": "57jEXc2MhqoxCuVCR9wsCReuwjKtXfxfPKMfEWsHBwPWXnXER7XQJDWooE8NpPXpbgPXhoo87qMZA7GQ8dnN1jPk",
  "key3": "3uHmt3NuEwnrq1EenqQ5yDp6EZQ4ABHNhrPX1QKz4ufe8mCt883SsnWSYREKYSo6r6ikTVnpNXk29NyqJgpsAr6s",
  "key4": "3x5DjPN8w4wcVCdjSksB1bcpgt1yiNzh7dG99v8krGYnCUpt1tT5hVef8tRYWm8NkHfTQFfdVxxxrsyaHGuAM7aK",
  "key5": "2akWJpAKfVqec6ZsrF5Lm621qs1H57wUuHyo9zVrRjX4qdFq6w2phj5uHawU9YNsX3gNcxb1Tim7zfwoyt7WiMcn",
  "key6": "VygmTQc1G9PorwsQiF1WXQSNP48WprUr9K9vHsZPw1kvnQpWg31P5CZEBwvf7zJinR9gwHp9gLPDsU2uEMccjrW",
  "key7": "5bsGSTARZ2FgbPp3bx9NC8xGdp9V8FqEzLMTRbppF53gUsT3izb3yPBXfe65xnDNoVXJnqwzfU8tXsX6WRHuR6BQ",
  "key8": "5MBFxKjVevXtNUSRM9R9he7jxSDVfToifybjrxx4LJynNqX7ZxUzLpXZawq6SCmE1ToY1PfLKqjW61soNup4NYMk",
  "key9": "2X2f9TPKtwLLByoMYJU4HbrWEdBxULeEbxRdwoMm9DA46RxWUUjczxf22mppvZ7X97oTSfZpAq3SYucVjMMsXSjy",
  "key10": "Fb1UmUzqw2Agwdd8WeutfUmPbo2zu1r16wfuycxFcg8XyQKiSFcrbsFGGCEXUQSUv4dgGbPKTUzjKQavjMPQHsd",
  "key11": "56QdUgacbfqBgYCtfx6wPSsLsZqGx4wRXAjBuEcEhC7enHPQQKWqM4zpvimECyheBthhoQkuSUvuGqcuHa9U4ByR",
  "key12": "zs79bjGjEuFAmJiFxj972znvDfTnsu3fBEeFi8q17MMpRbMrbX94VsktMyWYL4CGo5jP9VizKEnyTXuJiiLB21A",
  "key13": "5z4dAwxduYTE3nPowhhRGvSa98X3Qd2dZcuyBp7rLUp2wki9e2mCLxUoH5WwF3CQuHEHkQQaT7k6uFfDQNzbJbt6",
  "key14": "4rfC22U7vhzD1gEkTJtyUkzqeFKZXGE9SkFfC6sRxZxMnA3MxTXxbhX3VpBnvZ1PaZ5gAqTpu9EffqYjxfuRUgZC",
  "key15": "57KR9Mtei3Vgf1qSLT45s7mS6jEVqiAm6yiTC7sdh1MBSX4Gnb4rkiXuUya9TxS2tFQQeyQaVkfqSrTAgamDoqgj",
  "key16": "56DrXppf1SV3bGemNtEKBhKDjcvna2um9BZ1qS2cRGe1qHeUHdMb1x3CYzZy6yWBx3CDotZQdnAn4ZiGjHfFtmYX",
  "key17": "5cxVZwK5TnphrV1hSwza2aH2nvhqzPuGz3cJi8ztDaanVT6sjHeKXENyfCzsr8XJKE1YVucnir7swg68werDbujr",
  "key18": "5yPqHygmVjaNCndFoUeVzdauQpgWk3yXFnk4vHpRARFovdsKk3PbjVguDubJNaFMYhRz9DoxkkJ1tg7VCx5excds",
  "key19": "3UnbyMboKB3GgZexYiVoPpsJZnZ4eVZQTPRCWVnq4f5EE2ApXaQ1W6FiYsduxcfZGEhE6FwK5S3JtZGcjukGh5hY",
  "key20": "2s71BcXQiGN49EZ61fpZRR72FGpNo9GMAXqxhEPgenktriV1nhF4Qr9zXNsUpwoh8EFaVFMwR94sf7sZX8Pc2mXr",
  "key21": "s6JCZ15PnKGLG6WNgsWNrGGBJBP1EGdS4Gb6ou92kLyGKEsQ9QH7qEjKeaBQtieF7sAseVE6uGMzDs9hnzrgiX2",
  "key22": "5WJNn2hWVY5hWZBhqRPVizqSvgqxVtFsVdhYfU3Gj6Tj3bGm7fFsWLEVUFNYwQNnwyunYjTwxdEJD9V4TFWrqDWq",
  "key23": "3hR9ZtXGDLmL6HoqJande46QppEvibESRt5a1G3LfZpWiywPT23CP6uTTPfMhjzaeHc1hKLSFCxreYf6fn9PC89K",
  "key24": "4rfYhYnwXqCNwjZApeTqUCCT9Xwu5gnTj5vKviT77u3rgU54xTy7FXjz8zsGZ1mJkk3hLVvNuZPEHeuhebWid9Li",
  "key25": "yFmcoxFSTbcjbe9nGbJaCasQtsmXUqjFv7VirqrrJ1XYvHju69SWJE75GVeY7UPY8pFJ44o8tfeaSk2J2tRbAjk",
  "key26": "2xmKgR2iVbF3D75VcjZe4TRr5WmXW7w9rmJ5EiKaYbthdqHWkyKS4T8LJxGsTcPgyc4TRVkX5UgMPabSbJFnBGL9"
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
