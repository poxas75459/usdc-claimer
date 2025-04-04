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
    "5ehdqXCXPSsSS7c3Z3WDq8xMBM2cJpQMcoLoquMMydL8mK8o6vhu3NwpQLfGPoRLE4VaA3JY5QoaZ4244ac52PyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wy1GEoi8vyHYKHUZnWQkYtLtcBU5BUmET8zxj5QkVDSz4DmdUpqgxnG56i8pY6jcRha9PBvuxQuxpvrQfg1mqtD",
  "key1": "2RXheiGHW2uwh4fxBZ697HiPF5VUaupuRviBew8s7He4U1uD7B6Mp9mtFkozmYWTCqAc5t7JLse2q1Xp4hxth3uR",
  "key2": "3Uh8tQDZGUVyB7DuG6dKhtphWU5VcYM7ZPFf6chM9jPUGxg9CBG4wCEHCFR6NUwHKpP4NsBDia9qxCzUkJHegeq3",
  "key3": "53jStHC4VJedTQxuaUkMXuigUKhYugtBGiXj6vDRvodK1skeNeoRwQybBxkHQYYcdQwrnMV9hTM4wueRKJgETrc9",
  "key4": "5N6wScYh77oZV84QMij6yCstnxdvC441K7ESfkKvipsppA6MpCVeLkdmwWCf7rpcnKuxJo5gb2A3dTRgKAP9VL3V",
  "key5": "T3pojygcoCju4qLvaS7FJ6tNud9vjG8n6yEkUnmvKxCLbcqd9Mf8HnDusXEw5aa1RmYUA1921vnS3V4tYwdY4sM",
  "key6": "2E1ZQ5jG7G2QLWwJEN2t8ZSGE6sHPLEWdAjuA4rmjLgVxZt6G8kQf6gGkLMgDsz8kcna5husZkx6odbiAMJEZZVk",
  "key7": "2J5qawWg1VSpiP6nnpGoeDRV1peKj9bSkFzBVEMHWHQQkZvC4qznkdnXqPPSD3YfxuBb1meBnZx2xAPWmjCXiucX",
  "key8": "5g5SttTFkG7UudxyB16cduTubbQKXbVRN1tM6RiZKqLmuddxtkKc8tsa3sqofvNA2t43snQA8syajpLisy3eYAJp",
  "key9": "2iFiLYxBg6KMyLqZQ4eFr6mK5tge1ZcT6R1qUjDycsWsvU9D6YNjsZ8ddpCZmcCW2tb3ttgVvkrExNQnorUP3Ubz",
  "key10": "E25pJgoWuhpoNvBDCae1fKZe2MHjBirnjJXkYPLQ5vzSHntZfnJhiUCyw4GNvXrqQKJfumNobGgc9wVFPDtGFzj",
  "key11": "k2pBs3xgduqLgN7agSS8fEyUMuha3ya7YChSJ4ennJdBijqY3nv7P5g8cf4pqytPQroGNqM8gGa9LppLsqSvzVA",
  "key12": "64aS5zCzpMtZM423eT4ibhyr5mXfXkrZmrzeEtMfLSXWQ7SQPhA43QLL4PFaSoRunygbekRsGGdLfgHjqJ5yMGMA",
  "key13": "GPaW7QewnivDPoYN56Gtu1tWRfgS65Aexnxo8m66KTvqUxyVpC1xj23DK6XsASuEEKbVWmrCWsVvjYQJQxLDuya",
  "key14": "5Z7X9et3cpu6ThLya68HWzDUL2dRvFEpRGXwcXx9k1CHiRWB82NmgkALbtGfG51Gm1c6hg6arKyMRNWzY3uFS39v",
  "key15": "2KXkuFgWmBFGtSdVUrw2c5jR3bAZJwpxsPUgZjKo3mCcxPq65ywEDytgC587AV7kjAUQH4Eaywgv9JaNNmASUydG",
  "key16": "MUmgK2eswxpejVTfRppuWrW7rFgsJCfjB2DJKKUkEyp5mbJZ2LU3mySEFWH7uEdgRrLdazvzULcn9X1J22Mp33x",
  "key17": "5cqavBoQdbWUPft7vYjpH6qcjNpoShAyYvHSeoGYSBWbo8LMgWcB7FGtWBsDZmT9e58Q5vYR3VUrAnubefUBpi9d",
  "key18": "3dq3JKtBR6rcvbL4P4gz9tx52mXRUoFRLzxA3X7A18aZugcrhVYxT3A4YXtmBmxCt348AeCje1SjHWstcURCHoVi",
  "key19": "4zc1dCAg6yT8FLUTMJETpF96xQojegcRp4eRVksfUiHKubynnimbTGCjZXovr1b8rupxUnvuAyMQD5ybXT1Ts4WG",
  "key20": "2oceRdvPg9gjis1Y1LNJ42hx7sw9W7CaK8n2bKZYExpw8ZsZzASBkJ9cgG99VcnKWz4PiBkzWMPmLLoPBjzoaKNk",
  "key21": "3u7LnTh5uPkzCLcSRQJTksNNrsoGg1AEGLeU3ZTEix5v2VXicsddiduhmUPTLJYYqcfsxfHmtrzGCVR9Sr7KywEg",
  "key22": "63wQRSXcxCHXr2LbZj3W7Uxc35EqrhFd1VPYyhwEjNxf7pYwwyJ9WvBABVaNXREwuaUNBXBAKBkb884aLSr3XnTW",
  "key23": "3cm7F3VetDXe1yttz6iPTxGZhrgUDDULhjos7o62WVf6w7AUehTpkfAKxpxxLz6ZE2dg83BAEyDjoHtoRmMKx3Gu",
  "key24": "677Gsyu9pS7exseVbJhCA7ngDnTiY4jwLprNsU8kcc385KyUt2UdQVsxcWmCRLbx8ttDRSkjo3qcNYAd7uaCpS4g",
  "key25": "4hWXzkxM159ca2setFw1S43gdFy6y5CqT8fFuJ8RyPHZknLMSQjMdjuw8BkBSfCk9KBZMQtKH1X4szVzXHf6KEcQ",
  "key26": "4bN8qna9U7zFidQ3Lxmb9rNeV3g9S4GrJb9Y2mUjkp8AYQKKWX921wfkGJjHvCKDjTSgUAQvxVkntA4BCNZEdBQd"
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
