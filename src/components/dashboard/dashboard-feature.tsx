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
    "3vjrw8ktay5xZt2BK3WpPFEWusAAtTsMYNaNecFy5YNWuM6YqxY5T4wsKP9igxaA9cy1kZ3t89eie78mRoDJZYLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tNXNkrjJcK3sxz6bqoTgeJHyrB2oE5UkFkgn4AuiYfJyshqeee22cgTDjVVVrx6hYpSknHc1MVqectc4pTXzLLa",
  "key1": "3nysZHSDQVKMaVsJfBX4GnrqZMVp4xnQoewpJAq7bD25si48XRD4Qh4NBP28MTHdXpGVyNV5LcgmgczcZvbWwEt6",
  "key2": "4RmCCb6oXCoSbAYrj4ooxLiT8YESra3p7NTRj3T5ASnQB1V5r6AUKNHeWKU14eSueV3C7wyAKPQZsnCx82ZavYUb",
  "key3": "5MZ2kEmymxfXwQiRPED698ddUbUtfE7NqWv8YBgnkQqBKjGC5xvnb7AVfXkM6UAFo1tAfvkkWesPiT2iL6gjSdsG",
  "key4": "4S8HaEbmKmxwowwVYBFDvY5Fx7hFxgbwto8AGp7bn5TZW1E1677ECHj5RZKojo43AzpSS7XrT5hGxbytLaoYSkN2",
  "key5": "4xLAAMhx8vbrDggxf5REYAMPNz87ZL2WTk6FcfLsHdgVLoP9MF8wUi19ZzR4okgg1UYY1iwre3aqXRedMuUgMcDy",
  "key6": "2g2tyQG9UvMyoD393ymAPBVRsCcdEGcxNuyGiR5HccNH7m4dtdjVh6K9gXpavKhajRnTbdwc7m4WTM8qM4xnDttc",
  "key7": "3AuXd8gjH6MjEb7tzDzsLpWXXKPLcayK56F5K8jmmdBN7T1rGrK1PoBps1SbPZtXwUSe2aF7pP91BhhUiyRjLvX3",
  "key8": "3J66H8RyDUFv8dodays9CMAYy1hh6cwVpX621fDSSjJxibsUVAGiKXDjXt2FZpAkczjZJ2RR8Mxe44617f5pboVs",
  "key9": "qLmBUVNdyrBcDYD87qkJXdRQ8VCyKa2Qh6pJJnGEVJhc7ufviXUnwNiwfKf3fXpofAJY7XcWdEgiLDRrV7uYUyq",
  "key10": "fdWvJq8EFkEPScpnP5SHBWSeDVFbft79BUrDZzZyV54a4JZQbiGiEz6Yk3ow1qEXy2NZMGr9wXutuAkDEd7u44e",
  "key11": "2pTnCCq13LZSncakfKCAaAo8nDBg1YoRzE1NSTsCN8AsEndU2hL7iUUUfkT6tppvJBZf324es2CuRCadD8FtnDwE",
  "key12": "624uGyGeQPCyEsgRKYp1RJ13Y7AfSEmYgvL7BQ516pRbYKTcZxTKzhREy7PHYeQfCRAbHe4ZuJcPZKuhjquLZYXm",
  "key13": "3emQmCUAzuVMZ9wbSY76H8GR5fV6ijLgbWLoioLqo4arwvJG5KTQ7JnDTa7UTLhAtgzuutQrCCrUfbQdGGTi4YL7",
  "key14": "3aBRgf2nxwmWXSwMt4TU7wdhWTDX8S8JWegnWtHFWS8aAPdFsdewqh2YrXjGDpW18J2nS31qQEL4VzB7GEy49xKi",
  "key15": "3kxKxzQRQBn1w722aWntkKNpJ9rZveFibQNWz9vws9h65brFkhn1NDaN2SoF4PTPNmEH9G7XD8kLCKnPa5f8JdfL",
  "key16": "WZU5jdaK7dvUfvmYFNfNNKTqRgt4eeTyiUsPBGy9cvpB3GBRSw9cf6Lxtuzh4P4Mqj8NwxBsKSk2oJUwm2iczWW",
  "key17": "4GN35VYnH1sFxmsA7a79v5yVhhgf6NMTZ5VVF4N4dvQQfdLEyk1AoQBExn5HJjkXA5n5qb7b4qM2nvXNWQXZDRj2",
  "key18": "4dac3fGgy5qWTN8Dm4wFX4NopbLJJ2qoCf326ppNKWDW5zc35QVYez2XmBjGV6W9P7MfHeqkVq9iocwKPU8byNoA",
  "key19": "BNXWAPkT5Ey5mLyr6WhyVG5TobWkN1meCrLfYoxTD2CeX8spDjbNdjREuMVjddWo1M8Mv3HsoycSEUgyd4y42WX",
  "key20": "4VSWB6RcevKe1dBtsM8ToDW8CSezUd5x1ja5HZEDeJ2PJeaYb6HUUJULKsZCtHofBH19FjLKv8gSdxSu3s6VGjLh",
  "key21": "29dEQxPyLGr2iXawRsTxqCuku7gKf5c1G91DpPF1UtcHq77MwybUeWTaCYfSyHFEdbFg4ty8AvprrjWEf5mqV59s",
  "key22": "CRiRr8FCEg553ngg2Dvm25ekmvhwuz1ui9AT4bDixgH3qbf89gPUQTNyoavtfcD3w49jw2AUeQMiHfJxVhn32R7",
  "key23": "2npDotKsi1VQkhppJthkLRcXJDeXis63MAdopZc4dVPWmN1BFjudDdrPwsGwpuyCgcATeuTqhS8bh6tmeWosZNRb",
  "key24": "5pYWLDa5ph2TPSYynSAHzKiCtSVbKJvb2dCgpieNJhCetAE5dHB1XszLopx4h97xecCP9DiZjdUQSFG1Ug1HxcrU",
  "key25": "5siqrMr9tvP7sRHQfG1kwTSkmEWHGKra2yZ5XJtd2rjZBUJZwvg22ugdM1PLzL7RbweitfrafLm27z2WVmkFf2VD",
  "key26": "2hpvjG9jJbufUVYUpuB1zCjXYDAVJiF6q7ce57pQwJVhMDQ4SQhYNqbafdkCqpkKXWng25gKTfwiSwWrE6Fzq5ws",
  "key27": "4auR7xQqBzFqWsq2uKDxNJRrKbRwH5B92JtpBWeV96wKzUn2Uts2q2Nocaibys4PcpH1UjZDpD3Kv653dZCZHcXq",
  "key28": "4FpjrtisrLzTfGsHsSZq6jegCYDgGdz77SQ2s6R3owq43q5mL4SVTjXtcrfetAn2fzHyZeWoM2STYFA8MbdVr57k",
  "key29": "51uBoGuzeATVCgg9434CYcRUbRixCfcBfbNpVSix8DwfovhQWDzRLCspdTgSCzbGhJUzbACp7awBfQsXXh65Z5ED",
  "key30": "4t5yMhMTbeERRMuRgvpoLYY72tGAwaifbnR15TYUAfvyAmcdgvYMfr8zQhZSrvBuMy6gG1UfgUCGqeCwfEAsmzPX",
  "key31": "3Uu83qusUoJnQCvaGQbBpZN6BAy1vMTjdtgyvXRAhePnFTHf4CqGMr32mmY4gvsKh7dh73evmzpd6ovuQmoeEHBG",
  "key32": "pAFvkoTtBipxJ3rmFECZjvtnWkEoUxxFDyZzGbkeQv5bvSkD2mS8F9Ps2m4915QQ5bb4Swt6tu5Hjh23chE9Fyw",
  "key33": "31uVsFEbkHg5ty4SM3GtF1d7rM54DnvUcAYhufxq6s3E8xcEJk8mubhivQCTVNPTbusrzPTmkMSKD4JMsZTNUrF2",
  "key34": "5CHunaHwfU4eYzkQB4Wty2gvy73muumsNQ6KXDmfJLwpFyXS67bRYGPU7C2gkKgonE7JNEHACLfHWXxNYouHmUd2",
  "key35": "5vhMNnyKYwgzdiWVycZPuh7nnG52Vy2T9Bs2XUJVx4eKQ9rdhYdskxX2qAY5raS3rZgFFYcnuc2gxQibAF5Lzc7c",
  "key36": "3tzfgNW31TnR5JzHK3UonuCyMQTxMCW1UPLw3DDXyDoKpeWWnFWLueqSb6xRbgiVc1qDVVhY4M4AwRa9rXP9uLw",
  "key37": "5d5vjmGwCfZ5dBRNx2waq67Zfsf7iHqXbmQNyoZCY3Wq2dEQ3MN3fsvrok5EBs1F4Z2adcPZXabu9tESK665R9ym",
  "key38": "9jvkb4f2sZxwRreVCNnuV2d12J9b27NbwpVqkxaNqF9syU2Xcm1fV8zJH2PV7NeAFsknELBdeqQGRq9AcZkko65",
  "key39": "5vrzUYNnM2RcUcX57Hry2SGaYJnhtgTJ1ykBwCgCRXHqgDnYEeNVmFFrMoy5ppxfXy57k1EqW7Np8eRZey1BK211",
  "key40": "5iv1C1XaidPrRrW1UXonNxzgUk5NyqtZzgCbvc9riNsZrSQffq9iqc8b4gbPyNnTohrMipKM1cfQnA68mEhTptkP",
  "key41": "2xPXSyHJWMqfNNg9jtKwaxtAyphe2pYta9XRkb3EESw61vw3BT5qNUsnUNNrnr5rWGjxrHR73Miwp9spT3W3pUTU",
  "key42": "YQ7cMzFhwdjNPr1Mscy2qpaKRygXrBcwJK71EaAXmSAWNonupAgwAiUVVw8onvi3DeWWP6CAkf8cP8ffs379ucA",
  "key43": "4e4svVhuH3CtSrdL9R4ay2Xx62H1kj6h9iQR4mNvt1d2dyWbB5rsT1JcVDj3Re76zTUAMeaJUTycXdQHjb6K5Tpb",
  "key44": "3ry1pNjeivz3HYdmoSH8t9k1aTyX3Uy36HzNxWXTaWz2aGrEU4qdLvHvnM8apRks5P1VtYDrFfhp282f3Ys6wyr"
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
