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
    "59L8a8ZYE8FyHZNZkArznZYcaNce6MJXCxSwP1FxkPfZeJTCQyntTBgW91m74BRXdWmxv8cuTxoMMJkS1gYRygYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FEr6HRy3WjXBrWXN19mpVK61BueBWqg9jVjP8tprW23fM9hsW3fNVdRQ3Ef5JfAvB4ADEfPqxGqBQqJzmhoMuGp",
  "key1": "4TZYGS3q2iAZMnBFt82MG3qk6a7csNSvUyyPGHu22QmoPmzE9KAt8DeuAYytbkRsdGkKT4ZsHwfx49hrqSArxAFh",
  "key2": "4hqgv3dKLDy1ckBAwLyVf1EhbzwoxLixjujWeMFiTuFRkJHnWc6eVnqDpjfm2jurGwbMBtmBUu9anfPVH2R2toM8",
  "key3": "CzjRZLRGC7LncszN4EeM93KiMNTN3G7UjUr5cT9cix1RFhr4ChTpytPNGXMVWCKUxYTsED7XeSfHaMZ9NpKoSTV",
  "key4": "4yH2Zeax7WYdDwFheg2tqJH8eytwCEMZud1981Lbde5s3jHw2tajSpyRyEXimHpEg66V1dXDx9KreLbuJWuHiPMo",
  "key5": "5vFdrGs1gmFqCmsrDcdN3RbuBTNtSMf9UmzXJgRqXd7NDmtLaXRBCfPabYEt1iHvimS1oWyaHB6t1NTdDdT8PrWh",
  "key6": "xETo67XUo7Leu4dcAZ1tqqMm58H92NFuUBKEqAoQ1bNj3QzieLY14aner2roHK6ASwqRfPu1YRSiz8muscYzraz",
  "key7": "3UGPxWZcKw13CK7Aa7nfWbUuwJSBWDZdCCRFvQaL4bsQdibESMqcnFM1dsPBBsLMk2HVLMSoeWHf8R7o1FFWC877",
  "key8": "57r8tDjPDDLt9VZ4Ag496tcZxVKKLuc2ksU57N1RX5Zkry8a7JviMTdo8KP97aFz8aDsnYhKwtUroxUgDywUgXgt",
  "key9": "wFhFXZ2L19fEZSJHuYQcPZxcD28GXp9NbXWQWgHVJ9Zcpi5YnjF97KLi8pcxzqskjZzuFdbtC8hf1D71ebULTEw",
  "key10": "5eYLJC2Mk3pYqu5hDFDSeqxnViGiq22Ct39Z4HgH3moxZcENPZefLK7qasESnN38NDGJzd31ewAXamn5B7pJwMFc",
  "key11": "5Zj3gbSqvYknDdhzhQxy8brNxcZLxPZdcEtYXGWhF48FmjZepeHBKmQCnMNBJ17mWHHyvhwdE2P555KHtL9HL65x",
  "key12": "3ZVokDt2TTre3tco8gV5bZLcJiEuJnLXLZHX9CFeAWMGrd2w4tRrPcxRToa5avVf9YX1ZWxdK4QUynbbH17BLCSK",
  "key13": "BjARxejViZ8K6QfxpKfZoCp8N8vh1A5WLqxJapKDva87peikeNm9g1ZKGJjp51BQMPVKqY8LZ9Z5Mg5dutNgsnL",
  "key14": "3JpefCL1XTapgWYp5xrcQ1tnmCYTPPzy7vfWJXX2jZkQFVM2CircgEaFNa6cTPJ3YWHJjnk65VzYU6VqMZ1uxhMw",
  "key15": "3dfMHHW4h7bJan3tAeny1KExBKXd27wJxCgYDH1dfAkgkWwRVoxvXUZiM7sRjPXXdD2oX1f6faofAmZvuLkojH4B",
  "key16": "26XVSSqumt9T1P5pQTpmaUtKfAtktqkhPCz4QfM9MRNyYREqd4J68QyryvPNm14thM54h4WcUeyuph7S3Wxg8DPC",
  "key17": "4hCGhGrf3Pkc6qQMZMf7ZdxmJpK1yZ9jnGUtX1wzaAtVhqDM62xENMPZNeGnKhkaxMzPA7DaBTeq7sxvuhASJMFf",
  "key18": "5p25dp9LYJwhnMGEBX5z4WDwfq9s3pEYrZzMUxtkbYvisgXVdxf2rvBEnoZYsRNFFGMGLj3riNVK2c52VjoMHbZ9",
  "key19": "51PdNM52jrunSePjmbza3bttT5eH9Wx5thFxAFq89TLn292YoFfv3etFt36BrcpaBD8oVKjeGwvm8i6zF16rtQdH",
  "key20": "5RvJTR1MTiK3Epkv6k2rdgbuN8wjso1wSHBHTqDgSByBMVYzd5Aff4fJF6E12iJ6zGi3X3KSX65tuhrkfiqRvGXw",
  "key21": "GFq2aXxRsaeQj7wxy3awPNgfDzj5xcRPZf6yhSLWanwEV5c4xeBkUiyxfihmXMCAgPbGrAUPJnn7MAATPouL6ai",
  "key22": "3BdK8mmrrxsnPtYxrtSb3MbXvoVGuziVtXaVXkT3d4dAXW5JKMi3B5Mjj3iQGqSVSmVWnS5uoSH2U3ZBkcudke6a",
  "key23": "5owYNmGiu8YP5KoY3NgJzdYwGxEqASBMy1kEG2KEq5BxY39UXDbvfEgJhZVv2Nf8QCHHHaPB7zj9Fz36ujSF6HLk",
  "key24": "5yA16bj6gN5FNABox2grvDk2nw5zYuKzSmAt2HK47wT9VKAgvKjmCVXvH8iP98KFFuzfChRvwb2MwvgG8nESKkNB",
  "key25": "5mH1pyLbzpWXucGEeXQknZNseAUBHaJsbFrxiGeAqck2pe2zZRXacnjDfiroAC7Pzkndz85cDF5LGh2Jcd8K4xxY",
  "key26": "4aBC6F8MD16fPQtiRwRh9Dg1MS2bh8fUNfjupHYcNvCjRiPjL1hLGHUBbmnwfoC2W7BU8kR4SnznZNxL2GhT8zRh",
  "key27": "WXmRR7XFWEmScPnNSKvJHFiQoDkv79XcMu4jHvydKSjL6kGQ2G8ftqQvo4R81RWywGvApApib9FjhqZgAc3MYtP",
  "key28": "21yh3uQiczwyCvUxFXUgsZJ69pa6HLGEp54dLuoD2b4o5WHBUK9GK8oMwRsnHV3KsZCyu3ZmhWxeKuSdJbBmeoQE",
  "key29": "5pVM5b95gBUWpqdka2ppTSU2BaJEygc81KRm1DmNX5VWqFTshpzwV15A3YPo464rHqdmm4ncF8Jn5e1hmYtMfBFk",
  "key30": "25DA7ygFuqY6eeGeY87QjLb9roEWEQg3qsj2MpGQVZnSXJf1UQ2DBepfW9Xh4wLVsZC7bYf9XVobuedBWG2U57C7",
  "key31": "3RMpM1nTA2BYcCUd81ArFKDZZMhQtxaRdpLhdWkw96y8MMwKWMEanxedTq3X41Jy2u2eEQj9H9vuvG3zYHkkH7kK",
  "key32": "4m9VUGx1wf1S1nGS8c1bVuzJ5c8XKnZCbqCBdYBVjNge4PBfCoR4K6f2kQ8xDLh5WydKTmirBc1ynC4gPohtQjBz",
  "key33": "2DWtddxfRQJ2bMRFHvYCLGDiXDzoNY7ZpTjHrReYcpsXc9bMN6AQ3EdUZq3E7oPDKyxxZbCcBrSy3Ce43Jk8smvj",
  "key34": "3av3ANA6ndT3M6zuHGgMk9oEoTe7yEfEXePPAHuX2BcVZsZwPLGQYQyvP1AoN7yBVPowke72Vf8oET2MMCcgR9FU",
  "key35": "3QNsxcaKP9WRxitNsNHKWwsJxMsCTsCgvVeYnbXVcMjbWcoJZG9nNiVpJSRTjzVc2JfACHSKAbmuLoK9v9S55wQs",
  "key36": "5TMaJ8KtvLGjqgJFtw1XEDfESZSUDQiXjBKYtegbtMZqBHGdPHjRopSecYp9SCegC531sZ1kKrW8VwTwZA7DPD2B",
  "key37": "4vfz8SMBwMoPAP2RQeQDfLvRbBjWe61c3vhnMmW8YbAKWectqnAYZ5wJ3F4pfUSn3TZzY6axBzDqADjDXV1MKGN2",
  "key38": "2eBwrsWDMSWNGqCPQepUCg4KW2CxgjqpDySAiECRmaqEiWkPFoTprJtMzqS9F4mwi1JhAtEJxnJvoUbGRPuKa9us",
  "key39": "z8myu4zvdNvrr8pWnTt3d5UKFRXrGM4FTfbyJZ4XmYu2jXEZVCM3iAexcRk3XGyNMJJSmaqjfLiWrb98xVDKYpF",
  "key40": "4X7uGhBoeN317QHYHvf1hyCmSkqj3urkVwHYsc1XdJkedoADmFe6UPACMjrchAcciubUYV9N98SE2QCn9yiniix1",
  "key41": "4VGPq4umMjk31eM2fqHSorJg7Q5nX3vMvcM4kVcjd6s5aPBMY8XdAztZDzuAQhUCS4euKXT9TXYzbrBLQF6zUrm",
  "key42": "ujiq4emi1cRU3PrBuZTaWZx2bwC7aov3VP2PfGh7Jo3pCaZcgeSct511wiG9VtQxRwxtD3z5yKU43Q6QB78hQQj",
  "key43": "dZ4XvNyYbJ2za68i1tV1B5PcibXAsuJPmf4zDcqKaLGsPTZGvk411ff4wridZZCJchehUQ3ogqU1m9Aw9aPjZqj",
  "key44": "2uRA2rrJBJpYcyFrsChJosCWdY5KvyPhzpTwspJZxiT1JHY4tR4Hi51ZV7DyKpUowi5aaVKfiZK8ixPH63rUeQuy",
  "key45": "48tFD8JcsPb4fpNhuZKLnZKkLtynLLoLN26gcU3T46N1Uyse8HYSKCvSAjGVnrdYgytmAPwEJMh6Z6MY1WBD8pm5",
  "key46": "5yNcdwPVRHhFGibWkUQg1QCgAuk2QcvceKuLgSz7cqcWifWFD6tzufe3cb22BX4SNHjH6sJ12Bgt6YR9gJyw8NHW",
  "key47": "2Ds1ciRBXxiDqe93ait1nkSTG8cmVkQq2ezubNwCKin1ujCDpkyPK3NbTgko7TnNVot87d1U9d9dAQAEZQwFoaDe",
  "key48": "4oHiXmho7BngZz3DuULVfLu3mTz8RNFSXXTU9cv6VkR4bbUF46hLggjFEZpErWNJo3tA52fArFG8vhKAVRDzyouF"
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
