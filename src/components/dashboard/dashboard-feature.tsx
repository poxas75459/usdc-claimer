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
    "4SNyBPZ7N6RiWJXkNmfz4xqDpjCXW5R4SwndzRHD3o67yud7N6Ee5Ekf1XcMghXkFEFyUeb428UjiA9SQb5zjJi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJR8R9g7UVgeCHU1rWWuq85qWvKWa2tYfzjV71nNqqFShHUkC13XLznn7N1CKWdfhnJc9c9X8BZmf8959E1wTMR",
  "key1": "5gQGa8jEhzQ1stxiKchm5uM5yYGQtHwRyUKQoReYdhBA5fB3gT61SBi8v7dBqY6gUMN9WQx9fipUSfaGH5wwgTHw",
  "key2": "5LHpzxKcod8cfCppRg2Urtmcs5woB8Db5LxnnMrBm7yBhmQ1pLqaiqPPxsZji1zPKRJoVrembRqRhUwJpW5kqQeB",
  "key3": "64uG7qjtUtMJsFH6GqAmPiXv3MupJbQ1UPHzLzNyV1NfLmL9KJ2G7rEmbpk8jnnh94TFhUyTJc6CFbqofovHuenb",
  "key4": "5CG4d3x63Vd7VRb2ryLEzqypJoQDDgK4h8f8PRhx1SwQHKbqJZ1GbZqLCAk6zXmW6HWyBYUm8EchNtsZdbJjE7a9",
  "key5": "2QiVCHHuDwy55p6yi4nY4eiU8Ppz5ap4qwTpugBnpfSH9eUxTAzQkr3t3AXA2kDC4a62jgECv4YqGKkTgmeoU4CE",
  "key6": "3RoyxBj5Wygvrq75z3e93JogPh2fJMM28HamVgUUFkmnfgqbKP67DXYKNt98fdjNbcDMixpTFDWRQgLY2YWx4YfP",
  "key7": "4VYnCicp9fqzVFyHhQWcJbxy28D7ELoWbZdrQPtemTr7UKUe7a4Fkzg8voCZk8cmkPwWtASn7ysRsTfvw7FdcpLZ",
  "key8": "3ACCnTLU5FhHXJMqHdURDkDCJqrVjmNT9cjcJZVkSd3g3TLj6Ja1PRJEeGoRitGAtjmy8U3AbkEBi7Hj9mav4Rh5",
  "key9": "PDBcmXFn2PpDRsVBckhzMJbxhvZJfH71jcodQiydbwsM3EYMYvFRXsL683hAdaYktMEsSobMjX5juJvQttTVGwm",
  "key10": "5VfYBt8ToDBoaJGJc4fryD5ydmdTEU9e126jF5kHJm5gFS5QiR3UHQX2at8yY8gZ43UTHv1XJxFUBfqBgz1uMpgQ",
  "key11": "2BJV7R7JhnzFQ817J1XkcS2QS9jYpdo1YHtuNMPNTiSMiNrBDuWeWKdHmjCm8Bm6bruPqn9pLcNadJvdNhwZEMYz",
  "key12": "qY9HVnaGKVZkpaq8878xZ69dQijeRi3QJAovsJwHwiaLHxugtzMa1bojSUGRUjnsSq7LrkZmwmFJiMLKaeMugf2",
  "key13": "364QrLdooQVk6j2fuRnKEZDUtUuDmcJHjPUzc9HGevLT8u6KpLVHsUKsQe63CYhUr3cJ6cXYaFuRWx6hh1au8Hn4",
  "key14": "5BSm2EnJA5nqRWZrk64Y2fr3pE95D1B8as6GMT91FiuXt8oxUshjtXE5spTYXv7R4FVjMrvZhjQS4yQmdRehj1yB",
  "key15": "2wPTC5S75TpowihMyCKkbHu8L7wwxNauvka1fkU4ryiu82xLyegYctcCEMHEctTyMiQnhKrtd6T1aDtHizpJojeo",
  "key16": "3cY8wrChm3VWvsLMwraqio3qegp8KBiytb9QrLEdnZFX4R2UR6kC4WDPxPXBPwYPLnBySknVXUauaxxNQmA4YPWi",
  "key17": "4KAa5zoDYKxseiHZt6NEzTAeRxYmCabdFGMSRhzn19aPt6jW1oXq2xQGinPes3DbRtF5ZZyRm7KebDqnpv8TQxao",
  "key18": "VwZ3wreyGYUEBaXgDk89vfML3tbRQK7sCqnYb3yRJoaaMufGBnwRbFPVgLr4cR67cQWSQCCmizzH141CYfm5pRm",
  "key19": "3f4LVKUtyMcRaPAwYGM5xPXpTK7F5ExBBcipG9LtruA2kmxGmAPpFeXcE2XNMpNziFPfrxMHUfn5CJCm1LFDLCs8",
  "key20": "5pJMeuzxJM69vPk8T8M5Bn7LGtk2BZkB1ZZvBnY2rdnvcW3NLoozsxQ7ta4DLUdsfqdrEpYoYR66nkMnDQTzENwY",
  "key21": "5dRebvnSGkot7sYwiB4DfwJVqCvKJai1X2mTkWDfyA7msKgruxm4jS2UDxtPJYfuDU8Z8Acu8gxYj8yKP8buSUmw",
  "key22": "2r9XPwV7n2VnykwGD3ydjuBSH9tdFRi2HRrUPpW7jycSa8QviDgHkZJSzS24QepkmJcdNSzuEpdsEJF7BF7MKsrN",
  "key23": "48dQCrK1A32K7Wa8EpBtgmKBHUCx8EKD1dJjLzwiesRbYoepDHxzgUbpccHJ1QbRXucd27bKyRp9LhTfUkp3E9zV",
  "key24": "5v3BWCKLHddgcRXuGEZJhzLmRqf2LMWb97r21tw2yvKf67ngUsiDVrd8U2jcywWXzNmC8mZVZc6jShiywpr3zXds",
  "key25": "32VHbHVXaxbVg82diKUBadvKvpvXHKQ2pmtWPqENbDBYjSJo62feTZ6ih8uwTiTzgvARvNKURfv5mrExzNJEs5B7",
  "key26": "4ZTFYsRugB3jkSqv1aJDUA1SPinwMZ6kWKzzdBwsS9siBzWx7a8YwZq8BJM835uPeEJjALVMVLETiL1Q6k6fyMhv",
  "key27": "hhcnacPpCiG42VLU6XNBCFt3RADR82vS13vDc22txDk1wtCnNcF8q62LdrZFMZk5kiZnqYJfJX52wupgYUwH9wt",
  "key28": "3ma182mfbvWD6XhbapTB9UC8P19eJ3KSQ7tc9UKoxFiB2NJHNe5oBPLPNZwfV19zmtihDXv6JFD8QEqmaGFw6rfa",
  "key29": "UEJK7FpNAQf3cAgvGFvuooqhBQfBFEoyNxsaTNrWvG7A943uxtjfsyQeRdWy9wS8UBLfXdFh2x2m8HN9FnvFUYQ",
  "key30": "agUWQbPg7C94xQGdB1gbC2vZmaFaZgxUp8nYunFcZB8Fqoj1bdtcsSK6CoMq4Ayncgs3KUNoBVS6Bgpdq9vC1gw",
  "key31": "2bx4LDBpdf5qgAQHpR9h1TpeLRpQJrSRPkKD8UtWk3SkoFdycB5XbVFmrnHmx1D1jT4rTuEgNNg684MifRvHLm1K",
  "key32": "62FQtpWgJ964bsycFb6tvLD1aw8wUMXFkvS7FyMYsWtXHuYBMNWpVZYV2rxSNWMS5U3dKqNKXGu5Y9tAnGn4ECdr",
  "key33": "2b5bGDG1a4eGqA9h3DRsVEiN9o4Syitrqy5LdDBibwG1cU2iRHdL8ESDb7eaTfVdb2Df6JAaZLo7HERSGeHyNKxt",
  "key34": "27rXvWmscQG1ivY4vxggShrfoNA714U55KTuJt3jmDE4uVpFcMzBjR1KuVqpdsnT3caaUx8kXwNbmNDim7dL6a2N",
  "key35": "hmpet2UhpQvsccdoHmg9nzk1PknupZbAzWdcmSMk8wFaMwxkMXvJAC64sh1Bi7AK1XJVxzTvk5oZS7HfFwFvVAZ",
  "key36": "5Vum7Bjtv3bSceZ84fZNWG75k9GbGS3A6fvjjeL3vmBuvRHzVqoAU3ZAA6JfpqAsZF8gJbGWEG2AMVReQiTdMTEh",
  "key37": "5QBy5uDQRdFUHjNJrWtfppee4kqhHH6zeY8NMTtXXSbR8jG3qRiA6PJerMEaGtJ1zzoXjTJqyYiUavevvBXm7LsF",
  "key38": "5TKhaYfC2bYHxQg6vxncZHqXJCFVqJNRvj7FELcXpvTYG3eZm4HFD2ZYqtco5iJfZrjfYUzPtCxNd8fDVPCFzBnm",
  "key39": "4wLAJqSgX7wgtPxVM5vxm4qbCiXzujfhtB1RKuXgq9w1ovzuCsAjXkgdCBFq4ebk6TzXZjymSkWHcrtXm8b3sxF6"
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
