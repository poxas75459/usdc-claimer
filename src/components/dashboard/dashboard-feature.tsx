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
    "3gXTeFQUq2dkCFKd8Jg9LBL5UQKGJsanKzXCWV8uJmjj6We5cdrEhRnNxKXSk7fdR4XURWGXaETDhE26mLvvRQkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JgGnYtY3sL4ykd5DfasvEvNinW5YaWmre4jCKNFUWzsTYe6YctnTu69XyyLM4WC9uBcPEejRP69JXMxwWbYpHn",
  "key1": "2QocrBD8D3fBnX9hFHrZso4ZdG2CQKRVy6H6rBoNaub3MnSKomb8UuUp6HJJViQKgbQnNnyr4PADLQt2xNex3kTV",
  "key2": "4hUNJdEnUDTdEevRrt4S29fayarYxdtrt3V1QzJF4MuW7kzqmGiBoYyKSYNzqysNY1Zj3qApNcBgFUriRiuXAY6t",
  "key3": "2pafSJc9THuyXMhd8oUdcELAWV8vaYK55NDGyZBNudxS3ChxzwEBFce18rM6ZGxh5Xv1mThS3aZDdC4wZcqRYYPS",
  "key4": "56kyKHjW83jvc64NoyYW4Dyt1DEZ38CzbXdtivGzWuVCcMVvu1M1sjDp9Jf7KTEFtwSdAyNh3HW5GXFjy1S2DH7f",
  "key5": "2PYxLsZzM6c4xzRfpVtCiEfGkyV4xTdyLZdv5y9NP9Mt3EQq7RzTLcsiwWwUxfANR8Tj1ybbzjfbVitALRFeWwjn",
  "key6": "2p3MJW4Dtn5ersXZrEijQELcDt3JecjjSiMTHPdBaFnDPoAgMaHvPMpEWquhe2Ur3oVCczUAQo7782urx978Zcau",
  "key7": "3ftW5PoRfbwBsmqMPTrTorbnPEh2g7xoiYjocWCtE6sK9VMbtV3DY7nJ1qSLGwb1FnsjpTtc6pPoFP77EHkEvE3z",
  "key8": "EeqwTXCyKURexgtcCCHb8Yethx65btM69M5Pac6m3HGkeTp17J6ZJ14Pqq7SbXD6e9GA2YHVzwvGenWYn69KBNL",
  "key9": "4Au3RSpJf7RXEMxSaqoebDCnTH2oYpsQnsEAarJy1UGXG7vx7sysotM4N5ZsJWq6PN5Zz7yhFgaUbgoVNGMRMbx5",
  "key10": "4uRxrea1a23bov9nBUftEphRpP6N7fwEmSW8Sggk216G77QhrbH4apqT2XY57f6yVNV7HcBCZQWaUatFwTmnQV1m",
  "key11": "6zx2yePmi4smc3j6VWygRhQxRigUGmPp5G9kLH2PPtGr4z5htXZs4Zba1mmZPuX4Z5jwLoDRw9V9FKz41Ghy158",
  "key12": "2bnJG2YjeeeaBf5VzTxhfErGARmR4CHjmvxULu54GM3UKg9KPD9EXvDTDT5DpMMaokHtmQ94EazXFvo9V7rhhGL",
  "key13": "5WRe1PwhZpa3aJDnTL2vA1iLphBt3B2e9oX5EmX4EKU87crdpr3m8MFFbTZmN5EME4MdU8zGgwqVUZxgPzpJd6Uf",
  "key14": "3gJoApoddwExnsfjb2YSVQEQ5SNPMqFEygUubDkvuVmbmz9BP7sVWrGNnKt2PsMGq9n8HYnXSzzQ8d78tD3eLVPS",
  "key15": "bbSN6MK6KUxwpThyRNAjF1AYdk6NKB4YECrWENFTWDymq95BPkLa3snnFHieKRjFjunyKLMQ763C1VXeHQ8nL2A",
  "key16": "2cCxY4qnS2X1HbYb3Qt7vw7VaWMDUpvrB2vrJezE5GrmRGA83aRxhEvmTWU5Z34nfB8BmLTEXEjqvDFDBWr41nRC",
  "key17": "37LFpHMxTNMXfQYGtoKVvbbmHRMTucyaA58SgYWXztBUHiqxR61Q25gDZMsLRLxDu39wNMEW5W9HdRLaTfrwwUtR",
  "key18": "4Ur6WFavstEze6Rd8ZiDA5TwVLdCirMBBbc5dm5rmfw3X7tDxDH15X89HKNBspJNY5NSi2BqjbGDYyBFCB6qjCp7",
  "key19": "4xFkE3KAcyjqRKcYVGB3joSeDwrTo2fGPhCvqpmf4UjfHB4j84BKdkBNf2x4z51wGxguunRSoLv8wGXTWQovZwEU",
  "key20": "H5Kah17YcNBMqxYxZwwuFY4B7zZpeY4ogmB8XhfULp4nfTYB3acWiMT3HEJTt1NL3LeFHGMY1PeQ9ZX8nTkFcYd",
  "key21": "KYaVWYqcFsWGAKMFzLoQNkrSLSDg1qWBMNLjyhEJfS9UcChrCrkqmspn9CTPYVe8V21gnyixmTbf6PDR51zQyUk",
  "key22": "2fjHSuxCedu6VzxqsbAzqC7rfUiq55n8ggW18yFMNR9LLgixZMGrn2ynss7qrHHNRadYn38oMw8g4yPERf3BeboM",
  "key23": "4y6t48cVWzJ3nYLzMCXmCg7JN7RQvuhomehahvyUZ6oo8QbvNHFqng9hdtWuuKAqkGiZUQrdn3stLqoDmcDfXKw9",
  "key24": "315SaQ31BaTBuD7Rs8Uvg9mDuo1iKqThbwQoLGJeCeJ3Y5RRxqkJ79hkB8N3C6qHrN76sqrPLMciwAJNoXRZntAp",
  "key25": "524tw9kZLi1U1UtqrUorEBz6kwbtpGtuPSDtLsJfkDtznzfAV3XNaeK1B77mCYSJs6hH8KDDAsWPgQPSoq68w8G4",
  "key26": "3cXFqGGd3YmucRa5XfCBZvtisfH7F3i8gmeTXVe71Uko35CuzZYX3HvFTaKC5yg72pMcLHsJLjeCLwL2kqcRpnWt",
  "key27": "2v7sKRyHrdQwhHR2KP7uSw9zojUJ9Cn6qkFamTSEwhpcZbqpLkDiTSc4BdsMXN7AFsUD4kUBEMyc8pQK4SrR8SjF",
  "key28": "3NYLbkVcxpzmypQTXqp7Qwfr3iENoaSph1E7odBHkmdHnww47mfSbz5szVUPmXHuPS9XGXw1WEwz8Pq5FU7fjyRm",
  "key29": "4b7eBVeGN54nVHkdCCEPpbAaBVN2JnCAEVu4c5aXnqYyCTrMS6caRkpoS8SNc5CHoCKfJfmDcT5DaULdWPERU7Vg",
  "key30": "2EPUNTURGxf4Kn4hiWjnEiYvUjrQuFr2qvkcP88kWF4T4XsuE7gdjPd3yc9oYDheytqGvhrFxZEgJdSwUHdQgAtU",
  "key31": "56j7eyiktFcxg1tZQjioHSrhW3ppAuCVbuceekrMY3pnPFqbAnW1WhdW8QHxikeGTnMphDUfx6eRBVWd3eJRCX1w",
  "key32": "5Bdod16M5huctqaLN5vS715vVRSF2Zqv9KghKJceYCHyKWgvPk1PWnZztVWQ873Ly4cojoqekuraJ4DUBa5Z8HJL",
  "key33": "23MhC4nY2MEeEtcDJ9G4CnHJujrze525NkbvQBhuL7NFPjbVrZ96XZZMfPF1DLgUdMNq7sp6Qn42vNJaYet3ucvy",
  "key34": "5T8CdHHiyGnBoEwVHJPbRUEYzi3pcKTXTY7y3pdYU2TwdXLSH6d9kNPHHpDe4HA57xc67LShhtyBzkY5C58YJkrk",
  "key35": "3PTao5dKcgJLrCcuu815bTytNW3P5Lx7YC1a9kCTa4YgnqqDtJiFskENmpKnc1t7CWWVrYnviEzV5E7GH2igC9gv",
  "key36": "sdafntrDani3saXPP8Y3rzuQVAJf4acen55gL6NvUALZidzSazFqW9WYrqHTNK7EuanGg7mf95qFXTukUgkPtwL",
  "key37": "5a7DGHcwxmFaJKt3D2dfMJhEgDCdhjk1bx8jMYzfQkAZvC95zpu29piPKe63U9VR28n9g1JUEK5VEjLyFz8r6EHC",
  "key38": "3CyXeWHwaF2MpwUzVPZnEgqUToZCohg1ScRgdQxyKPL5JvhHEEVny5tnnNoh4fhiAesnMrdhMqZqZVt3x7VMEEuw",
  "key39": "2T9rt3RL1ySx4YnqmUmc8kMZMZvRjJ6txvLKFusntfzuBFsF6v6NBggLL7jHjtJzf1M3tj9ByhX5Q8vkUUwHT9cs"
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
