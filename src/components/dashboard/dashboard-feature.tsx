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
    "2saob6di6vDyQZCYGMucUVgqGskw1uHWUycoxcPry57TndysX8mbLrbkb8KeWhpqb1B3GXr3yJJL8X2TR6SxNSB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kvWwgwVGYgBxyNGvS8WL3DH7oprMKL8r823Sr2Z3iLB83fjpWJF2W9H3HqjtzZkabCRhwRfU1yAMMYGGhcLXDp1",
  "key1": "3dw1FFL5MmQLuyeBiiaxTpLzMrZxNSaSgjMFaS4HiZsULqVXvECZNiriv9CM3uFQqV727f2hjQnPJ2zFZPngC8Qh",
  "key2": "4JmqaHKq2ewtDmGeNizqTYnH8vmKbYMgdh9nhT1wygifhD5qpzpVvu7H9HJiMa5YRruQPDRqsA7gGa95ojjuCKV",
  "key3": "4cfBdfKpihBKBroQynkfLYJeNJGUvxx7EskqicQ2HgKtQ7XxG8ANfz9GZw5u8s6ywow735quHuqEPqAsu3y7XmAa",
  "key4": "4zCDxRhhPhkbvEmSkXKtniVqhskcG7yA3F1YNvgVZpFkynag93LEkMw99jvSpKtksLDfqcn86kkWfkdqPeRdCR6M",
  "key5": "3pGccQz25fHVRdG9udNZPkg16qSzRjBCdtLh6vWqhuHDPNGSJ3obC8Hmfis2nL5nYvWBmR2uhSkAf5RG2YSwvvwr",
  "key6": "2iTQ5e1xKf2vChiopzeV9NwvcFuYaNtt3E2zRLapWzPfp9zHJxBLA7YNZ7mCXFzAv4k6V4fvJBEwiyzoLXzhepjU",
  "key7": "4m3p1jAXt2tK6NLJRSfGzUiwMwa4byVjffzDMicxcugcUiHdSi6osvCWvbE5drcyuh4fyLV8HCdAeyvAn9YAZV9z",
  "key8": "2hdXVc5kJBB6zus1iTa7fpg6bdhsJMF8kyvaRau31gRxejWSuW21E1yTtNcV3D41FRR245jVEqpXr79nx3sLqfTV",
  "key9": "3svbRN2XAKiscS2Qx3bxwEjqBNKmHfL626Zmx2yZCL1FdYZ1vjVZdD9E9j4DeXpqkuAfYkwPcquzFfLnZqLtYb39",
  "key10": "44DMP8RjxjaAhVgWhpg1VyapkcArZ8Zyz7KEYUqXSQtTtnHzZrC6RKLStVJBXnLvbR73TW2BQs9RKBYrynKamuWG",
  "key11": "4jNxghLZ7FuTvk1oZPPTuQiN4apwJNWwACEyTVGyrqqkpDsdAP5jkoE7GCAWAgfNBAiXrb9kBKr9uaqrNSk8648z",
  "key12": "5T8VhiU9kaXSXUf8ikQZssNhPQRj8UEbcqE49iPdM6RfeBjnG4n7QcqFLNQ8XvZVGworxFUNE7ugQeXARLDUzFne",
  "key13": "Ne2t2HCCsxFMBSx5Xto9GippMwBtUNvef47rUfMJ6L7eCQKaZbN8Xeh3UN3rfy73dGCHJ6fFWGSG5deibSxC5CV",
  "key14": "2HQkSjY87PF9RziXrcWdSFs88bSrsDP5QNnjpFAiYBNBhCWBEagp8sALg3ihcvFH2LXBfjRG8T8HrwHVQ7CeWD8b",
  "key15": "5eHWpgTBsF9pPsMDawd1gUcWVgUbjFJTDmHD8JwFnXUio3SuoAfoShDvqBcJpfmZpNangdRuojkWjayB51Hqdsd3",
  "key16": "5xp6FN4skJjM6C19gXDAe9UZGUmVfD6RaoTHZDpKc8CCSpcTVqgQtVB7NWNxEbNUnoQRB6xaDpYjsmNtcEWKJehE",
  "key17": "4UksapNUYSf2TycZnZssYzj9NGGmewTB1DffAmw8vXQTYx1cxz95JqZeriZZ3UNdAjmEW7p9X8UESdwPjnvtCjhA",
  "key18": "2aB5JLJDL2NheumwTqqaU1BCo1oHHLU6ALxwGzoMZeM3C3xoBeeev8njEM6YDb7CpkZytZXDQQnGFp7zCvnE3Vvv",
  "key19": "32YP3UgkgMRka2cwA9E11rdnav35Pi3hoXXKkHfiqEEiUQaNPaqkuerWWeXuvLw6SiJhgSxQdP7ezbbMq3n1dXBT",
  "key20": "343zeDRTqkmNf4PQDqAZZXxfatiW4gEvgMXwVQFD3ShwUYHk3LCmH1S1aZKwrYHHLNb4h3VN37AmGyACNcCPyToz",
  "key21": "A3ancWkMyGkhHwYjYJxEjUVS2VxkAPJBaCKvRT2zgTKXnex57adc8hJ4CRiv1Ua5EMEMvpUja8EPRVhGxzKyA4h",
  "key22": "29wTDc4rvy2kmL8jUF8QfDs4iBBpRBzrZ1p3PhvjHyzzCXMdCyJsuWVtmTy3EAoYevbo91fUoHT4xmK1maYnSmcz",
  "key23": "4pFmG983L1qTM9HiHrMnDsapV1qS9fS3P6ftkDJ7YUBxnuTxxpR7cjJV6NQb3QkRtYypSxCivuFTqYbaSeBkdos4",
  "key24": "2oJS5n2ovwQknDA712B3LTSmKBZc8hjyF94NagMH6mWt1HiacomvUCb5rUFgdpyvFLXuMGUoU8dakTGdZBJvghSf",
  "key25": "38taFR4WvTKrhDt3b4LQoMBH7PG1rpVQQZwSbHL13pP2ve6q3sGJdrJcDGATchFkmyVtPEeFvjHJKyKcMGc5nKHr",
  "key26": "2s3BqPbm1MbuiefNkgFHh7wRhHGtvQWoXqTqKvsVVB2UJjEvSqMQx1T6BVgP97KKjpTAfJ4zdFMmT3qAcXUABh8j",
  "key27": "hS3vi6EpuXfFgsBHoAYKij5L2bheu8UFTiNqNpSNruKAfh51B8oKsfWvrjLwYLUhtXm9x88ZW2U5naV5j2wT9JC",
  "key28": "4jfvJe4CmM98yPmL3DGAetXV4KzWTrqPufcKEybS7yPwCeBbtRuStm5o2qqsgmgsvXuUUR4hCR6CneJ5K3LppHGZ",
  "key29": "5F6Hf18Q1MtzBse9XUnh3Sud1XW5sSGhHMB6TPXFRxvzfcU1RDk9jLkFbBYGpvVuTJuTvDfvAJUwT3dPUzVLnrjs",
  "key30": "4pKycKPXpLKhEp9WHFGMwtNFfQF6BM1f427W4RoNkfLgH4eMDsRd8rSYRFNsCrDSsUvYxv4HNbDCnJcCe3QRXLWm",
  "key31": "2MYiPvP6ZQxThYDq6R6P5SRmN7vBsjjvVpKpCuZktj2bUJEyRWGYiFAa7rtjJcY7fTiK1JLB6YH1iaeqUEAsw6Jx",
  "key32": "4ieYPdxyjhr4dywfXJE58EBNinRAfcDZngRm1Ux9vn7uSzG2YX2jLE7fJbod8kasgKDigXkYXuS3PjpHAXf6u9oP"
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
