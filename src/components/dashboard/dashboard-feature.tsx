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
    "2FGSfuo4nyMXtNDPr23rSr6YzEAPc7MqCFXznjPGzRLrbDXY1b5sVh2P3cm3oMpM9A6dQBh4zWpGut59brkAbFf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Rd6qyAg4R2ApArfQXRoT2psBPapLbJnvK1a1uX2gDrgVNcCqTb1tSsJRhGS7Bb8hzXxvuTqRe1xg5sHxpMBou4",
  "key1": "3DdYsQ4gVAWZB446wJesbFWe9XRYRHtonNoQrdZbJFwDmpF1SQaBcMLDPPBex72wuKZiLaZyrAXWkJ9aFSjNqoMZ",
  "key2": "GE7AWSUmsMA3GXHFcgDHnpzSXqmRYCm1K5BieoHrTJfwSNmu9kXjzbyK9fVz961B7JXcysV5Qz6eP2jhLeAxnu4",
  "key3": "4iJbi9CwGkRqxPEoPq7bvtuHEn5et5mVS3PMbu9EviXrLdCKKXXWzw7eFpfmidmQwbEaQYvxKDbY1DUL8fXaSoj6",
  "key4": "2tCPXRJMeLLM5Yc6PmPZrdwJ7k27j6qdu7v85iXrBX7ViJ9CawuM5eAn6sdidfRdgyzbUmr1kmpUaYio9xsn1avx",
  "key5": "3kDNA9hwyNrJ5FUgQbnRCTAiEqV6bXcz7z2K6WDHyjwPRv7yxdt2vYuhEALDAQgkFnCp3DPy5VQaefhQSKCu5cwf",
  "key6": "24dF5B6jGT6kPXxN9zkbsJ8XFudgzwqHkhx24CmSh3Zr6gnntrqQ985YToHcnW6J7SWpB26A3wxjgrmGQcSUR4yB",
  "key7": "4TFqiivREBwEdjPAvWdXVW7AsGfbNhRx3ZdybgE65v4BM8FhAnpqX18X7n6sh6k7pp9ByQ112UH1edbG4cqoSxR1",
  "key8": "2WAQ8edvtgjWEUSYzSJJrdpRvzT111FfLbRsc1z6f56K5kycaLGh6xLnSzqtBnYQWFfW6wBdvg51UbVcKuKQ15Ud",
  "key9": "3TxW2mAenMHmWqgCTWd9jm7x3qirJoj9sqLJAFWXTrnUeovUv85aoWNj21RwppwLoX9Y3PnurWQ5V3CHfMtpLce5",
  "key10": "5JHNd3UcgQyLP6LutxKbPrDUcagH2ACRD2UYL5mENBpGrwsBttnM4zTRSyJG6KAyF2QEcanMqcfi1JY2hz14dv1J",
  "key11": "B24xQgJGxghcWDuuHTgmw8Di1EKF7VZc6twdSXpRT3sUnF7A3aYiWgwFL2uRLVjdanCh1u5J4BKD1aN6inH6yUP",
  "key12": "XYdtiq9ZMBZBNU1RSRJR4tAAuzFPpR44yRUm91RxutjJBjtNdvBNm8kbwBBpudsDRwpnGdT4CwPfeLjJQKsQvAi",
  "key13": "4PK92bFyGcdQsbMGDMoAEqnfNaXQfCEXmHV9FRNB798wnYfA6MyG3wLV8jTndrwRboFekqvbut2GCUBYs6s1PXLE",
  "key14": "2oBFuBtPTR128CnTZcVcAmmPE1gdfMMcmH4dH6S1pJTLj7EZv9vcpkrYg1f6UpcrywFZywJEim7rHeDtiFshEwbW",
  "key15": "3dAqmz3zyw2RA3xZKXEoQ887VDLK4n8ot5QeFucCbqGHMLYX2cMaDXh4FiVtVGaTkuQhVyL64DoGH6pEC9xqj6DH",
  "key16": "55ehSiAsPRCgCjeGstHM7SQ2N3fwsDRwP4i2wEEt79vG81KsCeg5NJyDkYkmxXBjo5muTRyEiZbsbiXgvTTod5L3",
  "key17": "5qpf9UJKuK3FNXsRHLZZv6yBKaP1AhdwctYg5ioDTjidtq566HNZ6aiwYDUCJfJE1JJjoYmLj8cMmyJ13Fo59VNm",
  "key18": "2XtiUwJ1q2UdkX8bDpCUz5mZAo5oDjA58qn1FhLGC9x4bRKjqmHMhEasexJmyUGig9mFLC4vi3kysJe98kWPLyWm",
  "key19": "3E7AKyPGUkZ9uzV4qaspM3wnbQp3yYhbZK9BeZ1xMvXpr7m8Ptm6am7r5bERodLTqDQptZ2gXj32cJgmYenk2wUj",
  "key20": "2zpXWKc6Mg512SvRyGBJnUNHLNnnymjV6UZWkJ7PPpk6ady4cFtaEpyPcn7CBggW84vLSaZsXiUWfLkz78ZERjaU",
  "key21": "2i6A1YeS7FPvGKzvuax2pMaoT7M3Fvu1Gary4VV1bswuCKrBfNXC97X8Uy3yrieP7c2zkqDpHrhHVEYmu8gVzyKP",
  "key22": "5tzMQ8FC3Mmk6mjPqTCADD8GdCZrkY36w4HwAaj934AG2vrWVVLAyf2v3wnqG7t7xWPcWPSF8JfuHxGfKBBUj6Z1",
  "key23": "4JMBQ5MxojuWsGwn2STDrTGBGzeFHNq5ufZTmqbrFsjPev6oSxDBgZcgbVRJD3TmycZeyANvnM3aNvx2ujgU6ePh",
  "key24": "5B8eHddHbed2p2uYz1dvfwssLYRF1H2BXKrh2kKNvhRtiaLpp85KNq9xSjVo99mB525f5GFKVV229honpxYk3eCT",
  "key25": "RjTyPnASMtFWXbTgVre9esmgog4jFGyDdC4nX3cztuJkE3uahc3UJHE4vZbrXRBgqmFojbSMBpFkQs3eEEz9y5d",
  "key26": "2nJafsNzsqmBToimgSbVUQTVHSpxonEpuBzii8SsgA9jBGbLsAUoncw6ua6EADBDnDmt7mwSHzzbJ4YLRHaELbiF",
  "key27": "TP4fTy2TUpAPLepEC955tiXttGP1NuEPLrxhcjep8YWKTjZBTDNZcivQmn9JqgBBxEC9jiEkUzHGGCW17MKy9x1",
  "key28": "4u4KaD6E8hkjK58o3ToLtEVnMAbuvzAp7W1e8vHpxNpz5r8hmBLdanXgngS92zMQAhQFeShGcfvy1iCJX3UjXKpJ",
  "key29": "oyyUUi5GJEQuxXqULYCe5AUnroJaLnVfoGxEb8doxV9RFdYSj1feZz26XCpnjkTEWQVoset7FUicaGNH9hcqxf3",
  "key30": "5ko9miVMjLYrbCE4pPvHoPgwH91RDyQfYD1d5yKUrTSTBWTdTE8r65FhK3p8b48KX2rxBprK89eYN5cxvax4d6xJ",
  "key31": "2nBRxs3YkRb56yXKCWANrzeyAtvs1rQAfXLU82hWWehVyabN5CwzRBND76n8qUpdNLaF2C8aUe1rNdTwAfib7JnL",
  "key32": "3xEvkSwuRQiLMJBxZfBpM45S75jtmuvPdPBM2jnq9M9RKPCM8SFrc8H8iHiPvg8YgfGfRFBCkv676u5816NtTPMJ",
  "key33": "4LCZ7wu8W5ESBMXcrkKsC4ho12zQno3DZca7jE1L4W62TAGxhueSa7LpkfbhX8rkc6y8EviFiT4Es3HfkSDvqwYK",
  "key34": "4aJ3JvFGr2su63KZ6PMgNjKeBAnMXaGKp9reHnKKL9YkU83NRf11R1Kr3bVj8cqpsZPwMEU1FWmBjqb5kvg31LAs",
  "key35": "5aGi6i98anYfu1TKqUPkQGRZasPVmSDThN3a5zWfpQsDPWVR7YTChXbRiascc9PuBaZL6FzFQMfC3VTAvsamhcxF",
  "key36": "b5xZPhJSnsk2yyLmbP9n4FZpaHBXVfPxb1XQxSjYabQuBu6cWkb9s842ZB8ktrFLkTn99WtH6D3BKaLioBE9yrg",
  "key37": "J9a79kUA1TNZgP2VShjL7uMaondmBgjuA1dJYEy4toYyS9AXemK3sMdrB9UFFBn4deaytuWCSyognkm6PMK1kSS",
  "key38": "27cs3491DHAy8xCisBL8SftS193khxB9a38DkkEVuE7FN8fbA3V3YqQ3de1jWH5oScWKw8ECuMR8EWhVgkPH2xcE",
  "key39": "uLrbfxGde97vACV3ZinLngL3gHvmAwiJJHpFZkbx3x1MUWAbfDXFFMJUqaXzvFNuQG7MpvhsEJMiFsJRPfQdCHm",
  "key40": "49dS1PkapC5JQCMH3aFuymUTFEmhCYjkEcbXHjbpaEgeXKKUYod2hVTKyD7Dsitqg1hw5dTWcwJTfDVLfq5DYXwP",
  "key41": "hpXythK9m5t86uRdgHhJmnE45UZHV8HjHNCrEVjoZAUtzRbkpWhpF9s1d8sx6gHvWzBZG1wKa4RhKDQttpXrzat",
  "key42": "cidPpoH6SLj5Ap1Nwsuo8PtvwpfczckVLpWWhjM85Jd1uzpoi9TExmMTjWF4cLuNe2UcXSE3qtLnMFeP3Ebouco",
  "key43": "28x3QTDrdxQJc2s9J6hRvsTdenLksNqNo5zwd1LvZ8zYUH2kJ9ouDPY9MQS1d3YJvMwYSdR7dofs3Psb8MPSVMed",
  "key44": "5DJVCngPo5yvShxhZHuAouRhjj5kWarjebqU77RM9hFTspQjD6HhKgvmwbUxrDmnXa5Hn71uwMoGW6Ae2GSMUHKH",
  "key45": "zmTQkMkf5F8zLGptFNzuZRte8kgYZ5cqjsGLMdGNbMDa4JpMk6R35isc2SysFJdVrdfjmJisQ1bQKnMxtWfMxPT",
  "key46": "48SdYt8V1JGMdcd7kEN1a3N8kiqjSHufuaESyNjs4fxGPagH7CCXpmZpo28Sw5q7jcZyqSMeiv1huLHqcNGgKw12",
  "key47": "4KRjq9S5QbxRDMAxKNQ1bqA1jzgQZKWEr62t5rVcnvSEnzohdQkSHmyXig8RJ6Xd3b6VLNFHrH6UkCTTMEfTYcoD",
  "key48": "5pGPRciTvGhTQeqND9fCgPjdfc6ybiEtY8BBkEo55WT3QjmjbgFbm7Bjc363mdEUrtv3uVyo649JPwosF3gYr5Em",
  "key49": "Tvcjvn9w2dHEbyxHW95A3STqbMUeyDF1iYsF2QtEb8jmWEuFknSmViSHyKKLtTwALN7DUhdTgi9jvtkn98FNbGT"
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
