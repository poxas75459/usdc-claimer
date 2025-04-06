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
    "51kuk6RJExqZUuX7DujzQSpxKw5ZCsuJP5P489ZCj1hysg1Gy5YrPjwJ6SH8i4HKBG5eo7RZjevJimdG1zMBpeaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRpKejFUTeDVkCNoMxuCuMxfnjUax7cTGKjxtoFnGar6h6FjMVDt3WvJWZdeSxrCqhR8s68MfziuCG23y1McNFa",
  "key1": "2hBshucwYsH7b6rL4TXUqZZpEy1KavqRpPv9nGgCnyH1yGasUP5PqyHX5htUx3bHRZbBsKzS1QEM5kGL26jSRt7u",
  "key2": "3eNuBuDxinoqxwQFTUQqaXVmRgtyGdxN1JPtswacQrMbH1Z8u4v8jgj2eY57MYD1UBqsiKZdfJaJhoPkjw1fsdxS",
  "key3": "2C5yxEJ22eJQdEAXr6xcsVfWdvNEqxA1VCuzb9XFjLVGuNf7ijR6WKGSFDP63zyie5mHQTghaAsKwuWdGYXLQ8ec",
  "key4": "2qm178FHmRR9KYAmxkZGS69L72Z5ebcqcYt2rW69WESTJuFYTd7Ss5whxdzC34spfthHkdtrj7pw7VPm36eEH3fZ",
  "key5": "4gCQKhZKsCxH4xLoLG5cVYJN23rhWm9iP6LVZiytZftXnAbSZCr7r9s2ZhwJWgFhPKDu6hMN1jA5ybP6g7BUy7Ha",
  "key6": "4nFPtvKPY7k8LCPwvv3s8rDFH8p7nVE5rpUvTsFyrrisaCKnGvestkGoncnts2bPQvv6UgPpdhhkgKFkvcNiqKem",
  "key7": "4ERrQdjiJgW1voDeD9ojZinmcDximTRZW3jzj4gmjE6562hr1VY7CpeQa4NTziboQjzJj48rBfg4ECChDGvcCBq5",
  "key8": "3cdUBJLHpSSWbAPNFadPcqgsDeDdQtzUVYGGMjXwMQVoG8tjsJgySX1bDPrzccX4RHhqYoEscL2FRjw4tdAqKhnM",
  "key9": "4cHF9Esp3NrxT6razVWRbKd42bswmLcHuoCGLPjPKVPaqUDxMGWqzBRJbEwkgwb1JqYzyzYXALhopwoBW2f9Xx2n",
  "key10": "62aj75rC9r7gjywS9v8W4SS9GbnnKBW2qHfcCrADafZ5u4ckjzNhvFLpukUadeXvPoK8LHhGScqxEPaywPUQ2VxJ",
  "key11": "5yaY8EnDnBZDtP1kFCdYrf2kq9TopXnQPRxWeM6Fuf8zJSP1yppVyCioqmbDjwa2WzbMxYxDuxLceT5fFZQU5EWf",
  "key12": "2NS2cqAUCEJ8uBjHxSXduhvwKeETnQoRXAr7qzHDE9PJR8gF4sqfuzeUTqVxrec2Mfm5wqs2bbGedQNsFU8jgVxG",
  "key13": "4z7AygahPE1miEM1R9sqbjMYqoMcsoEdDrHY3E8TrWn658ZfhYkkkQjcgwvZoCWD98cCR4918wKo3kCL4e9a9c7K",
  "key14": "3PJdJgaJCGN1C6Jw7F375y563JwEvHR4w2NdsQFxWgg5exXft6jirodVeWeRtKDi7H6L42FAEAHd9GaHeoc6pe4Y",
  "key15": "yyfk1RTPTMxNhZCM8WZcoH3MBdYVu8ze7DPkCvmK85xMft2icB8UdkCJ3oMUYSLSZJ4VfLq1fNhKApoFgUrYiQN",
  "key16": "2z1xzzxwXafVTmvshiBKZCUV1on4biHkVMtx4G5djGRUnt2sTgz7GRNxCcoC7bwucHK4goDx6yVBDsEczjfZiTzr",
  "key17": "3wB1X1qLyRsfdjgyXrHMXC668wUBp6bK6ZZ18BjcBvbNWjhF4KvxxAdkMBF4g2QcR7Hgd4DyjJhcFrE3kaXKLfVV",
  "key18": "2REg8utj2AqBFjqcaXbGnHX3Zj2eTsWz1VKN7z9EJqbJxND5TRkhXsJk8R9zQ3hAy5sQsHeYxkF725Z8TCxmzhCu",
  "key19": "46K9YQ7GdUiUfhA1FZpQnkFouGQyWi3EavQr5TQBj38PwkLAaCbMRnKzsCpK7zDGx4nUxyHExg9YYUrAcXa14pEy",
  "key20": "3gwaRKX7vQKvsumLiN1wyMcg4ixTPrnKXu2QgY1cLaeJ13tvQQFs1oGE9u5y5tD8jDJCtiP8Ybv2oSgB8ucpbnko",
  "key21": "5JU369jvprwFRMPh5B64uDmExLLyrQkBbv4t15NQ5EJZBZp8j3pevsxbheYdr8pGoBwqoKnHCSUqdYxB7AeNf23t",
  "key22": "3qQP9QtqTGi299qEVprsu5fthMWLMyFpNK2UpfSTLUuyoxNP93iFnUqquHcvz88JqpWaaTAvJMRs9HpsLEmB7Sih",
  "key23": "3sVbfWHQ5buAY6EJ1N1FdeD2ufzuXcme76rra4526AMe7N1pVac3A3fJx5JUigmHSf5tknyqyravhCnwh1xYjMNh",
  "key24": "2Y24LrBwwMkxaToY1DN1X5EPJxSKFoVnwsBKzEV1BscjnzqY4fMTQe9DiSxtZfTzhm4wKffNechwoUq8BvP2Ckbs",
  "key25": "49JRKNqK599hS8mKJpA5ZvJBjP9JgrYMvuZHrfjXDHjZSkXsPf9CMiDgLjed875fkZ88W5W2f56oLpWBoBrEqEN",
  "key26": "5A9oLEwDzwykEG8VpsWZ7kP8gVyuV2yDgv3uvypt7kBijCkD2k6ZKfJxE7s6JZeNmsPhWwWmYxiXQf1etnE4KbFk",
  "key27": "3JjjJPybJk7c1d4XJEP6ofywTDCEkBz4zhv3uJzoqhhSpYhvzknt2Y1ez38bF7kx59vN8csVdgxxnSKM2YojBFmi",
  "key28": "3n9NgWCN3TLEoSNQZAgEaiNx6qnL34CzyhCseGNE3VYQMKkyGbcHybt4g2ecm9DhekrcBEH8AacC3USBRLgGKeMi",
  "key29": "2NqAShm5V9YSVETwYjZq5nS2NabGSNqgfzs1jX6se2xu9j2sztAkJqvfRzietA1sUhEMgaZYuFzx24RV4iNG54Pv",
  "key30": "5bX4Zb8oXY5DkomZ1b3dGj8xxYa9ruRJ2ioPAUvZqZH3N5Sa6hV6swZDfEmz2u2VGx4feqA75Lq2fpz7Zv4sAv8x",
  "key31": "2Zny4yLv7hZxhiTeoZEPZUgzWdWtNBZjkCjjgaArvA95R9jEzvDATgF3cFBxDo3b1GF2zmPYx5fM8JYTwPUfsnRc",
  "key32": "2itEVmS2u45doN8vt7zNraWrQLasyxYaocDrVGqH6YSR5U1RM6jrKwwr7N4ZGqZxod3Kz79uuXMqP2cNE5jG7yTj"
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
