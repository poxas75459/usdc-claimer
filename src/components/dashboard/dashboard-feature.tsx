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
    "Jwb92K1w37gQJD3c4Jgcm7JXG7xLgj8LqdSTV8titLzEwkPF8aLDGAYLtYuzY1MgcC1oyEwZUd8e6G7mZ74Pbz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cyT7deYKSPrxKbbPQ42TeyjCGUAiJf2iYRTwpNxSExas9VxTAAF7MPWk1CcsFus7MHeWXsCgqJFPJksyoY1R5sE",
  "key1": "4j2W3qe9Vp97QD6LphAhgmoQzMeBUQzTYxdjz1dhhfhVu8m2S2C1AHWDbxRgaFQnhUPZs4UGNpQJkjp8AEgXJxsN",
  "key2": "qNvE9sSA6y74ZXrAVXduGE7ZvbQZYPWbSB3MGu7M4JbyW1ocG5hEVGazg5KJkpRp57c6eCpCBft8mtBQ5FH7WH2",
  "key3": "3WaCxGLJFEwkxRRx5vntMvpCfcENbHvgiGhPQtQDD6wDUxiCRYDPJYpi4vjpEbmQviCeN538TzDX19yKbJhPcMex",
  "key4": "3Ff7MFsZgvLX8LNArMXRHKCsdP68XR8q4SX4NSYZzZn9XYmoazu48LVTqY5wNCFJza1rXCj673mNizTshg5nBHZv",
  "key5": "3dURbXoeLnbudQn4ru89vwiPw85TgUZm4gyMJftcUbrjgthp9r6Qa6VCxdvauYRCHXewK1YnnEsNBrzyz4Mwuoz1",
  "key6": "2iAnbeY3pUCFqhkZKtcMmrbAHqiqxjSyWo4joTPj38f9RvP6YG5oXfKvB2o6cmDua3WLpRc5BXn1fKnK1C39N5ST",
  "key7": "36SKCUPH8x9mvvr5kBum1u9Bw4AcwapLuYFGKyrgrBQwLLw6ETyuvmZ31HjEc4yxWivpghXCSntX8qncgpo8t8BC",
  "key8": "iRbcas2m4VnwwttBfM5qkM6Bcnd86yEM8sdMUYQknmcpjvqvSFxEEXE8annJGzRgtgSvaC1zfJSsraCiTtwoh5a",
  "key9": "sTv9DzTJ9nrDi7aTDu3DvB26GGVC4j16dpCkyhpgsFVvFiBjfpYTzo5YNHraJr53kvvR86Ufgb8fkvz7PYkVK4C",
  "key10": "4LmnNnDTfmXoEDt2F2vRuKVmL1mHG4RKNDmbBQRAKN96dMA9NJpUjNTPFVLFLU91qcXimd7VNXvyi3YRH2phpKPZ",
  "key11": "2fYZ3PHK7zjeCx12T2LPjJ8zrMDhkMjihdjWukg9xw45SS7wfR1htKhPDcc6ENabQU9C9ZURyxgAh4kbvGZqteRc",
  "key12": "eRDZ36sCsUUydwVovsnSUH8mUkefQpjAYEHTRxij1SUSaNXW4AXgUvbbF7BQS1dEBqYHpj18Wpt8GMoUDAr8oEr",
  "key13": "2RLXtGTXCZ63mTZi1SCej5HWxE4Nhn5dBvbAy8owtAefVcf5SGeWXhRxrSzJrt8kMjfySmqmiZmeQcJLmqgsnqqX",
  "key14": "3RGv7FKNo3eG752eTcbpiproYrCV2pojVQhBVzWYzvM9MqRCbqLWysdWbngeNWwxk2Pas3CHVbjBSd8boTnj6EFU",
  "key15": "2QvFjxJrz7z66A2q5x86Pr7a9NWWBkXBotVY9KsNtmrbFr5EehR4r4FjeqaKUo1Dz6kFcZzVWjKqN1fxoiFe3CZV",
  "key16": "3P4iUzfA8wcy7DyH3cZ39EEyx5QGosbxuXVRe1ryLtL6tp84w6wU6TDa6XAPiLPQYbGoE2aVXSZ9tK8jR3ajA1zo",
  "key17": "5ykxfEzidC71G9aQdcTX6kCw5q96jiGDaHECS7vdVdMANMtKxXgqLwt4MKYyy6F3er3nT4nQRACfyGPMaQBDU6ze",
  "key18": "3EgXyiCLJw6Ew3JgyJ5T1ZuzTnwG2b8kmtpDmXR9ujHD7CTdqANJdpbiTi9LywZenf6S7jkpg7kdpCj32HoVLXFK",
  "key19": "2ZQXgtphup5CpX7gtzotrjwBdax4eBAGGMj4HXUrYGkGhiVNWVVcSxWxd7vBcEGdRw7ug4aBWGwDsLbt5AqvmrVj",
  "key20": "46sULEjqthMUmiXYwHF6AGJxHUwFEsCMCiy6vC5Dg1uKtatfexELNFJQ9DHdk831rPjEuZXv6gAeA1u5efu7vXFf",
  "key21": "3c8P9PA6eZLT6PDDkWoMw8nbBTeM8dE6fxzb6is3pMdtKZ3rt8oURqWwBJfrTFUdkNpugrgCsJkkiuHncjjYiE3q",
  "key22": "34BsmjHxzNDD4R1tf72tTzJTrfwv6BiRd3cjnZ2cduN2CzTwR6CQVBNbBSiPZve4oM5RH9NcUqJUMZEfGhJfxapS",
  "key23": "46Qkcj6dDnQoczBZNgPG9BM9Axoes8WSspNWvDXkCZsNdPEKCo6FNpjabq8vHpz89HoMxyaBqCySGvoDD6Rh6mS6",
  "key24": "26QiteKND1kVasdni97DiY73NyUitQkRS51bfKCApjbKd6pPm5PnAE63YxAL42ke9XW2tH9PxxvjV5dXQpd9gKqj",
  "key25": "5BxiqTHihEBCjKyzVFp2tcEqJyD14uvTtHp7dZAj4rN3u81knDB8kuNdMbz73xuznf29CEmAiCpxWWs2yE3McCkg",
  "key26": "4qUtBFv9o2SES1q1F6vDUx4xJSYUMjeWg1GVRN6854ZS9r1LJj7aQbpEEgRbFEGK8c9aJ5WcXB43jQcZBZEH6m1c",
  "key27": "5K7hY9QULrerGof7MwivdXkdntr4myu7FgJDZiSFs1g5Jp61UQx9HfuUdahwkqAX6LWLVdsf9pE4T7aPPePXJbue",
  "key28": "25sDQriVUj26JBVRaXLf4beoxL9KjKsHTkyKTirfcyj2eMczgKwPnZoFvFiiXTX53iu6qL5d87dJicRgXXAAvPpm",
  "key29": "52Dm8VptSEiaMsfTvnSizm2oHvS3m3mxGhBsm5Qao8sGmVLtW8UqXiXVm91Kz4qnpbquY8wDCS3WLBWJ6MYkJwmc",
  "key30": "2b93ruErbWLS82zfnd9ys75CwW1dSybXPasv6NnShYmGxZoWT6dkgCP6u6gdPWLoUK3ATDqM36zxZeLjHad1wMPL",
  "key31": "49qr7d1o9HJffPPeikXjqF8J9gZY6L4q6gEz71SVkGH3ZbDZtK9GLgkwErmsJmzNNRPnKtwYZLfJpSTefbRaTeDv",
  "key32": "4G6MmFDQvLJtfRNkGrmte6TPEtfyenYPTBoJdbeuQD9N4krsxFGKoFEiD5TZUHJ81eVA55iqF9PsaFNW2pKbDbk5",
  "key33": "4ZUDL2XPU1nsgLg3YrNGUPStpLwte11aZNvgcPmxZSckJXM91iqte8NQkayRTcQaTLCL2JFtNxMfNQZnAGkTJLYC",
  "key34": "iYgAgJWuZX6KyEZjbj2rtbRCTVYNpmUFWdtrJJyxnBXVFJazr72pZVM4uidUUzRQJkLeaaGM5W8UDMGdssNUW4d",
  "key35": "XLY4Jszr7SGRPDivb4WfNhxtus5tumjrKbMD1wC5rvNHDWZHYgqEjsFHBU2dCWNpS1FqpU8uyTqcJH6uhH1Ew5m",
  "key36": "5JyiLWgPvseVW1Fk4gAYQbgeEeCxVqZ4xNyjJStqghrrg2V5fo9sJAkqzjZVXtLNGitNWJBwUcW6B1zpE1B26uhe"
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
