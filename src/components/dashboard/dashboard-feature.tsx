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
    "2PYWDAmK8TeppY18kcadmzUQ45c9abxjRt8vUdfMoN6HEiMWg4tNokJdi5BmqS3KkhQx4JrG8eUhuzGvrVDJ26fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zvZyY7WJDpzt5cuu7BZDL5zCTbRDpVN9sN1Xkm6WudtGxoPqFTQWFFBkuEkhTs9Kqd8eW14iaWxEEvV15p8ekFq",
  "key1": "2KGXfH4NFvAKuSq7AHCVXtz8UQtfSwGqEYnNyRVatvEwFFHcDPUV3LieCSu4RGUED8dzn9JtWgm4GgkvD34tqbW2",
  "key2": "4X5irtad58Q5w2bnMWioghsryWVUN3Raqa18sciczAX52qqcYeBQANRwmg5mtewDTSz4cfDXRW1hJbTrNMnmqAqm",
  "key3": "5LZb86LahXEf7iz9QMde1yCmCDBfeXJztfrrVm5jv1CajB9WZjPrsUiJwxpTv7nmk2XNEFsevWbF8wtuT5WuNbDX",
  "key4": "Vbm5hxr9y2KCAVMotYndTy6Qz6TAXdRZLeNdgpkQ9aqqhqTp557eipJQ6HyxmxZjzHYNXmTYN68pi4Ykd81vEys",
  "key5": "XRKpVV84kroTMTmsUSHcjQTXEHbbWvDPLNRQZJFhZt2jaYo6XTyRAgXVRgiM3AFFtEu2k2VtEzTrdi1f8rXHB7U",
  "key6": "5VN2pvD3tKV22vunPz6uAxnUCevEts4sPC5GDpLSKbRKJ4ZCYhojW2wRTVqkygA57wUQXvwAQopFoifXVQH2rQWE",
  "key7": "623gmcrHSdFHgTbkMwiAnm1NBaPvDU6y3dEhbBKyRraRDakfnZpAYguMF4cAWtNG12w47ftnvT86LjCUGwqi5ikQ",
  "key8": "uU3D5A6XXUHP7XFHV9pMqmiGzs5aRKSM7MFzTyiK6jCGvqEiBQNCei2uVoyXrk3GjWKAzrSQ6VjYiHuqqD2mVAk",
  "key9": "2NzxRYgAc7BjsrAuY4HChEzfTSFL6Q6S4ZQmGZV4qmr3jdzjH9Z9J7A42YX3gQw5nrUeZ3HaTcqk16v9zdGWjaPS",
  "key10": "4YFJq9v8bGN3PmX7Pe6jWa9XwTnfdDsXkQZwiqwMaU8ZAsbkWTzP1cgbbz9vDS4iA3Q53XAsq1gVPziD3juZ6mQR",
  "key11": "3WsE7FgpzjYFdtV2ixVopLtGjho2ZqDdpyySpSizGq7SB1auB4eYW3m1N3ackwfssbrCjnF43Qm3qTrn474wdb7i",
  "key12": "2DWArFB4paA5afwg2RQvo7DLoYENSQHhM8H6r8ARZ1VxUHxBAJwfcsof7vu7ryR4hpoCY28mFiS3szZZUjzwQJW6",
  "key13": "2h3zSJV25bnu9xFm7iugqAH3G2ASmXZts2tEyVRJwJeo2nimz6SeWL8rXT2Mq6vfeGNWjjFwAk8VxeST7HWFsZGk",
  "key14": "5ZR7gfmdwJYGaAaVqRWXjEZpXU6hCLy8LT5A3miSko4W4fX42oqJ4RPU75kgeavncBZH7enLbw6XJrtTDpaVynYD",
  "key15": "oxuT4mdQDsLUUGDBucebr42WCdJbY714oucuTAtJGCSKgDTiEvXsuSZzBeSi7CjuRYUPNs7qENFZFJemzndvkPn",
  "key16": "5gi5hj3LBQTUjPywpk7mqp2LW4cuKty9z8ZDBwKchVHXYrnXDBds13Sk5jYYG9QmYnkpizE3KrXaj7cfsH9VykSQ",
  "key17": "3PnFR3pcWqkQFAVQMbDhgRAQHBRj6xEqo1n47qFqz2y18v3YVPDVX76WqkVdSXebgqg9x4GLi9pHD2ZsrKUkFexA",
  "key18": "cEeojkBgA6RgSyT26JUgnwzfVBhBRD5tVszU175367VabAM5o5KHi75Pb9VZMji6E1NshEoC36CqAbn2ja9K18r",
  "key19": "3JUay1xWS9yH34UofDvArfZsniPoDZC5QGg5XkGGgsxoefHhPWS2eAqUD6FCRGs9keSjzdYRu9oqnasxJpoQ52FH",
  "key20": "5boXoeTRXA51PtKcxosheWbahcqaA4TDKhd2SVMfRiyhqxNjyae85zv897N7FvPmXre3Y8pxzbrnWNZUqiDbszoo",
  "key21": "3J5npram12fno8DsfKbn11LnQvr3JZgLSd4Ne4Tunvu3UcSVpXbMBLNgaDJNpuGqQc72Ajzppovz3YrPB6NDkd4i",
  "key22": "3hDVKEGzLurVzp12cFeJv1LSmmAcwgnuN3US1QqMc7KFFA43PTnz7c81SXAT5dJAppV7if4R26MQVBfmEZeEBeVo",
  "key23": "2ADm5rrfen6U8gamPdZN1AyYpNiz2YjLP6Y9C6m6kC92TyY3Lfxhdc5hhpzDpZDZFQ3VNvGJsNJMvSteDFfNHgz7",
  "key24": "2xrwRPjAafxU5PYgcmRWSMSY9asVvgj5C9RCAQarcVN8CqnE95ZactffDt18s8GaQ59DRxaTS6Z5h3VFLcjAA5n9",
  "key25": "5aQvhto2RwFZ7aY1sejDMGTSxLX21Vswf3TXScAqpcXoMgkHJZoLoWy816E7kf9C9bynanqVhY11NE4rXzpyyu5x"
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
