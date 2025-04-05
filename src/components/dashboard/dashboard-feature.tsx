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
    "5TS2uMG2nBDiETmzAPHfY4Gz5AQin5yyR8mZGP863CF9i2vfJcKm9bSeijiCjNRakj3coPKvA9R46YPeo2CmgeyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T6JVtLPXZAc2yB6m9H3dFhMDhtToLHhcXKCW6VmwoLEJHsBGA26awft5DXdko2ku1AHusvq3JkiSLHTtmkumRu9",
  "key1": "5GjSNk9HzS6bmRWSUcpUZhVheq7sp6fVWiNfanVh3SztdS8iQU832WZvpnQQQVqnyAdG2SVTHQaJVUU6MpKgV8qp",
  "key2": "tDWb38RDVdxEH5HMprRk3DmVYJkZdj2xRm1AJAnaMtELYgre9bWkg9KYXVQTjXpbHMW642AZb4ND7Y4KEmg2umw",
  "key3": "63cgNKFudVUtcGNJGCrLjH6FyYey9YRz88Dih9ob2iFTnnhPbXDNDvc1aZguukQU6BSewzMyg4iTkrhSSWUDpU43",
  "key4": "43nNBPJQUvCZY1JBYaWowBrEk79GkXzwztFP9RKgMSXodbirjdsbjBHsgCNmgoUCivxNGRDzw1aDudpiQKiyfjCS",
  "key5": "3BvnoYe8kevihmfEoLNF7shwn3XSWREJ5tMjSPvqRsbUTLASs3Lzq4NdkEn6sZ4G53tzs5gbaaT7tgT5EXDHbZc8",
  "key6": "5T2Ld5Ai3ZmqXapweV5u7gaaowCD1m3Us1WvAoaXGhytmwJSsdyqD8nocF48N7Smvzgu2duRV7FAtQPKc9VumcnX",
  "key7": "36qtdHGDJfhpCyapLgRZcyfrGcu4JtdQ7T5J6syTAoUrs7XwFdKZbAELx5MRP6NbogDhLcKJA1zKi7XGsQayoWMc",
  "key8": "36knRQbpXJFexQ5vzZJFpmJDRXVf57sWsKZrTXzgxi72ESK89ASzdimJjhzsecqi4CPQRvQDcN5U54scKqn1i3Wi",
  "key9": "4UVku3aNr1Bi5NBQMs5RfNQ874BwZuMhTyxn4Qszter6hatG8rvsGtCdkRh6ePYhFHU8ZrQAq1tmwaKm3na4Lp6t",
  "key10": "Yp8jEnexYNA8uX8u2aVDRKcMTDB4F6St4u3RyurJmgcTcEpygQ66tHLqcgx9r9fd8y5p4tjnUUAHjpqiVq7Apzk",
  "key11": "3F2TZnt1L7cDnXpr1C3pLzpEopnzCnUYp1FtjGVcCoLDx4qWkgMEfVFiz6AKQV7pjZ58jWzvHM8A6zWB8DYctBv6",
  "key12": "3dpwmdnMVPqy8MDDjrf8LqMaGmqt8FCbLj2veNQXMVRCL31KUb5vr2376d8gJBD9LsgjaxRb8DXXwuKM8mkH8GaN",
  "key13": "2ZTcd5hX5CJn4K47q3Bf1vo8HmhtV7JVG4pKoR32aLuvPtUpNCwCHZZHnSowFWieKkZffVdTHrDEiNs1FDxNptvM",
  "key14": "44P2MU4cdKQoFcpkZBsjG2zrydorBJG75PK4euYa1zZ9KXTEiDRd7xmLHNn87VdwehqehYRaV4KbdQcuRRhRhYMs",
  "key15": "41n8tkcsjGCVP2kfcyvqbMer3sa2giBroMd9qH4SJ9hs82JdBq9DQJ8cCmYep2dwQP4GXMPxEmvj3SdLy4cC8cfu",
  "key16": "5d3HPUoyCNPgsSH5T1hywrh5xns36B7YTSAFbHfA4HJFTSB9hFQkNv6R29Y4nXz1hCkd2EoFbpxvFHhQvkbRsMBf",
  "key17": "52YXJnY2sfcx8pw57hfeUfcCMBdH52qScBoUZNLmqrcsajYmPreSggZQzfr9Cvja7juUrRVCuhgh24u5mjVroSpi",
  "key18": "4kR55Kqqg9FgrknnwRYtQ4homjfvoaSzxZLJeo6kJ4BVw9GHUEdGbVPzUk5ZaYKHAYsJSnJFkdC8ymUiDNYhx4e1",
  "key19": "Awuid7Ytzih9CKkT841QiqkG4nhuimh68hiXvYoGUCNsfwGqhqfBNh9srFq7FDzYmrHRxAKrHj2kzuxdR8wTgFJ",
  "key20": "y1yvaLKYQ11KUziFFBibXqJHwgXoH6E1iXwcAxaVR7s52UWQxiugvFt4GvBJ72kvANxAEsqeoMjohLYfZ33tuMm",
  "key21": "syBSbScmnDKHegbbcVocJ6egKemoywRpwXKJteXMCN8QLFeBX4wmx8k9CTqDev6kY67fSnwSf8UNhBC5ZkWVxGu",
  "key22": "4eM8B7WmL7cniRHsRudKH72oC7pzy1eVU1sS8fRXTaRwqhTAH5ubhZQy9PKrf9smNxY56GFbuWavUmNKgsVjV9Q2",
  "key23": "4gJXoouyVezA3qRXNRviHqhTsePwE2ri7XSgptkgzYCb1r8JjZpAatsKbaRJvqkZ2BQc9uLq27a7osQkuhNbViFC",
  "key24": "47s829RMJonMxD5Z7GrZSGqBWv8mhupoeS1a5rDyFTeT3h18prXqN3RCb3o7ov7Lxw3r4fYENyYahdgRNcD8pBxb",
  "key25": "258EbJ8x8T8eEFntEpBytW5KuAftLcjV8THZbssJSW8YcnesgZnovg3cyWSCH22RKCgkjUp7bUo7vPoG66ya38Sy",
  "key26": "3RkPdAnipgXFLeaDFy4u8dgtknXkvbXoboZmaaXbF59Dv9LcMqM7ZPrHHPV63oBog6rUSSmMfH3Rumti9XvoyKKn",
  "key27": "3jsUtFT9qXu9pSuQea83JLTbLgkvUvr3veQgap7QTd1Y6cjWF17H3WcXHp7zTNpYPsqGietq9tNG7mg9u7HtWLsH",
  "key28": "57kknxRKVS4oYHjwA29Z7NAKwJEi1QyqRziBGBTtYKDFPrVwCSn1oqeBsNPJJV2YU3jfF3uA7hBDaMYrBHoA1vBy",
  "key29": "53PfK5gUnKNRi3uTxb9UspWL9JtrMbeboFWd5kKVMLnCW9eBPbhyTNmLg8CGmZ5aAdPmADhFNxEs2QHfeo9hesjN",
  "key30": "ZASMFeLrcuFMCbkdd9uWmvsTHgw5i9tPq34V3mFtZ3zZtqiAeTbEgDCMmY17RxHyovSJZaFGo9kuJg3TTRWfVpk",
  "key31": "52xTpK4Qen5HHjgKge3ceue4vfhiQxPdbhMXYjbpDuuLnBR7EbY74DfCBREdKzNSVmoFmyp9dRztBRLgGZA6ev6R",
  "key32": "4wCD6L1whXDhjwTrt6PJzvtNBJG1Wg6kcrDajev4D8381iC9UUVKuJFRVG9DUUqCrmrH6kV57qdzy5GGKMUE3AWM",
  "key33": "2ra4y3ZL28nWyhs4jmNeDvUXKvBbpbYDUwhpmUBbahbJSaRGaX7P8DTry6TAGtExoNwTV6yzFXBYpxBk5vTcbVSL",
  "key34": "2QotpGhHiNBcZ3brSWs5TWc4JzHB1KPFBFTrw1LL59QBohEEQnZetHEDhum5K3A3sWHDL7p3YGkeJ8YrzXdrvzHK"
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
