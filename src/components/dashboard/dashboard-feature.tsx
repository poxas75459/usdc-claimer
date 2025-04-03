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
    "47vmUpS5nJq82iKKSNJE7PwEvFBSXY6sBmDGakBjscVZuaFVVejakVsgMgJBUWSY7iwvapa54pFLgh8hdEJbYq88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPLjQn7TWRyR2xJXZajwRSPNf9MgK9x5F381fzVRcX1AeKpb5XxL28rUwV2MJE3npjNwgMg1Qt7KiDxTX4BLoPQ",
  "key1": "2sVqqF3S8hZeh2twxbrMjxWyndutPTXaHdxBQKnxzhPc6VrQePq9GYSQhgYTiATmBexz2RccZ15akvRadtQ9aWjM",
  "key2": "3eHkiVjNFAADfNDDDZ5jSeNKzryNUEzd2zhpeSUwGG3LeC1kgLPQjPmx7VVzG1xbKLAAYNJEr2DhYLgZ9mfeqbqn",
  "key3": "2CDuaWiNSG1U66RaJWPUWGBdM61qC3nRsMuALHfhjUAsvD3Ju6WJSMrUb2LLFnGW6251BkVtiVkNSpuXv2kKvVdW",
  "key4": "UTx4mdYpM1gB5Lv7DieunAihfjKeUwRYTRYmLWV8YvPPZjUzUJU9QS937ZDfomTQVoJsFqzD8jQbzRzNL7n8QUZ",
  "key5": "2NhpM9p5AQiwG5TVSRniPgyWyhhoaBsQoUasCmsicQLeYRxT3PXuDm2f5ht3GyYNHgJR8qNWjSXTkqjpCdZBdB5m",
  "key6": "47zH5FrZkR712rH1JJy2jaAdSaMVmQtUGTmXKatK4s17f4PgvunLrYB4GZQrAokgMQiRd1M7WSthibzJQrqdbnVF",
  "key7": "6AjQbHeGqoo43HWU5tYrzZhSNsfy7aEPxKMhtPc1JwSX7tMHBy51gfrqqMVzgkY9CdS3iR94dwbhsx8rpTPuSbD",
  "key8": "UW3NMXJ9EkoEYy8rBLEABhDmkisEpzVEQJfAk3Vh7fVAqSam46hASu6WXjUDqk5qjWCwcu5QxkGoAGxZS5mDtEw",
  "key9": "3twhExeL6xXqJd9ctAeYc95wUWVRVYNW6TZb7na1JVFmcAaqXry9XyrHBrQqKzKW23HMkpBRmayxrEkEGfvstLT7",
  "key10": "4T5A5tUzTqwDQYq3piDtRsxQmCdKKrPC11odBhB4zaNmhgyfCWyMphy9rXRpft6x9FhPGYcqhVemT8FRoFr3FUDp",
  "key11": "2kvuSRzRUHHKqc4JHJQLhaDMdFr76MCfL49ZFQVVka6itFQ7DobicAAGsY4ELVpBTHwamFovDFoGrsCVdiWxYqkU",
  "key12": "3uQ6LeDWpkgi5nnb3VNMsmiHjqpLbR8UJkpc9Tzbw3G9KVMtPmNqdSNfun7ANuruNhx8FgT8kjE3tG9P9hFS9zKT",
  "key13": "2NHnMPaY99S6fW42b1Zf6Z9kpJ5bQwpm5zHZekEpRLMtySDuW5KuKRPZyQrsqrAqpsLemrVARx3NwupbSLyxZgUp",
  "key14": "5XBSeqW3x2mbFCtHaD8r4QEZG2SAdBAGEHdBPiaejwmqcUAkbh2GrbP6XuPAHxxXZLws49D1hskwHjMo9A4zqEf4",
  "key15": "2X3hiPrUNcd27pJFcSESWKggLniWqVCyKMLRW91a4972rLHpGteue7pWE9UGVVMVaEjnRtK5bPBJhfnc2QT8k7ed",
  "key16": "tNGmmNC2SbUL9WgHqHdeNDgsf48rsuAEUzghrBKXr61Hcdnp7qGrU234CNZ8BTEdm9pZGaYazXwdzhsMQuwBbzK",
  "key17": "3gw3rSP2Tp5jr3jUorCM2NVNv69E5B2EbDNEWtuw66yZEZHBP7zRvRDMjjg7ngMbP2JtsoYJpQDi1DQKf7tv7BCZ",
  "key18": "3YsJF9HwG6psbw5vQc1ibf8Bw2VWuRpZ2AdjQfxZ5GiXa5gxTbaaonSe2KPXFpUR96fRqGkArk5jxWYR7UDTXxd9",
  "key19": "2ttxbSP6NBZj5M46j5HdAkc1E6pUMm6pGwiDsM91jCcQ2fgK1ak2oDgbcFHMNPMLQrBAoQduCTNLyD6HWt3aYU1u",
  "key20": "2SFDE2yqoc1ZBZ46RT7SvnvYz2DSaGRTc4jsWC9EGCksexJjjxFb5VyCDWJmYCCpFPdKdtmMjfq2EmMHNjsVtyoW",
  "key21": "4eJRyZd1ZqRTHB8TEJkpEaKQ5tPdUN73xq2dZNLwUX6YGSRHe6wNj51D1rvKBYwKTat5UR1iMcLTQEBSE8pn6Qse",
  "key22": "21WJ3UeK9L4YQWWFfsQNrHfb3Qfoo7f5u3ug4ukRVyYWsH6eXgZHVEDwQDzzKtWKhVfkS9YpTjfcbQumgbPKE2YD",
  "key23": "29HSgzMToaxLYq4RTXPqRTe6TGZJMfTaRCyKsgmhbSHCPQ7Lb4yU4LZXLeqUyeXc721N3MpSjB8zMgFPJTWHg3hk",
  "key24": "4Hgt6dtSr5QmfT98GMDQMsLuVvdy9XFZekNxN8XFfELqib4mPN89U8i66fKZFTNNP9ZiyMFKHGdoh5NUFoFnrWgt",
  "key25": "3P9wabaYP3szig2FuuD6PNfoqFqd7hVC6WDH1HrYZqnSRKYdhyHhKoUJFxpMcuiYKHeXfMPNp3rjbtJUTdXYcbcQ",
  "key26": "n72Zk7LT1Ua64dtLz2c2M4ibGicsvTWYRUPnwE6ELXJxCqtt5V3aQEyrK8HrzV7MB6tR9UHkcYioUb46eD3hZX7",
  "key27": "2Evot8VViczfSLFC6mj5QkucGdZ4X2AGSEpRw7z9sV4wfdA3vyqCueuJpwo13SDjnF1x2KuFNCitm46mRyjjV54E",
  "key28": "3cXaDoTa2HnUhX7bL2zD5F7tpyxT8NjnQNGB2sG3Fe5zLpGjXr6JwVveSYbQ8qBgia7WYQG2S97Qa3ZYeegT8wV4"
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
