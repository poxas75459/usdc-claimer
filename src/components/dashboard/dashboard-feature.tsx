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
    "27cJteTmVF4fKhkMsiUDjxqFHt6Qt6kwDN39YpQae4SBCsMXAZcs1roeKgbLWNrF2C2stTKtFdBAECSWgui2yCBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F3kk9hJkcwe2kacbADKVrfWDhBr86RLteZk9P5mk4TXrhGbco2sVaWC1GZVG9toSBC7bXDp7FJrz2Gvtnx2hLu1",
  "key1": "2MDuZkaKg9xW3EdUZKCzLY24SDSbFerNcFsj9YCP8P61yh2RBHE1ozPqxf4pPcW72F6V7FdM4xwaGVFhxpGtZFFU",
  "key2": "4eEsWZ8ZRTtwyAwo9ADz1kja2o3X9QxexjP1VWES5dAwQgPUZy8H8pSyVmiTDNSSP8WaLzu5msT8FZewS9PQ7VPH",
  "key3": "3AQAtDuxPPCEowvkoSaih1pVFGacfJ35nwwnfNcuU2uaFQz4LtpTJ44dqzmu215JggtaHGxsAMbVtmhgWWjs883q",
  "key4": "NJWKJgbkEKH3jbqEPLWPUEGucFXGnDwp4zGGktyaAeH2V1PJeeDANjvyn3zT9B386QksZdF4Dimo6QeiR6eaKEK",
  "key5": "3KC4YxHwyLBVp77tu4Ad4XNAKKjkxemnR7WzS8QzpkNNG1FejbCpMpP7XUfGWb5GrWmUr1qmcJvsjroc1BoMHtaw",
  "key6": "xMRf8ZoEmqktvCcHcku2adSqd8QxLNrH4B83detVhrwNpgFoxQSWRTSvB9KHMcxwr2mju91v3DwyvhnMJCCH41L",
  "key7": "5snhgYtXc1hjPDbYvmuaCymGNVA3fWoZJ2X6xW8f8woEpDPhU5i6YRQmnta4jDEn5Yn1Rt8dKs6FkkZpBJxiWChp",
  "key8": "4tV8VK8UMUxeaYnrAPZy6NDHxwqceV2akcaKTdNhhgG9sM1d9kpusNrCWDVgL97mUtbkQp8Ltr69sAp5hZ9G2jBB",
  "key9": "2hxtTGxGnNzVaN12JsUUo9RyKpsMWGT5gKWZF77YuPw6LrrVZYWesJxf3N7es94QJg1n3FK5F7P5euxnCWc89MAj",
  "key10": "2T2LgVS7xgZPGb8ABjTUNfnfvWZQni6CpAVXiPh8VrpHjXPXKGcmKqyGKuKbArcxpaHyKZH1fnPoefQ9WrAX6b95",
  "key11": "KmiooQ1ZfVrna7QHeozsQfz8maw7K8rn9jwcFNp1epBFwUdwpfYar2AZf3DZ6Nsjvz5q9Msma5hBYT2zitrPRsV",
  "key12": "2esKQR9L9ya4i4Eb8SFZuSvdqPPsehbFtsAMzUeSqh8y2it8Ct85gBwCTwnqWzaPPjgUWo8ztdt12nCPYWRwBnGU",
  "key13": "5a552RG4zt5JMagj5NWdagv2SstoobfyQWia73q3dn7tBbDG14HLAVxxagG36LK7Sfiz5fxsGTeUAoFtFYDMm9ti",
  "key14": "3a4UFYqEBf63SVddyVFscmVSjkSFbBDTRe5HXCru4pndKysocxDF72hmXa1F3sqG5nSffBEX2eW1LDJJgv2Xqaxg",
  "key15": "5efW8TzZ6zeHf4kRNvRACyhEPXJ6fTG4dDNWascnwAvFB1URVjp3PkRw1a8ghaH3wJB1mCQTxMUUzE5TWWUqSVx4",
  "key16": "4HsGwuyjXqrZ2qzFKQrsYzTKmyLDxVYtqCSP9D8HRubRU6FpAz788UPyf2XvvBfi35V6MTfEwZdJYX2SJkpJpFhE",
  "key17": "641qprBqAS2g1ab3ffAy2eHnjTbrzgoJQ6Qff1Jy2trdHEfMFKn3jYT94FLoYFN79DsJxTPhdeVyHwEeFpHMG5gU",
  "key18": "5n3CaHPpiKZ4W8vxhCTbrmojkhU1JzfgiqNeoQ1dJpYokouSAXL95xU2osDTpFPwzJZQBnXV9Ax8DtdCLa7c5e2x",
  "key19": "3rU354sk9hSNyf8Gs7XfBewmyAcQhyHW8DpXNSckH11Z5fgVQAfqnHVLkKbVhhBV8pZTRrV1xeKHfEeJmFG7Jczo",
  "key20": "5auehyHfG9PDTQpGndp4iWa1fV7TD67Sj64hh7Q3GCK7VuJVXUqb37Fm1k6ykDJDLqo1JGBiNrbHW6d3zS923DWq",
  "key21": "4Cr6juVApowAxBWqWyeUjwZpBaEdA8tfWSWWXKH2mXGW23PyjaBasX8EsxWMjD8SmVcS5ggwQnRZBmo9qgTssSeA",
  "key22": "5zXDZtk769tADxaJdhXotHoyXhZJbwX6b7am8Rt8EcuqQf9ceSuDGp8b1jCFWrM9cT86YXLQLsFcML14VFpaiBuu",
  "key23": "3PgdpYzhye8P3i73PgAEfKdxPw2cxyPWFskE4N6metNc5FhHrLDUqwrvRdNmm3yf1hS5eTLHbUNjdaq9fiXmKELF",
  "key24": "2VpmDSxE838Q54Atxcrw2LTkRVaUn5FQmg9wX9Uu9DRyRS2iBLoBE4XxEt6wj88VkvH5cV2YAeFzjRgxeCKUzZNh",
  "key25": "3XzAiG8r7ZeqhKHLsD5AEVkGdmG2crhVFh8niKg7xjN2tyuo1vqcv5z2JLRJHfUy1tQiABQPxxkDnNNWceB9DCm9",
  "key26": "5DAYPq1ALb9PSELWYtcNc5PcYk1AQeL51tw2jkT4JVCNTcQcoU1pUC9kXMQ9DETpDzCEXaWUobNeqS3V6V4v4VJH",
  "key27": "3umJCKhB3NhAeGQr3yDjDUH4YpeMkyPLeAxQYjXUkg6wwofepGszy4gWgPDRFPtJWgpSwg9jEn3PEuMdKhvkrrEK",
  "key28": "4mYKAnutQoFFFLH55b8mNPqtFtyPmGpR88zZJBnzntGQpAQsyfAH93Q9ja6LTTq8vonDXnQuK2GEKNhcWLcKREPu",
  "key29": "2mVHvug7x5q26E89BrBbiBMBKR8UtkNPBG2jhqnDRNhK2N7mPxkQz44251nqh1fKHNSBsdrCsLphhzWzbnQGqbNM",
  "key30": "iXkBaTAMRgSUqJFBc9LSGvWemzF4fPVVsDdZhdETGKV5SpaBFZgBe6PKzHrEayCjdUakBJxLMi9DjZ8xvKKV4gn",
  "key31": "5GcQFbEpFon89gVUFscwUuYpdZQKM7TJBcXn2LM4BwEkGr5xYDmGwNMM36zwxFQxX7aAgohVLvnV8Qpz7EupSj4r",
  "key32": "4ydhVCE1j33Sn3PixucrYgXJE89jEmsz9BVjrQiWgWC767hyQj642rnkCbv2b7xucUJ1dpptRy5ikLYeezMfuFDC",
  "key33": "UbKDy7MGnth8yuG8veaNyen48AP4GxJ7P7S6aRBhrBX4W3XpwAUHc5HkzCeDpvic2RUnjAvmX8P63hqceb4d7ut",
  "key34": "cvuF1xFz6YDBNwqpVzVvxQQR1yKNLZNqPufYnJUhxdK7VrgMJKvnwAC34SYppkqueifh3aZ9Kb7uvrX8KTGLM38",
  "key35": "3trnDR3Bu2TN2dgzWDDeVKdHrWaQ4NJakPYozyhEq7BoDweXq5onWWCohK1n6tRnxdRB1ZU8NEwUTp3eSmCQnkZA",
  "key36": "3gNpMMC5yZ1CayrwUqfuKbvi2rjJQETLg4Y5UvXC3n52iw7kgd4E2vvaV9cVFWKMpSH1yo5NNoHKKTRmQxSiSHc1",
  "key37": "3NLqLL363FVJMWbNYDxh7jseN6BXT4CfFP2b6G8oKGdc9qeQ21JsWGzFc1B7LMpP9yETLJ87EqbxH7U5FBeKea8C",
  "key38": "4skNZPsZzfZGeg8boZ4ryUkTbwDZUe1Y6cNpDcYQdFivfuzv1vbqBzSKE9U6Gu9KstyiXMy3sSWW9eHdkxe3nxuY",
  "key39": "5YgWR3y9b4NRkxvpdhEKffruT1zBCcTqQ44bpRaD8naM83rs4fXitD7gJ1ouCKsVVdjMFsTeCHarSPEjnubcMMKH",
  "key40": "dZy2ZeAKog4L2suCeQYuhSUUCvNHmBuDmeZcxm3p3SbgRt3KkU6ZQ76j9qjNdP7rRqFdQk5x19YENZV3L6vWmkk"
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
