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
    "4iwaa6PeAgf3K9osec1goLwTAvgpNUco1mdo3X8s4pEocJUsLdfpUvebHDFsUo6MCVYqprQUdAb1pM96x9z2HrJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63b5YpTCKPajUT7aQa7ZKWxk9q5myzEAv8QZEUYEB767JYPdEyL79b8BVTuHUeeg85XvgeVt3Sz1AnfYaiGum74s",
  "key1": "5SnBL6PTGKsdaztbwqPvY9b3jNi7vTtbHfV6ro1sGZr9QNogPwh1QQ8kWGhqhCTHHTUrzrELBjM3RnxXBQZwRth4",
  "key2": "3meEMFSywkLsbXSpCXp69MKgMpY9Vp52ajE45JwSoPzAw4UYJJyViEryL6RbYaJBx6dYTNCNbGv9oyt4LrGMioZC",
  "key3": "4Nb4atFBA4o3HdvFiXEWp5Zit1yhie8PTtaKcc4e1FAq1tbkfWG5eZH7HQunZnHdvPfNb6MsUdoN3AhCRPcMW6nT",
  "key4": "4FvNwr3mP7MFo1veAb5eJJKkcN7WnBNU96k93kj37xZaZenms6HwbFtVb7s33Lfxrmrx7adiddM2biakCt2FGwXo",
  "key5": "4zBaJcZDCBxZUMJKVKVpnit1fhf39nqCKbkv5EN9zPez89jUjFu9S77GBvb9w2pQAYsZQfMiLpQfDJFNUXnJcXag",
  "key6": "4xU9X8TiWaeiZEK5JzGFXCVwND7fVG3CdpEX5CivTB95hFCpjZvqtaDBbsTF4UhtQh61ENWoPJsb7DujgoKZDWgK",
  "key7": "Z6PP3L75Hm1HpU2C18TkiM5ueKFosL6qpHipBu2WSvnc3T7u9cHKP1NQ7D4Gpo6EnpEXuQb9vSR5T7ZfKSFcRQb",
  "key8": "5Psv7FohtkH14nasBcsmRsobxKZsck4Yd9uJCUyjtagTG14Sst3sp2D83h7QhbwyEKSjUvwUrpzQw9agVGCRjC1H",
  "key9": "2UDKa4AK9ZxELf2WBzz1EnPZ8CDuTLg7gc6AfDSSSZiAXfDmuMVzwrxiVxoLTD2VUi3xy8DFZ5jk9ZpSHMWqQd8Y",
  "key10": "yRwmZkS3zUFGruxEQ6DsZmmoMXDzQ9LiRb55VyqxHKrXojgkozLVKw3p18DnyPFR7ddu8KXxhZS8TPug7rej57r",
  "key11": "4ZYX6kTKrTMtifS4rhQYGd79fhnD4eiH5TFPhCqUm3FErsLELd4LoKfuyV3232pTXYFTMADWtWEDzBEJRgjTnxUZ",
  "key12": "4YaHwJ4zx3ffXAYyPJayRNTvZ7UB7AH3Ufoignxt7srfWXTqgURDEaSBnCM6FwX5K9WgnPBAjUm4SWVWTw7UhVxD",
  "key13": "63sSzzSKGmuin5F6Cv6GXJ4MZ2bv9g69Ek8diSwQqZqBygFep6ycHX8BZ8dec4UwvpQdBpXh73uLqChU8Mttt9B8",
  "key14": "sCJHugc8Nm69YUgRnb17zk5HqFJuqaCDDSs3fWg5VXrzFrBjLmv97jyW363Fp18WdsVBKUzDWxJSoZEzcEowXMt",
  "key15": "5DdjurGVEbZw3wn98qHXJqStYn96Za5Q1iz2sKWg8cfTx176ES1bMYQzTZsTEEnQobphcJ9KfLh1YNiLonY5cLLo",
  "key16": "9UEJQJ1qyzMAYSa4X1Za5fusSNmixh1cNb9RcVmcbtCnJLmDMgn5rVko2TJcWesmvZw38JmhiHKpU85yrRHa9yX",
  "key17": "3Cdp5pTucqj8Wh4rYhaWiE4Vo2RC667WvP8C3xfcnmkDt2YpKzQxbWYf9cRCRwKZJiEYcyb24GYN3q1jZgBsYRho",
  "key18": "YbUfbSGEFues937UWuFYbuUdEwDxNUsr4mVnaAS5p18tpc8Eaagg5Xx6uRWNPVmVd3w5yFAHydY6dxFvn972Zuf",
  "key19": "43D6XSserkLb5PeindqCDmkVoiyNJhMiM1hMxQqaY9p7dPCdxUne2Ztp3tRY4awWBTAbMMwrzpMFdfsAQbCcUvkK",
  "key20": "SL8fa4wrJR45RPyqXrSS44kukhAcTVW323rwQos8tNP7DkPCLvWTEGdmSmetPRUGpcYTTb8jt2Q6dd1E8EZYJrE",
  "key21": "3UGXAMYe2F1yXVr59rEmec5p6oitaQwBv8h4QE18YJqe3XdgxuWPhQhKgGFoPdXf9JcyUuEJqxtoWBTx9LeK5BEr",
  "key22": "3bwPgtP52VjgJBQhAgrNJoA13wbqQDYNDWB7JukxPk8v8iFHZmipYhHH6vG5N85BTbKvGDNJsN2Wq7fFqJBChG4F",
  "key23": "ipzGBUSw8uE9RzoXxAW9Ug5WVR53CtAoWmef8L9JDTxTr2PtS98ytWhPMQYMdsPosjvf6BgJKV3K5EZTtsYF5x6",
  "key24": "m232kXDXBUKRqjecMWgqJk2mxfQDTqp5m4YTaW5BvfBXL3XUrtRrjze8D46rgfJMvwNRXCytkCH9cR89WeSV4BJ",
  "key25": "3p1n5LhaGpFPznt9ppaV7n5hNmkCYia8t8XrfMcD7iQiKksvDKEEdGp9EAXk3KMpSbx1oiUnSqyAMTDd3bdy1aEs",
  "key26": "emTsqkAZWGnh1WGhTNeG5kLRuotmLCmfzGgSZw7jfx4MSD3A3X73zPcDgZeGQZRUwUqiLvDVpxHghZjdU5uZZoZ",
  "key27": "35c8o2CnxjUrWmhWqfEYNUaPcX98xMpLa4et75h1hogyVDzFfoQdRPkAqw5W3Cyi1rULMaYhgEpJL4vX7BQ3Bjib",
  "key28": "5i2PnBMSrPdX15FxHnwgpaSvSXAqvyzV5PU2FkvJZbUMgNHkWfpUSYb8obyfyqthEyicpV2CB1ST1LgicrYCMdd4",
  "key29": "4Hn5u4FTJGthK7oAoYnjfyHtTC3KpAsyfhfP2845Ud6VGJcLahdZ892CG71UC2p43n63H5rbJzXS68ec1nEKRFEA",
  "key30": "3Yica74mRLwxbfy6VroByvjSC7tWYGoo8D4GZBbK96q9RRc6NUfcnxRZZCbTT8e9n84hXyAFFpPgS15G1UwWcYxb",
  "key31": "4841t14zxynaBBkfSfPtJobyFXiXktrfSydkxuZLuerQ2kAC5PpRS4cGxcarpiXhJKroby3YYcE5etkn2YDBbegU",
  "key32": "5KgnzM3M5im66N4y4X9mGoAFtXJqGKbZWgf2MogMbS1MJ7Lc4ZEn7XTjDE6p3mCDmRPA5gJWSFAD7C2hieQ39kxH",
  "key33": "12VhfqnyG1qY2EidjDfd34gjJ2T5Y2QbsNpT6vutk4Vq6XRD1hgxqG5gE7hPMthoRBVsRWBzfbowLynwiUPLJ9x",
  "key34": "3iCdghWw7eCdrevi8fGKcbcAyPAMv9eth9BfhohNRPaw4DyLXSiVLKyXNvyatLNn91fy4Q1dHhz3JBvuySrNuMA2",
  "key35": "4FtG38PN1wR9NNVeGNTqfgfzeZ6kSzZApK6TcWxLfbh6wWepb6hKhERKjyTUZUP8ssT84pa5H9SNQXBLPnPiD6fU",
  "key36": "VEZsT1oitUrT2hY4qx7V64ArQ9uS2cVmh8RSQJVuPQqwfwf84h1Gb3DrqMrkzKcMaJtTMmy9AVresKapQoJu23S",
  "key37": "4rzw1DD6zeX4B7PM7fMcuSsAkDhwzZd6RbN3ZPKG3f4jckU3QQY67caJ9azjaLhF66TV9gjELbbwJQUjT6pbUE64",
  "key38": "46xhVxgRFDx4ajqBpEUryaz4xSXfBRSviXKtz5wYjXNbEx7TWP78v29kn31QFrKiL82jQdx7frVJ95RcPtvy8Km9",
  "key39": "3D3K3KBUhYptU2nocwxS3YmerK2cVjVCg5SJBrfsUmrScapzop46ncLZko4cb9sSfQuUABVcGn9HDounc4Q9ajTw",
  "key40": "rZ8YvKrkgaAqD6b2ycRnT7r7xUFR1TUeLiqh6h4MTyhdjB614YgEPjFFV77hqXTMNL4k72PshKZKADXcatLyrqa",
  "key41": "uvdRZK7odHQVUbEUx46YDVFeeTcfzRGcX1YhV9Yao1RNYBuLcWKyG4zZgEx1K27v4JMFrAQdVd8Y8ZfqpM3p3ZL",
  "key42": "2S5H4HSWSGJG2gddgFknHGdWP3ueJiychWbZGezcCETfNGoG3fTxPEEmHtugUdxUWHDiVzqU3wB9Vk1QzCtnCCV6"
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
