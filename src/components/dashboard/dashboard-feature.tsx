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
    "4unJEgPakR5XCAxxiDcjh7mKqsFp4svKZCKAu6b1cbEafHMW8CmHjbZ9hsoDUJJ2FPSS7GFjv2bHuETe4XZW4kqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFcudxe1ZeBE6XdWvCJHBGWrasNU4Gw7dDnSUxCqCe1Brr2cih4a6ft3K2QuRBerspWHaYVVStKdZs4fLEGaKVZ",
  "key1": "4S8d5TZibfPYYRYHMeCooirku1VmaPKMW239KM8vREbTm8hqTtfXtbvRqQvHnRYYLapagch6PQWKYznud6cPzcDy",
  "key2": "45fMA5YGR4oV1jS2Bnnd9QeKfLFHmazTjXAE6nPUJUA3wjhxfvxsgpiPMKmzqfKDEx6wAJRYjd8Lg44gQ97FwGmo",
  "key3": "25TFjk3KS55KPcJKSCJHHgGM9ewyQrbstRw96EBV92B7WaGBtfwthd5UzfcgFT5vBEzKKtBZ4e4ESgrE2n3qo69r",
  "key4": "5PMK6bk1y4srX1KW5CnJc3CbiNSAAhtyijH3XY7HtybD373ARHaNgG9nwtxRrgWbccxv4x37M45hFnFn2r54Y6pg",
  "key5": "3zEYgHzgHbs6hcp1TtxQNnvNizfRbQVmc9dLB44ryC8AsidKpkwPGsuvNx887dUrCCTPjAcE1giAUFrKWwejJXYq",
  "key6": "2RJ4SbJT2prXg7wBc7TYrmWiaZCR1CyEDZm4YUmyaQXor3A2oE1mK5FqKLXPHdMcnULYg6fhf5JdUazkBMXC8jnN",
  "key7": "Bivv3KZGa3tJHkfq5FGwop566TjHqQR6pX6zYVYbn4BUpD29EokzRWEf1eLpwKBhYFZSashPifSfNrnhP2LETuL",
  "key8": "2tNBCEsecoz4Q2Ci56vtaMson9sjzoJT7LYfap2pgQV54ec8QmiWNmmSVYSEFVES6qbo1quSSvGJxRrz22DRadBe",
  "key9": "5F61thgTiWVgJaPL48PeV7ymRQR8dC8KMXJyH2N1ihWrqX4MrMhXkKaeCz8sczMQMM1SD1yik1FrwMp48DudXif7",
  "key10": "Gz1UjXxeSHrx3a2FpWx7fu8ZemBJjXno8MeET3wJgPpPXbEniwvYCMtqGLQHf9JfdNcGDefapTPzatcMSxuguen",
  "key11": "3ppVSFraKDz4AvxJY9oQMc5JzLsxDM92AC72Yzj15DBMrCaS4vAQvQrsZFU4d3T9aSPdHRe4VTkUop46YTgDf9qL",
  "key12": "3SXYNQ98tN4nXoGurtC6RneTbRt2pk7E5ZjUtWkNHjUZxwZHtztA1BvAyEhcakdpwASo3MDf474661fb8FDAz27i",
  "key13": "5XVczj5SPGyxJ5AYSA3VWefBTJfVywenzB6KNQgi8LTCvJGg9C4eeNnyFFvQy4C8i7DpmLUcmpes23tAJkLx6P4B",
  "key14": "5VvkAARjjGGQLRSHgwTMhE7dMM7cQUHeC1osUwnj8r5WYhaeFfBb6dy3Fy9ofs84QWLr8SFPkFcrt8Bp3k3ytL1c",
  "key15": "4MR3oPbhKKiVs8otLLfBJBgTTyma3gNpkdrBhcVx5XwYX5QurWP1rGqpymwbQEdJkG7HMM5dn1oNQiyy5sndaLP7",
  "key16": "5TrfN5sjCctEBZn3R9HyU7juL8E2hazENJ762Tk5uqZ1hDXpTnp6awqjLvevzwFskcchG4SvEkzKdjLrYcuVFJrn",
  "key17": "4d1rnptk5c9zPViFV2ytSeoJou7j9KcFfB4oWhaoykERTEQ1NAX9tAFDvG5Eo2qWb4Tag8Tf5nqkVpFENrATNEbS",
  "key18": "4V6oaATY6nJresF7dHHE7LWpmnQi2kXdATmmfcoY5sGAjMBMXgExszat6QHUei79iLSzn6mJWehrjq8Mps1pSYXZ",
  "key19": "22K7X9mNJ3XiXyY6GF7BGjkvmuCcgcgnwbyMQ1J9adxVMgb4s1jN7wSR4HJGjmLRce5JpFvQDfkcjqWxdpPfAAAv",
  "key20": "3gKgxmf2uG89QNBXGkoJ2zj1dBYWxPLoGZUaQEwRX48thxEP8tfYDZHm74Xg9u7zkFEt2gVKiEFAXXAGG1iQ8QKP",
  "key21": "22Eskn5DdUcYzWUZmGTU6E3Aq2VdCKJBs2fb9K5pNV2yBTknB85fYumd3pruJjNGK4rx3bfWipxpcjubKZfaWAJh",
  "key22": "34zmF4pr8Ht6oT3MjYRjdiLmNWknuwP6jSk91Ytyh8NciDVPHoSuEqzns5KP1sAN1ArysAw1mLCm8SwgYJ2YM2Di",
  "key23": "GgDmeePxWHTbzbidAN3PSTDt7fBUCbT7vkPyCibW1v4j2tbhYhiDMEQ9eNnBEPXZhu2XKL9YkyKKa9neCULEVwt",
  "key24": "3eyNtmcWhimjAm58XsQHKTthqnNv42TeJ7sSLU69Qa6pcA2NWvHN7jvmWcqGVwj5am55gbyFzu3PyzgjHf5MxqKQ",
  "key25": "2pgZxJzcsBqKUz5ZV6qP5mMXRe6VDdRnrVeKqJCJub4f3cxTC1ZmmjXys7kaHwtxGQCTnjrm2XfQeQpVfho7L9Vb",
  "key26": "4ts4SqXXWcAHCBFiYNun3W8B7fFfVtpCXZHWSH7Q9Aq1tEBpQvRATu3DDRZwckFYNwcjeitjRkMCg5FJpFg4Qxmi",
  "key27": "4xLupLYdTrmSiejiurySk1vmLSsvAEgSTvizTtsgranjS7Gu53q2Svzq62xkwQaMcN8zXaSZPxsvMNfN6hEQAJAa",
  "key28": "28gHjzbzS1p1KfX2Mb8QFGJ6PVoZQiUU6Tug6PWtSym1Y4B8gf3Uf11L7qdybVMNWnUeAV7yd85nWHnyVLnYX1Hu",
  "key29": "3SwvcGisLcQpJRWumgTpBAAwPyyszTd7uj7cxjnKv59YeAyZs3zsockyHdvD3xdw2BDk1dSyFzKkCpgjEn82ibt5",
  "key30": "4qmB9vJonBFMY8CQgGXwFi7r1wWZertZSA59TzRt6ixnRenrDa2TsF37Wqq4vGrBDRmBw4CWWfDGhWrasbgNcaMY",
  "key31": "5ECVNsRJH44ENCnXPFtwf6GQRyaaa8icSeJqZV95kapoiFNC7ca6GZbnbN1Pxkd9tqsFJystBKFKQQvgxUJZfSfi",
  "key32": "2CHGCZ3M2mFuV2h2YaK3u4LUp6oLw52mrJ5vin5Lst1avcCdtA7GZVSpsDFvpcZWrsh6XtMsh3yeTgSnXAqjjV1i",
  "key33": "32WL83ssZGzVcLvFEtRHrwuSKBp7mJsmYMb1sVS5AFkEyCTtWBVNuGqapkhAyDSWTDmUMsJzJcQYHiD2JrmpsF2e",
  "key34": "3p16izpm6SzSfYMN2VWj7EfaF4GhzVDKxHhhqAqZMe4yBc5Dzu7Lj8xJ2nCWJprAxED2aW9d8Ssz1dpY95KYxFzq",
  "key35": "XZQhHHacgDGyf4o6mVtx63K2vyX2RQHaopCJpqeUf1i5KcW71xhL28yhqJbimNtpEYdYCDErtstTKxwBfQJDu84",
  "key36": "qp7Fzadx4YDt5fvpaG481aYpjNEYxz5JYas2ui7awD7xTUmmqsnUvxgH2UPJWafJ9raFoGzTjameH6xuMDPMz3p",
  "key37": "543wNbvpHFFcMUzK13cQbHGPLRUKmoAjkqUGJHwX8LAGn8k4gtSR8x6K86CZf5tBosA1zjBTYoqzyDn9jzAWoZGE",
  "key38": "22M8Pr7G77DMaMgACt2JQXaoS5of7aTG56bBsU5aF2H9gdNQmCPSiGFbsE1ESDaZnADTe18gsZHSuNMPMbZbTc5J",
  "key39": "5Eq5EkBatTE9PmU7UGDq3YaUVh4udhqARUAn6iAeyWiZaixRc5XorS48UWCwmMRss2jTbsbFjUcXoCFahXbRWnBc",
  "key40": "AwkSRiyAnYsubG6ubh5g5VWg8mmGgV7mxGjqYPodGrFhY8p8eEvUJxwqkzjyHVsHqvkv3uQf6XktTzfDiapVe6p",
  "key41": "mt5TuQktz8x38yi8FJdpiau1N2LjxqtQ8nkGEeEdjPNFDw7pjjgQyJPDAJjxFV3Wsv43nDrUYGAQKnaJNtPVghK",
  "key42": "3MM3jNBXWbm7T78DUwwwgbzyNqisfpHCkrJNyoyavuAnPC4FcdT4X9uo3i8UMBSwH86tVwLLWNDYm72C8fn1C5vj",
  "key43": "yu1hqLh6qNknQtyCNqmpsEdSQyRcuNdM7kqtH7AMmmBUnh1safF8AjHYEG8SB6hV45WVDwtRAhDo2XJgeq2EEF4",
  "key44": "2wHcmZJitJTXdpL9XMQ3a7Qjk445hb8YAHhWxAf5agK7hQr9V99ffRL83NCePVLSvqLnryfdFEz5ZioNKJeKWdLE",
  "key45": "22gk8pUn2BYETxLxKFos2WZ6qa2G1xUqh9VamPegs9Z5UsHTrUDPkDsKKGEJHSzCHwknyxU6Bz9yYADpNVVnJPFp",
  "key46": "3Bd1Kj4tkT1rsvEuPmBaHGyof2C6BTXRezRnQmUiJ4kBLZQko6Rkgf9xakq6a2wp1qFNLubKGeG91NbYqjCppk6d",
  "key47": "3eioTJjfaBhYwcW8dYKFt4a46r6BFjgEn7RPCWU8GCoXMN8iUMuvzULPgvZ1ACBxpH8Mpm9MoS912QLqnZfKEjSk"
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
