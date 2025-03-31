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
    "4zkMTGkHJso1KssCsVEUt8DmEoLbCaJbo5pKvJTeD8UPDVE1dsrc5CQ74iiiX8tNPA1mKFqUqVX4UKmSnRqo4DDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3AqZ5B8tjtwEVR7Wxuype5NfnkKegCnsUD5au1PNgn7EUjWDvs39XF6SjsK9QR8oPR8K2Lxtx4qo3Ucunyn2bx",
  "key1": "33MbebErWNAB3Yp46BEQgECsx9g8FCMsdA2BSeVPNm4eZfDzsNuEGxvuVPTypm9rn8z6NdjJnKx7eVULL1iuqL7J",
  "key2": "5GtyA3xvWnekR18jT84ZuhUK6Jp8RyiTu2BwKqyJSdULxoqcs453hdsiqR6VtVLDfrxGmARXALc5gfnCq9zdsWqg",
  "key3": "4fzXd7R5pDhWrmxKzfK9N2Y9SARThHm6SMSLRacLMytcSdQn4sYEXGtdzjrKsW73n5Zv95FjoeF9218qPQhVAqXb",
  "key4": "2H5iAWNNReHAZff7aWcGhgXKLgfHPWPD69HKBMaWqdCDDkhGBqXHfCQwr1z8wDNuzDecszod9xUMpdRfQBWKnrrL",
  "key5": "51952FHtgjLj6VhvxhHxTe1Agmh5uJHSbcMNuMnZyCENBC7QPZSKmyefq3h8iiiBkf8CqwAHHmDVuh6bKAVcvdm4",
  "key6": "4J5s4B3cYAgYaMjREa8K4A6umBhYVZWvPpdYpKTL6KyHeiszT7xFiNaDkDHFX4SCbqNyGQBSDAGTkmMaPP8QEu9f",
  "key7": "t1c6tSo439pfjtx3xo7XiTDGvs3hbnUdu6WgAX6XHq9CLmnUrHFLeHbXddADVZrWgNtnX9TKVk8acEKUh2Gys5c",
  "key8": "27tYKA1cKrRBqzKrHEQrukGVWCgTUxdt4snUfiQtK1SNpfeWxHabLoMfcBi27WESod8WRNKabmgmHAnkosNiCxe6",
  "key9": "4os6QmAdwiX4VJZM3e6mWa7v2srGYb4G6ryT4DnWZE8dxQvSRB9CQkKXGJgX3rW2NciBZTxYmrmFjuT5mc1tqADa",
  "key10": "5t6PctoPyCEA1jbqUfb6zySsbqDmaM4Ck9AbmieGFBnbMpYmwXsjNxeVgEFiU3mVThGzsFVJsSMbXqVNDwWNSWuq",
  "key11": "4oDEXCxg9AugwVbfi6jSk6QkEeQJsJkdTHrPuQJWmzL3pcwoSkL4KwX78iTT7XKNe1csfiNaq8D4bSPfZaXxo8za",
  "key12": "eAJjtHq4TqUMx3nj4GJT9Sehjgia7twT3rREeLEJDzngasiuM9y5hXSaAsSjrQq8yrfjkRFFGmEfLkNB3NYCKA8",
  "key13": "2ehLY2sbTZUY6gJquxnDYPyi43BBnRkVchderCWHwe43S4drE1znLV3E3pkW9EETx1ecpAXPeqxnpNT48ZJLVYG",
  "key14": "YEJiNLgT4dtasT3fPnsoqVcdcpQedLTDdBYtP7SdxY9GXHVtZDpwihy9BchYEtMVfaXuWAmJ3e1tAg2kG6C9zd2",
  "key15": "57W2tJ5tkXaeg3my85vfhbtdF3SG2x6igutS4DgjcW7MQ5aRMYc51J4efwfwHHn9eubNf8k6nR8Z3escVSiDBgM",
  "key16": "5Z3NuMcoqVH1YwUEM9K34JnRJ3HcHRAonQDBCHn1Rjvq6za5JaDPE9gaw86z85mQARwEcw6SoMYWj37tFZKFHNAJ",
  "key17": "2zVGfyRUJJNQVJLMMms7jauPAAfQ66zLRc2fcYGUSpjkmoCgBTLyRoh5huVaq5AXM3RthMrh5ij5o4Buaj6XcGnR",
  "key18": "4pGeNDVJxa8cS2dqSbaTfojkLKZatdDkn5L5dML1Cg8sQ2ocTfGwNptXMHcHeaVPVhrg6Wp7TE2N8rSEnBsiKgTp",
  "key19": "4dgTnGA4tgB8yDYHhV5SP1gyh3HTFmMLQ3EPH4EdJFTAL1VFMkR3TH4e4C5vdQgfANtQYRMc4QC1P2yYFsZdBdM8",
  "key20": "2rpm6Uqwojw2mqbz8CEQmyHZ5sB4dpeCkzXRnWbQjugbsQUSo51gs8MtB7PjeMgTYXKHd48mKqy11spfGAXLfA2P",
  "key21": "4rM9PwbwMJWQM4Uv7DduDrXNXHWYPJjQf8APYe88xjQfiSZRQHhT9kaTzjxoyMvemQ95cRoYDcWPPzK4hG6iAW6L",
  "key22": "5bVX2smx1MULS2R8QYy45gEg8QWMo6d6HPwzBr9NMTZVy3VRhhmwN9VrYe4sA98NzhmbTekxaXm8vc77jJaXU2ET",
  "key23": "4zoaNPVkgLxPx3E21pq2ey3c1912oJhLFkZSiTtdoKJW25PMEqaJHJxpPMTYtoszRWaqWWsAhAjVj34jEXzigtHo",
  "key24": "5tQvpeCsx6PRPvwwYKPpqcgCbMGDnnMGoPJ9j6EtQmH6PTeZkrehUuWHHqvQXFcstQMX43sP1k3WvZqPNHSPLmEx",
  "key25": "5jXZ2ifArYb5L8LKbiLt7rgUoe65LFQmXTinJ7TcPCxFZs6JqrLxBzitm8xSLvH9tbMjRuX5YMW69kW6KV35ctvH",
  "key26": "4iG4sEEYy9pzJnDbSoUo3LS3qTz1ux6D8hHjvywjKzyEBDmS86hv3BFhZNEXg4qweWHzez4rQRx2CsKFWKVsyHuo",
  "key27": "F6ePEAZgFHB37YaBurpnjTwo6bcfS4RSRx2beneDDjkhkinvk6vgMWXcBEcvYbkQJEwHdeeq6sK127p3tZR1tmx",
  "key28": "cZ3EHdNnaazx5wtxzgZmrpu2peebhBZjUrr9QyPFYTPyQYx5oZTudRKYokqUph8iyRWGyKQPBxpPqb9vr7cPti1",
  "key29": "4MGnmQ1foHZJ3C7N4ZJ9XuEpzgHwTwqWEuo8VozEduNP3DXRXJsDpzSjwwgYnzaqQD6SS63NHFnb6uLEHhysbSC",
  "key30": "2QN8kzvzJzmWYsBQiycenB2tXsBdkuJLfmDnCKX2f4nATxP8Rda9uRNqm3WcR8jT2HGcQoieqZvPBWP8dPWwBwSt",
  "key31": "2eaFuVuEZewgPhrN6yD9b987mJTRbkwbXkXx84qH1ymYGTvtyY6SB9JBEpdnXG6YadJ47SRCmdde7grKWdMuSPfT",
  "key32": "U3fsNvcM5Wdd75onQz278kXkLyVCJhEoq1P75MWqjtZaDVyUE6kSMUKxn5qMwB1cr331pb8zDeHqp3du1JANQ3T",
  "key33": "43iMePbYFqxRMJCaZ9UMaD78DnJ7rdyznb1bhXLwLmP5jer89osRvWGm7j3kPxYE8KsX43ABjuyCqZ32bwxnz7JC",
  "key34": "KHW4kyeaYfUgHEuGB6uDqEesGbzvFbbXi8YNHAc7u89rRWhRGBCZQKBEbm4ZriL3FwsY877v2f3nvwFY3o1TeqX",
  "key35": "22S6csZ6ACgFXDHV6qFCpzKRVxJNW7xBRiCtGnDbrpfyoX58yG5VKtgH8wsbKM787LZXmKDtj46SvYMjFdhjHoqe",
  "key36": "5Xrju5cSfgufUgMe7jSGECk9bqojRasursnTKrZdqQHAD3fBKApS43RnFcfKNHHq1UdhjTZFNQefV2ShYBQe9732",
  "key37": "CqQy22r4dEKLe1GRQba1cog3k6kzCVCuwJe1xBYbeaKX8zPgTvtkdTQ63ATaBLJtcE4Y5fPo6iL3YX2q8GxQKAg",
  "key38": "3QpnRDD2xmteGDBqhPnyy4c4HebdRDFtztYtLxKBK3EELpdeYLiArkiwmVLYfEqzLMWuAYvnSq6hmJiBvWj1vevP",
  "key39": "4iTL7xmVJT2h3UnF1C4YNdv4KQNKHdxGenBLrviPFFPNTcEfKd3VZaC4UyfH3ZapyTKicLuh8RDRP9iPsbGESt1T"
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
