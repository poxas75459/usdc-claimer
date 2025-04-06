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
    "muoxB37AUuCZtYWhgwKjk4mfk3hGmzSg64wv9uqqti58BJTydmwBsRYDAbThQe7FUWA5wedmjiMQMwMFfTj6Dwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ncemn5NB9DoxRTVYySxK8cPxniucreM5g3r9TAXjfXqk7uES17Lbo4zgfyy35Ae8FWh6Jr4zB6V8zTtcWS12H3j",
  "key1": "4XHEzX5MWpiiqGvXJkf1f4Udq6tyBEVx9a5aTx1X3fJZ9tv9F3QChdHeK5aNRRB97X1WuB1co3zjpCVhThZHe5bW",
  "key2": "41KjK6gvSK4NikJTYpWV46YwnFRth4TzA2V8uzUYA9V1kH8yzjCDMnKaWz16TA4ofWpG9aJLbsJCAZnbKVbk5qaL",
  "key3": "2PM8KZ4mDyVXRduHZsASyv8GMQa7o3EbNSpSTs5xQVDgJiaYiuk28765aqpgJ1UZePnH3hzJfUN6nPtH5d8YaYLe",
  "key4": "3HyGagJz3s2z4g7KRz4n2e1XsThqPfGxxptFae2D28p1VzRCgLzAJ7NVTmbCNeLLHCykBNyFNWZDzWEaD7RJfRwW",
  "key5": "1TB6CU4wADMcG1sSb3KiK6HroWXmjKNSeQR2crCmCxyv1GcesEucy57VpW3j3LPwp4VeQuUkXsJyRXBKFvZJ1XP",
  "key6": "4EB9Fh65auWLWoPXEc6NdWhwsvoFgrZxJYMVXk5B1vX3r3cY4dHKKFQeVnZS7xePaCM25Zq7RUszzVHdHzc4rpGM",
  "key7": "5C2TrG8VgajjcYK9cwWDLKSBM7z2r5YMbVhUWK3PRa61HHEQsBuVkdyoBGk1aL2861gnn1nhoYHDxGW1nh6JpXsK",
  "key8": "5nDKjhhnRdC3472jJskC7LkHkrtsMMFGWRJgSFXeqS4krgPv9FBZA1AKEDWkR5vTAjqXmQ6mqGNhuy8z2N5Szvgs",
  "key9": "2aH8RYYo2hLervpYRn94xjUQnoAwquFXfURcYm2XgCFfybN3ZTimHP59nPvpgaGKDKLAjf79dTpJUtvAEZmQjCCc",
  "key10": "3JCutc6RijtHBcJdSYHkrTSGisX6T2ZbmQd9W7AHEKadU2bADb9qxhB7dVhKpimJ15npu98kymmjnxsAJWYkzZ5E",
  "key11": "3MpK9KR8zM5mvTs1ZzdvcqfrbZ9aniBto29MLMQYzUsUDZH2CCKJy6e42EJQD9xyLPHPqhC5PHuF83vjTfKAcCtU",
  "key12": "5XTkEHPMnrviB4C56wB1fZ8wqLNtRiMVzgnKJEHa4ub1G23Tp7ZXBvwrd1C8JYq5WqnBmyQVZCCXR89xZBSfLYc5",
  "key13": "2aV5Z1zhkbpgzAPSkFYdBADWNyGM9DMnuHopnJugsVRdiKiWEuS5tdjp9LcwcLnzxzwafyG9XT9p4UM8gohF5cYV",
  "key14": "xvuiLiR7eQkZKbMWEoG3R5LPEUzKfxajM7hXpQ9SLFRuvHWy4rQfUmTPz7U4EgMDrDomSfs2Q7GTXt6KVyW8zAP",
  "key15": "39BMc4rTQDYciJBMRiVTvQoH32sCGUK4mQoZbinnEVvWqdrUyjmcZMHXmeG7v7WWMFg6TFnjn38gMZ7APJc1VyBR",
  "key16": "n6TU74Jmp6i412LvwVFwXXz3LMiE6wMVta5CoQMsJgspAsawz1P8mJBrnhV7upMM3w2xdMd1PyTCYDa6tndNheG",
  "key17": "4BSsF2qKGyBJgBxPB3vQo91bdgMGfnai7UFbTvFygP6uDL1SRhTqgAnZjwbk3WVe2JVKgdfb2bUqoyrcRW7DFkLG",
  "key18": "2nbLDt2Kh6wkHG8VoAaQ1VMtmzc8oKEpLTCKCDnDKq6tUWqfE1meXDhWkp1Qt6iu51ZkxU3Q3oBcipERMiVBcSEn",
  "key19": "5TPSWWdUCG76EQz5cVe4ZjKyuLP8K479ZyiyxzumdpoR3CUNMmf7VcGaPJHiSbeaDN72bf3vRquqqPbAXEGzeys4",
  "key20": "3cgoftDofMgozYic6H41Y1uPFDRY7w9vr2mPJM1HhESjVPa7QJxvXYeNpvaXV69feYKk2ip3mjCSh4Fz67kDjaEW",
  "key21": "4NQBt2K7H38vu98ctfyGXKLZ9FqHn9w6a6Wjs1jsYByFs5hA1awAxa7EM4SUP8zXo1JXbNdRrqE7X8KZuHCEu6aA",
  "key22": "59Hpsv5KUciSP8y8MXT4SogouZ8v1WpXsCQa5UiRypXqjQAaPiMjU6rmqgr9qMP916vknDE5S9na9b9y3P6t7emz",
  "key23": "31k7tCCZSFeGJJc9vQzjkXaLKEguvsTtjGSm1WLLrtqEZe7nEqKEg6LwDFHYwgG1hT2TS4ygX12yc3sQuKkVRVUn",
  "key24": "i8WtraF88MG4c8pNLGcKk1E347tBLXdDCA9LkSDFWLy8puB7dmKQnW2CQxHaGBkh66sPZhnffnptRmZ9SWfajmQ",
  "key25": "5nigenv8dj4XFicHW3soGiutWb2oRd8HNqCGXhbBPA4GjPD9DhktYE8VMxxN5p7iFKQvondwmKQvvjQ4xyE8T5ZM",
  "key26": "24gzSue1dmsoT7way9ooH2puLkmwMAip9mMAhdTmkjpUTEAWW1yzt1mYPwTkAtHkWqcpSjtc7sjELCfqrybJup3e",
  "key27": "3F7CwHETUpEgAFcWB5CFX5Acpua3cUmEQhRBFYQXu2j3CfeNS31EZgtuR3GoQJeJ3yvfUxSeBGvvcR6SREchq3e5",
  "key28": "3JxfrcvgB5izentxznhUzeWiobNYLBdsRvAY9D3s9y9oRQ17pGFwfu3DLGxCmKwNVxXDAnGZPQdAxQ4GbycTEb2M",
  "key29": "67q2KgyHDDk7EszDoS4o4A5kQUDE385xQtShhYcGHAAL8UGEBSbUvbeLeKggsTxhX2GyW6vmwVk2C8ESd11Mz4Ua",
  "key30": "TpfJdrq9n79vXzJRwEmUP6HTKKNDFC7t95HDabc5SByAYQxUaaToH3kifjRGyu4vCc3DANkwQ7oordgaCRuENVt",
  "key31": "BxDGgrKyBzVsf3nTJaW4XgMd7R9U2v4RSmTet2fqCQVQwKYrsYVUb1s65wMP87V8PXBo3GArWf9yRN5quJUSvRS",
  "key32": "5mMsjLCBxGC6WUcyeVy3sS5C98nARxZBkStjiRBX9DEqQWVKifse37F3pgYc375ttFf7TY4im4QeBJAacxCHfetD",
  "key33": "4tKUT3TBwMxehQ26xNwo7TASLWNoH2LGHXFkwK4o1t6PbFcMkBNAM58k8kNkoQcwzqxCmsAR7ikSF48pi16mqDKq",
  "key34": "4eXSDvhiRWSmQhqyNGTC7RKxnbZyq9smWTHm68oUp2araotpFiKRBEBTzyyPw37F8ZLu56zH2KkdErShvsjodyt5",
  "key35": "aEJaazb5EyPRHnqyQBMFh1BWoZz1onVMoih12ZgZHCF4eajZvx32G9YVQoQN7oeJEwFt9bnPXWDocC2NDTHB2LG",
  "key36": "sJ1NCLKLeFDPwedcm6QGZJXDpLqcDhB8TCu6JUE6xd43CPEhZiVQqbp2cbQvgQF4gy2XWCyYtrJjdJC5GJkUZwk",
  "key37": "3qGgNnexQvYswVrLcuoA562HtxUDQHeAipabQfPLDdRa2esreSjf2Y6GJfouj4czVSibZCeikCJvNhp594GHGhv8",
  "key38": "2atmVmNpXmNFAkeMcxWykuKDMA2Lw8fxuV7N95ddDAHbUtc33RKKH2qPumHgg4nvmGzngAR47c4pRDLsm4pwnj89",
  "key39": "5Pmi6oaAw4gQfAXWe6ihyQyYjcMtTrLdpwZdfpeYEc4zAP5invxrvryzjdyNVR7BouWHeZVXihYrw1SHLe3fcGfe",
  "key40": "5V8qMs5XRkZmu4PDUJU7e51XgXnBah2pxTPEeSp5escWmCQvPaDPmryi44dKbqzzyAJyNgYF5iE1JMYCtdmqpN9M",
  "key41": "5Fq55pbbCw4SPq3N7v2YEsmXPueNsGPDmWZRYy4VzMLTMkeQT5R4a3fxDM4i7FFmp79XauwVEdHw3j8XbppVrsUy",
  "key42": "oGE1nBqBiSSYKPNNf8xiLw5S9AAZZnsWPCgXnndGf6HxJFJJrYbaoLeLPtQPkLsXBnnSnd9GeQmQTx3Z5bGvDsM",
  "key43": "41B9jZGgwj5Lpmz651sY1P9iRhwRma4Ho9iRp4qM5zyow8Rk6FyzJQnNMZSZvvuiuT3GTYJsboJ597jcoLNEgJuA",
  "key44": "5Zj5vSRNqVXeVtSmfmgLfVTZJhivkpMwp1W56cJtTuqGeN78xtFTeeQW43A1JGCZapXRQL9CRpCvGMXC5chbNpk1",
  "key45": "5KryhyWtBVLcxGap9fp79ahZd63dGmbid2iWeMts2zbXeNfgc48N3NamW2miADtKKWuqVe1oosapj6hRMrx3PHFb",
  "key46": "4YjpEKueLoEo4C8koTaLrHJ9G9WxopvtcqXiqJkRkDo1LanPALE6BtHnyCmgXMeidaLRssBmSKhrx3qjnqbmPx69"
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
