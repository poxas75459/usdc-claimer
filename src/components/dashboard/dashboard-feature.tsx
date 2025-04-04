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
    "7N2Uw4yLbxQ6Y4kr9A1Nthwe3ZjhwzgH2aivi1VttLKhmQTUTdfq4PAKmfNfkmWfBFvu5AUJWHVDtWEfe2nRBFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6U7CuXpM15itQNDTeWd557XjE7D6rTQz1KBL1UPgo2Q1Hni7bECvrPJWMBqTbfyxuhPeoAy5ZSZohFiEUfgo5t",
  "key1": "2WHBMvvw8CzDFsePfQcSwQb6yAPxCgUrcduc3ZS97atrH9LyidS8tW1gbeJQ8yReT8rG4v43nmDS8sSb2oNyqKSY",
  "key2": "5TTfXYiTdTRybAPrm692NJx96XLeBGUvitrG4qoqT5kjv9iXG3TChwvsFErtCS4M19aJxA3Eh17itWXT9nQeikLg",
  "key3": "mRKg8TdRhLdVP2Lm4pf3tbvPtzvava1YbfXUYJG7hfwWNBTUCPgCmqKLD7k2eoeJLUrhwwAS5dsGzk5XpVsVHNs",
  "key4": "2c9KwCpe3QhNRL4G4N77zn3FzGbPjGhMQGVXGhruBWPhVWSVkm6prm1UwZhNBC2oe9A52VLt7yoYxchYzf9Vr9EU",
  "key5": "2m74qH63ruyfbaHinJV3q9TBR2Swy9pJKFNDyC7LvmJDdGMkPTorLjMJ7giH7YNhQgbXMHUC5ZdwiReo2P5762pp",
  "key6": "3vp5chUP62mnS3WvRhryrUg1bwZFMKDHMe4k5nBZ3H8UjbHp8ktrqiiQPgeN6fuFFiVhV1ZZmgRrzpPFXu3WPoS",
  "key7": "VQqrcJnCwQo4QsmbjYjbNY53e5VYsyqfW9jPTVHJgr15e4Y8BX6eZwEgeYoab22gHfeCNBPThhqg7dLGhsaCk35",
  "key8": "51Vdn6r22Nacpkvp89LzgNtvRAVNQWvCrhg7LMVnG8fjyVXwj9y3XYw1zTcK7JvhmKAM2VCPbapzYzAW9HUP5mh7",
  "key9": "5n7ghqYxc7QdaY5Veq26E7DebPChkKdFsfndbxeJUJmjVfU4pb1z688mg6nUPrNQEsoXdt5iAHbynzv7GvxgisS6",
  "key10": "2MDftCrVXWt3ZxVJwPPZ4YipL4fwxjahqyiTkzPqbc9Z2HLePETvrzQjnGSBtG79mkvxWtFQyKpHVPEvg5nxV1Pi",
  "key11": "3oRoCwHvAL3pskDFJjt7hd8cU1dbqhzCzaMotgrZ8iNkzNkGhyfdnTMfSRnfSmc6J7G63GLcWyZ3NzUBPBiAsYbB",
  "key12": "5A1K1Jy22Fik8MT6gMLCyJLCgMSLNWWSbEv34GDFJhJeQ7NwJtT5NzHtCCDea7eZ1rsEdow5MvpcvjfR8yhqAVPs",
  "key13": "GxAB8zBUZbnxzGcAsrX5LvctQsCLsjK9fPnYMBxaBjEdtMAnR48saCCJM4GzShXrcqW8XJqVoYaQ1bNWYzkpYWJ",
  "key14": "PEG6rAwwnosXN4kavbPDztsGtJ6LvzavfSxUCFNmHNDr38AX27G7FhDaQqN53J6aSM1KMDxU7yUTvpDE1ZWuHvr",
  "key15": "586vemnmkyKWQNENLZykg3c678JFbPTBQEwyksvDh5ChrF9sj7C4wjz5QBJ7xy7eYAmz1DVF5XQxtVmYFn6QtGZW",
  "key16": "4FqShCGnDFQ9vX6EZsFWaMgFZGoWmKtAeH8QRMZhsm4SeXdTXnd6AKZMfHYygDtqmYLA1BDpEDBHHgoTCs42s88k",
  "key17": "3u79WBDKQAcqmLVhEQiSneF8LpxtYBrkUqJs661dFfKqhkcfS6d4BMPRGkoJw7hxTcYupkxEpFqQPUjnfvMwpxpj",
  "key18": "3uCwSUtQCJFBCMCMPD9AJGB3YpjBjqALJyyGj8Jj6Fe3oepUwdXn226K4FszADTwk6aQhx5dQtxFr51RkjPxUG57",
  "key19": "2jkGZ3EsUYxJRnsrPYBMGb4dANvwkTeWzzLAJz5kWcZq3idYXyLdmfMEFRybWcQ9JVJJXQNA1LcbM6i84SAW4JG1",
  "key20": "GvfTwG3ubSqgq8raw6FGHoT1b87gecrWua1YeooKNEf3UfTSTWstGxW1WdEM2g5medJzMXUxptenUWW4g485fXi",
  "key21": "3RRaE4xSW2U4K5uNDaoByhouZxCjtiEJE4JAfuHKTwxJowDE8DRuFGVv5gcXb4xhB2wwm3cpbGcXYfkgABCbgxky",
  "key22": "62phcz7m2anNXgCxdZuqesQ6wR6ocnN3HUpzBPKLGQFrfyJ3VFZXdrCmzXqqim495Dmdqq367BxvDuHhWtMBD5jf",
  "key23": "PQXn82JCCWErizSpDZLdWMie1gof8vo8GQP5RkxtqPXVHhs36nEvRSvmPggvLVDnyypzLMsXvB4a9stvAU5CM8J",
  "key24": "4qv2aS2Dkgz4cFZCicCPKfjVqWq86BJRySudcPP2Hdtdh3Biw42NFXoutrEmxKw1tH9puHpr2yVGxTBzAETjZFtE",
  "key25": "45ZdzTaS5M6sqCdw216Ku6SANjokxuASA9LXSghnRevoSxn37wZJ9dG7UUJC5QakaNB98suqGam1Ftcf8tNoxSXp"
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
