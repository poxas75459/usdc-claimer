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
    "F58sJcksJ1dAUkDSJMo4iAuz5Fk7xqYWnFcYmHnRC1FK9ZZ2RBLyZBVf9ooeW1vQpU7sN9srDZoYX2QhtBeGYi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qDmkSkrU7Z16gGm9X1z9aActQGRx5Dogymuz6oijUUbq42KWGKhdBsGYnJMBBeFqa5wQX2w5vWW7Gedde6MzWcv",
  "key1": "ZW7eTecSnRszor8fTWBqLWeDBEBLMQsoACn4BqX5nnitNoeN6hdcmJdejELtqEh9qbZS2RhKKK4n8BqHsbaDX63",
  "key2": "3jAcqeWpNpzpjD66jUMhRXuvAXmoqX9rgVLrDCE71xgfYMYcb9uTmCHKWGTSJDbvq7KmivqBdMYnUU7nxxY5ZoPc",
  "key3": "66mXsUyV7kdgw77eXSbR4Puy8FBvuxXBz8CTJWQtwigqACSH6DcKBNcEjd2yipa7KWbP4YYpYjF6mBiRhcqNW2WJ",
  "key4": "2rqTt6H32DLiGAgSQaQGEAgFCVaR7axezR8vhLXPD2DrC8diYs1krVwX91zHAaLiFwXLyaRtkKoacLjSYpVvgGvT",
  "key5": "KLcP1qRupAeSdtbbMhxFGuUWTJau4wiqbXSaPnna9eeTJ6qydeqPuQkHpK4WohsoNkaD98jbGhKXZ35kuk3jxbL",
  "key6": "3opHw1UDkxDWEfHUstuVHwKNF7uokWpGrGbXD2M5ieGP4DMV5U7aDmUsSR9kdko8aPoRWgoHVD8iFcxCVpuTkR26",
  "key7": "2RrtnriGZwncgHAij91tW95x7jxNNAXWeFr1TNX86sPSeuQC8o9FYxxWeyCFm3xRkU7FoB81Fa6CQoFPzbQ2fUNN",
  "key8": "2vgb3jfs8L1SqtNA1YYiRbpPBDhWxQnrVuM7spzgxX1r9grZ7A5BK9KhkqdjBPjyLWNpPHLdZfxupNiLkZ7ZodxC",
  "key9": "3gcQwegxwCEkk1YdzjvQu7TwE1gKyFQZYV4pDkUtk4Ja1298DJZNugSaCPSDsHbpVQSKHbCJMB2eL3wAycXpbMvt",
  "key10": "5DDk6WNapD9iXxctPH6WSGEiJGAnSHvH4yvEDUgzU4CvhwzHYqsvkYJVkHB8YnRgkJZGumiFRcqatn4yvAz8KusT",
  "key11": "5uW77wkTYLexyzfbCcwrAkasJsixnK4DF2Nbrg93vr73Qg9eEBFp2mCfCr9EZfQi3eAgK492YipPnsJW8yFFtWFs",
  "key12": "4YpZ4irhoYV72UC1aF6gukR6M3uJka2Bxay8PRnSRemEmMCHQAC493oadyQNt9pLzUEWazKeFJE5eiGA63tzi3LR",
  "key13": "5KRoRLmbwrpyBBXmNkkYTGFZnM1stMKTFxvZDjbyKfHwHSd33BqFxhpqUyPdmG2AdTzFV4shbaodoKcpqrhA4j3f",
  "key14": "2XzMXYwFoKzxoocBNnJpZ6iYXFHSCpJhEF9Yiq7aTcP1HYHKs5jZrijNghyLZ35LnrFEbBJFRvy1Xk2NerNQdEqM",
  "key15": "4vLremjuZyK23HB6wVPY4wjMmTrzkRMk6Mve6EpbgD2yDQqgpNJrbUiRFmXWGjKK5S47wVttQMvqirGpMsEsEpFX",
  "key16": "5in9jd1z5b6yL1wXHEcw5AjmMmfroUaSeUu7nYy835kwqaaamspHo69BLYiGzkYAhXCvhwvdbm4Fjj5WMEXqzGqc",
  "key17": "Yj64NhsCmGXNNKA37ZrztwPq1jvZztHuUNpC7qHr4vm47L1fDHBVwkDn4YnjFBzvQmJLExw8R6eH19jp8hnEpxm",
  "key18": "5xxBHaEwvYLSCwNwGnWj9cKu9i6vTViRJwBBYEuFYoZu8cP3JUNDR4yEiadUPJR97xFrrHu5pMWnjqqYnuFvrejF",
  "key19": "33g64B63se7bN2p2XDLRweSjhfocEL1dmwKjXB2AQpkpMUB1QGHBNwiYTzBtqeA9JXxGzWhnYSk1k1kteid91WDZ",
  "key20": "46CThYXD8wcgsmf6CjRMaWa8kb47Uxj2kE58kAC2JJXqUfgiqgSqytyiKBFU3ghs6iaMkSPtwYyKU2rwQMDsbg5p",
  "key21": "4HPNtFPgxYHvbCn3KTUdXtGpTW3vNu3eNG9nx2tsMYgYYHsi8ykmTGbUPwxpyuE1zv5jj9TLyU1LoY4wHHzGA658",
  "key22": "3nmC3wxWk9wna44VZ5qRZpTmBm6AjHfRATC94wpiwvUfKhHwXkLEqxAY4ruTadw39QFwHkseedAMZAziHZHQ1FJ1",
  "key23": "3MFkASjqSEQvcSzC9s7YPbDQ3QngWAxRM2TDqS1g5WKL6swQjwQTbNKtHEDUCYDxP9fFhH67MJTZCHmQZG4f3czL",
  "key24": "41AohstJ4NgctMByhruhpmmSoLtiaA2fUDoeTPgv28EmsTxRPBXfGP2Mj5FStw6Bqx5R8EQttyCPyzoqdCju6HFe",
  "key25": "27vRGxB4nT83oHsTPLD6VWtatnjCrsEoGA1E7ujMqVtutufPpoaJS1RhS7tP6kziqFoMH5m6C9ub6cKMk6d1fNTF",
  "key26": "5cu6mkihJ1kKQBjotzJzYCxpZRgscy1pufs1PUGGYcSA7y2EJQPAAcyiJDo3kAFR8WmxwESwc8yRCUzmtejA1imu",
  "key27": "4G9JjLGoqCbovwfrFoHEAT59bvgk6xrBfSou8sTbMceLpxfe3LVuLGYd8Q6XXPmcufs4nmUVSKMyJ1AQWghqCBHZ",
  "key28": "3twt8LGiDz6PT4gxzmAMZToMnLN7qNr5Qo4yDjt3vHHMpVT3dwDLPm7MWHYBY3GYF5FSPWoQCBgUvwS5VisBGVWL",
  "key29": "cHC8T1rFx32CidCcwBwWAZsajKH4AryrKeA5FNXUkGJTHb4reRLFfYNH9bJchYQU9GHVN12UAEBuxH5BA1eBud8"
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
