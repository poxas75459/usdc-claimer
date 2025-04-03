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
    "4rBKpGi3mNPiPCvjxfLaB6ayZgBWsQehGK958ydUoeYTKSe1Rdh8AjDhtUa3y5Ki3bwmXVejVchuSvBX8ZyWFFWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bBVsf19qZ73Jve4WGPrCrYkhu4wzYsZUsAYPUYGhqBVEnCsabzkM5wcMEaGYxgHb2iauuo3D9DmUQqo3qoqRLm9",
  "key1": "42ye4B2HeqStDdZiqrA5TEi8JmND5FXLwnioW37jgqrrUvTMkzYzk6AmLKnQVMXucpWV2V7X6h8Ys7JscnVFJJtx",
  "key2": "3DgYzMAkocx1GHMBEs4h6ogCyybqPFR9H7CdbSqWM5vR4ZYs3q8z8CdtH522w9FAo6bFoapiDF76oVx6EhCa5woW",
  "key3": "2Ehnjq3ZCR65aeeC3zCuGy9W1yKBEFVZMq1asU76mmEHRzDCfZ8SkUXp9ukT9gXSNhc4zRq2vWa7t5VYNyYcvRJ",
  "key4": "4Fch3stWHv4Nmu89hfXGvuxgTUK1HSfwMjqKAhLJqFiCKdk1eHpLy9q7Kx1u9W89cdCWF25Z7ppR3KSCfk98icx3",
  "key5": "5K9M2rNKZ4C1Gp9gzzUjuKs9Bw3dNZPja3udLGoddrsn75ozw7hgMrtdE1dPajwJAFwZqoP6h4xkZ2sYJN6EF5ad",
  "key6": "2yp1p6VxHswt3pb6xnoYuP59mzZ1moB9Tfyu4WemYhNguzeZ5BTP6Fpj8J9hEkyi5wjpCBTRY45giWDfGW3CBdio",
  "key7": "5gp5auXyLo6DkRNrbEvkZfYVtdnjhhnYKzMDnLtzQqhpXML67AhBpBEpK2efMRS7TrtxnEn2GtbczAiTczFGdv5c",
  "key8": "5F7dAkMFDtfYPJmGRhhZmqPyeBDxo5Uufttpc1sCCRMRY3UHoEff1bdJiFLUcCy8qJHJnAT3WdBrpFXNacK5VZt7",
  "key9": "3Yovq8ufzL3QvivXzVYZMrSo1m5nHUFyYBQaDEen4TtV4UmUbvwfWSMk48of81D7p15DK1LPLea3EtMfsAo4YZqm",
  "key10": "5cHyKP3NwR27sAvRbPNYdsL8iwbucsYL277GSRU4j3u34VWizep523eUG2P95V59y5NfeQmhfD7fkzJ8szoinsMD",
  "key11": "4NvcLE353Sq5nMAs6vBbvR8gwALrHuWGMiJeeLtB8mxpyr9use9ihN3qgBRBzgDZERz5R67nsQQR9JLjQqv5irv5",
  "key12": "416fLCJ4bgVwKB9cTtGfsFXQEV1xW3ruSHJCc4LWREdfiFJBgmktWU6KnyNbwNNSvQny4Qkb6w35wHzP7Nyzapk3",
  "key13": "298CjkHvU3CDb6cDNybKV7wZJ4NydkqiY9JyqnuPW1wwTSaSNGYmCWDJfW6bArFy2ihVbEwR3pT74a7kYQs7tiBm",
  "key14": "ZSN9GvMMf6KTt4ALDHcjJ5CkQPa3Zrbmf1PHuxo64kuC6B9JFPAMmwsJWoAKJ5wUE9ReyMZUBH4A7RVy6bs6tT5",
  "key15": "4M4zbX6SgEs22W3TgtVtD1wTitn4q7ot6PaaizCqugaxYpVLRMGp22pAHE5CobTNm38CKXSGEYk2dY8Mo9EoZvDa",
  "key16": "VN4TUyfgNnUmevL4J4VczBvMRFnysBwbFHDQjZCLcV2kMCGKMr81WHHgVu9zpmSr3YyyfG1pDahZ8x3PximAhbh",
  "key17": "5pqMuQSXKau32T3LfUBsxutK6gsiWSHxhao6VTJ3PcfYtCBmMmYwY8rGSQdaeLxAcs4bF2BeA7K1MUCtgTszJoWe",
  "key18": "4JekyQ3ChtzrY6jh5gAFYYXZYzGQAC864oM4Wbeanf3NkQiSoGDtwseq4NRFrWEeKp4ZneZ5sEuH5ZPGw2Cc2oHP",
  "key19": "uAkWtjC3x2oMTTArXcARKktnswtmNqvXC8B3RcDBs1khGofQffHt7YUwsPiNSmgLGNxeBZqhMsPrjZW9D6g3dRS",
  "key20": "2XHZNqNnzeLuxhzeGWejaCjLEmT5GnzhbQwzRGVMrrKa7X1hLX9ctV9Dk7okSJpbB49SmChZEW8jLGtn1exPZGCa",
  "key21": "39qMA7FQHRU8E4c7rc4JTFnbp6Z8EkWSh7k7HxFS5z5fXmUGADVoKuMVx9hWQYY1czpDz4xLtWa51JtMFsodCMpr",
  "key22": "3QmEUb8ujvbh7dyQYSfscUC1ePgcYvidjZQw3pDZMkwYfjEVKVs64vYbeUyo7YhPsL19w25trtXvb4EnL8pHEN4P",
  "key23": "CVS2ceXH76dVxm1T59whvdv3PPqbrXRjzh24Az7xbZru915cto3v5GWwQz9oTNKUxKytSdqmLHo5XLTLjCuSg2s",
  "key24": "2xxVRS4EyD15yGveEpuH1QNXEveqkn3nJwtuAgXwdpjeU4HQeyRSVjPy9tyjLwX4D2PufdcwzomHLtcSKZdeJuBZ",
  "key25": "3VaSZeS58gNQXNHvv6aDKkLQLRhLaSCqfrUtfLcgmWrtLch4X1zmGzCChu8xmzjzvwDz5sdCiSEc8TPZ3vSJkCWN",
  "key26": "5g4cGeAX1PyAKji2oc9ScX4SWt2hLd9bQgRMHjuQErdBntnut2LteZqfNRzVT1dLuaLEnUVkNZuLPoaQwxJ68N24",
  "key27": "4AEMjSji4yYCwB1REqyk6f1pG4Qu9Sdgytra7aDibZYkxYCMmVQHra5TvwBp6mxvdXikSiuMRPLsrMwi79ZvZpv",
  "key28": "5pzVsY5MsLDcqbiarXpXWQsVJustu3hBK2j3EfUHxxx1ZyPSTg644tEmnCUKCyPtcQsZ5SYFYGrU6NCQgELUw3vT",
  "key29": "2icLYEwV6LALSrf2Htmj6tUfHCtywW2qQXhZKD3iW652Vvm64UPVT42VpLxmGm7VgxRqho9QrtyfyjmV2orJ4USR",
  "key30": "2rJcjETGtW8dWVgVjywBQQyH4hdkYoYiNXYZnqmxYqkc4n5P4WNdFLuAcidv6Lkdmn7dcpL8stAguxMJRPhHPefb",
  "key31": "hsn61NjfJJeqstjR7UJ5Ypjc9xTmH4v8Snu2rPEwB72q1ffSS4rLKDSBUZ4NWvAna6NokJMey2Mgurf1ugF6EWP",
  "key32": "5Psmc57eb9kBo79epohL1jHjecDpq6xxPEXZRZVjBA8QBvR4oS78r4zsW8noxDHymec4QkQCXvoRmyej2shv2Snu",
  "key33": "39h4nwG3R5WjangU3nyoBTmfPn8hb7ktbEpiRJAyNEyPXM6domYVjMEwfn14bg7L57sZPwGd9zpQVjQk3jdiTbFu",
  "key34": "wjSysrQiJd93ZSGHvhTW6FwXDtRvTJZjBJF3aTY4wuszryfYFGLVrkU4gKoipH1fwTvkcBTq25ivhPKcLfg9tXf",
  "key35": "5fbJb2ApCNRjsoRYdnYg1w6rqph7AhL2CpzdksTTNDnVdHxVH7EMGR1u4MkDyDMXquiBwWwUD2RLZbhkpimjtMes"
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
