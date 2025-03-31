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
    "4Q1mo3RR9BZ21wg5iVFe26zKrv71PZ5nmBJCBWsF8XaYK39FhHh87wLHSE8zjLr68pZSsjDeghkYsyQizQyyTPvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DR6bxEu3ZFewjFgfoVfPGCBQq35gWJCK8Wn3NzojBT6HgZDFywnykfeSY1G2kvPQCUNTvqjE4Wo9jEUw7ywyYGY",
  "key1": "4huux7CvALsAcCuWhyHnSioWNts4zJmCLjfiJLQXhiV5NYEuVt6QmAyYrrq8SEYLhHYHdHjMTn3pCHS1JUMYQRsQ",
  "key2": "3dzv52xYunJ71uBfUfnynku8hbRgVaHpHk3RMtzq45AkHU6ZmJ8C9rtSxztFzrKsaK4PAqEPZRGt3MEAE7s1GLZH",
  "key3": "2SFTz1avdS8YivqwA9LQyJEPfpE2Sbm2BwnCiWz9cetez45vgz6UGwDHVUBpu5t18XPvqCXTA6GU5nXkKoin4zXz",
  "key4": "4MAk6PE3Vdz6yfxKxW31nQdJ7N8vYnHVTrBkHvfHytCAJbbKsufgNTx5SRozCo7svRzXJKVm9kd8pcPp9Nb5y4ko",
  "key5": "3zuFwLukV23gPZdgXgPQP8dFzgXWWFdKdoYf8goEWushVwBPj58p65gcTCnn9Ge4FbU17bBAh5cZEMZYjdyQVBVm",
  "key6": "51ktFsFeoMbtc3eboBPsk2Zj3cGnR1CHh33LzNmonQ8zegQXVvR6D41jLeufbVuVUY7GxqmbA5K3NRscGXHZob8o",
  "key7": "29EXifQ5XdhnsygqF69RV7NszVHDnmNQ7rS5RT77bNavSAiWWmEn7DGMymcHuWP3c5WXXt6sJcqy3mK9UjeNzhHH",
  "key8": "2Fx4h85LcM5od7GQJXViSN1Ffzy467rqNPc7Ao3VZFKNRPnSENMeSvkBqjiiScQB5EuJi8eg8u55sNjZftDVDQg1",
  "key9": "64SnxTmjnjVsnDTx594RpZrFokoRSnnENJP9KkoZVqiZNeNkiiS56Ymx8nWzJFjJyAYJE3p84exG9fjDezF84V31",
  "key10": "3jKUAN9D7Q3MLNk44Qa2gxPGN5JBL2vEkxVKQiKmPUax84kSmHxx5puauoQkDQQ98zCAVUDHiTrzTsQeo3QUrnWo",
  "key11": "4cToa2xVZxMDicFCS88mkraGHzQFk4rz7zmKz3waetMKp5sDis8QeHXzRnx4NpE1V8x3VR4p22Qg8gUdKVic7Sc6",
  "key12": "5sQrcAFtpz1bz7JZthVzVyRCLVHUzoBfy1xm5Ym943r4tjfjLS6odVzEaFo7Vja6APALAkAHdfoE2anPKExwiNnk",
  "key13": "4DvPjJBbBExj7wmRVs1N1ssRFBKZ3gexYBJLZMUwAtafkTd5751a26w5KskK3G3JKhP6PFCdEKBtcpswWBBgLwdN",
  "key14": "drZBNioQBsWxC9fHZiCXQA8Ehmwfx4eTQJNF6H48c8iKYF2eHTFYfrEhfgQAqVTK3oA2MS46yExH3X8B75TXw8q",
  "key15": "3mzVcVazCiL3mHpegTWZBJRPJGybKGhEDQe7dZN2VMdYLnA2iHiv1kVTuoKBjzpfvo5sifcieuCb7h1xpusJTVpT",
  "key16": "3PhYKjxkZ3VSkSPTAsoHcku8E7kCouLyeBcWgeaS4TApcK8BUZREK3H9uPd1Ddck1g8ZwqpFLYtaz8Zar17xu7fo",
  "key17": "3wmnSFYFGwxPXkAAZoC59yWRAbz4RyRJAqJ5MEA5Eb5RoUiQACxB6kPnKbXM4EJWUBabWKo2tGqtm1mihC5uob8b",
  "key18": "5eHaD8bDphQJgbMEUmfBtvkLsimNoJANKHUzgxFJrF1VyYywu3GBGCqWrNRXP72C3b6aYpgxmpkxGiaHETLmNFwj",
  "key19": "pvNLvrdftVVfn5pzL4wkzXNZzHPck7iRzKcqcMcyyuiApb8kBLHZ2FCAUVBTWP3y8KgPLFz8Li77ySFnWYz7o2G",
  "key20": "5XpT8rf6YuWtkSr3ji6sBKjKLJhmSgwXHrSaMBCwgvRqwTsi8PmipoP8jzEgm4pnj9Y6CB2AwZaCKnkdV1ji4HPo",
  "key21": "5Q8WGxnUaE9MRakBwa35e8doRRT43Yx4d6xfHuyELUbLmvnfs8nPJzZN83nj7kTNsq1wqubH1V2mxLGU5c7Hq2kK",
  "key22": "4Axgt5froL2zmNv8FVjYA7kfnoGibktTiqqzZcV3rve5AaMS6htF6vV74hNpgxdvutcDU3twi9KVKtH7yCqLGehe",
  "key23": "4kZxTtZoGuEnVUETPb7f7UnBjhfBk537n4jTHnUvamQgEGKQXr4XTyKPL9Yxr3hm1mXCezY83ifBWTtwBsGdAngQ",
  "key24": "61sTDMbv16s5vMz4FdV6ugFRCJunF2dnRFQP9mEFPhjFu4GfUeWqv2q3anh4kB4C6ofHpZdZkvMt7efUdSnsSZ14"
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
