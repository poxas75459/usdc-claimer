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
    "54631pTA7jwg16PAUcJr84CR95BQBfySSbMG77apZ96zyb7v3SnQAUWT5Zah6Y3aMmdWL2j3753cD66EMJQMEeQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTo4nNnQRFVZ9jNJQg3vhdJMn6ZbkUf5oGJZ9PEmcvzSSWfpoA7zhiyhe9qRLg6tHkWR7fQWr4K8odvcZwvhFBp",
  "key1": "2GXf1fsjsJxbX59v5HWMHYKL9yUEKZrE87HAf7RyK6UG2b5ApRCvq2No4XxJYxVM5rstooHadLeztiW6KEpxC2zy",
  "key2": "66kjFcskVAemtymHagjn2Dp4ajukJfFrvZZUyoT3cDQnbogLp7eXJSMPMxirFDvrmaWuSS8zbzfB7YZUuA3z94CU",
  "key3": "5qRdWi3SdYgo5qUHSKBnCJkPxdxiy54qGrC4eVNSmAHbiLTb4n78Gb7p1zk83pTmP1xycBm6nhHPKNXTm4YcVCo7",
  "key4": "4v1pkxprsd4QQJQ1JRYXkunGq76tT2WGFXqt4JhZ9XtGscqtBxM1vfy8u34QahVJgJzCVAQaEtrKJT3LhRhoXMCe",
  "key5": "37mBHSPZ7i19YeiQC2x5JZ9766j5bDSQYeTfgKzeszQMqfdc2XCLdvgXn4hXuMzSxTX6STMWXHCM78Txgd2HPVGK",
  "key6": "dYgFApEwu99UfbeiPKBKv8s57r6ffr6jipjHW6AVp8ePToz226EgC1fk1vtxxnyCzUAzwYgrqJ284E1oLpErrJG",
  "key7": "AEonXMdskPDZsaGFdLf4e5gnoHFhdK6gEgRa7NSkdkGt7V9dSo1DyWas4t4ep8e8W9aD94ZU1nkmbNvwbFSL89C",
  "key8": "2rhtFhkj49yV46touaDM5kaPuPqJeTcnjt8Kyd1hWW2AmLrLJEgmWTQbBG4BDzMXD7sFTqLbTUJcKaJ82dNRw6Q3",
  "key9": "5UBrxhdqrDCGT2cqquS8N8AvhjFHyf1MoTv6cUvhKC6KQmo8YecioBgHVDvXpCjk4C1ydqNTd7f3eKvfrUMVRTKX",
  "key10": "5kUWZb3ThLhc3MYcT3RrQDeRAhHgdvaWbZwNhgoFQakWv9JgXaq7Ze3u888Vyj6kD6TynvM5fxmjBq4kSoRFR6KS",
  "key11": "2wESms5AgEDZrYW6jf5KhJR5fczCadpSLLf9aRFMdsVFEE5DaMQGd9vGTyvZdXXhHPRCg8vetvGFj6MA6pQAZBCq",
  "key12": "2dGLDhBa2y1AP2rhFPE3ccvNYQm84LsFveWVjNDAGCNGy3Gpo6c6SZRiqEMACiyqsVeEttrpWruP5eVBLqwNk1LG",
  "key13": "5uoHRgTfbVaDXniWGyFB3uhtLWFHQeY5sgVvqfhLxHeGsnrLZxTFkPkisZaWv7UJ3hsZz3uxPZFW9YeU739B6LrB",
  "key14": "27MFEecsKPCScQrzGAHVG59ARvhyW9JFTy8f76Rx3kae3FuXpifTceEqQ4hiseEkthYAdCY25xZcN4U57ZgVBgyi",
  "key15": "3x6xvxipy1Lvq7dpaGdqA4C1ZVZRRK9uhNWVYHyhn7soFsvDB2GfVHe9JSmmxNGBCwDJQHTYn6VMuJcXy9KYHkQ5",
  "key16": "25yU6mzpr1qeRRR9Fyo2mheP4Pij8tuUXusBvQYC6GXK72W48uQ1c91vbRnYMRNTxmctmCtem93uJo2oLZKMwHTY",
  "key17": "27agzZ81mZCe6HRZ1J8eAF8WQtRX7azWaiBqDsHaENom6QVgF1XJJS9NKwcv43adNjHLqC2iDw46JZ4UvXRzpS6R",
  "key18": "4ab1pE1nDjj4vd1cP5q438zcZ8urYL3uoGggggxBdrKiNfNmu7VnGV4EdYVsC2SnewLzJC1EhhrpyL8pPd8btiye",
  "key19": "nn2CCU5k47zLUuYTGzNiCgH29nLaU8HStp1wYYiM8g3FsEaNXPwbqSbjqhneKidZcBPJK9hkRrjaSuWx2feiLoA",
  "key20": "5UREiupao887D63TUvbgvkUAFyKo5oQKwd4eML2TKeFQQSuhDemrHLH1iqQswufDr8LJKoFP3atu8PYWuD3iASDq",
  "key21": "U67i1Ak1v4UHy11Dq4XH7VQmSXYCy4rY2Kp2Ka6HyrfJQGoxKc6q9z7W5dfvKwxzEhP6dHayPG7snJXhHFTQotP",
  "key22": "5u1N7YQ1cCGfmYsyS1SABvMKNiffjg9JRQ5o75YmtJ3SehXP6EQNhtPkNxYz5M8ePQUeCJX9VEFJ4HHwTFpgQkku",
  "key23": "KMBkR28P1oQHMmq9JKRU2dqC5fUspiwkQ4wdy5zT4h3RMSJzxehoSDmhGp9JhJXGvdtZXefNMExvYZAcXTs737S",
  "key24": "3TN2T2BePZv8knuLvSdSdAPtFqK5PA2c7H3qJNoPh7UfywKnWEpQaXs6s9KX6TEM2hVyL83iSG1R7hW14eE1Ym8p",
  "key25": "4EQsHMejDFX3arcwgiH8SLSdWbJHrNDWnTa1mwzt53BLrWcYKXTBYBR9hVr5HKqPcmtbGr27aZRkNbhD3XWBDrSo",
  "key26": "5ULXYc4DSwgpGGvy4KMakivFqu9qXigp1Dr8iuWyWJUgJVdeERWnfDuGeQdhvQisir2V1hw88TMJSCuLU3pTy11o",
  "key27": "52dUphJ2petPsCsbmbbZqbHcD2rZAGzX6TdV1pdBHbnqpEGpsp4bryba9f42HD39dUWC16teQU1Y9Pi84rwzMf3z",
  "key28": "4Sd6Mx2eebDVDAENxsevDPkC1Ui7QS2ntugVcf6Cp1ipP8uj9Xfei8KLw56MHQ3Lxxsb1h7cyDgGhG3mwCzRXkGE",
  "key29": "2JLttdoaTmGeMA3awMH6bEaJ4wHdQ3TqsLDTJQVfDoY6zJhenCyUmSJtW3oNxdyHzndJE8nMB164PthAcptz8gfq",
  "key30": "2uiWf5bcL2axCpDPqzkyyd82rMo6k12WoCT3MvUTkwScvWvG7RRV7wdaVRzhTDZZT737v7vpCDhSUqPrtEb2sTx9",
  "key31": "4Bk1jDBvmYhRSv8LAt6YrSrMkGvVkhnVM3PZXTGEVQd8r73naYsFsRQ6QecbLig7KbMdSSpNRC7LMtqQRFoosQ8T",
  "key32": "2gfN45G4M8YdaMgLQaFQwxfsPyvHUHUTYZhApca8ufh1yRe1n8Fd3CsnmiJT29uz9iQX8FJMvBxVTUZ3TcTa54Kg",
  "key33": "36pxxi4gPK46A5RuKDHQaDyYfDWDTPtopR7M8H2BL8drgAMGS7cQu6z5pXEkyLSWWokEwUyrHqWvUCgF4p4QEguS"
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
