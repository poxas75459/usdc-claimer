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
    "3LnGPiRqyNeJ7GRgWFDXTuN24fZJybQp1UhXHNL4DQqZf5T8EMi7q996Q8u2YYhW9jU6gtKRgLspMRqhDTREiXxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtVq3LaYR9yNUpqmx9zd17tREwWe6h9geMAV3FvpZ8Kjj7tERsFY3L5e1mEPs84sc4LXJBY1mY8QRJCX3xdcBW4",
  "key1": "3MLG6zqiUBJ6PCbrqK7ibZhpyqXGX5WYk4ga1PkKU4us5yUktbsZrFLmQ1nAtHv5MraC2ggB6brs9B8bDyS1h7H4",
  "key2": "3gUmmUSx69RNZpd4F7UghDCvdfPu6goFMVCAwdZc9E68AqGLdgEBrX5tZC5RaZhbzArAW6UmhbQsHbNhs1iexhKY",
  "key3": "3P1zrWRLAmC9L8pVoXgnN55MhQifNndA4p6FuD4tZcMZCrwd4yrCzxdrDqczMTcYuF8YqzntA9yfpBFUUAXhb8oX",
  "key4": "3d9sefCV3aaf5PmfguKB2zNxsnv7LhSrXiWJneN8WneggpKjEE1RqSvRM7o3em5ccY8SyyP8gwXJL6Ropcq1zXmT",
  "key5": "5bEpb9wDcCXcnHXSgTac963sLwveuKzpZprqNpY8iZjjwGfjYcQxZqFcQuYfsfvvF3DdCayXurPDKwaMskCkeiBz",
  "key6": "5iyN4fFZfKXGx5zEB4BX79WQBq63eamLAjHc2zVuBBzchi95iLnrDhhcvakcVZud4bDuFcthqG6PUz7PSb47Cdg1",
  "key7": "Qa25TGsEnUBhhkhmuNS3JTR4N89MNgVdiYf3Nmk47PGrPspzz6S5TEV66mZaNnhiNtZrkZ7EVKwgaPpej3JPnA3",
  "key8": "35MFS73sx4CQokW1GXvccTkiy4dv2rfwTNcTF3hAsx5PYmu47aZcAWJ8xA5is8nrwr18HFS8yeST8671xuS8Yac4",
  "key9": "27dFyqA2CSzvXtbf88tEcKpMGyY4uMDbRhyuWmNhGLqR32TVGRGwbCAfF2PU5vUqzLScrNsfGurZx9xvb96oZKSL",
  "key10": "3kCpBvrgwBk75KTosZKMKyDyfwFW354ewJhmWgzucbe1H6bxnyE85WoVmU53q3tpD2MmesQ8hzyztXgvsPcRuPUv",
  "key11": "42A3M71LrHNd9QHhGTBZLGji6Ybeym6v9C9K5fs1GjeC1Jq5bXd7vBSwpAjWxHdK7kFwsq4szj3svQ3Cw91wRZL2",
  "key12": "4cUbxWRkCKX9YYP4WykyfdqPEsg8BYwSdPz7xgK5ugcbhVqj1guUQX1XwS7VhgnUQtGJiFfVSfhnqUaYV8z4fqF6",
  "key13": "4sc8k15stpD4eJQKoXkcDBndAKbe8rg8AfVg648mxurG9iy4RkeUfCGwpugTSPgBFo8Uq21LNY5rcs9czmgbWKwg",
  "key14": "35qSbpFekxCMZ7RyqzqDZGrFqFKHzXNW9uhCsSYfqKwriN9K8GxsbjUY8ZuhaL9RHdRQep96NsL7qbHZkbprv8WR",
  "key15": "7BJrR5z1K6d2iXRVccDEQEDxcDLfstHe5TXU1EHRyqSNH24bkUGg5pjJHurHxqTmLrUGgqWPtGAXsPknbfNnsbQ",
  "key16": "4k6rJBnBwW9K2zTLPgSADCE8tzzgiMZMV3ofvJynsW2JoFDkR9E28HzUdNEeKswzh35yVgugzFxSjy56ZmdD2GRS",
  "key17": "5uBW2dAJQuSLVb97EKRsLnBDvXpQN8FgrGEiPe6LPnBcLbZHFk7718KarZcc2QW2CiJgfyht1hZbqsj9WeqjdAEf",
  "key18": "x2MYFiA8Y2oFFwAurx5fTEBLkPFazi8FdQZf4Zak6pUKjtpzw2afnxWTEMSn7zeuiqDGSxHgTyyKCBJsXYNEc55",
  "key19": "3eJ3n8miD5wQvmQjUz7BgHzA2VDCZiNs2U2Tg2RqyqvUUF5Mf7Dqv3svKM9zcwboSCyzc712iP7t8eeRsbigM93D",
  "key20": "4ayc2CcG6XEoc37jggqEnNFqKzfCx6iDZDhBfyCzrcGXDnT71KP99kP91uP6KnqmX6hxWJHKM9FrKaHVrJRyuErz",
  "key21": "4UcDw2wNTrbbVS7jQN4C4nw7FokZvfxHWoJVpUSULN5QFta6g7AJTXUr6PHU3sLpXPdwMkqj3zRYZ9HGUKWJD8RH",
  "key22": "31nv8oopvTS8L9CKMArTZ7SRUHMKxFdkoYXriiTF3QKhnL1cGADHpCLeFsQF62iAikdP5yPgMnwmKRPXRynYBr5Y",
  "key23": "bYvZReKXyeTJa9zvPmLYu4j7vcx2QEQS4HtYunojcnxaKDrCqE2Ra55wcisWaSYVHDERizKcJQDfJDnBdY1W83a",
  "key24": "5bg1Xz342VXJyWW4Brem248fFPCJpWGqWFum4SVV6dJ3Jze6B1Ffe6HKceZE1tNpYHJ2axgSABQNCrBwNKK9ptuG",
  "key25": "2iLRi2oj58Ny2uzuAWvZfv7Ltbt4eHNwKc7mZYiLNBHpe8Xazdm1GT8mXWY6ACbc7PJnT9Eie2Z4NbRhNh7jMCxX",
  "key26": "3zfQebs3AYTVDLw8Gutj99hez1F1shjfcXT8NxmQNWRicxHfbPnDRDVEuw98u46Ya32nMr5xeHnUsyZSzLQ6xivE",
  "key27": "5mUxxaeqGf9hgrEcXX1aZqtSYfgexuLCsQyTrW9nN33smggz3LNeqe3THRoNQnP8KhyrTfauPNRwuDm46t3pSMH8",
  "key28": "4H79WwMfhz8QpQbYeN2WDgmskF6EGa3pjYUT28wutSWo6jrpwtHtBnAH4f3T7vTwstZAnTMFMSFqRhQQ5SktwAEj",
  "key29": "5TpiwptwtyRHKNEx23uiwu7di9LQAzzhDUeFKndPYyenVTkNc3CwhYTZK9buzKKPzKHmAVJo7jXnMjM2Ts8Hi1VC",
  "key30": "3DDubwPDtBerYuEemVTJsaKxnfEU9im9PduhjZdU8y8oHAmnqrC2GCjzx6o51pKJPDv93DY6fj9c1dgntNpkix43",
  "key31": "bc4dvbnqJo3dkSUVR41iEKkThHvQmxWLCBNB36RdAqDfLqUhShdH7uao7jngMKFT8vWvzTFXiqUK3mhXC5XS24Z",
  "key32": "4GJQ6CsyHjoo7obVJfzNpXzMzPv5W5Nn25UkMb4CPQN21VQq6sDGeHboyxyhxiDdGDEt6XYTE7QEZSrkEDL1aQvy",
  "key33": "2ZyeCQQ3PaP2nPHZEdVHjappCGGapK5tSGbELKmqKzzbrPTDT4qotrJojiAdhcCpzTPS4LqMufv7An32kpyrKg8a",
  "key34": "DpB9c1AtKD9F3VB7DoCBC9kcdavaDfeFAKR8pSKTbTno6fvm2kREkWwgEh171UesmbDW7GVRuTKDyWVSeKzsvRe",
  "key35": "4DmPnc8D99nVCKyfjpDRSHNGrV4sko6yjhNxsbjzfCJhmpfvj3Nfzvk2rfgdPcGLkMARKcMPjaPRTxKBffVmoEBm",
  "key36": "5aQXxiPs61gh7JVEJe2oD27ZnjtKM1prJis9ufWhqEDpmwgVGCGr8jq8ZtR1jUJL77YW225bAR6iReVhRALp449e",
  "key37": "UmXBsHBJMC52BWrhBZnuqR7CmSzZav91mgVMrs31gUWN8LKbUahpfmm4WSbhyspbbtGpc2w3xEbGQqt75T1ZLAk",
  "key38": "hEgruWeRVM7WfY3VxTZeEmZmTuB8WBPFe6GHuWpUvuHe2u3jGgzN6rf5FErA1pefWkNqToSkNNvJnYchLW2yVfY",
  "key39": "2EiBxDUwvSFUzoAXu16QexZK2oh7QbsaxvkjTEFWM3aS6aC2stUfoqj5RMzyoPodVZrykKhVVdtiu57WRWNWixBL"
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
