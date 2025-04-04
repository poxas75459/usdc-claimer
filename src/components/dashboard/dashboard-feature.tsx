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
    "5LHJBWp3C6FrptLoNwc7Z3JsxAq7CiMDYQeoiaVrLNcbNA2hfcV6pQLD3FzBkAqj6jZjGC1uSiTRYJrvdMLkA9mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tz7SFY5aDT4cXcYB6sSqkC4KuAS3vHroQdDxzb6iZistbWrdqErFxkuELk6dBAczh7RMFszF19iSm52So2CogVm",
  "key1": "2CHDgCNGAXynucK1AGvE89dWdeAAP2tZM67mKB5L9KACNtb1WiWe9SupaDaZZ4BwXTF9sbvE5tUXtL5P1fNvnAyq",
  "key2": "4FWo3G35yhPACuvkdrjQtE5eGjTxjAjJA8KgEnL8rLjefDRnQ7NpL63fp2LKdnpHrD2rLntT7aR8kRqAFeVLCovA",
  "key3": "2cHvk94qd76X3awm2Fd8LVfXxMBBdxmzT5hrv8mXdfoNkgw55i6BrznzBxXvRVPpPdvieahFGYPfmKXMYsMNcKH9",
  "key4": "5by8DU9bkPafJzTVZ5fDu1ehvYiSKhTTQaBMRi7gZEcfUFo3FPhmRffDYYJ4gX1nUBEjuBRNtkNv4vmj2eJFyEbH",
  "key5": "2MgoczRct8dA8ob8ULkYakri4FEYdwmCGuAiCdyuiZV22X3nKgA39whcC24Ea5nsf6YoF1w5i4nihcA9H81PsCqC",
  "key6": "5PDpTZx4C4235X6bCJafGBah2haGdfgzNWKZgCCHyPUb4NDen6JmX5EsNgTfofDxPLHDDkzaYZRLfJxfrcHeazRP",
  "key7": "HPuFMDARJiYx8evuJYtqGJM8YePGtugkyPAM4ZUDSaWMYbYEmMSJYw1LeCAeypHKaNjTucYn28dM14BtPVixeKe",
  "key8": "2cuKj5kVRgTUnNg3QtoxktpU3wAoT4DgXzucNKXhsxfkZUAGovBtxgZSBsaLyrCex9jFrTioxNCeQyKvihQkZUXZ",
  "key9": "5jtVpqb84kBLKNd3CEyVtyYtBcrw28dG7rju8i1rdWCVuf6J6duhBdD7tFmFQXr8NbkqWAsHPMFSnnDyvtYkuAin",
  "key10": "5rxUE1Xz8W12gLEHNerST93GjvnfRP9L9xykm9AyR9uWpQEkTkytMffdGxm26XkByffk1QN3DbuSvpeQWiEBRs4Z",
  "key11": "4Z1wW9mLt4f3vRgtjjv4djCGAFrJNK5AULtKN77zE99qih593xF5RSdiNS8mQB4Gr431p9bGpLWwdthhoxSSmXrH",
  "key12": "3U8Rebb8rnrukth15s6SC2gWQvmtC67mvqWZQNswmLN5bPeDUHMmSjHiWg9wbYWKzn6aEQ8dEEtzPkqEAftoXPTY",
  "key13": "yNBAZ2EBC6p9oQ5XQW3uhkJ8vZ6PudyPZ7JEFGtuPQU7ZjsFBX49Vx68mKSKpqqgXgqvg6W4MSN4qY5pCs2Jh5D",
  "key14": "2m94t6QY6hpRSDhLS8GMDjTMpbt8woCkr2K835VM2S3bEgz8e9vJXTCcLQqfBbqfVf7n2r443s3HNFURPDL5MyxP",
  "key15": "5GgyPWhqBBcpQHELrvpDN7T3gpDYKEf6N8zexUn4mhLpcZmX7E8DQ5u92WAqWoutHNgLHi3Rx3k6hiQAj8wRRYHB",
  "key16": "2U2X6974sXy2N6gXWGAfNwKLUaBvbjQ25ngkiFJ5p7De6UPgkYWF1ZxmHwKf84B5HgdcMGGvRMRkY81MiT9wsDjh",
  "key17": "5qSe73WnSZE2eu9MjtjhAbnLsEeHnDHGx4goLr5ocivWxMaMkz9MQsco4G79hN6wX8yv7tDDMd4RLowSaxhedBnS",
  "key18": "3ttYYNvJLLFVC1yjUAZYGbAYmMn1mh5KC8pzrU5FUcD61vZGStzgx1LT9nno8cfGXYF5kBVAioLjDJ9QtYmeR9rX",
  "key19": "3Hj6vLhNjTkms38VgjmYowXVKBEncscks6zXvcDUhNJGwCKsvgiHw8Xwr4TmjkoSHcauXBqBZ1bbg6ZyjyAjk1h2",
  "key20": "4QNbPcS7SEqUhWc8cGb7WEe9XHpZHdwmhyhhjpDbrUqtL6kFAfxsT1G8NxczFTzdyovd74sU1LisZ7jRRGosBWz9",
  "key21": "2yFMiEFsUS5srmaDVqduFZGSYATMPHrV4tk6YQGte4eNbQDg3ZNNwHs1eznzL5eVxsA4swGUxxMS7boZYeSSzCAs",
  "key22": "Bg6fYD16BkiMd7Q5eRjjEXfPHPsGZ4MPQLnYsnXSubogXg4jpFd9UtK5ZjzuRTWm4sRcDgDm78hLRHtWCXznoLp",
  "key23": "4yU72dG4DYyqxjZdGE3UF4ei2VR9rXwoPXktnPfDbTz1DNoZ4kkaUqfCGZo4nG8NYAVdrno5fKzkr9bnJ12fvjkS",
  "key24": "3jNTmKTs7Hhxy4eqCNxfnK7LnUdBnzoriezjSE2LatxXYw8oMbqEAhCMeGpdeHPikuFebEd2zebwbgwDM78BhmCd",
  "key25": "4pwgojs1LnwEMUcqy2zYiXJ6DMURcL4YajuJdMhUxNjbJouS6yHVYH1vNPDGDkWQojsLMNxvfWY9bcBitGSfF4rv",
  "key26": "2efmLcQ4XgdU72vTkZ51FFndXSQ9pD3K34N4ov9u8WMA8h2M1XVPfmNPfWDpMVwaPxTtZesKGcN1tYpf5Dmb5DuT",
  "key27": "2i2hHr4rL5RGkZsCeb6tcfRwWxJ5yWH9WHR1Lm2QuM5C2GXWUPxDdeUrZsMGhFu1yx4He5bGuoFDiuC8atLSY4kV",
  "key28": "48rL6VJgGCFkfTctbxHdZrrQFtSDEKGpF11cLHLZPgj1SGsWLopg7Y7MBd7qE1zYYFtevPjJRDBCnBwax97jhRdQ",
  "key29": "4ym85gtARDfRhLyHgtUE7xyZnSZd8Pjqe8ArBdrb8538WYdbz6cwySBdhJR9r5Diu9emz6QfqzkTjEvUZHChaqX6",
  "key30": "3nQWzfJ2vUkPkYfrV73Yhv6YdmoN3VFZQvuMci8JQBuZeSv2L3mAcwQM4HzENAMZYWrsTZjWzXobnU47WPT2TPwb",
  "key31": "5NZYUUimYaA54jVBskgeUAtL5VvudsbYmHosD1dH1qPsAQqXAsETKiznZhCWA7w8rL82q3p7JFPamGd1LyhopE9V",
  "key32": "4pj1Li3DwUst5XZb6fGRGh9ke15vwPLexz3hve51HwhrBie9hN9DB43cHEEe8kaFJXNpiXRRGRZAUDcNDFXSmeUB",
  "key33": "3avccBP4HKXK1sP1jWG9WVML9V867BCmVxTrDVY9NkLySP6gejrzV3r4Cf27rJtzk9D9p7SkLkhhheECEnVTfw5N",
  "key34": "35KJwFFy1iKLgqZDrAp1FptQd51ptdV2FjNpb4aLfxNp5nHymWTFUjKYKbfra44GAckkWU6GweDotdMCEeMi4Rd",
  "key35": "3kDSP7Y1XnRAqBhqxmjQQRFfkiRjtsWjRrtPswhkFp8fAJb6TSDqUE9w8uVuM7XrUVCmgkmd8Q2kArAmMQxb3WV",
  "key36": "2afaGHn4tjHnBpFsnK9tcNsbm4UdNSBmXeJhQSKrK9BdLGWqwFcE329gpwBY5Y4ucArHwvsxCDT5bhvMFjEm9RoH",
  "key37": "4JHaXWtBL3RSaFxxQFMHHRQYJ81NTMkw797pnmA5JX1pJ2aaTK85sk3K4pEU4EYkZtH48EGu6eCcG9Ac3RE3WZrQ",
  "key38": "n58w9eEzNtEAM64n6vDdJkgQMZh7LmpgmfHCccqQabaTD6sZWRKHq7L2sffgYyvrKnxCvgqExNFqegXcVhzjBuV",
  "key39": "3v2XHKty3BpqBuosmRK3m67rkZMRafSmaddaP1rE6ia26DWeW93GWtVm4YyetdvfBwrkdK72ft3AsruiUFpkVwy6",
  "key40": "51kXPeXf1WLNB9gv92dacxn3jhyqc8rRVktmMeFsKWZ9JpqpLpv81TCPi12eddftiUJpBqXKTDJuMvBXzk7LZyD5",
  "key41": "MTDGqCaJPG8mqfWkwd6PRbuSxxsoqH4FE8uUWdKVmMBCiCxJYqUJ4URoD5Ho512azUvbRHWsB4WUQcFLBN7crDe",
  "key42": "2rRgaD5ch4sHoQHzKwXfz4UoBhBqYMie5QQRYvJMseb7D1VAcyGug4YX5RwTYv52bfiBxtEcPHCySzxvgQ6HCF8k",
  "key43": "2g9z5oVyWShrrAHFCTv1zHhf16fj72mwv8e9uQUzEtS8AoARdMuVZF9JtNNSFmT3kpa8HHTPT5i6DmErA2UYUS8k",
  "key44": "5fnVVESkqVtMhu86Ypf1HtKnakrfKmr5418j3vj5uwdAVqyAsQzmegTvhWjtjvBwiPCQNj6msC24kUdqM9rPrUaa",
  "key45": "4bGzq22RoUombFpTWscFT9euAEURiAbaBZiPBbBgH75qCbHXMMyMTrb3ZgxWx3UBxUCmEFsHdXJoRVmqmQpvmdoU",
  "key46": "5yBAKrKcA7XqhcMxvVyzHtaC9a6AFwMUApsM1X6bA5ogCdXB3682QZB3xT72kruGbQV6JHzLotVxCr9nZ7E6zMYB",
  "key47": "4MpU5UeBvGV4kyXnfCAYoukXtBHhsvcfuwvv8RZbnsRyHAJEtKSFD122bu8fSAyCePpMvKBMgZGcUJ11h2chW2ga",
  "key48": "UgRL94DS6u53Xag27HUdBcurfbVMabXzFCsP82E3kxva9vLzLykfWwBDfskxCkhp5ZTXjhuiLGiRdz8rcJKoKbz",
  "key49": "4UaVnu98h7AZuYe85DXaJtza8NM1vEnktbUXUYUszGgE26w4uXXJ3LSnKaeFt3yYZiksfnDC1RzyvwXhGujYcXvU"
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
