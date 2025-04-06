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
    "3EtpRw6yCP4qhPBZCW9DryMUwBy235QWeNcENQzKFjqrLX8takNzDDgkkPt5SXZA51vPvCrQKcraZheCiwZSg1MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjzTA6UkCUvUCS8MTuhHuW99XWf27id2F1TPk7PcHJsYVHdLa8rYhEThDkmh5ty4gBjBnQJR15mXvMtNsBB5SPW",
  "key1": "3RCuMYnkL7fbhhVoKFaNr1UU4zSc9NSeuNvzyEmRDjSZmQK61bkbNRQYAqkPunxGhuWYYQkAFMtHxbprbhUmBob",
  "key2": "ujS39gUYHi5XNArkvn9o6RXdoBENePeDRpEde99XR57rkEy1Rpn545e3oNGJE5kqwcrT5JDDsurSAGn6izZCmpS",
  "key3": "mxPYapcBWxW1zyyU9vxyNpr3Brt1dKPnqyjoHCs4Egw7r9nf779oRhgipPib4cz53Yzx36JYoV4TqVJpc1mffTp",
  "key4": "5DKMabbxNeeLAsmMrrgLsbwxkDxP3Q3JbdCsSBx8iyX4fYsFnqzvMcjbUuTtVnyn63e8ppso3odU5i3zsYJd29uM",
  "key5": "5NeX2FDi3w6pYH8HjG3XimmbeGX2FfFhTgCXBE1mVBnxmgF9YDeGyUPLJr9wWqmSTvkiczxMvNQEQ6EJ1ufqsye5",
  "key6": "34t1Wq94RcWHnTXusaZZLXMfAcuhzENBzBFyCEnQAVsrxJ652WYmf95Ze9xytQBC8KpLjNqSgyCe1Do6bhQwB1yN",
  "key7": "5FijZNbqub2GnQdRuM12mLLpAHnTdvjaPhHXurbv4KttxFd5sQSeZX9FjEFRgmsaxg4C14AMi36TBiB5dkyx6qcu",
  "key8": "5zWg2Fv1DPVJpvQVGHJUM48TeLErRAwTwdNUxNfxd9XxPNA2acYjKCFpC1PX4HXz6o7vq9SZWGD1FeBGaJKVWC33",
  "key9": "5LbXardaM6DXt2bWEBu6j9fC2pdTPSU2bW1hraq58viAE3sfyXwZWjPZmwhgTetqrTacruFpHYm1mfYvQ5rJ6uki",
  "key10": "5xQNb4BUZdXnNrx4EJLVTt6QQtAKMVXZem8NNNvTfQwZzCGizPVAQ6bpWnSuFPxkZGYKzyR2NjxuaTgCdnAPGcHS",
  "key11": "4WJ8kRt9aDGZwoo78EZftmQBZ78Xpzn6c6pv17QD4DgXBRqqWAJM9v8bBGENcMAnyo7BQbiDq6y3mo2fea259aPy",
  "key12": "5uoBWsHwXnp5UzDtvB6qcNhYZiQPa8N1awmmMLdB57Wphk9jMPyyHNg4vjLpuHp2MFD6NZDphEG3S8kd9tWL5ATc",
  "key13": "2zoLJKzHaY342JCHxEWLDLBRb8xVJKo1r2EQGGEkmbmsk9cX9ETFbHh9qsB6GvdJQJrxeWphTE5ckvPkE8siZUFn",
  "key14": "4qoU5nrnUZ7aEiw27TFTTd3UriAaBHSrwdAH3eQHz4oHd7FdXkHQHMP8cgA9hb8QjPkK2MJBt9ytVSbWpcVGM7Eu",
  "key15": "32HL6XtqDQ2b3V4YVvroYs3CuH9oeH8nhWUbiV2o9tNR57HDanQKRDBeVnhbUd2hjC21TRc8HFdUW5iHyFvFLCgu",
  "key16": "5cvMdVaAG7jLKC56YVb1AueRzH7G3srB4P6LKDEzds4cC28awYxC8uXGd2jGj6qmpKrbzcoXu349sxPyUhjQWL5w",
  "key17": "3ry98edpz4uMiazirTioRFqCR2zdThNY21eESyie6vbQPw7Kshz5CmY4R7wc12aF2e7khwH5JQngTDAohjEZsquR",
  "key18": "5UBFSMTK9H8Uzc61qrpPhWEsCqX7AUQqwSPFoPpSwHePUjB3UiXCrvg4iq7uXphv6R5KrkjUw8YimehrLnZyDgCm",
  "key19": "44D3EAmu5GwWEmggjD3xxrr28PkwqV2nDD7iLVMfNU1Kv2uBUNaMDN7UcvdnbhebLbws1yWGezKfBeJcqBtdGQni",
  "key20": "5nNxoPavU18WGMPecw5B8WZVaKy1tUKaezL8jM6RgusxwnjP1zE1rnPgFo59Mh72H91Frg5Lri7nn5CkDdYomsam",
  "key21": "6QEaJ6cSNEU7rNh8mZvRyZzs9KEHBDZkW197BdgnBCzRmFkMWL7bFAGbHiShU1rtZjcPFyexyugv8zzTCnbtdRj",
  "key22": "4QLtVy3igumaeDxrrjvwj9wXJpyp6BrAkcQxavQWHgahDMKMzfpwgSEuh3wFD2yAjHyqqbtpARZh5sJUk1S8YFqA",
  "key23": "61cBWTCTMhc8gyiqqzu1w7N24x5D9NEApE34s23eMXsEpLBaRwACEi2KWW2UhRPLEx5BDSHhH1LiYTBzVoWdCS48",
  "key24": "2x9JHKYu1G8TnQDcmwXMRyEtrZP3kq899cwGdhvkehS9xZmGTchWc4PnSBuzgQFi9v9SVHpaotpS3tS16mph2YTr",
  "key25": "2Ck254WcdJDoYUXnCXHyQmJggMAL7MRQaAAzuQnsTLPSFGz6P7seeErEAwRQCMd6UPiakqCEfPRaP2C1awLSMNG9"
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
