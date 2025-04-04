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
    "486ezCLBm3rPoV8L86pA7PJ4j4XnNoqva25pHbjPENeGn6SoFKxFYZ7Bz39Mgp3KFEZy4AtzdRrzV6syRnS2xr52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAHYJEFCy4M1bi9DRR46GB8ecaMTeq2nJj92qQsg5dWcZtuEPn5Ki9bEPodRcKiL2cSYkurzeNgR9TimHFf4qxj",
  "key1": "4E3DwX1vkY8y2SppR3vQY3XWhXo3YpAF1eXqEK1DQcv9H4Ffvu82nbJyfrbsbAZrEnfdyvat6X2vNW3edTXoyE9c",
  "key2": "D5Qg81BuFKcdy551Kx2huhmeoVL4TvWe8xJz2QiX51jNFXaZeMMJcvRqU6UxgFzU4CTW4Y9j9HbX71bTKFtTxfu",
  "key3": "482qepzMWzqvwRhNQwJ7D5KQsCwoMsCziKxXLYVAAkXAFtuExF8iJuJDZWyQMUWDFAEYaZsaAExGVL9depVdcyUF",
  "key4": "3ZVxd23NwQPS8VRdXzZjwJZNF3p28eLXjAZTRce8yZ2Tq99yf52WNEfKVo5k94d2pYycFT95ndafEnXehUrCyWNq",
  "key5": "5TpizWeaG9sZcim1219JSueYuBNpVbaX57SJrqhisCe8i1YdpKjjsfzGQrN4d9tVPcnP8AcXNNXuvzdbJoDvef2p",
  "key6": "tAPRSHvA4wCPX2MrLF2bTFt8AHm1P7Vuk2HXXsKJzrGwYNVrm3DeWpfsFEU77a5cTxucjqK6Nj2GyVckwv6T8fp",
  "key7": "66EGz5UFDGUtDCB7dt5Tn1NnFuvSb3pbQwWiA7w4YE1h48tx3fzWtnrZUt6VGcdsVYiwTA1ezqckfZUvbVAEPp1t",
  "key8": "3Vs33qXHVAVrNpyrvNdqWYfct17Q7nGZ2qkEtFGrq2eW7bE5vYSHsLrZRUfWG5fiCz6hb7uwa6FbiM1TqfpdYfg7",
  "key9": "V3yphDoQvVXW4CgpJDpAs2WPEHWyKhRk6aA12rV9rwPwkDr89agsfZN5gjmoGZVFaKsqKznxc8XdHNCnnnEWd4e",
  "key10": "3ELHpNE9KR6cdXarSUH8KtvYXnYf9wq52LqLTqe4E8KUsYSqKSWhdY9owYaPADGyApFz4r75qyaKo7r3ewJbdxL4",
  "key11": "R1RTqsUt6JrEJrBwD4KfwCDvcwQqrkUTF488KU4YgfnXArW2ztKhnqxh9rNP7gv8MqWngGS5Waks1hkQ1oSkDHb",
  "key12": "2P9ajY2qu87A72zELh3igP5391L4ZZnJbemt9H8yVvurozv5YQV43bUA22TAf6KAW8eAsQGiGFjzaSGywDnGJAB",
  "key13": "5ZUSkTX5FCPygd1LuWoPyM7YRNSGdfAig2fKnMmwyg7BPFEDgfnxciCoUKHXtQwp7tga1iAqY9UqX8y4w9vVjxZe",
  "key14": "CZZJdya7UCcH6Vn7TbYj2TnR7hmp2cir41nBnwrofvpiRC8jaBkVXSRAzzdbhkjo3NaPTgLeXifTikiXkFD8QTF",
  "key15": "4pBFd649kf8KStCuAjuowTJ2ZjA6sXmPoUwVhGW4RSg3NKhFg6fhnXxHZxU9E1doRM73snr4QX4dDH1BfuUJHqij",
  "key16": "4hBydzQY9XWZGxJU295EXeeRxRsHK1Hxd6J7i1G5XKrsUBJ1baicimsBJrH9oGAwe7K9uGyXmRiiAQGNtL4on5Vy",
  "key17": "HD2hg6ssCBk7uEY6ZZVJNTAcALKrCe3sEcfdUSqprhqS8PmrkomzBtetFj2ionFCS75SC6TjWgUsy9oX2VbMeAq",
  "key18": "2wonVHgAFfttLfR8RPs2QRubu5t5YXq9tAujg84A5uerit6LVMHZhsPXx1pvB4GLkJv5YPFyYHFrdKoet9JHqEJC",
  "key19": "5a2pGyQk1583xoYw7fwhePiJSSKqoSToF2LJDPc7kvinGCzA6tJsju23vuSeAs4EXy3iXxoxmF7J5TAzXGW3ddLT",
  "key20": "4XaXN7khZCokW8TQ1wvTFfGvhVoGpH795nH4euZAp1M85wJAYxoaonncHS7GcnJe7NTA78kHZztnRudqv6SBvEeU",
  "key21": "4Evd5NzMYKMMRqrv6EtKECbkTXrPmm64iYReJvBiejnvrcBfVRKeyH3wuvp4j96shf446uGjeiGGmB1dA1KzWEop",
  "key22": "62xMPwyDG5fueYmk5qRh3qcB9g79Ku7b4488KyHCFVFNXjS99HnPFXzadtyf6PWMCXWW28mHv6c1nmE33XDqxsVU",
  "key23": "5fRHq1NQghft3hj2g3b4ug3M4LCH7Qbf7xzUvFExW8QLjxf3fsRsauPL6h9tpfW1nAN7nnbRnHWVvYMK2RTz8P2g",
  "key24": "2ize2JnBwP25p4h9dYYmHLgZwxX4MfvAaufhZMRBVGC9Hq97yo1dBLUie7ewadwMBuajNhsxPpA35JVaZuztpRzM",
  "key25": "33BNVhiTGh8tBKBB4ELKcfnYrEjQtyME7ERMbU5K9nhaGNB73X3tw7kkN6HxNDpf1N3s36SKDsVyXUaPXuBG84WG",
  "key26": "25rm1jvDNbtMkRGUDmeFgPtkBV4BNSNsGYM5riGEx4cWkFBk6pmbCfji9XmdK5gHzWo67GL4ALEq6wfvKYDzRft9",
  "key27": "3aQCmhpTdsUaGLecipV3JS1CQokCBZpHGYfsCuHgNBgqLsYkKKXum6MLX7kpkPP2p1WruJHom1jM5nYvXnwd4Nq2",
  "key28": "4XcKdxWoFNvRa9kj8k3D8n2dA3J6TFMtpdm47aeycrRGNShUwRX27x9UHwfTYeUpGLFrQQBSU8HiywQ7CDQJHkFC",
  "key29": "WYuaMLFgJSPxRU9zCYExvGpjo6AD2TaVkz5s6yHN17fLm51EoukGt8fL9hWC6RbsvepHNHQ6Ei5u5QUph7RCepx",
  "key30": "37qx5iZNJ2DvZdTGnKmr4uLKBb9hZ7qRxCoEtWNT1pAeKK1WgtuqzXePyGhCU1CNj9cJzaLF39QUnE9A4D5jMbNX"
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
