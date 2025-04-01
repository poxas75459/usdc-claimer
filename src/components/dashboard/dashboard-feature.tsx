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
    "2tadQcGzBgs3Wf6GRvWTzEL2h6yW1GaQAKKMfoQsEomHofYNCTAH7MRWD7LujbiqgWgrTPiGDXQDhFFSh3qpeFsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eWm4Hwbf2ELu4F6DmQFmD5S8CYyfjN4JrWvJVHXve6EHwcZN9XBCqD5Qimv3QoBof8Y98WR644Pz1e8ZSF4P82o",
  "key1": "hbTzpjh41SzzavWECcE8fxBZuXao3FfTaWA37Lqk8DkrByiJUSAPdxkNsGrdx7b2znhARBxqPFcXLw3kAB1dfFq",
  "key2": "4nYAE8t75tkZpAT7aF6EDfjXRLsbUVfSV7EMK6k4LxZwiTP1pfHL9oPSTuKmUJTo5LLdLNRZ2pBkPHTW2L4K6o9D",
  "key3": "4H7d3CzdScrzMYPzMRAJEffVZWyENdDq4bJyAgzrG35kJbEdu4czzW9C7GBZ6mta1YbKphs9VDeQVt3a4Ri22tFj",
  "key4": "5gtpKvvYKMEghbj9DCXHfTSSdE3WgsaM5nbWuHKiBzGdbarreFW4uiqy5v71kcqcXbE6Sh6i9ciSk8D5VwqBhec7",
  "key5": "4uraSrBzQLs48sZPLvRrwyxyARGGshgSMzYKPMVanFokPjePfZ1JTFfE4gci7cNffmdYqpvNq7zEHgW5cAqWCi9N",
  "key6": "63g3MAQr2pcri5jxX6ev2NpgF6ay1sQoaPwi9xRwp3UhAvFLseiipG7vaZMHyQFT9R7XCdfg2NANqFfczqXvs6cu",
  "key7": "28NNvkkoQa4Xeptt2VSnZ9v1z7jvtahygmyqbWYn8ZGdw4XM7xxNTUiM6nCKTLsWrqfRqWNhiYMpTPCCTmtMag2i",
  "key8": "Z4yYhEEWieqa6aosxiJL1mEuYSU4ziTMF3U4iyX36fKiaqNQPUdE8Yk3szrsQkaDgMEnozV6f1s9VKeGrWMTBEc",
  "key9": "EzJk22d86n9aHNGkvyfhDbXDxFebZHbYDRK5Yqhu1KWDfYvLqA3oZg2ofRsu7GUbhXfYgzQGE54Xz1dcwxw23uu",
  "key10": "inyjr5oMoXgpUKS1tkAJXPtkS2ns4URNZZiBWJ53JoFdWyzfRXjEyN4fmJySbvy9KQTp4LB1hydVBKUf7nTyrCL",
  "key11": "6XsdVSM95JnbLmBtdrnu1m9mM6pzn5Usx7HNytNCfQCoZY1616aDTWV6PnDj3qxshJsCjNphdNNEWbYWc5X27d8",
  "key12": "3Y4H2BZ3iVxmx5eSr73989SV7TU1YWYxRTTkkbdDHASajHZY3BJ9AcNiQqDERWpaCbfXpr2cLe2ZLUpwUz1KF8rE",
  "key13": "2BPVnaXTXq6iwUJC9YDGN3TTLa6NLcVtnakQKyZCkkH4kWUzcxroSQJGwXT9y9BeBuTHVowgzcmDeYFJ3pCRtvJd",
  "key14": "2zJ8xRk7MSByKgTrzCgKZf1osubnYSSAcgZUDDWL9Hmwd2Cig68wAwWgwYKPCMgjap3qawS1Tq3hKJtUeCj1rz1g",
  "key15": "34Vkbsuc2uf8fsbCR3RQPw4VhxdxfphifMdPc2PYKKyiGsZrE3R9uDtLV3xVhH4UH6oa2iLKxADaS9nWwW4Lt9iW",
  "key16": "5dT14qF1f2FLzSx7PMqcfo8bpasovyCDk2htkipNYKDN4NMTh65kkPCvfEAvtZnDUEwqjTAfEzxGQrdzuf7bnq1d",
  "key17": "3QQLfHT4df6vokH2dzBjKgqnukamCNnnE4QUJdtmrdpWXWFUGZBH9WRy7tg4gZgYyfc2pdQ6nY2pLkcuSpMz5HPq",
  "key18": "2ygf8vFNLLc2xmi9y8o3MGeCKRcaHkUxrWKDE2scby8VDMYZaWZnjUumHZ3M6HWbPxwGmPf63LFNzCcE1W1SyksL",
  "key19": "3bPYPKgCPyTMJf39vRxLYwQBuGTsX7pqAzKBK63uWhnSS5TRTeev6j8T4HE3wt5FUy4hrKWpuN6dJSzruFXQ5r9D",
  "key20": "3Lnti6CwJfpb2HBFdZdsNuKFBcyXSxEdV1nUE9HuQHMivKkZpenGhudf3a6i89oEwf3YsqpSzMTCcefiMLc5muex",
  "key21": "5RsaPWW8oeXXgTqj3bnA9HzZSoxj2p1pMSvEbKmB4AhioGfGzDptsM4V29YmxAP4VJSJPwP6nCb4y99a9iy7Ef98",
  "key22": "387SoThE6n7RJugPrU3a1Xidk3VPorNDSU6pmi32xbSawjEi8jmFmWZWBPuMaPq6QZwsMFp342nsF7oh3zBUwTFq",
  "key23": "kVzJPi6Rg5JFMvRsDwQkanzUdzDnjMDkx8UNMaY9Yp1bJFgxZ1ZnMHqW3heJHc1cpKUUgr7umubwffrCiZdZkNH",
  "key24": "2HKX3mHXXFWKV4zfJWRY48dACsfpqgWpZErNYbGr6cdDr3e1GCo8NJvqQGYjG49kRkreD9KC2VHv9LvCSkWTkiTs",
  "key25": "2gRHXHcPLy7UbBghZ55GsQBL2Dx1QGSW7vt91BmyJJi2T6Y3mGuguPJcYfXfYzmSpiNv3QaJ9YbaQKuTXxEeWCpM",
  "key26": "3er1CbSwpQWatd7t3kSCaGsWg8wGv57mJRZ2EpWHt52p9WWfcvLtnFXbMAHiYagxpAmNMy5sZS62BSmqcxSdJbhs",
  "key27": "iNBrjhcatuagHgUgm9Lihg88MXYfDdk35nTnWUP8AAAttD7EqxLscnYNCPadbVpNz62hAUHnNDNg1LMnXeYP2xg",
  "key28": "4fe1oXkCs3B6niJDG93Umo7LWZ95RP7K9Cb7kxDZsTSCQMU333d7Bv88Bz1zQ3EjjCGfJ8K57nQ1feX4YSPrKo9A",
  "key29": "3cxuoL4ujSjfV2k8ZRaHC2u9udfmwQpfNQPUevyftZF7HaSjU69Q9qwk3u2ceGJNLJJiC7aMH1q69SVM1bJ7HcQF",
  "key30": "3iHKmEqFA96tY7E8JTii73X7dpKC7wMuVFbmVaRhHkMpLKfucbfiZUtLmnsCHkFweH8CGLehVv75Tg97f45reAtx",
  "key31": "46y1dkrktsVBRpcdCzNX6An1cFrxbw84WeVFDTJj32gThGMpCnUUzxRV6mRAXB6F7NE3129CyyyDfEbxYvM5xLuo",
  "key32": "41o5GBD9S1LqptKWjRGffjQ9JaSci9dws9TkcQyXvk3EiZByretspti15Yntnn3cEhQs8gPcz3DcNT62SYFDNKVW",
  "key33": "5taHxmxhvqXHmySJg4g4onTpfLUQMHHbAQzVxYAYaRErA9YGrZ5AjeYntYw1wRE9AYgL6iLjvqdkpWxko1b3VvKd",
  "key34": "3zGRKKcd8nvrMNGNwgPnD2BCmguJMWY9vcBendws23iGsCL8z1yCPP7SkDuNZJBCwiWagnMX7WgddANh2XCVeYUy",
  "key35": "3MMTgimwipvA6xxAmN9gZx3uArgA3K8hBQnbFbUzStMxV48c1ok5Lzjy9LV7XS6kLecnwSWodxJxZrjEKBx296nx",
  "key36": "4CmGWuarbuDTqXY6t6cUFGkxdC4SPDgP5SvzvBfBF7e9FNcGE6RWQMB4Prb1BmpQ2hexF3nNwzqyPTyXshLrtxo2",
  "key37": "4d5e538RvRrxzL3Yp8ojorj13AZ7XoAqaqLxWPG2j2R3sLqVqA4ofKmivADvzjpKVXuKRmJGdYnohgeCXCbLnNCD",
  "key38": "2PU6HdKQD6xobT1K2K5jdSCwdGHD4bVgaLtaBDRjibjYW9FiooG9wowMPgoKEhZCXRcjhmMrYv46T9UxKvRqvDAi",
  "key39": "56TRx1C46tRKSAQ8oAZRnnGKbXjtwcFiNMriteDzJdjLTU1no6yyKjMxbfCcZanPNeWDnjchqZZYknH61zwtpjff",
  "key40": "yj64RTycsHhBw4tTB8F37LBF8dWAgNPuDVfRd5bveySczWnBnt4qQcUYNTePD34pshUbAVV9C3msVN278QqbgJM",
  "key41": "3aHUM3qre1xh9BurPJzoruy2SmH26XLLm8X1UoCBcjFeVEmSYqSWGZUa5G6m7x9SDQf9y2wtFBQi6dzGDByY2Rtq"
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
