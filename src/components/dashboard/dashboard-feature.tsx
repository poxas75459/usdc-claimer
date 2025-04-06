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
    "3GeaNnfRJewmq832dbdjRJtMmjutptvpgbft28NJVRXezFpN1ipTg8VRSbK5ACKVLbftLkRrk9YuZ2fUh7RwmPfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m8r4j7nNnDEm6UkZpHzegvB2H7J6cLJXAnv7WnbQuNsqxiuNrLpKJ6DW5fFtadDWbrVEf7BCbZFVt3GJsVvR52o",
  "key1": "3HLE9p9TnNkAgv3gzLcfe7BQe7jkRSuBzGCG1FYR19kyQeMhTHmtvXzti6Cd8gtNFQ5EkD7dkFTJ32MJxEzTU5Vi",
  "key2": "4tx999nEPKBKCAq71zo3QQJRXYQd3c76HM8FUQTk54WucjzbKRi3VRfAuoFCQ6ErB7kKJT99tecwsNKUxSNhefB5",
  "key3": "48rHefPsESRG9dAX8qL3fzpmDjrTmb37TQfjocw9PfRJZe4Gcwo1xv36z3F9Q464aEhcyAAXwLXnypoSRgMXm4x3",
  "key4": "4S5rySPTyqPmSzMr3TQVGdyQLrikjNVFwyrxXdkkv85r1aN3qM8m5CaZwAoSzRtzoxZ3re9zVMbgapUAJUk8A4CG",
  "key5": "4ZPWcQZxHWyWuhq797BEqFi23d27mg6nbh2xUt3hJJKwoFFFb1Wv6MoKLor5gAD3qvLDEFNpPWfoCN8DhVPgWkDj",
  "key6": "5y7e5JzuzydFnNbzo7wEZCtRnsDb9yrosvVA7z27YwPSs9cPijWeCH6P3WABUDW1R6cYxLjHCv4w83wsHNZddosc",
  "key7": "3Hx97tPG7ZYcv62kqL28QR9um6BmEfURrMZhBkPPauN856AVLZTBXFUjEcMnFvD4EBVPM1xdEL5rvSscDtaVZCCV",
  "key8": "4dgidr1BW6SHNBdSdpms6znDFGZ8w48d3Y1kpq5Ym4JTY6HW2FfB5mvn7HanGLY71VQixRoXwhVGcnuTErXpiAN9",
  "key9": "2DUnEch2NT9BAw14Gcb1wfkxVQBDpNzFux3N5MK3TBGiRHzA4mm3XYBiM5uE6LYPG4uFyEaqccvrXsTZKAarbuRa",
  "key10": "2k3N1PFVKjh2MBS2xrQz6NEitN1znrH7HXGxWYkvJYA1Vry3UguG6awpL6RH2E7pqAJdAcSGxG2nFNSDG9cR3Rti",
  "key11": "5LF45CV18brV3Qt1ppAq2fJL4MRf7dK7AKGbw8FmphWcazmPzQRxXPe4tgD9H7hEDkpQiYMoNhHwPST6ePKAY8Ab",
  "key12": "4n5vhEp6jPN56rRjJ2iqrGcLHfUg9dbjXqiGgnxCPNmv3GTjGL2o5XdAbRjK5BLgY8GX6rfR97DfhPfqPXaMwAcr",
  "key13": "4z7hvJB7x4tH4T8WFDmRwKUoSVWPQiawZRcRSMtWwrMevfQ6GN8HwKtsNALauAoL3Qf5ehH6YrM4VAVDRJa2P4HF",
  "key14": "38kJSrBPXJ9aYVAAsGqhzoXDeBfR9iogMfD66JcsuG82yH1HW5kiJn9Abifj27fEJcTNDPnWSTqeWXExrAjY4zje",
  "key15": "61tWWpMrpHfN2xAWUVmNenvQZ8e7BoWQo8y58fygUvqaUsWarYWEyWx6rLw8Wssb1tBmgaUZy7GUTVWEKLyT2wRv",
  "key16": "45yypqs8h6iGDcDHPnqe7PiXojRhvEagPeDR7PbcgQ8UcRTR4SnFSGDKctVFhty6d3Zw9azgdictwcv7JHk5Gjv",
  "key17": "2U38UEk9tDbmupFqjqnkbuxSF34GiCRtqyogZRwTWyvofJftUBjL8dRqh5nf9FmL46qnfGSJQrdDafARAtYSwMsq",
  "key18": "2v27hSrrBVdiXwSLhX1Ntpws9HdnvPvFf2DVcMnzpmLeBaMKGw8Tu86hrhyLUuNWuGKNn7mR7D8EskYNeFMRYM9i",
  "key19": "22bcCZJXcXbfAqATM9pHxAwWpYUk5NStjkM27LqnEypKjKuBi67xGbmNGczW8mvd7oipNF8tjkT8DEp8FeruQJww",
  "key20": "5vzsm3MLTwhjH6reVVPFqKv1ViLc14YTMQwwR4EJh21YHmVC5z5FXCCVJSr8WycYMEYpD64FvrgedrZCyr8xo3CK",
  "key21": "WJGNZD6oSowesbj4cHaXJh7fkw1ioNGbhWJPfQPvB5TGC6rRiHFWbjdwnGgxMbN44kFGfcUHYHo5viPUATgJcn6",
  "key22": "YPkBDefmpm9X3kwBJSpsEKeei2tFWNTXVE2mL7mdJ57p5ZAhuNwmbrVpBF17sLh2qTnmvZKpLCkDX2UbJtigNyw",
  "key23": "3SjHyj19yx5G9Q1v8h1e6xgELmhNSGjXr4KnhFY9hYLTUbFiXYFagS1NB3DK7vhNHkcPdpbDdzxWM4k23SQzqkbR",
  "key24": "3bB6tWR7CopKEmeQBsmxgJaEEE1Pmdfn6tEga3RQ51f7raBTM3V3PowWtJnzP7uJgKQKD3SJ9TaVEM4MKyQEngcM",
  "key25": "5aXo4tirH4nsgzavK6Skna7hnup9Va7BcMEzmNdmqETeaZkxD6SAwNN3JcXZq3PktReGGRWMzecBDS8yA1W2pqiT",
  "key26": "29Q7mBEG4KvUrXLxrSg4Es6rVa9vdnMEwjHu6vjaeHUr8mDdKZRYU1Bkg2xsj7TZniMedaTH1RPxfrx3kjZYmuxe",
  "key27": "4sVRb56zTGm7LLeLToEkTW4Kip5AvfeU1LJNiMNS4cG1beaRnWa51MsedKv2VWWKV6VCrZcR7XLfXhYGyvPpZR5H",
  "key28": "39BqESPck56JGfuevnw2KKD8E45B5gGwpSLfxG4XwJvoqN6KroNKS9v9uCDaR67ToNXYevbSJ1dZYmeLfVWfJkLs",
  "key29": "5CKrb5h7gNh8rgoUYsdDUAvcZc8X3XRtrWxJ7dRMq5NmoBmyPrkgj7hMXDBsXwWXKGdHhqj8GhK9NRizYvjJqazs",
  "key30": "3WZQDx69JAwGFz2QrgvejFRJhbkJMNNQLNV6TyWGnv21V6CFy8WoUVdbEzAt8rZTemaonXWdon1bHDafcVpL9d1y",
  "key31": "3H6usVSywngMG2SJ4gLcXrjzrAEboifru3zv3cMGD65BZWdGMa7FCTc1z6TgviDLX8EmXN68YbG3Kg3roewNJY2H",
  "key32": "PVEAepQAiLMDDc7wbm4atgFPAzhPFQSBhq832dXe9oEdy7SQxLDTddtcEz3SVKa11PFDbBaeLBiMUWvyk9nCdTM",
  "key33": "4Cp1WT8N7Th5VPVmz2t8oy2t7zoVzgd2NJGh6eFKW53gY8Cr28du8j1z5rgYDJD3HibaTCsRpMurwbhYLabpnEzY",
  "key34": "3J5Lj7cLuvid41Xv6dXz38CiKUfTzK2EYsoBUXpfjH96inJwxCuRaPscuSCP7ZhSAKd8USdD183CP8cAPazp6vaf",
  "key35": "JL8PyBwMhM8kDA4sfNZ7fNQo6EUmXCS7dgREDsPyp91m1nwcPnhzYoQ1kDziY3bmtU6z8cY5b45MLeaqWx9Daa1",
  "key36": "HUE4HnTcampkoUvL6iLC3nFf5FWQVBih6MMU2aN35ji49iuicDNRsDU7xNgfp5HWET6S11hKtZUmsW2G4CVKgzS",
  "key37": "2Q6MiioKK1YLpkf3ynp2CEtgd4h6LPjrot5tPTSjyT8aD9XiGjWxg8RaaP5CJWmbTRXjmdbh8JPPFcn1KHaEbfFh",
  "key38": "BSnVHhbzRkQwfPRpAcxcBXHDmDjY8ZwxeKv97Bkej3Gwvd9MSmvYNf7nFzJuBx7neM2rYd6inXm3i7N58ziSGbD",
  "key39": "2yr6xiQbZ13VbYXBwMGpGsGPssgLvZFkczX23kmFgA5UwCvXib1Exx845CyaZ1j7xthMJ6TMLyWLbHw26ZxpxdAL",
  "key40": "3oMSKUTVmrYeisoVphF8hiitn9mpYa4GtmXs1RQpUueu9qR77YoDo1LYsK6oHTWcBA3NegzBUQn2Dq2azSApCSPs",
  "key41": "36NQSwKjF2nKMmkqzftVukaCmV97egFJ3eALfVZ314ztBj3JpEeib27bDJXEi8X7dmFYiSsSFG7LUqNBL3ejt9Zz",
  "key42": "GkVAtGxbEQPvKrhhrT9dVBdnvNH2fU5dWpSrayfCD7XG6BN6kZxyu534MiWj94fgvbGktNV3gAUwki5k9vTgmc4",
  "key43": "4wqoR2NWZ2Skztq8aJZaAY9s3EsVvdDD9yhhbddJwGsykVyrao3ihDxFaRkHNW4c3nUzXHVpvgv8mGbErRKNEant",
  "key44": "VXMMJgbjZMHwDJF137bvh7Wa1oLSsTXZB8vFLNdtxFC6Hs5KTmyajW9S5pqfjqP2sVVHoEagvQutVMQD9GWdK4Z",
  "key45": "4YFYf1WpGHRx11gtmmdyitLq54NW75gmP18Qi1VUDTphK8Z1jQ1qqXHMwuBXpsQVTyWPQPH4XNYgv4tW4bB5NPKQ"
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
