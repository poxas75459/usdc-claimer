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
    "3c7QDukJxjGEKLxT96jgxVRGtMDvv3zSRNaj2W8YaBw5nyJD8kcpKLReqwyk8QNF48u4J8PAcjrcDQGgE3WJg7At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChgCd4H14BfyyaQCpcc62zptLTJv7WjmuNHW2SJXWtBk2QjsSk65USQoDSf6wVHH5JdHQFmqoQmVBTV9tZZh1PC",
  "key1": "2rrQChSKNFVUq15oi1LcEDB8nGW82Zmc6KejADuScPGPNbVMta2qugxgV8ngQeAYFbd7YFK3MN6pqxCxiJRQi6Zn",
  "key2": "2VFc9mi5eZQ3Lg2ymKemoAG9bAq928EAqEikEBddpBeqUA6dyZWZsDqGNyefL2F4wXyMaMELe8YEuVgYHReBJr4K",
  "key3": "3aNUZ6VQYTRBRhwnydMfxnosxMxXGqCKwYPNR2GUa3irrphvbVUsoQwVAcegHY19jcQLbJu77dw652XbCnt73ABL",
  "key4": "4KHuCEdHa2K95zfvi7o7QDXT3GQnYnXqCxx7oH63VDyL8q93am4Jr9Q1WeoEweQMqfF28AQYBhs5ZSaXr5NCvzFE",
  "key5": "mFpKMNT38zGHgwssVKdxKsV9YNntpVeNXZUJQimu6bw8qzStjQaz3DsUordaBoVbeFbCQD5HsxiwE5ApHBSnx8A",
  "key6": "sRH7K4XjfMmKb7xhAHZdggPCcybhm7ovvXJ7hmGS937PPcM4VngVcEjaMui268nYZ2dvAAd9AQ9uDWhti9FCwcn",
  "key7": "4QWZAMi3L1pe7CdPpJZfXoYZLikbPsgg256g8GCJ8X3KCRR3THiGkRuSkWf479rxZYtgkiyujb2mAv47jeG33dSG",
  "key8": "RSB8ZDgUiKvMfruAmhnTmp6EmpiJGhJF5sDexKZwZTPJ3J6jKvFN1C5csWna9ECy2kGTfQyTde7Acb3GAvWHEiC",
  "key9": "odXPkTHHdb62Yf6bcPemF75enzGWGsCxn6M6cnotiM6dHSh5BPem7QdPUgZo2yHhy1H3k231rkrmYKbGQ5r4ptc",
  "key10": "3D5TYp26Aa3mTSsVLwKHFf6i44dYhZANHkPQXwHRB6SfwhEPSUsSexRicqsApp6CAbW5Z9LUQg1ZnhRquW9CAp4d",
  "key11": "3EmvW4CqgSCZT5STJrcRzTgdfnFHvdW2E5bExuvZudxJ5U8ZAwi1CtRtZ7gesRcpjoKeVayyo43RtDSj2ACqQTFc",
  "key12": "5pDrYESotrUK45m9kgdDT6E4k6xnKd4QTuqam6LwKo1U2ZA2WKHWHSQZK5cY4chfLYq4CKgZLisujF5bPRWmtssX",
  "key13": "4jtxDuyxg5AhMXqo61BdzHeA5LoF5Wrd1LeHDVFWVni4rLerZiYYWU87o4Li3MCwk5p5L1T1irr62AuWJRMCRmhP",
  "key14": "5JAD1gWXCU2cWUGUFkyah4HTMfDYqHGBvFTcCHy8k3tBBw3MLV9VZoUUf5cNMY31fKgY6HVX1BAjU9cm2v1dJUxi",
  "key15": "L7FNnKbTsyEmZMLaomjCgdmTZkZ17HFFKTCucahEjbYdentZsSYLRcbfjx7jodEZ4hfPUReg4f9RoRq7xx7mpLW",
  "key16": "2s6N35aQP2yqLd9z7hhu5QR1XTAzk8Bk4vn9ce3kYJtY3YciQDeYnqt9KLHXn1R9JPVKGGF6cthMrjNUxsLrL8Qo",
  "key17": "5e3nZri5VGVcrjndspLW9JrHeTLdQiedr4zz9m5MHNYZAWo4nzYRYgyLFAjiZSMSWWjfpMegpi4g1r3Eku9KeRpi",
  "key18": "4caXC5B6UkbZCwkxWsBQMtchG1C4u1SGpz2rCw2hdvW6K6TuBt2qqSCDFsJp4ytnNyrDFisrXTzvm3LWuH1uphAQ",
  "key19": "4o1fm1eE3rTJWQfraJj6xrAMq9eQ2djwn4GAEJjKQa71tKZLP7wiuKf6FTv9TL5odvYqK87SGEfYMdBGniNAYABv",
  "key20": "61apjP8FLEs4CtYXbWv5yYmo2R2vtYwUdVZrAFtuKFQJt4f3ES4sBZrtmUw3iAviyeWF8xcJ2JpqDRypstBrcP7f",
  "key21": "5TMjFpfVcworkfrqesdYoZ9EPitf5PzmbDQhranU2cUpm6ALMHvK4xC9eWR3CUDJbwRFMe7cfAAtFQ95yZ9ugm4K",
  "key22": "2FfcA2gPXKuni13kpJ8cqRZVtndAbyCArxz19DPRmn4xQ18BankNuxRyTzuMdphQFwgjgT2TzKTYSsq8NoroGipo",
  "key23": "2ZeyLnbjWh2dPhiPGQ27vn3iswsHcDaSa1B7sAkJGiqU3nMbV7M2Bn8Bm1LRu7ptfweVGHfcA5S7EH8bpUGKGCNn",
  "key24": "5ePzsWL9Xqf5fLT6883FUHqHtXRa16DqovnJqhe71dWEjhwLtk5M5QYZgNYFEnV6yrKfu6Ct7fT3R9t9N7jF5XP8",
  "key25": "2HE7E84AJyfF3L5RbfF2cyDeUEp5JdAUYhMG2xc78tnhAFXj14p67g1NQ3EsFK3CJWC1bVZBbd2jrZzi64J8PCe2",
  "key26": "5ugzdstpZ4nGQwXdCS7gbuZoCujGias15d4os91b1cQzc2QmMpU1wDoxNvd4eMuAhDaEJ4vVAKFNeCnbQ5KqAw3w",
  "key27": "2gMBcDdK4xSKyepVQNkx1fmoG5vvGNxZVo5TJYfUbc5RePWQYeo6phd49EixRuatc8jdaAbJA1critfv6mXSCuqg"
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
