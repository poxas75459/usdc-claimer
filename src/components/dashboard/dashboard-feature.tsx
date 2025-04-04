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
    "29vx1EEMiVUAi9yZjU8a42bjYER4zbkna2YShX61gSnuvvMbHZvW6ZQjj8M9z3SBXR8xbR2VjvNmCnGW3ADp2hs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZH2ydLR8H8Eh69GLXbXsm7Jd7n4qDsaeBpKCqdLowXHVRCm5AuwhrYRby1kapoS254rAPCyRHSmTBj9ZQ4DocvK",
  "key1": "3X4Cn87a5JpW5uDE9xNiuJwc2L2PEfBfgZ6Zje6xMjc51NqbzY82xc3GvSYP5WUjkXSJavvaZ7ixvMEKfrQYwXnH",
  "key2": "3QPj8v5zocG1e8knTTxa5mJT28tt7FNQ1LXoss6GHQDqaErcUY5qqNxHRppkUdW42772w9cvtwSDgZWVKpSM2CKd",
  "key3": "4d9cLAo98JvKeH7VB4h86cC5ba5MqP3vRdEbXvbLpXkwxozV2X9gnHbR1BTHfcRYz9qv7Y2VdK86Eb66TTcjxAcg",
  "key4": "JhSeZEBaHQCM4ZtMvSEDCzjp2iQ3GYfYzgVQR9TEAxhz8SuiG8aBvHswqcMxEfrSdCHkSE8iCnDQmQyiByhpXiw",
  "key5": "2G683QQC9HzzjU2j2RFHfx1UJPkCpD5dkgwykSZkRjPykcuTPRFq4Nffhjpb8C16t6JMsFdRsGt2Zft23d6KoSPY",
  "key6": "SYXkQHzf9jFdAXY7wVW2ETBvGAkBPWh2w9SghMVLSyxAK2jP9iQ6aHxqosQurwwamsBBpLW7Uf9YyzRz8UVLUbY",
  "key7": "5vPXLCChVEDb9PFHxvYmg3YWtLwh3PZMtpWtib3TucBNPfS9gvyRnrxARxFpuv9NWkdbBPZHZj3UvnANhvfYCxKb",
  "key8": "RWfcNetCL9ZRaz52WoFj2d68tAGTwzdjDuVNNHiHaj4HdkukUR2ovm4HWoK1GJbCVZHeq64KUAbwe4NysdRWkYG",
  "key9": "3mKeJ7FmjeF3VLdfmjV42gJK29NyYaGs6724ra7mEAeGEq9tn8EnDA8gVjun3Jz6S8VScLo7cyuMJqgmZTzBFQd6",
  "key10": "2rcEWzvQct6yTTp2dPYzdfHPLPNcAxys7PXfjyrpeP81GVGHTfWWEgig2tmqAkbp1iyhWU8nWUQgfiPg8nC59yp2",
  "key11": "3omMY7YhKSj8onVDX95dwsPE8WSRAgvbW9ZSdzCM3aXv3udLsJbZ7mWNj347n924UebtA2fY6Fs5TybXLQZQcMqm",
  "key12": "4XMoBt7BoqaJzqQ1yxBGR2rGCfUMqaXj7qQD25sFk6js7Pc2uXsZkzJ1HNfq1UMUqznrwr5kndtuaGCdvNp7ERaf",
  "key13": "2obTEwq7jstWgVTTKxyU2hX5oPRrXN5xnigE34nrtx68eowZtmjGLXjb6EBK2fL7Fcw41JncKRDYrFyraE9D9hVm",
  "key14": "5WxSznAVuotxezH1upSFYoJ2Tgcth2aiY5Rsok58fZV1kDGt78km9nY5vcuUqoAMo1Tt8f7nppVSWTqVatRUTQgp",
  "key15": "yTNV86KZsZN5MSvTANSFmFuZQAbZYV1jcdFjP63CqTrLAw6NHFPKeMavcS2fUJEB4Jkd8vaiYPNtwJta6qq2VdU",
  "key16": "3qz7uutx3bNbtnkp9Wkxp6C5f3H4fKMTavt4xahkawSSdsLVR52NMjukPtRP47iCkwyVRRQfafzyo5wUHkbeyrKw",
  "key17": "2ByWcZT6aG3XHnCahC56rK7kD1Rp3AthMRMiHG4zCwyoPoebAv6nazYDE5vUGd7izNqes5yeNXnEAdB5w9fjMZRq",
  "key18": "492ZyzUorMSCktWVMYUR4diJucZoznMR7KNRrEFfj3b5kfDFLYcjx1Wb65jdra57FEyNMm5CtAZDoTqaexqGHPzo",
  "key19": "3CuFkFP5Rr7JF4F652aBfKMWK1MxjT7zUoUvxBonp4z62tuQpTKRmyCTxGFUDFAkV3bCFBtyyRdeDhnS1UapCXw3",
  "key20": "48Z1KeozybxYtd8Yq6FaaV2m6XajBjZBURyjeE5ngTiqMDmee2kSXo3rS12mnGnnRzewXDejLcrDj2rfLUrBaGob",
  "key21": "2yz6bHszL93fjYhnHgWr7GophgWerHFzkBUPfC7fS968DdkUvPAeixHCb9sug9QBzZSjfRVeLcLKq3bzEnuupUmY",
  "key22": "3FmDDpxGNgihc2U7QZRHsnhpZKyns7V6AuF7paBJdqocv2mu713hTMX8V2UHcKVodsmJFwYSuThLKFYiVt3J2LyL",
  "key23": "58kFMCocbDHBgUfeCZZY67wMAmZ68wtDhp11UcEqgcHFintqnnkWjuoVy4jZNpsqu7xEZNyVq5Z5nbPXZzujfjgN",
  "key24": "44Avv5dMFK2ZuSYBvEPoVDYKFVcTkviY9vpPmz8MpFWqq57QSgib8HUmtsrznm2nGmAdnT69Sap7iKcmt4VcKh6F"
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
