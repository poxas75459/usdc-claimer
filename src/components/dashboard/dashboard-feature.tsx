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
    "5yzVFDg6P9tzvEWrSmFFAZVXpD18uT5PTL31gfyZy8urdEiJq12voxm9T83gXkPTUhCz5np62ys49PPL9hmdMPtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKWae6zr7D5cP6BJfK311khCif7gWwM38hLDhrxSEnoairwexRnezsLEMMsjy6YfnzNYmtpuXkY752nT8aWNC5t",
  "key1": "3GvYTkVCrvLBuNAtHfjUsAEpyQJnE8jnAem547xD5KomxgsyTAcaVUec5EZvw1h7R9L2MSvFLa4tyf26aDkm6RW9",
  "key2": "DLjb11qY35R5ofz8NjFPY7NPpG555pWiq27rLkT5jCd35UjbpBNu1KQgX1GmGW9wP4TLUB2MngqJXcG9rQmmKyk",
  "key3": "4griR75QRVX26dNV2jnmvSBvcNpHQfYKscT7ncarDMwXGYFb1ZsXf1KdY4GbryubYuJNvrunYb2aNpYvNaxwaAXp",
  "key4": "3jhQJxGhg8s2dEs3vcLR7tceKskycicwpCMBihD7c7iftrHwXEMW9AFaVKmVkD3mEwLCeo1VyWvTEQeSbrF7GKxw",
  "key5": "45u26otwYHcy3DsYfrNHseYhayBUJuapp9i8bK3NDGzSynaf8kk8PmesrdtspCyfvPGeu2xUjeq4MXqKkWgg7Ken",
  "key6": "5ZYEDXcqFyGZHAZC6Ev8DYekEiMyovcyfmpCDiPj5prpfx5UaQ7avK9xrnfYBvWg7w4mtgE37sXiVQ5kzgPE1Fn1",
  "key7": "2wPioE91pFB4xTC6Z5LMssdsPQxqRKJ7SZstk4CPM2UKT3QX2hgirCu8tPFj7UzKCMah1etQN8sQ9HAwMtDYFRbT",
  "key8": "5A8Swoj2BvYDS6XF8y62R3di1TXA1fm31q93y6qUMz38Jdqy2zC6S36xxynJg9m3mgFia5y2FXWKBe5HGRy1vyAW",
  "key9": "5u5eJTcLk6xNUhd4JS2toiKbuyAo9RUzPNZncZPH9Qg97NVsWykX7Wo7LC5qghQa5eAEKbguD8eNkVDLewQuhx5u",
  "key10": "2jESGXUTXW6LjhVMCMQ5SYd68feFm45GfZWxWorymm87bUn7FrVYhRnVmiwf6BCgBZBRvDafpVxur9nvXW5wEtAH",
  "key11": "4QXG443JEdqnHiRyC8iAbf8N5sTCoLPjDxkcAh2m2cmMnUMDvZeyGHVEcypjTJDh57eeyYHnYY1TdeyhW82nTy2",
  "key12": "2SQUNMuWr6Pf8myLjwSUbEC2if5G5jeJwuwN6XnVp1YsZWYcPsXPsA5VaeAbHNTLFPdGumdUHR2guDtmnbC58F7b",
  "key13": "G7VEogFgaUccQ2MT9GZKRBn7KFc89e49xVMJAPGrYm9bbj4H6miM6fVowHuojgtiMwFwj6NzpGddeDwtiZeStaa",
  "key14": "334KU51Zy2pmR2a44Xsf9tP4N9tFRSsNhBsh91cyUBo2GDjZiybxtNzcNdPDSUqhvEcNMcjwUcwp3v6g2WKFKc9f",
  "key15": "2GgLWdXvwRbSPmbqca7exN3STZBmaT1ov4hFKVqSKhFJoKdJntU7aSz5y516KqLrthEHBnptpHXTwpt67QgTSscj",
  "key16": "2nbueTPqSp63XFa4uZteCWc49DgRqpqxKFLa21yMZjUPD7cd8V4tfKa8s3S7uaqaWLDDcUu9C2AExkytzvc7V9LT",
  "key17": "62cUVPsFtqHuR53rnUm1jzEmRFBwGeGYa8Lj6dYaD5gbWaArriMxPqtpsjTpqPwKg6cUt7fiqFrrY1ruL3oVgLyc",
  "key18": "3moAY1tNkW82ktucv83GvbpDwgX6VBoofQmobkEv93tFFgPRBkyxsAe7s6JcNBHibxtmEmmAgj6iGK9CKG82qmbz",
  "key19": "2kMbLPqHvaBUsMCj8WpaGBTrT7i9Hn825rHSitVFJBTcj4ckzZjT2mUHfmQ5ivgd7vWSUhz5jcHTj52eJqwzA2qj",
  "key20": "2DspQ5B8bsrY9FzqJcS8BHKfhdvaj1PtNsfMFbsYDvghnjm1aq5XNKTvmx7LakNeH5gh2yuVZm183jAJZMkkbXcd",
  "key21": "5j6pH1S2dY5sFLZxKjdy24uDSmgafS9M3NKZvVZ6p2DNyPhy7UFULWxmbCPuFdA5RuK5hqSzPAra4tAG484g56i9",
  "key22": "4ef6TyCDPnsXKEBqePaU6VL748XM7ACeZ7goGVuMtTKNQ9VnRsh7AZbMSGiCNo3cE8FZjYXBke6UBQnzh9BWU6JE",
  "key23": "4hZDxajqtLruouzwvfzhWvGAMF9HU9vTYghBWZMrEvSKkPDeWH7rJaaqakeNQsKRnKAHwtmN5VkF8qbRkn1ijoTU",
  "key24": "2GMsnSLuPyPbk7gtbqMym3rpC33zqo11tSbUH6sS1r1amfXgb3UR3baQL4F9id8edjTTE2kxjaUH1n8vxacYRGFh",
  "key25": "4cFvCZCNrKex7VFGMC9KuQdJhTonAtp3cYRen5kPrgpwaij5MPVcaADDZdFFTPtyZo8NUrczoTboebbCF2rDCwv7",
  "key26": "36KtUQoVGFwHp2tzstQcJyXEg4vZiB4c1jDfuMM6DH1HmU3vLQ9vwqcmzPsmJuacGvaHmBq7wXdkbgdzqezPjoPa",
  "key27": "5jnfiSui1nci6U3dcbpJqSQa8YrH5DEhimjBqpTeMd4i4UdxaqBW3LbSkJoX6nthdMZ9qQkQXGryVZUetv2pGw24",
  "key28": "3PrNzRRYDShYp1rKsSLzYc2nyoJCZGnh7h1pUVgJYBeVDkjhQFvC8PM4kJkkSN79owr8j768SZRjEAD9pNgrrumC",
  "key29": "4MfvqNqGJYb78bwbSCp7xehfqegfFVaSTWnLkLNoshLiyjC5DJCoP9vWBtxm1733G2tib6N3MHqhwrMLV3YNjqk5",
  "key30": "2TboKAwC1LgmKVJccCH5DDMgmzqJJhijDJkVKPHzKBjFuC7FfAubgWYLmXyCVM5fHfJBbf7zVVYZcDkV1qRCKWgq",
  "key31": "3MBeyzaGEDFnjijNrn6FibvKMDdWufxhMJnhpSKb1yxL2FBuXGK3crnyFCzuDYd1WtMCEPJPHpgGJBo9UhQVGgyV",
  "key32": "5GnkuAGv9bSkn6n1qr5FkG51rzV5ijPtf5dxwpdmsPVyZ5fmRV65WimKsX34MRKV3PU7RqTZu37tnm63TBp3reCa",
  "key33": "5tzUSwZ6WwYSSV4bV4E1NpuARbiCHAkqizPS3vPjZN7rEfG35n59M2KKCdnR3bnCEUYdFk3DmpwV7KbAtwSoFygf",
  "key34": "3ozFYw6KB6Qf8FkNnMLpey1sG966caYMArHRBkuZGdZh6yG42UtDwHV1Zv7A53qc4RaNRAxsLDjgzbVhhDjHushP",
  "key35": "3a7u6X77zcdVYY2HdJRbGVtsGUyBcoCAwfdmwd8Br5aunjzyM2VmooKXKRTy248x7qTcyvUfVr9ZJX8CEmWdjCJf",
  "key36": "59H5AZa1nxZjP94WjT1E73BFKCkSpYL3NWpTnH93YxNEZyf4t94c1iFfHx2nM79Egk6ii19AUgw6SnRbQou13JRL"
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
