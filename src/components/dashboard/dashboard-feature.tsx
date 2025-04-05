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
    "3rBc1W25hMtbgTkxUrAqBkJGTL53tAD8uSo3WZsRTDXWrSJymNbbEb3BotuwqpRkErjtUnDtqALv9naAtvbnrEmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XyAdjzob7NYmbexdKTz6cR6iAdEQvPGyMnoF3SYSP9oPUuxUNuWHpcxknHcQpDZSJYrjeUh8rBLMBG6UVqoYzWe",
  "key1": "57h7pUAJ4vwREqyJaQ7RXuvtSD6fyKUehFHVivQAjmW8TCMAxKyrDJykduUv5RFsPBe2uakjj75h9FvGxzoHBN2V",
  "key2": "5qeJzasHBv7qBcs1vaLAvbjJHo8EPrANwaD8XystWtNRVsKL7i1tv2qsCCeHZfStfMCSPJ57G7wR3vbRhkrZjccd",
  "key3": "34pYkhL9YDKqYnzEGurubrnrZcFg2cuXVmhvfjLtfkPp2TLHskHb9SAaBSu8XbYo7u9yMucQgdvG7WMsPdi8ikkP",
  "key4": "4CjqyKdXFC3ZdJWq8PGu7yBURYp1CS12qgTUKoNHcyrGEkEcDHEq3LLqFHiNWLsKo5VorG7v1wBHQcbQUBoB8F5C",
  "key5": "2R8z5wFomtFLuXw4xodHvXCczswMEFV1mS6irEV9fp8YTw4NyxVVXzMhd6BkZLxHHVXUzzPYihznr5eggvd26p9N",
  "key6": "3GmTZCEe1ZwryRcDJLYZXpBc6C56wzetFxcFbKiVfv8hzscUnn2rAAuFJ3MbRa7hUXcWKTo3nLryrokwuW2ihTLK",
  "key7": "51TBby5TDdypPKNEmYiCpa9nazPRbsrWkjnmoyqCPmZhFEEzdmbRVxBR1fx2XqtFfWvPRPVkTp9AyPQ459BKmTQC",
  "key8": "2ZBRYACjfjThnyS95XLZFfnuZZuALy4tYyS6vscVH1mQarKBM3KmDNTdeuunU7W3QLaPwKNZhAR34VhqJy4pyVec",
  "key9": "64hRFtVPdfbfWZGTGjAZMkAJ3DhNEKU4ZY34fsCyYnockzHb2svXhPR8bFG7n1KyAVb4vfk41vb4cEjEW7US4jJq",
  "key10": "66xdwrAtfnKQVndtZcGGQHMfsNms7BZ6ar5XHD2mKndF5MXP9Nc3y4Q9YfieTpScgvSfqbKUWfP1ge3GhcjL9F4b",
  "key11": "2nrKcxYgxDqAk7m52xwaGkRMbZqZRY9at7xwDXtWUzCoD25wJfs1p42a8ZVna7gVGQykCVFNxWGDYsvnsDUikCUR",
  "key12": "GXfsxdT8f46DeLQFwphpxz9urmDXDCmWcqSejhrrMP63Zp7W3E8ZvDkPgBQyL2DNxLgtaDr9JvdpkK8FkzWeUoZ",
  "key13": "2qZq2fCtC3UswQdp2D16z9Vn7st6ZP9yhpybLs6nfan1R8APMNai7sVJvXacJFR8VhPkVDASiyYLpsrXyGjjkdnc",
  "key14": "28aaCxMq2vrsZSctPyV2vQHJr3iPQm6NpYgGmst6SMK3WqmufzjuK9CZaXGD1B8Mtw1Lh4KmYfkq5qwk6BnT4xtn",
  "key15": "3cXXgsL2LnHUAUmYkyec2WCRq45Dm35GtbTQCDZdr6d4v3LsV5MFJcArGESuZexn7HW7pwpztbLBpzZXXsgQXLSz",
  "key16": "8mQFSiwC9pmCJ5b1P5P7Zwnek4XE9GHdGwqw6pitXxZeEfXJdx72aohEHMkvfgG2zBLSxWkgoattMv2QxntiYtz",
  "key17": "5mUShi4Abik6awA812M6tRMTxxfKPJdAFQYoQYRbV96WajbFQ5XQsm5dtbvMi18tE5gEPSE9CCeSQ4BBJAdygV5K",
  "key18": "65iz1aHLGBKP7prvABCH6DYXzVk5hRCnDft4tsmnsAWBV469Jw9Kj6CUtBCtQf5RAFmoHvqKFYgj3WJetWihRKbH",
  "key19": "4KDsW1uym26exNhve5dsZ5PCCH29cTsD5LDm5LSUxEYzuz5PfQFp6YVT5J3erWeYMC8wynXvmKVTqzJY6GzuwVWj",
  "key20": "211Np4E6KfxC45QXZqqXZPxSzPCzecFzU6vkvxnLGW3uysg633LmxVhwZrsUVj1N8uGEPbRT53rcnrV5e2MVRvMX",
  "key21": "2JqwMuHq6vnoPkZmeQHuFivyT7XAswGF5UNK3Ld7W6u9ThYfFyvrxgX2rTnKtemygRz9vmaS6TnbJv259umPWa1L",
  "key22": "2HgVK2NBFTYuh1H8jKpniFRfKzYENQW4kxZpQAJmfiZJfrbF7JZsjeVLLLhTyMNGq8T2aa4b3RpFK12EKKfUyYFR",
  "key23": "ALWv8RR3jPEar9Vod25TE8jY9EvJ5KJ8TdA8AftRrHLY3negCq6qvCpxNSsTLWiEo4SVaW9Kh8L7P9zxjtRwfkq",
  "key24": "32DiF53pcmfNjC7CVxCdqXanD4WHKjhWsfYCSR8kj6ckEqLyqvA8VRfuNAozMC7weWKK6rkP8EXMYQcvumGmmJjB",
  "key25": "4R7BHSx3TRGKCoEzXzbzg4xGWNVHZbpqaFhEC2sWhWfHVgpTX9SPDwrXKQc7kmDSNxxSoyoSxFQP9pLkdLLroQ5E",
  "key26": "31neXgJEf5C553xDpJyQWgHPV3f6scABjvdZVhkenVf54buCnFpasSvpysgAVMAbrNJrtzVhXfTBehbkLbx7duZz",
  "key27": "5biCXxpF2pihR8YK5CjK2qMTTEYUchgq5eeAH7X29bxptYd3QpK2Ny6kkpraGsSvsyoykamvJ2P5qK6JCSvKtgyJ",
  "key28": "3QFx9ZUzJUQFAcnJvDjYH5fSf5HA4JzF3DoVTJWrSh7uop7q9nxniKRyREjkQYrBUTv7PiS6XPwBnyWRaUsWE3iP",
  "key29": "hxGsDXo1Rgc5Ys8Z5ZPjFGLjaHq1Tn1fY7bJNQzp3dQpzp9jFDNsjDPoyySFR9SrqeSxMFQpEbPDNV5ne3BHRd2",
  "key30": "4JqSTUgsCABePXCwaccHtLtTMxu9b8ra31dfzoVdZNyAMSA38t6iyUudqc52VczFarR1cDJSxh1z7uoqz5oSbFBp"
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
