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
    "graxqVfskU9myjJTxzufbPzFxQSw7bVxswW38vXaYKbQ5FNwo8ajSrFBGZ3XzXqXKLzK95HF9K4W6nfYMrgdiTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mWSaBjyJMedAEphgVFjxat7VbnS3Kr78pqFjx3SUL9uEubXKfDCGMbfMF8s9fmrSgjvi17woAaVk9XjV4mzEECJ",
  "key1": "tetzP1aNUSRPDUGeTsBeRSGZpBp8iXpZUPfxCWmXjoF47xbBZJMUAR5WGpcviXoKgy7SMTEXM2SPnkzQtuePsEm",
  "key2": "3wAZJTcfePhsu7sVeTFnZwXNMYhbz9buGyMMbMAbQxH8qjVSppVZvaAe1NXUsmZ8FHQPRNM2wz1zbGhsF8WQiXVo",
  "key3": "gpip34RiqpQyitoNMUJcHZoh2PmK4GLLnwGr5agKrjwwgPhocXr39xQWS8Jb4pcVmVDdjPtpQbH6gM4KhpTG1so",
  "key4": "65GP6THj138V2taunfH6bwafv2PXdazBeDnbhatiFF3SukHEDi73mtFLpW1zrKj4DvNFKbzePnYF8b4ox6pcs1VZ",
  "key5": "5VcpjypW55FuybXtoMsKCb7n3ddcAe8BSc2t7qGT5pajt4mWLAceZ643bbmc9jRVpxqnoJNZby4iXkache7ByjLM",
  "key6": "3UM7jAjtWAUBVfpigLnuaNiaEcvzPyUvGq6YqEkedSzZ5VpR4yvn9XTCXfk8EnrnBt8FSvR4cQHvEoUMU3gjUtYT",
  "key7": "44Ws5Tt61aTkE1K2vVfsztPtvuRbhFJs1V1KzdBDHPB8cwbhTmzpBMX77ASDMpzPaUXRZv8Qsw6Uc4LrkpTULorQ",
  "key8": "FXv9XMEtLuhgHSqWJ6BAH8Bqb3z1gRuFW5xhXmq2fDx4KQv45GZqVXR87gUanqYHbhT7EmqAy1ck5sPfN8cmt7X",
  "key9": "U8aKEAKLsUEdKLGTWo3PWXP3pGAeGXBk8hpjdo9j9uxsnfZ7bEKE8ot2C6CBekvgg8hasbNTECPQQx2A3AtCTnZ",
  "key10": "2M1rMPpwxLcpxGJzXS3LQcJzsFsd6dE1ZyvccX5x4NNHUntyyzuv4kyYb2KbfuN9ucZ5g4vufQ8mustnP1ZEQjJv",
  "key11": "2yjeA3SKrVuxLL62JayJUbVoG4rbWPiMkeQG4fxi3ALLnqyyPydNfBTEFk57BScaR1G6dFWhmhWsi8bp8kJbaD1z",
  "key12": "4fvxptpkne1QFeepe9a9tcrQFfMMQqn5DeYaDrNAvjDMXs6u6hGJpw4YphC62kemXwcmTmrQDtvh87W7WrgMPb1z",
  "key13": "4yW7DWNrxaaYcCvSGcCuWH4SbfVtxKcb7PBEL4NqpvMTAjqBAxCHzmEWYx8exPDzSrLYfmqobQ2xnvFoebDo5fAz",
  "key14": "2R5LTRNoij9S52gSJ32FovNyRf7BZJC4gbgAb1AjJSqkam8vsyNBcH2gS7LSbXKVDQCwB7vBPiRF5UKNpi5EJaJb",
  "key15": "27U4qWBez5mpR5mytKtvbhYyUFzSqbihM9aRd1HPPpKZAnerx4iPqDKA4rjwb9gWp4F9SkrPd7K1CZY1bmHij2F7",
  "key16": "5w9qiqf6rNgdV7MEbiCcYoD62DXXShzGHjz97w4rKNZRhg8TSjboxTm4M5bLwegC4oReTpkEETtLZxRrmeNLbx2c",
  "key17": "5PoaKZMhTRzYUjmCxAysMxUaPjKiCUSLJi91u2aJBzYB2tM7xxwJS8sh8BdK7oAeKYKwKavoQ4y5LXPrcc7TSR4p",
  "key18": "5WEHsiHRdZ9FyAefkQ6DPxAbroLjWhcssP6Kr8Fg4m7wz9g6efKKHAayiaJdb2ND7JYqHqEoh3MRUy1pwCFxKVw1",
  "key19": "4GV73LMBHyV9c3ghuEpbwSEPocHAycMMyZUMRQgYngKSV36MTnK6wAPy5eNjgDAXDwjgY5BF5a24HBs1pYhgyZGF",
  "key20": "yRFYjdX4kTfmHG5iGgrVZdRYw7f7k3qYGdnX2wTgiGdp1LUTKGtCgNv2DtMHGeHxAKemR7SfjtvScSGtbJpaGpM",
  "key21": "5cxaia1fpDaTHmoWWcpi16C8GB6LBashpdhDab2GQAgC8YbZ9LLBGcwDRn66zEdMeuD2XuVKcoXeWJpftfETMbty",
  "key22": "n7eJER3iME6KqXvBkwV4vCQWcFvuz3w7yRTNH8cKfqvUmG5bjqyaCud2pnqUJRSTwJtRenzEWrUC6YrcBf6ukYr",
  "key23": "4s9G2QE7NizV1tvmBJtPSns2YBhKMJqzFXST7hHu2mpzZiYnxnAp14yGbCWgRwQajN3KsHrw3Axf84TxHGq7JyxF",
  "key24": "3NVyeThCP6mxEX1AHZpvAx8Lg7LxQKbbtCRL61Sy4te9kmYR2Bcn7qiH7KHdw6K2xSEu8fijHv6Luxg2SdMuL9cE",
  "key25": "koDLmdze2grvW62JHqGA3yiWEPbMqoNf848xLgTS5PvVuyNR6xhy8JDE2aseJwZUZYLE5V4g8Jej5YxzbSe7Ssp",
  "key26": "3m3HYCXVmQkjQ1CwQW2FgZCekZRzTtrCwx4JtubqmMo4CEzaQTCSWsGW4xtKqmJRFiveVBjNrz2L7GvVHWaRsXJf",
  "key27": "4YPVbCWeVAX3joB17vWBJEk5PMk1QMR29ouj1wzMPw8rGP3HjDFVYSjdu1i8Pj4JbbsFPuSmt8k2A5Xz2NYBU5zk",
  "key28": "4bJNmCMCjPT58Xn2H2kfSi8yocTxaz1HDUHa6gwii3WL1SibQzjn6Xh5Hq3TyzHeAzfCFZnsvhoNbHhtbrYmY2UP",
  "key29": "5vzSLbnFSuxFRafFa8pFAyFXfQeGaXntq8etE4c3RCaHvZoojzecVMDqHYdWmsjQxmBcWVbSAaCp5ER6tqWSsQ5V",
  "key30": "YQJ1eTmBQ6nyLwvLE1fFLyTmgXSssqTN6SmpwsJEFhqrpu3EzeTGkpgKHFT1nWoNa4BrL4ibwHF1F6utsKF2DS8"
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
