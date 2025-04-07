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
    "3pcH4F9s3QNcmc5kqokmrUXr2pEKzrWLFUkoZtZT9yCkXtJotYGZSQtEA5JggBEGVtWkEDVy9bqWyxtbqSL411Br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KK47VFv565W2fodxjaoJc6eSKqErRCRYMGJBXoWanKRNRVnK8RVc5ECYnAWCVVJyBTvFPfCotbyypWs4JLaDzA3",
  "key1": "2svrexwRBpd99i2MxC2dTq1GhCec3AePiixnvFLz8YQJyRndLJ5YVi7HcYVYWNp71NunYZMmgAVeRxCmr9P1dZT5",
  "key2": "VvBe8nL3HVBvQ5a551NxtmZSWagBfd6JZfGpXdVzMoaY315umGBrh8ory9cpPoHqowiKyRXdgYKiGYuxjoDof7d",
  "key3": "57UZzaaEUaHhf7KnstsQjp5HSYnYTuGNdQ1u2TXhcs4od7Wg6Qte5HrrFqjJJeb4QtYmt85h3W5dKZkGv5tHJXHu",
  "key4": "63fT5sGK8p48qteSj1qMDxMwAibi9eimUFENiSwRgzHJS6YDExw9DCTocuSNXheVMcouj3gzPQAzpePhGrLFmr1C",
  "key5": "3gvUNA8qrej3wJUYajR1ye56kdWZ67mKmR34QzHHeSVJGQYywe3Z4PTmj2bQoh91WXTs8c3hsxiAtCqcJkukZ3o3",
  "key6": "4oqpkm45rDAQZXtto9uYZwdPUWzqpLnA3bCBezKY8B8U9nGJFcURcdA2sj7JG5jci9z2UZK6786oBC6wqSGvSoJm",
  "key7": "5mTRhJXHcKMBE4TK9r4YKEmmfMA7pYcBh92K8scXPz5X7S9rnBrf4THZih66ri5weyZ9f1FGksYG8hNXsKx9bkoB",
  "key8": "3AKhqxG5xiaEZgS8dWssRytznMBhdnXhfS8KzJSv7CzDZNoKxMxiPYPebDYfNWDc8JX2WQJpnyTmPCEAzQwxrNKG",
  "key9": "3BcwmTUQGmeqyPegcHE41wPiU87PFw6XZt2uzEkA1tWb5aXCq5mRWQcxNw5YExSVnkWPjuWm68rp8is717dkxeF",
  "key10": "2bVepL21on9X9GaKjhqdCT44o1JV5zLEvanZ1vLMw6V3bte4TtEaKfsNU25N2SAZ6T7itm7PTXnNK6mHoDGYwXQr",
  "key11": "3PKkTEqcomjqHDCMgM2ho55EULCa3TUvPkPMnHVvEpL1KpLSm6K6z8hy3aqSGe12Vbi2oAh4Jv6gA2D29vK2rEb6",
  "key12": "3JJh8LGgQB11qMZ8FrRZ8RFyKNkkJ7ArLGVKrj8HCxBEQMcPfUUWdVbvEwzZ19jezCitZaoLhpMFEbG7vitLfVkA",
  "key13": "3Pizx8vkuFgbHnn9KAfCGeUm4vfaVhtrJ2YTbAYdCZt688mirUbnPt8mMCUGBrzsbsoFT4KoAvbPjoWH7kCyoatn",
  "key14": "4uk3KwY3aVacoLhXoP4xpZxwtsUEGsq2iTezqmG6UWEW1dywsGtdYLgYHjABnRn8qwT1Fvyqw8r34dj8iHHrzCWo",
  "key15": "5DbLGzicHFK8JYibN4f7yLo3MNHgx9ReHHTL5gxAWwLM8NbBk88DdHLdR2BZgZni7ReowHsahKWNSHhvW65mT5JP",
  "key16": "2ApcRhdMUrsSwqmZtP8cbaaEFc5NH3TQ9EkrNorMsq6zfYHfYTdgTiWsDY6FCUwCCQn9P4xpkWJurwvEAxTq6qUy",
  "key17": "2sp1V4orjE9WpmugVfYsRnLojTxZDvTFybEALALUy7PEHnFKRF2pj5YvyDgb2pvhsVeM5A4NWfPuQvaqthtfKAV",
  "key18": "43GrPGnSk3CXC8UShtw8Vb9vuzJuJKGGyrxqA4D3113Xo5vZEgDpPzP9pnMYw6CNRTxBnG7ukX1W7tsWvwMpSwmy",
  "key19": "2CR6WdeqM4i8sRM5oPPEshoxMZXmc28EtgURWwhiSMTYujMnjdNfxcrCUmDEgrUrWcbAirW7nMtHuYoPYkXfUNZz",
  "key20": "2oNQ7uJomGzjQyNG4V7RAPZe1cQn4RusZGVctVzZBn7kfRJwAna7mq4kShWtzUjrsV1LTt3xzaaNpP6tuHLyvtQj",
  "key21": "hojQvmHhxqD1yMKSFZF28ECvHrJ1nmUZS3PfYgrtjUWvR1wgpZ65JhD3g4wdkb6bKJ7Ee1KhjFKDSq1NqsrvChy",
  "key22": "4kkeW6dkDDBSNGty2i5jVEU3SNUy6mbAW7U6YQLtgFXgeiWk11pmyoLSTLXPeM3XQgpsfkP6XM3GxeCWyhYJtKMK",
  "key23": "3mWqhVfTFJpk6QQZEaC9x5ReqYdrdh19tLUcjiwJCzduShxuUdzgHRSDaGbv8szc1SGWjFsrzZSzehQUuaqfroJm",
  "key24": "4j3swbk4uzX2Y2TQSFGj1ZoT31EnE4jKAJD9Cvs78GRPSeiNn7v1uNnujfbhNV1Q6c7VUSjvW372BBbnWKMXuN4P",
  "key25": "5Z6ZMNQ58FCdYxrA9avB9PDbxrLjDYZy4n6B1XDeRH5FQZkEHu4XsAYsyFVpY4139SukWtg2ri8k8eHb8TbmvGyN",
  "key26": "5brmjgyGi458ScQpgLbmunhehmcZc9bKUrTeLoFHfPwX3K24B2MEMcU5GvD3q8jjmwyPY7byzoTZimYDrUWmNXJf",
  "key27": "qE41EtHc2RW6gFBv6fcmVpZyCSj8p3em39wWTZaFoQ5bYvcy5qZgavvnapRuDse3ypXky3cQXqGggEAYuGmT9WS",
  "key28": "qjQntcLjfRVx6eX1HkAmvAvHGaF2aiiLgB7dmgjf43GFRfUzqZ5wVQkRXazBEzjJFXqpf92AGBuQ4t5ABYusdbf",
  "key29": "5mcxuahw48PZM3S1zY8TNA72WizFAR4pLH79HyL31dVHbyAqH7CTbxUpEDQCM7QvMBtyPxP6YWCdP8ktPCc4ga1d",
  "key30": "4jcVRnJwWFX4rwSEgsW4Qyh6mvjchM9nEgXesp98CQh3UwGfbdwcguU3T72GzDS6JpdsGpZrG5tWE8cqeMRXcq2t",
  "key31": "55Jatm15UtQySyNZaSFNAiCoSs37pnUzJ1JSQNwEddM6nE3qjMtgf8kFN7TLMbN4iyLET6RwajUPqkVNfzDdy3LV",
  "key32": "4nRZaCSX7NvD4jdMmgN78CNGorjye3MvND9fNzMUEWL6BzwPSeRc7g93pH3MNMvPZPiB7D5cCL8ztCbw6sfUA2t4",
  "key33": "4sw9ooc1zC1K7Mo8Hdh1EqJneLPBJdbZpMbLE2cgdJ9LSyeYrYqHyu94ic5492Rsv63BsvborWWSGqYKYoR2B5fs",
  "key34": "3y7DzxmLgDDXFgQMF7s8WVNosPjPbxXpcybZ8VAhPowW56hXjaY4Er5TDevPfqEM88LbQaFEypPGos9HbqrT1M9h",
  "key35": "57MWbc5fymH3tQTQMNjkySdp4H3AqfMYGmc5v5X3ZGEZKcLLRGbFzZphwP6u7YWFB4KPjg2jjP2kVbZb9qFqxQaP",
  "key36": "5mNkUHKDUgd9tCRHWr5hdP6uub11Y7j1RxS8D8gKCxWi9vFBmM1Zryhdiv4VhT7EavRAU6kb58c4FtnX3DBJD13c"
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
