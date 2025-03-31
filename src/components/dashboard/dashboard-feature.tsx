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
    "5Z21DALYJf2mBjsQrWkYMeoSdEaNiw6MMj8R9VA8MMa7GvtHxqqUKLsScj3kuzxuKzwgsbTYS5PRkcE2bBimPePu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zS25r1jbKeTuRCa4aZWg9M9yfZoDMdCMii7ffu1NuZbJZ2thNG5oFRN1gQiwveCd1xbqkz4sKxUrhw9YeXR6wtC",
  "key1": "prVGaEidJUE1dMj4CzXoyF5AipXXQPwoJUd7qGFnx6mYWM5Vxn1b21N8GwmDwJLyFi2n1UQL3H9kYbikLd4rTdd",
  "key2": "3njmzo53QqdmYjghKWEN2dYDHK2xvUaMJpy85D7ywjXTdtaorLMwj4qCwJfZBXtTcgk7wNeH24ZUUrJmhG94mDJX",
  "key3": "2o1Qcp4EfRobPS4db2gVZ7iEMysLSUW1Xf1tFriNLYZhNs9x9AgXaFYvFiC1Wy9ecyJp4Nh5HUA1Q9epv1UDzuPb",
  "key4": "2C9gBUgUA5jPKxmzsz8EFYXRvVg6zvanDxSC3DHba3GtAEHvKuuHsWodNzzsvRjYrCVV4tVhAqfNkRGbtxSz3FTm",
  "key5": "uMar3fuLXE73f6T3UpVveMNLuVJtDDpK97pkpm79CtDPrdV7nqd4hw55vhqZ7d2JGMvWGzz1457BdMKjDz7wd9x",
  "key6": "5ezcLrGZGtgQEi3WF2QrEBwZoE4Zv3CWxx5ytkNPj6DPF5VxpqKdSCGV1rKVCYdZHQbE8hhEMETPGWHgG247c4zP",
  "key7": "5PwBZXk5uCGvWPwYvjF63Hq7BLAkJHwwHbDzjtrNmrXRqGJucezmXTkDTCZ1BaiR6ae1KRo1p3aF1TXH82P7U1RZ",
  "key8": "44MuhqTArdpGKuGVcnyeDtZYu5P7sd3TjX3h53QnD32hZrLNas1Dfr6ygxqdRmV7YvAJFBvUa7M8H3KmSGTVWvjB",
  "key9": "5VHUz897zur1TwaHSVnpvHgBMTc2GjJPwMNEYQ89ULgmmNBvFqe655N2e8Nh4JLfiA1MECTT4omdDzj6gxr5yPWY",
  "key10": "3tNZBgMyvCA2m2kCYDUSZxTmVCHfhw33p2cVZFtjfswkAhxVnVLqZ1SdNR7P9ni6CWFBb2ENf97vu3d19esa3qs4",
  "key11": "2WaLThkLYYVbbXTyDfPRrGXhKZhVn8sNgmfsawCuc2umxPAjkX87hA67EYXZX2nydvSXBHLWJMK2xjH2DJTNd9PS",
  "key12": "sfdszanseH5rgffrvGqwd5GW9xTtv8c6vnwbRKLxisPpQLrPNso2L1uqvECJvBNL18eZdztCXrWieJ9C1EKTsgG",
  "key13": "2JYzG89Rq6CUBfdJyMnq6tmi9enDJCw9JRsPYVhF8SbTgFRJYP62isGQqYEDR6ras8uYjbxc6LQrt2ZaLAGnwscK",
  "key14": "4jL4i4LXzQGbtfXDLbUBZRA3McaK6s7ujXroq8nooMpw8aGycomaCy7CTA82FyZuVBBUo7jjwJaTcvbZrnQTTA8h",
  "key15": "3qJft46BRPpC4LwtYRJJzZZ2hBzAYqU7qkw99hyAEX55L7Y2VeTNRZqkEWhKdTeg4wJKCZFwKp4x6htuHegt2rpm",
  "key16": "5zcwQaMgcdqgDYEKYRUSJK3zkjTrSNPWcAAYyvNsN649SYMocqp6wjFKGJYoyUCJTas7UXMribAUuaRXYFGuecM1",
  "key17": "2txm4rhJLbVxfZjkc75jn7Tuc324xkmPeQZmMe2FuB3XuoFmQZyrXAndGD35VxzvQJH9LuSCEJCuJZogMDGuK1va",
  "key18": "2ujHahnn5n2rCqp4yVWaD8Vn879AihSrDPFtbyV5yNbq7bcw4MwZY5BkBcKWKRDMprS93LyxVJsBJUY7Jb8QxTUa",
  "key19": "5N59VY7NGRNWGF2GpSjiogmHWpiGEZAk5XfTG3dtGq9aNG3mwvW71wnLGF7TgwKtstP6uXLEwkSiRYkitGLZ4kYs",
  "key20": "5NJ2u4VsP9jxNtMLf9K7Wa36ZDLqtWVbJWMYoKeqof5qCtx8VuB1vPERJJgECMBhJ1rHfW2XioYGMbAUTEBpbaNU",
  "key21": "62MWiuDc79EMfEAKBx8qP7SGwCjbyqFSY4wZkoFZzxzewidY7jwQGodq2eFkdEoo5QAiGBzCtg4Qqcaju52fYAeU",
  "key22": "5dNQUqNhqXM7Q24ZbaiVLjUyxtvnzUqQPiX6VpYpS8dWE3ySDrkVm6wfSKFSQ7mjV2hHovxciRNv5aWzJbkA54K3",
  "key23": "5aEv3HyUvst2moMp2Xn6b38TPZB5CSx542hGJiqg7qC56WDnc5ZwoC64MRsVbCHgmLiuW51dX1BPbsg7rq2eTBUS",
  "key24": "YYo2uWt4xKUdRSsULfCRWdV4kUWTLsScpcTeFmnK8G9gYYyywYt4Lj2xhpT76JXhWjdvsVuZRU679FztETPot39",
  "key25": "5D9ZykXXtCxXfff69m1taTkAQ1mwRL3EWsaf8Qeu5NaGWfWseC4tupwCdovRiQU5qvdawLyUXqQDgRwkrryHaud6",
  "key26": "Bkf71wAi4bgdHiPCCjq3jmm9qqWPKE6vuqCzjh8MxT69cK7wAHgBbdZnbgkituehvqbo5pZkqJa7LF72MyF2P1g",
  "key27": "rfMmhiDU6czYqSYYQ1UbM4zMbjsmMHeGNSPjAFaZWnFdp1LXi9Wr5cDaVpPNresy8bQWbCQ9ox6f6z15hVVTGTn",
  "key28": "5yo8hF3HtWnWKTxPTbZjqYEssh9FUjt9iLUZJeegtjTJVa634wPyewCa5PsJeF3ZLugtE7C23LuyoiuQPY2ed5uJ",
  "key29": "Wx2grmC5eS4dyeu2wM2pihgsrUo4X3kUxGFN6YL5eVK4dxq9r4M1TYkAoVTwAgLg286efm9h6vesEENJtz3cxKf",
  "key30": "dfC1r17ygjGNw9pPiRMAHeYqyW2DPmpp6GJMPQnp39esuK2xu9M89RHjmrcmaLdhtyGSfg7we1Lw2f3Gdj7cPm5",
  "key31": "5DaeSUgRN4JHtC5etxBFBoXkhZgHJFcxWKmdwSJkbWoPH655eAjqnjkoepokjoN4LTtxxh5Sz2adxcczTExncGPJ",
  "key32": "2EqZtuTdY1iSzmDSjBgCMTwn8nLYKhfAiYw8dww1ZJx75WnvPNggrNoyuFT3hXSaHgG48UzmK1PsCvHaUjv1VyTy",
  "key33": "5qNV2mke2DnDJE1xuwq14CS1BJwFdkxeqbytvyutRVUuoJe4bxsVeahHRxQAr3QP13HRwWj1gbhZezHFCwFDVLT6",
  "key34": "2ykxk1HotaJWpLLqucY2apKxg1SHJdQKByzLbD3sNGfXgvAaapE9n9EasFeymGsBLLo3L3ENSFC1QYGybsZte6y"
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
