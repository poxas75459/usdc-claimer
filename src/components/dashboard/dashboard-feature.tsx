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
    "esoBaEUk94Sd8jKPQ8VTgr1oBws5DrvuCfQu5kRbTyN3GNin4AawaHT8zJNXsMnuTWUmc1ND7d12qHovesaHpoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRADEUaLb84pN2J3YN4CNVeE64BMnKLsBpPVSHkE33H6p8aLmULMquJSJsCnX937udyAgSCzfcsrAnha6QZKULj",
  "key1": "ooX54g2K2za3uEQjiSB92RFy8DJeKErVHHptxkuUYUtymfEXmjGYST4aMv7gAQJaT51frzCfiLt5HWw2qYuzQL9",
  "key2": "5kvSfmDK7Ljgq4gLNXNqoKKWMwSAKEpL3uiLnebrewt6LNKpTP7nw9w92QxP92qPLyeGnAsuxgxnGUBh5ZCTqDxu",
  "key3": "67YhvzU9MwJb45YRBUerjgcWpkN6xjHWuGyab7sXCSQUZyTB355p7JCDj2r59hRihttBNPZf678yZRp7X1bioZB7",
  "key4": "5hF7VESttq7ikDnqtoxMnqUNr8GXBcw8Hc1CFHSvZmUcuEtUkS5DFYJYTbkDXvaf7d49xp4u1YnYwTtvfaXrnHE3",
  "key5": "5whvrWb8DePAcUAqy5URGd9YKGHLeqDQqn6PSPuZZq2ess6mKFro9ReZXpnZPtMLENJZsJm9QENy7VbkjXAZwYED",
  "key6": "3CgVCWeNetAGykfufUVF3VdSnJqp12EoaUJ4fCMbangTQLo56hibJtndxmm69SSYwX1NNg1fmAvEtvDTxHWQZHqr",
  "key7": "3XJeckvSqRSLdigp2ddg6Ke9RAqFDFWMBzgQrUqZBx6FpYMz4KktrLzXaH1p1zLozVHf65mWwnWcwjGC8Y7smjcT",
  "key8": "4wWzJKqaLyrnvNKaz4qAmYUBCU2ekSXJCqF6qeYqhHgS4qJi62cPyhgL12NnKctZEkLXp3s2cavxfpYoPHC7ubSV",
  "key9": "5eBo9y7ex6s9jdLoz4amZ4d5Jxv6VEBLrQmg4gbKH7N1VxnwnyBfWoDa4L9YAstNrdkYrf9VrwwzK3mG8cea2CfV",
  "key10": "yRRNxsQFHMra5pPhpd2HAESP3xdsc59SkZrrUWuEE6UfZK21bZLurCcLhdfmRM3W6KdSdGnZBSCT22ppicNJTR1",
  "key11": "5JA5eFaUa5rwT912jWcF3RnhRg2CY5MYAu7SxB6CiJ9jJaiKpqsjdekwyVsptxy7y1m4wc5D3gXE9eU26gHAmvfd",
  "key12": "2Vhm5p6hTVkAWYYWG9EbvnvaRfkm8nhw55S6XGDgorvFsFCrTWUM7ucbvmcWw4rv5VVp8eQMD49yoNxEZ9YK84vq",
  "key13": "94SKyyydnEXKZ9T8BLcWatAtfz7P7RSmjTedYaCNwjJZD3KHbWRVtqLtiiNr4p4t8MTkugERDebPPWJRDy3XKbm",
  "key14": "2d5SjB6oH2RY8Bfpy3JW9KJjBEetV5e8pNh2Eij6VAp8j9fDr8BQeMLJ4Mec4QT2DRHhXo2hULWjbTUdYBkfbCgX",
  "key15": "5rL6Ro8U3YbzUxvh52Acq8HbkvJ5QvWzrfpVBuHHdzU8UQKVrp4g7sTvKC5Qa8ZwjCEWMqc8Qyhf2F4sLpmN3vVC",
  "key16": "47iEqERwRVea9guLzg6tnGPdGSaYX8Z9H4xn6jzZz4DrjHoNYJ1c1yQe8QoQ16NLK58sm51HDW3apBM5ZYsrjcVp",
  "key17": "4KXF49icapz5zL6rsQZJFoimLbv9gGsQ3M6n4FW721vTMAPa2nUDxTogCQcbcJxxMsy88oPdSLpZTyPxirYkGE52",
  "key18": "2TqY6weHAAaFigf4f4TDwdP3o6fW3Wda6UASDNWYwiAJG7u8vJV7ZVbGcsNFBgmeZx1tXVi7oxJoNNEWC53aQN5h",
  "key19": "5KrHJ5q2g9W5pJUh7vAt2ZDgbJSifYedo4EdXUukjVPu1jmyJV88m3KnayPSkPYZG4MsmmFmAz3SiCJnYBZQyQ8n",
  "key20": "34VTFMpMRQptJpbSAs3ammKmXks4b7iPTZq1mCHNjva4nS8f5RwPyxCbrX1ZKor5wYfTJ3RMvmSZeQ8n5shtUi4Z",
  "key21": "5hsLA7aW4yCDdhHSV937pQ4YkLTfRwHjQwfUKxjzD23fdTYgfzyF2P24XjP7fJ7dCXidA9DoaNs9vFnDZt7a6tsn",
  "key22": "5J2a9RZmV7XUXUS7HGfSq9pVaK5sFNqVbXkrbez8qcTs6EV8UbwQfxVamSyWEec8uVsiQa3eaBiv5GsFs27dpDja",
  "key23": "S8v3wnsgU1eRquT4dYuyGYBkp5fP2kSUeynt89qTnUxrJB3YEQ5dFXMYMFSpQMUu7N4KqqqTUgkFaC5RhyF23ti",
  "key24": "44gSEFp31pjbYSG4ik6qTXi1Sz5ry2jtajja2K18nuQjGYfkWsc5vCF954HfkjWEdmmHPtRaKJnHuuWnhCUseAXh",
  "key25": "4mBaCnegfwYvPBm9qquy1GGbigrHBETCR4FvBP7oc8XbHyFaZVrEuua8NLQP9HiA6d5Uacy6WJ5rV8M9LjiY3kPJ",
  "key26": "7E9oqNAdu6pLyusXinv8W84disUyVZ8oT6wr6tJ3ZBDVzTGHi9H14GXpYHTu2WHE6RcqWRASMNoSjtXW5tufBzP",
  "key27": "4p45r5rcra3Xbc2W7mMWyz897sCdwdPwPAMMFfwwRUR2eRM9WSUoqjXsec5smoMMj2s4dFYVdNygMjcG6dG9fcQT",
  "key28": "4Yxx3qFf9ybFUnoZi7yKTS8oiTXfheFjscqUuhAnHL2PZrkDhvPK8DLNQik1BqZ9ehaUknUU6WrSAVtpiPr4hm2m",
  "key29": "53edz8JwFau3rKR3TJweZps288KGimkqUYDqsNPewkyn7yijKuYC2LMJ7TZ2Y93bibt2YV9TEfNGJ3iEzTiekuiW",
  "key30": "s1b1EpFPzEXvMThk7EmVwWc5aWx3KPeLqkxXxdNJ2cbNdPzdBbH2PzpajNntof5Qr41ppzJ1grJm447i4CeuPmQ",
  "key31": "3LprPLKh4Vbp4YR5nUXrsin45bG1MNEpuzbzqKyvJsf6KtcL5URYcWnYBUcUF3LysRTBvXW54JTbEEz5cqauFiXD",
  "key32": "2eq2Cjsmn8qrr9Dm91uykMSSN6HZMYPDvnHVgMkZoYH8aGGEGQwtyh6abEgo8Dr1jVGM3nZTwaiRy1tGiw88Q1ac",
  "key33": "Gq8HAhv63hS9z47rEmfbpaifBdaTyTeUcEAAtBCtKuWCgKMDGRkUddrHWqUs1fw7tepbkgKYoAgD9gjCZSjRnjz",
  "key34": "3wHXwb8z3xA93kchLapNAWHsrUWkTMRS1jaHY8zjBhphtNraTWHDAMuvNsjGpdoKh4aRnT3naAVLYvaueqXsuFL",
  "key35": "4hPzDErFgVE7jhirt57Fofk13U7J9am6vU88dfAQP4s1XcvaPXEuJ61aUYx3fmVhjfovGNnd6q8unG1NpMfigpMg",
  "key36": "BAGd84CTz54hm58PDNVjqYsmqfaZacNiADyjsU4rSo6MSWx5hkZRxpo4dj4SBZKP2VGzKYn8NTAzN5y6Z7w5fi7",
  "key37": "nPSibHV4eFq71twRPmJFfx5fkWzf3vqhsnrWUbBj6ByGWDuY3XsaR3HyoBiGUdh8afVRZyHjGuyJ9SJhVnZc2Q2",
  "key38": "opjUbKngaCJWP9iMyuJyKQAP8E6u8puuNbnDbZrJY8SXQcMJit3CacfXNDoviYfS1XjRvNmQyjqVohwNfTFEEce",
  "key39": "5vfoARfr5p1A8j5tMZYQ1Y2EUniNa2Lny3Jgd3QMqhGyL8frVhMQaMb8FA5JayTtfzgX7kgXfCTb293CsXa7f3yh",
  "key40": "5AzdMRLBJm7GqcUeiFBdtkiZaHgnz31sMuvYchF7xGphkcYRPpfWTqb7wVUaYepKJy5CTx6NyH9zcWXY3CrGbNJy"
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
