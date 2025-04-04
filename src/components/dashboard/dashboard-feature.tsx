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
    "2igXMRPyUVGrS1VyghoWzLJLq7AM4swu9TKcPbiRagwMnsF2efN7zAPCuCUwcwdbsxfPbjeXB7XfQ7wXhyixr9er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26aLMa5147QuXid2e3dwtrmTCJS4LEiKUEQBhkPFFmc3U6peTXTbsBA26rP6QZnugSGfnbBac18sxSpqByosF8A9",
  "key1": "2fTdFAfANHDeUtPuXgXwLqG2yXysKnUYesgw4WDv6Atta3HMTxmoKuQGGGdsdFmLstFtadUwPTGZFWWnp1XyXWC",
  "key2": "3KH6p5HpbkthBDzsrhyjAafnFBo7jL42F9FqfvPzJGNbjwJWaY1PoQqUpakAFAtzAxBwuGmh7rxp4KjPZyV17xNu",
  "key3": "nYcRjfV27tk69gbjRzpgoyxnnQFCmVyKFSwhtwexJf9ZzarRdB88H1wtbZAoo1MijfWYnXt73ncoHuZUktXMFef",
  "key4": "3oun9783iodwGWmWnkwdxs9Ko8aaZ4gmVg73WCnpZdx7yBNR1Ks3XKYP5e1godNSsmXhhMFbmiEQsi2jjs5DQ4x1",
  "key5": "2CaE5MYgyPRVZiynq49ef4KgT5ubZoFgaeKzhEZLUnfDAqrGYeGLWWmgcPQgoZQ4L543mEbxgV8v58KyVGBvNvUC",
  "key6": "2wHyxvNHGTjJE88T4gNYicang1L8YbyCvJnVgQB8Y4w9UNL1483i6FzCX1uQjN4ZYp94aZBC9NP2wMe2GMTQ1fAF",
  "key7": "5RmevA2Nhtq2ie73j3AHmqPMLNaXgcjdWG4gRvgYB68E2gxwoAwWgVhp7bT1oTb2Dp5bsQ6ZKxe7MucN6cBfvsE3",
  "key8": "5hC3TtTQeyAuMbBLjkKtDL5gHFpEVv1BBMYxg7zkjno2LZUPzMb8fjxsvNSyEB3s9Qqqyr71gYzyRJrPB4idCMT4",
  "key9": "U2gGaKBcQefttayzoU2vQxszkby9tgnue3WMM2bxHuRKc3BobVyRWjqmiqwoXeoT1zep4DU3ebPYAyrPymNxMFq",
  "key10": "2XnqDYhMhTrFmLUNYMaCaoYhnNUbNdCj1HHHPuJ565ccNFKXnVHKzXqgkNzF45WhVUsEtgSqRuKbkkecT1n2vEYU",
  "key11": "4d525w9oSZ2yJsdPpKUs3VhR3hjzxkAYsGxwHdH5cu8g8j23FhKXDFJfXLC5DwbP3GSGw2yW2QCUEzzkdwiEUtCA",
  "key12": "3Gv4Sfg5BLZPWyKVxKPz74K9NDWuQdzynVG7nbYhUMYA4FcTZLzC6RGAi3xTamhiin28bc4Q8CUhezZ6juXCWPEh",
  "key13": "PF5EeaEqDrrusG8E3E7MY4ASiBC5X2cPq7AjTmX1BWvdyQDwQZYecrt2mQ4pLLJhR5NwFByfUi8Sd2yJSoDZ3T8",
  "key14": "4DNgFDfuDpzMwL6DwZMNsZQPPCVeFmSwYT4Gr14DpLKdJi7dbUm92aiW1FoeoCLWuDsZkdQiZq5xrhsLq3BZMtXx",
  "key15": "4EMCn6zCVqDLNdV2cBqKgsy93yWri4WL8zUqfmSzGtzykT4N32fgomUCxkpCHAnaQnQudG6LCi2tHBEnVNqy1SUC",
  "key16": "3Ys9ZnSkPRQgYg57rLdQU6b4gcjPpj1cJZ67adGaqJFjhK42R6osusHmGFzsH3aNwAQdzUVGw5XsuhaWvPFZfbxY",
  "key17": "3wUBu4MK9pGJGHmU9CnNAwQ4hPgwpuZuGXJptCu3nHoY7XD9MZAsXmxd3icdoTAoPzZciwHqyoMNR8YjAaGXHM1r",
  "key18": "5W1nB9AM2TKGUY3AX6oEjWrKnmh1HM4u4Kuja4mQP1zC2amsko9k3ohvHYQ5u69vhiVZzwd1eAe3sxsz2osmtM2m",
  "key19": "3ZAcZHaDVmBmgR2EByagJDk1qeTfMbGkPR2nLXo7PvM7yGCswPZaop7PvXrS95npJoAXQzZcMqyFG4swm8PLkXkS",
  "key20": "61xKSjsPJa4ooQ9AZvb7Sp1Z1ceSPRBBJtsBLZkGfeX7L642JLZjWc7pp98EnV3H6dUXQNoBg6PQATaaKG1FRpH4",
  "key21": "3jVaWw2QhwT6NgWby49a2bnhcYETYjYWY9dbD6CWix26ajsb2ZsRAJULqcwKnJ6JUKtwb1NsmhPjrwaFymu64BE",
  "key22": "4e5LuJLX5sUwrRXRbGcrAvNm4G3B2B86NykSQmuAp8auXByrNJ29pEGjemTZRrDJLrFbh4tKUK4fsVBoqxrkj9FM",
  "key23": "3oN4pgC5X7nqVv1YEVFtAhtAUigy8PAtp2VFxhmSzEDJYaCNAoon9ujBYSX3NwyBBUKMS3TzZWwq9B2ypT9Zif9d",
  "key24": "62FeMReeCRESipJPTrpkEeQpzHsCnWTDRUC32jrLYKFtmkHYLTnRKQPPJL1swA2zFDDSpgHcvGfB4g3UdUgT4ocA",
  "key25": "42FYjG9DvEX6cKF3KCyrU45h7CbR1fwD5JrYwPAKRFvx22tkvkvGBqfyxzn8i5JHqE5CgNy6hsTuohUUpjxAZ5Mn",
  "key26": "57TY7CRrmqbJwRUkK3CyKr5VfztnfUqU7jHETh3RSzVXUdBVc2HNDQhVbG1TzxbcXW1wYUcao67q5dLuQTGDSTGW",
  "key27": "4tb9NNZ5h6nQd3WCyXqUJKspxCnEYpehTxLNEHNH2CFo7QaJKJhTvZwULZabWw8gFYXoPUuniTT2fyNaZ2RrkYbe",
  "key28": "5U97ffVm6EUA4Tqu8o97Riy8SaECooPCSUrBfcVBEBbByfMxfVxPHd6Bv3EcKdRKah7nJ3wyW1vv2fwBc2rSapMB",
  "key29": "66RogyKFpVLJXrcyW16LPZ73Gmayr1F6kEpzAaBP9zvpdy3EtyZcEftu4vVMrNPY9tzkMZ1CcABbkKMUFKWiHwAF",
  "key30": "2QMvrApauCfQDPGY8oLk2Rz8wBUaEqsggSZ3uuVhwSH6kSisfCqwwUgrxvebh77EqSf5yRebqmq3a4qxEYtpbZhf",
  "key31": "gTnEGXQ45hZtPbM4Z148DHZdvCCjtyHX8Eyk8Z4Aes9fSiwoS8K1eUfgAwSeDx9yFjPo1swKR4FkHWVczmf1zQR",
  "key32": "4m4GQ1GaqSQPtg8dFDSCAwzn33vQJXdPtxEapDPuyKDpkhnoC2YB4KQipSGEzkmbRDx4AookpVGo5mC52sDxB8NK",
  "key33": "3B6Fc6SrGY4iG8oCPxZqw3TEi2ng4qcybaw4Wcu18CmboS3zouEdabureDxgPHVdfu6X16oCQvydzRiiqJth5MH5",
  "key34": "3KEtrtjXWMt1AeLYpCCfw1mR7vbPyWDwXdsyYDh1YYNgTV3H38NagXe3mvTzSTF8Qmf3oaj3KUr23brF664PBvGm",
  "key35": "Bdgsa4E6c6qA7uxna4nyL7KC5kYLnMF2t9Jg8AqdFHDHzqPzQhjYU4zD9AepApDh19s4LmW6SakGfnNThiWWzoC",
  "key36": "5zbGnA2FqZjnKC8oC8eEcBLteSbnQu4dng13dy325F1y6tTCc6izcun35cxGRghDA8Qa14kXV6E7xiajwHdQiAqb",
  "key37": "3iLhZY66HYFV33fLgU4i8uhdkUN6m1dZdzFAGLia7wEnD2RLTXGJJD73oaXhHjvbQi3zywvhRFKGBHppT4KJikjj",
  "key38": "36W7VWwfrmmr76kThQWxmWZSX4NQSBJ5F3aiCtD72Lh8tFvJAs2bDctrj4CVBZdJAdN1dYQF7cxWbhcuT1eRgw7H",
  "key39": "35UFJBRTCsmekLqtYfrbPLsdsgtHfEQCrQtjGasuoCt2swpoypWr22RxsUeGqCuF3Ad4gZpJcyi4m1L6W336ihQR",
  "key40": "4sY94LK9vf86iP25quopAUrBGhGUCMwUdU47EQ7AkHAPFqw2nDw4dsC983uap22B8dxSuZ3oMZmeM9BsaQPhPyzL",
  "key41": "3kfhhX1QzA44E2jc73Vq2s4v5VvpGvJYHu4BAuxjHoyBd74zvdPDrW4Q6MG9PFJyRm8hT9M1addvDEot4fA9KZMw",
  "key42": "2oji9jvs6gvYGSx41AxWQKuhnCnqzza977HkTchc9fExWruY1NmBQy4dPMnQ3QTekN44mtMvt4dEPtLywr6SNNtg",
  "key43": "oKriy9QhbGxxTTDxhrCJjb7vFUFkcm1NCdTaBhQEiccbfAAdML51knqGDvBxfZPLpnBghcSz94UqhAE29sDpXj7",
  "key44": "5frUyUejPuetJcWQ1KVxxqc7XENmEpHuYRbik68QGiwvhgNYZ2kq7G8yNbnUvbZYBRb87e28oeq2rktBfrrdk7K1",
  "key45": "4tCaU5M9e7pWSzDSaGJikQs4zdtmhMeECGHsxFo73ZT7tnrTh3bSAD6Dj1XGXjpkXGYuc4ExAyCus9izKAaiNodD"
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
