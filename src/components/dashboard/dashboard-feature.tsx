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
    "GRCwfFR3K5Rbmk43caDaTZm5nTU95V2YMSRHxn193zwK6BdrAuUNhq8fRG7Fx3DhocNLHDMbqmXjk4CEAKpQV1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SsZ4sgk43U5JysAEvqWE5rXSqw9bXWUhsudibhXpsikEmYptzYv7Kd3jrPG2Nra7U8ofK7Homqda23x9QmTXkY",
  "key1": "3qhiBKb48XeEYr32PaiK8R7rUUbKPi523o8ELmW1enYNx6Y1mdR3Yq6tHbUGe9dXtgZSawVo2gBwJ8z6fUseaqDL",
  "key2": "61hronu21BVxSnzVRKf24pnEp4ZYonYrXXmXj6gP9PhNAjgSAb9Pc9Qi67HydMRKHkCDfYag3wmRn9eiWAmDaTDr",
  "key3": "4rucRAzMZeg5Je6AAPxnv9kmTbaQQvir8oeaXfJ9XXy3rAUspMa71DWzPuiJEdoshevQSMofgn8PNuWaY3ugLgQL",
  "key4": "4gxm5gabw8c11KvDxUhA5rKp9gzEjix8JE79ECdtuFpSDodU7uFWFPHd9x6SSbTYqNxxqGzQgjPZMrTNESkJBWJU",
  "key5": "4YhqPVnS3j4dNaaLou3feD6x2mu9d5ewDnA78qWwQdaCwvttcrMNFAfeMw1jpz2sjayiy5j6kdTugoHAvUGU2j87",
  "key6": "2TLFEdcpH4x64Ex6vyMAbEScFmNLMKxVf1VjEEfseBu1fFBb7Z9kC2XGyyKX7onn3hjsdstME1cNXDsMt3UmYsDP",
  "key7": "5yN9UCjJDEwN3zD3p9BaRnQd8eRR4Ar4eeJctBdnKc87kPkPCi3PNjrPiNWa8ABs675rHB6a6sCdPjjEha3AinTb",
  "key8": "5irg3koymLM83PSpoacFJyxBYymYKsi92UUaSbRuzhcwi2bjs8qvWagLWcUnYMQjip11kFw4rBcfyRTpM826zQgh",
  "key9": "5dUPGUY2q4UaEKgupR3dBDh3djbVFDVcDCEx7n4RNP2ioxATgbq2ro3ZUFrbpuVjmshLjeyb3Hdy5eHw677Xhiuu",
  "key10": "3Si96VYk1cLY9iAFtscyGMKnBhAbc7hmAScvtsRrt5KYpJBS8cpBZf3xkcvqabsgUNqDrSBDwvgUxVG3sJzgQZXM",
  "key11": "mWBv86rovWSAQz5vrow96XfsKMW9xVDmJCdgYStvVNcfKDNHyRnrx7R2DzHucwPj3gyfXetHT4uWmSctk3bjoUK",
  "key12": "2mfCFCZmT3qcc3k68TKB9Uh8p3aBDTCAYeeq4GFjwbTHGaZoyEm2BKz4BhrWj8uA1mNkqAMAvTtLMmymkWg5EWco",
  "key13": "5VBBEZ9nMueKRgV3g2XYdN8D5MqDYZbUVyyDbEfDvMmFFBdNp76Rv8vbkADy46wLxV83yxLR9WbCQKpFf5X8MCsN",
  "key14": "S23mS7pTRVQqscyavKea8bzN9nfG1rDu6Wq8VkYnb9LJStxCMK8GxuPdCv3uiNU3hZpQfKF28ffgc4qYuaYY2db",
  "key15": "5SnA79v8b1kvVQroiEBEEKnwFhVKaTb4BaKjJV17SLJwkAEQo3aYJ2aLYBbn4YeYBRG8Cou3NtxccpK4H15LHQSE",
  "key16": "39SGp5ayjaBLmiQohJmSSEVpxt9RP3qBUMTjoPB1qvM7m3ZWR1TCRPJhcxyD848nLeyPxm4e2nHp745tgvK7y719",
  "key17": "28u7gMq9ALB6tEXaySYE8soqyAKV9ssoY7cvNAP1KHXHvwpvYWUzwk3kniES8mVwbbtYA6cN43sCJKri28cdfqDj",
  "key18": "5jtteWD7QDR7DVJoWYousTwTZ4wV2NdmfoSm7wovLVcJNwQxqZXRipiFnqrzirZAqUZvZEKrbnvCZB7mGqMdZLpY",
  "key19": "4bXFaKBgLRs5SUkxwak1UGS7xcz2zGVLgBP1LeNL6yRc17Js4YAZX9pn52iYwyTtFRaiTMbeqjdit75YXASaXHrh",
  "key20": "3fseac6rT99UdzNoPcnaW9FGFEReZkGKmDYNB9hayyp4dLoPn5PjACfcr2HyYEEApjGnhdthzKaDevLZzv7thK2",
  "key21": "355y6KTU3kmUxyy4ZP7KyRzRHjkdHJh8fvaz2172WCifJqL6CC8YfMZbtUAY7x51Sseanmk6ckmq68Z4Hm49qRez",
  "key22": "54Z97G95jCa5BK7msW4rsgnLvTdZ5QhGxDKq5e4Qzpi19sKCekWE7tZW3U1XKRQLvFU6KZjoSEzgL5p699hnSbLR",
  "key23": "1D3JXBAvMCGLc8MjMZZoRBADn45aczNt6Kg5ofu74a3TFSLvTnxadC2h9Rj93QD2XitBU5uTvmYk96KjsWogPEm",
  "key24": "396iJsx2N9FcXYgJP7mV3vWfDtmdKrzonYbasx6KgMko13jZ74gDHBHL95yLpjwuin27ASFrNF8MU4HsWy6xpN2i",
  "key25": "732HPpcnLVgMwJcES5Kh2ZBxhNuLPB6QqchEsPEYvGU2nL3KRQfXTjFSdM7zDVJZbANqRsR9efsGszXsMWwakwu",
  "key26": "4nNmun8K97d1ZNUj8y1PBjvAD14XJ28ZQHXfnwdfs9uck3kwiLx1C3aHiUJYhivUdJmTgjPTgQmaFUwbcyG2Q1H4",
  "key27": "9fMS7Mpzng75UvhSeM6E6E9ixZkMRyGN2FX9VxRtK2KUD8sTAhQVk3ZvnFVJFHxRz4Hu74aLoTvENSdEZJ4riCv",
  "key28": "E6nH2Tgce14nP8aJ2kc7s4Jnhcs1eSaRghUc6cWAkaNWbhgkM17WRy7ADa7xQvQUUXqpGXSqkCspcpUJFffsYhk",
  "key29": "2L5xKPgTQrJTmhaCU5k9ehZnHL3BhzZPfpmumT3TcG7xKH4rVH2GaC5sxVusHcg5t7SGf3W8xjpZCfoDhv2EnmNV",
  "key30": "4JMxkRwCsnhB4jYzfvEK6DxNhL6GAB21PHz5RqEdqCkMYiwdWXQAfjKYvPs95dBswsXsCJ9xhL7E6jb8YEGFbMhD",
  "key31": "2zh1XP6f1fwnW7Gn13JzEDrCk436qHdQBMwVY9pvpARCGH7niyxAaprmdbLTrMsFKYkqEG5UuNQ2kDoupddjrFqC",
  "key32": "4SAHBbyawP1uhSr17x3SJuZqkckmoL7Gbwb6dr9Xn72zgFHDgQmTrDxgCoTnXfWp2r9ygJpPkoQTDTaies6GLfRR",
  "key33": "3XDNR52zAwhhqoDp4gVg2XUbM1oHKLPbs5UdpR1GKscp4HeSE71THLpBHyAX4LTBBwAaSd2wAzkAG7ypqqeQgRRa",
  "key34": "6LedTsPhxUYRNy2Aws9cojVoiTUFNPyiZUQfDqq1UuJMJjnpiscwWuJTquwJBD2vQ5sbD1MXhrny8sTZwT3u8Jq",
  "key35": "5KaVMuDa2ynTAgGySxj1zjwfyLdqBZvagYY1XaDJmMAZ7kuHdLfrkmhSTN1XWUYeC1Dqaayvq1abEGuPhjdR8Hjg",
  "key36": "2gXw3dcnnxtSriVBz6R3mkzKJyfJ17Lhw42T52iRwjDojf3qwjawBKd3QE9nuB5KixZdPNTA7j48wEdhnMj58PPp",
  "key37": "5rwERtTRtCcpqnv5qPoVszymeTVdHGkKuM5QmwFaGnGsoHaWQ9JtQ8HVbxaAQ4jogM2jEDxHGVW3Pynb8ecdMqax",
  "key38": "5ybk9fqAE2SnSRmqsCvcMsbH9bcCKuELiia7WKxLpzTyV9CQVKH898TtZxemF5yu7cpSWnwfVAdyVQPYvDXHzMM1",
  "key39": "4M4yKi8qxTnMhVhey65JbuyS6LastDXrnioBi48mPy3uqE4YBffqUYeYiA8UgmNWawsPVGc8u1wpBqmwvQy5J4Wb",
  "key40": "517U3c6YcGDBcWwfMNCHdBaaWUM7rc7WLYoUjBwebsDv79aGEy2DFDWiynCgNThDtGfYGRQb9861A5qsKnYjhT4L",
  "key41": "4GU1J7r77bfTeectthyk9oBL2psAoF4r8fLKgSeFAyodEesXevFzPV11YapsoaRczWeDRSLrwGPyd6omrwQu5wca",
  "key42": "4K9XdQtQ9bR5NF747Ts26APDi1jpkTzYsrjK1AAXXFExT3WnmChoex87rKommHcBNHLFmZAZrXn3HSqyabEXcetp",
  "key43": "2NbVysArsZmHE8HEzhUxFPvHyujzazmabmA74YCN5uRFEVAWwH86CHzfsdbjN16agr4u5wrEhPJCqejdZSnpAGXf",
  "key44": "2aY18zc2FvwEvFPbn8fpqbQJVBCybmmq9fSjA6bLgAZPc2xhhkxRDzyaGobV6LoA8GDH1aPSB7py37d9bDFAcUPY",
  "key45": "HQdH1XfjgkAn7TP2NjzvWAYJ7AvpxQfx5UAY9nBTX6UNV6SHpJF5j5bbkQpZUkj6DpctXqUY8uhkE7kvB2uTA5d",
  "key46": "3fgi3hpXNXDeSMj3NQZcXoMxgPG6CGzidpPzRMHiM8RCZCp6M7yuYyd1HxwU1UAocyWy9ibwE8fTPTpj8o4XQ9kz",
  "key47": "QHH1bdkpFxY3H8QPD9WxEKfEqn2aVevQLX1hAz52sfDqY37kcaTsRNfy3DN52ZTUEJ2bukYUsJitK4GiC8JJhZg",
  "key48": "qQSCtC8RtyN71mwFcpsMMc59TdQRxgjMaqcaUHGYzuxwunmmVmgzdbh3ehSuf9TAsi2SyftRVCa3QEKwfK63Nn9",
  "key49": "2BVrHLe9ekcsErimKQd9qPXUy2HZprRL7Z5ByvG6fdS4z9FvPgMPKPK5LbGgncXjmrHyXMoz9SniKJctfUiP2CSQ"
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
