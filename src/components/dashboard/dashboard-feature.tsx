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
    "42mMrGzcvD5WoTXgpoFHt33NPewN5cQpabHhAdtqaTgSkqXn3XQFNoCVTzJkDLtQjhQW1hzNAqDdZ8TahkAqR3c5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3St7B7YpY6qeVsF6MXmT1ihBS9M5tztppA12bfsweZz9szPdGWV2AyMf23T48ZNpcwUT2bmdWjh7KqtjkdM2zFFx",
  "key1": "43mGQ6zhTCcyX3ZcPYnVz9kfZTSeyHcMmBSxVk2hz1HLmfeM2tDjr54xnpL9FUJAF8UyUE5471c1Qjb7k7acwDdr",
  "key2": "x4NhSHaWfG5W8cRe7G3Bew1X8RTo7FHKb1tsnEfowSaBP3hCNM7PWRkjkn4gFFaoF2DeG8hGG3aEQ5WRN69wqCw",
  "key3": "Fb9KZvXRzLfiAW536JBgTW4ff8rgkU8vWfH9aYEUyTRWoE4bLJs3NDrTDxw2HSu2qxrvfamXSqW9HAF8EbgdjFU",
  "key4": "3JY4ZKdyBMSxzZScN6goUQLQfbyRCTBjoswjRpvz9QmcpemBbSw2GbcwqgYzMY9zugYUkQWXSMUArVagAfpQii16",
  "key5": "51HLgKuA4giBmWAwDHkyG8kddrpcWHZV8xzhBrNBrQuwF8L1sjJ7pqmHHmL5qteAxE1QJc4zkjxbHc9cJSEJu3EZ",
  "key6": "3By9QoCvCj1APY6khapjTemoQVbGcD6SJmo8Qj3gmMBLKvZfZNrZGZj4yCVRztxxe1xo4BtVCUpJfEayJx6aa5dY",
  "key7": "2fB22JEGxe3PmCX8uAE65pTiyhcfPWfTbA8Jz7HMvrpCMpCqewjqrkSS4A6k2J2qedLPSNXPgCqRs3W3KgXmag6j",
  "key8": "5rdnmhiLmjFUx3x2AeDDRtiDhcFX9Pp3PhBBn6Es8ENisCKyGgkTrjAxLPbbNbmnVhyRwK6foX6gPGdEkWmpY1bT",
  "key9": "3QpjkuDbgo17tWpXA22L6zyNu14LvRQ62tsGob9x9ve4oaTk11RrMCFxoh8Bqjx82KNmuEqn1iyDtRfEpwEUJCvJ",
  "key10": "ZNRQrXtiWyGENsZRUBsXgKAhBGtM4oUZ3GAiWC3DwUM91Nc9iZjR7BgWsxHcK1TocNwsAd82n4SZKUVeXHeSy7F",
  "key11": "2R8igkL9K2HDvRnyFYwgNay2nbbyaTTb4JVwnpFRGBaLuq9Xvr7G27FmdfQayrghWbQmYowzEmRFm7sdJctVuBpT",
  "key12": "41BqbuaypXhFdFEf7czDsnjn1GB9nHyzRMQeCCP6zPFZ649ZjiryuFGoKMVVhvgK1oPBuJF1XxWA49VuDCjbZ7mM",
  "key13": "3vAQTt6Lg7PQ1a2P8YSTPSaxTbVz1BAfi7y3QejfDpstosB1MFZGNWTJjKfVFxXAybTS3Cu2qD9ukYfAAxpZb7DW",
  "key14": "5c1aQaV8G4TCuTocyo1TRyoQ9yDUM833dBaejmzYqnSNnR3yo33DtzL7TNm4TYsFf93PkAuvcLf5SYAFdK5p5vMy",
  "key15": "4HnowpptuSGpqeVRRFoC4X1bKL3d3gdRTDaFDowew7eeS1gQRmAf3wQpGKZB2iNoU84FfBDixV1TnrpKC9hJ7np1",
  "key16": "4jV7YytSFPR5k2jGjYHE1PvZyEzowtGw3EDnnq5ujM3eCypsZAVdx1pExu9tzEBs6ToEm7LWypCG6Quk7PSKqmtL",
  "key17": "jsLodYuFohKeQ3xquqUCMnDrNF6QEeHxvazesa32EuAnRmHgaWRqsjjRryWocTHrkaLDroPBF99V1x8SkdMoFA2",
  "key18": "34CJhjxxV1iyz1oZy1GWWTekw4oCigK3HhfnqwW1jRkkeNXJVuiegDjQmAfP8jJVj94uusfMC3h8qaAFfo4Uf4zV",
  "key19": "4oFsUVbd7usM67NpjUjvGXWScJ4ohVGtAsdmkPgcvVrwuaWWK6TSPmdEZ7kbBjF72kWiKRCXbG8jYqUbZatpjhj2",
  "key20": "4QJtPZwpK5Xa5er7AtFfxEQdzqcEw7eevWCfSnUtsPE7XYMe7p5jngwy1hKzAHqmR7nBddxbi5X7mkYk3F8CJ3sX",
  "key21": "2USKdfe7iWJqjZJ4YRCCHQfaeamy398y4s5wiAMJbgTUJ4wMPB6U4HVTwtjtLfy5QEkctTVG1fETsk8pz1P5yHEa",
  "key22": "QGobk9WkuLDcasUUB33gSz4CFXeNSohhAWaf8eeq8gRfRvfC4uYCpkYqUjgfRKkhUyCyyWHdM3m9W6j6XcE2X8P",
  "key23": "5hDuRrWX7CEKuirpNqGszxTiGykPrgY4E3Lz99LzAmAmTw7J954feYX7MDNcPNBjc7Y7Y6hj28h1563doQVz4ZTZ",
  "key24": "fjPHqVPCYXnDAxBGoKRFGMU2MHYMgu9SJi65N9ebRmxmF4UPCUTRHaboGQ9TXAzVajZudGE8au88cLTPdss2bJW",
  "key25": "2g9vvfm6ShVy6KG76jAsS55h4Uj4cJABL9S1SKHACQ1nmRrzKr3pEb5sXaE5sSrMFoSA95xpCYJ6u97pinv89Rbh",
  "key26": "3s8DoLURj2PVFWQMj2atuDQqDRyaCUSRRYtc9nwoybuJMnCWu4ZxroyoCNJbvkuaeDrYvkUUkDcfbPR69Agfjicz",
  "key27": "3ch6K4D8ezscCCbfFUJRJAdAsua4GB4sHyUytMTDYzaKDnLqLjMHjHaMdbZwkMkT6hL56oBaRgAAd9Udn3rCYzZA",
  "key28": "4N2d9skfFQU4s7Mt7oxxjSPmAyHMvfdNfV8uRxwEzqJdBmyF9ViMJY45cDuACv9ghfHPBuLP6WPhFFy5yMUXNZyr",
  "key29": "skUwwpagBiRHHf4q6Za5hqqxNmvB54AgELY5LZQZJf8LWALKySsyunXJbvwpf5JSC766VG3Kwp8QUxUTH7jz14W",
  "key30": "R8BHxH1Dd3RUb2mAFXRHXFu9dB3LQUgzvi5RSBxct9kcwg7Vex6wAytAuspm42FKSzAHqo8m8KP6w2oQogRqUMX",
  "key31": "pUkoXRBYtuPwLxpqgMLWdW3GzJvLkieYsJ2nRrAjaiYz6BEfJM6z1etVsquEn51h4j5Kuaxaa2eHmvU3DDqXQhv",
  "key32": "3aVaHhUqKWQTXkpk9asqgqHN2DJBEaqX4dECvKkfcpcEhw6rbrSTK53JeXQwXgu3pqWnJcUQoEbpw95VVZYmQR4b",
  "key33": "5nnCWSRGeyN4HHTGu4sBd3Mc4vRGLvzVuQNTpN1peRk3oyTgxpFA6nPwaijRw8An3vWxnnS45LEnRXRx8YeE5rW8",
  "key34": "dxKEPYG1t6VNp2z9PqkK8PdPCmh96BUNHpo5JM9d2v3Gp3fUmvq2U31HWpA4LqKmzpXnxzCdemoUHaFXFxYC4N4",
  "key35": "2Rss7mPHxj1qFMhazftHkpbcjUBSx7deugGv75fvATDjD2AyHw6jkcBfgPZp4GKAb4ar2XRXU5JqSQVpCDtDde9q",
  "key36": "63q2Q9iv4bd9bfPyC2q36jsniLBQ3TnvD7nhrp2MDQpzkKqCwzFzQ7Qe8y1nfthEy3zzaqCU16xur7awmYt2pP7L",
  "key37": "2VFrWhMhVL6KrdkGH9tmgNsMj8MPeFZgVL26TYCZ15VZCcjGh8dDM6u3nVzkee7rvsRDF5VDNHBTtwEfrYZa1zi3",
  "key38": "2dc7Z8gPuymyX2MvnSywdezgQ1VsGrZQisCWjcnVnzSFTYTi4PGPmtWciziVzJKcVsiA8s64nWVzPCzfJVCXke4x",
  "key39": "5GzY9a31XsPkFiPnSKy6bYbt6vTyhWEDA6BR1qsEcU56xkfBbmHTkNT5EvjoBVDe9aDuhfknnAsKJfZ4GJCdRiMb",
  "key40": "2YsrVYRrcLVJTu32UPP6DC9cnxHdLYtCRnWTRXJ8UfGUoeu7SJwNM2D8gtxu3MSrXvB2mSjBg3GDYXbM1HubHXxX",
  "key41": "4rJEuoaYWgAsVYvTbPHRuBzHKbD3P8bTbHNxae1xArbyjCChTPSw3HTNWPVFXLqx8yGiZEsfoTdLnzobCabZ9b5s"
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
