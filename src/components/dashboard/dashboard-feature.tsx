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
    "3hNNdcwefa6Xwqs3Z8cwoFrwzthKB155enqsF2KUVuJaWujM4UDrMisuZHL2Mksk6JfjcxgmF9zMLq6aEim8UAx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovbyLKgTnxunmK576K692DDYHihzgL2PzzGsp12RwLpiZmsa5117xXBASZ8jEsqmiFwCMN6u2hDsAVdaj41gdLi",
  "key1": "K4Jg6sZLUM19MtiaphWuacDxpkykQ9S95wAUx9HXSop4oy89PY5o8HxD5UFQYCdrb6XWHvWpFz6F97GaLZ1rKfK",
  "key2": "5aJTi3xu7FPuMWW18jcFm55WjxJo47AqaQuFnfdz1UEuDnwU4owSjmks5Wqyh1qKZKdiMvcxrycqa7N9xM9e9cpf",
  "key3": "4XJCnjsjwyCmA5Mi7jY9PzDSCedMkZJ7e3qgTrNpvwnohT4B4AGCjVq2cM4pCZzkdBiZeyF7uPYLbgt1ymAuNN9h",
  "key4": "67PjtMtQgmfHcjhc8JHyYqGanDQopUupLp7LTvuUYziGpti7GmWu97TUkCGZREiB9imgz7wovCeDwRe7T9a8FBku",
  "key5": "49f6W7ojQaQ5BZYTitvturiUGWqou2UShjsmBmzddTz1AAB4mwc2kqoesHNxPeYTNfQhKoRfq4SVnJ2zsv8w4UPw",
  "key6": "4eGk1Uy8MrBLqFufuZGMoUNon2r2juBSuPuCZLw8PFhNNHKLHRKmbeQ8wH4czuq2HdMzfowcaeb9erkjNyWqsZp5",
  "key7": "3dVPvuM5oGptAiqbB6JSgNEpwtfvAHZiJej6uFmeBwiDKkZ2fUxPL66dT3p14Kz31xr88eqAZPTpdFzAZkznNrjD",
  "key8": "3n7CAZ42CRpSGqrA2JHiRFaTnVGnM39NgNvbYNdsk67ZrzUisRebu17nNioecJESTaiWhq7YnjtMieat9UjaqMVK",
  "key9": "3QGVquLn3qZWnvtSKh46qB6VEpfQnNvzGVu2pebYgB4ntpavUxbmiJifsCz36kSiVhDBA4Gn7bfmh3rzGKSV2KYd",
  "key10": "2Yxr8d9aJTCq6Du3PdRcvxEzSaWqAwhBYAcayavAgRKvxMXXgNWgXjhGSi8A6Njz4Wvm78mMuYDC3W5J8vCgK7H9",
  "key11": "5wPFxz2gzUgaeNtsF1UCgMdt5BGRF6F6VZCkHausQpixNm2tzNVfigTZt9os6sRxDvCihmCZeFdby7XcLKHePpFn",
  "key12": "3EugwD2tBCajurNgA6zxbQT7nKMQtkySCcc1v3cUdze79b8PguCxijAjhCHUkm6rbrLd9KmCaMNDsWb8PqtZkr4s",
  "key13": "2ovAU8rMzRenYknL8gsGRJNawgJ6oGaWdnSteoM1EqAwvNd738gV7rxo7i5jah7GamegMA5VBxjfTCYcHTWbhD4Z",
  "key14": "5QvW6TUxVXSHBQBQ2mAZhWXQLUM6tngRdwdfScLPR1v7impubmKebPHf77YD4fdBUTxKq2o6zXYoRYaEEaPi4dFy",
  "key15": "2YQjaNnDVf4BMc9NrjwpSdhNf7Po3KzUDhPAPCMizMri8YmeKW5Lu7BQsrSDkMXK1zJ7W9ysJHmXadZnvX7Edapv",
  "key16": "2xPVzFooYpBu5YiyoMAmLCrem8m8xvcASBiBYr8X91prPTiftDvQcTnmsZU1Byhosiu8xfuWTaiHwjPb9qp1x18Z",
  "key17": "67jFKA4rTTfEXf2vs1V6knk1w9vPr33zkd4LRUkjQWvMaFSk8H5Wis5tgZVP6nnD5cC2rk9rLQpV8AhkrU476cvv",
  "key18": "4mfFww4nmo7GpM9CcJBzP7HXNscFavGHpS9UJiiHemoFABNoqDnNTtCbvoChWSRLKCNK8Hvd7A2k1HZkVfD3qK1m",
  "key19": "5iwEcGWgF3ptkB1fTDv2qE6oUh2a1rBKGeVk5VT3vjxBHBjcVKE4zXZZWhxd6CTht1ikoWYBTDdCuzyUezW9pvFF",
  "key20": "4BtXw7pGQ545hnBz7XhL8zNsnWkxEMqAyAVjfuSHVpmsd6CKscSph4F5tzMkPSkBq8ZrLKAPgFZcEajoJ2bZGZ6z",
  "key21": "5sbmeGc3jCq2dUFJLCPiGQmjbRBjqgCSyYVA1bWPRg4Rkm9E2GpBAuZXmEqFURHNUSPMbNQubAKmPM5g1soHcmUH",
  "key22": "4bAhKq5Kdhq7Ft6EJsPEysrvL8LAa2pc4pRXTx4DZd6A4J7wamF6mG4VZSSg7pDKCju9Fgt7BCaZMFB6BFcg5yLq",
  "key23": "2Xfvtu4ufi3xhyfoLbvmnSaKvQ8UEQZc9fko8szj7MhVXCKWjDyYiLxKEq2Pc8kcVZD4z19uHrCayfnvjLzDmRpq",
  "key24": "2HdwXnAH7Jcuwewcfq4Q6vbSaxxk71wkjEBDvCQSvxLJVBYA6kHqmcTMFwCvMZQxjNDB7ZSGYAns6B5WYCtCtzKc",
  "key25": "NKFmD84xs7soBeFy5svqZPTBtFTDy5Vw9xMNVrnwqqK44uWGqrwPpEYHAJoiDGsuTtTBB7UU9FWz3BgS7o2Q5jv",
  "key26": "vuvRneSHXDPyg5QUJXTqFE1C8SY8XD5L9MMjfY6zZ42zCKbR75CmM4Y2arHfLVuX1e85Gz1rrYjHRuZEPCTir6R",
  "key27": "2KEDfoPmgM8UMvkGWXT3PK6UNGHcEBShj5Nk1zs51jYTtoN8ZetyvTG7upfX9eTgeipyforfJBAJct2h1i4d4Mgs",
  "key28": "2bUJ2LiHQF1mkE6gj9MJzdYN1DR6Y6GqHamNow4FuJ6hESToojxNMWwGVZiFjT3qgxN2NqfBgcsgjCU6y22gzfFB",
  "key29": "3ns9B52TpZTRpGbYJhxTqfcnMJWnE5rBDZZ41puNnvv4QnFJPhH8kp7xEkpAn5dkDk3pZL6odhbND3CCEas233vJ",
  "key30": "34vxtGhkzLbiCSDoXbxpyR1CyDX62rzxbCFY8N7hRD4eFnLcjcq6hCbor9LUb1Lkkcfdm4g8Kq7KbW9afsm1jD4u",
  "key31": "4QGxqfnc9UUPA3o3af28QMhvHXwLmBYV3WZ38VD1VWWoUpPV5wtHfdqtX3xX2KnRvRhLtbjwSYorRhWYoVa2yu2h",
  "key32": "4UQg3iVDFhnGmy8ruF4yfLvhCVH8ZAmDBedgswP2dgnfhmLJxF8DJbrY9HRtLkD5wU2oQrztrUy3yoeYaZsDaxjW",
  "key33": "EsoX9haycHC3bSD76LHnF7472rzKNQH7zDvtP76dQXaNvGwL8yYqzhv2Y2apbCsZ9bhJt1Fg42FRFFsDbJ94BUV",
  "key34": "3ebzAYpKY6c8YBwwe8WGhLpDAm3n6pej1J4bgXZkYeAEytVccHt3fmNZ5cMF2TX8WaiwzwGNLVCw3LRaiKbLsYus",
  "key35": "4eWHUJPwwRKACmGHbgUTq9rgQJd7rpbwbrpHQRLNBAzEm226WAwm7tKpN23EA7ujqwJzLhV3BLkp1umidMxCin4k"
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
