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
    "5fpnzCLjpcFj43Zy4WWwF3n9XVpTzCCyc9j6aAG7khz9y4csc4xmZAiUanpL5V7dNkRvM9rUYqFNcaRYZBfv9X1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36cU3aSTS1ZKHGvx7vj9DH2v5n8UxQN6nvLgzerEYtTZhtAQL9PobDTRzohRgybexS9P6jzwnLFbWymW2yqmnowf",
  "key1": "49v5tdv4q361g4WgoiU5kngSQEYbEMjJEWZaNGjcwTWAJnF6boiYUx1txsXRa4BjCkakCMenwbd6b11W4pGcEVWm",
  "key2": "2Y4sBV2zbv9yQzWPAHR3X5QYKGNzgQsmVqALCPfDVNYh1pDfcnJHn1wHxoaK84iUT71NQ35no6tkjpsURGyZMPN",
  "key3": "3drM38iHtqE8x7pnHkXhB6juHcM1LNJ1CMoZg9qgA75pK4XnF1wkem3fsyWfMqkxCubZxyQbUbbs2DP1PVVNyTLz",
  "key4": "37X2Y1Fwe6jNgP6LaQ86HPpj6KkQkDh9odM6M828C2Tt1tcZxrVLD5EunAxyC9sWdYbiBcp96ve4A4PSxXaFfKNR",
  "key5": "5f9zY7NxfjuWMK9JnT63MwSzw92hsgP8zX1MqK57XgE7uZMArWvzj1QqP2rqUrVTEs1f8n1uCVUFbx3U25knTmgG",
  "key6": "3sFpFNRsX3ospWTfKsoxrFQUa6QhKewfLQy7v3M4nZeJMaB6YqWPrYpobGiGaKBxUAWMQXc7SDkcUGq3812t9YVm",
  "key7": "2f6kJuFXdDmvjaiMALtZLimnFL2JvVziUk6EmcGVbEbnG9gfRGf2Cua2MZ1hZjQfymztKiu7j8S8ebQUtKNfZXzR",
  "key8": "4GNneWdwsGks14QqhBrzokYgBymXHkmkPScmRfdDNGXarL6rh7ESjkehpEphqtSUFQpTrMfBBKvyvWsMZdCphS3m",
  "key9": "5kLNRtnehqW22zhPyZPLHtYZy7jSipfYQZC9VSkcCn1ubYUPSSvJdKGN9XaRxvEy3nv3ghTtoeLTB5ocRTXmGCN6",
  "key10": "43VYWc39DtZJqHxDPCafxrjekHrZXK9CTf2g9gYWZcPiaR6JcKWnkTMvCzWu5KJhz72zQuMaidwERAGf4wbofYK3",
  "key11": "3Fa2gRRNZDCkTqMvYY5kV4Zv2zmMS8RNG4wGoYz6xqhFvfuZS3mJMA9E75KsJT9wcVHcpZV7c6vsHN9JLmTEMyBG",
  "key12": "31vVv43ridrKsVY7ceE4WgY5o7m7G58NJqcYnJtRaMN76YDwmx3bRRedHSDV2fAdbFauDeyy8M3u4LzDwGhG7tDb",
  "key13": "fYU1iXMv1Pn1RfbKkTbAoLhQZ7jxCrg4Er15rBfna3PPvEV3b1n1kBnicXHv5VN3iVKnJ4mt5RqM1EUoiYmbPN9",
  "key14": "NH47KT3Ve6TSH7G97yhkF8ofGVt299xYFVCjTD3i2Va1M5A93SyAEaEr3yVHq2bjru1ACScRZc4HCQqujPmo7jM",
  "key15": "4zBsB3LsixAP8ugCDBgg4kQPSM21HQt6XPJbstt5Qb8hNagWn9oxZbdvxcR43azunRiwPjsrBJ1ewbQS5JidZ6Q6",
  "key16": "4FV4BY1MoZWY8ow6VV6PzNxRFcjuw3ekbc6ZV7cmtJUscKRv2DHVaWFdnsoXxM9kNQScbTjN7F5XYbnDjfPtQHa5",
  "key17": "Mh7RrQtFmWjH4GecA9DYCSZR1Jj9esi5Czyc2De7mWMBvGYP1iihNvWe6ry2gPty7aKbdZqsqBFbigyenpB846U",
  "key18": "2ybb3u5dHA2MKbnSSpgYyYDAtXRAeArBoXoNiLL2aE6jpvF84zGgd2pzVVdK7WprFVb7b2So8T87Pdxbkjb2Ubzw",
  "key19": "3B1E1ftZ8SCZyLQqzNSG3vDx9Gs7w9QP8vHi6Q6QSmLp7SeEV9NL4a3e6kMRugZZHkEjmLozBTFtMLpcAtcVma58",
  "key20": "362phyeN7Moo8iZNhtshWLwU7pgHtg8EYhA4ucnffDNgXnAjzytgebWDpqKxXfN832GKusQsyKWHw8SnuQN534Jn",
  "key21": "727FpBUvMqQw2eetBCaUaXnkA4yqVH5GAneqcucvY8Hxgqfc4iQG1b42bNpTL4kLnWmrCsvMD9ypVHdkgpz1qK5",
  "key22": "25XZ1kVbwz7K5vbtcXxt2F1MRdBT7kXBSfsRH92DXCCre5ftLb8yJRCJnz7K3UEMMX9TipyFqskrqDBFyqU9zq62",
  "key23": "22VSycqCy2v1jvb5rzhpBcNWCwMG1x1S8xRMSi37HZb7F72eZqUNbtW2JDQQ9KUbBxP4nJf7dpAo4LaoGtpSA6iv",
  "key24": "2EybuYJuuLZHBYAFSLnno1NnX6PUN8QGsxmXZJWN9xHu22dKdo4bbDevFzVDBizxo2sdbQ6LRSu6dyyv8559zhuP",
  "key25": "31qhvxg11p2XDsc7c8pAeDL3LuJ3zwXbRkGa7TfRCZEgy7JwXUbfzW6U9CfBDDyR2JbdJf85UhrWjXpUjWDLx7Rg",
  "key26": "4k8jxKntJDygCENAtMNsTAaemEy8P31gs7Hx13pg39QwibDtSkqjZ2AxtVTpSyzDhiPpVGGXUb1xQbjrceFxjeEB",
  "key27": "4nWi7K2tZf88UNkF1NnfQT8n7YEKFCUd1EGXu9t93YdmWSiJotgLFjhWLTYERUq51xihC43BbwzMPM7fMNozXp19",
  "key28": "22xjLjVU4YKwQYJmxA4T463CwhDhq65XEEGQtrcNWmPVEbdVgteGNvhuifhZTNXb7F273dhMDskquymYnrMdtm9E",
  "key29": "4bKg9efRsii7WZMJJuPdBZ9543mHobm3dB2Fsy79SPLBzdsXYYUH864vmw7ff5pdy82EcPxJPd6Ej6ACGhFrdTnF",
  "key30": "4P6ZEG9WTpuhe63GRk7mjioCCNbADbThE5cmKNa421sTBzyhkaAXk4ufPXWPUBi26BLAEQdxRGdXZfZvcWTuCDiT",
  "key31": "uFAkSsjM7BwYh2C8UzTqhNA4os36nVA391QGsQjUB7ydnfaANT91q5Uvf9tan4ZoPHJvBRyxi6XHFmRn5yC2iuX",
  "key32": "4UgCu5zMtUR23tQXNKAt7kUniVcCmcKxH96scCp9P4knjKwWPqtGAEDz6vZnJDLr7sgbL8NHzzCzfKHANe6qag2w",
  "key33": "5z2aXDnjoXfz4dbgn6oQyuPu4jdnc97RufLADMynCioEosUUJwJY6FePKDKbAes7QtmkpGB81yuHjeVLeRyUBe8Y",
  "key34": "4sFMSJWSy2QsEikfjk9gMr5nje2A4zupdr6NeN5NBDXEhRqa5fQ4eB3wfz4Z2KiQ3FwxyEtwv71Cr78DoYRU9JN2",
  "key35": "5mdJw6Bsy1ALuMefhEJuUB5Jwi1bRNzpzTDWZgYiKqKK4wq2vMQdnbtksf3YS4N8P93dEmMFHzSn2EXsUx2JxAgM",
  "key36": "4nvEHTPecDAFzSePdxag3jhR1W5ZbnanR8Mo51q3kQDAzhpKMSGPGP4mxPB3wgnLL5mQQWbGpqdXiR5PQ9b4RTa1",
  "key37": "55nh6CCVk3qcsdSBjkXnf3Y2DREoWv9cJootbLr1GQZ9tLQV99ec8Nx7H4YndsshwVGtBFt3SgBcPCNhX3uon7tK",
  "key38": "4xaZG7fWcM8BhEN39vq821b7WHvQzU8W2Et3g1Hjn4npD7Fqty8ujTDcGYjUyUYCA7xseJuw9HJcwSmc5Lcsbr2V",
  "key39": "2tq1Qm1wLVd99367Xy4ZrwozdkZHsF6YJWdMQUrsUs2bthnVv6y3GcX4VJZwmLkQTo3PAeJCVFx4W1gstBhFtVPU",
  "key40": "53RWd8rnKMdmsghQhCraPE63jVLx3RwbM6CWkVPdVDHFRYAsbToU9XZdkXKu4kc1b2iU7WMq5njfvcCHxjeHBSeK",
  "key41": "V24qveH2DAjaQaVty32FbUygdfq9n5RMLqjNABLExPRTfQdcGbXYFLsphZwLctKYswE5qCGurxBfZDxjH2CHaLL",
  "key42": "3vM9Bb77EvpLyzprYqhWvY7ey4wfoR6hGuan56rJgdmqpF9d1oaZ9Z4VyAbvCGkJMEs8mN6FnTCshdSPLiWytN8Y",
  "key43": "4TJ1sKciciKukpGSqK4zssP51dALpzTgTfVmHLQiLrgNeUczqxqVsyDFtLzfdMRPjKWQd4ChhDBHeYo3ySrk8nZ"
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
