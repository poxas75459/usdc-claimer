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
    "2pz3hYgH3atHEk5W96pPbj8PofmqvXxerGzkKvv6B4mrVCuwHe3HM2Zutkk53zFbvLxcKnZpzB1CqFFNwPzh8HZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jozvCDi7FY5vxkBiuwEMpeg24t9dGHfbVW6KyAy7L84YDzkDY2B6m8gzof7QiJ7DdSf5viZLhm2HdkZNMMxpCA5",
  "key1": "4FJnQyc34J3hxBA26o5zbm8MC19UZ619B7pi9jMYUcZfDuWXtMqzB71sS4LmSEGaabLFTMs3hEdZuTY8vVX8jz7q",
  "key2": "mSiwDJUDFvTr4Eq8eAN5qwC1qSeBWgy5PofhxTmn8EQaejZNMv7KZZTAUuGw1hFuUueq8HxaP2REAtWELobvCpH",
  "key3": "3gfmMvMduBXXg5QYpnFfNs1hLT5K7tqHHuSG1BkbGmWqkdjCWiUYV4C97LR8k5P1jkoqcMwPF7WW53h13XCzX3nA",
  "key4": "4FmiHixPx46C5bZwrHPrkrAsSxuHDCX9Azo7W4Q5AgXq7R4BaxGgPymtXA73jTmx1ndQj1mBSmZDTpDYoUYjqptv",
  "key5": "JMD49JUb2HxPsDDyCAPJ51YxLC4c8jM3h5G3MF2ie7KHZzYHaBgoPjQ9gShuFydoxKRuC8Ns3KL3LQPHxhZMC6u",
  "key6": "5fZaCCDo3AbAFPA7r6jZDu4M3ncM6Per3P6VYNvdonEgUZWSLoUHQrQJDk2prmJk7kDdTNTeG5ss1E2rsUrJUB11",
  "key7": "3T5LHNPd7WjpfN8sTU2Wv1XT5ceiTH1P4NUBShnyivGLpLVAkfsonEQTtL6sLXp7G8tiYuHmCwkjqXirWFojdaMp",
  "key8": "5TPCwnKt81qqh568QZxcvSja6WHi1qtx1M8k5SBpotKHDURuZCQ1vnov7dsveSfYfDrYpfF7bzLBKbxZ83SXrH5W",
  "key9": "zy6BcrDcET9eHfJfyxj61NqGfCW2BzixgH9J45ye7ddf8Sdb1WeiLVDyqw4AtATf87p3uNbucQauKnMxSL2SQpD",
  "key10": "3Kg5jLdm37xgFFLPJoyxxzbBCPbwdCm7iyqmN8Vduc6aWJDNLziY9Wccyv5vhHp9WBkuLnYJsWFJHPbHAbbsJnA9",
  "key11": "aE39pdrfQSccdBGsUebui4SABf2o3bMLN2x4Kk8xusQj7HCpZV5hdzBaSj7NKpR2KYJYG8G7tB9gakkw8Xceae4",
  "key12": "2Jta3yd37RHTzBdf9FCrEBfGq8GCdJRBxrRieL2m1ed96Za3eUHZbsyo5swVReaot9fqrHBsAjGP5kTh2AxNHdaz",
  "key13": "t8FRtwkLvuSeqEiuQrrHy4zd4g7XkdWkCD3JtB1LMoQiY5bsdPqCWcpFdN4PUtuJDH2oEFDfrejxUALibSLh7WJ",
  "key14": "4s4RJvmiMHHxoNAZRWH9zrNRCk4h3r2WpeMdeTtwztbqzAhp88Hgaki4XEKim3DbMLiRPrkuq6R16ZQKZ462Embo",
  "key15": "VMJaLmPpjqB5ejqhLFJSQjPmkvnwceYhijipJaVrAY42oaSiCpUGLGHT9C1ApQcJp7ySohfxsBGHwFwLaaFjBy3",
  "key16": "49mbSdgUJmQAqxZhC8xPHwTvW72NomRRZvNsgVnoBfTb3VHhGAxkadPUFX6dRA3A3wPTEfMtChMsiQGV7mjA5LkX",
  "key17": "3TUfwHMaEHufPAebTKpo73ksY47ZgJQkxuPuHVtPTmTA6y25qsJfuwmyJDM6jrN6ASzCGqcqKejGLRpYLdy34gXq",
  "key18": "327RskXKcVyGfWPo9z5ioqh1rDbxJEBCYjdio3pjWBGoy6KhLm3aZEQBmAjthSsucPqHSULE6Vm67AmSJvp633Vc",
  "key19": "5u2hDKswbFk1d4xvp8icm3ZsWn3prz9jKmg7MwWJBGjdLTzmdaZymuTbPjsPb9wd8DF2qd4paCXzbWargQ8dZnwp",
  "key20": "383Yow9a8j6BEDiAoJ98wrhLmi7z9J3F3PzcvqSs68Q6aAcExmo4xYGMrbK2q4W7rfuma15oJYpL3vHs8b5c9YW2",
  "key21": "28Jrwi8gMJ1GmRKQhMrKgX8GwcqYkto5TBQaxLHEd1gsuPMpFj6NbMcQve7ZQ6rka7hPurqdDXsvagvUEiffhVh4",
  "key22": "4qvabQ2bYrt74NQU1aFdRyMiLV2fgYZqLvxn1a1ENXKKKR6pyWzkEaWVHABjn85mHgaqyX6r9m35Vc9E98ygvG8z",
  "key23": "AnERxS1Vu8CTrPHdGJfzLYDZn4ikzYret3jrA1RCSB6v8AQ4AB7aBan7WDY6NHdd8S7VLhYkxzmeJ3HmiyasmMp",
  "key24": "4oqm89ci8EGmvGivb2bK4Bu6N4h2ipE2UFLHs84RnfCu4bpkTmwgappUbVkVS7ucD6USeazqhnq9rrr2kSUF7BkK",
  "key25": "37RDgQUfhaf82venZ7KYYTzYhTzYFSyL2asYN3F3jGEAgTt4bJ7NgazR8amA19g463L8t7sEUNVLBiuFJH4xBVAC",
  "key26": "2TGPsQ6t1bMykTmnKYKnk6bshB72KhVwnx2N1ofUMeP3cPvRWeL1uWAFfsjTNZoen57uAAACWawjZJFcjkMwzBt8",
  "key27": "54JSzoRjE2G8KYaFLCBWB3sLmBwRPhXCyHHvuSEQSW2KNEvqwPEwJg4oBTbkmMq7TpLpdbU74XcQibnnaJEs8xAa",
  "key28": "4nn5mrZxHts9HffPSYLxbcYrwGXZHcqQq3AW8oASWkFnHnPMVvKsMUjoegw4zTVTg1CBXNMnYMzwXH5pwCiDizba",
  "key29": "5bGpm91NLomyeKjiKK6eMU6scxQbVuyvjRWFNbxjB422Hsh4p3ybKac6b8YGfp1kPN29ASG6UagkJnvM2TTfBXHK",
  "key30": "5dRjDKt1iJohLhKWprjva7BCvThCHHaFJWn3dxPeK7N3meRQE1AVSuVPz46GcPuHn52vHzPEQ5pEF2Vp6qTRmeeX",
  "key31": "1VE8v28WyyyEQUsjWjUsx18SXn3oXRBQZSZkyCm8PnxomZUwiycScu6VVK1mA9afNCzCP8WUfsEegtUHhJGohsp",
  "key32": "4FnSeJWjmUzn1HMADpWbznLti2xoQNTebbJGFsS2BPgoNZM8ityAFapWZjbi3vPLA6UKEnc8REE75oyDrUJhvgrL",
  "key33": "3U4aAfgqqVsbkodFvLfoKf1jdAjkjsuSFs2izg2zMcG5sMqpk4cqnHV7xfaE7jprdVFgeanyogKvxzcwEx3cW1mG",
  "key34": "1eGAbsWaBhEsYC5HLXAGc4ymuZtai682RDgN8nST2jo287NZUaqmEA4NjpLreyHJGpo1Ty5KNbfxwoiqX1uxn2q",
  "key35": "3x7L44VdBhJL1jDNgAaAiRBNLF6JxX1sacFdmzTWXWwSLqxPpt2ZeAQkMBxuQLiXzpHq7W4nSYhG93mrUJ5E89PC",
  "key36": "5JG4Yrm3UWPGVejgBZNFiMnQ83kBzRhCfwZtZ5KwFDTXaoJD2imP2y8AgfBxBduA5DRPAFaLv2qa82oFabiR4vR4",
  "key37": "35ZrPNsq76FD3XeT2rqQB1LLqigwhpBiKujEd2CFdBaQtS5oU2mHAp1SVhj4eKE1vysyvmTJF9v7VeQ2XBfSs8C9"
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
