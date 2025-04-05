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
    "2p7GDmfEfGDmtFHrF8cnSPE11Xdh6jsZts48j5QKiwGMAo7eoMNB6a9nXh49eES22VPCNw3UbRA1DKmio1bod6eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jAPebouZ7umD5tXnWbVpH8pX6qUCqDi7jSrBnZTAU3odqpwygaCjRxCgVwh8HNbEYpS7GaAiyyiRRL8tsJP3gF8",
  "key1": "2WgHSffjWm3QwK8aerJ8ChCfRrShTYLXSUQkUewtNjAhsNP77CTz96zw9xMt9dTBkantJpXD2gPbqMoQSUV2Yzrn",
  "key2": "Wz45q2Ssvybuz4sya4JNzG9Z5LncsR96uUXT2uh1XdidMMkhQ9qF8LkQzofpn28obqKyVWhMYUXuD6q6RGpS2tM",
  "key3": "nfnTU4WXRcQYiwy33hpGLiaAHXunyS8xnSm1jDWFLWCNG9t3jiMoEuL2mVjLXa9sZTUmtMSzaZkZ5mebz6VzpHF",
  "key4": "4Agg7xLDL86hHUH4PTCYxde3uaGBiKezHnEr3VogW9q98TvD5tLF8oe11FR3Z2U9fXYDucihecRiWAcWdg2fJWDq",
  "key5": "su7TqfeU414feznzF9VZ89h9XJabZYd6sp66iTJNwyXKxtA1Xc9h8DuqnZg1FtQDwJeRkKB1fzgPqKbc6MKGDST",
  "key6": "2AfS2HvBLzC4xWCH8jSDyRfsgWnPUbLfYgyTqwBZ5GzYXWkmkqEN8HitaPdAAmffyTumijB8SXTvByfGiz83GmKE",
  "key7": "2BrpR1foQTSTkt4rXtCFRwBePfBpTHXEwCjjVGJEWFN7MNkB613Sg3jetJDo74G19N12UoYJEQqd4AMWRGNdhTsb",
  "key8": "5xE5jp9v8LswNu58kH2YdbuXh689GLjAjoBjatuCX6YTKxgShKeKu8uKGqNEsdqBernCV7r8s2KQ1M5pK6awNgH8",
  "key9": "55tVkXgmzcGttj372U4joi4Zr17bUoCsfjFGY2XLSoC2UDqGrcGTbceHzJ3ErDLHRx61Pc1HuiVvDkEU16wzdtHU",
  "key10": "5HNvBTk8CFer6X9n77yQ1RVHk4DtagagP6fkyUJ2QYfWCrERZ33hUEsy8XtnaVzozqUynAaGDYfyETrfCyvDEocD",
  "key11": "3x92EJR6XLhE9q13fST5eg5XiCnxNKjWdkE5HvoG4TeEHbZ71dtPbrZetaCGzrWUUjwizEuy5hyntaWi4EBdSAJe",
  "key12": "3cWuKTzthhZPawHy4kdEshv8f6A37tKni6Wst6yWz9FAe5JGp5GeY1cx64VV6obhX6AXqetZnqoGYaGSntjH3Cyi",
  "key13": "5jKfgf34pWeQhZ3323b3FzmY4NQVVVnrmgGFJB5fmSBXrqe8h4FnxMkPgJqxC4tvbDGZXqvo9i4VEvvSbohuK5Ne",
  "key14": "5jqSFFx9WuLw3iyugSobxCT5kwebSvHLq9V24ddvxt2DctdkyBRc91gJozUaqLNx6cF3WjHc6nYDTDVtRy6d4uZg",
  "key15": "2XkSdZsJyN63hmjyrTkoRm1BXzVpTDvhotTsMuSmW1yCbJbKQt6QwqK884SVEkGApDu7A8JHA9NpKp8387kxiGzV",
  "key16": "5x3hGL7p4yiUVrNBmFwgTgnAWJ4w9ZvtVVtxnQJ84TtfgRdVJVcBV77YsJMmsptH2KAscEw5RW8WX8SwEQqsCrSU",
  "key17": "3TX2Nw7DvQ9dNCb2zxCijSWb8f5U5PPeE3nJKMyAMHtJeNbqHKetvXkNrYJM9bmq6FBp1qbaY7HqGcswvQ4ZAjFN",
  "key18": "2EnNcLEXTEBkNAVipELti8JzCm2YnVmMup3uK1gJstQ727SM7bcy5HaH3ebX3GpgVwf47fBcbEf4Xz8iA7YWirzy",
  "key19": "2p1rTRokpudtZBCmX2mRVwf7FTfN8PcCcTLBVn8V5UnMseuVGcChdFpkmxYEUcSVaeKtCr5DpwoV985k51rWmS1b",
  "key20": "2AWDwoiUzzy9vKpsXwfR3M8EvTT3ga9kaWZzLv7RVHgemWw9ZyxriwnU9cNnKdqMHDKHwUqJuHCQT9Pe4ingLvMb",
  "key21": "5T2EpucfmYgrtbKHnM4GMgkbRJcQKsdR9hYkApDsLQprq7dQXxHQHeLRokPffea1CbbSse2NZezgWgoSWgKs9VgK",
  "key22": "2VnzhB8xJVKbPWfGvSLC7TEn5Yh95qCtafH6VG4vT7VZbEN6PEn3bdExiUBFd6WQ4cKxDjdkQCbsCW95j5LDARmH",
  "key23": "2ZzL8CNMYU3qow5VCVmeJ1UnEQGvbxa8M46556gWjozKYj197rcGM3tHBoBrUhsgzdMaviHEMEUjwrEmeXm6TEai",
  "key24": "4DNUXrrfUCo37VnVMmhN2VTUWaoTxDBoVZasNquWkZ9wGffdfs2GRiy8FRYBEKNHMooxSNUGwt1yKnUv6eTbBM5H",
  "key25": "5eQPZd5VWZE3PdkNqu5amUXsDH6g6Pc4anR6h6AAfL1gPviN7SvfFAgvjwcvMohddiehfky6m1c5Eo5Boe98MCF3",
  "key26": "3UBjdhUm2s8fL9mhtCEqh9xtJNNCgM4CeKGJWje54SsZBxXf9WVPvrYMURPFJcB5K3bjCQNkK59Wn6ziRL7n7q2r",
  "key27": "3YUA5dPDoFJwm4wTgwX4YPLtUhfojQTXTJu5vB5wG71dmWwWEDru7Z77RKaj7vPM7qMyegJwb6je8M8K8Gx38a21",
  "key28": "4mhnVT4c9RS8FpuLKa9hA2sjPmqx5EDNa9HJSyRHfjX3Vrf3bcyEaemLXcoLHAddzD9QNQmsyHCfPx8qgtB53gPZ",
  "key29": "tKPT2xLhLFHCMty2uFMg2JoKDYnzrqcHcwJ3adHFt5vikB2cfk1cdGmU7FwUUw5CxbUf8cS11nN4RcDbMdKsuaB",
  "key30": "3xs1kXh1xiu3xH2RAf9qH3cnQhykFa9CzJ69HTYWartqsp1JZAxK5TyHAmFi5SDGaMbwzZCi6rvxRz32ez4wvRzh",
  "key31": "2UsioEtvYntXhdkLKV95irhTi6yGJ6mDxApn3XfLpNnrWgQ5DM2yJZta9EA1HJE8bGfTtZ9Vu3oS9UZcXbThG8gV",
  "key32": "3DUJCKgTNqNTjPWWQRvuAcJ7B4eAyYuVZso5iKxvr8sNmt57XDXR2hffseobTcbFdK6bpuAUG8FtnceL2LHRDPwf",
  "key33": "4WaJcDmoXNrmXtyudragMHVqhWvnW78pqeM9C4bubdnjVPXo46Pm5X3oThYHXcazbSSRgqoY3hS9Nap961bpRYE3",
  "key34": "o5GjmTvjhqby6tEGVfhRpTFMqknyisMPWfgHtkC3RcVkLQva3mJmV7LJjfTWMb3NHGe9zCniGjs6mgZiMZ97XKY",
  "key35": "3Pz7aP6bUJdDJYmxtXU8cPPVdfMXU8mKSHfkQMh4cFcVuM7WCGv9cwEV89M4iCGbSBHVLzWr1tLdNQ2PZd9QUPrG"
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
