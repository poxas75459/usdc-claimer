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
    "3VQAfotQTLtpjdTaMQFJoSivucvDuFtgxSzQhJ9q6KEwAtaqEEva2b3xktF14F1pp4fLodvcq2qXVJ6KDP4xxYrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V8pxMf8K9DuaFaqR9zKxn8j2vLLEUE7S8Lw67fQCzjqEMVadwhN4eKPbfBazFaNhdj2GacBmMAuPFczSm2nNy1D",
  "key1": "yFZL5sXke9PcaCsHhx3JtnfZpguhh1GLS9kghWqmEVWoGAem7TSbYpAZnNmWpzhYCqoyp9u42so8HyUPHp5BDUa",
  "key2": "5LdS7VCHgiYUUSRmtRrFPcYPZdtLHps1gs4GHX2G58N4Qk7Zk5J6KrDZ9HubR2nuKxsneKNrZWFPLvmsvtEVdtSN",
  "key3": "36N5ZeZzQxrY6GJd2ovkFMHUwHz51xxgXs5iAx7wEi7hkF8Aa25C9o6s1TogjH8RWH9eUR9ST4y58qmmbfbptHty",
  "key4": "tWunntauhofL47aboKxiH54aKXcXnD25PCsmVKNZFMpiEF98ekxDJAgbdn2WwJqKFgNotNvHHkE6kHXADAuLnpX",
  "key5": "4c3MbQLJidY9sW7DgdqbK8t5NusVKdjqQuQEdvaBqvomxgA36PVmReJ5ambKG5dTrJ7e4BjxQSA1bHDgZFJEjRdj",
  "key6": "5kbtCztqdo7qTecN5nmZapQdfMfsYfnKWZap53ZNbHzCtBgQqk7834q4c6Ge6ZgGrkev6rZKcHZwtaydgZhvZ6NN",
  "key7": "Geg1CyhAKTmky3AmodEWRPKXv1r7PZUTSH27AzG9VRtVxMTvH24C2TZSZF1Uvthaa2d1ivsKX1TzHdr7VZyuo1j",
  "key8": "8x9az8TcC66FnaexGDZBkhvhaayanghn5AneMvFE24X4A5vykmwYVXCDnXHsiPN7wjC9XsiAm2XQ5f68LwQdrfj",
  "key9": "5a8o7qgDeJocqScpGu93LQ9BPvCNdYzGSSoj2yGNh2VQ1DLax3PqwRaRiyvxy6VcfByb4XPivXnY5DG5dDtSJ6uT",
  "key10": "3bowXiVdpSsJRRSzAEQ3JcGz9u1hoqNkBtZQoNox7hatLR6HtszCqcZDgKJmGTQrbmSPTWGSYz5q4rAjF25TT5yR",
  "key11": "4xRUxrETaccCqyMR7uSfYg9ocWb134W13epvTSrs2f7a66GCtCn2eAU3tJ9nPFtF8BRDc9ECCYHttmWdEi221VNP",
  "key12": "3uXimqtDBdNSBqSsj5LPAHecDDYPopntGGkaeU55QmZrkPmgX8TFgK6bfvu8JLEh4MvdBWfHcGE3kBac9eswGKry",
  "key13": "4GEKYpe1B8SjSV5nuPJUpqchYZC2FMQnouPuXEx8TN88wtB9USubk8xpJjWok2wtmUuDBkGJpwQVU8udtspe9A2U",
  "key14": "1v1bLJjBdroCinaZL6RHXaKVMkPagruuvRXP1reE9HFFG5HtszgomEC1yuVvnzNu3BYKqRXRu64DWGbBBRBzLQm",
  "key15": "5m5r2hepNii5FPvVxtJ3uoNjVJ5gY792uh9JqPAZ4U8CVU8G4CfmnJtk4qoz7qwpW3CtgWgxHCSLMf1Ec2ezqv8F",
  "key16": "3XFz86XqkYZr2bU5i3u3ATcE3r6UfRye7har4GXLsmu2WoeZ13xf1ykhryU6L7bRAwNpXmFMjQx13NooD1VJPWbf",
  "key17": "4SLPVmqTsQNsWTaxVJvdukbsfFHxGz8QdfnMP6ms4MQPU4Z8tazrFUz8JzuVdDv6D7pFsCskCDkkRqsGAHwWyr1f",
  "key18": "QPFhruwigSqbERqFJ4t9in3ScHUQhwMUzgmXb7rViNQer2n416K2X3oaqn37yey21Ukga4CWJ5ru77Wi53FzWbc",
  "key19": "5ZzT7XwLyGESp9E9AhTJ2NpcZAcU9Bpg2CyByYJdt5xwTryPGrVYPYCDv2YWTwoJn9wSh9HNj6ShE3wgA6v9AZNL",
  "key20": "5upbXicG147PXjcfSn6muC5FeqnWEUvYc1GypDyZzZjhg6gUbhBSRfLCs9ReG5eeUZwZmYikDToaNb6vAxWAMTBT",
  "key21": "2dEuFKTnasHMwdY7N9AzBJtRx9h3mjD1XoqXHeYAwVHYvm1ffHSAhcseMXcCeP9YySJ8bHTu4tMCKK4zB1L1xVz",
  "key22": "44heg6vVTCPW48hKGFKzVxYybMnfqWwbWed8x5oF58vf9T3NxrBVYq8VqQFmiNm3qpYJQWSJsEWHR1eTjQ4fsMdL",
  "key23": "2PbbsFTN9r6gXHtt1SyE17WBY2zB7FTUK1D8vYizGnG6YSTS3nRMrZ6Ks2k1gHHm8JU7V1drNVoVkPj1MNHk1SGw",
  "key24": "48cDQZFXrU16hCdHcFMkBx7kaNGDYQrZfjoozfRCxA1p5nT3JCPmZfAUCUhW1LsDwjzL4hHpY1jmjge5SYaWywTJ",
  "key25": "5L7nmQ3B1wCzSV2KzwtYN68i9WvU5EvKb9Pv3hHyqLahjgBTB3UodR6ncns5XaG1bVn3qKd66z4mBYaNqcqdvEYV",
  "key26": "5s8NrtwMaDmzuSJNxSJ7ApT1JphVS4PbRsD48dn4xDiZmJXxfJvVSxoQ6CWewcQhPebGgd4cn1ExULtguje8YLnF",
  "key27": "3q5s7WtaVcMthSp1zKSrac31XUcJ6aoWE16mQjRjjvm51TvUeik63fSEhkVh3S6puogox1e8AsJ7j22PSKBsRkQG",
  "key28": "63zDXBVza5151Uc8yekF86e8ofpR7vXnd91P6DHMn95emrAaDAQV2xNzPPZhsKNf7yJecXTomAkpt4JJVensana7",
  "key29": "3Ftip7nB99YJ2gds4inEYTzPYwKGYiv3GSauS5ZwsfouKqS37NZoTtLunfJjspaqnoPeAitzwDZsXUbFTwGypydU",
  "key30": "Hb1tT7JN38ot6VbQxVeKEuQCgvjyYTq2BmgjJr7BfGJ5o8hcrVToVoxVgbRNuKJ31SZBU7BEBoi2355AShoggRt",
  "key31": "2MECSQdw2Dh2vy2e4zLHX8RzGXK59nEstu7i9zKhLv6qTmwBHGHs8d7QzYEwSsVHAtb1AbF7g8Dr7bTnJRGtfyxX",
  "key32": "4P1yEV6SkT66H9KD5WxKBG1KSUednLzudd9WSxhcb6p8uVhw5JeYLWPXLa8bMXPn3XTq5mXDPVJ2o1K91WzzbAn",
  "key33": "64H2anaEfzC8KwPF5b1MSoNkz9mo7GDiZJ5KD2dQLtuBrEtV1i83UuwYRvmyjdKcPaWC2idZxm4Px4MwVokU8FvH",
  "key34": "5tKNz1Yb5vYAv5i18j3mLzBCjw4fttoJ8khJcd5DNgLM8T1fVTovo7x6K6jUXw7ZuhxTh5jRAjhLzHdtGGjHJ26b",
  "key35": "3ktodcumBAvqWAvYzsYMX7uuwoigWScfAVcMNTTUGgYXX8c3hzyxakwzj12J6YRyKBNfJnYC7vW3jbmhhsBFjoZa",
  "key36": "5Fd5ijvmMrzNjdhVy1nRz4tV3CTbkTdJKCa2rMW3P2gA2dUtb7yEThDqn1QA7oQa5UC3UX5sAy99cWExsNeXWipy",
  "key37": "4Hp6TD68N9FykpuaExpKrmorUhVL86T67pWqeX6JgMd5WNZLauxZScsRFhuspVBxT4hDDCv9Xx4jjHHvWtgys7wT",
  "key38": "2afNYvZExnVenu83BPUZEtoNqNm2Lh4M3kQC6pXHZTfSET4LCeeYh2rwKwNUnXvweuKfcHwbLsPxHLr3atvdY5iX",
  "key39": "3r6EEvaDhEt7C6S9MMRXBYMhgQnDudTDGeFhi1oG6xVe5Qznq9XmvcrCpebHd5EhYDnJ1UA1KiWkjKoCyokVy21z",
  "key40": "3T31TehLSRwfrBU976qsKL1iwRZckguUw3oE5nh4QB7BMWQvmzSG6W143SdQYTjyoiyXys4M2gExbTHkFYhF6EtQ",
  "key41": "kBFQWv3XLKFYcQvcQ7hL4XHmetshn53ijw8kC36ncPppx6gM3KNUE3rVSNPh5qVbVimDyxBmE7atvbhQCvwrFWG",
  "key42": "57YnuHfTExzhnWapFgnCkDUUYwe7KUtAQcUaJ8aKvCYU6CerkW9g5KgQUjCUrcF2H2sb6ShDh5Vf2xYqGBmsSxPA",
  "key43": "8aBLFs74zmzyZJZazKJvR97hcBwimdZBSn21vvvwDiAH8w2VXWvdAMVuYoU2vcNqe8mfAemZ5Jr7ibMXmffywzM",
  "key44": "4Vj7en2ugpgXxUjZeu5Tp2ZukvNVxM1TBzxGoxiKmJXXW9pps8yoMF959wUUz8MHMvmk5VaPGRgoRDYNXFttfNpV",
  "key45": "23wLrLMtLkZBi2nzcfH37YPrWtVsztrpHYK8hww7FP2XRWbaCdg57bSRydKFYU5NoqxmCKJQMvtthv5T5vfyckaF",
  "key46": "5Lw2qMi2FDNeEnN2iiXbZqaL6AziT1KQrXFUHk9n4VjJTFjkZmZRrUnF5CXt5tpUzZmgGYTxrbq2VR6uxamtr1Wa",
  "key47": "4Q2uqUdWP2PMWuoQm9jBL654VjQBsRuFS2Ae1LzQ8QF1F8u54EttoF6XQKFQbEEyBt2QXL5HynpakpQXWS7WRuS8",
  "key48": "4Bvydw7cQ4ex4N3Pr1yy44NGQ7hYT5RR1FipkioULx4Na3xSk94sfBtGEYZFVwyhJjeE227tX1x7VkDYCG2bCspt"
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
