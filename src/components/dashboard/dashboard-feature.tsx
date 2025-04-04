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
    "T5THoGGoH86TCwK2ZvD9rt5TSM312rNQZq284Q6PBtDfw12s6gCvRdN5LqCWjsL1Ej4vQePky2grdACkHKgkEDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2est7PJdsiaCHE6kdk6N2BGpTAoRuetJ7X5bAFpZMyC2C3UiMPCzje3m4D97mb2cHwqsuBraBGzTkGCS8agnW7Y9",
  "key1": "2bBp6xSM3CrVRBGVF9TnHX7f6U5hhcV8YHngzvWDS2L47ZZPRW7EUNbKbKNm3ZYA6TPFLeTQpVUcPou2QMWwUAx8",
  "key2": "39jxjEcWJXcZgLmJYuHW4hsMPik63aewmo6UCMR6yySufFsqKfiPTAQGLZebw5oz2V2QbV2mh6ZWh5ebcSdSatMs",
  "key3": "5jHkcK4ti2DRZwVRRc5u9rb8H3qSYQbqPf5MARuUcP2fVGn4e98pV64trcgiXM32VzvkAUqtGujL5fXjeK7mg56b",
  "key4": "2x7nA5DJ47F7jujtgTRgtSSzuR7DmQUv9jLuc2hs1rUFnngv7kZAsAAbnHBKvoN7v6PzXBUntgCZeKcP8ta6GPv",
  "key5": "5KRbbmSwoj7Tb2Hh4KhEW4sT3T9ASjKH5Kp1XwcDtb9GYsMxj6MZnWs41hSwLfbymG6xVN4n92juR7Adig8gM6bf",
  "key6": "4hUTfLFiRqch3Gxo2RLg6sywHAdPiMMDKBXrkadyVjisrS1uaSCgCED89fk5jrjTCZFa4XxTdSx9ihRr2ywTScyj",
  "key7": "5EDWC8cSNZSfVe33AdRNpe93tggANGxair8ciXA8L4e7LnDJFy8B5gqxq5y6Le7AALzvX46sMEPqdpqCzoWHa8d2",
  "key8": "2BU1jdgukkZqTtozu1o9XvVjJAvsru7KAJciCaZMmKBFbKu4aVfEdkY6YN7uTfqzyroECwnGjxF6gQHK9fFZmRWG",
  "key9": "3mXRoxe6NxmUPiJz9x5AbyXGXMEnANgpda9JSWLgfSvTWHft8S3uNWkuMHRpPbDzJH8bQSFwz7bkE36ykaje5Uj6",
  "key10": "4PGnZAJuA4Ye9XpX6y1NAPk11SbzzgmzuyWrot7gFoeaLpaYr7kqdfg8YDDnJyXkNY4giYaV3Dp297soWaCp6GHb",
  "key11": "3GW1SPTX2eRJy4wh1WLbHjmVQPv6CMc43em6M3xLHhe6HxLzcoanvt8yLNssaH6Gwxo8DdECaQaesB2FxS62GaDq",
  "key12": "4m9vWxGwMr1W5nWztesZhNStTfVHrtSy5JsDYkWFjxWz9JCivE5TaNZ3MaJUXCG2zLMXARjJMdbcaQWMgUr9b67Q",
  "key13": "2vzKSGKGkX9KUHLWhz7yotTM4R9TDVhXhoe1EjdjqBRefQggKnmd7hE2NNZXjbYrrhRUFMoAModBnWbE6iSMKLiE",
  "key14": "4iDavDCYrA3r6fpxwicipbjXJ4fMQQbHUPUch67wd7DNU1oh9Mhuv1qNz3XoGKhj6AjHwq2vQkq4D7W1DyigHJ94",
  "key15": "2U3mPA4mdfKmuouscfkU7zrwA8jCfAGgYjB6qqn6CnbtsfV2LHoJKHRFELKq1cHE1pP2d6pnCqT1Z35bxjmkpHDb",
  "key16": "3LBzpF4qHMgUoNZ2ucpUjfnwbpW5xbHMTTx1C6nUamVFJDYviRjAKUPkn9qj92uwuBTPzSUCtUzVAwxdiTvSbmFS",
  "key17": "3dEaH4G2Juhjosrv7rj6MfEZ13hcm5RsXhqV8wNo7VX1wMJiHbfoobFV3XceF6JrcDdajfXoabcEQtMvAPgSxfru",
  "key18": "3nzU8jzDLAzYSr7qK82Mveu9P1Nj7U58f7EedTy18dHt99cPe2GJWa7k5wRAXw3KrQHaZjnCr4kwouh9xjKHTLy2",
  "key19": "jKy1Mf2baHSqU1YAGEmEmqRnMqhqp79owoVit9m7RtGrCHKSrwtFgwtfKvxJEMqF7wpV1wGwBpv3tWecMsMXJPb",
  "key20": "3U7sZFRM63onTe1vvg4tt4pA5gMda3D1sNhXqHqXkpNQ94HvdX4kmbQXkiMtRtxmRTHzfLB7hjZXpMWgc31Zuqum",
  "key21": "54kLk1Pn8i3r44X3eETU8D4SLXMy4zD51BWtvhDq7UCpg5QFvEvYhw3fdKj8SjHt3daiP7oHpATd3hHyULMRUMMG",
  "key22": "b2bMhxwFZ3gEbFpaBVQTtZrkTgxPAgnNjfwsUYNtEFmnBrwEooy7ufseheCDYEjUtctpNxwLtTvQBQ7gCUqqQGD",
  "key23": "5HAecriM8khsts1NhUYJia8k9c4JN3dNoo3V8uv5DifyHvZMtiCUhQkWjZsmzieYjKoywPiwzxq9DTsAp9hob7wd",
  "key24": "3ekwHkvjwdBW7dy3kQ7QeM24h9Bh1NKEH7dzdCSaWPzK5t6GVSi1eHGK6i97BANDPqQV89gYgPEbChRkJgBjNMfK",
  "key25": "4wXQdhcVjm4s8ZmqPtZ5ZDK1do5T47qkxx8MfC8Wh3qUcmDZAEPFFgkkHzArv3U2MbrSURSwJYxk7wDSXYq8qYGr",
  "key26": "3Bw9rDro9UaxYtEL73fVhUUHj38GS1MHGqqgXP5tcS99csnY5DDVRFmhhMtyhr88QQfD8i6z1mi9DpHsDvbXGFFz",
  "key27": "1oXFig39AxJriHghNpAeHrMtQszLiCevdQcSaWtSniPi1RFnGtRf5PGgsMUJpmDxXaiL9VVt9fy32nRVzRKHUE8",
  "key28": "3nt54cX5L1EeFFCPz7yVsvfLkoyVCgcZb5j3DonWNsVhkRyhbQY9EYDBjeuUKceBK31FyJCYszjPC4qncmjdVuiL",
  "key29": "4a22b1tJuqpYhZNRMuLnNncsYjSZ2eLtuRpKwGKXWkyyngQaJPM5q4gJwC4ZeX1i86RUqhUW3RyPs3Q1H47bQ8TR",
  "key30": "5f7R62fuaGVJiYp78DEUdB4WGD1NWTLopW7UwVrPU1TGokqSYwxyVufnj64fRxnvCAYSQhrbhWtCfe6zvT4zar7e",
  "key31": "3EaRq2JVpuFk1AKuSmJDRMggJRBWBcGC6mNvLch7FzpjCyWL2JLnJQQz1FjFMaLu9LgyybtVYrAXkX31Kh2Y7a98",
  "key32": "3mFX8JXcjcYPF2nMUcEjDKBz31CjMEXFdVjQjUk3zTEvc27fFSQ3RRANYQ2bBYWFJxhzzFZtvFttM1TzTDtM8BR3",
  "key33": "4z88NHrRgMrKHPMWsZGJ28xtADiRbfeVpkib4RC2kqzXUuAR41WyrwqviHvz6qj7anEt2nmjEA7Xt81Ax5uWob8q",
  "key34": "3RMfix7MwjWpBnZB8wD1xhuqnfv1TZ5UzmSccAPpUVX2bqUunkaELJmcppZijBY4iwVp9rJr7fS3GfxBaeZt8bR",
  "key35": "4B5WuLcRZsLnn42Pf7V2xrnErDyUjc9xXpyHEx5B9ujubCZrRj9hEp9ywMN729c3nniyiwPGXzR5BDpMihM6nFyx",
  "key36": "4qq3rjsHeRshf5gzhaG9Bh47z2dFExNLNENFyHpNhVpGj56C3DxpBvEKYTTMV7fBuvz1UVFd7WxDV5msjd8w7zuE",
  "key37": "4qE5Tp2zC1EFRycfR3BLcjkphaS7AHc2qzaCd7AxCPwUZMqwNShh1aKJR9f8f2tr5W7FvnFfp7oWG4WWKQM5s34K",
  "key38": "3SajTTFcCRvbosTtUE7uJUrhT1FkaCP2xA8rGbuBp9b4aiGcnttni6seyRwaa93n5TKPN1thG4rAgzvM8WAMPku",
  "key39": "2YRCPDEPnrtEByABpx177U5AeHm248sJpDEZFZo5BtdeoMNnaZNmdVvM78GyaN7AceLvrMMRdbsxeJCU56xU8CQt",
  "key40": "nmbLZURwstsdFkkP2E48HyX8zb7TWuhFU6d3mcAU27VvJHSjBpf4v1xJZJCLESKNqb9tphrNLCtYq3D7N6ENAyH",
  "key41": "56Rv4gLkf2STpqBzdzTaWG5W8edLXNT3gaHNnuNkCRbDKKYqzroE67UEnmPY9EVC5b81TksSkjUrLPCR5tyLZdci",
  "key42": "5SkGnoSNDumyZ2QvAkWr34SFJ7MdoReomzdcXLzczzbfSaKzLDUWAbhw24NUtMsQkUxHaWWmB1uHjoU23Ast7Htt",
  "key43": "4hCFqkG2jc8R7MU2uW9AEdiAHMpsXTzeb22eV7rwMncFBNftrxG4fGyptj5bnr81MmujFUFXLkzRVpSRBj7gWK8D",
  "key44": "45HZzu6EMiP5XFJPQiejM43bPz5rP2fUdfFsQTb3PMUFjk3jrhU9ATdxH11hGUCUpfoqUsRD42FFdQ3ytZH41LaR",
  "key45": "SSF6EPXzNfw2CCLT51gmjztW6yKVathZh5MgPwtV4cZo1fUt1SVB3X7CszASGh1P19kbCDwP4ojXC8SxhH6uZLr",
  "key46": "2r8NFPV1k9hLPEZkKfTQYXa6hJDJGmAkvNu7CNsMqRnWfzab28WWDAreC16mpuiWJ5dgsh8uzmQKcuQtoW7bXJc4",
  "key47": "5g8RePpT9EA8iy2Bjqn5rD7K4ax3frniuxeZtDNQyukJsPMt6qvCrYEy9htUKWc8KQuTLsyEgw1h5kNiiikjFU2n",
  "key48": "4BmExqM84YUAvM8fHDVEmptqaz8r2p3v4KYjHPdCV6kDhDddHRkV586hgECiLjFhxq2we1BRS3ya6sPr6FmTMTkC",
  "key49": "3BzWtGceiF61GohBPkMVLMtm91vYFMXZhb6PYi1rzxNzcjEaTMzSPUbMYAXMPtjgV9DjmMMarjp5gZUbYEvT3pab"
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
