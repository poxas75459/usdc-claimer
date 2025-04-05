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
    "BXeCfX1CEDqY1yu7fzNCVKPn1Nq1jeAFB8ceAjsDuXMsfHvWaJf7annHGoPxMFyaRDUkan3MHBrTLNWFXdwdAff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pt9UPNwVz9P96uo7Dzsoj7QifZgVJofCWL5rbYNteSMC7aNvaMYjspz7KRyB35i6dxoQFVcoBZ4NNhrYV4XH8fN",
  "key1": "5Panw2PVqmjHby4d4fFoYT7ZxzNWLet8WBqJezDR9qLF4uJW4hx3XbRVKL17Km3o6a9tEx2tnVHw1KXWtZuHyzJk",
  "key2": "3rfCcMqBmrGUYhE9DG8JnkM9kjtxARNiiGSayVkrHFNh8aHnAc9sQCN6BbJMped2mh7wn33GBKiz1PRJQCMGP4Mn",
  "key3": "61wZSAQYTZPmT87EWrzcpVJPj7afEG5g39gjeFU3z5Wp76aeR9esMvRJjCc96zgtT7ietEp3RcVHgG6eWCvE9cP7",
  "key4": "441ynN3ZXfG3dHkEjZG5tZMc1196Q6Q1e6JBdCZd911y4pK5hBg3qvFtFVnWM8Z142dWJSpEbJaiDqcWZGFm5kni",
  "key5": "zpF3joupTxr7MdyVVJMgav77j7j6ixZcufEhtYZf2EN6stGRUcsA9SCvXM1rCB9FCeMwmRpVSBNCUS7EmB4rnDs",
  "key6": "37Lj3nbeRQ1z5rTYrkbuQzzoJVzdpFfe9oaUz47RtX2josvFzCHfuxcwEViuXubqFKM97pvFA3ZUmfTqTkVS4BdB",
  "key7": "5qaNuYiUzZra1msuBMaVmcLFczgVTfw3aNfD4Arrkzva1KcEjrLeo7YbLZXxkn6P37kQRPQyBWEJzFsgQStuc5AC",
  "key8": "3SFebDckYQxv8j4kQkRB2CEfu54dDp2VqSQ4yXvNQTUn6C74xBh59D59BemBKF39gLEiM9RjaEgoiHsqW6qLczLb",
  "key9": "3kuHCmWweydDTHAY2Sty7L5gyLPRmv6FW6YZE4iS7E4hcjYRMMMZT8nyx2mC75NT5JpTsf1NwjmYGNJdxicsEJoa",
  "key10": "4dby7uCowQD7bbQ5dRZyf6dF98MCtHUjbyGVxfQQks4Ay9SjNkLezt8a33t92PZih56pkR1TncqmaKKi5fadyytE",
  "key11": "3sEB2r3g216GHqKE6DBcYcYKFQd5DdoFPRj2Y6nP3gt8oUDDq8AHaYUhLZoQdtQRT1Z9wmsVNCoghKhQDfte663z",
  "key12": "4NtU8frxttXCX9ixpkYgwkr76HuPTC7rhsXuqc7vc7jy3ryZ6YWiWg8QT61VLgZdREKB4JEKFMNBEhmCyBk4h6G1",
  "key13": "4fcn67Nr8WFDTaUScYktpAGVj1FN5dGB2zpJNXGdyyaYFUA5CUoD1QD1Jj8kKa9hyN9JGnn3A7nDoZTtzYEhCeC4",
  "key14": "4WDgM5n839Ah2ge8VKYZfZKF13Ue9pgvGVAhijWLJJ24rAwtWGVDxnLg2Rn9H6y1dwD6rMqzkCPkKvUZLMGVozA1",
  "key15": "3pr3xoyeEYdJ8YakVuBk9csEiz5QzMXDjxhM52qitaereBr87vkTTX4UaNAf75iNhmPKZ63ZpkbnRqNc3y98cnKt",
  "key16": "zeGPoHSmRMK7ny6xqVe4cTYZiYv7TzqnfmtdmJFc3qZUyzC4Hzf88vdWhW79LNVHuoxoDd4nRpjjxvHtzXhb5Yh",
  "key17": "5VKLib4gQKNeCiKe7RtsKUFZfX7QEi1XC3soMpAByUU3UBAjsH7HvBx5a8Pu9WVCnu39Aaqsyd6UJPjo3KDLsxwj",
  "key18": "5h7WmoafXXpqkYGwZ45LPXN1jWuC9zPYb1L4BXBJfXts9ETBz1xiTuZ5LZ2mV6tS1KSciTYfjW6irrGtyD4xPaes",
  "key19": "4eYRoLXXYJvYRuT9zEynius7hPooiVxkWAhVrU1QNZC4Xh8DNn2Ea92d27YtPm3we8f1kGwvTT3GeK1oFxmsmhPm",
  "key20": "2Kzr2ZkecQX2uLnyY5yWmpijR2MRVA2GQMFdSaw9wPwe3yjgqpWR9PnyZQc5FW1zar92azXYMSduTx5W4oCZ8spG",
  "key21": "2kxErAi4aEEM5o55Kj28UCwNQoX7unPNmQGQiqTLTqswLvXW4BAg55vZU7VFYWsFeE5hg5d5ec5c75AmWARKd8Z4",
  "key22": "64UBjGGo1hjarhL1Ri7PZRqSHCL2W3Qb2vALkCjEwN5qUoFHLwVrGZ7NfVnsyrrsfeTJYLR8xdKa6WPbQpVdepJL",
  "key23": "ABUCDc5m8DwaCRHiRs1xsf3F5TGd2xaXpgPmHn3MvgDpudUyC8872u5m8jRs28DRTARyvsWFsYr4hcSb8YPchUF",
  "key24": "3fkcaZcDCHBTvxEHht3px6exDaPbBxiaBdEx7z3f8vNeJ5Ad48TDVBCHsTWgjSTNs2gyBduh1JFNSiAS6fm8bqEF",
  "key25": "3EgTrDPgiQs7tMCF24TNSYwdGKADEgbR6V9YeXMDLCXqEHiF7P8QLRLDF1sQHRLAoN24UQz2pH4CfJN97PBJR8Z1",
  "key26": "4KXGM8dckNMcuXdnTXjHgsDEtBGMzKy3pLGmDouEceVPDR8h7MCAd26jtV1sQYJJFgzuPxedTjXYfXYQwkuzqaKy",
  "key27": "groEo2G8eGVTDLjBAcn7ioyKGZftTisUQzRaVJsV8pMJqbNTH7qYLZ8B8cng2hkpgp2LY9NhaNZNTBaij8kS3RX",
  "key28": "gN3QcGs4uGkMTijwWC2QDsPjf4J1BWZ4kR4g7F26cMEhNqv47vnHgjicKwa7UqSeETJ2C2taU9tY2BTYYGRZbGs",
  "key29": "Rw3KraLU1SQPx9L5bfth7vBNndyuufKeJJqiHuGiooyaXjxDh7UYdKGS91N54c3GjqfqTcEBot8qNWDb5AWu4Je",
  "key30": "2rqkzYBgtS6sAAyZvpy3SCVPYnCts7axmgAH2NRK2yPdhdAvfsFdMw9SB96faSdC6AGkqf4brrS27YxEqinFrHpY",
  "key31": "37aZNyi4bYW54J1ga1vdkSFtbVKSKxc9198PqfkeA4r9qC3N7DzH3Hv2n8W9d4SNGTsoHqGfZUHJZBaPjCcEuPqW",
  "key32": "WNx94E9DFhRTWfP3piBgGuCAUCwgKCY6999FhEvdR8TZ7deu8MHnjjzem4AvfJXXYmxf5RWviYqGjDRkKPjvi29",
  "key33": "3gSF5hmj7tLJQqvEYsaLa8zb2agPNJa8HexqhG4uTnnUyhJbU97WSPVqKPf8x4dkgrR6iue3xugWri5aAaxnp2E9",
  "key34": "uezGCmtuzPboHPSi4guDf7qrkz9ZiCGRPgaT1qN31MEARTffJphbsaQU7Q9UeGPM1uDBiKhhPfpiuXqNSpdJKCY",
  "key35": "3h8r6woaCNC6s6Bc47ThMagLxmZyfxpMyBW2bBiKHYohA2h5wFFBpcjkbGXEAKXTMjqzDmd4Tpu9zmxZSNDjvXe8",
  "key36": "5zdxLnyfqFU2modUbyuHBNYCptx5EjGNdUveaR8JkDVFsdbfQ7QA948qk2zSuhc4XjwwkuCRj1CF49MEd99ZTaiL",
  "key37": "3miEDpEFFHWgT5rd97CSAGz85tZAPxwnkdQsfboT3G8Jh4hdXAu2Q6PtSXnBee6woPmJnHGqSqHbJ8qm5xhxhcG",
  "key38": "3NBiP7iXzoqqLyLiRFffpaf9J43VYKdioVdeYkatbqLCDzsw5ymoznin9YNcbM3rTpMPXHMSnyBqc5c9jHBDK6Ce",
  "key39": "K6dxbJ7R5zK3Xfd5hkaWtr5dnHjy5m5mzEg31VH5VnoWVjQNmrmmYufqXuegvVKRuZxURkJKofMmk6WbhiWx2Kg",
  "key40": "YpjpAFnXf6QvjAVRnDzCUmbqFW2t96FvvsRc3J4ySMBMd7p3xLWC4T1sCc9EK6oZw5fqX23kJKNiD2ukAHAQSDG",
  "key41": "4Vs5N17PB5qqcBqDJpyCqfwbSotiyfJ3RPx9JdChPPXUr9wxbJ9Uy3u5M1Hq8ntnhuaTN7in3dmhSkGnTzaEcHX1",
  "key42": "4LLvze8kKde3fxWqoGchsHJvWPwJG1FFU6yrSt9wnyMNNNBPfkbpeY8q36wnePmQ9r8h2HwnX6momRBNBBkfjpBD",
  "key43": "4S2KbJx4z4mUJ7x41TtiSYPkvPczd4qvwVqM8oLftX4fnBPArGyDY2QzSxaM6YPcY7PPSADsedffHRpZtK3qGkxM",
  "key44": "58UhRU6US3D7wSCkr3TgYBVgXhmvLCsWjhVjCV1WzZNJAkR6ZA4C5DjVjTCphE8VZwbRz5zcPQYkUNhSY7dBHhhv"
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
