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
    "4MSX642BE6EPEwZoUJFJPAENmqx1fFeavfYgYw7QUdubndiRirAr6Nj1ccYE2aaacUzj9JbnbQCgCZURKAQTCXjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lapf33CuTuxRCEXWvLpszZLFQE6pW5d2e1pANfNdDxKaZHZAxB1zVjuzsACeRwWoXUo4mKbSCcFajsP7f7MZDjD",
  "key1": "3iGTf4Z9F7fJ7fGYwRBKjTVnLoHmz8cZvFNRnFfWNLyY3qSJb5Nyp1jzPpUBsd5SCcST4cqiWQEgSMiLe6MuR3QT",
  "key2": "5dY4YtdywgZzRgyTwRYdCDgCLd4sy7C8eNpQh4soQsc4GSnwAuDh46xNUcagDA9JoGuckAaRBkqqgGbNhnnfkgnt",
  "key3": "7kfU4pTJCTRF46tV6PcMAASHf23K6PrsUvzZsKqDXz9fwMZRfFa4PgoUHoS24ha18EnJ7VT5NDxRLqd6DFrGccF",
  "key4": "3Pe2mueaeBcgj3ws2PjxijFtbTT6z2RSi4VfKF3QJm6quuhCKcf8LuQ215JP2odipKJcs26fAkUK15jMMymExGQ2",
  "key5": "5DGHnXWywg9kJ2yRkR5xuWckiu6tbjzUx4vhLSYR9D6P6GUT2Ng3dnuLvjf6NcHgHMm92xuUwfGk1Kffh8g5SXEk",
  "key6": "5GhKfYxwizVTw9NuQRbkdJxvQRrKUKTVPnNJCTmGKry85ZNafUCkaHAnTnBFnvawQg3AB8cp9iPkWsZmJ7q3tvKy",
  "key7": "8bNXmsP816hMqpBPaZGexBhKmBH3RYQToVn44HkPW62GsiMNtkvxjH6GeQNkrXNWQjNEUoxJ8EfHH9eRdsv7MgE",
  "key8": "5JgQoah9g84zbEgwKTYaAC4UF54rGCSUV3o2TDs19bchDwqLN3gnug69ygKXnH4BsjHETKfMQJGdUuGMw66an8VU",
  "key9": "522XAgQcb1aiEGNJXAzdrxhGXF4dmWi6Wyd7wGWnUmh9rmncQTrHEM1b6pEpwDCy18mF6yyaQRFeWgZChBokHnjH",
  "key10": "3iaQ6spiNHUpZMUjnvKDtsZH39p7nrd7R9EeY3PDsirBiX9wezhGPMDRPLLG1JgLomhC8BTecvN4177oujwDi34d",
  "key11": "4YbQTSmoGwNKZumoiKSW95b3GbE8TW274MmbTmiTLZxPEpgbcYSvygbwQj9M72GgGhQG8Pf4vdEA7GyRxXoWi1h8",
  "key12": "5Nf1DbguXhMmxF1J9hmiQS1EidcjPRfw7q5KAMssQiP7PbDNDyE9PzWcAywPpxoBpfKrERbTwThsfbYqFj6szoBG",
  "key13": "FvT4x2P7d5dBV2KfaPsSHuG9tTqrc9TkHiAPDy7pyYc574ud5vCzYQtWMTivDW1LuoUPCSRmVHoS6Ru83eDRRHX",
  "key14": "N47gmdTbv6TAGZimMCNNTMdWZnMRmgkpP4eJ8LX17vqXDE9M9fQ9rWuQVfpmEwARHiaW3PP9q6QzKLj4Zk3cWJs",
  "key15": "3WQ66mGjMyjzkQB6SkjJQAJKuUZnL9UruhhwSFuYqUw6VGwuyN7ZLB2GXTzT7SH84WxmTUkW7V3C3XkQr7Zy7iUo",
  "key16": "UFtSqJ3v4oufGCgVkgxtPsUv6gNSTU9uDUHY1pdRdjW2tYSscncZK1bFZdXqsmVVWJXUyX5PBhWkr26HLBg6gNc",
  "key17": "8KCEhH5uUZPgsJHbjsb4V8ryBF2bRfRyCzc8e6ZnCUC5wk3VMRqUhzooxc2dUE4PDBWwSzj9igjJxSF5AMuvazw",
  "key18": "4LyQTUqYW1MUckepNjqPfxTwm3EqVdSQDtjr5fqz9s8jwHc1aPSjNYAvqB234iShFUqjTskpc3To2qTPdxu84Rwm",
  "key19": "5aDXd7RFsnpfdkCffpxpuy4wZB8KZMAYpjFu4dj3QBR13RbcNaZAUhtzrkvmmuJXpZV9pvSdhXGEFg9U9i7ivQh5",
  "key20": "4QdvdQpQPThDrB2SNNsG82Q2bJw4tjetYknzcRzwpF4WYhNTYcRffUKAyn8v5ZjEoCjufe7zVqZ9AsabmWEuE5HF",
  "key21": "zWFxMSTf9ZvpfdGzz5FdsSVFTTTT4XNHxvBDsCF8497mC5Vk1tyodgUkUPtzaFyia7YGPsyKYAuGAao7nJ9AkQC",
  "key22": "AtMnmU5cWUhQwAp6xdgAxREiyFdcWyquMFo6c73V47bAFtqiLmLaNknsmyAPULpZYQZk9oyx4GaKtQYcRH6H5Lz",
  "key23": "3XPdoCifDSvC6eE9fE7x8TVdtKeFgyB2VbmTM888nmnojRpXz44W3oxSf4BWmXkETzBQqUQvodwJERE11kxABBGQ",
  "key24": "3sLRZK8v9162d2tKDv9XpMTCNKwLwZs1teChKW9FToQLbNDre22umPN9i8z7g119LydyLkWqxox26SFaU8MyWfLg",
  "key25": "3hmvwa7PHzyy8Wcg5puVJhsm4Dc1keztSKd1F4mkzFKDYv6yyW4avESdbgbyfijK5mkPtVci9qWUePAWmSfNdRYJ",
  "key26": "3W3acSMq1xus5F56mieR1AbJ2vwdwVz8SreGekxm6nBf5BWhkVpj1wNvRkpM9tbAFvKEDNnTTpc87uzbBJUnXSQm",
  "key27": "2VhRMMdoNVZhjeT1eabLwp7BK9mUyVARbU3UehMU9KYguWX9apSs4kE6oQw55TjfGW49TD27Z3GBgT4b7yK7f2hr",
  "key28": "3dLcWVxEfCnnwiNg8F84PZYgKTVyWdefad4JovpJzk7tZbFRi17T5SKJPKHyTV9fiLg94haCyaB2F1YGnZsrkm4c",
  "key29": "3ut961D2gPYGLwWZ1BcgcPTsToKDDQ1vpLKNGHKs7ECBn9dfo4Q5cBE7nz5AG8Fe8S8jLt5EveY2jUTK2mFNYM9j",
  "key30": "4iHtPRdR2gU2FCTWtumCqPyJZjFU5PCFUoF7nTvPxkSH5ojEMq7MMxZenhbfDy827ZCg3tU7RMYU1ySGVfiGeDaz",
  "key31": "5a17AnynNMe1qbwjWPYT1PwnxYjzBJpMjJ2uqP8yhD2ujtyNqo9jFQvE7BdGhUmWmzuKUrxnQFvjDUAvzNM6Ewt6",
  "key32": "3qNGFwWp1QRSRHtpLpNmHGsFn1JVPjk2jc8NgvS7e313WHoRibQjp4z6KNK66JKWzcTdtjjXxMbMJ9t3Xap4Zv8y",
  "key33": "2dwmNan4TSGK7jU1uNaB9fbeaZfCA6AFbMC7kB3EkhMEbs8BZPmKxTP2o9jy17inueCG6ukwPiaWavCTP8MoAga5",
  "key34": "3YPCo5KdhP9ZSHWh8Au6PrUnFy623qpBoJM4raqiTTTX5RScQVcw41yDTE1SANb8LG29CZnDj6hZC5DZJanPp3SB",
  "key35": "3i3uSJqMKCayLssVkAh4oNDUE3cqWsWp5ah7YkHVYaWYPrC2vY6URtk7spWx5drBLkRH42bZ2Pmw85UJ93vpKM4s",
  "key36": "cQF3MCXJBDKz1N345PpB2ispt2srWLuSibQPAksC2EmNr4eduGUrJVzgupWTXYaSdR9guvyx5B7Sz1Euh2T1tcM",
  "key37": "9mjz3kngmnJpyAedwT44CS5wmZc6AQRnjTUeXC2a5b3ubHBiymQHaLwtTuwWkW34mYCm4WetfXSmdEGbJg8rn9Y",
  "key38": "2BK4ier9WLFxv3khAREXWePuR3wpZ8fcFY5oACBbyKP4LFqJ8VaiMDNKZzqNL8H59r2wkhjPDVCkEhCJtCe7vJz7",
  "key39": "4QhLYNBr6FFxsKfZUNc87FzFoCZhZg3JuRU2UuaGPxrLc88Ab2Qr8FxSRPPX4GcFNMwD6SrybKB3nen7q4EfDcoe",
  "key40": "Qg85mQCUKuwbjvnVNmaeRpQYa5mw3X4g49GNbsuWrKWtbCy1xPq8XeE5F6KSr2xLYM6RWh6TeKJEx1GARXfQCKQ"
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
