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
    "3CAMM4LWi12ciNmBG4X4k4KiqhEkdK96x3SNdedfuGdA5ZgWA4kc7ZkPPJcYcnLqGTiAYERneq94HbYERq58FTAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSChQjjzo6gfiAajGJEyFZi8T2wh9sE818EU5J8v2Sr9dwpCQYV6PMbyY91sPj94LpGrvjQF15VWHN26Bog2P5y",
  "key1": "2z6EBCeNWUJsq3gKXVdx8HnCBPytqVv8KzPm2c4i83uXPPJwwyrhZ3Y9pFQ3NXTsxykE8UpqDL1DexHa7JXamcva",
  "key2": "2ZufVuHCGREj8J6pCUTUWJW6XLxpyezAHcbHg8dwLUnuhj2Ct1zi8Zx47aqXtyuv49tdfPdcmcCdVDtXCBoV2HVz",
  "key3": "5YwxzW4oUJhCWkASXHJ7gvV9FVVeSZbx2gyKCueYQro1euomQ63UPxjGxLyZ7pJYcicpcCrqVuxXj3szXNbPfG56",
  "key4": "657WpPSUGWpkdxK3ap4i7DVexUXJAiuVmXiX1dnf3GcSAvcczXECUbwYo3dxGyBbAcSZPcWsHtewW6QxENTxB1PY",
  "key5": "48JecCV3Qm6q77rHQCdGS1gRBnhDQFsEX9bRwHrEFu9cBewUXsiYvJHidBpzM2YV2oy9Q6GRTpUrVbm3pyw1gSTd",
  "key6": "3ac4C1tZBnF7fcfN9dFGjAsVhyACzQdaVpNueaJknasr7ssVEsAHqx6fic858gUEsjAkqRc16hkhRngNvRMUok6U",
  "key7": "ZWciAtapgE7xooMNp4UHAh62GBHEkALHbhMkKDrGemDwRM83VGpfrmyMsig7kW7PLUvQxkCbtALGvV6VQvpMViS",
  "key8": "3D2QEFp2vgjGLFFNh2xVxbYog3z5Hxwevx6gHaU5QRykKyT1CyQXBneq6CoFezetXpugfocyR5aHDPcnLCH38PDS",
  "key9": "3phhyFWWZujKE3EXiyHYZw4FG91YK3TBFiN5a9FW8UVMg5PV8xTZ46umG57sh6FYbu6mtwZpDZ69zwCXkTpqF1xW",
  "key10": "23MHF6n7Qjig8Kc6sWtNgxFAUk2r1nieYzAvbk4ZmwGfn9DmMnJaif7BECVbJe5Twhj9BPi51vTXny6aEvFki7zV",
  "key11": "5LArgyivarEQT8Ao4UUEzKYWc9gundzNwoKeKakPEX6kFb2DQm3G2Sc8EpCpHyc3iLeM3YNvhToCsW35q9hU4D14",
  "key12": "4G75RTZ6YdpACTyA41abDmXVA7NxheCuH3zvGX6kvBxFBSW6uUhZcbvmB3EG6yhi9wMcQex8ewGsfmz2Z8T9vJJn",
  "key13": "TBwsdJdi2uJKJ8veiJd8wMToVnVnrsJBM37KucxDsboXbZBz7cnEawNjv6DWtKf2VrLkX6mwh3ka2jHHZXCZ7dQ",
  "key14": "23KJTqN2JvqjDDuS15UsqSa95vFGr7cNDPDLHdtnh4bmdrFoExJydyfh5cozTCjtytyNaKvfnZAWbGpuN8kfZLE6",
  "key15": "1sbJpsRGAAmx93U6Xd4Wz9u6DTxNwowbkGEgHwjKZUejE3uTqym3LGYdWkBLL1B2ybmjSNYnyswkiBaawxbZvmS",
  "key16": "1WgjJt18xcZXyXGYgAQXdJnocsaxE8rrP28KNdkMMnoVbD4W2X5JHdp6wg3APNpsX2n1bwEzJPRNzn4Ric1k3Xs",
  "key17": "5pkXoNatU9oBPZ77qL8vFyHqJ96EfSSTSFeKrw2xNGAxiHrtA1aRW7uoiMkBxX8HUB9CCquF2AGy6efnnHMaYpYs",
  "key18": "335SkWVg22baecvBvhdjJqqX7wkPpsXJW62qVsPgGTWfhkKke7Dx1RC4Gp5h2qT984VQHo8sN6nrgAcf3Aog2ku7",
  "key19": "5GC4B6VHGYuV3xdyPqooaDrsxJRvkohFvcsZpB8PJYb7RNJwCi4fHGjgSzcCYu3edMKuL51b1iAAYAQkdMqTk6sb",
  "key20": "3zudaqoZXAECzgxHH2wmT75VgU8n8Qb3HVCvnUyx317FV5rFbWLZn7RNu7VStonsXbwVkEcWVkspqtsuo8RyL39q",
  "key21": "4VYB7K57GKuHQySZyo4FmwEwRn2wJcyLs3waxLmV5oh8TtVdaRJnL3nFrvrF9KHFyetYTVacmbZQo7LjnosEchV3",
  "key22": "35Gy9sfgHdAVmyeyzk5P7CRphBvitUAGFgymmHaepZKHbcYLEZurskyKfhUYRqag4N8V6iPrVmENdB5b5eHz9r4g",
  "key23": "5j9FxAsjRJpdY7SBCX1U3QsqzoPkdw9uvTisqqpMpubXLVosqxZvGXdR6enV8FHVFL4mg9VsxdCGJBeMX9Q99yg1",
  "key24": "2XpN8J2pdAeySDxYeNR1vjoyULFzTt1FSXyipV8rYuNdHBokDWFuL1XR2G2vF3LtaM2RytfdHfyYMf7FrGyCAWmM",
  "key25": "gxe7Zu7bmoXoVcHWKYUoWunDjKGR282ZsFKjPw2s5fCJTR8XzkADiczvu4nZP2NNv2XSSH6uBSjvBpVuY6rEYfy",
  "key26": "CDn2yhE4LCiXpuG689SHpsYEA98jQKc2rGGcSqHhbgHHQSQrxJPPfEzrkZijainBBT5prytntr5BmKy8TxUX6JL",
  "key27": "4QZ2N6hS4xEdiJsXedcDH52TnGcM7FP4ET2EY3GdUocBFCJfbrqBVWLCcUp7Hs1SZncB1r7gYfErscWi1Fjgmt1J",
  "key28": "34ukn2BbaJj7shRREmWvJwLfNRmmPKxg3vSx9ogNtvQ36HmKC55ikmykSQ75kfc8oDjW3WrJxb59swCu2uu23FTd",
  "key29": "5Mus6dJ3o6fu8Hy2wUxyvLeSMaFWFwJo7euD3JggqXbDSy7R54Xpvqz3DNAggkofTBoKEr1nJvKMPn6JuMus1iKA",
  "key30": "3KCXzkXZ8iMCpsA63mghurow8NJWWH2AKet5iqHW1Bo1bVxBvC9yNwWyALsyf5raBgutTA2aorJk5TeM5UKfuutC"
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
