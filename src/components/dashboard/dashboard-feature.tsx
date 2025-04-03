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
    "tBpdeGj7DneNAtsdmyuLDbuUzBSgk4czgtQfN6xaGtf8nGcxrQa7uG54AoREAe43Mk9opHZc8EiNfuLhZfEmLSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iAvRWusUBHyXm2kbgeuAf7xebzzJG4yeVugZxzJJibUopVHZRsVqKKxECb9tzLue5w7NetSqqEnF5LqtytueVY3",
  "key1": "54Xt9aQoaZ1NVsAhH5kqSZGjL6oRQ3nz85entsPPUeecPKdW7R1i2dgoUho7a3AwRSwTHNZ9K8Q9RwxGq5dK5H9J",
  "key2": "65VZQ7uTnfepAv6TRNGXFoHVkfoLupbgcmUhVLAt62dKJv1xWk9x6SYpybxgqhN47yo84KHKbLtKJzjTmts8kL1k",
  "key3": "42KBVGEgB8yZPpDHazbhbyFmMvwdPauH9AiyY8X6nPDrsZ7ysEqM3eGQVThUBdfwkmqrHaWcSv8FRu4WvDgtE4M3",
  "key4": "38XXmsSRYbTH5meevXedbn7mQCWUShULQZwQtu115XkAyfoLELfk7hQreeNeKPyt7tu2pTPSS8MqC9YSoh5ycpWC",
  "key5": "5UmpxoorTvTP43k88NLEwGx3Sheu1oVeRrVj5P7EnVx9trU1t1reurUjQos2PFsSfqJPrVxwvPXSDTaZSSpmYZHZ",
  "key6": "4zQfmZYCn9TAAZA6UTM99ZamMpx73JmZUjjdH9YSr2txdkXqmWiaFhircDGheXkx4RbtqU3CzpQqSXsai49onUiL",
  "key7": "3iRFqJGouPpnejARwTW1zkDPrmqhZYgeHQfAfWqyjqnCyu5oUb7UVtDCigVjtckST3jUty891J3NUkC8RMS3Y6Yy",
  "key8": "5a2bjrQSUuYSQ1H4MKE98BB4stKz9nmYMYMw9gMSVzEQ8yCd2p5jPPkD42pGkKar5BDvnYsA75LEnVA6v9EKeBkt",
  "key9": "61MEXvX3ZePdgZ9MxG3LJb4CAAcpHVRvgmQHSyNCriGuN628Eki75DyVrgrZXvEUZm7GYPFNjizjZRCWBCcixZeb",
  "key10": "2W87Wi252KyrrUynG7mnu8SLXsBNd39UU1dBjiMP9rCifXig9f4yE37YV6i5astwJJkWbevEwkJfD3qoNKyms3df",
  "key11": "4Yc7D2x34NBBK1K6qeK1LCABAPJ6kmPCku4YD9m3fJfJ68fkncFTdmpRDYaf1GZC4xhUQZvXPLLG2g4hq9iCcWca",
  "key12": "3fkEAmerhDkdQgE4UAGZ1hEz8BRMFvEJEVh9tDJDMgu1PBAWijxExKYLNRswQbvEarjVmwj7gd29bgnCnSegKJxR",
  "key13": "65rTWGHxBHKFcsV8Vmvyy7kdwdNrXquxeTxTCis1ZUBHcfzaeQtaSYdwopbNHzxVizepzNakjYVVbgL8cj188Jc9",
  "key14": "3mQp1HUdDRUupawiLAPBKv3CHWTUzwdMMPZh5CKFda55MeTZ42aFo794gFFnHHJqduPu3UiMuWoSFndNsKJiK1PH",
  "key15": "4mPBdkT2Jkj911VVz1qkFhJgX6q2AFPNjjAtPBYF5WyisWRYpaESBobZDesVSkmhzpAVc3qxU15jPHDWbvRNd1kH",
  "key16": "3QzdwTZJiFrqHQeY5RoMCdoivEd6gNVa7VpD8TMRqxLpnVRz8T6LHNbjrt2gjXoQLsErKo1HSnmuncSt41kh1Tcp",
  "key17": "2kgZZ3wJp3dKgqn2foaKkgeEH6qXYvk81R19TCCxpww9g3JStaa1995g64uAk5LaDQg3UsfeJcrAWEjpUWDwGcrx",
  "key18": "4brQENmhtjoTtjubcAS5wfttUwTN5b5VpJsXvHZvfsawgPTTPF8DmgQ9Na2BspPii4BwJsT4tsuZtBEu9T5Li232",
  "key19": "66kfNvJ98TTt8VnsDadcfQj8HiQA3dEsfEavNoxVQ1J5EgFX2QRypyDRRuAFnH7RyqNt1SZMpC1Zt3kePs6jivCQ",
  "key20": "2qDu5VyySnq8ZVxa85UjxHRvmdicpDwFtQUhebwWfC7eLNpcwmHrGUvUqHYz4zwE17247m2PWMaLrxkgku5fGv3e",
  "key21": "pto81PM2tBBTuG29yTYmXiuRLXwoWjuuWDqzogcFf5XAqAb1FFkQq9yJN9WeCRGwifsZZ1ASX6vLmUH8sfy12wR",
  "key22": "5JctmiSRJ41x9pDsj51LtC449XkFME9WgFuJ4Yvjrni1ogP3weEa7yUruDDNQ5hsHMWhqbE1TLJxxD29eCgUx9Gq",
  "key23": "2zWA6vX5uGSPq8aabvsTFSTEDLQ9wWyeMa2kvwx9g6PpURCbtvrjecZ3w79CSDTuSwpTZQXDw6HBAgMdoxLHKuQ5",
  "key24": "3HW5b5b7jFiuVbu9fzqBdHD2pWdjpjUDiUVcvqtmmCJEYumwJa2uLNfWNqjsHodCRKFvPJpc4YBBcRc4AeMd8LB9",
  "key25": "GnoveDWMD2z9CeXzJga1z2PZF6KcspTUwxmsPe7SxRSAuygQ4MpzFh52KtABKK3VP36Bw1UzyGF4oqKWLP1iiWc",
  "key26": "2Rtb5Sqvw52QSrDH4uQZzAryGWZ6P6wcmzKQH6JHVehMy2dsNA7wTNMnDndbfVwsntTXSzmhyr1Jn34HPFmJWyQ2",
  "key27": "4ZNBwCnjv9k1tk6HyibF54oD5CRvyEMrpThKJ2uFp9zKS5WpRX12fut19WNfKMyqHimWMzvzC843L6rX5ZHtGqeZ",
  "key28": "56QLaRf2EM5kJKRQhBLZoDERVjmTqBJVwnXjEvtPovA16GEXENj6oxr1r1SXJQfUZhTXzaaZwv1eZa39DNqDhhWV",
  "key29": "33woYMRA1gwnXzs9J2jRYftnmV5zGTbMv36hA8LGXyHYxtVdR4p3AgG1kmuhuHsNjYWgAkH93XmoyEEesiu7C2k5",
  "key30": "4x9CRPq6tzQdmzB1UUQDYBDa5Jy8QgwxY1db25QsjMGM52L7gUbnWnecKjm1qNuBt2EhChsPG6dRe8qaakpfrt5S",
  "key31": "aBaVJmmGwpke6Xaxa8S9vpi19vpsf2E2166pHm5eHxykURHU1u1Msk98zicDFYXyjfsZ5sCvkzqfSxwNTePcawk",
  "key32": "YNr9bohK6UsUPCwBpC2LfN6qZcLX3iBJQUJwacV1upPoYc6SEE9JLzkiKwpguxRYjSaPvjiyyNigmd6Bmfo4cXs",
  "key33": "5ZMAvDNs3ckGKzwjt1hbvzqVNfs83oBtJ35oA991CBjfzqG7PWiYksNNpAsUckZ6NLVoyZ1nrpB2fWpVBiyruEpw",
  "key34": "rrWCeibCjtqgfTezMn6HMSwU1hnDX8cMgvZuMF7nW9eiopAFqXVaf1Pp1VXiVFVtaNXc8tpBR8rRg9n3soH4gbH",
  "key35": "2hR8brKiprBiwTkHdF4s6QZMkQHzaerSbQaHBUcLe3J57MnhrnjGvFoW6mWhcL6mmu4nQv8GzkABqXj9PvmvHdn7",
  "key36": "5Jjkm5TgiWgUUJhvCGEdadubeT2Qc4GXEEcNFcuUUut2HgEWUVzktT1q6GhL5xnpyBe9MjRyp83UGRXP6kqbUe3U",
  "key37": "2tiYtmLZMm2wg5fdxemCcEXFU14yoJuwF9VVzsZF6r9wKoNPfm6B6gwituDekXZHcjpNmkyLzxeK9HmDZWwRimKF",
  "key38": "923z2Z5GtHPe6XDny6kbyRBmWn1nG6cJG4sJKR82kcaXCALHzBULJyFHAM5Jmm4BRHJFLkoqqhuiMyTj5Gnez7H",
  "key39": "eo5wMsTCwuEaEbo7cuo8nj6MKpx1ixGJrjHpn4bzHCCpfzafFLWumqyUKbKJz9RRHLaLWZBmVKJWuChzVgtTCNe",
  "key40": "4on4uXi8hB2VJgW867qnHfmMufejvb71CBoZywtvKPKBbJeua8q1o7htjRDoH5w7hoXzhyaQnnLVTmrY3jtzHfpX",
  "key41": "mFQ9DCGufcmfXKsvYZHz5YjucNzamLjtzDKL9DkT1dPeWWM8djQk8s8KFqQ6ah5ebEDCfBor1ebirxxvf8ZBCy3",
  "key42": "4ZWzTDAie88bYrDy1ktCcZE6VaRDtNUDJZDjWnYnkeBniRyvtfi3tULkNbBzciUhKi94MnEyqzTDKoYWjvhD2w3E",
  "key43": "3cRQyHfpw2wqaNnrs3zpMpyHA6Ajz5uUYEYYjEsnk348eRpWS7EQVPdSAyVAZsDAhqt4RdZ6LdbanhF4r2FkUcUh",
  "key44": "q5twew3dixpqd8FriAQZ8CL6e3pPNW7iuJLCfXfzsa8CN6XnK1SxJRVF2ef4WD7bjxmHghvFReVvrDwqvkR3q2h",
  "key45": "2HXMr4vmTcU1CpycRGv6wxsMpXh9X87fN7GYnLyQ5ZKxoDUs7oT85PjqMH6tqDbtPkazXDBF4XsM8GxitjEFuAsN",
  "key46": "572dXqJfvnswZ1Q44cJS4TVq4QhwBw3Wy3Gea5tXaJiESNPkTGX38jjDTnJMCKptZdZ5ZhQwC27eaY5YSthfRYTs"
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
