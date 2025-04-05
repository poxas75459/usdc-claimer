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
    "j4tyHU7Tqr3DNRb8mTq2RQABVPvNAyNesBaoL8au855qoDfmApu37SKWqCdm8RV22NMXwzNJYfL2JY7tiqVjQ4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbqhqvQmwuiQdkDj1XmAb1Vv3d7CJv7GxYV8AYL1EpNkYZpecLoPXtUdTpFMpdaexkACma7dQ6UM2C63jM7sWmJ",
  "key1": "4P8p2SJB3B7QfxfRQsE4j2y4dkanpSxG26DnxhsmhWnznx97G7eCHG8AEHaPWgzdLEjHWLT93eKa5JsvYvehfQsE",
  "key2": "4MuD4na967FKLZoCxYQjY42t5obm2UC7SRmqmMtmw3EJDD1U2XzPhaaap1s3VrmQyF3mBepEJEMXZznYG7LZPcTy",
  "key3": "3DNELhXvzwPmF3ZqfKpXEbFxnNDzGYPfurmTDoARfpxGp4UfdWmVLoCgKSsDzgJFewcoqLywWRT25zDZYC6S8tjr",
  "key4": "2jtiz3eULT96k4LodxwKPHnuYFV6oiPUyvhSAChFHpnk72fxRLowiyBFHChDiHYkfoimEfbi8hM7akLfnuiV6Rxd",
  "key5": "2GLA3SqtQ7Y1gqxvg6kikLuptrnsVUGF7mzaHKcQJRjpdHCMYYNmMhwoHDyxd2YfGzg9sx4KqYgX4VefSEWD4Ugz",
  "key6": "5pLMB7hAf726WGvDCycmxskydNmDDU4zz6qgGriYNk6VJgHZhuqVjNnKT42ffPpYuZbgqTPkQPGfaBincE3dx2sS",
  "key7": "3Lba8WRyPewj9KB4KPSwDyJneweaNPXJq39guDafzuGMhRfmcxg9W1eDfrgH9VgKFUWhxCsa4WPKZp5qfRdLCfkg",
  "key8": "3FN6xjQWvqCTVH8LQRHfTkCtDSu29JZGQg7yhRkVXpMaZegPjX2uK5D2jqQZXeMJ6KhDUWhzwTnivztcpFgwcxJJ",
  "key9": "5hvGYe3JVoVk3NMzLnzfQzoM3zLFMDUswAv5sEcGnEwoFJEinZn3cUKp6pVVCvgzDs2tV3wpw7XfaTGMqpjTh1JV",
  "key10": "gEZsHxh3pBgars46bTshytHtLsHnoeTCU2KD1zbLhzUHdUPPX6pYoEKRkWAxgkbx7tn33uvUdZ8yMisGxSZu5eY",
  "key11": "3dnsYwU46AiK4MtootskkUZejoEkXt9nQBgn9LA8QaUixjt9ZonWtLCoWY5S6bH9SKcGARjKVfqmM9gTMFmUgcvc",
  "key12": "3yKdZArDzCLXaH1tfXEJuvpyUEVVDqLC475mrYL6xTeo8jqiXLYtN1HyJELm45aRcWvD32qH4zX2PvJKk4sc1ieP",
  "key13": "4NkRpiR2t4jpDeSGJMVaktnThL1Dg1qEw9Finsx3bFBzDF7MqV3wRdNmuHWcDxSYZ6WXtg6mipsRFLQRotnZ2eS",
  "key14": "4gga6M5EeSCzgCt9A6PZvXomnuZXfGzH6AzyEYMge1A72PydECNxJmmekogQZV6bXpHb327iStfAHnySqpeVHNud",
  "key15": "2JnTwVDCNfY9J7v3xWUVJbpThYczGa7jm8HkwQZurDEkkNA4FuaQk6KzHRzkBpWcA7ZdKvmaPkGoc6xREfAovBRg",
  "key16": "5SzJJ29cWHbVMMPfeZAHkLBbGmgW8pD7rETYU2yE15qPd5SoZiGZYhTJuphTG2k1G6YJ6cWnMGnBGRTnHU9mx7bH",
  "key17": "5vmVPPdE8z9MqVM7rxnDd1cqfjuFtWvspDAnjbEs2oJ8yUGGdXtMsZ5ngLvNsiUHhJVJ3G1Adr6sCXFDSHsHbBYY",
  "key18": "66dzoYFbGn9tGCdS1WzxZoQ4Fazo1sNGK9vdARDyaqCUYr8tQQBsutTjHu24x75UDTM3HX8vK11rZ6mTqSELCSNx",
  "key19": "3CUWVW2jFAmsR4DtUZkRNJSY9LBwToibZvhvgvzJTSJyBJwqeiQX1ueLwaPXjipiSGvH4vPK71QW4p1uYvNF722p",
  "key20": "2WzUCWJ3btT3mpXuB8G4mzxuWXkqMxk552ZG9THfiv9idtdF9YfNk7oZf8JogEk6NYRyRP2A2Fd17Bo2mfat7Szu",
  "key21": "2zjTH3W2EVfqvPwYEzN82s3SwocZHb6tfc29HtNzXHxg5E44m6P6tcA9h8L18N849JaJJDtWJYpes8YmttcNbTvW",
  "key22": "4QWjmBAYB4JAMmJ6FrYxe4jGZpG8RBcVWnAsrTXWYUP1ScBv4Nn9dzLSrjsbxmuykN2y4baEKamNkg9ebabVWfWw",
  "key23": "ScduKVH7BMRhwDbczqornMNyb67dJfbmeGZcFMpqUtx3JXf5HwyqomnzCz9F1K3Jb7ejCwaVXnuAKaUHmVJw1Cb",
  "key24": "pUg6cixX79NdvYc7Q4Ei2ufMWq9fdqoKD9HGCvqbog7MRrQkhrrUn8wv8jzrmYiXpao1yKYyF8MxTY4bVqkCNxi",
  "key25": "4wFZPSAi2FL1ua8fwfnXtMY3yDfuLaK5p312oK6je2sChzcpeVp6xpSEexGGy3Ufb9HhNpgnYrvXg3oGhut9g6UN",
  "key26": "X7cdtJsK87AimXGksYoiVdTfA7UCUj5joNv9yujeRKJmDZ8RDwW7G8qgKk1mHTmGYkQjWvRZAR4tm535oNphu4A"
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
