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
    "8EdoYdZAwNKEZUmbHb2wBV8BKovDmynGZyX6Qm9Uo3hMsWCZhTsANJ4fkWfFdPB8vz1NfffpU8uRBH4uetH4G5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHnbUfiNtm8SQD9seGT4517KH9GThLu2RARsVhyKhDR5FJi2LXXTXQ7CfwyHGznb34WH1ffZoFM852Ec8ZcnhzP",
  "key1": "3Mmr4DcBMPut6wzfS1Uf7vYus2iRfpkigFy7dmizY3cppBPbT7ejrNVpdcBJrDsQ6G7hWyWpWDi93yxEou3BWyug",
  "key2": "4KJxMdJabcnPEkfeBmNc1wgT9pRwzwN8QQbiFPPWqkJpgrJCWdbnZFXh36epuXhZAMi5VXhC6c4ATXAvtVTrG96P",
  "key3": "4EPNysEsZznPxws1BYMYWBico6h2VB4BYtnCrAwR1wkndSNwMTzbcKXB8JP5XbvrhJ2aU9cWKfhUzcQUsooAsEDT",
  "key4": "4b46t7UuEXhUhspVwNt6civ6J3gqJ8t1FSSB2FAihivVVHnqf6xz9G3Pnxj8goRUcYPGUd5SQWcrbUxYJuTgU2nF",
  "key5": "4n58CLoxD63BZRFVTDYiQn8YvG9K5yMRSUsmCGFEAHzCuX3tRWXVo4sH4TGQNsRyCv3BGpSDZdLzjAPGGz6McksC",
  "key6": "47DVj3M721tmRx2XB6zcDn2mgRg8LTKEfBBLQC7dozA1J3VBj9ERzqEpE9CzkXrfmz3SANXsT6WBYH51kHKCKzeM",
  "key7": "5WNUG4TkLHyYojz4vC7zTY5Y6n2ckAwKRSrTcaU3BD6quB34jd6WhhgkUSqnkeTjCMs8z9bAaYPDUfxXvPx2X6LJ",
  "key8": "4ZevYWV3XvUoFcrFLVY5dRnCnLoPnx2taePhRnJMB9MmHXJ6E8fmh5fM1pfJgq3rMid7ksv2QUbt9GCb55N7cm7L",
  "key9": "Dz3NHoz3s6jaspqyUQkWVwgyTTmydGQTkBKcFxrs76HST9xvZPzzWygoPXC8r2yaCga4EktEkYLLMrbGJbjeHkH",
  "key10": "5HsHEmiTJrhNnYdyBcSjLmghkyVsqyRrLvT8akWXe2kkf1MXsRnX1A6EGn16KXCX1tXbSwmBfrWcB6WWy6GU52q7",
  "key11": "5k4VyTidTZDNfpQqGiz1jRumJ7GMC1XR1yuiJNtumrCUBhG4SK695LwpCFKxQLTdyhFVRXwq3G6QXa5vwwV4mfag",
  "key12": "3ZqLtE5GKxaZc5AUPe9eaKvT9in2He6ErRQQrY2CqfNKEx11L1NGKBa1G4qHTNNAAHKsD99eufGKfsYphXQPzc2d",
  "key13": "5m1XahD6DnVA4t715eJaTFcaYVb32rrYEHvh6GFXfnc7Y8tD5CiSEzQHjvWKM5N1etPbPW9vwRCVrF4zRpdb4hMM",
  "key14": "4wwqwEHBTZE6GhTRqnGQCkN2hdW6pnD1HoicqF9pQEKqFkH7gW5XntiCqe3mLAjSorvzvpehsAStJBhoJPtUtsbV",
  "key15": "4qaDVB6MgLhnHpFK1Gr8LfGd49zDM8o9HLX4WqfePyMK3DBypxuSZ5XUS75jrNjhaNx4CeMcEBUHzTALQUGwdMtS",
  "key16": "f93Dvxq8Liup8ZzpyHsn3CFtMXTw2Px3JaYJPf8aTNyWbhXhpf3JHWxUtKZYYSwPERfFRnZUpoBvwj2976RC8ya",
  "key17": "2RFFA7b2T42jj3aJ1MMArMyqYV7En2dhtmLhFmCHCWYarV8XyLXfrCGShYnHZEHfGQBSDuo2uuEZwKZZurLrkyko",
  "key18": "36uepB3Pa8sR83R4h3zZV4MNbq3AC45AMgNm47doacQdM3CzFLsRcXVCwTPd48tTmEqNwX9hFcKbS4MqEdsHAgXi",
  "key19": "21QjjKGzpFuMxzvT9pJHnERWKeqFBvFPyyJWkELf1cDSYX9xGfdFV1smp6vcQG1ySERWjo3mhDuNNQEodyzqqnVJ",
  "key20": "2jkayVNpk7NcjhJecvGAtausyHX76rc33CAwpAyW8LiVfjQTqt4dTvrxKuNBoag4ya8cGxkCGcRN3DUP5fGARYq7",
  "key21": "43yz5xVwAwyH5RvybuH3YfaAAaoi6KN3jvkACujVPEPW6syjr84ksXXN1LnRF4B4yh1LHW6LJLwvnXVSKbjYLHP2",
  "key22": "hyfvz5fj5wVzevEuduxv49gDMJ5wbBv6t5ygsgQM7gJD1G6pWQ49kyNYDh1U43QwwG8E397GJ1WugkW5N9ML5Bh",
  "key23": "k5KfW9j7EhHoBkGUSwkZJqvVys4jHGSZZhYBnMcfBWeccWE49orh8PJ8fHQo8NstG97nWRAR1EyQmorN1LtZxtr",
  "key24": "58VN26BsZKTbjnmWfgqjjtQFMnCw9fib7RvwFocSxmsZ215kFN5KDegeeg1Ck8VsNa3Ac1AJrB9edbqRFPuFtgKS",
  "key25": "3hZU7eJ1oe55gnVdeDrQ1s3XTeEqqEAwNWSEFhQZAr6jyApY3uSaJ8Sp7DPgtSwUcnSnxcvi7UrHiG8vnSyaXTkd",
  "key26": "sqhnGXNVyuHBg2sgaHjPK2C4reQS6YonEEGRFjA6KpPwd7B98Tbozu6riQzyMDB1FtYoNQoygmkUbJeiw1yHMLv",
  "key27": "5be3gE5wCxHhi8Up8jjfdoRv4ZH752DYY19UHM9PLFjaCkY8dAG8mYYy3iYMcDZEotDJ1dhFxninK2DuZ5proVrw",
  "key28": "ZhW3N9tSMaQE3pfLJmc15CrxX8qWgRKW137yD1uitkoMCFYxKi9nXDarqLZxnarEErEqmTD1CKAcd6ULvpydH61",
  "key29": "3UHoactfCtspYvDqrEZLjrY5KyjA2cCeeymH9g9f7LocqLEv59UqpQkJPKsu5b7sR4GMnSNVKiu26orRFJQZXxjq",
  "key30": "P2XTLdNTw5MvMPV8VS4sknWjvq88TfhBQsUyY5RGN9xmJLir1rfJLgRMBSaxhF46RFN726HgFSW1SrM4nXLdqbX",
  "key31": "2YveH4JTWfJ4DTyJgD4JzwYHw8gE8wuVZPw4njRVHHGJ1LJnhoEnsqWCtYFGGAHk1xDc89qx6TkaizzUwaKFnv4x",
  "key32": "46c3pDCJoQEuxiLCZQMpCRGnvrd6j6CbEya88dJWGzaRUyfYX7SWwvsuQ6Wciz9V1NGHt5qDboy5YHGkuT6F5Fym",
  "key33": "5LrbkzdPmVuWXieAdLZwTLEkp7xbYSZHpkBtJ5EnsyBxm4enokTe2gad9TnBvPnweLEgVNgFALRBaz9sNmz5FVvL",
  "key34": "4xq8MjrRmKPCsAqy8d5ML5GbfobeEEVK9pr3N7NskLUoUSxCpszRNCiNDfqAfFCPkCvTJMH81b1BLgnEF9KumJia",
  "key35": "WXWmsDEankxS8iuNpjReWrWVQK7VLGPaYNjTWhP1VC13h49ZfHegkWt9UJncRbWLYEBPEAL5oDk7weSxirPKb8v"
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
