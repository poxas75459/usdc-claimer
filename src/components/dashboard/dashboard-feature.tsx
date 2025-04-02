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
    "3GgvSLGoHtvF6TkdevjDwai6S1FpdJNqf6GXeuGCtt4DPEzaTj3dZK7dFLckvDvn6mfeeJ6A78C86Vxfhjhk8stJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yFTZ67R3JgL4JgjPmY6QBErFhKUEePXEkzqBDUiNufbPgiuxAWSrSoXraNb8sZ6PV1mYmuVHR3nTCWYWcTj1v96",
  "key1": "3LiAAK1gS2cQLZNxm1cwJikDQTETh2EKJRrqJJrq753xcvs1n5T3Z6WkzYCsn7F55E7xvuvBUX5VoDeXJzXKuFkz",
  "key2": "2MadCjfkJR5nCkJFoVLSPrCFs3p3U5kvESkw3RpEBJhjJxzkwgWekmWeAAAso7bziryTaZSigcBx7nrdgAk29uFM",
  "key3": "2x9CZhiV7Dc4Y57Mg4LKPFb5rZFzaaVvrSFLVdzB3bBK6WYu9cu7Z2ZCkrtMaM8zmA3TzuqHjL5vxpVk8Qbus6hy",
  "key4": "5ZBEDt2QAbc9ubWvMCsBm6LeQ23rgXXEmwigtAQkPDgqYZh2wrGmot9Qco1BAqXxioV88V7aD7zYP5M911EWUPHa",
  "key5": "MkZqB6zA2RnVnYBn55k2nUuEmFVEm1QtHgoQHTFhoseREm2Lb6AK154nPfWBEasMEeDtAHUv2pgFC137LBaySgy",
  "key6": "4P7xAj2BWRG5vcvSMXXwzfSWZ4jZAarnyh8vPpGqkdwJyQidKPptAY6VoMCU17fEyGVnwxmBgfjj33GZAMB3QaQS",
  "key7": "2navAanLxQi3oU34ajtQJheKM7dt4d4g3F6u9ba5sAHrN5ijqdmRsPWTJLsLV7b1JYoPhcxeQ7wbqqPBMTFKkhWS",
  "key8": "5wjwLdmD3JiFTeFTuajbtxyMo5umt6ExX2UDhxwAtn4PamJ9iGgB7cm92R7yXKuApuvoUsuY14UBm5BcCLZbwUua",
  "key9": "4oYNaLtQRemm4KPAC8o5wdLfkZJqnjazrrfAHTSJ2RpFTfRpJ9bZoU5fuCe3LasgejWq7W12bUeRat6yv9P255Q9",
  "key10": "4rfUQiauAHKNfrftiGDpiMEzcbjgELg5siRC84PRuwX8DLyBn1SHrUZ3UBbA9hSNwAJAboi6e3fpKb29ALpNVRVM",
  "key11": "44Pjo6dADFHiLUvW3kE9sB6tVhxDSXVJoXtGRhy2yFHqvSfCCQYEHaGSHkDHJ6Rje8FSc2m4jwkWmDdVWfh1zrZq",
  "key12": "3nZjMZHcXjfugqBYnFmmLnxHjAiEQrx4j8fADHCf6ZqSXXNv1TZxN2HmpZCVbHyVUbJH7cG3Xc6LbrSVrxGgw2wF",
  "key13": "39AwDwP3rv2aAX1yu5hTsdLdXHQajFqANiNKJQaYffR1up3x18uXr4TDgcBxQYitipVg8L75yvnFf8m7UWyBLGTc",
  "key14": "5AXeTmQcisCmrvbcBXhxy7tu2Za4RVaASotBNyV9YqgoYjtppzNs43eFt3i81Pge4XqThAoUDudidyjGm83KmQcq",
  "key15": "4wzsuPgMpcT8ynYnJawFVjtxDN9qrEus3kpDAbin4cnc9csaJRkPtwwgsQDAkwSSRR51N2toAFpufD4ixY3eavpT",
  "key16": "447Z1TophLRWW5pfZjJ1ChDJ48L2dtpedjCyouFCm2V31Bd9ibDxCYAp4WmSSCB9Ur39BjiknSPwiKQerLD5g5sK",
  "key17": "5doqVzWPKUUCcZkofLmGmibta1oavY1amGf5uDHT3PucUzQRXGg8aAMupwSKY2dbqazFx3qpr5sE4n2R9iZAiKYo",
  "key18": "TWHxF6LwbC8fXc47eQicixquGDDqSfNUqEtFzTC1UGQVywZbRDLMhwAbetyNFcoWcDPHF9fdSkRHxa7tRCfytmL",
  "key19": "3m93d4rNKbMJU5Yq5Ec5SzFfMyhWHNAg5774et2H2oma4YzcSU2KR7Cm4kQWd1fxWpVsLadAG6cYkmjQR2kYrJjg",
  "key20": "46j2NPfZYzGtLfvmUWv4sLezNNBk6kN8ZvCinW9HsQVtfPxapadKAKvkSBSCVbbdUTidTsSAtaa5EPa2TCd8Pw4d",
  "key21": "41PqxVf6NqW9JXUNGkg4xdd8WJagPRpwkVhAyiXveEgMgHmKjtzYoUtzeeDpbV4hPj2P1aB3BjoPy1dESoMTAe2J",
  "key22": "4CZ9rwwm86D8eYmVAkjg64PwEWk4Cf53URj8ENwQ7m4Ra2VBNjZxpn34qeQmC8u974JgULA5bMwrx1t3KqUidSCw",
  "key23": "4enXTaTTCh17bfntEzrnB6qHQCRxrQC2b6j6fNmEb1ziAaTEyHsJzRsC4NFWjHxvCQQ5W7r7mjozSEN7aU8Tcz3H",
  "key24": "2bB9EH55DEdaKzeQ1TiCurG6LjUTEYmzJqoLNxJfWeohN2pW83LJ56fmKyNapdQuACYXkwRQARDnJz4L6a2haRi7",
  "key25": "3rbJeRxvoCafr5CTJbvxGNahsJH62GeG6zNjKm4d2miVjsmxPSiv716PTYPweRJ1Zgb8dkvnevZsXq55an8ExzqT",
  "key26": "5N7eMbmG9ViYWAqNed8dDjT8fQEcJHgBaVWgxuDZ2esHNLgKRt9Z37nMCTLh4XjJJ2q297wMrSYtZ8bkX2uUyXzY",
  "key27": "5D2dDZbvKhQyPA6gDchVzBxVPhgbnXPtTTxibxL2bidSBQcKdDrPJ8Nv4i1Qxq95PV6AatH6Sh81Gzj1uk1v3a9R",
  "key28": "5R8c2p2gwyjGckaFQ2d1wwJtBr33ErtLJtSxZ9gr5RwGkJNX8xG9z1eyeGHGzTv39n8WCsQnoqnccDGhDkb5kG32",
  "key29": "5AcLCXd8xZ1vyCtEJEeWzCL7YTE7nfZKfi7fGjEo7mf9gGeQW4NXmJ6yYhAsHs2QpGuDRhds19PfTaQYsjk16uzJ",
  "key30": "ZxqWA89Vw1ZhrTmmgdR9hhBEfEJr81a1vH7U8WwzbQ2bNF1ag3EdkhdKmAP4qk3dEzBKAfzx74EFCJ2GRvp2dLN",
  "key31": "3STe2rc2aiBAA7o8G4MpVbUQmurSTgcd7Lw4MDNYE6xJ39VPPrmAuhTpZ4Hezk1JQkdGSE57h8gMawKy4w1Et764",
  "key32": "4Nzs9g6VpDXr2WpV5ohma8MR7SFadJBtsrTxzp48hGaQhoQvVUm98jzThCY4pddEKUs4zBCYaSZqPAq5zGBWa2Ew",
  "key33": "n1gZdQEnV87jqjfNQ8G5oiimPt5DgVMkpuxZ5F4Jc2F7o1a9ZxLnqZkhadiCrLJn31ygbKdsYW64iS3A4dKaW6y",
  "key34": "BtJz2T4xEJo55XqLckHJmBd3CApRg59xoJeRxnYmvDhx9gQZ6aW618kaegAFtfeed7Kv1XNJ43Pf7cZ81k5v378",
  "key35": "nhj8ndkpXu1JBZFEczQP2nYaBPappGdZDUaM6sBYkgpDPZQERjV3BpgxPtM8TbRaAPSnpbzQcqQk78ADDpXhAM2",
  "key36": "4THb173XFtvsum5uQsSe5hyEY3SAY5vU8Hpa1bhx59FchrqFJWUQLZVo38rk9S7Tec8Jqe9SLRjCGBEnMKg3ppM4",
  "key37": "5d4Vkj4ed9LVyMHt18ULuJgCBXeTrCLcNAKDJ3pQDKy3yqRWoD41wrz4AAxjN53osd9yszxwp1aVQ1Zx3LSihCYp",
  "key38": "38J7F6q7iTvbqjWmwYeXY6pLTtWGw72yyPQXXGcdxVRxGtknHLq7CWgG7rEqk6PA7aoFgN2hRBFh9mWkCp99CEfx",
  "key39": "4FqbVGJUSRtGy85aUqjA9Pw4cft3xc8VmdSLC2zu1a9WC9vzva5JSqJABfzHzrCY6QYpYN3YZYzQSq3ZpTTjGULn"
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
