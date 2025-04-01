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
    "jYJ11ahfWg3ukMgyMocgw8wx5sffKCCmpmmfBAhsPh1mSmbdk85PaJ2B6Ti2xpzTHtU8os1BrSNBrWKu7Brr8bF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6CdHcVp45vpKnCXtneoB9xSVKTYXUWZJNP9bPJdkwVMuCz3BBBvmfnCQRAsQoBvX68tcG4E2bZg1we5R5n4d1A",
  "key1": "LdTMD915PEypvk3qztirPSrEq4VexMDrHNY6iNr95NvHiwjpvigXdV6D8jhy5gpidTcHJD3wjNJr4J4WAPZUfY3",
  "key2": "4i8Luh6UJbXG7Y2r9msMG2qLhYk3R3p8MSgFuE81EQguZ2j2mZXKhwwQk3QYY45eRYzyAiM1GYksqdMD8qG6XVzB",
  "key3": "2t6FmeR3mKgNvstd4hkCsfAhNSkVKkkaMYqeHawWrFjqHNkA4ZgoQaPTKLTrzwFmNXTP7VeuhQ21txCkdra5Aprh",
  "key4": "5Eix4UFrbsr8maw4LBGU7U5cqmQYNfxTjnSAFjDLadA32ECVgXjHp5hndHPVKM7tfkeM6y9jxxvrGJSwYmrbsWkz",
  "key5": "4kCqttPi7VpenTSE6AxDM3XV2scP5JipQXEcRkSLqW5rHP1c2Vp7bYEfNh4upTpqMSd4hhPJKE2Dp6DK4wte96kW",
  "key6": "552gLQoXcvy9a5tu2XpMvLkafT6395adg7JT68PhYuN3ALB4Abdpk81pu5bJE4k17nmpnHVFFemt3tY23MaVko67",
  "key7": "2suYYNnagHRaXw69NU9dn17SrAyZRXcLLGpBcUxRfg36Z15Mnr68rS3cvEEw77GLbKy78Ww5tqB1ZVLRQRr18Kg8",
  "key8": "2MQFc7ibF3EkySSAg6PhayM9m2BdpyCWNkeYfi7fgQedpuwENmoq22UXfXno7sm18wnfEve4Ydak2wG1B5Di9TTs",
  "key9": "4u3K8nebaBMt6D3ReuVV6sDmzwZaycNHcYRdW329vQ2PKefcSmzSnmaftryvgv1wjs56wG1mHh1sAw7HVUgvbu5C",
  "key10": "3hvyDXrVJKSeCpg2vfMoQPZR14rNeHcrZ7e5JCyibZdYiB9968y1d1FN5dg6zDgaoMZ2vAk329Sc4Wck29vfyAMv",
  "key11": "qu64LhPiPHuqHYEuK3kvSYseyuY3daUpzAWUeTpcfXRzUH3AhLQpPGMDvuuRFxLtxgBFmkHgJq64KtrEVTaQb3G",
  "key12": "Ht7pyiWHwg2KzUZ3MH5QsiB5YfGLTioWPhWHTc2jL8CfMuVG3RGCEV2gNcsutD3nSnVzYS6tCy9Sx2Sv2gs2Ezr",
  "key13": "3NYgDbngcWQxpU3E5pR8kPFQuytuEjFxVz19jDyKzPWw8rA9bw6fi6NpvqiV2aXnKonZ6KgeWFVHsyZ8G7YTu3pC",
  "key14": "4umaBAPZJoULNoMw3zzp8Z9WcjnfCCfzmDqB9sMvTY2J5UBEapQZBQTdvjGqafpD3QcKENtKWpaPqgUBcvXkLf6Z",
  "key15": "4g55WaW52gEc3UmWFu3NuqG9V4j3ZybvbDn4ZhTr4eDEdz6So78tE7Zf9npor88AtoCovENCPm9Kyc4wU7wzs6kY",
  "key16": "3QxLocQzkVd9uCYwTYio7tWGDJK45sjSZgtJb9nEFpyL65CPDToWDxg1vJACj53duYMUDF8Ym9Nft7VMDMzVToeG",
  "key17": "3RcNUGHqLhRtbLATbYwJeXPziDHDjPYZJo1AyU9uR32rMbkiyTG7KjBWhVdHg838dU2PKbWySyHLwxKHQtuo3hXq",
  "key18": "uxbDTji3NeChPjsxjyy89PL7eKmjwfWyqY94x41D1dwWUj8Lfxo237W3Vh7QUSnt9MyCy54LfHSYc8uxVXBNWvH",
  "key19": "3EHjyS5CuJUL3Nr5eBXw2GDLYQwBHg8GrRoHb64Yr6VPwGESvwtzjWAS8kNHfXeGCn7Qun6MffXFWsjFY6phSdFg",
  "key20": "4UT8aie3HfQUFnDcmgKrTH7NM6qBGyBwX86o3dFGdXsqUco9kXXyP2CqNFcEvt9wiGpDHneosFG3QkRgk3u3Z2Eg",
  "key21": "2HUtjog6n2awQvJxAbw6D4YUFwFdrMvPT3rw5VPcq1bv54ivepFwraA3DKeu7LPxTJGHL1LWCifUEi44qZP3bcHo",
  "key22": "2AFSVUttvfpU887fcBLAQ6J8buZ89aYJC4kTkSiDvM2FeQrQwdAkiNkJsTzHrDJ897RuuSr8dKHVcYQxVdUhztoX",
  "key23": "32rfjxRm6bUJdrgJJZpg4bZXzW39tujitfRjYhf7oo1UCKivxuL8C3HqEuNRiBeXkwzHb5LMkrEdvNLbwMD77CET",
  "key24": "q9YfUSZMfSqmT43bfWAMrKabQc3MHrSMswkrLWeYVf5Z631w1tXsVghjmGhHT84SkR5SJFp6bpqj7nwzkK9z3TN",
  "key25": "4AB6eMspZiz26h2UwKggsGZTP3yfdPV7c2RsCYuTD8d7umocbd4DMUXQHsERKx9G2ajWrUgnHa8Y4Bx4rw7yDVga",
  "key26": "4Uq2utcgZdEARFXqc7rGDaUjPMDdHqSwQLaLuaHfr6QPJrEpY6wyZXdCZdrSxGBmHgp7zMvNc4ggQfqDLBqjQGam",
  "key27": "41JKLAYfdhxfKr7u7w8nxAchxNPCy23yPzBqQih6sCAgYKnoQ8MvsAF8qstCnbSbNY4eanHHLLcWiwdPvrj2gAbS",
  "key28": "3uPfEC4gTsY1RbYNr1SSjY4Uc8e7PoSk1uTrcrF8vfGBmrXcBR6aAJrZP9H2ep8CENEPXDRx8SDrbmwY9KQfzKXa",
  "key29": "uUidwKxhRQhzRC12CaoRhbcfBycWXow9cfwrDep5yYa6d2NrwWituSpMY6F81pFYPtDWkzjK4GW8dSf4WXQph6f",
  "key30": "5WGL7n57y8DGQev1g2Y3wxUXFpCybpzS44652yHXXUV8HTqC7JUjP3cVSmsMyuaSBxRr4Zp1bshC83KBmRbfU2MX"
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
