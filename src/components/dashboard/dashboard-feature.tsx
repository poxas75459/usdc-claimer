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
    "5L4SwFYT1S5fF5stpQgExfu9JBUVjWdHuMbpvNaBitXbSPqjxC7wNy6t4VNpYRm4X2thZhkUHfPydpQYRTTgzxo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzbA3Dy14Ti4hVrBhNWewJnZZBqnuVGJ9PNP5VF98i4oxZDgqbUbg3xWhcBfjQAoShqRXj5LWX3CYCSMJWWFugP",
  "key1": "5Yq1CkxoFsLAQbGdaL3gF1gMMj1uN3nHYQHfygxpVG9QQJ53Pvbxgeb5MqFJRZUyjMh1soKXmkGgg94oSoK3E34r",
  "key2": "37EUpsy1Ce7Ue7W3tvsLFeXvjQdvzqDKciz4iuUXHmqzuTuyy6LgGdbNNT3dDTKoD8XFydkZ1uzgAhXXAsyPRec",
  "key3": "5UrMFqvjbMJbSDYHYY5NPreAzaFxpUrevQdUjv9Qx5zqUNh1svLiEvjvYpxEy1h5K2cC3hjzEnojhnPFBjWss92J",
  "key4": "29hkFLQoqjCtR4fRcQcuPsGzXNp9A77bS4VT8LSEkiqweLYbhbpYe9fQGR9iThH2jTCJX5ZyZ7JUJ1ymm4v6fojr",
  "key5": "4baRhTdSEc9MASvjkgi1aR3zWnoF1KQnxDqx91Xhd7gCEAqYYuWSRhtcMDnKTf6kfcEYbSX6Z1AH9JiaQjk1Cd78",
  "key6": "eu5X5NRW5gsksnp6x1Sr82GYYgrkAHqcbkFaUQEdRcCEWAyTsKSHSH2wYii1jcN491fUC6NfaFXTTh2EKUtdvES",
  "key7": "eqD6c1DkXEyReyUfnayJt9Kj9HB6634yZqpSZyB89JokibgGaAyYLvSzZpxFb8GtUqPQUWgCsuZZc4AB9XvwBAM",
  "key8": "22jTtjPxv9jFDLWHhpFBZwVn2kECju8pD3UDkJKKFD8vikMfst39n8K5Xd9QTqx1KsydYxwXm7awP6EDMA15Sgb5",
  "key9": "4A7zhigdQLxEm1w1QALPjBxNucn8J7BaboFcNx4ERb6GTRbUHQszLMpMV7NyZunkcMpCZDHzNVdL1hvy52U3a9c1",
  "key10": "37iCHfX1FnqK15pwp1faZEk5CLxPQHgEVRHw6kLWMgxDSRp9w1b8kTpaPsZscFHJkoHveARNTvRJ8oNrJ2xdL1Hm",
  "key11": "4j8UuY2ngsGCa2hyXvJqyGiVe1kWg9Mi3f7ahtQsWhxHYm7RcMmcyFVYZcmXYwQ1sVs5jnCfsmma9sdSJyHoaSWJ",
  "key12": "3h7CqquAninKagLmvqN3vnWWxD6pSy9Hkpynf4e5XF8dKhwjxx66m2E2oSixSFvRXFdtgmHyoddrtH5DBgt3kU4V",
  "key13": "4SE75RuKnbJMGZRoDxJRJS91TnD6Rk2HkbycXeSXEZ7qxDoF8BUPqpVXGLoANmm34JimqM3h5qFwGEUMEEvcjeih",
  "key14": "5jrNkrAjAz97zpFXyTwumN3KdqymsUD1zkpJ9VW3UFgYNw6Ugp8a1EXayPtQpnUiwj74Xu7YaeFQtG8Meu42vHFq",
  "key15": "Qe5czeNsVm1dDDU5Fr3UWYu3A4rXAV7pQBW8UyYUdLW5uHYiRKByhfjweuPrSWZyUk6xWw47p6txc3eiXe2fU7L",
  "key16": "etDy7U6X8SQ5RS4hxjyU6UAUh8f379fdBnuWx21quQz5n68qMfa5qdpkbFUmVu5BdffLwSFzbSRSCTsV9c3iKuk",
  "key17": "5f5GqrDzph5fs6bbHAR4tEihvx3JcKGhXBHW4jHeoLtRd97sHZUtQJWMCvUSNn2XTHdeAvNp4uf3WXqu6mjFm6VC",
  "key18": "FFXBnn5orXFVUD4W9Sijm5spPWwrjuhPNJVvyUREeKEvP1FSPp14H46kr8He94QUpDPPsY3YE8EKpS6g6KgxVAe",
  "key19": "5TMkd2ZmExJF5XHg8HHwkAK9xsKaSUiDs3KChGfCJhcBYXPL1KRbYfvSTMXpbGKNwuZzPNCcbC2aMXAkgJG7Tbgf",
  "key20": "2di1zzT69aUgBFf5k4FtoA85unAHr2YWDVY8SHxgwGdRbhLZSeyUJ2ssGimXcYFXHU1tSTnrYkcbhoH17MADgHxU",
  "key21": "2dqhQ9EkGJahGqU13EvcZHPGao7NpzL7VRjuVQWF5ZHFpKJpzra9gZokYQ8KUDAVCvdqB9uRcL7DmmKzcou4T8LR",
  "key22": "3qMFFfUe6oZPMXbzApS7A1QYhw8iVDjDith5Y9aibDG5orJb7rKpkaYd6JvXU3gcuGN6GMFLYVeWttATyBzntyQ7",
  "key23": "2DR7oQ47xWiSDewB1VQdnFNZrim25XgMgCBRsCqJSopvTPWSBTgvn7hWKixyfCUhPy6xzvuX2bSsrQTmJibjkrmq",
  "key24": "oXPczk2bRHVGXk2XcYzEUTbg8GV5oQRFo3wZqhFjGDqUM8BHjQosnSBU1pQrSCrPjbyfvaVmK7niLEJHfPC3LU5",
  "key25": "3fkNxUjDn7ZYK7h5K6zbjXJyhaC9xicdvD2XMUNDsy7Er5tWmv3YiJv8tZBjLYf3nYtaXgHibXCzpbKefPUQzVCK",
  "key26": "2PTCUX5kgRkFLBCTbxMRpmhS1Fqs2eNyEDNCVirYiF7UeFMM1cg4mJjDLhpEvCw6URqfkDnJUuJiJmSnKnvNx5uS",
  "key27": "2iAsF4k2Gj99n9F8hd2kSV6nhtGvqSYy3S4yWw4JbAbbkY24r1wZW4DFoKTKaREYULfaiH3jLuLkr69ayuAr98ZF",
  "key28": "51gPMBuz6jfByYVQyNPyozBRQHQqbBR3rb8b522grn9AQmUi896c4iG3daiF1CPpwavoegHAtMCBL58AvMHmmTV7",
  "key29": "5xJpWJ4PAuft1fdUqGL9p54UXXfvQ9rnQMDMs5xVp9uWcmCcaVMCRM9xJ74XSaEscWQdJYdwoY8dE2HYiAXUtM7c",
  "key30": "5R97YxtFvJE7Hp5kv9cARDk3CE6ssgy2XrLRUta4HaqjiDciUeLvFmE9qcRoJSoYVkxQXXBN2ejhenq8AthutvFK",
  "key31": "2JMLAyNHoGEWp2TtqmLQ2LYmpF83WTTiH6MU3PbsfT9K8owkxGiiYfrFit5zQgMXsrGV3onBAjwVFcsdzFX3cGCx",
  "key32": "3W7RyfdgbmeMepy1uPaNubmzoB13sHzxS4u6xmGuL33saUFWzonqEX9wT249YkBerVRoSn11P93DDP2CiUyscQne",
  "key33": "4NznhsjcU4o8KSnBUoJoqARw4A1d1fcWonbTDcpn5gqcZ5Y97oeGhibQdURvywfpsZPZcxazXV5i88utK5jazNBT",
  "key34": "hPVX4oEE1hX1jWPbwT3mpxzAjGTxNyxuasM5AEFuADVNmJhYtVsYsS5BhnhAJr731MVk4F8uN1gjfegqHsGG3zA",
  "key35": "3VxQdjLKQkUv7ndomTAVX3sSZuBHZXbu3ZHWsczrE35P8DvgumL4wreTZHhdaetbqryJxVqhYnF4jCZc1YTki2XB",
  "key36": "65LE8tT5sRVLQFimAfs9igSZKbkZvnqqG42QTBbHWC2r8hqrZfi2CAVc7LJrRciSHU7oGwFXq67B3ntUuSdRbk2U",
  "key37": "2tBcDRJGY3r9nN3nq1iVzcocvMYcgtqVFnvntkZT5XLgjQ1rdzdb4pNbmuXBJNZsyJJZMemALbAXf36jc41x27cN",
  "key38": "5FbddNZgSGua7kxA2BBXy4wHeDdnff5MbcgAQzKQQBj2me4rCRbHX9ps75SwDAGUYpfdHwj8Nwgr6gRrKoakYJia",
  "key39": "Jd4tHh64EDmxGAaxixU6Tb2uedPUJiu4fMbqnDu57hrYRLimgfu8CciqSKJ6pCQBcXb23rHH1YTxg6SiwAJbpNe",
  "key40": "HQjeA4kjY1EFXwiT2g7U3iij7LqbFVRQj4219ntJxLBNKHeuf7xJzS2UVgA9hZBCnYqn3qKNZvjeEvAuS3AR8tW",
  "key41": "62EA2PA1bmf8ydVGQFFW65f2HpE8NkerFnthABpFZhhRSM1fEfXb2gG29gzdvt1bbJPFNJFssPQZyVEtFB1X5Cwo",
  "key42": "3QPkW5NvJkUWrktq7RJenujNS5eNHQYCL17Fe33zwctGUCeRCjkvZm7QvkHoV2SCyMmh84bZUTASE7Q1mgPc5gsf",
  "key43": "4kNtTTACbaSouw7HX54KxHU9dsPSZYbetD2JYjrnocECDkL2T7RmP1NCr4j4L66QGwgdazoJ1mzxAU332NaAzYKs",
  "key44": "4Qz7RcuWPZ3BHK78SwKMu6U8ZQ4j1iu9Rn4T7EnjacuAK9QDDGmzJpj9wBm7e3K99a2CPUYqkuTaLEG3qTqnEMg1",
  "key45": "5nsg68ZoeYxtfcR4vUhfU3JAXib1fCyHHfQowYA5xCj4Hr2dNxREJGDXDpExASR4G5JRwK8c88szuiGo4r3Vj3SW",
  "key46": "5E34BnsGNUWmQ9hBLshxnA1UjtpgeRvkmndR1rtEczWdFWb9fSM6XuwwzdbVuW7iB5Y8aPtp8SPyoYf4561YMsh6",
  "key47": "5guQKz1kKh89uWk6Y99uj6XSkuW5YBGHNGKin2FXpiqEbKrWzW2uzTvwmjN546cvqUJPnK8171TsP3crJC5Chz1t",
  "key48": "uKqvJxAqvwtcNycXQibRpoUnJRJFTFfbRabfFjyunvMqA7GeCei5LxWFcjLJn5gmQLozhPGdi46aeMidEPfaxTG"
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
