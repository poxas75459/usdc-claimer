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
    "qd4B4fyHYSuXBUtzThimMv791ZKtYaRRrTnQZiFS3CuExrTD9ESHFsCrKhmCKuK219AXB9MnFdkH3osgwGtkBBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyUzsCoXxWKUQ1RjcmjPUsLmvjkhYU3P5MuNG25rQLuuB2XF2WnkyF4uYLYvLYC562BsK4z3vhrFVqvF5eXbcze",
  "key1": "3VSZDb6QKKsCJ8NbYZxo1DJNzcekcwJPLt5dodQ85CstK8FAqcNefqUQsvkBkYGDtjNvuBbQHHoynbt8QXpBtRmw",
  "key2": "3CqP4xu7tp8prY2sQyZGFz74knn57eY25FDtPKjCFZo1AbxNgK8jRfbaYvkAPz2kvuRwduP5AGGMSQ6puKYFTrdo",
  "key3": "hRWPqWcLiArqH2Ve5C9Bj5FiE9apeaAqAiYvUD7JaxxgvxwJA9K9nuZTTXix2dAJ9BUZXt72naRCf7Q3svDwrbq",
  "key4": "3GhABJukwfx67oq46jGceFT1pduM8CY8a2BSasUTkGrpPHrDQMjeM51x3KccV7cM1D9FirQGoz9p9omMsBRt4Enj",
  "key5": "4YnGAqFtkW82D9kQkyt9rt9o1e5oMv6PEJPksHVDk81RPPHXPqfavf9aXtoHgUQcgrqN13dcQtyNngr2Qb24dj9t",
  "key6": "ZLotS5QbxkkGfA12U2DxUviJR95oQDQd5zhMApmeiUS4v7ukQqEVvBzehbUq9hTR1mJxL9GMFzv2Znnyj7K4nG1",
  "key7": "4hmKE3PoCqAyGa9oYSR818JzDk67yFZDnSgfVA6i7WAo8WwHHcGDKK47UcZVeiXQMGBABvZh3Wvn2ebYyEkCUjaW",
  "key8": "2oExFvpHLnCFr6tib2vUxeDxFF6xJmv1ddemRg2DxhhzshH4jkihx21RfFddDuErF4wnKpEdxaUKUvri1i2Xb5Wi",
  "key9": "5dXuJqAtQkZ7PNEMtZPzN6xdLS5ZbJzbAMKa8MdFhFSw7Xnkc8i4E5DBubirgRkDjL9ZmPpuqsPbypqBNkub2p9w",
  "key10": "4A95uht4fjwq4iVeyan2qigFs1x7jrbibKShz54oHSH64b7yjFREAdY5ALBCznZ7LUUfXfXg9T8UJAQF9LKAPn2F",
  "key11": "dmyaRQVRjAmLEcy9gVREepzxd15pbbEbAWUHoHbqc4PryJ4YZRUTCirepV53QAN9k5G67mW3CDEWuKmsdidq8dN",
  "key12": "3g87VtoWgAgVYhRfiAxQKmffWvpaM7AbkSaw4PfgaLfbcrreggPDyJ7g57BCzL2Vw31ZjqJdbsuiyKYf1sok1ZY2",
  "key13": "5VZKGZwSzZEsGHbyDgUhdS7FRepLT522PBSCCVbvYpE14xEEUwFcmTi64LZnVgtJFqhszBYw2Frp4wTpC4uoLE9B",
  "key14": "2DsBHTHebz6QsiPEzQWV8ismqMD93UGzbQdMDy6pvedUK434Hc9KMVqPFsZwEbo5c4hwvg7BK3CgyEdVtabi2qzv",
  "key15": "58iRMjX4HrRApG7ghF3jEntxJYXGnKQokkq89WQWYJXPXyLd6zfteZZUtG8uPREn4geu97SC3pxP4BWHqjdkqNRH",
  "key16": "4mgqcmhZQARTkEWTc38HprTzvcpbG8zDqf68teG8xxdKo5QiiNguUXXAtGQiA3VB8GgHR1RqypD6ZCnSJ7ES1QzZ",
  "key17": "2XoF5WeokLfFDheyf49ZVzbw6tdKE1A6HDZsJRqNmVrJwDZ6G3uYwjX9uy6UGPBhBpRfKhA5wfW3HX2tMLKX3GbF",
  "key18": "5zM8P4va8iYf9PNbmvYB8hr5ybzi7gw3NMbenA2ShqC4FMEbn4SijZvViCjCgMYTrhnqpAvc6njYU7VoLBMLxy6o",
  "key19": "3YP62fi2MYyAiMwfanZUZHUmAry6hVFdzLTtU4QmWPKwo7PrYdzEKXX22hRFL14xNbrkmZinvxf3hZUvqoGHD2Jm",
  "key20": "3RpxKafP3o2FU2pTZyziWJpDRiepFuBnGWMf89of2ehdtS6gEwUJMBveosekLCcguuwHiyFZ3XoKtmcstNNeQtxR",
  "key21": "67K22vEohkEtpsZcxQzo1qWKn85MusXhSXTocz7F9HoSyjKvHd6NUwaTGvn5gKrWmg6wa5MkNDFngBoPeyhL5mZ8",
  "key22": "2WQqv6QSZ1bRPYJ8watJ6CkLPY52ZFV1sjEg5U1AQWZxL6H26BRoZcHvBsG9TShVa6mkydNBnWJgFFxah8Eipk2n",
  "key23": "2wF5k3Whcq2ttBABQBcKpTX8bSgfqtDAr5LZh3BAR5JxDhtrJNeuSgNvUpQ3DCrDj7uMETrxhcjefZh5MHHqAejW",
  "key24": "NHjHS8manFEi7BWzStLmjH8G5mgkV3JFKBTz3AaLwxDWSAkdwxEVuYDLQjAQnzAJaU8hnKt92PzkvbWkTniDcrP",
  "key25": "2RNo2q7E6q34nANhW636V1kqShcXCjQBQ6qHFXyux119Jmx4uww62b4MPSr3kbwYL8tSnxMzfTy8y1YJAQ9ziN7i",
  "key26": "3QAgcpU4iZfdLKceZAsN4HHUcSBgzG9G8GPbnDMaND2wabDGDcHEgUCGLdteDKF6LTTE1HnjYKevGAs1KQVHWMg5",
  "key27": "byA3WA8vZQrtSDyuMHTv68fTkxHqRJN269kbCx85sSDLgMSzqTaPecb4YKV2tDoDN9V1FDjWSQ7qCdy67JCrFcJ",
  "key28": "4JWUrQVXf3HnwbL28jUvm3kcmmsT2i2q2vj99HJa3dLGfG4vWwprrTBek57SvgpEHNbzSvmSpjY35NZbgtUXXE6E",
  "key29": "5tdygUKcuDNF83AhD3zxVym3oYNJycb9vEWLBEEZ2b6PwFLLUV7SrrPwV81TMRhJH6bDQf9Vt5dL5E59398uFJbT",
  "key30": "66G18JxHodDVd4CpDwS68nEQuqNe5TnYrEvQ9UbyHTjCMfggnYqghWho8hNpx2hKUZUDmH75F9eFjribQxcoC8V6",
  "key31": "2PYa7ascLtmziU8qTL4WErYB5zNUVAjC7FGvpPFkoWVG1yA5aSGgzS1ytDFk8HHjCXw8C71USfzX8ELfKZHPK96B",
  "key32": "4acvkoNFUhePX43z1wyEmj8MJkLaKRjGGUdvN4deBHYn9DEX1FckjWdEg1mHwAuuGdbTgS4DT4vPkGxJy9DpNsSh",
  "key33": "4Es8ccqZcPLmj2qiWFeZYmukUTTWkUtLVjRggKBkB96HP2MMQGrrXQfqdcrkPbQHA84djY3i8jZkGSYzhNp2gMXR",
  "key34": "59snve8sEzLcmppoCAwbeKck5XfxkLoofe7KJZNsLodDZsNaM11hzwLsA3pJw5cSxYXQK44AQYJKmFMmE1PgZMts",
  "key35": "37uSrtMwkXXZaheXDatBvBSyACTGPJAQr7CSJF3MnzPA5uxRgo7np1GjRtnp7wGGKQDKTd7Tujkix8ViCGmBnDSC",
  "key36": "4fMzgJo3ewHFoQpCZBPGYX7EXuqrj1417KPPuDqAerHNCSWYcRaDgNsTRLtK7A7DVdWFyUFzphHRvc6XwyRZz9Wc",
  "key37": "2YpGCU518g4VStcJsHZpUXpmNQYD5j61LDLtucgNSmiK4Cz83GqwEPTwvJ2msVq49fb5Yfr4UQvsUPLhzpm8ZZYJ",
  "key38": "2scEsGRGyNELA3UcCxShaNJUDwrqtqCoVvJw6NSnnoYkjW4ixUsCBgeCLt5Tih3CmE1EafXhHaB6oSievYjXCW1D",
  "key39": "5isqE1jEX8o4fL6gke91iTkcEFCFESFRe8jTR3CBsQHt3ZxAWUuByiC31BhqZ39mMp2tngUJ1nb9XdmLjSHU9Rks",
  "key40": "5s4NQJetg6A9E77dQaZHtswv5EdPRFNtJqwAJvfzLscWi7b8XioAfL8MeDorbEHVMXge4MABmhLdn2vALXW21PtG",
  "key41": "4j2rrMWuZ42CoWyad9HgBHHEoT2PUwrbtNgahHLwZp2vBsvfdNAFFA3RAbGUZpqJbZoFXArmAUfJ6jiKYXkDSr7y",
  "key42": "5iGyojCZAEQoVq6pC8Rpidcy6ar6uWos6T6Sqkojo498qSQcgX2LV7uKPGsoJFjBmVZ2UhNBNAjhhWW1GxXnN8iw"
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
