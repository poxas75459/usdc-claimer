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
    "263DvuE5ohbNZqMMoP4s967YYZE9WDWjx8k7WFEW4vPAKmZBKqGYLeo8GA7NyVmCEb1aebQ3uHGGnvKLPMWBpwqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFusc6RGRzBxieDbEAUiuQUnczf1uhx6sov3Q5NVd6Tbtgnd4puNRRsxKtvawQJhby8Jhu9FYrEUBuhfLBahDym",
  "key1": "2kks2j8vY5TET2U4BKKSB6qhF6eFXsjbDvBVBxoa7BkDpYWXHzKaQFtTbJdubH4drus3vvZTSQNM7NFmkgFjDWvi",
  "key2": "MjpeG5KwMz8hg1VZ8c22apLH9x9x1NBaNfhn2A6HWGMjSATZw88YwHkYUaikhWyifQ6ydqTFskQ1KyRkvccYRA8",
  "key3": "5mh8BuZNBm7eKQUC69yXkyREHLfBAjz5N7rtiA3Wu671tqdHCbhuXbwNZfNfUbBULQ8oGHGnb7v5qUntKU9oRQoY",
  "key4": "2ddo9bS7BTSyeNwa15Lp3kH6S6jZCU51LSAhTC8ZcmmQ2n7mEf9aauRdWFwuL5JoMxi7XtinxFP5cZKmTifK3yCq",
  "key5": "54Hq5xeQSNz7Lp66dLiFqo15aJNtsLMi9hk52RioajvvfMer119rd5SVxs9q9j9eA9ZfiMzo7yLdeo6pg88cR38E",
  "key6": "2RoZLPxhUaAJY1tzPaYuNKVzp7sUeFBNP9S51SnHywiV946fK58pEfnbNuDuF4trsnK9xcBCY4yM6kMgtgRVNwpi",
  "key7": "4opxpVe8sUZjVfzV1BWhNPErE7s3m6TJqSxRXKLiC75KboktcEJWroijhdh5LZAmTKZpUo7Pis6CakJzfPmRx1Zj",
  "key8": "iFy2L1siVjZE9SiNw248JyoDpkm6zFEa6JBTFGoGK38eGbnJYpxiQ5HzyF4Eg2WVQw78uTu1qFML4KspxsjTSzL",
  "key9": "4ArPFSSqnKoD1SanLUjsqfRmbgj9bperHqNs6Ee5bPEPYjk8ceT81b9XbP1Je1jf57vuBrqhEiLxmEajik3at4fm",
  "key10": "3NH1KjCSWGyZZmC2VNi8JMowE4v2LFgCEcEF7PuoWS4p9U3ny85F2n5TmFoKNgH1Yz4rdyZacgqCDZHiRRUV4vNn",
  "key11": "5boZodyfoUWSv2t1CKjF7aQaSedi668J7inTUGkdFWv29A4sn7AT8eLy17Cp5hjG1xtgeE6GoGskrzg82N8QCnZh",
  "key12": "4pgsmtcay8msHyTkqGNG6vF8Fi8fbN5w3zntM79JRXCsq9AUpSHGuHzFQby99i7e6GW7ZW7tMQckGYDUvVW5aX4S",
  "key13": "2oAf6NddvirTuizqEzx4K9xRpnawSFWCHjzSrxDUVVqR1raieDS1sWEB7cukPXzTAsKXjJt2MqVWN8sHXVVw4U6E",
  "key14": "2jrTLPkwpauBaT2nBRKGhfMwFbTXcXvC5kX2an6SGeKiiNJQ8PKRPbbbwqiAtUxJ885p8Re8S2FbhN8zRV8RAYHp",
  "key15": "RCaMAQj4Nh89TQGQyxo97j41ZUacXgnfPvifHPpXV9LL67aEXbcJz6aVPrPB81TGdWNuncsUnHE7RYV583qruNZ",
  "key16": "q9L5qaC2JSsiZUQrZZfzq9S76gfSN5R8U1NMegqzQqkr7gWUDYPvdAKidEfo4V7XEm1ZEKF86TGhiiDRRJwbDKJ",
  "key17": "3Fsn4pLrLsi5BVDt4V4TBQegZuV7npfB8U66UvTMriFfPatdSphG4EA8tCx6N3eimthZuu4cyH4x7nVEkTUpANRE",
  "key18": "2msi1gTcNT4mYQ9jRUHpr6ZbZghViWCayfZrj7wDvM82AnqMHo9cmDjDQXRRojwjr9fxg77v27PPHvm1oYTBVLSU",
  "key19": "V7tTCvPvTcY9z2AW66JRrNdwTgvpsJ7XFrQsGWoxMJKne62KLyECLzb1RjzaM4oPQfAF2V3ZViVvrC5mv8CbxBf",
  "key20": "3ye3h6ivBs574aq9z84M9L5n21efkANLrboPMwSo4dEr9TKJ638wv71burCZHXNykG7t2w6fTLvQPW8WUuEkGBjK",
  "key21": "2KvnxDKfuenvJ5poz4F2pZvGUvqhx3wZooEk9XpWRvwfXcnUNp1saQrumntnMCAqFs69rtHqqnLh5h5xtjYEFHKs",
  "key22": "36aGEgyzcaCT49D38AJa8c5WNouq5DD2JmNznDMk3sBJdbgfVJoKjWoCJuSEn9PUDRj6z2irWfqZ9iMjLeCBNJXZ",
  "key23": "4uVG61u9xGwqXwU6Ra6DxtDG5mP2r7UbCdXQZZm36Sjd76o6PxDAcv66qssVsGwKHbZBRKGeT6Zr7HRZM68Eu3Qm",
  "key24": "sRyuNntK5xvXnBBmSHQcAZx4ApM1k8LohDApCqLhuogKwn7u9mdkgXen2CwzX4k9wFyCCceLHxNgcntXL8KUjjV",
  "key25": "2aUUwDs8gkv8sDLRufDmVGpinnuivtGUJCKLRfYoqncFGA6avwNW496xvunPhfX7Q9j8QKDSjZHVfZH1f4DLkT16",
  "key26": "2UXR8rATHXxvE4J1dJ5c6tZYEhaNQfZFerF2GArU7ZQ2dAskY6X1tXDMPmcCynysRG8smBu55k4aoaPFpsXzCHNg",
  "key27": "3jwuo7KoMJKmdVT64a9rhZs295kQJESi2JTSQFzuVoLGhtUp6UirWqpd3Ftx1iMYMDc9MXpve7QFv2sqH6Xg5Wqk",
  "key28": "2N2Ubr2a8HeLyhgqzVv5PXCa9Bb1zZngYm944xDJH9eBjmVQdgdyguLrAGeMwSeihW912Mti6FKWHpQuRBBSx3FR",
  "key29": "4eRTfCLfYjvK6j3JjC4tcLJ3Xm6M1FWnHu7WLHnuLfKNLgg43S9dGVLxyJrye7Wy1miwkL5cF6xGUb9TyPLcTxqB",
  "key30": "41oi41uFqKzFKpk9fKRTcvkrij5Ruv5YBHHe5CLrCMcjSG8EEmoEm24eWzMg9uoPse4G7EN6tyHCRMN8i67ycPn7",
  "key31": "jjMCubmaTHxeLFxWPRtCBeVM9LMsA4w8WNPNVrBTbazy5D6qTnSG1uJ62roNaT6t2qXiRWUd5L38QQy7YpSjFfk",
  "key32": "2FNq7MgFEhQvWBKYre8w1FDXogWsNGkyhxEUFVkriDzhHx4a8HpmjqnLd9wkEp5u6MGUCWdkTE1wfFqbx5d7up4H",
  "key33": "43haZVX1qdvdn9EyM9uLstt5brV3apJ9DkMtcAHM31Kcc8Bzh39DdzZYUzVjt94nZuVL2jN4K3WNeYqepX6QeVRt",
  "key34": "2qas59iLuVWDgidDsDHwu6PiFEGnfzTvgfRhHGTB5VCd7Ehwjc22Us9wVKmPgNTvgwGrtSeawehtRz14Pw32f4dv",
  "key35": "4WxdYfxzYFwC42C1ntEaDW1aFTuKzBN1sGCHP57gceyX3Ev1PvfSxvm24837CotzfrzdWGdoMVC3kT5e6YZ1bpWz",
  "key36": "5cLXEJghtcy4VTDTvgEhfQKBsx4K7TXqKtQsyy9BZDPMvaiGCUdmKbr11MbkWUEyYEsjT9VgghXKHSLd98Wj82y3",
  "key37": "34aNaAqkfJFhiHCfWXuBsn9qDXh5zvFPmDTNhGuv1ZvXQjrAR1JcD5X629PRGmd89mWzHtn7PhuyeQBFLNttYRHR",
  "key38": "1a9sVsML6Tb42hEXBiLvrtUudLRxBHKd7o3GB2B9PxAstWQucSvJD7tFZSSQ5PQmvXmm4FtmAXZzKo3LfoAmwtr",
  "key39": "2ZpSGwUDyd9VkdNLufbNf8Bg4KzRs3rkfjdTtSpLKACRrQGh2TBXPUecJoY45ZyXjq37SqgPzRYFyua3E6knLZaX",
  "key40": "5NYHfzDnAU5Ap7ierycthJT1kY1QwJec9c8NzABCkit8FbHcnfRGRzU3bmS7E7xQJtx6B2ZhkqVWER6jwVeziSa7",
  "key41": "w6Mx1JWjw7q9edAsAAqJ94kYTCProFrRHh3cbD1X55CsH2TXSBRjujctniaYRj4L3VuvPyD3MgnKV5C6YxCztVq",
  "key42": "5GfwZr5dMAon5emKmAJWKeAiefu7PE4BGpfga4CgUyC6L8BqK95dV3idiziJNeRKdr6qZ5o3pmbQogvx4knokBQM",
  "key43": "21SxdFgTGRxx45ti2B1iftW5KRdFsd4Rk8K2LC9N9ZfMkm23jvJpJkjUSeaTtTYkKsQK7oc8Yt1dUUe5rTka2pnx",
  "key44": "4f9q4Xov3pZfyXgwB4PWJqV6Bmz799N2dJW9TWuW9CT2QXkfHN3Zx6DZ5nxwq8E2uyJbZPEvnJGZaHpes3NC1L7f",
  "key45": "UeFtRAiLLaLrbzCwwacxGjvmtxHgnQqCa5MmLyqACywoh19FRgzNbFN3LLD7LEvapSwFjydXQ1PDoc6bwqswQZL"
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
