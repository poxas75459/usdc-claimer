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
    "2NgyJj4U7NQ76RwkbhDG8u4jZ4znbarpL7YsWGLV8QuJTc5K6xVGGUcdvsvbE2mnJk7JywTz42ZEBmNMQQpTyu3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ymdegNSaL49dVHecXkTJjcHnmNAvA8RoME75BoUEokHC3TyfotHPHgg13GaZxNkJs1aLAQw11n9J6kRAKqjz8DW",
  "key1": "5mNK4Ydevpk92UdH2utsbAyjy4Dx2sTkjJdb3xtiFQHEACrX4n7MX7o5ddVALA1x2jAbS5GxyodYygHM8wWS7m8P",
  "key2": "TwKaoBtEAvZiAbdGgFgCzNmr5WQXdhQXiavpukwmnExjJvDt2jYtCe1ms4ZjGLFoBjnBKbnnQDcrZgLt9AQe2tB",
  "key3": "QRfdkNx6jfKEVDd9VgNc36JDDaPcU64TvdbEFjiLJttgRCYiXWSjJbbzse6iePCLp2oiQTNDNmestwXpndQjhYh",
  "key4": "3sGZm3TB2MdFNBjeTUUdnpoHKRDB4wdgtGtmreHsMz9yJCeyY5J2ybPeF6iS7zCL1o95iyhMYtmWXMcxPEJ12zRp",
  "key5": "2ZKDDxMKLvGX96EFJ72L1vEpYjiTpJi8arwByFYxDADkPeVw27bgDSYm8MvuGtdYhdaH4ntqiGnosa4CDTfcc6fc",
  "key6": "5tpyfmqLJEhVS24C2C1hHvnfXHkvDWwrADJb9B3ysdcTmu7CYrJoBWPSd9S2DYpZDkR1qASmtAWTP5LQRqeqdkEP",
  "key7": "LKZRmTjHfspS2meuk7V5BicD9SfdHtjFTKRYV2Cagen9Fdx1KCq3v4GpF41So7omUNUFYo1WJNVZFq8QWjZzuYJ",
  "key8": "63AkNRJ1Env91Zh6nACaWKhGduKbYrT8V6zHYAYZQgN4ZSVXpURsxJRVFmY9jFUZ5zoenNxtkgAwQHT9U9VuFqrM",
  "key9": "4xMsD21KJ2CJ5tfayW8X5fzxcUVKWKaA8pX8KA8TukWzJeDGgpuVyzCeG1zvZvvUBR2J7E9gvFqMe4j775RPz8ih",
  "key10": "555y3WDrCoN85ZtpwVHx8LHFVV698r1WDhTiMNsqhfc4FVSFZGbhhgi7e5Es483sAvFD2xYQw1P9kGaVTHgTyATk",
  "key11": "4ox11DUEhsHw8GhvmHop4h7Fy8gwFupZf31Z4REKFxTuhBnYTGdixCBAk1Hq1NcsUHWbCe8H3HX7uBDnWG8TAUYr",
  "key12": "56FdsJ6GVue3xpRP9aiPLn2yLLTQtvtGcLfzPXtecLW4spCC2NQ8XRWNK167HDykAWVmPW3oWioWN57kv4LSovjW",
  "key13": "4xCdpCCr3r3VjtSaRKY6KGtmn47BFA4nfe4NBR6VS5Gi2hcJjcijve5b3AG75BChbR5Ujt1eyy5hH8Jg8qvJCzxn",
  "key14": "54nakxojijKqwbojAKx5okgTeCPLh7yPyb2qxjrpsVojqPNCSPdZVKaZo6qvJJJQmR4VoWmLMb4uBTLcU34AhR2w",
  "key15": "2ss9x84fbNX2jLYg2vXqKroeMgsMkSPhZMrgPQbJGLg445Th6b7buayNWPnNGjyAZr2wrgxhaNMYRvXXkBJ7gUAF",
  "key16": "58iRkAfF8WHrboVrwBjC1JFd1BsKnwY7H9QR7Z4iGn5tahFFH68EJfniL9fVimQM62Yt6NmaXdnhXC3d5iuZXz4F",
  "key17": "3VaCHfiTNoHcVXhT7aXL13neg9qJHYmZSPik6vD99KsyXjsP5ppKaLaT5z7tDCssuuJyH8FY3pjiC4gL8EPk3PqQ",
  "key18": "2sTNQFtWTv38W6cLXRCMm9JGp5jnvB6o1kuzVCmSCTUWMjheFWmNvKKgciAqke8U1MRd8MztHnjuyPUMt2bqoaWU",
  "key19": "2Gjkzds4k6dwQmDiVJY84YqNQMMHbJwRXw5QdKKuBhfgRr5fyRgbpRg4GYziKRnBf7NZ2qU7PeVBa3GYdNTN3pV7",
  "key20": "3iTaSaXSXvWhts8QVKkkS6btXAv17cLEsUc4N4irfhmP93pVqZwaCPD2pYUVqgUy2WP4trbbqpM9PtzxN1AcYbUd",
  "key21": "PVYWiUDPJ4a1D4txZtpip3QJ5zy7WuKYnH3hLcCaGqVVoeGY7hLZdsWBUL18h5AXEuqijL6tpX126FavzYWb9Ai",
  "key22": "vcFg4QhyLTh9Z1k3KBF3foJBByUMTSEXutY3BUysh6Yjw4L6HbLcrhrMHARKfrdurbEPvJHaykH4ZYjTxPAjU5b",
  "key23": "2JmT7vivj7ugVfTSi832sQ4kLQPbCJho2fW5kn4Dk288kU6K2zHSrHkRgxahQK2CyKPn3HorF3o5C6KYupnrFtSw",
  "key24": "4U6iYdDsCZMa3uXbH8KzDtsqEYDsmoxibTS73e3LmRpLULGuG3vVTBgD3eBr2FA7SMykUtQqLz8CGLSxjj11iywb",
  "key25": "5gnf6pTvyufEXgZAThX6TVhACRTcsSXrCgsMKod4STTF9YZNQMZ7KByme8kG3VecCGFt2ePK8ofXdx5LjuAPSFPx",
  "key26": "5ABicELtKqPbGdP71P1xTnxLxTNtZFKpC8NRFmnF5k1UBttK2jHdm5vyi5Wg8YxxqThSr32Zvx6oxm7sFFnjbGtp",
  "key27": "5suG6EHqasFfcB7LsYd9K6KLfqEfd6xfs2EYFY9g3rfkb4QjoGPgt6t4YF84qzpGQKpwpXYh4jqUnnLB9WGgSvEn",
  "key28": "2Vq8jyJ2pPfGEoZt4XmXzmv2o7s2PeuMyra65VtJRbQecj2EEgeG3TErQrv1UVrqu82mPfSTQJSm9bLFaF1LY2cs",
  "key29": "3VnXEex72GJVHoEAqnpEP5seryecMKny4RMST1FRK6EzZHcxBA6KXts5ZRaynrKNp7Rs7KraYr7JC49nZtyitJkk",
  "key30": "2ueeo5Bixqs4t9aGmLRaBwm1QTDseaaqsa96iTFbCKbe5fyssjkTbRbs6GSFV2gVXov48Wh7EsqjiRNhJkHMGQnv",
  "key31": "3MUqBgHiXXrSwR19Q4Gyxyz6YuFZVzK6NB47fjXYGW2w2XqVhWAauMM6PcUvr3fYT6YG55SH4io2AYRgnksKxn8e",
  "key32": "314BF87PmfkQVMERUgT76deGnuZrxtmyuEJVf83NycsoAmtYrDLhiPUeorGZWjXqS2ANhTRd3EjqMgnSFx8EcXKq",
  "key33": "b7UQQ4FQEgkzcGdfZoWfsNF3SQwTwpKAQGN8BbwZzD3vH57mGcLcUE5ETCtC49h5qk2pV9h8u3ou5W2NinCuxH8",
  "key34": "5dyKcGuneCqeQPdHpK7FYFfKzSo9e58BQeTfLQHsfhkV2nc3RCRLzzCm1VWai3qAg7yaNVrDs9voZ41ZHxjQoiBG",
  "key35": "4V4UMsp8Bd42esnPSHKXpw5DmaWkmz6CjFEdeiQUwhCBKXTWTvjrFbrfCbP5KsJsiiHWKADTKwsxefDy6WpnGB9k",
  "key36": "3EH1AyRPDZk5U46ZwoXwGaPH7tv9jocuLtSSZf3HNriisyqbL35aVKMXTchghp4M91aDPYh41yjqG1LXqc4UHXhL",
  "key37": "4HJmZKUztizd5fnavPkPKWpcwdCevUccES63j2k73rQQcKFyPuRgS414UEraeVEZXTJ3CWGgCX8hQw5YRDD7LyoG",
  "key38": "5gDRdt92cx2yZPYkzgNs7w8SDq7kVtLQKLgLiT9nD7uhjKqitUcVdNi18TMey4CVps7CH3Z3Wob3cAydKArDiwro",
  "key39": "tzj5CFMAKkuKdAGDPBHvgAUcGYyJuyzc2Vvtt7jUexMtdzLq1QW4pjMCq5nZQHjKJNAeYUKCwgaAgowHJ9RYRyV",
  "key40": "3cvfANKhUTrXGzaJeNWZXE7ZeRd8KsD6HqHKYqGj7i2gz8Vt35TydoWJy6uyX7vvgS7QVVnVAA7fvRS81rex3yKz",
  "key41": "334dQYvuu5AiMVoESWR3T3dnZGtKAYe3TipErS9ydu9zTaUpTrhp2apPbp9TgUL4MrLHVMmcq6zstmQe7xWR47S9",
  "key42": "3rZo947HfPqLw9vgDMTVjoJssB3fnWWM8QuzZV2fqyfXVQBZ93ZGh4EV3zrcg3g7Q7hyX4hwTN8YS6y3NLqsCKg3",
  "key43": "4vfQHMfgYqDr6f1WkJuPj1vzTGDDJZxiUfjYx4vpJJVZUjsKjahmuAPtCDJLufxkysiDrvXRuzHupavUhyUTXBPx",
  "key44": "5ZjaR716a3vppwyGFnRzABhG7SUo9sthSp7M8LUuZvV62e9Eieq6fCJxvBWa9mMG1BcZAXMHWezPSvHc4fHMRo4J",
  "key45": "62ce6pp3VzDZJsvMYuR5Fai2eL5fSLzHESYyRzXpWRk3ZNUmBWy6JGkKqG1Kg3EGibtzSXhhRCanEvD64reUZSMy",
  "key46": "577ayhMkCxW77L2f5ecY69dcpzap1WB6673Ww32aNrNTbrTuBVMA5ZNipBamZ38PMUwz9eXGGJy45REmtCcaNSjL",
  "key47": "3932ihqkrNM5tpyLjUMqQF9fbnJrhAaLZwukszCwqpEvRNuvXHug2NAmSTkp8r7fpFGmbn1hgDybkBV7ja5NCJLH",
  "key48": "48YzxcuxogwHAaXHD4bYWzVXvRFRJFqr9UmAAnC4dn1iQZfHa54vuBjn8s89CJf8DfTGYmRWRVXacNgQNWSgjtHb",
  "key49": "jqUTHrmX6WsjKKC8m7J6MDp6avJvhmsNZStGMdf5j1QihZ7JvS3F87YhJngzVFKc7n13xrQcnEjrQCkhym2dgiT"
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
