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
    "5dWNiXzJG1deLWihaymW96rLB1ii27dMwLifC46uzmAuZasPpfHUbpcmtAGMd7qJAsqG7Xndo3TB4UbiZg9aQ9hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qDPQvxJ5CjpWoBBo4oPRWHNVLvvxvFbCbz6MudHQhvRLAAiazJqr4L3LWrcmT2krKgMA7x14g6zpNPHqu6Wjv24",
  "key1": "31gdwqM1LZQeE75jkwQCVpcDw21oYHa3extxyE4zP2UCd3JWKHSPmXuX7vm9RsNZUSsk6dwVpFHiZohcxzsrF3q8",
  "key2": "3XyWRm9K7AkQ6XRPnCqSNsqc2n5MbEVQwjP1qimfTkF8kn4a32sxWx56i6gog25qgQPkez7RUncR4jcFhib8gL5P",
  "key3": "64EXGgmoTV17YEgrvRUnKL56VAvvNhTqSdGpuR8Hac1AJMyeVeKW9FtxT8p76Lu3UAp5hw4ZTbxRHyksF9KPyc8",
  "key4": "3psRmRxAZ952brvDyv8cC97aJ2etomrAkF52VXVR8W7badLBhQUsH41PM92y4ZZdX8umZjYCwkAGPGyFvSeTg66G",
  "key5": "Hjj4ps8Fd827YSUsr745PQXp5C22ZxV8D3D7KW1w7D1pxX1bUsyMWfqDcJYYjyzJdCKtBWTBrd9jHRDvDfvDC29",
  "key6": "b9v5DytgPXrdsqfVnA2yoBZCVeNqo4738uYhN7KLtYJ45moSKPk6VupkZubp6ZHn4CGBWvYPpwRBiRM1znfy3De",
  "key7": "427wSpcbTDetGA7ntE7ePZBcNYGsk56jgtSzfSxMXkkS3MbR6Y9hvoTvgNnoABWcrV59Upc9iXgqogcw7U4mKQ4K",
  "key8": "39jviH3tZqei9kSXg7B6MtGvrN95WxYstyLdcjB8ZcR5z9NEJhUuDrj5GYD8fSsE5N5LxvysKUyY4wz3vd8kvY9n",
  "key9": "LgTB1kNeNNnXxrguPDpSyCPCpPBS15czCb15DTeQEKUatrvq45RzLGaxLeG5kqL3CZo3j29qsncSust3BFPvtsq",
  "key10": "42Pn3XgfAJoTbgqjEParGXGE2Up8A38BZoBY681EPMZqKWF8p4723HwJwbdmer8aEgn8NVqsVPLB2ysXgeMJ1mf7",
  "key11": "5kYNspMGCy2cCcZuvEn8t1kh8zcmZBLyk2388mGFwTac4CacM2S2pzeL4uxLgrLocqTwz9aaBLiszNN86zNiCjst",
  "key12": "2SynoQ7pYQ8wCk4uZRfBY65YMiaF83JnoGevd6VvYuo5grepEKUwq5tLdvuGYKCMpvm6UAGY824xsipsZxx92NYo",
  "key13": "2v4V1x1DFk9hHF7WiKFVfvfz5kGZRBc3m7fG4Hm5jmD1fc4jXXPkMLsber8yosQ7vbfvydMSWrbLqCGuaCFAc9eP",
  "key14": "jTKH71nQTpGX5KvSSLmb5GtMpTzSkLbbwm3AyiufY7P9BNF5AwjpEmaVEFfEv4BRoHyWKqxGV7AEcY6qxre9FAZ",
  "key15": "Zs5oThi7y2fCMANs338d3vyZqtXbWRB4bBxF7gTNZ6Gy1189ffsfEsYAqK491Ex2w6WxCF51uD7RYF41t69F1Kf",
  "key16": "2tUNTESrVcFK3f8NLpGo41ZsHvBJes7akisoLkGd8C4hkzDQxxRGYNfAKjT9pAx7St213vorVPxv1HxgXcrwQnL8",
  "key17": "42SrXUfQCeKHKtHGtpprQ4MPJUQcZhMLkd1EvRmmeGMd4573H5pFBfLhd4PJ73pKGs5KPCQdS68qJKd7wwNZ6uUn",
  "key18": "2tNVAQ8NAazi3ghjd9X86teLFXTWTi2Z9UyMrMjrpZ5Wc1zuaY7mSmXyitpUWLFZyx4wWMKjbkW5qEXwhRDL8gCk",
  "key19": "51HJ4DHNacKz1UUjAm4FWVQn6NCACN7B8tKyutgnmHHv4PiWvZPgSAUGoBJRfTHf7tfHJtNbZiQ8bixqnRpfT3B",
  "key20": "yqUenSeSNMjWy3d5whkgDyKa2z2Dg5VJKwvfqQTiUW2vx7fcoKnDSNE11UnuFdAJbE9Dwg33fwD97MbVeRUTGJ1",
  "key21": "66kWYDsVbqajgcF4YEHfinb2Shz118m23PjrtdaozTXLN4RU5BPrfhtb9PZemXQBW7KKZYEoGNif1NTeAGWJiAUs",
  "key22": "3cUukMSaW3RXGX9bsRNn8n4Kb1pwgKkv57XUSbtVkErsdjZcKhdkFP65Uf4U4VY9h2oqS9MwFAzc59mbWrwfTxec",
  "key23": "3xCUonAZ8G3otJnwtK2djuNNXaV4BJszqPZRZFrTEdUPprKsXH4kymLP7LhHqHHvZa51XgMYXhsE358NPKngNdtR",
  "key24": "3AiX59gnZGET1VbSnMWMTqodb4gvaVAe1JnSy1ZauFhCMFcCxR8JcLwCWhmHQKkiMNxLGtbu7omx9TxVaNUDR6X3",
  "key25": "5vmTt9ZpBy1dW274L4favCHCrtGqHkEQRqUwRtVFXejPuM7wKmbnaMx3BAtKeni1MknnjnCUeeWCaYpfpaYDcgR7",
  "key26": "4pnokMhf5FF6QNryHaUpitc4qC5jb6UgseNNX2EH3oPXi567VSThF5ZNG2oAgZoGc2wJGMtMW7mUvWGxj6VyQVTn",
  "key27": "3ZxwbJ1ykRQS4f21xUo2gjKWCttENpeYwegrsm1n2iyhXE7XiwUrwee3VEP18n66ZDkGJ6do4RQsKCqDYL5dmeTT",
  "key28": "125nKCR5J4Hh6DHnyn379UCssU4UNAucsRGAHEGti6rkCZQxX1onwCSpA5xivpBTSucG1npLHQgfXMJdkuHVYs3F",
  "key29": "36tSzGTJUNnVS5A6xJEDQcUd2mLHXswPoyqDJyLUFqG2uerkhV6y6EQHcbM7eUGPaSc431cSSGEhhfiJX9AcGGWQ",
  "key30": "3Xwh5UyNhXCvcvRg6uccP8CPBKyHG1CqNWPi3irJN6zo5Z2Le4enwZGa5RJpEwpUi885kUG8cZuu2CAts75DW4b5",
  "key31": "5ZiDbcmUjULJwsQMZ1Lw7D5Yu9AasYz5vsVL2yfmAQ2EM2w1wfko8hRxNcGuwE6uYntp8c1468Pp2ArkywQ9c7th",
  "key32": "4qV2zV4Ankmt9DhdGfZkRAA17GtfhjSYt4jHsdmQQCQfu2QMg2WoyFfnsteJDJu1FTvmvCZ8bMvb4siScwKL8tNx",
  "key33": "38r9ivYyRfQrDjuCpxZWvJ8b2hJmZEFjg9fxpYq6kdM6M5JS1gWxGLTnB3bvVm9RDnANSPwdJVYVXBoCfL9mgZn",
  "key34": "24ZRirDW23tFnD1iSX4wbiVovtXjnAtM4gDefY2ymyWpeyEtE1eK21PBiDk7zcxVKFoGQd7PaAhw5tdfFv3BMXM4",
  "key35": "5fL6G63XEePrNuS1Tw9DzyADHftLULCFRpGJMoFczVv7adTHpYPDEEsKbRRu8vG4mp8FS96yPgZmWHXEvUKLLb2N",
  "key36": "EmDQSa3cK8CKuuqjrhfmAvpR9ntiT6QpMs5wkGh8koiXcrityy3G2zxpzDfmns6m1UQC8c9mYudyJx3aMrxNHty",
  "key37": "5Ztz61UrLATwYGF9ACvAWhjy7GQ5Gkg4azVEbQ7VzzPD2FjQgSZhFAM1sNLPaaTPrB25r9ocvmFUyE1Hwqy5HnAM",
  "key38": "3sHxtmcJeGR6ig7AzFfDWDBPypVrmdhPPAePs12Dx316ebEefkayeB3Vr3bRHiAX6Pq4UyDmCTRzh5XBvv3ViJmv",
  "key39": "eK73rWpW9HtirwT1FUTCbFSsiqiL8D54BNCnaUPPQ2mPbCewG6ZhAhryxiNmVWYJ4EwxJMzh8rRF2BnFkK1piY8",
  "key40": "MCobCfdFUTbg6YpasT5pENVmoaWCB5az6pmyEbtd7zzv1oj1Qrocj7b9GR2WdfaetAoSjPuwYmbUPh9qyyBb6zH",
  "key41": "4Q91oSpeAQeAyEjzt13gAc4HEHPwJRKyfB9fkkmTAP4xaQVq46USXFdC2uDtTrmjaxUyjFFDKWQWtYniomtYypDN",
  "key42": "5kpBTVtVDK8L7XZoF8ZAuXYpxxkVURjbX4k9BGeoY4irLTUhjXcmFTSotuhw253944SXtpVz2cwSxgQDyUijkPCL",
  "key43": "3497c1nqjtkMjzFVtnKBthkVyCAeMK2NtyWqsGiTatwW5oMxjmfsBvW3N2Lt5sRqhZGZaQAoXktJD215s11SEiae",
  "key44": "5PuYjvyWM8283xHNvQKSdWbNaAj1xypKmrGbcdjRbLesRTMLV1WhrgGsY6UMiGkxib9pWury8aqJDGYSz84t8t9G"
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
