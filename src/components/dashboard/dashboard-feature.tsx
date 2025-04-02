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
    "MaNRR4HjqNYWV5Fed74myCfqjv3JYKVMyTwyGMB9KR685JEJbLp9aAkXpbh4PuhjvJnmiSTuXtKHDkACvV6mhTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ca5FjnXVUDzFBFoxTPBQncsazgEfLz9pwmkNh24TnMKbKS5SvjWSBn56su78AFtbvATJVyNt4fbRYqJQVvUUQmC",
  "key1": "5PUG7UgdtWFtv81XASctkT6Pi4Ttr9coD1zBFzHCde2d1HcZTwtgW4rHEMmb5i7QzFYXP7zdhX7G3JY6RP24YTmC",
  "key2": "3a1Za1aHAuUxmXvPdYwsiXA9XRWw6bQHPSnuxtqYfQjC7aPrNYGad4oAQeBtDPaN9P4sYGLs25kBZBTyUSpnEX4Y",
  "key3": "qWs96DPvTrD8VRjukXNthw56f4aM5m39ScBZ9EorrKbWh4jJxKdVBnicezeghHMyTCNqUxw3WPFUGZmtHxY7kVt",
  "key4": "63mQofWmDnAFFzffiQ4pDFU14LmDQeU9PNPpumD45o6tykFiSuTrkm9SFPC7rMikkuGoDoxCYj5WNFkyuWqAasS9",
  "key5": "2HdB6cG4eby5qozf77NWyNhzYj3ybgH2sohSyHfSLRizNSWuCMGWu36XLSUCoji9meyEVqpwyXSkBqn7EbgxADxN",
  "key6": "5GKmDvq68aJ55ksxB4AT4p17jeaMCLAfHUkWVj39r9RLqVBmYHq7mDSNim174C4RdWJWN357cDQJtQy4qpJNa7uK",
  "key7": "59yRQ3ZjCZs3wHktRfP3vTomdKhtsbDaZweicGXtRduoWMxoAE6Cd2vg2WGxTioHzRVcBN7hwJa2iHfVA577tgYX",
  "key8": "59qMSxcxs4DmGAaoYMpbTJmC9tGoUj32cQFmAtwveVAT7HshwLduRKbdfUMjogXMdZL5pcgCDTKTiH4qHoeXPNku",
  "key9": "458tCTaKe1ndbLqNVcfFfDW5gzP2ZzgVXpGEpjB4NthxP7Y952XVttPvkqeUEEMGLnZVcMZN6DU1sUh6pNewx2uZ",
  "key10": "4SxToPXrH7gJgPJ3LRaUfJXVmgFG5AApgWaQpoZgZxXCwpufXv9XvcwkcVNxaodQLAHrBDgwggZxS9i1iZsqgnTU",
  "key11": "5kYxBcTLwxFkWWdtWggABs2cCTjzR4JToBiF1VuFVuXmXdUTZDchjnaCi9hMeGXdMVZ5hVsUFQjgCx6bhBy6D1EH",
  "key12": "318WJKoNjmqV93w7Ay4KMZB6DcgMDejxLbAygJX2PKKv6NR8qbkzrP87GYYvgnVcR2uNX67JiTDdsYBqs1Mz8vRg",
  "key13": "3WmMyeGJ3y4TkiRvFj48fHw37JkU7urLc2miTh1WUTPH8H99bMuhPstWaRFDJcHaPBVy6tEHU5xJwuRuKQM7JQVv",
  "key14": "1xxchr2ug1Z5c6ovsBp6BGAWzRfnuZEBZ7ZnBmRuWkPrtWtE1DJhekoutoZhLhemLUA8NyrRxusEn1Q4jkgpEg6",
  "key15": "5xPK3vs44LPnsY1E4BjqQwBE889j58DHrcMobto35tThxjpHJ8L8NePeWPV1tJwCwn9SbbeHb85gbAFG1DJqaUSv",
  "key16": "5RQ6oXVV4duaCSYEfc9VrAA8j4xRaYGwqsbFvD1YjqcUh78dXoCJR1GryD3pK6etRc7WNE8uqmTN5AwuamnFYzoR",
  "key17": "5G3JvjTdcrBsoJ5vxAwAxTRgFZo3u3jR8jebwi63PyDjYXBv5dpjmhQxxifUPMtURD73ocvDRUMJRRxkdhgkrLvh",
  "key18": "519hR2HwbszGRGcdjsDfPHuCNzQLG8fP6B2pGySnZkGMx2u8iwNvS8s9J4XTh1BATL5P6avhnB5qLUZWkT1KuVkt",
  "key19": "3RpWD7HBSezccTpXsnrSjFn7eJckcbMkng72GtP52BtwJSesQvqncvo9g2jX5Yr94u7sRqj2TBy1ZaXPzgP9vGSH",
  "key20": "4BdUhk8E5qYorEuLBq88vE3yddLQoCT5mf5HSc9mSU6x6cFwgNQZiNGLnhDxzntS4z1GEnZozBbESCHe3sPcJjwd",
  "key21": "65ydW1nE9pUyCWU32PvLzsg8pvmJQKwwydmnWEygnkYMa1idNz26qMbDDpb1VmxM4mPwnhjSMoZrc7gKs2B4xHQQ",
  "key22": "3bMg6k7opX8fk5Vi9VkNq39ccqEw9bftAXsEKFkH6unJoki3boZ4PfLCGZ6Aw59SFGF8yKsJGe92yZYgSXuP3bQF",
  "key23": "5Kc1wcnq84AG43hL51UyAK1m1hryZSRpHd8NdEqcVuaRHSxJNFTjGrdLSKuZ6778R3GTDnadW7RgerZAZ3WuxB8D",
  "key24": "5Dio5agQjyFcLxRgRfWmwVFAr2ecun8KiwJNykT3i3k76P9WBoTWA8bTAr41YaMev2C9oAE5kWcdgtg95GmCJgza",
  "key25": "vGWBLNgPgomN2VCeFSUhGky1ZdrDSmeJTucvpkxJiu6pAFH1E3V4dhUAfwswuSn5UhJDhJ3xykt5hVV9a7s65cb"
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
