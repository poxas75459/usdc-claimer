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
    "4j7auDCMeArYS3gFDie7uLW4Xt1rcQvyGdXCVpDoX7Qr3RQz74jEf66sQK3GNpYRur7w2CRpXHRwtTp14EmrGAZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1TYrsFxi6Qv6gUHbM6CWPjZNx6WWTcpRCsKrVH3sZngG7dCmuHspGFvuPViG3Ge6U8opCHfH5HuE9NkNpzePkU",
  "key1": "3HHkEr2G3DynzN6HzL1vAadJkGVJpgRqEquoEd67pkyHnV2p3e1hYdCkuSdz7io6EAzFnoj65bF1dNzXzEgpRc3E",
  "key2": "4ni47N6sDBYGr613CXrsHBE9Bw4oArDu8tBtPBpLtFgqj3igNVJHu3Zq1hQKMpQAUrvVWXQ636ZfduzMGFfKgec5",
  "key3": "3tMVcfkoekbdL7Q5PxfoG6Kn5EWdCKpYbJzEVwHCBXLo6MsDHq9zj1JmLZyfLtAbRxeAzvfXirw6ChJz9oBvVUNa",
  "key4": "5DJfx9KXh2Qb8GGXQ5DYPpbTHtbueATyrZemazTvZ9L7R8oc8SoA1z4SYwmsiAZvAZzaRbVihLUZVUq2DsUZ94n8",
  "key5": "3YAwgTpaxBsCpnG7bj6LuFG6nVqMm22AHp1Ns2JabdYmS1aXjB8ZDaHt3PZ3qiSacN7MDLXL3F6KDZeQdCijHhqz",
  "key6": "jJxfdzL2VwK8r8nZZLs3A1RfGP7J2jhwsse5CrQL4x82CwJkdvBX2hM6k8UBDnZYqvUuWBvZDZfm3kwVu1svVoi",
  "key7": "r87dV9mbBMbBKVc6wkUaMZTqSVAX1tmdDpVaH4jdkJYVs49drMQQWzXqV1352y7aTm9pSac9Qc6ujaYB6oBYuob",
  "key8": "2x1VJJKmKo3HBPpSLmF9xs5DXghbid17ejUXXodMezPPLAynVVdjfRjKkfZeuBadSMsvb3hqbLa5XfT7X22CiiVa",
  "key9": "3fgEQ2fR8HEQbe9Ge3VJidyeb3jB7NGXxwGbVUsCi2L9EttuVKALitVaKapkK2DrrHeedcYZ6YgfP7f2KJv1msFc",
  "key10": "4BSnLr63zrosVYSBsmUyzUhpK9rccAiuJaVJYvPcoxb1yagp8d9poghVFwuLt8EcrqWLVgt6SMbZuUFijSqq1C5T",
  "key11": "5HWpdpu4NE759gtbnHYduzvj9hcXbKqKKz8jWrU1iJAvzFCG2qYkzMhopkAqDKRGonMSXKQwxJhozrEMdX6uue3z",
  "key12": "57BbNsUgynEoVLQpTT8RjPgfo3KJFxZHaJFUvUE3xCyU29j8Ke3SuHrUmXmkVd3GaBZU6ovcwUp5EWSGo2SrG2JF",
  "key13": "3Msn11Qq24TeTBbjgqDLYKUy3QGWJ66cszQSh57vhMyiDG5mN7VK7o3fyRpjtu67VPHN8barpjBYudsDXogdJet6",
  "key14": "4x1UAB8MUgt8VawhBPZRBbTwJK5L7vaJRpPjp6Z7CW9UGFBBFxCwxjPNzKKgE47WTyELDfCxE8VCMdrcm6aBY1vU",
  "key15": "2FCDQZ94CNbPi5ufGvvp9Mwh9uyT1dj7HJmjR2EDccFTwyYjnniFEWL2VNEAjZZeioPEN4PZvASnpUo6rK9tW74X",
  "key16": "3xjbVLzeqXj8HBQXRm4qVR2btd6aBm9aANhQf3HpmSMhnXa6FrBzC8ZEgnR4YpzqFpwnNP59QFWRfGoCa9AuyZmT",
  "key17": "4NcWWJQLqfTNCCxSDiDT14gVogNJQApWdiMkNwt4iSYqp9BsSXdFpnLhZXrAWQyroAK1cqrQwvoTBdtLUtyEkp2K",
  "key18": "63cgpfBjv2d2VB7guHD5A5Taoo485so8oAz85Kh2GB4Qe6gv2wiErYYNwYWfqv8ZqxWjunuJgakJVQtB7FQXfvZP",
  "key19": "4WnNXX9kP77omkFMEkFoQy2HSdKdV4umBaTBAUUfB6TEreu3qDJZ6YaZhC8dCyPZs8PCJxDk6SLXaf25kwZhVCxv",
  "key20": "42PhZ6PrWN36L9sMb83r4DPFNrJoVHF3zbST9DDHeWjnc7K7nrwcpCa4kfzxkGfUg1w8dHpJZzY8QTgBKHhHYaaV",
  "key21": "4VfEZSUjE27rfqQJJWLFMq7aXHZztJs3ePxjCUGW5G7jiGoTsAftWebAHTQYx1bNxGickEXEYkRBWcijdk2k7wXe",
  "key22": "2UWeuXXrL5tf6G4FNJLVjAzgsUG52fkdagU76YTttoAhNQ8ZBUPKacU1TeA3sL4iPdsnVNfCoWFT8o8Xuavxj5s6",
  "key23": "2oPJRf9ADduhAJ3tx7MCyNG9kq6d9cXQ1KMcixpRAhjyCPEYzdaUETcfh35X7nmetnroxMRBZrPwutuynVEbHfjt",
  "key24": "1q1aXwMYUYCQjDSbeM3ZQn9sjvx1ABK1rmLR1xdiTSkJVeuUaPQpeRAGp4a6PH4dQbZ5u9dHQGyzVRakab3Qxyy",
  "key25": "5r5yW5fDZxtvspAk4VjXS1Ns7GCUmwtWUhmc2P1UbLagEpTZNFCDvQCXz7z3DpNNiYnXHZsS2n483542MywaqHiA",
  "key26": "4wXHetn3AY1NbhTawdx1umr4Dds64dR93kMHcAadF67Wv4xZhfEsnrPox37nZzhRD5dBjC1uhqVJYhwMWgZM5L9h",
  "key27": "2Jk86UwngzEKBiFKC3ghcX2qDnftK2xucXA47GbKSZGPnBoy4hq7Dab6jLT3UfKGTQGLafSVpnWFCSuDzNYLkDXL",
  "key28": "xoX6CpLaRdasXD69oXj6eEywL1n5kUjpU7JFqPbKS56bswtDnqhkUF6tbPMpnbo87AVVVdD2ApMfmJVG8zqJ6LQ",
  "key29": "4uzS6ozkwhdNRYCYmLXYFqvXxzfDrnWYz9LXKVwL7SjGt8JNcuCkSbBLGZiDDRizk3FcKGsx9ZdiVzCy9jWCSXmQ",
  "key30": "5MGxgTd5pv8dKEfvrevcqXT7DiRmG9CqaoZVmeyEU14MtwLijh5KxMu7vcMf1gtyryQmGrZMKeaE9xmKBVA9AweM",
  "key31": "2pgnuJHxNcTsRtRX18vQ5kTHzkd1KQ7mcr8PhAsocTXgVkccD4CFt7quUjfAWCucB1rzs5G1mEN2Bi7J4QVAECdM",
  "key32": "n4UrnD5RjLtK9RSE6vN6KkFHFc2b11yj1DfjRS4CvHM2muWM1odPP6GngGxELzpNm2Pma8ZKkz3zugktv9wVkeM",
  "key33": "25pgnSe2WKYVmULQuhwbrWe7AYKC9gVE9Kw14qwoRqemhd36Qe2EMbpfsd6hpVcHsS8o8LCPGUYG9rXbhJLYFqhR"
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
