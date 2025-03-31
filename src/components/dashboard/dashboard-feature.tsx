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
    "QaoBmWKSZ3ovJeVNBuMFKzPYLno8UZvqFaPUZsoxJiQipSe4pYT318XyKA2rNnaNJkhCdQbvr6cDWUojuvpsBhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TGfL7kVatYHg7sYVqxfTPXh3QMaDkqVZzfZf69aG5iAUnQhi5SVqZwnAc7eA9kpn37bvBxnu1Y7We4vnpuo4scH",
  "key1": "3MGTAVbnZLocmzuiKmXSegiJTgsaWReDSgHPe79ER725EqJLfGyUFk7NXLz8wesMM5QTFLuZxToNzEwado5QLmQs",
  "key2": "3VpBN2vwPzLB6ZpcTt4DLWosgSAzedjJH1FyrNpQUrdb8A1ZjDfY44kbv5EbD7e1NsYsL48goQy5ozXh7feZ4fzw",
  "key3": "2qKwBzK48pFeZRsdZvwufjDNyMU4A7CvQpCjPdmeFsuxPzKzRS7fVYEGdi8RzM4F2HyUZwREYG2jZsSkbHiEnwBG",
  "key4": "5B4dVCh26dohgZypdNiv7JDGrF4ARFj5q62T627kDR8iZWgmYWpXSMSu4Qek5nEamDhqx2gKx8W9LHwymdG7yjRL",
  "key5": "EDBgBwwuVh1Y3kKLxde7TkG1HE4NCVH2eNTgVFkNrVb3PiLbYw6ax4FSqZxF1rtYa4SRee9mDVKPc4kdPLX7fxy",
  "key6": "4WkLj32aH68A3oW3NrqHYBRdybRuzbSD4bH1BeSkLKh9TUqLbBQVTpAkUKNWmRV5yjAdQeUWpbGDHKXtQ4aSDYbH",
  "key7": "5Ea1CjND6RFDQ5XVi6n83BZoViLhtj1Vki69qRhJ1MJxd1RJtDPBQsam2Cse64yA2LPxsT1JtBqsXdb4HCBmZVGb",
  "key8": "aSwgy4TzQNTjka34MpPbxyUDxAyG7kFzyKUMHBQjmeYvpEzEbbv4e6fXR1jityEaYu97r6pcYwoYz1yK3jqju47",
  "key9": "cqDeMKqyRdKyyNpdMt2YB23Mwa1FM6SKtRz8ttfPeo4Hb2U9WYsuH1wmWWeYsHmx4rahw8jtBWJVMqDRZJTHaS8",
  "key10": "2t5o6wRWt6N59hHw1EGAmYb9HWzsuSf6pvAHP7je6TNSRmRbRoyYsd1SCN7Aybz3wb5jnzuT1VQNfPppXyk5CxBE",
  "key11": "YiG9AWDzkvkNaPPCyTkbYKorMf3eUf33nzMZtFTzNFYKUX97ih2bcr1mU8U8NXXPmNoKCskrUepAj53hBkdZmqc",
  "key12": "28M9PGr53YShsos618LDZuPr3va7tHoUhxH15EuJy6eqWvr5pgRoX2f1cM1GefwSVMiHEHZqx58uc2DGZsAUr5SG",
  "key13": "3mpa7aZC7UYbrk9um39aepyseRH8enXaZfRoToALUUcF1hXumNzGxkcayWKmbZ5s7J9rdnwkvtonyFQZ1Mmfnueg",
  "key14": "24gV1GZqsPrnGjtWcdvyMZbNa3CA4gjnsu7z7gQgjBVNEiXt6SHVYeGJquCtzfzmDm9NoWyjfVKX9bEnVWbmYFD1",
  "key15": "3Vsmoah93NmZpFJ71LV8map17kWZhS62mGDLZKhzBjJjBZMpkqe8C63WfskLBuqSdjocRh6GU944tG9xqEMf4B9H",
  "key16": "sk9qENytQjApc7ux27PoYf4WNuzYtEWL8UruZpZM5kJrtVzU4Ncn9hcksKbc9iNEYpaDxFhC2hQi2EPu8zYDh6F",
  "key17": "oN7b99QpSNJNBo3LKmg9ZY3dRSEsRxhvtY3bgVAkKTbuXRjWmhwdPuw9gghQ3MEgFVWc3L3W28aZAs3GQmUQxTJ",
  "key18": "2SQrH8TvPN9jnPHYZBHFYW5QRvFLC5GwKcqH933uyZ9CjNHd3WsV13GM7E6BEJ1RNDUekKca1Vtg44B9phJiYHrU",
  "key19": "5MYihEzD7G5eY4cCDRYkNMoc3MJqfofaq5TNUj1EHfUYzFkwKi2jbMFgoC7vXVtn8zyjavSnytLqu5pKQvGNagLU",
  "key20": "5uSd3LbbHjBTdETCV7nLZBBk5rqdb1qJxFkV1KHZG4ys2numj3pFAB2rDYSRHeNJ4uBmqvJMMBySZwzFHkqSzqJ9",
  "key21": "3WpXWESHxJXwi1SSkWubERvx1oygCvG4bKw6ceTuctZ9WWkJsoPwtwx4M4G3pjze13kg3fss99AtQahRJFWb4BZV",
  "key22": "2MsGV36X4HSB4FGM9jX6PGwGXoobmR3BhrHcaV1UtbBsZa5T5sm4wSzq8KtSkARXc3FRcxVPQbnioijFkN5ZNF1M",
  "key23": "5dnpW7pfvze7xpnH9NQMbdBYoNf62UNidfuHG7m9nCqUgFW5sx4SSrwAQWkyyXujVQGNvA6aE5aJh8AQ3f6XfDzh",
  "key24": "3UL99QT8Pa9QhTcpB8Sh7En28bxoJrb826GphGPFqn97ESqZgqHXrgexPvRfQ5JpNjx4axsGaFsAcQGL7mgrgDxu",
  "key25": "2F8e9kSSzU6yQrnBhJLKaJxz6m8f6CNTf6J8KbKu2SenhFkUkZGxe1b9QkgdQ4Fx6fhWHrsaz569DTAXLBsEHKse",
  "key26": "3bv9ufEjAL9Wi4hLgWJoCZJ3cYHrcmsx3vzsbCYAofxqY5PTfahkdjAXWkHAMuoREBK9kv6wW2jp3WoJ6t3yy4mi",
  "key27": "5jC9Uto478Xm7XVpGhyhpz8i4vkXoUmorzMdwaUtFdETZjmLLGKuGsit65rQWzkzDWoxUUZLYbR1thNr4QHqP4bg",
  "key28": "5PoheaL9qV7B9EMEHsb1dBkhZhN1G1EDv14GUMCW7fT3T933uE2qpBjDa7J3HaW5tw6xUHxedcsJcrjRYPvrHwge",
  "key29": "4AzGYsyKwGQieM3QPm8GjDX3K485T5bSLrbRAK1HJodyYpPo7UY5K6TxvVeeimMmbAMpdWPyjZbP7oE3ntKG1PSE",
  "key30": "5sS9st4iGF7KZkG1ZAQ5iGsQgenVbXBWLhhNpD1LxNP5izazuqcYxGHW9R6RX9WLpAVWgKfa1VegCcACrMFgkFeW",
  "key31": "5FyjC4cQRMvTn9ijCPrCta7MGNd7HcGvYit6FFuGNwug2LTuBpSaB8ZqrqnNGrhUFxB43dmnKhoF4cQwu3GLBiwd",
  "key32": "66BVmtnhgsKZzNuRRVKhNE6iGnAxFR81a6mTefpnTqGmFMsogpcYKeFQoaJo4rbji6S7MrjDAerEnrsHFGqhKWnN",
  "key33": "5YXZt6mfPUJgHiJCF2pU2ubdpqt8q55MTAKroKee3B96TyUNzK62TaKBYQKLXi2NHkGFEWPozo7395Up7mnSjjPR",
  "key34": "2p2YTa6H3u5AQScwBQoJDiJJBSPqQPb2noi8Wr84qezTVQDoF1vdoP4zokWXD2wMpfjfYAu6FF1ESNZdDoLhPgcU",
  "key35": "3nW7ssihLXnXaDBoon7wtKEGPxzT5wkjE6TrKTwyF9JpEVRhtTXhr81UjKYYh98hmyY7w2MrTRwQ5qVQzYab5tAU",
  "key36": "axwQFQC5rTDcSuYKf6kv3rMKzVVuBhejJw1nnM4YDuZod4sRqLkvk4D76Vr4VeH9551DE3kHyrBH2194wNXPvs7",
  "key37": "4XXJ1Q4sgZthSuNDDsEkKgfrFPs1ng8DuYYeTqupZjkQhfGVCAPS2s3yoUbkoJKsfT2tmy9eaSugrQdHCXiTgvBH",
  "key38": "cVHHz3ZawcUHwfpXMrZRjYDSsPHY4Vv2VPc38x8hyx8fZS5D2Y9Lgr28kZwWdWMh6eRiqZmU9DjascckPSKbo3r",
  "key39": "3oXKm13djeq26kvcG3R3qHQoMttnjenc168ycy3q6C5zfftb5dqt62Ucq1ZGmm6NkbLMHEM9ZAA1fkuEQUde3EN2",
  "key40": "4QaXWtqUdHKUmbpu1VS7Pv4hCnaxFE1EJsuhD5bzr9rGJtEtLyAQNCrZhKuvoEkUTZkfcT92gJ2Ue1MR5pjEBTHU",
  "key41": "5HjP6sbon7C4wipntRB6tE2WsUYYeCaPpYPtzrPT2yH31Ps3WSgGcwsikoTwrgQ9gtmx4WKzHUDsFV7b2ud5XWkh"
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
