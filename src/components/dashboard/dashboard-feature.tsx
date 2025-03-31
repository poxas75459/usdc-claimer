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
    "29sneJRpmF7xpiR9aDsN4unRapFcUe4ZzdYYndqpoMJhuL1MqWuPfY1rdGzToDLyXbsc9vJZDHM7K6rYmpkPU5no"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMN5zWCTLLdpPUgE9yvHpFJaoSkanhDCL52e2XReRipKKA3v38Gr54tGmdRhGMuQXw1pwTvQhFG6zBg3ZDHDUGe",
  "key1": "YpL7DniRDrzgATxU4GVe8z79qU79ZFxRGPXLbGGnzmUPMkmSwkHRDZwAZyN52GKQDorK4QA3p4KkLpP23Zttabr",
  "key2": "4uJ7tp8poFRzeZwUDr6BiGVmYrmM3zP1ZX86VuSriFApPgY7gpC1KEtcHZqT1WMR9QxR96CpGHiYAHjQkejFrTAP",
  "key3": "uoRu8rtK1FyDdFWNU9LSURyTonHJGK9JBDZGrUnRoa7DqdY7TxSXYMfh2PmCVn4CUyZmnzRd34uNW2p5zXw6ZWG",
  "key4": "3SQ1RFHWHdWjs8LBZsXKMWwRLoDhRH36X7smQ5qHkDiAuNmFSfvksGLvpH96dqxuQ3H1J9r94E7iiVyYgnSjYKsa",
  "key5": "3CUqqxRfa7LEGehghVzcLt2PFdzLwh1UxfToCZnhTCRKixVZFwd7jWyXwhtk4viCd39t7MGLoxjJTzJDxh8VevKv",
  "key6": "4HNvF7f8Ue3w6ZaU4C61DgxJrhXKfMgDwYAxPvPEvboR3Cd3x2wzkcaRKYwrHHDpSgR3VEp9JY5mKg3bsSyEDsQj",
  "key7": "5NHzdXumRrYqsNkdeXiWMq2eSL7E1YhJU77bLGkfDCExNWBX2nwiLui3BDK2JPPYHe5MDAYR51HguKKorJpTyjEN",
  "key8": "115XWtP5EPdWg6ZJfJv2sLPVzViMCiBvop1gQr6C8v84LGjKNj61c55gVNiWRauNjEXKkrcZif5RV8GZvQbGAqB",
  "key9": "3srtjgV7Aa9WyFUsikJkyRqkJBRk2mGxnAK1bGx4Bm7MUWn7NHswrinkQ9xeMWowET6rAyqrMkxzcBxrizZa7TJ7",
  "key10": "2vKQMjtqevdD2CXK8TFsFM6HrU2GcLNte78N6QDx9g3Zvvzk8MrWpBLJi9iduqyovSmJyQMY7M8XoDcBD9m4mcnq",
  "key11": "3D2m14AjTWhoaD1BLMJm7oN4r5S13mLY9YkX3AZeAn6LtiXMP4ZvsXCEX2dBukSURpWD8GFyXK3VcjE6gm8KL96P",
  "key12": "4gvkXQu7hS5PPNPVqVrDyX9JcHKM4G3BcztmKmkMFFMpT2ZzT27QMGw2U25YSpmC1F9MggaBdrahHQbeJPUVGVxb",
  "key13": "2bnzAsCyFjNY1JGuJXHAdVxAoat2k7X1HBqpuoFen8dsqv7S4mjNES5vkPDnoH4e8qfV9V9asJJGsmJyKc7qnGwF",
  "key14": "B3qkPTrSQdvzT7oHuhG6yyfNE8K2hFwdJ7eMegUVspHUHn6ihPwsJG3oTjDDGtVcFa87Xbf9zFqyk1aAQGmpS6R",
  "key15": "5EzSUsBW33Lzp6guxPkwjmn5Y8Dd4ZiufMxywpyLcQMYDowu4FpXFyYdNtQWzy1wB9Ay4xqSxnP3CSUrgjFMY6Fp",
  "key16": "aUyaFsDGLAf392PUR45BR5qvyMcG8BGdtJuJENRZk2hd3X7qWaXyCTQM7jvmazt52SGKREE3EAoDXsZpevHcBnr",
  "key17": "5yzLeBwAaRSdoKQcCXwBtWvNmpRZBTMMhW6Jo4T7dHvYtEEMHr63R88B6dADkeEj3XoZ7Pnhc65obmctPbmfWDrN",
  "key18": "2FxRkcHUkq7UWLQcK4JWp6oGcVpR5BQcVCCM9rxvF79VcoYQpKdLyu4FEZAEf2rri9WQoPoAUAJb9UNvhVn8JQPt",
  "key19": "5Ga3A4ioNyUR2ZbHtuvCx7n4yX2Dxcn3JuetJBAvMJNJUkYdJ88y6GWLhbYDCLerSMgjhAeHFTQGSZyDXi7N4Vqt",
  "key20": "5W3nL4TLvZ65GfndApdjWiueeAEJ3i7UAZypwX1NYV2k8MDAUQpQ38Cf4AjtmWvJMss3Y7QvnbrBfUcBR1GMMm7d",
  "key21": "5PUQpZJSbA5tFpwh6NkWT9ZhvkWXgsNyANQKqjCRsCyvuZCd3zNMYtv7D9TTJyRaDED6YvQfE88qjQWM46p4yvp2",
  "key22": "4uybEEUEEpNQYdEhmLMoeQVqvqVRWSnTAwC4oM1QQ3q3oKXUH3CcSFJjJV7j29BrRnqwamXnT33XJCvvbYNcijk7",
  "key23": "3F5dVDTN8h3qi6tM9ArSYfoZdm5RCLX2kosm2he1DM36g6UNdUcnBEeJ1Uo9b1tHRn9EFhUvVESwmG2wuqmwnqWS",
  "key24": "5iQZStM2kRV6HpwfCAMeUhN6azYbdM134wRVSUEAzJXd92BGToJduCn8uDBwbQyQJjCamNDDeV6QGA5sHLvNiAy6",
  "key25": "2QPfKZUpJmUzuCgSyEJRwn5RdHMRQ4itXT7bNNaQLZ64hXHMPdeJGxkivhSpJpJqfdaRQxw4htTA3RamNj9bsRKa",
  "key26": "5axtDgzt4nLGJikZEtWiypGtfdbKWESi5UW7cGBmTgpSDkJT4LiVJ5U5BHaHmPnt375b3MZReWJ5o9CZ5ewc2F5E",
  "key27": "4b9fWRfdSvwCPkX8QkafzUZKv1rLJX5V7KirK6mJGmkcPFeM6fApZMxpTJhrTxBhexBLKCR5hTz64EUPi27YYbMn",
  "key28": "5BQksudFLZxa2ZctkHRTE5Y8Qm48EsCNr5tSKdmfSwSgMhSAyGcLKY1x7M5GrnrawzUJCh5y4jesvu3VLZN63eGy",
  "key29": "43hWG1rDcGx6PwbLJutnbFUrvy7Gu8qU3ZuDREkSCQFWUdLUM9dcVjY8cBJtwKgQ5g5ETN3byYEc9cYBNSkoLqb9",
  "key30": "22Qjnn6mhbByKgLRfAukyvsdusnskufLPZiyQpyMy72FfC72kAfjMFcaN3ETPQ6AQmtrBbJujurdCLXdzHaw9F79",
  "key31": "dnKRCuAKftkiGtUx8yUHCt5b65SMtHMaoFHyKrREV4v9twuN9iYxQBcnCzKiYkGAsQ3ai6U2UDxRdgfTSsNG6xR",
  "key32": "5Umk2jRFr65jrt5wrKwNiFeQmCytp9Pfsns8TmEn3aqswUWMJ5tnHCgmS4bLHepeQXTtXzg3GrXbgCxdtxuZ1Uo4",
  "key33": "2yuyJhGybsf81ZPuv2YGEAd8qdDvXKeJngXFegRuujyzGYwq9VzSYNAGK9HmiztNw2ANxhmTUAg4x5HpeweSKEMH",
  "key34": "PAtHH5uM5sr25xGJGkJYeC7W1ujNZc41WBAEMYzxEVYXbrRvrBFDPiBQknU7B9ZxZ3kizR1ogEVZyzrzokV8VAW",
  "key35": "5XtTdQcfdjoAj9aCycf6a1U6n4TyFNuXhGYFxnmM6v1Ha6e6cQBswErY2kvycyMHChJvzZS52cNf25YM85bcBTt5",
  "key36": "3wyNbPr1HyVXMopyHKjfZ1SwgNd3xk9ixnwq9zPFK1TdNNYQgpqewB5JPVbSFTr63XsBdL4NyiMFdrzgKT3jnSih",
  "key37": "UVygrJE6HmsiXrDQYppe8Je7H8EMBCgzXNVW4fujWNwqYKakfNYT4rtoJLeefJDbjnz1tqpnMWuCPwP7QGtM2tf",
  "key38": "5G55hABKF1vZ1zdEE4BvWoxCvRtUvBWgaR2hLapLKnPk5cUGymRHm5LXNLgxjnyjQx84h1vy3fgs2dnkwBomMNMP",
  "key39": "3h2GttetEvb8r3AhnL6xC1HPKzjk5gtRCT5idyAhojY1fWSUjhho2do7KaudHhwJ5bqVyBGPVEr4Yi1ujhEmdr11",
  "key40": "5w5psdmpuiFcYTXLcGGxhVXo3iJyKkAytGAkPhhEvgkqHTygHGK4rfxZJeTxacFzQfTTa2ajEpdjQfarKtFUXsuz",
  "key41": "29MpFFWiPQEaEZs3nxaP3E9em8y1u8SYFEPedQVnynMUNAUo5C5pLpa3CxggcdkmAe9NFASjTJ4hSc41HKEw71D8",
  "key42": "25ryUcESU5Jc8PVLGEt8hf916UHssLHyVdpF3ZRXeqjoxc2NMLifFKnzHGeMAG4Ujtbf2NEJ44eMdB5wRWF8G21o",
  "key43": "83jhfzdZzaYac8EhwETDfKnYBkQirDkn3bqPYXF1CikSi9LzrjFtJ3xfwDucNU2HfagYPdT1kFSmPWKuoiXUTGB",
  "key44": "2efWBy3oQuffhrzwYwenaY27ZmfBt4XY2c6zTnwcpwbX75AgrLwjcdH8Av7qbqPquJ5fVmfFMX9JcK7wfviKAVWs",
  "key45": "5yj8ME9BV8PNk5FCkEijdgP8R2ELCEcnTAcJtJKh7qiYcbpwE6eFHfnAHWcJGG52pn7uXqjNjsnhzWZDBr2iZdm1",
  "key46": "3ykRc98Po8zc6UE2G48YNRNnXXTCPpq3uX7TRMPmhRWR9SsPdNa782886BgY4vG42q3eCPeDLLfjgBoFixnbrv5n",
  "key47": "36ZE4FUCWWW3hSwLjXkBkVjqSPpt7riGkcKpD2uVRwqfYSXS3UWkEFnuaPZdxvemqpypbDrJMpnAyygjoedTEWSY",
  "key48": "46p9Xd6pc48GbchaZQuY9uvKT2J3enRz2e8G7rxXH9ctQNHnEdjvJKsRojyCxrJqYD3icNJMNTem2pUqzFSK6YpV"
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
