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
    "VCFYctrttK6g7erAnra4sH7Peq9ZEwgDxSgwpuBJcqQ3Ap3HHxgv3RHvLzvdb4VsazFpH1C4uXS5dvFS9oYXkni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvZpMefaTKFoNTXfYeDhvdtFo2ZH1ckDBhHPMqSPfdx514q3nB5nA7u443C9p3RRhFyHkKbx1TiuJC8iNFQQW6P",
  "key1": "TewcC36TZG4gtThSoYQBBpNu8VHK4KC3rxkZKgnwmRiA5NCn5CpHptCMmhHnnZWvmmpLys8jJVSngVMLTJs7VJW",
  "key2": "2GpBaL18hFmRtdG7cgwEVM1jQjxq5t3JzZoM56p7M44e3L8VD4EE9qQwDhiRd1ZqH3e2AmKj8dHMeJ5s77neWb9K",
  "key3": "wBdfWL1Ve7dduL9oiYKD2JsbYTDDHvxqqhM4vWQdVGgZySoyHufE1Zrcz1UcUUYXWcs1gHwZJ36knzUxVjft9Dz",
  "key4": "4Tv9GrxMQ4uL42wEbVpehgv95AtD6KGMxJmwHh8S2Sv92P9qkCBEcsCAx8XBAT44UqfPxgQ9vYwbQe9mzz5QJAkq",
  "key5": "2uDx7F6X6hmueV3zB7E4a5dvZH8cNSbt7vHTpZkgJ8F6L81uo2R7EidS7GrE2Rpo5sxgkei48HoXFnxy1VxuEsoZ",
  "key6": "4VWQUevwjNa5g7sLXVN8ifVb4fBgDXQMuXGZvTkFW7R9WRDqLakV9XMnS2BEvRZ6VfM8rnhdRkJiyTegPecfxvw5",
  "key7": "55j4twnh6o7AsYXjHzuGLXttzu88p2v8uRUAAVSUpwpyGfZuaH168wkr2abxfMwDWQyH2V5fCQ1DNG43ZUeFXkp2",
  "key8": "3kaZSYV2SPUXQ1ibsGWv9CPkuToRhSNdu6gQU2aBdNRX4kYyK12CWbf38AC6u7wWfeUdcaXvNitMYo5HMqvsuERd",
  "key9": "5oPzB2jiu2DT1vshAHpMTEPPagRXBmUefZdt1jTY5tr9yZBeQgguUknFD42Q16AJDhN9tt4Hky5A1zx3ij2TFsB6",
  "key10": "iZCyLtZW2JjzG5oMwruERDBtH5EPYCfTB3T4pKwpQKpUDNa2eX6o67hbtRJ8em9Bc2kGLGFbCMsWq9Q4y8qCTy1",
  "key11": "5a72z3S6J8J1bW749x3f5suVDzwxmSJJprX6M8k7NHoYXqv5EUmbZ6goLi5P3FTmWGgzkWKkMVGjYqnARzUHtDeE",
  "key12": "3XeBxPCCdLzT1mKoQqcKX6U2MM6RxWT8cWeXp1aFrehB4gMQmx5iQu4gewjLFcyNAmeuKHwP1eU7rGsT2rgBZVxQ",
  "key13": "3T1FWWysXp9kNazhGuoxu47R3tPCU9dcVGxL9dKWE5VugMk1U4SkGHmJBgX52Jk86DRYvjPyKa51hkYe2z6sBcMq",
  "key14": "3gh7rLuGH4nm94Gp8ZuwAGZEv6TC2HobNk84LGTGGVHAAcZ2GtzqeVKuw6kSrp25V1qZbGCMkAhaPDqhuGyjRaR6",
  "key15": "4GE5ToZ14q7CoHy5fHWXuqKLDxYy81NiUdzv9wjjTPhC4VLRURPN7JogrLoW1QyBhJH5SfhvJABpg8YpV1tdxdW2",
  "key16": "57G7CLM6V7gpzuZa2VPL3D5RxumUS9jazb5TFNLZ1KoDLjGqzPwdERvqZZJDmQBywzqpM3gwEdJBuBh6iR1bxTpL",
  "key17": "2ZJmpAscwJdKRUHNeody9h92mtGTucAqf2A1dKEfgUZ3Gbf7ADaFxpdHo3wAseKZqwco4JLwYAsTHcXucmcR6dgu",
  "key18": "ULZELrwx3km4oKN8s7wnsNkA9jTPc4acqkDhUh25YQrQZfV185uYCxrwWk182f7jgWogTiLXmC3PtMmxquwVXoo",
  "key19": "31VmAURLWA8tnYXxMARbr8ZZvtmnk8arZVQeFXm62ZQCL75PxkTZGqK1gZ2D4KQXx5BY5DcrpwHjs6MQSek5UQd9",
  "key20": "4PX1RSEpTDa2qFawXmBsGnRfXEiJgHWXvhMQR5FqPYMQThXZAcsmNDXZxQ7nvVyqUtCsWzFrVv4ZZ7fWvjSoRxVA",
  "key21": "he4LjNKuF7jdB2BE2Up7cKcQwKA21jhXJN1USxFn9q2tgmgES6FjGwS1zNKALPqsSzvErLT3jfXkEyghBpdiTkG",
  "key22": "3Gt3vVyWR1iWLgDBqfQJmAMbxiSMhv3f9vHCGaHqJARua1jguvnrdn9fLk1qpLR3vbkcmbVQ9c4M1WcBX4P4z6rG",
  "key23": "3tfxt1yP1hUFSxTScGbMv2KrhGyCTL26VmvtWVEfehYbBuSaBMzkrmJDhkvDZ3UJfKxCAKedUwxEt5xQ5LJFUMuY",
  "key24": "3GvYuEXTcUPiXvpQY1eVHj4BZQQVCjAtotmbCPRs7MBgmCm845atCe1bQJHtXvGtAaojRhKFQLmYwNwVNLfvcvW4",
  "key25": "3nehBqAj9QydNgRgUJbFM2MEvsiS7MjTKsnE3hPqzcgBkiLtEDKKFwjLvS8oAfngh4CCNQLueyMMN6Bxv4YhE9P7",
  "key26": "4yJiCb6VvYnP58kV1eWSgHxz8YMyjCk5N9A7aBRvpJhXsDneJMc2h1TMcpRwPy8Zaa9ARQdYSzQCZh1GWGrjAC8P",
  "key27": "3Hti7PhgjNdfCiprkP6AoZqbb6AgTsMbDeMa7q3T1vr1fKAEtUwWPGwS29SvurrG1UR5jL17Lm9j8DUi7juhaSi",
  "key28": "5tFzZVFUmwcRr4SnB4PspaEmTzGRVkZZZEBCtdfkr3nDEKTLH3A86bzJgD2wRc243YZT9juP9Puiaqmi1vbLfeDv",
  "key29": "3fTDtEsXebLZQfEbKDkXrUrTtbuaHL6RFJN6vkhQXsmXi2KWtGiG7fjMRxAe8tH8VoWxobvLCDBDZp68cCXfrmqa",
  "key30": "5bHxNVxnHQXX9MxRAhgKnZWrQPFMnrhjaKex8Y3FxuCjVFNriou3dk58U61WBX3pFcb683wkFgAfrtTxjzhNPUPL",
  "key31": "2GfJMM43Gm2oeRT1YdQJfpVeSiS3kiL3qrmjhNp7BmFxSJS36DN65gVJB45fbF5WZFvhmpxNeNsLq4yvFe1X3my4",
  "key32": "5jnzt2LUud4nJyba9njQShqdikeohbubHDGabD3Guuy4fir63p32cqgkzRbkRviqhYMeR3bWxAhcSvRFbTY7esKD",
  "key33": "3mjjUbG5iFKDHA9sQNRnuhUR2EW816bJLnswvhHV2UJY3wDAmyDcz3nJZBZ99sJey91VPWCKrtKZwMXTpdnPVL45",
  "key34": "CatgRBhjoHaowGbej6ojTrcGpG738r6E4ny32xt4He7rVCyoWCXdVkByVPFczL6zhdgSuSnWPfPqjePgCxmHwtR",
  "key35": "39JusudHyGJdV1Uwp1pwUZePkedRp89sxhnZxBNN3bBMrAEaSpjFsQ8mwCcUwsbXG4ozRBmNqQHcY3LCQxH5UkDL",
  "key36": "3NgagxL4b2HoeUPx7NxvfgqYgvCxGupuXCNiCpT1nBcqizwf8fJEgXkjqq6KFtsuLALHbYy7t9nEYjZgSAAhmdmu",
  "key37": "5F4BihuFcmBvHjDd14w9e1hwphjYz76zhs2nUUmKwMyNvonP3pqb3Y7gPT5GMqVwUqKMtLnUDmbCHf5K4q7WbKxj",
  "key38": "4UmQdUPWZPARknYoEsxPbR63s6eWwz5BEYJ4PBe6hCo7hR4AjvwVdoQ6r3TG6Dbd43nxxdLebZp6nszwfJQX5Rv8",
  "key39": "3fnXZSoaPv6uXdkVixeiwgYMpK1SSwBrht88nETioXiebRmDJofW8fWhHKdUwGZDaiLixy88DBNgT1ACWFLWonbq",
  "key40": "2Rc6bDwUP9CgxqBaRqGdJVxwyVV44W4xSByiZKkHQLGdcSgf3cajaTENCUzAnQSozRW48aPG23nkQg9qhmQsYPK1",
  "key41": "3coWBpWXa12F25RNrHD5JuF4ht7D8utrpJrRxGWcNNeuejTw8FB7bo9JPNUcsacqUsbgTQ3ULe3p7ggGPpZsrzXg",
  "key42": "2T8o55rXdWnAgZgbHm4hRR59XPt5h6PCFzcugEMVCitBYnBp9vhJmUBapJ9HUXxggBXSG1AFd9KGmUnKfVsUPctf",
  "key43": "jigP1x5tStDmXiLfeimdbvo84fd2drPEYgmAgNZwEwR1VwmQmxapHjnFzq2mGh9yUTDGu5twfxezXhATpVs1HXq",
  "key44": "5ws3j7iKjALmYKQjf9iMSG6h7HTvDwUC49NTURpk731o9d3NbC3NZPnetKmaMcYKPTzzw1KzXdqkxcq22L379dxd"
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
