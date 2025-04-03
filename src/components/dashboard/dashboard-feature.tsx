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
    "3nvBUcXvTc8jtJqm2EvWNxiVC8CM6CtVv7jRwNeezueVWp6K2DbUNgioeCZssC7Kg6tNpkC6XRH2CcdbxSznN5xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JAuVV5BpnJ4EcrmBrRW2pXDxKqChqSvp8cEqXURAFKPsn1xZhegFjdu9BNN59ocHWXAUTxpix9h2vkA478EquRg",
  "key1": "34dfdtHfTYjFGB1zbEMxB8dukveBZnJy3KV436YYbyVXnBuBnfLPViwSqQc5wLA9LNdKdK98qFHvufBLwsDC4W2v",
  "key2": "54Hy4tWuNFegx5DuYsjp5J6qBM8u92Mb2osMZMjbvHMvPg6a6CvahpAN5QEU85HEXbVQo5E8HBBbZEheiWdgvRG4",
  "key3": "rvsbsq4hRsKLuLCJPv9LpDMb1NVCNTH1RK8kEZu9mSjkmoFF3er2NuQPfMEmrmy82jhTfwFhPvWtsKErSwCEvEU",
  "key4": "4syrYqnY3P4H8xSyshgDPozkrmmAmbjEoQvt6S5LGySJagMjaVRA1tatssH5pGfZVusAVMWg29vFbvRq2Z3pDSXB",
  "key5": "3Vn4bsKugr46xAu6xoFGKyQfUj5aukMfycB2LZjQMpWpHrRTiuuk4Eyj6BJVPfULXeDMbDeoo7ETdTRnfB3V3ezJ",
  "key6": "41dkNu6dVjir4SCLXMJviNLq5SA9tEGv8djmv6ahBSnXkrrrsrV8tKFSsT27ya6UjgFR7ZLhXcHR3xdQCvSury9y",
  "key7": "23Q9f5Um95dwBC9XkjkXcTgqR3oAfhYG1tVxNNEbsk4cuCMwyTpnMETVYynHrc6maH6Vd8LWaQfPfMZ2oGwnQ15A",
  "key8": "5Ksj2ZgqJuffjGsS3cwEnCjpxff7f5TGXAxx75Xedt5djcpW8EqUk4eNMRcrL2Q72YiwFbhnBUrDWgGpYYR9YFbm",
  "key9": "3Lqx32zgMwCJn4JpMpQXWMJEdLzCvTEG9rJnHdDoUkPsP7xQ3cuGcTh1Jsg87n6neHgtu9nYkFkL5vabSKqL2iXp",
  "key10": "5fNRyaffZ3JWq6M7xYA8vzfyndRThHA9ERbUJuHC81dZdVTsTjrrxxSNNqYz7tcLSfa2ucbLuifYxR4ybAmGM7Rx",
  "key11": "68fmQp9ze28nvwJFDgYFt19q6TEhLo1gq7ATzzqcvfoGpv6NASw7x5FqXWdF64wh8utn53iUTQ38mpyKRZouoS9",
  "key12": "51C2sVLvxbkKx1iDiPKwve9m16dH8uGjSBoUXoTqHgXZD2PFQmPNk3b5j9VPXuGQrxBaZSzbbVcSEnriLS9aKJtr",
  "key13": "eyymL7qqaSwXmi82qZAB15UYNCRJNXNTLSSSRzGVvpTAg86wrpdfvwR2SNmHBeWw4Lf24ExNN5TAq8WJUzSvJp5",
  "key14": "tE62drCufB2SZTXbQsqy4RKJq3FhJWZ1xEJEZhhr9pnkJb5BgnTQbtrp638cbq5TM3ei85HnWSWKFXoUcBiFdha",
  "key15": "4ALuHNTyi8BewkLCdDbPGm2jQBwDcfy5nvXRYrekBXxpga9TKaXpKGm894pAmwqDubbHXjtHWiHndXWuTB4q94uk",
  "key16": "3SbmiX4HUAkiUFxyhsvNuGMZJt4qjQiSoDresUb6cUmw3LQaDM2HrYV1rpvMbRcvG1dkDy22UKViaDDcvBtXNayA",
  "key17": "2NUX9UBc1iWYo26Pch2vM3G1kqqUkLCqLoQY2ifAFcoSvjvAsuzY2dfi5MSciRPhX42dc7eAiaUJp5HbLqzRyGMv",
  "key18": "336sSro7jQgRo9vxY6TX7NGBnDwEiA1J1ehRwxnwDtsWgh8RKhysPU46fftsCAE4wcKiSxMTw9zCruK22VyDD5XL",
  "key19": "2Ptrq2TivVoUjCC6izXNWPH35bLxyTAvcNvz4NqeSWn3C7AArFDTbTvQtVyF21aqHTDAUk1rY6s2fUoFyh9XTQnL",
  "key20": "64jC3dXYRi52pN1JxEr3eYHrQB8Tcn9XjvuB1CH9uKAqL6ZeeD7rzz3oPVfkigYZwhLWUa4jKiT6cHckuxMFWsmF",
  "key21": "2AhhAMHngfkMdhifuBNmGwKvHNQkJmZNQrJhmhupvhEVJqbfLqr2JYRz9kS9TUHGfcGSDRDsqcpZfPsbiLakjbho",
  "key22": "3KFqxpRhEX8Ki1zHvHaByF5eAbAxG23RpzcTGTKdQafQowe8SLiraE8YKwbVCVbMbq4hKePfaysSJnmnEg1CWfSn",
  "key23": "5w2nwf2BQkVuBjTCctPNLd8d5zSKaA2SaCPY9dRr8rEuKMUUmLQza2Hrxby4mr2UFaoDPfb6SjppZaJ57gdfsR7g",
  "key24": "4LX4CiiQDriVzfr7DoZByncR2kiX7Xso5EkYeL4mgUzLvNLtDp9V3YvatxrCNbvgkUcJH56x5HcXpxLcJBPPpnqu",
  "key25": "541K2CeVsoQCkQjQ9dGL7eLLHmH17juwxgsxFtF4U1tgdgPgjfyy84zZMWeTHAUwbDVSJYYLxTDVRjRJa4WUiA9k",
  "key26": "ZJYQouzrMSYRgSBMEfMHgPq3amMQDShFoUNrzDuGMu6d2B9wskHNdAB6DnJw1rPAUWtCMH1MjZBG2o5Gr2iC7ii",
  "key27": "3daGHcZMAtkSii6AfLqi4ubcK1ws7PTB8UbLTajbEs3Q2ygy3ZxaGBKjiMuvNRndH4C8bWNXZ1MVYuHqSnCZJHnT",
  "key28": "4P7uA1C3ss3NrkmDFKscRebF7GxnUr5cqDVSGMiuQpY8eV1Hax1ULTWGRRc6hpThTv3AfiBjME1Vv731r5SHgjks",
  "key29": "3QVbj5wxgGqrJq8WBiPPqpCou1ThLHKs58VWcKy63bhy212ukGvoLtvWkvRcF4LuFXfvxaSFBbiPMvFSWNUDjSsL",
  "key30": "5FnEV7raTMbJ1bs1cAt6tHVZzG3W2W1hsdM6SE82Dy8ANurb7GVbHryHSGQSsMHfRJvVLnvH9bvTEdEs3qYBKCPh",
  "key31": "4BNqWFHcegHdL2ekrFZZtn9W2xJ5z6z9aezoQKVmRVMyd5wmKzUjqK8AL8nN1eppDatkg4xQedapxqmNYTqDv2UY",
  "key32": "3AM67uGLCzddQwFmZqEMaVN26C3ti2kaas8PceSp2Wz2pU1NFBLse2T3nA8VbEBxEKg8gbeMtmdmvmNYpjrvTNsR",
  "key33": "22v8JezqwCF2J3ExkRKxykJm5DpRXK4dLMhxroPYYR1G5tsAcDf77m54QyBsMubWyeX2HaHWeMFs7KRmw7EwVUbx",
  "key34": "3kXiiW9qZjYqWMvhTYGpz1WgLEgc9aQ6VHCQZCXeeQ5gCHHoGADJ5ier4G8yQ9TVHTb8fg258GNYQ69L7EymNgxU",
  "key35": "ujLzZifXwmGffuNsbbBdkaAv4y4SoGMSpzFHVxwArrbMEiXpwMUaSuP4PeLmyyWLMzgp7usSDLSQg6bCTzjqsM4",
  "key36": "4HEKtybieM1v7LynWnVLmkmk3pL82x71XvJEviJr2VwvYMJaJ4ea6rCCDEDJ4UAg2xqGsjZN5GMjTFqVVff75Bnh",
  "key37": "2cbPMjSYzqjcimaz3L5d63nKoNmdhDK6LaBCCKrgWuVWWK83ZW44AwHBXtm2pTvRy8RDU7BuaEiAsUe2am23xUwK",
  "key38": "31Hg9an6oenGhEqpfugTkWqprcUN6GLNCUpj4ZPRMFimxS14Qe1AUgBPy4hUBL7aF2s4H6ydyMnrWNN5dngMAx9U",
  "key39": "3TPLzNbc2tYkDzmZjF9xSMDPXQkSgXjaqk4hBmazyUTSPRdVmTtiD9CZs6oLrgktP6kw8H5W5XFLp3w7Bzt4PfKe"
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
