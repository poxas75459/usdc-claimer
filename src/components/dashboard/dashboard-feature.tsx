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
    "3LZNHMgyMLEhkWb64RLo25dWuqM32JXyYY47ubXMKN9WdZcpnxHTAuympZ7o2RRvK1XZvS5RdKfhrjiSBEmetsEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2y1xKKybLxhTQem3Dq26FGYAo3hHgxEanBkTREM7mcH3JvBYWnGNxz7zjbNHfCMeufxrP2bQPbKBBgZodRAsa8",
  "key1": "2S3ePqjS2VtGrXdKSHm3odTkYV4uW5ijDLTjoPzcyGEuLn3dfzV6YMpfFwYGrk3FKnoHDM7DQ2m3jt5uTVgrQ3aZ",
  "key2": "E8Hh3ELNiZWu7yGFgSwiBW76MkCutByt3zPVj9dmD7Uz6vU1HPAkui3kTYDMLuxrgdsDrbDhB11jmHEhYyUn22B",
  "key3": "65Q3BN7PiuY5Ft5Txb1DWZbRahoCFBdbuB76tWab38SRKwLTs2iEVSXuGiPhtmphBnh9VqqNDWMXkFaPctvZTKt1",
  "key4": "3RQBfPBCBrm7FkugS2JCssBzsBihSPFvzXD9NZ39B9vDKN8zQGZGsb2gmoyBRrsgwaJkrM6YqwjHjzXpthPgPfEE",
  "key5": "2av1aQ7i8vF8sYhBjgMiSeNkB3w1vVVftxfyFQW7K2k7Zw5aBZ71B1En33ugZ8pJkMbB9sdvdbamzEPe4EDzPTnE",
  "key6": "2sSqiSfJQ6eV1FovY9MmdTCsEGJCKTBZ4cbDzngQG4vBNxwGFvA5DFP1XG5q8CRQefGAA5HvSofGCf1GZrVs9Ahs",
  "key7": "3dJV2iNfs1YKN7wvfquFvKpck5iyoM41EweNAUGcZU5KrokofPkkg7sg9RtZJUawYywVuG1UNB6pyxkggLztveAF",
  "key8": "21ttQpZ7FG6eQHVGgdCNk1yzp38cTxJWgk4Qz7sDctDGngtC2DSpVDftNgEMayQNuY67xfZ9T8H9F64vDW1pupwD",
  "key9": "A53pDSeQPXajNBv1YkQXs1yrF6GiKbATKApNNhxogMyKw75xpnZzf6SJCDy1VHvafjore9thPyfvwRgKmvEFkpF",
  "key10": "49oEKGV282J2xTRXmehCSm4TDbfSU28xwq3UNm8FF4L7DssDaP3q9KtuSQWjHD77mrPjWxkA35yibP491xqaHSwj",
  "key11": "3entLKR5USNqC7mGBKcYNcMzhXz82aZvXTSQmBAVf2Qx4uxzpGdGdEwM55ffn6u6Q3z9B3AbxmaJqaYA4MHRvc3o",
  "key12": "3Jw7k2GAnXKQEU5FKcZ8QqaWyryFm5dZSfMycM5WNXjgWiKzGsuieyCS5WibTyPvPJYqxGiQfwZULVseyte9NAWy",
  "key13": "4nkvKLzKqtMeUhnggcX26aaRQP828tspn6FyUeg4doiDuPfDPsgRik174ePhZa3ndqcmqnvNFHRLRvJUtbezfhaD",
  "key14": "5gQZ7REMrtV4RSSS2KZHLd9i5QhQTggrnqnRK2ixM8Hh1DyZw1WyLFGSaApF5JZ6vD4VY4WqVjZJFTRjUoavpHv7",
  "key15": "57pQSr66CnNArcFmQk2nAZ9AfmQQQtKnBADaLBHVhEXo2xT3beENrgqbdGFrwPwS3LAJG7GxFb1ctcHeoqijQK3e",
  "key16": "4qEK9Yo8TmhaZV44CJGVjoHR4qseACWFUVs5We7oEBhnpEF8jd6gSVYvFjK4uuQWHJzYJGZZmighi9iZNYfECZwq",
  "key17": "2DgCW6Lzs3WeYj22neqrmTwAj8mP3EfFG2coDoGxnp3mHdysYi7oAqpr12jJtCCEymJbnqbmNLnquRyUofkFh3Ho",
  "key18": "2Gp51FKhXWRaSHUNyAp5sBokfys3Q4EBqUqtSnEDAyjDLPdcXFVcna1M5w3mKtT8ysEbUe5sxhUouKd5ycofWQNH",
  "key19": "4WUktanbL5uX3g3mHs4ikiHwq3Km1fCxemWJe15DRcGbVTudRQKAaBUuva5QV2cMZ3PLHMQzrpyFzFxzSjF16AGm",
  "key20": "3byrLW6WYa8Ub8VaDFudpCC8Xi9zkJGJxesYNMivTP9zM9CNnFzHJyCyrps9BWnaepWw55VkSFt6e5dknNZ2yumM",
  "key21": "2eXwwTNc1m5vtii98bw9Ud736A5RZ852sJPPzFzgCxa3P9hYiTnyrrfu7fV4eCkAUDdokp9xprRhe6XpZDtbNHqy",
  "key22": "43P57oXPXDwyRRp1odU4NWWEagbKWBAzDkU1DBKxMCUCd7kdmrKYhYzSYVVdXr1Zb8TmHTi4sxBrfz9XSMhRLnhc",
  "key23": "64A7qkheCAii2sxkXe7nVodSHpruAJi7hQa5ctoY1fsQjmFcWDcPbKutKNLXTKiBvSzzyvr5usZ7Tvn4GwwHViX3",
  "key24": "2CCrb5JQaPn7kPWqVapPspm3DXwQjiAhSoRMGv5tZooqQNxi8m3YJ6zLo3bi2B982QdEX1w96i8o78NFXtddHcG",
  "key25": "5bwHTFY2WRaxib7KQmDJhQNDSF1ZwKvF54rFkdjY6jfJnfcyxw32QCNfyTxgj7bkxMLxrNzZejFSsZtSyfKkfFw4",
  "key26": "4knmx1tAQyBeBayvoHusBQQ31mhtQwVbfPW2kaFaPvg4p5o3xKMjzozCn45i5KvUYuPQ8VeJJWJX4j4sUGuNoe6V",
  "key27": "4tXrjS2cn5vGowp9bKdfWptnbawdCJnt7cejhYUCrVAhZD4Z8kMQvKyidTkmC99CyYso9aUZdat3rfTrBHDnB3We",
  "key28": "4o5Rz9Q3FLJSc3MebJbXWdGRLhwBTm5bBhni9mzigt7WsJ5vsLqsUrJMXnozbGenKn8JiPYEFPZbQRMz4wNUaMfJ",
  "key29": "342sRuWYftwBC5wDWAxEkWwJ4RbwHtx65CBf1tPr6hZpGvVn5GybBNHNy9XAX6MofUNCigmczzQ1ipZYh1ceK3GS",
  "key30": "3YFAjzbYJZsvPsFa8ZkD3fjw8XoGiaFPVFebSuRtHWaNguQuQdmeDGxZ3SJTjpnin4i6NqUCbb6B45GZLXJ3DkLA",
  "key31": "3YCx1ei9mFsBr2K4FwgLsCgvLuX5KnnHXqUZnh8y9akv95DE3sfXhqs9UrN7m8dz3WAZGuSbMcJFwUSrP57xGn9f",
  "key32": "36JnCw36HzbUkL2jVDyEfnpHaLL8bVsfUb3iN6P8aoybGgqi967UYabPETdb8uMLVwDxJ4CK5eo1j2H9yHXBzZzF",
  "key33": "46xfet3q6z2bCGpqu8krMPUx8u8SHwmJHXtYRWmYXbJTcd9wQeMSdHhVTFuh9PUpZj1dr6dT41RDvoEjMeVv8y9c",
  "key34": "4EjTdx4cx2MtEniRGWArZUHgtVvhpddwR4xjkXGGYJWCpDM3BY7Cabym8ckgGfGtgLi9La7gVkTVDgCC2PPn96xg",
  "key35": "2aQLWYVPM84GEXDXbHPnPCaGFiE35MtA7sHWeg79oM4qEH1Tay77kH6AFctRNAL5vf43PP9oVfEqcxfaRhAD3bsT",
  "key36": "2UVXVSM8jyKUr8VZNCbBqNe8tY3UGqJsVRUtqkQH9ueevXQPxcFymR6sYF4zBA7pEvpPM12dyefHxsgKq9pRQasf",
  "key37": "4CiTsMEtwDWDeYmLxPtAKRhvaVXJLJ9M7HeniyfpRHfAKKcenDdXCBGRTWGCXEoW7NwMLqhR5b7U8wEVkVPC1cYU",
  "key38": "2BshiPUypCy9ZB2wSugjFAQkGWEjecmjGtqwJgM41GyvcYG42DZfZpE9X5uFDmJG8z9GAbyB8YBkX3iJeEZ3wUB1",
  "key39": "5qc6baNmgwXcvDxFn9xUMzGcwiUa1rq1oe7zu5jnKLe9BJnguoFBCoN1mjnaHscHvygZ99wHuMc2YWSNFfPq7Nsx",
  "key40": "4snQCCuM8uvVMQZ1ipKpYrDSoA4gFjM3TW4eLVR9unbiXwE1hTjJbs29erbKviFkBL3V1zkX7mcuAr1tw9L5ncKy",
  "key41": "33TGGpVh8BrP3p3tRugPy1U2mcjrTYFJ1T4R43woCGWRLnMDdL2pBHt9hWkDqxCUiqQLLcLjfdZxGKjFPRiJkZWg",
  "key42": "4oP4BfB1F4fr9qBqSg4a87dbkiFAUJpwEkFSJHzsWM2WUwPP94vGHcvjBRpPEG7TgRj6N9v3ts56CkCMhK2T819j"
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
