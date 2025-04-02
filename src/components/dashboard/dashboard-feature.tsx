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
    "4gDPSFKf3Hi6sGc7FT2837rfKVYBrtJsMG9GrKDuJZWVwcgTk2utqi4XR4HSjvBaEAxTcivbxfEGjv43LoAxGfqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4j84xDzLEssPwfYFd3M5jcWsMzeBh4QjjMsytvLzq9o7nW9LANnJPhVLaPAs3vcGKQyt5FfFKz1sKKHP1cMxQu",
  "key1": "Vcn4PXEK5t6hsu91CssiYm69U5fN24hE2sUXV1HyCbL1HwM1X4fGU4y4Y9RtmtKac6SMskKhsX22TwTH4XNb9W8",
  "key2": "jSZR75CR2Ltiwcj7u9CMc913D7BK3xGjQ2eJjANpYxWopv8puATMwCTaqJoC4Eo16GE3SWbgumNWE6GQCc7BqaS",
  "key3": "D59PFhkMYcGCm4B2pL3CvKtDzM2eu5WfpYDzNaGgAdZ2UeLKNnsxA4qGNiaTA8bHZhhsH7JX4cAtZNYPwhGXGfc",
  "key4": "2ktAZjeaeujE49nVnkYvYd4JWSdtbC5jYiRppnTavyret3Mynv8yW6RYYJGLdk9uB5W1MgHLjtGANeGfwZJJK7ka",
  "key5": "49vuZY2NkXzK3B5DcEhQEFS3JBqXTutVfHDidqJggVRF328yGk32rdJY3tqDT5EhRTCJj8GSA5yBC3ADLjhZsVD8",
  "key6": "mjnd854Y7cVCfSLrA5iZa4ayRiDCJQ1G6e6T3qDnxJH4Ba6Hk9VVY6EK7ryEcZTuueg45XBx9jdw11iCwasbKPF",
  "key7": "3otcMzprncGF8DzREf2u91ZGhvoprVNJKmELvuU9J2KQXMYLqC1T8XA7k2pZDnUxC9dukK8EAYkHtnaebMQpQYPg",
  "key8": "3WMQdLhqxDB46cAXUZZu7QX777ceEFeSo3nFFST7TStcJ9UeV6CKg7ruaoQ84kUP1o57utR1RhkjNmCKrXS1XYbJ",
  "key9": "27ijBAbR2poC14onRfbSWynVNmfypUgjvyaEh7KJMFybZ43PvaxxxpUoNUuvxnvfK21X1xMTedu9SDqhXCXHVM7J",
  "key10": "5nc6NNxkXMmjb8wAYC6gZ1chkRueh5ibWthmDRVFzGmVvK3XZTtoL4m4spR1g73YP1bBjVKGWyi6YvTy83wJexPE",
  "key11": "3RBJvBmixEgT8LeE39MM1aZrHc2T7U6uAxQagTwN15FPivEYd2XdhbT39kznK29SeZBwnuRFiXodPcsfdvwmi8vu",
  "key12": "2LEVUoyi2p7QQvc9h2opij9JmaSXqtWHTrodbicdZFFwZbnzp2CvQmB4S7vMZdCfbtZZdzXF2H1fepTdZtAKRSnH",
  "key13": "512bewJhJekyitanSqVeftygjwijj3cUzinieGYzRr6T3774CxBBv33tRMLXL7QzSPFieBn1pXXRnsPfM6n9cF28",
  "key14": "3suVVbVwTTXiiYex1vDMZVZRJ2toMcKZn1CP7ZvjBrXa8DLU48aXC7YNHahJsZUDRHMjDi54r9ozt8MsVZ4cTZbd",
  "key15": "53EQbG6oUTjhjUcPan4L2iFWBt6U1EXVVjVwFk2eg69V9pSyf814hkeKhZ646qgWLdjPuSeDjinZkP8SZzodYxFD",
  "key16": "5xAyvwF2VprMA7Wuuzng8tEvNUhRFxwfBmjYhGSwkSm5F6rXzWQVY876kWe4haKGwNpgGB3nU23sfyajSEtpkqJg",
  "key17": "3wLkD12orzazBKGSHvgW2uBrYcd8gjpN4dGL124mXf91zYVCXTuAdfVWbZK9gNE29hDL44oV8HZ2h7yPhTQLjFc1",
  "key18": "47kR18RGwh4DKcZ5vtA6Nyq4Qk13nNuu8MzHwq2QSBArd6AHL7r6MfuTcsBJXDizUn8nMDK86urdRsTYZ5uH42Qw",
  "key19": "4twf35ryh8xGk64dk4GfJM4y56TNpT3x8t4qYUUK3CXHLrUkP66TjeHTJ7QLpoMJvPm2g1Q7fpCKARneeq1a6u3t",
  "key20": "2KfHLAWqNK5u5ZPcdKFRwFBEBYagWYcXj2eRUoP7Ske1SoZ87JFQd291SkHS5MMhWnKHZgDoJZqgpcBquJ9PFg9R",
  "key21": "3w5C1nWs5b4ZNsa8RPthvZPWB8U2KLgEgHqDG8r3nn1JTDnMuJmXFRobzKiN6KVUmp7BaG4kpQnZgShzhcfwY3Fm",
  "key22": "rAYxV3kciJxXgPx9L6kRCjKj8wVxcV93rBVrdtfuanTX1JZBuGrAkaUKa8A6XwTZYcMvBNybzTkzeLYohdg6j7E",
  "key23": "2qUCMq4zkmk2uo98XXbFa22oZq3yk2hrG3GTSM8rzQSTkfS24PvfaUSUnRde8FDotoPiyrExEGSPKHbcLPnLkmPh",
  "key24": "5nSu18qGa53jx6pQcSB2RCyPVSpCQ998LbfmkP8KfdvbaybVPQk7ADCxfUnko1BeFfSLmKZ7SCbzrLwhfQNFJH3e",
  "key25": "3FYApK8cHNRAnypMXStbNSRuV187LK4GRPpeWXabDikS7Tiiwz3PNjryykJbRxvTowWBzR1W8SfkY8chk2KmTmNK",
  "key26": "bYkEiK3jjyhF9xX4UkvJSDyioCweTAu5CAdaAHHYNSjwpM6pSBKJXGNnfu89a3SR5RLcXDA1USFkAfHdwXNKvDj",
  "key27": "5PfES4pmurZzt36arji9SXh66jW16v6NrzdhMZ3RYh9VHuTgLnzHE66jdkKcHcMMMnyfLFoLXAwqXxrbzris5dYL",
  "key28": "cZXHKGtm8uotmZG7aYinpF1mTjJNKNwcrUkP88jp4GFUoFkPM6ED3rfpasW3R16wRVdhJ5Ptfv4f8MQNt2QhtvU",
  "key29": "5khMUF7qTWed8b6xoc8GAmBT6yQYu36G9CqZHuzmBtbiZr3aaFpTiUvqSDb6hP11r2J7j3LT47LSz94vDULmtpq2",
  "key30": "ZEA65RZrMghETxVSGZ3vhQtMHda7Lk8nx4k2wEnNm2aBLqTyuoR9HuRdHkGW2ZFQ3SBVzQhfrd4dNoyCWWemnJN",
  "key31": "57Kb44oNndfsd7nv8ExJCfGoj5ASrY7HtuZX3TfEFooxA9u2sfxsFdnEMDr6BtNhnpZzKe4hDhAm37dJRKZvThE4",
  "key32": "UkXdpHbghZx2vaMngzhYo3KdD4M9DN6AFmefGNDorWTUtcbcTwgvGb4UVLXFmvtJhTjcNFMJ5FFk9S1bGDQWb7A",
  "key33": "2XL1caP2S6DvciBmmrH7sbWo7KyNYbVR329xKBDmabMuJg4syJGYyHAgeCUnGH5QToosWk3vtvNQdQpdxjVpYqFV"
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
