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
    "2b6Ku88efWTmn3RRfUFMQjEcGDAhLGHaA1nihDyBoZeWiMsJw1wyzSUKhZ7DSwWJUsDEAeZDwx1TFDDzLZSd36AW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vqb1uUkQcEt6DDRuDJcsMatdtyoLD2L65MbtHgHJvv4LDrrjDHu7cq7cuWwxVczTCwugDWrTxB1EBdCbiNqHgvM",
  "key1": "51z9GW7Qxhx9AhqmaPXkqLVEaS8FSFhnVVNavxfi52VZTEnrZkzW6p8bAXVrgtNkr2LdPN7BUUsU7LtbsXNEdtbn",
  "key2": "4ATazEw3KDXnSL1qo7PQXmb3U7v1fwXN6xNCq3nTh4kTegsrgt5xZYSAWXLRnnBhEX53a9vMPUzfDYjuZvuwygbi",
  "key3": "4kzEWfcsnb3YEEcP9YLrCMCDT4QbQ99QrMh1eLy31UQoieC3dQzpUJuFoL42Z7xrFFBRxjm1fYjU9H1Zf8qVp6ZG",
  "key4": "3HejNEhtPuSQ3VSGkt2fD1u53LLuu2fjpyu3FV9JBq19vco9vsssUbaZJDsyyMZ1PxVe2jbQqSRvLWcogjxZkUwv",
  "key5": "2urtpEXM4AMWeZjvC7SQWTysFsveN3QfpPrGxwmj9Hnk5PWHv3zHKTQMHwcXJsw2QarXEGYmGQ4mgWbZVbctKJ8T",
  "key6": "4deL7o794G2Kj3jyPGaufCtCcKbhvGUsk8E7obaHGK1RH2TzbmfpJGkMqTSLWxGbDMJHbuPJNSfd1EKmAbFJgwFo",
  "key7": "4APRYxHkaZyrjXpR82BoSNWw4iQKuge6noFiCkgmWqx4FDK6Xi8pna9biywXawAfNh5qaMphxoDXJo4r5SNNqMfz",
  "key8": "3rjvnVP61tDJEVyXnu1cZ3ytmA2yLXX7UKzpFWK6W3fFKEPf9Sd15BCwy81W1g9m2jDpPPWaUsf4U9dLpiCWQXBY",
  "key9": "5LjQ2vPCK62CoY8gyEspNRxudPx1LqkzD5FPLGpUggkRpvXNm8pu7JAdEynHJjxTNQtcp1NFuEwGfJ8A566aEurZ",
  "key10": "2zD7sGFzRAH337d8A5eFde4xxM3mPBhTgt4fYMH7Xv4qUxiLFmKZ5eMKeF8n1yoAvrBXLiYtdfUWxrtQ9rC9hkKX",
  "key11": "rrFtDXRxJVSg8ytAurPSNU9vyzpvi7Ri91ZfaN8VC2UYjZiUG59dq1EgqucErAurUFriMz8YPxaY7JiN8TR7Tm4",
  "key12": "2tXCPRTecdQ9Nj8FcTgqQbCENZsfdj7P9erZaUZCkfCuHnFC7i9C6x2HkfSSydeZYbBRQkwcvDZEgVDXvMhs4vxV",
  "key13": "5WBxEygxpPvf9NWFGS1VGM3LY5PoiHhtqswoRG8J1q6bCFGhVE7D6GKQE99qWPGapUYWBmrjHaVqv5o7BRaL8bny",
  "key14": "5mGCRbKSTyveJoYUs3EFYs3NXsvr6fB1es11r6h2ruv7apUCRQXCVaDLrxnY4sJSQoKVSkmtheoEmPPUmVzs3gGx",
  "key15": "61vw35uRRbveXzKkPzU833nRbk7j1vMxNm4kykMAY9LKo5i4RyX4bTCZDat16phoxcESpSwebe1JdPdkWL2YNib1",
  "key16": "659qv5gNB4Hkirf5tEfVF35PZBVuX6PAmAHX7jmU5SoQyPHqf76xMCLfuo2q9hHKJyLgAm2aq11CrDjXEuAV7VgD",
  "key17": "3FsYUDHAQ4cL24nTSMVbpZ6imDpzHXZmJvgzBKXMMbf4mMpeBG3Ziv5pyPJVXKCEeMNm5epefJTxbYj1A27KDrni",
  "key18": "3C5T6AT92TRupHHx4LTvbV9UCDz3aiW5LhBKxQQUD8LAkaxcFBaZ7cRLFSqxtiKGikRHKVoCDj8nYHnqm6Ae6RzR",
  "key19": "5bKbPKSCujLcop4Cvp9fLxhongzxy44QcvQjRqVV1qAgz9UDSTPS24qTqEcVwe8x3hFgzn99Vc5jFnN1zZWARS1x",
  "key20": "4hyZWFbj3ZHtmjyDJKyfTghU35WSuNCFidtQxUV5U83rn9hh8aftsdRryePfzyioTVnM6m7QUJBNDmaZ1qFXtQkq",
  "key21": "4JXaXkzWj3MAPMKwJ9b4LApBzR566nKYtFxuQWnp4TyFsmLQmcRm1qrPEVFkEUceJTKiEncbzbpuNvG9tNcdnfVL",
  "key22": "3RxT2swp9BPsrk63FSJq3jjgTF6JtMKxPHAkAgJWJ1muSNJ97kSfHhaLgmTtsgXTLqrGyWaKPR6Dk2TjZrwZGBaT",
  "key23": "4FaMqskqR7DYQKEcLTXrvtN5uQ395eiVqvJd4upJkW88f8WgGT2rsHWiKoTBRid4668B6rXQmqRXLw6j1MuNoWtX",
  "key24": "4qnWmdekr1WheEff3f7Pz8Vpi4osaTd6KqNEVS4VeBnU79gH7u48EYj12vceasN2KcKE2kRDvgniAdtfwe4CS7X",
  "key25": "4e5npfHgJyxfSExwVDH2dcS8UBNxg7GvGR68pDP1o67GcTU7SCD57kx386QR9osHLL1Q6wLBNzKGpUwtxU78N2gd",
  "key26": "XCHnHdCQigtMGs6dRUY5b9KFHZBhFdpjXYDmnnn7HUeCefdXBFREQi2kMY5WCjtDsWYmLkEZicMXmaUdMhHyfPh",
  "key27": "58s6RiVYiu5RELojEJVoT4jkhGpgAGrtz4EgXNEUCcSv4GHUJwXzE4nGZ7FPNinRXAzTTDVQD3yraoeANKjPpbWD",
  "key28": "62tQfYVoHSGrXxk8KU27MWgQnWuWYrwdXc1CmpLJG7dmGWST32MJtcyBf18Ycn1QdpBnHPYbsWxKwVtCvd7Vs9wy",
  "key29": "3Drokv7gbCAqFMfqB3XYT3RxNK3rM7bLd3dCDhtQQjkJhiafheL9nwtRec8rfVzjmFKJNS19n4unpgNxnwvraj8p",
  "key30": "5K67fj7v4XAQyAPg7oz7WZn9XTWWn8RAcg945x3tEM9B5HqA6Q45C7Vp25ERB47CKni7KpiNcKEp3CRAxZWFsMXW"
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
