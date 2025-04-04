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
    "5epzxnRQgftMLxNrkaAiGirgCH9TiHkFYinaycC9pEwn2UYbfs5rTXUtPGkuxhYm4vBKeARNmTRnas2u499yqTMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wrVxRBXhEj42KDMk1it6nLS3AUf9QeqgpSLBgaa17azYCJUxtoUYtD9y4jVvRFUttQi8FuSAaDpwbAYe3R3ZDaw",
  "key1": "48D2ZZEBQPcEx2D5HSGNRjSwk3Pyx9jy82Q9iiLZ76z59dxeZnjRBoNCSPC7FNbm5azT2oWXVujPHsiBwgYupV2e",
  "key2": "3wVb5xiL1PnDML2SzDpVtZDTfdwL74MijzGU5BGfCZ1tGtETkLdVBEB4d5hEsxhm6xNvgYV2ytbpjb4KUYtMyhK9",
  "key3": "56QcugCnQpm7YpY5n8H2BNMkzudjVTXJ3bSuyMUXo9ozpmUQGG5Cu8it9tmbwNtjSRWvw9MpaobYDCQLqKUUpJM1",
  "key4": "3EvXQ91bWf7Y4k4qiszVrLQYjLhRsdz9m4NHJxFX1zH25Tv6jb78rP292NgwbzrH2JLWwZoSUtWTGj8xVAPHrub1",
  "key5": "2ynsEvztB4cvdtLP5tnEYmuD4Vu2bL6chpBsbz2oub98hgiRmRSzGjjtVaZjrrzjoysJG7Gm6SWfQvN7scnUNoEN",
  "key6": "3nkns84GPeipkgkYE7Y4tJiAekcMEpncVfNbPNQZh64Q7DQnPqccKgYTg5R4dE3JhTyXK7KyKg5kh9jLFyt3ydVh",
  "key7": "2ExKDoK5HM6FQJhGmuPgomeyn1eA9wChtYVCe1NqQZqaHviGMZuCkkz1iPmaP2QyfSEYEdDw1Yus7ve7eJZsrd8F",
  "key8": "3QEmA32uz4xtBdaXbaf53VdHAziDNxh39hiDum3ezGjrL3qwHj2PEFThNvJdVA5M9JWoUEWDwwszd6vM4oaEaN8T",
  "key9": "5LfGYeSQmHbSPAHJApjg8TcaBHah91w46cAxkqygZdDpUp1sLi8jEidbzpe6YCCwnnxRxMWQTx3T9izMjFZd9VbR",
  "key10": "25ns9ATrEUYbF2aWHznXx1vsTdC7A5BCUr5rwPm9MH7mbmszFKJRjePtckWUybHxoSsdBi4mu34emFgo2tCbxcDJ",
  "key11": "4Mjc5fL1dCgA9FmgEuTMaXBbvQbMhRDTuec5VKoUETdHG8GNtcED3irrZwYoZHFPbMPqXBdoRZ9tLMSaPtjzAALW",
  "key12": "5T7rqTWnUXnAYTkzcMZHwm5v2Uw3EzPKAGcFTjyT8nWPyRnvViTKodTHfQGByKpUjF9yeXVYQtsvDJKmJ3GitMP1",
  "key13": "2CtpafGHG1xkE3Fzfbc4T6mMpTZCJDm9gQkZ2tyRugj3GokdBsSz9Ucyn9SV1pMbnvPQMMRwnea5hawXuZaG578p",
  "key14": "3ngAG8ko3SkCpkHjv44qhqqXNQNaKBnMVQ7dCztPbicoam4wzH2HfgcaTjB7rdAshPY8n8D2Tzozdza9kihkbqL5",
  "key15": "5Jc7NcTiNZe7RPFbrhoHZAzmZzFgDBDFu5orqPVHx4jF2oheuh9roDkmg4hVg6cGejPvDVV2AbzHPGWdDL8wk1wp",
  "key16": "3eGRrHfiRMD5D3QHqtPW8nK5vMztznQXzAzM1mEDcY96nD4QP5jN6wB76myZnZC3ejXkJSekhsy96tJJwwG7m4DW",
  "key17": "5NEF1Q2qi1fCBpvQv1FRpEiqdtG8TGtHgQb8qGgLffiJDcLtRhMyegDESDetGePYNNTowpKjaavowQiv5NuyEuAD",
  "key18": "5PTutjYsMBtP6eJRQyNZg4zFD9xKUKsWH4hPDoMFag2ELqUnLwp5PJ49Edh3D7qSK9k3pjQE8XwQpD7AE8g4Zsc2",
  "key19": "2mF8JGwafjMrKp41dVi4GshgByMmMAWvwoCWCazVWamUE8YB4bHc7adrkgKpVhBYz5qLW4Q7KvfKGFmjk8YsqGgN",
  "key20": "4ShQybCNkY6kyk7ETNS7Nx2a2zq69ZVBptQBA7u4L3ZGduoUWLs67fdquJA29CGLwwVCq2JhXdheKwdQEeBSVe9J",
  "key21": "5pV8Ta5ctfckLwcW6kwkoMX9pAEwBWmwf5szuof3vdFXp2PSEHzS8TPndz5PfYDZTSjUKMUnb2T9YtzdfxQukEUg",
  "key22": "2RVNjNrZgY89DXARsjvAGVvBrrhH3dpSRBU3qdU13chuSzwtgdSUxvwh9gMdPDZN3QM6SYrtgQFuz8VPY6GWozV3",
  "key23": "5EUScMxaHefksLDNWZS5iG5wtWnwJDzhyj5R1KTyF4pdcuvzzrHDRDgjPq46jbPRgqR5vmGp1DaMb2FaD7f2S5Dc",
  "key24": "5YhBo6upqkJQZ66YGic2owE3jWT7Re5r3Ywq3zRJjt2Cx1k8XCrAmNfjyJNpYVbwVVTN26nJagXvMeJUzc9tQ3gc",
  "key25": "43gHJAvyNyhEPjREo7iKMDahPm7mimwpkZQDDm5sD7AhWWV97AApMTBMasurJJhSS8Npm9aY9AGnCqFdYdb3p3ux",
  "key26": "5htM8g8Y7L78VzzSCYqGegFcU67pKF67hBMzr2Au6hTNqVAxJRtUpaj9HqEGEPiggkosf2EtiHmv7SYZBc4W9XCD",
  "key27": "2EvT1P9qAoVVnU6cWp9AE2oryUm3QoWaNGFVHPUV9XufVoqwWD3Nn2XqjdbCPHJYp5HSHVKo18bWNxdP2Eg42evD",
  "key28": "2zw6p2XHraw2KjHfCRKTwV7FCX8WfnU3gRtLuLSTYMLqUA7XNJ1pA9koRpjBqCLNHn2QsKmx1Gw8T1JEUwpFRBUr",
  "key29": "3ZPJgovEJzEB9m6HKdRP3DBv151dxhdpSgsjkMwKRtD38qcgTbSoP5nyQsfzrjXsyVzFchkYBNSRsyZrsRwUEosc",
  "key30": "3PVSjVaVUMXfw1tJgiGLpKpwr54UWLqhR9nWqMqfRZXDAMMTrLutC4AcVezVsg2KXmoZRsPW4fYQmvMcVesak2o8",
  "key31": "snBMFQ73vd4GrGwhRWmPRaVKwp9b7cqxVmoP12pbeWrLsHdPh2UFajT58vmcr9hL8Uzqayw9ckdh85DQ6CuRFZH",
  "key32": "dtfpKKX9uG1xXn9VW8zSLNnQrrke8dAWXUiXMebHCZ94tTAhRGm63NcoZiAh3hdtL2QuaWr38oYxGJfZcZirfQV",
  "key33": "5tPjkZvpjGvbooNHsPRFM6KK2QZBMq5hQkuBh2oqHjC8JKn6XH6PeARRc4sNbtSaqEHEAaYxminuxgzZhw12C2HE",
  "key34": "5VbEyQPKWjWfxUWSJHbx7BBGJbWcx6yNc536MwxBygx6Z3WA7k5DNB2CBy89y5p3V43kC5Jru6KJhRcQeGcL2KJA",
  "key35": "5BjJaDcY9GkTMEtTyA27iKwjKtUR8QbBRWCohRXs3bLpSUATp3bvR6HjVPgV6GnvpvrjL5Udt2HHCR1cDqRn4c2h",
  "key36": "5ndioc8DdUGoKUUFcUMTVQd4XMYfEodF8Gn2a2nER3TSqrTDMBUwLNWJJsYSXwBDoqeTsLnHBtbeUU9WFEspZWZn",
  "key37": "Q5fCjDNB82rUbpMxXJvCo7EtWvh3e9e3L1nRAeVo6osmSiuvegPpb8yShX4TmzhEB3iUeqLYMiFpXmnfb4hxv8m"
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
