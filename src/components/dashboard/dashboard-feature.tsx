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
    "39Zg7i12mBCpbSqzx4L5FyFNLpayCnGeZKBwbkpt4ti2TwhQARnWwhQ4Csy75eh5x9HqrYNZ4ybjjiE9yf5NiRE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpmmyk7CbVBD5c6tUrpPo4ZYzhHHX9DE6fLWJycAaipvrZLW2TpfacdAjxYBjnwagxqsh33bXPAx7XJV8Tr5kkR",
  "key1": "4RyKFuf5yByTyEkhdaEoya1oUUUDkpBuisx8uN4hFy8Wj8fV9Qg3nwnfQTMvKnvbqwDNa58TLodywMoLjswfooR4",
  "key2": "3DqdH3DsWf4YGUSPtvVn4A4d7mV8v2LA2puA4yRhcnsGK718MPLshabsWCS8FU4Csk7BrW9MBX7SRBNq28iLVMHq",
  "key3": "qYQisprf5p3GPxFr5pHHkxRozD9VsYC4XZ6cibnmpbM3MTndsAC1NWbPBwDqw7DdHTpP5UiFHuxykaoUv6uhteY",
  "key4": "2XvR3USVvh3iw5s4HDnSJ3aPTBFBWsCjnUvetpUobZdXSGf2iPHCkmjfUxu4Us95tBHj33hhDsMGMAmvyasxTD8A",
  "key5": "fCqL6UhJA18nWBStWByAGdXdZ1dvZWYCau4tGqfTGpKhkxXbWD1dhSUWyJcwzMXJ2v5kfAntD3ZdDjX3BfX9Rze",
  "key6": "4UiAnFAD1awFSBNdqHFoUd9PZpwRJR76BoDNNgwqz6a34HgpvbLYpD939fvc1tc2Q4sPbVSC4vY3YVr7hdNoUKLH",
  "key7": "nW4zxDeNtM4AjpfSeo6iZsSujUENjMbqC2WGMjTsPg3TdPV3Ku23u1nXpHJWxrjQxLjTTejxDc1646hYKNSQiW4",
  "key8": "5VSVJxeJXZfuyrq5kQX15yhU96JtXHCutm3F32fuRyymk65a9JRJ73U4rMnQcXRtYTaWompxz9nzW8UBDGHi1dFi",
  "key9": "3F4wzjksYjUadqDyMTZD1agPS7H3oYhGXvQgEQKK4Vf8W1NCVDtXQqqa7gR5Fyy21JNSDMbC4A4s7ro15MGNF6P",
  "key10": "4mWGfeYvzoPep5GP3GS5Dm16MY5QAur7veGPTUyCKvCx7wrZFGHYtqApV4sRhA9Sa1sLw7WYVYhK8qNFhwCsq6Y5",
  "key11": "3u2g3HKwEyX2PPRhRPTGYJEAPPwNwF1GH6kYeMVEYBVGkgGBufKFF6peMjmCXPegYuVLZLDivyBAWLjrxW2Kt21Q",
  "key12": "3xJeHe3xqGbwpWJgZFHBfD7mh5Z89wwG3tkuiWeeij2mUipWsa7D54iJCKKVHBojrYHpQRmFW5yypdaz2juMBpNM",
  "key13": "5Zks877xBPZUknrcpYNUfu1x9vS1YHpNxCAQqVjNmHDRsSeeBS7FDwYvuRoN3m2yrc69TUr5wwgDmyR1zhKJcdGf",
  "key14": "5rnBwr6CVeoMmipqs4m9pTuUzYXiCcH5h24LqmW5pvka4X646WmMyhbLf5xqRg2QVD1PqRHm9FFCyAXaA5oYhmL6",
  "key15": "62bHNqKs6WTmkYK3B6R2G564Roqy6p5zXpJrJeET5gvK7wL4RapWCQ5Y78A1THMY2P7V7GdAogDpivu3F1f8wDeX",
  "key16": "4bgPt1ea43FuuzCBxy1RVDBVwioRCYjNGHGpjmgBXLD9rdvWqMLDH3N8wsCpPakNf39Mv61yVPic41ERmiuPTdiQ",
  "key17": "2gLBxzFRa4uM9hVGkh3fjPdVkUynvMDX8vxgcSCSDhH13V2zYdPU8tLNha1j1NuytrMLvoo8pNqnNtaPyJKGos7V",
  "key18": "VHXNLtvQNsvwKUUCe4j7F8SG2JkRVkVt9riArF7CP8oQnAhkWKFpFyg2GwRiT3vkqzVGB39kx8XPN6KzxnXiMVE",
  "key19": "3vJKj47yFfy82UMkxJogpumSoSgbhdbMejGKp7pPbzZQhS6rwzCLHck58dzvC3JTgHtmNQvFcrStVttToAQ7ySsJ",
  "key20": "5KmougZrawx31uHTwQren3ke76cFwkTtPSnPtQJkVP6xVvfzebitPLSJskx3QoBxFBUuh5irWAnvUupKz619HdU3",
  "key21": "3TSac1Vumr5mMjS977Fjn8rs9657d8bchF6WGiDwf6UNvyJwHMiiMUWm861muSQb6FcDSFNpwEnzMXEJJojriqos",
  "key22": "2FeyyoidCqwJkNntvqUvpLwPB7M9Uxzgd9EndSTRxfgtSrgZ6yspCiTQzQxPJiV8fKopX7nQqRruGdEVZgEmWrHF",
  "key23": "39eSdxWSJHqmjYiKRhcigGUjJd8oQKT3b4T33UHEpKH46wC4kLfaaL27r53fvmuqrVPwmJSsSHtqhkWAfk1e9SNr",
  "key24": "2zZ4vNWMQKLYRJdZy8qecnMEejG4vfbpewNRvbCpQoWqzRfdvExyYfBsAYSUhKjAzV2QmsAKRf7qEtH3EF3hDgse",
  "key25": "5n5Fj2xrWZixnL1JjMgRQBMqpoFypCg5Cz11iJdojNd9vSZtwRUBhkDFSzyGZpBrfpXp73xcPtew43g8f59gzEMA",
  "key26": "3qAzCPA61ckPXSkyj5d7Z3yQqdJ1ruGXAUyuteRZTNKZPfVsp4QwttvmNQ5ue5EhKkXHgEvGnd8tUAN684ym5Cmf",
  "key27": "4wfjYhe57mjp3Y1sBWkFJdXx8CoWpSH854gQnkwg27Pc8oeW3XGDGP997suxCrdWGLcuhW6mxXRMFPk6CA7Bqmvv",
  "key28": "5Jkj2qhWdsLTPoahS9fUkJ9F9ZEKvQ4qYpsSHY8BQthKGyPRNLwWhwtUnQwF89LRVDULVCMRDAgVHmyh1pcDCt3G",
  "key29": "1fP54bL7sLnyrokqv4uF1rC9ZYCeBkuyLv6MM6M2SCMWSviChXp2vT5TSaKY5dU71YV3fXjXrPDYSxFTN34L74Y",
  "key30": "2T2aKURvGLuN9RmKxa4NQQDLRGTYyibahZLrEX3SNEMxMkw4m8cRwoK7GH9mHrPmb38S3cjJ2JhMp4crJaeVVFE6",
  "key31": "47KxEuikddpCiGsUHUiumBALXqFeYyZMYvq3N91cthU23YNTd9FuHpcmHRA4u1X8NmVh6oHaG272oLG62icSUXwB",
  "key32": "2HQNFPaCPDFJU7KC6ooHEx9txoiYsTXMiqUZwCNfzWYZTWVNjWgrdBioCWktmCKCG2979D4stvsGhcWJC8YfMxmP",
  "key33": "3LSA2pD2SqaJAEvHV6RvtpCW9jmKiuVLw2m3hnsxRcn5xTLF8CtXxik946wPV9SVgZz1azpxPqrZhzMBgrLL2mc8",
  "key34": "hXCxtw5CDmbhDgoQSLhuDYQkEddEmBj6mNLpFjfN9MGceokeFfQxTqnKxbFZs7TQTrPatiYWJ9PfHfsfaMMDq6p",
  "key35": "5XoZEeCTrhej4P7b2qG9AdSFo9qruoANfqsrpur7yHtge9PPovNjLN956QJXZdPKAhprvSFHw6CviUfm8GtHx73u",
  "key36": "2DCSeMYC8AssBhdFA5Ccjo5dBoi4mNfvZKk2ZT1SkUUT5aqLmNhTNCdVjkFQRb6EWPAb6pxnuhhsTTLsaub6pkDi",
  "key37": "5TSEMsm9TMJ23C8U4ijop2egLJr4T29xvKddU2LrxryYPseQ4HTfJkjWBD34RnYNCHofTW2uH8NhMD9ZhHLdzi3U"
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
