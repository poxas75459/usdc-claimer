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
    "zNBTbPyDxzwv3vQtBUQ6nanBW4Ar1G7KrgBZbXX4Pg5jhVQhUW8zcekWBHfLjCkrLbkPAByWgLmztHHwFf6ei16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pM9zcbdRSF5U7K2r1CJDDDuXWHcmjuEiyGEq53aq8TDH6AeKoq92GGdWz27VNz93Z93wpKwifPKfs2LJxNSHq6C",
  "key1": "5c7XtHbAVNtQqhnGN6zLz2Zqz3efHjD1XfUTqiP1hmoCJWBxLnTwB5wPuk5tr59uNHmHh5gfUitcAY11ysJBtCHr",
  "key2": "5soQ5hrbJfLNo2jvyqgTQzWFPrp1MSqrYZ15Tm6JJFUzUvQCnJphBKdwJHehxUAH25pVcoRXMEbpKZdAfS37jkxM",
  "key3": "gi8BBGH7zY9GwSZo9mP7ND373q1dqjX2zEytcV7f37MHvfNRa1dtBbz1xu8kfwCcfVLz4hg2aAXdr9euFtX7AKC",
  "key4": "4vBHMXcM3PM1STZDBAeV8kG7fmkcqqXTxktutoHWJD6XuZV1coC4kqoM2S4YCWvkG5M2Y4djgkm5SMz59UMNWhzW",
  "key5": "3K8B3a6pzRc7dhDmEmmG2Q7PumgZS9TAN9iLuxHFqngNCWqowGkfJ1MbjgUjd8qCQt3aS4Bvsk4AdeZmGjw4BLvZ",
  "key6": "4Yg6DZMwdoLLC5DPvWnZLS3pXioLjMwCbSfy2JoVtqxi8VQyzbE8kVYB99M8nydyh9TAJ3FkcvXhkPHcqiYZSMii",
  "key7": "3qRvmB81vvT8Gytz6G9kFaeWZkdmyffXiKBp94ozt1tZAubMiCXukwCbNaMa8mHKqkMjq66hXSSRg7WeDYB4rxgG",
  "key8": "3YBo3viBoFQ5Z9ZRDJgqmLVeuT1upynNuurkC7SWsrd4YEhMonWPCdpTQpp83kiGa5QdEieXvkb1SpDxrTYdTicU",
  "key9": "7uVz7MWZUs3USELc5Y3PyhohwLV9pEm8gqg5fijKF22txYP3u9nXbxZrFe6p9hLXzNMiopEhaLx4JK2CaAoNHqU",
  "key10": "42s7BUbNxH7dyjxipozQDouXCHgoiZGfmFDU5NatdrBjjBbc8EbGXQy6cSwL9hd4FfNcZrg5tB8UibSaqwArHamf",
  "key11": "5Voc5boZ4aepnPw1dTxF3cewf1cjVUEqc3tC4NpVSwYS46QzWwueBWkeP4EgHZUGKE7XnkLF67TQ7aXtP2P4B6Zo",
  "key12": "3Koq5GT2noY1UDeQ4J3cYF6wbVN1s5sTDuGgPKaN6YhS1NrsqMNuncVZ2K8UtwNToBSb378oenk1JoZG13XHRCBG",
  "key13": "9dGmqfdicenPcLXG7e3QMPyjDqN4NNF1QdUMCTbNT4pcHEvchSjKQddefbTyPfRnmmadEfrapzfMcpgh6rd9Bbu",
  "key14": "5EcSMcAi4YArKk4WSDnV6wH5kgoLwJk3A7RRQ2udNKvGHYWDXQyPXi6eu2hgnzPv7jikR7jx6hPXkVBrud1K1ks",
  "key15": "Sws8z6NVApXxxPsvbvFCyLxh4Mruq5K8JCgQRvZhCr88hiFxBj15vMPaL1AMZ6stdpgva5Eci7xueF2mTepqR4b",
  "key16": "4VrMTXxeZ5nfexR6JVeFWfoxCiqYewVuj29jk95Q5kx5kaqqu14LF75tdLiw5mCVXPRxcYPgz4NrMqCDFpsYQVfH",
  "key17": "4dzmQ6xHMqR5i6qeVUYjdFzX7mkH1NwSXVBDfNbPyXaXtETZKfN1Fm89zs6E5SWeYBHw6xj74hoDSaynMgepba4Z",
  "key18": "65rqq1CfbZf1A5uFWG25Gsak5GLSAZwiEBDjRFD51o8HDpHWbFf3SQYkUPULNs9F8wXh9MeoW5hPy6g81jzfBhtM",
  "key19": "3zVEEouE4cQbkK4S11sjQQfoHtouuqboGZpLUMaay141DYrwiLVo9bLJtHkdkKyUYL4hsLYAaWZiNvUsvsJmsLUT",
  "key20": "2gztRz3ofd6p5PKGnEdxWo7bMnyCL8m98uGjCPGL3XkjotXQZW2BxiT7twJfwhrKDyP5iynTs94SsNw49V5m66Tp",
  "key21": "4G2DxD9fNbh8WBsi488m2od57cFHMzbBXqvCGG8CMbm2MqN5YdsWhLrXjDWNe8eY3jkV6gZKinyQrHF3Us5k9kUL",
  "key22": "4jaoUxkfBDkbibzhrnJyjiJpsxRuMNapT1Mfx8bq2cCDi7dEaVdpiRFzswzR36RHMBaJLL348pyUoEYcc2wvfpfo",
  "key23": "2LZ2S49vbfX8SvV9mPXpdeCecBfqcA38MNfPw8jNQkGbzwnfrqQaHXcuz8QHRBZD2WQwdCfPuVwUeUyAKRzV8QqK",
  "key24": "2qfPJVfLoQGPyxWifQ2FaDDVhRRPUAiRofTqJcdwh3NHZPoWXK9ukf4GeYm4ULWvYy5UX3KyUAyxmzsjRFFsxcVo",
  "key25": "3zQb3sdHUwq5CrYuSM3xZBCX4NY4a3UyLjeEyeoCrUkLg8PmsTgMSL5REDHiFXexP6Ycvnc7np5FEC34q9qKeWh2",
  "key26": "58W8MjDJSEg3hNewfhjb3HKugCCQ4X3cy4kf5xYbYoSp3dBeavgDXJUFdi2wSdRAUwDduxgK1EBREX9WGJSwrfeM",
  "key27": "3K87n2yGiYTGjpJpGGb6JY7vXhQ6NjRHWB9cHNYT8xmRDdH72rEbPV1K6jh3hp7QZTinYTeWH3cL6YRGsymYRwUc",
  "key28": "632ekE74tVTXsg2aFCEexCXZ7k3qShbcP7Ssrj8zT9YsEmehR7zHB8xHN4fGCpTUuNXpCGnsiDAdtY5AYD4xbPtp",
  "key29": "3HmQvYnU2pPk4bHiikkLpE4UJZrfW6nmFcAJZN6iY4k38fDqNjy2eHjrwJq6GWb5vJRZqWaUc2CrUVwezLNfu2C8",
  "key30": "4VzTB8wPptDG2Tb6QPYvYeJc58nQupmXegnRC6fXjawrrUwPLsYn1BwC2DdpP96MSENoVfp3CxXK1XATkDdBRFdX",
  "key31": "3XGMG4Cb6f417c1Qi6XYv7TU1NMJ46juF6zTJwmiHc1JGu94dwVpZ9qsGp8K1SPmWcz9pzMfX2Drs6ooAJoSckgQ",
  "key32": "4YnezGfuz5avWtQy1XydruRo4efmaFMTk5SePWt7SyjmW4xrUxKBMfRdh6Y9xjW2Lehja8X2RQYNU1xpwByaQBtx",
  "key33": "2C3Kn9zBX8TKo2i2hARssezXWPkuRVozQHXmwJNTpLZt4WYZh9iRDwCDvrbp89HMX2Q5s2EY25q5K76cvewspsbF",
  "key34": "39kfZ3cak3xQpqVD7mLZHwpzKzZSv1nWE4KRAfDbHcuifN53exVkomQk5xPQqvvZYE38vSS91WnopcaeztBGuiXQ",
  "key35": "6cQJDqp4vwxGuLtCqUu5qw2BykM9hf1e3TpTeNnu5HKSzK7tZrEL54rvFvPDW8xC63wdaqH4CmDADhwQvMHrf4x",
  "key36": "29yy77oFSuT3oobMXCN8kd5ALCUsigYahYzPosV494b5yzka3LZcHLxCpHxucbsyLVKZobikYN9swG6NZodcNMMt",
  "key37": "48m38tHbQciQm4EkrwvmD5aEL8xZ5ucY1ta8yHZZFhRRQBrxEF21pz7jQDrKFvvwS2hWSn7ARbBxnYHbHdpnMNb8",
  "key38": "29WiE6Eh96FwtMMs8PYynreJUPNyffbAh13G7H92k3xEBsLXPWrRZiji8DYnpa3AHGnNrukYM9Fu1wfmFGxCQwqZ",
  "key39": "56UAwWTboJJWeWCNpCiF3nahoe2jRG7fZwuLBp9haP7GGJr98cYKrq5sxbHvoaGigs5WsWPEUdemquTaTs2GDzcg",
  "key40": "fZevDh3kCxdFT4SKLh8iHKNmtDZXrgGyPP47C5ih63okcRrL34enhEeK3xf7Zr2F51awPMKrP9m2tQUPn3iNf2M",
  "key41": "4ZioE1YbS6NhHfa2xnjtLW1W28KZCytcERWyjMan4AUDgvAitEFzHHAoY6h1JoobrZtabm4gcoasuxo1cePYdCHB",
  "key42": "3d8aYARS6rsrwTJpiLtq36pgK2fKWDnReo9vHvTjMxbj1KUb9RPVfxqKaMpgdeoAmooqYcAHU6YLwEtrRpTSp2jX",
  "key43": "2XsZMJ4NgT5guP23SpzF2Ah9Dmd4BTRPAcD6rnttHv3nJ5kkdPhmd9Y7Q8V8cozwQaVDcqGBMAZdpsP3ZyMDLBhS"
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
