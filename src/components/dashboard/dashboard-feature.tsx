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
    "4rFieYqWq5fmajAiNsEsuy9dnmbAmYFJvzGSn9TKaR4pgCwvBvg12N5ZzcuV3PUP1HmWwCYSVxTp2rhZ7V8vHCo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pe4DbfLa8K5TkQy92Bw8QYjJKNi73qvtkJ1F11RqJYsqjmDTY9LpD89mcm16PfoMNMcoWrgU4V1cfJQ1novmG8d",
  "key1": "2VvTuWnitGd7RdNuHmmzkoXCkjayryM9AoAf855DLPGXbY2tmHLNs8QCJGXUQ3CFHRkjihcfaKu4G9RyFnhzPvpn",
  "key2": "5wzcsttgNuzks7sEvsXzECQLmdiVkp12j9GTTems2VYSMfDeDw1um9LT9xNULabdeMHbHj55n7ry3fGoAKcJvQm6",
  "key3": "3PvQEvqCrZYSgtgLxzxNmLdC7NnbL59cWnEAypkJE2VNXAdnhfRrJWjTFATCereD6ZaxwoXtKPzNioJFN4y8hke9",
  "key4": "3h3qA5Mrd3M25f6B3ZGNQszvVZb6SbFZjyFTUNRSpkYiqUuYP3FXaoAcwMkXVC5zyMkPQKSEV4phisTvFrEX3vUg",
  "key5": "2WLCLChfdL6T4gQwFEc3KEopgpiG5L2VgEinqpP11z3WMmhux8wtyK5zKKTSzn6KSS8iTETJVqgaRX9QRSxgzfEK",
  "key6": "LQbPigSNJacgihPBGCXa6yGHWed5K5xpe68pmeuH9y3cHsj6Emy2H9EWBCgHTprkVrvENQoVurDhZfpdzHpuo2X",
  "key7": "2xQ7LTnWkCxh81CURVFTg6WeG3FT5VN2GxxLvSbMwwUr4TadqdpS7qZD8ie7PN2xe5yo7b7Zxt93jqkFcmVNk2vf",
  "key8": "5Q6rwLwATMQUbxivCZaYrrp4mmnZSRNzuczX1m5Sc91AgYzRpqs6UAx8CRvmDbjzYc5Az6SthV8UQ3h76QuDqWid",
  "key9": "3NagHq3iqVoPqZBtNLxyWuV6keeG3viR9Z1odBnBEwCgGujVnPzfTp1yopj8PFz4kZpFRgTGsegJzRiBtmM7idr9",
  "key10": "518b7G6Lww3KDVRu5TfeTYc4BJhsCfLowDkqP2rHNSerKzKNZip4QfmgvuDtdtmSSTJ3odtGKUGkDH8KT3UgdGJo",
  "key11": "4ajeYwXTSPFjGtUkfpxUaXhUZ5VdrXHKGX9H5KCKEwBPHScGF3bcEjsDDzbYunmBmmciKoDQ4mHrSdYm1cRwutkN",
  "key12": "PrEF3MiMgijrKDkAuhG2r5bg1qdm2jbN2C7kgZdZWQ4ndvJ1j3yjNYWtdYNn21VUCpgk4kbHErcaWRgap8Hsbda",
  "key13": "vr8xomDs2sd9czUgoj4X56c4x1H1r24oUu6kzfJX4UbwBymvYRrR5E5Hc36oF3ZhVQxymqePMzKWaxPPJgeNRoa",
  "key14": "3UCsUAVpp5U6oaxrUUgK6oVQoFuj6JmtRFUgrxKv6NCJPN9THKkE2cTnrn55Q2bxLyXoGUwdKdrhbZHL8JguGbKH",
  "key15": "5RdK3EFK4qzQT7xvUAVjGUrcxqtq1iXSvaU774JaRzQrkDzM5NWoULQidckyhmsvJ5hGtU1w2wJ6Qqh4mGbPoXik",
  "key16": "4MC27CqMHxdn7fT5pwMMboasrkXSqitZANnxydJXG6JpnLhRE8cpY1cXo8R5aPCWeNcygdDXPEo1e4gjxeQp3M3q",
  "key17": "4xzdjWxMc9ex8B7AvPyGsyX7wDKaRGW5D7Mu5vRci4r84Nsc1A1UkMucBzbooQjLG4TkUJVWssXFkYAq1XYNntHo",
  "key18": "ogm4t167N3WP5Gkgrp3DSipKVG19bQG3gyu3EzNhV6h8GegqE42JnCU43GHPLwTB6YzpVgGHd22yDmhaQy6QhAb",
  "key19": "5TFcJmFmVgyMnbFgp3sd83HxyvZvQARgSMu6vQSF7ScbYJX5Yxw1K1hpH2yZkDFkw39xwFaRAZXGSnJSLSBPWDqz",
  "key20": "5kCpgcCEV8K4s3fQ2aSdC85SVYhmiK5Zo3YdXseVzT7WV46JCLPP2EJ18nvJj33ZBsbkqnb5zYrKoMNL2jGjRyc6",
  "key21": "3DpftV4ipsn1jbvVjG4AQo4CprDi9mtEn9MrF9u52WZbjoSgH8KRMKqLHBLfBvpzVntd229RSvst8KpD3ZN5C4is",
  "key22": "1eHcMhjCPAM5Z4VVu1c8FmYtxRTwPEJ7zPofJKSt6V1embmGfdpQc88qpKcDw4wuDvTz3ttErb11nnWdUFwZ2op",
  "key23": "4nJGVC8mNCEPxdZw9szLZaqSQbMGGPqN7464nQzum4jdPrYYHYS15ds6Z9Td4N7GTimHLYNgJNML8yYurzkFyXut",
  "key24": "4WDci4chj9g8CGAsPicwpPJKPVrYisYaisE8RSGwb4xXQ1YNPyX6NvYBxty2RkndVHrwz7WT1JfCGRf7zDsqefDQ",
  "key25": "3memtL5h2hKhkUAFe7sVSFRkfYKJu3tbR65Pnkadfd63AmUENtiUqV4LUeHVZnQw1Pt6Pfcf9KNqACM8thEDu3AL",
  "key26": "2ggrbFCmE2tVa4tCZ4vqvXtjQWVdDW3X7dWHGF8mv6aMBCPtsPWChGq51nMUKMZaQyrMMQ4T7T21SsZ8BfAQuQoX"
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
