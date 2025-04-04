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
    "5nZ6vjrkgwjs4eUQB2n4WsRmhBfXkPRjym4KmbvAHFh6csYBgnp5oH3cfGo5Fi58GFMejmCmnxFUXTBPvvu8WXA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERJkzKzZsKfmHtntzcoNsa8xbuPQuPtjLnWnXwiyYL8q9yUEfQzAwkZrD3mmrda5qM6h7sRu4r9NL3TAaerkRJB",
  "key1": "3p2q2gbp1fAh5Ap9xUeX8GcohcG8Vb7m54TopST28r7VBzpvuBGX1UG7FMKu1AWHpNDs2oWuT8ikGqBi9PcXTqru",
  "key2": "3L2ZXnn1y5od8dH7qLW5u4krG8y35wACCuu4Mrm9FwWjs9EpCSz8djjNZUa7zZu7Edj8YMKKx5mNUkmxDifSy5Ei",
  "key3": "45yisjEsrQhcDEowigYwjbeLLSNsP2VWaJwFbKM5HR43uL7xeuxFWHjxLKwzvsTZMdQTfjv4iK1DHrSPm5RKktXW",
  "key4": "65xVDKqe9E3TvDrDAP6f392m91UyJ1EnHvaGdXpYdYoEkpykMN5BKbT4iHv8Rk1emrWs6h2FTpk6BfE2Gq2qLTgj",
  "key5": "ep8nxdBdrNtSxFtBfw3eWKrqEJmyqJfjYZJQBKuvkYDoFfTsNvnF9GGPDX5EEzBvRoFiruV1giE58psomVCe9fJ",
  "key6": "26pVM2hxTHGbb8Mh2ConK7QGgVEE7vDDynLHtB6RCZrLypAauhp7qdXpCgUpdWahMGido75EkisJQhsWLekxMv7z",
  "key7": "3ZLeMAFT6imjfmdtJ6355mnAbXbLk6nGMw2SoNHSpVd3LQTpBqFeZFN3KhH7m6DtEp5mQfzCCPatqHMLDzH83bEN",
  "key8": "2mzKQWMTo5iBcPeMq5weAezZUiMkUuWpSo2f3d5n4Zb8EvN3HgQTWmehqux6p31rCJVBEAxo6gz19LX42RxqzXEc",
  "key9": "3R7dUK2mF78U9qiQYMob4FsCo24z4Z8mtSry7dvvzLEud4iqZVj1b1rR3cLSFja72wcxcivckxoNk441ApW4avrh",
  "key10": "2NDBxUtz2Vy3iSXR9NGJqxC3iKRnowF4vnvNB32FDtWzNwXU2CM73Tcmon5Jybcawaj3UbmMLeCX35it2qpdN6jR",
  "key11": "34ARwPKJLs7CzH9XtDRQqT9gpXU3LQCndGuXHTqUg77csHg5QFeKYXbJakARZui5tTDr7p46fZ3P3GT2sbJPQFdd",
  "key12": "5CV629istu8osTdkuewY76voaqD4pZnPoRwgfZphWrL3PGCLDnDr4QzZsAuJvmbgWSfEzLpCKNvAUM5M8rBGz3wM",
  "key13": "4spD8ncjAnAB6CrZW118StenYsYjP7CUbYKyd9YcWunTHrzkujZhhXWxf6TBy1gZhmuaT6JsZys2AS8mjHFgycRT",
  "key14": "3QhJUjpS7phKD9e3nfz5srTZvibYGRY7UYfXw5SamdxrRV6ki62rRJe89onjLgxABjgTJbVMKR3bhw7GREJtwqC1",
  "key15": "3MYQdXo3LGeYsxJ7onr477f6Yb5QZ9VYXMKgmLNk1DWNMUp3WxgVLfUcFAz5RG5AF5kmDX1x69sFsSQZeZHQAVX4",
  "key16": "21FHzK9ccUWhNK7Engp2fZ9sQPqt3V7KdvAoW7AtE7iUhKQyFfy1xxRxcZYQQGsYohKGZmbEgCXBhoNCExvLnPyt",
  "key17": "RnAfY93qVQHBAz1jcc1qvrT2kjrTv2RwudKCHCQ54eHtqS9qiEf8h9JfGoiiczW1M9vzWzikmQNBtE6g1tG1Zz7",
  "key18": "5tQAhbxnq9kBNaPGogWPqs1DGdhKxzAoah93y8YiwkWe3WBYu6McSYGfbdRrAT9fnWURbMUfCYen65xtcuHNNoJB",
  "key19": "BpShHuKRo5oGwUnVdqztGk1Rh6DGYsKsoMLR3Fuh2e8o7k3nMYttFZ5my5ywey2uUP3W9yEoDZVDfD5yhPggaw6",
  "key20": "2ypcEah5xqu3WnCdQX2LQLwYLkSPBL1VJYdMNWmRj1t2mwcahKYCBhagvdyqMTUHxt3wmmm6rEZDXhjvMD5ULoE2",
  "key21": "kGNSRGFo9JCsaUn4QbB42vjqMeaqd1By9Q5dQXqxzh12ZeRSdt9rFw5QAk6wCubizsJzFYhkXQsDEkj9GcCcBNW",
  "key22": "HaP6GTVAsDLFhtMDjF3LFnhiNzdgwJG9ZXK4V4zkWMhcFga84Mv4aFaDuMM1bMfEnG9A242co485rJfyt7EkuYr",
  "key23": "63MUpvDUDv23vV6gm7T3wW5oZJvthm2ZmR9cw2re6MAET1SBPLVvtkkRSSoFwoQg7K6YWJECJL6Egn3hULv8EEpK",
  "key24": "5UKtXD3D288Wet4Jru1CdtmC3PRqF7ng6zenbGcyaYyLPX4fC8aZTuM7EL5rn1gv6D9g9ZaQWB2VP69XsZMybuTP",
  "key25": "518jGZoWY124BK4qahoa6Do7nA5VZsVsoGBbfFKrApgM2VSJB91gWVTZkRFZKiLPkDiWt7yWqRBBbX8sX5TGkKAz",
  "key26": "34Z4gRQ9iYE3uez3haoJ1x36xecwYZcQncFm1Ca1UnzUbUBhWYDa2XXfjBWBz2eXknSPUYtUQ1bVFqyawgxy3X2o"
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
