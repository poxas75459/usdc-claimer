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
    "545sMN5kTh6wi8cNNN3rcbi3PCcWzrL1bLedEHvTbsBtDGZQmnTZGjXDweLvmuqh82K5eG2yom5BEd62PWQfVQxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFYRaBwVUUXEWFctBy3cKpk7ycTccftZCjXSSMZozwVNcCtYZ5bHHGQBqtPsV442yRMP1Eg66aAdMTzuCRaHt66",
  "key1": "2Y2qqfVUiDCEM2ec8wQNZSjujCoTUWFE5Hdzyuq1Fx1MZp47X8eWGeF6MB2ckux91AbzxEyxEL2LXcWSXyNM7eRX",
  "key2": "4BcwHAfxDckCYcSkH2xwBmz6QTQrNgKSe57JebrnuPyirPYxp9bfS5Lv6VXszSB7SgErQ9qaL4N7KX4g3mqgNKYL",
  "key3": "5AbJqoBrakXEGMvmfBqRbptsYHAxsqHAXW3c7Qc7ZbTyxtD3dvxUrqGb8nEjxetbtd2nAfv9dGZH3GjWPmaHXZfm",
  "key4": "3yF4auh87UcHuACxegeDaGH5om1hpDwShS2TH7t3VbFZXewsFwWftxBfnQ792iHBNJWa6kYWPPuWsQfDXfLJfEjF",
  "key5": "4FjbBzQoSnazWDygBinA1YnhgKpLkTDFQBrQKjBi3RnDzR342WDtXjfyHq9twXSAaPjjPGheJYM4e6GsycqmvsQE",
  "key6": "5p2gsPtdX8MHX3eNnBSqhzSzUNK22kczGKMaMFFsjaFBDHGdpqgteQXGD8pjXukVGabE8ZobWfrf7u8177SLzw1n",
  "key7": "4fYcM5ep7D6AHz3VsAJvZmdAiPnoYJwk3TmiSQdRxFxxTGCXmFqAtmcNiS7FL9CtjfpjgChQWCf2ag5rSVQbpHdP",
  "key8": "2QCvoUTTxUb76wMHxgbCC2tsCc93u16JaULC8dATH4JgS8aBfNYuW6g4ChhqfTDAPGJ96wwtNbP7HkSrwDTtZCJ6",
  "key9": "3a4e6G6oAtj1oc4gfNtWMZLmqNf4dXjiLCYTEQQsff3RiEenpscoeBqJUTJnbAZtQN4hhVG5KBhcLHCwwAkgDhJp",
  "key10": "2U21pma6vtC8heRVrVgboyBNzUQkYbj7EgYtT4H4MpwBJmbSKuzohC29skBcQ4EC21XcLFApu2Ar65TdComrKpwh",
  "key11": "5CttqXJzs9BHpmztt1wHPRNXZ18K578s9v5YdnULKtHxyp7pSA1u45j2TWjdBR9nMoCeayPC3CtgkxrBHwSumYNo",
  "key12": "TDpctySeJX8Yo5FUJL2N6QcQgqWETy2Qu3f8RoHBTRHU2qofyWqLVoXttRw9ixCff9kxFvyA7h2hc5qcBRNtK5q",
  "key13": "2PqNpc7UHWoHnLA2ZCuABajdiQM4dhKsD9srhQAS7oBy57GpXxfX97XkHrfKeVsRpmhVqWyu6KuCJyhMqeAL72fH",
  "key14": "4Z1zm6JZLm2WCZV6AyjNYbEyTUGmoq9QLQoFtJpFBNwv85UnCZ9jXGajT11MtPqkuPkhdUDwL2AWTcCiktEvarbP",
  "key15": "4UciBTY3V8oRHTQjc1xGVMB44E3JjYDewLKfQKttnp1ZY5dAPXBBXMh1s2GdvtLcPgQe5Pskumm6JagetBRhBUyp",
  "key16": "tEwrmM9QQzWWBXobXNobkn2xNNyZvKc38vAHwWGQJ91GtTyxD3ujWA7DGHPZhtLmRmfvvWTmb6KQ1mrjND9tjxL",
  "key17": "61Tr9oJbsJed9Bhzz8nicjpQ1Q6XurCZM9hezDbkdvoiR9j7ECuoFTY6r7a5jMnuEcgf2P7HB9JBrX2RkjDmUrQp",
  "key18": "5F6VafiXWdAitFke3D2Xujsdty8AstF5DHbDYyr5wKvVbQC5kp4PZAHhpnbH2jRdvMG8nGLG6GN27VKrFBJbZNSK",
  "key19": "4SFoNAunvsfa5dH9ieVKp1DFbuLHFWoVhePygEAvhn86v77Huv2fGFxfyZ6NoYkneSnRx7kRRdeCyVx1yQXCQ5z",
  "key20": "p7ipwRUdJQZKG43qzdbCFDUcSxvAoBxJcNXWuyY8i9P5AXZZQhH6YjJXWzZeATKen2oiA6RPNnhMw3FJHhYcfPZ",
  "key21": "4LTftA4C6TYxmEKZRcigzMVTZ7ggWdMdaBfsgKgiCN1D2VQZ8WGj13SsSn6Pqirp39NhvszZdM2GeGgtt3TxsuDz",
  "key22": "39zcXPM976Fohf3R4L47uG9ncCmsUL51BydQ4KWBm6TgS582wxFHRFqpJzDvwmTpgWeDW7ZcZaCy6EZztVvEt9ix",
  "key23": "27scS4tpeBZ3czxGmEd3EYfUrCaRFUbx4scgdb27NV49aKddr5JNfn2ANVJwQyEcXhCt7VQD2UyHzwkW5otxJ7SB",
  "key24": "36a4TKPSb7aHNnp7vpo4rFfQsnH6pRR6y1E7LpDSLDBo8t5WUYT3EzX5bNADSK5e1RSwYn2371zf59iSpeSvcNEi",
  "key25": "5xtk8pr9sfiC1k3NcbTgM4tUtHHebSVm5QwyKetkUmqYNbPMyqJ9M9dBoSpriUHe68y1SrM4sHrpjhKQPhK6zB7j",
  "key26": "23dyV2y5HiFjxCxCiZypNHhLBZrJ5J4m3vJCXbAdu4ND47RxFbYfh5u3Cu4BUmNGcVj8B23hUEjqGTjfmfJmA6Co",
  "key27": "64zScqxXZYSkJnGKAbJKJReZw53dPYiwuWaCWWvVLPfDEuoZJiyGYKk8bBH23ArjBQERPfLvnPi7n45UPAkDmYVN",
  "key28": "5ZDpJcrsxpNNgV237R57Q9Pif4ifrpSQaXhDzJcDMtndeYYFKrcaK5iDjYmoyDVRvyDqMpW6WjRfpo9TAqKUX6Wu",
  "key29": "4HNVvv8QdMqumpMfRCZj6we7h5ipFK8YYmiwHr6MQBRK7bLttxXSqQphbj6vCdhE9zzXoSZbUiEd1e9cRWXUaPF",
  "key30": "49x8UST3r8FZ37ansrzyKYyTGxCHqC7NZB1qP9AhYdgGABMDX2hgksb9BMPnD5nS5vshpMPQ2rpmCxwetgeFchmQ",
  "key31": "5TNRYKstE2QC1hj5aZjdz8yFUG6rTxWvkzoUDJuGaCVkHVKPLZmT7w5SGyJAgXpYuURvcdVzkKeGiS7agGqL872r",
  "key32": "3tcrLKw9RDkPYYerLMUYuvSdERAbdz8STYLh18ZKFQgM3oreQ67hsibEWCb1zUULnJVz9Kc1G53EwrweW4q7PU5K"
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
