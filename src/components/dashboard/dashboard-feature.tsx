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
    "3vaLWrnKJh8hLmWEYJJwBSpCjMsCP17D2utEzUDvsYkHrdQD6uA7MkrNqKjjYPpUFeMNvU9gv8w9CmNGCBwQpNDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5biuevJNvWvhZsQ3ReggCghm37uogS8tfBPuc8hMEwWdAMC6yQSsys6ANfyq17Q7P19v76NgN7TFwpqv5oSsjxd9",
  "key1": "3yEg5Je3AZHymF3tubPFk5pu2ERNVmcnir9bHGTS5e42em5JoD7NmMiWX1jfRsJbVGCUxGSCqbYV38tu1ffC3roB",
  "key2": "5rD18e8Q8y4etctm7CDq4VB6HfSCv75CuJLZCBnxttXQZiK81w9Uh2ghn9CB31emarCiCmrytPv1vvsegoJsdNMt",
  "key3": "61iy8z2cSgJFVommd53Zp5Pzb1cMnmy6eD66YBBqxzrSk5uNsRH9RCwvNkjGSEzvALhJR2MVduXPBLaDN5P3jarG",
  "key4": "5RhjwGTTDasdGoY6vKWyiv78oYxJQ92EXK26CNHazpzSjq1osqc9YG83z21pFVG5NS4E8siVoJGHQVEeR6pYNxhv",
  "key5": "5TKdDztde1CCfjsABtqQ55Q4uzDm7T2hdRBiCq3dN7VE2rN6TNg1Zux6WP1N6wVcX6CbCbiHjVJD31WdBXy8ua4f",
  "key6": "5Uz7xsTooBg7LiWpwmVHWz8pDs4V21XDH75fiPN5REtut4kZnZfrYa2HwikRgSdddYBeJpmBuzkd8DkN9Bk2wZo7",
  "key7": "26Ek6hWHQoEL7atekisuFGEypDBM6Hr9YkZniyMHYfftNXFjxEz1HC7LyvyGPrENNChPJnzhEuhfcsxwAYerEuQ7",
  "key8": "7KMPai3dggQddSYrpjBn7duus6AWeNfDgg2WnV76q5NPBQytXv4eBVfbzR749d2Lc5f9cQPb2DaahPJebzYA3VN",
  "key9": "4myhX1bkEnUd2mHCEpw6huUxM5mysEsJHQUCrGZ2stwPFBHT6yXJgRRMeQ3w8VoRzFCnknNYk3bT8QFZLH7qncG6",
  "key10": "2h95NW9puuocskey8AcSvnPUzBk9nu1ucxSAcwrziyUsEZLcpFGTSaFtZbGM6jgXEHDta8trwTTHhua5k8qrQuat",
  "key11": "5J3C1p7MnUNWNT1v5NAcyskcGMjWVYCgsmZ5k9VnX2tG7CgrmWp3RRaqgYkAyuBYFBph34Vr1R6gFShP4EbCChp6",
  "key12": "22sRYHogMyQ8SxeXBFKtegzkhUNV5qFUrt7oGrnYxWbbHyPai8NJTMj3sjaStY6DcMpyDeWaaE1275iNEWAK5YHu",
  "key13": "58Q8kpQ9wRfV5UHiVTBR6JmmbRfC8H7JimJDEkRfbMzUxVfrdMx2P6xKcpuq2TkFoQnH8GbHGmQuXQ83yNVaEN1K",
  "key14": "5qCSmwk3P53QuE9wQn5MDRheFZF9JxZHtP6gEMVJJHxq8o54bZN4Tu4TgpxzHydTY9sqDNSSERP79iPsehyCbaZY",
  "key15": "2skJdNa31VRf9ibFfYrMNE6bvjyA5PSLoaBmswFev7gK3uTajkkVyG2UqkYmWfNHRPaDjpFnAsjAnor6Zcq4aTmA",
  "key16": "5b9vGZfBWPxzbnbWkBcaiMBAbxnqHeU38sHm7WRijLqZiqtvp47Cvnw8jCMdR78ZJ9osd9yrYyx514rfUMBeDAJG",
  "key17": "35n3SMsM8AXcTiMeSxJHdVikBexb4VQNtNPBL1Hbh9z6sizLqeVRLf1UsbeV6qHRV4FssLJGCormAZt7BzUkWzM9",
  "key18": "3GrpRnR8U9rVAuBKY92qDwaahkQ7MoeyMQQck2CgCtqZennnsZLs3LFtoX3fcVtqbiNFa59n9kfaTcrd2zoNWset",
  "key19": "3kR9mRMQ55JT1vSS9gqWEX1uBQQdvLQvicACgPWrcTxWDm4dNXE6dD3hRQLprXxcVzxTAxrYaXymqjqTyKXdCDEW",
  "key20": "4TzPEHiMprtCohsfS4z93yDuapoFGY9iPfP3S8VRNUTyDkTaPz3xndhASgEAVEdAHoD8CyNhDrLRptu8iy22PPeV",
  "key21": "3u3WxWC8HfFohaeRTnTnEhqViaos9p2pdhpSoL2Wgu3FtoWzyWShFgeh4AQXwke8GVvciQrNCSV8CHPddUKzhy11",
  "key22": "3RyMBzJtMMbUTCmiswoD3U7kBoojVQ8iNGSuKNXfVapQLfXXw24mAhDFwNBSjKUAcJoASjvx1RZyG9mxXTepfmwZ",
  "key23": "3YPMe3h9KasV1TAaWGKcGk4G8RJM9dG9FHb6HNWWMpXdxPoZhCfKeSHqgNYWWysNYyLyMU26ndzv13K8MJsJAdqn",
  "key24": "ABCBjykYsseYAowmU2AdwDLtzuQC5nJAi4Zb4foPzfAwfz9ZdgW9mxXHKoD8UTN37CexidNcgc5m5UJKiLu81Wj",
  "key25": "4v5Reg3CyrNwBpQeHC8qGoQFGiu2ojwYkqrsBJHYcNu5eMtdHAdYzfJwf35UZpeznk12V8WTpVFQJ7jj4ZVqfRTV",
  "key26": "4WVWFaEV6Bz4ct52masrLcxVvjKw1ft5mG8CMXEF9mqVmr6EDCfYswURL6Q2wfhBp5e7S6rtqwt8vZgdCSSaD9PV",
  "key27": "2yf8dCevXvqCYjnEjU7jd6xupQgCHGHHoGUPVxTd3RhmEgDxfMQqFyc4tfzDcoczQ9rjx4QGK9Lwsmn1sGtbo6fD",
  "key28": "3nSjbsd3acG9Bkg9cpRDW16uPSKG1rGod6nU62bbhWLdQ5cEXvmA6v48FPdniV5uGX6dEYmD1vuEsNmbA1Z2Hk1X",
  "key29": "3dxGi7b6dEeDwQ6AErSLPzLio8UwyqYJNDycQi9xDoPf3Zi1x6FaLUYj382JyFrw1UfkshEkvAvG87UqirTha9XM",
  "key30": "4Nrp5mnEJDEVLPjZ9M1WwrCmxme6XCJjmC5UwzXwqXjVt7CAj9KyDBvQpx95xWosLeNVcSoqQ3zaMgXZFTwGgusU",
  "key31": "2xCGGjYH7XWVjeyWVh9igt7NSE9JewCdCCUFzmzFmEXG1cpw8oBSEaeud4z65Pf6B1YfHGMqmoZiYMj9KN42sZ3p",
  "key32": "XMFCLGarxpURRXxnHXxB7FcZgMa3vMC7X8hYpaotAXq1dtZfYYReFELQyof3FQ5grpeay8v3fJ42mL39x4sAo1z",
  "key33": "5bekQj3MXvNjxP2yqbY77q7TW7SggMXBDFmWUNDFAuZGGvtfaythUpN6SkxMFYi9KkF4A325zQuzddaMLkv2bR3j",
  "key34": "3XSYdKj5oy61gMPKRcHwS2sXibCLmPahDosN1Aw6PKa3fBjnhgwcdo6omxaALxDHwDdMB3pv5kJWZbbUGTeRjvrV",
  "key35": "36xmcYGpQ66mtBAsCLYRvwfCXszQu1rtFzGZS514Ygo4NYu42jXTwvZRkd237AobHwU87e8q3ryhnPcSRAnBquct",
  "key36": "3mi5hFg5o4tAmKRuGPZD1DFHFAn2whgebGe6c6cAYku63e6rGhwdF9ESAU38nWKcByysSbqQRNVXXtcvnfWbGS9J",
  "key37": "3uhWhPDfHNQt9i1aEwwAwTj5jDrLMs2fKbTyEBLD6Ho4pE6dHmpuwTAnC8JHXzWJcFSM9HfCpdAKRqvitKahLfoQ",
  "key38": "3DNdNFsGJdYA8mfLTTweVZWMbzJEJgyifqfgAVjnccnAuS7w4rQ2jQfFs3vk9ta9DTJ6XJM2qZj8g6zCFit9Wzgh",
  "key39": "4KjdBxnR9tQPo9KmbtxuHeKe3kKGmJFkCnurmBT1oPSZpQHHipRULrXtfxNYvRjsqNP9J3FtD7xLUJDMPVx2te5D",
  "key40": "48Gpync2BVU5t3eM3AUNXJ4D6yGGeLMyyEgD8ks8BQDjNQmtJQYRHdrg7ARduUVhqDjSNpL1Ca6w1KiCpBZmWVv6",
  "key41": "4UGGLJwdBqWyUwcspS9qQiosBL8DM741qaVtNJVQeGsdFxFC9DYyeQMo5WBLVLKsvBBgzmqJPXyMAuzMdnheZWAf",
  "key42": "3C4U3fQFp232Kk5zyxFAgReyidK2aGDGTAgYeZJae7XWBB17AQhRG7ShC4M1ZrvowT433jw4DzdNinCs76zKJKW",
  "key43": "3UnHumttG9UX9dpnVzDsYioyH5C8YcBAHzz3MkcnFTBVsZHiXCFV2CxWjVmyb6XEWzN4eqZZfJyjDqSfm3fHmEwf",
  "key44": "mDBzpeuf6Le2YnQyVJ9zEBbBQM9nuqm5wDLE9DviLBcBzvdEmhqmLmiAqY5nAQ8gNKRweTfZCqTaWEyw4yp5hzR",
  "key45": "49z6y7v9h4DKbf9SSq5Z1FujWAeaQpZEc5SVdgren5ZKCDKWPAcuhEjrttui7fkY84QXWJtL6iwjqELyiKvN7pHn",
  "key46": "23TrBtQ5X9K48HHSus9B7dDNr3s1rpBnkPAyiU9v2v4Uf5Q9HmxPVmxeFwvkD7v4W5LQ5C6XBWUJiyHoLwAoRhsq",
  "key47": "2bj2zMYGaM5YAqes3nTH5WeuU1HXmWvDd9f4q4XutzJrjUHoMikFrP49nJ61pXGGjTddKSfbSZsTyUeKzNDevckL"
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
