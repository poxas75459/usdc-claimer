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
    "3itWZMrVZLB9Qh4aXHxrhYzg6zdEuBZPEqgcgsdGaunSjUYJi5sub3pzi2BVmiRkuUMKBc9JZHHtSScFtzJPHmzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxaWWamfgtArN4dKmPRfhTcU2kNPgmhPPfvtKH24g8d5aCoqUAunMLzMFqWxHqMN5wG9UF8QTo1q8JmtEdNLLer",
  "key1": "5gFZjqVY6FZQraoPrnKwBkEejwxY5yxjCCDqzziPgPXryqAwZ4ZDrCscVWgbnXK9cTHGSoebpc7o9NBATz9SSASH",
  "key2": "2Sr6QF8RhdxxtZgGfAxqPK9t52XCkiY3ZMVsk93bwVSsL2ouJvPJ9PtvhyAQw9e9VbG2kySHjPqJP6Yf6wQQthZ5",
  "key3": "4itDbrxf44CFdyBJsAYrTt6RiiNaAjccRFR5PAWPSrXn1qSeN84L65W2sPNtXAKnyJB89ApJj9YjTA9Ab9UEyKDr",
  "key4": "39T3gEatHDmWWqB7MDTSz4H77B7DkX1TP5nV71aeYq4G7DP8P5W85sHigqpQVeje4Z212tu1hQ9ATQ67HawNwgPi",
  "key5": "5XbUKaY12Wuei68p1rLrrawR3gi58XUgVtzg2prnjZUGTHhs2kNm2jw6U8GdaRgwsXotEepesuN8kxCmn7CQVdgY",
  "key6": "2F9ngnEVYcF9rPSsEEbVkrihnsGWFADes8ZbTvwSbvJshBMpQFTnnDgXQM7kdj4wp5EtfcNpYVeT2d2tgyNEU8r3",
  "key7": "5NvMJoKsjy2gBXaEdqQieLE2Hys4nFa8U4QcUxRWsvyCTLf65rT3it7namxUP8c2ETk5aeRoAUYQ6W8WqY4MSK9k",
  "key8": "38if5BLNTUpWm4p7tkbFdSz8QhMbf5U4zB8eXQjKyDdS4Z6zpXPmrWfvd6DCQLnji4Sbyi2DoBqp5gDov3uAV4AP",
  "key9": "5FYXVno4ypr8w9SYbKRHJ52VGW4Rt3zwEnShGSLqS7sMVj5aSuTmV6qCWGXFb49oBSSc6jEDwbqeZgRE8FxpQMT2",
  "key10": "4cHRkXYvfmLbJf1j4GY9omyUqtQGjfxqcqnLx3E65yaxW9B9adLaBHtNqzpYFXmQrJtSYTpxCmoPF1RjtmHpaCsZ",
  "key11": "64RvY3XazoELMYUAgD9z2uL4ZTz5RYqBUi1hxdBHnfnnjNpea3JSSgsSp5nwgjdkB6Sd9wCMMV43Wqdi7DN4bLzA",
  "key12": "4sfpfTWz75PELLiLZW3rHtyKR1czY4u3PRZ8cjGSzX1FFHgaHksg4QakWAZNxXDKNB4dHQZ59GGaaDicCztdYikz",
  "key13": "zzLMhhhZ7yjq2T4rrvcDgwxA5XCEUuPtQ5eFTZYsyXT2y5ZXzHsuRvg2tPXq7daHQ5UQU14XbmR4SJ6GCdQePQd",
  "key14": "s6it6zrjtxPcd5hNLuKYg7vCZhnwRfGnK6aH8rPuh6Vhx1p1ZyvoS1BhpANPjiTT8K3HnU59AKBYDobyVnk8Cei",
  "key15": "5VQZZwgCZktwEzE2yvVuDUEjmqQ7kLN2x771DtUyvX582nSM3oUZrZCrxDcMvJPK1Qu97H88mkJx2aqg8Zg5Z4Ui",
  "key16": "2QJ3LuB6wVrNmjcj9LWmirFTLYRrKBKzJ5UVeS9RMjFbuowHKMQDvfiXaArX6pm2QLxNeu4aXGvcmNXaZ33G7XYT",
  "key17": "37grHivWsndUFdfaLXHDomhaccNng1LJVcv6c3hacTHPVQZBw2xq4Bu7ZdZuPqtSjs9gWmUtrjq6HYCyX6SvkS9i",
  "key18": "2WEsxPhhbfexEMiAxDnoXHwgETGbHaGEjZefWBijSZAgruLDAfWy6k7ieTLBrLr1cuykDYS1GCfxCRMNrErwaM22",
  "key19": "Rbg7xiejnRwnMCuxgngLg2kPJ1hPdCk2fStDAFpmd9aitSpttv68NvHWWfo1PvvuGt3SDz3tcvjDK7VedwDdMoo",
  "key20": "4Vt1a3z9WJCDFBGY3fawC5dTc7ePU3MayZtq9GdqCcKzdfXmC1C4hatdH4gb2xMQsZJDiptUi8ypSfuQaoeRSfyy",
  "key21": "3GzvnXTp4ugCEibKM6D4gMzRK3RrznymN5gv5Vyc7yLSeMnmhxRqVtJkyVXyji9HPJ18FKzbp5EmXA3trMBuXahM",
  "key22": "3Qh7ADR1u48MmYn1XBxH6R5a4PXta6GLi25zkw1irhZVNaFfZ9Gruknhux3MLouRNscbqUKPG4gA91MjzZkqV4Jg",
  "key23": "2qjMkHKtEEZ98rHrNtojBjG5dWB72TveECuCYNBBjgPtuKNKxDSUgf34XtS5DPNmTqFDC4z3yciHAjQ8DCSnwS7e",
  "key24": "4c2C1KL5ZUBWcNfSe1aMFdL2xFycVUsUHS39WfaKR4ep2GYEmPtMFCrDVq76gwda3pfjQRhUjJFu2d1F5n3sQ6y5",
  "key25": "2Er9rTAQe8EWi3sZgCZc8Pg7SXgHREk9ocbLsuvLtaPxy6CX51pmMFZB3tFbyEd5umjaTaCNS6Vqwy9rt1WiyCbA",
  "key26": "4uSyAo4p3fMcmLMCVGhR7xTRyoVRTwi4XVpJw8tbv1oHCirVZvLC37NLAos539cnDQJAJxsMoLkMuajrcKDWvnc4",
  "key27": "3KgE8vZMFVB13bNoevtT2r4giY3Rcf6wyjEL8H1KevvDf2bnTGEBMJHSRsSw59bQsPsNtrUDm325SGC6J3587my3",
  "key28": "ZSSTahx4mHffshoNNyZsWXLhHR2v85GPJuCZf2G8qNivrJ5bharVfhYkRwDAbBg1gWPqjmnAhDe8DfzUUd2Hit2",
  "key29": "39YpJinbxMeySpdodJmKfkkeFwgYkYeQznn7x16XJwmBqQQuxWrTrcBwfssT6LTN3mmMjw2nLqHbj261FivPHPku",
  "key30": "31PVgsGW1tdnusyPq9wF6zzbH9vGn8Yjp88UUiV34orHzD5aMF7NuHX4t3J4ycUq7gRzg9vXazBKQxg8ZGQKFouZ",
  "key31": "myQxMuSrbsTMd6ZwfUXr9ysJEXk5DTM3Znb87guDFp7tu33oyXC4WADAePBkL7NQdqrHvfRZXosxHBPaW5EhJfC"
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
