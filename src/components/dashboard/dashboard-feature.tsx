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
    "ZZMvuaDQweuei9SYXKSfcT5vPhNqsk5vqrbRFJ7meD7uDcjVUWGvwZKHXG2afLNieRtkxouuyFnrRgqL6Vkj2BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BYV3sM48Wn61CpZPuSXmej9cXAmUktaxjUZYwFNxX6um3aUhp5LF5zWGQx1mjYxQ2dvRCzKw5gdBmxnQ8zhZsHT",
  "key1": "C2WK7qRUK7SvxzPJaE539bPbBEbk9zREnuV39erTyrDefxbyKENr5uoc5tn4e9cS78cS8ra1znGWaHVMyVW8MoS",
  "key2": "4hdYUyX7pbzveBXPMVKMYj6Bh6V6jg19EkGrXfu38o3bxkQT3mcFXb1sRQVXApKm8gpL7RYi89hFYktSKHxBX92E",
  "key3": "2eYYLEGx1Z8oVYr2FpQ2r2NBkjiU77e5JvghdnukNQ3sdf18cP7BbpEMkypgb99SvPct6VcBqV24vGbyV6AAJXsn",
  "key4": "61PXzCc7Wy7dL4HCQ5RJHXAbdMULzCJkSkeJJ8trMtghW7zeHA4pMro5FmqTWPjXXYsgJmFqK7fFHxnah5QMx9ZQ",
  "key5": "3za4rzfc8r4qxuYxTMCruxQMvejjVyPJ7yK9NZEYSfeaCwmxakYA8NcUDYTwdVWZMXZWKiAce61nNaoF7vJjRuMU",
  "key6": "54SAFh72HuTbESh8uQzJcPQpUoEMYvskkyTSjcU1KUFcgBVkmtm1xHYbLvjBRJ1mwRK2ATdAKsJLkesbZtThnP1H",
  "key7": "5nQd3RBGYKZVDLbYmmeJdHfEqCZvTnvwnpcmNq7y9FogJSvdScTVcgoduKEqoG6Vv2yPvX9P5vqZBnUxv73BsuWU",
  "key8": "4pnMwLWDy6vuiX3vobu5psbPM7LDqyBVTt2JYhxKm3vQvRTKFReUqkWUmBtDPkhTLzbCDVd9viWKzrRSWFpMyeco",
  "key9": "9chRg1MJqtuaEFwAztTW5kByoeXcKQtqq552rnCePAHHfTXAeQbQzwB9Ybtft4opUkVV6XdizTZHKMNkFkvSzyM",
  "key10": "2yX79Ukabtoj3rtV3F1QC2K8bUyixmMJSy8bdFeoS7dBDG2xa8Y8XrBzy5vjK7nFiN6GzLqmJfvaHgvqPHgb4Rpf",
  "key11": "3fqCRtbKbdZWyNCEMrFgKfmmbMqRemGFvkeUXw9jeFuT3qN7G924shg7DeVRnCqSYsKSyzaacsFLcHg9tmaLznPA",
  "key12": "3AqpCrgDZK4W4rG2vgx3XarufYoRxH5W2u6JFRU34pynYfAdzVEGs8pJ8BMMSv7aVo2XxMNktAUkwDGkb6kcpJM1",
  "key13": "2D7krZeE4vrucXyjRumRyH8AT6GJ6j7Bm8hWNeGzkkQd6BweKx1uFtdwzpZuroZKaM2i8RmRAGUehNZytgPrqyGK",
  "key14": "NhwEkp1ZSHXyCi9fyTcBNNGfwvk461Drav9iURo4o53HEa5bP3CWP9qDN3UrQi7vWF1tAUZPNRmWPhKAqFHVRUX",
  "key15": "znbp4QKRcbnaFRxWymgwWyYEsqAMWpdxn3og4Xpu6QWN5AySpdpKVU3aBpKYtfNa2b9bajtqw8jvWYU9qh45imH",
  "key16": "56uucxffckeh6CRntbxfEwMpLvPMpA863NJzXzhxfsH5cybyQCPejiTZe4A5QjjhtyWcMumrN8aApZzom8yo5dvS",
  "key17": "4SuitvEXC6XyUx9MpJ1pPQoi1yjz1Se5cvGjY6ejScvFGgUhMy8NUkzs2FBoiHsjxDcy3nQkFu3vk3VTrrhdiGQN",
  "key18": "4w9dEcgv9qvBrbzDzXx4CEFNqy3A7yrgHMi938bvoBJUckoTEwBrUjGdftYqVLCNtevNQdE47BUHiarMi57MgNx2",
  "key19": "3CzgdLbZsgegeqQQCoemxj8ncbEHdoYTmwYBhBKUYgjZAeQXVastJh5DdhJmVNUCbWzmJz2UjGx13bL37P3VtVk1",
  "key20": "5qdNjAym9EE3gnbStSL4jZZQKdXXVSUxGFGL8REsQLpnwEyo91Zns694AjcYXigrnLBizm7VJ8ZByAEyYTrZM1nD",
  "key21": "5a4BmPnhoYBRmPDRSX92dFfYGaHfbx6soaPXp3Kw3T8gyU6DPV4XJWfpw8cHmg8UUxhNdJWu27NZUZM3V9ChDJMD",
  "key22": "3FFuCv5KrCTBwfryu7jei1SvGF9UEEF2Wk8mWAEwXshhQ21iGGXVrGfKbtabhkMGQFRWJ2bHNVx3tbBDUQiTocYY",
  "key23": "2LvUxgr9ipp1viVaP8BySz345SDR7HmP34MPCHFWKDvwAm5acjbXgDiQmpwnh445co2HkLWLDngWpxZZzhXyu4Tr",
  "key24": "44K8BeUfXZQk42Jr4WH5T2D3Luj7MSMnVeECQd9y5a6PkSTsQqzh2Dq9rW531kg5bryjnGnhbHTvsgkWRdQcK1Kf",
  "key25": "5zRFZrqBVvBeGwQChr62g83PpvNmA6S6f7qMENXWrqj9TiCHGm4R591BaqdpWRRVwS6zycuoSnDR4jPjBESYhPBK",
  "key26": "3ffFvNdjjirF1f1k2NJDndU6y3YuBSsZr7Y5eYZUwTonPrSPSuVyrSfnpSHKLFPnqLRgsZDoyF5HCdhRQwvoGaTK",
  "key27": "66SPKJeGTiR7nHWgyAVZyNKfLGS4MtLMBBb74f8vUKq37NN1zYYkE3rtfjgGRYnnXttU1TwXPDt9S1XooskV7zgX",
  "key28": "2nVAZYEAmqNGnEf8hVH6o6yVDabi5vhRDwHRcxdjcDULYeaRxcqGQAJAhJxtHnfq9K3PbkfyoFW2DBpRWxaSEqzS",
  "key29": "25ryX4yWDtcYQJDLT76XNH1mHRjMmtv2sPzc3k3vzA51JxkqWsoPYSYue3qisdDjapgCMeSvRz4dMpW8xVYAe8vE",
  "key30": "15iW7QJQXFrgz6NXY4T2849M9UY3kaMea86BpErpdP3zi5CYyWKhJ4Ab1rFk7ob9vER1bvosyD6teAW9CZYhSDQ",
  "key31": "2kzwX516SdKpB5dAC8HSiDhotgsykBV5fR4aRMLLbUzv7sCtDE4aWUMFAm9eAzMivpMTmAM66i7J129Ec5H1BAhT",
  "key32": "3zpaMD6mAuAX8sktdtWJQTnPffdaWGU4eXtafRuwLUeQ9H2xqwUPmBudv8w8c5q3tvryHVnpTZkCvRTXgYcp5czn",
  "key33": "4qza7xf93jtkJUxBzpEUD2hgJSGqf3UQNyjp6TUSJD94f1KCqBJ5WMtNtP6RP8Tsnc67zdmyw6cEbXUVdkhFZrJi",
  "key34": "58zWjkgk52a94jvVPKCj6ooTxNBN5bSUWxfkgU3iaBjnnqjAaAVrDMEWWtfLkrmB5XWxwZkTdkKoMAY8GJgAQkFx"
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
