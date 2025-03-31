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
    "4iQKbGnUnjvERMQosGm1BpgoFcCxwcoFHXnbZUW78CeVUUKvHqf36D59vajkWS6FMkVYmN4MCorB8xZ5PZBxikKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKuZ5Lfk6NxK8aHQ1Ma6nYbKqfEuqBY7N86fxHU44dVKZLTJjo76NUWUBo7XYoMwDmQ3WFYqmA7dwhg6c3mfZhT",
  "key1": "5uDThBeD96H2LasFwHZWxaFeUr9XFkwR1DztpTY1KdHjskW3ZD3Ko5qhRWFdY5J7CNk1dovxvjxGKmW6HZKntrWa",
  "key2": "3nsgkQmRFFrLEGkxYHm4VsnxBn3CirrpASBg9PbkP4XdS2GK9jAbcfVWiTRwTYneYztLyE8sbgBSZR5QRUcphEaf",
  "key3": "4c5z7mxA2XbqEYDSCbe4i78mHizPtMyutAGCLjfThvA9bRexGiZUiLymyjhyRJBswQp5L2NJshfKWyRGMMjVS6qy",
  "key4": "1Fe7dK3cAJLB5Vqx82FWjqyzzoTw2zUimpQgrhiwprKtBpU225JzHegPvq1xE1U2wtHDntTUAuRrC1JkBu2MMva",
  "key5": "HXKpnNSkA3Nxye9eUWWZCbPXZvM9kgub88rnyNtCwNDAo6C3Vxt22t7BMzKtGpLZD6DWzYpMTPKSqaEHdapXR5M",
  "key6": "2MRaLwthuza9Gb4uwhE5NUvq7nHMpyJN1TL6gzsdPDVkyj5NAmSD9FmP44cCjAhj71iiD88ccgvoz96YoGGghnwh",
  "key7": "AVjnKJnaMJoGamFpscDbdCZsXBk4XgLfcf6XzSUjVSumRi22iEegGaztor7FTXd5EhT1kiGWvxVZs3DAn7syXeJ",
  "key8": "5yAB1xs7CrE6tzm16y3fo37ewyd4fQtcfHwUuWZdvkgYQNf3b82qRhYoc842FCDD4SZWXwTWwUQpLRqstCgSXUyR",
  "key9": "3S2ToXD5RYuDaguNcPLGXT4haFb8okgv8Jj2MASLThPdc91yt1Y43jkKVFgzFjkSh9wmqnuFjyLWWoXp3GcyvKMt",
  "key10": "3FNUxpBohU61Qa9x34oSkvvMvh6JdsE5MyRWZMHgE3FrBtEzzTfKhEY9a3NS9kQWHWoPwFd2A2GpEP3rXb2eADJb",
  "key11": "HveFMrwbxGy5Hw4macXw5Pge1V5wXFujWb43KjDLovxeq3zwY8A3G6cDbMQpieXjVRKYz3UGSqMwnazSKjg2WEF",
  "key12": "e2ixAnqQDXhoo9NBhcd8ZHeDsYj24UFXG8QZEe18JqVZmsZCS7pPsUAtw7hPBg3GYNQcWWzU7X4sVeNxacgE2Tt",
  "key13": "3SPgr9p922SrSdf65VgMGBggJ8tkqUYgnKvt9FQVMsDsETVNvi6LRYDnWgDqLJJy2Bf5QCcaWGNZBnZ4TjSMdnMR",
  "key14": "5WZPtP1z62knYctVvHbibjoPg573zpW4PZUjLD5BjYKHxfmSYJdUQ9f9T1vM1EmDGawRw7ofBebVVgQZdQqjsV8u",
  "key15": "2SgKXE29kUy3Zwux2EhDMFrheAJndJdv9BQRHh4zvTvTdgZLcn2CBceuETwpWA22Wm4MZCdmiNssBuNuuySZq6zf",
  "key16": "2os8LxuQBW4h35xPhrnb4ndd1v4c39c47e45PhVhpH9UGArSUkiz5jPWHgAWNTHqjxkapSnhxpTEBJ9WbZUW1gwe",
  "key17": "3jmPmXR4ut6NMrQ8XrgbmWd67z37Kd6v1kbkWVjpDQwKJNLVgH3PhZNSJEcNhaqEn4D2MuytShxGrVFKgSm2civR",
  "key18": "3KkjnqT5MTZR1MFC8Ex9hCNaqVp21gLDa3y6851wK26uYdZfTK7GrrAw6dM6KG6ns92iSFJj49nnkBiyFPL5HYph",
  "key19": "JdJrUt3yZjLASjZmewQgxVdmJZNVtdVKQALYBJvecSVjv91e8gpD7EyPdGF28fE62Wnk7aH7vjHQ4CBZbdQWDXC",
  "key20": "2raDiB9uYR1rfwBpXiK6cwxCR4paT5PdXnRyUgoK7oonvgtbGK9zm4vNiDHToRhb1wumpc23ALgiLpq9WQANG5qr",
  "key21": "3rZVeS1o7VMtscp27KCXRokpLXnpBp8w6CVTv9twmFPLWUACi7F7iamtEN9qSAbL4zSkw6auQr3yeoAmhFM5q2ig",
  "key22": "yQAk94um2iWg9Qq4Y4jLC9yLb8bhYwbvu85zSKP4pZoyDJpSHt3Cb8UbQNgsmsLTiQWyxhdU8a2LQu26S1X7dxU",
  "key23": "62Sy7aj2jCwzqYWwZUbzAKaNa56N1Cs2bpGQ1aqDxNBKA2ShkqoA39g4jmKzPBt5wjgnV84iFoVxpMck4e2hJEHT",
  "key24": "sc3aSc5YYY5oPWbT4iH8ccksPKDFXQLwagWCHVtjJ5TXn6X13K4964wfpY7bJ9BVWMqrhUZkF7PRVPR1ToG2R8K",
  "key25": "51MTY157XnP14HQKRY8zHoPytUTaUGLaK2sgSCTnk866dojcZv2HmdLKLogmtMb4tHjWLbzW8eQfgFgdKzYnLCeN"
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
