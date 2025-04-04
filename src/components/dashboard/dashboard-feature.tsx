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
    "4EX43bNLt4tYEeFmkVvwcvrCc4znHqT1qcSF4svDHie8jZB6qHEFCQmzfDaf4pYtBXtzkam8XHqYPhooptoBMqPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9xdxB8ipgkDGu4MxCd5vWWpoDtd88wjiMrQRu5J8BFevEVD6we7yqNskNumwcoxkaZvAo42cTip3E2Pa8Hf1hH",
  "key1": "23Z2ZDvQF7C7BrNGMZJpVHyTfgxtN5LDir4XBniUuAHMNfoGusgMdZShV19TZmvSKUv6uD4LJ4z6E9pFinysEiDF",
  "key2": "nU8suycUzRPq8fWhDBF7ydei68xA7Lrnz5vJ97N1W3xK2ntBRasgZbRqHiW5TpLPhBqP3s6DBaSDJBMwofqdUiA",
  "key3": "2yK2wth65SRgw7LFhBxx5AyMmeyT6eH5N88iwCxj4ddQom7Tsd174PVjKpcNRCCkwiKpV9cAcMApUvDvqL8WMnRv",
  "key4": "4RfJjvHERz9vHh6zq35SyDRmKCt5t4HBPkEzxQWyZHyg5BaMPG3EiDrjebnBxpKGYjyFRJnxomB558H7Hyt6hhC4",
  "key5": "giYmCLZ4FSRccQsjL2a9gtmb2pjKmrFtGogvBkD3f7WhGbhKuHKxJNe9MFk9Ldv9oxCnSPBhQqjxTDrgiyfeKcm",
  "key6": "2Vtz1zocibnU7Dz9wQsaGvx8cT8zPF83g23SvBs6KKjQbK44GnGTrrYTp1dSuBst6RbMePswFpYpJxGwf7oniQty",
  "key7": "2atsFP471u6bT7Nn6rXpx2yudEAKc3jBqyRUZgVaJFgU7Pa7XV4iDRKmeZhpAV3zAoStHKPLp4Vc6aboofs775zk",
  "key8": "5vDwEjGC1wmeerX559WgPEt3sAtfsjYFTa6kVZjcURFwfeAstbzamgh3wf6iCs4DE4MKovdnYZ53m1aBFRxHAa83",
  "key9": "2h5Qft7tS6diuSbLzMGzxvUngDobqGfuXAnpmx8RpzpbEqDQwsmqH39qk8rkmn4qzmm7AjMSXxebSTg9G2WwLK8f",
  "key10": "sxXxnU5gioFxZBPTvfZHgforvje9SnvnkPEsJ7bptseQ4zghan32vcx4uQ3yPTjhzurWUsrVQdmPXmbKJ5dRpmN",
  "key11": "4meDBxjMQzyp9nPM1y9mVCCYoNiJJPVoVQtXqqpcKZMgT1vCbhCETdqhtaCi1St6Aivwf7wpoVGqE3vV2aUu3umb",
  "key12": "CDGfvFMbotAqJYPDypuJhc1sEz1UNX9iMwY8jteXnKo3n9ZNqsVEAx7m2uGKNkcTuRXWkb6dqXT4ym6egQijmkv",
  "key13": "1sYFQ3SC8m5jjGyeJBA8dZbxkVMv1jjranQdFub6TiLPw2rHZoBfx2FUu5azBK4ejNw71TgEeHJUfbcd91AE2aV",
  "key14": "Yb5sq2SieuU2fNAE12jDnkt9XDoEDBghV3s973DNUMk9mxWGqYLr48jAoaGohGTLvSYJen2rTUR2yuHWcVdH6W3",
  "key15": "48GNUW9GT7KEaqQhSgVVr4dBq6u3XfkY2muFLgCYbBB81S6oR37FZZtPcsomH4u1rB8goPWZCqHKu6M131CWuYNw",
  "key16": "21AQC7RCiYSscUbtGBebjLtKthq69V1ka4DZqjnfrU1NB4b6DaFszLMdi95CTavi9Ui5hm4rui8fmmozG4VeRjiS",
  "key17": "396XPUrWTvExZ2h8P2WZ4xzbn9G8JVihCBKpk7rU1djMop6LzFk6xPoEGh1PTYeg2D9tM4D1qGFceiYQLo8hTQ8j",
  "key18": "yyrHJC7bAPVLAUgsGVWGmys5mgHSTbHZwP1QZVxvrMR3zT8SDewJMqw9h5PDhgfzDUSE1s9GZQtHMiGMeWuQ4LB",
  "key19": "jLBQBfjrZUkgSRzASpHTExZb6tVgDSCXoFBz9uefDFQLfMu2jGMmE9e5DoT3sdg7JqeHZBJTmTb5Eqg9GMzM6yT",
  "key20": "5VGhX3p8U3n8vSfyHTtkeX6nGBkph5g6ktbniLmaRpErPqFATwgsXkV9MLtDR5cPGGiXxQGxyE7wBUg6guYfJALS",
  "key21": "54tWpuyzXGHXwF7Xn8DXM7DzbnQMeQQRkTb9voV2AYjsk9iqeMEWdRpBzSj9cr37GJBe3aji5rTP99NckrR7iuoN",
  "key22": "4WWSQFUWJdSzzSe5CJwigPhF7RoKtaQJSVb2ARU42MS95w3PMQj2Z7LJ1uG2AnM5ztNs4NSJ5FY5aMa1t1LQXtxa",
  "key23": "3AuTqLiFbMWBVxGniyywgEbtKwH9NbSE3b7g8SYZLqVQvS3JasDBNckChyhBHupK1miaYehaXusKm7vFgd7kbVZ",
  "key24": "3WwMn6CALAGaMkciBEcRWS1mu38AhosyDBXcv7wPanww3En7LUgRZkCvmC2r6TjHbB6x5hx1mNS7ep4NSfFnVpYq",
  "key25": "s54VwyZPUKH6qYzaMjtK98rvhyyKDL6UDZrZVwmHECRfG7th4DsRr1H4tc3bQPqgSGtMSRZNktuU9vVFcgkrN4g",
  "key26": "RN31VzT81up77fsroLCrmXoqsnpQsKSg3vQCNVKjSceJfGhpa4e4RzG7Qoz4avXGWbBHyRAyrxKdKxfk2pAWZey",
  "key27": "3cp8JgKGGmzF4MG6N4YRfUSWF1S5zqqXu2e98Kg9PfzT3FHWRJeR7jYiTNrerFQpViDFfC1YoYq759XC6w6bEyKQ",
  "key28": "3ZEhSN4nZmg9s9EqS9VM9LYwXSJgY2NrrUUkekUCmpC3q3bLUkXzhqB3ScJvr2qmXdP6sRHARTZrqSisNmfnDm7a",
  "key29": "4r6VqavcovaC8B4Mdq3kAKnhNyYTkKT21usThqEHXGdpgKo2sPGCK9qqioTWp5MVAYhjGsPvyg6rQn2DGNLFmnwB",
  "key30": "FQ8bBgH1pUHHtc1pBXDWC6rLNRsGwpVvSKHiaHzcoAkfDEg4t9aJMy4YFPnGAystJCajHTuSY5qM5JRtEVCVKs1",
  "key31": "2uJdGHVivnHVA7b72QSzyprTXwdEuXTQo4T8N8qjwHPDrQi2xbRS1RT6eoZe5RbkioFFEm8HbjWDhc7RJ5oXCxvo",
  "key32": "56os74Kvgt267A5jWuJzC7XWap8n5q1wW427GXmEr54GMMA5vVP4UWVfSmbezFWviv4hNRQGyUkEUNjb8U9sLFPX",
  "key33": "rAG8gm1huS9fgAgNxQBMBzGJTCi833gEZTAqDCw5fXhsrPKYiM882u6kNU4JMz6GrfkUNeyzoPbEWZLUQUZDVzC",
  "key34": "Lji863R5h9cpHCFJrbE7wNm54JrRuNMFj1wWCGG9AbPwTpXurW8T99CtCo1bibabiA8BEzqt7oaebte7Pxu1jY5",
  "key35": "2xCCnWxD8RKMEXHLsYYXMajuLAMSsqoiaiveMn3mkiQbV1G3yDvdbWYK4TfNp6ySFnP46KYYxF5RA4Y2YDM68MJe",
  "key36": "2mfoJmPBkwqFD2eQyRZRXwoxiDt4La5THgCsP4pAZoXZc5GBzw6voz4wavMJmfbz1CtxuK3sTjn559ywvv3rJSWk",
  "key37": "3V3jQu8j2JDSCJy5VzpuCySbn4Di65AQfTKjKT9NN3wy92iZbJKdpFLgNAbEor4sia5nRjxuBev7dZyfUEXGKs2q"
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
