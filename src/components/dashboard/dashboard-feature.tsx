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
    "48XcRXeg68SvDgnYE9fVvLrMWiyeGZmy9comJeexNTVHiqzj6ZMfDGtszvpRPGZCqs4XmsfV548eAM2ZBsu5HEwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d79TNPbrdVABCS26q2NZAn44rds9Uahbm2YARogbVeSbXsutednqVDTxPvVvddwZtPqePSEQxDJoUnuZzbCC323",
  "key1": "4F49mS9EyDUVY1mqxpJLqAfnHXiBXbYtTdDajayjP9YUcfBzmuVWHyWb6xVzZsfpG5b8w83dPJPxs7xNbJXt3XKN",
  "key2": "37SiFDta3auijGStbB6odD6jHtrASnrXnxcCYb4QbsHXv5Bf7FyPjxy98RTfi75RwvMFhiTbXL1tuHqDn6waNgb6",
  "key3": "5BrqkWCVxe2Gxt2aZtoJcNALX59d2uFTKt7G8h3ScUmqULfSqun813YyxaVYmyoUZmQeCVGPHPz7L6YujUYnJeWt",
  "key4": "597HeqDJKjmbUhnQzCD2ieHSUYjyrqd7JGeLAE7cx9FCXS2QWasX9YTKt7zt1FvWs7NBDfkjtpAqdF8EpXQP31w1",
  "key5": "2usZwMKNK4P7D6WRfu1pzFvD8KwsZWPQrJQLiKubWBQeo1nNeN2VJwuyNG5ErGhCadqh1Wrc3KS6k6eoidmXG8pG",
  "key6": "4LWJowhQEpfEPkEqQPhu8R8N2jQaAv2RthbbYESiRg93KbBHgWM2iyUpnSAotmDETZvsvxyQVNSnFjZBpfw7TDdX",
  "key7": "2qSpiTHgmDyLTMq47LUzEWSBSmJyPHkq73haVZYjYxRXGp3QbzMwTHoMghCw7TbqkdoV3nCZmPGXByj3zQkY53Dp",
  "key8": "63fktA9c4TG5yhjYj7U2BQ87vXc8Wca19EHWDvwm9FdgSQ28BzuQeJGC2h6Ava5GvXFg1h52XNWgg25eW2Z2B4Xo",
  "key9": "2ECU44TDWBPdYbStJqjnhd7cFi1sQTstuzZn8j6347MhHrKrbzTm4XMrRUEemmvrwM5vy5qVYQWUqtTHK5xuHaLv",
  "key10": "3v137BxwXNEpRJ5cMNyUhyerqipCu6XLq94jX6fGBRDvUjaavWsSdF4cMWZoC5osC6Jo98yQEFcw2vz2Skrta6GK",
  "key11": "2C7wnu16fJa18ubWyCQafsT1orMQduvmVEV9CVfLRm3KVVcddt4DknSqEscDCwTyGB1NzHtdNP8tgx5LSmNYL9iu",
  "key12": "3YE7i2qEqvq4qZdE2yqfnmyRCZSHVbvwx8zxyGQfuhd7HA8ZcLMXryPY8snJyxnFziTCz5Y696PoxdpbMqBBdMQn",
  "key13": "Em1cg3DagDJJY5Zn7tnp3ZqX1h9TKaKDNu5SsjNGeJFYqmjycp5hE3GGjZYvwruLz7zsruDjpqNwv9fnSCo9MUj",
  "key14": "5gCSUthNd8AoB8xgjK9atT4pNTkeULEtoz4zPxnJy5a3Nzb65Rgz23FNj9WmX7d2BR5kwk8BELaJqWDUkKcJHAZ7",
  "key15": "5Y9Fur5baVek7pkm2dCDq54gS4NHce2QSNXVmDqJoQLyUotXhKjbgh8Gbcm9Pr3jQfUsbtY8xPtHZz7ExkwAHa9b",
  "key16": "4PjqGYqUg2WgXNJ1p7HZEXaWU59qPJeXnLNb8gTgNYSTqxFPwZMyUnYpDQrQZuGyHuevwMJov6mGjks7Gas5v8h2",
  "key17": "4cQPxLUBtRZdzgck1CCyhU1k8u9VCGzVj84GoMsgmAL47pzwicT2fNk3rWPNYwXJ1TUjJzveN2feodHM3abudSv9",
  "key18": "5XG3qtTMfcy1Fj7FwfwzQFEkCUuHVcafg7AugYCLTXCREPcrMMyT25EKvSVWMWRWD3rxEne5DCU6SQwHv7n8DGuQ",
  "key19": "32LBFuheNDUbgkBNbvvrGR3cuhofXGarusGFHCTLciRPEL5HtVWRfB1AHRwRAWNYRLTzZngA7DiTdQ8scSEft9UM",
  "key20": "51nMYjFGyhaPRjhkxhnDLYUcVrwu72fBazvp3GG6D6rtJTd2WsDbxwYB63ybEiPB1JjmWwTM19DT5jKfiECwL1fx",
  "key21": "pg7aYG4gXjF52WYZNMN8sFxC16ZyH1tV1JvTav6JV2bq2ZesSenKDc1bWuZzms6LG56E2djyptT4uE1SoAKHSw3",
  "key22": "2x74C1KfAWMbnwFkrXCGDqSWuGQrEVddz1tbGcDyCBcjumZKePCtym9BQfsWFe37KBpViNZYssX2mwFxSRjvt73z",
  "key23": "3ntU4kN882dksyoLSB7AsX6RhX7uYCpp3iXuwm1oV7RuhNE4X6PnF6Cjr6RseyHSWfr8cjvQ7ZE2Nuq2nAX2Dvgw",
  "key24": "5Ur62zVXUShrtDKMmH6mRtjm6zcmQpVJSJVRUK3guLJc6ykzGpKjrjGuLQWkf6QuJsWxFJUsaxZxEQ15CL87ySGd",
  "key25": "WHVw9W3GMtdqE5Kdj3VRuYfH4wqmsnRjZYZstrpb1TPoV1HS3SkYB4cEbcQhuWbj8UQDCJt7F8wEvk3Y9k7doQP"
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
