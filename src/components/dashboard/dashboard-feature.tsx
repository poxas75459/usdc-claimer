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
    "4HUVkoa889FoN4H2ZJmhmFRi3m322ftm7YDzpYzyFe6kS61hmdUwqpxjfxhqPsCbgfbVhyQuWPAaUAxDMnSTa6sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPYtCaMcMgRMr8Vs3UDcRUjQtdv25kKCr3mqusS56Kkd77JCVRYa7Gp58c949jihn1YXWWMbNL4WucabPLRgi3E",
  "key1": "4iLKn6zuXLH8cXaTKJTc5cuTAjV1KycXSPLf3DYDp9MmzTkwPE1t1w3astGjEKkppgEhHYz4Y3EfhBErEpENuL8N",
  "key2": "2o4fM64hHmFe9UgsAso4b7mpeYBL5CV3LYAwv8prKqLCSz4hCFfk2wxwwbLaWQGNzsvjQUxM88zN8yjWX5zdj6FA",
  "key3": "VM4BRfkGsUVUW2RQ14TZeS9A39A3WwGfohVpxYEXwZRGJtSot5q3H8hzLdTGhH7HJi2ZKCuAndFAwdw29sNmqs1",
  "key4": "4sgfXo2cYWQEFZxmcZF6QRSwbVWqLgjY2vX1ndw7QynWLt61cy7UcmeSfN4X5BXkESXGkqnMTkY97zDxiBRfqm1h",
  "key5": "3MWWNJHF59aXrarU4uREj3XDgcu4GQqyBGgJd6ZPvxgevjwttpc6fmoFNF3iwZADvxLfk1uSg27dxZCqYdms3LPa",
  "key6": "2dJa1nJR39dKHLCkBAyxfA3oxwpMfcC6cauWzoN4TUPUzkAWQdQoyaiideQFifhKrnZ6Jt74LGwjYEzxGJt2aicM",
  "key7": "JazEMspxMTAd4D3ZRtAccmqvFbEDcWLnYqUTt1yqnxwUycYTJqg2K8pbpvDyXKK927wuQoChje7JT3xWSE3Doeb",
  "key8": "3dXYb6PCB5zXNpCrpUy4key985WyeUzvRcHQEbDW46mw7SogeEbvbzwQhEULE5fXVGc6MFwDhigQcveDKMUTKxiH",
  "key9": "QeP4ghgdQLkCC99LrKT4f2XPS9qMLQYbDEgT8VdSUDn1iHRhyeRctaHLBZ6nbSGpuxsddfLbSWnZEQgVEDvZui1",
  "key10": "2hkUFj5GEMoMvy8tgFcqquRQgChb8PKrDLcTKbtNhvzzAMDNL4Kg9AAuT45DQfx3YN4YRQztqw1HWFrbWG5LnwmX",
  "key11": "5p7XkPpTyyCaLLX2VTrjAbUznFkn5tyfrXXFmGBvbEjckNMezfdiw8UDLtApxJ9NZJiPmfm5MYJAB4wWsnuvqTEx",
  "key12": "64GnAWP5zkZ5twupv9spBDCmkMKShxSGkTUCrpxoNcfMu8QnsfVTPEFPrzgBEyzqYqQywN485ipy3LuT4GLBynkp",
  "key13": "BdzTt1HLVvQEHqPPh6QiVbf9KS2zoXrsZb7skqwfEPTGQnAib5yhimPGXinyh4XwLzFgioBqgBYFaG6UwYV2a2p",
  "key14": "48ZMEf71iFtDCqeEMrzsTHGi2QaBGifo3VyvG6jD9yTFwc8yrYqJpCZKZdSZKRX1YEFa7JR9P76zYHvPTi34pEm9",
  "key15": "5WG5f5FANmyS7pt9UoLtZkUZfwRwtkEPMU5f7YoiwugtFmoYahj7DpCMYx9BAE5GUViibdADw2CoMKtwbESHHB7p",
  "key16": "5rvPzzeMsdAGKvnm2kUqozdmDtnScj98v5zRZzBCi5yjXggiQ8QRQarmuq6tjtVVZTaJXgZDejDG5X5yNQBT46z3",
  "key17": "3356QCVEvhq6eK4cdrLSQZr4jL1m4NE6M8xGztfN1hgxFSVvdrH4ryVDYj2efLXWiNCcbKwmRhqLicqKGkJDNNZH",
  "key18": "5qLyEQNo2xV12kUV4PPt3Y4euRWiAZLrCRvMXEUXRVDCAHJXdjRxF8zYHgaspqDkcXsfekmfBDJZYP5pAxZouTSW",
  "key19": "5BTYWS6dyQ1DKGz89kQKvVYY5osAsWcT6Rc4faCmLXvyAnN7Jud4exSTfMcVVCmqTuXD7QJ1vwvbAmz5uFyDWVMt",
  "key20": "2MQGUw5CuF7UfvjyCJman9LPgRrQJcpct674UH16rGPfLS9fuiY5nipzgVT6RkDdmVyZFP1aH2zoEPYkjN8P8XrE",
  "key21": "5SgUKUopobYqKaobneeX6iPuSEhcXPnvYqi97JR67zFYXDicLnETC4iSYK2viEt2aaPwifDWDgB8T3UFz1UpZ5yY",
  "key22": "2bcFWbJdgYfPTe35M1c8qt1q6j3ioSWJ9rwBF9ed61TJN2m4FFYCyqC2E3dw2gh9fqH3uGSWpBcj3bLL4HEGPamf",
  "key23": "3iahtmzv9K4rQkEr6Gk68rmGonNqYUknexJMeB3mQj5cpgk4WEeEdYMQaYY9dyWBdMT6y1oT25SuqzAbd3K5RArg",
  "key24": "4k79uGSYgocCFurRLVhA6Z5iGZto8qxk3TUbX1fhPxSbzCyJbBx5Q5KJmRHeu9iM2dey1LAFnFS12mBHRRf8ju7S",
  "key25": "2rvsv9bxvBoQy26ji9hepFtG2pnXnzS3J1LvZEr3rCz3Jks3QivoRogTVkBWQsDpzyoYF3R3FJYKp3FZNTrwKWaW",
  "key26": "66hM9kygWvkLTg2qjrGnFnLEuWCDKiHHPQdXZYBQdj9ShKxLuD8MZsX5zwZyR5TH1hHxQn6iwht3F5CzuB8zRGHk",
  "key27": "2eTbSrZGbqcYF3xhggTsEMgCX9emXYzB7xh2HWwFxjkvMc265oFqKwXwdVgjogRRx9zgh3KX8PEx4hC49UHYJmQM",
  "key28": "zJU1fFZjzpPVXU8ycjMtxoCBnGj99uYsTdBDrTPPQqGaAS3qDLraZY6zbv4wyHvcQRZKNb3Wx6mHBE1QHJo9DrC",
  "key29": "3Z16TWW2sdXhXrDWAMonMM8omZYVbh5m8sVvkWdqDC2ghFg7CLqwkbhSsaDSEr9uK3aG9jFWd9k9TTGLe2ppYgjL",
  "key30": "GWNeEhabYtQMT6Ac7QBZXQUis8p9DGAtH71vfeGk9zAtFosfyA99TjGu9eqNGam9rVf5WUZ1kZUJKV5chvCiNjP",
  "key31": "5bAiaKiow3cCDrXoqqxrCHhnPkVUWtTcjRBCtsrCu69GwiZ7c7vnqGzgosnJK4yrVKMgJF2yHTKZTVpfa95xFsMe",
  "key32": "4GzEn1qcq63KxYkRC6AGgSaXEfR1JSzvM9u22jh5KCWJww6quKiSBgydxRSeXEhF3CHzHgZo3yqJSRrBTjiDaidQ",
  "key33": "416FjC2Zhm7K8cLGKCBZPHDj1HqnQhaf9yU7ftkxaXuVKyQwFFXSNQGzHWe1ZVkB1H9FtbitKEiktXvSjBUNY5ge",
  "key34": "54QWSZprE8F7YTM9huLaWRhdntWYZ36tZbqC1bcdbyM6TTpZLbQidghr9A57ogLsjJEMRDhnisXgKiaFJUjJYpFG",
  "key35": "5zu84hBMvMEYXCNEfb5c5xstzPR4WQrfbiiXFPYGXcLr2zLzWfyZ4CzoLCn9GbofVVnJS14MQpAUhqnH2BihqQcu",
  "key36": "3jKnb7R7TNAMkGhayQtSFJqAnLHfGcJxYdGfs1oiTbmSh2siQLhnVhhJzbKyHVMWg5rgSSFA5i45kghWQgSbphuK",
  "key37": "2ofXFTLLASmRXXvzE7xoRdyFj4iwXqgy5UFKjjuNYyzDizSLkhiuyW5ofQRGF2t4Y4buKgUfyauDvS2YrLuXHkQZ",
  "key38": "2VwCbcutCkXuiuFP9UUj3MYe2ph3xHsPpRBspXHK6nHKDcNG4AMqFh3Lw8Gw9pBAMg9CM3HydMvhNFaGdvqNU17j",
  "key39": "2cDX1CNW7reAoxz3qdYx1Kir9YGnohnYJurMxWzEAX6R2AnjwDYQXuHsg2Ewab5hiGHCWSjBLdSEfLVEjGes8EZj",
  "key40": "4r3PnDN8nxLY1h6cPmvLnct1VgNTfimfEkk8o4yQwRuBvodH3sXrz5udCJU1WKdFJaG7tZg75ZWgSASKzzz8Bsv9",
  "key41": "3GjUbkLsGo9mNW3k6nAmMHBvaqDw5SJN1QznFupiS7oUQowYTvqAxrPJyskR3B2cyVkxN4kfqZ7RXQgSs7DG2CK4",
  "key42": "2KRjnjW9HwQ2T41mFrzxtDDXyVCQ8hz7DG8GWcMMBhUfkHTEPjTPt98aWVhtst4d5Ct46fJivAqSrp8L57k8vfRk",
  "key43": "wjVaXwDdN2bPdAwecxZR8vfsj9JeXmwbV9DLUYZ7oZt6RNQtpR6qN3aUABZd5qKWSpKXCmxc4NohdbqQWNocqaY"
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
