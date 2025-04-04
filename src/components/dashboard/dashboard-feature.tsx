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
    "48TrnDffYSguov29GGsWQ1qruZWpCmdQsrhvZ3cJedQqSrK7ftU7ZJmmaF41SmZsaeujdFZ5YZrNUYPtVTW6M6Bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GWHyhkDFyb72aDMLvYi6uMTbNDbfwEtBSiD3w5aHNT88EZcfMsAQ8WUtVD7JYFErTkafLrYc9xihAritGDy5ZjS",
  "key1": "5tebbUwkWufRyjku9nBmdL6kzb7jDmXTNaSijCS56w5S8SfY8DDfP8mscuQB13strhBtCBHy6BdseA3yYkX9AhXz",
  "key2": "2qY4EBJF69AgR8qi6BFwPXfN9LVBdZTFipVW5EbhGNVZcx5BhQaSQBRYS2s9AEK9EbpHZRiVKDkYjA3pfihZUbkb",
  "key3": "5Jze2dYEdf1DoXV5WRW3nziXR415De9tZAEHrwv2zxiuzdG1CJdUWj2sUgH8RUCBuRR1zRXyDkR175rjsHfXAiUK",
  "key4": "3pYDX9odJbvLH8KJBgrGmFdZZvx1ySjuk81APWcFgEHU3LHonFFS2xSpdJmU5Ze8v1riTpQSBGYzvU3Qf6RNiwKq",
  "key5": "5ESSwBq19C2NjRw7aLGGMMP7vKGvxhgq55LmFSGqob2xczKj8hG1ZyFFCceQCWwcYpyjCJe8qUjKyDyBmFzVF321",
  "key6": "5BWmXoYbCJYY2GTZCScwo2SGuBQcZDiJHR1gkLcn1wQGujwzT9prEdhr5JYZhskz7yteESGwVBq8UD5VcKL6pW4x",
  "key7": "2y9FnB5wJk83giT9DPQfYW4LmadbFJ2aw73qEozCdVfUUSeth5n7tTRMagi2xYZb3qTCaJzpMKMuducthPozaSYi",
  "key8": "22SVC7zAcxWYRdHzMsfQrkKFyorhMR8Q9YsXhM2so5MQfKrPxYReBExfq8DvM3WtUdcCU5SgS5cqt6wyBvZcdAr5",
  "key9": "qABnwFmut66zGy2C8QsQ8ubj2eDJ3ACoRtvaJA7FmHb1TRpnzGPDJue9r9URLsJX8QR7Vdc117BjqT3ezauCRLP",
  "key10": "28FUHbNGyX3BL1FzHfU9FHBjAbhkj5pPoQ5X8mo8HSytuPM2vXFnca6Y6hWTThS4sBVu34StstFHGTgzxj3vAeTF",
  "key11": "5XWowWHMFYXpgmmjt97FST1NU6ZLmgMtxCCtEv92zF9n7Q4Qe64pfbKfLtdKz9oTVGSKYJRe3EbDVRDXMYca8SZq",
  "key12": "dL4HAui2uNHBUMpdMTXVc5UDby77m4q8dBkeGtxPVg1B9DDbfqXJpp6xHGtuk2DYjXeVAdAgwHhaQnmKVJmKTMJ",
  "key13": "4D8jujcnNLNKsBJHt16N7eEDwFGay5TZWp4bEHFdA71E4nbmaqsEjMCV1UGNA8j3kfdhAmJCkswHQ468V1g1J9CD",
  "key14": "67RNvJm6TNyCFa7DtWxFReBerTBcqj2aku3cTLGebaux1rKezFSDqZ3yZZhfYXmAyQtCriGNDynok4KGThYVQcV6",
  "key15": "2xi8NBUcibnmetnJPizCwvkx1srFSjnmrwShGa5pBSx4qTr48HGZL9gjih3BPH4GHCYZpgH2GeaQJ4bx7CzAH7DP",
  "key16": "JTy7K2RCbRodyvCjTzcBeu9LbA1DErBL9hxxw9LTkJcyK9ENWppFDo5xR1zCjc4pSo6252afLAA7jhCozcqK7zZ",
  "key17": "2xydXMFMDJLvHoidx3Two5BXHhFHPjaB6mr1uHdpGYViZg8zGk7LR42kAkiHEPuXD9PhF3wDSWxisbxdmNiPeygu",
  "key18": "So4ZALFc1UF3v64MQtABbjth3fnXmUeG4zvM8QZZUKSVSqGcNwdGw7haMfTqrzcvcHejsdMNMF5VApE5pTFvSxS",
  "key19": "4u8oU1eGEbsYqsdhDvQ2VWkU1trekjjnqfT2tiTQ3g6DQJ5WwU39LkvanHjjb3qaQEyxHC5i6nu3MU9jjhntiayD",
  "key20": "5ULk6TQTM4buPnK6Yr7KAbfdjT8abK7nWnc2ddySbA4Z9fWbu76qc8SBQ7k5x8nh6YgazfgxmqXfWCeqQntiyT3i",
  "key21": "31mcCBbEsMUVEM7sjjFihmW4tofQSGgtMveggzY2AXPJAo8xiqpo7KT6m5NL3SR6oscKUkkq2yca1NNqqagSxea1",
  "key22": "4CCcvj7QnQKStqw86JaANXc4x8Zd5YnsB8kXc8ScvAMcKkF6mSzxaB36yXpm2fgq42LxtnpryDtxqW6SFMpwyk87",
  "key23": "2XM83et8tTZFMkXzgFGLWBjTFCwebH7vo5v5Xx2j1zqoj4Gt3iNrFzLBopkhc4CR1WT18ngWuppy5n4koPCbYrxv",
  "key24": "5XELkkPwveZcQDhYJK8yb44DGny37UAz6hQaUvypTYJbRvNBgjRL4gDkRCKKCa1PXDSHbV547pUYS9aozPPebmVb",
  "key25": "2H14brbawUFk16Xp1sThwRxdQG2w9fh7nnyMDnjgWLspc7NgXYvPuCjN29ExCFf72bTiFz7v9GmKvaKLSpyrwQfz",
  "key26": "4SuJaGnQru56Bo8Gh7pnBAWyquCmspzg55QtzL5N9bKgu93rEpHp3w6sA47g5X33wJrLwqsnwDLZSZnHCrUhSKzi",
  "key27": "5kfdsiqoYUdTEZykK3Ga6m5EBUJ772A8BBhnLG9Aja6pBTwSvMDnvs2muxVRj3gwdoxDU5rRiS8oEREiJ1FtTJQC",
  "key28": "3ViFJdBdbDirXyDCy9xJFDuKGB3R91LMFCf1D6VfYxMNeU15rvGDfRr8ixBeEduuK1doYUSmFe3Xi2BwyWDnEgjF",
  "key29": "2TynazVVjEvdyvpbkikiuBVM9pkTpaue1JkEQnaE5KudnghnX4XnWDnAzuibgJ8me4aJRTjS3Hbcq6SrhN6Aj29o",
  "key30": "55ok8nSs1NoQM5YpXEcrHnRVSfBw41LKKvKZbZMkXyrW7G12fsiCw5G7EMfSSC7F21ZhqtaRrupkmDbqtJyzq2ei",
  "key31": "vjuJRh9jcjfueBhoor8uVEirBGSruL1BXHLWJsz7VWe75qfAdpVqeAKgx7GzRceJj4yq5AuBm39NEUrPtS2vfXZ",
  "key32": "GrZfc2fVjB2yGC67ymvZEqaM5NZ5eYpLNbrBk9mgaNrVEz96x4mewgqvRer1kSzFr8wy2tLCWcvHEkbs6xjmhMC",
  "key33": "5TuLjDDZJVKdcApNrxpFrvw7tRfnXEF9uJDMhQhMskxtmHr24aAFSYWxC2UFQ2cFicjPDphKFxKX6Rewgwc7SoD7",
  "key34": "35pALhFPtqXvhx1uTA4Yp6oEWr9jA96Fqy8YymwKfcYLS4CWcHHQe8ZrjnUisJmQLDP9XQfHrCTrgZByNEdNQxKF",
  "key35": "2fBnbkKcF2jdbaAbycaJ2CCs8RMwsQXo8cyY9tqveymdsP1j6wWJBuHL2rK8frhSNSi9B1FtSfS77kC5mby1xTQu",
  "key36": "5CZ6RhharBvwRskQnLDU6fy6wLsNNyDisY5fncRxb88rrSzEWrcd5bVoUUuvrDPrbbYXfuUtMPuQif4anJN18TJP",
  "key37": "eNsiWyxx6knZc7P269xe938GiqyYabkoqctxMXGoVLeiotwfqmmX8wRjgpaDo2XvXvXRn5MJfShnQFK5Tw3dDnK",
  "key38": "bwTmseGyeNh5AdDwk2fVkmv3mnx757xSo1o2Q6zPDn1uqbQ83yUtB5y6C5VdMa8jE3CXokBQWNXRMg2cZXHxCBN",
  "key39": "29DRKNqbkEB4x8xqqYnvEXVpkCAcTn8ZpidpCosggMDRYMG39kaiKVyiZvPUT74fV7qCBUmzWzdQo1muiKiquTn2",
  "key40": "2VXn84L24qN4qdxG9GunWVm9vvqpppXfV3DKmCN7L6CqfpF9tKffxdyPUBb2xmXu14BuN2CnEX86JkYUPiQ5tRP4",
  "key41": "5eyX3agW1C1FZ8Lk77ShvWeH9n7c6iB5JbfZBCZATRUnDKRv99MLgbQ59VXdUr1E7w5VgVn6Rn6ht7UXR44jcivy",
  "key42": "dkyu8JJkjpcDQ3RFcKhyice6vquoSuz2Ncrkd41rsBeWQLyzRyCNDfAf2nsdkVeLE8ybKnoy18vUv7zedbbheMc",
  "key43": "5qVVKvsZLTXBZbyGUikySEJ3iE9LvfndiLht1yWX9PWr3UjiBDVc1y8kXSAokUjncTvYWsUCvwm4x7RgzDmUgnEr",
  "key44": "R3XFr644r4XVn1EC3pXTnGb6BTLr6SYAKWrByxUwZCue19JYKUMZGY6MJ5hT5SLDw7soQE3QakTiBRqgGr7xZxL",
  "key45": "3eRCcN4kkxmEYLafBYVqHXDHmk1DBiGPn9cXMzmuLHgMpP4VXigDQRZ6Vo5dQorBoPc6dED9B8itAN99XCeuBYtx"
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
