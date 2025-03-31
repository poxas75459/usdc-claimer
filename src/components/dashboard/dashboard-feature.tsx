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
    "4b6Q9ACXEBnoxuGrXPrXgBHeN2sYjyg3Jy7skon6bBSw377dP4cFQUXXHFc9PLBa8Z3anReYWFnfRwSLj2b7hsXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rG72C7znPadkKYTnthMVidcvCR7qFy2uohddSxqUDpMgRq71NPZWfBSxTV8zHGfSUjH3PGwo1VjfHk7XACJTRn",
  "key1": "XKLoMshFTSSsSnebQNsAnTwXogGPAYzT3SaRiczahd4hxRYuDLWQY9fUCLQcPE1nnzuE65ZEsMPkT3KxMZZXyza",
  "key2": "8AVoPf7QnWuh4rQa56cpbV3CjpFi7JC6A52q5GHAvvcgPnqixM6B1h16eFbFeeKfXrcqr2JNQCALKwPE9zM6nzM",
  "key3": "3D9oVzkG51NMADLAB11XfZyfVdTvDCBDKPPyaLCAxgyKDxt63jdgkqcm2W8VJC8Lbah4Yjnr4Vh2bbmdUd7aF54T",
  "key4": "hbX1nScJvbpUWsKUXEtFjvvY41XHhhqsEBmHo5L8Qw9vYu662KBPs6LBT9hgcFPzox6UR1yLQGLzr2B59r4URuc",
  "key5": "316FNKYc9vSGqmw91L88Zb31VjoSyjxiqWdhEdSaPEzYuNpK2Wi5zSW19PmJDcCK5jpx7giKDkoNsGDjp6pJVrTz",
  "key6": "3a5vLDBNC91it1vnnudAQKcrJk75ehsJeuXgX4rfJqYYeDaxxeeocM43yYuwZyVBS7kh5hJyRr9kN4sGPobnAfHt",
  "key7": "4QstetywxccdQ2okCceVhRPG9fuvd5jfNPnQpdtHrHPTHuWTpmkWxtTG4YG1CqGqSKNJSB1oaFqd1AhjhoyBqctU",
  "key8": "65c6qtRJ8bZKNWTZnTPQEmshCT9gp3bJPgqCjtKfZFXVCuJvEwp7f6ypi7XwXw4gB3EmrJy58CGmRrE9YHVv1veC",
  "key9": "XDMJEXburBomFJUNzUx1Y4fJEbhW8588idFg99i6AHvtEx44o7BAGmEWAPaqJt19dbZJRGMo3RxtQtav3Mb2prd",
  "key10": "3TnCocJsUT8XAddtYYFuHm5EgusExwvwKBewyY7qWpuRf1UtkJbFHSZn6qu8XMFcLmiuGomyR7LsGCCGbCVk9ctM",
  "key11": "VoMwZrS1jqFAmmufitCG8baqyDPsMJuceMc6hhkkcp3QPmCE6MoZk1Mrqsv8zSP1o92YQSsYeUbqDQncWyaEjnM",
  "key12": "3m3pbEGCyvNUmQAfPLRW3k281K3Pdb8jVBjhCFv5idcCMWXz87h3PQxYDDfjudfx5uUCWwNM9HoCKZp6PmNR85vU",
  "key13": "2apweb4hMguC15XFvaUpZ8inxYvFBSi1DXjBWsha9SLGm7FrSnmpKcQ8mNcuorxfhV2r9oQuNtHYfaXs8d6nXTbX",
  "key14": "5LWsiHaqaTJRsD6y2iTejG8hD4CY7CCBzzCmfAhm6Zqpj82vcedqKKpnFq2tjGBPtkQN1LzmJKZUkCAtcXxWEbnS",
  "key15": "3iSVbLeqMu6G15Un6k7n1xLPSFo8UT29dWSNKocddTxAP7vFnB8wr2ddkqCgGRAsSGCByMjPV1jvHgq8f6KL8MBo",
  "key16": "5syR2LwLSRkYdKX2tsGUjUpSgHojcFwA6xLPVvA5JHVtvYr5MUeh6VPrWh6YprGZKx69nMHZw6CXQ2bxTTU1rbf7",
  "key17": "3oZKJaowDKk1G7tLLa5D9hTPd9NYyFnY968XyoJbuSXs7qyxraomCoQum86V5tKmy3ARRRpw8dV4VnbTSGbEgF9r",
  "key18": "2ePG9XuvgAGcnYsLsrKRM5TmtfyCGpzL9EPgN85B1mJz7q7bV2UDye1tNA3egWNTtx6nVDFwRA6JcBBLsu2U8g4Q",
  "key19": "2uKgNUJvQyMHxEJK8GkarMNWsGd81KgfVRaZc6DMeutwwueNQz4EC9JNBTRMKSjU9UEMngasZfZUfcDcd2DTKeRZ",
  "key20": "4P8XwtWQcfaBgXyb5fVCBexKBpEb4VnyQdxTbT5ZfsGFEwfkUQYWgAbqxZDg491WqJ6m6UES338WR4d25Zyt5zmT",
  "key21": "5DHqTTye2Z1tFzyihkGZ132jduKJGJRZ4eUQ5x1x4i3gYXd2qmD8S7YobjVmb9oe1BHws4dfzwU174MP9kwb8TTy",
  "key22": "ppjhHLnp4Rk7ZnDmXFZxC5PwPU9u4kRYdS98jPB1cR8mtt9k2dkiJ7gnz8eDb6ZKcAbWiZDUpGHmWVeYaixwdij",
  "key23": "yYz4ruPoV2poBSCAtGHGWwRrqA6wT9jKLzEaqoHFhNRanDCibtsBWnM1UkZCqz71CZHB9tmF8ccND8XsvGZyCka",
  "key24": "56vG7YtptQzHUjFwiEBcdKu9FvYeAc8JBSuAF5axYpWp58SboJtJ2wz43RmyeV3z7DVWZBuaEofPugVSJTpzUaBt",
  "key25": "5bBkYB1ZBhq7aUgqSVUa7B4ry9X8xeCUFpo286JKtMzaWdgvy65nyPtLaU24fLmx997nVcHDje6qQgsLCkpsjjbj",
  "key26": "4Wdthxo9GaTgX1pKapNpyLFetaTz6fqkd3bM8qkkZKQ16cB1oV9J3ooJFcXGkcq32syJA8U3XduhbfQf373FU46g",
  "key27": "3GVoyaJfg6LhD3ygJQfy3ZFC2K9eN7UA9Lvo7ddJKR8iyCaFzVxPygfFXiu5JrDBYgmde7YH6DZXskWuw4i9myHJ",
  "key28": "5R1XJNo6G4VtWukJ8oXjMT5AigDqbh85RQG34XVXrY4tzdVLkYSj22KKmJ3dZ5L82WvFdp44roJb1JaPXLE6nieW",
  "key29": "kfsa7bk1PUEzNHtb7MHbiQ6ZtMb6bFhNgQdwuE4s3C9KTVTP7qstptjtiC5R5EYQQBqKFvSFzBwr9YHnxwLjqmv",
  "key30": "3SGyJ1B4uKF4obPG8JZ4GzLZGjgCCMvWaZ6nranTv56kUay9wLo2gKdSRfdw7RKPGAxLmKTuR5nmuGkoExdPTtpY",
  "key31": "5V5URmr6oiB6MaeVACPUiHT3BvQpZbgAJZmdoPYZ9SfRW9bc3yBqUHWnbSioxY4jK7H1xPhzTa8wzUB6rcTmZAWy",
  "key32": "dkfkz4hqFjJBg6xEt34zFLdpJGrZrgYzubEcWieoG9csoftyPqax2YHMM1A6c9dfHToCBntqpM8GyNngoonPd5P",
  "key33": "3jtkKd35WsHGTvkPyuTzk7BKV5LEHjRUeXyqDdPWbH3g8raZtH37d6q1BrJDDYB77omT3UsWXhZKSxb663ULo6w1",
  "key34": "2QA6Z4CUM78UaRNEgPNuwtUn6VNcmXpm7pwfxzgZMgxQKSpuAtcToRxP7N3bJ4u98YPbfSK5T2cS4hnoP89NUTkn",
  "key35": "5cPjAcMmw6AW16bRRNwYZ82bVKAADBN2QrMPcf2W1VmRwZycowNTTMzdnkNikU3iRqgvdXS52k2eyJo5QYNzZLph",
  "key36": "4kvxaU6o6hFoPgMoxj13es2sa1nn6zNcj1gsTWPMBwm6gSGQyjuQHwmWei3uzbBtUEQwL53Vtnk75PRHrYMkciHu",
  "key37": "37mvutMXp3g1z3e8FKkExVwzX6JMQavssDxHZDCYcPBej7GDccHGKz83pQBYNzYunX7HiNzu7Mj58cFmz4QwqqH2",
  "key38": "3hLSRtkCt1aEwZ87Qsh8wagcMuFbjhKGCgyqPXPTrhnjCvv3Mjg5H8h1Dk3TH6bFUsXRJui6XX9oxskHVihUTk7J"
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
