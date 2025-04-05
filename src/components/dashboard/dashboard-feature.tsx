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
    "3J7YnV3WnBFhCsFormZTqPAfz9T1JSWjCSpkYBkmyus5KjVNFtsjteBKfD3cxQzrr1ZHZhrBNg1NNCRErV6kXRLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKwVcdWmPJbCQicqAgP7hQU263zJgYX4R6orSq5peXmLwepVA3SaxNN72d4ftFjRxNKKyLwcAbnWRb4xzNbYGc4",
  "key1": "3vY1LjQntq1FPm9pNArrVwfCKPjwmyf23DrRnB4chhSezrbYLzqV2aCGWctYE5ynz2E88fovbwJv184n7bzBV8er",
  "key2": "5vTpAtEUEckcG39vbX29D2krPxCGFLuoFz6QCr5uUG5EfBSdbSYJs1qitaSSCVRqPYUp59BethaDvek5gyKaKG1Y",
  "key3": "4z7WqiZwQNGjQUmqYmsJ7k8CTk1FvioCgN8j9zG5LqjE7FS65yqYbSdes3mgWhFGEM1sSGbksCBYnwpMCEXJxCpH",
  "key4": "4gqW5DTu8CB3jBcPNbRP31L4LqwrEGfLgeYCsXe3Tc9biwoRc52HxyJpRYc3SgWU6hyjcsRUXmdWZ2YdYVv2HtWV",
  "key5": "2shmHXmqcAMiRXkq6da2AiBjk1ed2BVHanGsDXePFZm3qhQEFZLBXT8tN7kZqMeXGuFz6BqcKYZonYZ2pCg5XQs4",
  "key6": "35fgNTF77Cpb4jZwFXFoWEBSJ1qCuksViRtZ6ayUMuKxBH1onZ7autkr7ctKHwJuqHmxjQnCLVzivwmUthxx5wPX",
  "key7": "4pSoBfDjngMDU6oeVjYg1MKdkMbFB3Drvud4op3PzFTzAMLKDF9tCAAGJR8Mrni4hUpsvws3KgSFNAMmnWLdy8Ke",
  "key8": "2AfX7WeXJRFCGXVuMS5vRnZi9BvxXTKeRLGY4McHKWYrJD7ydowxpEPhR17KmacukQMFN4v7dBG2CptAK1Xbx8US",
  "key9": "4mfR8SbKRHrZyH5mMtDmzxnfs5zAkP1yxmz88tsW8cX8v52PqF2KzAQq5oMouEN2C28ZKV3AeRSQrxvrxiyWoJZp",
  "key10": "5qQtPz5VyUWMfkcXFW4VqkT5hCcmuYz3pM7G1Fn1hV8eS4moEzx3iJFtCa2c4rwy24HZhNGGgvCfwnSUPEMyFiCc",
  "key11": "3yKMj8wfrkzSyR5vjHbDFFpqkErRYg15mKTcDvdYFgR15VYW1mX6QFtqvbAojrmaNtyAwhuxUU9BH8CrWVWBJAyK",
  "key12": "1UmyfSpVob44K5S2Up7EX4oG6RXGWXX1qJH8614vmXUAtsGc26SfX5T6Dtgz2Avi96gZpbkd3x2NKqZwM6ArxcC",
  "key13": "4LUPKrTvspvQ1P5bUDH64tzrinQahokicioYfcsQ9AR5jbcEKHNw9f9Xf8BQDRJX68J3W9wRv5LgrvvSzwdE7ADP",
  "key14": "3oCD2Nv8MBjFPvT2ZNZ6fB7JfC3NsHSGuMYaNV31xRRsoySoy3z7tGk5ijG8dQ75hxkbEMLrnEfdXfiW99V88V3k",
  "key15": "5HAu8dRXNNbJr8559q15tufoX8pk6aqyuAxP3fKm5aX1ECxigzxPkn8RfNvbdpwPragZSqcrbS27mDwk4qRy2LQu",
  "key16": "kXG9jc4hykvV5HFti9sfiVauqwWAo5hR255rxtJXDtfiKH3iZEbR1NgPK7qW5tdYgAZHZHLVj7cQCFx2gif4SdX",
  "key17": "4cAzG6HUdFFpTgdxWfWPPd6a8kiYtVeEb6Eh7nRnED8ZDZ92Qyk5XXVpWCBRF7hK9vpquZ4iA67W88Y5btVn5iCa",
  "key18": "53dLhbsFz7ap5r2mjBUku377WCiLDqYyUWSNUBTipuKiwiBGgH86WxcDYv5iALrWgbeqzinbVxssW5CRWysyaLQa",
  "key19": "4GVUZLiutKxu7gBxWRooyx94hBdYrgpzBABZrTQdT3dUuTEDLCbY1r5pLRxUtvALVSoCdvdfqAE9JvBz4hTkZDKq",
  "key20": "6cNHnKxumxGVbJ1UeBVpNhqJ3UwDS6KPahhuSGnZ1qnhdATq1hJAoD1mBvswb35F3aCNHeTaibpDWb21qC94iaU",
  "key21": "5Bv4NtVS5zCguJAKXFQqA9gzDeeRvaaHZVfGL5r3hjfJVDiy1TBiokUsETvpZftfcCpjDZ2xZEuhEn39vTLSd6MX",
  "key22": "2RBeeBv3qHkhVMdrXoK8N2B7VE2gCwtVBj3hbDyKF5kggJGAkEvEmLAVsc1uDnYe8tLSk28cqNBbhv9dMe2HHFY3",
  "key23": "4rPKbgZxWixbX6puPNAjXaSUPevuNhTa2X2WEhqea7TskNT3brsMdkPWTneF9ZvA4YhHkxFPcMhdKSsyt6jBnHKk",
  "key24": "4UwGXxTyWWeCaJVJRc2ZZM1TRZwU3iVHAkDvbiE1axYkjHypsjpAQiHgbUkPeCJjqYxr69VLqNhgR5ePhLQXrWZq",
  "key25": "2sSaLhcYs11Zo4MqzdyUhitnABGyAAbh6GEjYec6d68MDQQCHuhgu3di3Utz4XsKsVPegNWhQCLe7YePisXWkHyQ",
  "key26": "3zreVQVNLTBEJsveXwtheFT1euKjZn3HRS5xkLqBTSRUmf1P8nLKewiA33NuYRzapYSJnuf5g2QnK8XZtSbdBZES",
  "key27": "621TPNvrkiMmASCZFXKRx5GYaGzQJtzXAetVLGWeWtR5M7JuS9PnVX1qT5cFCgZnpwiV2VWRRxWbWjjHUou3t1d6",
  "key28": "5RitDdWWvdkgwvr8X6njKrhf8ktRUAbcv2CpQ5uBqb6uAEoHNZBBgUZdqP2VD8fteC18AkoBp1CsxXYAbcve5CsE",
  "key29": "5R2FrzDyaL59LKdFwsL65wAmaGVeRuniVikLmp3BgcJpUb66kVRD8D56Po31j4Yhj5SWfNkStn7rzjqY4AXggkWm",
  "key30": "5NH87smiEGqpbs7C7vvzpasKy2MCHf3Pm7RGD53hdZw2VsbC3RUrbt7MVt847kPkapKZ9LXEEk6SVAYp8fp9SEN9",
  "key31": "4xBa4wYw8ngKEVeDyqKeizKGAxu9jAR2xYFXvavgZAYNPEBXmH14irntNiJpKpY7zsDWxLk11gEvJRoG2bcdDtzf",
  "key32": "3LYGgvC5bf8c23g2VkiS2v5sD26x5ooRXiPBcdXKpa2qsKqVBEScdpJa9QdKfpfrR77N99dQBShkR3LvgTGoKyVa",
  "key33": "5YTHzPHgtKYduU8hQuNckRocMe2HChcZyZcqqejbQkaxA7tTdWteBLFYb5KyNaDaCuDcjuLboMRWayax4KxxQnWN",
  "key34": "4DMfRu3gXvmAgR728X2wJAJFoYY84tguXFHujjBxi2LBYCqSBim41RnceXSFnD4tcLmrrNWtuRwBKLoVgRwRK9xU",
  "key35": "2xoNDzpiZpLS9u6eFG4dXwbWPR2cG6VpxQCTyLZn7VNfaLtTiHN7rvKMJrhov92UUTTkyobbUT93m6NDUmtLC2y5"
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
