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
    "4tWR2zJEaL8QQvMa91qnqQ6bpsYRUUM5wrR5imHFzuRiz8PM5XgoXc81Lvpm2nAJFp4CRE9PtaT7CjNNBXzztMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sopZ1sGRGv3AUgLGLgooBrjiMYMt8gMYtjxJu3Vz13gMG9qxsmYhCcNi6uio7HtLWbZ2xCnzs65qRwuUa4Pv4gm",
  "key1": "2xtdAvjmVH8GXVnhPCucwehJTJnqpfSsLqch9WzF3KmVatB4KKAuSK7oHWkMpt3Zn5uXidTVRjHdXTbsBxZVopE",
  "key2": "59aLQrpSwFtZ8yTN9Zree5iti9uDV8wSTfEGNfDgH1mA96JgyNwLLJP8FXfiHPhmeHJGi5qTpQdXiqJHjAhEA9xR",
  "key3": "JnS2vxPEuLcJW9pnQ3xDhijGJ5xeBxS7TBUaQWLRjN56URcwW8M3FPTDXPcQ3Njbr2hKwJbmGVXGWPMQLdG3kwe",
  "key4": "5MebSEADZ3EtStqYUPuXCxnZAP4MW7pE6B5UQp1Lo5nJEJGiKSMUbsRJLB5KswyRFfgeXT7s96HLkjCaAknPV9mX",
  "key5": "2bJ67rgV6PH6e5zGNV6mmCVdys3zVevxh9YGYMSnR389ieEpqjpqgzhmfs1TdEiesBgQCU2V3VorsHhE8N18tHLr",
  "key6": "5ck2vaazJf5g3ySWNAA2yfmzWwdsc8dsx644Tdcm3ujboMaFni8XFjq18zc8jBC7bg5QpfwA7hhTaitaw5GoeqFA",
  "key7": "5LndQi12iy34t2HJomi2vbr1r72r6VFMJZHcpw8fYAQ9xVnYqY9uXwcr5ooEWRU72j6kiMThBmcezDHxFGPBrYrU",
  "key8": "FjMwpsbeAgbAdY1hKnGaebUFe8UuJHzKueZvthGuHyMpiFnnxbuWkTS6cCKzbUV9ZXFwqthovMtjoxpDZ7HkhhM",
  "key9": "3Gbh4DgYERKMXzRF2xUTskHDwuJKufE1NQ6Gnt685RRNMCxenBnCPVWKYZ42SSqRzLZHAwWeD753wXC8BymxdqvY",
  "key10": "3nJVRe3M2RPM65FVc5KUYuvAQfV1NepEvm1HwWNdGBXCLpsyfoE1AK8zKSiDUEuWVrq3D2wMz4GfHS7s7ywRg6Bg",
  "key11": "3SgPi2ArtwpFBRhdwx6ZSGDMNJNus9KoJ3yb9GZiPFaCt5Xd2A3RmSkAkZ2VQxFHHR72ZuiBR3Zdqn1oTAQTxs6i",
  "key12": "3yt8DBzVW8DZrdYwThW2QRxQX6Ez5mWYVqYR2AvjFigqBahBBhEqhHHurewzraiyQMPsZW422QbWTNZMXPQ3R5Hn",
  "key13": "2BNM8CsrPQc8n9XtZAFgiPH2VyE4Cmf5wFG7rXX7a6d7dmnwwDy13XCbixALP8KnubNrKg74mufpXVnRhzh9XuHa",
  "key14": "5XT9raAJEnitTmveoXuFC85AA2moFwLxtY2Lr1Yt32QqtLJG3auyRjf4byVeWCXFkAwEwQyUCYeQZip6WYDZ5BfA",
  "key15": "4WjUwjJG55qEyz3XZ6naeAFxJmwfg8Yaeds9EVPpiSxNcEgEBPbKrJQSQ6xUVDhMyg4QUZcA24pAfhjgzn2LF1Qo",
  "key16": "215qDMHBMWE2Qma4RKCMYDAxsQjJgkYG1oeLsxwFF659YmwCX56zZc6mg8ZPsLg3Hr47y1cydiRVCaZBMn2rYWP8",
  "key17": "2kcdhpDQHtLmPUrLPUDTdQNTuJRKZM1bh3WSe3a3sV9jYPp2CWbQTdAmeQayrckiRDVEvn7NZ4hgtykyyaFpVUXB",
  "key18": "4pcacyHCfbsLFy9i2CiTxJoRyt5v1TcfXzqK1NpYvssCUrUK3UvZQCWN1WSMMEhdR9mAYzWz6DgWq2cCC6ZS8BEo",
  "key19": "2t1KSEzgcDGvvfvoJ2PdP9LSUEEYhKrA3AV856ojTij4igg37Ls3HbWNzqFjVtRJsEYARPiaQTUbNsmJkuHKmGSV",
  "key20": "5MWwQm98XcHqTrhNtiMSCXNHhtZ3TQvnFvV9tYRStuZDtHDSbxREf6WuPMjdgN3B3VgYfLP6o8H3wPpyMgYAnduL",
  "key21": "2gRZEBm6sLZNqLUArnrpv7W6wZqgJLsXd7528wNFPJvgErx7aD9cGudoDdmQjSzantJnX27iG6tZuTCBmMJzpqFE",
  "key22": "5yZF1me6JmiujAJsCYWXCZqUcXXh6f3dB2AARGwXbg3LJ6UA2qQVZR7TAqE3YsuMgSe4AcZFyt1gyvg1wbyqXxiF",
  "key23": "4QqxxGYWvAZ7GtohZyBxBcJHzNtwvtN6adN6t79ir6jsGQx33YqQzPKt88o95s6yA4ptUM3BB4A23QxCcYYxzrHq",
  "key24": "56Fbza3Pn9xGTgnuUx13RFdZuyzRb2zYEfVuY5gnn8SfwRuLvwEXdhdVEa3xwqGt4wRq9YnBMxmwGQMrctFmT73B",
  "key25": "4oDKtMVk9KuzT68xZiJttfCT367Hx573Km7KfRLkNRBMjKszgy3Ef5AtoSUeTvS1LXgpN7YVf8K7AWb2wXz4VzA1",
  "key26": "ScFby6J6mNhkaK5T25CAne9FU82G2YRwekpwCXGYJg31EozLdurJGFmUS3jFqkCfJdamcGdJCwB2pyNxk1TmFte",
  "key27": "2k3PmydhW6UQK1ggce2MeJK5wuU7SWnx4pmTatTF5QEMyestQjAEKgEvh5rdEK2QBSssvDGoJYSHWhz4G3w4GBca",
  "key28": "5jfMf32uDPNkiwXSmvEnPbzmWi5Et8azkv2NdGeBBxNC3jouzrYsiGVorn7JC313oG6PXXaUePxL7Aie1BzXHyPo",
  "key29": "hsWdT2PDoHWDaYLDES1PSXxKuVtA5VffZXivxNAMpwRQhjVYTawKa8nRkUxaomVUoeZvxntU6tbqJyFhz36qz9a",
  "key30": "2jwogx3TefFPGjH9tK2vzus8VrZEnDeJsxRRWQX9Yhr3QQhpzMb5maEWCrZzQDfRwsonD3c14wMS9F6gJnF44ano",
  "key31": "mCAPDGqpx4qd9SSJHNsc8rXocnyJ2w8beqw1r7Mad2janHVdiz4hnoVP9bdNM2jaRMWhPJXpjmVMRJf8FWwL8oe",
  "key32": "3WAeSyHt3ox427jnmVhktm4VNRFgtDVM5HpZ13gBkW9CAvGvfAHkU7ChCkPsLLbr3b8qNgoygeghZerw4kgaMroc",
  "key33": "4zzRAmdkrzEJJZrRCPMc2fJ5uyBxdSKGXCYKfVnnR6PyQuLaWe22BcxwCNbmcvtQWXo4EXNm5C4sdndG3RYT76bv",
  "key34": "3KzAPYxgn9qFeXXXAa3YYUzR258YQ2Li4G9voViUzT64MYNAK61pqsNTWJsQXEqqrg3BRkWDCuAXdkjMuf6oFPP2",
  "key35": "4VMmbrorqHrQ8duQvC7Hphu8ZjfPgxq3odGecMbczJMydA2hzM4jDMLPnD7gnKFPMfGgKcmetFLQPKv3uNh6Eczo",
  "key36": "4mJ9WurLzxJGKfkj2fpLat3YKXSvbehLkYuBdH7HseQj2U6huCFSWrTKmJkT5uuDePk6ts5FLw2mxohyoefiZSiT",
  "key37": "2HXQhwHgdzCDmMjPx3cwk9oPMF1cedjHATaS9L7xX3DyX3Cjo3jq8v9XvchwKjnvGRsq1P9TFF2XhyNKoBTa4B2i",
  "key38": "5ToQ542c91PTW2Nuco7x1JJ4Yf3zpUo1iWw2W984RRpNSczKAYs57rGViLNgobgp8HQC3tq2jXtp8NgQP5k9oMJq",
  "key39": "4fBPVxws4rgjtdoebVSJbis4ojDbcGbeeopm45A76FaCUCKETBKxCRQAe2eiJFUod8oDky1xqVGeRNG6sVB94sbt",
  "key40": "5UxfX3X9UHPg7ZKPVFpRqnmRbbm3aFtCw8jHK9LxzkHfnmZ9LLNnDJT35mD5zureFgte8EHJYUtsHCoUhyFQmkK1",
  "key41": "26XhV2Za7uiRJJZsYBmrD6ECxF4s4bKXuyYmiz6ZpCvR7sqddxYrHBTzePaTfzFJng6ciJQGxKNSYnRmmZq86XBc",
  "key42": "2f2Nom7BnRJnd38NA7X49Pec2yaroBWMkVppGVNCGCk9gbMZZZHJL87S1YbADuHmFfjUisiBFqu1gByr8VHzmiDk",
  "key43": "3HmH7BhApVLLXgJ5EZaGQZvskMrNFLSnz4jTmhjjJXDct8qviaFB8xCSwzabfGrW8qmbAxwLR12HvzFYU1RDCZMX",
  "key44": "2rFwoM8diJxP8UwEoUcAHPUGu2hn2LJ7Fij6C4WRQdyFUWPdWtwo63k2B2BiCQGH22eQ86EzU8mxrWV8L5QY1W8K"
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
