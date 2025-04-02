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
    "3HpX276fQBk2eSpWCu6pHsSCYSDb1yeKhFsWxXzvtvj9XM74agELAK89DvBQBcw6ipx6VBH2Dp25PMewqP1jREnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y122KsftkkfEzcai6UPCbgCTVUn2Hjah64NMbCcWhVd7d67yZbxgM99AWKUZSoWdvT3nUamvrwoJKLbS4bpPnnk",
  "key1": "5YqUUvQ83uCz6YSztFCer2WJVEZuLPUTCitjGh9tSgHwyMQhCjPFCDcFr46qCr56EN3S84pr2vkvc9UH1EYzqqQT",
  "key2": "2CtsZCN9MKpTdUBDDGxBCGtepZDSKQz5qe5rGvcW61gfHFohG2S4shJL2G1MgDibd3ioiuX2U6JaYHBgNUvTSedL",
  "key3": "4yafq3beU2CC67xtt6Wf4tMGHPQaQ7eRSyzZRuoSLeRx1Xgaq3hKrARnGXtEL5c4BwbUjCMamusCeSSzzMbVXrXM",
  "key4": "4HaVQEfeEEyGGGEt8gazNRQVjKHh2PuQwgFyT28M41onXQAnCKuS5SiyUGcuR8wj7hSFw4dveFymNnFdmt5BQ59g",
  "key5": "59wxHiKtp8WoM8UU8mUXrQXhkvRjJP3ERBXFJLyqBYg9jcpYbr4tBUtTpHipS73o4g1CgN1mx25VL8cqNzoNDMbE",
  "key6": "5VsyJq9X1iRDyXNqBpHV587oimNTPQBwYA3b6so7Gq9J5CDq6XyEnGsfu23jE64Nej6MEg7CwLpuETwdH1ojVEvA",
  "key7": "35e2VZisxBtQLDbXAXGRMhdtt71oUNigMbJeDaAJANQzbETwzmJ9LTRvm6R7a8uTNLc76BxfcFEfai9q8FCHdaR6",
  "key8": "3emxGCvre3ZszCCDhxY3ifMoYDJii4LbpU9jxdzhK9bUuNEPnUyUha6QiodjPWnEp7PjLvAgbAPEjtZK1CGRJE5B",
  "key9": "53DPYj6FjV6mF2vQ8mhsS3FeZ6nqvZqhv2Tk2LozTDj6yHEfhYiiUcbqQ1uZvu5YZXTairwV5rNVrPQ3EoXhjcM",
  "key10": "2cX5yR14rPjQ27mpqY625AP9QHofHXiXbvp1mosE4q7CXEmvuiRURyhp57Xzdkwdhesb7dS1CjLBMat1Xvh4TzVz",
  "key11": "28BRCr3GeX32vUUah3qzaeJzzYh7sFHteTSbUfmPKTFQeuGPvDGbPcGLofUUy2oQm8YhbY7ea2WBhG7vS9xLUSSt",
  "key12": "5rKBZFgRLW1U8uqPnkAsigPX3Zd8AAwKyocmpPhrWUnY5aa921pyHSDjwtdt1cN59SErSeTeQf3HoNSTrUsooo2E",
  "key13": "2pWSXPeibxkMoudnHxxW8k7mpk3QHhvVPcgTs8VRMwWUZ9eXHHDZkJP3kTSyBeu8CqCzTkbiCXrzoFXJfvmFGCXg",
  "key14": "4VJHowL3xaQWKgNRoo4mu3Naux8JHHjmKFgFsBiHQr1uG8fu4j8hbHKs3VXPRaPRumNqbQD5v85yzZgeEcynP8Fm",
  "key15": "3MMBmH2K9Cz1U2bQ2gMA351UZ1n1UdMFkEhT5yziCaAcUR8q4zeK434UBTi2QNwV6KUuYkrsNgs7iBH6YZ9xcD2r",
  "key16": "ngKb9dFMtHRQDZbwG2vWxFDsnMnqRGZmA8o2uRsC7nwvUhBzdVKFrzqYy1frXgy9SDaUzwzNWDu3C6GbK8oZWtM",
  "key17": "3LiJm7cr3KHYrqDtgUWoqLycF5U9U1WtcmswEcJhJ7nRq3oSyJ49szZKftVuEEWUwkDrJidbevsZ7mtsudDBhqtH",
  "key18": "3jMoFwdmMQsJL7FvC5wqBsY1syvnrAjzAm4QFUHzEesPUJSfnqkYyxBw9AwoNZdsP8tN3g5ew7Qvpwg9sZLQeSNa",
  "key19": "2bjTkBwYdmFdsXYP59t9nXT1pG1Wo7pvPd9DcaSDqtPwt278dpJr5uXhYZNmZM4YMiEb8dyYqnUGikBiXEJNRAN5",
  "key20": "5RXfRhambjWeyBaiuFoAcnfnTxD171i46MxT4iQcX87PMNoMwLQA8PCFxMZNrHGbfatJqkgeuSyhVK4QyESEkAaM",
  "key21": "4yK6aGbXdYAhAbR7p3PPYiozedHe4XUog9ww5ZsRBrpLnxsJJMbVbRvnQiKLXj1Gbq1UmwqpM6qLAJZQb9se2vjK",
  "key22": "4uiMUJ1iquHzk2zTyuh3Tyi87EvQ2nc13Tm7vxFeLbjX4wbVT6jkpZhDXY6BptV8WgnPRhuFo9WGFMaxX24MEwFa",
  "key23": "5E7Ax4hw1CTrNwQg1XouyaCdKPRBS92L9i2HKrv35Us5hpHEfP9111EfL6Ye7gJsvEatE1W4FbiqGbmg87MNXZeo",
  "key24": "bmNaBhpxrMSRyjPqn8Dzt9tuSEojhwcbeMRZzjUQrvFRtiobG4iVJkwRvpwN2y45VKfQNMzHNci2b8fZPYzCmKp",
  "key25": "4Pqr18R5wv5tTWQ7xs26xsC4BJVNgN8u57L8vzqUCVdW3ZmPgLMGRjcfALthnYeyA1naYnhh8vnQ6Yzs2Qkj3H7R",
  "key26": "27uwyqVAw94Tfd9MwvntrppWL5PVmZtJNEzejxbCvBEL3pmihVvdbzRULL6y257zgFxcdNno1ujUVFDxFcg2hMqo",
  "key27": "2KtozyVso4Nh4g2HRZqE2wSGwcpRNX2db65aDJjRH7Yqv8vzNeZ4wRzg7XdfG3kLyB1DdR58FwTz4xaJDXzB737K",
  "key28": "5621CJGWYFy8zBE64CUMf9j65AiecUzYumav8X7Q8mdqvgoH1Q1RZkKKytYCbEMujWKLQF7u6E5zF3WfrngoTQW",
  "key29": "4vtKFEJtsY5YaL7gAEBcNqUtTrbknyFtdF6yf4fneiRUaeHjmW9f6bEro6ujH5SfVYEsrkwCAJ4cg42r3fMDuqMs",
  "key30": "51RLxeifu82j7GGRNifi1MVkKE3dqeurGTp57W2BTGCTU39tuuJsZYCyiCjNsVE39bRwxGsvnofpeFHeAqGcV87W"
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
