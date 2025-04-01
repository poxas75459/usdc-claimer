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
    "64kUxa3hAjcobZitY9vG849mP2eMcH9UXqHN2eNk4nz6W6hQJpJc1RwGEijr76hwFQHyTwGGQBCRvvLeSVg7Kd3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CM2AVLm22afmkNUwgBigyk3R3o8434NmfvWJPeZtAzH5DXp7FQabhN76mX4ppg7o4Kx4EukRpR8xFsHsQD1Qybc",
  "key1": "5WAHsyZQznAu33UPAEQrS7Xchzj1DG8qysnHEKSMHo9uRXr8aABm67SqwxcwZHu9mX8BVGzn5kZSZZZ2NL7PNgFQ",
  "key2": "KWaiom93K4FTcbKsqgeiHTSnTJeesuvmmgMMody9aZW65XUpnBmTtXxY3GvgWzCbKpVg9mAvDN25FeGwpX4sb5G",
  "key3": "5iiVwEQsxjG9hKmSAEj6KmDxameKVRpw4DxpCaBfYs4hztM5h6kAjX9Vf7axJpUaMgmdN4EgjTF5PpbdjQqRU7QD",
  "key4": "4qHDQhSUkxNMsahZ7tsd9hrSGLPcg6KHYxoHNjHEF5iiQdtuU59Rn2E4P2TH21LmusYeMqKcDxcCsod2W7PPjBHy",
  "key5": "5uYDRi4YGjnUqV3NYrQPcdbc6Bc51NKjFy9mw5kshs7d75TjchMibuWFN5P3MRzrrmPYmQPdvKfCknTGBwnCoYJg",
  "key6": "4cPFp6dfzZuab6wn6KTd8KdkLybDjMaWRsjr2QCoCJrNNtv6o6yvETbTmf6y8NcZbhDGLu9WaHHyDCBnadfdTR9e",
  "key7": "ghLLipDRJk73w7J6M1d8Z3Xbo5kujZH9KteUFepHspZPe4prA7osSnJqvU7Vfb2SojLKghdwgTzZw7gJNerjdaa",
  "key8": "3jwtkesxfYWT13CLjrYXK1QvDseoDJ8L8cefMp2xbTCXrdTp6x7i4LTuwPXrH2TLNnh7ifDn69ANdAxJ1BYXLLCg",
  "key9": "4itVRFwvih2nLhQDMFsAhpHdhRigupiYzESNQd6t3R3yxZ4XJpNVvVVWoZxTufnm6TM2yst1uRp5akpf6voAUzAX",
  "key10": "y1Bp4Dw62aNczdVAT6VspBfqef3GBwVjjxtw4a7txGWpohZDGX9bi6m3baHp4LccTtReAdC46wpf9qCTDMGHdR5",
  "key11": "5enRRtcKaMw7bRpbw8EKFoPxor5dTAo4XvkfN4no2AYCQMTduDoHPvmJ1bma7bLRFP4Yqi3Qrc79XsQmhqqB9Wdx",
  "key12": "2yYva2akzn4TgmvueRpzACQebNcD4CSURFykpc9MPbzjpbN8Tyz8cyMHuGMD3eh32oDeZRWXc3GAo6NEaQmGfBHa",
  "key13": "37sNS9ZPEZuvxuYdux3kpXQjNVuFm4iBM53VMicV6YoCMgwc2WgZVzSQi2tLqMd1me94S669rLdo8T8GTvE6UPoX",
  "key14": "4S5qSHFqEa4S1nM6s98tPbJx6FpRqAYcWTK9mj448YLbr8JShz1B7cH2XUSQ8qEYp5mM4aFdHXGATHUK9RVNbr14",
  "key15": "5BDNjvD6BnkPBMSRU2AxELmcqjBzCq16CnwFkxDFXMqETYrTiryN3b5j3W5BrDdS6H2w9hWNRAkNVqjX5ThRVfdB",
  "key16": "w4mWYUp7T9Fv8vVkip7imHFp7ivMkU8FaWLWd4ZypTmWdn3YU8E7v2y3rngf1e973er2VKXFnB3RdK62Dt6pw8a",
  "key17": "chKLtPRnUymiPvCgsYUwyg9jLuKzuYhYm9rMyVCHpQkXTi7D6pKjnmSufV1YiATAPPeSd1RWxdsLfQA1YemengT",
  "key18": "2Z8QVMyFCBJDZQswFZkcjGLCuuvwYdqYiR9ERuZqvstMhfPw4zN2NGEtfXYoEyhTFXH1Hq7nTyLE9aUYYacCdQQp",
  "key19": "2ECsbMjAkroHXoVcpmzi6bJTP8ftrLuBtboR67RFxRiD68XCJLt8Sgn9pkKVa15WrqgyncxWzxH8gjsJAg1NLJwM",
  "key20": "ewrBiEaJ2w35j4zNkbvJyi9eJg7ay6QLzCNJt4ysE7BuAsKt4vpxRRKoL7VhVAFL9p5APVu8QofNLzfUk3fhZgh",
  "key21": "5oVfhdzeEBVAqby1a6xuNfqycFLeeMeYEGjGjmwaBv2tVCqvcWFs24btzyY3AbqPRRGdrfkvApTTWbbCU1y8y7n5",
  "key22": "2eV8gA664RF66CSEUWS2s9EhGA8ejkTEJwnXrvjJ4DfYdHXm5UvTy8PMHtQnfkDBMDYf9iDAGGoUnon1JxmrUfvF",
  "key23": "5LvpCTWydkTiP3f99MXVNF1ropkraLy1QGLNNz4cEx2F1gF1yy4LkEjw24akh7xgQ5EUgMVBFsjFewQrEQAbDoDR",
  "key24": "2Y8sJ9GLnxXjL5NAi98K97hSfFUSaWFyNKyZ7n4ASgYGq7ZULjwSovUYEr8UBDzoUgtAwUMosKCBZDfWUXVyXHLg",
  "key25": "DPncPZHAfQUQujJNPyjxnMvF4bBMJu2mNoaANmq4DfpqWhqBWbB7MohGvxsoGhxxbrVD2Ara3sijAtQjkvenfGL",
  "key26": "2HoAHfhgiJ17MrBwatXhNxvcgiLZwYNqAVMHewKyS1vGN7xjqFf68bNksGceVhQVq9wjX3Te9GbrjdqQkyPHje4w",
  "key27": "5KAipk5P2LLLMcVmUfURLVD425cZEwQtYL1JVoNJnfPTbkY5d8odDain6jFhnoKRBnmwFF2BqQoNS9baYgXnfKvT",
  "key28": "5aWonPw9AX9PDQoH3SqrNjdMtGMFLqKLmzpp3JajGRkCDdjZNUggr5uy5ULrHiEuCcypy6hHEYXcTVtNEi1URRPu",
  "key29": "3UM4npQxy5JEhie71mzNeNVV5kDqbTmMwrThXucr5FDhHW4oVj3V2dv37z11PjKt7ynzdEDUDx81oASpGpY4jmq7",
  "key30": "2x8Xa34gtLv4ASet3eEBtJD91Q7tHCYodQZ73QKRfXU8WcyuU74t8TAomKF3WRG3p8d6GcwPkTGdAvuEMymUKpdJ",
  "key31": "5ebKEZtYpTYveNqedocTzzbNBijdqyg7qAjToRL6CwmkQSPKqqfGjmDMMym9LvC5ELWGVZsGHjcdBoqCCNQBat5e",
  "key32": "3UMwmeCUD4ipgWseU5RNHsURZZhMGBjwAHfYWw6mPc2c2yEGd1CXiM3U6vNSvaZYWjhQFuTbi2GiG5g7KX4thSDW",
  "key33": "oBDBjeMcjCQLrypduUieGF3mGZHPcXtu6kFQn6ettfoFL8477VRMgkXvmHMeeKNWLNFHSGN35CS7wUPfLqaUMZM",
  "key34": "5f2Tjk6pAoHvf1bTP6F5UegCejxPqFg47EMXjUCRTPzxdAsYTxoWnDJS3U5k4zxAsDyufHT3yz8CQdegSikZJMuh",
  "key35": "2QxVTUFZPrqwKhbeasFU5wCBx5aFsLN6gpBBpcSXL9jp5aSjyy4GAN7XAi7ruxMz64tuWZn2Cv5zH1Q7Shgaz5Mc",
  "key36": "5AhLiC1waGP3L5ccLPxDUcEiZvMDnd78SZpaV6qcvKWpFGeuwEiE6Wja4gfHfWs6Wt7KnPYrHoUm5HUM8FCZQBec",
  "key37": "2WTBapZWX2egNyKKbg3pGwrKEnSW5oZaavLH87K8GgSVgYCcqH6V54ecpcBaNVoSPLeLghUHjWQZLk3tXtzoaPhL",
  "key38": "589tdrZVTdMRw1nkYLXiSR9nTRcE6RAfZr2msSKvj39HVHRRkXqcj2NcPdLYMP3twB66Jrs1xNoj498cqY8U1wD9"
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
