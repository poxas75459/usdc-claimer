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
    "3eXzD6apRKHDukSETadCKmRmMLvuNpXiJpgHtFnT8V9iVzCijvFP4eCo7tWwBBmnik3gcExUb4bfTtfMttwVJaFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57yzFVJitxguQDqRTr549drijBr9kdUBtHFSsM2Wtad2kLExUdrXWD6EmepxcrutYyEe8i92DEPiSvzwRm58FTq5",
  "key1": "5CVqPByEGgKUzaNg25LvqCFAmYc1pVMzgAYRUsdEU9wGcU8UXsJxgHR4ybPebe2PHb6TTMq6FS1ebDSU5oisCVZU",
  "key2": "3B8xaVuVuH2equPytTZ6usprXEfaLw5eR5PvZFhuz7bhFUWKtQTwH8eUdCzZpigapVJqAuztio4hqskXNskv8qWU",
  "key3": "5oJqWsNzNzaT2GEJWGssj9zsbDwTjuQ3Wk3r3eD5Y2A8kcwqawQK7zhR191AtiHf8ZvA1osJeTWHDV9B68J89e6F",
  "key4": "51Y5sQR4FUKjGWGRGyxmQyjBXxJTaJkBaMbYtzkaHMGvJE5ncj6sRBJKZCc3kzUnnpBCe6mS6xARL86xrj7pjFSv",
  "key5": "5vbjM9J8s6yYB96J8x7Uvqj4aWKgLnAGkjUgVn17DEiKfnxqQfSRqxcrvw59VUMT8MPQ7vm74xdrfWYKDrLkKa7J",
  "key6": "4B2cihMLK47eThp7jCp2byDzhtZ3SbgANfvxAtyBWmKjPsRGvebg8khE92D3h9p5SjJ4cdAQ9xJTnYJwkUgTPW1B",
  "key7": "3Psgbb3he87GhjZUoCZsKz4d4t9fcv7c57dGpfQdJM18NAzSEoMm4SydWKPoao7M2qy4A6ehCvtebDMWuNJZNGb8",
  "key8": "39xPh5nDq3vseAWY96aDbbFXudDFwUm7qw2Awzc1Qa4MXVGy4sSFMy4yrRrbMsBZ5PzeCttyLBRLQYpAVMbwFZ6z",
  "key9": "5Kr1nf2ETKbxTKNac7iJFovgwVVMdgT68DMvB9FkVq7i4g4EP9AUdwbFsLk6BKhGQKFMp3SmAz7sLcybi2fa6od4",
  "key10": "BsjSZqAfDJu2LUhYr8zVc97xjN4R3cgkdY25BuJefwtKhXFXm9UBPoi9oanWN8nFQdLSu4Rj6D2njknhWJqKs8H",
  "key11": "549xpyoc64f8fRLYY979uZcAT5pmWYtPDHBxjQvhhJDDc2WBSu8vKbhefLVskzhgRe6Cktim7NzsUMe2A5HCaUSh",
  "key12": "4dsyufqH4bAzRE9fzwDRMVsgc3oRV1sSC93M6bnZwP493LM2mGvvHc9MicFgt8FZQjvEDgkbm7jQcZ1iq8PTDhy",
  "key13": "5c79a48NLyFj4q7qUxVSVXdFJKLBeA8KkggqVcxzFCtpKTQiGZaUyFUo995Axo9v4cAQaC5eg4RQuR4R5Rc6vJiH",
  "key14": "47BbfvwFWQyLkjNQNs7qAvFdb6rFgvhhWYHobV8iNp1LVM2k67SFMUV65RD5gmwvF75Z1iLr5hyRJCSbGYhXeQ24",
  "key15": "2S33NoZPmo2vtMUjZmMMBtdGSX1v5q9muchAgEGY2CcUmDMQDUH8Jxpi4fKYnKbMdJgwJU3mM9zX1fwAMrb6A4VG",
  "key16": "3y36XHCXvRRLS5P3mGzsHZbaXs5ZJrfqRQpjeehiEYHbJtqL8GBPzBy9Pt4D1hK7yfrBoukxXsiVGTDNL48SGPAk",
  "key17": "494Xx7AzgMpJsg3bEdJyafgSkBpwFYpZMMp2CZA7AD1L4EYtaf8158nmvi7Mw9mGcz1L91NJ2W33wZRomAr7w6Tx",
  "key18": "ZTXHpo1kgexCcbFgCYzhRE9KTKx8N8Kk2ve2DgRVTwfB8Dp1fovWb21hamTTP3a4Nm8162rPo1zZcN7MsfZQmsr",
  "key19": "3B5SS8631sWVmVa3coAwdzAepHusdF21xgW6BBgM3891tsABK2pQAhC5gAJ85qsLeE4Yk52Lcvo76DrvSCUtwXbB",
  "key20": "3Y3PSKh7qE9on7PxcBa2AhJjh1PBhBeEayorTtGfSXpcc6NLX11Ljrc2DgK1vARD9x29gFabugXfCHz7sWmr8QbN",
  "key21": "4wL8sovotJdzbWjW7ZuRRhkoSDVQSYGK4Z6HASVQykkeU9NnLGYMk2V2WFehTe3NCfRCsaxpCKpwBbB2ARHzazf4",
  "key22": "3mYpzDsYdb72RAAEzWtVwFVu96drK8PbAatVn7mnv8USFoq4jZ2CVXPyP8dahEQ5TU9W24abchiBNfFUo3Z5QFNj",
  "key23": "3Psa3GPYJkTGDFaz2meoKgxoJ7YubPej1MWrV5KKaxMPRhAajXRyVATmAGeLTwVaQbtiJahZPRaCq5SQVrh8QWsg",
  "key24": "2P7cz7tXgDZynf8RuLSfphQyi7XheHDJgUXfMfoG8waDiTw7EdeK1EyAqG4NJVyxBHk4pKnKBkzCQExC4PXvhzaS",
  "key25": "66sMyquGZnXcVChoEMpWZmJqWa9nYYWc2FRUXkxDG8TML55GnLj2HRLWywXKcLyHgGd6rYNFygyoGKyayDeHCHwU",
  "key26": "34MeanD4ZZivWEbGYTmdCgZtN4UaHAqEBzEFSsmn8X67sgfLrtus51Zd5RgCRzxeYQN7n2PAu59jaPThrStNE7C1",
  "key27": "Yo7A8ETFKLA79cDG1hgo7PrZP5eQPEzhWqDfjvswGgT3qibcm47FA8pwDeHwDZT3Agc3gKe88Xrrkv5UmzC8YC1",
  "key28": "4yKw3V3fRbCSgsBzLoNFtP8j7NDKw1YVhihyFvMJqBYzEEpkCW6LvLB7ZSbmXPGM3JiEuBP349qggT91ART5aGZy",
  "key29": "3BgQ8LtGiESr4ewgugRACGrzVmm5yZG4mQkYQL77TXnB6iXCaiihmHy7zXhF2hdxtjRQNks3ZB7GEggFxjoBdfv9",
  "key30": "5mZSqdRAodXgNYEES389dGs1Rp25dHRC9kmHLo8EVxYKiMF2gNgTKStDKHHrUXhjXGwkaZfv8Vr3Pk3np2QoESL6"
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
