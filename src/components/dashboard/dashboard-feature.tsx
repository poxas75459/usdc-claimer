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
    "hCfFt9vNFvnZeYZ55FvZASPqb8MSTBGDucusHBSRfRuCAQCRaq6P9HBjxZY5wXoPDpDv3Wtjy1V5ZH5SiUCmBZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xtd9ciT6oqyAmyYAwPSUGCjKxSDtyXaPp463VcWrXevyWzzRiguYk98f9GSR1zRJjbzqtvaeuwe2Xgrt3ikeZAv",
  "key1": "27xJVdiyBKCXmgMyAckNmGApZyCcXAKRj2bgNaZRo1gsf7jgnAFfhbH8n3kHRAD5WyHcMCkm37fHSaY5ifvKuhtw",
  "key2": "4Deyrg32r7yCMysF95bF9wxzu4udcMAcpVmNrJPj14MFLkrrHWc1zDTae2DiQpKceLJ4esvNDPZ5QTRWfMacHEDs",
  "key3": "36YBgkrvoWrY7w3yohjQCg9cvk92N4bFPNGD7xpBvF9zzBkmi5i6mMezeZPh4xeiYVMaSF7GdUxbPSvBTekEJ6jp",
  "key4": "4dFEnND4nR9z8kzMvN4oHfCvjjz2bFkJxZATSRtxPNv3j7M5ydwvxByEq7fuyc5yUwzuhSocwpveTedHq6QCUMX8",
  "key5": "4mFJjuaUCQvBg4AT3cPFvogouLnUf1Q9QpMkTc5QMfdXub8qKmyf6dZMkY9o6iKyUAoSowwTziNv4b1AHGHF9oPQ",
  "key6": "3KVbhM2DJAQsSfdka19G8UPWpq1N1qDvnQbZTqx5QcevDgtg6iKPfLrC2G3DUkKHrjWD8dcbMRMamzVRBudWHgGn",
  "key7": "3M8aHBgxf3paHsVu2YnnXM8zM5LQjmJnwixwr88YynbWDtRuBfiUPT4KE7hb436WjgXtw2kp8HWhcNpyiBYrNwWo",
  "key8": "64ijTwxBMWiffALZs7bc5XrU5jKGZciyfpFJ9tTyPWuK1XFxReMzU2Rz5BJS752DV4HbA3J3mVcW4zsfNz5Kn7PX",
  "key9": "2HrMTe3xFkbCnSyzQPTgDNcVDvhXBc4HDJ63uadg3zbst3LCnUSGZGRHVT7sWWu5vJgqaLBKa9qaJdGFnv7c9ntk",
  "key10": "3mHDR2jYbjSKtXTXG6cD987yMeP21zeWVRQGWfEQByoguc2cQFpnRRssJrUjSYcSZ9BMQBzVCYhbCgeafog2G3Qi",
  "key11": "3izGgBfhpEFJhhwNZnWuYHw3Q4NofaaygjRmiqCreAd6ugEPeWMqpZxQgGNjCyKzjeaNTqZDK8fAhyAKZXvMKKBL",
  "key12": "279rYzbEEGYHFDWg7d7S5TushoEpK7XgMXNwSMMqxRgfi1nm3Sc8PzWWipRMQi4TWdd46hAUTSfchkMVnFgXdoVa",
  "key13": "mFbbVwWmkwBXsRiHnLZzcR6uZuy6cczVPgsMGDReyezHvCeiyq7x3sGQfp1vZFvHM72ps2nVbdMCuhW7Sqt5ZfT",
  "key14": "5Q9TKxjna7kaC2QtRPcTPvVwLQsvPPkvPnnxMQVXLj98fzkZ7EfcwJokDvnA5qCzysPoj6osfv2F1Sb74FqQpeJc",
  "key15": "3wF4HRJf549S6M1F4tw1xbQU6pAQG7Ry9eAp3o7g61pqPJ5rpykdAa7HSpmcSeP15oUA6JzJqaHmoCMUbCoTtAw3",
  "key16": "62pkaevjtr3NfzmgSqVCFcpG3vK2dhRqmCSuurRDscDWbXMfSo6crYs9jUkcUcVRQVVCTooHWnoRGFmK9RptmjLD",
  "key17": "4AanQga6s6GCpJJHfL9gLERaxDyXEgvU2GdQ9dpcncqV1npAegbNepCX28cwH2XUCuWP3k6nDAYWXpvwGtwrxNhq",
  "key18": "nzo7c8nQxqctyQXb4nAiZ56REtF5wHNbfGTbmP3ZvGZVt59sdphcS2f2sePb24gu1kk4jpmAz6eDj1iKKLpuEwn",
  "key19": "55a8wrgiLTN3TQVNGiYBxuRJMK1NZ7fPG4v2EdrohxW8BF6sxpjbdVS4fsLE3DAogjTurnn1ff8EMCPEAZxN1GTD",
  "key20": "srqm9d2JozhsAy172VqKFLVfuzySzgPrcKXFPpurycrG5s7VJAPvzv5hgM3z6sMPXv2as7WiBLmUTBdVtvho3Ms",
  "key21": "3jtGJirQjzcfZqStmfidF4rcgeXTZztY5v7nzQbZ2gqRvF4taT2bMpi9jwd9SSscd8CS9g7BLBDv7m8uGniNZ1G1",
  "key22": "2yZHUYN9hP3J8EhmgKnAPAta8nP7nK7HgqQwYj5fwebxC7BuHsQ59giSUPrMSNm2iRW9wTmztZ8ByEy76hLE59YV",
  "key23": "GrexY3Tb2whpfded9B2o6jLGVk8VMxDuyunr1aiL3gTykmS99CQ88RfQ47EVYNLpDmb3kX5GBwYTrMV7ZgZHTeo",
  "key24": "3dveeCx5fki2gx8E2S7L2vKBkWuHD43qSnupcx4sFjWCbvGUwktGK5VSNcGXWv9VeykYgXzJGuucdudRzJaqsCTy",
  "key25": "3VJEfb6FVyvZtVc2afZm4nZQp8rqhgDsCwwZ7rzLvYPkFguvMj8HNs3R9GF32mYtZju4nFCYyznauYMbuoXm1MAm",
  "key26": "4nH9kAvuGJ8Y99vjxzg54AQXERgfHsVqWp3GioDx3az6aLub4GznXxYb6Y1CxedNbmA41gFPG9oonbn4kkQco22z",
  "key27": "3RUmGxBZ18QEpVTSiLr1k3LywZzepjDXNdyuvijS9FLVA92V3q3WyDoHEpd4uyuxFtfvAyY9Y5tu7tMuPBb6E5qr",
  "key28": "NQCktww64cXzsMm4YARThDMLaMfPSGsjkkvA4aPSSP8q8tS4pUYpeNd1sCXeo5tW57he5MmNd5i9mfb3axH2qRH",
  "key29": "35hXbSuBor3At4mGzmgsBjTcq8NSCjJPe9R9RgJSXa237zgZZMUoyu9co6Qc3s7BJHsJHiGU1oqi5v33RioYKboR",
  "key30": "HUCpZFdu1bqVDoZT7aYkuYimQ5sE89mJRGRiLP3464fFJmcwvrzTgZnsHceCxWMdLYJxpRq8PhAUCQ8i9rjzBZa",
  "key31": "2k5idtzcv8t1iSLnv62rQi8djtTUsY5TkWEXz8Eg4rXQivnZXnK8wWBve9tZvkwki6p2bQdhznFQXDbob1fzfJm4",
  "key32": "Cmab2yyQGB9AAkEdaN5mXCTbuagcHWxtAv6HduFCyRGNPVHug6wwk6THHG1CwMBfncPwzD1SGndxYRSBLsumRpD",
  "key33": "36vuMYrMZSRiTzFzaU8EvALCGta4bS3zaEu1X65o6DwKN1ixxKtzwePp4pzh5qoXSMz8nT4wRvvf9FUCY8KSQEDu",
  "key34": "2ckDQ7e1STAJwCPvptXoij8vQBMjkUAUSLxrst2iEqppr52ApXo1z3Ee69vkysizYwwvbBK4PfMKtwxeCz8PrMFc",
  "key35": "2xCFpP49jaWq9bUBvRhprY7KaKtdWGKcn5CAmLdDPWGdoduMDf1uefbKPNfyyaBnyp2hWHwdiobrq3qkRWGWVowN",
  "key36": "3ikAdNKarfyAipQGHJLEKuduuENKw4shDGyj3FGSi3yG3cmwcc4NtShSePmLxFuSvYHWcKJtGyrbGjkikPkrQmKJ",
  "key37": "5huhu5rCzuvHwTjxhqdcBANso6Nfb5rtG3cZEwu7xUJG3SHXtpwGcXMBrcyDcrESDVeuWyyyaUxjHJw2aCRNPiHG",
  "key38": "3vu1WiuLFKFMkSQTJcSdUvctpNe9xKejUk3GsPJThauVSKge3k7ghzJHHV3WrCsB3omqE6SxAP2KsZTCqU5RdsAm",
  "key39": "3cayUgMEFg5quPDQQewRHVBVxixnvSTYgWd7G1wHU7jpdB6jYH9G9E7SDwHWzYoDNhDusxiQZVvVE1KSWFZHmuy",
  "key40": "2sKHPvWnUrjpoAiw7bxU34EiYNaNQzdVwxkEPLYzYL2E24XbyoHrZD9ituYszeUZhgt4NNpu4czLXNPqagrrUp3E",
  "key41": "4KLrji8zWvT7FVYdgLk3BvY4YYzMs2YXX4SdKKV2JgwZTHqckjLFqDBfDE8Ro4epngMmx7o3BM8BogMnjUUsuwY3",
  "key42": "2oitPRRYUP1UoCvv2sS8S6FW8M6ooqreghsSPbBHurZpuiSqdLK2ymDrKwRTPQDpV9ynjxxrTugTbJ2heVYMZHQ1",
  "key43": "4fAcU9LuSE1i61iF4E3sRZEkJj1eF6QPB5btSkvK8XZzn8Rs2iu2JgddNh9g5WLtCN62k9Fkc6CFJApZFFFNgAmp",
  "key44": "2C54vVHp3WfmPs99PTuxoB58v214sRK8PvYcG83u6XvArrg5Ftxb7dcwr9VDfsmtMbWZR7J6JPTNZu7Lk23dnxF",
  "key45": "3oLnV2ATaCsKYbB34ZF8e43t1ZFmVN1tFVJsTSxkmuNGF1KRvaMUG1Bcu1dZRWZJKoSK7g6EuUXaCnCSsTGDSbC2"
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
