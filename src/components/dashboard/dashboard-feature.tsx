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
    "3qoxt5sSR5dgZccw6CVch8MUU6gLgV3rLZE6BGBQqpYcH8nMAkWhhjRrrXyH4tXPzNP7yj8kdxHPYpbYZmui7Mfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FoSjRW1W2BueVmqVYByw9ywQYDwZeFmx8Sn6nhFRkn2DnwPt4q49ZtvzVrxpk5smbsLe7cPCPgxNX3J5qmrrfWN",
  "key1": "3qDNRzTMoEvVwH16T2ZNGKx6H1mnvgeWxAVW3pXMUZC83DnpqfzuD5TUNnaBR2LNWmaoCgJP1wkZg4C1RSp48z12",
  "key2": "3dW7kBN7ycRmGkMMEg69nJTZkJZwaq7RmvPL9WequWonE4h9AES2MpKfenJtbUDqFZgkQT4sLqjBW52pk2wMKYdC",
  "key3": "2fCKWuDKJ8SBaEzAQG7JEx2gdMkGuxgSsCyXuNSkeeR5tauYkKTTf8H3HqFmTVUBThsLYQfLVPwz3G7Ljmt9Gvhc",
  "key4": "3eCnD56BEc1vch5WGHbJZnqytVWbjyacjjLHsTH2QaLeXBmXwtsMSNGqnjHoeTkKuniLCTaEzBHxydD3LP12dXcE",
  "key5": "3NNWtjbG1AH7d2PtrTknd8kXtKC6wPXBJPaeiq9mrFat8JDhxoRUoNHk2joHiBLCtaoq3cF1h7vHnUkdAf1cCL8b",
  "key6": "5T2b25voqTsJfSkbuwctUfXe56vb3Tqi8PoVbXoYF7hcLv19qdSkfwQi2AzjeEbpwVFTgCvfMQiY99kvSXZ32kMS",
  "key7": "61H3PFd2gwnmZmtFnL5p3MCXqRzJeh5L5h9BimmtJnqyRMpKqY7SvABPhm9qNxN4wty4FWahY4HxB6ZpCsYFFUiR",
  "key8": "3bZKiwFpoM62ijRCZabTtDRps7xwNxr7Mq2aozHuEkKnN6C28pdEpn1rdcCB2vNKkcHxNFXFZueYboJkdBx4v7HC",
  "key9": "2dL882JHSdQiAvRziTJEF7pLGNSPQy2bB6JYWjyRCRDp7oRYjCFVYRKK7Uw6tAbzQxcvo6fxsmkGgcDH3jrvHHRN",
  "key10": "MVDqrhaX11QqDLMCoXBMpiVgZgU7D6GeSEb2LcnXtxWmZe2D247aC4VMzLv6D2sdQVJnWDbLhmRSy55Qf1an4BS",
  "key11": "qpDtV4sX5198erMRf7ff5oViefSpn7gBvgdv7JjVqfDcRr4CxwhEAPhGG5xHU4GhX6FygoUkVrgR78ikZpWqE6v",
  "key12": "2e91GECivjBPhdotTjJcykmdnQ8EAVyV6bDPVcPuXLwn8DdUiNivLBZ3zN1Y4siD4DTJgncGXcq7ZqJ7N1pGW8N5",
  "key13": "33kpBbUhZt13NurK8TVrVqiKpqubZ1ejPc9oyLw7v5bD4oosAp57yaMiigNVxTMyWs2CJmHcfu3eBfzpyi7dpoU5",
  "key14": "3bPseJaEgmkQX3TWKmeK8GKgygeU2smL31qu6JFk1w1QNfTWzguGKidti6S2Gqjey2Cn8rhGyuo8XngEG6b5KHC3",
  "key15": "5hyhbdjUopxjpnFxUpSmEXzhi3D5kDfLcqFRL187Vyv4hPdpkWDBbz8oYq5SGt7z4aXp4KnhCKi9BzjXyTNDMsht",
  "key16": "62Znj8ZJqKbFtzpaK3Wf9ZYxjTPjtECzYR2KPXDKja2bJ3BhRQi4gpKYbxSgkSjG7pRK3ZkzL61BXBbJqjxtaiXJ",
  "key17": "56wdnu6Zuy12XUoBNX4dqcCcSi9t1JhUcTFC3trxBdLjZvMZKF7EXxEUTNy696dd7VFXetGqgdr6ByRmr3wkxnsX",
  "key18": "4CYgqknnWJtaYaQ4uPQMLs7BEhBP6mHn3LmpNKmVkmJdnDAv3z8VADpDkyUmpmiW5fTvQJUCn4RQpyzLNWruNkdc",
  "key19": "4iEegVGhYjHf9JV3fA6VpYXoijuJmCJghANEeSebDaqYXvokiuj3h1rTM44sUwFZoZQ3jM9kTfgpRRmqhcHfHzHV",
  "key20": "3hTYjYyk4jeex5rXPhrub945w3VsNsNcLCeo8Mt4MkmCf1BBD9rH2ne8eN4bPj7rNtaoNnW9FNwaADL3jDH2Nknv",
  "key21": "3risbzQuEMVts4Ebui9ZdXmDFscacx7B9XRoGhAKuCbXttUVGkeThPZNhd8g1PKLzgcHGzBbttACMtScY8dWzgrJ",
  "key22": "35MppjNB1N5ZMHwkqh3h1jDWfLjW8udGDersjTi1tTHUiEvP4c2aVTV52xYZahkXhhqEKtjh7AKwwd5wSdj7Js7M",
  "key23": "47dmKE6hhs3ocga88CXAQe9NX1wjo3AeQixHXDbiiBJGcjYKJNyNfYFSMRAq1NXhXTn9aR6ARFP9GAKUQqTf9YsS",
  "key24": "3p1DLB3jnvoyiXEJ6dTkDMnRRTYecV1jZNHKWdzoKYsXFeuYE4JcHyUx9rdxYJZ4QkrPmJWwukJb3xy2GstZ6cpE",
  "key25": "r3yaNkoVLVtiSaqLjZ8Z4V7dha3kYkuNe3q3WkzUeAN6vJN2Hywev8ggdCidmYXiYsGiLWjwDkveHBk3n4WNTA9",
  "key26": "34cUZYZxdEPDFQ8kjMpRB2gAzmLzhRuD7jNS611EBuU2rwPg3rAWycgW9TMk6VBj8FGsz7h3zw9DxMVjeFp2No7m",
  "key27": "v99UuJRt33XPQs2g6S3SCKwQzWRCzXqWWxPWp3KhUryaDRSuZvCrLRudUxzfAsbZdXazaF1t4tp34Ebif9bHCNJ",
  "key28": "2zmQukoMy6wMzKfz1QsVfpYKEbb7diTr8xn1nXuBSDNCLCCRLTqW1i3iffLCJSFHbao2pwEYsFtSp49LKSZDTGk9",
  "key29": "2Pm4EVkA9E3x9qEYogRGvmVSGK24Px7h4LDup2c59wquabDdmKx15vzKdFGAV6JwgK7NzaEUPMSenUTcmySy2BRH",
  "key30": "2oZukT9f1uxva2DfTPyR2UFQrBLLRdG6tvV9KgyYMBqKeE3KYB6FZ9F5LemeSj7t4jbUWJtDheiLwEhEPtBz7LrR",
  "key31": "5qfjw4VnsGgHV2Fztietva9k3E5UwggCh2fv77GCT4VU4vVrq49X5Azg9h57FcedrpxYh3vU52o1EbYYfRuczqmd",
  "key32": "3Y3uz9KbuC73UpaPHuNPhY2obxn6C8mzak5ohAtTEMUohnsoVgeC82TAaYMCLVsiYb2oicHfHob2ekRjch8gZDRu",
  "key33": "5C9D1KzsBbgZuRzx5X13PckuoCBPWr7X4Q74LbT4yWU5jCopCeDYGGPYeahYGnte759FudSoPS8HHYMHAhJVaRzS",
  "key34": "5jYkAAPkycHmNZyK1xKdWfCitLMqvUbXwAfqnvawdkgMZ3Qs59PVxoMfwrDxzQuS3r17t4x81aj2qssyqHE2Q2Dr"
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
