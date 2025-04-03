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
    "5E49fddECHZqc6ZnmZcYpSdnQEbYUrcGyzHX9rw1uBBWzqv2bnYYgiNCuDmcUMsh4aMPr2cFuB1HJoNAdeMYwrrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rb7fUQjhWayEFKkW3zHKFDApRuV9iMAdtZyGYGpAcT7yzYh6Ydr3yq988SPuPmxhHX4ybXCSuBrxLNwG7fJE8TB",
  "key1": "4vvw84s88ccXpnKR5psMcrLHB5AumtFhFKHAzDqWn7WqNmEFQkUMsNT3aVbXmPs9LvxaMeX5o98X34ZTLcvaK4B2",
  "key2": "3W2cJKNMVmv2WQfL2mpKyxCwSEcQWJwtdGtZBszrUB1z67b45xcgQJgTQNKAqR3MHARNHY966VkEGHhq293hrDAQ",
  "key3": "5sVP4qjw8Tib3cnJfQjtLVFCUpHbgamrH99p5bq2P7s2PqxwgYKoEmewBs2SMKESBKChpfRj8Xo5cURXZvJfUH91",
  "key4": "4Hsb73JxMbTkSBoUBDchSeZhPipRLhuDdEtAe6kbm5byHrQgtPCXmrWBt8C2aEE6t1m9gZEpeu4QCEe1RFKYNsv6",
  "key5": "3vu7iR9n4QmKFznAeExp8okPLsAbtpUrLKCXq6ukVDvSxnZTHKnDzM1E6YbbL5RMEuDytLhUzaVPMuGzwNyZdawF",
  "key6": "5CPwWtTiLwWykEbXbC7puutUPA7983mxDGunTskuJkyBoihbHuZ8Ak8S3jAuc5SVYZYaoi7XQBfqWaFswWgPUUWB",
  "key7": "5wQcSwwo6CnMKGXoRkAkZjGsWmQytRC9jkUVt8FeiUP7arBL63uYfpVeeHTY1dW4ByPPeAuoDDAisYkMNozqEg7n",
  "key8": "2kM8zLJdDiAksDesozy3Tm1taUbCk82WCfCtwXKWD1Gjy99r2dsT93H6iUYBt5pdLNTjLS8z5tZqzaUDqPx7noxc",
  "key9": "3HiWNhU4Ft5pBX6sayDP7NxEfvHwEtab7ytaVDrpNGoeREC7V6F21QTrhTVp3bauCtNh1RApctKEc3FryNvhu7J3",
  "key10": "4JUBYHyMyy4gQQ8QRjXZgar5aFLkduzThJq23JN6tGTCLpQN9ALXywdd5QzRPf955jrgLap8yspQjxp4RJrx3So2",
  "key11": "5C1Gm5JEsdNXqpVmV1PMoBDv73yNssemLX6St9runkZBJsLq4r1Pz9GpB8r8iHKtaniPsEvSQjjUSjKFhm5ebqFY",
  "key12": "3YXfAa9dysFpi9d5WztMu1y5Kpsw7oLzQhQGJEqeRiKGz3C4y9z2QgMmJ8dL7PdWmaa9rn6aGdeURkTPv2xeieK3",
  "key13": "3d3phFzSE5LPRrqSWkcnz9raQjqhNBsLQE4phFQGqEwtr1EJH7tWVADXy3NLMNgQFJGYYNk8YFd869vcRXfMR2Wu",
  "key14": "5JzAELAnzqGQFGCypoW3zcT1o2sBuj35xLpjBpiUa67jhJ4fDfTdxW7W7rMf1yNqvmEDD45wdEJQ5x898yBgc7SD",
  "key15": "4qFSmUP4PjG5ef1UynJTXizZCXiiAnKqKLD8vTYTNmvwabr7XTsYWZMAJwjYKvsfey7dXoTfUFn4YDoy6FQMCVTt",
  "key16": "2epuSK3L6PRbcvSra78HpzrbpC59ph1524aJw3FnLRf2x1yp4BAb8cZgGPggyX1nPjqcvgkjoDkCmhGWD9txdLjf",
  "key17": "3njJRycYgyAw7vHuKRsuCP95T87JjB6BX8Q43FZnbhSmHaxcz548Qe6rAFhbDUKtdtFokiz1WfK7MP8iPNkpWTBh",
  "key18": "BMXrKxKbGujzQ9kt2UC9V8vX2JvB12CZhfZW1FdZ4ZopiRX6MVCnnq28uLiLqSJUfiwFCeXnyxd3DXwsXriCxDK",
  "key19": "5F9YqRi1CDAWAP5ZVva1kde7MdJhT4DQP4oeFyvgKLXVBohUpAryw4MfC2Axc5qduvZcYpAQmbYhNzNxfGkarYNc",
  "key20": "42oxSEnwjob39tmDEbXMTCFyEEYk7gUZhzDtGv4d2yUZUC5J31vuv2BQHyDWuR5o1zsS9ghEF8f9A9rG1dxkurMh",
  "key21": "23WgzBVrcDRvSxq1zRasVmZVo4Tesn3629ZxwFupAAiG1xNuSW2TzJms36QznDeQCFkLJaAMsM3aRAs1jts3psNQ",
  "key22": "3rKxkXPgQKcB4YNvUjuNEYB49oKhW8bSbDnBZnzkP1gaFQqdKzfWWz8i7RR6K6wHrThPwD582PxjEzGr5v6F6eyQ",
  "key23": "4L64unJM9pjuQeJqN9TPxWDy9q9mrFcYngsuNY4Fr3pnwx4Q9NLSDzfaXFB5A2fdFSo2WBQ2EPu5kzz7qhu115Hu",
  "key24": "2VSFVeviABTKbeh6mjYHfr5y9EqQ8YEomWVeQaBxNdpX95rW727yzpS8GjBWkiwdtT82xK9fJiPq1qkoSvVrc8JN",
  "key25": "5pXMLVvWRJJv7GSRZTwCnDqiw64Pn36AfgZvuiPrpwGc2cBFnPks4KJisB4tN91z7KArdpxY3Ai5V9jNj7f2oz2M",
  "key26": "4bwsMbFDD2sADFpx4NEYbr8a3TGKBdjUsqtczLNfZ7uLUBnNfJuvcae81PQKeGWuVrfNtqSykh3dUUZhDCKUnbJW",
  "key27": "4qJ87PYN8wWFSsfDydB6v8coPHQNPShGR5shobwdguDYuNB5LcnwyDANdxs5bFCfxuuLt23dsdptiU16XNxcLgwV"
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
