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
    "4oJ6WqcaB3dBzy4VH5n6wD7fHmM65GqPY16kZSrvhEDU8qLnxwTFp9h1W1KHpJ7w7FSsRA5BL6PNAVgfEYHRzn3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KN5ybKHuRxKQZv5y7Ni6ikJUxfMURNvVnLW5n4n2M2vcz2YmixsQniuWp83XcvsftmTSuwsohtGrnkDeMdig21y",
  "key1": "4UmnevEV29Mq8Grcp2zDKpXtytcdRxGJWcm4yFsE6e9Dre9m3Q2Xw1eoWgZn7Ry2UGiMRUxxFg5Wyctmv8hMa4PE",
  "key2": "5WH5z6QE5XRSnUt66puAmP2CXMX7QpiWFPpKsj7V1LrRdgmTRX9Ynw6gBDkvhkXAw64RSiiTygAgdCdMEyTwVdH8",
  "key3": "3QWbLXFMxEd4zfyGHVeHWooem8LQu35EdKxV8MWR4DLmfixrZFWoip3fgzG3mBWVjEhj28Br82mdHfNUuFP7J3vT",
  "key4": "4NQffUnS3R7NJ7Ymzq9ufvfndXBMhjmudE8uAzUqqohPqiMG7mpQMUqqtNXy9jvpY98K1MVL245mShy7Uk1DSprT",
  "key5": "2kLMgvdipRuREoSF5AeD9YATnHmoQw8u3CxbiqTS7QzQjpfF89rpH56PAkLV3SKyBv3FRT8WVtEhqroAdkneV1kN",
  "key6": "3QJ8utJpp3iuH1hBSo6uL8sdAJz79cBs9Du7ikkfJXK3X6K9ypU7BvKKAFuE8zSq4jcPJWRomfkDB7MFzcSY3GTM",
  "key7": "4fNVorpu7MtBPtZ21HioygBMCebQoeezkR429J69neVkDU44GrqgND7Vvm4Lpnmjd7UkGgdvM5pzK2hG8BgWBd6G",
  "key8": "3U1dmJbMypCCCa7R8q1xHvGSw4hHeoSvTvxudjHsy5tXhTcYLfMiiSrGmh4eeCFhSy6ywf5BZfK75sQxhFsx1ws6",
  "key9": "4tvuEed2VhmjA4ZXBekBmpmJjLC8FwLbqMhoyubHmT99S64d3ge2jpeiE5eZboaw9RgJF7v1CNspyhCUPJFo8bPq",
  "key10": "3Dsn9ebtHsu3y6b2Vh4U9MKMBviUchgu3EkZq1kK1zmirQZRvMijvtAHWjGRo5SE815JJW9Jw46eJSbMG1gSMw1d",
  "key11": "2Wo8nLR5UcgqgCVvw5vZMXu7i51CcWw5rRKGgNobBrEoWWEkva99Fmafs1gGGgn9FUDAQxpb5PYYFBtDmHdjYWYa",
  "key12": "2VnZAXxex96rWeayotN3DA7f1p2uTMv4qGS6YmHPGxLJF2pxaUmvjVWsPAPv3VbxFGGYg8mnUWDCpqXVnLVesgkT",
  "key13": "3YotA9MHuRUUgEvPY3YbPersTySq3JmhQ8PUesR4GnZp31HCMNr7Vi7o5YDPxwoercsBFbpXFac6vce4fckd4ZZT",
  "key14": "2ZMXYDykEdkhudRXdSfUmskYV6GtcZnCUAxE2t4xT1pSTT8cvX1vVuXSgSz41zrnG8Cch3VmwAasPFHiC7esEooP",
  "key15": "Lf3gRqNRWdbk6vHxDQSr81V7xh8JVpNy2ZQwAVQZJffLzCcyPDNVcPpf5GpaEaLmFqC7Zq7oUfWcQPK8SavVuUX",
  "key16": "4f7gNFiDJiJ45EcuRbT54TvKaVJ615jugpRvJwvJZ3CtSMAomcBEqCGwyWewKizLkBEyBnpavrLjaGD3WNaNX6CK",
  "key17": "2CnoWoM6FpdH2fcyCSBFoVociyyY6DjzyT84neFGhjtiVzXSoCzTTzAZPBr8hSbeoAcRFuGUsg1VSrxnGrty3ZuD",
  "key18": "2EFwDaL27LJeAGoeLfZXeFLfM1C4GBqwhfj1ajYadTxmaWxF32TUgf32P7Bz8xLnfuLSV5yYDCH7CeMFPgz96tFb",
  "key19": "2dmkVGhq2vsV4rHdGF7F7dHRvXSaz4iKjAYNX57xNjp9fhjVE1VZFa8qx47dqz3QBa7iPoJjr7MPHgRVd9BmdA6g",
  "key20": "2YZbp53X6zLRZWdH5E2SU1S9Z8aXNAPkeTjAcZkGX2puip59F2cbAn8HTC3rSdtuxrWG1PcFE2x7BfhQpdwJxz7w",
  "key21": "26zWq3b46vu3WyEVGY7h48gx6Qu2ZRRoyN7Sj2YF5ptxGUZmqi9iGqD1vrt46q8B42YRfiUrqNWLxCbozQX77zKV",
  "key22": "5oqxjffrad7uK9zFEazwmF3Yq2dT3aMFhX2j99tRqphFWmv9Pamf5QJFFBbsnZfZtNw7cbk4BAJD9H3bTvxi5TVq",
  "key23": "iAVJV2anMAoV3dby1W7rS45V9JHnWSuXXe4W3bW6jzb2FW7b7YN59D3cZvPuZFtGqWXr9KH3ERHyBix7yfaGggG",
  "key24": "3G4kuLGD9BwhcDJr9Gy553WbCsTUfxtS1PrNLFa5AETZdEkEfkRGiRTwJuT7LTkMidwD1T7ZTEaYpcF4xd6txLWv",
  "key25": "qbM56k3sDef6Vs9pAFybf2Q9YZv1E9Pmj1J7jhYti42syTnvEX7s7EGUFeQZXAa9WHLVTZJuefw2kbrT74HWZox",
  "key26": "2KN1ZuZV2ZH6tHpyMDLkmWB3JiW678fLEyyyVKytd3KDrZ7XL41k2haQ7kRbWvDtqwgo6ywzs4PqupGb5iyat341",
  "key27": "4rKgMiU6dRN7VaTdZT4UG3DCZxv52JH6KKB3fVWRKWrZQPGopLKoHdVd2WJhCWKU8Ro1bYvAfJCvrJuzNWazFpj5",
  "key28": "2sxcbuscFZxwfafY7BPUNwwHENrkrD8UrrmLiVq5FTyEspwQ4XnpGxqUtS4ywgm6f4PJksnmbAFhuEnzGwmKss5L",
  "key29": "5guGJGU9cPgGieMn3p8XXB7LXwbCdmTMe7H3WYmL5HePTxc2nUjTHXeU2ABeimZKr4MtQ9WgVgodceSGQsSzkunz",
  "key30": "3NsrwKVuQNHNPwi3DbMdj3DKzGSMpApp9H7e9ZPKaNFYtNm6uui3rJs7xkY6qZLTv5C6ybq1r4JZpJE2ArWU3mHG",
  "key31": "5SVJMjEm9QSPpp8Xi3iSH1HjqynrxW7cWU6AGSHYjsNGG6fc934BpHdJnbddBVhnDMBiQesgxCFPURttn6JnGsb6",
  "key32": "3p8bTjzqnoWGSFcQBo7e4q5UbqCaaB8t1FDEzJsk9bJjt5AfniirdDGG5hGRFPtVDBTHHk51bJnLDwTsZMb1rHuE",
  "key33": "53wJiBtYEhcJV4ptBGtmj5ucRqmxRLKHbmM1eMyes1ectkB2MTRhLUrXUDXJEU5JTwLzkSqZ9XY7xBvhQgVXwfNZ",
  "key34": "5ZmbDDNvdRMG5Gf2j47eBqSYro3uS5PTZwis6Xb2SuZXatsNoyHvun7RAdwTdTgb4Xr2ZhSRUKXzSuZs6AZXQimR",
  "key35": "vzc2CwScrRsDnJWSFAeGKY7EQ79h3Z4ToBXNcj5AG72qzd7Rcz85TqPVujmXzei4zuHAxFf7dxCaYkrgLHGm9dQ",
  "key36": "3AjaonUdPoLYq1Bqone8b2a6HB1doN6Y4P9JkyxThsU24gBdVc6xFD577nNoesLPJaxkjZR93TsoSMn5VQcFdQVu",
  "key37": "AtyMsB6X61DKCYnMmE2J4oYeCoLLcQ6rGfFXf2bsHpQtKrqiRaWPjDTGRS5RB573yrx6MUdo4LBWoUUxyX6Qtw6",
  "key38": "3JUcRKEboK85H9ZhLC8wNeHe92Hk74eeLfkACq7NyFK5BRduft8yE8fc3wa5nrRQx3ayVKUhp2rnDevmFC7HpoeF",
  "key39": "3WhR9FXqaRD8SytUcSUCYNRph2wurBiUBWc6AfhX3zH72CBmzi3YDKWXbG8hQK1SDXPPXdTJuDFMupUoXJMAXhaP",
  "key40": "38f97cV73SWKtj7HmGCZReA6meDbpUuiprJxZTfhiivTmtcrXt3eLxLaqtQCzwWcGpVZ9yR1o2q8RFMN8UaeJkN2",
  "key41": "RmngDVCDSPeLjpNjSkFdUSkFqxyR7eajLAihEtoV45V7B3Doh1GeGytMmcj5chjm55LTyymHmp87Sn8vGzn1RcS",
  "key42": "3EGkdS9ZhXYr9G5PaBnGL1cyLeyMnmrDFpHJ9LGgx1rTyTpEirjMqCyYfrmkmLzR3AEeWRJbBXwpKZQNDgetG7s2",
  "key43": "4Mjb8yVsMpvFDkj91Lt33v6RjVpgea9q5T7bAV3sCqicJAfY15pYLU7dEoFGNCyekJchn5dZRUvkhdFyzDWTCxvY"
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
