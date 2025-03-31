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
    "4tEwBjLqEevpaCBGSHM5WZhc9FYaarFw2hi6nuLzXtKz6DuSAKZkBhtDHT5CVxCJe5LUAkXgnAhszV5MuYz64v8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HvW3w9gYdwy69NdE4iQWfCcftbhYt2QabfHm3hHFkznnnGBxfMw3Xa7tc8HoLNj6rQW2rygo1grH6jSYwAfe7Af",
  "key1": "wCRsA3AWfhUFzBHsU9yyemzY9xtEfQiK3JduwVgihhKzV1zFhotEopUw5a4afhg2LmVg22uRegtPzfnDA6UMkS9",
  "key2": "5L8nsyRSMUa5GPYX4cxcmW2ePZLsoZpssgFNtkpxHmWKeg1CVYL7XweDK5SrkCw9socTx6dD284hPF6X52w9Eh27",
  "key3": "2fFgLJCu2V3tXMbtz1aqb1AevPL3R7aBU2b1HaRhKbzNK6D4idVpF76zUw6z66g27XtCiVCNsxMRatJSdbSkxsRC",
  "key4": "ebMideYsqFEPEdbrSGDwSc1Vp8Yf3oxv5NP2iVHLsT3WBYDVg8PrSGrewSgpk2SZpgzjrn4bMeSBeGqX3wHynep",
  "key5": "3uEy6X1bcqvVYAJCkHYT61xq4wpXrbG6t2ANa6QS58X3d7nDjLgrXQiy8xBzwzqjVSf4ChP6WcMKYxwEMv8baVK9",
  "key6": "45ZPwXThLnfrLiYjCJmc5TX1tM9VhKRWSh94EJ6EAGa6NBuPJZjExrgQjRtJbjZrYmkv4aLvaZW1nAWJCm6K8ndg",
  "key7": "RCVHK6mqJEoivLC8RDBFpnhHQPbaXGv4gg49VS3ewUZ2pUEUxarzGiYNBGom9oFtKqeWHcGEyT3xNe15hev29Pv",
  "key8": "NDT9oH56HwCvsG7xfq38jwD792iqubXXW398oLVVhx9yPqLCv8ZQLNhaMoajsXQRuHTTzFxMgzUBZDePG391d1S",
  "key9": "4gUS3JEYrvhRimqwoEaHBFin1EorTtH62YSaQCZ8cyeURHSzdwCva5G9pruADNh7ZTTb2XH5qcRpVcNQggEx5s1u",
  "key10": "4FsxqpjZSCVKoq39nEwHJXwRMXhToVEoGSxbDvWCydXnupVvQbQgs17zhXF4YaoGMvnUJRHfUpy1hiePCp2ELpTm",
  "key11": "22wvzvzn9Q5Xtn8vmTjZfkgw8P5kJgfBEiziZvistXS8XD4g3xYNybrmF1EoYZvKehEv2bQtpZ1EX9gWw22Gomtf",
  "key12": "ZZGmqvoBTvPaBPmDZEnJjNjcsxxUCyQ1Gx6uoBdvmUhGrajnCxSU7QAsTqjcKZsfcmHPG3aHowCCCVQzxiYyK6r",
  "key13": "2xj5ymZjapzGZnMMUWK1dyEkjU29PRs9h2ctfr7RsFjpPny8Ar8t7z7DABdVdAxqbutpuJ3KzV2ZgL49USdDdAph",
  "key14": "5YoMwyGQDKFiqdcxouK9BtQU1jZFrPLBFQL7srzkKo78Q7Ny5U2x11TBHJZDnihr1gLwyYvWHCzEy4SsLs3mjzu7",
  "key15": "HZDCHSg5qJtUDFvkovZ62wQTMtVKVtZuW6yvfFq4zS1JE4df2uVqUNzqzY5btXXCHctEzmb4s3UvLAfesst8fF7",
  "key16": "3zQ4C9e34vZ7mvcLGbKFLdeEjNMA8AgrwZFgnXsnmZ8BgN9gRH7iBCuCvH69bWW1QZ21uuPrX4fNbw3ui486KuZx",
  "key17": "4twkNsGA2gw2Jc8rDGmAWupDQLSwSRErBfAnUNF3H3bkH3BG127xNGrDCpZXQmFPB4hrLyvQxmGr5FeSzNF21bpU",
  "key18": "2gCNJVNicSNBEop6QQXFLp3vpPLz4yoQvd1g6uPLBwa9RhFZejtbQneq1G8HUD8KF71ao2B6eHzPTMBEkAhKawM9",
  "key19": "5MSrwi3Xnj9tpwqrqAaj1pdMraF6kmUHkUdvTF2Tt868drb7MXtY6oxBgaKyRxNRmi7uUj8qzQ53utuxyNRieqDG",
  "key20": "2Tjd9gpFRi8KS4bvjehxR4mPqqTAEVfRT6FGzf5DyYEpQ7abeShBWatjpqUac4mSA36z8d8wYCqxXfQ8yMCwUQtn",
  "key21": "21AqUSgCQzumcGJiEuaDmwLaEjngpF1Bz4DNfR5RsbpR8iBwWVAaCJkpXEE8kKEUSTzrocQubuKtiRkzKZHtVCax",
  "key22": "52NBTKH1kfvPuhk4zUQJ7Wrs8T1vgENd9R6n9D66PHhfiCB7zBMjXZiVYVAvL3CmgKMapAKhLBDQx5mfe2xYuVxt",
  "key23": "5mopD9V4Dnp7dhDYtm3z2dDzL6xRYwT2XahFLiQu4kA34MeiSBP6j5fX3B4zA8fcwN5dQMy3eDrE2Kmg3MK9oUYX",
  "key24": "4jMmybWRgNwxg7c4wnZ9LYiT1mHNaEh1LBqLvqYe4a5XYfWskhgAAhKx9cg9NPT13mrtsnisdojiSt4GMVCux2Uo",
  "key25": "4WtmHhvCxgy9E7F2sjRBeCaq4icDCewg2Xts3bajVRsKP6ECtRqCHDZ5ezzf8bgSojJEciy16bgxFXw4mAecLZb6",
  "key26": "d6RtcmNF55xsbgrZwpgrrsLLXUhM9RPpTPuJ2gKES4WVKFZak23VXPKaBo79urLAbY5T35BkBiPkBGi4JH3mvA4",
  "key27": "5K9Utk76rA2bmbPpa3KF1wwdFRS3CbduBpdQBuTWWiNTxSevPwURdSdbuqsLV9qfhGz4YtfwCkC3E49QfyEnrZtz",
  "key28": "5pNooe4t7gQFLCRVM8vMrJjPExiGQonqvYPQEPhz9fMuZNkfgPHn36irUM5TEZdsCAK7VAQS5avfY5jmFBkcxsDe",
  "key29": "2wYZq6AHyniHKDBX5c4m38pj82nboquZmtoKbZRUaEqNcp6g3agp6qXRGmP3QmZgFB3o2QpABYy1yMPffr9csDBd",
  "key30": "5LCqUad9yNCoFUtZ15HpabTzwPafAh1YYp6orYPnfri3V9jDGnDAmZWZoWEFpCmaFQLLHJv9EkgVdbE6VfWKYeJm",
  "key31": "4MusrTfsDuWSLGSr68vGmn1i2z5csfCN5v5EbUWFHAbPcuuA3Kxm9aiuHA64uGXN484oeTa8amP4hjS5A4LX9Dqj"
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
