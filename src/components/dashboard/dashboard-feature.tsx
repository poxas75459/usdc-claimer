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
    "62zgf4uVq3hzBkcuWBYR7vAv7L1fE4N24WhAjbMqwV9cYUkhpSAEo5CD9NiTbTyxn6zRhSk3ngyFV2515odkFQw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Q4BarxsErj9qpSVxxwqq11gEBFvEtuuJzJr9UZgbPDGo5DKnWSssLZi99gNUYTdcWr1Gm5wG5KiF4pgQae9aXD",
  "key1": "zheA7dqdshthptGM1pTaYD6sYD5ZiFUvZ5Dyet6FrdtmNBVqENgnbN4oa6r2R6ZUi1srKH5x8TsV9n6eMjAe1Q7",
  "key2": "527TcRMMf7K1GHh3HmBokp5Cg5CGrZow31HMtAmpa3cwAQZzfdRwW3WNn8cFtWKwuHwVhtLNB6L5sFthgVCGZurF",
  "key3": "2dDgY2nJYMSZoLsGA71ZSHmN9R1xMJkeDkcuYY3my5MJETZercfEHmcqzzU3H3Q5ZLh9jAFGpvGKj9dt6yik7kMm",
  "key4": "9G1aLXoaEqeZSwkrsjENPyN9smhcTd2ojBFv8YGzLVKYd3GVQUiYDn8Ydsi3w7Q24d51gCBF7fFLZhhCwj4o5DW",
  "key5": "2pzLZ9c3MAkF25VwSXNpi9ug7zY8iJSHRrogAoy4SCugkxFR9vdigE3Uda7zH2ZwSoChVd3wYnnot66kfgxYE1uD",
  "key6": "2k6uYHqzyDxnWcQ6rttn9HY8vjGuX9661iFyQKUhmer7iao1zncYUft5qFbz7faNWAsJ2UR1LVrYNnhacNP5SHDV",
  "key7": "5o45MRzmKWiQEbUA7e8LBsPLwKi6EbBfv1oK6ozM5YR5dYpbPcjWXtV2CptSB7BH4AyxGwqVD4XXncSUSPStVvrv",
  "key8": "t2BhdTai764sKFRnEzm2J2RywghYuG7ncpFiMKzpu8mWNSWZ9j6tzGpL7dCFghVrSFq3yvg9PvrSWgQv6HCJjjw",
  "key9": "FQgCUA16aLptUmxecEPoXD4VMHPdz4dG72SX7pEz4bgDet4S6oyEoSYtQErcmQsj5dbDAuxAAWkw5GzkTfF1MX3",
  "key10": "4wMqJGc7xsQe9AvBaNU9BryqxK8wi4evoLxo8JcpFwPfcwudkKC56heGAFARy2qPbVz2y91CuvXDz82oDB3AXsqc",
  "key11": "x8xqprQHSvyK24yJWeFdNi9FyDEbsLtXVjCfYhSvqCsaYs1smHFsWgyBekNANxVXQc4V2pKvh8rJQiLXMfpvmgM",
  "key12": "36FhymsZXQMX3FJmKjQ17HFuZmWBy5ounGuPPKzwoL9ZUt6cUtPVKQYLGcT75LuRaiuZt1pY7rbB1A4CeUoxij5Y",
  "key13": "4gjy8K6x7VP3YCpdrTyzYqdUraYgig8fSq1uWUTFoR6xXTQUQSP1AZhWa3zt1LdbHNWzzqaS4Z54TLziqJ361M2S",
  "key14": "4ZfiWVQFbJHW34iRES7wZAW1veNTuZuSX8616NPkGjsbyR88RxVzaUS4FQAF5EvASTuTWaJ9KRJK11CsUXAJHotn",
  "key15": "2nQ7z52eQSYLeswzMCXuMHcuvyeD3fwxTfxqCLSq95rLcXGXLzcYvBiP3NX5QdtFoxTJVfB2Zc25U7t3xEDaKafw",
  "key16": "25QETvvJZJBM9GEXaT288byaxtCjfSRdq9iV4a7sxCvsm1K7i8iQcFtcGgk7yQGdFrCD7SEKRM2mKQxuxKMRo5Gg",
  "key17": "2gRaYjZPy6Q6zKi7gvB9nocDYBDjp8wQQsVSrGb6ibr9QjcJZZEe6mYamuDcEp8iWQYVpDFv1ucDxLEKKRhi8Ppz",
  "key18": "indbp9z1YZMurZ5Ymr8M9HVj7LsTeenkCUi298CHhYcYkgSiGgiqpZfvPfYe655WMD69E3uT4q5ShHT7QBb8o8s",
  "key19": "28y8jyJuAiK1Pa3WesyGCTUgGfJN8Z9P24yqZQaqJUZVkKtQLVGdFciAK3t1netcYDW1K5Ci1g7LUhob4jWurJoa",
  "key20": "kwnoE49Vc1maQdZTTqwQzY29SyBG6t3qGDg8EmaKaTsd6KHZafEVsRVjayWfJcsCPk5qzhTtWWa3iobHCHBU1r3",
  "key21": "5hivM112MmWhTJhiHvi3ybvZYL4aSsM3vfhEbr9jzhJevmW8TNgRkGf411HRvv93F8J3kYqdDZjU7P6YW3yjt2is",
  "key22": "kPbE88DUSYT5dqUXvoeeTuj7Uza5dSKdU1jQkppFDN4vE2xXwMpopmHjCpgzjr24fh8pA7dM45i9D3q3yDfxTat",
  "key23": "3agfvtnFd4B3WP4RxWVKkquPSDayFX1jcQnQqa9eiRbuTWJy8hEyc8aCATfCFHYfxTgDVSTgDuxaNjBBpqVjciSq",
  "key24": "3SvRjf6bVydQLsGqkXSP1SvYAkK93ZNsj2sPSiXLeaDVyE81XVfVU1Nsihnzw3xTyDkSXez183PfnwSH2GY6p1jZ",
  "key25": "2CBdf8Q3pgefvotmBa6PbarshqCVBkJJuPyRwuMz2VNSZDdp6E99x5xLB68bLhZSfJrfwSZRTeNiq38zHR5bgijP",
  "key26": "4asVWqJek2gVzcD1UnyGhVwcCu1Z4HioMkfoS1cuvKkgZxn9hy4YyGwehf5C2VAR46g1eZvxqKcMAR5UqbwLxePW",
  "key27": "5LcoCXEXsJ4SqyPpfD18qCVQq7QUjQsSbh6Weo1ZUn8b317bRety9Am11Nji2BaAbtQ4TC2vivHMmSWhpiNspxep",
  "key28": "KLDvfcPwxyUQV8bH3MfsmHPP4EZrSx4Dh1fkUF5MUFAUp7LMoyBKekWFtTdyRAh3DfRCX5pJoWS7m1UzA64qBwD",
  "key29": "4h2M6NGgzZeNuCPy9ruTFTSpadeYkoEBdqXLZpDKNMxRXUMBf6V36zeaoFNptwqB28SUY2RvBKBae4pMwoJ9H6ts",
  "key30": "4SdDK6uvVNY69Q5JgyxHe3LuiPJZ6gJjFVCRLV8oQv5teLNHsdBi75R8yz7vCBPWVA8z6NQoXriysCPUapeCGsox",
  "key31": "2yTibKEHdcyVEyUp5298SzVLbGeaJo6sRQFk6o5AL6YS9n7PTx48zQTQpHLwqtNUUMMhn63yzdK3w4aaDs1Am9FB",
  "key32": "4GrkNcCr4BC3KpVG8tN6vhCnwfANwj6dqBRCgWFu5F4YyQPbWXCnfmKfSZCi1n3WEvmZJwr4Jpuqr9fG8ipMfrhr",
  "key33": "5PXTDCcrp8Rhq3Y4bYBDe9tLkgmLkfXXdo7haBPStKdvpURBt7DQh8AueykkuaR8vdCzCTNHHyWBj2xTUFicknSq",
  "key34": "5PaKirZhmoibVuQm18x6vsk5cuPfFdSSkYP6fZ49ZrvN6vfgHmQay1Sy29CqAEx3fjPBEM7EGyQfLxcYPCEquKew",
  "key35": "CrgNAgkQQuS6o2MLihugs3r18g4H4fbeUq3JvS2TFtVBBmKqXZDNUHKhVTiopjHEEhWpSjmTAKR5NgP6zNfY2Wm",
  "key36": "3Ue5jM79jwt4MFtbY6gZhV6kjmwqueWxaL5TqigSJbmipA3GbW5MsjLrJUwy462E5vMbr3UFcZTrX1wmDzvpLoK4",
  "key37": "3hMCqovRd6snCJFJhrD9mgb1NtfiKyosKDLFj7sjtADE9yZoe13D8BzsDGgLfBDfNdnGpJUd1qBdLjSX2WbkPEYQ",
  "key38": "5dUpYQfvwn1FgvJ4d21vYN5CZJYBuGYRi9Coq2RNc4h7kRu6FEkrngvUBqaPJkArYmnYNbie3CPgQwdpEfzK7DpE",
  "key39": "38Kwgdrb7iP2gq8VyaZKtehkLQ6UBme64vnzDLcWiXDjWi6NyWBtqyYix4x9Sv7XDNKFfxZnDiJkcptXUwtPqdZf",
  "key40": "5eJ6xC1oht6KYtcQG2ewgisKswjuGMjAez33iUmzUHqs5BzDkXkbLjfnpZr8BPrDbk9FnTDQpQUoGwo7KHSrX9hy",
  "key41": "X8MLcEi1EWnxSWQ2EkGqSQNdNi2fjXdJJ3nxxtBMaDFxzXwG5nAdQskzCeTFTF3T2ntnEd9JwTxgkv6W15c17wL",
  "key42": "iQGTLBJ8UEEMDVGLuSMwnC9bDXd5E9xcZK3bPucyDGNdJfztqRBreTs6UAqcB23Q5T7EnmfgjXrDKV77JcxmNp7",
  "key43": "34VEehrxWcfQwLz7Ux7btLtyvxvQt1QBiEh7xfMXLUdGnf5wju9D8J6Mj63AQN5wsqp7vqKFaZmVQ8iTKqgKMmD",
  "key44": "29qYGszT5Mgv9seVNYVNuMCK45vcECnbn34x96i9bRMo6DQBL3jX8hFFaQcje17FdrS1Gps6zzNBY9uvFXBQecZq"
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
