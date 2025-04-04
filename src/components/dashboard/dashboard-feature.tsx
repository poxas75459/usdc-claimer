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
    "X4SFRaAHYbAcj4EJWxKQuZ4jx8mMn9FtTovjK4H7Hh5dHQr3JPDqyCPQRBFiD2UipM6URyb3Z562A2ESnnGL7xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQUrQWvijydSuvnXyUyczXpXorYmvyRpv1uW2KVtdQoauyGYJVau74sYz3p5H4qLvtSqTB7dJHoPoL67DSB9kBx",
  "key1": "3J3DGnjett7vfPGYo784LT7diiQLQN2sVpkQAgWPykJFXoteg4Hz1PCJRRbpvgpMgGMttuYNSGTqMGQeoPwxa3RA",
  "key2": "2FofEmiJuh1hgyiDU9GKZYZGkT31TJk6r431WAcerCr885AChVRijQz6UBKzbrH4LpM1xoDMA6aEvH4CwdCxGEmF",
  "key3": "3gsfDJSC7WZ9GTQZ95UXTvZrp1XKTvUCbo5kGJ9hGhxLhz5Gn3sTou2cEdUFuPb342PAUUHBEZbMXtDGfWTme3wX",
  "key4": "Ap67nKZhqHoHmJxqjuEzG8CNaBKoJvktcGt6g6N4BeN36u7KffFAjq4XFAs7nJzV78jrRc17pEjeCThCLsZhaFG",
  "key5": "38yifsrLdSq98cZ1cD4qDR52f5FKvRYDW5pvUwiTZpancUveKfKyzwHQycvFnQCjNbBhxg2YqVqkLJfLaH4zZfMN",
  "key6": "QtRDvZXgDoxXeqKKxQkQjPG5bpP86gNeWAtu6v4VxASp1dCV1UNWJ64ePvzn2snKbPZGizqdcUPHqPWn3y8Zxzq",
  "key7": "KEFnqt2W7L3161TRd7RqEdydxqKjbGoFH8UeW3iLAZnAn4fU7WgTWi3FseTFku6FsDLe9JE632wZrY7AQUTTaNi",
  "key8": "dVsF4WsMRs5tc367iMLZTdFVcs2rHuYsCHgrNEZSEzHhYe918Z4xa4haj3rnowXgPHFSe3GV7humqTMjuiqPBLx",
  "key9": "4KD8FU5jBCjrQKojANCFzx3MVX4xvGW4dS5xbAxdToencBd9rQQ3qRPUPN6YupFCAd25JpcD6bV4K9EaMbsHjxYb",
  "key10": "5ZHRp6bsGK3eRuiQQC8AvfhyYYKGUvXYGq9HWK9CYfq5cDei2H2BG15CNUMTUyMyiFgo8DnjXttvJKc1dnu742d4",
  "key11": "5jMX6gDzoFMT6L7w1CNqu9qa3Vhy9C4oLe3Q8p3bJbkwrbQvgbizyE9hPJktDMSe2bd8ifjB5Eia6d1T65wyXd7r",
  "key12": "31JYaKixsVAkyhp9tMqmHvisU81BeWog6s8FRHsdDroKp6WQLCL7tdVYqwxn9dc2TTVnG8jZVvhisa6Wdg9TvLgw",
  "key13": "5JmB6SMinrjjzkxgiDoBh6cMx9DWJJEaddDkBdzvzFK5AxKScQiVhMJbJ9zQYUsRDrurADhhJT4ENhD2SJ7BdJDt",
  "key14": "3HpsZdFubvnAofJfedMn8Q8C4vv68yzA5aUvRcvqJwsDyNRhTAQgui7pyHSQjwmjsanrWimckwC2TbocJwqFmohR",
  "key15": "3inN4Dqeb1n8fHAdaTQSqePPxt5UuntPC9YVVWU9cK9a3zNZ3LnHjjYJLEfFLm5HaqHwGBwPbsgZ4u3gxaMwGNyq",
  "key16": "4JsGytffPgqmC2BPUP7Ak9RAbxy3bfxdKxRHcfKZtHyVuqfC7zj1bicBaaUuy85D2fnasurEBQkDBabvT4Q3SUfg",
  "key17": "673kdfPVotz7ViJzD6chwSradeF17XrNkhZMGGygV93uKJ2LuP253SFvgjL8yFcehGH1nZTerhtUwemc6KhYnKH8",
  "key18": "4aBmFBs7Mqew3snr5gbVpZi7Uh1Ff7x8EdqCB3QJtHeXbRV316nib8REbUEhxn9jJbstF5JMnygBSqtULJN9ZawC",
  "key19": "2M6r2PhRxd2AqTZ68GJxRD3sTGFtFfVM4XeYQsAyZYuKqMSstHz2C3hN91A77YizxPm7FVt9yLsCFLk8ZTew6Q7V",
  "key20": "3e5e5bhi4Jv2MLHWhUYtD6aw7azDnbmBLk982Zh6QnkLL2oqrjXHvGex5JgoAMMbY9bMZCquuNv3DFHBapHh4zhn",
  "key21": "4iYhvHiFbEroCw4UE91JtixM7EDrjmkHDRTbUqMuHzSfKWq3Vxm33Vpyy54B48XXhyPK2DFh5B31f8ud1FZKnQpK",
  "key22": "3W6e7fsgEHmPSyvJ1e5AHfrbiXGCB2adsS4JpT2tcgyKt8AvaFceMXvfTetrH9MGpCoB8oL4UUqB32jaCsEWpUur",
  "key23": "2W4L3uLAgNYhUPC3XXL7TLjAcwAP4zdRH3QYEJ5qbwbe9H2XefRHujMnumy6smCoFKEeWBZ1utL7qi1TTooUbUjK",
  "key24": "4Q5jeZk42CoHov1qZzKhsuK879ubKtGTCe89uEz5XHkoHDVJJ7nwyjeKPeonJn632aYxmb2Uvx94sAS5vDSd18B5",
  "key25": "3SzJVZ8nUBpqodXAQoqcv2DAhfsUau6nfYpDWxSpkFqLaGte4MNxys1A9osV2cR7X1GQqFe6D9YxZUUBszWJyjHi",
  "key26": "k1fhyVGN3F54GrZecJYBFmJZVaZXPMu21NQjw5hUNUMjLHgwhFF58Pdpq9w8QrmBPWNQgLfscjkWD5iVCvbzXAY",
  "key27": "4LhtvnxyqF3q7oT11GJL2EbAdfkCQZ7aqPxq4H1E4mqqsGqo7XFf2LxYdmHovcSf3FEtwJ8PwUC5hw2xKsqaZ97A",
  "key28": "5NZj4Q7S37zLEMDoFS3WHnSU2h473C5CRG5Wz1g8YWSCZVhoxMyUjUo2uKkM6rbzGfUkZUzfE9UNTS3rE5f6tkMY",
  "key29": "2vpgaM9uzyvERhYQzarY6yhSTrgc1uhdwjPYwFKntxLEjHoMBFEv7YkntYD5Ty6gfCieo1XiyfChYqZLARYHQCVy",
  "key30": "2EqNLM4GKEwxHZGucHpdpobh9zwW7WdgTtS7ixSyYVy9G3bTyvxWbnaGjBAnVc5qaJtsMyEsdnqi1BCkuSwadZde",
  "key31": "2EBHDr6pZgjiFvew7bV75wQpkKXAR3QAihzT7J1wJaKU6FiKQLQ2GXTD9rpjcKijTrGqE1gsisbJpCzLrtcz6rCR",
  "key32": "bE4t5hcHvaZnvNUueDYgBdxbqQrt7jqrPZ3rmVj5ZXWHsuwGYkSJ3fDhxL4oTF2ABtWyS7xbVSb336MouYAE1Hs",
  "key33": "2Ma5g4RZvfEkmf8bZuBBHGY3zmKoGiEk39v6d3cFRxz2aFTV4QGJNUBqwo3zzd8acyEJnSRCUGN4yEaeD64rUweU",
  "key34": "22MNymkAzJxzCgvVf7ncs1bafFKCx7EheHvZCXThfw3KNZGuyatvXejUWGegbtsLZwrEWZaLeGvr93ec1Essbi7z",
  "key35": "5fUPZuiJtJzYJWBdq68egB9G5EcggMAaxRXJVT2ncjGP4BDK1CpBHUKADeD2rCt6PvG3PCjnFEa19itm5ZmzjvXJ",
  "key36": "5oNrEntXbLYMxwJtVvbiEmMPUEwmQ9bSiZ396HZKoM8Hqaibp4KfrDqTShmNQCpZKX96fnA9vnpBh5QN21vcbWWh",
  "key37": "4ZDAKVL7mJ2u8ZyCTcURJBeb887LmR1v6mi1Lk1Syv8PQwmRbUJr1yAJJqCD9v9F7UhRAmyboQrJnzk1a3VFN3aU",
  "key38": "NeMcheC6ZbRw4k2SphLmqaShgE7nryAySQXsGU7dMj7ZDfYSCiyYdsVS3iXFZJdFDpr5mfBiYLkDt1b486aVWMU",
  "key39": "3du2TpEunTbJVN5JmGBfMhnBPapk6JBRMDi2CVj2is6ubemWqyTPPbhcDtewsoRMS4SWfKGvUuPDUjubG6TQajwj",
  "key40": "4jB1GWhiA3hEJF7b9vu82qwW2cLrhn9rJN3LeL11hWQtcTweY6msJEBLXnrECYcDPHQ6RX3KKdx8dRzxS3BaV5zh",
  "key41": "kowxjztApVErDxxVZUsoxNDM7eeUghMhrrANDka4RU33UwpwVm7N9JfpqnDxTscyfnydTNthen3MNfTtxmzUo8q"
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
