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
    "35hRTJUiP7w4mNY7Zy19cdjnmPeaLXHpqQq8MUZgewGBpKia69zkzu7EDCAGC5NpN9Ci7mbexbwD4kmyeaQvSArc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38UsG38rYUf9MoPD4oZHZWUbjwBydJqv5BwVhxgSYePua8pjeQGrmZjvFHk3pTyErXBZcVGVRB6cSX15mNEb3jfL",
  "key1": "36zrSmndvnjpjMxxdrRV43mCnxDzZm9oTcusLZXeS81EBjmf7Voy8Me2ZaW5CXC5Xv5NZVxawKiD29GGQ9zrUpP8",
  "key2": "RMpReV6XJfMiEE8TQKP8GAfLwjYSvkkSPcuWFE9q1M2fVvwXACwyrpWhxMNC8o2e9mbBpNKheCF7RquTAN66KPA",
  "key3": "2AVXJXrJoX7kz96wCHq1sSCP5sALebTbh9kFci1n7Xbo8ciJLHFYMgXoh4rb9u2tVGfigWWoi3nBXhrQ38iNy3go",
  "key4": "4ARJSabdBf7xA2F4Zuz9rpC917h7WUsAwgxDf5SDQ6ZEgXgeP8zrhHBR48BMMTMhz5gLm7V9aHRFG5PPJYuWmssV",
  "key5": "Uj54KuAZgkDqoF7tE6TaBpPf8rSqVpPGg65GvK7NNPgUai4vJVtpUmyhHPubkfofaRDHkKidg6g6GQHLPxVUrhi",
  "key6": "2aGP6cMcjfBe8bVvGvUxHGy1ZTooSRrdrscCUN4a3sNcTWA6cKpxH2pcr7MsUWafo2o6ecsKM8MBCUf45xacAe2c",
  "key7": "4gXrfKxyNxQb6EqdokYYn7DxNkMQ7EDmpWAhksjz5B69VX2T3uKgsgRLmKbPQ7acAXCWUBKQYBrR6BWz5c8n8TFp",
  "key8": "2bZZrSheXNqbheVLoD5iZ1EifDu3zcQZ8ZsFNV8GHsY6vTw5tnsousaBNgi5ryCvFAuL7chyBFAdunERFGZnSeVe",
  "key9": "4JfrzZyqqyTodLZwrQTHcE7rDLVGMyzDKyghqDtfr2TQWYvvyvY5RL78fud2fbVzjYRm5PRcXAaCZfH9RSyXYvPV",
  "key10": "2Kf152qB9UYnxuN37jkG4UH7ubeKb3gv596BPHYt1PEVoiZpCef2DQaKALaqjfHN8Hh95oUcdDQqdKh651Er1HgH",
  "key11": "5rkGSSvqisrfxXhW52hfz7JnXQrsLfAfrPLiDUCgWQFKHMMwNWb7aCYehrkQFWss6cx1mnsucQiWez2VdxPBMdd9",
  "key12": "4jYFkmzQDedtiFqsJjBPP1ekDoyu7eAffvwhN3CnmrwAcmSDZ59qCwtjMzRz5Hvmcerx6gB5N2BydKzzZAUqXKAq",
  "key13": "5YDe9VWPpu8Ehtmob2DNK1kQhfLKxV7mUpLNyGrZ8HFkC3NL8iY7RctoRvAtHamaHCaHeGCuT7zPfHytfFz4Ghz7",
  "key14": "2dt7UUBdzvVJFHMka4WrhmPHBoYDfQsWv7mVEGeCuqY2L9bfovhx9Wm2cwvRnYDRmZKKXHfWPr4VAc5SdHQwnjD",
  "key15": "4smPUXqSLKicCEFYSujhm1RU8A3naowy1rJZ8ega1i4sFEjxsN9bC4AQ8KdQPmaKnjBHQ6Qb1uFLQRWW69FupH1G",
  "key16": "Jz8n1qcwYX6ymFSxTMPtzP6hzeSBiugxpniGcJ7Tv8XSFzu63J35sSenz5eNqopwmCjBb9tyL6yyhJaHxgdd7eM",
  "key17": "2QZw3eRzvfAuegwn7ZyvQYETvzJpZ8FWTNk9ta6eacvViE5k4WBqe7vSoKd8ToPMwt85xjNgvNw1RqEN5nspNQvq",
  "key18": "2JmKTLeKJDw9vHYrZs46EBMTzeAhwAdLn3xRaGaVNFNfWLXXw8FoQ2WFGuSv3PPhn2DTmrFD1Uk81hAChEXQBcY8",
  "key19": "5pneHCkJrJmfqDG3Z8qsfvhY2u1Wap3PTCd3YDrwrNzSR4Pc38pQvN8kA76epuwWASvMsUSvDLDw3s6uHtyvAB9U",
  "key20": "Y1SN153DLJwaJXVPoC8pf81JcbWAY8hM3DTKRsk9eBw9y1boX43UjWYEPjNHNV1wz4q6fN2xA46JoH7MvNhH8pT",
  "key21": "2Ly9UcpWWn2VJUXbnRssYFM7uefgmemo1oFVqkEYPENphnjoQjBPBuVounohWxxCocaTGrEY8gYVGyPTH4XSgmtv",
  "key22": "65UUNoxZ9oHxdMo3FdydHWWN494HGKQMPJNuaKrhPtjzYbQ3SA43UeF3VLEBMCc91bkAqvWAcH1pC2uTFTD1BfB5",
  "key23": "4X6p3U7mZ1uQMKK8Vp4McAs8NyyTMqrzQL5R1VTghG9onF2JP6ieUZU6AjySUvVvoMrXoWBGrBHNAyKrgEMiVUUZ",
  "key24": "5KhRKdzBxdJpSfVXSmkd6n2gDrYUwErc3vr6Pfs1L1rsMMFVQtu1Q1vt2ggnJaVBVudMxLzwhzgPo1EVcsCiWKLj",
  "key25": "3dVWQD4NJTGmAVh5NDsE6jEQoEYTwuPkpqieutksx7ZQuEBLqmpZPGyXb8HzngFNPCXGg9VSQKftxLcxrr51MgAs",
  "key26": "4Q9rpqgDxpXbBhRWt9iAJifxRyp9uJvWrdA36UCjM6z3UKaCmrURiusDzu9QDXm6to1iKa6J776M4Q72wNUwKG9V",
  "key27": "47r1ywFsehbfMCJGr8auuS9BEHzfPTMBFQ8DwKRCw7vE3y5Pvyi82hUSYFsY6jbisZmvHpisfLxsjECrYCryxtAN",
  "key28": "25k6caauCa385jEwjLLhbbQtUB9uAD9tW95TSpXHGD1iUnmENLUq9uVqYjdMdhpBhQyDUgY8sz7dVWCWtRwjd8VP",
  "key29": "3y28G75noPG6XJy2AJvMhswLWs3AvjR28jpq5sPbNhAXDtafjSU1n7NA6KaTQ8Bjc7TM4mF4awkAgbK9utWWw1SM",
  "key30": "TsYWujGmzTmhf7yAstHXAe1Lgzq9ETNn1r1CYBpmirMD5xMhspGTj8QhtnSN4u1ozrRUFVfqoBDe7Xta9t1tTmX",
  "key31": "JM5vhYksciqWAfQcT79DYPr9k5VaNMLjNymbFBHcyN5pWzS86VEvEmoZJ7Vv3wuJRfyzrJGw8u4Q1JFzxWuqQHb",
  "key32": "3LKqYDsLZ64jYYUPrvFZN1TaNFAZ42fLYF9nEqv1utWa5fvzuHu1srkGFJMQREeTuxKz44pbsdH1W9HTX3rZ6nxn",
  "key33": "4RhrF38oyMVRR76rHTNfzPwe5fUt3HetpJTzyDGodjKstwQGdgadp1TH61Vv8DYeC9nSSKz6VmVS6sssCkKW7dtW",
  "key34": "2SoVXXULPHEnWikehqDwAw7DKojstiQkwckTmm5xqMNunCZYFLKY8C7uegA5Yzd4FjwqxYtgLkcFm19jh5E7x5fM",
  "key35": "5wyWoEy2uurc6vacpExytW5J7W46umze47VxUbSk7RevHaSv6ShTeT84bVX54dexxLWocdE6bKEkkhDKCfUw5z2M",
  "key36": "VhhLarg87CaccqZKotAEsiexqbe4inzPbL7fdMQyTPxJkKwFF3vgXHn5Uc8Uo4nzZSGJ662jYwKhGnUg9TfyMBT",
  "key37": "4b9KQKTKDG2rbkY91vwJWF5srSb4wN5UvzdxrvzjgA8gqJZLX2WEUbdy8dQSzWhVqQ1TQwE5B23EqteCV56KoGEA",
  "key38": "5BcbcQAPLcyzHibkfCbY3rwsaVP47DeJbwcA33PmEZGCCAdDM96oUAL1WP1MNtp3gK29BzExkJqTE2GXZY9q3VPU",
  "key39": "FX9Va3YNi6wrSmz3YzLZwqgz7jowQGpbrQyUXdy931j5ZCnzySqJ72bZcy8amNJN5WJ6VhjdwCfVccdyGfG6C59"
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
