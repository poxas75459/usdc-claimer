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
    "5Fc7mcCntvvUbsuGBkFk9ynnBvEQ4ab88uX9Pq8fBdUjAMENaR8Wj7Sz6pF4zcbf2sTrp6sMCFdPtZvnGTHsoSZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HgMfctPq2Tp7v5pZHoT8w4vFBRFZ7Sw55P5Gizsp3KYAs2J6P5ZG3NgVtd7zJtTTBRbKvLNGhhbRbFGrzejXVmD",
  "key1": "43iWKzpSYKQkh8V7GXHG98JHc51dsqSyGxZ2u42FqeReXs8r95yVQrVK55k3yspUfSf1aNLaq9VGQDtYGV3b1pEf",
  "key2": "f2y7x9TJVyrR7KsMzwjLkFh1JWXM5oztGSJ1QpCrHQfqdR9HRcLc294Ki3ojBVHKxNCA3d5jBhjg2Lf57FG19f2",
  "key3": "4CyLKvPZNTostvPHLVVEjrn9V1TU3BYXambhyCt5Xc2naYMkyDTAYbuLeF9AhzZFXtHQFtvurBWwjjY51UWs5Np7",
  "key4": "2LwATL6XhsWV2paEDkBMxz7Zp7mpnLnzMuVB5N2By6i18yd2qNTsizHx7oAg3jkmT6XHGLcyNVYY69irCoXxhB9C",
  "key5": "2odquP7CP2dAGsXVJUkxbJ4e8gKN58Ud4RiY5pU29ur43oTbzLe3nG2VW1VcT7BiWKuYxvjbuc1rf6gby7xaUNU3",
  "key6": "2wmeeGoMRq5TZefTStq3L5K94L8xqyqh5onY1NjZ42m7Evm2PSKdsyB2wxnQuwZkiv7XzKLvZxgTjWbbU8Qt7zvW",
  "key7": "5yf8Rmuj4NEJd1i1YumsAygVCzawwo9HzNdef3suXD9nn9RdAxfLrCdCg9vkBhkcyG5df61EkV9UMATZMaWakVTK",
  "key8": "2GkowbwacdWTV6MQYegodump4CFKbhi1ioCxp9T5khQpm4PdT7UPCMiyZKzkiGEAT8Uz9DyfCG4adiz6WUsDa5fi",
  "key9": "GYHizYo18muXiohgrTh9xL6gNkWHRmew1FixXVHKqLtrQUFY6K6FZ7G3x8mKtieBi5G88Ao4gbEEMVVDyaVkd2J",
  "key10": "inwVzUoUEuX6f12jxorVkMLUZ7F46GTAAW9qmUJo4qHeU9JbqymZuSPRws5WLNoncSGmLaT6Y31E7gQr35vzEwU",
  "key11": "33HNLPp1ufTvRYpb7xzwWYtAVDMog8LqxHx88YzhBf6CyMfrcSuxVGcu9VpSCjC7qGtZS1cGiEtfDPTG1JgW8Tab",
  "key12": "5wJAPBrWMd4JrypLXPwvG4CfxfWGM4M2X2ZNEWVo455G5Ht4ZPSmX9eePe7J96ed2KzXeTryxCSGfZXKHcugeDLY",
  "key13": "55N87Tqq8Uvo5ucMJfjuSosvjc2je5ndebjfpzab4rGqXUELA2zPnyvpkbkPpybwTXSL11eAutVPKLGdMaS4aLgh",
  "key14": "4xTGKbDDfmrpPN2QrbzMjhpvBgYfX5gXdrVhdcC9awsPYxsRutKW7MwLtdrNgNa9SDfv5U8cnabibmPieePurB1v",
  "key15": "jBkNo3yfFh4LihyQn3bAhPBB1mG8xchDaEykyEguyp8h5RkjMwWPdWeNLF21uTiLvkcQk6YkQJq6yFz9B4pKVJk",
  "key16": "JmzU7nawKnLGSm9xKF4rqgjCQ2UiM6k1bunna3TfhPLrsA9jAFvU4s6QgoWssTTQ1VbQaqtmZq8MHwcJB69j3G1",
  "key17": "5VhrhQNVDoYJuXgqeURqpV1rDRRRTSoESRWq18mPfhqzxB5RvMKeXHKYjqWbQfzZ35EfpfAhiGMgFYwsMNaMUirt",
  "key18": "2vwKrR7xKBXGWbaakwRpBQNtfutcdMEyr3ZR6jBmTVXR6ZNPUaDJuUJAcCmwY2UqnkS6WWnDMEDmpoYE2fUiBh85",
  "key19": "5sMp88GAAMaRFmZc1fCbppyGaa2chHoYov1WbmwStBrc8DUv3XZHMyGnnLhgjwDhBEaWA9r37KGc81by6o7UuyPB",
  "key20": "3P6XAoUj7SpUNxrtJwr4CCqitvABSEq2931VEuuz3ZMECtwBKDoqYTRYZ9xoYDeYroJCSYR6iTFHp4xeifiLMKHr",
  "key21": "5BaEfPm4m5XZfBqe2bEwWBTJoBhQ3WV8SDprBw9oQqMxdqc9QWdZU2Er8wGqPXwMkF1KmbpHfFzyzfDP9FPC6Dns",
  "key22": "3kAryYkoyXFLa4XoSjoeHjPD1DLrG3FqG6zyh9LhXXDBhSzsn49hhxR1gzmHtbBojR7bjP2GusfwUFYehnJf5XgR",
  "key23": "3TusxTms7v75tT6vd9iPwsB5v4pUeWSxAQQFHt4L65C8z3ozVJGD3Z4vP9cxzgPrqp8MsrBQtHBr3wEfHUf8Kkun",
  "key24": "41AmqnXY4kGANpkCKKYnQkVLchjXcFX4fxo4CY63tpw5xcJs8Bh9RSH5RZ69TxkeemQNgw7Cf1DhXGo1j6ctw6ew",
  "key25": "C4wx2bpN4ayzqxpuyo4j7g4UPAqGt1Z5my5WYjaKhmhrGh2A2ujyeQyfFGKdYpyWdCRNCJFRCCq1x2Tx2CtFQfW",
  "key26": "4Feqt1Un992yrjas3kCTiQNVetu87PvMcB4G134mqX3sxBFfnA1fUqAuzoyZQpSUw9Am9E8rVUgcciLb1u6RjeCF",
  "key27": "3q9tuKNeeqABiMJHKWHq91mpeencY7BvvZZgSRaZJRPJ2WQkexy9NwtcF9wwK65GJNfaVcp2sheUiL5TAqvb13Fu",
  "key28": "2DiPTAH53JHv8E65BgV6eykoC6XnhhxS6wTmZ9gYV6n9VHSJmuHECTzKNzthFnrcYkBoavBCD9jFTBroggzpS3cg",
  "key29": "437ZfwHWWqMZTYNR7CBednRThfv4sV9DzVXTJaFYHNopjnxcKvKER4195m3quPvMt2NLMmXuKPmA8Zp4jdjDwjBC",
  "key30": "5dn1HdUR3WPUdAWyNZWcZfea6wNseNxPhCSV1vnJcN6HdsGt6cRQzJxNucFkjEoJ1Via85TwFoDXFy6guoTnUsD7",
  "key31": "2PqXjy1SvgSWKKSFSQ9zcpMt4n5ZRdqGGEaWJVc7dszGyM2iGm4Yo5Ft3ihUsDVcumvAoRWGuYyAz9X5bse9LXPG",
  "key32": "124TUzwCCuC4PyiPfYy3VBHpHA16DDsiFxzWoQGAc4Ck4mJx98fjbS5V9Pt9Gr1xpii8CHdoKBih8FS7mSdMfnGQ",
  "key33": "5jUtyQrz7nX42f4qyMwxUpevMzuF13yoSFPQAmJwARAmhfWaBTG3Uam1fQy1Yw5mxDJQhvScnVEVKE7KpMxcLmft",
  "key34": "3LqEB2h9AospJbXf27eAH19Di1rLs8AFhreqsd7MzERXByJJDpkWVstWrLuX5B2mfWpTRzgNqEsoF2vqYCyrvV32"
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
