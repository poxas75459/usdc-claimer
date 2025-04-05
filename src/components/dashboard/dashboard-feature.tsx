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
    "imts8GhQs4jD8VJusbAe9qgZVg9gWyS8M6V8jMa4w6n5ZUEP6w8PAn9SACTJXTf7oQZDXNYYSm69yNvCYtgkxN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dcQhoZJBtwvKjFiP97zbsUWGJxQXqJpo9mdnyxJtFrFz28kRrYS9Rf7gmifn9YyhYHXdd5FToK6BeY8s4mEERg8",
  "key1": "ciQrXYTwjmVMQJFVcUHVChGt3Dotdr6Bniq6aHnEjfV286r3Xt73q3Lkn9r4ZPkWPcvYrGsHeNpmGEi7ie7WpB4",
  "key2": "24x8qZnUL68hMpvpiBU8ZUCknqEjgh7kCoqFGCT3awr3ygTYri1ZCWtd4LYH7df3vcVKv517QvoQTa1JCYpB16dT",
  "key3": "3QAxjzBtMksWn6u4bBrdGiJ7wpspgZ345eqjQtc1jvgiQH4XYKn6NcmWuXtJhCmvhXrJ64FdmXAqpRrVM6eiMuRp",
  "key4": "4qMb75iKokTYcFarrFMshy1gR8qpf2KswX4BP8zJkHQ1kq5ePs4QgSuVpHT34LbASTBM86tubzePLLSFf39LC4eS",
  "key5": "4kjvznn3ST3E1WExvioqJGAofwLp5SRDFSUCqYBiFHq4ViDwFnkZxCBnC8JPX8CgPwrpe6nfgcWcKAVi8PD4KkxA",
  "key6": "zjBJppaWfjTny8wzdBL2aaTmFw1bL6SUPVkW7u9sEQkHixsEjZtTkEkaenKzC8GmUTgwaLmZWWK7zJvhPXbqqzy",
  "key7": "3nnhCQpzvbXnEhjrj8rm14gnwgxeDvspAEK3iektYhTVSg79iFsrWhuhVaeTnAYTkcVNn4QFY25UWfk6ahNWXxJi",
  "key8": "4rdtKWzmRne4ScD86zWgcXh54RDkk5PygJBh6MmX7bP9pnUY7bLQGMxAvSsBQY7whAeSr4Syet6mEm31aFKYXBkK",
  "key9": "4j5wJmFB7WrtK7RBYAoujeg9BQvYoTR2DKhUysF8dR9cxzzJ4KtWD5KVBVjBT1zTqvQ2ZCDAX4kPTxpCPzw41L9o",
  "key10": "2DrwsycsQ8mtxYkYdTE2o3TtKgqMJmYehaa52WcsassjeJ2sXqHVWoJT3E6wvdSnE3vhYLPCttrKh7BjEeGEsyp5",
  "key11": "2Xa5ZJZRzPLdbFVg5kJs9nve3ea2FWpkqPgFV4UqYTLDRa2ehKhb3TeRzNstq3Mm36uNCZ77xrhdne76jsTWCTDW",
  "key12": "3FqfVS91J5pLJdst9ndLMVSGPtJoaBLdKa1cwMzrM3FcVWLKvHfV5WCW36dN3Zho8SduxNmWshZd9RGqyN3ahfPm",
  "key13": "55zv2W4MeerUN1kQTPEn8MXJDfkpaZc5HjdKFRsGd9HMZnh8RshFf2FTrVaaxQk3S4L3HHgZjRmPQda6y3Dh15AN",
  "key14": "2RvehqRbc4e6g7DN1QhbR2jfpTJDPNNNsPFyAiHnbLGqe2pxy7QDibcmxvEVyoQvKhCbgDqQ2trsY4sW63bcT2n4",
  "key15": "54rLvEypXsTY9g9vY98PYwpVy57pnbQyodQevKiaepFhb753Z7PuE7YBAVopgWnPbo4DGvCr1Cng3r7t2peXB5KX",
  "key16": "4qWEe8ZwzRUkKCA3HJ35YP9msfRU75RVzC772anqefFvuC7sZiafQ3rUjZdKRpY7iukNuakXakto9F2KzBcK6BwE",
  "key17": "4wVu2ZfgCdf61yXf8Xwjc1or9BwQBT6eWJKD7bS8CBYg5ieEFut67nLbM5m8CLw4JfXF6CaLvxxDSDyigvijeKcV",
  "key18": "4bFgKuMcPXcZrQZ7EMxNzHi6R2cPAVBxT3gVzTG9hqzHHJprjyH8M1ETz64Zb1bvBbi4k7q7cBoHgJ6niLuJSgP3",
  "key19": "3RXL3q4Hzyidsfwx3D4zmEmBSoiv84HyyG7r3pF8EuMBrDPES1E7YSuZ6L9SnEXq7T9VmyrESQxwwudBMZdg2EcZ",
  "key20": "W5c2Y5TrEjdpaS3WsuHBUpQWGHREAWX6NT6whGzG9z6HS9QFKbLxZQkTitpvSPEJutgrR5xqQE2me3c2BUy2N8R",
  "key21": "3waF8dXXbPjsbLWBMtVJjFDM8ipevRei7gArtcQacm4APaKxfdF2c7gv7bZRuxB94MCpmakYKi9UtP2PWmDwRKqf",
  "key22": "2KC3HX98rpXXHyNS311GV7cvemRojoyh7TUcKwqkz1iwaMqiHm6TbVtoJrW178tAeVNqgJ6xveHVC7Teu8nwnohR",
  "key23": "4M39ratTyvesZNLhR31WbC5sFvG32JpUKCYrYixjCeD29iWYq9aSeACzniehtMchUMXCEwpCUi7RLDiLb1sXmE1x",
  "key24": "5tJPQ27aYhGCKX7S2U2Za1FDm7Q9zT8UDU5t7WvzJDnRRzXTtKXhSRQEMLeZDSTYV4f1hgntiUPQ1N95a6bGRu2F",
  "key25": "4sahQofESdVM8ziSguhYD8ao4GyHaN4BYDyvu8w4o8usSSNg2Le5mEXQDEMFzuk1S3PKb36Skq8XWZmEW5GSnqdK",
  "key26": "3nLNXKVM31PKSo5TMVCHNvm5bGvDYeF63H1DAgUQ2B7vvKLnEWW4yKuUDJzH5tUPK3XCXj87xJx3rbaG6nhwTErE",
  "key27": "4zpNd1XVfsAFXeLDvXXHNZ5TWFPkQ6zAmJtCa1kqfe2jBsGMP5ZJBy7bYH3nYUXTtc5A5vrYSGVHynz3ovVBcUy",
  "key28": "4quYVSCNmXt3hbqwyRVFhpUKh1KTm8ijQU6NCVuQQpC8iHUnutTvgWxfa7o9huwz6ZQi4jhdbeqmjPiZnr2jNzKb",
  "key29": "2nch3ccave4hRHnKf4BGC2vXeS9QZXRadSGXYjerir6jkD1LSfaJnMrStFXSVLgsueXa6p1aJi1TkUpaBkZSf5ro",
  "key30": "7d8HmHyjMTb19qwj5FnwiFSiuAbdGiYvJE3KQAoAP4jH7t3Vbir1bRcxMiyCkR4XkBvfRJeh3kihjkAkKrgGLZB",
  "key31": "F39zHvPGJazRMDGFX5j5Ld46GkyXKxN2f2PxVtQz8wR1MrAije1tsJsBZ3kiGT5Z2gHPu1ARsFNhrwwxjeyrbhm",
  "key32": "3cBiW5KPNZ5bJu1Lsk4Z92jyW6y4odnjoZQ7KPEeCsRTC3314T8YhtwNAad5TpNdworREMc6PrB43gBsAXhdNmXJ",
  "key33": "9HKHJqx5FDwDve6i8FabfnfTzcT5JRXcQppdVLSpVsZG9kJPB356CCY279jtyKcSLBzMqfvWkuztc66ys6AxxpZ",
  "key34": "32dFoz3WfLp2XCaL6saucgEqxHKQFLepz5yLAWFGSxRQXVYPdpjfv9AD7tY568UV4bqrQheXUxThEpDKrdZ7KK7m",
  "key35": "3pivNurQDjPyZQTTecttgGEvauZ4MKToAdn3SUw8KF9o5JpDfWcPZifKW4mSPi9Wrf2Ts5j9Cm8vNaVHmAEqxuXA",
  "key36": "5GpsKc4N3RedGaK7DkwrSPuXetN1XJLtya9qLBiLTNvhCoD3SkiwoQvmAFDuXuKFksKaqGKXKv4EnGdcxGP7McJV",
  "key37": "3MQwH9PxVYqeoovdTGSnhNXKMWCf7UuzvjDhWoYha3Bs9SGUjRv9XwZG8oF1DxTkBfEE43tGftah1ToZKAd84cUw",
  "key38": "4dBpt4sdQKVGR9wxqTWh9uRC82vyAudJ8GetjxEvpBXeojDVdXgikU3nhVVcajohYhW3RA9rFB7kFc78NKjSHfu5",
  "key39": "5Tryvp9BijVvpjmaRhN4dJ1N6kx8RWKU1JSp4GWJri3fP8WFsyVzF99x8yZLsP9GrZRgFrJZydx4KdEUeVRbFyXb",
  "key40": "65g4ntmvoZdPp4aiTjNiywDFPjFuDTTE5JjgnGCDmcDbqEpnWKnpzGZ7hyTsbvjJaS5ubfCbMt1EWtfpPVZm1bw9"
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
