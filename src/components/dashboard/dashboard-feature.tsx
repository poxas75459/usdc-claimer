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
    "4KA6uNC4Nb3cyA5vYFTpbfi7H6eTfTnCsJjN8dX4VXiC69ya4KniNnFxjciJgNSu11sNs44bmraDMSBPu6ZCNMre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYPXewEMT8APiXe1Yd7KQANBAHwD4StQo3mE9cvghRCCzrBxTXM399oyH1ww35nQUBDLHyB53fAQChdTapgNT9X",
  "key1": "27ZeXvq8CSxJEHBKrmHTskL3oNyxW4MjQH3bvWodwTgPk5WV1tDQrCUFs2vz5dDS33rpfFCmPsc9YdnMSAuvcz4c",
  "key2": "3nAsEU7PTQE6Cj2JXfQRp1Wyuc7a63evTR1niw33kb2z1LM2Bq9c4yzaTy4kw2ienf1MGh2Ex943vrTB1vuV8Twx",
  "key3": "4tk5pK8DJQK1DvtydC6r8tiTQe3h74fhTz51jBBHLz9TJht6or6TZR7o9CVpk2m9uHTPdtuDH2gx5m8Qz4uTFyi8",
  "key4": "5F5xUnzfx9nRD5E6DgJLpuWmf8CGk1h4Ht2aetHygVqCAUEgbsWszv9RFvPcmyubxVtxS1Lau9gtvP1PwRt5rNq8",
  "key5": "2ifi1hjrXboBdRCM3p3pJbqHmBcgi7LANc4BMJL21mUaWMZYWeH9QepfkgD3eubLqu1JZcj1z8dPNJ66YWBt3vcg",
  "key6": "wHtisb3xbJnr9QGyokHL3E5HAAmSjEz29RRrgNFRHjg1EzdL6Rps5ZQSstMNiAN29RxgBdzKzKeG1FLNYKbECz9",
  "key7": "4xwYr7Y5UZrsvjy7SDF6HLygVSgESZgpUu8ivEvpXbP5A9zhPLKo9uuFmiGo77V6g76iwxnSWwhsyUSCzFMWBj38",
  "key8": "5PU6ZZgh9ZSNLN4tYKkj1hVHmy9irFNQboyRDGSDqCeizZ3toRhoyrPpoLwmXGpa75sQbWW9URsGXdWgDBjBceme",
  "key9": "5PTJbx5aJgHGGzvf141pLMRhErtsAV1k7HA16QpRc9gAkP7Fn6iWbxkNpwcuvKDPcTt7yFPCk9BF6iQmri1RDZdc",
  "key10": "b7qwx7Q88WmbYyjWX7B8B5Jk9ueGehvRneSKHaFuLfhTrqUeC8oscHHYW85E3sQBpYdSD6oRYVfQe7vuT1yJ8kA",
  "key11": "3SXU5GF1PvkvNyz3PQtHeoJ5BzFXiF6JtPEdtE4ENbmzpZsqhL3ttHZRBoMduoWRK5tn3ixr7EvyPtzF7ZBeP7MP",
  "key12": "4V1tadR4zNTUpTEdjgs63Me7TjHEzchkweyCXRjD2jCkTfvs9tsgLgWND8NQHAtUrpFHSuA6t9AQtXXdfY6wm8gC",
  "key13": "NNkfBgNeAJi4Lw4wUmAm67d27hRUvG5gy1jm9aHWxHmaVYJSRVJGKY58XLBtG7WgESaWPww7sRLb8dk9mrwZeGw",
  "key14": "384bJXdFAgFySgNrTN8akYWsV37bxVSrMu1KmmdHKuZQGS8stfc3S6QC5CjHbAL6AwzGZ9HuexFWamcSMXBn57Li",
  "key15": "585i1jM7vFPSwpqKPRsyuu9hjfRsCGsj8q1fWY4kNipp5jWJ7popySDWJT9bwqVB5ZQgg3yevrSRQgzsFU3cQGGT",
  "key16": "2wL1uMrK6CFmTXEUqDAuoRxzMBkVUd1gFJQg3ydwTZN1ahbn8EZeaNZTfz5Sq1vvw4kCZKNQqw2XNCxEaCztCKbj",
  "key17": "fxLWD8pYMQBkRh2AWsemhvujXjU72wYc1yhfUbQ5eDN6rsChnAc5g6TpecRtSPk3hDQpMXmdDTQHLrbrzf5ZS7h",
  "key18": "Urr7sr7nDsCoXRJ9jMpoUdyceRDp6iNihxoaGCrJeAoM5kDMmdCiizB3cKEabVPGbCkKDGANgigam9t4L4W9dqr",
  "key19": "4eCdKfzsbnB8pGk6vgEAP5ttpabNVSwko4uQGPE4V8vSLUMbHRjyFAhjFSSoRqPcrjryWfJx8D6MJnoAxd9Q28zC",
  "key20": "5gC2ojU7mpM3ES6gBCiFL3tK6XSTfcEG3Dv63XXx7sAYDqEsKPLdMhfSitFVGxoLsJ3MVFhi6YRATd8XHpxYwNSi",
  "key21": "5C9KUX1s8HWW6yRQLTvm2Xbozis1ShNRiZaygTDDFc5MaHXGMdWs7mFvZCpcANkc7bi8wtAXegZb8N2XNAvsuv2p",
  "key22": "3CbRzcfZAse2T66bNytoK5bLQ2Tvs8oNE4iSyp369BLMwGEg2KNVK7SuUprQFNzo8GAdwcHLkSZjx8HRVBCCiSQU",
  "key23": "5mSe9xeFbGtCKHHNLLC6CEjCtcDBrsvivX48GcsNxrXHR1aLq15iixdKsa4ZY6wvp6ihjrxcQYRsBnbeFXvmWvvg",
  "key24": "44FiFeyC6qQJFuAgEcR7Fau36ef2WXvurMj7ifBNKdr1sBq4DHimWxKtZxr7PULArBAUYJsBX2XVUZYxGgPK2rt9",
  "key25": "4uqkHS6YPm4Jp3iYpUKdG8M6SKz4vDNy9oPpNuE61csz4ZpC7cTchLnScN7o29XCKbjUcDa7eMbeaY5kWiCnwCRB",
  "key26": "Pw6K47ec8S7hENQLJgucezcYewTKFw2eo8uAHcS2fvpXsZBkM7SME6dLMcLyeHdNNtw9RCeARyfUugkrKVyRjCP",
  "key27": "zcKsPCt7uQQH4s6F4Zfg8NAfdFs8rzqc85TGXjGeP2SLz7D5oEuyz9Yfwz5323S4LyKDM1T2Q6bhhoyyekXMCrH",
  "key28": "5isz4CjD8t5eiZsMoZHkdixPBLLBrKToUxWZoaXqw2c3THTcrt93cvq6dZFK82QguXrg2qg2Nxt8a7LZtyXnvPzB",
  "key29": "2UDKg5zEn7YvhdLGPmhG8MjkYMD7XSFoczT4NFqboUzLWxF2uhjzAUcbbd7zG8rXbFVBXc8nqnpKANRePUi57qdR",
  "key30": "61X4NpRr5JavmDExmtsdkEcurBYis1JEAo6Jvws5XmAcuRe8zPDKaRgUfnMoXFjgBEV8FmUEP2EL2KovQYnJMAKK",
  "key31": "2txijkz3kGnpLoGFWAnyzCi8GhM6faBU1cJyssA2mRMX699om496R2Gyya7T1LpKmAyEtny5YH6jomNpEXAd52Y7",
  "key32": "4XMy8LW94Gc7xbiiP45eEaffiNe7Qtyws9AbGLrAUNcnxv9hnVwS1oJdi5qJ7oTb5w1ZP614JRWDgPjTEGqnPLuN",
  "key33": "22a5i7v4hZL3697c2D87LnAGKTWvCdztrvAepr2jbXMBPTy2ZRxVArSVk5mDF8PCnxtFqfcQzVh9oKZaoFzEeQtZ",
  "key34": "53zCiVEgyE5yxFWdzJRJx29ReBNv4fQBrcGKZ4W2CUc1usF6eP6NqUXxkNBnbrYcLXoi9878BG9Jgj6JEn9ygHRy",
  "key35": "58EkaSEMXDD5txY5tYocEyXdpPyKJ4rhQ9sHNYS1BLgbTjpyrWocP9HQhM95XNKtBEbc3FeAu6EJ9hx38ryCN1aq",
  "key36": "4T7cdLvGdaCBevUJacEPapMZywV4XrDG9Lgf9KDWQNaWub1JmHbSxGLgpirK8ZLUAUEkkRJ78bQCArKkbXw4qYTg",
  "key37": "2ewYBNVk2iPEnJS6Z35Xu7MdshPBCNeBvsi6tGGCuT14ZWoamxAgu3hDUfvdMaRwFcuKa4frhZx114HYaVhu4vA1",
  "key38": "3hS1Xq2rV1VTCtrHqQvp12P1PvLoTYMW8hd3JwkJpGBmZBxoSMKwfUtFEHFWeyXEpu5FAxoudRo1uKaQzLy5znci",
  "key39": "2BPBXDBdSSd3DKUJBJNtMN8hfk2R6cJ5gszg78GQPMJHCMFvJodpU5S1KoBXT8LWj8nn2TXCso29SDiprqzxds7D",
  "key40": "5PYPyz4hZfwM8WBnF4w3mtVbQ9Uc43dmsby2LBK3xY3wWWraDNyYVRZVF5hWuy2afyqM2j4C1ANMBx5hCGjQpUAX",
  "key41": "47dBmNGHbb4WzehoScwujZH2uRcCMKdY4Vp9f1Jxz8LLSWduVDoW1V6aD7ZM5hShW9aJeVVpdtYdjYdFDMwc8N1J",
  "key42": "4ZHSPidhhPMsyjoYEPb9mxfaBnZQmBiRdDjC5Chb3H7jw6KN3Z89W1FVJMZgsSQm3M2uoBhoSyvBoHQMSqWGnnLE",
  "key43": "43ryvBRMzy7QVC9dHP86DPNwNbN4egDQjjpEAtdo49TKykiv6NmhgobUEqhpBacK6DM2FdYUjD7RUnFxkDknd7r1",
  "key44": "2eetAYaWEUM5sU1kq8Pwd6WBKEyVxoAoKsZu4NcCzEqbSKBjVW3qTCy53YTpLuzHk3G618j6Gvz3FCbBSCX1jnYV",
  "key45": "2ajm8VRBMNRWh7CVdp2mEzvn4dw1NfTFDsqK16M7aCKn4xkMdXNkv5GkwcY5tCZTwm64osbhHLrujvEa17q59jSk",
  "key46": "4gSFMG6HVV6gzLvKecc6vUQ97qzgYiroUyxkjUnrHUQ85qMeYGTBbfxaMGfCPGN5Px8NK2RC22mfneHEBkxXvvG5"
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
