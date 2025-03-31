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
    "25a9cd57LePrGt89SNRq1wEbEeMyyss9HDc2iwVkUMzdXcQphGUJ6rUwt5HqryGN7bsG9KWgs1nTs7P6hGJSC2GM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvpZ15onkZnBqQpbxYoaUpDtvG72pkd5R2dJeLNFYGv6vnJnxSEPzZCHraxXnYLhKqifpANbFcjwJhPVp7TMx9J",
  "key1": "4X4pMKXCpkVppEY11rf8pAJzJabPSDcnbK6DM9B4Dpux3z3dWX8NAVx5qNCTtEsb4TJ5hxtmj8FAVDzykmmqiyZU",
  "key2": "5ePw5HuNu2xMXtMhp3XUAGy1tE8se1TPAxZ32tCZ5GvBoa2RH4dwn8PR4n48byepBdtGeZ8wM4vuZFsSTEchnr1H",
  "key3": "8dW4JMj4kFUbXWwMofnPa3fds1xmZZXhXMmWonRMZtvH96JQpQB1RUpWAz92cG8Jwr8rM1Dvjb3Lc5YDJG7i5q5",
  "key4": "52QebiXh59xfYG4vRvWBGhfeL6TqprMctrm4cSMs4ruMdSydELRw2Dtu4wp9af1KSURpJx2bM3EAA4xtzVXohqRN",
  "key5": "2L5uc6zjpvm1juHoPMdhpdMcez7CFA7kXq7Dvu8NstY7UXvj7VWvscQ1GT2ZnbZLy2UCnekWvmPp8CbHzjEUmtbn",
  "key6": "2igBPs257noeZ7xnfPsBEnCgSrW9daoXqyk7FUYEgP4CorW6fF76CjE7oP14QCeafavQJyoGup2fKXEZh8TXrFCd",
  "key7": "3HTsd4jEj9rnffg6Dv8Qa5bcLGvATqTcPwzW6DaaS3k7197h8x7c5ADd69JCV5pYSF1Mtvucuu5NuSndwwfMPYBr",
  "key8": "32GrywnYHwL9EPYPhTbpRz5oCkd3W392GwDCd6FifxTtLJyrsTrEBrpYwacTavCRxDCt6XEq5m1de8ZLjm24Dq8k",
  "key9": "457nJeWgbSkKx3FAbwQq8ygF4UUnsRQQkm2LjqthjfM5QZFPPhVnMA8BbY74JXt2nVrfUsC5pMkAHSSMywSz74ys",
  "key10": "4BJHyqTC6s21g6NrgNDrQvBJbKUh6QkvwqCn4Dve6887qeqp5VEdKPWxaXn1QaB1KPU6eUWh2rVJ4T5bR8U83Em3",
  "key11": "4GRKi33H642hoU6diMfmjovNzBocuJFsKwUF4CnunS5ZWtQk1a3iNiMasemEYKcskVXoRPjLj2f9NcvgioEZwepd",
  "key12": "5bnL7occ3Cs3mStmQpZimYdNRrBSyoq64cyVfGstMyszsrkvHHzB3pkwfAVXbdzTGKBmwE4T4kpJm52Z8rLBXH3h",
  "key13": "TF6zdAxGqCwf8NjV95kan19ffEzhPL4rhxZzViRKv6sPQVR4AgVX4fJ9xPorKgfqabtrimZggYPBPRVKeYEv2gE",
  "key14": "4mHJX1mk7Wb6EH3UZGQY3CneNM6J9uApgEZPyJjRg6PDDquHjd5CnwwRcaS6pDFgVmhxPbjWkf4nYbjjk3kodpac",
  "key15": "54S3M8HEgZ6ucqKAo8dLNsLW8zfDvNS2BAdW77mVz4PoyxecWgxpuM4tiLFQt9JGzUaoY8n9KxFc4WDk8W6JTWCk",
  "key16": "3gC27KeFcM2ryAnh3rPHdq2bZ4vzPnW99T24JbqG9UgXqzLJe9vHS3RueEwRY5Dfi5kMa2DSKTodmtFzQ2KePjVL",
  "key17": "2ttXS7qWaMWTFFfxKt1RZBDkTGC9k2uJSVyXTQeTZdBpJ27BTxtKHvsKPMCPVR51cuooo88DbYEyZ6jNu7Tz4baJ",
  "key18": "3knNQJJLiJoHU87JcPeyLJUzQP9Btfzn4qvaakB56JWXY6p5iSiVaGm9hALTke4x99Z9pQSrKy3TQfUhu1tLtagh",
  "key19": "4bjKsqU4L5L9DBCtsnee3J63oAiGkWLbipiKdy4fyorqggTbQHL2eWpUnC7hA9TcZB2DEoLZxFTfHzomBVYdGtQZ",
  "key20": "4Y9Hnjfokiduw5793vyymnaJmuCjtFf2mDU9ZGEtSRt27ZBznDHmAdCF3wVypcxADiTzV6Bp7C4xgYrckLrjWJs7",
  "key21": "fnQN4AYay39XgVZaRB7cF7CAVN6szfxEmk2L7HaJCWKnqTkuxdADst89nG9nNzwF87KdZ6bWfy4CEQQSYPHGCqN",
  "key22": "2dzjd6ALwUQZUsZU2jUyj6NNaikbvA644YvUeMFQkjaJMQL3MKAvPhsCfWYsFQQX3h3qDGYbnQdtT2DqS8rqHMxV",
  "key23": "3xD35AiZ7KLMtTQBycuVFRFfALExHQYXpiHCrkYxNbBjjPvAqfG64xacVd99DiZzogMGrcStsBR74LqzYjbJrs9Q",
  "key24": "4htEwAAMMBGhUo6VtuELbLMCCWfg5E8tPJzkwSzKV9PVoSeKnzvdSzSw4b4Xxzf65ob3xA5TQVZ72Th6ELeUFnWG"
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
