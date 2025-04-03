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
    "2rXWJ6Cspyow18q9LuisHG13o1aX5GyJR7FSstSnnk3ADNRJXKuyzG6bLEgFeangjWrYedNiK2NodF3RtNiTuiW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bm9xVGJNPwKeHptR3kcZRZek7kHZ5WsoFvibAdjEgjutQeMEwA3hFrpqiRZmvpBH5u1J2ebq3G5GqbVojaBCw1",
  "key1": "Pnc3iWfULWpgHjsyWDF2eF6s66hHT1JtaB39cDrpMruhrf5aG9RKVFXby9mVoJCKBLdmWP7xFLpV9MGLWAtxrqy",
  "key2": "3eQxzFmsQUy8VcCFvwSpwqGMvtYJD9vsToAjfKndohCC4cuuqw7FAnEr2vGRxGq7tRHRsLa3nWDPDtrMTwW7qvXn",
  "key3": "3Wsiw25CkYJTUMYejNz3PSqKkFzSEANfBPbRDiR4TXm3HMVWizhM3pwDL71rwGYBdtx6uxQGwWTPxUdtJu5RXjH3",
  "key4": "4uxRYoRj6iZ5Lu9mwgdyyvz46ptJ67dQVibCdWm8qNaDV3EuKZHcviGNXctMvFTVKGdF8om1sx2R5qtxE5iFP9C5",
  "key5": "3s2BvXaAz3KB1HdjQBrBYgeXod67SFw44iyYmUAn8hxmVHPDwXHEwY1gb95uzjwtLQZNkBpSzoE3utSUdLd8PDM8",
  "key6": "3Wvfuhp9R1NCfReheFopZsKzQS69AqFasiJLfzwNsjFckDCNwy6b7PCH7WnrXVAqQqXRGEiBruVta3moJ4rBsgEA",
  "key7": "3uPpf5fLspQXsyGakCzhedoHMdnUYpgHaToPJtWnFGiPt3MsYhZwiVyBWxG6kFbzdiJaqxLszk4vu4GKCMoUnUDf",
  "key8": "3w6wL31MwvFm71HwJdcrp6ikRHaJXXbauLfuHfPHo56z27MdqkRhpc1HSjBwN3a5mRkZEAQmLFFUCnMC32Wkj383",
  "key9": "2nqt1LTsJaMh79qVwPXWLiiyuVsfKBsZs61eApVtbeCA3oV3mkiCJf4zSrBmRotHNZ8bpyw5bu74e3pLTDijv6jr",
  "key10": "3dKfXHmNAMcwsRdCMTvYgshfVKc1fLRL5USqoDAJPjkdD2s7t5vCpURotYjx3t5NDpL8GoYfP8NhnGya3A94ZGLQ",
  "key11": "4rSr6TVyenF4ChH6b5cWfw72VWf8F8RxMfA1MZeEkwuYPLUVpCFihSHGJc7qTV9fs7hJP6iKfe6fPLkzESJSKD2r",
  "key12": "3kfLoMStxb8N5Tmh2WehRdpPfoa1SL3aR1VAtji6RvEdUG4QivWLGqxPnFThomzZF3UKSmejyM22eUuQfdMtrP3D",
  "key13": "25aET4Uc1uNMNYs69Lb8L973vzaHQxeLwQHKtxSLRu3L9ixgssJRdu9qnW55qWbUCXV1Pg87ihA2z82EfJVxycs5",
  "key14": "2YXTFEHD45uX4aCrTnBPKwcVXZ5Ha7xXdkCgTQWnakv8gwu1hUnZxsocrhgWDf89vn6dmUyJf5dSnsoZWVY91nQh",
  "key15": "2RJGCpvCqZGfyN7S2i5kWKwPd7qDvvWnGodzPMFWdXcvBTdevfEsqtU2vUKdeG7BqeCsxatXM7azAVuGmKUtLfW7",
  "key16": "3RPhzVr3fZpYU1XtfiXYbaUuipb9imBJkpvam6es7591Rrde21xGpFh6LSTFSaWYqkJSgnrXQCvt92rA6ftJzoaf",
  "key17": "3Cb4RkvMpvpZ9Zgxi81ZSF4xTuw4c7PP7CUbDBDjE1Aq8MPBMECMN9PfSM2HgXxxWYQpJBoEe2qLrgtpxX1jBrch",
  "key18": "4dcycTjd1JW7Fx6wm3Uc7THEKE47vEULWKTJqZU4csBk4Bxxxj7nAoyph1BkLAnvmHudm8ZJncRMNWg7BBsdXjpD",
  "key19": "63xfz9ZBDWM58WeKVCb4UYBuhYan2LpszQ4EyTNssrKWsZc3nPcV9nDLd42NZXdHsNrrDj2X5kCc8qtDNgAr8PQ",
  "key20": "5DCh8mUYCnc5BvFjhfsuFW6M11pLqnjbcoyyLUcJWfpmBVp9sjGtDNnvgRDkRuSEp31RKPqPTAfCbPoauSpzgrNB",
  "key21": "2TuBxbDWC2MemqN56NZUU4736NtWiNbCyVHLQex2Sawz4XEk651Ak397Y6rQgeBToWv86iBSrBst71MbyjQQmH6E",
  "key22": "35ktApJEVkc3VW67i4wdAjk6v47m8hL9YtsxDf1JyJnL3vigvL4pyQC1uCLrxu6VsNP65PncjS5gb9CvLfS6TqRd",
  "key23": "4n6qX81KuN7gKAd6qrVNvBuoYe82tTkddkFETzsCY8zhFr8nmDqoBhkaXssxok276FBGd1ZKcgminzCozkBaPrhh",
  "key24": "4KJzEAZgUcs8YTJwKFXiaWTdEKeEqVK64Ubx11CEmk676MbTRfdpu4nzXPsFnReK2Rikpm1AP7xJ8otq8L97EwkD",
  "key25": "4NVniLL224z9bKrRxhosNfq6qNTu4Kb6iRLDJehsMvS9AeHfPjSVJNDktyTfC3ZmTgbN2re2U8S2qYzX8n3w6iy5",
  "key26": "3kusBAUKhtESqnScBH2Jm6RP5aoTdwwPEbmqeERHKAq4vDZ2t7oJTZ5FjmjXkNLgZ5sN8fFfEhA179sqpTiwiUCV",
  "key27": "tpXDLaxhViT8QS5SASPtgjfUd4ZpSkBefgd1my8t8NfqViZYaEy1BrqSSj6y1jwvPpPQCEMBummNjAe7sMjEpHi",
  "key28": "3euuzrQwZAQQpDCmFJ5PerVuov9ZMTdbwrYdR2pxuw9V8RLynGX6fWwHkpYoGVp4vbFZrDofFbfdW9mfiqc6PyYx",
  "key29": "4ZdkBvESo738Hgb2a9mkWuE6WPJToLG7nNR2k6MeTDWKRfggJsTexrBW4dspQDLnXbJ3MbEPFQe4jKup2MUq9zoZ",
  "key30": "3ZFvRq9nXEzrMvdQ4WBpPVrYNswCgXiRegkwYMidj7Xqjn3wb2fxfRz28X5d2tC3C5mqRcCPXajh8oe7uawdHL9p",
  "key31": "g9E233jVYRy37YRQj4p8EfSr1wQVyN5t67uKbe6EpGtQCYfNoFt8rvWdBCivCeL3bZryzrG7cvSsUMX9Uggtcm4",
  "key32": "4KohN6UtvJTyFQEEp6yK3bUkeqg5YAJhNK21KpJwWLZTugxLrYXkDtkx3aYapLCW2Rvx96yqG1Qx8QqhcNeT49zk",
  "key33": "5goJYZFto5epL6nzXgLdtzXE7r1pP4RDiAAjfwNxXcyu9rXSYYAKzQhy6YEfyEFLonBDRVs2EPPSfKZgw1DTQeug",
  "key34": "3jzLyFXb1tKJeRPXUpJRqy1vPDfUiHt8xi3upAH94CfyA1nbZMREXwUcRfdYCZ1ef1pE67mYLjLYr6EKYHo9o4tY",
  "key35": "7Jz3y3ca7kmMjvGfPu9bnAexFuxpCUWphvUxJAuepLZSK7jasLCLgnWJjkTCg411QyBhse6PcV11Q9eRz1bAZ1i",
  "key36": "4QQ6ojhDZtm7sLQG9MsL3sQdksoLUx9PMjt5E4hmvQPfyx7gG3tQ5dQYq1caza5HktZjQkkWdkyM18pqZ8s1fnZ5",
  "key37": "2PiCAASPZTVRvsEUjrQzzKL5ppX8k4UN4xZ9tf4iTDmnWMGvj6E94qEUgzwKHTD6EAVbAMHDQ8amW8c3micMrjtk"
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
