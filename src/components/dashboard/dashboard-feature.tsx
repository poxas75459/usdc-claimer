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
    "f6Zy98nWTM9DSy8ujTazbUabYyJRNSA3zwnRmwG6Via6cwLYowSybzf33CCXf3dAJu7YhT5Y4U3D2xApbzy1wYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anWFAprmYSyShseBF4wRv4uZY7k4SfGU6NJty4pFYVhC3wtKujwHmo2FrRoCAtEo8pENMvZgVWQ24kHFxujXJSP",
  "key1": "24TpWNxpQADgbj5tQe29tpz91VnuBttsVHcnbDm1mPqsGVMGQSN8UXVEBSSEcikspWE7MyUXRFamPhXj1zJF5xqd",
  "key2": "53Jy3MG4V5HoA8fej6BZpyrjz1V3L6NksUBhG89rSk9F3qLZfce1fmphGhPBv7XRfxLEDp5s5DcDVcyeeZbF4mD8",
  "key3": "3wi3Hr7mzbXdFNEwU87b8BBBHnynKPiXBfbRWo9993rsVviAMcHp69Ej7JgeRR41hPxpda9UqYeisCzBtNE5p1JU",
  "key4": "QPwrETWzmXYe5DdyNjoJKRt8fkuqHQU11yr7Y85tM4kjYYuNWNhVfMiggKbXteXE3oQRKuTm1KAGSuxnKQDoFGE",
  "key5": "5hS8tAjAC6KEBgCbrd4QWZZghkD76wqRHjYivK2N5APx9dcJEXbqYVTzxURSMpxoq3saK1W8JQB7Kq7XhSqkbpxC",
  "key6": "4g8vVLrkCKHJTtGvYnc5uW4t2Dj7L1Bi2J2VXN5Spk7Z9kgqVVSFVqHHp9GUqEYLWpWWSEa2JWHuXrZPwL9JydPZ",
  "key7": "4ZS2e39ZqzCbeYYT2UfaYTvurVQ5PgqyTHyV8vv5hwqH5DdYdHzWn1HGCbKYs7JeTLxQKF5A8NYr7Z2Niwk24oUv",
  "key8": "218V5a2KZuKnWUDUnsCzvY6YqDuWaS5zGS1VqofUTsH7nuUDUJSdM3tP8wjUhG3TnqJm9n9mkDss8w8fV1E1jzey",
  "key9": "4Q828PktJ5E9LbWkpnFyxZ2r9PTSEurum4xwH7pWetgCbV3CnbpPThtwcrK7mznrFDjcZpdiy6uJacbjmc8iWtbp",
  "key10": "35odCmdf1qyMQkM73UJwg54tY9r5cSPtFPE5sUeDyFp7PZrQyfkcWREQ7cjX7kKW7NWjthVXg4E5tGKQxs6qkBQQ",
  "key11": "5MEp9NSKK77Hj3szwK1rtQLbMR73S8rVA5GepzqaHsPx6Z6NHefX9G26PXN1RWCmNeZKZEoAmZZzLYandSjfutyN",
  "key12": "KrAeyKtJDULJ8CDQGVVEAACeE5dMkAk9K2nRkEJdL417R6LT6mS3qAWSdRYKReacnj2rGbsioWjUrk8tkQtaFDP",
  "key13": "KaAHYpQkFapEpia6K1tg5fFKygmD5WG1jM3o2yo3BswPiF1KzA5BMTtJiaE8pUnY7Wv9v3yUH8TCqw2htCk46iy",
  "key14": "P1DQBDGWcZjwSnTS7pv7r6NakybVqNCfjbQRFvcBEXraHTETaJ3AV82grBnBNnYPtP873n1LZbNEgALBfvVPoNR",
  "key15": "2F9y9g73Cpxwj5kBRTYWQE9ffvU3bnb6dbFDRsNCnx3wCB8xNiFPcBjmvL6pkHqjxHDyC536yiQdcGUDqvPCuqKd",
  "key16": "3YSKkajYir1kGgMSdRkXLtiGKJ6s4SfUkPmKQQYkeTkMWRiLHDKMdiamYWQVaMYRpmHDPnsepnPMsAESPSzvMZm5",
  "key17": "3GfSCvTBozEKPxiHFZ1Bbsr9kvuuEVXuUBnBJYLCrnba4ErFsXSAbMSLWrvaADG3Cyf7HEZZFvfZfjS5dhX6syDq",
  "key18": "x4VbutixGgiuJLrHF9wue8kKf4r4uWVbEaze1CpsVeavAi9JkjwF14Zb3faE91BPgXfczgM7PEehDa9KhSzm39R",
  "key19": "3qeAA9d4KbRTNRDto9EMXCG8rXnSdhN48xgqYek2B9V3sSS9nbybRRmLUTbY5Aucc7PHwRMpW6AuKJCEe8x78BrD",
  "key20": "5TigBAiXEJtd3gEKdTNpcGux27GeUYTSqZt62mzCbW26kEpTEJuis1qGbNVpWxMNTzhFR3FRAn9DkzPhLdooC8G",
  "key21": "47QrTbKzHAzKaP2nW9jXgRqCMAEXkbREBu6eV8qSgP3EPNxkiZHCRCFRyLyKphBzjkdXG2W3v92GvayzVMv85gzc",
  "key22": "Whi2VybGgvKes5LWxsdEJDT5joPwpe2rHCckG75rU8BCHSyGDbsnvEuRQ8gB77nk7qDERhYm2iYPpVX6F25Cn2F",
  "key23": "4Vaax2WPMHtzeRktFgTgbqUMPFRcemuMPR8VSEXRoUES1p1N2PoMjSEUT4meXFhs9gbpJYdPnvQMqNjX4o61ZExP",
  "key24": "5vi3smSNBcu8tMXv9i1FLbYKUrAUepYBDz1Gv51qAC5rHZsiZTbDnwP1qE675jnqC6pK42wg54RenkaPAfTd9g1K",
  "key25": "3NZUXuwKWstQzPPUSSHJr52evJgHst2NMCfsXLnZcaa9G3YJN3QUd5YfbmY4jJRRy2tyjGSW5yQXAdpy2XhwKZfE",
  "key26": "4zZ9E1exFUHU327EGKC2CzvkxzEYQbV1Ej6FfMf3ndLykpF2ecgNEWAhnKwQmnm9yYwn1Kwig4UTU3R1hWReYTqu",
  "key27": "4mXAcYqAe8oZn5spJBJJHmgRb6U7zj1F9rJqSisuxUaFsGSwR8RLj3grea8bQY4PFCeSndiwkBuhTWdGRixBsp19",
  "key28": "5v5rLtjbzpEGNTid5LzKksAVxAhdfnF78dkN4qxDdhP6q32BTRYP7HvodqduokUVxghcs55yAFtVdYM4JCshN8A2",
  "key29": "3DiBLAcfjqabYpdwkaMfrbFZD3gRZ3GaGibMZz15UKcArL4kEdb28njEotk4TYBzVZ39Lu7ub4hvZo373ZAUL3jM",
  "key30": "5F7AgFpqNzsqoVVSLHGnj7EAadDUV3gBEXBSotskmzF4caodVxZsawU7E5GKb6od7NevfexmgKDom5UZUuvw4zMc",
  "key31": "2QukxVNqZVZhjk9P7rvWhTSXuKwVRZU3PuFfzskivNq69wEEUmz3MzUmu1eucSfM6R313YryoySs33BVvXF7cQJ8",
  "key32": "3CuWmSqLdGtByW6u4234bkiYAkxzRMWkbsUf8XcvCgtcozWc2UZfgqAYvbruRhQzPBGV7c9Sdb5rwBBMsTuqqEwQ",
  "key33": "jromYZAKevLmMhmkNmJvJ72ycWTSfX3nzeBSageszNDPnspWUnofCsfL7Zm3kXSPCf8yt92JswWbKE55HDWo9ve",
  "key34": "3F75e95T2nebWvsouY8py9qxS7YYfWmfY8xK3Qi7QDUG8bEGERADvq1jLoqnwFLeMdPYWXrYuhJLMwhWhdDV2DD2"
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
