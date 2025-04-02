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
    "5QkwPGSsz6szbv5GCmN2jA5p7wx8wHyqRTR6wkDeLmEm4sLoWFpUG2AB6WHkUHi7uSdheXuKt8HxnDeaSMcT1P2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCJzC6teANo1pE6ymVX15K2Wq1NFK7jT3mGU1jNmesYBZNm422cys85Be6N881FBKMunh3AzobRoHpLnRykuUPP",
  "key1": "3q2cVXMeM7NdDdmDZz2cwokQ8W5UVn9ySrFFD1Sdyk2WSqHq3GhwMcLmwcARTMkakTuRZKuygmnxV3WhMgSUas9k",
  "key2": "5ZbXSXUr43scAUXLQa3tDoRPTxkEF4W1ojoZDiW987UkDqqSykTjS1SRnq5avoDzwMVFuKyYZVvrxnCYSrbVY3pT",
  "key3": "2dzWPz5vpH6oVtSu9DLYLqL96q527ZoGQCk5273FF3wrURePMTSaFCEWQmPYLGFicc1bxLzxPDJuJoP14PATjSce",
  "key4": "67G4Q1DwCQMNAifYqt9M5N5Y3mkVNR8LFrMZdQv6JTb1ZqwGw7qb8tqC9Tq3MvF3YYmFGRsjSR6yat5fGT813dDm",
  "key5": "p68e3rKqwGxPxr69JfDKRintazk7TpdZs1S2b4dw3hWWTgt5TWNqdnUBW33bQaerFQimh9pb4xVLoq25ikeHEXf",
  "key6": "4kTrZEeg77nxE6WRTE68iU2kMUz877XBqjLcn6Q6hXbB3Twoai2RC7bs9HbCGFiWXnhDqT9fxc2NMb6T87u5BPHV",
  "key7": "5k8keNqXV81bBcB8BxAnYqsQ3e1dGssa1t6TywEK8jDVjH4MQNhTSgi8jFPzkYidDskDEqWWyUgZRtwCLnpiZUQx",
  "key8": "32uiZ6Ze5TagUtKoqWkSHcac5Dbm6YZ2SLDfQfWCxThnADMR6xxyaoNQ7f5PFbxKWAQTRvHub77cMxhKcucNJcs5",
  "key9": "2JUMWP3Qdg8FbimFB3qokocBP6z4WQEUZ61XVc88sk7Szuf81JsddoxfSQQTk3D2Tw9ng2qHZFtwHBcoGbbRHsMF",
  "key10": "Z65Pi8YE2Y7htPDkXbN1i8dY7LCzrUyPsxRPaQqacqFncu42uCHNhJZyk6CU61XjBmmANAD6Pg8enMKuDP7SAAh",
  "key11": "4jeEv5fUZG4s8zW7eKhcu8QM7rf9pSMZPDArPcbjBdb3BaV9RQaMPzx6LLArNtPBxTRgp1GRrUAzcufXAVgtASXG",
  "key12": "36rUxHWLK9nEAKkBVkxSYpMJoFN8HjtSm2rMqEFmjQn4aS9ueScssUdqnCdf1LJsdX6AhjfPk1vyACbTe4qR8XcB",
  "key13": "3j2ZSeNz5TUDRD21oD8gTB9zmM7zGcAwRiBiucJoMA51XjDwf6CPGKxb3iDCbcQQUTzDDySDT5U4KsCuo8ka7KmR",
  "key14": "51XYx1Q1FYSzs6LeEyJo4iH2QxFSwLPPrXpeASatS1GHPtfHJvqzvH2auE4RN3XauqfKMV3YSy84oWjFxgKRPgrZ",
  "key15": "2kV6YbjETD4hweh3xTB469mgbE5916FPWXFQUJgacFwEaWNZy9TPi9Be5QstRnosSjinTSd8jggZGMFcSnotdGGs",
  "key16": "4XZo92Ty1wmedwD2p9ugbnWPZKVL28L6nLcK2qVnWEHgw7XQrChBBKvZTYskcYqiesim9eo6C5mas2F1BaEJFW8Z",
  "key17": "5Hye7yUamB7t9FBPu2poB8TN5knZGCMSymnMuVFoHDstyjBYTK33fkizKZa4Vv7NBdPdNX9GPFssQ5JkaWuo1eJH",
  "key18": "4pDDRM7mBrqLXWJcqc8sbx5hV7hS3DCQsjJJkH5nBHnuG6R3z66vx5VaDHMBVogw5tUsArf8DZB2rxAkLTufzWJZ",
  "key19": "4aktGCnzWcosvcR7CbvT9V8LpPV8mnsspDjYjzHqkqLQBR9dDe8ZAMADAvcpVgfYXSYqzjvM3UZ7QY6aMdzCfj4v",
  "key20": "5XocAZgp7fBQurkBXRAwLNNKAfqs6UL5TyhCYZ8tMcu486WXUi9YivjciYpF5aHAy99i4GheJPUQWpatFRbAtYNB",
  "key21": "5emyHCSWhRrq2Xz1t4bP2eaP4qdDsCWY9XPo5jfXFMp1d7RxVrj54yY1Ssk15xMWgXavEsTX63asygwdXA5kjvYA",
  "key22": "5E9ukmfRWZtepMXe35CDTNrib1p1gHNxEtEw4xm1yz2aFSsbiinxxJFAYE77ZkQhMok6YZDrGhGXKjrLcNKNmJuW",
  "key23": "3EebSina9ZJysikZf9dkcFWDfyQKpeX3pwkRrdzXmyRyecKReE5pMCTKVUf6Lhf7ivKt7sKdfAUh5A5Yh7AWp7A1",
  "key24": "ERrvid1tANMcBzCHE2oLQwtw2tgmKL5a9nMEfBHs5JDKLAnwJ1keRRbHPNaPFYrTsrXdbAqoPEPCk6Dy1gSzA7V",
  "key25": "3AwSA1ozZDNor1cccphkkzYF322gisbxtmQmYGewbpyRyoqCFw9F1DztEZG4rtaMCdo7DoYJxcE1NRp6M9sPXWTE",
  "key26": "4wmUc1R8Zyx4fA2f85CTPRMhrbv7GrRCHgkhEfehgUnomrgCHwua8NboDcan154y5rtcURNfF3Q2CchWd2HKxap6",
  "key27": "45njBbsv9GtHF3wWQd45ToKuHJgRPzxM81j6afCmKi7Z9LoiPAPALqJaZP9T1qp4fDozYqntc9YvKsgN4yJ6VqYF",
  "key28": "2GJSFihs5m4Dk1f5V9RAbFZhUH6yLA8pQwEXCHE1SjHrLbSNLW9aHFmqseih8HK6RPppbobL3ACgRHvvRHzVo6Bb",
  "key29": "4jMj8VWUnG98RVSgUH4L1V1VZGcfaxninKYFhtzCYrwepLFrQif1PxQefbpYMAmH6SGrn1AeVRhJviSiBWihuxop",
  "key30": "5mWTvgmjersuF1FAVDjuKm24qbwpiuVvg4jxrZShqw2kenSH6Y7wqiBPGPc8KYztfeeEzHHrJPujLEXEWmWkekUo",
  "key31": "2uEbkLcQiRaUuXvEnxZsxGduh9fipdMV1WCSrznRLgEz6HRsoK8stHivQktUjRst9oQPXmBXpvuQRWrErw9LDMFq",
  "key32": "3MULi2TcmBde8uVRq6yJNi5NxDWs3P5bds93S4ZSeWHvFjUbUzbTjtAsvGjinEb44wHDGFp4PdCHabVAjSi97KYr",
  "key33": "61Nht7PamWpZJfZUjo6MCrysdLDeMsHoBrPMwxUXvnRXpNB1VF3aC8ahCkHWEw8XqnpcEY9cMbwTNcjwZ3eFs5vB",
  "key34": "3992nTnjthsuFdbGzuFHNcWmXCgdHxLtPPKBA8h2e7cDpJ3MQkUcPiVGrq4zPUPLKUkD8gpjQo9MoGRkqX2ey8G8",
  "key35": "5jS9oHvMVwutdD3Lay8UwdqTB5VF6Je8qWENsXPF8uj43PDed8hP1Jx86PQ8kkKF3dASS1VjQvqiw4BwBsAPR3Rd",
  "key36": "48P7bvz5jCaETdpp5idMJ7KScMZBXZyc2JMrWyLadFmJhPVWcRjUTvjRhARVMHiA4mxsvTgsvcztjirRjyj3CyGX",
  "key37": "3YFubRBGN3TKCumXWG775VqjLsUsVXBZpr9USbKSZGUrJmX7MELLwZm1ZwXaB2S13CeNJG3wcMumU4iBemaCEukY",
  "key38": "2vn2sErZtGFYEYeTm8WWN1WpwA7sqZwjbbzcCEhYH4hyyadZbh4o6xciNuVozcrG2mGd1RuSM1NT7tbSvLuK6KHm",
  "key39": "5HN7SSua9dVNjmTgKuJeagdqgqjsoZkYpNVF7aBYVDcoDdiowE77XKUAuAJbxzZ3r3DzoJ48ggi9vWJQgmupW8Ye",
  "key40": "5HnCtKLFKdr7ECrr2wSzJy1WUEwjV5qTgRUyQeFYFuoHRcxpY3UedHYFm4Kis3JCJFAWnAuYjApEsMXPgHZ3fvB3",
  "key41": "2zcq6VDHvrnRYG5AZ7VUdWfWnqHDSfrYeykspHo7S8MWy4Cgg1QCbVqwLrUCX18e2n13VXaN2DHw2w1ooQr5FYHo",
  "key42": "Jxisj5j49skqifv53MxUC5APEg5G7Whsx4KNJonyuhrhBgbMgJt8apBkwMffqrNvZZ9p1BpH5VrWQDchwzrGraQ",
  "key43": "13eQpSL8yVNDJdA92hTF42sVAw7niFhkJkWebQtSCKUtzaojoJLBjvpFTncg8K6p2cjq6izoQzs11o68AcGViKB"
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
