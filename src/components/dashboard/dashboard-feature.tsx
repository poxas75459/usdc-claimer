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
    "2x8mfirh4bXZ8UPsPNHuhYMZDveMJoverc8XjFo5SvNFERWyV6gDrFyNMnUCtjtKKPh5HVKUT6WFdCBSSRtx4MGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58tVDwidph3crSueYM242HV5zWNvhdWVvtErC4dzCirP7dmcGYEuwMPWgNeTMsPoTR9ApynLd52qwSJ9HTNGzS3H",
  "key1": "5h1ibQ1oPVw4n9cLT3DWvsD1pi2wik9sygBeWVTA7c7n8BTXtD4BuLwQMDxPSBzqXd49igZzhyeuKYuD85ZV8oS1",
  "key2": "2pM7s7Y3bAoPq6U5rguQq3cMXvP4CmGtgfcqu8QuaqAQpGK8EEc3DNQ9iGi5AKo3uWQVAoFQxSJV9sDUThzX8eRF",
  "key3": "2v9zbguSgE1j1rZtrSZAc9oD1zTqA5DjhGstfwWFWG5TuqZKv2H9DgFZqLsJBLNEvJBdrEFfCVNi3ywKQpxh9voE",
  "key4": "3ZJhPW1LmSYKjePKsEPoUJu2Ndja2fT2QjNqKoXHSQaYSbz45cQHZPJg7UK4FfiAsPVrD7FXuffJjkBKFwJCrhYy",
  "key5": "5cg5uTi7xoGGjwU1mqYtLUgAbQTAzMBrRLjHMkNn63nFs7qBsuREfPx12wg84fpfKsUW1a5bfZm7LA9DKv2UgmLU",
  "key6": "2xfQBcWkS6TFhD2vcqPTZEu7Bexi5A7JidwPeNUxuMa2Mo8gyQc2PZjJkHYmXtx5FwdV4ngpo6AQZr3PjicRJdUP",
  "key7": "63FaKX8rkrAipQPYj9PaTH91HC5yVKQ41mWKwDuUCCu7hXJdhFMuDwvdYDAdFiiLVWWNjLuu546fbcso1wEr9RMS",
  "key8": "48okrPu6gyXgVy9v7KP6TWmvEC1PjWNvyDcuk1UbPbsXjW7WBv4fREFbbmprM4L3DnR9z4qBgoQEN5B1zZ1KgQmr",
  "key9": "4VbHhZGDbrqDnSvJA1Xtry4wWiGSGpooHMpLBkichLuFJd3afeubUq4ZCg64sUjgDq27EmdFSvtUE3jvUXhEdS47",
  "key10": "3FQPWyaqsABccvYnYNMnGwrJHWH5exjzSd2T71coYX9v6nJMRGqBqj7iR33azftthb652dEZaWFpFthv5TgyWAt8",
  "key11": "3FNokPzq7yu7PDSgfV2XXnFsrmD7FhbQtSsWKJc3XvuZmh6sAPuiYoP7JMr7vDsrRNgVnRGGv8WB5kgVt1wxKwMV",
  "key12": "4wL5b8PHJWgvoMCfHoMavBoGyovUboDTBmoqDwbqKUno3vAno4hW4Wwxxg7BF7K1FFybaHLjqN41Dcmrdj24mPdc",
  "key13": "4aXyLFeJBqXT1cBVFfESLjUrsHNEP99ouNGr454KwN4uGCxWhDMp7bDmiwkietKFk9Hj86Jq4odrYdmeAfp8zfwo",
  "key14": "2vpjd9AdweWQaDoHVtmWMMjQxrPkvWdhhqSA8DyVJH2ZLe3KkojxRHd7kb8G1eiv4ufC15yp4rG29YBPqLh79RjT",
  "key15": "2baCuxTs7Qv4EVu1DP7UJ9Q4b1ZHKYpJh4ZRPWjnJyoetpkbVg8Fo92APeBGYK9KVQmzq8x2mQu1B449ctQjXLSY",
  "key16": "4pjeRmtZ5e2eva57xHMXviVXmwELifeNc4DdGyjeYwS9z1zaNNMCF5KUgEgvCN67bMmxbtz58z6pkewPBiq3jGVJ",
  "key17": "fguEkazg9W52Ez7cgP1uYGApLSkWfpHSDkk42za1X2ZXyVjYvkBHfPtz9YcDXmSatsgttEeTFHMet3cKpPrsnzz",
  "key18": "5dWvoigow1vmQc5KiA3hHTJeNE2HC2wRD3Wf9FkfYj7SKyd3nRnagpKwWNDkWfqXvBcmVcPsW5A7gZSAFLwGvefU",
  "key19": "iN9AivLUMrwQAsnFKMm6HnZDZfzqB1NcZDnk49AWkogwdMRTJknosjkaBnhuLnN9b5oSicnQagGECWe3au8rKhh",
  "key20": "4sTqbX6BzwcdjLxKrJDrH2KbZ9AyEwCawnKTkbaDPosmEoykQxjc5VzBYmdwFBdgh6iKFuTd1UhnQKwy2baP4mwv",
  "key21": "2bGf5DCcDjYRDLVrCENrCw3izrepiLzbFrTb2TCkNwPAwqyeKXT4rBoF54Hq4kGj2de17xB89YCMzjzZ1GGQKJBw",
  "key22": "zz9XpGzSLVyBs5cv3CjGJwuvkSnz83JF6Pr4ynU2oAyhGGXiZvvmW3cv7PtoQ9VdM1fwq17UTaVqs3VBSnaiyxR",
  "key23": "2PBpeonjsrL4TZdTumU6wV3Y3nVwPY5ZunXvdn97EoTXHfSoo5nHumCp2TAbJqVSeQRF2pSeosc1DbiPqvYQhCcr",
  "key24": "5CqfNc1cnwoCiXk6PiRo7aAjWrCfCq79T6wbUHva6d3cKUR4tEqF68iCJ8BEPPnyXsEwVNaYLshL3xraDkW93iXa",
  "key25": "5kHHTCEcqxVr4uW7y2DJ3w4eJQAcWVMgNYGqsWJ445UK8cvJoBBJAxAs9nUWkrT5fPZExWGJkHm27dGA8E4cgiGB",
  "key26": "3gEMAr25KLaNyg2S6o1yMZwwk23L9eWSAZrkCuu5eCt3sHA4iT7RHfeVRHGwRsLk8WqFtiqnqyjtYaaNzHakzdKc",
  "key27": "3PebzKwr8uahcoSGYqDGExnMxGUCCwS8jPb7wsj5TocT8iPWyawJjHDZQKjAoQYoBG4o5itkRoCNbByWcodMp8zE",
  "key28": "5aTwpD5uP4b4VBNJzjzskXAXaMuz6YvHdTkL2fdYGXY4Bax43X2wzmCNbSvNgL7Q77EHdSw6TZqWtYyYP8navs1x",
  "key29": "3jDfgrHRy9phga8yoxnWK8viuNkwaf4ykKw95u4nNrdyFvR6hVZMUpxuy6gZd59S9E7QTADKekUAFzTGBifYPxs8",
  "key30": "42v4qcJ2sD6mNJRZ9YEYtGouv3gjLRji5VfGXAGH2S7DfiKhqMtgQzu74t3sddFjREbwPGtcjsvpoCaY37YToNZw",
  "key31": "3ytFKAmZmVRDuLFdTNWGcsdhgGq6HNfQusFj3tqntmv6kYA75Vqp6wZjuLbzoJWsJX3QzzUnBz5SvfA1GCa1K9ks",
  "key32": "5HxQcE6Nmsvkm1UoC4YXtgdVJo15rjG3tbuMFotk7ACQHu2kTfhrK7jShpQKJDZTTfFkiN41CAXL6yTnUYK3ZtAc",
  "key33": "4qQ9qTwv9ioVoE4BSWBQ7zDRYkaw6RbuvtFYLUnAUs8Djg2dpQD5agu3WUVHLLrp8cXQZpz5zNsN1owL3TzcjW7A",
  "key34": "2En2vpgwoALzDpefWi2sYWjLivnbFs9AreKoMdiFG9aWctJPN1kNZbJGTwVM5cVzCaCzHvZkjAyGX2w2V8p7W9v7",
  "key35": "3p3xY4zn8Kb4dMLewavURtcdPcS8RyYiydr5Bz7zBxpVMchVRPsMfrJ3YLb5guUcWu4YyB7PjbZwYzLH6vwsVyZC",
  "key36": "3Lx1EqV8gsjtnXwMiFycSDyFwsDAx4b8u4H32kYBwsw5MY93FMfGTFsMXTokR9hFMsms11rtFkfDA3vXES2Mg5Ui",
  "key37": "2YRsupjeTi7kVzeNkJ4y2QmzZGkCgemc2CL8YDYUUZqtTCZYx47tt9rekiMjyX2uusZhvKKK3UsjpwaMVs8Sh7hy",
  "key38": "Yzhnz1zchK8VemNtoGk9ddFSXUjr59gHJ2wfpGcJQmfNUxBvVqCua5EaaowSp4U4zQbX91hmYLXfHj2TZraRb2i",
  "key39": "2izixS8Uvuh9voAbmcMgARhSQz2YR5nTFsvGaqgbjuUsaqeei9vVtsAchBuokp7WjjqLVMP3KRapUWCAPdr27ePi",
  "key40": "5YDae9xwTbqDEtR5eXtPqrTmDeELHgbAZq3CCenaeKrgK3iGicafS9RwgFpyDxAf7PjFaucp82LGR21cFmZM61d8",
  "key41": "5pHq3SHaHU8KgyydqXn431SND7LBY5hTK3vWBwb8Vj1TeQM7Qgf3U7AYz32eqkQC3tiQJmaHqKuVwRBgopSzcoaq",
  "key42": "2bGsnACWwHFDQw9HnSZ66BCnW8gZSyQorkCKGjkhApcAAM7ukJgkq4jx3EzSEgYSn4mhA6MEHBnTs8txa3XsxxdE",
  "key43": "45cyAJ3sNyEWCJzRUGJC1eiUPqwJgsdFaTyjJAEZPaB2oA6o9sCCArfh5gb1Ybxgd5syf8UNhiTr6FBk7J6J7J2a",
  "key44": "3KyzExXeUJwnL9XBkvhYEoAm2uqrQrJkk3THcC2bu5DgvGydZEHYnys8aVNkHxo1yWC569QGbAYybb1z1vcf7R3p",
  "key45": "3EiHFyY5e9F6RQj5UHxiEcFAFNLnk2XgY6ffbpVsjeuizhQdqAqLw5V1RWipdCzyi7BBZxx1Zg8vNZQhyq2yRdqM",
  "key46": "2DAqnxYnzE1QU4rHZ4L1PRjH3ACXzQDEM3GMLsJW4hHwALBCGAnu6ajNUAnoM1XPkZuKpAdP6HKpHAENUngLuHMm",
  "key47": "3KtncSfafZHKCP3NohQZn8MKcoQTfwDSMZimSdGSeedT7mmVP1JU4PSk7srpVxCAUN9CwRkto7nGkWjbYnvD6xQy",
  "key48": "5BVeto2NrjZyFhsisNu4Vyz8sPoYPWiTj1BQGnh5u264vJEhAm9MubwoSwQPq249rgo5vvjCyJTNg1FVTwwg775L",
  "key49": "nNEmQwFaiB5Fg22cFvGykJX1qMUZt6Av2WmZ1oAoT1ywBGei8qzopoBWVgCLdMUymevcaDUjLVhowvVmD9fv4mc"
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
