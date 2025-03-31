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
    "59x8ownCB86UWzPgnsZwyeMcMzJAqgpSRVVYqvyEVLMSA5bVyeDLpVmsjShzwNKfkTss5ZSYN6cDy7EGv5JtLuBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGm7iZKetzzjane2mKb54fKPjjMrrMyP12gcnRZ5hXztNgd65NVRVwx7MxamxkHFVx7xNY1BPve5nZwovfgH41U",
  "key1": "43Y9GqDKJaCB9pduyR2Ln8NRYHsG2B3dkP1PP4qoG7qwDHzGZiP51R9W49QkfJ5v4pTcJBw88P2B2HsUb8yopvWf",
  "key2": "23HaXD6RTCRuxP3p7fL4BovAq4tpwEU33MdjjhdxcMNaokgphVxU6SnqE4v3UVQumZHdn4bE1c4VSGbQYJ8J5LcV",
  "key3": "5qb44aKkUmBPYqPv2m9F8LYGB9hR58tfVbQwqkocdnqEFSogNKm4jNde2hb96wevdu6XEC6N5SBWSz6bn9z54guq",
  "key4": "5dNqWm7wsCw75jzWB6TYDmJVL49tfsb7jWZQKUvqEUj1Hk9SFYi3NPngBoGu755c7pd1ZQQDpp5kFzZFKfobg7iJ",
  "key5": "455rNrViFQDFkebJNrjrpXdtUSmTKpRgsJCUPVyds6ALhQYXijtFfcv1kye6E6VnSVcRV4T687mBE9LxqsWfubFS",
  "key6": "2iamwpxb9ipdM2rvoCMsntnz6Q8NszzHDyGqnPjfLabsaSM64A5P1jhJ94b17VUPyG2aGFthEeih4RLLZtW1N7vR",
  "key7": "3yaQGXPt7v8S2QxmNg6TBTraUezYcvGix3khydBsmxTvC1Hapfb77367WdCYiUoucoJdmDLrCYfaTDAHBUVedBSK",
  "key8": "3r61NErV4qQZwCC4ZsomjvYtccuJsaNe7PmAhYTnZzPp9AKsx8ivmA43wk6tY4XrPfVCHzPmwRAinc1oodtU85R8",
  "key9": "3f9mmJTZAbm5aqnToa6fjZDKEmHgRw9WBPx3tqnW3ueiPXKqxunvPgss9jPYV8pgaJuQZ28NmC4jvXTQ8z7bXk8R",
  "key10": "5yfFy34GcVAP53gZWcZiCXfHXvBUiv42BTbVj6wf7eyjFcPeMPeAkpfia8H4vYAzN2yQCWjY6irieo4Bg8Yt4VyV",
  "key11": "4EEBY2RFUGQeJRPHNfU3VZ2yE2Cc9CdZpbMxhcyTnSs2NCh9dsGfDayhs4zi1mRKBVHCPTp3RUj6igmnYJ2u1LGQ",
  "key12": "5jqMUGQPwns6xgfUaWiV1SdziKMZxsdAZUWEt7mQUUB9gYuamAKVDhMRp5P4Ef5uVUTrgcTByMF9dAMQaAfm4fov",
  "key13": "LeiBx5jvRDSJAGtLa4H6EznDNFpxCy4Qi5DWVtstKcyh7Sqm5eQ4UM4nb3zqDDuwEW9kdEwiEiFeck4XHdk7v6R",
  "key14": "4u8ZZr8tT3gSiQLVF7mLntKNj6DS95Wk5HJm3BXmoEZDrY6JPyHPUFoyupWRiwpnraEDNzbruAqUqFB285mCCHQ3",
  "key15": "pY3cws3WZFQ9Bt5PDJnD7wRddg1xfHZq2WxqTHw67czmQeJsmM5RaVJedT4KSYgc3GQpbRA9f4SnXpcXPcht77Q",
  "key16": "3a3RoM5LoWKmvxBifyZAvyGYiw4xq3oDG19qjFkurWvpLHBsVsH41snp8vmPvf2bBm9uAzw1SUjpMDY483KRTW3a",
  "key17": "2g5sxN6Jn6jgrJrWJGKADwXUCR3bbW4ZEPnaSbYLKcjQF1p58Bz6njkpt1mqGHdigAednFTnpmQo4vWq5MJuf46D",
  "key18": "i3Chu96Fsh2TNyP5QWpEufAszNSMEa87sCu55T5nKP2B7ShUTYzX1pqmzWd1pRtGt7a15NmVb6ammjqjsKu8Fey",
  "key19": "4nkxTFvnNt6gTcnDw1Upv8JpFvGWZxuEekjmzDTHybmvwgmJ9t14mtNC7ZxA1oe5AZiPbDnF47ssPp5srDATFfUy",
  "key20": "25WC6MZLibsJPWZTzKqPUZ3yfi6BVFE4ZNDbfGEGMwbA3tfJQg37fhgtySipegX2ZypT9kvpUknJ7zcMyJmLwS7p",
  "key21": "enuRZuYnfS4cBfpXZkMByzfPYnG79FiLSqVhiXRYr2oMQyfitBuEBhaddY5wzNPwvLKJQVpTSp7W7LEwdg1EHfY",
  "key22": "4sBLkJgrvhEPrstXDjJnY7WaB6oKRAXi73Sh1FbrWfznyCrXnGxbUNb319LqAWvQksoTNYNziu5raMrJRpQtTY2g",
  "key23": "5BDo22JTgw38pvTRrPemC9TRwdx3MkKYuAeq1ogioguX2vLDE5uGjN8BxjRtJftAHxxuxdQFoehhV6PjUAAPHCyd",
  "key24": "YrUYghkuFFSwZ7N2iXhb5GcmNz2gGGMw4cU2DFTXe6SJAsj6dP6kc3S2kMRhUawUmj4WZEuymmDYZCsrcuFEcZq",
  "key25": "49wfAZMrNp3Lf9pLb41UTfRxtSe5yYLXjCPY8RM3gQgf1TxeP43NFJHcZ2wgxQdHV35foWkwz8r5gdR5fcmUrKGd",
  "key26": "3bhMVsx6JPftwyJPqFXDCo84pJBDm9wNnEcrJTxDcZAB85coCw8U8WeTd3K72jkXLRykfVSxE6sqjLAHv3m8DgNp",
  "key27": "4ZsXDxCZrCTjNKpnhFrjawGBWtk7d4JwWGHBhqDfszWm9xJmc55W7aRGvCr3x8usknNy2n3dEKeCf4YNWaJp5S2X",
  "key28": "655eVtyS15Ez2QARMrde9N1sAeY4vgNRy5kDw56BC3zrbKr1xeCABjwVXgJsnprDb9i9879kniQh3dmPV1oFobk8",
  "key29": "2waEBXFG85PxhsZFNf1FHkDTRGwLWKbimGoGA2ajztAAYo4mqTz93YvMPzzK8ykhXKSZ9GzWVSADBD8i2Z14suK2",
  "key30": "2ZUdnMbUjP45ajhkLjDcJHCeH5TxEiQa2w9pWywBQsmmRpG753vvctYBPXjRvPRHjqAfXNovAbFdrBrXYcui7E65",
  "key31": "5qpub42p5QhfYgkkyFvQAr6skqS4WhWy2RJQi6D52LyvSkECLcGfBVyhL6JUqeq8U4P13GAjoyZGBVMCS8x7j2zc",
  "key32": "58GQdebicnxB2McJc3Uyf1sMWNk5y9e1J8P843zfMC4Hsr5DKV5a2smthAfsR3vfFDk2SNvEKJfZgKtcJRXd3VSn",
  "key33": "5LfJtLU2q7rDFJGb8kRASZ7wp2kLAT59mrn9Tt1XN7qg9kEGEiminNRBKJpra9RKuSC4HDqHUZfEzqPjxwvVZ7Z6",
  "key34": "4BNpASxtUAkF2CYQ3j9aKChixASu8u8YKmcr6AGbgJBzKkf2jWkQaCN2KQaorHvgYy45dVX8fjZEyRwdtLnarnkH",
  "key35": "2hmdqxScohgwHDvw6dzCru4oBf8UEgA4z6LmdKHGRJ9pKfmc4kXaL3e8ZTgxxCHnBJbycEr3jKfv1Sb6jtYHb91a",
  "key36": "2cXuz185ZjseXF8Vp7A4Km2q38m8vd9ccoMwFtVHFn9fCMq3KCRCYRKKrVKnwHFapH82u2YR24b5pPiQDbbCjb3k",
  "key37": "2FkHq2pumq8TRdMCtFm2rLo8okcw3MCfEb4htoAWVfqE77xMwfYZt4Uov5TpE3A398ChZ9nyjshJ1JyR5HpSi7dd",
  "key38": "5zw6QUug6icZg2ZHvCQ44WcwY6Lvt2tPhUCrrGa9YFrqMwAJ8EEjDyGerp1hGkK5PxmH7mb75DEaCwxBvz22JNPc",
  "key39": "2HLoiRUve7oHy8HHoTwsXjg9iuZbrtFKJR6naoBfboaGL1wYHxfHQDB781rcyvZjGMuTUkpfb1tUFSdyDFkJC4aN",
  "key40": "2ZBwJWKWk9SBUm9gE2ogKb1pajqPjoob2VnRS5jWgAHbtXMqreMiE5JRx4ZAHDT9rGq8DgZnNc9ugFnmgTTL6ps9",
  "key41": "2W6FJyPum68MsupcVP59WticBudYikwE1TKmekCsKsLxaJ8praK6k3bsdpCZBko6c4jLQxrtLfzvdhx7kw2HmMsM",
  "key42": "rf2ME6xfRM38sqxPE6RhvS77D3oAhjA7ERYF59UsTVfbMHwd4urD3icPaGzL4MDBmGBNuhpZfsaoELmG1DWwthE"
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
