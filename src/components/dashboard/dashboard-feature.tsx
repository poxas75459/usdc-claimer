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
    "jqMkQuJszMobVzPk3hfuPFPX5in6jJ7huPKhaSi4SyLE22Brd4yTeUdHiHs5rh9Ae8k1bNkmMMGHNhJ9jaHAJr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DJgn8QEUZi5CLs25K9xCyx9iwwa2ctWVasiHak3r4sZXtdhLspZ9L2uWGg9yftpyZKNYUtMpHbeaMkoRg7k6pWP",
  "key1": "5b17jmoscbS1SuCZ5YCQVkapTow2o4f1wwt61YW5qkLnBE2u6jk7WsSKWTVsK255QEwEzQ8EEmTJGCB8FCfpZP5s",
  "key2": "2qgzTZYZ5xYB8f9WbW7NBT78CPVT2qVGbeMZAYPZqPA7UZy6JnSdpxHkb5UphTvQkpKmsMfmJgS25UcWGWxVWLEV",
  "key3": "4VfFQsgqXvs9MxWRSoStkKtEkyDCP1VSfoKUTDWK2LT7sbc4RCe96bGN9fU531easuzQmCetRodvWnc1hc1Bww2w",
  "key4": "EQKmGSsothok8YBWUMPb3H8aH4CP5Cm66iqPTsA5QNZX2NbcmzU6GyXcn7CrhYS72HgZDSZZEK9k8WN9X5jf6Tn",
  "key5": "2nyfCeEkYjduiwwG8KT7eKZi6hkm9amnqGsZCUFPyY3RgCDzgtYVcRKjdugGoQccTdYbnjKUS7ymYS77CveXRp5Q",
  "key6": "3fosbHeo3JFXaHoUDwMEbb9H1kN6cBADSksqrX2L1pShAwxoJmkUvPdgfBf35PxV2xjrRz8SqATqF7Vph3BjX3X8",
  "key7": "2z4DA71K2z8u9mxPDeeMaR6sHWmAZKec6zdRuY7qZkqLjLKgSgSGFFnwi5NNa9WbEL9DbGAEUiXG7YLCFM3fpHdT",
  "key8": "36grvFFzVQ2iv5vbyumT6818WLsqfjr4WoAghews7JPrNZ1J5awj4559AP5ZSq171ZFYSscVxeYPBGtPom1o1mSf",
  "key9": "3Y3HUKwzmEGe4yYM1b1JVMg86wp6qwqvJjf4Mtji9yEq7A61kBV22CeSh4mEA5eRV6Lsut7F9eQGCc8zBN9tGNG3",
  "key10": "5YF4SqUz8VEZR5mrtQjTSPBKxuCQF4dFaR4JrwznDhwWSt1GbWpgBoU61ZC9cjoz3qVm4hZjwM9oqDcCgyrhz4L",
  "key11": "4Snrz6oK9fr1ejekRcqH811Yio4K8ZqimgDMGhXNuqjhGtE1b8KjxQbC8QX36SrsQyx54DmpieVxKfZJCw8F61HX",
  "key12": "3mUL3GBPVheActguE8X8vi9ieXUX4rCePEMkto3sVed3n5REwqFKwqNuvervnJReX3Rt4AKbqfPLxNKgDY4biffU",
  "key13": "5t1Yh4svYyHn9PqmHWnfc33Q5pAHQMKhVrDnrsg9vJjS3VE68g3oN2KUzSwE7x4fMUjVAiwjNepj6skJKtCwZshc",
  "key14": "128jthFhbiGfGeb597C2PhWtvAmBcphe6WJAj5Xah5oh7Qc3RGqdzHFkLjVitUqDscezGCtua1TSzUC8ftnER1xQ",
  "key15": "3NoBo5weWU5qY2MphhmEB7ZHTJDUBrgWKR1JEjViJjTdxsNWU9crUo5ZuM2XKskmziQK3EL69SQy1tLSAPWRfCiT",
  "key16": "nsZvpGXgVxmjetALFTDCnoGQH5uNVEKdJgCzzUEwQLqAYLUJzCu3HbbigGqys1YD2rAKJVmR3iKa76QjfZesBu3",
  "key17": "5vzDEjznWfa8KyRRcUeWMMY9CBjLsxLXeSZQ136S1Y8DLA6juwfj3QCuuoeAGwr2G1CtCKSyacbjvYCetQKP9kSt",
  "key18": "vHSLB32vrNUs8NJTQc19UjsKTKu9bsf9CHkwyj7oNj2bzCg5e3apyNBQKVwDkamGG3kiUDHxEZYnqd7a7QP8BiB",
  "key19": "2Ln1AXPAJibNz3JACSBSzGnvWed3Kq8MQ58wMfZBQSjyLq7Qcp3jRAivTmXsWNBGLh34FsjriFStSYZQTJYr8q15",
  "key20": "5MJFbAmiXUzvyTV7yEdwABpvfyF1GtTK9d3wTXrrSUmrCqTUX1cZmifc1SJN6dF8TZWDuEvarBjtjuB6RaT6mRCK",
  "key21": "3HbUoiMTs8HqHw3nRuN9TncHeV4U3WbyH7FcHYgGYoBbk1qBLrBhWqQST3nzP1AZtm27RJFyhRvYzCnDmemW64Kw",
  "key22": "89MT1XhyHQJt7rUMko3A5J73XKbLyLuqQgnagHGoqU9oJptdwRczxf1NyhtSh99LmMq4HeVPtyUTBzQpcFv2i9e",
  "key23": "4yK4x9QchG9KVAKju2e1kXw2sVfFYkSREtiXu1pKg6ZA81rtWXt5yr8958U58dEfkpt2U7k7np2vv6FDWECMwVeB",
  "key24": "4azM7MYngjD98kbWjyRVVAYK3MQrCyvJbCB1eFtJGRfZnFBVSWShhqKCzQYr9ZWCVZAG3x2wsqEPNXVVNZ13dMEs",
  "key25": "Us8R1jhQVy5cYoqqEVoMvzkLPh6VdeLHd4bitdEoFyCj44D2GTuTJt4LXcAsUuW8B8B8adDcuikcDFFD67hJ4VE",
  "key26": "5k7pQAM3g4xLHAYzMDuooLUsoCsqDp8wftE1xqGQSczjCyRSSkqSfpfJPitF1r6xNqHbjHURzwRWzSyfnw6yNHmZ",
  "key27": "4i3cgg9PgPaPuMoMzcDV5WGPmnL8qZKzu4L4xXN4biskuuDQCTJUANfJ5PRn98Gs2rfVvHG9rJ9mbpnKxpP1FLLn",
  "key28": "5Hrt8YjpyvqBmi4yodCoq2rLhtY56oz74YLRQZuZUt1kVR1DUsJ9LxtaCFtfsf93ZCoG5uBgf4jCnopmzzzYWjJ7",
  "key29": "3C3VjkXQkwMfDsE6T39jdg3nAcTSP29BwmJAcAeDf71iPpMb78xkXJbRKqApXUU5hVbA754Hr31R4apVXKzQ9Zrx",
  "key30": "57BytraEghjaF7CyJiswfG8wFBxdpeSCf2hG6BRU6UEjktSNv2frUhX7xJKtz4wN4z8Zvvk8c2itimbbNopZHwK1",
  "key31": "46YUkt1LFCXJgTEtniGLLSXWzK6aYYhDSfxpjYcKo5EmBJzKYoia48cG8Jjrs34Jp4Aatr1paT1v44FQuAo3duZm",
  "key32": "21KtAHNSjZpXKZWknuMyBiY2rCFeKHtAZbdnBUwxwE26BFp9MJw6y2Ror9336KeBtQYBpnRCyJmWKh3Vq8qCcvyN",
  "key33": "2U9oUu1T8AzEiarfZwUNHFzKAQDtYD7PaJUMyoarUZLbU1gs7hJ4CgtNK79kmbrnuMthhtmxzqWDXjo2w7n5R2UZ",
  "key34": "3tRkDa6kZUYZP9RbwizzxX34Q113CKh6caExa4tP3qfk6sdQ7c1MiLG2faBaMF2ARTj6t6az1P49xFp9qxWgFfZ2",
  "key35": "jZHRX1wnhsEiTzQN446jdGYA1h3DqFZvWLA9Gna5iPQor2PCyiGqM3z8S3JxcUCv2jybvJ78d23FamHij8Tcny3",
  "key36": "5Bb6KYLZg8hwnUkHJDGKf14gS5XjaqvYGVcmusRVZHc1wJR5geUvuxQcThER2tz8qSgnjAU1aC37pZrPcJiBnksY",
  "key37": "5twgwVucdPgNh46obtqTkoUPv4SYX1HtZ64prQDgi4YGKFfP4Cckqk2Mur9mDKNR4TTk2VW9QnGW1DVEaZLD1Hrq",
  "key38": "4xHSQSDffWyEeX8wvy69aXSANiPy23cz34rsn7MGiSrAQJzvp1SErsUjhAS7s6DG9WcWhUT1UMf9A9NtaUYdAhyD"
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
