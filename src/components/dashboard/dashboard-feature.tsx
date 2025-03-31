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
    "CkQySoPFMxS6X8sMv1QeeCeqVb8DbArFfPrYeeU8FDuW8799TtYHb79PnFSu6XcQgcZRBmzyPu5iHwEmRTAezEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3RVwXNQ8i2KBPuA4g3EEnuLbrmiE2Xg1ptKC5BSUA3K5Rxxmq1gE8kQ44kUfrLy2U6sZgcdNg2LH6aStftk9t7",
  "key1": "5S64sBgDabRPxZDqJAZBDChu6Lq8w8bcDEjMMGhag6mZstZRJC9YQMpEq9S9qFbsVhjJ7jerecH2kFNTatHBWiVs",
  "key2": "5xSHUbqsHM5ZcsuNXUScJMJbfFYHzLs841dWA79XUDXjrFPcjBSdh5jcdd5LoU3ZqP6itiueiPHfqcBeA4BPC23t",
  "key3": "2VzsgYoMZraTWZ5GMdQTakfb5FBSVPh3Sozx85QxQ5gGEfKESDMCQXcGPBTLbApSDaQwaXEZyDUGxnwFoDcbyk4L",
  "key4": "3ZhySCUzj331CHDjB5HUfL2oocjppPF2SS2gdaVWiSMRcbwhoDNqiX3zAFZBHKaXCWSKCmcPsAFxpMP7GAd8nH8h",
  "key5": "cimGpqPsuTScDrNsDkLipRkeQjD28GNdE2nT6cedxPDgpMXn7RRPmTBryRvPE3aEYvvrByKHahDKXVwuA9EEq5Q",
  "key6": "3owjMdXYXBobCEUPbrniUR5ZYLeDQb7VszHTpkxRmoZK6EKKzgkBQ5MJVmKLkbRBvgrfG3fuMehwWcuHQFAzSJqy",
  "key7": "3C8XNspwmLqHA4tFqxeujNTWaHogP9hdopeba6HNLeNmxBM1qoJQWmB1FNTdpm1UYAJHT7hcwFwwdjPxw68Z581C",
  "key8": "3KpHLdrxbPHcfXr4eKQwo96odrC71hdFk1Y2p3g6eNyQ1ZTSU9iWwVdftjoBcPf9xPeBUrG9mwMbjkpQZfrz78hj",
  "key9": "4nFgFJZ4ceVbzYh9Zgu5X8Ks8iGcE3VE3XXERevL2zsfPQP3DKQLBaJYywhBE1ZsUZ9x6yUdyk5D9Gw1DhRZQ691",
  "key10": "4jbSw5uLsfs4VVUhXv5vhcwCkVa7PNCDPNRHcK9ZxePGnm7zA5GiF4FFKNx9gqgNVTMGRc8rubw3DKaV1wJs4sHH",
  "key11": "5TK69rGQoKH3G8YsKBHpJwuErbfAg1urxTSHZ5zNWvCS9JwkAbnrPChyhCzyJDMN91du9zyto2VJmKatnsyPDNnU",
  "key12": "5RXxdfGFXR8PkT5JsyanxpPLESsF2qc24ChYeTApAJMSM6XVADyKj6P5wYjNQ78qmFe9UP9kFBQTCapu1XFDbfwQ",
  "key13": "3zu3uTse5RZofGED4yThX5gF7KVPpJKGtLQz2bVpyiTejyjwZ7AfrXSsE2x5vpG39FMEZJe2wdDRFgRSpm81xnn6",
  "key14": "KeTXcnwyaEBEHWR21gXqzofbnVXfJj3HrEGwm51PYQPu67SH8WbCg6e1eDWdse41LtkvPDbiBtxNPreMQjjJ6T4",
  "key15": "2MZ5QYr1nn7vfoMbmJ86yMXW6SMUR5WifgkfCnVchsymqhjZ1QMFKMd7xF7MAUy45Ghu5DARkaVMTL7SHCK8LRqW",
  "key16": "4dpEKP7JdH7pNUZuZt9KgmukYFAYrBHBwBqwdhRjS3LUfXLQAUoFeWscjbTHUGGRdNDWQMYGZcajkPtxBhzYzjAp",
  "key17": "pYneRJe6TQpbng7ynjApCWtTi1qknSC7YbxSRUnukgFEhrdfQAfL9xE1LQfy73FyN2BYsQEMqt8EAZykWU9QPqE",
  "key18": "4srsPXnn7FE3MfNjnwBQ2ZrnXk9vQzY3msQYHMuqvvmgfAqQ1DPcTtDFcSzL9k1Qu72W8LkXJsPEqK4qNDmMg2f9",
  "key19": "DJ3cD7EX2yjWEEdNP8jfnV8jBmJTxMbpnPmFe6Cw8euMNwWUSpjjmLCPSiL94NKQouUnkmTiA68Mba1sgkvTerU",
  "key20": "HS5rGLEqG5KzFz6cgD35EoTjcMzR7kR2Viwob1AW3fCSshH6smbDLPQ51hL3CyorDYq6qXwrXMZBVsdExiMARJd",
  "key21": "3AHMfvWf2nTRG5QvAbuf5ALPZ6Ac6tNCVk27aUpW3VMqhEmAAozbmgtNTKD2CPfJxmKsYsQfpWXGwpPP5Yqr7VrN",
  "key22": "CzT14LTZZdFjYK2CX8Cfakz8sVmDmp9v9dvSHBfNe9CV4JNi6hMdcL2Tu55zd8489FnjWGvdFy3oszwFDx7veSQ",
  "key23": "2Qzz7YpUP7TBQTSjWVnMXwDgTHJbGZ7rf8Vohq1kmoJ8mpp5FuVLaD3AmQDf94PRXeLQpS4NhXyoYTAEk24ifx9b",
  "key24": "2tumsSEVdQWcziWLRb4VdaAx7Caux5Ng6SvyzkeSKRvcMVAVjxqcvBNGryyfviCFJdxsEwoScbgtBiESg8cVC8hY",
  "key25": "2M1SuCXRJh3xTYK3fPDQkqtomBMvDBciWz22k2kZDQy5whDLEuahzy5mEDMHNr8mF1KjcftvLBehh1YwXEskSbau",
  "key26": "2Lt3TmUGhmh16uu3tDcphQwYimEhx6NGV71RoZqe2dXWWpHopXQuFfDTDaJY3qax7dHwufsnnJ3j7NFwYqkymyPu",
  "key27": "4ve3rMoB3P5p5sMqEQ8KQGw9LMqWQjGzGvrXjppaDENdTe3w3Q9wASZTNdL2zN5AqMNvjrQLmVJYyoXfiCyhepXp",
  "key28": "2Ke5UKyUqrFWNFmxNVaGM9XSpNYHaDBjgnVNETtaGtN1HQNY9jrutXMB9sp1L7MM8TK2taFXAN3QkzdHs1RR8XK1",
  "key29": "5jQggpbXxz72TGigP8fQ8G2Lq4aD6fRwqFxaMYRTAYjsGVJ85RwZcuKEr6LyksTGz1c9XtWJHJ68wF5rxGg6JBbX",
  "key30": "XTmYCMBEGpysDDhNkUMUQjoqgknmwyE3fBsgdL1DxEg399YzW6NoX2vKXqvXGrvKSeokUxiYvCveL4sPin8Ue8S",
  "key31": "8hVU8KNBVnYcLqtorQHhK7BRSKAazMaQE3A3vJ5EtrTKTq1LGWvbw1fmCDyKVUdTHYUQBpHdGSon4evG2Mwzhga",
  "key32": "4mGRDRdupG2fVEhh7NR4mY7teahgkykgWM1h944Xsb9PZBAP4KmN5RRoFAvtULNbBz6Cref6yTLaotDHUkmY5HAA",
  "key33": "5WTE1qmWBS61zPy3WiEVqWGeG24H1g516GuHg7fbRLzzd9bat5ZmaCrJSd1uVQmRhAdortHr5eUxFBjwLzkyhK7q",
  "key34": "4iBZXEgCNrshQt2EBc52kp6BWmCh8HzP4W7CUTRYGzb9i7qFvRRA4XqdsXd3mxJyAXPqGGB6dxc1f8uWuK5Yov7p",
  "key35": "DVXWLWrbAh7oMmR1FkaJ4A3qubjvaDUd8RT1oZSapjTTmVM6m1Xq2dwxZ2nrGyGBUKsMBNSfza9sXmYSCjATeUX"
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
