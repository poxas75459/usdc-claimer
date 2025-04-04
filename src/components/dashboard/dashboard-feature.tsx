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
    "3NThgPE4YB56KB3uPbBmAekzVSJZgJzBiqWQmVapmG5ehPx4BTEpt1fuKpLw25UoAt1gaawi6cmMKLfqq7ddaj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNTB6YcGuk1abzkLL8PpWiYg6CdJyL36d6awTJqdsUCgU9yMYXN1iRQrWbhvrcsQYFfjRGUtoNxVYVfcPwUP8B3",
  "key1": "3eh6eUgXbfUwCHfdQtreuYnxJz9Eve5zsryrSAMoLBw1cuLWZ4Cz8KGiXVYUknQWvMKUW6RPxzmTRw4Tb5J5Wscs",
  "key2": "2iXd7aiNvJC47Mwd2NZ5xGtTZpqoxPmswDQjkLbCH658bXcjPVYweATKWSJt5q6r98jSYUfHY48YrSUqQSxBAvCK",
  "key3": "5AQvVkx4xb17E4CVcdFcaMw4ASeUHbGUpgxZpjENpzUJFXsDfDTRvtsKPqpr68kZ5pcGdy7Cd823DeetM5Q16Mmn",
  "key4": "5hhfTF7Yi7A1kc5EfGzGGFzCwq53a2kE5a6oS2ztTCcG153ouAzeNRrTQ2394icK5esqncQSeCtf5pP4YqhMLukV",
  "key5": "aSYgMs7Geg83ZsKSeWKUpU7GoWUQ1C2DHNQLcPo3db91Dfa45QL7wCnYc9VTfA2buKzKsohxjA3jQzGMVPdeMkX",
  "key6": "3epHjprbyR2Qarue5v3BXtJRfQDyyrgWmvyQntZAcXxwDczg6npr2mm22BorNLa4A7EWvmtzCYCuUkTgRgihCNEM",
  "key7": "4kVjJ7KLUkKNHAnPDf1dqpEpJvEW6mWqsa1EwfdmCMwKGfVjeCsA4Hnn3avZAXWZnFqskoNC8AvWems8Y9g4WiEL",
  "key8": "54WC2VDVCXvdD7FrRLc1xZpK9vsonzEfptGaqiWDBUYk7X9d6Je1yj2RP8AbQtdE5xAi69dz25vxH7cGs8vE78XN",
  "key9": "5K31vMVs3SRXiXv5xbhxB2UVQ6LUEphMDq8sgGYvfHGhfNJ7p9MdWjmTkLEbPRYzh4oQYhJTcbDycvk1ed8Fe34e",
  "key10": "Rzx7ZDiFtzZviFWmcAsiMdpLTfQfuVuqwemM4yYKWi7sz1nn38XGz6pvRWYbB6NCUFfRsqsR5WWZ2FTjcyTaYX3",
  "key11": "4FNKi568SsuP8pKKTd7JHHXjudg3fBskgpzQRtysBG1XLTqDGK7DsAMesCoDwSKLjoAwnkzdZGjAxymm7T4wj3V7",
  "key12": "3Gt992qbJsja2KoA3s5VNKMuECsr8q2YaTHmHeJRxSjhjwEdCKQGDB9GdCkpYvhLC4TbPv47WyoFo4xaHH69CzP3",
  "key13": "4hsZsQQQZbJ4CsbLPVQJQrNi4RMrZpPcW6wsnaQQ8n81VpznuojBLqaoUp14jB5xxNHuTEBGwxCLVzBnSep68eBX",
  "key14": "5KnDkjhWM2xVLpA7n1xSbvPBtDSAAY2tE6RGQDHyVScKyU6Z3wH4EdySGpcjgW7WDcH4LNVEkq5dVugdyKkPbD7g",
  "key15": "Mpqx3g8DW6bM249TRDFpLocDhNLmimWxxPb7UactFymHuw5ps6vok6BB2REYZxYzuozBesCVW4ge8zirD5DgJNF",
  "key16": "5rPVvX2JWV3r5HnTHaLVfjoQgkbhKbuwuziAxZYtoT7byThraZqDzX9FcCfM363E2HdK7TrDVUaVR1kpXFKda57V",
  "key17": "4mtdQPnGCfXQdtvFXe8tirpdzLW5NHLAEyi14gD8TywFvMxg4VE46eVF4hnHWSFwzqLhzFRKtg9vrviGSk26uWXF",
  "key18": "5GfH9UefCpJjSWQebd2GUtHtpkC27PKEAb549Giay8PPMpK4CNx7MBzpMLUz3QAkR2fLJWgiW4gyjLff5T9MXL96",
  "key19": "5oSiFKTVgDEMzd44WZRBMpQM3SjTCZg2tWpLK96t67LKxmgH8wVaPyvYxMyhE3seFonhKqJ6FkULxtpx77zcAHvB",
  "key20": "2p8EDF8VAezcpeaA4Me6RYJktPYsW7UfC65ZysHjQoavtYv12r1UNWNWApZh9xbDNp3WSc7Q1uro3gvtMieBcXVY",
  "key21": "4J7GDTe9Cx1ryqr7rejLgzx23GZTCJV6gYkbwTX9dCsxCAKGkmzmtJZxHAmtwKXBVs5auaogsT8hrWUtmAzjYPNn",
  "key22": "3kDpXosyY37BEzXWLU25wzZEQ3yzdrJxyJiEHSHmZ9mpnCjTAXXBfgJTum6yevDDN1sDcxzw44YMopRAxD9K73gD",
  "key23": "3dgzGbZ5cXrxURp43gqi1Ay78oZyL5K3aRzZ9ogSPTCjozNh5zz9GXZNgkvQPpNChHkXFjhfawovfQ54PHuuneTZ",
  "key24": "4FUFBD5yFPzStnnxKKRRACKuErBEEQdC2hqttMPwFpC3NCWVvk1EV88QU61DGM8yvjSQJy8Y54AQrPW96eQqCVEg",
  "key25": "61jMJtThthUvMPfBfwPaM5qPR3aaELVWqodBJANaTRzbLSbcGtAV8884pneHP6EgPXVtr6B6RMUVuMrQxdo2uDvM",
  "key26": "9uWLGm4k6uDLtPm3Sg8gVxotL3pF15HfHgDsLs2DHMf831pgYtPis28vwJ2V1AZJdKR5z6phXWqaY6tF6Wx2uSi",
  "key27": "aRxXaEJDH4VMGvxR6LwG1VhmRYXrK7677P8cUw1WxTJxLFTKrWHkzDGeccF43LkPFJvvh7pfdwVqJzierpiiGiP",
  "key28": "48jdvuf6YTxb5DnhUnY4YnMbcB1t3kvb4CE4gTMeaLdFjWxUaRYAAwCAaEz3JVxQg4x3ewNU2YxwM19BTE4gFvoS",
  "key29": "5q1UfptCLsbGbWf2bxs6gfv6PRy6g1JWjtE83K9yZgEaY3TKfU1bBQcJoRokM6GiDeTAL9MB5sbxDS3FQ3nDVijz",
  "key30": "453G2YThnorUWRhSkGFPXhcQ5nkBPPe5CtddLgh5zgURYVTVZtLUSdnEJsAqCDhniQ8dGbF5wXiQMjgQzVbgbotX",
  "key31": "5w93u56x7PySVhN3ngvbFFFQtEFMLHhhPoKFnKKKitAEsm7VtUNtpPR4ePKMGqvdqpJkDrhFpMN7HuAFcu2V7pJ5",
  "key32": "3xDgvdDkjh1QMzEupa1QCGkTsaHkgcTztqkJnLXd8tUACMiRHxMHzmXMn2FVGAgni9gDMrSNkLLEvY5yfqBmjorm",
  "key33": "4sDsK37Cxb2Ap3m3ousUDrQSqbqyRaFyxoWepHgLgQcSjacm12HGbsuHxoMJAQfe35sSLbrqpq1wVBt3yMh6MUTM",
  "key34": "3JGo3U6AXQTryTHbLSngPbGnPtA4RcVkKHZzHzZdp5JbckMF1CR38UNXsrL3N9eufA5PirDXhnrWFe1c5r9YJoMG",
  "key35": "23BsDSdUXHgrYHTqz2Kzazo2RCk1fWdGBRPecCZV9Jx7Jhpb3rwys6mjNxVbggoB45HF9cvubRzoJ1pvbvPoSTa7",
  "key36": "FjbcCnp7jBHT7ogjFmK6R98YnBLWRQ8XXqC4p5Pwr8Cqks3g1gYNqt3K3w1PMvMgwqWfE5VLaxNra1Awz7ZWyzQ",
  "key37": "4fRjXaxrJpoJDaRrC3YwnNx1jhELRochyT5vbFWzfMUhX2pJWUpT4qXvQE26RzDWcZEAwreTpiV5kczWuXM1RJKp"
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
