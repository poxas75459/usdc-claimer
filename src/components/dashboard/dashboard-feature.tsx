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
    "thstYhJ2J5WrXLaQwTGK8XjvLEGJchvm1HPTfJ5fdjNyCKw5FfibYoHoSiYrVFdQstqSGmdMfqjx6VegRfKkqku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcSHppxvdMLLUuiewaebmWFVZTNnLbSWUcnrKnTg5eUnreJbt7ZJ1JG6pZrZnNoyNcnzion6rejc47gN5gPyHvD",
  "key1": "2V48VLvfQViYa3pVrChyvuP3grK1XpKSVY51Jpmip74pc58yLqnM799LpNpsqXSWyazLLoAomfXEccbAuojAiHeT",
  "key2": "8nuF7hPsP9BxaoHWs36WJQetMngZB5KZHXfaZZ2a5qP76VetFDtTRSZuMcCd13adnm8VNXjGr86eKLLUGrr2hiQ",
  "key3": "4gQafE4dG54jUrS3Ji5u2huebBunZQf1bMKEtPQSst4ZH796HxwJ53RZaAC8mJqMNHFzEakXrLsEsLAgydfKBtYe",
  "key4": "5jsusbUdxSWDvsDVEsRWmgcWZHDDs439Ac1d1n7mW6N4GYgBjd9rM1ohUB7SnsGw8aGS3dr3XGwn3o8Lkz3qZaW7",
  "key5": "3mm7gfzBdPc75i1HWACM25Sb113B86pHWHvoyV1gPSVHgodJQq84RRUW9Wp8VPWznB4WqyGDwh3w4ShMWJezWyPV",
  "key6": "4rUw6RSZoThqrjF7haViiLcS6QxSDxvR2vGzP364wNXZdgwMzZX7R2Uyc7ZcY7mU7dCr3XwCfecAoyxLmJjEegUZ",
  "key7": "3eaWi1seS1fQinE5e2eySbysvMKm6XV5h926DZQBn5d1HfGuuqXmKE2jVbsTAbqMcwnND7EKYrDzUbJhQsWE7pru",
  "key8": "27DyE6Tywd6nLPK5TwrdPFGUYERV6igQkRwyfaYA5HtKUh7vFtUnk8L3vhoJxqhFMpsVJrzewGUsr1sLfpUnV317",
  "key9": "2HYqGMbrXgUSgvoRqWLPCaoWs3KpErJcFrdVo2rm7hbSjSnTfAF5fMwhbGABZJXAdx9EPF6CUCFy38HbUC2GKfBH",
  "key10": "SiMxKdWBHWG2pL9qfbLPV3n6Q47D3Eg22UJK9YiwoMT3mumYC4fx3UgmmcFzSTPU5fLLHECtTfK7pEM7yEnLEMj",
  "key11": "2tppgunpCyPGE7W5STXn9f7v5cyLTB26tjL43bMHuH27rHsstLZY3XQbkBK1kCzz71N1rYNjDeJz5jwUSV7iaGjD",
  "key12": "vV8hEygkR4MLGifCJREuXUrb6tKQf23PvBy5fqfM6Tezo7fEE7NNh7k4Su74SAWjahL3t23Du3mPaGvRzjyMVu2",
  "key13": "3YV7MTn2YEbsQNjdx5omUFb7aNEK5hRCbaHtFUvaiRoceiH2tW2R5xWSmmp5jHwoBK3gc6CZte3YcVgiyHraJdo3",
  "key14": "3zU1MnAcwH5htZxzw9u5CJidP2zcCC6dZsYfNmRSwC4c92RxKG5dcPfvQdNLNQ85Jr12pqTYeEW6qkwVTyvYAsbt",
  "key15": "31WepQHehA5Eq8hmpM4HRL9fcQJ8Uh5f5hfSM7DJdqaitztAgGFx8xxUmoHEL9hS9Xdh7gKbKeVL1EmQNJ7rjiuM",
  "key16": "2nz9mneZRaXgGiqWXjgK4tubo5FeLJ3ev6x2gcvY7LeHsofoE3wcakGD2CZmnsWiwRuFfVJ47MykzAXhVJDC9dNK",
  "key17": "4tY5iYuWRXLspFt8Ae17ZLBT8g9X92NjWyt5KVQ6j5wnp9zfGseey5npCqfQPn33veBHfyDKaAVxUNgQR22WZWBa",
  "key18": "4gFyuRqXXVcgKAJNquqaZgGTM9cgn5kqAcwL6KWfvAYnHqDJwrpWh3qopqq8ACLHWp9HMu9UwwD7ouz8ySmAsJNK",
  "key19": "usJGzKyJykomeHWK8hCX9PEX4XvSdnPz4sHXghwgCfySJohpw38bDaXV9S5kyKTdC6ymDYMn3mbnj6Uyo227n9Y",
  "key20": "KcUSTM6Poa8rRkFJkJRRVq8fZBjatpUZHEwa8MzzCK3qECdDbUxJZJu81TJH4JnVThkeu3BksG8Fd946HZ4EkDe",
  "key21": "WaegDwSM5EJoGDEP5LrB9JJXn5GJ3hjdiHwKcxdcXb1uXidF3gdcR9rT4XyfVVAMWgq25RnfydYYucVt439oYeU",
  "key22": "2Puzz2NbEka9tnmwCzEhQZ5i3z3k3x5VhNb9ybJNBcnnzt84SQm1nca8qtDvChF5EYEg5RFTVkGE8A2kabhkR951",
  "key23": "5nYoAVM3LUwyfSUmAa8JnwnyMCtUoWGYATpJLuZhXUen3VhbdGtPkZyGqbhUUriKW4khp8xGJF8ESwDUBz3E8Nb6",
  "key24": "2RN3oqumMLpMurycRnikwCSqahuwkEak1haA6TkuzXTmWFr2HsVNcQP3yd8WCgAb8MoBuXcQCvVSihQ69uTp1Yg4",
  "key25": "5ti15cjoUDYmR5KKpG1DQPLvEHPD6h4WMAKXUCbcK79tMQupr6CVm7btHSH7DmJbC2prCNNGHQBpJCrrNAGPyLA9",
  "key26": "2gohnn2ymj7gE5CS74wSA5pzsgRKWHqKLzwSFCCWDxqNNz7nrUkhjW1h3fsNVMxeu98qQpU9kq2nJkHnbzDTtHJb",
  "key27": "sMKHXrzeKJBd52kY37EUtAEFiogFJE1jLD1CQZ8k7vy9TFxdM77pDgCBjDH5UV4FzLuN5bF1nsRLcXewEayekwC",
  "key28": "53yx8APZrk9vX8BLhP5p3YuVFCndQAK45yQkNXEJR2BgMArumQrkYkdcowh432mEb1dzYuoM9B7c2Yqxq6wvKvaH",
  "key29": "2oh3KJJLVxkcu52HkC87MfxoDi6VhRJqub4omWRqAN3GPBeKqA4EDyLaMBTWs3gU1N6GFDFMa6JzuFBdRKT351Zf",
  "key30": "41pg5kTc1ApTEY2tCkg48NkafaxmYio4zje8S74EZw54y62924pNk6ucKCRe6aAwGLYu7erVi4A8wKhXrGU3FoZs",
  "key31": "3r4yTY6TtxFdgxeEYVNcb9y2CgQdytbjr11ruthKBfok3Lfy1yb6Wie6k9jjSUxYbGzN4p3EXHHLSbbL2v8wm81M",
  "key32": "uDA58PhjDkhZSZk5NAiDnQ9HvGqLMNWHtGUStZWNp3e4SycztX81YCmgSjZoFGu7ht4ECPPBkkpjmDFFNAajfEz",
  "key33": "2WZYR7cxJfBb6ss3EP89unKKFP4mK48C58kDxuMFFnMYsNzxQYntz9eDtwiXMoatXc8UsTqvmaMrGDZqu6JebzYp",
  "key34": "4oeH1NJ2PgCb1TpZyBuQYTSwVXrHvEWMWupou7jngdPhYZK43EvTWMiRtGRBeTGEkdSW3UvQrsygUM2mJYzZsM9e",
  "key35": "33F4ZHCkT2hC6CspQ25jxw5oiwhtFz6gAYkH87DGAgs9dj3bRs3q6rL8CQ1irXs4W185wBB37a7cGjcTL8Cr6w9y",
  "key36": "2T7qd6a51uiLBC7871f7nGzx69JDKPFYCWFo1UTJtrtb529h4okpTZp8Hh7oJVNvJPfUdsRJp628vTtHpcjNRQ8",
  "key37": "5QKNy7co7sNQQ41k1Cb8cTBBzkmZQppqSLKU1vgQG4o7tEhj6w1123iqsgZecmUn2Cbz6xMQUMKSZR7HHqrRiCWM",
  "key38": "4QRSd9qV9UvPn6eexm5YjHjoPfxEWUjwe6dAGQnqdcV7yULSbRiGHNrDVCyQPsxxcTrnJxMRcrY8SAn2CC23fkmX",
  "key39": "4CUkmwcdH1TxtRszg5wAPnwgsygs6zvWWfcPPPzASr8Wf33G5abjbL3KBMK4sC2k1Zr9kscdPwAzf8QZVNuEgcuc",
  "key40": "56ahocJ98NDzGapDdQdXYg42BiqonxffHivYCSJbXw5AhYKFhf1mUfAFtEAnzyh7dH2v14ocF65oJvvyyzrTPLr9",
  "key41": "2W2hAZ9Ln3wYzGqsPohtykEMbyLbSo3BK6ZuNNZ8pfMaiXRwivQLDSVzjP7gFu9CVRV8bb6TQiS9zSgsue24uBnx",
  "key42": "63DepcDM9HB7ADUNjapHaBDhe5FytLQAmvAAFZQJgtm8iTHJ9jeqbYesV5LykRy8oAkz4m1U3QAGuCmt9akBcpGG",
  "key43": "4uY2gBoTUo3XoFckW9oKjDNjD5Z4GA7Mat7zX1C5hNYF65tBhnLDCt3sgZn2c5aA9dDNffvZh3UcbPictgRJTQKd",
  "key44": "F9wtptjjpuA3o26BfbTGdaLQYnLvgGj1jfSgfQADZRLY7jGZn4fHJFDjuNmp8tCAbf2MNQuqhvJhzCvowmBDdnR",
  "key45": "BoZfUzKE9JDbsePL69dUQy9VFht2o1KEFj7mCuNF7symFn8C9b5MUq5ARfebpSV6PqQyZ78pwS1XhmnWFTSa2kF",
  "key46": "pkBcFoFHqCstm9diJ7tJr5oPWF7vJ1D5c5JaLeHEZZXyB8pGWtkHn66Ja1H4esFjCmHJPx85Kxf7CnhHkZ8h1VJ",
  "key47": "21e8XjMef8vTXSsW74ADAQPs8SwWUwdNFq8pr2drX8sL8T67R8muNrtYUVgH6Xa7m4ETdDWz3EfAhniWs3AAiPHr",
  "key48": "4h7XuMhwAW6YjowRk4Dw4oTCx1vXWA3qYsyDzDHRmvpE3MvcZYgsRXv1oym7KgYpUp6aW4bgh5qhDKUButosYETC",
  "key49": "rWSPn4DCZqH8srEaagMTSdzCDGCmTKT3oQCtyv27VJhh4cuVAfCE6Qrxmh1PK51h3m4FHvd6Q5ELSKcuz8LMRPj"
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
