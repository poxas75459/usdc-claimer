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
    "4g8PvSHnVSKLbQv3eFMJAcFVxXhmJWWco3tpqfqn5NHPQQtesJaZAeM2Fd5buY5HfsZyRTouaZWoQAmrV7qkPS59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3eRmUA3YDXj31ueccPZg3ueTDJRzsvv59TyY4V7f2crrQutfs2wpwtZrwdShhi7GazyWgVCbL3mxvmkBsdmaCw",
  "key1": "3F8T1cJ86jTekgQX8wEf1SUQMwbxenpmcVcxvNSUNx9YyUarMt2RbyBNSFDjhNJPzqT6dDzE4Fw5ukvjGY8ENxmg",
  "key2": "3GAMuT1SiS1TRhyvmCShYmiytpbCkv928FBeUcgdbJ29eUKizXScCPvsSRfZmbReVRocQcBrtjx9ef8zCUkFfVGx",
  "key3": "4NhRpVruuwMELbYwpXPGVuMEwr2VR33n7XNk42T9TuV4aD9HfdcQPEH7DfUz3zfAnVjbNv44MMY4tf1M9KN28448",
  "key4": "BAdKkdxATS3VR7Nw1rsTRgtCgqPXXRb8pAFdVfECTKbf1VhHxjpHJfhGMhU6eukejAdTKtJHoWCn5ScRcmyNBJm",
  "key5": "4Rg3Mv5rS97TZzcqiju5qG254zsSZCiLMkHEsxN51eWdziHjkAfuYeXFfDbLtDVSqGNhyJdddfoYdcAwmi1Rixd7",
  "key6": "2vmN3BHWpkXgVuGVrMNLqFsrvDy9KYyguM5tFwYcxdMGPahv6hUyRTbFPyMqtZcoLGzbUSzSsjhebu7mekjCpFcA",
  "key7": "5L7dG3iarUkV3RyN4FNGQAmyf78gHX3SnAKdneWqKFQoP4Ay4unEdyp6DtUPBSbDgeKVCUXzU2y7qXA7KtsNgNmy",
  "key8": "2T2DwCearpeKdkNFJr4Vo4fZTBHAsvrmeiFwj8bUXst7mr2ajFZ6pHPJRXatqk8v53ErpyPaSZg53HcsshkgNnwP",
  "key9": "2oommD5hi8rLrcRZsXNhLAuuXkYfKuhzqcW99aFpxup5aGQi3gm22Tht4Xsu3AmfYU7rFqYJt6JQbTbF8mPg563u",
  "key10": "2bCnEEzQG2LUmMF5Ctp3HU6xajRkpTHR37DaVREQofcFmvZrePbumgRBvqTDsQyUyA9xyTX1DPR9UeKMUoWqJs28",
  "key11": "ZjhQE2qKZ8hFeaFNFuQyXAMaNPAPQFCVg76dpcDR9uhPrKHD37kRovgWt93G3UwGgSWhWF3oUParxcqztdxzQcM",
  "key12": "3QWxxWsgLhpXLJ2pXjQTwQq6GoaBcdUrzM53gFMqgoS9gybd1tWcHU5stABZXMV1cB1bsA1oJDv5Nzms4r8YUbwz",
  "key13": "AACwjgecWVEBJAdQDGL79Bj5rJAxzvMFzhxGvGzutxW6dfiBC7Gu9J9q3DP1WxPEwZ43i1X4pYZgg3SKmSeR76m",
  "key14": "N4hjBqa2bn2tBDEFVvMho52C4b4nMPEPsqNDzW3iHauoeEKf2kZEPXNyha5JJhBSpnJv72DmEFRWvVbjPAZUKyG",
  "key15": "TWnBhUqzcnYiYDbpXD3JqhwoUzuoQs6CzMfqWd99NqMpPB3T79yaQwqYFdsehvHDoJhMhZV5VmCPWXbDGrnUMbs",
  "key16": "64B9TpgbBX1TL8wzJ7o4zxFZg54o7Ze2ceQSR5zLKrCkBnVdTsVBmNRShQsStUa9rWoPDMAC7iW3M2aRrj2XnRFy",
  "key17": "4pTfBdYzxPpafNEksVdzLK648CZXnaYWASo69FcFnDisRuaK6Dw7Z6TkPnMdrvNyWVPs3qLGp9seEGQJf6c7C2RK",
  "key18": "4GSPcqsyuzQw8w1GRXaFWAuUBfUjzDDd7QLWiXkdpwNcbgiAbWdhqZu6xoRR3GujarNpwyG8mfjG8wdRbR7Xcx93",
  "key19": "4L6hL3wwjYVcZY1sPA2HvjWQirc5dzLAokjtkHQieoWcRbBmvkUte6mnURShw9p97xUNSavHqSzDq7nGnivN5J9L",
  "key20": "5EqvCyCqCpvRni8ZUoqA9iExaaFbqRa7qkeR3QBJqtYkTGXPxY9G9oD2LN4CjiXbGk98u6D6KXgYuT9rVoBrgikQ",
  "key21": "45LmeXTxv1W1XWzVBJYj29Cd5Z7czMPmDi3NBuogG7cK6BUKk282nXQXWipyQzgnf91HLMTbotS3ERUEeiHRS1ZE",
  "key22": "3ZK9d5QeBCPt85Nv1MdGFU72zWCQbNDjXk8bMkf5LjE1mH2VaRDBY1cbfrMZfRjw1uVciVqkWZcKsPDsBC4ZghPG",
  "key23": "SamgkoksaheNWMiSmFZAYtcZWZSP7NmxQZK9Ho5DoXF5BxK6pnhqUSSRpC1pZSxXwYFYmJkuyjyAg6GARVch8SF",
  "key24": "4gwxTJqkETNbWYddn74KV8EoiZGXF9UB6z7RhMaY2PKr9jeN3mXcnN4yjoVyDBDzymSQNmE8q16fM2wTtPyMDT24",
  "key25": "5zm8c4CG2Eg88yAN7sJ8FJ6oMaUG1cM6MsZ8X9NbgYwVnGZ7EecNA3f5ASmKojxY8oof7PKHxWVKdcdgX3zQw9Si",
  "key26": "3eY89Le8Eu1W9n4D2Dr9bCMG4WjtKpmk1b1gNQaHhPLDUDi7JtLnKBqokZLzw7kHh2mwHcKGBtaio88fxr7FGeVY",
  "key27": "5Rt14eCxHghH7BHZnBuJ3c7CjUC3p8euxQ7s3ZRaRWGMdXYD99Ca1cFiJ5MZgZ2YGKFSHxMFDDtikwdSmDjssKEu",
  "key28": "46eKEQD6N2PitYxF7TULV9Bhfuo3qxRBNFaA9Gftw8EuPEStfVr6WDUvWuwpETkNq6LUZxRgSQSicg6DMSbKf9tx",
  "key29": "3nJgCFapoxV75j1Ww66BmwVSfqmPhxz1423xLG2KheeC9p93K61y31i3evhpNkLRQR64pZMHiif1bWM1JQoX8WMb",
  "key30": "cSc6DWH6Cbcu7V2jAbRaVLT9b8dFjD6jXvEsJbmvQ3zt9sF2zANfMLERv1VbN6Nd9wCQcUeQVAyNZmuVY4dzpeD",
  "key31": "3yn8Z48b2RSjCrzUiSKSRkdbhzLix6JuinrC44NcDD5NPEzQM5yhnmoTfSWfLFnH1c353hHtVQgoAQRWXn3MzhBx",
  "key32": "2yP27EDMUAAoqkiXm6be46hzpBq7kqMLZMwdDgeQd3CAWjyfp5zH82P3fENDeUzWCmm9GxZQ6H4nPqvZDLAe2Yfd",
  "key33": "5zo34MFduodBQWsuJDUynbYCHPhNBmU4j2CWLD7axJtP1KoVNeCFLsTc3fxNfaeWXuRJw5338hKpNFugyfPkBf6Z",
  "key34": "2rGJs4SUfsrSDGkub4wFfgYWv1ddpsCzXdUvscwYKgVrmAoidyZxdH4oQkjSLCaYYr1XzFQhkQyfAjQNKyjFCwyk",
  "key35": "4K6eKLWCg5XsaRcTcRhgnQpNnqKBuJXL7oUZVYnqEMTK4gWU263w1cK81cf67pZZcuEJsEMdNHfeoo1Jr5CVEzip",
  "key36": "4jyg5dsFkbfgK2fQSBxssPMhZKH97jYd4ffZLWHrNnKL26UoCVD6MNSqxwgiHKW7nSyrtSfHy6yfAyg8LTEJadqc",
  "key37": "5Mz44h2Bi3vmrNdi3GRoCRqdPg3rNGt18PEpmHP8MGRPVapD4XfCr1Y1tytd8oHaCuCc2zHx3JFq4gzheBt8K8VL",
  "key38": "3qBMihDmV2GsRmnPCNYc2YB6z565AFXdfWve8Lg5QbLi77ivFkvPckDiLeRgwn2QP7cwChJdeASeyFber1fqPxfD",
  "key39": "5jQuk2UMt6hygzXfNWyLtuuSofJzT2X14svtvKmUqkzJFN9C42pkPwTis4nvEviHxDDbK7Kh2RTRzS8DjeS3nksC",
  "key40": "2iiDDJDcJXhQeRV7dbbdAF8HhBGzvQg4dydGfmtirknEzyKk7j2jxbmCqbaQYZxQWVLnN3mgLxxbcdynNfpLCyXd",
  "key41": "5ZobvnZkyqsAPcKdGpMog6cnPJqg9pMfKwid4pmKsWGV9iGC3vRj8U5iphoRk53MgqhsRM5zC17koEPRm6r9gWiq",
  "key42": "2gFETwLjsyQTNhCqgVeqGMUUJKnZQxHy2LtNmUzY7pbfEhwKp9RuPKu87vYbWa9YfzN8e77zwG3gvURFMPatKxP1",
  "key43": "WFbCDMuAKbguqc2vp7dPirwBFhirEWkrvGjSP8zNCq6DStwKvLY35ReW16t5AjFc3ti7qApR9Cbarf6ozxgLHiX",
  "key44": "2X2A9S9vdvSijy7FRZ1fwJvTjJ9T4Bi5r3EnNRnrq7WoyASjtD5UoNk3zG1Bsh3Zn5SjgNktLskbmeM9KPCeiYru",
  "key45": "2X7zcd6ZibymUCx2CztWLdLZiQrEZwhELx1dtoRR2vDE9hhJNp8wsJPKqN5xWxsLURLomTJLzpuLL1RzRUToM2ha",
  "key46": "5JEReydju3tjAURMzzjgZEZRjn8Si3reKVtWskCsM9ppcfWg3MBwieYg9HVRTk6nnYXwQVFPnRbCC2nJ7n2SiBka",
  "key47": "4y9jfNsM9ocYMGCBgXwqs1hnmxDHt9QX3RFvZ2fSZA35DVnYmiWSrWqXL4Cthhyg1HfaAZxB6wMrNQ9DBaqX6irg",
  "key48": "4uufaKwtmCNVcaT9QetpWAWEyZSXedw7y6kSEM4pHbbjDHM9nswuYbE2jBJFK6ag7XxarMdgAbHPuh1rWJFFQb4x"
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
