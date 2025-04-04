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
    "5UD38Rv3u6udQ1ChtbFfEBPUSb1mHZ53L58yJS9ChiToKJaRtKTEs7z3XFgYn2Pz9TX1DKJ8reutRmfccM3Zb9xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3cLD8QaTZScUoHxHoY6Chmtb5Kn85myDuXgkGybbHKQr4DmeR8kK4zXNvqw3HkZvepQA4TToyLJS6a2BPthBew",
  "key1": "4XBkyGqtQRyhMT6bzZyeR8JLE9exckCDVHV5MynVnxvTPyk36JVi68B8iw5rCjUoo9qjHTTZtN3vatSZzuYfZWRA",
  "key2": "5RfYjjxQnHHZTLqbyreEVpbKKU85wytjMahty67XTHJvC2WNZjVyTUShnDcz6z5jS75FYza6rhbMCUhHJKaHrhZN",
  "key3": "soqjsa1ZYGGHGZtDZhqB4wSzAYYdabavA34XFatPj3crbgg6NnxXKMdvBG77PJn74533gbFvzzH8oZYc5QddrZM",
  "key4": "5PA7cW4Eb89q781waw2hf4SXqXmEZj3CaJLAoNEZHVivbfAGrKNuzyAwZx5CsSh1YrFEojH9kUVXTZncR6zm1kZf",
  "key5": "2Uv7UFTcCPm4tNUAdi6DbQu8e1zTahxB2LRzGHnuuPeF5sLBefqm2Gxk4yQdbm3Shtn4wCHF4PdsC9HrHmHNKUZb",
  "key6": "66mrpHHT9Yi8NrNRdiLM7wJviBT6ymymC3Te9YZeexUCkZqHyzamFnatH738YRKwf3iK5YMeiCisKqSb3cK2W9q5",
  "key7": "5gJmhwEJ9z9Yb7DwWKDdrx9pLLp2ii6dzfNsX7Q8kPFv2Lqo23a9sse63qRXvfePfobbEVAZgcLcefZ82R5GtHkX",
  "key8": "3MCTpZdu7AfRmKFVSnfdQp9V77XYHBb5GoEm9tRroJMqMCF4447eyH8awJBTuELbGb9kqxBRnnmq8ALHXQ5CJYvm",
  "key9": "5bmLEfWpBmZ8hXFT6d8EuKqtUomZnivV3WwfuihEsdSKXPhhB9ue4P1ahKeyn22k4UxAp3u2TqN1sqSWpjnvMk8L",
  "key10": "5y4LqNBsoMLc8YecugV8njhRNA4Qsijkmf3Epbz9cs3eL8q9vr3qL9cLRLhZK9LCxnr8EgdeFu6cAuTzD5rGoCqD",
  "key11": "DtPr4Hu1or77VzXG2dP1RnPWVwKHHjcE7wiZKhDxT15UBr9RzpHZ4rFN1fiKbgXAX6mvJAU9tupnp9Rc8m4hDcZ",
  "key12": "5siuBy6QxE2PsL7wewtkcgRhfWaUo1PQTEisCSkAky4SyYwMeRp2g3wSr6Do88o99RbKL5fxTW13L1bnecwXKEb4",
  "key13": "5P96t266q3G9o1vxCczAFpsEyanCY51ZrSeD169zVzW4ND9ku9nquQmFMS8fWKUdsw6n4DFF858iMKgMpL6ETbmN",
  "key14": "ipFbDZvFQmBibbggL2VmnUkh7Rmp5gAhKVo2MSKTHXV4Yn8hUPHqi5tc3W6gADB3xbVkDwj2vwXBKHLemg35Evi",
  "key15": "3py5XFi2C3PThrzuzWzAh8X5kQpRT26UUYFmJXrH2qUCtgKQVZmQ1XLw64yMQ7f3PH5MfCjXVPPcMQJz6vkKp3E7",
  "key16": "KYZHZmwXMg66n54ewTeDwpv4NA9PqLguM6RziUWJQexKnTwYbhBUZHg2daTjGBVghgp5B2g1ueM9hqoZt4vuvLL",
  "key17": "5UEJhFRBrariHrkeqPyhMoNzKniLcUhXnBNKkBCCLKozMQvom8QdWjMtB1edjTi3qtYEnAaty4sw29xtqVNoBiu7",
  "key18": "5q3WMabC7FN8ds4SFfCeJAXK2eDVNv3j4tshbPBXU25YBv48xuqHuiwmZaKpZqC44igwmL6qr6RDfd27msdH5trq",
  "key19": "3nsF4fYam5KoMuhy3LYC8SkKcAQZ1q8BdssHifjm6bKBVK7f75NriWCZZ4USkGfXE5xg5iteUfGrkscEPYAPV3nL",
  "key20": "4P4e6jTTHYodfhxMzNUDgfjKvwGvWhZdiQnUMQKCvsurvzyyRvVwbWYqgQTR77r8yH9rbauQ35MupVc1kqAyCr2o",
  "key21": "4GnJSxJ4j4xJUmeB7VjF6RSmnZSyrf7g4m2RdEHp8GjHn5UNyKaBvsPPJG3At6sSPphbm4SXeSwyMReuFTkaMz4b",
  "key22": "51cvX6uLebmjhifgHpp2H2yywxvGxNpCJNhsSRWby75iDufc3tWGDqqbJArZ6PVby9b7WzHextv9iJxhU7P4Durc",
  "key23": "2ZTfWtbBz5vSrumadxLDaf2XqnWdJ7uiJfy1c5erhf4dRfqdbSLhNRhAWZLi6P6ZFmjEzBKQf3AVwPRScafhxYN2",
  "key24": "3cTSSNjW5QEcZNLgACJpWZ3k9hnrwCxzizQMPPAGiXiJ7eQgEjpdyFEpfN5Jp6DvzATg3JUh8shvz1vZBvR7udoe",
  "key25": "3Tj8daSf96pvLgSWa51f7rZgANkULGzsxLp4eoCJLt7ZY2tkzodTQT8knomBjw5hiyVM7tMsxWrvPpS7R5saDkMh",
  "key26": "4m2h2soNM9NtMQeVd7TY5CcmRXYK7ZY5FqF2k1pgwnZCu8Cp2ASDYo1xJf7HAQQQLK5q1wqTzjcHY9F1krC2yAuh",
  "key27": "wHJxM8fKDX9SDHPiJzSiSBPeaKbBsLeyJtH7PPX4xFHqVYhvzLSCiNtQ9Lhs71LxgTQ42NmCxBNVRyKWnNe25ZE",
  "key28": "2TukinDcmsw1A8K3sfiHFBJSpAYkQurub4SPjT8h3MVX97n9EKDqTfke3mxSJJE1YuWBHx8mJJp6acpyDsgWZpWY",
  "key29": "4kn5NowdawxwzuDVQiDbU1tWTYcNe8j5chymHSNetb4FaatokimFJaZKAs9xHaRtdaPvaeTgRsjp133bMixsvC1F"
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
