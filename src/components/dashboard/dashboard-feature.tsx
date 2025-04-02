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
    "5RrWHgUZNfiGafvv956pW7xHDCveWzrrpx8CujErHrAsBNhHhtaMDHdKvkFcveBCG8cvxiTN7Nf5uCUawyoTZFuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kYqC1r3SDR2QhwdTprrEWPHtzbgzWck16haEG19y1yKLQZDFm1KWN78maWoNeMnTV2AHqMtyZmWFSNvcukR28JD",
  "key1": "5bjgP2tA8s9b1JC4ga3RKxxa5iXzb3MEpR1wWKN5qJ88oZgoDeyjgPyLqtKpbF7KdKb2zLhE2M2RZBhGNdLu94yk",
  "key2": "5ujQzPpkK8BMK58fPVFYJnfh7QpcmvbiXHdjN1xHxUDW8RBNDf9ukY2RkVwZhiavcat53Nhp6PGiggSEK4LSfky9",
  "key3": "44JEjqycaxHaAudDTMQ6rDfMePn3tbTu2UCAbf7A8XpCRBX7J6GjS8gm62GXgcqtMNEMrd8htT857fzjQA8sZSSz",
  "key4": "XyCvYi2hGCQ34xLfPPu1gg7MjjnTWZ4vmog6zjgRmkoiXamn2LWEi7PgCta2YSPSjPoR9kMuPyRbiucnnuWqSMs",
  "key5": "5rsy6RND2gDCTKVZ64W3TVgCq7eB39oLJBZv8YFtDRYFjx4qtLdgA9QcJHDj745py9X5BXJnSzYv1KaJPoJXPVHL",
  "key6": "4LPVJuV8QmWAs9ShhdupCbAxo191oG7Z4MALz6qmM6LLoFW8mk32pxWchWp5qMJkTxZFUD2KueHN6zHaH1kF5Qfy",
  "key7": "3UxkSBtVVZM3DwkgXoF7CEtS6dbsktdZZxMbargQScNmDYUVdRZakCfsAF3kZ3rf9uue5kVfMDWSpGC9B3EY9NMW",
  "key8": "59hGkycKit8gwE1br7jct6ayjC5irKx7sFprfKBf9i584ZCif9Zt4UsFDbJkYq32TTADg9XwAgo8mEH7LrMoxzQx",
  "key9": "5eZbHfuriydNVN3AFFkFJZTcaBkakmgpxiDLNB1kPoYNBzLoWkuyUEfw8FQ93axaditHxmfVyNJX19eXmYaTGQGY",
  "key10": "5RRtfXeeM2ZTEk3wU4TCwhprgRbfkKKp95QvmGqTKvxWzSy8Z5Ah7yT4wNH5M5Cq3GrRyGkvJsJ631Gok7Syy6QU",
  "key11": "QjR52W3KWV4BsapnatFn9hLemdMW4xYPnyBjcwxTCgtzeUiuEfrrE5HBrLjRGP5tDeiL7B9fRajSERSJVUZcuUj",
  "key12": "4GbgEWFtgTPM7qgvvp2p91KUwcKh8H5qkCwt3ZTEFBY8YYuqHg9CtyB3rPoK66wRYN36Eu3W8sxjQJb7JMePBpTV",
  "key13": "3oYocGqHHxGtHZsmVLMM9uwMcBq8A45nk773s8GeR3Cvz4SqjLFspDHtDV8e52wGkeQpwmc297GjXxf3SmitbSLo",
  "key14": "3noHtNfAJqgZ3petHGm7Kc2iZvuF6UQHEFaCQeExg1U78fkVqg11dMhFSaLSQ8a1iFnjWzGkhYMfrsD2czkTGA8t",
  "key15": "31VQc45sd83GsPWQ8a4MZVXfu4M5NMovbB1Xg3NjFdz9CrjsuHYQw5g73mSF8qEUsjrCXWyEtyvFWfrXBgPysmSe",
  "key16": "4rxz77e6SGi1gPvuF1RjgTVviWvNaR2BoDYt1NZN6uXxyDTBsEQbo1BTz1jikfo7ZNrB6HcSsDss4KiJxg8mJX81",
  "key17": "4NdypLrxCVXVzqNbFn6e1J1sWJaPpGJQMZBgsk84NAzv8UFRquauLVn3wNfzEcC8n2ZWihbrCL3bB2he6EjUsdPW",
  "key18": "39TSqdjh97GSDDr6em11piG43vSdZRzjMGthLqzvcftwetRmqEiChGQ1q1ckYqdWYwH7iyfopn2BksiyLe9UtmWK",
  "key19": "3LNuKFST6euZ2tLVKQZwBcoLQVVa28XPfRHyo1wUwRnAqYKCFYGFWAWK6h3vPmJw9zNtHDxqr5SuViBDmammj5Vu",
  "key20": "4tHq6C8XjuqSyyQidH3eZ7gpXBgrMjvbPv4UkhnUcRBKySBLRLMf1aUgx6LWKM4xTZUuob9pXZhCdKqHSr61Jozu",
  "key21": "3zQnpPgsY3UpRP16XiR5oJvykMXrFoeSVgUhViYugUYeCXXQUq7ZGKfNjGCB4xnVBnLnCpfcDqX1hJ6ZnZL8gpkW",
  "key22": "i193qk65zc3qhxCMrCEYE4KZLwANBpGJ1f1YmymAU4mWygjiRwdc3aSZ6yccw1dSf1fMR68meBdhDpkx1iZjWVn",
  "key23": "67XHEFzojJDknLCtPKf7kGnVnBKABjyG8CBTGb8bEHWGHA8WamPb7EVQgBPo7WAXXsKoFDemkmzzmPU9enannN68",
  "key24": "4QEE7H4qcDzuP6vwMDJVnrhdKym9kA7wFXCFtAXGBp9nQuRY14Yqyu99GmuhmdQbArxgizgJfCupH91CnB1DErGU",
  "key25": "2hv9Z58JLj1oRVvs7BpC53JvHDUjhvp53jUUqe4Q17YQV5C41nw1vCqSQcsZaMHdAspQ8AFsnefBFWadC4gwEQPL",
  "key26": "3EGjeqAEm2HRib8gqHBr91Nzqq2YMxW54FCtj2sPvpWJPEu3PqWCMhvcALjSSFPeSiZSg7KEKxpLqXFVFXQgoFZR",
  "key27": "61yRHjG9As3gfnKDvc1rHj1QtSR4wMZ1s3Y4Hv1111j31Zo2Jv8drwge34iSsaqj1ySJTSQKKUhvafCxGdBm7Mtf",
  "key28": "2SFMkjo7LsLqmSFw6gQhgStBhsm9Bq3gydMnZY7UbB2mr3rPi7XsMCZ58gL2DPSgj6ACLe4iayhqqzS9wmngGoqE",
  "key29": "2H83fgEwV9YxyNGLbFEZbEVfMRGefN6dVwvkoBbT9Vb2fwwyPzE6gxiY2VWk9tJkrEXpczR6FMCk53pAAcuYvZiQ",
  "key30": "5EYC4K9K16nanzSaMRC7dyEEyVztAGWeRjnH4s2DmgbtLmyiompRBVqZBaY1u5CsMCtUyZ3AUSxJLuEMg3BK9jTj",
  "key31": "QX1U1knHr31nhM8MsTeSeaTM1DAdGRbwyUjdQ7tfDGytvsmM3TbmRD8cHbiCD7V3sTxeK7VaSjrPwe2kttTeNeb",
  "key32": "5bqEzL4dqX9NvBdtEjNP8nk9JtcHwtq5XtreRZmVyY85bTBhtrpbdWE3B3nx64F7e4yVmLixP3LkKmHmZ2sUod5K",
  "key33": "59dZcTXdEoR5uW8CSq6TzWWWkzGcpgyobUseUr62h56tbeyynSBErzq6FUkrBbfjtyU25CPWw38fb5cKo2sHsRpx",
  "key34": "3N2WPeyqFtWVZ1c8GCzNLaLuScv2DtwZbfdTE9AZSUhCEV5T5tHqGCCyXf15WptEbFb4afz9jMV4H1j5fAHWVHEb",
  "key35": "5WgUo5nvq4A7agwbwNtPHMReAoxnLPBNUj85KkrumHGp6u7hMVdYquJLML6pGjgwLX77FTu4EtkKAQ3JGPujPEfB",
  "key36": "3nHGirXviDFStmmMu7JRrWWfUy9KHkyAYSeXhAgFRWwzVrkoT6KkYKdcVKzNwbungqyLJ8MATgVcLLj5C2jT8Day",
  "key37": "5oSfNHQ1AfxiL46cKLoo6s8J4SHSMeVyRcVevt2itjGFkGzb9K4tLLsvkGonhjp6gUzn3v7qtu1ZbQ7gDkjZs7og",
  "key38": "3h9RJUgeMkouD5BEQzxZQYtZXxD51DeqdruKJxqjRSNQCFT49XTFEPvFxJk4ELA1CS9EL9zuWzwZh8y1K9WUmED5"
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
