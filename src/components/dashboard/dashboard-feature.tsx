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
    "3VPBC9x5oBEaUed4KPZN9UWHk3H1wAmmUM7FPpHr2m79gbDCPghsRnRirHX7g3wMxtK3gstQ7bMUXnpViNgfEYMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZACKmdXFmHi5uvAGCAiqWRP5jrXaaudJyKQLbjDDNBwweV48n4o15294thb2WR2UqDNTW7DQyijWzXGCg5X2Rc6",
  "key1": "3nGXjP7wm9rJZfHpn1Wbp7Zsg5YiwQ8Z8dYLRkUMPHqhyaxQHWwmCthkfZ8Aodi3HJYWTfRfemuvLgzp88ofuFdR",
  "key2": "3T83fX4gZSfBdKDAZ2da8HS7eG4oxqjxGT5N3WThGrUwCd8DvqnMWUQdogFvrZF2xQtqsvteiRstZFocjmASNuTs",
  "key3": "54FyAbdgzhrnzGjQCXJEzAfu9g41o5PdSniVH7JQt8tnfZwLp9JV6yLBvsdvYiVUJ6xuQiY6VQwZ5ZXkXMXjmvLY",
  "key4": "5ukMMafdxsZCV1wnvVar5JGHLefEM3aAHuPJhk1Lx1uor2xJdZ7n4LrwigyjHSKTetWJtbjCgWvCoGW4FRmk6WNH",
  "key5": "2x5SfzWUjWKXsGRZ39CnXNoP2XnHtLiGYPZcPiPFBrbpUSTUDrZwJoWd7isERAPvFqN87WVxTyQsYSxGcoZS7U86",
  "key6": "5qYNtRJSj8jDKU8jviL6vZ8QH6EjazUAXPDVMsN6anHER3ktDpoBik1aBii2stUAoHHimhosZe3wwdmgowuFxw4s",
  "key7": "PDmLAbQtvZMZHA7twfcym1Y2GaHYZpBcXbwgwAiHhXLZCF7y853fWnqH12yzGRanD95FnkUdT1QToy5MV4Gcxhs",
  "key8": "3rUgc1KD16ETctNvaKgX2xTWPT11DNUVgr5M912U7vZtzGBoC8zj13xnLQtSdkZSLnsPo3dwyzeJ3MTy93GWFt5m",
  "key9": "3VR8RXYzFmK7VKZhZietvxv7mJqQuKBqfq5csHWKB1dtyR8eDZAVzqVBHwsiiu1mSFb9M9BZ3q5M4JJgBNhFwTdG",
  "key10": "xsZzDaJRRLqyRq8Drobaa9DRafq8UqJpffhJp2tBwUcsqzuUWsAPzcGWUuXYLrD5avm8QMhuSvdjAu1jCDAe1St",
  "key11": "4pBD9FZhDHBnAZzbnh9LuFvKYe5wkGV3e2wLgZ2ZxVR1gZnUEuzjGYzosS8Vx5hTqXBvJCXghfueyMDNnVyoYUbe",
  "key12": "2vwqJCj2DnvisQFixFoE2CV4TQKiXNXtC2iA7ypFHCkb77phCeP5VH4EbYtc795n5HK3TAPvZbifuYDhAqBL6n7W",
  "key13": "wUNkVHwPwJccMfyFJ1YVXSZXQ5KLdQ9LuByaQbbtEw9XcAu8ygihnueqYGicCdPy5DP7uoQMAnrkfbbtLXHUCjQ",
  "key14": "2Z8UV9tgbuRT4G8m3gPWUk4xYPXZQk5tKpV9hQBK9BuMtj8sRJ6PjXAiYvmWzSxupF5otGxFmu1YJTgBZXT17xZ8",
  "key15": "5LVF8NLjbJBuUXu9KheFqapCCKVNYLHHdP1bXZEK6gihpX9GLbZennNoJXVZSANWrNRckUyWpdf98GTZHK5oiaSD",
  "key16": "2c7qgy4YAV3SF8SN6eiE7FsS3Tg7SBeWGZfiXudnFTL7W2bweWuymqXuM4joSDVcsB4qkwgs98Qfg1VAvBZWDNwm",
  "key17": "4eEP2gSLi4Z6jHsFgHqekM6EyGW89MP71ZFdz4MD2hjgpTx9P8asbs4w6kPC3Mw7gTRgQpqbZpKDPAEmfetT18yu",
  "key18": "zqCz2mmVrJ1KJG4mbUyo2ZvqwXFSnk2g7UKP2kwRxsShA7eP9j3NTLurbLJh3gNb2kgCoFyoVvGZX5dV66P771T",
  "key19": "YrFt8X9RwdoYhKC3LN5SNs5EGEgGrN1jRT5iX5ScUypPcdEH2svh1nVMYL7B2RRGaK2XpKr6z3cZno6MS5roGKz",
  "key20": "3gdJTzK2NKuPj2amRLdPCZzGfe5PThGNfmREKJE5wxogwagBNNaq1tWiwECYJwQxyREFEEUD5wZMZKBHAYTSTrtS",
  "key21": "3SUj6WndfuBRuHuByrCY1mEHkAJpLsVZ64GxBtKK4WKSuBebvVGAaGqbntJ7uMSBzDap1JKxUJoHjEenZGB6uLp",
  "key22": "3q8MT24dPV5sfTNXBcXxnF3Btxs1xscj8ZAFBd7ayhFyCGPPpaQEHgqAAmygXDexw4qJVqfFrKZUzJFpZFpGsMSy",
  "key23": "2cf5iCKtTymMwYnPcxQFFLxxi9ZVp83kvBmKRBzixZPg2gqa27gbZakZ7muTfPpiiuGFMDS3GjoZtRmeDrwUfdTQ",
  "key24": "3eLqgJ87XbhckTr3u4w1w2qyyY1QHVU8iLomra1Yw1mFSChnqnDhJ8ZD31gdBRNY84MXyfZJR38Gkoc9EminEDNV",
  "key25": "49t4M4HVyfieaa16phESGme4uZa3VRxUhvHGoRmBjomsJSuQoVbRQh3YW9UcanxM73zUJktdWMysP65Pmqvmj3nd",
  "key26": "3mXr7Cd4phfU7Vxc4UmZytZ1stmQW89ejBJCW9k6NpQyVz6hr513G1vUWgwPHoFi5x4KAfvuEdS5H5jnsLtcNRNa",
  "key27": "4cYQDfnwKSktFJNuAmzSaf5hsSs8Cy81BjMAX6k5KBuybLR5e5atwNz6G7NcgMqQsZdsWL5VqQoRgpsC3fv3FuYt",
  "key28": "547g6VBEb3PWN42tZJ43LR2QMrnxdGGXFTXw3KP4MUk9xuNvLYb4wQyM1ZPxJgyVP7uwZBiZQZi9FGyero4jTKL1",
  "key29": "2Adbxu5x2Uow9n6iCdDVetrKbcP3Rcxc2zRPwUShKhAMWigBcg3NorvqKwj5CezAFmNxhsKYaeHbbsoUveTAMnxP",
  "key30": "fMe6dCBXZWmqddKfCNTDfryDgHF3C1soniaw7jXygmgjqHAy2Vc9ra7dWYE5w1Whb2yt4PSX6ScNigFpLBX6bW2",
  "key31": "5dSo3EHhfAggzbdGSQyoog4ZWG22iNBLMxU6M7oaLFU4X64iKHXvNktRqRxS2JhtesdAuvhfCYYv5RPCkbQedKqr",
  "key32": "5voQ5gnNGKghk3JnWn2YCgCTmVRmdgP7gbHtQkwADjYJyaoCqYC9LbViXDxcz6P9XifjCNYrKDZ7VxfL7k1Ti51F",
  "key33": "59Gr4VrHRwMSPGzC3nRdfUKGrgeTRxHCHtxUBSRUkxzjEtdGepgqjrkzLkXKm2ytrFCvsaiFYuP5WxgJ19D9w93f",
  "key34": "2LdL5ArvGF5TgdhQ8ejQZ7puUohpA38NWGDpNNAuZSoFcrUSCuGWmsZitTmYDWUsqGbvyDgmtFndGMRd6oR7aX6o",
  "key35": "4apAooUd7EMuBtyHHawJXSvzEVE3qygSwpQqkT7fHMrRACEzfEBMR4yEr2VQmQdrPXy7Mg5jcvNs7D1NHHofDzVZ",
  "key36": "v9QLREYH9P5CAbmRGQdzskLYHPhstSJWr44FRLFfqzZMqFTMdTgVjapZYaUCnuPHZJjFABkWkDySPPhyNeznhkX",
  "key37": "2JGVidTBnqsx8qhUUew3JoZyvRZsKHFTdRxgoVrYegdqk2aYr4b2EAA4qVB4Fgxt4fEoGgUrVEJBJdZABbymdaTV",
  "key38": "2jTY8UQ7ivkZykDtoKAfkwzUVkTSFbPE6TdFBgn2FjkbrGrfNHySXmVs7rBsbkAU4H2AWe62DM5XNpFBzKmMXhyM",
  "key39": "4wEp9GtwL1Wv2xwfcQgaHtgUrZQyeMAqj77h3UDntN9svdWVuHNxreyX7bRd8HP6N7UDbthYZC4GhhdV5MRgyPVj"
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
