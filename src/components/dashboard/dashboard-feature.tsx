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
    "3P4sXsU76JE4Qk4XqUtnxF35ThR6hCLeTRKKBvtYoS7wMgkGDksMQULd3GPs1bzFJ51PHH3MKiQUF5MJdMTWvGq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgScVY6DJ9muZ8NMRzaDdiPtk9VdJ3ogYhL9szhKtcf327qdjCzTcHbo7fCVXR6WsqVTdob81sEC9fXT73x4pWt",
  "key1": "sTTsLLLxuyxPf6z6f2RhDXQ75VTpXh8YhnUt4sGU9vgYY4c2q77K1R4t6kDgcnfiaZUe17vedokGzqUrSwbvDTJ",
  "key2": "39M6SratqFgBwba9LNmqXRfyCcGRq8jkp1Sc4427vKZfgrCQCt8gR4JcC2Ghi9qXWJThH62FPTkaNNbwML5oYi1b",
  "key3": "3hyokedDAYTJ1KrpWBSL2ywmh5ok1EDBy2NtJd38bjJtTvygbLhSw4DtT5CYU7SB1dwbhaiy2MQpM6MQdXg8EGPM",
  "key4": "34C4pAWuXubFkVKJ2PD4qzngij9PUBagd4XGfoDpRkWBN6Dgxb8mf1hCXXwV1sPGkaTLUrCqdAHHN1efYK7KQQgU",
  "key5": "5FUpbeqJ6m9B2VY4FtUyKSnrfDqGWq1TL9vUvLwmWvzTjtCUSe4AKp3g6TJnsEU2KosE4cWqgHCxEKUL5AVcofuu",
  "key6": "3Ey9cAY6WKnWCc4xWAD5fXfSkBViDjDtAmAWG8k4QT7U291qZkY9fnyqvfhr9XTjhWsetG94iXAtYnxHtHL2Natz",
  "key7": "4hTrEWvoSKzFK33gLcekTYYfdMV4VXVV4K9oJj7mxSTXBvhmYwGvpea6r8uCEEGwQRq5iP6gP1PQUPMKFpXEpPHF",
  "key8": "Nro49rx4Vi798E6VuqMiuNBD9HMKHhJER1DBnLp6AfwKUnKXLpLVt5gJgdGAiSUJfw5gkUesgYbWfbGqVnuNJUa",
  "key9": "JByFbCf4RDYXjqUHUHBnQQYVHFk5zCtTrTvREDNpxqo7kijhEatmGgZHQYHVNdRpdUjejSnWd5JceW4kgpFobVv",
  "key10": "2jGftFbpQK6hDTZZmqh28eFA5yxGRLBUo3cfBm9qvrgzdHCbtZ4KaGM1KdjjcCxoBNSaS4AkR6L2PXMbvUThBVv",
  "key11": "RWXcTZjYTk35AMNoQxiNJYSkq2fqiAjLv5Kw4HgWKvXZ4eCv2ASUj5JHkc9zEQcvveEX8CEERvezFmdWPG4aTfu",
  "key12": "2728WeYPQxHgsF4Zq9RJvjmMPxvFqPQSGUp3CtedjCw1ooTEWbCA87vLZRSRLW1JAEMNBwWZYgvfit67f1AYgtL7",
  "key13": "4j4kAxGUHuePG3opfB8kp1pNsd5fvprT4jTuJRvYVccsLG2kB8RTL4B91QL8sc3Jp3o12WCe1oCZAwB6oJFcdHDZ",
  "key14": "4kZgCPxGhtE1opKhP3jjUxBzsE7DAqgpFCH6zSKGX6AnpAB4QB6hUza4Hwj8aUqCiaAZjqV5zeFHuheJjnTNvrzj",
  "key15": "3sj1N932VitvPdhPNCxPQSr1B2repX6ATFcVBUnF5LtY13vJprPj8GVgxgk8aAmS5H9291rmnueELU9kyGBocTK2",
  "key16": "4T9ByBKQhNpRV9bfbBj1CU7vK6AC6HYwzJ6CiTXRvp7G2fAzJRK1KAXHxGw31pkWe6ME9XPGNuFcD3pFKqCq8q5d",
  "key17": "4ZC21ujwftSFQYqZ2ALQvKn5MFwCwaqYqzAVL2TrazLVKoSuQTF4Jf1QtqBSws3JYE6AgLwZmUesvEpkVz9Y3eWm",
  "key18": "3cJydgYmAW8RWT52Su7W49tCQ5RTMEK7DQT5cdPCEiEnq9oGACDpJcFzBWzqi4ifno6ssyVrCoJ6ZHJ9FhnMrGkC",
  "key19": "2jQAC7tPLQRidhVwp3FaT7K5Ri8cK8Wi33UdRJd4PRQ3dk4QVSDjNfnqzXDxWmC6va9Kg9z62bMAgzz3DrQGsZSQ",
  "key20": "5LPcSzXFsLNLHkaksvT1Zpej3GPCRZk339BspxyDKXah2mNEQtAGQqHqwRjigFzRy3DUtMf14Q88FyCwDLst1326",
  "key21": "4psJga8Ao4xm724k3psvVEuwV8sNDPEd9hJgLTJLuNbTKtqQtyzCTz4gDKT5KsRpAgCcFKWY37M1cpC2QeWP6je5",
  "key22": "3NiCGjNhnwJSNUmiKkzr6jejVFMbrAp5kbZxQL7rKCyDVrs2ZZ5Q4ZXvgzzsATPCgZH1ELMTSugicaqQZSwRq291",
  "key23": "5Q7PAbjzVgdwGxNYWUGd3f1eKjqREWSCCtzv9QK6KWeLuv84pE2D4NeBEuN6Jc7NtmiHsDVwfmJ4ZHRHGDrjr8Wk",
  "key24": "2aj9mCJEeT7mmt1jpKiDZWVYzGLRzYN2rXBJRwqhKEC9YEJ2HMbHUo9jMXFYex2GuLN7gYn3rX8iXaMAVZLZV1Ec",
  "key25": "4rW7k6Sjy6NBMdmMMzsmQpv1RU7CytxEE2xwxfCj6HigcZ49MineytdBKo6Vnaystj5x4vnweG1pSKKT8HraCfLE",
  "key26": "5D1Zm6WZof39jbT2iz1Px3qjhGvjGPJWyNcBCbvoQBv9Y1X3BkNfvc18Wz2xT4CFaPSrbTQ8jGhs8bwBLt24iv6n",
  "key27": "5V69kQd3wriHzM4JGxUFhmkJKg2yf1ZXJ6ht1whbFnPNpt9R3arep4haq2ZtW8NWeTpD73aV4YR5evMswqHKi4hJ",
  "key28": "27fBJGDFNwgoj247zt9hkTTWcjBw7w9hov6cEbPUxvXSqmXgWymjpoWGxt8NCsCvczUMicsMjnb6iHS9gz14BksV",
  "key29": "9QvaoVcTqjcoRbg8Dvwv3hKqwEQZfjNycyCjtJwT513aaJAMyV8idN2z1GfY6di5afJNhDHsasRefC1dCK5GxtY",
  "key30": "2fPCuvi2cAyW5uYcmbMJHom26BuSZVXbPNsdWAPC5WjazhPbBCZqikuVEymycNNMSmceRPZN5qggxeKk7h8JUQfH",
  "key31": "271QHg9Em96d7y2Gf9kPgHcRNdK5dB6Fx9x1ZeAqdoP2oros2veyATYWJisRJKBRDEAoE8RZjVhhE4fmX6dJSaXX",
  "key32": "5RSYVczfCJqu8JNb4oy3R2upq93ruTkkEmjWfu7GqxBTw2QMeJ6bGjuz9Rvwvz7sw6ZnHBc9XhKkc1xGraG6iA7B",
  "key33": "3wtnGSDsXT3QXtK4zpGMcQmxX4uSd3FPgx3rN1Dy9qqvmdTYvqhuu5VRa1p8f5hG2u48S1hxDehTw8cC6pkWbDTS",
  "key34": "5v9YdenYG9QW1vRo71sxQy58HHwzLYngnaHzkYSZFjbDWyJRFdVRvQBu7LeqSVqencxuSDtMaZ7aFn3myTSXUk46",
  "key35": "3tfUNmVGcZX1K8TezjKDv8aKVhAgRsqREm9AQ5qTC58oVbPm7CcBUrNRukgjBDXJCk8KFfgCKaDiL2gPWbYgPQRV",
  "key36": "5wMPXSuuatxrDfqLigsEkpfkjxR8XRWBHsiC6ihyo5BvhBWKgbNtVk6HhzgRXHj9K33RxWrqtp8AwFgs1goS9iP2",
  "key37": "rDG43wUnQ3JTzfp7Bs4mCDi6WLYkWW5yXKPcTixbYwJodpzEfFoaXQuARY1vuo5qJ6QZizasQpRgZpaH5GCs6Lf",
  "key38": "4qx9TjMAwKBVTwdT7386xnhKK5fSmaRTiGiWXW6AHHzVsDL7ksBD2KWkhtwvxHZ4PnmyMNBwsiQ64NYhtUdRBnkZ",
  "key39": "5zz8e1KjH2NQqLiBokW2PoYuHtXX4CtgmTNVTYBq4tT8QjkzHTLshwp7RfQ82WFCgVZ5W1CiSV4RpvEXFtopAha6",
  "key40": "2qV7jUQ1MyE5uGqXeDr3Tke2BG8j5rd3wC4YT13aLhrCZvcfLPbsVpk9GS23AWUJJoxBe2LNRaYiVk3c4VxQ1VVm",
  "key41": "33uFKE8EW2fxVxvqSieHmaPAsseJi6CXzwYa8rV26BwZYxxnabJQDv2cHL3s6wtPAxWe1ejYJRtQguf6JQxEwySa",
  "key42": "5XFWU25NKtey3eid113Ncy9zHrRKDL1P25XWGgVV9VWKVaYcjRj8d145m4mAA63YEXYvBYtNKNsWX3tFuSFDnb9d",
  "key43": "2eJBy3BehS5y9f8n5hoUAqwJuwV8jMPyN5tEenYeskmEpFucEuWpH9F5CYJQSvc2y7hmiAdK3SsUvb9kP1S8R924"
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
