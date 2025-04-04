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
    "zXL4f72Tuw8ydrsCumuRLknrSQgKH8MvXguxVMrJWWahACZgfdN2HT9bwr62vQfRNnnKpDZCmdHoHLhpnDJ5Rk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWnxC3ab7woVkwrePqtJvPkYTJz6aVzR2sc4ivFokqHW86iRCEZ45aG1g7Fy5dS3MLSr9QfFvtHTsYSr9u7TSAR",
  "key1": "4AA6xZc4bnWFCFLwofoogxy7wHWCrQYvLuyn1GA69Tm4sYMLpvw2qucHRLmNHKn3x5Td7n58M9EjUfV7nPEzJnqA",
  "key2": "3Hmow258WbRRZqrVTGwcQa2QkDznuSNsqsgMfAGgdcFVT3tjGWzyMC8NztLBjVN8S4rkndyb4LtQYGBk7TmEDE1v",
  "key3": "9VSnupy6XahVMvT15WCG9KQjZyaVBxkHyPumCgX52WpShkqx2w4yhB4cW16NLPVfw7ds4j7q9sB3k4HLQ2sABXS",
  "key4": "5XXQTZRPQRGHmPnJov29tUq4iMFGxe9vb58MWdYgtsTrwM9q4Q6SwHnCqLaf7DKs2RcpSdcAZwx4uoZVJ6jpp2es",
  "key5": "2ZD7YBHND4K6bvobWfxabiBJumVHaNbQ2DHAaEozypUFyALwopaX94N24DDqZ8JenfCNsfAjJh1NManquX7f3R86",
  "key6": "4GKF8PAuaah4ouvC4DpK4AGEgRJ277huYoHQGvY9bVsShju7N3SDEqbBsjVb2oFcadHqTHNNeY3s7M7DgxrfdQ4X",
  "key7": "3dvWbsMXiumXxT7it4sbybbNx9ih3tjAZM5JetyRQPtAZs72kndqAmSGpkAY4erwW6GJ12KqLWJ4p7AjEyg8Lxtn",
  "key8": "KSVfgY28qYfRzAFWJZLzqpMAdUpnmJhkQn48Be1tsaDt9Hhaao1D8Gwpe5R2Wg6woWT9aU6ZFWHeySaNzCLEWdo",
  "key9": "2JyZUHpSpdMjvXXcis2sjpvgReKVtTPbCAsXGBUFkqug4FdSJqTyU3yQmENqRsWFLfq6wxK4Wts1wUqCBeC3R5H",
  "key10": "v6Xd6RLNsd2RazPiedNvbPndAxYa2UNeoTMr72iMLL9dojxLSF4cncYKD6gKtgLahUVDc6FtLB6YaCjoKAKA5yA",
  "key11": "2Qt8r4sQC3wVqKiuJkQ8xn63S1YCgHYCi3vV174essVU93gddLuYMfpaAx5tCTsj5LPg22gCnMMLUkzbKm4p77x7",
  "key12": "2xBoKyWm6VVtAitTitFnGotguFHNQfDDgbmTffLLRKBCX5GaaQcdgW2u47ivMgRFqGFKnDpnt7ZDGPNoeWPUkbH2",
  "key13": "4F4kvsKuH5yeMCitV3gjyDUA5C8KNJNvZYKGWj5W2SZARhi42Vbbn3PdEF3tB48SjRYiydRZpPr6HLH9NzAFGKWs",
  "key14": "2Ge9o6gPAcDCdDdA79gqKBMhAYdf1PQWF5C91wFg6SRSrdeRfVw1Ao8ThesP1iq87qXP7Lw9fPPEvioYSkkEx5ak",
  "key15": "5qdt5SkUFJWDrvqPfCvG7BVVk3iFt1J9fxMdgBYoz4E5PHVystCCLun1hyHa7njZL2F2uNRhGrFhuxt4bhmWKe5",
  "key16": "4Unkjq8z98aGs3SFbdTe93dtYArJ7jW6WgGJozfyH2AsthNLJQF3CVokVVcWTGQny6fWHBZSPZzGhNnR6KpyeoKH",
  "key17": "2in9pyYepDqUw4kS148LVA4kEZrbeH4bvvoNVL1QSEEebWpSWx4VmJuMPMsk1SR9wVNYsDEYP3eJZm2mKHk7HpUG",
  "key18": "2cBxiVGqtYby62c8MLRXwWRDopoyLNqLkJyvobwceXqappx8EDuV5L86Uy5dQswTW2GVkaBnBcmgMktKbhs6ceXa",
  "key19": "4FK5fSetUSqdrSFACeFMm3JJyEzVFHoPnV4USNYeswXqDT2bLW27cyTsVkarvWqdHXZVwqNSpj3eLBjETTPA4363",
  "key20": "3Vxc64SFsgovTzUvrM3eNudHizZm9aKuBWvMYX5TioM4oFh7jzU9qRqQXkjrdxjZAoXYwAEnUufudnxrfMEi78mD",
  "key21": "3zeRyY2fiNa5kPedoRYc4deofeNhYQc2sfZoxYDYMBvTARQbQnLEtEN3VzUGgSRaAGLm15rbY7biGJw7DKKsnYqK",
  "key22": "3QZJ6WrNSioYsBZMYDrKNhBoeeJBGxv6vRXr6CDXeW7hLGoqf2d9AQgiakbKXLyYCLtBqYqzjvefA2mr2ww9Ci2G",
  "key23": "5ceS4H1PEqbu1MVYQfap2UcSQZsRTCh4T7qJQoH4kEj52d7KV4X5b4hWimexq82gqFaCucfetKZ5bXkAjuUyyc8F",
  "key24": "39NDfW4kXqFTxaph6A3VgXJrEy11b4xeuEf95UARNcgQ6K7ftR68nymUW9jJ3EgWaFDqW4xCxKt8dg12tLETock1",
  "key25": "4HULMQwjhdmiDpSd9xgkc1AJMujd5zqNx3kLaq3GjVpdGPTJSLb9gT1HZ8oDNUZPf1NK7WsWcXpDsWTzWdnN2faa",
  "key26": "35FgVk1RAyirfUJSKrsZriUmrGaJrKLjg7wASPzhsepZ41mU5z9d9sWbtLuBwDNodSLnDNP2CHaPcuKL77JozDVt",
  "key27": "PLdYLsXKNnNinGs3gmdnUcByoAXieUxdxjjLYL58pywkareM4QzhFE4eVA6BH5gMHtCKhnJXuDyEqK7K6yhYVD7",
  "key28": "28vh8DurQUUE2j8LBFs4ut23YGRAsy6aE47LvGYpQWpyDERKfKQdqhcwryuD3cP3zyDQkDvxVAqq4QkrHfWQUrri",
  "key29": "5Q4BcM9kHoEspMS1dJ8v1P5maoEKtLPiLHCGX8L7RWgFELFhsdJnjdsShqtYBqyE8iTqqj23aZWSu5e47xQwYWyx",
  "key30": "56whWcPK5jC1fHrVTQ1VFzfY5u5o2cxKLfqM8xTB9jmBfu7rSnoRMztEBwc743qeGG5eM2PwfExm7h8EDrKuMX2L",
  "key31": "FGnJ9RdXPojBfUW9RL7bNcVJYXEGphS1TpEoUTXZfHouuuPw2DVpfMxNks9CjhpgXvhdiXHC7EupDuESG4dozu3",
  "key32": "2VK6M2Es72tiFCWPcTrb4YhrH6jXKxvA1uWxAFTRCQxvpydJKJwrNyShTF8C2yiceQJy8V3amWEZUP4uuS4aLXw6",
  "key33": "54t4PZkvsSv1KiW4VMjdvzMZctg2CQTmWJgQ6M5vRtyp5fuNPA9q345C4y1rasy6uLK9gcYF5cWpbn4AXrhwppKb",
  "key34": "5LFMUtUudFMjPcdFBDZPxPM9mEx4DsiUXQFWSAysTYDKdPUAHjH74cVxRy9PtFb7MAdowYd1CyMH81j5A87hMpVC",
  "key35": "5GnghJAoYruBA4MVw4xJLVNc3uuXFqPu18z3X4obaR3uWkaZV3HzXSTeHCSsAywpuDDf4wPNPbPKmL4skVWCEJiA",
  "key36": "52XFdMmuMLFQSr6etxhAGuFtrFrgBXD65kyUaUBVY9Vo247W9Pv9i6K2TmMrn5kHaSycfdQLKRoUkbYX55qgKkp2",
  "key37": "5WGimbmp52eXiUVy8Zfo3WiA7xb9Tjm7DKV2PxTPeiuSV6SH1UWBG1iD8D2Z1zaqdKUHJdqvftPWepGx7JogPK7g",
  "key38": "4Bu6UebDemUxcWP9PVrSW635qfwkyjf9mP8xjGJUFghQDYn4oS8Cw6Xk74xZTcD2pJoRLriDd49jNxrCoiQTJ1E4"
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
