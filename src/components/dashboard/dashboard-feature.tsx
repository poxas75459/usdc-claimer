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
    "4L3aRdEKfJ3EkJ15iD9rnzFwZ6Gdd7NkH8i2d3GMz8e7r6tNts6N8GRThdSzdj6mM5ffK2L9u2DxWd9GGWApDEct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34QnGHiwtKywyVrQvRjhxnSiEQGUS5wbvAPAwxiuZNQwEbWhAxXdfdM6eVo91i6K9uEVC6kxekGf8o6mgej1hBwu",
  "key1": "5jGiNq4hBRTbesZU972zCQmZax5NwNLCUePJ9aoXQuKGdbWUFYBEQZXLFMcu75m8m7SzdJKL8Pf6tALrxTqZMnmQ",
  "key2": "25ebDov8JRCLhkXNH7Eq7h4um4aik6z5pkJVPJEgMPdzhKCf4o6AECKXo3tvXUwJaiZ2P1dFyKR3xZ5AFHDeGKjX",
  "key3": "5dWFegFFjRX11RPs6cWfZY6RenbTdK3iNbavLQRHY7rDcpQ2AmKVeyf3pVe6wbhbavykxZnqQZt8jLZd3WHQTkce",
  "key4": "5Ddc4wBijnaW92RfjGpp2K6xZp2YBCNkr9DNrPNN45XP6bEhk37eNhYXDSsLs8fQQAoC7YCrdsPBYDrWj363pLZY",
  "key5": "43cqwSWf6GeoWrPEDwp1oraZPopeFe63W3DJKv75u3EU27nBHtmCUr17dwND365P6EHDQQj7gmLRMzNwoCdfPzH2",
  "key6": "4cq3MayHRLQkvKYNy1AiU14xKRdrYRWs3NQLogipoQZAQBJ18dQw6sX1FeKJF5LMytSPED6bGwXFmTQNk9UfwRxU",
  "key7": "593mUg7nbqrmf82tBzuLT51PYBEmMqmbfTF59eDQu17x8TeFJxKB6M8VLddG9Mpd23KbZAjdSQxr2w3RR6u6tdPu",
  "key8": "8vrnvYSWnqp8smuzmFJH2ivbsiAgb9QBDSNcsgA5nmB2aaKdrydkZRWKEns9MC1adhPawJUnZud8bFbjQ8G5Ajm",
  "key9": "4wkSn5n9gFX9infPm1d7K2VFh4uDcYeSbhAxth1ih5PVwvMxgxfECxkeqeAyQ55a8VW2NEjHEMPHw7CuAHKEnfaN",
  "key10": "3ff44C4gEchuDVHQRHTzFCMZa5X1p5L9utwTNtJMwFiugkecky7pioNGVj278zp9RRjMUcuDEwUfLZRKPzvYDRnJ",
  "key11": "45GWSE1jbJz3p1UGV9G373DLN52ifNx5vNKEKbgj4CBeeA8Aw8yfjT9JfVP5vzaQZVidaU5anbGpx3VZNwbAHhau",
  "key12": "2ZXVdjjRz7j8uDwsU1ddRHmixSzLUQMi14AGoL1sqKmooD4ZVNkvd68jLMG27Q8LnHwn9A8CeQ4qbkmZCvwifuag",
  "key13": "4Jovjxx8sf9cgd4qVrSz4tKC7fd9T3ok9YZ6pjU9H9jtky7fNAYp2gNzR4QQe1p6Rka4xfYLDa1T5n7K8ihdFXai",
  "key14": "vhWXkLgVga6SyQxUgmmnWbsp7B48RtzmZe4yRJvXykMcfJAUo9z6SyQAKuAYt7z7HirppPyAcZmeMmDFC7Zr4M9",
  "key15": "47ojbFyYHUpcDwFctKvwnk1sJvWrW9q4AqLumFHVePdGuTrUE76uMjYwMGqobdCAZ8yBMxwMBhVzUqrhFmnWT2F8",
  "key16": "3u9bmhuLFrbbzoVBj3pa6SBWZTdWHwTP8yqv3q8C2q6G6uMonXoXrXgNuXAHaXSnLdPHLFxe46TjkKVjRPfc826R",
  "key17": "2apUdfYb4hUnCZE5xYEgEGhWBAVN6yGnyHtStS1maktRYgsRFymacvUD2hXAqutqobo1FNfTajJK8nRQryUPVPy9",
  "key18": "4Y8YUBWiT3rzX79UJQjzSaPP9YRADnLT9mKZRUug58TzGuKGcTtNeAshyUccDZL9grbGzZ1xrfFkqSD6H3o9cfaw",
  "key19": "2t5YKDpBZxztM6uDsm8QSX24ziQJGBxbV2JnRcy6CWJVMGSYvz2Dw5YuuZqgGE4yDdsvd2wJryfyVDcHAuYUX3g9",
  "key20": "W5C8Rpx73YSrYa3fN2MUEMo7FCKH4tbtvnSX3aLQbyEEVBK7cMSUnrxKFvX1VX6pYLtJ5WqTjkLGjEsXyuMKsju",
  "key21": "5oHhq1DKGSrj9e2t1k3KytZTeftcRUMJfqHF74opRRiaoC3A8XwaJKRt8SVSieUZskspff6XtZm4mSiVzfr7ou33",
  "key22": "5HRm1zj9Kh8VUVP7k5N2F1Ks9fHMUYNxANsVXTMLUmA478zVqGbbt5wbJb65W937WCThE6sCtYk33KHUTZG3RKHm",
  "key23": "4Xpgji2LmMX46himhHJxCStWFq89G2X68ZcofwFD6h46YosK1mtDoddLVrM7SkCAVPP29c8S7ewSM5qdg6cKtneo",
  "key24": "iLNBA3vQMBsP5ZmL9sMRnbNpR6U1oxUMgw6nYUUzpNJPckB3UkKc3NUMnxCVAj9cZpL8yKFwpfo97gxtTpoBWrh",
  "key25": "2sq2z6NGmHBATWxYLKcb26bQ2UmuAi7LqhS4tv8eJ92MTVYcK1Cj3XXkM7dnKJVfiCfwM1415xsVfdTVEDiwmk3T"
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
