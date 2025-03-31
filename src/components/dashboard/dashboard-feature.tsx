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
    "4E3QgMHMKbt9XJcEjFmdxLxhf6B6v57GDpuqi5rbYDNvCH7m1YsowF9arzaZH3Wm36Seg6rrRm4ghbkMz9QKfQ4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMz91WZHUzL6RUYCkLWPSAGo4xu4vSrQv3RYbEf6ZXCSYgyGHNnz8L1m4JN6muDTtzEShjavoTm9LwYiTBE1aXE",
  "key1": "bh9uQsP7jm4AwCszZpt13EurqgV84DCyMoyWaPjdTi2T4UqeYngv2biXTiXnKuKsmnc8T19qRZwz2EFj8HchDfj",
  "key2": "3fprR124ZAg7L6DJzhLAUjajf3oFWjiHFxvjZn6zx4g1gD2Y9np5VnM2LFx9sGyv8DPHuyZacPnhPuy5Ncu65HNF",
  "key3": "5SciWcc4af417JqmJTJtZcLLzCuTWJgP4mH7HxYgKY215udJG15QQ4ii6qzayHLq6TAxrNsPdZ8YwHtaBXCkb4Rp",
  "key4": "2RfMuMRLqpBBvboqnSq2XrRffdkVfmDriCmKa9GkHRuu9nfhxN64jQMjkXGy4p5AvadbAo8SW8cHpnsKoyncyxxr",
  "key5": "46Y7MCcaLodPbCeKvDwTaMomnScCEPZQh4MY7RPBE1wuRFnokh7wGeVgXuAfHDVy9NtC3dLCnG7p9uWuNvQWV7sx",
  "key6": "211J5wNt3MYJ7jNVDgAhLBzQmUcrHZZUJ5PN24sHDTzvTanyfiNBi6HzME1PdgDdy9zCpDhyzSoxdpX6bWptsBm8",
  "key7": "2jddPNeh6yajNtm5mDtczUVgF8bQ91LVA5nQb6MieRkjgQss2xM58T1f5CPkrkR3ETY4K8QYU71QwVrMCQ48oBj7",
  "key8": "3zsPPLVi4zD5yVMFHboqu5hQ1AiKuUyA1LQCRrofhQ2RSj4UDBH3oAvxsxzsSHgbrGjgbQUnr98G29zLg8vWy6tV",
  "key9": "xzMY878STyuAHPnh5tHGg6gPj8Bf7EJqBPCneVrAAdnwk8pfLQGwQGHsWRSghbYHgNqWcqsA2EkFFzLKnh9ckXa",
  "key10": "3HmnfqAXDo7YD7TGWg3XnxWyQiUDhLLV7z18C64PqXzFUK7QKW9uaCCVQhnPfHaCCZwJFtYUbL89PpAsUv7BWvwa",
  "key11": "2XJjqyS1n7QpKit4saWrEjFvFbHRGdh49v4hAuuTbM29jrNuChfTFLVwJUy5UHUfpVdTvVvRUpduCihnbXMrvxHT",
  "key12": "G597uen1R1JU4a8o5sVNqvW65vZZVYo19vUeeVpr5MtjLdB5RrbPss8pTFxoVvCWetuW8Z8AVofkFjpthGpBeK4",
  "key13": "5s9SCnAdtatD9Ybnhj6ucnHg8CnN9Duygw6SQKTRHxN71zuqeQGHRKtysPwiEb1C8v88iHM8MKs3hYtACdpQNzX4",
  "key14": "3vbE4DzyyyCq5F3436QCYhYDfdjzthYV6qpUTbwV4uKB6oYv8vkgznZfG2vyxGp6uhLUv1fwDazHuMN7Z52rwNne",
  "key15": "5JHKYW5cHYSpE4KiCqAPXmNJmNanHjkpRfoSAMWEHhWWJVzKBNZzwps9gMjDMyQ8X9QZfR36pYZwYprr6crNMBKJ",
  "key16": "41Y8w9N3zT5R3zzvzLkwN2ht9XPVyFhzCBToA49ZcWWDrUXaegatMiynYKw7XeDg7QYWAEcHo9wW6UVR6H9TS6Po",
  "key17": "Si6FYHsuQFyf1dim7LThhVax4XeiSWtUMCbXHPR8DdZLWt2tBpJGKojaVtAL5CoQ3rA8BC5M1X2ME2NWZTwH7YA",
  "key18": "5TRGX2pZ8oJJ9QXY41UBmQvKT9pupVMR2tMR9Yso4nmUwwQoqtMQEGiwXtwMWZXURjnf5u7J51re432b9TrARUir",
  "key19": "22zc5x7kYq39udYW2dBFoyL1fdSgZqm5KqucPMjpPYW8HKUjsgJKFNWm5CZCpEjiiwfgjfAHZuZaJbqfywPjVGJb",
  "key20": "2HBJfSQoosFvqRn1FfCWaqFJVrtH9JjqdUr7ktKFv78o6hePk5D3zVV4SxuRxu97gj1zPZEcbA7sJNYdcHY6ESw6",
  "key21": "5DhHj9TeoyMJuqL1iSeJWfzAPGSJFsZ5cuS2X5uSM4MhnsZEbBRvnn2f9G21vHjnoyhHnpXLKTwgDqUMen8957Wa",
  "key22": "2qcoaCjikENTZbC5V8LsnjvYjpLh9ykirTc9KKEJ7wAxws8udqQ9AHg8mFq5tDu58EQ6SNUkB682DhsKykSrkZBK",
  "key23": "4xWf9yHDFeDC6RVsAaCPYASK7MJnZfVJP9S4sLykBb9JJrvS6HBWanrA9VBuF3FmWriKPGYSApi3uQ1QZrbEkJKf",
  "key24": "3ofsQPPobwVgNuKSTuJt71gQZxRjQzdhXkzVkndZioPLkhoVMFDxoarkzD247ENWNJPotxpSTYwAP2NLxmodzFpg",
  "key25": "2dBA7xMZBohRyuuw3aqZ3UrscQNQet3KsjavR3wVgpgBthQkbf4nnCV7478viDnLfvENbtJKXTm6caPf6dqvo7p8",
  "key26": "3fDdgc65CwgUKz6UV2hwDCiRpey6NmS5WHpC1vbMJEsevus5H3EK7on7p5N7AM8v1ULEYhA9yXpyXpusrna8inar",
  "key27": "28vznzHtCUsMoPNHHymEDutiSTJn2ecSWECv6eEN2EYddXH8gyQGYZ6Yx1eWYoZcz7k4nc7k8sxnSdAgCjwBbnXg",
  "key28": "5zLJ7xCppdUrmAZnD9BdunQr2HJ2QT6bn2ZqSQfwpLzsbYATMggyhSBRiqiXDpdRW8TP2zmvDZNap4pnCKkGh1T3",
  "key29": "56pXBrQGf1gXfoBA5w6iS3FoBE4q3Pjz7iSXFq1RC95DsFf6vuvjhNAyf3X7iktYrZTrwBhUo3SQNcfh2qUJ2K8s",
  "key30": "5Wyi5KKKPnXQXBLFXwhm2rnNn3F8qCWEXrGvCAtSNZ7trR4CPQ5YEcupSz1ML4pqW12L1k7uZ52jbTF1ab1u6tYi",
  "key31": "5FQa2fV3aPjGuG2YAxJN7yob9Uu1L9ctD4PxZpGQgCNVqwB2uZgKFA4YCRGK8MUctbNFFAnMUTivSX5F2Sz1C3sc",
  "key32": "3ysyfb3zUnjWpYLACAwodjzDpueqgHmphCe9xsDSFLN8u9iW9Lfxq2fh94H5rGGwaZj11jGHwLxYwV7zgvhpDZsN",
  "key33": "2af4CvPVCdoMXqMesj7MgewymWQorw1T9k53au2tymWZxdiMZfT3YbuGbBF3jE5JrP6pawzchCwVNFyZgs6SiGcf",
  "key34": "36J2MzfPXDjpHyfckEpRR756QoYRLTZfEzfEpmLXJdU7wAUo9md12auDQgAkYEjrjsSQTHNEkH8CaD2E8hRd3Cwq",
  "key35": "5C7LUvu78nLSBSu12kPi3L3Pe7uqkHavFDwF8oMkHPhPWLnVZw5LTaUeRgR37pz2DAWC6ebVFvY2dhi3snCdonFD",
  "key36": "3MSjbkzwNr1uUcW1MeMz8KVxtqQnqdDfEBgDqqGFWEoCo25gUgo8HPRxpQyPFN1XacaGNiUiTTgmqdpLdmjfMYj6",
  "key37": "4TKrKTYejXePwiFebCbZ7U6bDbGNoa9EfaQ7ewqPU3ZQyr37qwENW7wsrC9MYDz4g8fS3ANnMoKyFAXAQQWaQumr"
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
