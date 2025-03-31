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
    "59kmKm6NccWD4Wok4Qw5eT3CBpZn5e44AHSXf4Qw2FTKysArYg2ZJyajZS4pt7LZHfj8eHv5tta1hvbgTZTyHYBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kj31NRNPykmB24zRkw7cZQzPVzkQ3nYSSvVLXocLrEvH6qx9QhkrUAa7YqZX9ZN9gZ1kpqvg3Q7a2e2HVDzUYzt",
  "key1": "2obYVvYEPri9gTymfBbZEXeZzaKr6hbNCe4CKYERxWoraynU2NUizUXvpjiNBWwWFRy39WuiSbs658tJvVqJY4r4",
  "key2": "26eJRiEN4JnphFKvSvXyH4AW31VwJigde5bCYvLpJscNbmdHdqaYrR68MM4xa4ieVdY8qwPAYDoynnJPVzmWfPez",
  "key3": "5tHTpBP3cBLbWn1UYYTFZvwp3tWsTXXPzEsnU1P7mmAdkbUbtid6H9REN4TkK9mc7Qq7ajRP8jNhGkqQ5TrMCAgA",
  "key4": "5yifyDXyYspatS4d5U8bXRiwTXtH8eazHzhE9ZmGMx4aF4wWU6Jd9HpGPskqnqTKFG1zTFRRdcqeyP5jqeYckRKA",
  "key5": "646azZkwD1MrSvMeVjVXu58nv1CNG36osMw5WDjzp26JY8CGT6733iaDjyEjSkM8uTvdLJpyCC8Drv4J9z2pjXEs",
  "key6": "3UMgUA4PCQFYo5wHw7s3BPjXxbuUi5N6U1hEKnCf9xoC3Eu3yjXpysoug7KCLcjt7eCMo411ZaSYtb3bC9PCuqDG",
  "key7": "38P2soK1HWPLgMPKvx2AqfwCDLy99dZp4jPWyNea9MFaWD7zmMU2dFdU54AWvJAy8CB7gZLvmMsXYuQVC8qvsnXq",
  "key8": "3HK6cDP1DLqqp62ebvRM4A5AKC8bucJHh4VzhRrVNidbxLH1gjsxfsycaWaEjt6DVNc3s52Dzsa5mhm7mT8Bh3p7",
  "key9": "5v5aoft9PEm8GPMAf8dxJHPUPLN1Scj5LGRX8BX2toJpAcTRuTJHF1CbTicwzcTwALp9QAEaTjjNqTLxc3uj5JVj",
  "key10": "34dZMUs4iChvbt8z6Xnf4Ke87zyGa58cWnnCKYgDouofqQdZgQQWkpQVaiFsvct9xRw1WdZHKghsY9qZmSa2k1GC",
  "key11": "65VUg4184Gurj3moEy99SE9RoKpzE5zM4qL5MPq3v4ndY5p4duPBoxLHnxs7C1JzseZXbtgMje7gd8PdgfwaBELC",
  "key12": "Eq5Ev8WpunzadkKzRXTT9yP36P7R84qNKbZsnpdB6BrRBfphuCMjpjcS9iwjWmw4DkmZRWzkaTMkejXXiMn7KgM",
  "key13": "2Li1CZnVk41tc9WkWgoHu9nxMJCisnEPBszb37EFVm99xoy6yB7aaCa4pSLaA5BEeUCsRWopyenTtBAF4ab1wRiN",
  "key14": "nPXXxtQLtSe1bKyUg2d6f2LKVLtrrEGoRuDa63cKMJqJZrDcCCR1LDiBF8w1MZ7woS1LaxWCSCUP5u6PdCcBBQG",
  "key15": "y3mAa75WkUCL8Qb5KK4tQASHFWeAga7pU1CaSUs4wZJoKoPLTP6KRbMLxzSojtxFsmJE5bXeuJxN6qznduVtaWz",
  "key16": "45VPjtDVRuoTSuC2vfyH4rnfpjsUWBX6792PDeCFsAp9oXsDq8CH1cESjVFuiEgpmDHTLkmUEYXgVyvKFufv4wsW",
  "key17": "4gS7xCPTrLcB1BJrkux7qGCNpgFbCpNcExN9fq1SmBht3g8hGmvEvhJvUKPRYJ2FRV5iMnGTJo4phwLEXFGJpfso",
  "key18": "4rHmJg4769i2tmwWWnYFxCSLnQXa1e8st1CLMa2gqyeDeKdfM4md4kHVsFNuTwhGFh7mP5DDVni8sA9Xpah7P39c",
  "key19": "4v3F5Tp8x8wWsSad69HsnTNSWAHmff5YiMRj1sxixxZMWGBHsxpJ3gGeY1ysEmnbmnSkGUdzCgLxPTyXrnShLPdN",
  "key20": "4dscFJGoKZZdWmyNQ5uCb6RBEnTMmkM1152fUzaMhwsUMmnsQqaknnSHKEd9qVMKNW1JLjLxaEGYvQTR2HFhR1LR",
  "key21": "CtCjkzgBEY1F9m64KPXoZedQbebZNre69dAkySDUHnw2MF3UHgNvFMwZ6cbL9wxa8MFT7gNovmtyrBUNvfi5XT2",
  "key22": "3WfMBwx77kGvn7Sh31KafgtTGJRgdzKCKjpPGAvgWyQHgm2LbrZVpZAci5arNqRoG84QBPGEfz7qHnGfEwhrieEr",
  "key23": "2RbXxgppALH1TYRrXYNgfQzjLanEMb9KYB2ptHCs6Tg5NMRSF7BZS8vpCYPbi1QyUPgBY9nqyW6cyK9GRBSGgsQP",
  "key24": "UCuv8sdDJhKy8yDepRHYhXaZw5tHuQcLQCVmBjAC2eubtKKq16y7HXUho3Z6bfGEU5hEBEeuThSY7o29jTyEtCD",
  "key25": "39joRGK8nTb98JQxpF3ZCY1qYhbEksJUyfPxD4D6Bi7iqySg4SiAppAwomDNvJUdPkXaWyfW2TTCwhhHjHANiVb1",
  "key26": "aDbVtLUicyTsUpkHZDWZujpEPXM2aRfvCHuL4QLgStiUxu3xuQic6hfSxKiJfNQNH3g5UkP5f9p7BoUuchqkErt",
  "key27": "5SfRkgjxVLDfcvPvXRxfxWNeULuGwQdpDpEPXkLMpNix24v4k2UU7Hxi8ym8ae4WwqrV5pKNZx61u4Gez5SA1GkX",
  "key28": "2LKycQjZCpjh3fHh78vCK1eX3H4ouXYMZKebGfEPX5K5jGpJcGuUYd5fyW4LCDnCUnGPHpu95LzvArzBdvEiXnsD",
  "key29": "xGbrpehbzhZUdcgPmzeq8QRaRmmYahr3J4eqreHBeezv9gEr2fY3zA45akEWBsCMdKbtVTJQn829FLqqzZqvd5R",
  "key30": "4YEt9W9fPtJ3oi85nimtiAfCXsP2Q5GKavExGapw3DbEvFuNC2unKn899PBdghxaLqLFJspyjtjQDrg2F9qE9aaF",
  "key31": "zkGCsbSxpPDJP8DzMT9HZj8wQqe5ZBvMb3XsKsWSCTAissMoQeFLeu8igsV9jQXTABgjDcH26fJt1k2JrkEmEJN",
  "key32": "4APxiMxdKsRM8TSmfLGMDe2kw5xpbYHX1MvTGB35ht8Bx97WecCVcn4gDYRM2821mCM333RR59pmdtAnS9Fjcc4x",
  "key33": "5hwxtLxcnAhqC6xis7fBFqUpGypzHQLKxFVuSRAfihZ5WT4nHfLN6z3phXgaN7UyQs2FB7nxHPYMYkHLkaHWBLtB",
  "key34": "33eqmMmLfBAMN7mYz8RcgbSegZdxQe1NkYDzPgh5Nuu9YB6vjgwwGmDFXu4BXwsmdfCV4td7e7GWGAFh8LqG3ruC",
  "key35": "2N4BhGqkUDuVTLrkVZW7or8QPsyxEqW6YAShh1w8KFf7RySV7FqJj5AimG7zEhfr7CLn7MvJaHv24yzueCpAxDsD",
  "key36": "4JAscuGwdLwVJBLzHmyTwkF925ESuLh1tz2m6v26QZ4P7kfk152NazFreB1QnCEY1UdNtZW1vV2VHPZ4QYAf4ma9",
  "key37": "42x2fQpnjSQmtduGohpbjnrWn1uT9jtMPuZF2PuU1M57x1Cj5tbv7cNaz5j95Jo9X443Q2pLPiz9aPd75WAjXFcN",
  "key38": "55Zj4N78YhM8kGX3Q7p1wszGT2b3sYZMpHcUQizNV35gapVDbmAb3iqrpMTpHLG9gNZLH9XaHrDKroznc4Y4H4nj",
  "key39": "2BkGMhHaUUAV5r2vQTT92998QRDCQWwF3XrzPoDuKQjGaiPQkHxZ6LiBx4M1K4frM6MvRsCGZo5nUW41Pp2MtSiy",
  "key40": "DfKujSECFs4P9BCvoGjejzgGih4vVTMafz86jDK54xepFRbeUeoR78gHaQBHnQa2HAcSzzJYTPiVih9vRoaw3Bj"
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
