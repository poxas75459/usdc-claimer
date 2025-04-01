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
    "36AcHn83cENNT5nw3PSX52gAXGc6VBaawQcYEXZy8cHDPuZ6v9tkfqV3kdqDD2W4xYgqFoWk3bTz5yHhqfB2a4r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FysyeaeoJNrUHZhGKBMQmP7da8w58na42ivCC8sncjRzYfyGeJgZpFBxXzuqy6BJVhFGNcrL7Ddh1ZMAY2m3v4w",
  "key1": "48j2pt5kqrwDhcnTLuZKJRGz2HB6Zk2qqN5iS8jzNwiyr8EEJvaG7ppXKMygM4rcHHU59LRVJzNH8XGb8gmdwvaQ",
  "key2": "3qZmrwrbweEnCE9ZrzrwtVnRUyrov2EcUmegXrW9ExNnvFAMQHDQXsssHcsTWrHCZerpFKsXVQvW2P9rM9jYfhwM",
  "key3": "Zph3nPWWy871rXDHSNRzRZwzCfv2wirDxqpckU8NZxBMQgpZUet4w4vDjQybjuBbPx4nqeSXc2kSMGU2nZsWaux",
  "key4": "3PWyzFymJntF3fvXWMJ9dokr2127TEh16ifnt9JFx1hFG7fWSKJd7cAXUFp4iaaJKs7NiehtaetUXPrp1BWY5Uqf",
  "key5": "66Te5dLRi8EzSZZhXJQe1ZrmKx6V1SMu7B9yHz8KNg6Qy4hmPa9CHSk97LHd1oujHqXD5k988v36Nh5QTVZjAFu1",
  "key6": "3tb4dwnvNbvp84KNDM2rDBr2ra4dNXSL9QHUxst8jkC1K5j7fVHnTqTia1RWPGqvzT8xW6qPQR4XYh8ywvaenhL8",
  "key7": "4ibzhp5QvgR8RYVPZh2wQiZZa96dQQeTfoDvDbRhoK5UDp1jcUxW3j1jkepX2iR2G84FYUxyCbSWDztU6uVNdknY",
  "key8": "4rJ6WMsERyPBE9hRSHtDQG17kXBdir6EFs5H4R8AzVGcySLmEuTE5XZPxWPiziNFhjmmzYssYzFfuWRCYkNwKD17",
  "key9": "3BYZmK5E4vUuLsdFZ7F5bTotLjSGoRG9mpDgmxZgm3vQZJv5gQpUTyiDuwTJFR67E6QhxTvzDcJzdrcsvcfpVgVc",
  "key10": "4CM7XJNQwobr4iTaYKnBApPwnjUYKSnd65MWiHe7tUxNLc93J6vg7xz8VekgNzjcigxZaVMtdty8p5JvqW9QBSPQ",
  "key11": "5EwZuxXgiQkVbbMUEf84nAj8DLLKEgAXEPj5ARAj8YF9UdNbJT9gKCGRBKqT1NwsmRy2AznAWaWaNruFpU1PVVSK",
  "key12": "516TbaHAyA64T4KrJKVqFbtbZLmFR5ja1mMcxkdVgfYtDNwLP7trrfon9aV8ndVT9AhkdCrHkT2n1LSQ6wcBzvbH",
  "key13": "3f9r2SZwjpEtPNkYBzW8uVntuZQpvCREys9DTnJFrHuaRy1LW1nN4T2HqKR8L2i6Ymsjx4RZUZZNL6oYPXU4Zqmr",
  "key14": "23buNSmiq8zpeDFoocJVUfs84TA9cvwiu3mPe9Qck1MjyzmNbrj5qmvn1Bs8AWwtykf594tQUt6j7NKxkaEmjNB1",
  "key15": "5G2iVijdwACTnrL2QNSPgLYEAhGs28itqFx2X5RuMLZiL1stPaFWeJzqeqgMaHtQWbMmMeFZfcuM24chJyrCzLwq",
  "key16": "3bWEmoPNMJbXJvZVavepE6jjrcPnadu8hwxCCtKVSj9wqNHs3Ykk4BD2VhDxap3bK1PkEKqgiUrYio4DkW94Yy8G",
  "key17": "4y5SFpfK8R5rsWt8sbQ4xDJ6JB98KA4SmTb5aMgLCQ5agBF4Pa6B2uEpof14ZfP9X3Y8ECDznLRtvmgmvaTZ3uuQ",
  "key18": "5C3FMFkRMH1unwxsCH4tqgeFJLhdQE68B4iRrmoP9GFYDmgTS35FZgzh5u8jv8jZi5nmPkVe3FqfcCzf8sb9YQuv",
  "key19": "5H5LGvAX4Crfvg71JmroNbJSJ7LviuwMqxq1SwKKGNeaG8PsDVobHU27qSdZvX2A6Uo2xcBeHyS9XgFf795P9f49",
  "key20": "2U4ZBdTwQKdn7XWYKN7sYabP6YVt3Zme4LjYDGj9xV8UxZbNbi2GJJD4YFJ6fYPbocLn4gvsUTL2GDqzB4yBUu9v",
  "key21": "5GwHGhuJKDkdG47cHXbWrEMp43af6XDoCwnNuqVzohjUWqWwFy5i1v18zue6KHN5YdeEQwnpgg1nRcAyawR7r2C7",
  "key22": "58nSsrBFZTZdow5fHHCubgD6JsReBVmHzFgyXqmQHD3d51ojeLys2QLRCdKmBdeNFniN2k5bpv38SdrbzB6eawvz",
  "key23": "2mqKopHPCb4sJDudKwxZ7hn5EGNzqLWcxpATarKtoxW1KJ56A4geCvLvf31wf4ZNafFzNUp9Xs5EWG5Ghw2tpasw",
  "key24": "2BE7vAcJmDG9itJV9Bch36dxk147BLVNsmHgFxoTS9gNDGmTZPtmNQpBqrEQDa8cSz4QKjY2svu7zHBZ938p8ppP",
  "key25": "2mMNCzFmsv4snPQfVjQ4xN8BcPu39mYzk5BjAzyNevEorvJR6HimpQ3TRvUutiPrR7H4dqAEZmv4czVUexGtRCMN",
  "key26": "2QVbHCj6o8JpY3p6CwSLAYrjZPHN5gpTHh694ncGvSh5AnyhCFuYw336iC3zAPQFeuuNXScqkrFvRK8vXJUVfnXi",
  "key27": "4d3RtbPws8EN36bxRhPeQxnuQKVpQtr5NSar9WdArwavajLk2YUbqjU2nLeUDAryJUsqgg23uj3tAKwz58RxJbDh",
  "key28": "21TQG14VFeZjgwTz6D1hUe2ZaEFtrv4uu3RToshosXNRaTmdxm2vPDq2WeWPrn6DGUPnMrCJmdnUb8QbBdakwroB",
  "key29": "5dqZcBWCAwYkofN2joNtbWJLDY3tb2NSqAkbChKoNW1zPcvKHJdqv5inaCKWxiNNunnkaDsogEFa4akvMm35rYdx"
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
