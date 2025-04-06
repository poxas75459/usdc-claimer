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
    "2KQc7Qnz8rH8RPU22DAfCuH1byQh3riWyMwuEaEmpDvUvgL1Lobqfq9RxRCFS86TxhYwRshkh1g5gRm6EYUqPmFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66RyqzwEPe6rn7wCRkikh3AB5BsFm8ULwH2nHTCY1U2yWB26YLJQ5hqPJjPZr3pi9eMEePDH1iR2x8ohX2sExe4J",
  "key1": "2y7MujCWoDg7MFctANUi1DqW5p2Mjf5NDbTLpmJesVMpTeEGfMzjfydVZr8DgPvz1w1eEJAFrqTt7vhUcvswxKTz",
  "key2": "51Jbu9xYLyvo3SgQdoVYYuUMuBqnmYoTXymD3kYG1vJAUTkijxHv31feovicoGGVXvQq9Z8oxCkZBoZfPgVJfn6K",
  "key3": "3fey5y8d55R3Vo6EhRpGxpH9KfbF9yRNMWBNTkZHBXAkFHLCCkot5GM2TMWAAbL4ea5Z9aaqNyfkKeZtaZR1dfG3",
  "key4": "3QLbSzikEsixfcTuKkEKmVK5F9SbqQgsj2xJfZ6GEc7ASfQ92rdy66WrNfKC6YyZGHyidLawBxwUXxeSdxALuXFq",
  "key5": "kqGZKEk4UikVxD8ByBDbnAwN7W5RdVk2DwXZdtvUmkkdMZ6qNVfs3gJnXfJ6nzPPTK6UaUdkJjZ144E5YwZhu9U",
  "key6": "4NJ9GURAqMqMdcK1tYsw3cwjeMvCfPtHAugmzHnqDLNckEiU2p9s2gDit2Jm6VJrcw8MaiRUrCzkoHvAhkKJNbhU",
  "key7": "27RaNqcb3uexsFmiGpBSAdPPdWcEhBHwUCeQfSzHvqKtcjQnfDUfnS7B7XLoCpdWYW5cQ8q3Z2J8BQ8hYR8FaaMs",
  "key8": "3dPTKn7PSJRT9XJZw3jYpkKQYdugXCkw8ebgXNw5D2cSyvk93W9eorkug52K3QLc8fTzppDSK9WjCqXmhg36qFP7",
  "key9": "4XzhN2x1MQnd5YvCm2fBnsvByrR29CWvq8heerehXvXqX4BYqBVTLf2ry8Y6XFRe4KCPnAHQiNEg8PEu1GDMcegZ",
  "key10": "3zVXzx4yXBpsqCnUxDSf7NuDSyB5wnfkPupSDwjvRAYgsoFaHyb4cCqUPQG7EcpzuabCJHbp25R5hFgUJNonRF4q",
  "key11": "5nySicMkamg7HcA3Z6NebbjqLWgCGMAB8doNPDW6Y8ppSrvuJxXYzEfSR8QK7KaY9G4ZQzPq7SfQjt3NhzzvH9Ha",
  "key12": "d9YbBXtiDdqSM35fmyDyLsGdeu1wM3XeqnHF3T1PBJMz1yBfVgSNFWHD2guPRr2s134Mm5srnprc41nLZTcUuGb",
  "key13": "4nKosQXGXX8uGZdy5qqdFChDxCq6gVLGuViKdf4XXHYe2tb1X4Xa8iDjWrMTdG6yZ2DrE1WwzvLeM9nkZUHZQfiH",
  "key14": "51YC4g3b8yzxRX7P2p3FoWCuHHCqC8W8RDL2cfnyYHKU6nH5sqbmKvh5cBMGAoXcoc83NWBJgNPHLxDjKhppemFZ",
  "key15": "5u5EaEzpSBsp4ofbfNrGd6FVDfRitiZgcWDhjG54L8MBamwuDty2TJpe8gBEaVLWHEtZnRLdvRL3evQMvahMpTX9",
  "key16": "5xsRYFr5hxWZzgLFcN3QUes5wHqh6HBt9qz7PpEyPm97WAvnsWD62Sper9V9b4jHdJA29vFUf691MXx7iKx6g1X",
  "key17": "21rkBhJ34bToXRZECGYkoyjbiSWioECxuS8ihhKNMc1aGvVB4T6r5QKUqMFUpKHMbd1rz81PwLZPUct7GFYeEKz3",
  "key18": "5pzPGbBp1AzcYBLs5NF6NtZieSZtz1K1Jeo3zTmkcBGygAfnaMYvuM9dmTpHTnDSsgAi6LxyVYBt4qHUHTmXHKTf",
  "key19": "59Hg6Fo5Wr62ZT7KznjraeK5nfjymbTdkdYso3bYxznVZXeMhDrCf79JfqpCg1LZ2VbhKFCmn7m5MQGBi3XNvNLZ",
  "key20": "41eJfnZES1hZcYhQxiDQ7GfiQ9YgpBXiWipzxMGSJzCn1mHMysRATzQBsW7ipEj4nXnTuQtYGs9TzkTEJg391ytW",
  "key21": "2dNDLQ7AgDcJbkGmE9fA5YbAhMjUe7Q61dv3xXeqCkS193pDcZa8WKcwL53jWDZJA8HaPEpTdmWojSvo78gchJ3E",
  "key22": "NF3PrtftScGm1qWaLZJyX7bQLJAvjkAmC7Po4KGqbReTjF4Fc8tL5L4vCtpbTNK9sRvuhYUvVsqgAmv2LMRCu43",
  "key23": "5aqAAGSEzWEjx4qSs8EayUDcue8J9zLgqu7eoWxcbahLqUu3ec937fhNaUqj8NgEUdUHBcsRTVxHRm4HFuUEwnHQ",
  "key24": "51cwjLBfdPLvjg21tvpNAsFGi3t98ursBL2RcCLHLwZQsRsPJwAg5d9EgERRugEGVggzzbL326FAVmdbeTu63ou7",
  "key25": "GPXSoKT8ja25JnydnEy5Upc7B99nmy1ZJ7wYzrofsDh5ZoEpkQtc7EM98t7hvucxatUbKbPyqQot2gpm82tKZVi",
  "key26": "2op8utkdRAfZGF1ZvEshWWLGf2Z97xtNJqfUcwsibuPEbyxMRsLBEbP14yctV2gr8V8tLrxyV1d19SVgvZdNh9Ac",
  "key27": "4sZehwrgYLEZr5ffYMPRAzGRw4Js3hmM2ChQmAorojYtbLYd4VdUjme19bxVKVs4PEQfWn6pnGh1GXXEWYFXmksK",
  "key28": "2CPusNGd7ejQ6shJnRiexS3ok4zBydJCZKojjbqtJs4Rcx3vBrCauASDhSSFU4g4JEyrqpMntkr2vLhGiTMcpZCb",
  "key29": "KRWewTy7gsXEJFiw43nquEzHikDFPRoxDNCY6Sng9rfkZjuakCTWnAutYyqFGmEV7GQCpjRstWeFTuSwB7u4Rqw",
  "key30": "2UwgPQsSZdEeW1hNewzwufjDY7EqUeNPNhKS5nR1J1tufBJWcagSQsxtq48nPkhyZmp2HA4yzFsi6DgttSSyJdaL",
  "key31": "2MsjGHk8Z4me3mTahpGvqmF5HKNbFyh6vUn53JqBp1e8kRZHCgKhSgmPeyrJMVGuY2666iJMyQfk1fdUT1e7iHnM",
  "key32": "2aNywwYrhkED82RXoz9PJSySM4N9JRM3DiGooDabz14Rs4YzExSXgf29fXUr6piawanGNL7qopMAUANn23faYfux",
  "key33": "3DZissWxjVVsdRqa2ur85dbqqfnBg8jfX6EfeKAsNkuksNH3iC3YuVHQjJV95oUViLupfXGSQRiWxkj9G7FJRtGy",
  "key34": "5vF2ptstr5CKC9AJwye7VJr2DViDhLoWzZqhCJu9NYkyVRRSFCrqpMRj3G62VN1mve6xRtYWnwgqRPuJoABDEUMw",
  "key35": "3crr1fevmRbFmJsncdnCXg5HCxEqd6AunyidpASKkNmFudWQ14aoHJ62qJPNwmrMM2B5iHwdDn1uyAX639BkahVq",
  "key36": "4rfEeJEr5ESHFpA2Z37AUfdYWikrXmdFr9VwDKs7UH6Yec8WCz43URUTdiRd19bBQLjt4hRXAGfLpz2UA946hoNi",
  "key37": "3vdCV9HJL8NucMbGd1js3ihN7UU2cCJ7Z4xTbEZSq7sB1WBhYeTXZkeRfn17iV7FBCYHes3dzcwrL69dncqJs2Xr",
  "key38": "FP8Vuvpas7TrLV9J7etKTzGgwFs1de1gGfvg9aSEJYR1yKC9KET8vfgenToFtjTp6UnYSEiAWpPmwgo7Ldj3nGV",
  "key39": "QhNf8LM45B369DcostBvM4HRdimTEwBPXS3ytbM24BmQDasi76sDF7vJLGTp25EC4apmcxASjD4PUruuHfGFsQD",
  "key40": "64Jniv7EJsXpzUJrWaWg9pwWHrGV9T1To4QunYaxUqsCDVZtMtHRv4tVepXXZg1Fo522mBFedYCqzw11jYoaXkeL"
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
