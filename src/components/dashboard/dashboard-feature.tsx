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
    "qE7qVoXBSoNAjUpapuEKBY2GQLX5QnB6nyDWWMUjkYDT7bdrjY7ue4YKdsXYg7sktG8FQVPy1doWZA52DXH5F9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34sSFyTANyAoFyEU1hQNNs9ZUwRk4q3RhndpLbtfD7nVtJVGt6pmMusvUUeFkGMVq6hoDvdAcu58gyKdR3dG9BNk",
  "key1": "4dy1m324WLsuVk4eLZmznRFoREgrnRVqE8vx4c4UTYde7PegBYzvJb7PHw7AKBgon3EM1oSxkUVbnAJPonQVKt9S",
  "key2": "3bFs7MyadAqx2HPTnWknKSWkRfvQekzf4semXwJTh9L9MwbyhtRsiiW3etVSb2Sm6RX2MmRm36BLDP6xXLE4uGTS",
  "key3": "2eLXHM7La2inNwKRuRAd8ZvD1NuXx2z8NBx4op33q8M8oAGmGpn2yxBYMrWfNBCR34qvhrbVXsSuU51KszgZtD1S",
  "key4": "4YWYAcVQJ2WnWXNW2Gq54gSq8XBpEsvrECBQK8ZdBM8wfZyqnDFCnVCAr1srkxDYahKFJL8mJkbLbca4tf6huKEc",
  "key5": "4rtfBtkG79d6UHSvV9buw7RTgUYgwr2mmLspp9c1G9PQXuE9bk54hKTtnNz5SyR7BR3LhbpouV9YgJE1f9XAeb9F",
  "key6": "2cbMfBfh5wo25QRNiei4Y1dU1nh8c13nBJrqiQzF2np6CixqHeMVM1sa9tyozSfvkV8Vz25xYjtHiXhP6G9ty3gF",
  "key7": "zYjBuBrQZqLGawEikRq2tVsU73Ay7LKtprK5CBmAq6FNX9MKFgyE1NBUjvCCSF6oWmEpEYuSqBS2dJKP2GbexPc",
  "key8": "4fU3LCb6bPQv4GtQfDrV2sXNp2Q7ZpH8YX8Jx9Maskv8FK4GHAuEAfJPMqTSERo7KMMmfy5oanuvhzsnUXeC4XAH",
  "key9": "2DFvE944sXwVwNUfMxZsJkuBT57t33YvAbaTGMiXazjp9ATDL2WS8sRG82Q7AHjiEUjjg1x399RNqnudRmfRfsUc",
  "key10": "3EMHr7yetESaDzqejnF8srXY9eX92xXu8duJQNaKvz5r9twoqrktwsEfnZkBYxmLm9tKq9Kzy5rCUwBh9YFuXysB",
  "key11": "2q8SHX44QxxqonqEVskh7Npb4ULC5jr7DMvX5cAxJFpaUfHC2nkuv63YhPtdbSEACwAqBEnijPznTWi611pq6w3o",
  "key12": "jKyWxy1me6m3muqRuGLxsqasFaLnEA3oPxaENuYHXQp2s2Ltha42gmrY8YPat8nb35ZchaaedXA8uRyQDeSwfYc",
  "key13": "3UN6nzUxSuMAL64ED9T552rTBUUZHMuJKneTGmppt6odT2hbgVjVb6MPFXFHe3JS1PDq3hiJPYW6cWvkFJBN1TXE",
  "key14": "Ze5jikH7354tozucd3nYJyZuMeY3Rg6tmRghKZx7zph2f4Dr1S2sWjYsaZQQufkW1HazUQDpji5SUPyzumLPjWu",
  "key15": "3fukvYhEpamZ61w5ACWh8G3ELsgE8UD1UMqRNgQ6krmMQ6zkMsPJq2zvYtxf8MRRodVYivDGg8roaUBg9ytCaRPP",
  "key16": "4uRLYMH4tCpGPtv1TtRbiYkzGcExBxcjXSwjv4NKTTUByH5P7EyYwoSMgZKm2NaFJ52BZ7GqZafCcvm9svM5WsEK",
  "key17": "2oTLCW86FiBo1jrSY6pNKjPgbSYPJ6njybySpKe9UYa7shi5PSn7MtfX7hQHq7v2v8bRLvrJzvwge1bPH4hgwwpp",
  "key18": "2ndVFFcK99sM4Kzs5595NFpTSV25MMTabg4LSWXoWu3hmQPcA2jbxhQBduL6r4Spx1oYXhXbXddNNsbnrxyvYFuQ",
  "key19": "3nQrAkroqjYNqZnvW1LDAS9615zYj2PM4J4nhDn26E4hAER2v9NH1iQZufKRqmka5B7xeofFYngDwmjht3hzZi3e",
  "key20": "WiBTx6m1F2KaemVDSyFifu8qKfqWmnmkUAZNzFPTZtKdjg7K6VHzkeqLA3DhG63BcQ5BUsnwm7FK16kUcqxWMGA",
  "key21": "2w8g6NsvYETXtDjo2xZbss1V8VjnynezD1r6gUGyq1xtyJ3qYfFuurZFCawofgwsDNtukAVwYbfHWR7mXMGBYKRu",
  "key22": "Z253rBGD4Agsv37vZeaTspEXLiNKGP4BJNNbrBYZUBJ9fpdbjZ7hdA6GmLuuQeK683fECfbRtLiMMymqZc9JQsV",
  "key23": "54JnE7KLPqpBhP2bpGij2LTeReqfCkGs7ryrjouoziU7F4vN4JaiKo3ojg3YgMyr3uiWmV9Urv8SRvSYHUTW1Xod",
  "key24": "pqCQtZ9hrmaXB6bDF9etV7cfx1fNYxUZKnpHJokpzLE1HhYZYbmAbzuGvCgQUt3Eqj1RBQaFrrsAYLjYuC91SB3",
  "key25": "21c5YFRTjBpwsCzuP1pX1mvBxDUGgKLGViVRtjx8b2jFXcLVVc1RhmMywc3Qqh4Zczs1r2gmGdABeXCQd8dhkMni",
  "key26": "wYhWM221VmMq97v6saTyMhzGzqudKouEukfBMLev7ENf7o3wKrX7mbpkd8PRodvCosMD7xFvTWBrfCNNc5frHcZ",
  "key27": "4JDswXWqAoKMPD7ygzz5V4EJju8EGJpBL3yNeD7RjV7PF8YhLrnnZqCg8zt2VvcbFU76bUVUvMT4cULUxdoMqdq",
  "key28": "35qw7KKUmADH6RoZWQgzRa9UKe6mT5TUwk5agwAzMJrsaFp5ceMyBxsYf83V3HF6eunRe6SswnUGdht8XWumf54z",
  "key29": "2kWFbePWUiGu9oV2zMGu7i1gfvSUWtgaGMTYQ3VyrXQE7TtKKty1SzKBU3r6uAA6d1EHYnugGfGhjfnKQTbDiz36",
  "key30": "5593T1adaA8Hae57rNu1gp5KkmbAwkw2rwqw76LAxeQydrnwZeQKNPs8A7dTngTefgWSiU6LZXvDb6HswZcNiNnK",
  "key31": "5W9ndczMuquayuFYzUVC4mqr1azVKQ5x8yQeHApJ97MyeLvRfoSi2WP9q6c1pFro9DCQE5GnvYHqHYY1SiZayHYi",
  "key32": "36yrJQfWhUnYMXcHybLZbM2Qq6mk4R97jDmeGEPLefJbsrn8yNx1HKw3cM9Gb2dhb7sGHM9Joo6UJFszcreuDM58",
  "key33": "3eenNxxNbi1E1XdyoDDEBHg8jE1vjxRQycGNYD9B269vEvxwq4L2YMZk9H57bh9k1xRZMgzmKgFXawPVNVXAo4Mj",
  "key34": "3hcH3BT3TBP83CHd7UPpqUo3TpZxAmJVooCNLEsFw7LPS3fsJ7hJy9dSb6ENT6WGEFr8ZLFWzzG77YFGD7i186Dg",
  "key35": "3bnGkbs7feNnS3K2xPj18sfTF8rEBj5r9gVTJWNGQ6xdxQ5PFw9sknit5vo34FrvKfqVT8csNxF15cEuNHTaVbEK",
  "key36": "4YRLh1vDkXxuc9LvbMtaxCQ2QjNY4U26HbwTUcrzEX87aEEarUxBVUqYcmNuhNohXzGNig742x4zxAPd4DQQQ7b5",
  "key37": "qS8CcQG15oKvZp7Ycd7dR9cJWQAifXFZ22HDnLgS2UcdtQucqMzHszzKmvjcKcrJnAQY74a5UWyXRT4i6V4kuiw",
  "key38": "29NMiU179SXLDY7VjesS8vi5LE7W66RzYasixexpqLL9KSw4oK8EG7WxizPhYf3Pkj7RoZWcxT2DLyevRF69e3nn",
  "key39": "581BcTCmUX3Q5S5rCszsaf3osbfYjDQCF1NXpaHm4Dc2a4YHcj9j1LbGNcxEfmQ8uBxe7LpW1o9AcnLVXBKygvmf",
  "key40": "4Fp3Z8XRazrxmCsVVn68Rgidmxa1nWPqDaReib4DicRL8irJd3jD8A3WFHVTyu7LbWpKP4yNUPor9KfyM9tkMdPW"
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
