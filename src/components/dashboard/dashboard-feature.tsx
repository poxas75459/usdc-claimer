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
    "5oWZjechaHdpWomF1UxqM5A1XRHrH1tdSABisKM9o6pPmB67yxcrkVpfPByQnFMzaj9Z7LKfaAkCGTqrysT8HLUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TYCpU6FuLnngk7AcASb23BHMEzBjPoAkjzSkQ29jVUWajotobngGsw7gangSvvpb7dFZb85pxYycr76UoiijiUb",
  "key1": "3Nme5dZuJrFWLSRLFvLnB9uodCnY6khgpfNX95UJ3hNXW6hzbuC5ZWr28LPSPyrLrqhcfBRbz6vJNcvZQhAQZ1BY",
  "key2": "BJGRtEaWHUjWG7SW5s8QjxhDsj9nFqwspoFLojanTEuGTD7StvUJawLkF9P4EvQLSY8TKmDTZqQTzzQjhPpQjx7",
  "key3": "2D6iJdG1BJsTzaZtuYPfPAuGkotmCqfCMyNpurDvieZKYXEUkd5J85tShLJKGmT7ZyPA9TA4Fn7hbgc1CtxjNjd",
  "key4": "EX2LM4TjXAFkvzH5SdquEqRf4GUeiC35StY8g7Eo3V1bg898wwxUovPvQoFagMNPqsYxzVCok35Gxozc1RoKNhT",
  "key5": "4TZwwZMBJBf3ooxau9ZPEi7iXHYuDu9DBqM84PBEMfz3gsFb6FqyAJCBdqew61CzWzcowAkYvLzLtJSsRJTFeRN7",
  "key6": "kDDhBDnyYmKs3JyTYEpVWQDyDu5un42QQipiEQC47He35UfZM9j1YukUecLAsEGUdoER1MgHq35FUES864xd7er",
  "key7": "2KmVSj6uNd6Vp1iNwUnQg2Y97yJxqQv7L8K2wqVT1cNp8zZrYqL2fCLm97UsM1uuddUkCZLxYTcvjGJT9ek5qZHf",
  "key8": "WWM94EBrBwjUu1xDiwYhqFgNoAKdfrcMV2rSv1iEuARfSJZ27VofSSTGqJcyRTYc1VM1qWbtuYWjt5K4DQPcvTc",
  "key9": "4N9pRnouiJcgdHt1cUkzzxwD769w6vD2F8Zd59eamXPPQdnzY1X85EoT6Px6Xb81MnMdfNUNpdT9bcd75JFHM3mM",
  "key10": "3mn2LAfhXrwED8bhSw2wUz2QftMmbqLas4CbRjMWsXUWLKMeD8oHGr3FNLRxLCULxrGxK272ZchoxGRU7RNPQwFh",
  "key11": "5Qey5N1tdaWhfaNwk6J866d94gJcB2vGgkf4hjRwEfubiLnUz54fyJKkd5f8QoZC17B4BHCzEU8wLmkFxTEEiqmc",
  "key12": "556ho9sbfuCbzzFGSERXeMX9bn3wCeAm1y59JJGYE8ZRpY7jJtQXKHXdrHqKHVcovi3RnaHFrwNFMu7cKzJxYYLC",
  "key13": "5ErdxAAc85GX9q1QKTBLTJJ5ZsvwWUHE5ZUMAqJoXTAW5TQQSESyT8eccoATt24VUBmMttyn9JrKusDzYPSGUH9y",
  "key14": "Fzy193duKTqNHQykjp1UAVzidpfRaLV88b9VEaiXjBW5EBZShg5C2oHQzzMEHHmby6tRiWCAgtezNYA1LMnk6JL",
  "key15": "4DCCeJyGYGrDKzoHcJhEBe9tALEKeSn5iG7JoAUNLeEPWJdCeKDqvxoSKFy8skqsBnUcR9bbmjNEDLfiz34UjSxq",
  "key16": "3GmuV58zmTrt8V5sWZV2kkf5XPpjWz6uMvxwgT3zZHrbuFxnbr9u3BQ6L8XQGSyFb8bEdAGoy5vk3ogay7ipjG9M",
  "key17": "2Q7JXdeBVa3fZWtCGQDFkvqZ332aduHuVFmwwqgZZ8cuvW1zegi5Zkv77itbSHPYz6W3c5xjzZftJW1Sm1TyMZiw",
  "key18": "5fwFQpXKqogjvARZHf3PGxFTAetN9v4rcinkaA5eQU1LfAEHZcB8FzvMNxvuQDjneSMipkkBaHiSwCXpMFYucWgs",
  "key19": "54JUmQ5r6bNTZu3Rv875T2gp281vuu7gEas29aaGwy5tyTRs3qfsjfhg4ytTQMVBp7JbA145KZveRdtQ2szgvLXU",
  "key20": "5Y83VpKMRN7LNb3Un7ddE2Kckdfs4AF33AYrEtF9jkYWCPtrYuy9D9a5awWARYTBzfwyWZsec19LrzEFSRYvcFJm",
  "key21": "2NPt7bEWAzLKaoow4h4MrcCHBPLosenyzjprqt9uY9GiT1wNAdemCKxoNoBaQz6PLaSwfM8JSK1LGh39WgrwZfsu",
  "key22": "2ihqD5GxGmZXwiJcKiVEecRq5M7W4exuCGT2juxkW8S2FWpYRh4VTrDuKAqEsi4HTUxREdaHjTGrxUpdmEcDwKJk",
  "key23": "5SsvmwNadQwfUcuK4p3dBjstknBKpqkWT97nx4P64zK7jJwvPonW5jxsuJfrAfYQ3X2aibR2A6iJapGZ47woWec2",
  "key24": "5eQjqByGJ4eVNH5hrpTgV9SrFwNyySrF9MSDipAPVaZj15FDHyLCwsArMFwy3awWmwPLXbVQyjmpGQiXfm9KgNW3",
  "key25": "4tTiYSSqCuFqxKReA6o3tEq57tHu11jMRj6n8vGE5nZD99nzHvQSfSVg5ZcLjFpe2N27qvGJgPhnJZEhSEESM5ry",
  "key26": "5JYjC7TiK4e9b9hMGLAYKAnp5apXjx5sg9UKTiAfy1St4o3suZdYRavNZRwjoUZ429bqd2AvfG1sRbYiDsnrWfLr",
  "key27": "2GNNy6HbgNyqPQVywuDPMSFhCuRGpxZvpqFddJaz5oVEjpECDpMoZd2Rq9q81YpAWmtTtABwcrdwyVggo8z9Ceru",
  "key28": "3eeM2NWY59Bkvjg6iVC8LfKvUBBxTNegNqKB5YiCAqmefTxe8CHxCesuhmHo6t3n9rqh1SasSKgJcggXLhzAi4Qh",
  "key29": "5ij2JyPJnGmUMKHXkb5uMChtVHg8KQokJFAwCtpgBsARRa18QpGiwbbFPLCQmat1vDTaYRKQsk1d2NyJX82dUHyP",
  "key30": "4nLqBj54RFDT9PfuqLS4XpHM9nUEhqe6WXXB8uYukYYZP4FypDgqYNaAMpU72USbALY8tH3biinHLgjbUwn7uRjv",
  "key31": "4zbV5bxX7WkssKamuaE46Z4W3rwBmAYtK3dJzMBZxhJPRFNHuedb3tSgGM2rkAUAkFaX1UK33SXkqY3EexN4g6J2",
  "key32": "29zCFwpyJF4Xxi3LQfNYdBhHqH3n6fTBeBnvXFtbap89VwR8uUyu2nZ9AVXfyfcLpsssyJ4SfYFiBbbsP52GjX1e",
  "key33": "45LNLXbLj8v19Lnj4oKpeCMLWH58WdWed6NxtejWT2qKaNiM5GTA83oQsvGLgpxzVgmnzM7EMALQhVAo19ZUfwUw",
  "key34": "3TqCskMNQ1ZKVrvXcsCWiyDfGytP4bqgQ1w5hLMLoo66wmxjnh7cKD7mFRgjhocQM46FY7YnkVNW4BSBqfuKRzod",
  "key35": "2d4q3XLUeraUs7xK1L14r99h8U93vYkJJWfmqXqKu9ZqeRhF1CukVq2rptzWy9uWL6UhVfAwGLwzfF3UudX87que",
  "key36": "2HM3dBoTX4M2yQSJX3VsJPwU9LsADKTTtoAdBtwMEeRQGFcmPFEbtL1DwHsgL4ch9orwpgpiFmLPPBerD5iHuM9W",
  "key37": "3Gt2PAC4VHf7N7wzPpHCSTDtk7kppdsNnySoY6gJeDxoLuXFxS2bR6EXwDEJ5KS2aFWZzzki2mnquGQvgFinhRY8",
  "key38": "Cip6VWsVgaVFL9mfCfRAU6sn7U6Dd7FK7BneFstp3h6KNvArFUGBnSgdP5Xfm9sWVZfqVY5FpEzTkrMh5FC1YaB",
  "key39": "3q3nutwxznRfSqoG279gLgKFgYdnvf2m5sP4Wek4kjZLGWAGhGxxZxwMhBM6tTZLEnDHmpYTztWrrM8d3FdzmFYP",
  "key40": "2T1fVpXaYzie3fCnowUhbLas8BuAUidhdWvJfsr2U3cWkWFEHdrXbtwHTCKiW8XUAioED4TXXizj8BNThteeGSKa",
  "key41": "28UTaFUC9XM2sMniJFPDa9BoLoQ1MNJCR8mVFTMWS9M4EHCFnSXGqXEeWa3YGoi1LY2pFSBwFwwGGUg6YUaECj4Q",
  "key42": "2Nz3KXZYG89rRJoSHHoM6bvbE2vZ8mC4rsxaR2roQjPDmkCDYronx9FWPWaUDiYQpbDrCNyRhhFHVbNotLu7CULq",
  "key43": "3oWsMX2kBnhdsxPKZivbrBv6TByi9mSkcREk4cQjRMfbjWScqy9RSWfPMgcfzgeCCpZ1n4fQiBtXmagn4rcQx4KW",
  "key44": "5gr7xc64vqokWrFmRJT48J8j28nfVCSKjAJDNzcthk8YHXRVqAmsx8TkHdupizQFB3HD1EsYcTNoyfAnrz8FHViL"
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
