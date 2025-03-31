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
    "619HLabUHiYw58BMag8rmWB1K5MdzCRMAHhkua5dkFiy8DhZA3JBoBmN61Tu9est4qv5eyzd23YwNB5SYMcqxjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uwKwBhN3qGoUR7e3xoRCUX7LGX6hR2SEQ4iGVVYmNToEPfUumBignjiS7qc1TsEVGp5L6ojGpY6mo1xJh1eLdcG",
  "key1": "2cbXn5gJxqggdHfYGk6We36bv5GQKSu18YdGpe473h1La6Zx9pQKnKLVFu6QJmP7xA58HALsKtZLkiDwRKmavotu",
  "key2": "iFknFFE5BBY8pu8HRDpbeQc5Bbs89EMWSeiQfL16jSgdAEbnBWze9RC9HP9Ug6WCxTZp1HhQA6SbW5KVTVUETBj",
  "key3": "5uPboMid7dJWws1So6nkAd3TNZ5kW37fehWFJDR6G4DrbHCWJDxhoSJLPMtBYv1w6py8hz9hU7SS5JA7xN3grCer",
  "key4": "2MtErysiZTttFz98c4mThYTUGJ9VhMuJbGzrWYfxcMXuHWFLh2zVixpUAUgvuinoi4Zdj2iHS34JHUqEktGkem11",
  "key5": "4k4HaPE7DNGq1KRHxKn2MJqKYqQULtnqdr7soqXHZTSPbrszZSbmiGWqshd6aVy27thftqW7TQ5MGYZvMV89zBq9",
  "key6": "4U1kvChPXhJ1jbLBUdR5yMqVEbJqnafBHeMJE3d6Hm4R9W1ye4r5yptTVbKkQM1n2rGTCpXFq7DEb1X2mJWtofkL",
  "key7": "4BEVaRNKDfnrhWT7PRbv4vBXuseJnGrMC7ictPTRzN35DFDKDyFXaNSRCFdLpq7gM2a96piU53nHzv2YgnjPqwqv",
  "key8": "36SPsj6GZSVv6TFecS4sdqEuyvPpXqvcEsiXWKoxyocT2KK9U6HAJLkLptGusuw2L5mH6Kc9qCevz9cZpewnVFZR",
  "key9": "4pvimSiL5Yatr1qPrCyDt6NK9WY5bKrTBNC2F9kJdMnfShTVyPs1sDA6cJypWfRos8JV5Rp4YkwVDByPg3NkmgYL",
  "key10": "mPkFnxbAqKXW624Zj1knsEiHdnsUhiHHohHavKihDd26s3nAw5ot3fB6KAnRDQhWKzoWRszHW7DbXMYCCH3FpnB",
  "key11": "2PSTNSwRAodLxFV68asoaqxoBfCVkHwaY85Nbpc6ZQmFLhZZfRTurCWYuAAPWnTQ3oydZerFiCqTmCCjFwyqubBG",
  "key12": "2rGPMvuZqbft7x14iAnSi6bnYGKMoV9doeKh8Fk5Lyca9TBBboW6Kuhb6Jr4WN34bVDMjFkT1iDruWuBBkUd8Ucb",
  "key13": "3FGx6EPKGDxK9ksaEbTrWyuYcndJLWXtGLpx7t9C12NvR5ivT8gT8ZvZSDikWe1bbPRbg1YGEkTMqeTArcVtumAk",
  "key14": "4yoXSyJNF6yy8ZCXugJTTBUDizy2KGfZSyGdBFvr3FnLpoTZEttKCMw7SAAbDj6F452j8oA6eDEevTQmMyPHViUb",
  "key15": "4TevcEbqYxTGQRDtcNzQwgKZauS85sKYRe32fRJMwvJ5d8wybA2jUYDpV78jNCe9dXToLigrnz83wKUDJUiJS6xN",
  "key16": "2LWpz2fUgcHMXENqs7GAL5Mh14CVuVakXkRnztusPDRpT3skYtgNyF7GhaHWnZQrKDAhdWpCe5GAzq9ECw4aVkpB",
  "key17": "4pVMxGSWJuBfFrAUDoqgvq2goMHyRWonphH9Bf5bVjgF66QCvWUYTzyGN5vAu5qJFU4crKafavLcuD34ntMFxwZe",
  "key18": "2845VxrtxuxwPnewPCq3bUeRNpZJt24BGAynpfRG2VEo6aL7LS1egbNMyofko1ZQCC5aNbELGYnHy4Ky31hrfjLH",
  "key19": "4jyaMzGoLzsQSMpPMgW9FvNX1cVAk3Y7b5RfjJ6RfD1r7kh9KjnoZvAJPxYZGsE7FRDsjKEuSTWvMBBKFZjCLhh9",
  "key20": "5G9GNpbarsb5CFbB2dmtsQxPfXjJSaoU4ShweCGEnThW6MUVVZc5VM3gNrMA7wudATMBdsxwv4cv3HAha44e7ZrL",
  "key21": "3x48h3XZ8JYKfRbJ4drDpp2jaypa3pphwx6jqB7wJbWnLuWPr6zx39MpuL4C7C1fJt8DfGsiccJDKrqnxn9AvMwx",
  "key22": "34VaJ3VeYVrHHuMBxEaH8VEHm3GiZYsn9JBS3REosFGsNH4JYovMCzC4ktWbwgTiCnsnRcKdxTtcQQXDoPjToGbZ",
  "key23": "2z4mwqmXfnxsDE8174zPyE9aKxBG6gtaUDLhfHYqXUVkiJ3RwDgLdQUyFNjLQeXUVHbHW1zKUxsbdPMu8pMxmG7Z",
  "key24": "479DGZFBSKP4D2sEktpYEHWUkisb4kBbfncyYZYoQ2w3yKGknGHvLjT24SeixDLZh3ZqmHMsWKNvVVsvx5gFgGrc",
  "key25": "EXXkP2V7qkcHZ2dKzt1ZB3E9m1xNCzLnNar7hJC6zary6HWcN5GVPPNDz2MZVUPHzZGRJFdoxtDuRDyZj1Sjann",
  "key26": "53LfAA6BMfcTQzXue2So4hYpLJ7omb5hvbVWvEC31kd6djpSGM2L9WNn4ncsg1h8EB7guVeiJ8WvQWpCC2qepMMt",
  "key27": "2VdoKdUfDPdWLXDow3CtZnBXKXD2fz7h5iyAPBmqSXwmFSBmDAL83w88CGxubsUFkw3pVkgM5Yip581DMiDewyuj",
  "key28": "5gbyWWuEkaYV5TSmM3VNkYS2rL8pNssD5HEoWutdNfnwEn7YcynfexN17e6S3rbQdEKsjE2usFVhpvWrj499q7PA",
  "key29": "5m9mNgXf9HXY3UvXAXMUM9SsiMpTZwYcv6uuscRztZE6WJbB7JDDS8GSiF9noDnQ8pKcxAL9vh9s77K5AzjQDVDJ",
  "key30": "48ngJ1BeYbiSYgzMtWZXmZ2u7BVA9W5ecGdm7JTPHjsb4vKQGJApJVd9r2QLHyB3cEUZTEsMxiABXdAxzvXm4Unn",
  "key31": "5ndi5aSujuRmZhq215WkXrtirn8PFa61RKUtA1Dnk5YZNNdDq3HZf3GU2dj5UysrjiWyoK1wAUie8KmrrZHN8xRb",
  "key32": "om7a7C6ELo1FgrfVi6N3HEwLYSxYGExVy5FamyqorP6XVK1VKotFi8GBsioN44U8Mi3sGJTxahiGgYBe2vKPRuo",
  "key33": "55vbELutsCTXRg1caSKCRFiYuB64epHviC3KFzTG5buyRd4ASEiXYFiFEvUVdJK6Nrdw5n7nSCtkY5aoK6uh2eCM",
  "key34": "2KLigFA4fhrLuh1Lyz5cwrq8KethHkcJmNAk5HdVSu5srYcy6tMd5r4ucSEzQxbMw64gJE6SVuP6tUFkf6cwLUax",
  "key35": "4dzHoACQ3qWygygos2KK7FAFLCnUzvH1chcBNqSrr7q44cYcjEG8D6EpoM5BgKrSg2qD27GU6bTgt675ZEBncJqP",
  "key36": "H4hHPZvm6L7rsEXxFYCTN3XVZjjb3Dg4RDSMUQnqbG1781bu7xmHC3LDdzYCfkeifMKPmmDWiBmqHUoxveZmZhu",
  "key37": "5CNDHoHcT8CbTfxBYNJe6RLxNceq3hCZqfvrgesWkPAhc7fjUhq7Gv2MxQi7h5U6hmQ47pkE5LUjW3j8uV73m5Si",
  "key38": "25vdPrMZF5jzdt9owi1EoSkJEWo4G2JD6Jz3mUsnD4Am9Bd3E6EkqvnMC6wKD1NYJVKbBs9uKMp6Hv8jSsnn3zx2",
  "key39": "qpyASw3odZo5NkHXwCNdtGAoH4npxWcCHv826EhVz3weVpSkc74AU9neiNeVkpsXjbg4WCWwrQZpNpaUWU2CXd5"
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
