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
    "41EFRQzdWDk7aGSC7WuQc9zoRG7KKKdir93VeqX7wsGkhzs6KRiySEzWsF265WxJkjzw8R6fGiR6Bgyt6Z3QANfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cnc29xKV7Sbm4jpWgQtZjY2eE3GE4KPohrR7aMkm9UsxA5CvZ1RDcEmTTg3GSGd3Y9AAsLBAYC6Lm3x7t49jiCu",
  "key1": "49CB6vdhzbM3c6dKnMC9nG87MNcriipAad7atLTTbhNwJcz6ZNh4BcVbnW49S786fijtVv9bTyZiBaEfEgVhCGpU",
  "key2": "29q2435iPsPrssSHjKUQoghnxVaHmXRV1Gw5Q1aDcEtmzXnWkVmDFhYfa3KV4k9BRJcSXitdGCj5Ngbdgaz8FAuV",
  "key3": "39ePvVsxsFqGNj8WrXuDaHCiBc8dUyZGyskK2LSfvTbedigDD4GiZmsSGDvzofSDWmvbHx8NvtebWTcKGQHYNbSQ",
  "key4": "4WttqVfgs8TEXE9NfBqbo4WwCbnRAeu5cTYXJRS2Sqe6YpC9z1oSG2d7LVDx4WU3KkdwD8X3Lc9bkNdSnWKVS1yT",
  "key5": "qQchec3yvo7YgD3sGxWCC7imh4FrKLU994NG4jZV4k7TVVF2cV2yshkLKuW7uzshFS9K8NwrQnzoYepA4ujZQn7",
  "key6": "58saZqfLkJuTS8tEEoL8vxszCLoGCPg6XHBJmtGhKBfDzTu5hvA4hgHejznAZmrfKHho8W9yjtFmiHDbrRcXLTfy",
  "key7": "4AgXCU942n4CyhVgxxc8AnWhfxXk3rPMZiCKkLAr1sc9djQ4pB8W1hngeqjUHVQrwcMHazB38Ghgzxbc3f7aSxfK",
  "key8": "5yyqGcnDJc7HHsATdU4mEYMrAA3yGAbX2nv9Uaai9PaJfoNj3J2JNzhFsyXNb7wNuyWESEfrzttMavriJ8gqtXTq",
  "key9": "641GemUgKJRQP5PgvHLnoroeAgkLheww9g3KeA1wqPK9nHobbkHLqVYuaXhZMqzSfrWB7AKpxQEgL7RwYbfgsL8r",
  "key10": "25QMRXs4HrN9vcYxp7bMkhQn9wTsBErc1BGBMBXJ6nyVfDt665RFqSURfwMUAwecfzv2Hn6jvh89VbBCrdTxFiCT",
  "key11": "4MyeysdbjZvV9v8WnomCKaVsH1HMaLft1RvdhYtnmH5FfgwDNarAnsaoFZeTkzkjo98zWrkzqsCT4P6ixhgNBSVN",
  "key12": "5c85oJ42S1BqPKw43F7iq69ZNao9BRBFRZ1EFpwpApir1SvDBLbkoYMjNCggXRU9M7bU9HDaA4WTngR21tzZMvH9",
  "key13": "5dkUS3QjENyFMWRLJCVUFNTJN9eXut2zjQMhbtAeC6J4nM46hycjUWQxGfyfRWffVx6TPVVzoit2aRPdMpBy1frL",
  "key14": "cWKsrePFUs9rDAGRjiXJKmFhBH687pKMDHsA5EGcWGkhAQoBCEgCT94sQhhRZywkZPG7BmjNzWCWorvAWCLZwj7",
  "key15": "3EHy8Qz4kH3CtaBzrSfW4ie34Y6dT7VCvZq6jwNRx2KKSfJzgrpQu2T1audTLKFPa4dXCssT1J6wTHGmXqyJydYW",
  "key16": "2AYpgAj9CtYtJpobxFvGdTaF72zsnUhCHJUG2qPiD9AXspMvBjuqatzPhSk7MrmC9RhUKtWjz74Xv1K6xLfzvC8f",
  "key17": "4zjZW6tmLKaNo17nqg9GYA512mV8GqXWgyPtba56SGKcn477d7QNfoWivQDiVpUisR83z1H2RX3JLmufXpcNJmx5",
  "key18": "4VVxYJjgPKuXDZG8WQ4dRJAh3qSNgDcS87uSUX7usBA2fsPK5eHQAWwCiWMhJbn6uuorna3xWAzmi4oYKryzktnB",
  "key19": "5nQjGoBVkYQuxUBCLCei5UAbvLPGZcGeAiRzSEgwfBEFnSRV38DGNnDq4F1jbdmSQb4zEujssns3vP5xwsac26Dy",
  "key20": "3L5D5DpDfSkctpKKrLpYyFyK7iQUq8kSpwCRMSi6pNJdttu3yU89DcRMUxSXAkKyVTgcTrSenXB1zdxeSzBCJEuB",
  "key21": "23xj5Vc7m9nGLe3AS52NoTSzYjTAvgmy7znq1TqXiTvFCqfgMB56pfi9frwc1UytfaPqjVoThctLsD5eg2ooEeis",
  "key22": "p399Q8ZTBCA7H8mNzRw1mVbFoqwxqx8LyMy7GgfHJhdKL7dN6KY9oLHnxLw7GtuAgsJbh4kRnTCG22sUprcr723",
  "key23": "ZSApVuA7cRy8nt7xxLzErMHdKWMabUL8kypEr89VsNnjyYpZm8xtCNB1PTdDNDKiQVS3vy3XxcRKQc6yaYDRUym",
  "key24": "4A7RJDwYh7LsuwWWKxgoU8TGEPJ1Qi69LMmKxMv4W2eBX3aD8hVwTkVrtqUQ9d9cNgR6Qr8duMhR1mgZYh5wRiQR",
  "key25": "EH9MW4tetEG52YbRrvGourZDMXeKdXyAszRuWTJu5uHZzUQhaUFwHr7Pt9LGDp1De7mvHgQTg36Ussm3kddwkDw",
  "key26": "3DGkTehxvriTyvG15DB884PmXBjiTzSLhczFZBkbECbRoSZZgLqpNe5SEFUduLQPUENETMg6dbyEhirEQvV1afEM",
  "key27": "4RTL3mmhXPJzH9kqzZsVVX5E83bNdCY6ZLHEACcmrzBq7xgQbywg5eUy2GurYdvwiaowREHVwGGt9MuZd3rp4jAv",
  "key28": "quJoEztoKKRusBUHGNAWGhg2yMmuSTScFTkDVMRPXBFMht1e51GG4hk4eawrMd2Zup7gkC4frg8NEr4tqJFB4Ti",
  "key29": "44R3TSLU4eS8tkdQJDmQWaMTpc5uEQvy367sFrkxiHRhjDPdbrfR2pz61gBGee6eqhHWzmb87D5xQiyfqjfNtnR1",
  "key30": "4u7grWvUAnmNUFdkthEWaVxsC6PuAspxBDZ11nYmgrQEWabt5NHe356Lo1YPZstwZK2bgKDwzcGTyEXeneV9tGrz",
  "key31": "5hKUije9WX8qR1RxgMs9bfnX4JMoUpSVQBwBL2TQb3Mv5PqQRXfgpgWtHpFawbjEt5dv68Cr12yNCYVdrsUANTMu",
  "key32": "2quhgXre4qSQoXkYUY42EmnF7bNjhWDjKPeDA5eoh9XpxnRUhprGbKWJqUXEEiXx1WFQDKdXMS5xBAGZdEJyWZKf",
  "key33": "4RuCWEYwXmKYHSGLuwKxjmWn4EA5gog72tw15F5KAks7MHDGeH8tDgEajhX4G47UoV8TAwdxhYyRo6hYaQaq6s83"
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
