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
    "4xMjZAE7tVxzJKteymFJdsWxJqoREYGrEYJetZJ84CJu6RqgXaQUG4LmXbZmdp3rH69go8f6KkqumYMwtcf4xV1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qKuVLNsMngYZa9qYoetrSccQPwPhQjx9531qjqaHTiZjVKT5KNi11zEjbuvBP51LDiSoXFaf7S8RSudjTdjGNsu",
  "key1": "hqM8WYaWF2wxu4xfVHYeJrxkPu7uRMekmmiqH2yrZPy6DhV5SP6UEZtA9aucMh28Jd2CyWiSBR2Z4J4dvUj549N",
  "key2": "38NedQwbCEhauCtFfG3AsqMyt32fTP7Q9mrrNrEeYevoA44xhCz4Kf4mGezAiwbz393H5TGChW4J2b9EFGRg5wmk",
  "key3": "5mRi5TPgFyau7yZ9cGbfoy6q4XM88RUsJUk2dSMrikdv71dyFnDG9qeV9NxQzHyrtV8kKXYw2fCyXG73dmnEAVpz",
  "key4": "4ZusYY3YnBDSHypvTqHjvGkSw7udwUPR79Q4PtTPL8g6LSWcXrqv3dkwJBcz2wtazWQiPRwjRwWDgnBmww4iTZzK",
  "key5": "2NLakYDw5j4WnvUpapFg17QwtLxbBhK4MFgQXuLpEffZMit1CiH7ziMMUipthXAXvQHFsBdmXhJQuqUnvGBroFQm",
  "key6": "4NtJYJZU6J8M894V8hFL4pke9WDUD7FS6m7HxCWkTHEE9ZJxaqmfSotmJBMehT1ePZnVdmBALUhTKGvYKQZdRayb",
  "key7": "ejRqEUckVmW4dYeQtHoQrfiotNM7xEbZnkHR5wZSoL4kztGobLJ9n2KhuykS8rkKkhb2GehTjqtrJZSFHr4ejz2",
  "key8": "5hv2qk3WXeCQwU3aLxnqy5WUu5DzoXdkCWtTRsBfd6V98WCudaFixmsaTaSQHgHGfUK3myoyEbXVMdLCRzaFZC6n",
  "key9": "3xmDSDCPt2mZ4Ke5unm2vDqDL9EqbrUSytxxWusVmJReZSfcM45afUErmQbuxU8yKeiW4thJP33aa39nbXPHxMUt",
  "key10": "585jqtj4zSFTypdRYEP3NN4sswJTFbUANmy9vVEhkEf1vvux6BmYoFmcY4VfJRjMpaEEkjKSZkqRNYyybgjMa45o",
  "key11": "2PstTjpCDU7NnRS49YUpFZBGoVkHNCKbJmxbDqYn2CKigKEAxH1JJVViDdmZAyQJBeQAyC9c47pmVv1Je74sD9Hk",
  "key12": "3LgXVMJQ3VLHy9retXr5XeY8t34PQDRiw2MMDyK22Tggso5CQg6MEtNP1vwa6ZSPAZASNyYZLUeZbqQeqa4JYNdo",
  "key13": "4x4jzW8PmNURiAp1gScwagLG6oAvH6eEStESQeTAfVU354sf9wngePtZXNH3XDBJXxL382fMHbq3G3tAKeSzxwG7",
  "key14": "53XEfFTgvXKuqdk8HUWgd4Eq13vT6PTQziu6eUu3HWrTNvJCYJ75fuxt44MfGhnCE2WftJUZwNMiUB1cPtFHQ3V2",
  "key15": "5ESQPp59m4AUP4Lkvs2sfvBeXzmqVqU8xmktbghhTyQwU2G58g29CzgCTgHeq6BLiKPj939r3ttGp3v2p3JzgYM1",
  "key16": "2Qu9h5m1MS1TKf43KR5Ptpo82TdoGYGcnyJY5QqRweoxYra4wEMpqxVGEeP1Df4DaQDCQGVABaMAe3qt8vGNEKe",
  "key17": "4jHYRwvDk9KNzRH2bpeph5FifbHmEyB7pYZQmudwgNHu1gX6piBfhuDe67mPE7ozPU7Dgk6EN3N37LVCt1cSDuYu",
  "key18": "QmhohnwW3Cvxaz14owC4WHJtpRuSuv5rq28ticP7BMipCjFoHjjydVtFzsyoCfc4ZXdSNo9rPFoGFituUGBSjSt",
  "key19": "5wYpxi2ZTPWqcW5SJfETwGjeVN98tBj6N4At9znxHhcjEhgySGf1HsbwcvVQbhLAVcrh9LFK4crD3YYbpijDfTDL",
  "key20": "2k3WChv7Qa7oBEB4rXkWLbRjvaF4YMVte7oHjJjPsBB6GvrhmDBWRgSNVBJgmr2EK26Fe7bf6Y3qYP6pAtV6Hkud",
  "key21": "3g3pQ1tycwttN1aXbQ2exyahxC134suomXxKSk3cmmMDJGqPm1dRSabuv9kDCvhoFsygKHfKN39VfZwtQfdFia2h",
  "key22": "56P92Q8EDqnvL9Jmrn7ZPeGqZzKG64PB8RPM1hjMt7sVPEC7LZZoo4ouYMonnyrTLZkG1N9Q2K2cyJnB3hKdawT",
  "key23": "2hZcs3jhhtEWrM3xSt895KdcbdyzLDTXEpPbVTLZWvooNt6dd8fy5Li9bSTVSwbVQFpfgw2D7SBBvVDKHdkm5Fh2",
  "key24": "3nYVkqKAm5TJzqpib5iq8CRik3Wq1HasGKUnHKJ7jQjmNgmVGoJA1tBqNro6FuYnB1gNztABAkecJnLS8D2NAmwo",
  "key25": "55u2PFYdW4vg6mEpkiuh2T6MJoqznrRTa8ZoWzB2Ev8eZkrieynwZXSiS2XvKAWP7i9d4TKhHcu4DruMy7mCHkBM",
  "key26": "1ZuTMkm1ubU9dLCdAtTGq2ZsNn98GqjWkdkaor51MjT96vYfwFDNUVrqurySDDkPNBNbU1P4yNC7TNoyWmZpqCs",
  "key27": "4rDjMgGZoJVSap7KDgTbRta95fy4R7T5Kx7oWH6YDJaQWKmyYJM42TYKSJF8ePg75WWtriVZ4zwWjzMhp49pgxPC",
  "key28": "5SxnDBQzLyU7w7uHnf5SiTdg7MPCTxK6BgMRHejwhbjdjttYrjBqG8vBom1oBpkrzqhgmiibUjh8j1PsfxRM1Q5o",
  "key29": "4MMbo6kPQtK5bW2JPg8ULYUhLAkr8UeMMdeDXehCTciKdiriYzSyjrs7TBjG2wo9gH5CRpVFj7YmcLBg8ja1hGxc",
  "key30": "5oTt6Qa3GQ64Pc58dAwvHyMbpzb4KEHqkeKDuTg1bEECRKAx4NH6bSDmwchhxcAVjvmVUqdYsdauwUnozA8bgWTJ",
  "key31": "3MU256CAaPFW5VEGWMHQNUeGxA66Vb16tZYgLz5L8vGinGSGyReQzwuBUmTipH3CzdRzSTfU6r392oZDJiy4fr4a",
  "key32": "VetwJ3dV7P6YfmU9P2t6RTJy5cLAgNiAwrXSiH5YRMxmC6R3aSyVv53qcNu4R7ftHZmMe33fVEbrFdpoaUjGjMW",
  "key33": "4AoSwNJRW32kM1h9cRVCByGugJpx9yKSM4QwsdLJEYgmdD9n9sCV6TZkDZkP1LD2VQtzFHNBPG5m6isPEzjzfZKW",
  "key34": "2vuTNGV1XKqEnerN6erJKtAimivvHDneZuL1N96wqeUAAR2a3o9RWkp5VJPe66F1Y817a16GTmN9yGyNWCgLKWUg",
  "key35": "3HeLhD4BqjZ5tthtP1o7Pj8oRc16Th3eaZUnYfJrEEfsf1UdMGHF6ZGnDXNukYwQRkYCxfZz1rrvHRqZoVFfMbDF",
  "key36": "3kRQvzRhZbtUZCBGg9oQFeY9BZinpuFRPYCXGWWR3AdQeXUGACMLwCfNj3F8nSgu1kTqNUb5L3h8fGwKURDzpaGg",
  "key37": "54fS62d59os4cfrwKe4SfTYoWNAbqzu8kat52tQsEWNfPn66qukfZ4Ko357PRfWfA4BtrTcMwbpXzWNH7hemesEa",
  "key38": "5vmsYyvJupEXWw8tjxFg23w5jVwfAKnLqJTbJYWc21aMLWDXWsxQX7Zsv1WwGeRDD19bcWeTi5hV9nJpejF6ZSSW",
  "key39": "5CvjqbFaUY6mXuB8uhaTdDdx4ML8yZb4gcZPu5FyuPy8yz5VbdiD4nf2ntWxyvu5xoUgRA4eqB2AhjskNwoz2WuZ"
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
