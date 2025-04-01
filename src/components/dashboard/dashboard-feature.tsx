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
    "443WUtvWM6YU3MPD2XNaQLoSJgiTpovrLkNjaUHjaZZeBEknGXWXd7zUjJkWw5fX7MyjhhVqRNSLJmUaN2boUmJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YsiH9XcuKuzaLwaJjafNuf2YJXSbwiBzRFLnzMaYFVasECwZC2CA2RqW63azTcAMaQ9f8kio7NWMFZQSUb2iLpM",
  "key1": "26siN4ZMC28374y3LZV5Zm3oNv1wo3efBpXvtMCetEXsCbxfaRdSMxE4baGUCvc16U78QKEzNw8t5shy9wYVKR3A",
  "key2": "SoT9mmbHibJooTXiJWpGu3EDARMkC7XMsEqUbKHCnTEfXTQMckpY8nqMuyttimJRyqWzE8ctCEpHg1cMugx9BaK",
  "key3": "4QcuTFYde5WU1jJWeEHtsKYc5T2gKVMUH1cW8XChsu2CB7di9F5dhNPfzSroNiUbWm847H98czEKutyj2xmRF9j3",
  "key4": "4NMyHA5hAMSZocnoD4SpgEHeLHEW3Pt5WJjhExD4QfB1HjZBChnGKgv9nRh2kgsWa8UEzcGfhW9zv66BkXfXLMDd",
  "key5": "4bZY2EKkS6YN3KPvzjJTE5LjyzB9GZq9XKz2Q525LVUYjmT9Ueu8eVEUth5GuTiTWGSKiZrrhzTkPR4KCvjcpHvJ",
  "key6": "2DyhQLj6hXkQpuQvmyBW2VfdQnWNou4iNR7y7xXbgNCVphSSpnywfM7qCELuacT1YUXX9U6RTALgo2F1hh7Mjk3L",
  "key7": "5abBHJ9sJLQbjAuA4NakLosyw6c1bdp9hktqdQaMAihaAki295ipoSXLQss5ifXc4JgciaxeD8VWGTWCB9eMYxAC",
  "key8": "5G3ePZLXLq67akkgb8i1cR5wVMajnibWkPZB4mAdT762hWfktL5Z3eNE4dDwGsUq7HiG1TVi1nQU4Je1uvCCRmmy",
  "key9": "3MJbzPiRhdqPQyfCmU9jZ6D4Muc1ym3RMGshw8Q91aabzrqQHLZey4wRwrbCRRY9vqoYbmi4f3JiY5aWW13TP9M6",
  "key10": "2MJEYSZuHv16AbE7t2eKiPQqiyuvVHozXwNPdHwC8ot78WawpYD25BX9847VrxvWerWdeK75nCdDAPZPp3h53mdK",
  "key11": "MT81DpG4LUq7kx4sV6MjuZTfxtyeL4vAUNBiA6jBcJDYEZqTREZR5nmPwHGxvEX3c9N6YTP7XM9bJ1nMFGWHkSa",
  "key12": "3hxozRFeAhkSVdmLvk1tJPB9pdzKRjj7Y5c5UyTL1qs9CcQtowHkhYW5XKuBK3ThJuc3sLPMZpFs8KLCD45ZLYwt",
  "key13": "2RkuFcA9up8WtSHgXWqxCihu5EXeeq17s6mjjibGXmimA18Qf3BKH3APXu1Aytm2jBinWn2hkKtkqZKSqXM2ELuK",
  "key14": "2VbMZYisorqazhCmtAc929Je92dYy6fgsatSnLes4PPJi695yxdP9pYv97RvMsH3EmsuQYeEgtVMNutBgbYm3uJs",
  "key15": "VjtduHLDLAwLNH2qU6zuSZbFcsVZJdczNRETFK74ecDQUy4zsAifuSUp94R3SVUJKSSsKi5QJB6qxF68NkecEPH",
  "key16": "2p4vywZm7tn31CBi6UQA97r4jrtEu2HW8KyFkXqaDbscWb9Sjn5CDK8jFutZkBfQXpCa1wzM1oURcbo8vbx7Tbog",
  "key17": "3ebSzwG5nk4kmf37ipshRLpaJWumc7KD9gcHsUtgTDjKhxjgQcmq9hbErZHPXLFRAquyhTHk169Cb9vVdrn6wdit",
  "key18": "3FLsg1ygKoBaPJLFkpuqkpymrGaHA5LAP8UwUc1BC1AiD2MCcM1sT8BKcw82UXpckoQ24YRkDbyz7grfEFKgDFuh",
  "key19": "2wutnXAzEda436bB4tvynv52CYqigJckQhmeXZdCwkNzs9T6DyfrXR1NsRov9eUvFKpuk6fdXBf2v4MYdK5WvEts",
  "key20": "m6ArgqoiYDAmoAqAEArVkGHxrsFCSo7cVyAQi9R4BVnC6d7rYVpDNkZytMvMvp24g2DoofXTbCyr6k1RSHRALJr",
  "key21": "3x3qcYpjRDFbBm8d2WNLDNEii9QsxF26JPYzqb2n81D53WTfJNYrxEv8R5qxcLByV2hmFQk9ZYh3shtXA3gqtBjF",
  "key22": "3PLGtH8aZoeb2HSEBpUL9iiwHQaaSDEkMFcFHSj5sijWrUVsLR1uK889F9BpkxhW8ntkAwiX5M3hXMAZZZQDMwLv",
  "key23": "d14fGHz7vWQT5pDqyStrx3HSwCwH9ASGrxUa7SZBKkQ2JNU37WvzxpVo9Rqp1aTSDDEc1niFSqDqkD7N4oL6Dt8",
  "key24": "j6YhReb5R7HifrRc1DqTp8212kLp76oBKFbbUYAAynmfox3MZrUCVqARTcWykbxB7rpbouNrQc4AGt1LuEBMGzs",
  "key25": "4e6ZguWwRh15nufcw7qyQJRFKqnkx6XHuQhmWLQNN4uV9Tj6zD37cb4kvrN4KZJYDxRUyPcVXEYSqNsRYppkEftK",
  "key26": "eyYamdYNDwfued1qgoyrnNVgnqYeuKn9RxdzduSGdoXg4bWSjxUC74xDBpwuc3nNinwfnxnMGkvRY2cnLDruew2",
  "key27": "53wmqVkwhMHQwGmhYMu68cGzUgRCa7Ux4Ru5u6FjuqnoCJQSTC3fEWhYqBE8Q7ABKbK3nnbCc84HCxzpZKFG1vos",
  "key28": "2G3Mi7jkUSzCKWShTWoARPkyisgmJv5NLiFnkgEhjxWPa6ycrswoBP1ZcfXmRm7bFSCBTNC1jsityS4JtZAkAyns",
  "key29": "4EgtUAJSmRLn2duW3sN6M79xReRiU17fdUCuVMaRNLpfbWNvQdPEWwE2VwtxMNq837mTkdikM71xgro1FV6n2woq",
  "key30": "3sDWcsPt4Jq3Efo6sHMeXK8eWymD9VJqJJNDj9ZACA8L7K4PSPT9QagYrM26949dbfeN39o3h3q1dpg5hSR7ySpS",
  "key31": "4mM1WKLScMa3BwuK9PzcjEYXH3fg2s1Q9Ji1WN7PQBzp9zZ2PWenGnymV1RML5EoVGgR1amod1uh7ejpjkwmdtsX",
  "key32": "2o6AohUkVWb2SksDdRJYFb8HLBb1y2FvE5H8GK37yMuM4wYBF6q6A7JBEwbCAa8X56kfikEcG9pWfxKwayHVdZbn",
  "key33": "ZKsQR4ug5yJsXktfJxRZWgHsoGQBt69d9sTzPkpV9PTQTZ3vHxpjSJteNazq3yAjhAsZvA42ZottUCDr9hoGsFR",
  "key34": "8qL9jHiS9NV8dFV8FBnz5fWfh1QHFTNQGKXjsWQJadNtZmYkuT5E7S8fqrWahBKZuMeNQBR194Kjp6hCWXxPd1v",
  "key35": "4bfJUvtBaZ5b6VGsR7geoYMQVmByuJyvMUdw1MbZaCfjgjoXwkmyizmSfvgT4dkmKwZkAnSLWgJ5RDjAbPALe3nS"
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
