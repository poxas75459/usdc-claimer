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
    "44UpnB1THMLHUMv6kqBMaBXrf6ftxd4XDki3kKESvnvN6osgEermqvXiGefwvquYt5WLPCpJDCuQnLfmyrKVj9da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptqcvy9hCjsTZH6Evh9PSdprZcD7ts9Q2DC1Kt2R8KsqsKFsEBYFrHHASYGCBHSUqxRvrpeURz3yTia9RPKYQmA",
  "key1": "5F9cMxheM71wm8h963SERgfgedWN5HQgTs11mNyrcjT3iAvKMVByc9jtqnp7HygXfLzhdCEaka6G1b7KBxyWfnhz",
  "key2": "4amhxvRhzrAdKp5Eba9oreigcxFUz5xcscUJcxKUj2EjoHjDSfSE4RVo5ewU9yFeBHhCbv6byNyr7tkyBGwLJWvf",
  "key3": "23bdYbem3uEB1xf9d7S4r69MLQX97z57yBXFFjek2SiifiEpiRhwPXp9ciYfTSt9mAmb54DDHbyos662Q8RQNtfJ",
  "key4": "5ut4xX31Ly8TrrCvapi712yqRF7YU1tbxGn6Q4rDM1in48DDCak7jeHj1WrNoZPFGurYEzZi9r5r8NE7YQ7FJD1s",
  "key5": "DQiRUXZMMtU1eYzZY7agLtkcLbzUh8CLXzRksqHVDvJfzQ9oqa4tnJvCJYQ812Fn7JL1ubkV2vwuG9Qa5KTm2MB",
  "key6": "NZb3tEcdPV4QZ7uFUmp3hkgWSYQxUsudaQJPXDyXq7zJWPXhswUS99hLU8UueeNESZmjJSPfeGCMYCrv49Vbxfu",
  "key7": "2a7gYyCiimeM4rVsNk2JumA4rTFLj5GRQtQZwqHqUrNcKG7cEqdhf8RCwQRFu9FfJfP3gFNgkNJKfEiS4UYtEVgu",
  "key8": "bEAC2GeGfZUwpZHGMu3vautjbAjCidXmngNkAc2o5pL11nPEKiSJrhhjJVFT4eZb6e6V9KPeVb46ysZore9c1sz",
  "key9": "5WdmJcbPaPzni4YAjaKLD2f3GmErZWMFf66HmJKjScpJpZB9CtWvaXg3rSTMoG73cRYB2EQoaihaXcmVSoxTDRKv",
  "key10": "55FwpZwqEWsCb8xr1SA7iMoHsYeLL1KDnUDeZFGHreF7KoP82LEze3K8r8Jcchfdrvy9ttowdnfvrH8jixN9g6WF",
  "key11": "avfSpvEJJSWDbGReTg1BMscuEuAHW5j1TUhwktVvhbVVYcrCtsGa8drWvyujLKSyLpL7FGQy3jNZk84e8Z8TRzk",
  "key12": "2ibHVFbX25yVDFohXiaGaJPmubBUehLmng5SiNRKtwRECHzLiHQ2C81QKkKQkMZGyCXTUdX3YxzosZe25hZKmDGV",
  "key13": "4FiSwYFneSATubzYvj2HQ4iwfBxjXmfaNysBkmJq5GAQzxab6BjsXH4nQ1HqhdwVV5fDGF7hzDgGoYeuvzN8XLx",
  "key14": "5tWhmjnE1igdMgY6TcnP5r2aduLZ1HXuhmQCE4da9VG2JonVESkRXgrGYDxGeQxsvcFfzi3gYiSnsc1ENvAn13pA",
  "key15": "4PZFmxaAGNbYzVWtiEVv8aC4cgz1jes8Vmq8gnMThwuFozNc4vHepVkS2p8ER3zLkoUjSNcmnP3UuVa2s8NVDoHT",
  "key16": "CX34ZL4pacVDtQsieTqkPL1Wap9bwen3rowocCxwNeRJEJ2opPbnvu5mpya5XRrbbyUtp73hsw1Hje6SAsMnW2o",
  "key17": "2WSEWC7XbsUzchGverbzSfQLZcENu9QKh6p4VYuDYodzHmLTZWJRZnju6CWKXUSQQcef6j31aU5pxbSeSPyjA6U6",
  "key18": "4EwSoKfyPWXMK1SLdbAaZKw1Jvz1wLnTtrxHG4j1khsyVuxU5NuZYyeNEqAVthsEBdx46rNECAESfj1S2SvrtXXB",
  "key19": "2z9CLDVfN9sJ59u3AwRuhHZadrAurs6UijiAQgmGuBoLSxsfk83ynVRpe2XcTYthvhPhv3Vddfaxj3Vgh7TbR8rN",
  "key20": "5mjSkD58jdLp8h6goBHWPepqLvSqEL334rpXSTQ2gffoBQYQXgoAjqq6MfawVsszdnSLTC6Htp5w6Aq1AYxCKiy7",
  "key21": "3mgE6E8h8TiAZpHwph5nKv9iUB4P8jUXcCBJ66NnzhXTmiV748b86XiyT7YA6RfQ7MVGyyoTR8TdcP1tBaxnav2",
  "key22": "5oZbk4pVm7cGwRFsRcU2piF1pHLiXCJRW7DdMzJCyu3qAfUVTy9gbHRH3wQ89FXdX1hm87fEepTzpqzL4mDzJWu4",
  "key23": "46MvguRfwE8jVwJ83Y7zpDFBXbNBdqWaQbrBWEkN5pmW8AUcfJMBQWY76PCxxJrLBVXbmqdSszbVbz3CwmvQ8V9o",
  "key24": "2TAvXWYfT48fGxd6LPtndR8fqB9EME2VaouYaiPL6xPikxX1Li28C33rhDG3NvbKHNfpFSXcjLsjvkqyzLEcEvnG",
  "key25": "2nTRb9ybxeuRKnHNd5b84h6qwDFp4Vy45VCR3CWAMq4NN1TXvPWhWvZBRv9mY1QmgtAu1RXMeyz5im36cZ9NTZj4",
  "key26": "5P5ze2KtBCManSHVjoxrUti6e1TWR4SnaHdf9U6UsV5tC5zzpdwDUnnsJyNFbB1AHtQ1HPQZq2Bv1NdzcFrn5Yau",
  "key27": "5ZTMbyY8a9qBQRxBrVVHhyMum1S733zEBoYYsnh4J8NaJ58GLPNisozVvQDv9qaVx4q7JSUnuypsxGbJKuGL3zJM",
  "key28": "4txM4j3b2k5ETaLHU7gaiGaVjor21P6nHugD94knzTNZ8mqaTY6c5GirTeEmU2oQ6PCnC5CCUotxHMKq9hrHgiBD",
  "key29": "2fSev5h6vyx2aDUwGChDjmhwMTsEiAXir2baECEdUFurwBXQ6WJnLwjeB7YEZX5GWR6S5WFnnff64nmqPWURjBhU",
  "key30": "5jeJxUyeogAfPTgk7ZNfyTvoRe59s6XtftTmiZaJmQvReM9Zq6Ex7rf7XvAxDZQopDgDFWaAAZbZUEGCAAWQoQsq",
  "key31": "4kx4Hg9Xmv8v7s2qmtdHZCQfMnQbPS6ZpFNvaJwG32UXY7qnZzFpF8tjoZDDeEFX8J4aCo1BLcGVYyJQJ1bvCF19",
  "key32": "SALY1fPdv4LqCMUrQcCkaqC7s6QgJp2MuhKPMMQ4X7tKaj1oNRCiecpUdU8fQNfyeXnEA8Ps3xaAFua9nMsAmjL",
  "key33": "2hbP3PAAxHYQPs6VamFLaDqShLa1iMjLshaWgvxvZEhqQhau77cjQnjRhszy9bcRaZk74XowoX95fmX2q6yDJ585",
  "key34": "4DuSCqrzTGGPbgHiNfLUXgSKBnPP3jy95hwEdzfLcGpcTAr55PsCUHGCB3NkosjhRicEprb6fbkmYjRAe3VC9BTf",
  "key35": "3EXsXaMeqp5Qqki2puSp8iwJw7CCtoovrtsNvjZnuxGxE3SgxjqgR61d3yEZ3Tix4aYPLCJk4WpERvVbNXshw9DA",
  "key36": "4pup5TqGFMndAKTtJhhqD6NLBC27437kBecpiiyfUj9Duk2GUvp3jEtrruc5bgqKKRcRn1XARtA55MV8zHufmZ1a",
  "key37": "58GE4XSa1Gtb2va91FMtka5Cwps2WK9YpT8yaAHJtQNTPGXZCSeL7c3GLU1W1MKpKGA5eDmJbVKmWKhtg7tSzpmC",
  "key38": "3C17FMuQUse6LENUDtRiTEUkUh2dGS6mNuiFjx54XxUJpPcArQsDoMYAQ4Q6Kv98MQcfZi6FuSfFKNgJ5JCVGswf",
  "key39": "3MTHyWTKYfCF51fUmRKTjnknxVgrmPhkqg1M1L6rNzPmyVM129PK23JQG3RrXPZBJ5hticAqKKMEPAfziXNAK3m9",
  "key40": "3kYfCz3KvgneQeMGgaWwdgaB4TLdGTRVm4FoxWmdka6QnHnUDPLwKkqa4zGMXs4MZpScofj4AcumKMERMy3uMawZ",
  "key41": "3jZi1UFSHeWnpQFCV37Wr43d15M53UQLdkKXrUXffKbBUDbAKj5BCcaowoBykUJiJCGMRUHB4sAnpUmjVxL4aYrM",
  "key42": "3ZuPvuzxhXiN6Y3qKVJN4mxByNco91H5rPMwr5P8i2YUWvWjSnok8nsp4uquf221T9kHx5L5VXp3nVB96zPyezRK",
  "key43": "5ZnDWH8aJ2vusHrQYJg9mcHZQ8sUme8vUwMbXVYrZ3p3x7mow2TVCCw6ZPf3JhiqeEPUgxxacQAWTZwCZZie12mz",
  "key44": "4rweVdBpD947qZfJgr3TjHUns9AnqNBY4P1ziYD9rQnoTPtdCTVFJSvncaoGJYneVCzNZBx1tFBJ6z2YfLhLEdHm"
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
