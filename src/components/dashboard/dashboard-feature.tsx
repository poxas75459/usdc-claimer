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
    "3ERG26wTzAEkaPtzkvEEU3LtsnyiszNF9UnPfbaFVMNdkVQLyAc41Adjr2X5sH7yicsBSn5gtxPBwhw9fXA12a7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wDDg2uKpzfvCVeMC2QTxy8gnf6c8nSrYnuTDMqgyq4dZmc3ByTVoMyvgfHdwqCuxvvis2R62QGDgrWUFQQJnqvH",
  "key1": "4ZJj9HPdUX5dV3UMj62UAf8TbmEhpyxAXRJF5BLyWpXXNE6RsLoXy3LUyEP81jP2DzkGuM4qRzXemBVKen4isbCX",
  "key2": "4GvwzMyk2BqtLFYQAv8h6qksNbn4n2jKP3jH7Heq6FJgC7sBWPeJXrv6PRsEe85vtCfcnG66hFb79NkJQrK8C9CH",
  "key3": "3jgux8ohwd3dj2TChzaCAcYMk4DTx2g96YR97dh948fU8UBXsRhcNad15BuFd4QQTbbJ1pYYFdj8iXrJJ9K2a3j3",
  "key4": "5SYhptEkdW46BbmL2AtLz3ojnHVpeKr2TVVgsL5jcEAxaYWUSsFcadFWhFuFqxy1pasEH4iZvjkFVE2P7EbWCZ6J",
  "key5": "34fbi4DxmvcV6UvfSP9wDRssWYAe7CLPGUSXXyVLGHfgwxpuUuLgys5DB6uujJSsQVJTCCth9xgUBSACjoKfPcK9",
  "key6": "2ZW8jeCr4dfktdiiy7jDRPVVdDxvajEiKoGpGqjqmJk1YytVGmGfc78KJpAv8DL6Jk9khptPfPWktJNHyQiJh39Q",
  "key7": "4ovM2iAZKTkxtx6BteSverwD6aiPpuAiGreHeihYdvZdbDk2TjmfRX9Y5Yk8hukFaCYG6S3h4LEUbRfSbyqAbhCZ",
  "key8": "598d1gQcgZxcDeRUz8jiDu3oLQpSVJcn1fJ9dKJS6Hz4TN4Ng2JcTWELD6Qc5wwin66BvwVFV5W9omNbwFh4GSQj",
  "key9": "DUUyGt3xA6hou3XT4jYYwcpZZ36i9M4VLyNBN2y54Jgbh23D9yKGncF1CzeMz7zunMAApeEz4LmP3cBWzCVFsu1",
  "key10": "FcD6uCQK3vx8eborZmMGAAvKjke593YSL3kPbvHFDEtdVd5NR4PtmH97SmMPCJF22GBwgFPkY95MjpLuf5JXGUt",
  "key11": "DAf1zQYpbPppUpZ9vU4HjYDRsrGY8zryWsvrvjEH2sRsYBvD7Eyv4qXCKBDFhQyCHgP7kzai5GcT9xWQFZdHBYd",
  "key12": "kYiEPYDHA12MVJKGsQ8qfH2dy7LtEs1JoyXF4fkUT37WQgU36rnZ2tNQAh7AsQCXWfhum9f5QQ79VsPAFReRqsB",
  "key13": "32WDBTo4LG6NvXnRR9SYJSwPR5NSD45jkn3Br16Be9DAzMGCdgjybip9tyrNTV5WZ254NZ5Y7gn7kf4YJbPC5Bav",
  "key14": "5hqsNY2xAVQSpmfHpuXtLC4u4MHpe6YdiRPU5zgvcpSjrpxBcNSnxBxR6bReDJmK8jPHwGtTVEtPXvkxgpHw6JU",
  "key15": "22Rk7p3iGuTC89j3Bk2mfCtA8nt9fD3JZSktNBrqVPh3SoAUdtVbBEZDKq4oEsHwSDiBdZz9kTa9zdhzAFdHrYcW",
  "key16": "2uGeu3zyE5WBQK7UZAhw1RE58Sj7xCx63BMxJZWU2X8WnfUjYZWCZNGc8AtTvDA9beg6mQCrKLsckWcK3TQ5xxSg",
  "key17": "4Jw4uKhJgtW6BKv9rX5m8tKp6dK9B6asvhz4xzpnLP3tSahA6ju2iDyUzuHF8WU6nYVmSdyiwYQ5vJ3QVnXfWbii",
  "key18": "SLNdTTK2Z8WqNsxqsRY5aR5EPMkkSyc177wpkKnwMzySuCdcxAuz9R5GWK4h3vihB7E8h1UvDBKkk2o5dwVCS43",
  "key19": "4jxCF9qDHT5QaG6zvDCchj2uV7PgmEauYbtNsmU8mw23W6JtjFyr3C9Nqme6eGoRtAxpGm1nhFTn9awyhrQs6kyR",
  "key20": "4DTiawznWEj8tjoy8AXuTy1bfYXgczk1Xv3gKyxDKmez1thtvc8gwv5UDRSW1sB6fK3DgTLpsyXujjCVJMcKHNJo",
  "key21": "5RJVGu9XUyA63cPi79STtWKSRMaTksJHj6k13hpaizhV4DJEnhDwdKwJcMs4QNNUVHmdL9UMjA5GcqJLVvL9fAeq",
  "key22": "3FNp3G51rLk6JLdSqbbtMgAM2JZeGt5Hkm5xqSvPEE9SbR7iC1BEq52fHDWSDZz2EcJB6o7B9KxVgB7thbq9GEb3",
  "key23": "2kPe2cPNL2Xi67nwVAKgX9yYMsS5GgevJNoNx1MxgxcUf2FgfYJsZMuPiUSKz8MY3S2Se2kCLghAt5HMANZtAfNA",
  "key24": "39inxXm6usMRnNMxTEUDtoj3nZAKXusnrwEckRvg6zFDf7ZqD6RU4dhF93cMJevQ1NX6RvBbsYzAS8egoEWcfD9m",
  "key25": "5iHsEtTXPZ3ABT8tujqXLYN4XDD92Lj1Czyr7xAmfJmkoSyyHuhJhxu1yH3uPDhZFzvjFxC11zhiJcWE2uJE6u8Y",
  "key26": "66zkCwVQcAgEGsn86Sgyg6UkBDXUGKkdYg5jdMtJoYTvF1XnHKNoYEf9kpcViATmkVCwJpAZLcKnbYG5p61sd2oe",
  "key27": "3Jk7Mmw8q1sQoEqENeNzpQnLLQkWZVEfMY4wwWHoKnCCg3gF6xNLvk43LhuAc8cZSZ4MjXmVtRrbt1PsVPmNWNAX",
  "key28": "3cHT9LQkzkmhVdXovhV2t1RTFTnv5YcUQgqTWgUHx2wBYkExqbTS6dZ2T3hVX6paoab1Hnp9PZYXFYKF1zJW6Djs",
  "key29": "65uaKXw2qVBYS7qVWjhm5LxoWG3ScXABjC8eyj4Mt9ef1oEq4Ht4nG4fYtwX5k35Bk4yCyT1g6TpVL6zPvVoNEVH",
  "key30": "3sBRuVvZoRi8F19R2HgSAfAARS9VowbGXCWpRn259w5yMWNc4ZdMUJj6duixF3AvsjqH9iZGiACmjvoN1rxvKY7H",
  "key31": "2dedVDpG7Quu81Edn9vjfAMh2NCKgAzMSjpPa5REUdC2veoAza6xLpQYmefBTj5LzPhgsVCZmNdtSab5N1wZpAnq",
  "key32": "n8hiZQZbDYsxxQGWitTWF6EHVBLfkkKoVmBwW9DjTxo3Rje3rUdwK7NJuTPa8b33Sc6i3tov6BdQ9hpL7eqwiMQ",
  "key33": "TBwywtHSASkZEnrpAx44qBknWRoVzQ17g23XQV6fo5e6sGyRhpNup29nuv8fcyEUnFLGRNbVGSrYkMHWBuFSEL1",
  "key34": "5gUaZYTBM95MrVatkFBccUay6LSULasPETQNdSse1Qdv7FfEa6L164tpChNYrqEng3fD8RPVPBi4bf29DNKBXbGX",
  "key35": "41bcVnBab1yCCYN176aSuQYXbx3WTU8LTdCmYn9XrmF54XRSXjYpLdgohK27Vn7cEoWLZWXEmHHvjFZbU3G4BCNB",
  "key36": "62x2TBzSaTkgiggYuKA7U9EHNnDHBjGZ6nQdEXcKLDkVxeysc9qE5ph3esL9vaQaQmBNymSpHW6KrCbPkqY78mqo",
  "key37": "5W4pXhc3XGM1yYNsr4wo3H2GupUaFP7hsZ17BEHmaBhrk2igiZeGooGZCga6eEJHJWsETToDjJK6eGGNK3AtDKwc",
  "key38": "2cQSYrydT7eACB7UQDuEcWtQG5YWvVgHedtoYbo1pYZDpMGuqQ6JNEU5kjBMNQvUqseUwAoBFYFryCnrKDGXJkej",
  "key39": "rpuEHTqZsX9GDdwdKpYAuLaxPVQFbtfWGWVmQ1ZJC6HHUQm2TuXoX5dgnwiNxqD6ckDmHZ56G4fbYdjvdBkhopQ"
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
