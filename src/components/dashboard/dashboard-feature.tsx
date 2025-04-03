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
    "5bBLUc5peucwNJMayoAxSCyBrqFxaSahPvbLVkCJSNXy2ukUuYj31XZEqgntPZEPidTXsTJiHs5YYMoXw55nm7ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8kwjV989g5nYJgz11FnyC68JCmRmfixhoHdmpnRhCXYDqhHfDpyx9yppqWnmmHTb8MtLUVztzjdCDeDvqyvPtQ",
  "key1": "1r9PvzLomEZrFZhmuBdxJrRYfWZMtG1GriwHshuPxRrJ9xryVHLtr3VCd6RnmU291BtxdcCgVYnZZVJvVjpdMnM",
  "key2": "3ADRyTi9yUSr7SahNdWan5DWSbfzB3YVuSrjdNqEvfVLmYWEdFG6K8kqjzVmEuGLMRJy5sbVcneJrLhWGL3tPxN3",
  "key3": "5ASHiBp58r7RCUfmm6GMFoLu6NJyCEQGnWpzcuoSczET187i4Vsdq9ToYQPUJqnCtKZ1b3ujWYr3SfALrVrwvRE8",
  "key4": "5R4rF8xfrd6JFg775Dq5Zyh7viHPzvKXpKoKNJ6nBjC1XCsw8bBSGz2Kz6BHWxprL3AaVMGd4eq7QNBrxq8rqL7j",
  "key5": "TufKNVGVgKeaBUobcFAanjNHRV62gEbuahzwwSq3SP5q4xkAVwK8RqL7pyfVmdkJ2ViZTAYpdxsVyzr8QeeuwiV",
  "key6": "FptUZbffQtQoCYtwoRWBwqFGLwos5tmafMBG756JJ2YzEY9P6BmJxg4F2aqUWpmQuUEhcyjw5gf3wCzVaxsxygH",
  "key7": "4GNfakioVk8Wj5j6wZVZk6B3SfL1TmN79KyTsBQNqycxCwmMzbGfcrTeHGbmi4TgUePxUxXK8gauYM3mLFLSwprY",
  "key8": "5xPt6CByaK7wj665mAE3eUQo9FfL2YBexJNa7WD7ptGb5xBe73BYF7eZyYcB6p7AJEb7nNcnLLc9y4KgfkNSHMYR",
  "key9": "5j6bL4YRYdQPCTANarej1uqUNcFYHDVqBcSq3PDN8Z32F999TJSkxezDYkRx2qEv4WDHJCVRDHZfthxMzaCPjZQJ",
  "key10": "2D4y4pKKWTATEaYcYLXnzreM5zRB37rJkzPtgkvAryQ1dFh3X1KuYtwZCePmKBffh4AsyvfMXibqAFErjtWJSK3y",
  "key11": "3C7pTqn3rktc3JhGqg2rp4okeW5LQFoJT6bPcrFD6drq5mC26y8dd5ukQwCiMfaS21pWV7oB77cNzyLbEymkRvRM",
  "key12": "2SXDcyEXdx75Ek8ZvdzAbos7kTNU1KVuWfkxvTxk2MoYDcCYq2P9JtJKX99NRGx6CUBMZwm5RzkSRcUsiptdmcfw",
  "key13": "4qDNhge1ePAW2SgvFxxh4xzJ9ahhL8tEVVChSmKBsHwiorYHfBvTGz2hWUwoB3fExJU5jZQ3UBkTta2Kcgf795Pd",
  "key14": "2wWkQh5bLdNdpnRZoTDdB4DxbUBF1pNESvBVbEUTBsLXQzDP8EECxqaaif3EygM1USok94x4iMeqjPcRtQ61dh1v",
  "key15": "26zPAF6d9GqFLT8yijyPZYtrEYgcsbSgXfJp62py2Shyo1ZS4ocS91U4iWGw3qdyyy2n3yQdiy9iLZoE6FmA87ge",
  "key16": "2Dv89TXNdZj2c9ghMBf8pLPFMNbEWymrC3bdyGfiWntqPK9rrfFyCGXvfXVpwAPcBQ9jZf9XmqZ27QM5pqBXFt2v",
  "key17": "25Z3n8NhRSudfnR2iFH5Q4Ah4UyZhqZsCcAihZxFWJH67azDC9WjEp9Z7UR94c6C7QL6xJN8hpEH8QYsPRaaGWDf",
  "key18": "2Cfkc9xscjJCFZLahdRy9TKqNCHQzBwk3EyPpEyE14REYJ1jPnrJVRXHZGbdsKErjZczvkGLvCGCVrDDm8pTdP33",
  "key19": "5791jHGzQJetgkXrqVEnn7BwG6AVzqoWG7mHHHzbzymS1iPN2MNbL8MQvKd5zj2Xw6CPYcLXdVo4aoBeSo2nVqny",
  "key20": "2xVJVLWpqSxWqmkUCwGocq3dnP4CiV1NzX4ELwVhzscMuzPv5TjQ15jvg7FKv2sTnWMKnyC2hFpuMtBoqJn3xftH",
  "key21": "qLDuDynEvtRoLNn8zU2WWFLqP1433g3WuwFW2rzagM659pBwSXav5GQBCK2oRPTcRw5xbYYHYKB7zm7wBtou2gS",
  "key22": "2g2djCpohUxkKNTNXcaX124jkBXZAkSrJ3WcHw9zpVFMZtRHouhceEMkPX4vtLijWAnuabGsJqpxzFSkLRVkQCVB",
  "key23": "7sB2kciK3swemoHzofeRt2LcDP1D7WhAvuP4uPkJP4GLLXHbfHx7rVHrsH19yqLZBwkt4wKc615YDhJ1PatcUj8",
  "key24": "cJfTppFzn9QYEp9YoNcX2sx43QgczzYrWoZpbig1StWNX6Q9ez2puZMwcPcLJAMYwg6xyZBR1Kn8FXvX2haayZ3",
  "key25": "49Z9w7Q3rZhjdCyuWHSheZacWmiHekcDu49hhmzZzV4DD8HoJKfw2yDAPY9oyYAAjG3LBKjqUm8yGEfJtSYqQb12",
  "key26": "4oSYywgcNooMtguyZ71cgejMbV8Hw77rTbBZwj55mvL8AyQzMtWc1Ye1aJR9yaz3y8xu74s9Nmm8pWXoy44LFruh",
  "key27": "3rgj4s8VFyTbanGhiji2CpPJimmMThpaLu7uGBfE6mr6iwpSJwKj3cEQJGfhpiDUxLEquVNt1subtVj4Ju45NijV",
  "key28": "4t2QpYd4EtM8UTnWEQyYoDBHmXXXAdY2Yfj6G64QhA4X3jfMD8rofrVkFLoJ4BxQ6L1Hpu2WSBev4U2W6udQBzUj",
  "key29": "W6iqsJwLBryoEPhPH7xFcbfPK9qtLFqTts6FviCfTZcFGeiRD2HKhD2idsH7SLHwSxDqrsCb34ocgz6WcJVtwJ9",
  "key30": "XTgxfznsiEG5yLeYCYgjYN5bwsnahSrFi1PoTX382jnyxY8kAqC6wqWLWSufFhEbKfaiVBrAVD76yzoEJ2NgJms",
  "key31": "2gmGpo6whA8a7KXSCSW9pWFhNndGJPo2qjNwnAuVKeR4CUUF9xGgPzHZnXMKjomaGUmapxnqyrBAwz5RrX69U1N5",
  "key32": "3TUVFtZDizBpHkGFUwUe21QAF9eKJtDXW64LpdCjDgmGJZsVEEGFskY53JXnWKKuVsP4HYncCLfKrERc7aWRahNg",
  "key33": "4tVnnmTgxu5thbptsehkc7vWuKZdN3eHEMwSUXfq535WyXicJ1YHLaZG1KgQ9ATUFwYYfFARpqMZ61dyP7dnTMrA",
  "key34": "5XkHiCsYXsyhdRQg21CEzSmQ9Ymda3feRbrdDrv3ifJoD19XCLHsRBF5kxfMvJCSZWgCSeLg6va8CDY26JwxLwxW",
  "key35": "3UKMSEkkM4w8cS2A3wK62m5nPD6nzp9ogErCoFjFvRWvBsgL3haG8aV1Cj9mqhX52H7YZSFPzh1oyht3nkBWNQzq",
  "key36": "46Z6JFyXMPY3cANP4WDUH4cKsNaFrF1bigRWr5x5ny6p2YrmPshrnGraRHwVAkTVraNiCHVLSjyrXvgpnjYFXA1f",
  "key37": "4grfYzBx5fHSgRpVqf7R6UZqLSbbxDUapKu4KkLkWiHhW5H8qKhtaXrjEBxvtnFat7VjmQmyKW9BCMGWbeGftMsk",
  "key38": "gt3wjedGuhTh5a7yHER9rXqpKt2Lfpdeay9cLoLCfF9MGEzostv9x9NoyVf2kTaXGsRajzc8Dwfc5oZGfgGB839",
  "key39": "58V3ECep3fRQBFrp2B6kaJCZrniAeVVH36rPoBnLrXEw26w6spYa8WYVChivdkU3vFAx4DuG9FyzJz9wNgfrQpWv",
  "key40": "5MjYBb3XjKqnmuEetTAcJUr81Fm8bFh7xr2t4pSFKTxA1onRYhxg4dqj9QXXw1JSxndj23Bgm7B335K1n1hTnXU9",
  "key41": "2DSkigdiUy7dwN6TWDr3DDun9p7w4d62fL7csqdn5ePBTZB3czPenFbuxwXQEAMd1R21bP8MWE5xASobhZyTG32",
  "key42": "62uKFYPhHcgfyEJfrSdzGroEjSaCMNcExzQ4wvTDssXzqMUJ7a9LfDHCHuxDEvuKiJaoehiToFWsnv77zdA3tiBs",
  "key43": "36pxvECoyw654tRcHmtG9hQCWpxPipq8z8N5DVPwqjpfsXFsdG1pRadXmr2veqtr6YQB2Q2zkJT8DLcGJki7BHYu"
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
