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
    "sbXhajso94Xjy29TZH9darSeFCCAqFyc1Zq5fqRZEntPe9gzDw9mzKJf3TnAuhef26qK3Qjvy6jHgEixnj4B69z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61zGs6AV6qNZHp8DJrBcKUXMYhZ5pZD8wdXWe5kmiRg6qoyueXLVWEWFBWVfQe31zT1tw7uHMEdjqqKV3i4BTrVs",
  "key1": "238Yxn9X4PYrvkDDLbGzaUMQ2Gz2kaaEEnfPS6bP4gP6ZZS6QVdfNdkCBcPvwbKG2ac49qAEP4bAtNLFhpsnVpJ8",
  "key2": "4RL1tVNRYfWjh1Bo4LpYkpNdLyviQtr1NgGqcHfEiR3qGAkvAWJPKRveuuWLZk4YXBoZ2E7gBncT5TRgwvTtctzg",
  "key3": "2uGs2TRT1m3girnyDVLjPt1Jhr8dipynSjDAZMdEiXb7uSGXgeFJUQ8bKUw2ciFucxbvrBxEogkp1UV9wnvKsULS",
  "key4": "4tTAF4uY2jR5fPUjXn7ARQfcVZh1eMLihH35yFng7AY4DMFCCj9zeaCmHPkv4DBAyN8b121rYhKopkhCj5kn4ABy",
  "key5": "k4Yev5kaY7WjjKvvd4pz12ot2ox8AHjYjSyMg5wMYmDQPimNWWNmpcfr8yQSgDdL7VtWx4jygdERPGnayZ4ZKz7",
  "key6": "4brFpMvjiXawtWgnU9MiBnLBNQSZxo8dFnBg996iKsEUbAsUZGxQ7PN45km3JxTtmZ8eXk1MJZzZ6F68Jsant3u1",
  "key7": "5VseoDgNJmUwgHNTtGpX8Dj1VBrTzbCp2fchbmgqzKrWTc5UnfCBURi7JDuYxeUhN5FDUh5MCkwWDhd5ZQnDjoUc",
  "key8": "F4EnZQ21t247jayLWZhc3JjJuduFBa2a3jWMxR1PgYZZ25Mnuzqdy7SZ2cdQNJ73MeuDfdLsgwNGQWegQa8kHVc",
  "key9": "4WXBzXVLP4YsrAwuLXFsAAPiTVRTWDrUhVMb8W8jHeVGk4CtcHTSJeAnFFKfdsi1WkhQoJaDwmGBWrRZStzmaKmw",
  "key10": "5xK1gWEw8GGpFGd4LKimB8wNJijxhXcYg3ezBPWfvpZcHcvYTLkZWpkUxUGN1f68AhxkDTtbuqUsFHhoFCi5GzhF",
  "key11": "27u23dZGs9mutBAPWm9VAQo52RafWQDJgsLfdJq8Mw42S4eBUBkUXJdP4aKr2mvCFmtq4ksiigz4GDu5MfSRaoEu",
  "key12": "3mZehNA5Lb9r7aS1ASACAkXLNM6Xk9zuQvanV12594wPPsDSkSnBBCN9TgmrBCJp6XXzG7guwaTrAG4bce2kdvpz",
  "key13": "5u6X6bkLPuecXJ3sqL9J8sURuGv9GSJ7xbjduYRwzevQzMrPzgtLtWpo5MFs4KGW29bCNNvoh7q3XN51q9xuXayH",
  "key14": "RXLoyyHwuxzopmThcFQfEj5jCBmNxp8NFtSfjLxUQVPnhgNXnh3KS6T2JWNHwvj6ZWPWVNVzJFqrAEYfaZYL8AQ",
  "key15": "5oU4Zk2jK3ej86hPxLAD6jEY37iH1h3iTueHoKokJ5vGfGbPdGucdMWqLh6ybbc3ecRZtsLr5v5GZHhUbh1W2T44",
  "key16": "5rrHpZqL6vUBNyBmogRVVCBD3sJK66fMdwj7JjL2z9sFLkEbV2viXSWxbrX8HRU6vkAFxjCS6Nbwm6Wu5Vc7yFAf",
  "key17": "5xiMCCBj4B9KrX9GPo7gUbbDdJEBNaTX2QxxUTwcYcXsKvy1eKWuZDkxdRwxExSdFHmm3jGoqwUchMo1bANVo7Te",
  "key18": "35VCGwLz6K6RPEDzicWxnjspRz4a2x8hLE8WsH3q88s5JP8QVkZVRqiHmtdWMmyjgXaHp8A9w1GEsSMcTRjeEuZs",
  "key19": "Lp2JBhLb4csX65DaUMt37q1DoKssGEgrabkMPo8BkxjFtCigkK95iDNgZvynzbRZs2pqgVXM8JFkY2hwSjw6anL",
  "key20": "5WPFj85eq8HGkKsT9oruvYTubzBYrJV7UKr7CJP3fVd6ThNMj6BEQ5CE76QxqCnewZzQ2HnEVfYQaLQPrUP4HDqw",
  "key21": "3XxqahVFhrgDS2Lswz6tst3XjpUouhSefMtQ2Rwu5tHuwjw1a4Fuso9rXxhLfezCG2J4jMd96RUd1PbvjxCLL9Av",
  "key22": "2jCb6Hc9rkt9j5rsCm2j8zMgfKUNc3WmWD7HVMK4Cer5a8FNDHb3rGEmLwjiwHgsU1JkwhXL3w5tAKieRTDra6Pa",
  "key23": "383oE6QZXtnVdwNC1F3sVhErwcFJxe1g7QiSyfJaeXkmm5F2fUjXG94Nyr8D5ujaK4TkFKM2qCWyjwmTk9By5Pyo",
  "key24": "41pWythpCRUqNeizoPBnCKfwJiiNGEqbSqyW4BrhhqJEShSij21kJNiMom8N5jgGjjgKbztxQk1T7w5RGtbLEVRH",
  "key25": "BrcD7asMGgkvbVZbHJaCunesA3wi4h6mEjJKnBCEgp76i56nmL4CYioGxLhsEbBU6roxaNyKfVgPopTvDc97NuP",
  "key26": "5VxfPDDNcN99wqPm87qphpfNXT2SffZxaBPcAnY7RvFTAfGu2hr9RKDcNhjoRekixCzMyDWjytVUyNWdBRyELENk",
  "key27": "3eobUdnsUA6RWNMR8znqzcU9YqoWAnMaX4xQmhXTp324EDGPGp3sju43NMciT6dkkGNpYVs9nYkufgqUSZcF8mY4",
  "key28": "cELg1QNqVxYYPGxHBrsmeZEtz78FUjvAHmfSvK9RZVPBavPo771zQu6T6tDMK5kaX97TquiBwQmBXjJxjKz56Ci",
  "key29": "4F6mqJkxtrou9p82AwpXKBgN5Qg8ii4JeKpVfBdJzoSWQdTo4YUckpE3fMY6P8DZvGGabVKKz6qs2KqEj1oFrY5h"
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
