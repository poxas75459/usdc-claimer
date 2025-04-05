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
    "5m9B6znMgqyM4CkUHHWqvAo56iRXnLxjL4BzxteAwAGNzrmM16MQPJL1nhR5Ft2LUWz3YWVAZRxrgGPSzHC5WEQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RceBJo6WhsTEV4cSrg9ogkk4w9seK4vPgUkaaZyoDEN68EunXjcqyesjXmjhtkQEjEb5sy4Sw9vKyvQwg3oyU2k",
  "key1": "2GpxS4trLizXMYqNEVczU9eYY24JXWteBa8rG2vkcbrF2JaUfnYadQzynUCJ5qkgdAfSKuAZ5FVmcZpiuAmPgrrq",
  "key2": "551w7KJVhVyoMj6SUxsmANhXWe3k8bFPAxFaVQU7pjZQP1NmzX9vENkztDasBAfrxYhNAen7Y9Fgc7YWARgW8heR",
  "key3": "486WuVva71L1R6Z1vk6j62fzPCySVB2dVCJ4aSK9DvSQqkW3jvzE1DwK5hDGuWfWLXBJoHXRtz81EkuwUQLB6osS",
  "key4": "BKCc78KZnfE1MEfi9CAJ9pM1M6YUht7pQPbTLe6gtcXk4csqnjyw5gW1esG2Jyt9xMYHSwWBLhnfoaHWpafUhRT",
  "key5": "54bBZbyRBN6ssLKvZvYG5C8d1Kinch2sFY19c2qstHhEg9guJMyYjeghnra9986qGkfQnFX5q8DashPzMDhhxPSV",
  "key6": "3F8Jcqd2hmmD3sx5zbhZYKy8wG6UfkyzdWLLWs42Lc9PtCry8TnGarcS8Pt752e5ndxrfdTTDA46pgAmMSSs11gE",
  "key7": "PkWmbBnFPVfDPjg5G6hDcTSfpFS1RHvpZ1W9p35DvfLCnVwRYadXkSDoc46WKe8M3TurPtaWjxXjpf9tfpMTFq5",
  "key8": "5cgyV1G4zLCCFxPgxXRg54kewvLedNaBr4XXFp2YJv8NMsyhWa5Cp3GzhTeTUbq1jcoqWSwUVN46gjzCyGEugRpN",
  "key9": "4PGV8RWgcPcrfnnhC6doVPNsy6RHBGzt4R6rqHexxYcSfETGFHr4GD9kQRyAnVoNagdTqKMcHevF8ZqYZCtwZv7A",
  "key10": "5WiziEKcRGaZbAKWzbfcyZFAo3mUYX3co1QSTKxCbGw1PLetriY2xWqvuRJHvthyCjwnMEDcpQer7pGVzh9N23Vd",
  "key11": "45dabKRr3RvvdrLnEpL1FUyDcZ56jdisGPxKsYWyo5fiSPW4C2TEp3HnqLfA5j2M2eP4DHTxHup2Y7ibQEQpY69w",
  "key12": "3iTn5ts5vDs6RCXAxXTf2XoXLo6dgYZD62TzcbMUZtnE3BSJEMm4FisTFpGE2mEJx5Wv9kjpMJDmXbEZ9XXwKT3D",
  "key13": "2B4cxGwhNabxDdmgUVZL8VHYb7eHWhuxw3QbyNpfSFDgXHs2m7ghjnNuGnWEZsSxKjRRpdARB6E62SSK4koqKMmA",
  "key14": "4hJCpRwQdvLVDSnrLzn33aiB7BzkjBmLxtDkDXF1nM73Y3xFo8rFeAeWmbKqX1sZmRzyQQcXzXr6wGNz4kBjcCaK",
  "key15": "3GDFyzRFwNAZHYZjkbJNcLLpfkUm9DPUo4ZB6EWfzDFoqggHrxp8DLYgghfw8Jzszz7VYsepDdtkKE8zgiNhkrbD",
  "key16": "4FT9X8iN5NGvqXU4xvim69GxVbxJcxmFexvnnfiXBGvwY3EBCYMsZHfUUkpu2wG6eB8H7aCUUzQmEVqhPsUhDJkc",
  "key17": "6M4UiyEwVxgMDH288M5rmBKcqgVpGDEi2vebWT8Bh78dbtMYA7Gso9P5h5F2LRfmDjmChiud1H262WSgq33HNoV",
  "key18": "3UNSjwjbJv2o1xpPPaggH1jp3dFuKf1MdT8vah6HeihWKnxHRTUHS9YYVGRLJhca58FH7Mdc4VwYy76xPbE2nF8R",
  "key19": "42LTWeYkhtqPWKPQiB59qaovjgEf9bC4GQCRWCgZRdAdmg8t6XHPEqDp6VsinzJMy9sLTXRuxiq2y8SKr9AxoE41",
  "key20": "3V5iSQAbYHLQnh9QDkdYBUx658uPbkUtwYj958MDFBLbUMj2bzp7SL7XfqhRrufSba4hgyx8NrhEiA5SWjE65u3x",
  "key21": "63Nix1qi6axFYc7B9M7qkcPZJeLZrdYdeSZXSQ6DhVvx4SKv2cNzUZtER4AmpnLTkt2CgU9993w6VVhUdB84xDWx",
  "key22": "2691rTngUUxgxT4AdYx6qLmGDF4bzkWdomDmdkJDx99jUiHhBEY13fLLWRwQy5uC3C211dUS3mhRoaVyTq264Zr8",
  "key23": "5vykRb1eLMY37z8rP327QpFSF6eT6RNRmsTjQT7zgKQ6hA3zBqy6jCwJ6cVSK8nieFjkxcq5nJJGg2jHd85L4HzY",
  "key24": "2YizCYFGyCifmNaeQoyAWkdQf4JpEgv2NZEViThzdapYGRxPjRBnn8reWyNbJziDn79oeNePcjGU8KQNNgQLMBAM",
  "key25": "5hPmzQTS1uWKCJXQjC6L4RsBviSnEpLiQCFGeyC1JUJL6naQTmYSKRNXrZhgCBofjypv9sCo63wWGoCYp5n1XkpC",
  "key26": "5Uwgf6phtMC6yi4hZRkWYKLQpqQ8M3FfzwhesrtZ5im2KmNsXKNUvguVnsemcUUJft9P1a7W9Z82qDtrCzHg7Xk2",
  "key27": "57zx2xxYJ7ruwJHL1H7ETtKLmS7YLjax9iNkgzkk2fZkUTqBZd3jDPZpQUJVMa5xFcbEg65YsCjeBu82XQjZi6ZL",
  "key28": "63ge9bouUjPDibcRbeVN8Hs5UvvsZBvsYxMK31asqZm9vKrB1eJyHwUQz4RC8G3e1ozTgqrbzLqBJKjUaViQpxmg",
  "key29": "648TjCmdz5bjsUZTJCh8mV7FnWiPUr6q43V48Rx7SntPqC7FX6YKjmtrLD9aNCAXPKwxxgTxs397svw345AzLMgi",
  "key30": "4gCUEr89662DF4pjindeSeGdgvZoaDkvXbbduhDKWrBwnZieAy6VbHPae4FbzZdoP4XTsUnDH26D6pHG6cB878r",
  "key31": "3tEdrjdo6mMKa936uHfzuch5ymuPfgdwYyegonGYwjULvRTfMkqWDNCcokix7KLncKThWeb4KPaSgULbxosrhjyJ",
  "key32": "3XqUnwsYuD96s5qouMGJAsBr3ZXxcJHxxXgifahiW8qX9wdBc1bhmeDdV3YcQRo643jvbmZkBckVK4LSyKbc3xBA",
  "key33": "5obWRan3zTWTehs6TtzZSgz6SKXjXtKFvaxRDaFbXtA4Y8Fo8SLzCyA1nUsL4mussrnprxU5W7ZS8qoE2RpT4mVt",
  "key34": "jKa2rsuXP6qhhpNv5XFkN6gMQDEG6RKdGH8EGm6B7mdQyP7cADy8NfpWqmXaoXTxu5zFSkaLbYZfdanxg52R3vm",
  "key35": "2RRw1Qjm8vgvsZnAsPnLtA9WENUHitSNFxFmZEAFrYGn46GuDmuYPZjXYRWNQXE6tv72Ldoiddr1zgXyrnHcj9D4",
  "key36": "3crtoRYoGBRWdUWNmmUrKexeCt4rRsWwdPjJHs6kp8KDkvNfvqm1ydq4zyiJ6pSqybCUWvSmcNz1diawBCFyDYXU",
  "key37": "5PEKeARV5JGpqwMiyPQhFkA9xgQc41coGKuF9Gx9bcNuKRMhNmUSuBJ84xAxEjAg8m7XPjZ7gRB1jVPwpWSgs8Ap",
  "key38": "46wBBAtG2WnPuGpifYduiR9oWJAJg5Duc1e3HvK8y5ueVeSRCwoxzQiYrFdz4gvYQPPSYTcN2fV9onswgkDfDowg",
  "key39": "2mawwDJauUjSdLqfbWJCyv2BNniVvShZf6z64nmFLCwKjy4AcnPm2q5YqhXfzNjsDq3AoSVCGgyZZCrj7ME9gUmg",
  "key40": "cxiF2puV7RQcxJ1mdC3VSE6ZVr3e7ELmUj9C22CtA8DBVsZoRbvGUkQ4opWB79NbPvt5KVJ3jn3G7E6yokr9UXa"
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
