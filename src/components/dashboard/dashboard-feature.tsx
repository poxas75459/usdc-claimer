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
    "2qSU8N7ynBAwLjTHM9BGsnFWvq8yNpZahJnaXWPZxNTxMZbHgXUVpirhpjJEP1GXqz7bEw2FQJftPfCGFVhDq4Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hj7p7pAZ5ccSJ8rEF1fWUatcnqpmwciH9mmaDHkcCWr7DEaUbF2dK5EcMFf2XYW5GgdJZC44MMiuvoS6uE1aEon",
  "key1": "4YdCrWqu5zHmTC1dWnYpNi44e4YkTxdxJHD6kSw4pVJWgNmUzBzp7N1ejVDE13CVT5vHbz89JYU3BFMDVctm4SdQ",
  "key2": "3VfpJgYauBuBa6WGxN6q3pdQaGpELb1jAjhSNa9evPUTXctnMQyzMBtzNvBZNTySgtyL8dp3sa6qxkqoZUU3y3ko",
  "key3": "5JKxncH2bVBXfj8C9GzzFL5S8jNFcTdewWMSc2wZgpAsnNBB9feLWt9TS3GeQBXXUjaaNrwbGKaakwQmg9HzTdrz",
  "key4": "2Z2ZWWq5Ry9o6ZnQacfp7RPV6wjzi6tu33rwzSu73XEN3JdasF3QBHUwYBmbUVApaVxUS1nia7A4US1qsGsw3adG",
  "key5": "miJabpFDgj5S1XnHeXLcMYitU3vBRj4z8kK8CwMFtXeCBR8eJfxMMxjHKW6gCBQFcncWyEyT7QzhtHcMtrXdPU5",
  "key6": "5A7Q12P7qkAYgTM4iu5dSWimHcY2UqBt9JQiijkfAXdtD3F1waNMNb8qa2fWWk5Q1kGS5422QdSzM66TpnCvgo5a",
  "key7": "3gyGhPX1qguBKeSG79yEnwQkvZ1hf43o61RXaRuFjdky6yJtakr8n5t6emrTGUP42C82LrRcqa8DtTBqw2PmwWeq",
  "key8": "58shSkyf1mgshz5ueLVg1UiCX3fJZXYuBe3Bde3ALvZQkMDoXjgJsLQnjDJuaM6Ma5pdvbFx9BwtvsmhHPZzXeqD",
  "key9": "2osiMC9xui2MeFADnx6WYTQ4DeW6UNC3rJ68puLfP1XaKDzBn2vkMtRxuhnJkYzbxPTFkGaZyDXZk19bBiUESM4c",
  "key10": "3VC7R9hXpuatthYKST4EduLTk5mtGa6G8kHvv7pHJgo8VDhQFfUBmJcuphmPbbLkUF3xwcDSoxGRuwNKDKwTurdg",
  "key11": "2ieYN7kH6HUea5qfAcANe6ibki546aqdZ6jZ6ZV9mzF7xKvsX1knu5ahMaXfGVsT9txh4CdNjqJKBpffms2z37vj",
  "key12": "2qQx3mp7S3TSuCaFoGg61Y5sPjvB6gea85nvhUi7crGzcLdZboH8BSFWTgvn6DLiQPJqfc3JWTgMPoRTP62dhQ9U",
  "key13": "1DnoBxT5kB144m7Qp2uGErLCWMMDK1bpMRjW7ZjdX6vKXoqrCEPFtc6FJ3cofqdN9YA6biK9f9adKurdoaQZuen",
  "key14": "riyWrGRuKyihdxd4VRzY4cDDqvYW6kn4Ts3eKvjA3XsW15qLWb9Bm1ftfBe1L6tdeoxnk6At7ymMr3NCEvxm4TJ",
  "key15": "2Jt5N3wktz5uLvNT8Y9SQn67Yc6YsTxZyEJbHbmKWfCniECRhubtisKGrmutZ5c9iearSEQRgHsxoyEuU1nEk1Qq",
  "key16": "L2PqkKA74dZtZKZ6RVKwQvvH7ykYfAzsg36K7eYSDayr4NnRq9Ph6Yyi1hn9vazXjyFw87nSx611KZGNF2Yhh9T",
  "key17": "3m8c24c4NjpG9kEkbVaUeNyKHxqRR6qzPCfXYS9Qppvt4usu4gCN23CrLAC84rZ1YL7m29pn8TemqhonxKvwbgfJ",
  "key18": "34zbREAiFNLL6fF5EHEQ3fC69seBftavJymhVwBekb3u2EhE8k3fqZw73B9YxNvzqX71fxutMfR7AAkqnGkRaJM7",
  "key19": "dVUC28tHCbvR7imArTdQ2WFBNvQMN5Ui7bnMqBigL53WeqaLMbc5UsFdAfLPFBvPkhijnB7zA6bZrgM16YCPyo5",
  "key20": "2s3wfamHrimKCyTszL9ERjofgVjiPX8ZHKcLteY7agAGP6RPMT6H3P5UvNaVCyQwSojiojyCxyLxuFadFFaMPTa3",
  "key21": "2XTRBMRHpBAJwfumA2bTAKTQfvxTYRQYTmrAdBXEX7XDG2ASiyHm3FwsKFupUZ7379PatA9bzDvtkHTGutNmp11C",
  "key22": "66RFBybqxzqpf5bVizBQ27VaKfEnAhFve9bhuj9uCxh2c1BDpRn1RszHhhHPrPHG6NtHkGuN6KEbjDzFwxd5cb37",
  "key23": "2LbeSEzoSQfAza86xvNAi93T5GvwJLRHifJcSeG1gCdV72JGM3xYsHVmbYQZTuCULV7cyUrv6KSghEGGApGZNpEo",
  "key24": "5SWhHWLEuKeBJwWPzzPuZDCbdweciAEroD2rWXkZxzczbg49T7SK1sHnpFmjiXTwXuMs9QyB6JtjmGutppTxNUvU",
  "key25": "Z9PQe3Q1DKAvxkMWfmkRshaJUh4M1NH6bYtSifGxhC3J6yHQkyNAsRkmksJGB1ujLe5HrC8VsxtByZZgFQjuUFU",
  "key26": "5dhRzXwKKtKZi81EYZTBeZ5qwVuePBrFe3xsqtF7pz5PQWWowA12RCdA43UQ1Woa2uJpCwpBfcYYhnJdyK4rwp1e",
  "key27": "5kADZBBEH1JcTWyNbhM9YWWA7GfEojCUir2hZ4ie9YZkZgch3Vb4kaokGWiRDpstdN4mAbuykzX2boKUQzT442Fs",
  "key28": "2kojAbsFPrCa3cEVomDDZf9DRu81BxQXDPmYqhNzs8DvUFi6U9EiqzyuSkPGRRapMwBH6kqwSRGJXYL2cBphnYxM",
  "key29": "3waCVBhAM4tvKbem46VmWbearzKosxaZ9VBfBafTyGfMZv2idwieriHMp676Vz6D3Zu2pkDmidaptBMWd2dQVezU",
  "key30": "3p7empv63cRTTDRwyPCGrb1X4XDmA8xxpFNVwbiEJfFcktStm7b9MEDKCCeSm13egjzYGGE2wWcisn3v4Pq1DAtV",
  "key31": "3Zf7ykV9P2Up85b7YcA6CKR3DFTQrepBuDoSZsysk2V578HmX4PVLXgfi3NRV1hTxU4mhAx1xTErnwfHVtzvrFtK",
  "key32": "24qTmd8ELxgph3rAb4U6fRBgkP1NYEYcsf6sNakJk13iLSJHZ6JSBmFoLmb8dsb487mQPuukZD8mvk97naX1U6yh",
  "key33": "5PznAWvwbQhF56zfBTcaFEJt2VS8umz69SfTminoB9zgdFfsGvqfiuWaYQY6GadyhjTF1NVf1WeQiqE6uVUUedH9",
  "key34": "E6dUnoqWA8ue2X3o3NHqvfNQ71GFAkYJ6mS3qukiJWBP5Wub6Aioo6jcbPYARNZKbLy5C8ZSnoGEQ8dC19Gwkj6",
  "key35": "3E7VAaJkarBpA1cFGSRivSgGesbyqubHXHBxwAei6NJGZrx2Yw8encwio3bg38ALmumSiaSUC7pdfT1XowLTFUkF",
  "key36": "W9NbE3FZPdVhGvoaHw2cDvBHnsCZWewyrYCGriZVuE7dxbrFRrVDh9SKTnnRFQFKMCJ3RQmqJ7EzdwEENP1XxWN",
  "key37": "4ZUL7J3ytTjG4zTVF3pnP7tMXRFWa65AJ9ZmNa9z7nMAroyBeekN3hhbNW8pMsbVynwazD7NjnrqByAzJtnXnwjG"
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
