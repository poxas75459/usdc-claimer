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
    "65G4zVDTEvTdH8VwACy7zbeQ3wyjVvjCeW3FiyzdNKjVBGFKe6135KHrowgi4eNNGvb26LoHiZMjv9siUN2nC4FL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B15rR2EL1ycGxLWKp4AxqEzVe6WcsvdmksJgFo2zejcKN4VfyKthWSeNK7Qhq3bet7ARAdfQaixA4WYuCfbj4Ws",
  "key1": "3tGVv8CgjXMURA6LvtF9DzMMXkrmgQiA3HYgQ72aMVN5vLTxXn315UEZ4DXQZoBt688gP2Bd2DNs56bEkZqJiqhz",
  "key2": "2VSaeRUkofStdBtxXEgHam8mbaBufPsb6Qbz3xRn1E9RpDxdQJuuTwD5JJ412FnSicUmGvyaayNM252MB7XnW6r8",
  "key3": "rtVEssH9jT6nZzpCMtVmRcRahscPEjaAP5dzXTqenRnvxzL6ybQC3weioXj8t6SAiqTMp3ZhC7P9yP3cqBoQNVL",
  "key4": "5qyF1kBoH1GEw6xkha9tgf2hqfRy82BcmYfdT66nfUzoMeNT4TD9yuTUoGYKdUjYHMkzgy4TFB3RroFbkAoe8UJw",
  "key5": "2FZyKiw5w1DAgeGNsKBLe8igV1TQYXGP7ujHt1Fk75h8x2RvWvgcsAQsCF3Mrr2i3RuAM82RLpNpQi2MbUcGzD6D",
  "key6": "4f38GXAXLFkMDEw8dWADG9qGaJonZruhVRFyBoYCk5FbNvdaXKTpxS9Tj946WaN4FGQFvWzLJEWofEb3qDr6Wmdo",
  "key7": "2RQirN45zVcuYYahpBTq9We2rigxWkGqiZxVkdipuS3Vu3BhvWY4YHMArscp9JzvR6NLHMYYAJjdNkd6AdRBHkEg",
  "key8": "57dcepmSFi468DiSBqNezdDWeQcTjdWVPBw8zp3TENgrb9drCznvcv2AxRaD7sELg1eJ3budx895Lb3ZFF9FuJRP",
  "key9": "3FPw3c6e1vsRqRx98FCNkgtbcFdxwLmKUL1MmDBssdpb39uCjz1U2qoAiQEoVVNpfToL6b6rbaXEauzk1SeWN1Y1",
  "key10": "5FvZCszbSAQ4HCWD8wCoz5G1fZ5iqXAU5NL8FNrJfEDtfjqnjkDbjtRCEs6biKC7yL4aEmDua4SVzzW7Xd1a7YHg",
  "key11": "2ULAvy9HPv52YNEuu9pKwYTE33cFAp4NSGv51BuTj28nAkwaSRCXDLMPbQb6FwZDVGt1q1dLobbCa8eYJcP2Mmwt",
  "key12": "3qZjC7sb5ptMNFhYP54MKExPidZhRJCN8heuUuAjLyqgnj4jsYuo5nuw1yn9iW7bMThPQHdJ2ShjcNrfDvmduDUV",
  "key13": "3BC5Y7xK11Hq5qVZgJu8JD24EwDegVNKN14bArdNgKWGpfxNXadbPv7tjW9n3qurRkATyH3VVH7M6nxUK3iLuqwa",
  "key14": "5dVNkMYRbxffoPdPEG4RULbr1h8PbMwZadgsf2E4RW6yqA7bjiqvNND1QrZGpYJfp9eyf6tXuvygze5xbjs5uze1",
  "key15": "2VXjwitghZ9VKh3bkVPZDvjVqZxn2P7r5wdBfeYrcnQRWMUrh7BQZvsVxGy5yci4HqHs1HG3ujVFoBL3iSWft3ke",
  "key16": "5doxKgquJweEcC4UkkyPL3Q81M39d24vKy6DUQgW2obr3zhkqB666ScLLep2rgzamh3VX4Uq5webXg44XEJqXitX",
  "key17": "4ybBGfPi7xhkv4wWaq6RpbuCXkBgv8WhkakyGGvfpxyCsMkLCCSjbHzW54cac67gQpGHbKmWz9jGRKY9vZ2VbTsB",
  "key18": "5mK3US3QMHScdPvJEsjAJkgU2dhQJgjqFWszLu9wfA8DvUMyfsFNALcHSVyHPVn6GHreZ2gD8Hdsn9LBrK1Y2HSL",
  "key19": "51tGBUrQc7Wgsxe8GxD3eXJkyYpw9YMnkPChP5APJsYjrhpDxTRqeRaUh1XkM4BtivcRTGzuoZdKx12aRR7QuDgP",
  "key20": "2tyfz16bg58sGGpHoZY8DKzcq1qpzo3qKhGm84qKoquNkWWgaaVS7e95Zri15dyhWrsjoyRa5v4FefUquanaMNg8",
  "key21": "4Nr2FSUS9k2U9wtKxxuBXSiUf538X8QNPVHDAwqQQyYp91622WNgs7kgteYPZjFYEQdtauA2GCVE1T94dRi1S9Bp",
  "key22": "4BPmebKMRucracUqxCaQTD78WLpZ8i53GSDfDHpMPe4viLYGJXmDmdxWK8v6xr4hi6fXcKUFprbh4fwkyQHpPvKT",
  "key23": "5oxGapZaeWsaazRYF2P57R7NHzx6AWyLbjH6bQTJE5kSGp4jiK9AfygJs4W2479MGRdBaXBpMDzeXzTWLuzKJw3j",
  "key24": "26LDmwSakwJh4ufkw8sBHdotzw5QhZbU1aV5ozcXWzMpRzZaTk9Pdy38aPSPPGsR7kUBuBZcMsZToAz6T7MJxcEz",
  "key25": "5uDZcxQ8DZaFKWMyv4ZSeQS22TzTGczWrnWDZkEgCHBt5SMUeu92DjRKtk4cE2DLbTYVkoJEdvSeei679JPuBYdd",
  "key26": "3ayCum217eGV8vDq7CK9YNuqQuRbqt4v8pV45p8yrjALosQA9uShtprjyiqWUCF8sAmdbEuzkqfBWnrV62KK1Qxi",
  "key27": "66DSYdKf7jxqP6oRRZLzCEft8p2JSCqSuKjofC8yVpoDiGMpnwNBP7cCbhvWQXrd4m85hn5t1cVoFwspDkzjv2yw",
  "key28": "2Fj6kNav6k7MsHZbFFSHxm8GVcWLfW1k21QmAdYDesPKBpa9W9zjVz53B5nNW2iDR7oRUNWcwhghCziNoQqyzRBm",
  "key29": "25XvmVxNCZ5rYUWH9sBr6s8TC2jUbTqbrxmnopNNN6HBXPgRn1BYtZo5zWMKqjXa6BR3JUtwrPmU3KTqvDQwcWVV",
  "key30": "3ZwGyRmRNz5PxLjRhgVEcSom7Q8o7hkm8c7ZjbD1N61QkXFXtjk46CDsBfZR3aBp3BMwZeTeoeeQBLdqiYcHyHGq",
  "key31": "2vEo5i3UkcM4hD5STfF3oBkEjCXEuHLWLc4a12WpFPz3CJ1PMKTa7MWnCo9WbvJ99rtDrDgXVZ31jZD2rXcMiXnN",
  "key32": "54NBnXgPdkjpYnVyhiNU8VfUp9RU9GsSDN3iRzsw7kC2gT9WYfqLRpGB6TZRoJDSjfc2FLU3ZeX3wYTdnEn5n9ga",
  "key33": "3fDHvprdpoTto5y6mwfU94iXYhZqZEhFwDYFgFDYgjEuR7poCJoRPJjR5ZVB1k1ozMJm7oe3185q9PNYaT6KddXG",
  "key34": "kNiU6sjHSXyzadJTR8PsFUJb967MSEGFRZ2PtqNr4v9bmX6pUZSMWNwSdQ8jLffkz6d6WsNPo3fTsu1bWMm4zhs",
  "key35": "35jDcSbFS9H6kaiDm56TbmDwYK5ziiR3ij6sykPYg1bijHSUAEGEhhN39AVGshTyQL7awr8aGp2yhPWasBUbd8Fn",
  "key36": "5a5pRRQN8rR39yVj7RXNDGprMJW9yWPUT8Vzbot22LFuU523hBJtfk8zXRgj9oKr3N8qKDnezbjcSaC7AsARF6PP",
  "key37": "5L1xc7tPTA3N1q91vEv8nCyNtfeUzDms2XA17RNsXQkbLqUGLm5iXJMrVkHR768nU2UrCaTPgKih3w4VSi9STUPs",
  "key38": "23YXYaMKSZzw6c3FTb9xCckcQs2fYrHYcEDRq4giDWT6XNk1h5SFYxS1NCMhQp6nBPfe5yngZEGCZcZXCf1sfKg9",
  "key39": "4sRRDMasJmPSnuWaZNb8GjcAQoD9APDku91HfCwCVpmLNcNoyhXaMGfn1pN5wgDvnYmFzqvb1HXRd5jao89xBgR1",
  "key40": "eYcsoytsUuAAqUFvKYXoK3Nd79ZE3GMuV7Kh4VqufqMVdhHctS3LvW8EAuyaoeu1FYqDAPryFzmFnwYVCLwcMxB",
  "key41": "4FdQeLWUbSt3AvNkMYP1Sw1UvTyokhsxDBum6DBofoEYFZAUGygKzB4JB6rWWFcmSvE42B1yRZvHaARYV7XUMNP9",
  "key42": "sgYSBouW35ihAnPByzq2s4KUz53vCCaZNEXw5Jmv6BoysPDAsLZy6xRqjhYZm4Dyj6XMpMrWrDEuReuoBC86dQL",
  "key43": "58Jgve7g68XaaTpAr1qsYz31BSY15jGXu6mvZ9CZbr5Po5s5QcAhg6R95Wpw9rms3Tt5pd1qRooaP34Fr4HPAZHv",
  "key44": "2QEnT1v2jYTGRovfN1r6zCbPoc9DMKkWafBuvTRGdc9PMpELWUvCTP4Yx3rV1Efk1NWR2K4wRdHjrR6agAdrGgRU",
  "key45": "4tSJxP4NdqjHkdkCXeAzHstJ2DqbM9iqbeAosTVCx7uw9JivuQDRpNe7P1nha3NNLZCzKeTc6Y45pwp4o4UWVBZD",
  "key46": "2JZhZHg3JWdtiaVwoLuk2nU4adwbiw9F3pK2dgpabH97SnFYvSMqDpfAjC8zeumMSbKwFRtwcRFFj28afQHte5Hj",
  "key47": "4rNrFSuJLGd87zCs8gwMUxcJkyFKEdTjjzn52y1F3eX2RxGXFvorptxdiavTAYZNRsrx5VBvUpZK4SA7kjSSnMN2",
  "key48": "3xi29MgyJ5GrE1BGv7berNtbR83SPdRzpa1caVHPKMHQCmL1hZD6BRCrK9BuUDc1qnQknYEZsTLY6mbFZhLw1cSj",
  "key49": "9qbHTyXDk2ESTDQPjJefVEXSEQ2xsDjLYgrxNuSnCDgKTWXNCPU2bHS9439eUNo3a4pMb5xJgaouM2ZRZ6na1qT"
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
