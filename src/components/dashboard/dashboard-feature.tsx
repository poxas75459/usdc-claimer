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
    "5G3Yi4yQUtc44PXYkwFT3BDFiF61W5eDbYbK72336oCd2MqLkD2cX5R3zdvScdYWZxq2PFrFr4BdTywNU6CuQd75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tw6CL3Aik6moinn9W8m3cBMKmPmT1in5NBGFDfLmxfUBpqBwWswP3UpdRgGTZEEeybRXNsioXDLnnoYxgdaXY9Q",
  "key1": "7gXKyv8VCrpGQbRrhUxWjQpPqZnPpTK72xmFsMpkQvyPh9QDHz84UsZpZkGekcqe29tDnXWtZxfFEZA1Zhpence",
  "key2": "2TPxamMttc8gE1pnc8yXZLdVC9XnXwKDS7Uk8Ncr26ms1BS56v3N1U14mM1ECk9LrbErMrKrDXuoDGcg1SoLFNCW",
  "key3": "4kB6rxb7py2F7SRwipKPby2uBPmwAJmERHSrQNYnEAH6fND8tPqKJhKoSSXyabP8CGosWjGVqkneb9CvNLrHhfix",
  "key4": "4MDh4dCAoLjw74xUo7cJc4SofcHEwFpDKPEaVCz7gqYyA66rvDDNjteSaQJL94grjWpqFZsYnVm99UoTtyyubNTp",
  "key5": "2hwVBAgpkKg5MccHWey1dTqvbxtx8NkFBj5papvzK3LvLRVvKVqheAiGfzhW1FA6D5MgyLVitWHLCEWAxPnqBm1w",
  "key6": "3PqRGHmQx9Hrur7AXGyEd9LUvrMb5yaj7vck5N62DuCwC3swVCWTVaFFUuWoYpmYKudpjqPLuwXN94s8Y3XzhXMf",
  "key7": "318MrKmFkv1ABVMMJUYDw2fU86rwi2R585wURdNipHvTwwA6i32SqeBubvBw1SLgXAbaCm5fR4aWHahGxyWbiKE1",
  "key8": "3wntKuWQQo3p8xCM5dCA6mA8Whao2zPai3DDDyZpdnJ83pLzcqGAWoPnmLXu8GJWA9hwVYf3M5fVAhrvdg6JiaiT",
  "key9": "R1KY63xgKdwk2H8ZMsGTyMg3LoyQnnmbhPCiCbeXQy7bfK8stsYSGRkhFnNc5Gtm2pUCkF9uB9iAQMA7Z69J686",
  "key10": "5oM6u1EfHFPf8CcUNGfaVHdoe51X7DWBNF9RyKMaX9EwnLRjLrPTeyztyQk1R5chPwSQ1rwALwokx28KvBGnB3vv",
  "key11": "4tiJeNRD6dLbD3PkG4jovtug3jXunxcrDR1oLpF8E5G3nJYibnMoo7FVWMKYyHPPtdkrLafy8vokvrv8Rkw7m9Sx",
  "key12": "4hUHf5SSrTNTU3erQwMtaskbPJ6WLSgZJq3Hy87KYnwFPUh8AjW1wN5La6BXwnJimuPV7QdpvhgEcYjQvXT9iK5q",
  "key13": "61xKg1DwvXiNnLvzQoKgxfv9X9NxRyQBWizZb7j85REZRZANM8cRBp63ZJ4zJQPUjoxJsKVSAieQE7Joa34jySbn",
  "key14": "2XRxq2sQPkS7TXDpL561M6LXVwSe66gDRffBEVgxGXbDWrzntUWHrfxgUEAKD2Ai78bgkdUWgaKpxKZT4cMthnfJ",
  "key15": "41qQTojZ8kXGddbYEuKEU6yzbCX5WnDffLey1NXTnvxP1AKXs1JZYH25T3gsxwyURqyZDCjZ9QC5Jfku9CG9q7Z5",
  "key16": "djyHcikRMQ6rZbUGW9mpBhFcSNxA2kw72yqxooWJYUzKM4rpxd6fWoV1YzAMt2t5pUBLKbEz53LpMAh4H7eqKrQ",
  "key17": "5FBxet3qQ2Tp45wzYCExAb2BRVeFMp1YWwCQH3ATrg4XBMMVdDFcXyA2CyF7PJCVg1JpU2PRa2pi8CivzqktwjMf",
  "key18": "2bSZvgY2CexLapqx2rpQmFQWVmbRtExcM7f6WUwqSVvZvwbdtmsjmGMoeG26AzT7fVprSLpkjkqc7izgi4c6qDsk",
  "key19": "5QY8x2tYVLXzNxTFtSKYiCnhrDD2BWzkCpE9uTkJVaHbQ5qjEUEark1bdRjVxMxxE4RQ4B1HEJRB83CPLhTWAdiu",
  "key20": "3VHVYHxfAifXAxQpm4XuA2tpYNRniGRodnXRkMC9nTHZnew74tDUD3SGPCKqUNZ5GRL1qruLs9AAKxiyTxPhNaY",
  "key21": "4QWjtH4MM4NvqxhNxxLze53Sbs2d3WYBuoQ4xcZBgE3V6Ddx8u6T4LEqBxxWM9ieLLHHVoeWfKpYKFZPF5KT1eJ9",
  "key22": "ygj6XeW1vQuWXRgHhUZcTwoniFr4jEQFdxc5arRf7XFRkQhD5idnmXASJMrCyD9UnSGe6919G9mHVhbDJBBi7nh",
  "key23": "krQExVRuw4ceaB9jtqvmpYFdesmgkB5Mfa5qZCyfGdPbVknoKo9xSHpi4KyEuWHQZmD7USyQGqkn2HxSzUkKya5",
  "key24": "5mkooD3mhqyjTKFFNyv14A661ZP5JrnJx1BWqaewBv1sKPEKF2hTJvjwtYNNPZxsWRdzg2QvntQtK3JQfdKi31Tb",
  "key25": "42m8Y3yCyvriRqybHbjKmZr26CTXNn54myL7iDaGfUm2b8cHuQLAbx661z6XBU5CFB74KafbR6hM3xQ5Ha1Bu5xo",
  "key26": "3okRcCZ8TfeiecM5EyN5StcertvttACvED9xLYGZJQCqgucwmh185hgtk8PwqEufnHvPYbzsdcdk3a2VKCXZoMnA",
  "key27": "jeywRLTDb8BoZKg47j2gjdEFPKjomejJYkAfARWQ7TX578A3Fx5nAV4J4FH4p4szWDb2SwagZJQ8fcWvbTTojug",
  "key28": "97NrfCSgUirM3Bqi3XXsCC5zqqa8vW5fvakne2Sa8PtxHAmxtezHZ2foTsog5WwZCNb6wATMMYBK3pacQ1G7Xs3",
  "key29": "5Rv3TzJX2K6ThU1gTcrnjnNcGUJFxq5LwcY82ERD8936PtLBuXckawnoo1YScR2yULtgcJArSrkEeiQV7UKZV7f3",
  "key30": "52VqzgKGGKeUttCXypTTWhBaSGQD298tTeayc3PFXBLHLftHSMH61svDM4D73nTXjSxCCjqQxy5m8B9PxauPKyeQ",
  "key31": "4TCG91X7TsW2jd5FQ2LvihUPkUWaY2sAN2ksYvRKXd7bTXFFy4HQBLafWXEfsTrE8YepY8NKb4tzcENd5WJfFqjw",
  "key32": "3cgJ9pnNnqSwRJHf4JSr8Nb1UoV7dd4dedNhykHUSf76FMnQSWst68eG2XC1WhQrCefQeSomr22oaovzamcKrXmL",
  "key33": "o2ezkmfcjGQPEKx4c484PhiWeKrgPPhDp5fGn1qy8KpeG6fgYg7TSgmMz8gg8iuMP26sWKkQMLT7SHAqKzg2csy",
  "key34": "3Wh2bi9afpXtSz2HVvSUehCxgTb73amqyTE55AM6LGtuadbTf6PinE4AnTxuC5EL38aKHY2sgLCkQWPhvvi2hpvR",
  "key35": "a5eAxxznsP4wAAEQZjLddJHve2f48pD5QfAVqBUuGKT9YgpwxJRYkoeJrCoxD4B62jMDJQhofXEREMdiUSVsnHK",
  "key36": "t8MNGXBZSyPKJgzCHzMFLEmRtcpE1avigBU6ReyH57KvdSiSqZuGCzdn3PAEi9P85XEL3MMbUY9nYS1xREhGvdU"
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
