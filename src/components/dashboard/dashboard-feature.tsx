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
    "3asbuUYsrFoEWtHxRwxjzhqhC3nScVori7tFLJcj7iuxB3BEQhr7UhRiRfRQawCfTpEaAHCw6WLrGgLJp1AzkFQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYfn8odKNT76LqeU4sTjPRDBxnrMy1PXQcHCwaqPp1ZBo3qfWaentwVPEizV5CwRhJ9tnDDDBfNT2awbccvRtdz",
  "key1": "2vrbLU8hNDs3x4H1MaykxdC4dciwjv5bqDWxCiKGvKMLaJSckwG9zJ7beLvPabe8Z8UvNsUbywXwk8FRm6hm4unS",
  "key2": "2NV6EL8ExkEMVddtcCSryYrBkSL4f8z23CVS8e6tPCAHvd5gSxauk8pHk8aKFgmXVRXewgmUjsrBb8cuncDdoxkh",
  "key3": "5nRgVWadshUTAqLTWCzcf6UH2QowNH9EjVTeSfwNN4jBSF7gSPrwRFhrHD73iA4oGgd6vvSnhPNATggY9NbEkb7E",
  "key4": "3L8zNsMRayFQ7LHFg3RGX7VkTSGDxeCzd9zBNh252qJW96je6V7JvM9cW7r9m7cHQs3q1i9gGV1gAFF19nUfHzMx",
  "key5": "3wXmMnuC5tZuYRYMZKYYAgUM2YM9KEiFmomKVz9Eo6NhURuDxKP8C9EQ5r35RVmgNzdmM7yEFEn4gd1jumvNqs2T",
  "key6": "2giH5wdZzfWgdcfkraMri5CWDBaGhCt3fbeDi7jW9UigEV8E7DZMxftKzy4qKi9vx28qCRCCn4aZm79ZgdYLFP1e",
  "key7": "5JTtP2uJxjPLMPg28fqVej5JBUce43NyBDBFNPasf5327vgFWEfVSg2aD1ZSe3mPr7KahpRMBQhWMq22QnWmo1Yn",
  "key8": "2wG8UYZPChjJgRdxU2642mXaqyHWoRYJU3LRx7t9N4At2Ac1aUT1izq4aCXSo6C3L1Q5M5n9fUSbqR84yz76rcNR",
  "key9": "7JZjGi9d8Cz2myCPo47gzoksNaSGUjyznqAvjdRzXB4LZgFYNva11wNEt8vsibb5JdkApHMLsdzSTFwjLDfNgBW",
  "key10": "4DCwg31MshbXNoXSzSzaGKXTspqHjxSiczsuB8HroCaeoR41cw6BTo6Cqve6X4KWSJxXxpncvZbZkhPXCA1NZmef",
  "key11": "5eiSqE1R4qtpXPqVwCRWUBic8Uz1opNzWrCtERThvsranvABxpbZwTmvpCVLdojKuipFDr1W3mCbANQgP7L5mHot",
  "key12": "3bAbJuNjFTaB4Mt5jYe7WJvULqm2nfvvcM1B9XWCqMQsDg4aucLosHHF6oMxPwADcGwDfmyQqzWKioxM3RXwFiGm",
  "key13": "35v7frcpYe6Yp9HsuS6CS467h5pd6JqFVwnNLgpyuUZUkzPASZ2nDoJnLTtUndyYBTRbzHvpNLV1CMYrhDXdxvi2",
  "key14": "5vXvu52JYr4kBuNAa7wfQnyuExy5dxpuzTrjnDXqnte5YBDjyKxGt1vXUFFBM8SjDpj5vsYzuXsE4fVeA7WnvjVM",
  "key15": "3iJYTyhaBzgveHNTHsfsERt8cBb7mpYkvJ2iCg2PWecCAH6EHnssxCj6SztfSxe8MJDxLuzrbFYDBUzRMTJd5vMX",
  "key16": "4CHU8XxTmTvS6VU8SV2VDiM3GJ39TE8pkXjSRkLcUiBE1v2aCgSyMMAfqbxYuCk3F8gYFVfzjgTCeqz5ajhbMcJZ",
  "key17": "31Uva3FVbYeDAR8LKb2crnY5MwUTKDmC4bSWaVbz2uuDBqZGLJDF4W6X2sYk94gmmGMYCjT1Na9KwGTUhGM4ZRCc",
  "key18": "4cahf6xxHi94jxL3yGDQyuGs86BkmzBveY1U19wNrvhGvpoxGD6H9kfzSDoaRECj4o6ysdEmcwJeWMai2kMCyijL",
  "key19": "4Y3tmRedUoVsXUTdwx6fqrjdNhMuvFLAvaRYUyyoiBAPCaaLNXn6xPr6qSgaD1U6nyCJkxGZ1qXr3yf6siGqbKXr",
  "key20": "2yyLF1UxRD91NTdo7VS9KFXMhYuzADkHw6ghQUThVvABG8UdX8aUfPojGQ5AumTy87i1iVZnnpXYeY1vJiDabkRt",
  "key21": "5zug3ZquNBgcxAbWiAFdSX1joQQqWxAEKtBfguZgxvXJniJP5sdnvyzWFz7Go8iriAyuwvoN62b3pE4LSf12ANSn",
  "key22": "24DdNKPkc1ARc9cw1Z2LRuJ7ci2TVFg512uRGFL3pyM7uSeLwNu5QJmtqZdjZbZL9BmiP2PrUvvhoWz8G2RTkRXQ",
  "key23": "izVWkZ5vwuYJu6KcF6Y7CbbExFGfvnU2zToQ6LcQtaY8chspmiTrnXQSfvaz6JhUd9FvXPYxpNrarTSzqCvwAMx",
  "key24": "5zZ2KH35rxiv4775McYSvV5CkKEbtgTmoJdakZt1aYboBtnsK27RwJyjCeitomAitLyajLgkrwGpo5MBBk5DfC7A",
  "key25": "qWt4ifZ6iDtneWPw8FZEzTaAFM99XwWotWhUiV9qoucpLBs4Rofs4v4knQstVMCv7HNd4NVLnaa66csW3UUdUx3",
  "key26": "51oyJcXQXt9VmAXNKdaGbSjkctVX5JM3P5T2oWtrCziBkxpPLRCjGBxTGRBMNX9DNva3KzZRMrU9c4t8CK68TLiJ",
  "key27": "4fgSUecikoWfoo1sTweGZRcYG6tZ6FTBH2uUbt1UiqzqpanoSsX39r2uMtEFt84hzpxzDSnodkmUvrKNTUEnCmEz",
  "key28": "4NHjLjACLzoYyFbCjXo98x7zSV1djGcvVUmQQyxkZ5wjopbHq1J4BL98b2aAQ8E8eDdhUcYRDFyPBWZqwab6URZs",
  "key29": "2SYR6Sk3Racj1mmyTdTap5sBc4tUcKBA8XNF4m2nq7FHzveExFHUbnjRCR3ae5XxK6GWWHFZ2VfFDXyZFs6PKSEq",
  "key30": "xgFzzCe41eD6ZLqA3gUwGmDTvX28KyrvjzT2h1TXqaqq6nJ1P6b1GaUg2YysNHFcQSQqMjC9drSehtVdDzecH9s"
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
