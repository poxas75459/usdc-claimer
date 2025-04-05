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
    "3EvFaLrtSAQcgnCd5o2zuB6CDEswQ1xLj9q1eqNvhtWpDQKiXQ6bjgLPAnnZZ48v83xt82ciDUTEMNXRccbaXYM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLb63DiZAMNwJzagcHexMHQRuroBkBjv8iu3kaEx4jPbQTxjYDj5tNDKcn9wuDdPoub1rGSPVZV3MRWw7uTqjVp",
  "key1": "2ufrmvzbbDzuMa8qV1GuMhYoath5pwMwHNhC2Jf2TQ4Ea8T1a1APujwpvAv5Fw6hZFsZEXHzZ4vuXqV8fY8qQhv6",
  "key2": "3AjUNVz4DpGcFxnpJLvimw6bnjAV9NAdKyeTxUSojCPpf1UWb5BT2FzwWkhrCUqBMeqfyHFZtZEWLBtiqPnqDesw",
  "key3": "4iCxyt7Ej6S6Yu82DsoPrc5T8DkC3LeuaukrqtKCB7UFVBKLSN9d89xXMu3TL3Lw3NszW8avjkkboHKoUMmoFMt3",
  "key4": "2ABajpWvtAajzvchsLQWEraB63gAbU3LSe9xvQ8JJ63mamR1sRwUXAZimiGtibNx1WAxiXbqXqLGX9CDkwv84vFj",
  "key5": "5Zruzo9RvdTTDnJe8Xb9boc1gPL7ibk4fsmXeFq6RnZoWEJWd5gHoe2mPDSgdGfbnCk3Cyj6vXtSgKmbSaMkFu7E",
  "key6": "2CbyoDB6LPHxkMAnsdRrcCozsYhAV4XgAht5VoH82BptWsT9mCDr1obG2FQubgmrPwnD9Hq88gswF9k2Dxu9AEQ5",
  "key7": "4BgedtngzjAxMqCfMmarXQc8tLJ8Dg4CNTXRqZmar2edKBEUqt99G2ZpTsMvCLVhdxDufD6TyU8HVPA65GqGdUhk",
  "key8": "2CCkJBLzeJk2NDU73RGXosBSd5GYezzqwYRLxKyaGbM2HUU7abVYUoC4mWnEG6UN7tiJvbnx8LxK6APfeVq4Ds37",
  "key9": "2yUkBuMVvLPxmjoRDKWriy1peocaQmGLfJfiHU5sLf47B1WGzL3kpQ5z5founQvMDxA8FfbN674Rjcv1s1YMsnNR",
  "key10": "5UPZn99DaCZw1b96nhoDwvwt6bQSRLQxzHd546GtcNXWLGMF7v4TYtnLdimBi1Lk9n9F4AqxerdqZVYmmJgAtsum",
  "key11": "5vfsZvYZJVUNoubcJeuUaoozP3dGqNYzVD6HiakM2UybPKssMXvuYC6pb9YT1CBb2Zp5o69EpDxGzavru2LyM6mU",
  "key12": "2p7CFCw2rifEWS4Zn3DYF2ztPN6iYDmoAKAWbUTmNcLgCM9HFGdc3aThFgUCxrhJNN2iDtg2cYWqSbT6zumGbTcC",
  "key13": "5sQWph8hZsryco3xKfL2ucQ3o3hZ3gAc5d5Ejr3wM2291TeVGtBvDowL7GgymqoV85mzkhxa6HUNKNseY5pzG77R",
  "key14": "vzAButeCPaKxsK9MaV72vWg1wo1SSS8qmLTP4amFrK8iXKDDEuuung8WYc3mUf2UrJqi4kCPtYcD4z5pbcMJc3b",
  "key15": "4Lwv4dqbLgQTRu2h9wvKoW4Jv8A331FpChzwgBFNmvhCZs649BL8twgVseSN6yj4F2Nz7RW3Zm6MGEaJssRQXuze",
  "key16": "4q5Sw95ep4YLmug3EjiRAYwVS3H3PjpSmvK81qBzWHHPaz2NRzKuLW4XTkk6VevETwAUQAe1HUNfRLRJ2UnVGxtR",
  "key17": "3YdMg4pzy7mJvcFbzmGoPsHZc5x3cQHM65TQqqhxHWMpRny7NimETMm2c1M1pJAFywp1dzPDTRxcccjwE2xK2Gnm",
  "key18": "3sSg6YwR26vARze4HTqbjuF4SA319RniUd4wcCL1Nx7X11v86WrJNg9oxsCaAsYhMY1U7NdM3bEpGy2XYLDKHfDE",
  "key19": "q44xf74LVYbwchUcmzAwDep4vq9fsDFHmPziB1Cff4hHQGNCDJXvktzCrntZvhdRwAzU2HCwBtsgMTKdFVxfwP5",
  "key20": "4FyoTPnUfQyksHVPJXpjvAeKgcheNxRHCFjtUh7JjMGgWadrKiBsg9Ld36CXKwHdvv6QwfRBri3n2RNnqVnAQQfS",
  "key21": "3SF2VftipQmNtE91jcBpMsgUdbw7PproUdJrzPkixqL8Dk1iPJkZLVngdSzj5nVfeF8pZP1DvrkEJmc1hrgWFajr",
  "key22": "5jr5ZezUU1ZFbWRhVumYpZjfapJ4uWiFe4dBj49cW7XKckDwJhsPtSPD55v2Us2qqrj4MEf1j5CZB1eY6trJxeto",
  "key23": "5vcCjg4ZLxjh8fKuvqAP7wteMMjcSX6nUxSiYuinHjuwusmJSqyCU9LkvqwZ9jiRriJyT7Ru9PRMCtnbEM3qadzQ",
  "key24": "5BBA3qoLe9s1ceU42WfiR62s8wTfq2smQMPMBX7bB3R7JkQYQheMiRKeWdsVyMYemKbsrPLD3ksrMX41kSqFssHZ",
  "key25": "4MEsgX23UGDw2UfRUc2feFeJj5NbBvooqaMR4r4XVYGo22H93a2CLzHPyjPXtJMEZLd11moUPRWjkuSG1b6f5xK4",
  "key26": "42vK14AfX4mXzJLpF44GKhsFhZaTyGB1rEpQpLcJrjxi2DJqaYeZ3tnoCZZWtNx9xUQgRqPcnPyVgnqD9AKvkEUj",
  "key27": "hVnm4aqNYUYsSFKfwtu714xAZQs3UeHpwmoeJTyT1uTBKfA5knRDDhVUH9Y3i1gdTiD8LLHMG5jefQ1TSNTqZgN",
  "key28": "3dbXZbvVY8cjWucg6HQZxDMnmgPuszfju76kT4MB8WwXgu8XpdysNUXL987AdLy6E5pvm95zatShtomSnX7WFoFE",
  "key29": "39ngY2APSGJ6MVpoTGPWsuutMGHZrs87yg2jRtrpZkgCTwK4EKfNyC2ohZmp9BYRk6VfBD3V5gxWPiJ3rzVPohgq",
  "key30": "2C7QfFb4dBTh2GoY5v3bGVzT7zD846ERx7FyaVTrdCDuXwCLMaRJ7Z552pLKNLGi1LDn64HezJgkKVn15YBbmxmd",
  "key31": "4i5uvkuV2wHf2rzH4SWTETzjL6zKTnn5x3NFBb2mSA3AZzJjusfNSsCu9nh5tEC7GjsAmEYQDDWzQPCs4rphY1AL",
  "key32": "4JAXctxqBQssMTt87DGme8PcixMrKV3Ex5K9w12UZTBkpy9m2WFbHTDvQ7FeRbxmBoTsnNTQarRNTBhaFrRrdNgo",
  "key33": "4khTMkjsfb7RihpkzwMSnoLHgzUFnnsgkeGyKJSkxsGx6o2fHPjcnNimzBwgqp4jSrRpBUbG8b9NcXYzM32gezBp"
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
