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
    "2k9tJptPmwMJEj1dRArspFfqsMx5gnBBNTHwcpHPBh4avP1hYFqe5hFF3yyfqgbV75b6btrWiTHsDEDP9yZMnJvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKaP7ReaCVRpsVU4SEBmnA2qcScqRcNdMYYH3Gnhs6ECuQ5rgcqXfsyb2hWohyoaGB1D73oUpCpNpJtZzCBxpJb",
  "key1": "3QYAXZqzanW7z7ixL8u4m6qN1wjhZJL7w3WaXBG8rEJELW5pwHXCs49Pm6Pb9UrYs4nJU4peWJQMK7rncFns67eE",
  "key2": "4unbZNhdFUGZAfxS89dLR8MztMrVbHMKPGtbjpws5CPWL3dSdBQxMrHBB93jqz8xcPZ68eLD8tB9Hr4CjjQc3fqu",
  "key3": "5dzTLGNgPhrcYmJ8RpjSxytD1dAzthEbPv4hrGoqy7j69LYCJ2kMm42oTnd1FRNLsZ1QdXGLviYFnmM6VzGYsvoK",
  "key4": "3sVq4LULJNMB5ai2KKAci5FLNQbcMZ4FU8DBhBZcGfbVBHMPJwZ4YqsmQv6FHZDCh9cmC3hfvTenA9R9jwY4vU6s",
  "key5": "4fJxhX7GtMFbg2LWYvupQNTuB1vcWzEynWg6pqwmMkkQSNSq9dY8dafsJ7krnHWjcGMi7hgNEK7mxwfvd8CwcTpi",
  "key6": "4Ac9u8j7qPtmJkqoLU8618VtN1MqdrEiRK3ZAigkdGeufFTjZaqUARSLQGPveUq1hFupW3UiEN6zj8vZtkMkqDg5",
  "key7": "mBuL5uWC5vha9mrUj42sQEpk5ZL96xaoEYQ2C363EwjSG3arNSB8rB9wNVrLYWWRkdnLBtuKnX73kiCock6TFFW",
  "key8": "2BQnvetGpYor4DzbZqxmyUfYFnYKo3fbybbgcF8XiZSEky7RxpgrrvYPNtnxXiYqNoaFfP5dbPRoibS48veut31k",
  "key9": "4akgGx1e8z3H7oebm5HWqtKjkgEBNEJScTsm1dZzrPWfJ6FwhA56t9Tm3ZydgwguZrNYSfJiy5cf7FzQwaSjbVjQ",
  "key10": "3UqZdqCDJeJoo64u9U8Hyeg5yqVCzhfM21Dbgh9acY7oqxAzKfdKpqUPYdtf9knxcFRqYxtjAF2Rc1nGtFed6Dkd",
  "key11": "4zMC7nfX5CNho2rzxdknHV11oBLstecroJAun4z7qYVWH4HkoVvPJsQHqrn8HtfWQdGqS21DPnXNg3Z1s6t1ReVK",
  "key12": "QA5JAZKdTBRBsR6E14eKk4P6DrnwiATBUUgLVKPaRewZg9DonTzfFyCWNrvpaYY2yps2wFAB4oKLbU45Cy9TYJG",
  "key13": "46GpdsJ51yVbvLRN5YnAQBYyFC6nc8AJWuLDob1zhA7No2qAyeHTye9oYZc4yYNoGmp1xCLVJD358UEJeyZnoLx4",
  "key14": "QJ1kRtvm4fWBno5dGy4kEDuUxGJHB4a2bjQHjxJxjat8ikLmkt3GZyZCgTmKDfUyqu9w22VCwhh7f3ACQUwTQFe",
  "key15": "5QYSTAgqNui8ZTzNN4juvd71qw8BzCiFb3HZRfhf3K4pM8VJ3Bt4FK3VZJ5yLTCgApjUAEqzPrD9w4FQeTAzNcHa",
  "key16": "5LXHM9zbGdaefSTrDGzeu7ACkW7u7BNfT6CqxUackuf4T4hL4hWVJXbdgbXqq2rHUtTbLDWpD4Ehbtzv9kvHs9eS",
  "key17": "41t7rzPGin2ASnidiNwxR7RtAtNPj83dHpsM6xcy9xdBAqx6sduKj7ND2wVMs2FMaMYLFWbbk8hpzwudtNUHoyVd",
  "key18": "64xKEhog9k4rBe2SGo9ARDd6Pr4BpJnhSvHpvWnD8hQ9X5KZq9329YVECiNLpoW14e97V8vfkLmd45XAPRoeZqQ6",
  "key19": "4EmQSWzr4TGnkPrwpvb5Zv64Whg1ajfuqWqndnvEaAgCHXjMwrGBcmGfeKAEuT7sRAe1fzW69NNYPSEfNnSeYtPE",
  "key20": "Us6XjwomixLf9P18GuY6GmqrXo1GMydap4BtiWkkUmzupP67eWZMT19qb1K1H63xq6vGk4VqMCaJ91VA4RbVMDp",
  "key21": "zXMpvwf9M87xEqgt4v5GVsLM547CUAyASL4QVvzTbrAkyWqtmqTaDXiQQfhYNg1XUyGwv1jB2ytLj4svcr6yQ3Y",
  "key22": "f2XmMyZoXYVCDcqtSsNwjvunM6NwtKyo3V6DqWfz69MeY67xUb2sPUiNcwMLcYzBnqiNjqQ1iAnqqZSMrxatKcD",
  "key23": "2JTMf6mmyZRS9hpEG1DdiGJ5LLF7c22N7niv4MWcDZjKbyVsVDibPdG7pQqWwEKX3nN4YQpDZWQwTK1fJ9Js36Hh",
  "key24": "3JZoaVxdUJUSjBHxqsKtFzVHHvGEfANd52XYJGcjb5S6D3BeHDC5uAuA2XMeLZJ8awGzNwLoRHjc74j9VLXshnQu",
  "key25": "5nmANVVRS9jN8KEJ86Nh8u6CLGjGUWgoGED3F5sicvzLJgEWqnaDq6ctN6ES5oW4c5mnk5rSDMGbcPFbRwVuHqQW",
  "key26": "5add3yhJKwqs5okwJ8XQuXgMSsZJAxeNzxfRcxBKJgeocKz1RE9ikoxAsPfkF5PZnRfabGrwf4NW69jpNVnrbdVJ",
  "key27": "2VgRhxF9JjKNobXSKzCCqmw6HdQUHpGeDy6PnzsXscgq1nv9QTfNStWS2w8kk2ezYQeAH36tMk4vYdKR4Wjjxhun",
  "key28": "4rpgcGDVkvBE2pEbDX3mb1J5ZcDwxBJjj9Wq9PBjTNfCDQ3YXM6eHCFSTX9EKp8v8PptffvPk43C8wk43kcEPMQd",
  "key29": "5kLX6FhzCrtXX82cVAhvDqNQRsSuFoi7E7utWixfhPUa1PV7NfZNvja6tudMZXQstgK9Y22ez2qYvXB3PH9RzyjJ",
  "key30": "T23WMPf6AQNurUekd4gz5CjFC44kP7Yuu9Lr5V2cXBFE1Qr8MbEFAuXmsQx6eLh7GtYJJrEPcJWhqvZkKQrB1rg",
  "key31": "31JYvyvHFrFrt7mQrLkVpqz2qRgtnLFcPgpnYLu9HibNHtMBddzH1uRKqY5Q4ip6b78Mmou5kmM6PY162u2Ei5pK",
  "key32": "54ymjmYFBwPMQ58sexc39Mt88EvMesDSxmbiAKuFr5rQVMbqRkXJuUtVe6F8PdKxBD9KRxfjpJ4ytCGHx5ZtLJ4c",
  "key33": "m8pQvCXKmYYuAF2HkXSFZPrgy59vedaTz5AqRxaKV8H3d9Fxc6WAw1B7LJLyb2hzfWgfzGSjuzjubP4TLTxxdUz",
  "key34": "4rWuiQNaGt2TNror1TZqWGmKxwcAXK4J8iyssZdHkupgUuox4NwLi1LKEgYwXbGFYkEwGogRe4WLBFUiEGoggtVt",
  "key35": "5SHQ1mYw9HSSx6n778qYXwRQ24E83KN784xXiYaAGvZksFHsPRL9ifEQxp8cAxGCN7yiuuFEHz9zRXnGN5u1PY5d",
  "key36": "4X4yXKGxiPDMMs3AEFtJdZbSS4rDQ9kA5tgsCbwtD5QiwFFRrf5J2uHFWFmiY1XB1B6P3JLCx5P8cr6bmy6Cp6TY",
  "key37": "5ngtG96XFJ9sAJAGJgBZ74n5jBeDsvvvfLjhnYdNLWH2xcHVo1K6NY9Ruqy2zMcfiVS8UFHfGRFTAfSRnEeMC7WQ"
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
