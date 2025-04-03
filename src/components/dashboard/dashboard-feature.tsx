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
    "4m6GqWCEf2a5KCH5GVMs5Fpt1iBcWxkXKbqZhbDb1x3sNTssohjWi6jSxPCTCUftKyd7RUJdyYARgkRPJzFj17gG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHMbaZGaq66U9nuvFBPJiue3SR5MUFAU7EhtwUwdLApDP8fHr2jYrKrvCoKts68QuXoBSBRkBVvF3J7oAEud7T7",
  "key1": "4CJLj5jHrBqkoGwXZwCJ5v216PGxv6Utn9z1XRrFcpwjFSq5CyRA4o27CU2S2bCq2UvLaPJBo7L8vixDkpK6z253",
  "key2": "3aNA42bjhauNqe75zzT2C2psDFCnaLnFweAMDU4GdTDuMJmyK463UbiKfES46PCxRzeWX9e2wCZZh3kspgfyGiAu",
  "key3": "23KgXyVcqPtPMGArAohC9vM7XVgRGiCdcRFyc7qRJa8CU7Nev7cAanXXUShCqfNLpjmAN19m3Wa4fxXkCL7JqenN",
  "key4": "3JdtNnSZMAfgsgjsHxY1eKQ1hA3W9NJo88UT3t3Y3K6yTy9pSLpJVgpL2rrxbp1AWSJQ44MvtjZ9yUWJgs1EAQyY",
  "key5": "4cpdrMZSjGn5zoGC7mK7dWXmrJAMw6bigscCgK8DB9qLdo4QiH2gpeKCumRg7bCvcXwErtjV6TwpgZrViYCx9LAf",
  "key6": "2hNjruPu1dkJkQwjCBk48rtn9F1JhRTrDDxEWFyUsMf26Mt7YZSvnST9zBKL2C5YxTjV9Xpa8KNPqoa4Panpf59T",
  "key7": "26pJAsbqAjxbeCGuSTWbMtAgcfWymJJYr9Qjqo5HYaMYZddVdw8L3As1rXrUy6aFHH8skmYKvpP7AmntxE2DnJKq",
  "key8": "5bAckinfChMcVYWNBiDhK6Ex5vFufstv2JwQm1Lriny1ucnwKsd5WgMgBmxtQGUj5iAwH8595v2cF6urC3WRk1sY",
  "key9": "4S2XuCfApSNzy7rHKrvMQZa8jaCKH2snfhuiQtMLeCQzs5kZWoMNYwQUf4ve7VVsDe5hWWhcbzFkFQAt6uNEd6wS",
  "key10": "5beqsu98jhBdnRCwHbmiqBsiVnmhboM1yyfnjNhk9DgBVxfR1aofbiGjKME7hM3rAEFuKBusNYvhbRQRKJscvGcx",
  "key11": "qWMfAP6nsmPW8hnSQCivf6xHjR8Rzyn5mur9wuy8UsJDGC8StgLoV3xr6hUaarhiAwFAqhQHLaSLDFHwz9pQF5F",
  "key12": "4oa67YoCZ3Qz3smnL3rKcxNYNDCDK6zvbSAxbEq3voFoqjoPdFsG3BKrGff9zVC6Bc8FH6qSUMWznHcMpPeVeimW",
  "key13": "5c62gdojsoz26jDGxYQJt6cGZLyZjqMBJS8AZPatHJDjWr5sZ1U9u3ijfLdwQF5S3utkHoVZhZWM3ZqSbYf5Ridi",
  "key14": "2zQTwgriXoMCBmxuBmbq41htzie8eALCzETYMkjC2xnmsVAoXroe8DoijqH5fQDjLGjmJQF7ens3RMh6cKMXLgXE",
  "key15": "KQvktJ739vsP6ayJtbN3yubtVShhbNoRrg9VEx4yTdbrhrkitC8LMezmXhZG6u9PPrejyrq1nbB99yD596dRE5U",
  "key16": "5PHYPuPdQfvKun3rbmhe44kVrQ4Go1wfDTpvqfJ7z5YCDVfEy7WgJu7C7vqJ1B2z1FYgUsoPf7dAdgWHbLSGH1yo",
  "key17": "5Hc9C3pk1wAAuBJW2RikZf6fGrbm2Xdbu1uqG18iKbZZZ6SonkfMp4H991pG8n5Siro5an1y63V6NqyBmVaubuzQ",
  "key18": "3bXP2wFtujqvHhhwz8ygo4EQvBCBNvua7BJuLhgcjjnpMDaCSJzb3A4DA6zBZsrSKzwXiXWdxQVVNm2kSnFmApEi",
  "key19": "26YDtgMWL8b19c5axJDxLL8REs3CR4Bmux4b5ByHdRkfTQaZAoVRUrcX453cueCwUGMW52cmayVjnJANh94wf1cD",
  "key20": "2Bv6U7HbbAj2Q4Czk1nvYzohMHfF5TFPPMXwwdvVCHvrdA1WdtfiGatN8YPRDnfqn5YUQDbLkAJq74Y1MefKUaXA",
  "key21": "453NC8DSFasr2q3bCPXWcSjfZX4g4xw3QgGUeJvHDj6D9M7pNwzsiFVMsHHor22GUdaFi5X7oBtaa6PdtoMSrQpL",
  "key22": "5ej5twa4Kus1TkQ5SkMGaVy2Z5KKaJT17N1iB1gs8DSk489wgYGnY36aKP8mor6yj6gNcoV3Xrrz92FNUuRGi7F6",
  "key23": "DQW5jyX6AuuiQXih5WhgvVRpdC23L66LQYMxKfuBUoxkCXKP9X8kRszx8mtt8Fhu6aucm5bitnoGKYQX8SkccV4",
  "key24": "5RmCCSEw1SbFY4Y8DQZaa2Mw8GsBZVRGTehMUpq5wjgSJ3ApNgH8x7MpiwCnP1SdVcxrqx91m1WmJMb45jAV5z61",
  "key25": "biTY8mwEvmmuEsBM2MuWq49QrbsW5Fe1NcNtJsSH1voHAwDyfcAkzstRELXfnVLVtxunjv8BG2fLygd6b3dVX67",
  "key26": "3zZKy1e8VF393udooTQ3LQerigqCMXNF7ZBtBBgwo5cbmFPZD5ioBUUdsNeN6phWA2WdGCoZZZJcDc4ucMxi3kH3",
  "key27": "5g9hpW1aDJ1wrnuXGGgaFquogAgVySRLsA1jdzmuLgtxUdXk7drysuksCjJAhdEAQSYqGeZHfNwUTFFqFz7PTLHd",
  "key28": "5iVxU6h1E5WDfL3kZppYrBZ24j7nT59kDpc7oagSJEKrrjpdy71HAPLEDgBkgMwFkrjtDps9B1nzCNFewSinn69w",
  "key29": "5o2H9HxU2M8CT97smBza1trx3oJ6BqJQqYLM3cnPrGcbmSuJ7Fxpst9GTkZ3BaR5yikyQhqHShZE2XNuPyuVek8N"
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
