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
    "5Hj4r1TRbvYJcWX5o2Aw48pxj3TDhhFLLJK6zStcD8Q6votHU96Ev9QGA5RBbFXj7jDDNhG81VhLeQP1xj2Df64W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37w5LFv3w17aPHsvUrsJgNNHomGtHZsY2Z6TNyLPz7bAm83o8V5bTcJcmfcDRUm3prPMx2BM9abqMffAaYu3RHaB",
  "key1": "2bLXvNkNN4CopAwbfqPpvry67Mwpy4KbN5p5TnN2xCZnDdqrsEfuNJjbwhwWok5ddcsNvok9ax19arPNB2hi4Zw8",
  "key2": "4xpXo4iXYhcvQHGjZSs8uYjTJZQh36Z6L5EmN14XNZhTxwP9hUQNYbgh4ccH2sdK5XQwwMsbodxf33CcgbG7wTcb",
  "key3": "5sbSS6a31Tsiw8hKzVbT78kpT6khPq1PFzq7M6gFTwq55SXvzSLuUSbhQG56zZdYUW7Yiiaaouq3YLm31rEqUjak",
  "key4": "4jL8hC7cqqLAqJh4kVMkC5dynGQe2ndCn64Uc93wZySw7K1oicZhjXf3HSE6u24HymfVEkm6PWdv8DUZU9XzSDw",
  "key5": "3or4JRw2pNUe8E6kjK2bu1H3c9CTSjyw4gGNUQwBsui68oabPrGC3RDRxzatqD6i5hbYFkjix2qDsLmzVSqoGbEH",
  "key6": "2yUrKk1jVM7C13JiqmyonhtPbCXkq8DbZFuDD9MrJ7irC7d3NLLhFHLN5jdjuh8nynFkojYvHz2fpi9yg6DErxXD",
  "key7": "4j6a2jg4AQikBtcDZ5pGX8zxV7fhPLJ4SoRiJRsnknihWUYJGjGZGR2too7v31oDF2eCZDu7bh7MZjA2JmXcMH8n",
  "key8": "32eqAuJMHmXYoDxgJqrzuTpq3QffXbTbFjFFnwLzfoZya8j3qzckLZiQVr6krRQPVkzQTv5Z7aZ4K1cBSRGyLfrY",
  "key9": "3WXNkbT181hqNSQDqA7LgsvLjqtcQ5jLymyuj8j7wLU41TwiHAAFiwaSabRQwohxjFP95BG3GwJ9ePhinxoNdPhy",
  "key10": "2UybBmWCf9gshJZfjFPrU5675Lprie7n3g7xAcoj54gasw4KnkeScDJc5y6WN4eYxKMPmTdqHcjxUd2XUX4AwRo8",
  "key11": "2TNz5tq8mxUtq5CTC4ZbndBEr3tw2cZHUq91efKFVmNV4bXUXugpnWiQeRQkmdqzLNLs8BNmUsQ2god7e8QenYue",
  "key12": "2eGVy3MrGSWMwN4JpFVfVxtKjCGEdMeHgXG1oDR4Nxt9ApGtoZipoZMnhoouJWj6TBQMjwgPdUBaZB9jXDVr8V7g",
  "key13": "J4RCgM3nbyvhvayWuGvJvKqUoCNSjWV7VmKDddEsfhsqFLG7G7n8YwfATVcVmqNTNjbG3s4W6vofzMT8qPND6b8",
  "key14": "3yDDtt3USr7nnqsjwSn5UnLa2NqSspFXGQc1cTcHGAZUEm1kgaz79yNSnxiE7D7v5nfbi1t6153QqtFoevfVReC",
  "key15": "WoFPzjTBKP8z2sRsS7SWxZAXLE6SXJFsFweDkaAFKoa9nGPwbvFx4mcw7t6bmcEdJ3grgAD4e9uGcFZoGe19fG9",
  "key16": "3jYvf6cqGq7cckxUsQTxFHQRy9LFULjpZQqUk3GjXSpvRtPr6f4Mn2rxUcB59mtZqBNs4gef2Swe6BfmhNAxqUGt",
  "key17": "2xtpZDHNacj5BEQyH8j35MBj62QfQMcxLLgTURRWaRXnSEMUPo23mdY3QPeSy4LxtLzzdkGnbNvU6ahNgM93bvWQ",
  "key18": "49WSpa6CDNT9duEq1EtfMF4cogXg7wuPE1sRX3DvRMH3cRuQNryJQdtwZh7wnsAcDToLxSP4yDmjZikhwEjbFZsf",
  "key19": "4c89nNmgLKjgfAo2R4d5hNPJLmKfY995DqnXEauU6vUadxAAhQsWRi2Uv3yg73nW1pd6nSk499j2owy3BGurspXj",
  "key20": "4WQymvohhaMum1PAUx4maTeCZqYGZPJ4KGYDxpWDa3T1UzkkpLuuvJtuohCLUx64FELWxro9A9t2Pi86grWLd23j",
  "key21": "2wDcPh6WXU3Pbz3UuCZkf5DujYeha4ERz2f3CvZ56VoxPiyLs5CcjVTvx3pircWXLweHjhX3TdZekhknuc8MDwqm",
  "key22": "33N9KPGPyWkM3X4hfsaLUGYquJXSvzHXmN2umpFP3PEWHeQuQodUGs659wh2zyYBWmBdsX3RfWMRbxe8PfdLsTM6",
  "key23": "4uV1CYFPDPpoDweQ9FR5qhTFGvHiAxg5CPv1q4urxMejdYU5dBpnj5qz2hHtp4gqhvUJf1wVpb6p94pAL1mcitU7",
  "key24": "4aFjxxgwqUk9EiUsvnhpqpfEgkWnGCeLoet2YHBfzvHmTtt283A5yUc85jextTQUey5pz9bawdN1UU5LfwaaLJEk",
  "key25": "m4Uq4dVWpQ8Da6TC24myaro7vNDwmZzQ5Rr16QgcRrnqJuxpsZmcwvgjDwVYHu9PG3CSUV6P96YNCKf1NshX9ov",
  "key26": "5udetr1wp1BvXmmDxiv41NLVPhgJEPWnng8dE8wL2cfqDQpff8NMvPGRLPKMjWB6tc35C35WZrZ7u95Pac5FVE6D",
  "key27": "5ANp67gHrd4zhAGLLxZQSRYoPAMbpcKJesP3H4E6na96TpAd9rcvutg8wFMzPPLYXsDN2h77r1AwSUQzs32nZUof",
  "key28": "3P3YMoeYUCNMsnTNzeZ2SCrYCaU82PPTRqwntsmNH8HYP1V5ZD8KzSQBVQKZDMK38h4wNRXUJheHcD9LjLndoBVe",
  "key29": "5ic6PyKJqB25PbrfAeXDzvLCje4zr2FepZxsPLpzNEKHSFhkTEfsKy3jEaLiCGM9Qys9xogTqFfspwKfxaWWKCCo",
  "key30": "5uR4itGrVS7bCskfpeJdP6rpM2o1Lo1J5AS9XZhHQzMoLThJsM43TeZ3UNSgts3cBs2XqVRXFCPiJSCqQG4STHPY"
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
