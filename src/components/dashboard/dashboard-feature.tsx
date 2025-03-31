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
    "4qFe47TvLggkEa4LqDjhV6rSPSgz7jBfj96b3pLzJpF62djYRXZQJBtM1ZQovYHN6X7MPT4cXarWdAbxHufzsnox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdXohQpiEEFuWGEC1Fbnx445mQMYBefWV3JLWXBcX7Xpq3QvnZ7NKLPosAgzfPMsZn9XATYmjLoWGBkcKwfmXKk",
  "key1": "2LkaW1iRozVc4uAwscUyDz27R6ejyHGaajGFv2bzVXaezjW7o1kMAk11KBM6Ji5EsBUpS9pFrLAgvjbGRnkQEehT",
  "key2": "2aiCSTG4AzhTyf1QGJWCVHCFjjnQXFaCiuB1WU7se7szJSZQ6QGU2NUN8ULWX9sY4puJcWaB8JLijew4Lx12X4Mj",
  "key3": "2CwEft7EBeNfsvB3zMnh3i38PAB2bZJ9taaHSSPv2atbuqSBpzmT8Z74Zc5vAATwLWghnSS8cHpqhnCWjxPewSxH",
  "key4": "vJzbFFAZiGGYyG3YFwgx4LKYseinP4ogVoyiMMihv7CdD3nnHJ5im78bvdiLRzhT15t2egB2fRPz3C6g5NnTaiv",
  "key5": "2cNrKhwRVQpdxRqwx498Vgc4d1xYPLEGJmW9xH6KdjecuonhCEZ1utRf7gfwND8MS2S2UUyDFDH99FvbGZXP1v6b",
  "key6": "4JHpz8tR1VmW1393JMQLcypJDe1Cv43DuVMab3xcpLJTG3CAJHgcN3Yb2ovi65usNg3AbxVDQvLn69sctkTs9PGX",
  "key7": "3jGRyDL3c7r4UeFE6H4RhXZ761s42e3xYG5vCBpm9pTx1G3UnTMcqss2eBpyHUkLb7nZzpX9UoUZ3SWNUYnt2vdv",
  "key8": "2FHmdFCr1o8AfwyXG3s9a4vRbg4EDmFT24C1sh9kkjc6qaGpJCDbACSqsQHCDwmedFRP2kvDgpdDeqxyd2FFa9bg",
  "key9": "2EfwDYdpUAeyCwd3RVxXdhfrRXyfdULE2ZJpcMRFkJYvT6oSyopABuwGu3Wipr5BRbVqVg8iUVS1i9UpW3G7sNkQ",
  "key10": "2P2s4JPQcdJmFkdmo1cxVSkiPZQYniHohvdP7urz21j54L4GVi9SAvX5bByDvA837ART2tQrwd6LWahG8Wais3nL",
  "key11": "2v7rdQsfYgo4kMaTcvG4CDn4izm9qe9jdvjDSdgVoJ1S8cPav9u9brE5a3C2Txy83r4HWhZdFSPiMrKganzjpXNV",
  "key12": "bdbH4rTD4o62LcVZmB3VAtptL1qgbGHih5iaGPveGE18prdMCKRrEi9xh4etfLaXCiPrD5MRv36zurXfxYL1eiW",
  "key13": "4waMXVsTM7bkvrr9bAJ47evuf1in2bULAwcLbLxR3BUCbWbBRJeCYNAe48PRMXEF8NRTXEtAEom2forKeXUrpY6m",
  "key14": "3iRoUppspik5yec6ArhmakLuriz8naRyXXhsQo3TZG1W6wpyFWoy2UUAKeDvUQ5cUuVzNgnZNiTrVsj1UNFtWq7M",
  "key15": "5dp4pHMrjMWzwV6QQDHgHtvku5V3a5EaRaQchQDBnyBtZBPfsLzp2wdKKRTTe61AhMMfr97EuqWTL2R2cAi2WRmo",
  "key16": "63LevpMU2qE9oDcGyqahBd5y27ARRsL6WjFhU47ghZJB7k3QVLbwX52dLEYPU8FFacmZBJycjUhimRGk3d3PyQju",
  "key17": "3uUaBrqYBzYCeYiZr5AUJaq1b7fPE9oHpKTeZ6gDx5ksQdkCDg4WCZf1r4mheZJsf1AjuynUEmPvhqDa2wnq5AXM",
  "key18": "3wnQah6xFzL4ewWQJgCeN5qX9B1LVvthEhzREStRwNUqD4JTpLg4X6KqtdQ4VmVY1KpH8M6TNNdNbHwtk2rMcpVT",
  "key19": "A2hvU6nhLzCmvukWCfLjAuHRAiXwvFDcCMeXvZCMPLX1jFMMuEdVaoyHL4dchC6NU14fZqYg5iLybadGzTeV5F8",
  "key20": "aDuCeT96EzN6iDnqvikvvy5kFCUAZo1xC13P7RUkDEvDwmLZhuk3Z4yC5YZD2ANK8xSoS7sgcToVVUXZR9ieyKD",
  "key21": "54tr52M1EaYV8tEXixvZVPAg6GRFKkNraBx49iXmw51YKpSbGeUY1ik7Me92LgZAq9et7NV9HycPn5XJcBRVwNWZ",
  "key22": "3rnY64Z7NrEUifgdYaP1Jf9P4A3QGHjMCrbksj9j7Hb8rcgVoLVr14ARf7DH2XVYjMzdSgzJkGrQDm6Tk3yzQq53",
  "key23": "2fiQ3abyjnh9tp8A4D9TAuRckdDTFKZnaVYwgV6wSnh3aphNvQdWimo2qTR7HRMMwsKCAcoW3ZLLG8hYfR8KS8vf",
  "key24": "wQeD2jebKyWiYFjFhkpbMpZGoCvtDwaQXMePjGyKS3FP4SVnRkDioPuqfq5BCcivwGzd5bkPL8P9Nj9VKYMCRzp",
  "key25": "3m28e4MD5AHnxt58FZssoJCKXivapgcicyfF5WSLT9nS3kYA6Fqj97s5oke9K7tFVuhehsgWk95FC7u6MHTrfkgF",
  "key26": "3LhMFQaoSLLXabGPoWVrSnavTN3jbPNXsxfiXq6cQ9VNQoS3Unt4Z7X5bMcG5bqhuoTVeV25MU9D4unosRn8NLeK",
  "key27": "2sKKarmMmiVnvQwuTZpfoqonj1cDzJ7uKjiRGfkht2PyNaMnSbbi7FAr4EMX92d9cpisgsedk96cnVncasP1o88j",
  "key28": "JLuSFfsKk2XZqxNguzb2EEkxpQMrt3rhSo8eToE5HQ5YR8rPzinKsbPM2Kt3yR17pjR1uQTvXMLbsJGxcKegGcE",
  "key29": "57foEvir13ZCamBSi11KdbD4zvc7tHAc65fyoZxBMxvPvNNVo6rEjvBhxK2doHyj3bnvaHf3cfNnUygQ4az8h3zU",
  "key30": "jnFKaZwsbg8DJNax2g9TJyVifEx1xzE9mB1eAZ2W6FfyvTsp9aGSTyMXY4PoGyPe8RPojptVMXkb1F1WGu5gd5C",
  "key31": "44h3bJCHkFTRRXKxysrjtTfvGBnmbvK9QZgLs2ZXPSbsibFizMEcRM6kxfKTp7uCUgA7QYqzJMhoVD5desdjJgtK",
  "key32": "4EZYSb4d3uMwRwRyLXdXDoY115thsN51ipjrBAwx2LeaXTH18o4HEzyBuc2XEgFKFtGdLiPbC3W2WcLoytYnr9y4",
  "key33": "2gqkKEcqxsHLrCyyutFhdDqKisBm5eKsAKhr9jnww928mLw8HBpNjPuXTknxaLax4YjTD1EvREjivcwsLp4UP92h",
  "key34": "7JwHFVR84LDAqkjGbZeAxahrxAvj3SMo3fkkbvRWjfxAnhQg6pvVsvjr42fAzpaJPBhFRdaoALNzaRsPvKAhP99",
  "key35": "2DPrgPYoKUH6xXap83nt2DAdjSXReewyyc6hrBLRNNUhhBLiG3svHHta9ufa7ER1xty5WxPW4BNBF8Dc2RFUWi1H",
  "key36": "59GcBEkGL2yE3LnjHH47nTMfkNK1kKc2EYDki2suQoyG57e8E9Z49LP5K5gpPn2EugjJoS8QfNywKySJuVWDnVb9",
  "key37": "2jNwVzJ6tE33pk2fJATWYitnyEawoQXwsDxMMkp5xNQru5pF5i4uotYu1fhP2Zw7xWLBvktBkkm2ME5piMRjforj",
  "key38": "5oYUaavDfiXzYNMyiKYu4MvjRvwKMg4TwcNFWoHK1Ug59qE5cESLxzrPDdTXeysEdN56RHzVG7Akk8PPPuG9dAik",
  "key39": "2ecY6H2Pkeap91cvCWrKPjoxAiP9VRnd2DmfexSMLozPBTCBq38168bM9a8dGW27K2SdYm9m7ZeEBAV6G1o6bsVF",
  "key40": "2yGZExj1ze71dNQhbogY8PNpQkwggU7S9a7Pmxi5ueofivDT7NzzDgRDsEhYveTQk7TeSZNWBt35cPUueSZfgnkk",
  "key41": "HJeMdPWeQ5hGGcyMCRC79UNWLHjCjxFL11EvQ81q6a6cX3FPjPZobwrkGwhHA7Kcfn7JXfy9H7yuekkb1HJvhfM"
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
