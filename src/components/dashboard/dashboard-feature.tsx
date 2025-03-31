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
    "3tx43pGfNykqiKwWHgUYAKGDMBcYjeWH9iEVkH5Kkhoc4oTyBYxdZXpPX2AkDs71AcwZAUEv3ik1fYPT3JZJ4baJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqYBkHhwp2PSNiLYGjSAMJjV7z4kEZk9yyrE6dzKjQ5N8AoUsEHfXiyt6C58ne71ycMwCNaoJ2cG5KCdqVdasWj",
  "key1": "qnkUK3kaXNEUDMucj3Cg8kqDih6e5ZpSz8rpyaxpmnsdUhpbvU1HhGje8MdddeGHb5qLgib83Ji27VFoMkdrJb2",
  "key2": "5iQ4hoTocx9BhNDW6tnPDK2GvtxFtwHRd4EYgcT4GQjSSHa3WSnY1TEknQkwW1eDhA7YiRecw6Xfm1RP64U8p1WR",
  "key3": "QyVMhpkJWRaZ4YybjEFAFo4qVsgjHQpnr3QyxP3ceNMf7GNCau578i2amBFShN1rpt1fDHTGLM867exZpzoQewZ",
  "key4": "xivBTjo69hS3orW8YBUeMNWMkay6cxLvCZ9uNpeRLyJJUiGVfxqus3eoKBoxEpffaLRJgTh5RdUPmP4uip4PZbA",
  "key5": "3if2UtPg4kAQ6Dg2e8ynGNdo91Q4iDbZw3M3KGXqkzmNDxxQkrW5zj7dbdeocMQvXebwLMcPsr5XWdBr7wrT1QFV",
  "key6": "Tvc1xuXXekuW8ziREwKeFdxmJPGXyeiLZA2qcwcEgaqkYXL26t5BZjV73yj1q664kC311vJpN6ScAa7dLytRokQ",
  "key7": "53YBGybaoSqu22UKZ7b2jhDMYKfEQNmDLaNTGMacHKrUYjKzFPj772G6pf7kTttRBBP7g9Nfh62t78VJsVWTCz86",
  "key8": "2fr9qZLcv76rEhpBGEso6VuPZuRPsv4mJa14vQZ9coU8ceWDXNk5krQSB8V3qx6EaB3iDoG9sEBHvL3MhkgcLZrP",
  "key9": "4pCHXurefx9mSQujnfaCd4MXmwbnffgAfDEXCDcxLhSHK7zkM8qAHCxPbrVsqdR2FG9ab6bhMGi5DhVAWEzGBUa7",
  "key10": "5RPeasnAeJeTTERSe3ZhcSh8JpkZ5xxWdV653Up5hkNMW7FcAUgJ5QG6mJrbCMNDiR6JQy5jJ7hEygjftJ8jmunS",
  "key11": "GQUqsxASasitD6WdeuqbAkka6fx84vd95FK7eNo61D5FvowdNGEzNje3B3aeiTD3GK45cRrZWeCoYDvYX35za2y",
  "key12": "4DtYB5hcRPWLPF7N2GvD5i1WTDWEEjTd6pjtQt2Zf2AsRjFGZEWNq1xVAVPd4dCyd5Vp48hECCP74nFCpXWqttSu",
  "key13": "RArZj9qaMiiZSnrPwm6Qjis7KRsxT9U2fcMcCtxdC4uEVFYL1S8C1xKSUvATh5qCj6eqR3VXtLTk2whF42muwjN",
  "key14": "4n5dNKmdTLUrjL327oHZFYRNTh98Yfav3cdDZctxGavTkWK2WXUWDyaw4wzfstjXnWejLzArkDCXiLgdyHh6kzUK",
  "key15": "3cjbSPtDctjSju5RMZnUQc1jjH3TaivaQqWYGoihu9cEcxEzyo7VUvLHq1QhxAqu9oL4vcxkhC5MW5iGtdhRKP1n",
  "key16": "d6Jp8M8AVqieS2gJvvdxf1wdkBieXo8UBS8aU47Y1hxe82YoitcdAfR3g7HziiS7QexmxQppjqr14JhoUqe2CuE",
  "key17": "3KANraNnqyPVSQ3mZcUySLySgZnqoyK2fgC4ctRoTYVnybY4PNcvTZ9gd93pA4UDaDg2Gs7Q8cQRZqxbdKPDXno5",
  "key18": "X5bf5ZNEpSHp8rE5x4HDoySqqx2sBF2XMtJZukhTFpMEVkNCNw7RtUihHbLMD9g5eBpDPcR71A6ZJktM2yw8Ndc",
  "key19": "w5hAnJZgbDYQGrK4gDs39ro1ifbjZ8ajVhJSmGkBKcPHyXpSFkmJzDye5nW6spe1VW79njcd3tj4hnUK5xVXsov",
  "key20": "4RvceDge34NwoBaMRPgeRMJqNuZaPdCNZo2rARw9J4feAvJ8abqWPen5Bkm3wLwigjWBmjWc1JS5FFFDSBKSrhnx",
  "key21": "5qa2jeyHj1giQ8xrasYB5eJpcL76aio1fo868xp8bJVAcx5EstoJk6x4mLPwveCrrxaDwvVQNzu7cDqtyUAXHste",
  "key22": "5MbXr5uc2PkjUGhCQavXEDiCA4zeQqxSfVwbcJHLnAm2EQAbyGnNbpmfB2DQZqxHQsX3nmKV4jbyXeSu2jYo8esB",
  "key23": "2hpkRzxGgGu1oddqgGadu9kqrft6B5GsxSxFntyUftFN7RTfznC31YHJx9fEdfDnTL4Sw4xTwJUuFJz8Zi3SVmYv",
  "key24": "3G5Qob9gkqnPXyPLvPtXww9pZhVh8PDRDTS8v2jH4tT7EXSuLh4mMBbp3zbLyCUzos3rJKWUcQj8bM8VhqjQzmoW",
  "key25": "3wbVHXbkcnV2dtEJog9rGwoWuZ74LLHDzVHcSaAuyV3jK6KocRB18hUjXJBFAPUTSLASxui32Edn8V7zu4AGUpat",
  "key26": "PH3QntDxQBzR4NokQgkdz2bU2QEEt4Jz8ko1o9iZ1QiUYXqseDqeXbZzS1q41kHAFXm8QcNhZBQF39vLKsnymxN",
  "key27": "2dKykXzS9ub2Cc94Q9kBCTgdLzQLXusrC3zx8ZyDr6LQAfpgJERRDD4bSNqaLqZ4CJ7KGyZQ1B7CuZmD7ZBxy6rZ",
  "key28": "3eVqrStCE8yy76HFUYu7MaZKFE6w5HWQUymMAaVCcYhgVme813qWrJxE5r2Bs2H1AvCvxeTtmUNvRnBBmnJjuZFr",
  "key29": "CEXdggFaBbuUotzNpdWfvgF6uik8qj6EMW6E3CmHeAHJFArsqwGuzt8yRRxLcV2axsesuVxfShL48YSR2G8f5Kj",
  "key30": "rT8Go8VFpS5wRwa4DpYoY7FCrmypZqkkumiStpvTPF1onmwDPSzrSNcwbcFDhfr6cYcmXDZif3EQ874U8x696se",
  "key31": "4e3sea4QbAwAbybkTgp9Z7us6nbc5dJtXa4bKKvLEDBEyKCFX1QfkesKAvaxkKDhZKKVuXVM3ahTQ6twDzuhBVsB",
  "key32": "i52eCrWhgW1jmMa8eruRq6hWeF6yZ1gPGPA9aHdnWZwaQvz6fTBmsLmHa4SUk5egCnf3xu5cvHjKAFw9yxvy54o",
  "key33": "5wzN5nxdtNNsvMLKrDu1D2RTWEFcgMMzHZT4SBhnLVAWSdKVpRfrC5JfE8gRfBNoBrKhGnezAeFDFoK8sUwAJUeJ"
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
