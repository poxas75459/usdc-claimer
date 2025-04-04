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
    "3JiXBkUXynvNUoC7wdRZ22ujQWAN6SwFiPDPHsgyNRzjzt3mjxMuU3V2FReQqRsdgxi2TPLnQjgQu96PHoyz4Hh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DCgXKis8UB53NrXgWQ2rhHSAiucCcvnj4ap9DeNHUtgtkUcm9iHXCXU1uHwHjSidFJ6Wy8bRLNM8nSvuvSRQc9g",
  "key1": "4wtXE2BHYh5y49jvGuQ1jWh79gTiAPubkzhEExioMuCYBytDJCeujtHYygW9pWWvY7EVDwqtGY5wtUpXBjDENy4Y",
  "key2": "4Q1u89gz3kGx9RR5ZKV6YTtu2JYWoEn7v2kVNva4cnqiYhifM7Q9kTrfqtNWxT3eWcKcAyvZsm22dWFxYJBgjErs",
  "key3": "3ua5HjmfABtWPFXiACqdmtZ8M7QEeW7dGAGJE1tc7vCfFR3gxWTcgk5LvFdFoYfyA3hyV1NebFSaJRxNa8sJdPwp",
  "key4": "4yCa1w63gdnT4tZ8PpEq79L5RUzHDp2jMfGkQG3GDEmML9SYJ3BsqYZVABjH9cDvfaGMNbxJqknqJowbQk4kGtGR",
  "key5": "5nNeY6T3kKXix8xrvYarydAGAgteMq4TMuuyJEjgcy5KSDTXCrQixQQtZRMnyubjg7rGNqr7FJzLJ3rxBGXSa33u",
  "key6": "2M12f8oTxoEQX7A7Qw8m1rn45FNaXfZ6wyqTc2YqQfXhbgriw1BMDoKQKD6pU2zc7DiV8vj9YWrUo5KNkQZdtsF3",
  "key7": "5A8hGHGHvCN3oLgV8LkQqXQGuPDZhuD9vxNUnViPGxwW4zViMxGg7Bt7wWXoNjyZU3gezHfZirvNK5GvErB2iEFh",
  "key8": "3vZw13iXVy1W7487ZCdbwo6EyCFwzTkt9V4Q5ybdXSGQZmEdcfwvuAbumwtryXiTm36vV4W1PCnLEbKVZVKBcrXt",
  "key9": "423FyxLYxdLpqmDCzDmi1XUbrcy1sUQmLV9XSiZnkbGh4kgDYNESFJizgDP8jk7WdH2VnyjequFuhosWtgscgY6f",
  "key10": "2fqnaGPkcHznQqHdBPdJgd7h5uJJwrfAY99K7jbED8r5sEuHHjxKMYC4xDC67t4UPVhXfBVBTfJCwKtj5M743Pnm",
  "key11": "5mtfyuZwZrf2wS3L8118XHvvXzK3ugVuMbhdhmHmR3ay8v3c3sE5Ag3vSH8p2eG4AUZToVZo6HRrGV97vwTSFnwS",
  "key12": "3N4oojbJ5md1tkNMN2h1HF7NCgG6WzKvvE9KurYJmZQUNiENx8gwfojpVM1ygf3hGk5hPryCEHzBz1WjSv3Syjrt",
  "key13": "e5Pt2ESRFVJgX7LNKtX2gYJQCYRQRroybLMrq8johhgZ1GKFSPAYipiSj65k6cAg4Gz5kn2qJoMqbgHciAReggT",
  "key14": "7rS2sUxnQKuG8D6CxoAPp1kXYXPbULqcsBNTYwxxY5hgDhTQUMmgnCU1b1bSGqPn5X5zPra667UnWhHcRRkhJLL",
  "key15": "2FNvxr8DQrwieDecQQcj566AdWWNC2Uzedmp9BomiY591BMgMYg9dKtkyAhB9hNZ8ccCyX3u9tB2LSzRU6hoPiD1",
  "key16": "3mSwkufe5tBYLVXFKQLh6SpJ64wCAuHCAqMeVJLLU7wLPmgrQgfiiu7vQsKQXSXyLxkBsi53quPKniwNGioP32Si",
  "key17": "3wYnNgSL4L873CkzctdqgBmRsSxFGpii3bFmRjffE7VyhU9Uwfp1PyBaEThP54weERgsBqEi9w39zKs6NH57Btib",
  "key18": "2ctpkRkHqwWu16gZueqoByiHPgtSGUP6vWLV3AYFQsxSg5DriUL7ViJUUzK9zgxrxjsqfCqSu9itkvC1HyA1XGLT",
  "key19": "56zgA6pP12JqMSKkcEUmdHff7q8oQVC5mDRKwaPvcfMrCkNxCBQXsWsxpmTw6kxG39ASL4yfiCWRV5PUJM2JzyNw",
  "key20": "5T6sTz5V3UJ9dDAKXzU4kaiMNLY71ZrV684sb1HT2tHFMs8RRvL7XmD93bJV3Ao6k2AC6ErAWk875WkSmnBvgPhy",
  "key21": "4dQnFRnYHi3TQMbAQxf7u3AZcSPsrRpPnrgSQ2eVdGkAUQDUewZNa8bmPw4iMBCHFRF9uEJ5dBG1g5ebiPDjJVGT",
  "key22": "63DVv5ziEoSnLDgVaB6W4Ft5BmY1EZcCJEsuVmyRMfoJvzwRM4C9g5pu1ZporPMpZJczPFmj52AQLpNLvQBJE8kw",
  "key23": "5V9x5oVJ1kZVep3FAr3A3M7tRRGwWp8WsV8uuie6BFQKSRfwDw41Et9vofQWfzo1beVRNBvqgHZ7vvXxgDT9ZsXX",
  "key24": "2suq4tMrjswvPmboiyP1arN1yqjqLUFo5dde5p7vVu18BjLeLUzcUaXnxxLZMaUDyrhhUnFMs1i1Ze6dpnivP2c4",
  "key25": "2Z9c9roQqDFK5BgY5issnDxq2Np8aZH9G3cGkV3WEeUPdDGubXquPzhz4EXzJ2swNR6NCWeP7AKMgxfW8zEygK37",
  "key26": "5dYfQRZncXhgnQHm5S5mhvxmVmZxHTC9xzFRfqSHaGZiXH9ixFtd6B5hN8C31SPF495nhWwDVF4KYt9f3GHw1xjD",
  "key27": "5TECbUA8z5iTKK9YnCHizAN3tSWGLn28M8cHcMoyyw6b7BfCZq97TqkgTnpgEdXFjQnd453ANrB7FP5NaM68vrky",
  "key28": "3kSCuDt9mqknrVA7Y2eC6xrnH9vruKDnXDSSCYrwVLKVL83ekYdJ6nNJEDp13gWRnGQwpzNgN2tPou2mv6NzmXsR",
  "key29": "54LQBBBSkkxZDjEc2XaMvBoohr59LzazZxura4nxS3i5sVUY43iXvPa4v1JRJQcJagmZRZoAja1SmyaSZTdz1kNR",
  "key30": "5gsF4HNxNYBJ3J64TkwzeZHNV5a6aJjX2p8Q2uABcPXYU38U8hL8XK91dfjH7uMupc7YfzjKcGatDg67wP1eNmfn",
  "key31": "5CLsWabUNTpnwSpDv7i1KKBWdV7UMGzPvSHSG1KCXx8ReATR43HsAtJFpySB2NdnnXBas5azW9zJKTqfXnPP9fLX",
  "key32": "tfu5a5gAc22Neo7swxv1awyAnvBKFZwks8wv25eiLRyL1vfKjyfYLepSB91h3aMveQh8CNYd5He51wDbe6UjVtm",
  "key33": "2v2iUtcYefZ8JtAgmGE28MxmsTg9XixQ7AyRQENrYGjhBtzDPxQeXk1JioM3ShPFUgGFMrvc1tPtcDD4rB8uu2KR",
  "key34": "vcVkxapv8hubyNayHf3fuCQt4eD9YwHHGFyw8UPUkC4sBzeDA1w3LL38Hd467Uzpm81jvDXQYpnekTanaditjzz",
  "key35": "nJXRhvfCYUTnDfJEJQBowx1XcQFCEgnN6N5keynqdMAYd49TXK26xPj5pJfR2zHWY3WmwKRqpY5W2FrDftbqALS",
  "key36": "5y5FBA8DBgY8sGTCeT4ap8PCBYccu3CuyZYBy1rd1qHw7Y3CgE5LvDxCjsxtczyhPrDfPpq7difgqKJYgh9z6Nja",
  "key37": "3RXEGCREvhPnZt8Z2Tx9wrPwNZCFi8VVzGf3HD5BHsYSaRBGbfThSJtKtdhZHghnMa2qiYuRqPmPgd7NogzsfDym",
  "key38": "6aVD7iPEo9jWioe9QpcnZqTfb8ziRnHcGDi8HgqCALmzkRMf7uZSgXXaJqzbifcqyZiKasbKvSRh2xtNGyAT6Eu",
  "key39": "2HuMg96TrTHp7yyuieq22ijX1JeM1FwP762rTbC62fME7GTg8THUeP7xkk28doV5JBkPaJJ4Z3xPLMjGHqTYcUEG",
  "key40": "LJ3YNcjnucJ1uWHb6NfjvtkhqbwZCYym1CkiGB9DaWneRAx9DsaDonYh3UuWD533NMgoazCB4QGoXTjv8CNctdJ",
  "key41": "5gEs1MUqyMLaJJZpxpE6yZ1zGSeUM8M9oow5J4SpmjRbL6VyCPj7SH4PvzQuycLtK1MLjaPY7ad7j9BEBZktQ9Cq",
  "key42": "5JYHptPHz9Mm55RHmhm1zxyEgwjrUQCHsqnLPdF5rrjiky4n8PjmNeEDwCtGU8EhrkrhsLheh41HoZBj9FcfTHSH",
  "key43": "gac3QRk2UAk2f58wfZixwBZ7E1axynDUhcfaQf3YKgNJkbR8GsujkrXKjhoVSNLqveGTYB8hinJQCJKYCq79b7X",
  "key44": "4h4jc8iTmTSLFCF7krfgMsGucHtedhuXZTaEbM3wz9V9JCN1NtKCuyq1kEDHrL6ZG6n1zhbEXbZj6meUtTC2t7be",
  "key45": "5xE8b7zwuPzex1QZbsrkgt336851b6tVSWqVDmnXmiPx9ezaWFiJhFR17RGYo4yH7BjKivPdVn2MRe7Sgrh54QhY"
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
