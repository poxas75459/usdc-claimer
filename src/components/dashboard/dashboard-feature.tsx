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
    "2TxGfgARphTYwMs3SUJg3oLMP33QWPXFnhz5h2S6A8ajsRLsdjCK8BAc2UFXyRX83uV9cadCSDGjwLq16HPntNj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZX2evLCnUiKPZSy81eGZBG1DdJTBNwqWhiVGwH6co1UZpDH4U1VC4X9GSN6Qonm9etmEKnyxsXnbMMq8XkzYN7",
  "key1": "24pDwQToV8bZN9coBoqxmX9hwYyvPqx1AkoGY55pevbueMCrs3MuRBWneyi1avyzELFS9eKygT8FZArE7nj6QRmS",
  "key2": "3qJJyNS2EtodSVD1GhtEmGQqGDY5EVhxpEjCsamjjMtLGjnjGmBJKmFT7VchLT83m7DhSCEcf2izmzA35ergRjFf",
  "key3": "4FDEBCvpBSx8WJesfvAv9jpmHW2VFjEh8BN8rnNLyG5ctkxBnqeHEyx4vfmk8Egjr9mj71Xhyy4essNqsVhG13y9",
  "key4": "3qPpALXtEK7he62CMFXXWiFHxgwuT5amSn4VXujQckwdhECx3rkSzFhNfrG3Ex5qdFJDxmRtDRqzBSUUHKbzn5eL",
  "key5": "2BKEZA335hTkEvmi2GpZpFYUnVZfKwkpxvxNcWQk4Nh1x9CSCd2szVviX8ryHM691kyKrKVzGwpQtqFx8ahq1Zdp",
  "key6": "5J9xWzVJfp3jDJ1dmXE2UbFmeYyrLkFxRQeHAB4PAf6T16ukHhewiYEqDupovKBxLB7EM3sKbUBVydybcceeQdDy",
  "key7": "2AD5YM929hCeDxcNwwwjeRdTeCuSKXAh9Z2DcYPcjMJeaobLPri9k2DG4nDfV95CVjM1rHVLY6vrm8wJbfcii9pm",
  "key8": "3MpZyFM3HKep8xL3E5opRBaCzeesLDDmmngCk6yPMRayWQr3AALnbRxmbJWaT1DLWMArbwVu27ccpSoREpNUJjwh",
  "key9": "W3qaVTfFTdcE2bSaw6QvvVCgsXGV9tTFN4wp6EKvZDPPdvv3FJXQne1HjdsjmGC1ASrDPhVsUiW4Eu9znL3XECQ",
  "key10": "241hygXJrr8j4TekiuUNaEuxhQU1VTgBvLvjKJRW8SR43PFXcf4iJhixqWHsVWL1zmTWB1H1CFhT5d3qtmcF2ifG",
  "key11": "3PEcRqLPHkhWUroMoxozVJwHTa3kuywc9rb1252p3rG5jLd4WLHfDQMXkDBEiVpwcgj7UsceBmJGoTPyP7wnpCW3",
  "key12": "5j2zJLZsxGqswn6eg1Enuutr5XgCk1TjPrH1Z4TEPQkx6CESQofuLRfRt3BzUyT21XEC2BC25iZJzZApf4xcKBNZ",
  "key13": "4kDPUf5w55y4sziB3ch3hxSJmsxkieT8XCEDjB6SYzCYQHNYxDtZKzPzDaWZVdyRuawC5AZuzEpUfFvDCkPshWPF",
  "key14": "2T64F8kLX9AkQSqPR1kydQoUVgavKbTQRCNgK5E672oBTHWbdhjTVdtfozEN8CCJvTCrDcrmso1bk2ZVCcpBnr7g",
  "key15": "5V7W2Yo52ykAJzRTSqc7AZdNPWjmmBCctF1gJU9cRiWzUzaXsSSSSq9kbQQDSJhvn2AJnagNt3uPYLRdP7VRLbrd",
  "key16": "YyqYWQ72dPFn4XNkdLjrFrq5guiemafgrPc4vrFjqSFMddVpT5wemU1kVPi86UUFcv9gak2QiSj19C7vsqxcUG4",
  "key17": "37PehrieZTnuWLh54t7eUrHeWgBHkxPQMqHc6vvniT958GspepoEzS5XByhaNRWMxgpP3gRwUWMTeLR2UpwUs2Zu",
  "key18": "5QBoRSi6JdMQ4y5UGxFjpxrTJBFUiQu1KuxUi9cJfbmczACQRTWpNnMf4pid1kuGbT8woQT2H8hCTK3r8g7k9fHY",
  "key19": "Ap6nNm4tmpQeiELcjnyspxYHFZJoyK5saSunFwpFbBgscK4Wf4uLMoYH2ceAzRoypg9WQJKhECe1HXm7ztXMiUm",
  "key20": "24gDxz5A4kbpf8NHN2Xi6rgmueiewjTdM8aTkmPEgrmaMz3AWiN9XZa9LySrq5pydBiqukyNbgB77N6cmEJgVraR",
  "key21": "4xD8zspmSPxsA3atbT5XcyiNinMZEW73yfBRqE9x89HEyN4vrSfBCHhH2m55DvhiKnoB9mRunAGxvwCGg8T5ixaW",
  "key22": "5y4zMRDWUbb36bWe9RAzDw8ok7jYiYgZg3Ah5c7yjDPGorTvFeY3ZyNy8X56EaKeLur9437Lzf5fpbSRpoTKio8H",
  "key23": "4Wooi81DpzkZgpPnhJESrETgsMvxZ6DbiKA4aUnmc922pyBkdC3R3W8rtmubVSqX63NxQ5zAiMZNCza8QRGwBFof",
  "key24": "5zmZngqZUkNkrWc6kM12svxoMP3ok6sTJtK35tzk2TvWnRLsVxrrhyddcCCnryDtks3kyd2U5zkGzXtgUyFJNZ5H",
  "key25": "5vwLXncCE2YkV8yQ8vwgass5mKqneasgFiSrFYEzoSHeyA1Li47jjESKA6ZbWnVqCXvrfVu9hHauUS5DyiwY4qst",
  "key26": "5YA8gZtcziEf8ayCGyGKApgcVr3Lcku1HNgLLGoUAHYVRX9PcNEpso1oZVng9shAsSeyzAhzRCyaP8jknTdkM8nS",
  "key27": "5ra71pK2t1nAbi2cEGnUJrT6uptKRKpiXSQ9j4CVfn5eu7arifDt5kz1z2j8tk73R2ttbouWbqjXCpYewWWLbYbE",
  "key28": "2PaVheCpxy5uFmrENiryRvCFwN6ueit5AGWSZhkDEZFFuLdMMtBrDM2dZmEwahfcviupL8xWe2ysPfEfKHRtsXDY",
  "key29": "V9cnHWRk4K7QbyDkop7THDfTpMVEStE4fCEaNWHgPiNkh68CSBHQr9fVefKb9utf6AFv1Ffyam6xr5h7JvFymjB",
  "key30": "4QzfTuXABr6KsJbFQUTfqPuyicZ5pi7w2qy8rhQLTpV1R8QE5bXyW666y88Au3fVdHwdyXDEx4cYaCCWuxHgUcAS",
  "key31": "fCBQwnuN4iEysqoNznpGioMibhjapiW8DrxpHJoTmhnrPkWHV8S3bYarPvTSkGR71aMBvEVQ8MD3Dds5A8YcWNJ",
  "key32": "4ssr13MXBbo5behNd1DirLH6pCkkzu3H2fL9P1xQLuLEt5NshS43yyYSp1Ayfi23HxaeamkkRGMWZVVcpCTnETvv",
  "key33": "4vk6Km4aNWZKmnGHcJvkZ9ceaVFMtP5gDBhpjBG7GLZ91vz6kcvzp4oHPLuoUDmeSHqpiuBHmpSCGrYPWB8Xhzmg",
  "key34": "47XWfY2q72eFCnxx7YB572CHckTkNynNy9d4LvdNtKHjUvEMZqzTrFe4ouEp1mJsxFoqxCGdr9CRxobEMFc4Lmo",
  "key35": "4TSjUqWAyU3RUAWpVbban1ctdCmcrFDTLtRrtpAqPBSXmp6YtAxKePAjMuK2JnbXsSdJJ9iqU71UqTPfCLwqo2yU",
  "key36": "3PuhWHYyW6rmuiDtm8mRFzgkQFzN2r1iAtKuV9LyWcXvBndu2DFfWiSz3zRvx7n4xaeFgV97zy9dd3a6rJFP3BTz",
  "key37": "43arnHfHgCLQAX2CBnRwNCsND9NJzJR7WCe4va9HisJTF3qFcketWN1aD3oiKMAjjbN9nPJxujt6tQpELQrthsaz",
  "key38": "3zgKQn5yZ5k7u8xRosNA5pxpo8kPftMjYKz16jCPUMSDudbwQJjCzkrLS1y4KaBFwJvH9PanRaQRS7LCQgjYpT9D",
  "key39": "fSDjVXmfiP7Ret37VzDuarw75eVs527LDL444KwKtftu1LTCLMSGcoLfyW3E22hxrYUozgqQ5pT2B6miY7Jk2yU",
  "key40": "3k8k1VjVxq4Y6mRs4NUYDP1gea11C673VDvFUPmNHSEs6mQGqBfVtV61W68Sp2zXtbGziShwrEPrpiyCvgsasBDV",
  "key41": "4acVy4qi2m24ic6Zzyw2fW7bCNicx38yEjvcpHU4vreXcf3SkNey67W1zXAjUwwpFLaFa3PWzbrjLS4szEFnHfzA",
  "key42": "3hmee96Dau9Hei8hmjY5CUXz5FFUBvwp5ezxMi7QNh1s28NHLKYz8h4ZgCMxT2FZPEsPVnHchRYtQaZ7CNKze9M4"
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
