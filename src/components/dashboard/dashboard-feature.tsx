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
    "2cbMzjKE4TP5PJsjngdyvYztrdACPFhB1e5wyW6LZMyEcXDBQuMuWvJLyeM4LuKa4cRxuBhGg8BC8tZBnKW2h6AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNvTLYqNCpu3c6ZiiUEJJZWV3h1uabRMyJTctpCwutTMsdcYvRm7kJG3zoYbN2i6YgAbi7Z29z2jyGjpDaaXo25",
  "key1": "5L74gjRxQCDQGSPXWZbGRTRhHqNLTsyvJZrLPMtgDVPW4GYJd1CMQKV9kZkqbnHAbdRJtWqKYqdXLWiw92H5Jz5M",
  "key2": "2S2DqcegxayCqdK5v3HLmKzPbs6SdHfx24ix4XZfXgTJCfmUZpoeAFymgnNxsUFyjcxiJ9ZCQjQ89S6Aa3ohz19f",
  "key3": "4M4PRb4C9N8SaVkhZp9hdT6EsdjCsSkVHYdn5rcurbhSVmwe29JdPrGe64M9BVF8Jpz3WozrnoAZFANTRXNHNj3C",
  "key4": "xb91TRzzijxVX489XgAd8Wvh63V6YdcoPWb1GyFacKwuHE8haZnpsRx4EoEGjRVrEv8dFQqzAb9jYSSfDLpEHgw",
  "key5": "2deW67s4cPj5he1qa1gCwhcRptj5xnkCpdVwFLZSmTzAbE9gJHe5nv9DDaNBBwhmdJ5HnJt9zxobnKVfLQut3jpQ",
  "key6": "34Y31bZoe4HXPUwL38FLB71oKgePDJfd83w1ijMqRaKKJVhFBtx9SRAWaXJwMoNiPJrMdCFbst4CiELyQXC7ZN4v",
  "key7": "3gbixSZGR8wkjREMy3BMs2rJPBCfZTHH3j532Po2Q9HNGtyyc7ryqorgVvEzNrw9kKgmQFcGtfFU54H9Ti76hGu7",
  "key8": "4Gi5Yfm6MPT9adJuDZBoNLRiPpvaapLXP3CcUVWL3b9ssmKPpWy6qXV3bqm9t7NJJA8ZoPQMbmQ3mkqexofxFWTb",
  "key9": "2Ti9BZfwJqHwm3gdbFv4XRCrEygvghe17TDnDeCg3uAhvrkDRxVaPDw89KosQiboUB5VfbZcNsLrD7nvYRA9Rqpi",
  "key10": "39i7y63MrMLRQgBFfzWo1Xd7NAhEb9Dzb1agz9ekX4dq37VtLQG4hMeBH7EHLab2fk2UWVc3xhtvjnnkgemoB7gT",
  "key11": "4ts93G5YDmayJup6ByfzSYsjmEHvE8Gxz5v5SPVB1U5vBprM4AM4SjiptRtnYSfVvFBSPeubopTNbsjn5E8nThbU",
  "key12": "NjAh4RBZBCHcfvpJHM9pjmSEb7mbnoYdypPThXekfYWbtjMfPztc2j9cnhE13LsbFEzZ4os9CzP4xqLj5x3S5oU",
  "key13": "33ASSq9QUGVLyF8viYUSvVq2JRZ9pF4ZYTyFk85ETvRWax1jctZV8dzQDq6tPXZCpADnYFirWoiPgNTLFqYYM331",
  "key14": "nCVpZafgwQMV466h7S1irxHyTcsKywCXEi33TE2UweRdyEsrwZBWoPjf9eE3RvAsZmLbzowEC4jsbrmBVAjzF61",
  "key15": "5YPexjngS93cHgHDiKWAf5vYvFPuhMJnzxGwSEfCkQQm3VuQpRDoCoQdi4pXCJNiWHXCgQW64wFekQGGtDisYPDC",
  "key16": "KrN4Xsf9qwDYQj5EoUJnpo7HSmYb5UZ33HKLZcS1McvQLB4WzUSPeE6A7riyHaJ96g79dKDAxR2Zb9dhqxxhzPa",
  "key17": "5b9WaDXhDyDMcdt96SYApK2CepNJCp7h8TCAY1UeSexZ3WercbzRTc29ELPQt9kcFcvFDnqkVogAqDcRdrGnFYrZ",
  "key18": "3A3FHnwiXV6tY8kDighdvTC9YMH8akvXQMyGSFAsZws1i67uJkBXwTfCuWoy6J1aRgVaNNBS5rsqfdETq5mQK4s",
  "key19": "3UjRmhs2huJh6rKsvjekHyUupMbGe1iRTa3D84VyaLMCKrxqXdts7C9dYi13gfUqLjhNj3ERrHu7hLbxZuTAmdrx",
  "key20": "4nDkFKxbCfgr92R3R8ZWZ8opRuBB7Z8GHL1wJDrK4YQ2V1yp1MvTCPcxDWQFQpjWmR9LVA9xuZDKXEPpHLX5G5RQ",
  "key21": "4hRZZMC1WogwS2XcDZpo6dECp6pvXHVEiow69BfZTSWJudRgDEBMv5PyQx4p1dHBKpvcLC1qHv46m7G5rHj35vK4",
  "key22": "4zDoaRgwpn9PCwXGirQxAHEvxs7si4AQSfPKbKQYrYXXp2F9tkbwykZNPh5hS1vYjSRd37bB6EAHLuCB2UdMJEGH",
  "key23": "66pDs64NEnkpFcoAmi2Qyceyc7piF2riqsHcLU5j4VExmggGy4qbqypioZ24BVyxFcjF31ugAavu1d337ku7seEz",
  "key24": "3sEG6h8Jiws5nYA9v3K5GSqCSkskVjeyhy5u84jTJg1HjmucyHaYZvNTRbWfc5whNXS4HoBmUHs2ouPFCM8sgbCF",
  "key25": "2KMqsMekTzjyhvkCaUJSM2yYJi5Jesw9dDD9tbfTDJjP9VAGgJ5W5r3jstbBjejFTWfPpiePRMuYmTJdNJREygt3",
  "key26": "64nZsasnHu3WHcXHfxTVcM4B7BMc849EscgGCw9gmrpQRaCMJ2GLnjkMcV8UPmrdCzGpnRGpPQs6MJHKzNpBZZEh",
  "key27": "WcaPz7FAk7SvCuT6GJ4HSCyam7thm5Yjt6KwgvMmUkiXbAmFikoWzdwhUchPGPx4C8ZxqLd9Hm3MN6vHxPoUdEJ",
  "key28": "26y3dBzMrgEvbGPubfMfaGWRXwNJMXNY1AyLNbLGjY692vyenNwKLy4WkrAGqqYnQCeKgf3LKyjyZ9VJn25nnSAn",
  "key29": "562fLdXRUWsNu9qtjKLtkW5vxqem7iNFraiQDKSv6RayPcHsrp4MWuvBLtiE6khmvm8pnTDN74w6iSDNGG8YvNs6",
  "key30": "29gmbQTmM3yX1UXBF7bHuEad6MRtuen7Kr9uEbHNncYFwiZLjaNk1NYKt23P4TrDC4uRHV2ZUUKTYaEr7SFBysLE",
  "key31": "SVJ4AP4ZLTDZhFJskQ1Rx8gHdYvwUupxtK2uGAnUanjpbqksKW5MpVSQogAaV2AwpSjfiRXLpLiRBVfN4hCFpLt",
  "key32": "5uGYj3WXAzRrWEhMvuHf6xc8aCi5HoSpBqMNNkQSzMyf3cyCPEqEhRVUSjLmANYHL2fDbMKFm2XgR8MkEtpcuH3p",
  "key33": "27mKEqTweBB4UuHkZ6MXcaTrLAKk8oUPYPqaM165n7a9Y1KtRHNHppWpNtCjuQkPSfu9qUC5xjGtb2GaQ7Q64ocU",
  "key34": "2JejweoKFHViQzH2g7ytoGDyTXVYh28pLEoFnLigZLy1p6Lq73d87GX34PDzxgnAWdhAvJH6v731Bnze21fi3QQd",
  "key35": "5j5BBEPppRFkHaHnsxDkPcWSpKZf3XmYGFcPatify81eKktvAiD3DbZigKhkWcMicFKaYXHmUwTGoRE5NATB22k9",
  "key36": "5mekfs9xAEhuAHndr7Bm6ScuFXdqK5hXMA5ERgpASGT9F2VKPvQqNrAaoaaAsmsEYznGY611uGJML55ndWPiNZ2M",
  "key37": "27L2VbW4yHoF4pYbxsHhZhC9RZdpsckBpRdPSXr1yQFJpwBcp4yaFnFiQkrUt9M9e6xxVwunRoqLBVifLibqFNkC",
  "key38": "2VAGKvb79MJ5kVETRHW7PbZ6XBZ4hBcxXKpptFDKNAhscm7sYPVrvbiNsUJTC1vFez8NrxQxKQx8YRnTgZoNmTdy",
  "key39": "3BgbN7yERgsAGSYPY3jYD3WVssrDByxnW8TULJZqoZmUhwpyjMvHQ6oUbew2ue3gXg4kkwihVUfv1SKPq5W49p81",
  "key40": "2aJp2AwCvm4TV2uMhm74XydcX4zEaHyy7QDkGQebxF2FFzTeerqX23BTRM2bnJhh11prMJQNSShQPdDX9NnJKBtZ",
  "key41": "5i8FXpTZVzxN9yRzPxKh6hmxV5j3RBMvAy43WDHE2AdSf2apNhZbuy6fhJvUKMvRAf7FpHWF88YPJJVd26NfeWSF",
  "key42": "2vmzYvCHuMPjq8SQsg6EFYbB1vfYcAwZz2FXCUjvgw9HYT4R44MTuktAr6DarTe7y7dTvJYrDqH55BdAArmn6zFo"
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
