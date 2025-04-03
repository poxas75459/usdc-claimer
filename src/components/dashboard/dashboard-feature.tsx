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
    "4V9BceoYit2Ww642GNvj6YipX7WV3P1v6ydFHW2UXZcZ9Hpqkqrm4GbKRbGgsGNnJAWtteqZM1a76BXrCP9px1Wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24XbRskUH3ZPVuAJthVD2xi5H62Xoq9VMDt7EiW9ntYjrVoeLfPZdM7AgWBdwTQKBrXgNkxDJLk4xHJSDwHGVTBn",
  "key1": "3wHhr4579SsTfvHVgg61LTintM3WVZVxayoo2EPnNxzrxJJNT5cLEPBfzXhBWMLK8CWMcV5vxRb8ACLGzU2Fr133",
  "key2": "61HKQYifTcGZFJNcc246XuchcQhsrWgso1ctZSRKrJYAT6wUd6T8iXaD9Dgnz3ymjzNvQKtGb7FDUSHEoGo2tdGb",
  "key3": "468z1J858QQhRyXCnp8ExQsA69FrAS8bM14yrBW46NisyrzRevNFhLwt5HXNLbHqi1o7dSXJET3E1ZJpBL4TxxuJ",
  "key4": "3fBkQvZJGmVkgnJGkVyVW4nNtBQjKirc3PmaKG1JdUBi19WymqJ4LpSQ65Ad1Ubg1rxPMXwGpsfhRureEWYfY7jj",
  "key5": "51N9RJYcVTRfoW18NqXhg1K2PxjvDgRZkU5FSiA4HwJX5gejHL21yT1oNUhkadJZgn56jFEksc2c5QiCH2A4VyV6",
  "key6": "49zy5FVJXM2Aq5JvdiNdfLDjrGhuVLk4jLfcnbzb4ZnQw6GZgpai3Z2zAZkdgK8sWGQbKQjD9ECu7WaVv8PctREs",
  "key7": "4qSr6zvwTh6YfQnYM53jmReU1f3NGVhpxpKMR9zvPksmCuy7V4N3qgBpMM3ULyGuTeHYihqDqL1P35o3gTwRmQPt",
  "key8": "51rDgMuVrEHigJXRaehfV6HWFSKuar2cM3W4MN1bnsjupRYmcQaMeyr7CkqPiZDaEi3Fr5iGpmYJChCzfDD4uhiq",
  "key9": "4Xu2oAdVHJZEwtc75E9XPBFJAB5vr9DnXAGmQF21NkfhLwv5a6K92fcFYojq3K9kpHmMgAHinUpmiTnbTEyum8DD",
  "key10": "63Fh18z8p51WoReUbKZp8ccQNNUGRsgTg3u4zLdmmH5KcjokRDZxC8zetDPQ3tbr6hK4agpQUwSHCESWQmvTNJgB",
  "key11": "51s4v79sy5NjE64bKzYDUww6PzpD4tMg7kKeQSEWoWL49L5uinBJ8c8XaXSARXACqZ3gRwAYwJUBp3DMLcJcifyH",
  "key12": "5pCh2YJbAHdyHdYhroiNWDdRMjALd4jMWYJXrASQaidWQMdLx2753fwLYHjhwkSKHNzjen9jQnJywpWrxtCLCQvv",
  "key13": "5WGCuea62ReobaMKzwveXCPqxoqQ9uNN84yPKVFUFrWQ1t73SaRncaNY1H5r6p94Pa2csvNwhgnHwgwBLHuYeMWy",
  "key14": "Cfw8FwVeqtUrydc1qY1FNnQWD6JThAtDfV89N1KoyaNUS4eTm8GSLFQYNrWfL1xEgcd7NKr91cAN1nmab5gUFPg",
  "key15": "67XsWcRsvTpmCTTwb9G7QNJf75LMqB9k9tLvz9mLsaSmrA1REHNdSa2rquyRvPgn8BzWPj1X9tf8ChYiqxSrHPtm",
  "key16": "SaCcwYFYEyRdQxfmmPMpLjrrsdqNYrARnDGbSSTJRKV12qYrYRbQKnLtsy7nXGQjEN6JxCvYq9Z1zv39B5ypB9r",
  "key17": "3pADg8QyzSmEG7QaQzQVveVRYiiStT3qHKtcuNj2CZcM4PguMkjGGZDKFtc62c3TVKGo4vFUdu1tw2Pf4VEyp6w9",
  "key18": "47HMAgc7LW4c9YHG2cgpTwbXX6EPrk2VmduSFHp5B2Dt3Y7QHeKLFJ7AwCMNqxzdgaYDdpF7VNsKPG1EEN9gP1G5",
  "key19": "4fA9XHGxPuG9spGaWPxE5qVyGQDd328bJzFapofsDHAkPaGuCHhdxo2urxtbFCywccMEZKCEkitznBX2mP8QagVM",
  "key20": "5u2BstDyLqM5AzZwCgg1nQwYtzoWSVLi1W1et5zwzDbg6qV2zdDMMNcEJ9QX1aKMDW9rEohVG5thki1bSUnyCmRD",
  "key21": "4sERDdpLSAwWq9aATPmwswka3ajJzmDi2qg2QXqQW9JWUqvxALJvRzi6EYEufV4ahAS6UsRfRAEmATZvf3qqua4y",
  "key22": "4CfWddSQxaY3kpoYJvXAfAZRRdQKQSaPeum2zKaGvCt2DrYFvBpTdMtdUN8RwhzYQ34U75tKCjmnubFUtJt8soZ8",
  "key23": "4xyPsSo1sQ8UnReDQzrLDd4Ua4bMt4GSC9nJYpEStahBTGcX9YN8ep21cvW5Pat4SVdjswmZ5B9KghNekUWtyz2Z",
  "key24": "mf5xpo9ZSmQKvV9RauzAp4pohR8YdhNMoXGPfTsCZxavFaeJEpxBdkY3CUPDzUZBdYPs5pNTPYnHDr21xWE4Krh",
  "key25": "2Ahh56ic9vHNyCSJHJTEihQunZcv9VjBQvxCqj5wpfB1PYo3xYdadCsA15CP7jaSQ3E92KFZnQjPjsr9icb1GWij",
  "key26": "36GdbuqdHaPbCXoyjdS9TPe7coEB5BfrBpWeMSwBGRi3EvZVkJb4EZTTq7BMqQ95JjHmXqd8EF1saUeH4vsTTmxo",
  "key27": "5M3zMbtUX4BsngbwscESVP1n8i6L1Q6eXpSzVNQxjR5HWcs21sN4dM6sqgfGiQ3ZHGztvu74zhotP1Vx7iZuY9it",
  "key28": "62gdGQDhmnit565Jj5HQDCPkQS5rjUwRNm7AqYW6FLgVZxvrUo4PsFmGxCKuCvp4bprLPcnFxtWnm16iDijtqe1H",
  "key29": "QjG2ba9TkhhjefH5TCxrCKRQ1xS9LQjPtj8jvpZNoA5Ey7oubr5aX9PzUsypSksVLaE3E77fYnUhcqfF4cGCWsJ",
  "key30": "4CGf5DCg3DbJb17EuVbCAPXdioJfMwc8CE2kH4s91YXg348UDn43BGJNE1FPDpEriXFJzi2asuucLE9Zzg9C7VT6",
  "key31": "2zwj5oZEWRvDCRm87kMCbp9iDZsgyrHfttiBZaKuN4YrHDJRfjji62tXVWwYfFFLEA5rQX4e24AzbJDLFJDerxVv",
  "key32": "4aAQEbd7WrfnzBLSrw3LDNFHr5AZ7rghc81p17oHNSy7gcLf5jtJ3kcU5cxjevoH4ti37LAKa3bNSgHzT8D13YD9",
  "key33": "3EEuK3bY5J6UWEWiYu8iqwqjM3SnVNKqQAUXnksC1qJovCA2F8KDyGA285MHHKX4MbvEFoC4owMaWmbQpDxwbx3Z",
  "key34": "3tVeAhXcU31J46LczVWKegTC4SQVQctZ1xZKTUByEteNN4xVAFXp99mT9FQjBBPBWg5y9zcrpPjHrcMBBERdR5sA",
  "key35": "48W66sANoyatjQxhvE3ai4BPdQmXYrmH1tzb3tx2BbYfpDEYqUD3aGjd5ddbqwarBANiiTKH11sKPbRArgtxLte8",
  "key36": "5rpkJePtSQrMULUP2cH7YmEpo7jq7ePYKmWsHapDn5Jp3CyAhjDJMU2AGyPmybjR1EJ7snPBncWPVHmJidUV1Zwp",
  "key37": "3F1nTiPya1K8v4TWyQk3nTgzJHCnCWdCMgrJoMcAiy7Y6yfzsBxfQjthuy3PEinLVKqG8XvHVB9h3F5TH9pyiZ5c",
  "key38": "58ft6dku8ynayjQekDmXWy5dCcjW1rNKqJFHXwRr1qCpQHN4CPVGx5wby5tW1SQ6qDVdqyf1Q5KE7v1MwVtiVX71",
  "key39": "oL2TncxQQp94f2DjzijCZKiRMVJPju2jKUiPxfJP5RFnDw8MAk695ZBTrKktpcuoAhSypuwAE5maxhjxDojGk8W",
  "key40": "RjVwHaLm4eJuXvQVHYExF4nkyju6CZq4b2E1NCCZ184421xLCZ5oK3W53GmnkXhYyLBQb1S8tW9SVjNuBL3hHj4",
  "key41": "52yh52mkDKqnEDqc8oMyKBfebztzuNZCTbf4UjhaLE3ykhkRVn9LMkMnawxqmXSEUXvzi39p6sG2i3CxDHPZwEFc",
  "key42": "4N3zzQNbnzs239vjjYSQ3cmg93yKfjGJ4PfT15Yy913aVHTPVnARiSVBT2TwqY8xWeVbMr11LDUtdF9RsQmW5SZq"
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
