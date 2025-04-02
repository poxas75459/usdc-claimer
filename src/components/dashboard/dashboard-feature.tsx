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
    "4SbTnDHfeeGTUCTWZQUWB6mh4X9WGVDkaM6bNfNsfcBwQjTjhVNsMjeZRokXa333rWQnsY9EB8xrUtzey9pFxgki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdfSuyqs5TPQKeTR7whhARtaKD1gKBr8tXU3edN4rrsS6vJ7inXpjV785k56XV3j5PTzSQLghnKTfYs5xasSdBX",
  "key1": "3qic45cada7P3nC2FuKNjQgrCZpJit2S4MwDaafow3ny2JK5Gw9CJoiTRX13Hdrwhnb5s98v8kyPxEZQ4UbpAWHY",
  "key2": "4Y1mvnHbgzFZMZepSrBnsQ33yXjrskryKEKo9tmq8KhT3j5aQu7v2ETgG9P9JN1AaLSFd5agLPdSRQxp6eEQMkBM",
  "key3": "21yyU91WAzMuKxH6zKAHzyhTUhymW35TmxoC9ntxUWJRC3HVaCTezSBvRA9SS9jvb4GuGegCAkgLRX3U7ojaKR6P",
  "key4": "3Ym7Ku2rDNz3dAJYHEGJGJuufsrUvFMpXmXNgM3ibFDUHaLCQW7sDjEpnchqWjMUu6RoW6eDUcW4MSr1qkkpaJ7G",
  "key5": "25H55qPdz4oVj6irdeBRPwrJLFUUa361LBczsrK2qn3tLk9Dmg6X98PxUB1wgefsYB81dL1BZXNWWHWw6argNiXf",
  "key6": "3amfJXUYvHF7ndDgcPaKDbFaaJJqgVJaufUr3rSUyEZsJwDq1fde8166gvofFD98ySpWC7zrFJ5HK1oQQKEfm3SJ",
  "key7": "2RgfN6GQiAHC2JqtHyWRSDfT5bPtouAqL27Scg2ScTHvZMBNyzhTNkaHYDMjTBsW8ZZfMsGnnjFFBN4gpS83Fv7r",
  "key8": "5Wrc57jXzXAWBvYE5dTURVDqbYxDtDNN2y6JfDeM32ogoocRniKzWYPEMkQFpYfzHDaRM95kDsug5sJYj1vCp18Q",
  "key9": "bVQuCyU5rJieTVSBfq4suqB8e4Tg7wAEWEe7ziohFFCrixck86zUtUwTA1YpBjCi1KduBqDhKZFCaPsMYyNFiov",
  "key10": "251QvKSwsAE4NLgurR5uQfKWhXE39WassaujUScXT5uLjHrNFpzzVfscDBWo2oq5XxPnaa4CNgRL2GS4p3xPdaJs",
  "key11": "4BDXsGxPDzqVdtz79mdB8UnCF7sFo7DQh2CiP72Ty9YkZkpSdoqymA6Fr48jjNahjj83G64T2YWbMTUUZfmXtxx2",
  "key12": "GGxhYsHx1k6VjfM4Diky3fCyVPa11vEF9ZQcEQbSLWiAac2kQadnyCahvQXaZkFzG5PdrQqrFFUxtJw1Saqv7Mn",
  "key13": "66LsJFTvuuXPCcp3FjsrQVTwAF7Abw9NZEZJZLc8kS6ZHmEPcpBRexaZn3a5HjMHC2uZxbMNMxyxRSnxJESKsNer",
  "key14": "4qNWPtgaEdohrHCMPaAd9QS3DRzUuNwyoXN2sC2kzKaFePsfWgGC6MvcNFs89vYPJ6ihma6hT1kDdxNRDB7J3SSh",
  "key15": "63QDEDekCevYn9sNmD16hrWiCPFu41rR2nqhRWiYspFHoVVMazfG6LqhvMJUVr4XxHFFeda1FAzxJTuc1sMcr9US",
  "key16": "5UsiC8fn7Xkp14CzavBkwVsyCMt77LGpQVSv7A9W1X3zSBK4cKKjNBAFDUwY98RuBKqSeatCmHcAiF2yzJrMVDBt",
  "key17": "3eXrQ8EuMUC3D6qjZoQSrYRVPMW8Y2aa62pb58RrTtHg8PM6KfRViVJpZq6DYppYeRQkudSVnZAVbSXzEpYdnCd2",
  "key18": "5pZVvTV6V4S4YNHNVGjJLV5DmHfdvhAReFg1hKe9A2N8uxCQ9KQPqQtyppJnM3wAGcqq8KHoWu6sXQADAyFPUR35",
  "key19": "ugJNVRzQYPiXM9djJQb92AUH862sLk1VwacNdBiN23hBmfv6vXLRWU9SFqwdEmJTCjzD5DXp6v4U9mcmJknkLpx",
  "key20": "3KkaC2sbJXLC46Nf2hcCA4NKYaX11Z5Nb3ubEh5wgU67At1WzaKYjzEN1kZWwKttDx2X32N3FvCcagsBNJKJ9ucx",
  "key21": "48phZWHXNXR38xZa7qZiZ549Jt6uQx139yZd3TSv8XfQxb6ryHsd2DMXJGcfXodE12QtbSdJZWvPa1SsZCj1QZn8",
  "key22": "nLxVwb2dxXyMTpq9ww9zDAfDX45ZqKxDMyNke9ihUQzungwA1PoTKgokhrPZ2cXf2DkGUmrDTR5whFM36yUE3Wt",
  "key23": "3AnPoeNvEWxYNMFp9ujjp7qu9WojpqJoE4fA5sSTZ6bxwX8wFyuWgJRcDDWqeLkYMoowAoz2sUY57NteiTaKKksz",
  "key24": "wtt3vjTuNFx9ESTYXQiMCMzfUyrfTd1wwu1zVHorwAvhBMVZ96TShDgFUywJfMwHjo8fSAs1VYfvbUAAdeya4pY",
  "key25": "3a4bcEkVVP3aESUUARBWtsUEHGgJhksLR4iuJCJQZbznvPUVgQVKMmYZQ3Xk7C5hd42FnCCgtFW1AHcm7iR1McYy",
  "key26": "3nhNJAwZ9hyzU5bZCREDMak2MoKALXz7MeKyyACNcUGjnf61JBasLpTsQ3aLt3nMmQNBuUcppsVcRuwk85N7Z9mZ",
  "key27": "2NgYsUPUWnbT7soYFZTYPzKyrQhKRbKovwoCEQrWBXfp42Crp7jT1WJbQvK5kn4V39Nym6uzDx3uk9XEPLAWKPUB",
  "key28": "3AQPj6tmEbskDtrZyFs9AnLzZ7ciCKaEcuyycVsrfdPh3UcqnpbKQPypoHpXKqWNyw5htJhWiEhqGXBVzw6cYAo6"
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
