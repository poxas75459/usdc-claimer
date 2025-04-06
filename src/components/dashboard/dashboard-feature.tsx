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
    "MNjNhUmSEFfSMuJD3pNtumHYeASRAu14GgQMaqQQ2wxrMZjxq1gUmsqVs1LJCoVMRRj5decukY3S8N8pkatoKS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rkqxjA4w63tRp2UM7Dd1GMogzgcfDt1U9czxmPdzrRkyEhMoBpwaqTPNsY9LZpb9RxJgxFFhZFekFDJWAKNtsZH",
  "key1": "2gGCejX8ivoXW9tG9AHqaBbneKfX9xbMu2LNbkWaaa3B5GMESxugvjVCY1FWGpLhVWuCKnXbdzgJhWrFSoYCjV7w",
  "key2": "2DxuTTfz9j1K6PUXWz2XroiPoFvNsL2rAg7ft4iiZCL6sznyUTgkB5SVf2LaVjx3YwSfviCbR8G2UaSbsxiid9BW",
  "key3": "3QGjjax4WzsyR3J2DGJvxVzgKDs3dL1JjAetpkQpGC1JZM62RwxLSKGfqai8bpkeo6z4nPjQUnRhK7KRUqfGA29",
  "key4": "61Df5K3iYjpDand2hMSnTR1Uur4JKxgTBNk2K1jQKso6T1uuSzU4Ap3T6v587ykdKPA6kiVCPk9paL2oShoED9Gm",
  "key5": "4QBT3C91RLBpNyyEuDXdcqwYB1NjpVcMKmhKCTR5STXZbgtYNLiLmqh6UJU6o2bJSEYTpVwMJCUDr1cxp2ysEwPp",
  "key6": "4o9UEgLYqLuiGitjqtJHTrfNENF24Rgw9RfEy7rkDfyaP7HNNNVPvDP3o3EgsoqzNzzZpZUgzv4XA8UadbHqjK9r",
  "key7": "2bzWxtJibVWhQwmciucCaXhur9EdfKsVFYxt1Hw3gdJdZbV52JjpRuWLFZkt7sKvBAR5NG5XX9dNW5ZweF4bMZvL",
  "key8": "2BdxFPuC5jVnLcaM1wnSx99BL15UspCnPc7fLubjDERxSxW4FwY6RqhLMszvEmN8axMKBBSu8ER9GLpyuFbYwT1k",
  "key9": "44DPACv8qDvJNJZTs5GCY387FcZtQ7e8Zs1d2FZjTi6JEph5QHYvByasLtUtqrhRrbCvbYuiwNf2NZkxQyqTSguj",
  "key10": "g9op9erwENGxxbA9oZk13bsybrZw2yYieLQde4FY7NF92fAaLtxfStPcQbYQJEY7mYXgwQLsmJ1LivMpTZchWyE",
  "key11": "3fHFpMARvHZ2ajgTMa7WazrTWkbXn6cWNepxhu9N83MQvuJToFcMoM2tEZi4ft3VihcRSoqxBLbsj7REpRsFvHxi",
  "key12": "3DJcpRGG86RsveNwavP32WLL6eWsrssjHiVGn1WGo4axoZLYF3fzXTHJoccPRx3Yj5hiMPVFPeLpqRWTHCZRru3u",
  "key13": "rfQNmMf6WLTXM6G25skfC2Wh62as1GJzQNznP2jz4gqWkjqBMt5tYWFDthjSsrp4FoJ334VTqYUHsJtaVgkMczJ",
  "key14": "Ut56MofPy2c83XLTDGPsaKy7QmemXCQ9kPqtjLKvDjTFzX1W3NbMo3D5xtqtRSk2GeYM2S1SuLYGqJYKNyvNTzP",
  "key15": "2iGTCuZfFpkCBxLQXjF4x8cHwpTXXSKM9LYMzExDq7TwHhzENwvZjiJLAV7cbPE7Pv8WcjWs9gevsFvjFXQXTqSp",
  "key16": "5NUeapxQY5t96aS1hveTSC5tTQRuucp4ydiStGWPEk2LE9b7rTKkRpqBjcycNAxCQgv9P2BoFUb7w7yiCPc7U2hc",
  "key17": "2WG4yFQqjmLwNaZMJeWLGZECHrnKYpUpJTr4WHMcvWkgcdYi2yFuK7farPxaeVhiZA3k9ieczUNMFMZK8cjC7Bp9",
  "key18": "4iAczxqyb9MdCHhjjAwKFnRhKLAbGCxBPEZiqFevgU9WZLVJ2YoPMf66eSE7nqBAUXHt65LSiYYMTG73QhK3r4HY",
  "key19": "4sFiB5HwQfsgju2i3ZvTx8dfXseJMStgo7f3A8Tob1HUHjx7Z5nhij5ch3vhxLJwRsyDgbBM9cMsLYv4TAp6RyS8",
  "key20": "gvdFtx3WEGg11oKKjz6eExHsDBts82RHcii223e9jXNPqJ4XnicSiY1dYr3M3ZUVfXLyWS5DXrzw1gmsJr6EBJU",
  "key21": "43H3DbGL2KaEXJvbrXcuaY9digEWpbbiHVd31Qkqdt5u95cVkALs2xmvBqAzTQubq9ufqoGtfUgupmMgZyetp8ZZ",
  "key22": "RFZo3tw34sJaENUFJd28pAt7duiPVNTRDuS91gNsNToWy1DrYKZayMPUb8sKHSciKyZt32SULbTdbNTnDehBPcd",
  "key23": "3LiBwA59NRW4QaunQ3V65DfS6Po3mqbovC1Z99DDebzoHLtDyQyubtU9wTed3wepVU3r9XjySopCqBmJw6KpS8wx",
  "key24": "4a6hvHjB1ySKdtymFWvzQkkQoLh7gz28cke7wckgmdkncEkNKMssysuJ6ErDnZsPjHdXpQWyegwewHYwR26zWgAt"
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
