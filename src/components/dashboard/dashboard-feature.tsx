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
    "DkyocfVyPuzmi47aiMh4EZxsX56ZoM9jTHSarTDS1RCsD3xoVhN5794m8Zj3BxC2KFbqbMshaB13SS8LqYUdjnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KHzEgkQZ3GoutKipX6u8mhEYCGTLWF9eFsYGCdCuD1gqYjnZcLRfxiFbnJs9asvffmuXGUVbJry4Hv1DJctj3ru",
  "key1": "jmN48EGrZpiAsA6ofuhEZmk1RkD5152haRX3kkxWXvhThvE4h8wKYgVzmQmsQZbgBq4C2Dmp4HJ1Xw38juZxxo2",
  "key2": "Ag4ghQzU4T5EBrTKwTYG2FRLmRiuw485dEQn5jTw95Ye8DAx51hV7V5AoXUMRuQD27k8PGtjfWGdS8ef1bVFwJr",
  "key3": "4exX389RC8aXNrUAy9tQNWCjtdhx7u6YjPdXsoCrW9WynuLL1GdqjNing4wwMQPgiuXe97xUKqvNMb9D21uYUuut",
  "key4": "2F74B78sB1V2XHWMzuP29XWQHiQkf9wpXipDLcB8vUfdPmDuZTh45r8UGTYHb57sGRFTaRCVZGqPeb8CcK6qgTNZ",
  "key5": "4FLvwLB6dfVh7D9nUDhAFDayYkkSZZCcCkHrxmytaaqXpj9M9e4MbXXUZUzPu6hM9TyxQ9yzwU8kqBsx2miCjuwS",
  "key6": "a3RMmj8vhSRe1weXCoXGZkde2Fdrwy1fQHjmGicZzQCCHV5cbUWXHj3YRgWWLTopsoa2Kat1LYfQLHxYf9y7Q4G",
  "key7": "3kzMh5EWAQsysAVFeLQsrpd2xH3KawZzfVkpaGt28dtosExqCG4gd6FPzgafvFPmHWoXrvaqqtjakTj3wMKNUXVo",
  "key8": "2g4CrpJwwPGMz5VBP9qvHSYEdf6GbD6X4o5c36nHyYMQZbrQeEr8KaPFaVyqChE6GufwcuszknkyEg8UZ3EbFzxo",
  "key9": "gV7ADF1eGuhCenFRTtdjiBKowKoFDcMgBdDdgtmyDuwQd1g18yD1mDUArcGMeD5tGfZo7AinpjtdjbEfCoLTvw7",
  "key10": "2vJWBsavvMH2PLyYKyGoNFyjPuVesAF7qAppyduPyxHkLU6TREPXQjtobSbuycrz5m7MyNbQBfYnJWLUdeBq9bFX",
  "key11": "wHKdKm9URAgYUqZ2MpZRfaHUEatvjqtxbxfezCmBFYtdn55XwTYnabAmGeosSgC8uZtzo591TyWJqStm8rDfDGh",
  "key12": "5v4ZUJZDfzFrfM1nvcKxqEKXp9V3msydeK69gANDw2HsmnYvza4uqNAxwivYnDTXV1yNGRz5aEVzy958Fc33MP3z",
  "key13": "2DeWmHTt327tsgvfzq5dWXey1ENiPrmdbboyF4we1TuRKw7hKj4PtAQGU7w7sRAwV3V246rKLzLYNgWgN756mbeT",
  "key14": "2wqnqbpkd39zmgssx8hGNgnyLwmifNaVEMkvv1DKwmkKcekiHmZ9L3m4tMCrXvXkBt72VdYzWUWavf3dJX2bnC3D",
  "key15": "2dJ16pq8MQ7yxez3K3iZKdML8kw4EkRpSKiTUrnrSckxKFJ2e313phqGXxUwu1LUpv6CcDfgddAWQeDZuzkVSTkj",
  "key16": "5XaP4exUY4ZwqACC6RbFN267vdTZ7tUBiV6CtRnvzMj5bF3SQNxm3JRGMyjD2KKtJQysqtC9548RZToBrJLTy1PC",
  "key17": "2SrhTWKHqJpdRu9WQVM1Awc2EzyAQ1SkARoz8ABN4SC9GZq9EkKcQx8WPZdcN72L5GQzeXhy3nTzKhLbZqxcmXay",
  "key18": "3g6Xp1VNweuF6Mw26zKmKhGmJbhe1rfMVFPZquF6aUTWM4QGer38toNQZXS6G9M8EjdySQTbyoxA2BcNuid9CQeo",
  "key19": "46Qc3iNMvuQnszfCNYEn5HwrqPL45xivj7GeNwUThDeQSErktGYu3yP5rJBu44pjrPgoNMng1U5Yq8hoBa93wv2s",
  "key20": "wefcJ8AMrnQWbEMPpj4EeXvDjbjnC17kSBm48Y4mRceuqKdtzdyEUsQAi7VHorck7FG394oHvfcU7nmcAJTcmYT",
  "key21": "5qgjAfg7m1tZjVEEQYem6KS5JuTkEKmweu2eEJs9oVc3YbqXQTUBHPB8MhG6Frt6VKR5pE9sAm2njLGJCbgngHGJ",
  "key22": "2oAXbKgf5RPkpm2f8nnPYPPm9XimZPQPZaeGec5PJSxYyH8yHBi4uG5H7sHLf68TxbHF2LEYwKhwjQ1noPk8VpNA",
  "key23": "CXhYXiHELsZhMvAYCgm1R1tgyX78mnYiEdjYuxLGh3Qz8r6Gkt5z4CPerrZnugkBXFWC1qbGxB6uTQEN99uvSPW",
  "key24": "38wa5VTmNBB5ZJ624W792PN5E1Mhm7FKxfF1h3UySGMRjUo5UXoanMQWGdTib2PHc1NyZaioukwhrMp38ciBZ2de",
  "key25": "JSYuhUmXZTPNfiFSgmrngstUC7HDf4YkoS8KfnfP5jKsW9TcQnrejtRkTZUeyCjW7jHwj6HV2d2vC53R5BCoYXg",
  "key26": "4wmGG8nqfqs6j48NmvMhRA3ttRHBUFB2V32s9sd4mJok7PZz8ErMQr9hCs65GZmMsRSM4v8JanbBsZ45FsGsAuw",
  "key27": "FuEUBQfqg73tKvRQEYyhrMSL23iMK88CgzpzX6UKnykwjY5vMWdzpzaF9GSiGo7YvGFTehf1dMySjSBkRqeWKyx",
  "key28": "3dvLg7x21T3s4hg7oGKZaYcGnXHEN4U79TYwcmcJNqknr96afnMBo1s8niPmAuR8EjqFyk8y3F6CoaWZBuAHuEdu",
  "key29": "4VUYdMj49eoGfM6vmu625Pi2xYDYdX5YwSmhfRgy1CWaqMQ1DAKvw5qPwS58oZAUe1XvfrP5pwS9o19u8mekbw5G",
  "key30": "XFphRNmmdBdByk9Mdg6rzFNrzwFCHMN8VFucX8zSVTa62SFGjiz5mGfYdC67impZFcychx8Cb7dCU5YsMpM9X3w",
  "key31": "31oA4w1ot9Khgpef4htGspfEuxUJS4VN9qeLUE2dRBD7ca2QhzsY5absksRi5grAEj5oYoTQzJwa2r3bqwstPz3a",
  "key32": "QNefz2RjzhgJGi3W8VehBK4HBZVhDXAozf58x4YLCJb9gawZqkZdUCy4qKgmjdhpsfdjEhmoJv5rZubdmsBfEKJ",
  "key33": "54xqGrJ4gqgW6SqGpj7jvmndqLEJ2vNo4Y5Zz3BMkAtVaFQn3i5cqYXyuXTdSim4BkoqTo8zix3RmZGLrewpEPjM",
  "key34": "2E8eo2YxQCnBqUVtXFYJURAcxhXqeDyW7iccouQrh7Ku2cJuawvEmkcZHeFe4q9pHuxa8GYpxyTy4tcCXAKLfWcU",
  "key35": "49UeMpCxsHyHc1U3v4y4gHrHDe8nMUuLjfye8cj1g5a3hj8K3dKb1SJXaj19yEqc4vFb5tvQFRLpWuizFc3UfhSf",
  "key36": "49g8rNUobwhTsFpt9vcS7nnL7AJFSFFZ9FrchJmYx2Ccbt1uWwLm9V4fLXCLhXPbuLjBvLnsRJEQDqNP1LxKTZi2",
  "key37": "3hQTekC6wRokJCqPdwb5rqxgWau8uaz9PeaZir8NRuZbCKXTiK4pMPkTH2sKBF8rP8pFAxDUkoGuZt3R85VBUHXi",
  "key38": "4s2ReYVmdwU5vvM7jBG36eNi39LKwX5VZo67M35EM5ENH6LfiVzwAHyefUVCVoJQgHVLyFq7LxnHteDC1zZXaEzD",
  "key39": "3r5oRpNY5JYBQGE8XGs6BLF7cwrFWoTck5dWHfRKP7MyuoB6pFqJLCv4PbZsbpDupP9o6LgCzZzmQoLNpLvJ7XPQ"
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
