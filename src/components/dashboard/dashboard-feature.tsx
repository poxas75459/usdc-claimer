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
    "A4ggpttc6MqVRREJYPhbYk2cM34v2SYZQsmTYBR1rYhRQ1BLGbc5RokFjaJcTeCpKcsriDK7RMoveYUwATXuf1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riNZyqDV8WpzCY5znEJ6nnZDxF9PrKfxoD8L8ym6AtgCVeimuwm8aPAy2RaTxZKrUjA1veP7ZGFL8yX6UxXCYJt",
  "key1": "2H9LD5FeKCKc87rRrPXSmnVHRbcVp6WEGVkzHpCQbXfdkevJCFbSDyW4kDLrtwEKLSzPhs2A2XeQAHe68FK6JkpU",
  "key2": "ETxXcWFp5CivU6hNmHF111pJGgGEiZ1PwidW11XgkUyRRLAz3fauVUNCPGDgxGo6KDPMShT8VrausLBewcMEgKn",
  "key3": "2ezKZ8t2jGMLmFAAbj1keVANLP9gndWxWoLQAEQWANKEwKpcevWRk6SdysZFyCQ4ie7Tef78abJcLS2sMPrDQMnX",
  "key4": "Hcrwj33CYgsQY7o7jLLApmDedackGMd48pFDDNMZzn6tzky6vK7mWDFDXAeX2uHKZjizL41YBQXQMrDggsVXmPq",
  "key5": "2p7GLwyAeCBYyVG3s7hAgb93n2pyduMZas99WRkX11J3pCKh5LB1WadGwJaUvYMY5mymdsQ8Qb4mb2a7TEBGVZQS",
  "key6": "HZPaS2FkSt34yfCJ6HpczK82H7SwvQSA7jSwuvpTNY8i39XLkyQNknFf4obQ1mPf4YT37ZS7Fja9LNvEBGsb3fr",
  "key7": "2txsWf7HW6D1VhWgv7ZSpfAES8cSSkdfk7sikhLLrj4LLn4toBGnAUsp6SQPKW9eeBmFadgySnvA51GXLZ8keqRP",
  "key8": "2cCF8pKfd8zbhePQAvQZ9XewBLeYt9xHLGitT3i8ZFwMvHExT8YuFCcqm1o9KBgcirtcZA728Lo8cYoSXZDSsbvg",
  "key9": "5gxjMSyyWkogAsJfTuef4TdxfnbjaXYE31ABudRsVh6sPmLCmGYNvA6EVdX2dbiERPMffd57FJy71V69MPRncHbw",
  "key10": "MsjDwCxEKHmtdRuUdfC1HE2L9irP6kafCvANjZm18Diz3sCDSh5Zav9JeNz4BVYR7AQe2x3MZiwzLfbDEQwkQAe",
  "key11": "5Ao1hVcLNTqJL7H9d7FUamTwzTHCsj3v41e8bnFjN8Qrbz9ma3hSvyQS4AXSgaDCSyDf7QwLRtVWAxcFyhBCkaGy",
  "key12": "451tR9od9fXENywmibgA79MWmfuAGcvY6HjBWsCgw5CN94zDUrFW6n2G7uGEwfxUAFEGcjbzCRWbDrmzJ1CuqeLd",
  "key13": "3pSwEs32KoddVVw7TpGXe5iEMRbhhzNgaJWobKDdASRkDEmfQSH5sgTjpSxzYdLxP8EaSCnnZM5NvwSXiGwUSaM2",
  "key14": "3bdtJDZRQPR8yR8MWzvrNY88dwtC9uhJt7UsBiJee6SxYafkJ4QQGzGcSLNsFFa8ZF8Y7dopb2gss3p9MGqS8bpd",
  "key15": "5FiDr8huc83qwDjs1jQpz39RfPwQKk1ondLT1g6EuocNicw8NXqDbvn9yr7F1ZcA8kHsULHJGMcZ1sXa3noYmuee",
  "key16": "3fLns3PT4fJZTCfA7rbu3EcuqVxnUYEBuddCJeo4fa45E4NrYtaNRfD2UCBrYP6u5BsjRTEjszqcjf4TPscajxAm",
  "key17": "38vGpN3KeCdNXdHD2YacVGSULD3o6MC3t3z79Y364dNL1rBd1gAMTap17fUHuCBRwky8BhHNJMqugdizULegvQ3G",
  "key18": "4fMKbs6m8zfxjhZPPARGMLzr3WfPiy5sArrXWr4eg2yqwp7rxnbmNdSdmm66kVtN5DHwRbUTgroLwK2SiLMVXvDj",
  "key19": "4kgxDQASPVDFzyFwTf1N5Yat3i35hzQrtWJ7fvJ9X3RYavdAiaZP1VsiDJEru32Z2M1g6jMRBmn8CFdvQkyPoFsF",
  "key20": "4VSeffML1r33A8H8ofLSzSNZE8wAHob8H2Ft3cWTzwAtCw9y1gFEHo26Stg3iUGYG2fWWWAcxdpt2SRbt8E3Ty2W",
  "key21": "kxT5JNsLAsLzSoFCmQ5wunV7srJVtA1wq6472viHLa1RCteCn1mqqgstLFrWxxfLsLaqDLFbeYwsVkk5bBqgSNB",
  "key22": "WTUH4vbQ9jywD4DLvnwX7ugNDeDwauhzqPG9XcNoT7kjUFUXgiopzuZWvJF3G1wy16k9PWJbyGUSLGpBYq4EmDQ",
  "key23": "234yAUQ1Y6q3CU86UFqAxXCkbB85gNuMs4v4wLCGL42zSDQJiRtqDxAykaksyC43ehP1QeDze2jrMayHnmR6kiLa",
  "key24": "UvxbFMLbTDLNG2TxKTFeTPhc7TypuL1KvA6tivpXrY44ukLkHbHgfHEtxnVwJ46zaD9TnwFS7S6n3oiBBMW7wqe",
  "key25": "43SwkXDneFqGLNoFczmnrcFxybF6XtbfLceYtgdrkUukp4dHLrrFiK6XrdPxBwgHiyodHXguCN2bNaj4voCrWUu9",
  "key26": "4euvTgQtBS2Ua46sgSQmzhhSvGDVKxCxpUWtHb5ym3d2KReunQbysPT52sgo3g2JS2KbS876wRtp3XXNQPv9GWk7",
  "key27": "61qrmPk46d1TFWtpNnTBDFcj2KHobqqLKRHKQvmxhsi2ivqfsvd15nusEGrAuFBQV7kBJQNp1fxvCg89Az1RJutD",
  "key28": "3vPpMAZ1AhrvQc7rcSgZT1zQJNKyzX1XqJqQkQr31WMJCijrEbwe57fFSTiqyeGay9441ZDxbivD3NzXfWXsU7mf",
  "key29": "5BHGV25GBYAo41ePUyRPzvJ2ZoCB67yeGF3jmTSxVRjmA733X6VePUb4MK1nJjp7mfpJ43jt2ze7vKTnGpVddrMD",
  "key30": "3y6x1D4SDaVJZ5ejymnX1PZvv3HperHLyKwpvsNd71TQ3AoakUn6JwAgkn2YktNV2fWJ2fuxtbPLrYRUxceeXbPk",
  "key31": "4tYz4LaJftqK3igKjQANMCaNYQddkPredrXvdNvLqJ9ekDaHXfGKbrtkrWRtapS7pPSE8xsRPTWzPbxEd2jHDGvA",
  "key32": "4XVPmQWXMrBQSP2PYiDfaiGYAkiAxexRKXzuQyNrAB6K7NiDLGT1uN1p43QftfnDJXMdwUzPiFndKtMEttWBiKpK",
  "key33": "oWGxzMf1tnWMCG6JWVuF7Z28Ryd6FmH7jsbb1xoE2YJU2oiQGhL1gvSz2K3r7EhPtBcuZmRtMqgPWvTw7JTmJMa",
  "key34": "3ToJ5v5Vdk5PyLr9A5MtCggbkrBvgx1cpMy6TC1J5SF98hgrEetokvVCSwvKJwzBrdppoEhLUwhJcyDyZvJMEXLy",
  "key35": "m4tTG8xQe4SemkKGLZkXk5oUJ7GCBSzVHkpgYxEKTEEsHCBDp8X4nSfziwnfx9c5BbMhJhCnR176Ao3i7xmtzLU",
  "key36": "2W424ipd9YnkCsRBv7zxMgDAgA5YmyNVJjNbKY3nCd1DNCrEmpXU5K37RULB1Av8HSnp6oHnaTe8G3hwyRYrDQ56",
  "key37": "2M1YKFVDc8vEBaQFhLBQRznzcHYZJv9tq5m8pXkgTaFARk4Q12fS2iEUiQe4q5Sy2irtemMUobL7zd42SE5KFgkn",
  "key38": "2ZjZQmTNpC4tbpqjaDenFUGHVfwLvvg36ozjW7wxzboyaLao4eBM23Z1jPtpF1KcLkT7DfhChRC1d8fv9RRSSZ8k",
  "key39": "41M4qacCpb5Du4QsGHQfALfBehpHWh75mRDAN1q1WLVZycbvQGyZartNj15ZhbCEmsK9reeSzF9x92sGZkKLtaZi",
  "key40": "gd3KzaDTAPvXzvte6j7mwDYjLWmBZJUq2EGT8Zc9TUKyYCeHNo32SdpZfY38yXQm2SotzfGWXQjFLtXLson9s7x",
  "key41": "5CD6y5ijteKNbdMnnhKm8gGDSKzcA7HzKjFUqvQBBSUDTHe15AUbdnVLbmfQVWfggRiYC7sYtTXeB4QeYKC1fhgb",
  "key42": "4Qw3GZ3jWL2yGmZPjurgmFPNZob2NPfqfqM4bVqTdWb5LM94J5sARhPB8dFDrA4kSZccyQvZrTUeUKKNesUVw86U",
  "key43": "2XaCoaASKMJQmfiyfynL98o7BaHhR9C5TdyWm57iQHXykGZrWoC9RQdgvS6xGt2SX2zvPQJ1hC6L5tuthCwNwt2M",
  "key44": "461wTGu6GAph3L9F3ovrdPCsTPwPph5qaxfcuN3hYAXQVoNtQSiVfcZhzgGn4x6PYZdZFRLmojELN4LKfvKo6rfD",
  "key45": "bjZbXqgdAo4WvYkFHEE1b3yvhHRY7jLi8k2oV16j82936vMXCT2c192PeQSTej6gMUb9QjC3xDJcZPS8wRx6c1y",
  "key46": "4U4RiE9pjcSVn6FEuvDBqHWgwKXGgzusgtN4fZmw5WT4R1bNxtqwRDvqM4tqLueiNr7xJ3pqQoS1MtmsKKtYbGvY",
  "key47": "36WnbASLtp1gnGtpnJYs5CgmXEuCsKBR5RggF6Qqqnhrk8YDDTdNvtQEa3N2TQT8EJEBBrMrZKBjbfMidrswHm61"
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
