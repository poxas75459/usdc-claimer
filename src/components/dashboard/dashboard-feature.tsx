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
    "5883texC4ecQquC9Bch9NXwxmTEh57FSReZzFP1MJt9BLhNMJD25mvgUxBWadQuz63dGY3gYL2nrDR7P4DQDuPeZ"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "Y4oP8JhgRYHHhz9o5jazqefEV84kXkmqhMTSrJuxct6UYd2aEzpmv2jScynCkpx3HEiaUSKv9AY6ceSMfeLhTZD",
  "decoyKey1": "2no2uHB4no9xDnXgJN3Trw7m75viVHXcPCR3aQRTWm7zB5RKNAVxsHDS7LTAFyndr47qXKo5Gj5mijaontuF38C1",
  "decoyKey2": "5Qr5fVXoLbxYHYJr726jdvz3mKedVJzHiSm6iqiTHB5uY1UnZo9PE9pHyJuwnh5c7AR9kNKY7YgNiXrsJjTk3vYS",
  "decoyKey3": "4z8dKPTbSyQRRxMLs9krjgqvtQWBbSCNu4CQS8rXW7ntXAgzdzatqLHDKC2WCBrn3FAKUFExgeoSQevkfoaPVKJg",
  "decoyKey4": "2oUw3Y3vDaLVhnBFTJJvYGKX6RoCJgL3vpRSDhjVrhMhbxi3Szpv3eDWJKWsq6DQddGRV8ufTGocCUGDgvQb8wBJ",
  "decoyKey5": "3SftE6d7XnQeVh6w9wjjMHq33WXwbu9ZstUPamCX6PYNgcvgcmz572xuoqV4aX14sZjixCTKocMgHaLW5XiqVzXJ",
  "decoyKey6": "5PbYKk4Crb3HiR4TSe8wW4k9dABXQ4F6a3k9NY5xfzzvnd5c1nZn7Ewx3pmQwx13uJ6je1sPaDKNsHvVuwWfq1Yi",
  "decoyKey7": "5M3S739ha1gmgZah7STSBRts1wTPhD4q8mqaMBFBPVyCHXAAHn1KquxMYgtPcKZNuWXTsMd8Ph8DSUnebrKA5b48",
  "decoyKey8": "58eBZXApWkoG7SwHmpTeZVkxhxd6HSTXajTVqxt6HfJa8KM5dEMkuTiDA5m5dB1FUMQ9Rcbmo7cDuCtB5joDUSRC",
  "decoyKey9": "5MGKbQtoJeDhoMVdHLA84UbjZAgHYosmjTXci51xtEmjE7eDb2Nu2EYn7naJnZ4AXszSCNVkrxf9HoE61DnENHGp",
  "decoyKey10": "3MSRJAjnbbk8VmpUkkGUAZH1oHU3HAxbsqiGjF8WJ67hQGoe1VvRuGgiAD6E4aEGjALJiS7q8ioQkJqLnipuzDQ6",
  "decoyKey11": "dx572mb1WADdBw8xKYpz9Us4TtvYnHmWvuKjf1eW2TbEKkqGKP7WqJgRYw2BJESn26pPdh8S6xp1VBCUVQuaVf9",
  "decoyKey12": "38g3N4yP7dnUnk78zkigmWWZM8MY6Mrd34FbVgTUdJyJKJ3DU8q4si9dEiCPjFA5tmazYyQTvvoJPb9Lg5y7sXZZ",
  "decoyKey13": "5edzNfVecf4LvtRPP9WXEqFSKJmvorqwnDeRB2utqkbywz1Tx8hkcZyQwFU6L2SCYAVkzhNxetNdb6aVbSNdGSJo",
  "decoyKey14": "2NaVwAN77qQ7Pd7AiVQzxUdKDNy91gchbMrqUQYTWLJqzVgg9UXUUevXCFyWVGQ2buYJBNRebrF8Yc2V9NwoV99",
  "decoyKey15": "3vTha71i5dbrqx92GqmeBG11rR6mxztuuEvTjkJa1WY4u6LFJkHSvkbGo3VshJy4WpeAXY9xuTk2zMcr5FogFzNF",
  "decoyKey16": "3LVMykhbGQEU8nBEj4LqthFcrazoLCtxchq2L8pxZJ5Lgi7SHs7zsLy1do8UEe4FZkqfchD4BSxfnPkpHgoh7kE6",
  "decoyKey17": "3n8kKoz2KwahHRk2RX4kdJBqBQHSPzw9kBFG1GnzGT6UantBx1GZ5v6Usqb2NdcA4haAuGBJZaCpbmvHGPsLzKCX",
  "decoyKey18": "3jxauDCq4qDoLRXm6NQTgP9qzctVpmC2T4m9fTMZJjrzCMLUZwEVfMGxmV5UiwFaoKtDme6hxuf8ca2DkM51zUuN",
  "decoyKey19": "45igy1KNntCSyXAYuxtfWB6WPZDPb4N5QqVKGkuqiftiF96qAt4GcCBcEooeVDQnDaGJu7aMiCUd59kVnzM2QFj5",
  "decoyKey20": "eGHbqmFQwwzCTf4yMQTGpfMWvdaaPt7EGTq23qhL5npZFdsc94Q2swk1JCfUR893TyGhPQoeHpiAdoNnHyDjH3q",
  "decoyKey21": "5uq5kAqnhLMpuE3KFxUeUvVf2fTx9dCx3yAaqN2pTUUX8EwiZyX56kGDiRza2uvTfrYRBx2FMeeNB3GQaW8qS3F7",
  "decoyKey22": "2oV7TDV3TkyyjySQcy4R3d6yaWdsqgqA21cy9LSwrWC5qMSZUEZSUC61LmouaNsWsUsSkVonb1UDUaE6FrzHnxpW",
  "decoyKey23": "4vPpcZYWUyz9kF7DDDt5jRBwWmKqcRqCykx7rmknxp1BujjJ7HA3GzkChcNiDm6sG3ywzARCp2f7qQ7RsgJQmgyy",
  "decoyKey24": "VoZcgkMeQq8xrjLqE4GJ3VTHhgE7SR7T3tpVbZTAcWu2q1z93S3kvWhHqtjjeSjRs722vzNBQ9XL1SKhft8ygd9",
  "decoyKey25": "3fwV2zn87L8H4CfEbwhp1W1JiRHukGmyAydQdKWkytmTcrHT19h8B6eyLt4K8B9WuTxMWJbYzbbZ2KTdGjDSD8qN",
  "decoyKey26": "3VjzZtFwWcdEum5PNAuwDPhjfXuuG1o3F7ptwd3X6fEBppg2Z2Qsu9RpoToSGF9oH5mAVoNYBhJyRKh2y3HBDX2a",
  "decoyKey27": "c7U3zfx1JsmQRfJBoDg298xM7RaF4XxZC78dRW2Lry9CNFZWu2wqUzQLbxz6h2LmUcKaMAADsm3BB8x7NpSeCRX"
};
// DECOY_KEYS_END
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