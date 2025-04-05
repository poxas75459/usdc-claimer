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
    "5wvbZVcJMx1thvZhV7sZYSnDRvPNjAkZhMwF89Wq6iZVTDmp3wAXQXHtzecsXxS46vF82VUYRtS43dqjgcxw9STK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65U1dBHAFFwmadvXYne6vFKzNrve12tBV41kix5NrKkUm4hCqKhxLcDqsBGnHJb9skfGe3eDZeQfqHjx7pjD4jQj",
  "key1": "57nzMbk5sA6iYuzRCZ8ErpTw1iccAuzQTksRNSsGN1G8Azw7Av6kspMdAmtqbKLeLar1kmyZBSsZEKcfZGvKt2hB",
  "key2": "51E7wNfNFwvWHtAFeSS5jQLLsJnt9ZzXmPSde8MrBKRCmh4p1hrtXxSnsYe2hkXkhSDNAJ8pncHSGU73jn9pbJ5n",
  "key3": "4VAj7UM45r2wycV2RcR3XCcAW9qRt4FcaSTcrdqYFepHQCuHn11VLCRnJH58aGvZ1gPfYkxVsMx8Eqotn6pSexF7",
  "key4": "xeA71Sio58AWEFozPMFuMNScjgRzr6i675hJfP9UZjv9m2nCuXy3uSPfBBE6GSzyKie8EtABcfZZfRAkqYgTLC7",
  "key5": "3y2JBjaWSom7kPAsG9EkTTZ49GYzHKDENc1DskF2KbkqeECWWruTNxe7q94yjTfp9gmZpffDXbEsJwLHXbj8w2G1",
  "key6": "2SsSbEb5rDKKZwZssoSxeLheUYnw5dJLqvGgicwXGSTxVVu5EdkEhGjEnYDWqi3vBbmKZ3RW3pfBNZEa5RpUjk9R",
  "key7": "59oUqcPFiJpMjad7XooDPrSh6HaN1QzPSCUqPMZxKQsdPBmvkeoqu1y3yaRwYNGe8noAhxuXeygUqSSbLremavnM",
  "key8": "2zBqKhsKdjZJ3QebDA8zwJdpD3TDDwezZNPCkWT8yuuGtMq8gPwbyhpHJWPHn3eNJz3ZgWFjtvxxLKATMaFScKoc",
  "key9": "3LwCPkTzutGApyNAhcdL9BPu81zaQsrQSJsF2aaU6s7DEuAMFTuu3SgTTektHHMzWhEvZoKbUSNUt9tyRbhT47cA",
  "key10": "JZvYpMS8yV9od4pruuzhbAp7es1ePM3G154GU1so4qJBnJVnZxQLjTg29ntfcKXTFbmGJghGtauKQf8BeAcq8oi",
  "key11": "4ohXCXqodkKqU89WxSB3WuZGX4B8htzGn61jNRn4CJcdgdRCnGKyXDe4y4AaeeqFHwwf1FGEhN1B6CGvEjT49VdX",
  "key12": "KvxCWWAaZnJ1cWZ8n1wLcZ5Um3i8EW8Q1sd4HH1ptvmCdXt9y24C9QcZpsh3Qjje9LT6rvGN85WB9bcwMF2NBQL",
  "key13": "2fYLqJPonyfCpKqFbLE4A8YC9wAxQeknYw5Ac1gnSJkbjkW5iwJqnUjNXCMzBgKPaTtiAHiXFPY2P21hvE5QceSb",
  "key14": "rff76QsuM2Cizet9pYofp2AUdzXUt3ZE5T22Qy5SUfJJj2EGcBDHmE1q8XVCrYsTVhE3sn5soSfoXbH724ib85F",
  "key15": "2qdDoiySo3Js1fuLxPX9zLGs4aB1yXBENAyEwPM2yVkDSV3a3iveBGKi84XgtzAZ5JzCRfoLpsJkNgbXt5wbsCgi",
  "key16": "2h6sPJx4DoanUa75WQXFmeD9E3QYgSxZzxvGyqYucNY7iT7ogpgShdc4QBRKZLAJJa7m8dsF6XmguAShTZDrzn4J",
  "key17": "3u1BFX9xG3ZoavU3ZGgVa47fhYo2LDPfhWA5E8k2oD1VvuvFAaPRGrWrYYhkqoGaJMurqtk4qrVVNpfDnkbSd73X",
  "key18": "2EJBUv644r514retqgMeroj7CrLq3PDrpLETRRMCqfQZR6A3TGs7BHWE5y12TEGLdTV2niyDxsZ5MDbJk2oXmKyM",
  "key19": "5C2KbfhP5jM1zwdG6V3SLgUuAcV2aw4LcPfarCFohniY7vKNp695TJpDt4DioYUwExq4MeVqWSdwGZDYLdMSJjMg",
  "key20": "3hMKaBhM4W6j7q6rQmiokGwKKBN7D4QSSfBQ6aPygEscfuiekbwkMLaPmFdvYcaf8qRm6XhvNHqmJ23em4w35J7",
  "key21": "3HTacMK1kRGvL2vErPTF4cpzearNRxdtKr8K1MDgmtNa72nUwzWUec8Dpgb8Nr95v5jr6agJf17icSH5Jg6VywLt",
  "key22": "4PwLRV1gG4hzcMwRyyf83x8Z6cjqxPLv5bUxUS3kZr6DBvxJEzVSqimr5UjDFAwNTTVmX7YbJC3YTbT4ykQLAJSH",
  "key23": "2bRnqMWkqjJog6nag4Y3syphNJVxZKtkHWed2NLWY29PxTRFSKX3NHdmumHgVsH1e6pQNo3ij6z1cEuPjoVqjhx6",
  "key24": "47dK1z7Gcivy9LztSpBBndVDf7QJ1uBsXea9WcTVLC8oShbj3h1K4GL9KZkme4EcfMuNNXndDHda1qq1GjvdyKT3",
  "key25": "2ogH9rZsT3HRBJVAUsmDo1djosjGb8Ki6T7Fy3sqc7nRfwYToMa8ygqHVHoyRztcbANE9Kn1PUcZgjAiSQLFvPLQ",
  "key26": "31bkvXMaLtUoeLM3gNjboRiKTkmpNXs11Cqq4eUsCXLUDCL2ewFW31CRuMZAjPFduD2KjyqCJ3T5coD38gsFGDqT",
  "key27": "3Bz7f34hqjw69HQGfyVHoHyBs7YYNDrbWCKtbsbjDBaFRtKxkhURfEGFtuagWL5iD5Gc7dV91hKKhRQnLo2Bzqx1",
  "key28": "3MzZVMxf8GGWZvwTUsJsFAk4LnuDpxv4S6JWvSwSGeZhoTPfo1LXwcXMxa24HJhJfo4L9hi4gv2MZabhi5WRR7W2",
  "key29": "2JHsyFSF651gKavgwDMPmNMj4fcNMSJn3m57D2JmFEGan4jwaoNssk2Wh25rBqgAyi1BCgApEbNtjpA64dr7zbq7",
  "key30": "5KxR277zG8kNPXojGEUgR34joFCaqp78tcSNmRPMuzv6kNfoM9FVTrayPW1CHA3Y5HyYanF3dfoUs3qeNQKB8CwK",
  "key31": "3Z19miPAQrDZBBg8WFvGwq8gQMUmVsy1SzqsfZWfwvhNxQ1NWRrVNqfXBvJoYWGUcXkjAu71xS3NXQVFDHgkN4kW",
  "key32": "44pbvVtbh98W3rF9YCuB3mRBRwavSYLBRnq3PBEtrd8EJVPPQydydqSkg394zrDKoBSwSHzjmfFoF42j21wqe3Kh",
  "key33": "37UssuC6NWnZs5UnRYagmESJRezmyqxdjGGRCMfwhDvWjiJtr4fDgVQAEitAhoLi1xqjRHd67zkkTTvpkEQqPgAG",
  "key34": "4wJmMz81ZaYV32TqtR9TkHEzPqkMkGDD1WUyk2VibZ2CAnuCQNvYyyeZa2Rr1hbNzfQ4V9uVyXLMzHRH6zCPQZGC",
  "key35": "XsczRcw8vMFy4nKZ7AeXkZER5wxqBBac7HR2XqGkq9ZjtwUZqtLTcP44yvraDsizUX8p6eXtcsA1Z6hJPw3WESJ",
  "key36": "67obPKpPap2L1JBmb9dd8uRSS8hAYw1x9jQBqdmfe297Kd5PqkPmq4tNVHV1jWUp3nBh9hxcoNQx3kSRAr5fuGKx",
  "key37": "46TvM2ZnybSKGZBrNe8G54obbnxydekpdnPbmH21gKThs4fDQAeRsfbRVTSLumuB6WAjTFtUjsttvh29gTftRgq3",
  "key38": "5UboikbsqC79NgWYRdG5QB82fGjxj3qmMg6b3MuGdop2WicrKC3QUYKTBpkfwAuQeoexjbYbCPcxnMG21qxVxyfm",
  "key39": "QGu8awF8NeepdKAACTeocWSFpANDJwukm3627NceEX4gewzG9NKtCkz1147htxaQLLw8325kNgL1SkwTNdfmhy5",
  "key40": "diYG1srKqgFUc1QyYTEGQkkMnqDEbzYS7TEcL3fp9UugRz2knL5mhr5QzDr5SjoPV1SeTdQmmZ2Uh5SpT5SeKa1"
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
