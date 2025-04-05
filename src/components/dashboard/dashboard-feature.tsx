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
    "4ujqZCpBXknjUT6N4R4qkRgWnsxzVbdUysiF671SM2t5VeLCtmZunbHAB4Tbzcu9BPjzifbFzspCuReGn4ZGtByH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbPep2PzgAyZk3hGfQvc9A6oJ7gyFbWFRezcdgtnr364rrsu4gh1cH2xN44BNmPh2MAjGEMQzukULY1UdSFy1VQ",
  "key1": "XzveLqLBWMxmVTjPSWMsC5fkAbXnFE7Hbt28QfJ63bgENGA9MoG3fpLz8sLRr1TJ3ortfwjMkBrC9rye6i4yzRE",
  "key2": "5kTceToEaXtk5ScXn3YrXaJZ4Mhwhg43DcQ5fudUx2gM3vEaRyEziMqFuEfDUBQEERddhj4q2Q6i5LmeSfkfLkQf",
  "key3": "59yB7Jj8RSQBawsoYDJv5Qms4cudy5wmtEiucBcUvavKTyL1FnEw6eWxpi22Juk2PnJ6VzgcHHKhqm8sdva7WXUs",
  "key4": "1nMpor6eDn7X7BQvA8JRiszoW9LiqDXDbCmdL28KX7xpdHkGzUjdE8GBEZQY4XS39LXMjpkv9x7TTyeFFyLeAsK",
  "key5": "5tCrN7APMUmJWs64faJjNNeLygJ4Cwj1Nxg9c6PbLnkmH4wJeeV5m9kn3SPycxxqkaoEH7cuTS77ubEsHYv8xNgk",
  "key6": "DgDD2vsMx819r4Krw8jBUmc8W81fuBikdhRFnTbVc9fjCT6naoYdWR6RhGiTHnyRV4iG7rihUYguUkmnDUdrQCq",
  "key7": "51q1fvrhRkKR2QV3Hg7c4HZoUc7ziZDSTuvuJaGkEocut7U59SnxESMoeUkKzczaXkrFcBuqd8cM29q8z7JjWfN8",
  "key8": "3wjGLz6rGc377q3cQ39gutXkcPRKjk7bZT24cWNY8s7kSLb9dsMRH8RqFghc6j6xwgSdRhsMQopxZp5S7x3BvJy8",
  "key9": "mSKexaNWdiAf8oWJBnZvUmRH5zjkM6YMQbWuoVdwwHuErLAJo1f8SgeiV4dAcmT1mNgDp3uNKpBogPigFeBN38M",
  "key10": "24YhQcEC2gKYmegRSdDHsytRRTi3q1sUAxwBMUfvDCreCEgRpG5peBppcw4sWTh3MWf7wfhLx4aHbkBiV6SaMDJk",
  "key11": "7PGkj8B8xDsZvRsuDsVb7NSsEqgYXxjRw7sTZGrQBsiKMPht3ENkHqrcTne2Pxgghxr544udw3C3VzbnMoWED2h",
  "key12": "2oEfQ4eHRFGNy5vSu6jHzcXTHTrU4JmVcG7WQ6MqiELX6u9Wj6E2JCChYqoJE7cv3sCgg5pv5cNvk9Ms39MD41Ls",
  "key13": "27cXhCagFKEHH4FPsQXEvTWYYn5X5YTpCU3gtRjvGoFvC2bWJW1GMi95YcfuDXFog6cukrR298YYzLXYbg8hGvKa",
  "key14": "4sTAPit54q81eFoQjJmEuvKbAvwVZLtBvo6K9k78XNmyHuEq5ZvmXzBFxDRzNAKgNKGJxxjoTCz2oeWnCqKQ7Ese",
  "key15": "d88xsxeKqQdPWzP4E21dr2zFFe6T7JLFe4Cv46cwHFgUeDvXW5EJfHn727etVKbFotPbBqU7nXK9tHkRein2wtM",
  "key16": "2C2XNXssHt4oWxowfuveseBwLpuZNeFD2ERVnxLWG3Ed5VHf5vga5aQDxr5GkSTSNoUPZVnFQDLfVaTdSwVkvJHx",
  "key17": "4b2auxVpTVtT9xm3Rp36PAg5UJCQhnGtCiwkxN6i68eePNaYVFPUXdw5fJgAwKJaZJfw3nRwnZqxVPHKrJcJCQPj",
  "key18": "4DyTFWVjJgzSs3VCEGSMfyBQapcvqWwBTK4jQcN8BPMQyxYCAL55iaDvTsTuQhRCaJsQd953aX2gJgb6oQ1i322T",
  "key19": "2kUtwswDjJMGwGYWwATrYSRyZroNWfRTd6wT68Cf8xBfPdSLA6N9seoNDCsH6JDYG3ggYaYdRsF2qujofjwTSqvF",
  "key20": "3okGcYgvezKHkEH6TApSptTPTdjQSCgKh8eaz7vxFRzKQi7dcPFcBiq9E1PRb77ttXrr5A5aHyL94bawDufnm6Jk",
  "key21": "3aAQSTwcdzgyN6CATaH3TCiXW9jP9PjECbKigN29vAUJjntn8u5quK147F5a2HVFM6kB9aWzBsux8grNpTweMeVa",
  "key22": "eW7GgsmZigfg5bBCXJk2MhxgV7Bn2GxiTEFmWsNMFW46eUFoJzYNKdQNZCMbDmXFXkh1Ctgtg6dn2UzUFwN2CYW",
  "key23": "4hSMpHqMG8gb9DGkJ79R3H2crRwKT1akfrq3TLjmx9Sgn5ENKjsiSiG5yo83ZD31dGtCWvnEg1hfmLNUmCmto7Xn",
  "key24": "3FBDZPPz3ng8AgqAhCXjHstrMvJbdcM51Q6t6Cw3rWezo6FrnRvjwbrRj4UbnvdE4inQXDyRE4VSZ1NGdTqzLr8a",
  "key25": "2zYLUiqZxgFE1RxG4LBQy4PeZMVLMXRz8mMtLJGQLGRGHrJe2KDHTSYdX3oenMRjbvJchhVy9q8APLkAxTXzs7c2",
  "key26": "zuyp5NG7En3uq3ehWpb8vR7RKQw9HQr4RPrF5HvU2WSnXFHtbMXXAX24kguZV6sV19tShgvTiHyZFV72eXkKQhw",
  "key27": "65Ppf96YPANtEPbwD754BnYnSS6x3ErrmMg8ip7jdYTWKXAYMdXACcs5vbQsPFfM4qXgCryDrXw7JPYnCYHs8Hi2",
  "key28": "5y7Rqbp6ewJgT17gJhYTMcH3pZ7EaAyAdBjcWFoaUP3AqoCov12UANDSu58SSA9tqrX1DGb6KEyEBh7ugUmfUyL9",
  "key29": "5RPF8w1zdatenLqQk4m1174MCcV78p3wq2hA2KDjxaUJ5a3itmzRk7zJbKiovvFJJSUPvzdBFakhqKCxY8CWboRu",
  "key30": "vgcegLwkRHqMy2E7uAFF7DzqxALNox43L66aN2N7LLpjkGVi5CRmjvyZ73BkP1LF32K4gAKz98r3MMDQvjb8LiE",
  "key31": "4v3FYgkiLNnStn5WVZuyWyX8hXeWWQN5XrLV751Y1FYc4Xrkb912F9U2DZUT1EAT8paxHxTdjKhZsUBaEHTsPWve",
  "key32": "514eeLndUqjLWmjAiNrV1pUx55ssHyDds1Hoy9tMCx7cWpDhmdoJE4taog1TKsxXsui3UqyPwupRKhYt9hUkupVA",
  "key33": "4cSm6YNFP7G35L9v1NsbZZ6SJMCEUi4m4peCYAPiRs5NkeMKwQVeqwBVYBCp6gUu7JzEFczUUZXNPu15oVUzQcFb",
  "key34": "N4pgRf1HB77H6mSDfwPraZkz4PNzM3Gis3TSSsVhxo6DrJLBzEG6Ki7FCXBMJnfxx7YUckb3YQiaTozwr4JRUeX",
  "key35": "64oEpzBkgeJXruECaikzCPtBJtB7i8TNYwwztwQy6ceD2QvPBvawTHXzBj6HEgG5ab1D3U15X47FnV8UKGGxcbuH",
  "key36": "5NHLNxc3wbwzSNzQ31J1NUAWAvp12RhoAkQFHG8MuaKHk5W3a1qfFexnfbuidXsmBMgSjzqAvmMAqa1KYLYQn4VK",
  "key37": "45XPBkZvQWucJSwbiuyEpSs4rGrPinTR8eHyQWXaDZeH3ZYjDtWvuCP5Jyy15BNzbZRmVHuaaoArJvtfjnqaPPYH",
  "key38": "YaZgt8NTj8ybZgEBxrts3CEYhUjApY5VCVvbU1aSTEhoikEacY7Xdmo4TBdGFrgtJmtyMrk4zBBRH3xaSCpgskD",
  "key39": "24Tw45NmfSz9NdjAx4XZNLUuZi3kgHXMjp4CHQowTGdWe7BD1vfZ8yDyKo9zrRGt81wb1FgQNgsP2Zr8mgUVCb6b",
  "key40": "MiqWAm2CQ36Pmk51wtvq819buUQqyeCy4d254dm5YtN482xJFVATvLBxtnuqhyNiGRXccVajgHW7aLdfsJfDpYa",
  "key41": "2utqsRVNRX1pro857p7YbPYHYwEmvsjRHzkJB8vVQL3k93mGdba4tnYp9pn21L4tv82eEVbkLg6uNkhvMFgtJEef",
  "key42": "4gup45qwxA98MVXhWXAPAh2Be8SiGSQCuiWUMHAjGhrt7PTfpWdRucBrPCw58SDTnzgtZLpvVdNrr7nwGgsPoBVW",
  "key43": "4wBjVEqTfKsmoC3AV6TywSbRLU1zQGSMiUUBpPTk7JCejgaPCoZMVHYxQHnFw5JyKLMeUf9cZ4GNrjF8SjMzG9F6",
  "key44": "3qJxEbCfRGNhLWptkXPGkRkg9e9SwxjG9Rd6dYDzX5htzPuoK5xWqsmYM861zAGUCNETzJEQSdvRYVYn6k6H9Bqy",
  "key45": "5hPfDoT6X2rfNAb6fbksEdzWJGTwMeNbUnqBpjwuJaF7CJN5rkptpTwhiJvVZ4xyV9G1764FPb2tef7YJ13vueSD",
  "key46": "5aLPL4aGakcNbnaBgitVzE7Mv3aV3My4ZDnXdHV4rJGUxJeLEfYjHZS3JZxBDdDYwmLsCFgGsGtXZkgzP7cWziGx"
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
