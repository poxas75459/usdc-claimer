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
    "5bYqpHyB9N2qUFJG8c15GfvWkvQ7Vpgp3RnhKVV8Fp4Ek7xwmNgFqAWmgHifeNrXYS3ZTe4RnpRnhWBV29HV5fJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Wdus5xzEWM8WPhw2reF3XVYsfVvXK8bnQWN4hijiusQkewvZerfDqhqau8eqQSwi51rUgpbAkeitwX6DEx3cet",
  "key1": "6v8Nn7w58CKNfAuTB7oUPzHqGS4Zx41razsk4iSQJS97ArZBAnnV1KVJ8Ph1Am6AKBHsEo8WUyjRCcdyLJhTbR2",
  "key2": "kmzyB8FTc2ffdw1UoNhxYbipH6WsnZ77r4y7LveGKrftBoYvUdn8vipftU41NZ2226mxQ7ve6xF9DfwxgTGi4dm",
  "key3": "58CLe6thMWVnN2aG87Y6HSLoqZXGgZbJvCQnp71xdGWPFVWoKWrMD2HTJTMoqv9S8QobkiscqaAZaBHjtbJ4UQKX",
  "key4": "5pbka9dvHihbzXoopTJTdsLSwNQ4dHWGKwM183UH913WiDSurZAGu3M3uh2dswtd6rENAj1TsRFPp3o5g4RbZbtS",
  "key5": "43Ww2u9XZkjMry1BYYwwnYJEQ8Nb39vFS9JVChvEfLoT19Bwje29Ly8w7tLbnQH4XFjD5rZW6vJPgV7BJRK2H3ZK",
  "key6": "4wFKkJ7t9rd6VqysbCFanZPnixv7jGhUuQuNwM3FEbMRkJrrtaa4nrgLToCim8sK8joP1Ca7myoqbjHSFnuVcKYA",
  "key7": "9jp4pznB4wAzNncHdvs6CRCRcgxJK8pATkyBenhnb9P8ihkctnBZYon1GrbeSgaEMwu9HxbhNMkt87GYwC5jbp7",
  "key8": "3LdaSGCCvkMjcaxwTS1QGz3pPsTznqATybcqEpfQgNQJPjGkJSiXZSAYXuB65Eodynktg9cJ4Hr6Ld5JDFaFqPvk",
  "key9": "qYrVoM5D7k9sM2iaDtmhLJWUTcwXqZEHuv2woXgVgp66tfSdBkW2P5nZpECvkTRP4WXv3s25N87sTYhWumWQgSn",
  "key10": "4azKTCoi4hLiXhvoGKng9q1HihGcGwfLtJAY2JLZ2JrLbg6sZq2Qy4dvgTvWzJbbsgzXzDP6BRzrWsXWdicWbEcV",
  "key11": "4Vx8d5Yz8Y8ipsazufdUvBDoC6CEJJmDYVCUAURBy5EfKd2YqcSAkHwcPizVN8YsEd9DFmGbD2YjsjBFMDrjvsJd",
  "key12": "4FpTpLA1vgZq9SgiAMYygVoWfjQrWJft1jNYhpx9kX2vtAb3hhjwskUZeqETEhuvyERebVQkSrau8KxXK9snZq3u",
  "key13": "xi3uKNcafFkzobXZKvzueZeyc6eZi4DxsrBKy2kBnUJMPAraWg3D1Jw9K33JmCaZmxA1r8vmUjxutV7GiBoBvDj",
  "key14": "2CCaqUJHEwQs9BzRjq6K9dQwUAy8HrndEFvi92Uk6BEroZv7fauznTiNY2GyRwyLkChjpWujWWPbFjZs69LtmLQ5",
  "key15": "4TiDPMv3MRJqKRRgxeV3LS8gRD8D3u2LGjxPZN5toDHrTxcoERoEVrA1NUaJK78jv2jotLfQCaozFLH9PHCGyyWy",
  "key16": "4XJ5pMKg1RrNSt5jKtNs7fTEZZoe7dC2CsFpWVDo7XbDXdz1i45HYFn1ZYcLH7Utu1A9ifjpRJNcyoAwmCt7MW1r",
  "key17": "3Hdy1AC6rD6fNwYLFUNn8hadDNBtb5MXt1PWtzNooeQ658WkiPJtd2C8gszCHwu6DEP2SZLDwUJ94q7ehnwGi9ob",
  "key18": "2wkLsVh51dprAS9tevEYWUi6YZkveVKn843ZuXoe9xTaf9TN4jFQbHbooBcETfGfoUS3HdAxR3iytqgNB9W2383H",
  "key19": "3Tanttb1jSuYUXvt6ZyJ9dULmbnj8yvb19o6BwQBXFcQHs8WanjRnPRBZtRoWwqHafva9rizKPiWjaJCf2hHu3gS",
  "key20": "5LYsfHMAe89Q8wDFFJfwiLZDAXZMoscUawkpuvHEstaCG1bSBbWC5j3jjL6KVBAk6gsiaEvS1Rk8A2EXMsAQF1Sn",
  "key21": "GZPXV18Mw5JJW3PhfdagHcLF5ZVm3UNkFZwcYqxdismYg2BNUS9fgDrnzj5jpb48Ux2Dgo3VoC5F1US5Q2KeTkk",
  "key22": "29Ln6ppq849f4Ltk2uzJG4HDjzoVEfez521SpNNf6ffg7GZ6kcpQuNAmLQ696jVJfrd79JSkmvMEDL6Mr4jkKqss",
  "key23": "WL8ULTixHTtACuzZvndjWuAqeMGDfaG6cLYAuLreGLLWBaRzTZxRMUUoQUkktAu5Gw64ck6UyBSw8j53qocKPoz",
  "key24": "ZXy9utJ74XnXfiKtgAwGPveqP4nNnCfWH6tWfzib1ADbdtvAa6PGGxYtbrhvmM6L2Tr7TNDDzxvMxz8UeJo6rpN",
  "key25": "H5XYWeywJEMBgCSUGW94pVCwWNaPHGAsRXp2dPyW6rjmpAyGordBaYvSUAodfxgjo3BCN5BuuBW1Fg6LueEiFvh",
  "key26": "5GA1eLBHMs7gR7qYRF2Zidix7WPx41eSLsd4VaWdcPGPoeShTpywmCKjWe9GDwuRabJVw7TaWZKnBhubGrZysyeE",
  "key27": "2NBrj1fFkcVVq9bsxiMrexY5gArWEHe7PpaoCkrnJ18hGi2DcQasM56T7nfFC9bTY7d6wdEaNSWJeUBUTCU8w2qj",
  "key28": "5LqXwTKHpMZguYp6Zb2k3BiRFdvQUGcuNDybyrwcGFyiyFynEE2DMwMu9U6ScerMDxVi7BUnCpw5iwBjcrsgLP5",
  "key29": "3SacJPEs3ZQDJhrajna3mi3xEN62V83uXFiHaB5gyeRZcr1GxurEuCpBRo9TRqmmqBDUbiqBr7HA5gQNiyvwJy7X",
  "key30": "2B1CDW1592j55HZ8V2MnYbF3dg8o95Pu6GvfhoFSksbDQfQWnkWGRpfe7CTdxm7myZ4BpxZFxhxzdKgLg8oUnXbt",
  "key31": "2uNqnaWtygYpVWM8nGyAHGcvgDq6q4DZ24ZTFvbsHBpfFs8dYh1Y3QYA5noeXkwYz6x8t9FTzcCLYnTZB5EUYP9s",
  "key32": "5uRN6qMeTsxAt1BaToBm6od7MuBbTp8MXtRLkkXwNXRmjoDqRZY6xJtowuj3T3pjFdujiGUPF6wUs3dBLGNRvsG7",
  "key33": "eBgg58dCgPZgop83GSzvWNA5W1KtF4n5pbu4VgCt4ApLN2kFVyhvSeRSE9ndv9hjXvsoqaM2mRMr5QWWTExFaJy",
  "key34": "vwgUaAMYGSkjAn6BUpXLQr83h43G4pYpLVbJw9Ztyn8argTvvjjvTCfvcrFxT3bymtPF1HbJGH9b6ogvGXodUCy",
  "key35": "3XFotttJvDz8rE6nzbErbBJMjPnydLbegEuH4Bc3gAc1vFaXDWNKkPZ415dVGEoTCJ6c6hstWEGSTmdcbiYFoLTr",
  "key36": "4YdSr5TWuyT9DRAF4joxj4ouvbSmuFsV47zjReZQC9LxbY3AYXUMQ2sqvokm2f7fXmkFeLvbcoo1A4Njs7mmKDfK",
  "key37": "5FTyEBtpzGeTSbqr58KAik6ForutPMs5qmNg6ZBEPFsgHEmNpnabwebXh6MLNLE5uboLXtfqvN62L71XnKqbSmgG",
  "key38": "3FLpbt3ucwD9NXwBjrSLnkH9Ew2XsfEAD35z6dPS5LPbrzoYQXex47tvEfCWPsdVqf12C8i1RmLvaKRXAufjrZei",
  "key39": "4MxzLS9efJjxQZUStgzNYzgLfioGDs6HqvBGUxiuMztAsTgHdLYN57vkAuUuG93zYgPP46bDYrsYPGFJygotPi7S",
  "key40": "5GBqqQFsPusX5vJJVWSR713zsX4755Xhb7LvaHyxNrfXuxFMBHaDjqkqzDQB6RhZSkGEXeQU1zLNk3PaBsmx87JR",
  "key41": "4Z4XYbv48y598XUXkqEkzgjiw7ZWwHTop9QCSFidjC6PkNXfAFjjuXZzXJNMMTef1eb5DDxZVioTA43LNH665LmP",
  "key42": "2aMWg968uPnVFHEGRfsLgU7WMVJVfr2KiF6cNbeqN3mnYHoz1JPdxY8UDhSCzgkz4m9A8ipEBAAYtJbRtoDGgvQ7",
  "key43": "4iHPbpoxHYqUCYCWf78P1jEUhT2JgdcX2DWMRaSB8CUnjeJzRA7ppvRFnZ713skg7yrN5a794kuorw1spFFjipNb",
  "key44": "4ChQ2c6W8kmswZXpVFdfouQpPC9h3e1bRMwp4vkvschBFfWyRRRDoLHMTZ43fGXxa18S4meKHSi6kxsuZMfS6QPE",
  "key45": "4teEqQ4Nb3W4j4SBeQ3JKsKY5FA8o3CXkMyFuTy1LvyCqc4DQKk5H6xbo3RyXHoEaRgG71JNawcyDadmDHBacW6d"
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
