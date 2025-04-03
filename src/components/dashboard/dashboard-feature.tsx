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
    "sby1mBMstycege1mtgLrckJgWMutM5DwY3JEMaMq5QTAtTfymWPV2xWjn6QbsYuzKtLQh9dJ9dWYhGLNgWSGKo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ubmgoa8sSqxEiZ6Ze1mRFKrQBFEFMBmyZJzrpctNsY3XiojKgDon1AcUTc6EZUBxHToWjYFkm4AGkZSKHRf4AzR",
  "key1": "5KFncYXGtv5HMtPwJmfAAhzrgcDQDBEShiAtAWvf5h9Du7agsBDZeJsnWNiTiipDxbANgKYgvjtNeZmgZpUyEZft",
  "key2": "5Gy55dSCXENaRdLwwFxJ58KUWwjTiv35UiJAv5V6HJCMTsVY8BGAqXBKZkVosazpkEsYhDT12cjyE4g1x54FkHsf",
  "key3": "38M8ezv1FU5oaQ26QHMRPL6sojpqL8vkuA4xBRm9u18g5kY93x6DHKWEQS1h7E44VtoYo5NuxMZXoPrbzRFbj5V5",
  "key4": "4RxcA16TS1sPkQ7goVjyEBD2E3HAZEFqDrEgFfKEA2qMZEWPzyVA52UrjLhGGgyS1ms85Jq2UPHoG6tS1MFVZ7Sc",
  "key5": "G91x5PBNUgbFBopPg9bW7HGbSWxXZHqtF9o3YxmrWUNti9hc7k5nmCxsfAYtcduMTVvEmS9AhDgpJHan4QM3dAX",
  "key6": "ZnxPNB6k5H3hrUwUzk4g7niSo3YbG9q5zTLx4hCxeGzs7Q8XvUgkmzAwnHMwWdeEEKA9d77bVf9ABkP5RSwDPVB",
  "key7": "25cRmwK8WcXMdvTgV1Hf2FxKbuwdb2SXJniqZvQPSynLdcKS4hsUE75aRUvkBCTfLrnQ8VFmtukB2LrBecuppKSK",
  "key8": "2YpoSrEbwZbxJS9srdZTYq6s2yqM94tk2DwMKDccGEwhtaLEim5jNhE8GtqErZY42UXLNdQh3ExAaFCNchjPVwFG",
  "key9": "2f12ZYSXEyDeWSeaNprBNGUxxX3Xd2aFYcMuwFzNTPG89mCF3674qUuvHTBoLjVrjQ5HhsGDCi3QEVoYeV8CeouE",
  "key10": "5EoT7uZxuM3kM2e9aMfixGzF4Dc6AEWuXW69PNkHPpoyhWeYv6e3HcjbEXV7UXstDNFaMdpWfr7w3JjK5mvcPVzs",
  "key11": "2MLo2ASsiQb346jVzgb7iY17UpKbGQyCUNNh3Wjx5RtLVGP1kdjySsrfGnRg87Dptyo9XuBcvkjB6UwdEx7KN1zD",
  "key12": "4NhTAkJzQ7WBzeDXxqzLyEE15U5pzeGM8RhYRNuwWx7b643HGSTcvZA61xh53siRNwTDBGiJ4MzF7JE1ptZuhfY2",
  "key13": "4BZcV7jbbuVr7DckR8N5W9oETTZZ9fNCpAcBXpV1pNJHworYJUxFaj5FQrziDwSccBqvw7YNst5kE97VYDiz78JP",
  "key14": "3KtvjCwRuGehcFdV3SFjyekLsmKExVjBqJLC6gknJHPSeuET1qr3qYMjEKQXW4Mk6hSFuMLgN2gEc1jQ83vhRsoe",
  "key15": "2Je4WKDUDQqKdYuiwonKY9C8TAwU6Y1K7G4tjrvXEErnNPk7rAYmP976ufV52DwTBrnSEApX4xu7oGDy9ft4Y9Pc",
  "key16": "2EQJEwaJpZctPBVAfR6b3uK4F7bMVXbNd2QdN66KN2pvDsNqFiNuV6X8jszDz73WoBgo43WHZg4YQKAaLx8N6tu",
  "key17": "4j7Ujog1w8wtyjDnwG8ym1Kc1YUbp4SRnHUm9GGVJVMAyR8H2DYAMSrL5N735k1XKgJH6dLvMJb7ZVXfmRyCQynV",
  "key18": "5mknXiBQC8vHXzTcahHad8M1yFDitHzV7uTpzhkmxJefiAb2wrwQuZqdcPdGpjZDx7aqR3C8672BpnYC6ZRsrDEN",
  "key19": "2iFeyqCqBYccK6xyFinFK1T8G11ehnYnobC2bVubtMHhaUWmK1aWc3Q3o6pxqyv7VPK3Ef583C9igHTDAnjmR9vH",
  "key20": "3KvcbrotdengytGzBuksMxmu892hGMpwqc3avjGaNKZrbknBeZSWHJpTYoNXKFPT6FzzSANPW1FsjVdaGqRt2LNr",
  "key21": "3e1vPQHmG54UxqZmJByyoCZyYguDLBVq1n1sch3r24LgosBPwg44xnWUnrQLtKdVijQLVzYcF6xv6UuSbGRgqZft",
  "key22": "4JqCthu88hiibByyMR8kZUrt47VK8VcTqRSkG4fWCLL5YUcTBhpuJn2PSQEcRibVS3R7Qm78C9iaLGVW3k2Lr7qV",
  "key23": "3UXCSb78t1cxK24UFYxiYFLSHvtrYCU1rjniNnr7b8HMDXAjwVkwc2aVB8MSr274HQwcuv1WeaaNubo7fQknLPXy",
  "key24": "2E751AvymRZDmnB46t2X9jubGAArLkcohfpvTBTpCjyLA8XX3Sv3nDM97sLB2CFWK3UjgtaE1RCRxpVfFvUrWjt8",
  "key25": "2knD179cak6DHtCcMpaJnJih9DjVdPVmF1nih4vUFv3rJ1PGw2iP2WnvnyQHuk7iKWdNu31AF8Y7nSUrBLZyVVAD",
  "key26": "2xQUa1TALb8EycMPgrk1EthAu71mrnw6cLqkcZ4YSpuDiCmFP364s8T5iH3UuuvN9KRfoWzWVWZGpK8TDvHtocmD"
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
