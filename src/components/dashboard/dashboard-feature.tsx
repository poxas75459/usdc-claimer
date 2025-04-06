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
    "5nVvfwTobuMK7miNn7xWJKESgVCdU3VA3fSmWAXAX9JL3dJzNFahNCgNzkTkxsV9K4MGFoUhKtwd8Q6iK5MGmZcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yY7MwCU3EDqhbGhEoAHvsWhM38QoQnEih9NuUKVstG7gtTrgroppdVhXhyQkdh1ZKGdirBQBr8iNgoFnyRPpeh5",
  "key1": "4Pbp6LmyLsvqs2Dsk9pwMYkM22CzFpQVwBhg7mSS67czj9FF5UMqj6wFPRcm39DUJXvrZErMwonrYDzJKf7wHoWF",
  "key2": "4cKDUMaXwywKqvrtT7LGGmdNKPyySHswNw5bEE1nn8a5okNeMPj7g97RR8YhtYZc5NJr8ExNggFHS3MpKThTs7Fg",
  "key3": "2sb94dRFing7TZ3jfAhk61DgdMh8pCS2dPqN2MJkV44TBkCyJw5fNCYP93C6CQBkdfyadyEd5mChtKaR7fAc3xuM",
  "key4": "55fC8fLetFJ6YcV2EGPriR5svvccHngiwoueDrJBwGK5dQGRhktYSxSCHvqqciYwao6rt9nJ7H9GSq4JeRa2EjXQ",
  "key5": "215b32EgYaEtPfzgmSqdpeEvbG3wvk42XbnhmHtg9rVxJkwn8CXdyhibXYrN7MPxuukNLSRvrSPMVdbYpnspknx4",
  "key6": "2dywDyCdNXBmJfm1Hwo2wRBfmb8Xt3pHgdK4HEnqiKekZzxEzqVeit4wJY8ufS1VNZnPwLMRXHZRfrRwoShLW87v",
  "key7": "2b9Kfz9yVzeQAccmxTLruAXWN9rtoZEiu1CNQkYFxwpx2UiGcjNz3ma7tcBbsSKuMAavCrLMVVQQxNJ7tqWXvFSE",
  "key8": "3xdYQxXUhDiWjomD1FMRej4P8jEAX7hKt9PRWNNtRnPpDUtcjyazVZHqawJBeucEWabqk1EWv7yj7mg5kFhk32UA",
  "key9": "2hkSrZBwJRw6H7YY5hncwSjNjwu6dAFDrJHFfSAFpYdEd2D2miYMtjzQiKDLCW1Vey7CapGQVB3iWCzgq4RFGbSx",
  "key10": "5Y1CKhHTsAANTrPhTTfXA1VoCzN8eeVs5JUruTaJrLDTQTnojPjRN9kn8hazHYJZGZg8ghytPANjjvM92oY6XFoJ",
  "key11": "2np96eqwJiZEbALo1nPW7YLZysh1PTnfRGDRXpCpjozUdjGGNuvtVSDAYY44mq468GMMdNNLZF1nGEHwYznqvQJf",
  "key12": "4b5h1uiZR7zYVWyNWwhSstCcSomuMDUyS1KQMPHwpJGGgijP4ktbWyrT8pTrDUcaooRTmfh2BW2ZwrFwJLAjpWS7",
  "key13": "4J3axjSqaJn1B2B4GNx4pT462LNZnpDDC2YFcUwQZhfNrQhabwM3RibZSUgEgqqHxLfdaUPPovP3ep4rTPz6w5oi",
  "key14": "5CXNu6fNo359WmwbzH1dabmB5kDK2mkA3QTVcVGiAKN3quVbUcxEHE3Nrrf9EPcAuNZexUWVEUUCQbcMLwdQJTs8",
  "key15": "22L4MRXWDinX51RWsM1qBfDAmrCTBc4wj2oMmEyRfHiWk14ktWUgn5rBHTLqwoSeczQKetnCiff4C3odhBbukLBe",
  "key16": "3izFd4bj9tMKywuNuvSCDGHNnEUQ5i3FEqHzzJV29Hc46TTjsQEHw6WXomgf5JEZmo7Xc6dtbxB19aFTcCm6oaLa",
  "key17": "CDzxwe7pPYJjRSBd51ZKBnVzQ4qfDm4XMUG8C2GiuGbN8xpAcsQ2HQfKB3tAv3UbA71scrfbEwnFSQDLYfefhdg",
  "key18": "2y5qDzbyX7VxrKnc1K1tFkffyPKWvCiNnhppBHf5YFSb7L5SetzFFt6d2uSFAR6eVQYgrcnBRW3nN9w3Vtcuhauc",
  "key19": "65irQ3MvKzBv39QqogG2JTSd5aU9oUYBPPsEP6Dh8xWMwxaJnWb8QHKyzxBB1QPdXuZqvpQ2ysQw93JhX9dFCm7",
  "key20": "3LJecuujbjwrRyYs9ebMsAiCe4DmHQXM1v4amXFrf771riz4krCdLeVUAwXU3e6mmf8i4aCK7PsGGmzkcVDiuMpi",
  "key21": "MAycxo6AyZo3xq7RhhGJUD1xq5Eahoz7jzr9nJaK96TbKh8VfpfeoiwwUtWRhTm8BvC66fKaqFxwQm8Ck7r5sT8",
  "key22": "5a1AXUbwxNm7VLL2SF7CE17qdK8Wxfzc5HbuNgm1BW1rXaAUjreCtUPHA4XY4vrfXXURDqhnziTRxsUQYr8MhcsK",
  "key23": "HYKa9hu8d5SeD6faux9TNtHX1ZYfpeNsQ6PJNijCoss4w8AyPTqy23nGHJc14jCXp4bfqwzkzAsmoiS6iAzKpJ5",
  "key24": "QYTeP5K24jifkyzwq6DaT1bEUZ58iSigM5Z4rgNesyqSJ2Vqq6K3bYMED7rMA6VBuvPoBqPomSZ4JjDaawot24M",
  "key25": "2fVFh4r8jwXeDM2gJJwwpPtfWKGFf7Y2nATsbAR8FoxNnDNRNjsgRdndTqYFmxwWg2xEb1S9bzcyTeJ7RGkW43Fy",
  "key26": "3Tws7vPZiuxGZNxfyZ6j9FTH8zJXRJaUUuycTPcdnn9ScXeD78h62pfTzKJekg5HqpVPtCT1SGViEWbPXxnXf5z5",
  "key27": "3XZLTaUFpKj5oBJJirbmBdUwB7RiWCPMigPXM8XTk7VWggCY5CLNWgxkw4DYmYPzGycLTBLTf5DzySkGTxKfG7ZB",
  "key28": "45oxEYGhvT1YJXXjL819fr7k4edyH3z6xVDEFsHLMCJb7KrDJvSJ8iGy43Nptj3PwkC7DePFhDHBxHRMVPwbzPUU",
  "key29": "28d13HsKTURguQpS2uHReVjGWykNg7NKMH8bs6DmwME9edAeJc4oL1XPDVcs9kKa67Kho1r1ZBFzkBHqhrdKpi4b",
  "key30": "3qYNZahPWuAGAXbL4tZyVQBQo33YYMD47hpEt4b9iaScsqVm3VzKsUK6EBtKiX7rdsdhnXF6Ys6TaHaFPZZzLcqs",
  "key31": "q4Sa2x6emx2teAPSqDqZvgj5AwK4hSFNEvdn2tHfGF6XcvagkRKh7KkgduyPGR3RLY6sPoTs2N93aBu7G23fSGU",
  "key32": "3UyEcPTbe17XbuGhUZUeBcWExSd918ShpGt4vrnMvTC6Sv8VZTVhCq93ct9wXhRLkgfRo4MpxD7DZDMxvQwLTniB"
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
