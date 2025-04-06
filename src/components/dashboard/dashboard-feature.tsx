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
    "4WTujP4iiPFb2Wouhzj6N6bxDnArJXWSar1gyadTs41KNnrHu6x9T8kjgWtzhAJtUtcJvfBTAciyrCYeABwq8hga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqKK4anYCXak4wfctwRBJ3Le99DewwtWLBQQ2pXVkJkNye2DMcbJ4NqorwZWmKtuo14M23qp6m4jTXdQXzjpSbE",
  "key1": "3Cs9mDK2PiyftGbQ4LEQjUs7Yv8eg8B2MKNEKZSx8GyTT6Jv7n1amdL9grp6ao8woR4TBouHVJQXp6mTHoAFWG19",
  "key2": "2CGxFXeagoBqEcr7qJop75hLKQH4UoYFf8hod4HxBUputAd6vhRD6vRNYCNr3XZGUcZcwxy96Vqi8DeB8HLMzpEW",
  "key3": "bKQQipD7vXKs9WPsZvry8QXNdSHhntzy8pLVnfd5fFsNP8qLTc2vSVJHCCuj64ew69CAzCk1gRX2ygPjmskX6mK",
  "key4": "4wJARLDEn5dqgefdamZb1qVPo4Fpgjxt9BZosRxMs4hZhFnFY4DW4aRSuQerhPZdiA3ghdHmFUvdG6ZuZktwENkF",
  "key5": "3bs4jnrYoUV6V6DX8LCdBaAPBAMAm1qDgnkAEGXxLfA6ncVY41nJe35kmhGF2UR2qSqVKAJs73JTwzAjG2qucivF",
  "key6": "4ihFvm55aw8HQPWtQ6XSsW85PifCFyvgyRhGzM1Nxv13oP4mZPocUprjuz6UJwACNShcEmYuZ1rF5gZH3z23UgCp",
  "key7": "4YKGVFvGek9WEw2da7afkbbw9GrfvY8qnoik1iUf3SqJKfi9d1Mz66DSD9yUFW3SfhJ5drcpxWGbERh5qjuS3y7T",
  "key8": "5DSL8KTYCefJedMF9P3o2AVQhkC8tn4wf14MqVHHYxyZBnxBjPLJGQ2DixFH2BWoLewTtNQVWisi3eXFLUr18VMM",
  "key9": "3gH8j3ng8LEfbfvUUwuMEQYWPZ2h1dRDAbTNAakGjHxgnxqVyXqtJNUhqHKkuH14dQUazmoXjEwhGzrcTw54JPps",
  "key10": "3YrfXdbVxxtsMXnqzaY1YtMfeoJJqTgvnP9LMWZJztZry3TqhCGyZM3DwPEi6KUSPXf3EcS6BdDYVTXmsShsp6T5",
  "key11": "32Fx5wQqRgGjLfnGDnC7spMXdTR8AccCG88nP9ciK34MFpYaaUi17qq5kWPZpQcC1XiU27Pa3eYjWa3gRbGov3UT",
  "key12": "ybxUdb5aQV2mzM4D6q61rWRA6QcGLT48RbvKgUCgffFBDq2HctSTNdjqz9hiaiVJgqTKn57SwcMnubfceeqcU1V",
  "key13": "45MwZandnoZGdUdBjJaptWsETHuSJBvVmFNPqB6SpHUEiXoReahXdzMpUvmnSmFQpX1hqfTuFfnjEf7zfAKWn6Ez",
  "key14": "635Ku9h8DzPhP4t2m416mpWyYom4T1wjjqReokJwWHH52KFWzpxvyDWfyJNQPjeTAWSGmX6vds1QZJnfwdq2WFuU",
  "key15": "38DDnr935K8mtVMozKDPYQ6uU8pqPtWLFPPv9E8HKdwDzNkJur5dyFsKv7yDr4H8NwHxQ6AcgShX9pNEBgyDGap9",
  "key16": "5VeGuB2gCdxEQrzCVvFSUcJHjmT1RRaWesJszX79DHCDsRPvDiyp5JATQX6iABXs4JJHTjbYxrzmFAou79JS6WFu",
  "key17": "7rtffyA5dTiJk51d5Y45NcukYSyTt3LCtZGwhPJu8ZkELCh4VN9cBmSSJBKPBk8gZ1Ysred5zjjYVepqa2Sbpiy",
  "key18": "iy6KpL56ziYMoktBEQWtMLayJ5rRCNdy87qAMLgAoFyg8sTnYuFekSUvKxsqjQDcud4m3oZR1xyUcZ7QghW85NJ",
  "key19": "5JvJwcrG45rK2twdzjs4LMn1zT4ataUCRL3HLJkTJnsmnz8FYsm7PpAUTsXESUB5vumyNqPDWsKowSVBq4TbuNZz",
  "key20": "3Ww6AUPwFfT8D7CJ9JK2hgkdf41QGnDB9xamSUduDx3DpsLZSC2xpdCR4AF9Hp876DVikT7AQkjZLb7dXGqQ2Snh",
  "key21": "3BmbwU1EAbbW73SCZdMZFq5p2v3Zjz1YvpptYvj9KCrSxJQSnsH1majKEDrT16fh2sUPV9xkpdAf5rxsK2AJudqr",
  "key22": "3Va7vzHw9Xp174rcpFwnLe7QRGU7VE7YyGnoSCgSxpsd1APzJapXcznbmgPiesjpExLVtAemirqSy5h6aFEP9koC",
  "key23": "46wehQLtJ5z5UVqCws2YDEUSsJNhq2UxJb5SZPdJNWb3YranAjTiURoLSahWNRxHEBH6mAVnQiMZYXUqbEt1fcr3",
  "key24": "KCAwMLpT5bB2HBhSXcSKt6DidjdMMTnJbnSc6kGkfJaPi2ARw54zhjFsqQY7bXJNkYXzsVcQKyoK7rjZe47Gu2V",
  "key25": "3bWFmRQXgYdJePdcrR5CsFPuJNafWiEoYbHHJhiKeA1zBuGb1vpookEnkHZmVVXjMZK4rDdDHAVMyXbhzo47PEtA",
  "key26": "4j2zXyrPx7QmWHyYiBe21iU8s4UMX79VZkhbnssbNT35VxLySh4a3UoLXkNnrNLXKVnixymKpRCc6AAbAqqww3z5",
  "key27": "4FDofJevsYsyNqvHtFJqgM6sWPbAbXmmrtFzGSHfzSYwHgeJJtrcDPNo5xZQ2qG9VaLQ56be9aeuwHoAYCVM42v2",
  "key28": "5SvguWwnmuA852Fzfq2HrLWTmvNeLmgcJ2EHdVWzsEqyvKtmQYivcrEd5c6PwzNZENmFcetEsoRQ65RAhNMdh4X6",
  "key29": "DtPZaXDxawQ6dDYgnESPXTtDs9CrCwbcayRT7t35LKAyjVwMgJMcFEh1pV3x5w9Syg9LyAZq99aQ7WzdduoqQSd",
  "key30": "2hSk4bQiAcHBmrLjrLdK4hMH7RHmfhMPVYZ22sHfybNQW3LZRuzCDeFr473pASPg987sfUdpbUpttpw4KoooqTCv",
  "key31": "41kW4Tt2ZmZbrhzf8x4RxRJU14fR9xdc5E4CCGoXoNtM1aM31wyVjdkAU1b2dGuGtCG1Hp9NxM82PMSoiX2UDLp2",
  "key32": "2khJeHZTXSGzY7yRmyq8H9wVnLAXmtwUz3pxCxfUqSrR2zudcUottqBLUeKneY4GjrtF6YNZJvyi2j4nEEn5zgA6",
  "key33": "4RFfiWEDZKLqX74zg9SSjdEvV11Covjmgh1kVVcFMPcFvb8Gdvrjb6dd7ZfHfecBpWUUfyeYNS51rmEPfn6e9zjs",
  "key34": "3pVGN5z4etgEFrvh7pXgsgJeL8jr8XD57hD71NNqYF5hQ8oRABD2vhm7FQ2xBNRwMCu5JBeqMNu7BCjTqLfa1mTL",
  "key35": "xUhi6G7EmAcRxY3Hh9RfETXUFbr8r566wmnHwJg1r6nw93tK4AKXbF3XRauADJ8138L1RBfkBaWJ5ZQMZb3iSTV",
  "key36": "5UGaWyKVT5vnmGSvUnAC2giU3nK14MMSSAjVcemzdwkvy8Pf8rF5i94gsSHfFfiAZZe4ENnargtQRPiTUBdSaJUi",
  "key37": "25xdfCRzktj6n3nyowJH3nQBCuQRm6WkapQayK3gwv6mbMw5E7h6pd8UwLhMnBEbKLEw6hMHAZ13g1LWvxYtqrNS",
  "key38": "2XdnY4ZstfdM3gDTbgzMRbQTRZ3yqbSQgo1uNzEJAjJ8UWxL2degrHB6oWMEW8wLpwv1a9nF5dPSTmQVcDyNY8vR",
  "key39": "3Wrq5JmQKJhgdXahFuvGnFgqYoGL1Sc1jS969JfAT85usrsvPN9NpmMMdD7TUZzHApJByWx87gv3buR3BtKMjWZS",
  "key40": "3Nm8QD6KaLx73yqrrFzZbqRFyaBuysYv6p5cpCCYjEitkn4KRGpgAiupeHmgR2Y1UnuEY86GnsqNJx8eJ9GRLkT7",
  "key41": "57vg3MMGtQqtF9vyYNbbL9JkiXgTefYn9NdixLba4kZBXq3Y8rFkW39H5FozYkqfG5qJuktE3fN2pTgADCHJ4zJQ",
  "key42": "46dLrG2nG9HZtGRoaYQUyXLbDQCq4HmYzsnj8RvPKftSGJKqKsN4QvXiF96sJH45yWaFzwCe2XQGkuLMh9h3L7fE",
  "key43": "4kiGXSThdrA6fzTm28kZNcQp7rCn6HEqzcw2iHZ9Xtts9XYPwczD7xo4PyE6qkxCcFcgRi6RGLEYF9HJNevCJEaT",
  "key44": "2qPbBEjwe9tL2FW6XH8NZxNoZhSBq4CPJNYaPgTPjvFQSvNGmj9j8t6YnMN7ejvvvfTtmBZ6wvor6SvjfN1DKugB",
  "key45": "5xevY4eLMo1M1iUXCZTNj1MhPRhReZymrbejTBDgiuvnmwarv2jwJcSveFsmDbHraURVMM1YBxeKdFykwKWTRB4d"
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
