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
    "3CC56ZdaH3fq7wDZCt9AUPdCbFn1VoDV5Ve7FXWT85RNMHy9qDs3hpEvzxzFEMRwLVPoUnTqSTG7tZfk7w2j5yjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJLP2jSmRyNVXKCjFjJ8SPLssvmRLy61UPo8dLCZADPkZLg6FZTxaTghcbSBW1agZF8tQpU49GyMhGgdtagGW7h",
  "key1": "2CCyQJ2RHjQmjKV7u5qoFkLC5aEk53w69Ko4ej7QjvpDs6UB9HTU2eFdm6x3r1jfciPHX1i5zB7Fh37Sfoja1GKR",
  "key2": "64CGm4E8EmhHrKbWHMnhcBe7NjNtjb41Dvtzm1RDy3T5aE4s7PepkYyG4iynUvYPgWKMP4E9Ec434Dvno8SpMK3b",
  "key3": "JcaV2t5RUFdDjJoumJPmGcgyiKfQN7mDm9owMP51qByTnGTsC6cvmsbfZssdk7MqrMwtvb9cHVYUWWrtAcsvGr5",
  "key4": "3xVZu1znctLEZRDKULKt8ZuEvtSyf4G3DQUWb4RnJrPKVzXSc1gHhw7pKdDtMSexHeZGrqruvxoQppZeKpug61Zb",
  "key5": "4uzCKyYgY2uu1j4Nti3ULkEhrTEkfdTVjJSdVdmQd4QZCdv3N9LsTZZ2vBkdFkpLCHPLomXkhcJE4hnReu4NJD31",
  "key6": "3ZkzHuroza6QfKKEgazsAfquS3kFmbgFjhharVxaiWTkZur86JxEPzdSSqHspNEdqmFHyUku1pyC8jX7mvAqqA53",
  "key7": "4ECEaNMTngkswuqQySmV8LSiffaqEomyJkVeAnRUW6iyN28MnfyqdDG63ELbMZfF1VSD9xcehugPmnbkoKMAE9tg",
  "key8": "3GAzFWQQfWxuXvqFZZ86XPWEcNoWCBoz2afryeJ6o3wipF285LwzCPQ4FpfbpshH6DY2DaQK7WDxCn7Y9YQmDmTG",
  "key9": "4Fh9CfngZauYDk6xhs8KcGMLKjxJA6teo5NyYaJEWzUpazYLM5GFBo9eVb8bNV71zptYrUXQZaUXjpPCYrGp9DwH",
  "key10": "2UDcX2G6LhkSW1jkFs1H6jDiHiYSTPPFVoork8tog412qN19DGhhiK1DJkQQK9ac2nxNkznuJR4iodwUSTxA6ov6",
  "key11": "3SJ4VnKSkrh7RSaBYny1GfcZPx2RCau7KxehMaAee1FH2PXrLQ9rWYBkCR4UqAB3c3vH8wDTsXBVUNgbsDHmQdNm",
  "key12": "35Mrj8CctSSuq8HHYYFQdUj2eyDgtAtvxdArk1kavEAjt6PTzZDXb6kAkhUeAxdYwodT4BUo39bEvSGxRsbqACpi",
  "key13": "3Pgupg2DEdb5kmcxENxYgJgfApkj7EkJbQJqgBoKy9XUhwYpJ2zEA36dJQfTd2xMzgCRf34VMjbT99vFkpTaM8jq",
  "key14": "p3HYjiQDsDN4x3GmdcASnLTFRtujGyF5LApqfxSzcW5EQ3ujSxGPwkpjCfHSbDsh1QecCgCXUCvY3b8fNAKoJrN",
  "key15": "2AAfJSFn46tMCQgF7eUt9pjwpLPE8JXV8jzfKn57rrTkFwCj6nSFevF4aP3uxxTabSXC2KDW8pUmN6Zna7QYhP9Y",
  "key16": "kpi4qSkjWiR99xByeSaKtRthUcnLJXX4JjY4yMMvJ5TKmTXZvMgENUncREv9J3hvva4KU1QtPGUTQKhiYG8hq5r",
  "key17": "FaEKD5JcKHXyc3NKs4Jt9GsnDBJsqJbTbJpMjJ3KxmcozFyiUZWv8bkvd214SAjQT83MpqoxrhgHfpopoTrJ67D",
  "key18": "57cin7eZduSMYpPAq72S8QX7C3F5nk9j59Jz7wo9g6crKCQxwWZcMbEZCUNVhuQ39MmGgGnYbuX4hb6GX7z9uY83",
  "key19": "hJxUaqpjfJwvU9pafZW8kfSAcpUvHFb1gHN6vWN6h4NV5TwTifMkkMm7sgEw5km2uHcVHjs43YLvoZfGWd5o1YW",
  "key20": "51wd8KSLtQ8Z1zRLg9jtRn6sGhKuWdTGBWTiKT6T2YZfdC8QgShXjCD51WSdknPS1dQFH8pRQhC1NBL5HejTYgfW",
  "key21": "4BE3m695RojvFU22PqL6s5janbYCJ7T86MqUsNCApcdXPcvgXpTxjg6b7arNpUz2ByzVseUSp3JEVeEjQ1y31fh8",
  "key22": "raxNV9ZXEt1QsYQW3rhDiwzUhuJRHu85kurqHk8L6az5fg4x4S6UjfScByH16CZvWyhvVBiNZZfMGHV5SrgwdKR",
  "key23": "2iFikqEkk6nGTVErZ7QNR3mcxU3LKynq9aPnwJVdFGDZsdoWCjhzduM9VZ3cAjkTVq3FrcqdZDUx78aZvNfDHXT5",
  "key24": "56f6yy5ntuV5wJT5pmgWeccBKEpTuW2RzVs4TmaA1g8bvrngaEWBJK2zHDxwcxyo4G7H5Fup9YkyMCBdDL6gc5uc",
  "key25": "5RHbkTCXmeUPCW1SVaAqb9rmMjZ1K2zn2zMciXXgMxaaRSJgaMXeQDfr26RnsBxCuNKdh8z2ceNuftGWZW22BdZN",
  "key26": "4NT5qvsQZMzk5GBWRMRk8X2EoBsshFRLxwLAdUXoKeLq4gJW4y7LfFxsVzE6wGdjs6ZeZqjwTyxzs4XLkmaoNgvK",
  "key27": "4j5WQdLvaTMN7VtUyobmnUbzeezYg2y3bhhyN8Kp9b5v26WHyoLgVpHbwfqhYNY8Tw85KrYC7xYsuNnAQAzrUkuL",
  "key28": "5viyJjYPbNprLkz3zwXEbjADYxdiVuXfrSQWF1yjRzFpkw7esk686nmVtfgYyYAgyWvGysLizXJP2juPEdZrPhbr",
  "key29": "48ABq9QVrPcMknuaCmTbxRGNiJ4Br93Vfh67KDtoNPJybJFbkqDqMURXkcbmgv4mAuvmfVAPjYUZ9UUbtwTN6MLy",
  "key30": "3gtDfRuF4nozMA1Gx7YX6DurxgGdsia6WDRTJGFnx4AThTqncY8GY6gYtPeztN1hqC9Jc8p8hjPZru1rTzmSx5Xw",
  "key31": "3hkkX5w3TVKm6kT9UQ2vzZz91ZqDVeF8tPzRy9pZD2MH8bKam3pvemDhQdbYePZemfwg9pHRZrudY2pS4v2axccu",
  "key32": "3EzXKq5QaPuG7hsspU3FT1o37uAiD5QaALB9Fj6Hm8wAkX88LhB23ZVJ1CQJqjze4aDenGL8UFdsMZbhEKkBEzTU",
  "key33": "3wK8JfoYoUZUDLfgL1SMrdFz3GVhmMRBEKTCARUHQu6B6CWRVF8QouPkLG3bbgHpjSjXaZ5WyYS1ThtwwjMX1oaq",
  "key34": "5TbGgtqz1ooXj9pbXASMZHxxixTJNMKYDvDuZBRy46ic5K2qTwS3zDB1gXNwmn7s8xUUBzka9sTAp9irrzfsSPyK",
  "key35": "35yudnEmRk4Mq1LrBbnLJWiKCcc9XV6aYkmC54hHdKwGJj6WZcX4Z4vGVwn5FQXRxpK6TPBLGUWBWMX8QvWcW5Ns",
  "key36": "2oVNfWcG3LcNLf4hE2i7eZkVu4mRVcuik18Bt1a7sc9ogFy24ZZ1D3TDG1JwHWXMhQ4RuHr9VUTEyy4UVCCHDwRB",
  "key37": "3cN5gFEqehLf2ySoYDSYjQXWxpabdqoc22yBgjrDEHsiD5JPewGh1HgDorNZr7mxJK1Gztz5U69HXG3Wp1YtzXRb",
  "key38": "5FqBZgknWCBnFUonXzkrUDwYqXJ1vS32R6nUP4X6h2wPQKjwvcxvsoWRjSwyha9MgVp7A7mXz21GGc5y51Z7NNvq",
  "key39": "5et9y9CLVDo1HHEEfH1RBXXYnYjBoNRaDyMrSaE6DCG8W7fb8Tsx2jrgA6uF5wQzfCxwGvcMhht8ajsVhAJ3nzbM",
  "key40": "2f4mgAJWVgaEJxrVx17dyPnxLW1proSZ5ZESwaZ2znDMCezNmAg1up6Qw6dNVwxwecgM1iEv39roUiVdWAvv6Z3J",
  "key41": "2P1W4BMxJco5VG5QQvgWSiWhgGp4FssJNHc6hZDvWtTLmk3eaShBFpgD2v3G3WVwZSeowLNx2bqgizQ4qodppcwW",
  "key42": "2WYQGTbsUFLAP7gA8UBRecEi7h756fBYpmMPcoYWXab5Y1BxAn8y5GTWXb8gGK7ufvVwQRLfPHP1V2SkA3GeiKL9",
  "key43": "5gSCNq8oSKhsbqqyjboanMxrqwc3oAn4MXGdJd8Aa6x75oHhSR7CUXNH4srozZCVnsE4z8DPiMRiMYj1mhyT99Z",
  "key44": "2NYP98baHCT5dThvHZHusCYxDrVDgjVrNbuezWviJAumCWqryJBywV7nzgMVp7Bj9stxsFJrKJtzRxsYidk5fcC1",
  "key45": "4DNJ4kGkrudMyomD9P3gftNGH7gkdBC1GqLbo45R39iRBWj4NC38EuD2J5VEQEtk5kdyS7sRoGzAFFg8XDKiRmQt",
  "key46": "4idsnLKdFtzTK2NbjDupSTMXkmgQ4SRt6osuyGg8mcFSk79dWwq2ryiQrmyc5rg6f97RsLotX1dFGjU8q9qSA6i3",
  "key47": "38bPjLTJz44TmMZNZr66RfbEyDtjwKfo3Xf2PNdQJYZQmuQQ4Etjj6UHcvw23dgVepWBjoFHAEmxDJ4h9sPsgWcp",
  "key48": "27c4xadjYsFeLKgXiA4zcrshcn7c7Dsveqeqh5RuBnrfR5aVAmEvwYQKrtVRma3WkHhtJo8NgLu58HJG1zRrYD5m"
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
