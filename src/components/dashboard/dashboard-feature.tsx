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
    "4dTxJJQS2fMbTdHYvbL3phuzB55WDQqzAzdwVWkXimdHvjrP8emyvWwTurYHBTcp6A8f8c2vqTGWe1SNAdQguY69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iME3mxjZfVgpEbtJyZHk7B3j87yP2bg1yXgkRu2r3nY826YLBuYW1616EDDZPt1tLbHGKRdAAvtjoukHXB99eTF",
  "key1": "4L7GpfNYFBjhSk9mvX9Y7bEZnSMtuHXyG68P9w5yiFAsV6hwLhnvh1KouWNSuh88KNgqu9N1LxawF6Wz3t77cr7e",
  "key2": "5Vage96eiLsDuhSK5pL1CuHt2gffMRhYozD2vGkWW9iQNZhcpmjQoydsARaKRjYJBmDnNQ6HXAAPHEqycNAjJHBE",
  "key3": "3YFttLB8ZN86fKWQ5dhDRDKgTie9RJpvnrziY21KK7E27UQ7tcawRv71B6AP5AVf5f3Lvndy6bHtr1ckqn3WSftu",
  "key4": "2MAL7sL6w9S16zfCwrdFrdz5yutHHwVb3Kia3kARmAJ7qgzZGyjMtfXVZAkSpzBt8HQ5KQqUyCeUMuHWfEBvH8kH",
  "key5": "3uNMpEj16FqRtA1ZTbBN6ak9rVnF9yRf3CxKJ5uXuCQ43gzf7MREgNERA9xwEk6gJJfZp5QHAouPECjEzEeVCggJ",
  "key6": "YUwBdq3uEXNs7Bmoz4nvJjkeAHaFxbKkbh9uQ3Y9qJ6pyfxtJUxaZkQUso8cmRcvFjTJpKbudXSAGyF66nmeZSE",
  "key7": "3jgb8UcpQHfNwAudnAJYDZTKyWGG1eTzJEDg5DsDPuj9tVdcMNp9GiPia1nR6BYMiFN8FjkmKucyqZgar7jmmfPp",
  "key8": "4ujXg3RjkaeyGmkjjbAsYoGs1k6QPuUSA6iKd1jqxMA1kudmCv1khEgU2GJoerVpfiFPhCrB4tzMYk7ArXMctV5R",
  "key9": "5TuCMDtSSbEvnYGdTMwUtggN6o3QEgzvnut9QGVNvT76KKcSDQQkNih3xeUUVvKL1nz8vAfGVyUqTWW6MdciCY65",
  "key10": "rcpxFZN3hY8tPjiKGezqbBsZqUqHuvuYP3SpWvG4Trzc53YhvvsUtBhaDSmiaGHjZEen2CWWnu29wWs2oXX8gGh",
  "key11": "2iGnnKNHkZHNxtJTaqbQjEUj8hzj7TcPTLRUTUibA2xB3kw56zhxNrMveXj1d8SfYcJqNEAZPTR6c6RQS6jsw4XP",
  "key12": "2gHSeb8anggDwv1SKNaqUkAF8sReNeXSFYkPSJsQj23tro79o2QkVNE5MuYnp9rPisq6QzWDuwAARJMXcKQducnh",
  "key13": "5WEoEb4KyJ7wGd7RWbRooBWbAmW2az33obCsGvrv55noJbriNKc423DJVTz61g7VTGbg4TrV63VmwMi1kV39pdfQ",
  "key14": "32nGpRdU7nZ2z6k9YWyFAa9MAxzW134dkgXFFUFbW7SfAyQ2Bfi9z3pF7DDLovmAUcLVkDAsLR3zZzFXUtNDeqDx",
  "key15": "3BURRqwwbTU6xWXJydS5EugbbLqJreWSo3hHgHN3G446nGDk1tbQacmcfYKuoAM9rVfiptR3gVSvfNy6hRUYbgoM",
  "key16": "m2iKWU2SERcZtXbno8FdYk3WeTUiiZAD7NvMNarXFsfLxhKJrrRQ13e6TV6QZxxUNifMJB7X2FJyuUX4Pt9hk6F",
  "key17": "3TNAAJgXxbQSjM7gaEhz8Zk4XGYSVBdHj4w5wfG23JxQMbaAiw8cJCWk3gYi3Ud6qFMsrYAn3Y1SeNLuqbFTsyPZ",
  "key18": "MMcp8cAwYdxauGZ1BEm2k1fZcueNZonfghTxaQH4VDLcmTHx9uGea6xi9HMuCtyhoJyQ6HSYkhR4tUwfbvV4W9J",
  "key19": "2Rrbq5pcE2s1SCEisKiqbc4HgiuQWiF4icFDh3jM5y54aCDhfLGWm1rv2idCsCk6DtM31tJ5XpS4tDmNWDBNmjpH",
  "key20": "5r4vDegkXS7HNkXMT5dSU5QRT9aBBL1jtJ3r9h44pRbu1cgVsbCmroRrK2AGtsfDENY2i2wkP8KULmhYw5ZY7Qff",
  "key21": "hXvG88f5yX4N6fq2ciLkisGbAnsqAqJvCq9SAnx7wcKZYGXeaj2d6D1Yws2ygrTCPQy5d3xWTBcZ9mkMDeRWbEB",
  "key22": "YCnn3xgtiktVyjbAP6ysMajrtejKy5aH6vRYdisPufnzJH2i2fNwGbcoDX41YgDVpyQqPez85YJqhiKjdQb1rCZ",
  "key23": "2UvPp6T7pi5TncUAXtzgJGVb85NtwPXN6VgkjxYpydczC6owQzB3rJM6YNB1AdzAgFWqAisEnVsYTD6oNqpmDgMB",
  "key24": "XtiPhC2Z2TkwuSLHNvg3nptfBri4zRJUR7kDFhCba4KESJj8LmFAH8TqiaJb1SbU6CqrjBmY7BZrvifz9AMYve4",
  "key25": "3a82gXKJSw8QtZm1hnecSKHayAUdQYWgL57P6daNpNFYfhH5azqWhHQtm3Ne3iCQaiNPDVK2rxaBUVmVcKGxy8XC",
  "key26": "5VEF1HhbmnbVkk6X4xDgEd6e8i1zXsiadvP7RPY98SaV31fZB33DjArmARM4LWLaCxWnQftpy1MVbFmG7RdY1CXb",
  "key27": "3maaeGkr6gqMfzFjnTBXJN9cPRC99dSU73neSXdiaer2iaJC4xCM39UDptHJnr2Abo6FTi44WkdwuoE1Y1uTcbj6",
  "key28": "3xNLDRkgtMtTFV3E36jwK3cPPNYYYZfjbSqEpywWVGrVyCgoN4YgNraNcpZKxtzDsbnzVh42uPVaL8HJBerd29t",
  "key29": "4DNEtFjMZDzTgTq8VJREetrkfgDgd6Q2oZXugQVxnL666j4dm4E5txTtugeYf1dw7vzif2iMnn35b53V418eBct4",
  "key30": "5QwfEd8tCsGLP2xpWwZrc6cJ1M71SwssKLz9dJhXKrsxv8eATnJrJVu8kekFewT6TFBf9gGckxWpTF4NocBKuSAu",
  "key31": "5seapRri35JGEGh3dWrD2j7tBbJosSnmFXTJHwCR5GdMuG7RJ46HU2VW3wjsSmpwVwqvEJVDprySVRmdr6g6k5Ap",
  "key32": "46H1xSSb5t57hiT1yn1w2f67282yi58wXuQ2MXK9S8r6supGBrMfmMXYDMCamBc42mAeuLZ9NCCFBTo4he9qMyL5",
  "key33": "zqyjspYtvzERgGCMsPtuXKcvLpmcAEdRen3b1V5xMGvt3y3f49kZvEjq1FV73mvXNPED6DdryDwFTDF5p3TdMwe",
  "key34": "55hQnMLkXjxA3SPJBH1ubaqdAzrPieErosnUwpTuPBoWh3yRQbCPzmJH79ZtP8yMxvjEGkZV4tGmdTxUHtxjHJNE",
  "key35": "4QqbuKtj922cb436CkGwHaLBVvQMTKthhbCW22qwSrNajhYHjye1cvD9kR79pRV91YkZFXxWXcAoY8RShY4zmKG7",
  "key36": "5ncU71VSQqkw2zKQeD55jT8X1F79o4XtCVyHkX7cffUU2XZSK4eTtP5RW7vQtjwpwK6ssMX2rvbRDaWNucUEBMXN",
  "key37": "3zBeZMp5mJdMSMM9kMfvYVm4fsaRQiKGqaT2PNywf3H3WuD34jBxA2qXA9ynKGiAawMR6R4XAEXbZKxTWnW8YikV"
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
