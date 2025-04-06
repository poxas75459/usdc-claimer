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
    "3N4KxPSBDNiNP8m5j9cYDtBhXWmn7hHNuASpNihctP3WGGDBpQDqWZDr5imA9DnhQTNtZevbnZPobMhQKoSjBfJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuR4axu3BXxj2y16hEnnGSsePQa9VgWnHW4WPSpB8BJ1ijyXj1VFXe2rG15jjrPe2rUieZVyKmP1kNdGCfpAmd4",
  "key1": "orW3yACPsNWdTYKJVQBYxLJTcqpHFKwop8tsai6gcZLBBELxwTp5qfYsVLKGm2Lhb3cpwKxFg1nx7rgxPE1AJcR",
  "key2": "2in3qccQBStU61GFpBL57BK5D5Un7aXrsgxn7KDUQM1GnSDJhegEADEcyPNT8tfoLG43Eax4yX2w8LDEpUtrVSVg",
  "key3": "77F26dDG7wACihG2Gz45kMoZUKGFpikvMiDwqw6pA8UK9sMS1Qgie1LeifLeYTk6VVMQU7EE4jxBovcbCVchnWN",
  "key4": "5pnSreH63e5AiWojzyrRzJVwpDSgxhYDZw82dEexN8idn6GDbEc9Z8GrJJNXDHd43jKfzFrBLbrwsM5Luy8akikz",
  "key5": "4WEUxg5GKSMfkyYdiGGSmENKTfjsSAg3YbNUxrxh7tWxVaqmySVJmzHi6NvD7eBSiQgBvk3sQkLhN27o17peMmbq",
  "key6": "MoPzKLau8GEwWnSRK6ujra567LXjz6inYpJLPGspa9UPjhs7p8h37sW3VqhXg9a4qzVytk8mgGWvd5DAyWq6NkY",
  "key7": "2qgP8motYFb6g4WgDBFvr3td4ND6rwGwKYVRkKzzYDVgf9WKUyk3XNPUeiQ5e8ZvvafYzHTouBBRrMzY8gMVaWYL",
  "key8": "4kE2n4qDJT6He5BGhx9NzymoxoRQGirjBcCES86cuQkDLbF4ZcCFL439YiSMhPSwW7rVg9rC1xiRqCr11bUr287b",
  "key9": "2hmKVNyWjs61ZK4UFyQCpuMXxTTMs8wYaxDfpczm6F8ysWWno2gRPFi36pdF3ZmKaFbgWcrAYPa6hRUgGoeYmdwC",
  "key10": "3zHEzpQQSXBbWXHQoaZF8nvDr8JVdsJRBet7wEjPf91HuVPMDsXtkaSYQQUrjLstLSQVdLGAG47MmafFy2bxwp7U",
  "key11": "23DU9Ds9mwwkAmJaFi5oZWKhENd4tJ46e9ywVnP5MTbyGNSfP35qpTjABxfQVse9ix4oWuQqeodJ3tNvCMvCVn69",
  "key12": "5kJt1XjtCgF4sttaTnmwAzzGmbg8q2CWMzoRzsZxDxwcTLwm3NRuZxXvm1b86ssaWP5zoEtz8oubCDnX883erWLU",
  "key13": "4jhcz1ouRuYL6znX69z76zTKJASEhLsAui4xppha4QJagv3kmeFkL3pkQriSRU8zPXncXBeT33P73embhqWKSsR9",
  "key14": "iNf5Air4CD6gmL2htmcXnzATT6VrLE3pzKAXpYkyhPZ8YiwmK8zcnUqFn8H7zTugcTT2yBnuojzNNVBCeY1ACH7",
  "key15": "3hNtTzZq9kkxGDdnRzBb91ywt848kf5cX5rHdcs6RdVD2PrDczcABURaPzgK4cSVxfzvm3J1gFCCq5xjgRGYxWBr",
  "key16": "2nstAGuCk63UZQyf7pceRMCrAGeCXNxgH9jnuSXix7XFYqfFX5Wrxz2JKtYZfmJGCP4qE2PjCvyDZ1BK9xB7tgqd",
  "key17": "4oi46WVCcxqZU9nErPXkPeMEWxgxczE8CbL3QahesZafpGF9q3dya17RkiW4GuJBRWDkzYVv8wBgCpbWJxSN5VwR",
  "key18": "3Ey3Rm9M2ADVFyxNxbZZWJY1MgURt5Tng8BrbLz3isYVaMezq7gbgKjqoF3NwzSnJKLaNK43YyysE2omryh8ZRd9",
  "key19": "5aAbjMMsY4P9Hww5yy91XcW4SLndPha1SeyixKWd4KSo3r37AQ177ex6Z48tBWj74frDaUDgzYjZPJUJhhaLXoKe",
  "key20": "2dqtdMYvXTvQvWehmtDUPa4DqL3yhX9oMzKcHLNpcQpSWEzYq2oKHsN1n9S8xgTK3TntPoCPKXEk3qTg6K1oHv2T",
  "key21": "2aVsQZqMkArduZQyBHptsYzvUtL3SNS8E1RhVPsmaLjonQGmnYnxgMqCR1Gsv9ZmoKbDUrdey5uyRXLwdMvAoi7u",
  "key22": "3jtqhYH5q1kF7dDrXB8Lg9hS53xhW8o3jWZSsvtESMp1JbUcghzbiG8baVNHP64An7wd4e2ZAcvahVV4YEMS27YP",
  "key23": "4MuY75rLQugwSVV1PGc27YcZUL1MbzAv6xsMuehTvXHRZ7LACQwCa8rGKy9ZRpbkbtVm6BBWhWWyGZchxpJNiFwz",
  "key24": "2XSj8eVxeKS24tJeN8f5y4ZzBz7xooiZMUVzajSczGz8GzGuDp8pmycjr29dGh6vH2JtoKRtcW3b4vn4Hf7jqoPv",
  "key25": "3vsdV7fdjerfRt2cvw9UQuiLzMPYSXDnWJuLTb5KwBZ7adyp1UkGKxgbNLV8D6vRkqASJDCvqHWrrcuiubGPSyT3",
  "key26": "Bm6S9u1CcmdXWyRLZbRYH527xzNtdghDy2uefPzmJNSiBQaXikgCuB1gjBSPUfz8FNiyMzCWmgzBchewpg6vkFJ",
  "key27": "2n1dVJhcmYLAoT6djggotzZAyHyEgrVDaodMpuvDbYvcJKFX7WjEchB7dqEFuT2XRwHvH9Px9wydn6NDZT2QTwcU",
  "key28": "4YaTueH37NxVC9QcVjx32xmpMFm8jjegcKGNx3NCgt5cr2HwZG3Qr7mSsWnPYfjYrEuYBzqYw6p7AsdqGeDMFBsy",
  "key29": "35npzs22Dy4NN9DjG6kWX9TWNxDoSefBbCtBJuaNXqSwuzh8Pcx5WqoK66bndoHxZu79o7Jtvsu5rdZCW6ueAVSj",
  "key30": "wyUcKZjExZDomwqLxQYma22HG8TffPt4YE8diBZdS1MauVWCQpT6b7XSGPwsd5M6CaEBbSWZFjqrEMGXZQHhAPW",
  "key31": "4d5Q8hSm9k1L2Qm94Fv3BXwQCoGRScfQ8ErDi35iQSGDVqTx1GMMpek3dTJ5PytrFv1zsogqYAf2q3ov4fEKQfYw",
  "key32": "4KhTbN1dK3XPdcmoqZ16X7TYg49Pz41myAj4i45LHkjFL3ByuidHZPuPPhu3uHZCJpLSQ44WbkxsL6oia528pu27",
  "key33": "2Ndid4VrFdpCEAdeBy3NozJZiNKHMDcxaPQeHAqEzs3S68BEPhCSfM2k77fjRuim1hMHxYQU7XdbxFrtZreBE1RM",
  "key34": "2zxqXc1Rufrb1z6rJMUdecJcmeQq8f3f1XJhGo9uWaK2uzCzmhift8RFo4VG67m9WXHPisrkc76soXY7SErsBBPY",
  "key35": "brdzTPPxNc5fKyJEioUBgAD14No8m3faH8kYUT3U81zobjcM7qgpVVFXEgERq4jSd4x7La6GA7V8AbyA2NoQbff",
  "key36": "AYB5tgZUZrgZbJBbPvHGeXXJMge71sWjNoYbs5tG49zUXuWodSfyRkWh3TFxxi3g4oTzU8yKu7tWn7kE9AhmnCU",
  "key37": "3hhJmxSkLG5cv9X1kTKstb4p88szKDjMtHem2BBLHvNiPj9xn5TTZZ6MWG3vahbFVLwTBmXc1zoDJu4hz6V3rAMx",
  "key38": "BcuTvFg5CVdEpcsAuY7YohrRGGLTVov33eFF61Doso5g5dX9LQdryA3ziNCL7qtaadUzwjdt81ZpqUeELdSnnL2",
  "key39": "4xpwvT8L1D8gUufDRpGdiHQ7PcWL4chFvmETkDss19xzHL7zLbMKF2dP3RohHEd199sByvw3YpRrTtWfXsL4BR9w",
  "key40": "4nuXhwCd6RTpJVmtkmPWcWBWx6BzmuEU9DgmhCSjwrjpS4dibFmXB8vV6PC5x7NMgfUGB3oeWjBLJLdempzuLtM3",
  "key41": "4s5fDixMyvw6rLidwFr7GanBmjemNuyyMXesy9vCtxCekDpJhuuQbA1HWsX6Ca94Sgfu1TfYozpri9YSYcqUPu54",
  "key42": "YKVAeBXUbvw1JYc7uJqSfTTFu4sVkAEiEQ3jCpnjHzRpgH3d114zTZrGzQ7UXawSRWtwQe1PCBiDoHYHVgRChBw",
  "key43": "4be4Hcp76BZ6feaW97A6c1wittEaWHakkC9G6sJFxHaMdWk4bYgw4iRbpCBwfTVFE7GoJLaL81yvn2E8PVQSdkVE",
  "key44": "5SNRU8bQq6RzqxN3pPHTjNBt5SkaonhyMfX1YEz2sUyGusc4DhPUe6iy3SaLViNixAC78JYTNACmqN5WUaBtmU5P",
  "key45": "3paaTG2k61UkNTrK78ZaVWCt8mY7zBkzaeLLHGfMeFQuAxVDJXNKJzTQURAqsRgMiLGWZQNr9w3mFeySHFRBQfYF"
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
