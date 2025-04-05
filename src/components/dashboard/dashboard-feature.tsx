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
    "2JFDCs3SBo1TNoBv4H1bW1QFDpxaSD4Cy4Vr6pxAVQYhRR9EBpGqL5ivxnyiip2rRrgAxrT8F9o9KsEL9PAig3bF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "voG1KtGnVGBXYFfpfDQBm9Q7XQBX6BfvQKh8unS9WPoU3rpkQ8Hm3uveK1LaXbYkYEeJYJ4BsLGXeMibesNboQA",
  "key1": "4VbSXo1MUo4Cze1NUYb63yTW9g9WwJAXKDwdkVBYGW1Sb7RBxEiZLu1m779WAtWaEkcaPCQS6rWFwigGywUJ8oqi",
  "key2": "4s96tXUo48HyaooABCPfrQSNmcPBPG674zabxoErKX1D4EBQVkpP7T3Xab9mhP2eqeMbEKJdca7mtEyFgG5wK2mK",
  "key3": "53CxBRx2aixYN6RZjV3nn9EpUoauEJpPuEagoxSvcLm2x3gWNSmCUPHRKf8JXeddSWcXWX4P964xSNeqjvqvnZE4",
  "key4": "Dm33iackpqDw2MsHSnTgDyYyhdK6dsjQvNsSZ95JFGehbVt2n786cZjbQDrxmwzauJRpSL8LS6Eak5EHy1KGvsN",
  "key5": "JyRb58BYiEDKwm9uRF8tEPytu7yZde1WWtFwtTd5JAibq6UQSsZxieheBtET7QHbTeqWnvM9gKj9orqGjEsotXF",
  "key6": "2QPKsjgfgXG9vYSmifjvMahtfVSbe4CaS7ug2oVgJpJk1bZL4u3uxo3u45obqqgUM2nJLCY5sj6N5xCmiSQ8qPwS",
  "key7": "5xMpwTQM2ZAtc834ZtNUv1VzEWJhRUdPnM8vYmA9Lw7Xo5h1G87ayCoh5fTy6RX4HQ1zn8Btoq8d3ucaKWUxCa6z",
  "key8": "45skXujoWtw2pFW7v4fEDb9cpTjmtNsBRVXHh2yVDXSquWFnzsJhK3eMLW4QpYa4XjkuVmn6xhTNEHpPmV7wxHAb",
  "key9": "3mLXLbLzDvTiUhirirCu18Jerq8Tyg7L9YjBSkPAzJCP7be26sgBb3LHP8cvRTsTKjeBxhVVvryEfTPugyvPqMwk",
  "key10": "2y8C2MuJQsD2tpLERWuLLJMi7ToprVUgoSMMLM1yvh9XxyTd2LCj7jyGUZn7NVS8Xy1QYdtm5QzfKEtnDdfdrKJ8",
  "key11": "4WbdmzxrkV77WCxuZCNPwhfrc7t59HAa1u4mG5wDdnduXsTR1X9mdrPHG5Lzd51BTW8jDSN9DVbBJkDkxmLbJB2c",
  "key12": "4sNjSw2moMsNsVE1EFL5hy9vDjEvDLCMq2PxUc4efFEcdDJ3Bq7ofMoJRTNeK6Rov2APCiTsPZXxAvyT4Lht2cFf",
  "key13": "65tExT76M7kc6hNfWFcUa4DhHEtYrrquqao82GF978QtFEGqExLJ6fpcQvBgQ2EVrcWyP3FQP8C42t5rAB8Z63N5",
  "key14": "2QPhDjyvCdmKZzFXqGDWVX8uwCD2cXhLSw8iEmt6ks2m3ZYCs1AaJvLJa4pJ2Ym1rJ46TWKocjcFDZUPTQqjKN6C",
  "key15": "3wWY4CrkbbnqT18ZieFk34XUoDrA8JQHKnH2NE3sgV27bFghBtRsiifBSLCpfuwC38s7fKPL3oZRdxBi5xym5PKK",
  "key16": "3oEYoG4cS95fGg3GUi6HYgthbvVrvUGzJHTK3SHkxS3UCQC6TaEWgujgWvYJKzax2Le8d7sTcGq8D622z2hHw1na",
  "key17": "JZpaKLcm1JKEoHzF8WUTpyKj886pCESdoHD5nmtSMcgFDv1ogQHD7FCLVsEQWD2hmcesgrNhNnnm9shpV28fG8C",
  "key18": "5PaqnTWqy3YZsa2NxVYcn43eUcux1NKKhmUbpyY59LxCeVEJj7SS18DLiBe5fngDXTjVewtdbhUdEkisvd23TKdE",
  "key19": "4SCvx1NCQd1yKws4ZcmzHaw3VJdrqMGMj1A4mmZPgYSSEJ4Amt3oVSYU4GidUC4FcdpHzZ4bJRKiFQNczpCMR1qS",
  "key20": "5zKAC7Y6QHsz5CNUXejVtytCTs6Ezp9xcGQdVGub9X7pab9zaC51ozDEUjsGoLdPATCSqKw5ezdxhAfmbxM9rApZ",
  "key21": "4HTD1YY2C2bcmH22PK17DMkME7PjxhREbdZ4kQUVXHLv9g8ARMrqpixxn1Ryjz8L7kVPj43az4vP3kSaAxjx6VoK",
  "key22": "3CZKdERRzEXDA3G6BanS5dvmYMfa9GnaSieBNzMAnNetvqoZoo1ZUr72EVNN8skpFib2VZajDMwnia3fS6fXQiCj",
  "key23": "4H7EViBkbKZ2hzs5QH76D6qTJZeiGL4pA4KPQ7PabKm35RC6acCHvE5gJrPGVGXiRNGdoyB2TNbLu2uDfMhkUgy2",
  "key24": "2P6k8gcz2uXPJyiuPYL3bMvLTL8pmtEtgv7wMq6CLqZbDC2Dc3aDcDpkwer2iVhvCPPbZYMWZuXQ6yacq92Q57wC",
  "key25": "2zHXZXfE9ijB3UiUZUHkXk7jCFb5nwPL3pdhhVsKHUzta6YVwYtoeASZNLZhZUdSsN4tErUgsmoASn87pdKrFeoE",
  "key26": "3WToYHZwzvB45Y8KTPBBKqwX5cJLMHqcQgFCPgnm875x9pMnJgvhQjx97PwVTAfY5ynYMMHdyrtPnt3LSgMhXQg9",
  "key27": "3JGXHDFFyvBqhEfxFKBjiyF54ZrngSo1xwaFpGkrPWR8LS9463Sx2X4gXBFMys5Yv8C8v6DpQBzzHrT2yq8aBjSE",
  "key28": "3rEGuyxszugk1ed7KVMARkhGrHyz6abNq6JYGCdDd6mxrkL92aXppTsch12Sju4b22ezz8LnG5ph7o7E9ziVtTyc",
  "key29": "2rCXbmJ3LcGihXe3JtekApRXtojKNaNtvQzpxzNpbUpHSZ44v4P8rTVx7tWGujH5t9Tm3fyst4HFexAvrVretosn",
  "key30": "5nLrYQTYFHN72XfG2YUCjpw5ywxLhaHYcPk4qcxncGs1BCLZAp7r5ZqB33SSqxqFFrxAsQmv3dZv7vNRxVBTr7gk",
  "key31": "3KZwt7iuGkcXVsJ9qJCthPoEKdm6a5qruVBPa14HanfAnkWFT2KhENmm1PpTUEpejhZgXDVh3qJyzdJtFx7tiYiJ",
  "key32": "43ojF12Br7VnNi1E1wzFFhYFvy4aFRuHr2YWYz5nGAi4QrFKoSDdXcMP8NcKPyikG119EpMqhAsb95Z4KcAL5WYe",
  "key33": "3DprcPMdViLHiLRAmrJ7APNJd1aCJjBkoKbcdYcu7RXptacVCshVaga4xvnTtutXcSFSTmAKEWS8epoH4L71ByW5",
  "key34": "58of7jrCN3LyN4tikYnXYBNrebDrx8RXMobQSsvrSNT9Jeu4YFG8af4kgppWqrc2peRCufi4JTYWnEKHsy6DFpGr",
  "key35": "5BffyT6WFFKtxmJ8ZcYWd9wBqBo4AU6fxaXurVrboEqbLR9g58qUphXGe3dQ1V5SRXn8ajDJs7mbjZNSKVK6xRxH",
  "key36": "4JfcMfgfmAXsPBxCNUbPvLrKWut5S9HGpLYPfsyQzS4eFaH881MHxqRTSv98MuUr3vRP94nmUVrBXRA2vZGzg1ph",
  "key37": "2c1DY7FCsJBvRM8xNQPqt3KsjVSkcmKVKXCcKrHkWcgH6ErmYjFPHxTAmj9gHzrHQg7N6RWogtKsqNH1DSVAX8WM",
  "key38": "4qehB93HtDTvyQ2R9eo7xHiHXCxhorHMwMSiZCZsExL7a64KQR5nHjVDmzdy36VxhaeEXuNJE5aqH8KGF66usBN1",
  "key39": "5JF5fpd457K4rbNXrumjMejcnPjKayovMXBQSxYNAS2TJsJEFKjmezSBbokYfL9RHT4RNmbHk3SPKVJjtnuuLFvy",
  "key40": "ayCxbGHbCihGuCbYgTJMTmzxHWCwyRQAD518UkHHEp31nB5ozGbUW8u6xNmiC1nAAD2WUpJPhUgZA64mwdbGvpo",
  "key41": "5pf8xXFMUgRPmPZRY4DovupFfYLcsnMNXGi3A7gVNwxJJqTBUuD7ARhR8yWf7r74f5yuyztFA4sofDa5KdwSsc16",
  "key42": "393TpXUvPqgXdJjFahr1cT537PJ6yGsX26N7RdH8KfyZbjf1Eijqvve6Gw1FdP9yFoH8LUeWn18AAaaBo2PNgqEt",
  "key43": "4DazkhphT6KUhHrunEXNmqdWSDwvgQEUyN7Kvm4Qj9C2jsrifEVEzzHtdWUh1sfJ9CHmQ3UhT2BgaLu5YpFZUDd4",
  "key44": "25Ufk9zY9E9Qee6yP5r8G7CmQwVzpTQj4tins1Dv8jdpqPJdxjNAnzjMXxpVRugifaX2gbZLPs9omx6cp9GdeHyH",
  "key45": "3ErifT1PDdsxjYVfct5w31eQPp5UGM2y6HMm9fz5KVVkSbuwacTqnmF8mzv8zzvVuHm7VdcAH9UpJfp8cqenmBc3",
  "key46": "5go7Ei9J8AKyrhWQCj6a63oYWZQnwTefiZHi7YA8oFzXTExTzvABuyzaM8tgUfSAEG4YKWtdQmRuSotGbiX1iUMr",
  "key47": "5JHWhz8gNjetaGHgZARPExAquthVzfE5YmmEMaeJ3pmmDJ9KfXyjGxHEjRqeHuH8NvwCvW9jDRD2aTD5TmX88dpP"
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
