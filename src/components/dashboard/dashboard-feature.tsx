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
    "3psCNZZTMj531Se5tuAgsPoQAZTz4Egq5cqbCHFroexDRQzzduXxEuLWaGp745BMNmvW8pNiY5MBYD9hU32FS4i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29FUHf53im2xWRgiNQ752fmuFRPAGpNHXtKVpiiUiUMqBb8av8HMT1qFQmBNxZFcg1z6uBw1FPhf3Te2y6DZ4HcN",
  "key1": "2RL2wBmJ6pwCv1ANdWbMuLAGK7PkcTqBmwC1VgEb8zCCsiasRXCLBeEyuHJjNLNZFz5v5KdUTc824CzUU6ZBxWga",
  "key2": "5Aw5Jyuyd55fBeLnKAz8TZmiTE7FMgJp6ffBg2uhm1qdcf3cb1Cuu8u98UMYoXzKT7G5y7HqgwC67XY9SRyszzeE",
  "key3": "4gsjWMyRwfrLDd98BxjyCHtGFwzaTsBt6eap3rsqb8PjM2QUnA3F7NAVCrDU2zbgkNMURjR219RQyXPCo54pxUby",
  "key4": "i9dzYYo7Ra3NaRjjU17t9tMriKx9qn4SnNjU2kFHiWTxLSv6AF9A28JhYpJw8a1xXAkyE2B424u9ZdtSaoX2AZ2",
  "key5": "47yzAoujnxuVNngUnC6dJXT1DKNSGeD16Dp3n7j8CRykVqrDbtg6ENTprESZwyqgZLmb5bMYcqhY18UKcxDDaUvY",
  "key6": "617CrEnAFqXj7mqQQsbPDPgXZzkEyaAJvTvTDZFBNx2q8Fqqg16cirQuZLmzLK2iL5AVjR1MUSAmnXvwEUTcrAhX",
  "key7": "EpioLJbzhcbWWksrhBtWQWZHc3pg6BFALX4VpXVFt5Q8Nr5dXLVF1FtnEFVqrTqsGaz84ytYsuPfWMUTsuCfUH1",
  "key8": "27gtQZ37oBbLW889MqNHS8Myoj5od9jT29ottWXZDHSzMbsCEBnLy7wv1dp4P7UaTQ6HsjRFpk1uQMSo3z3V4k6i",
  "key9": "yjhpFueqfmSJoeAxMpF55gZPprSB14YykTyQ7UHjeys7ty8gCSTWbGdzixw5WLbpozg9CCZ6nRmv4DnYHnUDWnV",
  "key10": "4NZiAuwMzuEjW29U7gwNfvuQe7ntcwS3e8TjYMDfr9sPp57W651KhzSpg8kEVA1gB4jTxMVNPgCGo3RUyVtAZ6Cr",
  "key11": "4mfD9o8BnPvuP93wCULhr1JWgMf4wzLNFm3CUACrYkGzMnxggTBcv5JKLeFWmR372SWMZunGyHUJRRtvqWFPnCiC",
  "key12": "2pf1ZZ5A2L6bFZgsndbxPs8fJwru3JSg8brc9FAAQNubCtWm1ScHW1VzLf7YnRvBMgXwhqJP66rZtQ5dM2dCP2DY",
  "key13": "Rsfc2vmzvwKAzcWnUyrhgFHi2BnqNgRgWf4MTi8G1tBAKzRuU8uLtWVBSdDzsszdDvtsDQ4AtDeNmFLXZ85dtm7",
  "key14": "qhQCCSoZq4YK8LVuUgmotRQ47pBQU95RZaqdk8Dh7hfEquifqUNy2oeBvUSbpZ1hfBCfaAYn41aZJdFE8pqHF8j",
  "key15": "2dHDc39BwFDMsqoQUrUCajAmVogEbFQfFEh1cqfvEhPNpUYKqiFceppNeTYm4YukuHtS7Gf57QSNgHpvyhK288Y6",
  "key16": "hQL1Ac6nYVPahTgimFBoV9SBnmQcZgCrdG5zVnvCDi2kUPve7AFfsMdYxYW1xPz8TJ4956Dw9X4K6RZtiq21wrY",
  "key17": "5ePs96PYA9ukKUM1i33pEYb4dRk545JQfAkw8JFyHdMbihdbLpLSqmJawsH3XxAnPjX9sRkssibJZ9FpZwRQSx4b",
  "key18": "63J8gy5eBqoYymwHyXtX1QydLJSvXPYnxUnkyV5jm6nuFv93ZeZfFbd1N5vWiEGtBUE6xctJN33sDTtg7rgJMz1M",
  "key19": "3unfznopqNpE51FfJt9LD8Kgzphoo6YofbQ2gULC9fi4TpMMDLmEEth1qpJ3QidjS3DcodFwUfuHMLqGigkcWwzi",
  "key20": "tHKDunvukP21kPiAdjGMafNA7bX4X8sPa8JFCM2E8qqxYQeTKrUHjRnZCvuA3Uphd3LtHXr29webEowQuAfZwBY",
  "key21": "2CAnD1jtbPFgQpEhDfLztsQhT4qp3PShFLbaBNidukGXUk7LfBoeueG1wqcMUixD2AR6HGFm8vz5eo4optNtmV3d",
  "key22": "3F8iCZEVGpcZ9zh7L4d5HSmd1ajD8a17e2EUdjz3cTi3FM42MztAswEjJ5rrJbNSnhciodwbFKJafGQNHWtAL92N",
  "key23": "3472FnaRLtTNhdFVxJEQR2RGNCdB5zZWQqY4Dz6zfzPwQZQeVnWRWn5NMX8a5AWRgncdDyT3jZ22Jmycayn7EVfw",
  "key24": "CrrRu7XKej8SdcazoSRu2P2mN3HwWPiFcyXEJCrCcqTRsipoiQPEaYrgmFLEnARnPHFvBWYEkixaJk7wz71TuNo",
  "key25": "3JCRWHWH5KtAH9kZYxpxUDREMEEAUbfFWhyJfgwGwNK1FRz5CNM7WxF88FsEuQ61jtMAohBAPJLM8wLYYCUsyZwo",
  "key26": "4SEvJfvQQhP1rZLK5coJhc9iiTX4Uef7R8sSa1VBooU9LX4DtEiCKvi7zjjQXZjPXtbbUmEsKYHLmDsQKGYRfego",
  "key27": "5K3wB7mHdCcdWDQLqBqgTiZZu6LdeTAMVbyieZGLXVsRqXwqj1WLvv18zzEB28SusKRjBfTvtKNsU1W5AGzuoajr",
  "key28": "5oatKjvvnwtov5EXBaiQcmGyVZ7HuqPV6e9VsqAmc1F92Joa7qSN4amRCmFDPStNrLPJsxvjK2ccJgPniCa1CPVc",
  "key29": "yHwhL7b1ajFND8mvgmmwgJsU5vBjHm9XcPR27aNkvFubAbQkePrFBmQQkUpZZcowcsjpVNpkypkoJJijZKgk6yn",
  "key30": "4BctHDKrTVC1fnPg4aRVRxRHVzonatCNgxUgsCswNpvyCGSfuSy4bbe111xKEcYV6mJuvBzYR6u5jrKCmHngDFpP"
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
