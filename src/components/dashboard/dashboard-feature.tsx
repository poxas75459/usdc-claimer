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
    "2prC5kEm4MNZMTq49R421RKvwXEQawUoRgMo5EuZt23A8UKESpGxQZg96p6Q6qd2VgqguHXjAo9vu5as6i2LaSUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSr7KfjhBstS2uqngXUDySoaWbgyDAA3kjPUfGr5pF48PNAq7g815Zn9Ejrk3gdMA1Lt4hQN6n9AHnmVaGcgYfg",
  "key1": "3mudkFHdP6txN9UimkbR56wkWTxPBYALS6JQMZmf84mpsh3EBYWSP9DGE9n4LpKiA8tvsDxGhPAumEshPcEEmt9o",
  "key2": "36kvbD2SMQCYZKgXgHqoGFkmGaKY8fbt8s3Gw8U6EqgaC1mfZ1t7RLqMBzAosAu5n2DZZBF26p4nSPSarwRAXCxJ",
  "key3": "27htuvt4pHvBMUR9be2DxNzx6a3EGnkL5435prboSK9FyXJvWk2WuH9jhdjMeqb4c8zKrXYD6mnpM3aLoKzVnLXn",
  "key4": "2fA4FVCzfjXy4R3WxzBbrb5D7bvMqApzM5hFtDwz5YfTMzmX1k1DSm9m6cTdu5nYFm7pu7AV6bvtofWzsCPpEbAT",
  "key5": "2MAc6diwCfgFExh5ZLKrXVUziFQkbTqRD24kcndk88i1CUN364LkkpMb3TjoSenAc375EtNvokjPXqC6muij1Vd6",
  "key6": "5pkEpizJhJmzKEMgCsbHj5k74wvCux5g4Sh4xHjZLk9wmavUsFV4fTh3N6jEcdgaoD8ZdgxxEJGJa8AY4pPWbQ7f",
  "key7": "5aY6ZvrQPQ62nmSfi967SUD2tMLTFfQqPXG8yFVfNtZX85jSSFZiGMDbPiduZ2Rs6bictfm7rZGML5Ac5dSF62bh",
  "key8": "3VcYFzkk9Z3JeYjd267VXqW2tz87hgT5Mjy8jjtUQEKSuCziCXBsW7qfTyxJVjuMQtf9NQRCAennHdB8N9Pkwgnb",
  "key9": "63wSJ9sxKEr18bjtjvaDk5H514nsYYmdNeExCB6QgMYDYNfC4CH4DewNTn8qKp7X6yPfCJ75DegbrhGjJ8xZ9tAo",
  "key10": "5q76Q1zeHd3Kwcvy9J2VJKwyFecKFjZW3ucBzRR32e5CEzNKkB58vU7KNAifEfSvLw6CtJFcn4711Zvdc7F1x3yr",
  "key11": "3FMtYkZG1D2J3fq2NG179N3MYNaw6fpzhWhARzd1rvpsbgAXB5e9UpHF3xazmmiwbAET6e39WQ38xm4KQjmoCjCc",
  "key12": "41hcWnnEEoNi4Rdht2oFin1fJheDGVJMEsEMsNBSzgSWMYFhaBCAzFvmA5fAeZo2HKURfKJ4CEdXm6QGW11L2pX5",
  "key13": "4eUQnqwJ87R98pdowFLtcE4njnwXWgrrVC9V56KWD22UEJFp6k3UVVVFdV9PgD9gNDZyXKgmX1YTYsYRaFnbXg4N",
  "key14": "2bUMYWDXkQMaoK6x6zA5YtYkL2AzZXj6V6QMnYKa5X8Eeag1oqMW1gffsQaMoDAWYSQiBhsBUKCZh2h81QDxKHLU",
  "key15": "2rKoGpvGCpsFMDBwXXo9MtwoR2erkquJRnW96V3ySzcS4Ge6q3qFmk6teTypqjg7dmFnfatD34jncyKfdb8mD2YJ",
  "key16": "2BUMGyGpmEMr3nzhyNAbS9FPnkvQFqzZHQv4SzuVidvH1QfBuA6RQc2JRMxcgEUNiqQ15cjX2M3YF4B4jwUUcsWp",
  "key17": "2nnpzN6ZcxrDVX8UkPP78RjJuLJN8UbwMHbex19DU6cVk1eJgVuUjHYJYX43X151SuXQUer6da8gPTkFugUB1hGd",
  "key18": "5FKC3E99TJq76vozDtLWVQeLLGHgnysFNFcMKdU9abh195xS7Y25Y69fPMm5QYB4a7tsNqRRme9D1CBE8BWAMM64",
  "key19": "2sfWgYY9yZXXfq3JPiyLPZT1rrAuVFpVXt5YQhhHGYMBrcspzYdBd2m6yBGzPGdCsXirC6KzpHP4w5jQabRAyLuD",
  "key20": "3yXYC9PiH55XW1KHyLudxkhwxDF6BP2B36m23AVWPmegaUDEKb2D19g7Sk6Wu74BiGG6eYFPgVW1L2qAK8C6ak9j",
  "key21": "4DKLoQ6Gk7HaZKnYU5y9JoDvGVnne8PM94yrwXWbdF8QfCRSbUgjYmC1JZgapiCk8EqazxretbxwThsiz1nYtU9F",
  "key22": "5rW7YzhuzgthJvq9TEjBmFKGT6CyALxZuPk1VEkhX6JhrY64afQcVqQaez3EbHHrUutQxeZ7WtJEKgZvSaL2vsxj",
  "key23": "5qo7hBwHH4D2HTuJgXxJeGK6vo7kiUYsqsfNGZE2T4xBuNTB8MmKx1UambGZWcrRAw1uWXbdN51YcwL3KeTjHo6d",
  "key24": "2my9rU72BpvxakNpyKJJg77tL6Rh2iR6evPwBF9fvZhA34A1dxks2WCYBEAEzjwquEidxmXXPGj8v5JmbK9CQyfD",
  "key25": "2Y3QEepsM4U685jFMvkRthYLP2pL1WbDDNAFrpqp7RhSZ1q2Xyy9yZnQyg1cNgzvx3JeTPYgSSp93BGy8qE2Rs8E",
  "key26": "f1ML764thcnGhjxa72K9VbDX4XyXw4LmeShWAiooAV8dfoGHsfKknzDD4Jwv6Dvr9dfeXmnEq3RP1fZK9cUAa9e"
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
