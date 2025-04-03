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
    "5BPv3gsnstVMji9z1npEMjH32pyKLznAXuQq1t9QZpXqj5vhgvShkUN4cabap1KBGUY9257StbP1bZP3Dy39qRtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tmEwiKVW8VDm5htCzPukB8aznoeoBGSSxFfNMf56eRwT8qwZyPDULT6zeUZvnAbDCQyR2xoF1BPMF2HA4mxzfJs",
  "key1": "5Aom9ri7kAHFg9ZNhismKibucPKkCWg9xSXRYdabbSUReWaFNKeVWbN9XJjdcik3WESi6FAZpjBryrPpvymw26Z6",
  "key2": "3zNdLEH6BpvUqXLk752VdtB6mBD86hiryCUDgCrTN4fLXXwvsbMDYe1TC8uiob8LBGXNrwKyhmZVWGprYTMA2zij",
  "key3": "2SbkrWxzVLqAccUDLmiHghxU8DJACXX9gmFtuK6uvSeoJuDiLmcE4sxtV8VEarPFfd57SAXgsovFwERsWeu4evSV",
  "key4": "5Krb3L1R4bftveRthCBpTghzF5FhrNvBUmmHG3MLvg6EHQVD8bRoJi4r1KpFAUQYNBmbK1ZZgZbnWu1UBwkgpYkP",
  "key5": "4zofmHZNCGbaZ6P2CACL235FMqzBj7xjQdKCPx4EngzynAf5ZyjV5xoXrMCBxD9hegEpJkBii36Sgu6JDYTGqoAF",
  "key6": "3gaE3F5XvgezNHgRjvkTeQVSzKWyJEhSwdwndr5sdFj9TFGzFh89NLtphvbeKABsEEbZQJAXFLTcWy6YFvcv7kce",
  "key7": "4pDurWLzzG88c4H6BWB8D2pY4h3kFPQFo7hPKyKxmspBkCCQ4hwsFDResiWcJVKfP2vhYrXMukY5u4SDi9whqXkR",
  "key8": "2RBncfoaSCc5xwVBghFjs66diZYiRN3BNJkVPU17vyEVPoom55DDWgQ2yG8492uUaWursDQeFRrMbim2DjaCgDfS",
  "key9": "581As3dThxQt38W2KzdV5qHFz2LYxcYkU2mjChPL5vMEyJ2uWQSd9yJQ6H1AnaHkvW1CT4x36BeNvNjL1E5QMYJX",
  "key10": "A6q8E5pVEifAdKRBboCYYaZP5jbj9JCyVnLe5TcPBkz2KwjYMZAhB5CyV3Mj2yJXX9Ty3tKRmcoD2k6ErAVzqTH",
  "key11": "2JxmGNDpRmet94iKp4yaJ2FsckrA3KQWqYtAGaFW34zkyT4D6iBmFp8X9F6NdKPovLXpu5sDgBCYBst9xT3psz2c",
  "key12": "2qAvXpZSALEHZceuGS7Q3U11LJ18zm81B9v6pkxu1Z2VwhrYuobSwa7BWrW22LEniP9DWDczruqduDGJY3DWESxf",
  "key13": "4xnm6uyhDq8p2Lp8nD7ChbGSMecoKjqB2drRLnjnVZswYEqwXw1asVMqw9dB1vrQZ7mVsUVKni3e9Gupiac88hD3",
  "key14": "4vkbMSkX1LFzN8BbgouViu9sZbAKM6FMkEmjLh6dTMqjPDFwbh9Dk9Q3k1RuMt5qV1GEYr8vDcf2U5HNGdhVtPj4",
  "key15": "q74qRkkRnJiGoVCWnnnqNV5JNPevrQznSYmRX4367gTbKhb28yDMLrRTgPWUxgEyVH35CpPcrp7VLX9gSuoBkQf",
  "key16": "3tHMxbugx4FqnEFNAMxZR6xrG2rD7789wUj5PCAS3iqHo57FhBYbKgGzbJ4vXtLyGcKfCp2HKR1nnoSP7jY4voZu",
  "key17": "nXd9kFvdjP2vJrjCLXyPvKYU8ymH68WeEJvmoEh3kL26ze3m2coV5rFgrPtir3CczaX8gcL17ihf6Wu4j1Uqmom",
  "key18": "3Ab8ghLFE4br9RBiKfydFcpSdpJncmgarVCYz4WSADaHnisoK1hcBykd45xEmqpBX6kJMmq9uthca5oVkTfDtqoh",
  "key19": "5Y1Q83LcyMjxwVtd6yExfwCcw7dWC7vXsZcZvPaMy2k8ZPaxwkoCpsHmqZYbt1YmnBmbXPYEykK2bXNK12Hbfhrn",
  "key20": "2z8cqURGYbK78avzgCgEYGDKsf93ALXPYuF6ceMy86HoMLvfdZRzsV813wbs6rFicn1HJS7yzKRXAnJPxmVLPNXH",
  "key21": "5LsVSzSx38ce3VvXGkrLS3UAzN2sd1kK2h5LKVg4jWp6X8SH9hD2MnPMDoT3o5dsmts1g3VMKLPuz48nRrxVYura",
  "key22": "2J3aQQtVdfb7z4Fzacf4Xm3JmfZL1p5U2DYb7LusfpXU74NZf9kwvFkiGs2Tcpspf5Ee9B78z2VsMimdbFdEypoJ",
  "key23": "2ivYyxSWRPuGVBuwqjdUgrPwK9195zKtVxs8QVBErBzFmFgHaybpLbATHc7jCbDdUr9bikBGmEoXAz33RzDFnYF",
  "key24": "2HJJLrXC98YKMr1uGf9537V9xkdYGbqN7AAx6SBbt5636B3KMjda236exoSW4Tg52P8bKBiiJS4yryrC8erx4RdW",
  "key25": "3GhTiEnjjh6945S51p8AwMYHRPMWxokMNaHr4hXPmtrW2NHVKyPqweBSigELvrJJtomTiktQ2EkSK1gcYJUzQgLh",
  "key26": "3j5TBsEV9HHzQeBsdLrUrw1LWi6tANp2SRKyS9zCxiuqrn4498JXxdM7WmusDf4EbiDCsBW8PGzVbK8Y9UEDBcDw",
  "key27": "QtyeLhE9KJqZPdC7ZFtacfeBWQET2SJsm9hLvbpyRndAFi1VesgaAdKqCQ322Mws7xKmumJ36Xxc6ZPFpTGmU5W",
  "key28": "4TLCP7dDHq2yEjjhi1976AzVzo7sSg7vFknoiedRwzvcKYK5AkagBDoN1tXcuWGvWLywatFMLfXTEpvLVZ3atFru",
  "key29": "UERLLJ6kpwu27qKTahgeybA5RvT6CSKrvsGGh2SMgNMbeckTjMSGfc11aUCUBH5fQoTMgyU5XA1LqxE8PsdgbVu",
  "key30": "tvzkSo1pgpmHgXZj8wNhBdv6WdML4QWkPgaeCDvcufCdzWwXdWtZwAgmAswqRM2EEr3h2PciBSrnXo9zLg5N4Kh",
  "key31": "32SDtaYUzEKP8gjaiQ1dboHSznP7RsA4cqp5L6dL4NXdn9CmyMKegiq21umUAggjpa8DcCVoSnHRwQVQ6Vj6HhAS",
  "key32": "2ZC4hAdapfmoc396HuPAsJsZ4VAGrb9awMPnAGiCLDwrBWEiUShq4zLxTzGzT1AfhcnSmibKZPM2cHt8S3t2tSaf",
  "key33": "3HBs8txPs5BU41Qxfme7xvzH9qQUwTDUawT1mMxLkK1tdQiPr8H9vxWRMv9XNAz6v5oAHeJeiSw5LN52Vk23TG1d",
  "key34": "5EtXpEfBpbTjaFEQDSYsA6rXu52dvf3Qqm1XfBRxTJ4QZySrMaUvZBvngVcxW1ZyfVQ3xs82iMSHbMygCoT66Fy6",
  "key35": "2kUYDrnWuPVcA7mb4U1hqRyUtfN2J8SNb7ikuH4FR3NbNmNnnJYfH7ekb5DdZ4VKwnmWPYY28ERtCKooJYQjRHbQ",
  "key36": "3yGy4Z7tESqaezZsHYSYpiwyyn9QWjyiuY5GTXsnGuNaQdNzfF6k678YXj2qm4M2DwHNjbYLaMrdzY75sarN99Gx",
  "key37": "4Esrs9DYfdxWdBYjjpWfisjMtreoEfvMfuJv9VcykkNRcDcwupTsUbH6cHmfWQGRCPczYRJ8iPNPMJJJXex5isTv",
  "key38": "21Vde8LPSgUE8NjRbk6iyXvcBzm1TPHubYddAcmP6uBnGCNxSYJ9D7dmjnbTTo4MJc5Ri5WYRReVDu5XYyyf8QUS",
  "key39": "8Ku6NTB4rRoN1fT2iLthwKjmLpvc9ChTHDa8RNkm1ghZdLN19y4aAPQ1obq5uKLhy3R4PTFoDugWtRd3jyujjXy",
  "key40": "66jPVTo81zJi5y2N3XZchFNBbycd9Ly7wT6hik9qzQEGgSVybuRZNFUAYfe2cjYRnZJ1VE7iZiCyegPuP9uaSTsC",
  "key41": "kYPnd2kA5mckiohhpAhMgwgReTU3QoDafyQgA2CfNDacEcdwWDxbwRfHLBqVYNWtQKdhWVtr7EArsvpt2Hr9zvn",
  "key42": "4qFbf2DKBq9uvC5GxmxDV3a2RSW5nhehbUG7xTcjwbTUiDbnFvpS8ybTheVnkgta7yoPBga6DMzLvfNLNTRGE4eE",
  "key43": "yLHhZyjfM2K6EbTdfM99nDLD9fy4TvTK1umgNdAdtqLEdYx6xh9nuk9igxsqcCZmUpApQnxXGmmtHv2k6cABSbY",
  "key44": "5o3pit7YGswmREnC3A5hd2YcmTgtrYt8LXsgWWrMEpJtHq2XjBQ9T1nAxDfQ8PYJ4pvkfgPaq8bViyxAf2cTgTLY",
  "key45": "3zyJioTavYtfgJhP6R46oUsH6euweJTAx2TQggHVBS8dvdvnqap7wM8N4bDeDH67oJGiDEJRVHGKRXaHU9V3fTYJ",
  "key46": "2oz9BSa77VqaMDVp6EDTfK24JuWDaHMhD1MRCbKN6jmVPJ44XNnDkoFxvykYVcRgB5GmvgQviKj7bTf98FqnT8dq",
  "key47": "5dUbQFvmNSaGhUXNK8htUBB19RCDp5MAaTspBNRWAn3nPv4DUi6EqQkKaVqB6hUAg813jWaYSvqB1qpzxvtncC6v"
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
