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
    "4KuLJBEi5rrp1Huc8jz13K8JSp4FzSvaPbvdDb2YoXnWGkkqyEPmp3QkNuHacpEbkJSbEQnADmzd5CaJom7W34V7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kicZTNTCa8NC16Ag7q7dWCHqJpr9Qd767M9wrdC4Zv87bxu6hhoDvJuPFV8q8n2sCKXTFXipu6CGoKhToTwi2qU",
  "key1": "2erggmj5LvWZyrXZmdHArdSAQpx5GPRfMV3JnJS9K4QL2ETxFpzvVnWLeypD76AQBukMwRFv531KgPC5JGhjMSYb",
  "key2": "2jitbhKanitHRpN4W66vVyuxBcXVSn36C36QX5sAfS9foXX2trht7HXjsoaezPujJTtyQKMR1Nj5ghvFfQf1dHZZ",
  "key3": "6rVrfYzSwmyUphFwThJhWJboTq65eP51Qte6eR98i3bexrxYKxHGp3Tfpw82BBzxixKdytyAet7hjGRsYvxYsju",
  "key4": "4No57UGPmmubUkGGmxBvyGWAh9bboweht82EZFz5ugcU7wtRTwTRuiFiJenkGjD1Lsg1LZiFeYTu4EYToh1Py1pw",
  "key5": "5VnQvX4EFi1zq6HFjiDo94JFxKM7Bs6q44Wk3SiXo6DTQmXo9bfsoGicneGyEytNE8Z7FDtPLjcqTA6c2JkwvmZN",
  "key6": "3h35ULQLk8UFZbaksZ6agRtxdz7E5UKEfnNEcmvbSR5LVs83qHG3yMtmujyDDCgpSdHXNcXiLUhL8ErcSLm8X86L",
  "key7": "3CjSaVNjqdan7MwLTquMiGF1e35va7QF7Z4aeT8EEgkGDx1ALV7AMNSjqbUm9Rx6WvmBFPhWy6mEF9kxfz2a9Z98",
  "key8": "4tRV5tjgg7kxBLm2zSuHmTguVb3HVxns9pNJUdXJ5FD8LsGet5oVEn6LGg5GnEUQ1GhfxK2jjanPtbtE9qzYYi7Y",
  "key9": "AzrMsBeDKtopszaAz4qG7dab6cP3hdrKsbexkhdXufczMPJdkYH9oy6eK8hyjcUG5TX9WWevsLHQFnkT2WpYHQ5",
  "key10": "2EEesw2UgNEg8rD4ufmxphHFhxzdWo6UhRpfBvp32CmuULwovBxXZJkJfeaWuUp2LeU9LF8TApQMwtnEqUe8TMct",
  "key11": "5bPynFjNLTfrBf2q5XSDkEtS9HNLmdbVSe2DmJFGmXPErd83weM11VBjtiZ6Ci8R1PcTG5sYimziPseFN8rrmWYv",
  "key12": "bbzA9ctjejETh5Qu3Mga1VHNF9ym1sLRM6xC3GGumcG4zaxXgwWPFL57uqXK8huLhVc6GmKxnKm5kYL3VNdoqML",
  "key13": "4SSPzC4uF6seHNqYC2S9f9FpVQom1UiSoUaGEmr42um5TJmYPd4396LrgpisaK8E47mJiXEruppgSxgkVbW6fDqH",
  "key14": "WPshoJaWmKFajT8TQnbqBn91XrW5yRPc49CxnKW7CKFnUSJRPg2cwHQgYVUuuoM9Wt3ctyXVtes4WNnCmYdJpC2",
  "key15": "5FS26XZrueP4hd25ZJ3oKritFsykCAc5DV4rKF6a5TvMzTUznrxG2cQ5mnqhshuU1Xo7xdwWgccYFLnXXWviJznN",
  "key16": "3nV5Bau86Be2LhukQUmNoid4SBngk59aSg3Wmbfz5YYg2ruDdQMJVAUK77SSPMtjGZDRyLfGXiiBxVwsRt1uYZwL",
  "key17": "5bPBzZRjnJtBLSTkEE85Sje4vqouxBrSg5vak1BtqmfY5cWrK9HmMumwatEsAxQt2n3KAXMiqj4LUhS8R7mVbKyY",
  "key18": "HUScC8FtrhRT85CUKPLMsJon6iRfBwvctnQDCuAXP15EX69SK5b2dQMwGWQbTaGDE5iBwzD3Te1Lx1grG3cHYjU",
  "key19": "vKR8goPUKjzeqgg4UsVgPc2CRZj6UGh6rCXFa2GXePtvEJLhS9STZLWMfE2coj2SiXV8GoFU52YTx2vBkrDcpUk",
  "key20": "2ZgrKMVY7xsNprMcovfJmdcyRxycJoCsKxvK6zwtucqb2g3kUH9EUTpT3dd57pTdw8LhtiQg1nKCNSJY37gZFNco",
  "key21": "3mZNQuDqV4BvdwDAs7czHRxJBjpG84ZZ5PS4iV7k75pXvbAFC332gwmQEHdDnErdZ3rSyHURU31hVQCGytupNWKm",
  "key22": "2g3zxFj58HLRwhgn732nKLo4gX2UkJ9E39G518vryZG9h7V5dkGLEs3rQRoVs9ya5kWiK8gBqFdG6QLzRDbcsd8o",
  "key23": "3ctLk5A8HnpP12cnStL5TC1SWCCBwgqE7YtxkC2dXgPM4zexWzAKwikdFYXxxNM64BYkuaRCBy741KcEmkozGFL5",
  "key24": "2vWSFaEXC9m3594mUgC3RHBZJiKLZJQ3swseB2jvPUvQ2TBepa3N6KfE3XArXXyXosX1yVecD8vBfN6qkt8iwrAX",
  "key25": "64L1wXWmtFf943ZqPgdzRtKGp5VUUmiQSi45KPqvWZGB6DGnWGNMf8nCSVTC1dxEsKtjL8XF9jgnunnXXnTJWyHc",
  "key26": "5n7ikhqbjeNkAE4M7cfxg3HWE7BZn18szDHu9f37yfkJuupzaZusj6uzdbGeRrDPSjNq3wHvfd7fL7DGkiJkcs4b",
  "key27": "FYRceFHRZYdm3Ahy4ZvRsPMUZZ88uc3WhNiRRoBJQDzCW76y9ov1DEGP68549aEvWN3vMYHNAy1r1Qr2vRxvr5D",
  "key28": "1qmQtsjFJhWCdwZy1zuwzX338B3qmxCaGYwz1EhQc8aYeuB7eeqNr2J5kqQiy81WmjpUxZPDC8dKkcknKvadhXJ",
  "key29": "4sfrQkceoaiDXXvmVCbdT69Z9PQmF147y2wb5EHprPRGTUDSrxQC8VFgvSri4KgNwzXZyY9kQskFpLnNVTHjd2hG",
  "key30": "bNW2KVmnaVRBjWYwLPsgRpSW2GqMqySfJhdwDD7wFJ342XwmNJ56kH7nQ8J9BTuY2srJ22HLwonox1reXeeo6dX",
  "key31": "KCjc4cnA2A3kmc9jV8WuV7Ycxp2hpcB8MigAWtmyY6nQZthSty5sYM6W7YU8wBkZEj1JtHHnxyrA3u8qLbkW13K",
  "key32": "2uxhWctBENbJ1RFEwk9KNTZdVahtjcBnsujKwHfLh5VviDdXW6QPtzUSMQ4zEL6p1xJc7xeGUEhyfe4ZMsk3su19",
  "key33": "5P7o1YYN6UHEoYvwWA2cBj6KVqiUxChVpqqTaSoHWAMmLEfRhFqUPCjfPHixHL6vK4veRUXWFh8RwUG9iaMGZMR9",
  "key34": "321eR7EYfJF4QR6yN3Bu53TVkwwAHmdvKUuxoBahGZE4WahdM6DboVn4PVd1dFrrChL7GiUndAHU8GA9cEek5TFu",
  "key35": "3gVU8AKQfpVuV9mRqAMEBnT1k7JW53u3AkTYw4jSYcA7WG2gdAXpVZVyGdxEmKz7h1oLPVJyoE4xNbDkZQR884rS",
  "key36": "TWCz2RjiTeaMA995fZNgwhqc4wazdYrXS5CUED3G7dCqiZF2ia88QGccNb8xod1hQZRaviK3qTq8sgFW6r5jiae"
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
