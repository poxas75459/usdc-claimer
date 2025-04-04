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
    "4bg1QS5pPViDAkNCSrJdxFqeUhhN7eemfXo8eVPUjQG7XEW1prLuWNgouMSySQ2tfS37WYK34UheFJuaMsqXswsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45WjVbXfMPZ7iGUu3swr2Pdes1cFDnFiA8rjNbm4WiAZ1FUACdwDLzfhcAUXHiyPgTsJTPGhyPqnPFAHYnK2HLWZ",
  "key1": "3xBxCPAFrU8AwvbaTEDafhuciF3iVxUPXGvAEyR9bR8nLc1wv7f5mHEbBCYgt4wUMkVbv83s1DbP1z8QfDYcFUDg",
  "key2": "5qMhyqN78K4z9oGhfvZedDYTKKkb26dxcqR68WQdx2HxwD36JskextyCrW7ZeN6SvCE9NUureb8FP4xPe4MxZ9JN",
  "key3": "4VcX6Z8inkian4418euxR7A2deJqxMs2A8uNLJosNEgr1sHevYp3yyVMKxihBvL683FdHdNpYarfuRi2zYRenSxT",
  "key4": "4cszW4Ap9TSpovowAgP8SrxC3W8aShM9iTYdErdX1dvhg3FxAGDyTK4MacgVe873FMyf8Th3mzrQuVcMDEy9CKow",
  "key5": "43LPbSG43iE6kFw46EHecpU4AeFYhRnDLEVphggVnNwYN4SkyCmJk969EeNwMjM9nZac2SFWBXo2u5TdkMUqUvby",
  "key6": "3aBX7VChWpD4EQuMPNEfV2jrwpVxPbVKqNqNQLohT12wcuhTjjQVkKBjNkVhDkmfzKDq5vNS6QRtqmsEPCXeCDHt",
  "key7": "2VLNqY4dLc3uB7myr7VKtT9iW6bQUZbHJZvoFZFMaUs1tufwsuhZawMC7J8R8q5dL6iPqVE4ZYDVzUsw1k8f39Uf",
  "key8": "2CCwsXybP8XSAdVfcC6G6qzYJzE5DGFvusdseEmPCVDG5ubuPuhk7J6Vh5msyvkj4UU9N6Lxa4PoWrkNgWfGPXvr",
  "key9": "DzRM3AbLu5Zj2XTj9aQ8vukDHqP6iSH6kCdiApAALPY98FgNR5oPPEuzSkeu7vH3Gr5ZykdYy2VgoL2wZ1Yirs9",
  "key10": "U91hFKqkjKcAeuZqRLyQEC1H1RJb4UtWAtJDxiJRKuBWCfLSuf6h7X5mgN8MUnajc4ZWUNh1r2xrWiKqhspupbV",
  "key11": "3jr3NKTCFU7Gh6Le3psXJmSSoqpUZ6Ysj4c1Z9CNWJQLc6R6JUrCCENdeSqeCHgzwtodf2Hs98MsKdk1AeZ8ZwuE",
  "key12": "3VfCfqg32zwnGwnaJD1JkLbzYZ3xzmCngb9E5LKvVGhDetfF6MH2aDamiqgYtvfPg8upR69Te6rTyfhtiwMJkgBW",
  "key13": "3ZUANMupuswifqb8oEdfqwJkSbVYS6oXDs6cy71WarEeysroo3xYbswKQSrT7upMKmF3x34DtxDCPkshhnvaSB9",
  "key14": "2YPujTQnvvwkGdT6ZHn7uQQcAwtdrcpuK2n4KaffDjqJ2QLSbh2HTG43z93LmUZg7fq71j6xAia893rEPPm5QJtC",
  "key15": "4BDK7aQLHpxN84X4DH3dN4aVQDu7wQMvNsUbKT263MEou4pdMUzbR6mjfqgZp46FeG6HbP4Cj2yHy5t5Qz59p8Ct",
  "key16": "3jzeZx5Y34M81QTVtHb2S2JvJe1HgcYtWmaePpRBTGDYqkqCigUn8ZxpkSxaRB7ML56w2CzAr5upQh6Cay5nAJxL",
  "key17": "2g4ACynciKeGdZg9vL3wrbFAUHT9NZh65hZbGsWAcjv3nyDXg5yaJKG4WCM2LsieMT6uambHCHQnZt89HyenPurv",
  "key18": "5QAMD2jvYeBoNdGyjshQaZB8G8eyCtH3udg3WySU2rLuAa12U9WTLoniVZr9yjaYLPBsprm2A2NY2uf8f8jvu6BF",
  "key19": "3L4RppVgsvTLLTDkMYFWsai4JQWhqGVYdXT3aNDpQKmAx7ZZUrheuL1iJgdRyaqPzpgowtkMHPAUPQdUiURA8Yhu",
  "key20": "5FUpioo36Z5Dv1j77NuvotyamrKRLfM7REj5s3vQA3oTRm1gdGq1sDxdjD5CdsTr5aTtbQmDkQzg35dG5xm4ZkQt",
  "key21": "GBqfMQwkbaBsoQzEVvL6fPqQvGjt2nsJotgC4EbDWCW69Qk8H27FRru3ai7UVyToW6eWJmui76Wbvpf2Jo9Q6XW",
  "key22": "2rP7R1muuhaXLKmtgyVWg1MKkp7JPnZuv4jJohn6LbK28ywbdqPi9wvyrUg25svKi6GPXDhQMobky2ctdjhuarsC",
  "key23": "3RtW7PBpMtBtUf1kKxRttD2zwZH8TvwXk3xLnzw9341F7pzpSRSndhSZKbArx2yEBScY9DUvHyfzYK3kCAt5qmWu",
  "key24": "41GN3T4NcEsDY3MnYfykVZx7Nfc3x1Daghr1YFDRM8Pvgv1uvsW7oyrPxmmWM98yt1KPdGqpZZJDyrf9PEZZbqCz",
  "key25": "2LQ47VDGQchFM3BagPadwVLvss49C5UGSZyxjMXWtrRDVCszYfXKrP3LcSzb8GMYKmyBjv3164E3Q9CoXQ8FTZ9o",
  "key26": "5XaQbhAxj97MjAaU38LXjpJewgGNymXcKD47a7wnqbJrTPL8hFuYeNCZbgXJp7LTZcjyWnF2DoYQ8bdDi4jfpyki",
  "key27": "3fhGj1DX1mqgsY8qTHgu4VCmLvgsUjvGZw8vXRSyKXwQswGYBeBosyyXD3mcKXbqU1CRuuqAmewAnRvydS8zECeb",
  "key28": "5oAJ5mzoDkJuQZQMJuArqqL9MDwjjEtMXrj6PzChkFQ1Hznm23iYrz4zhQDgUpteuFCqGcGuRHxu4B2FDgvg4rDX",
  "key29": "4gdKduhK6VyKaVPWg27HkAVo1yb2cJRquUUrXNDHM6wbjZSHRmXfk9Pp63GE3HCKcU6MhXT6ojqXCJMQvD5MCnTY",
  "key30": "3EMPmSS1T3LzEsQpaFnBJAR2YCsm4rqFLvoaPjjX6MRdPi5R1BhA33g2hsD1JJguW96moKKDWPTeZ1d2o8gnUyWL",
  "key31": "4JFRKQEGLwUgKYmudCMXXTAWwdJ5WAMjRZNH5wvGafgxhiiyCebnZDoUo52988YCoEmYCNoBTZfnNeAk9khzQJM4",
  "key32": "JwhAdQe84pcYeVDgDQFtL9fBQtZuq8Tmh4eMaMG1f8oWtCoSkRVtJQSJc9onUL3PkGQj7vWJX5WvWFy1psqoGXg",
  "key33": "4YVmbb4am6Kp4D9k7ZCR1zqSQ8ZVuEPvt991vLMAH6JfGuMwGKzAqZY1YJmsBsHtjryakkFnpBDNZW21g4dPR3YF",
  "key34": "2xFxv5UVZKGPE1cwHEU7oGRzWrjrrKkkMwRCeVTmXwRriXJDkhAz55QWiDrBS5dBQ7LUVJ3LDb75SxFwDAPpPkBb",
  "key35": "jy438gfGhGDZtswvN3VVnxaZ2LHXv8VGypfMuMrJ9ZTQTx1uBv9v32AtbKHwoU8cyMg4oQLNvAyziWMysrJCGUE",
  "key36": "wyFK7TaLuSQBrikNQGbv7U2FntTHTRLk51yGnVtsy8YMCM7xFA1JqLMXMceNPPumsKY4TDoeGUJKV5BUm3qGkvr",
  "key37": "5SENJEqjnTUp37qf3StdBXGoLRvXm1y2wqY5N4437g4B3rez3r5j2CWDVteE1en6iD8Mv1j6t1L8sCioFCUNTSbN",
  "key38": "2usCCxShYwbDcn84xUR5WeqaiBZZFV2p8WfGZgTZhiMESmkYq2sJNZ1q3RR7yQAPkaAh8CGjbE4dZ6SkcT2c512E",
  "key39": "sZDnNfjyoNPcAtoNZxqiTdYmayUZEi9HUY4jkRiNmyaA9Fx9ky46y6WUxUvGLX9e6FFT711q6WUX8Mt5hUppPmV",
  "key40": "5A5NJ9nD9yQ9YXnVkd7nfS2RDuaEXKwJNQ43qWyta4VRkPeXYZ8bWoHha18Bju8vgEHAbFEEPsDNdGzbRKcss2LR",
  "key41": "4m1HWmdy9MbgZD8sYGyR5Nm8hTiknCvBFJFF6ekDGb83iC1uGz9vLdUZcRy8LELioESwUUThebrN2ovUY4DsR4qh",
  "key42": "jYAXqjAZpwkpcjTiTRFCHeZ4dPKTnBRF3hZXZCk3PZP9uikseyP99aGG7fdYzqYEN8xEZeExuBL7bT1gafbpHYb",
  "key43": "3u7NjGhs6cTNKXyDsmFL6CdwfY5oQNySJdZfoFXxiAt9GcTrxvew3CuReZ7kkrDuEt2sYqcRtT8kzAF47ytKbg8s",
  "key44": "4zSgDPtmThht5S3aseGSE5195stmvhLzQYpWRyCimApt9h4M7Xs1maPAPEq89wX4ZJj2jHRNyAj54ysfbFU16rSU",
  "key45": "65td1U8FTaGzBVUTrR9VzoRCqvuZ857k2rGiNqtsuwaWMZjGEArYXKCFeajb9VWxG6iB9iFDnixiThoaWr5Wiiix",
  "key46": "2MeSZN8Cyat4ayQ4nwa48NfisoEK3mrWRiR5KySLMiULNcqTkXE4PyibkgRgmoA4RpHpahkiRgduSFjLp5oeqa28",
  "key47": "4iZE6gZykTs16vtnmR7TEbEqckr82T8Dh5ne41QyxnKWGq2F4kKZojoyEjvBnmm2LmRwEDvSEuGUVbFf8VCQJTqR"
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
