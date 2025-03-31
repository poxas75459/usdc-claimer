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
    "5XuwNyASDzqEDJAhWqp2nqnoUgQaRxcVubNhG4fYwa3R5hwZhRbRonMSCxzmtu13sk2D7fdcRCWJ5xyja2Ess5pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMiNfwXTrJZMkCzBwKB7LAxk7NES9P3db8geUbWYud5PJusaYdmdrT9sBdVKXCuAY8jpbW8JHS6JZqfeSix58M8",
  "key1": "4VZFUL9bg28jP1mo8z1GaynBvhLn7AoKHEHBFXe9n7TLrQQBcGF7a24WqvKqqsBeLKNKP2TSFBfjx1zn7uGU4Hyk",
  "key2": "4Gs8MEyYogTzjxUw7j6TsBdN2audabvtMrXuCRQQDA7Y5N7FvdcAGM5EfLosxyJop9dfwLNcNq9SrVqG6RP2pQgS",
  "key3": "216qLg8egtF1maoFiRwE4vDR2w4Z1MB1mHqU1ndLvAgb47dR3mtN5LkYAmhV5RMon2eU3g2Zs7KAvpbaJ2TGn91e",
  "key4": "2mhcjCwNYrm6yGgwyyigbc6J8tub5DwLBK51uSbC8gibSpxJk1fwWfBZT1z3Yk3SGvS1w25WbfYVdBhM4mBFJr6D",
  "key5": "2YSjXXCifpWA4mQC9rnu18TUV3UhSiFpSvZJByodqEofth25LmKXbE5C3wdUQ3QdNtgxJspxfhPDughz7pass3Rp",
  "key6": "212zJgr4o35R4yy1jZ65ykYEpiVEDvai6EHXixyuKFc3cJLXtkEYxvKPA26xMKkovTATa5HC4mnfMyF7GPQN5u2F",
  "key7": "aaDFnQsiaKGKuaL3fauoU2rY8MeJWpLi7FJjRVtpCvZRfCQdBysRH22SbxKp48QGDSrixSZtvWsEWC4gcs2AhvK",
  "key8": "jjVgaWtSVGMuZKA12tx4wWhuytAAg6TEJB1sEmRWTAWoj1bLjmMVLMwGVkWeDZoFtYgAbN9dkhDuhAZT6iKDnUk",
  "key9": "4Sa56t9zSAeawZVVN1p2NBoKaMF1axQjRDqP67YYnPE6sR2RQAH9DtKTN6XKUrNZwHVzY5y3or8ZNo6D4vicDNhs",
  "key10": "5mZ5HYiAxuT7x6rS6pvnq3yd4WFAKumprVWvGxR5uHfCC3VkC7xoFCC2erb9HzL5Agiwne5yLemizXjQ5xdD3njE",
  "key11": "54po6yQFe8SxKptGUDu3vUQzSpt68ex859tCLpdheob9JeAYyCMn9JnWjJHGHV9HMiBRjLPuATBAbWnyJqjzeYL6",
  "key12": "4TjHrJmkbtUNtHG1TQPLHuqiJDsNnyTcTTc23bqZA1TxhKoU6kHpGKcHFtEwZRp9UUtKzSBLyR71JccyQ6f3J6kY",
  "key13": "4Tj76c6RsyELfhmhiK9TxQwbpHTDyXLRFjbDkKh3DM5bFbaEcmZrcPcaBrFHYSgGGVbDDzFDYPzmWsnZspghfRyA",
  "key14": "4c4PgVvm6nzyim3Xhg18F9kQyfKH7dz3M3jfo2DsjZK1ZHGFkTJwW1gW3DbenBoJevh9PwpQUo1EqtMQu6qHFSde",
  "key15": "H7peiRi8JvCiEKc8SRqwdXsEUtvb716xNX3LAVcDy6TSK4PJAJUkKzfqQK2gTt4RbHhFTETyopJcVfNP2DKdiG4",
  "key16": "4M3ZQtzCdik5w4dqWj2Qig9FCLr2cFaouQJtxYdeCjRnfHvekWUHGQS44tWqwq89PYLVDE4yz8KvSutz5RzYSWEj",
  "key17": "4w88FkXQGnr75M9Hud9YZXDvjce1Bna83GuRAbtEQT64gbqT8MxpguwfHzpBx6KbYZGV76Qt4oUNDUXCTjsteH4F",
  "key18": "2hwCBFzhXrTjvNrMb8rqwyDdsK3UDaQKBt4zscc99v5a7He82bSdj66deLTVgymSM6WDkobqVZtUW8hWzTgtc8g5",
  "key19": "5QfDMT4AcC4vwAqxiQgQJ54UiGYxvSnXvuVDyFfproBJHZAdYkCwqEwhdeGvDKarvEdV91z5Cg2ivyy97EPPwEaq",
  "key20": "3FEpNhL5MrJoJGe1mDxZqoPAQbPPM3FkfwCxWXTCCbG7QREoBCD3Qv4KYJg3fPQ4yZCUi5jGzdBbY9e4bBWt3foT",
  "key21": "341fT1ybU29MnMRS9o7f3A9uVsypeHVTZW6fseYX66YRfRbqvgAPfw83YZXg8jNpYjihsnXWDnyK2zfotH1ErhsU",
  "key22": "3fijHVwmYwLq6Vb6wbpuCAsyxQ9ndja94tKvNBD4bnDVxHBd4nYWozsMkP7mhyMYRPCKvopf4WvNy3xH3DZzWuqa",
  "key23": "5fLjYjbqXbjTdKFa6fjRB3ArUvMLLzAPKo67WLZGEJN33Wjqr7gfkcBD4AMh4FvbbkXgtNhKTpWNQ1rm6kS8ShgU",
  "key24": "ZDRw486tQQ45qG55SkWaqBRcACCZWLJpEs6rEaLebqJdeXhhHL2KejKk7Rat5srFgUFUf6BCf3L8rGUxCptr61k",
  "key25": "3r1Hc5NBXHzJ17KJdmVbsrENPy5eHczcPFT4v4e6RRK9TfMs3ri7A1sbx2JvXwuRhi3XDhVQRK2A21LnWjJRFrJR",
  "key26": "38W9S8WemYmzfPNKfXGT5UvUfAmZFSmRKjidzw5khRuh18h1uS34BoVtBcd3uDusCsUwWz6gYXfmniTyfSsrkaNH",
  "key27": "2FuuvSmEfematcdsvKM2z9eMqNFTsGdmX7Hd774A8JdgdXLi9tPFQ6zjgHHLc6cup1WTyVvH7qBEQZWJWVusNpGp",
  "key28": "5ksJFCAmUMzKW9o2bRT5WRZihxgX6pGuTUCoe9zBU1XgXa3zZReyUJg2gQSDWFg4v6wiFmehpsFfYrhhjCKuLBUN",
  "key29": "2oDX6QXmkLof2sU1sT9DRHw8rZDg7snxeg55MfAnSbv4FujDjaudWvS2e3pinJFvr1yNjQw7mBG7eUTVnxSE5uZ4",
  "key30": "4hT3Ej6ddUjC3BYjsg2XR8tcKr22KRANXb5tzw2odo5ML2Vxb9Ddhm1Qqbtr35oShZWdNvaKtdXD2Ereb3V39Kie",
  "key31": "2vmW6UYpiwTdYXZeG7P5hiCp2hB14RTDWdZv4AkosYnjKprUwCsBVYJWhVcZjNiQnuu7ZKUwY4T8gz8Dxf3nXdCY",
  "key32": "XPhoD7aDwbA5ABDsoibU8yM3akbah8umRYPW3uaF94AMATAgmwrZf5QFmsVDypX5QinFzZcA4T1zCRwYEYNH5if",
  "key33": "qJ84QJKQMB7H1vLrfys4ujfJyQx4z8arT2qSpez2PfRkmXaXvzbw2Fb3LVU3FBb1jzY6tB4st2KcthYYgBVNUA4",
  "key34": "5b3pdXGyTJh8XviL3qsbd8acAdHHvz24YyS47QkWrv2dPXJgypkeRBp329xymkDybbkiUVQgr34KqYS4CCQRMnFM",
  "key35": "2E3n4ztujDNVdKH8W1swjML11BWg8vBGgCnQ9g8BJegxYSXndqR5cGQLSnEA575GyzmBTG5Cfd55PrmRuzqJdy7K"
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
