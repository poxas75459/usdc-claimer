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
    "61onQr4tvVeg3CLnBEUhq7kd4HxiSatj8SeauFM8T6SNZQyLyybczyd84YQKRtwvaYi1L93NqLFHGQbf3W5wkNHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67LsSd4T7diehGXeunH6uqbMfNhSrYEzPWxonJBEQTyFikykMLQJvA5CvCWE7cmVTGvk5CZrE61K82WndQ6MyoZh",
  "key1": "2rXdYbj9mWcBa6CKpSg3USqUjAbMTv9T2nWTKCP6QXFbCfVRUZ9eitFt8BVJNc9Pbx9udtZUV9cmgvkbxucWpEbT",
  "key2": "4fTynrkNQdKaHKFSV42c3H1kp3HBgkbG7ETsXCM88Z4gWRe45sgqaV9Rhhu26P57hG6KNsLvaKKUZFJSNhfRD6NU",
  "key3": "3sSoEcpsVCJPFvkDq7P2su1gikJ52WYZiqFTjTcHZGEEQUdAsgb2QtX9wtir8WsUbeUocM3V3VxdxZeFSHTHoC1E",
  "key4": "26tNqKabnKAnJTg5c6qYXvh8viMXeVr3sP5PJFXVA3siUtpwjyGhmPNH4aza4RJVWa9rweJ67axYQDghuSmEMzyW",
  "key5": "YKyPtB5GLHhn6NbD4n6gHGkLUZMLJisjxHEtqwMi79dMKuoKDL6mXSBoXBaNS94rYiP6rb5bpar73VCSnH64NiH",
  "key6": "4bBWihxguBtqeKJ7yDmSF38UKj2xTAeLDqr4Zi5Gpt8hb8dRHRKBLhs1ypbeqh9teL5b59Fz7XkME2yec99sNoPc",
  "key7": "dqNedsT4Yay3TjXdBEjhKF2V1sdP8PZJqtKWvtE9HTBQBJiaQcBJpMV3jhcFnbbvZNS8jSWdLQPBr9P78M2cHjM",
  "key8": "2PdoxoXvsjmaHiUofMouAdEL3Vx4qUX3m2cxcvz7JGwb7RYEjKKkdjcYC1y5RK4iV5BPAGgahsNhoBXqhfkYyERt",
  "key9": "2iQJCRZTWJiFcT7M78JVgkUrAWGLCJaA9kAhfvsrmsJYT9rnYfxRxtcSifZA8daosUR5Q8NQtcwBkvHg8v6qWmbm",
  "key10": "qh21Jv7cWowcPmXxtHRdVEX3rLQEWrk3beXLG6KcTitXkpuMXRKcgseAL3GmCWoyYBzmAMkq9UXBJJvs2uNdy5M",
  "key11": "3eE4ZMahTu2UM9cNGgmXYdqqvEZnRhvgNjKpDidc3q85QNSwvNapt8mAFfm4HoeUZUcxGkeEcWtvjmBEkzbJYeuq",
  "key12": "45Ec3sTpQqj7BeTuCpuQgv11urYTsEMWTLDTyHpVMAhGvM1DpJvSEQcMxc8tkHZqZUw7mL3VqpC2q6ARaCSsVbuA",
  "key13": "2WowCbemWqSosk3SNx2WPz1qK2ryBaQa3yeBHuuYHuQFccjjLsqbM4qyzLvAAc6QfutEZuQ6oWUeAFuvBgjpfawJ",
  "key14": "5p9Wdk7w55Edt46jXBUoogXX6WSb94HBdci3kw3QmmRQpp2F7SLNbAbSc4RBLj5WCdyTtBcqpAobRYugfW36hgXv",
  "key15": "62omE3GD3uAkrVe4xHWDkKd6xGtfRNyT6mERrae4grQDg2dsaRidxXiK7kywzmvkZFXuTM1yEV2cM6WCoKumrG8X",
  "key16": "37Zz1nWRxTvcL7RwcFe4EmE97AUyGvtAvuEt5FRTyHHzVHDauwSYfvJj67m2mAPvc1uKcgw2WNjB5X9y1wpNgA8d",
  "key17": "2xneKV3VDAsFKXDEcapYsNth8xXeD6KurwvUXAWbZm6z4FpRoH8hCCu5WbKSQ3VxYR2Ws4LNp8qXgGZdMKJMbuK9",
  "key18": "3TzT9z4gmKcWFX4r5LojYcFXyV2wodi9uNXyoZTaf1EZCp4sH8hq5iik6ebQnkvpYSBJ4vXQwJK1WVALqEJADJnc",
  "key19": "4mkwkdhWatZDrVanqGZb3tQPYXA4AycmQ9c9viEnKgkp1JWJFWCK8P3nUvXMX5bd77bE1whWjGJnrDwKKKNdnXpr",
  "key20": "4pQpxFfe4Vu8XiCp4UkihWwqsWpffTGAxYY8A1AFAaSijv6PrdWrftL1wsm5ys2cUVeJwAT7JUKLJtr5AuHsoSPs",
  "key21": "4nCmDztzLPoenYTaY1CKM4M66uGCW1xRvANbFiTVZcY7pzWe9sudG1WWEwthq1namBvogTEo5Wc9M6fcUmJtEtvy",
  "key22": "SB4cMmbTD3f9MYPJuzpB4dDAqkx1eqo5FwZMGmKfjDDFRmwMNzSiQTAtT12BRkaWoBKFHrtPJcCu31c2t3FMtxy",
  "key23": "2BfNK4SV5C8imkjX3uBZojGmiZWYFuLnRdzf8pu7MJqc98HAz1PDYvCpPvUbP3bKHsLbscJgm6XSbNLtGb8AWJVL",
  "key24": "2UX1KvnfjFy4jHaThH7rAPEWmYLay5vda9woPABvFn3SQqR3x1eigxW18Y3rJMDWCU8ZJ1TkQEZRwgGr6jtpcRee",
  "key25": "37fd21uRx4jaRBmqDkkPnAJj3s8C12VDKkw6gynGKVPt4QRzf2z43UTmmbs7vAm86onf5z64Udq99LVuN1k2mhLX",
  "key26": "4qGYU8mtaD92EF67ZHEthMzzRxNAChS7HyuLoTh54QBJ3wbVcwb6v214nCBJHn4JRxHmpUAV1LLd7osfD3EqoGi8",
  "key27": "5XaFPBAa13QnrAyYrxoDNGES4azWK4A6F4P8n5teqZXqrzGQTwn2Gdfrd2oHh8VeoAcMBypWP781KrTvxiHWQdJk",
  "key28": "27ope9LCPdE3XLYuB3mBJb94WC4uim2rrkVvFWbFbJrf4pgBXsVXJXcfZUzTJfxG2jmSTfbUcYwPmsSfyh8PeWCt",
  "key29": "sJhFLN1fp98Fk5883PMKDTxiAnypnXyrbgkZmjPK2goDr1KHbimShP3AvxnwNNf64a8Fk9NAQmVRcxdB5KNSXTq",
  "key30": "5g11QSXNPyg8LzzBSwTBpkZVQTpRpgASghMP2CukE3XyqkD9WCvdpNoSTGzAUH6gY6qrKgYQSFyZfJ1RwxqDFetk",
  "key31": "giLB4Lk6911u1QAQdGdP2C5pSHahgjAkJHUf6cvD7jNXhJ3v8LKjPPnUpTVqWFcwHaNL7RZdjAo2GLMoEJuqMfk",
  "key32": "4zYQCxKB2yLD6PBgPxaUWhKtJLwdGa8ZSWNhwUEY6n2LP7SxyDnXswpw6uj14nGdumhztfeyF2kE8u6sFGv5r8yE",
  "key33": "nbKU29JQXq96SaMnAFA4556QcsKb34xtMx5nCJzxyiPzpgQWRCBq3SN24NnEzMgatkWxmZJ6ZKLy9cvWaf5mYTR",
  "key34": "4k58EifDesUDTLVnnPEtjA58b2QeEK67KhBvy1UudtrKmg2fhBPCaQJNGuecpTiJP1537UefaThZgkPfJYrnBAxA",
  "key35": "3eRMx5Y7mzeX6f96kqPiB2saWNeKP95fzQEeRPu8qG9FVPvWkjWqBQ9KGZp5N1DusfYkQPvY2s6yN2qenWy8o9wb",
  "key36": "2rJWWXadNo4mgvHsvAvYjXRhNHd4AboXFpVk2eWc4gxCkm4QiFW6DtQqPP91VKDGzDBAvk3hff7FYLMPodKFU7V6",
  "key37": "5LmL591CHULFsnGWCri1cH6MQrrtvtAoAmNgDRwBZYxF8huZL9vZJmVJqEvWtWwEBuT6La3DrvQZuDtCmBQc9UdR",
  "key38": "58v3nasx2fFBT9hkeJxo2AMJH3w3ir2bv3XZpNpcSArPeit9PU3cFYUMa5MGjQ8cU4mRSgXJax31ychXhmZGW573",
  "key39": "4DEDJ8w4X64DYKe4g7cY3cxVZ1gx6bxhEioyt4gSejLau1uWzsdLQ4yBsWT3byNt3aeistkUNKSScF4rfL3BJRBh",
  "key40": "C7pfQBx4vpvmUy6Z1UvXVzGJQq5zEmxe9WXDnXmy8iTM5JRDxPNcAh97Y74Jxaz4P6J7XnL1U6SZvNMgDbRitzW",
  "key41": "2uLUL1595FEXUEMwr9moEwF3fH1UgfkU2p9ymeHMseSybyKWFRKDGWqUqUbdqJKRkozVc3wdYzEDKQr69yfL35Jq",
  "key42": "3tc85xpba8vMCEWFkuMYXXtswS9K4bg1Ymz1Jud4ptRDsNMmXDqNrpPeW52u9La5fPNfjyqEfFQkPDFcooxQuvow",
  "key43": "wBzDNxXr27qtnrrmq3HcCxSxKdjQtAJtPmCYQyx5GqMN26WyCmGcviEepip64xpShhtMJQRKzKXeQeNnJyVnLRR",
  "key44": "4aCQPwpCCBjoYMWGuVFpVPqQZBSDqdPSxWqiPrT5pXsreTefzwaq2i493auVjKnsnvsDEW8VmZE3oZ7t3MzBBpfH",
  "key45": "3fowFGtRjXfqPN7uNKD8ebRQTtEsTjQhBUcw4wWRsTu9Ys1cMea4suQrV71gbEW1tpZMNutJjcYeFh2uAjBRdPrn",
  "key46": "5ELv5FX2jYLSMCMx1FLsfgJysLrwkDJNQV76WikY2Pmk9tuv88DE6Cbp4GR1cwzypzHs7mPXSpW5z6pjVMbttVfv"
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
