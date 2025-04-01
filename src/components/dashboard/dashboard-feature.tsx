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
    "2uXKzsVaqmF5Jm4SNyanikkZb9ZZVeWAofhegb1PjnSv7La1jqLN7MtmNNUAAHkuM2ToARjMiiptaNhfimgp22z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P31weFtjkFBwRotAmiijXuX2Vyc1k67x6LEttEur2QBPZqaPkm6m5NMGfwsrucyLjL3knU27qpf4yFt4jLBVCh1",
  "key1": "3BccWEdX9uB3suqM2xNDpDnMVbkgofpKp9AzRHcbBs3aaw3XDu2LThMfN3un5LjuSjwKDogiENKTrYGJcERMKWz1",
  "key2": "3FSQxy7R2J63M78ffkwNrmcNqo29LWVVhg5CULpTbUHWw6rKF6wE24tW9xdSvugTxs7LgwX71fD4h2GAm12iRhxj",
  "key3": "L3RrkHgw3kdTKrUSoTUjEhNLX3cuwgsR1xFvCGUZgzp93Fx3VbbPo3fJYkQoQC7Tc82aWaYr5Jyz5RxcEi5Wk3x",
  "key4": "3KbWnf6uYTCK48zbBGErp42u3CD99FKbtBDCgPNMFoVYQvw1fruKxtQ34ZAn7iaM8zr1uLxJNyKKAbghdvCwmP1p",
  "key5": "y14gn7hzM8TQMim9b3dqw2mdCDE2vjnxDPzNuWmJMKYWWvsCBJKd8YzeV2q7L866gTCLnUwvQPLYnJsZZj2gQfk",
  "key6": "4z3VKMuiZ6Er6sE93cTQJPt282trtpWMG9J3F2dNneJeWNzLJvhn33sjR2rCoX9LqG8rK4VSWVmzr3FGrRfWGCL2",
  "key7": "4cuaNbKqdPwhY752immn1mDuUREJUKba473o1qe5XwvLRZpNtH7Eo5Y6JhLyPtKZ7UjpfQ2jm8CWEb7P72PLbkvT",
  "key8": "23usxTAKDXisJWk9sn93Qta61damupSJvmKSVeqqzcVx1WWFGyAFd6FSrUvVJ4MBgTiGkYUJFSnshCxHL2KmDFuH",
  "key9": "66T44fdEWvYR4HYZKdJL5tTVj3F5wdcqCQK6Kc5NdN1ow64yPbwhAUidGswNPegaVHGiKL9FZURgNe2cXBRKW72u",
  "key10": "5Ds2eH5bH8ytgS7NdtqfEYrrj1sgAuhrTwwrfiSA1Kawq1aqUgEddNoX9oz5tVYjUcTDfWxPbZRLmD3N2DCjv5u3",
  "key11": "4EHwo1c2CZLZziH4b5XxtwPLxMXHEGjjx54M4EvQxg4xKW8wM32RrB9RhGhKEoWzRsRKxVqNCEuwY9h853rVFX8N",
  "key12": "L1qHh9GX94naJ7nxvJ5ebWAi4sdgrmWc24FCFBTRdxJToxDGUhy4Eb88V3isy7mkWGE1mDdkDiSUiEQfDCZLkNE",
  "key13": "3rLYWWjQ8UqZvzfMS2Z8CVW3ysoggiqcqKaw69b5fuPNbTjm9bXggLNQfbPfVmM1G33GYBnu4v4Lpobr2CyZXTeK",
  "key14": "V4YoHhzRppHMdhyfame6uzvzGxA1YRot2W9eKrXfjpLV8478SwqmbGwE5zLAMSvoTwrNLuzy8y6ZZ5pVqoc2Fcs",
  "key15": "5EfMJi1oBoNGGVeFu8x8bwYGv2Vh4Sd15mPqtrwDSz23WVibe735t5ZWKADtGYfMEELLDuLBNLXnGszxrWuvmUch",
  "key16": "3AeUxcoAnd3XtfShFe9gMUHCg7hTM694c5vvZAxJnrR7WqAdyhEdwPPEEBikJjih1FNgBg8q8ZY2nWBbNKGCtDp2",
  "key17": "3PHyWj8uGSHCmxtqu7qe6PG9pJxQbh47MLpWiHdKgjWSC52EorGdhM6snytTnQpfmTWaDCCf2HPxGRZQSY66v882",
  "key18": "2qYXf2RDwVr9biZUZFJHK2MUYrAyb3qosBcn1GhDdfUxotkr5Rf2qcGh41c2Tk9N3uLDLjFPU1qEzY5CVZGaxBpq",
  "key19": "25wbHYqWJUCRbHZQq8EBxcsZ9ApvzErxbtX6AdbNSaTntXy15WJkBvwSuKxHsodKKExz4vetRHngeeFS6qxo9baY",
  "key20": "3mKv2pEY4BcQtrzfnTCAM41ap1Q5rycKn6zATHa7y34XrSYFaQdcUBHuZj4TWY6Ba2JV18zdYaUSLf6RVJtZ7zBy",
  "key21": "52kJXMX3ixtN3VbxRU7JbwJBPCLxfNFuX9mX1SZzA6TBV8FhoFmhXgqH8CGca9cGMnY29fSSBx3PezCjYLKxUWFs",
  "key22": "2G3ioTrRfUorYjpX9YUZA7GwKizYSn5HtNjib8b9akxBf4bsYPGLQDXHNFGN96Hy9bV7rLjwmoGG38b6TCQ8Jk8Z",
  "key23": "5wRrjV4RaNmc3eUXSJtsFias9vnkhq9cNrY5Cyr2jbWz1hPCUDBukBrFvB88ApBtD55RGhiALLknzrDPs9rMHMcP",
  "key24": "52b9RkVJdapYAkhJAwG4QkJou5eX9mwZ1khBAnbT4CGZxjnNZNygezAgjcbQEPibS1HsTqZoyoPtPRA47cszjAiq",
  "key25": "4iaeYkcSViddh23fdQNdraHWmBCkp6MkjC6xVK3PJqFgcYuhdMRDpd5gcQRZudcE95ARCFeEUjmzmocidbNdeLpj",
  "key26": "2WwVqqhXLZzzspbAtTWQPmxaZLGuDUoaS6FWsP5kAjDst4GjShhKCxHqjuzkECBJK5v8pwxN44qb9FUsAMYKh1ka",
  "key27": "5Q7GPQ4BrDNWqwdimvKpkgDUUyZLXGQK4AmjbN6hoqCwq5E1u4Z34WaFyJdGAG3bSWba8dFygKcfGQjea4ZRJcdf",
  "key28": "2ALdVoydsdj4RcHMKePL2mqFH3yTZT5e6UP2nXApJyzjQTwuwRmdXAf8dR5Mda2RYpeima7Rm8oKqqhBnLaDPaBA",
  "key29": "41Yu26Tou1w8cXv9fNUi9YbpbSrJoK2fprFc8tX97YTUc8jSfuRQS56PhjFJcUJqu2ZybMfJZNrGHQDHVBSSkA2R"
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
