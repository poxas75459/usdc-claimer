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
    "RH4LDR95fzGtgw2sNSmZBDGLCCjYYph57HhMDrfX9uhEwdbz9dhb2pgnUXTT8jWe1evCYGEXXhyFjKUpeM7qhPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28aNtyXTQwho1yYCV5zN51yKCU89zDwpnoJwGHrd6nBuz74Rxwmotat39a3tkwAZDtubTFHCRGYhmTLvGS1jTAV5",
  "key1": "2GPLqix6RbisQcJJjVg2f6j6NM35ABtmm8y3wzt3CX9AXQs6vhoi9aBJHtKRxhu48J2bBfFcnVUXUBE7PhzZmiyR",
  "key2": "5LRBvf8mgruWxLHdmTi2oKtTZMQp2dzMsA4AoGXxNDQK3CtAGxYSUKknuNHpi4iHQtMMG1gutCYc1qdKu4QoKKrK",
  "key3": "jo1yQVUnYToQUC3JV7jjqDbABxVqsq2rN4rmPPfArzHhjEFhG7NcfwJ5EqdQXhTDMTpGcSAUFPNFiJbjCfqaMe4",
  "key4": "2bZvAm3FmofTALMdLxWZ6BqUjxh7BUZtyK9DCir87nsHTd8KkCyANLxU9di7RSfn4up4SvoB7ntCwTAdPiLR7b93",
  "key5": "ggPGv73E2DW32DK7AzVfZSFxp5bY2d5PcuJrDUp1CFnKTzNkxonfEgAAzHUea1DHsd2R4mafFdiV1XAZ6SdKvM7",
  "key6": "4LqCrbxkJ3i84RyweL2HbV7pFQ8S6vbvkGbYJFDbvJHQ235RJkXJCiyV5zmduTsfPF3w67iZybRq5KTV5Ya3KEyT",
  "key7": "gPV95f9PwdZm9UAx43Uab7by5j3tGZibvdEgPhjyFKXM7ze3wLF8H4s1kM4mypF3LfQkG5XKeWCeFNKjSbmLNFB",
  "key8": "62FoYNyy9AZs9BvrqrunESPM9hMns6UZNNEaDWcxz5fWGaan8fY4gXvfHGAYybw8ofPVyhUS8QnKD3Ad7FZiutAn",
  "key9": "cD9tFoXpX68U6c6PMmrokpgwFUr8kwCSuf3QaqywUKvYCzFAZEtn85QGG9Mwc9S5kZKVPrLGEAuwR5vHJocnBKD",
  "key10": "5q5KBJdXxAptQGNsvatKwftvQeng1t3jwM7v9s8LwjXnHSCfY3tN7YZFmrgAqXGbJbGy5hAW743HE7EZAic3cY4d",
  "key11": "4idJBqyHy5Xjuzz3P2ZcSnS63cPj35oLAFJV4aj2KQFqLquQ9tnjYJm1m7rtBpd1fN2qSk3LuPuBoj9JLLYYWZYg",
  "key12": "kWKWomUKJofY4Bb6Bh3vfyoceZJn3DRRE7KH5yMkUBQHkrYYsEmSPybqNdEKn29kcYY9Lhd2yjTeW2kApmLHq5J",
  "key13": "4hqgv2kcram2bq53gxGsAF4Y7uvESiBHoy764TR3ZgTUzZT9EsnhJAz24jwNXHiza3rAszhCbzib1YHF4MZ9Quk1",
  "key14": "3ja8CUAzkYnef1VuQQeXAL7f5s3NSGfYTBNusynMbog1QXPjqrfPuiLJVfqPoHyuzw6xkgopf18HRuvMJBG2eFn8",
  "key15": "iimMY7BVt5b7Pb3a598e1Wgj5G2c4K7yM4eXi8FWieKqG6CFYtivd8iwzEhJVUssN2VALjLPGJop9kB7QXmoahs",
  "key16": "3T71gvzGxmdVE4myPeMZutqmevYChTUbyND7Lejzkn7hQgZzNHNFrh5kP7XQXViwD28dCZq5c6B5fAZjdBLB7bQK",
  "key17": "3QbtKbJ4GWsjbYMnEfJ9dAVByVpYTYwkqV3GFpuGx3HD5XMA1NBgxRCq3pwrohCpyabBfk79Np9Qwk5gHRLtHfEC",
  "key18": "2Auq6ksBcVW5yPQ8eJifPYPBz4v2wGHXkYWtBCbiTvWDjhYD1FbBPm6vgQjS7TdKNHQEVXhR2uiZXFfWShEcbnEY",
  "key19": "4VDkJ2yB3fgDNAoEtnL8UVuNsudEidSJtZi4ZmvmcXRgunqG8HjdvT9daKPwGp6GydC4DoP32wijnoFKQa1xbXnm",
  "key20": "5teWvTX73WVfN8eu9oKdf5VLkoACvxMLQHTbnDp2XNfPcBLTYihUPVFDLuBvQDxEFRG8AjXPfCyGQwSRY4yauezf",
  "key21": "2kMhrG1XZmSYrL5KmKXW5RaHmrs6UwiyUMMAZmoBPiPFuvUksfpR3X5gEFNLDQZj4dGdsKfTXc9Z7hYYZdmhmQsh",
  "key22": "2ivAYACVeZ3panEwGb9sCSNrasJ9rGZrCqWPAsUVJhW2qTRLPDCWfvzeSGXu8LgBugEBu8Mu3KhUcfpQsJDwF8FJ",
  "key23": "4kcnxoxTm77k2zWiLwQR4KWKYn92mzWN64AzyDxxNMwNn9EPvHzCMvUvKhWkZadDncH8TgmpQnoKGSXjZ7X8N8jX",
  "key24": "3fyCvwPKnN1Vd4UpkY1smEven1PkgSi9bN45Bvg6QBMk7MpgXDJzKi4r4Yz65ts3fDcjUnh1USunoo5Sb3MxjgdM",
  "key25": "3LmXMiVsq8P44f3W66oXFqVv9Wm1aU7mocdREBekexWY7FXeNX6Jd82GULyJxGQfsf7mJrMF6o3F1AK7mUxfngcG",
  "key26": "2urBxGwwht6GdDazHYeQ1knGqd3Zy6QDsSNt4vAYqEEHbtfGZEFj7ybbUcPDvVhrj9hR6yjXV3nVPdkgwbqPkHY1",
  "key27": "2Ezk33awHH5z6hkg1vXozNuAywpNLxexR3THdq4mX3XRSRXSRbzAEptTWW9NqDHEZEASgCvbpYafTtoZ73tEyvcu"
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
