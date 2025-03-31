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
    "EhKYTGSa52xhvsUDYS5VbeEQioi3wBtRejpddb9Az41QAra3L7KTTU5UqDcRLBbF7N1Ps4uEz9tFwxvXtXrQzuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Q5xrEJbHn5V9jFbJ1g8k5yyPoQdDXYUtHgftVYLEnJCQJST2e3pcE66V5W4bgjkyEJSFRP4o9WuE44QAhozFpm",
  "key1": "riHdPqurnzSGzJAY6qya3MrBbv3j99Ed6AcCKaqWo83iXmcBJyDenhdMx9SRscTM4QNpkmjhGwRs6Pc7URXTJ6o",
  "key2": "2kY4TvGagrkZQd1XopT9aNSnZFQhrUzDED6M4dVZZ2xHdoSEAgCQrisbQcQbyrTXB5L3cBfjofhWDmqjjnSbdXUp",
  "key3": "5HfLwqiZUhuwcTJzfoDN2vFFXREGEWmWoWfbEBDGoumidXpkrMUHzVoRA5mT4YAP5rQeUjbZMLNUJtSEJPNYpi3v",
  "key4": "kypqpEtw3dWrZcozgC2PXYGiuphtaNJCN693juswNrLN7dye3G32unaetCyozcF4EUL4aYQ6u3aSsPbGyqmqwq3",
  "key5": "4EaQgE7qQywjEPR6vUZ5bR5jQrUtZLgaoC6iFidhB4a2yRG4yTZ5fVsUi8CFMa3L4L2gZcMJdL5ShsGsgCcmpHU7",
  "key6": "PfiA5wNEehYEf7PyNESwGrte3zHhrWDF6mmBEF7C8V2rorPN3va7XtJRykys6Jj6BCT9GSSkE8x8xVvABXGXF8w",
  "key7": "2Qyt6DbNYkTaqJcgCqnTCf61PdozFvKNkBj9obmWqUf9S6q2zrVrzzRdjtNSbYwEJzumrvZcdkSsgvesC6z2XLs3",
  "key8": "3nTqT7VGPK6xAw767YZa4Syd6KEwAN42WkZ2wDL52vyFAwVYjDk4Rhc4qV5ekVeZ4WvB5KLTnaznedUXM2UTQ3ng",
  "key9": "2JViwV3faLnzDQA1MysgiYSMb7JXqp45iqryBgu5vD8EgwiasowcmRgyxFhN1mQgFDAQjGDMw1BAxwJw4ixR3pvb",
  "key10": "mvBSjSAEM4Gmxo7oWfRnM3TucevetCT1K16fWyhiVVeyuen7fyiAfWLSMkMScKoxCZP5XRg5UXddrmJBHmKJMQg",
  "key11": "65fM7MUGpj56g355MHS7s5HSuc7F19JGQkqWSUXUTWB1AkdwgpAX4QSpxNxnKZS82BAXEKNU5dULQz2Nm2CeuLv5",
  "key12": "4sDf2MzsBbVXP713hYwmwFBCCwKdgh4v2ca2DP8tMdo4seEgrAgnDphk1ye4r49faCYGBq13mHwv7ZRYTj5pJ8DL",
  "key13": "2LwaNwv6dd2KcFzFMogcpqAvGe9SjzhFewf3NxJyQb4oSRMMeN7iiv7fcfQHTnePqppHsyoUi87iQqqsG6omoWjV",
  "key14": "3fip65AFZAJTJETDG2hVboyEhrKwG1osFtxGu8K75jdqMGkwGJT5S2tc3uA8PC6a66m5ByiK6naZsnz2tZWdyQaW",
  "key15": "64NDvxvrK48KaFhWc1fqneLrGg6C7u4nZiXcL6JV85szyNxcWSBgVPR1NQw4pgvYLk1LtdmU8gT5SSa7A5PxuouL",
  "key16": "iUjaxZYsFViEsaiJaDvrpaNJwhf88AtfomkA86mXwroQ93jfKNLP4oobKaRFVcgtenUZhV9scvpY9QuZFMRCzbL",
  "key17": "5sf5i1zHrUHYhShbeikcdzBGwZ7svPQserDsHAsoCMW5BE6fb8tag5CyuaiFfUEptUqmDiRaxUUvUC8Xj6HJRVeW",
  "key18": "iF1o228ekgYaxjTnGG85LWzFfzvSBmqHN3Ff93zjsLB4T6zWcybaQrNQ5SL54y5JHGFZjBJvbpiZTgioB82KFks",
  "key19": "3SN22vLzS64aJZKhtEbAm4RrmcmJ4JjFKPvPiR9Z61JxuZ6CPuNbTcecADbcsGhez1rAgG7efUuBkMtFNoZZdgHa",
  "key20": "mr9yuCAqGfFmrwgqavgjpMixzTvktt1oWxSbb4poDQvBt2BvtuYVpMrSdfmxBSweg5yGmSmKNAHJkorLRyQVvSB",
  "key21": "fq76n4q8rvJmjhj499nQyGSb6J5LVork8UmsTT8ToEr3JSqfBGqiGsT24sELvUzWNzcKoxusjbEeetcVPEjsZdh",
  "key22": "49BuejKpU36k2Ai4YUNiP2JseFVhXfcwqNxSooAg7fPzRVNsTPmvEBbGf8sSzw3g4YBi5VeSUwRdtaQAcmTBa8nn",
  "key23": "5LfDj7RgPH7nDeFa7WPL7gCeTSYoYtTSB6rqwmgGZff6v2HA1b2zfgcttq78NarPFoao6A2J7cWgUAiLpXbiLFuy",
  "key24": "4vv4SZJgYqpcmzXdLiBprGDpBKBsuX4FRVPB7NSKcEacDPUAtsoz3TxaC9RKgoisaTvVboty3qgpibBeB5YP7ALK",
  "key25": "2rc9sLmBJJWZpLxh7BDbdp1gPKoxwcSvW2etErNTqfYASuMggzh2W2wDz37PtKzGwNiuki3dGad6uJT4Sgge9nr2",
  "key26": "5TYUdd2wgFyeZ5uBgLQAeVYYEqoLteZwRv8FN6ouxFkMSPKDbEkNsGUyFtCyVMGLQueLrcu3oSJrNZUqsd3Mhiny",
  "key27": "4ewqHuAUxkE68ieS9a7fmv3kwdL2t9wJhYpMJjhsqycXXEPvGUHesaWbdWYji5fnw56YEpMLLJSxZfjm81adGniz",
  "key28": "3HxX4FB9CrrcGiGxjQUwx2iNwwV4gNzN6pGvCmnWvXDW9hdKZ3pDb9MtXAmSAkH5WEXTSvfXsHmiYMVwTK5rZrRr",
  "key29": "2GinRCQAGQxwkq4uLm3QiAneQLLPzwuWeGTNtKkejgF13PFP9TM5VazdyPnFvBeTKLEGB1dftzrdgn3LcDnHtsUx",
  "key30": "5d13BTzYmTYPnb6HAzAH4BcVt7aGyfSsxDLY3EMkyzeswTSZPtgsctYUNn3NnVjXt7uJmCc2gYgLQzQKx1H36LjF",
  "key31": "3fy1gS6sEMvzUUu2SiRTK635hnAskC2eiRqGnfFwy8AbXUU31tNvXjz5RQdKHf4UfPPxv338PXuyX92oa4s2XpAf",
  "key32": "4brQRPJKeHPE656JSjv2K9C61bch1UmhR7qSfvfXdhKZbph2pN4TPmtJ6E3VgSG44gxjsFgvXoLuRHY6D6Sg58kH",
  "key33": "2xsizaKqCJGiF43rWvpciYyJ2wqcDnSDPCV8JX61p1TwedzwFFaC22WJFtabQ5xzeJoNPjmXxHANqt5X2zidURxD",
  "key34": "59Go4cBDh44dGTwqJXntPMWP8oXpw5paghjrsCNLzbtHycUNbcQ6ZPiu98z7BY3NAY5wyjWawL1oPGxgzEkeN3nj",
  "key35": "4Z6gvWB7gPYPYk9C3dH9bxEAnp4V6NxgjRSad3wT8hhL22URnYZkvyhyiep81afpf8zxXp6mm6S6FrkyC943Xxjr",
  "key36": "5ysuAzsSwxYew4Vi4YbBKxVXkLvRrpChRN8RQLt8kXjnZez2NuyMxm4zuENdNHG7QDRFMNfeEUMrwMevfPpYUrzK",
  "key37": "64kQMKNwr91QrVyFTvK9S5qyKyiEktJ7UMEJ9EZaVR5hW7kukpu1jdN3B8FcjqaL2fhbyWfk3b9RGdGZc6TKFDUi",
  "key38": "fYNjmdqPS4csJtgAc4jxHCqphSHdWHLtXuRWTqfe9MfFFDWXHXMNZaPDNyX8JmGmFEZw4J58QPf1ZbX9FK6Codn",
  "key39": "34cti6nD2LDSSNd2W7Q54rXcHjywepVwwXu2bzjtniuaiQb6tr4fW2Ns6Cik8a5EfFB4ofjURNBsRNaBKtcMJYU9",
  "key40": "21vuXWCUC5hBHdy6GkABjTLb3qz7RkwDfZLNZFmPytYJjr2Z2XRqZD78Wx8LUoiV2Vvuq7LUatXiZQFJgmYbVBvQ",
  "key41": "3rwPAiEeNv1zTy3evk65kQnmYHCykQviqkxtg5VMJ5ZVbL4r5pEtcfSGTc92zntztXhFiUzVdvi8ireh2TJ1RghK",
  "key42": "3V8VQdtqERun9N6vAWDVGSpiyJYJuxYnCtZwDWapNfYGgLJhC7JNr8MEsB84Rt9rzcSZaer85NeHCZEL4oaUE2Ei",
  "key43": "4SDNh3NDxW5LB3dfpwCyUvTymfyuJvBHqCjvBGMfYh2YdJ7nNARrqqtx6jd456ft7kqSDQz5x8DzVMp8Mrz8JU8J",
  "key44": "2yxPEbVUtUoxacphkLPNBknWAv2Tv8wqSuNsNnmsdnAWLDz9dWK8APubgqN191d7TfTP7hn6iYzQoxo1HGxvWPQP",
  "key45": "5YC1HfoQDs1dNDB14CGVLqF5XoKQs7thkW6Uo9zE2WKGRTFs5BuuA3CT916setf814jFTgfguddT8LEN1gUuaztw",
  "key46": "3JL7nQexAr5vBxWfi92Y8xCx54bz7cHjWyfPySCjwmUZ6VdW4V6oB9fBTPGt6LcaeswP6LYvF7VDwcN6b7VfQbgD",
  "key47": "35QXGb1vHAfanrJCSu1BChLGFxJ3Hgv9Ln191cqDTAzrK5RqvAAngx8b5qksSmwaks9dxMoMKVxngDuyT1voK5Y"
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
