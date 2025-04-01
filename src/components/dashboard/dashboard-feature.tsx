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
    "4tK6tWkLQQpX1QpuoBz7iAZ34SwVSBgPGT5dmpsX6TfzSeZxkh6JUY7zaPygyHVQTgN875tY719Kg5i7W2FYUiGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9E6FLwfLh6hXntUHXx4B7hMams7MbGYUDoNoHeNhYcgGexiaSTA4yMgsgbz5fkoRG53WK64nng48xRFgTXndrZp",
  "key1": "2n29HZVdUTb9uvivZ4Yq2ieHZLzQX8zzVeUZtxcmXx7xJs8xVhdrSASCdo7kvVVFsQb59PHm6m5pfTLrmL8JktZ1",
  "key2": "MQtSMHz6PcxoBFo3V4zrgqJUoQzvdYH8vWVVFX2gppmAJwmxqsJbqvfv7zZrx2Zi8hsUaWwhWp7xi1uv7H3Rg14",
  "key3": "3phpsWU879BS2LmWz1mTtkG2rfkXdheutakcoHKzicseUmSAp4rvedbb5MgruKcC3cvdzVJmxAGoXGBFGa8ThLpb",
  "key4": "62SxwwHT5MCjHu5PcbNbN2tKCyNdABBSCXYFYVoFgDxEUkVrXUiceB2Afetv724fY918ozMnqme1UvYo51LVB1qq",
  "key5": "BB1nZaXWySKX3WFbmf58Wvfg25zvvyGKGZKhs4CVyu8x4mnjsJjEBsseNmaA4okDx6tqX8CnJuRmVhaYZxGFRsa",
  "key6": "umQMQRMg73SiPC1yQvQySZbeqFtPghKKLdAMxd7VDfY9dCosTXo97S6oRjWL4hAboYfZUd2hfd5gsMBGubqZCvY",
  "key7": "2o49Xs8sxf1mkVtpnYbHGkNkj2kNBY7AJodkoqJtxvnvvS2AgM4nG9Bof1w1oRMbZBx9uLad9vN6Xsyj91Dhmq3c",
  "key8": "2GwU34MQnQmCh773vJXAH3bq8NXgaQjjsFD4LtgytjEaVKT9dPo7zXFRW8RQaQpz8XjvTrJyrGuWUJrsJsj1PMHu",
  "key9": "5nn9ZfQEqUedEECXFkLRJzDHwMrs7ixdquKypne5h2NuXDjttEmhbkxXmbiRZ8csmMkL8n7aQ9jJup1kLTRUj8pt",
  "key10": "3TPf372nDd974aS9ABrzfrd7mb7xWtzrdCmhKNKDzXWgy1HBvZLcRe3bMV1mz1nE68L5dZQqBK9J5vs5AosE9WhD",
  "key11": "5sAFuQHTj66JDaS4q2BGuzXVunrWgBz8NnXuMNAKLSYCrLmfwhKbL9xn1Gsgun2ZThiiwMi7is7xQoWtRMjwZceG",
  "key12": "4zat4Tw3hbyUwNiEB9o8BvBANbbHfsVreXFwMdXMWRAzV9Afbz2NgQHvch4BJxbraJEyANNjn5ficxmv9PNNTAxC",
  "key13": "3tMGU3LNhvzAmY8MA6w61tk6SJyzbk8xmDYp2R8hX91ajZvCnzEEsFf51Y6xFaztiPnDXHwZeCrWG8jpv9Zuqy3u",
  "key14": "3crd23QjaemjNdHTar3jyZAZgcUXq4w4EsGWFzHayhcN1E2xwxCH5VYzNWW1ThZ9sseCPYWuqsK4i76ZXUSZrfbe",
  "key15": "34A4Vbfi6veeZHYWegBswX5KGFXuJF2siXqiEjLSRazKXrnfWWkqYXQELejDeDc6bkgQuScF1JTfahbSrim4Lx3v",
  "key16": "2FKhPhh2Vj4MMxhpfjVgPLWTEjjW4v7oHvTAUK6rNfRxEqJj9ofkbrWzJJL7ZRkH9jkrckLdGpQhZjbMgDiGeNLR",
  "key17": "51C9K4zq4mBrA5y51mCpoRW9FihbN2LcD6UrKuSfrCj6xb53eqMA5BjAQLUfUjBmdeAVEUnoCQdk1sHEi5videgf",
  "key18": "3wiWwLmH97QSMBhzv6X2SgKQaGDvcR41W7MbVXcwXyJQqx65NWSsQE4jdUbpkhch5Pr9FX4U8tktrPJ5P7VYwUT9",
  "key19": "3wP2h2uBDzuNB1htV8PHgFqa7kB2mf69JgnH6hrA1pmdXR6hq3F7Zvr5TiCqgBXTBLgYFfAN93pwMsCsLr5D7jGo",
  "key20": "62Ng7YKZEtWvaEy5TeKPxVW53crEFE7ArgFiRRHgMsiBR5C74ZPFGFnZMLkkRGGjYbaEFjxFWGrsKkRw9PpVmjHx",
  "key21": "3Uy5m8YjyCkPdsyNUaUNiHDB17wxJYQFbwh8CFEoYHe5dW6ieY1rnSeSsf8MwQLKDK7UXgH8r3vZNPYXdDshKVED",
  "key22": "4EGGnEwU8YHKXBQCPdQL9Bkuqf2j19qa5XDRKcNVaC4bf5Kn4igct7B51StP3enJ4ihdPL1dogqoFTPb1r78kbHW",
  "key23": "oxi62HNGruvckW9cQPRcbCAh6L8DEHuAkSautwrEt56acjv3KLJ6Vy1Qc2XCK4wGsmQ3KaRF5kxCKGYkrLiMBEp",
  "key24": "5dbdxVv4QKYnoseaJrLz4uDXgm7FnKMrpo8DFTeLNfWu9U6jRMU3ZjkUPz35f8pY7weiwLBFoDmhc3wfrFzfe7iZ",
  "key25": "3iygw9Z1c5qQdAZcgyVru1EHVkUNK3M9PZ2pQSXXU8hdbf9PKVMNaENs6FSLMWGSUrrZ4pTKh3Hm9vuqZ8UwERiz",
  "key26": "2WtuFAgPfLE6YuEPspxZo4RASJkHLai4H8JRHHeKdzZvZZuwvNte7jVFwmXKMdYFCiQqwQFMbyJKDRo7UDCpaPWZ",
  "key27": "5o7qiWfq35LKwBPqaJghGVyLc9AL37eaNw5aUuqz2t6ejbu7ywhU3wb2iDD2n3nxE5PRTyPDLKAzbopjeazbXnPn",
  "key28": "597dtk2V1Pp6CWMUT3jHQbLb2GQ65TgGpa52jhbKVvGo7YTTwXxq8spnex7vqNrpoPEUXoK5R7NktF7ac6vHNrKY",
  "key29": "Kk83HxsChyV2dMCwYwq9MorY3CCJ9zzcB8XjWwLRWUp4TQCB6dHcUeSmZQnYNF7RK1bDgsvhRpXBU5G5SsifHUD",
  "key30": "4mgF4QuShNPYUAt5Q53kNPCd94HghGA17a3ivHhvumR61cUi5JhrFdzQU6ws4PunqMegPgD87fYvrbNLdwdcg3e1",
  "key31": "uDTKAAgrbWr1zBjohW5xt6127zjaiFKefhwe8HujZGCbDjS8bpDGGBT2AzsjzgnwwKzP23fLzUM4XrHVDLvTdnx",
  "key32": "5AEZjfr74sL8782MrGE97nnNXFeW5avQh6RDUqN5tf9WAi5Sz8yTmAUS5jtWShyjvs4uheeTubx14MNgKEFBV9bU",
  "key33": "2QCQjJG8RMgkEi8oLTfTockmoqv29A3nXCG6QV7wg8PDah7eozzBL8XN5LUmehwPLEWCddEV9Rm7VDUDbjUXifBs",
  "key34": "2yzQv3NyqcrdDftwfRj7LyFD1h11YiC2bKA6v6cSLpdkdo7qpW4CLaq3zuxMnmCeHknGtPhWt1AXxGqx69bCGrn3"
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
