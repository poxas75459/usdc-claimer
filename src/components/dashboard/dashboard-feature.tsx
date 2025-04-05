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
    "2DUE7Azg2MmBBZhjSsbpWVfnKRvZdG8CBJyJKiCpah2zwTrreJ1pF7fQd5YpEshXQyYsA1uW81dRC2dvwC3MLASf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hg8AYT91wYDTjJ7Cis1pynDM6AW7oLDzCkjAW9UNJVp9jXPGd2ZQwdTu7TXTg8UvvymxJ9g9g123XEi2UmU8TQ",
  "key1": "5t2eQ2zZoP938EouyaoArjT9M8cuNChnhy1gZv23PW8dnRi8R4HMRg16WyWGJFUUgrdqy9JpQmv6VouQZHw5PJqk",
  "key2": "5vhEaNU4xw7cCjbG1e2ZTWRgD2bCSxQ6s3cSmQoRTXgnKGgoWFUQdCpy9b4v1LXnkRHpw9s112vGitQ5wLr6vyrM",
  "key3": "gJSFNPXvgZqWhhy4CzsWnmVtRS3TQbMdEHCNZMfC2ch7PnbBf1GAHRiDns6BQRSQ572WBZ6spTxsNFUH8ee3Gra",
  "key4": "3uqzUowGssx6cakhAChe8ot1sMHAigTeopuNn6Jshx6xFnJynZ49cpVjJXar13j8JqDGagGiEvAuyuam8skoavwm",
  "key5": "44TMsEpbAVgQDKeLzubhuxVv8BBXjnNME6Uxgyae61LNDQ6xrX8tnG8zwKHiua1ezNqydoLYGLU3SKNdEUQufsgT",
  "key6": "3CFx3jhn9FDrZRM3WqBp9RyugGXPMM6SfJfqUPFrPGfk1hddSCcMAnxX11NepVXy7jzGon4F74HuUUDpMzXaVDtE",
  "key7": "3gUDokUNY1MkwZThVdfTNoLKt3ACH3RtRTmAsKmLouGPFyvmfNJ9SbjXcBfmGbBSXRZr4ZKHFPsJZTKMC2MgrNWD",
  "key8": "2aABrKkKxohgjK1cvTDyUurtbnVodKDjxJirtDJAKvadQQ5RhjkbNY6dwtHb67a2y8RHf2UnfV1YdHBdHzEfMhTn",
  "key9": "5jkLWJH7cSaiApwkH6tPp3dbc4hX5iQWEMYDmT9Nd8bLaxE1QzLSUfnpaMzTM8ea2PCC1xaV5BhrcFCDZWtubJ2Q",
  "key10": "59kATJHXrqT2yeA5D7AkBzZZipny6ajJWCMPp9yQegkWuGMYhncM4ofPmeJvYXqBDjpkSYNDqqzw9ugsnAWDCyHy",
  "key11": "4PPEpk1u4PfnvKB4GxaDQyqUPnypcRPmirj2zpCodXSAfsp4THgF3uLfJCFVCpkqoUvJkssaLuzFb34RZ1PRqW5Z",
  "key12": "q17vtx8dQ6jk4LyYuPuKXPq4byzSMninsyXcx1vjkdNS7SeYpzuVWsioA1cWvBG6Wo8bffo27PySq5tQZVUfkdL",
  "key13": "2jEjuiNge3zkxQK2FEyEzvYHn6Vy9qVXYhauicXnaHVdNs8Wte6ndWG2uQrYdcMUQ1ATWoeyzGjcxNtAYLoj87s9",
  "key14": "4sSSJTXT3cy4KyHYEsKS8j7ugBLZMepqsGCdwiqBA9xXWqmS6XWqGf7ad6iWMPkpsu3aSGPwVajrqarBTcfC7qvZ",
  "key15": "mJGvpRhyBq5T8m4v51mTZSDDafvXENgyg53bYoPzb4YG37qjKDG8ZMmVYVoa7NX1NpJzYHnRQboJMjnUsbjFhoR",
  "key16": "gVeYmpbvzvC2CXPRR4eZ3iXuuMHaCyXx1oB4zboTG7W4kfMyDo9gQFnRKjcPpQnzF9Jzkoq6BQS2ZTMQA9EUp55",
  "key17": "5b4uDRUWkmQJhke6kGYt3CKdDsf365fTiPHKzqCFXvFUtk3bpQL2PE7y1ALPWorn9fr3UXUYCcp5vZS6ftNroA4z",
  "key18": "2MFxDYSQBaqcFSaZeXHGNqyBNKz9JGjW3cCTwXBVLbVkUks9aYiskGrj5xjc3fCHnS2g6sJnj99yFRzWeCqRLc6j",
  "key19": "3g2Bf3Uz2HBzrXWu67rKRxPeYwW8YmoGf63p4TvHeRQAiH7jZ5jnozSB5EZu39n9SRMnGURoK94Qhq6NeWgi6zxN",
  "key20": "4fWwRMiV8FJJAHS6aQGh2mTSX7NHwwyf2Wd1CVG9hw5X7hW7w7chM7KaZcXfLjYcuCSUKDfPeM1y5okKjA93HYce",
  "key21": "3YLX61NTEoqJSEiu9bFPyPy7jetzJTwzanRQDyDyiewHQJRgRBqG1fk3Cc4ivBxr2UFQdbBEGDEb5QLspCQVmNGV",
  "key22": "65q9BrkMZtni2L1qUTpK1oUsN2RDWhWNyyGk3AfVy5bdM8TXxFaZooSrdAM3czqXw36WuEG4UaFoA8GBEWxtiotm",
  "key23": "5F5LKsTHijenVxK2CAwyEWsXKJwu6bDnuWWv2tBzxy2K57gNULJkdQPw81EmHE4YobYHzGRQX5vZU7cRqUB41Tep",
  "key24": "DHdhvR15XY8m6cQSHjStRdsk6oAqmMUiZz7J9qh2UhiYHPyBpH4k9ePucNbiaNBAAjHsdMMoD74w5JMFWoWJmCQ",
  "key25": "t2zqftawA2bzXzmPqV4MSTc54G9kbc2LqEgYTQWxxTkYYyugJ7HQG14Ljj46gnW321dqFAeD2cZ8tNLXRmdVsJ7",
  "key26": "4TxokUDGq5XqLHNw5GjdejkMzYWZmk5SJADeqaMKMjsv1SatZeFyg6gxXUFMw6yLeBEqzPETePjv4HXToqmV5cJY",
  "key27": "2Q5xF8yk9Lp9BcM5TsX7RA7Z8Uy1F7mjEQuY4mUazmc6fr3chAam6HbqCru4WDaNxw1FgbnayCrAjysxEWNqegkB",
  "key28": "3L1Rvbxm77L99vbrpqcwzn6QMym3NxmeMoUUGe17oKLc225XfAQxVnjCL9V6vSWLgu2FdH7BJCw58ErhzXuh1MPJ",
  "key29": "3sVRcLBVvrdAbHQPj1s8goFnRajLWzqBDjeax5gfNmkJk898j1dvsT4oTJGno4gNxPcT5796vCMSz2G2PNya6Mcw",
  "key30": "2aG8br2tvNUzLGQ1RtkCQ49nGHYe2rd2gQAj7LPpbqLbV5mqZY2yFEMn2zoe6zXGPwFCKfe9mjoNnZR9WdmYxuvR",
  "key31": "rkG6iRQSQhcVVv2ZB36bbyz2hQjJvBqhe3AwyD9Mp4yktjrpJpizjJxSUGkKoJKsX2FNdqJpXWWD2ubexuKVwLL",
  "key32": "4mPHVxsJmiod6xy5qhm6tRYAFGV2s8f2nY3DmyUu9VkFabj8SYHLn8aJQSwFY1h9rzjKTwebfaodtf6te2qcD1D3",
  "key33": "45tTmruEmj123KrEUB6WstoK484UKEgC5qaA43cewCqFU1kw2imqceBtmHqTpQDj7aa5qrRFAtgbDn1pxkovwCxe",
  "key34": "J8LM8Eo3BZ8723hQ4eYSRepWgxwPEwxZkk2paug7Sm86coZ7ys5CHdjaMafZqEyfvE2DfeRxN5KRJhrrfCDAXmV",
  "key35": "jcQWkA5JroqyW974d5gvAfEo1xJRrx8jh7LwGhMTB8E8ZE4auk4H71czdX7uwyP5FAn2rLjrzYaqaYY2qejrAe9"
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
