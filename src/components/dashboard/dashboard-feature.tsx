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
    "5VWBKZJsDVsX7AZmGDF2cLRjgykNpofFjQVbvA1iU8EFZ3fikUCX8gY6u3C9ZvNpcRKQ9Nbear6D8M3kt1Djc5tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SLSefBSxPKVugUiKL5g5sB9UroVwkW11kxfZNHMxX6obw2U4rjFKPhwRJjsAL9mdN4W7vvcEPT4VgX3tbfK9XJv",
  "key1": "5wFQJdrXqenwD5dCtbugMqCdLntw7sscmLszvuSH58gDLo1Jc8AvEVpziapFok2c2FCnsXfZDTkxz1vxghDRYGQp",
  "key2": "4LErBkbGdAGNCd3TzDrttEHjC5aW12UUf5CCViJTkM8rFobkUqV94EiSNvRXwVnFinYVrPQ7BYJ2cMPRmTsN3zk6",
  "key3": "26HK73acxX9eXcCm4dEW2STmhVnraXbvsUReY6bWG8TzFL648hstDsF1dwApJgpeoqzrHZ7Tr62v1x3zeGkVSWck",
  "key4": "5ViRAr5m6Str68C5Lr5AAZG6APVveBFnaBMiqkYpNsCb1o8CMPrby4Lyxo9Xp9K7DPho9Y9DrGFZCwhenvqkMy2Q",
  "key5": "2cJ8wVjHWKxhVLqgemPHzdSnfSsfkcFuSMgbqZxaFnpQRZhrCXve1a7uX8d4KkbPH5U1VgY2MMzZfWKhL7Pbj9Xq",
  "key6": "5uTan5MLfHyPN9m2cb7g17LNdejAR42EdE9RVwBkHAvsHkWJCDybiEau46si9dvGZeABkxyRv7Tf7yeSGfQbenWN",
  "key7": "2peEgPQNfhFsKf4qgQNEHndtbYDaXxurpefb1Woe49GCw6DNEvwTXAVBcSsw8gzU9huB7S6GsdycezseBj9xendP",
  "key8": "Bx611R5QsD6kxEk6GZu8iWq7zpwxxaKGLA5vGnFtgGYJpy3gJYdNkdXzap2kQG9bo3KkWeSyVvkjxRMsnXPr2Qs",
  "key9": "27rAhSPSdLS6SdQZAa1o5nAQByE6P4tYQ52hrbonwreeDk8DvP2USVphw3nJU686gDgcNszESKrKM9M1M5FygfUU",
  "key10": "4rvHAd2e5Nm4BWNnbjkGM1dC2g31YEsyZHNFMqFbPJege6kQTCE2VHNozueKBZjDmzx6F8AmQ4CdQYQvpEkmAfuu",
  "key11": "5BphUXeAwGtsgEnLcGpM8UJeg4Ap1qTxwWP9rY9mBsLL4ekSF7XG2g4Rh8ocr43Uc5B3bamv16JLfUhb1Crkkx1u",
  "key12": "353VjTr9BqQiLgh17zDXkRUWL8qB6V42shcNJyq3YVQjFngkzkLYVEoKLx71TYk44DDBWjyWkb1CVMePvLgfKeHd",
  "key13": "2pPvT9JynVCriXuEzMTmc7rJavfCfJS4DApvNyHXkwEwsAyLZVvF8Soasr8K4Bv3ZBX6KKhRiG4aFtQDxV3nZWoz",
  "key14": "5BC7iwon29s376rTQzhxcupWTYQi68Wu9RYzR7dnLdFGqRKXqfHyefYakz93sJ1gU55kSRu3D1SF92yjW4tv3QDR",
  "key15": "5ReJkM2hRvF2FyeGXMSTYV1NVByVBkVB87L8soAmEQ3eUKX3N5F5qyW4DtGkEP5iv8jQXG6P9JEqAkaqumgz4o6T",
  "key16": "tFy97ddNbSzQ2UZuukbwrQpTJrp4chf7umVLv2vS4xPepMLGN3Zdi2KmezbQCqDMai77mLB36PYZGo2i1BzHzKG",
  "key17": "2jCFYvLnmwoEHDzogQRn4uc3cZL9BbyWg8VfHp7MPLVN6cMTSFkYfbH5M56MDfw8Bq9sX5bDo64kDMqgdaUvC55y",
  "key18": "26T3W94ZS95XDxJWRdGiuo3QXgeSJBdEioRy4bVL8kizbZQyiz5GFhUrSjiKyRUUSbUxF8zMZyYmZy6VV4Bz7bJG",
  "key19": "5zWjALeBJ7FkeMmgh4TKWVxE2kG8LumGsawukdzahyJwp94dhPBi4sV2heMV5zAciiJfVCc6ytoMhQ6NBHR5K8NZ",
  "key20": "3QeuzQDK3MPpHVxoJVWEbo2KisH5FJxpzJ9vL1bf3Zq2uMRZQu1NbSwb9iBzGNYFWw3ZCQMZKWv6SodVBKirKyAz",
  "key21": "3UZTcPTwBsFysn14PgB7kDfBthJqGqUKeGS68hKynfVZcYnkeC6gxV1gRqY4eAchEfvFy2JZp29Z6eTkUQiQzbD7",
  "key22": "2DijLdrJGRKxNV923woXAfT4pi1yHYmqDe2QckZi7a1guJDdc7GAovus52dcdxQxorswFdBBYjMMGGBMWW5gpiSV",
  "key23": "KJs7hec6xNfVXWJHswpWPNRjFnjFgnk1hkCC2iHhD6ovYnCEMPCzP1soMoJShw2dZEfF9G8xvtBgerpTzGcVu5b",
  "key24": "47D8Zu5MhkEDAcf5h3ZSZFwzF87JbYmcQwQ5pYtfPoFdzXdduBBieauiHeCvDYgfFw9vnVngtXYt9tTr1oDobHQu",
  "key25": "4JSpSSZoGYGk8ccTf5MaQDP2FTZNtRP8hPJnwazvaNyTrardpxVrFSeBVuc3BnAuEtVT3v3tJWTkkAGfdKzPTNz1",
  "key26": "4JJMtow23ePf3iL1ephxZd7bfeWMUjYZdQoEMF8XinMhzK3S42GWtoooAwKnYFfjtH2C6ZLafuwuVHNruzsToaVu",
  "key27": "4fRhhpvy4Dr4EueTTqqiAEREkfNRQ2dfHg1E9sCPXypRouM3trZ7GEu31pkApfRdKmvsBEoZ7fhzuYvVEoiVfPkr",
  "key28": "676wW8EvsTgGLPyZqJJ8uzZGkDiMsJJNAmpHdio311F1KU3vzQnGeMZR14rU4kPTLWFib5KQkNP8vAhhiaAREwY5",
  "key29": "5CER7TisqA5KoPWHvFftfztUCtmM8CfWuAX4swQC59U8hSWzQ3aiFfxvoV6BGND8Fs61tEu4oS6o1Xyc1bUGVaY2",
  "key30": "5KvuQoP2xQWH2ZfuGQrM6PvRYouNCHM9URCcTc7Apk5dXZC4EkNSJkjPiakxqBZ8vqnyj5NJ5f7dTuo1KPjiPE3q",
  "key31": "4UR2i2aK95dz2wQjnS91BqLy2KCTW2tXbKYVq98exYJbbhdswucmG8VVXNFFTSQ8yVkajFqjoMbupwyaVi4ZACi8",
  "key32": "4Dis558P5YWaBX9v1ZZpdfTC4F4N3QFJsCR4Y4K6K5bdMVZV9EZAHx1LAKFAxgR1FXqMMMg2vfpxswehT1gupnxj"
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
