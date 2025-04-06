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
    "JbmKcYoLHKDHUz2DXur5NxKPhg1AbP47fLxQu7ZnZ9DxrLoRFexUVPxsDKYTTRTVUYm9sZKvknu2evMNA1idnHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nFBAkZ5zexyuic2wv57M2NtZdJ33GKfH1R1yWwr6eGy2GsC1bXKBduMhqmweovrp7G1Ad9qYftC95JQA7an1mZr",
  "key1": "5FsoLxQ7FEA5chtKphgMocAbtbJWfjZGZ7rFaYpgCwcU9Z12UMtiCKxZ5DRfdqcc6nKmPkWfsLGTFkXDyGVc83Z3",
  "key2": "4YiUJmGN9vYkP3URa2oTg7B1ppMoF6994NFN2mY7afkG9Qmwa7Y82ZktqcWexECe4hxzo7tJ4FzgtrTQVe1JMjwn",
  "key3": "4RSMTeHsUnKdT94nRCzLKUwdQzTDfbErXdokw1KSoYtWKp8FiuRyQHde575PWwTKzHhDD1AT2d9jAPdNoXTL2wUs",
  "key4": "2wWHx1SSQGeKAQ2Sc37Kf6GKv5jFCu1E3VhPCsNRuvk8jcwW1VNjX5vvDsn9XTK8c4XECFenay3qYJLp1ynZLYvr",
  "key5": "LSQES5ds7sBoVLMa2EtbDM6rbRkrH4JRLt32JRLL2PvJJuVLEqN9zAhnhe8TEtZQL9sySeLVwiGzfEspbdPE4wQ",
  "key6": "2GvQj8C69t9qUUxz7adngYAywBjHcKJWNHF7GFGXzhRmPBtVG14jNuPVmhVGwb2eMiG3FZ4HEuAetBDWB2ADCFUi",
  "key7": "2qQHJzfukb54po6PL5C6icMARuBDRkvPmh6qLFtSFwtK8cVBu1bkdarX6Ui26bBXRf3uaEVeY3Cu8Mo6b2wMc6ZK",
  "key8": "2VnDgbuGWpWskSntnCv1k5QCdhNAw5DJJz8V24yrsFK3S2TJV1gfGV73i6y4z6F6HDAaRx19EvpWZBaJwGbN5X64",
  "key9": "27xk6s2MEVyx5YJ19iyBFczFN2ac4rLc5HurgMqii5xofNpCNV8SZ81GJHDbHFRFhbWTtSFGh52jui442VUj9Guf",
  "key10": "55JDgNVrPdGjXUdib1vrWdn5hFZfSLSQW3scLwPvEQ5sbEBz9Rf4FB91fmM3ZXmNFMuKCagA7taFnj9ejiWkcBfR",
  "key11": "5ymZ3US4qw79SwuNdipacgVuV5n35xWvLr22FwpeF1DkfBTRba1vWBUXG77PBddebF19Edd9kpQBomGfm3qj6Dey",
  "key12": "XpfZng2jMqPNJKQLgtLsZX4fwsLe9HQ2NYSMym8EfRnzpT8W4GURtoTXG8d3nK62GytZqTxMG6LM6vYcg8sQKPi",
  "key13": "FVwsEtkeVZ4SLhziWZTJw5rNmMaXjsmh63pBfHHEFTXQyBH3mEXNxPg8Py3gS8mJsV2tmYteDQEYzKqHmR9WK33",
  "key14": "4u6oYcciEyJ7a5bTMfDPxggaHufue3qfioxTW3L5EXqndqs3ffLybnPpgTEWiwKpgqkQXLj1BCLtPQJ518MsZWxi",
  "key15": "5Ei5AT4V8ATsdM1HQJcAp5CHHSZzYcLyPppaVj3W3fiSexgzBVhEh42TD7DUKTTDcLtiVCpmjUPJDhb6sqQiRfVj",
  "key16": "53C6o5rcWwkrpPYnony8wcX9akNAfsKPZqs9Q7s4YorzRqRitJTRjpZkL6iMFoxerYGFYcLspxw8hxdBRRmwEje6",
  "key17": "5nFc1SwYUBoUgPp8qkzFLyqvmd3dT3z1to1LREFiQUjUgdcTY6m7xpom1NU1eTw5mUCxCxDVcKA7ee4svN2uMj3o",
  "key18": "2QGRSr6R7iJaB9CR4X6T6FZK4gTVEHMnh88yoXDqvpwhr9B5sGW4fXdAhJEbXCgeMe18oHyy6cALSbvXhrJu1DTY",
  "key19": "5rbxNWkGgHkJj9u5dF8davmhrKzTpPydymNrhjo918umnMX8bqeTAATPPwLiW5rXRjHM9zS5eAaxNfNY6r7aGGrr",
  "key20": "4KVP3SYyzDJykUjhzBm5oUQQRUsbGmNQzwYn6NX7scUhD8xPBR7VBY8SUaYCzUJqjQZjm6susqGC5nyot5F1dubQ",
  "key21": "5FSCmyQTUf5Auw2Ct776bMP54BMee6TrmPqQv3hQjbibgAF1SHcmAnPqGngUZps84LYwJGHbdRStzxvCepDLhB68",
  "key22": "2KJqYRR2coHenGPueDysPwas9VRCqgPjRNUDf7AWcLvtGdF8SLowUChLMBVPDdkCJWyr1SXw3sBwKKN7yYxCmrjh",
  "key23": "5bXERzkxipEHU7fun4DsaoTeXWYdG39rZZbq55LEAmAKctmWhRJrrt2k39SyyMDBVpsBt6z3gW15VdzG9ngFw763",
  "key24": "5fKJ9wWvQcq3fu5PLaEeTLsjJi2bjvpZUbq7qoajFfPpMmjdAZeBdA2R1HSX2N5Y4TLsn3MXfiyGp3HJoqWZdmSA",
  "key25": "4mHtDKpAtC1v5WYJNVPiz8Ztp3b19u8AwjLCJ99sgjbeFe8pFqQxZTcBdoo4G63SM6TEri2a1Fvx5ZsmETnDNy6B",
  "key26": "34NPRVe1pmNzCzRXPvacfgANacnDvvzTK7uwGjUNmrTsfU6fnjXQx22ebsCsQxwhn5t9TbrT4bjkyV8JsrGAzYFX",
  "key27": "3XmkC4dHuLjhCoJ67r2ucG8ZN2EV6seLx81E9rV8koRSsfv1dtNBXYM3MQGZXyWS8RSjGx9jBsCFxuFXUYDGmeyJ",
  "key28": "3GCsQQG6GYVVCDSLX8iGxqamkzDinV1bqcQ6pUzjF2dyo7QMaARcHtsWvNi2PzGYsJdJhPQkf4Uzj82u31WT8Hz3",
  "key29": "4Ah8unx5bcny7XCWnN56sDtPoxBu8jtzsBJY7wZBvoTx4EupM1Sxt9jYetpDoF33MuWHTxFbueM31jqbejEi8Vz7",
  "key30": "34Xo751HZc5v7aSbx3gXzwfSFVgjGVCefR4EqSZ8mBirMwtHeSFWYGVYqh5gpvpxvLxGMXXS9kTnvnSoiQZKvQUq",
  "key31": "3K6MTTvmd7RRLCscMW3UnxVhxJFiKg3D4DXDGynpCP73bVGPta4RDka3CVcV5PUBmj2uRW421LXm3JBJd5tU2jWo",
  "key32": "36B88svUFVwCrFwDwuhd4rC6iMAZbLx2UTf5b4GseGkFajxzpMhzotYRvSd4FX7MEEDAUFF8nc4pxDTqD96fY7uk",
  "key33": "4Gb9uR4PejM25qG9zWPux9jFjdGZxjdwC2pQBYVCHZYy2oYgfqoMR2AXDHkNBnfyWcXu8nLp9eJ5NG6VJPE6EyMi",
  "key34": "44s6mEsiVQ7xvt13eyJSqKwRdnAHSwN5Cqj9gFSX2Mmf1kzTH2dTzKTHgbbDv8gttQRRinhm9QHeBVdNPWHrVnb4",
  "key35": "3YUDnJNCYdo7VyVFWJpyjieGkJDvFhsCgovvkLnEnPZLqFRTFmkM1WTagezJhufehDmrGGJAbLAJchX9Y953Mjku",
  "key36": "atD5yDJcetXzBHm8rDjVoxGBZTnA2juVonFf86Ts7J3PeCh1SripAbLRNR3cuxJNBATg41pbhHydcyj4v8ZMbRD",
  "key37": "3c3E637kC2bng5VZD9ouUjqGF1Mn8CsAm8NEYXVf7yYk8sKqSAdH3Cwd3hj93pVoUBXA1Kb1Ee3QNTJUq7695zqc"
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
