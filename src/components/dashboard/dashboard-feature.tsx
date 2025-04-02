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
    "4GnGshNQGWK9Mt9wwWy4FFH3uLkPiX7i39ht2B19R2kDwU2RxG6VGSvejZMYSVSPHXWZkbwZWxPfBMLmPhKrZFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVGyJdMr3NjWWqz6VBCCXYXE3eyYuaPZd1Z79JTE1sVHFGQXz973QwvC7GGoHCr9NNppaxwfy9NXcWo3fbhhSdY",
  "key1": "3c3CpvMQqeSwb9oMiugcb62ux5DCP6WupNFEEptjtNoz3oizgs1hWJfc4ftCbXUDrUKuefBPsS9RnBsa5rPaAWc9",
  "key2": "4YyjH82gXSxvUJpdEQrzw7FcPYdHfQSiURwohcD1vNTjBVa2SdtCgrqP7bVSJ3Eb9kfhMgk33bMwz61U13qLon2h",
  "key3": "2ij7hbTtEd6X54PSJg7nrpPdoi53T7oBui7vx6oazKdDinpfFvWZAcXrb6eNUWYLX72PxSanGBb2TKGLzFAmZZUE",
  "key4": "5W3A7Lp5ukzLprnP4QefdK1oDqpoTQmXRBRLpGvWY5SeEKT93PL4gWFDMrug8yyAt6JuS2WDxpqiBfkrnyi4EzNP",
  "key5": "4tZSRyxwdE7EN4VcusAUiK4WEfo3GsHhVWvTHkG4Yt2LBjqcHWe2BMZ6adVnF7MhfrA7eXwz465vmFkwP4wd9MpG",
  "key6": "42hSVjDyUS5wnMt9csWDxcsH8ivBVM9sPwUCERV1d9k8M8gYwf1TEZw2rSqucLTw6MzXHNdsi4GXiGfZE2L1Lq7c",
  "key7": "4ThKNtphv3ypHvnaR3LwHazczYjrARDRT54XSzvJYSDwdLmCiKuR7BjrMpveFW5XxzanscS1yoWaTupyEkNWYsFK",
  "key8": "WJjbYCjhomxzx3oYRKHBiYSgdFouvDFMuPE5rR2fzbRDqncD4FU4EyRaWX3oCSRJAfG5aoFS1A52vUpej2A5hgB",
  "key9": "2YFW1BUFf1Agy11S3wu3vbBQ7kg4VoKo8qYeDAQU8MKZkmiUmeipSJCFTzRTcMJcvCxaeAs3KxTWC8zpKQVzKqno",
  "key10": "4UY7xpQWWq1EQ6NFaTMdETsNScbEKJSpwVZS84FgneYXzXUaUrbQYt2feL9xHy2yPPNbN4WYQD4E1buCzTJpmcYL",
  "key11": "59XDnFiFrJ9oxrYofhKyH2B5QC2Ri8nWDKJGk7maAxnscF3DmesZ5sn7MNPNDWt33LSsjKHYv4EAsgP1gd51EF1A",
  "key12": "2L92wfwRwsJuujBVKTyKC6TNEwXaZSfgAF6mnAeDmrsaGMMQ5eqFayNzG8A6H5oHaoCTsjqfWfimddwu4ZmLjJcX",
  "key13": "3p5V8KnZqkMxrxLSyVFeKH3hfjGDtp52JVyWiuV6dveTajenbGF4yUx5VejWEpX75G9aBmcZUDhxa3sJ7LprXtMS",
  "key14": "gbf6QmrUzq1Bv9WLL6k5hLiV1f2kqRVNzKhTG3Jb9bLoJUNHTQnnfNEz7VNw1eDLXczB4euyrXMumY4XJduYfnd",
  "key15": "25KzV3hV93c2fdNULy2SRVdce7Zfmt18MtkGjuaorRfTnCwxfbNs5wDXSqvBbQuAN8qqszX8VWGVJ2teToP926ZT",
  "key16": "3YXGGZJdHjwi256WMQpjyP5VFyzu4uTNxnP62A4HCb1xAuCtGgHdnYMWCp5wWJv3Dsk5ikaYaUEWPabw57VUkbUw",
  "key17": "4BNBjDm2pwazADHvUtJXBbZLA1hFURbDzZ4LZ5LFRFzx1PoGQ8is6XdiVWS4GwE6eFrCV7AfuskLfuCyqMEA6brF",
  "key18": "3oT1phE1FqAJm4fHXLqt15HAS5ns4x3BTGB6U1Jd6AZig1EnyQYjxH3Ftyidi5To2UnGrUe7Vp7KMc1f5TwkzzsC",
  "key19": "4mReb96bn55epXtpyHsjkEwjRfjXZXAX7C7GYpeZBzZb74i24iodaez8y7HMHDG5LkS5WCXxz6vDc2DG4WE95EDd",
  "key20": "3ysQpN8U1YA9otc5aARVGLxHgshDvFKsRC1yVNyTt1ArUEft7Vku3GiHyc9oaUV27GawK1ypAnLAAyRFjsNrzBjk",
  "key21": "a1Hf7RPbZTh66KpJfnVVgru3UARzwMkNjLETJcQBsYxZdSDbqbDLgVtXprwkxuYjePrZsbKvWD9cjEzBXW8F5Qu",
  "key22": "3WX2iP9SNeLdTPQyAwPxBPV3qJmTAWeFdTf6rmHcEhmcU2dyZLGx3WaXhGqKEhHu5UAasEPzeSEkEaVfTKy9MtYE",
  "key23": "2GBAsPssWCG3GvoHP5XT3BykW1NmEWeVjhb8gSE1PRbxumKNpMSdhYLvWxwv85TofF5Qc8fdfP9gyQmRAJggf8R9",
  "key24": "4yGrWGjJh9eMFhP1fovGK2erpdj9k8BQrBX1mTCAgVWpQyA7qwoouwQtiKD5sdfCEuE5oS3NxAVDj76V65Dz4CpQ",
  "key25": "meeXkrT14J2NoUNaTZRxJp1asmhm7smrqRzhjQhtrHKxVdkdvsNpT2Rky1u1Xzb7qdnnB9zTazqbkKkUXsY1apn",
  "key26": "5qM6kE9SDbgRfnBRzzorViBx2fZ9UAPUwbxRBEW7Q82rZEn6vsiYj8qGY7VjiLaLuvRYFUx2VQApGksHpEWPSCem",
  "key27": "5iN3QjWXxjtTT9JLekNnrhKobvoUXEDq2G83Y8iKFjE5ddibfacJTDivms4oJZAswmQWCUn8dEvkjUqR1q9XhXaS",
  "key28": "4on7NWD16AownfbJgiS2pCUWJHB9iMsrZGNyckX6YWLa9gjnQwXS5ko26MawwGeu2fZ8sSZNP8uQ9GHUdaZT864B",
  "key29": "2QsTBrhVyH1rMMHyP5tjyz1mWzw6Dk8JyLvVvz5ZEBUoFPEXMfhY45LG5q7TrCQ4E69gxBkx8pN5hH4pEXnJ6Pti",
  "key30": "3tqgsmrZhf2v7UcdoZ7a5edw1cStU2mUB8YSDkHMuXVj32PoKYN8vjHdRYG4rKaPg31dQv28Zt98eMtZVg4LKM8H",
  "key31": "3G26hKmNmYSsGufs7yEanUigczAL4HGf6zTXQXJGQAmTrxiJuP3spEJW5tFVDwVfP7AQ41fSWoTfL9h1dX5PMNJ4",
  "key32": "5ATdXr2DFmJ8vfyZYvxVVatCNwesy5F3pEtPv1PVDQzCgL7iPwzp3je8CKGm44KtWyEt4zjo3dN39wk4rcYRSkwd",
  "key33": "5vNiZNngPRrRjTLdTHitwkpEdsZBzv6euWuv9EgdtcXUeJ4Qo5zNMiF4oaTQxj9ttpsJ5xrMDDj8isHhggQ7fV1N",
  "key34": "4e7RzSQwLFsLD8KcapKjANFPRTm5CgksjYGGCUkqec5Jiaq1gGjXJdtP1tLXRgeN8woSuDd7sSJdfDyy7ke8R31c",
  "key35": "5urTVpjtvmRMDJ3GoBsydzQD6SKas1aeQaLaRh87XcBRXL4gih3oSAyyraGvacoU3Kj3GrbMydgbcA3wCW3fRdim",
  "key36": "4gosYzQmES5h42Y3fZQiGjF3X7pcdseU3copnKref3edTcTmzzBxAAA2dQkHozubHT5d1xuvGShQ8wF7wfETJtKg",
  "key37": "2tf425Cj8itve3nYK4WFDCTkuY17oAWek4QHzbFKhJUQKS5wLU1Zcs9ZTNtD1AdNC8ozQBHFmCJcf5yQU5ybdrqB",
  "key38": "3UN2z4DHT2ZnAkcyZPgnhEgeqzXJZfyCuc3Fqwd1zg8mjZGPcvjQuYKaRuLizd4pwm8XAuu32XicSijgRDUCaKG8",
  "key39": "4vwwofxMZs7fPMQpje37RHiH4e9ciaGfAFGxjSXXkFJVf5UY8KbzraadNAAAE6uV2jQhEfszqTGrE81pprEZM9J2",
  "key40": "47MeAYPfC8sEanXe4AvafUe93sMnkQ6a4nJZBkLy5QwuJKLcNnmdBMSL5gTZshF39TmJGUFKSTo5TSkh41quEH9Z",
  "key41": "RfZ1q67B36P9i9Wm2S4xMv1Dtsiiuc4NryZSeBzxVmfrbpLQRkb3ebHENEuRBZSPV1YDm3tsor1cYmYLkB9GAvv",
  "key42": "2SersNQ1hE5mPynAwkbxfioGxxQkWdg67HvLFpgcrnjHneFoYTutrk9h6ctMReLxDgFcSQ6WYUqMwGfd28YUF2Q3",
  "key43": "3tjY2XvGStVZ7GoTR1RGB8WRwjbWQ6PqKaPvzEPZx94V1VYUkX52WNMFwTJSULWrpKbG4PCQXoeYMwt5iNDYZiiU",
  "key44": "24gV9XudGsSgnYDd2Usy7imBW81xcoG4kh3rLbxkPhmo4SvPz3L8m3yjBc77656X7oFhN1PUd5jxvsLDYa8xxfJH",
  "key45": "7kpXY8Vtoq2M5ce8wMMWK2JBu1Mkg5gNwJSJ3dvDc4Y8nrRjwWgERymm8rbg3wkA3GwHHknbn2e5KLVFGpirqCK",
  "key46": "5EtvRHFGTTrW1p3SU9BdqftBSLa8BKPFLxXYkSHssP8nUCLVGJh3uACbCXTarm1FUjTzpUP2k6RPpj5UX4nGTgDK",
  "key47": "2ApJEK79ZCn8fn21m3LyiZYdMefZBKyP5XRSLgDHAJTvkDahVtCcn6Ef8YGuTqPubLXoV9XeH7ZnDhYVNRHSGn2L",
  "key48": "2i2ZcpjJ3Gwzz5WnaSjWZgBEt6USUozsipb3MNsn9dgminfrdxAuBT5NzFKubbzGE59fYRPz7x9v74te2dujVdV6"
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
