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
    "2dQxZFMQov4pLC6Dyy5rtjhH7ytcZA5dXi3Nfbeg8uJ2QrGaSM46ANmr7pFEsDDoofn3YrkHVHJy392mRTLjq4S5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nMUcnkkcpkxVtpe2XEAuV3u5Xh3Y6MSm8vNjAybmju3ks4shPXcUmuB4LpUhVFfRSwh7FvyXJTLij4QwX1pAnxz",
  "key1": "5oZoiL4ojNgKqagi9bDRmC35z6PRiqPpQ4criDLcHFBts1LUn25LJiBGr5YUppY8B5EdG9jjFU9oUwe8onuo44vu",
  "key2": "2fTUyZuztjYrhNcsEN48ecWr73cv7x1nUPA3XpXxpBhPGZZ2heHhxTYt8sgUswSCCNWJChu728pbZxELp71yUgmw",
  "key3": "4ig4H7pTWdbMVncsiW4ZGp6f5ptZasFuakVtsbWxAGTYeAWDaQKx4XvqCFbFAL7wcYBG6kJstb36jdVF66ptqvbA",
  "key4": "4eMTWoUpZeQHAj5xqp7x3mX2UgzAJW2mh4ap4gnaYZz6FEPLRcKGnNi6DPHntahVF4n4ZsZJTWeWNEszedWLvH7x",
  "key5": "3nM5drzPAmSWgD46GufJ3mqMoNHeFzvyr75hvQq4wjcgu4qhjt9GimKVNKkBzNnh2SX7bAiNHXxUnFwZxKyGWAsQ",
  "key6": "3FzxiTQJ6Ba4Kn4V9F93sSVYVYKmmWYKDnU1ULQZs2JVK7pDsKikx3foTkTHzkf6PfMdqG6ajh8zE8Kt4hctUXAE",
  "key7": "3gg9pZVeNA2PTM81uAtb4iTYNaZWDHAzi9iUKQbHdoE6ygdE3Q4jw53mdQz6uoEELuiiQbTYdX2uy8fZVjZnBqhw",
  "key8": "2VXfFg56ryRnG9FDVUQVdJzbPJDEtNrp795XwhCxHipHF8S8yZH7HK2GXsjrsNDtBH6WCxC3kRmSYjEBmWwqmrr1",
  "key9": "wS1khmsAu5qwjSi8c4aBAFurDtXGMs6T8VRc8CbiS7Ms6QTihxGyz8zXG98DLnGsQQCGHxjgiw9Anozx5Wks2kc",
  "key10": "5oJ6YwWW7KRZRAjyNVpNbzb5oNoHABaxe7hshyfw7hcp8PSUFg6ZEshgzY7XJwBMNwdiq2hmGmNSRVwejrEGtupW",
  "key11": "4nX5JXu2wAtjrCE6rZGk87JWrJvYBvUWrgGSA1ye4p4zmnN8Q95y9LWxx8owGTGcLjhfNfvJ6fL8vG5FSzkMJ5sF",
  "key12": "9y8LMcbHBfEnaEo6ACDkiCXV522BjTccNmNYmQnpGje7CEQMVTSyyYph9hR7xDBgFtoQN3rk7B1QL8Qa3C51bcD",
  "key13": "22EsLXKvvaaVgqnC9RBipX2jFydoDpJzafhf2x4Qkisf6TxFCx8qYoFkrKuADXZjcjDza22VamEuYR1ajQUo8GBQ",
  "key14": "3nCiqtigXg18C86ZxjiCjjKsk7ryApgRetKUrgiQRRgiaygxhXSrjYW5cS41Yatjx1ViiEavZx3rjqSSJTx437Dg",
  "key15": "543Yz2MbctowKfNNkGF9VuR4UGWFRzfxGyHjUnEcC3Yz4gcecaydsPAxrXuzAwPQb7oV2HfXFHdZWL8P65cLu5qW",
  "key16": "5a5g55pXFf9Xavk3MGNwVHQHZ4DeNQEQ8U7A5mV2zB75DyRwXJEVBBtJFtVRt3wzoXkfoX1fSZUgWEnTW64ng6To",
  "key17": "3K2bMNHPnRgaGn61fnf7F21fVfwubPoie496tn5TpS1MYo2zKMpGoF5XFJcQvnVaFEUwAWGNRKTzV2PFNDEc1Lpo",
  "key18": "ngXNXoCKzNyMvE7kCfeumFt3yFkeNWe51gUA5NdwoBFE4uPNApRaAYWHCBsEEcAHzbdP6XNkivTCKu5H6zipv1w",
  "key19": "23z5TQpwM27mL7GTccSGfcfHEGpT6fQL5jWyUBF2A4TYaL8mDQedmF7z2iTbKSdiGB12PqRntBfTyyoFRU75PXoX",
  "key20": "4Xua2EpJcCZfBwFPE5tmCtkRv4832p3GtZzrLEGEZA4xapYhN2uGKL68dsKJ4dqbketMY5Ys7oCev2DtLzUBT5ez",
  "key21": "DjyGpaXu4LMorHqDnoA4mmnfvytnjCnNKRpfe7BzegLR35M7mynXYXNzbRiBNpDEy4NX44R2R855Bzwc2ZK86sC",
  "key22": "4pttG5XTapzJFt61nvLpg5C3gkTJJdcHRKTCUSsaGJiyvJxv2BeJ3znH9LbinnNCZwkWgWfrcvXuExNQZgzeTqbe",
  "key23": "4vpYWo5ZxikzwuQVB9wcSumnsdbfy3Xi7C5THms7z66pNW6vcMaJY4GDgoonLfTEGxzFjvZXRmyaqe17dXRAez38",
  "key24": "5nEcApfxPj2H5kxzs28ad1HabHaiG3JPPmsz8YGvpF9ZiC7rnTBVm3aJHUuTkKdXGmp5fEeMtoXJPzTydzUkq7Gh",
  "key25": "5vcU56K4Z2WN7KYcuyhicuCaiZjmv2GYRSMtgCvfTZzRtagum5c65cLvoJwndnDDUiCenB6ALLppZqYL3mey9ngU",
  "key26": "4evw2y9GMiExQRAnuHrvPmaS145gqHNoRytn69nDh51G6sEZXZbsznhExdJqYPTAfWuufAMaMYNKcipUnG4PGKxj",
  "key27": "3Ac3UngHeBCkYv63CYRdXE7xZMqHPNz6ji7nVAx1ttmGvXsCS4rMQK6KnnhCZhV3MzXfQQG92RE1t6uoGWnY27x6",
  "key28": "441JXx3ZFhUnfTRuGj4K8BGej2Th1EMecgVzWKvC3uEQ6AZ3zzFnLTen6fr46QjR88fgNKB13fqpGd1SPoJ5btb5",
  "key29": "4XYzYDaCrDg19wyMDxPZwUd1jvCdjBAFBCNNABqzXQGS6yetkasu8BAAZaBRqGuLft2UBY6r1BA7vkEfXhS9FVDT",
  "key30": "pZAeAvraasDG3kWyDkwbq9EEeaaQ6tVRpMGBTbo4K8Gr71Ys4YTm26MfKnz2WaQ3CPSydfshyiG52r8hfKtU5yj",
  "key31": "2gpv8h2Cz2ZMH3BnDrWSTYmLEYREZ3NEvZSLHCMxsgWBRKxtWRJXEpYq3kTbgXvLER3na3oW2SigBag4WwXTuTQC",
  "key32": "26ePvvJqQVZcVvjrVXsBLp2H3Aer9EJ1WSTkgfQsUpcaC6MqJeAY3dphXEMEdigKGnyFTvp1LyEShJLPqGJSYTGC",
  "key33": "2o9mK8RTW2jujmNd29kbs1g41FT5LX9LX4i1MF1Zu5BpHYLmABRyjTF5SyAxHMgwnd5wdeztAb74ZddGFag85huz",
  "key34": "5CqGtUdUvUf8oACZoQrdqujB8HdoT7hxQVP6SCK6KPqtqorgYwU8fmTAzt5Ld2FJJdCvj17zApXhnt6hs2ocwYPR",
  "key35": "5bp2RCUZvCNwmwPwmHYYzpzajMDuoo3hQbAJWD72Zykm4Ks74e3vXzTjqLMtTytYb3tR82PiaXKwaXuRoqNbhWMf",
  "key36": "4UoJQhi4hWzAphMgZ9AdyQHTXfSAdTnj2XbzwDP2t4sKMD1QJRxjXeCJYpLhjQbG87fKSLtXex9AfHq5ugzepcD1",
  "key37": "2yhm5TQFewanochhodQPkyX28YY64559ErNLM4yk8k9pJDhtgyXn8Pb21SMvF3M3RdgqFJLbyekUz2GeHJqDQfxw",
  "key38": "5mP8YHE4DjE9H77tHfK7QsszcP9r9P7jeHVi9MPd7Cb8g7cFJpFuZt1J8qWmqzfDhd885j4LPeuQXGiRiNttyyVb",
  "key39": "2KyZdX9cVgcCWhZpakAicuXR1ZWEy4gETDKJje5E5TbL7HfAu7DMXcgPtknvcaSqFz4gRX9Xg1YQ3dL6N7NTecQS",
  "key40": "4nS9i9WA1q43kvkgNVqfJ6PtoZD28zRQGh9UfCNNxVuCQVZGN7cU8fkF7RudhEhM6YYJEs8GEjS3QTV4pGo7R7xH",
  "key41": "386vRv5q1ESdQr4yjvwso48maQB1Ag7evmWPsBK8iPudxMESYEdnwzpjHnZHhL6FJ7gntn6XJbvnm2QbUHRfZ6MS",
  "key42": "5bvZH15KXxTmRqLUA3P5tzmZNRXVMtVewbcw8UKaxXzbwi4jAJtotyQRY47PPNVgXhCZpLKyakYBWo7MSuazzrLv",
  "key43": "3gWaTmN3oiqnNbeoxVidUVitxvhhFQuDvAUFJJW4zqoVyTpPYF2zdXZmmw3ZiXpWsAsr7xfgo5CXxvs3QEteTFaB",
  "key44": "f4TAMuGc2pXZZcvG7YwGkNwcdYKBTPViWKruENmm6jJgfPP9kEc2t9XNA4CeQuP1Z5dMM97Q1TX9kGzyCNLM9D7",
  "key45": "4BX8yvEqbgMQusYJU4mBEVyAKeeR1UaEtb45qswUnnGo5ohLEuxSi3FrSZguqb22Q9RePvnFsS1g8X9KqLBDgvCL"
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
