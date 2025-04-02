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
    "2LZYochYBp8HJ3cznzho2SG8YXJqLoZ4FM54Cgkd8GjSVknM5LkGVV4NWHp97xXVZXrTAyJfYU14QWBrkre61m3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWr93NBd7A9JBtgH642KLAdhdX24LhEtY7cMnapDERqMWwusKLX7Pju9MbFRSQaouJJR25p6jSZFyrMM4aMbdQe",
  "key1": "3BfGGqo5ibnEYLNR83TyF9Th7BsSuUJL2jeWt8yLvhTEiuABb1GnNcfd17SeEDQvQVKuE6Mt9GGAUm1ZzCtJ1rms",
  "key2": "5UZ2hn2uFBjz8BM4dF3ZhMjXvvbKVFo3neVcQHrCVc4AwJZ1cAbcFDgtbLx7kJRBQjByMGJ3Av85wue2dQ3VvnfG",
  "key3": "3B2uTzKY79xyxQ9gB7tSPsBqfhjoX6hR6PiA5TJfmCqBBsrSjfgos8NGBjywEq85rci13PQtQraVbaE6ZBXWAr3o",
  "key4": "3eBNYhxzi7TByeS47Firv5ZHhbvXMBLHX3yptjPwBjYXtahsT97QEBCn2X3kAEEQsbKLY1khZjL5guUdb7UYGqTP",
  "key5": "5TjDnSuqK388jUe6LXYYzqpJi2soG5a2Tp997P1TGrJT6dbFmf8pRqgeBPP2vKjt75okpL3pwe7pK1h9sjiDuFsk",
  "key6": "4WTVpW9mcvoCHqbJHvJcY25KWViE33G65icR8nxJJnAoD1MRe18V5Qdu3BtcuLMCyoWUxmpd41rXWT7KkB7W6nYC",
  "key7": "2Z6hPrnXCe8P8tAKosWxkgtRUQQFmmhkaegCo1fKtq2b8W6aQNsc2TkQTDPMopTRD6CdzrBk8RcnCn33rXRLagbq",
  "key8": "2npgZKyjfWDiikVrkHEh2No5HmM7gkdMtzoxb2ufjFnrQrNuko2jiA4SaeqeZrmen1guMTw7jC3qRp1YWWVqoNaz",
  "key9": "3eVnCAWjXwY66RioC5ywL2GuChLQgeDsJXYjLitwNVKNUeCJ3oya53puFUCy2C6jg8hMZV6mhzKtMiFzyZdshjJz",
  "key10": "2XR2K2byY7XekVt5aSqLawyd8kAiw8BrMyYYViAQJxdwT7u22Fs2jn2V5ZabY2bWRQ3v456TSRorW84cKLoYnMVU",
  "key11": "gsCnJaBn5abiMw8NFDJJ6j11Wxmk2kUt55FA5aVg53FXctUQ5Cff3CM2x5EWD9xc3jjbWvUjZ66GsSBSN36NfWU",
  "key12": "3quZfpQMDNbFB12EzNSsgixsBcbFDh5JTVApgiipxaWhjPjc9hBc81xMtFXLZfLPJxw3CpqPHvxwSHW9Vr2H3Avw",
  "key13": "8zaYVbMoWKsmbv4xtsd1jJgJeL91WC7wG6cJAgCskFx28sfUEN2mwKqgbkiqr8ZVuQK3EpshPjcTKBvaNXXetiF",
  "key14": "4tBxy89riTfGXkVBLKrB7B6A5VsFCeGz7ek5y8wCXfdtCLGWmsRdBtQoUvoWSuv1FfKMvqx9LucD4oTba8oDEdjV",
  "key15": "PuikUFYWW3gPP8wJ9ueva6TpibpNhiUwA86WAqgeEuTFr1GYfgtvnefLszYRY6kZy59zCshYtqsHdiXqSQ12F67",
  "key16": "aufEhGxR6e3cAiqCEsGEHoMjE2H3oZZvtWbhMVJSkcU266mE6f4kQzsdD2DefQhjFi66APrwbjvyvpsLNgXh12j",
  "key17": "4dxmgcYTPwVmn7ySnocHA2ntcmtwPSoxjJpfAozR6PQcwroLnU4eLBr7vbEjriVpW1ELiAGFqQ8EZevodnuh5mpB",
  "key18": "36Z9zMMvsCULND45FZish4zVLz7Ee4Bp2ttFaw4wfHnzZV7p4gq2zxCA9GhXfWYQYfDi2nmtgEwRaZxwUowVtkZo",
  "key19": "2TDhb4aJrQowYVWHcbEcWLUXBUPPuiU7oJ1EwcFtrpZHK1Wm3dHmBDKaPRx314Yczzo6Yv6qRsLBdQHK59qZDUbF",
  "key20": "2vv2SxnEWKxjTXxxd6Vdw8nLGsxjGSAGM1Zj9bFWs4HJrSCBqTfuGLRTYrioXxxNXDrGpGDppJN6gJ1h6AwnPnEG",
  "key21": "nuU5MaiMbymzbfXDhHK7u73MRLHJPwbwG8KSxeJZAiHBziwLw5sUkMwM7znLrx47NBBf4SNZBPpm3eSCzRdtX7p",
  "key22": "2eaW8bAe96ghfFqqQbDgTgwmeDL6ocbfbZtKvdTtYKksiEmqt9216mkkoH8LrLYjFczdJDbTipskCKkWHqQ6UwpV",
  "key23": "6fvrGCiumZuRD1LdQDmLydsjjLeGKZrus8pyabpnb4D7gUCFyHQfwm4qeMJCtoQoe9b6Qgv3yPy4byjsMEgMVVA",
  "key24": "5JHLUJs7UFiPEemuZWoxTxE1uFpjodGMBoUFx7UCNKhzn5zYqEGt4pzwzZWMPuspsaUjQi7UGgDKt7TPZHtUxJXB",
  "key25": "4Mz24kV5MB5UbGU19PgDC9hKc6CCrvFobBn6xSdgfYDNSJwAwaVBC9j8j6FVzrHyEY3zch91f3CBrpsoG3SPDz7Y",
  "key26": "3LFaR4vSsCDATtsD93V2rJpdSGBDgQZGetgp9BpSwrG7YXSwKj2cVRNRtpeg17X7wkSTkp5UgBg5QnGrEUAaLnpU",
  "key27": "pb5yrboooCxfweXaojiAa8i3tA18VEbZuLksMnEAjvsQwjNfQd5ER2PTnNQQjZWesRaEhwLBd6mbHix3uQaHCu9",
  "key28": "2HRKGoFm5NrqnkAgzxpsL9W857YvR19aCEQjpJZXEHLsiQrQJgK5xxWSVnXMdKqWkqvr6fKAwFig9wVXNHyPtdqQ",
  "key29": "64u2PsBpm31YsXBzXWVXtxtp5PoyRo1d2XXnPUn9DBVguuKVvtc4MrSyyiiKS33YrzEqAMC5joZo9xcGyXR8CmaR",
  "key30": "3bNn1XL9nqQc7Hr2hshouw1GH318xCudEG6vNja4mWF1z7LZUHPBRZPNWh6LpFcXwBG5Y29HrNiDswBcPLiNDWHw",
  "key31": "3yR9DzF1PGiLgjfNHgc4NSKTtFX2NzfFH37Xb6sFSmKrNLbxTUseoY3waWnSVEuPLQKW3AvkMLRMTeg9KHRd8cGi",
  "key32": "c1TDRuw47BBGtojCivfWChjdYfS669WyBwdiezdviQwUtcu4WZWVeX8uAqasoqgjzoXuRiF3Uag3GAQ9dsD7mcx",
  "key33": "5T9xG2uiLLBHxKT4XqHr28doiPcYAaBSUdtYr93WW5QJJ6ns7HXcCW3MNzivkP9ASoc2ihrzPmX5T9ReZhtuFaQB",
  "key34": "3Q4YTpCJT39YfCf22nTtkS2qrkCs4wXHQfeiD2p4MQu5kkFPLnsRNChzETfJNP86C2CSXGn6nUKq2RyyHAbz54nm",
  "key35": "2QKV9Bu3Eb3sagMt43oJwguqaZdQHpzayywZv8ufNwAR6hY7NU7o9aSeZ9kE7wER7F3eZ8EQZL6fvPD8fKWn9zjq",
  "key36": "BxYNXt2KxheabJXomx8WA8RvNzYmjmd9VB8bfZj6zmh7ANYgbYCgkmxdAcPoxTXmDNsRgzkxXKuEYVuyfbaVFC2",
  "key37": "5P8hKP38xVn5Wd3Nd9PXhDb256pTd48WLeF26TdE8fZhbbAy4qwuEZtExDGnT9ZQHLYd84naZsXw8vJEjyvWsSN1",
  "key38": "4ewD86gNTE2iQeVAi8B8ZgDCXNKV5NYjND8dSkKZJ9HD67Co9mKt5rmMHM1WDr5rFoq9cY6k7rSG5EWzVoABQQFy",
  "key39": "4wRUT6cEhnokhT5zR1MYpPiHQNoziCSLYEwFVGbzMvLJLZXo9M7iD5MTgNmLExgjdEvgj9VutTHCLmCcJ2q7bPGC",
  "key40": "3kQQEdciuELytw27675LwZiLT7L3H7CVUQK4YaFBR6ncZCJQUepkALqFnR44MFdJgDs9bepC7PdVAHkmEPzr1Q1Y",
  "key41": "23eXumtuAyWWuVi7YiUb1YqRQ4vq6Xi3a3cp2bQURWHVcVwuJR7GwwTt1GNJ2C2gnjnCNQRkXkYFNoH9LrkK5e74",
  "key42": "2uNSmFuJfFaxkVFWKBdQ6BYHZQLL9Uu1Cq5R8aHtavczyz6PQxY1tvvPatKSW5u9i63hkffZhJetDpSH4hT3dutm",
  "key43": "32NTCB2SMiwVpbJfMMxy2Djk6MBTyqAhvEiZQ2nxWwPfGMVL5MdLUhgakRqvZs6wwSFTxLcme5xkyfdF7rfNvhUp",
  "key44": "2GQj1tNQviWxMnVGc8NnLMpzDwCSPRXWmADMduBNyQzwNpqEtTceWBaraiZuaU5nAjZmCE2NhjrwAeeajmEQQ9pT",
  "key45": "d5YQBy7nNbJYPtDDMiNy146ii7QRBUs2Wea8ht6jPqkknLRZus5ZZxQVUf8MUGs3hFuJyzRHzDnvNre7LxZ21PQ"
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
