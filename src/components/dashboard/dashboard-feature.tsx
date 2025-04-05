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
    "34FaU87u4kcmWSb9XnhtTYMTt4G1ZjfdcShQy31nQYnKHMAqbpLPvovPMs9kPYoQ45SZ1D81bUr9nKBcgWGweDVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DfNFz9rJ3ccyxBnZBWkyeE8oKQRKDrpJwW15y2vA3XhdQapyXCobhXKz7rN4xEzkWpGjpT7pCR48kt5D9RjEgGA",
  "key1": "4RQd1aK6hx1xxoTho6J9sLvvi3rSY5qNgjz8dvf3qv6RvvTHcw7wLB7ebejVG27jupMmj9weMekGKgV6NdAj2viS",
  "key2": "pvQnXcvrAHiNmWK7ivA3N6AwCRMNJxf8UHxRxrit7P9H1LXoL3vpxrNSaxoBiMmvW9A3ZNypG18qbduWPa9Z5xc",
  "key3": "66g4nrvLuPe4kxsnrD9cGoyUR3LYhox3VFhSGDLvYm7DBJu7RNpnQGJnhpeQvp7A4srMtfDzP42N5S8xn6wn7B1z",
  "key4": "2vFRgpBxRrHoigSKCp9ZEk2XKVxEbSLrPipUmPjhB53v2qkRWruevHrqNVxUjph88vm1xChTkwvyQp2DyL8xq8UY",
  "key5": "558dxpF1C9oVrF19qQUnNxZwJjCtczRhUy8ZfrpY1qHunmjFtxCb9cThYZi2u8qtLRY98MRVSq54jjdcunjZBZTV",
  "key6": "vg4A616BtGmc1aDP5aXxZNT9RGmvFHEiVz3j1MehELu4iz2hy7hRZxiV6aMhJnQFfcLRKCqabnAD1Cree7DBdSq",
  "key7": "zkLXWb5GGAo89iSDyYFwPj3H4h57TGyPLdy5UG2j5hXyfREvE88ifTwTSGyfYtzN43KkczhMqN39SKsNxG1GjYX",
  "key8": "3ARFnaSBiU6krK2mcwmbJfgauZYPgo5ipJ7nPhiyS5rXna3Ada15ZeuqvqT4YuaZ9U4H9EcZxnF2UuaafaaEpg8Z",
  "key9": "319WNk6WNL4865teM8oDgfS4LDnpDcia7HeSbPisRt7tvWRfDsLosv5N9nHXJtxJEpU9xQA92DcW657TrnLRoUc4",
  "key10": "5f6QhJY6Fy1t3SLzKYDKSDsLfDpHndn32AJZ6ZX3X4ZbHcSDpfbLN6QWXRuSRAsxzxRQGZN3CBfraRrymiX3aMim",
  "key11": "5ksxup7jEVcUexw4QEVn5EzY9RyHrbUMUMVRj1c8WQcexh9aGDufT8W4qqmnaBzUmLjtWWb4JgvT64yJNdpYJgKo",
  "key12": "37JgzmhkUHM4qS3T4fAckYiQcKh649SN4LMoEhJsXgK2DXZisHUmwhoYtyqYQFdr3bt1JPX6R27SK4fZt8TSR11U",
  "key13": "63grZFZQvWoFGTXxb5jnYYvMwXsoQ2eCUSK2cRXDiabpy8tZEzehmMyYUcZafnarNQ9fUey91YbLJFedqJ7JS3KB",
  "key14": "34tuvDCvSQTWATjvYpyWnJmJv1U7pDpb34yZrYRXQzKqVzv66GcR7eor3ssSLTFBCYmCy6sz9uZnx34w6cKSfv8R",
  "key15": "raZaw7vc7E4nrKGHv8bNQ4H2bQwbDamL4Fu1h6vPF2xWSGngxmZS92ZNtvGZyTzBG7joQBCHhqshq1qv8n7N7xL",
  "key16": "ZjT6zQA4HLPtCxw4R9YLgHdj6vDBnMsYBwgnycKKBLgxzrRy2UxJ1ttEhnXhPNoYgzdC7v9z8JHMkhcC4jWy4xq",
  "key17": "3kr3PH59jELNnbs239B9vdom95yZYEufnSQMDUuVLpormKG3okGx5pArZoWW8ZdAsTNZVEU19ckDtU8sMabtBbtN",
  "key18": "mxi28CetYokmf2GRLoYAnoCXxcaKyEVu9XBDMdQoJx9bsN1GNnHHr2u3UyN8x7KTpK2mXzmQ1py3cJxbcwQ3PaG",
  "key19": "32NKajXXLhTt6F2yy5hqwWEfdepwWuHNCnxfxVEsGVckDnWHDtsFXUPjWKzrh71y7XZ2fFckxAv68N5XR8NJ1Ltp",
  "key20": "2gDuWCYVMFMUfd9WPstP88WcpgN7PqcvnzAXxke6Gf846CQPyk7VCLx7Zs7y18gQ3yMHf2rKKAPQdNs8R7cZrBZ7",
  "key21": "5TkgKdu1CWNHBAidK7rxgon3LWgEyxu5ZPE5NapB8neA6Uc3xTV69DgZD77DdjAHTX7pkm9qEVJvWNpvA144ztqq",
  "key22": "5ic8HCjNsBYJrsXfFKf2FqB3AeS1ro8HuMgkKnPSuGAzTxhZCWb6GYHWQFRe9uZboQVmzL5oMBWRy3JMjjKHKC6d",
  "key23": "233LGktG447Wf45aPJQbgtct4fWXnvjsqjzvsf3cpNwrA6fdsZuYUtrVWu7e5QgdoogtAYEZfCBspmKW7Qyj6eyk",
  "key24": "4uDL4aFxs21h7vLmcXVQmgCi2F8eMBZ3jaEsaR1TTCAiDmt6z75FrhFT5XKGLLwV6sUGDwkurv1Y7hN4RGYA4YaG",
  "key25": "3x79U1cVuLub7cV1QdD63utZQDw6DMWBdL8cHGA7TKRAkuuQB5JMfb4Qgakwewsp2CHJSpjon95QkGUASEBnwoQM",
  "key26": "7SbRiBXd8vDV6ibVEmPZn88kJ977HjKXhHar8F9AGP4Td7JtoA3QmSoJtrxvQxf9RfTYPKyhU5eyNMDHcpCbnRd",
  "key27": "2Mstgphafx2tCu6GmeXnTJ3sWRTRBpq3M9JLfSwFWaseEqsqB92m3JpxQiAmMVQ9LifXLZ7TNhdK93uJ1K2W54TK",
  "key28": "5cuPVUeuqfSwPnQu5jLqDQ8EWTixsE9tTDs2aW28b5gWTfNMCZBxyE82vBrQw5HQPMPahJ4EsGvp3EwsWU6CxMRE",
  "key29": "4ouc9KuGMyL1ZCi8DnmpivEt8giRwFzLQW95D6A6UZCrihnUr1XHTxxCKFQ6YfxFMeV7dCrWJcSJWjuMvH2fBitF",
  "key30": "3oTPskrB7HSun1mPPQTtpAhtNibxQAzTLkxUPKsfUVyhDUbdGxXyaHAzs8XX95KqVu5pfjsEQeybwQ4Hm7xxQE6o",
  "key31": "4bt9FbL3EQfxdwnbK87aVKa1Nr3EKD6ASFbMmmk3sf2emdKTw4u5L8Sek1wjiHQJYAHdUZdBjc3SoaShwkNYwhDS",
  "key32": "4GcV89Qaaou3gh8LbkUJcXdyWPErrrWbbyAVR9tNGa4SmFmMT1a5ReG3oBBEdQw96oFYzuLSN83uzJLGrtvYYm7i",
  "key33": "2jyBU4MC3hKgZ4KVSRy6tFGgCkT4y2VKZjkux4hqiFNSPAcUnaaNNZt5ygYhRQHjJN31FekAQiDhQ8yoiH6S8q5",
  "key34": "2n8jF8WHsoe36LX9NUndECzMdTMUZ2bT3NyoUWMqsb4J92bc3kvi6UoNR16aQ5SiW8LE6wj3W5uBuec5PnmU8epq",
  "key35": "5rWcYC895prVgdg6DTBshXgWofsgjBT5hfA75nZdpir3cw7oXyWKUUD6zBgqaeSzwdhvthLPH3qd4Z87iJP3dPKG",
  "key36": "3hb2KeQmT62MCxW6tjbVhZ4WW12x6Nrpk4irBehTsQD4QoLWBfTp63fg8sAK5FhWQG8bc4JepXjBDfgERxzenVFG",
  "key37": "5gpiqgvF1xkvR1FrhhemZw8MTeGvAKcBUs1aq15oKCUePX1Jr4xaEc1PUDstzkxuous4eNXHv1EaQCHGKPB8o9sR",
  "key38": "2FFyJdsntqSGic6V71TCMyYHVkJn84VpWhbMroweJQkeK6mUjWVD4SUyb2sxk4WHLGZq7FhAuPNuAqozB5NGCo8s",
  "key39": "5FZ9XBRg7bc4ruDnqoBStDJB2a3MNTLcMV8qoFkjhFyojYSUYggE4aze2CryaHmPkd3Q8Ek62PeJUU9n7CkYsAdJ",
  "key40": "43xLfdDXfncx8CkZp9ZKCTNeRs3SA44uXvbuXcFiK8NZc5wquxe31yVrtBic6PCqrDzCuXSbLLHTzFXyHPviQk6p",
  "key41": "3C59J1fdoLr4LcHi6BLxrm3XQvfEm29wFkQVDyewZCZ6ugRN5SyS4cuzkikw2xMCbaZU72m8QgyYvdhVJE9Tbw6v",
  "key42": "41vs7HYAw8YWbLjLx3nqqxuqfo5SZN5dnXe21pL3BUa5MPWYGHHhTAu8rQo5Rexv7rQBsuj9muYXCY3Sqc6zGaSz",
  "key43": "4ZJozHgQcAG2yRfWFZh9WRuRcRYqYT5EucVh1DTxuWJpvfdq7eW4SNwHCMN8kDPskiXjyVWPQu8HzG2fdAnEAXKN",
  "key44": "KDZnDdhekes8oHtXN7pnMBJpzUGtDjDkFtSdZJdLpLVgiupkHUnFWmCqvyY8wrxvmYZVpW7CURy3byaKx3G3q3S",
  "key45": "2zRBSrghZ4boLpVGsQDiyTFkLANG39uJndQvekU4BmVBd7ybbrRyp8ZmH19DXv9xmT4nzDPSB3J3YP3gMkDseyeq",
  "key46": "5EAxGpJF3sxV7xMSSvoVJ5ae7GawW96TsZNTGbHtkkoGWccGQTMDg8f4iE4hcvQFFKp5FBK4CDM4oj8nPcXtMTHY"
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
