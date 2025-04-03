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
    "4zqpCUAfm1jXag4syBKm6s3eB9xhHRqMyAAMe8MoWZcej3ggjYRV7pGNLjoLRTM9AYyoK3fZjQFBxDWRApmrsB6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bWaccPpgA9EWpCjC5TjqK5vRNKNrDST3WVh5trtPWoDvKJzoPyUuTT16auW6q6JPaRNWZwgp79LxsHEPdKQYqV3",
  "key1": "486ncC4c6GWqbbwHMqiYWhqAzLNDcVUwbxYHiXQYJpcc1NmnYNSX1jpyVFKw7Qu862pYKAfYPUhvT9oEU8kiXT4V",
  "key2": "3ZyChePiXZv2X1JxWfTZApfdR68GSXNSSsXHvqb8RujAMyxTASFsTcxt9ipHmXePsLcNaNMkmRV12QNoWxAAnBKL",
  "key3": "R78AEhuYugqb8DExQCDVNGxGwCKAdWSeLQ94UMhAqj9uYUef6925CLJT7ZiNuRekD2W8kHY7vYbjccK2AgNGpV4",
  "key4": "5YB13AJsdEisTtrFYAiKyFa2GNU972bts6L8Hm8ghw1wjPeYjTGqp1P3gZCaFJMrMDutjW2BLZbGnuC9zkxBjJHk",
  "key5": "2yX9SXV4LmvizZgLHB8xuyZjTiHcFU1eQr9UfDb1puJsctEt2YShC9mghEXDhemGZjpDK2wBEgyvNkAGzGPnmzsb",
  "key6": "64DYkC27oMz7jv9L1n7GayfQpViNpA7ZWPNpQvYmbUKgJRyFAeu5z1BaRWJGHkDQE9mxtcZxF5meV5Qp1ia9AGTB",
  "key7": "5RnZEdMrZ7PmWsQ6kQFKTAoQeFfVZqHTc5LV5P9CWz1cuTr7JGyqEQv5vXJ4neMfRX3zUh64LbLXb1AUXtDwCe1P",
  "key8": "2Xm67rzwLStow55YUMRXPDpc4GLb971h5aWmddUP9RAxvvmnL9KLatYEWPzTDKEdHiNkAHrttSc52EoLpM8ox8XU",
  "key9": "5MbrXEjedgPLVPbCV4m48MDQQibGDkUPqwfhVoWGLVgU5iM5WRRTrZrLBwYTwgT2kF97iZmnHMMzWAigseFhYkoX",
  "key10": "2VGiQeTZpwgpwb7ghDcPkkXQBfKVK9MTbGSWCQvSB4w65p5sptg4tDVuBzGhnvwHfALh3BWrj4k45fZXFCroAETv",
  "key11": "22JnDe7kkzPpt6JEPYkAYRk2RA3d3A7iw3PvfhRje2JrAFjpZdt31DHzxHd4m4CUkHAavBoatHxm2nzQXAYDmKi5",
  "key12": "4av2oyUBJiEw71zA5afsZsZWxNMpy4qbpi1qHi4WnKYyGm552WYC8AtYXvrLcfuTJed5cYwdNZS4TjcZiZi9x6Yt",
  "key13": "e6bppYRgK4aAC9ZvfBywGKsCgGxuzxshgs3pLHbBzaMZHTymZfXTseqPAojvNhb6RAoS11tmFh1qAbCyM5cV2hc",
  "key14": "3VpGV3pwWZJHXMygk2AXVmSdxkCCzoySRrdiPxjpPUVMoAqJcTs8cRCiNr7r85MYd65KUvuzheZWEpZA6kNyHyoM",
  "key15": "3ZHWr7GXRP2VV8JtDx8HHcnA6RVh6YWz1xA5dDwvXHQYrZN6KvBkgEnZqf99U8ANSoM8e1EC4eQCxpt32hACWtVk",
  "key16": "227MD1sLue7EKPz2YwvDdSDLywzjGDN8D5Zdon63hamYd79fqUihtwmXZqYV6Lf3X1i6EFGQ7w5zBVowBRvgr2u4",
  "key17": "3vuDvmNi5Eai5BLbRkxiKXsfPvEFkqoVkPNCVmZdN8Vk2sKtBGuyBNtVmFwNEC8VZcB4wJ8XQgVu6RX7EkdgTKi6",
  "key18": "VSnc4kqCU84etAHGseSfQ1zWroQZFYnBV7MVFHc1j4u6E7FMyHaqG1qr7PfHFj3phHVpqt693qhc7nJW8Y22fEB",
  "key19": "3piWdM6bYpXxjwCeWL8iDhjyxjjJH18N4uZ6SceNZqXNu1dZjmedzTBG8ySTaHg8z6Jua3UV8Yo2xa79eCzfwF3g",
  "key20": "3H8t4gbP8aHLddHyfVgjjNgtdmeKJyzmx2H2GQgwLcFkqoEvSCFYGCTugXSbiDa1Er7CmL5ravWcc242438kiWVp",
  "key21": "5xWKuF4fihcjjywL15QDNoLAcLCz3ZSnF57bxvv5ksy623MUek3yr6sdC2hYqNjyf96pw8giERZHetQhvvpwxw1J",
  "key22": "2FCoQQwwreR43U7S5B9xFyLuJkW1gCkZ7vDTnj347r4MrCH6KnZFnUH6auZbYZzu7oDFGtoGprHPUWYbQXtySTwZ",
  "key23": "4LApbo6ERF7kWuVpyyCp2qFRZLwyDnwwRdnrX5DguMgCMAjqVsuNqJZBBspQM8t1R9dZEL18BsSJMeSpFeoFiVF5",
  "key24": "5Lanw3X53xtDtZ5ewYLzycuecWVaHcWyb4D6zsPjbJqdSUYh1yoCnDW6BdwTiyhbp4WgaqcPuc1xV2pyVRY5YPuQ",
  "key25": "2AoKFZH6yuUjCEZHC8VJwZk9oBwRXptWCj8VX5mz1FPMraSUJmaPQg8RvkEu4Vj4qVrktqsQETSiTSsCiHKZ1jT",
  "key26": "4Lp3XqAcbGmvbdK562GuDKme82EPnQfgcjSFStTJvw72N1j9UitPaoT323ZpTQhdKoDN5iEuPNoidGza7DELEiah"
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
