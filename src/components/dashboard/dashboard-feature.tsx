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
    "4ytwox4De8YctrKQeHQihxYYofznuLi71vqUKhwrh437xZgcZZoPDdMr2XSBEnv3R6fAswYqqx7cqf1hUXpfJ97V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56u1CpHnwFRHQEstnukMYQoYJ64G3tXUwhz7VmDWYriNkMVVSRMftHcM61m9Gv9YM9nQ43y2xV8yvQ5qn14rLFoX",
  "key1": "5wpxhrQ1PubizaFMAnseixWm3FgceuSMhZnSa8MPpuSj8sNh1817RR2aAnpekvn2x4HFqQ4YHaNKp6N2UaT9JnDu",
  "key2": "2Shxsce7TjjXyqff55Eg3dsiXNpdZnE8vfsRcV39NCB3JLBrMobk6Lhu9jjMbSzqaxfp38hhugiEytPTMr1KQmRy",
  "key3": "273DfztFQW7XUJwSAdWVrtSCLhRPFV9ToZchXeQGSU1MSz5DPWKNv3V247diofY29D2xdzYZhyLDujXnBqH1ZTDa",
  "key4": "33bXqLQT5arLNTKU2yGgichtGseQ1bfB7WyuwrFZ8tQjFmBJoKtGYAec5c8JqobxTGcZV8drLWUfmf7xjCaYXTbE",
  "key5": "5ombvvJts8Moi8UkyEobdzGpHBDZ4zSqcvGr88eYzoP9B32Kwh93KWrrVEGmmt5UWPcYriyUULzjNLX4eHSyXdvr",
  "key6": "29ScY5xfpayytwUaG8i7JZM5WJhfxCePjdtCGYvpT25x2ViCCgusxcTPM6mAu5gdTSY9XZSF5iyUbfgneJHuuEFL",
  "key7": "3CK8SdnhFqAa6MeB9QqRHGZ1P58cKZTRXVi9KN99xyve5ws3V1AqL5q1c5tQwbwKrKUfdFXu1ZHEw1MDrc3oWac8",
  "key8": "4S4hdSrSRaKvoQ7Vx8sRuwcp1TNZ7CChux9BfXuUqaJ6gQZ5v1zYwPPMn3MsZ15MZyMAPjHUKF3953g87RemZkkW",
  "key9": "4aAFbuEQJfvuwcBLmYko5AtwJ3nSpYFeNpjcjrUFi5F1T6yWfiZxstW6SZrTahaUbFxAoTPzQ5JnwcMfjVJKPa8v",
  "key10": "3ENYFcryKyKAiy35sTuFNSAmNnDdUYmL1eqFmg6wTiyqwbDAnG7gSd4s7uKuM9K9YsiUHZps5sdLUG6AaAhJnPSw",
  "key11": "bBadfeZAfc1kESGM4NpkRNkNoRWB2ePoxd3MYV2m7A3c7YqRD11Q1TDwjDHRDB5je21S8T4LJWahvRHKzFhcTJe",
  "key12": "3VK79Pya5r221AAYGp19YZsLKhhXGUGjkXFTsQHiowNDUniUMX1wxfDAsCRmEe4ATgoGzR8VdWXFSfpu4Yyva1J4",
  "key13": "3TBJc9pNWD4zoLav7HhjsbSVaRH1m8zvDEeWStbGqemXPxQXfezaHSmi8ghdzuekV2apE2FvgJZeD6BNF7g1MGFW",
  "key14": "UDDdHL5FhnV18KQJAgcUXV9xBzanUeRTskLVKF2aCrbbBLgU3yf7buocZndJ8sBubkMDQfCHG2HG9JapdtXLvDr",
  "key15": "2vUmF99ywWueXJZiQxNhmQB3y8BWBJXMguPRS9DWpUyFq4sVZLyrUkogx35pYswwWVKXx5dNPsdtQiHPP7cWyfbH",
  "key16": "5ig3Dbmm56ESUqKANMtHSN8a9MDpyFfWRRgUbrD7vx2GcvE7T9jiby6Kob6QGwubGRTo1FpSYLNe5b5EC9rEWYx",
  "key17": "eTSuEMznjUefHZFUxXVVgNKJ8NwfKGD5do7BzUn1L9JWjwZofqTVfataKG8c2ak2ou3RkLN1gdb6DdG6E31fx98",
  "key18": "5Lsp5DoCHvGevCPVj8QnwFaqjDT7Kzy7CXhiEq67eo6rTGtFoiyPgZdiWhMcERhn5A8XGreUSvA5BKCRhNUYxKdT",
  "key19": "3dNEVSpjj9gp5EyJYdiMXYH37PbdWWLPNYKojhj9RyK6iSb74fLX9JVkh6AmXBjsZisHb9vaXJDCpmRj75mqkiKY",
  "key20": "2hmwJsL3yjJy7VWHhZGW6dZyzR5ueJ1EN3iyrZkYhXft26ofhSKJCFvKoa1LQVJz1PUPWfwao6HadCGaq1csH1R7",
  "key21": "3sx87QKSJyYzW9o11NJ2MHKmawQhABjpJg4wVwsHrUFt2ujmquC3G8NGy7nDmd5NrFzHZot46rhobJsHz3GsqSfz",
  "key22": "guST9G6t5ZwUePH87zFu7kCje3f55DT1XK1zghCEdJKnLN11MSVAoNVSfacHrakZQHwSjpUkfuuou5c2tsFVQCH",
  "key23": "4ZYtXcow7YtA6Q3Bv3X7vRu6mFNWHLtyHzZNLCSjRpBSpegLwMUK5scUNRqefcXUeYC3gcqpHUJDsuySPvtpq5XX",
  "key24": "2LqMGGwtC6JSKdEUJXK3yb3Ede7cLXZ1aZktzwhTXgPuYYqfVBr96sNTrrbo7zi8QufSwQir3D9VoHdFk6eBdYGD",
  "key25": "5sp57yJr5s6hwJaAhES1iET6bLXVSrwxpraW9krZhpe4uNRuiukMAnwwmbvhzCsyf3K9BpC6kdfXkG15rxoAnEeh",
  "key26": "4FDaA1V6FxDQShGhnKvcizEapsV1Kq5gj4bjV95KaEUK3sF1RsC1aSuYL275XTDZBDJgv84Df5njgcP9es2yLKrS",
  "key27": "3YL451nkHGh7tzEgarFdBzjFx3qTL4VCBnidWtUWD7J8eY43t5ZNthUHZ6of1KHH7dMeb9LpvduiYDVLvVXvJyYM",
  "key28": "bBc6R1qgpLTPj91jxEta5SAfcHC9dbULpmXud4LaNdjDwXGooaiiDv46pjEPD8xbyapq86usEAByjY2euFQKwsX",
  "key29": "4QjPgZ3uBfYtFKLCQHZ4cHLadURm9Y1FWe3ezTEw2NMHuhRQaF6q1JsqJRfoawCeB855gXGsgkG2wpshzEhm8bMZ",
  "key30": "4YuHUe5bXwxBkNcBAD8i7GjDEgcZeHnYh9UK4QjyLcMY54cwcjPQiK9pzVT6vir9gwuCeGGrEc3i2EoioNVwZzCT",
  "key31": "45dcamRv2SJntE1UWrBnZLLu6PwBx2MSBtp8vsBLc4ghL8PpmGss8iciGohupfbRMLAjNTeexnHs6du4tbRatSMY",
  "key32": "2eMwimsfEFqh4bKATH2QTyb9wpT6GoExiNtg612CMHBY4UEeBH8VoTXwrB6d9aWaaNHbJ3yoBkDzqcmQQDFcbxYM",
  "key33": "4nNPtmaToxbyJ2bhE7bDP1DDVQx9aiMxd17HzctpQaFtqWXKvrEuHSZKZU7dtvvUXFvpQn1obYKTkRaxs3iMbnJY",
  "key34": "3yYEktoKsRCh64KoFeCTJLomnG99PZg51X9hLG7P38fKsYZoZFc1U2YrJYCkynCYvEHMxntnNY4nj25KWc7Kb2nQ",
  "key35": "62UAsYi9GQ8NeXViGeRvw4GqL4UNaq8FHCcy94Zd7PBV4Jiq6iu8UR69Ke7WrAogY5GzgDAWFTpeJM66zqmMC9sU"
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
