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
    "By8t2wZv4xoadejLKZVmC6uNgoC5a9FX3APSC1KsdJbAtTj41nwdaqGXuKmfYtnnRkCvz7E7DCsS3KDSJgGXcJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6sddR48rgt8gk7Z8fcTWv2hyWCdsdyaMN973vj8wwhDnbdTWwYGj33cnFa6wjFgY6XoQfLzGd2TqNfFzty6WW98",
  "key1": "PBRGkjVqFY1u6ng5Tdm6gbPSixx8TGi4YN5rZdKw9GuBx2V4scidTPnP83sEJHTERizL4ZzYxn8oYKE27CgzUG8",
  "key2": "5dUcthW4jvSkB3BsgscaroyMdGad9PJvwuLAAWUz93LrPhBv9nyd9Xz3W5CgBX6mBtj7u3W2dxhBGjjfNfMpuv15",
  "key3": "64TUTMxc3Kg5NHGB25q8ur42PSL8ior1aSGJBFNiBgVHDgp1oLMNk5Hufgj7kiYVdp7M3PjRaPFKwv1jxw99esSo",
  "key4": "4tJLnzNvPtpNoSXZeqJANpNHiZndvRV16r9VHgXYcF96rA6kWKCscdznyMv498BgdabyjoWRvyeARjVgmedoM1P5",
  "key5": "5fM3ievDmPFPf1i2TF9Sqj1odTfpaxeFXPWJRLgvhyEN3rVJ2KTaAgZJttHzVFspB6zMPhLURTwjiXubgSagb7MS",
  "key6": "3T9LLFXSYVBpG3WDVtTZJGpFVQMagTQ4U7r3zY41Y4i3YmMJjF9VXopQR3wiqEgXRUvvrYx3wfKKXUyQQpQdD2iP",
  "key7": "4WxZ9F1U8c2qee3N389rCusXRvsc46gzpAagEQLXR291M6FFyrX5r9qyp3JgU9pZ2ptgMTNi4LhJayyjc3MuGxe8",
  "key8": "4LnXNzfYck1BnQGnhcgKJgYLBtxP32Rg9Cuk1jGriCWXYXvK8SEGg4gxXtEsY89Lhpkcn3SpKPmNQw6MwqoNzfLG",
  "key9": "5SCpyz4hZZCHDMjFQBxFztyghi37NYmzQUYLrFTNANMn39tunbpjcnHpWy8gSFsYokhMPccasyfZpFhvFq6bLUgu",
  "key10": "4YcSAHRuA7LspUTGbnVsfxSdhBPbHTDEcHDaVoWwFERmiAVoTaH5TqwsbxypYr3BfEGE1fQUiZia8Tr1JrfyrLxb",
  "key11": "5kdfEazKuGZ2XiQML9PZgzBK2uDyck4i5wDX4XMo2nuB12pypZYod4hDuy6QrEATtpSNvGg12ztJfYSv6hcwP773",
  "key12": "5h4tbR1sMrmbVQjQi3pSsopu3Nc9J3cjTiTcBX96eG9iXPLWU3Neo5CUXjpDxA3DAjdac9jYZB5s6b7E1wA3d4Nc",
  "key13": "4NbM3wnFPQu8NRLhgGL6ewDjTh6y8LqmpRSaSJaK6YexLmVHAcMFWHFLBsoFF2jKxUn6LiRXSeW1YQahHXt9V5Wd",
  "key14": "2qsk1tJ6qGfyNqGmzUgJz6sqwt9iYqfUDxLK5TYiMiemL8eLwpfB848r6Jap4vYnTqTy2Hp6qt1bv2eKbnNYQaqM",
  "key15": "5dtfp2rGHikVMhdc4x6MEut9yw6V5AzKQjGXam3m7tX2jHqJiPL6cbWgDQ9kDP4zK5qryShpG7B9trPYQCWhKTon",
  "key16": "5YyQsuUr8GkjeF3tXMMHBxqPgi37GARdcxexuvALRF6NRKXFG5joRH7ZDopV3h36ZTGXTQFT5zJprGESF9b7Z5Bb",
  "key17": "WzCabgj37qQw6YeQGA3BKysobgGMcKve3CzZxQBXE7vGHiCd6RYj7tjCbi6RmGUs5oPfQrfaxg16V6iNBvoQUXd",
  "key18": "3SYspgxsUov7hK8PjntcDUmigJyyqVda7AzL5PXmtrS2eXMSptcRFvH33XBEJpjpy5rnhEQ1d9njZyzcSjYeFy2L",
  "key19": "35NhoQAzEf9e5QosrwE9UJ6LAKzgAn1yWx7mzg3ZKSh7GMcu3Tu7q1TU16e88dGPpFGYe8eiuPretvRv3tCvLvzG",
  "key20": "35wZ91f5iKeQCTxrTx9aSwDFre6HbzgfteyiajZET8EGVNuzAc3VMr9mFqrgMqntow6ftqURB2wiZfg2eSA9n9kQ",
  "key21": "28xkNXXP5TDLH5T23nCTqkAgYxdSJMdjk5VxzQCkiqkpfm6jzEqNy2CrEmiceTQnArX7ydCLrV2tCBk5WDmii3c2",
  "key22": "5dgTmA7VvHcxGEzyZotjCgPrLSHdvsV7hJJNP1zj3vs4qMzZzFoyiGv7jDYMBb7gLUR8V49HK8DYKGu9ukVpDyVd",
  "key23": "31K6k1nWY5447jdFqYmmRVbkBnQHB3Zwqsus2yVEMe1MVHeVt7bz2egTYp3FEaHj4m8H24QKFWo59te9TTRsMfou",
  "key24": "4n8zDUb5uSmEL4rYSdynjAsF8VQKa8QSUQPWcea17Q9y2v45epdHG4wQpJsKL8bmpH958vUG5fev1bJfGWR2RkFS",
  "key25": "ExcMZFfGBaPNvymBNwraC4PHudmFD4G2xYrMQYzkiZFHjePZ6Gc7SxEe3oUmvjRqY2S7xiZX8VmKZx4bisCPyXa",
  "key26": "5ZKCiHTeJ4Mniqrn513Teycbqqz7Lhjc1Fvi6TECDQxKSZjSsJSXMKkWR3ZuJ5sSx4K4LbgyT2ZpJSbr45CFQ98V",
  "key27": "u7m3nnRXUU4xT3FDWPuhrwKcdzSc4RKeX1afnDFtUch1aB1wQ84ojdXHYkr7LxhTA2kF9Zz2JZmcGrYrq1MgPPj",
  "key28": "5nVFDQ3uYdH2KK26Tg5VN6fZALimKak4C3Rmj8upeyQL8bT1cJhMwDeLTkP37fpmoqMjcZYxyGiFAmXgS7528EEQ",
  "key29": "2AkhNCqb3gp1WQGT74MWee6iuUhvsxVB8bzcPAdaVGVCH6dDkgPKAAPs9AM9jzhsxxXhb1vFJ7pB5pGcPMDMLz8t",
  "key30": "tziuLvSctzXWexzNdjYe9skuD3BooucVUNzA3yhJF6Db1iRrbe567ydsuCcejEkA1mweQTjZxZPFSR6TpRPoAeN",
  "key31": "4QLcpMUAx28XJkhTAubgoqz9PLuUQcWtQLn89LhT3ZF2ds1GqrqJnesQUjfzM3cMc6qnYAqLNfZCdN5MnLFHpWJN"
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
