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
    "3VDhrcoCWYRVUkUr152L1jRcBS8ixL4hKstp2UVzZGbMLKfznnuMt1VDcpBWKvVKW39d3GD3otEh2HpqksS9eaqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5494jZ16n78ARcMA7uWy1cnF1GzoRdTfZxbHteHySxHbS8FGRrfWiV4xK3MScPFArs3zCo6XwicFrUedqSL6QEAh",
  "key1": "4NPUre3kqzP1CA2MKstFiV6NCtAb8an9qJnoPE7H21bE5hm8tyWp72bn1xufzzHQu7GeoP8hFrJN5GEm7XRLWjjA",
  "key2": "65CStZbomXfnmK3rurzeLVGGZ4kT4EDgtwAcL2NMf9GYDWoqkZReLLRVcXKR9v47xKyyNCJcEpWWvC9qt7WHEFfy",
  "key3": "2cqwSL981apM53gigAmayyFtQvQMDoU43dovKiv9miPqNVz91Z6vqbKj7RMVvX35JbYfwLLaTMpxXhUhSJxz4G2w",
  "key4": "QChNHKvakhCDnERjqsHvc3LPsL378hDFw3BC8dViCPxPUB4Ju3Bv5gAhCjAiNUE7n7xjXsiUmmVqtgtFndCjehH",
  "key5": "2sRJQXYnrrFvmfzJm96FyeuWWhzJv8nDyWQcpssamjoSdhchn7tTpTMtiWxDG5gdS7f9qGP6QKUZ1qMKNgwSyLWS",
  "key6": "2Uz7txeFTEe1PF7h3TrNbbQrY6YvxHa3A3JBbavJvaBrJKHoiLz9NWW8HYb7cyKA4zQrN2hxKAREfH6GTsYLCaBF",
  "key7": "5prQuiTM5JrTZef1qfC1XdRHTQ9NwQsEadr7Eow8ohVHK8NU8LKnWrEAiX5pWcNqafLvbz7qU7DSu563XtuMjpB9",
  "key8": "4mVjQnZsHeppstuE2NXnndtwR5paNQRAZQi98rqfo62WTGY8GzM9jXHcuobuKC2pKvmBUhjuTkxE9Air8jXU2T1U",
  "key9": "66Jt1JaoEtJn7TVPyQJbkZh4vZ8YxC8JmBMoLBKtU7EBGyUP7jjhmm8JVzos5DoFmQow7mMcBASgDatFecVLJmQ5",
  "key10": "5q4KA7WsA3ocUueEu1xJVkrfni1xzSXJGzjt8KYf2vz1n9NvZFqcVrvDSy8grbgRcXxcs9HpLkvUJtTFYokwi1Gf",
  "key11": "5fGWkGN6Sg3GWXVqZ1XwYyhakazzh9ug5ySCS1YqaAYNWrZjWmmokLFr9KXpfkupND2N832RDt4XYZpjh3Q3NVD8",
  "key12": "CTb47Ar7VdbhxhjJFZGMQU6rAhBCkeh6G1wxkvLq9NLhYEngQe5TsWWr95tkT9bNVRn26Sz88W49R3aburje87f",
  "key13": "4bhu93SLuBAyEakJfeXNc7YSnY4ycGbMwjdPx6XKr9YsjJaQW4dyoj3dyc13Wu4zJ9jBftTE45pXYpKbJLnYHw5X",
  "key14": "2wjQQAhhsvJ2uH2gjDtff6V52pyWXXyENSBhguQTJoigsXqrWBTMaiPzNLXuecKdTzvuQSNBxxffGaYfr3qh6HW4",
  "key15": "2PEW8s81EkbtQc2iZzKi1gMRPWZDEQppoXY7ge3Bg8fVvBhgkgm8BcZceUY9PwURbGoM3zKbaBQozj1zGyc4ezEf",
  "key16": "66XhfNayFVe2htCsy7HBPhvc4QfU4XmmnrJr2PkouSkcdg2tJSndngeD27A2KqTVFVoXVSu1wzJ7VeCV9NXMVyDi",
  "key17": "TJm1ksHbvpqh6thc4Rx1ViVJA6mfac9ogcwY4eTi2KgcmdTxTkqHXo4wmUewLWzbfK7RKch93TrTy3ntPU9fVjW",
  "key18": "2woGMsNfLzgwMmh9kyy3LrWXThhog9d8zovTJsb5UVc5jWWk4kzqgK9yGJbkSe61zXiuG3Xb6BaP6mzzMzsZzLy",
  "key19": "3vzhYsXRSJgs3FTnjZuWDitfUNs5bSncK7yWjjji3pPvEPSZhHbtJM1FKc6QxDfvCvRxiQTmLH26TFqWegvCEMSg",
  "key20": "5UJD1UeznCkfAUy4PXVu5WmaPCENXBdb2PPtsRBLqNgWgfJYGkpppCJ91jj7WCL5yJTSx2RzA812Xkvjg1PYPU54",
  "key21": "2KoA1ptQxJJenQDHvyJM2H5JFSKfjv9r89U5muC8vX9yLr8vgKpBFkMbxXNeTX4iYaK49bibGSqALxjjo6Meomdu",
  "key22": "2zZarbH1dqKjUgDMYQmi2NH4KidhWXwsNPqYgYAuHc7Xox1XSeKXzzjqZTXjVDNk6XAtAXDgzCNZyxgz4K5gjnWs",
  "key23": "5jfeVeFAnuT8NgEMypXitnH32CkwrxU8zeUruLuw5CsxwRTy4QUXVKdpBGSetCqsXHsDbQegzH2RS5h2HSd8WvoF",
  "key24": "5S6nDKahbMgsENMn7U5Z4K6CuJQvxz1RKSA1r2r2S6fbL2xwwZhHxRwgCkm2jnRHHweDrfQ2NzdzJE1EFrDqjXtE",
  "key25": "3mrDzLwCwhDLhyubVm53bnhQEgeWXQaL1cfbMvugiZJNUXGCHktgkYaJ4qnq5atxUPvSAMAADZnJzqrqoVDGGseG",
  "key26": "67DhmqZKRemEqqBm31DsUhLeXAGWjVDxpMoT7uM1L4Agar81M4dfStzeBchxvD2xjWmY2WKQw9NZLCCgDDkBtatB"
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
