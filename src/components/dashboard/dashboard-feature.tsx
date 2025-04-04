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
    "2jAgsjFvsjmqwMkZ8caY5CGqaTbESnqJRayMCHJqPS7H3ANMa9PhHPjDRUnqmScxR6AuB9zd6JZDRhsA27ootZKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sp6NXqviB64nvYNMc7fJBHZ268H4ydpEB9Q1cEcQut8Kby5LkUin6gaviQt5uGKfzM5asoow59ATqy8iRooHNGS",
  "key1": "T3QBpWH9hKhaKbbtbhoio4y2RKNMLRixX4uAhjphiPTE2acMQUESm3Cr4AneFMg313JRbRvTp5uZa1w7x1Vv7i8",
  "key2": "iBatgRoa7Cjd85kYg2biQpPySHQjXPeAdCWkLnxZeJVJ3RPBM1rsCULZWcobfZguJbEZPgpz3yzS5xCWrkHofkT",
  "key3": "5Q8P3eQcPgjNJmYE3UoMSVxgJPGQQ6YhR9Du8pkB15kWmPhzGTALyZhaYmRJaTvpyBCwFiAKFSnpQicrFB85fKna",
  "key4": "65i4iVqL1XW4sjGi6h7YKfRk1iwtJvdUTEsKV97TqnupEfPSZrjBUtjgVmfp1EtENJp7ZqCvSFkcMzFhE6ehhfbb",
  "key5": "65xd44B8ykXeyKhuuQeAVpBsABcQDYskkdBLjeqag2iyKKar3KjRwyN5RM8rNU1C9J7xeDjjcb4BNKRfyoHiMb2T",
  "key6": "F7kYHgmHBrMj3SHeSMT2DTZao3H3ag7297NNWEwAS9jpNffUjhDr7Zo28xY9dwUjSprEjrJmpKRTwe9X6UKvxsR",
  "key7": "VJDMazNNYhsUgcG649BKjfcdTahctRFJhfTiKLKMKT9nc21wjQVyGQTG9FS4mkA5oNd6o7rjQ1ezndEepQyjrRR",
  "key8": "KCvFYJBDajHLLavRTJEzuFHGwk7a9yCLVWcXPucsnkVDF8eYkyjgyun51P1EbzMkd5Wx2DXToCZxWYtKYHhqyNc",
  "key9": "23Ynaw4xKNYgY6aKPes6eEXJdmQ3znMSDVHuQs3xAaffqdSUpssHVrpzgABLSzCDScbDsdyfFqExv3zTyq3RxaJ9",
  "key10": "3T4kUUVh3y1ooVsRa4iGw92R1WYX5SstQu1wiKx83EV837g4ZhUERjU8gskS6A2z5pkwekyHjKmQPXAH9uJic96m",
  "key11": "n3x8SNFPV9WoMFc8TQjQ7bT1CxWPUvmKKt9sWhqNThZ1PWBu6Bpg4NXMyuiDwPa2HQWSL5wEXzncZZ89udYbwrE",
  "key12": "5AYRi9jM2SUm8X5kFpVnbVXo6bbM8C5659v4zhXDW1YA5wWMtwiNGVtEdS7S2nR333NXPcwr9NMZS5D1v4eCuFap",
  "key13": "5Cnk4dmFLaDQWSHohpApohyCyTEqK3n5UyUFNud4EgppSqM3zyfM4d6HAv5PBhBndvJufjMkTQtLx1Hsgdv1USU5",
  "key14": "jmzRjYrZBFKQGPQ9DPpRgcBV4fCHiuY8W1PRoxQ4tzHkzx1tYaJfJnKJD2nP7p5yGpXMj1fhkpBw1DbBqa3pdAw",
  "key15": "Yfv1a4Aih3U1Gw4XBjku9famEQz6KTcHhwheuhnViKAHYYyJCDHnWcaKiSRksS3V3pYgZrLmBqRi7scFqf3RC65",
  "key16": "543dYg1SBVrHCKYcN2VX4F71QaCTVW1WJt8EUJGvE4xZGNFeM5ZWbpMy3yq1UGSXhfHzkaL3keR2k2CMMVcvQSiP",
  "key17": "EFzT9DH6RwZuPstupJhkwGaZ85r2aUnG94owvnrPKcEyPxFVY1Pugx52DyvuxSFq1tNKfw8TwquDmLf9dC8kQu7",
  "key18": "3v79nqU94KLKUtayWgdrcuiFjQ2mMsbsTZp2YD1iLd4HRWhWDQjgy7ei91K74A88rFf9nHnr5sFzmJT7Y5HJRMgi",
  "key19": "5YVpcKRLvyfyPXK3Ytmaj4ysmKNZ3PThExKBxuNCe2EU7yWh6D4X5UhAo4XPnMvDH34bRKcNWo2LScAa2wD3FcMy",
  "key20": "PGdrjuueWsXCUtXLTc4e8SZq4zYf5kRqp872eYuoyKVYJaC7gg5gohMM2i5J8Q4mUd43wAxztDCgD66Bpmb6yrZ",
  "key21": "5vTtaaveTh3LLA99E4EdjS2bkUWDDgwKPQws6q4MVQhyUZ5Gi6S3whRwDiJzDRiGDzCnyjuhHmKfJJVZFweP7f54",
  "key22": "p7dPxBKapdFVaNASwkYsLJriMkxrpmbHwVxSUCi1Z3ekJcE73AyW8tFkwUJYKExJEncZ6Qubizk3rKozBiwdCdH",
  "key23": "3i9fvS2gyvH8yHxAXVPkydRuZbU5gxLtrRd3BT39psNSkTVZTacxbsyXEymUpDmcMFc2rAcvfiH5T7PT5PMvVzng",
  "key24": "5NgJtGGADpV2maz1p1qcxKXmyYv5zzpj9r2bFRcpn8oafDTw1ykDVLRniruCyBg9Q6FEx4Bj16AvLPgHk7owEqyT",
  "key25": "5hXY8G4DThV812M6NMAydcbJGdsXbpJxvrTp1SaA26NoBxWW4EcDMscZPSS5JeoP44Hhg22yKQZTZp5JyPPD9sGa",
  "key26": "29b3ZTcD2ELDDwMxTVf2dvHM5PcXJUFiUZ951E6JQLcDpYfQMaDgdjDSwVtmcseKkLH8VoBbi5SdjAHR3JS9QP6E",
  "key27": "3c3fRKGpmd9Jq8VB9MXRsUFkeyJ3tXLJdGHrj7h14QDeVST8U3kE6PYw9REvZwYoL2xVYdvfrMZkZ7rMpatJAzvW",
  "key28": "Ur65ZtQ2iiKxwoghdTcZ3FkQrj1DU3Tdz57nUuLeEZur81xgNKEhC59gBXwsycfRYi94QNaKfkZ8Jfmo4J8moNs",
  "key29": "3w8xLGLiKZQaBWv6v1VBUCCoTm77LtXmwFA9UftxAji1ikPyZ5jTMxkvVhRoFnNQAtDB3bXtSv5Vvt19vz6uM6Yw",
  "key30": "5YPp4B4gHA42izFTE7bsHZqpbDWzLFjGu4xLUshquFXP4hLvS4NxiXvWLUVJjtEzoPhekHBDe56EtxMyrQjTJX8B",
  "key31": "3KTvkJCy8Drz5W31DsULEsdLs9Cgrcx86tG6AxKKA1mygRpzvBKK3gW8Zpo3GtmV2wCwEKdQ2VCuUvpuaSAayc1V",
  "key32": "ahgtL542CaxJKRj2jfDrifM2YK8Hn9ZHwA2yEfTGsu3K4MfyJKmbhpRYVCmbiKADEZgjQvyMVjBgTFBttUo9YK6",
  "key33": "4coEx2UQKt5nRMZrVf2awWW4XwwiYctegH6JdRXCZ6BT1zydPB6yMuqNpYxQRaEqywfszazooCPRSKU1bKDdfu81",
  "key34": "5gBJybHXRHEK33BcXknj6TSybLLeGogCjiELBhriU2E1HrG3nhWwLdVgfwS7wsk74jSfeByPP73F5pCsTjavgRa8",
  "key35": "44x5wQSiFXKkvDxALB8R6Mxt1LrJGDk3b78Th8ExUxmpU57k4ZsdxtSzRs5F1B2LmSppYr6yCsynk6kjJANkdfrq",
  "key36": "4LcUkQRqNae1wHm8V6FSP5Y3acUJVSPftvLZoPNTsAxVp6KExxrYdy81jtzVjmvjJ6jK4UTBGKY8cq3fYH9r785x",
  "key37": "395N9zUNfmr4aBj7eZmfuFHjuFiFV6bG9MWLRHjYtr5rq6n71pKHmKzDByrZteSt5Bf8VrsJ9FURAjtfrHgewtJ8",
  "key38": "3e9NXUCGqXPiCfGpSa9qz5N7Q8HUcAdC82KxyfvLegy8pGm8uNmLrsGSgKDrtwkTdgp8xv52EB1ZVtP8qL16dB8P",
  "key39": "26e5J1LFpvReu4Emp14iLgoWMmxgTfWREAGxht5B7xWvqk5EeRr6QVnrgAdrz4qtt6VbwfUXH9jyNnsGzDmBDVnC",
  "key40": "3e9NoNSLxPYfD288Sr48PxtLzjWnn1XLqh8sVq67XKq4GTsNvMv25aGXVrbYKBbhZPe5xvf3cDqCnvZxzr4tvmxy",
  "key41": "3Gn5NbwrWoCpYcRqMvhEn2tCZcqEdqgE5Z7eEV7AnmMsNxynrswe4dzSos3LotQx3rAevJ6bYe29UP5sdNFKYWTi",
  "key42": "3Hm9UEfnYCYBWrtXCB824JDtckoZSD298QdT77PZxZjz7ZNTCcdQcCsaYVZG2v7JY4bKJyzah5XSbCUuELuiNXa9",
  "key43": "5Gy8RLmBq5Ad1rfkzTJ1YttcZ5pAuXjYeAYK6NxZ5zvZ1U38C8GNBQedrUj81eVKq83xMXataWsVcxRhfKgGc5ym"
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
