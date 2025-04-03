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
    "3ECGRyFQYxdWVQxWy4Sffh1QpsMkh9aGqcbsJmydV58Le4VXMgajt17mG4vupc3BeffeKEkj3L1YsyWeA8fod7rB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Xy8F4jbKVz7WLePR6vpX8ni86dRXfBuFxBL1oREXf87LfTULADP4VbRnVU1tDgt5bhVdy8sy2EDn3j5HoBLCqB",
  "key1": "4WG1Z2he5m2hSwaiN3vLHWLeHfgdsFTXZ7HFJiD1mZD3MP81gC57hovAFZ1traqZHC8F3BUVwJ9TQ4PGRu5mFxJH",
  "key2": "356XtRL2qv29emzt4WKT7HjBNi4PuQHvdL8VXLA1q7QH2ZZYzyrn7B6artBfFjnAd9vTCQSEZ6TDMCvci8kiKbyk",
  "key3": "5r4hZBCyhDeTiCTR9TF3W1CQpXTVBE9A4eLpUU3yT4Px2sixHhxQxCpXUX4mL8HX66uQ4a7HdzjUHY8Zch28oeg",
  "key4": "3aaBQ7karB95X2vZFjUbiHXeeameWKs5vGB1pmCgwmpEx888DrT5JnsHpJvwbbQZ3tkhb1a3zJqVt4w35Krb2V34",
  "key5": "6F5LGx2WJTcxzhdc5rkSkFPRU9WT2BZnWosLSMkgdnky5hFUeA9QhxTtezMafCv3eXr32jbKwVyfB9XKRBd6dgA",
  "key6": "4qoJVkp6vf6UfahYaRkJDdFxS1NDzobkJ6B7R3YPaDfEoMV83AwDNAMGpE6aW7aiEZ7NQwJyeaQCnjRQTAJzHGTw",
  "key7": "41VUw4FnUCg9QkaMbEnFarun9fSwNqwhxDLLgehdbcTYxCt5mw4owHTZ3WUdp1X1SKv8aSKRAwHYd43GDyrhrSKg",
  "key8": "3HNq89vSvhwX679MfrQebMmCf5ZPco46pvbx6dXATNNVch5g69EZwmzT6pFCTtVD6RywAyrsxE8pt7EizESD1td1",
  "key9": "4iqycDuE1rRnSc5LW5yczRGQkBJMowv5eaFxYKT5e3ibTDoT7CW2P6hLYXFitpdaKdUtDoZdX3g5Jw1ffewSw7kk",
  "key10": "4i7Dd3rKTkScQFUSB2WcecdzcCAiY4gQRwtMs7Cpkzbz9cyKcoBbQXtn8FviLEfcwqx3b5sDpczEQDUZzsw6iLmn",
  "key11": "JQhKaM3vnxnADgHy7j938w5VookVWiVVVWWGr3rWqHuaZzrzFTSHNE6Uk8J3Mkc4TGwUmCwF6mo4Y7cNzhGg6zT",
  "key12": "4VxmtBhVLQK18eCDrAPwQgDa2AmrGCvNMPXpodGhHDYvh5cBMmFBReYrtcQ1EZr4dPE1p8pjonUjbmxwJ8gFVxXz",
  "key13": "4i25cRgeCizii2Xd9x5VbKAoWq8J5Ciw29sB8nc2uEfCQBppNQoaE4PQSVcFgaXiRphuiDBe5dQtubPPutvT1jqx",
  "key14": "4iZPDLmLSqYK29T5hB2Ys7mXb74DAGNtuX3MShgTaFNZeVA5z3MbJNYESd2LwkyUPDLeoMc7i159dUAFeK5sRhNS",
  "key15": "3zQEYshNdTFr7sKFJeKwUBp4jGT2SUphAHCgJDYYp4fv14XdJ59VzGemSeKkQDNsYuXs3cpQYQFs9CtPWYajQLQX",
  "key16": "52zK2GnzSWFNRgzf8oAFvVUy1FFyvTNEJLxTWC49QwQANYHRHV8LNo91F1UhX3Th1YVo9mHesGWuTYRoE3WMwQMo",
  "key17": "55E3STM2zDsRCR87XbssYvqB7eVvz2KnoycbFTzkbHdUo43Sk3AQ5hk8TRcZRPdWSfuwb9cqxfRmhLco4iPnvmDQ",
  "key18": "5MemhamzG1qmqzAjXWt5EVrRcvhYgCyLDCXjwzFSuEgjxQod4Tmz1Dav1bCuWseEh6rTYfcExJmHz5FXF2m7YUh1",
  "key19": "3ScWPfqFvEMX3jAsCFWrSYgoNTnGZxK1aykG5S5GoJD4hNtXP2xNX7iQfppqPagDzJCfWHnk649fNhp16cSEpqB7",
  "key20": "RZvbLkWFPq5X8ayvQE44WGSXzHxEi4UAjmodM2WfP646JB5eLH83LuTBLxc5f59fRMdC5W9LZ5BSjsHKRpWNmnE",
  "key21": "aBqG3WGfanQYtGX7FTusAXD8Fzn1d5smwFEzmx84Zgu8e5rRx47tnyTXBKHprgGTLhScda4GfT35W2fzajjZhuc",
  "key22": "dP2avTF6KWNeLyuS63m6pqM12mJ2p5MkvdyMiPK6ACyeksKEHyPSFoVEEhUQeNf8WUpKHqxFhCneAdnHJDfDxaV",
  "key23": "2vLJo8rfw1RDHtvnDoqxgWKDNKXZ8EDg6bELWneqzhZedhjm8HeVMZajmd6DwYmxSRtywsHGAsDfMwuY9m6kZmVX",
  "key24": "3yHRcABCr4ev2sHpVa5V6dtyKLHPYbyGbeJVsC9DNTTG2b4TzSH31GsYWDzeSQB1TTK2vfVTgiVqe6q4iYQh6tdN",
  "key25": "5VT9zVdmpuZzY7aNBzj5s4Ag8bLQPTkXRSL2Nj1r7RaQMFr6hQxVQAW6jsi1j3G9dsXdafdmMDxvcNixkHe89XMW",
  "key26": "2dz7hXE2vAEM8axHwoyKStdxDWCkeSM37ixHgkEyUuyqNmZ9LXRGoQg8WhgBRJPhuLF6R7NV4571NvUZSs4H384E",
  "key27": "2MXtHbudooyN6VrUc8QS3ZkufMLJwRYctXPqKn4HzS5UpCJCWh5RdP6wZGrpMYKJDZVGQQgbbG9a52Qn6tahDwNA",
  "key28": "HtKsVbZBt9T3ChQ3Vbjhkm9EnQa7CVGo5P1ewkPGVn1WqncdmqpxVBHKNYhg1Y6Hf1wPEKtjD7kvdB1bjf1i4uS"
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
