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
    "5E5C19SauRYdHMb8gEF742tgWLHU8wqhXsy4MR8d57ahUsou13xSzW2LfCeMkk8mSmVBq5GPoNvr9cDpYfbBW8mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jiNoByULMuTLCufYCxM2xfZWwoW8M3uyTLyA5jn15APEHVjVV2nnd1xwg56FbBZ8zKLKJM19ybAWkmzgdin72QA",
  "key1": "24yTHwoBNXYAkZTu2bpbaNzCd8FXYqxzBPc4DwmKGjfVEshVybsh9nmVNgjhgxT4WT3m43UcJaNMtPu6XQhAEqCd",
  "key2": "GsapmDaHV39JaCJBohfmRC8Yv4j3sN2Tic6RNBNB37CbXQVbrpCrs1YXDbSbdmBqjiTke1HuwcmvscVAjZXGDQj",
  "key3": "2c4TNhwMP4GnEuFUSTG6bWDTd1MeM8wHz7DHBnpudrUiLLJGq6UdxxVTPAweV7q5fgFg1q2anQHoHphjDopseRAu",
  "key4": "2ranDQ2muw2bvJYsM5YGSqK7tXRUD3NTa3NncYFc9GnbpzV73QRESHnEHgPD7VwZmtbYobbw2mf3BenMGVsWNDLr",
  "key5": "3ySEz2qfXmQENKZ1C3NNBhU8WxcxW5ANxuz7gDW3mLHqWNQWcS3ebgyU72BpCXqMz7e7WisihXpndF7TK7RxTYFc",
  "key6": "2DCiyd7b8bZAp6FUfBr2GzYipe3AVmJi4u7ddLFKW2xz5SN9npVfHa9U9zpypdGmqLbhdTvYR7dLZW1zgu5DToc",
  "key7": "2T9PuBgiwzX6jaZje8QmDyNL2mXFPMBAwKtYyqQj4L5eRvr8pARWyNny1VMbuFzGAhTcayT7Vqnzb9ze6KMJv4WD",
  "key8": "2gNEvmmApETada8v9SSgYWqS7PFd9XywY338FCxNQdhivbUaXeewVWDf1SvFDXomegCPEHj443zJD4tuRmPyP1ja",
  "key9": "Z4HfxYVhJSiSHi3bHvRX3SmR711rtkt8wcM6mzq64tEnz7cQVNxz9vdGZrDqtindLrp5evmGYNJn7MXqX8DnJhG",
  "key10": "5i8X8aU2j33LPGZuRqLWnDA82KAqXCiRfSTscndWGSzpkrnzMVokuqpHpjc1UASG59PgNf5h4XEHTHABsqetx5gM",
  "key11": "36v5u2eBaRWwaEKuxUpwV1Y62iPaCAbfix1qG4GkR2YBS7Q6E5U5JmtJv7m8WjFckT4fKsGctoKp7D33owwu8Pu4",
  "key12": "2XextwhGqHU9hbERrdcSfY3xYGjYUYWrswLdUCVsvDNrnt6vvHSwCyRc8mqjeCuEmBeyXVAqR2w1TXEmrmfKFX8H",
  "key13": "r3FBedhz9p4a2yfup1T6Yi78i5gGGxfAXACtB1fXnu4EaLAU6StQ3pPZZvPpgHNzoVE8GDtFgMgPQxuYLyes7gZ",
  "key14": "5heCMnNRyTdaBbfTRWC94STt5EKkVHnxyLt2xW2A4EcxN4j1SqTxDDzZyhtGUxNEFiZ5UYy6EqPzkzffpZYSQgna",
  "key15": "27szdgGJT1QKcmBGgnicMZYfAqZY3uCbwwNDLgm5oNGGp9Qr5Ft4R3FrvyBPYY6k7Ld16fPWrYgkgJRms8QVKWLd",
  "key16": "5PThwSbVAwwArL4c7P5y83WkkegcKRwMExt5RPeEWACqQiLSHR1SJEFkuUuD9udvQWmy3km5X4dSiTFHeUnnHGA1",
  "key17": "4KMucrFLb192Fr8eXkBJ9n4Nv3qKeJ1mWhsJqbzhmNkRMVM3as7tdFGjYs7MRrmJamF1JdVx6xgf2szWW64jGTZg",
  "key18": "3Apm7ZYtH1m9G2wS4KTJgwpkz5vEsG1kF9Td8adFhykf75KLwiv5u2Mz6g57VEhHLxQYsLi6ymgGyoCCG7fotDcp",
  "key19": "2Gw4ZQ7Nf1gD8BA5chzC1jmmM4TBt8jiTi3afwq3jsdGh4Mt7FvH9aKdDYHrptFVDqQ22sPfkGUAx1qLogciiCBV",
  "key20": "J8hyy7DoyGpr9bxUn3t6VGUihxUnkvswCgg4yJ25jZih4thEJu2jz88ZQonfKdKv1yfyDNEtmPtgtbcDsmg9xVW",
  "key21": "64qmQfeieTPhxQ98EHkdqCo5RHbNy5bFpMXjWPggyVA2wA9XNHMZyNZeKHnj8GasfPNWGemzmqfLUHfEPVfepVoN",
  "key22": "5sbne9Q9ahLcTgSQkVzWKSVWiru9rHnYzyY1Qh4G2MJcgXtsQysZ8MgdKXe1QiUcezMbmzbzLcV1qhZ6xQWn9JZA",
  "key23": "4xRQ5gtSns3xoB3yktsXD6jo1BigwJjhP5az5benQrq1YpYYnNCxFhe1VgeyP6UBGWytYc3fUcxDtquQSbkhdGL7",
  "key24": "5Va3kkS1QtzpopCwNZiUYSaGXtmnDGtKLmo4U2L4Qox1w6qSG38exk9RRh8XXZtHUWE7vDgdReTGezRmPxdT49N1",
  "key25": "3T2Bw24xKbTP2v2SuWn99ZQkNZQdkjSqLQ8eNevazpU4c5SrePH2bsQpB8LuaQa5dayu6EASkn99DNZEoENF8QSn",
  "key26": "3S9e3e8nhDnhoznwNokToaR2pz2C7ZDVCSciKhivcBwxzTG6GgVtaZia3qNB4Wj5CRnnDWXiKHNwnrWZ8EpjVvXp",
  "key27": "2tMhHF6z5yXPHPeeAkxT9mRXYvpJUwH38VFxBKPx56UeU6ngEW145uugsxLJEonh9CPEkwAHeCXZqRzX4hFezGzS",
  "key28": "2DPumjxDXmcA5Ms3vsnmRigdVkreSfeGZ7EkVktLK7Mkj6nqYaWbD57GBnp5nbC146yNpt3upSytyzPrt1YqCq8V",
  "key29": "4h6RMNyNKo9Tm7NFsy9b668A6SEeAZpSs6Ux7SS6xLAYNYccMgPNAkuAGsbj7b3oJ4TAfYkXkdvn1XY8Z1vZ3Z3B",
  "key30": "4x8KLrZ2iDzaNS3G6dLatEfGEAouqbKig11RtGkKZgsEAVh9U3rnhEVhKHw98aMSKGHWDuKafmLU2dS9rxiEA5An",
  "key31": "3cW2JUWzC7k8HvfWNZJQrkeUy3NueDF8mwnUyuomTLVK5do79K8vY3hbE8Eb2EUsMbFTkpDk6GwKfC85Fffcd1PX",
  "key32": "yqjYkkU8j7zJgPXbsPCFVjmxaNGQtemsMPSP6hhDSHmRjo4MjfhjWZboXfdVuztTrBzetr5PWKLH9WmYqgf5gV1",
  "key33": "2v7a81An2rHyorXnRYKceSh9vtmbRGhK195ow5bY6FeGDtdWWNndduSVmxtKgv1Ev1fV5wBQXcD4esm2SVq3MSBc",
  "key34": "2hWm8mnxXc4aKiHgiGf8dSeK4iMdACMFvBkjAnMrgect162S7i1Ax6QFqZVh3WkXYvWwB5UtKDttavsUWHGvU1bn",
  "key35": "5m5RMkMHgGu5Q1eEjG9jFoPm36mHLw9jbpCNWsnzdMQ4q561vJ1qNczBrAjerVJ92ZjqjyW82UsaGfXVJUxPPB3o",
  "key36": "376o1i77gxNGJutEXCWgXVWXo1uz2Y282Ys9kfxbWdFGpcTULRJ7LdRt9bosAUgX1CtorvSYNfiQzECJHc5pQxwv",
  "key37": "2zkNCTSvzSC43sce5ArrG1JY7aqDpQUskd46cZL6T9SkAHUGWBcNgnShvoSGWYShJ99bHkM7vPaNoHjDvbFsm99S",
  "key38": "vp6RMTexUJefVJoYaT13jPXkwLwPcEFAW4Snr3gGzQW5cxDEantHpXxTGyYyKmaCsYVHgjbWKH61kb52Vb1nZjd",
  "key39": "5Fh94Cc1WZbDTPxNHnabWbRYDb9nEJjtcZFe2T7FRve7ovgBz7GZxoTimxJxdjBVcBMd11toA9pKG3XFEN1XiWYF",
  "key40": "5CHeXg9tgKnf12hnoQBRBBj6vTGxggRFYN9kZpTnXDm6nF36owmktogi6xBjaAhw91dhDVLo4Sdn6mjnyApN4PQ",
  "key41": "43R5sChychYUURdXxNntijnfPiaPsA2xcTJaJBvyK5ECD2JpQjXscBNdNhEvZoZiqn6h8gmjZMBxQ3zkX5U9fW9h",
  "key42": "668R3q2CAeLM6jJDMxosY83Sa5C1U3Lqnkg7eNJgdzYfNARdvQRcSBRVuVCTnjj94GNDYsM4hmVPD3DWPep8KomE",
  "key43": "3pTwjowkfJCNS9XHsTKabxMuGQ72vLR5S27iDji9QagkLeqXLUkcbjvXD7DV5ceofvZgK6ZHj86q9djxrcCjuuqG",
  "key44": "2VtFETiVqsAoxFF8namexCHb6zte6dtxGRjjegmvAgWD1mF3LL9GK7CjXr1ZRbfot7nDzWyozzZQqrWfJkAWpQJb"
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
