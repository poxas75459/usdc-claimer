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
    "2PFdQL1Mpb4w24dgigsqRxqyLyWuygux2JAQ2YMkGmYXmk8JW9ysbCv2CAr6a7Y3MXTLKRHk47QbpmL6ysQYsLQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDjPiZiEkDZX1BiTeaopQzbfRginXP2A3pP3bk4wV6w9v4pw9ZgUZcjza3fA2AqsfU91Z12NAXBgqP9Si7z9J4v",
  "key1": "2zVZn2emrce5bY9En7bJVKcwkoTgpXv8wczpFADkhKbvpqYpDugBjSNxAcmpZ3UsQGWCkX6hydni9AzmHXk3LsSh",
  "key2": "3Hm7t4SZT1wjLMudsZ45BMFPG54YyBwZXNmkJjo1xgdjRz5Kp5tjpJBgPXhxut4dFNJ9kFXPdeM4YLAizbsGTGgD",
  "key3": "5SgrofW8pTN5PRre1FiDHKjwSqFzXB5NWMdBMbPzfwjw2nd689R2ooJxHLHLTa7RkxxgZMPVSLJSXfKx9QZUSXYz",
  "key4": "5W53akM74BDp57x7zEm7NuxYHT83xEsnwbBc1hnDCwvuUnE2hPmndeDz7vrujUzJitztiB1ZCutEyvBF5ibs98jK",
  "key5": "2KfsTEPZ8VQoyBR1znM6tPAwnCtkowLTpHcmDhvD5EaUty4zqviqNNSHxBhpHFrZQbqYLNqSPUGhhLcbqytneKhD",
  "key6": "56uuCotgi6qUREyyMcVto4B23QegHf7v3ngaoL2A2caGWeX3bFdu8xsHzH7GJvpAHjir1skZLgerE6stzFPnca1y",
  "key7": "45M1oGZWoJu73rDFSW5KoNuBaRB1MeBtUzxtn1zKrYiWUjfLzBtVJvTuqWLwDSmtMrwen6y3z7MEQLq2ktVheFQ6",
  "key8": "4T358sQDDCU9awMk6jmMq1wN1KrhYMKpuuCoSPTVqrXd9TVF9XzatwNF2neRBBS2uzMuBWH3Jyv5qUsabEgd5rhU",
  "key9": "4EY8mn5RGuUcjXfyHEEE5TTWonnkTV92qcAzuCcajUJxnqu4UGvcoMY2opJv9FhfYqehUq3r4AfPTJou2pTomU5E",
  "key10": "311KUJTMRB4zsRTgeb134iLzbkuv1hXeJu84eZQTrV1xkySQSpPYiJi3DHPA88pf6Us7bJPS4ojKiXVY9gJWc6T2",
  "key11": "56ux7V2p4B2v4w2f4qCNgjEqPEjNUABq7N6TYwQcBRztw5v6tsge18toemzeQmeofFokC7BYqDNzzrRp3DzvwaGo",
  "key12": "8CynzJQWDyzBByzFBJUFMkHUiiEYbXD8o8bAALrCUzw7igQhMTzxEhUDFTgNcBo2rYSLGe9rRDH2mbUR1rJbgQA",
  "key13": "4bpXE6mr2QsgWVcQynjjDcfQewWPHCQUiN9XM8zU6ZvgF8Jb7N1mGqRm1PfzqzUtPy6QJd9LSV5qWbXHQC1ykn1u",
  "key14": "4qGRb8h7VmggzZHbKUrdXugimJ2aCTHrMpPL1oE4Db7HqJoaNCC3gYFk52zQWfi8nABoiRJZnFVPUWXr2pq8Uqka",
  "key15": "5AxEW5VCCPMtfF37GYJNYUprAqd89SNW6qTzGYdrkNB6u5xKrBDAkvhF5crauDibQawdrhumzjV2hR3bhpTrS4Bk",
  "key16": "65ozE9PMpmem6A6VfYa1C7poL7CmRdh9QSVwBv1zLGVGFLnxPfRhyfiSZTvgqDL66Bcz5ouWhNsRZnUG1sGguxot",
  "key17": "6n4mcjzTwUm94LrW1bwgNEAuPYCmAk39QwnrwG9Y4XX6uoyaxf1toNm8Rg261RyKWTDWAaTKMB5vMFxit7CQvx7",
  "key18": "5ceqM2vD2kpALCm9mXyYThhNvxdLNQJsU5hwwDJ9d8R85grpBjhg7XQW3YiLoa6d1f6tPsxrFNBHFXTn55gw2pxp",
  "key19": "z2qKvYFFFPAyJ1EZRi3Jc6n1FGfyGtK6BZcYJH6cW43d8m9aLfZqUGzhMoNKsPdVeyGGrw7v3SFYqDCQcrqnyFH",
  "key20": "5YjUDd6oVxMf8o1cKH96K5sSEKte6JBJYSYsDtFjnFXY7w8kJvT2acHtN2VKQHnGTpUgrrvwAvTj9dvPeWdpnhzq",
  "key21": "58hePFhsfvTG7ak3A5GMC1Lgy2LqVHFGEt78DmKZA9yeUHxMychiLPfHPDXxnsQTaKdUorRBRcLETAFSs2HZATJH",
  "key22": "5C4n2YdJHDCFZJvv4N3yo5KQ6FSJKDNaFRRtcXt1rdvyYdDW8C7fY6XpYLjSVbxFAhG4u5y89xJGbpLbxrSqkGJd",
  "key23": "VCfexrvpcvHRV2Eb74AGZFpsruGa4utFfd7MUp3LyJMzeWp9qvTMMyUpk1PHM85eYaT5KCwZL8wLA7FqnHRH3vy",
  "key24": "4eDxDEu67MCSwuMyTanCegb9cqrDdNd44tijVpdMLyhE77nyn2jRpoRjvAyr8fyUYYnkSVVLFdxbf521f9F6d9hF",
  "key25": "4FSYAfrGNnYbuZMkeb5QFpmbTr4FiakyHXct3N94hQMv6dRV99icdVztcJ4Zdji2gSdwDqu4xdYdUyYSd2A1Hi4D",
  "key26": "48i3ycbQnYkPFJwGLRN1vVtw99dN6zUD6raRpfHYjk4SLCTREnLJPeHuN2urdovHGDiHvuf3Ke2NasMftuj9BBgp",
  "key27": "4scnZMF7VvrHGbo7geqJpaGDin4VnDuXzwB1L5mwjSBFdwzNgk2udWQxDoC2LXx2sKsnBJghmhH5Vxu4xr9qzXT2",
  "key28": "4YrdGUp8AiXnKYu7HQc7cbjbna9iXFTsM6JxR1rD3p6GXUarNu83TRU6PSdzUZ1kjtWpQq7RPQUB8WALCUyqmvPE",
  "key29": "2UCmfN9jW67rBhsVgt8JAjemp1cpzZbci7CARmGqvhtMi8utyX3NxYrKBegjjx7xeC8gert8e8F4Er17XQz7d8dZ",
  "key30": "23wfom41kJoK2iByaXL5yZ2uAgDgvPWzRf7oVZUwARAsZqefGhWCzcEPTx5mhUCrsNsURjsyAGUAKZLozB1U5cei",
  "key31": "2eE2vFNcfsyN8oE371iqiKx3rDYhXfgBcuwL9etogu5QFmyjaEM7ZVURNw9V5HkE53xo9vQb6eMdu7WKRg7UA28q",
  "key32": "4394q7LhJUQjAAL3vqYH8HFvXDfBWSeepnn1s36nZDJg3TykMSR3X724dsi2cnPhSb1sEiEd622QqGXbBeRRNrPb",
  "key33": "4tsCGqwBg4pKMyZQcS6iGeUymLPoFeCbtJdX8WsbHZdBDW3Sq2gaX47vwjS8z9gd9a15DhTKbBc83xB7hH9n3jxG",
  "key34": "Z1NQriRLKFjvECAjsMZkVtPdd71gdKxe1D2t3YKhZx9qxiAMqyozXWXgj4NpbLzLCC2KLJzxh7vikj7YY7sNstv",
  "key35": "4yR3qQNEbj2R6oAq4ZNNLRDyR27iubCnswmstcnwS1f2L3SrLVsHYYDuNEnFMJivfp22NTaKEkYSw9eaXcFdsjd5",
  "key36": "CESHu8QZGyMVoNhZVzJdH7UZ3Fiza5HfbyfW3PG6CznBMSa5dopmVtBJ3fLvMxWdbfK7bQAZsnvx5rv6isp5S5D",
  "key37": "2QMAbNAQLPgU5xNFJJ7kas72ghWegXXmT64xpbHnhEv3A9T7ECtZhkFBUASQau4b1iphYTkPaw2xZ2pJifXquReg",
  "key38": "1cetCKuRimXAgTK66wc8viprMh8JUvFVEFPUEnBfexnm6ERt47vMcEHxPwmzh6nVUEVxcWYaAJ5sQPEiSLc4fnf",
  "key39": "3GwvZvrTUs6hXUUKaTpK6pGjbv786aZ1jY6xC4KGPqdiBWSwVFKharcybvrP1GbRnPASU9Y8b7eUrrP1qUJQeVx6",
  "key40": "4fCxN1mD8Eb5YQK3sTH3QmajzBHujDzDSChaKVPGhvAPJy8KwkHvifAZHD2Tq6coXQNMTDPgrs4aPGvAX7MbTtEM",
  "key41": "BZDLDfLyTv6wnWaw21uLgrgFXjcoSRMuk9uquU8XzDkLntFHTyf4R6F98n4B1FmKCTZ32BzxXS3aCJit1S8Bk3M",
  "key42": "4VEUcDCojYfPGdqjf9nALGeYFSgW1SSx1pyMHNHkFmnCkftgYFTxoboU8acaMq3k8ogDUG6CpJoQ2br6uA2g6KkE"
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
