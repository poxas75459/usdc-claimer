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
    "4SrgzwwX1dYXLjABvsC8oKpSoCM38q4ZCiRX9Lb5kSxrK6hvxAC17N1nQQ93PMtG7RRf8XVwc2kswwfRNyqGr1pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmBhc6wRvATW9TSUoP9VJk2anFDV7b5fUvt2WhNcPegbrWaxd3XXU61oara62LLXnpR1zA7YdcmmBEesJtyREar",
  "key1": "23JK5SKTcQF6KkZz3nHuEAExRFj4WLeUtVj2BxNwBRmRNKPytaB7gX3LExRCEFqydci4XPnB76vLyunPbQDopb4F",
  "key2": "DjZBQ22FXz2UzfnxGiYvxq6ScxzMFe9gyifmWMkhp26gLLtYre1nimzso6L8QpmB6mqjJpNcVKeHazN7GQNsnAt",
  "key3": "3uuCKynt4wQs58hgbfpTCpY9QqLHyifYyzp4iYfA9dAyPvvGvAsC8PCsTvjATPHexb3tDqgY8MESGqEAi54ezHve",
  "key4": "2JwuKbHobXM12o5nhgMDKM3L7uPDXNS8FShyrYJTn36AjPms2Y7jDBXUsyRZvVTVCuShXmKVFoE2LGaRzAQPwHuN",
  "key5": "5ikWf2ZB4RexXDsS1dHBETVsZTjnKVaB93joMcuSjEG9whapfzB6wLicAtKainN1WtieWxvK8STotEYR3kFCoa1p",
  "key6": "2phakc2ZUwAJvHWh6Pp3qLAoywLF59hydFr9cWCXEWEBrJrfRuHLTrz5nDHgQYLgg2JZgrUj7MeyPBi6BAtEka45",
  "key7": "K4ojaK5T1oFYEaLNCBWs9ze7VdjY5gZ1N21y2JGJzLgDiBRBvFhZv74BNY8j78V2r5JRMi2VdUiSyRXrTaozVQJ",
  "key8": "5G1ybTEDwFCgQbcFC4z54fSDrC8guSHyAeemj67Sn58iCAHkwnbVojvpsPZmQD9ToqPZsfZKsVu5DLgxuXhtmSXB",
  "key9": "2kdcFHwjqqFmbQZkghP62UvmwKFPjGZqLzFLfuKqHWGPTxCSUKK2QBzsr1WocARB7mbusgrezr7HSucPywTvywfn",
  "key10": "3vuxedtfhXCxRWhh2T28KFENmtSM6a487QMF7tmdJRsWY6wQxg4KibHeZV78pSvSLnh7wx3aKmpfTrvVgYHwUB1p",
  "key11": "3XSoAeL2uPrCCc6oBfqd2AemhphWQ5tu9TR5DPFWqti6rAgqV6BkhFMe2G6AXJ5XBVKPapJdnfWbNqmNco4zT7x4",
  "key12": "3vb4gfmKwztWsFB9SffactTBTjCytAAUjcUc66snXsw8ebV2L1r3LgHasgW1QjGCWrcFJEkE39nzrqojuQKyaQQR",
  "key13": "32kN7rPjinBQS5ehieY3hdYYey5wn86r964kmtoYArzr3zDUhdyjKMWirma1oPyn47eHN9LdQKQcjucWD3u9Qp7Z",
  "key14": "Qg8u5Yy6fWu2CehR9pJAgHgZVG7PPcAoeo4HnbnoaDjoPsCAnDFZdoJT7pBcQasqqUCpwLH8L91fCJ6evNEiTtJ",
  "key15": "623dkCRkyGAYEzfmDALY7wDgB8Nt7xiib1PkDpqof5RioUk1ZXTpsBMR2mX2WX2hycmYqHanrAmCw32zVuNquber",
  "key16": "3iAFHToPBUWkJg2NEGihQsujVW18nGyG73HVTQ2pap1AUxYkRvk6y61EV9tHhBKezvha9nMk47WtwykgCaJq3nMx",
  "key17": "3ADsqwH9hHfvHdCheitCCMpqZnwHv98LWp6nRnnHVkpCviuCF41vDUFXhZghpzvHhQmvTQcrZsdMVXNahc6awLM2",
  "key18": "5u84HMrg1AM5wLVEgizyTfdq5oKof6vFd2YRZzREuSEabeKYSLxiQzsWLHxzhpPcdSHRQyx2Ye9HT7GkCp1wRD5W",
  "key19": "2TgYKnpoHFBxLFn1kPP553FzyjsPjcaS3gSFtD1Ri7xkp5fJEhu7d9yhSdB2EHTU5tzgMhQ8wuzD5ED9xaJS5fEG",
  "key20": "4jjVLqF6zN5mF6ihZfY1zacyBnVCrR1Q7Cq5b31GLDvRvgE1u71QcwtahRemgF9pkYG7N1Cn8FQS3DLaWVTf4vH3",
  "key21": "5MUiYZEGdYPs2ZyEFCHmgojGbAjXsVs5TrZJZmGNBdbnmdeJrxL2Kbx8iPJUrRgkXYVxgxV6yz11EjbsGQRCH9Y8",
  "key22": "5LbZtaLJ1vyM8xCopX7geeTmvKNahroZt3DgApgDB4JCEbyMjbDxUS4xQzdj8kRiRSS9mfD8wZovx7UWauo2BsMC",
  "key23": "ohDkGi6oyDKd4vEFMCnAddzANKZDhwrYr8TuF27f1CS8twb3aNSgcWYbnPF2zNkFemoriopsAyeuLEnZ1MjHdDb",
  "key24": "wSTM4PL2BLJTbD254SRU6M1PqZ9BBYN6PRYFMesH7JVeU95uAfCywxsG9NSgP3ubDUi8XxU9NdxkA1i1q12oi77",
  "key25": "5ZkqyCuMQNCs2y7bGLujSpk44uuDdhQ9ce3CU7MKq57Wq8ifhhzaMF85AaMCHbACiYnWCyS2rhxtUHu4HoQ28HQb",
  "key26": "5PpC9TKycrqe9pL1C3SLu42jbZjX78QYCJ4tNTY7Dw8DoXrDeFxhpZwZCBXx5GpndNyVJSsXQnGr19FTZu9iJP9i",
  "key27": "21qJaV3EgQE9pGStB2fRnR8H33d1PGGHX2aKdYhMzePGkH7E1oePSdJRbvMy8HMXBBE3PhpnDUQYtQBVgcjMp6mE",
  "key28": "5LdEiMAh3nKBpfsSm2w5CoN1Actm32a6ZxM9Y6FpMz5GhFRrqp7mNSzpBjyN82DGBj6fuRV2sWGtsaHueRovKaEM",
  "key29": "46ZxFu3pVzLRbB9NCVu9V5r9frqs6GTdQmbbP5RJ99J5ZogZ1zXw38e6mdrPnPyZ2jHB4FRF71N8ZvHcLZepdWct",
  "key30": "5LsUzBBX8b9eaoKQE5EXMFvSdGSkE1tCqr2k3bhpPYFNQxGQ2Fjq2QVZEvQpue8smvwmYUUCUZhAmat8ENuhf39n",
  "key31": "2rGwJJWpVUw9iok6NDyGY9qpjFE6RkKZjoeUCWbz9qYdFc2Fzmj3eA3wbZQNnHVthr3NBEw4yV3HLNVmpUH56sUG",
  "key32": "5YYUZNExZ8zp3xFwLCFp3HMLeWxAW2yMMAne1jDJP1KRwtV5PtC8rLiREWQrWpHLgfG5FrPB2qF6ASgcYWFpRakY"
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
