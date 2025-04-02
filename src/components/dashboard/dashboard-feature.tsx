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
    "FE7Vexe7aJdMs9qnGoCfB4EyTCcj4R77vpzc8kYrQ79pX9vbVUExWR7udJJmtyQfvftLfK5Hg9zTGbtDaALh9Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vC1qmCrNcDXYUjFwy6MEV1KcVQE3bPvyaTWmPdd2mCqSp1qCXRyDixX8dmupLNT1LVBe7q1Q7SkJftbL5yH4JQz",
  "key1": "3M8rFgovawtqE3om5jCFC8NBFATN99bNGZZXyeE2n5z4V2X5rrPKrRnm6mEuK4PCGoSs8MXKrsEKVsYwJBkmy2nF",
  "key2": "4XbezJViT3DBgYcPpg8WXNNUKCw153rtxJ61KLZgXJ9RUqE8PVzV2jHbTeFraAGsDwWNTcdJY3vF5raKrTVCqcjK",
  "key3": "28f3Yf1z4KPJkkdjxJk2Dc4qEcx8gTRiD2ugGv9DJLv4W97BjnitV6uySuxdSwqTNr7LLmgGCGg8Yit48mAvBSEo",
  "key4": "2FFD11mLytjB6ksaxiPM1QGtH9K5vu4cgaeS7FmK4eTxwzhDXy8EXKK3CHQ83oDeKYfpajjUNHA9M2oNUmYdAzGK",
  "key5": "5w6GJqW6xz97DxCZvgNrP7VevKRSdqKngtHEivkRCo9f72TYqDoza58hTXYxADwcoTF2wLhS68RWdYzb7XdbPhnk",
  "key6": "FN98f2xDEWdUzJnd4iZhJym2RBfBDquedAVnyistPdLVPEEVrnprg29UCFeg2iTwqVm1DsqES35hDb2gGWh5TSM",
  "key7": "nTb95NkMqe4iw6xM84EvuLtFPeFaqi6FyyvJoMbb2YjZojhqjeASMi6cVDsWvDfY1hrHZueUdLN7NRGJ7gyQQzP",
  "key8": "4LC3KLpSFycnQu9SMrP7PnJhPQsddbqeSB6Ytw6CWqZP4EbP4TwT6oVWYnsaaJzBr4o6uvDMAxLSYyzuVgTMBzYm",
  "key9": "3hLSRXtUxSXMgJuqEwi5ZpVYN3GB7C1s8piTLDGUcAp3NvE795mx7aGEAFn1U2zWSDy7M7xpK7GaSeg5xQuDcfcM",
  "key10": "iW8AURCy9EBAicDSTa6KVkBbBXfwRK6CVdAD55Dd9TADEHGvSx8h6BSy7HfngoVY6H7hqm1semB82cwzcjRs2M6",
  "key11": "3JicBfcpF637zasdfNFtMvW1KAqNLgGP4MP8q6wLGB7E7m8AfQjjZeGV5mXsi2VSDd5KG19UXJcqcWU1qTEmMtXw",
  "key12": "5BSoB84g1ivtzkp931YBgjsJXUfTaHtbrGHmTD5Uk2GJGj9vxMhsXtMYPfHzC43UBoRdmVFFRbRzDMUopyEcTrH",
  "key13": "4qcefgDAQg5quecyeELDKXEC2Ta63Yap69Xmq6YfsDt3oaeYtMW61anjXRyEsyWBcq9Z6iUvd9J9f8V5gvjKBUa3",
  "key14": "4cpU8vY5pitctgrhDmMnSd29SZNL45kLQajpmiAuhe9vRkJnHtuCmQxh44ByDbkoEGyPC7FcuWLgTj5QpY4GiBt6",
  "key15": "4f3RPTGQhTjMDfUZ3h9sEqzHpf3o6n9WnTJbtTjUFT2T2harN99MHB8jAywnjQo1Huhk9VjEXjcJWZswrhuS8QvQ",
  "key16": "wR7ANwc9XzZudCwe7rLqJVGyT2UhQW1RuxN6L7VcudfAqMxsspnad7MtDsSF46kGh4TtpnDHsKypX9tSsjfMdAA",
  "key17": "74823feKcF4CR3u5gSDTPyv4QTjW21pruRAThttwr5LAKRrqNZ3FLbueKHK9MKESbiurKJ5W1DB8cvG7My8er9b",
  "key18": "M3xt9isUJc6esVoH7AaeN7HEFavmbSu41ymv21F5hjgArVzV8a7xWxgv4WCYvmAoyYvrhXqJKDHN7Ju1Q2y7p9s",
  "key19": "nhbCcCUUnNXhnwXZcqP13dVksiMgpZGm9wN26HHXzy6v4sWasn8oo8DSQgTFSxnTpBQFfYBYaW8GgFjMA9fVG8Q",
  "key20": "3WiW1yFV1yoY96jAYbPHYST2vgiUktkjNnCz1yyjLD3FcKGaq5iMLaNC4edWuaXz4U21ecn6HLfP52nHKw9NFR3s",
  "key21": "32uAMu8P5zwDABnFVV5FinUMWEnBVj51XNuoy5UV72jgT1DFXrRLLN45heKcVKL7JhiZ6woW1aEyePRQsWXWBMSx",
  "key22": "2gC3gHDak9QqC9DR7T2QXMsQY7GfuE34naLkjTQ5x3aN7rvPp4qv2UzTqogvWf6Nvya8gcx2KNR1A7V3JCiiiFK1",
  "key23": "pRzv2jkQGWSXuaGGmEfAmgBNd1djBvx6qwF9eUbg9ESx8y3J6DDKnLkoCtZ8cq34cgAawAQDvojDmFSAbiFJGZ1",
  "key24": "PBUV2KGutfpvowd5JAp1NrBsEatMXT1MQpKkjAoVnHbgqwRq5xv83abfaBUAu6mHARqrTPVzK5FyWrmsahRZgjb",
  "key25": "4s2E6YkRjVjbAbPt89sxnNjscoYogT5nZ849yWkKHYt5MPg7vtnRaFN5m46oVVGHwmWnPHjWKvqGajDTjdRw67gB",
  "key26": "3991NkLwjofmhHWHHes3bBbfds3ukC7sJDkGhWSYiSoNebfXhGy5iCrmi24WoMdgJyKZLTcPYk9x3SYBU4tLrMuT",
  "key27": "5zVqEWmKBFY987yBtEgcWw1ozcZCgNQUrNaE4nj8pHt3LRRaP2BrNNLWc4ZxB7uviWSdwtEugz3Be7HtEQBcGWB2",
  "key28": "5R6v1J421MpH4mKjBMhNCH69zrXNXuA7XAsKLuX2mE8B5pXPrcXqjN4CpgAs3d1hRHap4H9F7BvcChf6dq1s7YLs",
  "key29": "Dav8u88eqtUxEBMuxoSv9RHNups9uPqVa9n8hbsmY84UCVyVswjzGVZAuAf2WmFodSqyChzkm5KJKztMnKKhi6d",
  "key30": "2XtRAZVVKDJdNEu9JrceBtqb83i1FDnqFjUvy35EQj1sDtRnAejq7aBx7BTcy7W86kkG9exPwn4doaMNooTuQSoM",
  "key31": "2B7tmi9ATQbs2JwTCgbN1BQ5CR47CJeSsYhuEeUrHHHbWiiTdwZR9agS2fdYFLwx2QNxcZwdZnNxDxDQeMXRqRnj",
  "key32": "4gZwoKXoXUdTuBg6g1y1ftFbEXwwTkNH4nwbwYieqjLnhedSJKYjPAWrQL1UcNcWkeevyzHsJAoYBdntQ7zQNaBa",
  "key33": "2TTWJvHosm9ppQPZ2fQLkbHKZUkiK5buU6VztgKaPrdK5agMrKyDKn5auot1KWhP8Jackv8ibGzPvCN6Z55UETWX",
  "key34": "5u5rsoR73WXUuNqD9WMpzYpoRq3SNiJ15mk2hceR8rpZEaNs56uP5yp6sVhfppHHPqhj5q33y3dkYDNXnPPNRB25",
  "key35": "2CdXVwpDA58U4EKLVmWgmeK2moToqsXkenngi9LbYvuZ3f8uuex6PdKPDxqeRjBdR3QzUmKPwcBmMhCjBB7TcuV4",
  "key36": "5SzfCanaWz8UbQSj1KpqVHmXj3XEezsA2cuxZGRT1zaF1xaUd6CePN36sPNMGkqWXywSgPcMT7n53TntQpTgRpue"
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
