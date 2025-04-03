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
    "2V4J2TUroFVd9sq96CY2JKZj3Z1FGTFspX6BjHVZZW7UWxrKyxUmkhKVXZNfVTfBu6gVv6xoBsNWj8bwpr8gwj4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKUjmF4pgX3gPpb1DVoVMPJSMuisBS4guHEcFDFLRsJ8CUjf7xxcykntkqf1dwCLz9PYY5WgsHRPbsEUUSNU75i",
  "key1": "3fQu4Lx16Zzoi9c6SpU3CqnYcibdvtRTALNxdbarUdQzmGvLJUm6DUD8FZREmDV7P7TYQkKLBmcFNULPVdCioivg",
  "key2": "2oc5G7zsXrQZRSgCQwKRz1M9opAbL88fhu1dKtpf969BpBBRevkqBtWc1n8tGYGLWbnPJ1cyPFvj8gh1A4FdSXup",
  "key3": "i1WFg9nuoESftxcR3DehyGZzzVHsadGk9eX1TH7rGSggByR2Eigct412jqY6LvS6mLkERZHa9EQrqbBTtcVxXAD",
  "key4": "Dpe4rSP6HdRxxWv4KXBbKwfRDoJshbyazaSk1jaVQXSYDm4A136SxRyTW9vxP2aHDUGoSzK8THyJ2DkA81CwruJ",
  "key5": "2zERdy2941yBp5LFTqWUj6epmWCFH9JwibWCHptEjAiDjUscefycbqWnE1YqQ9eAY2WsmNyWiv7MYRoGwtGqH6yR",
  "key6": "2mQUhbgiUX3byXvgJsheHDU7iZ4PBzGsYS5zxwwUvGyAVoHDunCD65bS7qysbGLBZoaajK9ox1qx7ot7de2Fjtq3",
  "key7": "2uLwttwCrDsKwDPhFPYiVcPspLMLSk4sbu8xinYENEqa25iY1nts4bMj5uKBD4B3sChUgqE1gZ82YqmpQntmD4D7",
  "key8": "337fqNJBoACSbNd6driPap9ksDwZ13PhMZUbYekBsfviHcV9jjRGdRtV34Gx4LWodkHCib8Z63eVkprH7wwKFvEC",
  "key9": "Cc52wuCC3LYHU2XG3i87hKb8CME6bPXJEDRMVFo2kSQPpZ3kwtpdJHfgdnp4xmLxnNJeqeUugjjy9DoxZKAb49e",
  "key10": "4fZ2yrVwsNVzskZXAfWPXCU9WCPA1Ej78CBg86j32TorATNzX9Hbu1uMB5XetMTkZpEQnCnrB6CYKkLxhjow7vyj",
  "key11": "2fDs86HHokufYjvDUPVTi2JZ5S92BuHYbtEmdHZybwjBuDA453b461oBpptNGskuqxHS3Xvh5avHM197wsxoEcTb",
  "key12": "3D1ZbqRHkQzKhxZRyhKnF4wxdZLypszEr7duagKpELH7e3haPK7ngi7onmVWaGR3WYgNG44aFTeSvvecEFX5LWWf",
  "key13": "5osKtXmHaC5nGhgzSGfgb4u3qJGCaxdEytK24MeyAw1qERsFXFJt8ggQ1HADhJGXMDMUDrwhMgYwkdQEiPLwnEBb",
  "key14": "3UhjgLc6AWjDm1z2pwqDTitwADLsLSTo68x1tRbUsw2CfbvPeJDSD9Lgk1W9ci5naR7ZbYz8pfqs5TEogJmYiXH9",
  "key15": "4uae7Q2GinAp8PZ2BWkurdwR5MDJGpbgR8RrccUJdURDktx8RhDqcMxfJ3sVXzZywAmrrkano6rgvfTcWnhs3xs1",
  "key16": "3xt1KwNASshocK3AN87fgLmpxwyAtrf7nLKkrNAPPJbzXQry6uu6sSFPgNfvZq6DLByR16AefBKaAUBCYNM2mmFJ",
  "key17": "B4dXkRRxqLKkgUVV98V1gnZhYSnNeV7knrBb2t6c1XejEq5CCNvTQWsgow4y3bGc3hkmoJPTMgbHnSADAeBUuxu",
  "key18": "4Qp6bFomapuNSM3CkryzUmcE3C35Z57zoFNZTiF7zvkwjiH5j7Up9yqtVZJsGW36Yi27uEP5dMLNrnmCYWH2gryZ",
  "key19": "4pvUwz6ZkVxm3amRuN5MkBst9ey6n9juFf1QtoimSuMmWu9proy4s7jzFXFoVjAMcm6X3wR4VS2TAXm1JhUcrsaR",
  "key20": "5tkRFRfCU6BGuDJ8eVCjtSb6DeWe4ce149K3BgTREdT2dS43C84wjDukH8DWMcmGtV3CxtaTwuNaXQdwnbe6DJeP",
  "key21": "4prqW9E6P3ec7fNN7rAoPExMTMdSiFBdtbEKnGT2B2hWR7hbp21ndjuupbLxWnctNpNxrJoHH8REuLos9jKFuWrD",
  "key22": "4JQHaR5mK1FSeHkARWkwjDWfWKadXVs1hjRfyXE2ZZ3RqAM8jTVKFbARcEVF2ZfgmsgWpvGvkPWneZMqYnqiiSLV",
  "key23": "SiXEdyXwjtMivVSTewWcFFMExEAMFXEuDjAHKEii1xp98Agw4UiPK5jX4RMUvXuHk6S8Mro6VnQUcGV7R2WS3xg",
  "key24": "4ZJjM79v7AT5C8jGeEnw4hmxrPFULuetCvEvLRWWTfy3NfuEStxi4vj7YEZPcdLoTK2Sjc2p424K9RKaP4SqwT7E",
  "key25": "5nJzBRwFK9Am85QmXSKqRvr1ti3Zy9oTfo5c2bnCSetWvwMKNb3cj6GjP41avM8wSdb9baGpnMvcLLhYQUWvQkDE",
  "key26": "cUaCzp2a21sQcRuhaeNFgMhCkQ2kwgYiUkp2WZzsozvGWat4tx8GwfBRxrP3J2fv2sri7kpB1rN9F8ziWBMq5Sg"
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
