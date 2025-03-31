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
    "4BbBtv8RT1mXKyDhZ6t2AXP5ehUSXfZVQyMrbf4oBBt1uZSXoAip69Ld991usj1y92pim6Q8SmYG88cFzqHHcBaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnsNNTvTiKJsd6jVdBLTitLCmditdfQfhTw1uqgrNPCMm9QQad3xDZv8DBHANLWWRaQAFPwtNRtv6sg4B2NbJje",
  "key1": "BLg49n871XCWGWTsymW6SSFiY9TfCkK4HkxBanPMRUzeos6utnvRVoTjP77fa5YNVftSJgimWNqtNRcxRK7RNss",
  "key2": "43q38GmVMGyM3JsC6idr73Av3tV2UnCUp9VTuA75q87UYiERS7jwyi4xmtkdFYhJczfQsXsx9Xz9svVBMPuPSAuN",
  "key3": "3eZzuCcK8RLnj48siMqRjPT8WiRq7dfhGT1JGy8uPy3naQRKto65X6JgDrfj93kV1zdzxbKp3BLGdH2GNVbf9pG2",
  "key4": "2SdK9SVPED4x1mvU5p18c4cajraoPXumKHf2F9fVQWEunwtz29Z4kRqTWyD9P1yB1eGUyNFberYNXP6tB7jkeVjS",
  "key5": "QzLBz86oG5puS7viVf57iSurPQo57ZnAgAkiuVds7VnmUpV9qwb3otNStiatreDmMTjSTER1EhDhg22KSzsD4qF",
  "key6": "5BPKEdmCX6Jju4dcop5YimoZFK2Z1mw1Fpz142AUGoAs8jvvp3vfbs9wB4QfJ2actaezRazZBrtKjYHTZ7UBkZAZ",
  "key7": "5ZGkWHNv7sAmQZF6F2XXEwjozWHJwoWZYJgXceu5chn5zPTMiiohWbr1aSqQNPbNM787oi5Yp5HrJHqBgihH4onJ",
  "key8": "kms3LWG2tXmh4QuKykpiMwHydU5yKF8W5wcftkom4Ed6tKsWm4QcJuwodoMnYhBLV8vLUv6DNDGrCMXke4t2ZSN",
  "key9": "2efLm8k8GF2AzKn8r8Ki39udS3nZnxUfrnY6jVhUvGui8rap4fc4K6iS7AnCaXTepsY32yNshw42km49V8qipGBe",
  "key10": "8riTEgp9PnzaY9WUMnDBdWkKDaQUPA3UKdKCHpXkvnTWxFebKrzYL4LcRxXwEexGmGxjB5MmcwcD1cgjKdEmrXS",
  "key11": "gvNQbCBfTm9azfqwJwxJSmrwodBgTqrS3CSwsCTbqwLVGMYm1nhgUPHLffCrnCnLuACKohQamjDD3ELf3og7yft",
  "key12": "4vgD9saHG8oBTLXj3cjf7UbisuWU8pqT2JifgAaKRAcGDJgj7ia5bx7Sqzy6mGWgCG1Pv1PFd6QC7TSsWeGixNYE",
  "key13": "5P4uBhfnTKcBjtCGEzD4TwfeFtqhkURD6d6ZaXRLjPbwe543da9rrSj4Cb4njH3EwgQ8XmjnP3RyBtJmHGw7d72F",
  "key14": "kpqAXSQ34tnt4SoSPiuJt9aWT8xoY8JRoFQLCSCAZKbzLGP4YrgHfJgJZccpxmhe2TTWHk4QiggPYXoqQspH7eQ",
  "key15": "4SkAcRQoMbwcoA4H7ksu3eEEM8N4QyFgh6TN6QU4kQykvFyY8a7uFb8GQAduy64FkEXdh8d4EXDALsDJhByvkbb",
  "key16": "5PdE2uZjPGXers5Xk1Tp7hAbMGgwLynSGpTeQqU6NbQ4pWqWMA2CRYs9nwvrZqTS9i6vyRNnoCMZnZeYif2VvXFB",
  "key17": "5f6sKRLunRLBJ8QDWE8KqbA5NBW4HSSM4PUaGR4DnA8NuUqBHuzupLCSVmbtkfEMqKhB5BtPmuhAWBdWRM7rE7ue",
  "key18": "2a7ksGWtfxjpuXN3pp1zi3NbPnLGoFuYL3CNVnrdKEmPRgeGz6HcpmYGNYTZrudmBDsgp6ZA3Emi8Wapn6FtzKP6",
  "key19": "8QzeThGygsgEo4F9EmoW1jGhu8HVU8LCjbgCJmaiiQ6y1wtURs6WRswm7YcKPxqkKrxM6BXcswBQwm9rsUsV4Tq",
  "key20": "2Hc59qyE2RWdGdcCLigmrkZAGU14ncVebKRJWBpiM4FKyrHmwe2EmjTpNQXE9cySN58pxXRdm65f5EZWJvnpdNqJ",
  "key21": "2DCTuhJqKWjFUW9bq712E6rTjMTLRqwgU8bgSuw3k8uCZcGMxtS2GMgUG29wdW9MzDt8i8RjXW8PxrdJnV8mtDMC",
  "key22": "4q3fdyYNjM9UVjTEP2JnzMqJBNPjb3hyT5ZBYzU6rrCNm8vi6pDvULQeeiHPXfmP5tSCXztQQKMLu3qiSeJMyPHP",
  "key23": "5Wj7MwkBdq69SzS16Cwgp5FctnNbgefYNeX77os6jJrMtQjpwg42Kukg3mjcLVx6wR64wp551v6q35vXEabDJ5nZ",
  "key24": "GNtVX19yDsyuGFFnvMhx3VmhKCfEQeD7PeUTXYbe1Jy5qPzE5j8FdmdivFf61BkxBTWrBEUbovRRSNkxqSUno3Y",
  "key25": "3s6ECGD1Bd3Pv962HsQBZh6eCLfbZ1CpDPabCYYQmXJKy2FYvEb1bNnq57Mcd59b4ohkT4pKzAa1TwkMRo5t3pv",
  "key26": "54ujEdr5bAsxQRBmmRofigM9NBX5SdUqdQV2cG28ZX79kJbk6dPHvWDkLKNJSSAvFGCBcmrm6ysL9iZ6dBQFjL7Z",
  "key27": "5J1v3gRvSotySFW29jpUAH4vH6fCv8Qm5GrxmEyQSUCiLWVgwFXwNNsFWNC39up3ajpx24wHEGchj6i2NGuGW1ry",
  "key28": "4tzvA8kFfG6mRWVx9qMTBajAp5rT4WUMqp9kKYs4zveyyvEHdiJtkfCdeZCrTSAUpbLS2kCX2Hc5QgV5cd3V9aQ1",
  "key29": "UCsajdgqxpvbbjUBwj7LPeom5jaesCWrcthBAp1Beq3jyBZCTogqMq3dkgwvfNwgc3Kr5EAhr1Ee5KXytjnz3No",
  "key30": "ZowP5mTCt1tLgTdVENLkDzzRtSL2cSpSU42dhHWwL3j4rH7QFd7u8X8ZRTVumZsRDmf1SBNmUPSuyzyBBfQqT5z",
  "key31": "3KAuirpREBnEiE8L4SJapN6RCecoVmPKMajcjHDBT42uPueddsDtvVc9NZm5oRfTwqAX9o9NqJ5A9WniJ3VVUioU",
  "key32": "55bCAzBN6jetTuTjUDxsgvkjCQLcdvdhytfeXHnoq5FweQbQz6UYXUHQhS7tVwqMgzzqdB1gmyt76yGJQrBRtZg7",
  "key33": "2PWGeQrPFdzL4ZtdtJeFS2gR36SVH73fgGQmhdCtQxHPB5BhSMfaT78M3Ek5iBKvc5iM6zGuj2bLsv5bjsmjgX4i",
  "key34": "xTyaWSdG6WNopvhip9Raqoyr9b9vv57WKE7tpm6d5auGfNP9MgokTrAox5WPGxrZUQidj9YfbayvQ2crvbqXj5m",
  "key35": "2Z6s2nKQ3S8qBLtdHbHXgxZw2wCsUARNEizhwkXfdBvptaXtLc8jzHeWtu622pj5k2MBEDb5zcVbR4XfcaC3WgGC",
  "key36": "Q5dHapS1U5qDtFDKir53ZLvtgPds2KprwcYdfzcX2fdz8bE9YjfCAtecsKWMtoASszvYJm81GGhdxjBtJfP3hRY",
  "key37": "2pbw846MmynranqBZ8FAjhCqYtPnZeAJDdoxWz21YVeN1FLSXHGhXGvUGkPuM6m8rbSqoqXVDgAAGW9mPPJVrqTu",
  "key38": "3hrUMdqS1tXPJCeSA3sXd3RtpePXKH3DeBgacGCuGUtW7uiaprJ4c5w49acxAemsweajiyjD8Z3JAubYuR9vu1GX",
  "key39": "4LNHsoUvffeNjNC35rEcDYdidvR56ujvL42zmHTdYdqtft5UQk96eMEYWxE2iqzRAypxJLLprbzb8wfE1DJARX7D"
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
