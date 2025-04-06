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
    "3TVRrcy5DJCVxjb6NgawHhAQMyvr7nkdKjVw225747fLgirzAHQdCCtEdEpqpjfxYr53tWPAxw4cvNx9EYEKdqot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KAubptdgGvgYF3ZvkvhkLtNPxNLukwVgrZ6sYqUBUbyijuZuRtD5CxfpiPytP7idW4NpkivkVbA3PUKf1EtVMxZ",
  "key1": "2kJe9XsU1RckQQVB9CjyY5myJ6zBbBFxCiVbDyDFyRgHc2Khxwm2DPem32F16pBcgCyjK5iQCnRGZ9MPJigCSPYR",
  "key2": "3fdDbYVHJezbEM31cdY36kKoFchCUQupmSi74KWPnz7PHP2feGYq93jdrsdgwZUpAfShZ6G1eSg4tK6wxYCbddzC",
  "key3": "5fN3j4e6q9PbBEaEbDpKrPjUkXQeYciypQhYtFL9rRyytjZqhfqaaTTBBYfCs42q2x7PxHnxNxKaKhNzZ5jJURjP",
  "key4": "5vEdphuPkcNNCvECmETV46Bcgak8SDSauxf6Sb7J46LzgHWYKoRbsnvfzZro53DAYuz29Bo9gd9Cu2NMg72TyeEC",
  "key5": "3a72dzHSPbwCZsZgFmMYdNWiCH2DZQ6NaKv8jKzyzfzpuY2kr4VCpNkwYRqUjpStoXqYntsoAHBk1nVwdwEERGzt",
  "key6": "23VdK2ifnWr9DckzxvrqbjitXkZNoAGWnFA4vUVmc5fhuAdPKUBWGq4cKmpoSG6hzmnwDUxnXhGBYd9vJJsyimn9",
  "key7": "4sU8VQNc4y6UmH4C6svwDuDULbuvjZH94QxKn9VKice3eexC3sbsVgr9u82LVn7q3HoWDCC1AWzcA9i5PvtWbFsy",
  "key8": "2uDsN55823ze7KkRWPsbKfR2ZgbzDF53u1YKrVFAoPHA2d7Fbf3bnzrZDVAhQnbLy7LV9898JBiCgEWLfEBWYotx",
  "key9": "2qNixYyc7J21dfWNM9hcqvTb4V9FXhF6WmKEpUmBfdfaFUkwfLfonPqjSQQGhNT269VnBCtZf2hYP7AHwWfSBsHP",
  "key10": "5KDnTQBXPgagWDxNmndvg4LBMz79hgwcyjGcjVZSLmywfPbGqBVb3eWi7QYqTANKckjYNwvKAjeUgdj59oVPiWvs",
  "key11": "7tpkEE3CuykecCHDRzwuoTeH85eTNp4CSpJHWjNSNReHxHHxF32dX7UBMTNr2kez8RjAaSnyAWd4j9x3Gsd3SiV",
  "key12": "3t6CCgbH4nYatjA3As5SZyJL6Go7wUF9Fsju7hocs32BWDnYiw6w7Lafn5WfDHPjyGVtcSc3hTu42U4PFVyGocmP",
  "key13": "3p1VHU2ATWpTTHWsHiCGu6nsmE8Xr3mea2rrvNZ3EBAWX3b6aiDygpTfo8vmcqRndJT2HTz3RhhrQiZ2U5J68sdH",
  "key14": "3mzFwQrZzJGV3Y61GCUokkN29vqm7a31Uc7pXM4yZtXjvW4yvamE6v5gj76M1FUZqZVrjkWKi2CKczX2gCQapU3B",
  "key15": "4mxdMhcx9JStgFjJNznWvUxWZWunRdR2KzggkUzuQnhGBo6myYrJF9iH9bYgu1ZPGcZq1GLaepRTjg8xzPMSq5Fn",
  "key16": "25Zu5mwxUUTBJRGPanCmXp1HpZV4mcgsvt7PoJPkn41UM7TScEjAaVepPD5ETnQmdCBepdsc2oQKHBr87x5o7sFS",
  "key17": "Zr5Nu6iVcbXgQhfJ9xAFyh5SGgF1hBTFGMEtjPUtMFM8hdAFE1zod4ZciW2Umyw4h9E7ymqHvGhAQuA7CpmDZ19",
  "key18": "4jUW2YQgEjURd3om3Vvr49DvD7cotE684wwJmYLeAXz3SRBsQsrhJvYAsoq2KhXStNsiPkbdgUhRXR1JrfhGKajr",
  "key19": "2x9ZgusKH5LEoZkdo6P7rv9NR32LGzvGn1MgFeDktUAWM2tFqcbKUdhGdJJEjkWo9acLXXtLS2qu6hLVeQjVTUc9",
  "key20": "VGDs9SA9hNtLs5QHqNWY8wJ5w38Li5ye7QwMRcSXhgQXDyLaWDRum5JTbbPF8c1GzMuaPaU9LTJ7bJbbjUSMht3",
  "key21": "3rFRKKmgLJcQJaa6y9VnCJZtcNPL42TgDuvCwYHudv5mJJqdwMZcsKovw1wQe7aZWkwq55SCthK5iqdSMFJsqnNC",
  "key22": "YNaz6chjaEiYqfY2NbhPbUugEpcq2xfmqHJifgPeyVSQeDqkdKT6Sb42oUNy7t9RAMM9BWhkws4FCyvAPtGMu2o",
  "key23": "3rRdc7MaV4NwWWohpUekZs7JbwMqVEeeLjGdEKAUgFQSQnHsizfcxxD1WwR36MumAYrxpShGoVNfzoamj1q1QGdA",
  "key24": "3YqKavoeM4mMejjSr1Dqex3Q7oRHHfNccknwjhJZh9jTwSTzhsp3yn3kTTbHnTGpBAzRk4ggLgYdaYKLH1jPK8sa",
  "key25": "5yJr3XRCcKaDaHP8kMoJA2U6qt5e2gFR4SxQKP67bMGSfdFsWiC5vGzsZCvghLZVXP5WdViPAoTEAbnDRkyQXNGi"
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
