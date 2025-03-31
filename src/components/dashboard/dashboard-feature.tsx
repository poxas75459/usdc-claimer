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
    "5SXoY5UDFq5iX4hJE1hgSHhnpS7m1ffuMpVMuKX2mGuqRmyn8GyQbFeKMkTF8qUTP8rSdRvoLDQETWxtgjgZbF6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KLr8yd2P9tfUZ9q767TST4x9ySde3XaRTpFNRcqCUC3AKbBP3d5exTFGrxF3XhHVsDKtyrZGXgYLgF11c4rm3pv",
  "key1": "3uEwqFbWbgGDig88mV4kCAirH1JhEa2Wm3wruYjMRitjTRKYuDbv9SD5udsccToLk6GT1M6TuAM7HBk4MXPmZR3R",
  "key2": "nDS6yScZ3jyCvC84RNhAVYcWfEWZj97nz8YsXRkZo692srgvPjy2bPKVprjV5TEwNU4bKVoXch7ig9FJGSfYiFx",
  "key3": "3eoRc3DHfagKWDPdAjb45UNKaJCKx6rdF8nK4ippjQnbLBWsMAPuRJrCUApnUAR8T2NN83twemh9NLjMdfsKYwtP",
  "key4": "yR8nQHGU8yk4LrhahPSXvWEeE6iiByuLUchAND5hHpSdXXBgwdpdbKE7CChNjpe3PzfCxLwMmMu7ZSqN3573nkg",
  "key5": "2LjbEZ8espZ2V9SqEKt1VGj7VKH4Sprq6BA9USW3Cpa1eZuBf97Quz1YMPbEXETfwJxJbyMi3tWExxxHficCCLL4",
  "key6": "24GhH5RKjoUTFq68iimaYJwxadUrF1bai981DGZ6VmAY32AipE3k82V7CqacqvYhXDrvjcc5kEqbhHXLwqJjMcy8",
  "key7": "feyvcKwctNTxeKxhDCXG2PveRr7LV1s7Z556XAbnsAHHrsG3iQqytntq9EaaJQPPYefX8f2nxo23F6wT4ZAmZo1",
  "key8": "AKxUUnYCnQTiyYaModKB4SCt3C5bH2vJvcnvogboGSz2GfHjxrS1Rf2nL27p5wqQGVYSASCczeqLFSic4KKeR8h",
  "key9": "3d3qPjk2FPCGr2Y6ByK14ZgQsUVRVuDfz11xk1der7VsraTFywChEkeXUFPYwDzJgpWD27bQaRg43NNhyXBPKQEg",
  "key10": "5EvFveit71Mwic2xoz2moevxngkVG1f42J7N41U8QTH8aZYfK3DxwMuq9r5M9bQJyxkRNTmFet6UiRoecmYPyfuX",
  "key11": "m4ZCovUoZUKa5Ex3bf85je3RxGfXU1eC5xdfgGx3yVmm65szTifSULyZchZc2EZFuqxUafCKTz4KSGecHrPre3e",
  "key12": "7znagAXyxpMGCrHMMN78wz1KXWn6qNrMUVdKLuBAaAr97f3UAxCPbeqkQYupjH32ZnHGkPPYzXZt9E1e2RnyJec",
  "key13": "59PDED7q7GPThSyWC3XQMaBCykdHikRduLwTwSrqrTdT9rnphnFydnmveUduuhHwNu98ntPyX5o9e2fkKRhwco7o",
  "key14": "tWhCQ1KL3VQm9BFUXXQFzwqjYU6TE3Bu3EyeVbPMBC7gRUZESHHd8fAcBLTgYm6cRBgvx38VPXo1ZuGrSgTVVvL",
  "key15": "Ye6Xkwj9ZhU2e5nh7QCwr46ZxtxDfRPFFdrb5RYMJBD6xPo6wvucUVHgpVkrTwneRms6SxSpTppCz9kY6GjpR4a",
  "key16": "T2bjCgSgW1QQBXM2ZHh5nwBrchvBALkgxhfDichE4JvEavQNrTidYEDykkwjCo7q9nRGW15gHtKSgPPDnx5Vr44",
  "key17": "5evH8P6n3XUCdvxUzKDnwm1DVvMNi8FCsnVMVQzLXCRLKpxLUa2ZtSedsXzQZBv3ZSfg7C8HpRP72hfshXmD5XJ4",
  "key18": "2SbVQTWT1xHQoKVEFoZmQQULgytE23d4tFSC581M9hWFT3NboDXS1zrGFZtHSurKmBQMg7MfWermVMZRmRAXX3K1",
  "key19": "5KeDXqpuF2NFNVd187QUA81coAHvUrYLdc7bVSMct8fgfneLUnPKw4rMR5do6hNbHFqnZMCVP8EpSq34pcDhPPEe",
  "key20": "4buK5AbctL3G4Z8LrKzAM6PpeQUyZhgG8G7NpnUQcJ6qqtU14oUSXGXzq4hfdbe1Ppc2s71tE1NwiQ7kRLMiw4Z2",
  "key21": "tk4SRu7uxEqzUHvgqJ6pGGwtaGzGXsENDsj3HdyG6reamWtWLfFya2tHL88Cf97SxQxx6eTyxy38rqaUhB8i3Di",
  "key22": "wHKe1wFUZot4bTwJuE7ophP5jPS5BgkmLKv8V3R3LyFh5kxws5LZkLfrSHG2jQtgMzfcQFAY5obzAvqhuERuvnW",
  "key23": "3qSBpVpAuHiqGi4k9MZFnXEGeE9Z4j1DrJNHRJHVaNaDTHVEke4u9DFERxgoBb6cvraxHy3PH2345EaPLuF2csUd",
  "key24": "3vuWg8qUiWmyQ98ABwZkdD2ieGGKbYbYrJShz8ptzxMxZqPZLJzTWBvKnh8rP88dvhRBaJ4cmYznD7cD1NJzpnYK",
  "key25": "n7myfJFqgfxLHyb2mktZxfE4962U6HmX2VESWogr3aSXfU1TZ1o7STkS1sEBYuYaFYT477y7U14wvSPaJavoaSs",
  "key26": "3KSdk61RZgQCam7KgNh3VBZbsJHZGrsw3EGMSZ4MK7uqhuumFYUP1GLAaZ4Pj3xN4Z44pb59DqUzZuT1kgcS2QZN",
  "key27": "fUCH63mymKoCs2Sr6obWAvS3Ffns2PoShcjv63HGLJ1wGy9RNYEZLTAdcHKzEriBpgUG2qEJYNe33YTqxiS43tj",
  "key28": "pCmzBsiUnKLbdzS7xWxNowrfgHDjPGuLDnHnd9e6z3ReYpwr4kzd7821YNbUwZ5KQsUgLTTrPXqa4h5TKymP71u",
  "key29": "5zLMzxG85XeMRBNNoHcGUh8hHPbXqu67P4tmfSCpe6Ndr96eZn81yE9VUQUmdS25dssThvFJaiZhbb1gBixuPfta",
  "key30": "4mTkXeAJ8rm3DLuYVuiNkLrpQzEDApB4zCuDEL2qZfnxpx1xt3bhH4WeWqh63uXxAdA8thXN9WaeXcJddzbpE2i8",
  "key31": "2gaw7qKT3z61C5MipNxBdz62PCPGTE57AwV6frqXH9Dzf17qoL1rQLvtPFaEZDsUin7QrySidmm9NotfBhknMQUW",
  "key32": "sLTFXmxAesQLpyeG55UStbXe8q7H5AvwCTReBzDuTxRiVYNxnwZmQ3t6jbyUdNHZaZSGKvSyz9EgvwdeZkC3b3u",
  "key33": "6L7FToqWqJVXySriWKAQqkAEt4bXW4XzbxaWaz5xepqeh3WyroHqx3nL5HTakz9JLwkN5oNQY4r3XsFeU4stwCj",
  "key34": "tKYfHwR5z9AGux1iHDyxycMZvjZrXJtyewoTzuyRw8NXp4CdW66pZnkmFNqozX4YSqCG59VkJKvGD61XLYTEBxJ",
  "key35": "mVWA4RGjPsASLoC5hYwdgSPrFRAbfRbNhRgxZawCLvao6RY8kje4Q5UGpKBxfD26iTkUsQSfJPCxThwFyi3v5PN",
  "key36": "BxFPgpJGvWrbJZsRBFRdTxrkktvRwYADHDJVkD6qbbS1Abm2idbKoggixvw84KkuV5RAcYhsKVeC33GrtstcdPg",
  "key37": "EXJugPQyfrwSXvXh9SE9bsNmK8CYw8LBzLUxRNdyUbGyTD3K6zgi8uyw47qZPknvpZaHPhHKeMjxJTaCXzxk65b",
  "key38": "3d5XfRMnrUmMNsDoWbS39u9a7eJFDn3E56Jt7iChz3BRKxggwhAo87HR1yvKB2LaZyz2qqakGraUKSBrk9yt5jMh",
  "key39": "5rF5oVa5DnMfZ5FR7xNQjFpqBx6xmuBcNeUsXetqUVEnKUWuzbaCkhKUG3VghetqMGZJRBh1R5zonHhhWhCwx2bR",
  "key40": "23co9b59HdzUqBy1tqPqXhuJoizax2M1gz6hhEbnftkVTwQLt15HJqEcRnL1dyVh3UKD5hRzoe2zWnfTKBxB54Zz"
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
