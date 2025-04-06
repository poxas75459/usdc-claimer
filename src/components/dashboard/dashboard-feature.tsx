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
    "4WXooEiE6yUrDffR6BFpZkBAPKbmWPtKHnTtSA36vcffkG2vX4u2PX4X7mUWN313Z9PWjp11oAVbDtWZ5bzCBusb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fe3bCZivLtqjhEmBiUsaWMtLiuGm6iYqWhTWdGHYzzd8QDVDwePa41bZwDc9QEsRSZa1DeBUHUp5TJJjP4WinQx",
  "key1": "5CJR6XdwVZj9aBWhtxhKRgad898V9duEWxDhE4p4nXTMeqYXAnMujt1oMGHHa1tbAc8JjQ4Kp49MNQMExZ6hRcsc",
  "key2": "4CgTQJsWmvbMg7KeYxsFn3wHQyEKQofFqtG9BErstAniiNPxhRGPyjmLEbxRM7MEFsygzRhcXLkUYrgHYrPnd15d",
  "key3": "4mygH36JxwF4YzLChqdHg6MVaHbqzJePjdn1MnQvgWc38gj5eikUVbRAseJMbnavSNGWW9srsjUVRxfdRiGbSfPm",
  "key4": "5vH8LXd4VknbEKCpuK6mASsMKN8Ga2uo1ksqoENCT5hDcc98bDVQCFSmkjLKp43THPHuFx9yP6jDvkinrFsWKiL4",
  "key5": "2Ep2E7GbtdyHMeHSD2TbkZaTkPA2TBkZbSy5gCMh9HMsSm7yA6jp41TJCCLTFYmurC1jtzoUWh7Zj4xg34zAXYUX",
  "key6": "4fzCGbrySB8dD7V3BcsQUaSMxHuZ9GaXjSNiFKb1XRmHijCpUhAmUCyogegoEMLDZVdE7Rd4RdLRNu7zwsgBdTuJ",
  "key7": "24pkepY7PU9YFM8Kb94i7jRsKUWbFUhDrADgwTzBhE98Knd1EDuTvMmDicdpUHN6Ar2b3vVdncMm7ZMsrNNqm5yu",
  "key8": "EVCm8J1Nw6gyZ2NJ2MeYP7J2FL88v8wvzeUTNANZb6oS7zzM8ctLwgvojE9vKpcDzE9DC66q2t4ucZVb5Gk7de3",
  "key9": "5QK7TuLv8TyBWnsmUZesLGYpy9f2ecsvGdcPeyc7zza7agMcZHGd8VJTZQhMaYnmQSAB7qJy7G1r5wXtkiqSgGhM",
  "key10": "65xKsSTWcF1Pszw2gsGf1S5fAR8vozMyzm8gFzBJadDB3Rv9gYCbaVR2ThCjJjkNvYJPCenWQD5xZkyXVSdnc14f",
  "key11": "2JzPEA4wCUxHXcbz6mjyairM8QfMb7XWiNSwbFQfr6fC258Khd5wD7fw8ZNnygHNtfTciYWdXsXyDLkQiHN9qLy4",
  "key12": "5SiHzeBXh4xhHH1cB6XnkqhshWkjQKwA9nkVAk8Jwux9fZUK2USFVY6UMC7BM54epF2XaVSS2eKj2sf6GzFdmJ1t",
  "key13": "2dDX2ihHzHiTw4Lws76J6iwKxuip5ubEgqRPnqP2petddCpjtJaVYzyyQ12SC7YBTF8UFuhoQzkknT2hfULmAqi9",
  "key14": "56o58VQ8yR5rqPgsbGx2oauu8BDicw8f4WK8CzFGr4QfHzKq7j5wzQgTyzqP5ChuALP3QVie8vscAJdJRFkgFfkY",
  "key15": "4DK5mMR4pwGhxvRRjpUooGRnRAe1wgPVPshrJvj1E68DFhYi7jJgzCeYio2DnGLqSM8JsKemtwKp7KmMuQH8XYQW",
  "key16": "obkH1xPNEeffTzcnYK2cN7jjt6kJP34dxx2zaPd16q3swxBVLFAGfM7Etb5PVNAV81TBcLwn7ezK9Jdh6514hcu",
  "key17": "4yHhNoBsZAu3Wq3ApWUdapvjMxAKW3vGJTKHhwDN9oPd3tpBHxt7ZWFN9qaFSgPpxiyTTNVM2bf7dYJtdwgwnCgf",
  "key18": "3QRSnY8iDkhsBc1FsmmJadKDCVisBmut5Vzcc3wxAUCnPBRzcWsTify5GRwkfP3KyS8mj6AwKbmzseDhXMjb3HwK",
  "key19": "2scJxxMSTNHkjXgwhj7FjX4Sa1XnSrBWxctWJh1VTTT8hiox1Vq6MnRNk72E1MjoT5mZJoFfBduda7cj1peXSGzH",
  "key20": "2Ct9bJ5rELVTmodMuxFdqPcSjL3RUTSjboP3horcbRxYFLie3fTzfD2w2QdgepKSSgHx3H9CaBcmHmCNYgHZQ6fb",
  "key21": "3qRMvmFwc4i9LggNWwvmVBsCZtky3mLoaFYjBF7WBhQzQgyC4ppctjsH7xZsXnxJUruDeudt2XTPD7E9s1TyfTXt",
  "key22": "263Gczr6bGV1xk2LgwPZoKWU4VSF8gTqMhncv9caojwwKc17nKPLXbFsJiCM6aK7F4HDcJBsKAHxpMY9uoeMSZxu",
  "key23": "5wRSxDEwYMqErrgtiHKsif5wZKuLGwACLLmSU7bQfAHtJBwhMkZ3JwFJWrM918Wi6ernjYY9etkpuoFpLZHkUMRd",
  "key24": "5SLwFMEsUkdGurGwW1NJ1Jdna5vpWFgGSF5QCCgwwwJ8jG8WLvNbhKFaWTUT37LUoH1Q6nkujKaaCFf2TT1LFj2r",
  "key25": "4pgsG6E8HQ9rLHQuMPr6hRx39SsVfTi74mVe3DZ44H5ubyETRQ79SaawV4yfwSyeiuvVrb88QLNbeqxZcJkuUhSA",
  "key26": "S1ywUm5SKN3572hPXhZicEWBHtp8wgVxktLCCrwGUP8wspdFJeg23MEWxKjBocZL17n7aDYDTGtMCYWWjBCjWyT",
  "key27": "3oraEX8yFW7z9McKYpRLi3tL8sEagsKegWMdcG5mSy2QUR3VezNDo3eCS59eGcDFQ3NEwcQ8ni61fFanxRHeV7VQ",
  "key28": "62GVQA7eUukVmpn74eUChkBxzzYHKtyoTwUW9r3yWiRafLaS4qp94KmZyCGbx2MZSKvY672W7Vymu8yXCjUTLJVa",
  "key29": "33vsaZCumC8Rv3cAgidk2XWB1AWpRLQWhD3SDief22YTmxQQDfWVo9VkuBysn6jxkU5HEviw4SUwE1ZJoKQ34pgL",
  "key30": "4VJBjDwkucPNbT7TQ1yVViYA3zGqjCLcdAozcT6yseAVkDcorJq8xk9ksmyWg28ExL9CG2pa5aQ441Kwdj9vmNQH",
  "key31": "5rh58L7SZT7bdAw2D7N5178sUiD8P2hKtB1fD3GdegRAthnSJZ8Eoxkn8UMnHz2YXW79HCGDLTPAcHdeag28DqQs",
  "key32": "4FAcUjHBraSjH518w1QCAz21CSjWF6zMnWJxEWRTnWVTyvUJGMv9CefChv1FcYRQQX5ryZEWsfvKw5MT6UAzhK5W",
  "key33": "2dz66Muv7KS4NDpBFbVFWP3TwJUr8EiE25VKVEnnrWwrgxv2d4YXNDex1Y3Z4fQoZ7wJVrHg6eetpwJe635KALRN",
  "key34": "QHN7E2UmWs63YyyLMcqK4xH3TjA5mYpJQ767Qq37pEaULYxhaUjj5oq5o2fE6evEfdk4TS4uBwPmLijhtn88qki",
  "key35": "Xox6z8aEaMPxPrWGKsqwCQZBiYuqwDsV4FvW4XQ7He36S2SktvWGruZAr8WpTSBJas41T7XWfDRz3M3JdatpKQD",
  "key36": "21YTt2722BnRTRJqwBQhNjkZJgrUrJ6isizpPZmZpnAFwdCPxRguN43nkbZDWiPpG6ooUUewuw5XWjcAvbkkcN5R",
  "key37": "5JAaYPMbxVjupMsJtWX5y8KufkmgtSTdmtSLKiUdpw7kejgKrhxZRwz91N56X5RnuxS8wDTSKg52xYvzANSDgDQe",
  "key38": "32Gb58Ns7WwLBUvZBqkMteVhpsGUsfFciXyMoF8yT2ppvJBr6RdCnFdT1wv6GhwU7VWQnaQKJ9HKWcw2XW5QLG9G",
  "key39": "32AyD4t2Epn7jkyhUh97toAZfpiuR7UCbcBSWS1Wm9jTbhdkJ2qqennYPybZ1GHYvfEZSZVUE4doHh4uM8qAohac"
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
