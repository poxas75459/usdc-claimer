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
    "3Rdknnc32qUfrVR27bUT8zWb82DYfJMM4JYZC9xaf18U9RKapmScKpWYtz4Y294BuZVsZrx3pckV9h7nbtMFQkyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXipuHi6c7poppaAVuSSeXBENNWd1h1tp9g9JoEv1gVqxHZ2txA5t4qKGiP61j62ZEiyz1SKMzYDHTDC9R3RsGY",
  "key1": "R9aDBtRnoFAjU9zdx9Y9fTUE2fqbnjCRTp226n7f4UzjkEFYgu3bmV4Pt98VxMNEtVBwwYBsZ3aAThA1pYAQiSe",
  "key2": "2trQoWxXzf3DCiLpX9eSbghTQaN6b2WxuFshXCooVW7qevjxLVueQC8aD8WkuY2UNowo2EJbQR1MGkLgBdrnMsQh",
  "key3": "5y7MjySYEfRh4JadtbLDQbCz2v8AswHRMic3XW8g8f9LGjEmbSzaHevFr2sRWHnNSLqHm647TvfmaDvVQtmq1V42",
  "key4": "2fcGA6iNo3ABwkdHvLpCUN9rBNxK3U9YpJsL97uYFecc9VxhYUivVRCZQthRzULqPixMU7h4E47THDCSGTWfbfsz",
  "key5": "5uvsoBXMx23JSv4WV1oePaTjG6s7JMsUBQnHdHvfrC7v6bfyR5SB15LK9VDNnNNHABSgG8p5H8g68Rc19LBdVy1h",
  "key6": "R3MDAhfEgZ9Fpq6RfMifW3K853crQVkQgPe69UfpoQZeLKh6wb6dbVWGKAwVkWa9GkpenPA7ZnUpQMnNZ1ouWXc",
  "key7": "5Jtry1eYUcN2wV7myNVjTWwBeYheE4yPdiPb6Hdh28m4g5668vigTxgsUVY4hfnP6nz4CXJf5R6GT7tq3dorv1V7",
  "key8": "39V3eaca7YmA9wG8DMrZdoWa1CF813wuFBZk7WxMrnnmA67P4ehJWrwmgZ7fSbQvwUaerm6h1nYYeDwPh64LZapB",
  "key9": "czAQze7GVUj4z2GjziwQLoXpMJqFwpp8uYyX6atCBafs4gqNKDP6XXkEDEB6QsBo3WPvbDZ9PdsaL6M59P8cDkn",
  "key10": "UNy9Nt1YejMmQemPStjUU5DRtSDBrfGKwBkFhjpbeNSM7cXardmoDHn2sogSfxvnX2JRxT97Xx6qVaBzoefphWe",
  "key11": "YLfWSGft6HWYSEyZYqWPToHwcst88sG49yVyR6xb3Jhfa9KyakqF9vncZ4VLGoeaP2QoqKfnSF8jvqM5m7Kehu9",
  "key12": "28pqDkhXgQzTp1x9cUkVdorBztEFTboFtS5iLUv3txePRm7NN8S1JCA5LkDf73FG7YsPRGVqgYTuoNnvYVQE5VnA",
  "key13": "sDFXTTGhLax9BG9ZrnPE8JJvyyS3TS6xiUzFzkzgEgqcgocmhVGAprD8xiAK5TbqmjfzpM8tgREN9AUNNxfPnbE",
  "key14": "4UTdne7YrxwpLMCCjBCNPxCAUhAGJbA67sSMB4P388s4A4BYDMNi7pdy2omAReuGdu8zrAgkdBd4Rw16oL1gtQQN",
  "key15": "4oM5zafXNR4LEtwrz6AhZPLEueSWrLJEq51J9L1tbrjLg8AqunEJEGkAvDa44ssQrcHLbPWwLrMsZAU8E8ziPrHH",
  "key16": "56yLP7cEQk15M4QtDhYS9NmF9ZD9to38HN38i5A6xvj7ejzUY8V35otqTSWERWz8935S5xSbhr3jjN5A487zRfUg",
  "key17": "7urNAe5SjXVL3zu419Sv4cZ3Awk6hcJnXTTPUaf6q7Qytwd5bYXFqsPXgs7jT1DaoqtUuf4rzgLeUQdy6WeaRWR",
  "key18": "5gqGfuLwaE7qayy9co8VQB6rNsMCbd1tkeweunpoW6CJszaG9HsV2r3idHE6GrHCmd2yGUMd4PmYWqSw1ntdyCSV",
  "key19": "576W8V6C9LxiX1gCmCCdm45FM8ghHMhhq8FPuSMsaYfQEYBDxNs8yjjCE45RtgBmrMDdAzMZoPBboK2sn3mToXwF",
  "key20": "3yTfAJVxyRit6iNQrszQKSo5yc28JibZ5jBovbF2WxS1em21DQfSyS81ZCTLZSL5VKDTPHfJivQXA9u5eb2uzwLt",
  "key21": "2wMVVAU1yvwsJDkg8fnbg9dsh6HMA9sv6AosWzomsaRGKgpsxkh3ajyYaPi2NSDJZe5U5pXMSZKXqCRtmVcjLW1u",
  "key22": "fXUKJ8ynpeCUTAgGKvuc2z5w9ufK1Ydb9XGaRNzoPdYX98H3VAzcpdYqtCu2K3fiUMg7hoSjV3g8Toje6fSZHve",
  "key23": "3LNetRHe8XwDyyMM2zftu9UB8s4D9CEE8yyzjwWYsLK1FAN2P1edDtdNf8TwEkEzzoHHf2kiMNSi2qyVyCfgscpS",
  "key24": "2pqxJzmq3ALmfVLKnkpCu1SeCoHRnHkmoQC6UJLi4FN5orW6aRSmnJLKv2rThnkJgXdxn6H1cw4KGtfmTJ9e8VyA",
  "key25": "3BFwWenJpJCsnVTQHX2oSrfJvrY9ME1DsPSv1vcfcPATE9jgYRZDdN5twhk57RhyAQqL58qKvw8ZNX5RXNjh18D5",
  "key26": "Wgcbq7DoPm1mRkLEdpbrwbeTgZ4Tky9xqvSjmZmFw86pjDUJM1Um22dexgxX7vHi4EEikGJ6SHaLt9tXreaDpXs",
  "key27": "2dUaL32WPouCjR3hn5v2aEpcHUmoX6nkgkYMV5KwZUYaBzYae64Fy4fCoyixhJnamQLruevS5UHVNGdHE1PX4qCT",
  "key28": "3RsnniYq8aJfAQAQXUM6BXSxAozBB2QWE2QVj2EL9XWdbHUvbf25rXd1NR9jpCwJer8r2wUit7V5A8sHE2jh7qsC",
  "key29": "2iq4EdEzUjRi9mqxpsYbCykVg1FWE8PCsJfUCjWBajBxUnssXSRNN4MFgQXKhzpCwg7eFeogPYSrFWTA6yPZbsaR",
  "key30": "5JACrRZRRg85SAP6EWwJCxLv7tLkxuBo5Ejx7s52yRAwRBAkx5jBus3WxpfYA2FFVK8RiTjAVTjCGJhDLavvBUHg",
  "key31": "4XadK6rSMYBMusS8fED811XuSx8migZyAT1PdUNg8Q77h4mDuoP9nXjXfx4cJFV8aeB4Rg1RhRUY6GoyUSDSnn9o",
  "key32": "UCTiCRjkMW9MuSgjEBD5YfBUvGm8f7nBmzkfTcKe8Y3NUPt9cif3AgoxUDh59E6insBWT5FN7gT4psQeZpXyv27",
  "key33": "5Jb9Ny3svUYtXg2nXAVc7nSfo1Dj8zjSn9GYLaKkSxxDvV7hwtz83LYXfHCTFBuHJ1mwecSXQ91nu5vxfymSuLnG",
  "key34": "3td1ByXc4fXiQJTt6SRNybPmk99JkRPGR3y5RGumMcq7bArc39LpQn9hQp7NWhMnmjisdi48qNtEN7rFA6GiPv6L",
  "key35": "3LB65qpvFZ4Dia9vCLhTGijvpqatf6qLua3TBpwT1eieH8vQPbb5bRDicpkALZpkMVTYDVim9aNkCJrrvgdJRW3B",
  "key36": "2DhH9A2WE8jpa9iZDvGPGDQNL2ugybD7uagf2g8uyXXKkLbhcpiBcRvnMXM97iRx2X8nb642XGAeHEvcFykTUHn8"
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
