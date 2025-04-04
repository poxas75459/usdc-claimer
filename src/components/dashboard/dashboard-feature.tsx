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
    "3RUymiDyJtuTbeXt5EnHeAXTzUpzzbuxd4gpvwszGuHFBxJGBtPaGub94YpNU66vAyZfnCfJoa6JwAWwERBzEQ7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VX1oLoRNBAQDKdZz6QXGMk7jwdjxD331DXSGdC3P4GBHpyiaPGgrion2JXDt5aJbQotA5F7yEbkrGfeymKoM74V",
  "key1": "2eT5dqkuP4AeiRDDvHqMw5CayCC5ZTVyc8sEDjndMunS2u91RuaaGeMtZkUrBquZSfxcbg9o8QcYbacJ9WMdp35q",
  "key2": "5vJC1YEoE48ceeApLMNWxxsf7CfDHd8HtJicunvR5ANbEZGFnTvUxA2uzoWRU95r9xy2QBjtpkkhyFub27jzV2MA",
  "key3": "31c9C9omA35ZdP96WvhPdVzuEgAbjd9xcs3xJ1WWJRdVwLNm8ZDbjqtvhXMwmQeFokmeRJPQMvgQqGXaKonKMmm9",
  "key4": "2a4beGeACa1rfeWz878Rn75FFNERzn7eyRFUAnqqYjukdJ12jkwfNzYuizjXPPd3HYjD93qdFg4CNnmX6Qer7Uyz",
  "key5": "5ycsdcMjbK4yZaUNRQjF6uPGuSKvN21o7igjBpZvHHWzEk5PQMHXT3J2iHzj2kWoLdya5rwCKPAq7MGeVWdpuM3x",
  "key6": "BYMo72n7iDSAZ5bwzZMzFwf9ibiN36qVtXsXVumpzkihcTvo5FCN6hKQgwXeB2TcoUQ9yLFvBmpju2xwmnUAsre",
  "key7": "3wfCm3bq7C3krLp1B5ecdqbBY7ddVto994vMcfKDeniVw2jacn5sWoDrcHLciLtKVhg4VgpKrPXJA3MRQHTx8yBK",
  "key8": "3kLtn1dRV6S5iPaxN8jhCo4vWgBRUfFjn7ZXru4KjcY6kW7cjjAADEDr1o5LiRc7FGfXwoAebpeC65a9RYwXVDkb",
  "key9": "7ZqtKfrMoNaa4bZWb5ramBe24WXT9AwwnpVs9hJzy3b9VC1ZN4XvuJoNbXEAfPpPMecVaPCrVXvtGKheDmhkw3x",
  "key10": "2TPbE7qx3Q36q2cnhdrXjDZizHW11BApFGFkZLof3fiTk7tmBzaWXuYhez4Z67p4G8C5QA95gcUH5YRFmLpgsY9R",
  "key11": "37P3z3Cvm3KRJqJaavMP7hHAs3jDXXvJoQ6Q7L7AxRjKGTu11PVZoRXZbR3n1kuimUECfqtbnn6F59sviGeKsbHe",
  "key12": "5ogfLPd7bJA5kSHa5xKhUU6ZRqN5Ps5bPLLPictJsPrB5EPeaBgWojNiFfrMDeJNQrDuMYKN1osV982CKH8B6db6",
  "key13": "25octEytfQ9P1vEudSftzmQZsiZr99k349uQ3z6kppyMzrHtBfL3DCFdzx38dXkbBPtcejvGwKkL69Y2hvUespwL",
  "key14": "4ncJD5KsNUjAtcT5VSHc317TAEGvBcwKcPBAFWcKB7qa94ZZ76wFqLcTXJDPsUom7omSSLqMiCARwqQMPBnvLuYf",
  "key15": "WjhfxjbTcchQfEgK3gXbPSyK2qFLh5DrTQTaH83xodibghPgQ5Cv78W1idkoc6n4o9Z65it9kGYM4fNtPLpQPB3",
  "key16": "3TBXdF2kmAjc9VAfXZmsELyLHvuvi2LX87AVVB867UjpoTzawraNJW3RrkSWJk5wn2QKWYGHA94aijPDkKTiHwft",
  "key17": "5T6LtSumBJC9p3KwpWZKiqL5KHFHAc2hdmRQLTfWwLrvGWBrebLrn3TpMHobS2GafXA3eqk8PGuczR8mDKd2vs9r",
  "key18": "4d3dkipEWndPzaA3VFhA77as6bNgvAHUvD3ArwEfz9rpMUwVBhmfYomoLAydmxSokkr6Lmo5WFGHEBZDYykuBJ39",
  "key19": "59T1jYuvASL2uXJu83rLbvhdotWUtUtZPfN3HKbnEUse4jZHyFqYXMn8HGGjac6XeQ9MRWjd3gyRPuoyFBD9znYd",
  "key20": "3rFZGq9nhsRjHi1EA8cMPoYSSEvnPVMweKN51wpv6LH4Lr2WdmjAU6M8JB7d5M2iwp2fn6jqty7NNmNZKHgfJemv",
  "key21": "yxmGsCU2thA7i5w8QgoqBQrpUW7NDnnFnkXTonVWwG1p5QaQNBaUPRB7S5FmS9R57qCfnwbMqLr92z2A3Cc2Zs6",
  "key22": "uZukEVmyHxr44tPZxkNFLK2MEhaXNuHbQMd4HZ1YxyWUgHnmSqELtBPfABdR1pXTrdWxHrRiAQwNRHAYPMnDVCb",
  "key23": "4PjE19cBw6W6XKk73WzvdgxmKJH27LtJdVvaYSFYDb3p4QQjYxquRiqGPR6yABn1wwb8hMKVRxhGzVXYgfTTq5W1",
  "key24": "48VkzMx4JDLBg4H2TmPah4WwVp4oyTgfQWLsotkTGkQnjU6CsLEBHaz3u1erCF67cJrJ8vq1MNsxiVA37nbULmaE",
  "key25": "3twvRbXupSSJHxwYathVDJXYHpP9LCPckyW3i52mKAX8ZqBXgFoAAdUiRmWF71kETYCg22yNxKuxmhrS39QTpYTn",
  "key26": "2nf9vnyK7Kz2vednaAz9XEWFzbmwxZNx2bG616MYbCstHXsM9Dvki3VUtJZWRN5tFbpk8sACQWJ2xtinn37YatTJ",
  "key27": "4M2ruApMEj7UsMDeuj5gygbu2TNEDbCkgu7ZFW3EhqGR1ED4saTGRmEXXRXp8EG7YAfgoutoQjbP2zLs22chn8wU",
  "key28": "25JkyxDbxYPdHtgDm5vtM1iEC2u3Zy5EpBMuHF3qumHf589oEQrtam7isXEgqrfurkZEmZmSJUqMwwUNSm3Y6BsQ",
  "key29": "4J7wYvFt5XboprWvNnA5y7CuANuUUXfJjkXBX5p6z1yvwEp8u1CFsQyjEnGQ2mDAkutFP7ddaxBGumr36M8r7BRB",
  "key30": "3bG2DHK7NStiZYcYa6hvHRFQmKWikxxuqRmnMc7GuvAuQUcnSrTzYV9h272mFs4yfYPTodgx98pRQRnJWnRNwBk4",
  "key31": "5vx8ninP8VUfkRmRTi5BDNCVccrhZhojR263K1QdKmX1KaA55cs7BZushecLnioauN5Zv26yixzVs78LuhQXkbuY",
  "key32": "3ueDKW5FZbsWw5jazShbF9pXCNQJnBKL3DwGVQSDKWCD3SVkRFXuS6ArcHAMqNTcUkC78HmqYfdgNpikGwVYm3hR",
  "key33": "6729ek9sFdNRhDEsUwrw8YHAmgfT4Wm2T3h4N1YD4cxGZGpzfYHoKwcDr2qpPwMHmJgogc8MUbjTsqNA45WXjLh1",
  "key34": "2CXnSDprQPRr4n8t546uqxn5YQfMoAJG48thsJTaHTUQo6p2c45bHdn3ivakTABVDHAGVrEESMpuQRkhtjbBGcpy",
  "key35": "5hVFtRRcKr7cjPvtcDNMTzgGMNP8by2qRNSvuWM6AogW4dR1EmwiSyMSv7qZV4ww5LJaFdMVtuSDR8dzcYk5oiBv",
  "key36": "44BzER3bKBWwzJL9hEfnJpgi98wMapRLw38D4aP4uxeeqZHj6D7Y5wz1bSXMU67dpB4ZwYui2HHBo48nF297R7ya",
  "key37": "3vGQPgnXFdpFC52ZZBFLiSwHEy7aB2GUUGiW2UQMJSvW1HdYtJBsiDnzZi9Ef7MvR5AhyYEAELWwEyooAzfF1hYr",
  "key38": "3u8UewQGK1DTt5Ny5AzAVy9YAu3cwjPAtjhFmoW9DdM4R4SfS2wbqZj2h6Wi1UAwx1xiRzw7uWxCv5TASwZrNjA8",
  "key39": "RJPVXk7AFGfz3erErMsErruywMAkFviKz4aXXstdzXdm4n3LcDnPa5kvKyCABsKGYUYRLxkNZ7SNtT1QSGYmLjT",
  "key40": "25vVR9GDkYqx5J9d1e3AbtEsdzSqcdo7XNJmyJkdZvq4rWFSwYKoRqevpQJCrCZn25JGB97xKEfwknxxjkjaNTFH",
  "key41": "37o9Vh8R7esi5S2B4kr5VbBhqYMSKfjGTgBACfLSMWwGdZaZXL2zi81LQXovt6xWF77vsPMubNMzd3PmZHWVSwrg",
  "key42": "3dDjJqVzniPQmBYvR4C9DdqhXjw24hMT4oFQKV1xPCXHYBzGaqusymjGUnAXxG9GftRSRAtRgjRoVHf2FFdaNMhj",
  "key43": "ujrejCdrB7DqGTq8rJVrR5rKyj22zMpDuauFQvqGAEoHxwozAPwXjCHZKHF8SQk6WFakMf9zwDvCSVkw3Rp56kA",
  "key44": "5mo3XmtYVbNxj4a2AWB4eoeSURZJKnEpmC6CB9JvHK43Tr739NMtwmAbGgb6k9oHQymah7EGJMR3b9AHD8fzDhgb",
  "key45": "3r3qvZSakp6tYkJXH5QNQBN8nBW6MFYNsefaTccoT5cqoCD2gZ3fUVLSpdChQsxsFY9aofxcqTDtEQtsxFvL8kH6",
  "key46": "5nxyUfH8tjLQocNJbaq3Wbs6NcBjwo6s5PKN7wAS7GQXYWL6LoQbyZ4sNxZ4iW9LZdpm4ZGsLkRbnGbzzXDKYWvL"
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
