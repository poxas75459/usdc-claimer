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
    "5DZj2fpek76oW9G6RaNDW9CgY24WYq8iQURUffb6T2zHPBZPby1XeCgyTe6npgBmATeVPY5LC6WtdcaGHRE9d6Au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzeGshfTsY2RwDCqhLEpSDUk9vZXnXyJHZWKVQKDMmiGcD1rFEgC4BgHmBdqmbFGWj1jyhq8nUoT6ud2oQxAitK",
  "key1": "5spMHMv3GNZm6fUYFUq96pTFzHVd4ETY2bSuTxvBKVjvXbcEzduTK8P8wvN16FF2n9yq3iBTCAkCeF1YNRvfrbAb",
  "key2": "4s4EUj9cMYAb5abb28T7QWsS8DNNWREu9TVB9ik1T9wgaUwVTofFh7iABjrXJkkh9Rbpi5ReR2YFPBzazZwpyeYm",
  "key3": "233cm6Njkxb5hapEGFE9hr4W8DBF9QiKBgHThao3gmFyStuMR1FqXhhSYG4a89otfLeRpQzj12RUvRCGt7z3qy5j",
  "key4": "3iN4m9fz2WPSsvipmpjRoYk4EKTtQFF9zz7Lg8fjXZWxALV2jwkYfhm2BeY2NaQbreXdqigz3YvNatc4eZBmae7i",
  "key5": "4BmUedQBAzpHDYvFHbezUqLQgdAwDyCEbFGSfq4gbibqty8YKmBf2CnMHd8QzGGpVvnNm61ZXbAnd56K3XF3BdnL",
  "key6": "4C12ZnjTMJQUaTmpwmDeVxYjhaozQRcYZ7gRkGG3ZocnNbiYhBUDf6yhfFtmgHXxsf5c3pSokQUFvVWGeG7EHhpA",
  "key7": "5NtTZE3vUY17fBjyQJjBT124496uMgjd3ZGEkLpx83wNAhP1ZxyzJJGRzTMhP44NrFfeMr2kSVnXjHwjbsLAcefF",
  "key8": "37DotyUgRTFDr5Bi1cxtPZciG2PC722S6QBAN25tMhm4N7uPJ5a3jErMvMJfo5u3keZWvtsVE5ks6mynWKXXCBR1",
  "key9": "3SNeh9RHPRNkPv8e6vufMjAfCEK12432kDp1nUa9Mp3ZerxaGEj5RSncdFFtFWdobgw4GCu83xpRzQFztDEDP1rN",
  "key10": "iyxnso8Pxyco3CRoTtEdS2YGsJckHtSAfikJ1ZYVUMd8MKjpH8yqbYzkU12ZzjpdSEJtkjZhuxLLgJYUZVb6Gsh",
  "key11": "EJu3dMD9PTB3PLmn3pwW8LyxzfuNG26K1f1SpsN9k2K8g5S9ffB6qfqx4Zsr7TrL6ixvWFX6brY5z4x4szyCWtu",
  "key12": "3cDreB3jhorEGhPwjrw9qjKX3fdzvZKNiY92AqDWQmfe9BSA19qgDz8EZqQRwAzPyW1gw3cykWmsuykPYGu6bth2",
  "key13": "46wNA4VpGA59PqdFUGCnNAQTDMJftVJ3jiadR5oL3jYGLv9sZoUXY9sBFssxQ9BK5HiTY7ZjcQntXQHLHVbgBcrB",
  "key14": "2A4Q3gJLgF26ydkt7APuot2PUg75CgDv8B6WBsazYaHHgqqNjGEPMjH3TJUtogYGJaqzyjLJ8YDxgRX3frvLr6M4",
  "key15": "QN2e9mpx93xcd3Y3TvTsEVngomvWLyv98iRqjscx8v7bKxo3qrvBfQdjuWYemdXVitDnJjAAWPBv9vGnQhykZ7K",
  "key16": "4hNrcVk9gW99LvoS3QVocuYDABF2Cn5xuaRdN7G514Ak93cc8LTJKKh6G1QkDUH6vpHmCh9PSpNKGrZUXo7Jxy9K",
  "key17": "45yGAgY9cLMwhvFTM2dpzFdsZJe9HQg9TwWi4iR6Dv1EfitSQEBEEKKweJjJcnggjcJKwqyivxYeomEx2AEG23Hi",
  "key18": "67ago4iAuXNq2zimTHQB1mSwFVmAhY3borH9UsFRD5t1Ss5yURBLaYcngsGCvEyv9cjEmwpzPAsqXuLrEzcGEfvj",
  "key19": "M493DHjXmvzuk8oFjUJQkbcTKYP8jt4Ev9ACMmwf83sjeHZ3ick44Utp8p74qud1N4f1KCAXQJHKCbtD2kqhw33",
  "key20": "5G2oJzecCUN6PnAgaUNaj8X5nmfzHpns9c2StGQwMvBeu4iF5kywM1XoDAvna3nSE54j33N3xe8S35qMyXbx19Dd",
  "key21": "hSbG3ebq1eFWJGz4pvPDvxUFnXBxghRWRQVj4kGeLvLCKgE2s1vJ4QhMJAahBf5FH1oTBjSY1FFH7RN35bA5KRE",
  "key22": "7CB2qwFh9WRtRt1DkEyb7LZmdMeYdBBwyqijnV1M2KTJ8oCB2BJiGRNeFdpcdsFagWv9tAscvtAY4szCBiPYmG1",
  "key23": "2HQSyuioLXgAzo4VAusfcnL7SpYbiubMGSbKZH3GHaEPDge5HXSH2UYQTzZjFibrMPjfU2X2hbVUFHqUsJVTcABg",
  "key24": "B6GFvXbfyxktA769rjaxgJqVEoFvY2CRAzUzKoTwZivTGHV6NkjTogmhx2RiDaPG3Lx4CQxFNjpciLZ8o5XG7Xh",
  "key25": "4tkKmS5SW7fyRjYA3AEKN3G1aGPwastuXCoNxSvkrRx8eJbdSfZj2eW4Hvv4vZ9xasNXQWz4ndPxiaja5DhtExfc",
  "key26": "3xLovi8hKwXcFUQeXfzi4qXWHqPPJkXCjK71sUGHcGweFDgZdP5PHEF13ugKRhrAq75jY2QKLkRsL6E3gX4Ncf3A",
  "key27": "hKtJCWVFXVufMn31LYyUWmTtbfTg2V3AUtGJTFn3ubUTtpfK9iZ3M16AhRLTUQwMTEMUzNcxjP5quHUu4m49anc",
  "key28": "2ugWXXfBehXD8ioDfCjJSrPcGzYBb8ZuXs5XiApzw8YPSwxfWSWppViZX2n6fU6td5x5fFcAYSHh4dACFgP531by",
  "key29": "22mXeruK5vfqetMksMfEkM4qYUbPh4vJdR2mmJiLV8iP2GzzMs4Gu8owq7aBqAoGtjKKCktRgAJacZw1QoiovmwG",
  "key30": "nQt8M8vsgmWRGaPNYrBVWYZHTEhRYsH8hhF3WDThd73ZwRkQWUr6k9ySYa8g7JA17zy2NvauVxDCS9xS1a8NLey",
  "key31": "4tkD88PYyRate261CbqfNbhjWrU5WodMYfTfCqTtuRrf6ZLRsSw9ENG5aZXceyyJwCnRJoDbvpWmNeKuKSSwteUJ",
  "key32": "5yQGyCstbr3hjCAdPRfvmQ5rPYWmPoxdCknWNMUy6JWdL1p1mAa2jDAdVFhRA7CMGbf9FJ2zWbYSNqUAmFbduEKo",
  "key33": "2tjarmY6CJ8C5gCpZpcvYiSW7RiUMaYh7oVGo7nCYgcaS8eR9smFZgP9Kwz9mMfk52xWkiD73Ht6YtNJbgiDuH1j",
  "key34": "5NLuqissYBih4So7AEDySG2vY1ATFyeC27FXa7xU9S937CRKTnhzfLQRAshUbuwitfJpnjVf4tD6UiTSxUMUqxUd",
  "key35": "NXA22YtDaUcUWndKKzbzeRrqEHeph6pHmkM1axghHFuBMn7D15UTbDVoxkAr1cAyo95grv2UmzPH9ndEK7fyoxo",
  "key36": "4K4TQJn8VtWutD58xryBXLsFscrvp2RaRWEzeXgCm6BT4BxMXp1FJyd8wKLh4pUo4VBBDXoXCDR7nrFAu9AxsnbG",
  "key37": "5hXCwMyCbTxN3GaPWc73p11SHR6vrsfAXPReRmeNn7DTUG2ixzLZhx6Qjk7BUFcMnSCzfG5dSLmmi6UDBNuWAfe2",
  "key38": "4BifjJVfQWG5dhKjpngT1NaDmAEBbecDedfaLMEKEabzzFWLyybGAXNHBdY9vRR5YXYKpw9vAQ2umWC9dcwhJaGz",
  "key39": "yp3wueaTQcT8VpBoS2KVR3jZJ6uVLafGHfWJNqAf3mTCuJnZim4Z6QNQ16cmxjYq3YcV8LMEgJVeXGmTd2gMKnF",
  "key40": "45DuAzSYR4ZGnCdLu1gdNfRZCsvJzHdFUg5A6GSkyt3Z3r8mBQwYB1QepQNK3KyiRTa79gX2XDzYkYqJGwS2wfxi",
  "key41": "3E7LRSH5Y1YSbTH1r5kp3mPj6jbFRUcHUwqVSg9kDbtZcvc2d2PEZP3DYZPp5xpt8614cUjMLsFaKn13T73Uh2UL",
  "key42": "4gAyABvXzzGZYpTgk74Dq3G3zhqQ2yvJAujjkih5aeGKj9XZuQ41yqCxAGobWQ2RL5cZHyAwXdT1QvysVDdamuq9"
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
