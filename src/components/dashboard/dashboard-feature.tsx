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
    "2M7zeghRFQoCBGqExn2ggYfVRJzWLDeby3EHVVwNCw4BVkKwqUG8Ek3RkLLo2pdKtdF3uXgwwBENiDZRJ9yrDo1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25naHWFU7nSqADvfToAoSqiwaEptQsVCKu4yqkjJ4UBQA4FUVrH2gSMJLZbCgpejrrgA5aeArNSbFoHP6Umb8boc",
  "key1": "NRuMibCnLZpZX2T1jV6zpZxjbGA3MxeJzmLQegzwRk2uNVbLjzyzWob4hWGHRR49tUpibYxNM6Mb5hB9TTJsBBR",
  "key2": "47wDwriPQz6Ns1D4YFYdRshatzmM8eTsCs7LvwPZuWdZuqZvybDzvpy7egqoZEM9GUrQQeNJszUPtqCLKNifqZHx",
  "key3": "5rh1tpcADtGNM16WrSMpAgaPt44a54veFWkbJKr7vhndxKrgwnTbgneFmw4sWARGypRkmDrUHfBXBeBZCsbbE4Tv",
  "key4": "4NR3czTAGvA84nRRDsNaH5bKcyUN4FTMsG7YgXptFqyqr4CcH5aDVS53ZVSkq9vAJhfm8UaNxDgFeEnBZq8JLzbt",
  "key5": "63uW4K8SukRaycj8NcGW24UZf43egSCJEiM3Bz6X8iKYV8A4oToy3p4JmjXpXWGsrbqgf1vzVRTSy7Q1EN87452j",
  "key6": "3GHdyr4YE4cBeb4cfSGzQthMAEFW2j4VMLTZdjKFSVFgCUuyzuHXsKfKyV85Y4yRLpKPnJX1epDmUYpKD8i2HG2Q",
  "key7": "5mt5ZXQRQexDShxZNQ316pnn44n9RB2oZPFwtLRLPFkKE3hpaMz1BMBuTEecSkp7efY7h85LVdN5mwNcezJPscLE",
  "key8": "krdf3FYsg8PdLs5iag4RnCkuCS3DVWVbTzjjGjcC97o9zmH7PcAsrZWcH54zK3zcEoCVu5qMQrRXNA9ArHKFe11",
  "key9": "tXVpVBqt5vHa3BrgEHauyDv4AyaTdHTkFgvbaEzphmt1uvPQoYNU179dupSnSBszBbr4znjQSFbMUn6pTd2PX57",
  "key10": "vi6Eon7yC7k78QcwgyfmJwT6q8f43zNmLPvjgqmj5q3tpPF6gaJpimJKoSC9gztMjwLGxc74kac3unBNaQhEWtn",
  "key11": "2P5GUbimYUL2gRzpXdkfUE5VWFEDcyWD9K6gNr6s8vjpCTkpE3aCVxDHCKH2b5h5bnQ2HsBd2XNY5mFv7MpT9EH4",
  "key12": "2WofZpCcDyAKAAsB9gAKoJ1nr6MHXjGbyxxLBoXt6K2uuECNwwznLM2hDgaQQ98k26qrbTVwdSoWbG2rrQtz3VWk",
  "key13": "54vKuHZMDtsEraYJhJ5GLBrWTfE2RGJmASEncdTT4DWdfeusxWUudf24gASCmW5rtR1Jk4T5cEF4aCLRMJZr54zE",
  "key14": "3JBUUK5JdbpVUDaPp3wn6nxXqVzSnx5k3mxV91NQzzimdpWNWgtZh7LHNDHUJWmCSAsmw4C7FQrnHnWcYpXhgqnX",
  "key15": "33rVfYTCu9swa5ibSe3X6hA2RzL1xCkdu932VouucAbQBtr6SHpbNrCjkiyjESu9Es5qqk6zGAxTbrauwZEgz2e7",
  "key16": "52HMMDmqapFvdDGTJV3jNW6vyaAPEpeXe8j4ZX6FqgrQ5De9SSHfXJSagHw2eJvSvWUBPkibWbbpR2kyv9SxbLqJ",
  "key17": "5H3RBQST3Z2XTxKWezR2xE1iNn7Vu6i9pNjcjrSKp3CqVBsyZqNqzQYq84vwusyKEnHjRyrtkPGZEhHkZUErM2xz",
  "key18": "4RayoY5Zu8VvnXYZzAyHCkaJZYaiP5ykXwdhqss71AzkJDFPuS1FZjepXkKvskqSYhoFgUoNPZvTBs1QinT1zWKM",
  "key19": "3RRiQSz73GbjrLjEs7n3haowkCC96NPmiAAKUVbaeAp9WdhKXbwZAK7P2MBJHgC4nAGbdFLLSQuyYuQ7bcHS7sfW",
  "key20": "5wEz8XyaQy5UXAQDMuhQM8qgbQkV6PCZ3pgcJM7YAqUnngYXoVPH8CeUHQHAGfBrBXnn4YTHcSa2NaSNuv1z83ob",
  "key21": "2XyWbS77euks3mNCWsBhr5Yx8ceqB1KoknXnU7de8HP1BDBcZBiS3yya3M3TKxwc5KSSC6mvKibs9yL1U2iyZTat",
  "key22": "4Wjs3Jt3tN2SaBC4Fnfevd8Sp3Gifvp8r2eQiv38mfJqUMkATNAndG4s1cnJ8AC2iu9SvkaKcwKDdKKXJHxRB5CH",
  "key23": "5kAbbLbyt2NmGVf4Wy7TCvW1N1fAaAWDCFb7Jrj13HD71eU7kCzhPQLiryX6KdtbjqS3iejuNvDRaPA55m6HcFUG",
  "key24": "21c9juSfRs5cQomYGiGzsaSsJFVjNPgyz1A6SDRRKdy4gRnCDbsYpwGHVt21TLNnj732iakiC7QWttzX68eMUH4q",
  "key25": "323frDjfBYNRTY4AsF7T5o8mcbT4F61qxBQWiaCU7FskAXXL4pGX9rorYinDwEGBCdPTDKXxGySKdvssBps3baHr",
  "key26": "2VESbCALmA4W9FcE2uPAHqsGSmUaupK5JyG3AgLmsyLDiDynxcPpyHieHpeRpCnReYhaNMFVUWyfg2SLDKxRkMhw",
  "key27": "juHFiaZ2S7m2g1GjdFt5mm9Fm3JCcam1PpC21kDseVtGuq4vYbdkL84kXwmUYbMQyKrD5UnZ3qFeYvuVn5j1whK",
  "key28": "2Utz7C4BUmJJRjc9WAkrRaej9ffDepWDgyHPuNHtuZpRdAqRvBxcf5bPEmdMigBJ49Dx1PH1ux7UUfqjj21LfQ3Z",
  "key29": "4GNwyfn7p7DFNMHgMDzc7ieKYASpAaXdJ5GZ5qnJJxJmriTQDh39CZvu1iNCXpCHEE9QftKNLPGu2BL4F8Xu5meF",
  "key30": "2k5pgtqoR4oqzAFcCayogCKkYLr1g52enRJBwrXxT2uVC8EVpoBUTWwDJnMbtKy6Z4Aq56LeE1BA2sLrKcK9sBh8",
  "key31": "4b8BypPkL2kZZa89jUHwYiWbwAMpGSYnwbuAQUsNBa4BEysFTb3LmaFuj2BbuxhwK7hRdMhLf248RbFCktcvay6Q",
  "key32": "2YUKpyDe1zwFPivVLkw1wpopmkyoEm6jB6MzwcQF3W6XfSqGPfST1nXvcwa86YAZNyNRsnHFVtvGMAVXPCsEYu15",
  "key33": "2C4nJQHAUajyMLg9n36YPeavw4yW5NZHsnMr7Bmk81EL79qujDnpasj522oSLDn3GxTR5gywn8L3DmFec7egS5EW",
  "key34": "qu3NpvvcQRmckXuMDty7Kbu5T3uhXNDbHmc4ehsyoV9Wm3nAePud21ooicfCPTobTDDGuZD3Q8oGd42hRhcZDCB",
  "key35": "5j2vbHSwPNvkwm15cyt3Gu3UbK2ko3FeScR63ywYw7Hr8eyH47wowL6HitaDnHCameFVgB2dEaQqeXWHFAkHBPGP",
  "key36": "2bnW3dCdG5nP7Z3zg1NCKuu6xJ2CrF9KsB1pyZiUn4N1Egs6PFhX8B6A5ijNuCXJjkUy7THsQnZnvbVoVq8hDk8w",
  "key37": "43ztNRMuTYFkGNJZxQJMSPf4WQy7iJ6LttHLwsuoEmBhkvXrsf4CHjxYfRavak1zR6DABMVVCbYjT4Ka3ee5sJqB",
  "key38": "4kKrEXDj3MhFVzuDEtMC4PKFNNPgiov7xVe5y7vtiq9F3vnhXDGMMiqs1Sywzr3sMvLKsXddaYS7AdMBU7jCcD1X",
  "key39": "hRpfsjkGMKE2jeQWhDvKM98hN4C3TQwiqXEq6vukMSWoadCLn5YqytiNuprHGXDY6H45NxVWqHajJHd5Kujqt7y",
  "key40": "rxqMH5Yq3LTGKW1xMndpakxKxjqWipL8jpZ45o8PmJob1jcFV7xmHjNUZ6UXDRPeYVXDk5cnvUYfZYV3QW3wFTp",
  "key41": "4r5v2w8Rv86LSxLdXjYQoRWHFjRTYJ4LwW5y76VDZMjm5GVBU5zQ8md7p3MXsJaqtwsrcgmrQBxatU1gqhkyuiDo",
  "key42": "4BzKSoLqtK8cYGChu45HSiC8v9uHzSVbLRFcpTY9rSLnjYpV2UXv2SrwLqrEPYg6RwvPdSr9FEPkbmncfy5egPt1"
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
