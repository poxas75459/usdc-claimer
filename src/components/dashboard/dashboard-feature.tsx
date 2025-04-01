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
    "2reHiBC6z1hZvb8M3dqEzLzgMo2WNTGEWgoo44XkMEPR4X8DDmsmXTea5XveWRb56XvUB5gKKsKhQBMZPmeHbwuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VnyqdfTCznq94k45JEYyqkTj25Bq6yV8YuULWU6fhucdojHpK83EakFsL1ps9Sqm2Uh8xQunUAAmD1ihWwCURjQ",
  "key1": "Tw3Pm2GtjCxVtxLM9eTyTd4Jm2K6HiUT8aVWWa8zaEEdv3BPrmCL6ztuF9iPf3VhyEsrHfpteswbr2RdrJQ4e24",
  "key2": "3VHPNAD4CeoLHRjTaJQod2NLn95pmfkWm5Kcsvzhg5gpoGVLiUyVUnREKV7c4vQT9WY7SkQPQuS44R4s7X9d8mCH",
  "key3": "HRFFfSwq4tiyQFdVK94N11PpbJ5BBUp2t8eFimQUxcWuH3AoFAjaXfK2uCEvuKtkDmarm7uUDMTSqNigEsqmUER",
  "key4": "5HteZTd26TCVKUwCnYSwrbuMBHzXSyL5yau8dxWYGGvctqbP2WFzf9682gGtQV3f85KJy2QQm3TQo3FiqYabneUT",
  "key5": "WKecJhDCvi9kE5suwAkECH7L3wJWatVVUNyLFVdZFVYZyYv8V8ppnj7PcZ7qF8fQJn9BGSc8sAVkdMuZBkyiMLb",
  "key6": "5VH253wuPK3z4QNqyd6S84i2AEyYuS69PnhYAeoM2aSyEEFjhiw54kv84Un5QAKiEHH3gf3HMR95MKz6DzCBLPrq",
  "key7": "u9LGoyEfNXPakidNP24WymrBEYBcbCYxNNnigXfVKxLbJXWTqHQvRKyFCGNPHMzGsVYQWNbiDZgUXpd43LnfXPa",
  "key8": "2ALucZtKXBK3VT8bHaT8WhM2LQjtJWEWhfQa9ufrwDi29exQ23aBmqTLXxULwr2nvFV5we1LWz5UMH8er75kVAs4",
  "key9": "56WAv21xDFL3GssFQJppAiA2hQeCqVrByfq8cuWnbR7fLDQ8eS1DFdRqNgij7VxMCGLPJqnn7Fn9Coabn1k3xpJc",
  "key10": "4pBzHSiTJk58WGq3NAmBjk4d2dosLkZxabUiMhZDesiE7hNMb8DgN2d69Sm4bKhDMZfnCdNAeTQBrXhqc1XCJTYM",
  "key11": "2VJ5mKDG7AJK2qBon5rVrjUdXQnXUvFHLWQmNk4Uh6WZpeQWv4hFU2oeVDFLxYmoCUgUPTRKM8rHVbxd8VnfnaPN",
  "key12": "5cFakfXMJRo413XBEX9xPmVZNmsrQPRZj5wWo8KfS7ubz1ugrT3JnGxCm4hjZq5evViXAX6DNn89ffuXm3d7adS9",
  "key13": "mfGuBzfeF1XYcXW15MN9mzN8DwMMmrAYyryk66ZJAt6UZjfycNZfKEvSRarRpomu5ySd1LrJJ8jhM7Cn6TngNSm",
  "key14": "4PmfsTXFhvfSj5QDNAxNXYFCpqHTFpbU6XNwsHy76TrdJBGBe9peGqcf2C5GrVrnUAagCzrVwUNkfsUtVkkJxJpd",
  "key15": "5QKbip8KKg8rg9APxMcXULncLLqocgppg9cL1TvSpH7Dc96wFvE6SF1ANvAhPQcd9pNyFLzg5gxVHVxGXJzuDxhT",
  "key16": "4kYep8WSqovVmqp6nxc6aaq1qSgTdfk2AxyK6mCXujpBJs6YHNBVB68wBDcfU3kBPxEoc5PnbAevMsxXqnTr9u4q",
  "key17": "4WxoyyDCzhpxmCrLNNRzxne3ZKabSi21iRykXqcebd8VF3KTQRwqELcjj4zFGAYtyi6BxPLscqZfeW3qdtdDBGSB",
  "key18": "tAWoQB4YWhTpJw4R57PhU4FswqxHcs8wkZM8Fqt5yPkV25v5knwmxffxzwj8EyHR3n3yeEWiBgWoL5U9fBKKR7J",
  "key19": "nMFn31r7FNfuYyYFd157b5Q9juoB3ZBRoPt8nmZABgEjwdBFusw7JuweEoa3K8iR9zzd2BL3FSqZSA71KoF7bpR",
  "key20": "2LpNZMyt5vhfwgV4snAmX5BnkwBiX4Z8NGJxYxZNFsnD5MZ5WdsVSGvAGwkeBk2RND2KVEb6YUiJ1r1FHxdKmDwR",
  "key21": "3y7BGwXHZNcivnsxKZqfGmrifsGtMMhBRDunFUNMNtMaFoZ9UGVCc3ZQVuwNz6aURmaYvkQTKpFxkqv5Qiu1RfPt",
  "key22": "5rL2ACcEvWqgZ6h61pzJWE1ei1dXVouvArUG2WFdJphnx5o25RdoSUSRRGFcmymFZ54y9xWZG9Y3qdb1BRYZM7qs",
  "key23": "2Xg8hDT1q8TBC7S6ES1uLgfGcDotZoW2nRzr26g5TdfEomWTthNrQhr64XnBX2E3n5JwWF9nJCYd6sUbhdTbLaN6",
  "key24": "3xS3deEEu4eMbU75AQej88anhgD463Tg1Q6XAaq1SkC3vrrjdaaCAuJmkwq92AGMR2tCfafCeLwan66M2Rq9QxCZ",
  "key25": "X2SvJzjyK5Uo6jXGPuVJj4fpeLQDiVTmnE63cQGFCmYgzCB6AGpa1jys2EkdUzXKJPQwnhwQW6MmZTSQc7P6pVn",
  "key26": "4qnUG42nz1Sketc76HzgrX6BYAmwrsrhKatwqjnB4imNEypwttRmypEtBtzw2zcRTrDzoAuN2end5jPz99xqec6S",
  "key27": "4EiXh1Xz5q66Ncnjrajbye4PexS4zrCTJhK3GuMyUU865KjrATbrjz5fWwT4JQbQ4T5Zjm3DSHyx1qtpx1Bdtq4k",
  "key28": "3T15cKo4ZZD7YHVFGGLfUfjEkTFiYDcBZ45ejdecjZ7YqQU31H2o8aGHz6q93tF4PQrirSSFLtFGBWynYfY9nobU",
  "key29": "5MVnTE54kbGzbyjpWLKYEenLCcCeh12TSPRCdgRdp8d4jiVGZJ9HusuKDKqm7vocNHGGsdZhNp3GeoLk9uS4wkk9",
  "key30": "4nPpsXTVxPieG44S6MK2PxXfGqvXgBCdYsu1r2uBV6s2JKq5vA91C3k7HMaGy8YQjPhhFX5AyyY8pdCgGFVrFNKT",
  "key31": "2qaeiiHzwBvGHRa8dGGCT4gfmgngTDkPrP14rzk645g4m9wSeSgYzXWZyNY81tQTiybj3BTmAfrm53tRoABrZ7ju",
  "key32": "3cexweHL1RBoi5PSREpJgasXFLTMakC4ovCoDNbRKm4egbxrRNwUJYkRx5bNa8NTLdmdnUwrrF3i4kLmtZFCwRSN",
  "key33": "a2cTnjKRKdZQaxjQm1paVWyZ2t5xEbPijVxza2a7CRKNdzDUmmv8n54Dcb93UYgMQkj4Hcu9WiQiSjcCz1caiAG",
  "key34": "4ienArkuFRDP8UQesjriSznFmWPoJMheK96HF6S9vbH6LKtAhQMz2Ua7yZxgY5JXkx9TrbEwTyM4esFHwmQ7drDr",
  "key35": "4hkqzjqhMw9zTcAUFwemzmRTzTkcYToLpfqbdtTaLTUHp9DbcbccF17TDuPqdyHgYiC6ZN3EkregNr4CwoUE4Xtw",
  "key36": "2We4sF2RYhmJxt2aTuPWucxFSm5WYYKDHiWJsyLBtt3AuCNkkAAhGXMbjk9c6GhM3ssFAnMYo5o6uzaUsruvf6AH",
  "key37": "2oNBhfsizWC5ECpUa4TGECCZpFGP5WaJhADYHFsJXsVT8yHbx1rZNus2Yfcz4xGMv4JuwNEt7opqVmE1QtVjMDhG",
  "key38": "P1wLXiF6zc6dHVFvKpNvYo7yPjNqf6QiSUZnCda2he6MdyBmVjqw8JHiBH6Ua3HKWKkszzKwTZQVpQ62Z6UAqS8",
  "key39": "5buBH42Qm2Ey46yVbedD97eCkJdCjARVNee5o1Ryj1YmeKGRaU5rE9NJahN5JyGxsedYs94YkrdtCxFvaf82PGpc",
  "key40": "64QZYYbNqWSwhpEVGDA8BHvHZNMymaYWm9ymy6yZvnv8V4pNqWzL3L28R4zDMZsnF7kNZuEU9EYjYyMYSXpK57PM",
  "key41": "2o6wQLwJzNLfD4SLD2dq8LNi4E9BrnUWNYJExqR6dpGtfMtGAvXidXpQSufCKBNjK1o7daWyBTqwMdSX6vDHZVqL",
  "key42": "4hNV3sCWGMdEvkeeN1NEEf74rAP55ex1BcViSWVcVY9uAyGkuA3mquL6DRUox7yrn2A1teUek3GHomG1tbahvQ1D",
  "key43": "3ZrtdVMHdV3YQo7b95FN258hfsnojTJX4LbqDyuPntDHJTEo8Md46Le3nhXrSfs6e94PcgExtaLkFDidER1kZ457",
  "key44": "2z1y4oLFDPLBUzMaYfiZzrCVQZUkUJbhof84TBSYQwzXN5mtANcT5DNpp2KXB1sEs8Whbv2s6uLnU5UdtwPSt3Vt",
  "key45": "3AHPkujjR35yeBciN285m5Rc9nu6WKQrRJxLBH9fbw3sJFU7C1ENBBDfs26HqDyScfbfGsvjNXhN5hw8gweYK3qQ"
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
