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
    "zuoiWiv73yS2GmSxsH9BLRQFFBLPziu1o543PwUMn1Nv21MeGXUGcuaYMteRZs4Avwie7KR8xKFFmtRs8B5tfth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjkJgLytrvBsE3bxP7GLu37gC52Mgh1Qyi7kE2ToZCnz4Jwf8QxVETrA6mRsrpncbR7qGX615pYLtEQY7EmdACa",
  "key1": "63hhuENQ1nKLuqGRbafRVBJwXYG8PmE4wNaU9zB9EXYmAcD6kzCBirYt7zkS54Keyt9HftpsV6DEKYziVpkm4WAA",
  "key2": "5QKjRmJNJ8TRGPCk5Psg9HTvgna9F1TsrbuThg1PGgZ85ASdPoKZv5QxM7hcmpJxeJHmtKUSxv7momx5eVYRiuk8",
  "key3": "61h1T6Jycco2ToCmVemhGVgjxceU6v6NdK4LMKyYZgLCD1S52DzZTC5Rzbum5Pozs8k6X5UQerscx988uD8iUvBS",
  "key4": "66DT6Ww6HExsPeJUyQoYRUMLaC2sNNmoYEd3K9hXjPbUK46aXB2Yk3Bz6nHZPJ2kNrSt5iZECimKSviNhPe4yW8h",
  "key5": "5wYDCVqfPPccdKAXRqpuyQSBiwckW9A4qu6GLfd32gA2Zm8CBotx5e3uwiKhZJRdLZveBBtshdQeRq2tToAnySdP",
  "key6": "5CGxhJjLYmV3FtrJjZXKX6LrzkgdBiTMjuru1UYBhUSzMiBT4x4Y2WMQ6ShXr1FenQEFqpeEVyxERihhTFPxPjV1",
  "key7": "xywa3GkVHn3giywTpZxiSc7WdSeDpK8ifZGec1nDHF2czt5PKPQuCtZFJ7PWBfQsSHzFmoXNtupCxyykmqmVNPe",
  "key8": "reX5zj8CLYi1zkKaDUB8bnKge6yr5i8QPWTb93rcuWQ8jLiMG8QKwM85xj7svdbC3mt67SZmnfpydh8MSLycm5t",
  "key9": "4h1aK2ygnhRFexxJJ7cKdCFfati1Rxmk7VhxhrP8tH7r2x4isic7up3KjGZSD9opMsjVCkeoeRyb7KgS8YfCQnkT",
  "key10": "4VhHSfdFLvznHsGkdKhLvU3CUewydR9HDih8X143AtNvas25aT6y5i2E9KtAVXDxZSxgDrJ2dw61CcWbdxs51p4W",
  "key11": "2eWN8TuJDc5wuPjFa1kvyE43AtDmSM5XE9MeTx3tWasY7FAnbigsRC9s7gS3xKRMLWvgVxo2ZTsxRuE5KNwoxo79",
  "key12": "21PGkRCyAPSr8vK7iKU2KhdaKpUrmhePkUEPxVb5JAvFbMLyiZpXUmNQFVj9VrSapUGcn5xnX7Kx44LV9emMPr7G",
  "key13": "2jyfxLUkgBartVFn5NUo8sn5egM2STmT5eupL1ZKy4Rjce5AqWsxcUwCu5mEBeFVpk83o4btzP7RACnYMViDnZmw",
  "key14": "WRwbyi2e3NJjT4BQLCc9SLDDsddCpG1KA9FF5WZtH9vQcppYDPs1BaZZ6xb64AH6g1Zi7A3cniNyENoq8mLSmyi",
  "key15": "2ABJVtw65GgCqjMSEEvZR5mPHyY52UyHM248TznCa3J9UrBaua8k6T7Q2vu8MyXvgnNGSHqG7SCWvvFRHKyMjagB",
  "key16": "5WAgxULonKgjHNjYmQBETNgn3LQuQDhPYrCWgCJg3npaibq3onfDWVu6wD7eZ1sfFjLUUS9eptXHWU98SQwVhQyF",
  "key17": "2LhdzZP4FTsVQ2G8LLrM5XZk8wTXmSz1EmApvnksc2p2xUsNZmzxtH125EbsYwYyZTtS5P6ef7EsRwBFLtFdJ88h",
  "key18": "2sh3CUKe73JsF9gQJr8MdDVPcyAtZYEzKhia2eL7HmtHBKLQN1vHy3gi25AscJhiKUwx14n6joy3NgdB46aJ1qUy",
  "key19": "3jXsTLCRPJKt3cfJQwTdf23E2CRsWMdfcBq88WqTFqGPZiRjg7qbK9BTyqZdutxEB4RLPfNCjRnQLgK7eHXCkSbn",
  "key20": "5KQTPhqRmtJDJYsKnR1fkQYvkBCHjx7Z5HKWAVHt5NwbVFmtC8bVJ2TSoCXV3BeSKaUDQTk9u33j1Ti2ugtpkNTL",
  "key21": "WKBXKqYbzWkEXmhzshr2KPgkBE74jAMxzj6EFYK4HQa7oxTFanAAswRsByAFkzf83qXj6SuZLnoL6EAmxwq1uFt",
  "key22": "4oh4N9Xe2sy3y6XoEYwEXCTQStC3kBvor3oLmCk8JVAqVG6rzP33frFCeE5QYqiuiYn3Xhcw2DtYt32GZujxBJjJ",
  "key23": "rf2u2QTBCyz3b39iyGARbF8obacDBsCQBkRUYhinLXUwFzSQhzCsmQTVNJta19Gtn5ZQp8RwTXH5KpeyPdjq1Q1",
  "key24": "4ekZwDp46b6n36jtriWpgSQWu3bamYBJyRX8KZ6Wb63Mz7UFXa7djjytbDV28Vn4UvpntXReKXvj5Qw8623hWmJx",
  "key25": "5QttUEFgBeif2bwgAq9BNqe4Bw37BWYKe2jQ3n8BY4wrEicedubgryyuTJyVGL3RWCUZbuzjaPTgGs1JxPvF3bq1",
  "key26": "3rpyctFxr6CHcxm7nTwreVMQtUg8KMkr98CVCAUnrtEEwT38qP9SgwvPW5NcXfy7YU66LL4DpHiSABSwdTgHp8VY",
  "key27": "4RHZAEvXeTHnoXrhbBR1ifzanztNiHu5fYFYQXWRy4BEXN9VSGjCPBdqB3a9XzLC5mgnWo7adEMtwAkBmWL5DYwf",
  "key28": "D6SsGRjAtX4qBmwcBBpd4qUhSXywKH73ABfcFRpyNcnh42RBw8MPS5iyHXRzsTqbBBZ1zVby6Qqgm5qafA9Hohv",
  "key29": "5YwZHdt8cEmcwtQCaxcHvDafsfby74F8s3zPxoJ8o3VRgELYrdgLr27QJfv6tnV4ZbJ8aMsDYt3drFupTeZhj5Fh",
  "key30": "5Bmbn8p6T57BXNk8EakGHoC6t84drnALrLhvswogQ6cHseivmGSQE2iv2X2LiunebndYd2vEoFA9C5KRV5yVhDpb",
  "key31": "3cNkMeCXaJy6ty7xMK8nJPezPAbwGDre3wP7Dvz9Kf7vz7H2A6donEiNVgZ7sHwczKdau8kTPv2Bx7N6KoJ2Tjep",
  "key32": "5FWJ493MtgQhRieSZFUd1USzhMibHVfDWUzirE5W94F755Nt4aY82w4dzu66saTeJAjCtn8MASU3M6gHGc7f5qa",
  "key33": "2pqFCoqPhpAr5L1JSCXnqh9wo5daZhxjXB5S6jgqbXDQaTdFJ5Cnd9javGZqvMpYYUVGr4uHFcPXruEjUxau94p5",
  "key34": "3o4L9bibcqjqKHtfVcF2YfwW67AJgQ2KpfWyjXaEiD9FxJpXgpkei8W7koA1cid4MRSzd7kVVThyVRdvMHSSLy6C",
  "key35": "5tZcg1F5x8Wvw7UC7euiQHowxY4yNuzMfnHN8Rppn9UYvZvQX7xFwK4ejTuTTDCzo6ZdDxwETcDwPvq5BatQPnYr"
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
