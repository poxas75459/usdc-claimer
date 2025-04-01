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
    "2X6yxkVzYy2TQQPwiKPkqz9P5mQyGvjpS5TRNBmyR49XKxJQ5HoNAzf6bbRizg8LZpccGx6SBcUzcwnC5QdVbRHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PiRTerdH8T5tdxWFTwx9Ji8kYywsjcwiA1kdfbwrapiT3yheUnUjjuV8btsT4NZjkCY35vtxBV7UMcBqGaQoTaK",
  "key1": "4svM7Tpm2rs5HihD8Nb1fn1pa1fp4CFHvanJBmF4z2cTvxYoxM3cmRtXRXsxBt7VEadGHKovcTfa4zg13tyy9LBM",
  "key2": "2vSnJyLYWvTPyeadV5jMjPEqJ64YGvpxGutuZm2FoWYpKsaB91aMA2pmpYSHkxkKHAUXmXmSYsxUZvnDhALnTM1G",
  "key3": "rBKZUSNqsJ14UcQPCWbK3ZpTF42hCA8BoDNdDtTqGmhj4DV7rJC1rUMYMYQ51xWQhrNGYn97UmVacGGKaQoucFn",
  "key4": "gzHoynNuC6hAJEtXWbKfnvvjf4pRZAS8nv11hUie94QEkAPQKEvu8YKn62kCrY5NM6d6gWYANfqtghYXjWim748",
  "key5": "386SJC3vWfPmEnaS6NzKQFeQn3P5urb7hE974snjTpo9qGjtrDw9uHYH8L5F98JduyoTowksRFnoFETz3bgy7di4",
  "key6": "4KCCJVsP9cN9NxtSjYecACFTGnr4BtYxuEAucWeJMhjzziZ4HXW8xDBzGCNejnGFqc9MeXHx1TGwEQmuZHACVTg7",
  "key7": "4S2gn7rguYnKSSCopANLxnJXAPbDApnUeBPwnxt9Hqs4pssSENBHpzVZvPyuBwZXYVHHug1aJ5GQx5qvfUvg7SLt",
  "key8": "XHBQAaG25UQEqrxZdnBYAAh3gNMeSLSNuMZyiWYBVNWFFuEnDqRDC5jQ2v1pvvt3jjH4xbjjiJVE8aLsYQAz3n6",
  "key9": "43Cq8NXfHpqiCNdq72G6MSRsDMGTWS4YnJaT9qU6cXiBVKqy1j6MD7Acn9kVQFkxKu6DTJzyvkZLVLcXUbaTbmgp",
  "key10": "aVGNdB9EnScwxeDPMLdkTSGuakT67DU4uyKE5ujWMB4STLyZQJGwDvoBgJ8tAvgvJGzVW8bEdzixpi4vYx9ANGf",
  "key11": "2FvKXu3be5DFQyzs89B1atU7VzpeGMZ9piPyjT5CB44PFHasXSESoUPBDDHnzMNbDVsN7f7atKBGLZza4YXjCmmh",
  "key12": "kGiPyfyuVKEFp8uuZaTGr8PnzQQEt6UnJ99KNahRs5jFSkgeBJXWnsBasfpRRjvCPVzLfMSxnA5AxB1phJbopxR",
  "key13": "4tEfYX7xF3brahKMg73L8WtmnnejnvGhvNKdbEvLuNZBw1kmrzzLt4VFdKwjQpRhbVwgoupuCH4hffudjPxDT4NT",
  "key14": "4P9bWxcaA9i1MPY2yMPwU6dUqsk4EpkuTDygEPfhkJ3esM4CvAY8ESLJ6V88kZhGpQqvjqZYHVfbDM4qNu2HDZ1h",
  "key15": "4ZPYJC4fiuVwDh4X78ZjKZ5jdwM3CnkzxqgwE51Ln395wR4rXnGp6wQUm2yCSyntSZS16MMQiwKb9bn4cidFQg7",
  "key16": "MNJEieQJKQQvfnuM9WQfmbfiVhAdKvJiiYg7R4ieJzKEaaPf6o5AUUFm6JfUfx1xfVSt6Cqusx5JzEopnAeRbZR",
  "key17": "Yt6HTTmXn1wQzLaRCqMGPmFYhSeVgxjYPdYJ4Qi1V7eGUkFZNCktbjTK5QDDjgQitzRQCnZjLdwje8nhV7krGzS",
  "key18": "2S5SvcPmXg25txrgom9iPJ8p9NpWDsE2T879z4t9XaE4x2uiT2mBdkz8rDB5Tv4d2B9ekm1eJcZzm6nsSLLxDqTn",
  "key19": "4hDNKzzH9nAQvkGWkfdQ9WaoQxgLjJ8vi1heYMiBCAeqQZmg482kftiphgi12U9VRQL4k1K9ay9LRzBxUTA5DuQ4",
  "key20": "4RHrxcbcEk5Vem9ZbDwtqVTsZUJKCtJoKYGrenALJ4UwNgAhGmGdirQWqWHog8suCp8PZooYDKghVzPSo3yHtXkq",
  "key21": "3LWuMcir35dkEPaTYomPzvqGs8o4XHvCVz9p3mjnc7VSLgXtMXNxMeixgNKJgQUxU3qtqb3ytzyEgXJsqqEwC6K3",
  "key22": "5waZQKEHCBbwfUPLVjeJ2PB9aoMTdb55D73ei6QWF4vFGYnnJD8ozZ7bULME9YAaKj8LrZrhbWVD6Nyuv2B2yWa6",
  "key23": "52HH7v1SVHsdjv9emadVaCzX69NLDpGuUagtarSc6tCJFA27PJrXx74HNJY5VAAmqW2ybEV1Ehq6gdRvMMgxYxG4",
  "key24": "2qwhYd744yuRn5o8t4yLHEdoeZsfvCKkth1Cd61MBnr5q5gm3xcMfqLyU69iqPFcb4NbS3U9SC3KX8fJam9nL5un",
  "key25": "3zZErFWbFyfMyKghgWBtajvDyqXCAj96SRWNcDVpFXxuBQ4suWeFXzBmZmgErJPEJBiJiJJYjNvuLQYH3tDHgbER",
  "key26": "5tJWTcsSoobjRX3847wCPdxxp67PNPYAkdW6yVy9oBBz74TX2cQ7KfVMokECcW952uSqYVTdTSdk9k2on2xrJeea",
  "key27": "2zbWZRSHrra3NQwuTy2JErifEi6eN6Qgb1aKnPwCR1T4pYF1nPciZoNbpamQMhQzEubK3FzJox5z49Z93NhnouPp",
  "key28": "3HZqiDzJpUfH8pztJSWVaoYbQoxnpE11iXfpvz1g1iUageJqSejCahfLHiiUV54kFDakVRBCDmuCyTvYdhSBf2iG",
  "key29": "65V5WCohnAzcwneaBN4HmXcDcxFWcgJYYzZk5xbV9oC734vjrDaoVRbDZ69Xv14b5GFcGNqVd5DQx2y7ufSYKU4n",
  "key30": "5yPpfkTmU8bJSkJqJRWLMTcuKPboBJKKKtNopBM4casfX4FAs1u1DPTBbrPdKD2KbcnW1nG1JcbSQm73Qb5jj8bg",
  "key31": "3whGyrxYpHxUsDtJn56ra2XkXyFqt4ZfGk2B7ANpTd1VAGr61XNR63DBEAAU4WQ8PGxXRGJszYD42w796B1YzdUC",
  "key32": "2cJbC2jpfRYMih9M1Gstw7A2au3usc9aobyvvP6YarX4hWFS7Wim5DfUgXxtezGNgz8V8xwcVc4DFb8GMFAxq3KJ",
  "key33": "A8Q8KEYEKWqZ4ki9VfTzM4mEV9Kv5sHEUN24gQQNqtwoeHg67Dxg69hUxzVhMkT8UoJKbdtbHmY53gZtfxPNvU7",
  "key34": "ZSJdVzL5NB1iWdJuUKQStBKeFGCYe85ALhPDJBkmn86fR3RuBnEdS31prAjSmF1Us2YaJHFJZx9gRCGvemRDdDc",
  "key35": "38hCnAAPT9kWx9QSApkZkusRLoT6SnXqAPsyqBw3Xtb7adEDDhSMBz9AZBbFx8jU41ueiCZkpHENX3VX1ifQakiM",
  "key36": "owk736UFzLhqVWaHqXfG9hhT8QRF6Nm6meVPRuRMcCZQusK8A6HwN5W7Zj3iakh7szbVYtac3GV7Y6xarpiMfWY",
  "key37": "ryn1DH4s63fFPBj5bb99pwy12YkcVdA4rhqaih5dk4PHUwF9AFFJ4mjTjmgfoECXYrJtZFxLTmHRhBmZn4DP9Qb",
  "key38": "4TniTCc8EVP5zF4xLC79GZVSuApzokihnuytqEumKFz79kWteNHk5vX43pkcaNYoAJRroTxztjYn6yFGwFAFvrXB",
  "key39": "57fzqaJg6ZhDZC5cUghJyvjApLGBqfTdFLbRmWCXYpuhRvZVrTb4JCX4oTtG3eugF9qhLDvuTMsC8bhhVcEyaXeB",
  "key40": "5ZtnrAafBShkmdyEY8JUpjCRWT55RMwNhdvyhSsq8Uhdiq1F9aJxfyjqfSEkDvPNTJ5pmnJPUyttZHeA8UJF9MKx",
  "key41": "2sTkDGz5vTgw4MxRNixVaTVES1L8brZzQxLJyepnC3WJedCAJMaP7aAXejeUw1uG5ocnKLSeBfiVvni9SSYA2Grv",
  "key42": "4A5DibjqER9QCsxPXkWRgxZoF4DWXgEmDR4APSa3M684nUuxWe1zPzedkdpiGooAZK26VUxGipqCoCPC2FBNjbZa",
  "key43": "3B3qLuRy49w9YkgwMnFv5sdW9SpYLW3xWTu8MfFf9NGgNVDUrWYC6Bfvb54knvKDKJ548RDwfMfJS1B5nVrTXvqG",
  "key44": "5y6r86UYnC7SfNmdyGfMe6UhhGXu3AEtFBfA4utYm9abXzEXXNWLL7Lxn8D5xyC3UjTfvtvGnYZ57ScEQLDEf12",
  "key45": "2r5HMT4Y5TmCe5ycU2ErBx1r7ANjJ51Ac792jcDJDY3H4BLN8wCxC93JDqmbwF5SgfgRKjSxEJW8sbQtoQqQ7xzT",
  "key46": "2M6dDUkKGoJwMrZQi8dPZqYEnCUkPr63VXmC7XvSdFbzprfRrNDAyo62zPDwvWWmkCnAARYytoUVvfcCq5Api882",
  "key47": "3Xm4A4UMr2cLawNcLgRkonVMoeWxevupnCphKkPyWZszSwAb2GdGiU9z9hzfYYBBm9fzDeCC83CB9NJqZGumS6P2",
  "key48": "yFumZRELvKLBWVetjN748VJAgTiu5ZMysdkeMeSFwwUMPMQdvJHQY7RwuYpSQHDqBfpPLPMMhfSeNLuDSXEnZCd",
  "key49": "3s85qqdFURT1a33n8MiUNGkWm8aJ6Joz8pwZsqgfXYtqMDKdsFR1UMmbCyJG4VAKneQLcWia2LLtryq3hzmaZVYh"
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
