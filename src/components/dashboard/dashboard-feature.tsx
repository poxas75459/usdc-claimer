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
    "3m9v79WKcP3uxfpPhWJ96oq8KvYLaBWGwme2nH5ByzbU7ziFXGZVar36hvrM6YmUMB1AUDCzvgGLzyGGdpEwFAid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkMCet4FLMXkYNCgMxZKYgr8kB6zmPx9hMTdgQEe1knVGDRhUJTvyHzDSN72QjteRLw8zJGWmreotN3JD6fjoFR",
  "key1": "RXXwHZEyU2MPC38W8trWeJpDMzPwV2KaVSgEXYeQCcQvDYTU4ZiwKJJEHQ8t46KyjUVSRZBs7eb6xLDsyvkmn6v",
  "key2": "5QPNp1SVyVryfg59PAnm1oDnPfoM2d1zTGMJ4zgtMM7PRwKgcZzuTHeG5bF7RuXGSHfzcGYCswYaoNTtdxMUQmGL",
  "key3": "VgKHfgTB72ScHTfX3Mts5JNSjALwJVD5FJDjaJgLgf9ooKetzcwBZwtxotp3H5ujuAcr3gTjL14F7MtBjaQZe4a",
  "key4": "4goc3E7i3VUMBo8ixr5i1UvS5mJJyujEa5gRNNg6WErYVs9cCQQsv4pWhS9T1yTnS9BaE6imQX5A4uunSbmLdLHz",
  "key5": "28krsyGxaStYeKZViYizcUFA4xHzinAtUzCuuovNND1uWpeP7PuNfrzMbKQGSKTLMn9qLk4qWqRcq2VjLA4w4sMV",
  "key6": "3L3x4YUSBRqWgxX7MnnxiuViGyjiWrXjKXGLnbtAdmeoDBThtnV9VT3cH85Ydsu1xSsm7XeknRgwFmjW4DCjaTtB",
  "key7": "311zNWmAFDr8ZGqPVqDaZXtkt7Y8CmPPK2bT1dSf1czAzPpLkB6xc6RsSYEFMn8kVtkVT6AKZdZ8yQaQKYj8peig",
  "key8": "4Ybi4APQaEtciy7wJmhvrzoS5Gj7WRALSkFL4H2PiQvbMvf9PXan9ZN4kD6VMgWr8CQfXDHd8Wv3nM5b3CS2hRa3",
  "key9": "5vTr6EJwn7N3vHpnCkna9CW9PomFhGRSfcrZwKenhozqPaZ6in9crrtW3638D1W4HG4gvGFnyEDa6M7Dfia2Dqj7",
  "key10": "5c5SKL4rHtGdizwQBNDe7oHkUca4fJ6Kx5D16R6tA6kaoiN6TW3kwq1Xo3kGu7B34wfuA5ZLSGumDyNwFFEB56dy",
  "key11": "3mdviizUvXu1oRHnzEMdKRYPNzbr4exTs3gtRPKDNgkQd9HKvmJFcbpi7GC6rgpK1d3tkN9rKVweTTAmj2y8RQVM",
  "key12": "5nwUNHGL7tWERRDHmwfNH39N5gtsevgxvPUvHD7Xjcjc8nyqSruTNke87soPePbZRTQPxH2kr59F2k5njvB7NszD",
  "key13": "41Zuy54rqGAb6CjibF1jEqwn7fJtkE6u5nhkG2DLkWyHpSKcMmnYgixkSuUWSPC6mdqrECouLdfZxkT6aowi7vYj",
  "key14": "4JcMXqUBnuDoeuMEK1BhV3irrPbiVKbhWVjN6MvpW9m9phc4Fk4bX9Zuw6opJvGzqXuG2tcZ7ZM4x4Gd5pu3U9xf",
  "key15": "TNbq9zG27YhJ9Wn4MozcGzwEdjLwVr7ohJRjFgrdn74R57LBBZHNwD7xDuiSuAPfJX5xUoRaH8tw9tCQ9NE7QAy",
  "key16": "2gowqgNXzTdwWS1uWU6ZTduaMJT1EQ6ukJRRRVMpEV7vDNiwDhSVp4xzoJit85ZgGQbjsfpTuEJT6C3zAZsXMnKB",
  "key17": "5RAbtmTCc3w5UH72jLe17wTd7Wv2o5s5578btwapqc8K9F6ibeVNsfLLDixKhRtyjbeHhNRZU17PqiNcjETfDGcz",
  "key18": "4iYgfrkzM16afoUefYno4xBijYwKvyhWiSpqjNeYoATk4nb3cp1ZBCfMmsXZPEHfqAyqcG5WBctBTb3Ejgc3SA7T",
  "key19": "2PUDMy1BzvKcC9eTVj3ZYpKxMNr4yBbGqrxHJ1NB492Lu34CHmnAnscYSXacpxzQGtTuYyEnYQKewg8JgTNGefhb",
  "key20": "4Ds1S5Ah8yivwAR6HG8R84ehEQnjZx93CHvxqoVYvHZYNcsoxiuyrkXEsaYg27ev3JYeZiCkQTX3YEhz4b5y86av",
  "key21": "57Q8sLrL5TCiUutvCZn7PVodMXkcWvghXczh86ZjUCkozAncVrX9Shusd28iCy2rdWdGAYrcMNrL56qBiUZVQtnm",
  "key22": "38T4hG2aqULixZ2p3k4VKuQDEKHbqa2uuvmaondaq3K491xwiVoR6vNU7FBzq7jtspKh6rnzxb4h847hVZufiZX2",
  "key23": "21WeTm7dThkuDWiK8cqBVgS4t4B1kwUnANuyXWosYMcguDjUDqZKeMHDsoC4dXM1SpCY5CNCEZZftBypogR7sYdd",
  "key24": "4UvoCGQKFhuuV9N1VCXwm6vzmJrof1ai2kzthBJHe3HJcmMmKRnUqSKTvGY4oZk1RWDaWtN1eVSwyiiFXsoqL73m",
  "key25": "4f8BmUmSFj2BucjXpH5z3SEnbGyJ79ZASwiTq5KG5JTE7qFwpbmYXpCpD9E2wZXgDkughtAE6KBrYTfawRNGxyKk",
  "key26": "26A9xubpqSTfgnWpzCZhacwR26fQapWSxFVYaArzz2SoryAD7pCTDMq5Exwev9vYPmNmcehBYUhYqPByWokWYdpf",
  "key27": "32hZFmBvaMAoLeqZwf31q3KABGVpUwGcFoLoPYMyCSQZaXHJKHLWfVMWypCNShnLkrWhHbnMYiJREGeqEWPnTeA8",
  "key28": "3KVE5JmnYkDGizwEosyot9mHxPiQRMAohgywvoaVsdbHehinRWtE7JpBopNZogyEz5M5PCLZ3aZp2QtsjCV7zj95",
  "key29": "2DebgY9zC9J48LgakW5rxXfYGZyLxvXSArkVW2fu2cyjaby5s89K3jRD7C59hjYRi7XGZSsQFwRYGzZXpuZH4iRs",
  "key30": "29shTKtNodM1yTyAc1iycZvW8iF2VshyusNNFQgNk7zXnLfjP1hxKYqzGJnqh9uqyVgaJkcMkrKv8gWRwYqVALuu",
  "key31": "4dGSCsVpFc2t1XSfgmmPZyh2kGwNN7EbvSJMoSsqyoGJgouDd6uC2wgPtgibKJuu9ydF2XNYn3uDjVEi8AypMW2w",
  "key32": "2EWkX2NvKMgrUj8Ez7vtt3584YwucUJk9EWSoKjmTcmMETmetWAkAnus635Jwh9RBCwWAdWL4X1hDrvVoau42ypJ",
  "key33": "5uBaXAWZnF1VdYKeyBWvXrSwZk85kxrqmaECmM4QDdrT4Q79Tjj5kwUZQRn4oALAE8s7BYecsQWLgeSHrrHzYaJX",
  "key34": "3i3Eo3Ps8iYfk6914QkCSjGXM9og4wJztYgikhPyivg9EMEKBFPUj7Asw5yAovap8zG7Dcf92AHH1SgWKPL5vVek",
  "key35": "61Yg1fyJ9fNBm4TWC1Z2u2kbm7BEqHAiEm7DHjX5Z52ndSKNQ5rzrQC3xqw89BZsoENx92VBKaD9JAXrLSwYMyqM",
  "key36": "2WjMSgi7vNAJE9zYs92hEzFpGDBwN6iDiRUPs5MTYu3h4ZvZL3mai1eEXAB3g8YZo5qB5FxKEnzukpn2Wk6TpHyw",
  "key37": "49tHAUgwexsCqjm4yA88u5qQ5B3yxDdVJw7Q9sUuchbu3aEPX3GgwZFyRf6aXD3zqjY9zDhtyqbYqU7StZxytiEU",
  "key38": "3WKrDir1Vr4ijTKdb3kUJJG9m9NCH8Ei6SyN5ZDzMiLFmQvabG31DvwKz6e11gHK4KgBDLU5jwFmaY32eVcMUQvo",
  "key39": "2c4AmBnge7Ech7gg7rW6UznrbjCPGXyfc7XP2zYNZ1NudzvffiPVEbPMazpaR9CQ4gPVK3gqKL57ouwetWYwRahg",
  "key40": "5MqRqddKALGL2U4hZA8fZUPVQ4yYqPPGmp5S6nDhqWRoqtRhHhHj11AFqjB1udVXMkQhEzBcTe29TepMhkRCXBso",
  "key41": "41XRdB7XVtbmGcdeLroLAcqjcDSbjx6TepS5YZCEA7GGX1ZAuSeJAbNP9EHeHWg5c5vMYu4JZt8mR4ZjcPDy3Zv7",
  "key42": "4Xepkfr5NDKzHrL8HKxsCQXhhUNgMUwaBqPh7UmzRwZshgegQRGm2uvYTAfnR422ktLzPg7A4GTfuEEVXxhMdYpo",
  "key43": "4wLthWkp5W31zFR9wYBKDPf7spfvvWDifsQsq8Gfgc8yrZMsT7eVAJrRFq1St9mqa8jXPW2szN7aDayCyVXtSgfU",
  "key44": "4GZN9WffHdHD452cWbgyAsYTrmbbQahBZu24mS7SqPYZcHJRkSDG5rAgrcSkGMDqpHABJiS4r1xXzuRG3kxrSSNE"
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
