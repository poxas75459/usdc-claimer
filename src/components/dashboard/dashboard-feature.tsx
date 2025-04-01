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
    "3h7LoYx3R813PkFWHfksq2ybgKtWejpGEhRP38xh88uc4CuV93kmKXaAbPaiySMHdKmgejE8z45BWxqRwUWijMdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29iVcZxdrPrjPatDqLmwFt8Jv932AV84gLrxYvu68ddyWghRwEh5kGUctuXFXZTYs2tcG5DyHfmvGgH5TWHiGYbN",
  "key1": "4uJkeUgBqaA9xUbbosCuH7rcU4ygxVdjQFAmYNQ5B3iWA3qG7DDbQk1mUNA4t9cTxKyHqFpwKnFPXkuPa4bX5B6K",
  "key2": "3hENpru3t4GFGybCCroowni4ZbZVZv2WLPUSn8o9fyZZaBBSUvkVKFyqpt47CkZxmcuSjxznWfH9Jk8C5pHPs1kp",
  "key3": "3fj1eVpLtxFdjHsHRN2YrVAfSeKSzc2y7iFVq3c9m7yGfZW2ASvjSU5rnFDyWPFiB57ysnbX1kjNonLNEVNRRceF",
  "key4": "jDnpFux2FpVQ6Pd7xsCTgj9XZ57AiBjkAGETvPo5rh2ZcxJizwBqMKdxxesmPfbMJtHERcKbG8mKPpT29Qna2cW",
  "key5": "PacsrMkirajp1Xtds7oS9bqP2GW6CBZvDC4S5rtiQo4KEPo8Fmt9ekn55AfBNjaYaoW7653snXKQYftFrBvJqGT",
  "key6": "2amNrhi9bzQ2HZTDKeFdE97r9a2yiod9C6iJ9gynX3aNw4EXLAfLXuyTgygn4YQXsGShmT5SxmzjkLeF5THDp2KH",
  "key7": "cnjCH6uL48RNDBkGsfFh9tcbTQdDcgkExhGctG2noDYPeYsGvzb9Gvkv4XQconYfgCCD3hx9PCMRp68JpHnRr5a",
  "key8": "2yq9Yt3c2ZnrNhp9WxnqxW3HseGU3QEjpve8t9QJgK2HLkc8Z9o3CyGmPtqvDS7uzngbWfhddZW29V73axqPNhf3",
  "key9": "56bp8tzqK7jiYJtGbgYy6bUivn9jfgELKY4e2STcc4o2pg68WstnsPVsh5wNmFerrDjKfftcAvq4aoG9XG7dSHiU",
  "key10": "5YFozuuF4HuuBE8ufebKgzPNGjhjW1P6xHfAASv4qhi1QDYWgv4Jh6wN826HGjYHZq6PeVWBD1waP7WXaBnsGwDa",
  "key11": "3NGSRggNp4JdfMwzjBYUwMBA1vKuWayFfo4cuuva2RMPyogqdve9wwmDnxBNiboPaeCB3vXZ1Lf6CLW2cWD77Bmf",
  "key12": "3UFchxAFWbdyJUgsZHVFgP7RJyTNi4xabdDoXw4SyBJxJBc8Wqe9v2eA5PbVhhhaVNMDSVpSxseWPdyKGDvxt2eE",
  "key13": "4HTPGw7cc6jnxX33Td8NvidD7E3Pp1BEN7knw1j5hQ7BLn5VJr7t4i39e2Wpke2QKFbE5D5LDBxrvv3Mp8db2NfF",
  "key14": "4iFf7Ws6nkbksEMEK8GFkZEiwxXotFvU6p9VXMVwnaoe53PHm2GLbaFps3j1eaWB6fu5qt8Qz2kZfdDFzZnhUEMn",
  "key15": "3mpSr8n93bpCgNp7M5CtgEPrxT5JUWukYj1yxL4rBGXgiqbpzr7EefEVUyVW1NwBHnzjyoEZobbVDdHuThm5gvhH",
  "key16": "4W3qRs5kb6eahQjujdMopTFdRVX628aB5SohLHap5FrVk94U5qD5JJv59Qw4ibPz4vV71PgtrtE2aTE7GfRzU9mQ",
  "key17": "65mqZs5jRq7KUUAahgsbqcz1t7gpwXHMkf8cjkf1VALUhmi3WbYHuSkBmZzzXSDDePamvH9tp5ZCVohstZD9N7d7",
  "key18": "EN1y6ovPQXPArxTSmABzpuC368U9WYQCBcn8itKh2W2pc4JfZ9MG3Qw5wRhwvjbqbakw8xvMYXs2AGvceGENjFN",
  "key19": "3QziSggfucfNBh4X9W6c8r739foBZAFuN3uJerMyZdXSkDxDXvvPX3D1zkm38Smswe4jpvX6j9LTbX4baD5fdB3J",
  "key20": "2wMGp17d4FQbt4eBXXaynVaaE7gCjLuL6kTiA11T8Xd9vv1ebvgFNXHYs5t1x5s676zBsZ1sVeqyQvZJLMoaaNr1",
  "key21": "4H9ctv3Mc79HPvzzC3KEFoDWBZU7uZQG9n8mQGPbTKumyQQ7XVPybbvfz7H3ZczXxCoCJdAga7kF6QhFhchXNu5U",
  "key22": "3YvDbNqAqPhGxtSd1ia97j4UvJHbnDG3oKVLg2ZsD9vkmWpTB5MiJVjG2tEe3thfumj7LDXjrEiLf3srY32hB1xN",
  "key23": "5mP8bY5fZhrLTc8PiUsRfDtUQy5n7xkW19XZjTLeH1ARyZfoXtaf2RHPMsQ1gU6qfPmq3qjB44tLjqADAGorUDxH",
  "key24": "a69iqfBGD3rRgsFBoDkyvdTnWCrfHKzyhRLeQCJYqHNB2WJjjmCfYsXUvko5Bj6fVpYteA399masBKxCe2Ucqg7",
  "key25": "48X7YK8K4Q8W8joPqgkT7WR7zT6yGxsxG1UaT8AiTK31LzzsRjRpMBenweSTW8Mq1Fp8cqSMhWhnP9R18w8DmXzY",
  "key26": "4xWLdZxr918bt51BfCR6q1Tj5QF4YmgAxR82qHZT5pTCAFnfUonWezDpz1RhdegzG78x4vbjAj8eWPprLiWhELVF",
  "key27": "2Aji9dqsPWtQAEV9eKJC529bhgQewDUMzrZSP542sBctSjtrnSzL42MWJTdriwQ5ovv5t9iMN5szzVeH4odvvANF",
  "key28": "62sFi9YmZYa3qtecxF16oiQ6vvgPZejBfmB39zy9nnrfh6VuTcA4oDNgktxafhG7FrgrMtCfEjzfGRsmXQg65DAJ",
  "key29": "5N7Ns2rsEyNZcoSNcTcS9KAPkcD1Xh2Fj3qfuamhf9QbzXEGL8zcLeDDGjQC6W3Tr4D6xAiprpPVdVqiEuDcR6dk",
  "key30": "3TiyoXQcWNKwMwXn5Su2nWMgnMtH9k5ApAgqYeTxLFhyn4xHBrWURVtnK9rVdhgSgD1rsotpdj9Fo7XAkhSMsxDX",
  "key31": "5dnxeas9oiDFecVUB4S58S3cPxnRste48Zt8vhJmfmxTV6A4cd9gBB1r6d5uM3azBuR5U2GbDt2FGtJcKJ2ShECe",
  "key32": "2vLFVZ7Euh1AyMPKGhpasVHhHKXjZHK5Lc4GLrnpDUoPcs7DU173AVMxt4FuxB4cYFf7WyWKCYG6JewnznW8QmwF",
  "key33": "2JtBQaRMJdVfPvaFg36H3M9JAURoPj7cqKRMCxaEaKn26HWmk1rHsg4e3RhqMjCJvhTUGjUZDmNv7oWE8qgBFfyk",
  "key34": "3TVesEUdMh1veiarDboL7WgR4RfEa8pnKkQWx1PLniRQNHf3yW7thd8Am1oaZwXdhSGJAzxW484ZSqoeYoUnaMqp",
  "key35": "HiiNxtHoEV6STGfKVNUHy6CCQ1BSjB1SUFewT1EqVftQh2k9H2MmmhoCHn2dEwJeDZCrF5WX6yo9uiRrcWQZavq",
  "key36": "2HGzqBQ7aU2tAospDze16vWDGK8vUprULp7uR31wAJF7p1eGBCRWRJZRE74vWX9YKiHhhAGN7hHetDwtwZFNRe4z",
  "key37": "4bJ199jm6bPNyDt196e2KtpsJc3d7WimDoX3yNECe31EExxzU7zvAvJjSj9DEQhdRhqTi5aAExJNqziwNQEMHrTE",
  "key38": "4piZky2rGTEAyNHzJPQeQU7wcgdtreMBbiqt9CZD9JskR1RmPHe5xqGRMhaGmRiT3etoJ3eMqqhebExUxqfWcSEA"
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
