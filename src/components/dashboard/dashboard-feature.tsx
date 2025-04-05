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
    "KdNkUcR3N5Ph911Y6dbvG9LQQebL2xh5PmKCXXCEAbUGdosbzvfv5FPhxZdv3bdot34mRu9YvnGSgShYJrN6v4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cAUmVpp9zUrbr4D6TVceJR2F5d4sy9KDvQdfXqQGKFHvh2GEekv1nv1m4EcL45EBkAUD8DT9GcfYF4choLq4PJ8",
  "key1": "4AKYA7nbUu3cnqDjAYRNsyaNAJq6GJf4FhkksH43cbBei9sWQaMtw1M8S6P7mNmkMThj8jUNP1y6kGhpVmGL8mAA",
  "key2": "2gJTW6csNjmZvcyPtUhhvZ69thFDtwf6eRXqTwy3QpybfzsM9MMg8Hwwqnf9K4nWzwyGSqDvjvauQpNHqF8kGX2x",
  "key3": "2MRY2eooHhD4i61GcvWreRLmz9RnWyEkwAPVFr4yjwGwVQTYqYWak8u4knavufWqG7etYCLkEv8RLk73UyfvjpK8",
  "key4": "4y3LKpUdMp8VY5RcPJDGQrwd5K4hB9G5NKcdmAnKuAZpz89ncJuVSp9GgWsPeTKAS5HX5fkxU5PfhzA1LCLjpY28",
  "key5": "dWAwS4QvUB75FmeSxwueH7hq3ZyNhQECW1RasYD4QcePZkUm7CeyC7hAntYEmBD1p2oPrjUpysVY4j85XZAYxjs",
  "key6": "3yyh24UvQXtJcMhhxZUvsg2kSU6hipspoyA9ixHyoeuvNUaeUaKvggHhqjHobZXp3HP4zWzrHuAFRsrMyr26Gp5B",
  "key7": "vAj9xsfZvFazEKEvDVeBRVDWAGd7MrdNXhXJhAfSSbwNF5WizjT9ToBmzpqukySy1WXaijgMbwsPXhdk6nmhaup",
  "key8": "3rDCvX5rVSWpaX2JRCV8w8L5hCgxX9GGLhqw5za8tpvUbJehBwYSrMVs16Q6LXNREutMmZxE74QTgkmGcAjgCF9",
  "key9": "4YvvT7dBRCcMRGc1LEXcEMnnZXRcAEmWpE2QD21XRRiFUepGc2LGrATyMTzA4kJU8nWf417snJ6rCUkhAU7XpKCa",
  "key10": "3SxwJSPwZVahDDzEyWJ3HLJ7j1bQvCfT4V3WvjHFq4ZeWyKrNgFZrqcWL8Pc1vuSN4Ecnuw4WRZskfCde8mmcoFe",
  "key11": "3XRxfD5Vs6x4jMpsj7Jnb2wo8GuXoFmbU1scbSqcs6NkszMeUGtdW6WjruWqmefxeef6xRnbQrNHMwfQn74TDATY",
  "key12": "53K75UNHSiDoGwa8Qc94HxhvSiAUdCPfhwpNya8HH24ofxWCmso2pvQXGcgQAWZtKEh2hMoiZ6BpdCjzBfsKEXqH",
  "key13": "3w4VBNtT8muQ7RAWAdgWuzgQurj7yCxfYu6YNZvvoeZzfvgqTng9MtWdZ5cjkrW7cFgtJnz5zWte5gJBTcfoGvBA",
  "key14": "37PPtHZKhJRMFHvtKqwiq66QWDQqh5YKQ6yoCA4YHQm5XYhhExt68zvTCptnDagyTMYTdDVVCh8Jg4HE1gUbQSGK",
  "key15": "gBjrFE98mpWB8z1xUtZ1ETPHrm3S9yYt6aRh5qznjRTNRszjoPJuJtHtMdUm6jYkxBsw3A3KWVxDqevFg6fbAF8",
  "key16": "4btD8xEHFGhTinjZcyfGQeWo7zBa2pPNmXsQL8ESzs6NApKcrQXJ9Miteffm9KaVmKwDzg6cuxXcBJy5MMaWkyYs",
  "key17": "3FZJzfPzFrDr2DJenWzTVWqXbi7t5B8wbRsQu9inCQSkvRdBPyhGDL5TtK1SASp9xgWquHScG876mkhm6BFuee1u",
  "key18": "eKSZcgTiQyoV6T1sWmLMqAoU8VNTmCNWQkuGVdZt9asA2ChSbqNvJVVt1WMF3Q8T4eqebfQRckWdK4QQ1nURfTh",
  "key19": "2XHVa4dLcxJiaHoGb1BctoG26Nur6Q9a4FdD6etmAXua1QXJYiJ9Z7d5Gxak2HFktZXpY94k4GmXTYKrSuB8EWQT",
  "key20": "CwNi8bAcSxWoyC76jjmSuMEeP7LgPHo7axo2XQ5t12sSukagAaGwUVAArJMTkHAEU5GDenvQG1johNCmcKmGsHx",
  "key21": "585XKqcDaFLN5DXh9U3n8RHNyLzY64hZSvEV6D26XfVJKMaL1BttYiS2UeHESwSMWA6wZcVPLgwUsSNBjGeSA5XL",
  "key22": "3TrP6hPwcCa1i6cjYbpYYLuaGtDyciqPp1mbjUAk8fppZk81Sx2a7dHCvGVMnwkMsM7MJHkzjhScv7mXkidSfgza",
  "key23": "3gNc4sSJgDm5dXPxrAjK5uBwfMJNNrFPPtTwC3LKnJJVoPFvJ9T7WLHQrbF3qad5XU2K2xgTFZ5ApbdwDeoi39k5",
  "key24": "38878yhDtzMnJeW57bQ1GxF5Tav3dknSwD4kPAzYPxTaprpXitEqec53hYHyLMfocAxdFeiGf3N8LwHno1ACFg3A",
  "key25": "4SzvADn2xLuHzWznY3sf4yjQBNG6drHncxUwuZVHEnJxQh9P9XzBfmbXLmmZWy2SyeoxuDmV6Mo7HmcHtSbZbro",
  "key26": "29YN5HcFjuJxojxiMwNhW37NyXUFHdHJAFoJDij83dgnD1agzjcRG6HHsYQdhT2jok6eqAbaM7dMwkSSE7qJxsC4",
  "key27": "2oiLfKPUuKYudiPXTBwszmgnMDDAauWPQJickVT52jGXNfUUZVZkEts8JoddSRZnidt3YXKP1CAnuBjXgeDSwKiX",
  "key28": "2nBsaXm93kvxZ3L8MrvnBXyFr3HxwfBYfRh1f271MGkKf4wcRm4ABPtSKvVcyVhH9EJvEqBbqXrACg9ffkseux4M",
  "key29": "2bZCmfFLNDzzJ74XeoYNjaAfS4BJ4tFxJeFR6ssnDUQySSgtE97PeDH5uDRU4N6fyM7egV9t3FRKUR1PA7V4aG4e",
  "key30": "3HqwLeQJ8GMmmmiWtWg9hsqGXZPdxedczxiJ81Kz9J5ADUFykMG44ix9SPGjEBKj6eKFxcy7JX7kUa6Ra4cosweJ",
  "key31": "57cPYHaueQo6WD49EHQYmdM1BzfoA1ivkh3EvN19pHDqAwQRkFvAvtaq216E7ZCfk2NUL5KDaifwJMbHMXARLi4L"
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
