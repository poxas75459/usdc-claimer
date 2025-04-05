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
    "2ifLTmsh3DDbFsd9GCC7fxLJCRcGTmxXXzbdNxrGe8Q27QbkZvjMgHK8Bzgj34W9rskyeotMcj1zxQxfSqnEcp5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSCM8w36kJH4RKtg4kpzRd8cj7h1FS6aaVXhKrZtHV378D6XJrDDomFBmYk2LweAQ34SMBnsNbKGkkf8G8jWPaW",
  "key1": "4qX3Y1xA6GRbZaotGKCB6EiZrb9j8Nv7FVRr68E88qYQ1Te15UGHZFfoDVYPCYVfVjMt1sQjVU22hKsHA7g4yhkM",
  "key2": "3JkDvueoc9wYHuXdiBc4S2rhEhCaXne8WQaV6dG74WsPE8wMqRijGwSZcBsqJfiSpQbukQQ3Ex7DGL55brzvnrhQ",
  "key3": "5S3SCJRD7PfRqbcTxAKuo1VDZ18BcMovVKV2LHGSfMr2exRZGUXu42w9Le8q7EPUJu3NVWrNMUAxU31Td2nDRMCY",
  "key4": "2RUdT1gALejFpTUSYAHisgCMJW16JhLHTpdxZ8w4kzRYRWb7HxqzVYUmSPpZixoMDrN1ZWRpnQMWhgZ17FzWfVn9",
  "key5": "23C9u5qWQCKAWL7JcMHUVKPrAMs3Em1vcUYtkQCr6N1X2gCF4nsoKYGHmgbwX9R3AXJtATv9xj391G7pAjUkfZGQ",
  "key6": "3zYzH7keauaenVKiALW6RWoMuDJPi5yjvGvyTB8gE5g2UsDdF29CKeQq7KMKkMEtZzVdk7oeYJPqcQGrjJxrQrQR",
  "key7": "4Tj2L297wq1jKcwfsN85fs9PxBm4dBBHgtX8URxvMBzGnG2K8GqSuq5xNWkqr55Je2QwVyqS8zqFedwwq5fjH6Yh",
  "key8": "4ez7nz483Scq1QWgLHqijDWAm9StDbLUmWcmDvbmg6RyhRmMvb7TPfrGt95Hy45zToi23bV242XqyMAFuLr28k9g",
  "key9": "679cBKs4pphPSYj78qBsRkoB6ugc53P6SVhq56NXzjE9t8bZHSj3a35mHpqrhVsVhaE5REHBpUSJ3TVT6jhP4MSu",
  "key10": "2p4GccAVwMRuzrF869cU8WoFA2LDcc1hPUHxfoBurkHa56yAFspPXV11z9yShttVi7RnurG2KxE55VPjqM2giGwA",
  "key11": "65APR6mgutpfDqoN1gwdNawsEHGiapHnKnxCjP2TcDMoSdoEf41t7v733bFd9xx1ieFpFB3kZZZVBvxYoMjpFxJi",
  "key12": "58okBkdjdJgb5CntWdqhWQLS6uuZ3yWgktvgkHtetKrAKeieD8utC43WpqZ3p8KcE2ei2ZPmmanZz8P1xZTnrFU1",
  "key13": "2U6GjW32H1YKKFyyqfoAuiquPVQytji3yHNQd7eu5CXtNb96UXF7JMNfPFPQLvKUbhCaFHezCb9wS4hBV6TbAvxU",
  "key14": "4ea5au7R1SUL6wQ7q78QoVHG3AYNQdwm2ogQZAV5QEeNDCzsUygrWGH49k7UvEiYokTyjPBGpdxjKiZauew6ixKc",
  "key15": "FSZe9MLjtiQPdN9R6Moefzdxa3gUuE5vidqUifqY8BW9vR93TV4TpnLjBgm6EkERqw9aLbFP8BiZvMxupaxvWL1",
  "key16": "4zT5Awcs5bYVMw8aePquuWuzKH68W7XF3s2o2ePCsuqZ3QpSiKRPcpnnACnfkEBTEPk5DrC9xsxK9skT1aCRKQGx",
  "key17": "2d979rC4pMomxo7Zxg1sD3S61J285yDytjKGzGT1tQ2qLeoKYZwbXppAtrA7FQa6crdRicCEVgZXwpu9q2fmuDzx",
  "key18": "34f3rzEUvFYzjRyKnXo52iphVs4FESXoZb1dey5qbRQxURYPHxXZr1M4EJCbqia9JYn5XTSffr4n6J1vH6W8svey",
  "key19": "5eG2a6wVbtRxKkBSoT9Q6CMmRTfFgGWDWCY7vrC2bc3VfgQXKxv8q2Uc4KQLQimT3Rd8CjHzz3jT9cX3cREUQrey",
  "key20": "3nfraWBv7Ed2D5EBnHPb9T79wPrF2Wr4g9rGSkHS98N4RqGGxoT89KSnG51HUnaYdAWeiCocmaygk3VTxZ2ea5wt",
  "key21": "5hdYF4RbuZ1pYRjbTkuBhPbTnGjTArqpY2A59JLmLNv8dA726VZ3iZcgKpzidwshH32CShptqq1adXXpgTU44pXj",
  "key22": "2mBjyH42a9MNtEYD7uCcQtKUbERJSFeGrC1LGSfU8h5qPhHy8pPAC9GBAJYzBkn2LvKBq7VyiETekhPwX5R3vUA5",
  "key23": "2UhFXmCsi9VzqDejr9zYv5coRTfebSvz9gU6XHja6aBjxAoZB2WsgYzx6ZABH9tJqYxRF8xVfvEc7gVEr1VSaQcX",
  "key24": "3ZgJKGBf2yB7ifj4cL9hPY8vfViZXbdEqJiayTiSTyM5o7xjTGFQPTSKmTmY6RxanhQSzcrm2P95toJP2jFfwYiB",
  "key25": "5maz7CiyzCYKqnuRicwNpWBVXZUAdcL3X6nXPXSWfgjn8vVjTe7GeTwZ1VGY8WQobjYC9ijwT3VivaHZixnM2J32",
  "key26": "2PzCcnjoAQZTGxJJLfcEgLtyDu62KC3ynsjAmXqZj9FwX4zZBEJPiShmT6CRL3PtWeYwLnp6kRAVpS1ga3sCmwN7",
  "key27": "oUKkm6oB4ojyzzxfGyPimLcH7SzFZMuxFnveMJ4ip7ntRHH16iWW3AuAq9nTAnd1tnMbEbmBW8sUX8LiMPTC5ca",
  "key28": "3txaXUxXjoRMM7EeRUzSBMbFuoHhbeRtFi1N5EcTGv1Edw8NiMYdwpBxgfmivF9uCTsMHvrc3y3rj8zR4nFPV7h6",
  "key29": "5Z57VgAouNYrc2b4AfGv1Auzh7jegJuewHtR7WghAxhfVz974CVohB34nYcZ5tVofqwm7kATD4sCpmKAtYjSKke1",
  "key30": "3BYmdLCXhxYRpSyfvuvXAipUgsmc1h6bwNBeYwJV3MLWvLx81AhqY8yuLLKx58XScfeAhwu8zktJZr2Ttjx5gYSE",
  "key31": "3ivjoMpcgQDCdiAWJwskH7rdG9fPYBNDDid7xyiFE9eAJt8PzMN9D96y7ftYCkgG1mrJe57myALUWUhRrNwMznW4"
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
