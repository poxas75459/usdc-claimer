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
    "BndxfZ1zjYpP2H4HxiS4ahQtG4LZTABMHwPpGhCjMGnekbLfA9JAjkzimiFgUuLnGyiVWmUL7f3MN1iC5i5rH9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtMPqAU1DuWxmthwFPz5QRn3YpF2UYpEFvFAu5oP3N4bq9XQm8iP864hkTiHPjdodBiATPveRt48D3sWFRRBewh",
  "key1": "2fGA1Cvu1a5pRaVrE4YFrc1DroWVmqHfCbsyp5LxtyEU5MZiJG4R2kYu7Jn7yCZVEF8FDdXAQ6obPAcecQxMDsov",
  "key2": "2xnqKt88M8wckA3vasa48ZymFNBkGPCvVcv93QT2raxyNmaZTfmDdbWFg1epBn7cNNqwPJ9EC9EousF39A445tZT",
  "key3": "44aFz6GLWCZHuT2ryYyn5bPwaE1dVtFAJYzPJckNrZwQbKacyQCyjTocFS3NvpWWSPDZ9wmM7GGduW3YwefuEZuA",
  "key4": "4LqbBQ2rmKtzziaixgNwn6zjXJRvVEGRzu5WgcGL6dLFsdFTRmDiDN8cvrQimVJvGkNhVmVe7Q97Jo8c9cSTBD2d",
  "key5": "3TLJK2NNvao2m1thb6HeFrVxfGzJiQoU8DoFVqXFKYjBTf55SqvraZNYCJ6RS3he2B1wychJkc9hkP8Pj1HGBv24",
  "key6": "4ZWp8rVPjS9aRN9FnK9gZAfrRN3iL2bhs48V2snGrR5ZiQ428YjYWg3XTuAAkmV6xyBM48uJ3AEM25Tux5opNsAq",
  "key7": "H3DYgLuVVdmrLMtwcBDc7YXgvnXSTbkZkx95qLDYgCbjGVn2FJRtmSLkAeh3BvfPjMZex5yiZE3xx9ag2VJw1KJ",
  "key8": "3BGNtr77sQcWjUxypB8sAQWQqAuwW6GBuWG9jDNyHJtiqonZcRBZNwY6dv8Lg2W3KC7Px8dxWpmH9zDgSfyNmajf",
  "key9": "3sZkDfKpW4BPA4pyWvL6pYRJKBoe9wbWcrfXuBHNeagjBZjbhKNF6zT3hu7Z3e7VEfKDYGEiGCPVyvh2Sao5pRdQ",
  "key10": "aE9ig5ttsjNPk391wFFjUAaUEjJB76gVwoAe96zXz5iLrdD9QZeuY31Zk3gzvB4w12aiBfu3dhYs6pEiHhwfsuh",
  "key11": "3WEiMuTcwCXoqgMUJKdaecJyaYYBTKtTDyg4TU8hSTD3TaL268dYhLLXKPJH499ftdF1o4Ve9diaAVVgu2bjnjpj",
  "key12": "5aEwJFKZm48MdzpWqieaYdVdo6ebpJWiwE6mu9nBnUyndA4RXjABvyiugHbshpZ8x8ooAi84RnCWG4UtKBD6SDtK",
  "key13": "5TTr8EKMb4ksozExNQ5KTWr1VXtqMLLpkpqcnFAeK6MZWhqAF6YQuKUdXH4je8uNitxVC8BjdD7BozmxRTf7dV9A",
  "key14": "2cV2xAHafj7Zg2rsBnPHns2RUnrn4VFovkgbBgwfjhYkbgkjKtVetE82bFhu2zSRfVC6MJMMV27eFj4Z2XkQf4Wa",
  "key15": "5ukPsdY7xgBGHwe14r9ur7dLnnWQcTrmjD2RG1Zm7MPEqzHNQo7PSkV4x8R8hnGMmd3RUSQYsYtGzKoUagca1yNF",
  "key16": "5sNzb8PMoiNk6NXWwNSjv4fxru9j4Mrc7urfgef5Y3tXrQqbeF8J5LkHJahiR6BgAEGU2c6qMYfb68cnkE7YPAPU",
  "key17": "3Fn9TufqfguPQNGfeAo5Y9GdLSZ1TZD3JmVofFz4Zgta2C7nWTWPZN4ZMTDgJKbtTQeDfPgKFUjMEQhNLmCP7Y6",
  "key18": "2GngMRGicPrh7SQG9CcKviWhzHVoMwC8obKq6ma9W7opvyx8Li4abDWY6aHJuRvK6dh2r2eQD8rS36ehzT1978o3",
  "key19": "2kJ9Qm21wn3t4evAsudkqt64rqVRJ16d4akvATW5J34zZL6yKZ7UNyy1jHWPJThmJRWyRgWcZW8H8ZKHyt21gJS1",
  "key20": "482oWTqVRmZN4kGDaDP6qRF2bEB7pFfYiTNpiCJHzPQuZ9tMPNceFazbVwe2Lbo4UqbLdHXkVzuwQvnamQtFx4Pb",
  "key21": "2YDkQLV724thaVdzRvY3cp46pzs9EkSy59Km2zb9GdPjVQjc7KZbjcVPNjmEyuK64SZVPBPFAMpkaE2XEGT35JqT",
  "key22": "47LdRQC5GvP4iRJ2yydoHtDpniysCKuQZZmeYpUJoj2cQTsJo57kBhjJfXcVJkkgNaFPVMATMS6phgFogeXvDAxB",
  "key23": "4YQQ7aa7dZmkQDdMxNpZZKWbRRYGeFhxhjJskSV8KGUXY6f1BtKV1r1rC2Tu16VYCy4k5cSeopfwCQBoC3ez6zjj",
  "key24": "5Wyi483rqaNiHpBKHkWbNyb9DzjjaX4qWCuEsbT8Mx5E8bXE6t77fRY9xfyTFrTwc6ecuQLxMJspioMP5mLPbW7a",
  "key25": "226ZiRBrng69Mo3XFnpMZa2rqQ9DdMP9BXS3vi6qyyqtdRGLbsnpbZpN1Th8qihUjqtP7D2X1cJD4JgQBqjvTGGU",
  "key26": "4eDuzL93xDKYhy9KRwfwBqJfuThUtr6AH56yiWYuxeCxkRQAR79wUgToM4SVRYdiEF4dQxo2XLmr9Uw6cGHiSwGr",
  "key27": "2AEAf2BxBjnVFUuZGtSATN3Dr1QyrNvUnzAPt6U8ke29mZNaVXbvzbwxqrTXXGYr8LapXKvFQTHGvaM8yj7rQufF",
  "key28": "3z3TCfzwkpp53QBR4MMUzDcGmodD74LYL45dL7KLAo3pE4pCMb4VA7AM8zr8z8NZxCQSeRQQCAGqUkRsDdMHARET",
  "key29": "3qsykcCwzto4zTvwssEbo3m3iwwQaQNMNqGmKf2htCa5qWvj6hC9W4pxVizUcrKJ7e1Xg53rGMZGzRLK5z5AdkRp",
  "key30": "CYzkKy1nFGTpALZtxbwfN3wqCqR62ahsDQ7BCH3GNP4iYin4ynEVKdQqy8cyonf3YJvCp9XNf8pQSPXKvUiyHqt",
  "key31": "3oygBPYrqtY96Yn5UdmyyWNyVY1iGPrLmDKtV7oaisnqvgT5w58X6Dq1MbXcK2mC7k5qgQRBUPDBnLDdo4URXfY6",
  "key32": "5N49sHe7zERZkP5kYh2wuscpH1zADFiDEoW14GLFxe78WsZLvQh6jhJyM3394bNoAFZDjWC4cieo9uVyj4nTgQcQ",
  "key33": "36qJLTjz8ELugd6F93fuZtYbvD3fpYzTYU7NEGsHuGeDTvDFQPrgiuycYuUXoDxfVdemNVnrLr1vytTjcU4wWPLx"
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
