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
    "2vpmKzf6GiR8onAnFRxcEpJTQJRDgMbAbKmQUX8DyD1LmBEbGZHY7wtV4tgKSFx95YwJd72Aop7YC1FXwridHgH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tduZFKKaagcLjTV47K8kgirJV7bkrXZTLMBMDsFDXjjyEf3vbeBd1CVUXzrXfyeRvzm4TW4Dm7SP2JuHvijiSJA",
  "key1": "3JkFhejHxxp83Qd5BgX34aQUpHzjAFu8JU5RP3XYSpz352hXXW8ddg3okzTt1rAMqDdoF3PkZS1xk7gPzxCCFmcy",
  "key2": "3ELRUc7y8HZ5VPXLApKrCoVyKknyXzXdVYi1TRb4ukiHsah5DJsnf45ZHEctgX3xZQt1BYs94igXtFDbry77dCbn",
  "key3": "2xZ5vecGjarX3ekE5PYv2ABmqmfERLYDDPpxsP3XohSuka6mMToeaN7mLuA7JjV4HTurXj2ArquWRMNPQKJPT9fH",
  "key4": "4H2a7de1Vf3DjQ1c5VJ7bZtYmZb6Q2kmpYSkV2ztdqKWkv66FxsYJZ4ZL2XH1rQxH3SatP9CC1VgozgaxpKSwztS",
  "key5": "5rpwmR2Dirxpnqfavr4sXqfa9Dn7c8tPwGHgp1wZJKsHNQmX3qDzoFqbfsbjheK2AxYmoiGsZAJCCqnewbmnMBZa",
  "key6": "zrW5bpy537fj5rZnRLbutsdmeHA4FWgiCch1nctubjyptsmhorRJcAUDJZbUBDQZhcLmpTaQFkQQ2LjfFNUUvqN",
  "key7": "2dfst9MyRbivymAx6zgyCmTUeG6nkbmKnamXxeuM5ygRFScnANShm5d8LTR625dykdySv9aCPpgo3CvMzC9pzy8H",
  "key8": "3du83pdrUAFhw6jFrr5R7MzkdJZZiMF1TBLEDogYWr3a4bwTxxde9NQTszEqbsAYqbqcbwkE6zCEfSnTtd4gREif",
  "key9": "3nDV7GkS9vBCEW2DXksPfyG4R2awG5LqZpRPgXS7S5rBhxGktybAeh7877BTFpSUY6auJuAy1tH8dHoHiYEZpWEe",
  "key10": "3iegfvppUhCVKACUCP1ChkdAaKacDZQaxgWcYXzK7coNy2jQdEBY1iSWny4cmncZPq5JUCxt4ht1D4LqF9BEHEfc",
  "key11": "61FfC1GUWFkPi9fk7Vi1QKdb7BTpA7qhv9BLChnzoym3zD7Bkt5F7N92jhyfSfHSmzXsbtxWyL188CXZEvzacjby",
  "key12": "2C4TiKgtY4Lw5XwfgKoyCnRUXPTswpv4oCJ6DBsQKqJ87JpCpnJJbd3t2q3Tg9JW1PunK6GZnHWfNK1TmMj3HM2d",
  "key13": "2MsytkQxyjtSLLMsCN1cnW3rsAiWYUYpn3AmHnxFVz5J2J8KdbnBQfmE9XccieMvtNVJkAgkpxxBYeBZkfzcNrLT",
  "key14": "59Pbf8nZUq7rxTmjUnm1bjdExQFGagqebFozmYkBzFq77vipB2uJyBKc1k2ZpSovdayh7smHGP7VrRxTkg9iWV26",
  "key15": "43hEURWX9sp7zAzSQciNb66AE2AzbX5eifwJYcEXkVTJmCLWZP9Pspbsi7azQ6CPYLuuCq3KnSWRqjnCcdNouMb3",
  "key16": "YchpdrAypV6HpEdJarztp2KX5pesnCje1EhooQ1LFyvqZGMTM1naDgdWH7V55Mywu2DnkhuuvhiSwsnmGhutfmG",
  "key17": "5Tx3s8sfSN9kW8LVhaZ2UwqrTxiPpxb8Hr9YrHyMRhgz5HNxp6fvmREwWejPWjNYXL6kmLMta9n2oJAGzQJ8yH9J",
  "key18": "48fU2FsKnA6LWfjRAA27S9mfo7YWv15HiSKnxXtkA3Q1tXQhMNiU8HrnwjVGJdNXMp6obUNCnd9VBqJMoLSJtJ4Z",
  "key19": "32LRig3nLxV4WRNPG3QVA9FK5j6jd9c2S7vVVTPFYXcqNvt7LuMpn1dSq1fegHSAG82VUDa3JZenLir9eQyRGcKD",
  "key20": "5PB9eruiSdLMRxcXVw57VYLQmszghKhGcaC6N7ciom9T13FyA4a6uJS13SiqiYCaa3k6xpKNjWCfzSfGeHcGtpPs",
  "key21": "5sUsdLaoDk8Cf31UhdZV16ew4N9ppqPJQaQHmghDAtuUcVNL4DquVCu8ofG8984R1b6P1af5CYL4mHgS4rzHaXLg",
  "key22": "BJ4RBEyZ7nrvmg4UhLQoVZqwVz3RzxYGY33bzVPipX5gMBQEcAp1UnhzdLQTQMpquSFLww1usM9AmtKzhEwRYH9",
  "key23": "3qU6fXZA5tiGZJpCbfgYPMR7uURK9qcgGBiBGc9vTp5wjJfSbVWb1dmfyzPQ3no1sF9nhDq55DXG66DbR4cfNT7B",
  "key24": "k9hDz8N7B3pr576ZfaUSNWkkY8ZyNkg4jyptq9pdEk6j94v3uZxK3KPej55YQz9MT7WW4RuHFVqVNBxudVyURLV",
  "key25": "5wMxxR3ngiAufGY2bQMoC9VcKijQMYKCjH7znASFqDGVib8QVeWEm4u28LTmGFHyR1H8PMX4KAZtGhGKHMGBkboJ"
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
