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
    "2aUxEXeskd43HTduPX5KPaEUTabGaY9bqeXxFrMgZUne7ZCEVBYgvapPiQyx1JDi711xqHCMn4zk5DxxEtJMCktk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oASejRVNHm3WHqjoAX473ecGpJ7SF886tsk1ZcmpUfHw4QrCfjyEToixkkEKP9aVyMjyR2tkwyLWGXm2yjq4jmF",
  "key1": "5xfu7AsL4982VoP8brbSf4Ei1bZFHdWgyJ4nWEUaUL33BfuNn6iH2o2Q7kDCJJ3Xa3TouutBzquMfiXaK8EY7MED",
  "key2": "2frxhukhhKKuD2sa7VL7TMDaoFQ4M1ag5y3MZbxpdXPTHRjLLLqxVEnCAstm7v2DM9QaDfL9Cai5Tfbtht4dL1mn",
  "key3": "56Ykgi7gbiv8U887enDcQfDwd1aeAWs7P4UZDA4pfjkMeBkRZoaUngb7AEomBLLuC99KEuNBNCPHPV8CS9gYvWFA",
  "key4": "48uEYiLEj6VsoX1721CkTJtHMLSFDiJKy2pbndtb9oj7LQiDrjr3BV1noH99MF9v7aQLSwhsenET3xn6NNdFwyxS",
  "key5": "f6URfdzXawHvZehu7ndzRCmaZ6UouvBVSU7kJhZEBjLncFT32ukK611SmC1orAi5jCqodwpUtghcWRffhd7qiCX",
  "key6": "2wahoMfpioALD478QXf8yG2iofpV8aG2sZwoMtXvyDp9nygumDwQbk24rAXV7NPDhptLgAawqhjmoEwV5GMi3L8L",
  "key7": "5wFAfyXmMFMN3BAE3h1hcrmFPV13Xw2iRrp23vj8AGhXF2oSKgn88qzicoYENUmsEyJU7sdTCzFEj1j6daKQFRkh",
  "key8": "4GryfkRo4NpKc8fsSoMhK1DHGqWr8BZ1bLM8K2kXtnBAFziQZ9ZakmosWMoo3dBpCEfMEqFT3xQm77s7fuq1mDYj",
  "key9": "3HdtXtqE15C8juwniiZMFGA8fZ8qr5jYg3k1GW2j6zAQt4WPp4NVwhcYVrZJUtceturszdVyrPfN6GDP8rvnPTjG",
  "key10": "2Gaz4Pom4EEbF5k7F6dBfXPdMjUsn9VaDMdxs2ZptUm1or2B5okTwKrBB7SNgm6NzZWKArnqAEGxQ9HkzNAiQehp",
  "key11": "5zBuwN5EfJi5gCpoQzpD6EwrzNQVYvJq76FY9aN19o1V8SgFmjYraHxxgHEDUbkevarjHuHtKgdWhVz4jufkrAPq",
  "key12": "4sX3ZTqJVBXsVLsB2wZFd6RfcsDABoWvQbZYmn7bAYYcG7h9P1aD8kRfSga2uReTZLv5n96H7LuV1yQynEDrJqQp",
  "key13": "3q5fGeR6GBcjNpMHhgSyzUZBEfxz3p17B7P9Hk8prqhXPiB5SG4nRHzaiWwLQveFZ7VWCbjMygYpva7HUwEHkRVU",
  "key14": "45TvtTEyq33mXcEGfN5VgBaKTcNFDvDr9XJZyzD1neHdNQY8v6o89WrwqxeFD2JST4UJSFWDgHfJvK1Skuc6fE2H",
  "key15": "5nkF1UEsB86Ti3FETEWfjZemJMgoUS6wyFDZXNKonDdSjBBEWx1sVqKAGmZC2gFFK1uiEsg8iVCUUdJh6kQxdrGL",
  "key16": "2iht3svj5t4YFHfvXbo23cB6mgina5CfsYanVQKCEhqndXF6psyppd5rrBzx3fMcbaMKGSpHySiJExrfKm5BTFYA",
  "key17": "2VmzR48GgwnpfJqxw2eEs1LPaS7bgEUVQbdVTJCPH1t7tPTtuAphSSk9x1ABoghZNhF3apXVyoiagVTKoCgY8Zbc",
  "key18": "5viDbp2JE8XZUgYoDBxWV7iDYzzZSYsRP4gNvwfQ3ckxbUm2TrDRRfpdTsLdAdhigxo1iWSYJead1BANuHZajDKw",
  "key19": "41F3Hhi4nhhqur1ksP3AGNiybMDwGyuVSdxEH9Y32FLWNpjEAEnEXa3FF1j6v8Vxn6vJLxe6qUkLMNpvg5FcYRkh",
  "key20": "4yhrbPf2Xesf8LLEyvm6cTqoLrp6syjC6Kq1YocPj4DqXpdG3wVS21uKVpMEpW5xWNwkHjB2hLxAD5L67bbGzaVf",
  "key21": "4ZL9DthYSq7nS2L3DrGAfPsVx2xsc83Mjoj5mLkq98pQ4o5SpXHic3U4BgQFfhVaESk51Adj9MNS5WBXSUrBUAAG",
  "key22": "3VEbwXWpfBQFR8r4Vc2wT6dkDWCHtFfDu9d4ZJzk4W7U7NzrUdnoz4XHskUGHnL5qxfp8FzAe7c8YkPSPDHZ9Cqt",
  "key23": "zsp6K2N8LvDwnsChEpFvGEQvRj99DZLBgipy3xitn8R3N2YcXgyutmHyDjKF3axuaLfY13iXQX95Su1YNGp25XL",
  "key24": "3vj14Lx4w1XXUoeYiSfjxEVLfpYX696T12jEB7mbeSHPX94agJp5r9DSkakitYGer8qT8gY4XZnemmCSYHwSTKkr",
  "key25": "Jgd5ioi4EXsthVDqrGLxDPBcCW1L5rSDvsgfDETmZ9q5HBGtMzVaaZcYrVw5Z1B8iHzcX6z1dDFA7fKZrYHqcs6",
  "key26": "21cyBWarWHenfYHZeTXuRYA8p1wwMa1vkApQprBr4Y8PCafifDA7ASEo3RUfyN3gXbjXEPuD2iY5u9ozM8NLDgqi",
  "key27": "23jySW9ZRoiC8aDtBo2XWYsH6MLEhNWEWSGRtBrQYu6nxHHY9UG4NGACGHX3zHW6YX67DBLjvnsfWKWQneiVt7qq",
  "key28": "3ErEuo5DUu8MSNUqUHC455mcpUc4HfkeQkWaGdmotGKsiy3yTYSXzq9PpuroA8sXRCMEoJuL39rDHqgbCb3ocgcV",
  "key29": "4haAY2i2SYEKvgdtzKUfSFq5zEnTs7LCexD8T3Y7AMfsAyB4FTrimpMjR2M4h6M1yHumDwbrpXSm1HGh9LoApsUG",
  "key30": "4KX8fzLfzKHLXVpCinUfLF8qT8i3Xi13A1gC4v3mR6wt4ygccyt8f5Y4ykGBXqMVJY9xeLEFqZw6oTgN8Y7H9zee",
  "key31": "5KoFZuiFcGS52iGYs9PNsQx7CqfbVAXpShTap2B4KXTB5TPyDY5urozhj1MjRZPpv5Lh3Gr513Wwxm8uWrQ2icXk",
  "key32": "5ANPzUjrtFqdsc1NTgzS1fZuTQdjFuw6f4fZu2xeXS9EHndnYa5h7kVaZZ42mkyTZNTK2UQBxcrBKArTjJneUHtV",
  "key33": "tUV1DpL7YWpmCMgdcJXpsJBKktncWDetzu6JU7HNKmS4go6pR39tKyJ12XkuUT6C1tf9LZTA3s8vGjzGJLNH5ba",
  "key34": "63xhqSStdr5vQGD8EwbU15166vjUsHZCVCXNXi1SKbd7Ej5DwaWa45UZFXxzrvRYHTAayy1vXjYv2oHoCAXC9hAX",
  "key35": "2oW4UQJbhifDVtpVgXiX3BtxfQ3wCFvkuvQ3gP6Vo58ybk1P9RcJVBG8mfDRE1edPTg4Ds8t2vMcVfxDuLLRu4fA",
  "key36": "4aFTPStgQ1mJeDXmENuVAjcRTRxrpCMyJRVgFcJWxi5QkSZNpjrAzSLQJKg7FqU2EkFgErgcauZp6pqPKBmioo6i",
  "key37": "2978VXHVVGqGxmwoAvgfzNV5rPzToUd6AMvRWtLqQhs3xZLK1a47cGxmvV5gZYGagSarVZWNiQRi1xcwnkkQJ6TY",
  "key38": "3aDmzAVdAqmxfFTGVnMr2RtmBsNZjwoF9ewDMyExD3R3uw4ocz24hvnaMZe6K7Wi2K9mb286RkjTDCzAHLKsHxM8",
  "key39": "3ZG6ypvJ1MnsxtNqWcJMBzsApWgZHWMiR55UFm5GLn975ZMh1YbuxK5bRKE2TpunHGizKEs9fvQmSek8ZqpXWB9b",
  "key40": "czJQ1mZFaVSM7gzS84vy6kFGpmxsF6cMqSHQ1Xt1KUiD3ucvJjFgwPT4fighw9GsN7umErx93cn6ReBWSezQC7m",
  "key41": "AQwhqMe8QpgvgpWXBtgR7TGrvCUKCtwmS4KkYrM25bbJV9g5EwrS4kL2yxC3yxGaTjEdckTT5iV3dB9ZvqBJ37w",
  "key42": "SukQztzDUCucewmYWZtpXK4KR4i5DDXk1miCq1T4aK46tdwof2uYTQ6JejkVDAGouGVzLcHgCpe47REHYB5UskC",
  "key43": "5Kx7pxCQmHRwMtbEP2HHCdTwCoamCS6SiW91vPexhXB9sQAxVAGgj6vqpuiQBLHZbvSmxLAFLJs3KDFekBevWdgH",
  "key44": "4RMr4jRZBi4vsp55QywQ4m9qtYq7xJy3Cf49ZSzRt1RGaPmZgxqiU1GE8quhemKhzzHQryNuYd2B1tRMQCMXiALL",
  "key45": "4LEZEJu4B2HJcxVtBT3XYRarmB2DYpwHGZtFaE4VwLgBvGEQNiApNWmacieZmTCnU92kEUUWZQSgoLY1FNmxnyyn",
  "key46": "XfWAwAu75DZfuhgQPwNdGWZAupq5G8NhM6DDmJwdkDWgPEQ4yBC6MsnsDSuSNGSWpVaR6XJmktZURrRKsmi3Kph",
  "key47": "1ESYioBDtjfn2RwRRSR5BSFeGdqtgpPwJkVVZSYEYpDhFLpbnFzp5WJNfibnc9iu74CVQYcSTmf4hqu7B4h94tk"
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
