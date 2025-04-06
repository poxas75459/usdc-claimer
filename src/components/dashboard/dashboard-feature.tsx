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
    "7VEWgELyKAGst7fPPsrnW6enhtvJebkRb3w17SKdj25tjUxuVr7RB3h5c2SfMXdB2CPe6nmjWCjeJVtKKnkz7zF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o6VDeXGgD43Bvqoo4LD4S437Qn99TfQ96vJMyE99TY65GbBpU2MEWwwMeSCdgjTqGSoYBpD6roPX2NXt26iv8rD",
  "key1": "4SsbX59AvqPgsbKhGd6NrimPxP4AeLmDJSmNfNy7eopyzA3mSL7BovziAS6HVXSnTJEKTSh3EqiQUg3w7cWx1Huq",
  "key2": "WtF4aQd9Utwk4zPmA62tGy3XuyK2xMyVZ2ShwNZ96CKRfiNRc9CfPbWKHXsArTzi6nDPFGtuu5gEJL5EsBcBDFS",
  "key3": "4UMp86jL6ixR18Q7dK9mRtBg1qrqzPBgp6ef8vSBP1xdUXqntnoyv2v1eye8Ta2DQdTZGBuhmYmW47pbN5ERu1p8",
  "key4": "249V8tmv5LYuMPMrLfLWSooVd5hXFupy3CYeQEi4xZCwr2DVC3gcWVG5ttsyfxqNrjs29vSTgFTyEcWEMk4Zc9D4",
  "key5": "3ibJN8vGQCWXczs8rBqkd5usN3d7uTD4jFxqMWwkRZ6Rz5WuN4JRufSYXRijGkv5xfuLvuUaymtKosjVXgKjKryu",
  "key6": "LDTsBC4zFsfZyHpSMURj4BoZX1sqrqxYP4xgRLY1EJZU5kv6hn7FweqKkvCBo9ABEYornQYnzX381iGV7Y1TQrY",
  "key7": "33oGRGzDDJSUyZrCBJTDovtVcyRYshy8sJPc6mW4mkLGt9yAixCvWteWn1A2S6zKxwWf4PQKUMTdLQ3RndUg5Tbg",
  "key8": "4yj5tEtmJSRpfoF63hT83L9a5e2yifbozqNG6nB89yXxecUqEH7Uc5j9nh78RYgJzJQoDxkfjHKxynEDVWuJVqZt",
  "key9": "2QwCEQJMffkRsqUiCiHCXzTn7XtyNtQxENgRp4crbw9iVMgUL5sv3mmrhURCbndzgwDUxTT1LtWVt5ZSiGKWHVXM",
  "key10": "5H6BdeSsioBBAYk7gSEyeRaHqygRN2sfmoCTgbuMKQdhBzeR1NwJ2RfEvQb6rufoezRCo3BCED2qYussBa6Wtp7u",
  "key11": "Tvyxjc3DvHrseFVLxCMaonynveqwu573ohWm7eDk9jRFVSTt8m4nSsNZocpPB9v5r7A6K4Qkgsfh2p5wuDEomt1",
  "key12": "3n1Q2XrNzdBf63GMCZYPfGeP5PVfBdjVdaye1FRhKQkH4PEJekA4udBFiU6Gb2JTEGFqCVfsneWUqS6hzQWR6q3Y",
  "key13": "3oGxtxwjFdQfKzmn6vi4SvAwe6xakP1zY7qtipdpnWDtPBLfYjQ8f6R9PNuDqq3NaNPNycYifiZ3u1kobXBfn1Uj",
  "key14": "5drCMGWRBZjaf9UkX6DZtxZ3GLDze2vmgNEbS6Mz42iyFbown684Bi7gedivGEeRvMd3vinCr4prtEwSfkB1cjcn",
  "key15": "5BV2DV3epkuXYWNE3WVn7WSPcx86LZMwigLTngdH8gm7S2435R4kLmv8mJk6PPJmEsfJuezNizgYh6rGjpFPfY7T",
  "key16": "aXYcYoBPUBf2GrnKmWLFu1ZZA8G4kpUP6yfYdm6kPxRhsYgCbWCgCHp35tWBXr3JYGhiyySsiceZGmoCsCdcCCF",
  "key17": "XLLZy7cuvFByQvKjgv5BPnZpezSu1RG4ZNPssJsZ4hGQthmotQcXWb8xQq1gn2HGL6upbwXDLzu559JVFwjcoUN",
  "key18": "2BrT53JwZDXPeyZhrx2fmXxneYMz723GXB3tfLHduPRu98ZBM43MyL6hBKxPSymjpGz7zSih3zgQJ5VpiRLs1h5D",
  "key19": "2bxsGWH3wAWdu6roiVipu9EhCMHbwtqYV7n1xTSN4imjmBSMmF96E2z2VcY1DkeA8w4ynPENjpdNSG5UoiEKdNAq",
  "key20": "4kgBZJm99cc1x1wmjrdU7n6s9B7YwVdJ54AorBv6VWkjbSoL9QjkHRQ17odA6fcUvBnsJuavjW9qWCa9uTSRqFxG",
  "key21": "3vdYXi5h5kH2vJH2F4nCY5bCCAqMwZ722VNzdfHe8CgQgqxAZBLK2AjVx17ueeybCWaRLyHfRVCbhywSp5L11EjC",
  "key22": "4V9SedTh1TSGnPPKHRsgCwmKmzRfti7JKQMKqoYewpjnPh2Fi2Wnjmakxrp3GfsKiiSHVnNw1r2ThiisYNZx86hX",
  "key23": "5coeDAidCZg7fniw1M1k4dKqmzdGZdg5sLr2ioE72d7KhQQ2veoDWne9tDYRrTfUpeeyP1KWmegsS71b8dnq6tqj",
  "key24": "4jz9Ho3ZRHqMeHKuoGR8ht5KpD2CHnsvwP9QxBLCxFhdtuzDpNxcEKncnRGCrDLaUDCDd8CGZr2e1eMTLdKnYak6",
  "key25": "31nPEBp1zjKpz9uMuUXmz3CrLjmfpKgg4uKBQG2tEEf8HRqoCrEKAYzYwFML3K7nm4aNnLfDqyPDSXxo8PoBKF37",
  "key26": "4ok79xd9Mk1kuEP28L7bSM7JwCHAkA3p5NNmZgSZdkQLbgjt7rqaNpg6AYANWi8Zr3seLCxqP8Y6s1oHgZh41fpY",
  "key27": "dfKDtGdkeb7GnSnjsu5CgRwuxG97T45EvMYmsFTYqTMCCL7Zwk7Whz6TvS4Mh3hyM9azVAYRoQayYC9SQjbGbaN",
  "key28": "3vFJoiVkt4ZAz15qYuXf3ogE3hTLPHRVokDUrKYuvcFZNepCjJ2ofs3YDn2mEFqxh5J1isc79bJZgwuDjGZMgjUu",
  "key29": "96VXhXCpVH9pq51puE1FePkfbn8hxqVd7Ln3zkdM51wktfVar3d4DPpDaKKsVFjXd6qJRruGDFeM2zXeQFD3ZfY",
  "key30": "4sZwKzM3u4vW99e5nfQaHYfBtcsvgrs9oJSKLfwdTmJDvD9YTmSEJnzo5tGoU6GGRC9PM6wawpEgHhH8uqwQcBy",
  "key31": "4VdXDedDvcKksnqMC62PUhnMczPNPWGtV5J3Mzj43fcXtGuCs6VCjbv9Ro5dADihVJCG9ghBfvPgAT9wmuQrt6Lv",
  "key32": "5Srvei7ZoNcNXnsNXSbN9kuajvA2oeUkFPq3jeDcf3BVEU1PYg9feQstSrYompfT1Jtx4EnwyaYHtQueBtwYu3he",
  "key33": "5K1G5m7w1cKPjXYzPh7CEt8pThJ4VSVqSeJA6pou7ABZtWZLmzSKhVPjXQUsgWVCnyJM4SWYqJH6KPMDEPLDDzhW"
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
