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
    "3y8uQym9Ftp87q5aLpce2A7kCabm5GUkKsCsRJXxR4TRsQzPaSgZEGnZnbz6Yq7CNycZHK4bSvx8pgQDpZ1zxUdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X9fuCZmb2X9iEBxVDrD583M4H1a5kj5c7j78dcxEneAC1Kd4cVdiVFN85zBehmhy2hfBnsYk6Y5q9xvsVwgXnw9",
  "key1": "3d1KmdfLSNvbtMMSogZoZibNWfhrNnQfLX9EoZ2KEFkGrJDCpC21Kn6feL5P34a8J4YWpgRtGJpMXT9Xa2D4S6hH",
  "key2": "evX7Z9dTMFQGABCMz6yjHJM8jAJGLbZNZDecgWn7He4zdypjvfrM9CWq6NTuuM2v5g4kH9vxBVdeeCvCh2p8UtE",
  "key3": "36i2k63izYF9Md5WSvCLWy3ohyJLsJDHkjgsbVsVBp7sfQdKao2jdRJd9YCaq4MCwiZe83rn5o8vRCzdJEmPUhfs",
  "key4": "5cSL7wzxtm4MLJiDXBpVKc54ws5VFAziXKuMJnL5yooHWZyNCNk1PJvb2SQP1Wdi3BYcyBzoEYvNUPwPB2zpyGyZ",
  "key5": "4tudzn9DRo8XsSQ3xNWwztc6bsYcRSRgFQ3KXFD9mAoNZJhWjU2Z9gv8miHC9EpRVrGYcEGHyd5ZpE4ZNFutDerp",
  "key6": "vrFZP4QDVxRtFkMwvhJA1X5S57WnZMtz7MLqk1MvdrfoPbsgrCMuuxZ4mL6xqLfKAbUp6a2KCV4UuMctqtf7TtA",
  "key7": "62rhgZhcPCAdBLTSevmeNDZgV7P4zHAwHamsYsAcV3EuVkM4aM6V52tLfkLcusssG374gMzzzo7p26hw8KNEccjq",
  "key8": "raY64dwPZWmidaEuzygRsbp7e8MYZFrRQJQghWJy7KCGxGfsA3XfCKbofcGiszgtp5ccrTKk5JqwibTJA5t1Y2B",
  "key9": "4gP7FfvT9t554bmPePwebU9JtDbYJ3YyhhY4QdmJi5cZfTrbCn1gYJSeaTqPs8CVTRTP7bUxFbMn3FndUgmo4xuS",
  "key10": "f2YojDpEezVwBAzC5cdLK2bp3ADa78CUFGvmjFRtQz7XWQNW9wEiQh4Bs4crjtte6tCRQca5v1Z4Bn7to5Zs7Pz",
  "key11": "5HcxCsMoig4L3EfZJ8VwYGXtVqbjXarCahhtqn1M76F6xazxkjcdCAqT8pwLox8hRyrcQGMMYxNdn6FRg7XKfvdk",
  "key12": "2UiCdPi3zdftQUJ5XRMQt7qoNE7HLeGi7TUtmZJb3nXpF2fCoNP64VxKyGu3WcTHhD8AtdKYYpfYx3tL6yBrpvL5",
  "key13": "5JUfguB6ibG2gmuM4Ushk95w7DQNjvGPBy4zwjWRK3EpocUasnU7BKnWjjXbSrcZfC1esP8PJQYnzSXqZzAo6MtX",
  "key14": "22EcFXZqRt8v7C1B4PdRSrnNdF72t8kS4HoGA2QhLyE8KFXn4oJd46vSSVnxCFJNs5i4AfsW7ATAkL86PeMGer52",
  "key15": "4V8ynN43daDYsm1XtsTyhoaBP2LPi7X5JC9U4wFRQtHRqkCyNBbXKJwSEJWiKP2V6ojDn7yo8QVzKCMyHTMFypLT",
  "key16": "55WnvF3esFCcUpdQ8b32vX8gZqMQnQx9kZZQtrHg4tgMDxHdU5ApcLfRxuA9Y539Kgo85ApqU8Cdgh5E6EntE2k3",
  "key17": "Z4WWLWU9HZNQd314BJNDwbT1at5V2nabewy3Ybrzd9Y1FibQKjWpHtw3zaSFJ1rK89r2dy7wtv71oqfGsjbau8d",
  "key18": "2j65817Ex88fe9chbLLzmeCj3SHc27hNsMYbGPNNmVn7LP8g6SSt95AZJMuDG5YHhRMVRJ7ghi5fbvSnX9z6Zoew",
  "key19": "5dwD7PhgP6VPHVMMSo9T9DKXPVU4AZzESVZpjtZTBC2GniFaXDtPyzTSo1a1KnBhcWY4EJ5mTPcmKeBmnKv4a56q",
  "key20": "34P6fGBYccfrWsWJnpfGGCHiQ7Bh7fDueh1KT5ZRovJVQYuUboZPm8NRFajFhAMmpbCTTVv1eiqUKmDBQhJb3795",
  "key21": "e8R5X3GRsFW3GbQJBDzMQqSKvE6uiaK2DtxoCAw28gTjSAerAS53ewb4MTLTLH7x81UUqYk84HXpqqH7EKkW2zG",
  "key22": "5SJVBaZ7GPQ2yxFj3jfrfDU4n5DKfhUYTzoRvAax63ztzWkaND92toy1mxREZ23tjCKpC6XEBxmGz5UHDZ3yqbED",
  "key23": "59rnp5fxTFJ5q9W57PPnAVUVVGfQJ6uDpRcngT8jHo5UPSdCZWEDRJx52ki6kgsMkcHM8x9Dj6FwJzjEEgwDcsbg",
  "key24": "2CnZroQVoGJf4JSDNCKu1B7Gi2UP2JucWEmUvCgRbXq9mQMvcL1644iNwdjcz5ztikjTHCvMez9joU6HJgPUZKqB",
  "key25": "4pKyYajXumV7ajT2Q7rXpzMpzyvRyKEPMJjeSRrYSt575QbigPwQYWiZZUg9kTQtQrD8yrKw25P7rXfKUSgzMCgN",
  "key26": "3g2S1QGMkGY2LnDjoBBb44oedXN3yv8VqccKGyZbC3XV5h9tV8HyMhyuksn5fjhduMCcToEAEfrKvMxXjQVALrvf",
  "key27": "2wXDPGnKGgUW9BFfv3PCpzoak2meiyBfysug1NeuP4tgWTkEABWp4m2eWpXixSojT9DzkQX9hRGR1cwLc2XnEhdX",
  "key28": "c9ZAZN2W3MkNzFZmpr3wNV55UqPQqQjcQmBR8K7TASBC1gyvusAPBCnjcekJ8hsJMteaX6jJL4PkuTRvT6jW84f",
  "key29": "3xjeUz5WQacLk9DszxLZAjycQmUqucn8jDzkpt7mMP3b5jHkfxaTkfcLMS9WhzWGCw9jP7742DQfkgbfqJXh6sqq",
  "key30": "5CqzDiXiFD77Ek4T3ZZj6PnQUWXN9xQ3ECwv2CbuDeyLS4LiSoUmx3nFYx9VNDo8BZw4S6Kw2ZePtRJ15jLCDoEv"
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
