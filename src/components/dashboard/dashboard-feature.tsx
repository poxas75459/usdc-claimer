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
    "3TVDQDwgdAmXYmUGfnHC5UyCsdNTmGPWDQYbvZtaT6adcxVuJWXLJJ7CPgdGMA77nBXyN5KKxsNJuABE4dVse8SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jiEziUieqLytrR3PKvEdHycwe7kfWDnmjonrbarnrzUBWUseLEULaUthR4TJM2dpbVTCjXESDpni3eTmrGDD6NW",
  "key1": "4W2DxedL5y3hXosxWveWavgrZJB5zVhbKLQXc5qS7GAVC5CNHGEGVi35yB2kVNyAxz68zkjvmnRiNRJVkE1gP7dq",
  "key2": "3G1SUMPpXAnjQRp3PyPsoLfk3KHPdcDZbSVZAL2ek7gRia6CDphzUHR4nua14TgD6sm4gbK6Nh4EgNCGcCuMsgxB",
  "key3": "PVe9ZkRmhgHRmP7VPmQzUgSDV8Hmbz4WTYcnJUzHajdqJqrmEvvxVSTZqnMEYCmUwn2zMLmcqcuWf27Nk93MFgk",
  "key4": "CXQLre8k1UKDT4NeBA19WeiUPrQ2cqeocLxVepRzPxwsBJGbNGj1YXsjudcDz2MLcGCfGeSpc16nFNGpxZp95zD",
  "key5": "32MCkyEwpJqZNJL7B25ZNbeGSLMa9BU1wRSiHR9Dw6mwXuZqViyjVJ6wodLbjrMyuonoR1y3eNAJ8fQvdkBPArn1",
  "key6": "DWDhZhCEm2S4pQ1PtxMwLeWQESdJXbJiWYwnR8LbKi4HP7KmvcwJiyHTdYd6sXbMpKV7crNmnz3cH5q7UGsmADq",
  "key7": "sTZDtwH64V6cLpEG4RCWjmp4jhEuVZ1MfxgAwsssEKHqrQcaPQ757J5nn86uBpEzgPRSFswnzDSxgUH6Ai7XhrA",
  "key8": "4v5jVNzwzrkXf5a1SV5gcYAz2iRGT9fu2YiJyEUjdYzu6px27gaCELRVBATP5QtTDvPhDARfH7F8m6Y2oeXL6JXH",
  "key9": "3ffy7WDzfXhzbYbvFBzj5kD1ySJZMK5zLp2t541syFPp3K7b6FDYE6CDdpwXzim9Ayko5Coeg8841X2cAdJiVaBi",
  "key10": "49owNYP9oJnFzH9KhgABRzWoBqfqMox9cUGCZTYeuVYeX7pXrCeGkE6Yuh7cX5HvokKKWw6UPAjA1UDTEQ6kcKAY",
  "key11": "2uawC9TtbbynZ3TzgsCx5hdvjvav7kGHvm5KCcRRaNsLxQuW2i7m9NVp7ojdLpWRxYrDxPEZdyWSiS4wmDASKTSH",
  "key12": "29cqc2iw9Y9s6CaETa9mHsGBuZ6fRVjKTNNQwo2xmNQt7wFf1PJfwPnHf4E4WUtsWAMBzyx12g3bpT3TeAQ2TGW1",
  "key13": "2EBpRJb9mvwUm2VDfWz3Jw8WjK7sicwzkSks8u1YracNLHLUXu3gBJZtZqfCLnAHiwT9W1xosJEvp5CPyJwUTNQ2",
  "key14": "3zG79sNjHQtyAGx8GhwUKjCgyqGyqNyoCNgSeembNC2nT7tkiibTNwM1bjDdxWSyHcut6ngQPMDXFdy1r2VZZaCq",
  "key15": "2K5CejWxdQ1p4auVHqp9uspK58KPKr5iqqzvkvUk6PxXUR4VDpdtZryPMMpDrGAS3dFC8FGDjepqgdZe4W9LNQ3L",
  "key16": "C9aDV2iNzqNA2WGTuWAKGEsqyWg1Wb6Y2GGoTXXJBysZ5fmN3n6z5jLhHHSJSJLxDwkwe7njSj1KTAVk7SLnd5Q",
  "key17": "Jq75Cfgy68dj5ZeUyniENjc5XZ6yx8VrKRX3M3rpRe8ssnEPQNBjxsKutkBY9YrmeKcQzxwVQEEVEuZhFsgXKLs",
  "key18": "54PtUc4PYvrMLvmfP94ksaRcohYSogkHsbm8gCMDAbYrAKjgMGmrqnwsKWCUva5jyaEZFH9WvwnamEYNqxmBYcxt",
  "key19": "4JMuDRTe9UeStbq9wAL9xGq3WxgpLdyf71X4V9qcWFrxNBKb1YBFT44WQukYvQidb8SuahBMqNU2xTDEz8atrjXb",
  "key20": "4KZCVYFB3kuNfATKK1VTcgxz6Xz2uJY7eJgpwAXrkpTtXPx4trEJ6r2NfxnMuQp2V6jea5x6wvs1EZukZKzLJh2X",
  "key21": "XfaKtziYcnozSmPcHjfDg7Wy88xDJULX3385pefzAj2Az6fQ5MuvHpZP2KvFWGYafs9REKdMrd1t8G6AHPwRZET",
  "key22": "2GGxJrFiZHf611S31REAiHYfKnVdkjsbwaeUnjtna5tRmfM227MmTvXjmzDkagCPWV1fusoNcZco6GEfKmx5wuCn",
  "key23": "4tA5K8Y54qvZCUxr4vLH3b7gNA96k8oHBiiMpo9xMSpKwnhpYsSzC2DTCAUGe1ZcTSxDM1V55j2hicrrGymvnw9P",
  "key24": "Gg8cR2KvKGgVkpPvk2sAcnAsRomXewprUpSvv7PQ24WfCrR1RhgE5H4bF78sDFbU1NzKxQSbCcevMLezRaHwwUb",
  "key25": "32NdMF9cHvWYYwhaSpHppD7zXdz2nbUuCnhDbPu1AYZjBwS3Aerik5CfDW2ooy6Kh6DjTZM5VMZJzPq61LqFjX7v",
  "key26": "4edHk59wxzi9MjFnHHtngXW9AXj1SNh9iSAHuAKxjrWDaeDavEw4NhBDFetXGh5J1BBPZcFUyQMjXQDCuKjh5PZx",
  "key27": "5wy1RNLhtbBJnNYbjzkXrBA1cxohWA3f57kXTwod1DvAv4thHzzYa8k8Nm3HHX5rrQHWfTLyxyrRr15qAcyadM5F",
  "key28": "5QbXjjLppqkjohfZfb4C4YiqyhKY48MiBzWSgBXiSAw8thAGKLYULRx4CuDodtS5kpdBDPwqDqB99yu7xz5xhavP",
  "key29": "3mTx2VzoGpSFAEkkBvh2CprQXZnPcc56WZLDwKg4XR2f5UJqhgiatDh1U842gHk4HiXvauXPqs6s3ER9xTn7nfz2",
  "key30": "5j9EFrqVNnsKEKzarsqif2nKsAPR12QvY2XtTctuNudXGRT7Y6qVkQE6KZrD7tDkzRCt61sKwEUQvP6HiyvUQyzJ",
  "key31": "4gLkPfcYCGB5fLJp8JpCz5vQPCBxWyxWBcp8CDyKciRqkVg9mMez6r8YuXxRKJ64VzixnYRpVYH76aNGyxqJZjKY",
  "key32": "3dWtfn4UwaufS8Xjm7gEJYCq5tkwVeAwUcmerBkWSF31bRxyFY8meRqrbufWgUPfGuEjx5ci5avAXHnK1aWZ1Aom",
  "key33": "4EcGSJkjMnmVzkNNKBYNVKXcN8hmnZc2cNQQz4FPwJ15QzMNddKvaxfiCc9BkZAzZoYgap3hdvWz1PNFmHauxg3k",
  "key34": "2wfwZN7HHqNufiq9dnhWXUr2seDViZkkfyvsjFFtS45orSbgEB1GdDfXN5xSkfMdbb5FHaefG4ma3iVBpdFeY3qG",
  "key35": "EPuSCtrnwYtBjaW2BF5r2LAftHj2LnmrmuJpYdkH56TBLMpSWgADparUmTKgkdN2pVGb7cCzK1aJNAEApGcHtpX",
  "key36": "3orbWjc2S8thEduQ49jAaRiPsJFQodcuoyWcKvYTSmX8Sq4EK9oCy6Sb4PsDWkmh3g9WneDu1p291gPcgNhRkmeg",
  "key37": "318ADqwXVAZVtDHiqaycrMVuDA1mwFEZNCRRofujXrYqMHUMpgDtjGBm1MX3Nh7WpPStkyyCVxDi4csWF7Go3FrY",
  "key38": "4pKuwKNV87refXZC8ouqhNEt7pdWaD8PMywsegL5AsZuiumRRqfBiFLRjR1YosWzoTJW6LEAqE2nMZwwBoX93gB2",
  "key39": "3s6xeCGA4wzfMNyDj7sdSSyVJrC8jDZSBkWLdg2fpNJtWqgZvoTFQ53X1QAthsVZKR6roRL9F7jVhnb99FUbMu7y",
  "key40": "2FyiGVQQJx7kxY2n9TNUWQQm3WPRkMhn2UvPeyVoSUP9oCCJQ9dcGqMkw2pRqWggVYHVFJ5Ff5DRVnAuAiEZypWc",
  "key41": "34ijL212nZyfimYMKVQzLDr46vxkeRCXVxWNNsfBQYNL1My7ktqW1igYSekhbTdrhEDK14HkHxP2jAYxBfgFQnM"
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
