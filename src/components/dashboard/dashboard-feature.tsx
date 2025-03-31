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
    "4CyvhsXbmo2jFUUTyLG4wVVup6jbok9T3sxfLNvEpdSNEc6AoZdu6KoPvxeu5dgEMptUWSki7ysuYVDJbBGjwjXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rN9UAQdhD1FiG3VPwC83uBzVCWKDBKoMnwtKc7s1oMPmu6L87aXT3g9favwx8RrEtzoLgxkEjpQQjoVYZkr5cCs",
  "key1": "47ncWuQ9KWZEDL9vpz2sSNxrDDdh4kNHaduTZhBSr4QU3cJ5jTNnF8GYNJWNKtQoETyPbM8JXswCioSFiJ1i5qR5",
  "key2": "3WT7NUzMEQU9FnejWXN3iReCT13p73YJeg6Uqskf18mq3rkw9FpbHdbzDfPdUZaum3gyaPAG5ZyzYtkLtRsCdBSX",
  "key3": "3My4A9gvqd8oQ7uwHK67wWumAT62X1PtxGrpUasLxGZDE6FKUXfXAfppdvuzfSYgNVdUZ4xhzrXwPoUtYLQfSzfV",
  "key4": "JyrCDJK4sguafuNMNYjRakboTr3dc2HK31ZpvnfC7RTxhXr4eN25KQH2mkp6W29a5YsUCkqjZCLL3i6C4r2kkXp",
  "key5": "nyqcxf5diZyRvZvMJbArsnwWzktwhAvWajGQuXLPCNSS7eLgohEkcAzSojbD6kvSdzKsDzmo8XVBKDVXLMT2xTF",
  "key6": "5k19rUUbDUybn472er1xhfMgpdKa6gF3pK2bePvMeNJQPgfyHUy3f9uKBdV75vEaNDtpru3dCTmd4pD1sNKzZ793",
  "key7": "3cLyd1FdtDNTb2YPs6kaBLnRZReRND86wrq7jQSLhLLSXUmUtTHzGR1gE6AB63frVkyygt5XgMmPRdGu5QNMyPX2",
  "key8": "3dqBj8b7SF1nBU8wWQWmCseFyyA3tGQ2avJyVyBAyAt7qcaYX6nXbwaTfTCbgKuKCHQd9feBwAw7UTtPQ2CXdToU",
  "key9": "5GpZbDgPWsNfJb6DDpKju5hzJBPap1PfMXNiXDyuk3mAMLWLqYVcu2hAKYeWxbkpwrab6i2n7jMsJ4ydhNNPkuQ5",
  "key10": "3GZaQTJwqTW9NyzftstFYHd3u51zkRNAcWNXiajb6qWjt3fgkBwJWjiq6r8LTXeVgSgMY9YftGcfj8pC9R4kB4Y1",
  "key11": "4YaBZR4c4RrsoFPi31wndcmxyinjCRDtMcVN6Mkz5sAWsd5AB5k2bnn3GvyLB3GZJvMGpQ2KDpEFQeKNkMVoJVRN",
  "key12": "5VajBqHgw7b2zr9fFqgGimzninvX9JCLNReUjJWUrLVNipseGD2j3f6C8KSSFUKetDe3YkXiES2YjhX1fkfYRvN5",
  "key13": "2hEDgiC7mnyDv5Rcbqb7LeUNQWK5JZhfGLXBzk2wZLg7ZjTGcL7M8r89jMUgbwLDy37aUDN4X9bP1amGS68JFjZB",
  "key14": "2Zp9VqgDP6ijcxXzbYnyFSLLECGLpboMiR5H45c2ejPLzPMJCPpJ7kongquirQHScFBdTbJqhLEFWDd4DZbgWjgD",
  "key15": "3e7dxxCGWRReWJtZUAVAHmriUjLJS8c96ywoqfVZvKrYB5uNS5uqqhtTCEJ7WM7syDN8UXLUACxMYhqjSB6AnB12",
  "key16": "3GB3djg7jXRktwrdXAanW8tG29k2f9GAYa8wsb7gMZrc8ytCoAYiJBXrmDMTrz4pjp8SHM3dCSf79xFM6rfqAhMT",
  "key17": "4XBQF9f9SbzsXKhNXk83f3muf6mtgCyeWwo99ymaPtLagy1eipQMJuF9AwFAoawCqQtkxvmJTo41MCSBy5ojGeHb",
  "key18": "3JyrZAttcsPNeW1GbnmGFeCn94pAb2eghzvCD6VUMn5pqNsEpZK1Ete1zoGdhEQGPQ81BMY1N6mZn5qkD68Ujo1z",
  "key19": "GawoxZnXG4o1MRzYgBC2kN1rFAELhMRHPvyqW7Y1bEfKQfgKeizpA6cdHqGHg7ARJfpcGuuaEY8SfaAHdVS3bfF",
  "key20": "2GkJnE92bMfi7vkZUXn1r6RXWPFZ1mqe3SK52XMeuFLwgC9B3833WaVHsn89fPtwdv4HmHUdJmaZsnnTEsbNHBsz",
  "key21": "3EH8MSxZuQY9Ep7QKp9iXYG1UbPdafmAkX4FzSYAuEjzt7YVNLG68BvjDUv1g23f1K5Ljrs9H6ocpdkthAA7Q3fv",
  "key22": "22bbxrMEzFXwNcTUPWjAYxzRTZYn5G4iZYnT7UQzvzAqfgck2Jz4cAbySDyfMryz17kXhW9NS4rDWFCVkioLG9EA",
  "key23": "65GBKodLCfip1sdq6Wo4LhTLRoDc9M83KP4hJypVkKU1FUhRWXS3HpdJDxYxEhJ57JaKG5M2bVwLBMNpYcCaNKUM",
  "key24": "2FEn46WrkforZevLjvV34mqZMYQJWHSAYB7vYGEv9YyhJCjaRV8VVe8ghaK9rqJ1xCNSFGoJNQ5bWudb5heRUnNt",
  "key25": "3u4wjkPgt6AUiQiDt6bxWncb3bBnGfkLD6rk75VW8rygAFvCJFbtnPmN2qaBAYyjhC8pj7sFHa2CHzo5X4ZdqrLh",
  "key26": "54QuEy4HBMU5ZhU38gQP8DzijRA67aR6Hc7PDHmnZ8ccpHosrk91dZMwbTAhsgyMnoznxFehzzUnJQVBTx9efXxR",
  "key27": "3sTBmeygB16tFDjgZxbbhwkBCgnFMRshbWN9YRnYxRPfyXF9ZF3kQv9ZrJQB5m8DGzex16zPLcN6UiatXRRy1mhm",
  "key28": "FAuXET5Z4nDjYX8vkwsh5NhJV5veGBxzFSzBqyrDnC2tjThJBmsG2U1pNTiLMB6rjPihU6rUtQsrtjaWfwCrTpv",
  "key29": "35w8PtDyiYG8exGuENdhdEG2eP9Tn43E2CHHN1EnkMg8q1v1WRChhengmNQpTvVxUAMyESEmThKeyxnQYza561i9",
  "key30": "2kg5Dy5F7QH1fKxmVNKirf7mrgZkMqwEtb7iWHLdZciiU5vZPeG4Z1LUziDZgPpuF5gAGB4TDrNCssKvdJbfDV1D",
  "key31": "36gq4pryVuCqVGL2uHr6UygQN1jtcNyFi9unxeLaEmptQCUBgENqvnuAJNHuUGv4d2pAVavNnDaTHVWLGj9jYmjt",
  "key32": "66NbqUsQ6nKAQ9HPfM33QNoFURMK35ZCTEfCvQyTx26zoZwK2tnzRJSHVMtmivyLbCcGXgLb1hxpvMwKZWwGUERS",
  "key33": "5zGST2mSn6ViPvFGGwX5W5FM4LF6cZCvF1ecXzPQ1eaDQyPaqTAeZYaXr75Yr2iy9pvszxAreYraULgyPyZVkVb7",
  "key34": "9SunA9CWEEdTqahvENtmR2gdiE81QXCEL96xYewbidqir8Zs8fme4cxRUdV3Qv97vMw3w2x7Qo8t9BtcUUVQy2g",
  "key35": "bcZfrjHEwkP9BitoXm6y3p84Qqw3EiDcepcGzRxZubuMNn1RG5Bd9piP4bSvJe1M9Lxh4zJZ9D8kQNxxxNryVNN",
  "key36": "2vD46rgft7dwY2vq1hh2HicbtoCXzMb1wZrDnAfhcwWNXhadaN1eYjBhnEgSXpAEi6uSt3p3wAXaeCyJyoFFi4yD",
  "key37": "5KszVfHWZRQDav38xAWTXdndoHMyC2N9LV84v8KD2Ma7RWRMCKdrEAWM7XHdiaR2mBF3XEWRYuhJkcYnysyNwJTV",
  "key38": "ird1WAwQ84v7PEPbQmRLTAWvnnQJZz1HRaosFx24sW3Ef2Dw2dxgUZgt64XkfLZStQEQrZjQ2anErxmjpzxXvyj",
  "key39": "5LMs52U1HERqAuGVicyPMN8H2GWaCFecCeD4x8ADP8ybttJ55STQeqw4oanLc534KroimKN4jLhPK389p2wPQF9v",
  "key40": "5z786DjP3iw9UXTZArg4aFNr2LkCkeCZDdgZ2pTdcULujFRmqii9AwxHwzyEPVm2gMfz2QdHo198C2DAPXEeHyAn"
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
