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
    "6EW1U9hXsggmuBmN7gsCMZPxvQyUyJLL8oRNimNjTjEkNJkjvzQQ5pfAdKBKcskqQqpd6c3NznBz9xufRAk8VXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkB4UgqepEvgs5R5RsGupn3yQ1FDJqLMmSDijvMwV9ytURJD2pykqYgxnKTEc4qgnnwYVsxsaaQKjnYFRv2VERc",
  "key1": "5T6Dv25LJ3XiiujT4fRBJmRns2PwJNdSBb1yxxtxhRyKFq41sYVtEE8tgcSBuH7YSaVpHWL6uGkPvwU3YW2t3MEM",
  "key2": "5kVBxssV5UGPquL6P3Ueu8F6TCSYHRZNVZpfDv7fZKQJcp1DH9S5LLsJVSeyvtBHxy3hakVewNHC8q4ptULH6ngU",
  "key3": "43WnqKSADAyMoy9defmLovUwLtrwEtymQjXzQqZaHMLJWqGTVPuSZN7AdgTMQDZWcTWhMUAzC7AtvYs7oeyof1Ek",
  "key4": "2DvckzYs6RkEp13GijunvV2mRLt1EtHzTnwRZfzh4D1ATmMJSKqGWRZhWmMDu2LrXqCUrd6mMK8y7cyTW4z2FkGB",
  "key5": "55BHowAGoNqrJE5dv7jGzGEQ58D5BV6PVAnYHhWog4vJ5LMVBtTFhheA5xVPo54QrPiDuLzU9p3jxnzMdorCn3R9",
  "key6": "5iGGGjFqreM58aygJyE5e7UvRDEWWj7ZYZ14SX9jgEbaDic7w9TLVgdbhHbEnaE2bJW1cBYf56pJDPaUhv3MSR75",
  "key7": "2NYzsAd6XCeKD68YjexC5kJajfCc3Dyki7u76T3LqWrqQf3QS6rBQrno7bZro9UzNaCyqcLWPqWqn8oQDe4sRKJq",
  "key8": "5tJ6rFG7kqrvoSFJowX86bLj2BCEH61DPAwn38E2UiWSgpn3pHnXPh5vouFPAd9VKhSnv1t6Lk93ouUakQBNmY4L",
  "key9": "bFVv8YWuP9aborkpyCAWbaGGNK3AUqmV33wbB8CDNzN8e7zswA12rgBZgyVgs1DJSWskJRzUGzA2SBiSFQntNB1",
  "key10": "5NzMr69U2SqWoLLnCEL97adrTEj3iqjLqT7ZQtKoszKKecGtNbd54shHjLf76YJBX49ndu25ByH9gkRKgu4UXYCt",
  "key11": "3xgLF7Wot6skgRVjMuyiHB89LFxwoWA7ideuhzEDcFCyFTQD7Um3ZMKTpZjCHghAmvqkQNpARVDp5JVbQZakLm7k",
  "key12": "31nzrRaFaUWECpVvDML74Ry2u85vBbX8GSWYH2b8zq5qw2GeyCPNdHKyMJKNEMvuhraFmgkYHRzRp6oL1pC28KWY",
  "key13": "2sEUmqPH9yU3cHJGcbKeEdymcZDRruqUzPPQza1keVx9SeMvqghbnSk2PwNFnkcRM3xyowPSkx1jVJRMBk3nUeWn",
  "key14": "jLKknwUpxjG4y1bMDy5qhNQkWdFSZoVeKtLDjCd4w4ENbeJLyXY9vi6UhWfgxy3VL4NaiXqKpiLum1jXMEaGUev",
  "key15": "3T3NvKy3WYAxd4K1FaADHsHXaxM47dKZjJdDWbXJ55jPSpimqSpbaoXvVR8Qi8xkLrk5Rbnhnm8DDsbh5WGLmMrt",
  "key16": "4M3rVc48jaiHtffKrGnjyvyaXkYvdD4q1eGQmeYSprGueNb62jrrqSpe7Lqpo9nPTcJVVPqfiuz5VTQdaZfpmGDA",
  "key17": "4ddry23sxH6hLUcq59qbds2WKADy8QTvWrPuiSyBeTCj4x9H9ZVfiDZFqopfHpxdHcu86yi5YHnAWrMTDz8vxvfW",
  "key18": "3uN3U4Q8YeNFbea11sm7bgT3DDq2x5u8g4LSP5bzp87Y31DVUS8jNArAad8kSngbKrmH8x1ube7iCVdja9qrnMtg",
  "key19": "4yyr7CF2G3aHQhFLX38RDeXTLfLbBhk65ExBYP2r6Xyizrb6awzGdsYnE1n5CLEvoKevbSaTi3iPB1cPKqxnkPRw",
  "key20": "4sidqcXLhBXriL7oUPUf3VKeJRj6LDuAuu7nHFBWJN3L7jv3tgMw2hvoH9Axw1MQDPF1cfpbk2PJzYx3PKwkkuNA",
  "key21": "64vxtBwdVtQPbrjW359cnEazQ6wQXyHYjGfC1z4sSJrBcRJV62nZEsw9fV5KngBmWWcqE5ktVcqtRSkUCvH5r8Lq",
  "key22": "5zxbYWaNoGnNH13WX6aw2vg5AsU9f1LySZCPtY3skr546Bfsk7U4P5CuZgjjMoCD7voSZgfo6MDkAvJmzffuCamB",
  "key23": "3Fbg5kE2xDERcaWpXmmbSznckEn7uGimBkQSXWPCPhdcXgQFhsuJFxFUbjcBiK54jHPBryh8CZh3EGoex8SqUUqB",
  "key24": "4p3tRGrcfzNzmzVtGtaSk1h272FE6teX8Vkc53MarT8EeePWJZMs3LJxN7AqQFyFSzrRmWuddxyUx2Eg1PGRHxqG",
  "key25": "k5QFvEVYBC28aMQ6F85Scj2xLFe5Mxr1Ru2qJKG86v5t6YxrE4PwU4rGC7fXQEnewjW5jMFYNE4CexU3fC7KZWE",
  "key26": "3wNzrxj1gEvxaZDDmQM3FZKN5B6gLmG11LMESraqmniy9fHvpbQqLp1QJtVo6cuwZNHLxJMUWmRY4zFJySiWK9Sd",
  "key27": "2ruQM9ULvExoaueMB3EXTV34b6BxjHShfoaQVg9mUFAU6qWMU7wo6N12JJ6VCjtFSjBSSBNgJZ1WQg3GSSEgzc5x",
  "key28": "2WAuYUh6qKmeUNvLFLnRvX63ojQyTsyHAMoW7emHQcGASvvLS8pfqrzq4jiXEicFN3N4z5wU5U9U3LQtqAPemYW2",
  "key29": "2z7sHZBZTDwYybc1kaMkDsGNFgcSJPmaZ2rSXokaPSvLzg5JxGwJqDtUvKFnTNuLJH7AdN9UJpZYvAigzNY4qQom",
  "key30": "4afr3En6D93MVscE7TM743FS1x3i54c5CUN5ng4dTat6ALYLVhXMW52auHdzJ1pwGR12V98j8f5n21uJmSJh1Fj2",
  "key31": "z3BcUHJb2PTzxabPe6rG2trT6qH9yNxwpS1kqsAF6pVMyr2KbrXGkG4JpjyufWrmZC5bBYBWN3rNNgccWLeN2HS",
  "key32": "4gj57BZEYV3jXvFb62HxJju4ouTdVdMZ6BoU8zVLJ1oQCynpCatfHPbWShPdbjxJnajFKkXRQGhuwkg5C3dkQ2Ju"
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
