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
    "5rEvVg5n3LBPvhcSdbC1CGowGCoDEE1CRtcwc39eeKRoCxLoUSRTTLsy4tUGkENaPQFRps2hCucSpWo8dCHNPohf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cZzQsW8aKJjeJGznQAQWHrgTENP3EUY3zvbYRq9T2SBHCbNLsb6LJdoqiRH4HFR8mmLnBe9Jd45ER35S7C2Azpd",
  "key1": "3PomjcA2XJgyPm4FDoPnKckCoJb2hoMuiUchpqbPetkP1rYbDqvxRhHebgBSKXYsVx9v3zmuzUq2XmukHc3UqhfQ",
  "key2": "WYogDha3Johxiw5YY3xPEA6Bh7BtUBzu5pE8iBz7ouwuZ4uEGqpVw4f6zrEWcNDjQW7nWMCuZaHbvj4MLzmdWZL",
  "key3": "4erhB8jGThYsUYw2TgkS6baNxQeENCPjrvu6JB8NpqSLuzgXiUyJdBDAEXi31KoN52bg5vuz3Ep58B9RwtFE7kJN",
  "key4": "3FgadQ9rjEhvkBRwpFf89B7mDUMKYknJRUF5PKhg24Apb9YVshfayw8WUuLSKxvpMnmJEa6eihxw18e8ZcC7ddMy",
  "key5": "2k3ViCvqAHJGUvPwQTgfToVDUhHxhFdb2rm3SyKnWaiV3iFTgA1kf93impfsoM6EZXfw5i3QEJZZvorP8J7iQ25q",
  "key6": "2DDkkj4GKHt731Y8ruRTRwAmK7isVHBMM3j316yDpUS2PAGBDQz1KuhTnadGk6CxhU7CibaCTHy6PSDDyRHmgvDf",
  "key7": "4yZZCEgS4Qw34EhaCo1JWkAuzNDbKqNk6Cwjn2Wre7rV4DVpS8gzfrEin7oEXzgzaZHVbvZw55dKJ1PCEeo2msQg",
  "key8": "26mkbkiDHVjLBvJasHaZdTmvVvLsRukZkqY5tiK7vR6fACAqWwoF3Wepcp82QX4NhzNN9tZDZrSZv6MxQyZAZqBo",
  "key9": "536jA5sYaofTUDEeaivnNSKnwN6FiX4pUuKt3EsBu2HkvjZxzAaXE3Hg2wHzhUh1DsjkBYu6SHbyx6FARmJXerDF",
  "key10": "5gHFR9CfUK9K9Jg5zjpLjE3E22caZJGEvS5ZWMhUZTQ8JwyG9t3yrad1xC7tq7Bovtu1XSkKUExmNWbm9DGJLH3X",
  "key11": "2tucNQQDK9oepy9yNtPSRRQd88RL9iynAAKNiZ6NFPRLvLariBmsUstnyS625ZoR3peg7SH4D3jiJtdqbG9WJGYj",
  "key12": "63pREbjmsgrAuJQYnxtXSmD2KiCMqtzJCXszJudysHiLfgPbfGPAvHew553FFqbK6Zesg2b4iAx7ygps8RXBaFDj",
  "key13": "qN7HhdVkDvpKyzLi2UvYR437FqpdHHKJxyUefNEwQCQvQJEvfNLwhr9RxsZfHZRCgxJMPjLCbpSKwXnj6rjqatW",
  "key14": "4ehELaZGwBaq9K9GiqM35iV74BEXNi6ocYtKRhpzCh6fGkcQj2yYA1wftYJWE6XvTYDjgo1k7NKVWLbLndZNdVBc",
  "key15": "2bmpwcd5ciDZoLCEzhJqKdgks9gHerFPK4vwTr3u3T9i4WvhteXJJkLMhwqMRDNhxZmFcKtZZJo7aa4n8uZzbz3H",
  "key16": "ZUWxsa3LAxYFg9gGdkgPxz77NiaSWNGo1kHHFBBvFq5crJZmfs8MEv3CfmYmEHF5UENUZFJCKMqRFxxLEqrjAq1",
  "key17": "338vfvEC1z7FuEuTSqF4CtzvgBxfH4NcKQd3QrYshkFhgY5HbAaxxNKPHUEVyAhVSCgS12fmrs9gtVnTFQvt686G",
  "key18": "25ghGaeNP1NxGAG2jsMXmKoLNwJxrdoNksZsLMPKBwVT49JTB6Ac1XE94a7ehHftMVtVfu9j5fzrs9t4yEWK478x",
  "key19": "2Pf7rvp4BwQzcdXcZBVNxNBxhLntufLaXGCqQa3wEBaVBEb4qK53DstQTg3A5bR5iBxf5thNHQjqM41E6Tdh2VSJ",
  "key20": "4bqAPqkfjcg4WyBRmrJ44mFbxTvRoystF1WMB1LxkdG3udWV5sBEVTfWYGqKAs3XiN6MUp4PGfQBXXsdCF2Ybm9y",
  "key21": "39thMHq3uUaoQHc8wPXpeouytjKMBotrtjNabNer4k2VjnSS2K6dLqTq38StD8UiKkTbm3yf85NSofbPgBRPFddJ",
  "key22": "4HEEVBQRTfTn2gKnKpi93yr6MtW4uq2JcYD64kvDWw58ZoBNobdX7AYJRT9GNrXVykw2k5fgomGXZQ8XpzP9LxQ6",
  "key23": "3mg7WZUupDsEdVdYw1Hb2sP7aZSo74y1Y8ztaYX2T4V5koPiKVpBwnskDuvr7Ws6KJQ6FSLxgmfm8tyJjhprg6Fb",
  "key24": "3K4FtFhFCyeuzroadMktGp7vYFR1cCHoubh7RhPpDfiXViz1376pHtmmjqrEe99PzZ8WyJ9GoXduAWNBjxEwVERu",
  "key25": "2Sp9iAzHAyMcLSgAAefyyw6X8qsFmgdCQsA7sAfrUfcp8NVokysfUfriEaCCrpAxcu1YTZcGsifKcPSmh8hJH7dN",
  "key26": "zePjC1d1JcnyjsnvjJATcTmUUuQzv5iNn8ZBEP58W6RDwJk7qtCepDHvGZVwfdZbYsLuu9rTM2r3yHG4iJhreRt",
  "key27": "42FT5ZnzYYj3iaRquds8CrfyzkADDQpcmG4L5LKkwCfdniogvktUtfZioTfieiCaF9gkPtrjGojqHUKwUAAG2Wnp",
  "key28": "kxQyRvqtquHkSGbhNZX9iqEbgPydrsQEDAoACEN6EbcGPeSQugq2R4mjtH45ZG4ny6MXNsJWWXaR2HEv1F4cZYw",
  "key29": "3ahi7GrV7StBrQYPMmNLfGezk2ArEu3uDLadMKx9PxeYrBCdyrQbseX1g4ozDHr3CiS29WYbxrSQo1hMwZzr4rjJ",
  "key30": "4vAf6tWemWMn4HENuV9CyPSyKCPhYQ7DW6UorrWcbgph3w4Aq3UyGm6NXucgmyXp7Uhzu3YApc4tRwyEbeq2W2wX",
  "key31": "5TsEz1ThBL2WcETU8Jo6ie3PBGqAJmnyHYGN53LXF1wZDPU7d4oDzo4uXQ9aphqHYiu89iQsaaWsLgeJUP41nsAX"
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
