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
    "uih5x46nwH5Lw3H38rKuBYKtZXhhLL5jePsaHmzwUav43T4WaqkJg69dUZnQmRkY6cLRKkoywsCK9CCeEkj9zJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEi5VnnvCq25f9Fs93qgtesnJymmH8of4VByqwEy6ZEwjQhmwgLx65RykjBZ31wQmywRTRTAKf7fsWgWyP5n3C5",
  "key1": "46i35WEpdFDdAHNTm6fcMkXW38ARNbigQkVCiFD6k9cKr3zCQPcoczyZfc9kbAUwY78H1iJ4d7U3ttYHZzTtLFeU",
  "key2": "2B3MjJjVNFJoPx3z5EsRu6RohmCEhACZgGoP12gXGE5TDFiRPcz6dU8AYDJy8NtE3eUaVthwpcFAVgaFczajnDwk",
  "key3": "62u361Zsimi2MDDqKPSd8HHp3CCNEkWgbaBw8QU4wEALUDQa14TdZdNL534G67Dzv2LDrvuMHZsrLbzy3qyDDEUT",
  "key4": "5Fb3fPntkVPNyW7QZnEwENJy1WZCmt44VSe8JtYVnmiUh3zziXLNGyquxUgRbnzEGdc7gRGPU7kipJyfuGwUXD1Y",
  "key5": "5wADFjxVTEWzJBYX5KfNSQsZBGswcv442EzSFr9Xh8oq27P8jHn6rtkLXpaTT9SeBtERhWgdfmHJwM7YJefaVwPF",
  "key6": "2EJaJTCPtwweKmXpJwD4PysJKJiWZdXvYG8Kiw2X2ic9LKR3cDmQzR2jezPvp4egmiwbnzcQitzUfAC6dcF1J9UE",
  "key7": "HDcmk1nvwkTXWWfrp5XS7VxXtPso8RKqUSkBD9y6kHquYmv8tV36YCQbcrYvX2gV6QmgBgpSyFr8QHEgeZn9Nbd",
  "key8": "4sEACxa2V63HckuQHBirrxwJPvArWhntYSrouHiznDKPaEobZR5rFkg5KiUzNNtZCPLzqvp1CrDBEc6Y9ZvpThWz",
  "key9": "kqnDahwRFRtbNoB9Ayt8Bevu9oWNA6DfEUsUWof2NBZ7ZLbch2JGrBUsTA4kaGSXcByJfsQwqDvAnSfiURDFuZ1",
  "key10": "2WDBwWE7LRkSZ3hDVBXGDyCWVajb1gMLDSHC2ZuW9B6dKWz4oqkzFQ2U53P4ibDzhDSR9dGs7rhSRNPCrekRuKjs",
  "key11": "5hCv7w3xe5pqCRdsB6E4bYuAUY15ebLQy1MetLYer5y8SzQZkDdJGQU8Ytm6t2mTiepuB8oWD3nmc2p1Y5vZGJgh",
  "key12": "676JVSMz5mP9T2NrKZRRtfpt8H5oCERiZ3Frp4UA3Xf3iaVW3HRXWPcFis6ENZ5btxZuTQYiyRixXgCAVuD82uN8",
  "key13": "5HCa6MVfkA52pWYcyLA7hDm225KwCKSnvPukxv4ZxWAvxJLrWtVCWBsrPEF1cHQdiBWC4QfSGN72EhibKnNpKRiM",
  "key14": "2uSHqwSzrLEK5ccjvG3P3HkS4d9Hp5HtUiDH38m8QVxscRHkJugxbHYAcj81xWyXKq741r2SunGEpxhu2du8Brwm",
  "key15": "XbyCBw6UKdNC2qHhbCe4cyx6yTkHAyANvcyGP4Sh1ZV4CpVnVGDK5mitofrgXFX3uyjKfDzc9uQkQzn9v6kGpoB",
  "key16": "65Ur2yHkZ2vCUCV9XcJHkFe27HzfK8SvB2aiHembtRqDH5UMHxvgEAwr5Q1u3npxZ5kazkKgq6DpUNjbWZBcSFBe",
  "key17": "5J4WoVQwysrf48P6UbHX3dmvR4pvtGBuLtmpVLWEyLtUif3bLhthZcH9N3k1UH8vmLUa3bjpatuF9Jz8zXjFcgdq",
  "key18": "2xft9w6rN7vM8EXor5XtRGqf86sRBzEq4ZnYut3vRruGt9x1N1A1TbtmR5tPeAsnEeBZkARzBQzFFGXp8sJuadfg",
  "key19": "5VkyZdWEQT3Zn4EW1qkwbhR3segAaSNLSEZoDwsDhqXVGDzo4cm3Hi3VXmdBaeQSb8aSrPQq5R8XN5jQQ2zJPEHb",
  "key20": "5EfyuZXEBiKXMyzEjsMjDFguTHjSbEiDmjLhW5Mrc6VWDce8ghVxbAY2pi2B5EDQbFRiypT2rcxedDZJzBVW9qGs",
  "key21": "2w7thdLuhxNMRgfd5gDovnBaQiyvqGp6LseYheKa3FNyDVsd9XLovQeCPUMAjVz9FJJkiRgiv8qVozJh2Z43T4No",
  "key22": "4w1ThmeHuDEzZEHFDYKWKFoZB7kQXgBca2VsTVR5ZAhtTYxHpA13nsAMTfPmF8AskDAk6b7kwDZDantKRy5qmmyd",
  "key23": "qkUf5EhZVPZQ94GTjJMaBbDfZpW9Z19oFNycvZeZev3caJoG5aS7rzyiCUravSv9qjbmiUVy9Dsa3MJMRyUgkH7",
  "key24": "2LRfkNDjQKeuYGywArV8BgYDQRGaTY4YhgsacDoPy3hVrvB5m61nE26yvfifFNYvnrhRFxZt5uDjqLkkkx5jJVhc",
  "key25": "5nZWEAk8vXXRCjEjEj8chGnyuAD341fAfF8mx1j2c9NCAfGJBdorpu6gkz5EdL3Lc43ehddKni8KZsK2XnE7U38D",
  "key26": "DtaJPBiSyE6eNLK9oNcW15iG1NFHSks2GJdp6mE67KZvcYGxy3ethdXRNQGoWGmebPqZWyPCtjPfFC1va4EXcnw",
  "key27": "4ZgjCwNFEshTRJSvo4JffS9TDkCMweGHpeG3397e6UiscdAsxe9kBSm2y8EquXyxNK8jADX5LQLpJfGUxPdK12nb",
  "key28": "3qZcBHUyCW8ND7etwrTkzJ76a3qUZy3kArMvjAUtNAt8owU14b7dFuTcTGAxd5Av7AcqymsFdsnkzoSf8H4zmRon",
  "key29": "s6nvkGCnxit9taLqbyYBDLP3sgWJBVaayDtgQv2MsXASUAqQ9GEMU4MQZPXHMNYAJhHvRVXBhSBPHDyB7wuRoaW",
  "key30": "5KZEnEhhzX12gFK3nagrsWuAztvRYGT7b42GQf5b7NSgNC9uqjSPUaPNxpixKXgGW8jFNA7LYosS3xcamDzopjnm",
  "key31": "4zErfP9VwYQs7eachSY7trrCFi3k8DxmyvTJspcNms66F3xZXNPxubGyQ5BGKVovirAwjg97ypBeqxVgxX8nAEEV",
  "key32": "2kVHdh6VQAk2PBqRLdvCXTCGRpzLFnRvfV7amLMJR6zADXddU7YtSYBU4P9bjEnzwWRzZJ2eDwfqnCNEZuGGwNjm",
  "key33": "3HEa3Ua7cTTfxajZS4xESS68E3RPcf7xJhiyDBma6qwHvdBgrrfUcScYC7fhnhupm82Y7xD5BjJMAyxdzzLVeRZm",
  "key34": "4mvUutYgSaPSJZXMDhyPD5yeRnJdqpPZ8wVBHruswNuScXwdp1ZdW2fBboVu8yjutinZEaKr4u9Yaz1EyxBJxuNr",
  "key35": "SgqhM428DjXfPV9p6bCuifUqJmPy8fKya4LJ832XBLiiL2CFihRFjYqMqdBEGyn2AP4K5KSuSvxNpnBiooMHFot",
  "key36": "2mq17YRKsAL7cRBiEP4jWFF5LHJ7RV8Ns8qCDVQJ76pzVopUyFjRz4fDwgfFYHNSmwc5oVuJ8uvMayNp7nDjoSZq",
  "key37": "5FBSgsRox8P2cmFRzD4akhgCab6ofAjYQj9FBTBhDYzTDEx6f8ZMRHEbSc46haoBcxfFpx8ZqSkUKjSUSwrARFLr",
  "key38": "3q2rAt21oy9BHAYYwJJfRyv8tSNd8HHCjeKDY4cfcLkbmMQk5Tvse9QEUvDydJd63n5W2Qoqzyt4iwUPKmjApBVX",
  "key39": "2n5QR2gtsbKK8Ns8XcbkjbrUG4ezH6qHkJKtccYf9Tx4Pgj3AEPhGpUmTpZ5PLDJsmKqFdQfFZUjyVkdjfL34c3E",
  "key40": "5v5GuM8zRGEchPrXFgPzoz19TKuKmKRZJpyRfPYn7f5T8KaZ1mpdQzwnwSRCAABbakqeAoZ9KqEC592cC2eQWCRb",
  "key41": "8r4s46GVSEwCmj4sc8dhyqNgibEWTe6kF4aPgfdEva8PGouKAXcAF3oAakYfeifVERLWQoKUWnKHaK4khSCEuCZ",
  "key42": "5X3yR5M58w2fzJvoLJXvbNq4dWZHrWfMopEMSnTXHdhy52wZYerxtjHJUXr8pUruPodrrVF6itEBBiDe1AGPBLvU"
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
