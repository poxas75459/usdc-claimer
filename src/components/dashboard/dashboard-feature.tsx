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
    "5ejrrLZeVjRMQAU425jeoKbxaZDPa2snkM79Q2XWY4RCszGZDJQcrpz3udPkFwyM88aZHo7d7nCtKWm4j4sVweAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arguyVj5xAsftuh9r2Uoa1BjWsj4v56KEz1TrFruTdcMv9vo6aJhDdUPa6qpDph2W3Mve6z3Vutpykc4T7NLA9r",
  "key1": "5HTjcYqMKwZpHujdeyurHRvhcU6S9HCDqgfzugeAF7L23fUW1R8JoDN5Z56Gja7UGdSmf8GmRrM4cgVMxusirVcw",
  "key2": "3j9UK61B4vgRrDRS8g3arNP2SyWxURtD4yqiVwJuNkSBRvZc2WqNPwfWiNEBFJaR1Mhf9snpPLRxsrZjLgMhNM8M",
  "key3": "TJcjVMkkHYGZML3UC1DPcfu72Eki2Bd8y9nd31zHQHZ2UUCe9xELgJKxXW7Wkg7cyKfiAgHBvpTu3KXHhi9KCvu",
  "key4": "3RZkwbhAXJuVBim3Byffv9oJtUakGmfN6BEUi1Rs6tMNRov837CnMFm1jaPdZz9oZYFfKMBRiGXZcHQaVyiQo1Tn",
  "key5": "244JMnUsPJ3iF8xttxMhmD22MPnRuEJ11nHzeeQtYV3UqrpNMyMnpgHAbifPMTuyepErFhb7C87jv5vjb7xJRqf4",
  "key6": "3Py71DiCcBNEHSDC9orum6rwEYwgEMeXxr6m8mLupfYtZfgJ4ebW1G45y1m3xNCvHDs3Za2RNp3ERPCmUFQVfR3f",
  "key7": "3xUuizgaWAhovuQb6xgmrsBGHV62Jm7kCoeKDox9vcrBqzQGHxeQbFkU36BE2R6AGfnRGHgG1kA9Zs7MnmZwxkiJ",
  "key8": "3XiivRDVANUPqMb1oDz9pGs7aoNmgTWwsqzawT1WZGVEVG9yoBVNAyyu6MUVj77NR8RA2moXtKo4J9ap7FsgnR6P",
  "key9": "67cjwcdNAppUu53hvRpY3WtNFjaW9rxGaRyTFBvAo9EM5KuhFXeHCdqP5pWSN2DKHbHvwnnGz5q6FhSZELafWQmK",
  "key10": "5xZ7GFQQkRBzqzBj42ejMTPuqPv1HJKqMCmuVrZzqMYuj17vsTJhXfUTcBsmyvopQWz5DkyX6TSHvAUR7sycm2AS",
  "key11": "65WhJBLP1jLPg3qUjpEvFt3tw1Db4iW33mLeWkffSgnuegWALEXEDwEEiVWaWZLrkothqCejmbq1W9c7ehnEKsDw",
  "key12": "2Rfj6xuGRLyDqjKziujS3KfUt8q547q3ub9RjL49MhPVXGyLQZ6CRcUeJEYy5ZwxswUP4cfCWf3hspwNgpTwsvGv",
  "key13": "3VX8AtbnUUixeevLCQX2thN9Zj6mLXHdWsDNkbmptT9wHvE1cDAEsv1bWcQNmJ8TFVH618TjZMbEV1WYyKXhx8x8",
  "key14": "3tqHCJoKEiadkqeN6K9hHrNoiPJQnZks3STys5aGCqR7uWQpkT8C8GdDD4ZLXzP33D6eRseXn6BYM9M11k3aT8zH",
  "key15": "znbevXgibtvGVSuEQdhwMnCHuas2XSAyCZRcWjAbgYLfRZ4jMatGxy1rxqGStCh3Tq8L23VUrCoNwexXEpkmTmW",
  "key16": "iH2Hp87U5AYL8WncTjyEwaoz9ASAp9h3FxQAtCqbrPuuyHFiNaGbo3N8KEAnutHqUQGNUDa4zpb8nyfRcB5Uu4b",
  "key17": "KKgd5r7Syv3w56zSAjF1KqrPSSDrEFvD1PKCghXUSXaQh16vbR5PnVBm66CE89k5imU1aShGQRZpLkpag2JXzXo",
  "key18": "4F7ARgjswyWEWy5tjLya1VJCymKRHTHVdH3nJsDRvM9SsuYW5GVdbPsURDXbCBxFaqjSxRPUjLLPEGAFYyAnhKcX",
  "key19": "5e18w18bCvktfaNiypymAvX7tcTJWUfjUiHHCq4T7NWQ7KPzGwt9MTUHmc8oFwDMUUCvncZs2bDT8eRvZGzVK8w2",
  "key20": "3qWyuhsNPep6ASZmrx7EHtX9D7eXe8vc9qeQQYpy7mjWDQxrb5r3fB5KYxeCcPh7REVbLQcVGqxANiWjg5adEJjk",
  "key21": "2H5nj9xgVd7avWmXcdcbMdmcqrGNwt6EfL2sSAUYW3rzPCTkjJBuQBJjjgoRZXcbHA3XmPDKoqVEzd9nX5jRqf4U",
  "key22": "4d63tTFp8UtkQ1cjLoLHgVKFELVHy9CMXoedZ7aE2WSzpTJGtvwe6kLFJm73zpBLSB3JrEHuqyTUP5PTpda2NTyp",
  "key23": "3zLs3VPzWRVYSsff9fmPgpKeKu7GhmbjH1H8adqYdNqF6dYtRe5YMN5h5gviedPDDp4AnEbJz1vjZ6fwbtEPWPhW",
  "key24": "4yL4wufawtv6uSstW33ovfP3aouZj3wmcgPRMFCoCNUj2ARtebQM9MHC2SMzN9mv5vrbw8Sy67NNikp1SXvHdX1o",
  "key25": "ThAZi2YLsk99enENU3fnWV47rViTcmXPyTHhz4cmF49ejEVLGaNzjE7BGFb2yaGB5mBxLEgG9U3Wg5hLH7hV8Tv",
  "key26": "5izAqg8moBsMcmhBdPgHQnoSSPXqy174PSscDfAEDeJycYJVSUPoB6SNkvFGm94mkwbJqM1gGCNVjzDHn5pnTc15",
  "key27": "zA7RSwmGr45JPxs6YryZAR8ZNjpga6WQAZdwb6zUSdSann9ZDeuHgTvkpBiKjTd6p65uk1pPfj1MUY96HZJU9bg",
  "key28": "RtVuFKQFRxdS4gd1QJvAktpDEMpGZYv26yTR6jhU6bc2S8EC9XGo4B89asLuwsGQRQ39B9pQT15CeVGzfxMviAk",
  "key29": "cqpScAJJsjsmpPs6nECXFB6FNHn1AfwTNCiycmtszT251L8kq5VcLRx6u2PQpK3Q9NfWgQZUynw4UzK8Hq3FUgt",
  "key30": "3tuELCnX5dmW8zGY1VJgBpRG8e7bGzU5KvxF7A3p6RrQTWCnSoi6otHj6ytQNMhozDNK8bMrcNBJ1pGbGjJWcGHt"
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
