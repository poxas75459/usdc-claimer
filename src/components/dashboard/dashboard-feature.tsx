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
    "3LbT4C8U8Z7k78rxxhtcnjZzM1c8oQqHkgiYcheTYz5DGdhbdLpgMc8fiQaLZ6JyNCrVDoge1svNymtPnk6Dp9sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwKb7ZqXKUB5qbMBzp9DkEA7yLW8ECbLSDxyVL4pGvg6ZaY5zvMZReGgB5F9yadP5EUbYGBnFHa4n7v6r1U6Ju4",
  "key1": "q5uqySzCEgyUdoff6Wesd6QqEgyiG16HpAwNxMdwRrjxRhVsJPb3U3ELeXbjeQwobLTekPtzXwuxwnuGPZ4DsJR",
  "key2": "41CUYV5zA6GwFTgKqATe7qkuWLqzCbFV4pL94sbYy1g3Zdo1e9wTViupYxrEnHhUrLjjoqG6keJ7DrinCt3rxQkx",
  "key3": "4ue4PophncD2Lft9fAPi74zWTdn57maabf3dmhH8dCCRFgQauSE9pry6pxjHN4gawrkrYJp2ChZCAdPjyUwa1pFG",
  "key4": "Tp7RANef6ecyHcVCGKYLHs55gn8G4EU7dN1Le3NgKAHb84zHVMvZMtWFf8LFH6LxJao47UGxwTmRzSfnnUKnnZn",
  "key5": "54zsQBsxKviiVvrjo2uKtXKm8SKzQAhCiYoQ3DaY9bv2VENCv4ymS8zbDShazRadB2yRm5SALZr7a5aPHJ1FJA4e",
  "key6": "4eyyHaRqgSVspCEdmwBS9Y3iSQDtnVj7BTu2kTqSTayf4Ysc1oYaY6XQTuacrqVQC2VZLutdoi39U8p2md8JAc1z",
  "key7": "3a33DbJqm5X7GMRgc9PsDiE62wTnFbNMpRj5vU8LgFJoKKbfNcL16D7UE1jgEERUuCu2EA4EuLfMqTz2QzMHnNny",
  "key8": "5GvVX1NQkBzNH7HkRGsiEsxooGAEstrYVvznsRFB6tWDGDRjj5z8o3ANZpJdWmDDys427ucdiaS3gQJRiN1d1pTF",
  "key9": "3axJbFTcF1dMGkDAHeKGE7zsmKBih6VFka61dhsUZ61KNFAzg7Yh4DCoYrJ2HCK8SqFmQ116vceXnQehMZv3Qtwi",
  "key10": "5bcYSyFxQ2YtPu6wEwEPBcJSPFJVNKX58gsVZGdsCwKnxsqAyqK7yJw6CXV7epZC77b4HsXxy7demUuMiydKwvzP",
  "key11": "28Bgpehe2q1KpHncp2PLY7xL4uRCaKQKHrVSDGuEqV1XwexGaYcod3XKRWPhv6HP63b63BzYQSoTPn7XWzZTH3Uz",
  "key12": "3wNgCFLCTk6sDQBvaFffZSe6QZKVMQ9ZCZzp9GMGGEGJuNQvR8CHeQSpLaVKdJ83xQSxSZ8R4v3iKs6bQoqhHxcy",
  "key13": "5LkhB7v749MZPVm83dHe8YFXMcRRFxhg7pabZc15NPTHyuQHjoLnWUa2FNiA4jeS8PoidkLmfjUR2S3cb9bsKKnS",
  "key14": "3oBt8QFKidNj3fEbt2z8EKwrCzgsYQxizJS3W7TxbgiAE4gkfK3eC2P4PRKyj8dFrCrgupMc81KT6d99TaDRvte5",
  "key15": "3nRmYJEib5V2EbUihRyBaEQaGAh2QQQkSG6Zf6hnoK3WhN96qG6PPffSP5M2kw5DNhwGWZ1qPgcGBqA286ogSNmY",
  "key16": "5vd97FuJZynNLDrWDMfhMCB6B6DNhhxjBdV4TEVw7yRgCfFR2ZfQGUCWfYaU47EYNHJaFECmvYiFx9iBGVyXz7mQ",
  "key17": "3xSSoeBALDKHyQ3y9owyv16yiijhTxCGG3u52ubomGRVGee2vEdcoddY99cS15FA5nv4nwE4eRkQ5Z6werunywzP",
  "key18": "5ij2wiwsYZdkGCE916sMtr4vRudY9dhaanye7sAK2M5ZAoLQ9yMqo64LGuBg3oZmManUFy45ZKKKSEgiLF1A132G",
  "key19": "5ZMBhNRcDJURp4HTVwgGNakNMose7MrTkURADgyEzgxXzvXwZcwbYJyfYNEMVcUK2CkMKxftHUiTU7VtgCTGJbRm",
  "key20": "43oER4LSwzUKzU3vUYdbrEmcduzJjPHAzHyzXcndECHv1wDbggVB9SW3r9e4SVTDbLB7VMz2TJwPfLkLnt2yQCZ8",
  "key21": "2muLG9iWLzzVTup36otUW4aWoKaMv8G9ApufvzMo7gFnpofT5Nppw19UUmiy8tXtkDddSodEV1DyNoa1mXW7ZEPc",
  "key22": "44wb8FHoL5bTEKhi2MwzFhzpoSrcuHWEhtD6U2QAS9ZVwsiwrUUUWiDu5U3fDY8vYgemmbYRQntpikjjwTgiyoqV",
  "key23": "9K1rQkfh8e4G8dixWyn8tbCdq5nHnNm5i3rCsoL3qDFHmGG3YMkq3uiuNBoNNTJg9jfnSrLa991oMKskGjbm3jc",
  "key24": "26rWnUPd2ELpL7EamWiXuZRrLJd3iguqX3v83XxRekaVtjExm6xiVXFwGZiPWa7RMxY82GRA4ULAbSuFyHHbazfz",
  "key25": "5YJWKkciKABQ2asUXJLC24N77dXdNHpE8rH7Tf6vG9o1E5hD9Ju4Hz1X3YfrPiiQ3WxWCZbr1ZH7dAEFPQQWm2cq",
  "key26": "3khS2UucheRTLNLbReU4VfMkBmEJxWYYYbqFK1FgkxPD7F4mDo3KsfMyssZ48kvki9vfztpEkh6BaapMadhsSGB6",
  "key27": "4VUJYiGLbLQKJi9BZi1fMB1zogtCAqzvYHv62zyweW2gL6NDF2dGyPzfKAPHZ8GEKJWkb6HXz8pZQvRUuvs7tWKB",
  "key28": "2uQuguKbJEZP1XjRwj4DiENY17WSMmWrECqMbPD1wEQ67LYCdZE3UVFxBA7L4kYQMuAedCSU3vR9othKYJyJkmDg",
  "key29": "GtCyZXBKgqhsjFbFDjS88ThNHwGnzmX2v6hDF3AMTQUTLGdx6ExopHnZoks6eDr7LyTvoAuPSLjU59L86FZ9CKq"
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
