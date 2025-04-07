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
    "4FPGf8JsiyP8wFoyvyusQPd939H5ECkmiPVDqCY8gWeYWdmU82fN5yxNwjvuwK8go7LYTHMKpZ2QZ3wB3rGzXPhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kvXMmT7UoxPsuYvMjmKZWzSmFvpvD9MtpcWs2gN1pfzeb3Xzmd4VNhcoPHkkExg2bvN9ESJ2enrUmY85SKpYdBh",
  "key1": "4ucLEB8Pv1zZ4sRsWRRmtcLvzw7twRS8wzpYsHMf2kxDjhhgK6AejYF5ZJq7wNJ5SB75wv4S7mfgVynN8xVXnEK",
  "key2": "2ijZFZ9yyfxgHdj7JuGaVAhkVqP7W6Youm63f88QLTk4mMfqxxuMMj69BMABeDxURpAYB1w5eSwqVHRcsS6aXmjK",
  "key3": "2kmFrcgUHUCf8mWcP2PmUrrgsAuSBPRePs6mUYEPyoExkCTmkLnNRjY1rVgshSkxnkbyttuJp1vy1xpnZtp1bpXy",
  "key4": "51Fue2fb6x7FwUxVoV5ixGp1KpcKnk7yMVM5m4emJGqQHwakWgKXyUk4CKxpTyYbpmWnKc7zuFedqu5tWVzp4B2M",
  "key5": "4ZrYDERp189TsuL49EWgVcDxgT9BG8VTcs51vv6dqfdagMAXzWt2gquCUZmQbAtzMh9fTm1oegN8o6W1BqANpDxu",
  "key6": "4JUrqxa3jzSBU3qDMVeo88CmJpJsE7a888zogNm6aGK56dBqcGY8K2QSGmc6zKfR8uBWYJcvSA5WvjoGuPDYWFjv",
  "key7": "jE8RbS3n3vBFLSJLZuM9abFa2Y8UHoMZwyS6xJaY8HLBXjRhadNBvKMVwmtvpb5sEhNeM9i7bzKc29ZVWPWZn5Q",
  "key8": "57j81dsytBcqs3Et9m3arB6T4idRzSJwneayVAzy6oP8D13aZ3TzbjesFJGMQud8XdD4jUnxA1Ex9HhVApsC6KH2",
  "key9": "2LDoW3innhbw2Nwbt1AkN8LELSJAHrhkPm2MdfZFChY2JCtfmeVT5CPUCShQS4rZ9tk9f98sB8kpBtm7ZSjTeNqv",
  "key10": "3dyxyQMPpK8K1jSd3KHuh5NYDYUhknC1H1Brgty3vCKwMpsmzzgxvZPLQDc3KUQZDLLbomBtLpPsc8JJU3fh68zG",
  "key11": "2FWe2Q9jrhyNSnVXEwB48Nk9fsZrx5FkY7aRK4L55gXqPHo7T3ArFdXqDNSFvmDTB8cazVqCdrGSrgv5nP3Ce3kH",
  "key12": "3vrFHdBKdBm1g98nfE4Ar7G2UuKxRh77dQcPNsmq4T35x74Q6DpJmXFY2znNhCKYS8dCFPm6ViKytDAnvG36BQRp",
  "key13": "3jfuVGbsMyeRFoxUa9MC4QfchHgVFakevbMYnrnV9tBmzZwofmjw4CPnp1FmbDVEENnVHvmfQzX6sBWc8qqp6Pm",
  "key14": "2Ct3aj8m9yjuuV4ft3WqDtmzmFBVFzS9srWB5e87CKpX5k24Rak3QmjsCgVQ3vGHyyExKBKq9pVDY7BLcv6kRPiw",
  "key15": "LXrCmZqfsvpJuGzvoiiatXm7xr82xQKxUQDr9BqzXWmknwxBeGWEJHcqY6xuoZ3nJnsFNL2A7ndzpiUqgw5Bkmh",
  "key16": "xpjeNzcem9kNc3YyTBv6erx4G4WDN5FpqqPLxQJd5pXbayTmVUcorHvgkWqu1b8jxpEvhdYRfcaJhFMeWTqRyX7",
  "key17": "4gGGRFcQWwypEx1FdnMsiir4TqzK4Vyymv8NSyb5d8xGTPmsypdyDQZGbqeM7R8HTU7pyoNda3HhdXV3XzGisTDL",
  "key18": "2cvQnr3ohfeMAP7pKDuFH3wcXU7oL3LGdoo9LcAsGh2fQyoajQVUf58DJ7L76T64oVs8GpYP4FkGNSrvMbmKtdXz",
  "key19": "3YqBpnCFh4vzozXmnSLXSJ6B6dT53oKUtWrtU2ykDxrGSCgQViMSiTc2dVippYg4FZRmDs179fSx3Ma7sBUkABFp",
  "key20": "2cMfeKssGq9daX4ihFoSJEN2gnwLSpty3yLW3ZKK1HUcrhu7jw5Z1kphTRGnTbzChfj2EN8aMr6fGo4KbznN4Nfs",
  "key21": "2PWYMoQjEVLmfCBbBZV7KYvVhKrZCjnuc1Po6LLbmc4gwbYJFk9eYqJ6vTCN1gAXnNVEPbaRg8TQwXuxAM2tYUbH",
  "key22": "3e7yqVGWthEwQbvyfp9QL6uV31WMByAiKoQTj3KLZpP3aDc5jyZxQBcbjGy6PvPmf5C1aqWQCrnrx7uSRVu6gJmz",
  "key23": "co8F7rvNjK7nDXVGFFbraUkFRAcY76F4a4wWY3zB38qwuGoxQ83T14c655jTYpimK4wC6vTuZF5MSvdCeA8LUyv",
  "key24": "y6C5UM2F4VV9cRNe532m2icdvBZsniFSdU4UVcsSNDTcNqamVSzb9ERqmDrAv9oAGBeyARJxHsaDiTvj1R7s7f9"
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
