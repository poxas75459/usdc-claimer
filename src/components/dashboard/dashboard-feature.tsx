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
    "4RGVC2u4mcQ67zeQ9QQtDtfPUzEowSfPki6f5RcPPZfPWPBVkMvCtAgMPF7FyfCqp2fCf36L9wPXXPoWEK4WgTWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPnNje5NMiF8HdngXywqiEMA8D4Gq9eVQFaYk6u3pMnb9RZnN6V1H3cUh6QLRCj4XQjfm4NJtYmKCXQXqTvxPxX",
  "key1": "4xyc2qBx1hcd6kQhkJj14jGfwkfR8DQyxpZ4cCyTGbjY1Lt392SMURZo5KyDEoJMhmE3PKiqkpXi5cr6uZsgZtga",
  "key2": "3vTomKgsBL4ts89o8bG5JHbhpZZ7qoruV1ASwBPiPbVxHMweoBDwPV7kSsb1e67FSXa2W78gByNehHPEjM7o9FiT",
  "key3": "2BeC3Pfnp7f6ujHmvPDqq5Df9kcNzrA8hrEfgzqCmTb3sVwPCCHGgDH5vdAL7vCrVBZjeJD9inKFZhyZEGUhmJsE",
  "key4": "2PQNDDw5cPVqJn4zU2V8VjHBw3R9cGj8nvXbCiDAnEskJKuH5VJUdPoox4rXTNMjt8wFra4T9g5P2rVBVanw8joS",
  "key5": "5TYozaLqMjZSZvEsNgETFWhzsxcBKCbxMLEPxS1wWQnLJdffJRavRUo7nGYoTJDQjsruGk9Go9KG7kzg6JDccPni",
  "key6": "4nLpR8rwiSLPaWJevpXVxeWSrpGsnWbawh1hWn7MBTq1pHoCGjVvHqNmSnE8SrRv6xXoMJqY92hmNMBDfRP4ky8r",
  "key7": "4V3RoXxW5EToNEb9KartvmcUXKKczg55gEjRn4XkKg5h7zvbVyXu2GwEENSoPKkWJdWQZ3byVHm775FAVZe6DkuU",
  "key8": "5vADxAru9bgHYXNMnTEPV8y3zyVT88pXzeJJH3eVh2bsg3Pw7nRe1WF8MK22wYcRo8KBvaYLJbyUJvajmDr2AUBQ",
  "key9": "5byf6K2uEVH2n6X34KSRhHt7isTHWTs77fUodYc7cpAXdgV6CiqpbKut5FsUytcPuJjJTbodsWCM2J8yNGyo85vf",
  "key10": "3CugkBhmozcxsCS1H6zy8V1UCeL92miJGw57wUUJZx1cFXeDrcNiRqQeHF6EQ4vmBCUPfDVRieP768JKevXvz1ZM",
  "key11": "5nCjmCqs3Kp7T8rRJ2252HnagwFzWmN2cKyuorExH3qVByZJoLtF1kxU8gPcmpgKVKKHPcRc65KHYtBHAmqXSE2n",
  "key12": "24mLJyhrtCptEsJtReZa4oWxRLSVc3QQcn1G3eph7bqtx57u31arY7dVEkxcKdFy594u1Nuc6X4E966q98M3qZBc",
  "key13": "5GdbdaxGp4PdWY9cE8D8f3P9P7u6UXPwKn4WzaD28b7mzJBMVAhnCzCfeoQP3vw5ULFnXSPU1oN2nYpa1xoQTA6g",
  "key14": "3FJGksZDy7tP27KkK1c7Fqsnt6Z8dyRzWne8nrT5mmMN63SFxnfjxHdsK9k1SSuxXNCAxifQQrdEa5DyjKyVFWhP",
  "key15": "2fpMziUjeADT2KD7XpsRC6Zk8FCDmLGNohukVMJgtjgU7WeEg1SE9mfMpL7Xj9mz6K14r42AFk6Kue27CpkVdfQQ",
  "key16": "4cM1Q61JhR6wnmdZfSMbrHT8gXKUsQLX1kCMC5ZJQb28v7zo832JMipCeNX2JX7qPSkYTPLUkg1yzQT2FCgLJnVU",
  "key17": "58QBwKnPRjYzVPjTY54Ype3wrzZwM2RonMoGKFM43ASnu97AyX3MCr5oEphydXTUuNb7VHvG4DfoBdtT4RKthaib",
  "key18": "2mW9mK4Rhr7qPZohKFxPVsrx5nH2bWTYkmT9T3JaZKxthR1aLQv2d79Uk7gtfgznggqDvocVR1rpkCnjwR7pzK3U",
  "key19": "3wu1X49m96auwKrDb7CEan3j7qoEybNXsWB1fuHYxPNFieSEEunk9qk12z3bdFWEwPoc7t2CSqWxXGwTh3oeRieC",
  "key20": "upAEDFaZmBNfhiT9ZvQpBfZmyxxqv8uLPymvNWtUS8q3RLJ9DWMorakQvqBfpRUrKYjpPLH2Z8pTSHPRBh2Wehb",
  "key21": "65aCFu57uWr3AtoiXRS8g89kAZMbiAvnGUMZ9DuxMVCHdiZZmyPGUZH4GciSGBmU3YhL493n8HouuDf6z1oEB7JN",
  "key22": "4D2fMG4hBEi5eC616rQ3YwfTGmtPDedqndVbpvKGu8T24wzA6JWF71cKV5WoKkyuoini21B2RqfXNpeA6BbLeRWE",
  "key23": "4GNz8wZrrW4oXvAmur8y9R1seioPySHsbaxz29miemNBRszmLyRuuLww5WXcm39LRNMwYNhXMpqmS1jeUUr6u2jr",
  "key24": "2W9GWf8HiHzfn4LXyVBWs95P8jM1Z9PBcBonSHAWKEuAdEWY2942eQy18b8xTxSRcyDXYrHggrSgcGmSSW7Av3bJ",
  "key25": "21puvfbtBXBK3WsgvyZFG2GPoYfuTzJtgfWn6R4PQp4CVcngNfJSLSzt5zig4zs22Acu2TNm5LQSK1od8D94yMF4",
  "key26": "5WGi9EQfTLesoNKuofiC74rMj5LTfSPYcPFEHZ4CRd4tahP5gzxPCpRsFCLejMMrKAEcgw4z7uUJ8ouWRPSo2sz5",
  "key27": "D88uZXVxyYXZx8LNWSz2786HP4ZKM1CLPKqb4SXXmVUUnqx1jBUdbicXaqBWS3Ws218USmFP4c88X3rCas6HNnR",
  "key28": "dbtrGRXC1etwZuttQwxzrnMtGyauxCbHjQC2zz3kWwLuc22bmrw48QCRmC7sQTLNeGX3MoEme26F3Vu42EeAU38",
  "key29": "676x4QvNtreo446jdywSiXD3prhwLKxKVKUoNUacJnGUXnt9morZkUbsSUdKgLqkfFiPqafoHNxnHFJNWWZSSDUu",
  "key30": "46ux7sK7KwLNqYituPxKFugMMRth5JEhSY4ZrFzawJaeKF39jXib16ziXj4p5xLEENTKPKa8xAa8oRwh3hiwJwwR",
  "key31": "5JmQYmR4YBcbN6VW5gQTMejMAih6RnJZw1eSPhsD2KnDrFKkWhNuuC7GPn8MR9eBHPtmPvUgtoPXANt3aTN1yVsf",
  "key32": "5hjTfJzoEQht2e1rXAHSqy2ZomxjCgpSnwFMtyEWRRGATBRJYciJZqeqXpFuhKxwyxMCuQuWyHu1dcETQaVXphSt",
  "key33": "4sqy922DpCy8GRAtN6ZBu18HSGLd8h8LMJSiRbEPXfaTc2xjFnnkpzDU8DvXcmp5mLwgnK3Ph626cXrvJeeN9hm3",
  "key34": "3bYkosMKVQfyyaqA2yD5U4w9e1MJBfwpBYeKd2Qtw5SoomZhP5sogWGif8LrBJmSGCTTHTN281kTEPUQFxiwgCR6",
  "key35": "4DzoR8Ep7VZFZASXnHGbCsstFWMUDNPUXQuZdgQeDog99x47yD2BGZEVKAwWZxbwDPTFQgMHyDLRAHX6vuhbMMsd",
  "key36": "3qw3KuzjBwKfAwbqzLM1Dj391gYKjhd7UDNEycizbFrKEwBkv964W7qoBJXAfF5uFLhCEjxHavGWzyJfQbWxdS2V",
  "key37": "2HbmWxs5RBEvuDUpg9UQD91Us7iMjLQFfrhsBs9Dpu8di1RHkTiUaJmzZYpSZvutQ3tPH1RUCSX86r8iZvLjPYob",
  "key38": "4zVWG41gN1Az77YF2bCdvpbvNk37y3dzagdC89UjhojbTkYYJCfWzoR5hFzBAiKAxyz8t1nSf5EQY2QncrXWwZiV",
  "key39": "5Fuj3SPiFW8JRvWRj53TgNHWdPBHfqyopZScBM8YcEybvsix66p1hbkQWWk4xtd6FQ2SQLMRbTkhtHH36CPfNVyR",
  "key40": "5bPuhwZbs2JDzddvzUaSkiG2pEdiy3uVUUDgNPLTyNAKKTafQy8tCZ3gXBtkS1ma6pkae7Ushd3JKvGU7FzzzR4z",
  "key41": "3xasxpNety6GGbJzWZBUjKAuFnsys3k7b6vbSQcVAPvJT2yJPrbEAefHGeJwUv5m9Z6PUa6sYgJArrTSKXKAd2jE",
  "key42": "2moyXyccSBnfk8tYUwANSa6maXH5jpSfWXsJJ9JuH6838E2Ys2yK6jY5AqAvXvBTCnaTWw2TANYTHvb7Pcvnjaag",
  "key43": "Dr99DKi9rcxgLBviXTQYsNGTBc3cm32NhZiPMkUNKAh7mt42Q9TSRirG6beyq2iwuohJUX9F8vcFQwy5hMidPMF",
  "key44": "5KfqgpzYYLjhHemEPL9fT2hHVbRvSTjnztiiuSzdPUmtDiNQUPMdSiaZY5eeZX1t2P1DPcA3e7GoDLNuWD5FJBdr",
  "key45": "2V7Lg5DxmKnTZLkB2yg8rLoWofPNtsPPh6d7dgkvreHQE1E2UM4QGgbHqcSc4NpjBqZ8oCHbpaChRXGidbmTxBa7",
  "key46": "29Dty82qfShzRsNN6SMpiFW2MZutgRayxUmZ5iuebXX5jw2qNjah8oRn6mJ7ieEkHfkWqYeMm9wrYivrQvqbVRp2",
  "key47": "D9Y77bbpoPzyK2hZ4ihHzs1pPWvUmMPJ83igTZTqqJyiBpZxXYpAZMNxXDB14nfm43FpBNimm9oDivo8fci4Rbv",
  "key48": "2CvxAbYgNdw9H5g5FFxf82njsMM618r3FT4AyyV6DZLJagJqwy2uB7nqg1YV1UDMZUasx81TfHTsmXTMF5hqb2Zt"
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
