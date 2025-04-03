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
    "5UZpt9wP2KRVzH3FR55JXf1ZwEYNt2AZAdEwoapvq4hieRsd9EgvmhynystQHA8BSpaxznXCtMGBs1MdFNiWBSqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e76sZBqkrei4L29FBuqxejcre4CEh3kCKiDjUmBQPRDQYQyYe75BhpKzw1nuS5jn9MML2woMuDyimf6VpRyhfuW",
  "key1": "fR7Nua4vzkipDZuFytucMZ1yiHdikskRPJ1JQGURSf5SbyV2tej5oYcxjqpriLnTQmJ88ygUgQoCZqEjywd4KQ1",
  "key2": "32QiNUNwJqZ7SpUxGVViZZwsnAUoP4GsvRRecRQ9Rc8ia8v9UHXEphdai7QpgyKk7zX2jRdaYhuEiRihSc2PDTnF",
  "key3": "4RrzdEGYnekTRQ8FXgcdfjoaFrMS2uWSdKy9PCviAKckY84jEpnidT9m8LnhEvGBS3KDSbNTPexRJAbiczjz8d61",
  "key4": "3MSAPWnJBghPBrDN4jAqJ3S2HAVL5sqDnibP4kVuqS9pPLmvSp9srZ2ST2jvbYM45osWfLBp9oFWdcRfSj74vuPE",
  "key5": "2YCCbXMhoMBv8mZsmun7wXGQEzEDEpeqvsVpkNE9FX86Wf7qBufYQoViFjxMKXZ6r5g9X2AK2wJ78Cf5cwaqmfcL",
  "key6": "2Xpwbjt5TfbYPUJnaS2ZWuhcLq8dxueDDD1GR57mCn1JFP5S5mFWLA36GytaVVEQpid7KexkdprbF8wUgtyPfCiQ",
  "key7": "pH7UcGoK9e5hqxaRiszhj4jFux1gZV5TJExoCN5Fk9RFzExapXkeNo7eEH3MZEwoxRbbuerAKz7GWfqvQEaBReW",
  "key8": "2CcJeB3DM6DQEDzS6Bm1tRB2gkGsh8Z1JdxpAd5DAYQuifjAPzbjesr2fCyhCtT2yFoZ6afUD38KjAEyiFTdncoR",
  "key9": "5MG5AvssDP7H7X25WZWZxvnmTiQd9a3jHes96GmjfDefTFyZJnZGnegNj4PuM6Ziq3HovTE43TRcs1HjLgmNhGsS",
  "key10": "aQ95idVQR5dwUQknXt2GzuCqDwjobuS9qRwQNPVAJZZJ6EF4dp6QxvZ16y9QemuncVbpAT1GfjDqS2Yn638ngdn",
  "key11": "5orzLzcgvrFh79zrGKUA6iaHy6PqmzVqijA3AvHgqj7Zuyv74d1JE9UwKNJv58siUjAeuz8xL3i1RE23nJ8hUZuM",
  "key12": "38TtfGYA73WFFRj83L9hS7amZoVC1QphGeQVkZEaBRHW4vuHQ1Qrg2pzmQZZ6vzjfSMzGDu3VyDeddwZiSVFJuhT",
  "key13": "2p4jZhnVg57L3pwnFMSJwqTDUQK56rVJn2wVqgvqWWaHWbv2ukp5LZrS8hv7kY3WVVgnGnH9e9viE36KW1ArygQ5",
  "key14": "3TLtopFbsUiDUhGc4fsgCWNxkrwMN9NQUSbyfziUtGLTp6fk6BU1EHphGhY3iSkRvmAdHBLVhC4rWHrH1MsmjzZS",
  "key15": "53kJuvBzuLLzRLp3KUQvCHNYMV5JbmQr8fD7fbuzpGSBqmTVYXPZGQzoi9Jq3M4wP6Qk6kTPpxkPSKBYKnai2sqF",
  "key16": "3wywHm7xt9ui9etvgn3NsSxVEtPxtnMBbqgtN2UAci2GmtpJUSQZ2aum8QVayHjrd5dkb2SawhooC1SzLZs3Ugkz",
  "key17": "64z1JXJuyuM11phKuPYBc1yY3q6jfY5z3MDZxHKjTAtVw7WbwQqN2HAzgYpsCZZ5XNe7XYZ1dU4EwdHKsJS2721J",
  "key18": "EsK1NcgQUJj2j9E23SQov4pdTv2yNckMxk66M5fuk5w2GKeAPwLuS7F5jYks64vrRysDNnXw4dH9a6uhiWc7Sp8",
  "key19": "28kWDXGda4sanawW43vBXgJ93Rxm9kC2KSS8KsSnjn7bUkEwJGMu5Nwtv5srcF72AeZCZB1wfhNAtF4cFrHqSv1Q",
  "key20": "xuv4kivwNQgbC2ZrWi6us5uaxB8AR9JD8JRtDLEgCDeGj8ZTHjahsUPcAWxWjtwtuoRYT4PzYmY9yLgo88pRM9s",
  "key21": "4zVRWbLA9FFscV82tQDNFDGYPcebJLFCSPybt8sfzxVtWyP556q6LPbNV6cEyCXHGEPAnFpwZxpnRBPY4xmgyJsw",
  "key22": "5pTRjosRcEedcsXShV1PgN4ZhsTpVwqEGCDQKak5fXmZKMp4h5oRQ5Tyzi8E1SPQCJM7tCzvfSPJ21KviZcgs9ia",
  "key23": "4gbpfVAmto2hrVFbiyHuMkQgXH8VhCRwhKVwtP6m5YmNvtCUkfXwVLWPLG5E84bsKxzf2JL8mYTiN9YV5RsmgUQ7",
  "key24": "4CfajiRs9fNMzd1RsFbmYDDGxeZuBkyWyadLdbFJ3QazHyoj9FU5AKiBoHE9d7mCp5823udHz4caQZhFhF8GTB8o",
  "key25": "3iWqx6hTzq6Uqao4hNDoTxCdB1C6Xysnh3Twnzi3yKPcLF8BeX2uyDny6VhoHrgbU7qD9yUZnhQCxXZaLf6v1qGk",
  "key26": "28gF1ZGqdKnAy4A4N9FwyPgm2XFKL2kGS38SoQUeEAp27ZtiXhoc2ABDn3xQVcMnCJDGkdKj989XjC86tJ1JMAEN",
  "key27": "2bYRBSYqS4raQM41G94BNyM27e7o7oyeyXb2Bsd2xJFTmrzosVzKTyhWdzUvujZ4pR12zYtvDxKkhNRUCPnXvcWy",
  "key28": "gKwWmz7gnZCpTm3PtLF59UHqsDMdvKeZ61AwthhnMrPbCa4noqj7FvwnnsPk5p1Ms6YDWtdTaBjXN48F6k9r3Wd",
  "key29": "A1oktxQwLaqHKX5uswmgrSfUk45qAHkNrsAQeSpn4sFM4DYchbZuvcbsCHmWvFGz3ydXmCFQG888xVLdtsoPpnF",
  "key30": "yp4pvetJy2KUUZ4CD4HSBg7iaBauKLTkN8jd4dYWYdSqDniPi5tH1fKvXAR7APfRg19pG5i8M4FMKNGmnQoJ7ms",
  "key31": "Dr8cvH9pxhcAhejMqqVs5sQYEdeX9dgnuyofXppNvWVSasqUG6RFVuSr5UKB8MMr5aPkrkcgttX1edQFoJFS6W3",
  "key32": "Fj85Gj7uwtrUhuNDcNNdyxMqhWKXjRAjCybiTegp2vmQzzenaJHkyDFsoqAc1CE8UaDqpk1DNHtKtJUAwGouYjV",
  "key33": "Y97fFMppDzaSEiHbjAs3iTqDuMm7mnTxJ8maET4zbHGE2esjZ9SewCJYMaYBwd7GrZ8cuwBHLz6r8KcsjinifgP",
  "key34": "2GfH51VrFpe5XF4Qjf44rhRwLW5o7wqYFg4nVJ2MZgUydhp6vyW7FVXiRD4ENaZod2voMWFCUnRdLwrUzJAepCjs",
  "key35": "m5AEHufwavaLMYfrmhxKWvgRsMCN9qH4GGa84DNWswGiPDcwSvPYZz4Vzp6MCkC5PosZgQWuGvW15n4WYRnUAtY",
  "key36": "4pC4ny4ybGPuNjPQoxKMF6c2PRV8r9WxxMs21BVNY8zh2BShAMr2SrnJ7jWXPj5xoZbur32XdRa5TQCLBtGRwPt2",
  "key37": "5FxtjnFFnXGxt4agLNa7cLYK37jjd3VpAbYDAM9r2VUeMh5RkUzun2bBFRUGHM1VAUuCb3iK4qvtvKikLEEKMEep",
  "key38": "2YBMFZYuKLy3HsniTHmjbVrAF767amXzkGHL4basgvX4eybHttihP1GrDBXcrEfexhv98CFVifjFT234wao3utGp"
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
