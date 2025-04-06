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
    "5vjRH41mS45QrfYNE9zwZWBZ1pnH51Jop4JeBRysW33Uvh9qLsQtnwuYP67z8uVUL8GfFThHR4tdDWzdb8Yzaawj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkTLfY4vSc24gGxYcDZGmp6KZpKv2EWMUsvNxRBSCGamUGuCsMPmHzw54uB26V9qfHpuJfaYRUUWnZ2fdrwYUUA",
  "key1": "X1Wyg937SryefncE6BhF5fkDLwXMKMNQSd34FbJUrayKuKCV6r6AJrHuCNmvNga6cULiv8Ji4es3dYESsYpCLTK",
  "key2": "4Bp2UFQWsFPonimkkKj3RsZxXoMwdDDoAFpQUKmXUiuoJETDiKCUwX5gXHQndqaEjUw8kfyK2ZxfBd3TL2mshm7b",
  "key3": "MYyWEkoRLAk94NpFo2F18AaNzXHcz27Ad8Qu829LBQrMb3f4UAgSyB91VQBAt9LP5RLyS9kjN4LcVRobeFas7pe",
  "key4": "5AHphZA8CAq4UB4nYeKuTmmGe7skvcbUw2BtSp3XKTkeVnoofpNS7qcxYGxxqw2SfR4taafi1rGUdAL8xAavuRyp",
  "key5": "4pGvV3sYY4Pysc3UcSC2qe6gUyfPsmUHPJFXYD7D4zKHPo81SX1w5NuN71gkys89K2uks9u2BsypeNiupLKz2UZw",
  "key6": "KeHt9wdFmYsQykhdvz6iJJPrb4xXhHdtCuQ254NyHaY4v2YcSau3ji2AZGZCBhfFPVYqCjBNQdc7eLK1Fphoapf",
  "key7": "4Qtd3nMAVUE8Wjco12ADYegPp7t4eop9yY4krJDVembk5ocNLaAKce7JBLeTd7cgxogcGemgdcDzXhnBCS65rbqB",
  "key8": "63538pGpsKdU5PZrXs2q91LX8WBNopxEtAoCwRGeWMsxu1XK1PNG3tthYxT4eY4VwutDVcPUaBHV8X1DzvD5XWQw",
  "key9": "5a6Vzzg6bgjhxyKdbTcP69ESBVXMPEkyvGGeM8GrATa7yCepV7k27EZB7De2ztdLvTYB7FiVnBwoLVhH81ara51m",
  "key10": "3j5MJVht2JTfM9Xj3BZkygMsifJPwixLk1uLxvweMfKCxq1AwxrvhCqWVxwaBscubKQuYyHpE5MyvbBH15yYapLn",
  "key11": "3s1krLjKXDELKgPA2EgqzDmW7vagorsJS1qbzYBTAcWzvbTtvuisVrAuDhAtfkc413MK1ZJQzUXSrnKNGeuXpfCf",
  "key12": "4PLU4iVpe3bpAaBYdRGetPkvb4aUNUUXusdN8uvVEQefPmzYzf8M2GBasMK7x2TWRvhBK7PXqa9RxajEuc5t5FC3",
  "key13": "4zvujrhndesTBxVe9dxSTPxjTKH3kTxENb3qs5aV29MhST8iarhy1KtMZtgbBE3e23QX1muU7uzA6WsSwEoDERvR",
  "key14": "2nDnhiSnreTnwbME3ixjGvYkvqyjzbW4DpQFZDXA5YiaKAK2Zxxr2uBnuUA1wKBn8ap1LDdHhMWmSZKdpKmNFM2V",
  "key15": "2UHqtEdfgTm1Y7tLep675hG3TWTGrHR7Dvod4JY3w4AgLeRiYnHfPn5DrGv7LvKDzVDPtvwG7NqatDrEV82zWejW",
  "key16": "39BfveCrUvemRCxdsAHZLrSUQd7PZBU6Nu89EeDM2qX8NHcXofMfM1HPr3amQ8d2FsXjhmKFydN8E8Pg7XAUZD2U",
  "key17": "5Bu24f9ZCZMNoLQ7eQnB3CCUgB8Pdng6dKUhbT6tn8jYUskT1iRxwCqCkEDw5vvmDyyP1jCivwkrEN57NP3REKft",
  "key18": "3A8MG2xy5dyEf5hJ32jcumT5HzRfwyEz8WdttxWEypWVzBeHLZcdbkdF3k7aqHkwkf5qrHHuHy8RTXsrAqb8TqWq",
  "key19": "tgaiVJJ2VGgzSp8zGoAuMjxpakKDnLTp7GBBLnMyFM52WNYKGvPgvAUs1JgYYoyQ93HJjtYrMAWsVwSGcF2ytsn",
  "key20": "4jnc987w1GphVG9YjB6EUnoEUuZxkczk3YXdupD63JmuHjN4EsQjaWB65tjahYgWdfRqTY4Nreqho8X7KZR6zcuJ",
  "key21": "5781JPECXcewhXEjXz19Vuquh4nv1eH1WKi6EXdxwzUDEESh4Zph26gJVxVggeFXo5tHEdRwqUE6zijn74CUanv5",
  "key22": "asf56y4R49Hxegs1ECpyxWQFnYWkof6VBxQs1gW7VeJn2XqfkMyjW1P49yG2S4AxgeL3mHPEVeHmVCeuorCUY6C",
  "key23": "2KZWtsFL4b842Vg41xrfpXUiTJMRNphRnyneHBQs9645cRrE3WB9q6VhDxox35CYNNdt89ADVBg3FQkWdcqBhPKf",
  "key24": "3cDG9r29cjLrFXdK9iWLEvLZnpLfZqR11GwbZBRFbeYdjxeoBMMBsCkBDs79wzCQns8feychoRTYK43YMnRRP7VJ",
  "key25": "2nztT4bwhzxoj63vq26vq19vwKHCLavj6REWy78jnfnvjjA1evzHcqhiAGjEiA1Hvo89ohwp57bxWsmj4mpWwW36",
  "key26": "EgWCEiFjiLr1fvcP9X94t1sXHm9tujijPdhQxSDeZWKqKs35XVKRrrMprmJytY78QqF2DnpMZmEJi7NB847shCQ",
  "key27": "3YubgcPEouMC4r3r5aLrc2XcPEifgkR8cA7v5evf5oxt5t99mHWQWCQZ3r2CxLuirRWsnQhcF59JWaivwDrjU5RN",
  "key28": "36HUEPvuCcu2TEc8151wT6Shsm3tqzacwavvHb6GvWz7cM6oH4J5DYhLAp3oV8PkGgeBTwKWB82vj3DuYxHb7PX2",
  "key29": "4PUGM3SppBR8cbc9uknSWwMijp3oT7MEkrcBZDD8dSWYHVQJiKtdMoJCzgC61t7eLrMuebkxAeqB9TL1VLjdrxCy",
  "key30": "5pvYAMXeArAoVyauUegCy2aDjwSyGth3NQVA3m1Db8AheuJCb5pg96PqxuqH9W2QPLDs1GSnjKrSEDGiuYEpLwZK",
  "key31": "3YvmM7ucZDhzK8xm6yVCsQryPEdNTuoszK3BuDwS7uJKy7e336ewMjpHeLA611o3L3xovZmdY8bCm18gZPrrB7jS",
  "key32": "XWY969vHD5H7vw1NzzJiyy1YbAMzJnj3XxAWSh3WqJ5vmhnt9QmSrfgmbYsWPkxbVoKFZP4LHFk7tHdZDkj2L75",
  "key33": "5bWx8cCUhxbtmKBCCYNqVVUZedF422gY1b4rDpBYr8rLmbJx4Pd2J1bWxAVX5nvNDAUqFjpuwU49NEFwYct6zFiY",
  "key34": "3krAo5Ep454vBjGhePWcsDz6tTdpAnWGB4KBmqHGVNJuTQEFKdSJh6nNPJwAC6425dGzrzzDooV7hHrFS6RgsLUC",
  "key35": "4xKY7rie34uKgBDyvNqTEb1awxx3dW53HkeMvTVMEffBA7VjvPQpe7we2NFPaj8aj9cnskYw5W1ePJDzM23egRGD",
  "key36": "2fSyx4NikqFVNg3tugfhBAfx2mUDM9tF6UewznTnkSJozjCgkf8RGpWt4g9wcnCU9JDLK3LypG2f2kR6pSNANzDs",
  "key37": "XEy6tDoype9hYbGFu69orrcwoSjBmNKRHiXpm6A9rw4YKJyydLcmDzQqNFVCXHyq3Xgf9hRSUjUhxvRNhfEqCrB"
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
