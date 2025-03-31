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
    "gGEmexVNsQDnwUJZTTATEzwqmAsWfGSjfZZg6enfEBQpqR16AuDxZ8pdjy478KspjLznYJVB9yBToN6KLVHstJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GyLTZdFyu4SeS3S2mPtfxmYnjccub4mWMck595JZPJMzAAALjuzLPbgBTGheuNuTph3PhcMd2XmDqMSD5zRGgxK",
  "key1": "67BcvaBc7C9PDNj55S9YJYfif8TBK9w4tE8nXogUoWkToS6ffew8SKJHcNXkXK6jg3qA5ESgiwgvxRGqcVNQqHzJ",
  "key2": "83EFFg3VPJdy1KbTEbUi2RJHay3TG5x6kQ1UDK76L1KZ8MRV5ffAhuz22xwcXBQJzj2asAGfJ7E3zDGdPtX6i5a",
  "key3": "61bFvNwFXGGVJ4nfwXMQBoVhyTBZDBSxsyCWvMe2nUjb9ugDMSqcWwgwv11nJzj7wqL3p4DkGeRLhXy1XxPi5btd",
  "key4": "2t7bEJ8jG1LJukivV7jWeXQNeDK5ixUSXLHRJ95QVA4gcFAciRtsf9dcpCYcj4GCvwHzCrpPNNdhVUwMv1jHczt8",
  "key5": "5cvn9ZRw8fSJA2DHYNNpGZJ5mA6L6NHkgAumHTCpwgF2o457EnLGyuYdqKz6p3MbgGELHtjZcV9kjmJAMZCzSVy6",
  "key6": "39TCn1Y9BKw1Wti2FUYe4AAbSkpqRhWA3jjt43PY37vKTptCQUfYy5Ucx8mKF9YWoW4Q1XyPNjbZBACE2DbNcniN",
  "key7": "4jJaQmSAco8NdeDU3pL1cePLCkAW2MCFt6zLYXFndfDBnoyLZjTpB8qGsPUwwuQMHqpucVGuReEN6iPg9zx76YSM",
  "key8": "2QiqeGWUSyitV3ZJw7efQgZSc1kocJ8gV9DLWJcJmaJa5NnPv5oh87ELL5Qw7ebuxVgwhhK76nqEv3pmTgCDvtx6",
  "key9": "38zkGeUn5pcTF9ufFTLtecPPMexpNcSb4qhBbnXETTF8RLVwbk7RAXoo5GnNEcLMCUvxd7S3HNMAQxDk7TZ4Y77",
  "key10": "4rmmuSkgFauGEbz2HcYnEhDW6PVCB7rji6Y56kqCcw35hFWhAdVX44yg5ayUhwC2WbUJZAvJB5ucPCAma8XhfQke",
  "key11": "5PxttTL2EDMuTEVSxewBH5EDCqZ258f7dmtXcC79rrBo5KdS1rewasLk2g7tUbXDe1Di83pAcWcRwAXiBn5zkrVM",
  "key12": "2AyhqUqXoFpLafBgaZC3ZPDpo2rnBLdvKfo3vbFuZqeZXUzrAzimXGqH6tHGdG3cxwQhnDS8K6asaRSTwZxmEq6T",
  "key13": "vvoeMcS3RqgvJdh1xFEte5kVmxG6RogqjRpyYac2X8oo54TthgSpTSeiYeR7B4h29wukDkdCcvtNfjMAV9ePbGv",
  "key14": "31eRSKDJ7tCRJ5XG2kLYJiHdhi51UmvQ6sY7P7YyMKQRH2pTDjwiYFmS3YbkKwwifipfHbjgFcwv6fdMGhS4oAbV",
  "key15": "X5xhy7WZEyp917147QegA5jW9y6W33qUrV1EKBry8T9EGtBSGF89ZqyAQMda1NvemiraskKfVn3LuqB3X54ipKt",
  "key16": "4CVhhtqikkXLkubdwi75fQAEdC6BFw8CJtZaFJdk8oKt2ctnJncC3Ufb25hrE8R2t223ouhhUes8x14haLwWjJv7",
  "key17": "3gTBkK9id2ETqSh6Hk6BoEoDuLb5QLCJasm9Ar4FuRNR1WGXKn4YHqvyvpNjqSzRQSrcxnzpjUteowhSkXe2cDCv",
  "key18": "3AnvWAMz8deh6GnBkLnPGtCiJKEJXeNiYyCThmANGojCJetBEKKa3m3LSwW7vYTackL1qSdtr1mCZyBvjao43D4z",
  "key19": "27r1FjcVKa9Xj1vYBBGWoFSS74TxzMbGY5HD4Cayj2gB28A9Em5mwt467rhNBMMGDkCTThjCaxtx9aouA9coAtN8",
  "key20": "3BaPGZ2PFE8Pfii9HzUJBAXtFCpbV794LLjSVj2GrGpRJBz6d8mMdadZ6UkqLB4r9UhxkdtyJfkXFPtEMXTALUbs",
  "key21": "2aTYgvpeM7GmWVPwjuPn9xJA1b7pEiZPmaz5VZRgk5HxhXUULo8PVvJc2QKkpEM9v5wD5Fx8uG4jPi1Mu1t8QvhD",
  "key22": "5FEZHR875QFHAXpzT5d4TRp5y4TGAGjQJsoGi53MTZEdJNHB3k6oikQfA14JXj8zfve5Wwte3mBLpbPGeSwkkyrc",
  "key23": "2WoZSBpKZGXyxpFRmNY7nsbQEXpXyrkJFqZCkTwKka6WMKgNZMDhG8tPqQoqzHPRgx7M23h1UvCddtgkgDwraYQ7",
  "key24": "2BmmQyGSx8Pzwk9sbUWExdrtrPfCb6cLTS2jEBX26rqQcdF6jd7ZEP9cQFTizE1MoohgSTspma9e7n1xYhkNAv4Y",
  "key25": "3mZmWKTkRPrpGv1GA9ibN6sP64Qm6Siw9P4bueuiaKhjpXjD2ppyGgXj4f4n2CHyLKipzQYXX3n6iobkpEAaa7Jb",
  "key26": "wRviekTBmPTZBbyjeohDAdLQcB7MSxNuJsnEJ7a3ijCrTbjbQ3r5JhkK9GinUM7bCfn5YyCHyjYLF8dszgcC2ze",
  "key27": "53jUCBeqfX1eeHQGPbdcdrrnTS9Gcre7LMmzDytoHSYK4SseXwamjDBUYXRRmsMGERXqrhm4kRY9MDPB91UzSjdL",
  "key28": "23uFQ7DunbBVng3LyPWTfRHR2NfSk6eK63hxi29Wp4ihGzXZdjxM5UXqyRrkMazTNmDEY9benXDzL2JLppkvFrQ7",
  "key29": "5ohgfUDbMtL3FpeggBsfYwoXNPVq8rpCyZ7NwntVFHL7pqb4KXCnRfBhvh5miGsA8LutTmhP9nhdew5ygc4Z31U6",
  "key30": "2Kbg425AHsv4G8J7mChDWSTPETF8oumxq79QKnXznhtcpTSWgrnpEWhVFVSkDQpFtSitcsmPHF7UK21EhWX7NJrh",
  "key31": "4jsHS9NBthLpC9ftWBeFbchEjBNwBqaPHWHfVwF9TnKpnEXy8gUykzSjErsto23ZASeioqHEEnKQsXcEcLNZ2KAY",
  "key32": "2oTJVzUTz2vr8rXEZMK1XwLi6JsCpSN9MJX1FgB6Gc6mLr7qjV3vgQ1gSpJ3w9oHgVtoNVr6hP33frFFZLWh7X2B",
  "key33": "3wFDHCCm3TwtYYkZmYo83LaYMDtL9JhLBcEdC3GhQsVmbvGVAUwZi8RNQGhxSGqgXPYFWn8os55fe2dFgLqaGpQj"
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
