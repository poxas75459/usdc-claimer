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
    "2D7ZZbDmaHGkfEJ5oDUTSnkKMNJV9P4x983daS1bM1Mbqef2b3u3U2HrCqopMp9jHAADuu1mwhXqxxjYvAPMmLnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAff8FcJZLFur75QizWzEqWe26n6W1DbkQYnWdwSf9P3DAqKy6nideZCAo4TkkFKTKdZFFpHsxu3jFv7NUhZBHa",
  "key1": "3J9VVVFGjTBv9tAs7soMoo71Hrb8J7qVMXHWRVT1YqEeBHSXL9oPEPUP6ZWpon2pmryYEj71xMjoC9PXNxqoP8sT",
  "key2": "1Wpso4Xk9Misnwi6f1h1uRNNyxwRmRzREidqduxyMX7McJZAFucycGdj1m4MpUSFA8cXGJ6GhFHGmoASvTNqKUY",
  "key3": "4iPMfDRuNhBRSLn24n3XwLNtrAxqV922U6XXNB9fQ1P6nbJDguZdMMXzmQ1xvEijHNbbfmHL7aFDSghkar99SoNQ",
  "key4": "3GZQepy47xDiHFeWjURejaAdiogE5xMjrdLfrj6UizXEeU3guxJ3JE9cpwVNwWJ19JD27VtLBcxWjxiCtPdgL3KT",
  "key5": "2UWptafcVb8NZknXMdqG6KSkzszUb4LkKmkbKYRART7pvzjPTA5jHoqambuzxWJRGHTkFdYnnQKaaTuRdifAntWM",
  "key6": "8WGU3dh6ko7Xu5HWnP17AfZUcbK44i2MkwMiB4UBoCRCxXQbN7awjm6yBWEcxdssz1rSZxLEZ4GqV7ALS4A855X",
  "key7": "3DEa686f3qyBpwMyCDMqgPiq5k8yRqqBfGQMzxdZZVnWRpkPHUJE4bXDJpo3R9g1AvmcXngZZEdzWSAvHVprFgC7",
  "key8": "3pMG44VrAnxtaorxqxThqQqzrj97LfseXrzpos3dAY98fgzyp2QGgJZjWtK6sELTgX6QK9zz8oHYiR55Xe8f2Q5v",
  "key9": "48Xxc9DXy5thxGDkzEzpLFi3DwBvpjNTWDRPuyLnTQGAjCtQcZ4VvnwXNYjEyPhzUxZ6e44smqoBrmyhjeAtaY3c",
  "key10": "5Qpbst394HCYYjsCRAW5MsgUKkPpbmAvpXfen5SFggEu9FVJBGeU6GdtpFCA99NEBjK8uF4FZEhz4ccASQdh7QCm",
  "key11": "3PsdZfDnrQmsCEUiQK1Xt3H56iJeJf1d9g4oErVsAvjbF9hxcdRshwwrNhNNjRSx2vShVg3mYnRt8guSnsEmAg2Q",
  "key12": "2NBi2zaX8fp4nRQHriVXTKBDj9ZJu27YyEVXwtKtN3yKvUWnouhYyiTCKSTDBEtwvkRiG3sRuE6V4mrKm89UcJbr",
  "key13": "5tbS8yexFGpQQCZXNts9NigRcu7y5xgKiGjWtxnfPiWebKwAvkEPJafVs886xMTSUvgKKLhKmujQWECNtuzcSxNA",
  "key14": "2c4CcxdcjvVAs7LAKtJzhmqq5vzVrS4NixWpPvdPJFxbnZdZuBrRN7ZBEk1NCcwfBkU4V9DEUu5tt5UsfYDAXRe9",
  "key15": "25nje167yR4jDmC6dbpt3hMpiUybZgQaC42n7PfinZTahrjnhDpv7oSctdKbMjVz5BPEPnTrWXM8eNZrgbWegFmf",
  "key16": "65eKFKzv5VVoesyorvNyiRsnUkAURiYnQibKzBd4wT6B4ZAUFeBrLjpTN5PpwbA83jcTtHYnwbRZyiqCLZPv3kBi",
  "key17": "FTw8aTKadWnJFQ8jgcdKjA9vTx4CyBAEvKpkqF8Jjax6u8tPPNnungFCWs6i7T4qCxp3A2QnzxgXstnytEurTur",
  "key18": "59px3b3J6pPLq3NnSkNeNSXk8oT3r9akXbfp2jZgGuc6dU2m544gt7ZHbdH9VpyvgiLKqDzoyg1JFSjzRJBp5rRN",
  "key19": "4ggzCwsBJefiRvUPwv74Wp8ndzL1fPbjmYpdvCCvP2V56v8Ue65TUBHNFRbXmv3fPNNfJcX3WNQsmxzrLHhh8nn1",
  "key20": "53HCd15QZKF6CADQ7WVMpyuSjxUbbXLBig4ToeaJJfdVro6EcVQDhdMqeu9vF8ENMJLk4QcSQKP2mij4TXc7SUnb",
  "key21": "4oq23KsRUUd9zCMYgDxYsjNdgzA3T27F7Q2GyCmEYqAmDVNXjYEV9U3GReavB4ktTsraVc7rJTAvKRj7rFPcdoEp",
  "key22": "2rxrmjXEtguT82R6pm4Diyk3Mjn8v4juYcpgrHesLg1op7gKv8sQ8a5Pp795Rd71QPG2RgHM8uK4UYBf7uWDRgnU",
  "key23": "8VqDu6rQ8CeujH9sfEhJsY8nLLocFFKzbvtkFeznAGzQnCaco9A2XL2odg2B3hMuwt82pE8A7689uAXCXFCRLrh",
  "key24": "5UFB1pEktGHJc9LdTQEduqXGmH29KkbvuGFE1wQoqz3iEpLgAwJGsZtb1LUhDpP1W7vjfTPrfFuUBuHhpDV4Dywz",
  "key25": "5eTKcHn2pY1Eby15zqWaP5NSRw2xeKLCmehGarD4uoYeX9cUpTtjmRMMej8aX63iR9TZ41enkGXF2yFZRNBaz5iW",
  "key26": "YrtgTriZLohhJK8eRiR6tPEJDzX52QzEKCy5u1wucEbHStX73fv6UFBA7ktgnARpTRquW7AvWeccmRRawAdzQHN",
  "key27": "3obDQ9iosX7rxt1fcdVYwXqsqUsdw1cwmQTRn3DWW1XQ9JWKa6kys9esS9icsKwrJBRsFaQeFwkXwVVCfnjsFdkU",
  "key28": "3RhtbqVZBHqGNB97bEN67dUpe8WKjF1X8TiUT1NiFdTZaeetg9Mr7JPu1x9tUoerdLQ1emjG5rVEN2K4MKvWwbF1",
  "key29": "2dbRkrRNKCS8reY6Kc2gRvEuLFUfza23jswaWmtvSWBspkc5Dc7zaNi1D87rfZyujzpb4iEXAHAELFf8p6qdgSZg",
  "key30": "4Ks85uhWtGCv4F6zLuxf3NHirEyWDyDsn8wwb3auicCy18euVkxCbx57PZZfxJUgWZmy4Yys2oHE2us6v7i9LPdc",
  "key31": "3sKKq4icC6U5pN5AvVpUGxD1Dcn5XGhEqVKXn8spWG7FyHSPeixKqMhtuU2xNkkoZQtui87UiFn9DtU5zipJh2MS",
  "key32": "QGQDCEBiJbHY5AGwP3R7ep9DuTUjMhCDvuZSfRuKrW2MP553K6yKJECTcrjNf6aqHQPmfdVfjLBpvhGevyGKdiQ",
  "key33": "3cArq8jVedDtZhasTTqwmnoNDuVXpmC7bDYQvBF1VFprFdhkTmfmfzCKyV16TFtM3dbiG6xETJRVVfHNd2NYZwo1",
  "key34": "48Y8UHkGsT3VaM2oYWYc16DLu8GibtDN5E2kf9sapDsg2zJ5SuMVMBvEHWtTpyYFnNFvNiacpg1tRAg8gnUxLza5",
  "key35": "3EuuKvQX6N1UCfjTVYCUcyuqSfPyubbsjkaRFdFQN9j3Z7hQfJVJ1Pc1JaZha1muGejus4XEGC27KFky69govm7S",
  "key36": "3gdHvxedCJeyX1umPRNaGSn78iBtF9z6AYjBxpozcVFHV8UMS9zW4BY6f951GWSLF2JhgWFxXC29SjqchcoxiEmE",
  "key37": "3Ann5Nwv872U4rjUhiAhgamEpKYv5CZsqXr955V7kjRgvTgdzCkcJrnjqT68Xcnp5YyVFSxnquwbEnNsftDhEJ3o",
  "key38": "3WstzLzr2VyLirGsrCXnaxX4XJNqkL7wxFfeefhjtDQ2bkcvTCsAp9BGyuZAC7QeKEJ6ua5YXH4MF5X2s5nqhXAd",
  "key39": "3zz222N33vMyHdYYyRJkXJWKAxd9d7hbtfpTPhrzgacaM43nSanXeEK4SQDeY8ZyJZwyVaAjC4mPaz1zct7Us4bJ",
  "key40": "4QGmeUapKaKyQazyYGRAKs1dKVX8CBk14sRsaQRaTrHxD9McACaKKM14Rop2jAU7acd6tEcPedSyrew1F8s6PY6U",
  "key41": "3Xse4C8evbSft8BMoB3tkwTyD8furyHz6uHd7brGkRFndQZuJEy1cAfgE7x1z7ig656VyYXjVfNucw4C5pZpDwtW"
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
