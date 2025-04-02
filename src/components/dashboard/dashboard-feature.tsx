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
    "4HkbtYYMMy4PD3hFmGTzC4TqLZnDh5eM2HS4fmv9X6AWsmMf45TU6vgdcMdnjWKqLvVaEY7Se1axmJFEd87YHaZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJSPxz6oKzcxGadwUsmHr4KP8tk1DjLLy4FNmKwqrQBy4vQUnMndSytUshkAnqQwrjcmoCimn2WXNJfnAjpdkSt",
  "key1": "59wjdW3WoBy7nxERHosicgWjMQCtBrTSPtc1bzji2h6frq6DQQ6i73KBwH9rCwfN3ncUBDi96AvA5k5K2pbJnwEz",
  "key2": "2DZEoJW4Yph6SoWFVasJyveePCwmyBRSKLEFp8iJGriMsX3zZLpvSYfF9F9XwpEfC2x9et4pmmXU2JeowG6NruNX",
  "key3": "4QNcmbaBunWBbRNkuvJBoZvN4pym1gsFKXU3tZa8dFNsqVrtuQdmcBy9RmnmPU5bzdqGFwzCjFh19fyCTRQBTASV",
  "key4": "2pWTCVgdQeSd43nSbMf2Brf4HRFhBxTbFoX59DhMM21eCCRt5Fps35nj6E1ZuJ1VDB4G9NYx2XVsZs5rCdWkuFT5",
  "key5": "5Wj5e8s3ftYvGE8hJiKYmFQybiAEvyK9MCVrBGrxP5x1bBJeCGLncNdbG5sC62xHkTjnMCzgAUU5aevsxik14WpR",
  "key6": "d7X747PS11vaLSpTD1929ogH1q9qokMZGj9Unsw8xZhxfAYzbenweSf13qdUronq1moJ2VLwvFgVjP2XgJx7Y4K",
  "key7": "5hQVTpkhHrtK7rHuy6xP8TRUYb424Carpbg6ns8ij3XyhhuGtZbx7BmsBqs4msUa9ecPk26c4fSydu2DkT3LXhbt",
  "key8": "4t3eZUwJ2PnNdZVDQdaKKvgyPA5kjLjXvU6QJaVXBiPKX5J1VjHGbDpL2XY9gTuZBh9Jr1BtB2ZMd3xWePSGX5Mo",
  "key9": "2cqmFGvkjbPDnmYMbT6icETfiZHQQNk7EqeGU7WrwEfF3HyA5nu3WaJEkcNLZeCsLEkXQcXkg1P7Qrjx9JGZwp7c",
  "key10": "2RFKMNWaNSzqVdBWkV37TvXmxJonRL9Grnunf9R4e767ZvEXcmfv73FY6tCvKwBqCZUrEKYzPxw8ciWK7LBRz5Bb",
  "key11": "4bieDQ9jspzoifhjJbmEmUntmC6RmLkHDpDBc4RACx9dGyZ39P1mVyMVSYwH4SaTiE1UBeJv6RY3woCu9h7HWM58",
  "key12": "daNk4dqA5G2p4gnqwUrd7kfcXiK8Ju2T2VisuM7Bgef2XZzjT4fA8Wdg6aCfDXEotucBg1JWmQnZJDvmZTCm58z",
  "key13": "5cd2St1VwgzrgzGLv24p5yeZVpWK5TfhWcitCuFmrqu7pDEpnhbBjBASYuLsTHw8VqRF91U2FxHp4LyadjWRpSSB",
  "key14": "4JT7Dksd9NJPj7ZRKaNbC9bzFTm1z9PagAxVkiUVdMLazYx2vrpaA2HunJn7KJDT9etLGvmffoNqFdk23MTSC3bv",
  "key15": "8vdQbJWXFG2GNWMcFuWt9qQHpnUuYr4GmjWZtxFExqAJy5YxxK9U9SV5d1NegoW2yA78fT9JApUqbqT7AXh4mzp",
  "key16": "3VyAD5RPWpVKTgnZePNptktioHQQvz5oZRaDbvjjmYKE8zoVFW8hzc8FMbzKGKSJ7se6DEpZ4z2WNZN6LALKkTKq",
  "key17": "3m9CtKB3AwW5BFzAK7ZF2nxsyYWXaADCgNUhbjv7vEbU1vAWWVUiFCoiDVKAHfVo7jtZBY9jSQPPX7XLYchKNn1k",
  "key18": "53NXvsVus2bB5BqbMfegHRLFtkdMh3ndN2fpw5e82D4BsdEFdqAq2PGZgsMLPe2Fq7AfZU3B2hNa4UnU59w9RpNy",
  "key19": "5iSuSpuZPjCPQLa4m5R75BqDh3Hq4PMMJVAbs1eiaDgGzrgoJEwjPJxWi3JP2NAVJfL4xjwTjNVake8HxLhGoFjJ",
  "key20": "2mXdtQvgPyJ2rZhwEkUurBXFw7CcpThPuYLbJc2Qdt1txpQ3hPojLuwZU67Cm4eHTFNRHLqZtKLx2yLi2oxGAb5h",
  "key21": "5NfbjrGDCWcT1WS6Rmxnna16t6cG5roW6m7Cg8vfvHYV9hPpbnD8kotd8uP4AKFRCFb8qEBmZdKxqBhV4bvK4TrU",
  "key22": "nYTHVzrW7SRYv3jzZqyGdCaTcXyjJLGtvihFz9xwyhUeGd3tWjXyQDAzDM1SN6kgjnHYvuMFV8nRurffHfqzKEu",
  "key23": "4hE7a4NyaFV3w2XFnMPn4wfM7XxtE2baULAkWvTb1R2k8P3RKNVWPZ9XtfmZKxsReGh7v6N2Fex6sVtGQ1ikzQZE",
  "key24": "3aTcgY4tFvWLEbEUxgtE3HXLFEtXrAeSeuUWQYU8ZjpdrWSE8WouZRVmrKD9maQzD5zjv9mdynSuhCCpcaKi3Crx",
  "key25": "3qm8f62sTtWGTNHdgXwvqSk48a4jK1XDsqmw7H49Fvj7RmLMAHQPnpL63Uv7uKpyXfPiRSUzxKpZ8c3rL96hcqbR",
  "key26": "RscJqWarNuXWA3kVdeRSNRSdTUvFYLkcmXz7MMQQxVVFKWrH41z35idWBVwsSUqPphHPdUJyx1Pb519uo9TTQSs",
  "key27": "2VuaBGXQfNaunhr61SvfUJ7o7EwnVquMqSAKMJUKbkBjsihFTf76ZtaNXF5xui1ckoBgEGDNHMJGxdNqPXPjcpDr"
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
