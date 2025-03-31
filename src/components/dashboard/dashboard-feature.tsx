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
    "4h76xYPWiS9FwU5skCrweMeRrRFgfSvtULVdn1WnTN3Z9L85U4oNaaE2CwZ3ETtzTWvJrU6Wq9KeNVC3LYei6tMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a6bggKo8kFTjjxPhXums1mHEZ2i2RDCqxFT24a3Tdn8ZsKw4V9vhhceQjo9gkwTF2huSRteVWYS36EpU2qk19x5",
  "key1": "2UQgneEkrb4NypThjiAMhdpHufGgeXVtq7QbmpUr4fKyhFHfWEpNmTnskMVL98RJCd4vDJ6JdqmUtWAW7us5RAxs",
  "key2": "5StvV3GQLWYpRKKktxfzSbk1th2J8fpQf2GxARUirnzrb2W1iJioJJivw7tHnRTivGoYkvckUvbuAmbuzJzCaQ4o",
  "key3": "424KGvH4KfGevk5LWkZvLg1T7A9vDb52Cy19Cs5UyJMfQN9HLvGtmXpaEzWkhsB4Di3nDWZfSddPvfhGZJ1NYG6U",
  "key4": "B56iE1MWLS54qHueN8hUHqogu3ZQWnaPVtUDBERL9i2sws44jQwzfrekWxFsbPi4aTLE1JD4nZQrRWHS5KH4JKD",
  "key5": "XTqxD6iRz8BWTnJuiVZeLV6rwit5k8Z3sStqzpUETbsaWxRdSVFrmqk3UEhVgENA2FtegHPp9BSNomH6FJCUVBb",
  "key6": "58J9kWbXrbfQAuCMss7HigUmtaRWM13VmQZn2RHtQAArhyoeCcABtKYiwpuMwKy9vV3FSFbdXmfCBiW5yWCcUo5V",
  "key7": "3yauMDnZvPkDvDwDqxrvxxftUaC6HuCiHwEtgmPyfwsiqwLf2Y5WgZE1m72KR9KAMpwQLuekkYco9GKDWtuTxq7N",
  "key8": "2YrzxEzM4VESaSSuD3pUJw8hZm9E1GUSkahMUJgoErqCLcZbQhFtbBLnxxsqLBpQ1A4AHpBJG2BZkA3WdGvmjCTF",
  "key9": "D8rMq1Gnw8XxxfcjkWpajKMCQhLiBNWqKVUbNbikcv5NzaZahDPn6u8CwqQG3nuAAYzo8JCME1ypQA1s37iFLSL",
  "key10": "2sJJE5GEkDvmqTt2RH1DWiqVbSojKtUPaJVLocj8Eth111CuctRmP3aZ65Q6rrvSZLhHd3rzZvPJF2YMKeRyhVip",
  "key11": "48J6vDfMTPPtFLGBdPcQRSErZT9hDbZdkLcJ643dCv3SJPEH7nXtT8Yb7U65mVpAcJxoQgdtnY4nY6vrqoGqd5Wg",
  "key12": "5jTdUyWn5F3BLxvQ4oqBL6YP1iyy6uGoWnJG1pVois2aXYXz8UVHrNbkbsQC6kX8i6dK7ejtEcoWybJzaReUvK8t",
  "key13": "4w3pmLvZVMorRDdQXWaADeSiVWFg4ogzyPXdLZniJwffeEPULSLmWQfwnQHou9Y3v7GFkP9mfmVZ2dYGd9UsE3j8",
  "key14": "56r8kKQzzFJyLSgj7sEhcsqmnxwzu8MH7g5LVNBaBf7MxC2VsVJ7j9FBQ9t9KqQ9xpbVzYUA6V2gpYXv4f2K4xWt",
  "key15": "4KMyvai7NHv5jx7HzhtsDZBo31Zg9KfVGGTJEVtFGfjvPunwyPDrKVqHMpnMx61hMhUu2yjJRReYypvJKSusNYmn",
  "key16": "3Ni2fTpyLAyzuZVRMATzzRpx8GEArxBG1tDpsjCPQw3zxjNbGDeDL292sSa4FTHKwP4qdGA2KEMKV1f9oXLxmi1r",
  "key17": "rNyFFDXv4GKcva29fprFVDPfpR6kZqaPFqHETKFchB6xfbxFyk6ZdL2MKDN8BFwFufw41fLr2w229BZStSfuziE",
  "key18": "5j4ViFF8wMQDb3wWRf2gx4vVDaBhPPCzr8h52ZHBwmvAqWXqnAW9kKn5fo5wks1P9RfGFhTB6RtXQhm5VtuyWBga",
  "key19": "4xND6nkgJcr7yXYw1PRYcZwVQceBZsrWtdhVRUosHdLTRkLH938bQdA2n3mTzbwzckfY99pBe3m2tN435qKbng5f",
  "key20": "X1vuJ2S651afm2ri8wGkraBPEDN3HnwaDCYDUeNYHmhVVMgM71pRqX7omA74Z8boturZ1gAgtoiwn49kXAHVyZM",
  "key21": "fzQE31iRfkf8QuT5zxSevbRt5jDCLQEvTBoDChEp4XmrtkFokexPvV8kX7ZxVczAccR3Mzbjt3d8tWTsx9chzCn",
  "key22": "35NvfWtfwaUwWYrEEADhu6dxTvHZsaZWBVSHPzxEubbv5eege9QKguVzQVXa6UHX3eFZ1EgPRNKBSttsmJbatmNK",
  "key23": "5QDza3wXDbUzyhTJo4qovimtC3eKWWgzKkDWEhQHURs4axjdQtXApnKUo9c2SAX6KwMUzUMe2kxfngZyW8gyL6Hc",
  "key24": "55gSJfJpG9GYVzBC26FQpPxWN1n3iLaKNiEMvC1c4LpHtr1fY3UfYZhYF5CfHa5By3gj5SW26Uq4WWRVZiTuWFw7",
  "key25": "5tNrhNwZBqxLHxTU3npbDVPeGdzKoXhmpxN9mHxHerRiGUtXCMH5qk3JXkP8i5BFi1tk2j4wuwGyjM8XmMmtn7iV",
  "key26": "2M8rWSDEyLVNYHfBPj6j6UR8f1YWnzDXuc4erx87gTKtUsRCufUfjdUyjDUGG4uQ5FmVfSqu6UW578iMzBiH6q9P",
  "key27": "3KoDurwiBTisrVyotpnH7aWvSeraXGyx9zPZP7ZGXPcLwCJLBECBBb8kjwmxx9QVQPvsi9GMyFuFvMHFrQdnABh9"
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
