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
    "5ZkdJoHuedMeF56oup1z8jK468KQRem8z5j968Buqi6MNgbKrXDBkX8GvUajhE2reQKXVVPv42WCQS7N6NyFfG7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQSoqTZNoTXxrh6xEawJ2NZdbnSErf3SMtKwF4iSJ5SXZaKfw426oaes2mR5gTBW1phfMuUqe98QRm5ZBNbchuw",
  "key1": "4vBCsVBDSGsNNLMufV47TVDA9aTAYx8zAiUWk52mubiZ9jzBLFqWpukBNuKfjEBSWJPuZBJXhXPTysFBFLWKvgKf",
  "key2": "z2Dgx89UYhMT2kf9KQW8gZViinCazNjG9BHm5ocZ6pktbkJavreKGpRMdM3WfM8691Fv8A8TkqNWH79bAYYN4Ua",
  "key3": "37A57eHmwZemELK5UdceZncxohHkfctQDf7CkVn3At6faZ74uo5JmDp8NY8TX1kks2mNC4hLxHrfhptt3vHN3wiV",
  "key4": "zQKtwyPiv14kVZkeKtsrd4d67kiLJgk6Ya9UjbxfrEqTJs535SFC7S7uwg5KXJDwXND8zdsJSgCQEyyP47cFP1m",
  "key5": "5hNn8h6vUtkM5k7gqbHwa2GfvEK3TGcm29FiNPWxzpR6RHXdkCzJZzH9A7r6XLLHuX4DYYQC9yttUteTAWBrxZo1",
  "key6": "wWrLXHfgB2G932CmZbLxuY6dysa59ku1Hm7q9w9AS5y5QrHa5Z1o7Vz5SR86NRtiwFFYL7yuuCicdSGxwRbVSeH",
  "key7": "eVQBZjtN1sASXxnF2UeBEGJY2RysvzyrRn3fW8nZCU7qgxt1dbAGXFU5QLWvoZaQdU6rsCcoBuThn1RMwv81Hqs",
  "key8": "Vba4NG1sBjT96vt8kArfrK2huYfgR4UAso3t6GLKCRKo9Q7Mxk1SDbuD9SHGQCZqCHU1XiD7X4qvCdBNgeDzVe2",
  "key9": "2ptCcNgPDoaYtzyFzGrUz8vhuuwgQHorGAH2JfeyLcUHQNJ1Q5NzuaATehMt33wmder6d1KAQgRpxoByJ2KNcxJE",
  "key10": "4tgzazMQKZmzC29bZUZeSSgvUERk8XoaZjbReKNXLQCsStefzfhnVcCuySkBL8z4D1WkLMgP3pGq1f8H37ajAHYR",
  "key11": "rg44jXmgPtrercjSQH5An2pRrYuETcdw1jfCbRLEv63VkmjDbGZBFbSi1KbV3bXAMfkQYCmzjrhgShCJZXSnsqr",
  "key12": "7qh4pQsmNbgMqd9m2ow8gaBx9dDSku9i4DHFW8TinwNLWtv7NWy17fFwvp9QKzAVNeaVDM6N3vUgqFXcgBhpa1C",
  "key13": "5mmN3A8sY9JhP2dxjn8uk1ChK9wMvu1SzCHH8aGqgj37vWRemxYX2p2j4R7PEt3JqRjEKcgaTFMYWbVvgXYpm1Y3",
  "key14": "2jeDL4sLbGzXih4sZSsNYJTbcxJeAVP73UNrsoW3RD2CFKAn8pzwpKkdVDAf3f6hAkTwoHM2BTnpicfunmxLuQnj",
  "key15": "osQkvjmftAi7C2QaQbh3vbqjPFSUqQfSVpaPXnHGKf33CRF7YoPQ5C3T7MD6zBjtiRsKwaHDbpywmNNPZ4mAxTr",
  "key16": "34L6nEU1SYsDtkeU8nh4dhPp7YsmevQaarBv7QRRt5gQWNy5ShoLTSEZiu2jUzPQjaNzzZ6BjskP9QDymYS3JuAw",
  "key17": "23P6ML5Lvrd21dNpyCXmK6JPnfpxyKkR87MG3ZrJapPQx7gLQfChaFp9dHTBRs3aAF2YdY5uRQRiNfzn2buABHVC",
  "key18": "3QpxkBrqyQWqReoJg745aGF4vHPGvfcFYX9ZS3o6gLJQfyjP6gayT1QWvA2JkmonJec8XxEGu79qXSp771q7rPZK",
  "key19": "32go2B2jpBvAY37n5HKTaeETYuh9QEJRpBsemMa3FMipp432e3sZB1qnZUgpH7uvoYmeafefpTSeidXJpaeYN5hv",
  "key20": "My1XjpNyF12LBcqHCtY2WPkFJJtwYDCuizTkx6AWhJdayUnzs2HfZJXx5gekutwG3LvbgRNuokHLoxyaghU8SrG",
  "key21": "5kFKfS9WdXANesG2KmJo4Yc6WtMdyZPDqNMbd23ajXb71ukKo9vKGtCKFvqmgopBLchqeBHf4UY1K5ZQthRkNAoP",
  "key22": "4dFEVXLnTwJKL98yXPJ4ySMHtp6g8K5jsprAA85ox211Ya471nVqrAfZTMekz52oeiT75KodMSdN2YKNgqYB8KTs",
  "key23": "kLHemN5j9SGyopKUjxBbG9irqicGP3RBwChrVX3YHhSeh8AeRCoXUr9WhDP7naAA35zGkqUcYteeqHPcdvCmd4U",
  "key24": "5YbjnyvBUTdHaXVy75c1Uo8M3UqPGqYKHA9MhnF2Fbu1bpQGvTEtYcAeHWstgZehSheu9GxCwQVfaBK36rRcjDYn",
  "key25": "35S6vwwTpEox9TCjqZZjeU4MWZZidKWS73pD7Z6xNSDu2CzVhEAAD1c5NAihXBvSy3GP9MeoMPkL3hg76zg4YoEB",
  "key26": "66e5yLJkJjyg1aJQQgqFcV89YZfJLTcP6DX7dxGKj6YVGNKYuR5Ap1UeWRbCpbbH8ZNzCVmuZrkDSV4y2MdcRETP",
  "key27": "2yXNqHU5bPw2o5f1tK3YGLTYhwDt17jfYUNL3zmv96cGjLzYgAHSMQHrcDA26zgDVHy2NWTJkWsSdwNzS9M5oyBp"
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
