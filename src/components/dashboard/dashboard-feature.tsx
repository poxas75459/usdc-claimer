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
    "32WGgi4AaUXrXYg1NwwRpMfMJaqr1YtUC85J264zH9HaDYwfkYDcdmNxf4XacbC4pNREmr8Ph5uoqzb8VytYnsix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "onvekvMTFfEGFAKh1z2JhfFckaaDoWagyvLVWEzpYct2x2kaPr1zRy9rqs9aTZgStzbEPGUqwLGM8RLBaTFrRh5",
  "key1": "2nisE51GGLciAzma9vfoaitjfsdY9BwossbKs6s9qhYFg6jqBfZPZEEYUvk3iCofyqu9ZJ9DVrK2BvRX2M9hmmBV",
  "key2": "5PPkrczML6FuZVQzq4bdoL3kg3yXTpJGGqhzSCiAh6RLtQRVAXDfjAbmQV3x3C8eyGRmk4hrMBzhNUoAPTCD8k8s",
  "key3": "3vKBQkrE3cBrwf9Rt38U48PP33TLne3VHJWsYzgX4r1GcBhUZV6A9pGmLEmYhMQwbGMyB1enidwfdoH5s6inoeDQ",
  "key4": "2tapXL4kNTmvHycMJYVoG4hhUxXwUtuHLENs6NyEFE1jntoJZw2Zxevsvjz3n5oiKVrp7eQEY5phxWa9iw9H6aL1",
  "key5": "5pXmjeRwuwiUxAdoMY9ENJSfk3krrcYUFfZTSD1QXJNPCeY1mzeJvAHPD5Z2pyMHzZxComRxASAYPo8YFkEL7Sqy",
  "key6": "bbn29N8jfUhdHg9DgJncsACJL2mfqsYVqyZ2UnubCAZGmjyG1A7ziZrBHwXXY8WDt7YA7paCk7JBGn4khRuQLNs",
  "key7": "2bdWxJxxSrWKaLWYzjVFmLbPixANUt4igVbyqFkNX9QQy2u7FyXYjcHHSKdrYwXsjYPSzALgnu9nrDqQ2Cnxnhgs",
  "key8": "5Bw6GCtyouR2Hzn57YsdixY5C6JMkKuaGt6xui8xFFqwvGWeEPcLgU3qACcT8oojtwESnYEv9rmQfb8uw3H5rNR3",
  "key9": "3g8cp3taFCswCpdKtaBu5GpttHCVnPVMhxGSENCfALMgwUZN37ZBh8gNUigorZg8ASXzCRGn5qG91WYDrRK3E2ke",
  "key10": "tv4inH651AaZ2k8yR75Bae6yv7VGKs1KFyaa2kS8kTn9ALNTJTQvMDHbH5CvCT7GHcRNtKbA6hkMxdkdBfqYuBt",
  "key11": "41Kmk5Ne6ah94G9ha8pkryahMXXK5diPbSxuAJzXBURaV5CvxKQnKi9JdNeBXfmxGKcG3Pg8Zh2FWkpULo7QZaRj",
  "key12": "3BCVg592aRtVwzSnbKQK358nDgd1pvugK6naswmNJpwbsWtZwaz47zG6SQ3BosbP7nJjcS5XvEkJtrmkeyoGfpjd",
  "key13": "3gd1s1d9DrRZ2AydADPwjrn4RoZAZPihqSQSxNrXqUK5iZEWkv9MXNAN9XvT2XSUfQy9fC5HDuoZaUb2XvymRVBP",
  "key14": "2J1zxJyvi8EpcYsRedKmaxwFbQJAp71q3vRUigmmhiqiSWYAQn9n1JQ6bekmtiNyS1dPc9VQfZvgP76nHCVzbMbx",
  "key15": "4YNwRorscPeqRJ2RmtBh9TczA1UjSm29MhfMYkcNQuSyLec1Np3Zr3gB2qMeNw9vHZdu6HaxFLytvmKz1r7mGJsy",
  "key16": "27g93MP2JmPKgy8Ls9qXtor9y4ocSZ5mmeF1kaMgg7WEGKK2Z35myu7Sh1z6dtE5kyk2JGnPhFE9VGESzbA9dA8y",
  "key17": "q9ViHyq9yaZWtcmZRPHMeqHuVUmdjxWe7qiboARaCW2kgJ1tkqmiT1aEsSUQHKAmbJje2cqu5Kp8YkkNakAWkn4",
  "key18": "4xjEctTh7zKGWVMcsFQEmdsZvFZg1kZXZfoDVAFM3WVCKsHGRsEzdKFmKd49p51tuNNUcQjehHg9ww1Y3B1jH7mZ",
  "key19": "ja3gYjTuZSaPDVRuryh4gRFxXLzTp8Lf6nhvNLvTFUkS8S6PS6dSauLC25TAzRS62aGcpwQxx9CkH8NAQJtjkRF",
  "key20": "4Gjg1CJ6GchqHuLFsnzy143iFeg5pepiUsZY71f5Kpe1fCDFLNLfRBnjoXwxGxZoUHmP61sPc6yk3LNFAMzrQMhj",
  "key21": "66fAr7cJFFP6w792uYnNod8iSLcR35yoPRqZdu2TFv3AYBkX47o2LkJH82wQFiTyQjzUHn4FLxnGjtmLhJ18NjBX",
  "key22": "64RrkTuG3WALsrd477kvsWrCo2dyvYXpHBgsfaqSCcxkA4VyaZX5W8Sp8TKKrWYy1WLjQ6TZ3TqE6uu4w19vsbGp",
  "key23": "4K7TkqZzLZwjc1gJUZsHX1DFLicuXWU3ETsYepobjzozdqmpvoCK7AKMMbPSyGRq7AJqT4JgpLh2f8LGVZwcFY6G",
  "key24": "4y2zuGLNrjMiKeS69HCuJ51zthznoiH29EJ7bgfgV8NLcSdd44dF3VgVdJKJ9U4b77MM8FhxJgVn6T7XHaKT7CMA",
  "key25": "3qVSw7X79pR74rhx48V5xd5ZG74Eu9nV9bbBjC8ye2LqzXH78XRobKfgmswyxV9zdrwcgANJt1FGfMKvQLXtGLNS",
  "key26": "3qGcHwRcZb6sncvgjiXEzXh6d9C84bV3Z95hjnhTG7tk2ApaAMPLriRYjdFkoKAfQr2uhQeSZjN9D8HzBadNJ1cB",
  "key27": "4kTBShPvEJu2wFufg7vwYN8R1v7CPEY5hNqkg4iPdmvJT5qT8tv7HTn8aTJcRQatStUY9dTp2WiF9uXN9PfnpngF",
  "key28": "28xZSxE2Houcc7Kib6TQuPx729KwG7tC8QjmgAKArmftc5L2nfBpjiKqUmDk1AZEtjGb2kKMZHajBjsFCpt2vPd2",
  "key29": "NADMqPVyyrTbFJkxUtiYnEewKNKr35STouy9HJLVFtqAmbe3xmQaCDjr6PSkaFJvLwt1BmRpUv6WSngxnrkWLzf",
  "key30": "428bASpTDcpjyaE4GeNhpoxggHqzNCwodreQyrT4EqfSuSujeRUFkt3vY2MLgsw3tTap7mXog3GEbTccWXkT9KX4",
  "key31": "22hmfzXJBrWHkR79f1FL1oekdp8sBqgpASGMn1MemshXzxUYfJgmjoh2bckJxGTkW9qQfdZsYwRRx4a8UW8YwExE",
  "key32": "bGsnmr67iS5cS8L5suErCzA2XrimaR6WEXbHdKzwZfSHNN15rQtRy4bpst93pd72BQVMzVQuxyfeSum4jCKLXEP",
  "key33": "2stZ63CZUH2tD97N6vi6sioJv8MTSC8RQfgiiVFWwSNqWpSwccfcDBPuV8SDfqGZttTpMf4Yr7Cs4hEVmPiLJswk",
  "key34": "4NxaU4Q5vLPQiTE2PrNjFdN3wgjGWSCNqNBaWm8cimzNghM3ghA5iENLZFjQvcEEQ61EqsiN2bq7xuzk6DwvnBSG",
  "key35": "2MigAnJMojcJiUbwjNmuN3eTLuYTHTUwqpWbVbxBmNgoXxpfBdxDvAmWQYXY6uPAi9h1vA9ytWckVZw2c24gDTkB",
  "key36": "59Dzdk3j41EJ7MSDjgDjMQGTC5JkuFS5eFDJidGkNmN5s8jSQY1CAJySetQ3DbBiq6br1CTJC631LoeN3q8T9YGq",
  "key37": "5jrx5T1BYwcw3BqvDTL25vyowf6yqJF4Zf2dogPsRcigAsjxaKVP5mPM6a34rHkCPofJWQdWrZkbv9WQEgC5jZ6f",
  "key38": "5fKzEaEf6wnfS31njLRUM7nMvD9PwxYVyHeA6rFWNsakXEzgZYpvDNogvcPSyfUs4tLcdg8R4m1oyNEQsSozqtgX",
  "key39": "Ut8ccKraxgYxoUhgHDnsNEYY7yzDUaiPiSZ4BqLDLpXBW1KxsXNjm5MeGZwjWekbDaj1iEfhAaRaTdiFEFcJWVw",
  "key40": "4JQDT6ZNaU9dF9hEUSfBEGgfhcbp4w1UkrXvE9CZWrxP9DvyfoD79fEMMDbZTaWpFP2EqpaQJzvWWcv6euA5uTm2"
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
