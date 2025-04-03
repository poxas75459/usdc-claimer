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
    "h2RQCeaXQ1YMAXuUxFHSwvS7VA4FJGsD1bqZkHijzmAaKFxxQ91CWqRQVQf8V2oxc9h3AKUFH6HzikhYUYaeFig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCutVc5QzhuVqV5m6LnpfuYazcuTCcMX1KzoraPYT5PPt2RbZsmV9MrCTRdM81GdHVPB9WLFxuBHvg1sV3NDjXz",
  "key1": "4iReufJitE9qyWGQd4un7rPstrzCFcfgfWgoNxEudqniVeLFTcs8PiE9udv3n3KVbbnN99hUY7j8LFj6L5RQsui2",
  "key2": "4AdTN2wXMea4MEHdz9nF3FATTbokwdsniLKVKxPbaWRRT3yxmTAnubddSw5Jy6t2GY3PDm6EeTw4VfUNDuWBipc1",
  "key3": "4Wu7Yi6gaE6hJEyF415AJQWFuSqDxRwiwfdLCxgSxaxaDoEiyR1Yafpkxofm4QzRtpUYNKPaZsKBzTW6ooCm88KH",
  "key4": "4ohWGQ96ounGfBy8fwNQmPZ58nNRUsdvZfbzXjRmpxTaxQnoZ16SeMopZp8ikeRwKfWFyZp6tu1JfpWxWDk9N7Di",
  "key5": "62upkiByAqDYySW4sqgd9MV6pEisnerwspsQjxtYfVa4JThQATSdZoqYkXNQ9xCPCkPQJTm2Nv2p1amgsRctTKNZ",
  "key6": "v3erbPHcJ22nazLGHi6DGmjRQfXA7LrsExDGCDNNFc37ok9rViCng7appzNj7uxEbq2xcdRo3pBxMtARtyr1SZQ",
  "key7": "5QyvwuqqATWchG6kyLKPrTqQsqb1DHuHXsCkWD1bMovesEWH8BZHWyuD735GSdJWMDT7gqVoMh4AaPymKKzVeV3Q",
  "key8": "4gV6jpdnjZUbvybo3Bor3hor19sTpw5Yx8rNTkrPMbVQHbsBK8CiTi3fFHH6kAjs9bW6juwNg1cvuKgUpQJZnNYe",
  "key9": "5ZHYzuDHzF1TgqoXNRtcU6vmy5KtV3dwN9jhruCtYrXuwpAjKXKrtGb78RPnZBqrkBxbsuZSdZ4w7zmZ4YuLaQDa",
  "key10": "3Z4Hitktkv1MKVfmxihzEhXJ7wpbwePQsiqw4SjTbKtXrnRw8m5YcKHuMnhMca1AA76WNjdmsHLh1ahb9RR3s57e",
  "key11": "4r9Sm7bWx52cmVDuUMTVWmZARBVsVp8dAoab8MupGoPydMHsgxpMSM4c9HU3YZCLvSymiPYVTRzzpYBZvihdgeKn",
  "key12": "2e178BWboNBAK8stGM6UUTCQ6ukKpc5cfXvg7gLreZhq1G4MtMnzMcCCVpkP7qAgj5nB95kimw9u42jjMJZ4HzjC",
  "key13": "2L6ciCY2yAALWUTBYXvsEm2vpDE1hK4z1cK4sTGb5GH6TMEbjPvxpZuQtMqAoG1VzhkEEYAPTyLEXdVKGsHk9qSS",
  "key14": "5iUnBAQ4UAjbdVAyrf4ihNWvkV7za57Wwhy35XtTpQA6jh1Xv6Qv9E46iYRT5qpH3atKho1aQbAUk88QG2nCC8FQ",
  "key15": "3eTjJLkKchqTmVqcn2oaMTB2V7jMWqmrf94EHzjuuQAu89HWeqys7piAeGfgxGRmnaG4mzuqeBFMcLVdEKaAS8JU",
  "key16": "2nETZCUcQCnE64xoF4X5HEmWQryeLGPSP1tzSZxpDzRLqggQS6iR3vDjZhA8VeCnYWavYRcjY3NqnagHSUtJ4Jhh",
  "key17": "2A6KCBiSQxCaiH7SQbqUUbqFJmUX7KFSkdWjZXggpDFKDRqTpWgfBQG8TCSKEPNXhaXjvUwpw8inxXEMg7YxbzVr",
  "key18": "2LARz4TvUtZRYqkA3x62m1H4DpZALekLx8aUX5xo7rE68A5MEBWhcGBBJWr56voR37UJpnmgQpHX2wjCGqPeRSBg",
  "key19": "4HQQ12RiSeUcym5jTfM1YEJ9apfUBdyiHHaXTUEmJ4xc13QZHmqrssFJj6aVppj9SSR8iBRm4qiJ6aZ2JaqeuAka",
  "key20": "5rkPPWw3BKedD1oCeAs1kbNrBaosALB8PiK6ACY79uzkHx4VFWTya15QcJnBFaRMGtBLYuTwsdLdFARHt6m8V9kf",
  "key21": "MYjQ29RDiiyhVuvUEaLUsM6WVwgGjksYvxWipiDHHfmqti5fFsEP1PTcnpW9mQkZPTVVKy3SgSph92jLgA23XKd",
  "key22": "tdKzQDjvTYtsJKLCYqdfxdsgFxiy4MC9HwNDbbvvQk1UTTeJ8ariMtUZjksUUj4vRMo5cj2iX9fkfmC4UfyJEyc",
  "key23": "3jroEPzxJeZx8zPHFZfEEUmjUne8GzdoeZqPhy2JKRFmLv2bansQYsjLUKNLAAHgzQk2Bknz2BmqBX9susD83WeY",
  "key24": "aKHDTtCqpMS1ngSGYBjRHprQJrYmzLxrPd1CY9zvSRtFDwwMqqitpaZw6fraGWwJ7xRyxagQ8ySntKEGPhMym5w",
  "key25": "5X8Tm8NFCgeKkkxpzf11KHkQdFYBJmAVTqR5DFtdadXnL8XmgkbpjjSJJrLfnTtCxVgLAav2EGLxFVgbHZSRY8F1",
  "key26": "4qrCBSM22qNaNgwHCieCMW9hTewS9beYpYcN2cKhCusUCP43Phbjg1TUMWybuoVWnoVCLQL9r1GzK8Kkpj3YoUwJ",
  "key27": "672zjcaa35fBbwS7n3jZtwvr3wqtK6nuTRQLP82URoQjEgkxxnRAdyMomsSarGEt3d2RQzLZwP5isdhCcwMSCKbu",
  "key28": "5QwQoqp8hZkrN4jc1CiBXKaH3gbu34Fa19yNCNfAS7GSeYFzU6voqeGE1vDQFfc7yMDC6yAAnzzPAV2wABwoD3pr",
  "key29": "5fcmznUCBbzMoXH79qJNCFXoSK4MrxFJbbAMEHZzhLuvRzFBo6BMn4qc5N437LUjTPBPoNYF8jQiwuuwGzRJvdvU",
  "key30": "8v8KhSPCZBjsJVUMaEiDT3sr2acjY1KDEvohzdj9dRBTHQzobCmRnaJpasCbsGgJFHj2BXggrMEcfaJPz924m6q",
  "key31": "3BWv1AEk5NiXVwzqbEw4NsVZzmD6cLHWxwGaxvBLTWXHoemAFBgk5NgGjqSK64CEBT3NBDE4cdLmcC5EbXio3nL6",
  "key32": "5gSaKMaz3BPncKp9ybdzfCUSSRbr23T5dEnv8Kd3icLN6HX2m49TKEp6gkW8CsbyU1mt8WMsGf97NT6tbRfvFeoR",
  "key33": "3FRa2R1MvTVUjDeqJhRA8kf9RYr7fLmoQMLDPf6E29beiR6Gx5V2hmr2uJTzqwtuySw2WaoLPBUEuD3hrQBMb4zq",
  "key34": "29cUHVHri2ffGVHp8ZjzhkKHng2F764HQaLJ3dRkmWWDTUyHshZ9Vi7LUQt265VkY8k7wYg3aF2SjeawWczj3jnU",
  "key35": "5BcuvqBRtMVcVAYRE5P5jCe2cM48njReYaiNzLb4sQ1qrN4ftUDsUdxVNghiK4ZQHtAASsBhhdqY2cXvSLddvFWv",
  "key36": "5GeeRcnPzG7brMayHYpJnZsvb87nsuWM44yRptaMZYiiBVEcJApLar45bcBMdk4t6sZUoRHqYu4U947nrMjMuU8L",
  "key37": "2WG4ufCaC6Xk9XmivB9t1BAJsGdoALPmBL3y1Zi9s7RJipuaLZ9R4xJ4sVSJCFnfNKFa9fsKRBHvyyX6gPmuEq4S",
  "key38": "h1nkJfUaAqEAL7n6uqw9bRpGgJx4goyzhAiJ9NpzheQtkNtZCquCXyGeBXot4Da1v3XGzyRfRFHcZcoiFszMPC7",
  "key39": "4JPy3hvPKGN4XAxzk54SKvW3Vpsv8b3ryoMiQfM9bHdJ2yJu2cC6ad5h3tSYjHt7AzbDwCXEeH9abfLn441XCppX",
  "key40": "4H6a2AGvvV64pSrtZ8cuYAQkD6twr4e1tw6Vwmgz3R1RitV6AA4YBzd71weDVhNCKMEv1baWJE7VQkBRgLqTLP36",
  "key41": "3EQWJzwG2sgs5ZZEn68Csz88nPQUEuAYnZGiiL1KBz991zWLtHavj52jVBmUv1jo8vhWuxktxg5vr2A97QAD12oS"
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
