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
    "536fB62YruGEuiViLYKqgQgL134e6okdmT4CgsDCC5m2Zxz2FKVMX7fEa329ym98f6BZYqWykc8BMT2ufLUVaxF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRysGUsEDwKmv9aNCYTcFRXHWk6drravsdUyQbih6BZ5YLn5C8esGaXU7Ni7tYH1eUz8gwqE3L6fjmhQpZMB9JZ",
  "key1": "4MFeJzKEtk1AsedqCuQfz5WVEMBsgSc6s8f3hV7mYVUVT82NFWfLGt9KrwBCrRQdHW7iGuRcsyiNi4oEdtjGegi3",
  "key2": "LAi9GNee4poPpmDr49xdQ7akYrs7ntcxVqhDXA5dWH7AJob9nwaGFTtXeGWmqUAMzxbt1Kp7SnqYTmTMAetT2eL",
  "key3": "2j2Mwy422Bg4pz7tmoaTY6j6kyc6FgLLPwyZ2rTnbYCyqHDNsk26UzfMmGSR2Qdit4yzMQrZFrGKRaYZMGMycJzN",
  "key4": "3TwDEwXHRniFWsCTCETbVMmM2pJ9LnFTcakw3kT83jAmGn3fA8aRGMhrkfC5yHQCmr81S5A7WUBvNmMLKraTZ9LL",
  "key5": "5PWY1iFWgm7kLXEk5aFxa7eXG6VDaP4puXYgfjLDWTMTFf3AWFZLmwbUjf7d19sSkHJycWgYvRFtqGfk9LaS1paz",
  "key6": "3VfPtEXNQKHx9GfwaviwaBn5RNTSmbtVygLP69noFK6vfEQcUsf7cT53hx1bEid4oQ8ak4RMFdUPwL2Bjw6hHpzf",
  "key7": "2YBgWXGdcVA35wud3p9CEdLSS41wZuL8WFTrmxLY7zpsoyCQaQMQv9SA9gi19kRP15LhfHkcW6s7Ek9QX8HEct49",
  "key8": "4wyYg5S3ciNcSb9trUhNnUxxsrttnnutFS6229teKkHoCBnkcZEfbRr11qWvQMndNpPp3UTWA8EaKwxM15bPVAnK",
  "key9": "2G5SQ6gsmSggzeu6rVMntajRcni797WfyaDnzMehJtyEntnqQsTmSHYjt9tSV4cFpTZCyiZEXi8qLhCA8ZbgPaxx",
  "key10": "tGmyGev569EW9q7EXoKcnefqMWd4dX9ed3R8ZDe1vpWZPv6zmpMWnYHHyQmwTPmTPiutcGMQJteRAyTjNKi9QBu",
  "key11": "YJQDcJobz7KQ1teuU34XC8Q81fmPUqPwHBn9iK5mXg4xXbHGnTDrVUY4DRZnFQ4weCdvhCcAr2KT8qifhH3Tj34",
  "key12": "3QpRQWNKmNqTfqjsEnr7dfpTJ8kfj34PYfB9arfwxAByVQMnuLo9ijbkr4iCU8hF3dFP1HVUZQ3cnaY2YYY7ZEvn",
  "key13": "8svY33txwjDG2jtcGUrRH8HHjTWgz9r2mPLMrxL47NApqgQBXuFuTriM92NJuiSrZU7ovAkcvUztLqsgUAM1qti",
  "key14": "QxhvfVfHpxtJdELA3f9CcXWwXL1S4ThJeCb7iScVFWFRxhUucwQptGHYM3WgSxXg2dri1BSndjAGcyrzJScMsnu",
  "key15": "bSYKwspM235HC5fzB1KPwzpyLaRuuPpupHLk36vtL7LCmqZWnLaLeMDEX2oY4GjbZiGK4TdBwTmRYCef65xd1MG",
  "key16": "24Z2dUx2LwzifWEBzo3CyvaU15cqYTF7qXgsRT3yb7jvVAihGgNz5JoJgd5xTNJScmphtGMdhuCaS1bDUKHfF5PG",
  "key17": "xhDx6jkDmUR6afuVuzkLWJ5xmbMfukX1ZW9zqRs8kuv8CtMtQRvjXqXWn42LUYNrXEgLeeXCvAcxKuYUfHeRjrS",
  "key18": "2V7iYZ8mZa9u2tjoFrEpVpx7EKdwGSe5EC2iJYADojspEtYqxEa1DaGbYGgHrNFUmoELbPVvfCjJvyGPw3X8G2EN",
  "key19": "5dSB4bW5DFeNWjC9FNrrA5qtjHZwqHdBMd8h9CFTf6YMqzvjrWh4kokAExqkv8pCCjpERWB9TBCrBMRrKFsUVufp",
  "key20": "2UGbVWejussKqiB5zkUCeLuWXfUoY5R4N7dxto1ASnqw5xfiKeLpHoMEMTGzpJT9iy9sFbbSxqh9zYZtbeJdmEHp",
  "key21": "B1cxCXM8QsqnLejn8QVzwhzuYDDsjN9V7T2jGuuoLJka4tBV3iSJA4WUyJkfNNGaUPEskuo31W9r6KA2jUPC5PL",
  "key22": "35L15eNgVadFYMpbcZANx42ioVZonH4UkPgySh3JKuwqrzPswXq6ecj1idPX48R2jPrBPmDDqyJD243UxEVRvakR",
  "key23": "3fwAqMenZK3H54wPobTjnQXxW6HGe9zZsHaAVH7vyQTvgTnzV3f9VJgZQ6h6ybF1HC4EdWkVv8dLY5f9eh7cBJP3",
  "key24": "26jTY588d7qBMXx5MaS7apfd3m2eicdBYD6TwK8Fh5X4aFbUAFW37X6E7AVXSrTJpc7PYruCRGuQqtM3oK3cptob",
  "key25": "dhc3mLbpAD7TRbvavYYPJNkxvJg32e8PRyZdAG2TVd6XjXME41Vazgh89HYCeGwXp4JY2YgfXdnT6rC1RB3Aa3n",
  "key26": "4kmcJ2BD5wdULQisLZLGaVta6VoX44bZU34xUgREzUnTE39tNLNuXSMSH5pJEcNract7idv3gmEW9CbL1RNXj5xs",
  "key27": "4Wc7YGHkX3HtW1PhnkikoJqWczQGuSYPrKp3dyJnynQj6NGdPZbie7M4PV5BBXave8wyu1v9H57uHHwKtYKTdgP1",
  "key28": "2FJcniCnUaqacRtinerVWJD3iuHnhVjyy5amWRjWbTSRRMvQzHAQ47ZDXNB7tJDprSWXoBN1Qs7gPg2hvyDtkg5A",
  "key29": "ujzpAVqgynLWsiomUDy9d21DTDVowZeKeARVhuEc2ZC9YNBbCdksyo6KL7eXkjgd5jqPaETLo6x8zFPTbU1Yyxg",
  "key30": "6L9azp16jHhsnch3fyw3zbiLbYDXxysPsb3CrWfUUtF41wjzU71KAzB3Ma8XSYkqKboXwAUGUJjPJCA9GPRzgFY",
  "key31": "4kD2kse8VefdRhR2U4jYANUWukBEX4GryAtrvvqnHukx359p66R85Kvf1yPMhoHGotB9EysAqxk9RwFjUfNVeS8c",
  "key32": "4CmtKKQyHrMBZ3nG63d7CCA8Zy6QAQrCfMkkyqhmSRmbL4rPcLmgKMNyDPncu6QFJiKY3JkTvGqB2icALhwtnKv6",
  "key33": "3huSZV2EJWjTLX6uwsivrgBHk1e1WUu7NHJiADvGteUut3zuCPAqKPJEicuvqcKqX9n2TWs3y4gPyh1v5So96zXw",
  "key34": "5scWfu3FqGiXLziwE8msJHi5cqTzAvihAk4tvPV2gwKFY8rT5QZUwz7eTDNauspnbphM84iRkVmmK8ps2cYffmCa"
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
