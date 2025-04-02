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
    "2upXcF2sBkDgLETYS4mjBcmF43jCVtFNg6nwYywb9uKcq5zRypTuRAJR76aouhP5GBmR6zPR9k9TNSQKEjr8wVGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mi3z1bP8TCKSp1wwCV7GFzFGYq5kFcs9gTn3P4afawz4UcpeyprdxhdokityAkJ65YvzKE2yYT6yphgnECsoGgg",
  "key1": "5neNjTwN9UBkqZFehjkfKZEZNFT6irTdCngvM1aYezG8yanTH2h2Rvu6RomcvVDQD4eVsVe7JyM3ZaSe1aszbk4z",
  "key2": "2CwhH9sgXe8PeJTkA25sWPYaxsecdsJy8RyJGkYDVY8iyru9BNhh3xZaKsRMEq7oNUP4VtntCUzQEgBWDhiRQ2CT",
  "key3": "3NcPcvd3126a1R1e57FgPh7xjVp4xSyYaueqXVLFqqn8oQiFRMCCLyzCUGqdDhJj4LUytjfUz7Fa2gzeobxJhBpv",
  "key4": "sMv11qQokq43DdyR3Q8EamNvmu5WxPyRvSnG5ZuEY4eAnm4kV5nKc7f27spSSwexy3NLsPvRhGW8b2wMsu4WTJ2",
  "key5": "fdWiUGQ3jJUiriW5unFHFQBM74QVV47rPcZMEVkCYfYTt2oDEJn5FkobzAogM3wo2tg3se6USNepNj9uQA4gmy4",
  "key6": "4n6zRF6eP5m77edPktdqLnDZ3PXPNtW2WcZL3xHTkCRoouykLGgZoc8GPvcMXTu7nYoty3Q5u2xkeJ1mcWCw4Hmv",
  "key7": "5MARQprQwNbkh2rLSmNG4NeUkWPHcWY2MBjoDL3vGH3BTBXaeRyecWSAt2Xakk9DHyCUZw5hat7SdRyyviTPn65h",
  "key8": "3zJpJZKtBe6RboZRkbA4rcusqTvDu7yYtVygCCERm59peyLNWS9JisGgpqsW786rtimhbQNT2tUFA6m7wp4gafwb",
  "key9": "qcsNSWDdRdGURu3qsEbErmPbKCMadJHEerYtA11ZBWqqsxeBFL1WDcJZGceEnrLaS8CvqyDhaqoFdXvGNwHj4vm",
  "key10": "3y5Yt1Dho4FmFeLnDAtqeFZ6sEjeNbaSTGf2d1tpE8C66pUsFo6CL8sBkiSi9kPs3kXKPkS9S1qqJGKXcEBesvas",
  "key11": "2PydSRtafF5Ywo1mjtYXhGC6WZyHrDUfwv7y4UkeMhefkdjVqXGyC5BqFnZkhFfAxNNmFTrGRUTrPPqBuZ8Gr9hz",
  "key12": "25zgwG8rKf9jafFwTUYfdyASR44AckxQfm3yizZw5gmqdBYjRCd3bnYC1KzndwB8ApRFjjW63pKcgP1MSZeFvdM9",
  "key13": "2XuGvq2fTh8VHU8nL1NxQVpHZtbwVPtd3mbLUjfgsRPftV76jWSgi3kp6zaeSgiQGRV6LBVFPvupz7EeJ723aQan",
  "key14": "4UnFqhWcq7sgHAFBUEMpALAA4oqMj2DyWLSBVy24ZM5PVJqhYNR7J3MRe7bpBGbtYFb9XpB9jfM1RXy42bHYMqRY",
  "key15": "3CPne7KsiyBzVPY81WWLvrAixVNGJhtZVWBKdb1K4iER7cjd8uzticbQTJoq8LGf2KV4uPCuHkCn8GjvCVNTRpAV",
  "key16": "59hkHX4UJJBaTNg63CSrWpz3CiC4NcRdZzUrxTjp58emrvcZZoFro3s7HbFui4QWdAU69WNJ6t1X3HW8PrPRGnjh",
  "key17": "xt6akMmgPhN747BagjUUu6fTixtN4y8esGw4xYi1qKyMoWKdZ3ni8a5AhcUpm4i4vX1f6qaBTdQJRiwV3nsWJZm",
  "key18": "3Rk5xk1AupnqiqPJuwt9cFKg9PAGoiYKySyKAjh8ToEz6Ttt1YLb2qoUaTUQ2yg1KfTDx4XYYKEEFHEx7U5XRGa6",
  "key19": "3BsvRvQNS51vjfG6ffPu3d7yiH1ue16CyPWugzj3fWPj4fBK79xS3rywQiXtNs662bKdswQNSSXmnro2QhfMUG5V",
  "key20": "5xiNGxyx4BaniyeYc7nZ16MSUmU6PMrZui2jRAykBgS7LhDw9NEShjkuro27L1ATQ695StwQKLHkVSqPJRxHhypP",
  "key21": "4jexxpp2W7UiRcpcNqshzprhybmNNn9eZ8LpfVuvjyesp8duaUD6JND78wADDSytLiGbG6h5mjUX5qJeuMe2BwvQ",
  "key22": "3xEZe4z86k6GBCEmsCfDA5U63cHCj36FqjMcq7667NhCL165tCtL6wTZ1DvqkD1aurvK3v5ZFTcXe5Wdh2Q9jPxr",
  "key23": "3mNEvWAbkZnnHxqufA3qQWyYifDSHwwRFD6zvczXZVeaLDgzhZMyV4RNYg6ZkBTMJrCvbxzkctMAbuH7qgrj9f8V",
  "key24": "2ZoHTa4qWkvo3diboX2JrnqFxNqW7gNveujHgJc5DeS97XmqDuBXhVHE3YhgxGy32fyMXSVPqqVX8eoQyNnuN1gy",
  "key25": "2oRPgrveKUHUg9o4481L3aYkvQtTYNuVHaTQD1Q5njyXi57nmiYwA4bu8r2EdjBB1QAbcs7zs4mYXmpDDm91MVZP",
  "key26": "4bJhVSyhamD2NkYBSmdcSVsPCQJo3E9bDVYRbfjs7pn2TaAFzqzvHBnhjuLxxpiT56B54dYjw1ExpuEbfSRhihDb",
  "key27": "5AR6a8tAt91EW4SmCiYo8xVxgeayvxhgXEW5Ztb44Rh5pJg1G4ixTP8kVnPn9VeQ2D4Kv4ThZ3cpmhLKrV5fdZSV",
  "key28": "1drYZ1Z5roUJ4KtnXLZSkJ1VpxCrQq5kakK2xihWvFm45Ymzz4aQ9vKFLBDHjKZGCF9megtr49zkgMX3nbhDC8D",
  "key29": "5KXtpCgRzJ3dFHFhxfLJKjkvE6iNW65zCPWEiD2ph48m5aNAuigwGHaRzYssjaqQenixENFbiwugz6KZVZ4EZ6ZQ",
  "key30": "RCq6XTGHDUvNo6E3VwanDMGauiH6xkQnzh46ceaxUvf8QEDYsAiKSVqr93frUcviFaJCVSBH5QYKvR53S59EKci",
  "key31": "2RPXjUCHjwntcjZdVoE9g53SaW7zXmZkHvL38vJ1UCzfNBPYL6wdhXbYRk4csH7fJfQ6fFuVJ52qhuMo57Ea1tiZ",
  "key32": "5NH9GyPZveydeXQpkkpRBDi81XMmJGJaZY5WEQ6Hz1LRXvqboKxKr45NgyxeVGv6RZWXBExRmVdmxi7SbVDEQ7pY",
  "key33": "42DoATEvpkaDfD1pLRL2rDiWsHMmvUtBHNwvcRtpred7MMWJmB625K8npVL7PaUrJZgcwkS3kgcWHL58Mk5FWh2V"
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
