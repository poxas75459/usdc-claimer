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
    "2nnW5K6wamqPbG6PZF7oHuA3Uyko2X4RziZMsUc3BkgqGWQSn2WvabdEuMmj3eXqCc6hToR3iuLQzjiwwyz69N99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bE5rriauVC3bPodWT4sxm9sEGNxiDuFb8eMbtjV9yvQztKnNNoq9BvSYZctWRro7eH1hNuorkp1rgzf72RJjkku",
  "key1": "LfrGVuYo5BXC4PwQcH8aRhhPSUJDRQ7JsmR57BM8LU5jgepLJqqpFjFcz22xDoo8CHhwoXzzstCBggYuR6zHZjS",
  "key2": "3Q8wwyhKTJeJR1X8QiQrcrJduxfb83Sh1BcCBox2sGv8ogp9g7KwWu4T6yMKVjuJXXYBjb95oXbyPzpywZ2RbMS",
  "key3": "4GJhUhbtpDf3FGXkFhnaBU3FvEaFM6WwDWz7ZUub3XfKcGxo5oxeFq6hPnDoAccKDShPvP5XWM3BHH7vrKvkWf3H",
  "key4": "5T7QAU17SLBezajMCUaG7RrL47VsD95JmrMSTvGs7QFSvrCSWxBU7PBbBKHXCzRb9bc1jaLnPqwjLuZNCAx78zY4",
  "key5": "3Yk45SCyhTxL6TWUfwjRVRg8FmEn6jwf5VmDrM4o3LtvBTeEujhPVAsmPk26UwmmCwqCijo7MZDF4jykeK4G79iD",
  "key6": "YJukhhzR32evHiSJcpL2cYUozDXpYUxuRXqtS7XtM9fbq6gCJtsDRJp4or5wrFYPsmP39hHxyB8Det5jHZwvuAu",
  "key7": "3oXJ8aXiX56hVwU5gy7ALxCXmN7hnG4Z5daJKpZBVWxsHLJqHL88mwmEWRJRLiEhFY81JXS4iZyjZcyMtZmmq7rv",
  "key8": "3dXJ64grUi4o8trkAFVZxDoEGekeZmX7FRAAw3G73PZwbaDBMYuE82pGz78jUdkoMrLtY8oBFf9R6RNqVsbDL6Fe",
  "key9": "2xZHc5eprXwwopPscbyvMEaQ1aFYqoiB1LnU5aZ9bQH5RbRmNuLFGHdxNpjsP3pEip6A6dRbgJ6UGrxcV7NpZhEB",
  "key10": "25Ng2fJSaTBejRp8xJUyvDwqzzswo1awF48qDr4yHtutr4P7ZbUNHaS43xxUfBZSo3k1GF9G4nKW5NNHqcgzyzPy",
  "key11": "4fVHE2pcaSbLeiXNhdBibBKj694LXNL1498Rs6JwvXJEWEJgeSnYrXUgrtPVQ8u9rEgi2R31kReHPsHJ9axoFKVq",
  "key12": "26LnmHJ9iM3fRkg8fF3cBfYN39wqyqaAGDYsjDazgCQmhH8dLvK4hERVWBzzkrMuHkt9QD7RAXkj1sXdARxKWjhG",
  "key13": "5YQfqkx4nmc2NHXytFBWL9d7dQcunQJPrV7CvvhNPh8D4hTKBnoovjFWawwCoPqJv7kn23Ac8nQc6WW4PU4XDXod",
  "key14": "23n4n39zSy8LJdABUaoNFwSMrAoe8ogxyWT2cwr3raCwpTAFEgNTVK1Gq9fx2cRU7G6x6gFitp8Pf41EjHjRgij5",
  "key15": "2vzMx6WepzMK2638ACLB8tmkNwQ6T7DVQ57oZj97ToXKhpD7quNZ4AnC9aqp9hyATw2pAdk72459HnHedKbYhmfL",
  "key16": "3VhpDG1Upy9hY3UJaUVSeFsNmWFi4m6PcuMAC95MNpce7uDC5nm5W4UqV1VhqcvrnuFWui8tXoQw9MmkWnw2zN9r",
  "key17": "4xTpBL4ejQZSpf7eV8s7RYaECJVQ75AtrQsLHfTgYwU9B1GcUUKhVrmHvEy7WRFHpScMxujBqr8jxHy1Eiwb1iiX",
  "key18": "aNZg59nytTdJEbn6XNppW7pjij75iVHAW4uVmS7GtUcQTtAYFGMvHXuqKA3PCNnWxZfSrdTeshi7q8pbTK5LHpc",
  "key19": "5DG3uGfGZEHFapZ2RRcc2D9MdeYDCxdD58HFDjKBQReoCSBn8PFB8Vrg7EGuMwLXbjKaKm1GdUttw4nGrzg8pye7",
  "key20": "3bNvgqWkr5cnrUExb7Zd3hkrAVqqtbL7NrSGoDBJpfjwVhUcRABPx2kLZf6Lmf4XKGWL2MsTn7fPBcdWKSeDRZwY",
  "key21": "3T5KVYFBWwbcZfMjx5guP96rhAN8r4epe3onq27JCMwBNZ6hGw4R83nhQbymKEpc3LMHZih94Dg8VQcQ24Vxstnz",
  "key22": "iPRk9iXLjVdHz1rkG9MfVfmvQatyhghdGd7H7jiWE3dJRLuSpAcD4upKyJnhtSrqxbKADcZ27qSU4Ss3oEN9iRz",
  "key23": "3hNx8Wyco2MSjibibfNqXxc6zzmyJDMx1BWBwq7xjz9tTqoXjAUN9vLEzFzXTSShW2mTuXqh2nrW3z3m28jr3DHK",
  "key24": "3nh3RpKwhP3CKpWC7qghcw34hdzjy1qo6GEqQYfz67iDGt59ZRbdYQ7vtE2K8c5TBhhcPKjP7uv9pViNZ8JA3bVq",
  "key25": "3JKvuhH2x8cmHHeSZgE1n27kRhZ3HSWZxiFjmmXTrdL85vHP1xZHH7Sv8vjcLJKuUKyh7uctyRtwsdqHdfqfwG2R",
  "key26": "HTK4vGmKAjkbCN3DruS4yNnP8US4rsx312KprEVECbeNJESQQgNwPCvbfEoaNTVKaZYUzW6uzyUfmtPq5tvmtmG",
  "key27": "5xWmYL9zDZpkc3PFu1hW5C2dAcJUarjgZdirgUKyvPXCaXbmAHj2ciiNmdqFqfyVcmmeNGstJZLsPqiZhQJJjqYn",
  "key28": "2yNr4Wyuzdf2UzU2EUCPMpk5FKh7qxkS7NMBwtJDyTgxdPRUbhkGGfgb9SBkGH6urRPphCut38nPhgScnAeE9y6f",
  "key29": "2p9w27VSyMubbMWhqRzx7jtZJUatDukKbpSVLyUSx7ZiSDow4wLNrcAGNwMjB1HobunSTjsnz3tzWwgy8EQEz74s",
  "key30": "59EHhaS7QkHvM1u5SJth83M4t8DrPy7GtVpPxLbwoMQcGmddoNmmaoFoHs9c8h5mqdT3EpyxHt9vJ9bGTGE1kuc2",
  "key31": "5s9ydZi3rWNvbWRtTJ9WeKsdKcvUQ1Xq3ahDunGpKDur1ccTwM4asU7GBctMFZJbRctcnFy3gR6RcmYu7AXfxqFn",
  "key32": "gdz1smAf3e5uno5jnaPWThw9agfCJKGX679KNbK3aemRhvM998un9YMH5SHyK312DxtAQ3GTodb6mJ3KvxH7oZG",
  "key33": "4yeW4HFjYK9NoN6TYePRdYUU8dicb63ukHH37xBkGooJ5BdTTGiwDnSuy7uBdrHh4kNRD3LqMckV3QK1W1XuMsvS",
  "key34": "38gdsbBedT3dTwFYFvrZ3JTXUx3nQA4UwHGcCgoAYm4VraJ3FWpxhe3Rsf3WHCUyD6TuFmMWn8XpqZV3K9c7SwJv",
  "key35": "57YPcUL1aTaf4sssuTEdk83gJLjjsyB7droVv73v6krvJtftq1LcmK2JzNbPcx4rnAYw4WxXCFoUHjSqUH6hCMK8",
  "key36": "dDNMx4WL3wQb92zTjnv5Ms4hJuWeQoUsfCY1qKTMq12jwo1hDEFhctiEHNQPrRrRihfdmEfb2gTmfMDFgXRZQoU",
  "key37": "3LwSQ7fR3ksAugjbzMtSXEvAuhtdCvW7joqNmAAxmSN4Ha5r5wfheDoZrorpyCnEmJ5bKUc8UT9K8LdC3YH9K844",
  "key38": "3PNVt4FhZSM8RKeyQ7qmb3HZhmjMVy6Z62X9ZoFz1QiPeVntoesqhk5bEs4gvaHERC2LJze2RFCe1JpZdU78x7pM"
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
