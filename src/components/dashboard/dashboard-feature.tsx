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
    "3t3dWus8qJqvETnefMYe4hUqVH6KPPxMNMw2w9FdXcHnstF3JKM8f1EjC9CqContS75tPdFr5udYeQ5uB5vPuNry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jntswi2pmNZDY6hgaobUcQULosyodRU836Ptf4FxTZBRLwnf6wirHwgWdHTewTuHBGtRHaNKCLgrVn6oc1PiVKp",
  "key1": "EJD2Z9FoMegvV8QDVonwCgdjz7VdJXUgCcDUVkR7aX75TjvA7DucbdXhxuLNjhxSfmNjh1mEZFj2b8ALXKM4CqV",
  "key2": "5s9NGuP2KKFuEJwsFZ2CNBMFA1PJEGBJ3rRJCUaTkDyfhUirJZdsDEBJBHyUGSsRtvYjSbZkTHxdwMyV5GSKmXR2",
  "key3": "5ra66sJ9XtRuPN3U5DidFRGVj93sYqUU1CNtpYwCrgVLzwVaT4cw9YUQm5Dku2jEdJ96Nr7q3coN4YZx94TbN2Zr",
  "key4": "2P4UizC44VefJ7yzbo5pZbqPTECLe2wdo2mqAo46Xp6BLf1DCsrjbLKWTHhq1kto5csS5AxCTkafyV838JYCanQs",
  "key5": "4Bi8BLxhd7QvJfP7j1RVxdpJvxSJ1nCtQgvjPko5KGmd8aFNLVBj73eGitfgTNuzxdaA72uXzX922vKyv1LDSEgQ",
  "key6": "5hu1SwDmBvNwbXxLe9duahK5gT6EtrxhvJYAFsv6SfZ65yJLDe3a3bJA4XTRQWR9HZtYgBoMVQynbXUgKKZpYXYP",
  "key7": "4NE9nN6WE2xArnQjEpSJnp128oUZmkdYEvriE3HgYhE8wRmQvELwnqGNd68ECb9KeE9XjoQypBurEJgAGky1mLQH",
  "key8": "2CLQ5cbPhJpka4HaxHpa94F9nEbs6YS5G5gNpYCB84nyrUgP2AKK5g5muBW7DafodSDysBmzJ47siWisG8dhd3XN",
  "key9": "2ZYdDqVZ9b4zEE4ghAW1dHKtSia7SbSiYbZcrj313AubZyEnZPnF1zDky9NEcGn6gdJ4otxCUwzWC7d21fVa7cQR",
  "key10": "2ARyQjCMYk99WSYYwtA7TeSrHAHUwhoBLiBqWJ2sTqNpz6uE3LnBCKmqkfvc8EwWMk1uxdaF1u2pVwdpLgEuM6UT",
  "key11": "336w8kspCTGDD4usRWorPwDXZLMidZDyjVQXYhNYJWupu5p1B4NtEx1X8TEdAHRpnZQQEhtGDzP5ihXNYtBC4uMN",
  "key12": "A6rRyj3hJ8j1Zi1min45zp9MU6ZXkRkERYvABvQQJbSqcUQNWAhJ12JpKxGhmDW7z6m3MhxiXfovU9BZmjobovL",
  "key13": "B874PgQwBxiHRwTwNxBTQwDxJgANfr4rcQW7ximUQrVBr5kLbyuTUQy64y88nHFQBgBrgqArvcdbn3Y79ACj4ty",
  "key14": "tbvVsHoNc2RE5BRbFSbkmHVhkAxkTZrn29AY6X8dXZSs4yST6gvvwoM1QWjX6eEYjDoKaKiDAX6apDmCnmyTDGB",
  "key15": "311CxtoG1oHrxbmFqQmvdfHsbQzDcC2at7SWS1CaWPUKLvDvDbhL1i7qMaTfbXdzbPEgobuEk45DVWa1QmeWFihp",
  "key16": "4X56zuSXCvjbtHqZVnA1y9iDLBzugo5cj9PpxEV44oH1NSiEH6Aj5uMThNcSiLXMVc9nsuuFtmdGLJUNQug3fABj",
  "key17": "3R1ezcWSycCHXZ1cSrHML5ko4cvCHSLGZiXtJJvRveFvyCDHpWAScSi5kAjKGnn4EETVQn5b3LT4WoEjkJdvCJWV",
  "key18": "2TbPsDEGyMXiaCVeL9W59C5eEbb47VXTNMuVHTP6xyxsWKyT3Sf6G8MTDHNE86uhooTNASoaRc2LDw8nb7nXVg3p",
  "key19": "3M5CYmtvkiRdQzzxAACzaEGxVeDbNwfppYQvCN5r2vvDfvDPvzu6yzEmZFgzvDwFWZQb1MD6NLp1vDHRB222yvUS",
  "key20": "5wP8TiZ8JfaZT8F3N8XPSb6YjMs4EYMt5JZERHq9r4PgfUyFfTRs39Df6tT8VdBqevu1gWc3ApSdGAPRjG898Hrd",
  "key21": "5snMxgqoh5v9i7TNGNbBR8i9U1R9AUbbxAyxBpYvhq3SikRP4tcEVfNTujYi7jRHJwHMmfPSEewgfn2psNp6mFAz",
  "key22": "29NKRe8e3fbBUqW2yD8QbtJPH3AHqyTfbc1VWBGGgPhmaG13PMU3jz2nQyixiBzry3236xsoo8W1Ye1dRdMHk5tE",
  "key23": "2MeTh9g5qKZb7jn71LBdY4MpDpXWVPk8Prx6H1r5T8tc7XU9xpWmuA7g44y8hPNmN3jgn51BtM2xCU7N23Uti1c3",
  "key24": "eUQzNkZwMW3bBfciVL6ZUPg4bgpSdDXgsGvwffpdmZKK1VwaAZy5YajFdub3c62gfmo7vJpg2bJuQZKt4kE4jk1",
  "key25": "gUYd2wC5KJa87hJ2LTuKYvieHbpJWzkkUumHT8gDX26LUQLnJP6SGmfGT9uzatzAGfwYHnshMr3iUHkzFPsoUCf",
  "key26": "3AhzDJExBfGpsac8go5YrjA6Bwimes3QxW2eJqLxspNGxU89GULt6P2oU1SiSGoEu8HuHCGQ4v7vLpU6N3tW3U2m",
  "key27": "4svtC66EAqYzjCozhXUWsB3LXqUPLqQ2AH9vTQo15MMK9Cr8QmqQ6MssanBV7SJAxyZa4oZFXGYTFzswTbafW387",
  "key28": "4iy8hEtv851ruKQbZCiXT5JKPd71TN2eHtY5RZz1YEu4Pbfw9pPPaaoVLxf6GZ3EJEUJ9EtDqR8aN1RSTe86jm6m",
  "key29": "4Q5hr6sVkJPzVApfMmLtbg3vapMakchiGwE8vmnkBYNKAwPSkzkEqLsjnUAFWtSGjAMvHr9XYeDexnuLTmjGjimp",
  "key30": "214tGygFszBkUQKk4TS6QmoY8tjYZXUvXoge6zzFD1zTcCHNkf14WEMEiDy4kpBM1MrwcoFRSwujqnqctf5p6shY",
  "key31": "2u4LFGTLc9CSfefsAKtFa7jgMeThAdydA6GLFUpMdjn1a56c8gK7Cu8PFehX7WixV9WPm7CfZkwg2Wo9DjExhBzf",
  "key32": "3Ja9336wB5LE64Yy1vtamxJKb8md7BgCVAs5PCcdX9MoHzwpkEWjjNt53KCemQzFyJCwYdNn5KAus1MQ9A4NkQzV",
  "key33": "51Rk8wEvMNAPB5WEauu17kM7AsERi2iqppxzDkVFV75gVJ9o7obcMokSMboY51QVgGakMHgr9QHR1kMxL5zgWj4K",
  "key34": "4ffkQnamV9rSod8PRmGML8kTQWbwKh9xhEQxgbnoCV55g55L81VdfEKdynMJi3jYKYnQtG6GtNFsgqhQHpry93Tv",
  "key35": "2GqPjEBxMuHrSPhaYjdwKPDhUaYuukYyACT3tkMUkTp5CyHSh9s8vUCzdkJmeaqD3fUjFRqPzQTFUryHRvsSeC6Y",
  "key36": "7W9mW6zGoBDuwnPNCmmGhVSNU2zdLkwNfXEygfgrvYpWCvjfvZfDmZSxic2AvE5rEevNaTb2J1Ezkm7o959baM3",
  "key37": "2iomr4GSvpsHfpuxVuCRpdQrDT5on9AhHjNueQGfyDEqoBWnV9Mky93vgD631vKrTW4xRMnYUN7wcHAuC22Pmjq9",
  "key38": "N5Ao9Jxg25Z5FuSzmt9rG3yomc8TUhSi9y62kbfG5ij8aLfYCrba9EjEqCQmnoKLCKqHNaPzMawweJpoFwUcNGE",
  "key39": "2nhrtE1oG8weowuFGn822e5yLjgMf1AbQnghdHHKJq6dDEV9akAxBXYzRA49fH7ABdfiDrE1i2GCZN4peyGo8GVG",
  "key40": "5Dg5P5LxE747U8dBTeoNVCw2Z5Uscjnb6hG82FEiGGEsej14iNjxqvdkhybJQvk57sbk8RaqaEFyxFEe6txAvJht",
  "key41": "48ZLYqK7EZSCiJv87GeX3eRcTsAXV3p1UP46mpabEcPvbPnNH4NDHwye3zNHdJqux87E22ehoDfZpEXKct72uyQS",
  "key42": "2qU1nhiLN2BVHULTX44rmVyrETPSNxfFVnaKPCxfVAVmy89SFajetoQRpJsUJZBhBYsbPycQPMqZM6yBKKsguBY9",
  "key43": "2EMeDjVtWdW6dd5naVWHjxYdFVTSH5S2ZZjmdq5byuxhMTnSRpfz5SQPSiPaUxkSLE2YJyXvJrz7Ranq7b3Wd2C6",
  "key44": "2m94beUBUYVemQQxsxZGATwCTdBzAzYJ4fQZHSXjg4dLpyDQpTMWx6b8hM5p6cWEaLLaDaeNueCLq23ykzxhiM7o",
  "key45": "2Ubd6N5S3omcnc8Uakz7MacDUUC2Tk7GRZnudLi5To1z83VsAULkz7qnb6ygcs6LwswzNfVEEiE35NFe4f27zcTo"
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
