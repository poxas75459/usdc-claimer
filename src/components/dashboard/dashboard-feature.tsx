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
    "4fFyqSBs18bt4qDQwb5e8b74YrZ7ccQQZQDwam8VmYV3CVCFbz6967MYJ7pPonn4BuyJrjk1EdkDFzmeyrmsVJp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCWKXW31QSgwzYUN5Bf3S9ctdRByJJxGZqdUrvEhtXnxZpVHKjrbmqo3YtnZ5Ntzdtt3Z6DUe5xZ78KkoTuVuCv",
  "key1": "2DVxNRLYGdi8fPkaw2TL1bTMFKDZWNsfmW2urkFN4udeq7HMU9JsxvTTsLocGpHDwJg3Nbp14r3fQeRsf3stRgrq",
  "key2": "VGUEF7v59ShMiHx9JcEWZKA4YzWgykQYD9PNH2MTV3EbiaAWTjieR7sWPtgZqPamphMPaBp3TyXaCy9Eaf9k6r7",
  "key3": "5UAjaUKx1DmqT8ghz6NfQodnjnbjPA4mL8mV9YM32qp4AzRWKynv3tCULyvoQJseBHxAfbALS4ZaukmcKNzuFS6v",
  "key4": "5Y6YBidbxmoRg6fS3tXX1qGcmvJ4obJRaXodgwy6YgrdGBywtHZd9JYNeaP7tPQuT5RsF1q1KZ1xXan3B5mhD1Ez",
  "key5": "pXs6ZN3bkDo8oNVdpj4A27qGMJ4YoRcjWbAgzvPsmGiWR71gngwDPd8ibH7m4xHtT6VEye8stqStH6T88xEgGUc",
  "key6": "3HdfUQ7RWnzivShFqf427TdCLnbE6ocWRcMMzXuazuLyWGJRerSXGBxtiZkxkwWGP9Kj5FU6ZMtWkCBkEuawFRb8",
  "key7": "5K1G4msbpZuNyWrRmxXJ3d2aSw6LqasB2MRJbvWeos19SKmRKsjXJQ42vCMTVypQQyaCUD18FAnCCs5YSFqYWbqD",
  "key8": "2FCsWf5GFJ6RzWdmWkqmKirwTromsijaoux7SKPvmBC11eGiuqVRULXkSFX1LPp8NT695Heb6C7etSaaWWP4di4i",
  "key9": "4aaSkpD2vRnWFwHsWfjRtDF26SwemH4U3zqJQxiCiWb9fN94YiHEsQtL7JiHtMhL9oNp6Qsqrecm33x4q1FsTuYn",
  "key10": "3sihRZWjJGDniGkhTpDdwCYK8NF5QcBagr4Tm3YAA9rLhZZ7eLbizB98pEa7sSbhQGn31SLPH9aYNvSpDoActsPF",
  "key11": "3DLgDNcmTFJMXFE39R3Vk5PBJQffBvNiQeQPkyYfmVCfcss9Te9MeEeBmWzcWCUZFTUWZxpf69VZjRj7zd5KCAZL",
  "key12": "2T4cbuBmZYx2gBDVEKGBGMcjjeHv4e5v1LjcAXTXXptQKTR7iYNHDEt9X9JpgKNsmQkBuXrXUafvzmFxzTscjMif",
  "key13": "4bMeM2qesccszd6TPvHzrUefnQ92wfthoPAf4uxRs75CPeLsakF3JNvursDauqvsB1LsyPtpvLzJGaz78QdsYuP5",
  "key14": "59qMHcsKJe7Kg1C9APf9BL6m5fZcLsrZySRaWGVCWVBN4AUMn36NfHrgMztMhizH15bcYdAWsnvo6vy3zQj9ao5V",
  "key15": "3szCKz7FbT2ex8S6XdALnk5KhUzSKmAXAFAWqnqZ2o95Rh4PhZK14h7Cnkuj35TdPExN1qmMvgykML6W9YFWNHpZ",
  "key16": "5EgkyPmGQ1ZhBxsB8FGqF64VRnDib2uJc3jVoeuGCbBifboVdRFsFYMY9H2Xwu5qeM1dQcTwAqTHsiNp5PcxYeJp",
  "key17": "4pW7GhJKidmsdJ78bLJvk9sVYAhdGqiQ3Mk7XVxCQGAFLJUf3cXX1VLoYRnmTy1F7Jcet56RvuRoeRj4egufmjoS",
  "key18": "33jLK9gDgbnTi6S78XdZnJFLiMbZsXyfNmofh4nUYM3EsyPhP8172UyeMjCHTyFLeBVc5GH91q2vvW5GazUMvwKM",
  "key19": "2fdrmjHNnJqg9AWmaetmABjzW8Wdr8CBuS5txbVfShu5rb1wb4uFmWJgcsuphT8NtPP4rA8p7chm53r76KPudRRN",
  "key20": "2VSkfvsU52z9Qcf7Mf1CuCuaPJkLYo4rKqtyTj2UjxmwQSvd9Es7sCR46i29uYMvtjd9mXyXXarA433dcMJxTGh5",
  "key21": "45j2UYnMSgAGTthp6xFz9Sm7WCWVMrcZcTAowcrYZfhfbMotMivk5hDFvfxBGB7g99mUrcZPU4o2tSxXeZ7ATP2A",
  "key22": "3KT3XBBDaFd2ndVJKcY6heFKrfQ8n6TjZs6cj5xSNdB5XMrqdkm4dNsPxmTsSeUv7WNc26VKtAUJ6A46wSStdH6h",
  "key23": "4YTpVow1aqNYBAeU8y9ZfyDQ312gA64Sf6hLWLk5YCRrhqoq4QQ4DjVKQNF4u2RWJNXNJuwDyKmCBY9LfyhovMY1",
  "key24": "4gtoPxnDmDsGBGgpT64S4fjhEjwCMUFNEa886eW2qBLT9cHdsPz3EbhqB7t5LXhpegvQ2Y7PBeJLiyvaAVd7qqmJ",
  "key25": "2nXYohXyRb3UhJz8dfepBG7zF85V1cfj6gKQdPSBfdiECnCqagJAKG4Gq193u6mVsq5G5Qg7jXEaS1ez4hNmH67L",
  "key26": "556JvxQFnJnGApXDppy27iRC59XWS2vWGjupPznEkE8eYTa1fKs2tJdDSPZM3T8iokx4xpVDYj2v577z7iAh3Sms",
  "key27": "5kizvP7TRaM1kFbCg8tQMU7A23D3dYhAV4aAQfj36JtxD3utju4LurSPnnpwpNcxKWuhgRXcSoRtb61r29S5Dwy3",
  "key28": "26gBpqE5ezEZFCp86vgYK2gSwsBFeEjje3tbzYF8xdRF51kTiz5XRxTGsPwu8KwFhDM5cfa2xxQxYAFst8VMuKdj",
  "key29": "3QW4oPjmEZxVDqvw9nTDXABhhh2WeKrTry29WFYskVbah5xF9ZjiMNjxLw79sswfBX7kEbRvj76DdY9TtwkGyuFo"
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
