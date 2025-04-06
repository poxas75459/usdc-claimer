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
    "3e1UmuvYwdemRNZzgQgvgkWPDu1oCsQmu6SjfkEWh5LFSXz9gPReLpwnKrWxPTUif9yGRT7iXkJgD1suzNWGyWWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDG4YR1nh2RDBhYcB5VhxZHxCZKQP3rsjpkrj9EGjg5dRNwJr4p8SUUD6nLDiRfKxBb1RBR2HHRU4vaSd17GQxc",
  "key1": "5AkG55WBgLYfpd6Z4vPbwa43TxkceVBADhqdgdeSZNXSRx5qt3xQwaMofvTZ4CM8RQyRkieV5fvwJrbDaPtceUkF",
  "key2": "2HStUGkj3KtYzeztXCSaQ4pYQMoERFKvVPGwyJqFwpRYBkyTi6fzgU4AnqhuQuuyxLAghG9x5Ce2CbuVWjQ2aDP7",
  "key3": "3LakE19Tc76PebEgnnxoyYUZAW1NZWSqXBki6mYBg7pRHdYisCHwUXDBsUjBuGAUrbrHuMTdxZJB3Fy5mewbX9zL",
  "key4": "4GU7YR9NcDt3B5HXYcGikz97Cdwd5hKADJtj7wzrQ9UpWBXkKL2R8CYLwX9Ex5oN5DKWikcygeVUDo3WZBuVr8rc",
  "key5": "5iiv7pNqkbPy99LeLJGNAeyK79NrmW634n5CunKSkaJa5gzrAxYV98cT3qRXqZaxk1FC2jJpgRUKubCiRzZtZ5sH",
  "key6": "3gvaRQ54n541EWF3mBaS3HcvWingEn2vykEg14evroPMeCyZ62dr7m95EKvCu3BzSAVgb4HhdYMX3JU4iM4E9iG1",
  "key7": "24PHL6qBUP79tAoqvtgBrz25xKrKRwL3ChyYWEQcH74ryTWSc9Jv6r19oFWaVeuP71hZi67cQ52x5FG96YpZ3acR",
  "key8": "4qd9x3qCSUVsG1hzAGaJuV37JUG7dBKTwZSFYHAxL1sq5bCxrYmospTcRcNzyAfwpqAiRgnFnDAHbs6aPUBCMw1k",
  "key9": "2e1GcEQ1ut1P9tFQizkmN4zQANSfdAotW9DhiNn6vEGBx5CjcDYAWMMtnNVDDP9xSEdT4gr5HCb4xocvbqr7AQaE",
  "key10": "5S5ppwDjX5akSxkadWxNP668tfM8ySHjo1a9vVLrjL6L57aRLRkse3yVboCCY5k6xuuwdQEdnAnNAvE5QQoZqSd",
  "key11": "BVVmD5ZSnHNyUwnh7QVHdSvT53Kcw6KQeRvPtm3ChG9djUWph8qGnoWQskL3XZLS3S11NSmnifykf3z9K96r46v",
  "key12": "5xMZiA54VbDCQd7LHTnZXuHbVEBggy2s946vEiNKjBDEYnCqTAXu4netJibBHD7wH3Yk5pkENP9uKSSt4cS5Nuh",
  "key13": "4h4uPmZRQn7CRHGv6Kd7XWAjhs2cNA9sJ6gFGVknK3atdgfFGTSxKSCfbD9bZhwDdGSctvnrJVsMT5XoFGNHDcg7",
  "key14": "2xFBkVeAkBha3LXjQQuARTQv3rR4DzJj9bgeJPUqya5zfVkhUhRpCvzcvmFJWoMAGzxCYojSBpkszfeJyXgNLDfS",
  "key15": "SVCgkDCCLGUk3PndnAEWFMykzrAhAhW7vM9AeR3x8LGzRzDJxi6yzHH7QiXakm9YWQzKHDB6RDiJFQn58YS5CRL",
  "key16": "3TX3w1PSJDphiShLca5p4GqE119z9qEoNYb4GRiEfNrWzjPLXjfFQ5dZwt2b57PkjJeiBzFhzogXR6HWJkdQMSo9",
  "key17": "4hXaoHAVSTHxUwQbqasZzkgqd7Ks9wLqLp66Vnenj6irau9fPuEMnTv3QaDE1ctTMvRPdUuG7NfB7sBWw7cWVvqD",
  "key18": "25829XqxdVposhB1o5jQmMoyAAjqCEHkWb7oD5RqGAApZG87g5wRUSe6v9bqjarrEp3XEjZxixwTQE3Cz1uvMqtW",
  "key19": "4ejsvkWC1fssjdTviZ7BSvSFfsyC1VBw2gAtqGofSFPWqH1RzP3fsJBSb25iwRC8PoDyanhBnWBtEtXxhGsZfueV",
  "key20": "4W7wwDrLUG5BY37NYKnHuvPpFVNSJtBtAAMFRvt7w8BBhZPEFxC9Tq2VWe7guuA3gKE6T95hnnB7eb5EsTjF2xwg",
  "key21": "2dP6L5RvP2gyf7BSRc8nEGMWZZkuDjj1RQs8WfDLWbKzryGJSt1GhdnkfrpEbpBvSq8FvAWaPKjWyuY5sQqsgdyx",
  "key22": "4ozHHoAJoAdzZrBjHXu9A1ekuv7veugSvHs8dvcGxsciR8cCfE9UQiE8Pjehj7HYUZFAUdS6gKSXcfjuUSLzSgjZ",
  "key23": "2TkMsr5jYHfomC1Gb1NFqxLYhNSCGuxRUnFFuvj7oEjX1uaaxBJMwea8Jv18zcsZRyfTpdZP6nh8mo7Bnctro6KG",
  "key24": "4Abiq9tza9xjCLeHhjKgYFmerdYRumqLZKbNXUkd4H2xjx2GMzA3fQguEDr6gK6RXVSRMpFBqf45d53UdkoJVVFt",
  "key25": "4391QKVjEBum1CSrkWaC4tTA8xTSY1d1Sddui56qXka2XKXT4AbZdEsbfx2yUT1e9Purb8rV9k2gRGUgRoyyija9",
  "key26": "53fhaqgjH6ELjmzVntVkcgHZa1Kn1v3toiMjovDVA9xCkYNverqweij4un6q1UyuwSKeKWyUY7CBxpyYvLyfM9S8",
  "key27": "BN8gwHwPEPd6uUatEg69j2jQSKra9tAXTVUDFhMWzPNhsBmfMwFwSAa6bjD2Sp2kCnwDQzGzRnmTT9FebE33M9P",
  "key28": "55W2rW6V5TH3q376AXyNjuexQbNSkTiyz6Huw4vv2n5triKoRNjp7GeVng3LfGN1Ne7nZ3a9Zb5DBPFqKRJ96468",
  "key29": "4MgKLDgHYTFyEbcfvMaQ7283rVryWndYNUH95LfXhAZ1ToNM6GN5n7xBvW1hDuQCn3TeHmEVFA3eT4johxvsQe1y",
  "key30": "5iSvMZE8oFUBHG9mrZzcqcqnJeWYJ3VFCuJ43BvFYhDrsUNeJStJVsMxFGNeA1ZbDP54kkHmUwZ3BGpNoR4GQxtX",
  "key31": "2iA8Qj4uFTN5AiqNZM9ogQNXSy9Um9NrAcSiVtdfmPqzxCMzG6viLhSPUmcwGVGBF42JfJoKpiFEsfynDZKXQD3u"
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
