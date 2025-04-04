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
    "3osfqYrSJo8oiEJ9bwf1HnHmr9GKSCyBHuFdWJjowLFEwjq6s7UZby3KxNjpWoQspJoouvDnhttwwRh44SwRW2sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YabXq18Cu43N1ojeU86TUnSr3Q3R8KcqjJmj2yf92LyYTVnXsBx1qRLyMuxBHwLwaacvxyXHkquLBUJvS2BDG7",
  "key1": "3sHZRfbnoFfuACzGHRTXAQdaXQkmcZDSFzguyzaLAY55gFE7cpioSFgTzmJB31mccbjEG7CXsEsJ8cYX2TKXt32b",
  "key2": "4ncvQ181t2CYeQezKz2bpVnfRCAkfZbggP5BDq1jDjhLD7RAPfmmzsMrnoFrCRdh8YPARRmeVZ9wUvsn1ZWK7bQU",
  "key3": "32hbm66Y9S7YaA4NRckEphuExBoCqiZtECpqnoCLuMfxiRqqJrfeikaJXv8cTb26AU6V3rLySoJx5MXtsqJ1VR4W",
  "key4": "3eG8uj37k7LPZVNduYuBvw4guyptfUCDTbj7DTBKtxWcpWPxYtXMu3PZsZ8hz54QxTBu5vnneLUKrHaLcKuDmc36",
  "key5": "5o9EK5ZUnwN57v4tQ6MojWgodiQTTYbREctwmrWswHbkwC1dx5wf42ZNXa9oUqZH2L4s4TTXN1UiUxSLLzTAJ36m",
  "key6": "21qPeicayHoktdMLWFugX61CtZ2JaFuGeSqoiuoy6YPFrQ8rm5hx29DTDApXWT49vLB3Tv6Zfc3e4zq4282Gnv4z",
  "key7": "5dNRbHQQCMDESHboqmzjNWWQ57PYFRA69tLj3fyzTZ96HCvEcEv7PzQPnECuDyRZKpCskEVx6RbTXhBz9WJSmAXL",
  "key8": "5L6MfMUWu94B6zNCYho5Gkt11wS7459tfeig2uE51V1xpi1kTHxHYFMmrYbGmnm4L52NBxCjLDYBqMa1oqyi5xZc",
  "key9": "2xQBU6JV3ZpTpB8ZbwZNfsZ5X2L7HgDwGwyhuDQuUEb4Gy8v9SKNWJhhde1j38P2LE8vGXwKtL3kCuDLU8goLobG",
  "key10": "21kkquqPDwed2ARzf5a4dXvWQGD5tN749D1y9gj8za5bnfwzMDJRc5KMxMicHUddBJekeCV51doqPFYCJxcRiZCH",
  "key11": "4whPrbGdsaX766P4WmrwohQraLWL9cAWYSkQhe36M5rFBkN86Trub5ocQUZWJjY75j6HhGNHsiSYwjH9THh7tK5J",
  "key12": "KvUTFA3g9p68EUsRPbetpSJ3oAGBR1SnJqw1zTaZYCug1p7ZR6BviGceFsTvYbxcoGu9vdqxwKpiXhBkBez8oQ7",
  "key13": "NQZ6W5DWGNwsp5NUx5X2TunBZ3gMbjB3RuqZtYRiqYKBL1BdSutymXuAsJkBVuwhPHVkrXuddkrRk2CrED3ACnF",
  "key14": "61hdnDK7WYdVP7BLzfJan3crDDcZkk2YKFkwFoJypXXgcFi8TBUNRBxJA4azzMqcp92Vfk7vHjjSLjHGsMyV97xL",
  "key15": "2rcVWQJESA844XsYS37f1w5oSv5XKaXi28ymiLta9QtZep6cNWPrNDV93T69aEtFZww7Ey7WfcEqcmVwpUEFVsFd",
  "key16": "HdxbrRm7CMcDCrQJnvM5emmaSQ5Fj8KULsd9cipoJ6USY68xR4HCjbLrSDNyMTaC5o7BTNLARn2EcSQV5SsT7bD",
  "key17": "3GQ3ajTQyzRQbtbty8WDC28ZqkhBGaSUtnpb3a6orH9PQBXu3DnU3L9v53ACs6NriHZxmj2oHWYidwxNVL79Y1tb",
  "key18": "53NPJm4eoJ4vJ4HE4tyg72jY3EBuUcSnJojnRWRGh3BygJAVV8NcqbS2G1xxq2uXP69VnntemPGHQETugMAMENE1",
  "key19": "5ZmRARqskUgr6EEFQBJYn2wuQmDp7AzcHGS5JVXSuJ9emYJZrhAqjf8yNzZc9gaJaK9VozN1aKW5ngVzm1eaFSJC",
  "key20": "5eZ5b927kUUoiniy9Z9f3dMGVzeRjSTAcnAv6HhNrjJ36eevMyrVoUZm5LjMGAksF7GuF26cvhjFzUagTRUc7Vfj",
  "key21": "3zH8VLy961ZUbdY9yFQ75yFGn6SwJV3U19WHKLyHmd8yXHzZoDeVrsyAGfL5mHTvow9gBqEqWQsCkhMW6dgk3jG7",
  "key22": "NKFFSiacqMcfNv2KjQg9oJpWpg3BFMM6gBkr51gTcdFtBV3732G1Eof7gioxJ34ENBNRMYhq9snK25hHaWEsX8n",
  "key23": "2TmEK69xXGE143dBupuMJQKzHWf8oij8TZN7F2YRifYAMj3Kb5MD1FmckZZettvEvpVh9SJowT5BVdqF8srUggGE",
  "key24": "3znXNEPJrqTvcYz6Jx2iKwCWshitYFKwDY5mQendeGcinhfyFqY8hP7X1BxqDsT4KQaMLGSxgujxeUx27jj6adRg",
  "key25": "4Sq2ac7wTqM5gfqfqD7SngrKaAVzje5TPNFQJU5Ezi3bGr5K7Lu6i6Gd3NubV2hn7D7TeQy9QrgvsisMK5H578ba",
  "key26": "2N4LatEVmbt6Lm1KPjNSXotCnCyFRPNSbG57BfAARSdx2WiWF4HyhUgGaPL6H4nLhEvwZ4qEf51Y9h8gPrGUrKBM",
  "key27": "3jKpmaddmLmN41QVUNVEKwHpYpjMWEay6AgdNL4YAoSB8EkuV34efvAnKDvWeCzgvq3rrKuaMYEA5EvKJgTyJwX7",
  "key28": "cXVcxBHCt2kH9tQNgvNs7VbS6rMz6pxD5AzLu4hyQnzmJPzV2CQwmuLPpXCZ8Ps4h9yAQYcqQZyFW1GCkZrrgtC",
  "key29": "4GAis6EdwMDbbBRH7KrwXzEUx5ZWAGXxynLepMvHeZV5vqj9pbkbWWfUPYt9q3vdY3fJv6159rmnaBbMnfaPLahf",
  "key30": "Jo62kkXeRBgyBV1p7kCbQsFnusMXS4XjAnDAtJAUkbsjUv3DJSr2rozDUK2La1J2SN5CopEpBsV9tggKaVkfdCu",
  "key31": "2hZCisPEjUMqfQJ9TYvuXEnNPvX8emjyQeRGotTY7BCTiFXbbLZ67zjxoWRREvyMHZeb99V6uWUtxX5fu6Xc5xw3",
  "key32": "3m2npRUdVS5JER8NAu52VWbVhgXUG4Wu1gSF9hhUFuCXaT8PigsXRkUmQT7T6JeFJC8CkVYeFncScskm9mmVvHHi",
  "key33": "5GNd92cyomX3EQJrmACyGYLEjF6k7SFik7WUiNcatwQzVx8HtR4fYYptjQWvKk1y8GuSsiAEZjiMZaXf8vBjWEgC",
  "key34": "586CQRc8koiHs9biC6R1RG4qokxxfa7NitSfuvNjgbs14eVkA9TkhbVQGVaPo9g9bVFtNKV91NcXPKDwhh5E3NHM",
  "key35": "624THqnjT9uiAXMWE3eTKxbvT4x8kchfxgGa7R8TPUnroU6BAjF7uiXCRpKETRgfJAVUF7GLPuEd5P2v3oPzfGFU",
  "key36": "3gP8MBZWxgZfdQW1M62kmYGvPRRPU7BtgtmaViSbynmNhZybSGfAR7YdD8L7bAAsTx5WvmNcdyPhXTqkzJNerSGf",
  "key37": "38Cgb4sYGLV1vjsGxVAFjrNZUe4zbzxotcZAMrh5GEVKxabF9rGPe6bfLsJz5njbVVZAifVXspHUNcsgcwS3s5Cg",
  "key38": "GRN6Qp5SpHokdLCLMZJPTfojbgaJy3XGGdZWjFx14e2enX8UDwDTRmuLaagS77wjegFugoEHgJ4akuPyKzaLnTo",
  "key39": "4nQemmPDE3gQsPLUkjEASZcvqEb7wLXxNXUCoqo23xY15pTKbBKmY3XPUf4fAzgxN41xKH19Qg7w4nQHsY9bq89c",
  "key40": "39KnBBrtRjaqKvqNtiG65mK97WkGfshQkWC7VY2CbzmL2y6xVkk6cY9HTDvoQyDVbNUtzUvtwoSG7wjSSeQvSwVY",
  "key41": "5Men9Cbj17oze4eFU5nmbdNqfdzxypCiXoh7HKGPC5JwcK3MbQEXxc3GoyXXfVoKuNxBkZ5BzWmcbW6DqkDCnUwe",
  "key42": "475M76HM9pZETn95Y6DmU7MxRKKE3VknWY7YXZ8Pn7Qg4Eh5GcDikBJSy9BY9jPkwvnx3fzYUQsxpXJwvJjYy5dc",
  "key43": "2diFThXF5AGZTqWpiEEctWthj1K2DroUHXPzvDwaah9SSvHrwdmuDc5B3X5vhVFJjiB7PYPimsNmpnBsxzPPLxgU",
  "key44": "5g3F8oiE3FpoGZkwfFN82CW5fYYkUb11hNFWSiJQUbbv5tecx9CFNqi9L5458DTsi8EkLEZtkSvoEFKACtnvRBMf",
  "key45": "2t8D2J1aig7qjh4xHnuES3E7XwNzwthEmVzwPURQP1tY7nsvQwE39xkKne5UZh9MGzizRryL3PTZagydSVGhkSvs",
  "key46": "4JhrfHtSpYxrzNLT12D4s3KcVe3kxj74aPkEogYdV2vFVyYxuGPNw7HvX5nFe9WA7wBaUGof5ogbbZBCxRhYYMFw",
  "key47": "2wo55tgTefKxZPKfncpg4QR9QwJMjKt5fAepWQxZT9nJF71PCk7CGJFp4jmkVZYw4RrZoTpcthBVGBjMn7RNHdKU",
  "key48": "4bzMFD4HaRAWW32BjktRREupT9z5ZXL4aF16e1ZdsW1QVrJPDTZvaJuhWqVZAvVRZocqkn1Hnk2xGFU9RcfzDTac"
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
