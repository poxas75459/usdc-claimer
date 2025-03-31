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
    "5e9oznX3kMsQEZgjJQj17RbEsFWuq6Y3h62ZQPY23ABA4RTHnf73jYgMt5tmCDVstbWwYUhGbcnLyJqFEMmW9WVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5etyX6ED9CHTgGic2C7MmCt5CWFnAmqP7xZm2GnDaeqXr1QTCRSCV1eoLRs97ZaGmsFdPESjXXLeSzNrqxKMuQD4",
  "key1": "kz42rpGs9M7UvwnLWvcUsLdHV1gGB7eDiYEzgazDwKykAZBnuPY3Lyka78NaM4PfnkQ2Ug9oNfHF44rkP2wJ1Sn",
  "key2": "4GAtGER6Dz2ArrBDQY77e1NFft9L3kRueKYYKE9mJvuXYXpZfGaciqZsJe5aNqiKuVhUTXF7N8ZVxT3dMdU8fQK4",
  "key3": "u1bbdE5bjtcyzXnN4Gwy6CEuLHSMitUdktgwjvaDwReLNcu85TTzCiDkTEDrTmaRAJkKCJtdcNviM2XCXiAjJFr",
  "key4": "35QwS94rLk1sjXFuAeiTijSEFsqDBgLvnvWuBMu1QW3cJ2wB9Q1vyotTrcfJGv7yZHXLkZFqPeep8wGqHYBMCZjB",
  "key5": "MxxZYtq46PA9Y1Z6zwfs91ZUihLSgyjhpzmwbj2Y42RAk1iWmf1dS3vZUAaYnfzbE9ehexGUWKam11EjevJ7MDe",
  "key6": "5ByuRL6A3AiQn4yp29WdfSRnDyzUX3tuMzJ8CwrTfD7SHMd1iupjmcAinPLGAfDxwVmhxc6u9Nv1RSm9fS4k4GdJ",
  "key7": "A1cxyJ7VfuhdYtcZgqWFcnrfFNLZeQj2J32HUdnTZL546pjhCtuhGynDQ5WndioRdPNoxekHECaXkmhzksaYNFu",
  "key8": "3S5VCzzZdsD4AGhv8qNXTZvDn6SLCvWwZeYFiPirxYhLrQxfG5q6bBKKnq5BtWkNXvo88b8tsbzVRiK9qLHfmENR",
  "key9": "54TPBrBjCcLgs8TehjoaDyKt9insAQbzJvX9WLGWWwVPedbdUWbmomjssqygxqXmP6QgspKNyKc43ubUZXVudeeZ",
  "key10": "5TGPq55k8Bbrks84c4JKuQg4bYk3WAUJFXGY9pvbHVFZfzkZfPNMMw4K5phUbupapGrykytEoTKb8BGZUyvZ99oZ",
  "key11": "3dhNKTfAzPD9aCvodvoiEfq141dSn2BAjbBdJmvLdUyo7sGFBqvMGrTWV9eFWCTrsyPYpxhRJcM2GYtca7c3y6fU",
  "key12": "NMU89BmPax1fgfmTj8TD2FEeFNcyk666jWYDNujB2f8s6hezBjTeBwCabXYKiFTPg87SuT9agVmiPyTdaZcAvkY",
  "key13": "njmxRwnfPK6qbwSNPPviBcQyP1NZEwQU1aFtuJBMzDjHfHpxL3nCrbo1Re65NTqNwahifoBxpdgarq6Tco3nRa1",
  "key14": "5bNz6ko3KBaFCHihgLHYuvzyWakqWpCyvxMFtsVZ31uWsrWxFBNSokdtjNM2kxRRkxwegZBjVXK8JsyvS7ToPaGg",
  "key15": "2sGfvr6dbrtyr98hkAYBfh4wDi57n2e5isx9uuCZkMZWVw2xqwNoJoq6G5cXCE7bGViMWLbTCvgBJK1wQ2gpY9qC",
  "key16": "5gJvjykQK6i5vnrS3qZiitrB1jFwXNxq2swMnjxc4z9dM1YnttCU8HfX4ZRcKPnP8MBLJ1rgUHJceFsu1EbA4nrD",
  "key17": "4cvfQcKC4NHRx6YcGcjTi4Z11GUM44pvBvUzJjnvsKT24anm4SvVW6ddC7uTNJ9kHFW92DQc8reE5cKQ48AZJjza",
  "key18": "1Sr9u3JfdKAcYrdrag1Qsk8LXVV2X2CkspTzMWreKBRLjsP9bA2bwiF4xP6qSNbu3PevRKVKhG8eDSMQ4vftnNX",
  "key19": "RPnsUvxMgyyCGc4mNGxqrhDLGePp8fMvT2WUTzmvUaotKaVfAmHFG7sMBwg2yjU3jkbi2SShGBDTHFis3TXTFWH",
  "key20": "WP2aeGvnEBdzhRetmC2pgc6WKUsQnpqxnJinFi6ySsNm3m2w9aTtmNva51MHbn8xGs7KxX56DPRaeztkAYqvenS",
  "key21": "2wTgTahv4y2jRXZvQicAoF8JbY1V74xTsmBqoyb6EnSmBk2mmE1ViudvW9RY1cBfFb6c7Ynzfw1D44G6ZUqWbd3W",
  "key22": "2gforstKuiLc1oN9ioaTTQynbFSqkHRqb2d369xNtJy6jrCR5QiZFCcEMEHMk7E14QaPtXSR46woFu7Hn3DqTEkE",
  "key23": "22WddjVi95SUWPL1SVjVhZyUkfe1n8Z85j6gttKMhatuhxGR3sQTGouxxmYmmgWzDD29uoU4Avh3wp2wbVCaPRER",
  "key24": "5U9duwSXTRbB2n2Wv7JKqnGCfrbr7PJhE1pM1bwHaEbGWzLWpdhwacMm2ptPCv1qtAvsfs96nv7aXU7JEyYqQVVD",
  "key25": "3HFaywGdi8QJDDKwEZKYEsYSe4wDoFfCExvcycx4qqgR2niYkFMtVqznhEteeWvXxbnMt9HEdjgvmuCNsSsNEFXp",
  "key26": "2XEt4DF8dpPDUxws3xygMdQoHKQxXiRpePEvPMxV6a4zRdHtxwuRgHGqjqvTWT1khvEa4kd5DTrvfrU3sAgMpgH5",
  "key27": "27jpm4McDiztHBpf755ygMGr9gsDthwfRLg6q8fdDiJHabV2fATtYeuGK829zMBqeqYXFTijd9QFYpjie7mM9zys",
  "key28": "5cV4HRy2DSPDUkbqqtFj5CfRRoncsUwjodk6z8JUmoxMaX6xrhoW8fnVD3r1vgcT8cCcFYxknce55ZxicN7xDYtZ",
  "key29": "45gYNxb6Zaorh3i5e6xczYbn4MM4H9Uvz8vxviwwMHC9jKTCEzA8SYY9T1SoHpZ4b3hrVGmoYubahD4kg8dQWCuX",
  "key30": "gxkUFDymnhfJFfrbFZF4ki4X3YFXp9Y25zKFrdBJSBesv42V7J4EeDpNpCN8t4Wu4tfbUg5WNe2B2kUMsRHThfL",
  "key31": "4ZH7PRvNQM4e6KwJyUDbbmSWhoabQNkw1R2TaXFP4kdbooJY21NS6b7j8TKbEPUkP6VyB5EePQQKLAZwtsRe6dg4",
  "key32": "2DjPMLZ21RSUuzqp7vAEytFT9fh2ofVrcgQkGc5KB5hsznPX5xFwwndbMm7Qd2WMCCZuX8yADba8SLoA4nfYRAHq",
  "key33": "2Eh7TFLCDig5H6or7aZSk6uKbGADn6kFxuNroYWzXhZAPYp8fPJ9TfZyg8u4Rsg3w4cpp7kCiTiXGqsJV88572X5",
  "key34": "QkSWEZngjH5egAAPy121UmMuP9uCywiXmwaMSqtjLUHxjWhEHWGwbQeuDN1HdRG1vDHM4PfYq8MTwjWLqm7pTti",
  "key35": "nCVZHyTQp3oGWEj7i9ZkggM16ji9fo6Sw5h4e3sYJqena1n9tnq57jzQ35bAtKimcdGAfmxbzqd358UEsr5GHpa",
  "key36": "61Brt6PeVr6GZjaph8Kuhpqw9zWVw3EU3xDcoerzf2RPhaBPgNAwNQpbaDUyiNrc5JmsroSiDpMfEvGqA98WwGPU",
  "key37": "2P8BXWGV77Mb1o3nSySesCGvKKgdHpNQDGpXV4TU7Rn181CcuMpAWhH7K3YMEWUcP4XiZQHjQGz5SUEvDPXSjn5x",
  "key38": "4m1QQ1ieRqEnURMa6Tzu7HfgEvGaSbY8xaWRhp6U7hHjKxckcM8CLuu8HZWNf3wZD9f8mjp8J3shoe6MsKaCpojF",
  "key39": "MVcDLT3d8dPPiMrtbVFbUkbgjuZAR1DNnVYxQwuGu7oCN62NkpQnjQtpP6QD7W757bcV8vxzbuJXCzgg1PweAzu",
  "key40": "274LexAGCGxUFoYPdrDgFZ6zMMpSqqnn2xYTcmVw6D1Jj2vXPzUEjMdAap8ZdyH4kfNSVVf7UQoMxQE3EKQwRDJK",
  "key41": "5xaopNscNJ4sriyrs99Vo1sqXJa8AChcvhv2FpfJWsnvLYWNkMvoUQdz1kMD6pwR6jNkv6zgST6j2eFBYLqiFoKn",
  "key42": "3znUkMbZW2gh54XUEqhHmVuu274rAUrrLt7MDEfwbuSULV1SjyQGsgmtau1gscN8JuNS9W68ZKCTovbFtkxP2qdS",
  "key43": "Acrjjeaz2FyHHpgZpMfxgCt4BzB5pr66r9eNo5XvSpNq87RSnXxWkJknjdPXcAZVJTJqnedRGzDq7R8fBudq6fn",
  "key44": "TkcFjFw2oXXWXGR6Z83rxgkTRo8fTStpzUgzBkpAqbujnsDwiinR3W8ffYcgbdvTnpTrWa9gdZM4FoediSpNUmn",
  "key45": "RerSmQDQ4sGY7QutZ8P7tQZRe7moP4Nc9DqMDWkYDKcQh7TfDLJYygMaZCszhsEtC7oNbbAfQZphvEsibCPeKtU",
  "key46": "32RDmqWcbB8wbHG7Tg4CkYZYh5HnU8UZHFKtbn9N2Egi5orLpwXUw1FykTdTypUHdHVXsiypkZpQKbJ4hdj8hFr9"
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
