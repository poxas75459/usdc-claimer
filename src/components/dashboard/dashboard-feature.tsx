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
    "5NqNSGnTXUFtfxhpi5erdNGHzEWCucevJaxVS6BDVnxkpR8fpU19cmipHdKvvuHcWkx5JoeREi7KHcC5phpa1aSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QS168jWQ8iMDTeBaWm6dEFEH7PKfnNEBrxHTXfeSRoYMkp75R5AaKvG4kySksexnabJoBnfFeBEa3hJMbvUmzt",
  "key1": "osW9oeWKTvfS8beY3s4oK3TUbnWRzduN9ggN98cJQvsNd9uCGdhhQUaG9pwQ5RdUcp5EsjeyUJpX9AfCizVB2gp",
  "key2": "2ir88pzyZY7tsc14wetEBneawfFyfREHTw1QGf6Av1xLvMPWuFfS9jLozdJFueiQ7XYAwKATTZfkdfAWqLsrxVKF",
  "key3": "3GSWbmixgr5x7LApTpqfkytXzv9zMp3x99u4NYjhPxNKUSFszj6J48cGJsknvHqHexYTS7H2nqKbpwR8Yrd9dzyL",
  "key4": "3RBLTsRMsd34i6WpeaVj7kKd6HEpumoGpFoQExynpVkvbyJmgC6xH2KjphznBVAZP2aanZPw5x7yiXhTJDoG19WS",
  "key5": "CR414gfD5pJrCcUa7wnNfX7BnQ2Su2ww5MzvB2DD5DZiAUqDg1Tkyf96SHHKE4PtWZ3m1qC8NXWLWPHv5YjCvwK",
  "key6": "32jZZhpEJASQoMHdaKYwcNNdP27PQJhADx9Pa1PoAut3meGS6DZ7HUcYZndS2dJANdwUsYkrVPPN2RTPfZFJS3bD",
  "key7": "5SHHLj2P3hUQaTjbyz2D3batgeL2Vt6j6HALvXRhiyPezogN8LZEWDbtTxMRYRLxmKSzWenQ6b45ttLf9mVtCkjh",
  "key8": "3YrFbSfb8HYCFz6msdKDHpr9t1PeV72DNcrEyd7cy2abzgAoKX51bSyQJ4zwBDjbSesKj973UQEtK14ycJ7uTMxe",
  "key9": "34kKssRB6oqd83KH9UzsgtqhpUnuzXUd2fkwcJKDXEJEpyuRje18zf3c66g1yR6jvQk6TFMHFt4iAekJSb4mUst2",
  "key10": "3QJX2eHoUCdaTJadQb8i7roK4uP7vEuVK1M3LVfPSk5wQXrumWLBrCQFrRdUuVCVSpZ5xtKRFCzrGU5z4MwUxFwE",
  "key11": "2iXgM9FVPoxcVt5sP6sPYdx19JtxfaWgwZ2MaS8MdvrQgNqxZnLkxMupH2yVWC77iou5gVn1h3yo2vna79rQZmSS",
  "key12": "53DaFi1drpKKW5eYUh2t3ciRPeDz3Ur1uugGBLT3LaFkDPi2QvEaEDVmRHPZtPrvnREPHNb1yPmwycPwWB4i4iNk",
  "key13": "3RbQN5camfQNZs8hT39NiDzdDXJ3WbV7aYMHSX5dA28VJpdSv8hH4qshrmnzCEcBExEaXHgJ3ChhFZJRu3HTPnii",
  "key14": "KYtJB1j713U7gXBTaAAZ4MdVns5yggdKkazhxjD15E6sUgoMsuR5XGUUHccrf4GrF6Mbu6aukAED3qTedKgnae6",
  "key15": "4sGDLxsLzAtysgS9TkyCp8RFyzpjcmxXkX1cCG1cehZphikjqxykfgCN1Djdri41jr942iorKN5cginhKb3Pcmag",
  "key16": "3Adq9Nf1u3kH6S2Mx23dMAvCogPkW21mDkjG55EDE2iJxuKDdFRA1D6YED4zQy6TE6EF99U5mBgWABwNGCjTkwrG",
  "key17": "4vHFw5qmxQWdrCsGC7wUfDUT1WBSHbiYSd6jcjc8Xjz3FHb2SW8cFByn6WQKzgZTG6n4BBCxtBo9c9jVcn8m31zH",
  "key18": "2VfWrA2pwjcpNbExqbLoPsp5Rw2UY4bDHXXXTyWLt4EEp9sAp6FUsY79h7aHgyJgckKPGdtWX28x67jdy3ivmsEf",
  "key19": "292m9dWLsGohP2WzT6eVCVrR5taRcXjDK5p5q3JRankQmJpqfnyGpWbELw7dFmRxcU7xEiac2Z9oDZyDW4h9pE7F",
  "key20": "2BiNYjXa4VHgSCiqxVMPAVdP9XpAEqLF2G8JfJjxrBB3q5CRqWwrkBGXR1SufNkQWLwxk1GbsCwscN9HGEWFGbY3",
  "key21": "2yP5nwck2jMpxyhTquwzPUjfT7v2QvVtvGSpNBi7iVCBUvaoHFSg8gYrLkVX7EJUfGcq9pKK8u7TmoJxc3Qa1ENy",
  "key22": "a3S7fju7kogV7wq2DnmwXwfLxt16z2qDwiTkKAX2T8Ln41XyKNAFoa7T4xH2NpdJEFkJJDFFaEmBZfieYbjnarW",
  "key23": "4EfCFxe4jk6D1sKoEa5PKN8eeyFGYkHc1UtoaLCawrSjDbDGxcFt4FaVrt28332UXQkmXQ9t3prJAMomvRSuT8Z",
  "key24": "2KZrc15HptW8udY178wmvgiDJmh4hJbNAWVKXL5pBoHCrVzK95Kerz6V75zbJW5WQEcYghZPV7ckqEX2S7vjV3R7",
  "key25": "4RdP9kGFVnjZoQixUMLLmCTFgeGGRsEPQWMYnWXzZm84cFZnYMmRN5pfRuRAsPaDKNtDmjxEjJLHnZ7aa8dABXQi",
  "key26": "2279u3SmAShmqx8ZLHp1jwENMwPPRXAEnJY9TM3irYqS27itcpctvVN61XVF2cxnSpspQcbCzJisXk2KiGgwMe4H",
  "key27": "2MX5cWgE6VW8J9QQZE5VKvWLQJRGrL9vKgP7awFNetfTPEgsHsLsiS95Fca1tBR1eaKyWUnMrDETUmoADAxmgseR",
  "key28": "38WQBh9DzQqi8jFo7YpxvAznYyk3AEB66QHiQTp22EMRhtjiCGAjj5PsH5z6NYLeGeT7xyvx377Es71XuWXBMPbq",
  "key29": "5N2L59zLuVMuo41Gu481z6vTWVpZZmAPiEe1gRsXK418XY8uosShrdCj7Xu1wWct81vxLXPfFgNhqqqAM8K6Kzqq",
  "key30": "3kXphexuygD2WTaKJ4iQyLRMTzDYToncVZxxPHFWWKc2n7bzrkgzZRtR4qwkYsKLEKk7sJvMm9VDTzyVNvbbTpVL",
  "key31": "5JsjV5snbvZbSgqGRTYJVSU1LBrRKekKt2hLnDVFX9VANQbQf562v5oahjPceQKijewXwEERWrDgosT2piWXfktB",
  "key32": "4wxbDfKvYvsbCmADzoDm7j2tgZmrga9fYCCvCSCASuXtVsqvKL52RdU9Uq2kJFVq83vcTe4PEcCVsbo7wNG1PXt9",
  "key33": "3UYjmfNRtbaHB4zrtHw7LWSswAWBuaC6sNgGPHQ27MFGh2xFRAyy36tDTikAEAabdCDPjSBd97TwtKey1VN8tuEj",
  "key34": "fBKqK4gG12Z5hv4GXE3HEn4PjUJEVJUsF4L9qQ1kPnLrFQaD8gsbeLNRaGUutrC896tGB1J6xnCKutmRj4fS6Vx",
  "key35": "8JSUGGkbUFWQj4kxPB4X1CsLbyp2CadbCN7CduiLmKjLzvp1SJB6musGaZKSQcbuepU54Z7gtSCZYaAwgQ6m2N7",
  "key36": "Q79R6iZ7Lq9cxevJe9CjCEKDpVqdJGEoJ74TBBUGUnZtL6WfUasowR4qiKS9cRHq2v7zaAuUj7nfLEgy43vcdYu",
  "key37": "FryNmz3ziVCReqJFPnfnyfUDMy3SG54GUTwy3DoBNgF2dvmYSiidfkFWRaUxG3E32emVj4Yzs1NRVVzNyYjbar7",
  "key38": "3n1bN6FfhKZQ1xmKF8qGuV1fX4bgAddaJLiakFkjseZweePvrq54iwkTdh3mp2oN76kvYLn9o2SBx2m6LwcneL84",
  "key39": "4Dgx57j8QBpvSUSLty9RXqR9U7mV3AMn5dk6q987MS22nWyTC7MQDEurr7hvtLF8y11nZvdNkDJ7fTjcs2DfetP1"
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
