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
    "3pscPUGaYznhUdocZEHNkZJd7Rz818J4LvWKE111KeDV56ndzf9DSFhg1UeQQkScsjG4b3QeCirTvgVv4TSqbsYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6E4CkhVdzzhnEvC4BY7MTQD4wxvdgcYChJNRVZaRjFPbp6n8EUELsMNj5vH1WMN9A9Cw4JCYyMg278DKMRqhUV",
  "key1": "61pu7qLQJHioLZ9Dui1TsnpGasmFy8nwq8kKeqy1ex37XYb1k1wm5uQThdJb9FX7KLHfybNSjvXN2mBvVry4GgTQ",
  "key2": "264orQ5EHKTkWK2xE6rXkgB4G6MLjuH6QC7Fn2oynnCv2saNRA95kLK3q9gXLGWVm85YygczC2Kqh7WaaSX7xeRF",
  "key3": "45tNR9eGhAugEYR4qAcmGzyQviMxJPgvSHLMQexTrPakzv8sWxwH1xc6BJDQLgYUUqiYSKFf5Y332bjJFUGxoJuc",
  "key4": "xmvU4dh3ZbEFeRggCZWbo4wtML2eMc3SM19mfQJCqc95TtzqVrzA6saF7KNqK3MCLmmSgE3KtgLMr9jmcVhkSN5",
  "key5": "3FtzBbV2smH8vKXY4DUCQeqsdmtu9UnqFkkWPBfTskpfoRpg3kCLismtVwjSEYYWRjQkbqZn1KVuLgQo3qCPt92M",
  "key6": "4eDsuESgcPSP1N9meeBMjTygNRwJt525rLbGotMpXbfaccSCK1a6YF2Vi2mG2cWXkfScX69r1h1dajf19D4TEU5o",
  "key7": "3LEaQHsKdMfSLneg4jtLzbycVgRpQzUAVSUMUq99KiKUd4Ytn9oR2LKmzRMFknURxnu5qKw1M39WdcAZgdnvuCxB",
  "key8": "WPnpcy8gLVjC5iRe7JbQ6jujEsBLvHk4jKmUbppcLcRYMAPCugBPY9RCSDxVRz62c7LGYyy88jmBzH5RJ5RD7Wm",
  "key9": "SNzVkC4oH6LigZLSMax6PVcmfnGXp3ygB64NCu9up2utHT7uWHx5i6g6TpuMax781ze3nJkQidNgL2ALk5dEzUg",
  "key10": "hXC59nVz4BX6QZN8zhYg38rUdCggVCBzztd75ZNdUuYXmGTCoi15quT4ouABxYJevoeSNUpY1CEXH4bWNtnKzqd",
  "key11": "5VoSRjHAebk9iRuXXbdBbCdmqPxMFZ1Ki7ugaDDyRrV5QCyGnprTZ2KVmjRFvqVTwDY3SrgoXMQhU6B3w9NnVZGn",
  "key12": "5t5in7HGKzYT9NUCCCF6RGifRVLgT65Vd6A76mtdgQErgUGdWC7YYyyNaLLM6WQcCJXd3aJth7wAkczJUvKBN8Zz",
  "key13": "63xjFBiCR8V3nH1Cgz1j6SonDd5TsYyeBMvgGDfZRMftx1nHGg6yjWCixmpAeuGsUBxjM8nR2ofW1PkUMshYQoGg",
  "key14": "3TPtwvtjBqpzsbRTdvFQ9wVT86HwxEJazu9Fath6McwH5mkh85j7qT9mrRNDU3urUHtcuxQofcrbRTPwRXJbjwcv",
  "key15": "2bhfazoLYQsoYSoNbV9zS29nknFpDcGGG1z9NspoTVfun77mknmEAyDPAMEFGGf7eoX3HHxBzAfWBotjgbPrZ7fu",
  "key16": "5XDjdyTDmb3zaN4PfTZgYpPco4RYANgdaeM3SJQ7uCawYYeymxAbPgwTFXTunByxpmH1gqg1CX21qF5Mh8vnwG87",
  "key17": "4Ly4dnLuhKZLadJm7fbjnMkb1XrgLNb3hPGGhFVqijwNcsKV1s6QJdTK8kmVtMZei5KacyFYYL1LjHTWL1BDdWUH",
  "key18": "2pNPnTVLhJ76mzXDfXPpMkQmkP7RVWks8jzNEfXLRDGcyfA1AJKhszSP2vZfxEA7csaSKYwx6f56jRZJK9f8op2H",
  "key19": "61LLK4hUdkfKXvhULjwuxjrFqvDNmpHV92UPxNCdAenLptWV6eAGyYajbjCnvhYVLDjdSFAoDHQjwdoqdEjJyHPj",
  "key20": "4SxJbEn1JWpyExWYbnJRZTj5WECnpNPjQDRX85fc6KkY9dkZHkGY3WR8xZGQTGGbW6peQc8FDHV7y3Q5yExPZCq4",
  "key21": "3i75W75R6TeeRpHGzgKLHH35ek1pjwyFyX9BJQ9tJom5CZkbkPRdf28WShPAEieR7bCLZer7GYLxc4xxtnPWevnd",
  "key22": "2HEaSFrdva4u9vw2PnbXWTQbPheUJDbvfevE2R7QVeKa1jkXLqhPujnbFWBv7t5gXucc733hAPmX73Hnc7WhCZqG",
  "key23": "4XAE4TmCvatqMRD1zsiTZ1Ax8iQiXZPkxhpxoxM17MNq7RrJBAfGLXuZt7bDTGjd1Yds6AjfMfsjDDC7ySkVMnJ1",
  "key24": "58e3N6oaKubFjzEKt7cp91jSuNLtrfB6ZsaCy9DTiN7xsi1GX8iAKo54MbbkTaQknukT4d2EYJJKCsasb61wWf5N",
  "key25": "4N85E3oPum8Wzq9xGQweG3k7HXUtHFAqeMawL37AXvnS6dtjcTGZN46Wn2ewm55woJDmWtPd8CCgvgnMDPHpPUjB",
  "key26": "3GUGcLjCZehrnbp4e56aSwqTkgsZ93SFUvhnVcsJAQWmfGmrjcxP6Qf5V5WJzp9zVvR4vgcVwVLmbLfFe5aVXib1",
  "key27": "2X6ra6qSNdkrd4S7kz3nEQe49kBh7zZ5HxwuqEbkxprBv8QiDYQ6V9ySGQDG8dzTqJ9zKFxMLr1pkvaDturHVJ26",
  "key28": "5f6Ncx61wZY1NHYakn7sRFsicc9vsUin2jSEBEpJinTfWHsVZeojhkEM9dGp628gNqn9WXrttQLNU2q1cy4HFE1Z",
  "key29": "2LEoSFMJehnN7BN9nnFPhaVCcmXvvTF4AzYMcZVJk1WKB34Gzq9ZRqtjVQ7VT8dj8MzvKSXQ3Gm83r1aS2udNgKa",
  "key30": "3RmyEQvpCwFK6b3CNt5FcR81e1qnp7SiphsvV61Tz41qr84cKnebCbZDDkdZzaVm2SAtAdUMvFGBf1ZbKSNGENQH",
  "key31": "4Jktco2JmE8tuPmCipmYTZxV7p7k3Xm9n1fLVhnw4Jb4TwiRJ7gwLio3ZwVtiXBi3JV5NeHaSyCHEHjZrWhBTCNx",
  "key32": "64rprJg5mbgRUh1oUyQqC1qmVD1rck2411q4Hg64pw2dKU8NuSCW9vGsRVkbwS6BCezFHJ3d6ed9KA2TfEELUs1E",
  "key33": "46Y34QVEsPSYYNneT1hG1fT8pp2RDzgY83LnviHdLo66pGUmuc7haayc6tehFGEjfLhZDz6B9VQVeMkRTcykm5pj",
  "key34": "65gmEGD66e6oJcUd5WpY68eenXjPKoB5eZNVeqFXUzCUzsjNTQUwHTDXD2p2WfyLRrQt3PbAGXzoDMZwSShpaqPv",
  "key35": "4ti8XJjHT6BE131rScRaAY4qZzsEvFRCzEhjpuV5TY3HSvq1RFJH7VwmVmdoggXmBaXe7HGW4RcEUaappMfDKNCG",
  "key36": "DB4M9eeB94mNWS6EBC1TxE4LrABxHgnB1sHHsJwqyrCo7ScVBXkUieXX6ZE6Z6UWftDYByNotdN7kiXtbN6Zy9S",
  "key37": "4UuLL67T8nya9zvC4f1g2gKa69tu3URzpuVJzZskuXbRvPemfxRvXgjyGxJYpbUtTN1Z1TaKd5YaWQ4bopprbiW7",
  "key38": "ce9SVdyQUD4Vp7pRJnyrPa6bGjF4hqWUoj4d3ZpzUnCMJf86HnVoCpeDGpHQ5k4BzeMqmkYnfKT2kwiNieAp4Vj",
  "key39": "4U9ex9YVGMzUNRui9d67K69tu1xJnNnUiiGaHrUuGDMM4xUHz8WKbEW2fGF6UAcFtdB6GQG2zQNHThmUCdNu22iA",
  "key40": "4xpJ9WSqWfyNXJzRFb5DiqQNrgCotjctUdZhrZ3etMXsEEeAgtT69Yh67ZdgFdMcdvjsaqrfzeF1ur3UQ2LeWchZ",
  "key41": "MKdWHm6GVNyLfYdR3M1r5iCWVDGCtMJ4BKauiAaLes3VJ6vK9GW9oZSP9KQ3XGap23Zy2daK98snmxha5Z2my6G",
  "key42": "3GFDznSY7dm2WAJcv7BqZUzh7s23uF6z1R9hoT6SEUFiLpCV2XFUdij8qDpcZ91gUYxCVTZBMkFGxNFBNYinStZj",
  "key43": "3hJEfoAocY6w2zDJKSuKPnC6srnQdPrq5wDMSZ7JgVaNUMy71GVyu3Sa2DyFLtFb8e42bVVb1h8wa9hb7ctU4zzn"
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
