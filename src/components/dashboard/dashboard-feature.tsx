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
    "34PNMZGdcr3BYZtnkq5jAeHkqv9kTNV9XTjh8SAJRDQeBPWRAUCAYhay5SWMqxMTe1oLJUFzp9rGCCd97HgB3kR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCUm5bcNhN9AH7856zmtuaWtXDGr52hPVA3uVJrbbDs1h3miGoVwvD4gSN4giTipS33CfzEgE69LGft2rRzdot2",
  "key1": "WvMj8dbLeosNyYvAz4t6DDV5LBtwGTxyKpadPpUPLMBLiiK86NpnVeuXWiH3UyuBo5uERbzs9WykMS44YA8gWqC",
  "key2": "3xbKcmP7YBfdFRt8EHMmr5nZdvoRJQbkEtQ5N6ghPjCrEEEuFgdyGoqtQVehDgA6yvgbYNXmEz7pj2oyojpcigaq",
  "key3": "41bavAULqnQefsqXV7iisocLudnfjrJSivYHNoTaUebuRkJLM9hCLijg8GJ9Gc9KGgZ97Njw25d67S3AzNakvme6",
  "key4": "5FEU2FoEqvKX1fyAD4jQmBrU59U5gYdaH8cBCd5HaGdkPiXeto4ZqrdAtnqNL2QJuYJjZE7uwQ7Fca1UmpHQBhAG",
  "key5": "3Ua8TdNt8LsewL9dcwW7RZSgX7JiGHKbKv4gMigi2Zn9GLai2LCJrGB89ZDWJQBk2LkmfXZEo4u4t7YKXCswSzHV",
  "key6": "3DCBoa6UmbaWy9bNb87zximLoq3KhKiQG59K7pM3th4rTVgNF7isBZfzSMfRtU94BvF7n6dHWE99v7LazgKY2dEh",
  "key7": "3TqkEicBzZHgQ666JqqG16ryCz4JQWRZq3dvQsoF1DzPMNTL8GbEDLSweMdho92s46Rj79sxKHzCK82sqakdS5ch",
  "key8": "4GQ9WskhHXWTdJfzAY31Y8EWVPiCBDQCyoFv6iRvRyhPoAFhZsYT6SaYhMUnFATmckZjYpYcAEB53d15U7VsrPgp",
  "key9": "3uQvDfyHzqLM3Dx4TRwoqcdaHY1dQvCb69vfFJWbK7U7Sg7Ew5BnabnFSPRj8r1xV2TspkH9KXDgd47WGXJbnN3C",
  "key10": "3wfmjpbHkBEr9yiQSiU14w6AetPmx8QcYnbzVDChpuNC5kRzHLxxBaie3s2AgBzAsPrWSrxdJoyN69XK1iAeouNN",
  "key11": "62U3aYP4uz7S5vSgm4E8FUCLhDMekRrvm68463riJXRJyWvf3EC39t7jEC6Ve4AV8MFoZT3dV8Ph5H2MbsrZUE8i",
  "key12": "63qm7hRUhCjbYeE1bATshMZqqBNe16zgMKukbdup2J98TwSVo9gwmCbqi6PfufMMNmecdfrNtex5QubYCUZGoraT",
  "key13": "1UQZYLkjAGxCEAQBTfUk4YexRU88TXrVTnA8ov9CW47WuZDguA7hfCVucBdBzURvi7goBv2LqNsYqDXfQXjE8Ba",
  "key14": "2Vi9isPwWd6fzD1CCN6hhGYcyDCf1Y2N6pFyjwHtEhhU7F9SZSB5etKYCcHmhC4UdC47YvAY5sBqZXqyRnDJ59fj",
  "key15": "4kDRyuiREMxVMqQMKXp41cJbahMw4jMbPm84Pxopkp3ctzv5UHSzKaMXdXsUJKiF3s3a635xrbBoJdaGHku8kFTz",
  "key16": "565MbZi54Nkr7Q7Aefe1vRGitgAtcRW1jkSVnEe1R8AQnkkbTcMxWX2x8o6yDKLPt4JNET1BntHHwnYJ71sTP3Mg",
  "key17": "3y2L8DDPf4WmYMLCJMK8bdSi76URU8Ryn4F9iDvVHeBuiSj5EXDiyFRyhrzqp85ryBoLHDCS2or74REmnrd16z5k",
  "key18": "2wAHCedm8EbZfYKy1CFZAgCRQhDEpN1WfJeuyMLAW6cxE4H2WkqcRbAgLgPxyimgmn7EvokfojC2sycAvQbnboU8",
  "key19": "3oAz9DQh2NuKtMbH7hHmxojaUvCk8nPCbAwBPRqPTNp8CNkw25gPitpWiKoT97Betbd2LJs6PqQrgf9fyqAy4bnQ",
  "key20": "2vTsXwSTbKSpnG8hLPBPchCHWyVCEnQBfL8TqutFRA5M17FHwCzsWzZYq3z6cVnt1Le9bLTGPjtP6EJVmAYPVkB3",
  "key21": "2EWHfgs1Nky1rwp39jCiJqPiDNk2JGHFU9q1YaKqgNwdSDcaDXThXrfXTktwA3RJtNUojZJUp7DbRB4LEav6vFkA",
  "key22": "4pZ3HeuXdqwtLRFnzYsZRHPnyw1p8jAfESh377ixf2BCL7QJK593w4QhiHvepiBYgT6rtc7qeH4ezcURobrs3b8K",
  "key23": "4W2SGyw44au28FV54dFhwNMMK1jYJfsFFKiXdeFAr6bSpATXWDfu5P5fuD1kqLTU1yNhHGkfgrstuxgxjQkWsBbP",
  "key24": "2DYaJ1U1UK3Z16W7heYo2K9XwhHndjsQ2zBZCrpCTs7F6TSTK3xRFG4A5kP7Lh8DXbc2ZFxn3PNtrxzqBPZFDK4L",
  "key25": "4jDtu73PGB4ctGnEPPfFzBYK2DTruexy8X3E4cn44y5WkFTGQs6REvc9yF8VzEuhPZz5fgWSZoEDhpuURxaTVXqX",
  "key26": "aVndNYWUFox2Uhb9zEoxcNvGyMUnxhmJeVUKcj8HXiVWVnQYgMZBg4c4JojPVa9yNEBJ8j4w39FWFvY2wdDrgPM",
  "key27": "2tAi1CYobfSxmWZDTWXeiEUoBv8zyKw1Wun1rVMkaGYfewEwgPmZ3s6xVTZrXA18n7tcs24QaFdpGDkWpjxAHzj9"
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
