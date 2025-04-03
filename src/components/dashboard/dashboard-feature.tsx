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
    "DsMhKLH6NTnposCsMAegMeCXmrk8HH2AEP18Egtz2zhiBDdX9mkmK7axj4fEG629UodGFaR1gSTBYGf8wKEW84K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZUuSeQSNr5YjwY4rj7HEK3e5vQswZKj4GDb1sJkPj7GnnENZzEAAgYuoGtSvUSV53oehds4E4pMhLsBmpmMDrr",
  "key1": "39sYbe3MBK1JvTE914PNtY3BhJWPtZXz6j8qhj36u9wocGz186DgmyWnXgVsiLwiLJy3Sa4sn7QYXr4VSGZ97BjA",
  "key2": "2iGQyu9DEPVhPjQwFi3eK5Dwk2MTWqD9KiJ6DebuxgG6woNAKnXgzEK5dEWDE5rGuyC1urzHDoigweio2bbyaeYG",
  "key3": "3Ns4RnnWNcAPmhXjUETuoejTHfcRRikYWorgEycahRuRBFPqmTUdiPjzXWs2aetJoSz2JVMv45wSp9jtFrgG9tK3",
  "key4": "4YXUhuhZt1oCt4qYMQn5XXSs6SW44hEhLjA9z5YRb3Lb9skGj2b6kTc9d6W3PQoUuUZBkJMudCLL8vRjskZRgiGW",
  "key5": "kUmCYt5aRbzV6WzpoJqwf2jFzX1mEyGAoNQFhwkTCtCFQpPvxQaHSubgjfCe4os6sEiRj6wpcbMFZdjEt63xf7h",
  "key6": "5iszPunrdCCiKihHQ4YJ8i4mqQhYa3mGRsAcQeShqFLKvuQjoHgRwURX7h5zCQHpuJx5JmqCoZDzZtGmKB68MyR2",
  "key7": "43Y7hd3UknAoRvvBYfuYpDHzFspG6FCr2N1FTwxWhEjnJntbM8bmfUmKvh6UKW25usWYrYsiLmeBCUrZ3MYZegWL",
  "key8": "4b1zfp3KkvbvLaUJ3mw5Eb24U3ZH27eGyhsBwZ7scBQd2AJ4dtaR2iXbizZ48W76aCFh2c7tWEQ4uWr7HnU7NkeS",
  "key9": "35XYvYy1oJfRMi5Sc8ifaH8TWYoX3p9PfEi9zr6urVpeqfBrCnw15qnu6sazuvKPK6Y5uZimhVp2rZkb3NrAZ5Pf",
  "key10": "2JqCSnoyHXwPbW5WjMSgmXVo8345oGz1SKVXJkCTEGd6RLftazk6Au6cYH8KhHy6hr9DhY41T1V3mVRbYcgmfvCk",
  "key11": "2fVRFUc71Lj4TXgyE1gPuFRaWK5CqJxudjsRA39GcLMEZ5S6cn21Aw97sFWWZ6BxQtzQSmiur9P3aqbehiJbezzc",
  "key12": "3kSLUMZLhiDbFYKHhL5nhVKbKk3j5MdCwrn6HThZsExqDYn5FyFLyA3iBdpKk3vDyv4M5NSSqsKe2bJCAimPbCdx",
  "key13": "4AdhNJuDCsaDGbBNFUESspdRbRr3Ahu5jusxE5aQCR7LrY5KWZcXFe1tDDc15RYGacZmyB2WSNDHQkBufisdQYgH",
  "key14": "Eq85JVzANH7Wwy8CPZkwPvUSufsKMjwBxBWmqAvZhoTrHuhEaqouBQqHrQ9TaebG5XufTNvHoULHUFNEhypuy2i",
  "key15": "8122qpABU5uFdurEuW9JmDpbrk1WEbXotB1ePEtqFE3VNTfvNL2iZNRaZ9rpn2e6FKhhpcaNGoXPGbqvbcr6VhM",
  "key16": "35HG1cTXfYk7ibDabLJxs9uypsSqHeyC4qkbbCwTz73T5PGU7w7LmnJeTBiyAVEZ28tXBwfDPvwcPsZ2cFE6NYuL",
  "key17": "ASrURDhhrczYmA1PXVkoCv4aciWGwiK7Kw2RBJJtBSAP8qKxjcDxL28z7hruYSYWKobc7Zznz3nc9qXLPMhHXZg",
  "key18": "4ErL2zrB85hrFoUGfj8ne1zxWGRPyv1KTBjdVNpe5GjocuoV3C1MhMjGrSRTpASiUZRt2rLGjrMJNPtRFx1UtQLF",
  "key19": "DQY2ozs3fFTArASKUvNYkRLm6BuAC75yKQCoFmQcuftSyhswLByJMMZbyx4Nrh1AatiVnnJ2WrEwcs9HzSZaRiD",
  "key20": "4cMB7eHPiCUbeZzEWeJyUeaJ8zsRwF9k5YrtAnH3sPTt8MCtp3HV1FfVYNjdbY1UBnWmJM6XEYZxjT65jBwyzosZ",
  "key21": "sfGerJPjnq43rfkRjC6SiZTADNYKGZpfc6Jc9817PB9ifFuf8j1T9ztEGQKjgvFb4vp2TQCm7N3g9PnYZUv1Trp",
  "key22": "4vNek9W7tMcPfkt5sNYor83ktD8G3KMTtxoKsoVDZkCsjgxM4sYHTo2ZtcLwUjdrWPc6M7RBAKXkZ1YkaMXdQfve",
  "key23": "3FEEZvyaFe7VwrDwuHsaP6QZYhxY7qeiks32QptHrJgiJDsoPL4NryfWcAnEmgb29uHuLw3ftcBd7THoFDzn3iNa",
  "key24": "2o6H3y7qtNG5BpYZuTrixpRTiGecEyHU6quKPe4yHU3bChqijJmKXDz1tyCU5uMqTJZbSpJTdAM6KRJUgqgeoyk8",
  "key25": "4Rvve1myEB6TEZDF1gqHPQ628ZoM8YM5LTVVW53CiajGxs9ZFBQhXpUTpWxMXFjh7mN1531cPEQS55qnimfgHnwX",
  "key26": "4PpRa2wDGZShQzywirW6pRaXCvbwu4YjMUmTWGvu4Y9UpZLJMnWWB363N3mYnXkGV6mjMMj8jvq83RCJyTSnMYbR",
  "key27": "4pPGQvx712HcCqUgNSz5xRr3irHYvysPtT7PzW7nss8aCVtvNPLT7S2MAJ7qwhwRqfDb75uDETb8XTjEmPF4ie95",
  "key28": "2r8qhrxKuKAaj2wgeyw9Uyz7MapFPkYBfbLUuhLdgkTxsvow8i4wdLA1x3UnzbD4WBaEsWVsuA2GX9AjHVMg356m",
  "key29": "5SH2ezo7PJTXufRwaWqFk438iweMa154C77zTSMBk1BtyFkYojYyNaYhARCF14fd2oMjTNcEdAMGdP7t4STuDnoz"
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
