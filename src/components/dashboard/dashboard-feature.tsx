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
    "4rBrhST1sEcBWjfG9g37LkrFdMiQHzMcdREBWS1HjA64bBcTDetSVycpVwRWYDjWjydHsnggGWTyNcW5tfbW5rL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yy2fEMyWmbxkeh8Ke1gw5XbEvRLFcp8Tpd2321t8jk27BgVMBq4JdeQtWqFRxMsKbFYC8swEwsvZFA5LhTsLmHL",
  "key1": "3WfWWsHu6cdwRZ4dTVw9joyQZy4Zjx4MLDrHyK2cgQWr8Q9jVr9TGqEFa2KANEs1RBqhKUQJoyUi6B5tVJkztxZ5",
  "key2": "3Fn7BZQHrPYFfP5qrqRWjf6AP1romVB9eTRxmeJH9ZWotkpvbhGCpK25YDzTN3EvYDLtMVw47oakDRKyYDUkVsJN",
  "key3": "6WZoTMRLAD8AEmdPqdQtLnicgzNTHwKbHRYBJjk652bX4DNHjFsK8A4BhL6MHqnnoERPtVpSBc2eJhLYTQd6rus",
  "key4": "4Xr2weTNJNMqDgpDSs5LZdRaCxjH2AJsEzEq5VzNYnEFDbjPyDFquFkYBcJgHnAftW9BA8jewmHu14dFf1sp4yw2",
  "key5": "3FJRMpwC97ENTi5joamGJw2F3A1RbCgp6WfBLB473UMQ3pGqD2aNopwWPt3Y8SMqPXfmtEgAznD4k7z3We8hCFN1",
  "key6": "57whtJjSNM8oCUy5rjRNT83qMDKPH4QZrm8bCvMjsXY8Y1w7kRTPDLfdePdwRFJg8LYmktDSdn5bHugs4Qi5tpg2",
  "key7": "a2MJofnKEw3QFUEya5JCt7BERac2MBHTpi4p24kmaHom2gn6Kc13dRDq9citqVF3G5fhroR519hHheUti3sQFbY",
  "key8": "3t4vEKypztrzsgW1UjRrV8izd4iMDcRGeDkEx7oMdkWWrSdrceaj5Mm27bVkj2psPaViWLasjGe4aFivYJh5AVSe",
  "key9": "2Q3sEBcN1NfSUSk3ziMRGcmXvqS6fCtVt3S2oXG5CPqTCcwufYRk4o96ZK5GJTrosuiPZ9xwVCVnufbz8GnN1Rkg",
  "key10": "pA8tLNPizCHwxEYmYpayuBaMZuYKgWy4mnUkWWNrhEAGd95zoYcVgsm98Biy94mzd1iuquRJTjryCU5kyUYrUJD",
  "key11": "2e7FVzTprcqxoRqj1RQyQdZjK1EZZuPwB7Fj6qwTFeTvfXvvtAr7xgcySaUxGpzmY5NtXV4Yr9VdRWhreZD12FbG",
  "key12": "2Hf26gUAaPbZxwbtSh5wiFco9kU6W3u5bT7hCbFTBFM5g3RfLLJ8V1xRwHURtaeQ71YmT3fgdSVk2hhH8uyxJHXC",
  "key13": "2iB84v29yGbpJF5i8ReFrxGDERL6tozU9bpyp4mNB8qRYjRwepCTDPtHKsup7Dxd71bvxSUBqLgm7fF2tQNsNwjU",
  "key14": "39djjSfU6XcauYDo2gmP3bgQFDQxhoWLk1sLFPdAZVrescizLfBVRXavw4UFFtJVpv2KLsfHRVSwdPbiwjN5e9UW",
  "key15": "4dSDEnkZ4bzRcsRf6z9ePWdfTcL6eQpiTV59Mk6F8QJsfPZbuBcRGjHYGZ9wYsC7Tg4tFtG32TmZKf6jhcbY2GAQ",
  "key16": "4rdqhZ9tuo8sk9gVPtAH3zUQx6TrPRietgX3wBiA69eTfhBdXN48dyCjTM16ZGfJCNpan65wVdCdHprSkmcBrsaR",
  "key17": "2J1VDiGGZaBRg5WVdRv8CJc9KisErkUt7XH4cDkmn9CzAvHXTPcmQzbELXdupS9vqZDQaZsEVpkSEASLDmkkYSVt",
  "key18": "5QeG28WyUJVsY8hUmnN3Ne6FJy58aNm1aK2zu4egnT1L3aJrWBwwYSrYxHMuX2nunXyA4FeGyg9WDkG8U24LPFaG",
  "key19": "5V2ATjJHx1q5rdyqvhR6z88XUZtkCCwH4SKSuMjdLorw1kctkfYd911EyiNAc8py4yJWHQ8wtgcau1Xh3QgSx21o",
  "key20": "2qMeGzZjGEJFwM2Lq65V5vbzko6CLA4FfnbUSQVVMFJMNKNHdpGKoQGHeBiYxexCz76kWqEfoa5euFi14D5LojCE",
  "key21": "2GjbApcLbN28sj3zYfWdyTioRcidpgdJn6HiedrbWvjVwwXgNbGtt9rqU3HRVfgYgduZwE7BhbtLmxx8TXsNPFeR",
  "key22": "4f2TXka5srvkN9CYAhFWEQHYoCHY9dnPNFK8J5K99GbhbBizPX2az9DqCGYx7Pg8iinwj3hLJ44SvsMoyA8sKRoe",
  "key23": "47y9rkUF9xvAceu1vmtivhq7iRr3QPAhUjQAMdu2HXwimCjC3BBvKBMx7xsE8vJa9NfF2h2RsbkgzRdL2v71hXQb",
  "key24": "2znDLjo92ZwBvXRoi5VC8TAqrcaPhgqtCqbZxzTtisSkAcA68MDVGGemGDG3yZHFyoa53GDpzNbhVAkymYpoaNmR",
  "key25": "tLbVzs84CvKFWLDJpQmrXtqsinA91cn4sDP6Kfq3aBuXcCUzY21F3hUdod6KXb26cLVNJSdqxxbuTkjZYaXTHoF",
  "key26": "5MeeKfobpiFXT6QYFbWvDM23dCu1UsbrZvSBTipgq8Qq2fjZkXHqaqG9KeSqpsR4Q8c6gXQaNt7uvGKNamMafKAM",
  "key27": "3APBw7b4GwvddJTNc3PZQqwVfie5SkJEueurGDFUwvchpBvw43ZCCS3BwcMF63jTTrnwHTmogdvjKs215KjDg4g9",
  "key28": "4K2oKqJYZTKCKJ2KvfKwJ4NB1e64zHUKsitJrNZJRcn3D8W4d8L8vaCzSC4HCD56kxwvP2LC831Usyw8dRJwNuQm",
  "key29": "2LEUyfmV5CgMsAiAzToLMG7nYfHWEQrbER4jC1CbTDMkAeFHCZqSrB74a6Z3BdmmRud2WS54gvDXEnyCvgSDFqqB",
  "key30": "3dL2CTuc2cZPiiLcRWJnucaqAngyGnFxauTiRpFKjAypJkC8RM8YGF2g6vqZ7wZA1MDCBT71xcKb8B5SQdNhw26g",
  "key31": "2Zw1MgTp1YXxyrXdjtTekJsEinrRsWSiDerYEAvZKWHbMAu6PGHauoaAau5eRcEzWDdLEyng57CPqke8Q2q3YJgy",
  "key32": "4uzQ5D2zWdhsjXtgotZf3rRvTgZFhGKhMeokT93dzmZihYHKjxDSZ1e6g7scksAKSBVMWz13wiCFR7Z5AxCmhoU7",
  "key33": "2m6sH6uCHGVyGCMTahQjcmUYETJEDN5q1MJwqZ3cQpUYjkHFojiNY4YeRd6HtPMWjULs7SErepX1RYxhB9ZrfvSR",
  "key34": "437PEDw7NYRs7vaYYAti9uVoX3CEmdrFJeNy67MBJ1yotdqNg9jECMdXGRJ3Soio8MKEWQyaG2caGeMC3ukZozhB",
  "key35": "dAk3RtwZoqBpVKfxfJhj9cC4UokZuSKsZSEWcVF273Qhny4ShXRbjM4oCQAuJF5W6v89uk8HNws9VcUK2UNfVPR",
  "key36": "29P6v2MdqbCgZvouxq5t75whJWQ6notDHeCVY8mTLpqz6CfhFj2BYjxQ6SYCBd2Xjt2D2SBrYKuR5ABYqMQfVD8u",
  "key37": "3uQTet9ZsKX4wmukCm9wTP6rr5KJ1Yrg2XMknwgYnxTWLdMpsjYV5K53f9GSokNFxJ9mcj3BYmSKQwv8nRhMPJrH",
  "key38": "3xgE9Uf6J7sSjnQYYnKbTbj5UFQgyPq1t8V3i9GTZ3o38dM2dNWqHeeUz1RFiXoivvUFWic2Vy9zwYaNWebNwYEu",
  "key39": "2wvSEVQPRA4c2xKgBAyQonM4RjaRNbdoZdYcWGw2EYiphAzwoYanCeyP7Wj4vBrnxsqfckjiD3GuDGBw6VNHRAQV",
  "key40": "4TvV8zhcFuPbTgBiKYxTdpQ8x1JRvZMMHbUhYTgFYvGD6eRBiNYxLgcHWGTiK9HH35Qy6VXkZQcFzbxtAho9c9h1",
  "key41": "5ZNUmFAWTmSNAbNffUqUZmdD5NyS1v1L7rhK8a6afYEEUwq8kvmGhZYkgGKGPZDVSvHsPkVyw2RN6KFA996Ls31J",
  "key42": "2UxBo2fQMZnqQnA8YkhcdWx6AJEKeKp5sEDDFtQzWLhqaanh1hMPwYiqBLb9KhDXCPug1FAS8x41EXYPXSTy4ECq",
  "key43": "AhWuUJi6gip9jsSeziXZvVN4mBXtC9wZPHuD3PRkiMZB2D97h1ywzvsWWiN7RSwiHC2kDSyEZg8JwmMwV13AjKn",
  "key44": "4FN3JnLHxTeLoUD9Vp6R6798WVYVVxyyMLxTDC4dT36UwJSf2b1ysgpo62dyHoCH4jsDpRGA4S7d8RzAUbdKVAHt",
  "key45": "Sat23s5g9oX11PYderhva951aSMoQYQKv1gLCHCA6PyA6heNsEoUET86Et15bSss3eKWA5h3paroTVNrjT4LXQi",
  "key46": "2ZMsqem4DonEWYp66WsVfnP15MYzPT8fmR37H4nJv6iB22MmV5QYgrUh2RQtpmq9oPeSWe4ACRJx8nz7jkUG4JjK"
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
