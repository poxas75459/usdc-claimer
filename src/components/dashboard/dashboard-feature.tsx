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
    "3nWRhEoDC6JrHPBBSEsfJK44MTd45mKQ2EKBshqXCX6A9jwSJ4hDXTUtFTcoJVP69uDJReJ7syVigWfQbxsQs8Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HFPz5XS5CPkqVgq57NRnZ9biYdMCDxRbSKvHps7Cq9NLRGwdjE8cThpnrF2D6s53zgfkYqk6ifqkcw3pZupdtvU",
  "key1": "4gJ14e4ECkYvsUfRTMfxVMXFp86gwF3AsBYc7WGwrUhHpxazeWC7PkizWyJ79kCaoHvgKeb64NzKJ38GLCdkZ6xY",
  "key2": "2FY79xtz56T9e5H6rYMSWLLgeg81wWbiw3bXGA4W3v3CvH59FkGG41Cyecjtrc6pVUeuyoC9ZVpZF339jpapH2uS",
  "key3": "2cnjUmDMZwdQsgowtPjTAfTrbefJSx3rMZqCWfPgRSDuaLJUjduugwey7hgiqKqLGUrPWgoRRcXsLykWwefB9sFR",
  "key4": "2gXNfCcnx4J4grX2q19XUo3QHkaKD6dp5quhXn6WENfRHUnA1DEVEfd3FcwK5iq2Puvt67ZEcBh8skbMZJAwzxMj",
  "key5": "2wZSVziFEp6zShHDNznw1yaB8ahHBVoiU2dQK4FNycRwxASJ5X8e4dAvef5dGbW9qgFcHLW9DyUiTN2vfdBDQoBm",
  "key6": "28Tf3X2ueJSr1QMCroc9CAakrPrvyifAVL58GMVKz6u3FqEvFagymzzB8QZmvG6fTrUWtZtWWBYRrs7ZsCdaXeY9",
  "key7": "xDxeMYKuS4pFezaCDHvSNRQNiHZHQmPqave8eoc3PmNH7BxP5XgyMVp8tGqKwSKSBYvCLMn7PWMiapRCxz76AQo",
  "key8": "4KQMpSNuTSfJbGJ6zuMD6RgJy5pSSU3kgohTgcBgBEgb9sWJfEwbmnU8zGsoKN87NCmExD3Mc75SSNNBJ4gmyFMP",
  "key9": "Mfdb98LDLceWidfGynaX4GjgzF9eapc1iCzLhZBTwUg6i2HLcVhoMLRRMBkr9zG8mZbugBBieWow8zs8g6b1zEC",
  "key10": "2hDYBXpBdvUwPE9MKr8BEe1jhMKJ7stMXcsAch5yYYWxe3hKTVXfncEoFJiiiHAGEui9YXmbtNkTZVYtFUEqq486",
  "key11": "Zm1nBFUtQN3cN9bhsBkc1TAJoMoidcYBErZqqCvYzaMwmPPAAVCQhf9ReJWERN7WMwccMDM7EQvpjFx29awoAvd",
  "key12": "4F93ExhTk8Dr7uJGDwDrpGSMJTKuXcfQZBKafcBaCmUfWY3EnHHyGBizZ8JMgPRNN74uDTormMBfE8VgTJsCxwpp",
  "key13": "5kN5Pucptwd5bgjTibfZd9xZFq275sRZas9yhFYyGj8GtTCyWb1r5m33gcLHdVdWALWjqQ4FETeisqSKYVN6kG4d",
  "key14": "jVbGg819bhDYmHgGpZUR5eYrSgAbfiiLioEMW82bc28wfvZvXZP8LKvUCRZf7cG5ZacB3ebjaJ2gXLaxE1vSueh",
  "key15": "Vtbp2nMznxdB66XRZHAwkyfzWh28Ydo9L28LpE2SJRcCVJD8oYHqmW3WdLLFCUXisZ9Bo6qwXrLNzxpE6e9vsmj",
  "key16": "5Qm5g26cC8oBZWk6zxEsnhStDaycKBXWFtgxfDzBXouFwPJqLZbCtDbYzRnVkSWcZJVatJwdW8vNNNHGrvLyz4Gp",
  "key17": "27QKTBr6PvnT3MCWdq7PSjNtSroTDpCgVWAbCiFZ8UmUgYMJ59hy6aMpzvaLGtkCSdxeLUn73RghLCx7xgRBdWuh",
  "key18": "ovUHXXkTVm4jPotWh5PTjtKbHoY2nK8sNCZkewpymvwEW55gciBDaXSwNrx3581wV1kYPUSgb9KQHFsqzDz3Bc7",
  "key19": "5EzXEebz5UwF9sFLpuCzzK4FdWQTh8ddMXcoYsbswishy479wBV9f1GFzuwhhLYkxdccVmkuCwwGtrdnWvSehyZp",
  "key20": "DqP15L7bK7t8cB4BMCPinGtrpLPR9b16A1hL17RHgMz5fDrZTkhSD7Kc3AUCVAp8oDABeLXX1qbn3cNsGjg6RRe",
  "key21": "4RT5DgrzTJz1i843sabFYwgups8eRviGohq7mPY23JToA8ZL14be1uL3GXLV6MHxYGaPFC2zb1qHg8Waj5KnAnEv",
  "key22": "3AKuuQwgkAWdmPrQZKL1hqKmBbaGFqLMKTqoQpWtLZqBWmGkPh1qH9GQs5KTC3g7B8NZcwFb2ZwinTqewJvwZ2ar",
  "key23": "4CTWebPj6QM3AT9meydZCzGb5pR5iQwuKzQrvoJPpxkAi2jqP5QHBWiD23MugoFvxGYfdrsZBBKvFxdhNGoyGgJ9",
  "key24": "67hLeWuYhYoxuMZ2mkizMDSeKLWKwLg7ybCxeakDexmDEjdYPPHwrZ6GPQu6txP9ikZyhK3VWjV64xgi2zBEQxMg",
  "key25": "4RnUfJ2iVyT6Re65MhaAC3F6gufyzvj9BDAp7sjGHJ8EbDvMM4o4rEMqCu6oayNhWRpBMoCSYv9SBG7GLw9AKfeR",
  "key26": "5eQyzsRHu2NfHDy2hXviTBiEEoaCCRFHvLc7rCoR45JzssRnKiSCPbf7cJLsKTnuwnzQcJ3owM7RoRayVKy3GvvT",
  "key27": "54aAoz1Ft3zim2AfiXGf6Nem8USuWzv3YsKsxwdwiCBQJfcJKyMujBBtxVNNLpghJwaAAH8aLi6eo4Bx1PmBmse9",
  "key28": "3HWDnxwxR1veTa7uhrMLcWWBwzdtkCHULdW3x8SyBXZCYXEARYKi4Prt3weHYozNHiHe8ssvYUwbSQuV9WMBswsg",
  "key29": "5D7e91QqdhHxuyDLjCB9aAqBekaeDm9ahWwn4xy6eqqujJBBFU4cuJdttqSbkzYGt3ULX8vg9RxCJSkskbt1GdfX",
  "key30": "6FRbcmAngF9G99Zj7TSmHi1JVydQZW9Fp8bXYHkRZd745iF2MJoHwXfPKwK7TUgFyDB6B425Sq8awjqu2dCi2cD",
  "key31": "5K1RVgPdejUmwX89yeQrJXFL31sfRSjq95iBXWkCHW7hi81Y9TNNL8HMGSuWPdbCPGnxZEwVVqsHJDa9qrBvzVcY",
  "key32": "PH4EEXiCpcfZNn3sj1LaU3Q4ou9XBcN946V5u5mzyxJ2GnUtpPRAgarpcuD7cDZj4xTdAUpLhPkerhTvZkfoGwQ",
  "key33": "5SczAoi4uhiDXmdocYAdzdBicwHKAmzFD6GvfLWda8w5pspb3BcXZfSKFBxVFJ9oRLnGETM7fNAvs6BV2jRVrLGr",
  "key34": "PC2SFPGELWRieXnQUKKxM5kUEw93nGEG2ig4MjpWiCUTR3EbFju9WYzsN4iKQTU4nYub4eF1AbEp3ujyTUiWqMf",
  "key35": "23NYbujJr4VGJhEHs2xNZCdGSVjZMKLpEhvVUnQVVZHpG3hYqYsDWqjqNAznuAYNyRmd9fTZbWUx6u5PG9Q2eUch"
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
