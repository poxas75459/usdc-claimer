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
    "46KH6o7tPLMnar6VXo1xGY7N4PkyDv3WvtBoEewxHQ34Ly9TVdjJoufeT5NULfxqDr9swkRWk9wRz1uZdkR4SKvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxgT3QwppDkBU3J2QfYDJVwAQGjofePTujQFXUga5ZDgbg1ZijCfA2tBtDtXotpcJcTD7FfGraDV1U8tpwQUAzs",
  "key1": "46gwNJ4WzDCbJiLASWLfSn6UHmbghgbpbSqtThFmGagyUrY1T9Rp5Wjab1DEVTWAFici8sz4KrkXN7CXJneVpXK3",
  "key2": "2biRgUWJybg58fEy2cgErrBN3z9DjquvU9hn96FMRgYKPArCY9UaGGjaNUDtS5yWvayfSuk7h1Wm2GCr83JnUDcr",
  "key3": "4GRquZoNCDJqmWBuTTtYxJYbWsVSiisiNXrQ4G4TqUtraGuMZEntQWZ1EH5ioA8v9NaB3HScKJxkHgtyRY4xvN5Z",
  "key4": "4DmfAqvFUBZwCi3rVn9Xun27fazdMUgUwaSXQg1svALq3zyqcamQyMwn5vQcqxXML9psCvCptEyUyQhG2NLCpqny",
  "key5": "4F4Rb1fTaHGXJHNsQhBJrzEKbeQQa6TzUhEyciZQqsMAKE7yEUZZXNaadkfJ1pZgBywME3e2tcrVcmAj38kjXspT",
  "key6": "4KKYwqKJ8NfBeAdAquBB1zHf5TNEtpXJPsxsPemPZtus3EjUKJoYsC9LdbF56CcR1wb1vc7N1Y3pZgfPu3QkeBsa",
  "key7": "5gRKiJLYFTMuNrTH8HdNTYFC9rm7nsC1sB35q3ZvCV8G6K32a6tvMSa3s5zXWfeFTbVrfb2tyVSHWE5hCkAt4YeJ",
  "key8": "5vsGhckojQqprNEjn2c8kJWeYPavaH6hiP28w5or6gNgFCCDXUspHnzuyXzJMDp2JKFnjrEmTRPb6ex47Z4ke4wt",
  "key9": "2YgigXemE2nEKov82zfuf2p7rPELUQtotwsd9bWjoqss1GjDMS7WBqy4iZ6GFzqV5ry8kxcFYtoixvu1n2RwvdHK",
  "key10": "uaSF7FMKSFBzVQGU1ug1Ebqum8JzvaaB44Lg1LxrNCwtgYiDTdd9reDm2BTGwBbiexun7bqxDv9uV792Y5bNPoL",
  "key11": "HmUYY24U3kThScxEtueRYBTAqHK5AHYQcjjEyiTDKwRayKXwHEJiueRgSck4Vn75WPSEobZt3DRoWPjbELk8U7g",
  "key12": "4JBd1brZNu5EQbGWD3Ddphu74rjSSkSBNdjWdE87UYgvJ14yBqFDCcUR5jQNg8eNjPqiW96zBQ1rQxhRTMqbUKbh",
  "key13": "52yzL4zuHCWsZojpqiSZxPDi7peAtied6vccuRAz1XLWk47SaSRbVNRaBayDcqeedpeMcSsYT1dK1dDUtFVGauo",
  "key14": "dg18mnFPDWSsgmiQ8wXWm5sAQy7VQErzFH5u74sGFUHnwYunZvFK3wmgxthsSGGiPf9oLeKWbKGdmj3rtKvKCua",
  "key15": "59gQQvLP8ZUXBL4akrWvy7nUVp4RnhjnuAqYdboakbWBXBrR983fC3gga5aaQPfJvarzveZALkT99r764K3zQ3f8",
  "key16": "4ZBkfF6BFWZ9mfULKisq99drziAiFkuryFWZuhtdqzX4KL3WA8qHLPfUjVWFPAHGrcosdGVwM5DCtXtLsLTEZGAK",
  "key17": "3TVoztkQvUURqDHPpTtSbDdUD1MdVJLwFFFunCWmzNHHuBokjSPgMskF6oLFtZuvTLqkDwaQ8ZTzKZ9jyxVEBzTR",
  "key18": "3xPqhVcLzT2xWznSpCZhfxuJJisoU4cYqHG4jTLikKhZr7dpy1PsRpHBK8L3bBQnbmcn9ZuKaorRnXCxFHsUf6eD",
  "key19": "3kmSV5nfMBuk3kNnFePPzdhKfhQSG7NBcSox5FRMFiaU4VAUhHWjRTFbJi4tWHdwGVQYANXmgCdLWG95PAjKG98t",
  "key20": "4un2HJJBp9ePrcVRAKG6BsMLAoY8RyFcQDkvtdTcVDmedWGfZVmfNhEZM5ce6i4B94Pu1qMUuirfKg2io75tjsEb",
  "key21": "5AtTJm5jebmgo9KFw9t6swGw1WQxaY7DSPa5fqbhZDmUW38YAZgdNTjC4bmMDLjk4pnpEUZ1wq8Lwqu3xAYDUGAp",
  "key22": "4nyvCcQ33fGZkWpEqrzcqTrX1YHYMUsiDJ1gnY8FzmCxBYgwP8k6qu8ZsHkabkEBYA18itPCFUqMAEPiWUJ9LypF",
  "key23": "665aKvTdaN1Fw6PkT8UZtdAvCXFsM1amBLiTEQ97PwiEqwXG19fFPW14hzKQcVnggntSg6zM9NNnWymdKfkir7oo",
  "key24": "4vUkGqLXdW9KbKQV9rhTfp7jTHdoeFS9cfRt6p5pbuBWzFpqHCBrugzMTLeQYFMyXkppPckpP5HrGSdr1FH87em4",
  "key25": "4FrwSc7i5Xho9CsG8UY4DGaYUeByiJX8MKFEAmUYBiKdZE7ryWyasL9KSJNJjaromqtQN37QXnfjNgz5yr9gb6wF",
  "key26": "2NTVKR9fgg1ZgD3o2E3X8f1uajw1B1zDiWwf5UyA682oQYexcneav4Jy3WrnKgy6xo66oFZ9jbJ9Z6z5RwvNLYLZ",
  "key27": "54cAr5BmwDdRhx7HQcSN4GTmQSa8Hvm4hFkMBSLQY2xabiD1mukXCpyBn5DE9JScKfhBiSXtAS9RQoLLUZ7BzgQC",
  "key28": "55EcEtk8LcLmC6raDnXG67sSqxMe6NpLHEHJmXQ5S7RLCPGjZ7RASRBTFUpxS4j7pm8WpWSiUPMm8btMBkV5Engc",
  "key29": "665KAqT1B38stUDhsDUWAA8p9V9ZChi3QAEjnixvv81TV4pp1V39CEDYwbvwz4nyb7q3tvmbExbwpzomUozJdp1P",
  "key30": "6ddpXksVJENLG9GUFp5SB6LqdwGjHyWZ3cuCDn21JT7GVwz8Ruig7PxzjPZrNT4Kv3qCgoUYq95dYLvKbo1N3Hf",
  "key31": "3ZnsCWCZzZ3HaLwLdWYEqDYnuY1mg2Mme3BQHPsuEPgyXkemSqaJPVDGChH6gHqTSnSAcyEYrMZNFTzs2BbQr88W",
  "key32": "3hBHUpqwjRSAFYzdSuQquEL7ZEoYmNM7cztn7cC8JH7jVsugE4di5b6QkaXV1uBkSafKGEZjKcbFc5RCWD5KDocj",
  "key33": "cVnQA6RJsp83Bfdm7jGq1hCPdQ5uxuVqRvV7njEuE6YYAofJYZUCwmHTArb8YW8pUzKX9AfBQtoAX3JuFDBNM12"
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
