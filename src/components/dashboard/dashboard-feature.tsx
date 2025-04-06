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
    "4jDv9WjPvtr1HHynmFwk2Sg6LTPVMwfgqZ1Xodvp38yAb9QNxpBY1iTVMvWRtMi1HUu3Ykn13WQPcynx5jyDt6vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fmti9JSwyrw2SNCtGmFNrFKqNztYDcqzfBDbn6ukBgAM6nvqsbsn1ibPKXm3XCGRtYs995Mctr6zcA16gSzf5sR",
  "key1": "2gCDvfKdATvEwzhvhaRpV9K7VvGiBB5tj1kc2uasgorR6rNB2StzLiydRjeYBV4PHtsKDFcRUMo7SvYPaKgWHXTP",
  "key2": "5oZ7NtLW1FehmhxQu1XTa2RUKjxSvRoHr2sAFAGxEXW8oBWPAx41L75p8MgBF5VPXsqy51tyVpB8kQkQuiFMTQsA",
  "key3": "5erwZKuFCcbnUkaceP9HjeLdnJCvXmAV3AYwEZ1G5ty46hLty7J3Wrwg34GkPdx8E1YiZV9guDCYupHhMB88jxs",
  "key4": "3A8w4psdcoWokG5JkzC2E8K82hYM6vyuE71hZqwhkLyysHDeq2Jk57iJ3Y8hS81BWoCmEhyMyvTmzrr9vQQzYeDw",
  "key5": "4sS6qFox7qzX3dMMK9bWs7ZmynnNp6eQpi5w5uxBnS3oHJVPC6FtPUz8AQAPkUsRHqMnzHstqWUikfTnNgovhqDa",
  "key6": "CSgWgF2XHybWLAVHhTxUcz2854V9BtwfsHUHsMJ2zXhMgMa8GnDqsdg7tggC9UWdVpJ2cGUPPXQa2cCDpB4273h",
  "key7": "3kzk3GUwRHEXoqvbPnR5wpX4WjbNN4p1FQnYqc7ab2Smf73B4rXRMtRRUZL7s489wsDUtfp6SFq7TnLohXit3DZ1",
  "key8": "5EQgATspSANz7wpMSWdvURY9NKQqhmyRrCam1vgMQNstnt4n4HSPL6kk69pQDrCxWYW4B5PkbgUuCYvzrv6ApT8k",
  "key9": "26ikdebMLoDMPB3uHnUUjginhJLbnp3A966dQ5r5LWDEBexiMNVjN2b75A8rb14k4ExqpoVtv7wYkix8MDVz9mRZ",
  "key10": "2KGCbMqw7cr1aQafRNSi3SMxC2e2hkSerZ9Zzwoq1xfYChZ4xXXhC1uJbJkvDqQh6uB3JUoRBugZtWsUvxvGsQ4s",
  "key11": "4WZ15jRwEdf2mcqUcxKfDk2bmfk9w8tDdpWaEPCwgezKok7Th2mdq75gn1CBG4PUgCP1WLujsX7L4TC49TPgTTMw",
  "key12": "3CxqHjW1vUUvRixmbFRtyQ4mUnpZ2MsdruSfykW2c7LMWRpyt9rdGmxawMdPKqv4XyBYJDhZHXq34BiFwyBytF2W",
  "key13": "ioeusRmrx5CAUB7Aijfqb4kgqJW2Qm8ahfwZfrrvbMeC7YwAHJQN6bEHYMsnY8fwTmbbQR8AizBvCFWgQ4oMu6F",
  "key14": "3oAVEDe3FZXda3wYFX3KashDhJNaqZTvXhABcFCVqJuxCwxiXWuqRAPXZ1jErDvHsA86zEtprWunGXjHexEPoNEb",
  "key15": "4xKNKmm762sd7R5CoLTVBHrHbd8ueywYsZaQYeczm942bfbmeRf7kSy9drd9XXq53jjDFv8Z2RPgLiqu5Bgi2tu6",
  "key16": "3po84XuMt5TQ2u66cnw46QhMcbUBRKX6m6bSPJbMu2xgofWYPjytK5YgHBrJidgVypBN9iyG7YVsQdwbsLePzhDc",
  "key17": "5MRrR6xzbiQzE7MSiPXpPTeV79gcQLPujwRskR25JAoti5qcGqVfaDYfvXEJzr75fce8CESSj4nMBUnkgQ6YWoxi",
  "key18": "33nY7qMpn8cBngXbJdW2KbTAA5ZjqRLVvuWwQNQ6bC6TES1JSWnXtEbrmuWMHeqtG2Fp7zCwjY6Sf1Miv28v6bPg",
  "key19": "ZStHWGZdRnhEvWr3SY8GEkdzW2QNwGcMdFKoFpfQ6fyJWc7aT1mVsur2DYomtZA8ga9FLPDFBrfFsTdMhiu481H",
  "key20": "66bUxGDr29vc6eo7gDPZPtF5z14H6uW1sRAjptQBLf2NCK5XGfjt4qr41DbynLTKr7LFfLcn3EMWgK1YdTHmABYF",
  "key21": "5WqroK3KB8qaVcrGdBawbmssrLt3K4n7SAi1BUCnd92Wt4EacZVLPe6YhhWBRoLu8s5GXD1BzQSUwuHXCLcvjoQV",
  "key22": "4VVw94KjLE4Wm2wx3m3Yy3Ue7w7dK6hFnxSCqj2hqHKcPpgJBYVZVnKhjmtLa8s36xiVdfg2q2YoGdjebDyGdYuE",
  "key23": "2zPrXamEu3zvEooB4ZgA5Po9YJdWfRtgvvc7fzaQYvqvncXmxGfu1wWb6E4censw4Mm8vACyDgL9RtM6XSzDtToq",
  "key24": "26zmopgat85pojQE7Nzdw4XbwtztuzMMCwuAgmxurt5Hw3mPbmijEGiK4xE8zE9LEjQ5CrcK6qAAhm6kvRVWYzHa",
  "key25": "3MjetyATmQfSU2NWvqLmFZmvH1EHaDtM25NXm2ijyEbJUQcDDofb2dWfePJFAVc9Z9vsVMHbvUkySPTLZ4pfhkif",
  "key26": "whwxFoHDLovqGbYjPt7B5kNGDkjeQfXkExHTVqck6ug6jeUmYkJpjFJortCd9NiwWxbhaRtbAbdWdV9UfgT4Und",
  "key27": "tdj1PXACcVnsfzmNReKqEdJqZa5v1vd1cxSU1rPBBpAwyEdiLzuL2NMPCWFyMJSLXtiVqfoNaAYpriPJot1wSvr",
  "key28": "33fH4q4JRfqgogFH3f8grXnZ9hACUuXoqfp26VbfruY5f2CN52gtqiW4PpRCWFPahvpx8aMVvqDWKTGAZraoDMfH",
  "key29": "2KX5t88hVa7jvGto9ayrQ3fuWbEPH2dG5Ag1HnC1n6gQgVuQjR1onhj1NcGmgKiqqzSNa56TivmPuikavX2zUVqR",
  "key30": "2sK6g7frZXWBzuuZxRCMKYDPAt7R3HDEsnN1wDqxsSiyy4riKvDc2kYjyucVVufjWwyRgLWwQFDTfnWyovNjotUH",
  "key31": "hhs2U5X8B9fPn1SS9CNLJE8Zyy7rcbK2MuWKkVGf8Rxf9mKL6yRW2F6ssChFQE35gr4tsPNeeTjXYnXXUpCPFWR",
  "key32": "5dxTJVxWftM9MTxGPfzXHJTjmNFcXn6pTt1LyACxDeDJguMBF3Tw5yHg8ALSPRUu1aTsj4NfxNHCg122ECyzfujS",
  "key33": "3YBKVzySm2pjYTw4uJevWLVjzR9ioCARHkJc2E8LNhwMoe9hLwxGgJAzweiJ4bV92sXAv9dg2CyfeEgqKRLVeGD3",
  "key34": "4CkbPFPrAb8vkZwLYNSXux8MEZHqQARcZpbuWAPM7pYw3pYu9E1x4eT9DEYUPcySRLRGRFqgRXncUnXyrs1fqL3n",
  "key35": "3TFrZZXpNtGjCzu8b5QWzkr3oxA3pF9KT4yoL1Vicw512VhWa7gPHiGZLaDc5i5G1djPBy2ZjYRUDj9P1QwGKw9",
  "key36": "2HTY8MJTASscA7DECZq2TmVRWCdSG5Fbz3zqkdsSPkFi2QZ8ujbBEcyL5JwH2QVFo82Aa6BS8onTzATNuxdur2oo",
  "key37": "2TCJTYL2Xp8Pi4LL89ebiByfj4eVnNPjvYdv5QVs34AiuCZ6kBEdTpvBWXvxJ8kgkzokVdX2AywkTR9EAJmUKuHz",
  "key38": "4deWyJgfgWA5mk8nu5XMdAS1pfrzRnGCxob6HVmRgattGWyCUQ8Nz7PcHFUQ11t1cmfYg1UtTjMHyt9NU9226QgV",
  "key39": "2YwW9YUtg4hAzKfoiJKyBeiQjD8436LyWoDt78NosGY8b6f6kePvuapbmB2kVMDHbDJbtMoaq48GJLLqo5XDre7S",
  "key40": "5Mpf5CxZHr5hmX49NFJvJnt5c3xo3QyKc3XMpAW9qzGD8yeFa9aWhRnN33bZ22yCkNZj7tKtgz1Y2Yg9HaqvZBTf",
  "key41": "3vfRyaYEDz81T5jAPDApCxcJacCH6bBG5SDSA4JvR215L7H6JwkxiXjDDHraqk6LaHobmemoVpNMTGgbXqbpJqwK",
  "key42": "2EuzFsRMxgSAAKL38taKobjo3fgRvpKKxpoCWPHZZ6nTWeQi8dWPjVxcfZNxWkV13JHa7xQFZ6oKx3ifGfy1LRgm"
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
