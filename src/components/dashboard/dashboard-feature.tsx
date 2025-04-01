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
    "3H9sRxcm4ewtmCc7B657GWTJ6fkbVvEFHfG1M9jANEMPEBHkKWLBNHRhzFns6jkTF2U65BLtjw23p5GvxMx4arJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBh38LboEDx9TKoigJh3GpdKRq8WDhxskVDRaJyoEdppkmpFWNSDQ3eUD766zxFJf77vLjcXmbei3vitnb83b7m",
  "key1": "3z2NemsfLcqi72QuQUzijyo9G9cKq1MKbte6N8CtVXcJUuxn4phRbXaKH6Jd53YXAtqVJSNNMk1UxnMQLHdMpNQp",
  "key2": "DrvNERLmtc28dT44fXe4rimXYB6rd4kGoEWBGHExsxk26xTczLj4Cad5x7AVRdrPyczKeZrkQ9AKeqUN36uGoxr",
  "key3": "2amVYfmc61x3Hg4fZ39NuanuJXxbkizNVououT6JkpeMp2SKPJYcBi6sCoZY2WJuX5qpu3xBQMc7XoTeZ73J4nT",
  "key4": "DR9xg4vBSqQNkp42gWPTxWEoqt4n5qCmBpdUrQHccs3rCRAoDX9z57i1S5jx7eE7Ze2d9ZsN3jtbtPVMKT1EX8N",
  "key5": "3UYJAtSqEsnYKbmeeuQBudUdB9mmTdmMxV9jYHzfPCQWju5pADxvgSY4X2j4dt2QGWerrRZat7q8gFT6WneCLkfx",
  "key6": "Z4c5pvumdUYqHB5y3NLp3QxiUo1zhEJcvy8Pd37P4sT9jaNgK2N1sYvQ5gBLkPiueWYomYd4huWkNy4e2PAFDeg",
  "key7": "4k7fAWhd3Tq5VLumJiq3Jq7ppcwh3XhwKSGV3bhcZpr5N1TRteqYSLR3k1hAFCnj7VFs82yQTavFrcQMQmFqMcrS",
  "key8": "5YhPvZTrfpVRWwdii3VQfwLgZfCe6PebSS1zQ65F6HeWsCwFrNXRZ9a7Rcru1pTYLZF3rWskyhpE269XLHKcxhDe",
  "key9": "3PLkPAbEXFZf9meLEVFsLfvJjVbAnU2J1BWxnzGy8R7K7UA3yMbcTfZgMb6by3xVh3eLE4d31LjGhRLaHdrTGaaF",
  "key10": "5CPCk7tgSWu2y4ofvDCcUMhWiiTQLQzbVLScgFJsfExpyyKFvVSQ5EhTvXAwygE7kwKToGU4jSqw7Zz1CHs6gvpk",
  "key11": "2vAjY2f2h7LcT3fUZiLoXB316iAaKXQRzDsGrut4WBRQErmG5fVfFzEkGqWs4kg9HpAk1Ynma2CQD6Hjfzmf9Xod",
  "key12": "5XwBWyi48LFHkahYSt5S1dUhP5cH2NaUh8qSQJamuJo6uXkjN3W6vCM6y9aUDb8MsTgU2GzETDHQqZaiPQ8RAFQo",
  "key13": "YKdhhzSsonSin3LdEZyWAcdMgcKdpeVtWdbn3dxYnLoJWEgHYXM3e1H7pHMXynSFyP4yxRqH69DpHpSnR7WVSH2",
  "key14": "4XF16ssto11N3YYwXzrmoqsz1J6iJo1weiujmmbsa4Sw3mrJmtLc6Q5tLpC9x7CM3bAgPxzVvTACJjZ1h7McCQdq",
  "key15": "3oinkVk4JjskPpzFZk83WLepgqamexhVbV2MLQdSjQA6RnPEWPt7DZCam4DrCcqbNKTkQp1XLsUeerWXn1VPaaCW",
  "key16": "3iyd72MWZgGewpw3kmE3aDt9UbhjVXPtvpbF7aG18FUrxKDQUXaHueSrP6GGdystXgvpdMmzJ9iXJosbwfhiBPFa",
  "key17": "21SCJQ9BAjcCmieeWZYnuxKt9fBC7H7pkxnL2Srv4CLbfbN3rzi15ARHRNvUZiD6yuGfAKjH2L1mxEYhi3N4zZh4",
  "key18": "EBEj3Mn9xXFK5puRYnXEMJEybV4ci57UY8WRpTeERfHKFowaLtvhdLe4Xrid98nWbzNKJyadVGjDo6VbXE6um5G",
  "key19": "5hJkVM8ErdUe2QqoKXFBbdra5QTAanYu949Wq6zFLTgpwkYrCvDaei2H95HELLg7kY9AbJcJfGFpNo25SKpoPHKu",
  "key20": "29c2UgzHbJBvsb4Ax1yEJY4PdCi2vpASxneG6EVGwoW9k7geNVgivWuzxYUQpk2ZoLLvBJDerdrDqNB3wNbMbg5J",
  "key21": "218iiuGB1mVfQS5Vk3TtHmaXuNFxJRcW4P4g5Xd6abF9gWVY61otgX7nkWxR4NDVLQ3ZrRjdMDVh88mc8rHFKUjh",
  "key22": "55LR9BXWf2tkafEiX8NVxHhhkFy2WP2gAcCLcGJ1LZcexfLpixVYedtNb8mVarJJanosD69oFWGTcSBA9r5Jn4sA",
  "key23": "57dY35iACT58xrLHAomRqCuXZKcfAnthiWVojNbBhuxg3ZbiBNASdqBmuE2VEVNNAMm1dyZwXdJNWgXeXBfsNC83",
  "key24": "4JRdYEYh94YgVUwsU3niw9hdiFTAy3ycFgDHcHmX7eBm9c7HLTjEyXXaENahHBKB7pQsYPUt5fUVUHGbxMCUJX8n",
  "key25": "2LdDUsWD7RTgFhmgraCTfpk4C3LiNiALMranyRy5Ce77sNW8PrcFAeMFG6uYvQEpA8xsU79LojAMaFBdizCtNWF6"
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
