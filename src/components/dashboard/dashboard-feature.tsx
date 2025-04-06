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
    "5p5q6QA4vEw1yVHSp2VwiPmfiHyPxYDhkcLdjQy8151sKpi8CK4D5okfSX1uSBtimVkSqHLK49xKYaoVJ9BgkcGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47CZMCNs8CE59sYpmde114jMa2jk7oqTTMikG5B6K3hVCXLV7XFz8UhdmF3rtiU4M7SbQ5JwtvyH4gsyJ5pEaN1q",
  "key1": "3e99uWDKthpYpVXkNYwrUWaq9Z26WaNgkkTuzZzGJTqShzZ2fgP4wPrjm5XBV3rnmhx4mcJmquiaqE73hgEs3WET",
  "key2": "3xqPwRZdVHoMv1b28vdNHqK3PnUEHxkM41LdmcJaBzANQAuKJgA7ZBEhg5Mt4BE1gm5EFW5aNotz5Bq88vFGAqUL",
  "key3": "M6PGpvebUgTZ5mMu8FACdZszcxazzeJScT75qWkjzSDLkBS1MhWAH4sj1FDMXW1aFaqo3GiwkPaBbrXzaMFZfcW",
  "key4": "5EqVuYsY6PQF5F1GgFmyowcyU1JbpM6TrpZQiAKesx9TFo52w9roE1PcznuaLdRXhyXaXFaWTQqNN3AHC831dK5A",
  "key5": "5jLaWtRPZerFRgMMHLTCAmcNFosTgUMHgCvWGdGdxdtj4rarJDBtrtypMmxamhQ2KuiYgMDM6r253irsFstKjoWS",
  "key6": "2EHbdaqsVXFGNEkzVzTofP9mZDzz1gv7v6DoVxUG3ruNxdema5yw7XUnydgoz9MxNdyVhNJnfVXpHaXxrCvUcbEe",
  "key7": "2q25xPDh1UcYnSzWnFstrULsN6n1fGHLGxc5eHQWeB6MmFpeaPmYHsBaPaw6UPfjE92ZihuRUESHRTbRwzRfdnRh",
  "key8": "2ZesowwijhW3deDpc8tjWe7tSBH3336FpsjCV3xM9PM9bpWgP4KKyqWhagA1fdxXS66FfPBfWFMDFJza8PnEg94q",
  "key9": "5EU8UijJ4n2HVEeNjUskrDE6ecU8TdTV8NFUSExZmo5QmWnVMnGLd9N3nELJr4HNmwJSSRdQNmRLvG7H4r67NjDR",
  "key10": "366mjcz5jHNLEHBXCp7XTtcZbFeSFsTcnv1ZS9R82ovA8StGqHdEo2eCqkkhDx6pL5iqBmEGXSDyRm7cYL6mWZ3x",
  "key11": "32GcraC8xpL6t8b5Hw6H5nLdEJRQ73CiMaaJrPZkHhAKoRAZjYv3SsS7kpXeDdzTADNEKMNUPwEtN8wERbj6DTBP",
  "key12": "3GfAt7iSg5E83cCu55HdTdHHys3FQvFY7rZH7ZFu8k6TbCidn8NiRX8orUcFJP3E7J2oa9GuxvDNwLV3BLyfFaDu",
  "key13": "6c8kZ2if4rhQzoxFFM7FUeVo1ky4r168LcFzDgfsvnA5do62tD7gD2KzsgYP8xMKdmTJa7cki4Ahs8FyTd2c2nD",
  "key14": "3ewBBmX8mwtkVTi5FswwU8oU9vtTnux38z8vk9Mc1buNZoqvbYhaEdz3bhE91pocZBJRK7tkXiBUPeDdZR72cBH5",
  "key15": "3FrkVvdiWCA7sYAr2f5GyeKYdp7zbtjuZJuMMhbzHsXHHgBqrpZrfziKJNVGGMEywavHB98wuC68pcvyuaPNu4cY",
  "key16": "2gfQcdSRFsSj2kNtTg9jZvcCPx4uwN9UvPQDyrqpWCNhcSMiVUvPKvknicBq7FgMZQuQJByjTtj97G8aqKAQBrYH",
  "key17": "HNiZsqn15BNmgM18uWM4BAAMdStF831TRytoKDcVVPGjL39dv7sDFZQi3Q45HrQfoeaiFYWcDMNN8AXc5RRaoE1",
  "key18": "3YwZ8kWfQthG9KoPw8wCL7qZm5NuqLX6iQzpe8xaEKNRAKU7umDNgxjfBMaXAqFC5bGfSDFtpr56RiRtJCbXEZAx",
  "key19": "TP2spNpBcUTrhjkPLLAwU9FkKUDfNTNA5NWs4QCBY2qfNrRSYdYPsXCpXCWFzuaxdQBL3sjiooAcV2Wb4UM9RH8",
  "key20": "iEAiDRjgxrtE1gLqVhfESruSMM9PpdmPRm6BNe2J9pHcj4BQdn1JDNbfMVvtsqn2Ngtqs4mau71nDjyyP7VfrMq",
  "key21": "3AaTFUPLmtGRtkEhBjnCdpNSH57ZxpVuZ8xc62eVQuiCkc2ijf37LfCua4Bupu1s2xhXC5u7FoWiDehWdHMNKW2Q",
  "key22": "67BsWnDLgEPQpJwETcFi3BSM96RugEykwSnkothz1VaWezpPgpQ6ZrpfRPapMmTDZ2EcZTvfpq7ZtVnZEr1LMeDC",
  "key23": "61SqpDq2QnUKqKocyvEotzvf1HuH4QcbjUBhxcmLttP5afB1LVAU939T7KGTmkFaxTQNdVjr84iCiMNcUNyNnsDD",
  "key24": "2Q78QhDZ1AMCswftLc8vDYkPp5jpj9HmJguBCVKLwRSzVES2ML7tix15j8kBXvUq3SB2UU4izrUEMmqdk7L37YuH",
  "key25": "Nrm5Wi3hi2H5yeQrDn9dycscSGfK33h29A8guqtc1teeVV4NAbX9g91brWys5b2TQg7ZmJJVLv56AVQ6KibLWxG",
  "key26": "4XxwZ4aWa7JwbNRkuiNvv7bhMwjx2KbPU5FH5b5np94VjuQe63c1Yj3xGZgQGa1kbaB5ZjU8b5rH1dt5xLULqu1q",
  "key27": "5dkfTzyJpRZyGsCySqnLrxiEa36sBJF9XvZZKGMmDFUTSZJb74q8aRqhzHqzuJ35qgZAK9hHCurp5r1i95u669zt",
  "key28": "2GZzMwvC1CuuyXPVHQUmZRrC9Zb3WjywdBaRgg1HKcNdAetP48qhrvHmmvrZaauxKF6cYg6Hu1ZrsSXKzRZ2wDXQ",
  "key29": "38dz5jg1ANBqV1DeXc4XZT5MAayjpkyrkV5Qd1T8uGrRqMhfqnSY19DSQ8zxFS7FHkJ7iRBn6ysYos2gSTwfd4qc",
  "key30": "4p56xQGbArDFSoMK8Cc8oTDRmnsXc6BUiaMhaU9RNPGSaJWR68URqoJZ5xMKxD8NcCQx5tdh55eZBfwo9w98fTkA",
  "key31": "4Q83ZYh556333c7sdfCWmqawbfbsyMstB9wSQgY6HYKvDSm8CNNiBXmBRjxUgeSAcyxtjtnjYk7i1s3bxkQ8PhyN",
  "key32": "2Gr5pn9fwqThZPBCbgrGBGMgEQ6QcW5VANEkz6uiWmK9PFP7fu6qs4ToWjMwYGDS5xV1ibf1UEycJfM5VnHCYujP",
  "key33": "3AnzNE3UEXuALpcY2GzMthL4GKGuqhvk2EcehRuBGufKR8g2xCDvxJZYSZQW8qQmReyojoNy28fNYARsFJ372xsE",
  "key34": "3PkH8jDruEZ5rBzc6jy3dkqJ1ovH1W7fgYMwoAuRXyxxEp9mK9soGrNf1HJDA4MjG1ojxYUshbttVo2XrXLQUCU7",
  "key35": "2Ex8E5mxLvNKfswRpgtEpkMu2dEwUYo9E17TgAs7Ctcg9dx9G2KjRyj81mo6Uj79DBaa2Sy71geKLdLzsGH2CZjD",
  "key36": "5L3smiWqXFXZwqropVmqKsgk3vWdCZ9L4VAQLvtcSY8hbLHfAPvz5phyD6FKchRj9G7PSS94t3TfuyePEkEHCCDD",
  "key37": "4REUpHiJEt7BvDZHZJPtMZSbP8biXppLiomr4PVeAi2uqzyrcnPjH7LcWSg98QfjoEmnfVFnHyeryL3zQ7AmrP18",
  "key38": "8Jpxa12UVAi8DE4WrntAe98JWYvnDDmx3WkLQKZrBiwHWEUzu8JrRhcvsT31uuRvuDtNhVZhuiWWqcMaf8dR7Qr"
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
