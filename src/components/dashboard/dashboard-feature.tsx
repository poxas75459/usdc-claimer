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
    "4YfNFXDViDF8xoCWMMwMweHj4KA5wRaRc4NGq5kcqz3iKhstsHy38f6rrX6nuc1naywSLuRdf1P1ndq7EMqCzWqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3miVhxoXm4N2BJiwmHTm2kT3hhZhrH8i6xYRFbcdHTnBCGHprHssYxq5xgnskFWStYVTq1BLLmDS48VFcbqe115u",
  "key1": "2UchTJV4HBDMvqeK9HZpGTqesmPJjDAY2VAaQtRg893ByTJtrQQ6eBD7vC7BUmB66AsJfRXCQBG4it8VQuystM5L",
  "key2": "d2Ube4grxMQUgJ88M1xDVkmHf1DbDdaH77ibF5BjPupP7JUKK9ibqUMQLTDaXbDL5HT22SPMboJPAVKWqq5Pg3B",
  "key3": "DLU2fDHs1zKHJHssWXXLuG7oW3WbFwWUEhyWb2wRXULKvHf1hkQU7WcPqihHLdc7r2oJHrmqkYQR2FFjmBdWhaz",
  "key4": "HqJRV65JoZvMaWogRR7Q9FS4jc2ZQbxvU2Qn7JkYDkLiqyK6dRjSNzhhDGh6jHbGvkrW2xpNrLGW5D6G9wLUZ8u",
  "key5": "24HVdmCuXjFmvWBT9qkxqWTMGEdmHZcQ5h6w8njAPm9q1etSjw21QeV8eSJVSSLPHWB3s3P8NbypdE2JxfyU8rM8",
  "key6": "4HKCz58CL3vVr7euTEYX2qex1yXe4NnGoggY1uNBY3vLpyqLxpewPvRr3iawu8DUTF3ZXTae7n4zNEvTx4NHsCt8",
  "key7": "5Tv17dFkQWc8ToDrFfoLbxkwccoa5CDTe8P4C6tFGuiyGQPZAfkvGmkBJwXkNUEEc4io1LWiueStjAq45TMYR9Rc",
  "key8": "4kq2QUrK5L5HjBfFvRgGtore6xsgR8snHXULvFbbJUVJK4VKenrS8LkcvYHt5ZNfWVcaxx9wESiqPEXyHNZ3Nwn9",
  "key9": "5LeE1XdC2vuwMYKFaVPYzHYMvdXxLR4AdVb97bguZzxEmNwswsygq94Uria6SB5594FzXVoNDfuUYWUaz5WQzdnR",
  "key10": "5guyGvEidYrTHxHrcAKkUBXTumbDP9pZ4bjBDZjNr511YkR14vuVeVu6jGfoayWKJcjRRBBYCjYwD872e7XTBjGC",
  "key11": "4kfEQL1yRJNzGtVrwDC3dEJoZfeYJVAKF4TME2bo3M1SWs4HR7Y4crbmbC9qCQ1nG8sJk7PSn5yFkxu8zjkDXzWu",
  "key12": "5KKa1QFD5ErppEHx3tcZsn9XjR8sHgsJmnqyAQguTNVuuvPpFEr31PaDWHm2QJnm4ix3cqCuiG8W2EzFXazycZUS",
  "key13": "2XFUPX2zVifVbRtp95vWPrXEFMR43pKhXHmZynyR2vNyY9cW6CrW8taVnuq76ySmWB7jifsgjkr8apB7dfTuPcvC",
  "key14": "731PL7uUfnLVzPMBsJrp5HcATLZ9phomFzpyNk5NWFrxSQbkgqeD2HtweLpfe9SgCe8owUH4bij214xQwWURNLB",
  "key15": "5ENEKauw2QcqmnnjwPnrsr6Kg6uksF9oFM28eHvnc55TYKaPW7aPegaLnaFei8ajSbwm73xsvFvLpfhxFrRN6Z9J",
  "key16": "6VwDCkfPkBHQsvn9FNgwjD5aWZJR41cQ1EBHXnteAY3okGQJFUiMf5ADHgPmX91AD3yzU7Xhh84PKvypQ2VH67o",
  "key17": "3ZDrhiVTViAZmKfwdw3TB1mNc5FsJNSevpuazK5Jt6H5cvk1mgbWSJGrAvzHdtCXo8oiRvrggoRNFYj5yT4g1GEf",
  "key18": "5WBN2H4KhqWCznSddj3D85yxHEAA2Pee1P7EhermJetQqBsLaewKfkhV3vVoJFXAxAYQqoyMVbEZunxSSEgXUzcX",
  "key19": "2aQouPJUCETn7ohsoeZPNUjifrDqJTQiBjE1Joh4xBmBuz4Sj6nentaqdMAoPAsu43eTynhH71WqWVdcXLDyhkQy",
  "key20": "2bUv9Rr4tnWSEBH8ZwfvwPVyEjkbvqMP9sU4BtbZfvHR2XzQeefgSeg535S3sAm5ox2ZfPsANAeSdvGYZmbgosxK",
  "key21": "5BbwmiPSaEYJymfqgX4soApFM61dnFbvashojj49jKpeJzdzHwGTGymgBbPpTA9UDrg2KSt9qoEyEC73Ax5hd7b8",
  "key22": "kC3ppDBjogWZCPR4VoJuugcLxt124pNeUcFxGNhEcRijSCbWoXyiXVeNpRzKBFsmNsQBxPix2Knssujn6LBvdjC",
  "key23": "37r61nzU8hxKWUAdkR2AoTKNQkVX4wprYD4Bfyw2QJLwu4AYnKT7odHfiN3htt9a93RsQ3ACXNSDGGgZEsvzZQEo",
  "key24": "2tsadtpLYg13bxxr4AQjnxMjakhUMSuBJj79nrhzH7uDDLWQaNc9SYGv9P8Z5T5NTEoL6JDoztC5vwLv6ycjwF7D",
  "key25": "2FD1P2DkU3Wx9pvAL1GMx6WvWxNgoZSPLyD1zFCdDo1K87aHtC6nGyojMTQeDdHwkTHjGFsLCjWhud2mdqyhuDtm",
  "key26": "5LvKpDks85BLnnienpyNif8FtLxaFoFN6cJeKQKj5w4DcWvKz3uyh92rtJs7RDfjJ15vjnLK6QKLKw1MU2chUzzt",
  "key27": "5qGG85LwVcWRDr7DepNvC9PsfBR3CTDnG4kiHpgQYFm4YqN62p6JMtTuk1ZeUta9w2S8yNHRkZ7S68X4cxrRVJLU",
  "key28": "4GNF7xc2NVFZ8A8rCiFCwtFxciaGCitkSUV2SoGSSSRq81KaarkWNzRjMDKJ7SX7DrEh1Apqi9pU8M92iTEzsFLf",
  "key29": "tHEFSW39VaXretwiphwuEHvoTfa2KdK4nNicD1huTmVPpGVtGQFkv63kCUFdYsQqaoxt8m8WfvUZo5HKvXjTcAD",
  "key30": "1YK9tVax7HGfB5azgu2GVYtxT39eKZFFgU1BRYKhqAUrVjnGa1Aaj4E7ECsrKGo7AkhCvKk9fcTg5zG51qbceXc",
  "key31": "3Ghbspx9SKuxgF9RxTF6mmi2yQ6yhPY7f5orThRnjMxvs7SzkczN6xPNkDMci4yUjS85ECvYddfVtAbJedDtyZeo",
  "key32": "5P73tp7oqkE7yQL37jbrMNYVZKo8Jks5PyeHyVL2eh1JiZMZw2ie75RHpQMMujqNQkonmFgHiGmPVqVZXNHdxqGZ",
  "key33": "5KjPkjid1Fb6Ugtw3KFacj4pLXxtHayH7tApUwau3hfuLc4E3GLUR4FRpQxyzA7cuPs3b4MiNbzcuS495dnT8UsV",
  "key34": "22YtM85xbYNN2pgEfXA3hxyWR5cd32wpnBPLrkjwt1dzYbKYXRi3Qqmk4CQuCfmWQ1UJ2jjGppPuPrR7KsURFKBy",
  "key35": "44P2RmdkHH8cMWh3qwPf6Rn6xzThVVsdYqivqs63p4eSqdwKSr8iUk2bQHSx29X63tuP3xpUyR5oywcCmB5TRoe1",
  "key36": "5xW8F3JCCihrDWfoF7Vza8C3tWviRYz3CDE75zLLQHU66SGmUE1XveRHbjUXzCDa4jdMDs2K2LhQjVm8W4R3kbvU",
  "key37": "3YL3yW5HKWCpkcmhGDr5ENskUFMMfu6oexkJ98D3NtiJyzVjyQsUnnao4T3GgivxGnMG7HSoPFDZbU7svnmbV2kD",
  "key38": "3gcaBJbdmeXQrQKYpstMHNLpJWYFqR1eDDEoBFDZUKfPuJBejsFrddFjKwnR1ckg6FYiqmWobLYSNWMggamBxP46",
  "key39": "5gceQd9sAXpBmJYv2n4VfqeT9c3skhsBPdDTKA4BQcK7ow5Xfq62Mv4kDTnYDPRwgGuvDowRe5Yzk6bHkyCsKExd"
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
