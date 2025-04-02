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
    "3XQgXacVvTs1bruDN7u6x2kkAMU4UPAqUyQiC6DGRSoxzZiGknoSh46BJpem9Vmy3xkiFJdNCsseX1gcq8ngtsX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zHUJUEUC693Nk9vyj5KqhnB236xgSPaTF9TdQH2Pw5xPMdNEgYqZdda4iUDMGnNceMrtAAJy23es8reTZLXMZSV",
  "key1": "2ndHu3awvBMH93crt2czyy1J6i1AKPUpYVA6vGgdK9qXfpVJ6S2nvrqEQQQDfnFUzPcZqMx8wHCYE2mRYQTPWT9x",
  "key2": "3a7vRDsaGXtAJ4kNqoU9Vw3FtZevjpHDAAUkyE9t9nrDmrrDVDBCrFB2i9MruMSWSzMXKqQVp14dTh2rvbXY6VNT",
  "key3": "2HVFfjcF9SUxyEsDoaCD5iy3SbnPvGhxba8pckS4JQKt6BANJFYb5z46V5RYpQwXkiZYKdvtWhE8Hd6bMyUt3RUz",
  "key4": "4zAaXum6jQqxSw1QGmAnSt4c4RrBbpEjmAZBvjuB7UeEncwZHS66jHDqkAnbqRskfDUSbrNE4pHpwRekiyaZuAAX",
  "key5": "6Vw3ATrNFgcz4Tqst3Earm6FyCS8pSKu5Zxinff5ryNG3NudW7Y25Q7LRPLiFEymzoK7YjT6WkSf17TDk9cNr5d",
  "key6": "3EH2w4FUTpy8gUxjCrjLAYpdLmp8kAh32dS7gGQuWsLTJS5SNV5ABHUcW7mC9cZaeSk2NssV95shZHSYmfMBaTQu",
  "key7": "54cHemXxJkD2rVHPwyU1CmXjhWart1UHunEpjUNhquPh7ZXCwkgxXDcGq2YkHmby3A4bkavHurLRfoCwnjqSFJX7",
  "key8": "3uSwQn1p3shr9adk5w8o6SGDv8Ru77zLt9RzffiFH4kkQMUme3NwkmLPyfi4TPN1bmyfecP5H2RaoeXdhXXHMhzM",
  "key9": "2UKJBZHD9hCfZYjEo8z1xoaeqYpvCsJZTW4yEuNoeDDTaoNjvcqWB34fLdB7Z4KnExEFEwvya8Eajy7fm8JHGv8D",
  "key10": "BdQEET6cLzMqZgvsfo469nbM1X7uGxVSQotnGMt7r7MiR5pNLrFxR4VzsJaH12AFqriXjNXrGSmAkLv4tfKCveq",
  "key11": "2uYn1suYeQZKkFsXjF7xMspMdHzWkgfekCHWVrNbrLv9AT8D5iRU8UgxMADqTceCW1auo2bMJXmqLZAapkMfD5jY",
  "key12": "2D6q9nxQyW9Re5ZwKsUKeTgYN6SgDSajB12Rb76Cae9dTTqaQBiyB4t4rrRctTMuiremSpk2VbXrucy4mY8pUax9",
  "key13": "2icYexNBiU1GmgHf1eJ3bGC2FdCUWzM8YAmtM24ZV4mMjPr3kaozyUm7361P5CcZevc93oTVM64ywAhSJc1ZBDqb",
  "key14": "67AE2QjCYktwudkPdniJFZs5DmLBqTqmx1bTQi7S2fhAouG6znci44Hsu2xLnZDXACotGDSDVE1Nhv3vgbuzGuaR",
  "key15": "2gE2zZbp22u4t3p9CxNqfn8wnPg6KoM6txtEF8jEhEtn1udfUfPGGuXdxKCm9ZYY5KP5mDA8JUZJkY9YBmQVsa2H",
  "key16": "3zBx7wuChaTRRptHb11jKLbtvWM2cGCZ8dYF8JvSfi554bX2TU6FJWiWdKjAMaTeqwNVRkY4GSks3orZ6GUe9MV3",
  "key17": "4hHZ4aidugQ4BWL5okV647Y5AAYutNmoyAgbf34s62XvG9YBsQq1P3q4MkaaCfCygJirbBGit7DKaiHxjrw945jp",
  "key18": "3ykPJT3FvP1Nsq4KgZb7hHpiSqMzUJtdEexKuA3G6ZNnN3jyJnrVqQ8Co4QJidfdrGhycZDK6fDzbC1MLgYfHwh",
  "key19": "213YYTRArHh5dTuubJQVwqbjqH8N6o6KvNGTPqT5WyEMwhtfFWMGFzoJJzYBL1sQnGBXNFdJQaSHkoJRfw91k9ik",
  "key20": "42JCzhnDS95ZhGHffUetE5mbeZR62CE385bFmVUrEpadp8DypS7AZuH4g4vgZ7Werjp76eVCoSfN5YSBTRdNrFpy",
  "key21": "57rYzBnFyv4EuQAh8Ghm3c2KQ1S2uNNW8StASK1w1GdJ8YzXAbS8jNfv8JqRsFjTpXKrmo1ssmSep3d3NGyqnYYy",
  "key22": "Zd96N389THNJzNNwEfrfaJ1ggG66McFSdcJJ88jeDnSvMY8ZW4RTjfgB1MZjMN8u5U1AUmREpSREYK7gJwEgYRA",
  "key23": "2T3kYa5MS7o2NYpYHPfRozBWWo9vq6r6rYGSYmmzuyUZAgTPWAVrDzZBvL6TWr5XUP6owDMFqS5AbUmVsm92V3x6",
  "key24": "5qVnM8XsvoEggazmG4BjJ61UpWgy8rySaoqDfr54KLb9yX9eqD4zyz74qtsCJd4oLta7zqMNzA2eK94EbzDp3xno",
  "key25": "2gH6ubcj1NyM5SbSNA4Ww5RFPeH5NyXJgwZr5t47bLasfVWuvRqBpEa6AAULhpjFor6ttmwHE3m1LMfZ6WkS9qc6",
  "key26": "2m9suYPBGiZzSEjjvZPPhRaQDVSBJadoQSZ9PpzLBziCaSnkk2GcK6aaj8SwERXmej5sQTfjuMXQSrRyLUHkFV2m",
  "key27": "59rRNw6yh5DXcJaLvysnUpPM55JkEG6jMAjvtTsBAnqyiTo9kBXBPWxrmdedHbibTFeYdnxm7LinpftohqtphTks",
  "key28": "5fViM8vgX8SFFhy7bb7PL6MBHUUPw4UW7EJUr79tS2Y75mHj6ijBp6NS9b49JJwbfUBBAd4dNm6NRLfS7kQn4nRH",
  "key29": "4Qhdyc7oPcmyYRyQLxxDEsqnwXRm9CEZnCcTeb86JKtTp9RfQ1X7u91oMJJTBhXiwwxCuZPU5pNd8gNKEdFLQEp9",
  "key30": "5fP1nuxg9f2tpQJ4jK9Aawk8YAiFGmWYPPwLtsdNCGh3yFWaVq3Dw4dQFLUjrRAYYHwmAvCdZA3TDgWbjhLV6Abv",
  "key31": "3BM9MohC2RE5rXQgBz8finwAhpRQf6RBpL9Y72jJaAnCa1wdcwfSH9VwoUCGJfTKsBeewtwVuk2ayiHtzWVVqNDw"
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
