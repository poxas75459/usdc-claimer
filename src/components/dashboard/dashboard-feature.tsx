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
    "4nYyrRUiE4QGRvTQikg7UfhyntRPaK9NJbNd8oam5CEekSPZbjWYhwi5PuX8oTQ2kqVeSTpckjJACtCmfVZz4VfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xXZF4CLrDz7Woft22q6DEdvoDXDykyN2y3AKgyBETF6wXMfToaN2xCztV88zBoqkqDJdYqN5nEx136LuC1oar8e",
  "key1": "62nWLhuhNesbWyA4F2bc98iS2zuZaPiiAniG2nF59BhnTq5EZWHseLM4JeSYeCousw8Jw5VWbB3Vdj41tZme4rAQ",
  "key2": "25PFRQErC5aNiBFpvirBfuF5cPorerwYtSP8sSvm8hF3tqZVcqs5kCuv8u9KMvoFQQJ6zmKfSVNcCMKbGGi4zW5u",
  "key3": "3pKnKt1ZjewL7tMn24AHrKe1qiZtff5MoqpCfvgrLwkqkgQNbyR9bnaZtucbXwPP11qFPmrsnn45W6jqsTj7LHqC",
  "key4": "27GPyNmQmktK2szKVVB1Zvb2zfig88LRFbUrn6KQj4DfaMuAM9pomZCDrm3KewSeXLLnHctnz9vxg2ermQXh7PR1",
  "key5": "pgaCUo5AJX59XmehneJSXsiX1dMWBMGfKh1xv6dd9EvNmvQdVfvw5ahdtnwQzieHzHZqd3TVEijZEMk9zHBKAtv",
  "key6": "2YzE9tZnK3xJH6ZDtiaxU5eq9wjH27ngRHxenmExXst2bE1WR9iqGLY4PD24pSzGi8CX1XjX9VWbGnxirPRgEzbT",
  "key7": "2QujZ6PfjS4W5mSEX7oc1srx5pjw5hkiUPid8jPXozFGgufeNQczCxJdH9VBLNCLxBybTP1pPkUPkmtYMv8Lt8mg",
  "key8": "2zKXcnBoKacA97nm9eBmSX3LuXbpof31wGqSdrCHaDwZvSvhnzik7Us68WiicoMhTcy4Qp4F6DyiiW1qoFjMUp7J",
  "key9": "3UdH47x3nm6r36vSGaMFgAFBDoW2SQD9VPGJEL6TQfkojDxEY1y2iDCCFsm2fRWKD5yw7QAehrNARcMUx9rTxoxv",
  "key10": "5G2zJWJMS7DigHFK5jdwTiBQksj8gcYobfiBPhcpP1A66B75FY8q1CybfAUKLPeFrYmx2qYtpM3STDST9mANBqcF",
  "key11": "38iQqD5zZWhyCGHqP2rmGuK3kGJ9HurdZLL9ekhGw37zXCSmcrw4RZvDiqzniGJBHzzZrd3ayGfm18z8X5e17Qmq",
  "key12": "S9jPchdtwvguaTemVaonZboFZHQpkX1Rh7mGKGgsSAmswLjYQdcrgiu4kNvz5PJZahoeEBdV93wAbTGcoH7ayet",
  "key13": "49QVHGxW1uYYASMYTe9v9YNNaREqPdskBVeSmxHr7utuFVhS7YtJwCiALpisdEAGh79gjwxnaDBL1WFAgyu7WCzn",
  "key14": "2kjzNkHZT79QreGNArTU3UDAiAJFZycvZTJGU52sZYEwPyPoUYnm37A3Tmr7TcwQgmQW4k6pxgeaLWsZCU5UPdum",
  "key15": "hU9TURJbJN2hUh7RpV4PokHMZcAD8m6JmYwsQx1qwc1QdoLn3jNQRxydWHZAysS5QUsPRYQ8SVkYspUgyguNWBz",
  "key16": "31XjbibZbcXhBgk51AmHdHjs5o2y15NDfjzwFruDEKY5MnEDCDR27qs46ut9T2d5dU4EM1vqTi4tDknFqPVmgCsT",
  "key17": "5cbCadbELjZn5CYLXkeT8RXsSx8dJLCa2FELXmcwhsX6qY1DYVt4SEwDy5fx2gZwCVdGFWkCVF32dPL9LZWxhhHy",
  "key18": "44GoyRXpzsGamCT1EsZKqCMAkzYsm6qXHrAaEXQYPuk95bErs5Cby16YYknLmFYa1daf7zkVjesRrpSSoyn6kQ8k",
  "key19": "3VBXMQeBf8hErym9U2VoZiXVZ9QtM7ihdm73edoBZr8bg3BJgm4JZu9MCCky2PPnn6czFqv3ii5nPz5FPBnnTgPT",
  "key20": "3YbbQqn9fmj13k9UR6quhtLnxnnyTT56jVh2cF3c1uYHUjddTGiNwiR7Ncoj1EP9g4wTAqW9DpFYmyKNLXxYzJ6M",
  "key21": "KWGozXm7Kc8PSk2FhdSZcx4kk83GcbN4awPNuzix6ekJN9Tx3wFD7FLm3UiVHGgYkv3md2vB2P2CakvQqGTdx7B",
  "key22": "u3ehGY5dyLYLvkEgAuCW1ynJM4Ghs1EcMzjhKzM4BmLFmgtyw48McL72324U1npZKo6H8j1Qqk1XRscBpaAtbQK",
  "key23": "o5yjjHoenBfoift1v2HDSxEbYsqLLBmRR5RonRxac2MCUWCi9ENAA7MyCinApwjsLnvmu9oY2RN6mpzFRcQo2Dv",
  "key24": "2za1Nuc55tkY9M8rn9LYC6JLA8cFDznQHJSVbP3cuXesNW6dMMigXp7dspScKxELBgaBVdfzQDN6Qt31fBjbbKbe",
  "key25": "63ta4vL2bHGamoFNC75ePvKuJoQGwvbMH4Fqdn3hzmGrR8k1uCYFqAtNgP5FWHFeqyZ6XM5QAiSHTCGCeHPtYbAX",
  "key26": "63U3jCc4hpkCSwmyQhC55guNYZ9Qm7S53HZtmm7niygUzbBy7ZagEUw8H1RgfB9SXDpdizc9enxkTuth84QqGvL",
  "key27": "52UadPTuDxgoqWVkfL6Jq7TB7fwe6eY1eMwd76XTZrhhLcLfrMFSEcwWf3xNAjfmKaBVg5tP59U4m9fenxbk5DMm",
  "key28": "46aV3eiiFeFavmKCKRAaTT5n33hK22xqZRQnY7c4u3rsv8QpEaT4ZbfS96ZLmNMTq8BVyNSA5TUNnzH4SH8YnsRj",
  "key29": "5Tmn1YhMXDDzBUNTN5YiKzy6pmQgu4EpgwudA98PKesPWLmjq7L8JUTPGXfYrZpEzasLtNYxrynYfQQdgPk6SjBR"
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
