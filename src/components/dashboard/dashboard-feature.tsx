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
    "43dQd5NjKETUCjnCGr8PVg2zGgEKUNrXnFQfihZYFpwgZaDdHf6UeNatqDHXjqCPBVmeHH47NdVWzWXtsHJPsnfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdCD6PuYvBbYghYj4KeudCt6B7L7L9itYypsAmKUHjfnp5353okZyYonTeCAqXkmrfNMqGM4efF9AFmCcUd6C8g",
  "key1": "V67V1vz3bcYyEJFN1cpUZMjy5mfz8fGZbk92FhvpvF7f9P4t3ai9FoTw8AisM3jXgAUM3Qek4yNCcgR6FvNTWzg",
  "key2": "44hXN82N5aodcH6nkcP9JBtTMCEtN949Vh2W1UgNcmoJdX6XBoU7dkZn7Wp4jnHmSQdeBjimW7e6eXd5EHmTxNaP",
  "key3": "2umEnL2BG5iYgBd9Bah8qGew2FAT7PvTSdX97z8FZhP1cL1aXUmqpfgHJ94KwTteaB841ifaRV7CDQo66SWbzEQr",
  "key4": "5NWs2ric8LJiGDEiHTM1CSLt5w5dK4F5JRtiBo1ttstpQNZN8b236qdafmaHNfd8kryUbwjwFVVEvrcuKhs16sWv",
  "key5": "5xywyjedko9obCqPVvFCGdK7G2R6i1dvUxRttQvjct2xTRYT9X6yUgG6HJaKHUdPm4arS9eX4FarebaAzv8XntGj",
  "key6": "3c932WiZiER42cRUT5p3zN1arLrBVa9UQsGG97P9nvby7YdwzULBztJkMhRZzK5AFhEdzV3tp6hoko5y3Mq5EgLr",
  "key7": "2siKMANyDuMyZzxCg6wpiVqCuaf1R9w2sd3yrxm5MaEriyj2g4h99V3RuCrN3s38Aq7NuHULKz8hz1f4pHA6frQE",
  "key8": "3cmXaGtuErhi72q6hKo1nrRtDCAgjQirvTQEQQSwcCMR4EB1xUgbm4fKbW7esSLaBNX4Edn5Ei43GRZseX8rkGGJ",
  "key9": "4n3JttRe1HscXu3E2hsx6HXhXUMnU5HmhqPnqJkbQupq2oVYhzWZqemmZLZcv3U7fGkq9R9xJpgdhp5ea2oqNwux",
  "key10": "3nPG241CyMmTxGkSittbybcV4FnVwHLUgDKghxzVfBZoehvFRwyYaiRi1A4n8FkHmuVaLxXk1UvjgiAKZAQeUDBT",
  "key11": "5XXtM7ViBAhxZUXftC3b7H2GizmMs4MVbJCvRRNjc4uWEdgxs5bBG5WJ1wbdvm974rDxgN7h4wFo8qhFLR6g98BD",
  "key12": "2Ankt2o63msgCFtQTJRkyMW9fkFKnhBfH4XpbTLC8mRh2fpVXNDywJKSSrBJWEruFKhws7GJai3keLsKK9Vd8hM1",
  "key13": "N1cnn8MmrUWFJJN1wjs7dEpmkewNqXti1AP8k6NtfDiGsRm8yb71ZJj6hTLzjGgD3n6yEtdnfxcQuRKrxJKCSJg",
  "key14": "3WQR7YyGN5FszMFiz96a7QT5GxwD9F14sRpxLqSBiRrYGi5Fer94niPYHdUV5Nd5p8qGy6JEhZf9uN6sb5SHch8Z",
  "key15": "3NJR27vSrP6u7qyhEDM8mKA56yqNStNkCErpJCBVKqmzaNw2uvkF6LvBESzFnPTXP6TNUVTW8Z7RBD5Rm6evc3bG",
  "key16": "vcmNzZqirERKhSVK6HLSj9YR6rzzwLzq2uTBtarGqUEkQ15bddkxM2fZ2NLL5fmDhnQMmQw9noZ1bYudT16kphT",
  "key17": "2ME3RzQAsiLxwobSu2jtqvy9aRdCGgRHrooc7KawEeVHFx9jNTAd9kcCy8F4AuU1gkQJCnWwdm7FQXeVJcFL1741",
  "key18": "2YTVJzX7TA6jzTTBETimtjMHj1jCfx5eapbdFz1ZTV8Cx48FekhMwhXQy64bNrLZzFA5BuXqavBqao2BsBPSA4Um",
  "key19": "3fzKBEfzTtuoLBocZVHNpHkKj8sgyRexaFkar4kCupxsz6p5eLiKDBdJCjN5JaP4h1tZnggHQ58NGpFM8EAYXLsW",
  "key20": "6uX3caXeV6nteE3RigVd61oyazQFTGFaUJXmNewN9WkuzQKj9WsaopawfpqCDSZfnkkiVikFM991XV5ze8fHW2W",
  "key21": "3xavNkTmaLKfTWg6cqML6bb6ZKwERdSoACvdRytnpt9gAM27hiJXVwuM4pNez6ByT1ijUn5pfmDr4QmxkZhGqBcK",
  "key22": "2bnDsdFo2hqe9U1mgRDya8Lkc8WPi9hmMu6xCAEQEirM1cMSX7WoCYE8oS2peEcvWMvXCrGzTURJVZcwsdUwjdq7",
  "key23": "4gpP3JLsMHeaDddUDLZMSrK6JC4PYjogzFoqVYwrm5HbJhg1T5zE33KVGnem8qBAfBAoVQrRRRMU3ue9ziKxawsB",
  "key24": "29MALiweCJW85mVucyHXJy3q7ZFtHN3T9ERfbutwBVgNgCFuFQq3irzrSCN95ZTFEmvgzpKN9S2YKg2XYWta2LzR",
  "key25": "4fBm4xBcUAuNysKmAYJP8iGJT5Eyp5LQ7MKWuf53HEadmRKxU79NQERnuYVvqnz1rkA14qA3xbRFdDsXcHMkkqcY",
  "key26": "334Rf8K9Pjpd9sRnYdDZRP6SMCxNCFCADbFmWJAbwWzQMW3TcvxxK2iBB9n1CKMADiVM8p6nmUxMzYDzi7Geq26e",
  "key27": "4wXs4ic7wi21y28KKV1aYm4dseGncpep8N2FwNepJDmKGz1GJarMf9h1z9DoGmNzU2DgzvQLJVJ76cPNPn5NGrbQ",
  "key28": "4VsfxE9oDz6Pz4qEzekAf6nxF4EZumxrYwyQeS7S36Bkf9UvuTDusUmUT2qnQyiSa6iAvQ6jnU4dtAh8C8r5PkV",
  "key29": "5TXeTTf9Cbzi3bAeMAA2RTtWVgQZYBZnCPTmzAreUqHKRQgHGMuv4URKP28jYcMFFYbPdHdtCSSm895i5PrqDsZ2",
  "key30": "2rSb5SvqqVaMzFtSYrp5AiyUwh7kYApZf7ch2sorBLpYjuL4fEiC4NCVfwGceJUtFMCbwaXHJNCAM7A6KXGdHb7J",
  "key31": "C7HEmHHRC9xTuHXmpNEumpT4BaqZ79Z9Wgo3YiWwKzyUhAGp7y2YtgHGAnoFv5SQWPSqYPztv67VW53xURvzsDy",
  "key32": "4UeF2ccSUq4Li4t7KUTLrNRxN3zE3nE5Movz6NzH2JqJYujx2MPAwVb4wgbyFzGt7wsoyN3GwfmZohVT8xr69o9L",
  "key33": "cwyhvkSSAV77FZyLo3HaADe8HNEhBLQmfs396EqxvTbAZyaHEmViY8sJbnG9HtAK6NkNcQQ8DaZiPZo4z7peGox"
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
