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
    "5Jpqkfz3QPHM8ox4hYNNsbGd3j6LYFs95AFQvCQtkjupSBJxK5LHCNHAXVLa1ShwsCaGtGdBUJNTnM13LGh6C8au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ifzLrb5yoK6xm6QHCZ7TsnE3MMoSodan53KQNmNYR6ARNVtDGV1vHuzxJq1uaPTQ9iRXurpjS5MZue6Zbd3CD2",
  "key1": "h7rc5Zcpg53rMDUTUQLXyMqZNxiJhEHv2ygq9DfBJPSF2m1jYgkzyLpFmgYk18kPXdzk4aEDdKKLaaXSEcVY8yP",
  "key2": "5f89r32QjLKhp6D3eHAGM41xcyCTYEAHm7cmRPZaVYhwoLhLutTBsAyj6WjY3khvxsptmKpzbyTsanFnQVbUGhoc",
  "key3": "23w7kJ8dkBz4KdAdPWAT4FddQPcUBADc8Wx5LhXaWE5s9amMvjURuvXh8rbJydrpKifkZuWsgwHEXD5sq6ZHXBFY",
  "key4": "22P3UyBe4wmuagCN24igEvTWFk8WQ154u4KGS3bEgWEgths3tnGZGGvGDbGrJUnXocaKAKA21N2H4jfaAuLFk6PM",
  "key5": "63Nwpth5ExqE2j9egCicPhD91UMbnucrmUXcwBWBky9AYfe2AkqbYFDsVDirLetbPGcMTGh6kSwE9cFizRY6ZXYC",
  "key6": "2U5az5FF7ihH8bszNRGAhXJmovhr9rXtGBLsGKfTATP963aDkwSmhjeZY4xHmRDcnYnLBRVxV5r9WvskwTyM4ebM",
  "key7": "2Q4Yvr7qKSvtnLXRZdf9j8G7H7PopQ5HP4z4ARdyNGf9CxX6CQFhVHCewWphQPjk5jit5miqGtro6q3QLwMMVbxL",
  "key8": "J1tYuEYg28YiZzAmCvDFr6vmWirk1pMHzLKhYkfDUHrHd4g2w4cetCeWAqxp71y2ufj4nmMKTHFGD1zgxMJk52r",
  "key9": "3BHwifugTTRQFqkLPjXuhgwvmJravXbEtxHbvSSsBkASyJvqxmRxCMoycsVXx4eAgiVzoRgkBViB8DBfSk1XuDCr",
  "key10": "5XuQnbJXPetozLYaMTTLqEggWxLkjZtJaVxTdVBhjTJQ3yuibREpFGKen72PxTMyy5Pu3KDqeicGobdnmqJwTu1T",
  "key11": "3h22Vs9MawzE9VkMuDWxo3bHr1aEjWYXK5knbhTmxenLz4xoWWxumJNPXhHoESsTDnjkGuz9hw3QK8RsrYmMYAng",
  "key12": "3qhoekzQWnyPFfjFrQbYn9gwhkJ85ymxDr54GF8yWtL9a1Z9fVCWNuWH38kSq87bwbe1qv8Pn4h6TzBYEJv4UdDm",
  "key13": "2PGEZHHf4DzEnDmChk4p35aJuYpVhiDKqXNMaxA8vpWGynWrZfqNQt5AZgmuYvn7DGds1Fe4tmULXvK1YtBtF2bK",
  "key14": "59Vdo3qerpVJNqZEVpPT47nYBYoN9TyPEqBixMpujtRVZrrS9N6oJpwA2XJXkc3QGrCdhRHWHitR1XBGsCbUoVoJ",
  "key15": "q98eipHdRbPYnL5Dr6huz5VFVd8dgJLh6wjd5oA1x5qbtu9fSStdCzDuGxXEQfb1qSkuUufVMgiTarhLv5aR8S2",
  "key16": "4FcMJERNadXfxMMpwRgvMngUdwo3a3TyzS5kc1Bf4ujVwXxCbjEYRqfy1eCRToqnC3LQu9BmGS3MMDTYxsspeTvH",
  "key17": "2KpVA6KWmXYQJWbWpwoZdxsCCGykdJnZbmmQiUv9qdGWkoqTmE2rAMcQMYquVGqmhpFBV2sfpAUutYhxScdAcpRs",
  "key18": "3L4P6M1HiyPrMgH5QvCDd9JvQXJH2WcamvpPkinLEvBmWmGyh8BRofMs6H1EkvCr2pg51nqHrxX9toPV36puoFP",
  "key19": "5X3NFisWBdBq3Ucnf4p4mJRPmkk8zKk8vRFCgjVbR7FpoQ2GBtHGtFQZvN5VgM96hhYcsLwT8WuPa7nECjtVQ1Wu",
  "key20": "2DW1FXTrqvt1fJgwBz8T3dwtq2D6Ha48RASTmbw2GvUMSVFALGXSzPhow37ygjSgoUqt4i13EUmjUErYxU6McVAZ",
  "key21": "4ffGExdCBzhAnnwtcFHfFfx6FmYHRDmTzhiCkRSumgxmGHoeJryZiANXET2rhfXHHxHJzrMwWMiW885RwMvFLaYn",
  "key22": "2GL6TeNgMsBPysPjSabooZL8rfC9sgKK8TQDxkZ8vk36T9HNAWpxAfDmii8LrNwowi4N5Fu6XegKRzswPMA95Hqs",
  "key23": "5uoKKM1hxtzd6TLf7BivfaJu5fe91sFKVQeKtwXH8xbCJZbXuSadpcpT21FusC1y5GhxqZEizUeGeXSfWhgoR8xc",
  "key24": "mixmx6r36DQuisW9xBArwMUcUuHoLF1GRzq35c6CcbtVeQcEmLviRdqvrDGSNxB7RfabrqpBYZisSEhmuCh7tqU",
  "key25": "e3yrjrM4LKYqrYVU8rdARz84AzFgsUaVxDtY2KLndB8sHRkEMZZ1jhirwSAiDQ5eBYmCMe7qTP8VuGKUVwhfGzX",
  "key26": "2vqrKqBNbUeLxFueRCb62G1xQvL6VayMMCpSYVTLGfQVG1DAkrxjCs2DN1Xm8Q8LcmFgpwbzJWgYoQMBibAvqzRV",
  "key27": "3B5zbRWCDhS3cuYRyfzk5yQVK7r8HKXk7V1LPgXu2W4UfEG7ZNo2f3vefPwZq1yfesohLCYPE1fGbhoi8NbfHGaj",
  "key28": "4dnrN61wouWKf9VSSKizyvspM7bdn1FRKKWvu4z1jRNfqtgwMMtfJTtRWBpbsCrpQVN4b5TNSNuieNMAXZ9To5Xy",
  "key29": "PHZ3bYwWhoHqujHEFop9nPgDcFsmGzVCYLeNL3jdiMRAZMcNwmb1nrryXUxR1jqp3NNWf424GqBC8CPGKcfjsjN",
  "key30": "3oSkbGBBuLX1h2QnHFJ92fyA2XH1QcHSdpqJx89DpAUnSciJb2HteZP4BbGv45UQuNTrVcepFzC1jdYJ19uLqKFs",
  "key31": "4zhAruoB1uguD1vcMtofE2JW1uQWHP1fF2ChFRS3PQditxxdvJ4M3LVD2Rqhx7ZzKbRVCbc9uTswPvxN7DgsB4mu",
  "key32": "4FTLU9WqTETYx1PUD8gdZ63qxbTcYRxSz85Mn2QxbXKP9Q3jh5VEtAQaQ3bHKbZSfPF6SgdQ48E2LskJKbKvnAcW",
  "key33": "2RCVYtSacKnbX1G7k5jCwYCdgQ7H4BFULCohbxBQonFJUbGyP7WNvU6jNDF6npaUcJGke18GPBi3KPZtYdiH7jL",
  "key34": "45K4AztdNZf2P74RzEQgpMMYz81kbtHqa9KXGwXacdwKQSj6N2RsjYGZs3zvach4RppZFejAN7V8Yv6qbVwAtjBr",
  "key35": "2gwdbfqRqUfvXyZXSYxTVMyiFvR69YUQVbKBCpzBkeQu71hKVq9NXnzbCKDCBmnBRd4fhy1eRzDrp8f6bu92SGnF",
  "key36": "319KMeg9YUgTGpNDf43M4cFHjqDidHn8ejrwa4NC9z9rkqXe8hKrRuTkAue8YndEs9hBCgqrh69CBGFXZcmxoD9D",
  "key37": "2sdQRgrJFXzcoYVrKrmgjSn5fNfFTJnRhBcPitjYXBnVzyc1rTtVHaoHwoUf6uov2JdR7b8sDT2Ytse76xTs5Djh",
  "key38": "3kvcc3UCaiwrzZmc84KAvpZ6T4Rkxz6sppyp9Ln8agcKtaXGoXPMXsPSK7wUswoRqToqnE9dEUgpYTMJC31NRPv4",
  "key39": "41k6Z6DtxmcTaGgMa9QDWQJ1cyYALoZfttgMY9bytQhhwaHrPDZcpPRM5wztM7NutbHweBLawhWX48MfTmFcdZp3",
  "key40": "4Zjc25ePwgw5tKzGjSJYnJkHmC7WSdSYzLeVAwNofpeZKJAqu7uRu6hfLWWoufMwu2LSVFisE459Fbp4zrdb9qKQ",
  "key41": "4b1TvmMzkUL3qis8LcpGfRjAfzjpyxz9a8jwndJndX1vwU6fYJ3uh5SQELjpoMkSg8P4wQw7oP3hR3wVSwZpfHcg",
  "key42": "5vS5k5KFsYzmgYni8k7prfuL9TPuHd64vpNyTA2swB5PyN5garF1M9XKZ92wKhoJihBHb9rFJBjvTVPvgFstLmmt",
  "key43": "qwKA7SraRhqP4D181tGRe8WCqeFE7PaBt4v6FWrDVvCtgvmmx8d3rWTARdS6JkoMopuKnyN4yrUbebcX1owcv6f"
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
