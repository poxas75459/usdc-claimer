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
    "3XLBFGyV5znUNTXC8dpWJRjWLcFd7iAuNPVfei2zckBpgGNBZ1gjSYwrZoT28RS5ZyusUfemFq8mVtnMTmk5sdtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qCQf1Z27hrLxQWc7zgAJ21yvgYJgzDxpscAMXbw8js7VRW8qTSENiQtxvcdyjDo1uLgYWxbtk3DyRDy3XyzkMZk",
  "key1": "3gyhpVCuvJbXUgJtKQhGsHSkiB6QtuCqG5jkC2mTcHqM1VWaLBWdKzXUMqfmqK7nYinQXSraztMZcW7gxY8s9upM",
  "key2": "43RyBFTo5DqAoq7QGkg6uQ5pv2xV5NMGkt3t2ZfCw4W2PXgGqxzBCwZhBQv1KDZfvmN8HtHa67ewm4agqKhT56pA",
  "key3": "3RH2dkow2CeNQiMc6u88aZzeTQ2vn8Uu6oTtxu4eeUrgjvWqBizJN2MJE4xXJAYHeNVMM59Vpcxp3ad9Qb9DCYjk",
  "key4": "44P1an5xZPRY1Tf8YUn3SotXURMEGYX9ke8mgmFLNYX8swmpKXqqxo9gXLpHxbrgWHZMSsFymiBaJTgPPf6p7N8X",
  "key5": "hWRxHjhpp4SzzV8ZDKu2sSVaFCBWbGyskp3Y7YyhbHwMkNtiBgp22VdTchjSFiRxNgxP1FSgdGHMSDrQm95s4XM",
  "key6": "5fYA4WaRuW35QdCcPtyzdShBK9TWpzsPKKHr7JHX9vVU4jkcj3SdT49vDPsogx6745tZjEGEWsoEfpuGdeAs1p2",
  "key7": "3mEi69AC1TRinzFSoHv6LMYSArQAook5ZZtBMsCh56t3XScm3PNc67kbBjihdfgLneYKYUWHdrB3PFCzmdVrpaPw",
  "key8": "5YJta8CAv747gzHGqAQGyGTokq6GBjfe6o11rEo9AyYsJbJctP8aymqtg9gnKgCoYrJKWE6mupL87ZCuqMP7qLS7",
  "key9": "5bQwKGYGQuMi9tVjhePnxLH4u2gT9PUYmcRwoEbKSFdsvNrM8rjUNqEHKMM7KbspSdhPKmVt8GF9pTG7wEgWNQjw",
  "key10": "34HceGnXCv6ueSQPGxMbsNkSb4LGNXMtJa368TtC94S443trYdxFco1Mgf9XukoNFctTEtk1uVwfmBZnLsnJFNgY",
  "key11": "57hHjYnoarxyuqVZYQwzuTqRLQg85e2qnWzX9QTsBWGc77T47z4qCEFj1p3XULmTTxmiSrEzoJKdmPDeEtSKBGAa",
  "key12": "zjfuuuZ1a7koUpSgcqLxsdH4prHEjRVxCnhMbENAygn8uy7SzM8AFtDRaWuBQ1vC1kk1mnMkabaJQxy2nogGVRx",
  "key13": "54gmcUdJUDK8AotWaS2o4kGwv2rmMYKkzb6A7zxV9ij25dfsDAEWL9MmJgJpi7DjASqBfFW82ya97ufRqfNF1TEs",
  "key14": "28tjTmb96jVWDH42S36CuMdXEkbuezoHS8xeaGb1ugjEn2qQuDEjdSPhfuvKUASQG1M8xX7cE1uDbdVhidhp3psz",
  "key15": "56wjdy7V9aDZaCQTTAJ6CbKrxDoojhTntMtujv7fjuHmTW7DQ1nyuVjHBifApuoMmQXrUWibs2Vcqz4iVjxPfWpD",
  "key16": "3SeEhebvjPkYA6waZjZefJxZFhk88gRbpxz1W3u3pCfhmH4RYDG2hUGS4briup2ymvvdjKqhGouC5JUAzoJXPVTW",
  "key17": "25NUjS9qNokPjvkJFedTo8vMH1MuAbEUR9nQEiuipMQHBGKSMBDsYTAqDKd4bBSsSPRqQGi35dvvQXSAdv2A34uM",
  "key18": "2nW1AMCjjQvQ5MMJRkKWKPaYCvP8etURgCPKv19PpDuUG4ytzCZsshT3EFHQVpQJ3hCoKuuAq2vC5LfjB5rjbe1p",
  "key19": "3uJPf2aA7tozHxtvnXXrsscpkpBXxpRLRw5VHC5zz6sQAk2MtZgwPbLU2NLeJ1h6ntsdWnRzPyNE3L5T4gCmhTNP",
  "key20": "2MGewcqjPqUr8NY6hfUNRY74x2cA2SKxasf8JY6vgxfSWBM2NWm4DhCXt2943a97cYWBzCzyX8GpSunrD6J9AG1w",
  "key21": "4GTmm83g42mHr5JGPxzGSxrnjsdgn5Ccd9oPnqV2ge8cna7CxWkzfSivtSNGqTDrBCP9EvuVZQyT7J1AgBpGp7Sf",
  "key22": "3NJ86mSf9xeb3a6NqfTCmzTcrFGg5JVBZMn11yGqeKTeAJuraVXQeTCTBhvTTBiL2tFF8uWFiT6DJEMwHw75b2B6",
  "key23": "3YRVsYASnnhLbkWjT6ifXP1NipYhmNaGCNEjEzTEpnnxMcYw23jToMepH3WKSiFsAWHwRuQJZxgb3gRf9fCRPjDi",
  "key24": "5shckziiDZ7RWfJKA2fnJ8PGvrZSbZ5jikLYBv9a391xPvCExkDfQYWBymFBFMpA4bLWd82mPNLXRsPmjRmwyKm4",
  "key25": "21tPbcL3VuGDWZ3iEnmdQrTHN7bo8AFgMa4SDgGSSqthYh6ANFTx77t9MGJvtsQchc9o1t4fb59Huq5ViBYTcKUG",
  "key26": "2HmTX6KJn3p7jMUxYxvFQ8dzNQCZ4s9r3xnGaQyjY7EvFiFv2AeP85hn4E65xE4NFZUDUkVtwLQ8zxaaaP68X9v8",
  "key27": "61DCjHoHA8pz4JTqpHV9MhZ9CP9Pu7D7yoh3FD7rhZKX8YxURXdhPeaefoKRMZJuHN2tMBe9VhVifaroY27FHJjN",
  "key28": "2cuzKj9B3HV5yQ1CMay9iwRC2ka4TWbPe3GaGLtdeB9FeQf3pLXMxtLB3b53hvfcLkpFwKh8Pp2j51ijbcJwigvG"
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
