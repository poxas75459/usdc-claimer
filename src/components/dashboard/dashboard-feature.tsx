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
    "21zXDWmNhekSqvUjVKXgpcVeSQaf8HZ41QmStJQukvxPhhg3AjxbDCF2LodRdbQgMZg1zj2dXeSanyz2iAi1UTLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8nusisY4HBLhK77qZKBxDFYPj93RLacvU6mLrxT37MFXDgHbU44NccoV9GpddHVmU8AmkxJ67wH7XC4debgysNf",
  "key1": "4XyBBbLF6TwoeS2fP9d3D4FEYeawHRgYM7auuksDKhX2ndBaqzK6bp5a6An5bgjyhB8k4zFUaSMbnCridETTdx7h",
  "key2": "3NcfGwBsQ8sCUuD97R3fMZs53hBvYV6Mchfr2NHvdsiYZX7TegxnGCi6CBVqHvLZLkcvMGqz5DGLEtWtRXKdTspK",
  "key3": "3Q8T3XWWSaAuhqYNZK1kZP68w8p5TyHAhiC7voMrMHbjqZZhbn9uemoQmFjKfwhXMUz1TF6FBSJiab7ytVpuvTvi",
  "key4": "WK9CRQRvf3CFtqRHUbS5LScF8U2pYMB1HLbPx8uRHx7Xv36EnxUwMRBHg5TEa6eKCD34qmy2aMN4sabSsrqBQn9",
  "key5": "J4k4RM6eXAPzbWoak3xnGmvCbAGFJExbs471mg7NvjCmqA6vESBW12usHGSGJ1uoNwd7LQ6UWmQ152rPyqiaMgB",
  "key6": "1tdserqfEWG2PjY3Ux9V1cAGcsBpsmAUn4mY9mSw6ag3yNmEbZtV6wnjpTZuBvsfRQ9FzyxvRijYw7sMbFKMh97",
  "key7": "2kMm8cXPZx8kiGMSp1VEa7vM9WYm493q6vUCFYYRk8NrwuksQDBrRvu3EkBXm9YPDkzu2ARr7FwWkAacbHvVKTTA",
  "key8": "h8ed2jJHwb8o2MhBNGHAfRWT2ScrTtahzV9PjMfUV4QFx2rVtGLM854PPSWzt8Y477AjP6Xp1WnnfC42tobQqVZ",
  "key9": "5Rm7y5TUT3WGpKs3uM33KqFXpndUfbevpRAhAbkWA4NPTaV8oX1j5PhHFRomAGnZtE1Fai7vrUYBrJ3ogeHo7JEu",
  "key10": "3mBendGf3ddijqvLAx4Tn4mUandSEKXgBLDJhTCVj2pBYb2oTmiNXpWX68PXqnMzPFEznnJJbyqWdLDZa6NK3UTW",
  "key11": "hCYXK4P4CCPit3QNNDAnJ5LbSwdrJR64X6YNDEVPqS1DPopW22sG9zhHU6GuUgxd4udtbWWqHrJGzJGCuBuQbPj",
  "key12": "YhBnutNdYSBWmkHRQarziWBSjjFKoMkjWfPhSwiZ5ZY7Up7gfYPEYBvmghnRTNoPGHPQwzjcnpuVbXMgbDVdYJy",
  "key13": "2j5P2KyBxg1D9QgK9iKXzo6q3t1Juo263yzB3QZA2cE4qiU8AkCYeKrzszyKcZStwdy1W9SubKRStX1zaGXVM3ek",
  "key14": "h74oHTv692h4euL9niALCqgzgBKAHpMeYRYEKApHY4rHmpNZZjQZ6TebQdHcDVyC3JhK6gjUB4aP4A8K1QhRDFc",
  "key15": "3qUV4KRjTmgFP4u8gXigipEbfzqbB847m6fsfGMqh625VztbnQkkTQMNuaPVdcbo2hcgEuQLkQiLB7r7PpJD2yNn",
  "key16": "3AiN2dKUpKKyPTuEQoJjzJyTK7jnzyDorhc2VveiUeb7Ny7ijc8w7x8PNCuNoKrumTLuBnTZy12WDKb3hEre3nsW",
  "key17": "4xVkminvkJZTEQh5dJHd4ydwimpgkPmNnAye43o4GfzTR3jwUjX3aHMCXp6TcU8odRfdV7XJW3RumyjRJr5aCjxc",
  "key18": "3zvjbVHpm5jfSqLtkKKoJRN2eBAXbEtxSGW4WhPdZatnwBAafuXgao4fB65d5VNVp2GJd7teGi5EPo4TMwDePckf",
  "key19": "2TqNZP3rANZuiiGSazH2tpURodr1uSXmYuydAWTgv3XEDgJgqNqsnpQZaUzx6ikc9Mcxk1vZMqAioAGDUJfQ64Mg",
  "key20": "3iYD8x5WZ9vJjFV4YtC4eTUUpjBq63M3bE3ToVk6RL5neN3JsbjvTxQoFRXYRfqyweghDxAjJxFvRkJzidz4AebB",
  "key21": "5DkHHAHj8WTbq9Saagham3pY8tTrrLDJVx3UfPEp2d3cjmAFttzHoQs8RQMRxR8PSsHeaDp1RrbVmbiegCWHhzxN",
  "key22": "2m5m4ezUmyyvJjHiaZ989AmZ3HLskHA6yUxSJAuXeJ3km1LoeGaJfiyzFW73R1it3sLp3r925PBoC1HNznf17qqK",
  "key23": "41gVzFwPNdGmv5GbExTXvSdRRAzRNkLJWQY4FQgqBaUdwAff8aUBJfd4teQYGmcTbUm83S5eQBWA2tQJj8AY8XVd",
  "key24": "4b6HTrejjyERszRHUh8gdgirr9ezNnFFTtdZv5a4U5KfRjEWtgZoQUhCm3wWuncFEHrarJLuK8556oM3EcAAWzYB",
  "key25": "2FTAmVWEgTMGuc1eVCR8qAcL7uV5iDyyCjEbZa72jgiKivTtyBYs4VHqnxAVMdtw4cB87Y14egvGruwo8fCxSRHC",
  "key26": "5HVPyeR6j6EvTF4GLnp6F2aTcBXRwtnv4WJbc1R6s5LYNEqBU3S7BSUYjLCBmhYg79rS86htWdh8LLdav3T2Grjg",
  "key27": "4JjmmrMwdsGLHC9R3bffJ9byy8BCU5QoDbMBz3bqBFiLcgeMv4oBKUPiXsa93VsXZDW1dcCRsN8d4eXSPN3yojw8",
  "key28": "jEkQrhKLCZh41Ev21XFShAaV4JBeVsiabJ6kLA8uwwfsPmCW9NviziCLnkVofV1zEZUh5uzwciVSc2dd3rLUkyt",
  "key29": "JiVNTSL9uyCDfMm6Rr2dYZepn67VQmdB5mRzVxCgJ6xkeQ59MK8ecYbKdpqcnB43h4m9CNgy4NXRvapzrLWbSZ6",
  "key30": "3mus8AbYsSTfLKy4ibHKdoT4Fnmp5aNqi7LVq2fmf5m87282E1ixU3YkhExQwk6qvxBsJwsPKt4a3QFW9ga58gVF",
  "key31": "3Ej5DRpMT3TSBm4miSeN6svVmnECajvKuhRysmWw9m3J6x8gfJHHEQqFyzudobGXMdEh8N6Crgv3DRwJD8w1nTsC",
  "key32": "5BUphdj3eDciirpuK6FrTDuw8CEcYAtqCKrb9RijeJNz6dKyx3m54BvN7PzkvDrBfMBQvPc663ZoKrjkYXMUjvCx",
  "key33": "3wNEmm1XqYRHfmLJPAfbUmaMYevsr1ePeQGrubjAPGPSApDk9aRMANh21GPC8Z7iyy8B8CYk13SBHTDYTiPPuNCR",
  "key34": "pyZgYLeiAVx8HH4HEsG6PRKjdDAfF6LPULUZwocis4ZuuWFSBTvEMcPJ9g1UFNsw9TjioA5vAFufiL26StNMyq5",
  "key35": "3p78pCfHMqgp9pRG1jv6zJeTn8xW8cHwdjj1SwUQgtsEKzBeXsG9eTt5ub1PPoy21vesjc74H3u72yABuFjdd5TS",
  "key36": "5s1dJtuBNTu6k6djG6Wu4hdnQd7FXSK7SNHS4tN6uNuMemT5zd29ccxSmv8cZ7BavRQiKn2KjgM7doBPe6mfBUkR",
  "key37": "4mqW8t1ZmDRMz2DMu9MJss68FiHXEmvThBYrRWQPBYtPi8U5LA9CotTEQti8d6ogWoG5BiK71P4kP5c8k5ciRw39",
  "key38": "LJ71ZQNkb4YWaB5XEmaGGYdmahyvwLHzJ2htxfLVTQzUww5XrqKHTRjNL7Y6njjVukTd9xt1rq7rF1qsse8DT74",
  "key39": "3r2aWYJxbqddvU6iyHxHKhUKGK6LN8sDb3awcj9nKUsUDBALZDAjytqrDM2MmZyc8t9AHJuGLQTffzVH2N9oSGeg",
  "key40": "4sM2t6y1hwyXmKBTrWFa5EqRtaExkQg1v3iAtSPQim5Q5LJsVwaTFN6WLQ1M9LSpcz7uikGU6TkPWG1kuVSB25r2",
  "key41": "2ys5opoeMxV3NfcWXUea9o9f8WecWhPzicnDPsZfYuQUxRgVS25YqH6qWrhZThFyaDiFrKKWu5cREVTrkKCoG4WZ"
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
