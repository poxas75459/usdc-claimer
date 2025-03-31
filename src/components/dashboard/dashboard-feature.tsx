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
    "3FNHSNTRnFSaMcyU8YK32zStxTL4C214RhrHXrFFUbi4WLeBqykUVnPXY3CZK6qBZuC7QomjP4VR7yirkoTDmaCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "osj7jLoQA61hBQdGYvqYc2Ys5DhNCv33kKg7h16pgroJAaDHtKWrwbvLY6xHAuM9fSUZUwZxMWJJfLnNk9vwewU",
  "key1": "2nLN4ArMe1VLk5NX4y6Lquvo3aeQPmw27kQMnJDqEawxy4sQm74cnpCVADP4TWWJQpXoDD39yuy9mTngDztC3GPQ",
  "key2": "4hbY6K2BEoG5A1xekdrex29wAAjHbTx7V1pd33a1MkavUH5sfHaQVWfJWGDEbMXjRNhvtvthu7e85rzRaNf5sT2r",
  "key3": "4ZSS7osLEHG3yCqj6NBz55KM3VwWcyP85pJWkKkuXQKYPeETpkyckim7kkuTRkeiBt4wprmdarSpgMoipYsRMet",
  "key4": "H44nTCcdskb25at2dkXfeyHnTb1pMBymdQnu4aTQJPaS65UZkDo8NfGjvYQTZ4kev69TDAZrVERiYggQkHj1HBH",
  "key5": "65YyrcV6tNk2iYPEcCQ5t7PP4vopBdvBJ514j8CqyHBA4Kc7m3zRq4qhYgGAE8QT8EBugHCHWmrSf4aBnwuGzFdY",
  "key6": "2aBSvH3rLjm4rCCycexAzLum6711vyJiFwDJHuXop4VR2oyMVbHxDXCX2pGcMCotJWo4eLEbEceGpgnf4sBx4EZA",
  "key7": "4vBkEYZiY3DPDBPW7KPHMZavJju24cEguziUDYc3WgTrBKmwXc4zitZqAZ2WqVgynVBUgdraXTnQdMoEp4sNCMeM",
  "key8": "xyFqVMLx95tt76BeyycMfDsQg1VwuRn21DSQB5KyGVrmoKhQpKQVRtaFRyxxpevuw1MXbqkyi81gxfCUE2V4cFp",
  "key9": "244Vr8HFfsCeB4EejPfeD67fYx5Q9Bhn7VLkV9J3LcWaVTZzB5vSNoTX8HWj4YjHgVFa5NkeM5hNERucaiWHHmd2",
  "key10": "54u2yUkwKgytHCEzutC8jy8rioEtcr4Y4ten33CD5GVFyrBzpMt2WXJeFHs2TYHee3a9upzSEkFcJWdGmvHuuqU2",
  "key11": "4gPtMiDNddCqqPKek5epgkc5NTdSznPvM2aWa4mcrAjmSc19njXscX3Syaic3qK1aYQd4h96jrLkKjBxvvju62qb",
  "key12": "4edWNDGwNV55E8iGo4G6U69PuffUogmTs9QjWxfbx9G3AtMg5fPkhM5h2Ey9yaLoMRCyEUvv4p4cR9ZFU3YtEEGs",
  "key13": "3GhfeyHiVMVjbUPeYnEbZYibyhM4vP6GWPo1WQv5UaRuLLK59Fah7UC2BrpB4Skg5TkzWe4uDWBcukBw99C4AitF",
  "key14": "5A741Sa7NRunAW8Wd2AGEcANWXccUdpvzF6KpTiTNR3vhXQzTeTpCGkmcbHuyYEqUKtSnFYGreCwiQ9nfzgza2gd",
  "key15": "3pyXFn7t3bijaWVaU8xjk5y9j8gMutJyMC6LodZHcQPCkzugFB2629mSJHbhXDA8yPXXoSkeQ8FoW2bQrzSzdd4s",
  "key16": "4Sm4RrdhA3yYy9fgs5YZhUp75VyA9KjYGV5DVNwxzTyxY4D2UvNaUqDhgxM4EGWXWMUcCsQzTWvXzA7XHhjfkEx4",
  "key17": "3dj8TBU45Uqp4eLUm9PNYZZ1J3DcaLAPGGrajhryk59NkC3rL37vFypyo43ZAd4VqRG3GrTPuhXFw4A2vaiXX5Ry",
  "key18": "3fQKRarSVnfVSY6epzUdGMzbQYXoRUNeaVdtSih8es9QuGEMh2sVPMLogE8d1G8erMzJAskksbrq9RUPLbZtyLeQ",
  "key19": "3fLARP5zv3jEW4S2Pp86QKBKiboT4jZWqMb5bZrGSxNSraMxyPTJAvHy46YkHKHiqVVKH4vCLp4sjGHhyzRKMoVx",
  "key20": "2ypqN3JLZpfXJnLQgjXru3wurpz5Pp5YQePZH6Asn3zAsNvEscjY14NA4wUqQU6g1qWTWtwv3PUBMxcd1j3ScLVw",
  "key21": "5N9YUpFEcGsVNKCxYanyV5XD8jLK3JcJXGDcmvJADjCGHmfDHD6BH8ubMPX6YKHmWMxgLCsfyEm2z777hkVRjtKi",
  "key22": "vMcC84pG2AkNJExntCxyhvtt1568gWCRZz44C6tSUkRkm3hnQjzPL57ToCJomaPbyMtTgbp1bcz7tZ4bAKDxWwF",
  "key23": "3UUU68wQH1UeSqBhS5rktEY3wohCmMGyDTXV47MiEL9woU7jPVcjNTP9qT5n3QtdR7sDyjBkiCAnVVokt2sbAVZH",
  "key24": "5ijRSjGYFy5bg4goMgraJLV2e3BMmxxhmkSkrJBgZh1NHGGPQSoRZE7oojymge264oT6peZJoS7BddZgLQ76gKfb",
  "key25": "3wbPHSKmfox59RVQjWjxBY6fHLy3SZBckiDKm7QBiEQzwt3pDd4x9WWEoAVwx9VBW4irvA1fy27i9B2sCtTwXE1M",
  "key26": "4rVxwh2BwxJueZdHEhQSFiZ9wTWrEKYJjwYroP2fqdEjX6SS7o7taaRZGYEquey8FVqDfXuDMhs8VCQf3EHZyUfE",
  "key27": "3cFLgDzghBfJUoYNn3FLtJuHy41rfKWm8Fq5wH9MemdSMCpfWXXcf5AecsintSkGEYQkUn4zH4XoMASXQ6JVgrpg",
  "key28": "Mi1wzdpXgWgpdbxGH5dWsuXfgF7fGyGMiGzyvHUruKbytALZG3mhCJQJwhf2BtjsN29BkF2VqWkCmJuqaApnM1q",
  "key29": "5ANNN7mL481mgAJWUxaEJvxESi1oVZ1NtjD4DTRiow9QnAE3HwCFSCxKRmtRPqau3WrXo7QuG5PDio5fy9JNRKun",
  "key30": "2VifTkG5C8v3TtbQUC9ZuLu95sEoon4hwiMDZ31qDWkrQGmwUvvK62v85QSJ2ZpVS8YKh7UFC2x2o55jvJUnCDc4",
  "key31": "3Q6Hk7FFnXzpFo1VPTZpBRRRPAG3CFwbwY12kYoLZbReVkfe7SdFUMbkjR4nGmebpcSYtWY23HhEXwVpY9K35GAz",
  "key32": "5LxtuBju5xQvV1ER5316PBbFbSfs6Lp1vpFFS5ys3UoV47YfxAU6vUyqdg5N96CgVtxYRCppnUuAj5yz8ACFTAXR",
  "key33": "o3iKz9rzXtXfdSq6GCqxXBvxQn4ddjcba1d1J7gU2qMNfsENFxirsUetaFE1iGpoBFURvVfAL8rHhQPzx5SWcBD",
  "key34": "3gz7bS3JibkEr1Yxuv7GdhPrkqSvVCcYmekkMdpAhDjHYFaSewRZVhpxpfieM8a7bX6GrESNKXLsYQVaEfZd8or",
  "key35": "4y659411fHgKDU5hWiBWd4bxMi3qAb2BSthWdNUjx2r4kyaSw4vn2hUqKi1rhJ4Y3mLq3aNby2faHgpwyNcitmLm",
  "key36": "4472BTC9vxpJUSKWCP4pvBjTgaFfJvzKXsA5CDn9x1dXdTKXeGaHLAuEnacW3PEt2PqZJ9z2PBsFJ5T9UfH3sVeR",
  "key37": "57yv48EdMwnAws1BNvxLpAZBr9XtdhVfemVS3SDFSnYT1fCpEj21z5TQKUdSBJEME87BJGZ1votbqsq2WBcBPzWf",
  "key38": "4VecCvBY9pP1zYgSJ6BDQWPCApuaJeimFs2YK9pHPYM8fWd2umU5Yv49bUNXpgBzYmoYF5EFEgm1grifJhHgEE4M",
  "key39": "4i8qcA271csX1mWdScpsgzNNGzcZmxBmvN7KRwCzp2pqwX7t4XtuwH6MDdZXaAvhGVP4S4N2AHi57yLrkhLkX2ri",
  "key40": "2DXKdFqSevWK8PcRUKfcoQVUipdn6Bq3JgYuc2U7Mhgz9qBBqhz43PTi8snJgsvQ2fpmjWc1mgWv8dQ8dSJZBjb3",
  "key41": "5uoa1hm1J8UD52yi7Dt1PoNysKQWKtF6bB2dq9gZBCqLHfZYxMW2cZj7ZcWhWrRpdDN4pPk9PzV99CXRLahZLgxy",
  "key42": "3VKCVKQRVikZ5HJpqNvk1QE83djsuc1xwEBmi3zLV1NYmTt19Sc1YMKUErQmsgmTbLts98b8DQ5CLwyBMBXd7yvz",
  "key43": "23zc97GtrSzusy6xFhXMDYCtWLij5Kc7ve8QYFXDofEx2NqRS8kCB3gxvDf1yLRgiE9Qm4rzxF5Cayd9WFPaa3xD",
  "key44": "U3UB6kzwDnGCpDBBPxQANh6XDG7httT3WgMqXMsRw4ATsHBVegyQXwCorr3WXrhnyUWXDjAjQiqDHdG7PkBuMkr"
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
