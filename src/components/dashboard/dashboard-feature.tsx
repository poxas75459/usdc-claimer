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
    "3haNXv6LJH7RZiCCXzGqBYXshpC65EoftSb73MhWxw7eV28vAvcQZxsEmiYPf4cbe9RGb2C2YZBDYnqEckgCcY4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vw2yWBaZkpmvQ8ZyRiGR29gftJsJLrheviSbYq12iS88yJSA4o65p8Q1ZyeXZuugCVxsXhW9wy2Y3WsFaGwCE7v",
  "key1": "4BzK6dtrm1XUJKRpMSo5n2wxQhCaqoJkUhroGKGYXr7jQRbudAeNZnu6NuVRyTG7H8gdkt2jKouXX39jwa2KpisK",
  "key2": "4ufPh6i8Kg1R4jqtciZ2ukBn5eJaJMdHDvoFao7atiZQrpkT2TmPKhgdqENMHjrfLJbvu4YT3y2Cq3nW4PmSWnqX",
  "key3": "3scLcYtir4RGRuiegtRZNnUza8RuD6KPu6DVPf48d5gPGaaYwhc6T3cJEwMRz4V8rq2fkYzbdw6p3Z9PddsPNsw8",
  "key4": "5jErNim1JorX2SbThdD2QGWr5wH8BtcB7JHPNBH7v9TMWHptTfX76kLA2itujEYRFUQyYAsHrPoY88zmZf81SCEq",
  "key5": "5TYnQqLETvbznqcw1ZiixNpzSprJTgvHbnukATdSLmpztoGZxH17cVkGeApykZjNAhJndgDSTwqvCabV4oxyrZY5",
  "key6": "5DZB15y62DjDbzn4yJfXL3zu2zcqx8SEv4dV8de2RWGNMCYWqn1Lz3GFTEasKGQk3fKHTCQrhoP2qLhn45YhsMbh",
  "key7": "3NqWZPxvgzyzE3rENYpR7sHNERkcBbyHFvyf6sy9yYWiRkymyMMPCSeetad5RznuPTrqwTEzp3nPYDhFFYeyDSG2",
  "key8": "27AnSGqsATPNVQXBrJLLbtDFCwW2byiLVYHxQUy6xkzw87i2Af8wfcK7X386n62bypH3fEoSAELNSn8EdMcwHk5T",
  "key9": "5mWk9GAhPXUNwMZJ8khzk5PuUUbQkSHBns4k8t5cY8vA9EptbFMUmhzqe9vgSTfY8jRBmUNFYRgBbjYKtas8nPwC",
  "key10": "5DtaY5Nd3PToUvBfviAvoA3wSnExxWSPdGQ4tS93BvXnvt6Pv5qKJsnij5VLaTTLjHgEGFxBTHgyc86MwYwp3p3",
  "key11": "4k6o2JbffWS8bb6G4mBbKx4rAofCV1KR5GeV3yseoPob92NibDEhjbMxX7c6xHd8c9h5xj1DicbSV4B8J769DdPr",
  "key12": "BdtAPbP5wJZBfnNqzDjmzkudKvaDd6uSpNrZjj5xXnHiDEyoY6Q5GsDsigp7WvEUTKrsuYPx63dnnr31SE4neRF",
  "key13": "44mJ9bJj9qR7W9PWW61Mw1xnrkCScED5MS3qknaEcRF16f3aMhxyPQLSvKLP84RogECpQ3yaCd2WSXYDYJciyYp7",
  "key14": "5YMujjWiqEvpqjZfMsXnPgBqk1jKM3CuHs711zm8UYnCTkWzA4YhLe9zASeZa3ioU3T3VLk65FrB8UEcG4DK3MZC",
  "key15": "545SjzxV1WMwPdCx6yeh6kDCfCuXPCtgnf9PbAZzWGVkCgvKJVKhyAfNqCaXvz8FNjeq5FnSNj9YF8ESc3883RoF",
  "key16": "8oPHxKqF8SqB9LbDMhrpWQ7cc2YTAmGGppARQsoue3MgzDYbMeJykUWM436we2jzzagSaxT4vxwPnkNHzE2iinr",
  "key17": "dDSxR3WwDdqjLX4ahXkvcfmTidpAFzEJQVEeX8JPiwVWfwNVFWrCDqVYHTqpozcXqVoZ9RCALMfgLsSMc1ExRoz",
  "key18": "5VAf5BAczWwn5r87H65w7poAyNMT5c4YwnhQKFBEuEgaiDE5HAKapaC32PSAt94Fz4UyB6jZWJvZF5wNkj7rmGAb",
  "key19": "2rTqV7x2hamnqqWUYYvu46YVLbTBbJkdqn9qiHTKekJ6GRBP3WFVT9zyLSLdeHDxhqEVbdvJXi1Yr9SeWDGcJcQJ",
  "key20": "R3JzBcg9tfnWrX8gY2drH2exdjFyAfLBuNDfmsmatuxDMe5JLHdidF4AssoVqCguhTM48T49mX76B2G7X1LQpKC",
  "key21": "4LHSRVh6Zqhvc6Gc22KZSUkoFY9o9tUKiKASzxdRpUQU8fyHCJh6YYGB1Q3jy3vHER1ZLsJzmMscvRyeox3vJpUb",
  "key22": "5xwJfakVwB186obynumtFAVf5XZ4aa8VhMcKfmS9nY9BVU3J2Lhj1zc4N6yzqB8Gq2LeXNnLKZatpdnqoYHCuw1T",
  "key23": "3msE25xvabYnx9sLynLz4Rziz3nnsEgsNvKZy3gEgbBbZeFKV1jgQB7L1GTSTuKxL8vqxbXh3aXNvp4vVszsRGrq",
  "key24": "S546xbGbkHCxRmafiXNeVhrEKDfH5KFiZcwUvhNzRPYExxE239twE9L1GF4bLcNjh1fLG4YfKwCBUf1FkibjGgT",
  "key25": "55JAHkno9Wj9mTRaZzbAuBPBoZxn6C18xFCbk9b9AbxbghQx5gEfGoc6e9pDqQf4Rw5Q8ytDcRUkEXM8LHygipzY",
  "key26": "5wRmAM38QzDGgQGm2ETd24NE16YUhdNw7XeYE2FqEfvXZEcWNTeZycVy9UckodThwMFUHAso1KxiSehr1G9YLzmx",
  "key27": "3gy1wyYFsA5uaM5NKLS1YCDYJVJVmWTbud6cFq4tJq5NHkwpW3WJPxJF2xqKQut33V6V61X865qJVenTTAWXkkrT",
  "key28": "3n1RgeePWmWKsktpUzyZV3BTevukA5M5GoNEDfuXA2TCnCqhVr4hWTb1HYq9PUNSXVPitnY53e8Vu9fFLsV7CqiM",
  "key29": "3Xz7WnnufkWAwwxvevCQ7zUeos3UhVoXkoUzfzhGC7SpKLJJRM7nJgfrFGipQqUSp3kQGZCJ4ygLwxypFhUZMc1x",
  "key30": "3tJNqpibJ5bvkzn18bKoHmzefCrAz2YgHarci1GgwL9zbfBA5ZxLEksf9aN627Ff2ukxwixupfv9oiomFjMGvws",
  "key31": "2tfv35QinX9EMGCpwcUyYQ7NruTfq53L3HbvtQGVDKnd9MpiRKwG6q6C3gdSfEwQpDGkx66f4RW7JQAb1zH1xkUs",
  "key32": "4HNxgH2TvoR3tZhpeZy1aEoEQX1YiSyrE5sqYmioaBZjrs1ZRKyoRb8JYPtSyXeMLXawUpQDF3DVjkvaYzy4UTYj",
  "key33": "2zrtD1numZqGKhLgokWQYSSEVaJC7EScxbs5TvzTuyUzAXbzfAjNqZWtaxVZPDBQN7G9D9SUErRG6Mox1J6JfQDc",
  "key34": "25oggoQgCy3vSmUzCZz3x5BwKmrZraxjd8SeHTu1AGvt5Shxo98R7t7okumoAr77w48pyEo8At2LiNA8RNzebAiD",
  "key35": "42NesGkmV2x6Af6LPGf7kx1GR7LrwEX8M9v3QND2fn5m7v95wPs7b4ZjC5c6ZMEEaGYghDT2nciRu5ssvdyW67tJ",
  "key36": "5r7Sn7ZuxAYy53XC1RCZU7YVFnfmggywkDBrFr5FWmF4t7RB6Ro8F31JNqGS3Lxy1eS5z8PwHg3zMS8NNHnTzxpP"
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
