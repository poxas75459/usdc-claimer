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
    "45ysz8Vr7XibxBYTrM5omY1efjnr2ZrFLm2GuW4HZqUg3yad3iKTg1ip3tR2AHKv7sK6gHJUi5QvLq5Mbqb1GiC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyWgh3SpXXhbKpGvQ1dYYpPLm7iTRj2sRCmVtvMGJYMUBURFx8FnwexoR47RFhMKE2mBTssdLXazwwfpWskZKPA",
  "key1": "5J83z8wNaDgUMK7Z2C6gHGWKkCe9Y37ZM47KNWm59pcVg5A2jDj32mxzBYiE7Wt3v7ZiWXBM4GsXRfNDAJXniKf7",
  "key2": "5CDRYB2Gg1p7hy1uj9x8iqFaxzKHsPx4K9mSrAWL9CgALWSez6MMsAUJ5tpT7864mrgvhiWvAmrFqMUvyFFDzi7m",
  "key3": "5wzYAy8epZDiULV1mXHfaJTC7UpgYRTc22J8sjzu98G6m6SPUF2DJiBXxeiVHPjdtYFvbjuDRNbGh4aCrzEHcpGe",
  "key4": "5s7q7cLPPQFkNKix2hCwwt9Gnu7LBZSQNV7QFwpGrdndbh3nsdomz92pyMhF5Kzcv948gwkhsye7foRyMZ6ZGXS6",
  "key5": "4mVQw7KcNBjTfBcV9wjPFdcQAoXEtyoRD6y8YzsZrFvPnZMNBBNdFNJJFFZrjxt1ftw91bqmJh4PSSSmRZVQgCFZ",
  "key6": "27FFkWTSw3bhiL13Bbh6KhXF2LTUDs2s9QaCh3Dg9P4iFPwn4a3wuMX1NzEiwhziMBzriLjdHkKmBND31CTVXjbb",
  "key7": "2DQVwk35nWRcRANJLqRA1qBXdX1Jwjyxafqc4GEnUUS3PNdiGPZ974MzVbJ58VUPM2gmDuwP8CB8pthsSTqvCz7J",
  "key8": "Qko1mdLgPZBkzGAkoshTq9tgURCRH8tBKyKVV54NfR7y3bqx5CPfnU9TvFSmommBhFXvLcKvj3LGYAsiWqvQcSw",
  "key9": "58gNjYhVPGxPjnTawmudegS3J2vqkfTsLsdJJ8BbW3VKes4ZfAJdSz5kZGLFWsBTqfb8Xd7UJH8vfHGhgxw5PzVZ",
  "key10": "4r7R8MSw3XxQHWkc8y8XuARxwo2KQFeQ1VufVm2LtGksfciBfipLrpCknFe73wEkD8Cfarr8czTv6gNmvBLywF35",
  "key11": "3n4KNw2YPfJ3qLGe7P32SVwPh3ajJ6uQ3NDAZssaAbGXkWAf2qR5Lji2EH5yQQDxyv9DM1rfHBF9jAownvw6NAHh",
  "key12": "5HoFMo6pivF3PR5GoR8CQtr4NVCuC27bf8DR3fSujNYfm52xSNT5anFLCwUYmv58VnX2LSgmnb8c3pGbGZA7ockr",
  "key13": "2j5BJHnGxs4bxEnVPMjEBw5pbkDKukzUWLmrWHGrTCkJVxsMaT2QziqQAwbVbUj9GdHP1Lfnns1iopM7eNw2tJhW",
  "key14": "5oPQGkQE3fS6NQ9WrGMNizt8WT1LWsiac4ohSgprGA9X689ss8mdY1c95mr5dtVfK1tBGu7g9EqqxVdHAo1v987L",
  "key15": "4bLkwEgCGBjM2CPWzkpzW35Lpfwg45V6YCvpKGFdqBGe6uGUag2NjyAUhTg1U5wxvLD4RyVYZAN4QYPodvEjsz1Q",
  "key16": "5SPdtDVQmhvhnE9ynh2SCJaxBbhTcf9N5ZEnJusepdjp5kAV6Rn3m2x2yUposiGaEJRE9fzQdfzzv9ZKUmutSrGn",
  "key17": "2CQQ6pUZKPXBLZodMj6qrju46aFsJwv64fL5CeU8EttTGApVsCEqCtebf3hqUNi3f3WPEiApgUqkQgTrbcA3Nmgv",
  "key18": "2omqeYuNWpT96xZPUjdk8HHL6ZuimdxA5mosMXnHZtVE1SA9oS5rrG73vzg9WBN8A4jaN7NiMaLVX5T4p6iAMfT",
  "key19": "4u85B1LBpqRAVMBrdtJ5JbAXuYGdquueEZkkqKGtoLtd1N9jXog8Ht5u724oe7xs65CL62W4UpPeU764kSLj5jgD",
  "key20": "22dhbgpQw2q8ZR1S9MdcGkLdqiBUSXp6XWsfb94rkBNhymL3zEo4a9s6cotSGts7yD34k5n2qpBB4heAqC4xDX1Y",
  "key21": "3nv7qUS8cUsXeF3yyNvkpAfNCr8cNsxzQTJJiNPn1rB5DmraE3k1A2FyHv3myPZrVLYhXgduLU3jWBFu3vbR8CZs",
  "key22": "2wvRXK4DNNJUd8VmsFAgdTbQH9LqJu46nwqPkqKwowKuThNJzvR9z5kTYT1dyFbdxTFW6QKq2cLm4duLxP8NRhz2",
  "key23": "wr2bAuYaPRQztiSYa7MTiZt8PDFyTCXDX676pVVGhNMZicevrrxhrUGLSN6vJQEFcmNkocLnhPrkjAvsK8MaE3N",
  "key24": "zSpinFPPH9LAjhypfCAV37ns9QgPLmJxVAWN3aTpuwNbar3aCzLj4dSf4ZtP5AzUJE1rzdAb98p4CUncgNWh584",
  "key25": "ECuYTjP9kmmDwLq65XrGfDQnmJ7uFYzQBtSAcgNTFi2yUR2NccmgiSnBHTKjnucKvSPNMKBqKh7Zxk7AX6nsxd9",
  "key26": "Ua3kSToMcfuN4Duo7j6BBftjfJBg8F67YA13QmzMxrjnSaXhpBPNugsKUT6srZL2VoKKETcmtbkdi1ZEzYe83Vc",
  "key27": "2kncfucJRuvRPnssoaerihhVWSokbb43fMwb4a3pRmjtL1YFjvw6rLKmU1NiAEahoA97Sy1rdCV6Ab4TvfzwMTn1",
  "key28": "4Ef1w2b642MTxyJs2bgpKdQ3wp9ukkvmdd7VCrvK3GBpXAdXENv2Pa5XgZBhUBqFaqJezvCuzPLvecmYaJ49FdjH",
  "key29": "56beNoVyR3bvTKbsud84k8Jic3vneKZSZotgRCrNoZc6AikGNKJVgzKjQKWonocBmb5JT6ERvH8yE2sT9FZtDdM",
  "key30": "3qeAAMpKpMBEwoyUpzD9SHXwF9eKSGucNnS9fcxUGdbaVZkkyp5nnCCYwaFMQvC1gE3wmoMSDS5SVYpLnXKr1j96",
  "key31": "4iWLWnAkH1XYFxEYnZSQj1Gn1iMfdZ4bTbuBhpGhe89G8Q7g6NuS4ozD4i4snFUT7AJjKDtKLFioaHhF7TGtoEZv",
  "key32": "gAayp5Z3JPegHhZYghMW5vMSSBDyQgzASQbBq4qc2Xy52FyoaFQo8LKYk3rr9RB1f4uFtLEmNLLLmjpE2fBAptZ",
  "key33": "WVkjxHs29yBSZzBZhvbA1QTb3m6FcC2igNHdsh8UpBsDbpP357zAbiJqFiQDBovorNLSQaUynYAFiZ42izLdAAb",
  "key34": "5JBGRkiDDFcrGbLeMLZpPJTssc4xLGsA3RHkfbbueoFC1QiezfWeomwys1mmfEhpSQxVqP4ccVgzUdftWWZcTbgK",
  "key35": "4uUR9NAAy3JyJefBYLr2rMXv6Q37e8W3Qoj1eS46P6vXrALtxMjmB3EGafU6xtZz8wx2LhkzHZTrgPQb7aXWNTv8",
  "key36": "5dJisgdY9Eju1frvbEW1DjCJJQSdRQBoqQVsYpEW6biReXf1a4ajN4KNwVwFgek1HV39BGorNU8zaEMJaxCmFbCD",
  "key37": "22zUHxu6HKgMNybU5qKNMRiTnMBzVpGsLg9D5CX3S6h64N9Sgse5LNFZbB3vffqtRbktaQVghJykhMDHQJ7znsNz",
  "key38": "53v3npcWc4gpsBdxdRp79ktuomWdrz1bi1aUJraSNGaebN7pY8GVhFzf9xEsA2izR6ZzYPHFqKHpg8dwX3NUwLQt",
  "key39": "5cxaJfpAC1ctCHu9AT6VusFP2dZ9KnQ7fy4ZbXcpyB569MjajYoJDbGEDaPnsQmz6wRfsS8FVbNbnWrzmJA54gnj",
  "key40": "3LAQA8ZQjSbfTVkRV6NNhTWYrKAVBukhwJp8SGEPn35VEQLTRgZKpv9MDMtTsD3VE4riVrrPXNbuPiFb3nrSXHAx",
  "key41": "5RqxebXC45aFn4n5zn46jYGmSbTdqkNBYdr4ULESYU1CwNeqpzo4c4suUoy2v34Fu7cvBshrHR3NHVb38S5E8miy"
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
