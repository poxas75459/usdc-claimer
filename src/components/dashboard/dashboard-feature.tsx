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
    "4Hi8uNkSnUuqm4eapy5avLefdT6346upzErSVdALXZGHz81jZgywv2DqRcEaj6qUGc2vAjFk7HaH94oHm5ZBuWKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yp6PKW156j3HoHZAPSpScCUZjR2puYAW4SUxcmEXEjpKxiaWSZySWVvQq5Bi633Tsuu8y3VrSf6nATwrAHvM1u9",
  "key1": "3MwLz1YkzUTpS7iC9GbDXHceU3mbaf3HMXdYNMYxtJVScAw1WuSTgemEA8Fhmpc6EFxxWZHW1JS2znvKpebCeZ6F",
  "key2": "3kPrp5oPtD9CUrLydaKgH3VF3dF1pCNi6DkMs4VSxcSCHRp3z4gLZjjrtg79taKMQiQZ2nyE7HF8rUuDZsvD6a5c",
  "key3": "2xA5EQo9sCwSoPMU1y4zE75ri3gwaZrYaYvLsnw9u9PnHX8V5Cv8NRvuEsgb5DzhJr87waAPVe9H5ifGky77jevr",
  "key4": "2VmWBSjKkXKTjtqFDJ4QEUacX4DkmoF5yCkGp9NQyfTaCDTmJX3qjxRXRWH66mD9oCf8aN46fMXkwmTRK32TT8ZZ",
  "key5": "45JwezwyTNVgRrZDf354H2fordTcnLGpZdWzxLaP8xb1wCwF9jJCZhcQLiJ4ybe7dEjx8MAaAVWFNnqdo1Wehn8h",
  "key6": "5GeEfzVriY7hAR5S3LsEx51WnER3uKprRbQ3amA9XsPkyhZnQyqoD5HSJv7cZKV7egWrbS1oU7dxLXqo9siNzbGW",
  "key7": "2yizkXLhiHW3DCUjCWTdn9s4SGZJX1KLJ5uXhooo1wgtvgXiGD3ChxQwQ24ZrRfoLoFmjVjgTkhHUemL6871cvRg",
  "key8": "6mGPLjfSSBBYJQBy1qijVyv541kkDPPqy2UV1fVtF5N76rc4n7Bb2JzLJjbZARDWwzw8NfDhaSBhXqDC8SHyM51",
  "key9": "3oxF5yDMBGN6MVhDop2AYhKZE8H8AtYQKniH88gL6aWdCGtP4N8B9Hh7ciBZmvUrMZaZoBJTAgfmaFijFnHJkwMF",
  "key10": "eGXhC1rM6mZY2SgtN2u8jL32kid15XQYUzdRmEzzF9LiPTRYwA6dxVHnc62MUekSRQ342kvrVLWi2oumB1cpYhX",
  "key11": "2TYMDW5W1RNh2kS3pidMzMNnpbhidYEyq72xybGhmYhjkSQm5mcHtiw7bGTEgNHwxnyPEKFaajJWNU8ZMyukDmyT",
  "key12": "nj5mPkPDtwqaKfnL4wgN42z6M2t3KnnLJa7eDbCLSKLHi4QLEc2TYBdwka5ojL1X5LygiFiHH3BQLoB7ZFapKGm",
  "key13": "23vvwMyMuy9kqi24JrZqTJVHqQSmKZwu33a1ArVhGAon4R549oZxsXtuZhTsWSSfduqqnc3P1HESbSTaHDMyeyuD",
  "key14": "3PCWKNM776MYhe36A5JeC5Hc1UyqYtc3mhaDUQkbTR8JJvn2YKmkRyL63GdPfTThRJ8X2g1YZRtgXMXUJkD1MSfw",
  "key15": "2j9moRyPnuwgqCNxgNRgAsz6SCScaad9ZhwCvav5Caok2rJ3XuYyVXV6hr5wjjqW8KnJzGiggdNqbavJYyPkYxUj",
  "key16": "28VN5AHyuFxrngGXiqU1jwxR1vYmj4B5PkveSwi3sougvDqBtMHhQwchnhUTQL9ETPnLJqUokPcTs9DSrunTu5AB",
  "key17": "5dzDNe1hpU6AaioyVTTuN1zmQjEpeHYaC6XgU5En9cjUiDECjBDcw941d1wj1FHn8F14JBMVXrVcpUiZHjhwZnhv",
  "key18": "EHTHzm28G3oExd4RYJemxRrstmA8yuapG7qTbP85jdZzw5VdzRyWpmcNUn1mX5hxmYfcHYrq2yiC9ydBUx687ma",
  "key19": "3XD1si7Bpp9RbSTQsucSxGsGA9mSVdfb6HQiPj52GvLVtiTERevwP6fK4FQVJAyefje76KMSFFA9BMAu7AqpP77d",
  "key20": "5VAWvYxDevpddybZ4Vbs96VqHMyNj96A7HtqgmnuPMDuVntKnsYDPZQo9rnfhdSZ7PVhZVSLv9bM6kceUvsUjY8P",
  "key21": "4daNbJr7hHNrbyvWc29duWwV5PitoVkSzV2Dd9f1AhteLDyEsLGorZ13qDAqXqkXGEU3bNdfkwthbWmKtRbmiDK8",
  "key22": "2SF3b4h1FL57TqoZeYu2hGToZmtVJfJWkjT8bUtxggpy8jC9nXwvHEVA91zs1LK7VPKyz4Duurw9RsgYupQcm7XK",
  "key23": "HjyqBv6Qb6CkzKZTyVnMvpzXXEtNZQaH88xyqVZRf9dsBA96gYSLcTcAVWCpYCBzJQDRvi8cp2oWdNnaAnGMCNd",
  "key24": "3UJPvk2MC9EgYx4dqWPe2YL4TizEpUgC23wDHB7hmkkRXJrg6rCz2JrAUSdt8x41EF1NcRdCuoHtMuD1JEstRfGr",
  "key25": "3C1uWKr6G6eyEDaPntSLW99JpgLNQW1ByvMDKFeSExg1ZRhKmaNzVLir61XX9xAvu1nbExLACapgdTFhyuGyZGQ",
  "key26": "3o1TJEK7aNxxGR9E7LpHnMcUS5vRhuw7GbmWkXeMLMeMDHCDHCSENLhBgU4CxA6L2MRphvqPFMQYpaaRmy7f6Mox",
  "key27": "GtqbRHKH1etdciTbZ5gRw23mfLE6YNqvYxt49ZKqQVt5DUMMHyvtL9oq4cVDr6icm1xFuAH5Cwhsn51NwCfUYf2",
  "key28": "4AVeSADgcvey9yBcszfnaoVB6DdcDcC8w2catuwu4SiqHhrrLxft98DEWuQyxbhkCdTtTTeSk5DrVyAcVpv7DAtZ",
  "key29": "4H3kXyKJgVCLvA4K7fik6ivXwqUQ5aFXQUWFy697Ro3VKgz9jbpvdZEhgDKUKF7eTCnk5BMDB9k68LhPtCXsKdUa",
  "key30": "2xRQGvypRtJR6KTumJJ95Drpe8F6parUd5DzjpnbZcPg9MDVS1GkV3RgDFqAKTCXfAbc2HrqcyhmBWgyuiWySneS",
  "key31": "2g1WSqGvbFysapxM6sKvp1xAUqH2nwHiL72h8fQLT1smtekcqUuCvfVZXN7Y6HhVhnoyMGyuG5nuytrf5pQUZx5K",
  "key32": "3k5TDihmvyVEw6HzdanCZAo8oSJNncMkRDb65kU3j168YMQqcND9QhUD5ChWrHea1MRaqFeHWb3jjqpL2KuUTyva",
  "key33": "5fxhLWFafCi3JjA1XDyvMabHvBDt8gQnv4QCQrE3V1ZBZtjB5DU8JTLPFXfqGepNLvRj9tgYhjRM5KECcWDxgmHN",
  "key34": "2gwK3aEat3guLE759q8u52TBXeJHrz26GLrUv5rq2r4RzABNqkpkKQoeHmjuYK39sdyoyQ2u63zm7eTRTw3UeYob",
  "key35": "4mWkqzWWmqGBqNDCfg8fmf5kiApdUgKmFyVZs2nKriF9t9ThWbuEbyzd9KXcfHpWDRDYKseq7KEQMM4CgiQ57t7p",
  "key36": "4Fgxex1CXSWFgVTXjfq3e8NXv3GTyaKdRwzK9EVhd7bixvTieVbA5f8vn3hGia9Z1M8RTHq31AqhTeQKUZU3QDvg",
  "key37": "j4GpWtQCQMyYk4XPR7vr1SEPCWDCxLJxAy3s3gEWo49SJ1vKgnjKPfr23y6DXicV7STs4vsWvU1usAQX2anRHKb",
  "key38": "3WPypSScZdoACb1pQ1Hv9KzYiihcHaPmRuqepJC64zLZNFQ9nG6AV2ciAVoowLho8DapEVcPUyLqYVGVkqUmWxTc",
  "key39": "4DTZE6TMzAEnXhWy3ymNw8jdamYdjr4YJ7ocHXUXDUEFNRg7so243E3K6QJXH4xHz1kgVQ5cG88kisrqpSfiWBwe",
  "key40": "3BbqwMQcB4Fj6WygZW4wuXSbcN5TfL3Y17hoN4FARsprXz9n7uESWda7gJrAxJMZ1QDLWWTz8VE816yZSrqiYWN2",
  "key41": "4U8cue1CbKdomoctYeQw1QBEjN6Zn7cdj2cZaf2iQUDtG7q4i9YqQEdvGxn96QYYM2k3g3Ja41hRsQFVKvNqjqWw",
  "key42": "m8TEZbjDsHA7GZUQn3XmUMm8Jysm4GKy6YjeRD4R67Mdu7AxeEr31DXWn9313o1hYWUEpVcyRyLUUgLfkeHGYva",
  "key43": "8mV31xWXkNd5GJhMG4NmsZErAvBozrTdpjN4xofzdQbXKrt6hJYWav9jAz3HbiWzecvgGzbSqo1BrkG6RLc2Zcx",
  "key44": "5a6a6iYGiMggtwhQfmR7cw7Z94XEigzHQnb8kCc9GqXssCgmbCTNNeSTsdfg2w5HQPaJnpKuBvRms3kxyQ5RdLEy",
  "key45": "wD5iaRpBKeCxwjtYit1zNqnsPe9ukgnFugHvtEqiNL4FjV8KY4w17uygTBY7e65UmPnEqQi17oQwpYZzCfdMcC5",
  "key46": "PYjr5Jsmrkvmf8dQTYkQLFG3S2U2awN7mZceUH7yrpefAWq6CH6TFWU8XXECMqS4VfgYfWNkL8kBMcZ1UNj4TLG",
  "key47": "3bhiykz7PkXXPCfYUA81wfhq7Y3TTzzHEhmp3GTZwKxyPNiiMTgm5mztiLUy83pJaLbUDyUAiieBmSXu9vv5tLu7"
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
