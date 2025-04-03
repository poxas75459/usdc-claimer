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
    "4bgzH61Sa62PZea7v86YaUksQ3cyyuwDWQFrFeJgPFM9B7EjGTeeqDZQEt7rjE7SqV47HwMemybdfbGuRGFGGfTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5BNidAsow8pwQo2xPhPaAcDs3gmVDkXnhnyVdmu6hCTgiQkh6vt7ZBxwPBKZDbAMHQirT8dRvo1dzdxtnUxTea",
  "key1": "2UNVQQn1hDJTG8of3Ku3pCFE9Fc6jDGPNa63DC11kjuaXmckyLcAjYdD7o7qBx2hrvuD6BhvUjFfwmNvrNUAGwsm",
  "key2": "5NYydPb2wM1v19D453qnk6jcm8uvTAK5VizjJrWJyWFgZELJMCQtSPZorKgeFnvenYmjiLrfy6iGH5ijbLquAYkD",
  "key3": "4HMTMdXBySeGTTQBEkYgUJds9MeMSYXJ4f7CVp9TmtFbSJYP1D3XncCQCSPbHzGXpS5hvttSZrN23vwVuE2veTBV",
  "key4": "5RkkLYFhPu4yWj5Z9FRdp1Xn9Z4BGerixvDCAnwbN8e55D8wfffJGTE7DpayJ8rLmidoWdwH7ntvESUBsU6yJZeZ",
  "key5": "5ejd5tmkvGpY2SUFDv9waouURsY3Ge8L2boCVycPd9pMfbL7pMfkwFaK8wxKZ5h9kTptpQKF65xSDFkwSWpmdh2J",
  "key6": "tV3NN7GB65PRCVSJYn8PU2QAVY6v5NiRJp5xWRWzqkzFAGfRTD4tEoArZRimJoxjM6GoMA65jGeyBrRNSSWHQAw",
  "key7": "3fWQ6ByEv2qbbJWoWujXwHAmJBApbP1AneofdF1GEvgR7DMSpm6iwceXqmaBEkvRM1KuSe95iDMZQ5yc8YM8B6Wy",
  "key8": "yuzzgY7d5MLvzx9jgrEG2sBYeQhGyPjA1dqjZQj8CMxY8mfjHexbp2PvCKtxqc3C7zvzCfkfkSSpm6mWhXKrTDk",
  "key9": "5QTKxZozoxUgFSdXkqXxjVN7wFv3n6qRUxxTcYToC7BG7UGEfrxieeV1Z3fg8wMpbBbmrWfTUkRE7uCZRKZ2sKJe",
  "key10": "4EbDpmfwztXHpT531mKgZrwX7RXudqyceQ4ZSkZqDp2Si9uTZcsYrwJdujyuiNeGmoXRjTxF4f68wRL4j1a7zqxj",
  "key11": "xpyGhUQj6UViAtEKuMMT3w8K6DdnN9RU5QD9LRFQzcmXsqySsvLazGPc8UoZWv1Q3SKdRHogfSPpJ4vagarjrdX",
  "key12": "58U8AnQHRBpD5i58ahniAQ49gYNzd18FRyPRL9HJvoKaJu1TWAoHukXcSXwFf29adiC8zBrdC89rCJ6bnt5EQ41x",
  "key13": "3HVGgQiUWiY87C2Amv1LPpgQZ8vY6N5mAJThRvnftUwafYHwNXthdnmMnhwgYLLQjN8eLHk8E8nQPrGogpfwWJF8",
  "key14": "5jCx44x9YraGTNrKfxgwi8tWFWkAAXLp93GVAwPicSmMAu9E1gzQQjQmsoSZcDV5tzoyYs11DYLepxQrN3bzRY1L",
  "key15": "2chsrvHqBGkPYZJPjBYiBzKSzwTZqEYR5nikmD14LSDZS9rL6d3dnSmS4QBF7jY6BzMP5sWyoAbvfCfkaFYTd7bK",
  "key16": "2YW3LvxJDCtGJjVJkCsHewr33JHxuxRu5PCkVifzRWsWsGCFE8AGW4juooHrcqjDiKThrNr2T7WNUGQgK4p43rJw",
  "key17": "3dpTXCBBYdC8Q6Bs1zx8apAabkk2kAfxqkLS7EMXwAevRTHBHnD2Gz4jG7ZhPw6a4tBQvcd4j5wcyZg7GAvWtLfa",
  "key18": "5tcZgsuxNsZ9eDC9K8LrMiQyPWy88KmBhKPve2Hoiiq9e4Bh6Wqnxubmf2AhPvpv6aCHSGDDj6anhCDcQYZgL8br",
  "key19": "2mLcWfPpdzLTDtANLc79nZ3LCxaiY25uQNF7taERqhgVgMQDpbTKckoCEjFwmRu6xTZJxe6BSooEX3j5zGoGcQLn",
  "key20": "5JE9HhvNfGuQrgvFcmAa9sYtZaGMW2HK9b6wWGpsMKcuZijej2t9mHNrSwWrT44G5s2nhMWpmfCQprQGJKTWyErA",
  "key21": "bEAEEF8ydr4j5Q3HzwXAPAKYpymMJTmaCsnzrCFnayeF5gTR2vdsxw8pdgpWG3ynTgp3DFBjGcSogc8TVkCJTKi",
  "key22": "3mSzJPCPcCMEZ2NnNodutVZavo5vYjAKA2JRi967DioycqEcBdWpVJpmyrjjRaRTFBNc2mEbTE8Ey18SfDTXUQuq",
  "key23": "PfZVDfA1VLah386jvXpckBPLriSMX73EXcJVs4Ensno9LZTCcjkqvHKii73UKszDMMoBriccpXe4nsmaHAhFYrz",
  "key24": "5XEHUBYSGLv5qKQybfzM7HWNoEN3AxEfntD5Hrdf8immr6TJCvZ1LcVFGsvKUqPM3gwk3pf9jxzQLTZST2EzSyjj",
  "key25": "NqG2Fu9axa1eDZycSw7bArbX2cneb8fMNcXLRH3RjN83zP2DWF3BFtc1mJjm3K3ueQUeNp4cSLCeKj11qXjfcN2",
  "key26": "4TyppYLpLqK7kDhjMm51Jm4Z598odC7vVApwSEaWU3VPrb5kVMtnPUtLfEj8aZVUHoWvWSV9fZqXqZDHYpXFi1wb",
  "key27": "4fcJhGiLdqBtt8iZTkhBRfqJF1JwR8jYQGL7RmXiDes6VPhdtxyC4wAhxuUhCZvTakn66gupXA61m99dVSKPFBSC",
  "key28": "4sU6Vsha4nZ6LJwy5WXSSzxsQEBJ7zfyTj7pbFcZwgxD1VjaLwSxQiCWsmghkPgeTWzSGvwD28wnagHfKuFPdH44",
  "key29": "2QkjUmvLiPRtStSK2vNa9Nu2D4oy77bLFW7ARpt5nhiPDfLUboF2GyrKDst6XJnkSoP4zT2UkLMwdknu25B4KvqQ"
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
