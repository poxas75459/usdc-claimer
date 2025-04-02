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
    "3QDGh2b7Jh7WhCvAune8GXDVH7BvDB2ToEb1tGYQ8G3FPt6baKMUYkkrTAN74cUpJ5VeHEjH8HG6kRSQavmDyXjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nGgyMmm3ckEd7CQNPjCCWBegmX12Nbi5zmAGAehBnWiqi1Egfn4aDAU4FjGQiKLW6fJ6XH4tTeVeRaADxxEFdT7",
  "key1": "2kWG9dWtc5LGYTZZaTNL9KfbkctZencaBztdgV3gz37h2mHusGTph4vBmSCAzboztq43JzMUDZ4oYocPbAMH4PNR",
  "key2": "zWndK4v7LUqmJzjYTVLZerQto53zvt6vZsLWB5Fv1TdkDQyiauRPo3aLDCGN6TmyLaXMGBbJP5aYZxrHct1FLFN",
  "key3": "3JsYGH8WWVqaj69AvT1eephXFKSYMziadQUTHgwZhw9gB5BSHHG1etXZZzj1ZNuQwvCykAm77F3jNsTZYAoR4J5q",
  "key4": "25eaS2BqwcfHqETYrSMQ7RKgLYjcwc4r2rZzxi1eDaXcQTPjU3eg83DQFxq5GcT2XrxFRPFUvRJbudEG2LNmBM9t",
  "key5": "2aoMgA1NJ3WJNkP4PVYW9etKkNdifmGLaYjN72B73T72p8wzH2E2bvqVNasGxj6Myye9U4pfyhf697rmf8iRJWJW",
  "key6": "2Anxuvo6JvsDnm2SKYb3sJxAsLoFCYHsoxTKvpDuddz5Gi4SBvASQo49QzFJpoU3vPq5X6BF8opdzCydtTwpw3SZ",
  "key7": "37kELRz1kkkjVrpagmrS4JYXEGmLChM1t1usmoEskW53w8EgLXr65A6UoXqWyzGwd3eBLaFcuVSJnCqx811GU6dA",
  "key8": "5NoahztCJdqPq8CL4ixowhqD4tY6d3qdfj7nTnpu3dw9nK7PUm7GUwPqMioK3igf8G1mDFz7MyEqwvjCPQhErbgo",
  "key9": "3PCeNmVxLG9cnDZW6neeHQT9QpgXYRq6LYCiGqkM1Q8EKS5yMEMuq1YmarfVZjQ4UqbxptufWtotF8FePpvKhBpd",
  "key10": "32wAmVV3arjXhiPbfVzk5UyfKXm5eWXPUVAvU3mVS6UPhSe714HhZBmS6DFWHTQgjXhp9uDhj1q4NRpRJShLKuPf",
  "key11": "3kwNZwCXD9KVon7QjpTFPPDBdmZDM2iaNMy98P9dRd1noeYcGGUUPY4M4RoB3XSyxqvjid6Z27hrTCpnojkz2v7x",
  "key12": "5A2SUTLw9omcJSZoB6UCd9xLSgeGXCac28drDfVuJkdwMmucruvUS4o5azcEBiWFxY7MxZpX5NoraNZCny3fvhK2",
  "key13": "3qrbkqQWkhN8aqgj6jJV7xDoEKzpVthRFHMqyqBK281GSLMVgDKuD7FwLVfeZP9kdLPkT3AWpkT398yrf9xRwYMD",
  "key14": "QH7htSvJgHRSHaNpxSn8jifKjUXCvg6oqz155Mo7acYNhYbFW2V8Xr9eh7DU8nyAHPvFJL4CyNitABokeRoc1Tj",
  "key15": "DPrzJ2Ai1qtc8pYgessqXdjevSqG1h8oYBT6WaL4VxNpY8Qiic1uziY2tAgPjT8hmoem5KgpGc6CKf51pssQUhE",
  "key16": "35xgqfqMWFpUhuBYdG4qEECZAmrLC53sAWGrgB11VSS9pZYoQ8LRBNyixzz11wG9ThSWPNZSC8dRnjrpSyqpLtiE",
  "key17": "jQV19HznPEjSQfWT2SC45GBNkzD5AzsGu8UGMUrFs9tuoYtXQnA2igxRQFgZu59FG2mu2gcacCKWv8YApu3ik9z",
  "key18": "61WHwYNL22GccURXcPUQ5f7pu26sBAE73r7m2p8ocEKFbHrz5o3H7CEKnKrUYakXEBQW7SK9hDnHUpUMD3Rn9B6o",
  "key19": "5mwNJ5bvwTRBbZGH5MDUMnSRoapFXActWSC1c4MKPsHmjr3vRZVuv4bLvsUmNNPUywwgHDRbxhMskZM9YZ3srMk7",
  "key20": "2Qni5ZyqokQiLoq29MaNtUUjdCtqQikzmsSGmqgxFYctR43FwpzXJEYKjeR97SburUFYX6chLEitqTfbDQMBeMFn",
  "key21": "5X91FWJ7zHcYcUxigJTx2Jr3jZhzFVGTHypKkaScuLBormP3htWYZeuNQgPymQPL4akM398uzSG7KuasEsQqWVea",
  "key22": "4bMG7J4dYerwwpWUjQLSKHUMpuRpMyNRgHgtNCu81aXsVDNfVDcubqB9B1NH9UdPgdia9canXivWfPoT75bvTWiV",
  "key23": "436uViwa4oQWXouTGXXWEgXQfvFsY63Hs7i7WvhoENv8zJQUNj4enGkrLeqzL2kWZp6dSBSgPFitZNhgQSwjaqAp",
  "key24": "3po6sjHzXptRXGHCBqFuEAQohMg6Wzp3sJannANmcNs72gjqh8zgukbx68yU7qYgcJd42sRP9RWuGDeZanEdPyxw",
  "key25": "swR12Y5WAy56oNQjFA8EvB6Ur4kGk9YCzb5CxY8ed64BSGXFv4ccX4BbMmnBb21FAyHMFaLwkspR8tpafpnXwJf",
  "key26": "5WJj5xQwvgaiyVjgkj2S51nmRZiGkQfXRRV99duK71zDUr9t5viJ8T4RCKD4CSyXQ8eHCVKcVviwPWssnMtwEaCV",
  "key27": "5cgcPcvPAKdgXzT11fCKJCqpB98h7A3Kz4FhwiuvsJV2N5bJQgiawjMspebYEX4EAmeC5iu7E9TYwaAdtXR7NFX8",
  "key28": "4j95EYmcPeCNJBvVm141YajJ6petj6FQE76KpEYkWgxUN4iREzZczz1spZ2Q8LsMwBpQ97zPF6V672LDak6Lhfaw",
  "key29": "WyAW3bXG73dmoKiTSZREGrdPQPH95wuoCZXT64KV7BxaY8KUGpEcLvE39kpFr8N6aufLtZdQ48DyJXxmhkyXP59",
  "key30": "2ELcHeq15zhugBBzZfSuLLBfrkTitUtLr9PbRWRCZQTkNK8dT7RWFRmiyDkLx1hPSw7oA7HsndcnZ76Si3PGrEpU",
  "key31": "5HfhCNiW9UjqQUnFpS1v6znJCS9o95MsUr6LAv1z2ShYanEGYp1KpkuTWdofWDQEFRK3HG19d9rsyQm3YDwbDTWJ",
  "key32": "5gBakAY3B2raNHS9aKBPeis3Rrt5w4Z9UKaPi45wXCY87YyWtD7zsgKFWM3kAryUQfU9YWboY1jXfMfCk6LBxFp7",
  "key33": "3HefFF99VvKAmc8QUjZunb4yEYDHYVjwhqR3dxBmvavkeV8DiD2mHv8QJWdGm6nNsug9pH2hhV6ybZJd9DxGyy9T",
  "key34": "5YDXNW6dz3MZqRi7JfVUNSB5NhVCwfemd9GJBDSfFR4vkmKLq5VxQ3QXWYsQVHYjKUUZT87YH7rr6cWa1Kz36Tv1",
  "key35": "5QSYJhDQwPdSawR4uwqGcAUi6GfNSvidTx7F2CD6tfWj6aLAjkFkxnk8DoFkidt2UVpAdT9uGaGY4XmWuiSimDWR",
  "key36": "56rNWzd5gB4aApmBVM7XiZULp2D7wmWifrJGfKsLCPby5jq1kPVVft9PLLN9heFWGovYsqDqrcm1rFN4gErgiF3r",
  "key37": "4oWdA1T8irpreWv67Poo68WZtGJ6bQaiEVadAYHVGHFhrsaD6reHqFntXhkjGKpJfWDXxHEK2HjwfS29ZGZa6fbT",
  "key38": "4yRriUkGfMcFrn2DVRma5PkiZa1qbyscutM6yFMQCyuTW4iBiFCMtvEMfgyiP31zAGjywqaykDTGkYLKYjKGWeKe",
  "key39": "5GFkt1wBn51tNGS3UdDqqWnaVXpHp4m6BhYwnEM6AfBQUoLKEBaAif1XWtTsuQ51uouKYgvZqvV6hn6X5KrH4ZTN",
  "key40": "5eab39EFnGLumCBqDWqSBZxQ2C1gAu6TaKLK3dxB5MA1kA9srUqHUwSJmkUegGZgFxpKDQV9KLYSHbFPX1MrT3nu",
  "key41": "668sKNCaWCu456Ek6VjWdgEFiSiFo5gqg89NADU666JwQgQ4QdCmAJFMi1u95LHQcZEcvyDtuVn3gW13ToadotB9",
  "key42": "2MaT6gKAVHVAeiYyX8VZNB3SmMhVe32GAYDVg7abb8EcvmkmifsaTAjJrEAEEL4fsVf74uo2vi8MM3sWwTVhGEsB",
  "key43": "2jZgbJq1J5L7EafZcZfmuVjSKrFqyh24gzuQx7uKeRi2UTxE6Fj5BPHmtstLZ3gFKhd3NUdqZZpY9CrrnMcBkkNx",
  "key44": "4bCon7L4kfs9M7qGL6NfFcaVEX9djVE2CWPapDeR1mijUQkoYyTvZzTsAHX9pJ4vrgKhUjQDWJSsbu1PeRX1MTf4",
  "key45": "3SkwT4KPsjLFkNFEXAAkdgcQhBQW8e2VddeTm9WiSXjo4Jcm5EAaE68kysQT5KkowX19C7j8tQaQywpKQQZwC4zC",
  "key46": "LPHd7vaxqV8KUYrEUgzJ6bFk8QBybjhY4ogbzMjRYrFYPBnsLM8eEh2MS4vLgrvGqK4QAATy6tEKBoeDP4VNHNg"
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
