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
    "5kxT6LnoA1jmPEcKXk8mLLSCuTtU9Tc1zj1JTtZnnY7wjtvtvG8qzZ5ccQopoJR76RxdCDahQWgzXsbGGVk4x4Bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ewme6cDTvykNEouYRPFnmYjUozDBHg9xAb9vqqUPh1nDStVGCdMTjtwd2LMHhWzRoYKoQRFtYxkEwu1qnAbqTST",
  "key1": "5kFmf76yxtjmxFqmUyWUZ7vqFKR4iF3dngddmoAddFYPPZxTc5q6stHUjGjsW5KZkQqyk4Yao6CFb75SQycDhVM1",
  "key2": "5V2r16AJuic6wrtJc95tjJc2aa5V2ULx4zvdNuxym9bRfenXWZnraF2Unt42Vxk4AGU7gKqYVGgPoegbzbxh3qg3",
  "key3": "GqnQpuZ8xZg32DbUsUni4L9g1cnTBQG6wQFo2KsRe3dLE6GDGyMa83LCMCAUtUAhgfhU8UD9Guj3pBbuQcaUt8d",
  "key4": "5AP42wzfaRQiaJW5YpTRVHDMFt6LkjZ9nbcS6Pruqf7vuyMVpyq3YayoC1RiiEKgu567Ct8xzibxzaApTdGQ5D1v",
  "key5": "2dsVecbzPJV5LRUu52rkz5HSEfu6hp62aqFHti4dvpCaEM2kpwTiAr7p77jSyfMDmTRDUWYCkZeF8hdG4prX1Ht",
  "key6": "2eaVFaA5ntDFrrnw4sGdgW7AgUwW3KCgYpixdguBGbU66mw8oPeQ7FhYksUQAhHjw6KMmAa9kYEfMLizhU5QHBja",
  "key7": "3DmNyibzmwGcsvfwquonzymzC9RUEp43CsVaNvMbvQtTRXEQbpWUaQveJHwXTQXV71EdfUERseaxrteZHSaLh1qJ",
  "key8": "2UKs57WzNR7URNuKST5EiU4WahCMi3pAuwYjVhJPQQRU4t7v3VLdVaSsAa14Z4KQRyDXg28VuLZivZukarL8bbr9",
  "key9": "wqr5ZH24ZHJub7K3HkrwJDmSHWteRL2EqaZfnWvmxxiNw412sTLX4SuTMZbzEwtQy7z3N5sQp3JwmzCkF3oUzzW",
  "key10": "2N646JM7n9A9w8Y9YieUuoS5GDknLTJMkrm3a7Tavav4aXA9Fwr4gJbumH3gsofNQTtiuvCGAxzUEpwWfYv7ViNM",
  "key11": "3zgocvDVQm1PGv6pLNVuufkqNU3wHHLQbPwgoSF4gsyxQhGg3ivjQeHXt8whNYK7tuwvrjzTDRXm3WqLq7eZrogG",
  "key12": "2YxqAxgipFm4NyMb6SdGXfTMXqpadkubkVfEkJTyYiMpnfnTVsjeLvPaaWskzWvb9pHTvFiQUJZxzBcBNeMYPCe6",
  "key13": "4NdQnD835HTbuX8294C46Mjy2uaNH7j5v7bfE3HGy3zjKsYgkY3U3vyJQ1hSbA5kiJYs2ebY4UBTxRr8ZqHveuBE",
  "key14": "28zbux5FwZbWKjdof7B49fRWzk2DnUcc8Q3hNeLJDw9omorWoV8Y6wfoGdMXDTiMwpNtS2DC4tZKaPAmipfiaT9X",
  "key15": "2ACT7UeNniTwHaz1ajBxGK6LL2kfTz62kDKectZxcUgPnvfwrvYTZwZByp6rsZDr35Bh8bTDi63qZeJdH4bbaveV",
  "key16": "5JKmofzhTNowXhHDFtir27edsVtXDjUzmVgYAhQ5j9vbWydENPQy1CWHHpQf2oyeDe4PLKyyS29qoCVxaR9sMDSr",
  "key17": "577L1D6ereVj2DoPTEU1pvBykfrDGi8pVqt1Y5UoYEUGAynMvm61p7R6PZk9QUCbWWNucbtC1RtDiMRbwhwtZMXe",
  "key18": "WVYNcoGagQjVFo2gW9QxgsqHQRtSi5Vk4MXA3fjfGurWtSYHbcXvUX18bftyJnJzdLvrvHHsV7WjvSZLPWHetfZ",
  "key19": "3qDYVmj8Wd9YnfbX1YyiMEuXPzfRpVkay7L6KYeZkKZ5i83nw5yg7gov15synDMAr3daCLusAcD333o33rM6CiyW",
  "key20": "3WxRqJPqRBHfR5XGnUvWaDnCzzvas65buCtrhf1Q2t5H5iqyJx1MAZWzf2UhTm2yxdwcEWqd88WKe5gWN7zGTGU3",
  "key21": "4sNso9haTWoLa3i6gg3mor973cJ2hGKGUy5FL5RzopNZCa397EoFQpSDsZBKeAGovxmT7H7ervxRkjCJnYYkcrnr",
  "key22": "5u2yrub7K3UNYteTYrywUGLUkq3XBBwLosJwPzUED52ZQvpHf4eKihtkCNmyZttwtz2gk7nPXKaHAqUQSqaA8LF4",
  "key23": "477yRsuAnhu8cwjzt4U8aV7nBhjE5EZkSf2A9TbbHoCzEwdQxaQnRa3YRhxZTxMvMQTQ7MNcUAyTuDmVGDpeagGF",
  "key24": "3okaFvTUNGiYJoWXboWwsHLrHjfUxLBogGaeh9k54u7sjbGTiHPor7G8vCc1orTeu7Y9hJCPzxmKFrB42x7H5ZoF",
  "key25": "2Kdf6G7HsJgPTv92XxhgutpAPjZWS2YT2yjWnKNttugwYuhMi8cRyBHc4skYihQCJ2L6ceVyTGUKYjqmuC8w7KRC",
  "key26": "2W1ejpLoyKvnnHZkvJdUSBSXg2Pf1433dRhwafBs1UfSFLnfHAEnb7B6aB9u3FKtz5QZJUEtwLK4f6pd11D6rRgM",
  "key27": "5qi95Rk33CBjQeRn3FErEPcPcmz3gvW2wx9d6sQ76z3a8XTFhS5oTX7Yp2GyxTYMwxcwBBm7827xhxsG3Jbr28XQ",
  "key28": "43PysS9fQisiKHUJ1bz6MpGjfRQLNdmMkGA6E9xqN9Ri2NMtFQAhidqi4EXBG8UUSzM5hAWrQBBxC4wMoGkzecwV"
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
