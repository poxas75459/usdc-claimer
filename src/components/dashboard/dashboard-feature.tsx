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
    "5hGyLAED21214Sdze5apLVT9tQq7HZq6H4GJBjaL9Q6FMHDKdtDUZMj5TgRFWsHpZBCfh3MQGzCVzWiVMY8SxS4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VaH2jZKNYBREvHcWxLXqwgCdYgSz58dzDZvf6WbthzLw6D5vgCTP5MVbTmmDpVQNRh4N8PWeKvRVnWvsybjDjxf",
  "key1": "5ESuFanSBA5f16zAFXBSQgmkL7w296951HSjU2ntCsNLF9UKHvPCZ9SowPQzKtoHDUBxdJCg55VZjfJVg6r3vCTa",
  "key2": "3APDJ9aifTeCH8J1KpD9rtqQ442mYZUdD91HcWSH4EG2jNui91YE99WvecqBuJaiEg9ttH453hcTjF9hoLwGGrA3",
  "key3": "4jWDFYqHvvyiSzU68bPSSom1zcUAM1UuDHxGMThisuXQfXaHkxDoBe9ZdjZWdykBD1VXsLSvjj84fF3k8cYWACiU",
  "key4": "3d9VkXicp9sG2MFQE6v2bdD1KSvvjxN9HkCdLAS4X5HgeyQqMgBZcnQc23mQnKMyiHfec3CYhT9ukcYuiWtLnq9T",
  "key5": "UUdPwcbCnmYn8r5rCtCm4Lsz5xBjZ75ZHMAzJhXXbBNbSHnRka1MmAbZkDY6PNZ19bafxR77ywr9w1fVgDtNLxW",
  "key6": "4TQ28gjigP2rLga9ZTWowiERpzjs9uGoBW5PaZWu8YCMd2f1xgWimXkbast9HSVCRqHWzh7K2uMur8rkyKKVUfW4",
  "key7": "8oUwg14J1MvtbpcMN7aw3fiqyPfY2b46enJctTSAPf97EN7ykCLMaHarxsfmpPQbqaG8WSMzNnoWnhxbkzzDaZE",
  "key8": "5gkrzR5Dv3mTPFM2NBrGijnZzbe3zd9Wo6sQChUd6HAG9SD7ayJq1v9qyz5CvQZ8o8vtLp2odZzS94br7XrRwPdG",
  "key9": "3VoSXFsRgrBAbNYwLFzZhu4HCyFofXDwymtK88S67KBVnLFvGtYCbSF8UkvvsfMdfhpKvopdR6XnMpkiYnaW5BPB",
  "key10": "3qviuK9ap3vr8wue5AG23ZPukraL6GULDKq4RCd6iVtzrgyhwjo8hwo9NPH6vj6ATNsk4uryVY4kEQ5dT51tD9YN",
  "key11": "3bDS7Yv23LBLaF1fTapJW6BA2s4PnCsAHdwNTy8RxUpjA62P7JRH97YaLQN3ewRGpHFNbcBn3UA4vB8b3ujYR7wS",
  "key12": "38hfWvZUYpw4ZSx1iNnLEdxfie2fBbXNHjkWELaS2qCt4Yt145kN9UtMEwkzXArjKDABTAycyZk5bf86ShbHEnC9",
  "key13": "3xTLVqut7iyAt8VeCAygZkAamivyFWXLYSvi7A6xnPHEgUVhPHButxuKWD8u9u7KJ9vBskgnAKAQSvC9kVEEeWty",
  "key14": "2jGf1xgL1hmS8jCSzKhRzPrs1YbnpNsNVS8nny3isKziRURCemmLboMfHQzTPQgfk1VU4N2ffwLw5mccQpAnhZz4",
  "key15": "5JoD9Bz61jiDjJceVLyjMCujtENpUTtPhHgaFSSngUpPdQEWe38vSf2xiv85CRRPtmndFyJ88bKmfyHB5X9d8aHU",
  "key16": "5qDtpoArx7tnSQAuBMBpch3b6YcrBUQtZzScvZKi79AGi33NTGwyTyTJFBxaV594LZ2RPv4MarwupmMBfdQ4QLEU",
  "key17": "hTLThp4U6v6wdtkrVZ3RnjiCgjsMqka93j8H5itVrrGnF9fUcVpjjgyxvziUk1CBaYeigoTEHPxoEcaAvYkb1Kb",
  "key18": "2JYHWQwjzGsNL2G3FaHBkYXSfzfK9iNhJDWLFwcQkFj4wwStRSCaGKmAQRZdg37kmfm5RE6LYgH5NquzjegTHEU6",
  "key19": "52GU8UVw5CaFgtPwGWxmJsuNWUK741jj54tM9h7jjxcSfjGpAi4xXooDtSQ7PwdruEThtMH1uzbtK2o1FRbjxuRw",
  "key20": "yav2WunheFeXt5Hu8kyhWZWaewgrVGtvppwEuDdFPAE3BRdpjzuY7piNvTePx6se2rkVSpk6TfvtWe6navj6ddX",
  "key21": "ercmLsbtcYmyTSYC569gwLx9wDaR7H74FFgszCQjTQnvY83LeXxVpk9mD1Bnn8NauMyLxnZKWLanFBqHze3Vy39",
  "key22": "kxfa2UabwqkjU7LCvTEmBaon8t9KvJ1AVovEC2dryCwy3nvk56a8FgFTvwEbsaWD1GSQTSzzuSFyjxCHArVEqrF",
  "key23": "4NVeyJFvdA3q5gZL9jxXF3FHC4pXvVi95hKbakTtVKFqwvDQs8rcmjYAMYRdc3Hj1HHRXKaz1yPu2LQaYGiFNjH9",
  "key24": "5GawDFDUM87SPzKNeiYXp2N4nStHhemx178EYLbLBWHFny786iZWx9ANQfeAZ25cHWkp6aSGLvnFVwGBP8PwcXAW",
  "key25": "48E5aQzKpeRmuBZGyys2342nTSujXzFDAGG9eT6oCKocsSsW2ap8kk4cbQPiKtJ1RVReuCYr4BfwTZT94huSdTQs",
  "key26": "5E7KEx8U1WasoXMWo4EyLwRX7xmV658QYx2HM4hRvPr6oJAXHRjWh1umP6QjSbSKoYzoJLMLQjx3tEm9LAgDpTmk",
  "key27": "4AufRBvBMYAUdTdCBZaUUwHoCnNAmoK3gfC5HgnWc1bnznfc7Yb6jQ6Z6qxEbzc5RSkY77PoVQHcCDUVxAqJPGSy",
  "key28": "45ADC1YKp1fcEnmGJM9uJshpfcVb7oCCYAd2qDRV8muFePJgos6d9Zs4mdbiAK2J1rBMU1d4oEWzfcuEab5iMexJ",
  "key29": "3EiFmkGTbFGZGNTMfN6n68bpaPp9vcyZXo6wESxFoWoXenrFCfXUXvCwpSxB5iPP7ZGqbj1eSRVodAsjcKYbrh2u",
  "key30": "LAKjpocZMHy6ypTG3H7Te3wkR7P8qE76Z87vk38cksrYMXd6t7ExHDhvsQXZZpdMtgSECCkSXMNEfCNyK5Ft51E",
  "key31": "8e2jfcA2VqyfhBQyUuaWn9iyQCN7tR8TtQunAJXpyqcEdR3TXbv68n5Z4QJUZjqBpDcqdCPVyn5foFvaZxwyUj1",
  "key32": "krxTBLZzjeqaWjQZpbQsqwVeKkLwQrQwq19HHYdE5WD4ug9h8X32147nuzjDCqTcr9hQHJox5jJpbBrpjModBAn",
  "key33": "6NqHSoDx1ZVdXdLtyJNZWjwuCRby3YGwQDaWkFCfzz1d6XMjEypHG6Fo8WhQrjdMpXKDssZHLszhwZYLQdVxF4w",
  "key34": "59ksEw8QG3ycCWedDTaHTH69rJnFDAcCq1BHALt3X8eZo2kcLaaEAAXZSCxcFJt9dGXHHDx31ewX1qdHt5LKAWPa",
  "key35": "4oyhRYvFTPBWtKwSMrabj4vm4qpVAUNXG83PHPrdaV6iPtPk7CQ15QLid3SjjuLQwDPMw7x5MfLhGtVtEWoJj6iH",
  "key36": "5GZBfsC3bdEghcgabwALpQHufiafohUfQuM68qTSm79YNDgqkca4jey9yJoskVmSCwEGYieoWDSqmop1kA64Srz9",
  "key37": "3UEJDMyHBkcX4bYSs6LasHfmk7n2tbPnzn7wqX2LDy7vU2YeE6Va6TurW8dYc9mc8sFLnpetAixffaxHboHumvkF",
  "key38": "5YUv1nEjxREGv7NTS6iwcFjvVqXufBQKEN76FqwMvqiycuUDJn1qZ2sruijKnVVNQoyLWv1HxgB1oZC2meiq19V2",
  "key39": "3Reqjg4TcDodoWfHH1j2r7XQBjjVRprMf331yjHUycYo6JjsZyEXQEEBTaBj3bUjJDRW7eC7iFAxsfkJCsnsAjTc",
  "key40": "2ppv7FAHLNCAxrdi1CGZghtw7a9FLPBJtNyRWxaPoWmGw4pydeVVKKoF1eGHjv8wfqaGNiTkpSA66Fv8Gpuykwib"
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
