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
    "4rrTszxfyiENbRo1CkQNMBK2vZAjZPwGenuxujsi6yqymBqxJDy3cqsYoReMPBxqXmdf5x7TtoLxEMaE5XJdhds8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B89VQrHGFncNQCugF2MeEAoeQuPCVnjNL8FPEiRTjoQw9t4wpAmzQ9iE26mArjsDbBK7FSPeXJWvK2wgSKy6Prz",
  "key1": "4ZmwCV6FLDxbMk15LqJwkZbDj71TtCg2KKVpWNQwqdA3bNRh523fHs3ZAxmzozmPFFHAkMduMNVA5jzUpE91Vvfn",
  "key2": "4NFE1HHjsH14bGDkWQQAYKVYwXStkh2nQ3op6ZBJf3v6D4CLHJ8sQr6F4dL8Tp8VKJi8r96S722n2mXvMXNNBvBy",
  "key3": "faDeoEiGJHyFwxGfa7CMpNH3ECr4fZQ5CiTKypjbGWqhJzRQh6JASxjd2AzZnsAqL5vg8S3E2pMQAehZ9yifVDv",
  "key4": "49ZBGs3uvQUTfgoaTfhefxrorjUhVA8vdZgXwofYGRHKEk61JwJsvWyhTsgraAdjUrcow7RBPtdy5owFCjbwF27t",
  "key5": "5TvsSVttgoS3ipDz88gm9opKfNgtN4NogY5QpfNcEczNmFrMkA8ecA1pYhViVsYX8PsGPPmJX4tJ1x2JAYVQP7Hb",
  "key6": "2yru2KsDjE4rAZL6Wj1fNPsruXJxQWEKYaxCF4eBt28xM7ujAAquzwLmUNXTudaHqrmGpPKyWnneGyx37z5fu2Uq",
  "key7": "9mPdrPL6Te8WvusjagUQDfV98eLz89xzg8ZRQb49fPyuFqQceJ4FeTzph2kKFqG4Yr6vc6bxFNVJyUsQjm99Ye1",
  "key8": "2aCfDRaWK9Wm4VU4yuU5NxohKZh63zk7NctkWD3R8MsNsUVq81mMNYHgWbbLvEhcj3ujxQGE9TyYuwNGf7QqUiAZ",
  "key9": "gxTjo1HBRDjpRy1tZdTkAFfH6Bm6fB8RhBKsAWmWM4VTYCUn1gff6iU6SyzmrRJpTuBFHHEbE7wLZs3mpDyvSYj",
  "key10": "2Sqb3L9oBroMGfs4fN3UeLPqj77oucefx5dSLHrmifqKTpUT3vK7R9kL7n3Z3jLM6YGUjZkXPYKUdCuQcExzBHPz",
  "key11": "3poZroxBgWTmcigeknxjqeXmzW5PALDEcWPpGMUkBJAurVyK9jGRGn6UHjhg27HDGS5KpSPDf9j4SGsoZPsHJgZh",
  "key12": "2ViD9y8ZFQFdxf1c5ZT7L9D1RaRGhiZh8w2TFnbU1RvLjkGaX8eocupGNr84QW6TYr4KEUkZWoyp6p3tDUfSkBqf",
  "key13": "5qKpAWMEi7ZJcxE2NCWdcsfxJjbcMygr39RnU2E3Xw6kVUDJJbVXBuPinbWJrqhk1VnDdUdAr8xoK1SYurLL61R3",
  "key14": "4VLKwniykmaJRE8ZGsB7AXgjemmesoA6jG6Dh3G93nd1b1hCPoMiGiKQxeuG5yLJSWLakeShSu3cRML3ZK7DXYRA",
  "key15": "2Dy6W1bBRepi6LFiQEL9V6WSgdGGHPzFjSBMtjT5Y3GC4mm8khkD4U4aENQHfsHx2kmgDxSSh3dPJ8ibPzHLPZkZ",
  "key16": "3dDtkNgxQHqm2fCp33ykuE6XZpiZ4nvSwCHaL6S8c9UFe1wEvDG6DEYphSHXMM3ts1LsBALBAvcBDc82P2dTVHdK",
  "key17": "66iKP4CiHmukwsUeJZk6teRZKMXNqiH9Te5wY6wjjbq7Up5K9DdJiPQjCjspk7VovLJXz23Xsp3tRnhn4SNZrA6r",
  "key18": "2552JcymmR5ze3j15iY7obj4W7nyP6Fs4RfqzSg7vYzwnot8ZZjFQczdSr4UkMDZyqpAmgHHzUCptgZvJ5uH6UdR",
  "key19": "319rb6d4Y9eiPYBQ8D22D65agN98Ls3omP5FTt4CqddPdfxN97YcqenrfAk1qwbP7djybc6PoYCobA4E4XNRApeT",
  "key20": "czyr5WeHmEPj9UjAs4QFWYBuw5cmSSRz78jtWa8Nag9XmycauSbdRAdxPsk79tCfAv8NuMbDqRfQswfQiPNMu25",
  "key21": "4F4jdZYQbpBQDFPFtjEGf58WRdYujx9hhNPLbgJwbLwfvs7153EdsALmFGHbxYUFzrZHeVU8M13Er8rKbgKEPMuK",
  "key22": "4EnqjVsQ6QTwFC2GaKULe5Xwzou6fPNcnDMuMcpwscqvmDPzQUrPk1685h1AJYuFtLRxXDYgjH3oT3kJLQwhi52D",
  "key23": "61TSfEw5oYRmVF61RM4RTXufN4YWNSGXp248pMaULrTfYzFSjQSFm34RsChSFj3jXrgS2tbQnBC6hU1GowSFsvJh",
  "key24": "4Y3H6K3LRU2rdXXpY7EEifTgRpV4bbUVgP1ZppCWih8AtBJmq2NiWLpsXe4HmuXEnp77JXG6Qwuav7uJKQRboqgQ",
  "key25": "2VVEu5HqMo11BfWvizMTxdcVjEymiXiEMW8fBuR3mMvM7rzkPfpDAqrkH4BAc27tJR24HsQBjbD3gYczhyqM45Xy",
  "key26": "5UTc7fEbmddg9vWHjhqbmGrUJjMawVzbcPYptFvxE8EcnMbtvydU2V4piBCDUqpWmVYwMjMu1rJLbDKPMGCRZwTk",
  "key27": "2RdgQUQcd9ZqRHn7KJ8E328EDZt42cufoiRJcYCUgy2G6KL3wotDiBnpmfnxaAnneuVFrV6EokAYi1sntsWWf4Ap",
  "key28": "2JrSyw7DFQbPyB5Rw4RwgsvH35W6ZSAWhWCyNyTttxKTbjSuBYAaS7TT768SueH4ESsHRx5FbYHUu87QxyDKamNu",
  "key29": "62X9LZ5A7pzuNL2wULvYugr3ucKF4jzdErid5Q7fn8ButBzqNNgAmU6Fyz5HwoZQ8VrANFckZkGRFAcEBvSEbVQh",
  "key30": "3Mo6dqJUfUTdZh6E1zP5BqZwdmrxQUqqrxYfNZqNLUMFteTXPqybBnBZHaiQSD9DnpJvLyQSpWVx5Saat6tD16VT",
  "key31": "261AZe9haQRSUhMUkgca9LfRQ7992mJpZ5ZT1D4vYBQsyFdunyisgt4Q8VJGRzjc8S9iaCohCu9Xzv8Y5QVureyR",
  "key32": "2Ct8bdYoEMJKep8dgX18YuEu5NZFEd7FwaHZB5x61mC2Gfta9oqU7SWiW7AVRBXCNpMFoA8DfT2dfNUhgkae71H",
  "key33": "3jticuh82EGWCUpeY441cZcTV78cmiDQ451qNeEM6wvHg1jzWG9uLdPz8aXw6QiP8PpS6mMaqxwcut2QFmEBK3cj",
  "key34": "SYWzzjhZCoWxVaFKPhECaiWth7Gg5VsjVh2c1sXxsuKrYnG7UzEpJriagxBCZxeqEinp7CYX1Sotz28o7HVViXj",
  "key35": "E8KaLpPUQAzxHifVLpyhdjbhBGfLxWjhuQeAs1VukHqD9FmvwbQ1gmXkijW4FD5aaKxCCN6DprCabGJjERC8nCx",
  "key36": "3uuAw3oiryLt2XCFhnMDs1SAHF19JSbmoWyKPmmsd4Lb68dpS98yGxBmcoVFK1PCeBVfDGeqeKZj4zAfWAVspnxP",
  "key37": "37kmrTth3DZZfC4WGwW36PggDWbTnaARyr9xR7QfGDmv7y52wTtkwLvzSGj882cpSt7z8WFvrA4rmYfYVAofLKca",
  "key38": "2R2dZkx7Kn7wzsXHp86T8eSrx1ooDTGHP2yCf2FJN52Hy5WRPVQvTb3qzG48aVtFvvPqxpdLhkg53AUNfKrfFhZw",
  "key39": "2f3624G34XfBbr5eMtff7FEMfhJJA9kEtnUDYmCeMKSyLYBKpyEgrsmECsbA69JM8V5oDpz4gsg7x97sx4MgZ15z",
  "key40": "3aFyr9Sg2ZTmvrKHmnYzPqcWhCsB6njhavxFn5Hvkrn3PQyPZVBYg6ate1gYmT4n4dbMouRUZFybszyhKgstmAzu",
  "key41": "4a1WzccbBy13w5NLrL4S7XHxHucQ6vTr8FPrKh4WWCc9Hx1T7sX6criv57kjbBghrkCFWQ152LCeeKpGcXPtBB2A"
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
