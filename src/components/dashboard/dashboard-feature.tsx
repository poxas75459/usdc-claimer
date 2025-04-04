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
    "54oBbjebR25Uza9b3kB5GiTNQkXR8aZux9UY5zYo7QiHTQ4SbqDHbiZPcjnx1HQ3rTbSBeaQBNeViDEzTU8jCUt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HiZpXkw5aY9LMiwefQ6DYMBiJpnPHsLNirV3uSS5PEghkApeig73HNvkw3pY32NX4jAkH7R3ALJWPz9jzHMw6UL",
  "key1": "c2BgHAqLdToosCwKkZ6ZU19kJ823VgrB9NCzaMUPEUJoeLoK1ipk8mGS3MphV6MdQytuKfTbZhDPyZAcUad2T2R",
  "key2": "2zj3iyayyitutq8nXNFVK8RwwJyMuwhjmuj8akMbEispQ3fjCY274jkGRFtQd75Py4xvs72e8tyho3qCtsS7WSFy",
  "key3": "67FgGPQLNzK3jWBuqv82s5tLLMxbuwN6UxQZ4LnNQr6iL5bxeqCPn9aEgnWEXFB2hKNSGbf8GoxcHtvwSWZWb7Dn",
  "key4": "qxkkvSNxWB5wmzAefcJzxGXhp6htmLoLBWBaQSwU4qLPBCZhZ3xnkUBDH7T79bJGRttkirctZ4XjmLi5X7dM8Xc",
  "key5": "52D7sayVj14uPPZqaHMYG3KKVDAi5e3hZm72KruqDWZeZxgMGrE5ceFURY9d8V7YV9uFnu5khve931ZP3RMRhjkt",
  "key6": "5bDhsF2FBwk8xFf56Sfmx6yyd9mcYBadtMTrmwAACef46c4DuUVxZrEr5x9b7xZMkLRFjdQFR8eaknAEDto1w9Ly",
  "key7": "2SD3KdubBNKeST2MJMExznKGhnWmaWLCicgzRqwE47PSYaxXvJpqzEj8L1h3BA4JMC65UZcYbkrsFfPPN8WeJLbF",
  "key8": "3pW1WxMjT4d66n6L8VfugreYj3t3m3tZHjQwEYAjDD5poTbMPAyTLd651ShvF8jnnjM36E4wxpBZUT6cqUUtadZK",
  "key9": "2aDPjSvENdNwJAf9UuqRgJczboFDphmU1BK3XLs5ZceSFxeYMhSgJmggd2m4fpNqEgjyxW2jvu2w67Y1jEy1pLTh",
  "key10": "2vJqX7Ug4HegMGjCZx8goQXzbfXebEiK1ekDEpkjYHQhavtXoGqXPqQwggWe2LoVmPcA5b5ZirTqHnFwoGtFF8Xo",
  "key11": "3Gk2QRL2v1wPXQbc7uknKPp8Suf4YfeBM4QZyQt6qM6N9MoraJosQ39ZDiKoTf5pS56iZAujT7tGu5LY9PEFEndd",
  "key12": "129GcKVTLXo6weXrqrSDdePTioeybTGALcYYKn7mv4X4rAqYqoyAAxgss8TFZuv47kw9tXRUKsPAH8n8qQ9Xy35e",
  "key13": "nJsDmWJ9x2nMPR3nfu873sNpxDY7VngnoYCKgGciPQWzStYdikMwFGxe5axTrVBhZ4HqPwnejzGTey7hefpKUzY",
  "key14": "2oStEvcentzj1bRzdmGLXqXcYmDqzagJstoTGdYQBZQvWMgDkAetzpR3YrjeYcLXPCm2CHnehdsLBpJPxAJx2eQp",
  "key15": "5j4BzhXWxQorVdQDEYFEhbFyMs47RKAxo7ZvCwkub7MJ4xdtASLqoMU52v7GRVJfHfpodjZfPvZmRURvNp7EvCdE",
  "key16": "45dH2gaDfCww3f5RwWQn4dWywcgmziHPcgSF8TGf6b6vQAHkeYpakdkGHp9fSCmetfkDj5dCpPZ5Y5UWabngWEj3",
  "key17": "5cZRyrqExUuo4W6FevPZ3c3Hjrkozyefh33r648U7CZ3hNGdBefrT666gFTG2au2GaE1KMcAEWzdnZgmLWLQWT3y",
  "key18": "3Dz3GC2T3F33s9UzeDAMpSWo3KwNcRBA5haRxWj9DzHa5531SELtEHcF3Soe2Pb7nihCai5aCHFUHV1mSzBiwDyt",
  "key19": "4NZJA29JYBcH72m74FtNbCBQpGtEeFTzS4ucGN5t7c5xEHaHC9fqAPKbRCMTY8icRdVFJtSTLicnvW9Yh7b6sz2Z",
  "key20": "69j8MtiVAyYttpPmc76pqNTtDtC8X5zSzFo5k66PbFzDR75vne4dPixXUUJ9c1birVft5MjrWtxB8xUaFc2e1e9",
  "key21": "5epYvKZMQUSstX2gYNAWvWWE2v8qZv5ZcPZP8T6YHpMNtdWEbHrxPWYqGj1zavT17FFKbfMc6ZF58DuX8tP2hUGW",
  "key22": "wk7FJHVQwt96XThYMgnPiCFa7XysUjmk964x2VnczKqNBj9Y21wH7XRZ3xyT5xxxhdFw21mLGqEqotGmcKJAy2q",
  "key23": "5DCLUszprs9uxz8d8i8s6C6fbSY6SUM1hCRWGqehftE5ZerhmnXLBX2mgn98URNVPztMASLHC2iKGD8KEhiQdujU",
  "key24": "4BZyEvtru2SbiATJrXaEyUMSyqpu59bSAemDVmnKUZHeASd2Uz3XvgiAbpL2ogq13fnJ37A2VdCMWY4WT9aG4dRt",
  "key25": "5jJY4H5wEWJsxYg4x9UuRFEwaw5vP9rz1TcuePbAKQeJVQ9KqZsZa5vNL4wkzPfN3Q7Dh6ntisUVY1BqCraQ7oYN",
  "key26": "4FtBaFfMA4y38phFwD4szP9ZDMEzxcVoSB2SN5zcCg5r1yi6yfJumRtS3RvmFyPG67r1ZVRKq2DLNGwJDoBWyJ8z",
  "key27": "3P2uqkMnmgMYQJSbmocgzcGW82KkxVsPfS8mpqweNvgvUCBzjMUwM1VTnasBHrHUbWdTEYezJYzPxMVtuvPqStQY",
  "key28": "FjHKEhbuhPF3ep8vtdYWJCDtBvt8AbjPC88A49SEjRxR7o34v6T5yMaqSHgUD2QAJGDgJM4VJ3ju8mjsUccvJ8o",
  "key29": "4xNHUMcUUQDNeu1YdsDB5CPu2i4NJ94EjgrHbhyJ7e2PsXEUqbw7kYT64WCsGshhaZBEHr3ijLPUqnBpiFwPpBWT",
  "key30": "94LTiBL9m5iFdU4GgcFqQLErxdVhaoX84zkeBxS9zgNdAtjxFt5t4socFVjnqd4mGVo6tvhTDYBU27LMhsRyUd7",
  "key31": "oH7r8wv47EvZvytEbx7e6ikpUM78HZNjvxNMEV1H9Hdw5rTC8diws4B4SEbBcL8zhMkH98h4sfJtXrhafy4pfUm",
  "key32": "4Cys2aS8Rz13GfrLy2RGzjw3sNBUrVVEpKdM6JTTh6Z2P5LkshBuGBeLGEFh6bovP9eLUxhG8uFyNrpyRXDeqyUF",
  "key33": "3pKv93WckyWfZ1JnLo4VdZLrcRqVaZ6cPnoKJxqPkcjx1rfxprfDwNq3CtEu5kc9cpxvZmjZEj5Kn9pjJLrFqaWF",
  "key34": "3hW7EYuZQsE7HFcjqVB6xrThXH1qLaz2DoUEesganb4P1KxxHzFkB6yEamgAaR3zYYf2QefwqNfSXJSghiLUYpR7",
  "key35": "3Tedx8QVw4wczjGaWHDNSjJueoYcRASrKbEyU7JFn5d9gvfy6ufMXhCjZZfAfjp9gpYiywTkdZrCuH42CHW7GR8w"
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
