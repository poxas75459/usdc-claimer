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
    "2pbSYMhE7ubfxdgNtCAzqd7eoRxVLoBMjShhZGifMQqPfsZ9GvyqgR1SQRrr27xSa6vhbz7SWB1ZNVwPo7Xwt4Bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tJcVerFUANn3pQ8wShDNJEjHwsDnhRaGQ1AhcUS9yZyEcrG9nRa8GkWPi9vovmRgvtEF3BLymxZgdNXDCzMCiok",
  "key1": "2t6UqPTFJoxCrD5FtV7FiiBgTmEEphjL5JJzn4TLBsULKXVZmF2scuM4oUetADPSVwhP8yxCTc52HAZSnALmkhpb",
  "key2": "5GiMp3BVwd8qedH4DxvtELeXA8vFDX32i22DktkNidNKPQZgrxXZk6eWu4P1GQ96zfiftLZfMucBMb24WyK34Xym",
  "key3": "qjhp3E9Th6vUX4aqTzwhQworzWxMH5urSxjpJGBTJecbMzQQK9NopUPiwieC8hKsfsbBGX15MsMGaySd5cw8fYN",
  "key4": "4ubSxKEjQEAE6P27Ef8Rj7su4QQQeZkje77BaKWJD5D5qYhWAF9bpsKYi4LbVuW1xMQLcudtvtyhbgU5RETPKzQe",
  "key5": "4c5SDMJsDPwZsupZ59ZGM18TrbypgtZW1JC37kK5hDGuQrzoEhMq4xje4qNbbRwJQpohNsKjpmzBN5R4sWMPRivY",
  "key6": "5oGiva2P8CUvt73MR4JtrzV86QHQjgNZCLpg8GC9XunjLMtSYQPw6QjCdKzsd8zcBB5HwpS9dfZHe8BJHXzC9tct",
  "key7": "4fh8xPHjegij3sLW192tE1WSpkzhLZSrfvswniUJCqD7s9W7yPjMFcypRbHSXUvP579SbhT5qg1wRy9wZBZFc1Hs",
  "key8": "2phfX5xdioqvWZiJqt98BETb1xS5bPVMA4KxYs5moppFxwKvU5CLo3G2RRTDMGbWBaTK18naeUW2gXAdTb4R4Y9z",
  "key9": "3zYwZZN54vpb8emeLVw4hLHMtCbYHPhTxgX3Z3xV5UaF4Q7P16mscZReTZm1AbjN61S49FBE99MDqgKTYwi5Xqqd",
  "key10": "4gUhBPcudvAfsA7mt6aWRJNuNbEE2PHrnARGuheVSqQkcQrDQphjQaQcQ95qKVp8ScgX2zgTnMbfpnH98WeNi5pK",
  "key11": "C1seXB2ARQEGa7KM2MUHNQNf43eobpBQBQBC4igkBWtudg1X4Wvynro8SELuyVk2qRGJsJ6WpghcwBJTtASTeQx",
  "key12": "3KbKVEaBkaijJ3DPsWN5qiWH2KgRH2vHXwuQbwx4rZZoBqLNU5bL33Tku72jMAtcHqB3MBkBrQM7ofJMH5To5rhv",
  "key13": "3XP6xddZC4DmX6hDSBdLeFywpmLNAubzDd8ryPr5zgzDRKgQWz8Du4iJbcnCaxnq7XD8a3hi1Dp4uztDZ5Tt1bYN",
  "key14": "XHao5GnMnq7PKTmqS4VS8L4GCQjuDwepvUgBsp6rVmSfzftjpNF98HG8i3fsu9z55tcH8WgRCpQaiomVUfu17AG",
  "key15": "2eALUbe2qJ9hmk6eZURcjSWf1szEL9esx2tgznVwEf5k3bifo6E9zxFHKz7Vbxz2YNo4f4kFR4PNZo257HuLdSrt",
  "key16": "4Fv1NBt3NaZ52vhCyiqtBkqsrB4iugwmtQU8ca4cioNuNpF36KXjADXGStZ2rmyc17yECKkhVbfWaMjb5dgnGyNx",
  "key17": "KeBhcwuDSucg6P6Fr5G8SAk4tt1ukCYRzRKTjz69FFa9pjCtj8aqnq2SBPXL4Mp7oboPaGZd3A8DGrWZQpLWDRT",
  "key18": "2PMYU4brAZzkH5ken6dHQTn7NyuxT4ybZhLMHAMiQA4zmT8EY4fkXnUwSVnnQLSVTDr7gqnTmSDo2f3wVB3RDRzb",
  "key19": "vEaHdXhdcupAfFepdyiZ2iqCmfGXdJDKtgpyV88PMKhyoHRZDhgeS68cdXz8rAavVc8LDLvAu9p51Ccg4gtoBfs",
  "key20": "3Cqm3BokcDu8qcoGGnxzBi6TwYSiipabQF87Zrun12hcGqb8dYjuHSVrbBhUopVdaj94CanUTMNmREABfEpsKty6",
  "key21": "2E2Mox9LJ98JCyWyL6hUVQxCGGTxDFFbbBkKDbF4xtMfKVC4EWsZ2GCkhXy9F5zwFYK7rQJ4YY6aXp4sYDVnTbrs",
  "key22": "3iXTvd1UQMFykjby6kUwwnrXHqjxwfabAVV4rzWARhV581EJQwkudHBGe4fKMRDmwt6BwFGMdLeshmEiwGaLVZRW",
  "key23": "3svXKzrE2LStFtuX2RmTKhY3A8dpj33yqrQvruVneHzn9ZG4nDf5XWDuNsZB6BfE5q6unczKmh3gsBJE5EBJ5s8z",
  "key24": "3XCy19HbixVN5prJZRT7uqVkRMCnrxTShwp4F9ZHJBfK11ia2sfR4r9p23Wy8URUVNWNWBavY9UZU1ceCHE9XPUZ",
  "key25": "pHmHTGBo4iauShDHv83hRM6ax4XxAzgDKXNCyaHjSs1zaNPXD7tpKqWoqY2TbzRv1NGEPnfiDQptbsiS4C6U9C9",
  "key26": "2ADvrj9EXvvzDxdLkdB2JWKSeNAMqZZigJ4ZN4r5afKcTESUds61nB6cx9ir9awCyZYDKWBurjpv8oGwHwbx68e7",
  "key27": "bRKDAEm4HVdxdMjRum6jDsg7evRsxN3EoW7k1Ws8VhywApjdBAas5SrHPXvw9e2sfkKfk5TqJhfwDVZP18dDQ7B",
  "key28": "5AHxexjdqXJc28KBciyX4YPM5hc1Z8QtrRqBazWSapQnLLiQHm5chTKsT3NVut9umQzDQJaz165fAa18WVnHKKmk",
  "key29": "4s7bEUH8hZCim96W1epDXfbjx4bmMW2RzhXTxVgdt6LtqNYvPdi9XbSyvPxGYcKbmBCeDRD8VmYX6wd2Zm2raLrt",
  "key30": "2SY8bZSpYDW3jNeRHjRBQ9e9XVWahZ2o7m1yRRV3MLBaYB8vT9gCQt4hHZbvJhYdbGFvVZFHbHAryKyATfBdrKPk",
  "key31": "5e8G5KyUSPwBkTJ9yJB1sU1deRDnypXhURzquzHscq7LjXrZme9yRumxdj1Q257KJy7jBuF8UYd2H8G8k5AXkXQR",
  "key32": "4H4ieyo6vTs9iQejZhvh7KNYbFHZ1NpFawadB7gkN2ouynm8NWVM41TgpbrKnZXHpdWy2KxxvkeoEPLRZd1gywPq",
  "key33": "CYiGTzyL8GjUFptaUTRJStoeYeUhBbcgg8PrM6amqm3SDKSEBRvb73TWrMojk4zujTPnbuccveCGRHkNELFx97W",
  "key34": "5of7k5kNVwtaWXWePgyYEW9FGFFKVdJo1sco1nnCyhuyLVKUo3HR4hLvg4Q883a7Fqwm6X5YPyxRmwbBzwkCFXfE",
  "key35": "3tnk8tix69Mf5eTgzEmPXyK48rm7N2XiVT6N1bwX5rEDyMW8SThD35w4i1k6Bz1c3fw3yBKtVWyoUc8ZaRYbGNg5"
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
