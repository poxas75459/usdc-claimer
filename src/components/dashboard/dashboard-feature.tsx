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
    "4ySvkrhsXo9WeujqopCSU3sYucmAtqKp36hHWwcHYx8nZccYjojGaEkwvNeebd4wgJkDewiPAMuDhL1MtgCBWDN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wi3iTJy81pHpG5Zs8tYoLQkNsem4sCHt1NQgUCPAnLkecDHc9w7caBcDidgrDGLK6ntFQ2eU4JHsWEyBkrjth76",
  "key1": "TsBCCbna4g2BfsigM3pqhCxyULmar6cCK7BN2ZfpCV2KJL2jWhU4jYFE4YBTtrKwbC8G81RFB95Q65jsHYqycsD",
  "key2": "25LsNLvdq2e9KR7t3v4xVKoRZsaA3xJYQwd8mPu3xF2zhaDtnidrLkGBXrDeAmBVPP4e63FWZDSHqP75bfHVAATQ",
  "key3": "3EFxM8YHAdeuuCFHYwxbVYRgziEtzVLqCBjGVzK7ZGthEbUgXNkn8VDUdWWadKn4kXvVCtvznevzDBR38xTJfZcr",
  "key4": "4VEZ1CKhCeo4EtYfLtrPh5vQ9ntchuE4JuQwki32j956MNfCQtJWrw7uKVVj3hB8LZyZzcENtpEUuPwMi2LMgjnE",
  "key5": "eAZJ8uAaiCzYXBCZVe35mvszDiWwi47MzoY5tzi37ySLRdkX3RJUvNJnUmP63JkpbCQx5tpMZbpXfyEcQ8XPxsS",
  "key6": "3C1XGPK5n4rMwcSgTe8r3vB9xqUjoeaqSNeVyWrpMESmAE63KS6LKDL9bhPk1hzv5BYTBaBj8RUTMD6gk9M2vBh4",
  "key7": "57B9kymxA34HfvrTptnHaw3Egu6FYPDR2WQdanTQf3uHW59oT445esfj5p2x7cmWbGkoaJ9e2Yv9rG16Br15YhPo",
  "key8": "2dbweLPoZqoWUFtQRaAMJnAFT9u82xSvJBrKQP6VNBvbHXYwZwBAm9emAak2wX7smtyomeiCWQXE2HDGMW9zmaAb",
  "key9": "5ycLNnpcqstJs3jzqtrR86ZUtrWetuWeRdmbbr6AMmX2SAtxF7U3AfYLC6D9RfTEFNpk4hu5nBL9SYHivAJWcVbe",
  "key10": "39bw9JZ7FcUh2LUAw8A45JrZLoDtAfRiSrhTaxoGuYcJdTr6eTFpKZsh3aob5hbxAYesWozVcFkfDYdNhRb5aKQp",
  "key11": "a2XwWVdCKVFiyTJsQvZSC1MCfi7aRDgEyMK82kPqwruWtLH1oyiTBJoXUiy7ppYYjWXhJSsemx6Zukg7K8ZEntb",
  "key12": "2MVW3HWFZkuTmwSx2Xsy3P1f2925Dav4DYPLm84FHtQ9Fu2HmffgtGRXwjyv7bstkZdWQGxfwZdyEdtNy3n8tzKd",
  "key13": "4BW7gT85CH6egBzxh3TdeTpFzYrLHXn3g8rTymZUEfSmsNdcutKewUbeZrWeZ53ci66B7Fiz6vvUmtawfqfo7RGx",
  "key14": "2wnHEQyuK6xmL49Aj8KMjWhuPrssAD1jxUAF9g7ai4zHMTnrW1aUEN1MXLZH3NQM4vHYxS8SMYL56EHbU9mpTypk",
  "key15": "3vymDDbXUjzDpeDWPTMqoW4X9vjPDo4oP7sEZh6GWFbGhaSW28zekqStjrjs7ikpwrn3XNxNcRBsafYTBswkBis5",
  "key16": "2cdmX4RLDwzBEb1dsjczAb1mb2dCVrrJdoKk8acF1PnvSVzp5ghGKuCshQ8cgcErBR8s22fF15KW7oKoBAUufGNk",
  "key17": "4f8V3EKQVmFByQYYh15om74AyVYq5jdHPs3BPkiE4akzgsmHE5ZKNju6vSdz4Vc5NuR1SU35VWqTgcFvyqrVsyNe",
  "key18": "iMk93xgmYL6UrYoiThSuRTNHtJythTpho65KG8XSAaHN6jkQpfGgnf3HvzbaH4ZSxVzpSb8WAZDCDTEBgvWe9ip",
  "key19": "41ZP8URZS3MXebjrZprhUcRLsGuht9tYawPjTRDNR72bRp2q6g2pXPm25YydeKzKVPN2C4GwPTsxR6mkG5ezpqNW",
  "key20": "5ZvCSH7xhoB7WEYuSr7i1ZZ9Md6wKYeF6s9vW3K7fYqumeLAJvTkWs5BfoeFKmfNQ5mjCdSLNc4Yv3tAoWuNLbM5",
  "key21": "25ZkZAJMVxHCgGu6oUBsQd9Dq8kGpBGEeLkjoGrgbJ5xLnF9kPY75QMStJ8yXZKCEM7bA9YcMyhrujjwVkTF1Reo",
  "key22": "5h3ZXH7E53A9Hjocsf36qe6WnUFf897znaro3yRJqfSPNZpuy2i5YtfM92Vy12uwzVEtajib7GAYmcHxM2QJtuoP",
  "key23": "4gyxg4cFT4vRZ7KsWVJBtJy3ppBWu2bX4sNtpp1Y5h4mS8hatkTJd8WCQkSiJ3qXaXZ9hgvpTTMwFKVGexaDAsgd",
  "key24": "JGkyT42zDsmMa43RjrtFnF45YtEJY113r9URLHA44Fu9i7axXcgdzNcsgyyvAuPda4gDLmHqFGMQxfhcuaEej4D",
  "key25": "5Y9ZT5B7cCqSNDKkQZmPicJt2ACYqVNbUNxBymHHZ9zMZcjGiGF9xpcFjNkkgv6HGJaHyjavGYxh7Uhr1PkKuupj",
  "key26": "33tAv3a88McFMW2oG9PQeUqtdf6nqQtP4EdztCVVLLD1RLczH3zqFmXzgBXVoq7UFAnCHyDZJCCR1mzStcLk2bck",
  "key27": "3eV9z5Tjf2FTiiFBpBE7MbxUSjkJKRu9EdRe38aXUZJHSNRhgHroAdVvUgoLUcAih6Nq4UCvsemPm4UFHwHekFk6",
  "key28": "4X2jvXuz9ii69iqtsJxoWub6xQu8Svwv7ybPCEKkU6BBnorvkPhXETQ9AcJmnmTXnMHojmz78Q7qoEMfJYutbc1j",
  "key29": "3cFTArC88r2DWgoCWBLpw7SMj4dSJJemcNs7PL7NyJiwQGtQS4NcrHSqo4pCjHH5x4MJoJyuvEyb9WSTNhAikREx",
  "key30": "2VwAWfHg1ZpCHaKoJFPbyW2DUubmb1jDUGpvyg8NgxePUNhS4LTHnQcNcKVkoTirai1DYSxvqrKDjb1R5Rpy19oM",
  "key31": "2PhrqSSgxyKCQjSB2bznDaX8ZCip6w2wkgVdDqtzxmjxLnc5tcXB3NDWGTxAZPGcDb6jMjkrrQKH9j5LUNA1U1Tt",
  "key32": "5i8LMUJoqM1FK37D4EPPUxgqTi6enmH77yeN27bMW19yQHUHHewexS2aJ7QtY7hsJSYWCbVtdx2XgsKoUHzTeUBU",
  "key33": "9Gjp8iDCNWMG4rkcMp4DhjMd2xGkfj4nXhzzbyDYv6TdRV42wM7WgiyJbsnR8Zc7joe83X1agkmmgrFwCvjZnHk"
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
