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
    "5UmAEqoLKmbXMqnn8fZBo1W18HP983vNrCyi6TFWHeQ143JYsso1AP9QogGt1eUXbm6av9U7RPLvBKJ1NCSvNrp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gLBYFDJAc5wk4ym8sfPnhM5guV4HmYaBoRPrenoEwWByjfwvdxsSeUq6BXLrMQgz6ASLx2qh9d1VbznDmB4Cv8X",
  "key1": "4VboagtZc4vJWM6BeLPMpfwk2pQFYoxnHiJDcZEMcNyds1Unc6tjQdtCLzXrSAzajmvVrnZYmn5536rWtUtr9GYa",
  "key2": "5WkzikiTNscYpYBSJUMWxGMCqc161SbunFu3KCLx7PBzqwo9WbUnsZJUUhGhiGXXPDWEbamvhSL2hzAmXx82aMLZ",
  "key3": "8qPXUk7Rf8RA9yjGSAKXnFNbKvnxiZWrW5jUkYXzzkE2XnvRPmE4shf43snYfNM6LEHUZ8YWzNbf2h3ci39mfvq",
  "key4": "2vePePzfBquhBWz2VK9LXYY5DL2dDDhhYPiiCnB33CpnDah5kMeg3TJ25EzGHVK1DQ5ZYiHq1sxdr6LihkCqbCac",
  "key5": "5nDfvqNbyaLMGLjEJ4NYyt5XVAGhUxugga4rWcZyvR3pxAYxBA7s33AeTcqWjGvqr8cyNcpk4ph18UNpWMMV6ydq",
  "key6": "4Z9XCsvb4YYdEWJ6C4S9nRdB3wqxTuKXfaVUTYMGderpGeSHf3jQZY1oH4hiXivBhdhs7TDk1E3RckAUe7cQ4zb6",
  "key7": "2WvGb4WRz58VwfaqtcwiAjJPtiX8mUAxazGjWRSu1z4YVp1wxnt95n9VPZG9BVNeAqbD2vUWgrZaMhBBAMGBf9qY",
  "key8": "5Y8MNdQFu1Ve1fsWXSmEU7jCHd2CUfs2AybBn1YmGYQvZsiRTo3nuEhUSJG87hwDv4jiBUXMmz7WozjEYQ23K1LX",
  "key9": "4NDhgeRV7AYeAwzJDYbSMGFC2cxP3hzCmhSdFmGxNJosJSAs92BYeFoKb7wUm1TTuuAZy5pygahUjiZaJs1hUprD",
  "key10": "5uFvVx7uYZ4hNg2NRaAaczws66PQSacpxRKL8Cf4bSS96PiycseS1TUHg54AUS5ZBBfhAXqTUwPRpcM94mp5135z",
  "key11": "4rZC2H7KestFHR1g6EDHNYpjoSAYaz75YZeAdTc6LwTi6cWdSKyFGzs69tEwuc1m3M8iDp9jfpsYHkwCFhGLfM5Y",
  "key12": "4L81DkQ6NUhMUCiv5kELZM93mXwLcciSWAmD258kUuoD5j1RvsMG1v4kXuiFbd4ihBv4AJ8UW1us2qqaVgJg1r1J",
  "key13": "5xf59BQaJRBXLQ4RZ46QsPTK4nxpCWFME4Y6bTn7zd2wwx8HR5WYmNMwv6YqwWPFAvPDphTkW2iza6zZCEeZvh74",
  "key14": "5iSxZmfV8HzFz6daKYQ4z92kRWc26rA2s2FxNLi7ZGqbdyzcf9e3e7a96kyNevnTHiC1RG8sY8sdbeGEDcko15ry",
  "key15": "2u93gGrCrF5of4n575s2rPiTGQYBnpLBf2Xcs8i62DMUCkFchpurhYqL4qS7qJHGWp2zHVT7eHgMYRdBzrYEDsU6",
  "key16": "55MeNDvUE32ysnE1KMFvpsAvDAvqgNMkmUcJMBs7wKrN1xNJNQSb8dthUJasvdCfJM4a6K7vi9KWvFKs78hHVmZH",
  "key17": "2ctTVad3ZrtyNX8P4hm4rHb1wgU9LfEeVLYt66rGRoAfb7hxHJuGWzLWLjfFReyK7Yi7ckPus5g8niFtkqX2wR7j",
  "key18": "dMPkQYp1UgG6T8cCG8HPbYqdKKpXeJktFiUEag98Ra8u8wXeJ6BK3WYN9aTttADWWCBTVzWvHgxonxMNCSkMD6s",
  "key19": "2RqDZRhV6cwHBnqroHMYS5ezQXXy8kyrnqSdEEmePygidhVo1fyHYYq4pTFJcQ7L177PJtXCEjzk3jxUGkxsosjC",
  "key20": "4y7LPD61GtqyDA6rxjQK5nXMLBQv2ZkpNdEurD24qZKiE5FkhFbsGnQEQ4dsciaa2tzhWUaExZFtRfBUjUchTa66",
  "key21": "3BQopS38GFv8dreQ2EdChKrUUgb89CZoV4v7fuiBCst7Rh1dMBjXjqGh2JguemuhKiZZxyDk2d31h6UXKZvMEmGK",
  "key22": "2Ro1hPkFkDv58gXW73L6mFcLQ39WzdHHXPc7nKM1c4v24BqDZG63moEj9YR1GhKyfafaRgYZjtoqF4DCqyTA1LeQ",
  "key23": "2FGwSPXnWNCCiYmbn8mFs7se2kdvaoZw45uMjhk6ocCS4YzL1wfv9fybw6BNj9y9JtoibzegJW83kv46DTuuNo2c",
  "key24": "3WZjf4guMinD4uccbhYZKC3rnPWkDY2tipsNzPCFVhQMoMmwAnRV3F21mpshUDVDqNBJNLKgJBodCvHFn8Su7cyY",
  "key25": "42shnbnAQ388TRNHRQfRNbNumSmKJWbZPSbvX6YAeQ5mjzbLjqRRSAs9m1EnudfDtew69WM5wTB52V2kN4LJZ4Ts",
  "key26": "5LjpR8fLsimh5CbVLFPaW7qvSZ1YY3G3Gv1N2UmNU23TarfEidhrr8xwkyUv4G13dzVHwzzgWsTfMNMEfnjC2RcH",
  "key27": "5CCnBE3pmzVKy4UTnB5cpHsbVhoKLWGtWhMupeETAtRvo4tG6amBge6rSi7YiQbuUFxKDnTnqCVEtg1nRzSsA2H4",
  "key28": "3qEHc6dC3yTXdn7z17JceaBct8BMw5mR8k6XPgE34BCLsiJh3Di8m6BrQUEJnwbcCvEC2XAnRT5NqvVmuWEThNpq",
  "key29": "3xspbQZ8D1jtdiFPRiNSBXpfwaLGMThLsV4f5MZF5uCzMGtK37Raw9WLiSBd4qVhrgVTa6t5HdLEXKUVzNgGzgav",
  "key30": "5Ucdee4JUcn4xqPFEgb9RyWsVtk9CYvd24Hkfa6BjeeT7Y2DuACjLgeaNzcsarK3PCLTVtiVA3GQoJiEErdGnwAC",
  "key31": "4RRcybDVoSBmqBqh1UZPY5Ex7oFDysDySSy6BrBoKZDeWSZeKsQxw1zdH8YD1GDWeVpKoKN4Vt5iuyri7Tj7ujeM",
  "key32": "4SPAVmmR68RpdkQvEvCcbuJw58cFtbZ1s578hwgS6AaygeKKRc8fy2SEJ2boceVwQJiCyEQ2YRNUqeFmQQ5Sd3rr",
  "key33": "2LbFFe8DJa177PQdAyB9MVUi8rY3bpdsg35tiA74J14qQ84qm6fC1nVzeGMnN3EA1wxAYVnh8fZGx6HhraZu2ek",
  "key34": "3v9MzdAHKfb4D5L6qA9zMeEDTQzTS6DHckfpWnwRYXtnXbNzmF8cAv8cUPku7VUym78Nehzsi2GNWaW9bGLrp5Kt",
  "key35": "3AqyUVehoD19a3H6xvkxY7HmAE2qJgggg23DS2ttw3z5fvACaR6xRwdLBJsvEJHQRpTc3xq4H4xcTCN9o9WzCk5m",
  "key36": "2d8LQ5CEC9aTmEjxbWvbfdzCZerxmkCr6GbLbUCzUUCUAxTPZkMDNcUXfChy8W7PtYuH7ZrFk8r8ExGufMVTSshu",
  "key37": "2RkxZKA81Ch2oCYUQbcDfLBNy93kVVBtFAzjruTPREe3yv2LVk63Gmba9MKTsBF7MUUHabvcv71D4mWisLrbYpSb",
  "key38": "4nr3WC3iemNV1thvFjoQXHHKMhBfJchJR5z3rtjFki6g8GS9MrPgrS8ieSV7j4XX12TAW4qTjr31jpLWcgaTwdNW",
  "key39": "4dXAVUUDa4NnFjmu3pe6MqzfpvEvhUh5LYkj7yPsoDj9TZjAgnVmYpLbNee7PmoqMsgZUAX3G6vxM7WZ4eSJ4n34",
  "key40": "71vJJSew9Pmz11ACj1uvoHmT3ntxAPnQhc8k9b94R1eb9tmK3nL9VdEDNdZ3UoapySfraRb7qfCV3xnzDKszPyr",
  "key41": "2YMANj9uiKknPbq6iM4cqTqLVvJyYhmwyLx24nf3pufpHsFTtvJKMBVQrWCJVwcP6B2EfaL5UzyFshJth4pv3iXq",
  "key42": "4tca3qHaMJb1CH1mxnSJDCuvS7me4HMkbv65wG8vkg9bG9kj6tkCf5xJYXad1qHZj2v1u3LEaY1DnWZQZAJvuzCJ",
  "key43": "3WZzLRjauZADkSTyDTFVYevBMnXroMncDwMGfbpb7krf8Ys6ZnrrBoGVp3wHHJpNBLqromr9bfc383pXnhC8zcDT",
  "key44": "2YFxgjrqwKLnxzsU5upHUBjWZhbsUJEryGhPbNYzA9A7vofZxiRPg9ZAEwohkJK8nb5d9uGvhd27oTyVJQSpdjMN",
  "key45": "WjZDz3uopwFjvFrojFeAVwkd7gkmgaf5yWRSkCdJPyFH57VaKckygQV2FFBRdGEDE4CexCWqNFFGoBE6ptzA5Sv",
  "key46": "43t3M5CsAiR2BfN42mF3oY9VFosGZjFKa1zNZrAf1Kt83xXggUwjw8qiFqjyAfPDNbhEjztEdbEvuJ4rfb82JCvS"
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
