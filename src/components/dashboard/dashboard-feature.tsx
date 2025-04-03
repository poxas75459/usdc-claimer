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
    "37WFRh9h15NL9GNu458h5fAGmu1S8XxHjh3b1nFBiNZNK8wkeKLpM37UPNgiY3scZb1PuwjgLiwqQcBXokePmPrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yhPJZ2apbsRMHUfe7kbXp7om3Pm8UbccKkYxw2pQYh2yyiDhyjYUdSXj32PfrnPjbtZoUC2AV7CdLjh1Y4ScVPW",
  "key1": "4Se9hGA4T8rncndtRfc6rKNb4Gh1bFcaGoQfFtTzzDaTN2LGKzLezuyRhfUXr7oho6i8PQKe5aHrZZaTDi8PxaeQ",
  "key2": "uhSn1ekkE54V9ACCEkcFLsGdVPVT5o6b5Nhxn31dVtbR8ceFpmD6n6fo65Eam5pL9Q87Gq6sP9jiR8FnsAtAj1D",
  "key3": "vEuH3sumutcsyowoJcYMXrqGAS4jpFTQSqaR8J8jVm3yrPBiKHLKN1ErUhvJbUqCiCQakAAVGqHPy1C1eiYQgrH",
  "key4": "39dzhYAM6DGxgq5z9U98Xt9UXn9gZY4TWQzs6AFrFQiaztkKJhD1KwfKrG3GjbgtAKccG6MZgy86boUxEvYhUJZb",
  "key5": "4m3JUySVdGyson3Y6YBTRiX2ads9m15RjHGRdw5Q6roP1RouWxUH7WeXsU7tq99h2qUV9mSBTR911dD8yiLSdCKX",
  "key6": "4ViqKGdkDvMkeMM9z1Wwy3VrEcE6FhFnCVP5Rv59x9TbQbF2zHookDpfjn5bu3cAtPyQjjaUMRVyWaUhbbTEwdYE",
  "key7": "4nhebfdUHvgTA8umeXjBLFDdB5fjDUPt8PWz3WRnAYJLQQ48D5xprNPDvX5oFPfcoDuT52ry776WBjeB3t8Rpyyb",
  "key8": "RUWwrCes7H1rohW1fWQKadbTrFaAt3tkRFA7dfrKNp2kkQwBaENrEYzyLeDezBfrmkqu26SsUKgqzju1A7fukDe",
  "key9": "51dVsgVwnco1dfi6EYPTvowFzmRbieNj8Q2cyVsZWmNyByuhMAvtYQaiPNFj7DV2KQ9tD2BZExC7sF7KrmgTLwrq",
  "key10": "24GL5KRJacxRFkrxPoCedvsdXrrkUWop5rjqhWryf1PQVro1xyWQDtQCjPejRA41ByuaUNWFco7VJsXtqGwbTSds",
  "key11": "FPCTYJa3q6obzfta91UTumhWiyYg6yk2DnV84HuDWdHgNjLgWTgxmPgULPVqmJUEhtzZDR6avwP6Q4mRhko3Bzj",
  "key12": "3DHfp3iU3mwH2mwcvAaV1wQpjYjBK4KNHcd6yoJqMUjqHyiEdfJrRDu9avDF8aWEFd5pDUncmGWVFUWYU1T3UmEd",
  "key13": "4qChUeToKjGDP6B2sBnw6yLwS5kzWGc7HUzLXPCautj514fb1oUC2ivjpZVWQTAnesJexTpVT75Gm7W919dKvN7z",
  "key14": "dD4R5WDaRpBfe1CnUH5qeoHh1U2pnRTLYWenD2E58bnrEQfgAiEfVgSDgdCipHDY31wezhQfc9Tyi1C7xaTV13g",
  "key15": "KcMqn2mAcPot3E9QcKvKgXeusrvQWsdz6Mn1NNH9YnfprVAu4b74rsw7pLHtD2AW9tDgkb2bM1m5HuFF4uYTbN1",
  "key16": "4Ay4MsYXSWpPAUaJUpgftRNVoNxgPHiP2fXPcJbWBy9yjkWyXbXs8oLg4jhoUP6nRpRxpVvMiSfYGjoVsxHrjxog",
  "key17": "4oehNQvvJsUh1xZXWY4ujyMAWAPogmW33fc7mLNvocwwY21tZjKMPQmm2bEXJwDTdgaVnT64e5zRPHHtkWYdEjWR",
  "key18": "5uBqhhWXxKjgqoRyvKTHjJXphqTHXtvu9m9va3HTjohUBToxhZXvdHLBZ8NYVYbKJwCr91Pk2DjtR1WaGjRVWjLD",
  "key19": "4RepJVovvZHoaMTqthX7bdzKxDsK9xz1VAEpE4ENT8MEM5EeEvYfWeeANVoaNCoHxtQJjrjjS7U43Fig4qwdKMYB",
  "key20": "3Dfq4BdJwbonarfM8oBfHcgyiHh7VfppS1h42ZJ7yfRXCCdEiL4c4zRTspJr2vqxJCfeMwb69GPgSRN7fePimu9f",
  "key21": "4GD3SVt5W3BYbnDaVozFhLc8hSAqe9cstxqj9EsJt4reAdXj688DayAEzMN1aeevBX7hXDmrhX8zzLUyXizNvEtV",
  "key22": "3dmTaCs6gme5aqTRP9sGHqewYREakRvDDusbeuYvEKEbZFM29JHqx8y7k4nRymYxZwEoxFZ3UPPabp9CHCzikXAB",
  "key23": "2XbFvUk3TmfZN5YCjYbSjFvZPhgGC2FEPZqSK4LniKvaiEAdeg7MxS7RognRXqiS6YkxyssNzcNxZkB3sAF2HzGJ",
  "key24": "54kCCKGxBhEQtjzMiQi9RvRjw5AxXWQPEfEdiVTUUFtUfuFvG3GKgJWtok68HnFZ3pYsF6C1baBQpLsYcBi5dbk3",
  "key25": "3R3Dv52VshvQtH3G2kD8VWkmbtKqKB1JfsLwr57LSFaLjcLzBpRHMapGjah5d8U8DrCL5dzMub2CKcpXJx77ZeAE",
  "key26": "5fMC6iqtjY4a7hLrbxMFMf1hKFw8seLprMcdqS6rBHCcg2jkka2wzAhbXqXaZ7N6DdpiR7Kw3yYGg6qjDmifYmmH",
  "key27": "4qZuun461AvKtxFi6VHe3GSyzvHA2tzKhgA25J53vHivHfwPjtjUmi33Woajo6UrSngnS36HS4ZCG83yGPnMQeM3",
  "key28": "4ZHe1Uw2nRTrLeBUdtYr9BX3nFWHY8Ti5kzhKRqB33ihv69pJYAxxTcwy26T5h3kbhA3forKw7vzFyMaaxD2jf61",
  "key29": "5YrczLXuKeKdUztq7rxseiMCx3aUfWpLziQ9RKfbcrmS5aS9STRHzWTHiev8rHwMkD7xASt1FViHYQe91BEh2USR",
  "key30": "4iSfWePiBhDM97g6tKy3fEKWnGbzcqdn3uWCRNMwgF7e9JgfJM5oTWyhdxBsx1GWgXTxyYKVFKsESSQcttSjbKrq",
  "key31": "4V7GR78q4sSTcCHsJFsftgBmzTzDzoywtAmEMctw55BSCV1oMinTE8zSKh35VLYc8HCWp8FAksZS6QWwdQb8eFzV",
  "key32": "5VuCd63kPUcHf356yV1bAbKQQG1F9shGXY4maSqfp79m3efUpe5t1FDRPMUMhDAQoJcEiJkR4rtEANnMM97EhtvQ",
  "key33": "5CDxy58o4qmb3fTd7c8boMoUZf1UgZt9Rq1gneLZ7it7fUuCbLCKbfo7sVTcBNoM1a5g8ArPW3BEJeY3fGBjkiaB",
  "key34": "5rxDBoAukEhAqS75VaRdQ1WBS7ytQFUfb9EG7gxc921WPt759e5XxbqFzfPd7gZt7SPdY8XwkEQ1dBEDTYaEkRqN"
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
