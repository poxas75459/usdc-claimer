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
    "3QWyWfTFtXaxPHjBuA9HHWRsLHLBxX4dxnc2fbb97QgdU3Ke6D9AicWEQdmr3mNE6AHLt1NTdwgHtCDt23YPL55h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4euMJLeLfUndYEZo1YgWrqf5AY9SSG3vMtTFCRzXsPRTxAXwHegJvh4UpDxiEhc2KN9LNwdVEqKn6wfjgSRhSHXt",
  "key1": "2VbA6CpkKGgwCdUjmqsW9jQKipk98uEHtv2CePkk1ekJBFDpRKPFi3rMMdSgEMHRDS6xatDPaXfy5SX7GsbhTjKg",
  "key2": "C6NsDBUHCZB1vPYfXmyFYbJ19NRrwfV51Y93RYFAUcM56wdAaWdceyC9QFSgFrcMaZWdEdR6o6wDHca5CtCMfiK",
  "key3": "exzmcHaddjHrdFx7MP9ATAYRxejnuiWgyT3uBdrmqdWDZhFxP2ANVZy9netCs932r83XX8yiD7KrL153Gq5igaZ",
  "key4": "325oaAoFd2TNrKLsVBwJ3h94zyfyCZdUaa3FEP3feLn5hVnMVoqcaaQYXzAQshsorhNyocsmQ9Dd85bRPC7ZQNnN",
  "key5": "4piLgmZdb4vKjKQ4aZjEGkgFmQreJrGeLKG7Ut4MXw1UJGSjpVAph35ML7EJeerPmzktRJozU4MyjqWTxxQDokt8",
  "key6": "sg38JNnmcAADiGvBHwXXrLATJo12788DsU1JC3ydnY4ZLKPAqtHR7fdAmRMYscUB1h9kUHVeLugA2nFsy9bELts",
  "key7": "p5vTHiLz1uii7161SWdbPdi4wwq7pd9NRosfrFYAkbZR496oNnLA3hGeARAS9VBW67Dc1c7XSb5JnxiHA82vT3a",
  "key8": "3hw1EQoM7TKYqWv1yBfjnYMDunqezdeH64iwCvLqQiHiaTLBtbWT5XaiJYMkSiMbaEYFYxNTBuZakP9wfynBCvvE",
  "key9": "3hmJKtyLbHZSd5oq4QM76WGRF8kMg6bvD92hQ5AA8WRDhhAL8VMBE9eZfmkhbBtjwWFExeBqz37Xm8rHa1Dda8K1",
  "key10": "65zDiiKvQ35jbqgxM871XqxLbQpbsVsQPHVmeuD9w5sUfEz8V52VPby6rgEAq1wJgJZN6L6QngRZSvv8RbBzz7tS",
  "key11": "2gUJWHivvrieovJKBEYo72fCjafHY4ScoFxnHb9eJbZpbXRK3PpaJPuJpvepxLKbcH6wrowxLJdczjgLfwPreTvf",
  "key12": "4LLZ4hyN4RSVwxcSdxMRCyrRUHd2kLbaBizAJhPoV6HTLLz2KQwiNVPUHtfkJAS6F2jbdHG5op3RsZL55N6twRoB",
  "key13": "47AtU4BrjU25hS2GYZ2pDD1CzZ7aFrG6cpBAYfeDbzspcqJ6HKA869MfeSv5Gc5swJ5M6o523635sSJJj39PzTLk",
  "key14": "3sTEM9ALgkaZatrssWaGnyjE7ab53CBewkbqbQC9g333Fx6EPWyR8RJ3ezo8qAoWWRcDdKGzzYH3hqyp9txguiWS",
  "key15": "5a3f2rwCcMpVMCr3eFy35KKi5mrU2CcC4sdGP9Z18hn3dsLc9JsKKshrwkpXi7uksUqM27njz57PiLwU1SLMCyDh",
  "key16": "5dvib6t7HK1vSLucmsyybmgKyrZ2hrXEDCQAUyYqnbqFyvTbWNPc4tHgr1GjaptuN3hQM6nbncRN8ATuUznrzdea",
  "key17": "5P4aQaxwoKE9kPCFxf3ZPeXgXBGSexSS9k5ng3h6fKP6Mh4LULbqfgtr82Dw1fw5D43gkc7py7AXDKHrNBTWkhNB",
  "key18": "455dQUxAnEvcgrCY2tsRrnog499B1jsJbpTA7XSD9gjBWUJ89YFVYcoP2bnfXCVu2cJ6mrXLpAaVXZSFhGftyUHp",
  "key19": "xzctcXuqvHFVbp8tAxT94L4B7tmDshjxdbfheFxjCjcdrPz35YQUB4c7EwyiYdBiXCYe2en7Hcp9EwmD3XfkSyG",
  "key20": "4aqvFHJVuAPzhQqFpJm6MBqtDKbVqRwT11T8Ye9vpWub4tyPXtxkX2K4VVoZPGCMsuZpKRf9mSHhgVNsW18jjxBz",
  "key21": "y8UCZP1wGqHDBhSEwxWcdHwJRpkkKLSSUcc2vfEf5GiiTKyHeb361nNLFFCeFHErNasMjjwp3VMVyuGHwXKrHPa",
  "key22": "GfeXYR9N3WiUqQjz85dUH6YbAodc4auZLM4D5KCjWpDK1Tkn8kctw67GmyV9tnzSzfv8zQ1EmSNQsoVjWW6Dxom",
  "key23": "2aaMFNPZCvG9Mf9FB6wg44VVaooMgqpCt6Rj9ghrhtFxdTh5xdEHzDaX7nLpQoV85CAx6gcFkQVuNj4D3HfN4YL4",
  "key24": "2eTjZzWojGUkmVSWjPAnVEdAD814AEmy6jFxXZUGdHFR1tDHsmMXuhJZN8JWj1p872AVxTh56yvaum38P3mSUctU",
  "key25": "ioWtcZLSEppQAxqT47zXDEHkKAz4c6kSvCXqoMELNEqRLgKyrG2nUsQJfbWgqThDKwx6pBtux79hKe1rv1qMAD6",
  "key26": "5Fi3oc15TM4o77yGtRrkhtzcsPYhUymKh1MN6UpPRqbEgeEUGBs9rfqMgBbTwUfZdTX2bhpzXd9rEfV9PfmSuYiL",
  "key27": "kHk43fQJnQeaujBfizRWtZZA9dFSzhFVkEnKemWrXER1i2z9tRsm8jeEuLXCFgYNHY2dFLDjdpNnoVTzk9ybbnE",
  "key28": "2ykn7aq9wo4i7Nj9wKadZvJYLXHtzsvbX6n8AmvggB4S7zEhhShSRoemaLse9PfgecEXnDbnZLoxtnyqhNW9fiQi",
  "key29": "vRJUJUuDogBCfNRMnJZm6TCMJT4aAzNbLZtWPkd9wQGCeKWyepoauAWQAWiK5UtkEbL3HSixmPJ6gPoj8n1wRfE",
  "key30": "4znSpGXxZvbZnTGwqFdrYyBvNHBMQEdW1LSfJPxF3wUMKnzv5kg2s6FFTajnKhAeS6QKQFdBEwAzT6BdCotPYo1p",
  "key31": "478mzbrpABTmGmvxGhVcsxysiLQDN1jx8Jtu26xzooq1rPCujatQcRztbrsHLkjZ58m3VpnVNgcoCKETztcW1Mv",
  "key32": "YdCdL5BX5FQ5hbFrE3dnwa9xYTasssLTYFz95D2fPhtwNRjT7wYxAJskmC6FrVi6KXryhyjM6Uy7VMrfKBPZ2sh",
  "key33": "5cwCEDj1xan3s7vMRwUn1B83aLjc1yF2FGx98KWW5zdCnUZH7JWvhccQLTcPkx1RxuhuszWZ7tenb2gZbjW5ebXA",
  "key34": "23FLHfLC5YMkkfkCtZQw6wTS4WWau9kCbfG5hqirNxWSHak5Yp3R9WimcpRPSNFTZvPSE8qHEcVEYqopG87wZDut",
  "key35": "36ouq5eHTtuZbo6UPpmpHhARdE3gRRn71JndyQGKKa7vQSXbyjyz18N5vZN4MPHemyvTGvaNzwM9FTPoEx7j2ctq",
  "key36": "3fg8ZPdHaYYKvBDR5V9p6EvY4i7Xd3Pr7eEFNdpEBRe37bc3E1HhA28Bn5FUNwVK65Nm6wCjmsy9V1NPgWckG2jr",
  "key37": "5zTT4NdJVTAxGeTmgZXWv5Y3xytRhYWdPSZMaYydy9NAfraZx8Urpc9qQNeHbPZb5oe64WSodJYiw5LArcQZG8vk",
  "key38": "2xa7fcfA6yEGaVXGm2RerghG3C2L75gVRYZwoeMiGxgaq5TvvZrb5ZR8RpRcv2VFrK3LP6wGmm4tZpnrPHeMLLnq",
  "key39": "5rCvQ7jKSGLkoSKi6MxE67edPm2BgMo3TzHn8hAgVJXo9cR95Fdq5bz1meXw8fzaueiRWs99TtaQVgw7ZwQmHEz8",
  "key40": "2DHvgSkaqWzpG3yr7kKwVUo6Yyyd1nspG8Yx6SaQkaWRLzFtBYmdYiyAcrd1b7KxpkG86g9r59ExQAe6G9YDPNm4",
  "key41": "4fu69eknpJM3YNw4CQKcdxMCHrhmn8ktjbjpccrr9Z8bktXJYyRfsvt4RLFcqCra9nduzszMgX8kFugmrLiZ1jpW",
  "key42": "X3ZCsWCpPK29GyJYmZpg94DE8fzgyB1r3Tfo44LqRdygkBK1k5SVQq5Jv9A41CPBvmmMSReeJRTunrnENkQGn78"
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
