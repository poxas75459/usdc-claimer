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
    "5kDVGJnietjjPi3vxbUTxmuFhwLsaYjz2V4FWuLxL2WNGk1Y9Nb4JtrQa3QsVJNDBzPruqAw5n1SpwrQwiYUtfnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LVBmgGWubaAkVhL2nMB1jhA5AhKPAkMS2FmygMxRhw6LJmjpFXvXSSBpiu1aRXGLFQYmFLX3f8jtvCXBYRydjd",
  "key1": "3XshyLW4AuU1YQuoP2M7WwehRuvKWhJZC4MP1j4LKsiw1NZS5Ab5X37eRBrFCUgMETc17ePreRmSWhrrB7ieqq7C",
  "key2": "46Hj5JTrPiaJcfyirF7MYz7zk2i88DqunCMBdoXRKi4fX6vf845fk4PwbyMtugDEcU2TKQJpr2GfboqvJA2Ne56z",
  "key3": "4LYPniGXSkgmvgoFy7jhJ6P1VKEh94X8xJvqKY3GxcE987uNDktwxUEPX5TzuaddGy2TQGv3ByXT8UGazrKDgsiv",
  "key4": "3RWjc7JP7b8wa71hjKPqzd84Gc5GJPYR5XPMcUD4NWjQRRs4Qc8Z9Rx23tKHMAh9MNvmHTHpLMciQjACm3EDQmvE",
  "key5": "yywjWjeWZy2AXnxFDLha7zZAS47pBjgdGSba2hxRVMSu8sHA1GLbDrLfnkiALVFhpktQ45vKhoN7XmkQeTWotPP",
  "key6": "xQqNRDUFJishBwCzdvCDKVfCwx7vPjkMiWi6LjjWN95wx51DmuXmp7VhH8EL564J49nNUSeHxA2g7QLUW5b6wEU",
  "key7": "2XRygBaYVGxigd9tRYHJNBbFm6AWtZeqewhCsifnXcNDCSCKKxye7awpKtqbLQKVUHz14PMiRfnxD8aRs7V2p1Lh",
  "key8": "z2Hjq3nvgSKpDHR94K6Q8Bu7kvFzWnauDiRRYnceZyruhqNjvjst2q87MTsak3wHxNAAoQapjFiSohGPsppNChY",
  "key9": "33gbNkqGaKPScd1se7t9gkVsseAAjkVEBMo5kaXcVUvKWp6MsmNmBoH6jy2ihc9XocsCjnHcdBNfKE9voGD6N5R1",
  "key10": "2V8ag36jao7584YJUTjrnbKsDXVmmcFeUJK4jA9CGBXE3eVfZwBwmhUcahHHLUyq1iK3WRaJeLz74AxY5pKJRYWJ",
  "key11": "3zWVMwvegUg8bQRmADpkfskpnX28pg6RnMxmjZ6PBtUCm6quKvHaGvpMYC8rHqKaYoCVg4CVvaLK9kRUrnJzEAnW",
  "key12": "3nSqmuTmJxFMyhPeBd8DqDABbLFFqu94f7Cv3UB4nqKq7ZYmxxgLpuYLZyz4njnoXTEyp9zhdEzQu9Ddtzm9JYx2",
  "key13": "22inmZ4C2kuofbwG3LqFCh7qS5d6JzCrrszKgcRiQbbvxNctwrx5jbUenDHfC3YxzCvRevEVqQFFXrP6q4ant75k",
  "key14": "4Eu6gnzRYB5r8SekQ9Bb2pAx692Chtaqd5baqJTjiDgkNEcVkYEnxPFhUhYdhuWc29YCUsbs2oX9PDLBvReMECX4",
  "key15": "3ArG5QixGp9RvueVnzEaE54AN9SY3ZG89tU1nTrudDfQKYU93qVGUfkiRFphF2BaZcWdkoRc3TwmMBAm5qebBUQm",
  "key16": "5T11NHkmnkNLXZiSR8e2isQprMZzDpKBavFcnr9kf87DFwueaRZvMcWi7Bi2GtKqES24SNRCcTXvukAGnhEviG5U",
  "key17": "5s6vSQmTH7kV24ZEepDCGSLA1n8hi7JBQowYueyRJdudJex1Mbqa6Gim7Lmm3s8aHxVM3ihY4zjaKWxNMvs4gYT",
  "key18": "4R5rGeVt6E45XY6nd1BwbScu6Ftu482fkWqLfysWf8CwMcHHtuXHAkfDFT6NrKpCuuzrfnFX9U4xKXj8x4ENEyWR",
  "key19": "4gdgF17BbLgQvJYrC88s5372UKyGVEQ7REbxZv4xQZMHZp9awp9WStiMv415FSEUV5Xu2R91i7aB6bGuwqdbFRyE",
  "key20": "2EqM9WUHsxLnRVa5wvBEtKxm6K9HowQtfJ5M5TcYB5YAZNmEY1GqCNE1H1RnzwuSUNz83dHvU1qmYS2Cm8zesKKR",
  "key21": "5M6auBk7Z4LEPs6hQJHk51s8QLUnftJsRz14ezj4BUwgMY8tKEvHbjwTFPNZVGEYWSue7CJ14KibeLzrXi7P6U5J",
  "key22": "b4Xyej2iwjKWYsMVRAykmj3SHXUMnKUsAZYBVcWbM4d37Uz48sBu9WUBxJvXjSVQHYNw4sZ1gGjs9saZG78p5tf",
  "key23": "PhRm64w3a9J9VQ1VMF3wFWf3PeWESi32hcqPv5SL2rhQ7bzSjDRwcLt6ZTa3ibHFacyqoMFw2YvH4htyKDH4Zgn",
  "key24": "2L6rXn44Eq7gJy4xmf6183QC7TnKSoXiRj8VV38P1tbTpbitgSgFaWYcRGvdJ8MxBjBrbXn2N5LJwhPMyTHSQQGk",
  "key25": "5AJTzAMrhoeUTeHQggj81cV4oZFiU8XrbAR6u9bVXjPrtsV2ZSpTMtTv56ERtsbf8x7Xn4CDUjyNux9Y24hjq6hk",
  "key26": "5ragXdvDLbpgeZo1fjrfARNt3JrM8hjb3Y4FJaK7B7YULASCyNxS71qt1LWmfbxaG4KwCL8Jchd6my7XUnEE6wLu",
  "key27": "44Wgmrmg5qQtLbWvvHjji75ip4CwyVpuN1VgNUKe1qZi5UZT1KsafhgqPDFGE2UKKhxpBwryT8ywCJ1DVh5i5dyk",
  "key28": "4vcxfeMKo1TnRuot3LWh3B8XQeGoAJsCebLgGhW2FdcYiR5ByfXkaaSfWnd6RFtddxPzYkwwUgXo4V2F9fifN6ko",
  "key29": "3zgxTmFukMkbeuvweVaKdA9FugxxRy3S3Q9tH2ggSyvZvdQYD5T2WS63czboX4YQphgk2ZaSKhaYyj5BKUhuo6FQ",
  "key30": "4cYPooCokpj8FFMjiY3qQzTbEj9G34W5GmPUD2mnZMoLUEi6n72Gt6m5qm6j5YmwaXLSsf3Zp2hCFQGh5b5xQtaY",
  "key31": "5SHyxjXZy511xvKcqhZKooavrgonitfX7c6QWHMyNQXaMWVwAUBCpRaiPBv99GQCxkw2uWkzqQJbmUY2QebbLFXL"
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
