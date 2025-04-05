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
    "Sxoxsz1fue5pYGonAgpNh4dy7XcKQnv3F6rjjWsSoXfPgFQ5gp4KLB1fGABmHpJbJ22ftW4MwiRe7fo2mBjm2cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1rGZd8UyLk57aWbprxJNH6v1xnefmPNgynP3xqLQufMFXFiNmxDbUA58oPzx9gTd5ymnX9TX1Eh4KFZAk3yFCM",
  "key1": "34zcWpvbpi78RNBWe5ZFAMrSvKdz7r2h6U7LU12ACan3HdK7F4ZoPXb2bsCg2aM52EeTjPTCweFFaG23jVUR3AxT",
  "key2": "3pxMV3sjjLTNwseLaxbVfF2edwoh1XVw6VdEon2DkhBhCEfwVo75WSVNMtPTWMcyfzXsqMWid7B1Xd3zNGVxKGSH",
  "key3": "49wBmEMUoC3QS8Lin8buE9fNYHeqqNUeEcRcbwKqKwpLGPWC5izozUXRCpHyzd6Yuw6DtzVgCYdYcaiTz7pft1Ta",
  "key4": "wKGtPfi2DZ8yFeUBjJUr66v6zRKtUiH9UvETjwCqT8KUamYoACEzCoZQM2Kzwr1F7PETSHTJiLgrB2SgdbEJkaQ",
  "key5": "5P252AWVNwfG6GxTEkrVZJCo5KMScudSTznYZkQbXzu5f44hEMpJ694bEabBwucA2XQqJioSvFTBpk11BqFAdPUG",
  "key6": "5TpiQZG67nVNcCpcGC51tw2FzKoY7fhooNsfvtyX4g2r3hykMgYh4jjbd8imFuVNomEyUmYZvhvzNqnAmaWBsSXs",
  "key7": "5MHa1BRnMkfpdhakZysSEuV8j9m6CXN6HP71bpCSk9E8LGTpZ9BFxeMrUD9C2nJ9EZRx61YonuALyPDMTdT7f9pC",
  "key8": "LsbgPDBdRLZT4rW2WdbmBbjLk6xRGC9JeWkY9rUPiezyrAs8jpSdCGyetUuJ7pZvmheZ5nsSi7a3rftt7bToVau",
  "key9": "2fEtCAEoggngASMibFHoGtwCB58NKsEwXrYxSwfwfSbTuyyMPLxWMpquc2RMHG7pkFfcZ9Q64u5YckMaqiJ8sptr",
  "key10": "3K7FWycG84ZkGfPtjBJxydJ2LTz1V8dpy4To4CvRx2aZb7i6C8HWwcMkzRJB5gXuCZKCZJsURzAC7BwBpR71W69m",
  "key11": "4ZGfa2PcurA1nm5EcU6QKuNM82EQpxqPx6YUcPaKQnHRuvKjeBanHjbXycE6MYqCjHUPSKAPPKRif1Sut2qKBVSN",
  "key12": "5hVKkmJWKpZExMYaFLfTdodhGCGfYPDZmsnUJVZPhsAkcbTVB6Kr1hgz5iJEvgZTXH4nJin1WVa2hHsRxSWuAStB",
  "key13": "5DNbAeo48hKyYxexMh9zw8u6uJNZQL6xjYvaRS8X2PDHnon69zQiwqfyhtCrv45KqtgZLZ12qbBcsZxRYeEMZJUA",
  "key14": "1FNWe2i7rK36eKf8NdwiVY88maT1kq7z4nak8KRBXWF3CX6RkRTp6Eag1Vc1uqdPrkNQMBuVbWqzCga71WGeAxH",
  "key15": "2eApyEuTTQg6RhcH6trLYUiVAKhLBrtwXkHEmta8iYQhQpkrasAecLoJ6bW77dvBQAfNL7DQBZ4BCgFaEiPp2CXt",
  "key16": "29AgtrinLTeZRxcZ5PUFUuBa4dQUdwJEopNBFfYSEiFe9Rqw79YnDiskPSd4mMeRPz3pUP57oaD3KhNmWQPYMaiK",
  "key17": "3Mazeu1UJxXEqeCZ33XvVeSGHQBrC13u5tNXFVNNDoroMBppYUjytnfrvtiBVPnX8ESXs6eNZT1n8tWf6fQxSbCd",
  "key18": "5drxk3Pgf97vsL3638XyzpxDhW6c1eX2XHAFf3zkMoS9zktWcKP4BbS4euhpx3TYtJbaxHGaEp4XEP5HGpHqMjHE",
  "key19": "4Q7NZb5oY8CzUz2qd879ioWB8TQgyyRMVsjb61YsR2yT9GN6NSpsdJ6VtRJ3jZakJFFgDSNyNJRUJHKN1YWkbTZ1",
  "key20": "42Z67zBcL2K4e2qm7ttJum4pdXB5rugajxb27hkZq9Ryi2KgE3gHZBpPG2vSzFNtdN1JUHrowpKSNhySwfwrRU4o",
  "key21": "2C7Cr1vsSrpM2wvhVLybvVYwsirgFsDsNCTxi6jyGK2wdQJutrDmjiLaL6SZSrUMELrRw9aeh51fvV258qXz2Up9",
  "key22": "5ijPgDiC2jE3hdsAUdZXbzf5h2QcAWdhvMJCQZ6BHbPZGJiTLr46YEdkv1HPRtBErpPGa7rsB799LY9agoN444xa",
  "key23": "uZszWLu4cLGTVtKwBbDSE9p2tmLEQioMMkzDfYhVbd6ecsmfjFrkPiTA7WcmgAYpbCJNUtd9H6D28skjbNcxT5R",
  "key24": "nHBD7WJJcyFt5gBDrRDHPMZG8kfRq8neicr1M233GWJWtRVWNqnJdn76aRmLUB6dQYCNFbfisc968Qv9HjoQyLb",
  "key25": "4scdYZacev9fgRwjzYzzydKLSDPd7WCGqQ6C2twvozQakTZXGqdTrMr855rM5ij2GGvyCAPZp1E5A9eWBi5fKoDD",
  "key26": "23rfuSYWynjAS4xZufP2KbZkdKjNkpcEytJeDfpgoHiZk6JvxJqjWzddh6T4U3Rp9iGhZcDn5QFF8JXDP8k7He7p",
  "key27": "KYLcCZp4BgULUg7tkab9yVdwqByyPGrtuCMNcZnUVBefiaXtAnQCY2gg9xq2WyJU5aYzhBvWCLtmXrrwzur5eVa"
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
