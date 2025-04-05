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
    "3mMzWGGGDkRsBDrzrSVr96CFjcK6DJKP9zWQ2urcxvDYmLd9qF6SeUfTs4V2QsGj17scASzjZdFnxd8FYdRN7hdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WANLnPSjMdru9UDajw4EEwTgAtZ48XGwvsJpKV6795RoDkfhuBEvbUee6kb7rGP6zJd2s24jb7Lt2bUfPVQx2KG",
  "key1": "5nhTD92ecJ5qbgD4hLbtH2fhkZaFMtbWTTkrVbwuxBJLTn8g373xrhgEBVFPLV2Cdmw7Sutje4GNAjuxf66bepHX",
  "key2": "4pLScHEJ2Z3Gwghv1fDdLqPLjmDPxTzswg7CrgbvJkEVsT16qv1rnDfMTX6twRQasvdRQCNq2qak6HviHgTUeyVV",
  "key3": "2qYzUEyepuNWnDoSmdF59CjKNrvLh7jmaThtfZG65Yis1PvfMwFEVZ5QLdPgEzumCttUzSfM4Cf6tTYaWivtsfW5",
  "key4": "2A9vnahwtbrmJcDUNCUoWuV13yAAT5TfFF2PWiKh2Q3xwJEvFmCicuEzgy6UPwZhVWM4a2xJ6CAhxyuQUfAgQtok",
  "key5": "3PCgpfBTMjMtUXZejBwthKKqj3RRuc32RZ4oHiXgZaVJAgn4RncVUWUkeRhGdZDLwgGXb3HYjQB72hwjQxiHf1N7",
  "key6": "3E1MeUGkwFf8o7EXtHEbevAuMUGBpsbCr6oJnQhtGD8oN3Yu653ATyEoQZNNRtDTvvYHwL2YF9Z7G7hwz8xYQ5NW",
  "key7": "RdsxuYLkNreg3DrVtvC4FnQ1wPrxa4FNCBNH83ce7hS67nZLCncfaFe7aJquAFySkUM6C6VJr12W7Usm8u1ZfSA",
  "key8": "SNmX14tUwnndL6dtvGmyrvGu54enFgcosPXcKXsF4DRej63Xzg9tM6bj9r2f7SP7HtpGh9o9MWLCvW8ho27H5KV",
  "key9": "4rE3PyaXDzF9LaLvxG8gCBjcqNm3HJuYnZThpdUJ1Q4AepDDmWUmBQGstawY9UxeVDkMCMDj6Nd19Zd68wBP2hgU",
  "key10": "2fUrneaVXjT3ygQcZpug7YYb2FduqrKaeXcpLTNst3okHBZ2sBVfRpHW37A67hQjVrGP3mz45Tdq9fzC6zEbGw6K",
  "key11": "m39xAXbCymT86d8PciyyaLxUqTmpgeyhYWojmmot9e2mz1SgFJMBp8xjH2LuJCcriMkknQGVDTmZtKcnw28gzZF",
  "key12": "2XpgbFxzSY3opJtyhJ82PrvDL6yffSHsunRzeTzkKKWJ4ernJ6GMEE7NEhanLezCA5Y1FqwJJ2MPDte6EjwC3AUq",
  "key13": "2vDCvn2sbstyYZKiKXiTLFjQZjA1AYfri1S82VXTWKpZPcPAGEGYKvK6wBG6vbzbLQc1Uo2hzt4irUGiuNZ9xN39",
  "key14": "FfQiBTMFxfcdtEw8zuoYYQCsNE6ZXWKtfH5Tn1WZFYa7qutauHyPmWXo1h9tvZi67vaBMKD9sWEhyyj36BWm3zD",
  "key15": "5CeJ5NxgcdwsHT8TaQwFwmPeQ69YnLtkQP2vkkJSYLUybvJhSk1dKgG7HMcbAkurgVrA8NDNrrB7WHvw6CgMvZiJ",
  "key16": "ucPMpLvqYsVN2sHNLTj6VqhV6sYiNXV6WDqbwdRCjTesmF2yVmmtaW9NnB6XA6cn2aymDFQGPrVypsVxf2zbFy2",
  "key17": "HyZ536YukLboh3bppFGcesTKC6iwLrLaUL2BPW7zJSfMEhw3nS6hXuR92WiimhUZ7WB4RCFtrpr4F4H6Wihj5VR",
  "key18": "5W18ERU6LF7LqBzGBW9Pi4kRi51h4MuMke7TKXLmTVQByDg6vTEMTxkErtTxtGxDrcifknrrCBvkL8rLcS7YaBBj",
  "key19": "4XsrTF6iTiXYJ4rrepNpL4Sk7brsKKVpM8VFyCeT8QjGpy9B41EahoVPw2CcTmpTphaE1qEE21nZQyLdm3zKRVX8",
  "key20": "4P1i1SQqLj8DVaarjQ68UrFFRYCct8LXaf9pJyL5dFp6Pd1WKzvJzHfS6vtyNqcbrNAAarH2bGaDxZyziPgUZEYP",
  "key21": "3mPLQgTJ92UbAaNfRSKmy8asr4PNjGABnvJU3ihSwBwkdsS7yYb6osMzvVs1UtTb8DT9GJFPxjFcXqSStLeHkNtu",
  "key22": "4QD2QAESFAqLJtkwTJE22yTv7HVSzLagn4WHEiSXabji4anb1VWRUM4YiheJAaPTR4iMKqHHMugBqnf49k5FMtrF",
  "key23": "4MrDEarvjZghRHQJtWXcwhewJygF4kT7cx6rtRv4SsqBg9RT5fLqLkewja1yTamFBuaCuPZWFKA91jaYyPuhFtk3",
  "key24": "63NuJ8kESnZ1QLQuuPQybsd1DJRpquinsbtCubihGvGyHj4kbvC6egnwkhxGXVtdJ4T9PbfWPDxdu9dk3jUPmhX4",
  "key25": "4FVRLiPh7BuHrmiL63w6D7FHUZynL4jGmW4mwGK7gqo76oJyudbZVvocKE4BJ59E4r9UrBF9LynFoHZGTuh3469u",
  "key26": "2jaHADXtXTn7MpaHdmAqZ7NjeR6rwjbfkpjgK5zt4c8GHWHkUuFat4gKWakvmVLgwEwjAvS89aHmwvCHsHKuFGHZ",
  "key27": "4SYsnBzNs2Abggaqdqf3QB4a3NhyiDCmjeh49XhfqPbUeMQ7qrQUS4aoz3S6Xff6RfPwnuedNnikuK1JmL4y7Lbc",
  "key28": "2pG6cDztJ7yZhDWLe6JNXc99PzCZBAeXASzt5sqqt4bn99UJW6Dc1BZ8R7iU4hMiVR2ofMTwTPyAETqLX2TcR1bU",
  "key29": "4BsuhzLawXNqCahUqAdvs2S4mpmsU4tXyUfzpUhpo8W2GxGBquCLA6wCHeSFVrsSdd5YFucuoRj88LpKLCgcyM45",
  "key30": "2KxaJHgh8NrKMTRBpFCMBSFMGwqVSF9nTdoAmyWF3r5tpNdc3WtANWGEwdGPtjwo8BSvHaMqUkKmtJMXnehRToj2"
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
