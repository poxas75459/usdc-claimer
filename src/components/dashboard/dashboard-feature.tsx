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
    "gWu7U3XBaS6op1YAJyc2zXuo9bnoGGDLe33kraQR3e2Hu5kKfnDhapfGGHe52zviJUYmRA2dSWx2oXwGmJMe84w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4XP4KqBqPUFCYX6A2epdExkfLYrVHEahbGjPDBQNS2nkWzUobjHH4gbLsiETMV3gGytQSS7QntKyNVXsHjcjrs",
  "key1": "fnWbgKuLaH6E32cMGnewPGJ54ZwE6XzJHBBkkgNfo1MoUNxJPAbfoPveccR6ebx2TW2g2JKqy1Q8hgrzAH9TQds",
  "key2": "2kQEsS4UAk2DTebALsTs9GpS9Zd8hJrpZc76RLp5aQf5YNojfU2KwuYfaeWxW4gLCxWTnQjTyY2jAcUZE6c7fjjV",
  "key3": "54DQQd8Me8CiDEoJvyL9WYSqxdYZGZzsh5d15tF9ToKZjdKrq1qKGqpxg24MdEPPjqyYKxyu5X2sCaa3tCbRUSUQ",
  "key4": "5FTxfG1YzfaU1RuSBK4PFJdanCBjY9UdQzWkNByqApXrsngXmD3EaNcsRWCH8aTnFoUY4mN5sVyiU1JfYq8sZww4",
  "key5": "2xZQNxQAEmckqK6MxoBzsRv7sExBcBinFm9f82YnDybNYD8DR4HbaMdM9CP9DJuytwg1A9gRTmoL4kFJEXFWSzzV",
  "key6": "3hJBsLLwBhRjrjQVwdGha1JSjNdiL9x4QVajnaT1y8ogemvGgxgxyUC6JpevPqh5xtQFrdvdhcAJQ6y5mvKMcxAD",
  "key7": "2phjm1EVZYXjNcRx1pxwbiZpjWQCWfJGfiVQW9TB38aFgCGCD6wFnKUJ7UTrri3hH2DQS6EjqwwMgnXTNaBnsLN8",
  "key8": "5QQcy2EWXioQ9tDSwKR5bMx8D9aG6jsMtcpkCdPMvY2V1jPwAUZeTk5K4QU5whjrv9nUMsecaCErNNuNbaRp56Jh",
  "key9": "BsdjjyG8MAJuxzwt3mhzCDEmSPGpBp1mZbS7rbUTvZpiAspe7emSrS8CQ1Ysk3QzAbYzJYaDjEXuxRKDdPeuer2",
  "key10": "2ZdfXt1AEYrXtDqTiBKom3U47rVNNuhyoUGYm8gZ2DFwDWy1GjmQJJW6PT4VVCe2z6jne6UWefz5XAApXyBL9rnx",
  "key11": "5fgvzwXP27u5ztzarvHNJXQkZuvZUxMrNb873GinwJyKK2nQa34AiXzVwbPPRMQCfsELqJVnK6paSH2EDzCsmWdd",
  "key12": "5j8jVLGbApnU3jnR2bLA6wUPMAeNuuPE7t9rHnbp86ih8D1Wb6wYwvUc3Yzghwr6LPmRBCgGZxtWtBkbQR3D39Yh",
  "key13": "4MEN5kcwxgrzZttswHDK9dBx5PZSr3ifhNUFXBhZFQ9Ce7MKwBCTaZPH4SscGgAT6MBpL1HeQj64Hx6EdQZAxz1i",
  "key14": "3ZwfpJjwavppMSSCTDme3LYRb2hyRTtvjPavUfoK8u6cE2NQGppnx1fp1hpBuB9ZTXjpewqeLFo9CA5JGcphr22B",
  "key15": "FVo3wvhhHWUEBPvDomdNTNas2ZBXJd2PaSqGpZwgA3YQcBBJvjYCvutgrNmDeDS5MLsSuHemnfLrxt7sVq7KRHZ",
  "key16": "2bTZbq5bkywjyXvQuzuZu9wovTYs3XY1pWRNHEAg5VkKbyaVqJHo9su51fM27bEE2NGmNaLgZBLkZofr82rSb6xM",
  "key17": "2VJXHDpvmmmaeLtz7sCup96BhULUBZ487qj7W57ryMt6mAZ43ppM3TN9Y4toqLzWdk9wMamdmpVPJhYQmUacNo2S",
  "key18": "2yk4gFJChcH7NSkiG2XKUZwt6jRKorwRhx3EW9zky8xwaRTL7ruL48CE3yCac5cJYSwpnfLyEm1jRjo169HoWzet",
  "key19": "BcbJuuqp8j2HHDCVqLjwTMir85THKMrQqjvAk9gead23fpVbZGtLggFNA6mcQUrtKacZdV9RNBDxwb6Fh5i5Mz5",
  "key20": "4qmJrSseH5vqbDdnk55x9EhGN4PByNjacGREDCk5NJFnokPtFdeQmQX5nqF4U6HCzon82uV569cuufZ7nzcTR4vm",
  "key21": "599UDTSzRCyrZ9KhYpcUdb7vwFnDgAUnfzckJRSPsSwt18GxhudA33uNPxxJwcv3BpVxnLktr77x6MhpGWCv33Hv",
  "key22": "5JEbUoXHSvodtfbJCyX9Fbv4tpxqnc7oXiJSHEhdW6jcobZvS3kMuRbCqidJoPobaqLYMz9v8yFK7Zojv32oW2Qu",
  "key23": "22VVHWoJp8X25g2GyeQti4kYn2rJxNcCYukCD7e7krpH8SXPLbK8y8a7zy1qYEGC9S63d5x7nfszm3hkidGPs3d1",
  "key24": "2uwDxAuCdkUx2FuXBNjo9zgx65QQrvvDaegG5fVXoRakNVWGVF3R2iSX2MSARfH7KwXAAobc4v2BUdbmZbggHZeF",
  "key25": "5JyH8DWE8DEKe1qWkLhbHcgbybXUxm3YwbfoNEoWG11PvUdJfwZJX3nJ95rmvAiACpiSPyXLfQwTcmk7bQTJWQ4e",
  "key26": "oAg8poAN1QZwz9sN9K5RMNVvdUyxacVdetbC97s8cJSD16VLJ131cQRn956cUTV4SUSohUyDdEx99j4tzwB76nf",
  "key27": "2CeQq7Yr3uusg3EP9ZVUW7SnjMsJnBopEbQv2mSk2UzNFsMhGx1kHC7Nkwox4FvABAkgmURp8vRuTEZxTMVVzWxT",
  "key28": "326Zp4CGUvr6sHVf1tRouTqgveBUWSgQ5Fb2MjiikEPcFZRAud6GSJHTYs84MZ4kSP1DYGgW9C55w9yi1gj9QuP3",
  "key29": "5W1kVxmjZRwNRUrA7uddnUXwgfLQDK4tVusMDDgE6fLHr4WpLWRaXLmiK6XAtH7Eu3oX6DizmD3giv8qd2JrHjRc",
  "key30": "2wMw2Lu8QXmdqGcRt2Q8uwEV9fvQe28Ldbfa1swrBUU4dYmXRWmqeqNtfvdRmTrR3Uh4LJ8T4WrgytWzffHBR7UN",
  "key31": "5d8FjaQ7NLRahkZ3LCDJPn6fVkpPKatUnsjZJKnVPwcgjREJy6NeHCv34R41o1wc1CMj5fFgXEJt4CdHDPJmwU8R",
  "key32": "Zi97EgAM4jdsgwtz19ZTD3G9sMYLpqsCsV5R8FH2dYVfBJG8ZCPocoaMfEEkq3NYnxEemKXTfWTsv2WFfxb1xCU",
  "key33": "3427k4ZPvssjqzt1uHphFRZTVrSUqCz4pEWenwkkh6ifxnQSmjQ74jg43aaWPap6Y14XQQaMg9pseH2tUVKxpb1A",
  "key34": "4NRdKN3Vz8KLMXVHvmuRm5jsBb8sAoduXh3tD9Tutkf7g8ZD9oPFXRVzVeVjccq712MWcbyWrqHjBVMztFqJwK7r",
  "key35": "2LuyHqs94ejzzUtYzQn7zpnYS4e98M3FTij58RsXTPPs814rrBCvafTgMAgazNeWTr76VECGC7r36mCZUmzAowBn",
  "key36": "2AqP5pjuM5DtZkKSf2heQLHbEeck3AyetoxPNwTQz25QnnoPnh618kZ2yxvQz1hZ3KfhMWcbsA51oEghZdj2Ltti",
  "key37": "3YvSUtU38ET3qLSJkFaxAvfWav7wcLRYc3pQqLzaKm5jZqpyyUrfHy5AumJKnmJSUW34m7EPRck7WP5aw7Dwdr84",
  "key38": "5o3g6WRU7wE5s9cVwn5oz6CVARm2Qjz5tAX8wWGXaTyLLwK5cqEbUucbg66oNSCg5N9C9LLDs8B3PKT4YkteC87a",
  "key39": "JY6tMb9Emto4L6futqsCgw2rCNPrDE5FJyzudrdLK7GrVyuTGnPbDopE9nHzN19viiHdfap7zYwKdraqpFr1SoT",
  "key40": "V52hGqYTFpe6s1RTriRDpHbkKCTunTx7LXMLE5xnhptWfWwG8Y31rSGhHyZaFf1Zxa76m9omNTrULjeHwWCgTYT",
  "key41": "2XGAFD3jJEcczrG5fz6ZFbR7LBv9toZ7K1HRSsrdLTxwfURAUVNzfhRTAWfFhz6ryPRaGbjDivjcR9ivxFHeL8VT",
  "key42": "4p46vPnPnNieuUs7rRLAEm7nQpnD1csGGxxDMme2dtp4n4UvQqK4D9LhQ4Qa2VKTu73cgiJcVeB5Tp8r4reYXVPk",
  "key43": "2CBGF1yprEY4HS5H66pPJGTctefH7xD9H6Bz7KBrWYDEstFwg67BWtQt5ua4E1PL4NUtCPz1YSiRzTxFdyR34orx",
  "key44": "51c5UcgYMeQoNNSvMe1iLoBB6Eii8FerYEkn5DWQxE4PjjC56Q3ZKYNzqEBu3FdsLyXvbZ8BQt7rHMazBvUEjq2q",
  "key45": "3rtPHrCaNiLBjUvGnbWaEqKZ113MH89YtHjMKTYxBXD6vVK6NUEQ4UEVyiiCfGryB6Vy1CMRDZUDKp5JeitV7Wz5",
  "key46": "41DzgqHiwRAEh8t2chLd8EnRY42JyMnDg7Ji5wd5hy4s85cKgBRTxb4uDXyvKTg8wrTArD9JHuCwLfACx3Gd2JcK",
  "key47": "3EJK9T8rtoJ6UKEsYLCwd3j1YB1UGsTMTzxmJgf7Ks57W5TGZzaz6CQY3bia5bveJeuy7LL1SiVa41UqMc5u2FpQ",
  "key48": "46mr2sv53FjusK6tMwDMEFxkBZX1FThwpagBWHARVuF8ovqDs3iYyvsN8eKR6QETCmJ8U9cNzfrMoKP9xt77kajh",
  "key49": "3zw85FjCnx8tSZKD9eLHMcasHpuvE33DVyNfndHTWrbyUrzZbsyN2dUiUpDBxY4mBgiFXDZyMSge76WjxiBS9Ahk"
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
