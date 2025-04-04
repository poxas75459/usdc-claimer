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
    "5VF6JePGM2cNHRf2yyVL2DFySiAYxjmkxeabEyK9smcFbsdvy9gFhhKqf1NkVdZxACm4UhyCojHXvRHLdkxhr7WD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKbuEk4a9GY5SRcewseT1HkjkLmtyMqSK6XY11ArR3NvFmeeq1bqXdm4NKsKP22qjr3uvGo6EBL8WSbDXPBC4bg",
  "key1": "477aAaaHsnBy8tjys4tpdgWajmaYbUkXBeamv7Qs5SPGByDF7TH3R1pjH8GDZo7igmnU1JpxFkMmX24VmTmBkqTc",
  "key2": "2UahChQb3S5dd3xd5ipeSKhkooDrPYxwBBfjkLg3hUopU1BXFwAvMw1z1WZqnezcX4cc4yC2Gky5nU47hFrEbpS4",
  "key3": "3XDuLewNt1DrDp7vm1yFMMwTQJ89tkDXpe8YYk1Bn4w5MdarnJaxyLBASSqNn6fGQq8g9pCqpLN7Kt7v6P83WEYH",
  "key4": "5GUEy3fk9zfc9qHhJoSr8fxcbHbt2DUA3kotvq87m5gWdQCfZpmjE8HbNF2x7C4tGB94uwRywHRkHV3JueWPxDXn",
  "key5": "495uhm3WVwhqRGPtZe42phnUv8sYHePh5NgTZn6GytgYSBF4ePcG2EHjfBoNpgGKBEWbb6BjLwsUsposThoQvdCz",
  "key6": "U8dp86TzxtPfn4Jr85FxUC2K5MKphCHz6YSW5dLdRpLeJienryrSfqqneAaha6efkNUbxu4kHyKgAygD2LLfq4P",
  "key7": "3G2hwtNBDsRpjW7oxodwCVc1UF7YUtHDi5qFVu4dMq9PpEqxTLYN9WPQeDvNyAEVhq8NaAPQv3Xmz1syLAxgXnqX",
  "key8": "3m9EyoJyniaJddZ8b11pgXfjL5JiN2tpdGchechiRwQw1Q2Rs1woq6sQcDnXiAtyBsHfiGAaLvrRWnNchrm7wiFu",
  "key9": "FFZe2fahh14MfLrxEzXi2WmYjq6t69RYkJpMJsEUJ62rmsmZHQXn4TXW83iwDVZLwnLLTxy3Hv5GEUGw46WUr8B",
  "key10": "3DA3KnBouTicoTAzipkBzHdGTu8nwMkGodM9UjouGXYpjsoXf8sDWpioVtm7uhkM7wZcHkd3h3Gti3tKwZci9WHr",
  "key11": "GuK7qGnAE2J2CJgHLJQD7VUtjWdP7fVAPj8kvTs2nQp2nR8Sg6SZztWbzSs5Ce4tFmuhxwPkuZiUXVHVtxzjTcA",
  "key12": "3e8djcJhi392amh6gmpP1SffcPvuZWRKFcZwAVY6aH1X8StwhCUL83LWwuEvbeBonrqHKp9qdcNC9AXYARgZe7dP",
  "key13": "5J2PNHTrYhq5ij2PMoqWigXw3u4YdwBftHpzkDxBFhr5KUeH5xcXD5q4QWjZsBT1819kGpPWDwUsiTtL1UKCic3G",
  "key14": "29wvKUG28F1jfAGTQFVLDJNtXHrYSMnA4YvMRqcwK5nbdRgDDNm3iKGoM3ry9MbqagaJ9LJLisqb4XtuWf2spmCN",
  "key15": "4d28xfTygJZhnTD3rwZGAJbBrDB87uBKVknypKhSewAkXMYU9Ht6AqcMHsSnb2n3wkK5XLd1X4uFyPRCSJkjaks2",
  "key16": "4xnE7JNAKBipjr9nTt3UgGxqjcMtj1QBGvZbw7veMiNQuFVyFF5rm5vymgtTdhn9MvbXBUAUKP3PJFd3eCDzjGf",
  "key17": "utzvSvKbNr7DntjvEW472jLFt7KhknL2uEWrftPwi3GqKGruvdbJ1mXXn56XYyJc3K6xb2R2txyE6GBrj32MZLa",
  "key18": "4uL5zixR8N7nJ7vebmDPjxgHGmBdFabMADbtYXQGdPKCs5gW4b6DeXxxA2pzpX3pdkXmLoTRoEVCh5oksPw2QtxT",
  "key19": "3SiK57vBqhu8b36qSMAaAeRsZwtsiVn3urqzdJPvw4zibL3jBgYCNgygUFZYNxTVbetrS6FXyjXmzNgVVrkU74iJ",
  "key20": "4VZ3dcLGdbaDxssPtufGzJ2W4Hdnd94NuKjyhXxzPkkGJBBCtyb6dnyQpyLKaeaWe1LnH6bek7Q7xEGDoF9N3R4y",
  "key21": "MgF7t5gsJNkWeH4ZhEirtQb1QNqkqbLe7bEcbay1gcpoS57SBwz8mzMxzcABKydx5rhxJru27nLy699b69E9VjE",
  "key22": "23pzX5NAVSH55sfe2NYEBopNCfmaN3xKzdZjP1YTnx53ePimcPtNUQRd18Wogg7NzEdSTQxzMYanzfYcVpikdfnQ",
  "key23": "5GESirTL2gGVcwCWvHUtMiRNz21AzaC3fpCTPfb1PLAJpkRff4HZR45stEgxRRj3z4hMDj4GAXKN6oydbaX4oc1L",
  "key24": "dbfMdpwe1zeqJMeQQU1euU9qSDMPm2gfRUFhNj2x6pv25EdzVVAYmq4zFyr4t5JCH7uWTiKN6MKMzgkEPsGhqZQ",
  "key25": "49ZKsDWXCFhaCcZeSsBvQJieZJGcPBCG9RCuuBgNZPC8JQ1tXzDVDwsG11s1Bciu4XPQLCGAfMEpv1ksUL2hZUrs",
  "key26": "54YL7i7AJNLtmwTtZdULpedtNT8XoxHt4u4qJvcP4KDUq7t6DYNX6A4H16VjnmzzhvH7fVXm1b4bnuMcmtAJukAE",
  "key27": "33rHP5yMuFFesyYhouXC5EfKTJkhzRWJEpBLcLdHPKNwnsa1Z8EngUShs5dNQ9xy55W7Wnjoo4StM1iJcUapQBYi",
  "key28": "iN3j4hkqYY22d258LHnR4GeeU1WTAeP5MT1ujqo1jTzxTbiY6NNmMpKKNysDpnUWNjTnaTLqdxswzrfSVbbpfLj",
  "key29": "2jpNMuqW1QRT86P2HnwnYU2biRD9KYtVWEmATWzGgV173UVscwKe8s7DQArUwjCsDcyke2ywtLQ6ynGJjzCaf1QH",
  "key30": "67AgTXQfQckmiCZcnRjMfm7MCcsrb5pJA6AeKgc9Mfjy2JkeoeFJXLvhR28tumXT4Ub6QX44jcz2z293hJcZHEc",
  "key31": "2WNEMRAz2dHDk3brA1dBoTsByMDKY5sitAyV3aYszJfs6ZH5KQnZJeinXRXpDcK986jA7v54PDAd6eas9sdZtXxi",
  "key32": "67fwQmiNyi5jBu7TaaXQ81wNDJ2aSaUELifbhXqHCDJYWgYVgjYLYpeEiyLXBWrECFiLydvANnzMpapHWPtLBG2C",
  "key33": "4nhbGrbvxE2hQinaoUbhxbd9NcbiKSiYY1itbQUStcbDQPq8KtDmRFaeNE46xrWHzo5qU4G74Cizo3S3gmdQKShz",
  "key34": "3aTb1kLockZU6i8ugiznAqjhU7u9rfr4EYqyRVCMVCsMVAwpZiWqS2gAiGwrvP9Eu6g2Knhw4y7iFuBgipAwgJ6F",
  "key35": "SHvKupcr1CVDchiYY2V2ySdbj4gu9R761k13o1wuB68CcHDVPkEjZdHj4aaZ5BtgKRV2Di3AumiXLUCT5txptLr",
  "key36": "5RYBtygzyqiK8yVHkkMLFRBubZxsioQ9H5jBF4aLHRzoUd1RWzyzvKBp5mYKQf5TKhRZjnMkLPfWA6Twam1XavCY",
  "key37": "ty2NsM3TpppBnYuiCEPpnmudCHWhJcxQKGXobxia6mfdsmn5bmoURhGNwRtrjcAgiieKDnJdzA5dUQmEhFqonEH",
  "key38": "GWpGhNtAjmyurjWi29dYb7b5bjnWPjDbqqswuMTy89nJb4uau2PGruZtrnKi1qiaTJQHQrZQFugAbxwMwxKc9uC"
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
