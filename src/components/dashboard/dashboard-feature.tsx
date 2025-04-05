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
    "3SP46MWMquZ8d3suotN8oSuyXDAh8bNwXjNNeGUzYPzKnS46mQ5gw22TDcmEKh22HDzpkUPMxEyWgWXqyaNA7xS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GArxLrZSrf5tovT19b8VcnmRExrVrHqPpsrQrUwxiQPSwgxx1whZUeSfTZXG5jhEJ6vrqS5r3m5QfGknbCPAUWt",
  "key1": "47SmYcBJSs5ypxAtBuEHjidJe917e9e4iu8Edi4UXw9mE99oFZZ6R94TzrXgZB75HsqRW8NXkrKdduUZPiQUGyR9",
  "key2": "5dfQcKe2ees4Ux6U76Ypa8gYqEG6XEgxycVbvGsMKUkVD8kDeLJ5Ehmv7epTkgPeP6oX7dVJ55N9W8fzB39orw2c",
  "key3": "4ETjF2bz9ERaqafoznN1woqtU32ZuXUmFQNaPgGfqqodHK8ZVNYkEydU3agKaQQXjwJFfYBhRov8JQWCzyoMuiKZ",
  "key4": "35GyYuNNMYkGB8WhMEjkkGzbUkYCqtc6RuT5szzbf9PnHE5wRBnQSA7YoExAr1dk9XpsztWXBJ5u7iiAQtUbuX5D",
  "key5": "56R8nJobkbYhFU9PcweX8dWJprur6MaRmDDn6bbbP6uNffoKqYdBUdkKh7Htt1ZsU3gCJtHkmJWcLiefQnLTMh3j",
  "key6": "3dPYkK5h39rLmw1S7C94URVZ6C21nSPuHPw6mK1zX1LsoeeeXp4AuRL8xgbsdCVKWoWjpqfZsSRAty4DBqL7Dbp4",
  "key7": "3ZrCb6zS37rrFajXxLWi15XybYwfiHdTbVkMNQ1nCsLnu82zJjNiuH5M57YDCMqyCY9y2agtm1yZg5pawctGSrUQ",
  "key8": "3tGab3v4NM4meZYBCvozoEpiAqcabJDdcf2kZV5C4bKJVnahgf8AJWJ9pWhfk6rauQAN82maebCkuQnhWbPugRmz",
  "key9": "5HYUzaKpdxypLUmK8CtWxbt7BkDEZ16G3ZrFEVo1hPxVY1T28ovfZaAvFY3Jm9izwfzRi5YApUJRfWuNy9exdj45",
  "key10": "vYsQtM4c9vFzAmigPWU2Cnzm7bCkyaVa8BYjwd7wmFvSzPiBGDcrBWpxwESUamg3fCbpMhKCocpSB6YG38bNRyT",
  "key11": "4G3XBP3ZhgdsYGWgTR8cY6tF4nQssfVpEHU1ZD1XQR84c854QvcnXJkXaZ3vSB9UZSLSot86kwb27dsm3rZkW2s6",
  "key12": "3rmvC9NUrnfVNmPdANrDZQgshybWTNdnrJpSygkSqdnedMedswVeqxvPzuzVKZfVVWWFMLv75iAuYXAhZNEKc1cv",
  "key13": "3vTWa15S55jPnPU4hNLVDZikj6c3uHWjTHMVM8UJGaEumZCut2Nb9PB8yS9UKjkxGNAY35FpSx2XJRuBFG57WQmS",
  "key14": "NMqxvg2Db9nZHQfcQCqFNMqk5BbaB5WsWjKmAQYFa2j4dgkuopge8GQSFnzrqojgPiZxofqJHazGKoJXBBuso85",
  "key15": "3oYcyb3RMp8hsLsfZPQSnbuh9y7oxTSghF3vUeuuiAZQL2Dvq323Ad6R9gkjsnPJRyGrDaSKKy12LvXytY3138o6",
  "key16": "29Mxvvm8oMWN5FcVjxHTEZiy2iskiVLwurWETygVXtkNFe32x7GFWTmDgRRZdAqzayoXtJX9xZA9HdSCBKq48AQS",
  "key17": "4bAtykt3YSUKepfX8PF1SbEEm3CXbxWEwE3EmPZogUToyNJYeurwtQRz9kVWz3baE4wpEyXjADAsJSAU658CQA5C",
  "key18": "4chCqowLvFuNqDpeZ4obj19hsrrCsaDyPa6gbosJKQGP6hGmREcKAVN7YJ7ej7jf4HoYaxsnDJBaAB1zKiUKBvgS",
  "key19": "23TBUeZNqVssEYdctvURNYhB5K1QnL1q62qbgHsqFU46CbPAmjzSSBecrUcz1cqqixx6y7LzMHKjuXsDv1BwqnEr",
  "key20": "3ew8EJ8zADMvrWFDXxMvAxeKguU3qFjaEpQH5uQPcrcnM1mvRL9g13G7Fk4iz8J5oKd8PDAwhyQQNNE3XaNmSL8d",
  "key21": "3hWBcvjbntWba73wFEcGLaKT27QH65fMKhnUtDhxm98T5VFBKytzPH3MLVyTWqvD17qREZADeHcVbYATWJ9MywEs",
  "key22": "28NQXESWT9DtsFPQaPCgdgXQZM1SMDCAxGsUpuo7A3aFGvKZrURLnzpWZvxrJbQjP6KtN4mpEqmzsMfWSpDcsCB5",
  "key23": "3cpik8m7SNSeVkHDJk5S6c3DeHN3E2qiBy2houtz9oQigvNJixduNq7vU7gQ4fzV2NcLXcsHMRf3FdZPP4NMTcyX",
  "key24": "4wkXaMiGtedBHv8pWw7jP1YRWeQw4BFbgqDpi6epj9DAkkQCKUmTypB8HNU8CAmqK294PooiwAxf4dJWLuAdperp",
  "key25": "5zx5t2mLnMrHFJNVEtef2duxqQ7wgzrYFtGcUE2ZxK9rPprKfzqCYMqa5nRBmKct62ihCRADFAvYEv2z3QzX13WY"
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
