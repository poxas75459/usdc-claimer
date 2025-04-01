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
    "3G9rJpqJBFagLpFgSnu2azfRtVXPMBjY8VPEaCgZWcMoZq9FMRxX8foQg566kfWKsQVKY32CpmEreEPKEQfMc28a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K4PHnqwm3TyVWDLzMeYoTwDLzX3x8UfkqMG9U3G9Bq3VFusRaoTZeKjvwCNcEJvuhtDsB4dE2SDsRWN58KtVBsx",
  "key1": "2Lpi7x9uAfQFhaePM3aRS5iJPd6sPV9ryLZJnxE8SPzadyHesXRk7VuPnvwQ77oexLXihSh9gr89SVeZXuHYaPg7",
  "key2": "63LABtVdGnZMHC2F8PjHoth4XYwTve4BystP91NbASCutk5aRmbHPaXocyHWv1LANPVcVvErSe62ETUqXMoLAsS1",
  "key3": "4RNZpfsR2PysFWbycMa3J8LFZRaL6z2fGiVe16pKs1EFkadsr1JPhXDPoq7nnXcQj6kP1Ah5xeoRA12FqhpiZY6m",
  "key4": "5vUE1xCDUGdJaBEk6XBAQAcYhDmN3GSDJUjrczmFtiAJfsfaCjvqXnrqfKoQP1ZaevJXCnsyWAWTC3dXq9Re7zgw",
  "key5": "4RNJjp1APHSdiWGq3tsH4wFACx539e1NngJZx1dR1S3H2i1BGamcXW9pH7zuNJM37ERVy3jFoToZCYjM6WBc9PBQ",
  "key6": "hzMhT9wgp1RE6YpZksuf4pSLzVuCushcEZd4x7cuUVjyf8jq2B17RSakPQV5VavHfRLhihhJxZk43hYuSDnP1YE",
  "key7": "43Wo5EbbUdp9TkLmXAKZq92XJnAkrzCVrWPEv8C2WRVg9AxJDNHnFVSHrvmk8TjyHGm3VpqJ4HwaMfgfzbSqTUW8",
  "key8": "4J8VjkSQVPbvPY7Drydbm9Apv8uD4K7RaE1Y5bWhcxzbQ7NiKwu5ATkT2TGSp5aU5ZUz59RjRANmZnKo7J9VkEkr",
  "key9": "4r4y6KNx858BQoFAJ9FECzTQgQKJNA56zjfAvkbAYPzhMfnfDpZeTE8eoDAnyfxKWKM89YZVAERWt1gSfupeSCiV",
  "key10": "37Xzi2LVAJMhETtRagqxsgz9rEPYbBfg7mAw5XJai96frvyAcxE8XXcuc8a8tJoAofTM6ESEyEWPFbMYjdjevapW",
  "key11": "3qRor27khzq3HfBZ9FFqiMExZ7ZZmD73yiouXqMi3mUNsM4vPvayF51GncmzVbz44uHtgowphatcwSW3qiHG1pZo",
  "key12": "BkQGAojuVnug6U9p6WPvPoFtDYXPGEN5z7b6xJ2bGgWA5qAecPJjx1MoUxF3G32w7G3HhZ8iiZSVdPuiovh7Psm",
  "key13": "2Qs1KhHEhFR2UNeADFnovZzR6FwQffRg3ZvKJyJ15V2AbCs1yViBeRoDZMMzbU2ubhSiZD3KsHUrCiEQdd3QKdPT",
  "key14": "3MAMCasVYnRM9dPZ1UuRRxFxrt1Nk1weJW24ALBqMHS8jkKR3WRdNvbMpAPwgs2jQBdG9bcxsmttJqz8BZfhavw",
  "key15": "2XJKwVTrUvKvnyCU94JXrTb6n9gaZviCUXnph2UCTkoxPd4STH88w9edatynmqv1JBMNx2qgAqiKKrDEeTk9LH1w",
  "key16": "4UJA22KkGLacoD5qGPK8PkSWW3Jih8qM1qFfeLDY3gkHhRkEHmaEzLP3fq47Ehu4zebzdf8iMcvWzmpGTzB8CBSE",
  "key17": "5W9nkBGJoLPR6RrQkcYkgFGkaTcPxoThzCbNQ7Bf6Zxy5MZYrU2vQHBgPPZTXTiBd8BFAk8sRNjBsQZf4U4pDDPH",
  "key18": "2VbtVmUsmX5iMeN4t3BLNM9XomwZksHG2zfRwTvTB9d1C4N3UYevfrDbStLdebp8WnJsUqTiset8QwUdSpxqwb2A",
  "key19": "2cvxA3Jb3vTpaegu4pHuPUHKukpypLQMU2bCaJF9TsXgLCisPiKvESu7UCwvvFDi38hHHxPvmjhdyDmS3YSx9HF1",
  "key20": "Jk4Cjw1eJbw5Y4kRbtV7M7tsAjhAv1eSR11A4UCbaAzsZ1E4nJA9Q4CUKRmKNzENvDCzNHs6ZFTdABUm9oBusK1",
  "key21": "4QeufKhXaJs67deWx7fhvfPKTY6WbjcBQBfJwA9ooJfqmnQPKo5pM1X27gDF2fhpirfH9sLNPrpyA81B9tSdi8P2",
  "key22": "4RiwHatfE5AuCFeuU8N33fTrNHGUXLHWwAhiPkXPytwXfYCDyfPJ3HiMcoCaGMXoAy8WtgtB6vugAxm44XN2f7La",
  "key23": "46DMS5hrvGEYufrdHBZwBf7SpxvireDVF2kqxve65zHYHevZWGbG4wvKNWZHDxF6Vfw2nVTrCte34ooq9qQwHbR7",
  "key24": "3VAfX4Pd7tgLq8fT8aa4sYpG1gWWN4bewzx2JK6dTeagM8RzMuzTh4ecXAZ9Ksxuss3eUQSXhgt8vYERXMUynkom",
  "key25": "4YzvAhZeRcqCdyihzGappZ6B6ceDtppUQp56Wes8Z3kAyUuyZbp3pGKGq4bDoqjXKaecSLBASZnKrNbUgjFxzs79",
  "key26": "5N1bTGn1diB4j7FJSoXanHC4Dj6CyaTnrAZN1TS4mnG6392ukUwwzXBgqEXoKM79U2LwzrHKq6GPRuFTQLVpKUy",
  "key27": "5WXzUyW8w6m2Jgiet5hLFDASjZ56BkXvRBiv7zsXDUVtcpeCjZnWJuek8Wye98jiH5EMUD6sPttQaqnsKWAEZVte",
  "key28": "49VNz7bTVj2X4HpVaTUHb7sqZZhh1p39auMULVhSBSsDsDq4c24MFxyHUvKBXS7ib7G8Q88yQLYU7TAZjx2cqfbj",
  "key29": "5FBSdgrjmahmwFbTVqYdR5zrbKhezbukf3TEpCta6549eUjryW8PTpwngP2K8douKoEkX96GdwueLBcZ9WRzGfvv",
  "key30": "LvcsbEi4XgchGsCKoeicsB5HLFhsrAcwhqCBoJAB3h9tJe973pj5eyaxeDfGR6E3oqpkUiuTuZPHVaJgVPehboT",
  "key31": "4A2gsC8kC4hCUPkGKUNneiUDC15pPZa2qczSCYFjw1mYqmmX2RhppMKAic27t7AXncKq3oWd3mkN3Z2aRHCu4xfY",
  "key32": "PoJoFVWPhaWkf41kZ8cJgzMgEcDNJ6hdfCmYZS4dxXQYwv8CsLitRmyGd3RAuKdHzwebCpCbLxgEmAy9Efu5JzR",
  "key33": "nJZPeb3mgLRWxetNXUr8SBnku81NNWWfSZC5tqGFAtV8AJVjQY9TLVWq6ysoeZwFqVEzUdgWQThn5VApoj21Njo",
  "key34": "2ZDk9Lyg974ZUm2pXwmrYjTXAGRVdS195sJXU1waac2g6W1LxEPdw4ysgeqNB6cnPYSUZdMLRJJ9yaXwnyGJ5hkd",
  "key35": "5j6iELgod9bdCEbfVWJTLwGmLpLxYA79f9yRGmGWgpMXHHPB3WxX8QVaAQDimciyyBneSTxsRNNPkhujvNYvC477",
  "key36": "38xEcnuVMsQ6ucUXe7Dy8GNxLKLLPYL2t2XGyaTqMEtxQcCVq96bnMHyEcSYQAPf5d4MThZW6NKAD5Y2bLTT3hTK",
  "key37": "4ApeHGfY7azF2mUpunSK57Pi4NB2BYYsmbyydTZoEPc4K1cULvturwLEiJYRVhFyr8F7cEbBKTM17HPHgyMxEQHJ",
  "key38": "VuH7WXeSyTwuLc7KWobfKiaNTw8gVZDCrxAwGAZp1UobiAffTaycDhJ9piXLvfE7LcH8R2UdxcK2JWDKmLdwhYf",
  "key39": "3bQfeTGWobXBytsPRFFiHbMvhz57RynLv3MeCvoS7MhNd17f616eHpiGEq1iP6FYKQnGXSEn8q69k6aJYkJgyynj",
  "key40": "gceWeaPx3R7XqWyGJesYbwPUT2wBN3UhSVMCz1paKyrNDzn35oUNw4AhERRf48M9oVyxD7Y2AFHnv3KTRXYJmdt",
  "key41": "5T8JvuggDoCgN7rhffQmhtiCpZ1W6FjSnCGmn3eZSvojrhgNs5Du9F5b7K82cAbQ9pkBCjhH8tYFP9eokDrMrLu3",
  "key42": "3sAN5fQYJVuQuwDi4tAKFbX2GxhKvXHB2WKNeeK55rEX8eFcMa82XcR9qKNiH3sMv3nmQpYvrWcaMVPVLqDAgpD4",
  "key43": "3yW8S5wjugJgKHJwRh3ypYntx7AF27fj4JA2vH9ARSmiMZiazRd37HCCJSZwhghHDXcFgYFY3MXJocC79Hpx3LXK",
  "key44": "49a7VSBafDBJ4sbbMBHkWZQ7s9JojLgEHFbkCWDWKsH72aw72R6DPW9xaWsAqye19sGA4rodD1naD7uDALLngXE6",
  "key45": "3qyEqsiB5KCuKpYnxeduRswYaGj7DjJ6ubeyec97df1vHGejVZtJt5hhoAVimBcCZPxNa8GYJndLDsvTZSHoFpAa",
  "key46": "3z3hRGGfWaFiiRaJVELhKVYmWvBwQ6msiqt83DYSRYLSULyhwpLiCShATdiFyVVQXtAiDUt88L1zS2aVrEpHCdnw",
  "key47": "djFMTAyMvLFcba7v9pSC1y4vmpwq9UFRfFka5wPUGKqpwyZ5sEN2jGQYCpCthJ6pWP4LJBN1DaRmqEZ6MvR6mAj",
  "key48": "T9imAy8te5c7osM5cVYCZ5JPGRoYaNyoLsNf189oLh32qg89ob8wQTbRJmKjPKoq2sqKrMRSL8Vhx3roXfjvh4j"
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
