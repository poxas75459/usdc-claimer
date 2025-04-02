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
    "w6wBngXNDRm3SSf9pfBhR7VM3EgvH3fmYD1GfGVU7Zp8SxSEHvevq795KEjkJN1pHPwxSDtLrLcd1X7QEWtQWM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZRfkq67iggSkFhULsX1hRmrB4kdpR5NCbZhCqJbBW9B4udrZh5NcKBsZ6GJh6hSKzQ7ve8vLVQZVzx2aee4uJf4",
  "key1": "5yERyot9WefnKVGMbrB4okKiehMMN81cLqGfqdbsCWnkQvKK9t6sRVEtf9vEXrTCAUWG7SCnN9MVAaNWSAf3EhJ6",
  "key2": "4GQBXeZ5jqcV3Jgef45egTcPQRzVv9ETN6vxs1qZXYMGzaVj2uSstGFWhdHiqeNnSZHitD3Rp5LoXiyZCQXGZecu",
  "key3": "2KuKDnBM13nxb2wqRKZaourh8D1BtMYWFL1THJUdV6BJD2SvvJXMtk559CNm5aJkofMyUt8VHwiXM21NiurcjfeE",
  "key4": "vMrhdZMaznqRz5FA4mRVdDDGyXxhvtgtKUxSS5vZmay5DJ67fXaCPfzbj7BPK2dNuLpASnTDDep8LS5DFfsikdD",
  "key5": "2Mf2XpnhTJuEj9B1fP7rKAMQ6UdPsPkiKqEhAR1z4TTE4iEe5hSGUnr2MceWdWrHQXyfcpZzpqEkAaWA2Qb4d3Tk",
  "key6": "4DARkiXjSreRyHYWDkwYENN37Cai1MvMMGvnYg5Gh3CYwgjYJnfvnAJtAPXspJue4PQrU3xaZZcm2QM3k2BMkLmW",
  "key7": "3HZKqbS23q5qYHcAHUq9LBh7XbnkoCWudzG4vXs8cYbqNtS6zEt8cDJLJ6Xa3q11HiPFBRUTa5jgFhxABnFqLimX",
  "key8": "njZgVq53CKifKtnhYGZsz3hjpBaWo2KkJNkxvgrrxZFPJvqHZVmkg4AAcQgTvnneWMHuiKYQhe4TacvBS4ELSkL",
  "key9": "4EXUh1MJvNoY5L3LHv6sYBJSXg1HVDDu6gSa8tWYYhWktNPPXtjjvVuJK4dyzPfuociMgzNCAQcWcSuCoL91Rkpb",
  "key10": "3wh82NAQmHApx8GQLrZiHY1XdEdmRdH1MuVLURw3B5eVo2BZgQAK3yyWanB5cj27cNJAiSebP97Sbs4o55jVKBeQ",
  "key11": "4TFfsRJBoqGCAmB9msLKSMR75RtC58JhJ1LqunjPyJv7MNfCzAu2Gq7NQJieQZd5YujcGd6h99QUrjZTyHApFiiB",
  "key12": "3dL3DxTFajQbrfP9CMofhqFkPNzxiCqEyDfr4VWo57MbtuiuGGGoz8D3zrLLsD46sx5XPfTCf5sEbC7RhHnMjwhG",
  "key13": "2V1bXexx3GngUbS4Zt8fE8Mi7MQNN5RdpyfAgRNRaQvry5jLDgy65A3c5voH1zBosyQwrfmDrFV2inu1LKJANeYc",
  "key14": "5uUQS7H1noCArjQEJq2e3jyt1mZUew55XYW21GTbMXoBp5CpZNQYSPq74uarMo4vJXD3uN5qzn5BNCBgBsfJw645",
  "key15": "2GsborJyRAPKkYWcxNeRfpwBkaMHjgoUE3j6zKQTWcxgemKwiu3HMtrC4uYeZohy4V7WqSqk1JAdkWUFbdNAt6HC",
  "key16": "HVMbtr9bZXNMVVvfnBE9ZgXuSMgmvQhwekPDfRsEL2PZuSdqT1ffaeFj6af6uhW3utGAQwC4jDzcJdfBH2Tq8Me",
  "key17": "35615hiqB7By6i6hQ28zsbHz654nwGipAcgAoL7KxxRoEp7VRSErK9ZxzKKgUJqeCkaR3yfcXFkf3eQnrfmGZ3Dg",
  "key18": "TxH66AvZRZhfqSTNcpV6uzg72xUMHQPw1LY5UFRpgQgwBUb1zPVTVU2vRiZrJQR3JY5AfTQJYuDFCLDCaguZn4E",
  "key19": "MhQWkASpJJhu6dXgj5FR7g6yx74ffrZsPSZW7XyVAybVLsbn5vC4Ks58MDawrb1jinMzxPnmcASEQihCoysqwJ9",
  "key20": "2Jc5c5CaGB8CMdari4rypmpJRo9eaDmHAFbaSmECQGPVSfhiNMfAKCjfpAEEBwirzxqYKWeT5TBixZP6LiTBa6LR",
  "key21": "4jhiUFC54fNfDX3QzbTgqMR5quFkSoZc6XKptKzz7A3beqdbFXmM5FpFqpyMzfp94WxJbYGZenfcu4cU5CoyPT8p",
  "key22": "4tHQtZjQzw6QReJekviEXwWMuASZyjvEtwVq2AXw6A7NKwk4Wa9tvtRhdfEVpLkXDKaKskcCznSu8FwKbsEARKBn",
  "key23": "2GoypqccNTuLFcEq1DZvYwFVcEdd427JULNJVSV7PRRjTxCTMxdhbvCQneRgMWv8YW2t5i8wxBvjGdmjCmxRecYh",
  "key24": "2hCBsChypbmpm7Yq7tQ24Zcfx3ShKzkyyMbHEcyp2eKr17pmAU7kVZM38Nxo5MFGi9VfPgVLqakfhXLtZjg3otnC",
  "key25": "53EK59nozxUYMztNqcLPEY2BQEAYqS3ekRWkDUb9ZgiPLVAcqGPmbXUxyboGqBoFqbnp6KPxcr9Hu5ohuzoizdTR",
  "key26": "8Zwp59T9ELagEPcPy7dV58HNuYAQqUqYzDgdmrzVSMn161uTQESa7UPUkKbyK33EiqK2S4Yhmhf22q7HgQwmgXg",
  "key27": "2gGZjNJHBPjH9rtujV68NwKBjs5RLaeJQXkHWCh7aGvmvi16mACHcq3u3QEGwjQAHCk1dbAs7BLGQ3oArWMJQrZo",
  "key28": "3BdGaJqPHUBUvQM8dcR5eHxN3QiHQ9cN3o68NAm5qYs6A6yPXY1ycD1abWLg83pGkpm2XcFWTfWCwPv8iGuEx7Ns",
  "key29": "5rQ1x5S5PimRDjYnabw666RHKtFuZ39iUwHJS2roaxy7hjb5w3QpomAeU1ksKeX977uNXkRE6o917QuQSo4CVePm",
  "key30": "4RAPkWPxUYxCayLFYxPfGXAoqsLDwUDggBU7ECPBZmToxHQcEHRGGWbX6tUFXMwb4uo77VPTNYrWz31BLyzYWW8x",
  "key31": "39CAW3uE3dGPESL3PXAXvhdEfy8z11wg1YkeXmaephU454Sf2WPE5mnWQYaFKJXBjby7Sa3GGkiVpj15asFYScnz"
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
