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
    "2SHCKKMxbpMZL3NYDEQnPv7YFjYADU7dqEmmk74Q8ZL5sERtkCsAzH856MXemXUS5b6wsAbuqUadwUHu18Rxnxcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Vmxbo2bWgA5C1mjQmUT3fKDtkhD8XWvKwg6nKgUPM9wRy1sk67UJbmfSxMxW2PMm6U2x5AXLKVD4VmwCtWzyYa",
  "key1": "4qcWdWm18jZw36jJ221bKMPHE31QKUL8qKxnyXvx8uX6FyPNG7MbEMq4kpB2ADyyTnLGatfseYEVgZQKgtzyoKtq",
  "key2": "5ZJMyYv5t4jZZmis5azva4yUhcaQy5ahfWDWCxhAMKD4JjxE3Me8GvLqfpsGaxi4vUwGzWk7FgqhcrBUN9V2dvMh",
  "key3": "3FXtDzM25UDcFCNAQQwKh2cZmYd188fxxURPuUXM24L11T5yxGD55b7bt4P9x48E7tDVYaGXHdq3kDiajcn4c7T3",
  "key4": "2iw55KqLzybQA5JUCQkdEfxVJKwZR2KwmQjnrwfrScTUnyDNeaDRn8zVq91cJ2MfjYy5DuC1rjSKdTvEPGaM5dqF",
  "key5": "WtQVB4C6Bzp2ruEuwJiGudBYCgcypWiJ8Tm8hiqYazbhM4kdXtvxjgh1QiemscRQaR7KPf5Tad69GP9YGa5gZrx",
  "key6": "4tDxvPocQ6RRh8NN9SuDj5i55iBRStySMR9Bg9ex42RKWDjgnu1mkt6AB12wRD548CpZCN7BvCLn6GMgEHuSnsNw",
  "key7": "57brxR4kuEtHpfnNfVPL4PwqvscdLphhrvjFKJ6pbQc1wyZb9H3G4DMBHC2jfd44DqFu2WEd5g9yTgGFy28YZDUx",
  "key8": "2izbrLUkhXijkGvQFnHWWWsjaDKgzoXgMFx2KkcmZwGYHkR7wCDYssGgpRWfmX1PgKMDvkd5riqgKCUm7dYcx6yW",
  "key9": "2Ck6NFmaVKvgmoVUsULL2Ynkk9puEwCB2a5ZiLWL6p2qsD7AErEn4Fv6tXsqYmH5XetC3UhMFnQsxJFSBqv75Hgb",
  "key10": "55ohjnni8QqNspmA3bDB4cTWrDahGZZe4ZDAvUG8YyH2d8dV9mAU6c2E33HnWbAkXCK7g9EXX46w9e9WDaVnPkV8",
  "key11": "4yweCbuUvFe36kKAvsp9u8YrAThk8VMcRUjXaj17qyvXXs229xAiQfG1f7STkTHNY1xyXTVpQBjrGxx8nJb9Ysbr",
  "key12": "5DKYGYFJ6LRt2G3iskYvyC8ZsQKHRBg3QH5EZruUVvdfSADBjZE8CnCEyWrbAx6iRRjvRrQd5xxbKZKsNRgFceYy",
  "key13": "5zUNhNg8bKbSNQKDCSnywwAcWqVhYpAnWmpMN1ya2TgtZ97Jb3pBtN7mW62jZWbg6owizbTTeF1RbzgwwBGFYsm1",
  "key14": "3ZUxyb3w5qtMF5LnqZaH6WAVfH85Su9siuuBKhjd4JXZdEgToF86HCz5eJmMX6qh4qfJuZLEJc4mqwKyXquYbdE",
  "key15": "4rhMbiVeCUyN2aEMCQYnLVhvk8sEB13VfqSVdx8knyV5mJMnt4GT9rPsefJSoXxwNzqLEG78SbhvMSrQ9Qaa3qR4",
  "key16": "qhwrnqja722YGrD94W9hNj8mGq3oNg5FR3Dx2aCfZGrwtF88Ha3WhFC1wJBeKwGWZBwAGdrwXH1J1wPT9rYX66N",
  "key17": "3hXZVCBcrAQKtwBzK52VqyPV7Xag42StrPgibso7DKYrjQRySsTMiJvKmZKVka34K7b8YZBzw5YpzrXqCCuLHVbR",
  "key18": "3ZrwdeVDUbf92gaoNYRSbbcw4jUH2r76dWD1HAp5BzLWmkhw1boWWgVwq2TUCvoiASTwvGdSZYddhzNxLtWyhsiM",
  "key19": "3rAc2VUUH8R53bvLU8w4hf6cE4ByqFFXbyZaeiifufqNVZw7TvmXZea5KpqfmKYxrpqMjK8FqQa5Awu6VzSgBTYa",
  "key20": "4VRZH4tieg52RCZTNvTdGgn1renbJ9USVSuf2PA9JeTLntBMBVffknmZcN8nMZrP9ntmSPXLKNoi9wohtrhBYqPX",
  "key21": "65SegPmih24boKPnAHvJjfQuPBGApDxGSUwgAtpdH8KP7PHgFP8vE2u2Qr7z1RCJoWL9f8stTM9eUH6BXLxfhyz9",
  "key22": "3b4XjFQtnCseiVxUgrU8nKcfpeDahJYAncxy9XtUdcfjobnfMhHnfk7g4uazNE9HmSBqpMxY25PPhTBK7u5KnbY4",
  "key23": "31Qu8QXn3FwyfwMJq2FYDsadNLPL6WTN6cvFNG92c2bBNob3vYzKeWfYpgGvD7dqRYwqEA7mcrYbN7TqrRNtxGJh",
  "key24": "31pJ5oEgBABs2GzwdzzZj3bFKBnoQ6CUK6jpMG8QJTjzu6771GPoiZ4nXrYM1be5owMwRmvNiyDAiKqeGsx9K1De",
  "key25": "2DU54c6tnXp8jqFDndxox5ff7yLEnFYaCK5iduLMZzA9tcd3WWcj4KRa7m3GK2gyf3wWsoQ7vcsMv5KN6V9MB5oS",
  "key26": "5W7VyM4uGs2XSsQG7tpxGDBkvyQkP1WR4cjtxZE6AeAS9xnC93u54LxndY1P1JmHczcvHxFwJEthCwpfVxECfn8Z",
  "key27": "4eiv2RPyEWXv5a9UiFecafNU5ggBNnwiAYpmxH5eqehdPBJi8nCBQVEBtFjEpkf5rmMbA834De2r2jNNowRbNQfm",
  "key28": "nxxqp4S1r6hm1L45ZaAhArHjFsaPhTMSmFi1AJZH6x6BuAUGP9bWS1QFKJjaDJZ5vKnXbDReB1g8AmbFT8Dm21A",
  "key29": "Jj3vMQXBG1y5dA6zMXknDWwt9M3FmK9fL3UskvqsR3JD1EEtyjHTd1612JniZydHbeQEtDmsHB3nVuQq3Qdshwu",
  "key30": "2UkNYmUYEdYKov5V62dXtYczfmaGvSDXR1dPmV1MALA5Gum4XsESFtXBMQPYwZd9XNL5FHSdMM823MjmfJs8i6JL",
  "key31": "3Axzff1gLP3HTZRHWKGZtGPMXJVW4rAYQcrK7LvZZBnrLTuCRHsqhJrtiLUPnjPph3eDnqPpKLMrvtJ2UcKo515S",
  "key32": "45ZWt6cbEuetEfJrvJchZhbXJrraWcGwPRbRh8yJP9AD4Zo1xMZwejPM3kzPEzFWxGPa3ESRd6cM53G8JVMtGJZe",
  "key33": "56zB8JhUmTCZLspZzqKNUurCF6R8gvJvcep5F328k6x5nVCoeDAmSQNL1SLPR8z5HTE5UL5tHoR9kt5joXeb5Gfq",
  "key34": "2k89jGPHX5LhCevAEgaeXyX7C5ZFpmbDiGkMkxtRkSvqFcXoDsKuu5Aqp9xZb2FtGuCeu9XfGb7CHoofWeyJa3cQ",
  "key35": "2onLXy71EMVSs41itrpsPzS7sFxontfsFbuPoz6dDbeCJGGGWxpf9EatBWNtGXcUV4PUD9UoRuzqRexUbMQdFRkc",
  "key36": "27AdrJ8MjggPSinzHGHuTteDVaapRzb3m3VpovFT986QaozUf63wPWSaW76v3SitSLGCjZeBd5RpQWN4hYEZRRnZ",
  "key37": "2MqgWyYmrCxaHurSTQDaaXPQFXoXR9DTB5hYK4SFMtpU4Xcr9iLjyQGGSHKkZmSu2hfex4mLuTviAB5HJUh22Kmy"
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
