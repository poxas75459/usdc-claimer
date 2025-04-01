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
    "5GtB21LTurvNff3GeUZJYW1sEi9VhQf8AfRAr3ghYBvnpw5txjN9ufChRyHp3PSgCPhToLfhFRKaBr5MCNiPsQpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u5HsqP5Uq7mZhFjTDtxaFK7fj2mfpttWfFywx1uxyfZ2WuE9ESTYvbi8MydHmZD9zfGm1d2mTiC7xVhc7aqHYcS",
  "key1": "4Lqt7VRmxJeCzSdm2okvsUPKTcyVQaskQpDfhWSD4Nb8MZpXtxUVv9zah4HyvDvLNzjpZ77ES7Qd5dL9uZyyKLfc",
  "key2": "5g5VGe5ZN6gq9UtnSfQQxxA5ghao76AxNQEEAiJYUWqswyHUjmj5r97LPKPboqnjRNpXwzisXcbeBTNvWALWTer8",
  "key3": "4euiXXPt5n8HNRAwXu9mGkxhQhapRzq7JXBWAwKiJaNJS3gaPGmWge9HfYqkPFvcBmjX6LkeVdV8bvd4nDN8KAcM",
  "key4": "4TKXieUbLt4MtUFun9MWoAAKskJZQWNEhivTBAPJKsxBc9mr2gZMdemBrURRAiDmq8vHHTXGgJbzanSwWbmnBi92",
  "key5": "2yafYuYRtNLJE5TS1NoJXC7dS8HuiEamVDLTrhvzhznJ4y9suPFNgwJV8yynYEDncXCfRPqErbw9o98FuS2fJ7LK",
  "key6": "5d4e6hT8zHfBAB8ATdb12nicLEJPoFrpJfDNKDDrKrQTgqPsUc5DYYLUTeZBvAwDzmVDdRjGHHyMNkMN1viPN7K5",
  "key7": "67ayGswGCsXTnngLvmRsoRMuUVFpmTohCdNrWhMaRZMyN6gk3om8PF1Lg7j5BxCiHE5Zf122sHGSS6BpZQp8stcd",
  "key8": "5zaDCuwKxhJDzQmB3X7vp111ycS5MqedFtZvqvVBSX9mY3JkZKLCRs6pAffcWDpdu2cpVGgCN9QgCFq2WgSD4nGT",
  "key9": "Dk6kqmgW1mJTSd1TNHkhv3yTzZH8uFzb6qELKKhjqF6iFnrJyKwJCLicHLTi3bq67Y9yErpwgwey6Saia76pPsK",
  "key10": "4j9Xi84DTFvnTGnMcGdXkjH1pGxwN6m8vcPvGQ2iP4hoU81LhXpCQx6i4DtxcbEBA1i3a5nC5omsFxfCwc5ac6qr",
  "key11": "NBLNbx23S47eAsbjQrb6iAmVEMeycAt9FfsTRHpmEBNQPXR8LnXkRy1Y6eZkc391mWCgLcxGL52qYoFtk6jNLVV",
  "key12": "3gEbNkHT3ErG6XpRJyuPg1dLYZF7BkJDaVCYT9U2E2jz8CtDnBR9LtSu2jbegd1QBG9LfJvAZMqZm4q1qTKbBE4d",
  "key13": "whKvowmL6t7eLPQuAG2U5fQgBoyBBFYEH7ZVeN5pY6EtCeZsJXwbBKL7eempxaVg2JaYgGN1oDfpxg8wFd6yhCg",
  "key14": "2Q8gKUSkY3kBrkuujVRKgWiojHWvThuw8CJhYRs9jQxiP5CcQMXpTNqx3XtL4DtM6C1THUcGPL5KsXMenBTbpHJv",
  "key15": "4fXYhKJmHUDoXwNCoCMbsnRMr8eBk6avfrLxKvydQfo4eHdkGfLkgww1YPbRbyM3UTTSzVqKcX8pfBepWrvtpB7q",
  "key16": "3jma1NkKNTbWVFPCvgnYwKzCenkGp4tfvgkq9sXY8AYrm4NjFDu2F13uDdHhGSJ1ikSa9Z22LgyfnT2VYbV7iZi2",
  "key17": "4KjKjgFDhaj8wM8sSm3QYFLCcGbrLzRJaCkxsaxfWVYM6bAJfsfp8nhn8USfMJpumytqJa7sz1iUxisHXicwL9ub",
  "key18": "5oQmkfFQTBBAk8wdZ98SXxpxPBZK3NDboXDptnkZ1p244tiBSqZKbK3hGpN1a2e6MdUQXF9b4DLVdPn7GwPZ6ceT",
  "key19": "q47dXJp1tV2DLRL47WnpjYS9g6t9ven6eUfrDYov8EvDHLxSq4wXS83PHW34SVoybJAtJEMWuvomQfwwgg12RdA",
  "key20": "5dfrJVDmbCxTadSXBgTehtQrYjLzmYgUxxf4UoFmj8bK9FkVWxoeX9P1KRX4BPRxdiPLwcJzNjsiPhTXbSfvjkER",
  "key21": "5TfWzTSvg9fpEGehP92vcmzW2t1ShrZZQY5s1PBT9yC9xoQUb9PvSHRAhEHAr3tToY77q968ZryqG6K5B1GxfhhX",
  "key22": "2gj8VnvHctQaWYrTN8RmeKuVF5xG9JHF1EnHeTpm9r2ZJF3LGLJ23E7L5mf6f6hNtcRr8ZYUWaRgiSgCaddK9M4D",
  "key23": "3ybY8YTopJQvfe9qxFz8iWTVD7DJRxhdXaLAktqBj65LSC3B6ZYgkTXf6iLoWYvW8RRSZXvbbyGTGZpGJZ2CpFrn",
  "key24": "3LjwMNdP5Jcx7PfK3kkj4XvWXkVy9xwAGSL3FWBSHvbs4gk6W1zdAWJNWXK7UTXHQ3PpZD6ZKTX6scpfdFoG7m3m",
  "key25": "32zeMQHVyapgp2BapXSuJZXuJpBNVhNqH6Q3V3LtE3EKPL2m9TXXyHvNnUx3ZSiAjfPv5h2WU32Ciwsw6F3N9ubr",
  "key26": "2iMQzBSmFvwF7uS53nzxHoF4cotfw1T7V14yqPgL1iFo7G3AAdBvx6nsFibQVsbySTRcuMYAuvAhjFcUcSz42CyQ",
  "key27": "5mHcAydfdJACoBLVPvFvLBPxVuqDR2MTw4e82mZPU7ncyVqzfie9DGA66sMneRBNmHw3s9F6iw8iYs8fH7DesfP",
  "key28": "5GbpMa9G9fEhW7Y55WskR2v4SGTXTYhKf31P7TDk6KBS9htDUeqkuL83Nk7ib25cBgx1kqPkRBPLvDEwUPgyNai9",
  "key29": "3Xn7tS5H5qiMc2DtLP5xiAvacFdeshqNZnk7pmCuEMqCRPZ6RYJF7ZjPA6BA5Spqm5S2rhRaWwMg3Y4qnf3duug6"
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
