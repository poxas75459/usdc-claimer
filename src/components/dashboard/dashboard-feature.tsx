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
    "3NvxfgZgsnHto8yuDG5SH82J3cvZsdu8BCG29UkY893bZ2ddPBz1C4WuaP9WwVoidtCFcfVtny767TJGYwqLc6sZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXdxapjH3Wg4or3mTAryucZS7CTADRxGTBEfavgu8wvSZzHQtFiAxKYNfKEouZC6oocJfbmNju2W6Y3Pr13Tqoy",
  "key1": "5eX9bDgoJd7h5HpdF9WcKsSzCgDFL4afJrH2wA1GZegrFv5oMcPEY48iaTvPgkKikHofzTcw6BN4J429HwLV3xtS",
  "key2": "QBiyaf9vzj3bn48xeDuKaAEMmmxUzM56vkAiPVZQibn7jutnWDS2NPnyhkH2caVGtgqQ4rGMEhjc7UCbG8wjqbs",
  "key3": "653ttGyr2JCDyccTeKpBquPyZp77U2eqNXgC4CSeJAWLWuPjFtBdFiMDSDntMadJYdBQbX4TUoFmxPjVNgrkZQXH",
  "key4": "27uvroQKoCKsmGE71MV7JW2ujR9JyNayTFxy2UX6bEpD1PiPpVveQz4YPbvRYEM7v6QZJJMQg11HzT5RYXApiDmk",
  "key5": "318FhPRrh1ArMfg6a8Sv9uoRuBSAgMxKQhZc1nFcuxSMYJjeC3nsXBjhWW2eEUoWUzVXkm3DApLQgRb65Q3q38BW",
  "key6": "3hhXM3A2342g6sMNjo2qxNPsj4CYn5g1VrtwpGUJFwnHgQToFAJFYCk1LHnWsfC3ud7B5nBYu7LmKDdxx3zsoyX5",
  "key7": "2982RVVY2qEmXzejFG9XuvfKbzZd47cw7WJmtH3u7U8yWptKrM8W7rQT1164scsrMBbBya8Pv5SLa6sY27knSHFs",
  "key8": "2SvvRfVziiUxKE9Ui8NcdbmHtNWTf1iNZqUCDskGSVcHbva5yfxfEuVZFPSW18zyjYihoz4ByYGkGGZBzJCknnQR",
  "key9": "3GxKmDHgQS9k8bYBAHFqfnj8e88vMpBHotHb9nmZ8tVVXkmuKbFpc8xzcfhMEwneYiYAbwrosSD6MPE9SSf2tGaQ",
  "key10": "2ANqCcxZ9mCcSEcDEFNLbK9PwyuZzLgqbrf4g2C8PcUq6ps4Kfhy4f173exTjzYrna324mGxjo2JaY3o2v99spXU",
  "key11": "4jrtUec1ESWMzZp6uJ8pZ2BLpBKo6ikzSTnJZhNFZPMw725Ch3Lwny1qxwR6oPSSCFz4nr4itADZYwBXL7Nz45uy",
  "key12": "324MgNJ6tHsPtYxHdpwATvabYV198EZoYormimsrzzi2L3okc1Nzz1JdKUa14J53QugHWPVSfKnyh9SBi7xvk7h3",
  "key13": "5H3uM28iAsYTKVdhrR8YADNRkbarvVTLnPGzxAVQNXNKnfCFcBCc8BXC3Leh6MvtUhmxqfhxLotnuGv5t7VTnsYt",
  "key14": "3dTSAJQNRxEvdYJModCZRRjL9ft3tEAg3xWRrWGvaSqYcTM8fkrrUTjp44b3YEFdBPRfvboS7jGxyj9btvgditFn",
  "key15": "4MnyZtT5gidyxT2TBAgdNo9RRzJU1EgugC5jy6d8Wx9tFPUdzQqWrmDi4mYDvQFL32ekozkcST3jsAyEkiiTnvSJ",
  "key16": "5Hbgay5tC6E9uDxR9wP5DKHHqQsZYHis5uTtFdz5fCBYRojNpmUiMGQbV6Bf1Y6t9HcihyDd8wXSEDHjV2CKCrMv",
  "key17": "4Ewy94fbLXrQeh3NmXBsT8i6YTnCH5HECnkp5n2abaA5YsqKXm9koXD4kLhMRiCDirzBFjGykLyXzW84nXvC3Bwb",
  "key18": "4Q3tQ4aaQCTknpCnkW118q8bBiSkfQbXVHP1TYjSVqhUMpyJrdNWZsKPX5sXdXpnotf733NMFTkeTWvvgp3M7qsT",
  "key19": "4cncAgEaBvxcag9Fuoqqi4fkpDDEE4ZzdsCtUVEAtT1qBx5Zmxv9JhdFsdC5iNRHJMaQKGGqDGCQB5bryG81H5BX",
  "key20": "kFk84LaHEwiHNnY2JKHLjJYJqi46dg3W7d2F1bhAibQuYkpnuSecstwmdokiiPKsXTh2NWo7xAiYJSV338jFuoK",
  "key21": "TMhmKqydxrqpa3ELSV3M8TeeZytVwNsbJhERf9H2DvBsYuBv9yXxeiesi5WAYWPJgputg8KcJ6xeM24sG2ah9Ni",
  "key22": "2usbYr9dLYWPGUf1SARUyeN323nJTAZTMazYExT4twwzC5XvVV2kV4rBcRgmsPF9J5DgViM6MpnVQYQNcPXzHaGN",
  "key23": "EWzgJaKJyYjeoRTE778wRPnBvMpWZgALHhMAoUTr37eXEcSQEMVNTpqJeRtTkLdNJuoBfdoCahQAFZ4nLPZG3fk",
  "key24": "3DV1Z6Dh7MCyuTU45rJpugAS8NL3C8j88bNNuAf6wS5eos5D8bSa3nhEcsAqskRcQ9N3pFbAtTLLxSD5wxg4yQtH",
  "key25": "3EqD2G9MfURRS8RH11UHJLMF4RyNzcRTxrtxScDeDhKtoLbSqLFPrZW1R6u18A4Yk7PKYX3GGBsNpvYH5psSnBMs",
  "key26": "5mVaDeD1DDgHATrM4K7jk4NYrvk11UMLWY5ZKm4bJHwaFVFUHzHBBrmLzNHueMdbsSGKnU2WpN3o4EDC1MRvXd5",
  "key27": "4YHrFgGGnpp1K5UiWmcGG9yauRmdoK7oWEcNqwMM4F4G1AXfNYsXy5kmeNP83253nVbADSjPiyESEqbZiWfcJL5H",
  "key28": "59XGbhgBMfqPMWCHPSqyr7WJVzkxseREAS3dLFiAP4xDo69CdUjDe69oFKu9G8bwbeemgy3JrEgixcQ2D2BxYFpQ",
  "key29": "3J6gSjUjdKRBwd13Uc9Hau7KbyDisWUT9ihvB7higKBDcNaiSHRR3eJwAukDwSyHsYy7gR7C4NUD7PwM6w4C7V7o",
  "key30": "5HkxbrzSJ2y11JFk9FoX3mWfkRfUXXXTQdJuwgBF3yTgQCc6bLW5Y2CuDEfP8U13MPAGEGEkc3w1azds2MG9icKk",
  "key31": "5ZjRfyMXAdS4EmvGBjpFTBYpgnXt6nA2Y12xHPhkW3Tnur16fXvLtVv1EWERmu4MfNJSTFbvb451Hoye2B7iTkxZ",
  "key32": "5Cssv2vSUg26FdQ47BYSRBgn8Fs6A97AVDgCrsRXimdsWKKq2Ds11KsroAf9889MhorcnWGGUZgsJCCHKFhDBREy",
  "key33": "5fRNRt6nbpZqa9xk2hD4pSmiRagSmLfWbNypmCbWwzgSPZW4MJZRG5tjWT5yQqHvd5SeTdsMqbTvRXXvPphqWk9t",
  "key34": "58GEm5Y4WiNxesTa1LvqPfps8UUc63nQVtKFAYvQgqW8svrnA3Ffwwe5gTdwvtCdbf74gM9f4TfrqVkRiwCmAgsP",
  "key35": "3YaGQbDmYvfRJeVo2qoqfs2Zj43HS2EUL5P4bbST3MWecYt2c2zMrJm1RiGvBTt5Gy1x9cVkeQYU3KVTLDzdSpFb",
  "key36": "26XA6VgtdvrC41xz5FV5iSMHHwmD2dA7df3wNdpQ5ESBSN9AJ2hydF8jNYsNNq54jNy8jNDbBEAseRyKp1eXpvRj",
  "key37": "5V3U1HJmCv3wkWKJ3xPjTetJFF6GBwo8kXhr2ThSpVjpcorsi2jHbPqDvNu5HujHqBjUKqGCSN47QA9F3yZpL6Qu",
  "key38": "4Rf48wA379HoG1nRA1i7zPb1DKWcJsXKnVuwFYCWiAbVS3AoLc9VXGHQUJ9fB9Qty94skvcvRHS1TLDZSjcxecna",
  "key39": "5Vb1Vi3X8Sn9AfsHmCEAWiRYqRgnoY41rTHmw8i7yqGCVyWhtbYNz5Tu5Cp9mHdqxXRDnGoxzMGXdDMqLqBtfJ7c",
  "key40": "AyuHLcn4iMZunk5RvRwHYzoFcgaEaNotc8Nkxw7KZtYEguzdNxiwS2h1dbTgwvJ6NfGVW5H9VzNTx4T3Ys5gYhv",
  "key41": "4gjTkfdbq6diRoH3fNpkEWiKXTqYx97fM5fkKkWVUDC27pdi7PvB9a9WcYmxetRF3Fb3vrEwAq9BhXp6opDQDqVZ",
  "key42": "3G4guubvAn6GtbaDFNcX8P3e8j6wQsv2FxkmvWejxKP1CzmHxjfGh4Tnax2g3zYLaKv21Tr49vb3L2BSyLQLY2HS",
  "key43": "2ZhuyKn8qqfZmgYiZLfWLyAtgRwz9gPqNJraEf8PwU4SQpSSPH8xXRyWVzJFbBScwRpNAh6pEdjfGjPZRbPCMQ9E",
  "key44": "5uWyE1HY7ZcdYJPoFueyiruEGCHXs7XkrtyYuDUhVVwdxVpt2iVFVYGeZdgHU9qpn5xNYcf1taWmPUYyyRfmSfzF",
  "key45": "RCBBLGY5uewXEjevfJjfoMgmQwCgDaTCCKbwf2dFKYRxpzrFtbVmjjSTogRLdj9KEh2zAsbAbxtAdfd9i6E5zYV",
  "key46": "4mUaeicJhfTJMekKJwtABE36ka2gF8QkiCrHEdQscP2y1iLTvFDJ9QkvfiBHneTAoWdwjEuJsbYtAS7Rc2LYbDbV",
  "key47": "42PGdpj2vejei6GwVaBXG1T5W9LMo8rua2281fNB1hm3gJYn9fARrwkdHZtYXVbGG5DUzqSiqWCB61szBfsgocw"
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
