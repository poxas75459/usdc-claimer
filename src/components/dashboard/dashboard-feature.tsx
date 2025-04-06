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
    "4xEQBU93N3H8hdpnCuaERq1hptVAcKk8MVWkmYHxhdhr6UE1dCCS47BZa6wWXxq34mfaRL7fdx1krhwp5Y2tYYsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GN3EtF5ompg2afaWs3NywJx5U3jDdni7b8ZP168Nco1xa1gFNTSoRRYMh7mSJZgEFh4YcA4124oMZtAFjY4aHth",
  "key1": "Dt32qDCXuAL5ustVbRN6wsk4TJK7JMskXTShRBBHSpw1rSBptezS65UZSv5k72TJURsATnwutqpkJhCuYzkTb4E",
  "key2": "vTQhL9t6cbPhr6RwPa9VR2eWFkFYzUobLLgu9fAvy1k2DA1ziioBoDDoq3gRFhXmcS36wQyvgKyzmazM6vWQ9XV",
  "key3": "4QincY7RrCZG8EFiidpmqcP6oPnco9EMp5BKFs7EkvpJpVcpbL57cuywB7ju4QCV67H4uji8MMY7jZUdaGwcmhcC",
  "key4": "59TmHd8oZnMkJpDKJuHZCKpi69kQJT2iTzXYgiZqVbWTQ1gdPvF9Y5JehLznvNue26cqeyXdhUkCGJsU9bAFN3qu",
  "key5": "5Efchguy3okgGxjdcK2WxVSfLo3hSYq7FNYMwzPniVeFTCiaMpZGHDoNMkY4BvsBJqHULirndTFiXffbC4RvAthu",
  "key6": "ouG82X3Xz8HUzLkzJesMXau7nYoyr1rWCMZdq5ZXsMv4NhFotcvq9oqgun6RYUH71XKrm9yrR7ETh6JRYbmwNpT",
  "key7": "2WD8rsyiX5YKUMfQGyJHHGrg8RtNHmbRvNmaqauXCiV7G8qUgYM8mhBibVZ5b3KknSX3TFrcyiS3q8Tys3TPN4dv",
  "key8": "594paoZE4MFokaXhfPqHvLWZDzidnDAZi8vmhw4NZMpGuQo9MNonWXhMRCvkYJmz94qhni4t77wDJ3iQmQiKyooz",
  "key9": "3oAEwjem57iKLWkULnddqz9pmuSLGKefwJSzy9j5HZjrs1iZUpfEWoizp1tZTWsxegAwH746asiccnWvQLP7DxBr",
  "key10": "jrzTTHuj6QxQ5Qc5gwDtDXK5DBugi6Bq9nfCgwMzFDNUJ3BX6A7U7tivxQM7dkZ2rxQXWyDmF4tK4McLjDgaGio",
  "key11": "49uzwPJPK6q9DDn3VYL67EYgdRtwTJoWTjQw7mfbuGM1PL2iHU12xQ6uu3CUirD8dMXNehf7RXLikHg4rmAERj7M",
  "key12": "5sTDrDdmrUMVPEGGTigmsqHw2sanhaYfu1R9bZj5o1dDCfppp8sfuydisx9pq9cFBwG74Se1AUqMfSXQqEthzjpz",
  "key13": "R374xwhAc4enxecz2sSXq7Q6KRdCXTaXw8TgAdJbxPYSSV8sS7nHasw7q1Po3PAHhzdv8uPPyTfnhUegWdvWgv7",
  "key14": "2fPLN1KuKwEDAq4o5QffcuXh22LU4g5QyiAyv5a1tRjjn3L1JJb1TCqC9Qqj1Pj6TxRba6syL76nEpCLHLYz4dr2",
  "key15": "9mJWkumKSY45RJ9eLUBbsKDZhmWgRBhi3dZAHH71TETWY3A9mepUt4XkLmvHLpaQ3K3Bb4AYQ5RbbahDh1oshZR",
  "key16": "2oPfLeiBemZvAnQbGps3JvyVnXL6jnVh7REhC5VoU3fN3QLaLdpkjzNXaxxte4L8XPx4ca7UK2NetgzAMAwmYciX",
  "key17": "4aFwefPxhTEBxpkwFnjf9EJhh4ke87uCcg2vDLreVsUPzpStFQSAoATpuxrRpoQM8YPeMTPY64qDXeCDPM5kGnGW",
  "key18": "5Ne9PKyZb85XLNsWoUuPgBExNrGmkAJaKmfWpJHKTFT5pejo63idFx8Gn6dYkfU96K2bez2r7YzqdELqGndPijPm",
  "key19": "3Wm95Fe18Jdvx5ftixprZPAB2wFbYPmSG1WBSXyX4rvXFyLWtCeAvEha2iaWiYhNi2pKsvUJ6YveX6EMBb4TiJ4Y",
  "key20": "5bXS6uJ6bdMJFh7JT2dK8UbLHCxChymQx9TAdcqYa1XSHG8E4RnyeCeoFSU6NRKZmYX7ScgpN6bW2WzDqtisn8F9",
  "key21": "4NTWCh9y6m5S7ryfo7Cc2PsF6N6uvyjMxxif8xTgLKBxmWF1Nvj9zdtYxgbnyJTpz4gCzXVWE4P16b4xzjc55QqN",
  "key22": "3jCGPQ6Zmj8QQQeUAhP8jJie5ymAUCHZS4gS899H2YfbF8wm2aFWRSzEXvcwWH2tocrPGVyYXHnWRxx1XjA7abnJ",
  "key23": "2ox4TWbiV3Y8fv8avrxzL9Bx3h1HKBG7jPkzRxjsFYMJod7mPJuRovzSdaggYCpnPobfofAgm53DK5jqHnukWHa7",
  "key24": "5dTTWsai3T8chQkbyhWc28vcz8QJ3oLZxaPVmTmWaLnTEC82AhkhCo5mGfHECunK4NEYkS1Db9vwT7cLzJBxZN6g",
  "key25": "48QFVaN9JSJWs1TneRnzmbqzX3uVnA4iJHqyMSWEwbznjqNj7YDXwRvomztvW9cLvFFHz2biStDnisgSFaanBtZd",
  "key26": "5jynodKKiZoTT22e9Kw6PtM92BwitpjG9rdLXWT3i2NACqT7z7AYDV5PEDJFBFA9xqDp8Hhikzd27rkqQWfYh6Vq",
  "key27": "22GqP97bz9yFxSqpWa55NzH78MEi5ryFmme99PQQBjaKgrobDzSxKpWSRHXiWxaJDS8xgHNjf2e1xkqmkxmdMEY3",
  "key28": "disYBGoYYtnKddcCifymWgUNzB5SViEVhehR6iiRZiQhBaAvkXkRQVGvYzovDitZwUPJiDtQ5wBy1SxMYimpgNd",
  "key29": "2AZ8hJQhPJmfSNWLsHXtPQ1didXKeJobuwL5qyMyudLujFD8UzVKAyWvrYi3qfKWfxy1sgyH9ajmum3BRZxdkhqo",
  "key30": "59wj3FpmDN2njegiQuBkfVk2Hx8bXThtSfiMmMqK3hzbScYSqQPLiMU16HgTS1B6rgHXpbL1m5SzmW6EXMaYSgQC",
  "key31": "3gjrfWyLpErUDFiBjk7fhNTVPJta7RPwv35BaU1QAbsiZrmMeMvHbWhQyonj5qGeKERsU5eNMcXhMTnaPVEgH9mm",
  "key32": "4DSLN8sTvS7ihMWJGvDrSyn1qiTzkFeJwR9DMpMj8NgFDnuPjQxLwJ5D6dnst9UB4KgdrakdUUagPFPhppKNFmXw",
  "key33": "4gncy4EvmWG1864pZGLik2yqb75raiopHdDfFNcdsHEycWp8s154VAiDcRjz4TmGGJVUmtPjfad5jvjLL8TRAv4H",
  "key34": "5ipVqpdwoUXR2ETRQwew4ePidKRfFjrnSGwSaRpWKU12nBWSYm4xD81isyTSWJDHMvpXpEa5UN9F7ed7e4DibDMN",
  "key35": "mqM6dNgXqAskQswPkuri5d4KLWUX9orBEsDkxE9QcYssEEjFwcrSrY23i9YoPUms5rVGpgQpBY9BXyk5YXsBbRb",
  "key36": "mqBtnKKhEupAGYXSfSxpVUFzj6mN6tErRyWztgnsFmrdGFH3gNbCX7NCx8wD7VarMUPBKBidA4kBcJXiZTCbHLQ",
  "key37": "2PXVhDyukZf6WJx9B8wdFR86ZiasLVXArhi7EoyRiPC3UpSoiknAJagMYozUC6EEVb4hmXtFfr96yG6c2YwcKWYw",
  "key38": "3trqBUBH27BifZLQSf3VmbDSLWpNyeoTRcktzocGjeY8KwArhjaTxoBYLpqCoyNTJUaRxorhPYfspRhJ94cquwfT",
  "key39": "5GhHkuX8fMciHqPHnHvmPyA1JEi6LPqQ2sSpRLzhuREk2PBMPkj2tfUyWRDVa1wUU2qgZdvTFB2N3R5HVAcXXiVh",
  "key40": "UyEiEF7XYszyFSqZv2m4Lods9RBaB3x92LM6iJGdDx1cobSM4HnCU8cwzT1vNgbsL68hec2eiQBN6cPoYNn8qCr",
  "key41": "4UBDf2Fc1ouwteiWhqkciZn26e7ydnBtJUfMwRwaXaGyv75zEd8PMbd9RnMgcCic9ZSNWYKneCWZNwp27YP6A79q"
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
