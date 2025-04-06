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
    "33Kj1Fj15FavoEeAjVMmy5hsLMZaK4fv9HVS27Z1Ch58HH4BpByopn83peD3mHpAkRMTJaCtnVKEfpJHZLRjk3sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jQ39GdkrdoMEAeRevRTT4ScZj9SU4HSNqdWuR91EwMQ2Lccwv6ynyyqBuqo8bmU5VXoXmiLfhQBzqgeB6Mt94N",
  "key1": "5xPbsKVD62dZckM3FjvCgozwnet34t3ARxwUJcYh241vBo53n7YyUhQevTSTfBB6EzxwCXSrzxNypKwsCvf8TLga",
  "key2": "2bS5AGbpRScKYQymMwXTYepsuLgomMJYKiX5Ke1akLxRGaUmSCiyBp5ZuzhSqus3SLWbZx1KkB18BC3XgysiBZ9S",
  "key3": "nRVhv4byuMuxkoxnKkdjohjL94RsvPvwcevxz5Lba3omqcVNM962RGNPezwcf5UemfTbG6rxq8KRkcVGE1rojk1",
  "key4": "2VymDvxnkFd4hyxSbyd6sDmfJC2hbgFahboBFL2fxNuBbnDGeogKHT6Rje7j2qpRkMNJvPUonMJJz6cKhW5gAEoC",
  "key5": "3zdDUAeYemusmShATeNFgKvZ7EfepniPXHEMyVenB8nEgta5heibL7wWua1BXfFsELJ7ebxbpYiKd2GuH52jZd5r",
  "key6": "53iyi2Cekk4qzjb4ECFVxoqu98qi6J7mRqfaphgnbS9e6YNJJyGhS9w6id1SkzwJQfVVvVSxeJLX6mLP5eRG8wnw",
  "key7": "2QTdYEGvXbPMxYfWXSLmfQTdFjx7X52NRMX767qMvym3KQ1eyT3uwvLXZ6Cis1tKMqkSUje9LRv3e6nzRfaiY6RC",
  "key8": "2AGBLP6tHiqWA837eSrJabjSDo8kuocFmCRfrCXd9xAiFE3JHWvXqG5Lj4ZEYT2SC3fFGXgifvp6CQjNGxaLR4EM",
  "key9": "PLnuhn8y6BNF68uECq4HDb3Be7YtQyHeX2yJKvMVrSxu9vywcNj9yz4wdChByxecsHhkKL6ZtDA5T7Nf6bi2KYQ",
  "key10": "3C65xULqkGfs6Ac92dJ44JhAGWNxptJqDF2Y4s6HT3oceMr3o1PYJDHVehZ5ZVcwVXiHSwmvcq5SzM35CzUnMibf",
  "key11": "2U5BRPrE2kRJj8JFgPnQYWm9RY9U85C13jTRYkBN1XXmf8GKb1bwGhrHFXndPNhbc1hPEubviYfApQuJNdT8iqJC",
  "key12": "3r12C72cjdFpPrMxQL3G94Z8HigcRww9QomcMkzmjtKUnC2ckbMQmHiqB1spKQDqQU6m3GUVvx2GU3sr33xHDjRy",
  "key13": "2tPkmd43PwbVijYwSAG2yhbAJMMs9LYc2gmnWuBWhZHVsn1S83EDN1uHSNQCA3XGjfsdFEfzbyftpkKYRu4ZvGHs",
  "key14": "4fw9q5RWn9WntPs88B1L8tPQr6uL5xZ1fhoAtLwhvs4oni4iYgBXZWkMvu46uuAX1enKc14gtvrnHYuBH4tLE8Gc",
  "key15": "4dxwjgpxyMPNNqTnDMELrwzjdrYxeHFWWmmM44yywymicnyyHT6DUTFamK4gAToHQx1nf2vKudrcCeeP787kSjf8",
  "key16": "67fbEJVyGLf1HiKUxrhZ1PV6jdtjbnLb4R5GRuhkxuPruddKgEcVxWmRW1VznzUaf1wuUkwPQ8dkyAnJUdHuA3Zp",
  "key17": "nNHzbJVKaTHtPvhkY82Xz4gL81PtjjTSJL9PPhvKi7v46ALZ2RAExx5yE9eY8wtxgEfNaHL9HjodbCBDxBPysqt",
  "key18": "2GxQCtyDT4di7NRVkhL6QYWJkhCQ6tVXLTKXwzXqcxz9L7LMMPMFS19YAcevVofqwRZDdKNYroexdbx1G2WXxCNc",
  "key19": "4fusCh131i13UFemKEnKuXQKso61yKcFC2c4B3jPo86iGiGEoMsrNuqGskHX4KTEqinpRvSsMxJB7bXogAcfRXj2",
  "key20": "2kuph5LyZR9yJ736c5PKqCTAeEDJSJgxcyur43xH9G9oedUkaouXZCGmf4yrysMEsPgeJUatMsf9o7JUSZ5Y9taT",
  "key21": "3Qs8Jz9cqzSjnnG7SSQ75hruPUvKXh8QrwE7KxFYkN87LixiHzQDEV1m4So9PNLfaJqHzDWc1MYWkJXriXJBcrKD",
  "key22": "5g1q7SnM7tkvonmNdueZS98kFZsSza1RZfFnJLotbXujdyRu3BVzH2Ck3cPDDrhWSfirivzDnZNYDWb3PkaxnT1G",
  "key23": "2RhDGDpqNHDY6VH3DVy4eEiToxhgZhfyZm6vsAH54rjbnH76GjzDUVvJfsRwaxFudtcf4VyGnfNrbi8Vz2FBmYxG",
  "key24": "3q9AdeBAKR84Q72JewdVLBu1poDnhT21S3H4V7n4mVkB4XnjVtLdaRGJZ33Tfi5mJfTCpfbLHCFsVHrraBShReQb",
  "key25": "2HMRWuiVMTCGF7YWLa3uk3m1iqTnTbzvD3PRceLVYEm7YhiDJpY9og9phZ7os3f9dZYZzym7JtgadhPWYXTzn58e",
  "key26": "zMuZBmSbt6FQmwY5SPpCHpe4UZAEu3UJ4dyZhHqMwpitdk6Tg97jPdGD1Z3Ky3GXqzGqFUA2izjLQAKh8CZoPkA",
  "key27": "3TJDnbwemuwyUmV7Uy44U2EqVjYuPXuhtf7AM1MRJ1NBuYAv1srbfBxhyxsLEfbPTXhYcE1TzMGjtj93wYNgsa2J",
  "key28": "3jMpTmpcyMVaHuHPwymdrrBN5yC5Y42rEYiqGDGitfofJZmWTWEY1o7mpBtpghT4tfy3MFE1ebbjvw5DC16VBJ3Q",
  "key29": "3NfpPDXciHUfUYd3PodTVmBoeX2RJk7FFqiJeDfiRSM6QmRhyvfKChorN8PdAMpQitWfRHhpMKs3Ed7D5LMgSeeN",
  "key30": "4zRdZDcTiPny1mydTvUNuRdTMh3zFPLv1sjDoHZBL1HqWuv698EXYpcomaPTxE5FDzvijvzhnAq6N3VxnQSxJVMQ",
  "key31": "rRSPLiJdJ9PskiekiaYnW3LNeY6J15VwQyApaik8yZWdoU75s5TSqVZci5WZMN8Ua6KKGBtY42HaBtnaHdE4x6e",
  "key32": "2qejJF7yBb17bwhE6Gc4SUos7MqqWqdMB5CDVJEonAcW58mM4goXpyim5F92DuBVZ1zaC9t1okMpAbTEPi8NAstu",
  "key33": "5NHwA9Nm5VexTtBmFF3HW7U9NfPWtDgkYv91TEzDPy89Jqc1FeENaUwvLL9hFLt14vCtQNzEfESjsp35HEZzum6u",
  "key34": "nJR5n1Q5M5CfiqkvCaabH6mB6jsscAdbPZHDN4x5PLwY7C2k13mhkuMwavTDzDz4QkkCDNhCG3CHTsAK7Q1pmyv",
  "key35": "3ejfdCJKUuM725AZsAcLhvJCzAFaZbT9nFV3MZdegdKKCLUrz4SdqkQXXLCAtArfyJPy31Upg62gbvkkrNWcd26m"
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
