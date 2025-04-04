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
    "5p5JsYeQWHnRs8xjE1ozNsdDSW7XDqjFcCaRbszzBZ3LSoLmmyV5QshnwRYhMKv36hVVDVthTJBfr4t2BZ1wZErw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QzLAbvqHoG2eH5Kcu1xQWgQ3BP8dgPhtpPUrYYNyfvmRDpSNipJm1Snnmi5meH9JtJjPoFqxZsY57AdbUJZXKQ",
  "key1": "nA5d7fKF1izgaACDk7FdGreGJJdr8M1f899PXMowUY6QhRSv1bGBAPWB9P14hfQUW3g9RRDQJanAaHi2PvkeyW9",
  "key2": "4spKow4rsKARhAm4zesW9i8UpuCLkrQEBwuwMRK4ptC1sXot2Njaz8c196kCYH6tMa4pK6fSohwWih4DaKoFZx82",
  "key3": "5VZYywJysNLW8GEY3hqdygd65LqMxz57s55vvVJnHQzPNeJZKVnyek8PdNGiGmdSa6VRtXiGuaQR6QdonuuruyHZ",
  "key4": "Y78AhDm7W6yqENzD4hMN3LYmrb8myQ9ryMNRBaHnLmDHs2kAn88L5412XevQdWmVwnywLJd4J86DWp7Am4D1nAn",
  "key5": "31Ug6WRu8gMycyVkyepfCstRKmX1JXyto56uWT1esEYFMZVXk4Ly7cxj7euMxkoE4mr1X41GjC5tH8PNDKuotUiP",
  "key6": "2irahu4ujaMmBnxmBZt3xxQ4jFKzD65dSVctDStEucME1YvTJ1KXSgEWNugGRydtVEncr9SvyTHZTwrixG3Q3FwN",
  "key7": "4cqqqmqfmbXi23jgVhqMwrJRwEyYYe1LmeeXhJFvAsMKgzYXo7uPgMZqKn1eYqJVdcpwNrekq7YVyNyi382Xgytw",
  "key8": "5a2JBNgUNiFVgVfhdRM11pQLVTyhAgizoPXGAnze2bKBX7J4RCSF5XSBLYgEoYUy3vYzB64YK2LUn32UjaXA3rz",
  "key9": "5VT5g5Rzh2N7qXMHPiByMFpH84bVDzPy3jaNStD6qXgYTEw9ducZt32fTbNRomAdxwLnGzQm2TSSqSoqi2ew4D2z",
  "key10": "3bfSPATK7UcyJrxSp1QBMj1VZvfsiBB3rgV44Zo3Y2equmF7o5oN8R8DRFPJGRZ1QzfJbeKZnuUggk3VLmydjhnV",
  "key11": "23ySVqS6wh8nesifHC7jjmqbrNW2srAS1kTZTaJiu9MfR4iEfKHuKuRDT2sSBTztqsrrFAB98X9G38XsEvPEMsgF",
  "key12": "2nSswQVrvLxnTf62JVp6mfGTEsFPJpZpaGNdtv9NPuBNdwMngdZEpEvKUczuTKFVFw92UGzGdhY65fN2kHj15FkU",
  "key13": "4zXVSLgrAT7HPZNwxVu9JhnFn18nhgKM3245BicLVMLjB9U3zHFS3PnD1vm3diFSrpokdF14sAhYjjoASBA2KQC9",
  "key14": "27M1PUL8QFJKedXZ8CgnAEtM6W4qELdPj1vqqxwef7poskKr98f9iz9jiyGvAoea3SihpQn4XDx2xynYNCRWNopH",
  "key15": "4e8EzxRvLsEH6RGUoVYRFceTUb6UbMfyf7Miqfo8rTsgEAxxbx9gp4TA4ea1NaXNxnmJj3NTSEBdWxmcTV8Lj5nk",
  "key16": "3CvLmBHjTkvJPrrsPuq8SFePRAEoPeibqAWYki5PsaT4NnMayvH7do7wZURNADKC9gaf5eiyMKrvoMfwkoGVs5tT",
  "key17": "5V9PDoKo3j4TnFaK4RfDy4MVbciVjZVufd9jceETfjvGqxjEhJssb9MvfbvyXG7m7uEqnoGX1qEk1q4e4tG2zsnN",
  "key18": "5oyX1vcb9XujhpcsVmvJXUHW91D5Z2iiRQyLgVMhYYJLtxW87i9RTiTmaBKnNM6c8XY25FjS2CdpLJB8rDXvx9hy",
  "key19": "4iwikK7EjXPMVHUmwBjRYNZ5Lz96d2Db1Gb67SpSgqwgsd3Ttr9WyZrbJhNecJuWyGHGYozSiK2S98gZCjHUvTUF",
  "key20": "4cTZYFXGBS2BDuncAEB179s5YHsQQRpLeJj21pU5rmvxuJTNZHzz7WRBByQTzgzKtNVQ2SnRHC78FZ3aA2YCXQKE",
  "key21": "vUDarMtJ3EUKwTpJDahTiQqs7dKyMgKHcBerxHUVU7gF28c5nzpgMfcsd8xPwHkXCeGe1tbWDq6JdK3tLnFHdLY",
  "key22": "3PrbHKrdNgUxn11qyWVdb3bGMj88vkpjnNZg9ihaykbteWKQCt2nsctJjzndqsnEAmEC7LAchWm8R4kTFcDdVnHJ",
  "key23": "64vLL4gmvWhjYy19xx1NUuQd5wpgayM5AHqiVL4GMoptaqWQVur7DLmGEd9cqQB3Az2gMtkRmBymfPFNV8t8zkn6",
  "key24": "3UPxPBUDqGJEgeDSznXa4APt7aUFrdHs7d82eSXysgNjqqxfugftYLDg8tGW5KfgWyo428dATUQGjR4mPyScCaiP",
  "key25": "35CEtfeFeQ57TTWm1cqbaPSx4kmsd7VZXyEwHQSVnmkkkMffCZ3XBJyXyEHG4HXEzVKkXySArJDpGr5hBvxfshoH",
  "key26": "3zUxcaUMMtkkcy3AmUy4tWWnyN37uyxFu4RULaksMgxy15D2eJnUqEEuptyZrbZwDJ5xHUj3L7GCDHqtPH41fLxm",
  "key27": "5YfVsxXEZz7o8mqVuoKBB9jMbpmroBB9YBex7Yz6XKGSP1W6XzM8fwsJMnPnb2H6xmKKZm5cmbrbj3XC124KjoqW",
  "key28": "2cCuhPn5g1aTTcP8cfaw147ZrXMukhvWLvXfY4MBq3TLS5t2XXRE3wHsWEHTfLNiQpUhCpd6WLe1Hj1X7e2BXMF7",
  "key29": "6PLwnNZ24JUk4HQWsRHtwxq4uN7jgsxwnaeMDxuLaCbmajHnEneTmeGD5yv7xNwE8ctcPvmXPPGxeJ2854jfqkB",
  "key30": "boMsbgSz4fQm1bLeJuarkCEk3BJHSsFvPYDk8ry7akZikdWheYbAfL4tLBR6Y2F1MdqbyY6ecc9bVpNnjLQTgRW",
  "key31": "3rPWjfBL4o5zgBJJnmLmrN5KdQX27JjWJ9uiSFbxJV6u4Sh9WXfmPrgqHcdwadL43iTT6AP5UqqbNu9dbk1Gw2at",
  "key32": "4oNDtQ6e9USMg96qi4kJatPVXvY2sxayRAZAXFEpUVr7KaVpidjg9hZrwfyk2TK4T7CiGW8PJ9GjoTQmLVAyK3me",
  "key33": "5jM5TjmXtsn5zUyhMikrXZaYVtPG28But3BZgsxq2v6ckJNa3jLKyBjpMX9NynRxRA8mukJA2vHaPmHGr6zKxDdX",
  "key34": "3XaUEbPedcNzmWf7oG6hk1GpfKzadWmCzdB6U5Rc1eU88PZJzPiguyCRSdC7xkbxjor1HoPeCW8Kn9mP4AVBmp74",
  "key35": "3bCYpdS5FAqPerJq9ydWoV81Vez83waQqQwGQqyuTs95bpLqATz3emT8nNbQMmhjURXSzCu8MWU9PmLJ8CvdPy1q",
  "key36": "2oxKFjHPg8kzUVBkQz8kyuw6pb3nxafzyUaacU7nn78AVMr3jAk1uiN8QnntAyPFJUpSHY4dsNdn4Eez5DKw5QHC",
  "key37": "2PqAq4zystcjcyrYSXMvgBDyr9CM1Y7qwBLvoqSrcg2x4PbK6WP12MAJx7iBgs1VgLWUw5ypP43cbeHVuHRDPV3u",
  "key38": "62HF6jk4K8XaAc2zCBUVkHm638nwTximvxnWeDV8rwFmScZUSeeu7XmU4EXACa9TRrmd3tfU1dAndoRm9mCBT9yk",
  "key39": "3RApgFQYe6gFoHUvPktxxvRRhgV5xKmEUGGMrG1La4mNY64tTzpHtf6Ezzb9nPXQGEWYiiytyxKuAr5z4n66Ehq5",
  "key40": "fkEcgUHzTU1cS5ALhjZ7p3pPswiRX3JZo9RXcAJMxu5wDKz8USnEq2dbTJUHsVkwXW9ggPvwazB5NE3Uf2J1TDF",
  "key41": "4kGYvw6DP1nSZo5n8UHvcNWjSvbJkQgFzuMDemyjRfCEAewhgZzj6j3Geef2pCx78E1N4KH5rD8GUyUtHqitY91K",
  "key42": "3TaG4YWZLqDn8J8vzX8xHsK2RRLt6BGMqfVBNcUdnw6bkVT9LCcEBf2LCyNPngTeXLcCPEj48FbbPF5Ju7DSQogJ"
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
