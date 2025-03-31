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
    "3MAUxTPU6AzRyTgPzve2mFnjzZJQHpj2aEi3p1yFXLsCTpY2Y9dHkKV7dA5MKNrNhVkUBerAP85eNTRD4VuXivmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LVpWJ6nPYC7wv9fqdkVynsNmhX83rXhSJmtDrL18kSRZp958c35QshpQ5zw4KfreTBDQZN5PoZ4QrunB6tsTYuV",
  "key1": "42YnZmiahRVtrnFjkHyHUw5F43onhdC8qsBLfVmbEKM9ytYsESbigw7wSoZNz3xoRdEC41aa7GQ9NHA8z8SEpDbS",
  "key2": "5H53tWGuZS5MS8qsbKVsyyuyUpMuAKcJriyjBRp6gNqpXSNDJswqoeMsnL57fyTdmvwaz1PRDZcG1Rmrku9wQ1vr",
  "key3": "5eeW7Zk2Xa7aBvmNG7U1qQi7h4CEBSpUQmiZQVKB4DrPm57FEm5ipnYjiZh8QsSa4RUiG3ZBgHKkkeTQP6t8jofs",
  "key4": "4sWq5Hp1R6qLnefiLbXPiQXhrqHK5w8WqRq57y3xcMeSTkZWzK16rjH56z26EQDGdE7SjsQBpKV2szBxwa92nY9D",
  "key5": "2f4Zn3RWfJh7ZJSMZ87Mgw3fvTqnXqj6oe1wAVZZaodmg5gMNafktaheWkUPm3XTfsVYMiX6zEdRRo8hyXxvHQ4C",
  "key6": "4Yn2mAHDwn8UimeXNK5xM4Vmx7oFZeikkMvWxX9NZoRiB4rtE1g9k19QKBbSMqmoNR2YW4bj62pwM6RBSNQAaovs",
  "key7": "XUYKTVkTJpYEGBbUVFZn3cN9RqrcBoDFAh4xssq51uuukX25fE3f1fvCVVFYghnLb9pJZKfAAH3A1bNsMXvBUSp",
  "key8": "4ucciAJBpDQ9rrZQjJXW8QLPtMES3oYHpyCf45XRENxqgMRJ3VwUPdtUFLAb3uJFuCRdtS9Z6djrESveMNAGsVDj",
  "key9": "vKB6LFuAiYP9YDEwHn9yQUgw37dh6YMeRjxLKhJq9mGxVCH9sqP8f6GLH32qH1M2GZEdPtadGNbe94XHaSGc5C4",
  "key10": "HxK5LjR7hnHW7swUTb5A4nXUWQUd9jPLNEaFj7LJeLx5kYw7w9GDEJXUSJDaapS8AwNapMmfhV1fSQzTR794a6d",
  "key11": "hDuDvDfxSwij156Fxecsc3qxD9TDTJySWmYcpsqHG7fRkQ3z12zhahDLtaVwPyjK2Qd4RteGj551NWLEaWDEV7k",
  "key12": "5s9UE8CbLvKTqr9BUyD3qjLeR273rLKJ8c8ASKnYNpb4b3AKirw3YNG9Exo1AULgCKizkhwMDLYNUAvobSM5xccr",
  "key13": "2xvMHYhqZWhY6AfebaznWSw9gkVgAnT8NjjTL8ji6zL1FxKqJ84c7x7kzsfRbS78RPHcThwYujZBqjZ5Y4txzXxD",
  "key14": "5GU77RhMhfDfcD1X8XSEV3ZeUo9vFAFFrCY388ktBSu6KgLk6FL1XJJn7kK9JyWDWFdHXskmRd4jfZo9aywVZYgm",
  "key15": "2iXAPQ3HX3Stoecdg94JEnSFR9ygU5eDKXZ7Y6Q55aRKW1ns6kgQGem7NR3YgtEqZLi93fPDGKgm6hTTPusNbvMH",
  "key16": "4YK16WqnFQwFxH8Zib98k7Td1TimFswLQafQPUNNRKnUtzBVaV24VQ1y4UQ6oniB5xhpv65vzvVivcScMZyN6xap",
  "key17": "2RR2RufeKcUgZk6fap39wXEwPRWqFVh56sLvxoFjsV5SxYzHrhiXXdhVbj5pf37YnrgAYtvaaRCR4cnJkK6RrYjx",
  "key18": "mo737VbCvYebh7mBEgoeGKiPQPsP8R6GCCn16HpeHs7L9r4HC5w9sZanboo37TYbxSngYRXH9ePWzRo78dSkWUo",
  "key19": "jw4cpzgCsFfeGrgFThwpUn7zTkdetbW5NSqksXHfXbyGxWiSBknonWzWBRip1jkBJbwVMriUkdo6xGZb1MXwtuk",
  "key20": "4acMRywV59qMfnHGeUuh6WE1A4eQztxHcYWp9uQiktAn6RNA4g9sNMTaNFNHjtiJPCLmJtFXjpFQujfppwYBi8XQ",
  "key21": "4GsiUD1cr13y7YxNh9SacXxSpCP82rzizP4uVQTW9mt4iQ5xT4E68eUXtDffpyiGyBKkwn5X75BxrHsH9AftyUuk",
  "key22": "3ihH3k69FNpesn7seoENH75te6TEsZpBf9dk2Mo7NXHkEbHRvTTWmxdzjjj53dhPhpP1EbJRxJkUPRfUBPZPRFUT",
  "key23": "5heRMtCponUiffCGfDECNViQM2jWn5tLZgCtSEwGqAzz7df2qsBQSescDw7uigwshJFaXFUqkXRZTzv41p1Xe2pa",
  "key24": "5xkBoFbKqaYFxJADmK8DhZ46rQFFa4zDVe78kgErtGgk5ofVi2EiBHMq8aMdU9Q7dNWQ47juYh4a6JqN1LprWKvC",
  "key25": "Bm5y8syampFBMU3pVeSXkbh9CBv74wnNVC3sgVHf4ACTvLJs8ix9etdD5oUhVp7pjH3fAVJU4SdGXAmg7Db7gTT",
  "key26": "35mxsfcUUQN7f5ZFa9a1iobLJVggZRVx8XKEpikJxKD26pfBG3uggsG4SQJ5x4eHoTKoLbBNbjD6EHw6LGBCjGCs",
  "key27": "L1g893mWej56mGL6EMosrS8AHMJuNRYZsmgW7j5PWhU5tk59Eeh4kdswVyd6DLJJkJqwYCsACFMAn2CVTYuu6oV",
  "key28": "2fbxZSgxbF2p34pzWTHh39jm6WvMw4emuMKBy2MsVm3LDT5czpVxtkHc5FRpmidhCUJnZAhswvipknuAKpN5vnTk",
  "key29": "fwXA1GbpqM67AM9x64oPfLk3cXe6FYmTaoy4C8A4ECa3mS4AC4tdYz6TuE6392VmXqedF3sBfYcw2nY7KoxPH6Z",
  "key30": "qV2oBub4MZNBTKdRhft5xDkJmDCNAgiqzv6k58zrtyDyRyiqZEkJyfcgDZRh7XAFuBi9E162uBw72mmvDHTNrgG",
  "key31": "3fpx5G5iih1o1Yy7AJeshNcFKfg4qD9jewaZ4MpU6oSweZFs9yfEQW8h4pyiaHMw8rZ7LhMTN4Uu71HrDVyHPybE",
  "key32": "2pV2K6qVLYYNUcKupZCJn8KRRBM6pztjdRXBeZ5vgUz445qt6oijq42xo2npd2XCMo9VJZ3Uacg2SmpYa6hRz9nW",
  "key33": "5vVM8mHc16NQwSQs7U1YmAJDL4dXF7a2XCcfkijW92rWS9T5DgctXRK6hTYAzpEvmwAmmtqtvTpfXemGott6EGG1",
  "key34": "3fiGeGYZEZzcBJX9W5U5Pe54LaBw8CGWzu35Uvo4bMzV4kurSLUg9vKiqbFB9BnK1UvVGu1odLmTCEEvzQpeDSkP",
  "key35": "5aqFBcNpiR2VcUMbx9dsYCB3TbLQDWSzQZDs7mN4CLAkY87RVrZeecpCVkJYTCMmBowD2vPnwKmPxDwPfTqfnpXp",
  "key36": "2Ypb5srmddFAaThWwqGzPA92HNPmsYYzVFFsWBpQh9eA8cMNBitB2ERNBxPeLzZzBUyL1xXqpkX8FrP9KRyaugBU",
  "key37": "2eU1byLmsmp7fqL5K3NYbSBQiAKeBXT3G87BYUYFxZgqJi6xXmqa9KqzR9MzgP19qXrzEaW8cAH5ocoqMDNybD89",
  "key38": "5FjrnmJNeeweDct4mFrhvUP7q2CAq1hVjKfccchtxXc2Qub5tXWHkjDA7V27JNs3WAXhTDAGNmdx48jjAm6uZPcm",
  "key39": "2AfKwiNwKEegdWPKstNV3FkZx2gipxnFwrjdFwaBSJzEDDWfbxuj3E7j6y8wm8bhHodjoMD7eZD6jo8TjUToZt9X",
  "key40": "4SpHiAAj1RW8HWMkpjocdtQkAvhUt4W4wZmKUcZJ1XaFLAoRZxhoAMANYVF1YKZ6egaR59aJeJYRitSawpnASSmf",
  "key41": "3DHm2Zdi5Kwq6Gnt3YLGsHazzuX81KhaKwzLKYYm225K3h7mDHb62RPAdNfR6MeXhTj4Rn3xyptHnoq1srhNMwiD",
  "key42": "2DB3P9vWEYu8bAM4a6NSkJi2VM26vv8dzKaHMMM4nrzcAm6NXSAqQ77Xx7pQeyKoeo8T49rpW1s9sVu9T3PHm2vn",
  "key43": "4oZn9uPvDZviaxMEJYyAnW9F4e5iFbXxNzgzUhCYYgxMMT8jvfD8SaYAbCVZboSdvkNGsyWfwZyzeNJyUEP3RvUQ",
  "key44": "Z9Nzg1GrxYPbGG5kA4ZQENPCrwxivPxJF7xTsdqzx7YGC8oKdpoAeZqMvduPGA6DAwBSCc19hREpwTxyEZaRrYd",
  "key45": "3QsaQMnRygX394PryoypuLe9vu74EcNkJBBjS61rdwiRNzRWZr6BnL6fwnRRvWWyhT2xqcYpfvkyg66evPQjhuyU"
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
