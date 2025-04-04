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
    "2zyVgniWHzesZNR6tHC87viUJrEfCZdaC4VcHhGRnpXjsJBEQTDjPeNcW1Y7QcsGkNS3ZE58K6igxrtb8HCHBWsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdqdGJ82crjzKwjTj5upoXD7guVTJtYrFXKMKP1DL9ijWvNd2EWKPHbJ4K5HV5q4H7tfkQvYNQLWjhGngfmKXRj",
  "key1": "2yrY2fPiaiucJGndpdZZFiFwmFQkJUNmDfJo19mizdbBf7wbQ1b3uxvhPnWMnrmEgn8BiQeJKxKjn4G6Kr4d7t69",
  "key2": "pBB6AAYLRf4ajJSQGgEQQ4wRR3rWrdMeMLnbUxmYsxtLT1UCTNsXvxzJ1sqZu8jvyoAQZT7US67EMuoZbCLzFB6",
  "key3": "4UJSz2R524YMq1cgZShi3ktp85rczue25iXes8uTyuk81bZ9iZGDiTDFhArqLEhGSYimqVqx8v76uuK81LH9ZxoB",
  "key4": "5MKvS9UK9jbGdMEVRbEeqa3JpDgbZMtppt3FZ6qqPBNKRs1zL77QfpBAnz5iGKKUbvXBKupZK9KN9moH2vXRPkuJ",
  "key5": "5KmotdBhPdv5mdCkR8Xtn2p61fuH1FSzVFEUxkGzz3E57zNGGkJgTaKLfE33sxusFfsFzYWtZ1U2Bhxm6W34p1th",
  "key6": "4EHKt8nsbeeACuTW3XiZQE4p84vkPUA1Yeh7EtgYaJgY8X9spvgxYduKTdhApasuYk2ALMjHJPHw8hcV4mjgBpb6",
  "key7": "4XkMhtWgw4zZMxfLvjG7EBmtkbouBDnkre7DcgTc21Ht7Ft5J4V4E7toMzKiCtGV8u7yD6e473ZwZsdBAXMFutGx",
  "key8": "5tbPT49bE3W3T6rGLhDJ6uvCgBXj2LwSjMManV9vrYmYXM17ZdriQ66btbDHjYUWxFqA6Rwi9HM1yNenoJiTgdkP",
  "key9": "2d2h2EbMPVqMykbP5z1V86yXPbtEBz13aDjQAw6AX52ZqWumCrjBJ98ynFo5wNdmJDceqSmHM2Ja1qB5HqxTWih3",
  "key10": "5pMEwXDWuM5a4JVJA6zHhJ8T6uHi5uALu97oZbsxCZNyfvpkfvcD4TgswWG6jg9fMdvZ3txdct4HeD45h8yhWP4F",
  "key11": "2zQjHuRauXGdyG86A3HBqru9JFTp2xo5RVUXjfzkhMPohgt2brh22rYxGUSCnEoq5WpijeQ3oBN1hpz6GcAKJJ7s",
  "key12": "bJEhVoPuPnZGdpTupQcHWGRKGEE4pdsdeP3yANv9mmpkZPDuHgznQF2NWQtnTAtAifvffQMTQJPik2sUXHN5jTu",
  "key13": "4Ar46K49nYniFQBtt9S8HvYWphxWR2zerncYgVRo1uyCeHGqB16hTdnP7Eqb5KcRcxAvYXJt2xrkUqxNFtUFQ7M4",
  "key14": "4HouyoE7RX3bhChexgRSkApyXEtgYDk3gketDZSkRgzQAe5rxiCxcWynh2fqST8KDfg1XSmFy3bf8qaF7pXbWGJh",
  "key15": "5A2yTwA9KLzTxH92KHp5dedqoN1eMeE6gtQmFbwQnDCg3fqqCNwqzkcuod8NDtKQYRdJkGHF5H1sYAU1PYBBsnHE",
  "key16": "2ZhAPAgokuhsWManH3xqJhf41uRiN3NzXrQMB5vXJGCX6HewXqm7DZqgDdNuT8NdrPdEEz5ptnUVeJwcM8dpMVce",
  "key17": "2Su8PzSd3d1mgiYTBwQHp1AATkTWvvTw8Vib1WQfQHQubJNPqpRyN7n8kAQW7ufu7EQhqHnhfzkh9XcjpsS3Smto",
  "key18": "534KTrVPJ3piHAHFgzrAQppfP3Wfjz7Ds6oPFptfhQVHgLyfHEMyirFVdxjtyQQhntKbETQqY7YrK4ZCuLi9Fi66",
  "key19": "4Jaiabbb45EXJUf73rz7x5A9mDuBsV9ad3BTZTcrbA9dgBqaJzKamBtBZz957XTGqQskbYnmzDa1trZKazF3kQCH",
  "key20": "QBCVhc2W1srM6dxYfP5H2TwJG6YG7e4bMwupWvZXQkVSCJT8f248u2dYhvV9xZCjqhAE2jhzFSzmRqG8Qbw1doG",
  "key21": "3QNzPrCyWWsxasL7h1zvYEkowvrFGE4FdMuLZm8WYGajRZYpD6Bvb5zapRZJVvCcJWnkzbR3tu8Cvwb1uqXC6Npt",
  "key22": "5tGspNYnW3mrQsseivAXNFwkfNswj3FpK8ZoAVUHKQMdNGGc12LMYZRSxFBsMHKT8sb9y9SVfcPvuigcBdSw5q8w",
  "key23": "59YNPcvRsq5nWaYHJs6CGedsjdXA1X86uYytPjXJD6FNEtVVoqJ2xVLDBXyP17GfhXxyhVPkiU4u8KCYRY82mnJe",
  "key24": "3UUdSfxnX4swHDUG81HNx55MQAPgNhEQSy6pRejCmQanygLPr48ktELW78ZL1a2Wm2HhnU1ufrL7vt28wxZctq1u",
  "key25": "W2LtiDxVBqjBNThocMXmvsxDipvzXe7uXPNWPXwMmBme1sBxrQujVD5QQUZqubZ8nE5qZ6gnaH99KMtvEfnctDA",
  "key26": "cHpXUUBwUdKXZP8u456jAbnpRZZwEH5qtLVm5KQpf9zBodyxu5mGJ2mv5nAiK3HESxcCqgmzvwKpyayxmmdT9Gv",
  "key27": "3XHu1JgPZxsUuszZAWWuGjnLjTDxB1453Ve7fLrZHStAywk8yaVizMJ7mXPnmzuCh5nr9X96zT6zEeCYubtFDWRJ",
  "key28": "AsSdchkftdYNXbRydS2Vxfe2oytCcEgHXnPbQWkm8uvUwr6VEKRQCFyi7PyV7fPMrfQBQqLaMhKeEBiDqbogvqb",
  "key29": "5qzmHCMsVRwk93F4JjjRyDjwJbFoekYwQPboJzemSz2EMWjbnWBYqPZ195eqeWkiVZRsaFsDvEGbp97K5dkqD1eP",
  "key30": "2gCzn2yyaHfeNHbPmtqscBA4yA5UcCxwX65P2K6DgATxPPBASLKk1qKSZnec9cSMmKPv7aozn5Xrs2vLWPftCNvA",
  "key31": "3D3RNQa9P5h14Q6mT2zH9nLvXPeXCmqEnX9y8rs7xh3UvsDhFcgrHPB6g8FGQ5HUPqekZe6HmQqMHCwmEmbADGcU",
  "key32": "2St4qtK96viGFoLnbEvN3662tXg832vdxLvQDgwDoGfiL8ynsbKeZ5XCPrDcgoSFpieNwHvrSYN3SgVxVf2Ve1fs",
  "key33": "2z7wSaJoKRShAkhPutxzqDxH1KGDeaWNTSeZPkUC1hrytyC6ExMzKFdoUJCSHYw9WsjBoH2a6KVftCAyYCGqACte"
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
