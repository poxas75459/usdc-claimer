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
    "4jRXrS6MnZ48weVGgy3dihicya2wMJa3rRiRVJhAuYDBoJewYrQibFZsZs5Ja3pigLpzC223fDWFSwN5AVTX3rLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKLnfnoyaWkKvsN3TXZqoVuPLTa5CPRQg4FsBqwuBNRDXHQSwBiCcReHchoArZ95HkTGo3eBdhdnA9fnCMmdSFW",
  "key1": "XZ2pThaUL8N6vj9wUFKaZJi4eqBEzQiqpwyhFiBJCH8naojVsTia1At1kB9unwfoKAD2MpfEmYBwbgZQHRyyur2",
  "key2": "LsD4eYe8XyLiD8cyhi7NYKKpXUJrfZn5u4CG9S8pAMCM1TtaZB9AFG8Z5xEyVfEWKTHMJk5u27zYh7VXcUUru29",
  "key3": "oWu9QGnrSEsWFVmdqGu31DyxAvAuGNxjKir46czmZoaFEHrpjm1bKHEbjZHTiGFDnUiQNuCQ9aPatXQKQ2UkTjr",
  "key4": "4aRLBXqkEyS491hHRRJoJBm22sHs476E8g7wWAJaa5JpmznpuTBCDzaGP1BYQGcJ2WegwdF986bBZ8KsLEhcztie",
  "key5": "4tzWn5LoU2JqT7tZzqQA41nPBqCr6jGiK67DZaqxYjAZu6uPEf2rzg3XfYvUdbdFmzMr25uXLz3RWEKJf51koYQC",
  "key6": "5TokB6Q58Rf8UqdzdyRRLqc67uk62EMy3qvAnUTuMyeseKVudojNWwGdrmFq59D26QjhMFwcRodJQH9NXX7dSxiF",
  "key7": "5UQFmBYPGps93sABHWgdYgpGtE57xokZ3eiFQBCoV5g2DY3B545LBegvqYLXYpp8mvR1a49twpodDPvzhbouQWLr",
  "key8": "RhFi4xWqxLxJsYvsWGuTkxk2jBeBWB8LZB8mjK5nbw4eK4ndTkmNJXpVqMv3vbQaKLJypkABUZ4djqYftyFmGNd",
  "key9": "4jMeQvs785MoTGqv7CFnJS9yCW7wU4jjXXV7UKPkJCCWDgWNePncy5nCp6FaaWuztwgwrmvjgnXZ1tQbeRNbC3sW",
  "key10": "7eKRWRbBQuK2rDYaurhB2cbE8mTyTtjXdMJLyfT57wS4SkXCWdZ7kxY7JeQkr3yVYwy1XCXhmqNU6hAXxoM8fsA",
  "key11": "2H63gAn9cREtfsCnmEdGoNWdbTnvjacYRTGLtvG9hyihjjhYMknMnjC25GEwa6Vkh3tdxMWBB5ubmsFkejAJmH9c",
  "key12": "2dbZABrWYxpEituA4oMfoTwbBNvkmTQWFjXsqmJPsMZqbjxr8RvjXxdpC6NPwGz4gPuXraWWTJrgqoUQ59zugw6K",
  "key13": "4EyL5oWBarwxhUQN8S2fjkxQoQMqhJJiTd7uhZLi35SfBswTCLRmAGGtrgVsXzj2VYF4J6DJcNopiqTUHTJWGuRV",
  "key14": "2u8ne48VrYWy3GuhribMWqQKnwNA7B3tHE7MNs8WSFjpcziA9ZhSFKTwmRUtyLmwpo1j26qVAUXhVMgPhG5mkR69",
  "key15": "drx3NHYHHT3BKRHNp5Jnu4i1134msmGCBBHaxvkjYLAakrq9aevRFaUCwTrXxb8ztotdDmbtwofZENzFF7mhZ7M",
  "key16": "4udYZtEh8Do82ybLCo7L7MrXNJFS8pX54yKeNNtYFYF5NMZzDWwXdMc7upLQc26jTRmqYv3FoAT4xAZN4q4rMAZ4",
  "key17": "34qCDQDbnXegtvsbc8USrorS2iEoBeivybjdxrjWqQD4UmbHhywsDF5UGadjobfmcJVcr3FWUgiq2PHEWyZ9sDXR",
  "key18": "5vNk8CQgyGxTg4WQtKZ4JwWMsvv8JXoDWz7AXidEPFPCWFJX1mGfsbJR5veSYJL4UZJjnakfXy1L9inUc6mCYbKe",
  "key19": "QWe7t2vt6YNU7J9V6Wb51WB2XezK9nSxBzeoLWfaD393h92KWRak5bKifrzTf9agN2yi9qHEP2FAzmeFe7hW1Ds",
  "key20": "4vtp51sJv1gzF4TNqV5hscKoakNpw1QyGNd3S19YMzw1G2BjVUJUG8q99BFkAz8Ar1pP7iHbqZmTiNnjZ1iFT1YQ",
  "key21": "mScLCzPHE5VBTaSi8zSJnx18uzpgmCuCHg1igou33gZekqdWgpG9BSFdRYMrTwohA6JvK8z5q5q5fwyEzorKcZb",
  "key22": "deEXXswvXYt7wXEZqxUVQBQ5185zfkVNKWEuNoSC8H4xPJiTAxCkszR8ssVsWMBzZrBu9nB8tjWDTsMPYUWbfhy",
  "key23": "3br2GBVK36XjS36Hox3LVK1mMhJGGJddyEcdHrLnK9r4pVN7TjdCe7bKR2b7uuM8MxgsUtWatcni31uU1zh7jkc8",
  "key24": "pZ85DrbKc3mn76G22tbRaBuHbSxysRzecxxXcTQQbFC9hED8qNZRWjHh1MtdPdbJot8UP1HaVGVKnyJX6DhXsmB",
  "key25": "5GD71tZTumgneeYVJnTqLkzn7rxaFjrvcCmaigT9MXwzhmVEQzFccUap8FmqgWfsKGyMWkVNHKfhsBCJ95zv6xBx",
  "key26": "5HTpvSP234X7Hq7GzHznwrT4Uuum3Hrd3YBnmG8FzwsurStMm5KQwtFkgatS6XvzV5p4xktvezEaVK2zZzFxsGwF",
  "key27": "5HHwKJ1Ni5E3WAQCi5mXRHdx5uYPp1XSBNe15sUCJJcDFFHqJpxq9qugQ1xhckT4ppQrWT8fkuMRfbBxsHECo5Y4",
  "key28": "oTTRh2sorqAc2HTLrJqtkgVcA9WzoHTZMiQthTpEs9ZDmpKrZExHffEFKoEDnCQLorVypG7jq6gQpQdGh5HptRu",
  "key29": "zbHuuX6QgBNcRXqwMgfNsn7rJmTeoC2YWM2wnVVJUYjHFk2puTa3cW3ceu1ZMntiJsxB8sc54no86JssxwthudU",
  "key30": "3rVT4R2anRr8CfRGU2mvYCZbi34WLCL4mQiRwUyj7SSBH7rPsvQAjiBeAPEdSVmFTFMgygB639dzpz8GRmixxvFB",
  "key31": "35v7RaJFtposzhwDs1bEVXAJHe5mk5VYiwXfR6ic34K1mXMCK77d4dhgnvow3u2NX24vs1tBbvzwofYiXZsEG448",
  "key32": "kHm1WeG2jc7X2QoH9qSe7iGYevnCWVg8DiENjs4waukQ3rsu7q74HKgFnBvzgTXeULSDbicuZosrYBS8xqFXYXw"
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
