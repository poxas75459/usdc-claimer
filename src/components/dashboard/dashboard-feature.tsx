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
    "57HzUsWcyxVhG8jDiBTicnnFykNo5aW3Jdvo55X5rfAw2tSBNweTvcfCke14VETBJ9m3PN2bmE8DbRzqz8vDzhgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xXVJQoobNNaG7cH3sj8hT5Po4fCeew719pj1thHWMqbyXZ8WFSaBrASRuK343WqbQAgHNSSMDBe96NWgtjaM7iz",
  "key1": "2WBPd6V8sLSpy3qw3ZZuKUTCyGGf9NTbN6Hm1gUdU477ZgnVCFcCGvvqsm9gLd24z4Sjimv4wETjZXMT4f4FyTtc",
  "key2": "3KpbRUgk8BNPVwsAvcD4xAoUgqNnyYF8rt3YVeFn9d3h3qdP4Dw69UNkjUmwrFjJY75ybW5tR3iVuBgscBfCAop1",
  "key3": "2HpuqT5EoF6ofK9XnZcCDWQYF9VDC6pGstFbVRpz3f671E1SCPqCB6Dhgtji7RbdmDbauSKSQzvfmBCTQYcEA8c2",
  "key4": "5saY9YejgwoSqoFASSkA8Br6kxMDkjX2y4A2L7Xb9NkWiX4XtEFKTFLQcafJP9jmRxkVjR38NnorTYg7bCn4W9A",
  "key5": "JAC2Y9AGMBWYNyk4KXGdrRhxDaexWf3n8Xu8KoUg4UueszGaJaRPJPsxfpAYi42GP2y3DfdHpJMd2v9hddGUQET",
  "key6": "5aV7ExjqZZM34f6dAjrRQg5XmHU3i5bGYgq82LaqKLCG8T751D6cExFU9mD3PF4A9bmMZSN7Kt39S3D7D6vyTcM9",
  "key7": "4Uh2VmYNfgjA5MgUHb9WpQXxRgZwdG45947kMa6zHrCpnfbNFzfMszUMzvCyqSaxcpub3vcTrtsK6Ducqkk8QNVv",
  "key8": "3G5jLLigAgcUBPdpc2iGdACz7rb45DPoc16FVqJytZLbD5M434xWsUg8njDLULoaQAMbsBjzAHXmiSgAi2SugcLM",
  "key9": "HMNHjdtSjorMqAyiHd9SXfgQ5dAKDbwGcVWBG3x8vBLWEHfnxGj5zzs9X4hPgMsBy6qBczrj5cS2CCGguWCojg5",
  "key10": "3yTgsZ97FLEN6jsnVC7tXBWZ9Yi7zc8jSxsthpuNeS9C2VJ2N323zNHhQm27wi2d9Zed3XbWLDKnY7G72nXKpsJF",
  "key11": "3Lu7fwsR5zsdozyRZApYKjL5gxpMhWo4rLmPwF2YnEompPYd6ozEqkNf6tzMi7a5v85rCNJ4fvsjhPiMnvLGn8g7",
  "key12": "5muXy7t5r7xmSVrLFUd3ZAGkCy8UsSGBCo79tD183gXrpJUPmWCS431arrv6aeKQFhNai4pamquJHq9ZmzNxd7ZY",
  "key13": "23y3MbjrcV6hSM9CXn3BnSkeqm35jvp8sMuKHVzpBX5AHhYL8YDVU3mtUA4kx9Kkp96SyrWg6FBjWPhEdJ23Lz2R",
  "key14": "3CvuaJV5iWswTfv2U9jjHrWHRHkEXL14WHPyXPYprWdh9TzgPVZi9EnoYHr8LuAqvuV1G4YDTYmgBA5NjMDohfLB",
  "key15": "2RBuAtcUWwJePN7nERrbc6zjcgjyqBebawcjVCjLEuJcxfavKumbZKhfg6Ay8f9G5ew28mZfJMdG6gNwUTD7krKF",
  "key16": "3au7at2xeojkFLipZmrXnUMVDUMw2y7kopobtZievMa4i5bhkrYXRce5EmM8F8XZm3HiP3LUXBTzZ4ayEneFFiwk",
  "key17": "42rJzjMXZQ3J8N8WvQHWLLG6GPJ8QWL1fZwpEZ81CPWDo2wPtbfH8FYZZsJtpiwXKgcL5HaWMbK9xUR4kKJR5w5G",
  "key18": "4uCyLYS1gS6DKs1tvwWqF2HXk4b4wrUrnFCB8cKrScA8btpz7S2JtUshABwgRfakFuXkZzqYEn8s6SWYWBeXKyMH",
  "key19": "2Wf7WJvyeyP6gj7GU3xCGymBiwgNGmxqyGjhgGJCPKXBgKfqJ72xRBfdFSFvKQ2cXqT9YGsdpieiRcfHzFyzyKN9",
  "key20": "3pYRAMqarmwAzaKQHhxBpadEc6sJsGjoFR1HoNhBk5aM5MEw9rDF6MFAXrj4Ua7zcc7BPP3jsLH7zXSwAkvydbY1",
  "key21": "5WZCX58L9AkqawnxfbQybCLQvH4ZvujUVixjrq2nXdCesoCRc8MLQi2opmG6TTuCP1SM8vpDBMjjEnHGBhXPWmmD",
  "key22": "3ZGp4kL8DcuRGbjWUQoxAS7BofbZyKQh7Xr6SRbypy887YTJhDqokzoZ9B1umwrjMkCH9Jst2RRRQ8ptD9HLGbBs",
  "key23": "5URc3MphW5hnBcsX7LS7irFvNwVCrqyTLCGXymYhN7ziYyMCAdxK2SGomjn5YvmFyHwfJu2a2Hcme5LMcQJMyes8",
  "key24": "4YUBh3T4PSh3HJkScyFi2i2cmaq6aAnwsj5YxQDTHgJhxvtQw1FyG7TUMPcMSiAXG6uzT7utVjfNwL52XmFkcZCa",
  "key25": "5TJKv1fHUB2WHaMQGxZpC3QQcupqiBvn4fNY3MPE8e8sAbhd24TDvUkEVw5kjwmZ68mobbFtQUCmueqtKudiHanw",
  "key26": "5EXRSoydMcCVHZiZmhYYsPngrAfHwUBmJZhDX9gCPNFqchhhgS8627M1zEP2rqzZ7CG51BZLWYqjF881NmuwaHed",
  "key27": "1GeLbrnWZ34YDS7tL7dZ6nKdCBqeBKpRiLkRWB69dT5Sik4nJ273JwDtyYNPUkrZzDedxfADGaLnXmAGFjJzvhb",
  "key28": "vab5YRrx8XRRB6X9QbeNLvf7nhsHAf7CPQ7hrVHDT1TmPyD8ujxquDPPtGz6pETBF9Swunt7qWCGY3xuYp4U9UU",
  "key29": "kPN3ifWgGd7SSadGGLQvYzQ7k9FLNBJtocXNbsZuxGqDbzrBqgAvgD8c3sf7kKho4WnmBZoxToAoHD3zTGUsJM3",
  "key30": "3CSGmpYFzxjZiJpN5yNNkQ8tyyxSqZtfivGGkG2D9kkkdSymN1KLYLEX78S6jJ28knpFMHPPhaSbgyQiGJNVfcqC",
  "key31": "2AnDqUHjUmCAt26vmLAjbF9w8m81x5CrKcy2WBnxsMP6CeyZjpTY4oJ6Jryzx3UAggkSahbZmYAXfUnEa2qRMyQx",
  "key32": "2GLLdGhcaKC5LGvFbzS7GZrrcpRfz2mXYGJLP9FAHR5k3VvVLBiEfTjQh9FCKhTdsMcYGJoH1ch5gydcUfcW7aKb",
  "key33": "4id58CuxVcpSFGZbbSvShQk4o15BGfsXbHLT2s1NtbY3FuAUXwjR4nn6Vr21ihkGaDVfRzGavnChMzdEwQfCr1UG",
  "key34": "7vv5k2rxELBCR2DZr92maenAik6VtJVSoPBi94fVtX2Z3jLN4V6TGVgQeZ1e3Lv67nwG2Mi2rEqmbSAEMFU5Edv",
  "key35": "63ZxAXg57H2Wbu3gGjCxDGG7WsMkx5BJEPmGpb2QHRZdNWYmxFgygcKytQ6HLWDbsdQXfHxzHe4XqmmYQQfexhSf",
  "key36": "4S5kdiwc56Y9QbbyEYvmcvjPuk6R7M83nsLB9GaeCe6kHJYW5VKHzMGF5LxnujAJX8h8VdnWX63WK6f7wuHeuitb",
  "key37": "LRPnjqF2nQAwcoFMmmBXULZ7JihhrDH7iDHuwJZT7cFJMfo2NWY2RQSyEhN1yHdvc874biNKnQVzF6yYUSork2g",
  "key38": "4fX7ynRGaRCmW4j1DyJWNpcgprDXPRnL9L21B2NynZfsM78TVm8x9QMpVFkHK2SN97k7ero21QxMJaUjxS6nfcdQ",
  "key39": "gXCcakzF8acTxRzyHcxcU4GRPXctg8gFeHkwrMs8oZjcnCMjP13RN1yNcrGfuhHa7oc2LzwTFaKqFeRrqvjQSn7",
  "key40": "5SZhV7SU2rCGLrQBnk3v1ZRtv5hpK8XuhDS7UW8Q2f5bv7MgeeiULqW8pG3LY2VWgyvAqLBBMydpaFC5AJbyKHVD",
  "key41": "3g8J9ZxvBBHMVwr4pCcH7pJakc9dKeLYsULeAiTzhCaoafznLmesoVrc7JyJ4cnq7CUpnuKf8ckiEyN9QrVAXaiu",
  "key42": "3XgCVaqakh9HBkKCxSky3XagCxLyp5TXrMhL9iD7PERUTbxX5dgtFQUWaTknFri8gv4xNgMAXVoKzvH8WQfyUMEb",
  "key43": "4JP4349a5sgofxMnQVTFYxaxhKY8M7EJkmNng6ViCYSsRTDP73XSTHeRhAzaSgydoftcX9nZrBPwpkcpWNgzSdQb",
  "key44": "4TYyKwavRrurU7vVDs99PH7wzswJV9dhyn4Lk89TCt57Yip549seMQWQCoYhFKJTZCjR3ixFABTpnKACsJ9zNGEr",
  "key45": "5hxkrRQyVXVVQEtJxaSvZUAcUSiH6QrvUYfZemU2eyscwtHWSMMfbJHNFhiaqN4VDif6vsRHTm8DqB4RE31T9QsE",
  "key46": "5x2Mo4oHvgajFNmHVBaDb5hGZcr34GEN1KX7jawXfvuEso34TNQ93oR9vhMET3FLtNHkYnhvrnjtd6mmU3hvSMi6",
  "key47": "3ESzmcdCGZzQMaWZ2JyFAUbyj6XLjECwVWt9NrHi3U4cju1EP7vqvHkBCMckTeD8CGp8Y9tY9iv9wNenFFEZKWeE",
  "key48": "4LsxYxefExUZv3iDt6pvyvXb4rq7Cy8Py4BMFxzyGoqW1T5G9QckuNBRUy4GahSA5PV8FKTmYorJ5Do9sKEmcioE",
  "key49": "5449k7S2rnKJFkMbVhrPwpnj5jG1giBTUTB3YZpmUA6DdM9sVCW4D1wCxNa6FFNZV89DefD2ZseqF6yVfGnyahuk"
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
