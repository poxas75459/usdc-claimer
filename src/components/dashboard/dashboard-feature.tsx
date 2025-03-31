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
    "4grygESLV9vZRBf1ZN8qizWwv8RwhWvbsyig5HF7M78s7b7nqEsmXutFw6DFR6f2aaSwizL2XTv8ZNXyMp3jvavF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UzDYrey8jQuHsXBrkLbc67sAJEJCVfrPjEhq5pJqGUUq3rje8ytVrdan9DH6q4h121nSufHcGFnTCD59sSWTrdu",
  "key1": "2qceFq52Zp2oEWTPFwX7eaLNtpxGaTbcUbSDnyFDXtEdiC72iW5ni1vCtpLgrk8wDKYHdtB8voJuTwLmDYthD8f",
  "key2": "55QCBe7e3HxabK1Q1miwpSdq9fRMPFXefpUj8xvFybpmhPdfgKWJnUKWHheUARMhfJ1zqJLpK6mmdW2PADW6vBhY",
  "key3": "3unLrcZtYAZgnX6cdCm2UpQdx552eZVP412ArC4M7xbUm7qHLdMYT5rxLvzGih1wcSxMCEuuFNzsQciFx8Mnbrq2",
  "key4": "2zvzN7FiNWGyMajc4tee1viAv8PZpVPLiDaHAKWaNXhvDjSLUhWctsmWrYtRDQR17k1yJWLRZeUXKY2sfGgQRR3f",
  "key5": "5FV6xvbJCrgRxRQS3qTfy7n2fdEPFFTC5vjE7t6eNUpypK45cGAXqhLUwVAQMhX57cRSS4wQTegZrfePuZW3S6kP",
  "key6": "3UCpF7LkLvso4mf31PqK27d8Wrhoiwik8BHadBJb7X6LCFzb8UfcsPeDW8nSC2tbghtN3Chv12DmdrBzKya4N458",
  "key7": "4vb6sWwFbbgHmch3Nt3hCi9xoqpvQymntAti7Av9iPqbxJsVu3MN2zDJDvFHsdL5MRLdjEyVTwC2RfUbze4BJMex",
  "key8": "3DuDaucoUrBKQnakpg2Y1vbJwqjFp62vhSQLgEgrysNFYiq7qo1v56utVJ2d5ERjSGkG1CY5WR7WFCsy4UjRJN97",
  "key9": "7RGnNe44cjQbvt9LK4M1FdAQkDm2XsttKXR7VHv8dJtvBa6UF2kKGLUToQyV2HDoZe3fshC1J4itnkzhBM1URW8",
  "key10": "xC1xTSDCVxPdtZzc7ZzeeemfmKS9gtDiDz1QUUtCjy7aYzzPAta4b93PRYLTGwz6jnFpDSjkFPWphYQxHyAwsEM",
  "key11": "4cMyvJb45y4EMtLfZTdhYd7RSkYutLFjfY7LVPybHULcF5XJBpc6j8Qr4JyDHR8fbDJnPe91gMvFGhemoRa4xm2H",
  "key12": "3vwdTiydR4L8WCbvFnKpZJD4xDTq9jhZZfjBo5xjQFRVE62zsTBooE1QVMyR2k3THR2FVzyqoo9Q9PgS8TxfZJKt",
  "key13": "pQxmz4LPxkcuxvWNJDdri835LGXWYM2HLh6YzoFzgbyg3ogYZncpnZDBa4EsuqDYEXqrwLuGvHEXUa9AAV5Gnzm",
  "key14": "2BNbKauFTXYpFXEQqrVMfJTEUU3Wr3DJ9bbwV8fjrdWQXvXLDpVutL9S7foDJmm9MP6LM6PQ6XzGvkPu81JsPXjq",
  "key15": "5MUaoXRazsFTdjcwLaVZQE2QV7T4SWPHFXNWnu9ghDAtUCVfDq4Sk8zmsqGH7RJnxeeg1xiSEfktWw5bNnPm8EXx",
  "key16": "2Yv2V3F9RXcUScZkfjKaUdqiPjcg2fEnYWh39JV6VDdhtnnduJ1d9mNvXgQQ1j61xd6Vqm7iurCXnXZg5A2G7g9s",
  "key17": "mK2aJYbxEjoDZyyCxNZsYwpCVvQQyAiLsJVawYVoC8DiAkkH33eJNozGM1FZE11m72uCvQwWJSmGnJCGRha9p1e",
  "key18": "3wXEkP12xHAEAccAToBZkDbt5uneumxbWakqMyLokefNEy7zhmqasgPDKm9Tcgi4AjYSYnUpw5kAhHrXx4iSRWCq",
  "key19": "5sjPXU2C4MACthwQU8fz6jFPaHTRMsXtsmNnWvc5EGsPCPtUVAa59GosyZKiW82GTmco5w6i1Us86TARYU8E99Zk",
  "key20": "2H1frP6gxBnMGmRoUTaYZ6wyf7zpQ4ei4JRJDFtnexPhsLLEnEAfKNUeXdXgE3SGwAKgqda7kYz4L4WdZGYvCe3M",
  "key21": "5XSgccuYnE7KZDsqZv9u8J8JvprbgVfK5FsU7kQ1f1McGjPfv3SUN6WdVNXhW5BYEKMbWerXKoHpryPUsGH6z78t",
  "key22": "47YQooWsATbPooPSRhpQa4ihrY7NveVjwq63bZSRDFxAhL3d8YMkyv9WPxTjfFP6c2K6X4RTs9qTtPF1DfnVv9kb",
  "key23": "4qpabx2iJSyYGHcGDV7yT5Cf4xuNcxU1jPyoBRi7peDW7urBcAwaVLeh5VNempZYquRCc7iBvDPhyeHFPgkhys6D",
  "key24": "3ntF3Kemn8FHyHAQjZxKpjNyVfhz3ijC8vPnWdsBApqTAaJp6TpZoKiQ6NXJx5btKXENsXKPteE5mJpV2RYyGk3Y",
  "key25": "9GoeyHZEYn1xb2wrJnf7K3Hj6hffNPmHRmrptAawKms5fQFp1esVRHAqH1toDg9sSmyXaXCLh8JHtG5N8otgKN1",
  "key26": "2vqdJWGmyGYcvTQ5WcPBdjDZdBEvYdQGL4nXxX5H6mGakvYxKujs8xD25iAWaVBcxtU8UppEJzHK6XYioG4f5j8q",
  "key27": "36hDgV6tszMFW7asBWM1EdhUkG7XyUwFkt2VaUGpEUGMpjYewvBwG39az5JWQ6J6Eon8yDt4NftrSpkDtyiDSFBc",
  "key28": "2SNjEdxATqcz4dWT3TBbvy43pALbBZYWkHe5mzQSu9EkyuRFkS2AyxZkXo19SU8nFWh5tKSpDDQP6Lt1yjPeWjUX",
  "key29": "2C9G7BTPseexF34h6y4AtbPEMxNHt4NXgs9YwAe7h6XWRrrD5AaPKn55bdFHMM3YUUX9k72unAgYSNBKrBby4WJu",
  "key30": "5RDiHrPCnQ4up4inKRyowdBZrRwnXyhmubatfhniVd7pMStmCt5T3zrKzbjVNVpVZB3qYcbyxaBgwut41dwSJiRB",
  "key31": "3jtB3wxAR21oYvdyuYtHWQuxA9ZpBCbmNNZVs41R1h39m37L4C5VQueDBWpWxfdRhgw8UxsfJsaa1Es8gMtGNdvj",
  "key32": "52qncJvVVwvdJgHm6fAqaBNWLdMeT3Yt1o4YLFhdiP8mf2YFbH2cGbRcEhtgJby3BgC8rm7gerdAtuGaQS3BtdbA",
  "key33": "xXnFmYb5Fy7tz3KzisVzUcR2zkkQkumBg5KhKE52aGFWHhyhzfDjEic5X6CQAo27M8PgxTY7de6vkVozohjwpU2",
  "key34": "g6ZLmW8A5xmM1kkaieDQi2n4ditvXxbsK5pofGVCsAcjC8DHPUafrZAtBDktBCNtTm1ets9qMgcKZGCqsUdRDGU",
  "key35": "HTGrzVeFtt5c5m3SLM6LvXnTV56q2438zdbYQeEsvYhQqjjfLbd9vvNt1u9gq2UnXuNtDQoXmh7JhAEHPpcEpnL",
  "key36": "5RtSaKpNzHc7hhC9CdKAdDk2sZLaXkcTBbma6L91D3FgiN7sWyd2AsLBxbKBFyJLi7rXeKkix8U8ix5KXahXRniB",
  "key37": "3mCrCfaqa3bACvXPH4ENszpRu9bPuLqT2EjGLhLCFj7Vhg9YvJjE4ix2XZNwGhUvMd8mfhEHA2KREDX8j34DqgCN",
  "key38": "57VRsNNFsMRt5Awo3gXNRikhCtY19ZUduNHhYno5CnEADWvjDUJ3CbNe1ZsX4r5AXpq31WT2W8QNkab9kQY3X8gU",
  "key39": "37TKTaSYDmZdncTJsk14eTAqmLw7spZnA5SyJqQTUkU5TKXMo6P5MbYLfrVxyyQE7bXxkLKu7WxoqHegAEmbeBvH",
  "key40": "4Zi7biMo5ifB4z6bCoHS3DXffWHegNpt6uzJmRF7Ea2JbTzFFyAWXhUuptANtF34MQAopgcmv8FCaTEhMt8NewV6",
  "key41": "59MRf89gB5F53kfRdEEsEJAwZCSsSokH5ngtgEdrjc7agLZj8wCQLMXXCfMNTHqQ4HG9uLh6vycd1eSy6C6z6pvW",
  "key42": "KTGwHNPHUWaKRVSCbk6FXGx79Tdg3iGGmytA6Lt9peKJeARBqeTpQ4uFedfVjQ1CLi1ALXxVjnpdKC3uub2o9kd",
  "key43": "5ZVq74iRM4eUqdWzBJgpVQthhkDGTBJXUUuxpWmrwH4V99cxXgaaP4zQp6AjkEd6g6sFpNgzXDMxsCVKYMn8h1Tm"
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
