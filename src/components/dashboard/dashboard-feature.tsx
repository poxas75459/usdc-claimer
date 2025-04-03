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
    "MXDnzAsJSWQamRzc2zmTmerREqXxWJJHz3RT2Mk1b6DGLfjxJHWCSPGVZfsiY9FFfpYKGFGiSnZEPxaKqY5grQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H1Dxxnsk4KRiBQgSfEAf5q5yoLpUgxY4JdehKB8aUmJk1gHmiTVaQqjJhZjCanMdX3xmYjKee2K1rWL7tQbfZDt",
  "key1": "3Z2TvmHjBFMtfQwxuBrxANjopxu8PfKMHqKfh5rzVYf2ZisxQqodwkhv9iUhwJETjfMiK1kMz3o76djXdknBz7mT",
  "key2": "oxEYpeCm4QmYjokG6thPqXepgh6ndyNkUs45aDSxfgWNx4TyieyuH74cvN5RUQFbu1RJ7CUQrUTgfyaZ95rQX6p",
  "key3": "2NjkSojfBi8fFYsu3fYZRz1eHVNwgp4rcePD359fgW3VU6AhCkcJJ1d4Q3udfjK2xoK8ki87zRyBvTGL3h7suVtj",
  "key4": "4VB3LUPJ2gqGHDvv52xhxd4yhKjTVemTdhLrWgqtJQuwRfijASaXjQmWqSZ44wnFm6q3sc9HwZKNkEQmbFPrLGDK",
  "key5": "5Danuxe9hunu76o9QxmTrFwm3HFuVtVQjNaW7UNZuJu8CMFiyJenbLRQfeBh8Cgxy7fAtQVUs6F3D2e6PaWjKXw9",
  "key6": "VJ8b4EeHgvxepSaUJhjhHa4XsKKvGDUbTsLDDUVCerhLupEvs1VbrjicPvgNehLFekLwfgqJmkE4jRH9ikADrCR",
  "key7": "3kPCDQvuydX8SPis2AQFsxEVzXe8jaDwen2vaPH9K835hL2U9Mz4ckwMPNLs43ru4b9PacZ4S18LyQxJVm5zUd1d",
  "key8": "24utVg3nEB4CkvtvUiRfYJ3s6AjAGejV96mcZHkJ1KQD6RZNTmDthT84xxhURVJZ37YB7MS1pvVBeygWuXaegNfC",
  "key9": "5rYnExNMYE1yeLW11zh4BoyVU6RshvTRT1DAZaw94dea9fGFM7tjB4uSJe5vRrh8Go4jwuGXMcC7sTHioxPnvq9t",
  "key10": "4CNvXtAPpRzCwKwXMUp6C6maCeJ1WHTMzQPTMn5dcgPMF3B5T8WBHDXc84FPYDvDb6gnGdjTZXK8i1NNyTPDuWkP",
  "key11": "2vzJ6DLwo6qWAHDKCaVnEU3LvtPDbPEnh7bwqCf19HcM64nUTeXXBMxcaADRUCyrucEr9gcjLnEhLbiAFjTAjpEC",
  "key12": "2toPPaQBh3i4k8A6axYJ49bHXL8a4eoqETZaUwU6xurF9UbDfWqsW35omRkqHVCidF3ypPFBZLaGchxuBhTUXyfi",
  "key13": "4ZqUzwhwQgcAXAMLyj35uecu9TubTPFDDKsWtDR62VRM59wDKQ5uDCAd1BMJ4NXiyzuHCEgpS1RfJtB5FroPRY1w",
  "key14": "P2mtQpfXrgPkA2jguJbneySY12hzauTDcoEjuF2SBsqA3QwM1B99ZcNjxxM4jh6JPQro5TageTsNQ7UkU6BZxbr",
  "key15": "4fLtbfV3ixHPcy75PqkhRQXsQ9bsPLfBvuEbBgovqXRG1E1dmWqWnC3xGaXbvB7Zg1ZsKaEghhP8UAykZLrSaTRW",
  "key16": "25r6FEnWpFqjZNZq4xBPdv19w7BF6miZo1yGXcn5Cfjoc8somLxA3B3DD3CcA8VmPVuEuHha8Z6AVYTBNzeu2r9D",
  "key17": "3bnPUeDq2NvkucrojsmMo1KCXL9B8rBKQpj3z5DickpTaxTD6SLFEMSzB4uwvZVGtfnupTpDt96iQdn33oPiQcuk",
  "key18": "4Edf7NAZ6PrzLj8nU2TjQbv8rg9XKmmccTYPJfgiGfo3f3pjd6ttVYzvdcu8fFWHXq4RSSVR7T4bcs62ckZ9PMFH",
  "key19": "4bqhauAomtzLDMr3huxGco3x63R5UVGgfcQ9RSAnZfipmumSNxu2ZDm6jyXGxaBV1B6Y7WbmXwm3Tu1fZTKqS9mt",
  "key20": "5aWuHkSPpoMyQ5yiRp64YuojbTqAdN32ZnbLbur3ekYfynah3f5kj71g3FZroKi9fArXZiPiE97Br57EvVu4TvQ",
  "key21": "5gWKqXrykNV9RkqQhs178pA4jjjRb2LhDY7Z2aFpvzqJEeBFLxgteACecXUohf43G29VMAcS5GbsX1DSMk7AC9U6",
  "key22": "65F42aX6g7CTUtLmiqpC5bi6pEJwATPLzfPtPsGVWrfwkCeSCMkVrRVeByCevaqzPxxnXKZsE3WRoEoPoNfYSRAp",
  "key23": "L9zTniZ51XwqQBreJwgRfj45iFrihn3SUdYwfvrE4rZpLQpNEtfDyHJgf8NLHoC5KvjYYP5VE7jwnpF4pxQEbnm",
  "key24": "5WFRypZTyPD9hNY66XkYE4UgCPR7WDJhLhEBbTVn2iRtVUCxiBL7EXWL2gqySxDmwLmvGeuhLTPZbKiG47sGyAaV",
  "key25": "27oacP6iWVygtDvQv6LeNpPHsLD8PCv5RULXY1eDmixn7jUTaK7Fz6W9xR1v7oXUWoEtS434Sr6rzQokSMWRyyqD",
  "key26": "5cgz5yXJXacz3iCwRHfeLDFsu3uTFHWU4NT1UWdpbt87R3cT54f9U4jr7E1x2k2ikdVoWn3P6JHz6kgnoCcdZ5K2",
  "key27": "N4mFrotSXsnW2wXbAVYJxQgho6XpZFTCobe7ZHtGCxMT7d7wzk13a8wUxUQFoDzUBgrHJnxb6kqXG55goEZDKzR",
  "key28": "45YszXMxNpeP1i5uAvMQiQoqdLnWrCxxwkPiNcHzww9KTRAE8z3MQ9yKkstikLYfzDJNDakgXokBU59jsr9AyTqz",
  "key29": "2SbBBNhEG55gPh8BdMT3iBBoJQWtAkiQ84yXoFk1jTNCBTrRE7mpSQnTbWqSHarBhyoueRpvFFWqvNLMns6eqWuk",
  "key30": "3ATNHNEU3AB7cJTpBoRtx6qhWnZ6QwxUQtBD1VRXeJkcisy63zJw46vsQpfnDnrpPTjBnsx2ZT1DEv6Eahv8YaPa",
  "key31": "5TNZqV2vXuZJ7Fau4ByR3g6kNc5r6hzKZ6hM4XQ61F7V7EfpNWoGLq1VoHNbyHScors7eKwwz3ZkLtgsaT1asmg6",
  "key32": "4VMfH4MVEYhmyrAf3FeFShfEjNaDNw86cRZP3FAo9GUyMEMyp8gPB8cLyJ8962MPjxrQrBVLpth7DUL7MvzGd77c",
  "key33": "58v6yJe2rx8t7kTEPts5YYKoWLTJQxofdxrCZbC3VQ9UEBUpXAtWTDWmUwDu5fH7PTpnE7d1n14fuvoCiED88YiX",
  "key34": "45tKti9r1oeJkovQxWoDgACRmh5M5uyYp2LBxkjDskXk6z2DAKEAktw2AQBytjB8F1xFgqwQrPFfqJDfrDg1PU1s",
  "key35": "2ZKr5qAX81CrhEL4qtyAdGrroKJu7Ts11UjF32QGpVU1utPkZGDeNY7m9RrPkMxm6vBLpr1xXGQzSdf7BmJFrRuA",
  "key36": "qXyAm6m3M3VyfYEBEnYC6Z8HtUs7GtoAgTFBD7dX317yzUuBMcmPgnnoQFJvAw8MFtMuM9VntuMPm6Q4As3NcqJ",
  "key37": "Wbifzog7zQDPTbeeGhXhZ6niKBxEXWy1hiZBZKDjdrKr8PE6i6HTUSe6FE4fn3TfNyoU4S71ePp2NeGKT8oxgbe",
  "key38": "83ZZ85VrUkQxEAVT3wo9ErkP3fwGRty9aEFL7JY7nGYxVyXaJeTiv2daEQPGAfk7NQcSkJSzCHTFfv9HYxv8dE2",
  "key39": "3eoirgDW4G5Z1kMZCdkzYb4FA37yhkTx7GVXJuzQhJMFHy71M5NTzLurgxzenRm4bZQirxbgX6BwZ6qniBox2Q6Y",
  "key40": "4UUHLCxUziodNxjcbwogjUhbeXqCiLQPf6Q6NaehVRh3mU8q7KUUHYoUuVDodQVFY8zpNDSByEJLp2s6a2RqewzZ"
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
