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
    "3LQ7u5Z5ULhbiq672NurxTEPqxWQoqQN1ddTZC6pvgYTkZbbMbyvLRHwm8PDr2fkopMVNT59gsq3h43aQSxnZ5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZNcNuZJHDoSkVQnPWBNtJuDhvdLo2CjJArG32Pt3G6naq7bCACK3VvxyjYrHWgSEfpgT5ozL71J7VejopAHCpP",
  "key1": "342VaJ2HTojyCPVHcpoQJYAj5mQ9xMgPU3bzNZ4e6m76iFhVfmWTfV1xuBxhPskjZrFHPZ8SD4WbtQ4iXUaiGa5E",
  "key2": "2wPZwR9BmmvRFSewvixnCKfF4TWi8EBLQmHBSrUGQUAXQsUQG5vFJ9hXTz4kjugG4pGCaTjAm28Nq6BPzXYPjMXb",
  "key3": "56ytgi75UimNbrrQds1zUjGeV6D9Neb6YixJrviSqH7bRhMtmr1tTsdrnktB3zA5EjLXTMNVauEro9uVQRQYXdYD",
  "key4": "4L8vd2Ym55hnDEAZAJNKCDhwPKeTck17o6oAHRCbtKvgHZqsuYAhXAFAP8mq3XAMyBFnHcYiLDWQ7g2r7v5wMg7L",
  "key5": "552GCKfGpHMyfBRWdoiRgsjLPD1Au5oruT12d42b2CqyrNzpKJJkpKyfxMVW6Ac7bzJfgxipHyyFAZknTGw9PbWx",
  "key6": "4kHAJ7Cb2NhVo4ns9qUseQz9MW336iVftecfjgrCK5sJFNGAKajMf8ukvCkAz6HAc7JPdjWEqLe7AUnVWiiXYw7o",
  "key7": "3twM45Z4kcYX9Df4yZqcVQP1L1gT6yHiQPSgDGoEQKQTSWi2qV8x4Z2AALDjThkgJtWFnToH7Zn9YrZjMKEnNk5t",
  "key8": "cRSWc1j9cusyJSoSNqbu8dDv28aR77fZ7HebYcMy6C2VRMCjkvuNZJ6QfP17tqJkfCJhWkW5jtJMnnDx84moPum",
  "key9": "1E8QpgbpTdzMQUzCtv6naY63wPzUXTkrJ2dbwGCGrihkSAdhHxGhLoCbmWHxKmNp9xGM49nWmB8qUGXBqzHzvJs",
  "key10": "3CjCddSCN62j4oZ5uTeJ4Mtda5WFQSKxjbtH6RMCYqxBkFRLkWSQMc5g2gVPeEH3noQe5ZGaYrFGFvDRmNi5GeYg",
  "key11": "HdDLiy8v19MpUp3oeuxgNRxvdvJFs6L1Pp3tfXxVVjdXPHbTYJvbjGGAMXciiGR4Gmyx4QZo8yLPpv18MTLG9zN",
  "key12": "9GBqsnLneHMWKv8pHhN6FPopf8xRzh7fKmfL2U3oz54rt3SQoM9zq15xKoQgdajdnzkaDjLPxm1F6EpsjhPqBEY",
  "key13": "3mce54VRCAUiK8SDEArQiQgY9fKZRGEnB8jk5A7VRT2KEmT2eS1Q8JEcNjZC9USMDPiCkVeR3Sz9aaDd5LcgB6hj",
  "key14": "4pKn214RFQzKuwS6fX5ngGgvsi6CERSwoA8F7bZ1mszzv23kxFdbWHsJQuGhSpHSXCoJUktbpMEuPbT4nuD43rzy",
  "key15": "4Wf7fjFs46HzzB45crEWzwYuSTzdC9Z5C7dEzbnciRQU1h8CdyqzA8k8sTjPyeacqncMzPkswDW5oNqPBBT21EAg",
  "key16": "4UinmJKmN6MpWkTtvQp7mwDEb5WewQ494djR7WgVuyJpYdZ2MxaAGpwBhEBuL4qsrWaZooQ7pzFZoGyuMZqYvrrx",
  "key17": "46HSXE4rb4TGmGsVgFiSvR6JXX8DbrdLA9AhVoDKaiEVeRZ8WjbY2U2V2msFzmSZ5mBPrLfnuyLJ5sXyMjJwWAG8",
  "key18": "4iNxR8GgT9V6H3o6ebp7XBpXCzmoZqXH8K1r31Qt8SwANTtiPvaTYDjx4bBYb11FKM3UpWNndVxnB3A4w6MnVemj",
  "key19": "3uLirmA7Lk5hRTNr8Rs7gEKPuiCSTXALmCR9u5vNXBPyz7yCzWZcpfBcJqSYoq2E6NpkRtsXMJC3kpD5yvAvHY63",
  "key20": "4kFjW7GAxRhsEoQDqqiyng3XGzum1UsxZAQSd6gWzp7dYfapU9o2G18PMJsobDxa2RWFN2L17GpU9d2ngyswkgkN",
  "key21": "2HSNBi8DLfGPFFvHJykWAojkCVfWa2hyRciR7VHhV3aiBFiLTmCiBDJsDQq3g8cW5vpHKHM9mKo896b13Z6cY93H",
  "key22": "4exKxryUBLqDRa2LwRn24xQUPQM8R5Qmkdh9fHMXbDrm9XQx7KkXTs1WirdUpQbnC996P1BQH6NAmNewfyfUkvCj",
  "key23": "fyJUVMY1Kd7DjxuhpfA59WSzcx4NVJfPv8okyy7vNRbKoRYjJQxckMSmD5bgboro86SuX5UT3T6d9VhtvaJ3YtJ",
  "key24": "24gq9hyUzG4XmnJ63KBsDTgZ8f2UaA8oFCV34VqgJdizGurxM6GS8o289J3pQmfMqwPDmjFXUbfmT5MLugqWcpRd",
  "key25": "21aGhdoxHVG3rwQibLEmKwCiVSMpYNFGD3Bps6v2N2zY1xPQqG679u83upnVVjaMVW36zGFbWPgpbgnBeVDrWxV5",
  "key26": "5BSfndQv4C3jTqDPnGctCGvSSedXpC3chpt7aW1PQydATcbyLQ7qRdNoT7p7SY18j3U4J2K1DUWGjfBpeEATNgRM",
  "key27": "5ybpHrktq3iX9mJrhaZECPE6qGAUwgXAxjFsWkPRYRPfr4dAqxn9Kkt5mxLUwhDyUbFtYSuHhiGhf4XJJeCFyq2B",
  "key28": "TpQd6owNkdgMXHfcgHsqR9NYTS4SNEXeaEqjg7j4xqHsX5rnREPUaz2YdAUnn8NhADfQNpSXWXbjDCUzEB17f95",
  "key29": "5zYZGeiNAdEB1d5y9jfLRKRbQszfVahJr2hp5ZHJkgKwkL766SX6ynjKCBoBUB3Khes42u4j2Pgb8U9JfuJSBov6",
  "key30": "5SaR5GnXikpwBD4Whg1un3Db2nVcP3pbrSz7GYHJ8AFkXmnCKt9yW7R4wzYaLc3Hvt2tNwKKj3SMjB9VNiTCdW9d",
  "key31": "V9eRMY4czWsGej7GfTwPzvkQByaDmwMZDxwBpiiD4kUtbEbFiPqhrQdhw16T9WcA4fWPoVcjcoL8Vb8BMU8qbMH",
  "key32": "3dd6PYQAShoWBg6RwvTNB1VkhKomiF8kLxmvtzG2RbqGSgWj9WeXKbbKG2vsNS4UKiYoqqmhfXL7wTD8QB8gnYqT",
  "key33": "4JdpqLMUb8uwTHq6qHEsDAhs8Tz3T7RwjSP7TdM51u83nhTiRpzivgXfff64VqKdv4xevggRp5Cs2p8bXm9zwMEH",
  "key34": "3tHEDon4gTNK2ikaENgA4vKy2DzcLX5TiH7yTrfeGtKsjjwNAwu25QDwTcrLWds5uAS5SyAxZV2CfNXK31utS94a",
  "key35": "3KCB193JoTq9P4oP8CZLeEdAP9xBDNkMa7vPs3zjzcWpHFBjUGSUendVqnrvHuGaCYDjM2jYSc5SJvNUS5DXBC8x",
  "key36": "GWCVu29C2mB9WmgeHmuBK7K1fkyPihVACRvbAcfgD3BuBnFYFSDM5cModiz3HZQDw8oCh9sAQrsnDArszCFU3QV",
  "key37": "2qTd27ir4GT16egfFrq3R5SRqjo9DBr3VkoeT86nNQ2ixF3bnjR1QHTZurEPfRRzXARML2oJQiA6aWCFsvLbc1HC",
  "key38": "mKfcKXqvmULUR2GC9fzb6EjcmPxH8sZ7sC6NJDd8zsY2J4hC3tHrAqBhD87tjFjfbUPURAzjs3t5mTC34cuX5oj",
  "key39": "5wkvDXkEVE1afVVar1c56ZW7q1fSLFgb3QZ7USyRh3GX4LMhfPt7VxaxQf5qE2hnvF2XpaffD6y6qCwEzELrbMkG",
  "key40": "5DEDhqrX9rkJoByzBwpvUmFBTNg3jKsosWR3tHQSAXQgrnrfFp7BXhAEX6L5GQVzLpLWBwYPGKzvXngb2XwfB564"
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
