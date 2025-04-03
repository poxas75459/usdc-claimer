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
    "2DtPFX5HRT3vfB27hQscuwcJU4CEs1W25Pxuas4n948yx2xPfwvrpLtFxnS4iyhdLMdFJabtXU1nWuF5YtLHRFVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgxRmBFPgaSnBgsA7YkDybCvQBQME9GD21GFRsVeD4WcLkuGHnshgsNkLdtfJRmC8p34HtWYdsPQNCXYUp1bVnR",
  "key1": "bWE288ZxerKwGEWw8t8UNsG391he8GES45HWiqXRpyfLXQq1bWz6Trus9fjkbGn4DPfsxh5tkTxKec6AhL66o3x",
  "key2": "2RLpgdbVnyCqt75cbi7zBvaWg6kSSZYWJYFgSLvT2rse97aX6UJhfRsGSk5iZfQ24LbnUvzToKQjZLt6pNia5KvX",
  "key3": "4XAPWKyBE7hcAGT6Tyik4dLXuuDY6pdWsH4QYSB1rxRXgYc8mMvCDDXhGaBX7qDCEUNQodnrPDwY27ZyadzaAkjE",
  "key4": "4mBUxYNPHhV4PH897KqPYid7g1cy45JX3WLQcN3RbV5UNUVbB7NHNukxhs1cjDhUw6iMyzTPaNMxMBrWQMuVEsXP",
  "key5": "AiVMNxW6JKhXgup9SdoBuDJ77YSFpdqW5gwMNqhB1oVGVcCnUnSxtWodqoe9QGbA13BGAXACqySBPWRjadA77PH",
  "key6": "4DbEG7ekDP78uK8PQj5U1TYJNUUH7ZEnkQMTbxDqXr8YxddVa44WsD13TfwAC7odcQgux5zTqJa85Vn8sB7eP3Rw",
  "key7": "3tRHwypg4T85VsqsHUAqXWcrxx9VZeCncmXe39VtGfr2zFMfwqrXrGtnhp65FGsHCVaYHHEQyta7QCJUMGQRpy37",
  "key8": "EXc3XXcNombDziy9Nma3Q2CeysWSMCdttWyHyub3fYMGRLLjpmb1bNiygv1wUWjKB5wPP6PNnz9btJxCaS8pf7S",
  "key9": "3ZdcP315XWQXsKoCPhvntVjmbLzLQ7yHTquwaA9cBHWzmDLrSxebi8FXhPBQeZ9QUYa4rUcWuAxCY2nnsT1qzkD9",
  "key10": "3m3M2DZNMtjfDpTYEKvZNboqKuTpW7CbvPdajrZBdXV3qGMUci8Fak2nkTJ4WmaUUUbZ6tWg39GRnk7TxdMPC9Dq",
  "key11": "5tmGf6UTbZox7K4zS62X55bgrEjMAcskSRKGcXCoWBPZUpfe1gTnfcqDCgsv2Y4vpVmSe3GLoUnWGxHGZurYYeVe",
  "key12": "3CtdNouxLkeegGHCTuDQPVzhg93g1UTAt5sgzyQ478kc7Pc6HHJRgBQKqTPsmkfc2a3f6Sz8AtU4SbGgun45zbjd",
  "key13": "yYZsCLG6uXVnk3YhSjxW2p8tU62jAiqgTQSioAtFB1MT1hEmTCkhEjmSAf7oit3CEptm4MmWmcVyki2LRvDoJPM",
  "key14": "RTpLQ5sjmNhH8aG7kJsxkPLyZQ6G9TdnJdoxCaS1y6vson7prJGmhvfkTc24ieixBeioV16XQ1qoGkju7onXLVR",
  "key15": "3aDkBi2oEou1Vv9twYLKBU3KeKmTPNCPjFCs8eY2Ka2uzhs8Xt16pQ3iaiodn7WEFVM1ziMTXLcKuscGyuH4vKw7",
  "key16": "4eJZRMTC7qbqcx9xJb2HFqGn9vASyyyHtyyWaLr3h1z2dAvXqZ29eFFR2mqPhtbPyy7jV4TejSHxavQm1aLt7xF6",
  "key17": "3kCuScbZA2rpkAhtoVh6mXy9XZYiuAUe5FtawYTqRQSKGxnDyzi5quW4uBzz29w3nh3eYKTBpV2HbimUUejaD8sd",
  "key18": "5YRcTZi96Ex82V2MVCuiv6nY7ShHhbVCDHTFPjXqeDCQg6cMuEuS6CaRtJBHMEnUiZo53c3txMJTwLQBd1HtQiWA",
  "key19": "UhdtzqZ2PeJtQYGaUg9tHEEM81GVEj2yyPzcwZDThrEPVY8Az8CGdm5ELdXLieFjTkmQ5hxGPPcFoydUhWrrxrr",
  "key20": "NqoxzfJ4y4KPiDAoTkKtSxWmpM8f2qrn8p6VkhadQyE5kt55UPQZGkV1w1dXYb9NKM78FKBSCL4qZqASYBLVGaV",
  "key21": "4hbhMoV4kv89AWUnTBXQf7Bbz9yyQNJtq1QRogu6cu9cCr6f2igyChnW6obY1KdkdnGBAvxdhUZh5mhGj1Wn2ERs",
  "key22": "2Ksmy5sy4yJdcbDGV6SLKVYdSgp9i51p7PhdkxrDhnwpuKrKsFLMdPjVTUafQPxxJGYK97fXrx1iMgYHAitbjfti",
  "key23": "5iSP4DzCiv367UTvCa8z5KPpa8rX7Y7Uet5C9pyoGkD3RcWCNEfzXAa6qB2X9CnEHWU97B6XjQfAXuXytCGokbFo",
  "key24": "3smZCF3xR2KipkVre4nuayQuFfj2m6fsLvBb2BkSrPujBnVAyM252Cq1e4qvS5HWUr4u5D8wMKiXZSCa2ZQHjVzA",
  "key25": "21jTWkUZj1KvhjZKHEseLSvn5yjifxVpqQCthUWGYrFaLFnMGQHAow8fp6tZ9Hfmd8WXKdMoKb7NRDDVhN9aNGBT",
  "key26": "49NCqQpntmsxBAtrSZNomxFFoN4NGahhHSG58CHy3Qw5dPTHusUZeNJktpM83SRJ7bqgVCY7hWzVVhZSx3RdDSJw",
  "key27": "52v37fer6HXznmB4mKtVtyAMsMHsmuNykzv4sn4YGAF5dU6adSkTL2HTBF4AGBLLTdJg7WfZQJ38DcYKTDouoVSt",
  "key28": "44HmEMgZz5cDKQxBMKSWhkF1xfkF6XFsvgPeLpxFzXSgzuXM38Jd63yVRe7wVVf7s34DG3vdGvTJdMVii2GPYu3J",
  "key29": "3puvWeC1evzYFGL4D8CPsyoqYnxELRwy5E8u691t2mbQK2vsU6JETohyEtk2b1agx3FMRgTneoTikjpu8WggKS14",
  "key30": "2zTcxvTkDWqvqmYDYw4oCsJHxedA4mVakiGdr6o6jZ8DDCCnb4pykqG7xFULMTqebAwr4kHpnp3tShGPzBaQJSWo",
  "key31": "5t5TG1LMsWRHGEKDnks8Bvp3HHjbK6XaW9d4NNcCfQingr8JHzfhZSX7CNsT88K7tDmUhNvYRXazGtG1AKfSyfsS",
  "key32": "2DY3jWtG1avrfq7sPpvCD15NXdSwNNTT71ioJYmwuszXfHu23Hgd3P3Ui4uUCaq1mimVcxTgSmpNxd18QRuP2wfq",
  "key33": "g3PPCFq27wjqrATMpBmBSjnKqXvUtQpdYxD7x7RXERjfHCiuBq6taNCwztFnmuuHDASJok8AeS3H3z7sNs3FjEs"
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
