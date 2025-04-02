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
    "23CyRYozhcYAJ9A8FC5W1VL3PHqoykxkYNyg1sRWS7UwXPBP1MimjaEvPXKQXvutFspfAVVB6ym6uoPLRcHeczHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aHyobvvsmxe5kq6T8KjGeNSuZQRzh1xKL8toeXG23nVyNLoB8NK2tA4Hn6kDFVVJpkdGGVxWpidQbJE9exE926R",
  "key1": "63qUukAzkwgrCde4jyWEvw1k28i1NytnGmsKtNPWDdzM6ATVCxh57o11iSQJVdtWadATP5ax37YiPU3QMoLtfyQg",
  "key2": "62n2DMT33y3ae318D9cL6U55qhswPZHkkoRCtRqHzoEAQMZSufNQZQLY5pMKtDYxxFuaBbNx85Dp3dZn5GFgPUs3",
  "key3": "4cpS9dY71RRetDPJsDNtuFC4rAzbSKwEQMnPc89KEpLFrqCLH5kEjVNRNt21X25c4v8nhUhwmqEp1in7NTz35uB9",
  "key4": "5DBoHcGuK3ZGXwYyqamEdAjZwsmqpYUQ7t3PxQn9PdxRoaJdDoBJhbWcFoj1gmeaEAP6EVrn1FsgFojEZXY64ZXK",
  "key5": "ZzJSeMCu1xDfhPAxtsCr5cEdjSZeCXVwJHauxHKTD8nj7hZN7HKy4JFrKozmbZLZuCh3WhxxmxoujknUWzbMjNk",
  "key6": "5wtRwLPubA4jGkMJwdPTmxiJxgmAk5ppmhfcZTaKYSd9F95xcdmH7RUBXNkyNiBjmqdKyyanx1wc3Wx5w4FDws6J",
  "key7": "43AFPVmmrEPHDjBYdBAss8z7xHdjSR154BairfNjF4UdPmszp1drjuCBoJFqkpwWkiiNGFCRH2o4xGMHQLkrE3Zu",
  "key8": "2VRWCqn8h5wN2hg8YegKEoQ9vbTLtWzJ6wbANJ8iQaRQ6cL3Qo7do6TqTPnerT6Hsd1gBfSCazA8qLAKUtE47RpC",
  "key9": "2TafCyRkeNCUYPqoKUCkXGRxawUrKs85crvYj8MYaDk1B6goZvuMbSUwm55VSzG4BxrJRbsJrCt2MdwvkrEnq4CW",
  "key10": "5YrSVFfhYUtMhZBqBzipFEQLHwvYbSdE58b5uPUNPJi3CNWfo43sMAiyB5nPpc8B5yo2xvhwN5ZLpo8h7ZTy2vGL",
  "key11": "PLaxL6E2Utyfb8bb4zve1aqus8ZFJrgCoVJqtWzBM2VCv7BWr1fJHfG1txaAibTnkcuxeQjhbLvhndRydWjRaat",
  "key12": "5REbTKcWqXmTo6GZHphqTtF8UCJSDcJeTNVw6su1UH9rGx5REvmZfyVHuaHyPTxh2mEAd9F7H5RMocp66sJ5RYAr",
  "key13": "PGbDssXCWnGeKJwxPFmkYzdKt9ZW8vtxd16vQsa7EtPVTpydg7LXsho2Q2MQSuKMUzp9XSYhjJo342XsM8NnyMw",
  "key14": "49t9HdnHYbmSv2WEiaq5iHUhBGZGGdyxWRCnt4QSugAQ7zHMzMZxeTtRvbZ7E3rLFbfqSZbY3ChBMHQBnUtxg1NZ",
  "key15": "28gTvo2m461wu6UfHisDm1mCSVGZ7oiosQ41h53y69kNr5fygvRU9WKDAAFMxhhSNzgssFCCgMXdxVG8ko8JoKkT",
  "key16": "9PZiPdEw2UktTiWktQ8uEbBb83jgziKm34kTkiNe3atBaS52tTZtyw2vvDZUGbpX7LVg5uwyyk3U8S5G9bZHd3c",
  "key17": "2MhqbUnYwX5DjwdLEmPEB47TGFAks2Pak6STPoJcExsLdXHwJhkoj88FfEx9WY31GE6NBGrbXGt1CfBo7S8QbNjZ",
  "key18": "2VhRbZ5jZXvhsC7oCGazmPBxQminThWfnoE9MRbFoNjdedxpeLq4w1BbpcKhQEMytAcrP4m7PAwWmE1ZAM4xZWRX",
  "key19": "3PMxiHBK8vBTgNLfMXsSAabHWkYTU54Hr6i4FZoMCdb2FpQz2FwydrDp9uNBAL2muopXeaY6hYwDXN6qvGZ5sjjW",
  "key20": "4NTUCYstois9vztGpvnPbfsfkPV2f7DRt51XiZoDtPvE8NnDJJvuB7UnKq61NTaxRCQhpgySdJKRG7Q2nzHwqybG",
  "key21": "4EmTbSYwsQNy8yi892opcEQBE3R9BB9eei4XMPfsMww1PzzJDgc7HDYd6Wu9e5eBtJyqSUayFxU89CYnMa8mMZDS",
  "key22": "4sBpi65QNB9BCtPn9EXAsRNUpwppy3iLs2k4CFfrVqVdaxTu5Fw761ikaesRaQq2vQu9JEcam86JRS6MhaaHJEP5",
  "key23": "575mBHitW7HnM1uQEg2dLKQHSspKFYbfoZNt9eF2UxBvhotJZkNsQbGghM9kyfp6VV5RJAxLyxzC5fMonCAY47wM",
  "key24": "2sFpQyDdmLF2c2qzDbNwLyqrCNmLGuv62sZzqguxdzNNdjvDVTowcT7BBrQHEQkGBTxiLRVHLY5v4hXWqjZZFctz"
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
