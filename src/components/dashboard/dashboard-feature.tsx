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
    "XyaUgJhBFmsA1NVYYa6iMwRV6CcgKAgyHHCJvhzTME6RSfKBhEbUcBHWGx6UtMFn2NemMUKfq9MtzBMh3CBmjQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBjxvwThXVHXgmQfUA2crtsf9ug145Du1gv2LgxLgCyAV6cAWyJSzeC3RJ4LDZefvvxKd7JnSghEc6cvuVC2kGw",
  "key1": "63B3LRS85a8KGdnDeKMrLds5xq7W7pXfnfmwCNuQRbRUHUBbg5s3ToS9Up5n5FvUwks3XKnTVmPzcjyNTMAVzeLd",
  "key2": "VCWGCQt5aRoZVEgGnTK8GeHEBK7jAdbj7usf19r4jJJRb6fmYGfqNHTpDRo75xnZgmtQyMqxJYKLisncqkCMfCe",
  "key3": "4gGh5B6PF6Hxwn2cTASZvQbVFoeBgyvkznoHh9dGutFP5V5jjtczMqv4X6CTRAkHRZ2qJhMwQ2dnTDsJXV5kMKDU",
  "key4": "3okomuc1KR6sYKf2J9mhgF9jtiDzJ5UGTNQSoXiUhcAv2C1oXMjywupBViXh3e2abFDuCMFTDkV73KA6smVtAs8b",
  "key5": "3d8vbBXFAwW4RtiFCmAMdiSNRb33iRzKqvXiZtjaLN8p6dmCbNTQTt3FUNTVpHHnkQxJb1pNcYyd2SY9QKZV2AUH",
  "key6": "4X8AVFVNykkzKqWtoS4o7hqnm9dpMMB3EvUwgXsrCVcGMXNp8xFGQTNeksL5FYP53P27DcCXDyb7aB7fv2zzFFXv",
  "key7": "4zAVaPWzU6ZVy4tMo4FX1DuYcXMg2DhSTtvRqGgwRpN4hwH9iCM4ruvVW1RHJL3QaaEy9QfP4riLP5LnEinvhmaG",
  "key8": "2oEFN3WjXESLQR8X41jgAGZgz2xVjAkfi6cSCJ8Ct41mC1UGyiouv8gdc6gjN3Ve72drdLkZMF6bSKnPu9aBMhAQ",
  "key9": "TKnEbLtJvzXMYDZ4reyH9a6pjFNf7L4jafsVwyuQJFKmnJCFT1TKkyKAM85wgktPezJigHGeoWhYpnJ3uSxdLnD",
  "key10": "4RrzRXSTH7bk39u4eAyj5eZY9FhwHxn25fFLhZFmSVFWa7cs1fzepJdNF8nZDi5K3T34reFAS9sm8FTQ6BtJwk9b",
  "key11": "5CQ8YN6Gx73HfVab72nePNQxbQZywfNJb2sKC5MNkHiaXGAXfEh4jpfn92u9ozVnG7pvwE3opzMq76NTZUe9n1Yd",
  "key12": "uTUiDazqmihNQoS4s1y4nQ2ehYa6MQeQzY53fZvUHGnyMtBjztiu9Vau56xDJgtE6qUJNqTgWwZ3uha3qbNBobh",
  "key13": "vUvViHYjFuReiG4eQQfXycXB2exBAFu4UAxJAgZGYDiGHX5FEMFmDM5RPgts5KBwYg4GCp6tgdFyzRTX5LhqM9q",
  "key14": "eb1abAvzyWi8YzmJqCkdvuYpZqBW2Vrznu5m46yc138zZTev2yM2niGjVgAguPSD3ypSaZcyBdETridik4ecPVa",
  "key15": "21vmpnovTqsdezzQRuHvVKHwjkUqXSxj7pxjszTy2jA9jireTHuagW8UuLgXX59HawBstytL76cm2cryLNzxCY7R",
  "key16": "2BAPAnoRUVYP7TBCYKvCiHhrnU5bb27qNxWQdDq5Ms37vj2u4AvUx7nyot5cVvKEzaqEqhr8wpbkLAcYYqsx1vaN",
  "key17": "2wmeVLLDmuHPF4LJXrBRJzdZTuQE48TzgW8KuX7m6rDjyfwwxnEW5FX7pJGG2RGsVZvAq8a7UwixPG4AWmiawrrw",
  "key18": "QQEVKHXP5ZWwVyM4q5Pvzn2CEKcxubhg9HSn6FqNejSvj2F3bqYbu3Wft1ZJNC1nu1843m2FWAXrHiSjiV7SH6y",
  "key19": "5H8C6wsyGDvEjiUeRnYDCm9xPqBuadnXzBG3qKW4NbF1F7k8aHqM7CacszbELSgWA7pDkBiEneSfwWiWFt8EGvEL",
  "key20": "4CumaBdH5JpjR1wkSKyej4FXVgeP8ajcwNUkMe4PnkDqgyhbEbg5K8uwpKuanV9JvVvJz7KAmfAspgAWvJMRtzNK",
  "key21": "4KGLZaYW4wVRMJVagje5Ld96ahQTnfS6maWPyLF6nQuew1ptwoDMGPBVJvTdjSB2nzydywkafvkMZJ34oaePHc5q",
  "key22": "tbx4zZJbidWHEDe1qzkPTdV1qSThXp5qNYVTtE6HNj1Qt7pe4adjxS7HD9Cx7xgyWY7vn68B46pSa7ogxXXSCPx",
  "key23": "59Qsz1nRXj5ZbwJS9JuysK1dVJcC64Wu7SrWsAnezxHU54T8cPckwT8yQNYWDmxP6TWsx8MmAjXUEzwVjgmZiu1v",
  "key24": "WkRDLvec11mRiTzrhvh8y9fhCZjG6SwhmKdE4Kwvn564o9zyMDveYd3XbpkioPE5d24VEBNbvEbKJnEG4eQiKXu",
  "key25": "32KCe3KeBDzxtjpTiWYHFZTGPejB6QT9DXZ63rpjPKdU3codxZL4jEzPb6jPjVMFz63f4L5Z93o8LNkhfY4ZmRwj",
  "key26": "3fkTbmZeApgnBGcz2P7Eyji4EZttFwF1JYJMxQ2HDvHRZPVijqvYZgRkmypzr9WEiyTzGHqpHjKxvPF8oxDworC3",
  "key27": "2mZGuj2ogenTZptDxXdcEKQ7p7oaqHVbzeCzoqfubFZZm3YpQM6AUDkAB2adRXnmLSNPfZEmT9avehhhqCSvww5Z",
  "key28": "42bDuhQnDVjxN8TiCawmc1nKCuexoV3AKAjL8YP3af9Z8m8c2siTr51v8W8iKMkgdDcCN8FwHkzHewGVhdSBLi44",
  "key29": "4FEXNY2fydtunkLTjGNZrXYcHtcM3YSTJUvzjC8You7yJaqRJexTQTP2oqbGaE9yBZpEyfF5B4U1bgo2mPYDgpzv",
  "key30": "5JW8pbyedX6wZp4qrQsZtNuYv8CFnvoDjeyEhozwSojYPHHXWA8faMZmR9XBw7qx69vAMfrPk1tEPmkk8w2jhH5n",
  "key31": "2v98oCU6rQgexU8xYPeZr1BnyR5SYJM9V2WYXw8T6nrsV3X768LReYCe2X92kqCd2q7HX4723RGcSgyuRUvXHry8",
  "key32": "3s3CpYLsJHsUcCQCp4PexUHmvAVxXUp9y4SEStHJbDfPPWf2RZZQsy5L5CdmZcWJ7BgyZFPyFKrCKSm43cJ9MNy1",
  "key33": "4iTMfYC1RPGrk4ymGkBFp9mG1BJtLxrp7eUrWF44xgxkYL8ExCkVy1ur1izC2FbniGt2Hs2o2ivzLwz6n5PN8NMB",
  "key34": "5KYwc6svzMFB9rsVRKnTHPh7APMkgfthWyEamJ4yACTJzwk6XCgS18jQar8EvjTmC5iHUr2UQ9AwqE6yuAWrJMTr",
  "key35": "5KnmbbgqpVFde6MWQ2SxmtVAC3dXA7M79kqVip2QcbhFzTav7C4P5RENqaE77FQkz1E4tKSm8WdD1f3PHhx5LTnE",
  "key36": "65D5GfRnKh1SecqESQbjaE9oWkCDuFXbyvAGTqt9dnpSnPA6stMf8jrSbHvixHaRQV82pqowyQJnhzU4suH3dVuH"
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
