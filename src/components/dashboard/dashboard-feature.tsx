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
    "2KTdMeMGqBLneMrBnnco3FzBsWsxKVrZRpUwvW6SjUT3entuEYxaHULFsyHrqHLY1AfuRaxSVTzX8ZY4fjy9V9qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DoHJVy4C11Ni1gqbys2wLLt6gGgChJsnq5sLKE36bysnq9EY7mST3Yo7jwNz6rk6xkDiuArAekTEcGKVkRWJATu",
  "key1": "5HT9AkWA4wxrXys7B3JkqeQPWhWu16VS89hM2vumfBmSxZ9gjbNKgKw1jtP8KtmaLNFxisSRn3XW1zxP9WsW94HP",
  "key2": "D8HRn3QBCgqf8ZCvUukeXw68GBg68JHyBxXhnbeNPC225ESriF3kGjpeyTe4avtjduyTSWkk9wM3sTkVPEyHZfx",
  "key3": "3vfee9TB7DRRmRN2uEaco5WXxkyYzB2nHE1UBM1Xh4Z5zUZfejhQVYqSAnKKyZ2s7NaMFZpxjCUdSWrt1rvwYYC5",
  "key4": "4f3QiqehnzpLGvVZBziRyJ46NJ5t1sEoxew1oQNHs2pQuXBz9Yc1TeG9g5PEm9WPb15f5XhA63Qt7qajkbKqQkuL",
  "key5": "iEqen5c9d1AVuUp94SNz9A9PMgD97sEmRiDT37JxKt4PLE9zNboEdvTNhegTYbVKiKZR4qJgUUjKsCVbziGmKEg",
  "key6": "HDb4LqLQKcf3mLeiBAG7QoNzq6Kt36x3eXnbZCjPyLBw8GXHfptqfPBx5NL4WLSctNVgSH4mWqcNHLKiHdCtXy3",
  "key7": "5ifr8TnNFDee2stvfzco1dNKWJZrWf2LTuCkt8GapH9yHiiUZyksNxC5Us9TJ6DzPTjpSHkCZJ8p5xmUhhG2FXnE",
  "key8": "2YSVSatDTxZeHdw8zcUsynu6GmKPv55HsxC3xxRiu1D9gnR3j7UpezBzkbAsBEZhfGa6rz8F8PriFoLjP8AG31bk",
  "key9": "uR3EUPd7VXYi7vQ5ANpZ87CjbqYU7rFvW8Rgx5x7qubMM8AJjSDAGwAAHKC2uDpAVAThRrip47pc5J6WPd1CPCk",
  "key10": "38CLmCLk1vZX466B6JYSZwndSCabB8mJtCu35EoHmzdhA8eep53KfGgCKbAZab1iL5FZyj1hF417kFi6Lut1iNRs",
  "key11": "TeABD5fhXBzxgybPdighW7Uw9cqLeeZp8yZKEP1FYpLQ8Tey7PmpXLjw3zkVgfmYAMDgvihEXmvT2FBuSkv2MPA",
  "key12": "4ARxpdNthKw712C8tTq368MPqHabyrhfRNxwYDe6ScnRPtft2wdAJqUNpEYsHk1nyySnBP4eWws2QTDPxAVRSN37",
  "key13": "5wtjaEV2jvuuDmUhyEg1Pq99zgPLaEXXmLRiRhm4imrEET78NUfZrG87PdWaXhCsoVcEtUVF6CPibTkVSvcsZiEX",
  "key14": "5dNv95vrP29rbJMryRXVE2ADGgYG9J1EHDfCtqSAAD1z7L4FrrFyQATc1RGrVM8L8wDBVQqbwC5TanXiGexARNdU",
  "key15": "3ZKuf274w7ndC4JdVu3UAPFxKLJiAorqvb7EKV6XSpYEq85cA92N3Mz4NgPbAtWfdDyfZJaPU6gFsLzDZ1RqkNhS",
  "key16": "43Zst8TXmcBBhRfo7GsSAXKL8hQv4mmrDUTpX88aqRZwMfB1nRZNYJ7gcJvyAnruLif9PQJ3VWyWoESTv1DBL4G2",
  "key17": "tZa1VVLYr2h7wQdxMDKprhDFYTfNihREejiQoPuLbf5XFdKWD2quzxST3K3C9aqbMXuEkHaPvCEmB4YReacRWaT",
  "key18": "3wDzpufJKZnRdSamwnsGRRcBqerfGmTLWpP1ob1c1B9N85ru2dNa8SXHCkCEW7Qah26EifDxgE97vkQPMtj9MUZF",
  "key19": "2DMwWXAz8JDvHBHy5MRTSdQVCs2jYqCXB6vH5zFBDNmTuPdjXAvATvhRYp6A5dTcM8obYM2sPSUp6N3cmT3SHUcP",
  "key20": "28WwoziKs7ZfhYpDqeDv8i2q1AMMhiweJHcbcv6hQrNsy7RBH1UzrqdRwadryPwDrfioNgM4suReNBYamQp4YJqF",
  "key21": "o9fd67s8wvpF4VoVCrbBc6p1zHeQFK2Jd2d83GFBnX3mm2dw2CDUFUNuQkGajvrX3gsFinPD5uDDScRXas6SdLW",
  "key22": "4pyZKXRV9XDWgpATUx5TKddjKTjiRdoC3K6Q66ht3PkyJrxiqH6d59qSougotxDtMGL3wHZhzzPpCbAuCXmGsHko",
  "key23": "2YaUWPi4KuSLDSsqmZB81ZiF56G9P5sPWG1okRtSPakX3P4W16THeJc8gkU5WvDwPZYRxpSQZSLthUTJ6dFrU99r",
  "key24": "5ffsJ4xD6J29TFBjCrwLyxaAcE6V3YjPxBgW2g39giLRrTQwffsgwYpaoLR4RbGz379KHDAyfm45xHFVbTCkbPxg",
  "key25": "2VXgaH8ZfsPswHhyAHZbCFAC3aYkYUE25xxsrkYERTSNqEg5vCVb7ovkXAa1bzcwqJhb9puwA3tQi3o6M8dKorgU",
  "key26": "57i487WWHXYsiY2EpyWaAoHSgw6CDcPmT7ZdKhqnjXf4MNxDMnMSC9E2CyDMSzPgz8S2GEhj9SAMadzsJH3MwuVm",
  "key27": "2EuzPBFrfaMrJUpLbXEsJU2Z4nDE1zVZRQYRqWWkZxA6NZSjmeeiJYqYMrwgy51htRqaxeZ8LihYcnfexzi9SdeC",
  "key28": "46s4dfC974pRGKJteyFYaptu1Xfpg6H4tVx4oUFWQWn5w3nhJEshLQLYdw6AxvXLzsaFkUUDHR9wfD6nrvnNGAq4",
  "key29": "2ddvqs4JQZgtjVbx1vEjXxsBLGaiqmTrJdz3zVfNPn8LEF2HprQLq5DhHbTuBNQrH2WNsMgBbvVZMEd7obsG1ShW",
  "key30": "2wjumRP1G7jhy1CXzhTHZbMoSN4Wwq5pHdWb1hChWEBtt5SGD7gMnkjxmmiU67RPsgoANAqzamErNwKctoLCCkM4",
  "key31": "4LxdmFg78yod9oPhzWx3cQ9VcsULVKKydjD6TMbWripya7ky8Spca6HJ1pwj5Ke37g29svsz4CtDgd3vkEjwmdap",
  "key32": "GDms2zmVAFMPhRmBeVgJ8qHtBrSrHjAQEciRf8hXNUKqUJWX9rXXNCeTk3HXkDRireu5VKCPGtAwMk3UeG4fKq2",
  "key33": "5tynZhhEozG7uh6LmWzUvJ9Axm42rViimZUtGqVEr8iJyqazKyp5VPHSKmnxHsxAgzwYyh1dUkEKwGZiKFWwfpoX",
  "key34": "xtJzEY5W9GJFmSDj6jMQsDxcMoS6Ct4UXNNYEooLJLApZnqhV415dKR55eSm2S8syf2b1yqAYtSsdCZ2H87FJEj",
  "key35": "2Nfr2McEBH5cocJJ1XhnrryntDMTUQZMZRd351gzU8w6ACES1Z9Hppfc48AxcAQwmHaRnGb9kTY3R8562GT6GB8u",
  "key36": "3ZbEfp8fME59kqtxKE41ewEQmzUzw3Lj9iXBYFfw966Y1YMg1efUVy3pHaSi8rijbLykhjNN4EhRK8U2mtB1B5M5",
  "key37": "2v3LUX6sv3o6VEeADGtM1kHPLSqNE82RW3ucga95z2kdA4ApYFr9swHVkktDdXho7FJCp6amw4i97JWbZNXTbidY",
  "key38": "2mYhrmY6teNPjZhU8mTWDqBDtLEN2wmXkenT5cmPqbjXAHWYof6Snw4roNvvhz1vVPBr2qDXPjzYGuoij1zNZDeZ"
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
