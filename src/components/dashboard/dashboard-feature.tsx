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
    "n9gUMGkJn7uAoSjDYVXi791UTMLRfvfHVPb3KFBiUKmeaWZCStr4aiADQS2QJ6bAjXg35mxnYxXsaCS2pzZxrJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nKFpN1xYEajNUF6izaRvGrvjP3jmSwf1wZR4MTc5u6tE8eu8AX5TR6PHCjWcuVvtwLdBD2WTQkHGFEE8EXf21se",
  "key1": "5VZNFRydwYWqCruj8PgTB4adc1pekEYa8waRTD9f2iiA75U4u77rDZGjFF1DDLLJHCzfezYqwK8rnByaNpUFKV6i",
  "key2": "4LuQrdmqoRzBDh3RVEYDhxVa3NspP1vhKpjg9p7uZFjsvHMUEUpaTFR1pSJ9zXPs3qX49SAbsd8emmCYifyAUy85",
  "key3": "5aAmRsANLHN6i2o18UhVaABGFf5KVTUCVwuw278s1aUFNf7NGSZXDq3y7y6pxW4367kdAofvez9FxPSwoHhSQQ6W",
  "key4": "5M1dvSzL3j1orDmTL3bE1PJDhmiRtC5yh2QnMedhjGEv77GvzTNv9aZ7ykhf7sZREcSSi7KwTsstAkhVHdLi7uLD",
  "key5": "obwvfMLWtyeKSHcS48LExEYqX34hWrvUhFQLihN3mmqhc5zQ2R9QNSfs1cF8xrGsKCzZ46yy5Feui8Lva6atmFx",
  "key6": "vy14YyksA64P3LJYfEvR2ouUmEsXeHtu77MY4XjC3hjSHTLiEG9dESKfpmhWm9q4nN5RBYvFL5tr1YnBkLatsXw",
  "key7": "4pdQDocDtnhwbB62pr62xyFJhSSht6QmRDWF3mL8nuvtFUqM8NR1B5suWDcCA7Nu4FBjmNakXGzMaN3gehF1Kk6F",
  "key8": "diMf9f8FBx7UoRXsipruUbW1DdT2LPs2m8RvopQHXCinb7S5XaFFFe81VFUyuYqsTM8DqWjWbbTqWbUNQR37nVE",
  "key9": "39vcnaexDeo8ZkPR2sGhRdwSBkiEV1pr8SPkDkia6ZjBiR2z5UKSRYvzvQGRgdtEnLkeMKji44CQMRTJcckLkZ79",
  "key10": "DZRGxMjbEfXYyxCE8yySa1mfX3TuohCNViPENSrW3iC5YNZhXsPfb3jZjjBRDELzwXs44oaoDAQHMQpfe5W4yHa",
  "key11": "2MYAJ1wKbMRw4Ff5zV85ZfJhfc6GQu9tVpx2wLJipKJF1fwHr916NqH7v8KJizn8ivbutdZwKUqzvXscVqDm8Tey",
  "key12": "3UxKrZ5PNj5jxH54LE7nmpBTmY6TG8EXQ2HMnZeSqe1b5KafwAehyvZX5gg7hjwumYvJb9PhcW6jamY84jwBpNWU",
  "key13": "3YjZJfq2fhf7Qgc94Qm1LSUZzTVkfoG7sX6U3Bm1R8DhiknsJtSPFgihMZTeYjJQ3vaBmGVuLEjPCkXhc4gq1jWH",
  "key14": "3a9WHf9t2oG3tBfACFak5KRQevFsBKCeZtDPq2ezrbrvUTMy4RKsoAFCYBg7kPWSygXNSn6kvac3PL5PjpWVR89d",
  "key15": "fPcF8ZY1aVMG3eStmNFL5dDLyJC8hf4QjztQEXzcbFb3CEK9fZ1GXUVDpuGfbi98SHurJUxQQ391z496q7SugcR",
  "key16": "ZnTGLUscs7oAEYyjtpu4yPnoMBm72AfTviN3zYs531rYnM3vqkUDjj2BiQytwX5J25wMoT2fGKm2NQAzJJjfo5m",
  "key17": "4KuQab69PHe8JE2aaU8f7k4iSf7B1oLVrnYKuhs1RgZUW4wUvKzXGMRVJSzn3P2tJRFi9qjCyhrZ7KQPmP143pZv",
  "key18": "5kxoCfvdLMH9sVdAwH2urHWVDYqNpF7dx6kWKpnmZ5R1HYN3UoVR1PUM7i9uyUieo8igpgF7RnA2Wh3SiAGEV6Yy",
  "key19": "67cqvCecK4vBtjrz8EEciwqbqSs8nnBj1STypwemQQu4xf9LQLQYYqHbyiLzRKDMoT5YHX7CxXCcbCtj3dfhMVad",
  "key20": "4PHcDNdyBNEnH6QAEGn3AMYt6fvhns7aFxKPHm6haHonbrmZEYSAAcXm4WtFh7EDTEqFCBDy9zqSdAa23EtJBgW7",
  "key21": "38gL9kFFUpSXcqUE1BGsZsg6LbeWzmAwcyaqGgn35tGCfDNJ5RGz1w6FXMEKc1mdhE7nprGJ8KTV8jp9u958cJwM",
  "key22": "3PNZFPMZyWfMAuabSa2yb8GiDeUGPeNYK64i3RsBXHVyGHWmPxy3WVEKaSrnaMWUoGj3nDPoxQYxeiKo6ojPefvb",
  "key23": "22iVhRDaHhaKhqv5vAT4VDhxzuwG7yfoz7MsbvTmrzw7z7PReHhbCazYha97AnfrmahcsPcMPaNobKBtmUxKE6TY",
  "key24": "2cA9x14tZhnRLm4ojUSP5i4hYaH6fpRGxoNkUeVp8FRvTgizy4Hs8X7Cj332x1bZDdn6o5H223jpPJqDFcn6s2v2",
  "key25": "2DCLRMppERWdW7pasXhstrb8TjoBieM8VvJkwyhuCt5izwmwoW6Z9GCUZm7rHMwGJBrsCF5BhfC3Wqa12gimT8th",
  "key26": "2avDW98jAYmKELzLN7NaEFXxx472kf85ycsn5EdSWQcew9iqt4uqRRYcL4VTWhm9UmMhmcs2KeV8Q3kppqMHJ3DU",
  "key27": "3seyqrocbJVyn4CMDFmnM5nWsG1FExTZShMknPqZ6cFKhCJ6VwA5Ezup1ADQvBfNJYHz7NhWrxxySgih5nFEDAhc",
  "key28": "3jX2nBjQgotr3R51LteTeiKx5hqTM9DKMcoybfzY1nFrz2cyCJQ4A5ThaXAS9YFMQsekZSX1yzJadZPSTJcueT3W",
  "key29": "5JP8x6s1eUgxFQFPDUCToTnDegniv5oC3EWYA9mGwtqeMp7PHxNTVfP1fWpdBHuoSN7yoBL73g5QTLdq8xVN76Br",
  "key30": "4ezTqdQ4ZpWg7NXE8nVqisddxsk3KnmtLmowejESkkUMMw3NHDX3yKhxcqDi9AJPvtvkxNkhKKvjed9tovghwqXJ",
  "key31": "33g1TU1gayNhSeeXJiAPDB9yu1F2z8DAtpTupVa8Kz5zvqzqj4be6eMLTWpAVvYotxy8EtycxA4zVcvBB9ckVhHQ",
  "key32": "4kbXr6r7oxkgZc8VdRFnkAUPuvqrHbyw5azWQu2FkvSZrqgJVAAk8CjkaMj6eismMJup5etfc2LgG3xLv8XB26Mz",
  "key33": "4eSr9a7dgLjnRRgB3gpbg8QVq6ZRgeFDTUbG7pT3rberRTBRQVbhPMda6Vfd5tTQQS5SN731iFBnghoKdA2FxjL1",
  "key34": "3Q9voaLBfek5MdDJn65JJuk6veErhyfpHpvk8DmpuL3BYPpsRsNRbrFQgJtDQaG4g1pE1psnfTvD6nmu9u7jYhBM",
  "key35": "2aGEMauPHyfDNDCDcXCxmuvE16ojVuwphvRqzE2YnaqJPcj37TKNf33jPrEaRtAaV6g36SrWEKc8d6PoX2ZRAN5d",
  "key36": "3uoeVYzd9moU9C58du3kQNMeVqz3otR3KmZ2MVVW6McUYB3uZJ5p2nJLCfy51NodQc4afMuea6G9Y77jgaJoYCUF",
  "key37": "3jEupgQUAkg598bXmaEUyNBHJb7emAxpcgM9RgHQjgfzQkaR4rm5vwS7UWSyr98qSoURFmKf9wbpvwGXb8brTq1y",
  "key38": "3vcicpUdz7dZfn7rN7rRHGWv8VvWLMZiEYiYKUubLmaSPYWJkK4sWJnL2zUq2FmBrkt4v9K4Juak6N7ToXTpRmGE"
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
