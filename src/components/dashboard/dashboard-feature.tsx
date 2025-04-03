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
    "5QTZzdTz9ugz8ug5A5kWMAPG3bWPKqK1JkPC84PJpDHvdzzi7xZjQRfr2equiWiwpUbZKhNnvr3fiL2F1cAoXRUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FtKVepnF38K4T4erf38Pc8KdisUvpBnhDJfLHxdobsricpNJ8dep6qsBaHTsPo6dWUFBEmrQtega3KSWoforCsy",
  "key1": "nCHZGwsXAjG2eGsUJRaJxEjYaJ8zteyTKS9zaibp8uaEE91MW4ALwjJDbGQYAZhFMS2rdtjSkbe1j6paiwpJudd",
  "key2": "3m29FbKzuMk927PetDo2v4SdyexVzxNV1bzx6DBPfpX24wg1Ex1Fq22bv6KMxRznXDNZaPNCJHPiYx7QTvCEg7is",
  "key3": "125VVtctgL3iUGVMdXtt6FkEKbdn1ek2JeUVM7Yyzs52Z62EPvH5nFvKX5FVFfnJuYhZK8gnmkrRVAvYdMUqp8Kt",
  "key4": "5mwJ9XoQArVNWsBsxeA37YBfP3Zr8hPy8eZgo63t4HaoFf7FpNpHup6rUr3rbm7jTGbrHEd8oV9RYSycgeSEtD8E",
  "key5": "46dBbzjqrBYJeEveeRgzu6TjA9nAQwLCy2EWNqYWMqsesvpnhWQ544Pi2mSzxwBMYgJVUT162weXkHkPLFy5Ki3B",
  "key6": "4bhSJP1S58YVPNL6gd1TqEDrWvwt8FX4u1hcL3xp43jiKy7ZDfTNj6uYTcy6JiZ89hn8ERoF3vt9uhxnqCLuiKer",
  "key7": "3fsAeQLE1iZ9wnpWF5W89bPk6RU7yCRYgTiRH4DRd5yFNBjZzKYqGm9dMaREsY7Mg24WS4Yp3rKXVQs6roshvzrZ",
  "key8": "66oFEgrCrg4hqs1pYHZaz1dtsU75HVG8Qc3X7EPvhos9KXM4hF5A596WaEDbBHJXBnST2dwiQk73joJG4Lq9aprQ",
  "key9": "2GSQoLWhwQhWSAWytqSHoSz8ztkQa7ZxZBB6SX6XhEZ513a5SyK5CRzMUaTzwocmwLbEAxij1cH2Nx8wvf2B4ZEb",
  "key10": "Bu7GZMfD75JkuCxzF8EQ5mgwruHkVBj8VED1RPibUxytWL9Qwk1n9z2z5RZLRxZN4H5aFqXbmC94ydcT8ePctNd",
  "key11": "jssKRduvMyBTu9mFdhds2puEwNQqvo9WHpeaauiy1kpPbJztba7A1tQMPTjexCCXyDybsfQobPao5naytTJeMJ8",
  "key12": "2Xwnt6rfSyLR3sQvkFfNAh2Ch19DpdS7WhzakCJpk6rYU5EyHYn44Cn7ja48Ciuj8VG8KcA6QUFs7okj76dwZ23E",
  "key13": "38besiLJUKVn3MPL97wKR64mRv3uJAFB6dXXRwfdPjaf21mVFGfy7mhFG2qsom7hM4TGNZdySQb1bY76Nd5TDVTz",
  "key14": "4Jj9zekxbvRmJbeahuRsJY3ZFRRKbaKtzq7nBZVaMYXsvPCWCWVsn6S3gMFMPDuy8Dqdd7krdGF8PC487v8M5VAq",
  "key15": "2DqkA2LjbjN1gCeT5n6nzNNEj2F3iTPmDjqkkoN6NY3MWRZVcewpZfYunoCzndWky3DjHdStgNo5GS6UJtERx8eS",
  "key16": "dvMz15gmFzWEqxN2y4e4ENojMDwDmEcWGYmyjdsMZDk2b42b2KNdRsjPvqbjYY3H2t7Yhc1sWXsjBsAnhmEoZYY",
  "key17": "4jrZg2pDLWuh5Gvkz4KZcqFuk3My9C434zMv6Z39F7ejzg6Bifv8vNLTHers3GZesxDXQJbe2kCvnZNLtAYVMXFJ",
  "key18": "4BbtgSb15P71Ff8VeHLgg2mFezJV9LSYna4oCNB6uGX8kKov4of4t8BhbCYyCtmREZ8pdhAbrkWcK3WKUjCE9D4R",
  "key19": "4J16ZaERMy7W4XXRHZLw5bnLG7YBrE2SQvGuFCDHXoyxqnZ5UKvPh4YgPV6ZcRD41Emhi1C94AmxPbSCdxTv5u1W",
  "key20": "4kvwvbtbN9xwvkkz4EAcG1oy5PhioJUCPYwwDmVz1EBsfcpeQw2dbSv8cCSLJKCNuJ6CXqLzf1C38ioe9kSN2SA8",
  "key21": "2cRStUpGa2TUHAaoZxawhxVrcBspL6NYTTPVRzysQjXVyMrxgPUDkiRzTBmzXL2LtranCrNJtdDC3W1aVMepBJMQ",
  "key22": "24VQh85gFWrQXkvu4gSHQuJz9Bt4xirob5ofgZc2ePFaEtGyubeTEgFs8Ybb3Z3EqSqAevC5aE2FVvAwTRwmdzYw",
  "key23": "5Uckf72XukJdfLuz1RSoq55iNJXic5JdgrfGWWWoeMcG7LGbdaSRxUKcEqEftK7oMj4L76K4mGHZ9whbFBtmCkt4",
  "key24": "9RZ5jNjX8Gvy2ZaPeekkMdsawdi9EKQ9E13MxFkactdofTm1g4uWeSgGJSsQYoYy961iu4jbFDGMsZ2oYW6NQz2",
  "key25": "4wR3nbsbvtS8PH2LuwFdeoCkNKRLx8DtK23dH4hV5ZsrwSvcN6P8rA5aSpmZyN7JJucCTJnRzz5yBvEzj6HA2cai",
  "key26": "2mUvNTELtYN4bpwVWDc217UEQzQbass4dGaTrnbJXtAyPEuCCMpD27MvrwqcRyhhVE63S6kYp11QdvdGvdBMLVuM",
  "key27": "3QsX9pUx2cLh9UHroYe8J8uKUEGMUTTom36rKWgiJGHSwEeKxXCMV1pUtxQ3rjj8XMdUAx4Hdf4YUAiWPc9wQxFg",
  "key28": "4e9BEUaZvnxzYxcQHQjFCUy2PUH4vkC1oXKEczoeL8YEHipuNjhsusHMiKp8zU9kQwvWuAeGysKY5VM9spYsFSyY",
  "key29": "3KqddLmQkQ5JbAJwt2BJddV2jtp1mKnC3wwqcnfBYJY6FNCVqCjhtbec31MVZcGDMeEhnKb1wnt79d7AxQpqTqdM",
  "key30": "3auU4gq4hFtA1PWcYbaTXJKCNw99bkQ2GiDi1iSVHgH4yHDH3UF6uepyHiZzuPDt99rBiQWmwBV9NwkVnPf612TG",
  "key31": "4M5oeCNo1fYK4pRC44G6UUQ5NJX2DzH6NYNMENrknRysDg6Sym2z4DmcQi498Y9sXCMfF1zE4hvvpPiUbL9qMPHq",
  "key32": "Dy8SVj6eGr9zbSr5xpeFhgEwkNkymv7ykwc1MHjaPivvmS2v6g3TXCpNJvmqEj5tQwBXkHodp6YiF9yrS5GeNcn",
  "key33": "2jPNzfCitmDYWFQVYPDQT7zJWSoDWbh1FbsC6jvBnfc2gh8pV6BSrygZJ9ThRFwN2WKkiy5J8b32bqib2VbzrG2N",
  "key34": "5zNCkKWFxaW1H4NcnkNqfvFdKMZu3YRvw8tC6PGJju4VPEC7dDx16cfg3cLGTjsf9Km3EiiCC9G3jqn5dNw8v41K",
  "key35": "4ZQgRWfpfygb7tNZ1ceozqUPLZAmb8daaMjK7Y2BphkBARvqarzbPhQhwU35QwYWDyoPmUGVbLMqMaZ9d5v5SSn2",
  "key36": "5MTPT4AY2msqhhZUhesRpJSJ4MMNRbxT6zgM8GeowC94AV4buWjiQEmuBvoznr1GRwymr4swbJBuASs3yWgUkmQU",
  "key37": "5Xic9K2b9rLPdLihQih9TnAU8S5u78D85kVFVSGy6t57YT5Cp2SuFsBnSHFs5ZiGzjk9HE3ULDmQ3NnGXf6EJ7fQ",
  "key38": "Qr8G5eyvBamWWsGqt2r3a4jiHKQCKNocS2UZGTxAtjGgyRja8t2nqC43dEUDe1dw6HF5ostDhs57w4MEV22XRBs",
  "key39": "2qfR2yXaisqE8WtCdswuiudcsakAJbmaRDCowuYHwG5N82JvXjc1gAuvB5K2VnS8V9UYEttbM8UfuAgSwWgmsgSH"
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
