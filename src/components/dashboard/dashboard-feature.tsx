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
    "nUmnsWwxrheucBvX6UVbTUxjXbHjkArZfPrnemZML9HrqFDSktxQDV8DtQG1TxmUfRwcdvBHG5H6g5KFqMPjBGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3F5iN2QQ2Rj9BuzcEwmJiEBuiMpUdbZQjoBdu1wkGsiy9GvE3ExV1xWAcKNSyjUGkWF86tenrdZm7Sa8hCSSDA",
  "key1": "4YkkCMKvPLhX6GBjX5c2KP8QCccWt1hUUpiwRxTH1qQHPeei7zMLDYjxfUzRrXwJhtaPCiUoVgEJeVkKWqsNAipy",
  "key2": "4mrN2TDyXRDVQnwRqcU7NrsUfFe4bQwmV2FhbRgGMTu3F8YddxxbRp3Yx5RFNoXfuHEaVghVXrCBNZFf8rR3AbEN",
  "key3": "gPMAHBxeWDY1CUYWcm5PNCdS99CQ1zVT8143sJHeXrT6Tkm7dzdJpURiV7s9NTWKpkJauB7DXQEMgrhb8dq5xYd",
  "key4": "pqCiWtifjXTMTomDAcx26iq3Vk6geLbX68JfwkG49RBCqtxZEaQ8GdNHcYG61gs8WKCfpUfgaz3w8F5wHuiY2PD",
  "key5": "5P6ijtyqqoyhaK9UgS7a2WgeS9PB79zUM2fh9Y1GTgQhPizXwsNPJ3GxdWLbgxDfisVUUC6v2p8FPvT5xAHw3Nxx",
  "key6": "Zyjnv9cB3YY6L4FN8ZVrQ2oXDdvrJ2EDkUSPEgUQYaGrBh2y7EfLpyJpASzHzYLKGUHqhQ25Xjien6D7Hw7mpvH",
  "key7": "2kXCuPAXvKwwae6xKEZz187bxDTghDjD9XAZhXGcDtPwe2nau1rcZrV5iY7rN2kFSYN2Aghxbik3v8DjfmqNBDC4",
  "key8": "5tm9TTRbJLcuhQ8Rryv3gGapx7px2oTFqVPBJmYC7wz5sogug4Vok6kGK7ZdLPPxsntvxxBBUASy1Mc6f7GTS52V",
  "key9": "vTnN3MbzL7L5HqAg1NEpPF348ufgqh7r3fWcW3qaEaiRji5zRcPJvqAFeSHNArf46S13qPhtxYkJ1RsNqq6tT3B",
  "key10": "2qAYRrpBEg6QYsKsyg4ACVVq4Ehuj9cMG3ZHh2Gh3M6uMNjJCLB8D4N1a6FHLubhyDDBkBWw5iPJtNqQP4vkLX4J",
  "key11": "25ngo5PzoJZ6otshYpPaBZ719a6ZdAuRnfchcqaZSBuKrMYTuJvZQGrzcaZae2WrV1bKdaZXmDzSGoYkEYuigMFY",
  "key12": "2c6wsAoxf21j8oH8982nKKXjNH76CMDTprdJu1uwE2yvgpiL2fqV8mwnP2VV77YtFAGipsRRyWTetgSaxp25DwH9",
  "key13": "5JWZoQUYNQ7GejXLBBqs6A17kHHmGdsSb2W6YAJCmzWmUvtPXn7RfWVD7BYgWkfG1PQEuan6jzMkekY3UYfDD2DM",
  "key14": "4MEpQNYQoLDNKqu1JAramcYJer2fMpmFTrwcCZu8N8hgFFztT32PcfVXVrZUtykN7x7QtReAT5BvqJ4sLejdENBk",
  "key15": "22zuHUDN96dLX6zqcG8Ddh77n98Tq8xXMYafbiNDhQomYeT1pTWLnLH9FJu3jUaCjDgB9z7NsKbxsDS7kdtKNixT",
  "key16": "4Mt6JHzjdPq6vyKfb78M8JerCZ9cWsvMZ8Qp3utuDQngzVQ4iK3w2ixhMt7jzgPdTAY7xbLxceqCAr2X4VhMgztf",
  "key17": "5Y6fVJKMLi3usq1pPRBRwQ7AH3FBaimTn2poednHbzsM46Wt4LrUA4k8wXkw6myqVM4WDe9dbsgzUPtAz4ayVc5T",
  "key18": "2wxVc5d5CHZq9wuPVnXvCEXjTLx95iJTqbRofjpiDMMtpmn7RHxJVd9bRh1G65hRFb5xQ6Zv3DuDKy1SC7awjFeS",
  "key19": "47SBafbGMT13DNvNFhmWC82QsEohdnbVnYoxTJ2cywfwy5qBa9EsduRJWHCy6dYLPaNYtWRvokivJKEoLQDLD4pX",
  "key20": "5paBc2ZkiFBC8bV4dCVqdYAYqE4Fcb9a9cEDGZc4rD8bNYAQV54udGL8R9rKWMGhfenk7HL61NUV7sEQ2f1vLL9s",
  "key21": "cgFs428ipPRv1LQGnTdMnPqWtzmrTHzv96ADbsqGcmvWJ8HnwA4mJx5kj2x3gLZsHtsnTeYLazCLHa1heDUWuyk",
  "key22": "r8Px2aoXL2BjdZvcusbmZuWrP6CagrKYZ5VwRyZCsQLNF2zwJvS5pixW7n7PJxiCnqToY37JMuxaKksw2ePJzjN",
  "key23": "62MEYbd5pEZEpCsfJSoz1hcHwAyhhhNy6GcZ9k37JUKw9hoXdKvyJwEFftmNCiBwJrGXJZEViTUZYADazwaNHveV",
  "key24": "5Bz5AUDu3YdFZwh913bgTvMvACQ5xgJwNTiYmnsWWExCYoocSEFBYjJAxdURtCosT2U36PMbdQ9VtucoXYfV41tC",
  "key25": "42qSWBtS7Ej92CJTacLAfH9kmkrsnVWLFTd5i81p5XEMPP4pGRk3PYPCy1tLrcx6a9FJGvTY27Zrnnirio92eNHA",
  "key26": "3fWNu6xbCS9C9x33Hj8aLvyQTrGCpwqStpLkKNFNShquHem2k1zzZFLmjjU9ToipSY7WduuMjKVuopb6DnGTkNdm",
  "key27": "481aFhRXjpanYE9YwocwwfptnMmWhaaUEipDqH1QHzTwrb7z3DrQpmG8wpKPrNiyBBon3fsbQeo2USizrdjK3UmT",
  "key28": "3CVu2EvHrjLzbbwgxPUasCX3b2Wa8tJLgRHtMyq2qdj6KK7m42FdobYa37RFwy49LBqKYHSbewYiLiQbDCqautwW",
  "key29": "5fXabKCndvQxoXUxjSHCvTvWp2MwAaEt5sALGVqchkX3TD7kT17T3Re2eCyNFhPJfppo8zC5DmZSD5znwytAHQQg",
  "key30": "3Hd8o2kKfaH5qZDUDrsxsFASheoaK35XdyRggFsA2ce3W7esNKZhGnW4h95MFKXaDQVeNuA69VT2koWnd95HZ4bn",
  "key31": "45w3pL6c9ArmJwAWkmxjJnFHD8iUwJREZ75z9ExcxB28WJQBvDdq397qRjWU7Mc7gbnr9Bg7XyK2hkLQk2bAzFn9",
  "key32": "64WtHv9w8r8auCFvr5ZoRwmkDfyJpvW5aYbLP9vWSVvRC3rSHUC4PW84DUog13iDDCaF8k1uRaDpyxcMDuAFCY2w",
  "key33": "ouLoWf5uvYeK5KJXU6GhtVmyZFk5D1ivk1MGYnE4okpFNfyRyL2c9JAFjg7kabPKWq4GPNN4FYfBSjh7P2QQ2Sy",
  "key34": "47iGxzxA1Xc5WMsWtqT85oMZnUDL8bek29tQ9QsZzyPBX9aox8wMGKmzqpZtM7VZVSKxddSUJXQCAWLveRuFrFqb",
  "key35": "4q46GzBkvpVHgAagir59v6WyPbdvdv73VoRkBLX8ip1udfEefYxEL9zKws6KPeLauMwKwyMukXYgt9eruqzZYkty"
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
