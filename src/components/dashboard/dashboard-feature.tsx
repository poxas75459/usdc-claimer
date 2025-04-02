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
    "iHQVDAbpfiSDPL5PDhBdSjDbXiwTkCsHjXHWedGLLYY3ievyhVJLtZspUJtriqXCXV1oWpReZJ49ssUo22oQHWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "549UYmBZKWfhdGwegMfYGJuFwKkXrw8ZRZh4vtPfwpV1AZCrgLraQVPJspJTmLfRjxmqVyyZ7USATX6qfru91aHq",
  "key1": "33Cwt6S376E9cx5Fti87D9Jp43a5Zm5DAqEf8Lc481tYN8bmDJ5hddB1QQbn5PpshGFXnDVP68cAF7yMai5qfMdJ",
  "key2": "2SyegtctbCjWQoRuZF56jzK3WoagSXKiiQo2Ac3L7U7VHvAuJ3vG5q4B4821wdxXTAfmuAjEyjWsbgFp4n29SaGR",
  "key3": "28BJwVzK51YFKaNM13d8FBgk9QKBYoxUGadecB3YKpm8EawRjDQRXFiB3m46PJGqA7y3uXbFSe1XCawgZFDKgXXZ",
  "key4": "5akvmjBq6V2YtPPpZmfW5M84fBJj9ueQPHocSyrG2daFfYb5rYz7P6Dv47icQmSsT7tGjQRkdzGjQfDhN4DJeB7n",
  "key5": "2B85ersm8pVpSeKkMoemzaHYGZbcTKLRMcp8sbUY56bW2tyVuf4jhxTsCTvFFQiuWzYwEeX1BvrZRgKH29L9FU6Z",
  "key6": "2HDQMoSk6VzoFAW9FV9BCzJuifpdVCzvwqNJjCrUBjYbEb789j31xyxsaBpLjBWq1Y7qByAmHcb8MY2c1aSvqsx",
  "key7": "3vEMQanthfPxe3T1rVKJjwL8siz3Cf2DXp3ogcmoMeUPZMvTYA69HY7rK8c1RRfXTPDoKk4yWUkurD7UrMgLreWg",
  "key8": "5krmqirbWmkSqEJzrxaDkjKDpSiLUouYb5p2DHW66icv3a6gp7PMq6biuUiRBwXp1d6Lkr2fxxUpdq6tWCdig9JJ",
  "key9": "3Gq3bRhLWTwHWB9zQoJfwK8yWQ4NgEax95RBREeZKBWnv5g4DJZ3P8rqAqA3P5ARctbYoBk6HoGXq1R5j6EJjije",
  "key10": "2R8bgewsQf5YC4RcPbCfB6yxwbWqWuBBw2fZXxQqk4sptEXmmXoya2MAxNodEJ7whfgstzHZcQXi9p1iaXAahZVw",
  "key11": "5fmk6sSaP6uHdnKL7ttdH8F9yZ7UWg5T13kbgivK49MdfaVDAD729AbK5zc86JnGw83X6TveFXCfaH7uoZJFZKq4",
  "key12": "4ercB1cEmZnC2VnAyDdGuG3GGjxhHuyMehZJC8eZFbbk4vn4jznWw89GNmxRKzEjZJh6a22Q96WVDXPsqLmz3rc9",
  "key13": "29AZZJVuHpGmQ3gAqvZRmVeWDXk8gQdErUCcCrypbWKQsdYyE1XejYCC9AFsHJCEu7jVfsEFSHeVrNk7CNHnPTDK",
  "key14": "3Y3bS6irn4Ztx2CoUBASXTrRiQ9nCG1sBCv5FLhfp8YTyvxmW4vojRWT5p8EYp1nHoZx45Fwu2c4Q3dmzZ9AiiYW",
  "key15": "382VFxs8dDaqhf1ZoEvLp4c9aDmVMtbRDbaaiQmjzmGaaQgdt2aLD95TJfJgeq9smCEPYhnx65BcMxrUutAFeBJo",
  "key16": "2MraiqAzSmuwTeYsaNNBiryuC1PYVuPeg72JtZ7UPUXtQ5yfmvXMbgRg7sH9ogvk99gQmFnamUqGLMNjX344cBoF",
  "key17": "2P3utdqBWp2S5v1yHv96pwHPFfZt8Y3tzxhAFdPACL2gp2kPQhK1MZ1pWiuWAXTgBuP1G7gFf9i9dC7W6jjoh5U4",
  "key18": "2dqncfrGjHBKkHYMiazYvQacoMtFT31XhbA7cRhxfP12ckDHnY5g28muqdJKtDbWPZPRyvXcyHGUfnN8wgwaP3Rc",
  "key19": "2439H52fuSTH7Eda8tgr3fdiiSZZPmRBC3TDpVPt9qu2nEANPAAMn6XNHHsirP1EV29JLc5NhC3D8sDGSAJ7VZLY",
  "key20": "5BMo7oKEuzCyGRXR3TDUcmKVtJ2oGHXp5EajpkUQdJ25HyFXpTzbabs4aGk4tpsHXL8RyBskn7gk1x9SAhczdPHL",
  "key21": "2DUadUDeA2QyZFTcjKgnso5dsMmdhJJafYBxUyMPDSwgzVhSiULY1kAfyEso4m3iwGk2wJn4RANXEgPb7mM2JeM3",
  "key22": "4NFK3Suqcw5VyxYHihXhaMJvoa9cc53umCVptwhwk9gdhvktp3ELemVUKsLHFWoMgUWZD6F6h1nQQ9AiX7ZZBzkq",
  "key23": "3hA9xEAeZbchdAgiuC6heWwmur5h9SYXRiQifVU46WCSDe73iTiH37ZQjcRgyUxjeiH7eypqB2H2RNXCCqSJXpS7",
  "key24": "55yr6XRAaqPE32CBWsDcEzSPEaWhwRcZtZxA91kBFTkkd9FVsJCLkQzrahBkWiaX5Gy7EYaQU87uD71k2ADeEQvG",
  "key25": "8tkcA7DteUGt5XEik8tJZA8yWsvjxuLqaWH4ioZg3ypPQ3Wesw7ax8yjen4AWrFJmLX19sxnRV9SzuM5s6PBAaW",
  "key26": "3N2mBePoXcSAcsazejreb2yd1GYA5UEV2omAzuTLyKNWfT8wRHHs9sP5ore6KFcQeUS7Qo98L2y6ntFKnpxVMJpN",
  "key27": "5D1zN191XQa4okondX2XxdqvQ1Mw1NbgecCWaXhqDvKovXttRFQFiieTAFRtdBTzWMXSkjZqPBhdMp9PdmxG7on6",
  "key28": "3FEJy9SC7e89aDrwcdvNfgQPVkMa9iQmFdnxWqS9Wux2Awzd6j445QXz8Pb3Mzntuwwvrg6xykt9HwBpWTgPnk3J",
  "key29": "5mfU6vXGwfRn7tk6s5fzvRm4smGhjwQWNSHz6JBcBAq8cz7zgdK6bgrt6kzjZXaHXbXAUM2BH1ZWHjtTi3rt3kWp",
  "key30": "2z2wF4RxUCkD9NJspL66ohXxJ5Qsf1ZdA7oUaWqf2NC492BYEFRXdHGwg1nzrfC7dgmAavugc7AXXbJ4JiHBxqLi",
  "key31": "VbydPLU9bkCizuW5MtHHMSUyv9QCWQyee5owTz1VRLk78hNTm7MRV6kRABDo3Np8VKXtFDx6SAbUnVor7fjhppz",
  "key32": "3jtJwHEYEcpqhR7m966ZRWfycx8DEPmPa1vYmBj1DmXzmPoT4bVpLQVup32jNrJayZpR2vndzrY6cun26tPeUgbW",
  "key33": "5vpZMF7C3iN5c6qcZhu24wqgYtXiEfhCPdQbU73vP545H213KbLp7Efr6azDRVqKECWvLu9T6dk6Ucy9fWFQeeDg",
  "key34": "234cST5aFf9UJ1woiQoWbf4iL3pvkP89RZWrT1WAAtM4boFikqFiYrLJKGWZZxevRQQq32CAsosQXJGkdrQeY1PU",
  "key35": "3ub6yvD41yr6Ayn94fLW6XPskL5RsVAjfzVdpSEwncv2tSaFCmK8X5pFpXUCJHmpMicMWvREFwYWR5MLJYVtexzr",
  "key36": "5abWUWahprUDVjcDUEmmt1V7zgTTq5k7nNx8XNfQ3R4aQyFzBYXzJhYC3P9pqx8zUD8Ks7YzCvBuD2ZVLDctD8zu",
  "key37": "2qCcTQGs4NJsTAQcUB1Cv2eGDdcBFJiT3daQmg3stCGG61rBrptTdaM9xH4LSopT3Db6WKokBEk14peTnuSRp2RU",
  "key38": "4CnXdTskd16VU9JFWu22CtLCTCdJX4pieGXZ6d1JQSn5LJzrheW46FXuyc71gCgM9K3fdPsfu54oWPAUMfTe2QZQ",
  "key39": "5U4ruYjevi5XBL9mGunfGPLAL4FmNGSe7B1wX39uWFwKn2q4tEztWguGnzJhTnsBbEfSwr7wwWj2vuD4s9o5sBdj",
  "key40": "529Zbvstf1Y3Lo9v64jfW1231RRHZLbQEXgD8fXL3Fz9J3ZscpckdeqaVPvFWQjE3rLFb28Sncs3wH49bRC3UrWh",
  "key41": "3SwU7ugvSugP27XuY4ukM3yVSg8qAgZJaQrwfUPgD5TTUdJh6D3yRwJ2QvNYxNsMFAcPDvx5cNrMzvyKRTZ2kmLu",
  "key42": "4HmcT9j3BqLMHq4egE6w3UHZ9TTm22SLzQjx6oevNPibV9VnM1Mh94bmLLtuizbphniCPJdT6gf73AqYBC3Y69Mh",
  "key43": "2zqT2waRXHH66KinG7dVa7kmW8tQPUcWZfYb9UksWKGLUoseBE7DtANnxp3rofy4Fg7ufNdPUCPccTGaK7pUgbCK",
  "key44": "KKCjo5DD1QpC3mzQmCAzNrZa7T3zGf32oeW28bFbyUoszk8UZkf8xC7KMtxES1PAP6nQDNnqfB5cd66mE2r7MuJ",
  "key45": "Gm399cm9ryZqAwtMygzMaTGgjboL66Ena2iA6KZWmeb31Zy9V8XtHpkW7f3h9jJMPwwrmojcmwD8vXDdednayyh",
  "key46": "4uPVtCqZ7Ne4vA4RqiPARDeD88WWcDpB2GmqaLH6yjsvnqiFWu9Kk1RCy7EsphspAC7wjiJMt5LVnPBa16hkxFQL"
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
