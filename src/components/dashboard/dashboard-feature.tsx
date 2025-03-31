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
    "5kJjD3vXnxbZTcSsJHNLZ4zSH1XNCq1pFJTuEqM51zsmsXB32guX4JWw4YrVJ3PAjKTtUYkaC3kKbVyvBGGxwE8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHhDCsD7Nap1ySzyhgyzoXAoWVHWpe4At4bBejWhMpjw1yZUfcaaAAmiHFmdmqmTTcPBPfff8TCDAWkAormiuBp",
  "key1": "28p1r2ZM24Qum6ciiGQQUQt9d4dFj122kdKFxkJ4rWCgaYKtjjrF3bWbzNMJ9SmA5U1Lrdi1MtgrSegm5KPCaczb",
  "key2": "6hYnEsCszu5oKg2njAKD16kgXawdVXkkXb4FkJUpNZhfnPsEe3u8zkUts72ehkNZUqWN4JL71qd8UAhewZDzXjs",
  "key3": "5yvpJy3PvV9wL2aYUtxRHw9M2CBvZyb654avF7vom6Tx73cFDEMtpFBtxym91qe35PjdrBburLv1nH3jE8BqqS5Y",
  "key4": "34Fau2pooFPKbcSLXcq3Xhp2YzjmHz6irUiSfzvS8b5Hy85Zk2cfiQmoCFgwyCoCL8WJSxpiM5a2AdB5yoWgxETy",
  "key5": "44iE6UdXDv9YqKQGF3aSMsjndup7wmNtdLZZTTovvnMGnUnQScho4brD2L4rD3nMtc3uz3xKQk1mVvCjHqMzp3Ne",
  "key6": "5N1isFZF2YaxGRAqxL7ckTfKPW43AUpvCoVheeoCtRuT46h1AFLK5sWkNvCAuHR5qiCZHmitPVu1NuGJS2Q1mqbY",
  "key7": "4jP1cxmmaLqFtiwaMB6pJNekubzNmZPSMidufgFFQYvT2vk5WuTB5zsDpMr6oQNLLtzrTC531FZHkkhccMJzkoRk",
  "key8": "4AWu9eyTKuMjsYJyczzpqhuseRRkKdmhhEHRmprCbxdsHbKy43msTh8SXgvT37Luhib2odoKZee7pZeMn8qP2RVp",
  "key9": "2fF9TRsfeZmsMiWhH8LvrA3Lkb4GY9KqoEiwdDUqQsR9ShiuA1MFkvXeTrRRLxQ2EJvjd1XgHrEz2Kxh9oQwEkiQ",
  "key10": "5FCseGsyvWkNy5LBvrmC9GnGrxKa8ZEL3FBnL2Knj9Cy5bHPAdeUEDzJjaq17CvRkMgdKH2qfgqk7cwTBcAupQSd",
  "key11": "yhFXvkaRxNmDKZyVrMfXp2TvfPErwkZMjZec6LUYuwnXHWoDD1apKpMapk873szWKmmhKtsiEjghAkr4Pj9SdFp",
  "key12": "cr5KsGq4qQZ6uVKf8MKej253abqTJQNFFiTRXECB3idRpDkf23fQDizdwBxWzHaApGsmJTHUC65AbTS1fhFVKP3",
  "key13": "5afWfbzvtSqKpdLDSaFpjyBC82koBGLcYGqRiHN3rMZyAvXLaGishp4Qu4ZwkrdGxeDsuo8gEAsRbAHYQbgdS2Fe",
  "key14": "5JdK82cdV6NGB3Eeyx2dkvFQZJxqHUYwXXpUG6ffb35gYyjZUGq2dpsbXzauw8tig252mRfrDaVzS1HTjYcptS7L",
  "key15": "M1urrHofq7L2zRgXnn6HMGZxq7YJQcybaJJSBE7UeLWJeoGT9LNXaRH7zrP6w4FBhgxzaedYBULvcyA8Zvh2y4r",
  "key16": "39umYzK9LB95AZhcgrbVas8Kb4wDnuVoXbqFgciLki8vc1jk1dx3yU81ccYRjUy2zxsiXbAJ2KxJRHRSdmWpKjo5",
  "key17": "3JgC7H4rvnaawvC5uJwZFNzTqGxTsLNV1svNoW8Eh3TyLyh6amMmp8pvw3bGAL7JwURvsQZfuikkQk6uRJeoGibM",
  "key18": "3R3bWXHm7YJN9Tp5tTAUi3Z9LXL1wsq7HT6LLWUd2ek8hrYo6cRChB5xes5UiHGAsAwvmUvH7xohfGCU2psVT7wv",
  "key19": "2vtKPWH4j3fzMVYiKgFiA4ZTgoajvtQTjwufvXeeB1nzTXQePvfJbvi1RBNGefZKorjHH3CCzHVaSs3vEwxBTqma",
  "key20": "3Y8W9MG4EumDuUbTSP5e7pnciT7MbaJamioBWvagsBvJN3N9pp6VKQc5pZfrBvxuycFJnUhiZEbH6m7ne7BB8UTe",
  "key21": "4c4nSqAoZgyTMMsd2crLp9BCidZGXAWipkwnPe4GZkQMrocMbPW658fQaLYvXJiS3rB3GmRneALxZhD79rxzia2L",
  "key22": "57db2EK6EkDZGXxxuKNyNELguq1LkWmad43ccAUehhfM71dzMivubiaqAB9mLC3Rq3b2jE1UrANptPJZjhYhgcJ5",
  "key23": "4XAPbTQLNt2rSipwbxyLjmGsrDYSgzqq1sCyqJaQnKnVARs3EenYyLGT6rsVicKZm7ZBGvcqfY4ekytmFmGtanJR",
  "key24": "2PpxzghtWefCgGMd6SLpsMmj4bF6J3d6rYfeyKFjVTrjvXjCNKVoeCmX3vDmfQTCjEzNEQknPrEeMr15AqZWpbfP",
  "key25": "4Wfv6WZQGsxvaJBVSVTSEDNdKPaVngNtLY7mv57UpND7dyo2xdgrLbQMQQ94z6b2P8QsUmBwZ7Vy8jGyzZ7FXXEd",
  "key26": "azGvXk2mnatKyx1YxriJMaAtZYZrGc7T4LxU36BP3TSeWazKrke7kbM3iZKy71M7SX9e5EeSyBLAfgASXM1oFzU",
  "key27": "4Va3aruK5JAh8E5hWRDTUTWVitPTEM8hgdFFfjXH86ME1NCeC1npZ6w9kjBV5n5ckSdQPn2sxTaL9Uijye319AfF",
  "key28": "ew8rve92eX3tWjTvcZEbMeDAuuBRi2CdH1ka9m5eRMvrv9GpuAk2drHvLWnfh1D1jRyn3dFeb3bpvkcbrcUDVtV",
  "key29": "3fkMJ6TouVqZyXzN2QRQQTdBdjfzoTd1Cx9GYiqNWpwXLpwKYjP2cJ2DL1GTgny6pGTGFXm4vJoBXs47XCHnquSL",
  "key30": "5nEc63B4d8cTdU1bizFjmU8tDMSwHtAJ1ekmAaVUBT2vWCRaLv3jQogfHNetQMTwEDeVjhtQT7aSteC1dK9y6RPN",
  "key31": "4MN9o28gEKdMTQXBmgwwDhQPX341uvnmgW6A7KeG5CVaq1Dk9zkbbKJvUzcw3QePRrGc1oPE8HSCg3UcVmFx6E2e",
  "key32": "rWoYmZQE6kSgAyCeFoYJpeqnmx7v7GbKjKLfnhNrX5Yu4euzBMZU7nmuTWLqMRBYfQDuWsnSxB25tJi5JYiaT8U",
  "key33": "4xksieenvt6TAUPKdKVxDbWu9GtDhM3W7qufnWhVAacVi4aA3toXyb4NZQnbg6cz4mmAHwWcEBLZnZ7kvT68wp91",
  "key34": "4dcnUZdftyTFtTaaMLsJGo7pwGsBnVnkm7pinS52nTiu6tqrZhwpWijnENnY8kyUeQw6fbH31XMcsKx2BdCKgBeG",
  "key35": "3JkTBcQUhZVEvBM23uhvtk7SiuzejCJCi4zLR3PQTBhZepSdftyiBzRUBULZwTJ1GrgUkYqomDmSD7iwCuokq6wx",
  "key36": "3nmn3G1me9xwAKJMFdfRrRhsLVhQeiJSwjJodz3wxqR8oF6DqTQqsVSQy97Hvjiz83Xmdaho5mWvSFDEC8CZ6R4f"
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
