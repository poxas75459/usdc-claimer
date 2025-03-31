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
    "qy5XH7RCx9nUMcD8zuGhKmyWRp3QteoMsEfYG9AVvUymUHqjycHSWHgY8ZmorEbpJmbvWQNJHQpiV6MMXTxoSTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZSTv8AyrDzbV1b6CJAwGfFbb6DPhhWAcwMR3cUqcmeaSLySxPmqPQo4fAruMmZakBxqwzAoFeyjz1kjNhbMtRMz",
  "key1": "BAEEopEwreR1Bez68FnJtZN7VCNpWMuJeMgdYknCQKvkj8fyooLpLgYwU8ABFM3YbQzS58wPQFcTi2XrJCiHjnv",
  "key2": "2hGevDCtQcmbrLwDfVDrJ5GQmkcrUw7X77FGCHDCwQoEvrgvFms43JJE5aCV83A6Wgrf4qHGMETwGUmKzm6qvsEq",
  "key3": "3T3d7R7CTDDvuzQiVEHd3pXtCfQzJ76LAZeLzyL3pB7Js3YDhVZsmRSZkqdjEEYETRJtXCTVbQEWj6DiWFViJ5z",
  "key4": "WKhYLEDXJn84JKSa3hue6tN5AVsGqx4FHvtpe2dPB57ETXMmHMt7B1SAJnF9NYmVpwN2uDGGkj5JqegVpB8AhB6",
  "key5": "38D47YtTHmhrx4WXjHtQFubcAtK1S78GXYsVN7sLkGeheJfbY6BGoHV6No9WGkNwWwMMpfCBCGDVPQwoMj7bsXTK",
  "key6": "2i9cveeNUMpZ2LVxxsbkQQkFrFxjh3gsw8xouKxrzQQCbJQtKuPKYVkCB1Cfr87Xtcnu1Pv4wsfahsgcVXPicRcG",
  "key7": "2pBysCN5Ui8fsBvyPhMi3kiNnsBnM1YxXPG7gpQdwcW57NwguvuiWs2p6LWzmncrUy6uz9GtpgnAtKNdnqLvL1f8",
  "key8": "4NXAQMAuUYmkVbZbhAbHxiL6dwcbHQQGthjZ4Wi57nJqHbpHdR73i8CUxjLSRTL4Ws299FkHZHdZa8dxPR3MiCEC",
  "key9": "5wyLoaHv7DXzCuXYbMFnuazeMejYADEqxvW7iLg8XwTL5pp9uQAEiPRiFFa86aJUmw1svRFCJR9i1kJKFqt3m1Qy",
  "key10": "dc9eqVwiqjFpCYgtWDnW6WM2YGMkJXJafoyDX8jSN6Xpf6hfpCHrK2ouqtNDC726fvG6nyYTHVCHFLF7nQ4bdW6",
  "key11": "3ZYHkWaiiwXtyFVaHxSB7mAPTiq2VHb3JingBhSYazxu2DLMGp773eTmjpWDG4iYXkqavuRvFfTufgMVFkwfNnH6",
  "key12": "26gi1kBeYC7hfYo4fLUCuVteVMC59e1zmCh5VRHRU9gLbEYz4X7C6MvXna8WWotVqxym1mEPH4cKUefRupNbLCws",
  "key13": "3wEnuaRGp9gCbZJtvGrWNwuR4dc9Aumbq9BSnC7r8pRstHYLL7kS21zE96URTBLG6V3cmniADrDEu4NcACva6nXA",
  "key14": "GD99TjfopnAnFwCpQavLrSodVmLYvir1zTXZfbnQhSZoYuEASMHAjJ3xDAW4xvMn3XRqjeTKFYA4CFmVdcCBEU2",
  "key15": "48ShUeYtiKJmq125ioqisgZnJ9j9R1x3X7ZDUHTyLso4QdJ4mNhkQVAGDQwvLZHJCTVVLxyKYni2AVBL4sMw9FWA",
  "key16": "472F9o7FAHwBH99bdUt24AQoSTefZiuFhF7Q8JxaRJjhgfLLdDstBE1g4d1WHfMwBGBQ5FxBDwNcaQA1hDvGhxCv",
  "key17": "3QAtMVo31pN2pFaLxvSGVxDYrpSdM7WxYb5Y9vgRWZ89kczCKHDDkjxSrBX45isW5KJt2PgahVQoEVL1tSXw53PU",
  "key18": "3BmsFDefBQBrun6sEHn2FZ7KLBFyYAKHKjTbBYFgGPTFgdxF5vvzfhBL9SgmWnkU7b85WuGKhQUoLPXEt5o9r6q9",
  "key19": "FGr8Xo353t32cbHYT7LRPxDTTDP23H7AG7VHF6D8wX8WWtyNmiBwypXNUBdWq5Sc8HJVPuxgUQwCxd1yoyjZ9g6",
  "key20": "5eVrC2wBfuZpwTSRDfVTa2QLD99jBmvU9bzrL83rCy2wWtJZ9BNfsqaCvzzBp4w4bo5yctrwU9wsQoaM37WQvWLo",
  "key21": "EP3QUTKJ4T1gYyGozz1NPxnf533eJVY7XAgUaQgtbFgnnCnD2pcdkPGtons48gfWG2WvugYrgrxGSdxFG1aNr6B",
  "key22": "3W2AXRtjdzJp9NxjKhtyWzTUGgLceVv9om4ztNaH1irS4WqM2PKiH1Gw9cCC2tfKJQ2EY3ctF7zA6WNYPcsRn167",
  "key23": "5RQSe4c9UmifH4b3QVng2uDimRFDmzEfwsekp8KB5RFez3hNYQpP2AS5NHNhTatCPWkj7Zdi6PnWReF955hvSsUp",
  "key24": "4TYafy2Um1EZK7SCgWczbRAvPq2bpYCTrnY3ZJTZR6d7zepv3CCrC8GcTxT1rbmRnDPDpyJtEXbj38a652pVqYis",
  "key25": "25tzWE8CR8bSFuJ5tjoonLFn4Pvgr1zLfGTLipjMrVhnUeGKJ2i9AM5TCsehtwczT4Be9xmRY2DVsKBxEysRL1bj",
  "key26": "3EGniRwtR8EJRD3CZKnFYeGPqEGJ34nAX4aGYYhRqboiv5R3TQbFNyEGHsqr4ULDeJXeZHwSX4cbg3H4Ba2ckcFL",
  "key27": "z2x6BLeDY1Ky1QJceWthgX68ky8Tfk1urxK1qsGu79B8apeXJNYJjxkaLWpEVhUQA3Yc8gucJLaBQHrw2R6VUB9",
  "key28": "4NQTGLx3C1qMULcfc6CXQswzfGBnmzstVKb42rBfqDJ38dQSNgtApuEdN6EvhyT4ZgKELE6jVn76JAFdd2GauuQt",
  "key29": "2Z6ePUW8Uoo32w7iggQa9efpaWXLCvhgRN4vHYMxLhjUaRxgCpqqM7cZcVFU7gMPdDd3zbddNHJjUEPgyQJSZpbh",
  "key30": "24PP8Py2jXv7yVMF3Jw3hT5dUX8bBaF1WuHk2x2HLPcJwT7rkrJk72jrvgzNUgaxNXPEm85zEHkbQ4pFwUPaAPaT",
  "key31": "59ZSfxwzEDdfqduN2Dizxq32zGkumrd8mAbPbxc5ZHS6WmdpnMVzTy4XdfJHTgpp9wP1sRACgo9g7nADPtjYFAuP",
  "key32": "5E3U3M5QfsogfXpCkJbFUawiPQczbjU8if211DXSjPnPLypUvbcBVDVKTPppmZJaUiju8R39mv4q4tVsDkPn6qdG",
  "key33": "5PUTrmzs2pjdZAvog6wM1k6UbSjBd2j8zPNQrxWk4FhDAsAqKn54ohKb7qpsPgVkggPykDy1ruirhKCMWVaQL87V",
  "key34": "5mgfe3roUTJ13XaN5reVaZ8RtZQLxbyrNyuorzQ7Cu2TWsJfW1i3Ma6nWb8rRkG2LbXvBRqR47qThzZ6Q5Hz4PEK",
  "key35": "5mBTpTznvw2ERJPBfRMb1dm1UDwgaQpT7LEGJeNsGZq9ewddgVyDfZtWqwr4WLnKBWXWsozDGLz9ebybjoUfxTDb",
  "key36": "24oMiCKSdpZ6tziWURTDXtjYTDCDvp1puTWWjwyd9GQw2bKEjNWUhoj5qk6gpZFSdYgAPDHBKUnJAWNHZFvKxztg",
  "key37": "3QFjsXWGHBpfDcr2HQ2G4LQZ22qNh5ycuFVmKU5jmxjFJLCchfR13HNQg1v7yVUTaYs4VUCMjAf2NdeTjHbnjtSG",
  "key38": "RhWx5xk8D9a2b4YdhQ1rEeJcs2HfPj6dGTVro9xdWdZxmKMa5HtA5JjEBChkoRMXGYypzrYoT2ypHGAQccxUxLb",
  "key39": "5neJyog88nd37QpttnTqbDis1F8NcN1Trhi7HG3ZAd7UbqDYZnGqGko4MF8eEHuxfJpQ8yXveowxKL8D1b9jF3tR",
  "key40": "2bXAxKc9bmQ7FeaVeFTeNV1CqZLnwh4U5gwWwaT2Q5dnACLv1vaLJK3zZz2m5jJVx95Bo5kCLFFFWftriVDRPBMe",
  "key41": "3tRGH3UyVrXjmxA8emAoTyx32tjyFXH4LVxWyoBJZmFr6WdwtfEEkpGrnSx7F8fH7kvrawAefXLiHNeuLnCrEaj8"
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
