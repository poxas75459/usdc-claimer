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
    "4yUrhP2Hoqe9JhSf4k4vEfhVwU42bWNVt1qNjKpG7mLfKwe8e1SjcWHcdgowjw9jLjLDQLe9cYy5jKhrmNDrCdMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XteLH7nwcwnBSKKmcqkSodbUPAbTNxqtUtj3VefhAhQk7ar7Mi83131wsWZSXCqtiMLsJQr4SjfV6uUjpFdbEyu",
  "key1": "4zoZ22QPBvXnNkvZM7KggKNsrvvjPYxQqy5BZYPuUBa6Awj5c94NLUAXmDk1kpAJn679kMMqXeiP296RkV58Aqfp",
  "key2": "5v8n6pzs58adLPm1zEdvefNscfGN64U9A4Rg1PWjURAqhVZm1ZJUQSbhcW2Wc2F4LJhdn4L4yKVTs5ZYxdPUMvVG",
  "key3": "2ZQSnrVMJhJPZ6mnnpgdGfZ1W8Ss8r2K3MorNgWH3z2EkrDgfNiDN7odm4QK1dJTHWCF6h4QrBvkyowKghAwCELB",
  "key4": "4sVqy2nMMYEknFQeJUPxQdaAME2E27QNmByAzuFWMCtp2hA3A22ekRn3g95Uvuzx19Q6aZHHrTQMm8BvtxTGiPLH",
  "key5": "5FuT8SjXVkMMf3bdVndo8RNV1iyDohbuREppwQnWQgVknPe6LeLr8KrVkCLTj5jdtH1HXDJTQPEkBVMyXU6iS9H9",
  "key6": "3nQdfb82V4bNf5Y3h691tmd7EU5dd7vbousC3fFNCSkJpU1pVSXwzs8zXCFsq5szmQkn8pgchLzDiAebkRgocPQK",
  "key7": "uMxugtvAVhDerZPbPeSdZeyaiHuRCButKGMfqUVJNEHZE8F5L6s7U9vpWPTNnRQ2KbR9odSqspLzS1pJLb8xoGA",
  "key8": "3WK9ChypJGMwHkjAjZWYJsAFZxTAqrxdMW6iSn3sxP33p2gMkUCpAuZCRBzEWM4hViXzd2wR6hmywwRkX33CbocP",
  "key9": "mXnp9nFWVR9MPMp7VEqVGWc5ydWqXvTJJTdajEp9yt8BKf9NLrfpzk3rM4G6icX1BHk4ToLk9L1qrPmu1iKEpt6",
  "key10": "4dtpeMSdwABbUKwki3jiUe8DqJgPMb6pC2pE3hCCHQ1JQ9UZR691TYUrBtp6VmejCaL5Gz6CgiHGnE3pUCCFwDnY",
  "key11": "34vUjCyyE51FUbNb3TnH7aroriVGrzhuebPkhHzPBjJU67ZJePTYYWjLg99KfmHXnETzocwGKKquFzJetpUMVpY1",
  "key12": "2DhzhyzTdUmD1FWZ4oivn6PFPzp6eFhivxDxbn8hGwAMLPztKM9Lb6zBtrkmswPYzrVAT6TkdLUHNM2J6SgqQ5aQ",
  "key13": "372PpmgiWDN7oFJykskNxydSn2Q4TjmLJgEeWoAo1MMrxoHwPgavnVRPKTVqDaYh7T9ayoF9X4CpdximHBPiqaZE",
  "key14": "3t73xrKBCz5XGc57JjHjz9CBgh5ENVrRfi6hLri1UM72cnZkZnBVooUuYmWAjC2mvCJkHJL9mWgS198ZeZCzzZ6v",
  "key15": "4AuaVtcRqRHB18tjRCmCqmjwqgisq6Uan2gFYVHxrK1AGrk2dZSU6AJA3jMMeEe6SWkEGTVDUjqfUN1RBXax64zR",
  "key16": "5MG6MY2qCToLD2Lwf5vMQJdzsGxDgipN7sK1XHwZYcCAaZPDQ1Zrmip8vgacg1Kdn6HP4FrojmvUCqkeXTSHzw6o",
  "key17": "4L84CkkpnweP2pnXG2vUVSDuVurwag388CzcMq8zsQ1gxsk8v6zSZLATxqNVhq3DmJx8ckVhQcYE4yWWnprH5VTq",
  "key18": "3Z8nHjGCnmAiHpX5H7WidKxsis99dNZfvCUsnzEJcuyvWFgPhib8ggy4YkMdohc7AVpdP2RVWTZKxLgkvyaAbCo5",
  "key19": "4mws3tdK6qUbqnKV3mEsLmhB9G9GJQAWcovGPXwsenuLoEpMfYj3ZYDewJwbJ6RKf6wXFrsaNXqfAh5Xdo3Xw9Ed",
  "key20": "266FdK7VoSovM1vNfee3c5oYTSULCxZAwcZS5Sdy8J13etZA62w9KGgMtecVwjUxDdyvMHa33hmDG1U8n4DJYJMC",
  "key21": "5aXiWURuroJXKDxDHU7cypjoXXfhZjpDkyGRJ4khBGoHhkvULoNRdftvdQNsS19F44a1T2vEYZz66D7unk2qiDWL",
  "key22": "5Zoz7jm75rWiPRtKa1SM9o1XNFqJuJeMsoW2iu43MzcnWqUYv4r2VmJLrpkG159rsZQrc7DcNJKRaALEBeQp3RL6",
  "key23": "5p1uay1dC1KhUb3judtiyKE7Cx6YLFq5E65m4XwBmbDd58uvTHVaqPgenLusFXF9HQWjnnMaVibed8Xn569towWB",
  "key24": "6j4FZWgZVyn953EEc3aXh9YVKK4RdMgZr6Pe8NovHFZ9kDPUGDCsYWSJ9Ae5AarBejtav4gDYhVHheSfpTKh7FC",
  "key25": "3msm869QWhz97Dd92gBq4tv4zaoXSd6TZjPb74L3BUR5bEwyGpBxRdncLF1NC2JqA6te5hfRzbu4vZY7ixkRuvkv",
  "key26": "5zeuVzcoiJfPMG3iwsEns3a93aRvbPXrHxLmdHRfYKBXrUQXVs8ajhZUHG26BknkoE6NTWt9vAxyHg3C9obkj96d",
  "key27": "53DYMVSPxG7cvYfNeByKGc9v6rhUduerYbtuWoBPEJdzbLdH1tZDb1sru3EsuyCGi3AiyrxUwQa1cU4SEME95nKM",
  "key28": "4vsiTDFa7To6HoUnDmYRVjLo5CrvcEfw2sh5ifKhvFEUDCZx6B28pyPkKo5xpopR3tDb6pwM8Xx66BVkoJzt1kRn",
  "key29": "2GuHmFE5UasnmPyveX9oZAkby46MEvfVcG5YAH7PVgs4DpxMiJfNxmgiosbsxq4BR6LEEd2kJs38ePow9t6sUjxb",
  "key30": "2o3aNcPen6bb24khxvCBHFZAjmonbHrEvj93RKLV5A8gATnR2JxdZrPcoeWp43EM6kLrtSfWz7Y2Hgxv1BVqLQyq",
  "key31": "5v5m8jnUJk3r6J49Nr88Bw6PkbiEWoBwKt42XSVweV4F8P8hmvrKatD9FcfmCA4P5CgaR9iYbDpvoMPmibwteKHL",
  "key32": "2QKjYmngVCNhreeYoPMyrscLxoMDw5tc1W3iEKVyEeb7Lhtk5xuJgPSVRNHnKBdh5WhDUbogiDRbK7Y2vi8omakY",
  "key33": "2KUtJKL3ddjK8YfA7VuyD29TerRYmqW4GDWemVbK4Ri9fWDJVk3HrjufvEWr4fs773GinFcVPLZHFQUAEMh7vgEw",
  "key34": "43X9JoPELZgBjMZbP6PstWidoJCZisLtP91SWAUjFVnZSG8NbfCoUWYfjt6xQbh83UDp7GsGihHGzpKULpeoicFS",
  "key35": "CSEwLhZWGFti3uUa2Ct9mmKx2pBqSdSuhGakmqMAqdYkPZzs5EHf8otf9wXfnZV3HwNxiVkHLBv2uSaXG36iB8S",
  "key36": "4bkRBPdtao8DWKyXkXAvSkr29AqU8vPtykt12BPWug8D3MLXsVvHU5mEt7T6jtWkY7ZakHLCM1Vawnc7zKzmQvES",
  "key37": "5doNuHwsATkLyPdBb7tTo9CfrUcvcTta5nCboZgxBKHdFvb7kLJwbWCAuCcpu75SrWxaBXbAEL5uXNBhKma4FHNp",
  "key38": "2U9LELSGb4KjFQKmUef8h7SRXbfXxRygXti68zJwvBsn8rDBopgHxpC4Bs6wUSkjAEPVMLdce6oHvkHHCXVLcaEw",
  "key39": "KEHuJuigcG8PiZ9tb1Aipy6kVdjhNwHomrKeZtubKm8M66kFQUGiwFHb4gxXxT4kjYJKzdUZD2bQSfwxj4L5MQh",
  "key40": "2HXVJ6FEm7V1CnHNWrg9AAc5yP6oEyNnvhbB8neyJauu8CMNvp22tNmTTmdjVWytQcZH1AAcQfKbtoGbSLvsYgR4",
  "key41": "2kP49ZBE343CrnYvwMAFwntMuWhXykmHswokBjnSFTSdFSJRhbh4VcBKZn7Gp1TYY9AGKfHRrkuCWS2o4yD6eNjN",
  "key42": "57pT4pkqVXt11xZeEpLLqhqjvQ2gwZNvQ5KmGxeDa7zcWJxBCbsF1KfScCs91pxquYPa4qVNBxQNyr2QfCjbKb3w"
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
