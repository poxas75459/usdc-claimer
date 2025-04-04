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
    "2TwV5qg8WQfq7W152XXe41D2MS1BU6ua6ZcoP9dZaFCK4zS2YuK21myX6Yd7pGkWBCsHUcLuVDzAhdCxtidrASsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vkxXT2Cnsg4zHUkCTVpVBeJA63D3XmLeWX7375pb1Aqjq8MYKJ7oWLudeMZVhzddYTAh8swd14WjmX2vvWggWAy",
  "key1": "23wsksgCdQ4GAZbEtW2At5nUhQoQLGJbdx8ApPvLhaj3jerjdfqLW1Zif9xkfE2bHXE596mHJq2JwFmNAu3iEQad",
  "key2": "5y4qspkyQ5eryb9D3NDcVW1LFrpEx81iecdUu5FDp2m4dKCN93eafg7G2VAqmF5Tq9fGXDiMh92tkthkP7LhUTQd",
  "key3": "3Z45xPXz9oDBKtp77SeKxeXhiv9eXqMN3azmxbW196wGwo9naVSRKm5iHxK1zNfcVLzrrSHuYj3aZGTjqq25u9Nr",
  "key4": "4BkovQUX1GXe3brmW24prMfMHYCP2sv6cGMcr1iat1ukS8Krg9eRPSuKCbeCNyWV4YJyVjCP9WLR36XiJPNCHjhP",
  "key5": "21AAKxSbjidCsoDCfbdUxiPoPXKQo6TUuEG8Tn9h5nUoLemf8DpsbX7cvCs6ZU4qEjSd5yfhTDv8TjVr8sor7emL",
  "key6": "674jQYRnnDLEdtKTdBYxSaN2PGzj7jBZwbCwaAgHDTM4k91ETg2jY5aFmt1YmpuVHJnzSh7Vvrt6fmQnG9Gz5EBG",
  "key7": "4UCUN2SmW4pXRtsBFCW8TSzPVhGhx7vncQaRW8a8xVsgXhGgHPupx6jgmMaDYaY7iPBzvoNR5M4Pbtg4gCpeWxrH",
  "key8": "2Kfot9ynuQck1xXBTizbG6bDtqBLmEQnjjtMzHC5iR8rTxsWzogmZVrp9Rz3fXkop25e3a3ZEhL49A7JxDw335ME",
  "key9": "24RxSw7JCgMXUAXqAGhHoBkwu7xrkmxpASAayJwkvxyT7r6L7yu5JkEnGTsMtviBk3YztXbFJz4PQQXqTv95G6QD",
  "key10": "3PNKN3SCArjh8wXEmdbm2SgLssaua2oTcTKcNDKvQqaREE861j55mmqPfZc2k9EAEgpEahfi8Jgv9rpgZm2C4Xtw",
  "key11": "a6GEvvSREviDQQD1of47Q5FfsyoLBZvPXBynLedYS8aXPDyaKX4YqWMLunGJEGpVmRNMSU3ZHcQgpBQjzJzmf2U",
  "key12": "4Lq4kHujJ2BSqiFyX1EEcnrEyLZ2NPEiefYo5gRiM818Kz9psNBehpGZY1f9JzvQCpERPbKwbcBTho8eyUG1TNWq",
  "key13": "2eTL8jwwXTk1aqeiz5djCrLKW1btNLWm7nNgdQLLGb3Sh2pTs8Doo6Qghp2cCw2tuxTrkcKV9wYDb3ikRyW4wn4f",
  "key14": "2Kug4aY8zWaLUhuUcBL1r3xD5Zyrur4wZK8JWBg8UQLopz7ayGaBh3XW1GZx6mV6WtBCV3V8tHR9RFQFYLtKXJcY",
  "key15": "4nA63pTRepmVi5CDyHapGUB8xzqHSHWht7xPLXWAGaqv6PoRxcZa7wzYVFqd8UPu6hHFohvQpQqV77nLB9eZJrx4",
  "key16": "2bFFdLkUx3s3nzN4E4RQ7XxMnttD21HKE9H5WNjGRDLFK3CfWwG8gav1mfHRioVjpw1azho7ZfByqiwASdHFCJpP",
  "key17": "4xWQXmTs4MAxfJteegc5PWMWAiRxHSMipeEBNnHwwc98Wisbhax219YrBUp9yoAJR9aPKJcqHZEUzaSmhYZAcaJw",
  "key18": "37g73cGNoJ2mFVAS6WnbMArNSN5QJC2HoQ1fZWvQEWE6zf69TJtbW6yzq2GPsGgLj4Qg3uuEpZzGcDRawQkzHkwj",
  "key19": "3b8WuHxBpycwCbwJyJ2RYtih45FvVKv1stVGQWh8YM7Zg6XQ1Fn6eGjbJmZ5N3gJhqf5KLpAAqBtk8CYWJ9PKEfQ",
  "key20": "2R9X7NCg4w4hDK3ZZmrjFwpJP2BXryMnTvjC6Eyf2JWKRwJmCFw2R2kWUz9caqz7PAmG7x3wyEEmLjw6qDj6RCsZ",
  "key21": "2TfLCKMNELRupDQDmAJXbcAVDNn3EqTnd63fCQQJrpZa2FVR1kY863DC6wr14dsNwcmvMKeWxnPYupadsJqvWtdk",
  "key22": "4Rg27cijF6pxAzcF52TarX3AJHgihzZSC7v1viFEuSs3hANh68qRXEqdGsRhJ4hBsUH4P9EiRnvMG5JV3WrSRwoX",
  "key23": "2K4oRXH62Jr2yA7PLL5AgGqEkFDL1HFMnqcgQTdKhm77K3yxEd3z4iaBY1SxhTs2vPdjTdZ4TnqZLVY5jSgtBHKc",
  "key24": "qVZkFwHrhkAiNC9FtwhzpXkBPAvUZksrWX2w3Pv2aUjxQr9FV6kuPgPkzK6n1LP6Wk7BS6CUiCzRRfHn4Vdh3nY",
  "key25": "5wpopeAVyMBSQyj7oirFAJ8getxZMAb6BLtLBLPwKBsEj5NbNdB7Ezn2Pcp8Jhw9fPAoYcxCC67hm5PZgtTCEK6h",
  "key26": "4jgcsYDjiuN4ki89pHGyt6a6sbPinw7tPeHv5qk6aDaQcKfV9BA4dNsBAygP4enLR5NDZkJ42oFbN5UvpY1hph74",
  "key27": "3RE6SKMYRvDvFLxPvo5ME8J83LFc8eJQpdFdnzc4TTi49fHQSRCdAAhuckrUDj4Wpm5ZGrNxeu5N2Q51qmaaSUP5",
  "key28": "4pVBqMr1tNBGbSnttYs6r5nqqB3yCkTdTxDjwvhN84uDGZVDzwzWBJnBP1kuuvEQhnxkH3Jo5XzDCbVdZJAubVza",
  "key29": "AT7QGcXMiAuPV7dBhcmchcVCfSE5hS7Zru9weyUTLXjQPcp37E4RWTNuGaW9DgdjSkXxhZVoPyhNZ6mSd2MkrRP",
  "key30": "5a9PWYuzmkJbjUgZWQq94XBk1HYDCgct4S36y4oJPeSjFyD3V27nt6zmzXUwRSzsKujoNSgwqsRK1NMisBojMrAw",
  "key31": "5rB5k9WwDLbo58bt3zCr9iWsd46avY8XAQjC7sMox4CyvtakjhoXvumSYc7x2M1ijZ2hTyFankJsM3cv1xJh3hGn",
  "key32": "28kzfXaq1aQkjAh2f1fhb3xLefQFLkzap9yX8zS6METdQ7AW828CNAEzX8ukanCCvGuH6TXvdWWsxjfnniXnGkH8",
  "key33": "sbonjnAUsiTEZ9LwoDEQNbB4zWNaf4yERr4mDvW9tPSK43jXZaiNgE49e9MVLKhbXweBnosQMigjjvrxheLJm92",
  "key34": "4fks3rKvt7P5Kn7Xi6atnw3sASKQtVd86C5LbBDf8e1swoV3zwAGn86MaQErktu6oQLqZ6JpgqEGMUTzhY6ZuPJX",
  "key35": "4sJvEviRUPcVJbqZhF9MzPXXJR2UCsCmFcNPpWhLbiRqm66jb31oBK61CHQgmaRv6L1AhUdmebwRUdiAr5L4jkhR",
  "key36": "52HHVNgCWz1KEjMQojFrQp7d812Th6oxHvPQsFJh359WCCdZzCMKNhfpKZuuNrRUMCp3HyiLEABPP1KyCh9tfUTV",
  "key37": "2owd7Y2j97cXEKW3gb2twZ3zY5iGZx4NfusyWPSSAQdDBZK4TPxDf7818oiXHT2FrbFezAphuABZyNZVKvryQRms",
  "key38": "2grdsUnk2yrf7bNEribhAFk1Tqj2nmTkYPQVPNkXkMoRbsUG9AbPXsXBeyC9NtduyheYBhYUr13vLwPor4NwZMiH",
  "key39": "61JMZxVqhKFBWTREv7xz9R1Ws63g1FWqRFYemkgStqRLAGQAEXBBHpZYPvuEUcv5yE5THj6c8emaDRTviFDEf4DA",
  "key40": "3b4XkatyJurxdsU916ECiUfSPwKGizt8ydtAetU84my881CPPKxZbmDxxDycGCK4Mb19tGG6hMEaUTpK5enWwyBg"
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
