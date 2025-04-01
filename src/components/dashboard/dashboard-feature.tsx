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
    "5kNEit3q5EDHftQQbDs9cGTSM7GzVUxasQwPTvwJD4725dsPuUXnLgN79sddGqfT6HZcJnpaF39VNizSP8jAMiHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zShA7rLkKL5JQ8ffzYR58n2ZP9eqts6zwSXBDdbuv3C9ned7nuEuW8MwA6hAJzFo9nK6gMSoePGUVpwXgCWw7N6",
  "key1": "4BAvgvSFzRUCb4MW5Wb1KAjmxhr5w7Hxfs2AqHRHJsHJXaZ4uMpUkCh1AitePicbTQeAzeNZLEzUBDjPfydHfnYK",
  "key2": "4nFNyBmnBGBbH1JithE9TRgxwz8VDf1mdjCHVhtnXZTy4z9uKu5YDqeJLzzqwsqfDw9SeqVaKkh3CfJUk8UeoxG3",
  "key3": "5xtv1tSEWMqTCRVYyJQFoaHHQ9h3tKLcNwpMmc7eUBhm7jpifqm2XMzNY8siPhPoid8CFXCUXspFyvY4k5U18X8S",
  "key4": "49Vr7Txk6iVRueYYQVgVVay1qcZzNFGLaZASnXSn9JaE59adKt88UJMYUsFbqmxgWaGAarTyL7rHUSVRGTtGmDoL",
  "key5": "BM48jDc2jD7wS31d8JidoWrQaskLTubrsarhWqHCw743SQ1yNhx3bUecmurqyGvQgwpZFeg6YLRtQmvHzoPFtk3",
  "key6": "3QLV72aXHHAjRgsyzNxyu6HCAUXJqxNZvnqGbFvSAeyGM1SKnXYKv9coCR57kwvDffdSMatqHLt7f8NMnxsVTUGB",
  "key7": "4YFBsjeptt9biD7TwkX3cug9zJN363GhE2nDCP1MF4CkrA9QNkLpk8nhQSrVBftP5YdWTs65exik6XzE14yyq7kT",
  "key8": "5oMWJ3yEyEmBqBgkFDiE8RK4SnK41QttxxTHXUU3nuyvGQwqDiha5CE4p4onHxF68HXxAMLry5Nut5KqbFxvYbAq",
  "key9": "21oZLWcM5thb1fg1EF2Y1m6jaQ18mACe2DYez8X1bvoV91PFUVfNWpRvv7cEuUCNn4CNWzzuRBhPYPAWg7rBoRvk",
  "key10": "AtHoigsTUEd2QAKuC7oqcUpfQyz3VAASHEDKEEjSaE9ZkyKiC4HtYxCMJT977ivXLYgxsyvHzND2rxCzspnNYQC",
  "key11": "22sVgRfELLwNySbmNUGBwGX44w854bwvbeGkrnZ7whf6mnDKebfWCBJkC9dUw3Ev6EiTgUgQAKggkHdPSWFwfLXD",
  "key12": "WrtsUTR3ABh5sUjBLGA78TSJSk9htueKL2uDBgEaPvRn2Jwn8zx6B2FySBHCwvhXgHZ62cP2fSk8UwxrcTfQAQY",
  "key13": "61DUWZdQ6xMsJDq4yUVz918BGaMHdzcUKWQUQrFzkkkVg55cB4TdcvMWLLWrzfgGFZ7fBM7AVtp8zv8rtZXevXU1",
  "key14": "v9oiLfLyjXnsPxtipXXyYWoeSXM8cNXiUTceQqXU3jQqpX3Nqe8k8dyADA7NphLcB2JLxbEm49g2i3uYinRHKNZ",
  "key15": "51nX8GH7fWqB815opdvpMa4b3bH712hPTEMJG1Q47zyeoEH9NuvgVaGm2rnMXfzEk3xiBj8cBZ3Miyqj5GEPZAnU",
  "key16": "5MfgnEeoWu8xs6oRfXL1hB8b1fjHU7hvZFqVY2gbEHwC8papr8wVFGECMd9t7qBJECZf4VfaCqtgjwnzNGNqYCA9",
  "key17": "52fLn3PQvi5e1eokqEx18biB2nQyGFBsJoc2ioN4STKPfv5JdyicMRX4meQxQmejzgsTA8hpi5QepqNUuKKBJQw2",
  "key18": "4ZyFUaQP9Jci78d3mnBJm1MXrEifo5Eg9spgMT7XYvGLxbbHQd3G2QUTVFHQB7o9SrNmamY3TbZmP1FLWegcqEVk",
  "key19": "3dWvJb4brUzw7DgUJNWRWmWcmr1PxRFyhaM4ihr5iCqwDvK9tkSUTuaC1btr5XBVdfD48hDFh74xLGPcuymPNThc",
  "key20": "22UiBPvBXykfvVFTG8ctWafgN2EbvbS6Dvz3aVF74kZ7dH8vNBJzGqoa24BCFkH5H39ciyeJLfKJFbXoxpzNx1En",
  "key21": "3SE3NFxHikQCJgDmX3xTnueLopNNSmEeQzhDLfjjaBzg4CJUb3cXZ8cRxkr7smdommd75hCGVqvGcSg4zy2WEnRA",
  "key22": "54m3zSVuLd6WzjZKXLVXNbgZ2GUrcUJrFQghZAt6LKFFtPfrHtu9cmy9HQePAXBuDJum5cRoDd9rs7iCEnnRRY4h",
  "key23": "3ertVEVspoE42i2DwYxe3PsgC12s1JNobbV7DeRTeBSdvCBdzM6XxZKgoCYQWWNM6EwG1zWRSjGzKaiL3XysFaw3",
  "key24": "67ejDiYecGLMfLxbkc9c9WoKi5sr56bS2eyvrZGHcYmmeXWLz64Va7nV8GfH12GJV4LYLFyxUn1bmL6Dgnk3PszE",
  "key25": "52bwm17wkHdjzR6HcqiRAaYEu1i124qh5hCBr7DYyyg2DqQZZ6Tc1m74gJZNdk7Y2QqUdnVa6eAFrvtj3xucfeci",
  "key26": "QD6dhFN9mfJ9CYQMy1gAKHaWmVA5Dmie4RoeEX1oBdADQ1vA6vbxxqqncG8w69RaNNYn9it2b234FFLxg9qTpnd",
  "key27": "4P3cT6brdGT3Bp9Tx8K1YonmNApQbrT928YHszMokSJMknDbMviUFHGUK3WhV7oh6SifpWYMdZUXnZPP2vLGTSn9",
  "key28": "3L72ZdeFcaxPM9tTArz3Rt367i5XAfGjCyZMngfDUs1ohEqfXcSVnRyxV6szgoWahSuDrcDGg5MPJuHAEPRWMKfy",
  "key29": "BvfFeU7VKCnY7AyfMN68QhSNy65MiPtG2uYDjcM4SyqnojproiWkb4HDAgQeJ1ocwdfwtV8UdRawWPEKB3hVDAo",
  "key30": "vdhbhiduj99XBQjUPkv8iMZrNzcAwuKiLsoEeXsCygsQXhhvwehoYAPLWH3cZTxQ2C1UgBBZpGChqJSLC1vGpr8",
  "key31": "2HQgTJnDuqsZvahhmgF3F9dxcdQXS7fmdYwCCLJPqX5WDG9sTjenc2GtRE5vvJW5KHSVtQUJHznAc3mwc1X7FBcs",
  "key32": "7eEaBwBacbLbBKQiDB57wMH1uL7UcAZwBAWh2EpHFRBJHSdLLwfG4xzCXD7JrN7ajLcKxnheWK7Co51bcgxTagy",
  "key33": "3EcWqQsnkn9VZLnjdE3QAfGjxi7reWLwtz9HEpVnfzjDrPSWZdtWoGyAg6B8HUGNHBgJGx5cT1TqvasA8txdLRd1",
  "key34": "5yg71rfd2o3hAZuAgkBfRLHc5YD7UnbY4L4ULLzdy2wR5u3odJiYwqtjwzUNE7xVdasvayjmHKRRxJwwixCh4doG"
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
