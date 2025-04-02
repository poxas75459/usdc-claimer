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
    "6iTvNbEVKGHHVxvAeeqJD4Vw4EhZGJgQAryHSZLWepNAxQ5S6Mu6RBQSkJPKH3aeLP1oasnHEmc9VSvkWysK6i6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUU4FrGGDmjurmttMmGwUEApDWQDV7VdzEYaEPd2svtu7yWcqH22LES8Mzjyu6Hfe6122GeTB4GaxdJsmxCv519",
  "key1": "55D1FVLX5Bv3iAxP4yE257KJXb3DkVA5XbCMXTwCRctgs7mNnxFTvkhWPhqU5UtxhMUQv3Gw4evvAs3wd1U3ahbR",
  "key2": "2MGFgk7o9PmBkejgSZZ6huhEdPMws7vtWncfSGA9BKsHc77VdkVvUur6bLKehPM5WMq66o3Gj2deE8rf498wEQtD",
  "key3": "3UXGKkuMNqZbAAXSi3yKmpifMrJikieeEYq7hpxzm4T4ZcQShHpgHF2i8iARKbh1LPGJpnet2cmoTNCYsaykDE1b",
  "key4": "5X3FbYbwrTrR742B2924QjudkFs53TZDeYQN9USb6c2KBt3AA2Xhc6ydscgUybHgwnDZMGmRq5CjQQ8DJjxSy9ZS",
  "key5": "5pEhvDUyfmtsWZKRFbdwVp6HjmWuGaySTiZeJHzjgwfuWuCgXuDvGV7d5FzcJ5a3j63R6jeeX87SJxHcM7bTwgiW",
  "key6": "2bTHZV9UxhmJeL7uSNkfJ3HbBydpZuXCTT612ta7CTUZUgiNrvzLuUCGrRW9EcWpFRbqMUwpzuPCApYWzc2UAkQS",
  "key7": "4Q77trK1tB2uyTjuKBKYZtRcDhEYHzcTwP87mk9BNg6GkWehw43rprdbGVS4ufkpzSRJPPFfvULACsuiGczuYc3o",
  "key8": "5huXDGh7VB37zv9uVbNmJwBxQmawGndrrSsXo5uF87MVShmpNPUoyXmddBeUwLV8htepttjKr1yt6yMoeY2V5aff",
  "key9": "2wMWAPSUTgwwzPHCJV9PgvaBkD6pkgPB5DLyhgRa5GHKCCffQqUAfBQVZoM1T7zihD2bsStCM3MSEfmtPgvrBdwx",
  "key10": "zqiXhFzTeVtzRVaMZzcG1s4f24FnQ76kZRY4tfTCQ2zpfZyLXtZnYqbk6X3q4XfP6a9BRDfxY73SsjB117GoTUm",
  "key11": "2EyU1N3XH2Te9sqG7usKp6dnitt85rc6EGikwQiGbwb683XBn2W4wdZiTqG5JPEdayb7ULi455mZjvCQByQDWPMV",
  "key12": "3t8775msiN8nuEq7GAccMQKhE1LCAD3EVpYgocxTtVnTBuhTywiEEQpPEDVexaizHkJ9Pzr78YhcLi8eXTvn7hBq",
  "key13": "5CVPwYN4taYHuTKwME7pfgzkPYcN7W2PKnBKiENcBK9yNSb3tczibNYit89GHYkr7ecakAsyVGZ9sTYN4AMGv7eT",
  "key14": "552xZQjbREZCE3Yk4hYzBiCWxBVAcjLh9DyKh8Jfc8iAUuZiKYnMHK827wEDBnVuUcnZwZjgP1RP2ogQcFSbYZCv",
  "key15": "otXmTg7Yeb3pAnSySbXfr7UVo9zXAvTak5hH7LVgfE68xEL1xMVGyX3RU8JuxAicxHjNGH8zye7rSsxZ2RF5X3p",
  "key16": "4tHGN1rtvrSuEidNwWpuyTesVB1QSp42sVrscNqNRinAUzNwavDVC9ACHdxmPM68GzyGFWufXbbUgn8EiNHsEU4V",
  "key17": "2i6zSSaffvNixNcob9RKZyqvJRGQTz7rbLubyL7ioMtN9hjFhQyHnY1owLcUo1w8Ro7xXUVennrYt7bzXh8JCud",
  "key18": "2ZTaqfZptzw3hEcMjtxP9AoTt5zUxUAKPZWxcMmB48vH41L2zay2PgG7eai3k7sVeevdBLABX6nfEfpREsaN4rWF",
  "key19": "uqnyJ4YaDRLHuR1Q67z17dWNNGVGfmsYLkBpu96ThzKQJ9sAuD67YTWbn8Mm5VyzG1biCRX1KCHwtuY2woFgoys",
  "key20": "31HgAC9kUvQS9owW2DGsmU4pDJ6qqw8JEQbWDtiP1SrmCfFx2cU5p2C58sSMFYmenQRH1phuqVCtEy4dDv9bda9f",
  "key21": "5EwKtjbfcyg1Zh2iKAoXDiKvUwtxLzuKnmG993LpgW8ZRLRmHU2LAUfHPUbsiyNtHS6Vzu8aZta6TMc8eVS9UoWT",
  "key22": "5Wg8xbFiiBPtdpYhSJ4HK1GjstCdYx25vEcDggTa4YpSLsoMkVjXueSr9Wfi41v8coScYhKfQWAHKa7A5RofGVzc",
  "key23": "3JSH6YC9wDUDHBjXpLeBXtRSyam4wjn3RwwaXmKXeFy1E9RsALLfG2DZPM22Yw4GUGgn82r3EVDy3dV8TZWdDECK",
  "key24": "5FEWufy4VmR9DYkJ4NeriJsNYrJVxqyrDyX559wHTcaMYLspJxYJfeoyTzWUkiDZVSAPKPKonM9u1iabrCPVbWzt",
  "key25": "2zmpUoEPkjS1Ps5LRcTzmjXSxJQ8D93Y74djq4W1p6g1n5R64ZG4xTpV9ZZYawraa1ip4TAMz8LzmLRdgDpRAiqB",
  "key26": "54kH4rBkMXy7Qe6RgBgb8RypSyWxybudxTN8uHJM1wz148xp3qN1bJmSjB1BaBrEMgA359z9n5qDKWg2YcetYBJU",
  "key27": "3AYYUshDmVgnZ55JG3y64FuxruaapvBkuJp12JSLut6qNs39iqiq7mniTQK5H9xr7uf9v82wyzbUfc9LZT4u54BC",
  "key28": "3aajiPeGXm7DNzEeYxxHrJPXn9QScRRYgrfB7UaDYt7j9SmAof4Y79Nguq94Y5qREBxJ55687UQ8J1DT2sDdvDUN",
  "key29": "37TCo5yYH9X8GELWPkzTUzKX6kpU2xgEKTkHB9fJKQ5ag4SoGqhQf8mZsP82vNBSNrfdKbCtXdBLevN6xpgWhxTv",
  "key30": "2EzEz2uEyH6r5UYxcofYR6HKexDejGSGWnp6zETPLGJu5iSY4QRHLGZjJVNXYt2HDc1nVTw7CT7MyNhaJqFtpjzT",
  "key31": "3cLpEf5n9YhBwRnsGU8mZ7JExoZ2sZb6FxCgzjE55yeXU2M5HwAKNSiXWhxnsYyzdB1rrRv4eYYEXgqYUcrhmdiX"
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
