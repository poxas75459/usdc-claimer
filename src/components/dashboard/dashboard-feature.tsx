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
    "21uPTTsvWC8fZVQDzq5oF7g4tNRHRjt32SNBUnx1nmb3Wae5T3ow84qUJcGAzhEfwQWNCHoasP8ieT86rdpHsSHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hofzguXvheL4AHfdvNfmV2fCkBSEPDPJrWKmfPWdho9xZWMTew3bD2uHrDJ6jH4N6Zwh7j3X4kAEDb8wgdJwB7f",
  "key1": "4mT7ttCzUKbYz8oWg6LxKBpMDreBvJFPD1qyyPBqPXbLsU4pQy9SsujxoPdyhMthwNvPXuyTai6ekMLuzyPowuww",
  "key2": "4ACxPP5pHeYKk1jiutiicV6yckoRuAV9kZRNgu7635hFF5b3L6Fkr6xb9C27asJvhzXaaumCzynAJG65BSADtXUt",
  "key3": "2itM1zRiCU6TwD59bkvfRj9nbYjco9CgVdhJDH3ipX5KeFRyy9eKHeNgV2Csm3eGtnkMpV9s77JpkVhMxjDodoJt",
  "key4": "isteQoQSJG7Y2jkvwveWpsaQHSQeX2pWVggL5YRqicKQMyamqBZYNKBuVngHZvGinS7xkoLNNhDUc6SXRKYQySw",
  "key5": "5emqnTcgx8Ev53vC3PJUsek8B9tCMkPzTvXamgtuhDAin9m2DQjcbF5Whcmfo1vszkY5vCyVjwb81cWBAT9i65DY",
  "key6": "2UiTXC6qwy4YUnSwhD3ttmZYG8vPsG6uB5dPSWgjr5aPhksfpkqi64nDtUY59QRwA95QA2fG4tdfyDs5HMj4ah2n",
  "key7": "4nBRCkGSyQ1CBTw5MbsehezwEPq7TTTrh9BQbhG8EkWHhk73ymW5zUDz7E9c97YsMoykdQ9TspqVSrKG2GQgJcLV",
  "key8": "3G4nr3K7jVhfpXgDBXCRr6kN4gAyGzb4E1pjmLW7STvEEjTAs4wAfAwBuWJZBNDcN6ZnyvyiMGfZpmdxPG9snFAK",
  "key9": "BpJV87Zkw4eNGkC2RRQUe7C6j4ZikqtLt1EeT7q8ecJA5CgqQiNxSXjn731hMr2DRE1iwVUHW8JdLJRmGrhevV2",
  "key10": "GD48ZRRxGGs5uJgFhLM7V1aqV4VWujcXKJ8AUjTznC42vF2a351isDqg8ReodxsLoiWjNwZbfFALDLEyMERyZ56",
  "key11": "3PhrAupKAEqgLWTVP7UNR7y7ZaXiV4PV4YPEbPw3iEL63ZsEs32T7UWvKUTvinxscYCTG5XHYMQryMPdbY47q2wE",
  "key12": "2zbi5jeZCQk6FkWnexgHeyGCoLMx5WmvxrVWnSPvpUvXT6LsyuKDC9ALqtdku9X6WgnjePyWo8FFZN2JKjJ6Mw6z",
  "key13": "5rdFoTEaeCAtQVYcsz2ceQ8rSJUvwgAAkgSy7LTGCYqzpUoeJxaREXHdEUtLgJrHfu8kwusG3HdWdvebqWWgiJ46",
  "key14": "66P9dpS6cFkkwUo3QPjo75Pc61eivwBco7SVz73Lc3EmD7KZg8wJcXiTUffZ7R3MvT56RkPpacosVdPx76TeDCFk",
  "key15": "3UKJsHksNHxYkPnQdkoozuBnj8c9CRtdsjdByzn2ysPsKbKBrc9HDmZMgnDnTFJu1DKnWT625Rzw8VWwXSgWUaUA",
  "key16": "ar9qGhiaYimZLqbXGpsXuJbbmEKad8BAemXhQU9nY4W1wpLKme5cZzPQj2e4eJEzPmbYDCsUKNF1EoGELGndtZx",
  "key17": "23zBpjpgJjWu9NGog7kzGM29UK4z7zvPaak6vS8tVYukrEx7aYcYSNMpCxtMM8XhanbkaEhDQZZoFc5WtgXGPvuy",
  "key18": "rNuwMi7THdCWddNFQDZ7jCwW9Zi9feb2TWvJYiXyUN71WDNEFdbqoEJtANhn5nfErM5djoe2Unaozm69ZwSZnu9",
  "key19": "6LpgkgUzRPad4CBcBWy6VJAFPtQhoZYCRoA3govTGkDAYphr5JbsLv4L4tTBLzkr7QZLKJfcJAKnGw4ywFiaapR",
  "key20": "2R8zeRpYRiUy5rSP5oSHib24endDk1byw5uBUTpXhpgo8LZN4g8KnpfMWb7hiSfCBbZXMAXD2cEDJNh7XiWRbwD8",
  "key21": "614FM1Fh34cAShifF5G4H3k3XwjeuEo8MYYWhkL6kdFohoHtKWBjmGmBF8QxTdrsZiaJa1CuMTfqEyZ6cqiX19Y8",
  "key22": "4JneYoVrJguzpau1YhwjXrVft8nALcbq9M352cavDAKaTmnitNwSVK6dvMT5ZtCansTfyrVdDrUQ6FnbYwPaEMBQ",
  "key23": "CtHi729qnFZ9pu2p9izTEgPek4bo6AGr9Tr1C8br8Bed4dNvFNUfv3dcXYdzwWRERVkRdoHWfscXg8rXBnucoAi",
  "key24": "4BN2EijRTFB2WQpjnwxHUxNCM1Y7sx9qF3vJ89WwFeGWrqnZ5Uh53KoxWePwFD9LtWmGzLX3dHQWERsCxuAmvJHK",
  "key25": "5mj3PaZUA86eCaMHbwHhuWzn3kef5inVxFxeUf5LPm54v3WnZ5rK9nfimruAct5dkothYNsM2Sn57xCPFUrBZDoT",
  "key26": "VXBuq2Ebn8GMJ1F6p6hvUTmQXR5Jr3CyiYZkw1c7AzgQUXVrrbywpHSm2JMKR98kNuVQesX48QkjrWzeeReYGgH",
  "key27": "4AZpYdMon3PD5xSYEYLdZv8zRA1G3oDXndRAK8girccnuq6qVNHKeG8gNS7eMPSbaghRsWz1vVFTvHNcshnYYPrA"
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
