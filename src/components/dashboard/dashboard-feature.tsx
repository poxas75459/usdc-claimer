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
    "4MaMqNLXFNEgk3Np9JxqyNuQ1won2ZcYZZvoBWZvQ67V1m8Y4v1F2tKLUDMfBxKsW38D3EW6GGiq8KUz1GZv2swT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487QRfqMnfv7ecaP2Kas655nPeYwX9EBR87YJMg4d1MgiVMvCHWzopT3dsuRquWnUMoDYFCGMkLKeovJ7hWqT6hC",
  "key1": "cQFdzigS8fFuyJqfyk41ekwsqYq64s8Qq5GdLAnbeGHjAc1cu9aR3tsp5bGC3k3j99LaQ5uPbChvzAzmkqryCiu",
  "key2": "TyXkqY1yuKFzJ21Zfvz7QvMVmNtptCPgQMYjoASgw9Nxt2KXjqPmbFPcwohweLjWBCY164jRThaZsGpnZxzX9oS",
  "key3": "VDZDGErN2CFzLF4oTPwRUU81d3QdFkUG2dBb3dV5HSBRXVw8oAyWWTBXVACMWUW9AXzbJFSM7gfa2yHHeJMQWAY",
  "key4": "2RPMwF59TNzacbvkJXj71fQSHpQ6WDv5GcT1JHHxtXeDDdc9TG2FPkJD98wANbrdA4Vf6aAD2Y1xReZbZne743vt",
  "key5": "4QXFpaDvGcZWkBLbmcpkVC1nxkR9bWLzdBjMV3gk9RWKxFX1VnQySsTXrhFwgRKkes91qnBnD4CpYJqNpaM4rnGT",
  "key6": "35UH1e46FKZ6SKniNhrwZ2F3bKKnGLiegiaSQnydXMsRNXvbjQ3MWutV2Z2vZvDr1JeFGR5ZWjBhBiZ8yk7BahPw",
  "key7": "4T3PsTHtacqSSKFVFT1AazxJmL5dGY1mRUrtRZgC1GSZSRW9MkzTJi1YU952ww3QTFtckMtFWtmnuGBp1PGFGfSZ",
  "key8": "4HXadwTXTiPXaDx1s9iXS9WzYsj359LfAzoqS1zdWGrgenEBcnq8ydwde6P2MgyG6b828bCTgTYF4TptHNQ1zu8M",
  "key9": "5zy7b96FtTheUnDrguLaGbXv6SSQNVQPpQtES2mZubw6dSdHEpwaQcJ9A98KXnTwmirgeinL7qgCufkkxmnu8NV",
  "key10": "5ReE2urXVguCK4pSArGWmXZPN2hCFppr3UAnWozVzvfgatCHwR1ZPrYzffQdpwEmH8Dp8WaMCQmAPT2Kjr3Uqwzw",
  "key11": "nSmaoehSWTfPc7QFpx2o9UPCffvHjThbDNy7DB1XF8BtAmSmg7MrNCXi1v96fNLf8WAF3ZChvy3FAjxx7kZ4i4u",
  "key12": "3Rp6CEnd1MVEzM2MJtxo8cotvoSLGEzkCRjdd6rWucKLtUFViErTG3kSagKViwgaxmDpTFaHfNweZCHPx1ypG335",
  "key13": "5mByPtuvee2S8xBAdZWQo6CYrc3QbixQzPjrq7iAsysXdPTSmgy3bhcqcizhGQr3mBd7bdha4nozYdh86i54G7RM",
  "key14": "bnsokpD8zw9e4d6iJnX81iZP1Q6a5zJXrK8ytEzrohu9BeSrUppaEwwk3Lb2FRPWnYJbJw96pLeZYhWxN9jwVsz",
  "key15": "524N6wgZGCWrvSU6vJXx5zJXpbzxLzpY322puFeoTNGVaQReF4d6vhtxjNhctp8waCctMXJjU6S9nmYsRvanteuv",
  "key16": "4Ct5eSpaT4i8YSQBrPQCmtP3gfke3V3qTKfvoyry8Q9cxq41q5p36cmqKS8bBcNPMQqqHm3tvcBJzNz8oVufLWeK",
  "key17": "3fbzPTVhrmr8bkwwftNJnZFfDMAJmjFxwt8n3unY2Cr67vhCQDFDg6kAng1uBpyU2fqtoFJUN69BtrcUMsoseRCe",
  "key18": "2UPff3WMgHY8B2eqxLEF3wkjGx7JifVBCLGrrRDgLFSrVfYaEswYQphE86i3QgAWSmFcaVDFBb7Z7ZfQKDaahZv4",
  "key19": "3ibpdDhAA31qLXuugpPnFGeEvDi7c9HaRqXyx8Dwq1h9Z6727oaQdK7FvmPp3FVNbZP4i5dFcseCs9Pu2VS57iij",
  "key20": "4xR6FW9JQQciCrfg8vRazVRz1JtU91rwuxvKrJbAJ9Tvb5nGDwTwNKUrEaq3g1FpUR13BBxvw4cik1VfDgjbwkeb",
  "key21": "5c4A1ZtE7CGcBXpi99eLyF2mq8GTJBthNHpnJV4NjNgpG4EKZgKQ8nQuR7cxWBBD6UcvFaRonp2CSsR9e9BPCuxr",
  "key22": "2yRN6Sq3UZJ4fuuymu3gm8zCWPdana29YVV5e7oKdWrNg43uoqbaDExJ2oN5GJr5rr7LeAyTn84oXptmE1FFMPiH",
  "key23": "2CqVxAA9uRJrjVtJW389A8R4NHt77r2Qyrwxfz4FHsrFLj3aKsLBNyge1BrGTMPSKzXXKgAi7RHsFR7S4YAQsD8T",
  "key24": "4HD1LumsTsZnJ77GoeQMxCk5eBdJfUF6XddFZekATt6Zg8K8k41QMUMaWdTJYBZX2gPZooHbQo6V2SumqWpDGuoL",
  "key25": "4wfFqJo63Q1i2Nz4rzLWH7RcoYnzSGE2H1oApaKDTQJrBTwWAGnaLjMuKgXuCx2fenC7s4t6sZqnMfn1ACaWnCeC",
  "key26": "3JkF8ZDTi1ZX8dKrUBKFrMPaRYYTLVXyp2qscFdNgySdivdx7aYGXKHwXRBzHxXeBYURZXHCNDMPgKHVFLtitdnM",
  "key27": "4WFFizNkgAFypwCGhi9YJZeQZRR778ttpRr6SpVVDMjX4y4YNjrjza8vARJEY9N6Pjyi4mCCMzWaE9Ynr5dqHG9K",
  "key28": "4jc5iwhQXGR2uc1aJgwM1H5SP9auVp2e3wXYv9jiDC3f6DdNhJ2JzNKLdCYmfQbvZUUKQmKgf5iuKv64w8hEpDNQ",
  "key29": "5YWwhiK4f7S5g7Y8Wkkf6wFiA4Y2jSVbtaUWnMWL6u9Wr4FAzyVc3vtwmNSKpFqt24sHp59FwRU9kYZDo89keUug",
  "key30": "44BMCm4n5X5jnG7ECR8BPnZ5NTJ95JkXNrHUZPSzD4spXbXAyFLqQr7KtYWZ5JdTK8drxzEBbby44XeWH1Pp1Lon",
  "key31": "2PUezWNzUBGTzbEe6SZ8hetJgHqhbYLGJBa58BonCL96dEpw4FQhN1x4hGQ8mFXonXA1MCVEuZDXhkT7WjyphULi",
  "key32": "2hx4kiBh5GBsyt7rBdiR17kBTfkeKEfRFY3YHc7vPh7kHFQvZPqi8wyAHPrSo3xFGdC2baGL1yJ5Lo8bNG35pdPE",
  "key33": "2SoHXASyfYDFXX5g7f7J688TAVN8u5mjUxk24jrnUnukxyB7BNvi8CEotpZBN995ErUknfWsvrYjkg6BSLZVCMKb",
  "key34": "2pVBo5HhfqSSGA2Z7S5HNtVB3ocbbbRLy8W5RSmyAUUMxhNvL4XwK8LV44JgxepX7XBNjJrKwCnZsZD37yBRKgre",
  "key35": "3BFf6o8V4RoVzvWnkEnA9hsqtqcgagC3NT9FomQXWx8g2FjATus5JyMfNkaREayZBRacfvRK3RqxrvQFWMkk4B2T",
  "key36": "5Do1c9DJkSj2rseKSWFLF9CaY3f7oY4H7owB7y8AWnD9X6UfFm35Dk3TuiUQmAq7P4ZjrXvDSd4vAq6r7fVixW6X",
  "key37": "3c94DAEQQnvjPn9yZwYJ77WwkKdhLRySwKjzTtndPNvXxrtCPatiKVd3Fgakxy8AxnPZTgpFxYirWsGSKct4WfU",
  "key38": "owu2i7pwKPW7XXmzK4QfEHWWnSxuokj3RvAW3s8W12FQ326Eh17zTk2RB1sPTPbioJianvhFvWjK8SsJv8Z6C4v",
  "key39": "4bZDjUmrxc55L6v62EWoFhrRv33xbwHU6jbKAsEdHyxeVs81nZm2d7vEyTvsdQy2TC6ZEyCEvVDGXA2fWmLZ7SBR",
  "key40": "3iU9AVzdDRJoQuNdSKKvybAuRGmC9JpDe9pq4F6Zvoh2R71qQNPJoVZkx8RxwhqKkqiCacocMgCnESSoCwFd1gjv",
  "key41": "4QzQsqwJbQrXCxh6J89mho7UL5obLV5ybxi7MbDiiyXfRi2vR1WE6acji1k27REeJEwT1kZwYTuLfseGMkotZcMx",
  "key42": "3xxvYHeP1x9Tpw3AxWCXEAoZPgrRR5NHxvicGJJBAFubnw6w8ybhmFna8iAHBTJr1TW7USZJcThiTzeJUd9K1R68",
  "key43": "4DJi6yTJoWhBsSZtBKdrXne5oY1NDBQkEKEZ7C8j9uWm5koeg3oN1HQc4eraGhDRj7RJcE8tPXDUr969gZP6atJp",
  "key44": "5yCtTiairXfnQ4rrXMNVWNYxkLvVDVkSPR2sh7fTp1Fu43oJsRzYEaHFaucv4TimBaHkzUJPD7hfL1L67Y7zj1qh",
  "key45": "7XM2DFfzVbK3KrYHA6yBdbuTtWGwefAbSuvn3b6ihg2FRypcqfFZJTyhX4BhUMiCctWUWPMJDV1PBe36w2xxi1s",
  "key46": "3ohRpK66pQmoCrv1W4pfwyZeL7Tps1SSwvJ3R9ZKKdhP4TcT4CXHYfiLdnhwUyRswmAR6XGQE4oqsmg7SmEcJN6F",
  "key47": "4g7NELCHVgkoLkAxDz6NtDGkh24MPCJizkyHGEBAA41stJrzEFt15vTouz8FjGDF5imtrjfdsdUGKSnmtQuJkBz",
  "key48": "29m2m1hxLuPXnapQVBMTtnYxctMQ2BFAHMFKkyt6pR3RvHvAdhTW6XFqCAs4moPFjSUk3ZDyVEF3ad7zgwVvgvP9"
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
