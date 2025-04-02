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
    "2XqmaF8KqNEpt9SVi2f6MBwgztT8vKcENyNjKvcMPPcY9AKMX7VPKcoxuFNrtTTSt6Y1TW1NaqnuTpHxDtV7gScR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59kW9y6rYiCNT4wHojeHLZDrS7akaTq4Kvgen571ExKtAAm6NDZ9kKX4g5tUcDau9hxc3GC98s3Q6bsGWnYjWMa8",
  "key1": "5aX6b5s1sEGH73nem948uv3fDpBY3AEN3AHKKuL327vSvjvwFNPv3xVTvUoCXQSWSpk5BZwfEo54QFc32fpcJwmM",
  "key2": "3ewgyVQKhtHGgevUKD9jdoZs6Khb9MB2y5WAayQfetpUB2dJTbtxQu5DuK1jXYQnBaioo6Hr1oYoJBXGgPuB2WtS",
  "key3": "4Pac5chSKy2L9jXvrmqdnjHwgMux1itsWcoJCgHDJhiZLWToTnFaVzKZ1sVUAx7SXGi4JGGyLZRKPTo7AAHFHgHj",
  "key4": "3hQ7fH1rhTxXRi2QKC6nQqGJDEgzNwbWchdcr4B9ntDjkBYDS4rgLWJsei4QNLBFswJ2UiV8hCe9tJg3Bb9ZhEXq",
  "key5": "5kBM7nomisrXW9gZ7fZ35djLsbx5UyLFhnNJJXjF9ZNATmfwHergdaf49dk5EEW1eEzEmSEUKV4FNCUQwFeqzSzM",
  "key6": "3V1Fpij9Lt2JtPiMLJ7pu4pXojyZMzoY7fRoypqXWjSBUf8f2oSJnZhAhf2jcUxhMWhargdjDH1bE5SkdKTdLDZi",
  "key7": "Ff78pVhdrqxHunonJowXF29YyjP6eGS1v72GeSMkhNKi9wDfXagHz5UECN5UghoHaVWD2zQwWLWRrrzHryqG4uV",
  "key8": "3864nLZa3ykLcrquRKXWcLsUtzdC4V6VWhMUCnDfeWTe7NU84hCcPiQHxiJqeyQBfpfZMsBjDHuvUNUhPrf4RNBP",
  "key9": "4zM9iY1gaEFjAtKpWHFBP6TiiLj9WgRrSfkN5oWLpg1wQZwzXSdvAD1UZjxmFK2jSWmYHN1tbhjxmobdGWmEzTvw",
  "key10": "sQWkTHmnYtRUg6GF6hGm3XLdUwjHDZAbBLJE9rxryMjkBJs3ARgCkAX7ge8tbSpyvENuzNTkqTANamrcxkXcXu9",
  "key11": "2dnKUBnyC3CHmQ2d3Vn4bjVyWRY6YAXWdCER1cdu4mgTPFGnoszkVhvos4mMetyXTTydf4Tp9kYjcEk4hLy6bRNR",
  "key12": "JbQUoGmQdLTmLuTphf4LkN135rSRvTTTFzyJnSXAWEX499nz5jnPkHxibxniEjyoCUz1waZWZ1iPNiMcyuihRCp",
  "key13": "2GhBFcHBLoo9dAWQxSkF9yrXLb7551Kr6cjMStby7kRRibAWNE5ZFnDgGH3icDEQae2kTdughdL6QhhxqpyCkCic",
  "key14": "gNDVTdrSDhKhiFyXjZEfmpu4d4GdmYqy2sJsE2gtJxvWRULmSGthJNpsrkLpFHPVos6ybYMy9nxooFAdvsR3YfV",
  "key15": "2kQNesjW5mfQWE3wroUmuYmiBXhCrbxL1PNnRsPknPgHQ2Kik7rY7w5HXZq5yJajvHGrbC94X2r27oe2qWZv8E7b",
  "key16": "366SJsWGftckcBQoEoymzqFzCzHgTxUxw8zZ9JAQC6zG2xj88CBBWYsZsBkXq3EthX9X5pzzqaZhsiyZMsppYdUE",
  "key17": "P1BNKxBVgL2tShtosFVyPYXoBAHsnP92kJ11PZdWzsUWp4xdbXgYjGVj9L7cvMoxdEx9KqkrpSkGyeVuwC21qLg",
  "key18": "4zZ1xZibnJCDgzaxhZDzNDniCJbwzvAsjRLn8RPhPsBEYmPYXRPTfGyPLKJgtLtUAYLSCxxM4yB8gXczeqFVWp7S",
  "key19": "3xwd6uZH76h8pkLDZT65i3R3mAtAB4ysF5bfmGDa9JGCZk96ZnKMy6oNY8BjmCVC8J4dgyATy4FiX3Myf4fJoUyb",
  "key20": "5WJxdK25SwcTh5wU8YvVpSnfxMQoNUAXWhCzzTZ5X5eryqMvLpCynhZiF2K2iWborFKimkUGsyB3jLduECeQqAEu",
  "key21": "2uGzaosPmhhHHVgxrN19u2w18QjGy8TAEkYJvnE9aZwToPWP7ZtunHzBZhPTu8hzWFfixhQpYamiHZHusPKUTsNz",
  "key22": "4TiD1s76cyQJMbkf8SMbNWzbzQLDty48ufi5KMGWgCNtmiakCRxyqv571TwBtr9VsxvNX2kWZVaGVBYciMbsMH1M",
  "key23": "3Mj8yHcY8X1aJ6wF8m7RAesVMFVjZrpvDobc7sZ4a3g87HCeTYj8hQLeDPrSxCQKGyfBrNWPGJuGjMZVDVomNR3K",
  "key24": "66QT7zBLL9qLsAcm2e9XXwg6YBaAHN8MibjJvtqf9j97zZT3qvuxXmBnTN7SnXnVdyWx3S3yRAY7bcqBxkjqkGsH",
  "key25": "5DB22vBurxgdLea8nYkRkD6N3tyT33ZtSfXASQnDaBVnVpX2eK9T8sNGuAd6UDdhmzeGbtZSYPGn59xm446XU9iz",
  "key26": "zEg4uWEfBMhU6af5TPhQ26N4ucBiqA1YovgSX6uT4qRyFJi3JuDZNZQ2ifdVFFF2hEeSYJjHDHKmuNTekDara4V",
  "key27": "3R3Quy18BaFHJiii5iKrtiPNAmgeSh2SRHLiCtEqw8hKtJZAm4RCQCmftKitQ79ZJsXkiLK8dzMDsF4SsbDqRVXB",
  "key28": "dduwRatniDxNrcdx9SePxEZRLjphubVWLEDvtoR93GU4C1UugfMDCDRZwo4hmsXgSBBn4HwvC93bAv5MYCu5hub",
  "key29": "5YYi5sSPsbk9F7rBzke56U6P3hHutm9tYK9CetxXSCNa43UbsrBFin4yozbfsv2g382uRUzVnCQtArDL6czW3oMZ",
  "key30": "3vLGHoKRxzwyzHJT1fEbGFYrZ2mN2PcLdLgqXG6KoemV45weAxGpRjFzQvwCeyGc4sXYfjv3zDTt81YLqnAj7cWq",
  "key31": "5U3koMGxkXdwPjb55AeqiwxHyV4UWgudrfvBjKHjyNtDCGSwL4ukCPscfmhUXXTJaX6a9EnjdaEomwuD7oxy6BqV",
  "key32": "55VCXXYerogpawq33Jv6GV3e1Ertwk3rLQ7hbsFUaFTfv6e3kVVMpH35UrQ3pzBuMQ44Z9YtPYdKMyAipL93MtoA",
  "key33": "3oHdwRewMDazhAcs3DKDxpvRDqcqfr228NnzcTvBHXek66YGYpAD1dxjNcxAhYkEeQosJKTb5587yWY6MSPFziAE",
  "key34": "2SSEAEYNrPy9ii5ksHjR4LeiRrgbQnXjveTwhA3qPZCBXHSJq7hARJzvH2r7oTgH95Mb1KKwBXjcizTUg9uCwZc2",
  "key35": "39JgC7EUkK6UjkXdyXMVcBwNHJd46FaWv8smG1U1dTU7UdhZi1kaSVXeX6R1UWfyP1DXaiX8XgK9eAZLFhPn2KdJ",
  "key36": "2MdiuTBAJU5pkYXSPMpANsSv2nJCQ7Cs2NofAQo8sBwDA648um9AZ2cXz5mva4Eik5V3Tup3XpncrFbrbhVArEZk",
  "key37": "4JM2Tp8wWfox2MjYZFVyM4ShCTEh4npUEmS9QovpTHVwvtn3wdMbX3Q7ZjwP4twd64RaYa48Ft6CkoXsThAqxu39",
  "key38": "27MHEfUhjr7g3pJQWjhqwqFHPswj77R2HRx9cuyaX1QqWV23DjvU1n8ZjEwtEYqZYjJUnqTUaKvbcW5xNK3Yv3Ak",
  "key39": "42d59HuAjm4zrpFbTqvYogPZu4yXiXjXe3Ysk1MohDGBdJu8TA27q2FUZeJFdCi8CAPviSR2M67NRP8kGtx3dzia",
  "key40": "CA1Ky9DRkv6SFNsKKd2YJLTnYJcRcAcghhjFNnGnFYq9gXwUvVywC54zKby2uoYyAEpXXJ1vURYGFtAx6Z4VC2x",
  "key41": "xLDDmfJ8EAeejkPjerJoJhJNmEQUUpXMAuLwfrgpyXWVeDQWKZqUzQKMMFBWKq3AzBcnKt2EtvDYNxBC3RvfSRr",
  "key42": "LacNEbqniYsCi8tKjqQCEyPQJ3U9Sr3rZtUZ6UGbNgZEtEo2KHTYYJngw86mouYZ4bg6ZfENBsWbnHTGjxEoGcQ",
  "key43": "4VSNCXVmKq2PJNYiSAVS9PVqp7WrJcFbytmx2Zkzt6GxDfKNLPUBeRYFS5E8kGAiLkQRGgudGDCZafbsxTac1GeS",
  "key44": "ECuJXnZUUkyh4by8FuiG4ugAZuPdDQptSyCsyq5jqqmKyphttUqK5uHqs1L8ppFRws5wj7K5QYEyiPH5nJxWuTm",
  "key45": "453SQhE2tsUHqYPUHiVQfS4fwLpdvdgKgntBYBScQqMTmJvaQWgnKDVToqvhznjMKCExKpmK8KRR1LeQGT4fa1AZ",
  "key46": "3wTzVxLz6J8hjCxP24rxWqSYoyokxF9hEjswWn2RA5GuCbRtnQqbzMQCWrCwPdyJcHos9aCQnAdgPRC3d5uqXFpi",
  "key47": "H4ov6RPLQDGrZhudkgdR32E4FhC6PNndwvZjxsNGsSbRttbmk84TybepvtDH8tvbxcw1YvyiJep2WiDwQxj7z9r",
  "key48": "2gXQfxGXk23XABDznVnRYbupULXo5VBzb2yEEcNznTaFwGX2Kj4P5kispVWzb3FQBWEPAFV4ykURLh5X4c8PyJLr",
  "key49": "5Tem7KNQZAZa9cSyBvg7531DDpQMCqYAwJoDf72QMrfHq2zwNBvCVoLRAWsYTkNUXNNB9gkFNxhA2x4QpQcwkLVU"
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
