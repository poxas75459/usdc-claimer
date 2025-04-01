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
    "4miUYjBkvEPSRKgBMWU92bL67FLZg7iyzmMkNhn1vBfgxF8JDXMq249r6zqDM7Zsme8ssBtpJHZVZK4F2n5TjKR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E28rqT9rUEnEiDcrU9JqiCbbAj7tMz9MqAcZHpzcsxhHCYXPsDMibtUG4Z7y3E77k7XkXu7273jsT4f87zZto9",
  "key1": "268wqyNCTiRa4ahnQfDPZQwNS7dNEiANHZYv3P3CguqvARdkF7UWb8deBV31o8trwMwspVJy5kMgXVXsk3j1xC5s",
  "key2": "5r2uuzArcTX8NSrW4kGzjfHXesmdVD73TnU7Q4AT2mjKufYDBNjCx5nAjTYMP5aHunR7eSa4LjRfg9USGXeexKL9",
  "key3": "2cBuEbeoiginwmjqys5HRWAiwkBi7r8PwHEoZTxxaWDUwfmiTYW3RjD6PxVY3fK4wWo7PNcgxnobFRaKMn1F6GCu",
  "key4": "19WUmkyMheHaczzsnZtYmtuSUvRhUF5n4Ethtm6gX8HeBhxrq6GNkPiXQSX3f48rDBznzHcCqTTzimXYDaUnVwA",
  "key5": "2QDHKYSLunQgRfjqLonexsKnRzixyNMK8mq3aZNWzobgNBnDjNudE4P26tk9i8JBABUHzhqm4kdGwWiMXPtVPNxK",
  "key6": "33o42QAWa4yE8yKJKh53kwgcrejKJBZWMeMQLYx8Kw2a6FtKVMqB7JGXCRSnf5zAGmxQEa8sYUEgevVCeqbyYnhA",
  "key7": "57hjbVJmqyYpmTY4vdmMrxpv6jzZaGQWq3P3DBKzgPffApYZBG7hCqh6PLh9C3vqpwgjQzWtoVNX1wo4RUfBAXKp",
  "key8": "3D4d1zUgMugwNm6xp7yNAYXmWttp8i7Cip1Dd61U8oQdDb9ypZ3R2YTcsTAmBNenDbAAVipH4GuuGC43efucxkCt",
  "key9": "4GhgWdxVs77zF6kPodV7iEDS1pYbGeftwinPsLvBhyi3noFqWXx7wgJX8WoFB6CuGtgi8QJUABL6smf792CuLd6W",
  "key10": "51vMWyugNZAuFduzL7mLHw4HYBx9jE5nXKh5uc1zPPGt1UfGus7PUsD1gYCcsGoi2pHThJGhWwzeeTvmT1NXbFiP",
  "key11": "5iBPdgCmKY59G8g5pMfts8gSJFwMFo43fPdJLsGdnVpg5JhMCGDfRtJpVXscjFXCW7GC4vjkVkxpvjj94jP1eZqL",
  "key12": "2Pj9Uw2DLPXwECXHYTpo9FoNjEMYQFmkFgYcuUnshosN8k3yvvPMMct44ixDotYFjjvPK4YY223xm9ovNTNmA9Zt",
  "key13": "CibjGAX7D9KveMuDduubkY7j7cEoeF4siKS1keVrRSDQ7WBaXxX7oxDfootvwrjwFcZFRpVThaRRK8rGdsF5zYy",
  "key14": "3xBd6EamFv2E93yaxxun51EQ6adxZH7f8u3aKtHRXgxgTtHjYbZego96XUP6fTARWCyFQwntSP6tUoe7yjfFnsGn",
  "key15": "2UypZ9LNWcv28SvEi6m5bT2PRX4LhX3ukwDtgEWBF2XhVyD7GeBm2BqP8zUD8sj33fE2Aw1gYtZw2nv2divjt5kV",
  "key16": "2ZX68r4EJGMjP5zrDQuXfkLRzXrcxpj6FsQkzU7Rtz5kKch9ZvxUJ7jRMcZNkdrpR3i1VhvmHDNKW2ku1YXEAQpv",
  "key17": "4KZEzV7Lt4TyoVB18Gi5uBiuJkGjfYbHNZSJEXqDE5tsX7H1dFueJcMXTg9i8ymAH1v9q616pL53UMhmGh1bv4wK",
  "key18": "2DomQNC58ULzKLgucsTVy3HJvtJpktTbwDB4uC34vXZc5HrM9kYpFXt1L712ctBEDKFVHfKf8LTxJdJiXxYB4KN6",
  "key19": "4xWnrYrLmDE8YPR1grXTJi5UVeR4pnYqU7juxjUYMwy65ThuCYvnJb1REEwoa1rstGsSjQaZHBKpgmZo5VVG8jUV",
  "key20": "3HKJNEbPW11RnTaNtH2X4HS11PgKZ8Hkcy3tQcRNd8rXyZn5ycrLrQyTRxwmDUNR1d2bMv3dph63gGRn22SXsWui",
  "key21": "4avAU7BQC76raCTDRkKD78RgmBUhT4WeiB3ufnkfwDZ4VK1fNA8ZKVBB5bPsh9sCx8fU1rCD5H3HEXiGpnoRh4Ys",
  "key22": "2dUcf87KUUdyGPkd4dj1XNzJYcPQzVrSpsYZJGF6vzk4BNupbZ9zKPduMX8piQiHmHtS6aWAqY4ReoQ44EiAh2wN",
  "key23": "xHCRmkUuyTMsUDQSXL5PPgmYVsfg12BF9cT8GxWsQzR9au5qLTnbcy4iZ1MPTGsEn3pqdPQbrDtbWuJcud4pS5s",
  "key24": "2kArdnJexxL4Yn7iCd56JxpC7v3TKxJ8xJzR71nogUCPXLKwY5TrAzd8hAXysppb86fwXUeEobuvzYdijrgdxsqi",
  "key25": "4fJZGXZGwc3UYxuor1EJPVPpBBkd4jg7Gh3AHAciNgXTWiovGn8g2ovCugsaTvCxuXtCgosXqFQTpiM6HKwtAxZc",
  "key26": "NYT25FfZXV3BoJxa4bMuNnCJ6WcYk266AUHJpAywTrwWpy8ThjpVzLo3X918HAd51o1uuXNwF8nbnEgMBrt2UL5",
  "key27": "3QCUm5FsRBy3pZpV3TNkrAPL8fBaVbRkpzJGe7CJjSYKSWWZXTKfUXdgtcJV7qzhh9TSQkTV8mAogYG1QjAVYSJL",
  "key28": "63aq1oy7SV761mX8M8zmcczhD3DB4Tqcsfz88SRgigUwKrUYPaBNvNf2VWSLqgkVMxHCLLmtYfWkoBAe4gcQKg29",
  "key29": "4EQXCv7YuVDGa1CCkL7zZ1yr4pug9WZ3Bvb9PexADMu4Dfc8wF2zPqCbPxfAhFrLDUNAzTAfSDxvh9JGd9Q9hgB7",
  "key30": "7sA5na6trX9z4j14xaqy9JWH1S5wUBoRvgTvpP3PrYfV175ugozAExBCTbWseALKJYAWpyAWkCu7ZVSGUjj9dm5",
  "key31": "2mEASeVvpfB3aUxvmBFNwsbAyxmNzmtXVpFearRbMnyRJXS5evVd4VgUrkc3TuYvkb8xrtXbsh4NsVj5EUiXbx2J",
  "key32": "4VFm25Qw1z9m9YvhpAgEeJTFUwjsTKqHmuCoCJ7cs2GjTbge24UxYhR6csejW6UCavsyEhiRELmLum3QBV2fb39G",
  "key33": "gGbGFkZSLAzQDwLujAExKUL6FGgK6QkKhqRWuigBjrygQbtZdDVSPwW6tw1iV9umTNVDrA6D9DjNFoG1s6QA2m8",
  "key34": "48Chw451Y248qNLUHzM2L9FWSzm5CxfX9o7s8UsfBYxwa8ReA3khG6SuFPDpnXC9DPd78DGiXNL3A3VbUweYER7B",
  "key35": "22oohusU55UsQZyuWSsrf2ZqTBjYDWS1Vuw7n8nUqGhYZZ8vozEvJRteCXp2f1sPQNMy2s1BA2o9vTjNWjDagV1a",
  "key36": "4wuikkJM2xJt6uNQEsxk3pSsgumXYqnpwLyM9Kp49J1FxnNRcFnRR9HZhLJX1LXEFM2ev3urJ51sicDbB3nek6re",
  "key37": "3qY9yBC7YMf7i2ttNp5KB549ES5vaDprDwjTKB33mSBjHUBpwQwxsimpyjFQJPoKxe9sWhzEMbQFPUSrRVAn8UCu"
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
