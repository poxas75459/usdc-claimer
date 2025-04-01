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
    "4ibj85uoa8GFPwMksjqiZu6bKFqm5C44z7bXMXHDTpz3dqzytyvFtyyzy4zrQACykpCX37b9JMeuPkiVkvHNhej6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5PzenXwRrUH1jdar7cKWVZVttiG1EnztCqE73ww2CWeueV5jU3qY2v7STtQwdJ4ghVmqNEBqrcF3cWZcDE3PdY",
  "key1": "38qv4arCYrgnu8QBtGhrp7E6UKVmykautytpGwjanarjPB9Y8YHPSCSPkwoSq6wRiJiinsPX5Kkv346PKB578c4d",
  "key2": "51TwNk9Tu9ezjFB7nvq9kpXwSwu6rPF8r5x82sMGG4bUWjkwsTtnvrrA4YgG5XaX21rb7xVsoijWbPNUyr4RAGK6",
  "key3": "4kRuQRXux3w8QH9K6LTFUj5EMagNsHNhvts3eCo8T9V6CmTzQMya3baXFiuyiRnkABYKFQEjzqfF8GEN1RVF9oUU",
  "key4": "2LzMdiZztKqydWS7Xkkn5nruRAVGDpX8kAjkYkdN79FbW67TfNoa2v1punUKXwpgUm3GrD3pEchAiiTeVRBN8Gdv",
  "key5": "5ihXZTUdCiFQv6KaiZUrWuDutj9jN4rX5ZSF48Va1n1GdUS4SkQ5PvzPZrecbhLtiBg9QFcaKpDsSWi3nyb6d3kw",
  "key6": "5GFf8gXPpzrcfVYDSu51xdTBCZFd4cTjw7ptNF3PNx7QrHR8y2ueU8jrnykUq1mfNY1DyhaS7dHsQPt9vQwRCWVN",
  "key7": "2WsEWorT8KqdfedRKof8QX8YEkhR75K9rqf9Wg4cSQQwte8JViVuW15AyhSBmRsTe4zJAHgTnVVHhC2PdmDPXLFo",
  "key8": "4svKUMvRFY775mfwMs9rQeoEtmisSYPiNW6E6TdfHnQLF48sKXdNsg5Q9TQfCAG9ghEbE34XBsHB1NrjikJuKFHM",
  "key9": "5tiG6bfgiEeL1hPKC1BZikSxMzDgFGrpDr3xy6DA2PEWsD5fijxNjir1Aip3jbxs1eLkSqr7NLusufYwi8tFACYo",
  "key10": "4g5NiGw9vbsLN1ufj7KqZfcQJnD1EHCE4quFaigaANPHxsvKrpHjfEcJYjznWhkn5VM6Js6cfdvyHJCx6ZCJm3Rv",
  "key11": "5B7GPjyu5JYMLcMPeaLV6vqb9HYbMefti4ncyBTiiYDW5XUEMySRZB4VoPF1rsj9J5A6KjsoAG78VZUk96z6Zwz4",
  "key12": "4EE2u4hLYMdTQKdSx3qwd53AxzhnRQSigJ8stgUHu3c49UGcYixMhSUAmvVADNJp5bhWiAYcvRzqoA2xv5vUvEE6",
  "key13": "2Yfervz5RHewBXVEVRPgxUg7ZbfHKsRYGwkeHGFCzvk5sRfc28h1hFLxxbkqLMiFpEVt4DBRhS1xwHQfJJub53UE",
  "key14": "4w75kiNx5TTpkG9PHCUT6Xa1gQDHJsVdDfaK8NQzRPGD5TgEEpgHCpEbV6jv2RrNbdoTfRssn46TkweyKmtP4jhC",
  "key15": "j3pofTC81d2egtPzLV3jBBw4boxzQzNmvUcqchR92yPVqxLyeeKX46Em6c4qgesZpHNB6qLTDuk4XjSTMTnV2wo",
  "key16": "HrUVDNmcqrmUovRyB21VtfPf3F1huJK3GkMebh5EjK2ZqU7kT1g9Hgc8gTHpoyHbSSFJuE3RXsH7XL2vJxEZSNv",
  "key17": "5TPJ8J1ABurgX9Nz3S4TaJ3WHYF7s4efkxisrcEuewrghCMdTdG9VMana9ymmuwEadEK5fjxdxGKnuZkyYu4wPQn",
  "key18": "4FnmV5F8NQaAsfQFyQitFRhLrH8Mx2CPnvez5Zp8QcS3Q5Cm3e5Yy476xBx5LbrsM8rTZ7cXo4uxqxMyT75Xg5kP",
  "key19": "23QD4K1rAikoKVC9oF5ZyVbRuVTmbTGvPj39iLr9GL8mUXswUbnXx9U5kc74p4n4wdMjAeHG9rXJCnUhGrqkh4Re",
  "key20": "YT2PfwLuVoj8rraEwbAWT9qxDY7mH4FpqCbN485p25PDLNoiWg1iMrUAm1ks4kFB3dSK2ViuyysUc6jucR8ixQT",
  "key21": "aP9rK5sKjGhLp2n7yED86BbesP3Ne6c3F8haXQRiMAPMn5RSAD72xRSuQuhwX2jJ2g8J6XXeAj2N3rga9yDDs6A",
  "key22": "2PGz2jfjJAJGabUbhq3fbpktvKPSbCPd6b3xYJ5XWi7maWZWdy1sNdBBRsnZWsFmXMLJEkDG9baeDJT74MEFptWL",
  "key23": "3dCCFXNYeq5vXptNoBFRoKqMohMYPNK3oc4csadPZMoJ14LyrydiLWS5RWADr7jyFVLc1Zr9qnXJYAwTX5wthh7Z",
  "key24": "5vAuK8isPaFjPi4vZuyN6vAFpBPDC9G5i6VeM9vCbps1u4E61be9PwXKQKCcmtdWskXANovARPst2Lk1SF84K8nH",
  "key25": "5ciiNtNqYb6Ea2UvAupv8ZpFomNLKxgc7HCLQq9D2xprX49uCRUhyvAvf3wpXfR4uCDfJMKibXeP5LViGA928TVw",
  "key26": "5EFswU9F2udNTJfq43ADhzgEqm2zuE73BgEQHUbJpHvPUqEky7Vkj95tqrk3p7r5qwvf9zm8z5LwJdN6hm6UfmMr",
  "key27": "3ukWuuLfvSLxoEHEjQWtokWFiPv1FPHrGfvkhLAi3xmSW5ZS9EATJ1XFqGd3Ts7pV4fi8P8WPLuwK1bkhRTvsohv",
  "key28": "5RZBQUS2tCRMGhhCvcDyGgi8aQHMpz9SL6ouYyPdFy4cWoe2adab59UwnHz2t8pRogt1ywGKF2WPhMqMhU5FmHnE",
  "key29": "2A9Gwa5fJA8hEfeE4Ro3RMtnb3U9B1jpnLgeU4vroBAS1SUXwNPRygxyWBkxb7BC2MRc4gEiJZhogFBtgFdBVSNS",
  "key30": "2icJaZSNHsj2ZsCzs6AmkSNiHVUGvYvdxqQYUW1CYEuN7V9pJFaa1YmYr2rCaFx5YcADCt61BSubzSuarDtn75pb",
  "key31": "2hrbbg9Wpr2ZzHLFiKVWn7RgNj51scB6BLS9YxPAR9qD78Gi925ZXwxDkiXcWWvuNScqkUxGMtPPsNybzpNy5C18",
  "key32": "gsrM66Yw6zNro1NBC3EZqnFAShgsBBTVjHNST8RcvUSiUz6U4vLtYpxBF7ujjGBz6ctr7N8KssMLnjSTkUQARgU",
  "key33": "sBX9CLUnywPhVMPu4uk1zcNnx81hZBJ6HaryZVK6x26mgD67bbhMqpz46fxMr8Bjiw6DFE9qVEn4DnYjdWWn7PA",
  "key34": "3uVTNu5oEVA28eJMQkwhWLo9J8oARBhnr3tJS7YgEsKh4xnstNwP4k9p1vR8GPaGK1uQfjpsWUmgeE7VR3wHNGpC",
  "key35": "3TDS5hyG56kKXNb3bmpQqNbjNvdwdxo1wck2uYMLnX47h3TFSSyUGjkFofsKpwQMSFoZtTjTkv7Y26xxCBmQy8eq",
  "key36": "5MXTZ69DBL5iHutPiiFsELdnCkw5SdWorCf62mMGTQrLN4y1KzWZRwn3jafdvzti15wCh8Hibn7Z7VrkZjBLWT3u",
  "key37": "5skJmge5YdciU9F4HVggqJzEfKjMRu7ZpUMRbt8qJQ6Gq4ZQQqRtgoK13LumBAg6T1Rc7kzL75DZCmjmUj4kYcJT",
  "key38": "2ArBCXMw8beLZGG4ncaXfRXigbqrXRUDXvhTWZftyiNErg7kKHiaSmVBW8HpLvwc5GUEerFYrckVcLY4a8b5yEqn",
  "key39": "QSLKNhUXBhtcRirV7uqQyQ9ar8dprzAqVT4bxu8qwSHoj7nEhScHQe1anhWwjyy5dVKcjV4aXCeGP2mVdXsvXxw",
  "key40": "55ykYbT9xKHw7PHpcGKnLXaLPHg8WHAhLLEXWc89evJJdtyQ98CDVEAuKURbP8EbsYgrXnndqNDnQRsMHoK9C1oG",
  "key41": "2R7J7qkKe15sFyBDjYy6XH1K8Lx27SgpcDUqFNpAdzHiT1VZDEeZqibf544fT3DMDFdmGqAvjACiYVT6zBGmayp4",
  "key42": "5BxgqX1tBJzGWEs2kXxQ79KnVqWe8ENaSGhsPdDFbg6BvnaEUarsixnD5t5HqxJgn9bF8aBSwAUs6KV1wKwoA6vm",
  "key43": "xzXJgjbPrtoH2zCPja7WRPkwEPs3XsWVS2FTZazykYQ5trkVYqP99WYhBUpcHNvGyd2qdTsYt9khZsJrPGv9VU9",
  "key44": "iCkRMn4FgSBL9NxCT7LVzA27GA3BRTuPJo1KY89AGfWz7sc8vNVVY1XJ9NCXDC6CHCcJLR6g5WSvpk12W4UzZPG"
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
