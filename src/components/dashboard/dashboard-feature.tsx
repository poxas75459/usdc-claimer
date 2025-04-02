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
    "5U52UEmVk4TMo7htodiwrrUirgENNKcngnKJPXakjUt8DqSnzZFK51itUEA5eKjMPCFDWeRRDoXZXF4KD7L7HAo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WJHZDgcKWKSJ7RbYUD7BnGVrRztikhowDAeg7LxhH3aCCJzGfMWFoh9dostuW5xrgGwcnfrgg5jmLtKJqGf6jQ",
  "key1": "64NLDdDbCHk9ZXpfeSUJhh2tTtL1rD9pkmrPgwrfwnwghBEjsP9tR46UnQa66DLtEDyrHoAX3q3SvBt2maB6LX97",
  "key2": "36Xg7Ny3Wo6SrixEx3GSP9fCFeTUUVwxiBeDHb2sWLTa6dsNQGoV61Q5jWcJXk5ceLmscnKxQ57fzeJgquC415bC",
  "key3": "2ycfjTM1dW86YDMZW2hxF5atjkMW1tA7eZgFws3FtmLh2uYT7rv8PqeLtevLFuQzD889fA4SWVMPSnZ1k1RiFW7t",
  "key4": "5jajB7xzzVsdSATjtu4Hr6gGy3XUsWA2n6y3WobmsgMAUxH5w1CYThw9rVHGfhtB1bJAgfMSNKexNNWLizqGYTCT",
  "key5": "9t23SafKadffy7Kn43hBwe6rrdcHp7bqDjTwbiEpY5ydnMDEBxXMpzPsCvZT1VGVbhAgCdczLWdBFU9zgE4eXKK",
  "key6": "nhnKpCXGkSc17GipuZGgd16feZdnVJBgvyUm1rvNBgoDKT5RHFcqMsNsXEe4Xttb1TtoEDDD7WqEgPkkg4xm5vy",
  "key7": "4AHtaxmjwHQvnY8jPi4NK4RE6CTto8VjfsERi3fscVHYtfSTK27Zvj6Hqf8XfmZaEbSqjZLbk2nXadCJTwSYnoh3",
  "key8": "5eEvtrAkQfTFeASdSYREei4s6sY1hPTGC1iJbgx25WfLYGYU6v4dmu7GJcUwkBY1rnHgNjzaMkGqVwbihpRuGnVN",
  "key9": "3R2cCw7mrVfQq3vqXnTZ6yNrtJm1NUgQx41iMfknpEJNEMMG3DHbEfAp6rZRPHcdYgNYdgxK53PUnidjRusuvThk",
  "key10": "4LuwcYoRYCke7e2GEkBHt4GKeP6tMNUF8kNgMWdYn8AqNUS9hZhq2K7SBRpuYKHWcRmeLB4R1Ffr41ggYFRb46mC",
  "key11": "5b7Gd1KXjKNK8bHNpnQpT16meFVV9tZ9Mo2NLEC4n5VZV9GXyczGHVCbkZdzMuMa8EYUYrdi78sFWAiFWmPgEjjE",
  "key12": "5h2E3Rewsnf5g6S7GwrmDgokymTzi78GLZvxnVu8PUTMR74zETREDs3Cxb2yMFs9tF4238n3SbpGsRpcsRcBprBT",
  "key13": "5bk8HgLJqxzDnD16xU33YAudzNN1hWkqwYyPKFye3Ts1MNhH5WR8pzCiER2JRoA3a5gdjZ1bfSzrn9VppZwF7nYA",
  "key14": "65WD6qtUGMx45wVCfMtjVXEB2Xn6j7X79pMwytA1jTMSYHpemsDKbAELLhRXtSRBRW5LWgX2WFKE6cMGRkuusV68",
  "key15": "2aTKfKAQqTvKdgCDNrKjNibQjbaA4JrPpvQ4sGEx9Q5W8zqXevvyBvFq35Nv6yne6MBXKy8HVUUyrpXHeEZ8A7Cj",
  "key16": "4tX1AqP5tUHGB7mUJ5NL4Bzm4hr7fQgLgqnkMUQCF6bcF6UEFGaAzKkPusVMtPACWxGu5oBFY2ujD1N8DWUb7Ut3",
  "key17": "4MeA8PPtsXxjXHUrN2Uou98XpX2FTunqQaEX3spvS7wDeCVHexEwdWEjx4wi83Lan1BQWcgAYegf6bYBGp4647VB",
  "key18": "4wzRsksWw7gtUwTHFGJVp17c5QcwzjwdqFWjRh91oDC49GeeKQ4uNMaJ239g36T3fLkYDBaV13RobRbUGwRb8Tnz",
  "key19": "5DeoUQfk1EfmaqhNvFEhQbSrTmGWPYHsrAoYz5yFLrvmZbBPwR55sCNHjMFm63x6e3fofqWCmkLh3utYivnkiHtJ",
  "key20": "5CQfjRtuKdXdka9NHWnaRdQbA89qsXgAKuu9v5g2fWmFXVXLWc19B3xHyXhsQTmu25UkGZMuw8jk6YLsRsbK7n1E",
  "key21": "34cPiUC6fo2r9fHo21GZ6YCwitNpxcABqzNejwP3QwZvfwtMoMu1HHkUVneq8UPWeXWcsTe5myHHAJXt5nSoh2V3",
  "key22": "3vX5gmHGG7dFudvbWGCU6FhKTwk3TJ87Bxco12fMNnMb83KFjFLo9ixfCkM2BDhWjwGaP5MGvCuNNLKAYE4zWToe",
  "key23": "2YQbqZ423SE8JAf6sxuf1eDoWaHz4wC7Hur5UN82HmUwPRbRxDEfuxtTEgZaxcLWWQ6KgTXDdJstRmBow21VB1VN",
  "key24": "66mevY8a1pdUafzRQETMpy5is2kRyHr1zmR9r7ckUMraF4piKeYhehAfKhguBUCiYc6snZWuYzoY9ha9zrJjYpLn",
  "key25": "QymM4ZBTTuXCcYnR3rRZbJGXrSEfyfwo3bUbuN9Y7QRGjcaHMhQZhSk1Tjw3ZbWtGLtF1UJfTuh4fKLSmTmGVLo",
  "key26": "5qRoFfXp7ovLM22haBMSvHWW2S7Ku1gg6cM6owLGL36Rx2o5PE3tZHiaDkThJZhTWXJxsVE3aAZJLC7CCoJfHsuV",
  "key27": "musro8pzgsNjJijMsMmwcJoN8orDoF4fmcoaZogwpkfg2MJCz3YWhwChPtDHdDtDSUUToEHarM3cJic2HHSPZMB",
  "key28": "46fodPqQP7f6jgkCoo4usqt7eSABwPF2V1wUy6deR4LWaCo9QZZRqAN3v7oFhmUJDWRZvx7WjKb8ext6X6LXovjk",
  "key29": "5LBo3qPfvs2boDUVC9RKH4p4yHL5Xt8b1nxPSSKHpi5YqVCuC2sGeCcVBRq9NSTVvXBadT9UdzGg1unr8aAnZV1N",
  "key30": "2Grq9wmw3FiY6LdfHChrnskyx4FqWXMnL4jAgc5L1arG1fumieQ5CB58fTAnhqqePxtB5YyZ7z7VLEUgJb1SHyae",
  "key31": "64LXMTnwDfEiuAk8YrEw8hwfcrLyhj8nG97c41GdhmJqGxcJ3ZZtdoRNfaBqZaq7oWqCiJRC9AAq6DrhoVi5kjus",
  "key32": "4pvByU9mNnN5FdaKT8seiHdxRGmLNRm91vDspYs4QthJR6NbL471eKNrGcCF3dqPoHGnqreKyZSNxU44XEGh4oaH",
  "key33": "52gxFC82ybTpbpGFxJKbJ6WSBrW1uqDUomDa8L84ZzD6BcLTEhWDLAx6k9mgA1NkQPEADdFp9RN52sWR5mSACv2e",
  "key34": "4jc6jyro7ejZ6oTYmaVf5SNJsMvMPvFCi9EXpTJk5dYehcUrDucCfFwHAtf2DFmv1sEDhN13A8VbVLgiC857BKPe",
  "key35": "39hmfpYWPwHzKLNzKPZoUPxUowfCbvgUxZq8MTXZCDsp63h5z3u3i3fs5sc3zy8U1MZYvCxAikV7LNWg8owoMPXo",
  "key36": "5Kmn4aNUNqSFseopnD9CZVrj9tSUz4j1zgqcEpgnWmhJdaKUfzAyqeaXMinMYQrB3bXNmnHiYw7uzHERprgudWGP",
  "key37": "5s5DRGpvsKcAeGLkbYkVzGp32vwXXrjWV7yi8cDEjzZRk9TnK1cHfofCKnyStNUFjQkcgVLyZ2gaxB7xoeu61TTh",
  "key38": "3bZxWRUbhRXdnKfGjLw2CudhS8HpDdrgdd9YZDFn5qfTJ8g9dqyz8p66tVteHiaS4Gq6WLjS1hJoXMDcJ6ovXVGb"
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
