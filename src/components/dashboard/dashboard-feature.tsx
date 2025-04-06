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
    "673D7t3NZnM6vdAhWwv82CpcTbrHF3RPQxTW4R2d1TeenDkihkovuUiVsP9hsV3V3gtLgfJZdESfviAxVTPMrVni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22RGPMqhBzusEx993DwG1soL9iqYU6TLVJNdCbmnJqf6VMCBGp9h2rWjKuufWdjpeCn5mm5fyb9UZrbUVJEx8raC",
  "key1": "2okcua6iGAX3FMfGUBDYsRqDTMVnpEg5Wxvu5V4gy8qgnXLA5n9mLxcCfXhJMTWyvuR1oyWreRfNcTgjikY5hDV",
  "key2": "3YbTg2jHsd6SrSH1TH3PUiQisWqehd3bdgEtYA6pRtq9oAiz4ZLHL5mLRLMpPxtMpExFFMLbaZtwwTZx1ohmDehK",
  "key3": "47FVM9BCW71hcR35d6V1aryPCZszbAqK3WkoYxot7GVKF43WmMkR728E1iLQv89WKrSFyVwNm1ai9gBBcr5XkWf",
  "key4": "2Xqfe9XDRbHQPppx3rwM1BFzSSh1SWPvSdxJu1C4DFnSsoabe5B2PNZWFcQT2QS49iLUjDhVpZTVkhWemYGLWGMg",
  "key5": "46TrMeV1jj9z8tMmb2Vmkx6ND5HfCSUM7ZGh6XBFmCMHoyS674r2fMUK7KcyMvStgJdUzUDNK1KTvQBBRCeaXc5E",
  "key6": "65oHu2b8TE1UTHpTDkbigBKJ8bBzyK1BDLnQ3yE8HvFaE6wdBsGxBL7HCxYqJBvmL1g2Yitjuv9JNWdAUcdQJJXX",
  "key7": "27zn9LDnzgGVC51sBrBEcbRJF1Ao4Gb7qUuWxanQZUyngw9k53Pa1jNMDyHkrHNjAtJrDQwjATBoCA7HbydZPtA2",
  "key8": "3Vxn2mED7jCViYWhfyKgYtmvSfD3xLmJwEztr1FUsNoB7BH3WseFFepzkm9YLYtSdtGcdFmQ1E54MCjGuvNJGEpi",
  "key9": "5Ky3zv5jzkanq3LohpijScEpY6pPaFJXavomibrKkhKW7hYCi5tb8aiGuvbgBdii9jckWZPD5QS8zhiPnPYqLGmr",
  "key10": "3fxXSgzHEcaP3HNUuGbP8uWYaAc6daeeNGjvQeyoNsSphG1NqGb17iqbxEHKhiF8Bp2apAP2z1s8UUf3qR5BReus",
  "key11": "4aQcmMimN9AmqYenBUEcdXeXo5gzSJrp3AtbsGJFWLkqrisu6mYwwkWjcfhkn2qnnVutAtKuMrcZsDHytLZ7dPah",
  "key12": "2X4wLzNCTyc2cm3QpscXwGgrJ2zgju6sJh4ixF65Pr3d7oLJXSSggnL1VoaFFSsUqjvpx4Sq6ZdBZCGxXKVDrZ2h",
  "key13": "5tvSWDq2LvKEBG79GgTNjTTcYiCLzsWyW5TVaSgxayt3QjJdVToXHGDTKJiophyzCBy99BL3AdtU8PwtB3tXom6u",
  "key14": "5HCwg6bESrDHXhAU67Sf1fB6SqyPaefSq3rf2spULw9GSmRvgptctg3y273MMby9Pn1h4i6egXKtPxi7gYqNvH2M",
  "key15": "5Bs6ofdE3xCLQZRDyHtesJadUmUaLfLguYGWpcF2zb4SHDv1idgiKz56wiYXTJwUx5fZC9xro2TkcULiPxDzhkeS",
  "key16": "4FZaNeWaH2x5nC2MecgzxSKWRUgNogcvRRusqniTsYXeuV9o4NT6KbqZoATGbq281xMAakbxpDKQRGHUEpwxo3ad",
  "key17": "38p7T3utTwVwNse33by5MjMy9oaeoayDNKPviksWcjJWjjtiKeKmY5wdwd36JkxLwcWfGQxite3LFFSj3cocHj67",
  "key18": "528vzeygfoDcCVwCCV2uYUTdNihH4PA2fyUP7H3riEVL67RT18oFU8ayHPfa6WgApmEsH6F59PKaazR5wcG2WQAh",
  "key19": "2VeHutDRuEYd9DBmE3HC9cQiNon9yfGQc8rXPVGQ5cL8fajuKKiCsMBxropJRVt2BFguaH3SV5mMQcGzhL2Jq1eQ",
  "key20": "56BdgT3PH2h1iBPxhedfPvMSvVQJm4iP1FdBgFKCGXTcaSNiqqJRvuhXEs2a162gKisztSmAAsBU3iPdZeMxzokB",
  "key21": "4CpJ2R6EsnA96KiVwBvMfcozXhKoNDXXqfZrd9qQGPuSbeAqHK5TQ9Gtubd1J48qospzE89s2dkazuwtyLtjqbML",
  "key22": "3U8P1W9ZoB1M6AgteFf1HZGZJQkmakrPezNQeek4cYKHaQt7nNsCZhHFjBbZFFPQdNC1WEjoAEzemCWaR84np5t8",
  "key23": "5j9EWQYeSVZ2GwphKfTKTPC2DdkBG51eRZJXfux4As2aX7W8DWRizBPLvuWaJS93Y2KhqCiM22b1spXWQZZVFiWp",
  "key24": "4yjrthganTCNHaMm3opTy32tSYaax2DBAkGi5Zz4VBWVgbuLJBYiKjcPeV3Z9LWAdqkcFXxEZQstTt9nfH52gAXY",
  "key25": "2fQPRVGH13r5ey2aNUXYA6vMvpPMuMXpkDtRhUusjiBqK6q5oZffPuAnvQPTZDB2QJuiErL9woThSLunojeixDxx",
  "key26": "5wjwgLE1ndBbEBde8AxGCYAZ1ekzr48DEDzwmjD5MWyWndTnLQyrU36A7ZtzWBbLk9UYvMx9V9FR8dKFzcoRFsyW",
  "key27": "KtM8q82cyRz8hj2TyqQuEmTLEsN6aeesFXhnsQjMfBWjRRU325bLJ57QGS9y3r4skc6ZTohzSEu61ZvYLxRfJ9s",
  "key28": "57fTn9euisYfQmU1E27ndn9G5r3UhdJ6SAFzabgvLMVzBrMZ5CHQgrkcn5ykDDz86mdFdUozh5J26o3zTCC2dgiM",
  "key29": "2voo3RZMDHfctScexEvMxBZvqMYffFanrDia2RfgYJnESVFBnyGUfjt3ttS8oRYLf4NSk11TKANfJTYdk6eSFSZC",
  "key30": "5N6nrPtDigiUUjtFLwWJQyZeaVeGhwDC5aaAsyS4z9WwuGM7Z51pmHNGTPMzegdjqGK5xMV7FwgDD7tPfnWxZCq1",
  "key31": "39PU4THUwMWvbXMGxe8QYDKcXo1Fra9i43DAQo8mmJARMbaZ8K6YFcbF4YTPRNw6QU9R2FpDnvso9W8ADYGqM4ND",
  "key32": "2c2SXTpXbbWZNC7SqDxkvKp6subfJEa6uETUde81TjgLceJS9sKJNBFCFWCnFXHTyGyxGU8ZjSeCxoVDJz81XDve",
  "key33": "jUsN8DjdwfPqDZHDVorrv32EbQysi7pqHGAcGcSNdaUaxBN6CdGDtnQrDFfZAcAbghjx9uuKJ4tVZiu8Ta5GLQb",
  "key34": "GZjqzmj5KJbPaMyuCFfeEevQrFR3f7DKpGARo2tU4xqtnzmSMXK26kmsb6ZKUR587FvzG1J8UUvFDnDzpZRovF3",
  "key35": "2vRdS9RR3xrSrkZmNwPmVfHii9Jy3HwmyPcQoFM3V2MyHPx5gxaGGYJEbgSiyHDeZo6CLc7mbbn6r13so3oJAkrc",
  "key36": "3XQZdDUuRPK8gUdPQLFhkEQqJ7nbq5DPU52yzt7MfEVXSTVPHXRhTm1a2PGaWitDaWTve5kYnQV71w6H4E6ycY1y",
  "key37": "59hVgwwEU55cFqjEYrnfKWihLhLqDWyRp5FkUK16ejuGotMpsQtFFiGFSDVmKbmYmKZX2AvMzhEsiCLhHisv2g5J",
  "key38": "62m2uL314rZw7Ltbj5LwWQKcLnWd6wQrWQi9oUv6ETcqawErJtGPa1PcdTt1FNBkFesUZmKEpPYWEfLzxrjpkZhP",
  "key39": "4qmui3cMvead5nEZGDbvA9RVY5zbDckJKNTCd1oXRHRJghh84tbz2dWRh5vxWkkjD1LfH6BAjDEA6Yx5fKKFKnGV"
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
