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
    "5V4XyVFyzH75oh7UCpY2EALixZRP9WSAgGMbqKLqUur5N7X2pV18NsrsRWNcwRdEPw7XCRwBSb5hSJ9Yn67K4wSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rueowbcWg8mDDakhWgiXycFSUtiyCAHRGWXJ9Au9XYZQPUTuuAGPo4JG9oW6CuJnERZwBXRm7cXkrgVbXEwLKh2",
  "key1": "5UPeiqyhK9cWhxnjSpf5XrCEpNk6epC7eAzv1orQLFHx5RCQ7AKHAHF5dsoGz9D9DzKSEE4aLpHXAKWy5yTXfSUq",
  "key2": "5nVZScPsuBiP74xqTgje18pbF3wGjRdDJDYoNmMnS9QpgUawbuw5Kmr2WxYineMkKL1C8mJoZ8ACV2MV7mQaxeZW",
  "key3": "TJUNoAPUCEnXgHAdp3cDPyrmcZ94GMXV95485JVWSDQnYBP9LeLJA7JNrYuLcinSDspGkxUtrfXCwR8Qvs9gPp8",
  "key4": "4tKLKUMJrSpFmUKKZzGTvGbBQWBfibuuS2dVV6Qc5jCXMq8nbdC2QCWVHf4fSw8H6Xoy2xroHYA17RGTRAMt21PN",
  "key5": "b8SL8yjcvvUzBHEBF7fRakd1WCUmSr9hiaUjfKPydMaRuMuEp8BTwbf13FzZcfkJyjgWLZPVpzLBbpZwCFHzEZx",
  "key6": "3MnYkF5KGUkQierJbBoKJfj6iW61gqREYzgsS8XZ2KRoUs81Q86UgAqb9kxSKDr4Z9GigiE1rdxoBNnSxgmVapAm",
  "key7": "3Y3bVSgJuH52SCAohvFrrp2uzdpWbwugstnVEsgNAfqXhpdVhmkuMo2TRU1uHoZMPfZM9EgEWfkREA3kdAsuUxTN",
  "key8": "3MkEcsbrKy2NkTaXM7eMWPHaGDScCy7q186P3dxYuQdnpTc1HubpRGQdnpBRPCMDAynmuXC64dzCzy9FeTc3AFTk",
  "key9": "2X1VZDBjbwHi7mB4pfpYDLZuyC9FdQfwEnGyNhFivkfoF2N6jK6j62JusTnpByTJ86mT3Ub5djjKDCJnAVUCSDZP",
  "key10": "6Z7TgYqQZunMCDXwvjvCbfJxzKwNuUDFgskVuuHv8XECLmGUyjPv9NvXkhjLuT3t1GqRtLY569GYecVdXYxhagn",
  "key11": "S5qGZDssjqS9kD5nvMJ7r66Evav2FkNtLKzwwNJqMpx4AoJLZU9Yy5KN5zrRbW3ZjRXnYYrtHV9QPfqp1jR24HN",
  "key12": "917dhFMU6r3TPKrj8XXLjH4SnyinTxphqsNu6yp4hskWf1bEHTCVG2otG4qsHTTJarieUoMbVRktEKfJLwP7wZx",
  "key13": "2vAhG8TcNQYDCKQWS3b8c6CwHoNfVXaxDkaPbpgUgTVctu8xv3CMH6Frao7rAhQ717mBNgJJsfQzFwjuAuSXcsHx",
  "key14": "r5hA9j3f3LiKAbLdA1uKGABZELorfzbN4cdCrJY8zVZtHLGE7sRpKFqX7bYeXt25Htfv6WXY38yZnvG5tudfDDa",
  "key15": "3v46qpZh4ChVM8vT3hrkUfVXyATtiyZTw8qtiobMq7bMKRwMt1b11MRe2vK69nGYo7kKVeJBpGLxWLCCUX5NpRhe",
  "key16": "2s7fNU8jqLGq6pJM9kYDYWzZqwB84kaob9hY75ThE4Je8SRivbZFNBVvzq4SnE2EG11HX4xxVfkuCorC5ywtHrTr",
  "key17": "58K525iqCtA46jLn8aHi4QLZ7xwFK9nEGU2JmVqvBMWsiRFrCYjAFpHoeuQpGsQKZipSJCLtozTaMFMUJwPknH1T",
  "key18": "5zBtVzFi9J9QB8fCPzvhMRkCZH4Uxt4E7nnhnLcUEUBrpL7sbPtgsgMnLhXfBYRb8HNvxbyA4WpSNBWjxvnGWenw",
  "key19": "56fKtSkbBxDab8DwQ43pcDrZmbN8t3veS5g9J5DifDSQXkf5t1v5ENeHwbGHy4FfYciJtwq8h4AqBqEakkJ6bceR",
  "key20": "2iy2a185occo7UowX4xmyVRNjUmuPPnJAw3emBoeXeXrsy9nzdTzkM5y219R9YiXVwUEwFh6N24yu8sPY5NpPTxf",
  "key21": "7CG6sUZ5GRy3NTSHi8B8rWvapVoLr1n8c3ghbZHKJQuuNY5WVa131XnSFfAZsoC4iwfkKcpYXKWRkcsKDRVMaqX",
  "key22": "56oSMSobDe2TEw55F2PLkfpTU5Zzg1SDgq1H5UKhJSxT8QVXaDnvFALknvHX6DGNcZvQQmwFNERJUvPJ3qKc7ZRV",
  "key23": "g6kZR77vdRJWPKVYQnnuA3xnQxr3ThzbdkUwm4uNZPmxG1YRw8ZBsV25ENSjbXZ4fYVqPwY1u4KnHdGxYqGC7G8",
  "key24": "2R7Wj9mCV1tgGKRjxprMNnidqRecU77srKnHpB9CwEWp89JxvgM2JZ6ze7f9UTgS4vgEoAz7TVLF2vFU5eK9AGmA",
  "key25": "3Q8Du1ufbMAyQz3s39EA7Yyuf6v9EweipdPNYMXzn5uvPctqtQDPtrJXxaYqBCjp1KN6R6H8a3raeTCCBeY9KX3A",
  "key26": "39yjFHXrePhVv94Y4kUnBVjRnCcQM4LF6JcWRoyJiAxFdrTJkY87ZHphMYfFvjkH1TyTnYBrWJvJsovPzLMNTku7",
  "key27": "5EZ74FKHLm3cPaR1mmLmEYQEbtB8EjTDWteARiLDZ7RKRQFnFx5Ypb4S353oBKMkKn8ajk5p5DSHRHpm6qfNrT5d",
  "key28": "54wY8ztt1eB4NosGN9RVDuPqkcwmP8NemRSa89CTqEy4krDBVyxhhs9HpW5eZu7nWvSZSTsg882L28vg4M6gkWW5",
  "key29": "4o7pNkZXXbY4iYavWBruSv28Rq3vHfWFYD9NTd8zkGXgQCbUQwW9c4rDxAevsxHMZoxpBNhge7kquxAorVNefeVN",
  "key30": "9rNv5TRuoS6QxPWxXooffZgModraDq44LsAjL49py3PuGyis7Zc2YFB7xCXcf16eZktEKHeesqGsn3GebUFa7Wu",
  "key31": "E75B7wzNuEYWehtLwVAtU8HjbTQFn2LMAfNm2U9pz357NqeQmpEjBPbC1QAyC4ZBB5x9czS9JtFLu8qWQeoUfn8",
  "key32": "K2V6ABckhMPNvecWzPTcQfoFbEGzjyPoyFkdQswMrN4eWidNDwCME6KwCdzjr3tPBhEqf5fzSywU1dCnnx5KoVj",
  "key33": "4xJVNDakgrodYMHqKUjRSGaZJ5SW3kRgZtvYbF1x9xDUmb4venm3Tza5JSAveUvhDQnG51VP3UthiDzCW5T1djJJ",
  "key34": "4ESxYN5EghRLA9igqeWGarfHWXBJgVJ1EgHjvXbvYmLzMEEbiRciwuqFShMAC7dMhLmChjSxr8ErWk6JBCVfvCYH"
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
