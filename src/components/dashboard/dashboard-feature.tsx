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
    "5rgB5XmYC1HMJbRUugxsKB9MjFLqwnrwwVQztX2tcP5amnoXvKSyzGhtN3iTyT3dGcPuAApDGG45eT5PzAhF2AKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6bzbAdkbb8u1sX5emWZcDAgGo9aXBe7XA3nbWjYwiPvjq5upqkGMkgJoMt73ngCRJY1CYtf8sSvAokXvy3Aoa9",
  "key1": "5A6C8KpUWRYCb8qAktDxssyh46tWFmLLgqrcB3LVoJgahxz4qJJLUugnwG6tpJ2L2MtczRFRjAE2hLiXXBsAkXHW",
  "key2": "3WUzMs9FAUZrgecFPALFR3exUAcwC9qHc4bLRT11rtqUK4mii76w4ArCxrycp82PvBDryreLiBPoDyTGnGN5UF6Z",
  "key3": "nBJDgzHkSEKdGiNGZw4w38Jk2E2TPu3eEUxXXiceZoJcaz1HtmhEBHjpP4cKz6woUn6XnYK1NuCxGJfD8Jb2ufj",
  "key4": "2Eu2h2PbqddevU8VYxfup4NbQ2z23BUAWDCMw61uhJWHRSfqAkgKTLATKMxXGi3vidvhkp1fKpTSpUjDMgEttKbA",
  "key5": "4etNN2Dou75tJ8EvpG5Ls4mWmJU8NBEuncVBk3qPXXF4GhTmSnx7Ssv81AbbX4seCveoubreZB3vZ5BMAjZyQN41",
  "key6": "3dSyomEEWjiAdokMRjGxwzpgzmuX8Q2yHeKxd43wKs37XaHM1me7HTpqjdPqbdh6VLfVVEXHD5oY5CnSjFotdS9",
  "key7": "2HkBrCZAYEbXhLAr2ChmKatSngCiCEL6knp2K1wCUVv4jHijaRg3g8FacmftKjgzzUSqwXviNg3hRzjHJsgQso4k",
  "key8": "3UKisVMhjhGGa3TcjnwNv3MxSNCHMNNQpEb2Pm8VPy94U28bnACht2vJerQbfysPQRV682Rhp1cVBamu68ZDXoLT",
  "key9": "2mDKxDKS6ev6y8XvmWBeSYRLBmoKW6JoYEzyKdM2BwsVBf2gBZkTRgg14xAqBXpK6xzKkNGXaEmJ7STmTt7aF7h1",
  "key10": "3BE4YJfgyQV38pe2sF5QZAje9jE3UN8CzyZFD9UjrYu9tv9cvxBaEY5Vj2sh88UW6bKucUmkes2EZzYzreRseGZj",
  "key11": "cda6dXXPAHn37EP6KQyi4LzsaBZRp3nBw4Ad9obZM2jmXJf9LJ24mSWsQdSnUHfhYtPyHXCq3eSCVYNySuf7Hxz",
  "key12": "3yYGjrWK339dh6ob7guYA7obprsnxrMjLo2KL8NBebHnjScNJdQSP63DMEC8zVbmbLLdpr8mSBTGuZumCu5eX46X",
  "key13": "4t4zAr3kqAjd7SR5GjQeioKxas8NHLy5MrkK5wBCZpd4NVVb53YNbRP95ZqbSeH6Y38WoPt3TkeAcsdg4phaZZqL",
  "key14": "5gyqNqwfhioUS1HGkJH6Ajjv3DvpyAxoDdPkek7ARK4hngZ2yaqiRuZ8aivVEtcH157BaV6sqvQDdSVfFU5aiXPC",
  "key15": "2v5gjwpEqx3hhAcDMV2LRamSFqRozLHGKNYxRrNAV29MJYGpDrb7wKMJbDRDQctYUJ2gnktrBGQGq8WMDHacnxvc",
  "key16": "5ANWiYvoUCto6FqezYsL9sZt4mWEHuuwYK4dfcueXa1WgDjSikqKPuqjUc481fKzNJnnEcShbbBYVY6wD3soWKN2",
  "key17": "51zMp8FeCjYGBQ2Pt7HFox4VYETsgasv1kdyzeM3kWuB7fs7Wu4Tmww9if1u6KNqH4gP2eUFVg9g9RhHnPW5UctZ",
  "key18": "2kjeY3EPqGuxjGTNmvZtsBbLq1vXz8ZRw29MR3JM7wGX42oN5xS7aPPr37ybzgTUaW68ZVmS4EBzXfTtiyqQZhjY",
  "key19": "4acXEJSZdURd1BK1NPw6gUUv8AwQnqzLaw58tunZ5uoEDHZJJaJXwkh5HWpNkz6gGcaycnJGUEuwJtmhdcimL7W1",
  "key20": "4bVvihZEQAgCw6wmGKNntNdbB7UK7VbSd3inZdTSJJo3cLVCrDPbTCv5nhcFhdJQ3QLeFhzz1f6AtpsQXpcihHA2",
  "key21": "dAiWLr8Hc222gnknabwgi9ZGJTuAf1THxgQGVnxKUJ2m7pwM7rjgZ9sdSk8EYLuzvnTzr2dTjLepPMG9L2pvCXc",
  "key22": "5MunMAZUVmmW6FJUcKpoD6CVMSwnjmzrfLugTPJUA2cMZV9cktDVYv6T3r55PBYuJvameAe1Z4WaReMD4SyvJaeg",
  "key23": "5yRaq2qyunANB2yDYKz5zgHE1heNy8BgBzNLbLXM1ih2B1MkNYWhmuU1wxYRUBaqZmzUt5Z4ZPmZxdFGvBh6r2Ei",
  "key24": "5vWiQ6kPerwtTXKp8WyjKKC33D5WkN7Fqc2w14DMi24wDEv73ZMMjkYSSxYDbYX5CuTqrZGhJ93cSGYHcTLTne54",
  "key25": "2AMYs6WhaZrnBkg7UMASddtaMFaobb9JWPyrXVSqELroaEMcuW5JWez8GhzXas1WFuRuPZTrVvdctuf8Ccr6wyos",
  "key26": "5uyZg6EdtmBDW71RYgP2kFLhrc6RrtbQbZNag84VVu2MjyHq6my8ZbQ6CmtS8abuQT1LDt76VSqQ81RmENUSxHiD",
  "key27": "acJX8npyo4YAqjzikh7iTXWrT2Xv23JqaPV3A7jnXaULpiSeJn1rrfSsQnEh6dQr7fCbMmiToYLSPJAoaWbCURA",
  "key28": "216534ymtTr9FjYxMGhKuVC4h4EZvC1KXswKUpHvgGptxMNDxwaFkGcFZ1S5KqBhguB2seDoFYWeVkZLED2GkpTa",
  "key29": "3UdzBhYwqXefciiFfgQVWAc3WQDpi51Ffg6V3H8BsMinzb5YmGzpEwp7MsDSS3AjKL9hse3cN2YKiptkd422zYL9",
  "key30": "2WZo7GqJB8nv3xJkroCNE6nmPM9B19t9Ve55jcmB7xU7Z8YRXL11a9snL2j32RCZH7sU41kHCRTdyJPvHAshyWpe",
  "key31": "5U8jUiNoJoZDZtSB6yfQkYw7FnV2PcXyff38NKuhGEpVnwMTPQs1KNoiTjMogNjmyKin4D7E61LormEbsWhtqjdV",
  "key32": "5zwmQuZfQWbhPsXdXnW191ouKT4x9Fg57xVZQHakVrjM6r7TdPyeJjDhBJFz4CB7wFW4qwKcMQrDPgfRNTsesWDq",
  "key33": "4vpSJzvV89ePJ226Lw4YEpZLoZ2gShk7N2puQm2jk6xMf78patUt1Fi7DFwcttew5cYj3k9x6r44DQSeK3oDZ2zw",
  "key34": "5tZonFpUHmAkFs3zRDSnENDtHxisojdd6v75Rj6Qhsw6wakzW6N9YFKwXpeXnwsJoJgF3Y5bU71dRqsAjmUwenyp",
  "key35": "3gTboxsmD578TUziEzuyZnzhxKAJS3MRFWr29ouMLajbCsiJbi2aFpR2Qs2GXtduZ4Fb2EzpQV3TjBhgDaTQ6idF",
  "key36": "553rpVY7a4VR2GGfMSTjEFy4PY6J3Qf7q3A215aPPxNvimoAHh1pTTuEgzJmChV5U1Uu5pHSnvBpwvLQWm9WpaJB",
  "key37": "61yUUgFBAo8C2d74XHAd69ChNXcddaDWL2H1J1aBGhRC8mEUhXaqMkhjN9Mi97k3d8iVDcwzJu5S9b7Py6cxzxRS",
  "key38": "1EY1axMcNybUaXAKHVNFzV7qfHeBuNizwFcr65auJuP1b4wRCdc5rcaMnDdoXrmaDqP3psydn6n36FPSXtKZpfA",
  "key39": "2gHEpuxRFP6YBFKCuCxTX8cXdiBE8iVBG1mRrU1EYy7QrnXLRe6jkMzVqthzKauejNhBt29ivX8L6GybThcpvWht",
  "key40": "2H7ui3sxCrYicpBTjzyn6S6SYAemzjzhcjxb5xipSWKtWtg17ojRrbjwBMVXoep4g5dN94NehS67xhHgnFYyGLg4",
  "key41": "3KMqb3J8tD5nHhtRu4EKQMRJuAww1wsKDUhfjQFt1744wNiVfXwGuMjaGRUrTgDbnQZ5e1epqpLwJrXbfdoTJUCY"
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
