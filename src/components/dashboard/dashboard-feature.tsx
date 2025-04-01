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
    "5UPddxRQaD3B7bB62NAfgFWRkQojQqWX2UcBg9rVRxQDTQrypj2FxTQ4NtrGnBJ9pznyhT2mqipFswRrHEZ5idTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJem6pjzRKqWNRZ3R2EDtEd6xNPmkLFbSiV35N6q93Jz4E1d8AgwXnj6DUETqeznNk1BD8JpNBimJwZ92csPjNj",
  "key1": "5sBdUYhEm3XwmaVGW6cNBDNvhxYZV57K65CHs53bKbxuDrBATjMZTXqa1y1V9Xe373WDgzyiQdi81qdpLz5PwJoC",
  "key2": "5fpfRmF7HVgpaxYeMrCRxGWxYhqfYNMGiEed4WgBhGvntPExnaFbNj2e8qN9yF3EHPwh71mgt2VR3MzL2XHHwW1A",
  "key3": "25AVxqGJ5wKo6NWcUTJxQajxkAmzKXbMv4chTNbRvT23DrhrUxw7V9W92KUYsAMj2tCsfsmN4GAoTZLU7VjyEsWW",
  "key4": "36ydpeRCztoXKozKQ1hKztsVaNFKterN5U6cNcTDZB5wG98CFdk2iBovCrXqSuP1orx2wHmYXXA8uu3EF45w2XfH",
  "key5": "2KifBQ4sd525v7SaHVVA5XTu3aoeaLhd7hvrjCTxV1zKLKhCu2jmsmxHtimseNCZT3ohnNEYWFDphqE2LT6ehTRN",
  "key6": "5h69Uyk7BZMaL3jisxfyVjjstkyYEZ7PY4k1U1oJvb7sTgKccgrtzgL8MN1TzkNjA6L8v4iqiyTBwkgo38VPaU2A",
  "key7": "4P98wSDFagViAeqFFqrymeQCPjtTc5mMCNruyEzdmdNpoV44BGfa8hkjy6r2mBQwutuiBXrfQtus8AERPhDXeekD",
  "key8": "2wEJe43iq4ZyhP6wevqg69JY7DUBtAmLEmkrdic1wN97vU1AbQQabmFG5yoaYLUKExJyfiVKMG7LBTDmp7fAFfX6",
  "key9": "qcMYUbbuHrR66Mbs12jPNY1ygNYiGavSDw5QL9bdpLXqJqatGgaJa6zFAMN6NDeUFhvtGZFuLbsMmHy4rWM4u2L",
  "key10": "3GT9iuCk5ptTzZKDaH8dbuKaZk1PypHZkkXxxWCwULqc8URUPnQ9BxfrqcUV2vycQcyaComa14Wy4tCuBrGLMHJG",
  "key11": "4r5QPYXRFPjRyX4eRyhTAUqmTmWA7MYmbGeM3UpiabMSc4jnE2P8QPdQdpABGvParfYUWjo7cvaWUp84uCdNWjyx",
  "key12": "39BPS7QdBvyDzzzKL3dYLyVYonFGDzEgCKzw6NpuzJs28VA5jxHGW2sqeCSoLja4MXsgbDyzn4FXVuZf8RwC9RpP",
  "key13": "59nzBQZMSRfnoUgc9TWMngWuKyUYMxCTWZjYASjgFNMfc2E8fts2faqkAXsHRsFfM3pB2r5jxvTnf9mFXeAR34xV",
  "key14": "3Qeiu5UFp4WKjwB2f9hDpzs3wDkiuBbhqUYroALxxoPhVMcLEMAqhSx2QBqGUfADrk7Jcd8eBaSD3mZGbRfXjucU",
  "key15": "3yuGLe3hhJPVYKuwC1tYN5zz3XUS6jnd6rTmF2gLbCMvK9XZ5jsQHJM4RXjCP8xsRCHe8BropRJ2SF7pK3QaWVH6",
  "key16": "5YnCKxPvV5Xvhx1fz5ymvDirMNfVNhkKk1LbcopWLoENVS3jTHidZGKhn28zDHDws4ZGbUBS8LXQh9o9KVPMpSoX",
  "key17": "EX65V8ERyyLWkxZZPrhBiigVfvd4ZccigTEAGajCeZazWhuy5VPua9pz6PH7VKV8FCsiaKTe79YR1ugrjLHka8z",
  "key18": "28H2eHFJV6sY1dYucbs1kUYmcPUDJtBb2kLzHjw2zGdDcZQhDyfUY3mTa4dF3tv2VJ3ZEHTcrScTzirtA8Uj2qEV",
  "key19": "eyysvZwGuhAfF9Gg7d9zEj2K9AGeTSNsqL1cWqurTyb3XiscGAnBRaBZ638K834wdu3uE9rhDDqtvhBRHn4jxLL",
  "key20": "5XtvKV2whTiqj2e6WKchFhWvFFLZU9rH17LpgAVCqM7KSEWPKXEXzWosC5Hmi9bEDTYGG7DePr3N4VjDnrjS96cz",
  "key21": "eFzbcEkQmBKtji8jSDknNNCf7sRptfoEvj9mtXUhS8PiESaDVK6ZgCEZubGcd3PhEiEqs7D751C28RtB3dw399M",
  "key22": "22XAHrqiAve1vkoonqauggZRn2Wf7Uc9VL1JZrmem7THNTZ31g4XxsPRXyNwHjLQe3eR6fXamzWrZb5AWWfuEh4p",
  "key23": "2uYf59RTYh9yxMUv9mn4LJ2xKWJsTkVXXs9JcnavYQayJAZPAoqYRVkRaBWenzwwjeRf5cUowhSvvGmxTJMggFoR",
  "key24": "66kCKE3aQ3G7s1bKV1ddC7xKJEtS1ugdz5NEyZbQd4TTgeDFKijYVRjxyLANFZEEvwaSMeLJQ8g1PJaKCnnZYsG7",
  "key25": "5nhfdTWzYdXS5Rf7u8uzJ2ECpuJ8ujtKJAvqrzznN1xvFf9Mzix7HoAtawm8U3J49m79UsGfpwS1yBqUeHdcsWJx",
  "key26": "2Cdtr8cHi1Ppo82tMAoMNn24oY9qKRtEG6Bm1eyJQAtVUqf895n55PFtULfQ37sNJaQSsnfGugxXVFnCnCfR3oki",
  "key27": "259AMy7cNY3X1QfnLcw1EqJP9eXeR9rRK7Q1zw8KFQdWQxLpLe3m1AMrBDiRadBmFnrHHjQv7Cpp5xn2qT81AZik",
  "key28": "dpZQmEnN2aeXyxRu7wGFDvuVeZew8J9zgMMsjTo9FBF2yaq5Y865tUb1WfcfFT2M7WKci9S2rYEDmrjfXGQpL6a",
  "key29": "2JLsofgeXnrEs9yys2sZfVQrJGnQyBKdecXi1asyZcQtEJcaq2cV5WHpYwzBfhpfKL7PdodNrvHJx7nGjqxGSKRX"
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
