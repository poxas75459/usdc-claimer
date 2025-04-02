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
    "3rRZhC63wkGa1iELJPAgYawseeivaDsf3Kt1zMLPwMAxAF1w88FukC1yGpYgJrEfsbhFqhtFxcZaPoxrxn5Pvafs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b97uJ3h32kDuo96TekhEB5Q9pQywoXbXnMZjgUAEPbLJRWXUibMYsS9qciFpzr18X47Cyy9Pjdpz9Hk1ukCNvoX",
  "key1": "3Y4CJ1XMPRrU26nj524MJzwn5Jrgqdf94fPLmdvgzAfnSn3CDvEQ5jscfeXpRsf5s7cpg6iQLcfXTRTtNpP9nwYT",
  "key2": "4XVJnZuv2VQdR8JAfo83NZimvR9M3XXfgE7vtKZxi3B8fncgwCUxcqS1m61nEsU6Tm3MLZXxMk6yMeGRmbAoRVKM",
  "key3": "2bBTjd1EsNrGVYzBKsX6h19N4BANwti6gCM7wHBMHmvDr2ZrdJbsezJURPEpuqa1GNfnTibFyZRnVn8jyJRf3hki",
  "key4": "2aYU2Ghz7ytREQPXMJDPkRFzG2dKh4XUyNcxw18QwQvnueo1ftDCknbNsEejZP3w7RFtN8ZekVjkvGyCVhEkZUtG",
  "key5": "4YqrAccPeoSsfN6U1VnMvUp9hKzrYbi6pbZFcDi2WKcyTGmwvpQpsqBGNEADoLEmWKA5HDwZykaUqidG4cxeQQBF",
  "key6": "2HTsPFqVX6ch7tkwyz1KFz2wq64FCX2ei54gSrKHenUSZv7hYXseisjoLcFpzCFEpskfvQXbA45VEZpYGTBXQaTR",
  "key7": "3JBcfQx9noLy4tTDUFxAU8vdHhYdYpJfpxKKCYdW8EVXvZs4sUFNzFxL8kEM9KMHYYiSfLiCcBft22Yoy1WWtyAF",
  "key8": "5kaHbkP1s4HhrC2pEut5cwcgbGdCWYGuiJ1c8S6fZmkKXqmf3f7RKC18uFkmjhPv7yU4iEK8aNtVQa9eBCpxbuis",
  "key9": "2YZ8pCgEdLUMcpB1YWH71Xz5TJgQpW8nDn8fpPS7HRnMTLUdCMiSuoFGx7bQfkGErqsYzvgkvrqLQzvDktdEdfES",
  "key10": "2XABjbjzSBhc7bsayrBoLHUEHo8XKbXRNEnX68ZHDkzP3LcEREB9qMYmN4atwbhvjgz6cjatdTb3Z6boKtMcJ8zr",
  "key11": "3hWvDviCfnbSKsxZPRWJNP2dKLN5S9qzdYejqYgD9Ev8FFgxBev7wCA4wMZVpAUKJw5pdxTX9564fTbNp6fhUQWW",
  "key12": "46PZuaNvoDkH5haTRgTAo7YWWkgufkGYei7Sp2DdzG5KE9MFNMwuZq7m7pTiYL4U4xWqtxuaQC3jDdQ5W3B4SwYY",
  "key13": "4YXTafynhRaQdJpKZmd2vXqEqhmd6kpT55MzKduD3YK86iiH9eczaz3ewHEPfNdVZuX8UgBtR1EDJceiUqGBYTe8",
  "key14": "4MC2SKX4q41Jawzo4kxzNBoSFqCueGgJvH7YpL5cLraAqD3Ua2aLvnmF5ZTzVKiYZAPJhLyodYnXR7PUYJUbA85z",
  "key15": "59WmKkxuo4J996S9Aw81faLHzgozMKtvF1nKCoj6iTFeCkmaXwF185Hjt1ZqxMCQbYP78F1BvKtXqbzu1CKzJv7W",
  "key16": "53BG3WbhgkRSpunTYUpmj1kfYv5kxTXkYAHvvNbcumyn5pgbpwMF8dyA4gpzS74bDUDii3aDVaNDEDo3SSmd3k6x",
  "key17": "5TYktz282pNNPVCT3kFtSwGsFY6teAMrQvCpczvwqxvWhVCMicTZRCEhSc4hG28rPWecCNAVq4iEMRR5ZSbYWPT6",
  "key18": "27cBQnzEDDfdWn28es7aA6KxAvTuVYX4Bu2H4sFGYbjkHJqaAXoVmqPgsxepGethJDjPzwYVjk5SUW2JpXuhH6WZ",
  "key19": "3pWAYPG1x2KV6gNQ1X4Fic3WXWgnhaFv4evZdzSNmmb5B6wp7RwPbRBT6rF436BLxJPDxAWYAo3obNvrjqusXeV2",
  "key20": "56QSG7oPBjWcHc5Rt3cs6yUsysTSPM2gFVxn5PBXB7qJs5TMdNubkk8mMuGRrUFw1tB6KiadUU3KhDKSiREBcGng",
  "key21": "5rhp5Ga3QE2ZVuwiSmLPTVpo57eJP3Y5HQGa3znYQTVWwZuk53T4qgk4Hnq3uEASwrts3TikCjw9c8SBzFg9pX3F",
  "key22": "uUhy8ogcUVgBq9RSLTTfDEwQohUdytoR2aZavtPiAJwN6i99qe3vZUaX4j7tDNkoptKdCpRB4ZZruTB2o9KANwv",
  "key23": "4SzFADHrtUdJnJYoCxxR4kbmgAFUaaJ7LSGJ4JGDrfkApLQu5y4bNfmYWmYgDwuT9CGEMYyhYhD5jTU18E1qgn7m",
  "key24": "3JmwgwdAouhaerixTvTbmVuHkbeHxqCXyc3mqD9i7xFheWwTtipoENFyn2JjvCb93cDFTPNUkzYBwHBWUUMouEzx",
  "key25": "3mvEbtme4L6YN1xJnm7iZiArX4cRF4QSnA91DTjPTRbDAAtvnUGy2xNbKhii8BE1g3dxve7hXKrWfFRp7JsU9Bma",
  "key26": "2LA3YA4HzsHB6oGduez2URUvMRJZN5YbWGm95oYKJpWsXqLSmPALLVmTtMyiP57i8UpyWGiyo5UDjBGYbAYZQTYr",
  "key27": "2F8xP5gNy8nj8EkNutyBS36S6ZxRbxKdHqmozLi54G6uSHizc1SnfahXCeLPmzdC8y2z2DRw3kF6fQfBuninzv91",
  "key28": "ER7GCSVy5UNTvP3KoFks9kZbd532Y1gaHt7BShnvkvLnkxTXjXraY6aTD5PwW4mybYtSor2yPrcGv3ddhXNRoTE",
  "key29": "3v7onCYghAh8FuvwBJkDM54ynoWzxnE7afR3edWnDboy4AzsvB892VyjFcKgqpZy46nSeiuLE7m6n9vG3Hvi8HfJ",
  "key30": "2SUbHMvp8dEuRZsta1DP8TkGaaWhHeP7gfpo94SaxZUKaHno9UNvDA9rL1ktNowav3bKwzk592VXXHw42T1ENy1c",
  "key31": "rDkYDGJUnLzpNwmcMDd61DMN1XRVLpdgCwShKXiBDfeXRAFqik9C6sFPkopDYuLvbfV8Ee9uYSBj4fshP3Ggw59",
  "key32": "3CPzPM1xRqbJaZYeVR3TWWkYvqe598mUVXPXQuScT9USE1wVYtiaGSXCf6VvoT1mAmESxY91fwwFV29rR8ehnFVj",
  "key33": "2qGyP3ZreUj8wQNej3MJA4FqzHcKypFWESKJfWHEZpyx1nvigHq6dcEoeSx4NFYMxWjZ6TL2rexPgZ2J9a1dqWTH",
  "key34": "3AmWzDzpez4gfBBxBm9Za8rGrUF6ESn5nfXm73ZeVExFZhyXb2h3XZvcGDktPeaFRTsV4hvwhWLpr9F7FdicnhW2",
  "key35": "3kUz4wGzorsDQwpXPa3NXM7aY1hF29uPhSMQ3BVTV95PBPQrqknhuKFzS4Lfgjr3N5YxJ3zxfqtqpdtL8EYwW6HQ",
  "key36": "3DusuiM96xKZ3kbitgRb6WgLHCuJ3KVkULF9eEArS9KtmP52jJZMzgbfMQrsuo4urD6SUg64Ko2oUFnUmyv7Ub8c",
  "key37": "5g4JW4NCxkW5AGYTGzn1n7JvEAyQ4WQojomdiqUQb4Sm5UYUX1HxybajedWM7H5C2bcWqPzfz1Bya6Mx5YVL1dye",
  "key38": "58aBjQDNjRxT93emTo5qZ5gvxLdb3pcX7theddBbrNjw8SL6vGfW2FgLsc3DhJ2TYNyXYfZt54MfidQHmK9A99Kn",
  "key39": "4HwFsWoXtCu8yamowhXAVCMnt6NWxbA9koLpkpQmRrYAPCkhbSZ5Z8ZmqizTAdLuZvCCWR1WQCYFJjHFxbqQBXJh",
  "key40": "266vVjXRfL6ANAJ3dVAjU9ajrdaDYqJ6eziqt2jKMELzwPY1aGzvdpFcansWSf3Wipr7zu9KfK8ZvYUNHpvhBwC8",
  "key41": "kKVCtBF6QRih65vxZoneiNbQumz9RB6B3YdaLvTH11sgA8Kt9vww7eT6LGyxUeASko7cZuEdSV9YgbNx2cqY9aR",
  "key42": "4ZPX4wPMYmEapFyWziULTRjHVu8ubtzmzfYtjrnHWcnv4TfXBis7SQnhjE2EqEXrC2Yh5i6mJYUGVWoSAyWg8dgb",
  "key43": "44ZopnXt7wZRJHp4nEf6eDhD2GNMZAenMxs3PqWPHc375XYwfLYm2RKuKm1B8AnyUTNNWaDfeHyyfQrzMB3BdxrY",
  "key44": "4eKuoXBfZGtzWMEtJDeyNw9hDNs6hxJZTNeD5fxnkS6TP3yrA7FUYMcpJzvNMGpB9HNWxvuevMHMvpeSSrXSVJdr",
  "key45": "2xgbzj7snkDWwf21yzJpY6V45EQ4nVw7R4TN1p5Q6uPLEBwxXLwcCZHUPYe4vFXkM2T3SGRdoWrEJCaJPmfU1RA6",
  "key46": "3wkUqfPAcTPtrKQ1tByDT8zX8EEd3ByCMDktHu9hwsSurnNKykCpN8upgJaQboapSFpNLoDjXYyJGvucjJVfQydv",
  "key47": "4DUSi1DLpRmaFcZoo63BoW2VMmBamNYNsZsdanNnbJ7BTeiPCckshYNQC4SaUVofkb1QGKPo2scsMjnf1HDhi8Rk"
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
