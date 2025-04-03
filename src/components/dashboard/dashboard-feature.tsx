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
    "3eESFCDWymAtLfBWQhmKy2UYz1onEPdxerp7ffg3U9aDBdUrjBjQ9zhShgL2v2tNfHJYLLD75mRF9d9KMNVQq8cM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxip52KRecyPmHea6xfGm7eijvpnQibvgw7uji9xtz8weoMGPyqRBRrDnXK27F6BAg3FDrRHthsU856X2ix3dZ1",
  "key1": "4Fhyi57Xg4NPYVaVgTVidDJ32vq5HK93x6wW9G2iQLNvmBZWGqy1LxP7W7G8vCiMh6KnJunwe1syCUEosWG1e4ZY",
  "key2": "4JrDKAtBjH831kAskLqEFPbmNejoWxqgdRbMtPB6uTCLwNDEE6sFPvsuTEfvPXzFtAPmzXDQnUNh5H75VV2BM8BG",
  "key3": "4ozwp3LQzgs2nrn6KAzk5PRoSWBRyVMzMVKB3P9m9Wiyn9pjsWDeZ3qqag9uTk3FjfjK3TJFwk9KNVMXDNPp6gs2",
  "key4": "2DNwUK9Gyvdb4y5qea9C8WKGnBvXGBDCX5y3xvR3FFr4SxaKp3f7tVHi3BtYGx2Jijp9q2C11BMPTWydRxhGxy4m",
  "key5": "2y8aM4dBypEdDcJgRBwWM2ktfdJWPUQWQXyCvqRmBcWLjWD6PvHwFuvbuF72wU2xooCo2crcXYLvx98MPskfT4U3",
  "key6": "WbapBzMRizdfmwDyQ5TMRz5p3txASeqd4YhGtrV6oetE86EydEirVddRPpnQomiH7PSr6Rk1gQpbx5pXCGHQgZo",
  "key7": "5dipR8wSnDwuE6xbCZSjLTDkECMNMy4QCUh8MTTat9BsQCU8bKmNMovvEJjB8wFxR5KiPNN3ykWnaJhNS3oamghV",
  "key8": "H4eXTt6RHCYDoU9oXxeUsUaRZwMbG8jWoibm5te3rq2kBMeQWZ56UCTnG79DQ5GEXbTkgC4VUAJaaE5B8Pjzrra",
  "key9": "2NEmHcRWbNHabikDeQBmuLCKBE1MKLbAbqm2RtNs3Z1KshdeTbXw1RJs48J8dG9X7PwG9DkPsf5RKTTS13xBV8ka",
  "key10": "4j13JLsdasaYi7RN7sxZGm5Ze163dduME1zPpxutAFFRLB9aEQEQ8BciGEZTE6QofqcpvNk4FhPRkPSjRZM3RkQx",
  "key11": "4AxJvoQNBKuZCXprhGMbH61hFfaz9vQdMfL3BXLD28WTz4c1gcavpvptd2Jr1zPsbevDTKSmXCrwGxnDNvHvFWKt",
  "key12": "3Zw4Xe8j7QWcwWsyZEAJvmwvaqWJVza5hFjaZehjDycrCmftT3znCDLLgLwxEeUfm681soppSGnXtWtqoBeBT9PK",
  "key13": "5ckhzHULzqncjhhqW4oMDPna7Uo67ToqG714h1QumNXahpSdRC8xz7JkhREovcKA1XrcS18R3BHvxu51eKq4Y5uM",
  "key14": "3KjXBfHds8chPMYHHoE3KuAh1WonuYYEEq5jSu9SL9nJ4GLE5JDW8XjjPsys3icobMkahU5kmC4dxPB4RzRCPqRi",
  "key15": "3Ec4QdYcip1eoVQbvgERxeDYoHYdjkdVBQ29udNd8mgzRvaab4qGEVoshsKSb3KjqyqPCyVi3knFRVNfeXAn5Yig",
  "key16": "4P3GSJjwqqwQuXyeBLhuiPdfPnR8RFibNm9auv4uDx8tEsjhcEPYvt5LrMz2gBs1A6rZtijJtFvHKbVnmCcx6C2v",
  "key17": "4HqtppS3qVb5L2ej7YY4RvxsKJYm1S3uuociG6PDN21kLXe4g7Rngzok4KYH86xgTwQrDUXzPGHonUj5DKY6Hpwa",
  "key18": "4YP9GyWNa2Tj3rZ4RgxqezMSBwc1FgSEHpkSkeZvX8x6GZvFwp5ZSivNom2jQyMiC5SPkHcC2DoK9NzCvjmQPmVg",
  "key19": "4socXYim1fQ9jNEBKMeUR8PPfL79Pc1v4wUpDapHyZNqwUQrqkZMVDDip4bEQ6ymNb1tBsCCXsxuEMADEpmS71sQ",
  "key20": "HfMCZdFWRjRBydRwBkFAVThVrjDi95umEuc4je167CfQuJE79GR3zYUZK2gdAAoRaN5gdXpVGpiWGTitAs3vRtu",
  "key21": "c5eG5hudpwFtqVT7R2WVPx28NEkJH17RzPLicWbVqYYEGCAZEUs6zY23oFJj9oenu3hhgRxoyA9aMFDuwYbZqgS",
  "key22": "3aMrBmq7iteP9aBWymxh4yicrnGhx3beQh7eAd3cZBxnoZhb3WVZW5bHa8T2tf8CyQLHTih5XZAfquDxhU64NV18",
  "key23": "4P1YT14fw2pirsp1p4C1ucPxexAugUAVFhJ1bKQjEqWRE9QaobRtdq1dQ3Cz2Srzw1NumfH6WBwpPNqqwjCHfc6a",
  "key24": "42E8gX1jPwX6WJnvoGMyRH16DeXBvMcCWvvw4r7fUm5fVgcgygvuVb3bahasLZDn6fp4yunFJUfCtFdgEwqKanZU",
  "key25": "3DtL8Ma2tKfKQMq538jSP2TYD83FaneUzWc9WGM4shPrqiEHY7xxmrNjakHzkujjG71kGR6usXHfpTuAcwtXBTm8",
  "key26": "48NeXJFasPXjsg3gU2RjwMXDbyd7YAdqn7pihvN6mCDivRAhXE2ePUW7pMgGAYfF1kcQvS5Hvw6w5ZCpeY29MNSi",
  "key27": "3NbjhR6812nGZr9ZanDceHLJgKjNGwryZu6tNTSLLV6uzK32F1tESYdhe7Xk8cdPG8FVqS2grHm4mkzLES6VQUJN",
  "key28": "46uPeSyegBE3q61hNUbyrHCQaqZTJXGcYHbmdyMnDQUd91ThYqaGwfAepS8Zk2KojQJg1ek8yqSHtFKhkWK562X3",
  "key29": "3rtYAbqtvYvGf8fjC9ccwwfY1pUTYoJSpskEMYFsCwdQinkZH3AXTfVvVU2wi9LfBtcxZPfixroyjq9DBNQxuJCd",
  "key30": "3kjdGiPdcGbN81X8jCGLvGdA4sSW8oy77L7yxEux2sMb2g8gGXJwauhCBtjDPZ3gWPuQaQ2ynCWjWFAKyqxjKepd",
  "key31": "4SC5sm8BcRaX8HEqtKWXq3rJh3mm5i9tz7CRwQKa8MvMrJuq8V3LSWWVR5NT5NzghrVWpvjALiS8MKM4g4snfXgd",
  "key32": "5SX1GNGARp6hGARKGPZW1QacTiiV6sHHtsiDrg5zYYg4joiha9xAHEJtEm2GpJxbfaZnKeEFufjGXPYd21ChLN1",
  "key33": "3bwQgntybSEJdD6UrGkRuDT87wy7pCnxAeuGGpSJttkgoGB3esnBWPsTwcSUZGW3aKk9hYZRhBHsTuRCuAFsJUvH",
  "key34": "5RE3bHm6yNjrMbw9LBNRcckx61txYbBqZYmX76xrpTijDU1Nou6RCtLTJvzy4PuVqVBzSDVbEhnXsN5VsdV8oh6o",
  "key35": "2mk6M16U5ooUgcQFtdkQXymZG1nj1xDFtf84y9PzBpwzf13dVDso1hHEx5DVBKLdVkCuiDpfCu6h6ZAvYoq82ToN",
  "key36": "5Pewjr25itZm8yMcjfo8inM4NsdNSnKtqSesFetPRpGwMi1JmUuM8DG1yRDcdjELk3HEP59rbYh7RSTUTzLJj9uE",
  "key37": "42mmktbdECEpbDWyreZzzBK8zJVgJxwr7tEKJTnK4yamnmdna2GyNhgmoL7QvA1V7XjytoY6Ntwz2dz471qW6e2G",
  "key38": "4RhoroGZUBisRtPVBKE2SRK4o81VUAZ2B2VesGWkgXVho4TPY417S4NpXJaC1PAnX77FZNkhUKQX3nUrUyRUZurm",
  "key39": "5K7ZRdxFhqgokRkxdK51m49vyqMJcPuYpETffUQuRoWyLdcMGsiRbVJ1Rcqimd3ppf7zzmDnNDSgq986LG7ja95z"
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
