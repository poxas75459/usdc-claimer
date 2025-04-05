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
    "3jXUw3UqDwRhc5J6HtkwTkrar3AcZhmwSXkMUeJTrhmJHPwJ51AgyfLFo6d2Wbc2zsD59woDX63ugMuJjkuP2QB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZH4jVonQDgGaAp4A4pcwoYUdgHtMHn6csLbnmghG87tyCKZNsgx4ZWt2q3ezdDEugUywSkcpJd8ikP7bZLLWawZ",
  "key1": "21MQvPx8imE1TtmpW1TQn2d5HHBbnLNMtTjrhJNE5aUUr8p23AwGTAXv49cu5347iC1o2JNhc1job6raJ7Ugbj7J",
  "key2": "3QJwQ3HBkJTgHkNSuNWc6m3GJWK7hq9t3XXUa3ua82hsS2yVfLBCcDfxqcVk1rdnCdz6UKpCjTRcAg63nM95462Y",
  "key3": "3ueKC91CExZhPnobJ1GQfza7FarBXZSTmDrYetxufgBCctjKCtrtefnpucX4R2zAkN5TrWiMhj796NmfuooyH6DP",
  "key4": "1bXm4BgPwr62fPhmwmu9Dv4Udzm5eCPMqDPUexnJB1FMYr1W94mgqHeQnaYBWiwDjc39oBhpDKCui3cYqrwhAkA",
  "key5": "3Fi5bFBTVgj3t6su87NB2HjS9vKMsWkJTeif4ccWUC9Rmh7KTvTfWG7J2648WBeEeRVBitvqt49C9UeNNeKZnv1E",
  "key6": "vanhPokM6LmR9U8X4UGy1km5sWhTJmsR3pf14gKdbMMxJH1BtBTjrKHmLBn2GbkubDSCrkkvAjY1aqDQozmmPSm",
  "key7": "S2bSMvX4iz8XHBpFcJ2twWvJY6x2PdVfypyohqCmbQqTECQzMAcTkhqpJEWxUDzP5jkpYoMy9rLQFaVa3QWYdhM",
  "key8": "32KndJdi7vFV3J9RmrdkXjVgNVysu6giAV37zCgPiYzNBF5QQ6FHbLGZzDs8usbf7bVKWTKZMmZSyb2rY3nGoJZe",
  "key9": "5E9CVhppWjsAkNFLASGALw6MMxQarn994yDc1VAUSSbDYiTxxtu3KUiGwoiKDxyqVkYz75qat2vf7pjf72pUSUS7",
  "key10": "5pKYv9r2GB6LNvQrdke4wq837StdAmPVypPgS2cmSQMU4Fx4W3hDQKdeWm5rT8Z1SoG3KxdCPajd6USrbQ6mqCNp",
  "key11": "2cQR4k9nQiVNKZDTeGpEGQMCZMuyFpnrcpfWJYJPsA7oZWxt2NuuphWo3YgwhB1vfvu9HUbgaZnsPpCUkU6j3QNb",
  "key12": "5HgyBrWoKAMTBpqnAD5Zc7hygYckbYpLg24WHKxtVCXE7WYPvgqSHLQQgevYQHhJmkccse9xMCwjPVziGhNxLdQC",
  "key13": "Rf6Qz9uAXrKbuZhe5CXK22QfNq1ypRQN4FEpbTuHohUYzDjd1ifYQD5qd8xru3coarjdd7fkXAoF52nSU5GYACu",
  "key14": "5cD3espxaRu6PvmTaNrh3oyu73z3wKWBcvDkUpjne3x9ShQpdWXDcHQqmrrB8PBTMYE1B785B7Kd1cCvmFrpPfYU",
  "key15": "pSTNY18VUGXtndEi9L7YVcmeKNWZv2LtHEGachvjfVGtdCwSUieYWbYt5GEx6y68MQkAez3wRoCNrWRzBuXWZa8",
  "key16": "5odw2Xv2q4EjmXaUCaNT6VUJwWnDJyEEqSMiq6uTUZoQHKQY1MgWrBdTgqwHbTQBBB72qzhh33tbkx2mWtEuAYnQ",
  "key17": "3HJvbKN85Q2fT1qedgAxKtEoZ6eYroAyUZMW7XXvnUEzvhw3ucn8igzGsWbY4zVHeEnE5dL8CmBUK1hYNq7SkQsU",
  "key18": "5mjApAAQupv3Hi3YJf7YNXaXTwKkkL2oYdd4NnxnHSg2xJYe8ZHmgscUrtoP6hSdo2jE54mP8KtG3ucT7znEjtso",
  "key19": "5Zqr9CTr5cMXeSmLDKAkQxawYe4mUwRkW8BTcNVJi51zDYBR63Vv14dB9YMScpmz12UhHVda4jJ2YgJvM49wSF2b",
  "key20": "4cYtuDhKCDnmMsLjtpWxMMckDJVgNpSWdStSXc184YpustJdNSbc1qz1zQENPtpMypaH8MMzGuSJn6qDb5eTSYpg",
  "key21": "3U8ksh7YVaWFQREWRcAFk22dpyCjL7y3earyEEpbofZ13QHrsDchGjHYKPr4Jqg9JLgEhsWhDFjeSc5PCNyJZPPt",
  "key22": "61pR7gEA7XR25LpFmcfPoUSP9YTKoStyeVT5PTzuR3TsCFd3955obqDnKgGro7Cs8T1qnVCzSCPfnHSExVt9romt",
  "key23": "3PDXpkZKXrAiWKjiKCoC6e8NPVbdkzThkhfPC1cuXvDREfPjXTzy51p4c25pS8iPRQJfA6tziCiSNm74aRE3vSNr",
  "key24": "4yEsGdeiWCf4WyVjpte8HoSEXPAyQAiyDDUvSZVyJTAbuw2Nkh416gVF7uXTDJ6v7eNeTY8RmmBLF1vAScydhJTz",
  "key25": "2EMR7Efs4khqmhHEH65jAE18oqfp5ZMJqyjnDUuGm5XwyuR4uiWVcHFjFk956RVXjRZtiFcTNiJF2qWFxHELEoJH",
  "key26": "7LUxJWoveFUVYarhc2Wo6RzNMv5BwD51BGAtymRcWt3khHRJKqQQyNfp5TkSSV2NxQnQQ3ubxByzo6NgBDZcpGL",
  "key27": "yi5fwv1SBdiXC9FVCGH6uDddtX8KDimVc9aRwuS94N1AshdxAyGgkxDeRenqaQdbVk9mi6iqDMbSwDuC5bMfSGy",
  "key28": "gE6GAbDDXtwCQG4bAE8NZhM8xFCECnEYXJfNeYn9crxK74UfoCfRQS7ZfrVMb6KnqWvqfcwTvv9Sao2TR4zFHYn",
  "key29": "2izPSgU6YC85TE4UZYeHu5mVprhXFqEsyuPfBrfQ5h1Hunhm1KyLMVdkicAriafd7h4mLT9RFXU4ddRqxi87TiaL",
  "key30": "2iym5neom5Dr8RT2CQvVNRZ7DYrJsGDqSECFD8Tgmo7eV16xXsgMhW8sLRB2nV1gaBCRSaDSNB9x9Ymru5ubRGGw",
  "key31": "hcthafoZ2jgeSHC41KfaiMybQFH7sNjYotNFTLf7oCrZptaC8gDqwGBNvTqTefxGQVqLb96WgEJJU5wij1kDPXQ",
  "key32": "5PcgHRVKDQRLHhAPq52EJzazPMvX15HGfpzExTYiL732avZH6DXwVZr71JjdiqJM2S6BrQbVN7H9sekN2xJNo676",
  "key33": "5qSTvqxALXYWNzCyNTdfq5CKvaeg9ExNBJLnPb6geAcUFyZqSwBM2Uni3aMrbomv6qqprciKsKdmNre9TZpbJMP3",
  "key34": "62fFUmBhXp61E6bSB29kxX8DhT2gZuouDyFamFfN3swHwBdRfFYXWcjvRsMxw9KvkFFs9xD8i2R4YYnoQzZPC4fH",
  "key35": "3FQQFZjArS15RE7jkpLAnNr2VK7zVRtdd5TEjaMUbbPDkbKGCTtvE383vNmQ8qqK7hcc4coxhVdmdRiLX732DUXW",
  "key36": "4QkPgnVEnbJiiKT2utge1wE4BCGcYfY1fJ8mvEbxSyvkMBHuzcw1K7R9W6h6Lud3vHhoJxccho7P7NwRxZ6QKn4W"
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
