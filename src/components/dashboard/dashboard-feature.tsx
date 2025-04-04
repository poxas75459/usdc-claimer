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
    "51WNrMmCEbGwChSYztrHZ9bQeDEphhG3NADWvrUAoo9q9vGTGZeMRR1v4M8LkqBrtkrguXgAEkwgYYSQiuwDjnkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TeiM749fcbMqZ8vPhqtNy1NYGtxBZGiYQ1ohzqoJogHFMj3c4WxoPwWNqcaYdNncWt3zgGsWdwDKCafgoTUkYA1",
  "key1": "2FC87s6Ff1Fnjnj6aC6PujeQYBEWsKxJJtama3vB3XuPRGaPye89uDwyj8SWC8xaJjj9iNsSxTi72Q7D2pftpMtQ",
  "key2": "3GnrCRYx7z3TNkMdYhNsRxaru5hLCMfcM1YKfUju1n8q5bZDQAHtxxBX6vFQhw2Gj4nXCxdyEWosVNfrRvhCKGDy",
  "key3": "4ozJcdtK1MwcJJUiLQ1jkL8waMR9NSQzVbFHhwQd2Tf38t79sML1TguRrXHtDaGiZDk1SJMyBRKhCYqWXdmhwtvn",
  "key4": "52o3DEUj2Rsfr7HWM7YNjecKv751ARueRAX4mQBs8vMrsh3Ht4byN7HGTCDKoxLB7EePgGziWB2cGSGxxu6ztrzi",
  "key5": "5T8ymya4K4ptNMu11VX3AMaw1ofNxxgtRRA3CDjqY2GkcL1Y4iLSeGHsQrnH5vDFYPj9QFi1RR8F8yXZmviaTGfo",
  "key6": "5GBpXc5CieL8Ja57VxQfBuj4fXkuShbEQfh1ByPvSM46ZWd5V7GwAVcf4nQcQ6n5fTpw22FnBVhuDNcCp473Y9Su",
  "key7": "6L3WbU7rmMsYkTX7R6Mz3qrxL44mB84uHjWBqW7EEARW62vmEGB53s3NCHqdyQ4zNCxL5AxgFE9gtxGCYeCQ34D",
  "key8": "4fcQhzEtw9BxaqqcYZxnjqjKW8qwkAH35NnFVvKFD9mcvv4mMkRTuBhtp5C2fypYxYP5PdiPJ5Znh3z5vreXXoZ9",
  "key9": "5kQVuEbq5xtD419kUkkqipxWHFudPBtq984JUZ4AGZkc7F6Eeg29TcXPvstTNdqUkMcV9QBujZRk8rDJhqPM2Afi",
  "key10": "4iYaBJV5Ghu1JhZEiqTfGa76kr5E7uc7A9eKEoeu5Ys6yrkc2bHQbTEk3pehbcvU6fYhrfpinVWXUipkXxqmCuGk",
  "key11": "2csFKuwNNPv1vcT9RBQ98tpFPayuRcSBJn2j1HMRvEFUWh17pGAytdTF9cywPvWHKazri8yQeLWeJtvtgmXZuG5q",
  "key12": "2t4ccjdAF2QYNwPCp8vyM6oEXvW72Cirab2so4CUHjgc7J3LSe2q9ZtQtcjKqKTupQwX6bm2mBmrBCVyf4BMuMTo",
  "key13": "67MS5hiT7mdhuZFk8JRHKeNkrQsTDQkjgG8gVsbCZNkM19Z5VuvKtEXAxR75Lop94brQpkVYpYiWpXBNj3Me7LsK",
  "key14": "2Ysw99ahCsUjm9pmr5JhjyXDDAaep3fBRwWbcYjudnYgnuEXaSfeZQ76GEHX2rZyz5ak65DKPPqvwjgoW8RiUCNX",
  "key15": "kCNAtQcARmTL46jCu3QQcXu76Lwg77x3qcW9xTi9CmyUtp1351VuPBW5wmvbzy5Em7qCqdteWyu2v7k5LTrDm94",
  "key16": "3UL9vpaS2vj6oAJAN9NG5FgkrT7mFwspR85NCSeNufHi67sjGzbobVrHS96B5hQW8gjWSrVyYiTmzN2quafQr1sB",
  "key17": "5NQzGDp5GaAmufRs4wK4XgmLByx8yhj1sWbuKFWEGNco9zZ4js23GwtWRMAWgTBV58LWKXkT2EpaEEzcCNqrtQ7i",
  "key18": "uqNTRp5s5npwGWjv2mi7zosx5AdJYdJaV8jbUuwstppE9e13faizXtJLB7ABYDMUfn6T7UcWgioMsztvSZgTjxP",
  "key19": "2L53kbyQcFE8vH3QLPUWe8aecHx8zVYukNDnEKV4HxxnGpzgdcnQRsj5gmqH1qD9RxEc7SCHgbJubNHJczG46iiF",
  "key20": "5QJ1aehbhH6sSJp5n5foPZZNPKd95A8AZCacBaz5hQxdiwMGAUFTN3nsU6NN7wtXLM1ninYjncU2VzwsQuiz34Sx",
  "key21": "47hdRN7mjLkGEFttVdS713Cdq1FbiMSoZAn3DqH4qNQGCVxLar8UXztyopZazCdB9S9UWsQhrGyxPcEkW8EAGoUX",
  "key22": "3JK8fmoF84pa9tgnhp3darPtho3WAyKNzKbWNHhg1Q4XH8MqmJfEwsPQtp43rR8CNV3qDDdoAynghwxtkoATdkSR",
  "key23": "mEHrDv3oTFJDdpPZVB2JRYYSyQBYEc37B5EfdWLex85naCVZWJH9EpWbm2c1qeHK4XC6B3Hbt7YP4WsNmPW6th1",
  "key24": "2g6ZdT89fbWYdVYupaz2RLtvofAXm6fCmScuvMEzuk8o5B2iJoVonBQ8YcjKJD4hPrT28vwctpfvjR97XRYjVMHh",
  "key25": "4XJCCtLCKnR5sjMfgCvXJjeqacupZPUCbjVQwZP3QJQcUpmKJNFHNqNxLmRM46K1QupUmxRgEpfdzHuDM48tgBGT",
  "key26": "4iGK2ZHdWS56LBxEeruAXvsUX4Hpj4mKxuXJW9KYBFEe7R3T5U4bnn4Na2eda8Z8pEmwqQuYEJVuDhm6CAdw1xDR"
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
