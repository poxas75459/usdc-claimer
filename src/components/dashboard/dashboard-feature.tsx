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
    "3ZvxygspF4WBorPTd8FAfRy8757X8PPGiY8JhyHyZXttoqzNq7imv5ocmrVMGtup93ovv8FXavCwRVHaAu5XLFmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55R48J3gahKBxnM6MBMuVnvtmwbf34zPbiFgLz3F3nUE4J1RA4RmTtjt9TT99yYCfgAAagJ3TcLHbNUxBCNxgd2X",
  "key1": "285TjnwkmwBwQ1EiD4GmHJLYoCoo16N44ZM2Yj1Yu8xuBRvAFWzKvgnJDV9E4D2JQaDoSHsF183odXmPUn8asvXE",
  "key2": "32yyJTqmcXek61ihDD1JSPbUCpNWMRvDa2btkwRscPFZovqeYSm8W3D1rKMhPuBCXhu1t41ifpt1vwGHXyymKJt6",
  "key3": "5D2wdQnLqU9h3uErj2m8xw3oZczYt2uDxAgUK2348YQay9aotMKGmsYgsdwrhex5s4qBYKAaeYfQeGz6dynw2qRq",
  "key4": "jkGs5qbxHFEH295Hns2mGjzUnr86dP4b5sJoUfrhPqRyUB7j8DsR2HmuRaEAgLgVyCURRVKqMFc9vi4hRsfuepM",
  "key5": "3Ai4e6Ec1iifwK33MK659toMnZSxAnWcmMJjhworH39ApTSejqwtAfoDyic7Yp6wxsEuRLGfikep7bLm8v68ghk3",
  "key6": "4si4MuySBsZo1N5AxCgsctMgjHxPDM1bb43XWH9jZtKHJnX37MmcBLZfSSqTQT17jJGUeWrcQmD7Wz1TMJSXwf2V",
  "key7": "4RZnGh6Q2LUWT1WRfTrtibDwZ6aJ37yw53rc1GFsjbmG6hEgmhfGzbtyjcVPWMx3gGSsCWDueY5E35T2NBz45fv",
  "key8": "5Ksdek6JUUvaQVhCrh3w3a1cCsck5QfmCHyogL6JeLRrPD5467utkKfmWgVJKSWQcZbyHkZQ3F9kNhuRXSPN52tB",
  "key9": "32sZPDSZSZ5EdPDmtZ3hhra7AYXxAgkuJ65ZL8pURNfVs2MJR8Vs2PNTBzRhLBNA74woBrcnQhm7eqtmDxev857j",
  "key10": "vzj1eZGTLnPW7Zt8gKaBxkWJwJtrh9px8p6BAHeeU3c9s7z2boFDYmQaDy87BRM2nZ524Pd7HxH56T8wPcjQwNK",
  "key11": "k3oywLwwFvBE6bmrmp4GgmRrnrJxJ6iycJXyGig2zxEB44fSAeWT59LT5FattsvzhpGAnMeceD86zea6kvUfhPh",
  "key12": "3QipoQj4g8iaVuiJm9T2oFKyjRZdfhASenZPuMnVn9y2XPTPGDoKKu3CLcaU8mXjpyXXDooDVJRfWNspwBt5VL1Y",
  "key13": "dBHUhh8ees5CRXdB6Acherbnr4TuLwC4jPdFZsrhfoTigyK8bWC5sVPrmorw22A5s96NGyZzDXxT99vt9wHdvwq",
  "key14": "2p77B1kW8D4n5XRKmpyZNJg2FD9M3rtuhNeFvq42m1zzwVqXQrqtfBpbJRkaZvsNhs7cMkGAMiENWnpV7sqnbsUK",
  "key15": "2cdrdo6Aunp2VRa3faEzEi5RKHQ8CEn2oWpQbSYCP8BUzTjvfiGmPHaVpUNhvXTZMSJ2PdqMyM5cVE1emrbww6HC",
  "key16": "4EdWEf6jVVnp68MQgJiwLuA4xK8MnXuy2mxTPRdELhmLNGg7j35p4kP8rnuxvjUdUHT5LSb2NMWmGgLinV7iUyxf",
  "key17": "38uXW7R229YjVDyUu27jHAdMp2mn49vqDsGtmXiYZaumXMsvip3FgGp5wXjHSkjgAvLLeR5gRPTahhjsEkQ79cRr",
  "key18": "2STRuoykN5Q7S9TBg3W7p2fUVkyLbQwrKwp1DVVuzs22zGP8irtyD5KHtaoN3643dVrH1tEdhbdVge9jy2BTD7uc",
  "key19": "4dunH8BiEUMGRCU6tmbKidwz69mUC89GcQdM4Bz6wYXLpksyivxVzkPuEspvtP1g6jAUevJkpbu2eAqrAhrstKgj",
  "key20": "23dWmeRqXPiPH1ZJVAKhvRjtfp3GfSbW7PqaVrLjifLXNfgPwz5yGf9KbGAcNmSy3HSMtZ66B2vQtBVB2EnRrB2R",
  "key21": "2Ypd167ZFrC8nS2hAQXccednY4g5TmhRCpcQb4JTz3RZrdzBQFShazdVVYhRRDKRPvfSKEsigVzSkR9LrgkdUxp",
  "key22": "63CPTKs3JPWD1fR9e5jej1wKNVtiF9J3442NeiuydCTJAHfSoEbEZg8TvZqEkqo22qgCRbRyZ4x5hWHCz2sv5nfK",
  "key23": "49YcLs5AijfS38ztWUXRnDW2tuJqPqmyqVtvJNv7eR1SEfvzmPgx1eJftS8wFTMZYChP7ouf5zddiYyau6fH6hmA",
  "key24": "5RwvaXaJFQdGPzxx9WF4u54RvLCjuD6Wi6CDAKitBQp74TPaobsg5gGkxW7AkaxegEq2Ei9VC8JNLWkYSFNBaiCp",
  "key25": "3N1bWx6mvmBztGfMSYux9N5tY7TGCPu4W4HeirHjBLziXxMVJwrR44J9beXmu1jHgYgpCyXD7cpEwQsnAc8xCzBT",
  "key26": "4TPz53zTNi7Bv5N62zbe4pT5p6T9q1nqGNftnaX3pfJ3MNZWbtmMBHQoMSekMGV33tU4vUzDMXsCsT4TiAjoEzg2",
  "key27": "62jAZs6ra93TH8vRp5tTJFApnePEGmPhX2SYx4vzvXQdCfFfP9ErXYdH2XG7PUg5wW4WRF8KVBKZuu6gWu3nEvZz",
  "key28": "ABef6P1CsJmmoqHSNyaGKgzx4qUpanJy5vhyMXkTRP1tRmeFJKcHW4YKSw2SFXRM11AhdKsJ19sNoVxHdcCfhtK",
  "key29": "gayzEYyzDV1VGd3m8yAsznepxfjCtTZJdk5TBG5fDSJSKTHHoyWLuRHVqFxv7MVctBBxibcLHedL2uBUjaXQvhT",
  "key30": "4c4jsNfpUe7J7sLtuu8MPoBNBnqZe5AeFojM29UrDj46jAjqVuFF5bbxPGT6vWTxuKbLyJP6Eub78JAu423ibpxx",
  "key31": "5TDfeumqmHksZhgbjfCKeKELS7Zxu3RogWMwTQVpNX8rh5UgmNYTX7MXTGQo3WiHfkLPRWM5xwVJJL9BFTqHC9DD",
  "key32": "7SWJdhqdqDLahqxi7D5GgJqNcDPbx4vx57bKN3NR1XqyLCapmxmDE9ib3Xvq1tvpfJBVBdEuntFemxgzmK2F7ga",
  "key33": "3YzYeJUjYuYL6SRdtfyB2krxXBoLk7GdS1L4uiEgB45iNBFbknjfKb5Z5Q2y2gz7ci1XdhGUjnnewra2kZPwPwSm",
  "key34": "4wQaf5pahCoPGfcRFao8mPdL67msMamNHeKY7ZLUsfsJo2VKBKURDKnZVTBAdUb2QH1cT8HtTCz22T3QBprtfMdV",
  "key35": "2DEcdTsJ7h7NPQDkRo7dHq7tUyA8wcfrajbpDpmTFvD7VuSPz8jsCE345gJpsSDxAPRSuTrYSNissuumCebmBiDr",
  "key36": "HV7ZQrKxcCp3iaL9iipNMYcJNP9tbSQWDwRtAZTZemWyccG7PSgrvJTG7CL8NTuYtWooUzgJi261AxTSogJW7NM",
  "key37": "3ebzEoLja8ZGKxJEFh9fpTiT1Wn5BxuUgSRFrr2qZutDxSQ1quc2kMXaf5Db1px2K3PR3HTx5u9xiD6BBniy2NKw",
  "key38": "6ZX4DSgomoFkt5HrUywy9oqUzLqxbRkCHaJgcnat72mpZDzSZAywcRvLXQd8vJXMcwsu7GWBByzsaJC9zfGMLBd",
  "key39": "2gQBkAeXEP5AGLj1X5gCX74JVKWo98WH6TThtkD6C83btTRF3dpanFc6fsBdcPM8xmMY1WXBjUdjwRFaLgfBJtTq",
  "key40": "47JPBy6CCq1indK9c9sycHz6uy16YSwbvHeBH29vgZh85jc6NkU7ZcfwufPpVtUJ1zs6ChPk715pC8rAbQYrZi3D",
  "key41": "2xaiyRnK1Xg5nK7zzmVJToL1PkLrnredS6HFAqwWVoww6vPiEeTdkKUHT4kNeDoXVBYKRG6yQ5n2vg7f8izrX9vB",
  "key42": "5GR9pHMafYwRefJHTmQf4bWiaPtrKuUm1uYsSD1wHPumvH4nsNJgywZR6jCyoKfciXLdN8F2hyL2b14vPMEsjVdy"
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
