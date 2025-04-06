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
    "4gUUzBfZqRZANKMBb27Ma62vwQuWaMtJv4PYfo2MderFDYusyKTtLv83xr8ewgEzKsgzRU9bRe1znxqyJTSfVtH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsnNYR3k4FnwdXvmNcDqBMsHHmqVPhD2DgEZgVKLSziwn9aTEXPQgwC3GVXRgFox9BSFsKkVuBbUBxHMnyuZDqc",
  "key1": "5VDvxqnGDP19sxPvQbJQirhzrUUWvHuGjaiWiSJUsNhHdiVH35mEYteYMjC4bLCYH2YTYnpDd6rr7honFeUS9sZb",
  "key2": "25rvcwf1NGeCEKYb2pLF4ZQ1H7etzGC9qeRULqEJsAJsYVNWep7YV3xqCqm1XVhDwoNEEAobR5ZmkkTQDpSxqcTH",
  "key3": "66RKd1Qqjn5CutjwnSkJYRw994BpCa6PTD6KRMvPAtpaX6M8Ucd1hS4aUp5GdHjLGbCVavzzmLA5Wkzhr6kbJP6h",
  "key4": "3G3dcTsXkcuXzQ6yTJKTTvyaeByZZfBMkNE7v1CiSWmaFWz4dYFz674mcfvjaf7uZsHN9rbXad5VqRNJLNKPsf3h",
  "key5": "5aKqhYY78SoMXpRD9v5VmoiB8bMSYPLg9AiGdmewsgjFEwebuV1fSLRNAyxEptYuhc6xcz9kyutV2KXTUXbnd1vh",
  "key6": "67jkAcnJDQVaY47q3NTU9ofpexhzzHE5w1EuUrgnsbioMyjPYL8tVCZQ1rM9VQVrogNVTPzMx1Q5NsYYr1j6KzJu",
  "key7": "WoLJ5DK872ZucopFrR659HxgqDd3c9BDtqiUwMyaaHhp5nAkfkZDxSAuSKuMY6uJcdYuZmj31x4Vkj6VApHkKpP",
  "key8": "5Q1Lso2B9GGGzAxBJ8K9NoLCUwLiYtyGCMVFiBwEkxPFRhcTvHu9LpGJSU1FH79UG4PDV6NPbaA8iYagReoMm8X9",
  "key9": "4BaNDa7FcW6Qt3P2eTy6WoMjPE99fccmai3pPaD6hC67xFhbPqH39xkWZmUPZRRn7VVWE2PvEGWCDXtMuxxyDUmb",
  "key10": "5uogciQkAiCJa4Csj2ASW7BrQEx8abQ6t3XcUv2YMCp5f8Kv6nABRxtQEQmd2w9EyzLB5FemtxrrmAJhkawzAp2E",
  "key11": "2gLjGDZ1rPHGqfMoPaDEFekTwUeKiK4uesUb1GJZHVw2HrS9MnaDQ8Rj9bpKfo46JZ6teNiBESLnTMheKoS79bSU",
  "key12": "2TcuJQnYGEzPAaxMdyVLQCC7tYXGFxzdr2ugvaiev1FTsydcCnAWJhSKVi3xvQmnz9rXWsquhgsUGFMp4T8G2vee",
  "key13": "qNrBtb3cyvbvqVBJF61VY5m7bXa4LsBQgzmWxqbhs9gNJ9qbx1Whg5YS35F1ASYYg1gEb9YqZHv2YyYThqjW3qg",
  "key14": "2DV6fkKur3WSvkhtndc2VyJUdjAo9mM43sJowJ9p6MG1aruLmCiJhCDte4UXBKZsPHaL5xhg4KTR5fqgfuF5Xjax",
  "key15": "3Ls63Ck4ksp6rqnLKkjuKUa6FV7Ei9ogaQJ6d8pa6DpHiUpT8LpAMZM3UYo9XnE4Qu52JGdZy7bztdjGtYikNRWB",
  "key16": "3raVEF2ohBacRub4hJWK8bErtJNgw512PwpkEFUKqMNoU5UEW7DoNJfLHYVp1pivMPfukzExVzmoJV295LRYwYYd",
  "key17": "5U386iEW6aGc9xcsjh219wuacCBqT58FG5UiEaYorM5aUnXJhJw92EcmoV3GWtxpTg16v3etqBpQYHiGmH3YXJ4R",
  "key18": "5AGz5oGcnC3WkXQrFE1iNBdbVuWEmgL1ZXJHpLMEW8pRRV3QbHXY9szxaPPD84r4N1SEtQ78bWZjt45cy6jMBEqK",
  "key19": "2SxKGX3Az7LZfBqjvGxeXYM5EQH7ZCr9wDeyzfcs7E1JTWREueoMMtKi6pEMHsaG1ZB1uyTVw4cWpCFAJRJ8nYde",
  "key20": "4oeFwoxA37wAHztMzx3oPvWP5HR1z8wTUtGPJQ4Q8KAZGXeHvsaRXDTWyyf9CWtvc3JeafBc45L9kSoEQxdBDJL5",
  "key21": "4wkpdCrDmzdGd9LHVVpWvXCKEr2ug5qC4UrfnPUj8BUc2kQ3i1VHmzKFSgfMBBDPFRnb5EfnPjzDYocLCWU7p92i",
  "key22": "4pQqZqDVqGrucWvrePvEEaVMM1NcQBS6rGgLFrHDjiSGetNZ8tkn6V95aGUSMh9TRSLbnyY7rynyaztrze1woaXM",
  "key23": "4rKY1pBDsawWGyK9XR1nRcD6oWZkAQHEe5kuYCCHr5RzgKKxPTg8TpPSFotThVsRJ9yXEo36d2pKP7Q7GAY78cnM",
  "key24": "3b3NvbHhKrY9ZeizMaDoXUJGGCininCBPxf5sSGqzvqYQhdxTP37yFwsFD8xuZtJtuUbhCWDUjdK8pfh7a4f4ngS",
  "key25": "3UXzCh4BrzFR655wMGM4L2RUwp65eTw7hAZgAsr3L4xPn1YyiQXD1JQBi1LoEfLbLoGRQ4BuzZgYM88NTqPYZzxW",
  "key26": "67YbayvXVQDBEPZjZarpHpBJY885JLF4xNQRpMiFCj1Qh1pmTwyi9vPptWwavL3gGaeBu8MFj6bovr6n9fPY35J7",
  "key27": "5ouBzK4GK3vLJFyWcwB2nRbxWoqbbsx9GVD4L1uaG6fmceGdZqKii6Q41sUNM8xXUZtigx4g1TkJq8ntidHFq6vn",
  "key28": "4dBVA7k6TZhAhNjyZNRrWqX84tQxbisphQ6GjLonYuTGJQTSV1fZSjGYjwgn2n2c34jNVjfziM7JP7CJ6rpqKGAg",
  "key29": "53dxn5yR9E5YWJm6hr2CM9xucLT9oHsocVc6aaMqny9PQ7weLAgvUirXNZEjVda42T1fymtsSUS1zm4dymoG4FeT",
  "key30": "4o9M2o1aj2h2uDCVKcejg2bVCT8poT5RgtCdVAUVSuNZN7LDaPRwNHo6spmYum5Epj1mjezg39stRK8tfBcjQGuT",
  "key31": "6MxioZydhpxKcLxa2Gr17785V37wCbmGbjvyuFdGJJ59Bu3grvRC77z27NtzqqwFELuaGPkWjWKowRWKCdvmHEx"
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
