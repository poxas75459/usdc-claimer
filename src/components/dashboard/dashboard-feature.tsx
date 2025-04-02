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
    "3te8MQPALE5MwvQj18DzaAT6wL5VkdegvUpcAvcmfaviiu2BJnWuvkKsWnRoYfAYtAUAc9VABMWyJyG7KktnjEbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXWGHYffHLoj5ESXXseatKxc3ozpdA2v7y25qmHvKC2P3ts2QdG64Yrq3SZBqEs6gQukmwgmCuJmnPaXx4yPhyt",
  "key1": "31gVDPQix7ExuhKS64bCzjNo2feTL23HYQQjea1TXN8sNbxx8eboxZY2jsugJ3ymyPy2mR9mHvP2j2rPHU1rmkKu",
  "key2": "3TwFYqychZHGLu47QYXs3eRdD4hMEkiAMv93YEs31dY6P5XVWiyywpfh929t4kjC8FndjPRVTfTPnWqph9BDUA3Q",
  "key3": "4zd1U4L5S4n4pmhNpwcXPGMtWCz7g4CYvZH7nK1MQziG4fKL2tGAg2Y3tkuXEzM7xm1fU82P6oMySfAs7HddMvpR",
  "key4": "5MTY54SUChccvVsUbuJpEVdJxAtVQqGsYtpJtUZVkfFDnMhRAviBBbZb9tPLnHpf2f4PgfEErpkpE2C45tinZdui",
  "key5": "3gdQ9KgMJkLdY7FXyN1vsxpeACt3BSyymK3UWDVN8PXpqwaM1GBW6D4uV7bWypbFifG8S4r1MJqyVM6Qa9nHjs6o",
  "key6": "2bdpRWLixmWMKF8HrPrPJHC8r2bFXMzVnHrfq83Zh259qXbZKfv1scyLRMwvrXhDD4Q73hU2AxEH6XAMcx6zqvhM",
  "key7": "h8gzZhrkFWMYA3vUaWidTWLWFNu57gv2g4Ef28kpthT8XJsxrvaX49QNE88nuV7twpr2xrNuHVtuCAzZChTqdnE",
  "key8": "4HSS7DQihfzQ9nNvrMykvMJde3K5P42fNwg3iq4c9Ajn6pU392BK8QHfToqFxZ3rHcYMxQQV5Azz5BDZ77mSZNYU",
  "key9": "57W7wLQiaYd6vLEuwZmAzVJYiYgYjEeSjp1dcBuboPy7Lrj2C1PprGs6QqUPVBzcRiGcatYcSyHFS3d3Mq8xaXVN",
  "key10": "3HKU8EqmKsz2vFWhMPxybsn1nSe4H7WV2HXFDio9eboRGVdARE7Y7zpddgK4k9zD1Z9s9sinSsjdWG1TxjSKaoF4",
  "key11": "hef5gwCEufTcv83kdA4nimcNnNmFSQZcpgar9vF7V1MLLqpr5twmb8WL416PPvU6N9uTJQgNKJrotDx4m7BWKvq",
  "key12": "4bNFpogjg7m6ZBsjmEmqjwF7f4GdCRo63y3BSmAHmggUsZhXHHzDmSvSs3Jxie6EH8cQAiAyuCQqmU1AJ4SE81e9",
  "key13": "5sy6LUdHSGeJBgz1A7uAipjYMjm8RdGpSkNW4ud8czJV9gCyVj7kN8ojXxqMeFbTSKHH4chpDeNqehqHutVPoMfz",
  "key14": "3JZxWkfiKY4S2jpqaUE8u2myMrjzrTeAeVecJaGzTH5VzrofyqfnJnm9nfxWmV2fx89x2Q39qYU1FTMsA5p1ssAA",
  "key15": "5GZLEjJsqkv8KcXg8VaPquqAH6RvZw7BYhM2xS9SCQkvBqRvGPPE83BFvqqbSbg7DfNA4Bcctju5s3VvfpsitLE1",
  "key16": "2cZkH1NmdN4XhK24JSDwjQckjPSXJSv3wBVXm6UjFwevjYF4xfvziyYtkRAhEoAgGWFPhaYNdF866QuEFu6ArNoQ",
  "key17": "KEGzgBK2owCj4WdnFdK4et37WBBAomYL6AubfmUpwmrcRaN9wCd7YqJ4iwmdCuC5zDCV7LiGqMSmgNwZC4m7QkU",
  "key18": "3v2dCeiawe5TEkWMi273hA3X13DRFfr3zVvXB22JVXqCQTQm46iF83yDaycRSYbQu5gYz2LsJYNxU7HEBZG7bAQ7",
  "key19": "4t15pR8wHmx2jb4sVaBgdjSoYvcoNnvgznEbv34iEZyL6YZtE5T9gCoPQ6QRvHKvoNgB7sE6HSbU4rdJFahu3vpa",
  "key20": "2fhrbL3u8oVTySVubTNYBaBH3YF7tmiLEcC68LU4UKvopu41C2ZoX2Ddz2G9Y513HJyee7nM2RyqiiS1UoXpDbzb",
  "key21": "5F2rJUJLqNz6MiTxwFcT9kti3mHytk2a1BMK53zA5XKHt8FLzteUSnMcboMTxrr2wLQjvw3nG1VZ4dMhVzhJqEK3",
  "key22": "4r6HMgrnEMUg8aio16XgCnWv9mXBvbwDAezfc5vQGiiVT4ne1KMzjsgikiJGH3WG48Zyd3afKWufTznFZifSmhC6",
  "key23": "48rpTvwHCqVeCPpfRb4U86dERooNqSGizcJBHkoFavSzbXtofnEsR35AHnvT3ChPDdCJrxFdByfiCMoUvrmNpLJD",
  "key24": "3Dzg3sQuY625JxTu9qQtb6NxNKpyJZ5MLFApHW8nofWwmC4m1bLd1kUH5xLKb8JTjE9KCXrY1eEgm58XCmNDv5Wx",
  "key25": "4pffBFrowmNBkitWBqs9YQhuj9Ae8E1gE9NdAMczwVKSYjuPiHLGwDdWei48BfjoEUtWEmMySvXzcHy6Bw8GoA9",
  "key26": "3b2iA8PxuLcBy6hJjijofZQTpkofbRrX1VnYy6sJwuXQUR2NKmn18yuctPbTAfNRbcvX6EaxwdcLJvqnf22tWjKQ"
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
