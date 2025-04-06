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
    "4vUMrC5hGm4sz9FYfjMmbAG7rT2N8Db4HpjPdQrqeTt1MuM3CRAKiNyMNs1EnwNfwRa6R1UQyNck3Dt1rkNxkCtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHiA1HD1UnevDrt1az1czNVq5znJrpqJLCzgGb11yaidRYgEuuriwXWERRLLJaEZ2uhoXfGWyb4XcYqyMvbv3C3",
  "key1": "3sxC8tjzDAgtAkyFrAVtQAPXW3YAv8JuuDBHL2Z5hNMRTKoS6R36W3ihW4Q5XTCD3r8JXdmNGCCaioZb3XBUK7vr",
  "key2": "4KMyupXqUMoxMFBkB8w9LnAoVi25jzksLy3G6zv3Z6HvEnmLxAYMEaNgSE9qNxhgSncrv1dPsAa5ZmsERaYQNDeq",
  "key3": "5KT9izi4HyBqXk2WgdSfeeJS4XExex32y5kX2WnK9qq4N1tQbZwmg3JFVqJUvk8uy4p8dTftUcAfzgwC8oAcLXYX",
  "key4": "N6BVDFuYkAAN3sHDbL2V3LSepFturm3nHfWjg2WPgH7cYMn2BMeT4a74JWxVDnMknJzs98wsqKrncnLkNjavPdv",
  "key5": "4CucgmPBbx4eBfJyzg4t4nFAQkTHoBNho18juakeXfdJpUjrqdzJJbKfWjZAgmBi5QqYMf6TceZvGHNvyEvJKV2j",
  "key6": "3fuJRUkamm7zFgsbHBHkWDZmc68k4LpqqvKDN4u3wazHuJriTQ9ioqTkE98WCLvvXqW1QHRbYw862ZXjuzdd257a",
  "key7": "2fMMgNniPoFZXrUUE2ohuxPhmZA5bTgeQ5BYJC3hCJDQ9a7t9jqNAVgJk77MBiLpNr1xUjfv3agZcNDMbymH4vUv",
  "key8": "2VJzxWXb6cb17ecuw3UFxKZJEi8XPABzyoMzEM1CSTaMzSxHV8kDizuES1eX4RJKZ8Zwg243dRsYEHsE2hqjCUSJ",
  "key9": "DWjcx9YBBvQnRphoMnLeLKnmx1Hi2ASnm7Zsk99Ze2bxrpBHsmwYUPrJLtZ8o3BFuXY8vMtSpVZEFKqkGuQTMPe",
  "key10": "WGLukepjEMHWarEiLtQ231VpgKmpxjGucQQekKWoQUXW2KTqNusUzVEbxoMDiCT7oFMDc641Afkwex3nsbeXufz",
  "key11": "5HYR55VD9BP6SemyAQCfdNyqhosWVPnBsDeUSXPm6fmqB83mgzLgbDrhQiTgpR95JTvMjJt8A5Sg6V86ZPTvPiJu",
  "key12": "5v46a1S8Pi9CAQdEPmNyo27yZET21CYJaq8LWoMcuEXCbxnPJdf9N91xaBAZ9BRztU4PkC5drCWpQ6Zdu2Ab6ccM",
  "key13": "5X2tP2LNM2z1q4jeJE9XQrjcEGmTJBqzK8FkKuWMN1b7zBQzSgUtmG4RLpr4xufYMe2fSMe5aExcSUY39s7zSjeF",
  "key14": "Yx9MdsZBJWUMpa46h6pdSxWtTQdHW4RTVcTtQ5KyQudM1HvBLs6RhqS3xhMjjPvmmVeQKD44bfaXL47xUMDTZ8n",
  "key15": "45446txiowbbiHrgwywL5UdxbYDJP64yyfTw3voRNJA8aw5jxpotPXp9SzSr4a8z7Ad31SR7p6Yo6PzdA4TzmeH9",
  "key16": "2EbkYk5S5D3ZHgGvqxqWnWgQzCvumW3GwYY3trmYLidoDy1cmyGbJdQxuh47VRBL81P5iGQ6BM8mhsm8RayEaf4Y",
  "key17": "52J1HjMgk3q5GUKLvQe3KMLA9JLY1WmQeCdfEPUs9QrCS7zJVzz6NkMfLszbbmHyY2cAN5jEye7d3M3hujAf2qNN",
  "key18": "2vL1qJTrFiGdczEyRTwk4kjJVQKoFui9yxnpUuVvLHN8JXzZbNE5rKEbMtK8oFYTCXzC3Q7MwwnBs8gqDZNf7zqh",
  "key19": "5UGq5f2MSiyuAmzTAQZfTdaEZ4E5vU5rJwNcsya6eHpJhB8YNaNHAHVvkvgPEWguvUoy6uwwS5ujJk13CDtsvY7d",
  "key20": "3aYZhNdTnb8osYtKXTSu9AGTv6YaWN6sZpB23MFyBpgpcda2GqyJJEy2VPoAiqWD613kayy1zorW3iXnCrmKPHJg",
  "key21": "5kEpaSHctf5yoNEb5M1SUjh98NtuUuUC5mz4vBRXK2UvyfnxixXUFLB4sqxpjFwN5cpTdWTVqr1RhuPUBLqcMbkW",
  "key22": "4wgusBs4exTbYBpYHRqH3gaw4hs1wSyLQXJDqhgThFSqtqTPKETyxD38mD26hhptYgKiDLVYfMAf9iAEKywzCeJy",
  "key23": "3jJVz7FF93fu2pvSm2PLpRo3KBJWpdeBVT7Bmas6gXJHHZ7mSEAs3ar9YZ3zD92GvS7gnEeQzpfHxHBmBjZ2798x",
  "key24": "5fY24wr4WB4Wt3ewwbRwv98KCw2bYpMkPH7JfswHhVRbcmYz6uKUNqAP9FkstynKnUn1BEeeDADMSreQ8Ri2mGqX",
  "key25": "4j5pwaePEMqEkpgvd5SAFo4C6HbzyF6w9dCZD1Xksy8iw848t3DR4CeQRAz3h4aDPe53tTFvocsDzxcGWYF5UAxi",
  "key26": "yN9SKg4c1z65aegJbD62gB8UuZrVv3zSebza2GSgP5FuYzHvsUJx4mPdPaNRPo3g2q1WN8eghwcbxLU4S4xzTtp",
  "key27": "cJbYbYsjxDQPdXVswwEUUZR35wAaeBw2mG55SLjFMjXj6Yd4oRKobp6AdEgguNdmUjecjF4UuCVL1UyN1XUS5YE",
  "key28": "2AKXPVvkGbTgqgJRa3M1xjuMHL7BDtfSCYiKVSf5qmWT8VpgZVXtBRzQsHpkTZP23d3jhKBmibWsMUxnzbjy1252",
  "key29": "2SAbL2y8N7ccx9CxkoaZRRFxYGhw95hgGJVVRH3ZWdbB75dKcSZWupdMqmSCznYXGomPNAvQX84NLHSiqaRWrDX9",
  "key30": "4hWdBnbm8V9wfZbc6rRWydyMsBCSa7JXq4UGVmH9aaTmNmMwcEwMhegL5SFf33Zdn9S8c8WHHhn3SrAx8RXkJJMX",
  "key31": "397HVZ3b7iGJG88uyuWATKaeUZNwhWqPSMrLTvqQ7n8Q16pUQWXvrTTNPEr2HtfRZrLanFpcFZmAEbwLXKW4ZNr8",
  "key32": "2qVcLT6MeBHaKUkckbcj7WGrtWvPjM9hYx1enDaVVy27MDMqXnXRCtJPQC4TEuEssBPoneqaZ9NKWeXsysbW4spZ",
  "key33": "yNBN47r3qgvo3iRwpzS42BSZ17CMVuLmCvzXBhkMBADeJKVcQhqu7WBtZuot63PYez9o9mvCzy9AQUHJVpRqewK",
  "key34": "ZGpnLBrDmxB5DPMfN79EoVfRo6sPawW6Cr2fgPEHETXGiYHuhoS6WjHSARfsafsyNdQ3Webdez6S9TxGhh3EfMK",
  "key35": "ecyNcnzkk5UGWU7jYA6fEyGBPzTpRXt5MA9CzQyCcGs4GrefBJ2NNbriYfXBRdQcTMsKjxMpVQLtcy3G66NPNwN",
  "key36": "5okBVmjxZMQ2XNgSLZUTKtGkYAvuZGmNvWXBiAvvBQo28T9vrfMcQ81gYcnTUB1nM74on1xju23gVJQ8JtUKxrR3",
  "key37": "49DXXwpCvJjeXqsvs6Rcfj6w6moJAR6Sq9FYESASavqXwbogAzrMSncwCKUQH7bCV8skxV6niLt3i6RHntk7oLGA",
  "key38": "aXLqz2ieo6STfAo3ErfbQJ7ZWjJssh1EUXdggJLkLNSzjG86PCyG66UfjuypiaA3fGEB8E8r4mEFwCbqQjHK1za"
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
