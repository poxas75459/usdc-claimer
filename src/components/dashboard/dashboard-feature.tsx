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
    "4QsUYz7Ba3z6HfAKTojSF8YXVQjkfoCLYjjR1YugvUQYur2awekghm2mtGmedCM62pcQeREwoKcJxLzLFZSv2cyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZmTZxHXfLvCgb5CGYC3VPX98eptaB4WRpxog628HePihJY4gcCb84R9UCBj9EiVZjxe6So3A7E3UGmYqTBfutV9",
  "key1": "4AYfaCTVyiczGWncXfSsziHsT9Rdt8FK4z2M2EYZ4VqzX744jBia51cJAXk7HQaF2XPuneaGLGyxUKDvhqYzLCgR",
  "key2": "4DP4NHMweXmnVSxJZXg6tnnqjuChSfz65eSzsdQzBtdoTieQHxYP7xR5VrDqpdwf1XsRVc4eqgGTrVt9vwBt8Pau",
  "key3": "ZDhiqGrE62V1STtKVKzvgBgeVyr7sXk3x7NnSUz9RJkJjiSKBSocgYaFnGNdcryjqipoV4FtWxPV93yS4K92uz7",
  "key4": "2S9PaadN7KDTxo3kmnZqndrmCzkcwfGuCZo6JQwyBDRvAtU5CqQiCJ3XWFTwi6ju3aMNeHkypFwuKorEvJABNu5s",
  "key5": "4vbVG6veVPoK6J1uMzG8vhvHyuBBs8RdePVzgLeHAPKvcSHELgDiceZefbNpdYJMW5eZ8utdFd1gqyEVTKScFqDS",
  "key6": "3msyHWy8zd43u9rwRwL3m3ziL6sJ1XhDNkSDSg8RZdMDWUTtrxisB3FQoSywtboMXmk1gAXZuyvxzEEagYUJB522",
  "key7": "4ZtRDLJNEqzzd3EYDtKSEw3Q1WN5MKjPr3vatWnqcx3wCbV4dwzK7ZoYHcopqG46ZXTBkcvLoWGYtUh8uJJgJi6k",
  "key8": "WBn8CojoFUjWjooTmgLFPgprkL7UeBDHnvRWVihdt1EYLBf3z33mWf8xPCR4WnFT3By6uMSvCiQxmX4fLA1tZWf",
  "key9": "3ix7i4stfZJfBagAv9JLtQo5eXWo8chn2UD1VujWMZSZ9fn6kCCWHerTQTZCELkQ19SvecahmM1qKS2mzKEQAAQd",
  "key10": "2wtS4cNF31M6NVeDTeC4KjZCdj5N31mL3o6rYF9w3TEykpvPT6hSHUNgaUmQ766WLkVPe7oiY9t3Eb11oqPFtUno",
  "key11": "5QgMVWWaEFUoG2YvAxrsEsk6629MGq47qcJMvuXn6xYYDwkaxw6NZvozqHjohUJHHKt5KQafvqiVDbd9Pgf7FwLv",
  "key12": "3brJadRRSyVRRHjU2ZK6Xf89GZnwouxpRVKXfdemnCja8EZZNo779wMVkV7rheox7cSZPKB4CP5jGyL6Dg7ZRVqz",
  "key13": "2Jjrg3QF2AZPKkDEeYnuTkv3WT6MWdULiJUiLUnFCvM2jf4HPbxxfFaHEWj7qGFtg8nDuSWXGRToLAs97BH8F7sp",
  "key14": "2MmSPJGdfaWSMMMKACCG4NaXxopeLLYEK4aFyE9mm77dX56zmEKk8Z6Z3FYDsEX43dtLQvF824h4fjFBCZpbf97k",
  "key15": "5FgsC9jVi4Nkj1PjTGhdyYqeVfezMCGKoYZDR5o9VWNk5XSAmuovz69xwJWMuomSthVMMJ1zfMe6dS6U3FqzjSRs",
  "key16": "3xCXMVREY6ZdfkFjPGEoRRaJ8Sf9tbsPkrtcnLPaT55JFqZLxDbYXx4qY4nXGHDe433hNWZDpvewAL2tsBMYSTQP",
  "key17": "2JRF7GZ3s98GNrm9vKkwZe4vPXofwWQYvGqyLreP594PcoKeBkhaG8ewvDHr47MY5bfY1qBzCE9kfe2ZnUprFiQz",
  "key18": "3z4jFvn6y7ifadFDvJE1hDxC6JtXp6oMfWN51dpm7xheG4MQcEUPB9aoC4CEZiZrtAijpjGSvaYMUDubHnd2q2cu",
  "key19": "3AyGru2QxYVX7ZLwM43i2fE12nysuhuqgTo7jtC9SzJiGxQMYgYsAy9vLKpNMdxwdaGpGZHTPJG2QMPWuxQNcG2P",
  "key20": "4PNRsqwoGRnJbn9DhsGY7MDrTai1wVMkzN3WrtrZrM77u9PyPkcwWNctiUGpX518kXWRyHqD8oQjmSt8CyscBUcm",
  "key21": "26d4AmS8HJGT5yVbkCVersbEQzEape3eirpcWXFL1dS4EqiQTLxr3sNq37bH1TfvduHBmGe7pWdu6AeteBWs2uvQ",
  "key22": "2wzYC8xp7hjkGtCFT9W3faYboBvaSVwF4Wq6wAqJHSor4M9779ntUMywFxHWuscPMKzLCzbKow6ZXL7QvkLZCJ1J",
  "key23": "21H6QGGzauvVZxBnd1USWt4SLJsAm24fkZvkUMTcUgGfPQoV6yqUF2VJmy9z8aQzNtiuD1zm9Q3ohk35vwVz4niJ",
  "key24": "2JcdcHAK7vXPYfaVVtD6gZA54jxbLP51QJACU9fEc4o9dtUpoRChrxDbz7pdRfdBZT9K5JJLfyCgbC5eQKgfH6og",
  "key25": "5GjXGZvqr212nQuMuyrD7HCnALMzZynAeWmVHKJa6T3Z48xGLk9bdjCzFxfQsT8Za4Ed9bi3Kzh4jKpFAiyZnB8L",
  "key26": "4yT7dCrdUqfEmZbergurpCG1UgqLQmAEvKf3Dt2Jf9zNbDyJJJwBqQQaptKScuUHUKsUidvw8HbSWEFhqANjLJdJ",
  "key27": "5s4mHScQTfjToGcX6x9DA5gdJMubQ79UiXPNCZP7QwPV9wbGwX9rmjiAMTDA7uE1EQRHqArYNupVdbVf7EDyKroh",
  "key28": "4qVuiX4qk9wVq1w2N2zCEgP8SK3gRpY2auwhR3MwHxyCPvkNrkCGQQQh2wCvwPYS8Wbg8Q6uzjxmLMFSUWkSRj22",
  "key29": "3BiP1HpnUi29LPg3wbB78JbzREWi7VyyuMxqChfrq7b2W4CRsA9wYu1FUFzBKrDhbCEffddHFFRj2Vs4Ns8ah581",
  "key30": "4HMRW67KpibYhfvobDuHYJfsLAJgQrGSiFekhapUpReumUjVRweXzEaJF8HmwThHSBJntuc4F9vxjHwtDRzQSHPG",
  "key31": "2RHD6cCG5PEHYXw9m3QZumY9dAVjK7rrzExcqjbh5E1jhuj9zsWsm6J1r1VWoyEA4gd4vBqeET8JyaoTsRtRZ6Zw",
  "key32": "4iUwxDQyH4YriDJao8b4fsXcKarYNvUqe6s4ZvBDMyjcPmMwDLAHt5SdHRXBug1Bgu475ckNYn8Sn3MvCoEjXkCV",
  "key33": "3uh8rto5ez3W17kjhgnU8Q6hoUXad3Ti1vq9ngLjNjhbAtMnQDabb3gwiW2NzKUXBR5k69J61UknYKrA6arAYjDo",
  "key34": "4s4QPiepdTs82myxEDcB1NaAiYFYgWyTfebPJZcLD7BjcKeVZNUgSyuZRVtVZ1KuTjewRKr7tAjbCUvQDNf7Kpik",
  "key35": "221tDESQMYbi1ZA4kUq6BsUoFZm5hNoiKxG8A674hAg4QV9y45Dv1u8rKgjUEEDkHtb8L8mpxMKpmKFihHtt48oL",
  "key36": "36UFN9AW4sx4RJx7Qoi4rJLxmKnhBsK96VLwKgqj1x1wg7q3nLu81zxY7bFMEbrT9116McgANoanNoP5JkmyxTnU",
  "key37": "mDfykRQoQJ11bY3Egt6gtL8YRWe12BZWTuwZYok9WSGDR9NcT4XvZWHef378Qwbowjgs11bJ54Gn1f8X833gnEv",
  "key38": "3jcj5ppBsVSmgCo85F7GfeiD2Qw9j1wsJhgYnEiGqyrWJgpCJUGW73KYs9j1hWXtDn2surRS1iuJ5kGpZdL75bmv",
  "key39": "32nE4XTHSCJMqwgkbC6yP9ks1SpAEsfHYy6RMUk77tLpwTeeAVR8PweiYu8nVw3JYp3TA85FFnVoB7fYxF1x4d2j"
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
