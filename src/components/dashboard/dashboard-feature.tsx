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
    "3j8eZA6vDdcmVJx3gnhVuMNtPjvR29y5P6PjghdGaD9vhZes1wS4V7fXSfZWJsPBrHaC6RzmMuWyGi4mVwksdw8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZbMbyW7BDnvsbkR6ykoiybYP3Xo9Hc5CeL2iqR5fjm8PK6CXHYtZaropkbJNz8gbqfM9Ewxw4zEoexBDVnaV9y",
  "key1": "ULz3yBjBF6g7oev6ifDAW8cKHNi9WgM7udD7hxXZA4Gg5qR9QQmEhPRGpDXy5xWS6DzuZkjeyLxKQEbKeReY77A",
  "key2": "5QrtsUhYJzQzt6GoZYFz7yNp5LARXNcqEuL5r4UkTSjafePTWkkE6UWUA29spLgJTFq5S8TetteeTwxnic19tnJC",
  "key3": "127ijoN2LSFXDoW81J3eAa64TQhd66sncXrY4PUQEu7PcSKdvkKzV84AZPtfTgGsXjnaZEkRD2EHbGiiSKeGMtia",
  "key4": "3pmZa9QGyrEyrWhmVF3hXeQHe8TARWvKrbRgjV3AANwWqXd8f53z1zsmwJJAA3og8CGWbkmHfCpf6aKZGSw95E91",
  "key5": "3WpunLk9ZnGH1f94Y9Ev7f2fo33LPND4ajY7LTakiaY7Yd5w9r3t2YSQjueqsZT9MmVXsi3Fo4nntcNJcHGaNJLC",
  "key6": "5bsEQPdR5GRdF8gr7pjHoYez8LsjsxYMtE7C9CEkjnsPVFQzYpJaUc6euVVTSPGz6KwNNErsZh2H7t2s92kNSkQT",
  "key7": "28FUUbzuK7pmxHhuaPbn25CtM8ySmBM5KfHUxhat5Y39Z1mHWqnsoyCVS8r2bpLdMSdZitjZXtTD2kWH6f9GEGhh",
  "key8": "4jBaf6Gjm7k9MGcVndvSsThwAp1e7G6pBHf3JoFowssgpSRvw368kFiW3dWA7oLjUkWtF56H5MtGqG7BQcEjdC2M",
  "key9": "3JayfvJapH2ANBRmRai6QiogbSKsTdVkP7a74753zogbjoMvw5bxfiLtJiGK5BB3DqptBg6SxaryAh5AC85LMyde",
  "key10": "2GTFHZ2D3e8P3MAQRmRVPa4jETWRpugoXUhAL2u4PGjVWKPKW4FR4XCR49vkhczx6cQFAxJoRkNDEZDDaNiqYh2F",
  "key11": "HBbXdyFnVUenCJdyh22oipRfxzNxwasdiPngRLNMfTtMk1JfGSJrccjMbwKSLZiw9i8zee3cF2SPxLZKPvCWVjA",
  "key12": "3dJST8L6Y1bsuzQUsbZaL5S53Hik1v1NiCgjo4FYmY1pS43cMhVeiCKxCFUzmxG6ydEC3tNodPrcxN1G94UbaBcJ",
  "key13": "54sEDj1EfdhrqpxANNoXL5tVpozvzw5pP72qWL39MbiUrfHKWrmm1yJcJqdR1E7fkavs9aosKHPFSTrZahB5W1Lc",
  "key14": "2bgZmwydhnvBw1Zpn7D1snL4QJLtjGV1c91WUj3R5AEgVMTRSPACdZRayM3BkA485tYMsdpNU2VWRP32A8oTheZ7",
  "key15": "chcxFFHXyuWWCvi3iDW96oeng2cFu8UvEwxzbdb4mToUDZMFN6ri2nJpyGVmFc1AxAXPrrTvm5gBiWnoNxNeiuQ",
  "key16": "5buKQLYVgzKeHVSB9wrAR4YvksLxySBGBkz7q5JRxHKWuJLc1hiHfnwMvnLcSBtv14F8sxQZjqfaoZaqoPSzkwhp",
  "key17": "212BE8WQJNQLxfj36mfLVZpbsSk8vTjDuM3i28DhtQNLcjAzJ3KXvsmG37pz91tEuzVTxpNjqQGZZNBrMCrfxsKE",
  "key18": "AsY6dEkDABZpCFwb9tanriwCbYxGM8p49TVMarApVDvNEUSaxSsVu2ii9aqwhgSPmSLabJi3m1urTFNXrGAJetZ",
  "key19": "guBXvTuVMbTErRrxXzAofC7DsiKmQB163H83hRVDYrHobqigY6h1tTzD1YRviqcN7f1bwCPCFtffapRMkvF6r7R",
  "key20": "2PnZbXyzUsW9GYNPBeNZqJF92f5JmHRbHTX17m91pZAoD36k25KAEfubQpRZCPoyXiDKC1Bj4geER3YLZFTYNTCE",
  "key21": "6piFDn9g8MTALCEhFeGzEiSp2Hsi81tXnV1e5cwE5mESbMinSrm4cw2kgqx576HsHtqwfab3P2tdiuYhGJPX7Wh",
  "key22": "5aHpYQ93Fg5D7kRYrUhoiPNP2egZzRJEwNvjjeDueDXwnuPx43Ns8Z2UBhT5M4WBEBYsKkBdhcVme8TxbBrnKCQL",
  "key23": "4pUWq53tzMHCbVEeQzPayugUDLVJmW3k5bguNZnoH4yfnyWoPmimadCB9riFYib6ms7ZeXBZ3Q6DEzsWXXkQy3EH",
  "key24": "4tFmEFWSgmWPqFp9TDLpm7Mq8EVkMhgmczSeBqiQ1orXREBtdQB5EQziatxvuNk14QtuBh1miTd9aTCnYqxnyoox",
  "key25": "4fRcdC5S3311hPcdQDGAgLT6V6EzF6Pciew8nXMiXq7KppVJVn6nUdu9h11qTQaapiTRoV6iZjDisHcKRggbH1GS",
  "key26": "5aiC6cHJd2b8hexQ9kYnu5UXJqR3dhaabH2gcboCnJnBJgxmRzkKezHu6Mwv8TBTg9m1kbwCnH6YQFVaPUwhpsUU",
  "key27": "5wvoWFTvSy54f4RsRf4txDYEbacf8LrsVtCsnPkHAuQ4xBBsuC7sVkZM4UW5svjuE54twK84pf5b3KNTuALb3pJt",
  "key28": "49MsUVMtofw777cuCTDWHwyNS3mD8a61BrAUZRgNGnGZv28x4SxGyrqLJXHymyq6Ng6MkzcLqCP2aHMXpFvbakqd",
  "key29": "3hn1RnNSyJ3KeRyphpDGiG6DaQ9mTCEdHEpUTQX7jSL9dPyaeqrj6CW582Rig62Hs29HRQjvA2VpfXyq1D3PsSSt",
  "key30": "QadWv75bZvLp9iXNqUvRBYSXkZGebHNEEY7H9jHU1X6UyWH61kKRrPYJDuJtwLoF78wDzJCvJzeQLirHTzL8zhE",
  "key31": "NRFDimvdJwqZkv2W7h6pLgBgK64FYEtQ3yB1fME3owh1nyY1dUhbHZxEy1gEmLg5axZznKy2T3ig9J6P4fjf4BY",
  "key32": "igzhDFij5d3eaE62F1sksGunGXjYrGmWeUzc2BMtWo4dhFNvpxa8feiWm17hjoNf5RA9hM4FEJh6U2F34F4ei11",
  "key33": "22YYwzgeM3qW5YEB4EwDXJWRNdZc1oP11eHVesyHcDeq6zFD9sck1P1kwT1FApZtx44rZHhYE73F5qCXg3iQJdYT",
  "key34": "2yh7g9X9csCZz7G67YwrFC3GgUr95efoGBcd84WggFuHuyyRBpkob6KHQJ3BBijusZ1T93Ri2iq5PHYMBrpa1exx",
  "key35": "5z88m5LtGFGuXVEGyA2pZgmn5Khi5M6EAuzxBjJDPy79rMyiwCRA7zjvBqjfko2eQQtpBYcAXkuQ4GG4Y8fnNXet"
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
