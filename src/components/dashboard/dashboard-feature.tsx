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
    "2JvR8VUmBHo6pczc8ks7nXZg8bMDsgCwMxVsFTivoDSwBtbxtDMPHn6D2KQH663B9yLYu2od98kBZzM7W4WTN2aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mh37VGNQPB9cwLkkaRqQocdphPT8ZGhJXs24oJhBm7sZ6Gxk8XSs1t5TTbc36wrmEmj5nD8SAnPz6vMKhhDBb56",
  "key1": "65VwuLMCbjReFBYxuyiJ1UUrn6xmUANzQSbxR3fbNcNr5ys1kCCoKqoEHqRGMq4PEJBnNpEvMiwm2NdGHvoMYtd5",
  "key2": "5JpEYG6Ar1WSh5r8F9hY7RyYRsgGQRuhKZqux7g9LS8rcdf6p2hfKfbWc8zGi13WoG4E7NfwnAxKKnYFggJRqv2d",
  "key3": "5aetcoyJDFxY5HSizoARJkfmw5RUuPsgJHZ95Gwj3m9P7Fm2DbCVTARHi7erhZKK6zgjtWsJ8xu3AimbiBuoBnud",
  "key4": "bDDumTvH4acqkkMDdewB1ozensQeVrzMtuHx9Nh6PcTw3oruKmxFNYecFUeYAcT7afFFhVSro4orKomtCLXDUZf",
  "key5": "5LZE44fqVQdSF57MkucxnNvDENSQju9rQe6edYntsTxhror67Rt3Zd8p1QV9SitbhGMyJTioFwB6zC5oK17o7Neo",
  "key6": "5siwnxzgpZpYWL2nGmEvWtDTkFSkMvH6PWJp8CY8QCap5MPoUjBdz8FtfeyhgrvacEaop8AMCAAR8t2S1L7wnoLn",
  "key7": "21KyUjtP9di8oChhwLpvuV8kKh39bQeiAoa4ksttcYkyV19eoPS6B82e6ZZJ2sKBN1VCU6XkjGEEuTukN633Drch",
  "key8": "32F6jqKa71zD8hk281YjUYcZXonn2wLABiy3XkegL8QceYjer5rdYU69fkWqhBv1zAvYK1ASTjAS1GD3wbxkXYJV",
  "key9": "UdLV5P8uPJng8RPBZpE6wbrBRgbiMbScthoUuAh4Bmoo7NfGoeUn3afegbGbKesi3q1zTHUavF1CMvD6hYVd4y2",
  "key10": "5BowNFYsYR8JzECC9wJcsn9Q1veqP13qkVeu624tPybEMAYb3gdLGm2p7ejZCHmEwr3B1B8K12GoM5iBArdC3ZJX",
  "key11": "3wM2Rza1RUHawAbYFxLD4upZbkbNztQSJCCu7qNakQkRFQigfZ3MvXba1CTJ4RkZuZFiWurnFKoncgiBoH3jqKSr",
  "key12": "348J2ZxYQhpadGtzU5StvvLgQcN1ZxtzpjGbVucNHaMjh4q8Gy8A9ozoJ2g3629a3DG61RhnMLVJn9GA2M3CNrie",
  "key13": "5G83PR39dq3ypSCxwBe8N1RkYqsMLZNfSFtRFa6TbMbTynS5mUSJmakeYpgE9261DLMsCy3hnky2hL9jRTU8LdKs",
  "key14": "2UJX4isACw8dLPikYSFnhMpVdibiiJYmoWpzfbBVASoe9cWeX1NN8GZ916N49ifeVaKqqgwc2VS7P43gPwg7eGnh",
  "key15": "2XkBGnvdZQMyjuj3X1uQNmv5BrFdVZgTAJRjDRGtrbufKD94A1zu1626MrNXg6bmgduqsee5cxZ3st6Zzw7xLV44",
  "key16": "3pVS6UPdVkCiAWjQsm4UnBq9WdcyFaPtShHQTn9bYzWJFVaZ6z7bNWbxKGjzrh9qR5w8mKjF2ZZhzrvDXNennZge",
  "key17": "4otBQ6r4n72UBxKg9wWctUZnwwTKYXXcKbc6u1e7YmXSvbqonXerSDqMmjdmpZfFeHCwQxDo2UtPcFBG2LHXW1je",
  "key18": "66PCwUTxqYVJhumWwGmrciARsCPGNHPD7U74aCvkPxUUSxnqS8uzzgJWHXu4tEzE5ZqwukNDf63LrvBgifFMw7Ze",
  "key19": "2bzaTqQL2G7NupPKz67jydYJSEyW3C122dsmKScjBjnK9CVQjpdjRnUrH7Mz2USv5XacjQUiwreSqL9Zf5K6K7Nv",
  "key20": "316bPc617g5MttDPDP1jNHe41DtCRXWv4acDgnkTwP6LjUqNppt9Er72sQUMoE3bWXoXYmQsUKBoYNcTArgQEzSs",
  "key21": "3JQrxFcNvHabk3vVztZ4t46xRtBvJQHUwBYZbGmQHxenFMHdGQMfVCixUUVc76i1KCXshonKG5EtneA3oRjtqwCJ",
  "key22": "2k5rA2X1td7je4JAeLAkFzGxaCetrKBGKABDs1ifdGmAHPky7p5ZczqxjrZDHqQTHmtgo3YkTx56To9YGUR3TRAW",
  "key23": "5Uw5szGhf6HpwASWRx8zRLuRsfJvSzCo8BZvBEFGKjviY7ECSXyji7nyZKYAXvNi7o28yLgg2TrwRYsyabwsq4tw",
  "key24": "c9KBFxB3kCW4CSKrBkbir78LJ9sWAiDjive8zieGenCQp7ZvKBkxPcTsdmRxs46GnsazzFECGVxMX9ExPGgbC6K",
  "key25": "5s9nx2W9HYD42EKZQSGWud825ZVbB1EVTfzzJLb5Lf3XEJrvptUCQsK6vDEhU3g1NTDXWWWVDN2rr6PqwdAcxwmT",
  "key26": "2HzBTEBCgVdqq7wZdV2H8gEq97NxNQVFhgNP4LYwb7CvVfnAmxXBVyqBsWsgTkszNAzwsZkh59doRzdEnLC7yVyx"
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
