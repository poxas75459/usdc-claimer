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
    "5ZFP6Q94LHV55VUKDFbEVpM5EHwSRymNfvXGJ89ycPwW79hT5vKo4j3PQmfyrK95k5qN55PbwograLE1pHrvAmB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJfeU2tWLPsEoE5HrLdkoZpdmyBAPMCxiU9CzdGNLwfGmikGcMMRxVKAfH5sPfey45chQZniNX6hzFJBbbjQx16",
  "key1": "WT7SqhNNkm88gWAoYbxiQ6JDKNYn6LMZ1KtpkAHPNX56K6VVm7Pt39zft8Mq2TH4eb896aguQFpBEoBDtNgw8Tw",
  "key2": "59KWjSTmVqcSutoGVDQY3q1shC3KrkCJgoNsRnmE4y4JbPGUHRwvqELFYARGk4xcDuHBSPUU6JZJy7DmXGZRNWhT",
  "key3": "3XAD9EykfgWVhUxbGNBbG9TS8s3jrwussv1X5EYdokodD6J13ycC8oFX8JZ5yE48nVprPRFX9Y4m8iFzaDmYurUy",
  "key4": "c4VPQM5X3bct4tH6KKG5MhnjZnJss3j7Q8MpmwtAvFwt2VvH2pu1bmwpnzEYEhddQj5sUHWXDb2kuWRg6Fruj4C",
  "key5": "2BifFyPWPmh8Fw7mEoCdAtd517kGubgX2MURXxfGsnoDCs8QeLUUSk9W838h5j4dT4rGw8t8ts2MAohooSSHk5PQ",
  "key6": "5yBv7mzZNpKBTbHB8tmZaGPC7u9USzcBUjujSgeJSHCzX95x6MqVPADAt5pAD6WKQ3X5Ec7RTNCHZ6sF3DmjQaSy",
  "key7": "2qRyjwi8kiVGV89gn7XXWTrWydf1EKL9kthPijge2KFquLYwyeT8Stst7bBeNw8WTEF7YPe8QHqCx1J2i1dD8X5Z",
  "key8": "21DiSnshkAhaKcbVYXU6PYbv6o4EGTuwQHXs3FWoGDBsVdLck8tjCE9pbmb3AqBbL5k6Ac5hGHMp6uruH2xS8wWo",
  "key9": "1g8XMcxY6y9Lt5RLNpX6FEGppiZCcsLrhNrV8kEaqoEWhTeQyYiQDpCBG9gQ3HVvypMR9Bqyba7ie9c5LyPu4ZV",
  "key10": "t1e5osvwfEs6AA8fwPzZ8xufn8RW86Ku3b9ia7mCH8Dju7Zs1sGiPBt7kfgd6AgAmnubQqMknumgNXdXcYUqnxh",
  "key11": "4ukSQawetij2h7y7JgDWwm2JujDYZ3XZnuq1yP93E1wcar9kquZVTiM6bAq1hqTFoHNR8Yv5N5hSzKZUcYDB7Z8k",
  "key12": "3yWsrV4LKt21ufQuwoTZEqTvu7Pids7zFicdhtPxoTxtMDc46GVHu9ammXkSETLKXoJrHSTuGkNUkkno3bBnaEjV",
  "key13": "5835CWCT3BUMzmzhFP2mb4DTGBdBd95G2kf2jDtXVBtUPoQpoQCimsfFU8ChXnKFTWuv8yCjsS8EgVKKUAUKavMM",
  "key14": "2HDtAe1ufaNgBhiNaG99sDgA6D2oRfCbMquBpnJPxezEV5DPdYyQ46Vs9EES7fVtMtTsMJAQUuWmDt6x8ERatkCz",
  "key15": "5tgzNNRQMMjtets6JfPwNezRTCNCxk6nFyVSqGdpb1UwCdbrgqW6671hYk43Qkq6qBuGsauQ6fYWv7PcjYY3Bjyf",
  "key16": "2zBZcgzDhfTG1X4kP6SKuUarr1EEcS73dU1bgvQYDDYdwhA7LCukeyhRVfYxeGv7UnpyM8Y43je5yfgN5QaZyMjj",
  "key17": "5jxWmAGfGWb73BJtP7pW6wmofDnXn2iJSMtbTq1Qpk7SHEiQje8vTpSCZLNRtK33GL5nPfpfop2AphKrNcCwoHvy",
  "key18": "2vdwQm4ZKaNbfr7ZzYNLbdRMx7wcbDLFrZqDW8NavGQFiq6vNSrSpRgJM673VyuEGYVvHvsVCCNDL4mBsH1a4rNy",
  "key19": "3ugAJWGSoKZRAtRTKcVtDLue1KpZMwXXaQFXNoutDQqDN91SacBFoRqEbzev9urhqfUMo5E91hPzm73f4r21xgK",
  "key20": "572Lo8MpBaGsDbd3M7oAVbyWb2RwCT6F1eLfqkkMDzUqQZXRzDmXRCrbNsKh2D1a5Cc8KMrSqR6BNXtKySDN8dA",
  "key21": "5vaN6AfqQWq1wHycDGcBsB4c5e2vNsttXUt3s2hSduK5bCUjW8U7AcdQcgQwGo6DA6Z2GYcGRWqs8TYrKXoacKef",
  "key22": "2kVs9PhR9rKimVysaaFBFHrBzqpqPGXWP6ikuW2gwJfABeXS7WJvThhnEfUDJ5SqvAujzzKQ1FBWgWpRLtN46Xkp",
  "key23": "MwPvAwyVMkrLJfmffLnsy1AmGoAunmJWJ4jWabrqQyacsJyLgDRsKPiLK8cUen7rcuqZ7en3BHDJ6pr1JEepT3v",
  "key24": "4iDfxehNBohHCmogXVMm7vGqfCHa6Hpbiynu9i3jKdF6je2VRCojGs5jNWB9H4Xc3Dvwt3M8PA1dHkg9UzjHs91h",
  "key25": "4CqgeeYCndSb7ozfw7GcvQY8QJqEMKvyHXV3759wu3ZBNVjx3esJx5DGWfk2QNi2GWp2vwpisfwhvyoUrEYipPWw",
  "key26": "64XsCSvNHdSiyG3knRiWEgiC5QePz4gpej5oPMfRLVepiEsb1d3gXR5fkVivJ1njG9vAFcJErhi5XE1zpofbXz1d",
  "key27": "4xt6yHVptiJg4LziXBumHd5HbQB3hDEmGvpTUBQoT8R8Ph73QjoDrAHo6UumsSKrXuourPBo1TfqATP566jMPPoP",
  "key28": "478hasmtAK7CNZNPJMAvEG3pYkBedc7UwYoNrwJ6AowqcjKpr2zmmugm45W9mJSB6sFFQfydmx16vNN65ZBJHoCz",
  "key29": "4gJVtgPP4viiaWnyiMKx8taejYToTFDZzpuyKQdG3iNdVmsBUKbw1MzeJJ3qV8J1tzN6B3sGKVk8SwuRnRqSH8qj",
  "key30": "4Yxpe68utZjA1P3hmhyCRpBBj19q9y1zftK5bAYqMcM6HDaJ79ASt1yiaN3C5EfWWEKBmgFVZqfp9hNz97XKQ286",
  "key31": "4wSxugERUstT5nCcXPVtrhCxPNAzYKjwqqDmhVwPtfQUCbZU3pivHxctxZRFn8CesfMKKrkMJhkXN3Lsmpecv27E",
  "key32": "Va27EeP2ERrewZis8GMt8FAphELai7wQFm6mUmbA1M42kGXiuWvPfahtCFrMaQvhKWjehgVbt3vKdHL8aDGmMuF",
  "key33": "HZbvoBBk7crojiejhLNt87eamnVUNdTuWyTGFZ3BhZNq5pYECVjUusn3ysEyZAHwT6wzS5Tf5hi1vaaVL6cEkN2",
  "key34": "5NpqfBu4VEG1ZycFS1ZDZfi7PHGpmx19yWNM14FKR2zFu54UhjDYRMrNRMV9Wxn5MffdortAFAfaSDMdNvnEekP8",
  "key35": "3TKcQPWkpQqumFx5Mq2fshhJ1H25DRwL9FG7wK2WrSuFTS6VUoW5Y5QhKPauUfiMXz7FNmu6BrNGNqLcoee8qitf",
  "key36": "4aszhckeVyqfw4rWta5bPZDPrjn8udr5pHv1hojP3yCxfFxe8Jk8EvvVS4tKQG4aqKgT2vbAPUZN1vDfcDekwM6z",
  "key37": "2LbgKz6VZW3oWv4rkgZ6RUfY1gn6zSMMW1AAwPfennYc6tRGURpkFqpAizd2mmcY1hEnZrBuUMtdVSmYUKdF5xP8",
  "key38": "5tsWAX3yBsLDpghEUwHoSi1Pw5NpgwVfdV37Dm94Uwnd9hAvoAfGb4e6FPECKFWtiFPJUYPverUC41iCrbshnnPA"
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
