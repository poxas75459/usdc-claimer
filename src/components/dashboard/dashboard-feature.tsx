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
    "1f1sEjFceHX1v8QrftZFUM9h5iQnNeD9NtrPupkDApkzEngUoTGXcRxmYGseEpnc1PaJaNkftQHKxcrkRkHwbze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYj3S9FWX9tFG87P8aUhfK4H3HZaKPpWEs172CMJGi3Woi6fqxv8wTBVw2XKkGiPrW8EJhapkT6WSZX2yesjY23",
  "key1": "5ykr6pqQDmsyot2PhLCnFRKDts7jbVKSTUTPy2xT9rRMjCE6Ad4dcEcEaE8hUhiCFWBMyKyDZKWAqxmXHx853jc6",
  "key2": "VjvPVwu9sFbhW5u4KaqBryHkvVmG8CMjU8ABJcPPWvNqZpt4pf2zDNTQWEt8wyw8rbxyuk86U2fiJmmT3tj8VUs",
  "key3": "3RjCSwT7HLx5d9eY6AaLe71D5KXm5Z2Xtq99afKwh4ws3ZcY3AWFBdTthvrueh3YWJyD2njQEm8i8HQSdSC1ZJu6",
  "key4": "5AjP1GiqPRSCsopNYUGbw5u2dqAZVgwoJtA4nkUMY8mVSGv2ykd5mK5dutA51SRRYnv3EAnF9Meqw5TFuD63uXZu",
  "key5": "5t5sXiVWuu5QeNc3iP2PJNCUJ89FwUNYy52tYoM9cF11WLkF14Y9yiwrkwBtYUjrJKPpf8mxF5T1MjD2jHP1Yi8T",
  "key6": "5A8o1HPe4dvAwK1GmEjHQatcRE3X5XCqVWKNwx5PNYtgGobU3tigYLMeq8Td4cgnKYz2qG3ubUGZVjH62RkMzrvx",
  "key7": "iqb5SY8cEhJeuA8NaVGXwABbsg3vVn3khdf7AQntdVW6bNEgDiQ6KAAUbd5divtphZ5YCpc749QCnPuQtCJ4iZD",
  "key8": "2mMttHt1g5XohLvTZv6iUXZzpWdMhRegiaYpJTjspfGvDWB9SDYjqZUFy7gLTGnyBDjPkr1ECpkr3eSyAZfGFadK",
  "key9": "5HAGk7rh6UcvhHc4LMtJYpkkcrGv5chUWxb5WG8aq4PXjP1HKb5kKsMSCNQNXyDcPLU3E52hxMZRSWvheTjn4Ph3",
  "key10": "uUo8N4xpth5PquKeKtTJV85Bj4sWME6dnrobGMXqVNfgqu4dqr7GY7p2dUs6c8xfsVMzbUZNM4t4RZiEf4rznS3",
  "key11": "26RykCwFRgvYBvmEEhcVWfwfMFVhCuYjEgnY5ae9vhjHYaJaPNjM7ahXbPb1wF7eNW8P4Zi9NsnMovMbbibo5bu4",
  "key12": "2dJieX7zSxJZpKMf3faHQCJMwjWqqQmybJ5LN4AvQY4S9yDbTLBmRX15reirN71rySPaCJADERAZ3Bc79RDJtpur",
  "key13": "66N3THh2fbuUXBCcr64gdm45Ffxq2XHNogyHiiJFifbBXKdooCNZtEzRCbUFkqWNxji3Vje1QPvCPdpgKeSAe24F",
  "key14": "2kBdvaqszZEPv17SeKGMKAB14S8kdRioSriLyz3QHG27kATCnkEDqsje2TjiHNLceC24G8kxduQBRXb39KdjtmwR",
  "key15": "2NsmJVQpcWHuD1PA3FLm6hkn6ujtfxvdkSdGk2qbprth3vEmWeDRMs9g1pRMEUGUFnrmhXkMDYPkpXLQZZpzmHh6",
  "key16": "4K15hpQu24w6ojfjUwGxMK2zzGpMGcMoSKktrNqviRR42sY4qVYM6Ps9MDWK1yHwTMgMoMYgmEXahvrnq3mb3GVk",
  "key17": "S6qZfP9ne5Sk2amnHUZ2X27Gpcdmx7FTURoV7cq8mk1DpdU92wKRe4eCbM6WcteBEcntjR6s4LxAeB6MBL8ycCd",
  "key18": "33A9nKWkuopQv33DpmbyecewLwZAPm1f6Fm5iANZ8M6pCFyzSyjMzMGJrby4c6TNcEjAfVsun9YWGEbR7csbKCw4",
  "key19": "591Z8D4e4yk535AjHBsYBxShDC4y8uo5buuemjfcxTgHyNdEmzYYitsdHfLEYPLH8UEbkw7R9CWk2gSEFkBbiaBi",
  "key20": "4eBH5c1mgsCohcgNVcJfVLPhjMJ4nmdcikDJPRthsMybYuYbWqbhehhDfGxqpnAPbCbVHDJb1XVtrpfB5buB5Hyz",
  "key21": "aFCcMAW2DFP94z4K5qc761h6xbY6AAfBXr8gTEgWP9Aj6N9NL7tY68YbiiMU2B7aJvJ6Vsup8DajzBe9HUnXVtK",
  "key22": "3MLR8SkgikTGcdj8i2or21TLa6eskBBb4vkaKTew9bRsD76Zege1KvdJ8kW1oTuhAyQLT2C1yTCepHYFuyAiUfLE",
  "key23": "2QfNWSehGa2cYkfnQA1RmCanH89LM4bebAKJUpK4i1nUv3r6eF4fgZTGyRnpR2v1gynZynrbsaWWoReQL7otRB9q",
  "key24": "5esVnTyyPVhY3zTCi4HFMLXo55vseXdczqYhCikfsVfgt4xZTeopGrTZu5t8xhD6uD7NnifWcWFcGz8KT6xYMhZZ",
  "key25": "2Va9zLe8vHmKo1gaXgkcgVVS1YevJvmhPBuVCBauB9r6Y9vbfxjEVadTyexSUmAc8gGTznVgv5Z5GbB19bAEw8zA",
  "key26": "3smF3QCywaBJQMwrjPdSE6FjUZk7PeJiRfU6dipBs9qAzTSbhCU7RWKiqeC5iayghndzzTdHxd21D5MUbk1sNmgy",
  "key27": "CfUgjsEkaDup73n2tEKT5c5Dk5yVNGXCnrwsMDcmWCTcCj3A5W1BL6cEYtuvkgahVWiiuFaY9YxAjPSUZUH9NYd",
  "key28": "2LYLXdHmKcyFKZruHxD3NAtASH8TzJHKyBiYE2k9GryuQ85aD2rTz8Gde26SwvPQzRnTuPg6vy5my95ESYNDg6NW",
  "key29": "4hk58Tp7e7oL4DFgt88hJff2W3bZS94bbgBHPc4XwyPRTSHRbRJwdM8oouFbuHpkGFk7HKHRQJPdvM3NCuMgJaTS",
  "key30": "5BUfb1gd8hj1NHbKsaQ6g2XR4khY1Sgk3McnwwRxfJfQAENak6SxfZDwCpWS7F6TgVybbfsohsSMpbz1ZWbsfuwc",
  "key31": "5C7Mgwcuf6fGd49BrsrrBCmNJ113DEDRe4qnM6KPfYV66Mg9qKjhGu4MEHEKN5z4TPCC51uAjjkW9L3rnCiJUfWx",
  "key32": "65UoysvKQw5s3SWp2DiNXmKDvHKLagLiYg2JfXhPx1y8Z3Ec5LcttCLDWK6r67ACoFpt19rmQ1L45FMHAMyHuJh5",
  "key33": "2Fnzwcaw6WwoiwbS1ueD4EZJd9pcaAPNom5ZAXEjAtCxWbrbN3jeQUQAY2YykwGiko75rfLkXpJkC7gQiq5EWZ7B",
  "key34": "4McMU8wGSbKwM6QJnSW9MpfGuGfokAuDVGobBorhADaXSSFrfBncYShPNNh1LjrXB6Eu1ehK4mBbXEjw7WwKGe5w",
  "key35": "BRhYu9rw3djMKAgFJaZgPYAEchbj8oMrYayBih525x3KBRg7ZhZyMLHYGCjtLpyQeLXhArcCNxhffNmhuFEJvSq",
  "key36": "4i7krBm1gK32DYVfBL3ewgSTcpvtvNJHK133ffCL2eVqkzfAtszitEt7JRqXGMmc7sEYqvAzCG1Tvi6FBAQ9Ui7p",
  "key37": "2mShypNjuH9fDNEXmqJMURBDtG7uU3QK3195y9CdFv9GupNgmTfWbRp5xPbPgMTd8wBBEJCPtz7R3GT5mofuxsAR",
  "key38": "5yRxyyxMSZdUXCWnEPZGYyZsmUrKR6XuyAaxVbdZzLuZSAj6f4FBkvC7qv4WBVxfNagbWGgFm8aTq4Foe5cj8sau",
  "key39": "4ZHS67w2Rh3VjQEH3jLrsxGjgk9janyJy9JrpCmt7aVyRCggXV32CVzfhE9CueQt32jxwPAJSPLsGgQueVFDCxgZ",
  "key40": "eXxZMbsxysMbeyUCJgVYJuvVkrbRXVVWgZmQh7qDGq3Ue9pj1kqhq4P6qhCa5U47VS3aKWxf79kevRtnLJHe4ho",
  "key41": "3vCBoBtSJJ9sWo5m6WNd6EhwQQkwHU35kJRhDUy5ZvhU1icREUqLhytbAi48SwxD7yNr9HnYew43NgWQM2frfjjX",
  "key42": "2TRNpcB4eo85Z2ghdV8JDrgcUPFJu55y3Z3y4TvJNZ8esPCzFzQPsyDcmdGjQTbvQiJYJKRH3mxAgtaRNA1vfRoH",
  "key43": "4DGepYBBrKUUrQFnVWsoXxdxummEqDdfr8CY6wzcKPwVt3UmYCERxkFaZSAf9r34mkoKy5ahkyRCstVDnS9JjwGb"
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
