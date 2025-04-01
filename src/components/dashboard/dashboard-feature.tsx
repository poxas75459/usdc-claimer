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
    "hzx4Ky5VB2GNeNKrkR75y3RSooHrLpqkrQCw2jGwoN4Wprpzz7wbkGwANzqvUF1ny3rpW7wYF9K6jCALj42t8VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SdPxSQRKmzWXRxFbsjpWX9L1nCCWwGmPLFEV4QWcQ36iwXo61ex7yuTxZw858SyryWqzrbs26iioowMJZLLE8Mo",
  "key1": "2Fs5x1fFAgJ8fKigBa14oWb5yDQMomS4thJo131cP8SCQATDiweaevKwUDZf1TcjFQQuz8uywuconGn2yfZxUWnL",
  "key2": "2K2H6KkMqWMjEreBq3C61JT9Xy2b9gxpwsuyH1p9ih2rDaAvafzm7Jz2AAeXdj5Key6TH4ChbSFwqjxLRQREaQMh",
  "key3": "3KZgyGLXMA6nKd3vX6dRKMXWynyciD4ZxxEQyJjTtBcmTsMf5YP4cb8v4GB6YUw5PejoRGjfS7PtHraurzUcDWFF",
  "key4": "3mT4DrJ7zzKnkzByufCkMcVt837dEiEgTaPojKBXyT38ioi8iAXEYDd29VL88W3GBqWA95SbgKCs7ys8DqvSBfL2",
  "key5": "hSiEdJEfVMDUYkw5KRX9gQ2LXEWnCt1KPVYZ16B9Jpmu73Z6JzReqBbwekZZ6Ebmnq89hMC6bvai7oSTe5o5i1H",
  "key6": "2HEVBSsJXHMiZ98hPkePZ6ekFUzzcgJ9JC2MEGMxyBwM5jACHZU4FUgqfwPiThab4kJ2cTGtbPMiTm33hmCSv52i",
  "key7": "292jdwMDwp9KSJU3g2XjVuRmNvizeSe7n4iXRZWqojREgzT4p76aERdY3SJhoEpeeRngKhWNDXNvgvnN7EeoJBd1",
  "key8": "55cC4c9GFqW1S2NveqsTcF2iJYnbbAkXJnQnC72uWvD6gcoGRyZQxNmi87ZRLwQ6C6tGbXbDknR3nH3NeTFNoP5c",
  "key9": "2aiYFS6kxGt8Pa2Q3fzDrLbhJbRtvoasHjMh1jxiNA97HNXsCL3RaWDSRbZosuya21CMD6SssfYXp4cfLXtat9Uu",
  "key10": "2UJXmTfkeh66nxpZdRBHRD5z4ing6oHUgDmjf7V5mfBAE1YZ1LFuqezChoMt7335euy89kjKoT12ZfvWF3unBXf3",
  "key11": "BQ54FFojDMLwEToU6sFTVAS7wA87QLcbCvNBRGZVn2icwCbAsqxqeryz6kfqr7bv6jU1z4zyMSmuZUbKvMdyxfG",
  "key12": "5qehTQ1KSC2843G4zMxCR54shBSdX9PuneroqDp7EKni4Hs7YgaXiXMPmJhZdcsnb34QGU6Xx3AHWGhAFemx6Pi7",
  "key13": "6a1hK3w1VtSEDysXmo6VZmKSrW5VNyZNoz19gxQezNWyLnSypsvviwYKik5xpjqc7zoUXR68GHvA5HBiKQ3deEk",
  "key14": "4qXiuR91VmRBS3uTEZuor6h7mZ7rNTagz7PP5HDRpaD6E5EBi3r71t1VbAM29NmrHeSMNt2Z7KtGi8vTmLUkTz3H",
  "key15": "2TsCxQMS7AVJVQBxBBCQJBQeGnUuzTLdXDDoG4RWHVCzP1HneQwzrmcjSQQxS1rSRkp97aFAyxYNXxqvC7xRsgTP",
  "key16": "5s2UsGdSo18G3tG1o3mzp1wBDvPRYdsufHeSayDtXcHUna7LnVtXkwPNm1ZXau83co71X6itCAi2fd3fv7Hdmqps",
  "key17": "4WwNqxDdFFbKcHsUJu49qhQjVpcebLrKZmuBCxXSyTXJoSKrKntMjgBLjZ1ZHEitxTN8auSiVmip8bZKh9NQjJRJ",
  "key18": "2YW5qoR3tXRx4YPc3V844kfiuzYvXULNCv61rFCEEJ1pKg3PUkTcfARaCaZ5z5tCKe7josLDzC5C8rws9RaiP7TY",
  "key19": "mUsMaxNTi4xkZKFzH5useK3iqfpzzgrTpeUZW6oBH2Sn4TAiCTrXcFJ6L7mwWhgZkhoiwosAs65p48awXLD4rQ3",
  "key20": "3Fn9ggypUPeSijKQ7b3rwUuWTepwi8nNFE4NJnQtwhJ8AziqpqWgC3dYpiRXCE7kC54VmBgJKnYjtYUAqozab71a",
  "key21": "2bZjj27aqFp8faUt8cYVNeh1DfHq5k4tLQsgK5UnMuRrJL8gT6FaKyB1PGybfcbyn7ipjYQAs9tAgx5qi1QqGxv9",
  "key22": "WzPT2cEzRZewU3K9pRsQjUh2t5HMXxvkEu6h5uCcm3UvbVYbbCC3iE7jZbZZP5CFJJxgfWfhnTzZgvUPUg17xtE",
  "key23": "5N6E4c2ebq3C1Pmdh8XYBjiyocpdZ88WPwxgpLoA5JwgekeYRD7HRkgmgUPNjRUYH7oA6s8r4s6XMWjLFyvRVA4X",
  "key24": "42EnYYntaab5hjdcijJpNLZojDbjDQJMybGciz3b7QUCwHw9UGxBLok9AAfA5f6Q9NQhhFMCC56o4KETrP7rN4Px",
  "key25": "24BDN7tBjXqKZHrzGEJVVy9cT4ioL18x64VdtEPttZZ9UJDrtDuk1wZ3FUMGkZNpiawNnpTzefiSnNnmmWMjvTS4",
  "key26": "47cC3CJJ4rb6a1BEKjie5tPjCzrpUjw4Cr7oHAEhG4yBp1hAejiZJP3wSKmMW2PLsP7yET7AK25Jk1YJGWqgrXiw",
  "key27": "5orXDoY9HQ2sYCHf8zdnFy6XswQeLf6P3R9SWqxot3Vde1GvQmgZPbKjoiH2aXjGj9wJenTN8a9tLAdVkypU9p2r",
  "key28": "gbK2swHtM9uube6SebqgBzGPbfZBeqmqrpVgU3ZPUZkre6ogyK9YXbg4mBaMJPB1E5LCvQpzYiyWUHQA8uorLJP",
  "key29": "3zBZpQumArVcamjGPZYhC7AyGnr7Z6hwmXvNaiYfkwj4UN7sctdbET9pGwNe3PJveApGpEN92uDyeMjGoxskwjTc",
  "key30": "2BTPyvos7QSteksekwLVtKEn1FGS9hGDmiqhUi3nXEoStdNZUYEsrY4yuG94wEPpm7WzBsFnJ6TrMaS34dSCnY3V",
  "key31": "2hJZr4b6YRpCiZntDhaCsK2kjefj9Z1ivgHzuXAZfFTTN42vKZ1JwkqGseJjvcvadeZqrkU9Hqk7mVC5Zr7pZpYT",
  "key32": "5ZFCvtvVfmMkSMNmuYt2WZwv4Ce5GnSTbbPdhu46S7He5bCjCcHGVRFR3osXCEZ2iKkRN2xc5UVrgJGqMJygNGPA",
  "key33": "5zWRyvQaBS2q74UE52262dWPagdAWW6H7JErxzoC9bqSqT6sDXNYK2yvyhuEABLTyEDgFSGQRSDgxyifCdzeUjFD",
  "key34": "2KpJBgRAPBjiQhmUyGNeyzUSdHbwBKJqpqiLfrpLnjry33bUPg4gQz9A4PexvhEr4iehFGsYiWJL2CKaRMKnr4tT",
  "key35": "3vs6bosL2nREtn4nLySV8oKGsdCEg8AsgHBD4DKhsSejvnfNbdRqUipK6V475qgVaSRaYwdazeMutqU6ix1EL9cP",
  "key36": "2U3qDFNS4cu9r5nnq1y63obeZo4i6ZaKpTsuDRQjwPPhFyyraAb5bSiA1S81TDUJTMac8iSZqBTavMRjEeRYXKRb",
  "key37": "2hmmePfNXw4dGYkFyMDG7NoGL1JTR1tV5HjYpaipMaeE8zLrQ1ULKWRdwe6X2mz7iRj4fGAohprB7J9Zac4owBeL",
  "key38": "3zdET5VgLS6zUrSKjQ96V1MNirRynMLW1A77sEGTqup4gBbMwEsiv2NtYLpXKRU9PPdpZWekseC16ppTjVnragay",
  "key39": "2rrWGkJLbJ3MKkLtH9U5t5VUFvp4XyGqTjDYh81VhkahfYYrWVmWU6WLA8U6GKwE65qdTDdAaHjeanUyUHRtaY9T"
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
