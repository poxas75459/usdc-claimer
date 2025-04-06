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
    "37RuJ8ycGuJu7bjARCpKCCFzQosXa2QCha49XYGNwo2St2z4ZsYerLwUR6fPEq1kD9afovvYeEMNHcVMmzzQ55gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khVcoB7poQt2L6HD1sb36wh6b2r5RxMMx7XudFieHSCjnMrvZLxm2kxEiwzoxLRcWH4RkrzjPGtL8pjNzmfb7LA",
  "key1": "2jRvcYPYNmdY5WrTCWoJSB67JCt1nu7BLwXazw66QvvJu8kH2kHUXywTHShZjqecPaKbR7aMqo9shxDvQjyhinEu",
  "key2": "4r5V6bZmSA3YSUnGFkEy1YY5SPhPMXub6SWpLbnkodHTH87U39rtvG36xBSHnqLMu1SoNK38FeeJYQWmBTF3ibJs",
  "key3": "3Nm23ejW4zuNYyXMnyBpCPSv3JvmpkN6Qt1KanriWaAvXcQm1b9dN8cfR3MJofaarPgdHza4DKoqbPKPfXcHK27o",
  "key4": "3n6y2Ymi8A7tWrQSzHqtpGS5XKpjt7dNhZbu3iJ8uTHMQy4aEfU7bDLed5QSiRC3R9V3btFFmpCxPCyLN1XhduQ",
  "key5": "uogCsaKuySajLVZAEMX7cRHr1FuYFnmZ224Y549RYs7vCUe3rq8TCX8Lb8wWDe6YGVmmDeDvZXk1hmShCrZbdXt",
  "key6": "49sVCE9AULsvxBoCAqEJLtbqSNsEtTGWZLRBjreyEdGNjvJA3B9HNZx4Snwya1iG4iauUnBtPED9nns97nWLXAgV",
  "key7": "3SFTEi2sr7SJbcL7UeGtnqFdaU6G2UbKLPvWhUFmjeRje7T3nPSDRmgRBY8LghGmG3Nhw4tCa55453LQef9joonE",
  "key8": "4v7LouxvJhZg5h3pXkhmXqDChUTX8pnogyUab38FuuTzXooiuT5LjwRt7Fpg8MSmziVXNGt8S6wJ17ZB1JokRrVB",
  "key9": "3QnPkQYQ5WcPYxYc4Uv5ahoaw9Pxgn4euoqmQmTnmsYhP38VWDFjhAJ2XBP9grQ727pJ8YCkSFkbciYCGfFoanu9",
  "key10": "2TYsse4jZvQnYgNDhYvM8dpBe4CYDRptWU5pPKhdPBbS5RaxmZHm9pEa5gWdiNfS62cUYLmc3nLSmdjXGogSdvx2",
  "key11": "3x9BgbC8qn6vg3F5GWJPHGVvWzAJSpNdAFmC2eDqTYznUuNm1hbX1bz4ZCojYPQ5RmfzMoH4WSQdcun8mBuimhYH",
  "key12": "JW8FdwRkseeHqPzifyo5sEeTAxRqPokbK4mq2oqb8PJLtheKXeYELqdvygRRG26hj9r3MTQzuTPTXDu2etLQBrL",
  "key13": "278Y1pcPpFNio6DXZA8FUp2av5TSzzEisgwE2DoCptfxMc42HMvQfKDCUWAdgY1T9wACCo8RTRBdsWrSpeC6h2Uz",
  "key14": "2K4cXyibdrtr2rtmiao6N3FxEd9y1i94rv3dQKp18onmun1KMNh3zVQUvuB4dvgj3YkhUd6wFrtiz1vUgYBoaG5b",
  "key15": "2vpWeo1wrbzxGLqi9fCZoTA8BMsuZoDAqpQbxwBTSEeYerNjuLd1voJWNwxB6y3VyjQiHkU8C3ucaX6n7xDLuQQM",
  "key16": "21Vs2mJctXCuCA3FUjT1ZJCVhZYYbchYEA7HSS33mjYkC7jPsPn9XEDDmgZNryxxCz7GWTDFSS9APcWNPGLCoypy",
  "key17": "4XnfdCT5PRM4eWWTdbJ3Yb86NgWGoMWRsUfCokDH9vPgYPYT54hTvrQVGwLzTQC2QQ9QjBqJxs5jXCKqGFhpUDLA",
  "key18": "5YTvzPBKyJpPJG3XnkiftraSb374UnWoZq3b42o7vdhrHM2VpTLBzTzWxDm7ECyPmth9y873GmAZsqU8eGJUZfM",
  "key19": "4xFMWFL6doEdGbGbsf1RffykWWt5RjYDFCTEgr5T7oWfB3P388Tv23n9pQ7yUUPHp39ZWy2sriVGRx3AQpABKvUX",
  "key20": "oddFvWZ3dvX6Umwr5AULL6d2mVSakYQPpeqANVB8ZSww28EybZZC3WDMSHk8kMYuJVrtjMnoFuvAr5SuDZti9TG",
  "key21": "66fdrTkZ9aHbs4TLoUjs5qPcxgByZEQ8AzKHHaY3tAytJfwnXGWcrMJ5eKm9ZWLY7mA5kiZWhzn9W4mVAvsBEmYz",
  "key22": "sBYBtoQG5wjMYFZJ25iF4fqy8bcUJREZJ85jsqYHCKoVhGo3SYEpqW5guf9QHKXd1FzGJCp6Dp3qnuNzKsWtXNA",
  "key23": "2jxisvFYxPg3D6ELexArFu9tQkrQkkrcg3nuvD8pmNSAjfTWXkpu2LpC7JCtvtyKoDsx1HC3ntspu83NgaTfSnZ4",
  "key24": "4c9g4CTwRNTuhRAyphMWCzGNQX8H8T86NXDeaLoPfNf3gdEXw6CUCpyLPG2GyHwMShn2HHs3FQ3rUfTKgQa2PbZf",
  "key25": "5MopP3GRDSGbLbzLEHdvjang1e9Zvm3w1GUuUDX4NCQpWdbxoynKCvhNMAUAwgjfLxDhYEzUzrT7kFjTJxPgMo6q",
  "key26": "5C1DMu7aBMXWGz2Xpz9YMNgpeSGWHycjZ1AG5B5sgnXrcRiRPR9VjA2o8D5cN3u9E27GCmNWKVfQaWt8ysZrKTvR",
  "key27": "3YvYSfVbBswpfC41hqyLtLZj6AgmrGR5e3t5r1WJzRRhZAvvs1UpuHvZydDLQjJhDQ8fMPU1kmLeGn9LFF3WdVC3",
  "key28": "4VDHq88cS8brNUCKbHvbqcLYJQLU6w3FdhqjVFsao6BkFDEmBZUgArEsL1PCU8gSUY8Nkzq6TmVZbJ171uxakJ4i",
  "key29": "3ME1QtmQrekSZePhkG1ARYY9JnWZ8M6gUFKS1UkZsKykvPRkKiyFjsNSyZ2zLzDUqTEUYRmCw34Ps7cznthCcd14",
  "key30": "54F2WcopKkpc9PSkSQz8h59gm3TpJiaNeEyz3uAFr9HSzaqzchbL5FYFeE6sF5ZpD4HAZq6S5k9WfzhnkFttgbvP",
  "key31": "2j8nHTJkzNe9RiwkWVVbLGoFXneFW9qayKZX2GJ4TCuxVucH7Ck1uRoGUf7mNzLQuhPjFNSJQK6Ui3Md4TBHBPHK",
  "key32": "4QrDjYvcoiaaG8sZYNR6mL3bLgcvEP45czw8JqvQC2WkejQw4oywPoHXPeuQnKJYefC9b3NCAcSLKJThN2KCGTYS",
  "key33": "4bjvFdTSeQ8UaKp2kbZBqjkCUG1YKoJzFeqz84zYfsD9T6NTpPAAxSMPjggwipRb7ZWag6iHG1DRTaJLD6329Jh7"
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
