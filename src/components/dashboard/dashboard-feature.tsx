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
    "4X5bXBJHiq99gRWa2yAtP5ZJ1ccqqs4zQpVLrCcSHfrwThE8ivMocMKUX6qeuyWWW1dnRLDYgp5uiNiirigvR4j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWnUpeLrBXFSLgF9BCryBLBaivfxjEJwfSKsrmmJE7NHDcHiygdjyMvaJ36FLi1FFQvGrtHBYHPHRJYKvpE5Jhq",
  "key1": "3gsuy3UEAtgk5fRUgxs4RVZ3B2nCw4uXoyBhQqe28ivcSAy4pB4RoM1jEVmL6XrQKBnhVjGdfWjCNd6rnCsLpCVU",
  "key2": "5XSnZdJV23JD33u3XKgmHijo1nqe4jDfs3rcKc9vpHbq6suWEPZPmaz9TVAAEsSotJNtKbJxmjzw4G6BpYWxXgP5",
  "key3": "3wQq7qhNCza7noXXtEtSYCbtZ64y6Rpov1Xxw41sU1k9tdjKMzJL1fqNR2WuzheGarKToiTu4REaiKUgqQ9cqt4F",
  "key4": "2szraTngx1PncQGDQ3YowT9XnGngmUxFUntDpai8NqzZnHoL7LhP7wKRYuqCZfutxXi9zkzQqGZF7KaSFW26EDoy",
  "key5": "3A5bWfsZecWTRyVJX1esJioDKf9hk8Y9x5NrDDfWvzjptZgmerecZKvncYkxsR9aGmhmBrNiCxDoC1RPwLYtcLSA",
  "key6": "EqaBtw5daL6TTJxRJmBa2paEEnneuCU5rkFoJKV6XAZnLYrBGMrTNUdjWRyHvTjMtzLtdyCqyxHNNddKKi9WLeQ",
  "key7": "faJAZYws3NqGGbcy7JJaCnWxKuqTmJCMsKpGpdei6tKbcYCGW16gUrzqDV6jzcKQYVz6M3c79ritTVuBKXe5Ct4",
  "key8": "3GU3HsJDt5hTRRhYwtiwTrKRQ3d5La9gH7ksrdAGJcqiN7am86apdX9JCzEL9cJSrBhZpVADRc1CrDHUwbQEZVNp",
  "key9": "5oZvsMFrDLoawd75pemzseSLtUgN21imAS5WRtC3StWn4ScwHyFC7HckGKY9wYsYWXMpfNVpjWyM7RhwXnRPvrCR",
  "key10": "3U4nyqVxVM9NqKdd9P5XEZ9rM3eNZgGNvgvXsouWuki6ErD2mdGGfwx1DNqs3GTtWDRw637AbRadQaqUtB6c3y6B",
  "key11": "3HgrhZGjRjKZtRU9XRACaZ4XqBsN5XsQzvq6PVbfrrdffZ3zwbYUQSpFEm7CJfDcwfxSADARSyWhX4pp3qm8yAe",
  "key12": "5KLvsW7RQ5r3dSrTHnVBTZqgG4ubmyXs3Dijoo7XFqa19HwAuE6mr5tL951cGkZZbHCg3KEA1ewX1fbrzeWq2gXf",
  "key13": "4s2V62WNuTQFzMk7edzNJvvKAFh3Ndt6VL2K2WSYshUuzApU2yTrDTwZBpejHoNGA32w2rXbSufvB7BotF3p9ymN",
  "key14": "5cCCBKGNdiqutzV5LGm1gNZdqrppkahr6FdHRSx5skccbVBzqSPRenaMWtr4WmY17ieKP1MdWXxSChB7havisRYm",
  "key15": "5WDXrWTQbaxytctwrm1YUuunmPnTWoivcHz8hE4BELMpkMb8W5LjAcurKzCDSfyHqdGGf9B121ArvNZWBaZEMJo4",
  "key16": "3rUFcappqBn32TkLPoEobyX6QvbC14HgiC6jaiVt2t9pgCALx9nePnZCiEBd4SzpGSsjTFL952SsEdkfeSyA4MmS",
  "key17": "pZM6LTa4VbSmd5Vf2q1vaosFJMG4xMmunSpwjBcbpPS9HFCPQEGAsg5zH1SVB1URsSFocC6gb6fG2GFdL3CfkEK",
  "key18": "3hDCnSQup5Dt2asZz5Zis8UAX4VBwNfxL6jkN3xgUN61bxmc7GRpjjAeJ6Axf7TF7qJU939262ctggoPUcB2dCQU",
  "key19": "5pQfiTiUcsePHcHxuhxakCzL6oqiDASF9sa2yBqEwKVxFJCzECxKcCUcHzJTauWPcP1ed8DodhT23FfMFRqjPfn4",
  "key20": "1jRyb1rpaoj7TMhDTWztiUY2jGt3qKELWNExFCDtWYr8ZxnoervY91Vf1UXY6kS7A6YMMaTtJ3Bcpk2he5xyNc5",
  "key21": "3Mq4aB8xa7o8Dh42A8aY2QT3PLsaXXq9wAfQEMZrjBrasdqDA8KT4Q26hvtMc3WQGd61haoZeQS6LwwzRo451x3g",
  "key22": "5H1q9EQVR8cX6K4DWN1z98kkuxaEDTbqJWP6abbescY5QC4eSfSjxhX988sGa2ss2BKEETzT1m68G9crNGUp8QCH",
  "key23": "23WKkZ1aVukVVv3CSGqrxCh34uoVtLVxLk84Wx5xNHqCx5ZKNWbyn9dhuUSNRBKWM68M6Zv7jcgkSuDo9JE9JnEo",
  "key24": "3TvMr8dYBxoVWhyD8fbN5GpZMc3RNBr63Md4i4AgUhEDHEkUotrj8sEeG1MimE1MV1FRoEp7nMHrsgdsjz1JsLkR",
  "key25": "uccKfXMjv9Ly5HLgWqahV9PdejhMLfG3JWmsPAE75X3m1ib3g9WQykkoX9WJZCU1c1KjaWP3uTTRaMh389tPjW1",
  "key26": "56wJGapPkdGEjEWHCEecpM2QMfWWkWa17j2F1Nw1haf7Kfg1LDE3SXnxZukF6XPyifxuYBqxZbsLc6yswmLRr9PA",
  "key27": "4dD8QLfMHXPicysVAnFTK9ZutgtcUXwCMvViBRQpquZbYcezuEsh41gQJ9JD62WxjQFz7M1L6GvYCCihAQHVpTgt",
  "key28": "5yBbMQxfnbBAuzEAMSViQmiMinyihWcWCexMuNCqmRW3dpZJxCbj45YUjUC7ML5yE3Zb7SaryAdTxEnDSLqnjQL7",
  "key29": "VH3ZFoZEv6QEvdBeSQWoGhvo752zePTZB5n5vMBczZNTmnFA4g8gG3wS2ceCBat3dfNp577tv4mpa8gMcH8g2bR",
  "key30": "ji5BWZ39iPomuNsVPjkPW7NfSUYCYkZ7G5daE9B3bRYheaoheyj52LNFV4xnnU2VE2f28RRC4RkKKWydDkqQEi3",
  "key31": "2toDaSHBH6SX2UhAcZd5MH14jruAFaLxDhtSsYehj3t9uyrEY5ZbZD9KYYPXapsA6n71BEKPsXpNpT6oV2nbihMP"
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
