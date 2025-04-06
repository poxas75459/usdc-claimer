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
    "24AWnzgYet731R12kcRYX9KeuZdV7ghuh5Mrc3XgkDd8WDQT4Yy2Bey8GeKDfkXDBgsvdFGtMarsLyvHov7DctKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HxeQc5yCN3aiju1odeX95bdWRtpepYx3eCMFZ2DFXTZ85pD8V7m4VGXyxCLazZnYG79wjSvLoGxqL2SW4Svr1NS",
  "key1": "559wZPNZ2trEBBLe9RDbsiz74ZnCLga9PHaN5EsGRwKcf57VXwoTZ9ZEGv8VXFLJNCyWmZrcaVQeXkwNancX4yXP",
  "key2": "5QmtpKWXcaLmAbhP3qCgq8vRHDZ9gBDkUDRcJ6a7RnGyfPwGP3X5mNCeenRNjK8T5fPWDJJFbHJ77xb6ZEeeTMwE",
  "key3": "3zFg8frZ48dR89QvDjae6e7UQAtHuuQYuP8FqYyjrWMtvaj7LMrLm34FXsVfJt3aiaeu9ARSGHRnFXjL1qUbLN7f",
  "key4": "JzaVYxcAjsk4imEjLJY938zpSB2pE5HFpj9vjZhJZc1Pgpv59fqoxuuWNrV8MruEbZt2nu2ytdW2raGmyiRdsfV",
  "key5": "dbxp24FHEGfvW8xstau2kYcMFrL6WFk8k1DPYcT3ooFktu6iV1w469cJV92V6AN9FDcssReRrZJ6wF8Kfzt1aop",
  "key6": "49v3ycoMKCyFimXpCrhuytuRh8CNYduQskofdfhHo44ZJqPmknzbRiDC1Ncu6mGrZ8hbAm6xUa7uV6vnpHhs8fyT",
  "key7": "kkQBSEiE1HQBk5bKxDKxNgcMRvmRRBMMSSJmeoJoqs8WrLf4eCVojBaTmrQUjFeU3Tth9X2uFfNrFuPbxKFE6XZ",
  "key8": "3QLansDunjpMSmeEAcm8VsjzKshKsTgApDZp4rAqTDzhpvkxgP7n2FVnCLwZfaZJHqkoUDrZ35zadWroCUoiwTwC",
  "key9": "33yCCCcNSQjKmpSKyXWbFEKSeY34TnZSSLddC6YoZt5rRU6QjpLstSeU15Qehb3tnbL5WyVJfLs2Ser7h2WFdVbq",
  "key10": "4KzSMxMYPdxm2vJjxkX64cKYZw5PdBnqACm9cPefqPEKt1cy5U2HwBvfdy4kPe1dzia7rDjf3e3MwYfEews96rd2",
  "key11": "3LxRDkd9CqPq2KLzbcVSoD7p2HZSbiEWauSS8nt7sbifVZLfHAkT6FDiwuLAdKFWMiphDMC9jNTf4mLj4Yj1Drgi",
  "key12": "QfBAHXSks5FMHawkPW7iWhHP4Jboqp3ABBgQRwy1c1qniqLoFAkRyjSTx5NGz4FywxmPH765eEhW2zAyttzD4ab",
  "key13": "2kpTTaA8uQBqDeYxj4om9oTqkexhiRnFzSQkgKrkEhkufn6nc2SQFn9vTVodZqPKEZhBz5f6QWToYp16X1h1GUFt",
  "key14": "5gULCGiRp9JRuT8i8s6Cg9HujJo85KvQEH6cocCQnWHkkFchPFsFKp8d5xLruVJyztzPiJmtV378TQQHhRmjYMog",
  "key15": "7Hag6UbQQUqxXRAFEDwVaowU68im9nxBe14pAsxTiHPSeC6hQ7GP1cVcaNeteBFwbJBaiEPEPqqgppcCur7gLH6",
  "key16": "2bEQU8Zc7j9S9UrPPV7LgeTzPDE3j9xna1ugaq2Hoi176hDawaawG4LHF97qbuFrPSs6FDLoKW5zkPcxX5wsKSCS",
  "key17": "eUR7daBGHQe11QzUUCA1g7oJR7DzWbsx4CUvSReiSQYvW42AGWFke8Gx3htAW39M9jmhDyebpmGAb653EQgaKBD",
  "key18": "5JbV4rC3g9WYDeFUw3B5ibuaYxjYBJTn7oCwKCsEfU3t8LYESt12odpiSSNy8iz5uy2eBTrMuPbTkd6ZhtDWWPZE",
  "key19": "mqkUfkt6mMZM1kN3VAinqpSbsRArz77AH91oF239YHbPmNMJKhP9dLzdQfzzEYyaHQSFokX6eFDUtAdj2Tiui6A",
  "key20": "3xCsN1QTaeDw3o2i64Xr1UzPSCYSKrUhuy8PFEaNAV89gkDCHZ4FMBmqrXa3hadCjkpHoGt1PtdKXqAGEJLNdpBj",
  "key21": "5YFaqKz6brqwhxfBtoxeUdJxisu4ybcFQo8wP8uMKvzp4QAL4GadLh4TMoZj1HynyFCEsVnbv5DDKJ6itityZfAb",
  "key22": "2Kjyd4csfYt6YCuTzQ71fWKmK1YWuTdg3si1Xr7o9zvaWomtAg2KuWWmgoJea6A4KXHN2pVfRURArTmG6xz2Vmdv",
  "key23": "2zGmQ6jQrwmpPQ5r7G1v3etf1Ja7zMbomp19egvnqaUTwgW1Gw2tHYRUBQqYPdQsdCeuJStmjHryRW4YqtprEYMb",
  "key24": "GsYNdHJNiLqP1Q689H395xG4B8LFkByYyyQtqKLM7QmwwyHNQV1cbHtJ2fBizYxAvwCEag4Ytf8eJ5x6n1QceoX",
  "key25": "pegS46kg12HWZdjjbuJGa47yDMqnsPFGusXezVH9QJRYkhsnqEHigZoPTbFD3dtxG9vvWPKLyfc57Ee4vrs4Lww",
  "key26": "3Dfpd4eKGXnbHRJz8NvVNK3yMtihF2yTWcNboUWGHQBFfXDBzQGAawAYtcEFvPV1TQPquc4wpvEz5GAHFNyA8iUT",
  "key27": "64Jes34Mob8JnnUKge2arP1UW2Y1w7yCgLR4FjnBHS221JM1v77ZW4eumNnf7fFDmk23dZNy3Vtgb1j8jR3fKMbG",
  "key28": "3fp466gdF21VnCxAQgRoeB1Btr9B4dRnM5iJZsBCKhL2mUV4uP3NmRqEcbt8Prka9PiGwMdzCAV7css2bm3M2kGk",
  "key29": "5k3mM6h5DcgwpyDCsb5zxUwng97T6Fy89LUk4xWRNa2Vwrj6fcDP3uNU7fA1yX8M5teKBjUUYh52FJ46CcBzkwDJ",
  "key30": "4fcxLgiyraDSJKyiG46Z2sppNaruXwNnzrZyUx84HkaekQyCf1a2oFM2yLmDdemZXeBWuN6HD4nytV5DX1a5bG1k",
  "key31": "3P5rAhrRmjsT4Hui7TT17Lpt8ug73qWEq9S8LsesBAr1bgsavzLRJ6djVaGjAzKwcYB63ypG5mijeeMV8Z1sSBwG",
  "key32": "2mCuAvFZs3wJEdZjthkGkk5zfUTnGW4WdmW7Ca4veG6Ry6VCKcAXi2ndDdspBkSgfeS3P4nEThrqEASHedjzChjv",
  "key33": "5891ok6ZLrsyZWMuHuGF3WSHB6y2Kz2mjVJRZpU6gxcNkkdLnuWika2eZgWMVU85sa1NPH7fxhuqrKBoaVJh2nKy",
  "key34": "5rCTh3WgSjoyvATHTDogKgzUZuwkStivr4C5BnipysFBFnMggTD6ddQWW32FDAkcYJrGaeMQSu3VASBWa4W6P3w3",
  "key35": "3sVLSgHhFQ8YYXZYhascgAUAAmZFnfhgXbuxyTjTrcF2ysP8t6JSJQxNdeex3s4R6mTAUaxjya7nxq1EeMHsLgNQ",
  "key36": "fHESbiwSG9eqQ2Zu8oc7ENmGPqY1PSywRd2uxobs1HqTKZ6MG8zUXUQPVcR4hqqgVVDDucV3VHzxLfC3mcj78sb",
  "key37": "5LA9deMwyKE9LHKgmvWs5Jt447KaSsDSx3fRMUB9CTRv91DEETTPjpULri6FtAmh9tDY5b9kBzzBqniCcL7vk1CN",
  "key38": "3yzx7KNJyPBF4nVYNZsDBtexjbb8275AsZ1WeC5nuXAtsTXZkTHrAR9Ve4mMouL8HbbRQzqpmTauaAeq9DvXyzfA"
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
