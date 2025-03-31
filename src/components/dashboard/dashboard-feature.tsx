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
    "3ajxjM28mbRXXdXhUuxVVwJhBX1jBQHYKxMgWwfD5QFYqCWp1q6WZR4vChCV7LRC1sG6K7M3N9fUMfuARqD8Y36Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLy9MtYHJ8fJBsEHpFgkJf9vS9h1ZpVcekm4rpGnxFTAThr1gr7WpMKLrRrWPvRP281BDa3JYjZEFKDUxVKSBwY",
  "key1": "2PNCKKpDtW5EU36D1wuiHJe9iPky5kuJ2GgtUjPJ5jiRkt8dQTqr3FEuMz7TLHr4B6Af8rFY39C4FoNei4bQbdt7",
  "key2": "29LcWMFrvCsdXBdgo9BnBib9JNqaN4TixwpX8xXqKm3ZmdMpQ3yW8wG5VfbGfQnVSu5jJNJcRwBV7CcXmaKHToWU",
  "key3": "2af785E8TxGWAAP9iRpuXgspGiC9qhrgHuKr9h6HrcvzvwQ5TQRDu4CpzfWMzDFJjDPbbEswsBodTdY1V2mmmL2K",
  "key4": "angTHj18ejHu3qwZDFXWF9ALRXq4FBvBDhJSx8ubJRm8NF5Abcrt9Jk1EgVZRX3Nw2e2uFXSzyu3F7FGH2dKNUf",
  "key5": "4cDXAmrPv6UKPDGK5ZjQJZ3irzbwTEeCZvAx7szdp4tGcmRpcJo84GwyMG3AKGfziijJQ8U1XTPsTejdfR6sMCvP",
  "key6": "3VB7SAic3793wENmMp5sJy9BXqZWdL5fpyBBKSunY46hzUivFqSFc9qSyd44LdWcu8vR4dWUjotvVw1uZkiST8sd",
  "key7": "2TZT4VYcC21mC8gzysLG9jZdKsYT9xs7Jttfjim7GrY9WzzqobkwAXGWxexd4U1V63mmJLPRGvCwEGQuEa5KVc2z",
  "key8": "4qQPZE5SEnCwSZ2T4XubhSWZxZRqq38myiMMBU2Fqmdx5b5BCmfYmtfVzZTmyLoSd2AfSkwQMCi23CCtxbE4quEA",
  "key9": "3oykXZ2rq5qbDvz6Dfnn3Rf2rG9NopoTN7vVbScsZgDncHFdSBKm6hehUynjj32M6yyQPGAgWA4QFACcjfEW8UAk",
  "key10": "G1AvLWfiZ5soKakz8ZWtGY8Ecs5GLaoyMfUSNya69UzpvSwTCN8LG3dctZUcm5oxtB5iariub7WG7CWNZFC8HvU",
  "key11": "4XgCm5YDoUhLijRduYihSNCd8enub5BSWrnwFm46Wc61mnduDufojYUzGwn1ZXvoXLnfRzqvVF11FWuA1ufin6Xa",
  "key12": "3e7YsLMskLtgpvwoeaHkEX9QHVXgPwVTWCDyouDTj5uqVzGkpcxSMQaPLDAWZug8CXKgGy6YuiApvsLv2ujU2ujy",
  "key13": "4e3CW46FsuMjNBAzeRBPxdwbTKC8QRXJ5RdA7ykkym5S9fkk3GykWHcDsEMM8K9YarexFxWwUCKaTe8rER7s6u91",
  "key14": "5B6m62XXXGVo1a6dg3sxjnSwoj7Q8RHF7HaAkL39RMePBT69iZhV9hT388QFnigD8DTsXNhxE2QsTPmo7hELE54u",
  "key15": "2haTw8jNoqxHnyjSy7MqafM1LRUgxvTshrJDetnWJxchvCXqu8ypbPKTCDQZWHdDYNK2bhuDFGA5HJRHhMqPzK3r",
  "key16": "vk7B9Uu28Y3sjPd5kc5TR4vK9Z9JjinEssX4F6TUdzgKPSnUqoQ3rXvMa6T9k9RdET8utd7jwmq7fYddxppZ3Xj",
  "key17": "3xeCJD1T33rAXRgQ7amYwvykLRCY1c28rHYT1CKHmw3gb6xHC8xJzUfmPkF5935WY1D1adRwnxZQKda9XEwjZrE4",
  "key18": "61Wmx2Mrmj2ZdoGxyKTi1h64aLtBRPrfGfNAA8W4p6bE7iVT9vY2a6dfytKdnbj2oY9bzDYVvq6YJF2eyymSSL2B",
  "key19": "5BzsaLdmKFL4kLWFmPbQ7sHrCo7Vrr4QCHSgQGZm3onvcqdYRXYzDaCCqCch2BeUiErQhvKwqjYq7MCLR9x6pCWn",
  "key20": "28sCTXTb4QYzr6CrpD7dDzRG6EZP8cCPRZxJEYZygpuAbRzsqP45NhrWaL9K3xn4Sz8A1pS7ZZFJyKYX937QU1gd",
  "key21": "4FqnSZ2W3rbPgs6bE59pjpsADFgzzxbSGQQqYZo8tV8qedKLjvhXAhx9tLWcyeSiRKFPtA2GUZu1zJmBxRtpCac1",
  "key22": "4EgQbGeGajLAmgUdW1fSVsipr2eJ1jT4FzJThy5of78UaNVcCqcAritBvKdA6oYhxVzvYNEo5URAJSEJWjWDbizy",
  "key23": "5MaiAMAEpAqwBePjT47SMxNC42eEUQckfit4mnR9mSFTcxTnjwE4AnHutBLpy5uiuMs2DCdnsgyQqznn3VFnAKus",
  "key24": "679mwcSiqU1xbKAKQyajX61fw8qKbY8t91MifapcuXuNGXzqYXqGpRnqCGxPZMrP1qoG3b1Ni4JRRPoEUzvz33aG",
  "key25": "2MwX4uFSzCzzUC1jd1TYc41suHiLcP2NwHjeTVaUwR62uZECmF1ayzgNQcT3W8DctzQKSa5jqCNqUm7d2Mu5hdqs",
  "key26": "59w8TzXm8VcGXr9DQbUvtLqAtnPbZLPYbpDcJfbAKKYvmHbetnf7S6fWjpVAKGqab4BbV6jHfvRv5gMCHyYKs4sD",
  "key27": "2F5bfYT2T3Ld4iBE1RnuN12gBeQ9CSjbi67s1Znu7495nxpAaPYhfyrUGU6ANNuw6A8EXGVU3sM2fqLJpBT6pPFR",
  "key28": "MesWcgi4MQKHntfPCRnkSm2dRkccUvPNamkaBnCuLS36vnGvwWUCvddHXq66QyqR4L2xzfFG9WCo6mc21w4QHhn",
  "key29": "5S9PE76hoAAyNeLXjLrWX97D3v2KE9qJ6ouXimfWWKXkNv9WuwgUX17MbJfdP3dLSkqjJkXAHFZ9Qzdzy69Jd1Ms",
  "key30": "3atM2axCgKca4kRXmAsrh3Ta1jmqkdYXZd82chWqf641wvrQFntg1xenbH9VefSb9H9yA1io3RHCVU8U8kbt973c",
  "key31": "4Mzi2Y9abGHjcRxM6LW3VMBRPcwKCG1oZgypaBvbwCppp1eJKWcbnwZskdUFopuVPrLvgpMoBsxcCoSs38GV6deH",
  "key32": "2gS5YCpT6ZM7Wxd8H36mVjQfpYdBRS5qsRad498zVjCDXkfMNYEmxmp7Da7fmHt8to5CmSdyXFcmk5REYwpN7RsD",
  "key33": "4bN5tLj3FuqrZqczKn5P9AjYvt1XNYPvMzSv6eFiQEvVwpapqUZXPKsL4978dY35beGAYWwRxEW7cHArSyZFi1LF",
  "key34": "2mju7ARiAqJXjZKcTjqLiwzY1bJ18fioQK4JG5VnMxZtQn6zM9vZXMxdbsEPokqPVUgG4nhEvj7SXRWc6V1odPyY",
  "key35": "4rsojsjqyTxrpXF5mj4HZewXFaw6NUiUKNYAxVG48uwYVmPLtZXzyMp9bjZEKUARiP8pnR7YDL4VwgQh9bPhKo6n",
  "key36": "3KHVzwCtfVYYN2Tysfaup9ivJwsznftqi4NqUF82LPDwfxeazsGz9MnJFWFMLYMBLVkD4kd9Grq2DMSwijCWGsUN",
  "key37": "5Ljzej1tQjqj8VZ2gNRmdsMkTxMxEjg5rzjPi2R71bkDXr8JvLLsC3LHxvLgZqAc92Wxoz3Z4LpkFQgwuobFdLZy",
  "key38": "zN5yCxfFkcJbrk5y36uDDgb9ybUwB3WaTtgcrUQ8HK3emMod9JvyUaAyHSb47v9jSZTB2RgCxcj7hXRZ7EPBnkd",
  "key39": "WjEvwU4qFefL8WVKq6J185j1pRS67j3hdkMwqgmcR6NofTezVPEgJUNKeuktbqGV5Ty6JeQg1Ko65mrss3ehGJL",
  "key40": "2cKEAriRkvzrdm58EQRShzUTLq76RNUQnBGZvB3w2veRUqhMzbrFpEVtBvmxrcecpVeaH9iBYXt7KFcEmveWCBzH",
  "key41": "3KYendUy6CrXWG7fprG7cp9FkQ6kHSVt2Ngc3shf1eHayf75Zjp8okyXFN2HWmZtiJ86P4yE2MFcd5m4TYG8A8pc",
  "key42": "9WvzUfS5BsMHZB4d7NUuZJjFHEnKDPVguQM1xKkhSrQhj5SBfw39ti89gFAmqUaLEZKpvRDwKdiAosjNXZfyaAH",
  "key43": "5vA25SP9RQjJD1KXWWGQZZHQaZFCuGFoxm7gaHZbKP5pwDNfdT6H7isTSFMSnEEhWdhiyo58XKyqmX8knfMWxPXi",
  "key44": "4sZNoq91GrG9SMgUU3Suyanc4C91KtvWwHXme9dfmk13ksGNgvigaMmGxcJ2mtdHsEcfDs3dT2exXGGUa6cnRfa5"
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
