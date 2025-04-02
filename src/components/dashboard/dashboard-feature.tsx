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
    "39N4wa49YA4NeLZRbS7t2LPHbdbKSmjXVexZKe33hKjcMTcHePb4dFDK3cuBt9Yqs6tuLJKvETigqfCxNt819AYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXZuFWyzgmi9PmVkLW556z8nKva97TTkHfXYCq58vcr8ytrca9UgQsTSqCEMaGMo4rw4oxBv8VQBZwnpLLtnqKU",
  "key1": "5nZkPkjwFAQKAiF6GG85ZxF5Zfg3PPRsJC6XiA2vQgY56nqMMJs8NFdRGTztUkQrWF3VJhJeswBvFPJ15vqp34Aa",
  "key2": "4HPFmTb21NuBcWZJwvZZR6rkpE4RW9VD5JLitHt1QyUkFtFDdVCzSgCFGTCFdB1DzDMNCRgNCrvG8D7BZYcgDsEx",
  "key3": "3JPGPw1d5bnoofe7auwbK5epVWkTVqrbm3JUPQpfJvCu4P75L4B54GSCPvQ87Lgt7MKqXA8wJZhJ12Fx3ei3U4aW",
  "key4": "3R3s1p7jAs7eJ3Zw4Lf7ThCiKPLA59aERwDmEkihDx4bFEJ38txKf6hthF31v5wDJa1TiAETpvHnNibC1xN28aHS",
  "key5": "U1H4TS1Et5pXWHwY9tkszYxbKD6ms3TWjoGsDE6LYwFo4aLw6GsFU93PZzZZVy8ai1izTWAG8yd8ervsqMXaLcN",
  "key6": "2i1fxJFvG9tU1ufwGnBjycRbTPut85zXBRuBtxt3SfpsBHJHKvH5iJ7TK8mwHK5tZe72XoKNosk59kyw1oAZzgLy",
  "key7": "3F3rYuWP96tKiGCidY4896xxHhZC32ebz4yqsBzyzGnM4QxkxWatd74zQcAXzNmguW9ojMw8u8LVyR14G7NuLWr2",
  "key8": "4zbLCHXM9rfzQhbCunSMvDxzhnhgx8vFT2sHx7sxzDmvvzuNL76G8an8Kyh7mEfVkATATEhwVvdp9QrVtwJc5oLr",
  "key9": "hH9eBqXVJwaDsqCQiXnCK3Yy8DpNJ5edGNFFP66pE8XS1hY66Csc7wMbx5XgDf4PAeDw52fiSp1zEywLVem7Z1k",
  "key10": "a4YheKBwWX7uzfKpE8pw1Nyi2jZUgM5LybpNmkaaiHbSyxMRV9nBwuaBFSaAhLWJ8LCJv5ucBuycYPtrdegtY9K",
  "key11": "ZLWa9sGEvtReA5WE2qj2VuVEk4ZbmCyzdHxCJqoCmwtDgW9aD195UxoGPpdFKRv8x8eY55XtA7JH48EgCbjK4am",
  "key12": "3anZDHqGtgNoJ63AQ5TXfZMGYnvpBC4VZyEkJcNNe7a5NqpfLMyVELCtd6oLPrtC8rX1foBGyPkMGFpurEUJ6TRK",
  "key13": "UmGfqhttU83hdPRKfvyUmthBj9trihwXsSKP8L8eQ5xVbWrCxHsswmzx7zXK8FjtYWLLRaFtagXG27jxkTwj7F6",
  "key14": "2KV6KevU9Quc8oub7RuV9RV7MkU3jsSQKkP1y3A2T7g1F2KKUqSfRErLE2xD3QPQdQdmbRqiAJ6dbouSXwkT2pVT",
  "key15": "2V6fA3LwhpU92Ncq15g7ePfG7RpbsghbXueZoxFu6kopAsretTpUNCfJQa6GGeQfUaMLTLfNH94zha79NvnURVwX",
  "key16": "PVd4E11WhPnnk44vjvCm5nkwm7JRRPBW4RL3H1CpZ36YFtrpriS1hgH2izbwMd9gCEy96EZSjSjDQ7kkwf9LDaM",
  "key17": "65QGhvJq8AmJju6fbBijVX5iwBVKp3iwqV5NjfECoS6XsVFRskW4TbykWdmZrRMcbPSfgaTW8XL6naW2gvWCSqaC",
  "key18": "329Vgmr5tqHKenr4r8jT348APKATqyXiAy8kYH6533TKjFaCWfsiorVG3ejukamKnCwLa4zyp6koHDwHGch1n7Cz",
  "key19": "2Qxf3bY2sC7YVmU2wsV3iC6XUteaYY3Ws3vrM3rbrqKVYB8wrUE1Fr9vBhi6pNvMZuPbhRDRKAS14CtSWPQiwB7x",
  "key20": "5wCdyVLnhA9m5sk91yaAwk7XfwKDemFvfpX99r2v5GaGDajVCnjgxbesoRxXGFZq5SHXtn3jAUNrRMrLFZtfP9fX",
  "key21": "4PdL7qLqiGNRt7MWmM9E9y1ZBTqLXdEeXMZEUWnUsaEUxnsQFUD34z9yDhDmtXevPmcPttNnZnnr3Xuku21yybLs",
  "key22": "3PB7mRuA5Ucgo2BL8ZkRkx6TBdonWfAHvMhw4WSt63vm8Q481dd44Sk2CfB7UEgGaawaCDVFgwN8TxDvuio8fymM",
  "key23": "28g4adn88QuuYoFdpjXVdngiweem9MMBJE9aajnPZQeMv3EtuH36udsrnnADp1ebsFXUxVY8tcZDtEBJaf4ZFNvp",
  "key24": "5RWntRVb3GVrLSrdLvFduWmegxaJhVFJHCvFKQx15y2FNnJs5gxHCV9wEozHTdvm8ZGMnKEJgoDyxm3a8YfYwUvZ",
  "key25": "5AmSBjp977hY5umdX5jtBcTyaKSkvS29pDxRqeTqPUbBy4izSEanc6wwJxhUKnBw8FMwngn1N55TGuvh3ufRZuaB",
  "key26": "24QEhJyKYB4yEXxDuXp5M9euy4MbSYQSUC3Ki6qGibeqWbp3RZPYQmX6WwRNFgvxVBSXWaUui9L9nnnEDywJRaDN",
  "key27": "5MSE9XdgvgC2cY9vBDZHdT5wqYN4taBMy2haxhGhSrJD2ScM18AsiZeHUSCUUuyU1c2iVMp3FgHbLNg87cRmbYYo",
  "key28": "51Cze331RtBFEz23S8XfFsR5s4FwUDdYkUhwMvgjKLirU1KspjnzPpxSu38u5qNMFqJnCVSR1GmkXou2nLAjt9hY",
  "key29": "3ogZauDDvbLzKKKgaZbPGrdVPvGicra1woyYoAThD7mX5SdKNM9s8U1hV2vjYaCZs86viFLDaixBuszdo2nW22aM",
  "key30": "56AjJLB1YSufruA4NrtTE9q5ozLK7uFRCTrFfsnkdyuDheAG95oee8mqiJgQyL6oxwdCS4kSRAMuRE7urQvD2Yat",
  "key31": "jVMjV6zAQVsu6jKwKAEX7hFioZmjFKQRLVtH1cZQKegTKxNnoJsKjgKVCUiSVb9p9YBqKtELwr5WvtuGrJcXuzr",
  "key32": "snsJgkCHfNry178D4mkB2yBYMC3QpxuEGWVubYd1Qxyx3e8E6fo9zJ5xAJpj1YxbJ1wsS2XUhdRr3zudrTC9Z1e"
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
