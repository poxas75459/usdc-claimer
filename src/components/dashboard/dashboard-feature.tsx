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
    "4uPNqVrikVP24y2QsPszabmBdnxCzpBTLref37dLuhwNZgHCn2MNh4rgWARwuDP58yY7RLfjR4Z1DNLCLSv4uU9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cV5ZNa2cpoGJDwXKGkQBxnszWRSJozoLQXZsvThiBcSRM91aXpRd6sihaycSqcKPRxeY77fE83HwRCFu9QF84wp",
  "key1": "W5eqPdJMy8hdEwCfPW1MsoBpsLg8fJD4JBvdUtvqX9tbqTi2ysSQSuLhfXSmCCoboAQsgMSetBYBoVJCoaTK54v",
  "key2": "coK2mej2csnJyKP3LULBZpx8ZNUxr5fwinyNAsuSTsnSsQAGjVLynYtkoP8d4ouawr9YtNwmYjsotmSKDv6ZAqR",
  "key3": "SaEHKmoQpNSLQjo1dxKnPNozVCStepbHBiRkmPnv68oDyuh5WimobdATTtZ4FNHML63NGhF1V1y36VvRiu8y7mY",
  "key4": "4yc1j1ve3grmKDiPUF8G9dcYLDCsaAUWkuVyPo1nSoNPW3Swhb7kfPTxiKfRpfSVFZDtxo3A22or7M5EEjxyy9V8",
  "key5": "2uJiKXTwmqfeeiF6uwep4oWe4dbuKk6WzMJ8ovhe1FvtDmDRmpn9i1kJDvBK3kPYaNxvwd5ceQjuAG3pX9t9yt5R",
  "key6": "3N6W4Ss99ZUKEzXBCUExHhNRjHMMTC7dRhMT4uzjsvDpoEHtLuSRK1vjXeQmZoCJrVGJ1fDvFkam6uk65gomn1j3",
  "key7": "58RgHwq3887d2ik4FoL7rxUGEWULrrZZFk63zta2gbPXpKDoMGHxBFJDZY1zKFxQs6mNRMhfnzGJ3ZHsv4yLZsBN",
  "key8": "4o9ooFbFFNWuRXRqa2xeF1UtydWrcVRgdxnrLmQir3rfyUbEdngphPgfyakbTkBHqzDAGtVzWx56byHVbjbHPZcC",
  "key9": "2yMnF8FsDDeTob1wyD3XFfGKFY97EUdKuuT5FSFAqJQryMphF6tkUBEcaE2PSdhL6QUEtYH8RBAjoTS2KCcMSfCW",
  "key10": "63ja3S4WXEjkH9o3wjLLwdYx7LWf6yxPewP3fbdNEzJ1uZaWcpHFSjb5n4iYZm27mzm9XKfxwET4DZipiiRqz4Qm",
  "key11": "4H4vzupk4yXSXX8hZXtj9Aq9SAmLTvY5gqSdEscuPBGUKS4iwR5dMKCjgvnBoNUp1jfMgcuJqmGbC2ptYE69NjTX",
  "key12": "4CZbQcoWQDyc4KTrENRQfVZVoep45NR41KFmz3pvMQQLa6EjXz2MmorshNGDjTSsyh4Nn1AVHtNysykA5eVQaXPC",
  "key13": "4cWZzXMD1GEmxSLoEvH3JvckWWBuq8Xrpo5RgXDBG2SRNwDk7srAy6ZNpFmSsgGHn6tWTaadX1jj8UYQ5UBCPFyk",
  "key14": "4z8ZZHtr78sdE11uoLgKmwMxVHWPDQN8hiooQYTFnaas9LJFF4CFnkWJZ46dc5R9GUNWveDB4Fue4qTGBdTcmEwx",
  "key15": "11DiyhfcFrSAPKFJvqNfax9vbDVLvGR1qAeeHUAuXW6aqkAPtRwa8k4USd42GDscYquayrmvu5VNtanGcyEiYCV",
  "key16": "599AUtSL2FnKgxuSwix3dAcHa3SfbXrXWhkpzNBDLkn84L87FxMiAKX7HwWWHWfFZzGWYC6GXBmfq36WdSTe2zp2",
  "key17": "249RXZvLrKVKm3vbiQwxtdLnuK82sUAU7h7LNU6J8PhQqxFvibFFNT19X5aXkZpKm4YDwHvBVBt3DyHSMjnTswHE",
  "key18": "2j9HDDDbP7RCGyRQa4UUDV67BUCZMRaGvBL4Sjb7akik8cBL61rV8gXwB8s2H8gcVak56QjJ6WzoxHt3WncGWTgQ",
  "key19": "2CQqBPfTtoHv2W2rv973zQBmJFPZuQjPUeiDbDWx3Jr4P4tWcrCjUe6P5W6bbjYpW22FYpVJkSKj2PiW9tCgsGCq",
  "key20": "66CgowAnZEuu56wS9b5b4v9amwMWd5VHu7CyxgXUcLZCUFjdFSu3VgMjG56BiunnNF9yGUF3qak6m3mJNpPRCH8D",
  "key21": "1mE6YMAsGyr1CWgdfTELnxpabrW41PLKsuaCtQ33vue6FEP8wpPYH3qWdeoxuPTv8Wbms8xkVgR46jAq88yChPC",
  "key22": "3tQwmrPqJww2HcSX3QuWGYHi9srBbKm3bB3hSFoeGEq1NZvQWcEvRcc4EB5Lh8BuTGkNuuTbRLMWwLGn6j9zsFw1",
  "key23": "61Era5Dv73gBiPWiXPMRVWp5JskPY7M1KYbqxNZHiZj1jnYi1DpPaeoGT6B1QuBj1jW282SXayAX6qsrTjLV5TR7",
  "key24": "26qeQBvNozdYQsiZJzDni5vBkWuHbTkW2FUC1z64yAXHYLU4VUEhMnUKL7o2fERnKmKXkpinma2hktgc5cikWqfu",
  "key25": "5vETuRFfstZx42qxCZ6dDRkqoxvLT7qsNjKAVqDQn1t2Ed3L72wSQhmdYuiPphSUeJUMkcEosDuP5ZKbQDdqxpye",
  "key26": "5TzZkAxT44SCLsHKg9seipewziDGmzfSTqVaZpAi7mbyXC5yajF1vJFBUCaeGo3Fs64k1hjm7tLDxEryaCoDfYiZ",
  "key27": "3LfcVKhAti3NkneAwFiMmNnx9S4JQLnpYfg3BTokkaXPRqYbHXexgdes3DohWdxyaPyKRehTZMu3CELi9U12fn9U",
  "key28": "4AuWRjiFhhQm7CNsF9GQUcMaEczvVUbgxsw2oDmTyxWBqB4TgudfEXzhTujUDdFXgfgBsmmjkArfgGzwazhFhbbz",
  "key29": "fdVStGGXBRhWMTBdeuPN4TEU3wpLHBdg1q3uBudbYZFnavb2Sw8GZwzXfvPNwtzvDFvxerp65vcjeh1RficE2Ns",
  "key30": "2FMJtxE6cEag77ssvPdhnhBCx8F9kHPnCLYBsmMiMfLQ9AdP76oeoaMeMCkve9qeLumdYcuSjGvSbnXrGDnwsDkM",
  "key31": "5z3oNPrMQJ8Upoc5NCg3kkEFqfnRdz8aC3z4bDDQksvJwYT9Zgcub3CKacnUS7fG7DGbKbsU2yn2cxXn7985Qryr",
  "key32": "5NGnh147nUWN6EBb1psW4moKPac82ggqVmi8psTpQd2xdS3NN7R54j32GucbNVMWzTWHQqoUEnp4hhU9F84S5n4F",
  "key33": "bMhB8Zz9r8wHS8b1tntian6CNaAvtThrNE9ujp7cLuR4Cb3pwcjpEkDE15SnjLsYWvgSwXXnWSXAtmjf2wFAfHD",
  "key34": "TgVDq7NrwoGtHhkCgo5yHqWhXXUuBU4VdxuRRhHnaXewNKY7v1SzNjxQWjceNrpp5gaswn5n8kDNFKNLCKbv3ic",
  "key35": "5bhkXQB4kCLxKPjJG5js3imGCUWfvjki9SebFRhgDP82AvDaJD22uZRpR8FS5YtN83Z3LFDHpMzMfQM4w9Ei2K1M",
  "key36": "5QhyBKuKdAHK94Rot7RSNc2m4hfaeqWAMWgFS2vU7z24ynZo1ABYRSy92ugMF9dgoYVADy37Si98yfZdCNi33ock",
  "key37": "5ZaWJobUC2ymjzpLfFjMBuGwdz2Zcm4FpMHSCjmM4DnLBwnjps3CXJuVHcuZQAyEpi5MvuNez7FJhqJ4rDAG5jQN",
  "key38": "5AQCUhWF7Z8dezpSEthQxo7kYYDAxLyY7KQnY3bfaxCJkMvNa11hx1uBCRm2MpsyyBXd8M5FeiXNmQFhKHjz2ms",
  "key39": "2wv6DN5GytA2aQbS1rFxpKVX1tnhHSQqDTMBWRt5RTiWmRrKMmyDfLo83QPDs7P27E1eAQDAC31QrX39KDz3BswX",
  "key40": "382ikmiyqYAuttvTG82HZmWkrS2dTH9NnzTUTtDJd9vvVwNWgbJGsKXz1tw1Asj7PScFybH9hvnTXPjPZymojAog",
  "key41": "3rrNdsbm8JC8cTZkSKWy4FA68vRYQD2T65MT6q8A5MUt5Z1hH3JJtYndPjxvoVRZgijDG8uZ8Gav8nAhtxYyZB4S",
  "key42": "2XGdr3fUUjUpc33RGcqSPXXT2dVksJLbEfrGrvdixCgdkBwKczfZRW2G3z2eWJyRwNGMnfBPPir87q3cYyVUHUxQ",
  "key43": "4LZ2zHnu4Y2iNy5riapqpXhQpQd9aM5HJbW4hApHZ257GYD5poCsBuf9gJP8BXfQ77bFS5eaqnAmXz7bpBKTHox9"
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
