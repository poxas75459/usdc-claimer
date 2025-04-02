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
    "31FkytHT2myxnNg67znp9jSsGREJg6i2Jf4Ci3cECfT1sUKTYbD2E8XyXUn4yPqXHTaJ8X367oWzZ6XN2zAdWZpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n6tX1bFJAuR6KrVNXkUL8M8KCvxgo7hmYtLYRnGxtH5y9DNMjzJNfNZSzHwztx6AAmCCg1mcGR6BUxpAJZpnTLd",
  "key1": "5gJSJ2aCoPQ216KbJNvquwcV7Rpng5EjojseQFSgYWSnrUVFSeBLTRRiLv4gtLEhrNWMNEzjWTPjdGzounN4NYbZ",
  "key2": "5yxG86mETr7Kp3KRtTktzmAMzEPPLyrHZVubPdbNLDiXpzW57GRWJ7Nvmcmn1BdxFEFyz7jy3aVAizJmLe8mUVke",
  "key3": "DmSfuuGV6rtDjzd43b4wQF39YZG4aPKs4H22Ah1D61WUAhxYLNKBiDuS1vewRoaNbXenLosbSA3XctK4LUYvVZL",
  "key4": "GYwZznYJni8fuJ3WyDpnW1W7hAmuW8MEk1aeqj7Po7hxS5Zn6sQKjxPyNNfyQQ1g1oFhAiCM75uJtFQMS8sy5pf",
  "key5": "32gt7YYDkeg38MVDWHzQuc7mDVUFcF9FhJFWnbUYbw5Csm8VWvCLHBNxefpPqwhv5N6He9CRfbS8sp82cuLN5spC",
  "key6": "mJWfW9Ut8K3cEu12zM17vaQ2aCPk66HftmGEevhYQuerY9Zxfr3Eh4x3bqyEWLNyupmejyUKUbezLXYeYQfzrQP",
  "key7": "V9jBdQdtDvw55UT6vJhoZpwiC1bZetFNMAuRFgbhpew1at3EenfgAnRrHBZLgyjtqwDfkDeQXfxUjdT1P4fky4k",
  "key8": "2tY5aiyysqS6nyyaAx5VnFwStjAKLnXxFkiLWhARy76KCPyQa1fEqdXHAqbqqfVycMdxRgTzai346MzRUuxjME4u",
  "key9": "4gG6grZevp1CJAoxzJuix8fqitw2uAcRZo5PmwxCZn7QtdtK5m2jFurxDaRfATuBNagp845LYDbc79oaa4rbzR8T",
  "key10": "2RtBnrPYWajaQbBVdeJ8jQxCJDwJMPNfshrbYv51QxUxqHqRb45vUEu5s35dM6CqJ8GebVHaUCkXAfrqdgubavjW",
  "key11": "33yTVyqsNPNmuoKTZ7RcgNxjDsc7Pauq2pXUvPviZxjKacVXCsGsGbiV8t2i577DmrRWLLtcNunNWdzJCTKCw731",
  "key12": "5yp1aAve9JMLkXC1wzLdsJfHCStzN13yUddq46SrCZMn2uga7B7piTJEFG4uWhzLrz2DvXjs3VnLP4HRFecDWoXe",
  "key13": "23ih38dmYLWd3VDLp57WzWDiDz9iWBCKCPNnH7eFKC9pPj3NvPDXJrfwYhVpMo5gitvjtNXg8k4m6fwUcoahc7gZ",
  "key14": "51oe9Nk5srcXzzBajY58Jtc5RhumA9aE5dNQhAtySuJjhc6RWbto8pFjLET1xycqKktrZH3bYZ2p6cEV7bLnNJWN",
  "key15": "66pBJXNXnSwM4uWbgtz2m9gAJH8rwcTwgkGM88CYBLR9D8Nw3GLYn47eAxYFDpLpMLbeUboTF7niK1nqKK4xsanU",
  "key16": "5gR334UBFLsrZo4vFCNU8ShagEP6zV2dYqTofqHRySx5126nvbpdMWfaQ1r3p7YaFTgG15p1WusFsHsGSeHXT6pX",
  "key17": "2TH6oqocVATWKPL1197XNPBNFFF3FW7aTY8ZWchgbwwknT1sAs1rV86KDwWTtXBoYwPkgXtsKZoeDEFVGH9T8Y6y",
  "key18": "5Tzm35T5wqYNRYiqwELDBPvijZoqQbs8rz6BKjqYhAGPCorcH7P7bH67Jq8roMVv7aFakAGM41zMq71pBBs69M31",
  "key19": "xZUAu1FLvNDz3Ri6wb3hUWGxM54GoSbpVC7SRvuL4Gq52yqjXTrH8jNK3Pczu4dBfNJP28EzRX79CRAzNEyW8RB",
  "key20": "o3oKbq332Tu5syaKyeACh3rx98HeZ4Ctg137iVArxJgq9Civ7VorMdXprBSZYGuzuLEuD946UWrNSemkZv1ZW3j",
  "key21": "3uX7bDXPiRzWrDmu3Srh17D6DPp1X1MkJTVX6SA6R7654pjX4RAXCwLwytics5KGYZj7wDF6CtwJZHmUEWZb3bEU",
  "key22": "QNCoUyG38CyNsZfQiRaVBdva1B6Kt6YkYdyv7F9rGCf5UwfEJjg45e8r5QGaU5ESXRUe8hyaE1YyiokqJjAZDMG",
  "key23": "4x7NChVfrD2S2ArvajzgrB134zRBJCtXFvk2EJTiLbLELZbCvcAg7THs8v29w5SwBHUtN4xL69tyXeUAp3KvNudJ",
  "key24": "3nDwwiW95Ntd2to1de3ATXgTSgKtsbfdzM4ebWrVC7dcoWwdiYv4AS4zcCBd5rgJQxL2UqNRLTYLBedmB7HpKAJJ",
  "key25": "48NFWedstunf5ZfBqqvD98wuzJMkXpMx2Yee2Bt1NfNsGL2VjUEVhzYqwPyK5XE6qPSxHSMZgbCG5pZscLqLqzMx",
  "key26": "43LEbXTPjfxzXHEKW8C9YvcWGNvCyMeDooT2NHxsSeu61iDfJ6bWFFPgSvC7KafMis6ajp5jvGNJiLYXarEQJDkr",
  "key27": "3UPKyKSCca5skkqVX3H256kGDS8Mpsyiqnjm7xL7f6d3v66eSBQKC5rDjjWsnUAekuYsBa4YBrpHkwZSQgZuvgfe",
  "key28": "3DTjfXfctpxfccRkNrWrHgZXq4jLgUNWPKGW9PMccLqjJwQ2jNeS3fYZDBkkHRRY8uxESbZhDqBsbAVqGSFN5KSq",
  "key29": "VE7hjvLNA4ERRXhpcrWJzbj8x8z8ek46BUobffsMGLHUZDv9KUCZT39iEYkaJVRN5b5x7HP67WrRvZyfyUpdopV",
  "key30": "25ru54TgEpXV78Z5jAoEqrVy9TzXY8VnniGaZW91F4aXN84HxXcGhTXoZdonJQPMe9BQpARWPW7z3EU58Lk74WrQ",
  "key31": "hmENNjV8qNnVWgYHLiRtk7ehsePfNJQRCsQpbzxh3RyU3qdAH7ke7UWGcsZjBrCcFtNnypmstWi42HepXP4r5dh",
  "key32": "3shUnM92GY7xeyMJEkZirxc6GE2oNNstS5uvD9EDUnXwhUwFnQAdedBM1HbbgVLNpZqsFLTk4gaf7DV1jsyqYNEP",
  "key33": "5o8Jx53iCA1RdwD9QPZ2Jn235rgcmpkpe576tyknPrLABecYabU8g32fTAFLqabuskQM1iUKtFh1hPmZV6oKLxyT",
  "key34": "YF82GLWgWoYNURd9Thh6jUhwZDy14QEDzDvkei7LLADY4Q5rXC4iGkAQnbwbK5H9GZb11xyURqHoACHcEjoifX6",
  "key35": "2mfhUfcMsoaiPiCsjgdMhUsHKfEeDq5k7oRR9ag9aEE3T8FadwR7HVQ3vbp3BpUSZ3uY4tMuMnfzcnsLvia9L56u",
  "key36": "2Q2cA4rzvjg85S1CwKBWka6gB3ojBtyNzr5BF5gCJDxorbGr11vqu1od5WCpsszcAkHxFaxX4AVUMxoQvNi7E26a",
  "key37": "51pmr327J938bG9Qsutr4dD9dmLcAbTGXAhV4QLeDo3MRUogtYKaBgwRveopLKLqXMe9pUdfzNgiGbj7DybAgHgi",
  "key38": "3rmJJG3RHsBQydEW4CDUyLdQe2hArhZJzh6hmw6Wo4uNLLNozoFuffjKzrss1Ef7pk7AKJJvh4PnRKeU7EA7ZSba",
  "key39": "66Y2CYbzjcjw6eyiTb9iABY6vDqTKRdVpBACcPFGwekydGQbGVs9N6pB2fBo2yCyZGmdRWBARBvawoeAFvUvS7zp",
  "key40": "Lyn1rgcSF5ePhUfqgp13y9HnVfNBwgwZwJ1jjxPQ6nxkLfmGorb7FgHWZHWPwWHq7ZSrd2zkL6abbTAHQWHCZDa",
  "key41": "4tLqqJQoUWDy1xfHTAhrsgP43as1dZkWCrMeQtyBDKztKkoMqjrHAiZjLZ6tqVwBw5HmEZy9Ev3gYdkbSJFMHSPV",
  "key42": "NPsMTAcDgTScXAMYFyj815zfXqjBU77bUZV6DLvEcezkrWoeKjF52Wk32sDoqWtEPM5JxVzuyetxZKSDeCejeK4",
  "key43": "5RbCBcjUkNoFTXALxr5JkDWzz38yLA665vv5t37RjSXBuQknH1GW6tdK2sHBiwFP1i66C6bkawosJ5WqM4CioLuE",
  "key44": "5x6c28CoS77oXxN846srH2Vw2ZaAbtNLSSvfEyYn16uPAf3DzWzSD9UAHpb3jeRzABGz6qdfunF8qxFAkhJEp2VY",
  "key45": "4jWVaDxHcXVNjfGXsaHwLb9R82EfLGmuMGvUXDqPTqYTtNUWwhkLD93ve658EFWiL6RjGt2WvggSFJQ5KVfTShV3",
  "key46": "39DgNGc7C5dN5UPwWeqcSubLciJxs7t8A2PXnGa2hSQ1qrDZgQRThQDtBCJwxdTPFZwa89YUsERagz5Rwn3g2kMi",
  "key47": "38BsMzSKD96P1CrMN7U2YhXRirWaEjXxD35gg9puFt3sbFb5KVQtkDvUydxakPMqnR7YDnXLvDRtBXQQwRQLEcih",
  "key48": "5s3b9p5pstJNant4dm2npp7CAw2XnfZXMoCeyYseLbNuwLqLNjDQoVzv3TyKUc2tsoY8Yq5wWsteRKCt8mgcyAhJ"
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
