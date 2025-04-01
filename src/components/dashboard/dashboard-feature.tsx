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
    "5Lh7J7KAZyUjXrSGHB9yTMtKjaeYaTftm1NYdYJoxPy2uVoTbJbJCjsEq9vjWYqUkQSU9D4TTGnMWZCcjdNqEvuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFdpD2bFyzvKtEFd33NGPq8pKggBMuXxcmeKtCan2RcXJgcm7BygdW5wKTgeugJF4iVCSdP7A6YTnJXGLDtJi3A",
  "key1": "2tkjjQg35PFWWaFNcFBTQ43pnPxiWshtLYaASDxjw7AfRbekf4UZrrwYHis35GfJA22q77CdQTMfzABVZ2pYS5fT",
  "key2": "GtaUWKfYaadxxXSBRADrWxibVh8bo5s1Y3AGChyvzBZFGeAcQPDwYXqxhfU1TEyDb2j77geQgFHkhhwN5GvwB7M",
  "key3": "52Kg5yujR3YmLcpLkVhSR8SbHC9crkRchw2fZvLiiAfpxdjM7of655zxUoJxBZhCeJYHp6Cd91G7PsXEjmCBQN1g",
  "key4": "2dUkHzsNviEFgUoZs6gSnz8BiJ3tj7QynCYGiKVR3vNvte3uMeDkptJVmKJjHqXEUG6D6whGs91gBXUpCjnSA9Tr",
  "key5": "3a8gmp5vkKndoGARYqqCu4fiyWSonqJ4EPjAMS442HbiWtPo3hr1KHuGGTwZTNh2u6y4BESAMxST7C91E1edsKbp",
  "key6": "UsA2Por8ZN7TaJEaxfy8uAVHz2k43sWcZAYBbr7Y9kHM6PFJxgFyX2kM3hsKaXRWEe7u1oShSKpk8pdjcsLTbNC",
  "key7": "2qAV6LqHpH54qQoY79YQvseTChGjUicSnMTGnqX8knve4F9Xe1kvDxLeJW1CAwnZGGv4xXHCtTRHkW36DFqZJ8mA",
  "key8": "3uABYpqcSD1AUKJqgACFp3VWu6PgP7NQxaJyEwxgWsimp4rxsgMALEraPPnw45NdNjuhLCjWuhSmYSaFWRGDQYWW",
  "key9": "5SoRwLVGZNbSXXggA7UFQPKP2DEphfAbuVQh2mj1YnWHot52BNTYC5J8Ra3WDgo2ZSgENp8qTsmCJDm3ctkXodyw",
  "key10": "3QgRp8475B8xkZ57WG5ZtYW4iUHFdH5474LJFj1JPNtV2C2efcMwsBSScG5EJUNjZt5pujTCMZiFc1wm3TihoaHJ",
  "key11": "3fBdsmH8bx7hPPH3yFT8TXJzjwZ1aYmzuBjTUafb8vzMvCRubzN9fajPu6dWVLSBg4iHwj2wBZrk6Zvtxorg9vaS",
  "key12": "1Z3J75sjsqW8LdJfNfw5ZHK2js9ianq6rGPti2gzRyR6R3jveuVMTSih9m9TrnrqfQYsCXKxGv7vPCEPSgF6G6e",
  "key13": "4jCxETmuyq7CvZnCyBcYoMuSidmHWTxncttiPMvxNui9NQbzTopPqAd3hbXdPYpZvt4xv9w3wquvc6UZrZqJtQ4S",
  "key14": "4NnHav5qgUKYcbH4pjMgJUoXhpPzJ2Cvnq2yVE3nUaxEwRXkiSkQbz4AjFRBhPnbAgXpNJQWz2gpJmmeR6djZJs",
  "key15": "gnEeubcFL8fWCuiehyQHYkmrUdgKZzytvZL6Bn3koY2YaVdcvxc1AZBbjiquGq7LQERxks7mhFEmws43cXg92JQ",
  "key16": "3jXoK5DEN8X7iMK21UWzmfUKFLbbhnDpfztUQtXcHkb3EKwWSju3T5XAyiTYd4iK9u341KdsjvpiQujn697TbLWc",
  "key17": "5S6gjT1L2tUJx5RjeMFQD8sSrrytAsVnpKWAogK8jbQ8nBKkCwxzknJ5JALEmkeKJwiKBs78gmnfHpWzjkihkBJQ",
  "key18": "3CvSg5d43j4LXZ69fvm5QqeAvYvBpzRFZDqUgjeQnfTUrEskN3qRzNMQZ5ph5xxUQnkqyzoyzDRUq3GoQtFRSsHW",
  "key19": "4YzK6PXj9CucwHhTQ3rLvpRAgrE9YgQPoaFQnByRHApH6nqrseKP11LAqAvBnB9MPCGuRP37VLeRugSm6MsKM7fJ",
  "key20": "2Mz7mPYv1GDXVFRSQvGrkfQNa5CzYpdR9QkBsn3i3VBCSYPzbjmQTroukRnhZdS5hKgyhXgDnAmE7JAM8okpDDvH",
  "key21": "CptGeNc842MoUaGnTfTQ8SRjSoZLBFReFmsp9S21iJ897dPLJ35nEB42aTK9W3NSzkst8fbYhyv8Aj92uLJC5RU",
  "key22": "5vA85j3XjUVL5U8HuGfGcMr6SJTj955jzJb8HSjU5xCnDnfHGfGrXCv5X4eRVw19R5UQq6SnZToXWHmxYRWHuT6G",
  "key23": "3Ym2tXogYfwRVvvagHoBgM87QHLyPbJZSy7FoJKazDUSXk17JCQzg2njdQ61MrnTmNSNE9woj7UtxgfotULCKYSY",
  "key24": "JgzXyrNqrN7LHw5hvas7aTXHiDNQoZifA4wdwyQaMLD9LZMxdpxhDfZW4LkmtvdQvUX9qF5s7V5A7jVRUqxfdeJ",
  "key25": "4GNmUM5DaBP7agF1XQ9g9f3XkCV11xxUJpp51okrPA6iKGMehU21Rca1mmresrStP4CiXhBvn1WJhMCBu6FjpS2Z",
  "key26": "AuW7qZs97TJPSsfaQ1hpzV2cQS4KRnFSwWHva9Fai8TXBhy4VFeDCxAQ9weSDvpcb8hsn5oEMif9kvkiv9bAgVk",
  "key27": "5Jg53QVT7bh73PNVVxrJvDh6mjiNz4sBgFPd3MtMYmiARp7P3djkcxYpaxMuEHSZHh9xxf8SyqbTniNf9PK77t7V",
  "key28": "2tsoevMvJ1XiELvXMyWRTtpfheQBspEjskk6puTmag89G4uibyEFRBZpfYt64ywEmP3ZcyExszeja9qFXSnRtNLp",
  "key29": "4niCJnmU6ky5BKLhnE3SJ5acDwy2XginaakRULXSXAEzTKQLD78oA5gzmRDt6o63Y7XavtAa16fzzKYSsVLeX5sz",
  "key30": "2LU6zbJHjVd1HqYRaCbADpivmpyUp9eKRfbnRLvkGkMPWe7r2etgspvwBdNC7fVuzELGZaw469J7ZxEsyozPBMnX",
  "key31": "4cMmTD2tApGMfW9Z6c9eDnFhJEVrQ9BqPiQoK9VzCvPepz7yZik7UbAgTc1HdpQkjJeeq3EoBKG55mZJNNDtTejy",
  "key32": "2jzWWZYynGXvk7NfGq44XAL1XsdW16WnHmh483PpefcXKPDKY698Rb4z1arm8PqcFyhit6pqPF5eLD3NLQSK3Ntw",
  "key33": "5KfNmYUvgN5hgUmvstvav7PdxdRhaYW5ZwVhGVCauRSj4iruBLZDaKHUsYLb5GKsrN4p1APjVWpkZ3kdohzZpM8P",
  "key34": "5Berkz7gckvz5hEPWCy1dUBozMzDKvjdcEeRhRTAXJ7zWp5aykGUqppcb3wNvBkdKsenf78jEMrnhBi8cLpGMYSP",
  "key35": "3hAj3Kq4pTjfnQrem7e7TMhoce181WiLF5pC4YhSfuYeV7mT5sV3R97RGgVZgbw5uJhybMeS4qS7CYAvoPmSkCvN",
  "key36": "2omkcZ8kZZceEcLmRkpGQmmA77JkD1igX1VJJZecVaXcXjNarpUXtdEULd2x939rRWhgTJyRa8TvPFa6irwC1Wfj",
  "key37": "aw92e7uwofn6DKZBPpX3qzjq1pzNHArrEFgJDyGVjuNdHh6xiJzszUHkyJ41irVxqdRLA2f55rhsM7S7g2shq98",
  "key38": "4ba3pxWeYv1zFUG55QRvYF3aV9UMTsfs7CR24BTbp7xgQN9d4fzT9J8BZv4Pz5qMhy7j7wnAzwntJ4WyVYfcvxqy",
  "key39": "2vbCWxMyEcF2bfHzHeozoE422r9vhsUqtb1Jjfpe9YE8rNhm3yxB1Kzy19sTpRc3S1GT1obHdJqczpYGkrUirTmu",
  "key40": "4YbMXV5VkmB7qMkSDwbvH1H62SpcvcB83mvFvRmyi369xqdxrD76NYkhqeSwS2EZSohXMgygxoKcvb5RTjYg2jgZ",
  "key41": "3SZVcBDQS2Ri2qMMbpBZZ7u2injSbcV4P5qbHbYxaZ6YQFDnc6YN3tAPtFXb8sySGtQJoRNX1ZoxbnkYPPNR3Qsd",
  "key42": "3iBuhm7x6F1PnAVADMS4yXyir4eBC1R4dugzZpgT762q6qqswUcAZPtMJVgwBYr2KBfrQP6uBFprGGz9KLNV87NJ",
  "key43": "URDLrg42eAVPMWNCyeLXkYczMPuYCHvvDEk1nw9oLgTkizXKZn5f3mUg6GFnHTNTXKZyZdD7qBz641D7d2guVu4",
  "key44": "5Zt38z1DYrvRAaMmmpyprEmXcz54omndkjRJQ9ZouGDMhPZrbsCFrFRe7rDLNHZMEeJ13JYPqvunAbKyQJj4vdsZ",
  "key45": "sfPAosfjFrbanihXixQ4yimVSRR8AUyzapQcCmya9VXGdpPnz1xnam1foywqsVMuT4Z1RqbJd8j3h8h7u7yrFiH",
  "key46": "3Pn3E4qrYVwN9xuF9UCDhTHyeNbhTsB1iJSM9X6LG4jow6cjMqAneVuYhBUYNEbeuknTdiUVR4FNJg6UxhQGtuMv",
  "key47": "4wdTrFHx42oTaciHGPRHmNvVq89TVKziUC3Z6b8oa9i4XRXcdxFGW4LX5eGDXXGRKjZuC8pSRh2n5q9nK45BUbTr",
  "key48": "3icxwi9wpg1y4rwXcfVeRGhQcPWx3JNv9v3sVPx8WTZ8azDWnMgVen7x5dFRUsmYjQNgXbVLMgGS6HT7J3N3UasX",
  "key49": "2kgUAaYwH1UEzzsbDygaX8ktRs8q8MqYe5kEC6gN4bsB4hd9N3uHpr92WiN6iCKLj9Zw6AcSfjSMeRp4Z7zNQACE"
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
