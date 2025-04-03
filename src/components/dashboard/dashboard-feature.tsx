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
    "62zkfFVEfzaarmEnkaAqKoESZb8M56tPXBLp1XnjYH8XN7o58FLeKd6udaMRrqHN3iiZyykZqY6kr9SJ3A83SPGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFa7ebAxzba9RJbTavdXwEQc1Nt5UdPd2EjNJtGcPmmw4VoHWBapJMWLYk2csDk7XJCA6vrXVcAabvkcAkMmYgi",
  "key1": "5xVnPrcNUe4FXWMZchConmmK2M61mUTpsGriGmTjqKegxB7G3zQDn2SpFvZZqhcBMh2NG9LtxzNtBgMjKDaL3xDC",
  "key2": "4LV4SuaYBhTPH3MP17Mr3HnqCv6zJozMUjyFsPKg4h2NZERRaAYxpzg2h5XSnzzGU6Wr5DHBQenStFepoSewszkM",
  "key3": "121Z8naeHhEpwRjK26ofcagH41dMGs6j44Lwvkp6QFto3pXof3sZxbA3S7RdxmwGRjGKQmQpuntYx2BYtriMiNB9",
  "key4": "5MpBq3Qxf4Y9wHqQBxDAC8Q1m5DKMTQhF7t2WDweZHX2bqiwffBYML8uXkg5zEAcKYxbxSFBferbkfk21MAAUPg",
  "key5": "3zqaZAVoGs5fjPYERxYtxo5YD4z4Br3tx4Qf14oFtNyoGHjCaMvDETtKWqUhCowAXRGr7Qixed2KiciCFSBPYpQj",
  "key6": "4Ka245pyjZQYKYuSzEoDx1CGdP4HFkZbrD7erKgeNaxQk4dGg8qTfuc2Y8ZR4w6zwUMVAbzFMfNZPZdzVGPBctRM",
  "key7": "6TBG9hiKpjRGasg2xzeQrh3hmSt56uMTKKHQ5rqs8XRAYJeTTv5nWEzTSbg1WY1XsSWAui2fwJeXi38C9YUDdaz",
  "key8": "2jB7AKgK4WT5JsQXa1SPecgW2FYYi5aBXk8Si1QK16eWNNPYWEAUGtmea2ZWNCwKRc4Y2Xm6k8jrXSquCzFp7q2T",
  "key9": "3UAV7cpZohgtGFab6cwNxkfQcTFHYvxSTbJwHKfPiZNgNn3raXcpz4gUPj8AdovPRsVp6gYxAQp21Sho8UCZmcps",
  "key10": "4XsrxrWWtWpaUb55258RDjMRui6kCtzgpCWj1otfS7t8BDhtsdfpv639dTP5EtrbVTVAXvSAnnhKq7npJvheb1Hn",
  "key11": "55SNFmMLKq2QF2JPMWbkWmBJUEJuT8NL5fcpRnYgs9e3ymyVhq3Lu5MBGreQ7pNWN9zsfHabQQ5xNiQL2g1vMBUW",
  "key12": "c9dsxZgF1dxphWKj5gFWBpoekmJLdmKXMh6AbxMyRVSfaQN6bTSXuj5U35sfUBSXFwkJjXsiZVgkRndA8WmkTxQ",
  "key13": "2eRJBwYeYehnPegaCnU9L2BrrFveztCaNcFG7cXdqJppVGvMjNbayeRpJiHZY895po7J8UW4BYuTJLk6zsL6Awj1",
  "key14": "3DpS2KH2jGxWqM3RSFdEaqqxUiW4PweoTigqS2dZ2PA41K7PWNwGzBFpn62SVZyGbBVep4xgRYe5vYfhmdGukfQE",
  "key15": "2XD7uc2VW1eDxKk7kaLcWAS2FH1i8wfRnTxM4ajEBNez8akzt1RCzuFxAECtgvbpDKbR8AsB9kTCnC9PJqAk6a3c",
  "key16": "45MpMGEfkbS6Ct2sKQSNMEHpzeUti6NPLFBKD44U8bt8nf93fYkQdBXjT8fBwuU15yhc4VrcuBjfkAggRCr1ieU7",
  "key17": "2XEVbGC2PAnuHwXNBBUy7Qg9EnD2Et55ipS7BfpfYVWu4tfqxwEn3rAFQrzquDV39ffvZyET14tU3PWbAGUdmkYK",
  "key18": "3cCTATPHHGYwVtazaUui9CewqyC5RfM6Yeeyv5PGQGrehHcSyBhFAHa5deS4zTckjsbuQm1uKn7e4thWsqUTo3V2",
  "key19": "36yoEf8Pp8wECXHuYd1F6wVvpqwpdEDiGFDu9C9ZbZMnKWwyWqy4CHLRuAxnZdG31gxFDf5qFcUJQjoQuuugoQUU",
  "key20": "55A7CC94YxXpbGZCuZRz5hoW8WCUDVAvCkgAzwtnVVTTzVHC9B9Z4hsYszsAqbzaFqTw7vveeYvSSZqwfyUmXLnB",
  "key21": "4fR9DUGadU7MDPie7GnrHWnGyy4HmXVXVW5sPS5khVyQky4J3gGxMUS4Dyo2H9J6Fr3a5cVSGjHaLZkZVJhNFrwo",
  "key22": "SogRDfQzbkUCZyHTPbq51FqqAL8SYrdWeM42ZGWVm9jxQStRuw1woqB6cvmDijYLLHtJ2eoSSavivy4X7KeDYCx",
  "key23": "5WZdt6Cde1Rpv2Bb1eyW4irSWgk17cFZkWH8mbV4KQ5KTjpY98UY84MnoNnThnewf4WLbhmhfRnm4AqMprkRQv1d",
  "key24": "385iBDVYTkVYRFktVgg5mS81oK4tBUAZTFMGMbP9rn5s25eUupKFyXbdwG8sx7YvZwoWzHErLVVJrmVkTgkotJ4Y",
  "key25": "4WTbNjc1eBNeUR7deERxco64aqUfARaQjP4PMPCLpwXudqPCjXGAkABPiNXmES5bwFrtVN2RqB9cgJPaXvK4YY1L",
  "key26": "2U83fz3u7Tnj222Fj12YTEjWwst8HEiA9mmdfzJ5ESrFTE9B2YRz2bgwP1HcmGuTwzFwFmfCxAXFXHw7Y6qYGDYq",
  "key27": "22xwaHTi5tBHQoJNL5MruKc3UoAYVUBDqS2wgJrxNKLDhvWxCPsQGbrzUKeUvCCsLB1ujv5dksTHhLAyjo7tomkq",
  "key28": "4CZXfxGxQyGZguTPrYVjKLp3gK56qj2insWcoqMUSkwb6LkiotoHWfvPctASzd8YSpXsBcZSrG7FPWeqKyZGBLyj",
  "key29": "UYdVb9LJLS3bRYEdJav9bEFfiEYWThCdDWnYy81fnetm4Yih2rFVQ1TzC5h9AcyyFjwqH5rKonEJmqGidF5ncsg",
  "key30": "4kw2z36scswFq1aZHEhufHjten1tisX1q93uxZ6L3Pq74R1qu5zXcWE4nePrE4hHY8wtV5M42ciF3FM6zBi3dPma",
  "key31": "5XVzbeTJuKQtxKYFM8okuVd4Eq1Ba5Pni41j9rZaRwyQjBRV94971ksx17xBQSmKVZWWcFGrWXk1XoEUKn73nJB",
  "key32": "28Fuf1TWu7ivWURLSaT61afzfgMWAjXmzK5vUtRsPJ9fw7HrVAy7dLDCmvRDNPV2EAXLTqC3saGmhqsCYk26aJJ4",
  "key33": "3jY1kaonmFgFaPAjxBwsMFS7gWqkj9qwQg4Fo3Kud4dMEMATXzKkh2whzmfrTUiaEWg5ixQpeTDCde5J5ivYnfEo",
  "key34": "3pqUckCiH9WKP954Qp1EQEJjMhz4f3kK4f4D8rGovQLs6igmkZUdXm1Z8J8X6nkp8eVoC1ktaCbHtxqE8jTNGnCL",
  "key35": "3m1N2G2vTCj1uoaS4Ddywx24VfD2YZdoYQbHTWj2DkhAWQnEw6WmGEwmYyt25HBj6gGt5UCAVStyGL3ahjzZ6qgB",
  "key36": "3WUhK59ctGBfgpg8WML3W53cNnKtGMKpK1YafCcBbpveMVZit7SztqRqmR7LCeCPUvFNMENSLaLHwd1QtFLFc9aL",
  "key37": "4CsSNEB9g3MUHpiqK6zpg5u59LnsM32CpPyrz43WB2A3ApHiXyo18NMGmgZsT1X3KUZH4fBEBfERBnTurk8GR8t7",
  "key38": "4tcMjFMHzLR5GYBy83ExCNwGbT3V7MzzwJiCaEthcC6Bfpu24j94vYev2rTR4oRq8jSKeCG6RPpRPKJXuWPNimKW",
  "key39": "2UCLCUrFSNuRTWVNtm7pHYHPynG9nUWe9MZXDwJCE2Z1DbjVdLmNRZMWk6RMKMcNdSm25yKccjFJVoFgUMBzJfNA",
  "key40": "2wuM1nsRoerL9QWi1mqMnJeXzpGZF3NzxipKmKR866PyGHc6tJjtHddxXtw11CfvHEcyjtcGan8SwTY86affRJ2t"
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
