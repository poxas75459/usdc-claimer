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
    "3kBvXrg5AZ3vMsqWsrsfeFL8bz9tjuLfGVK9Fd6xSL4mGiYA4tQ54TDZV2hjYUVqhcuS2G2tMLv6a4drYcSjGZwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6kactgk8aNq67gB48SDjHcV7RmGf4dT3sRV7oEJVHvmYK2bhi8Xvo4PqLDJVPgHzV72JwrnQv6gy8KiJ9C5pVX",
  "key1": "4tzJ7AtX6S9CjB4SvQVYUJ27SJkgJqez6PCtr3CmYWA9zTPMGVZP91s8iKAurXTukMCMe2niuyZb9NdLFiikSDbT",
  "key2": "5jwUXUZFc8Yx8xDbza7M7J1TkWNDJ8kAZLqi2nbw5VwmFzgTBfnqhhq6wkhpLdnYXcJS9CuZuYFuDBWKzn9SnQqL",
  "key3": "5ALkiGoArhKDwm45vemwkP9Nw8RZ5eMgJqjXJgJAwTFxfHSatRqs8CDeKCT4qtLz8hBy8abWwtV2E3wtL5tTKfbk",
  "key4": "4PiR7muW3h8GxKg6bZWNA7nitSiWFs4GjgyqbzZApU9PA1Cjh3icStheCPgCmRc5bTRgW5FjvpeJR2TaQhhLzeej",
  "key5": "5Vbnta52U6Wa7GzdfY9nayHLd3JoPTb3qEXG7Q2xKozvVo7ZbLooB5hhKBWFukcoNGB5kJxoS8NqEGzX4mg5JJmQ",
  "key6": "5wsnePeNciDk6m7PhgQWdqvMwjSJaq1BWX8a74EGjPga8iYTgSPf5nMKDAw4Z7X5gAR72W9c7o4A5ESzqoQn1DCJ",
  "key7": "226yYKcJr35qQfVpqoZ4SCqGa8oTqbxns2wZsFeYcCq7KtPFtTAnAiUqtaRs88qcg63F3LbrLPpWhXn1nRNWgp13",
  "key8": "GANGzwCXKDVqBKJGs5jpXcCUDg6meLesTvZBGSbXpUmU6PzMnYzEgRjt6EtHEHtTUyzNRKGW9QHof7Muuo13tvL",
  "key9": "2puMSVszLEs14wJKPX6AZEjxR1bXSvFLJvHThKAba25HRKEgp5zrfmchioZHJ3yFM2iHoAhVGLoCzoGBe7rRXxxH",
  "key10": "WfapRFBuQfuJJsHgoPVSxeQk5Lp36WEAxa6s7t6wqqN18k9sU1LpcNxP7hcVUM9TwZyKR2iM7ykT6Jau1JN2A9s",
  "key11": "4SVLfaAuFEgY1wDFioMMWxieve5NWhKsvSDammsrsUWPidozhasuzyj6DbjpU3HvAC35TtXNs1W1y5Vm7WvaPYBk",
  "key12": "2W1WJHsCEoYWHacU7bXMTG73AxEEtw6k1ftJDx6SsrCUuNtYnp77UK3Q72Fvv1bNY2jishKmfBvuGXW1LdwAoY9W",
  "key13": "2XCAiaou7hRXo56rd21vg5DDpECpNWeDUe5i1CUvtawfjMR5xW5Y75p6qbowsGRThD5KmjQcJ2RvP1ffD6a1C3S3",
  "key14": "4aPRuduqhwDw1EEKsDsdA1uXVPuxdYuStFg8RtoxTw2DRtJefgQhXeDaHhTvdCwM7H3KnKZ5MXkdifxFv8TSNDSL",
  "key15": "12338yHgf19JySyBL5DAySLTX71nAdcpws3wT6oHYnkncHKo7nKqJFXCRaD4QGmH3QrhDePUpMxSX2HADaejsBo2",
  "key16": "22h8jU4qULXz7t4WijRGaxXmMHAYMijE1mEnBCdLaoX9t7CyB7Nrw5yGaMvqfFpvVK3syt4SHN6T7SKLuN1HzBDM",
  "key17": "3LxJCBymB8UrdT16naEEK3w7V6Gb8TVSEawzJSpTYd9fmGNUQRKGU1hPZKYYyfgPY6Ybrt6gswnN6E7B4MmYb2Fx",
  "key18": "3p1UPDcPaZh5Dj1gcv7z6mfVDxBGPaiNHuQNhX7WLMwpVCGLXadMDpDSLMUS6MVeFW2CFdFiV9KKcNhwTX1ePAi9",
  "key19": "x5oAxsAvXN77txFtDXVL3givQAMucW732kXznAyfYxd3No3WReqYJvt8Mr7HwuZR3VMJ7NKhPdgeHKfocadxmJr",
  "key20": "3EsG7cXT1VYjrinSiTGS81zVhY16EzQ8fDhUzxhQNUUHdyAsEwcS8GFcDPFaetjYoXZeent4VZyE3jRYcKMCHAUR",
  "key21": "4vN4UNkTuZsAn7ov9FVnY55uNqYVqKRAb54P7xwTHqYVLocBAEe3h4KcFpGqVqfzePRf9Sy4ASsgYvEGP1AenQkq",
  "key22": "3y8JnE49bxviobPDioErF4W1RxhbLe6DQeoQtkw5uAk1QWHuJvDar7jLBD94P5WDbYACD94dCraqr42CknRS9MfQ",
  "key23": "24ee7wGFt5DARCC62zDiVNs8gW8hi1JavdxaHaVfzNuQ7MQpwLyLZGwrYxTSvvzAUeqxRPH32im1LWs1VUASFCLM",
  "key24": "3zThrMhmtKw5b93Sssde2GnH8PNUhgNbDYPrJWkeNVtVKtWntfbHgNxMc7vmTPxeB3jJGoDF7BifAxm1VAsahFxY",
  "key25": "5VD8i5m3JAAWVLxXTdJu2cVWsZB5EWjr1U2DWABeHtEiWVWvEiR6qN7qedZJRW6ZrHpPrwBA9jKPGTm6oVAtKQ8D",
  "key26": "4Y4NyVvQ6qAiJb5xkk1243VDawPxfw9zQUXpCBYh8Zh2ZEEY711hUN69yLY4x6jvHntKS3SXRc5dxw9EKQFytuWa",
  "key27": "2xpqTNeV3wyXDcS6ZYfezsKS37HHJB7GY5ZvV9KM7UWBn5x1rbYiYN4VxFKJruzPKrkNFevYDUVg2dGeGVyeEebc",
  "key28": "4Pux1deSADdd8jjK5CzrwztwmQAN5uygZNLR9RDGbViUpzCJYvSXFmnGQC7dRw1hLY3Ku95YzPtXsJwajuV1RJMM",
  "key29": "piB4PjF7H2PinVkcLP9Yy7Kb3uC7C1bZMo5jhXCKy11WyrGs7Y1KVmHJF4CKoxC2fP8K3eT31isHuD4PXVVENEX",
  "key30": "5yGC3FDaLaKE7t1Tt8Z42RQcsFHx2aUbqoUtywDqxQv2n3V82wWKzBZc3epbBwaaeG9PN7CJ8vHEBSMHqwuVDdBH",
  "key31": "vcj93UPnExGhSK8ahhfGizzakCFNpmT8Ah6b7hWt26XGMVnEhFnV2xKnFMXwS7hM5vu2UCqTUJJutBLGrCKmTU2",
  "key32": "2Fuzog1pju4AAtVG56VPteSzR6HNYyv4yvWsRAQjcMoT2CjXxe4WNLSFMypkvPbDKKxmzGEAFjN6sZ9UEG8Awee4",
  "key33": "5NqDpXRrqoowTkyZNTfGCM6wxt7nLJQc8Xex7HwiqgiMfbqX8eLg4K2NxfGspDnjxKyn3uQUoB11kdjX8fcpKaaf",
  "key34": "3aCGCi6GMzUrMDaA1S8qockSPeaSi1m2V87tkqjLtRSkEB5yianaeyAQfKxREqT8GfwwGJgfDx7fvdwQPUzkShij"
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
