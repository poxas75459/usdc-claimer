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
    "2bNoFST6Ra1Fnb3o24e2RwQixeKBXfrznHmiFEpef2JUMEvYyLfQdfiL7qTPmwWXe9hJQjtx3LnXcatqxYV1seui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pZB7h7w22c2xbjXQz4hhdjVLTCsZ6EMVbNmuk2oqXnpdqvRcAScdRwHoEGFiJfQsxLCyJ3BcY9VHsnSTwLp4Eo",
  "key1": "3U74FkykdgWJDVeKphtgefPxaG6B4furAKoJtdjoY2Hy3pmgxnnhtSG4NV3uV7TzUhC3TSszxw3Hi3aogUAKgJ74",
  "key2": "NED4Kjotg8wh7zsXpzSHAnMzz7Y6YcP9VWuUYqkenJ2AkuTyKKqcxSwUqD9hh7TmaHfhPxznLztExL7TnJeWbyR",
  "key3": "3AzwZuot9SxzsszEtE7ddRWuDz2h9nqpxDCjSRBxRgmKqSR8NBdtYDruFMfn5hT3XTcndzHpMB8eWXzqtVYzUbY6",
  "key4": "5otdMBZ2c3GhdQ3mCRp3gW54L8e6XApkrcKN9FTvKDU1PgEMhpUf8VPfYNsavUe2rFeCMcabgYaeDwgzLTJ8erY6",
  "key5": "5GtZZfGSsiAzS58jntgD5VnCoTXk1XgujGjxntSGHiTCay44YDePt97CmEnEA97Ju49eD7bez1qEMnL2aqnWiL1K",
  "key6": "5EeZHhwAebVm9WxRBKa6KesS7qBUgKnPJUjVtvYFL1HSciCjREKMah18U3mTZxbji8FFNMT6r1ttK6LrSXZ3cq8D",
  "key7": "5wEKeSzzHCc1eZ2rrWWgMBfgTofiaqekExQNZ9h9rJNz9zHDw82a1jbBYY8739qibSeMcmvmNhWdRP5YSPdQFHny",
  "key8": "4tMaQxnoVQ9dGSpkFrowJcJnVQn3iwiSi4zBkNHVEKacpyQhk7o5HtuZ5dkADaxqsTxQA77NCchUs1vZmTha1uNj",
  "key9": "z5FAuPTSZE7zhwSER3UzqeF3Nq7CMPhjGxNFi3FSBEB2EUARUDrvFQrF1r1Srf567KVKw1GgBdyfATwwTPV9Tqu",
  "key10": "FT7kboRFAiv4WSJvqtDP3XMHKm71JTTcoqs5GgspmTFSfXncSwrBwGns4HPJxsf1swGxi7rPC4gxwoaJvh1qizy",
  "key11": "2MjDLRfzbGPaTPCmJoUn2N1rPD8J3wp28p16CZPCboTRD8HShp1VV39JMqiEFD3PQ4816wDsvfPteNKP2cgkxAka",
  "key12": "4CW9H3mUZXn7sDvqkEvoRfRC5SmWyrbBKCe9r1ZYFBcYFYr54BVSpgnEVyYswrvcC5x1Sbc5tXjYJKJDsyEtMXzh",
  "key13": "66t9TFZTfaPAvHEPJEU56SFvKE1CZCKRv8bkDojJf8y4FhSeEQbwt1f8AL2ehvXCww9LDe6qZgxy7qcon6vEywX8",
  "key14": "3tWbzHX7ggiYV5gDK6ZjyD7dKv99CqkwTepcWbTGXDWrYCNHr8TMMM8MhJiiJvTHjAd2xNv8zUSA8V7oyTxwVv4T",
  "key15": "55Y4fRYjYeGBE4n4yrikzTYa3eCt8JQNkqHUgNBw7Kgf7GFzEARk1iPp9aZbGycozpW2NRENwzRZFvsVwCd4rjfS",
  "key16": "5XNudJgmRcmMpjoUwjGFyQGemC9DGUiY9UvHxKzHgnf6Eo8kmEiqhqUBtHfn7qZG8y1KqRVqk1LW5tuy5ZGVRJB2",
  "key17": "4HZ5Z6G7iswrh8E9JFicxJns3W95pBt3agvgNnRAMgbdBdh2CuKCLUgjNiEMPYjGSNX5pfvf6d7SsxpXijvvVRCB",
  "key18": "66nD8tsDqfRUn61rhH2CQAsZLvko6LDcMLzYVRQ2SPiuTYH3awrrmyQTkgYioVEm15wyEgfLFNUDe1CDbS5UzXXA",
  "key19": "3CUqYx8tAyvGs1kxyX4PWuoG8sE7VxgtdP2JoytVLMdPDGkP2oqVQQRTHgWiVK1nkJd6SuZZ9KQ1BPAbkK6JsmrU",
  "key20": "5zfhBF7GxS6JRZnejqUBHBYoubus7JJ25pLLBDRRMaW9jPQM4nTjuo9Fis3XjQyZ4UXvWLd7Qm5gUY3mrBt67xVr",
  "key21": "3t4k1hsb5fVpDB7U1trmpBjQJo1UBkuAKVHvYib5fFi5qwX9C3GzWBfhhwn2rbd8K4HX8Znh48o78fYfZYzyDMWT",
  "key22": "2n2Vn7FxhRpeivCE4WTBDqesNaDLe5HJ5HDQKzCsizVRLwjoeJEi3RE9ddtNoXuUgu57gDFXrpyAffcj5QaDun4B",
  "key23": "44UTahCMUw66WeJHAwT24aTQ1tfUuKdjSWD15bbmnxDJ41GoAqjTrZdMzWnfRFpkfaJnQqe86aY4Rv6sBfyXahQ2",
  "key24": "3jBdEYuuvVMMcMCzc1cz7HznmhJSuLBvaT4DpyVbqV8pAEiRiAcCSz3ShRvxc5LhTomGuKhXehkWpxkRv2A8pZ7Y",
  "key25": "3KJzP55cr73YkNvH6iXwW1sHsU9N52UgwUVGJ1EZFmW9Uo4ymnqBMoxdqCWBLgaM25yoA5jmHwvmYvhDTR7rBt9a",
  "key26": "4ZsL8GqSKqo1yrnwh9YeeuWengcHKm1t5U2wtCqn1bqJm9tHZcewDDYyJ9bgh2dsMBZR62hLtikzWA7u15igMw5S",
  "key27": "5ByqRsBAEiZM8gtAMojmwWwDKm9nvdJoMpL1qUkFUBPG1cZzPwicmSQfZyakTLrSxaQrmMPJ3K6xKJvaDvsjLQv8",
  "key28": "28xLM8qXyGCWpbgRQJnzQFSSrmH66NjCRnn548vm4DVnC8Ns617VVic3KsbGPFvjSVX9mxAxziJLsSJXG3Fu9K5e",
  "key29": "2ct7z6g5JnZ1CYpM121neWuXgyUUnXqQUxvhjeU2oYhHaPeTj5nwfPJ8AVdKBqA9VTz8UwGfbqFPRYnpmQcxvEy4",
  "key30": "5CyxMhkvytB9p5nHamvohTBfLkdSX9HsmsWs1V6HxEnNk4PW1AXnPeBAGQihcwGXFRhqvQ4RCNCqWyYehVT3P9MN",
  "key31": "3i8aJ9NbeEaWQJiy8FnFhhWCyWs8X2Uf91HVNUWJeSpAqZPe9SGdDHwBbHmLFk61YQdDCmPySGAYingVjofvwvXX",
  "key32": "63W6AEnmKLYsXN6XBkRcWbu2mYQ3bvECFpbxDjnEWz3VEVnD9CxkLcwg15BsPFKFUBMhpYyAP68eRfGC4riA9H3Q",
  "key33": "CJZaXPgiCenz6i1hCgr9HL2bWN1uF7rZq8LK8JDTezWcxy4P3hwkonQrDi9qHREGpqt99oyQF4xLY9hhAUefFmJ",
  "key34": "5iDspG3vRVPdN2DVEMxVptCxKhSYMFV9c8QpCJ5tAdg8rBhSsK7CLMq3dg6TzeVs8zHPaVYEjihPCN6HV7wroQS6",
  "key35": "evCyXwwsNBNxUzptY7Ncu45mWK2HzLS595wXRny7onPPsiw7cQat48t6Gb1D8VsbiZzKxGYxpad1vTmNWDTFwWa",
  "key36": "x6ndRMqAEEcrWR1s7sX3LmCcfmUdMJJCuEU3Lhxy33SJFwoPwuvZgovahZynuRAzgWwmHGsYdq8mZCCzynuTYmn",
  "key37": "4zSLKLFHezRwedQmNUqQaTnkv5sNvRfYgx9NMkh3s9b79fDAJYKHvhnSUUdUUQWKzhEJSn9HWS5Nec9r2FjTiwmw"
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
