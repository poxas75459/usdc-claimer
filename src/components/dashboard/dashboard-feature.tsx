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
    "g8pq8qzsboKZdcVU8YVeDrbsMQDoeuz4Pqp7e1EcWp72EKpFaa55oAuUHVtZoohXUXyy97zTgiHtQP1kV32o6vT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JBxmXjXb4tg6STcs1EoJEL1dScyBgjsMWMYCfqnYTxgLDMtBwr9ujvZd81nazSJMth5CtKtATUef2HeUZzYSVpr",
  "key1": "66p3Nv187wiqyKDJ8Y4b3p3g8gxGkSCMcToF3dujtdYsaTKkV6T91rcYkqPg6pmVXbesiz8Y6SMXxnyArtc9aGm4",
  "key2": "4YG4qPqJirmQWYh9RyZDcuJ2vi2MRfj4TBhQX24Pac8w5u7f4csVjwNjGPxAnRpE3rsJ5QHRv2UMhUnFY69Sdx61",
  "key3": "vcKMEFeNCpnoru1Aw5nqVDqMwtUBmcNpmBomJrb8ZRdYCD6bpY1xaShth2S7wYciWkat5JPjHYfD58dEtsYvp8U",
  "key4": "2qagmaYWm74LqdJB6VvchBEKZaeTonRivnmyiuuqRMgqUSaLWNoWofyM5HwfBSkWXZ3bNpssLSX7e6mgTJTXetYv",
  "key5": "27YjLTuNaUK67HDRi2JevAKPZ7piMQbxLQkFWeGcHraoPWWgCDSW3HNgNndjVkyYGXwdCNwkQ94CVdRAwbDJ2c16",
  "key6": "2vumvD4dSz7CWbTV5n1x6xXHmRRngD3awzZgCUbD1X17Cz9WEFgEoukRPGDt55XGMtK74YR7PT7vKdTofTJUxF81",
  "key7": "3Ldfj4CjqFJwchLeFJzkW4cFtV3J2Xt411LEq9q1khtc3juHeakvjK1NsC8Dkka3bmLAPXtMtKQX3gom5cxPYbkk",
  "key8": "qrF3p9ibrizsfANvAkF7R3J8MwLGiUKSKVU29wBBfeJvo8WHwMQjL7jWUCs8r9Ar8LHhnxBmq4yTnCadMpmWQF1",
  "key9": "2UFcNt1XPpXsrDELhLP8CPpFtfjck5bNzX5ChaiPh2yfRD9n4NrERTeain5Pbc6F6s8VGHf3dWzLweLfuhGEfpaz",
  "key10": "4z6ZCK2BCj4NsBPwndSiLvUrX695xep2GNBsLYFx1XJFeCcaVQ4M7joBHFwMWdwWXX7z3E2xbEeX5uQUhun7JgkP",
  "key11": "3pnfftkoPyEq7Gvrb5BBvjiKJgfNjSnbPUUig3UpKN5GmezeAxXPs3YLFQ4P1a7sDBe63QqDzpR9d7UtJhtRmVLD",
  "key12": "2sBfBcJnQiW3HgsWSVNzLMeEiXQwFF5SUMq62WNFsTshPpxnwdWcHdamCb6yrVf4Y4UtGPWmsruBndhZr8uboxrW",
  "key13": "3jNxKQqwxSPrWha61vGq3xMMNdY5SMnezD5uTpCxPcXdncwxtC5ypHZwKaDJ8pQKtauCeBQM9pn9CFt93cs7rcaK",
  "key14": "2mkGvJX1wAfTEHAtCKy6wk1xq5L3ULyMHVPbakSHtWP2g8VuSc7E98oNSS4xWtdaVXgMFJnq15HhPYMkefJX5hsQ",
  "key15": "5HZ9VYYZZsRnFZXb8yPeS22QRZLe47GYwnArYvbzQfqZgeFGghkDp27c85WFn4ExqKizFNtsUQkYVeaXy5J54e6R",
  "key16": "4c59HYwswkfxpwXgVgnrWSLYmGL1QESoA2sP53M1FpG5dQdFC5THk9YweHEowHmMzrtxBRrvbp1UNerE19fNeego",
  "key17": "4fhtbcGucoxyPRQkoTuRKktimsFMLDMjYUpP6t6Hv829Je52qwP5uKH7WdfvugFd8bAyhuVw7zJNPm8VGqBmUJxF",
  "key18": "3pkhQietyvg5nmJjQteyXHYSiV1VC9wGqZuYUVC4uRXgDMWA48x11UX9CUfxeBYGtV9vSUYd18TkJQ8URLqAfz1j",
  "key19": "8KUSJxMnawyhKcCjeF5iF9Csxgm2oNWYCYTvTd7UsWYhpEHuY8fURHRCTgTHm16rasYukwYv7MANUpSW14QseMT",
  "key20": "5XqxKwYcmRa29Q5NQzvkHa3iStRLxbUTCEXdKuePpNmiLaNH9ZKRfqZzXhKnNWX4oP6fzxm5n55n6LnGXXQeS3jK",
  "key21": "x8uwWVU1XAdQu69355UoLVDRDDmmnud45fTaftgu77UYf7eZ3EhYCgVtwrGr7UqNW5qMyBbQXH68TeeR5HTwKLd",
  "key22": "3kNKw3z14ps4yr4WM16CJHmJ1X3yHboVfBfDFptm34fa8UxySifwwdzbZdhpLL3g3M3rx3PRF2q46UyTikLx1mTQ",
  "key23": "oTHgUZwfarDTh8t1fydbvmhj8GeU9eJgC5yKtkNc1ep4yzSDE1WWfJf8xkp8USwz8hRNcz87sYENHJDcLNXfN92",
  "key24": "2RpePWW4Krd1wAL8ZB9fZpL74ucQqFisgWRwje4WnRLmDwG98gJSWEL9gZj2WWgP3Ma7qwumybjic4itcM4xAHJ5",
  "key25": "4mdo65ZJUvQHCgvDzNECjHY6NZKxpkaL5hKN3vEtEL8wUEXN3Zrze723vArsRnE6HjErQMggmjSpLE8zdxrxzdEX",
  "key26": "4D1H85QUX27B1ZWCWf12gLZFbF8SsLXcBnVLaSxJQi2E2tiHpyMLgiqWhGxWpo7Yy97Z1pQRpvGU8vFk6JGyYks",
  "key27": "356oE6GKqFws4p1BGMWr7jNHcYRnVaLf9mms6pZi1QEbPQ55moxicgbgw9UX8Cn38aKLHdG4RJeLrtzcqWEwWH8n",
  "key28": "4139pjqmc6X3hLkMpkEgCh2NxhvKLP2twTjKyhNcNsT1QjmhvALbTp5uuH9tMwvGyeqybELwqGoVC7ka9GvHcbP7",
  "key29": "2nnMbpbfFqF2GnXQs6Bv3ESU2MFZvEYqGtCQQRyn8tcwNh4U8vV4RfovrRcVpeYRjcKkbaziQkuu8u3PryztbZ9o",
  "key30": "4csmBTz99Bbctes4qCgERTUr9tXMWXGZnQUmtoJvUcNYCw2nCRCWQLrsFycYuUvRtMh2HsNq3FPqKvbaA3ap4MCw",
  "key31": "aC7cgtKTqPZ5nqmT8pzyqG74KUpQxT67WErhUxRyK3rBr8QADyFtRcVCf7zzG3fNxosJbDS1UqCKaR3GYVWdf8o",
  "key32": "qKm3hjKU4cAX7TZaVfWkMYuN7gGCkwsUwZYzaTKrCy16br1xWPF5AcZy1N4DJ5h8zyMdwLLog1mx9b5SxPtyKzZ",
  "key33": "369Mv2FhJDnz4jPoEf2nCpqNw9k1793EQnAWFcoDsxsQYv9Eb9LP1NAshFbeQHVeRhkNTJAinAVd4Ym57hc6eU9N"
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
