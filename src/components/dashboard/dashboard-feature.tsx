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
    "g67LarySFjDUuJco2vi3t6Z3UJTu4BnVz9VT17NTHDLKWpym4uGnY2AdsUWd1KvA5Gbxp4V2k4KVmVQ1B9qX6Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5XzGW6rHNypSYi9nBNQGSHxZ5KwWVuMYeV1FhzP2roQQ35ziPmPJPDvrJezBRKJVJuZZxmWVHHPQsjTTWqTJcQ",
  "key1": "vDX3HoqDkEMTa8yiWGDchrMTzxg82uKMkkeojm3HrArEohUi2SDdgBzY31R3RyFNUvBEQdvpCxYFiMGAUh1B1Ak",
  "key2": "2fJd36kUonAH1dq5dLYxpRmiGQS18zB7RxhzoEytf5rGSN15ZuN13HCtHqGuGoad9aVR8vpWfs35oFz7UP1L1QBG",
  "key3": "2defHFCbWTZFHBJrvMfvGLEBdqPDAha66ezn1oQxQkiJx1ogC5xPEFFQ3AgxXAozRbPEt15Hou51mt7B2XKJd5tC",
  "key4": "3Lt8h9R1yApLqR11V2X9ytsU6ibEbkbYmnZACawXB2EQadzBxm35T8c6KGP5NN3HUnoHpSkP7FinXGTiky2aBcm8",
  "key5": "4kdXa65dX2viEr28wEnLb5dTyTcpdPg8pafuribgySt8kXoh6u3XJoLUGr2VLsRPRSVTta6xiaEuLz4dPfSCUSSo",
  "key6": "FemSe5JXFpDDKwEzQfuoLS9vFwoP82PvpALvFHuNVda3T8zRrhWBFFVWwQmxN8KRVvwbgm2SzEPv8BKrznoqwjv",
  "key7": "51fnS1yyTXUT58Efbzs8fHSarnGrAYQDpjhhQ7giQUjsDx1qkb9v1WLsRKzN9DDG59pC2M7tyPF14P6ja5dZD3W",
  "key8": "4FFbjUsH6eMUGphrbwSRZ9pF77tDMkoTNiPfYSe7D8EoNkX6cXMhfGpXJjuFX3hfShLsDCWU3bp3tRhLiiTk5Zs2",
  "key9": "664YSUvXRv1AY288evt8UrrJbJws5ZMPUG2sUrHspUTi4erchUSpETBhWjXK9qJSH8F5wMJgbfFQ8kksmr6YFqhH",
  "key10": "3CwEUouDCWj8bgjP36NFEAiKhtBZEouga6wjKZPvsE3YvDth3cr6HTBfHrg33DQvXWJMe5g3MQGRF9K9xsRvjHdC",
  "key11": "YCGYYrx5MaquVK1aVtWYLGZz2AVNeV3bbQCM8TQKFZft9QCFghjCDLwtL5wSUf8ZLnvHKUNHBv6Hxi8YpMAP5Xz",
  "key12": "nHxmM5fBPds5YFbYwQckof27LXaLi4FHsnHmDgR7aD13fQBtGvSf3oZKEMiERfMKoSs7j1KzHrH4fSvoiGfCkPF",
  "key13": "65bD1zGmrFif7esuKoCM4dsUrjfrLiTCecNqEGmTCWe6BdsiGk2Xsezb4vaKtZ18fFGwvm7zKnKfjSifk7QeNFio",
  "key14": "gCoSbDuN9nWK2cZgnqLvG6fJu2f4uLNvQXsSDodFDB6PrGS8qo6FDjjpyM54pRWKUYPSTkrMcXZhBbhFi1E69BR",
  "key15": "2PN9ER8by5VtQZMkPBwxyh8HMcG4seHcWEf4r9TwdCxpLuf9wBqLBNCcnMXfja3VuD4BqAJ4erFAJUHiuiaigDGr",
  "key16": "2hVx4jCoV2m1d5kDrj4VcM3twhAGTmtVNFu7UZE7qNzpdr5ZLAtDedLh9gWECBXpgMaLpgfECvzrCrfbYFEK6fyp",
  "key17": "4uuU4ikpRTF7PG6n2wxyEGdyndUGTvcnuRNFr4S8uzKnRjT7CArmN2KkgBDsb7wei6qwpqXbLrY6ZxxJQj9cDtTw",
  "key18": "2Da9Ju9RT4DGnrb9Yt7aTBV86BgpXooChAYsWjYrS4spvv5MTH484YV9MksaUuFi96UUu7gv7CXdv84MQG28CRA1",
  "key19": "gU4R6Nr22pLzpCzWGqzoUiefJhk2Sjb4e9xUoXdjHd56JWt8QUTRajjDk4oAvfhRDnpUkDuVK5fLMwAuBtQb3qa",
  "key20": "59b8NK2ckC84Y6GfJPhGMGzj6rRVSHw6ZB7mX3mLnC38QHF9KTyo8RSPrVwh9QqFi9gZRyg6ji4KqbbG3CARMCyq",
  "key21": "3tDtyg1dQd12ztALafATPkDnrj7oPrubzjUY7zB6AfQ7BmhxAw4aid5rZ8573vvBJ4fZCiLf23m334kR16TxaAeE",
  "key22": "5tpuwRZNBUhkn3obujVr2oK6D3MZbmhMWEFCDvPwbGoPoPusDa3GSk6LCGbnP9xzukJszGSknPkY2yFMfXgMRc4R",
  "key23": "3XbGzVpmZamBc1VUeEZSve49nq6Ut3HQTyAvkoM3w9pVs2Mq6K79zKjbe5qNDFq8MBa5k3NVEvKyip2czGsV5Zbu",
  "key24": "5kW3uSXZVaSzWBnCQMjTPHoG5eMEpdWNXBAnpmyNHKfwooxcEWRzgoqJTxrQ9FeaEpmoFT4ymUuguCRPqS2rDRoQ",
  "key25": "4KycNHEmJVQuh8aSCZanwbxKGyYkN4uacFcTeSEj8GtzRu2WKxaWzJqNtgda4Ah7CsMX3jC2Mt58A5iYTD92KRwK",
  "key26": "227eoJFa6UePtRtaxssMogDs5LzoZVGMJoWeNWmGra7dyZo5W1U6BGxgM7jD5wXT8mUJtzQvmCDfCCMkvBTnnKWU",
  "key27": "37cpj2tfSbyvwBCWYkKuPKbjs52sN8YgLmvmhS7XcaLya6iGU2b191cn44K11sUridkED1zNJS6vDgVEXmnWpg95",
  "key28": "2pH1jbRCAB1jT1oa2G78RZDmxpUZm3dqJTuW58qQeoogwo3ABBEm6fVct2g1CT2yTkyjFEhKG1UaiG1TdcJHv1Xa",
  "key29": "5GdqV85qpCMXa7eR8MsGngC7fY7rqXw1e3kHkvFLeJP1sEVKPJR4ab2LW24okxuvtuaipSJ4AAEndveymopE86TZ",
  "key30": "NW4Tw2otjS98Nr9hg7uVD77xdumxAp9C26VbTCNGNndS9FbAK2RjEpbmBYRXAbeqRT9Qei2TQZaGTWKkNzYhva2",
  "key31": "4hZRk6AqP5BpjzMwSfM3XwCXcortgrXuHF4iPAprPqFXVyHpqf1mUUZf8gZ9EnkzTjCt9CxGtDs1Zu4r1PpQmWAC",
  "key32": "5tAnRhajky1UaANmCeUgo8VJjA3c39YUrk2321NQECCHmoF9jdC2nH8nkDLcmRPnsDKMGemBHj8x9SJJRiSbEAbT",
  "key33": "246RjVZFxZE5Zs14dAnR3wKq8f4f2SvpkocPeKvi69jk3pkihbCRqLkojWtfHW1rfYHQEeSACirgyyYw8E6HpTbJ",
  "key34": "5Z56ucfdUMC9WH8DqZeouCCZW6xD78byz6ZFHaFVeGqohwFZgWKFEUc3AJyHri3sMZcYf3BqQtnvfRcBBYM2EdK2",
  "key35": "3WfnFpkqivtHqGijETj1orSGy1FzzxW1PzzfmgFPV4Cum9Gnip3mMuuc922kSa9xmFvtNKCgJLAvKeRySBRuEiC5",
  "key36": "4R44Va923dvtPETnwYCCHtSButqBmNNJthtjzMYo6ndoMFh38BHNhc43V2fd6vSA5RF6FdxoPDEKZG6LEgJ2TZsr",
  "key37": "oCTeMijS16rhXMh3g7KfDZJr9UB18bnJJeJzcwaGdeA6ZHEbuDxkbzA7jAXAaHeucPsM4n9WcJDVes4v8WNJ7Y6",
  "key38": "5WoL5wWAifwogGPkdgYJ8Sg7V2h98cyiUsQvTZcBaybcoqBzAkhPkojNL4kjC5sMJu7uznGBE34TcBQPB5nK4wMa",
  "key39": "3PkoALUEtvnwUoEBsGinc5nxrCXqVsGroBnjLCoCw984GTnnEa8Zv2D8myBkfwPvPM2wHuhKbCabsrEdDnuDeQ5n",
  "key40": "4nSBqgHcvPAyesLCjM79Yo4cLDwSNzzrhr8EGX46tiEsKua9zV5mwe9BcbMYyiCTWUHrctRHFssbDN4QGX3SXgg4",
  "key41": "DFq7BKgHn4vndwUSsc7GhsgbbVXZ8RHAgFyf2RhY8SbWNMv2F55SKj2pssb8PMwfRRGLTwdaSU2P1N5FCxzzK6n",
  "key42": "43WVjrNHuBF8JauhgRVFwJ1hRczqqipxxJsQ7Sp2GMbijJKceHBgdbArFDFTfGXQkhtSkvZ8stLojwTuHuNLUe5n",
  "key43": "vobWVW9BYMtqMdQRbojt2nzfj73fYLEPgj84WboMt268hDR7doD2sFR8cDfbgzvSMjoGAoxFAF6mfu28yFGdfsx",
  "key44": "N365DsrGnbdyq1WQWwa3XeFWJ87thJ4aT7htuBf5HQNSL6Xoq4KjkLin8dsS5M6PX2fY4MKNoKqN8cvoCqHq2kq"
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
