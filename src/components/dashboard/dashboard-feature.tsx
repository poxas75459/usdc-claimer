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
    "2QUq1WAXWkkynWvdrpnpxwfmao2WMZSNCfV5m39eKhDYyYwFkgy1CBzwBSN61dVMshTNhM4p8Z38EFkPc3P3Q75L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAbuEiuYrpWXkQNcNmRFHPjvUqufA1nJUQ6hyDyCj4SYt5zVgLTarXDJWnUnRay7Fjxv1VCNH1h3UcrmhAro9vX",
  "key1": "4gD7oYXPLq9QcbYyMVoGq3RiGH71TgVTtW3tXTGrLXgbksr9G1wSvZsGTB1SAfnTyNizBzRFJ6qMSBsVP1fsxeN",
  "key2": "yfNwf1LeFZzV3nYg9wTNpqwnD9GSaxWGrJfdQx1WKmmLQj3wLDVkKwXCLrKcrbU2bgxQ7KKsphJMxWJviwkGw49",
  "key3": "2hkn2cKq3D5guL2cp5wkEGGhhqkKYpohxzGbtMJqfX9rbQVtyCUmdkmqXRxgufR3mYYhQwHGXZ8AvE7nspictL6x",
  "key4": "5w7eYgXzdSJ5PDNs7wbG4CRxy1meiSp81yb8S6oKCwTNnsTL8pdqC2ZvxorYXbWpDP4H1bFZBH9HNkRKJtCRNPbB",
  "key5": "3qYmYj53Xt8gCAXHcoEV8xNQNXGst65aJY2DS5dpFFZWxmneMEmLagbx6cqmWfQX8ANd6y6s4DSRwRFG5juk7GWw",
  "key6": "3jkvieTBx3BGeXUkHbVaJvhEj9ibTinVXEfpnj2XehNGSF5KvVmJYZYYtb1YJUrvDdisdgCEwyS4P4qzuALm95ff",
  "key7": "4GB36fzwuD7YDNXhF44t8hTV6qrAUT6RyQXw8344yFHyHuesLVd7wjKwzXyNpRRE9VS5SEPnGn78mkABdFa7Dzs1",
  "key8": "3mFqKWnGBgAYXjhaVPyQYBoxEyxL4FJZnsQZEBxqsBh1Cu8AR7ztnAkFwW6SDeeZjv11kTxUNrddHPgrKzKqozvB",
  "key9": "2aZj3q1NWVAuNBM9YtKsx1j7qXrErYX9f6WFXdG9F6Ay1mvMy7EAAS6EVQ6ABK78tstW9rysdTGy2vhgDRGc3YTD",
  "key10": "5fsGvSh4kb3VwbHAAC7WXHR92KWfzjgCmcZge7QNQGNVb2VcCsFqgXzcAHWKEKd129fXPQXgry8gMHyie69XNcsd",
  "key11": "5i9QcvyV6SEdyYa6rFCTmXyE4sR6pWEY9nWygLRK42t6Eo85poQhHmw5wtJSnDEnQPGQqrGRWoiRKuCYA2NWFbZ",
  "key12": "5wLiv7kfBuQzvBvPVeb3rurnHxRDgLy4dQTaVbeiX4u6nZNarEjT3srbSzmjuiV8RooTFDHaSB15L5p3zuQ58ZXs",
  "key13": "2XrC7pLYEjorG1v1y1K4EQqmnv6L3SSYKYyS4rMx6YsxmJEw4YWzRe4dTZ64JYJCMWdPXHjfDnBhkbHz3nLxnZkU",
  "key14": "23vRgPwcU4kqLrDS1fKHsg5uATot68T4wKYqLbgse25Zf5Rwhp1mAXsfCGZctP8rrfN99wRNLhQPAhEdPRHpbBgK",
  "key15": "3Si9Vh5M1hJi722FuxjoVFWZRr9BtSBo4HnHFrrXfUFHbZcUie7Ad84Yn3pK3wAd96ErKEgP3nebbchFLpRUDofN",
  "key16": "5ys47qa8N55uni6ZK32mcmtURLhk5mXZUo4zAJPaWtrnn5Q43aBrj6f4fifcnVtHUdcjuLKDuPPC8rZtxrXxoGPY",
  "key17": "f79FzVF2kyHHv6BjanosWVEYywsr9HiTm8Ykz8XbGDGtgMDw5JeZWPRcgYXwUCkQiqCbWS9bQopAVbEn3uwFEGA",
  "key18": "5kzTT3ii9WNKwft1DH2FE5ba5mJ9LypmfQuANqazgHqdApncjbfPWhDopUD2iRE9Z3ZE4ruJQXnRmtt368GUTvKT",
  "key19": "4GgTHPhPSAu7VX18YogakMebbENrzEcLumtxseM4tGDQfy9qQeyPUbzM6qH9uNALg8eJGk2KEKX5pPvoNhpKkmEr",
  "key20": "uXhBvftD8HgZxvAbyL9hHKHr2D9VuQXWhDohYYKHktkemGnuW92DSLbEERBfaLE2qTPJSHLEFySqrHZ3rkFq5cT",
  "key21": "1hBVFFmMME9Yfe11wmxfnznLE6XHgBX6prwqvvGZUceSnknKPRwQRbDTksD1Uk5Yrt6vJjLABsCPFAdpeEbFtzg",
  "key22": "4DWesNkGyeu1gANjg6bDAKfajurTHTyrT4RRXDngMDt6hNnk17mfZRLPpa4LmtqfEZPC6LsjUkP3vwfBmxQkY1jv",
  "key23": "5TN59yr9WrfgJ1JurKBWMKf1LtbuFaAW7YQ7pzwem5wKaYXYJrj2nsZxHyvbaxJbUegfjJqz7DuhHda6i2Hbq3oP",
  "key24": "5q1HcNxPtGKc67VvQfryDiR9ztNAnreVZTFYpdg4d5ag1gtK6oejHJRT4pRRspcxtEWSRDGMxhRt2cDg4otEqSJQ",
  "key25": "nchGcNrov1ECoE1rfRUKWvCV6AU9tqt7v47m9jEFtV771ac4ZaGBa38HsXzDTehuat6aTNFUvX2nT8jgree1dk5",
  "key26": "BpRGMCLS15JnwQmp2x672TBFqPQ8iBUvsfq24SrNJKHyLkGSAPgShj8ArDq3XMQbXXV9yGiZHXfyt6RBPJW3fcy",
  "key27": "2Bos4zLgNUnnspvxdQsMZfKoZ2aSYJLdThjN3Yb7tW6tPu4pWjbwdsLzBg6ZixDwjiq1HKtvCCnw5tdizycEYPDc",
  "key28": "4tzqyT5bSrULuoYQ8iWsev3vdqKdRE8RnhT6Z81W3amd6mhnArXiRj6ipu2pZ5QJGsQRNf2YHfYRRZKjWXfoBTqm",
  "key29": "5qJ3oiEVdCEGWrwmdkUgDDJx1XLxsRyGvu7v7JYWLX5WgoiprjMqRYrwh966XKqFLDa2Ru7GcsWVWkj5349McgZi",
  "key30": "rffA1vTb5gWjjPusDhwGSRbEgkhKkCyueEPTkP1ugdAJc9frHMV9Sfytp6RpfgTvP18uBfHvWysLD8Md4mw1dBa",
  "key31": "65oXkeJLE7otChfgug6ncoRCoXb1mBsGHnNktRcrf4B8KPzKXHdSWdp6DqeJsEy8dv4jQ7fEApdPAjWrLoSMcBAb",
  "key32": "5pdUHght5BTFYzzNC3ideTd2XB1bQAb5CNqxuSdemTihpM5grzVRWYPBtFmUsfnexhS3SMxaRzoy9U9LNVZoWbWo",
  "key33": "57Xj8eJ1ozQDMpnzZkC2E9GbKxPvHs3nqeABSSZZvStvRZgXZeiXngeGD4a1Bp6KgPYQ8dk2bfDKAr695TdiG4X3",
  "key34": "6Hf7s4h83VDp7hyzYvr4iNesKLSeCfVG7zBfuiG7t1QCP8vVAhQVxMHXPbPXFfYCciBuBRKsBkSf1eQb8S4dPrH",
  "key35": "5bvfKBjgC1ueVJJmdfh6stPJYbvQz36wHgaAGwnnPngnjPdQarNd1ien25chMMEAVYKB2j5FwvJWniMekREZMqSf",
  "key36": "3cgByYKZFMF3JYx6hoG9ocjGYFhqDbYMHjfzMkLeAAfZyUETTFfkCe188joKALCdbo6YHSupbDDJMmLq4WRDH67p",
  "key37": "Bg1syWxzuYudF3n2X1h1z8kVKg14n5AD8BbL8SbpVVcYgLU236bhKzvhbuDXV6RWUXKs4e926cJYeN5QectpSYF",
  "key38": "5qqvs46iGiTmJrY6YfYAboegiwSKmD751oCU7qLEVvNeva9eQmCaSuV7QHXW5JkWyiwqoaTbH9JkghNYqtnptaWZ",
  "key39": "5ysHW9kEpbokoCZrfJX2T328UoEMZH59YSbhkvsdotygotnAnskd4eY2UtX8AeTbm3iTYuz8M7pt16ABfbfa7vn8",
  "key40": "4GXivVAk5P7UAc43a6cKk749choUMv5EZW1aRkgRcgK74jinyiJtQV7VCd5y32x5rt6ky3WJWzaB4NYd1CH1nHjV",
  "key41": "4EVUeAnV4Pjt5FZZrK5tkySU7gZeRvxdGNXKNCQA4iawRmgxPPXdQNc2eds1TSGNcqdhY3SneUDYgH4kJZ1whjid",
  "key42": "5SLkBCKqd6e4TUwBKFaoJg1N4FfAD81NarhNegQGh9m13a4k9nmLm7vnhnbyoZDypxK4wwe1ayn4S3AHAKRu9QJm",
  "key43": "5aTCaDXyaspP1MCGAMgMoyZbQrvNZCVbemfxoafAvBxBtywFYhfxf9X6Y2Y6iYVxXEqbjHWLZrFb2eLfjXuy8Ncr"
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
