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
    "5TMFm2zBHP2GHa9uqUMTcrsR4Hi6MwtRk8zkPagqeANH4WNmrBC9kt2AxFTZjG8emYgbyShtjf1VNnRXcJiaPube"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fVXPuLSCqGTer91r4YHrttZTJck6FAHrErvKPKauBFw5dkszbdM7zvLWcUGeWXHjgqrku15oCRtHixTnByxkF1P",
  "key1": "KUuGiycuSr3564e6eaHXNg4cLEjceQiTUnV16cu7MqGZntVP4sRoGonERjeafeBxK2QKAbGTME3cyZBzxbxiYEt",
  "key2": "Ggz2SpYv14pmnME182LvmMTi4Yc97u94PiJcX6Nr3LZhkAumcRiFt2Se7YZDWwrgpwHFiYeYPZ1VVbb9mw3pxXT",
  "key3": "4jrY1CXj994wjdyhMa7wyNvszvCZLJh8fobc83g4mJESUx3ePekB9uYF2hZ1VUhMCLsCrXXEwtVg89qDU7ZZqC1y",
  "key4": "3u5ipSQt6UxAr1qAN3jjFR5ha3NRM5WKEHGP1TpkjcqWuPTUqTftckwaxuriYgpC7ggDTbFVqGQaoc3Hq8dETjRc",
  "key5": "367vmnv9QE7Wz2G86h64Ggg9wv4zankCmwB6bk468SzyFMd1pbry14VgZ9K9MnkgWezdEWKkShyfvomCkTejVR4c",
  "key6": "4NUKqPjqgwHARJZFC9heZNY6W9pWXG6WJitF93WaKEfJk7Jnc6xL2ACbUQM8HvhGtuWjTnoRxCJDfH6R9v9kk8aK",
  "key7": "Q6yLQBUgRUJBtztVKKpNHGHqq3LTMFMSuS91HVVkpLM98RLQhQywTozwydup1zHmMdgdoeNbmmtn29TXXtgAW94",
  "key8": "eh1HcJn2HF5NZAjWoN6cyL4sMUEeSj9tB3BgBJ7LuBcKysXVocbEQZ2yLZ94gkvX6dPA3FGDpiLQcnPF7SidBEA",
  "key9": "5n73Qore7QzVESzbokX4VSFJwdNGVwGHUqLB8ESt9e3vVjvCmitJ5e9BVqevvgHejifKPF1dyiRJA9JL7eBeJaEN",
  "key10": "ynDVEyJLzSkWx8EVxgQ2LWREfUDAYz4vaJ7sHXbsKFJiKwUutB5hwihBAKTNKqKgb4uD5oYcfSnb8xF96qvty84",
  "key11": "TDjXNBZB88K6bdxsm419TSmNnMttzJHYNRsdoeogQrygR3waGUPEDiz38fSQPQjQpbpyYTjX5NRkkJ9vzMCvUad",
  "key12": "Y9W9Wq49BbSrNFX4HVxmc9YfLp1QEdEdgSeQgJhEg5Qhd7Zmm7wUnRGWwrx812D4TSn91gauRyymrv48sXRvHvR",
  "key13": "2eNSKQ4F2XBHWwyfYHrpVdvPWk82wrUKhYpC4C8H9iGb6uNrrpRF4LESfLC7rBaY9e4tDiD96SUK3oDPgwTXSY5Y",
  "key14": "5w2yU3eEZ3HgCmwbvfZjBTtc9W3QxhTaxQywbigaNFFAoPzvXfu4ZxP5oiG3KacaRQqSi2Yre5xFXhd4hMyjWV6p",
  "key15": "ESNNgjoY5uBwZrBU6pB8H816SaiMFUQMD5jwtDViQTtcGMdv5pLAXrwwnpNq2bqf8BZvHUM3ZDL1QGNCqffApp6",
  "key16": "4Z5VA6K6UXURYDw6c7JTRjw9VEjp8nMCye6BJXvNoQZiX7hgMVEhUgr16kijSWC2T6EsHHQRVP771tFtCXbgmhPG",
  "key17": "4s1GrXRQwiHyPDAiChmpWbhKnH1yM4ux3S5Fv4x8L5SAjykgBP9gyEYPSXQ6cP9cm49CH6ePg5EqxrRV3SwsyNfS",
  "key18": "39Q7RNqDCtpuxdaPMmBrM2MC5kunivPY9ov92upqPhh1uyW4Y87tsLnPKjFPZnz6yYXaJz7w9UM2EZobmAAjmpsu",
  "key19": "4K9d9wbSjWrMWzPLexcCpmghtfMQxXXj6F8hBQaDxwGqXqSeWt9A4BqFETNgokrxvjmGaVUtC8Nf5z4J5E83eVqp",
  "key20": "B3ZmiAhD6TmmsigGsZE1QGtYdSojFNCLVBZxXqkf9jdrfmLfn2HDRv17UwhAfwsAQrJEMZzoYfrqEd39eHVhHF2",
  "key21": "67Zuh7bGVV9YCwVTeouDJngh9WXj3hiAvys8ep5Rg3pZNoehd3eL5JYgjn2wjFSEqQ2Sjta4ACvCHA62pbb4yekw",
  "key22": "53dCwJF8rEs8qD5Kanvhsbdu4rMQ95P3u1mNyd8i3ybNdmsVrMhFZHw488y9NDbe8jxm5Eyi79QYapSgFgS5bzdx",
  "key23": "3P58HGHiMH56T2qm8SqY15cWA6Nt5v8TeqjFThYtxAqNnEXewXAGbep8A5JPzHvPBaTi2seaCMkN31uyNe4QXWbi",
  "key24": "2Qv5pFW1xt1qTQfCUJgnTgHFHPMfS3fWyfnuuP6MYNALe1KTCJtXDqrUvQANATsMCXcpiTqPoN1q7AbCCo4PGgfH",
  "key25": "4scN9Nn5HKMns1zYZqoEmHbJePsAiQ8KiGqkXM9kRUSXhJ3L9zWHx9RCq1ZAGKEadu7WEDfT8Uj49ymxUZpbvwn4",
  "key26": "54xkWLWLuj7D7f797spaGjnMS6aF6ENMmmbytkrYk8ytxYTNawDmttwbtejv6GxmawJcJrpvuzLFjk9ZGvVRuh9q",
  "key27": "54bFrk5U1nU3YUJdwoRfuN7eyFhbwBWBhRhLppRwhEY3WTgXYJALJTTfqptTfy6DwR6n4wdDZJhyTBFZk8yxtBda",
  "key28": "CaSdiABHmb3svij2UCSBEhbY15WjtH796B9Ltt1SQpADNo6zrECsHCn5o6wq2WvMybvYr7JZrwa2D4YE1dzudJK",
  "key29": "2GwGJjBq8KMWgBDttAHiwf1LyGKpDkmEeQBgmbjgtTzbjShUMJgRPmau9TodbnJieB6e5AWmwCce7xeDe4RAHhyL",
  "key30": "46r4PmUybdVxia3Wy2vP3Vkzoxj6Q2agnnxWwrY5QwFnSvyvEGXREpKQe1yEp1W1EJJph5n9v6vxAe5e4GFKZmec",
  "key31": "4UCuyy6cgUBnhx6SLsM7VpoarwoaEQwuvaoiT8evy8F41A2UhtE3CV5d1Pr2Qqeu3DfGjURgnddHQixkZAst8xFP",
  "key32": "2MsDy6s4U8GmnboRAtUWVXf4taKV9rEPNTQbdde7r8Y5WMCXqYSgkDLjtscn4aTMpPdidCeRarRB8Zvzh3Rvncza",
  "key33": "3ihL4qt1fjpxVASAPyquJRowPoK1ehojaJyLfEM7LsifmP3pWs6TCbmWWxFGbpJJwWWE6a6e8V4Gc6hiRp5CjxTp",
  "key34": "665mx12G7Lv3wUXaWJfMZRNJgxdaj1jsCVVQFWZdyvVsP9jL81C2Yh6hkwEznP1jyHG2V5yHPcPaetng2YeCYfPC",
  "key35": "4tGoXnEEhxhcYgzctsDBuMSeRxMV6kfMMYEQRBUoWt5zyn2Fg4fdPNxJpq2tjJR6Hi3HbYi3sYLna6xMN7JoGoxJ"
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
