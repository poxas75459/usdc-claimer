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
    "f7SFZveyy47Z9yQ5pyUfsspSCoFX3Yp2HC1sdTQ1DhW6BeR94Qnk2gqBkcVizD3yxcDwEQuqaHaiCD3mspD8KL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SCMGE7oyVoVMqz4qYJbd2WFCguZv8a9nPSxa31WiiRyVy9GZ4BjEqneByX85rgxDEDRBKfErUK8k9VUaRkzWEFt",
  "key1": "5cSBrneoCyNkjDHyEduyigS167PJVjhjdtzRPUrH341Xb6vEsfafDKKYhwJmVyVLcZnTuaGgM9uAvBmZ38yYZn1v",
  "key2": "2DYQq3SfSDJfRacJeevBAfu9pGbAAXJMDPkWuR5u1j22ftYkMLX59ZG3eeNh2CgiGhodk9e5hrXuTsSi3JKcHWZq",
  "key3": "4qnYuP6EP7tN6R7sYv9MTUBh3WreJj3MwWu3BineRzX3YNYqeAd9aBpZjMzpShCpWZme1HGKEJf7v1nezhY4mq9r",
  "key4": "tzoKtDjidLJNJzdpZdm2EGdaDkqyzVBCyY6LdAK3DoWDgR5SG4sSSxkRrxK8ddhgs5JCSYjWAD2A2SGxncs2Wmm",
  "key5": "snXgQoCQLdHeoT8ehmoJWYWTXKbERngPZeYR98aWhtk51Hm2pbESvT1HXC3NgZQm1qHMarguzxcaYt39ossfTWw",
  "key6": "857fM7agY8RxGir6ukgBJhDRkPUWnbLszQXdQpEvfX3AtrENYqmWXNhsq9NoPKXCrGpf5JWgkZfM71wJAdwHfwn",
  "key7": "5W5yN39xQAiQzFhmK2A8D1P5KTtkfLPfmv3kiLgzKqWMjYg7SfV4TNtWg363vCYH3xJSRb15w6wx9nPmR7ZZnZSh",
  "key8": "PKkGFGQdDAv1HEKAESCTX4tYSrrDN3c6Efg8kN5iFG7sHEnzpBeLLgPgBbRDLE5xFdP525aGbkbjJKM2tqLTChj",
  "key9": "3npTixFtNjju4GWXB5pM2GDjJwMxme1HTtwjtYcUs5BBWkhiakF7rf9Qxe4QixUz2rsAiJG8emiqc1A9oH6TCjC4",
  "key10": "29urip9XG9WRWKcUrmYC9bRguK7LXbjoQa61JPNPVPYd4JBK6H8b2cFzG7pFn7SwnyXKc5THjqiSsLApB8rHRSyx",
  "key11": "3TMo2PVBwnU3ebVNNzSVvULi21u1T4eWyuSxnEsBah82v3wWoEczDVpjabcffAWvnxedMCF823qo5vvUZHUbEg9m",
  "key12": "5rGKhNGAdHQgN5xtgiXtrMqK4RFUS6gJn4J6HWn7NY6WiZgscbvK9xKx9s9wRScEuDLsr5utvA8h2utXS8wxPwpC",
  "key13": "5MC9tRr82cTkBpLCn71qkLbmcC6GAZeiK3K4vvmzNHjLfiLdzBDowPrizhBHUm2mreWgxjFU1zjzW257iu63yXde",
  "key14": "3KrnWhBJZVvn49oDHHntUbxZvV9HLz2SzbZYMvEnqA3Ud8rFWPnwJcHQ9yP4tDC4sFWrGfF5MWVLzP1XUsQXpFXa",
  "key15": "cW2x6HpqZqx3dW6d7aX1GNrUGEMV5s8SAEECbJw7nYrMNhC15s3L6GBVqeH7gV94Y2DM89fi7ZG9Tk8jZuBxLyL",
  "key16": "3fp1LBT7sJtUJTabHUDfVzWNLPkP9JC3cSCyy6myLLW1RDuBN1baXSqQMGBYFycnVoXbdmyCgddArZw6VNE1m974",
  "key17": "4whADKr9jVq7EEEFHebkzgaEDVJPfM6824pLKLYr6EV1yT8AWzRXT5dsjZ7RMFWNidrEKiEPCNRE13bQu7mCYMr5",
  "key18": "5SCp65X235XseQUh6do78aK8uw4N8F6G9cF7mnePNiyq6vhDss9BheupMhffhh8GG2XseMDPsSmhpQSyHmh4fBoV",
  "key19": "3LLkNpX7oQoQcT2pt7XxaBMLTmyom7RG4N2d6TQEGBnJRVRqZDCDkV85mzmjzn5DLejdx5wrk3FpvCYk4g21ELSW",
  "key20": "4h9Tre9iJQddqbDDLRQPFJYuQ7Y6PW1NWH2R1YikvB3m38E4SeiLRYKYXTzWyUZqNCEmeTQr5N4rKY2fHcZqReN2",
  "key21": "4JmngC4rnhaXwXNnLUcgEXBiLW9aNUz9HC7gvKkz3mMwjZD1wt5dMH9aWk7C5PmMoHTGHk7dxz98GTj3R7ZmuAwv",
  "key22": "4GCQc9B2jDs6cRGccPYi16zgyPPuiTbH8JwsnaxkZUCScZw6F37ZH7VRRjw8xvbCd2kjJi8ty1NSn5MXueyQguCk",
  "key23": "5VyfqbN9GYkXgvPn5RdJB5g2tSY2Gn67jx8E2k5YUi9hZy4PTyEa6uHugGo1GEhayWPwj9NAajEr7pME7gLinEtV",
  "key24": "rnwLopYYU6Zof614kWDWsgWLrjo58Lry2CNRhHQsorcrXLZhehh9gHXGc3yiuZd9mmiZHAve27qNwq8fzguo8se",
  "key25": "2KgKspmzBTb73KYvtUQtc1S2Gr9CJo5mTA3RBxb1LUAzsEsabTrz6gW5S9zFLLidCHGRAhUenYWjndCjLmvjyCx4"
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
