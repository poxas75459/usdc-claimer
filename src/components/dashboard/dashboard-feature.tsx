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
    "reT64Fdb6WT5y1HLHovc3jQGf6HVFFsdHzBZXhVtZcLH7SsV453WU4SiDBnogmSnW7MzQwsZs5AEry38EjZDCK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUugEsrxcsjmi3Ma1ubCxwhZkWWbX2mVf6baU7b1jZxmyHgr4GmcgbKYkHurNF8qCA1DgodFJEhB8ibrHAfsJHi",
  "key1": "2VqxyfNs2tGMdirTk49yjdmC6t6GvjN2T2bzM7hSq7UAWfbtaPseXKuaiXFWvgA5M2G3BUunxUowzEMNAH1E4KpF",
  "key2": "3QFwzeCXn4WLXN6gnHVEgKs9FF1VVGCVG4xYnu5kVYeUyLPLgbPjhwghSPWPyz9CXScKaFGbSMrJoyEojRzYBcSw",
  "key3": "22rTesB8cLeicyznDUDw4PiQ7hMLTSzvhZHC5Vd6ZzTPX2pTb58TSBFjrVDqA5d4fqL9MpFw9VEgrT6VQEucfjUJ",
  "key4": "5RtuPQ5FvYQmHWqLN9WdYAExvUg2oiT3SCc5c9iDgtFDojpeEoALJDfvZzgsLLP7ze6wPsyBesckzgGT6DXXPpim",
  "key5": "5j7MmG58YoaGfVyphDydupWbCWoFZfRTgwfx8Uc1BufPEamHRJUnQn76gCufhFcngiCJZEiqi9CXcym5ygrVc5L7",
  "key6": "wLy2FRM3WiZqW7sSryYKgGbu6e1HWXE1aZtn2n38TUrmDfscMkNDyadNDs5BoRYiJmzWBnL1ZZepMxt93q6z2LH",
  "key7": "itkns7mPK9kwSdchLzobLwLyZjXCvFYbq48sZTSkMVv6stebu3Nhh21BE9QAwYdoXsV3ivKMXiRo42CXMDcaZsq",
  "key8": "4GgcNj8FYoZRohmDas4zM4WgixN1bVW1iFtnX9pxZBxxFBcKJsxUCVx9n5MrmBGGueYkUhgAGQKRqbyRJzKYDkjJ",
  "key9": "2qp5tNxTGrE2WzngNk93jHt72B3dfpimXdWEoLKhVqaMKSu6JA6tNPFgQiZfDD3srpSsm7BUtREgvYvcUHkbKFBx",
  "key10": "gyyGX2ewTnENZjFk5XbMuJ84YvLVyVcX2qwftSK8Zcm3NUGXaoqSRvnZe8hZ9Dh5XEZtMDUmQ591FhkjcruNKma",
  "key11": "pTdjU9oUb83T1sHaj1d9nDwYSs7awvLZUtCHmxopG9oWnfTqMXyahJQPdX8ghgkRMFjKpnpaxPFoqSE6WHGMSo8",
  "key12": "82kdyR1b1ohXRQ2wxe6e7HYQTFADZa4Wt7JC3pWoadfRHqDoMuKjs2eSb5it6kmogMLTxcTfX72ahr6JJmR4iYe",
  "key13": "3ubwgBhWhfKsbstt9QK6FhtSP8FgsPWDbBpk4zTG2bUdgZWeiDbaL3U7k4Yb2WRRzgjMRW7rSmMrNmjR8SinxBvs",
  "key14": "37tTBs8GeoneWsUYnG6YN8YAtYYMPJoMr4yBabMJJuWrnXUcisj6xKcbmyZGyUZ7WoBapXqXaLtdzLovN8ngzqcv",
  "key15": "5aNH7SqWHXeHjcL6AphRXvqXioNsnUb1PmvBqBvDN9fJ4dfLnrw6C9XcxciJbgT3SmCpFGyk8NFfuoWfurBcutfv",
  "key16": "2M6D9ko6rRM3w3ATrsqeLotV9yfYtoK1VuTaycWVReq32RruzjzomSVz6CjGnvgrAxoYHYcUftUuXb3JGQBpsQjM",
  "key17": "51rm4W7ECspR67YjXZTf8T9ugktTZs65tSVtzDgCFGdkkmpPwgsgEwdYevXhQhLhrsSo2y7gBkE3Q6JmVaFBMEqv",
  "key18": "54Nq2xkViwoEJY8cK2Vurcr9jPvn4RCUXZGULiijwspP3hQgUwbWfxxycYFkHnh7rvasac6XT9qAFMznLa4J9zWg",
  "key19": "4mjaT8exS1LhFjZdJR1mX7ouymvD2WdV7qYaqZoZFt9CkRjdikX8qy9uCZVcPq2T1S2s5DwPRJyGM422xvCbq6E3",
  "key20": "2BxLrWkzYQFrxK9XgJHV4X7vnQ8QruqAsN6eKJN7y64fRPGmQTBzfUMrXPYbSP5RLUMmEC12vcM4RnoDPsraKWuB",
  "key21": "4eDwjRQtpoo517zZvNHynMENXDZuBtyzN1DA79tFSChW8bNDrLDkf6CGb5FU83W5TrUrCbhnk73yD9xstjyPyTzV",
  "key22": "2m3vmRCymtz9HbAnuMTW568TWYn6xibh4fNKBPAUPD1JksydPqAn49FcEJ6999yYD22o2vfxkUVWKbW7tAzUpMsG",
  "key23": "31m9GBrTYhGyWm7EA8oeQHukTsEQJHdJ8mZSfVKVRxvUbteFB3DC5ic3Z38Dt8YDWj8W9NqvewEKrCDjNvs5Uqo8",
  "key24": "c9jNz9hxwsK1RW3wQUxdqtmMWYmU2FvwxKMcHpEPQfssvg4ETrja3iGSefcrNeRYYBG7N5sM9YFWurtybHZ8oh6",
  "key25": "5dV4EgCy8ugho3YVJc351AaDA62WLCw1hS3ymoJyKxr5Fj7QrbFDEM97jFZhdmbhVTrzZ3XAMqHjNRA1TmgSvGxN",
  "key26": "7VrZV5biFn9N1F4L4g9tbRU77Lk3TZwBoPwdWr5uxSDf1anyuLkpCEoB69M9Tkch3d5BLYx9j8Qfm8g8B1BhsCE",
  "key27": "28oFKatdW8hzwNNBoBD8VkSbTd5f39D6rqY6Hi75j8q7VFBQyQeYQG5WeUAHfL2xBewSefX1zGZpEkSAJscZ9kVg",
  "key28": "3814ZvCfMM5bpdHvDpFJaKpDtF7UkW4aHBZ6qwJ4KbwdgYfwgDdyJrPiRthSWbKrJsT74Ehe6c5eEXaM4rTdt9Xo",
  "key29": "3iUW27yEU8MJP9gcM1ipYTavmfxgv6q1BJPq8as8FoH79imyyNcD7Hbp6F3jRZuou2LT17aLrg1sjQTRykQsrvMV",
  "key30": "q4Y64UGFNg2EJLQx9uFtE1Rp4ENqwX1U9eCWDs6Pg56BvsZiyqEXGKUw2HXWFeAoGKywY2AZCUcwDGgXRVEBgPZ",
  "key31": "JJ3oiNg5MMjvpX5hS5FSDEQ2qdJu5aRXWKpY8qvHeWtCy2z6rx6z25xzTg3GPHWjTmpkdv1bHQBsR3u2XXwyrS2",
  "key32": "3x7EQ9b8ybT42PpEycSj2jz6iBht6PXwJjDADk2CX4KvydfTJ7DrvLavenbjNz2KBLYEG6p133PrajQscwVfmULP",
  "key33": "5DwAsEH4VQ79Beu6qw82RCEgBsNV4cjF37hA9RjUnGFfXfnGfH71fTtDUM8dtatrR1iKBsqhBBGT5xxitrPTCJbg",
  "key34": "2TsSj8A84JcirSsxHALfN4W7GsTyf58BvG6rpryr7ZLkNvt4RZXTtk8HjoWREffszH77vvLPZjBmEw8bKGhNyoQk",
  "key35": "UBE4kbB2dKqphZpWXpa5TPfG3eWmCvvgY2UqUtE8YCNFREo23P6Kg2d9qyvcpjkxTgoZ8qCqfHrsgQY4iW16fDp",
  "key36": "3uPEVCVEg27sE3uPxSV9Lp5tJMWpWhB8aUw5bWKT4n5Ka4eNH2LXyDXB6VK3zEgCCeNeDAGhcahcGuk1HgeEYtLH",
  "key37": "2xn1VG9Gb2yQqS4WYAo3as3cdhrL5uhKaHLsRcNfYo6tPwcmiFVPRi4J5HN8kSCpvA1GxC83GeavhL8NqWASzDLU",
  "key38": "4g2QR3PRwsDKa59jC8ZMHTWW4aCTpwTpEiFjr3Xeq4zxCSver6CHZfwTcHCpQLDWEhbRzYE4KSNrnt6bqU4yQ72T",
  "key39": "34zmJBoJhG7DvRMEDKPj8Zrf2NpqDeSQsorjNNbXWd3DSD2mW7b6RgGwTXEBRPfCQWrNRdimAbj6a1Zwdyq5RH93",
  "key40": "4RTpJpEFoox1HmZy2CWnx15o6xjWMjTg4pVmDCb5ro9z9JTKZesDC3WpvHroRKoZ4dH2rhGJ7wuuezKBjEKbYvc2",
  "key41": "64QKtwu9kSUSE1eLJNK23EfRKoWtTCPwYzRouKmrCThSiuBce5ov2f6Ej5ipJgNPpvfhchYpQh9sMX4QgNVujNNK",
  "key42": "3apBQCGiPoPoYRXDuAT2zsQee4ZqB7qu3rAVNyzppEWRQXPGYvjoVQmciDKknovcibYKPjBZXCfHTcm6AGPcrJSd",
  "key43": "L88r8wo8ZJCt528YbebuqmbjugA4MUnBjKZ6Vi9FVYbrKNDx2jeHyXK9nvAGe9DNX7aXWKr2jHmajaHszzx2bxA"
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
