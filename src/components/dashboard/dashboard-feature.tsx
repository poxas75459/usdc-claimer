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
    "5f4Tu6XrAsRwViTchcijmr2Qghtc2t13dvFkdpeoHUBRUCA8bT9qx5gH5bApU86L6mbcsXf75bR5VC8GUNy3vgRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLbDTsG38uNcEbhqeFTdRZq2fA91KAbsTiH6t9bKrpJNWfbieb8mP61KsFmvfpG2nbHjhnefkv1iYFKAuLFcQCN",
  "key1": "2BSsnxR7YrT4KoJJPFm9PqFujdhprZ1gnYWJdc5U9KTtzC31oXkWeX81N3g8fdZfNYbz9zTtbGhDxPdsQDYWqahG",
  "key2": "4CrdwK2zj9XmJTtWxBJtMFxSyAvFP9Q41fRnMh1u6w8AXzdxYmeYXkRyN3uio6BZ3yB26qJ3YQYfdLs8fFYLHTwW",
  "key3": "5T3wTVcHGCTe7J3scC98XEmGqQTbiNg2sguCNucEgthxBB2EmbdEHq8w2JqRq6td21BK2yrBGHFL2PzdWYcP8DvR",
  "key4": "4UDLApn2jyByZgEt7QkWbMBEEwQhVjHYJM4Mym9XkfL1wrt986hw1eZBHjjmMTqdfKnenBq4EGUtimBZiCnVYEgR",
  "key5": "8o9WtPKu3DPigCcaCoGm9pfjbi6n1qwoiBgQ7Jvgw6onP5jwcquQJG7zFXLURJ5TZg3gqaM1CxVpUj1TzKPbDWv",
  "key6": "4nVcJDT712GYg71ceopGdm2ULz3XBA8eB3BPJ82VNunJvTcjgQCEe7Ew8hfdY6qcXTZmdim8LNr95x14EcUNGsxq",
  "key7": "61DtEJ8W7j3uWjiheLSpHmihhdVZnbGNJXqkSfCgktnDE6Dd9cL3vfYcDrHV78c6knsswn1yEawySt7xd4gXRDMM",
  "key8": "2fEcBCwnUTVxZthRLTvGSmSgHKmC3x8WEQGN833zaupw6hp2T2BcvtkpQJdrbfmDLxUWXipY4DGEKu8pT4zyagP2",
  "key9": "2PxLEsL9yn8hgHZ43G8PdYZfUtky6mSK4tzXvfGjTRmL7wBEKYovtBnVCM3dgpt5cKmvNLouSrxRcoUSYpJVUmme",
  "key10": "e3kKtLNfJvPGE2ahNeJkdzrtn5BnssVhcGA9ziMDZcYnhSGxd4weHLpqs8g8ktvqJkMoeiXCBGD9xK6iPCKFkPH",
  "key11": "2i7RPLUipfb61MV5RrNVhapfMUzpGKK3AoyJ6Ponta4aWSmAPNHhndnkhyK9Fk7ggUcTjzn1B6B9isR5EsDf7JXo",
  "key12": "dBK27MsnS5vD5GPNaQDRS3fAda9ZBgLZmeZrUYdhgzbNoAYoBGWNGEn5ggUSLajWz2LuRRcXVaNyvYq5WCBnyw7",
  "key13": "4DDK9cKvzCvp1SjsX2Wh2x7yfN2VNAWyA7xG7KhisYQjn5Sh7RJn4f7W9Y6HC7SyENVcWGAytuA2YrxYaVTivdde",
  "key14": "3FfZswHEyQ4UyUrFD9e18QuPJqYEd8ckFaUTnVAkQe5xFgbBHfvVVXJisVr48eGxnp13eU2tY6McAzGSAXny58o8",
  "key15": "43Vy3fhsJ4m3w1Pho4WfL5EJzYa9GxeP6dzfbVksqCWpEsCaFj8hEb5csf79MMNPyx6UwCKUXmqbdhX4Z47jc1XY",
  "key16": "32JVDw3ZZT7FxTeAR4ESaspu2Tx2Fmrr98gd8PFZTKeQuSz8BAVwJNW4E9j14FwXrhK78PEG72fTJzaZAECD1jwM",
  "key17": "3e5YpAcwC5kXF317WYM19KdnDbijBnTtN8bbtYt6cvCoqVkgyLgYnsbZtS6L9vBzgNoKfWvXWHFASCuH3gAmVspm",
  "key18": "36iNoftnmxU16ArBRajxfpC5ynYx6QerrCBaP81LLvwggJ8WFh8JKZjoPT3RhzgjZQhMrZgzxtmZncobmr8cShDv",
  "key19": "2afVHRq82DzDV2ejL42zGSvqU1JEMKvAxcjtCeKM1HGzjQoZpT6cqNuQ1fLzW5T9wmxvS1VXEfXM5fKTCKTStd5r",
  "key20": "3buyyWeFmTk88eAAYt4g4yvQa1vT5qifJnbUhSmBEjq9f4WoNbBHWjjy9HYPy3W9T61DvDxUUyfEYVfMdLnnLWn5",
  "key21": "41GRBDfjbF6EeHrxLZhKmjZe8QfkrjRghCJ1SkFCKtvsprrtqy34qK97VAo9uJdTossbZNvfvQFD4CTh32CNoRQg",
  "key22": "3RCYdf1CdnV7CMGhF3vk1yfFMVNkpHWb4Cn14nGfoMSeegE1vwc1suTqXnJgmYr7Mny2DgUT4MRR3zy1pLocT6TY",
  "key23": "D4ZhJeB3T7P6Fh7JjhQwXDXCSbjJcjh1VAYfYK1QRTsqKaYFDZDshprrat5GxXWjCxiZW7QDeJuc5z9UWEX6yho",
  "key24": "2owDHT6f6AqE8DasPggHeKMTexXwFZ5fiaViJwdgFnSu79AvRRo3vHFf8eMWLTGk5u68UCurY37aN3Dja4oh7Bff",
  "key25": "3mYeLxk7QZsyV1suJ2cAffA9WyBrjUvkFXAWUftmtAGGFodp9DHmXNEfLXdEBRnLJtWx2v8vJN6nykw85ze4Lhve",
  "key26": "3pMj6nLdsBjzAZnRrGEptVSaGtwZBqDKFRD67YSQwtkBqWK155w8Aki8xgtUwY4h7234pcocyPPdbDac9BssdfxU",
  "key27": "2o6iHr5qRN2qWAQ7QyvnCDHD9H4pjAorNBhi1PPNTw531985HttBnzWkGFPSfPSE1mLRtiBQ1SLDWLzrjG3JTwmh",
  "key28": "dQnNHUW49Tp5tBfPNHHHGNqtjvsUQgDobt93tNFsRnP9FGRWeaMbAg1GLjrUPKEq698bEneSdbWBEBM6zPE3EbL",
  "key29": "DrD8UyQJ9WvVoWokCKuJM62A55LSJ3bUE57gJNxPec9bCWNfAvPExVasf6L95wQ26EQeVFoJMQ5xz1qdahHp5u1",
  "key30": "4AV73iCB46HtR8YmC6Sgv6p6jkPQiQ5ESyhqPraWRCWSZrYKD6491UgtxjUrSazaVa1ZRz78Sy5Y7voZWxAuup2u",
  "key31": "5EwtHh9i1PquyD3Xp1gtEyx3GKvUCBr4ot9YUZ1fNGZeGcrHvrA7rRTbf24oALDrSCzUg1uLwmBKStPrn6Fw6zND",
  "key32": "VSbUc5mfMNvgE8mW1FyoEfBrmLepLCo7p7uLL3gmUCi5YFd777svT3hh2vnV8A92kKDGsJANH6kxZWfbgzCfxnZ",
  "key33": "4PTBHwerYsPueSxNanjnvusAJbabkAC4WMuWYnkJNNdGf8PdTxQCUfBzzAgpyBiPx6j3nYUQXCNw6oFCrVGYcKDj",
  "key34": "SQLp1dGUZzFxiQeExQtaobZBxsKiTpD3e6m7ioxNb3GaAmc5mcH78ijLAJoFgQNrJXbmYoEJQnffH9mTGEEUqQM",
  "key35": "6bypPw4GQP3inGtk2MGrZ84qPutVZuQNzCvjjqasWTWg6Zi7stMCQWNXo18P6WekHH5PzNTfyRGLaTA9h2yHxDV",
  "key36": "4ZkUY88eDY2skSxWNAWV8YvAQjJMHJoXgeDX17Cesp2SyzkGUprmpCgyseshJiWFzSDxBDkKWJKnN6hX12psgEKi",
  "key37": "2R8LbVfK5PHn7XxVMNNbHTaCXjRDtDu9F2angaxzWZ78LiwhSmWbB3Xt1331YGnZxYN43VJSDafBUe7pYLQBgsHt",
  "key38": "4tyBNYZBo7k8xmL97h25ZkeH4z45EVCzriRjCLwWYDHmUiZW8pEUrtXfKqqhVeoyW3hCsgj35QY9hhLh7msxMsNK",
  "key39": "5MKsPFbPPTs2p9ymRBGNHm11dMXBJVhXXdWFo2wDatWF696TmUPoKpTEucWN87J1C7fh8JFDSZqHhhTx1fAggA1b",
  "key40": "HzjjYM5j8NWVN3v276uMdvcXj9dT2E9HcvZaM1B8oVbdXeZjzg2YJjGaf4hBg3GwC5HxhufVC4vkkcaJGnR4j2p",
  "key41": "5H3uYrVdC5D7AgukR1Pe6maYHVe6CEiDbUXWev13s55xoADnYuBtq7UT3YXnk4fh8z2LrmjgsyxVPWgKj8WDTQuB",
  "key42": "58H6J6kzbT3hvLxojnzdFQau2L1r7DvvStk6HA5gTsSDAhzboquRYUHEp1ybu9RjH75wBvbTnG13xqFEHfZV3aKQ",
  "key43": "3SChzkTpiQUGTQawymnwHPARgKi8PEC76hmJ4R5Eg9C9XbvZr6izuY8cYR4iZtztmRKpLkDYgzZ8pni6aEWn9vdK",
  "key44": "Nh68kMKbu8KEcbEAg8KQ2Rzhnfh346cTTmSK4h77vwnntfaZUKdM4jqJRd4huzMnhxDUoSanDcfg962cEA1oL5M",
  "key45": "5X9fgmtAok2f3ppf2vJBdzAD3iTBzzzCUNQNRVZb3VdDGmSMUhYdrkEF9z3F6mTVhFttqHvupLs2KuWrppwsD9nd"
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
