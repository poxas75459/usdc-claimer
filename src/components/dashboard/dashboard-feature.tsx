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
    "iRUBRZsaWA4S5dD61S1UxJA1Fir4WwT1Wjv64CZieyzPAq6nV1sRu2mMJAG5fa7WYv6BDQBHE3iqMeEcQo2mMvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389nNZcL8Udj26g86hbxY3F3p4NaUG5YcrgZifBd9q3Vz7mauAwm48ZSpL1vZV84ie2NjNf3xDX9EaC4MMKBsAdT",
  "key1": "5yWjJgBEN2z9eoGvehKrdYiTmuXmgSHzjE4U26Y8tWsPAMpmQoMkTtnzVJcSxHhpEh8uyZkh62UQh74M1e8ZHKqZ",
  "key2": "3DRod4sHHR1E5TyDfYWiAvMP2yCNQcF5uCH2HXLudqn6FLFj7xfgkdSGhixtEthcrsc9WHADofPtZXUBApn65AXD",
  "key3": "5sK2rzSEBU88MkDcXUrSxaSSxL5LCK79bgUjj9MssriLmWFoWQnuY37vNQC8KnjvwNbPQXStxvrH5WmVRwJbYhaD",
  "key4": "3jPUU3sKnegk35sNr2vXFp7eGT4A7YE6ZoktU9YGmUcbngYdkKZRpEyx7arfwsjVGi1HP58qWn1LybrrCCP53Ktk",
  "key5": "258NC1UMKHiRYBcCQVYgengr1GkVgyrcZZQ7VaYforreewc7oGp17YL9D3uB9S1xbNGoSSfGwhPxge8PCYSfPUCj",
  "key6": "48Q7FbMiaCDivpMkeuNxjFoQEXS9s84QMD3FQrBqmZwY42Fvp9AFkNbHXrzPPozq7xnu2GqdUpvu9iswDQXeLpDU",
  "key7": "4V1H6DwRkupAq3TkX52jMPrp5AE97J6dUuYSfFy86sHi6SPNv7gLWPdLCZqL57pocAViJ8Gtn49u5v4UmNzmrSPZ",
  "key8": "2tsXNkVgBinR53JPiWDSDX9PEue5GwzNp72gEAonJ2eJ8z7FQfMd5DRSC7yGATRkAj345eNKA3xgmRmNTb8u78zt",
  "key9": "5E7ot7pnsEef7JYfB5vVMtdFJQB4mudxysu3FMo77svaNnZmuBgTBu49GJ87FkfgE3CiFs94PwPe7pHwtJQUzWwA",
  "key10": "23xUvBzLtzPVH2DmExLgyuSg4bGnLYLGVUBCzAWie2WTkx58t7zhqhwUh1QE57uJhYjyCFwznUskKhtjzXu3v4ZC",
  "key11": "4Fi8T1cKvVzE4dunPh472qtvwHAfpaEbpd16rXwWu6BtLimFvCR4EmYA1jydazfaLmtYG38ZzLz8hSiaYxwbWmm4",
  "key12": "32A5XwH2XPukyN7oK2WB98UxVEJsSiQ4bra2eBWHb5DS8RraxDLPPwCFEhksCU5DYwN1PrtHcRJipzpzG5UAhiJ1",
  "key13": "4wp21rHDaf2SJUAYiFRETXeJ4mZRHJoCA5aa3fNyPSn485g6UJqLNyWKUFPJfJumdxW36mnq96WK74uatYYagxAY",
  "key14": "3qzedo9iGSitNmQps8ZEXjTSL6yy2RtbvPWXAjZx5rmtbCHcGoQxWhNYSTVJWvowZuFqUCASfNgTDWz78FawpHs",
  "key15": "2rBVkPt3spfXyhDGkgHyXNLifYZvf9a1twQjF3s9iZu1sWGVT9jSc6LRfEVPyzmAG8KpD3eXbmPjDLV5GEcdFEWX",
  "key16": "37ofvAJ9a82tGPfULz87mjfrgPhvAWDHiuNw5Chgj3my1DNC4PbxkvnFj1nxbVNq2ECNhG7aT3J6rbf6EjFs9dET",
  "key17": "3Rt2z3SNuyWaVeFaLift78h4vpReCAQ5mWvaFB5wedCeJWCeRQ5vCBzU4P2r3TRKwGXskcWszoJJPi82NwsZcfqo",
  "key18": "57dUM2mtHEk3ep6WX6M5bncSf3d7j9y2nC1CAp1vYidYQ5nGqnGTMJP8aZDXRBKZbRNXtFgJPhaSfKNDRYAQfdqg",
  "key19": "5FKicdoGaiwitkG8t8dPUEBb53WXHBGL3gdtUMhY6mqeYCmyY1T9DqcjQJcrPhKQAucEgc9VbsYxuSEaZJDSUkAX",
  "key20": "5KYeTxQ2E4a3p9USkHTPxW6QQp37rf1nQ4WyB4aXuq9Ru4S9n3YYyoBC3nyMbi76NciqNtttmTHKrt81gq1h5g1s",
  "key21": "3BGTjBsa6RwvdiTXCyEYU4GSYsRPJcZKRSjx5K26cbUPFBNS3PFfieBYNgjScQd8QXozc2H8mer2cvhjzFJx4aHg",
  "key22": "4L2kX5y3wNUohKmYqUMncFLsNcQzWC55ULCCwp2BNyg5uojtY9tCUGqwUyRvdCoAhppCxKCARVd8TmM2zaSSoMem",
  "key23": "491TPsoWtW375K8xRB1VJqYnRFsod6r8JgcyanjrFMvhTRdDwhe3aucND6HWpv547u2k7jXTG2GRHTGbTZRq3fA9",
  "key24": "2xRQBpRjQ2aeLf5sLhMxMYLqMKmKf3k1bZ4eFXnbuCHpv4S3Ya79P8JkXDBfST5q9F5z5tMJVjeSgUZ7Q6cZkfC5",
  "key25": "xAgA5XdKwyrkyi1Xn95WZsscSeAXVS9RrgeoVKnGwrW3erkt1j5PYwux34wyjjnsmryT2KX2D77Ps8rnUSHHFpr",
  "key26": "45pqyqg7PP2n38ytjhMGGNWioyNY95gDYrEcciUbqVQuGn58ftpeMnVCpPBHes5N45aWvKSZ7rKymJq5tju5sucW",
  "key27": "i7Ef8wZXw1TfzBHnr64jYJZCTntjtMvgB4n1AQ3ojz5zB4M187tK3VqVaagdSkHhbehNanh37NEjsbdJBe7RZps",
  "key28": "249DNLU8NfKi7cr1EdXJb2KMDu3kvDThgBVJ7j17cDJY337HCNupKxvnv7G3XJWvMMuGhrbf3dDwkezS852kFZpL",
  "key29": "3gMHeZSxwvEY78nEBsULgE9Nn9iBogGyrLouU6wRLRT9HJcdApE2YkGNxFguCuY4a6WhQ3vfr5ewLra1vTNZCgMU",
  "key30": "xk3kL9wTTznarbf6ZLYHJZGhYBVFvoqvTb6cXchR7fe9qw7zzRBFN155z22tohxRwkZGmmoxd7SxS4CqoSTPCwe",
  "key31": "5YuoXHBrx9nF5Fmo5ZQYNDE7bZBZmeXws568WgZRhVR5sJcCNbWzYH3N5HStb4RiRnYZ6DcqDVuvc6Go1W3oK6bb",
  "key32": "5QPUGNGCB94yhcBUhFDkLzkmCS28bny5SArVQfHC3rcj3xFdJd4pWrX4vQ6p9AiFNbDfSHD9ivNetp2KPssn1G8C",
  "key33": "2PfMaDvHYYRjDWjngc6sPmzbBcLHNRVnaDM7HF1HaedxBvURBqeTBerqMaV4ZjbiUJ5EPJceoqVGUjMtb7YFmxpW",
  "key34": "51Zfv2j1o1NaF8vXyH9v9Sa9fwKuvTCYeZLZoT6xXHHqDGTtFcWLcykt9fyxJ4Mc4oypQNvaZbdhB1Ps7WHAMvaB",
  "key35": "4P5YXoVpLRfQwonZ3STUkUGS2Fq4fP27t7g9Ggf8Scx5rDmgKZvL3HqocwejHmBW54Ce8Rrqhz9tBijQ4B2vZKca",
  "key36": "3rZxfbb2iJZHkQAgUfGj4Q59hErhxPEkpwzFPCEgmC7M2EEJQwYDEkjj3fUb544syxojyRP7ZhftD7GEwLLy4yTk",
  "key37": "4SYhaHgMRLiWowmjFpPneqZmMSjJRgzYoUgYqhTiB5ee1TYPfJRfauNZXPMAtCqxPZ1XM2dHxjuEipnxWrVyCBvM",
  "key38": "4o7H3NJrDdfKd6AHdXwpZSNf4ueNS45SrVgx6B75hWSdtui9QaigeR4tNz4HkceMTBrYrKyRNTimWdG7CVhKzRpv",
  "key39": "4YU4DDp14YDs56d4fbGV4GJaubi4yHNSm3nD2qBHW6xJZ9K9uQCkv1L4GfxGGKq2qXFeZ5gL776aSzxF19PVmK17",
  "key40": "2GF8XGQUmqR938jK9sohGrb9BnyLYNzg5DtzdAE6rpQudXU2xAJTPC1hXWDNJRPgSvgCJ8LzCopVU2Jd1piTHLUL",
  "key41": "2Nh3hn5bv3NDueLuVgknBNKZubFfTxLavKAMJC3gG4WV1SUR5Kd2RtznDwdUwX3UR7vdNiiHx1We5JaVAnDjFnge",
  "key42": "4RaVEjoz4v8JGGAStEyVpaDucnm82vEJLr5AfGBDDig81YGbmsERSW5q4bTJuYKJgaKM2wdyDPxLoBx2sGvWLzsF",
  "key43": "2TG71696bhNhjPrsHqbmdxaQGM5p5rxA7G7wpAzkyk1hkBJwWxSuBwpht93M77x6zs9QFHVq8aeXFx8tVbUrutEe",
  "key44": "3TT28HNdt5PiTaTZ7df7NK6FFD2rYA9s2Br6PZWnRwZSP85bnGEru7bNYdLXDvDsxAT5V3epcLknkbf5bXL1CBxG",
  "key45": "37cGRgTrxgw2m782QPyVPgvw89fLLj7PuJFe4T2uXin8qVX3R4gTt6QYJ2D2wxjiAZp6PesuqwzeVVn36uCt35fq",
  "key46": "ArcS3LgJS1zyBFHnYRtDbEL8zHsEk5zMWXnRfBN8xBQTanCmiQN2SsRy7oDBg48rRbFJxmTZU8tYN8aarfbfTgu",
  "key47": "3qXtsEXVbBU1YW6FyLUgsbkaMqEirsRNE9LKXMap1eyWPLKcapaVfc9G6XwJ9e5sLP9NbNVrY2CWXpfxtLZGKcwa",
  "key48": "5ftbD3NeJSKR8vEKJKyNJXjm8ag1uKQ7svaAt2hAy6MDyChq3fdDukBLymQNDdRDiuzDfvouFg52ZgHQpdwBw2Vn",
  "key49": "39NX4LKsSMedoPbuifYu7ipBLtuzsocWkWHSC6xWdKP9P1v7RsdxUxKDWC18LTcXXsh3hA7zNKGUdkgzyNDxBNxm"
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
