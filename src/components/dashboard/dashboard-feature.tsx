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
    "3TvPQ9TABF3TEdjx5eT8iXhm86vTdoeABCS8m3XBM8wJhn6QJwxCnGibS3So45K4GAmtfbi8Hzi2AJM2X9aifkQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WGLgNtfWLxjzrTYtxCZgwsBKxwRcQUwAE7Z9ojGdunKEKWfyUC7XgwXc8h8Hj2suUvfLc7C5crLZqU9LedZSpBy",
  "key1": "664LPz6VikEXpHCS94frCzztXjAEyCz638Hm2WretTBeezhhRMJSGUtzRxmKmRtgc4ufaWw9QcHPv1L5BAu7Ekoy",
  "key2": "2V4BenQDoQet9kMoJGMLbZBtCgxJdxDvbfAT3XuXKyi1ATaSZgJFqiyNPhmFwTJh4ok5pyiLWAEDvvR94DYYZEzr",
  "key3": "mk9DGAJVBAPM4bj5sJbUF8BXwGvJXH2bKQem2XmYBimdX4tSM3UE7ohnWjviAhQsouVkEvJDNuGe8xLgvG9PAqr",
  "key4": "xPaNczJn1kL3USuGz8vatrRupGa7NZ3koGjuhdxCW6iavQXe1pcgmsMExJngUnN7SwfaR1qDNMFpaR97vZZwMBx",
  "key5": "1z9TZhVaxTv98LCQVogPwPhpGdrqAt7yFRpjLdBaZoxLFwTcAYFobCJ14DH5pBF1PgmsoYX21o1wwTY4XxRSaGg",
  "key6": "2Bqgrvi5ZBHbuXrEZaGgApi2gUJaNM3wxcYZ19Pf7apM47z3W7WosmDu9j7MEWA6Kh4UFyCjKiR1dyXtRaRykCXu",
  "key7": "3WYYsAfma4MHHridpkxtR8bgx6D5w7kTVgD5xksKVBdw937Q6R7bxN48u58XrxosQLQ3bpLQcYAbWGZXa2mPdnQf",
  "key8": "oxcNnxhhKaS7wXqC8ieA8ChWjWufbtS2Y4iZDfB6rHjvXH79SCxzG7i87b2kY8TWfNdbfJwhyk4f1Skz5C3Tf6q",
  "key9": "3JXpXqYM8AvRxQ6Fap7Sgy27nPBuKHMp2qYSWeDfzMAQewGa4HvuFjvU7Gz4gkmCdRrjESHYqFx6eX7cwtpRLaYx",
  "key10": "32XVMQphpTp6vktZToB4uu5RQ55LAbaWEKj8miqJqtd56t9gE1XtvcFaPVbT5QqdLStvSP12ntbXuESJxBvBMV19",
  "key11": "8b5xhywAcjwDhwndmTFkqQGzqxZEuf6rAogB3pLsKqUQEimjLWsVfxzQYy6RDiLF9uCTqnedb1vpPxwmWDeFpNQ",
  "key12": "5npYH8kQ9C3fYjYVdmTnr7r7nzEXsBoEGv7hSz4gNjyrtGvorDaFd42TxPqp22VgMdfpdSmUPE7VSFVJtmQwS3vr",
  "key13": "56AUKcBu7JcoeXcfnw57Q5jqXdj5WzBDPRZdAdbSoqrsbRLtpKJLxgq7AmDcGMa2kjzWDfuVamZiDx5wW496o8Zm",
  "key14": "2eLnqNZqhCLuYLarSjk6NZ5AmtizhWgd2KPF3iNE5WoiEnjLnnZCD5HSWTUJmRXtTgdFBFRvS6y4EMKRfv4JEh7",
  "key15": "2qfCf29jonjoTDBavSLsjAa5QtKyh5E9KSG6R14skcdg4bbXSa1GLFTFCaqqwqr1ho9c2KhBm1yFp85ETtVg2yUK",
  "key16": "2YHvyU4Vefbf5UiZPzvZM2fBXo15PDSynZJDDgM8qUfBxaj8sCCJp42CrqGRTEPDDJ4HVsgG6mgz8hKahmSzGupz",
  "key17": "21UQeZtP4HXDA2sTBBEvLss6rjZZRsYeJ8E53PqwBbFnVWeVgnmLDysN59giAEpXPr3NFdzHnQaN1WiHxrQjGQx9",
  "key18": "2s1oV9CACjR8WGXjrtPPZDr7ihVXYpissBWM95iUWVmxsrRhs3phVPsvuQ9W8qJysgvU6whMMiNvnrpzWjXXgW58",
  "key19": "2RV5RsycvyAsvqvr1A95y9RmosWfoGmduXU4t1MZszSnVdue4asjerAShGi48MDckMQUQD8mSQJVC6nUrQ21YoqD",
  "key20": "3oZpggZVSrT6i67z75ahuZWxnrk3pc6MFjnex6rJjsvrs23rrL7a5p8swhCAUi7BnxPZYwKx7HN8aMKoMaStnmtP",
  "key21": "5gYSQ8uV5My7CMV3DANJMUhb3y21xqJgiwwyGceVn3AYuCKDZcm11jLsWQ9RJ7h8kVbEV824FgMMSA1H4z4zGcaj",
  "key22": "5uWKEKdFtCD7kbmCAjwmisiEWuYRfQgfzM8gbV9XmujRrcJDPq8mhytfWW9e6EToHFXKitntQZfVRrnAxStXzwki",
  "key23": "2hY9PYZidJB9fTinq6XM9m3VeN9LgoFbYYJ48uhhKZXBLN38jm2tBKahWgQs2jje4gBKGj8YRQgap8iyyYaGmADC",
  "key24": "3LayS3NShsR7ZoXMhuGLsgbbpDgNm613yvB4jcA8BWNofodHCrhSBYTMZvWrKNiNq8PGckEfq1GwbbTbB8Qf6zNk",
  "key25": "3LpNsS176xtVzLRwdeS74fstoz1ocrTDKdeDNFCWoU9x3VXPg8cqgZyqxc7BSssRos4kHuKcfWdLcpNhVN6317GN",
  "key26": "25cRuBggqao2BeAdjLApY3RMmr4maiS9gsaccnQvkic5HbfmZv4SRKCsRRSv9ApcbjEk2SdrYBta5dGJaqEH6U4f",
  "key27": "3oLMLyf5GWY5PNGbpc8XPQpfPF1aZPKW2Czg9EyVkHghnJZjCHFx6dyuf46qEBqQveZT3Lp1Q7sq9jMdyGA9LJqH",
  "key28": "3ymL3wPqkjtsQiGWpweWoCYeB3v7eLvFnTisJ1UXDbjRUJPVujeTk63zxM4egNjmLLEtNRP4phkj4SuqQ1bmSrwh",
  "key29": "2cUBEd3SoyGkcLnSSEPJGUe8iosKF7PUQ3ee7kCjSqQKxkZQtN7YAhNW5w3P1LLPtUroRPEyNjCj4fUH6jPDZAuc",
  "key30": "gNp6zKMsLny264ACubCB1gu2KBukZcvKxGvT89hKepZvXGh28goFg1k8KwKJ6STwjhoFdAMtubw8DHqHnvFMyPW",
  "key31": "5vig2T1aBBGHcrcpeALaMnTaAXCngtDNMYoPLqri4y7q7WGUPjAATfrbXYWrZMQw5n8Z6cXzNqT3gUF3anhRmwnk",
  "key32": "5zxsbuaXW53Ga22zw6XMA7DRXQoYfpLszrreSxufVEjEUJNQQouyKdjXxGWJGB4LvoCRKtV9rCKvEDtHyowMUQHj",
  "key33": "3skBJ5qykckHyVwcTurSu95Y6RGb4HUKq52X2WwHckxswCx3G7osK9zzNYw3CrBMa8iR4A5AP5h6yShNK4vpaczo",
  "key34": "5bjmNJiAEJsjfqfZLfh2AQe5kivJpNEfgyyZfEAkoEh7piA9tYJQXjWKVSfAWTsRV3cNP8jks8YBTRKCFWRZBN5b",
  "key35": "3Ko4ZEz8axBcqRnSstTbPC2TMugLzisu2TWqYfcXuB5XRPa8Q1ruqyafc4n9ksZavxgZiUNCwT4uASYufwQFy12k",
  "key36": "HEzgXvGBvVvCcjbcWkjs7sqtdt7rZEYvzV1a4e5Vm243znhxR724XvXAd1BKBYocZwZhCcDS5rEcWYJEF32fexN"
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
