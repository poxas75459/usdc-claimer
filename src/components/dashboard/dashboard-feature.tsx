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
    "3ZvqBXbtxf2G5xNh2KVdxcWJURHXgUKrTZUCpa1jegN9mnTP8PJGCAH9b3Wkie2PqSjru3bNWSovZGjniVpomDZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "525XRLZhxAdnVrum87oaxDpgMympqfF44jRU8f8uLjKLyR9wu32JBzCezG7vm1tm6sghUhAx1bEssVnd5VhFcGuX",
  "key1": "5vZa17BtpNrxpS2vXuWsWKk1vxdb869TMtvJahJsJqg6yJdyeARj2y1DybLgXcVrASGSbJikT3ioXamUTW6acjVM",
  "key2": "3ffeTciHFS6Xsy4CPkU81AyqWNShgbrkA98sT2MoazUApXifC2wVUQXhw7fdWwvXPYTwPoyFR87dyhbti2J8hbtD",
  "key3": "2pqVZdjpfkHiESacJhNDUJzWEi3j6NXJ1AqEP34bHUUcWNQWUMVjfSS5TuCTSkf5EuG9RoCS4GkhwvQLDhLx4ixf",
  "key4": "5kNEv7qpmquubqotqUuYqfn5M3mvMommHhEQ335E8VNt5iYEM7kAk8ToKp2ThEWSuyZndCTABpWmAqdFXDhCkntQ",
  "key5": "54f2goaEXT981LvjaYA8ivkaSSEi7Aw8CfkNiCKqCGu7cYbd8k6G4APmaBxiU9VvEzPjx7crnTYSJtpSkp5hxfAo",
  "key6": "5MdJaZrNTpWZGUPxf65Qoj56K3jmHFVQ8w3K1WGZ5rEH6eWfYxGbyZvXxM9whELcVrbx81bavG7CSqr3AtZB35sB",
  "key7": "iGJiU7N7DQSaoAhHoPWW1ddmxFvkiHzzUrRVVim38dXJ9vMqy3okRVtkwN81kh5pyYJZojUB2mkPBCFWdo7K4AS",
  "key8": "4RK2yZR2yQvTEdWQPmhwq2xW6H7XWDiNi3jsX19T6xUKGxQ18k1AxjTGPWCj3RRsSFmw1L1LXcmdr9SBheHm3p5C",
  "key9": "3Y1pKaNvx1gc7tVK9t4EpuNpWkadHAEVEvSv8D6H7DAT9oPJk76M55eUyx7JpaRwCq5TVxkHSyt45Zhb7M1U5q3",
  "key10": "2rkrUT9x3EP7wUysjqbCfQ2m7xF3EjFLiGChZFNNriudtRebvfeKm9vgkyeYTqnkfVM4DRJzmsaCyp7aauFB2ece",
  "key11": "LMHpLi4FBKpNRQTJfvvRJqFsSvRmhvrsjaShqWmbbahmzKTeECUwdUreh9UUFuV6NVUhSUWPc7LztNCnvc4NdMW",
  "key12": "2hCNwiKJqTKdY1GA4FmC7cGoHHCCfAdgqT9avgbmKf7sBpRyhgFhCtySPY7UbZs3pfw4LnKkryoiWa65EkZwGgAD",
  "key13": "2BC1m8ZiucvaGkVwub4dLCup4gcEthGPhoBSo5aP9b3ynZKcHqHSXFsXVVGDfcdLzqZXjX1bHQNp271LhzpdZ4Cn",
  "key14": "5f9UzhLkLNg71cNdEH54GiS4ciqvF1G54RvBCVcKkWXKdQgkFNWoWwSJQeHoqvMnSC23YdxA1XddV9xWb3JoaENA",
  "key15": "cybLppGyFsj9vyCES2i6cXF1MdHTm9M9uhoeAc1kbADbtGG4CvWJjgBMTpVuXcJA5umQ4cHqreccZuuKKAMyLCm",
  "key16": "3CPASz4aZbgfyDfMPGre33s2vFPhUTHyGsrwuYLavyXRgFJ8R1sszJrek4UdhuqX1jfXyXCNXM3ZkPVszSDbRpSK",
  "key17": "27VG4QUDW7sTFW1SKWwjTY6SmJ8gHM7WvNAQBZsJvaxSgKkVutN57BSXgtyGoJhP1CwoGHC5aCfZaMuqUseZ3Bxp",
  "key18": "41WJK7auJmjPqe1KRBffG2Bmq9PTMhEuxKMisBXELQXVB2rThb5sNBb1CdVWJhunXdG76ue2gFF8wyjv34SBV8AZ",
  "key19": "3LjwQ4kxUExMBZS4QfxAjZ3Z4L6UfLTuxcX6T7ScpwdCF8FfqVDJCbvvimrRRhnjZmijJxaEa63mqbL4MnKsZLzd",
  "key20": "3UjKPDY9vD6nW7TotapfKRuzzEBFSNREQDgGUSyTfnTNezYGzhEQUbVXUHr3cHsyj2KR1z7v21E5nEg8a7EMovT8",
  "key21": "2g68zUD9dEhbqtfH19unVWUVvagpqXbWUt6GSheqFxUZJXiEPRoGnTqsyfmHhviJFP3tdxenkoko1WFmHmikgoFa",
  "key22": "65PeVUW7HND8QMzd9icjxjjxQfDNFS1DgmZJQ7mCxUJpxMT8VRJpJC2RvJw3qdwqDQdx5gKdALXpmJCftdFDaZDq",
  "key23": "827iw8QTsKSiaoeYwDqPnavJfXbisgHK5PUFvg4QHd6XfQCqfQrFA9jM2LhMe8Cb9vaXa1EK9VWBfr3LSbrQ6zW",
  "key24": "36VFR5cahuHYPmPbBTj9EtCKoyDghM7Y1r4XGt9wBiBEvFDEP7X3gp2UsuMBW5y18GUVXPb5au8xQgDpJ4ebaWhB",
  "key25": "2m5EYmJMJ6QHnZ7YXJE2Q7fjEwyFVqnZ4MN7HtUBxwjAk2CR898jBuGQZcyuoKCDsypgdw2DHEHfhCKQcTUVN6Jx",
  "key26": "5R9Zma3BhKsWYnZjFHgppifZBAxA1cKirPw6ZbqRCvobCBPzTo5F1eR57kDx7atFYq1GpBgEkWWqWHDXyQQ9YRhG",
  "key27": "3EZxtCpeLqfJcu7ZTHKBmMsmynNxTJB7mpkHx95rP3GxqvfDTvZhMtcffz2C28VTu7TevTejzaoR3wXyxh73zJwL",
  "key28": "4gUdKgxxv6R9AGKPFYguwnwAjTWAvsN2N9MaMLiB3BrCmpZPzh5mhSjMAffWbGjydbePULqVD2yvQ12R7GbLFgzc",
  "key29": "3tC4a5vDzmEmqpetPx5oytxCdqeJCZeuuKfcyNgNpBvVAxCAGxDtQPm272omhPsBQyN5VxcYV34Qu7zTDsvcxTR4",
  "key30": "Wr93KygwLZJ93KSsguTU1o5ScdUYRPgH8XS3eYHoJFyAEA27PYynN4hvzT9XC2uEh27oLYaVLHf3h2BRbU5XMgK",
  "key31": "2oxCk467U6YLJ3XqbtrteSffLpizxkcAprZMwwJFssh6opRSH4bthMXf869fHcnQXH1oEtiMoYP5rmZ3fBPp58GS"
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
