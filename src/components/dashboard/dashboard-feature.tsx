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
    "5buD8MmpLQQ4Jc8HFugPdr8sPCdQKCExfMu7CLkkX2SXxS5RNn1ej7BqW4kDMRydEf8UYCxrgixQrUH5aFht6Ssr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3m9VVUZNRFNrfmowVMYDujxizFWnUL5BR3D5rmA5K76nndZPyTmaBJ4c41ua45RqgYz97UHfF1KQRC3X3jhJDw",
  "key1": "3PLXvjiXBLddXpsPegEfRWyXxTUfqLMZWQbCcez21bEkafjTR5k2xE54S8NtupL6q5BxJTzrvzndmFF84RJTabKk",
  "key2": "4VaGHjS1gbqv6jnLd8KrZLWSTMhW8YeorRrDeH5zdte8auBgAXNk6YckCquj8LvgN6WX6UfNHfvVmWb7prcCUXaN",
  "key3": "vB24kBdBgjRJcABjprP26E2X6N7r7uzB2n1Pf3rSMsAAkW51XCUbAqGjs6bbYBR9nGbaARtFH7s1DVZdc2TRjS6",
  "key4": "3g3JzDZLabpeYPNY91hUiXxPGXubRrJiR7kGG5r54eKm3BewCjdAcSbGEQ7aC94TyG3Jk1D9Uxi1rcpxgvNeqSvG",
  "key5": "eFjcPX3Cn4QYfx69Q5GrU5UYutCehyoRATCW1GUXFk8Njomj9HPntmWGJaqJfdQgNU3BKPk93EEbsBQBMkVB8bL",
  "key6": "2C7yn78Z8CThUKXcPPphaNo91Tz9tY77GYiCBZg2pwYZDebR3KwZvmX5gwmXFbCzvM2Wn2L91dgBP1fhfmEVG4wP",
  "key7": "2UoZCZJ7ZDzDCMppjivFNX91m7mt169WAFboJdj9R9vxs2rXtEW2bVnFuexeYdPfYXzxx9vhqW3BcJMur5zXWiAN",
  "key8": "2PDVPpJuMCSHYXegACk7hWUrJ8FJC8RVvcpGpFQ5sdnZUYYoQgiSMok6JX1uMminVWhNcsFP2G8jedBXFY1g4k6Y",
  "key9": "JuV5kKGkzdwaRFV4fEoj8bkSWW64VyiMyN1u6qx8LFPhxP1QXNiacyybmrTKiVYcZjvK6r2DaDi58shkTNrGRJn",
  "key10": "htYpVGQCUsASTLmBcrP1kaabDwfcNTp8Jn1R2wEXQCga5pcj17jpDGkVy7HhmxQYcDzQMeSeZdswt6MibJCR47T",
  "key11": "41SUkrBGc55M2xdMMPvDGz6yaaigUouCxr4n74gioN233pua7dXLxGP39JCN4UE4st3RUdmn29gSbciMFhCDK8FL",
  "key12": "1XMj82sWwtjPCB6CPEzRpRtn1QBUj3GNoZteGnb1HJumPbsKMbKvpwsfD83rUdEUr6xdStcFXhojJVnHkv56b9f",
  "key13": "3DuiWvj2Wrt3xwvmthGHEY5Gc6Wpnoez1thLK9MFZw3Y3wp1qoKG2rX56RGeUZ7NhG6ipAE2tBusnLucFku4ke11",
  "key14": "2ftU5mQuHqwVthdbYkxogRCfdTakj1PUQM17yD7Fw5Ho88xsR2Ar7pdK6LFcuDJQaLFhZa87WKd1xJggCaMqdyix",
  "key15": "4dCTHYR5UsvvoDPM16vgGpgi1DqkDhos4BtiABzeyjm8T5VNrF4keVYWLzEDP2mE9bu6Fpw3E1sHwM6mSWshswCo",
  "key16": "5DW55ZtwZkx58DA6UWqA1NuspgywZiGtou3Xod2iX1jeovUR8kvbvTgQgDrgodjkEs1BKKJ4mEVJLdv9BN4CuDMi",
  "key17": "22s3FMz2ZVfQ6J39mmwKyXYBxz5i9f8zF9bUNwufx3DiWK4qHC2si5y76zP4Ns1mpQhMhL311WZbVUmfdCAcV3JY",
  "key18": "2CXyqzDSCSApSAjfJuX5oH1mLu2CUogPXdNTDemrWi334kVpqkXJX6n6bukhzM951T9SP1mYojLEzywEJ3Rzd5rk",
  "key19": "wQ4cQ9vFb4GobagFnQUtbkQjNBMWH5hh4xoqPbaSYZ15J86hMSkZbgEPVKxEYNrdUyHuCWR2yZVgKsqD1Hra1jf",
  "key20": "4QrPe3LxEubJznWAyJdwX4WUrBRZhtwrtCvGpv37ufF2DVAZqoLG3GpzAQhtzXtsg9hDHxNjDHkfzbWmcJjJXfnU",
  "key21": "8t2DDBpmLTHqgpkcE7oSKNi686etQg1vVgnriJtTZeGqcNZBvLgGMuXvJsApkzYaAAhdYhuXaVrZ9tsmFpQ7rJM",
  "key22": "4n7ioaLpzLHb2kpj9sXbGbK8TwzZqfottVYHRZdxyMdNr4NAUUAHGafFvW5d4fErKKKvt8cRwCjJhGySavYdzFrm",
  "key23": "8VaM9FQQEoam1Uhr1KGx9a7uPCjzzjwtXw8HyHq3dmRuVNYF4xWiB6nyZNWASvq4YMPcdbJE99xXZoJ7W1NXFvZ",
  "key24": "3X4X2qAcftYHiHiB66kCnmSEdkHYbYgqDXBoSB42v6tGyizszWYNkge7tSyVe813gigpz46kNqyHYECZK3L7DRRj",
  "key25": "4wGUVAPhQMwEMjFfSpcUNu3w7UMzX2QZZecuv3KauDib5amyziDHupzA2CvhNqRWTtYNLCxVemFyWLXjUjezGh7d",
  "key26": "3S7eTEAPfRTwJmV3pGCYAGugQCArDm9U32hHgVgQcLUPc7oLBNzguxYPzi62stRCAVqsgeeuNQ54TkNcU3wnLSSV",
  "key27": "5qeMnjt43YZ1YT7mk6XDyfCnuMwUYet4fwJBugGDFsaPq1bYPrUk9Qde9RCXF4qLcAu1ygVQPURecuYPR59fw6DK",
  "key28": "45A4RAdD9NDctDRff7oXJFCSj4beR2uB2EEvCJ3Q9cH4vCzoycAVT8EW9ru7PMnkzhKjNC29JBSxMH77fKCwQ9bD",
  "key29": "3PABbFbJf4CJFvYEDewEFsY7LS8TH5YKG3HjN42hzVZqCbjbdF6WLLLCimsGeQ26cg8mp8Z8srm58M2mKeVmM5ox",
  "key30": "5XnCWZkUqG8j8eEvG62BZRF8z5vNT6ckm51n9AdVQD48X9CpCm59woUTwurdSsXYfg3ZBT6G3UrpwVmmTLVFjXt6",
  "key31": "25zqdA97wfDViwZ6ifx5PW6avYoAnzdFi91YLPUcVJj5kstBCAVL3ZqxrK8YSbBSJ5GMcuLx4S4MHHUD5sUtPY2P",
  "key32": "2H7j7XwrKL6yx5fGSsVUSBxbtxSDiVHo8NT3CAgRzQtFtmk1gB9ugGCGzFkSPjNNMDK1R9ecCvMuzwAx51P4QUhR"
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
