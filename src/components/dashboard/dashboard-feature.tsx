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
    "Q2WgY21MouHnbiPsWGWjEY7za96GSyNT6F7HDhUu6xuACC1AoR6Ntev7XZhUqTNdyGX6dAf7MG5Xw8xSMYPpigF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vy6bUtES3LQHNaDd6VAo1UstXnC8QT42VGDsQgwygMQW6Ptr3Fb3ETaEetFx1CYWApAAepFR6a5RzTL7xTZRExa",
  "key1": "zqsHKcJiKMiXczFKq7NjUtBmXV694YPvWWsVMoAFRxy38CvhXhXkxD3FmTPKeAM7CoZ5x2DXYVoyoTGm5xPmUUM",
  "key2": "4SXoJbK3JKPd7TzA6ZvHpbcXAB4GCidRJj8oyXZQekegoCxuQ4g33u1qjs4vuBt3ouabm7eABN3UUxtATjtzDUoY",
  "key3": "ZNbhPkzUtvwUzsXYxnDr14wrwCdzYjUEMg3Tvwr5EhgW9zSZSroaZRhHokfnkkQ4wh19UWhpgbyQVYdkShFe63U",
  "key4": "2XBeBDAk6GP2ZHTns9P744DSJJkY2jVFDVd2inhcTiQCQSkmrzF1Qoe6m7BQkreZ4RpjM6SPv8wxWo1oLttcq2zW",
  "key5": "2Ui8XDJ1dUo1E7kHZZiqSx3t5QBS2eESHDnrvrd9RFL2AQ2ciMDnLVV9oHxPLCGKeD287cejKM79X1DJS7rSzVpy",
  "key6": "5TKBEiDy5ZcU499YTgwgLAqg39sbFuiHotLfKGLwJnARHSRSnFLvvj7RdkrhRZ6xM595RHeGY1yUNVBVrezv2D5q",
  "key7": "3BMz3dzv6jKNcZss5at1UeqEw9VV8n54wh9DvLxHGHKnbSmoTq4KtosvkgjpbcDnjmP9Mtp3ZCoqAt6AneMquUGA",
  "key8": "4fTvyuFKproPLBhWSKCwJzsZUjbbJR1ifPmyAZNyJMxcu2uJqcPwyKiWXbeP64Df7Ehg91D9wZ1WH12UFUsoDeuX",
  "key9": "5XYvAWGFme84Hi6zTJqfqLYEQQkZcjduthBr2Kfn2zATUL8KeAcKRiDASnw7HiJRecC2gdgKjAq5wVf6qCYtxzAq",
  "key10": "tQRWdA59UBiVWwUu86sfTotwFp56ephwME5bUEXxbHZ3XzbYHM6kcGzeL6KBEvuo2v7QZRwS6ZRSucsew6Jh9bL",
  "key11": "37FTSn7wWMTrRyz6RhidaH7oFQgZLux5PdoWvHP2DAqTh6t8e8vjdSxugLbeBSvsxTrNtuh5g9RhXhPvt4rZnvzn",
  "key12": "4DWs8GMygmUiVyrcx5NHHPgkQceXySXZYVwryPeXUdbdgEtC8z6qNB2WopaeNuH6Vqw5bTbcJTa2W9zL1jhSxrDS",
  "key13": "5C6LWP8Fx94fzxrXLp1rwMj1vr6zvdrFUjsXXQjQQrmx6tE5N7KpXKgLtEs149mbp7cvBVQY8tCoXkZd3SGnjR7J",
  "key14": "5adnmhPpKmJChbJCaTvy1o5ismUGZG73eyc38sG4RTYPYJX37DjKiNNkRBUxeMGyLLztsxThTu831dyPZqQwe8D2",
  "key15": "2wRyLLScMWjTS1Wxa4YE1cgjDMTsBsGPD4uVATL491du5rANV1BiHdeSVrUsTiVyQvx2dqtGHuhenk3nH5cgXPQg",
  "key16": "3mMWtfx6dyju4FLMrVr9ae8XnwDpqivncFRwwFzUbBLnbvGuoeKuu4vPxUcs7AUjrAfVVJZeGhC8xojW7MssWbDy",
  "key17": "5Fu342EBw1RhKhSq9i1eUma9yge2Sgv1nBFgtjYwKDA1attp3UTVkqMhTv53STCyhSMfwFLLqFqhL7M1cUS4m5cr",
  "key18": "5w2VjybJMhFvKw48fyYrJMDgLovs8FjD2s3DN46mmSSMMibKSABRoF6GLm956sNF8ssqFTP4PcWjCKcGL5Zd8sjx",
  "key19": "5cgjwynpGdJpWfDK7KuUphWbNuoXKbrcGDzXxUgSMthn4meQeGWUrxMRfwSsWBNa6ea6djhugneq85DBnh96tXm2",
  "key20": "45dCT4nFJgeKU7WXLD9Vf3wENAgsXdqsFtfZRHDjR2tvvmmWhpLyG2jVuEggwU146XXkzzp3yKCwubLGbKxiYb2G",
  "key21": "4Ye2xCY7bwA4fA78wVTRteZkAsYNthQzBUGmidTiisqr1GkKhFjFqxfrpqcA7zox5MhEP3E2GGRdcCbt2ut462TX",
  "key22": "2QwenHutpUu8R6BxbHZ6eFMukn3Fiugu68mHfwgiqoGq1XpM4nLCvvYFXa642bWmviQwh5pGiXi8xyjjbw2rLDay",
  "key23": "3r545tfh8s5NPZm6UuhiFqiZhjUexkwGsVoEPWZLZb3XrLbgJdkzT2S3hVgzkchdFTnvJk64aaa2k7D5WaDnrNEo",
  "key24": "5cWqWUwPtqZyYmKnxbYVYjWB6S2Ge84xiGqYgo3hcv41eC3TdwqpxwxptB284zy8RPhcHYdHcNA4fpQ6YMMbxeXg",
  "key25": "28jfLCEtG6f5uJkdz8RneyWsMYBh5MJvnk1NLZFrrgUdYeFwvjsPL1GVzMga7hoHCVonHD6SSzJzoeZvrYm8oWTo",
  "key26": "4SYHirL67TkiT3oK6wHrZ1VLCBDML2xXF16Rjq5sckZRH7n2FCoz43jvoaFWRN5xc8nHVJS9hECp3hPnCX9QVimX",
  "key27": "21QS6DKWqUpD9L7S3DBDFSEg8QUP2geKdPv6TekBNUDoXxxcyCaEiaShKRaY3s9vPCCsgU9fpy11bQp3Xj5VYo3G",
  "key28": "3r3BJi8QsLQ2YYd74Xc8V88trrwTeUAxduwVtHjiXJQXx2JxHoA1icwS5phQNgjFoFr9Eeg1yTrpbrzD5tMuYzDi",
  "key29": "4Pjya4BqM4SsMMQos2gNXyRL1mArpiM9QxnRAj2p2zzvk7a4VJ9nQ2qYgQh7uLyp7tBABBzB4HBLpBQY3PqnMdo7",
  "key30": "4cZ886HeLoxjWhKxcTeSmmB2uz8NTNSGTKhBaLDCyTYih7MQjkWPkVVr2BBTv9EfYQoz8gVbCqoB998wYiGAp8ns",
  "key31": "35RrjSRktSXqf4Exyha7StnXKNv8a8hmrUTSsKV8x3vYJ6MbDhr9DAmvpyZmZNV7Fm8BggJ4Wwwhr6MPRP9X2aWT",
  "key32": "5gUQGhQPRQctbHd1vkGNDSwPRiEEyLhp3SHaUMa2Q57EeKNa2PhzpBbALsFPBz8WngvdrjazqCbeiAcvPmxs6XZg",
  "key33": "2o9D6nirxRS63FFpLgFJcBS4auaHs4tuHRJFHjP62yP3kJg5Ee8jM1MMMRqZPTEiGZ58yTcMpeRHYEahHfAgwiSj",
  "key34": "62ucAqq2zBKuW2StpAbzTbnR1KoqgqBeQhBRbyDbtEQW2RUWGYxGYcrbrQQohEbNNG1aAzbrPrpvK8crJUPWG6CE",
  "key35": "35HiKthymk1qgPFjJTWn5zogbLteLKyNdnFakRPgKWN4ekrtqS9Dw1xK7k7j2RY1qrs9kWr4eymPc2DAYKgnj8sy"
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
