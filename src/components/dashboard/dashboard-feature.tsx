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
    "4sQ29gzb4nUYTx3BiBuSVAAaaF6zGpUFJ2DZR5M7KneVXT22P4gNAmZTSvtUB2cdBt8nGfT825CZu8uMR9GxwQG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L1CSDFifYtxvGQRu8WEdZ9PDByCo1FEyhN3YDjDbPHKMm5q1yVEmd74xftshE6fmienorq5bKRbudZT6KEgMx6W",
  "key1": "3LsS6aQgsgcEo1vpz3AkcCSiHxMuMoRqfYte12A2J6W3K1t4Uacpm2E4J2Jhdrg1EPbNzQ6RZ5pFRFvnECbjZvMD",
  "key2": "67MMbT4V6KtoysgwwiR8scwrsbCDFDSEVBiUcv6hLS7DL88mEySFh79BUW5WoFVFQRX1pkZMRZEaSoDzrZn1WStH",
  "key3": "3EeNo5aRs5nih4rt4GjqNQVaR34ZsRQ32bHYXVsFSsm5WxbxJwELVYKQEX5Lpb2tuVfNvY9yhCKZkCeGWhvf7uZ",
  "key4": "6jYGY1pyPVFkbKenshcZNUUn4xvPKuUMpi4nLiMjjgqKa7898PYCgBacLZFb9d9atkz3C6Jh7kGFuBKCAM3A9x1",
  "key5": "2aMpGoa66VUAdYpjLjZ3PRp6ZR3JjRxpzgd3tQzV3M8skkXfLXWvbFuFpo4d2cyXV3oD9KVYbAuFAR1667f7AUzS",
  "key6": "2LgZotM9UCSmzLE6V4HU6NyGQ2C9yCEPXzLJDv8EBaK859re8kVX91BxTtK5G1fDcnqqbb9YPUaoeDueaQqkwaPZ",
  "key7": "3bG3rLed5gD2Szj9YAT8foqEQYJgCz6MqAMVy86n15FWc8JudPRi4RW1KQFcJ5KvwL38XwLNypMHL2wY8Rba9HLL",
  "key8": "4ZVjTs6XckqcJY8rHKzmiSVVCw5dM9aFsYDGoQ38pfAWkemTfRKGwY6FMFA52duBJWfADXQ77kuJn84DG1CLUZMV",
  "key9": "5vohXmu57fDJTtkRz7U6gAGZNaTB4H8xyBsXhpNWTpuGDiebJwnL5JAzJtifwLfrqxM8wcJPTS5viKgu693UA32z",
  "key10": "3CChHgHTcDJCeyDt2qWW8roG7LeqBaZiP597mno5hvHnpEZMj33uTQDHUiHhW2ixyzqAKEAnhT2eZZdo5bHi1LCw",
  "key11": "RACWLXbyCTJz3guFPtu96CbmXctL3yYeABtLt2u5ib92bBvHuRUpVcq6rZv1B6sQ9gntZpBsPs9TB31XSwaXji5",
  "key12": "3QeBvjqUBoAWHrx83njXjaUx1vZBkqgEXVeyrRiBXHacuhAYukKqqYGWpnBv8kQVHjUpEu9ftifSHj3ksmgtKWiV",
  "key13": "58mhEwCZeZx7PwmzkYqqgHj9C3Fv5GWgZPjFRLhU2bPQvT5CBSBxn1er5HgvpExaTWcG15XSNqbPrENdZF41DyhL",
  "key14": "4GsR7Z6KeQ3s3Y3DrKcvPKWTAAff1GbmSxXr9b6DMuzyMEPRZK7ShttAoDXnQbe4FHZtPP7YnW4n4zxdxDVNNCbY",
  "key15": "3H2DcXWgGYnfzDN7QHKE4AoEpAZJpKyaJrmz77Jy6DP5eTRzRSVPxxnR2TDtYYmXPsEJ6XdbyzF2k5Tb5tHzJnDU",
  "key16": "66tn5VpgjyHZiboYNJdgSGRpJJ7Rj2F7tu7M3iMBd3wySSKSAQrrQcmP2S66Jv9UdwgqjLvh8Tc19hSJesbcNv7v",
  "key17": "2HDUJBQY65kVjrcbJjsQ7SgiDkb9RnDUHrKPpBo7b9dMNAvkrpEjEuVW3J54giU7BMKuEsZBy4Juen9aaVshjBtk",
  "key18": "ovaxwXSknUMmikCjc9G5UjKLGKu1ufxrat8LJTDKuyzsDdrHx24dFA7QLHvxqdThfjToVRDX4JqFLTAzqy3bL9v",
  "key19": "h28kQ8gMqvgsWQjqXheignaaaCkrxqZhVoQNdH7fpXwBsQB7gpad3yTGRKzLyaKCRWuVUYdzQSgXAdjhi2ZNZP7",
  "key20": "5QmnxYgfTDbvyMbKAjq6FkAdKmgBhuVgRVRBGVPYttyjhL4fJXTGJNq2BXRcCSwqp8j25s95UqvCqi3Chgk1F9yR",
  "key21": "3BQC6fPW2UJV8rjTCBznj2tZJ3tAqT5zCVKgkHczkKLc7eoFo4DMT9REJY62SDPmUrKRnzeNPCyqs2sx2soGgePU",
  "key22": "4iL5MWjq7GZZ2eXsNLUsxGJ4Df2CWGbnv381RJkKoz8bLcjhCbQ2Jtd8UouvLHvHNNUc6bst8AmZvznfuS3u1aaW",
  "key23": "3jMUufkCrCzCP1z36rm71hxaL4PBCQm1RWNGvqV9hCaiJ9s3qdaM8LcCSRHfYtWdbZxkq4bPPrzbRYriuF9UasnT",
  "key24": "3rUMNqsjQ3R1hD6zoqvq9Je1B5vB9A3b9gPCZ315cxzdtpv2pEUTaGtYUzbsEC9r9Hjbbro7MHQ5KzQGm12mG2v7",
  "key25": "4ky6vPKVdtx5o4smkEtcNSM1GRypfx4fCJjHCt9uUVrsjAD4HKWjcHCDxRbKr5gKqhWAGpyokXis2tncZ8nufUHC",
  "key26": "54wXnBWE4tdDPaXC9zPzKUyesd5QvkKqga3BPYg6mjUoS7DBsmAqimX73kMctBx2DsANSpiqE5j8Juoh9tS6RpRf",
  "key27": "51pXGeXYxtq6NUZqyGRXMWoSkmvu4T4SBKmrpyWjDoRkMaA8Pu3kGxEmbPSqq46vbmGG8xwnmRCvqdrVfH6EUXRe",
  "key28": "4TSKhyixboVgSw41Gdxhr9PkSMmuraKL1dXXRfKvvS5Goe3VvDWJcjo1VTQjhc1UFoS68TSXbb53qN4eyfACrjbr",
  "key29": "b3CsZZL8gz3iU2XL6ZXxunwMx7pXiVE1zx2G86CVAGDWjMU53W4GM6bx4G2rBRuHCTyzh6WEZimbvVRMGVt7Xas",
  "key30": "dtKRZUnC1gXHx7n3gczfGE4au4QSrNpab8EkjjPt5SZ6QfE3Rwkm5p98g5CujFhZFH7QrSiFGc7ZHp1EA4LuvpC",
  "key31": "2hG26yqkKPsXHpnecD4jRbgUVnfYgQii5VkMJg3ykjRvvU8eBK7Fopvh4u4XVppTLnBg66ZjNwNjN29PCyDrgP6Q",
  "key32": "VwhtGWLJhs7X9w6uP9dLas96KFGHxPmSRkehD3y1vRWEdoa8rWkD68DEiNNJMD1PC7WFYLiFBgx5nQtM5xvJJZo",
  "key33": "3bVeR4qjZi1PispSLJVtmRwgGZi88sXbW9jPMk96yRRhA3cBkwSLvutibn24hAD4Rk84ee673YhQqumWvbhfXYXs",
  "key34": "cz8yzqR8SArsB89WCpC2nmVz8nRfEX4AMK3GeY4PWjaXQ5HHhLKSyhBpL6vKLAdD5X4idMh7snK3vmWezNEfsZY",
  "key35": "2kvN9gANBDR6mukyomKMrDGh4kSfeEwmcxikcZRzi2m1kUniPT7fHuNgzSjaUx4tX1P8Tj25EnAiFnXDsmaCn453",
  "key36": "nwppLoSbUHP6y8AyM6ULtPZAQfSfGZQnwLVjYLtUxxuRKtfvFcogAGxsAcMFTBzUzQn5EvDcLA26FrRoqgWWqsg",
  "key37": "3RkZWXJA9eMEqA7tNFdcERgBaTHxyPCUu615zHGUQx9QCQcHtJpDYeLz8tkY5wH53mY5KpyRxvHzVeeA2K4djhLW",
  "key38": "4fsbe8isjMi2QCA5FNPnhaWymQh7vJLa2yuYj4QAa8BuKFFvNcZrbqnvxCj1C9NCpAn334SdozemfZxXKAVPbwED",
  "key39": "5LzomJjPyqu6Dqh6ufwEaVcwGzEcygj8WUJkbcd8Si49kTtLtviHVs2YCEDK6b7oTpX62iqzBk86WN4YeDr5Ct2U",
  "key40": "2uj2NSVBfweJW6s5sfVc2jFmmqCaq16PyQCCuY5x2WJCdfDbgaoVz2AFFzUEYp2wMQMz6wxtFs2WQDgxgjMVLw1G",
  "key41": "4a6EqEK2qGzswDnD8F5tE9FYYC6VXeJNS3CcSNUq6Qv4Eq1QN7dappsyb2Gc1o63HbmgNUJeJmD8gdqoEmpmx5Tj",
  "key42": "wX6hCijQ5AY5aUT2wgph9NY9bYa8DM9dQV3YHujYBXJi4BpmwZ138kVcCSUKu4CtgsRKVctutuMvppA1K9ThEXJ",
  "key43": "4jALocmb9xX58J7vKjp1TAJhdsVcwPoDmx2fAwN5SegfVQJA1Vq75m5Sj2ndzbMbeJ5v1MScY7xbGFiUycTsEQnC",
  "key44": "32MRbpiWrDvZA7rgjPFhq8KwL9VqUyRUkoiSmUbTFS7Mjxrka2prsADWVMuNiMeayrEM2xrySV7y8DznSx6dx15X",
  "key45": "27DHcq19R6UV68XJtp5Y7rec5c3sneMXizY7EYGXmEFu9djm2Q96PMYjPndm8mW7xtiw3KwpQnzV5LXDBoRKQ8U3",
  "key46": "3yhCTMLkNR65yuLduNRnR53rCLyy1LE2vRsdQEEsZXZuJUJf9RpduKhMCpM48WvPkFQrhfiYr2MKpuiUNcxpWiqe",
  "key47": "2KiQfwUmbbEMbvMbrPpXkmiEe1AuEb91WbfwZ1qdSQ4H68SxmbPNN46H9La2fX99m19BgZbTpZvuGi3tiN8aMV3b",
  "key48": "2C9kpvCAAwNDjPRsPkYHTTkragVBf9ZLQN4vNMMsq1a3pmcZgEMptDsPwNQhFr4f3XVwPBkb7rbBMkWrrgTGSB7M"
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
