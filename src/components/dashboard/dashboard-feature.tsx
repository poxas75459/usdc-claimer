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
    "2mrn87m6ioui6GRLzkYpa3coEzfRp7gvHyUe5Nb6MYnHsKPM83w6oZG9Va8A88f6HrmG1m6qGSDYcciAncTmu3fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pSRC9AfqevWEoHzra18mAzgbebcXwtnq1Ug9unz79uGcnw6tk3Psn2tQcF9SbbcBhPASX6sTHs51SyYf8DN8yQt",
  "key1": "2HLzKjyrm9q525PGCUsCFC7m8VdD2wPFKbJPM1d8o25YvCGNQq6bDUTKVU29B72urUjNQDdSZHrTw1KJw6TurkEP",
  "key2": "4dpBzhzY9X4cUmz8z8mCzF7Xde2M9JmeYXfzSEAbP57KfP6phQ5HgkMj6wGQVPBGetm9sZZPsZmDtbLLscrWsKzY",
  "key3": "3JiSJe9FQL3esWZ65kHUA2r2RpahoXCn3jGpis7PbzossU8PYhsxWPM1BgyDdN5o9oZcpkvrV4D98h1TCsTpg7v1",
  "key4": "3z2gBxbUKbrugzoCnUVAByGSqvmdnPUSyipUDBKPjwyYUBJFXnHFa8Nrq8Jte8dDfN8r41budTDPjyLixHMNUCxi",
  "key5": "4NNt3aSdTYhQU5oSqGeZ8EjddcqWBmUAzz6rmmVJNhwZWgSMbpMg4EZVXaXWqfvwVvkSfA6MsZpLLx4vwTzC5LuV",
  "key6": "5ghGiESruapbPNpEojhCd1GjRWewFDhGpoUeuDRT3Puke4ETqCjjzzJ7EfnGfEBdLQsufexiQF8BRVLGbVVPANjF",
  "key7": "2EP4EyEqjcKhGuhrQ3qKMNpNbiZagjLjEv7JNn7ydsWLNBrgYS7KJhAhRw5Gg7csttH3SUM1D8o9k9i9HsphfvFK",
  "key8": "4qHnHkC8o9wqjtqeAFJzX587AVkAvThjF3TUJRFuHKgpX7E8sV3qGvBPxBEyTGmZ4va4gWMtyL3GbLuww4EwHvuh",
  "key9": "4tpiPZUp2oB2MFvxLssGsn55Bk66NGs61hymp6cLKQRNsuE9NDrFLV95M7utyqSt8LxeX6MsDdgZp9UE8Z7wAedo",
  "key10": "227mRgRovdf4cGoRmF3buS1XdVbtMRTUrB56AP6dS9BJY4Z2K62GW3QJccbtH12u6U8JnK313QtgHrySpzS9uT7K",
  "key11": "3hVfKGygUhXap43HLYdWbvFLWFUE3c5J4STG81zb7mzXPRS7qZJTktrvJrufV4f5pkL1GL5u6aby4HZ5xqeW2GXG",
  "key12": "GryW7Kor3cf8b2sKv2YW57xtHwbMuKv5P5WqpHHSifrxCNJ1YSWmsMEbpEFSpNHD8p9YJu7REU9afVSVTDPGT2Y",
  "key13": "45Q6EUHSz6og2cpVaM39RYToT5dLZQQRsYXzYKDKHaijn8Km8UNkRxhXyFePW5jCHQgc4XbnadAmrBsYmDCWXsiG",
  "key14": "5svUuxjuwqi7CZRjUi7j9R1QnLz68F9naNwq5Bjo49PLuo4FbgtZ7LfRBTLxs2Rq6JkXgknpubew3Pd79AYc5Zdf",
  "key15": "4MdZGzbZHGfPmjqW8UcCWq8MnVjEyN89gQBvLPuDLyGVpLRGreDPNYdh1qtWAPodTboacueQYyJV3H33ha3iyUeK",
  "key16": "3gLKQmtJdKSVjKnjrB2pDxxJaRR7sKqTJ1Pf3SUbsM1YFdRrYYc1RSrhLm2woU6iGGVKgSof8EhQiLxfvQyyVhMf",
  "key17": "4qt8X6wyM6tbjj3GkdHkngqh4FdviTVkfsRu8XXHDjBYVP1xdZNv5ZfqpTEUdHZ8X44FtrN2Vh2rfK3GWarfUv1V",
  "key18": "Zz9PShk2y4m9jLtPMdnfdTsgH4dAEM5UtUya4hy7chE3YJjmEr47dz8XNJnEP6RM9R9q6pqKqt2FFvoLNDv2WBp",
  "key19": "wbYmGi4QYcQVJYPEMjQ2JdKdXT9PvWgi11RS6YC5iB4gsWGPj3K7YzrVnqBuiBeQbWKVjo8onMPtqGNo9ZeMkL2",
  "key20": "4JoDiMgdq7Ug9CdjeM5Z2AKJCoWLN8bY6ETqxfECQcDEaTMjgenUEKfUskFHPExpVyQY7HqY6SFurd2fgfMZBMKk",
  "key21": "4EkzM5XVNXD8diLVFxujtcrebdcdx4yXDcWqbnYWeXHtUFrymwDWGU2MKCnp84XBeYmd3bj2R9BjcDcUK45dDFR7",
  "key22": "3LGz34bRq5Wuo2BEjAqTXgjLazcMsP8paBZZwh9GfrPWzeDkWSj4j5vGEugyeX8mMVhJ5rsGE34RL2qnTNFmDjFh",
  "key23": "3pzw1S5Kckjr7K6ZqK3Vy5jqE8pQd1N9PHwKv72wEh13CUEaUAKbmqEmuSpmHr1tWkg6cnyuLGcekkhJPK5yK4nT",
  "key24": "2ADFbm35EoPyzvveoUbSiqN1MwJmU4cazpibZRqnpjxir5DM4e9VDbneT9wJgmgHKdKXppU2mQCQdfyvDDNrk928",
  "key25": "rSpHZL2oEdAqTpKAmrp1YzBuY5UH8srGHcdPnarTzVZkgQpkAzCvgaKDFLaewZVGfC4mun99XkBnERHRZ6YXpk2",
  "key26": "yWt2mEk3NemraKQf4mMXkGaeHvXo3wytd6Cnjhz1qVitYDzxQXFvsMoA3vLTD6GX1j2Qmq5YC6U5zLsUpUafVtn",
  "key27": "5EYzp1roWqHTYp1nRNpMLxJP9vFPCL81EhMkpefFvCyqnWJyhdQKm5uHqatStoLs3sYLuFVrUB8LFtF1qSciX5wS",
  "key28": "womeeKB447bmWqd336FMyFanrwr4UVnZA3yiYLWbrwTJJ9YZFikxPs88CNpuDExJAquHBYMAXiPYHhG3KR1BuNK",
  "key29": "2CLZ7mHT22XGUJHGpycWR2ains4vDiA4hvud7M5Sr7ASa3B1TSELbx1QCRMY4SMPiowDtpeDbd8hqhhLaffyL8n7",
  "key30": "2xsvpq15fdQhD43jdV9yCYpge9iPhwaUfVHQmcyzGHG3K3u2CfrJHmygQUeDK3eFto8n9mPVLmzLzSKcwJFrU3yd",
  "key31": "4msCzJkmmZ1C77HpVRi9bAecahLRheSVNJ8qV4tr15iPcirx7BhkTEyBVrz8gjVCYBFhRxZPZ4KnLSHcCYEugBcr",
  "key32": "46btRqbGKhD5Yg58HU8ndGYdCcVUfveimfUatNAXHFXseEpJkfMVDsVQxdQcrJc1sA3f5apJh5z9JqpNsGdwDGUm",
  "key33": "2HpEvkZgx97wtSEmstiyRvAUBUN7R8fUZyZXYLbYFVWZCEgwdPmZ1KRnDZayHCVuWZF1t9yKeg3nuqgPBxibVUct",
  "key34": "3m2n2dGKRf4ucr1A3QNGsmbvQokdn7s4n38ccudmDNQ2SV6mrRuP9cqvW74jFnsKJFa24VK37heqsVfTpwAE3oDr",
  "key35": "3UNRE5sVY9o3xNuwgGF6BPedRRpT6LrF8z5Hx14FXHJ3XoMWgFaBf1roK3xpsVSCjLNLVKjT1GkxAXqXoEQpoBgc",
  "key36": "5hPvT8iPy5BmQq1Likmyzo3SfKKUQhQU3GcGAnzCsx3ZNP72WN1ZW21Sm19BiXUoy5t7vQPuee7VbDPQkksZ8yuX",
  "key37": "NzoPPe9sTnW2Me8Hkr2fFTUv8oVrZTL47h1UyvsqMq8ea7S8FTSPBiibRKVspCymE7v7NGxzqqwTX1oTT8qE85f",
  "key38": "2cLh28ABSL1VtszMAvAMXY8VF71VrjJqneSs9jXExG3RRQ566yJ5wDLRJ9f2nFfpUYR3bE78kh9R1rkU35dZAUTY",
  "key39": "4UcAiJ6zFgEKKLk5SG4DgUvMZv2NTddbduUf11LtzqpiWbf59AKq2wHSFB3cu1yQEztNZ5jjXX3bUgVVcu4TfxZg",
  "key40": "V2i5AscD7QAKcLf2s4SYt6AXyK9ZF4TwJdbRX79HLGon5E316g42Wsq6HPksTq7PwtDNwwJkHZ9VumA4jFuqiZb",
  "key41": "4fHxrVzLZCZXWVkhST6tbHjvWAosJULCBevNqfGjCrgWiHhVVSb3fhiKmqXqjbJZR9yqrFm3H5pLdwBUqxWE6xEr",
  "key42": "51u6f7tfYmVtzYEGExEdFKQWz14Y1e6DhKPGqQP9ecEF4E7tNV3kkjF35Y7qJAy3oS3UXNwuZiwvPNwY8F3KfDRQ",
  "key43": "4y3Mpe2muGYGjAaLW2jxZ7Lrci97W85Xws4QeVXRQh3EV55WiL6FTkq2vkhU6WAGUtazPwhPc8J9EmbMkT1cyy1E",
  "key44": "3fpFNN4b6nP1FYFedPD4BKPWQhPgkDaYSUxCBqQXPzSkZfpskKs7YABtHQDYrQd6KdFFdnV5PMgb3nMYsimXa7Sa",
  "key45": "5PKkGsFpHjWLfbrAKPBriBBgVemrrBFxxkAKUFk863x11QLsgt1NvQspuHqe8xv5oELdXge5nXiZZchjW49APWbB",
  "key46": "H6ww6DbxXP9uvsKW9ohLkA1oMBKxvHvXB8tmfkzukLwR6ojQR3Rz3xib1nMLKLqe7jPYLKgFBUny5PLPEYZfjcX"
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
