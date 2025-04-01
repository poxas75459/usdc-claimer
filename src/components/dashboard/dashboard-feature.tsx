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
    "3zDwxWN7ivEBCvsY1RnkexKonzWew6SANuB2uVLhgXncCu8NFU2W91F73eiP8nXFVX1fVYT7e4zwPn3wGx8RFf3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvuuAvYvLzbSKdhXwiW5LFFdS6ppbvoLVjoeu1uWT3U47mszLVkr8dCxFLPy3C8oQjRwketrwxRT21DUxwFdhnm",
  "key1": "28j4KVVp6KqZsnL4N1qVBhv9ufpeJhFgYpckqUjfFTMGEHaL6mtbrKxdGJ76HRAeQrQK3KwLpEShFyLHaDCW5NAo",
  "key2": "26b7B6q6d7Hh5MomqMQdaNqy6ErQosJwmfzuqiXy992SdHt5dAaip9cfkdAQYBFaRGzZTL2ZR79zVpkCV9RiDeso",
  "key3": "ZEzBHn8NvmJM4i21m8wSUmHiQ3vvtAJd5mMm5o2MgBvuYrBwaD6PcJ2sv5JkCF9EeSydJX1hsRJmcfqK2jcsRN1",
  "key4": "jrBS8cRMK5jRrQ9CndcPjsivT6f6CRZEAHGfK6T6TfKZzjSkFQMBXSBJqxXn3B7hCd9kwTabeN6ntj8i8r5r1BG",
  "key5": "5amEMwQetRdEvNpLTDqi2F6zM4wozYH5vW4bBPHkspYTXr3mGsQtenDEeTGKG6hmP32apgcPhPRD7xpcMV6SrAiU",
  "key6": "y8sghYyy52Ctj69maXuRJc8o4U8DXz3Cqy63yX7TU6iEFtMUHWeVdwqXiMNS8WnHceD9wyj3BYX1b5GqsCCevcW",
  "key7": "5LcFQiBn2FWyiLaaeAZWM9FPyTWGnvrhpsgq5gNvu4siD1gQpFjGvLKZZY49fv7eAubmEaftU2H4pDDLUCjB5Cjg",
  "key8": "5c6RehoLZtHfXimHVdSNXRu2HADWdmN6hMhniBqKnmcXj3ScALx8VcxGRzxt1PCiMkH8cdKutoyV4JqrDHWge4Br",
  "key9": "eD2yMRQSGhDn9Z28r6AGL3PQNs39X4NPFJQHfNxKsbU7UGZEJVup9cKNtei8hfUd6hiDWtwiMvAkqSwveJEfJc9",
  "key10": "5qRDow259ewfYSMhi2h6FtQpBr6uedpBXgj3eueZBT2ZTTNDY3ZsPujDdjcgnEXuc5Rz1ME6v6KTRMWJbAwZKksE",
  "key11": "5T2KZF5WE91tRfN5HnUZK9gqvLdUJMk6EG4L3Q4QfUqAw6GKvNut3EQzqSgZaz6QQKY8SMv7D6Mgwr8fpWGjY8VM",
  "key12": "4hewTvVsk4GarQUuvhGfLUokmGxZ5Mm17Ya2MhmW6QWNc3dMwLazJFwYcjYduXBVVBcSdeL8XHXdcxbPJk674s52",
  "key13": "2XZEPyeXvEyPb2Y39oDkcTRJFgkrSKSVbVzMZmokWZUQhjN86UgtGJtCJ1tM3biJA5coDGYrx3WR8u9qSohE3Hs4",
  "key14": "VnzPAgSKNwBp7dkm1ZujzZMNwfrZ6LLCKKZCc2uTab3yKx32SaBZUpaeCo8iUiqLc7gdDcBp7ZxURdYG4GedbFX",
  "key15": "mQJYRAPjPD6Vh1RVmPuHPGaW1zdx3dBqnefdhuu2zrNPpQxYPuvH8AwJhofMmagUCEURvBFXMVWujW1srGZDxzD",
  "key16": "9kMVoNeDBeYnNPriNiW9bsr8Seuz83YbcNQ68DG1ucrDHBfhjopPCd7GW7Nrgip1HXveTYcNRkZTfC4DcJMdRtx",
  "key17": "2h4CBr8nXMczpEdbzVaAw9DqMdT19BF2DEyGt14RSVkWCxfn1ed72j8K6miX5dkw28q9F5GbEakaUmoUaiRStEBw",
  "key18": "5H6LkJg4gd1QxoeYMqSDvq5S1R5b8vveD1cY7FbpYXFmEmcG2yf2hxQTnZ7QP8YzDEThwp2HJjQXATwh3f7WpdSa",
  "key19": "4GWPUaoh8qxCoLpUSPsMrqCDD8HttUdASvHyhXyutHw8WyUZHAejHEMCwxmqbmzMu4tG8YodNfV5RuJQ3AxXHzg5",
  "key20": "wPd4M5VsKNiyhNnNJvtC7ew5F7zyuS3x6BD2fxAKYrXSFkufof4PBAXHREMnudwhkT6yttN6KbLMXg6N8rmpDEH",
  "key21": "5kvTytWL2Spb9sJxDwkJpcem7eJsQMoPDKE5EAhsJgXxgHHqD6YdzX6HE9pWT4qd37SorFd732y9y5GfpBqE2rax",
  "key22": "3hzauXztou89btD5xGjaNF1ZQUT9dg5YUBPA26dkdwMeBTjj2ptG8PYhL5mQCBb2X8y5UWz796M8i9UbSTfSztVu",
  "key23": "aAMmrxRWkxArSTWgBVTbtJgFW5Ra1yHB2QoguNSK3aF5ouNTe2A5H3KZHD4cwxnvjeDaYkmqUejkbQazgwkdjyp",
  "key24": "5yoNvWr6pFvi3ZBazeJJwBK4Vsr7UtnbgTyHhig52e7h4HWHrxCixkZxQ3DEutPegHcGCqk7AR4uiZPLw21aUjgz",
  "key25": "36j2BnqPufVigatm6bGpD9E1H9HfYD8uboWxxH7k7KoaAXqgWugqrdtATY1CyBJvdSHMsfwSSmd8AzV1jZB2HzQG",
  "key26": "39PbkEHFR6XN5iUpMCYwaiSG7tsjC71zcEkC3c3PjgvtbDAcMCVDSRKDXU7X49xjfzXShC5MHKBZ4sqLCbCJWdrn",
  "key27": "57VhRWrhQtKpWumXJ3ySZ78n38CXzcTrwmSEnUWF93K11Y98FNuTeBRba9izw9ScyYQUrfZpuogBy4a9aYxNYQzp",
  "key28": "4hYXA1hFJgccJCmuPARhWaw9bzTBXXZMrWqvA8pcHvHVWQDTcXePwnDjUQjCVQ9jd9vy5zkucC2wU1AdrZxWGfZN",
  "key29": "2rBT97ktYTacntn16WmAxBaHAFU3yN1439AezRMVfvkD2fHFohAfNYn2TFJVQ2VBCL8sGf6VabcU7oLg3UM8Hijp",
  "key30": "2WF1tWeuHSqJyF5ehMBdkZLJV6LrCUgQkhrVRtzoDQsqrG8SR53idb6DqppUQvZg9eKvaCjTXMjDJGF395pw1VTN",
  "key31": "3vHqYrw86Ysub2H2PR3Le5bj1ZMUo83m66NxvmZyod5gishpyzH7FJ8uqdQH89cmvwEvdnLwjVXKD5g11v3N3uuH",
  "key32": "3U2PCNDBhffhTEN1uovuSUsbx9ziGXWg26vx19i1Zk5ZKG5buz21qY8rANdy2ixTJGdcFKmTqYBV5wJG2jP2CzXm",
  "key33": "giAZw4s7buWB7boiwGybHsDXSgPPhfR7MbMRKvw2nnLYSVmP7Zq6wZ5CFY4EsvDFuPTh8sXrRuradCGT978FXKF",
  "key34": "5pbcG4p99LWhzPGj3DaLycSw1W9YZG6nbBJ5fAmzLKaVnRDPMjXBFnVH5VdrNLJizVNUjYrNWCoLMjw7idCB7PpA",
  "key35": "4iH9xvHTceu7D1WD2aqiEzsrQR2av3JEDy24588pcctgm93dKxT8437LYtyH9w6ELuFY21FrsLMKQB7CzhiWFETK",
  "key36": "3D6jzTs2q3PMprdCMFnmPBHDAVZGnBpsvuNqL6qNms2waCGkpBhPjnZFHFT4hpa34Xn9mgh648p1NMSuxMKW6HAr",
  "key37": "5S4pAzJupUQX16bxUZvcP1Ruu1A88DJqhLPixmNhPuYL5kMfQsB8wNc1Q8LLAq4KVUFqY1y81WvruaRT6LiTmAVo",
  "key38": "4RfeW2SDsEuiLz1TffafwSbWYcMKVaqRGUKFg8jpicZ7pH1CmJjRdnmE6BDD6kLdCEEvAwbAVRpQYTNDVwZA9CHF",
  "key39": "4SzQiQAv2ZYmmKsTrRMZd7mCEVWohzNzn816ryDAk3kuoAEP79fNeBGEFAddsT2DWrkQcWhRypuQvkZiMBBkA1Nk",
  "key40": "3JzPSAvDy6tyxjSjSABTMjsFo8miPKsbebsrUASJe3K7wmZzLcPgRvEcVwGvJrjJLdaguUuqSpmvinPU8VzjbUQF"
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
