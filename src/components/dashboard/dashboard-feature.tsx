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
    "5wdZ3DK9Rpmaq5LdsCEPCCrfcFBRT3byzLVG9KEvTM3ZasNAWY2oVM6AEptzqipXyefnKQX5z8X1b3ozZSkvUggk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a316FDH2H1pSQFw3WHGRnd3As1ZQe54bHYwg9KP46FmRTG4QaPb9F7gHYjojMNutveigNHFFL3MYmhFCjzFYTDU",
  "key1": "U1ymC96TXPLcZECsepwKuNBabWXJ3rWdXsy91fosBu5WakNr3yVEbKeErb96ehGopftpm7TpNHLux7Ys2FGo4T3",
  "key2": "YBYcDHsuexTVNuRWXm2y3GiQhYBGjnd78pU5kf1Ef8bHYQBTFuTzzFKkKvXoiDRPtAxykqM3jcfB7qWfkmzBwnZ",
  "key3": "3cqwhzYzyPFKrV21iJYYLGZjWeuFvmW38LWBdLo2Pf13hz8k6SgNhj82emKwSJgHZw9C8J2zcRHdXUZGTiqU8tAt",
  "key4": "5h9C1VkfXuhqXJh6fgjZWmFZwagPtvJ6jPfH2bCaerP3uznczSuB8ExFhggmXcQMNC2c5E9iC2xkTUcWTgvPne41",
  "key5": "3Eu2XYwhrbKEqjZKi7QiNuNM8V6HZnfwYFGwNVvHSBmdHGnav2yX72PS4cWoGoETV2xuHRpmM3vjg5RQZ1pFAMb7",
  "key6": "7KJUAn7Q9ocWMQ4Vc1oz3UiUxnqVut2WsmtgHjtHJ2QBnXHyecYiCVLMhFBUMzivdQEDgsb1PeVHDVgMvp5qWga",
  "key7": "677GxfJrDJub8inZeabanAd9esS9iBMSmSFSVxXTf6eyszLJuBtqgmXxBqhdYBqaTMiTe1rCcqhBX24ff4FxbK4R",
  "key8": "vfa85G5PsaUe28wDJPSY4MVESTVJsJ3WCrN5nEkbPT62Pa9jAnxTaWrDHTqRgqZ7Uh7Bb7uWWUrTnqYZtuQyVCd",
  "key9": "5iDRYyDPm5SLHewJg85TZhDZHp2g8q2UHnhfp4Ub1X4EWxWo9iac3toReJ8fKf2Eq6FEoBnPQRnhTUDuoStRQ4J5",
  "key10": "5YT4RzFLwAivvAjgV1DM3QbV1Gdzy9bddyKvfE9RCz8A4HBPk3GSnpiEnvd5eWTGvVL9WWiDMeTgJTaD6t5d8toz",
  "key11": "28cW1bsrRKx3eRDyZP3NuydaaMKqrLESq9ARXExpdMeg94V3ciGUqdNoNr639G6LGVbQnZ1xdFaZqbX5hrTFmV6i",
  "key12": "4oPVsdUn6bT9PSLQso61NKKrPcmvV9zFvsB4xNvBVWEACdNkr1Krvn7Q8qLviYuSRWKiNxD2YRLSa4atvgHpmEjJ",
  "key13": "5qfoAXDk8w4ECZJCrobBGsZHGeEFnUTk33qewZTHnF3oKtWj1dGDGM7gbyJZptiUM5Ne4GVbTLURhRVJ2xQv7GdD",
  "key14": "3jE3pPSttZEyZ4kVSagoRS5G7tLAkgNJPypE2KrnYYHAwzLXUrjz6YorCGVYUqU8f9Cr1UmoLuh8JYPaYmrJV5Nw",
  "key15": "2XKVYZLgv9NbGSKM8BdjzRdihThE6sqx279bJqmfk8wMgVJMqvg6nDzZsJRDMQLyXoq5dYa91JLWA9hvhDasJqH8",
  "key16": "52Fsq5RB82qnruM2XqHYAhxMhDHFC3HkEXLsVvaNN8K4mj5yyXTftc37DhbA7b2Ed21CjteAWrEwEsdx9LCxPwQp",
  "key17": "4Yb4CdiwSqykWFVLvBYPnq9HMf7ykUYxdFmCPUGfHarn8pCyuMz2Ug8hJjUNZjWJ8M5Qtftej4YXXJNUm6JAzXB6",
  "key18": "48Sse1cLMuQhvxkMAjdfdBUQWVw2MoRaquWzgXAUHCwqXknGMsQ87oEMY16jwULp3zJpXSvT2Ph6Xea9b54QUfDu",
  "key19": "4fHQdLvVSRHqvKSbEwMxPjmFdAZbhsUscn45ihMPbu5Spv7J55gvR7XhYrunrcyH16vjrsBHrWJLrppreugfmTCg",
  "key20": "4mxh46m522PtmDsF3ZgZ483kFBqfN32GJfTj6zF4QnHPwHvynewM76t8KukDs8Et4jXc2FN3VReHx1f2AGJPnKMs",
  "key21": "241Z37jJ35frDj7M3mij5FybT66Ub4bmRD2duaUH16fD7877Y8Zey54HbDeVauJoooin1n3mvvcGVhDyJzVhHnjf",
  "key22": "58KjnkVC6XbugABDjiWGyX2MKgrNzKSxceiUWaRrtE45rxwJumxKiEjegyBagMgEXeAmdF9mU8rZz6wCPigYk68y",
  "key23": "2cUtcrefHmMNMUVvyrcqgEeKFqjr2XmJBZDQzCwfmBwtVok2S34cHFEHCSbpzqR22FVgNNuEVusTmL9LQkNqQy8k",
  "key24": "5xmd7j6HA85wVERBnxxxmuGoXJxP8RkapzCnJTdxx1yap4LSw4ZBGLgAfnTYoY549d4AJhcWG6J1C9TKqhsF6uAL",
  "key25": "5sokLL6AqkyH5CQUrBr3CvvqFAfaHgQWmgo1gb3XSZ2NtQ8nhCRRQCJJMfhArSVivT4CAMrdoJn6K7tdzCBMs9K6",
  "key26": "2NHn5uj6xy2eZ7HDYrASW5eXuLgJTY941AtcQUWU5YCfJKFJyTt8gPGHPqJ1n2UJjJeumvMjsNwXqtNUa5ULBbRY",
  "key27": "31ZNoAG6KmSBpMMvDZwgwf3sbZ4EfxbmooBR9HGabiykQSXExL9HvNfrRAX1LCLTkmayjhCE1T3pFSckLcbeL5GJ",
  "key28": "21QnMy4MZWK2RLDUYWpQv77AaMi6zdwFwCNXUu8GRJsqJquyNEfAgCbNQ7y6ryGGn7Fkyhyj1eq2bTvthNYnCpcX",
  "key29": "5VaDZUhHDhAYm7n7Vr9LikRBUHT6eK6VBXAwvhtNj8m2SQWmiHrEZK9aTycgsSWK8o3Apm7jv1r8iUroqkdEMxJi",
  "key30": "5zXwGVxmYdYU5EdsRHekGKjeieXa3SJZ5FBUNxsHkRsSbBRavW8XVuXa3erxKcPP4mM8rX3wbC3kSKyhkoFC4m69",
  "key31": "K2Mmi9mjXvZyvoppyZieQdFN1YYnxtgs7JrGqek8ofw2orPbpdPAxh6g4pRcdXrxQ8o7EPjmoMEtb8JV6CaRtHu",
  "key32": "4MpKh4qbxVVjR7ZDo34cSW4b4Af2wEzUMSJwG1rJNZz6S5r5ubKCy3zRWTB6C5ToxXSAKnGxbWc8NybJAdFo1i3Q",
  "key33": "5GNLgXZFpGYzhMy8ykanJaAtU49CrpoEeusiUnmLezULST3eq5hcgY9iwxDoXoptz14vhuSKXMkxPWvWocaw45UR",
  "key34": "4MbJ2p3cB3m2oagXxvgqrcac3po1vmjVubEWdTFfLZMxTZvDaSW5TT4xLoiNWLsXCAg7HAXiWgtxoraiNgJeuJev",
  "key35": "5t956hndruhYrh4PjVyN6AcNLJXGSae8kru9ummCUxtPPUvA4BRcZLj2iAA5zmSmkSnmVZyRzPAsTx8jmQ2SAcTq",
  "key36": "3NJUyRRJLbjxC7DtTKmj6VDb5z89sugcXbnpsDpYAZCB9RkYhqWfgtT7Cs5zFsECQS7ZgtU5yr8kdVEcQcAW4Pak",
  "key37": "5VvRdxUNPcX6u3hjWkNEe4tZ8tZkkQXQ4cBZKSdnK6T8z91aBL2sd33KAYwiqqJ39us8YMHrbMfQwcggPdCvJta1",
  "key38": "46B84mRUwNQvLFCjKnBjSLthGixAk782KebGzSz8x3WeTTYyrWCUxXmLqbeVE2UM6KZ5fok7CJMsZEcdAb5txxTj",
  "key39": "4jBxKcj43HXEpR21oovBqxSaGZryrY2zdSp6R1tC22Ttdht7DYr4JeSKU2pJjU38uv2e3Fpeu4pEvHhYBXQLfxPx",
  "key40": "4BshRaRE8Tu1TSHpUZhHvRDjHT5C6gTvvD5XoW4ckjFFAr3uLa6psatRGcWosaLWSjh6NrwiSYB5cyqsK1sLnT4v"
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
