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
    "KYw2Lqm8CfXgV3Zu8RJMkyZSBQ7es68Q45vkRLMJBmMjkYcbKnamEYHHQyhcy8bJb9LjKtFAsArQfeMP18iSubC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VVJNUKBi5MFuWGD5Mz3bMxEtGgzbWdHJGCmiNWMquHXpp6efAhjEszobRt6DdnULNQJznUmMxqsFkxz2oB25rb",
  "key1": "36oPcUdeakg87X9YSsDWeBVMqfZbYh8R2hNhy7nwzeLMNrKd4RmjnwWwh4P5YGTZ5MxWE7gVEjZVFkfozvQQ982D",
  "key2": "28mmhbey8RHNJmjT3WmqRUJR4YeJ3xhk82CeGqnNpuQ1DFue8VUAZ8aUtiFF2EvFN9Z8eKgVSmbm5UHQbEv4Wbr8",
  "key3": "5CHzJQx8zvxwVsb9WPj7we8ZvV2f1zeJiE2KchbtPNTs4Mq6fVVr4xDJoEGTN22YJVqbGXzG7ieVj1DrWGvdYrTw",
  "key4": "5S3tB53h59kSFWTFSjeRFKEzejTiA5VLHdaRXidDxFZxuRED2qjkNhJH8YBzUVChsmKQ8BoUq6SQ6V1vded9JB3w",
  "key5": "5QrSweatqiGkAg6ajDGxR8cyeVfKSMXGG47qGWdQUyJ4PB99t9iQ3RsCHGSADJkfBTnbzEx1FMJP5JiYYYz2y1td",
  "key6": "3AZDBCxLmeB4dzQLC9WGcjvJMNrKNf8koMmbhjZ71xueKPSD3AzJ6ecX5pMC9YhJ8mxRq3krSmnDRtKT8G2P2zNm",
  "key7": "3d8FnhJJBUwsbjcLMFQwzHzmmdAK5pSzjpCETnKYRefQ3k8k7u7mmPuV1pRM3Z9e1XG3kXBmixpHMp7ftR3f8dkw",
  "key8": "vYxqceKSTb3RTnhTbWdAWBsv2yePwapVzCTtPrTEixg5pkmYLCQ4288hT8YbNVmcc9J5WCeFfhBRGY2nTh7vJcr",
  "key9": "64RmCw8cQQriR1HvYPC8V9GAYQqEJ7X5UDpbPT7bcfCixz6XqKSZNnK4JCrQUW6AjQkP4qbT7zoLap1UXgqi8yN6",
  "key10": "26FA5RwDNGwzWxKGHDmxqQ1RPrfM8JERPVhEj2uA6xmY8uHnwcKEdLhd6G43yZJt1sdVYn4t9dR1tiZqn9Njnhmn",
  "key11": "4uuVU7LTTZ8AS7dHRTEaqpoN8GReWwxh9F74cTecmokJeV5ERBSTkawUbD7PG1SZnEJKRr8FYNKVzT6NMuE1nDa3",
  "key12": "5eivkhR1RiVuoDZ2rRkRsGza6A3kdcsN3A9UEDifTu1hMpFRseWVGSQqavyKTsZ2TTdjBv7pjtA2aX8N246ZjniM",
  "key13": "r8socFzneXkihu3a95VRzAZ3GUTt6KfMgd6jgAgvYxjqW8NnaeKVfkx7L7HTPomdjJkLkxd4u5oDrnv3hg1ae1m",
  "key14": "3RHzDnpS9b8ZnHbijnVbcW3tZpE5XvBVZcaVEyq5G2x2XWnVXwmet8BVijazVDm6hBjtQNn4qsTXJT8bYRgXxsBQ",
  "key15": "xg45ooj8dQwJpTT9FRsXzNem6x9tQJH965tMGRsVC3c9vvzGZUh1Vh3z735yBRFEtJVQUwh8CWLFeLhMF82RZyS",
  "key16": "4A2hGx7uLKSyvxZNA7A9GXzp1DPrRPACpvbamDP5ncrxx7yLWngB7uGNRAS5hzwxDSXR2qS8MofqPjbpao6HDKSJ",
  "key17": "jG7NQ6LBA7Zikv4M3CDrhLDTFWsV4FtEuHkYYDKymzJMSJpy1Eugw2RjRzYVwDWCnSuvzqHKUEU6wGde8YJ1fae",
  "key18": "2fw8tq6MHpJFZqrkR7iaxbMHSrAS6SgB4Q3APFrpsKuUbytyyGS8s7MbJdSfAPhJnuhsUZ59MVR6ySsJzpJdVrqM",
  "key19": "4KVxAcEPa9NV7KeuZztidEDGkfeCG19K8HqFLsBj42bsj4D7UEhkqYtF1CFjPB1z8GrgQwwYxPTJXUjXxvAhZ1VV",
  "key20": "Ro9cfA3paPbUBgtgCLdYj9suhCu6noqij953XnUMburRacpuE4mp8rWuiULqVKJEpT2vtLU75asnNhRLH9yoESe",
  "key21": "2NNqJ45V3iA3VK3qDCHCqj6xFuCfUB9HiD79MRW9f1zNFjzPDfWCqLEpLEZ58HyGoFp9Fvf2AT3Qhbb3gA1WysRh",
  "key22": "5cR2duYyqzJnUhx9KTe2BzTsLrcSRz57E1qrydZd6Aptps5Xa9ZoQy5Ws2n95ihh6SRyN1z6mo431DfpcWznqjgX",
  "key23": "H2rkJSvBVxeoEZafRtWgRqp2URU4XX1dkm4ctjnKuPNavWvffhtVBSSAdg2Sys717a8vJZMBzPb6PeVqSDZYfBu",
  "key24": "2Mq9RjsF9DD5TSqwVs3NFZWzzMBKR4m5STZdhQHvM3yhPm6hZquDyT6oQjniMtf68cnDR5YJo1osK1Pb661x2CxR",
  "key25": "5bU3GTQtxhHWLYQX2iHevuKoydG6UYdzEVbwtvjTfqMSZVpEiRydfq9cRz1dDfZLvNR2BW2ZwEZwk6MfZc8giEjU",
  "key26": "2JotKEaFVLgz1z29A91aHjPKKEn2WV73DjpkZqQzRhCdksBMwiFovrT6HxJPawpL7LwA1wn94yjDgYmDdHhAUKr9",
  "key27": "4ZiQKxhreKKFmgGFquHKSXzNXUzKgk7Fh7uE67xS2tRdqZeCGexTt6agiGa75vNWgD8Srvw7WgWT6uuhdimPCn4o",
  "key28": "2zTystbtbGgxsH7uhvUZ6TAiv3nGXeMYdSQ1XRydgJ62WVqXspforcYDGoaWj6v7sGkDyRmECeFAMuy4bwwh7ixU",
  "key29": "22m8UsWxcJXMrMWWVWSp6wcB2i9J8KwfsvvvPTb22FYQTxPZf4d487hhAJKaHrdzGR5eyeVf4Zt1FxFycTSEpaoW",
  "key30": "5eHzmRXG1StKg9bEnG8X1LmohKaDGpska4rBWLrTtspm3U9YnRVQxcHWpfoNMTHnEBJ9XYJB26aHHjodC37XWDyd",
  "key31": "5U3PTSPxNLFJKjkVSHc8R5XsVqtt2rFqUtTgkxfeLvnTKAVy5CKSmZkQdm6J5aMxGcyhaxk1e8WU5P3mzGsg7VHS",
  "key32": "27bceJRYcALPENjDGZ5bTG7HFAiJNdsoTNhTQaR12M864jgVF5PohBPLYE9wzvp4hpc3SjEp9b8h654rJHvJwEhD",
  "key33": "4au8V7wuW9AGYVpS9fy9YpiDZM1Mj1EpWXrhJtsA5yqFxYZJwhxEzt8tHiXfzk9YLhrPkNXWhQeABQex1L2BQPGi",
  "key34": "NXAmu33w5ncBHEyR4GjYYvhw6kDZ5bkWoatU7vnny8JFX76kdc55qN3jjNy2tinwecsYkXf77aeD68wEk623hHA",
  "key35": "2XC5odvorMkpVNwTsrTASh37dQCPFPKjiuW2eNAGU3ZoSBF1meD4WMF8pgypJdXWw2k6Skyb15dRKDsuxJjaTe5H",
  "key36": "4w8zHrv6Kz3eATo8MsQbxP36NCXtZLoeB1fE7szwh1fGyXwH968njyyZL56sfvqy7YBCNQkrDKCv6jXYupunKtFr",
  "key37": "5W7HZnFm21Q9mPSsF74LVMQ1sHyXx1XL4Jr4VTn1GhaDR4Tdf4k7WyrmgDpxdJQpPZUxw6u8NAckTag7ge6bHrzj",
  "key38": "2CuSk7x1uxzGhH7icJtKMnS7UsaUM5Yiym3e3qy9HYXQkSLTBMG4eAtnbxbG3bi7STqS3SpRb7czrPdhB8DipX6P",
  "key39": "CtdYgEMpHx3Ad8AcJUKK556quqLb1B2MABXLGyhe6FDu6G1TqCNPaN9Xsw2v2QvLrdpC6M9ETLVzEh3WxR6Ngki",
  "key40": "3Ypv5Hf8DJKef3My3bgKBevGVGX7At7VgzMuiDADhA318rhzNpXEfV3dLjtVJVMHGxwwjxp3txh3np2gmNS2Y3Vb",
  "key41": "2nbhDLhzcm6YD8o7MEVn2yHaiZRQSWSCMim2hGycANNRKJBVBido4NDAZvohFy5bS1UXB6tXJThGpPy6Fv6gbYxC",
  "key42": "4nC9WqAu6Tt9TJ6UiWDGu4k6tDRM2gM7tznCRJ7f8oMZp2QEBgnb4Z8hTGASy9uHRPHky4ekQmp3k21xwqY2XcRW",
  "key43": "2D59Sj3jAmVirYUtYt7H2R1TpSyVzBtUGVx8dDNuE364BerjBpFjgw4YsfP5bdSxHk4iqa1nTNqXqZ4xXziPjEUJ",
  "key44": "3jLETAh6QkhKKVmWyvnCCvB8FkLgAxhEVvPhUUKMKi6GvpChNDCGKb99xDFFm2R7o3mrnJmAR3CJYSDixh7Yx19W",
  "key45": "2b3GKnBgnzTytNzPGNnrngsbTDcdcUdbEjrGoEt9tTexvS8YtqHEJgeEWB1Y9g34dQAr5NAetkPc8ScC8ZtQrvg6",
  "key46": "3Rb5hoxKqt832WVHpf4P3EuDEX2DaifbSfkUx8dRdvnF8XSgUsBVnp5oVVoP1KQmhSQ4cUkcjkCPceuVFoKHcdn2",
  "key47": "5VMvb3TyWkbUhm1muyK6NYsafTBbmdoZWnEe6Et2g1s9dPcXFtQ3UkvPFLxmCvpwd4NwagL79DCF9YzNWV6fePyQ",
  "key48": "2Yp3h9mWU2zizwKBkFG8EFV2aSaVAkjEa6nL1zLUDanvLVwv3YLLaXww7ricFVSxVdy3dynpRRm8TqhchHp8yVrc",
  "key49": "GBQfGHRKsZ22HS1W1Sv8xxjiuhGp5L1cXoxiqKpucaWREGzwhMsqv7w51R9FQJATUJthvBEsxV9ZjLDdQ6uMkX6"
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
