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
    "3K9HNGF1A8Q9t7MjCHYuKMsiYCbx7R6zGu3x3mCpEHKNwkTA9kdQyWsJkChtn1PKKMn1RmcCEqcqmEN6z8asHtob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyAoZjpHfJtfh5VMrh66UNQFEiywL1j2ZZWrrHGNYWvnc94gqgJJgmq2BXUjUWqZt4qUBAVCQGzv8xWAXDBiyBi",
  "key1": "2WtMyykqMscnPainD6YRcQWXmhXn7zYPiAe5mpxG7yrk1wqXzBJfujvDCLGyFDvzgragyEBLhLjjaorhiEoZA3tn",
  "key2": "2MfSFHPfjydvRpX1kUJfcThZdqYLt8FhC5MgC6EtUEJF4ksK7myjNRLqqKjZpNNbzPWEtGdgqNnCwozkK8gq4DvD",
  "key3": "2FnTZw2QB221oWTgMBAcjxjXQXKuZ8xhhp5qW8DPZ1QHsQqFpHLSV4bThMjsgLJYrxPpaXRGp6BNg7uT4CVzPnFn",
  "key4": "EwPRSrtCUZgtzXNkrHZoeb33mTHVvDZR5RTZFaCPH7BVY54XdWkz6o6utVDtqbXWsC9yiwMJ2eC3qhviHDmfbA5",
  "key5": "qkxHE8MBPvJDjT2HzzVotk5QjC9EHaK5SZZntwDtDMMykakgDhuFZV6UeTq2wtmPHCpYcofGiE8fuonabYudgXH",
  "key6": "2X2G7FpXyVDePU62Jsg3udMrsTHRL24agWQkyiBNzbY6weci1K6QrgfjAjDtHxEPMpRhBsjFnZgDur2d2zBdbPzd",
  "key7": "4A2bZJ2wb5iQ2HQDyo2KQmHfp54SDD56YXEA5FAPMmQES6damwKUbRaoYd5ihyGPjt28fuWXyf3denRrB3zgSLn3",
  "key8": "3jK8EnN9G8kyDtZbSFiUGvyD6Kbc6ipbzKxNSBFV2wuGHr6LCKv72AhXGUigsTpVuVNRTvg7swyPWJLUdARnP728",
  "key9": "2vMMp3pVTM49q596soPgs6ztBYAeycgiRUb6jRBEQydWYmWLEVzeZKPXkZNpANpYgLEAdysb6xQTcKzWwvAq9pXK",
  "key10": "1pts5LNx8eYJZRbLP7AGsMfsjgKaGD7HK5Z3CFzEBXiGuzErsH9YfHA8Nbg383ps9EhkYio6h1eDSYBRsThs83T",
  "key11": "5bs2o1wFsZzG3BZKVrjRk3nmm5jj4oYrqg8PutnxsAdmb4rKi4U4U4F5zW9rFJBDPiMDnrG1KcBQrtapxaiw6NAR",
  "key12": "3jaY2CiNq8UNEn6TY2iG4Pmv33Jzu9nLzqfqPZtuXywrA9MFh7hTthTbvotr1H6GZM7biufjuCDp5mpGvaZvZR7f",
  "key13": "37UaUZRLDDsR9QWKDnRQrbXzVTufnxxVJn8eSfeN5WByqVk9ZENTBdop2jxbnkX6Udh3S4vkeMGPhKF4MqHU2w1M",
  "key14": "5XyRzj7zxZJNdHVMsJBfYtzLjehK1yovAXuf3sySENLFAmWnvwtgK6b7BUJrCBswLcyyUVwDyYWLQmQ1ud8Hj24K",
  "key15": "eNm1YjiYxucsaUzBWUP1SFV42vv4yV1F68FaL6RJZtSEqnV6xX5XF2SYvpuJupFwafXZwNiseHg3C2gBUaoNA9E",
  "key16": "3L2GX2bus1YofnFuHQPgLctWNKxvMTosmP4KEbeZrX4JvLNCM9Xo5pXkswxKYUNchGida6B72rUkBMWC2rBJZS1R",
  "key17": "3Z9wmpukZbUMHciBYAEcCDBNTJKjQtGTnz8J1eUJ2RSq2h11UeNvc3j5Kb3ceLTfZVMMV4PdufuUYLKytEXN5QHs",
  "key18": "2pg2v3bVLKMCqXSRLuDeKjeVNvusDUm1zet8ENiTLfqftAiTp1mHVvY7ds9HaWf8CQcoVo3B5e9B9fxPRHMc6UNy",
  "key19": "387Cvhx9R7Q8uW6M7thZQzPRqNqFhL5LrpTFyezX12cvv1F94BeASYDrvX89JR8TuKfLFxnACiu9iRp7fqw76yHQ",
  "key20": "7qDcUM2DdikEp7Un81KX8BQgYumUi3as9JAQyAREyBZsNhbusuMAoi51oeSKQkoSYdXoLJwtXFhn7yYeZJKVjf4",
  "key21": "3GqMctJ9FUbXkvhdZRKkDk2i8vUb1WXhchnDZWAaRN3qtUZXXZmMi55tmFv2nfSDnPddeXiGvyvwkb7Lj9foGyCb",
  "key22": "4SuqRsJxa44nKvnLjrfGTY3vFJjmehf4srhicnqa8uwEYAsoNZSoKPpkDWng1cDHiGsqnUNspMrDnnPLNMAYCUJG",
  "key23": "24JnmGRsTsPpRjxnF1tAksgu93QLajEmbBg6mKPutro4q1xDfm96U7tKri8ebmRVhrNZwgo2He88MPf6jCcaXvLM",
  "key24": "3ckAgk82iDhWCzWBJhDQ7zpQhsi64kGj94QCh4kfqgfXGufoRKHrdJg9LBVwYhFv8GYHcKAEKnPRLX68MagEzeC",
  "key25": "5WGKiE64YxgMp2HuzYaaX5hGXHpngEKxXytETrRn7UCUGBLNnxdH4i4HTxnkhAYCoxd9UFHfr7h5Uy8diyLhcrJu",
  "key26": "3UGPijC7GBdCkaYHkW4DvxZFbc98LrCF2PrYGFrj9e734GGdtZL2oxMxAohBGrSZKTNEGrwwso9xu14r1WiqjFBa",
  "key27": "291UXWoC6MMpDBH68kWxWJoz9mw6SF4vUks2xhgFRvS9M4M3CbKEefPbMpZDntHTGrE7z47E5tkbyDqsCDkjydVG",
  "key28": "4QttkzWSTwNkqKbMkeyU6i5qAip2q6K4xHha8Yt337F9eqYYrTsQMWHXdshNWrTpjFrZccS2KKV5qrLmqJkdwH1p",
  "key29": "kwLRZ2bKKzAoSD2ngPrUikBzCiMbfCSpEuihkhUzmzsRSNS7ntBxdQttwtA5mu3M7GjdEmMUPZrgjXjWkzftXpB",
  "key30": "2UWhg8WiHwYguJoRvYrVxJ52C4Dq7phHZX9GD23swaaHEEBRWodJdMsJAVFPo67tdZ9fbsYyC71hxB3pT3PNau8J",
  "key31": "5i5thWizVRa8tjRwLKv3aHhc9oAdUyN4as2HESyW9CcepaDnmMSKMwMAJJKbG7PK4JqWScHw9Gp6RPnnTJBHz7k",
  "key32": "3TGjnDSCRv7aTz7usmLxy1b7WwiTMgrGe35fCt4B9HPBXFhVmuNL5oDDwRawXyquzh5UV8eMpGnKanUU6G7aXRFX",
  "key33": "8oqZk2tPg3H3NkazHcqbDEFnSrjLnYy2LTPfEEvGbUjca7PkboQdaFPZgrRd9mEVLCUHXz5xeAdrjyu67bJYLhz",
  "key34": "3L1TQt539qTD9KxNxKewPgS5yCWV65KP83KRQrAPhUPoR4NC4APEga9uMEQQKTjJVzrKCbapvHdtx4D6t8RDLr7S",
  "key35": "5Q8mcqeXZfBCn2rBU99aE5ZH5ux5jwaB4jC4DUfzbWBU1KL1P5MsYkSUgZ52MntwGaKXtEUBfYYhbNxsZt6GLaKu",
  "key36": "28FpKeeQWEQPofF17dDdDr4VzxoFRsBaBPQYJexs8vM1Pks8vhtSUJuNT9avUnK3EBYVsDfcd3yT9j1Kspuiz78n",
  "key37": "BbqpGVHVNRgWbMvDM86mgCqxKbGXLcVyUwom5ZHnVP9dAg2avwyVWkzXtcT7WzXEVug9321bV9Hsm4BepraJqq8",
  "key38": "4iyEnjrMHXCy5esuvVPotdecZnimT7Wm3gydDQg8QHUBk3maY5gLx2T51fvsizHnzvRWn54DWyV3RTb53KiKv1DP",
  "key39": "3BASWzdrdv9uLuzrgbbGGLUJGi2gLaVpYeL3MJpnAaQFGMkvKcsxyh3AhCNEK7P8ivGV8yNTYz7RRi2iyfw8MpTH",
  "key40": "2W9HED5saKUXaP3zFAs7ByoYQNfLpUS6jAhb4kaFj9eH9ZJX3FT6pVCMBprnWcbFyfCRBB11t64fdWVT1mPwSBGh",
  "key41": "2C2VFVQ5gc5NoVsHyY7HaH1YFnaTCnrueBsgvNd1E13rZLmrdtjSFQyXkKjZq35o5iRXk4kWTVfebNgvxjCy1WLa",
  "key42": "3N6ZhTHB1NLMfMHqdGAnyDfVcBhh9dqipgskCAM1QDcDTxDyvvWGru2tCR5M2LhNa5At9jQPPso41R8qavc8WCvU",
  "key43": "36M9udUQcRrf2voWvRe6v9xToZv1CnjSjnGWutjGnJ1LD5BjBejBJXc2msJsgkzZgAghkdUN7s77pq9DGDd9LWd2"
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
