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
    "2fcNjsB9GYVjAFzsaAw7bsLU4Sq8PWm6B9ReCP5w4ZcBGQ87UdVQzzXTmVH4Uj9hjx7T69iCr82HgQ1wAVnnTWAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GaLrjrEmi45pxzBrhtFALTvMpxrskaeUTTFzzKqZfagf1uiiCWrT5LzutuWJSybHPXymccz9zs34iCAkJNgJHb",
  "key1": "5BxsBHmVu4j7PUuJN8QrfEzTZ4saqbUfEcyi6SqwHW2cWsMZ2m4CsTvPwPwNtHazGq9dyH8zE2aD6AmUqYiZbFd7",
  "key2": "2P6Z7Y1wdRVePayUSm1y7q1Mdh9gwFJyWB53K3uJHnrQKZWFzyPzwajMSvaXHhLAF3kZd8uwL6Vhy7CTwY7Nptza",
  "key3": "AgEzJDp4BHYoHNdR6oe1bm5Xmx4wyEPncNf1aWsMuJCd73rLDmLKp1YuoSZ69gKfauYhLr7r9cy77UD2hVdiBsH",
  "key4": "2dBtBfxC58zLB27xSyW6McT2mYxZCLxdMb1G5Gvw9ggBjzKFKFj3hjPPXGoyPmW9bgA9gYxfaWJ35wUg6LEVn6Ry",
  "key5": "swYwZanZ5j54L9d25pd4tGt3qhQEWSczit1V7jjyLU1McZy5JbYnMKjfGAuaeYNNxezLHcc6Equ8mBqESxJ9V9a",
  "key6": "pR5eP6hUKQJkZ1hBUpuWmGr4kHmwev3KW4A553nh6MYP53wJXV1qZHW4DhmkdvtY72LSypLHNWG2dZfj4A9QN56",
  "key7": "26BdJztJ2iXfVHsZFgdCz456Z7qMfxpV4RwCRgr28dC7HkVMruPxi8qQsA1o1bxZPtB8TFgmfzPebk1X1PLG9dGw",
  "key8": "4bzVBGz5QE2ot5Y7JU1XNQNWheWV2QgN2UNhEBfeSvzSU851fXgVxhY2pszLPnhhX49hyY3gSVzCcJZSS2XYARrm",
  "key9": "5Y4GpF9pC6nNpeyY4ZiznammyshjihZjuxQGqiDMsqizsKJa1dFhWyk9fqGry5xB4VVLpHa1TSwJappaghEVKyTN",
  "key10": "5D1MSMGt6B6QjLkYG2A4frRtB3U3NUpg4AMFacbZHskKNhvo4Pkc4vapj8tEtvWtFzA4SHigHLuhxYV9M8gwDMPa",
  "key11": "4oq5dRtVKqujUrYx8EENtcCxCZeMeMVRvnc7g8mWGp6LzE6C21kJ2dp2BGxbLtKreritACqv3YEBXNowmmzuy1h9",
  "key12": "5F6BEt5HMu9YYxGexaXgVyX8sTG3TBZKRQ7V6jzFeXwXrub7QGJ8uD8hnXSDv4bSqr6jf4d5ZjiRwzMRyX7cYnNd",
  "key13": "oWazqBCixCrfr7KJHKa859yCHiQ2AXLmdSyMZoAJD8Jf2mg8MNXvQUG3gMAQKTaJdemxhJNjwMQEA5TVFNefKaN",
  "key14": "yERt2DCZtC4W5eUKzWwGefaw5YjSJw6BTZr7gJPtPhmqaiRv4mdq12bBjDb2Fozqf35bSAhSPTn96V75apUCkn3",
  "key15": "2G4qpTQohpr6neMaTu2jx8baRb3aEUKdKX9a9jebdyuuWDY7csvKcSHxqXHxtvDP8JcT91ybe9Hjqpqw5K8GkcgE",
  "key16": "5RnJJiEfSaftEYcEVQVDSMg9rtwxyvjewzNZr4KWhkWgnWqepigCrAnYumuF979FxXCEx9crXjbJszVsrszLqtEf",
  "key17": "FWSYAhQ43YJGZZGBqr9x1aSP4sDwqXCgLNb9bXBJXn2Pgovj8xySDJEza41HnDUZW1sxLCFXE1SrnkfFKqdpWjg",
  "key18": "3FeEwegK9XE8Z39dcbwLnV97RDVotR7gQnd5rNuoRBxsBVCW74pNjR25HygaTLsZDvRZAebfC555jHwMccPgRafa",
  "key19": "3JCJiaAFLAWEZ6ogg8RxGcDft6gbSkp1ijrNzR4QGQRNmpr8UQt3QK8b5x5E5rQhwQrhrqgtJefxmXZpJGiwPi95",
  "key20": "3f5Bj94D52MH5QnJNQzXKcEqfDY8YaZjTjpNM2FEhzJXhsrUmg5BPsk9jL6okKD5A66gXjpEuhFTEFn7dnqf3QcA",
  "key21": "2mNbENhKB847BSwMHpGruZxKzzi7Ao7G8W6kY7FJ1RHEvv1Jq7CGVyk2S6kb9iJZfypyjqRahCGx94vrhUP1cfbg",
  "key22": "5qH8ceLDJPrPjYohSDEgsrDAdjmzas1aJmfH8TjTGicpdztCAaoanhiP5CY5hSe7tCTRB6nrRJS8SP9PJWs7rTiD",
  "key23": "4q2vjbB2rkazmQJsLvc5jdzXPY1qGykmzQPWC2xQrDHQp5wG6RfUeT6vWgsugdeUVHRut8a1vR7WKW2LLKGKEH2U",
  "key24": "2P76bJa7qTdVi6je7ZPx7WEGqAyU6WcP1pb91gQjRezjzooV28s4JbmCEVdj6kq1wzBLBL7WdXXKD5puxcY7Vuqo",
  "key25": "5AJaRazjbPZCW4tWnsZBt8eFyPQRxCWLZWXvwd8zSvA7HjfxUwNUMWiRY341skRAhMK4uJnMhZp4SbuNELqTkaJx",
  "key26": "5hJSxPS1eyW4HhMT72vxy7o1KvVsRdERn889aZJLPDkQneAthUq96uLLGBTJNnN1FD58uzZix9gUtsa1xVk19riy",
  "key27": "4U4rPauC2NvioZhtLBpn2duDyMfaJaNK1gzR9Q1Hy1RYsxbwNso4LWi7A26BvXfA2rezzNZ3inwsnBDH9hPCsiZ6",
  "key28": "5gh1E2oWW9p3kf8qHPqjrVarQdcsBqoSVdbUvQTTCPJEkjPNZNGKuXY6Ufd3ae59xjcw5GF2bL3YPnKr9RbpanNb",
  "key29": "5BopGLMavBg6nh4ti7xwcRtau25XfWgrE7kWNFFCCuzwqzWbCnTybjg515iME165t5c1EqatSEZ8QhXEaUEvwtkD",
  "key30": "2vdZV3JXRdyDWRs78vBpTfCHWvgCVnP3oaPCCCAYM59iNbVFbVqqYy925tQNM6YiBi1ZArgjsdJMay1fEjQKWSAW",
  "key31": "3dcBMzAMA3SbQJCrwyhSNf8bLz2TfoXdsphG2ytj1CwuxEXVCfEVhYuXFhwy7fnsSoFte8u1rJvgFGZr7xJS17z",
  "key32": "3Rxo2BUBtqkkYCywPFTXkpwvTiukHKtzyzXebCChbJYWVyKGkfuXGqNPRHg5X2SKpXjZmzGydD8QjMKZiT17khkz",
  "key33": "4v3Lcinom7vGBbo4YmYSfcX1nVLrovgocjnfGxEfyYfx9kdHVHgRDE6DSmuxuLuvtrB1ka1XNsfM2Lz86Rcd8riY",
  "key34": "iqFipc8VnsiGYxdy8Rv7iZiw77kt4idfcYsrBUZv5rofHnYKrYhH4N7dYb9edVQhe4vAAXxNg74Cz7MAVfvHjcM"
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
