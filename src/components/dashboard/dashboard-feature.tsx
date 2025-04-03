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
    "3ddA2NvbkcKLksngLvb1y9KPp27gKGEBrtzx3mBijtEzgpNX2wxi1CrbbHUyh477pXfiqvsCB18eDEhFpR3sXSqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEFMV8r5JUExxMHTAqcL3Kx5FhT4HREpx33uZ8YnohX1VE1TnbyZVYPY9c8MGxwYY7CUhAPFa6MSRTgWxyVccyd",
  "key1": "5vqjvPYGSfmomzSJLKLQqB9QDU7cUcNfCLSTJRBEvYSbTft65GXSeXJn72d6f7cA2hdRBnre9EqVkoG9RuuYobRY",
  "key2": "3fFvxePTdjNL9K7ySDEST3763uQXnxg6R7vcSQDUsCGp38RQrJsqkmSYXaDAiD4eb4ZQUC4AskPj9p787NHGobw3",
  "key3": "3ye4adB4FDcwH23EdJ5Fem2x16PwLDG6za9x78kwd44hYPj14mv1ZqYVuoyEe2ho4MQY3MpjAghozNewRUef7tVj",
  "key4": "mqzyJpuynBU8JgHD7Pwb9yp6aRmqpdHnb7iY1LCYryg9rZbfeGGguhKGrkz8ZKNBAHiSXZLD4q7yW1QjwaL7ZSc",
  "key5": "QJ2CG6ogqv5QKN1TT2xwYDeEtsqURBfD5eYxfxdRbdgyiwZ4MzdBxkGkkVbidXkVmNQBeQVcYJsrh5X14TCeKTG",
  "key6": "5r8BJSkLZA56Riuurr6c2rSLakZj5BdhLuKejHT2Go39xhHZFWy6Fcj37hE3LnmneFUN2Lu6j1zZ58M53bZh3mUg",
  "key7": "4kE3yWySSNLyAVuAiR1sKYcnWJpR2JMLcfb4uywfSf8g8XozWVo8Y1pQ93k6iiwKTSqSAZXdUfbUCQjUvqCXXJ2J",
  "key8": "3Moi9B2ZVYR1xZHpvE55WnxiZrRjvyZZB7rSxtu5agYBnzvxD1t1CSE1efBmwYXB39cUomQuzJ3c7jpX55CwbyMu",
  "key9": "2UY7na4R6CxV4VemALxq2eEhvXWhpboxuA1XskvhJ6b5nzfN8G6CsTwFofMiPu6zvxVqQWsDwgRM19ew4cm5tZjp",
  "key10": "4i4HJo8EPy84sJenc9cLzgfPrdXWjwmwUKhsE4MVMVQrVnq8yVwi4QCE6ZvQM7CCmyYw3dKGj1G3L48nTrziwQPt",
  "key11": "5BqcZd7yPMQv7f5sw2uWbZbxob3ER8Lx5nBoTaNJUbXZz3VBe217NKjwVNJk5HKBa24cKtZkvjPRJGkTgT2iYvmQ",
  "key12": "3mG5LuyjoBdHGhLnhyV48wEjyHhaPQYUdSy2fFm1exxbvckcnwrgce3fqXDrCmaXPEeuzQSKx6MvXVzjaSUaefRP",
  "key13": "behx5bF3V2qPzfGxdoSF9wnsknBKDoFtAd9oAAPqtf18YkmjHUVWqy4XrSdYi4SEB2yPvSxq2BryESQ6EePpYgY",
  "key14": "5JJknJTc24m8Lfisi3kcsqEKjRFR5DTigA4m5ZU1LtZDumHgsFXpZW6613EhLyP8bwqki9aZQZxbxQXuFu39CBsW",
  "key15": "3HhEy1bFrZvPrBvjhNcLjYqCmULdHMAHaHQ3qTW25nbCe9Y752HPvz1nCnhqrDA7p1GYg57CAo3TXR1QmhpFxtY6",
  "key16": "2MvE1swAifCGAHgqiKEpqu5APupy7XXZYx93SCx6tgJzawJEk2rEtvgUsBGF2xD1PcfLaSESzHXD4oPwZ3ssFqSD",
  "key17": "5ebBL6E6raKb1X7p1mC15B4TV1UiF7LbyNLsRaAK4x1KTa4LPb1vVasonZCihLTeGGxGTcT263naqYefR26xv3UX",
  "key18": "2akp2G393DyUqzDuxhbFpcdeb75a5V4oQFzCzfUzU9d71J5tJRQ3r6g6c9smMmM8QaTN2hjv9fehh3s6MACQZccG",
  "key19": "miZYdXrjDSrUSNc4Q45P2Vw5n46veZEWKNtz94Abw2mdvtmNz1jmEpr8En2edvUQraPoy8Hx9VHwVhpfnBZ2vdg",
  "key20": "2FtKz5vbiw3nPjEFxL9RebBnwnHswEdnw8iuApHh5G4ZXguYqEP94sme7YtZaPEUaugi2REfg7XNM1Dzjpk3GHV2",
  "key21": "w5AayuWSFve6inaqMGfHdCGvD8VbEpgM2k1A5qD6fgjECitcuk7r6icgcyQGSDKDqmhEjmBYbsFVKtGy5sYt7aG",
  "key22": "2vePjtZrw4gSNxNBkz9LGHWWHrF5f3hdNP2pRf9cg2SsdrPY6BqZG3nBZGiEeUiJRJSWXgsnTNVyyoTMKFCCXok2",
  "key23": "545crBAxExvAK4FkvEBXgbcGhgLuFqKB1SDbB3UqyEhksov6x7iAVUnYnXfcV4DTDkgwAaCKzRbLSvY1vKXQM3Sx",
  "key24": "LpzNsYwrVt1FFHXD1cwCQYhAmFTkUnMF8gJYphsKqao2ZUftXewLhvS71BVFHaZRBUXTDVMnzkEANNnAu2sPzwH",
  "key25": "2RcjvzZ8Wjf5ZUsXUEkV6oroVPAakxSDMxgmCsVGi1xuvtC25f5CaZA71hhkLoNac1hYvf9nkeveTvefUpNaNjbW",
  "key26": "5K9TksAPLhcZ6LAgrhFEmH6up6dGVFdyrn4s17F6yNuacm8agGwDCSziR2onYhY5vETEPTYSkWGXYcwkMsGW9USg",
  "key27": "2Yv5B6uK468eot5hjqacDjU2g9yJGKCTBmDj7AdxGzziKdjGQLuoubJRb7132prS4m5TinkCmN5VXpLeXAsFfkNf",
  "key28": "3zhaJKHnUDbCKpkwtEZ3Cc9R8RxyL9s13f1YtjNe5beNRUpoVJ4cvXbURggnNs26aL1v4yHwC1EtYwznhouXVsap",
  "key29": "r7P8FbcfVE8gwbNcpPpv3vze8pjLsgFdDgadVYoW7TNYBczKrfDDhYWC8dqMrAkhaKTDjGumGxLM7U4dxiYWz3Z",
  "key30": "2kXAeLr6Hqf2hYPfnTXHguwwAF2cdoHuPp9L2GHPrg8Yum6rFvuTHjopDwBTJ9RdhEfbVyv7hCa2Zs1Nv8EdcLne",
  "key31": "42BL4nSEsQ6iiJ4S1pTmgorUF29bE5iPiY2NErif1NZbG7F1uzAo14An6ZSSQTZECTHwae7Bh43yjxkfaCwxc6EW",
  "key32": "CRJjJz1aFm1ByzBSSbxh2YE34GU5tKbjqzZxbeUNKHtExqb2oxDSiVEQ1v5FXfQZdcAkjy7AEaKZxZjAhoEUTWN",
  "key33": "3NH4WTHaKRwtidZbS6Q6QjFE39d2WAXjNqtL7j3DCDyHxU8wfQbGke24H6gJrbVnETHKcWsLbZ9DsgMqF7pTfAVz",
  "key34": "4fHKwKZ7xCp5cpA3XhPx97CW5igMKUwLRER9RtKvU87w1pw4o9JFDNCiCCNqJiSZDLZE7W8yVMaV47LdAKVdMqte",
  "key35": "at9jVnQpmPdc8tWaXGQKwvuHfZWU5NDuWNpx3eaU15TRz7bjL35LS8pStnU8HJE9hr6e1DyyKnAVbJ79eUV9QXP",
  "key36": "4F2KyWieY1wvKaZf1K9Mj7KRzBWzMWYNzNNRo2tZwACdhCgayxNisHwwA1Rc2QATRY1jkKoAXeiVMMMKXWa6HbRG",
  "key37": "sjYaXfCu5JJvrRtw63TeLLHFzVfZvQtAMXxjXcCzJ11Wf5SmzhdaqHqEWWwnfUyUuTW41574Z2afBYXpPWHyfS3",
  "key38": "5upfAyBZ3VTSoYuHybNfjKwPty26z7fLs7V9uMXXG2zcNMRJy41iBKPtzatpcjb2RpFJpRxQ4FLoLawE7HCiqjhC",
  "key39": "2PNU6G58gPTG8vrYUKYy781WYkZeuv3h2gB13PEwpFahGFd8UYt7StjDbSWRDJhJrPSsuogU6iuH6iX8wnELejnp",
  "key40": "4uBJNzgCNyM5uigrtjKdaiJbZXHxEBzbYjHbhtYPfnuwmfjtxtFfLXYEd51uFmeT5jRS8NWtoqrAotBeHUe8aoZ2",
  "key41": "36LsPfUYdBTKWySYnhiPgNwbYumLknmYpixt5guWdxKr1rqQXg9wNBxiBFi9QDYpLjTRHqoBSLmU2TwAfcrkPp1M",
  "key42": "4cAN5B6JtGWyjiSqgCXFEue2JtN34jQf97QR6QcmA8oP55fFJdKVKBYD8TReyCXf7B46yTGYPJBvUJTcMEKegZQD",
  "key43": "2AFzXq5ZYVeS76gs8FTXGCwqJc3qvtmR8PMNSq89e7SU2r9jEvohtFxGgALScsRyDym26jTJMyUpbPXwU5m5sNvK",
  "key44": "4UpbFyPKsYSAHSm4Zeu5uZenND2mdPvqzuTx2XF1M4HoYENUmeQnCcUvEwSXK8oGevv6HQ934NXqjoL8DtYMaMi3",
  "key45": "2pYZ1UuwyapEaGmbknTMUbXWSB3NezDRrrEQMCgxtGyM73F5vmsuJk5ijZjzG4STRgR1172atHgkeLHNP7qTby1t",
  "key46": "5eXWNvNFmdznv5DxeRbf5qQmXy6H5FjTvRDgtVNg1a9vLbjYURaP9zhd4gXm94Vg9p4Nh4yMUojzuY3zqRcrqU6"
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
