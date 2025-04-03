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
    "5WovGWCz9Pk1LKE9N8UUpYyATTcKPoRnUDLJgBP3vwKDQKCvywqs5PAdPxhhNH1zQY7aogeE1y3JBLDVJFGy5xk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbBDrotiVjHtyzBNc7LbEVhnxmTmDuzQdyYYaqU2a71uk1ErxXJW2kgYZ2PMCMunU6pLwX2DxJ4gWpuvFejWg9w",
  "key1": "5BDCc4b4JrcJ5k2Ev112vsvWLx1qrXmotzd2zL3B6bThTXzkTrFzj6CLJ1KvByfzb7rUG9hpM83qsfUvgigYkRp1",
  "key2": "5LS1QSRtyAHqxs8PgiaCXgVQkz3fRJT4FofALaMPK99rgRZRzf2FYvrxa4Ad6edrVUZnEaP5hWF1LELaQEwCxjWS",
  "key3": "36i9HoCZqscY4ii4esc58RnUMcRzgJTBMRvdjC3LusNKUxtNtaNzzMgSs4L4DsoFGtNa3UFPdWUGoUw4ASGNGbQB",
  "key4": "2gh1m99Kzjqhfzfmwvh5SHTgdv7WMcxPHmKC1eRytDTu22Hn38DgarG29oUiPxjfogSQMf2NRxs3RyuxSntfJeaw",
  "key5": "4droP6SUBcC42XGmxnhigZccYAe612ATSRMqqQ93uzAtwhgPCsT7Scy91NhzWXs3oPAzvbaKVoYjUFFcbf4XFc5s",
  "key6": "21HH78bwZzoTuWjDDmCvyEyLiGthFAPNmcyhjMCweQxXV7EWMGt4CWLoCYJ3PXhF24kqJKfiJunLBiNcTpUEksp3",
  "key7": "31962zstcuBuZ1XbMybeJPbtWBDyb8QuN9QeBuVBWkJi8B8iRtbqLGsN7HAgKGPSYoi2TXoKppqZ89mcmRGVfzmh",
  "key8": "22k8jGnMsYjgD1VyEpXYghBqmjTtLnVMwjxnhLEaUSRHYuXUssuL9s7gRwedke1YAAGnq92qnQWVv2dVPPoKzvBh",
  "key9": "57WnnL9Rh72zCyZZYp2pLF5z3dgJqcQjMR5exJAfaTHM94evmJysFLyPfx66FvBMymcRXSuLLSDxB4gpjTdUiqTn",
  "key10": "x9Ym8XJNTAJ68EJje8WDcyNwJFaJgVcbdpVa3BmKQHy5HL12m9sqr8FNgG8hqZp3FRSuQBBXaVoyDPopMqr5heX",
  "key11": "4NxC93TUVQxsBbGThDhXwfbMNGo4PA6Bzfu3yZJ1t1EpDPFLcneZt3SUDPXqegZM9v2dVNN2gU3Qev1okpuYe7Uv",
  "key12": "34qsm86qhERkQL6uS1dqZwoLzKryLtnSkJ7UhaXGy1wYk1RFhvCBAsUgtqSLRx7SJfA6ngMqggCHKh79dYi8shu3",
  "key13": "5dUhAWDyuruSMoYQGmf4P1WCzxkqY5x9Vpo9K2KepgzqeyNYFueUVYawM9KZVVfRF2xpVh2DboqxW7Uv5fuQxkhX",
  "key14": "uLXkf8MXoKLydgoPKp2KWidYar1TvXx2mbkrEYWqMtDAWkUvRN2CxA3MUEsNAJR9BUPq6QqXZwmYBxnDbCwt6pQ",
  "key15": "4q3rq7dDBNBKVQm3ueSvwNtSRKUTwTCXmC5Au1aEXT1ZjUoTgaXVoFEQfjeK53WbmfXg9xc5mv3aF2fGbL1ru4kU",
  "key16": "4Jvdxz9JKRZ5UvCx7XE2aJWwZcMSP5uKwucSc8p26rbhViwzdXBt9mTVXBBatBCanYrPqtoqbXPng7sAs13LDKXD",
  "key17": "2xBL8vcSyfdA5Ucf99a3yXcxYnfqc4wtjA51mKk1BUC6e5mMQFyr7YQQ2PgY4nEWFfwUfHJs118h3uvNicc3ivtj",
  "key18": "65fRGJPahU95gefJFCb7KyzyLNgSsCV334BFtCkfpWJ8c1VY9e3g5eGZYVZuHrkWwHxmXBKGh4NLdEdTECRYuCNN",
  "key19": "36CLiU6wPEvg89kVZcRrKeZr9uNQbbfjuujKfkivwAeQ6RYkzgcxkUSQAD1J9R2r35wJhVi53ZghGdFSFQvA2A23",
  "key20": "28zVCfawcSzzH2gEc4qnf6iJR7HyjvLbWWD2kGHotJEVtpfwY3fL6kRXviGseZhaWw1fmMkrQ2uQAhQeAm5YkV34",
  "key21": "GiyxBfRYwkcQ46TYLqJ8mzsBeZgWsTF6tGyit2FPRvAHuGNNRTQLaUyrfW2Hye1kWo39L8ppWASLnFUqzLAjuTY",
  "key22": "2dzoad9zFuLhJEfKkjVYshBFdE7fKWRm3Uiw6qjEjD5ExwzjQRj7VhjY7m2kpHo1smZNo6HU1XXNRpLbJouJTzK8",
  "key23": "5swWhM6Z6muBfJdhhK4vHn2pDiDjcPgKv1JLBvAe8J3aGku3EM8Z4L6B3BeXxPbFXSyibXoHfsKNqBHaXp68q3Dk",
  "key24": "4mKMg59DVkjGpv5HZgYxWxhNam3rm1NCPFRPyKiRmHpqw3vgzn3TWmoWCq2yHw9uSs1izAFvP6c7qtDy1VWVm1nQ",
  "key25": "4ZzmJ5gDZeCY1prARWsKj3RkJBe1xH6KQYiqSnFT4sgczXTPHNSGi8fJEvk95g3BYhxH86oi6YaTmA4awFPTdFUH",
  "key26": "em2f68JktgG8PJaPJ7dBuBW2sC1F97MxdpXHp5QRaiFAEZkC5eVuSdhR78FpRDmtWTPmR44ZfhN5peon3MiASmZ",
  "key27": "3TkbUbYbzVX64FgbmZXZWbUv73d5XodvtkrmCaZXMTNbiRLkNov6xq4c8mQVp4AFnt3VMS7L5NfRQHDcat65iuZH",
  "key28": "4T69EfnMoT5HqfJxGyvXqzETWHEzahVFVDzvnkF4NuJnLVLvBTxPSAzmvyT3ijKm28qs5tyE2DHE4JCHSwsebA4A",
  "key29": "3BLsE4h2ssMbwzPifXKyyDK3pTBLJMjKkaTSPwMNmvDs1iMEMovuHEePBuA2ECU1Hybn3m1GuWHS2vVeSyTJPwFV",
  "key30": "2RTa7sygLoKKFEGVLrCxg9hQ4SjxLYk48dVwWRtrg4avVLJoiPweTkNnR7z1UV1pjns5T15T5hmJctzxpa9seBV6",
  "key31": "2GqF5bR5D93bjPDCujM1gkSRp92oLyT8FaaKcjTGhhvHyRPbMfm5xG7UFt4xeofdZcxYQFyN6naU9N2nGZCqzRng",
  "key32": "5FGe5MmbhNwF5bs9XgB36fL7yV4YmPEPjUHWx8aoHqs5DExZYGuEMPhFQCS7mBtbsCLsAUX8HpyveAX6TKPgShpn",
  "key33": "5FVaijBYsiCducKzvcwdaikPxdZWrYN3dLrUXrggUZNv5bUrFVG9PGVo3mCGSGAG2esmd4iZCGhg3NTg18SC2kdE",
  "key34": "G1AYFbD3bj89Z4jFZpDg71WcEg1vQzn3CVTUBmNDQg1tzdrbxq5xdcGEYQaWnLbRjWa49QPgSQpWNYJv7opzu6s",
  "key35": "9BuUgFH55z1EXVQXFAxKigVEoH7rk1TGfV8bc65HTqN3V6LEBXeGRGXfJKZhFsuduKDa1m2cgydffpGfCpLhXkN",
  "key36": "3W7JdBEynek4GxRyFJ7as8FfPNJc266SeFvUNAy95LVcrJi26v4ASUCWVDbvjoYJA96Pek1XsvqHieEk4LSXfXbu",
  "key37": "4EdwH1o7zJN2JpzKqJpR4bw57egydDAH3zP5VuSku5Q79TwK3oCBJDXDW1Lo7JfrT4UmwY8vzF8rUMkwKCqJ9MCf",
  "key38": "57KfRPm7JqFy7yHTJhUco4oBMgLu2RVx4t6wTArkEyjij4b5Lzwyem8gKfBJyiBehJhoMiuwBVUfWcLEGJL1vVa5",
  "key39": "2YkVmCARqAzcdEW1HTYTF61VLJjbdwM5GDNZUTrQFJY4E7FzTkcsQBgFHC3kiksEHRBBZrcGV1f8Cg4Hpt4KsJZY",
  "key40": "4muYoymNRo6EhS4wAorK1gs8Us2AYZYQJsBykeMiqRoFzjQ82pHsoeRFn6SMnDh3f6eUCQ5ig9VNEnXRJjiGjjDq",
  "key41": "33qB9Kj3nA4XvzaCJe5NXxmZBgxRPgDJKr5GGZEJhHxX3T28aHMu6K7ixLRw9yCSSBEctCaARp2cRext4kVR6YMt",
  "key42": "UEtkbHbd9dkBLAdQECTfF7jzfNZaUYrBe6PR5RKXSRZ3urf6gfbsxEKobLBHyomXE6KV3v8ygX8vNPRyQKbkvRX",
  "key43": "4XbcJm81tL7u9DBsyja6YnFyqecxHo1fa7VgMgeGrzcA927AvYHmbxCXmuDF6idxFpDMXox9wGJrPtEgXJKxz9e7"
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
