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
    "hFUawCPCoaXkuzZQYRGD8b8q9wK1T2H4UpMEkKAsv6j16r5moUuuvWWTjFa89E3rPnUE1iUafCVmYLeuEueSKQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YycaLZtfKBDCcTQozNDvskPSxMXmo5kFECSTwqJZ2wSXqDguFqUX45R1g33ADvxhD9ES4vdrjpejCMb9FfuBnTj",
  "key1": "64dcart8BH9LdeMVhBUZmKkVmf5ARRfn2vTBHnSMNNw3FBuY2PFRNkuZ74NKZT4qTzZFiet49HgaEDxVbkEZSGXy",
  "key2": "3Ac4D8wjtKrhe6hRn2u3ybLsZffn3UmegJnCV6p1vYUim1aGnCXsuVUqLErXu5HgnwJ7bvU8K3K8Fmp2jvFNh8Bi",
  "key3": "5R33c9Sc9MoTJGFq3uSBPDK45Unysn5vF1oR1X2RofjzR2XBqjoQtDfrnvKBtYkvyQFGnKujP4GgiwjBxreMwBtQ",
  "key4": "4JyBgmcGGuVdTuS2V3CHYicAqKRuLAxtcjmj5tzYzMNSKyaUMddp8xzngxq8knaTXstUEoHvZA7k5fERUhsMgdm8",
  "key5": "36BxHafCtaHGELpHAsJWAeskyLJ4Mb1QEWagFMDZJHvrdB8xNq6ELBbLSJYJCjhoWMa8cfqBcxLu3XjS5scsp5LJ",
  "key6": "2LAFzxq6qHjSvw12L9aJ4REY7SMpAMaPeqRNJtYst4iaTdzDW97ga7u99grAjuhDq4JsdjLZNXkm7iySNBuCHoJt",
  "key7": "2YMR6qy3KUH6auZvaHQf5wSvQ9iKXiFPRuwE6tvvMvSY5pNsaJiyWpYRpnfnPiUY9WHYXc1WZi3v6Vt7YqwZVjKV",
  "key8": "3UCj4oMAFk2kf21chMDoH4Z2RY26J12V3xLi8qzNen1hgx3JowHQJTA8N4B2NJN3WkJfZTNDg4frkb3AWPVTEpP1",
  "key9": "vuRiUpcWCeMudvMRwMJ2QGM99E8QKp47crSG6s2sCVD4cru4AxezheBeChgv6U2rDMrZziw68egjg37CRFTNJsx",
  "key10": "4fBgDbjGWK4AiKY5uceGe6vgQj3mchtrLHiRq9LdtdZwomTenxsfH6GEArgKsZAkW1iBSxvETXVjHgoZSeCE5pws",
  "key11": "447owmGe2uByVUMpBt4fg7R55FczLWV3ND8cM8uYuKowZ42qHr9txahDY2kEG3pwhVSFWNsJKPtsVkyU9hiZ1hes",
  "key12": "4T2EsEeFsVJxsyMais9dW1mY7CA4ASuFpbouzew7ebEyEUhczG14eZWXFa5Gyvsn87LvUKJYXWm9a4DnPd3TPE5J",
  "key13": "NxMHD7ewc1i9Rr9ChawsFdpyEJUeFM9JiwReCRHN5sfD8tafvcaVt5KGcnsi8gKQq7ppbuKZvcYUC7H52f8FXh2",
  "key14": "28M8L9H8wsPE2mZnUy8kUuDcn3YH8ydofK1Grzvwujnz34UgdBQpLAxURDBjaBLURx5RD7SYEn1o2VfoCnehB79a",
  "key15": "49PSqt1J8ESMfEbKjtZ7xFZeNCmKemHS3eMnvpmGeTghzM2Kkgzbe9wfQScbUDYH18YvMUrRqJtLEJhPNZXWJ7Cm",
  "key16": "5CFu7gdECyHLUqcWEvxB3gYzdv5xPtZydbR4rdAUsurMMbG4eitkqPpUTRFJGWADtyZRFtHy1vD5v7pbQd7DtC2e",
  "key17": "2WevGyvu3t7xY62wKZX7CGLcGj5DzzkNd8q8oxBZBYVNdaB9Z9zzhYbppZNVsFDqPLzRuhhPnkdx7MZwohSEpc5q",
  "key18": "4LTBo7de4ozUxppGTVojJ2WBasajMDL12mou9jR36ci1fQ4SHqJSCJTNwAzmH3HpUQSarg2PK1G1uLLtKeetKMc2",
  "key19": "3SbgF58NGh4iayUCeVvkt355LvpFPK3LcRfrKJnWnNaYoGWftxVQZb6HwuR7VRyvry2w419mQSxKGcgq1gtd7tFV",
  "key20": "65vXP2g6LuM1bD7rSrYQNpz8YxUpdfVQuNMCrbzkS1tinob9p4KTTNBJW4RHLLpTxczXdJ2Yu5vCzUvX5QkLUp8U",
  "key21": "4FjTLbpLC2VJiomv5FFZtDyDZ8wHwHieTHRgpnGwKDa1LdnnmfeDHRraLmtKaJaaaVaDS5kQyrqzu81g6UoDCRiZ",
  "key22": "y2VXf7DJHf2cYVY7Tj9DCUS5sTpjJmbjkBM9t5sGADL6RF5dMsSEyHNzsU4uEiHTvXmxFP47Sv64CB7yXHnWa7f",
  "key23": "54WWGtSYSM4EZZhEUYPtwv5nMBJ3Z34Rv7GmwkxrpVxiMPEFP21Fa98RPb4zMgWRWEXZHanU2vMztXzGNvQBVZJT",
  "key24": "3Uyt6wQWrU6biX8EW81pem693Hn9oAyfBPmsyuFwpzWZSJMrBqhrHSvYC8iS5g8BRYdNfz5N1Keadi5FGaXtz6Mo",
  "key25": "yNvVqdQrLQWv9J4PXUCdYit8BnEpjatHwRkZNMxSJmcGcKYFMozKdnyCMXQRJNicK1d4jkHQPimpGcdbigsL7Jo",
  "key26": "4kyruR96mVcXioHS3zbS9YTDd9Hf68HhTJMSMfEHn7GbMGq9kgekybVfKWW9WhYSfWvqxd4tyaEEEeL43LLKjLKt",
  "key27": "S1F2BAtY1BB6vy4FxGcGGh8ruxyn5KE2FGFoqT1N86T2DwpVCVrt5unnpMZLFnCYWC3yHhwL5YLJ1KZWKEYHf9s",
  "key28": "3a6V6FE3JyMQeQVAQ4yGwHBP8eCj8i2pdPBsPY4W51bi5UzTycYZhYm37aHLn4EG2SpJYondvBbhEtHF8kt7bzCZ",
  "key29": "5FrC9WXcuNnZzcdtcHw9GMTagCMCiJBg5nhJBT7y11TWaZaoDN3LWnfbtKM7WS2HT4BRaH3MEe5GRkADin1WQ4pP",
  "key30": "2CCW7whi3jonJq41FGJ15EzmXdEE8Mzv6LzxGfcANwL4ZniWSMNWgtgfMm7Et8S5jAAvNfxo3fqpTzMh6U9xGkTD"
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
