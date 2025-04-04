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
    "3ZDrMZQgZGQVmCV9tQ7yaNnbu3oBycYwZj8VqewggkMznWxxQh8bdNtZ6uZLMDw22EqsjQzDH3FvAb1KuM87CcFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gG95Fg7uNYTh11zT7o1gaoK4GSM3kk662e2jxW3uwN1x8NhqALvMqhWny8sHzc2bA6FeRy9qH5C2cQLRU4T4Jmn",
  "key1": "4JyVTvubV7Z34d3fCQogknSsMZfR7Pappo4wfdRdnPKGuhcpmUXQb7VAW4TFBqBKuZWXqN8e1dQ16tQ4f8MWibRd",
  "key2": "2eq9VnLGfhSwMNNy7UajmdehXneAvXyLqrQQps3UtksvcZ9DY2e6mNcCMzctWvn1qPmED1DCRLSZ4RhUjQzB1hA4",
  "key3": "ChYHtKUjYpq5FQndempggTm2vQQoQnWPvNveEhoQATEVx6pcPxaasErq2qpHoqHeSnL3GvWBXLtrg97JdE7Chit",
  "key4": "5QapDdzpbEgwFovm5X66vVZT5v2iQMxXW3DU8azrWeCzhncj8ZdZWFWTGo79tFRuW58LusyxBBojfhX8P6n4QohY",
  "key5": "1hFFYsJ9dVwrm8i2fwDi1jgd66mEAmPCCeRf46sWboJVSqaYMSYwwkf9nym3CkawDJ9fsztknnvXVbDmmCKtf3X",
  "key6": "kvJNSSYUobyS7vDeumet9SD2hXdQC5toWC1qq5HMjS5GmBMWKnCSMuRjwKKW5uXHciij1nWFmBJcRi1Ai83sYja",
  "key7": "p9zPoVAxsXa6oFQLBUgGEw6BbDdAVQeLzdTMoXEEHzLHASXTaehqCwnp83UBpdrBop3FSC1t6fHk555K14tzuap",
  "key8": "2CPDMfhG2yoNmnmP58h7V6JLrjNzDoF3iLfQMWUdpDNYAfmiN14xqpvdNiBzFddrQUcCxH6rWHYptbCaPjhNprcn",
  "key9": "4VuPw7ghPCvYLLP5TL24ZXxUrqpFkuhbMFQbwY9YjkgUZ18qAm99iSk4sppYxW1P6UkatQcGLkc8L5cfGNM3XAJY",
  "key10": "3cApbyiMyBuoP5pkvgh9UeNr6h1YkF6yCUbYgCLNPCq4nHk5QHWFJTLepvrQAJg2DK8YXP3mjztbuY6KERMvP22o",
  "key11": "2fpYJLFzMf9iJFZKsJz8DVZLiuLPc6qvemFWKbHM9RptBnGm9WZpdWKjz4w97knfyxLsttpfm672HMU7ENsfe97b",
  "key12": "3jMRSBUp4RRjurvzvPrcfLMJhzJvf93zdG2jXeEn65W6UGyztjthgJoxEKZRYmTN8EdKwLoetyStZgGtoGjSQxs9",
  "key13": "2MWZm78CxhgzkRY1B4QgVEP9uYZin1RjKGPy8Diu2jT1QXyKZfPCLDm4M4X18AiFwAvDoztzox5cUX8Mi1m2hxzD",
  "key14": "2kE74rBYd3cEzJZ7D6gEYgoc8dPVZ22Ru3hjrQJK6nUFai82wPrbxiRrRgbmo8aFCrJHuBBNgxH7Kf79j5Qr6ok",
  "key15": "2ucon4pKT1qVw8x5jYHtSskJZPqKNfzoU5351yCoQMtffwra3JXNRYuZgNVPaxoqWePhrnUjLb8SM6aQzJ9PWTJo",
  "key16": "mqgM73qXqAUfJV8R89q6po9amHiEufpbaSR4qF9kFN1rkWdXqPvzirgryTw8ijtCVwzJANo12upviN59ipRgqgY",
  "key17": "4GzTL4ktc7TDeoPkd4MNQqCMbcn7DHs3aBauM3EYFs3jN8aH1dvzxtWq62nZpoXeyFKdsgZtCZFTA9ztBe8SaQzx",
  "key18": "3qF8xRU88foKisoPW6wjCkD5L1WvrHojmX6Gv9AChZi5imvraLppggDH39gK8xiGw32M7YddMXDCBW19SN5ZJha6",
  "key19": "35ntyyAcLabVJ385RHBEfVid44oHq8G15N1FUBjFDYkdjgHiFWDHyG6anq863hb2gTc9bh93AKhU2iSUK7J2FhF9",
  "key20": "4PEpYQYYaM1uMDhpMUarXH757zaJ39QpuXuSwgeyVKWPMAnuDxYwsLHMbMy4hQGq3RrXgYwR2Lv9pPt4cjXCuHzN",
  "key21": "2Zir6d978rKypHidqMUXRjecnHBBUjtyS1xK7mePzKQmxWGhBznrU7G5ooAwtymy6s4rojxKBXDx3sTVqX7V6muK",
  "key22": "43mwXZxs4uWBY8qTLarHeUKh31er6JQ1W9RWEEd7HEYwdHWgsFgo9NkcJ3heGUJwupUrtZexd2hLFX88XcJhGYcK",
  "key23": "5vZv1A8PnEKzPcQywWtZDPtNJ35wLmpBAAf3vWnWaLqtUrYug2v89gmiBm4Xrc33hTmSGHXT7dCS841JyCvQjohq",
  "key24": "5jNBVQKfpQPNfutz5WbeuqwoYvQCWgRoaAEda96hgGDj1AeFsrvdZQv48PHAC4VoCN2WwUQ9W6Ew6srowvta1Zik",
  "key25": "2ahqoNc8zouxMAfE7w8M5F9GvzWEx1L7Zigchev2ZujmfYnsg85rCU6HgW59wz8ty143sX98KmDzycivMBVh2Zub",
  "key26": "5jSxD6zS9xeiN7kd1aPvRk67e6yKAjTqHw6NEPuU5FrGkBqf9JjQHtxc1m547wZmcMWmR7sSKDNSLbRCuxsXJKZc",
  "key27": "4PRrnJLnAEkEJEqiPMCRzF6iiGwrCEKuM3Wks78toDoN21wRozJyJq5yHzuLehQkRn7DA6EoCLGHwSaFoYx851PL",
  "key28": "5nCudspN1RnD7ExcoLgDWZWYirTusC4XRaPJtp6vAu6SiLcX6wk5zfPMFZPagWJj9f6xp5e8H285brHV88Bq3RZP",
  "key29": "L5By1Z3SB2q7oFgCoXkHc6AU3VVua27iQMRGSwqt2jRdwkvmNbbroSgEdVR6s8pc95BSR1DuX2F2dbYFMGfb52N",
  "key30": "4Xu8UhkhdTzvSvHB9e78oT9vdPirmkTpkN46VRdASB59ZnnuxW1AxHdwxANGTWFhTmbbp8jEET5gqaT6Kc76UM5y",
  "key31": "27bhwW1C9DGjGtKy6vSx4sSbEppoyECAM7RadEqrM1NLWsv5q1cY7rB83XUtfw72GkiYXRCEXLDzrexVKVzWwLd7",
  "key32": "3u7H72FHYHpK6znPymjZP77XFPPCr5mzpRxL94w6krkdjv2wDNkjnEwK2TF1QJ1tPVCsek2C3bA9CTgwTNXQe79W",
  "key33": "u6g12cdf5Ux9GAnQCXejY9UVJeqUB7CU93FovSGhk347gDnZRNkkMSh64BGCVHNKk8fJtSoKD6tezrxuPeD7byp",
  "key34": "37JBNoYYUaQHfy4UYEeLLx9WBmsm6s3HzgszK4Nt1MWu556w7wJDEjf49Y67sN4orq9T2Ei4bmhVJD9RGvjjjzEv",
  "key35": "5izmWhFk8kCS4uuD6B9v1GmRJDRtFQCEeJB5ijne5zur5WGbm4JtdfNbRTAg7NrMfdckVemL9WEN9NzYZ88uevvc",
  "key36": "5PCQFqxSs2TmRZGaVKYecLiMqDJfFpuA9xaM2xw5fX3pK4qbkXkuSzAxv817F2kPgwbN3zQ5UkAxb44J9D5yxpnr",
  "key37": "7W6eUscFon2JHJ2y6mUWnBeSCS3P9Mn7UJvLovzecG4F9yD2MDSkPo2HeUFjazt3a2csygTWoQhu2pzyPL9AwYQ",
  "key38": "2x1GZcBPduF5ek4nRitsBPvvqggyGB8w7MDKqjP3wWt8tJwTdwDvEXvvMZs2y3E4asdkXsjBtGiuWqwiUZ3FxTaF",
  "key39": "3WEJd6vcGaACHEcHmWm8Ef5BHbSQBLbsDABT2FNC3QLBCG5rXYvhBRB6N347aYweTZLHvCCWFNB5KPmuVbvutdP8",
  "key40": "4Ck76WyVsP2JkVjBMRq8CA4vQNBeMJcdN63bLw6hBa5TXeiHa77LJ8Hv5Nc91euWLqs5iYUDtHbyyDLiFCpVXn3k",
  "key41": "2KDFTLMbesPKc8GYxnAGJEnj6nZFh9LWsRJ4wMRACZkmejt2FVR6vwR2y75AkVRa9MFqXSoN8g7vbx8ync834GsS",
  "key42": "3cJ2dqErngebMH15NtveGGQNZ2foAZjMTNFsSnabS9wJKvWRXNUBXdZAPCBgfpc1FNhKkxu185769kqpp8sYHh9Q",
  "key43": "5Ma3Lq6iSF49xvWvE6yL23hdVWc65yy94PPA5heQwN2ZxeD1Q8LxTWhrZnWhKV8caPxhpYmb3rn7XL6nPK7qVcVy",
  "key44": "256kNrmputz7GKod2yToZy8CRKh5QH7zhDKHqbukgciqcPU9axyPUzTC1XRLLZ38MKcJFJZyXLodQ1Y9o1UnzuC3",
  "key45": "3niVkCVRC5r16LVZ5yV27beszRXGTwLK86aVrFkTAMDkaxRnqdgDUFwpUDBb4GToekFfuqnDsdEVhAxQmL94tdK8",
  "key46": "2h9CA5nykMahBgunsyz97ACgRZnGh4t1EoSPKgvjB1wBnwgGW1YRZAjV3utwALKVagkgTxWnnbTw1qZ7vRBs1wNN"
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
