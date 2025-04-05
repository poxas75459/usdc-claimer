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
    "2YxK4q43fzW4JvPdYsap5qC6aGygv45N7s7NKZRHqiGuoTekd4pHivQfUDGu18svbMqYgVFtw1LV1jycDx3KLGgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RsdiHsSEtn31m7BWeJn9muwi1e1xaHqtNbu8joP8jcY4oRNJMfArKDCD96ETstwppT1PwS13ozjJrcpqkvi3qJ",
  "key1": "3uS6RCL96GS1G4991jXdixWhzyBuaCPPU9oiGB4rxpRUzqeCNSDNqikmNWwDZFtpP7eEXojMrLrgNUGS9cusq425",
  "key2": "5hAA4PwEUmD1dS4Z4FeqBHEhkoddq12cDtXjNgLWUwtrWM49RiDyi4bqCkr97if9saGd3GMhAbBmXmnHUzARLYxL",
  "key3": "4Z4HZRqVKDdctPUnUEaM8N3siDRoYzHLBJ9PPWD14VxMEtVjfNqpdfPVSwEiFgtKXcHTxa9vbrryy96eCC9wdHz6",
  "key4": "5xrZu9rJRnrF5ogB2NhP6dgsNSefeR7CACdPncmLrRLqZCjbZZijpSbYechatBu6LB9aYJYiAsRsG3j5nqzjKzjg",
  "key5": "5hRRyCvUyGsrwCy4DTj4HQdDRfbsjb952Ckej6khcTapaGQ3oGX7DNutmn5YfNmuGFJDorQiKFQJcCyRhxUFf5SH",
  "key6": "5NHtmtRiqid8sh5SnY19ycQ6ssP7zHbJehD9AB5kaqGULW2gTyrc9szVxejk6f8sqPqp9NqgWj5YovaZ5YxpKVse",
  "key7": "4iFZTxuXzw6TTkP7nNGjuLrpUZRP8odMab9hRhqA5gSmpsHVR9WE7ardJZLecW2K1CpgEYK6yShfMyLZCRhCf54L",
  "key8": "51kPg6e81o3ex1RbeRBC1iFVawkhvgGG3S1sxB8Sp1qAhWxY6XVqivZSCaGPg8THLc2wUZFMDvfTfB3PFbQdRSNM",
  "key9": "3B2XRSVkmUGbaATRuRAuEJVCoaPJ6vX7Qdmo9ue3S1aJBTaTjiVjZuYRswjboPWUNNLJs6PUTDo1wRXYCQmsqnFW",
  "key10": "Bq7bwAPRdmpKVRUEY439mmGCkJ8snGuYTZEHzvd17KEJc52uuigMeHnV635Xg3mbv6PryHo9qJN6aTqFN9fwpRf",
  "key11": "4rdoZqzPNCGQ2Z59RDRUYaqBPjtqYwBoW5V37eyNcaLAWLJLvV6RttaEE3bYw8ompETgLTvSXESF8VU7wpd5AWFE",
  "key12": "37RXNGeNkpJEeZxS7nKg3Msj4wDjDpXczJyUauQoYQiFRaYbqgtjW5GLDKJrSgjj67s2GAiFCeEVrfV2vmjWhZSW",
  "key13": "3cncenVK9t1GnVsXtxB5Yjco3ZsEcVYqUeEPGHjzkDJcgwyTmgNcCcULC3dxWgWR3qwKTRPkcK7Utyx44jRdXmiH",
  "key14": "VBj1ePUaJjBgdhsjVdzXTUmxGPrWwW5zBWsT4WmQGock64ZrsTA7A5HJwt1HEhZ2ZeuSwuj7ZzTd7QtfZAMZ4PE",
  "key15": "5jZboPtifuk6jY11zjGM7hFH7mjrYRvWXbgQxEo8W9yU2S3Qyc3F2s3rhs7qwjHpbfpNAFFT4zVVps8tv72SZTiN",
  "key16": "2nwkMLvMaCEe3YzBUCH1mEASWPDfYD9s3nv9osQzN7hS8iJDaYm7Sd72iwGJeuacDYUKsan7CAL3DLxSb45t2m7T",
  "key17": "2ZFZW7qPhVQWmouxnbF6aHMBZ4wBdGRehgH9aBSHEDuBNCZgvFAV9npFzYPi61KA2yRSv5YEso32bLNmV6kFLStX",
  "key18": "344RykzjYY4kUckqeQYngTiLJVhw96oVQxxZySTaRFgAdNF4k2YjCzK2nwkXAaWbV8BHshQB4P88JzknUBB3S1md",
  "key19": "VjkBhWeBWkJE7EAxPYy5o9mt1p6rHUp7kSARczCU4zRHKj9rLNFShbsQeA2B14SoUbkMdHWrDvHgErfFBriuNtu",
  "key20": "5ZsFCf9YUPPWhqGCWEFqtWiGD5JhjM9TEjGs6bnX7JEdxA8mQYUnZKxCrrUa4QAHuk5nCbDWC3jSoE9BVWwREq4N",
  "key21": "4Rj8QWFpdQ5TxkBeut1y86H65rGrgitJ3VMt1zGdnS4F7pxZnymzGFSbzKLFDHjyALTzv3o6newx1fg7jB1eM3Nx",
  "key22": "2DG1RYmmekroLUkxjK4BS59sy4JN3FK8ZEApuovcmHZnMuWsB5TLjycbFuCvMuTF5GXMUHTLmtD3d6GvqHyvz3uk",
  "key23": "vkHLMkCokPYGLjY47pZq2UPFuY4ooRoyBxCyVXD4jJ2EyPVpbGMVZN5wZ5fS9d1iEBCMTHPNN5vyQSk7zYmWMTr",
  "key24": "5Lx9nD4tULmfXCGwpnCcBkZTmLevE8CXSbooV4XcJcgP3m5u5atPonfQVmNf4PDkwEs2b2jZFNd1MQZJ3SPeWTAb",
  "key25": "5KhXEZadzobzwVDKZanBFuDXSszwFN2BzTP2i3FPKBhXtdxXEa9U8bXXvD1kav6phqd9sbfyidJwV14NFcKDSvnh",
  "key26": "2qKgKBVtyoH3WfTUgVBwQepeLmprb7KwUBq6uhgfdmWHhpLpGDRFRFJLrLqvbPac3tofeZEH2LEgrwuUhGvzHB6o",
  "key27": "2hh3B9AKjQHYYjNuXb2JzJRVgQwxL4P2J66rZNDMT631LQUC5RF6RJdLzBmyDmgwf5UtKUvqu5he6jjnQMAocbib",
  "key28": "4qgfmgFixjFGinQsVkhCSjUQyXsbuRMTbuFFP7eVCDB9TE87j2u7mhmTNaNasntRAGWh6dmZk3TPUmqu1zMoLkHR",
  "key29": "2pZx6XQHs2vD76smgHqPZZKdjdSLbwidywiDcg8iwhvXtnagNzHSHSVmo1DY9iebdNUbL92umHFMWy6P3fX5EWgv",
  "key30": "64bSQGPkWBcnDJRChKBnkyzjnNwaUwgbNAjSkWBiBZJKLT3xXJ58Dy9r91F394gBgGPgEaUpNsipgvhCkvGPaYEq",
  "key31": "58HUjpyMc1Z7ohT4jucgg6K6RHHx216MCVYyUMBwaKpVuNZeJg3er5bGk9aWDrHQ9fV9wTiUN8f3jCNfzSfsQ9bM",
  "key32": "4xAyEehs17oeVETBrFRLkv1Zes3xdJWP5d6sJgU4u77MMAgv26brVCbAK5o46SZgH9V4nx7NDHYymCucxzvL8bUK",
  "key33": "48HwrMQ5HjHFJ7FAS6caCNpeYX3wLZQRFdD1bLwRgD4ZXSSPmWwXyHTAhsCGVieXNEzVShCuKGG6LP9CmisVC1hb",
  "key34": "2HntAJAKovH1M7Nwmz7LnA22XR1xvzZND5zvoRr7nqMEL7ApzpC7abv6PBu66LWeJK5HmK1nfhX4gq6Sapp9ZzB1",
  "key35": "2JdJApns1rNkn8FHDGqkVXKyTjRQaxb62F7xKnpzk2KoYZASDDAiZVWVNkDwBctAY1JNhRCtJKQhqqWntgDSi6sj",
  "key36": "5UqSW8Y358adTSyFAwjj4DyDGS8muvr2AwQ3tcR2S53CatfasbgabhcF9nQDPwuAkCKGPA6BxnTXvEbg4z8rhUWz",
  "key37": "2kaNjEBr7oqbKanF5i8qiZq7FLkkgTuYcFApcGHdJNkpqda7LTke5P5kmqoSA1soYaGeMutV9MYWK5P1mKZLURfg",
  "key38": "2AgyEW9qFesh4NdBBbUJZJDshWiQ1anLa7RtmAYAzR5KZVoc7Gw62Kmi5jr9wGbygVjkUSfQVoyvLjvkZcMM5wc1",
  "key39": "2KVJuFasB3uyEJqFXWBssCMYTRHKNP5jQxvEesiq6thiUntMsTaMeZjZnekCQFjvoGCHVhrb7pLvSrrZ1HMSDMLe",
  "key40": "45ddFtwDu5C829trwF2ta3HzthwDYkhR2QP3BjBy9xstZj5Amgmj2Ee8GUEaSZ3fshGZ3As9JbMPxeAG2DuecwV3",
  "key41": "5zXatTe3w2Yxeb9TkPjEsT88kJiPtdAcfjMxHgQErpF4juYHapoKkYEr9KKrWuqYgomwFKBz8qkzmDfohepJYsaY",
  "key42": "32CCVtjhXnbfamVd4rqNSx75BKbTepVStirtJThj4Bt3u36w3ad4WWKnheMU2Yg3p17cFUButeuCHvNYHUcw7VMG",
  "key43": "2hUnfBFV7nsFg7s9WUqPgig7chqKTffmcNt7Xqfg47Q1RHieA1yRtQvTKwegFuVmuAfG3Jn5CV2X1qyDbNar2Tzi",
  "key44": "KR87gzW38e3TmrbwunBoMni8HUeyzSHipf7MrtLuSgMa9Vz9KXcxNeLQsfjrpgAu4b2MeDGAfok8WFuTQEo8eEY",
  "key45": "2NxRt5NiYvrrNge54HmQcp6WxDARqgKkzXn1yc98QhzkTGid31RNPu96YtMK8YnDcWM9VMCmv162tiodMxmiqz8e",
  "key46": "4StJgVWefrpJoJ1PsvmbnSDJ5qfJYZqbvdSJGMoXMw9h2royXpDurnLT53ydSrCd4jSThbYApvdYdZxDuazGe79L",
  "key47": "i3BRxfv3QPD3ay6uy3T1hubosP3LmASuFsh4uUNppLMqd2JkjNYqkeXraaBLS9sptTmtbEk8MpoGf7M5rxsaZbs",
  "key48": "4hbAB2P5YHWrjWNHHdNYmWQDV1ASUQgpQBjxLFdGHBynKQmfmBLavboXY7JwaN4zQdaUiCvuA4JcAnbxozYPHztA",
  "key49": "36p41BfbAd3vBKCqdFMLqZYjhT25P9138wrKEr33tXzLXiJsnDFpv4zqekcw8XPx1Gp2qWVL9zVPrKjxo7KUqSgr"
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
