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
    "2Q2vEU1a6mVW5Jv41oKPdV4f9a5Bmy3TPSoCDCZ1pfNSRdyo2f2fFJ9C8dRXCW3BnK4nugjuvFgj9ShUDR72sgqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uYNEvsJFscW1imH4PPXBXMYNR1KdGQRHD3cAMiPk5ys9i7vpT6Gdr748WR8FuRchzcHWjoJSEG8pE6X6J15wWMb",
  "key1": "3ESBUznTPBiH7xfAK4khmZD23x9ukuvw9nLJtGGqZzYz8T1Kr1BCJ5y9qGSgf5JZDPZnuRFyxamKXfpLxu4EdAK9",
  "key2": "2c9ET6zfHKXxjsAAAJcgSL77wP2cgkr78c1CrhsEvd9V8uwTci4PeuDZdKRYu1HgGkLoiM7SrVQaVZPjefk5uRkC",
  "key3": "5aM98SPd9c9mFAiswwsNViHbomShpHKastCPMpPRrR4KWrDVYMNv3xX4673uupRSQuGoMm18zifDb311Ek2v4a4",
  "key4": "2Ag1xEJNfdJrWDe9weaUScstFPsFQBdhu8t9epRB7E21P1zJ8uu4fbsTyuXgPRNGR7g5FHHsvsJKtnF5pB7DZnbd",
  "key5": "2csabx542KDDYCC34oSYxpchWSKshCoK6PY3rBVH4NcSSpeW2XER4F4SFmtvUMAR4Eup231em28DSYciQ1hvkp7f",
  "key6": "PM2mih1EFgQGUxW1pimFe5VPGNGUnsZwnc6Dz6SNsyuFo7u4zWNVUjxBDoqABSViDziEJYwUAaFQLYZbLmERbrz",
  "key7": "2Y7sgzRtrF7rTk2CYWQMu63jsjTxhSbC44kSBgmH1xCmQQcZQowj8wEgpgsKVbya913N2YTVpWA99ichazETnnQZ",
  "key8": "FEwQA6pjELgtk4uBQgagu3pcQjzmXseH2LK4dERnTgd6y8ndJq31ksErKYhxvk1eytXdEJYV4SJQ2v64VCk8iDT",
  "key9": "5gQRauzfrmxtug5cacYQbEipKixYAfQMBtAmqWW1hP7yMrXYbZNVaKm2sKfW9oacvKR4KMP676rdtSgpA1iFE6sZ",
  "key10": "216Evv3qtUSFVXmAHAFqivwJCxbhMnkQoVUKA5oTX1b6W1mexdMtwUFdA3Cb2ADRUuzYueksziknZNoEZMU1Tsop",
  "key11": "2KbY2C6JZRPcUCkX2dcHVMCaZFk9oMup4rMswTL68yS9trnJBUZfwGBy2okNGV9F3gn7gqDg1dXkWVd66MpQDP7c",
  "key12": "3LW6y3iVWvfyK61XnmDVV8FpPQS5Sr4dtv4WS1sxMZxyUwDnJeTLfqSfbzAVgmvJwwyiMfXsN5ogzLxXyQibZDow",
  "key13": "46S2CcuBsZPA3Za1SpEWS3k6j4BVjEZDZi3Baix6simBno7rBYcJkKANjXYJ8TQ2fPTrDePbFtKRFJ6MLPZv8gsp",
  "key14": "cDNtFfrdGVtWcjdE7eceWcW8uYoEEt1tbJQVnU98QgDdyNC6pYd4J7bgEG6qJkVsF856QZdznFrhBHnwVscNRmc",
  "key15": "NhRNYqGNWNXFN3Nb7ovbmQwEf93i64S8ZQt13gvnwASMxpvtu2WssUtMLQKhC4BWhoxf5Cihe422pcrMYgMD8UV",
  "key16": "2iCJMKwmRAkS9PtCgbBnzhRtrfkqzMz42sG3ZDVmghn35DVrWBVp6HAbA2FM1oRHNG5goeayynsx8y5TPVoECrnK",
  "key17": "5oeKAdpakJTWbwf4ULYntPv8HN5XsVUnwrRPLBtdNytd8KVFEPNdEWa8qFVkKLmXqwVzZLiVDZaAYEL7aohb619B",
  "key18": "2AbD65wMT7TihNCywFMGNmY8vkEu5ehVv2pnTwCvpwJVf7jWNH4x9BLr8VQwHM4gbheBNeSXYQEfpaaKu7Ub3W6v",
  "key19": "5HDZivbHv1jo7wMimwpQanv6H1DNbPnH54A7CrqiUKJFvXoP2M2U5eB5oubiKx6tWo4SKcwz4RGrSBQqNekc34q4",
  "key20": "4S5RRUnNBGHvqaNzhBoe24h5Fa6HL1YBUvmwztsTZNRFUYTdaG3j5PqytcrUzYPCjKqfcVK6y1uKBDjJ4i5o7bgW",
  "key21": "2yDYQMMZZN1U53VBsFjFTx1LBUyGqRjhWgjZVtez3GkbTtJS1vvZ5ZVdAyZKHKHUgEyLPYU3PcW3G6gqmYcN7L5y",
  "key22": "5gUysftru4Kvkg3NB8PUovJ1f74KF1Ua5m9HeEcaL38XkDEBPPKD1kHKaDjWZjM2wV3V95RrMv1PDzXzHSYa7AWQ",
  "key23": "wiMBF5zLDe3dagLD8JcK7MiREPFWM2oPZ6p5ZvGyR9o76pnPTawBN3axPWksLV1xJ6DuTuwX43bHrkYHNS63mVx",
  "key24": "3BQxfXa7pQRLy5YrQnK5Vx2tRaFoxUVTH3usTu8RFEfG6H7VorYi94D36c6LmaPbkBfk7WTYdPnxEquw161Hqovf",
  "key25": "NneQf73d7r6ZfjmDLNdMsRqM4NmvcWsLEdDPMptuHhZ216zYQvNxWwzz9HWjSc4UvWFccHnGGFe6E4GoTB2DczU",
  "key26": "4iESSsnFx64E13hvxrbWBTXJLaW4PKCCwYNFtxxgYQ8iKYHMvAgKUNikpUiNsFCtYv7rqEt6tuxhHfwicBDhHVAj",
  "key27": "5eFR3xH599UxUrkcTQjNehD5zT4TFSPEScZWcMQRaPDzZuPCehz27jgr5h4EbJD43zKDe4hebkvQXf5on2Vxem3d",
  "key28": "5W3MLifWxnV66xeAkCJbticYnC7EBbM7r93HwJ1UNPoYZePLE8RToy9P1qmJVqqN9GeyPB2WGnykUXnni9bfCxd7",
  "key29": "2GCc3S28mLwQrzcseFV17fDFXaBxvTFDDocqCiAowTX2LqwMbExMoJLkLhsMh5sk4QbcDozTmEPLjHiAcCA6tc9D",
  "key30": "BcpCVvtThSRgWduCCz3BkcGoq4hzmNMnY34NQBMfzbjMEmpf2ToQDpawBzzEmr4Vhr1esjjiVLixVN1WPjqe452",
  "key31": "XuNSsVaAiALQRa3SYhvB4Z4cdDnKzZwc9TjCeTn4oJXg3EGD6gKCXAVkyyu7fc9NzBsNvBX6CwpLA3HnVZG9ZL4",
  "key32": "44oYYKLFk1J9Ed3JBAvqX9LoLfWJQqAuzA14eKcCcZKnP343q1V5WBqvTTaVw81tHAGL1d45G9A78jRGiLqf3WPg",
  "key33": "3v5RCgDftETbFhxEApCRBwc3hPc9MQ4Dx3Xbt7CPiK32wiBvnyR24FjtLdXxphEo1Svr1pU4cCrCLpki3AyqDJfz"
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
