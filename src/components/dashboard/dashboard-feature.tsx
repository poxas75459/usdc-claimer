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
    "5intXtTrZCRHie3y26rMk5vtFLmGP4VFPCJmFsrZwdFJyMLsp5tMnpAVLjNTnzVy8Xj5S3YzaQhyFNkDLYQ8KQBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GAt3hb2wD8PESFaw1T5nuKQDrBoz29ePhRc3edxEfDVNEep8hYgs92SSFPd4z7naf9K5KiT86Pc6T1KbpBdSpyg",
  "key1": "4ju3Xq9nfk7344hk2TVExZe7XMmDCHZG4GuQUbfQs9TsqoxdYv31Xk2ur8cWnoi8ibNgqP5HsAePQ9QybEc7FKqQ",
  "key2": "55yUuCemYCa1HdszHGZgP73DfJFeTmnCiTU4HoAppyBE3zXULP4HWLZXGehiWKB8vCNoWzUTFV5babniXhMUtdE9",
  "key3": "3V8y95h5PHGunAfiVz2VdCc7wbr9EfMQrKQXo2DHAxJ4AH4NYNtyQ3tgs713ySUupCER887FvRkSCoqjxqThowmk",
  "key4": "3JSL6yNCJwUeWHCSkHizxqu8ShEYyoxMv8cEdh5ZPoawpdgg6t2rovKNpMQ4wxggUmySr4LHUUnBUMxYfiYD41Mp",
  "key5": "2wxVsyq7FLdR9VGqMi3bbuNc3GkgYkMd2oYcPjHTNAYK1YASQagBeta9STHKL98EG1dB4swawR7rL8a6zBmA1pLv",
  "key6": "3emxoTj9WaGPH8Td3MzoxaR3Lxo8qjRe6JkbWCJVyEvJnyZxZHhUS11PBEDPkWjxZuWwrX6SUcAtx6n9PM2RkeZc",
  "key7": "2fN71ne6n9XoQE6zdAUs6sSeJDJToBdaSLYweTTUQRCoA8LjQ5Dt5W5QvpfzjSdwKeybCSUBDcLCguv4L9HD2CLE",
  "key8": "5dA6mJsutRudu2tQdAcLV1jVJYcoRzxJvQuwgtKRonGGnYNbo8BFmJGqdXBhPqm3LKPLaTzPTLUemioc4ujMbres",
  "key9": "5EnuPJC7PkQq1seKgrWkLr1o1aj4voaVZ1q7E9BfD1JKzEggbEtkQ78URHY3EqN7fvpNNbxMM2u7hMaam9rzQKGU",
  "key10": "5Ui4kESHyVPBk2oFcSFBo2kYd5SCHKvsc7u2KmqasXKraJzRQw7pLbNvvzYe8scMLahr5x1rmnB89a7Du5cLU3Xv",
  "key11": "3L1TqRTfGHYa4QSJE8Vk6ehejHvgSwScTiF1kKxkr3PvWCoHinuTb5qAcSZABftd8rGDtr528uoYZn2ziDv1MYKw",
  "key12": "2JmCRAe6trXHkYyMov5FtugfJQopeRuLheEKj9uMae15ZvpKZPPEYSe4WcmvNbEphMH6EP4WbVbvMEzwfBnXsR6E",
  "key13": "5nGf6J9a56JXtoWVFUroodcHe2V5ZiitCd9qLFcuKWt9FT5vnqWudm8Jjwzhg6NZrNBchDgm8CGuUNYn7DLU1wsj",
  "key14": "3mZRj8ESzYTPgns2t1DJVUNQiyRsQjqamH4TWBpYGp1tEQtSGbkeji1q6DjkMEzpaZCLegf49yTqsHyBAmFytD98",
  "key15": "4oKHz37cea99jNtMiXrykJiyUh2bCQ5aMfwxRQu8rhCK4HKdSa34aVbMq4Nnss5s6btHqVXLSiQ7cTa3oncZZYXh",
  "key16": "2joqHmC7Ptg3zCQPCqEpa48kuU4dhRHoiCpvZ6ttdnMDkq6DzJ9bTxfADRZH2MLTrfXN6Gcmji3YMUk8TPVzW6pJ",
  "key17": "4KsteJ4w1mZSfDS8XfbFT2syoEtiyWVtiGNufhRYFQcAd5K6zFn9aTeg54bNmjFVb723RXnLFqWMjWcMJhR9uAGA",
  "key18": "39gUhMeHNXUgpuZP7n4nDxNvqji9ZwT1kvUuDbM6npWx4rgAmYN8YjB4y4saBwRLG8iB4985sPXj7dLAtCdb94dU",
  "key19": "5DJ39BSpGAMqpVLiKYVvprA7DugS2raEievv756ZeenFAWvtLCMwCHTgQob4rCMHFrxA6VU9L9nKZFkAftuuwcy3",
  "key20": "3JzGQbb6xoD8ZV3yrND5BGEeMiKaRZhGbHwx6fBR16hJDCXB1tRTeDF8eRmUKTrVrFsG5dJhFSeZmPEgHaJG7fsD",
  "key21": "3n2ExqUPwQV8JAd4c6PSMhkmk9R51CSTtGpXXJytkUbmiuFLDdrkMQouBt1g6XCNJCrzSYDw9UWrzy2vFgfUVa8j",
  "key22": "3SBXvS5ht19NicovAZDVZLgh4YbmLXgNLcwMYredLkUg1WzmD28qKfnycyV46dLSqc213FTFpb2p1sy32HE6XtNy",
  "key23": "242rHX9oQKqwYKBxn8PWrFuSNGeBv9XuYQv2qgsyCyo6ezEKRvHV7aZg8YxhCUHMVvvT27bkWHBNZvmcVWTfs4t5",
  "key24": "M7XR8xwwmNmHiEDxX4A7WMzs1YvAgdthDXnrqTPHLqofFcsJ2H3rPKv8Jtw957xkRyZkEsqvPVtZcwjVA1DYuhM",
  "key25": "5VR6kyqsWU3T1Yrmnw154vLByHcbsAemQaAkhT58EKMocMSq1qKJAXiAS5xwinJUMxJGdNXcEvGd2CaEXq9xN4rn",
  "key26": "62pazxeaBrQoe52n2CcHRzf55ctE7Aa9KyE4dysaZ4Tqg29BjMLfz6YWeLz2uv78ZDkWnJAZnSV2Mg9wMXXXi3im",
  "key27": "62haXNnbzAXFHMgMYMvQ2kpdXkdF3vKehY7cDwwHnRRXgtbgP6QhWCHSxur2fUfhf8xBsB4kVQNNkvnPbcW3CKDw",
  "key28": "42zwdhdn7ZVoF1kDHvDP162XUbBnfuA418k3ThPzqQY6SmnQXSe2XZFyu7DtQ7mqJxLo5Unb3AhTvbfBGguQwFxk",
  "key29": "5eGkF8HGAU7mVN35TRfVoYjAjNUbtB5ciFmLVcAFmm3AsYnwqGUz7tEPyV98RDibgB5dwGqyUSG8z4kBCq2CfbUT",
  "key30": "4LiueY8SZT9K9YqnXSL17qVXSN5N58RMPmnna3pEZC9EDu7TD6QUcm1XvMGepS83Nv7bECM5sXrtZgZUC1zBwTpk",
  "key31": "214KLcp2kQMcc88zzfoVBrjkC4ts8zCmnBzaBv4WkFTfpqqXkpeQEuSu4CZ3VvSfq3R6oH1C6BtscpJqwza2BNvu",
  "key32": "2PLR8f5WtJnjsqf8N7Ycyv7dRitkAK6sBBDSQfhSHmd7AwTZCiZa5R9fzsXLPtfapmhFQcpzDCUYudEPyoSXCrGM",
  "key33": "5RewAAdCsWs36dUAjbtkcbuyMMzQL2VWdqg1ABHGBLKNQkKsfAh8RpKa4WGdYJQzNz7awBu2aMyQe2XgAFF6AAj2",
  "key34": "5t9ZNoHD5Usm44zWK2gg3ob6UmKiqpoPnKx2yt1vQVELLEEMfhSHPbbad9pZKVhRq6L8fJY3RTKBkwP6xyXii2w3",
  "key35": "2pSax37qC76vVTg7WUuqBtvMisLUwDGq6qy11beir5QWhhu3MFLf2zUk7eYT3htMPstJfGusrxzps1snX3KirYSo"
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
