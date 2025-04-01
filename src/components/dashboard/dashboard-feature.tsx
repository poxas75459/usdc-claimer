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
    "21NcrjzwaB5EJhWFv3BgHnHy3Q9LsZUDVPJuNMBsVXZsYdvBuNxVXwzEpX5mr8PAQq2hMGodKHc2bkcFnhez1DR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Vp3KhATvrNqAokaVWA3x5QcWVkn8YpU8XMBtFnoDiiQqfq1r2XDg2UeumtnbokJs2A6veP884mc4jCJwZp7bFx",
  "key1": "575T34hrgN1Lxz8dc94oKpwongpm7o1y1wNs1vyVNQXB7appmn8uirFNmavvdx7oSPJVJA2DaFH5wNzoWx8wog7S",
  "key2": "2sWNFo9ERdQK3jCnAt67uxpD2kMahJkWUvyyBWwfFKvetBetvGyu89ntCLc2PS2jbWgqEit7ScUbyqWokjtLGK1G",
  "key3": "5NNPmjcfqx73F5VjdPagjJiCz2saV5G2FAuNEoM4rt6aqxC2WjvvEmuLmQy9XfxfrkkBtPMj4wYdjydcwaBRp9Z4",
  "key4": "5s4ehWfUbxZRzd6vxCeGPB33ckMhebScYCKiVe1fkZA7VNDFjgQeAyBK9CTPCCA8HkY7rEfqqpgM6MxMiqb4FHqu",
  "key5": "DtcepGuxwmqKzbmrBAc5xWAhWkPAfobHTcUAHYNSVWEkXZafPyn5JDf7Nr7zMkYfNut9nqNmtet65wf12LfuFdT",
  "key6": "bEASDL1ustex7DNAWsaKpJAXAs627FZb8hUwxuoj59LDXqjSrgefCzcPgZ8kxeziRgw4ikeS1kc4DLRkQCUHPg1",
  "key7": "2e8ahwthdTTvqYAPWbr5zqGHCcfat8Bt4zGt5uQuw1tWbhRJ3Hd1NftN4MNeiDhoZgCAbExnBMYDvBkQ7PahRngX",
  "key8": "4LM2rVDCb5EUZs9yJEoaVTojbvU9V4fDjBUeNYmapptcPJQjDRGTz93MpKfiDUkg87XXSnRaHgS9PZJBCTLwp6XQ",
  "key9": "U31BvzW5xNtuXiZZXQyT1fUrJc2VWjmwBpW8xqxezgHZ439gPBAAuk9WWWUefzfsUkYmp1u5aoCLt2BhfojBrN2",
  "key10": "4SZoz4uPfSaX7DYD79CFV7N1ZWCP3Xu1NuZhQra11dsmojvHdLN5kQk9HVxe5arFpoDvSfb24KMo15pK9h8nJ4bs",
  "key11": "bXQhhZ5jrcxbfqF2BeyEKBmWvQoFXUZ6m8Ua5QmBrqmeHPkQp6guCBGLZ2Y1H8grc61KVmQ6JnvgeXz4ZWAJPMX",
  "key12": "2Hu9kN7CqSy5DkRBSTvPQr1YDiy4bkySSc8ZevrEBrGLyGKiXzTfafAdRQz9sj812F9hpdEnwxrf5vhYr7DHTTUH",
  "key13": "51WMkT9MFcJbHHUvbyQKxbJd3e7BKVCPY9Bs6RcgwEvFe9eGG6A7QJJUKVSiYSGipGMqpJKpNTBCGeKGRS5iLZKk",
  "key14": "2kGZXaXmZYstawYWjAkH27YoNzqfXZpdrfZeNJznHYH64FBv6YuDjGu4TWDttn7B24itwuCBrWLAP55Spqn91s9S",
  "key15": "3dNDgQDZxJ7PGpSrNmEYLS9B7tkuegDfXptVpGpUtQ1YGEz8VYZpTcaqy53LVpFjsrs6RqQyD8qvJHMxceADSSHF",
  "key16": "54Cpa6JNDQWfz4qmeRiUJ8rtcjfB95QqFEZprcTQaJfPPdJHDi8BiQ7L6ANJq6mab1YjT1ZyH46kNRJ5mGxgCcZe",
  "key17": "5RYp6VweNPuaA8R4vEhn9UqeD3eLepn6BbnohEEg9w6VYiUQZUPJUd2HLBk9t7j4yk73FrRnY63sB4ojbKv8HJ43",
  "key18": "4L9nwBVPomi2GVwxbX6nZbXAmCaSQudSK6Muiqcdz4eyydpxRD5xN3GkyQkyL1Nx4vNvBiCDm5ML5eMvy1kuNpeS",
  "key19": "4UhMPHH4YgKiyaJR3XjV4MqokntPUP5JHyE6aE9wntB3STWDBsVXTfpzC9QdoUa7aLnmWPdajy9DQp8zafNvi3QB",
  "key20": "4j54Tb17Mz3QLJq8F3wokcSgXiNTyZB4faUMDSRiHDx3oU5EboHAv1mMfkSbW6yGztk69Lb1eyeNsiXFcyFCVM3k",
  "key21": "2QeFfLDvYSErJvhnUPdHgWX2zHqZgXMp7mLYStWcxAKa1jJy6sgBfXfBz3PT2MJCBRkUtkEG3AfFoV5EeEKMsYsD",
  "key22": "4mHBPmSwjqgGRkB4QUE74VvmC9QE7uQxRqMzawofr9no4s7RhsAySyf6YfUffhorU36wEkpxuyseVk9gifWZbWJY",
  "key23": "61bkM5sedm2u7ALsH2doEr6nSCXcunjQhiRVvbpuJNg5W75V6VkVFZsKtkEAD1JkbpSafv3u6oSV8B6ZsXrBsJg6",
  "key24": "2nGd3fdeZfMwHyMwpBkpzChCUJFeB32HvjKFNh5EPsMzwAGQUZQVApHKzA7wK6G3mmYjhEH9rK4j6WF9dmZgWUuP",
  "key25": "61JJ5SJnEuap5xdEktBXTVYPHhDdVfiwMEwE46yBLSe9L1YAe6Ros8Gx5k8dv948L2ybd43yzwVL5svdV9j9DUYn"
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
