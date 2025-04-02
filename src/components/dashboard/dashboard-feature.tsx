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
    "3im9X374vkGRmLcSA8C6yJQ4KFJxSuebc3f7rF99SdRNgo1LssnVVhC4PDi8J4dwKpiX6uvp24UN7cbKh8999HuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GrcBgoz9qmsLeZDpTaHEGN2byY8sgNAbzMcVtjgFavdREi1z2HtSysdPsa3KiKnDjbwkTjNamJ8BiNkPxssvvcQ",
  "key1": "2RYdAYctEQ328ywAPdNozmGMPu6gHVKBaKqoizfcRm586Jf2zrAuyXtZgE8KLqLRZ7NBLkBwD1YhutSDqC2N2EqY",
  "key2": "KJuB4955YDgZUsGAcLmESHBWxW982JESZQkv3XwUwj8jwRw8YDdxCedtbNYPjeXCq6i6nK5z44e1h2DhQG2BHPe",
  "key3": "4WBha3nqdE2cuTJsdmP5Mdrnkmimy7fqaqZhn2TU8Y5yMd85wVJzGnV2vrWvQYfNRPHpfu5FSqPBNxNKLHZjgeVU",
  "key4": "3nTFhNza4NQCNkGw8VYpkCy5BcqZ6onsnFiM4dH3pFY8giJ4baoCaxgJHfeeHVV8dMvfAu25txV5F7zZCgLeMXXD",
  "key5": "5wN4S8gVj7bagDgaBPYf1aAXytzXppSBxSvwzeQY8Kuu7rd4hXem6T4TUfK289EsWMffn54GZPR1opyvJZ8R9dyz",
  "key6": "5cZhr7Bf5XMzWCbKpUyqKzpamz2h63JJ9N9GKTwRmxTqx5ckYhU6e7zJrV5RmbmtvQCq5P7HmXBw9ceP4hGvRkEn",
  "key7": "4XyDT8GaexqqDLXghq8FhhrLFLobdu2p7Ne34r9p67bHU5dDqPUyxjLqfhCoMwXQpuN6zHQAfxJpAXahUQtBBdmQ",
  "key8": "5iod7fd8maovhHX95pytMfg3167KsnSgfPxXSjPNztM6DdNmRVU5KiKvcbvbSUjFaaTGsCGi3MpT6XWs98ZS6FdH",
  "key9": "48VznKiy8Ce1s1DBjY4DQBnL9pBho1N9H4wRSiEJKCodEdQ8DiFA5QA6gVnYSDkdfuqVDMniMD1Ns8CvxiK1x1wZ",
  "key10": "3zHZvr7b52nWg9sygHm6bq9G7nJF3CP3VaSHdnYmSJpsMchLuCt156gzfV979FaJ8Zy9vmM2mVLHvpja2QDPH7ZV",
  "key11": "2L1YkyXWi6RKW2xbyMRoLjpBKoPCnb2F7D3xEXCy1Z5AYVDCRFauMrTE2P2Li5FdwrEmfg3Uz5SzTG9MHZXqXpUG",
  "key12": "6cFtb5JgVEhTRF2x9WyVJQgwT3ojN26odu6B6NqoWadSxj21xgD1pDoQMNWhRsDZAFTRGyRdfYepgUsqW2Hm29D",
  "key13": "2RYob2xPSsYSGtfHadZpcwhGn6X8TK9CdCtuxtGkNGnrnK7nZCAuPkMPgTgjL57CUmaGLFBDKTG9kubvexFbhVG9",
  "key14": "5WfisjVnSXAUM1b4vo3cJ696crNbhBT2Kg3mviKr2ZMqrtR9ntrask47Nf7YvqNUiNWE7SridPCetVF61ZnMMpSB",
  "key15": "2veJoPYryQCPyhZznPpPDqZoyNJJ2JmUE2zCFaKFWZr4a1ZSmgMrwCePxWJQxXeswDHVg1eGHAHtkW3sqhcY8ofJ",
  "key16": "24pLH6jYM68spds9CN183C7SD58rYz38nD8d3BRXn5WYUEkGfibyFtKxxRBXMQXBGC9ZmMTV2mm3ksYe1zsV3mL3",
  "key17": "2GiAxXD4xnpBbDLe2xfgiyxzRHQan7zLj2Y78Fy6ttqupp727Z9SnJm3u28Eq1hKKVDMH9sTAQPzFjREcW2dUfNp",
  "key18": "2RdgGQcYMxkvc669PBzjwdcp8TfZnQDHcbPsJPLXDcQeF5Ca5bvyMfyUNCoFCfjocBAi9SKZ6PNFnqJQGRYqJyih",
  "key19": "47cCQRm9oguaW8CxURF5dYTxTpEwHDtXxzVAhxVR7fVxLPLCFaurLcsMxCDVkix3DH72PWWusUA6H17z8GuDEbqN",
  "key20": "uVwPZkYuBWxLjzauig2DzTPpckhPAEeT7evsKkiUzayY7jLFkeJzrxwVUEnQ6fsS2NfSovaDC9hpwwpt8PrZcbx",
  "key21": "5UekzpUMkJw4zqsUJKzRBGma9NStfd2wqDzxh5smeLtMRCB4cAtoeNqd7Mw5WvE9ntAMWQYaJNhCDK7h8f68rCbg",
  "key22": "2GhXrb3Mfji2Daqc3fWW6WCGdvFpeqEj9wSzXFdgQyPhSsnFC41t6QWzwj2CGKLq3gRtziQt7iFW2Ne5zESYPWo9",
  "key23": "Tqt2Ju2VMs9CFmPWG6qv3jgYsu14vax88Rq9VytXVHrKXpEDVekoPqQEaqN4U2quARb9srB7sdiMH6TPPAvbv31",
  "key24": "2HizbsUapjbFbikpUvjxxuv83nRjr19npjwiVpH5bPxnzUugQQHNopfqQbkCvngPxhQoV4Vjg4fdnNs2VrAZRZg8",
  "key25": "3sFUm12CuxPnDSh4pys6CGk56ckydfZ5XqbDZpPTcMeFyuCbNe4ajLGmV5U2GSWtZqN7Ut77tCh24mPNAE6bmhtx",
  "key26": "3ZVHcswUnTTgsAMGs4KRZQSwUkyULEYBev2RPY5NGwhotkbES6Likv8pfZxJ4g4fkGEeKpDbez1N2UPznuv44dNL",
  "key27": "2YNa41fSg81HexfrZnyiKaDDaLvZz7ZJfnJ5wQYgzvhGHMFxNc8UbKiZ611gWDm51TMTpusABTdhN4nUy6DxRwWG",
  "key28": "3E4Qrom2dGoyHpcqZZ8y9bEtDHPV2myJsVkdPhJGixXNjnJbU5XAH1EHSH1TbS1TfnVNNxqSURcCM1uEeA9WLfBw",
  "key29": "35mFKmNVdd3p7e2HDWmqSThqFZ7czGeGxafAQ4VRo9PwdUYjqT9GFmZpQz1KXqmdyFtTg4BtpH3J5Ach5pPpQJtF",
  "key30": "3Bh9UYswLnTWnZLRyZZtx4WmRYw76Vzn8Y2YmDA81GF6yQkajdjmoYv5CEoFGkgxApPPJpkZfKzLU96bfiGLPj9X",
  "key31": "3MvaeFXLQsgA9tc8h1cCPevBE5uCjeyFMpKJ4z1mN66tJ1JeMauqpdFYFm7fa6JbBcKSFvEKsdMCh7MtzNfQKPRD",
  "key32": "3nhU18rdg9CGJfhEYsUQyVTHE4PEqArMFsxQA82MT15CJb4wmiKsX3FDFp6N2KnLaLLHkr99mFGy7zcGifqP2rYW",
  "key33": "5LmAVfw5gWnp9YiQerc2EyG91kzEYmiLdqvBui5bjSCrsj6tYKGewV9CzxA5SYopHuYVQ5Y1DMmcHDpzEuPA3n5g",
  "key34": "4M3ZwfDn9JrV3eSnf3La2cAGvhEH2szY6TeW6eH66ajbMHkrarHjSzmDuXQTAT2fV5kN2EcVopLYmdr32LooaxuW",
  "key35": "2LKFZ6Dq4bM4Xrx5hSQv4ukRm9XhXvJVeuVyiq5uGBTPVH1aqsUnMD2Uk1FUBacqctzrdAVfVYsnTQcnHWVDCeqm",
  "key36": "fXskUobKHb8UovDabiKkz59tzWrtETYHpUisezc4kQnPJMLeRX3PM6mkc27hTfw6bX8WLTQCazgFARjHnxhQmBp",
  "key37": "21Jb2QdrXzfU3QewzcULRtAKo9qGoqrf22P8xTXkh2L9D1mF5mjzrRrGGGceDkxF5EzRETqXyUYzdDmZN4RLE7VY",
  "key38": "4bFkNHSZbpTUtZCkqgPFTtgjBr8Xn9xYVKaUBnZ7otx8wCGoUs2P4ZwSADY8CnNPesnPxeuH71AxpouktzXRBmHu",
  "key39": "5nzu3FzyKtmoCT1uHqTvJyPeW3C587wtuLtYjymnLvVpG3E9Tq31aur7SHnQWm4gmL1qMjFF6C2WZBvuSCwQHPsa",
  "key40": "5RCA7UnCxG6cjEcEvqNKz1jXGeR77GpdJXt93hd4BzY7MPKPwRadqt6t6PNvCd3gfnpRFfxic6ujW8xahQfKLd9v"
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
