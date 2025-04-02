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
    "2pipo69T1XxzMxFw8fZ6X5KeBWLCtg5zaxhmsvZSRaxFUJu9vuTruRicEtd4FwqCJUgqQWtZQNW7uS4sTwFZcyMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpKetGJok69itSiuVfEmKvunYsXSCrehjbhemHNn3Tu8X5J8ZuVSkLAg7uHYa7RpDhsWA171nwyJypVbdzrkgEg",
  "key1": "2JMjFi7b9rvzCbZ3b2a8NmfgP9p7JZc3TVreq5af7uNn3zsKn7HggBh3PkDnLjmC7aB27Y1EJv6xEvr3i6MamgvB",
  "key2": "ASqo3SptBqccczjSWYHpBJcjVkXMzZZiyTAg4BNFmvRvU2sE9bFGhqHC5P4cS9pDKhtvRHmivJxP8vddENuRxAj",
  "key3": "51US113ee8LhD92GmStRPsjavZSR6wPSCewLxZSjdi7TGoXkNiiXnoqM811RLiuhamTpUR4wzGUM6Y4mkUraEhfb",
  "key4": "5qTSLTgRoyAMWwh7f9koXHrBDNGGxjcJeMjreMmVGr9ex2CBRSLGWJiWycaxwHzH67YSTbQDmJJrBS4GkQofMsoj",
  "key5": "2TPbj5kdDWSo5H5TgayRXdv9vfgTPCdEpWZLEKJdo5wQGeNXe3UkcJ2nhiGchLoUqEXpdqwhxrwMnP1a5s8xJ9Fs",
  "key6": "5btrwUojrzjLgUxqXGMGw8ojV18Z1eSrcCVT6J8PdwoN4ecUdAQKnLYzphWLZ5kg78Ep9vNbtncFcThZuBb1gETb",
  "key7": "pS5ZHQRSEZvTinjdQMqELRxg3YY2F5P9Z4ZAkWT9FxSVdVg57avkHg8Hxdpt1SASkuMaVJZVHJUd7Y9JiGnPxCS",
  "key8": "387Erjgd97z3G2n18RFutmeiokwBoDgrdg63Sb7BYaeR6HdQ2ssmtUv7tgjEUCjpmL3mD2fiohmqBH29DjyhQAHu",
  "key9": "55Wdt7p5fTN5EH8RMqcYjPB1aoHB193bqBNt58WKCGuFSt92yS6uGsXa6vWw9kBS2rHpfZnDzNeyiHet3KSiCcVH",
  "key10": "3QQPCoUm6ZL5E15h3PcG53VJS8weym2WEFPBcbFPisoKnkcmsHCzCJY7RrUPQh9QDjcp6RgBfGumfTVhLUjgwBzU",
  "key11": "49LJAcZChyfZ6QQ1c5qdJgrcGFrCEWeAhMtkMenNg7ANAoYoBLnxRtQD3jpDwJZz6Fx56MmLS8q1jQ6p433MjBG2",
  "key12": "2Ly8E2HUH6ZVmMPACNuDRM8x3wWzAt6VDGewjTu253asaWRWT3iSpnWqWBuN5HtNK7Wyu1ZBXRd5KGnd5rUweBTa",
  "key13": "54iCzvhrrB4kar1Tn9y6iELf523pNnVoSU5uVE7q72mSo4niJc23BnFegScbvh6i5hNMnVZoEo8wyf4bWYAJ6aKh",
  "key14": "P9VG7WZ7Tt5aABPZApny1FKdtJp3yayUitgyttAq5EFybXg8EKEykzhHbfziGg5ziG8FhmyX5qHB2qB2oDy717u",
  "key15": "41TxcRzb1VrmkZs6t4VKPBQ1byR4AoUmUi586sroktbYRokPUDWVjUqMFS7sbkSuGVzHq5VYTJUaRvbBEwg1sYPa",
  "key16": "46aPEaEAyZbHXtzHXQMQ2x3cWKNtW5nKPQSJSoLErJgKiDCBT7CEwWPquZFGv4Tazmci5Nbq3WtqvVsvBwWL5kJq",
  "key17": "fmmVSFkcNVKDK7X5yPVujkM6EpbuqKyf4ZB3GVyQHKKb34w4jYTM96NnzfGGTBGKEMaCmRFRkRPvNhWSEXdLrSX",
  "key18": "5TuXYBBLYyoiBGfXnx2NUu3rCbzKxM9TqiCnoS8CVyK5qUqkS5yHc7HFsYW5sJWgy1EiCrkJvGbv56yAZ8ngGfcr",
  "key19": "uSEafTwBS5Fgai7Gaghtw5aBgLpZ23SQrRWVdRgg7EruNRx5QsM5LY3jNkRqzJnYVekQdrQuM7fuLF8N8YoHVPy",
  "key20": "2d6ZKqcwq59xoUrj1ak3eBsdqEz475N5LKPFJ42aJ8aKcRwSPuWGRnymaUnKTwDZ4d5TRqJStogQ9AGBqPPUHasM",
  "key21": "4LHPmwAsHrD3oQTwG52CNRwmLpPFbijNWDwGsbbZfsRCoLjtiybZ1DKViaycTeFcLjZDJ7bYJ1GCsEJUmHTUpdgU",
  "key22": "8AMF6hTeWveQBNTF7CVttDgVcHHqd5vmRABJXudPdWcX2DbvtoYmESBkSb9NuPBaWc6JC37oSKSVdVmLpdg9HA2",
  "key23": "XUNRb6f9ENpMjD6EKEFNPH1Vnv2s2eM29Qqk6AvDf8wmAxT4RYw7VbtXTsgmMeA86uEYYdT6NEWeEr1MS664WtT",
  "key24": "5zm8MLyDcWsq5cgQ9PPj6M1ZYKwcFf2DXhGt84mnjK2yJKES9LL8rpfjzwfwNbUbmk68oB6YKn3EXsvDpQuMakKF",
  "key25": "3uz1pDQyV8qGCfYqtqt8ywQtNNLkXbRn1Xt6DH1yQGt2UNJu5DorThcttQ1oC1bgSfgdBZGV8zowpeuGvYHyqEcX",
  "key26": "5rsUwZsAGhBt86xspFsHP5omqdeujLESWYKNPxPXeW2PjrHzMVgHCAfn17ZpmjXW61b3r1f8ivv8fYgnoWreaTnc",
  "key27": "63yHQxPRoCbeKS1BBCjDFnafaqe8htX3wzHVno2h3wctyybLwSzY8QEgJ7364i9L57xBCvuDQTTefvTGy6ZXPxsJ",
  "key28": "2ZXfiq1kSU5bjMVCHeaVEBobopCLR6TtKwwAqPpyRAXHcC55Mdzw7rcy4J8tT3ToXbzDJAdVpoUZdNHEJQJgEzSx",
  "key29": "2KKZ6htHJ1iXqV77Z1yEn4uCsGvZEZKsSP4dCJGKzCzEacsxmebdsjCQ4ELxtNTArcwHeMaPm1cGiehEaX2wgVvh",
  "key30": "53iJQHWsr9KfoGKsC64PAvJzFwY7YUU6nkZkcVx4UGn7VSMckRckBWPjrXaL2UDVKq6dcJmhFsc82N2Rxtpx3aAd",
  "key31": "3CjwkERgkdC2hJoVCNSdPo2HhLy9mJCFJViKmhFuf6dWs5eaDA8QD6zJvmjwHFJtuMjEW8yhpjAHyadNGM2WKEEM",
  "key32": "5Mp1JN4EjGDUZWox75q9NhQSp1akLRn6shNLWu1cVuJYrtbgm4aP2anhoEgay3F3LiRKEnLWdGULk5oUvwJ7wgw7",
  "key33": "5qruh2so3J2wuWzTaavDF13Sfm6hGsoUk1tV3PmBVS1t8xzm1ijwtgN9rib58aYmQTqxi1AbvdM79wchEQYyYEp7",
  "key34": "rBzaWypEQ35sxLBLWPFBUh5hinnNCQCicigjgWiQEbTmVofVC7AD6sJTasHXn329E19K2qAEcJfxXURW8MosvFX",
  "key35": "3BBYHSnK4WBiZB9gZDRAmcYSbbq7kh2TbjrhVaefF7H8Yg7v49b8UqEZ47AwHN6eRBxutW9rZS9a4v5QZazq8Cqa",
  "key36": "4tj4St827iKcFDqWhrnwAKzceyGWT2g4sBCtikoW73hyB6LpKs48sH8oawqQWBS25bDwkqExb6TYpvyVBphaYiy6",
  "key37": "4nHtgfWa3iHzYY1R9NGx83tcpAWVBHmfwwidtFuJGXvKXFKJrikEkYUC2AkgzXy9qQ63S8PeEV13fiCLnhfEF9aN",
  "key38": "p2UMAEbrmdjQBkHzBtks7vdAhQqtCNpyhog4L1eJfB6mucBVheoinCu8A5UFpJj7h7D1ooMcqh4T2TCBNuo7FKW",
  "key39": "umK7RNL4w5TL2TPCYZfvsDbnGdioxd3xJZfbJBbUeydJZCyhxgKtJMjZhbGhmWFK9dJJLKueYgdbdyKTL9hy4G2",
  "key40": "4BT9yA1fUujSY1oAndfGasXcxR2XdrkyCrQhBjAJu7NFmC694KtNVcXKmTy68dpgnFzGm96F6m9GfVnMtRmC4Ceg"
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
