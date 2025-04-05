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
    "3GuDhfxuReKGF6dqErYavBkZxXp8yMAEcXa4F4Y8tLhri9jjQMb32vuZd9npnxK7CaSYFExsuXqDyRJGf63wQm3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tr2ohXzyTCiUwBHsD9uMKewtKgdVLSZHAipb3v8iayqzXzjkrVt1SK9oNhPGKEMLJEQptWZXyDpqP6opr6WC9PT",
  "key1": "2prZvMPo7CsuSW12Z7NHvxozvd6S8WtjNomAJFALc9gMYEApaHdz6TpjtTjTXRzhDn52FCjoR8C66ujbsrzCqhjF",
  "key2": "67VetdExjPDvKNspFcLEkg2reDbhqavZraSjAdwj7LnFuam71RB4wY1VKq267wn4sCYWCTLkJ9MWUQTjGyowrtfe",
  "key3": "63CPQS64j9zEg5NtDfgazZq47sgSNkpKnJfVt9z6xvVd6D2EWmfjvNDBundx4sXC73afMjGFjs2xR4UMqR6BAjcd",
  "key4": "3DyDQ5KLuMUFCnxWpr8MoTrhpsueEXjHYcKWLMVgxoyghkkH3kmfSeKXDvLFq5KaKZbKWyVyQ8FzjVv6o2VKjkv5",
  "key5": "Z8X261J9ziMMMZhNYH4mwoUqnHo3mYj596SrjQpsLvY3T8wvMYgCEWeM2dj3cVr16HwPrjAsjAmUQjXEyGQCXY8",
  "key6": "3TrSQN9DX6PVFvC3721FfZ4oxRZARzscUAsqbwcr9pVXit3kTqfUegjmT4L5KatTRzm7W8RfCyPGDc66uJwSqyKV",
  "key7": "2hsL4YbzqTUCU6T3zf21DTTXNRbacYeWaTbZkNy1Bgz7XGUBdfiG187BYYocS94oALRbFcB2U8vSizokfnR6hD1K",
  "key8": "5yjUN5mwejF3UPrnarwAVL3joVXCFyKgZDLgAYghhD8zPHGLuA89uTuPveTtqFWqJZDyZKftKtPqUB1BFdLfM5k8",
  "key9": "2aE1SdCLbtTN8toY6QBPC4wUm878rcnCQ3w7QpcVeRqvjyDibp9mgtv4cBNFdMvg91PyEcT5m9MUPpxQvJZJwpTe",
  "key10": "5hUuZGB3oRBnQZtJPE9CYRbv4oiiJZWoPPzYDC9gVjtA9etX6PXbVNWYHcafu4p6kwnqaU6n3WCZJQqbc28Ea7Fi",
  "key11": "626zgjPoqjf2DAW3523VNCaaa1zYxnSE5ViYqfpssKTBHn7tGBwwBrLJkwMn5nhBPRgs5ozrYYNTpaXRd11FMHLR",
  "key12": "pEUrDLa2XXaNC3UqeNGw6SH7iC6t687EfoTvfK83BD1SrW7Vg9N4PSYKuktbHkyjfTtvNkG6HqECiBFsEYfdk3b",
  "key13": "3A8D18g6wcEK6712XodBqLmE23zkzA6oqxYxgNikuicwoCVNV3mrb3UfYD1gaQFchZYpwcQiEveZL23tgUxNEefu",
  "key14": "5X7C8sJonazQFWG8ViCrsTEqhWhkVCnPub4mA9zcdSf4i4DNbQ9daEmtHmMyD8LxTK2GYBQinb1P7h1oa1AhU1cJ",
  "key15": "47V8jpRBFLUY68yTeyrPWKjmQDnu7Eexsu4DnRtUkyGDcM25JW3qHZSpFbGiqiiFWjgSoBYD26CtPBMdAAdvR9jP",
  "key16": "5QrvzXiEDBpEwNL5kuDmGf5HLxgnyuHMfkdq8r9oXciF7t2e1JEy1Lkh5eS8VjzTDti7CDvdH4aCCxjyDPd416dd",
  "key17": "2jLXHQTyW25gLAfNHgu9APMkaZqtJnnWQB2pWP1XN6YM9Wub4r1Jy5g3gNE2kPFqXDX1Rw9vz1uhEiGzqN5QTWGd",
  "key18": "47D7dKfnPUcrRVpgfZZZDaVGzQKFVzjFpU37FX6B9aGyMVU82PipesPyJTHg7ycye1AmwwyyXjQtfxhytDMgMh6m",
  "key19": "45m2WCwwCYg54Ci7ikgRQauzBrnekDfPToP3w3f4n8cHo7nutHMwSbHGtnCst9d3MZUTqTAEA2E9KxoZfCZAKqgn",
  "key20": "Z65TSQUA1PCmGZ4twxjKZMcbYPtEj33oSFDcygQ1yRujgnnRUyoat5GEskMKTKBL545LH99JH4xGzwvjrKtmFEi",
  "key21": "DguKDmK1L18WugXyNQtiZYGDg5kcEEe9nrSozHg1aohAz7mzMi7TtmDKUtEEDfS95kfFXmbStoYpNBFS22wQJyp",
  "key22": "3jkabi8F72cYDcgDgA5eXvRyDtfNLVWiMuTzFauGrmRP8o5XctYQHgFhe5u6XJDBLxgdFGXsqZNCtuXLkqvJTYW3",
  "key23": "5tZsTdxjfmSxgATApdNtkYVCYmSbQs3sVb1GLWSWJWPfxZFhezX735fbjhM1TzvHxFRPVBcAsaoYrX9ca9yZbzqp",
  "key24": "2B1xJKVWZK3dfBwkngCwxuEXXsRRbnbck57zsHpVvQL5JTE3F7SLn5nn7vaSWAiMtK8DqFLBJTxLy4yigNwynb15",
  "key25": "3TfQqVvCk3FLgj5DYWbRrQ2yqygme46s3p4SvXHrz3s8eoXzD49YaQJp2PYRiaJxQfVMkH6iL6pxypw8SmRWYVFM",
  "key26": "5xhjm1dHqeTrv1tcsrXZMBCaRGihA59ZuAgSeB73t4eUxG1WmkB9usZoCNdAbC1S94WNbKEi91Qtw1paXnYLEtpf",
  "key27": "hb7wgFRfBAuFgZwsEEDGpjPMoB9VQQHMTtytPfah6ajQrHZReX6aJhcXZpJqaMo8JmdVWhkT42hF4aQ93tEB9t3",
  "key28": "2ppYME9GrNpmeQ7v2KNpdZ3vUCrsJEjdnt5mwJEbVAQ4Th7DRQjQKNEPmyVArBiVMc77QL7GHqddzkT29BBzAcAT"
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
