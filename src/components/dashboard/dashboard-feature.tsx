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
    "5a4uqApdE9tRobvKjxNUfFF9uSir14HbnA6VT4LmCmj6ZwVkfCvnZVx6zUbewNbKeu5xRafSgK9goS7mXTNSmcDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x8r51qEoh5pJrZbnWngH2NwgywrSZqAKS7yojGuJkNQe7EFQU72TWUqm2Er9kdHeBKqW9qSc3qGoyfeETCGbJoi",
  "key1": "5bZunEt4SnVeTZ91ZhtEJq97iaPBERPTdvNjMu65uv751yqZsTVceF2Su8mLdm2Kh9fDKcEhASMK6Cq1o5fJ6yN",
  "key2": "5MjMnxbwxZL5RHbFXDJRK93Wo4BjCuPSPRgsUXwwTfjmT8FGWR2pX7grCaPAeuAnzMgBo9NHhvfvxtrCjUFZHoVr",
  "key3": "EfPjqwFu4RqKfyykZBvYhiPzReYogLBimcboEAZCU1mSY2UaNBQLK8B6o3jyG8rsZaei7BzYHmx7jR4K1EexzXi",
  "key4": "qG7sox6TTMg2aKHe7dBo66ALTVRWkemYi9bp3NEM52a2QjHwrm98aUzSuaBUAJVMTZF3AYLe124S8HN37hpyKxY",
  "key5": "4qqNCS2b9sWoi2Byhdib9t6cjZzK6cRDKRCh8hWvuSvZXwK6tex5Bzn37PmAk3C5Jrf9UghdsJmrGD5orRW9PFvs",
  "key6": "HwaJ8wihTqmsYBwZ9nBLXhYvp9Uev97xWxGZYwBin5JZ5RnAQgTvPVTrvJqJTusnKEhjKwgPwofJmBFFjLdJVUg",
  "key7": "3HX2yRHuVQkjVNmn2hqLUTrqgHpKdk7ZTPLXuJbrA25ce2AzxPCXsHj2vtcMZKetjAbV7VwYZoB98kQAyZC5gtib",
  "key8": "4rdkNsJPuhUog6QmkGc8f3Rzv95L5GWgbM86gadhNoHPvxARWwcvNGBVsX1JNQQoCYahAFfpyE7jVGnhVpZwEzze",
  "key9": "4WPX4J37xx4e4ucPvBF9xagX4voPFYzFQZ7Cp1TU3qCbYGg3Ne1E4nfRMAjHAC9aXyxrcG1gwomifzCThKMLrNT9",
  "key10": "2xDmUeDAfooTdswfazBr4Xbt7rHfkWiUVxLpoxZUHBQa9ke168GjMy6z7VvjRR7TAb9jGb6JHqEmqmNCJBwkGbPE",
  "key11": "wwqVdXPVPwoT5tkEctZd4e16wUU4c8C615toBSQUKMwyS4faTZdrD9sCjCmkT8DBTzYUnDJua1rQBBquUA6dNsg",
  "key12": "3XPHpezeemZTxCWg1qEY4uDRhvRisgex9Vf1fJzwY6hUZ851AzTj1f5m7tDXpv5oR66XkAxdPo2jm74HvtMcz3FM",
  "key13": "bazYjKDCQ7JjjQ9c73tQ92YSBPucc5ueZyQ6TNT8RPKHeFaxVA3Y2U65sUdNqQRtQQB4NJJbfKkAoSLT4nTFa5C",
  "key14": "27mRpd7CYbgbT2DGCu9Gpn3ARoVQ6a1CAnFUjsGvdsQQiWG99YacDeGNh8qu5FZo4DTJrwmY7pvcwQ3cSZYHXbmR",
  "key15": "33kMFByPUZRdFDgL9zaNQrQi4WgPAa982tSzHeW71SJcVbud7RLv1qyCwpaGbypW5P8SB478Z6hZkhUsXBoAkJwx",
  "key16": "ktN6CRfXEHCTqunGe2Wx3etGGiGiieiCWy8yiBtCC8ExQZKhUno6CPZRoZJEvdTZdwzZyK4cLMd1tzhDhQvB61X",
  "key17": "4EV4QVu1dHHD1TzHGiZTMXQYNpyh6zQQwrSg3TjShJJZm8nH7ttAyjiXissoRYmKxXM6h6CbZFJgD9UXkmYVXwyC",
  "key18": "48JASZxHEuJo3juN1pwD1UywMREYC4dfQfGYQvBowQe2LhX4a1US9UdwN22kHcQvienLLP3VB53ohU1RNNLpiBj3",
  "key19": "5eAxCXZEYsVHJ8EdUbvA9VSeTYqxTe1zAttDgLXqhff3WEe16sGJ7VBH69oMRuhZdxjjWejkKmqUbYEwcvTpax7a",
  "key20": "5fbZLoCDdtvtXNpfKWcD7MxFS2Ddybs7AaY3CE2D8uxrTAN4d5gVszpHA4b21roz2XUunQTVGpaYfhnZ3oxnRK5P",
  "key21": "2rhLEs1vsJUcFB4D28UqD3xxWkk91tBB5W9UuR6yDjSuA21X2Ad7bofGjeZg8m6Y2MTZUzCZAw7D2TupWmoQ3Jp1",
  "key22": "4QFBFCpHnPUcHzhmh6n4HKSD8JEQMmpL74Wm5D81ZUV1xQuu6sixUfQDigvv3BPybNERrVsaTq2CnuC8VBBeqEGK",
  "key23": "5BbqYuVqskB3MPk8fB2tQC9KNdUYMf4F8YmHshNTF2BFGvtcfwt7Hy3PjqVXTbLdxVYbfmo6FjWCeWGjAfpmW8XX",
  "key24": "38qaYdZAsqiZdLQ46oH16BLJtwp7Y5b6N6EtiC3SA79bCgyxGUNHeHczrKtXGFs9qZwHu231hfhwFXtMkkiwDhrB",
  "key25": "ezzn71TXVoc6Qvbipq6XbfBqqQUsTeWxUAkVSizWaYxiywmJQixSr1LYr4hwAeA284ygwLLFzUBADaLXGspn1m7",
  "key26": "GYUNesZd5HMkkXC8UEE3bhdexPZTJwUYdbtaMz2jAB8bxz83acq3GDYEL7ye96o5Sz4ky5FsSQzJXVmUNi2L9Ah",
  "key27": "37fKgQVb88VQhNGM1nREBCx8VUMiymjgNzLHs7XzPKJkHLPrT6Zin4JojasHpydaTfJyoESdFBEMH6FjUVLdVUJC",
  "key28": "55X5bU1ce9AkvzUtn6WMBdPeh7W6wUBwn8dgvGJJVm2CPbwZmC7Jd1nNQYPBM2vm9aKhoRHwLZS6RrdCzLf31nrC",
  "key29": "yPWxP1wgd1QH3qtPgnT5ya7Jg5v5hd98XWquS5JufKXPQpBK8kYcTXRw6WgNmwcb1AZ8r9brvdgS2684SYvMnRg",
  "key30": "5N77Pm9ugEgyp7jrXFKrin11gVxUr9w2SEA9b9cP3F4ZurDUb9ayhFLqbTrmBGBctsifaxmwchPDXBXwAn4j2PV7",
  "key31": "3qrkdpErPgsTC8fs25nQ4E5DdHhjtEmG1vQyxcCZwiuHatqrear3tXr1egsAm73vKY7F7AchrYbLPGYNUvb7zpMr",
  "key32": "4RBdGErxgYAbR9MELu3FAhEakV8GGSZmRXbBFgt1fwJnUehFVPVTn1mEsaU6AdJc3JqXYhYDhrzXV1YQmR3rsY5m",
  "key33": "2n8bZbc9znh1m6M1camnHCtDVv9kums9NyGBFixoUdgmbRVi3HFue7sQCbNsBua6m5EjhTh3aX6eZFWJCpZNaHYG",
  "key34": "Pm61mzQUjB6MYdiHLccFLcQ1zCvWjGeL2hQMAp3GcTyBeFcwgQk6t15hBnXmCuLqnsvwUBJgz9xndtixpUAwo1R",
  "key35": "321gF5L274qqVzi9YdzkDTiaNB3qLsXgxuM7F4VAzLXKJtxLbo6z9cxeAciAMhVUawTbmb3mnED2Pq9NASQGwpmM",
  "key36": "2opduEZf5Rog87RDUicRkdeYT7524CzwztJXNxw6FQQQciab1cZ12pjE72R3poaivnsjuBcfMq1gqXi8C8UhedwN",
  "key37": "4CPhtUi12vvWF2JQYeNtEay2pfSK2bLa4zMgRKvrDCPu2pqA2Za7abuWgZJUcjEYBxVDcHqANsCNsYi3DsMF8VU7",
  "key38": "5RUSnqDDNReT1HnUMduFEQBnTBjTpxCe8rfFd8tGXxozsRvSFCLSPRDFivVsiBoDLUgXXkESk4m9DQcUqigbxWQd"
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
