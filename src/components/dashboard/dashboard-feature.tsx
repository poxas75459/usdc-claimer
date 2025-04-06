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
    "5fdkQg2shbbgoVATYDsdNNifvrs4w3DGqRpRNHsVnvckj9fVKS9TzStu1NZTknCDTGkDFK7myKx86da8HwTCUDPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZeL98ehNMXgbMvi5d7gp5guLf6J5svn3n6oPaTiFGsgh3m8cHXx5DdshfBYCK82JUS6AjJe1NvTLgUFwGhaEjZ",
  "key1": "vV22L7ioGdpnv33wAxEwUETe8dsWTDPAYhpwPXXwWmNaQaGpFQpxrRY7dsucDRcP5R6WStRwwHf6NSPAJpPQfDB",
  "key2": "3gpXifY4uv2biMKHnPCVZ1LnUc7TjQxzYdC4iojJmFMd4sH6hZooDeg5u51MY5mr1MvoXoVFtC6e3pU791rJooCW",
  "key3": "642qZoUdqRWtAfWSRjDg8LMWKmZC3mGQCUVzjdKjHRKFuJxbLQbgSYxwjFz2GCxGsL74wJxLFxHrrBwPE3RZnaDm",
  "key4": "bZe8kp6JRcoGGbgPkd59N47zseYmF2LvYT4x8q8v5Uc9BRAQo1yyqt7dYwo4kgx5qNoqqqtgAnGnE4dKp4aktVg",
  "key5": "4oktmcAjTyXmdPkEGKw1ofhas3WmNPGqvDsp7sJ619qDMdoSrGCy46dkEUYVZfogghhGDDu8tzVfY7RKYri1pKKM",
  "key6": "3TptRqxaL7hW8v778HvVNXsTiVMvcydsHjJyxTA6DpgBuCAA2kHosWxwGyDSJiQXzEsFbZQPn4tgH1xjNFv1mV7K",
  "key7": "3M7RpukCpSEjPXPFuvo4xfP62znQRq6DAzMxWKgWTbK1MXUpJ9icbXtjXybAsdBNwFWP8gTbgJXXgaXFRbBSDB8o",
  "key8": "2HH7yfRRMDnfFUJjS8fWRHkueJPbcbWJznSHhCVDD14iK1RqNmkyc91AeRwCyLT8Lo3wAaTUi9VifmUFWjFZAZq9",
  "key9": "2YMmjKTSqY1xGGS5SawmVdRvF3aNAXD99nqdrhFBeXmKcEw2NMBoJPSBW6anRhLezW1MQtKcBEB67YVvDfRMEZaD",
  "key10": "2yJMdXebJcvQKi1pqmwDykdzy6Hbdoc7L8A635YUDmNAocvN421VjihpWWmzFnXPzhCuj9faxok53CBparvfwMjN",
  "key11": "3sSqedKCrS1wpyhb42mKC7zy3d1KNy97BPnVQuPKcTit5SFRAXXj28JTgVQ4frZAn4H6EKZDhwZ7vMkA8zcVAERA",
  "key12": "5byBNFBVLtLvT96Py1aAtzQoUw8jzomtHXacUFxN79yzPXLtSeq27u2nCNHmia1TMscz8maUJNwHUwZd9XP91xTU",
  "key13": "4kTvceE5zq2oNhhmiYuywDGCC4fjQimCcoht7nyiCgsGXstxWASX2pswWyaky82x8mM13jMBZro7HVAdJwF6Trgx",
  "key14": "5J8zJHd3prUZzJ5QUSqA6AKXrSWHmiE6ohSrDiHXZFqeMTtnDi5fPJ8b3oMeMjFKNQxATrPBVoKq47w9WazALL3X",
  "key15": "4Jj11auK8pLfrd5RB9PESvncCXz8NXge1DNSJ5dGL9Qai8mf93p66aKDtQAqHzco8mJimaoefSWr2CB6Gb5GT8Ac",
  "key16": "4WbUTjsGcguwMVKeXSYPyAzH6NPKWf5EJgyXo6bPTCGJYW6jKxwUatgZvuAggALQt48V2g5wjP7VeP1R4hs32g7a",
  "key17": "21sj26TVoEDVm4D2SEskdYuvzHLpDmFByEoAKrmNiqG8Rpo5KPruVgJsp1yhEt9WAs9EBzfwiyS8pQsSMntYAYc1",
  "key18": "3qArjxGJeuhEXcF6VcTxjSiHLKThk3LsPBtgiZx91y7NPV8xChEkQW3vww26Ad7chUP6gC8cCUN7xCGPTzhnkmwS",
  "key19": "3JvwTH4zz1JB8K7Rf8HPZErstmeP2Mk7ZzL43cDwXETUV9Lk5PGLcVxesxyPkiM4MFrZLCaPSvc3kjkuhLjcQpJy",
  "key20": "5KbRf7EisX8H1hfBp8psNmG3V1V4KNbtt5xrbuwcvKrauQFc4hSJPBADA5QdCCopFj7eLNf1VW9JybEwjzGDjwwx",
  "key21": "4aM6QsFFdaRwRgqZCpWoXNFTNhegkNBoN8TPFS83LtK9EykMRqrCi3BNuh5j9oayL7noUEMZevmvmG8UVyjmLrNN",
  "key22": "3VjoNpD8nkqyDK7v7Xz3EuvaaU4u7382B8U98gWRiWkpiWfyypnxJAYMSP5h3RRaoKW14c8eeXJz6BLrcBfh52a2",
  "key23": "3i9bGvCRFyTjhR63m6jEktPN42cQ4gpBU5G3MRRDrZ9nU4iFeTCbBkoX7ztb9TeyQtkkTKcZkwiZqKo3ZpHWCWPS",
  "key24": "4hC6tkBKQ3rq6aKdd1AhsEtxXQN4JxVmL1DiUKTDqMFus55jK9fKewESiWkkWuvDqtDMrFVyM6A4cjtgN4cPLPwU",
  "key25": "dr39aNSoMZRbp9Y4UNruLqw6utsf9tcWGCuF5Qe3k1J6RUicSQJQF9YDedphZUCu8NEEgfdDaRwBbJCW9QP1cZQ",
  "key26": "463gmEJaD9XKBjxpf9TemV3t9RgAkL73XhJCdeZRDzwv7K6smxhP4jFW5D6H24L11RNt2HDTtSJQi8iroNRZr1pf",
  "key27": "4uzUfUq41Tkep9S4ehpFA5dqBEw29V95rcjmjgaF9uiKtqY6dFadvwXoSzriddB3V63U6VKfByUeT5peRC92zyZs",
  "key28": "5Yen93VB3TuV48D7sz2mW28owQnzReVsVw13HYNbAuMiMroyNxbPUybWWZ1rNSbuYBqx5ihnQFFrXVheVuUYksbi",
  "key29": "2vDvm2aFz4gunFMcqSYUn5X92YW1md6n7RyrWwZtJqpesjFmm4y4xcWgL9zYXXZmeZEe4npiVQf6tfCoGg4dr9Lb",
  "key30": "28ej21QyEUfrvnDRxGWzE8E6tDw32pnA9HkneVPh3bxoAcBNABs7BPEpFR21JdFu3eXQnv98o8bQjhagfMUFbAMd",
  "key31": "4D48PNThMHVdn1RNR2tZWkWiyHVaVhdbZrs4Xht9b3hd4wniHhwXLtTKjGzc2jkJQ97LoCcUiFQhVsLqEH7JYbxX",
  "key32": "2z4nssHg4LRct4uUDAWCuZ3GMo4q5rMCRBDgCtRfzte45RFHCQi61msUtTwtxFJ65ETPgoWAXpLmHCcBe8ChLH6L",
  "key33": "dRoz1tosGr1NtP4jAvyXd97i4KYXxmr2G3UJHKB3d4zvzjjJpUwEeEgYnCVqhWm5iSuzz4QFttLggYNNBozHRn4",
  "key34": "5MfXifwHXiEYzVV3Hhrfqsr8wT7XqC3SBmGMwAZpVqDjnk14JdgNEwDTwfSKArRUBxvWcjVDx6v2yRroDiLb6FxT",
  "key35": "2d9bXmzHn6L9KsZNaLxNusv9XsmCdz4PjoDEvqMqRHMEcNjbxNxk3CTsDGmiarfbPFsL8cBkYmtw1W4oZaX4rr89",
  "key36": "5UbVVJHeVQB7t2xqaiKDVt1W3PzCAv4mtuRQzTpQy668ZWTyghxDeNhe1CsfsCFA9KWm8dcS4MP59NNvoJcoRvBV"
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
