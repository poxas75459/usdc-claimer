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
    "4SLhcVfGkXZeKpJjUmjHXadnG2M58ejeJH94yZDgZ9RLGu2vHqr6wBAa2WrpoEQKyLdg1yHtFyb98vrtZJQc5DjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9nsm77sq6fyanjqR7Gyk9e3ErVmwy7Nw1MezytLVcra8kEJUtmYjaPtoLNN8L8WWPT6cEX41xdNiAZsQcD7h58",
  "key1": "42TTv3NDTz6ZKj8FQZe2XQZH6Ui44yEHZ537Nnk7rsvzPLH1JPwTvmNJRyQ6RV7VwE3wJkDh2EyE7Jgx8HcQTZu",
  "key2": "kpSAEzwZQMCX46z7E8BBYCjvcKxHV48tBNaWjmtKeBKVFX4jhcdqSDPfJ8xSPAekPkzYieVQvLXXRUm2fEq52KR",
  "key3": "2xQqoL81rJFBx8WmDSKtygJnVJxT53852gH5BBZhDsqR3iastfgu6chFJYAvcgKdQ9UrwBhhmLJdf4TVC1WQsJtg",
  "key4": "4sWixhfdPqJvyskNMZUXEMS6GfAKJsXzfgoWEJbAcdXGq1syFDZ76USzSGMjfbQRtHeYjSebe9azc1FYGz3DXZBA",
  "key5": "3bSqdH46G6UYk1mQPuhZBxec3NzbFAhsKdDoqpWStYbUkPZteQLxxCA6XUL5gfFizBVXzU9dGwi7qiZm7LK9TbQD",
  "key6": "3yFhJ4kkkZZuAebRmsP6rRHLzkMRZFnDAJFx2tTtKyPRihhUYucpMwVAUD6TaQDZQLnoVuffuAdic4eUyZr3Yxeu",
  "key7": "mQhhKqvqnFWVLgrhFvKRfmVyv8YwT1r4rXYWVbN8vZBVdvjcyBFHe3YneK2H28wu9mykEmNhLkq6FsgBNfkVyT5",
  "key8": "2RX9d8daw9B7fmeHLPj4BnyxfC7fuTkkeLJzfZz35gTXredwsfknZzemrxzGN73roAWSB3QdLXMKMRFzn4eCZ14m",
  "key9": "4Qku7o58TsqaKWAQY89qzYvTRiLR79ifcVoiB93WTNhLNBjNQcmQepTTsGNAsp4ZUFQXKGU5ukXjfYe4XUgBYQ6i",
  "key10": "H63U1v3rVgkQvziUbjun73K77ZiuiXAebRwRauydtZ7WF5HZ8vVvUbeXYJaGABTrAZCEbQPTczqujcar4kVgDkE",
  "key11": "5TGHNTJ5qfvZwcW9pcCPEMiaC4XaEHg27sbZmW6kNUcP7qAiz4Hbnfb7kMGXKr4JdLSDocmXDKPv9YmntqbXGm1S",
  "key12": "2WrVbggM19hQYSXDPX5WaGsBChNNyZdqvKLd7HZPJvMzYzx2chi5fNTAX2QCESJDA1WrsuA8FCe5HyzN5NhyotdH",
  "key13": "4wZsiLvJMYVZtMnV8ZHVg6LrQYHRPbjwC545G7s6KCFYzFnMwKHgFp3UERhkrct6bLaD4fwUw5HFjzEfLqJzr6pH",
  "key14": "4PpgbdqhSSwdZQHTWE9m3f8QzQdQReiWQBnKDTQ31EhRaEpMPCeV4FsZA3C6tNnCdvbUdtp7tHT63zYxwiWGQZqh",
  "key15": "3u7D8GqkKZrBEKV8WMRrpc1hHa7kkfcJbxwt3UhXWjwrderCoLAjsyAm8BZXgYYAoevrKJjSif6ESZBRsDZGVrAU",
  "key16": "66r8m69gefWNbNenhRGbtsPLznvRQEjpHNNzxus4kienCvkBjncYwMAnCx3KUaeYJUmuXZLEv6a2jcLSBXrcgQT2",
  "key17": "1JuNinU7nGS3jLK8xuw4XzA5BQWNsMVwzzhxMLhNYDgWCS33yVLK2oQUKvzGJwgtJxhXRvHRYPEnST3PPGnUXi2",
  "key18": "2d2ek8UD5KTbnb3cUfGsHNL6zKv7ti7A2YkM39tcxvZ4ZPDrDogYuKUSfzuxBpDoboVoEcyWR2TE7aS4ykuhvHVG",
  "key19": "A7DzNc3nFSBxJzBd3LVt5QVmU8JCmXErXx5M3ZiKTAnJKQqXovrrKhZtCMDkrkePi9rxiBU5xL6HKzhaYZbnawp",
  "key20": "gW1L63r4A7yQq1VkiLZpZTNtpzYJe2afmapw2XgGkmv5ZQhGCBQVKGELNcNXHkqWTCvMaLv2mkqiPnqZEHXCySm",
  "key21": "SsavypqLVoKgf9ff1m2hhVG3rVQme2XPPjQpUYEWJkpyzkCL1CzvC6tLkTJUip25arho4YQuDqgTAJepsMmNDkL",
  "key22": "5Evq6upYSpf5Uk4nujmRi2nA12fErhUCH5tbLoCfJ2gfuPeHYnGDnXkxEeGU9W9CmmTxYagrJLWwiMRb47sMwUa4",
  "key23": "4ngrZACp83WiwuNQNLQ8KKUovTXm7PgeYxNw7vo5TgfaCupdKxP7ZXhVbS1MHtCgWu8EVRCy7RPBeeJNdErBVswS",
  "key24": "2i2oHcwGGxJknXb72pnMDVS2ZAGnHMFNAGcw34jHbhNAjKXQZE5DeNAPSyzvgCp671L4J1RV3XwoXH6qX99goqYJ",
  "key25": "2EtL8yuwJSg2g132LamWaDCFLsobDsgXYqHnGf9EnXZ7ty3yVoMc9kxq6ggNx2qRAjtaYKoq3HD7fj1U4onh37SY",
  "key26": "K95SrNkhosfKxMxS1Te1TpKFTncPDU45xZXDoGibS1pMKgdr1qr6uVKoSe2UZR5PbDUf6bHmnuvA1mnwLY9x4DQ",
  "key27": "2ktazZoADPQGd1p6p3BDotT6yo6un4K9Fk9BTngHENCZTJ3cUJWA8m9P9yDtbHr2xcHweseeMoSgTrRgK2LpaD7w",
  "key28": "4ma58779gofNrjY6MbKiwByzZFrG3hNt3NPuGjsmr5x4upfTZJQoGaQXER9uQ1PQVdGxesDohMXhZHpACMEd8CvZ",
  "key29": "5UEN4MdX9krQR84uB5Pra8R7e27h8y9PDYhSxDc3eF7kAP4SNsjP99KFuofCtWDSv7oLYY1sieenNLvPjx2kw7RX",
  "key30": "3qHqVVTrdruGuRBnjL2CbkE6nWTQwMpYa2kWunCtN7v8TCkz9mH8sgonffr4kVfRbJBn9CyCvj7EeqgANgGSs3Kx",
  "key31": "59Bni9kDXGdTaKoEwD4BWyqGjBLf1JF5J1f1prymab8DnLuTwHPyt7hNQqzjHbj4P6LxbjBNmHC8iLTYhTGcYkNm",
  "key32": "LEzQh2nkwCKNeZNu3obb5mgfpq7HbBrqx3AKdD9bEbu2GWqf54vGNcx1ficPhVBdJzf7zyudxtPYFt4AF3re3Sy",
  "key33": "4UWVJ9Q4C1QUjuZJq8D9wp9gwHSvzVsTnZkjFhPrXhqcgKHzCuPTH1a3EGpDJVX1V1hKunSdgV1hoCDQ87vrXDav",
  "key34": "5EvSQ53zt2yf912QNGvm48m645Lm2aJ5YxjRdxybkkiGmGQ5y9gBcMt5EwV1nBjjKj4m1BoCnGBNdei88Qetr8E8"
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
