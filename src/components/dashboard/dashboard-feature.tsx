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
    "4iXwEUYD6UziZVUL7tsfCVyTxB5vmFiJMUbn41Aji8xEDJ5HRZYP8S7TED5X13Eyx4WAz8fPs4fXAVD67VFrLTMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZA7LaimQBpWcraiWm2VWK3XZjXb4YncwHokuABqmH9Fj313eMarjEEAuC26maLJL4EJMiHSRtXHYC5PoezS2Mo",
  "key1": "2qpVUYeRwgLN2pSwVoGaZEEkWD7mwLJBo9WAirofGZ2HRikCXRmohMNoTbggpde2tcVrhrgb35SpQJyn42Mz7nmu",
  "key2": "Aw5qVYkmF7nycZf1CqxrDvdcETypQtq9UvoMDxwsyRQ67uWTKeZ3JoCvgzninZwHSe7AHYGXvNjMNUxvnV3wQV9",
  "key3": "VPixpRSgaAPy25gaCsf5K9kStmitymJ5TPcjNghfhNYtEaBwDQ8ALXiHywuutNcr5vqwtPiEaTSkUV1DzJbyza9",
  "key4": "3gmAuxe5gy2aU2tsMrPc5yWeBrXRRc4C3oXNipcvbw27wQkxhtC7HZdZefzESm7SXkaQMa527xK1Kz6HVHDT68xR",
  "key5": "4gkqhoUGcx2hMRhpvBxoicbN3MPPra5yWXWspZYSgHJTZqQCHkxpb2QP6NZtag5egogMUfhasJJr9yrMBcPZCq27",
  "key6": "23w3b2A5eStoTj9ERVfbhsjwwYFVBbUYhCiUT2FVpECP1PM91RfrRSkjqpy62rcwx9opstuYqKUGiT1iQcryetTb",
  "key7": "5hrVDgLHf98aZbPq6Cmdzk3einp6kERa2S2UsF28AX2ew7BNESav7BpgFz4KfrwuCKb4Cd8Cwp5CsAtEPLeTGjks",
  "key8": "4abpMBphgtfnaRPErvv39MdUjbLPQZHGCehpzCpd1RsXGTPBFCJEFczF42sJ6waqnoWs86hYufRkSHN5XWhVESbD",
  "key9": "ATPkiMBLytHfEXF6gf7BNk7MdiymmRC7BftWgkgciRgfrz3iu9DtYhCnUuQpy5zDWt9duE8HvtpM96R991faXPL",
  "key10": "3j8qs9eDh8Nsi9VVCZDrmzFGpuzDg8nTrmrYtLpaZEnewCiXiNV9HJ98kkETHH1YAhhKrtra9vRZJxjCx1GE2YJd",
  "key11": "4tBL9F8LGpH7yZm8Ay9a1W4rCGipC7d47YqjRjgeRcY49uL4LhF453NfiRSmPgR1qbV7PbM2aVdLrJW2yw9jBbMw",
  "key12": "4GcsBnkRZrdobqsvgQME5DbmMPqJq4jKNWMTKXFpx5qMR77RQoKLhUyUeyDwuKxbo7N4CJQQAeUwoyxV8dFCGGin",
  "key13": "3MUsY6Tpm7nncqQ95Tr3LSXLjH94HU2qYsuz1MVfWUc2gPGuNxCZwasEMJFs5TjffGtCCV5QJpyTSVpcJ9ZFywyz",
  "key14": "nyXhNB3SYKTiPfeJxiU64og1bBPRS6u3t2aJTBdMbm9bDTd5MLWrHQJGLqPbaEfYuP2BST2kBC4rN4fyGkguYDV",
  "key15": "3Q5iMDRBnhkwJNcd6Mh8sG5LVKtLmCCx71ViGPyCQg1aTnvrAzYV93tEoYc9kHrcbVHcZf1NkE2oXHKLTWqy7eRa",
  "key16": "4rz2iCkUnLQnZTWQtaP4rgtvFjq9BRaMhB72LJjjA9QjAkGDYAr9i5smh8fYPuLzX4q4EQDAT8qpXthrxDE6tM2Z",
  "key17": "5V9uDwqwJodfUW6uzqob7HjsEuZwRiJPha75MxyvecFbXJU1CGKV2dmMsgZ3zM56N26eGdXWURqt8HZePjgC5zU6",
  "key18": "3AKxKRPoPzJWcaejJQXiHggW8AmJCJLqVKuEZ8WuY9LYtLHBWFp2WsaUtTm5LyytVF2aPthuQQyzmc1WL9AKgv5P",
  "key19": "4ZKTiy6ejNwbwcdtRkSt5LXuHwA4K4uqDFUuKqaHH9BFWoLbVcNB3YVRsrzNurmhhP2mUrgtTsYwKAfJCa7MfmA1",
  "key20": "28r18UyVLMJNar2faCDjyyUDTiuCUohiPKMXi1gxnHnp9oonoaXHEuRWhjBqc5o2WyjMAetngsm1vyTHdsc1oedk",
  "key21": "fRYemz9L5sXVkFXMmaYq7CuLn5cs2RTU7uoAbmX9eHg3gUn9PPyDk1VMBKe17vN5engQqLgKuUpSfxSq9EFuW6H",
  "key22": "2V7a4Begu7nME9mnbb2PszS9LxRWzDMc25zKVtZhgY5WdTgXsV14Y4DXzFcHvbVfcUbG43cXpyy5fSzFFkJ8FycX",
  "key23": "24BKcs181rEidtztvJiggcAA8H42EjbavjN72Wpc4XwEso9jnTLKf2wGNnkC9crkwKV5N9qtxjCQsfXYcJ8XjgMa",
  "key24": "2xGEy6S54PkWgwXHDBE1pZHndy78GKQTrE5pbv5vBy7MW6ZAqiVFKRAKA1xxyeDmfE8btDEsQLBvXPDtDfQ53Wtp",
  "key25": "4nYm1ZvKJeTcev967XsiwS3rd6AD4pbwFjAs8ZWrtagNki26fWXfAMJbbDNfStUw8mDvcDJoyt6tivpf4qccqeYy",
  "key26": "2pQcuqmtKMdmh4DL91NyA1UWobwEb177wgt5rKE3kkDKfxNQ1uS9JFW8rHRbhW7YeoKYTMmqGoSCm3vLE26p8ndh",
  "key27": "37cQnDMSYrJnCe71jbg8WDAY3KDGPmxW4SR6VRpyNr6KgDjmawMzsoNRdYRYnUHrXZ5njSfXeiKMTFiweJg2TgLe",
  "key28": "kx3L9zEWZ39VBD6HZCQKahCrhAe1VMZPqvyoH2becb45LQ78E7DY3RFKhJ4QdCpNr3ZWtYkGvxA7YguKFp2EPqP",
  "key29": "2E1YWtVsJjK13MqLCZxxb5UAAwMHhVyR8s8J7VSv6biRCYsX1SUAmc54Kvxq15uuWvJMnLbYBrJ4gt9VojRAPceR",
  "key30": "4FQ3WNJwA1rUYAgDiwBgdQKotFY9FKJJ5hwgYyXaiJNv7ZDR9BeEgDKRvDXKwSdCrxNXvvZMPKW1pQxpPgrrms4U",
  "key31": "3GHw3dYNyLygdSaHL8LH68RBUSVyTryDHGx1Z1xC4noFScA6DBLM5hhxykKstrw1wARpXuVn9bY4gHi2tKYDvGxp",
  "key32": "4mdhfjzUyXKU8DgVPNrzE7TDAyRxt8SogSKh9EZHxnT3kuGtPqEZbFo9EtHKh4ZBt8xW5BRBU6fGCy5QajoSWCfJ",
  "key33": "5CU5bBgAsWWg1fbTqrwtdDsdDcPePERbo2gXTsubysPUg28868LuurHkGuLvM9U487f95J7w6oWimrxQ5R7D9N1i",
  "key34": "2GmoC9G3U7CWgdgFsnJcUa4zyMum4v4iAVgcU8f36HQaUPnFud9yyj7YHCrRSZd345nmA3Cw3azTn3ajuCiiVeSz",
  "key35": "4V5YUFv1aqMaZ49eMbnHyb8jreXuAcWo1oU2SVX8fYF9sBm5GWkwP5X9DywoD8TmY3wzC8bzHMPDVqzs9cpzL6zr",
  "key36": "5rJ9LmxLBREG9iDHiAWErpNX1QVV6JMLuz3djyhxbh25JMgfXRmQwkiwV1JXYPZ7GwpbCf8eASWBEC8EZrDbzX2y",
  "key37": "5V3Akd5Cq685JAdUaCP1wufs7pJE7DgqWiD4syzwpVYhWw9BXdP474x6UbH19YnJPxaHv9QiYGbKUGmUV7Q1gvsZ",
  "key38": "4xMv8qB98SkhBRgPnD5Z9mQf1zQpjmoiXzwNqPWRd9LHyyJQHYVgJJ3frr5wXgYeWTH4LGMM91WBCKWpvGtRzHJq",
  "key39": "2MdvLFYvfiMYChAv6HG3GqJU31QKFxX36EcHB1HoFNfmbQFRdSnFqHLSQq99rxFdMmDv6hyJQxxnpuv5rieaEq95",
  "key40": "2KRgrCbguzWet8pjjjAg4KTiwnt5pYA68VgqxmhQpuyvAjHcUNNZvFPmWf3WufLo4bpH9oF5eZ2EGxPtiQBbwZ9V",
  "key41": "57rHPtmJqFCcF28a9MWsX27PWeNnHmRF2sHKDjMAEZwUbLrYyEP5KPN1zDtJUYEuaJRDY4cNMnxfQ5WyCAHHWVJn",
  "key42": "3bpA7qEJh77suenE1VBTKur8xonkb6Bc1kHVqKg42tTkWHYnghnG7uvHtqBbDGrZW9XVNfYr71qTSgnbpBg4Z7Tr",
  "key43": "WFGD4HqBig8s2nUhxqt9zrsEfNugkVJzD9gQ1bLvcqtByMGKLrghzEHJyKEenUwhqVjdCM6zbA6n4cHmXJpSvss",
  "key44": "484fjLatQ8aCtYuCccxeDg2tZ9mNh4ZxfeaJsw6g3Hh3SXNgi3Z15RpRNLpaxP7ki6mRHXJSiHqKzyfqQt7sdffD",
  "key45": "2tMVTr56jHaqtvyBCpkeFfnJKop6qg8VCpvAPkyT4YocREaR2XeWCw6M1t5mb4uL5U7uJG5UogWy3LG68L3ireW1",
  "key46": "5stk8fJdxvxDok8jAm84ZmedeNTZB8fsqC5mnpQTMbMEuLkMwYgDUcNN4V9egaMTZdv7UMkHDWP6By6QeaXf3DLa",
  "key47": "2MCuJUZGUbeXh53SBQuXNxFbGMfkRgUmHFRntD3d1Mh8Zmio9b6tP5a4vp6hX8dJ6csh2DEABMrBVkZFJfT2RXZr",
  "key48": "5k1rKjLRef71w2BG5tUnDKe2M8W7gUBAMZGaHQXsEySKvTvEceWN6eQfqzkZ3U2NEHhRwVPBRB23R9SQXPioA6QE"
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
