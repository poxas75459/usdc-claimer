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
    "MvHNRJsQjvK9M3pGrzeMf2u1JnUDoA4qbSU2yLRhmqWTXJ5UjTNHJVGkTakDZUW84jnjWrX9zBfTJu8LJSMpscG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4uAuDuMmVR3XmqHQGMPRPgQvbKXTuLdtUaRfwHzHVAwFwJX7rEa5FBdojcajNsc7fRpvFfSr96QhRwPByfir4U",
  "key1": "36ztAf2NFNGQp5Esud8fZgbpGK76RnZSgwyWH8NgibaGuvcQyqxyFm8cysxJQm5zAG6WZ717ZuaF7QFhom9PbACx",
  "key2": "5LwPFTKnCmSxF9jb1ttrE9rcPeax2BzMMYWJAqJBxoXeEPsBqnEqWPrYcPFgFbDzY9r8iB8wMqoDPgJQvtToy3Hi",
  "key3": "4pe8cJFKXbAPWteLCkonMos3vVcPQ8ct2iYiqUG7tWJ4bQLLATvYBu8QW8VNb2DCLzifLkMdzRt7MGsVKoRA8vTv",
  "key4": "5ijmQHFehYBY1JDFbt6VXYXBYfo5yVWZzMcEQib4RfKXbHbA5414N6mLFtjHeraScpLM8FaJn4NPHckXZAdXcRKB",
  "key5": "5bBwCysJXuAb9sFCrrdNEp9PZnCu1zWDyRK2684UW1nndJiEqr1W86Fw81vXcZDveLG61AEV3TbyJ9JiMwNDF1xa",
  "key6": "NTcPeo2JD2dnXCBnYb3pXQiCcHW6LiyrZAJ9sENMhEhRHEF82oeFspz251C2fNQf3dBJzuCFSvtDQCcNBv6vuCH",
  "key7": "5Vd1cnMGntPvLdLkiZA9rU9rU2ZmgpaK7ndeQEJziSgECuqs2LKrhd6w5Cogydv6eH97n42Enh7JMb5be1TA4PwC",
  "key8": "4LF1JzdKoTCR2C22JajQkhKg1YDbnWqAUnLek4qG5LcqA1WwFmwatwVF5Vu6MaafZHxbnQ4WFWFz2iDcn6aDptyd",
  "key9": "4UQiGnTtwjZLM2Xf7gLnQ9G2T65LFbfqERXnMNa8Awx9ramRNqE3aydLoUKh9mDnAq3iUiGMKcwsCZyTJ23iD9Km",
  "key10": "2dxgu3D8uifhUUNU9UC45QnnSiyEUTY6PUx9F6c3vizMBViZvZuWs1whWZYjypRQcqs8u7SbWficaj5Y7npy128e",
  "key11": "3JjfMyiMs67NdxbCd2ZjNxWEcFbefuYDSkG6YZJnTxhraDmMZ5AibyNpymimAC1a8DE9KUmdXbqYpKp6gBRPGRhQ",
  "key12": "5WijesxoFWAJoMPsi3aT2z7vDUZeKjEUFfqh7QSc1RxmkGYFuUVLmmKsjETPXB7ioGTVRLbVZnTAGKhZn5nVwYbw",
  "key13": "5ZpCZgk5fomC5JxqdzCayVam2vE13caDXLPZsCd3Sr4SgKTosKLYcCY3yfbpkCUZb4neN6a3z37GMyZHdeioM9oB",
  "key14": "e6VC3JTBcdgir7NYu6t1nRfVtoxZA7cSgDyB9am13EDhs6XBWbqNcZHiB5Dy3rjiKwVw9dpXivkxgjMC9cDzFNF",
  "key15": "2LsZcATrLTybRv29HaQJNi7snD6h8AmdZhsSsgPxMRTShF3afxSkbTFANstdSrLUB3dTeMYrmxHoGy7LGjSAJE1Y",
  "key16": "27t8MKo9mSuQDhgPJdmhZXrUAznsP2QahJuzaxstyEBFF7mApfwSQnXMkrQ6Cq3zgJCCyfeaqU2NDg7df25DNaQr",
  "key17": "Tra2oM85msnkn5LnxpjHDg8ZBc8sXDFVro4exUXznBn3EN5xfFUZP2YX524TBKD4GrqLRkd8LxfA6taBqwFnFqF",
  "key18": "629rrDL6XVzZUZkVqy1GbQ8vjYZJticdftwquKgcupt1QS1wDXT2ykoAZXkX4uYPZPKTRHRhSGuN8489RmBHu6HQ",
  "key19": "3DZYmkswoiiSm3euH2nbbznN1tqc43GzphDHaMpjYA35b6qqvnNj6XcqJDB1VbSmDUwCQJVHtqyKL6HZnEAZuaqh",
  "key20": "4jRQaHopKdjiSTaAZnVwC5McXMUWYMShy7MngM2avSfxWMaJdZE9Laiu1Z5nvQHHxobVzjjF3P1dr6TGgs5xk7iQ",
  "key21": "4TzHe4pNK7ojiFrVu3mW1L2aZttBZkEX5UHojrScxi4UAjRFqdrhFPkrcZzNyV8quUr5hxcgmeHV7UdFPNht3xZd",
  "key22": "4VwVUtzZ4xLCZLvFppGeRDJUmakixSdQQoRpFC5pmTRMT28Up94zVEYPcNd19ueywcZPfvkBNCmqMk1zZRGGVPZ8",
  "key23": "27yCyVfJC9XTR33Q9W3eiC11XszycsdpVTv8XPuANxVN9ybCC9LKHWjUwPfni4N3xD1amki8CjFW2Lk8qPZosq9p",
  "key24": "4M9zvbUQMK91VRwyqMg5xr6xeqijGM5LXZ9yZt5rg1jyAEeStvGBBfwURdyi2KzzWFwHrwTHSHJyX1NZJRHjSgR3",
  "key25": "2oqp6PYJuyotMiBPagdn9RBP4z32uSuk7MSikeJi2e1B3KFGDxEqNqPWi1DRLiZZA3SFW8soWeFpTuFm63mKo9fS",
  "key26": "5QQ794oKNpVGH17E7c2ohGfRCtqeeLk9tbdgooSJJEtAzVLbpbRtWAy1Wp6hY5wQ7j4aVrXPt4q8xB69bqZZjCmF",
  "key27": "4ixoF9mQzPjvhXJbBjohCph7THijDWkvJzXydne1MfAsHGqGSfbCiXmAhVam6R8uJaE4uPQaw2iNDRfNDbf23cxn",
  "key28": "5LqMx2dhF8g7bE9GXxVcVcUqaW8WktmHBNBekin6tH4A3KfSmVjzW1ZXxucbtCoPAEfxCty3cYXdUF3rSdH2Giqf",
  "key29": "4RA2zbmgfWynirby2Ui2rv4ozK7swKV63dav1y6yBa63arzzGQ52HoAVWUT5cmRMPieYiMLeM8NCaGStWaD8VsTi",
  "key30": "3iGxvVfzrHBRGb7EoE8kLqtZMMJtLcTq6iUN5AFbSS7vVP8tuRGkWArKXcPB8YpVX89p39CGa7Vy7P85X2C5cEXY",
  "key31": "AKCbfZc28PCBvVTjKmLXVc2ZRoGyKhxcHpXm4MZN6cYNZJLBWSvX2jqxunKbHvny23HfYeSiNBNSTe4f9XzhPLw",
  "key32": "4wXAQdhWDot1MaGSL3U6FuiDgEunDafVnGHM2MeYSJe7CXeDC1u3NxFLVsu9frdaWPC9hKeiRWM4rXxJhKxahkwu",
  "key33": "48kyFSPpZ9MQToWKZFT49cYh1prBuwrLa2Sbj22HjDpbZ6YE1YEV2pkni8gSfbCqpquqgWxYdsfouazL62sJMyVA",
  "key34": "dr7gksgDJukqw3figihdXiCnVjAsgNhzChya1YBGNDAmQbwHKvq8VbnebEKpNak4YwhiQGYNW6N6E3TkPT7meSL",
  "key35": "58DdSU2jTjapN4dPUgXbqP8RAdBAfP7VVy1afD556RBkdkMgSaaKi5v2cuK7Zt7XMgVSdxXBS6fRBJ36jjmv2TGU",
  "key36": "4rYtdjSx8vuKNnc75ivHzqzdLFbp71M2VFsX9QhfqaSMej2gUSsgDVkADATCQ7fp8mCBYKbk2igb12eiBLe4A3JX",
  "key37": "2ZdSJDMwhBAGsA5VC3FfL1NFGQqToyA2PJDraCWYfCUHCBmKRcWZygiYorJST4L3CCanAenkDXjhM5bsozytieTU",
  "key38": "24PrQJPen2R33eJRXCgf8pgMqGE4LyhXQ4iKYjJC7GBJ2o6MHiu9FcKVrKxNvmQGSozVgYR8d6qwVGSyAZbVXzNB",
  "key39": "kvKUMJ8Zd6gAyJKwXG2LPWhHFi92tCn8vbKP1vkSeAHvLRJsnN7zPaiFvdC2uE5mL4RYCou5GD9AnpbBQVzvJCF",
  "key40": "2AiwjvgVKGgfbNAN2zHkbyeSBLFm9aq9Prc4SGmqdC4YurwWF9i4AcpfYEDaRNtu9GEjGpfoUc4iuugB71eV1xjd",
  "key41": "2wzYzaoQrLFhTihC9dw8VwmQPSSv9BGuv9h7iRYSpGnsgamxD5iah1cSP5iECQGCTkAw7yhqnzCR2BCD3Uvj9NdE"
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
