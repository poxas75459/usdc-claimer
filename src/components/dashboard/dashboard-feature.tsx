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
    "5iKogqhWYgVCg71pWwiWmwnLcPVHxJvbe3iEFsdiAkSkWcRmWa6Mb3BUJN6T5ha4QBx9Ntq2oag4gX2RbPCJXsNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FNaiMKiDudhad5APrZrw3eK7KyCDPZnJFBXcbg7puoE48bRKfKffPLRgcQ1XMFNkid795bGpdpYW37tYiYixdqx",
  "key1": "48q2e8ujZmqwJK3s8671Va13Qe2fdWQPtucRXrATuh71Q4PxkmfsizkzFDEC12r6ouPXJwn3yUgnb75WtqAuPFaZ",
  "key2": "4vmNy8p552HHpgetiXciSSsRkKCBnhWaYN7RMLuSoLaH8LJF9TsB8ES4kdWic8JTgbRPB1mdPJ5FWqCPRcx8oCeW",
  "key3": "2FT6Kb4hheRwzPxSMZ1fUfj8wewmF4UQTxs7VTCoq573eQCrPfDDVaEFydt6eDX7RfFfzjSbyz22VGrEgV7ySHKR",
  "key4": "gq8YuaNuNQY7uEUKjidUgB13s2oJpg4ysS3vEBbWuFcdrG2m4Ko8AfBCKs5Tvq5JEMi9j9Arkb2YuYzPaFkJktj",
  "key5": "4KdQQVohhXVEqgqAb1vmTXMi25csgSrm7sabParmRhvzhQB3fZECbTW6RyJUQVfm19E9CMz2Nza25LuHX86uA8um",
  "key6": "56UZLRvtCNmCDAcqKNet8jUKMaFAPR2ApR5GgmBTA7ukTyZ8gc5YBse4RRQ3vJ6L6163TCNMJxvSweBJPkipMJhb",
  "key7": "2C3mg8juX1GzjdRZRwnHx2Qma6ogdGWJutYj2sHiVhahohwjLEP7gNYFGF1v8QosBFWpgr8Ao7xWo4XcWKs4vkbA",
  "key8": "VERozdNd3nbWoSzfUa9RaY9ESebgBiTPXsWiNwDrRXuptjmqm3SSxVKa6hLEEcBQ3WfdrvvQRNzbHK8UPvrEzNy",
  "key9": "5Vb9EPoaGmZUashD6rb5TbCQnCa8fCRkvhkXubpz7k3pHmHotmmm6XKnbvS7kwkgRiqncjv1DPY9GuYt3puPwE2S",
  "key10": "4N6Mxbp3Hf9TSAgp2SBkbA1KsGETLHGUR4zXALNqxiqCRkyuSnHtzTq7r1JjBReU2JFpfRbJzsjUjF5BwJosvqVH",
  "key11": "4sX2LVD5U4cFogBMDoYwm1EZbU85S3cFXb8GcXmf7QqVVCLx1xtbxeJcaooyDVzYw8R9CN93vtUwerdauff3eq6C",
  "key12": "2VtvSTZHwvkV4SUtovuxb7HpUxiia4LQH3ab2RhpTLSwxNkysDqijTEpeJT4CQuM9AdDAtUjgYW9ZYnmQXDz5k1W",
  "key13": "5Ejssf1E5yS5jZVAjaZBVcqpUk8C9svC8nRzMYSRWKsjoQaZbs3PzFP4HLUp1wFPb67W3H8zF2Wm5p2ADZsPhVHf",
  "key14": "4oXCwDVcJoojeDjc29UJcTtEnCRVaNWUEY7nVS8hSwb2UkPKe7ge2vpKxAxmmpW9EYJAL9YAHVRu1iojVTkeeSjJ",
  "key15": "jBdNynetpviMjmTM1z3QXmbkUKHUGLgmFAUZa6rr8ZYBwdpVraKhBxa1tmjKyAhAGBa8Wsb7n9uDJF2XjbqnPqN",
  "key16": "ZEU5WQXMtCSVcuJ7YTReHZ9JBSMKEMg9WM9tquJQLF8ny7JhYMSffM3wxXH2QZTgEybhvJMDCPewNWhUnaSyHtv",
  "key17": "4fQ9dLkYafsQMEHvSHWe1VqmXUWLPmvLh9ZvcRogJtjwKMTseN1R8YmzXcw39QsRP6dSnGMwaSYKhhXpG6gR5eET",
  "key18": "3o6vAEYiJssK1VJ46eXrt1LJk3fS7mkhRqV9q1x2fvEV1MsTAz1pBb4X6LAaM55xgDywPN5YdS4Xqc46CaN4KWhj",
  "key19": "3NXg4CXjUGdxv4YcfcsFWscoH3eSvqf8uhemUHYZXi7xzCvTAvoZ2E2v7m6Hhqifb4JGs63TaXpz5YzhGkvhcg54",
  "key20": "3CYfhQLgPGW7DP2AnnsPxiBkfwkt7AMyJQndFjJtzDCYQAwKneYpVviTy1a38EiBdiT68Q6BirhTqXmwUkc2uTD8",
  "key21": "2ogFKD9TQggYN6EHE4HczMw2PF39rKj2duChHHNJGyJ8W8VLDHZRn7MYNU3PaJzFtSLperit9bWZBgbikGaMUKFN",
  "key22": "5L6pw62FPYRBAvAJd4vP5e7WQBCrupWbSiq8FeygQXLwWum41z96J2upJSkvCxbtm1F6KTi6hufsh1ZtYiqxWiBo",
  "key23": "2ekrhUD89bK96zpuaCX7Amdeu1pJfXGRrrbtRrBuNfZu3PDUBYMpTWFjLQ4ocS3g1DdsJ43Rd79Z8SJDVZ6kdG6D",
  "key24": "3ktthe4LRBjQqFUaqsc1ZFoyuZkQz1mas6oppGEebMHfTgJhuskDpS68omCPDm2eJpM9BqwKWmrX6ahZ1BwKjMXm",
  "key25": "2RiYP4BhzvjR6Vmosw3Gu7rhUKNiCa2b7TNJWEE9bYzHNgJeZn7rkaSzxEe8tBxnFeFaNskgxyc4Xaz1W2iMWmqm",
  "key26": "3TJGhbAP7sD6wioRtyXmNf1xM4WcHGE8MAAGr2SSuem783SpjbDyK4mvWUAsGkeyMQQAg6YUDWR4W8gUFvXQyJiu",
  "key27": "mLQbhy2zVw4qeLxYu2RFdXX9kekJDEGfUH3KNGWhiqAAofXwFUcRHNt6epwwfMGS5u3SJtA8t8nzxe9LfXnNRyy",
  "key28": "a4FidiAnjyyxzUk9bMv2dhAdWeoVtq5jDTfgQoaLBn5hjkjgR57EbGQRCtgZR58ggmhNn2yyzGBUFf6YB7MJkwg",
  "key29": "3hbpPgzafLxCThNi9sx5yu9Lem2w5Yias2MoFYrM4gw9UtrWXMXUQbuUjqUQKrHYVvJBGc6vNFXtEVh6jVBpTYc7",
  "key30": "DgnaqhKMcqnLLutVkHvDHhAKLVEWxkHp6Lkb9B75sMFjaMfHdaUNj7zZzMnbw1U7LCSdDxj25ceF9TmJiPGYMwa",
  "key31": "4wUyvXTkjwDbimwsimatCjCKUrgc1dqgdJadAjnZ1wRPzKVMKSqs2Q7nhw6bwAtiPGF6L2yhpq2SthMjwAPLkt7z",
  "key32": "5kbmqQAVt4ZM5Ghmn9t6xBMrrJu5urczjQLe6KnBKUdFcTvr5YEXS9D9YWMVhmLRRezrByWkQitC5bA1LHGBEMZH",
  "key33": "zRtUCsBVfpeGh8s89shoUVRQ7bLKFyjLudRfA1kQ7TngtAgjcJA5N8Rowa7AuGrfsaweDUgsWHRsSTPbTMZj9XL",
  "key34": "62YEhcLARAqotv5DcZu7picL1QzZRi66o9dhWyD41cVpq5gXJdWuXWqsigwegHMhf6BVJCYU79C3wHkmY7cGaYee",
  "key35": "5q8BCfCShWA5JVEnSJ4iFhrSCjwLsXZdCwV5ztoFUJgXTacreniFhpCanjgMSLSkVeRbBR8tRxtoEqeK6sPo8hV6"
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
