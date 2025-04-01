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
    "BtnEbXXWjF4MwbTQ4XzcYQNTnqd6BZWqPy2fzoBb57aXmbgQKkzUmcPSurhgBWRHaaAKQ9x7vuar8umjuSsSaC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3witv5hkzEPHggeTM1zxWyQp7Ut66CzMx6kwisAgzZQa7L19dqdE7ZgiYSx6xF7CpJr3nznsdZbF4dAXYbRC8S3F",
  "key1": "1gzpqBkAyHPdnAMBwE1t5rizbd4LkStY8b1XhEawj83Kzrpr58dwpP7vyWPW57mGt2tNbr54psshYgttQVicopi",
  "key2": "63vC7DaKHZ9k8Nm2K5NTHFuQQedbet6rWVhjm4473pvipbHUYPW8ppxpmnt3xVsgvw9bvDtn4PRJMnE5urkyPiMp",
  "key3": "5H3s1TF6y2CdBSSPeysEgsV2J3aSiU9u5jKHviNNXf7CGFSujb5KY5sxgSHAh4HVJrBZGd6AaoRFaRLQsnRVss3a",
  "key4": "3GTiLgZnqJe99kqPRqHpvTcupqup7sSHnCGVqwafCdQNUauFpKUZMf93aTrxd96p2xtVFb4ZXxmdQ3ArVbzFYLqq",
  "key5": "64MG9Fvvh4wAK9V9wMUvJWLkJhcnbCX7yoLe5EBuA5smwRLv7p61gkGSE69BsdGDs2tk887zQnTBz5Bdck3DG1MG",
  "key6": "4xxkhF4eo9rMEc5sQ2SfGWRQzTQoTRCnCjvBCMugfJzbuVMoNVLiZgFDPL8YnuTUkJHkbeErKE416E1B7KeQqE32",
  "key7": "662wmwaq2MMyLSVLtyP3CCtHpGnoNnvqYvXEBoj5GGx83166fXNdeh3EHeSE4Kdtkjy7Tj7HsDJ4pPeNHu36CgrV",
  "key8": "46aopKcaJ54uC2MK9X3ae8bSMKtNo2Wd5UWCyw9hrKTPotBBtbmYdC1YqarpeYfQ6FyZTc2QubNQhb8qoa12PEKB",
  "key9": "57uBDHiyGQmyLJrJVhp2FeNCUrvcp8b1Uew8aB2VeKbMyVLat6X7nyNjDZHw5LvEUTtkXiUjmTXjPGL5R3FnGBHH",
  "key10": "41Xf1DWzEpHNmC29suSRa39os5oCMVpAGbfuvDqDNdM8QqCnuuAG8NHa2vvYSUKA8DsStjmPpofpbJKxkdQcFhwR",
  "key11": "5znYAPnCkjvCqP4bb86E6ZBG7ocuuYCY9WNpSSo7YBRjcAxfMx7G9YwgkybdEUvM1AwsQayMMYRT67XWckh4J6Lj",
  "key12": "5oPNehmi1Zwp9FMTbcUrxqm3bdtvnBf23E7SpEeZgt54tBpHPvJjzPt6AdBABmFbFgqzSCv6QApG77mDd2YVLkw6",
  "key13": "4eVUwZjH1NFpBnBYA7DQPKDWoQuYj4o1hrMR1V5dtUV4ev8U9aVLdL1joUpa91ohuGQFvrA9v14EpC5c4wz2wxEy",
  "key14": "HUPjxYpdG4CY56Bvj7DRmXGo3HpyU6g6mKz3rCRMtXazLvKVYcRwNam6mBuuCRgjb2N5xW2mnQYy5VrxMXRb8FL",
  "key15": "5cbYCZk1DfSw6Cy7uDGiKP8bU5yx7jnNTRZTqYyyN1CvCM6W2NT11ja82GoVbtAKRZucUmKAUQYyPQwwtenk87sp",
  "key16": "5g8E5uQwVZdXFkCrYrm4pyCAwYaTnFRKwEzC4ZnXpSAJraRkTjoyzrtzNCGb9vu2aVycuZnegzm95CFQwh9Y1GJU",
  "key17": "4k2cs8PEgSW64pwGJazv9RBsBFfutuvixaYrCcHdXYoniBAeEYQ4qFHWEjxmCkFLL92kueegJM7ZmSFQ3MdeoMBr",
  "key18": "3wNAKeNoRAWs4ER9dqjHfZvNJaUu5rYpi3sEKAgPwWhmiEdwwZiuSfn69x3MSAHUWZd4Hy9zHs9F25arZXNBwAUJ",
  "key19": "26kNE1WMg36Zr1rnyYBs2cKAniNfaUFvZibMpZCwLGUFU2GaFQxGvVGxnKG1sPtBHDDtRX4CGw6MvhMLu4ACadSo",
  "key20": "3WyB6Fm9j37WPmVK6uJ4oTrQDGfowNShA34McnubzkS8RzgqotDFmAdzAYMEkpRaQQjAcSRytzgvNes59ijGK2JU",
  "key21": "67MqmoKHaVE8bGgs7YGzruwFYE55T624VQSzwdWYa5FEbHn5DPj2oSvRhMkyh2AUWKK9DiCKfUe1ifkGgRqhFBo1",
  "key22": "rFvQwLMFMcbZZPxP9ZVd9YD5ugrStHF7VbB186JB7LADKCPwrFvRve5xJKuNuA6g3hj6A6PziDku7Ed7pxkRcqe",
  "key23": "RhEWMro1fJYvJoQLDY2kfFoCFbNMyxPHc5Q9875JMoJE7hZpsLrAzBJy9ywwTQVHQqktGMw64DZqnfPV4WbngWD",
  "key24": "GpT6SuK29ByRrcXZtqHSKGaZ2GBm9AR2KawtNM1wuc88YsajrgcqnuJDNfPeDk18TtYmcdQawpFASSjZJEmmun2",
  "key25": "3aUDaBGnyGqC8gyQfQn45yxoHvMVnzAWYiY6UKGhhFnEASkDy9bJvqomDhkxwweSYwBQfFyDeQtumJbfM2qPTQw5",
  "key26": "2K2HyTNSdVhcnmUigHvpnJzqkDMD9KCAqzvZAC7LVbguRfq2CSJAMLZmPhgZBbbSqV6dEZspr2g7mN8KonmbHdmY",
  "key27": "39TLh6APeWUkY8jL4XA5sSvTb47K629bwxaV8yGGdnpxgjdJvEHC72t2WAuVHFmJcewDmTkVPwJByMXPoRqN8SXi",
  "key28": "48USs5JW2DFdGvnfgtt2SfTYasDCTumW8MaUAeQkRxFqfk5WPfs6yxAo2hvLP9t5HPhoL69y2t2geSY3S5D3BBNg",
  "key29": "47KrEv4HcXLNm482qn4q27R3CfYm3gUtfkrQaTG7tvHEj5RG77zYF6NFW4BxANwyjvH9Tquwpr5kmVHbq97Fn2Ae",
  "key30": "2aGEvUqQwvdfq9Sw7fFkmz6Aip1go5Ex2sgWyhkVa7kwpUMNaPw4gbnJfSURguejjXTEArNMpni6KAQFZnP1fdaZ"
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
