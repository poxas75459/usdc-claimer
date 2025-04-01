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
    "2chdkfAVZ4PUSgyymYV4U2mKiFGnRh86NK2tTJQ1tQ6oPKSDjdr9kBqwKf96h7fjWiGyKoFrqwmu8dDPaNTeivHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lvt2M7HEDLq8q8GYX1ty9bDDQDBTx8r6CB91nxuMBmj8SXdr3gfzuTxCHLLpXeDgbonTGzEA1nqR2pQiJnBaBGC",
  "key1": "3qhgCopBwDbkie2fwFUqDJXZjUoi72qp3y64StZ3C7Z2Qehck9oGs1QsgMUFJqsJ8YPq74BgitNDiYkr916jBHW4",
  "key2": "5q6fR7KTvxGEqGepLZHKQikppCKFUkMcqPsfhyoJUBF7rVwG6DBqc16vR9dfXmrimcJZEFC91e1AmRKN2rGrhNPy",
  "key3": "5t3DjffFjU6dpthV75irg6yySvygUSN3UZP4Jdxap9GrTqtkTyrJX42imx5sKdiVWoZx1EBA6hMCNouLRhGuQGac",
  "key4": "6Vc4B2tsP4dcwJuREQrdjrkvN9sWio2nsunuU9ep5wfQMUuEboexXNyh54ukg9XXSJ3zkZcvWWbQzzskHhos6N5",
  "key5": "2CMVBLhpaZaxo91RthbtPGn5gA4Pv2TTejwtmoUVjFkrtnViVBgFsWkp7xzh7ECHR9KYheUUCEnYwxyqiMHsMkX4",
  "key6": "5xZiYXp23Vd6h5QrtgNqSSqw3MjrFK1gypRnQ4oHgHwhDHjDfbBpu7i3vzxk7dXZCwxKQ67m1CYR1hqHaxj9rnXT",
  "key7": "4dmYy9n5HRVxrkcKsj651gRCxnSCjzd9sCuVVnAkFZbass2TUo3xwQri5jjPA1i9QqfPaMXw5CPBW1hufG8XcDaN",
  "key8": "3RPuWANGxBV5R15R77VVqHN5nAjVg5mdvd7WxLp3Et54nkprJPjz2A5czFgxp2w5NKZkTtFBUsSguBqMzkFDU1PQ",
  "key9": "3GFjkyBYGqT1j5Pxc7LaMhgxWG4iRaxSAoDHqdJy8t4wtHtLmEFZ63CbFP3Jpxj2Hu3Mewk1M91VuDivt3LWVpPz",
  "key10": "5ydsKemHFadNkAdBLEUMXysM6PRz6PEnt3tmVMY4TcYHqRxqz7gQukwjfWpGZcLgNS8Kwqje8bi9AVSAjgSLWjhm",
  "key11": "BdNaAMJTy8YsN45iRQEc1DbwrCseZoBneF1zvKaUHbveugaBntePQWPGwBxvztvfdLQHAbg8LK7Ah4F1SxqyCpb",
  "key12": "21xuxdVxPm9KDPQDv2EmNr7hJoHqARw4MsWa9xRrHqVmRBK9SRXMvYqde7pRaJwXPwLpPp2VaiUX8E9VUEZ8B38q",
  "key13": "3pT313oZdo8T5nHTVMPsPczWqkYTvo1ck7qMH7Cus8kp4Y39hDfmPPSjKZ7taacQ9ZdxAtffdRMe371aGnduBwVX",
  "key14": "2YWY5cgMnkL5KAhcscxJQQiQtD2FEjDCNkD2GFbphsx89FVqDVNzj5rvzk3z1e6h3uLoeQBChARzCnVF2kWVpmEa",
  "key15": "2chzwtg3etjZ1C2JyeB8xaDE6WEymjgxdbUHjRcRHoiDioj5sReGK6skYcPUYSmeeKhcKSBsSHuFAFKqruAkx5bN",
  "key16": "1Cwj4CRdWvh51Vqf1yrVb66ojPqmqaJescwGcrbQFJyzsm8LRJkN2ujBeu26nWa9BFxnPMeVbSZmLkYPzxJjr41",
  "key17": "4bgL85f4Rj5WkmKXwmFyKPNPkMFDLz7qzvpdBJfPiFQjSZQa2DiBvF19ghFq949N1GTsLkxobHxQEFph1y5Mb2cC",
  "key18": "5pia7dXej7wJghuWeH5NmgGhcMoJrvKjdDTAFRUCmPNb1MJuN95cRKzuZXSTpVzBvKLfS26g7JzeVCRJnh1PDii8",
  "key19": "5zRTqjnaudYgTGcMrT58HFrksR26fww3Dc7VfNdChuVVrph1EPrJcctSeDxxBd6TmU5FC8Xi4PnjgeymGYAaeqpE",
  "key20": "4Fyg6JVoJLgaSaaA7cb4ygz2Y7XJeMWCp9QRQYvH3AzTzcicAGpFQQe1TPemaiEXQww7Dz78eb2PaEQSwzPybWvG",
  "key21": "5DnqQQ3jbSr25PJj42jBYuFZ462LdZ35qKVcMq31fK9kYeL1M5tSDyfXhc3WVwnkABKwcuMocw3CUghCKTtwvP6o",
  "key22": "5Snss9XuET2JjFLSQbR8ChjBtER87FafJUPwcQZPjgbB3jPdoQGz65hLFo6P1nPd1FRer7V6AxC7VJCmSYAfNnpB",
  "key23": "KiFNm3FAjzQ5B9bm5vMvD7RNRei6U6T9MXaZ4kJuuX9VQ7tsPL9bin9GXRgCjFhuxe32JQgzfwzr4ShxmM8Hzon",
  "key24": "5Vf1SoizNCKKBHMrdsLC9Cja5XzxLHCvMr4DHfLVYi1eJx8FxsWxc6YDQjDmW1GCi4sDceZiMb69L3kx2e5FVr5R",
  "key25": "5FNcefMVzu26pCRWFaqKSTc5kVLMnp1Au2nnarUApjqqv2t3romKshaKbPZCKr6NnsvNUt1dX7E45DNK8HeB4ApT",
  "key26": "58vBU62VemweiK2jJTiGVN7vdQYjWB9p9CbzHyM3pYFeWLLMUewMBxiP66PRy22MPtyyaRGTixVMf1C7exBy5rGm",
  "key27": "36UzuDUnBPZzQv3FyjzV1QScpus8idY2vQYEsn2RGiirA8Q6KXfz1ZifPpGzo9sR5b6FayfeEJX46HzsiE98nWE1",
  "key28": "2UueruYWy2PL4MEerTmeyXtoBZiAuTkctBYUxGigptzArN6eJbHX36ScjabARQP199FuUR4FS2oLC8oqJB2q624g",
  "key29": "3Go81vYg3gVmDvAUotycTirFLj7zrzRnpq56FgP9L35fGNunEbYAREgiRW1ZHSqaUKzBPs4oUx29fQcCYYYxFv8m",
  "key30": "58vfWH33fNY89xuXg4YyWvXLNKvJM2fK32Gdf6cazerpU1yCBqpA1xJqm4s4WRVTfGuHuK5mSTVaZQSeRbG8sjVv",
  "key31": "3MJrsdLDFun7ziZJVLHNcpvfrxb2tdtrrziC6WsBsggpeHZVmnKWoWuUPLsgLyVnLq9H1EzFhujnskbfAbADyrdC",
  "key32": "2PmyLFx34CY7m7zmS4tzJ2fDfGQQtMNFLcTsztmn99RppnyhBbFB3wygwe2rrckS2csq4kijZi9oL1UKjZjAyf5B",
  "key33": "2w7FiZerniYJWKJrBSm6LShwPokhYypJCUXr8XksvDF2tPyW63128qhsSEMnSqEhTHDjNPYWpDQKrYLPTUmaUFPT",
  "key34": "4Rvs4ubcpVxy9kYYZ45eeLYBwbizEVpncbVDd3YTiyD6GR679NzAmA3duYH7R3KX7SXsWQZeYa3UK8Gh8Fbi845P",
  "key35": "36cCV4fY9FTe5548DSaVuT8KeutQbW2yX3SKfUNyN2jPsCH555LU654TFxm2Jxz4svnsPDKgkTZ4tnHim2aJUNkn",
  "key36": "pF8o3esBPLBiaViXzMuw999uJwyZhJorTT5oerG4w3fCUUBKBLK6SjL2Ld6Z1SiyCq1N31inrerQMGv7y3Baj43",
  "key37": "4VCeuacdTgRQwvh3bXLqXY4dbSB3K96VAaF5ND7AtWYvGhee9xrVzAUnBtFxuKbU2GKyt5WSkTWQ3cR4vQEVEYoV",
  "key38": "3cG5nUw6V7ZwYc3FzkBvdXRoio1YizjUz8ir1zfN3SjnoFkg4fTFc8jp3HFd7mRqvrjtPRXSS5XpUaAa2491Q1HJ",
  "key39": "53SCAQ2L8zpeGr8H9nxzSyz9zU1sw3dS2qYvT6FS8jMxesbGDEF4dtknn31GTbuyNxfHpovfvRWRWGJ5GR2LfeAV",
  "key40": "4iFCx2VV6chbSBEqKBh4qcVwdz6iqLWwB5dQLP4ckPmdnyhcauefh1uNYGwi1xz9fzuMF3XXuDJ6x7RxsuCsWvyd",
  "key41": "3CM7LMMHUeu6ymouDjMYYYiAxJL6xiLCbJPZQh6gWHzhym4T7noGHwxHacWJ83jDZkYSpwHemcRRKjLDgKBr2wSd",
  "key42": "4s6uSpRqPYqw5JoK2JQGDQNCuRbLYKD553f7nB1x13AtNCoetH91MM9nXi5fNVFnBt94Jmbs81SGk7xaL4k7CDTt",
  "key43": "2YthWDxZG65pmeTAqZ3XTtk1KWLpTS2tsTSzXQHJyoTGVX69xPzGPtGvKNgg9YqGPS5vtz9Lh2ksFUhCyg8KMqqD"
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
