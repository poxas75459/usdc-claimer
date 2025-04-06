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
    "4eY6DfyQSnG11aX7TD71HSr77MqCKSND1KQe5ZiQZdGbMsKrN45DLfZagNmovKjADmpDSXCcAY9vxc3RNZPuGDz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uVSKQCvjgysm6vfL1oRdJbSsWBLXaFm89ZrL322T5AuQ8cWyVexHyxqWT8vRHSqUW2cpgowCJFDfjsbEvCkxXeg",
  "key1": "5VAMvj16bjkNxsh8j6uC98bbeC8uMGBpGUYB1PLz9e7hxyn77F57Yg7aPvYguzULbiBVVcTBUbvPid9Fj7fUfkbT",
  "key2": "3CjdVC2ugqLDtKn2w4xA34cKHDsnaQNFjn7nk5Lj8kDFyibaj9kEL3cRRCMT3rCvivcb3oepapigXA6KMDABPFYy",
  "key3": "3CB2BNhRSZqDiCMsuCbCfsoxwoJgp7x3U2PFadWP4zzP1r2GerZaMsh8V2yYU4qkMS6YKS6qbXXRDZy3gQ8xbQf8",
  "key4": "2giiqK1t6PF9xRbmhf1HFAQE1iWEVCXi2UMJdFWn6Sd4DSrEsiEMww7SSMCq4kxiGD26DJemHSFyZT2LXhyzEmLH",
  "key5": "kw7ZQP9Ap5EyLKzxModqoRfoed2S72wfgUsyLdCSE5mLwRWrhsZPYcj5gJQMeP6JPY1CV5kS3RaETGiYAmhY1XZ",
  "key6": "5FTABnJah79PJWm4njxqhwsKqWbLgr76V824Lgd7udr7bsQidbTGVG26Dx3LtaaaThCX8uZXUp6o975R67TKK1LB",
  "key7": "3VfVp3YFnm1BdAWvNaV4pvGKYqCn2wVbXtKigp2TomoPCMDk2o8yosEgDhrxMinMdECWi1JLXmSUpBCtw38GnhKy",
  "key8": "JtKRAAS73rMr76i7FM3cj7YJy5w1PU7pFUUFLTKmE2JY2PZGGraAVoHMT6ATqwLLgjLN89Ax6GnwyvXBRgdbguD",
  "key9": "UDht3P2f34kYZVTLR5UkFM4CB8UVy8cjBXfy8mGWhFbdYDchZ2We6uridNur1R1Nwo4XFGhzatUHhF4rRVtoekT",
  "key10": "3dP4HzdvpEmk4ZwpScV8uGJjJ7uKdTTEno1TDRZWQjko7SXWen8qhMzXQ5snkpkSQv7T4XhVgrSsDk2uiJTitxYX",
  "key11": "3cyWvEjtSExVSe2peSfaknEW5jLmjnf4ci1GHWdtkL9vYQAmHWeC2r7cGdT2NscBDMFCykEVGmqZYYQ9t44AHSU1",
  "key12": "2rmwCSEy4eqHoqwk7vt194oL1oFfnC1Ra5hKVLVgNaaUUQeBN9kiAJbBWCGUm3ngifd5Lhvjz4krKWihqY6ej2uV",
  "key13": "3XCPgW4ypbMK4CeQDN3VBsDz6vtLtZodu2i12z9V6NP9ddWi82vynzFMRAEUnPJ5RhhkJAuLqLekLTaecm7tz6HU",
  "key14": "Tn1vizRvRzDWamoPsNsJbrmk3vH1k9ypwD9m4yxCqAoiahucXxxox3FDk6FpNpwPiK5iquo288ZsppjrhPTavqA",
  "key15": "3i8WwDupKvFMLCT7wYmZ14NsWVFx13dNpEYKkPAKgKAdYmqHuhvAhBgbtHdnJBjvevHQb7dbSyNwRZEivRqEmqoc",
  "key16": "5GizwyZEF9e8NzmVdzJA26HdevujkghAid8WrU5QZX8GmiVRZTyTSBDRwJ8Tta56WXjd7sTz7uCe2YfiJHrvy8NQ",
  "key17": "4utKY7S8PR9EyXpY7Wnhv9zMuLHb2yuYAzWQxT41EGD7pQ1KdQ9dwVAYr9rehPGPKzQSpLtww8SsDBviK4YYPHjC",
  "key18": "2sjHBxaVSVA6EW4fnvUEU9BFtRiefQLLWNueNPLvr7TyqgcwtmLfa2WZnqzYgfC61QmS38LyJVrc36oMssARFWHr",
  "key19": "42DVE3oX3V5tmGzMMxyQqzRmrET5xkMcDpSvFu35KUEq31YkMEBwGyA69S8tc64sX8vqE2v2Z9daE548tsX61s6w",
  "key20": "4iSnaDsHK7fthgVzjTgtDKhoSJGZST7nrcdEbakifGdowQNqbRsmcMb3JysT533P2UjwyGooDX4Ew6HhdFnp3p4a",
  "key21": "3tCdmLDbfk4mmGdFVVw7kUZrLqPeGBes5NCF7GoPHQbXJK9cBjgCUrbRg8us8UcGQe1yVeeXHDnGFRGPmU8cAGaZ",
  "key22": "3nN8Kx8yohCGJbvVqoGZ1FJ74jYS4KLZEZjb6zEGDqerWy7ewfZKHznoVKCr6QfN5bzmff1wmKxJsbMeBg5tZ6d",
  "key23": "2zhxqJVYx9fcCewwwLp6CWJr1U7oNP1fssrRSbUxSrPqcSAkLh1E7q8mdQ1Jz7mdh3oKqHsYCerFvTBfKjSUD38i",
  "key24": "5Zq1G8186NMyEWHyVb6FbX1TCXKnyRYCp62dYYgL2kf7ViHoxxNfGY1ro1izu3wK5u5Hsf3aDWgiuJFvbEYpDbua",
  "key25": "2HkPH5yrjcx4TENj9ejPRfzXzHfjuvRue5Y91haF1FhN7v9KoYbW8AeTQYxnfsq9uYgxJyhgjqevCtezFeH4NKTH",
  "key26": "4VTF8osu9MHb1EwfaZjniDRPkW9onCpEsfjJB1UgrjTYKxyqVNUCFEenDNSj6pHr1Y79ZCeXQxTRJmxnQEwZA3Wc",
  "key27": "wUsakkQmBhPcXSNgbVm7k5mw9uxqJTGEGwM1gTBs11b32pDijZhQeh4mHkZKgHuhviVfqPgfDPj8VEhf4pL6yWP",
  "key28": "vuv8meUZZZVfRDQJYS3wY7WuwDL4vUPsSD26Sjyp4ME4D6nBpbHBBg3gn4oVUKGtK8F64iMxdBHSHkEGWKJDPnT",
  "key29": "5VRtcWyuJEE4VWsRjUdLWsYemGSrTxSPPopBq7SmSpqeoGtP724tyRSXQupiX6XxP5S6pqzRF7mWuiuagc2RXgo4",
  "key30": "2EBWxzwxUL9HX4T8Sa6aVjYDf8fz4ZJyncmmxnP1Fw3K3jCsjLRYT2oJB9dQfwy4z5WL6KF1KxwAoFwkuLQxVEa6",
  "key31": "3YbYWWqUEZtWzQuMsjJGcKhzzykswBhYopU1wTCiZxLAJNE5FFo4sQa6yzfML1t1i6RaHinXTpC9yDQMrbvcgGES",
  "key32": "5eSKUhSy9Edmr2DsWywucWPLbq8uYWpGNJHhy88YxhrhZ68rJarDjmfpN6zaCMt4SheX3M9w8Z4NXPLoi32Xbnuq",
  "key33": "3fNbqhtUmT5mzFCbiWD7Fhu9DU9KXVer1mUKnGGrZ5sTtHfH242xsdKC4AmU7TpMEG7rPHQUGm5cHDNpUUD3sXKH",
  "key34": "4qAocF7jjY5vmJCTTuBpyh9PQbFnn4AH1JKzb12CLD8qVj9SaPJYur28h6ZDcc8L4cTVnGDnMZrHxWEWe9iuqaMC",
  "key35": "MHJLEK5cr3ASDmZLN2c6xxgtrPchXx2xNLw9GPM5WJPTp14N9tbpA2CjkzJYH39RXqePD3kgvqzE6fSo4QRZWAK",
  "key36": "4pXJQ2KbLrwdvH579LsWne8i6b1snMWGpAa5svL1GrsKzF6GJ8daXusAatNHmzvALMBTCWfB1uFamWH5gLeacwwd",
  "key37": "2BhNJACuRuNA2oyGCaEPFzDsFzcsruYP2KMc535KQcStD3o8VrQX6ntyJE1nTsFmXigsv2K4YSQvaY3Dtv9tozhk",
  "key38": "8bBSqs8ssy8GWnPd4asedxanrVqbdoXLvAGp5ATcujzbqjwhnERoMeTofgogPSoxYE9V5GhBqcFQg368iy29nu8",
  "key39": "2crN68cSSXaVW3P8DLqWxvww15VXKuEN2pbm6AaqGDPkrxhjha27zB5biXhnvwx2oepoMBDZhLpmMmdUVkpoXt4r",
  "key40": "485YpjfnoRDmXHsAYz6LiACDGKp1bMoSvA2oogTX6EFALLA394yELVQGdNPaVkTQPoQ9XaTga6iYeN4tQz5rZ84Z",
  "key41": "5LoHrFMjbkUXtxLPcQgS7HMpxkLGmz8GG97S9zyVxC1BrGE9oaS6G8Twg1RC3tTcGgRrG4tjFwoNxmXyNkVzv6XX"
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
