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
    "3zSm6aYTFyTwfCrcDPA8usP39h8uabmCUaxgxiocq9tyFqZ67qk6XjZ1Mi5RVynh7eQMoGgsxhB8jJM7sSagGfQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVotF4evd3c7UtjiCeNjXvAaxm8fP8FiWgZcKycTkUjKy5kPyQSXab2s18qF5U8WZfBjtZoT3GR488HQPKqWhZ6",
  "key1": "2WBdtEY59P7oWCniy32nZLXBrjAr9oCSairrYekcwZvr6QmfWVQdRop4rwECs2GPKfntAjR4PstSPmtz6TNCTJYB",
  "key2": "2FTAPMY64J7KLCmj9h95dfYFqm1XuE15G8khcmcosaUbSsA8tpdSUYLh26zZr6jDwUuFkVQgvGx1WJswHGJjJoSx",
  "key3": "WEjpM1GkpsU7LxVySQBJmDLjSbT8W8qqDcpibykw6CQX6W8CjS4tEyRQd9UXyzMdQwAyCo52JZYEZsq5tBWz2d7",
  "key4": "4nXFUGRJymJeahJHwVwSmbLP3TeaVZr6NEUaWc5YVwAbnT1hm25LNC1CAPmXVFFKRMJXvTTBx5fYSYAqE62zSs8w",
  "key5": "2yBf5ih4QiKmD7f3RVjq3bU2peLrcYRuna8uNJg9AQ8rw2NgkK4WNbkbmTjALNiGZ1H7pXghcXn3h72JKJ3qry34",
  "key6": "4grhnA4fRc3D8vSQpLujdq2CgQA5UXfwxykujaa8efcKpjzHvyXEj5Y6SWUFNq3yvQLhsUsAXxtGLaa31rrYgv4N",
  "key7": "hyYVZa8c9c9vo4V8QLuLXz47nL1w4tfCSsN7YgiHAxdk1FUiTLdGn8MbaA1d2FUBFiLovN49iCx1FCJiZbXkupy",
  "key8": "3Z5CCWnNdJhAcN8JmtY31yHRykEYshvQunEGBJNEpw7WVMmJ7e4WJGFfkFwTSwcqte2eNCN96A2DEtarvskEzZXY",
  "key9": "3vfZXwF3pvAJnac5HWdzXh8EQ2zRtq65gk5SgCcC2LfWnKKpmbfmL3PacwCGHXSmvBCdD8XJjZffkPaQm2JCRHVs",
  "key10": "5akwfLGboLGFrSEQsUUfeTCEUXSo1t4AH6kytoPi3SSdNiAp2D1NctVcNxwoLMaXu9orJKmJpAZG4sFxiifyZTht",
  "key11": "5eqPorNHPmYZsRAGgWmQfcAa6kENaVj7B3kJbkGd4MMSC2PSMfKBExoD6u7oUbKVMTFNEPF1GSh6ERGWPBHJGYcA",
  "key12": "WMxCnYXVzztAYvo49FpHqXUU41nwTPCcFTP6eWmSxBUPTfs6nmQQqwVZw9KK3kc8w7thr6VWWJcgcp1WFE8o7Mq",
  "key13": "4KXn2VqnqZaVwRXLDoj9Fv89rZHFLq6DD4dzBzGQS6QKt9kdrzksDHE428kXN5dkeGvJUtFWpFkanu9f88S4fzGd",
  "key14": "2Qtd8UzK4UktTrdcgQEChEQfkBVtUbpXexntVx7QZFFmbgeRxaTTdszuDyX68d8HmGD1StooEFTvDY8n9phh8xYb",
  "key15": "2qjEcHfw1Xfru6jcbs2XqURooWo49TVaj6Q1cneCHKEA6Vrbi45sGovsn3KznYarDcwPYg5pETnxRgbfySTpYRAU",
  "key16": "5nAjTeuR3LwEdPipoFyNN4DxPrUy6CoTriMRBPpYKRanSva8KWAGDa55ReWWL2auoKSDWcsswDQnz4AEk6a7ugoF",
  "key17": "4RKyrLeWTPd8ZiWo1bQm8cXJPXi9kp5WiJCz2yZeKijjZUsXYdkXg8dDN82A7y6Fy5vs8e27SoZMgC1y3cjuB4cN",
  "key18": "sc1mjcZvpPse23F7siU9z95QgqeYG5WQQu1uBJ97zLm9SZxnQUPo5tRiHqJwrweWzbVWBYkAikoeGkRD6HFdkbj",
  "key19": "4dTqmEH7ea6tD3atUMjCiaXgPw2WJqrLQ1nJNmuAY6cXQXYcQPVt8EzDWkgnw3YxDzs7sh9Ver5qjnDgSwFVWp3y",
  "key20": "4PMhydGfJTcvdoC1cQb7AQBVnjBnsGBZPbySUkjYULMN563RokoMK6z3PoAt1tq5tusQEMeEnq3waJVTekL3BsP4",
  "key21": "dXZbWP3Ahmu7cyQZFZiFbukze4mLDyteMQtssfYPCjchfciWTyE1aAVTFuMineA1zg1Fe6BcdsLU1too4aXxAR3",
  "key22": "3A3XAoQKz6YspNWHhK3Ur1sGp1pAm887jrys3p9PENUSbfkXp3BVXbsZ3XvGTSPJ928ZomqGd5iC1mNTYSQCK6Ee",
  "key23": "5c16Z2CZuYHmfCybJA1qBwPy5MppmbSag92CnxnZuuj6W9rQBfJgJQ6dun4b3o9rBzhuEpYahEWpzh3bs6wnncz4",
  "key24": "4v4JkMQ2HohF9ZBHS3d6akzDUAbmCEeejc922aZPEeerbt3Ck8Df8zDX5yaumFptmi9yXMPR1J69d9BSBLcUWMu5",
  "key25": "47qxvKPhv8TTL2K13jfHKuh2YeiLnnWBYGvSQfHopqpx6DVW7WMBLL8yWzxbDZVVqv1dmW4AxwRL7XWsAYB8FA9Q",
  "key26": "62UHqF6ApT8XqKNybEV7PKdL1B6wk3MyxzmBC4r3gZjB16pBabshSJC1gnqGJ7stETJxuXJd38jroFNVdFY5JSUc",
  "key27": "3fKmPGGUQfLoR84kQ29j5wpqTaHyBzDZuKaBycJPKmB7fMdMRhgWD41Vrkg4hxuTrDmNS937BcyXyHgRrjkjnu6m",
  "key28": "3PALfUCVZLH9StWDWR2kxkTvycdoPg9prAc9TDqA1coTpWPiZ69GWsDHGGigyJXwzCXbdhgjP13nYoPZJG5Ne3A4",
  "key29": "24jw6V2NB9EHdTGetVnFpVQJd1J8iZFKBUtUK4ZVmUy7TswSwHcg6nATELw7ByJjKaXAfv9s2RKwtFMh6qio1Eod",
  "key30": "v7ow8mieYriXQTk4XarLYygYhwuCiGNcpKW7Zxfpxq2L9YL1pbXMBiP6fBKkFxMXAbCf1CaouEyKPcxrRLZPTuX",
  "key31": "5bVLx7XhsbmPukEyKfQCBe6RmzbLVZqFcDfNreyyvxJb2YtpNJDGPKUbyVY3rPAqtkp2i5BnZxsQYv6JkDG4Czto",
  "key32": "4mpw7PbaTwUUG73GY8kGcogn7Jw9cLWnXrci2woBdx8PcAyDv1WZdDMWaL2q95LKFjUuy5aHsmuhuF13ZSPmxdgF",
  "key33": "3xEqB3aHb49MYfguz98TLrVj2XZdtjwCoYPvQUNeqEoje1RyDP6kFNR5mcLKsgFnQW9nkb1hGgLS9nqRNWJEstHn",
  "key34": "hBKnQoM9TjPwe2oKsxML2AX19AHHN7hHMuVeLPK4Vd4JLuQouRZSp9gJRCcbsqMLWbDrpp5jDNSERvjhM6GmrTY",
  "key35": "2GKEeZsznXfptM4CxhNoCi1GPqkAv2BFkTNbMrznz53AucsLmCfBMrpnJHA8JQ2UvFZnxH5gqUx8Drih9RQEgrn5",
  "key36": "2D6DcJAhEGKEBm5ohbUmLzh7KWTWGpiZcTbLwRaUvqAyT8RZrYEju9S4VxzFnGqe5ukPE6zpt11aP9cG831KvqqS",
  "key37": "y3nAE8ux9ocFhHZ9aRzVQR3RYgkLJugqd5X5n2JLQ226Xca8soH8xnLo2sYSSFUz9XWoTeV3qGGEcm6PVcvY4s4",
  "key38": "3553kpPs9EeVme4thKCsjjSdzd8n4DZYh69Pum8J2DwWy18VaX8H2wznQQ6jXSP7JP3vyPtRNLTKesoqJjMX2jcV",
  "key39": "3LeNagcgnXnukmKhGXJH6VMeSMTg29QV3v5BriD2sv97wDa2FbJRVhxSanBx2CzozdRso2YYMFsPoFcz1W1i9X6J",
  "key40": "3PtJMJAYwTUUqoUAbcc3XcTheonstLepc2ADnuXpZjLsq7cRr4Q5rmBEnAzuax46DQ4rx3r7maSxzek24cm7siLe",
  "key41": "2gyJ6M14eThnmqkTrofAqvPdtHD1u7kBHuPz8rL46ctVW7WBvNsRittBAgu2aBuugZmARp7ZV8tWhwg7avGaR63U",
  "key42": "2tz46pzk2N4pByZQ3HGMDqkRuA1ZPiTUse7zACgqr6XTpZp5SrJV8vhEAPJAEehLa1DD8zt4rKobQup6yPffJw4h",
  "key43": "V413SSXhjrEhQmfGrJxhmMYrSGzN2iUtToS5z1vWuPjwrVzSH1pQMWpkN2TNqK1mUrZXsDYshuoxUf2V5rZZCyD",
  "key44": "3jzRgQW9x9RTUsjdN52KgTXBQ3uqUhapfpbk6EwqVQMBoNLNa9nkKytYBGnw26imhxNyQJy3tpgb3BCdRMA1rB7G",
  "key45": "2DmUSmoiy8v33S2FX4QpmCbvFodZ3jeS1pmbB6g26meyWYPSu2uRUo9u49sbF5SMdSggYyTvzQYiAV1egw5YaSJx",
  "key46": "pncQvh4sezgng3jzAS9zoSc255W9ppKQfERikfqX4YCPFhmE3M1YqgTN45kkJTqxwrzN5My3xtRif5b8u56udMD",
  "key47": "2NJpN2AkDge8ypVZiCTC3SvJFHLdiL1frUBXDZjVXBLFUkWHJaR3zYPFNUi9XrKguDZDmNzJJYkMVzaw2UdrsH3g",
  "key48": "2Y4TTZft2XAmvzVor2JanCNTbMZG5dYtTjtuLm4C53FntQd6uZEDLBrU5N2wbJNEefRWoe4pCnqZcQ9iKCsCSd3D"
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
