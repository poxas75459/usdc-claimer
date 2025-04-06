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
    "5UL2zRxhsFUShH4a14DXB8ngyvA7R3F993eAwGhe6AA5HZUhdZBSYcJtsu4npRnDqyvWDyUy9tRYwatYU8e5qYB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2739kVWxfBDWyF4gtjFatKEdK2Lor4KrGEWi9L8NetqbRo31o5irhFAcWwdRcgBakwTtgZehhPEB9aVtcktCDvWV",
  "key1": "QgEzbaLdtF4zpqRThszuTgyDSwM5y2aNpCcicq3CtdJTLSRaWMMK48t9q9UUE35DhoXCKsFc5KKJVtYQw4NtRrR",
  "key2": "56LahB46YxNEmFgTXVeTgArJqtUhqmGHrw6R5fg6AeFh86Sogujc3dnU6ZR8gxEexihvprKwrMjHXaQCJM3X771m",
  "key3": "GcTHyrqXTdFTxYLYUVKa9oFR8s1ongD5sx4byNFDJ7G5eHBk2BdzR1ne8rASFWAwMK2QdTYUppZ39PZfqTvwMGs",
  "key4": "LeE7YTYDxRB9gHQ13TiRPLRRWrTR4ZjqSa4oG75hSBm2sregszveKJ7Ea2ToJbtPZgZ3k4kXDacrJeNZkSh3dcn",
  "key5": "JLsYfAWMVYmLNMGpTQA68Qe7ZvpwUYt2oTZbNdoT9L5ZwuQmm5ZykZgzSN8M3UdPD6wS8xztPgV8KjVBnDXewxu",
  "key6": "N7q4GWEzGZnKNmHxpPXMxU5oJnFn8dCcEe8jwtqfD6AyvJFKc8vbAVLw2u6HL1mbvLpiVLdYA4jDByFtzFgyiD1",
  "key7": "2X2DV6NcxawigaRcT179SrLMUrhv3i5eztPXqdbazE739gGCiPA9FmxKJFoLXtuKnYVsVLZDZz6MQCRnzmJMG1iB",
  "key8": "WiXqjvBXrGSFWxRi9uMcM3U3bvyVAr2vWuiL5mrtYgmKVa4Ms6zeewAUaa4gUH5Kj8sGMqsVanKbG1UV2WpRcU5",
  "key9": "5EfFKrTWimpzVDoUWAd7BUHUovH5iui7VP1npMYEDSxD3Awtn4UD3Q7D3LwrPNwQnUbEBHP2amCVehHUNQwPKn7B",
  "key10": "4QbrUwvHU1ezx6vj7Qx7wCtkZeAPedzFN4WS8QGusfrwke8F1Acra8aPzXWJK6SpbGjC1pRNaxGgvP9EyCL4jBcU",
  "key11": "3f99Fjy1WwgbCLBktbcufGiWxMwYprTdycyfDPYYvSeTL9TcBfTZNx6p6rfBAmRFVbMNugpJ1Sw9bREnpqQo2GC5",
  "key12": "2C675ANHo3bTHdWYxwmZR5KT8jVJNu8sEcWMPMRkSc1exd6n8CYZueGYzwiENfzGkHrJwxxU2z5HtZYU4BcbqcGn",
  "key13": "2cc89bXCeCLVWqNvmXoLuWEsBFdGcsZ9CH5GGbNMZKfFtPmXfayyV7AsX7nQyX71R9WUFhnHNSz19WUJfG9X8uuw",
  "key14": "3BDZmGVQm48bZ5DfPKndXQ4yXK9EJRWK9nC2gPcPBmjiZFfprVMMY5jsRRWvjBZ2qsHF9jXK8qEFodWcXd2pMBva",
  "key15": "33C4524XGuv7cKASCdASntTDsnK8ScRzGSWnxQHNZGxnNu7dSWLswN48uLzyBU6JnFCC7U3HVg1fwSK7EyfGs8Ec",
  "key16": "5wUgQGoeXmfdvZKE1XGn3aX1iBQccL3GXfN1N9aVVNEPKkPtd9Yuu9CgkW69qL3s17XkT7q2i9kBetFQ3rjTpgEq",
  "key17": "2abPwWQRcUD1ccoxy7WVSDaoS6NiC5zYczqcXiJN41xTjRghD6mW61tTF8JW8zHNvnK3mUr8PMC5xoTSv8ZH51v",
  "key18": "67R3zGtEBj2LGQc7VAQq1km693Ygw6SBs6cUzV3JDckugvLvsdEvkKorPGay3S5oGWTU8WRXETB9Gt1eFV7DLGZn",
  "key19": "5Zd6xwMgJVcY5MSRBMFdMxV4sr7Vwwi2RiuqKyqia88yHJLCBYsLyAkFKQhQNExFQ5MAKzUE8KGVYGW7qz1Uf8re",
  "key20": "dP5MeWQZpmLQk6NbiXcS6pmePECmhu1v6yNPcNaKfG8b1i3Tf4H6qXPfMR1Ag616jvJmp56GGZAv6a8EpTdFq6F",
  "key21": "3Sqn6P3SayNEMUmaSSNVMDtsR73LTF1stmi1Et3bW8aNajkNjpRu6tVYg6uApk52u4czFEXQnDTmeNr3LCmhpg2u",
  "key22": "4PoCbKeUV9aEHLjr9peVkP4zn2itSdyrf3DZJjQm4Ki4afZUc1aZXfsBCqVmkv9oFn6RKRKVJ5n2CM1Tnu4YSMW7",
  "key23": "4V81AmHBzZFvyXNfZGNxQ3BMfAYFywdiAyc8uLL41yAf51vDgufKi2qkSVMPWnrNpUQHUuZhP6RuEefTACC4c3XU",
  "key24": "3cM8m6F7qA3qaYsiPCQ83qRGeS988gpJch11JeDe1uQ7fzxiCmhN2PVHuLNXLrpkyQpo3gSk7m8CXMC4pgQM3pfD",
  "key25": "3JPTxiZ33GkreQuYDo3SbrgzvVh8di228KARBqJ965Q8jApHj9QcSFnHnfedC7rtVFW1oBQ4hKHjvDdDwngYY8h9",
  "key26": "36a9rcLaeokyians5MPvTKX5FrAYoCAGQzythEQC2KcHAHZRDJJgPtYRycWjFMdEFRQa3TgGDx4SAgXFh7Lt4GCc",
  "key27": "4nLirDQDd5aB3uPYhA2SN4kzAoJ1ay6BUkRVXZ1ex2ntTJyeuadZXxF3kg1H4ucbMfhK3b92TvDfLhfYSREgmwev",
  "key28": "TVdhdsWZZkbXQ5247UysiC67hiYXrEkoFtmYivkTgayGGnutRhrw144ojspXhWYmo2B1wQRtDA8L17b5fFkH1Qw",
  "key29": "3EqHsHoknE72Zhk3eCd2FPnH1PaSxDkr11BV9vLSMrwnLhcH97MUhYiG2QmXXMFfJqkipM81BHz3sTvJzG5j84FW",
  "key30": "2Jq9bvmRp9h3PtQUgGwcvoCp5kkvFbZWCiJPNhKdto4pVeZY3uLh5o58kAbZ8CB6WDQ8yEEHvNE26Euxa53aQEF5",
  "key31": "PnmCSq5iQfGAT7LhHbzfiMBoEycRJ15Z2SvjTnfofmG2GxpfUM7odJNLcd258gu4yYRSKF9xfvVqXyJQ37jeXhv",
  "key32": "5LDJw2NPmEVPyxySaU2gPtzw83C62ARkWhfdBxC914RdiXdZkZgkw2hS8D18xdubDFt3Z4iP37MaVqKbvToX7F3G",
  "key33": "2GU1eyMKqfVBLWxyy39GQxtG2yqapJrByfMAqVaiYLGhxiKNGq3GcYA7CuzjYXQ1cXj1s7N7VM6CVSPbWCPo2o6w",
  "key34": "42Mmfi8ektisU7TGuAoAeGxUcKBTRxLzbXbRzN14umf29KfTRd9E9rmEbyLfSnrwZxuTFCiCBbvmVWdXnMi1xWT9",
  "key35": "KLydw1WbKbtJKkyLRU7iEbx19Vp4hgjoHDsM5JUnLwzAa79ZgoLk1xhPFUiQ6TqNPXqtzvAd6nesph5mmebkqaf",
  "key36": "3Kxv17XWQJor72VUkQuFxMoKGFJHvH9MUackqfFfWs7ijPz7TtVpgQkaP2ned3m5VCUE9AF4nZVx2ZhD4uY3RtTb",
  "key37": "4FiCCSzXy3yUBUoGkdzdwwatyR9EhmdJGGVHAcBFM9KzMsrFSqtqZNToG4yf6coHShaLTFMu3Q2DUbuKxsv4WZDP",
  "key38": "oWxw6GryKotsyjZrNaCMKM9n48cByBhzzkBdQmkpMvSx1bajpFupLci79m79QWzWZesvdcnREBE4s7xeNYTQGoX",
  "key39": "2ewSikj1v54ssayRgbypjPco1RV8ssC2vTjNZEtpDjqtCmZf1JrrBdK7feG4mjd2KRserUEZqvt11yxyenbWf22r",
  "key40": "2hcNMijh15sMSVk66kyUR4JroKjEjzivWKVkbbnYJvjqmRUPSBz7geQCShh3LH1dmENX5f8hCmZ37fq3qr43xANG",
  "key41": "R1wPpJuNE9a7YQJjCJkACrSyjzQ1CoSKw59PKHucBcyTgLFZYVvMQwBQKSFy8wsEg5tm6nr71q3xhSxPNs5WeXD",
  "key42": "4fU2JAgmDT9uPoHnXS5jDiAYXjMyQxrjbQsQkaTaAUNL3aMh1yW8WSKZTX1ij5XxTXipMWAnC5vcU27UMgseu1o1",
  "key43": "2uMBqJaM587bnWfMQJfNPYPUtrbDyJfTcnWDXGgNa3TjvqtzgnmAamZdC7RWWVmPyVSqK3wxwBdQ6taUrtkxMhLU",
  "key44": "5RB4MzePPsnxotyTorDSjv8TsAZyZv2h13HQzJGN9vxUgNykm6KrFbWFPyZmw4TWbdQ2qAVwpJk1jjNoYB2ArwTs",
  "key45": "2siJAgLDp9AzC6uygKArnP5buBxBA7rch9Bhky21qcEg8MjSP5SQ8XRJxRCtYUmrdXvUs5giQFJNz9Eu35E55cBM",
  "key46": "5zxw7rQZ8RWMvUxrT714uK7oCzjaDjfxwhdaC866twg1kQNK1wuYbvLEm5NJp5kpT8bXf9CroVujSdFk7oNKBdeG",
  "key47": "39ZH6crnkaJaAnd8tuVRgGU8UVi7yRzakAChwffb2PQb9RFyZv2qTktzvf3fizCxojmhurAHwy5LKtrQj8mXbaBo"
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
