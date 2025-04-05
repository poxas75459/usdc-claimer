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
    "21ALbZf6axDiCaNH2oVkLMTxfP3RN3JegEaAWnGTvnmFaEZu3rftnt5vnrkQQrqWe1Pw1cie3dfWQGyc3NomwiuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qFd5CcSQv9syScGUQ8RcD8MgpEAztNzHdVGsCD7MqpnmofpNB6WjMgkMU98icSdF4KL7h6ThsP5jr428rxDvxUN",
  "key1": "U71aL4E8wnK2miwSCJHxh66B3aqiCJPUeXPQ54P9x7BX2H9ay3vep825FmpGxizQEqLJeU1DzPFzfu9UQWehVKM",
  "key2": "2TzMFc8F2C4intoMZCSK4uyJQRFXR9uUW8r4V2hzmUBo1qjaX9K256Gyx5kWs82frP78XkdvVkGo3zkTcmrdCWmo",
  "key3": "4AcGnCJiobTRB25NS9wBRpjwLvFutAnjv3srzXRBPkpKymnGVKFsES34MkQV9D9Fp4n6rJBsZv4eTzprCX87vnve",
  "key4": "5LV4QKvRJuZARfDftonQ357nQYfSxheQTqXMHFYeJcVJFRbmah1VuK7kq2TFx24CXELJR3KzV5h3k3KWH4RrLpXk",
  "key5": "4Wsc9nFjLthL5cv4QvVhnQNERBhxrNnXdkvL9xTR3KQp7JyU6eaDjFHLLY4yed9EP8GLoE9Mt3j9zUk5PBhwK1hb",
  "key6": "2JvMk6xYxeN8nKAkbpivCba15iofochNTab8hX344F8dNw4Xe54JTLY4iNbApwqxWiwWt1ZNhQfRzxQnUvTsFBxN",
  "key7": "ENfFrxAZdCh3WsZHGciymBczxZ64TEhP6mLvpKNt9TcZ4w6WbAXxmAUTg5hJfkTG5PtmH1HqwCf43ki6kmFS4dR",
  "key8": "2P8j11RJ3Cx1ptsxWDDoQK8KyP7ejPFMP3qWD4znMnioYQZ8cZJmbsUU6hASdnM9oEb8UV9QzbD3iVU11Wpftcqc",
  "key9": "kD3MErtbhSaXof6uNTTpeuusEZHNMT3gMKYC2zZNiqqxerG5bxJZVQe6fLpRZxuTdMTUDsdx7CbZjUV1Ni6NZF1",
  "key10": "ZuRDK6sc3kizdzAuwUZksKY5siFgKc488Zw2DEU3y8NSHk1bsirxVfpq52nrkDFGZGeBA5y7UtxSDQMb6Px4cWk",
  "key11": "2ewe9f177wrpnRR25JfGbax13V6qMRy7Hw4JcstY5zPtLFSabcUa4JFrcjSKtBRPGoRXRoHNW8N4yLipnqde2zJD",
  "key12": "5xHhkfjKsnTStsYYXb6MZU8paNX3WiPnTMoAZQxPgwumy3ULnhCL3tT8a7rBore3fGQHP1AUePWhFk4tPZiG7S92",
  "key13": "5TzLPCLCezD2yDnLqmsiMkPMKH7vgHVamtBrhSCnC5EhzoywFnf1kbYi4E3ijvsB2yYvk9NVZbuQEXN8DMDby1TY",
  "key14": "51hHzCePFneNosT4P79XWMwfqkEz1d66ctj5kMwvCB9YJJ5jDa8kuDy1s5q2yzWTYZ1EwUGxQivTgvnaGpJmkgao",
  "key15": "4Pyb24QdN5HEmqVGX4bq4CgyB59TEscZZ81A38ayWdUjVhSrzWYr1prQhAs1obrzHBKdZ8w5AUGVX7itcKxP6yTG",
  "key16": "3d2RHmweVw4fHCjFT8H34EhJp3dc7UDquqTn7uqnFJQHW7wxiabtqsvMriQqVT5FYkkAzMZinpjHRyUY1crcmcgm",
  "key17": "4iknaQKseAjVAxrrs22ybiJsNU5vNKB9bT1NaPNjgvDvqjf2T9ZpExVZP58UAFc3dqSEM3aw6WQrmabYPs42gviN",
  "key18": "4bbEB3WMfWVLxQVx8tAicJYeBiBkKEcbvYM1t8F46s52v5iXvawjK1u144q6DqTvtZd3WSTUkZTVHNtcyCCxKso7",
  "key19": "58fpGyv4Wd2fnDN4WcZZQGXR95P7G8vFQNBmJ3hvJHkaXbNCw4BUVVSQqmeWUuTKBP2gTdBBF4iKwCSx2yjUkKhk",
  "key20": "3jXq7LfpHTEaSH17BQBEqUk1C5x4o9kQRbiw9KtV2zkW3MFcFx79XVVzx44SSSSjSGzAXfKcVsAG4sKUnjRXLpxh",
  "key21": "3b4zqzKx4XyJFRQXyzR8rn6oihAAHM4BVkJShDNXMc5kR9VSGfZUp7HD1ZDHbqixD8yEejjz6KyXox8dHNVSPEEZ",
  "key22": "3VmPmz5WGd5reQsvekSw1LbjUscijAhem3HTzk21HNEyWDAsBJLiVX8RhB6d4PgFGyAxqm1LwkiYJ1kCVXjF5QvS",
  "key23": "4SdoCJF6nWCRswmDmXhxbjH2pwWUHbXYPWQm1tyxCYYWNQvp1hBF8c2GcBnLLdaBNts6hjRG31FG2rTVzoCkGpYe",
  "key24": "52G3qHdsGdQJpxEQZFRQuTQ5Q3hbzLfc6qwHPHW8vYgz6t2cXqUPhWZH9B5F4BASqSk6Dex899hTMF9aBqgsBP6E",
  "key25": "25g1sjGWp7ZSptduCmcjE1vqrNhEjy9YJUrBQNQ4s7R2WH16bSFAqD3MaximQLuGTW9dY7t2ET6pRp8QYCBtDg22",
  "key26": "PbP3hKRrrYkFX1SuoKjZuyQFY9wMdAJRH1PEqDcARh9E3ZJ7ZkG5AWn1Ckn6eXgh1qSLQqbmzP44dVns4DXDYwR",
  "key27": "5AP7QtVPwZ8ix1Y3gUzDMdUdwTpHux6MZPifgQ7houmvJocd7B5fYRRLt7UUs3FPZtgCJacybUhBTSRmcNnLBPJx",
  "key28": "3VsmH6ibcgZy8ePMyh3J1nkmc3Jt2YsHWnr3MyiMTPQsSeMyj9r8NctvLoJWXNq8XohwuB41R1tAKBXd2yPDUGwu",
  "key29": "tqGVR41pVP454dPyL9svaU5zhg55X5ihwY64sYtmBmL8p5b8BEPU9P12TNwXeqRmTpuY9QTiEVNYvRY4kU3vkTU",
  "key30": "grq1Cueqq9FCX7DWVfaqE2zvP71XGMaY6xTbhLWnDUgBEc4tQeA51PX2482ohtuwtSsXY3Dd5cgfYQAyXPyaxz5",
  "key31": "39HtKUEb43vhyU5fivBnoe89Y9n6dwgkQqdJBLs9RkMgewF1jcRJz1SKD2rWMumc7tc2Whr9NoAhcBmxWbbTwx1Z",
  "key32": "33xgnjVG2VZD143pktxoP4L2oheL5WF5M3Ejd44coTYcyKpmCH6SXMznGgTCaWb1ia7M5iqvehvapUcRJ1BKmVXf",
  "key33": "3Hg9QMZzTMkXqhz3NGRBJ9XoCBouELbD2sFvh2UqdLFoW9ChfZ1dBjnzr2oEVFgW83i6c7PkZouXeGA4tqTrYsUn",
  "key34": "4CzZLTTRkLpM5oRVDLiikLufxTauzb8MGtRQjhvGJVKwmjkPX2vnzXUnMYqGt5sGM1BYKTvqxDQHr9BtL3uvZMzc",
  "key35": "673WV2f4QjMLhYGKnV8hwPk2aYMkKdkGNqj6TTKWUtoCfG41viPVwjoujvQHMx2yDqiD8JYoAnSyHV97yZJw8aLk",
  "key36": "3xtmcpkYTzBJGR7DCL4omhvcsMMnwxqMAoYTVGEnRVzQUhRmLoTQ2coZHgrSmK9Vxybko8DMv3bTJcDTaLMeH9oi",
  "key37": "cg1x834JY8JM5Da7EZMBrdzkvq2RagFRdJD42mgwLKsThK1u9gwczqcjq9hPdu4hgx1NyrTxJdF6mNiAxQ15RBM"
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
