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
    "59E54MwF7QneLE6Pz6CavvvbV88Gr613REgGmHoBkJ2HFooYhLXTpysg2kZGYdxS7ytyYW1CBnXxZN4iqdBSd3zM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ff8WbCZmN6rxPgs7wAoM54s8mpMMdjeYSN3JT8Rzux13DL4brYzGYRZ88byke9xwGnh6BkLSPxjNYXwaHyPFa5C",
  "key1": "66sRaVb8X4oWy4aQTGj8wKeUy6y2Hh9BbSTGzSGorgURYNb2r2bSYQ5ZtA5ncFg5VFmLSHxzNBxCtyoWXagjknSx",
  "key2": "4ybhR8nCrEfNSQbFKh67jwfa8ESDkob8rJb6WBfhyFm7CcLNRmcRizHumnuqgCD6wPgNc2Z46CaTFhc9DRdb2ASH",
  "key3": "41uGtZGg1JEG6EYzxteuAz4Yyu2DrL72Jj1YQnnRERwfNcVUWNMbWzrWjXKQGqp6eSaJauvTCyQ8a7v7T9ZdHVUm",
  "key4": "5GMfViGaVvGsYwAt4fxm7uv8h5VqspCkh8SS7PSDsJnB93j77JBJ79TCoyCf4w3RJCTi1vZpcZRdoJpbex4aZcFL",
  "key5": "59mwWSTNjwgSaJQXAwrCHg6k26Vr12X3W54gW6KhVXwB8TdTAKHB2QEas5apUT5pNbbvkMFHQBwA5PnrqykAouic",
  "key6": "LAGYehFtHeaHFcvkvBXDhdpuprtR4BvmNjK2abxFpvGB29gdinyF3wtZBVYPP6NhGKSWeRPiQSLjtqWg3edt2Me",
  "key7": "3FKLFs7dRZZzm4CgafvgirK37VWzRAbxrqXr3WtGcYgUNt2uydctjX5dXHYjFkyMW7vkyjkdzbVPD22Ty6K3xZJK",
  "key8": "39Z4ze42xWpuiypYceSWthfeT7DceeVsTbiy5j2e31UVgmCToBVRzWSxeVwkJXRtwtXPH2JjXnNyS9V8x5goKLce",
  "key9": "Nu2PZ686gVgVJepqJzBkqQViCQa5LmS29rHNgnUoSWmx71tUELhfuKDbVxiTxiVA6ncrZJmfwkWdC5yNHHiKcwf",
  "key10": "2pCBoNXrGJuC2kiTGWRCjXvNPggKvt8A3yUQiEbBCr16SXoQ2y5gRtxPrFQL3EuMqVfufHiuJgDx7SPsoG4AzkG5",
  "key11": "4VVXGhajFYDZpFCvXPPuP9kaNGj8CLGsRCF2KamRbJwPcvofdiMPsTt9Hxu6wMiMwmDWuXf7y1qs3gyyup8iEFee",
  "key12": "5ogFep6E8Bcmv2t3PXymN7gnEktaTFA2XNVNcG91fKSF6j1hcVsKWAfWhXvpYigbgx6azUdYMaqX2wUATa2sFsoS",
  "key13": "5ELtzPF74TgdFJXb5ytNvMasGhvvY5SRxdiom6L1JqiHFHeCwTTXuJLTTu3qHhgwLsZSoCi5zEghyH1L3BcEniK7",
  "key14": "oBJEhLjKq23cvAsW1VyA6whYpYdwzCsP4MERQH6sV8MYvZhfSWSTGKJDjibCKS5eNEhiefafCAwwALfMfdNwoQA",
  "key15": "3ofgf4cUauihvq6nkevVvBgwSWxdXKuN5ZpxRGmYZLnVTc4ydjzUng9WgZhEwnhV7Rmtrq1rNfCFbcjG5CDtS9pa",
  "key16": "5yJsAoBTx9S98wCMXbP8me7di46kkBu2xAEuvNwoJ5h9bPwLZVNBPCUPXASrrBMXAYp3E8R3QG1KFjRD1AUVLzhe",
  "key17": "3nS7wc7dabxxiShzuL9QKfrMrmxyCWWubWyMeWS9k7RPomqZ9LWFAvGgut8V71qkrnqrMV9kk9YfdFXXnXP4qeSk",
  "key18": "5CpaUVjkf3YcpMRAzdYQkjFR1BYG5Us7SLsUHSZESsrXpXrazLW9iXzJSGc1hUoW8YGY7bz1PSa8b4NYm2rk68FJ",
  "key19": "23xDFGqEJfW2EUc1NXu3YAu3BN9F6VoW4xAhTTnbsXii1oetQCtsnu7upnZFwnHWbmkYHc1UJMA5VEDdEgViUmzD",
  "key20": "4AyRQStt91Rx3VympRrBFMTFzqgwRvgj9xXeUfaTHQXCye5en9GUtZFPgJoxTXEs9Ddy9eDXNvduyV4pmFSc5Tja",
  "key21": "5jof7CUREkQCNQww56CWp1WPfPun397XnE931FmnYWMsm51kkjx1G83neJ7FzS2chLd81XerWoMJp3CaAjAhqcMQ",
  "key22": "LeuHZtH4G8fcyATc3vTNbi98WMpGwpLjy4KP4ritTdQurUsfA1MGg75Wi3k8xGpxQ2Rq2Wo65E2HaesnNkDteWf",
  "key23": "2qaqhwErx6ZQmY5HePQjeYxDe8cHJgRLuyUHMn582jDHrxU8sMK5JzNVU8k43WJHjwQwf9e9uUvDfRHyHRzDvPT4",
  "key24": "22J2q2jq2qfbzr5X59Bipim5RK17H59JnXffmjBGvANUfbp12uuRDD4WcDBarzxuLyaLtZWc2zHqPD9TF7pjAes1",
  "key25": "4CY2BxQcZG1wnbseS9MkB9ViaRcX9AmdU3SeNxJGk3zxQ29hAf7dfhL4qqRNNA4kXAuZjvG9HxUsnzLKLnrv8LF3",
  "key26": "3jqjyL5K49M6FYyh9K3LyvpRzRKSfdbo4jfZm4A3cm99wQQ412WqhFzkJnA5k1dLiRfWUewjSgXqy3z9P2SddjCR",
  "key27": "oLGcieKtuf9V5svtKZ3M6uw9gMicevC2YX8Zc6TMCj2aYLLyCuNPkNmpARToEACBUCNQHhtquwD6q6fRvws5pHh",
  "key28": "2VhnMdG2NCZw8oRxd1DAdqqg6rXWwKCY2sTB1DX4HTJmQNbFjKZqJger2hMkVwy8mCYM5jQ2LAsphrjqsvqo6rvy",
  "key29": "nLHQ8BjaSxLin7kvk49CFnUdcb6ZZKnwkPWg1a8pMCjEtRaWFo6DcfkZjJbWrktWyJt8zhCL4But6qtQ6H5M7nX",
  "key30": "35YgV2evkAzVyk1as2D6ooF8q1KP7hFyuV2vfXhv8izRdvsJszQCnMnCJbFiWAnYwuv5ssCZycJ2VYsnyDsDfmbT",
  "key31": "ymT5VuM8FAD6BLQdbxVqYnFhc7A5cr5xi9TMZXU9nciLB1uuwYiHeuVj7jXSuLtLqV1yHW2FfEcvywYm3mT8NJP"
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
