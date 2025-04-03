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
    "2Qmajx4utBxHRpLkQ2oHHPyLBzpg39eS9SLQ63EoZrQ7GhR9Sk18tENL6e9Qge7v5FLm4RtPYTQ12oSx8cfq81Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DXABDZKTte3XcWUw1ZBMWggcEkZcq5PvXdEQCZ1L4TJP3t4qpRcYGvo3NEuEA3SEJPqgnBp3N7sKGob8EsEgwby",
  "key1": "46n3iMMo8X9V8aRP5Hdsyq5897C3GoXJF8TaPkUMuqQapVw7Q29oQsfpTc6d4J2fJAQgyes9ASeYRzDP5FAjU6Q6",
  "key2": "24BH3qREXWs1KT321fBa81ehtxvNv8r9U61HY7JTYQouEvRta3DGYsikToZ9PZqP2vnFmgbuzqCrLuJtYcuZaWvd",
  "key3": "5bXEmoFLoi4d2GXWNM9mTYsosFFAWZfeCzjxTYP2Axz9sfYB7dgUhxPJv82dCYoQgJ2TobtqRY28BDBsJtSURcNy",
  "key4": "3qJ8WkA7Lt2Ap92DyN7GEhwXw2ZeCAqZhWygDfvNPbPo1Pn48bRd8pMdGHNcG75NEGo9gop6xFHBFYwYkdPQD9Vo",
  "key5": "3QZdh4HvD8ZFKaQMmLvmaoecvuicAXMKpVvvTi91CmwqshYDF3axwegRiCydkV5jnSKSizcTvYHxjMEfCenhmaJS",
  "key6": "37iYWmUmddtAHvmS5Lx1KYBb1UyFUg9C95uWAATjeeFbE3XdR8DYaBEhrhd1mhQn1kijgC43yzptWLFzXcuDzvmx",
  "key7": "EqZ6Sjo9CUZUAGE3t514oStweb16pbXwNzgebVLyMrtcw2qUYkVPQfowtj8WSdPB4K7bcnHTWzq2Qy1eGF2rvGk",
  "key8": "2UbKGHSx9dSb8hAybwTRsqAqyUmLGDpxDFVGWT2E5ubSyFwwAXve4ZCy5yW49Svb19b1PYTdZEw3LyzJpCB5gRUb",
  "key9": "49bkyPctwjAG26rnxnxFmBUH5jzwAFsvhDQTeRxQd9pDP2fpX3mFvZ2a8Xaeppvopyg4YobUQpLufaULwHbeij3V",
  "key10": "28FYzYrgpyAJ95jBXZzkZgWYNmrvN5QzAASHAwyikJop9ntFjG8c6f5uQzvMkBm28GFz5WpL3b8SBe5GNnY5J2xH",
  "key11": "4dXv8jMWWVfhKczJhHwNNF7ZAM5kV4SAdqfkaryxnsX2NuFe4WdPmdnSSqiFSiLzs2iTqvAAaU37uoWsXGH1vUTG",
  "key12": "2E4MtY9RUdddsp6LkWxgCbD18J1rx7zCyVRHiEY4aZHSjpt3qysNG8Jf62u3iucVqM9CsFBuMzyDAvtHP3DpxmGy",
  "key13": "3WhMiWMXRCv3CPKr1ocbyqfArsCuWpnm34gfwFWK2Exvniq9pem7h6mCZd7Q1ciXaiMx76EAd3QLkuuYpdpKw9kM",
  "key14": "5qyaKxEEytcVeHxEZiwx5jXSrtHEZd1aZeYJdk3A47tGuXxYy2WduN9Vof8dDoqmZgaj99Cfz2LZ41Rky9GyPX7Y",
  "key15": "5YS92NDwwXPkCcg9GudebWqqxCscBaMyv6mqwuMjzx2CTm7AZ39js2JteRyajBUNpb7URPACUkxQ97wyPFgaPm9Y",
  "key16": "y6xgUwePT12YKwvQszqDwYTwem4br1PJXmHRyNHvV32TPnKU4CyGx4pEYRAygZXxGKGn8GxEXg9x7HKvpg8ozLo",
  "key17": "sB1LtByeNfC3UZFKsnxHACfF4ho3Xx2pwNQ8b1kN3DAjeSWqpBnYV9MViCkYr6CZ4hn2A37vMpEsvuDyjmaBqrK",
  "key18": "3WeurTYKfVrFkkhtWEDqEfcoeJT1B9Km91Pd5uEWEivXby6tEFKqcN1Ydkb9iJuxdX9DBZ2Vpk19Xyjc3fKKZzWA",
  "key19": "5uJsSZPhWh6sHVn1x1KGeVAUq9dh56HtYpmsddegPNNBuYRdXa5mKWxT3yEJZxrivzsNQUwdtVnMqc9bu76FEstM",
  "key20": "4LtRskBGFY3RHdt1zzQjqevcL9HhZSCuSsb4fhfuBaCuk1FficBXPd4KQAcqtJs4R4u1wPS15QQr1AepBRNBM3a8",
  "key21": "5GoM6LJMdS7sXmr5H8z7781yezpj28Ny9Fw7557jb49t9KyqGTECU41SGYnXom5MnCiTV4XX3mi8ro6M1TG1YFmx",
  "key22": "4Nj6LaaGV1Uw2B6q9YW3SNjRkaFtSQ6ZaA7rEEDXwpXgpBweUfb9ZBZobfEnQ1zfx23Hozpw9zVUh8DtHU5dcTGe",
  "key23": "2XYiWXtJLSZHFCJF8gKnkLgnGKWaqocfXxH6SarUR7xg4K3h9hSea5ZjXUYmdNqLzjGyKAHALwk7aU8EBJebBWGq",
  "key24": "LooFzVda8UjTtuatEq2PHSURkNJPbe5ijeUSu8AQ1jWCDCVTcqyZ7DYNQLJtHji8RzcrBwu3cZfPRDcDi3j8kex",
  "key25": "4SYwAcDFavRFJkMwh3c37iLv4X5FZ29UzQwHK4SMMAXqsfLAy7mh3ydBEzGv6XkzmoCwbFyFViVKF9K4D7zP3pT1",
  "key26": "5BTbQKgYxixXBAMCHt7J5grGvNnk1GgNgRf4pFBqseG5SvrKZ3cGK1p7ZFtuwhjkiLheZasqj8kuYJoWoBRYLTo5"
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
