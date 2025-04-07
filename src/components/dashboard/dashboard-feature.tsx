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
    "2cZVz4Giyws5RXM8vGoB42JEMCy1Z4bPDBoNMSN3gMcx5zCxhiqpugpDJeo5eJ5vtdm5BvEG2gDSChfugPBL48NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hKDLLFsdZkxU2AiT1GuvGs97n3Vxe7wSZLpZWd4JZZ28tefFS4pSmMYyFZrmaU8soQngsUnxdqYCNBoBmp3NWg",
  "key1": "5GMC4k8Q2Wff1qbZEC3JzMiTfoGY1E9fgzgoUGt2MJFmceqsbEoMaNYF7tZdQPqELxCSBQsQgMRsEMXZCSv2r5qk",
  "key2": "4YAhkFFEodvmcMcEJR6yE6dpuux4QhxJZ3sbgYmyFjaB7Ee5nF7Qh7PSqa7NxsqrtitVTdoNZ9hHiVRNhYpqTuaW",
  "key3": "2YwXZLPAfBjafxE3FBiKWPr5TZNajXMWYPoZ3dvcQZBtMw7Et5ehvNHJGn6zXFiqP3BBuCNEPcYQjFckXRrQaPq",
  "key4": "58Cuy7DBvqyWNoAnWDks5dNTrByb9S7cfsVmJUJMH3RHALANbt7u4vwWoJzHkQzNcETDEZTfro7ZqwaGn32sHq5R",
  "key5": "4RdvVudiMJU6ry2pMx1ctKbUURHPDcdjXpZYHfsUSVWw4ULFWrM87fFGR8W4WuriQznCeh6fH5F5j8M1NKvyGN6F",
  "key6": "2LP5ppiueUjDfERvDW9U97dqZ1ma7NWbdx7X4yPRPLWREMJQrPM87fAkYnaU5o8PVmLXrfbHwx8Fr5pZueW7VaGy",
  "key7": "8kgQWcayiy26dY9ZXFNqwxjPgi6GjNfc8ciSn7QVEEnuiF9BuhaLQ4e7j7aVNHcDntc99zS7aS1rLewJMDpKFc1",
  "key8": "51iSnxXLL8ew3cCvZYkPpdtFzSmZP6SwSPVYxZ6rJE3EcwDx1bXyFdU3kd4cWRB1ThFppUBBVdTNGaDye2q8kcMZ",
  "key9": "3AVXUNAb8dcZHod2WVksZQr8iPQeCPkxSsgayiV2riFbxV3ReWzFa73tudeNvDn4SvLtke6wFYqasWQdhEUYaDY2",
  "key10": "3H2vuQUx3xAtaTNzsyPXzXFbTGcMDsj4jSYzkU5nbvFNjxGGN7AcPBfKgx4xUG5qvNxpL32JtriHthJzpTpbe1Bn",
  "key11": "5QM9ewetobeaZBP68Ez2fw17E879XbyFmXK7ZGALUpQV6v8zwNgg4aqX2PLN1bqrXoPHyDisDQqz9n2gdr9cRzjG",
  "key12": "5KFVhG2urxUqbMoAtAnZkYrB8Um5UaCDiSr6YCWF1JG2PvS4aK1dE95XnoLnRi9ojkBg4jHb6oLZcrkZqprPRnsj",
  "key13": "4strNEiy7SfiPYzQusX1GtrLPDYEhJocg8FZcum2F67U5EwnmbTUcNqaKKwzBBVo6hxT6iFAqk59PQ4QZ35iY5DC",
  "key14": "2K94oJRtfk9kvyaRenehdYvbjavzr6yxMyvgkL7xEue3mg2KU4btftMgE2jzH3W96n8CscpTMwu8J9z5HAidkVzM",
  "key15": "3nyc6WTBYziYsKAeNpEDCkVaf3RiRdaoGw4k7KsWKuHCa25NW6KyjAfzwLcdMSHxi42UKXbseZrDtgNBh27bW21U",
  "key16": "2QrT4dKJCM8Scpcv8gLWeSAVn3pMx7G8a8VPEr6ULhxUAdNLxXSQxq5z8T79mL6itH6DVySbMonzPhnXUPVxTajs",
  "key17": "1YvHSHgjSEY2pTYed1irQjS39pUCJHZmy7ytuWoHvZDjXbfrwGcKsip6T4Y9BBAwVwWJJp9qhyM3mrdYBN6cnjU",
  "key18": "4H6cvxShvpPLBMTzh6dm2hURtdsh8iPjJVGhrUyCV9NCGRz46LaRAfsoAR65EoPpjmpPXi74RpifLLkJqnwJd2Uq",
  "key19": "2feWgkVUpAtLaosDM4eAPuHCKp6Z5tMjakeZapq9ngXQVjKD1rCRVpGcijUr6ZcrgVKUvdVKhaDS7NGARKmeAGZ4",
  "key20": "33ETTCpzMBKB9SM1U6WdfSK1gcvRFBNpA4iNkeCLsANTokCCqy7N88vH1A5Ygu9BaGRU7xPD2SSQqx3LEhnLTHRS",
  "key21": "cFzWXKbBMyYCJYJ7QvyQA2dicGCfgsWmpsUy89Sam4y7trMNadZmibHBxkioRPYMYZq17pRRBccGPvNdj8v7vqP",
  "key22": "tJsuaFn7vPPtzeDUXcTjLGBD8HfzYYgcXamfCKP2QqjXPnMmrKwF8dvJ6TNRHUie4RSU7m6sSnpvut4rGCcZqV7",
  "key23": "4wWsRkudRWH4PwodCXTiAQK9dCFsPozeE1bj25Hd6GDmGxR6nywUsw6J2Bncx3enpF2GGVW1DdDt7jN2bRhFPHyb",
  "key24": "3n6o96jBMDJrPYLmFLhHwxdFEbbQENfsKAgNjbSRpvLQAfsi3pcHMqLczqj9fyYJ16gKNHnpFeAkwyyBsY9QPiwT",
  "key25": "5Y2Q4VukxwApGRyXnXWvocNb4ykuFqDMjxnmKKMYNUQbQgcjFCxk8WSeHBRUAXwFCjQ5p5EZiQVKbPy66GUBk9e6",
  "key26": "P82NYCFmnCcHAcek8PSWVTSGRAUCiptiYxJLHp8Tq5ze7ocTF5XnbvK9bu1CkfXapt6HB2Ptyc6tDsXXo7GyCr9",
  "key27": "K7DFSjDT4r5jMQ6KxVUynynBYL9jc523xEzAoQEkHxZKZUhpMeLcdpBDYhaKLnerieFomLJ1D69cgsmnv6mXrvS",
  "key28": "61tkdM2UKThywWNcRupuoATPsKaHUKXr3zz21pn9ZvZpDp1Acw594BMhAyUCCgwW6ffp4ticdgegRnHRT5Ly8P5f",
  "key29": "4fjPS1xViv6myWXJGUhaoiKVzMt7EjyX2LVF6Fcv9wTTFT2vBq4SNgyBkhML1V5JBduk5chiKEvpdZy9wwAQDgmr",
  "key30": "5oeyegDoEoJN3WVQUeKGEdugwJQ38NrsPwL6xKJhJtvDz6L414pkjy1HQvfK3a7s1KHzd2ABBmvak911zosfTkRj",
  "key31": "HLfUKF4aWgCJZSJW67CBCo55jDQwqEqHZ2VLCNkc9Wiqk14avpZSpfDyvpBq3Tvnc6QgFwSKZA6eLtVeCqws8Qr",
  "key32": "kbhpuNgzhrEmQJun4RbYGJ6piY1fKJ6prCPidXjFBup7YiAjrjo13fCBYhfyCU5X11rQR2GyHPVMuBz2AZDf7V8",
  "key33": "3Y8gr38XtsuS6pzZkWB9xfhd7vCHDpPhwwxnS4F2wJfwQysLkva14cxsMkUMLETPgUc3yRGWPYMt56ETgCJvFmvN"
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
