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
    "5fW9M1WqwbtDppDAoHcSSqhfthP8WNvRbnq75tNoTQvGCxhidZxouAFuVMt6bntug13x8ZMc5UnMP8FtWF5J1rEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9gMAScP14MEXTmtoTYnk8HekAnUCRAW97NchP5x943mEqqnLdFYVuTJKShaPnsbjBkEGUuVEM4e9PySmQtxJZs",
  "key1": "xs79ZrE1sRjeCzobfpmCHQ8mttYNXTZZ7iXx3eMep5rM3WxLPjsdBp8mQog8awsJQWqaa1WbKRmVL2ZxvAWoj7P",
  "key2": "41coa8SqG8YNWjJQY4JQRJNoQZBJtB4n4cp3B7BE5S6VHcKaaWD4iU19naPUgW4jpAUqNDVpy97VB1qfRhkPXLEL",
  "key3": "36v1koQiQ1dUqk9VeuvK1arJ4opZTYtfHgxUCcrH4c6oaWST7b4vJv1XahcLGdHH8ZGUuX5Hf6x8eWXKMcfXtVzk",
  "key4": "2J3MbgxzdVHQGFYoKVZ56RAw871S3MNg8kbvAaWJN1xYyvzymcvKznFS53JYqcziRKGvuLf3LA1MN8dqfsGtDB7G",
  "key5": "5UuNMHJwMs9Jsb8GBUMLEDzEaThiJLXq8T7HVGnmZYfwz28T16VsSdtfHnPincqNrkjvEu2cmuKmsfHCYqFUKErD",
  "key6": "2RKHjNymukgjzgYD7rMGAAEcN8mbVNKMuJvQTDJVwiKrEYWZaDPxJJQqKFoijo5P8n7fwTmbje34fKeJ4qPkyTb6",
  "key7": "4zXXbZmhL3D9DWdLUfrkG5AC5E4b1SNGSueA1gQcuVh2jojDZptdjQnwKvbt9HWJnpw7eoohP47c69zSUnUgup88",
  "key8": "2rzWWraSGXu8h2J2Movhiie5uiRPBbbdnFtGAxp8E9GhhtQ3vjMXaDbpopuZRYaGzvWtnapRQvKfH8utoKPh74c7",
  "key9": "VR3LB6hpRrU4myszMv5Hcmam9UoK3hxEq1q4opkZtiVRZB5HNj3MZxhWiEThPYT7uwiey4d86fgZuDZXmovHtr9",
  "key10": "uNAPCkwtmNwSDdaTeWQRXVd9vBG6B1f7R8XSzEgjgR6Wyij2cYtCxVsjCdqJbV63A3K9R7ZjFCTisRv2PuAuN3e",
  "key11": "25GcFZrfkpfcoBHqWEFzG1hT8j5Yr5gHShy5DkXE1e4JzcCPWGfbwY1Pc2DPTdDfA7giJMgFtwyenCcgayJ7eoM3",
  "key12": "5U3UptZXyB9QT433imu5YbWJtXrgpfoy1PdvLLRE5RZwebXgiNQruVKUQTZM3ZCxGWGJTUW9BHWapkUeLrQYtKUj",
  "key13": "2zrwuuESwBKMa2poJqNExq28eJ91BMHX6vgz7N4pmeXFTNUZrjfh6ZegRWCmrn5LexGBTe7zFQc1frP8rcwfgsgn",
  "key14": "2QQjL7w9wL89QUd6WammdHht8fbXu8LpwFWCaDCnXkufR1HM4RWwZ1Kkt97yah45QY3oidBwF9K1KvJmMDgPLJAs",
  "key15": "3WuUuxhFGJBkCKQVpkMegKJYonowhJTyhBTrUGUkz3BcMfWqLUugwivJH8M75fJwnM4zoi6rM4GrjoD6J26QFpcj",
  "key16": "uBwgxPwKnneZNHt4j9oxrXVbwrnhovicKrnT8NHyYP7ZD1XWJ5im6g5eSe1v57QwDZKkpZSwpxK5FNFxHZav9Db",
  "key17": "5UxD4HZ4Uq3EAn4azJQvH6ZAAZFLM5LRHDi5aCj2EDzTx4Sgue3BX5By2A8Uja3BRUziA6JNbjogbnPUFEU5Kyub",
  "key18": "3Se7mHPyPzrj3op9o27GHxowLVhmzV1JMSNcAE32RxkMrYzfVHtZibevMtS44sDHX1CNzop41wnayp9WNUUCWVqe",
  "key19": "4Z6M1KBZMQXJjYp27g2p26wesfanfn4yv9JN1ix5HHAevk4W4cSwzmBSbfqV9yHu5cas9HmmA4ygELQEsf6qZS3o",
  "key20": "2aVFiUk3qovT4fdZLc2ZBU1cbkDucwVjqqmsF7ACG51y8gW4JRJNn81Zd5QRHMp55wDFQpPYUQ6PVmTsHd8yk7nb",
  "key21": "56BFEPAtDJaWLeaN1Q6g1287TiVmjB4XMJab2L5a6fa1NAyQem27KVDKzYUZrAqNVX3Y6dJCeXzqccagSeNDprWF",
  "key22": "5v4a1agTBViejAEHHVaMvhFFRZ6numKc6778CsMpe3BCvwQNMDqWJo2n5e2NTqbFLqX6SqyNiSrDQGYztUwgekor",
  "key23": "2guMdSwyDMzhZDtHMekc3UNa8NnngLrZerqCr9zqEjLSSYoYWeVDouUwt7LCFx55sMCrXNBMn3MUCfD35xPAkkRg",
  "key24": "kJivXhvpQUzfcGnXPsxH5bdSpFHm9FKkDVoyfnbxWKFf6XiN1uq8WF6t2RhgmqwrwLGsoMUaAHgwwGASBhoaKBz",
  "key25": "64PLfiVrCe9Lgo3QPNC12HKBdMgyQvbtFniAwUcYVMcycoZSj1j1pQZaF8iCX9X8K93CLXYYCWqQmHU6gS9Z9wM2",
  "key26": "5eEcibkQz4xRxt6KLBL6bE4h9itrjF1CKYoDq8veaQk3vmj7hiSKHvzZ4MnGWNrb4nLReXvzYarAaWZ1qLnPBgQy",
  "key27": "5qhk1wZTCWoGGAtFXJwrV7AnwvoeSEcAR8FjunSZ1NTd8kdjvKdWzo64xPrwaBufD6xhYqYY7cqq5BtxfBV9BcKC",
  "key28": "5rRtYBukhjRy6yGN4cpEou9aHGwGg6xwJtVXQ3ZsRHgYyzwq6TopKYhHCebQscPQGxytApWTngFg2bn96LL9NVdg",
  "key29": "4wzwubZse7QT9G77ZBdBntWJsVFgDEMZBCwZwJB7gDiexYjr8J28XduoL57SQ3gGv6JTxojq6SwyRBZaDbAGuTqE",
  "key30": "4ejyAxwBrmLy2dZfcgZq1aeAqAh9HyHW4e1HgQfUA5adCC32Ujsdg4GgkSWJgUTKhXzFdDjTPZdP3N8ukWsypDDW",
  "key31": "3uR9h5rAQzFBaHPo8e3RLVu4ajw9oZY1UoTgPNNWn4FvLKVEUgHJaYviNBKRApeAhFNbgiHUYeER9AWkZQUUaxiQ",
  "key32": "2m1i2Ec2f5S3ThP3L82veZGYY56eRNi33Td8Qjot4aciukJqgQE5c7h9eBPbMZk9drVaF2NAxzVs21zxVSqAN4u9",
  "key33": "3m3zgsfvgWcvJW7Eg8VAmcgy8NQxN5wzvYf1HzgPEKYLEN5eT59ozZjPEFE1FZakZtULPWbxW4RvqSZWyD2fq7vy",
  "key34": "zHnvCgf2V6dLQiFbDk2MvNxEMM8yCoVGPe7ohYVLmEGP3dzihWMzocs3gZ344MfgMdADh6dvxUSeUomYogshZ4X",
  "key35": "4w2C6ALFmaSo93vzAhaUzJcA8p5n1Jj7FDGXbhxjvgd4qyUmM5m11ehSdkfiBk7ZDB5caD9LVwXke273KHjhW7Y2",
  "key36": "65JLD6PmFtL34JZLpkXjfKnMSs36u3dHTV2dZbACgiGXLs4DqUTMZECtuSpRWNUAcHKAcreFxop4LVLMXwDBe6V5",
  "key37": "2fApyBWfZ2xKWWz28x3U49WArunvApPP5HvTcy9eNEup58kuSvC7xC2FnVDp5BKJEsn64KhcmnhUFFdSDHg3rdrT",
  "key38": "2uvShGYCGzELni5ZkYDFhbz3v9BW4pLQN7MLMaN4N4LqGH2hGV3bpmRK1w1Jzzcw4iw8sq4yQ8H5v2VtQh8jwQWS",
  "key39": "irZ3JGQuWBxZwxVKB98ReEmB2893Psu15577t6t8R8uWYGL1y1fmjz6razsuZoXgSbDoatmxh4AznLfo23wUdfE",
  "key40": "2vssdETM9pYYRnBSpXpCn2SVctSg8VwEyGKErJt4n6LPDc8BwAaTWYwG4ahBUNc8BZes7dspCgNknqEXDwgWJJc6",
  "key41": "4vckoW3igFgxEtCST8FobMbBbKEv2dKYSc2jBuPWd3yMtM4wYztQ25VscgP4V7pf9asQfkx92n1qNDmQM7pMx3TH",
  "key42": "zDxB68zW15D5Zj5rXjvZmas8ary7HW4yyMdZ2Mm8AP8QJFfdr6fBhK86vmrEW5w5hajiMprRx9WJwRVEUqanp9R"
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
