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
    "62bYEZPgfu4qPL9Jen5k7rw1ZDnRVddrsFYYa6nPwDWbBLoUCdNeT5Nucc3e1vbeUboisZLGzgoTB2MBTfNPBhrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N2HXmi7peNsVca3RmJAyqDcBdGYykFZSLckijbLnyNRxktVaVHnjpABGNtrXrhas4KPP8ShozBgtahPaK8UPJgb",
  "key1": "2EVyJhGNcgoehncphZcupPqHCTnwXYGC9ZuebuwdKLRKrXE5dEYQokLgrbPNGLEFK68RgiDPvkcdTBWdYxkxC2LS",
  "key2": "V3btcZp7hnZBm4mhEBSeHRUDTzUafEg9Q4mrZTYdhEU66cZ7P3hNu3h9XmBRyRzqAFNqdfBDY1cy9sVeskHbAbH",
  "key3": "3RY3uUE2AqHpLvE3aBarRFJeQLyPAVpY2UnVExKbbCYQtRkqJMJuGumfyQLfjtREgMHrcYTUwAGpTrc1FhjqnY3n",
  "key4": "3bpgdAzxYqZ9Qr1unRzQNRpPVTcAD6Q5z4VacnmH8caLxWoVGGK1qCVqTCP3X7EdhXap4FPfY6Aty4ciHufkELuY",
  "key5": "56byoXyodmpVfMHnZGYzZ87gFryh1WE2bHSbCSQtXNiZkVJJgENBUMxY8L6UvYyoACbeWMov4FHHyfrvkdBnhUbK",
  "key6": "2YSfF3itoFNwfpkoRMCYJ5b7FLapuDCiLbfHWCB5aMorpYZ2qMpsoGvB3y9VDSoFLgTeUUhKKkF32mHqAJR7EKjs",
  "key7": "5EeRgGBpu2tt1anQBNUM8H6GWyKKXsbgMgXWdsckKkS1PEreN6iCv3goPZtmUQP5AU9Yj76r1kfA4KX5YFipjEho",
  "key8": "QyvpZf9z52p54GYwNNmRMzMG3aZP2UbtHHT9W7PrbZZAmMFrhLpKshxsBa6vg8khkja4QhwAsopHifAcLfTfD5L",
  "key9": "3Wu9qzPuYE94fixm6jKc6cScQT5shDQ3qcPMz945f4uKmhxm15bAjVxJsJeC164oyvrLgWddyQm2cYJ6JHb3A4SZ",
  "key10": "5f1We2ddthiYTRWLCAdLH7ykUv9gktQym4xdAS1ACemAJdyfSLWRaKH5ZiriesTRTfNNDTBAD2FSUafdkfLNK2Py",
  "key11": "4Tu5qgkuxEbraBWXR5PgQpeFdZGBLbCAZGbMf7Rdq8ApzyUzpSooSTJDr9N6rbtCUdQ3ZTc9tUjTabMfTE9njnAr",
  "key12": "3WK7DWfx2Qc2iATyoqj2kffxym49qsjh9DUSmxhP1PE9My6YTLAB3Egf6stFTuFf3mWumpCVE3cM4JB6mhj2DJWa",
  "key13": "5RKfazviVBzenG3CstG9vWFQdgQYV9pyVgCdj5Rk2SFv1bEy91mpf5m4qoxkPN6Dq629xsc9dqHLP1aNYFuVwB79",
  "key14": "3Z2caC4h7oMLCuLtVeetRcJfHc7Y1YCtrMvgbBYgZFy6Cv6fRrfogWn3Fn7wUV3ydK4CJDcJQXavG3JDV8tWSeeh",
  "key15": "4D3FRJXnBHjMH7hDQiqn8myZiMwksoaU2jVPBKuXY9Y5CUP6nfLpKmsPL4ZR5XhXZcf4RQtXkheEU7V7xVCQf8hn",
  "key16": "4pggM43dpwk7qg9dv22of1NNCMEcMvmsujCu998UrYE9nb66Fav2D29ttuWhRzDUhupB4KRpqs1TK5G5wmtfdeyY",
  "key17": "2hkwvU7xRuXPkYmyMQU3fzmqjaPtR6WYQX3YnXYcspTfB5ggggswtqgsx4EwfL5j7SjP7ThJHBNCbGYCMoWVFmyU",
  "key18": "437VqNDmUqWyHPwR97H3xsaFfzYBELB6ZzXvLwTvhSyEararLcKLdtzP8UqFm7g1Wvy3hMs5BooNcu8E3dGMEaAU",
  "key19": "5pYCACNpe366n4QVyDRCcQMc92tV9MYBaufMtDHxSRG746tMHWW5xCxVz1tcxxiCvwVeqNX5YbSe477tkKhHpgd3",
  "key20": "vDeQ4agjvsgCgwN3EwBwiRrThDpUteqEMYD7afg3YzHorpxb3qAC5qDpPeqDDv7jsfTnu5aeLmkB6earhUNQQnv",
  "key21": "5XZjYQHF5Z2vkh4epCqbVGPZDjES94zVxij53gRdZByYeas62YX2Zixh1Lzd5QYm1mGeWExwEhZsKWtpJo2QN8QJ",
  "key22": "4dciYTSChDda9vZXYZzJ57MUZiBsyNNvJeeAMyRiUM4BxyFjCpMZQ3sdEuhoAZs8GGNArsQ7hbsVG1cmBuFkDeMC",
  "key23": "naMfytnu7JRv8zm5ksa7S7WLPcQHw3qwHfZjvvKvynMD9eeGSrr5nBgyKFznRGYkzNkKYfzKZp7CnbN3FZc9LQZ",
  "key24": "2FtyCjn8rB9c8NgmpxmGJra5UoKiW1aC2B8bDKj2cGbSjLYNRzAphZNPytcKemNE5Eoj2hLy7DF3SK9LNrxUHZg1",
  "key25": "461qpPro7wkaLte3SYuwLL3yM1Y7FC5AkoYughy7xH7hnmKkVJBjccSyQAM8QcAP36sU6qQdtovyasSfrugtzgxS",
  "key26": "5VT4eJT3JJ4AyPmZ6WsGKwcxkGBTDFYWAchdtyXnFfHFASjj9cn9SnKfnnZyuj4hLLUSeU1bBaTEUjLgVUxwzRgZ"
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
