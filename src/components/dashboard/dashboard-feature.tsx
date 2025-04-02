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
    "2DNBknkZtfJwSjPsFYBmPosVstpXrCXqPwCRNzhebMBCpCcZxRq1DJ8FbUNuRqBH6pXyacQY35th2WXCCnubk1QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcZ8S2Ghc1956eTQGsage9ZMTWZHQPUaGDGSpcEW24uMteC4dC9NsxxtaCbRt1MBpzDqkp4SmNDoEJvr52mQXQV",
  "key1": "2bjd9CNdHpdU5AaHKuyZnNNAWfXSp9zaR9ARB8hmeqHVXgaLngRqaA8pv1jC1FgX1F2tqBbpuN5WX55cgbg3VMe6",
  "key2": "HV6ixTZ9xab9ymc5pKTy7ehf6FDXLd4iBRZAPuvoWHWyR8iW3JKNPHKF5UNPwuzWkGDGUysGwVUZqPJ61EFSErC",
  "key3": "4KSozKbopeNb2zQ5GBnS8d2oEoBeaGUsNqtR8yVocaJpiqWFjeR1MftrZ4HdibtPcMezaD94JSFwZCwTNw3EYMYP",
  "key4": "4JcW2f6Sj8rLFV2Tmggtj75PUHPPfAdvsptVAFbsnB3j5fpogUNa65h2wnMRSHypAi34AQRqvuEy7y2qoCxyLmnN",
  "key5": "2LpWi7j9tWsQMmnfkKJUKz8fLKkN4dVmknpyK1aETM94QzbWrbytwju36ct5wUAdqYh5K6Hi2seuGdGADHF4CxWM",
  "key6": "5HfdKcFe7L3CL7wjeFQHyCce3aDMqpsXxJrqG5MDCzHA9uHhRQGo6NGepNg1R2sLRXXD5kf2LdEm8jXR9BXRCea5",
  "key7": "uaHt2SpdXN6BKb2be1Q8JS6KDfwChFptXgaed9vQnjz1ya9t7WpGHAGtZd8RmTXfqofv2MpwXoAgd9LjNuEV7QL",
  "key8": "2axo3ypLqtjqbgynhu4BZ4896e9iYyhCokMzRBsRYkhvUYWWiUG1adcvRtH5UffezsZijHLWozTuVwCFKC3RL8bp",
  "key9": "k3bauR7JA8CLa1ZD1LnWCc36xKZ9AvzuXKnQ96eqSs2qvynk1UUJ6nfNdR3xjTMrj77DM4dWpK7nuKqdRuo84zn",
  "key10": "635w5cDwzzUEv9po2t3NdRoZWLpQWArj6huGeswD28vsQLA5stjGe9RJdhPTLtgeigjGWTnwnDLMqL15WquKxy2J",
  "key11": "3SUocE2sN22b6c5wnf7unRY22bUHyeU1A8dweJoUFiwY9sp4KcksG78qep1Mpw3pSyQrPYGw1VmYsuwxYrJH1Jaf",
  "key12": "5oGqdYbSeQDzEVnj79rgirqgqvJqy31NxBJg1zTGzchvwJEDecshw7EDv1TrReuxFiPUiHsh4MazC6iY5nYuh6yq",
  "key13": "4htgzBt5f97HuisQKfJpSsmSW1jGJEHBPtQzuMpuNG1AYJ9Dh6YP2QSog6uaNrArmdPtKW5aFkgZ5nuA7T3x6Y7p",
  "key14": "5uxDvDNt4ufu6bxjhJb75Vg7TSVFL9xCtFSQxwS3AqasjJdu8owXfzdAmbwqpTS4boVDzMmFmPCRpkFVQ8b55LGm",
  "key15": "5Th1tcWZtnmMGUNwDh5Cgo5HiKefF5kFtxTp2DhXZdix85q9bLaeXzLdGJAZT9cg3zkqihZDCrqsAJavcH7dMnNb",
  "key16": "3U2zs6mfRMefHrq1rE53qZofXTMEFwLth1UCsZzF8dGHDNXM3wwLcosPdugmFJbiKsuSotZq4vhyoe3zvJu222JG",
  "key17": "2u1przSPV51kM8Si5piRekrLhXPH8R7tiyg7SusJigEFW9HTsfMhE6nbU7zA4PtSRx3FiQ5XEkRfnwjuNHHrDhon",
  "key18": "3M6UUBBZWv9Jx46yxEh26LszriHgtAznd2icgzTqq7i75XB2xFEVpV5XXpp9g7feq6YvWitBFq5uSrNyYK14mLTw",
  "key19": "5FReQbJvgEgZTZVisyj1HJsvac24U2x8E6d4P1cix8SM4F4vu3hZwGzjSxqwzunnwsBbexPXSQ2AQrSDeHX6yPcP",
  "key20": "5iFaup5sMBm9BqrdSRX2iNvCfDfPXEkYzxVT3rn4K4UDwnoGcimTrrfdgePPE7rDvr5mj8DYqNgDtKSXoGgntmfA",
  "key21": "5NFc6jkWzQU4PSEn2VyWtPeRd7RftufkAYbXdshDSEGiwD6phWZG7sp8f1wXgpYjtGFqrPqJ6NQVgSfGeHRDqD8k",
  "key22": "4cGE5FeY6PSBEWoznynCg2V4HKSfsNY466v8CocK96e8f5HLFZs6CcBr3Ens3GktnAS1mzZKH3gmdMAKw1w1WuCo",
  "key23": "5z9haU1BFgbtET12CyuAJFbQRhDrVTQbx6PCkSLtbu1WZYgtaiW2uJStw8ExgzLH1Jm5sAuLfXqouFVgQrjLAGj4",
  "key24": "3bm8ZEWXxwfGo7EQvEX2ckdWrGAjEJwmrbv2pp24fefAJrQGj9AwEUUy7fD9kz3Hz15HfDx8Y6LvLynDiZzc2ubU",
  "key25": "3XdYg79fQsZmXSCJW1uYipoAQPFWhNUEfSZ92EepyGSbfTHJBriYTLZmA4VqRh2xNWouEGdDiK8XT2ZyyqXomeVE",
  "key26": "2ZFZSy3w7NCS9M18UAQzkwiXH6KNqPV6p12y64V1hTbK7afs11MGFC86Y1FCaEjD2vLBZu33VJQ5W3zELCtogWD7",
  "key27": "3heJjGrasrReEsQz5eHDFHqK98VXvHzvkc47Mp1PCZtMcsYGqenubVsu5kRfgMWs1XApSxjKUhK4tYRPmu6H5n5w",
  "key28": "5aQzue2DZxTmBVEYyHFRGxtqXTcKfJMJRYhDecVsFdZbCqFRYoqzXfhTh1qfnzLYnSG8vVsi73qAZum5zPLdJtJJ",
  "key29": "4raYH2wMb7VjNyfYBMJbmc7AEsBCgyk2hzs47UZBbrWkHrR4sizLxsL69YMPgCbrniLEhjEKaYik6PXTgPH4MQCj",
  "key30": "4dnMWmWFuBDa3cu8PCL1zemFMaiWPqJqyAkSVFbHJmLzRmVS9NBsucGnzY9wPhXACwkmYhZVV5EZkJZgpSaVNRrj",
  "key31": "pDm9ZnmRiwWBqX6CbKGpXz7ot68bZEho9hdrVWzt3s9nA6cMaeJSsn6TtGr1T7J9umXBWjNt6hFRVyCYV1dPXox",
  "key32": "4pjK1tyDbk3Y7eHMiJ3FjhHCyxJKponCuo7SjNRGwS4soDysNVXjKRJYGQy5SuqnbZpSbH4hG7PvToR88QAfmYsK",
  "key33": "382bF3eJde59HstdpWX1fjEZpey9WczuCB55hiuCUKxWCbgKVbq9yqGYWQstrSbj48YPpGQgXBM51rm7Q76phy5F",
  "key34": "eTELGL1R6Za1iU1Tn9T882R7es7g3yboscuUBRCJ1Vnb8MDauFYFxXwey7mSqwtL8yEzeYnDYb212SboSd2bEUW",
  "key35": "34oZi3cWULZ9F7pbj4oDqEj1oPmmr4YmaN886EFLFrFxD65qJGTkQKj1G6byjumn2cjxYkU7sRLs5A6b3hhJt9T7",
  "key36": "gfG23yXQ9CV6MaSnn5ZqCAyrAD3NrZAEiQRAaBHwmoEyy3g7CNWPWRHoogbqEYUG1WuK9CMP6wdiPjBjNHcJP5W",
  "key37": "5sz5J2xYU6n2rjW4RCNY6EiKYTm3neReDqcdCktkpVCzCpjfuBzcqT4RdefETJzNbbSh6AqY1utxgRLUJKErYBhA",
  "key38": "56it9Mb6hzmddEK99fUF4GCXWudDSJ8TbE9jJ3UYu2BZsRdmKSJXGmZosqmgYYTD6qRWx8od7DBTfsK3EDvi5jBM",
  "key39": "4FWsEALuiJ5fqevWk4oHJhBM5CT19rrcgitLuLiviTUcVnkvhxdpboh2MLLn4fXsx94CQTuLX6ko1D5qanxQhMfN",
  "key40": "3GpXB9Fq6L5RBsQj9epEwchZU4AU5RAu6taXSSaaYDeuBeTVrFEZ4TKgGSR3FkhvbbMqvYCJZ8qjaNkAas3JC6Mi",
  "key41": "4yEkWGfa5mGUzADHGbMNm8hUHX8jybTKAiPkJBso2Ce5hYwwUFgPLgLhPsrckstqGmvEUzVeMvroU53EX2ukA5SU"
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
