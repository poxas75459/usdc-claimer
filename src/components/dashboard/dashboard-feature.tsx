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
    "BSq2FB2WVrq3mzxPdy4HZufdvLo9FohSzRFHuydjVe2WyKXa3fK2228rTTJu3qcWYyYzx6GFgpzUjWRJAnWnmP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AscpNMRrHEqp9GJvfv2xshGFn3jQppYSUwfro8SbcQHEJ2T246r1jgYmEQ7TNxUqpAVxnSMPUHRgrqFgXDQ634K",
  "key1": "2U7XDgBFYDi9JiZ2ghWwgGPNivQvqZ8qTXYQzdqzwjToUCMcHLWLyGTh9ZRdWqAQvdazvs2mMc3Xs2SRFTS39AJJ",
  "key2": "2hffYPmuqUpAUCSy4HV7R5d4H3ruwzU3SFaaWwnrtvcHR9R6XNgmxJdSJxJDzXPay3J9682Zrb9oa1AYQFBR2nEp",
  "key3": "37rfFHPKmYNh8YGtx6U2DL5XTow2Pj4qik7iMaAoScVY4cAuHs35Rz7x8cXHtcT9g6XCa6wHixNg2CTuFNDtQv5W",
  "key4": "5hFtgZeneSDCfBtA4f22srGU74fdLdNtK88xE1NoJJovRYRr3WgM1UQoTmZR3onUK7micj4y6MKMSi5qJtLUucdN",
  "key5": "2WvKeaBZ9w4bP4Anpzr8iWYVikUXigwBx79vuQkDA6NZz3Evw9ji1QGGWUwdnbiTsERaRKbkkL9KP2duBbERW8QT",
  "key6": "9VaCVgRXLhMGc57QFNhpfAeNijJyibAQQTb66vdrtxLVo4Ca7ZvcCRvAUv8Y9cQd5fsXk3WsPd7AKDL6BcAsu8B",
  "key7": "3auRnbMbxXbhHU1bPkNuTjqDxxSW9znY3A1z3G9D4CmQenNqGfm7Mk5S1zmvXXr3oSLtmGyQpMXaT9TkuB3nvgHn",
  "key8": "4A4MGRvBwgJ6ysbAh6ZwPheDJjk8kHdTM1rbhJhL5PJdquQLLjNkSajjowTTGjfkGz5vxFB3hcTYBgKfWVnVK3NH",
  "key9": "2kRtVNQCAV3bmmKBjXfqNm1vqpSRPRqRzbZqm85wKHW5tHp1Br6MTSVoS9g38rCyBfisnRc5P8efxFCtEZmgRUV2",
  "key10": "4txhZ17fZXk5ubwb5P8nQpbVxthJTA4SMafsy88CMZDqR6Xorik28ps8XjnGvH4SHQCLsphmuaRgzGMP8KRSwmeX",
  "key11": "3qWLCquaFyxE6fvu6nDFAm2LQutNvEwbuTjCb9H1UEZWw6NcVjaAphxZF2Agt4eUDwgQrAoXFmcv2jbJ4Twaseuq",
  "key12": "SmxLQKkiwHv32Evc7BxfEyTPTyPNGdBXCSDTFFmUL9cy9YWWPBDPxrKu1GyehgZe4aVDGTwyeWZrXU7notGcWpW",
  "key13": "5tNVvqicp3W36uqpyqggf5WKEbMXJLTxE47pUzcVB7a6sVh7MYemr6xmmw4BqCjmGJEtgtRHZewTWZiJDx1oxZ5K",
  "key14": "2pii1DW8F5iQFGbEaGi2aDyBvizzchMQPkwXarDKcaRATeZsKEeMe9E8nC9cahoKgvo9mWj5YgmQBUv4HXeXkeLQ",
  "key15": "63dGk13wFi93yxr8dY1UwgbhLKooLZeRXVmdNgBF1uzcEviT5W3L5MiutofgYrqS2oR7XAZrWKcZijRMyDVPBZ1B",
  "key16": "4g2PrXViUtLT2LKxFcppzPKd4yHsQmhXMG1wmVNiFzWM1E1Q1TaNY1UV89Q2Swf7P8jaUCqKcrs8Dbn9ZaLQHwm2",
  "key17": "5SvqXfdLrg23bzH2HfaQa4dM6bzDiVmXPXAhgJJFQn5NjynRVdK2eDXbNSn5E51J3ttygdCBXnS5Q5wpDEVe7hMD",
  "key18": "5EwBtejHJJHAxEPgimgrvUKRKypLSn6U815Bjp6MJka3pTVEZu18GV89zCrcwwgAEnHqoPRfoTaCsqq3TqRedfud",
  "key19": "2vcTEXnGMDuj9uwLJmqoNkDaRdXJg5BP45qidS53NCv8zfhgs5dEKX6DiSktj9CynUUgh6M2Jie5srPUTeBZsf4",
  "key20": "29MPf7uQQU6LbNZwtNxbFsNuxtu68yS5iJjS5e8ERghMZkP5EGoRhVhqzGivp6NQt2kz3poAB7FQbKV8wTuxpPnX",
  "key21": "Kup4Vfc1qXjJNJTqc9BZrBxkdEkgLeXW2jXVhZ3z3WzQdU6Vykm7EUwebDr4513v7pkaCZGgiy91sN2Tx8rEYQq",
  "key22": "5sA2xoefcHL6hXWhvSwma5TrVk2MCSUnqwrdECitgdjqSLJbgGywVQo7AhkjSeYLyGWuH9W1cQSPmzvnUvFzuaA6",
  "key23": "yERaS7n2JD9BMpDxeHdpS78Adzcwcrf4P2nzjt3F69xFhLh64DbpJHyQggcuMC6hDkErSSo9nAeW7TeLwc6h12F",
  "key24": "3nS8TMnNizxu4k8qryGXB1SLLUfMZWxE4JephQVpNT1CoH3TUHnK3NDKXf2r3jPuyuS9wJK3cPBHt2rp1wYReaPW",
  "key25": "67DHoeSrfVLjDyBEQGiK27kKZ7AW5hs6YG4rf8qQXywQH7SssYozBFG53EkLeAknBQv7vHHyh3EZJmKt27fe1JnG",
  "key26": "3kqiSC45eKWNst9ju5gTGFENFrJ9hYkVrg7YAH1AbfKDdiA63hdQbEiNvdCH6iJq37yronm3oDDDdNTJARt9hyMH",
  "key27": "5mfNoomAQDqoGC5WTBXKg8fyHDwYexEzZ6MABbUvft3dP8DrCZrXA1Qn2FhXrYE9iYAhc5mk2D9jMHP3t2TbmZX",
  "key28": "5Yc5gWvxoWMdbxoA4oEuBUVHKZpmPbtyfen33dNsjEetcHpf9bFot1WZf1Jje6amFLvbd8ugXFptEUExP8HvmCUZ",
  "key29": "4pNcBbV4fUeV2M7DXfjQjfSdbtPHUEbfXBSvsjc4X812jdRJGnETDc6JBTfusFKpHHBTSupjxEo55zyRuUkyso9x",
  "key30": "5YytCwVTSMg9x1rEgqBU8HLur84qNcrNzRJeKPtryZV819aRGxFi6tpPGrFWBWCtmkh1vy2e3ZYcTUGZrxz53ihZ",
  "key31": "5cywhpUNScZQQRmyFSe5bA668gPLdFopuZTiL1jVvBdjPefBLNZDiP4aDVBjkcPoGShPvTcuXpbXbJcfasYsYjNM",
  "key32": "ZhH7YnRmRfAuR3CfiyMTmE5oDGTHDE2donTSrnRFHDVsSRFTCDgmMPtn1WR2jNH8SpynjSJX2zpoRFmnFKnV6bL",
  "key33": "3bjASAP7PJWsAm77ALrZaXGr9mXXBomS9NmqnpYzy96ekZGYYHWM7sTw2aFd233Gr67aAC4f2u6esrYVZqHWqUjC",
  "key34": "3dZYjwDzKyP25Ms7SuN4WdNnMNyiFmhyXiKGKQ1BZoeA3syujviEdhXjkfNJZWYiisngj22ZPYySSaLXmvDCq48X",
  "key35": "4GuDEwbLEtEpYaCiwBQp51sgeji1aqvBuDxj8J1LgDtyY8cgAdG3BKLi2mZ4KPtvC2mBp6rkbrAusLjJn2LV21v2",
  "key36": "4r3278CpuUrfbevgB4KEBDKWfbD99kYmQvCjSXuJ1wpLvk9f14RfoUxYJR151hzQT9gaj7wX1HqQhSWk26EWtkmR",
  "key37": "3tgQQDBurp1QAF7amupzWvVY6TnEvFcfPUTjuyZzJSasW6cfTyJs7D2GtdP5L9DU5ViXabfQwDFnEUYT3zU7RWJX",
  "key38": "3p6NDVS5R3PX971TMjy1qDA4H1XDTo2gFWvu395nTuxmPsN382D45GyFUvQU97UMdLh6mitGipJYmDv7yBzM8qvz",
  "key39": "2q6c9YGBU1KCBZm93768dD5VZkn9dGbDtcobDWTuimpHbSTpPzH9Bo8avj447dvzHqwsuCuoUtnzNMJUFHwQ7khD",
  "key40": "3rYvR558gK9Ub7SEWndRQofrmYWohzJsMEbafdXDhvcgq4MFmteCseKNrvAjF6drYzRsU6U3yDauPDk9b2DRgpcz",
  "key41": "2C82pse6mxraTunifaed22DLJUgTpHFfi3KwhYWNiDcqL8AWCqj5rNbTh9vL7YKq1WCNg6apYQ96QqCCU4d3wnSk",
  "key42": "2YakD3i9tvA1LnnQDU96Jmf7apqDbpsmonvEaydGwQFkaMFCuDJGXAedUBeNBcK1PHPn6oY1xfNbpU5T18dHk8Gx"
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
