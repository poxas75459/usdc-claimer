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
    "24572fWYWUwhuEQisdPjXseM4akJPVaEujBu6wMPebzufMssLcprGU4KouxUvB1iJzHZD6xCvTD6g3eB5W7WEBhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsHnvbvthx7d1ro7dFisSyeSdE7YTJ5M3NL6oaCts6tkV21tS4NcFu5Ekmy1drSijwGsQtKsZZxjJNkjZYNYwDS",
  "key1": "52bhaz7ScuzqRHoWNoSjjYndpeR1BLuvVkSdAyFvXSWxWMg9A5PNfUG4mY8NqwGCoiwp7TWdwuGvMC8v6HjQRMwA",
  "key2": "3XjX3huEUeNCh1weAUcE1M8KF3Ewyg45Ed9LfAxwZwuD8DT8y8sqvgYUeADy6TLcUnf3rErrL2sDdHfBdvmn17dC",
  "key3": "2cBRDtYZGUGTfqqFVW78rVfJLx3W4dAGs86d1cevsxWDJJfKr7eafiFm4rnBxDKANtidFDpaTCDvgSnyTGbGFi4f",
  "key4": "4kW6BAfNMu6Ncv9nzB58YBtFLrGj2p4GNk1QFqJ9aqPW5faq2STMzFhYiDaCauaZwDiiwwjr76xhzj7xCEYTvJXM",
  "key5": "wQYrKzMMJr6rSR9B59DHM568Wvia5zXepwXo17AGtDuaeVvpBvZaKreSgm8uBUcz4wjyw1MFnUXgCBmx58Rsxye",
  "key6": "H9v81e7by8wJdZm9c53WjcvD6DnvFi3rbhfSikMKW8K3YiG6tCptUVwvKV66XjSfGRmu7tXb8HqVEB6Z6wQXihA",
  "key7": "3jxytWPjhBYGhb7CpAcmGBEHEDf36bKKYWp7GpdLZSJD2RuMrErDABma3UZZ6gqxMB3pGCjN9ENhe36NZDMNd9xb",
  "key8": "61jubZSt68y61UsdfW2jgueQPqjkEh3K3r8VtVoPWWY4ow6A5rAFBYes4Q9G7AvfjLRyoEef1EKaPkAVL9bUvEiY",
  "key9": "5WrBF2R5rX1t2BhD5bdR2CZegM877hsKjbePDP7xWVHj2NYTBnCvDPDynV4nW7Ko7fc2mPYtdWD9NEjTWfNagnFf",
  "key10": "34mictMK4FGonzm6CRyL1hpFwZATcx61FEdDt44eSakxYxeY7ADgzwdtHgKQnEu4U7UW7GnH4N5rXUn1WvS4QVGW",
  "key11": "c2XeVkKSDwmHVRktxHzwTGoyUe7TrF3gNL2ECKczjYNevwZUx1YnXndoskf3z3MhzGunCN71mptQ21soiYU7ciQ",
  "key12": "4wUwTXn5hXX7AbeBWXN5DzZS8P4P5GrhDyJDFRU3g3kbMf6Wd4c6amwDAzgxYopVtgf3HKXfQ4twGqM3WuGgvv5A",
  "key13": "2qxG7zFACTxGZxSXCBButBgfype4sEQwPvBMc6Xw6EhU6KP2T5edm7KXvHLWLinjVeFogNX5AN4UARRZz8nkww9K",
  "key14": "3aBkQhvHUwYpntHt3cDCAjWaMyYTtL2pQZnpnPKyHhA56cFKskDv1YUz23qWtnDEeNwdiPqq2yAacecWacV648Q",
  "key15": "5ja7ePxxqe2szGJk8LN5SXBHoymReD5A5qZjs3wgD3nuqQ8qCTko2HfQyYBky9EYApotPdmVPiHNQxQW7TVnG9KF",
  "key16": "3EW2PLaFvMJdXcsGHG2Ln4V7EL7NAbJWP2WvB4aLMdtTTUX8V1tTagBP4utxQSejZpYP5evHaA3etLzSktkBFKn8",
  "key17": "2qKEWkY9y9dSm27eiTFAP93GqckxYo6JSWAxjLgm6rFNUF5zffLWXXbJYZuswQvQs71Wo1eVM7ibgHYW1jephMBA",
  "key18": "619XZvoLJMx1B6DvZZfgze9HdykG5g2EAmSKbHoRxNZuVETJ5F6ovSAiFJa45EtXMRgPdkmRFRYN3kg5vmtXp3EM",
  "key19": "2sbH8woryoiZJnDJLMVRmUNtpokr9NmUyRXFAQM4uNe5C1MH6GZdmnmbeJo4WjJzW1gG5sUspTZwiCggha9R9PBr",
  "key20": "2FmPQ3VjECMrU1UBpuoFqZEsXk5rxkLMh9B9UyoSXs1ShTY336feLDEdLp2atACVKfAvfmw9PqDWzYsEqaTcpf5R",
  "key21": "LDRUNQPJ2cpZn1y8t8E1iAdBYhLKphXAzVxgb6EhSuW3QWZvn43qwpj667BUcucxgsS3XwSWqsbqX2fQLLGGAsC",
  "key22": "kqqachHaC5Nfm2HN791S1NotvtSygQo1rSo9xv41rXGXwsM9k8NcikCvT9nR3f1vSW55F5n5DsPUozcdbqzBmt9",
  "key23": "2HgPF28EdWxPMkUJB3FPiFMys2xeZpvATH8UqqtgBYGt7SoGptygkrjhX5TzamzQcqt6gnVnmUXLvZc7DZKDA8dN",
  "key24": "3AtZFtYMaCmY4HeeA5KLScghghyB8ZE7qGJKVP42gKLLRQoyv7s3K2W3VoQN4khsxFmubqiaNMw8XJHfigNpmBR",
  "key25": "3CH6UHGjiJHUAnhEJQHZygmC8SU8qEFeHk8yk61KGCptcvjPGsGn8XtuZCQoy6pfukFGqRpxnKAFYVcKtHcNBBZM",
  "key26": "3vBsvcU4db6CyFVxn3Y9xv6dvxydWkkd54rzk3BMxhZThEsKRjreSocw3zb315ketDhq6cW8oJg5dcNYGYdJB3Sc",
  "key27": "4SCZwNbRiWR4gNtS9SNAGmfUSg5YCVWKcDxehd3iGzf81AWurmMLQVZELgbaAinAXFjFGhMy2YV3AYm2dLYLeAEB",
  "key28": "65udSM4qfCeXztLoFZNZLs9e6tAoqzAuBSfp5LznL5nsDU2JMAcfQU3rA9CrY5CFLBHr5XMUgPhh93V4PRUHWJnh",
  "key29": "5PMKnYfux2y6XKNb6YVpoUk3Lhig1jp4tJBYVhxiBPHwC76e9PTZx5MJuVZJpeDy6vT9vT2hzsQKvSz2SJ5mjBiN",
  "key30": "ftNtyM3LWtpMB9YfLGnuqxMwGg2e5NsunaHin5ePzj3XVtAKB7hwfE8Rt9zB1y92xZuKc4SgJ8YxmoYPUxcStD2",
  "key31": "34Xg2k1NACh2GQnLCJRGPknL28rauEfagqeoDaG2cQMCDuFRv8Hm9QX4tTbnBkPpMbXMKQTwfjkZDHzCqQuNKNCQ",
  "key32": "2hL6MYzJWNpZ8ReQh2HtjXtJWm6ckt57i84g4xpRF8XaHjuYMTg37SEJ6x8SxHPb7PGLSzb2HFxNuPreFYQiMGLJ",
  "key33": "3qQq7hA7g1cqg6G1hchW411gkjrCSWfpGimSKSEpyWwGEySwWHs3gicFKn5SXtuv2dSpuRRzjGzvfwHbQxzgMpVD",
  "key34": "3kKe45DwTZxoAHV83N7LasLAKjpgh3eUMQczrfGywvtSDxJAUBbnRPtjitPUXXWt1oZz6WsVEV8cp8mcyLu9hvut",
  "key35": "3PZQHbg8mDTcPBwrKKYQZWLNGzatoXBDsJEhjQ49jDMwhuWvDbbF2PcxSdNfLBkZ3ttZXEvcV3tUW7eXcqQjfbbu",
  "key36": "3UF7TWRmV38rWrGWd7SJz6PAKUkxYgEBz9RypVik9JdQszysCRHtx2N9JzmYUs1bKLTAvk6K96CnAPpFhfbnT2qk",
  "key37": "2nd5cQA2T389emDqVrb46km1ZMXGGftrg4UyqqUCSN7GyKSq8gLPooasCJccwb9RdZLjmQWAfrNnAnJjqZEHqg5r",
  "key38": "5SpJK691LZuUNBqBz1erNuyPGdoSMpd689Jw7jr65jiLC4eDD34Vfv7fX6UiwEBDPAFFAV3fAqQz9T7nxXcCkozo",
  "key39": "Vv6NdXrJwTZ574qWWPcjZ2W4EijSdTg7D6o7zu8ndGkME7aPojyxbEWphy9XyWetbdMNdTMxCXMiPR7ULxu4PHT",
  "key40": "5TdcbrJ88fvM1NZNrYXL2K6NQUnm7dv2LAmLXRQHVknZWMkrmUogAHmN2SQbWf8mb4GN3ren9kH7vmGG7RUmXJJx",
  "key41": "3q6Tkg5tgmxCWPH2nGsAMKCnsWcmVE1sArH7vydT2nbY3zh5GLs3qevkRXMM9GcVi9w3oRHT5az3rCUPwgywkkEB",
  "key42": "8s9GfoH4QhEp7KMr4Nu63iPuc8xabStA2FbF1LwJHB2uN18JL6RbjVNsgMXWF3QxT7rx4k1PHvfk7FsHbBJS4b3",
  "key43": "jgXjqUKRxcL63EwBgpMnkeUiUPP68eJAy3nc1SpTRf9yXJNSmRPhypzkvp68WUwfR9oc915PEgqDnbgGSkZ4Zhr",
  "key44": "39h3obsRZQieUFuLUm5KFMuMRtUS3DrYBS1wUhBYLD8dSczv73g7r8wEfwkrM2W9MLUrERoPaoSY8Dsjmqm87aS8",
  "key45": "2bDUtjCUAYWiVjjG3oiCUiixUEX6qgbjn92Y6ajixrD3DD2D2281QEPWsy9wADKZ8YZTdY7WZyWaGNESjH2jXPW7"
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
