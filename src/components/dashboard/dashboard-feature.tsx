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
    "2kogAVjCjg2J9QkKLrHDfJHHUo8eGitfDdFXs14do6auac5DAJ5GTACcQUxM2oc1yB1Nb5G4KtvSDn9dnRK1qpBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54NHpwrmkoZFP89j1ApRQwfZMCRShx75bZpQKovYw7ZtPHVmG8VT1qrUeeu16N81dyxi7tf4YbqU9FGo8W4LRj5v",
  "key1": "VczBzNNcLiBipY229KiiUiGorCT2EcyZUHSDPtCEE7kGZzzVFH7CjBrJDS27X59NB9obohFX86hHS1uPTQ7shbQ",
  "key2": "5QbFEe6cL2QMUvFaGWvKpcbR9uN6xozvdtutNzdHLbJA233QMppAJ9usxtzbrZSSCFn4wEPyt2fiRKZuDXVjXyQA",
  "key3": "Z74XdtxYVwaLeEAVqT8w8WU5oeQ2ViLAHnkh7K5dsDtansbKgFgARtFEmGBf7mSPp85RPdhwhUZBxhSADFP6Hzd",
  "key4": "9zVrh3KwtpDJv79VAkPNqbgjpwRNcgZyJxKoA16z8Ldp1ww66eTTxXc3bePMLvpyVfYqqK3cvkniX1ChKa7Jb31",
  "key5": "3e831SQDuC9Z15wu99UyPGioERGA82X6ER622XJj7dcUhNMxat2Etn2bNyvJZUz17x6t7h5QtPxH4XuFvdW3gH2v",
  "key6": "M94SG18C4SLPXZpyCBQ4HfmPcggvh3fZ4PgWtZ5DR7C3ea6Hxdhdw5VttCo5d86nNnXQF2XgYXmofef5C9ApVZa",
  "key7": "2AFHA66hqWE5k5pSckf24Gf1dXsrvUeiZSEFGpsP4wPjYLtjssnS3N8TUfLPrKjfR5yrit4KW35K2KW2FAf3ixkS",
  "key8": "34qiyV617vMFAAukaNgwTjca8kSJMzk84E5BnDGCFX3dz9Th7TwxtmBiTinpKjyQb8iMQFo25mrF1qNom5gYXSAt",
  "key9": "ULFmvnebVYsVAcHkVi7LusLqwK8Jx2cnSiCvvZn4jpHEtqRegfdqbN2B3pY2K7d8hHLf5JXD4ghS1P9Xw5EtD2k",
  "key10": "4v8npCcqYkHCopwkNSL7WjiQmiPSFZd63YTdmEfEYrr7D5XUYeCs9VJTRUDujsxuK8jQh6MppskWRJYkR6PRCeZE",
  "key11": "28ZEk851J8hwgQKihdVvf4w7VjkQyYUAvPWv9qxSEpEx2mrc3tZjb4J5WNR5vZzN9CY3NjLToLs35ARX9YJjd4ST",
  "key12": "6hpsXKHuDxJEheY13WbLUge3nmN9iAuUWXfrSPhmSuVUnXcurJk9i537JvWnD9JRt7K7n2S2ZtnEYZxSGDMpmjU",
  "key13": "5VQVCa5QSqkUxBWA2t6xVRgoSGCmFpCcFxMrWCEgFPjMkRvcs2xJnx3qZPG1QebuuCKbkSDr5kMeLYRwwqiikELf",
  "key14": "3qwAvQ3KJtWrUbMu5Ev9yHoth4qVtnnVjNkmeJQH8oQMQXWBSp76mRUmHV7URu5bD9u7oy9hASuC6jsCnKWChvJD",
  "key15": "44oppMcFNm786fPKbLcE1QqGT9fw75bhq2KLsqpoD5DPEYqCbNtCwpUYAK84D4zC9d8z1xXRudC1qdgnwFfDDk6t",
  "key16": "5qTxj1sNSSBhH1wZAkKHhqQ3jhcSZrGooz4UUXgpu2TtATmQBVZbGLCtn6wD1tAjs2hpCAHfsDKdGPVHrzet1zmr",
  "key17": "3tokaz9ujTQThnmCFRxxudwwaKbmBPhqQGoPFhmhtTyVaQMtBxM9RaL8PZXFPgNcSAuwsyPZFDgPLwYjtReXGo5g",
  "key18": "2DeHqsHgk36ZFyWTv2aAJVf2Fmq6EnMxnYtmszkr9omsBwJA2A61yfqyLtTAUJFUTPbH7CkD4Hh7hjY8VzSKfPrb",
  "key19": "3yzpjMZCzwU2PrmiwwVibdDxm3wfiveHMyzSN2jvMxh2MhBWCeKyfj4GaU6j8Zc4EmZgmpiDXHRajK6jj3V8Hqqk",
  "key20": "2LMnzfdTzYxyxpFfnvXByJTg5H9aR44JwKE4FnZqkykJRfj5m559N56urM7ZqVsmuJ3Bb9WovgC6LaZrFgbW1njj",
  "key21": "4djKBoA4ptYZPamEMbWtkZ6HmudXTT9rL35RLWDbYqKiDhEoeqzFoRtZJ9nT9onds87bFTRcBd7kKNsNGW5qEYEX",
  "key22": "4N7C2dGCKe9HQ7LNBzUJ1Di6XXTRcPfLsh2EPRSZmDSVkmi7eQtXS4Jon7MkxoZKzu4hdJN5CAhVfGHkMTXYVgQ5",
  "key23": "2iUjo6xFMwvN67yYyy8hVeeHZbcnENwJKouQwrSjExTPeWC4iWdjKVUo5VrhhKDVC4yrYxBzgNnpTufYBCPVsKNE",
  "key24": "3Z9oEorm6k5d64UA1ayTkLxkzTSEUTcSpMtQoyRw56xQhjQpzXvGAmynQphsJTGHYbpcNYwJxphRbvqA9i7GHPLH",
  "key25": "3jCB7uAERYErKU9hCKikkq7CWavNAyHFGJ2fEKDR1fCVpc1boVGaXzbhpPNzSWa7qXaA9Zyx9Yjkv3UZR7YThqZW",
  "key26": "33KjBUCBe9YvrxAi2HAQL6bppQmNdvC5RgH7kwMDWKsdbqMQbQL1c39dkkExRfUV8hbgksaGF44kLbNSEN4KEh5k",
  "key27": "2cyhYPWFZEVgRoAoHD5ju6LhBqMrRGSJxpcMffApMhF65DJC2HNmNeyKJh4SvKNhtSb7EbBLLxKxV7VSukKzbJHD",
  "key28": "5pXV9ppaByNrcQsDTwKcsHapRW2aKoDDukgLZYH2sKuNnkRRpgfe1QWTBwanBmZnm8cSYp5EwrejjbgRyW8kMeuf",
  "key29": "4HFhFvA4c1ekkMEWGYATNm9c6FoPqd27Hx1yNApWEypQJ1PyPvvBbeRQxBVzchL8RS2mUjUUo5v99a9JRZVsBDEU",
  "key30": "64eP6iTHrruMWfJEthezNiSgVyY3HpH6f44GvaKCzXDFxg6TBZAkY6ALRmmv5dfNqbJrggqxhqkN83z6NGEDHnta",
  "key31": "2kp2ywfdn9PrbTnUqKy6BtjSxF6PDLDzwpcMGxTQNVWuSyVqYJWYVRKMeddvmuRzrmK6FzgvGSor12iNBvJq7EbV",
  "key32": "4CREnvrD8JeKjUpuokzochPbkDUTkuuBbMiVHxRF5w9ivqhypx1wAVZj4VoAgTC255D1dUiZxsCJ6zvtfNJH2h8p",
  "key33": "UtDqg8S8rqRY59VaPCTcV7rEs7cdbxerd3qwubZiNxNxXb8DPVRiuQophCcpQXzfn9CLFtmF9uBp57nnezRz6ws",
  "key34": "4YXiRrHbpZKA4WFqR7PwDdYCYzpDF1D7gpb3tiYyDYvS976i3s9GnysSvTvdnqGsxG8DgMQC8TLmsGjai6w8cwpd"
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
