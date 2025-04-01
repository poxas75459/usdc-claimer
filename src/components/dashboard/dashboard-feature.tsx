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
    "RqLkjALASzCyfRwipp3TNsQkGfttdAkwmb9Ak3dccPpmnNfASFmwiY8Ms9yDsdMfWZyYwm6eULrjEmGxymecjaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nUwGGquMv9SVe4b5dwYgEE65RKNeZt2iZ5kXX1cgmiwpVhwesimXjhEstPjcxFzoxBuWD9uBaZEi56qsawcoNMj",
  "key1": "wsA9AgpQnzRz9e3QaHKmHxAxiM9jhpZ267UQkzowrVLXmSksXye74Hm7LfmNP52m7rCDoppUBeVjdVu6ambsR3P",
  "key2": "2yL1Z5br4vYUfS5TT6sMivYpa2agPthPbcxnacE3jKUbzytkbdLTV1cXZAucXGzrdRAei3c8hmVncA6mx7eMcYRs",
  "key3": "5MFhJhpw3YU1nwN8qgt5BASiVhrka4zwW3Z9PDw9UKTuakXofXrycetiEAknoc4dhtNSwhZYrSudStkL6qFcEjjD",
  "key4": "bWLE9FDRwU3KMShgzpMa5QmKc69KCat3W54Ss6ZP3X7i1xYYYTdVJKFtubgz3sKJ1qqcL5wnAr5KxLcuri6RXRf",
  "key5": "3MhbUFkkLbd7GXoi6oNHXHNyovWkrWrRAkkpye6fFajjLEzDR7NhT3C3qUbLafr5iZkZUCoFsynHL4TPJw3Jdyhj",
  "key6": "2CPW3hGAqwo32VoZs5U3tWBqnHhuXhnSXD4eq1e4geD5yjVTfMzU3kgCCHR27zmyxVLETNCURNJho47GLNH6wThK",
  "key7": "33Di5vJmsKvhBFY3e2t8oj1aJYAkWsBRiT7HfbiLeJFdu7kHeuHUJa1k6sXmtFAE6G4JPA8GrVpQg9AeQdUqJd1p",
  "key8": "2VemdShLx8Br2pqQQSPnXmkC4mBiAC2DnM5qkcGmc6tFEVaeKT63A1pCEEUPTPUeaHrzgs49sH4Cn8MZFFDhCtre",
  "key9": "2meyi89mQvwzNid8Lz6aZcvtSVbbK37DsXNUV5NV7vFEBRxWs8Qkai7xFaob6dUiGBm9ufbRjfU5Y2M8XQnetQXE",
  "key10": "62NaH93bUPJxkKiapxRQ9suuNuH83gRpXhmYxvD8oZ4qCsjeCharyX6tfyky46cnAuPNtiuiXLRS7cJLoAnkmV8J",
  "key11": "2Ysdu6dmb4fpqV5BHBPhWreCLnqBUQkEAx7DzXAU1c5xmfXNsStJhXPkRTLTEhncMpgNCby6mLB5aPjMbr3VzEWM",
  "key12": "5curUEUmfTC34uV2v7weiTVzsArVZSNxpFm5kWEP9nLqLdq52FJwjHYrjNnaEdHetzMmwsQHV682eVWJzS13a51U",
  "key13": "W4wVEGcANjfMNRnWYYZqMnSKbZ4PqHPBAixSDhi6hXTSAgHx1wkWRe8xRdn1k2KbHaEz9UTDU7PPAcZpiAd5toD",
  "key14": "533cao9Sja5JNKMZ5sPw7DgG9xEEXP5mdAYbjeKYcwxomgbLs19Vn3dWHf9BNVqsBGmLV4XkbvPayLqK8bhcrWa3",
  "key15": "Uj9m4stWgwZD9xeX4XUnUULp6kz3bh6m7TfzF9GFJQ8R2cNLUXXdHYSFhK6zm88s4GWPJAhar9vTgb7XX8ESfH7",
  "key16": "3K68HiaUTf7WqWTmvvH1WW3in5D7EnsEKbtmgSPdgE5uPa8w8PQNyHhDvHYvXxiQzkLdBHCVfcoMLiWC43NSQ2h3",
  "key17": "5eRk85qvxZHeSFqdD5FoV9KvYxtczhg5BfdgNbzTsF86WW7xwm6j5UGZ4uegJkVGetjuUNpRjVwhdFeG8d2rvJTY",
  "key18": "66XaT1t8bMDewfBxMhhXn8KLCQmgpuyfNe4uzfqQzC9tke6sFoCqmpvyPbv9wScsvPVmZkqyj8nMtTkwbwf1iz4x",
  "key19": "39WzD22MKQZeEgeGKfoGFm7Dxp43XkAvhSYAMuFvyNCvNsnaX3vMLWArYbzMxGZ7oHnxoovi6HtepgXgL8U94cRo",
  "key20": "ev2KSR4xPSibLwWg5EVCNP437JW5HZidqjSXf9WpKvoEeL8JFTfSRay9jCJA4ZbXe53GxuahA3eugY5FpANNDPo",
  "key21": "3g7uYrvpBZWw5fCvjcR41nGFSSUEbeMdUaZR4CZpg8byezaePJLiuqartfGo11iPZhGF27H964KhLLZkvspNeme3",
  "key22": "2C6gXTvrRAjUiN3PsfKwfLceYRaotT5yPxAoN6nNYV1rmdm83owb6ghxq5HDdU9fcTfbVS1Tmontmeonoe51Ynvw",
  "key23": "3as42iYvxSNZcUwH1N5ePMZL2K17CHzPXqUH4tMfv6UycGETs1fiTHwD67XGKZAmXCKt1oXQD7oRFyQbAEjWDzQj",
  "key24": "64tTNuaKwRDRoruJLH8bbG2Q5XzByBt3opeJx5iLP8Th2C144ixFQtbr3R8GLWHXHZtwnEqECfxfwMr1fVgtwYrT",
  "key25": "4ty9FGR3SnzmtsoCfTCBFgpEierbJYJuRKJjg5f8cPVzqRmQrphKyBKjNhh6JUmQN3CwgK8AgeneeR3JkLq6pvdS",
  "key26": "4JpVQB1BNPW5fe5duvMXMcXbmHoSYtiRkmXBa6mVn3CSMYNQEJe3NJpAn7qKG3kbN8EtoQFpSFoH1AXx2uTFR2cq",
  "key27": "4w6kQgJwyQsu1QeCHExyk3jDhUDtotVqNgUHkxCCtbMQ22NVVjmmDM5pe7BZFpUXzoovTdvJUGRcX4RTfNHeSTck",
  "key28": "3NFjHrNyk6Hcrmk2AMEkZKYKgssXRSy6QTr7HM67aY6ZAecpTWYFzVfKt4wPefVewmvcsaJCEFWYmDMxq5CwfphF",
  "key29": "5GRjNSHioB1Lfv3oyECefns1s9NCJ8MnSnaqVpL6xFajuL9C5GxcraEmryDwPeptWgcSVvCiD9cBE25zWPA9M4J4",
  "key30": "5FFm6UkPy41WBfQrVpF2mB1mCCvQVn455S8wvYQL4Ar4A61uhAdReVZ6MLjeqCwXKXdaE3Ct3zqgJWiGL3D9LFbE",
  "key31": "6Y8iV11JxeyDZQptpZ4UqCvdbh8MHxbM12S8V9A22BDD8LAeJoKHM2i99kd5tUjxYsttDnsVU7nZQuSRdLQvJKc",
  "key32": "Cqtvegpk3cpz8XRrgHsGLpKRwYwmfMw8Quit9so4QqQHcRShxCkGtaAuCG1x6ZbFoWkeiRhcd1gTTmHmB1AHBfJ",
  "key33": "24tLKQaH21ygFeGQoPnAcPBtRb1QAhXTXyMFyQaDuW4jS3F66DdNSk19637dEt66apjv9mZRv8wVuVmxSfpojWyF",
  "key34": "5rpQZ7K1iF23hM5KJAaZU1PPF4koHepb5wxfdpGsJSPeWpRCfrW8LFA36R71ML9tLpMB2K9RZ4HVXLfzrCdXRxJM",
  "key35": "uNxKYs58KvGBD3FXCojrviiW6EBQWutnd8gMbtRzKgfebKSo8zbVnC1cK7ud8LAPaGXorn9dJiZhgLK9GtT1X2J",
  "key36": "J4Jd27Uw4H1r3zCsvbSGmFizxSez6svKmdAT4suREkbkoYKGfTAxJjLSDkqVX8Vq1pp5ZcSoWWkTfvT59DRQ5Kf",
  "key37": "2FjgqKb2jHU3v8NGVQH5TLuUNBeWqFbbdr88J6h9mJ2CPavpNAfPE3KBj72b1dLhsfvZeXL342TpxqhfX3zqgs7b",
  "key38": "2njQk5E5PayzpNnD3dZbpe5kjk2xN6GYGZDqP7V3FrJDxGozTWsZMVoGdmiX1QR8zQW5teEnxUo9VDLra3WcMTKo",
  "key39": "4LgjKrsR4QD5xVtFJbipK6T99idSt56oFSMAPPyB5PrvJdzLjeRurmgm9v9WnBeriw8H8tsekur5MoYwW6S3TXKh"
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
