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
    "3gn9WEXEqr4zNYeqBTPazJL12bZhs3gjrT3fox1iiB1gzz6WzNrrE6Pw17D7cH4oTWTDK75ZNSVRrQeB2DV7aPN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mW7zTztUYq4mKogd9VesBWisdvP1MtvtMLtE7WuKVgaR8w1aNQ48AHRdgWCu773vhLoF9Yo7fzQ2XAqURvZ9Rmh",
  "key1": "4TdBq4jVhmvRaZhhjmyxzJojbb2CVV2AEamHnjwBqdKhq7Z1KzpFZvs7fFoG6fUzNqZE57oLcHnG5VdCxQ3UF4CB",
  "key2": "5E4uPfPAD4S5WHPDwF9MceQMvsdQYiehTCy1Dc2TT7jhKmLNA9gBozAR9Sv18C94oLq88i3JQai8CX1xy3vmCt1d",
  "key3": "4Bx1g7n82e4FBZVdCykR6bVFpcqU62VoEyuqLaDCv4AWHjVegnrtXMw5AUitRfN9jnC99UZGHNsLKGgXNyzzZsvT",
  "key4": "2Y6PUguVSHQjgn5qFFyFsKcUreRg3KPvE2R5RLqowj9Mf22V3rXt1e23AzQAWAyQRdTSyW9FrYXT6eawfcBDQc7",
  "key5": "5232x3dwqvxPKYaLDtK2A8kY3BoBkSUVp4wCs7y9aVR4Pgf8fe7vHpB9DAJHXhxEBwSjZjA39baUEkJJtLdA7jHR",
  "key6": "3crdLkXzQvX49sD4fw6v1wzFfuDgKmvycobu25bNEuF3UtLktEdEEBEGh1z6hrg4RfNcx2VT7VkBbXpirUWUatEG",
  "key7": "2FQBFdRFUT2cFmKByupCTGUXFK7AdxxufrsZJu8o7XqQXdAhT41SYab6FgFYUQD9GuL15KjAC6i4cBmqeaFn9DRE",
  "key8": "4njnDNdXwrcgB36YAFj3aCb6aB7mVrM4gevS1i97k9647HMJEL1YqFESor6dmJyYAsYVSu5dQuEiX9kunq7r9snV",
  "key9": "5Gj5VDg8bgNyL1B3Txku7PbVtGTSw9EhM3LAke5EVQw8yGM4hr4rGQ45pWH5gjeBNbb7kJCyZwVoWNfSZDTYmd9z",
  "key10": "5XQ37vQvXexyu76d2PZCmhaYZLRM8EEj5nMWqpMpM3zm3ETEMQGdADgBgHC5YVgV77wWrjU8d4u6rKUWfWMd4Aqn",
  "key11": "371oB3XAGcqPnJ4jHCzz74Lw3WZKp4x37qp5vKxDXauiDST4vRNJ4ejnbNJ7xXi6keJzRVs6SfgmrKr3CgMVH25H",
  "key12": "uksvoLzZbAur1rGHoFKySNX6No2si6CCdPo55EknPT6daMwRNzv1jK8VkiHWWWe9GjgCbHkXdKFbvUHDhtUj2fJ",
  "key13": "S6fP9PdZU239Lsfk2ZxJFYyPWFYnevvFjd8w3TwFwYAqBTzLRfY3ANbagYhTxVP52ghZXQeoSb6f4GoUG5vWcPj",
  "key14": "3AkZTsfZPiL13ziRpBuzz3vGFjF9aLxRYxLmEQRicmLuVbRHJdceMYr1VfYw9pXsfgJGzbvVfZmq2rRJYFLPLf6Z",
  "key15": "9BKAXN31y1ivPcaaV9KXaSe3oYTnARYzeGYm61GAWdvbLCz8t9McVRzdtdPBoYvBLDM2wLrqaRCvovRvo81FQvZ",
  "key16": "3F6pwLM5F5bZzkZdmwNejL1RPB9x4rE8FFJ8iKZaq9tQpj8Ez3RKkGGuFP8k6sAxH1WC8J7inP7ZuUiUCxjQ9a9k",
  "key17": "37oD1xJrVgkpMRvEXZDReU99u8m7GQoXjLor4cu1tmz9p3CYti26CTCf5ibRdu7jF7eRT2ELFvhDsJaTwDBoimpP",
  "key18": "3mF8MjFJXFjhtPWizCFjCNnRdcs8g8iqs8eZjuqzYUKC4m1hbSTmPyzztwJXSFvm6vw45kk8C9roha5RyeFmLL94",
  "key19": "3myGX4M7e5g5mjfY7sqL3ewa1N8Z3oWv5d99LjqiLEefv2JHs4bGst7ouDw4wEZwjEL1ECzmVFVCLhMap9zPBt2C",
  "key20": "2d16iBcfsvLU2CR7G1R91GnpWrKBHL4q4L1KZRH3CMvkaPufPvDwRZU3JtkV6e1Vrw5HZMhBVYtUmojk6k6xjUQz",
  "key21": "64PBw9cZmLyN7y5iKKZ9sbFxQ3SmN9upvmYgXdMeFESWRpqvJv59gSZnxuKcL8sRTyWNmyVnqtRoWDK3jjYTsqZ9",
  "key22": "4njG8xsgRuUtj64aGGESnqaZL6iwwKVTWPmoDfL9meHca7BrTjUFCLaTEV25GrDqMVupRJ2miMV4xC4jV9e268h1",
  "key23": "2ZaxMsrEHYUAk3zsN9DFpqoQyZEhy6z2BvMQa4EZnf6cZnjkZfTEKLabpKwAyCABYUWrorXSH2FgPQpuJrnz3JhU",
  "key24": "18R7iiWqsN9r71WP3xfm7LfLmT5CoRmZYX5u5v3DwzaSTCKuJV1YC2ipbA5RC9gQHPBjfwqWt5tYNThNfQBiTQh",
  "key25": "4BNRLcdGrNtdhYH4FozKcK49rTigpdhSA6T3cmgyaWW9HXu6SkXH5y5Ha4vaq7hXV6AJzmWo6UqaATw2MrExdpN7",
  "key26": "5WsisA2PTiZiw9cQ3VXCcidCXQqgNPgKSYHhcF7GNiTDsf295LicZAeHhu72C2T3xc427PfATJq9RGBNPp4y98SM",
  "key27": "4uREF3RWcG3cvatvr2fk6W8SxKRssDUasgr6e9HVEGoc1LSHLfBuBVsUhxcJ842ooLCsBZQioJj3XPNTQSJ4WLtK",
  "key28": "3LeYGptw94s1A9copJxgkTJWsDvYmiWjfVxZPMqM3kmWDM6uRsUiTVdQmdbPBg3jE89fJg9vNaQquDQBspHP3Q4j",
  "key29": "3NnkwGVvYA76pqfW8erg7izxneQBpdzaLs46SjahmX6aV4a77HGZwmgdv4CgaU7sN4Z77nrjmyLuDoaDB2nBGdR8",
  "key30": "2qsmu4RmWxJvo9LoL3uobmgYwFJFsXhw3ab4B44bUgmYvvGTuwbkPi9c9b6gw5CS7DTgGAUsTcHeWw52QXjDTtSP",
  "key31": "2a2nQG2hXXLEhxMWKampqAFU7NgzDt9jSftUm6cDJGbeS5qXbnUDTVFbFoeqFeiDzUDU6GDfvZLEkfGZj2Ki1h4m",
  "key32": "5PJm4NNgPJFCGgt2Y4tCijyYDwDHbFb9dUtPdx3rY5xro3fLx8BJaLYvyBw5PqjXyxbVKNd2HcWuPGLoXZYnDJg4",
  "key33": "5joE9szHVFxSH4qotFGbF9tkVZAvuDgVz1hWRCwzS7D1yT4h3Gmg2we5RZ5uTjUz11DBvwpaPabaxnLSvKpJdAiK",
  "key34": "4USHwXCf7KxJoYFfdCESmf1Sx3iv9NWtHcQYKPxe2vYS5vA93g99s1tQ4M5nSWWcaBFDUH4kGVy4RZGXftv29bSF",
  "key35": "4p7Z54s6rLyNzBeAaFy2u13i3VjVK3aT87saxxbpLQKCKGKWTQnMQrb8Wx7KSY66SEdQkQQitWoRUCHkGUXA8E6b",
  "key36": "2rhZ5sKpeStWHPYNeGkCp9YidWxjdrfviT8ahp82R9gG6avu1pGDsPY7awzD3obhCUbJPfFXEmmVpKvrtYs66ZoX",
  "key37": "2yzPAkvSUFyB65ev2LDJktc9mFE7xraQ1V7ztP3rt3691W49ryB2u5yTNK6BXaZ6Tg5QuWA4v349TyPcEJqi2azi",
  "key38": "5KrxnALWMWEPWPT7QjdDWbG18vYYM2DBMGaxDVrFyorFJvPAcQBrTsUYzWncvodMpotWamVUhgj2TL4qj2WTraTB",
  "key39": "33VWMpvNogeqVKzNA4K54SgEVG6QtR1Y84LjewEHAyam97Uovu1HzNSNG1sTwVmuB2QH84xfMXQkRcgB7eAXd6Xt",
  "key40": "uuayrsWKkmuZmF6VyS3CU3FDkRLQK4jv3mcXNAkvVzRZNb8MedEtS6CA3ZrFxC5NWpLtJcZySKiqpT38FBxG8Mx"
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
