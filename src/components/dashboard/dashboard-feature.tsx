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
    "WRDuooZ7pA84jo1Bdu9yWM1J1rAupX8muUmQPU9dF4WcTLh9f691ARdNs1oVzbxcT7wXrQdUbLXTGHycUL91ivy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HoU5Ne3gkEghNNdtWADnqgQZZfYrHkewbRY9iyNf3pL9fpjDgDjyK5tJThDA9yeDFL4RJGBdVUsAG7QhEPFGLBX",
  "key1": "4TN9xiqAegEubJABfhFYRKR7PGMvVJy9KAMLSn6f8u4fqQCiR8yTfixkCCyqFesnds8Yv3ihnaau1fgBzzSssHEu",
  "key2": "3BaTwH2ghn83CkMWzrFYtPndLi8BJH3pPtbhVoPJ62riGdAu86Ge41ZLEpTW4dnqJA3v1hRUJiWhueVKZeuiNJrG",
  "key3": "4xY4M767FfyyiQDyf6dtE1M3h7k9kmBktGcSdoRcLSCSoc5dCE4sPfPEKy4vjKcqLUetjBTbtwsQSuKKX5uqPc3F",
  "key4": "rWjMJTD88kREBCFfjguyuYvZigePKUwZaYz76K8T7Z8tRnocvfkFaqtDhpTpU95GRLoNnEBYBiGCvHwVX2o8gJw",
  "key5": "4XKdB7bGr9BtBPBh1WyGKXeY2ozqNsB3EEyzCJZGiAxx1LWWT8LCSmUvZHL968yrfRYwXDGeXRn5SysSXZNjQRPN",
  "key6": "3aHF7LUCGqZ4NcBQZWKuGoji4ZxDMAvPTQzpKEzzSFXDjoCXskysQEkNJ5fxBM5GHVFzUv8urycX9eRrpDGVzRVa",
  "key7": "5kFzC6hWDpeCydHYZuVfj38YSF1Vq5Yz3hdF7nMkHX5cQSSDsZY91PUsQEgEzEPVYwCzeue326AnSXtXprGGJTGJ",
  "key8": "4mj49NkbJBKdcUgQ25d5reB4jhF6Xme2vXBjraKCJGYcvc8sdvejfWpU9NUo7WnrW5HVD8ynp1Rnzi9SnRP9gkAF",
  "key9": "3WXNFNR4NBtR9cgSbKFN9refbpcgKn4unomFcvaqVQbHEcTDbCnHQJxVyHGwXYHzHTB9b95cB8TnY71uqQkq2hPv",
  "key10": "4LNfLkMQhciQpVah4fKGuejG2ohC6C84AEBJwF3f8mK1Htz6W9bKXVQ3RuhQfForuK7DpvfsySNB3hvu7nh5zhob",
  "key11": "61xjkk1aQcZUVenzGzgSwLcAze574PdAqRvczuic6ixZmQs1QzYsqzki1xGvoHjnzPGK4zsAN82ZiCsF7WBc5xA1",
  "key12": "5SThCCHV5jPoyekB3CfHL1UorvBZvCLBrBEPxh7zKAXaSro5df6aNQ2PTXAfoXX79bTPi7Eas36erM2smvop1gWC",
  "key13": "4PjGixHAYbs5fH7E4g5X32XSj4wLnWDhzx4JEXxMBRcwfHKuK3hEVb7rjvG5JEKn1ACJir3fFuP4UQUKsQvLjbuF",
  "key14": "J61pYnFFPBJdJXv5kK1w7M9j8cUXduK2RL58pzTtAxRzfzW29L2gAdoJJTp3r1VeS6XbuafcMMzc35FJGG1sJe8",
  "key15": "27V4gkBprgJfEt6zC28jYUhhjM3NpoLKyvdEt2GZLm78UwEh2jdrNxkTFzxvwEmoVxHihh2qX6drfd1ghYoihh6H",
  "key16": "2rp1BCynR7iGFVUSLZfmkRKK1qLmL94ihdkuJNkPgenC1T9LEZPSU8PFUSqf7dUYtnWAN8zhcxHNmM6cDLHVVz7j",
  "key17": "pErgcd1uSY7kpT2tsDjmuDodXZ2HE1r1uKAdYgJ9CYR73LWmu8bTBMADcchGj94JbhooAeDRVvhuXE3xoA6rKcW",
  "key18": "bcc3v6PaVsKdKNDnik4Lg9CMV57j9Bx7XBVt4HznhaqTTb349NXZJrrcpSUgzJNtZM59gQneVfuzeAT4cXGh6F6",
  "key19": "3xNqjesdP5Y7ung37Vw1SF9kZLZU513k9xQ16pe8JrLuxRNKCHiFVPr9EqovZckZBY7vwrmFM5z1YbAc4DkhNfUn",
  "key20": "vKt9yNUiaMad3Er2RiUKKydijXc8xBSNP3bxLzGFYT5vwnRp8Jp1xASmLJKou6Zfn1DA94DwoBL5ZWZRRY7d6y6",
  "key21": "3u6tivpZ6JYLLwHEz92vtEnjnj5XScvLbmG46nb1RZ3ZCdz41kwt1uYMghUz5Gb32CP9cSwqoFt7smtTBLYCwX1i",
  "key22": "Ro18QzGEQrod1s86sxNhRsBHXx1JgTuFUsYdRAzBm9MHYQt9pJnq3PVcMXzQaP3AfFpvjy67A1SaudGiPac6rvM",
  "key23": "2o1oR6qPcTNUPzoc8K1YWKAwp2Cpq6RjqCCMRxgjfhrx9TudXdr9tTHFBS6PGBH7BukWXwBKRuvfjKsrJikE1v9a",
  "key24": "5wP54Aok8cWSL6jqEsYy6d9pGCnNmyzNJPdBbLQzgujQ4Ho3arBLt17Y3svT2zwMaSH6CZ28Z8RpZRW1R3EPPJed",
  "key25": "4q96U2LRUmc95yubbhpo6aMVbP6zyF8y9Eiz9qjPiqws1aYxgzzGkG63jSMv8HYPUYJrhufLhjT6FVPkRGG77gaV",
  "key26": "5HreGDaVGJRQEY1bxSyKKXxSJvNBfEQANJiNcfcxnxXzwPHZbAwsY8ccXfimBxbCLdzXAWQjnFJtzNBabcRCg1Dn",
  "key27": "2j2dKQ3g3UA7Gn9dZmnj5oR3MHnJ7qmGugD1W87PMkMHxYgByFPkf7myWHinPPA5eDF9MZgVvbTJFkvyzArGfApU",
  "key28": "4TQPJe62AWAWG9qW1km59WbQUkz1GEYNaUCLdAsUEPPdpqDz2UsDKZCsZmEcGkn3fboSKfLgdPPZF2VqDBBrwFEt",
  "key29": "57CpMS8dY1nkmQZ7SQcxm4RMKoJpVMXVahZBUKjGkyRAAJ5JdhDWv5Ahd2crEV2xetcnQCXRN7kwmUUzPuatvaWA",
  "key30": "2ESCwzLQg5eggSiGvb8GXNKyxBxSF5xqVfKGodTRk8vUuSJ35WyXfU6bji4EuCDDmNsB3xz5CPs7UzxoEhmvRjRL",
  "key31": "nEG5rSfMyvmh3HXnHNb4KAbVjn6XtdEbYn9EGCT9bpbf26SdHiNR57HXwWjEzun2v8GsT6SCrR4aodUR5FZ6jwV",
  "key32": "5bLnkNrq42qbR7BhqXopQmrxEn737vtFhUCGegmmmz9ZuidXRHjDJmkKFioApMq5ZYg3jMXEYNoz2vy18U2tgYG5",
  "key33": "4tJYnBDgvNjqYV7tv9Li7DKUSC9LsfKLvEgARhgPBCf9R9NiXqSaRfUpVjKXrFjVTYyepRSgP7iePhZBf8XiE44L",
  "key34": "2CNxRL2s5AHbfrwGft4Ms7RFT3HRD1ea6mor9SvxLcK3otFFEyPW3JCGfiv1wRkdgAc9g4YCc3SufLRDymomzsUM",
  "key35": "37bmyWa6ibXX3DJjp7gU6h8dxu6u7zUjab1C9djs4QaZNL91DwHmu7hGCcPSQQH33E8BqF6NuUigMME4H4PgrPNg"
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
