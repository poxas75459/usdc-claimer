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
    "4ExUFhrfi6D4pyPGv6jkomRbPjiisBvdfDhybEBYMGgavjcKtTu9q3LPim9dYPnWnWeCwA8zkG92R6px4Z6vkVd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t9yTuzWvPEU8reB5XbpXNrtT7QAfQr67AVAbSVPD7h5AW4JaQ5L3kiFWXqnSw65tKT4BbcCtV2Szfx3XT1NChcq",
  "key1": "2SMY8Yo26GWHQWxA5kxUD63s7NZYrMQD3Z9BDuDMSSAmG6tS29X9XQ5qpq2cTaA9jSsxs88YjpKcweJaa2yfLy8G",
  "key2": "5oWmZstgvezbT4JSPViXAC6BcWGc9be2KhwgDMdwsHCPP4hfvisQGuUKxg4GZxdRyergb1MRV1cRAPpkS55KQ7eg",
  "key3": "2a3UVGkkPGDsiC6JP7swecYartYVrn4pWjReXjxyNFkk7enuC42snBrnGmgfJB4mCGy6w3Jy88f9p6UkAm3ti4wW",
  "key4": "48vV7LBHGY5J3SJimZqNjdS1Gz1HRAbbm7d4HvEw7N2Jx4dn8gxBvxtgdooX2eBHWYyB976arfSHnmAoeqgki8sj",
  "key5": "2PNUvHuRKcezercJDmsBKPXarY4gZDnt7wuB3wZpCzSsoQomC4u321gD5ds8DiQv4EtkNzMkrjc4ozWYPzPXEMjV",
  "key6": "65XhzcoaFe9xk3RubqfXs28YNwXV2bnTBzJd9M2bb28NiDFDSAsiTAfXz7NxTZjUrmPauc1hT6kjea7XAtnJtmjP",
  "key7": "4JTCCSUxRBhk3xJjkTb6eS5xPkJef5CEAeAnmPfvy8t1UVZmbUHe2faP6LfsjPGEi4terDUZDSnaQswEdo65Bro",
  "key8": "5L9NK8xjQh6eEU8gRiLw4TRS9x7ytTT9xdX7iDyhfMhEaoFwU3fawoKRboc5x6rgryeR4FWHAjuTtLa6sdLnLb7z",
  "key9": "5x4QEbG9Z71vBBEiesKEfuKmnHsXHYf38bPq92f2vU8KdFTeAf9FPT3oACR3JjQojrMVZHTCb3MLRMoPVLbC4o4Z",
  "key10": "5jeLwcXPNryKoh6f6wAYjXBDoXv8m3hZGtNC124LhUj1fLnktMPdpW5y7Yrg2LW3XEaDPUgtGVJNMDoYJ5ZgBDcb",
  "key11": "5zMoQ8J2aGBU8MhHpdykMVUaJuXVANirFcJHzqcfC77CqLtvDdnVooPmUcfck3AcrMn4uJgXVoJqzYaprac243oM",
  "key12": "5gC3dVpnJkdRN5CW16JYpKipb1dE75yHu1gTgPAKcFrg3mH9wULRDzJyc8B1x5nxzZR2u1FrjvucRPbLN4XXcHUg",
  "key13": "RzNooSeQjLDk25jKb3vPwVvhreJPwm8459mtZCoRt9zhKfBgq2hXmPJoaVuZwKwdkcK4uTmViE8S1atUAa8nj4F",
  "key14": "4UKwoeF34X61LeQkc83i64UGnK5e6gHE6HuWG1v1NviNZgi5MamUBoiEtpWNdzNAhJu6tWV873mAd28v77d9hghz",
  "key15": "2FfTvCCqbpMPzKerHV58oHbryme6WGKdAkTC7Ew4uBqsuzmtKDdak3dPt5sjpJehsqcELn3JWKkWQHBXdft77Qvu",
  "key16": "2vr9TZFsxvLGP446J9LoxMF9GNgu33CyouBMkMuoPmB8nc7f3sWY6cfcqhNUTUXuqmwXZdXaRWWYzn1MghGmZb8S",
  "key17": "37pcHujfzFMYyjKoGWs9GftyR4MXyVRWjA8VKLAR1RFt5BZJmSPaTW8AAhWRbSgwErdmqUKwvnkH8gDTKvry2vPt",
  "key18": "5akB6d4JH3mXDfZTGHrtq8BMzFskCmQSfYYYamtfcRh72Db2xWQQtG5NZPN5qKu5uT2bR8kxjnGXzgbV6AXExNQX",
  "key19": "5JRD2mi5U3DC2ppiZ2i3EdJRnsaQ3yQTEBzLj5isn61YMeQ9txpFLHpKdPZggkQQar27MttNDwtq5uNQigGK1oCr",
  "key20": "613p8WL9rkPvRZ53BNPBCfvSzmp5Va7LJ4ZAbNKXUJ3jt7WAXYJU5KovvxgNRVpsv1PADgSAigf9CrGWvWbJ2upY",
  "key21": "5t1mLmBYGtTHmfWXpkiRpDa1cKQYsqPrwW29ZiYtEwR4Vpc5bhohyA7BQ5cvGUhw3RE3HK9SjWWKAMEyMsPQicbV",
  "key22": "2XuqsDaAXMmhgYs7wSEVY8juvETbMzDNvz1R5KGnfzRBtErpDGvgYK6tVnpH5V7eP14FefSgoBruEuXeyiQw2xe9",
  "key23": "4R6zgMfwCnoebnwWGD2GR79kZu9THoa8ksj1AHC6mWSHXqamuEe5gbqeQagX37MGJoZLkiy2N7GFD73nK7apytpi",
  "key24": "5259iUK6xkjMrn7nEUqZwAJ6Rbg87VsyUz6smnoxsByxMafaT42VRWBVXVmsvgURtzjwYAt2Pcgp71a8CbvHmz4L",
  "key25": "3CngyZqAcnYypDsHZ7ETwRHPpwhuz1fW8Y2H8mNtxiWbv648yckMMgdCeL8Sxj4WhjpMQirNF2BjSwsCFuYtB3nm",
  "key26": "4CDQ8Vq6QXCekohxxaADUwTc6wUGa9DVHzZesrSKJoXydXrMVxDAfDeNT34YpVupWduZtL4DWRR6WQU8heYWmQGj",
  "key27": "59MFhH9EBNT59vEMMax6HsQrE7McfbZKc1x49qfynWKRgjdumWaBYebFQcfUNNMBbGheqafZqDxAjpn46qAfMPCv",
  "key28": "469YobgzmdsWyREm3pQjEzKjY42Fj6LNWTaC6Bojh2rKTkqn4hGJeNSzRRrvRfr7NkAYkiWEQoFbuV8xBGuodrq2",
  "key29": "4mhYLTjGVPsVB27rFgquCLn42SYP5xb4e6ezF3n89Ypri3hgob4irVtePCEkAd3ZRcFP6f8jfjPc56WryTaH83XM",
  "key30": "3M9uvRtBSh6h4mZ3mstqnRW9P3RS2ufdYzqw9wZ8SMJAoqB9Kc9XBQQ4wQieLCqghqLEww7j5uX31zstdMWoCYpV",
  "key31": "2HptUFuvvngsR8ZLcCywfs5a3fRMatv7Mc9gGwc6nBU8vHB87qkvdbDANot1qhfAsgTaao5vADozQTKgvtipMiwH",
  "key32": "4VS7Pmp8TnDkL68mUNmcs8eLrnxyZhJMAVD2F3gG7NGaBgKoYg6FSQtTUgQ3wyhdtk23x5gmMzeCVy8eLC6xckzZ",
  "key33": "jsTmktsVxPvioFXAQ68xbrjuvjKvT5amdumzxPzWuXtYcFXSGDHPNLNMqSuyiNQhoDDyUic9ohVCos3H2sJRMai",
  "key34": "5JX5drmsERxXKn7iH8hjfLpnw9KTBi4jC4BtGJC64uX74U1SL3LLUu47JqVD3J1QMNsyK4pU5UND6yKErFhDwPNX",
  "key35": "4dqAZDneSakGKQmpEh2KbPd9NguDRizJSt3f7MMPTzXXzCBfj85kxkUb2x4fc8h7zUR5SHppyZ5XiWCLN8gdxBCc",
  "key36": "4HRoV72QMRw34p4qzVCPyZVZMAuYDnB2zdtHna1ZCjRvNHN3xWMD3uDyYpSgciHqRiFdNjswUuaprTn9GiNEUiXv"
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
