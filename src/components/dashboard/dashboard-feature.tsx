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
    "3zy27rZAHJKvMGvCUPWcWDKMuHXi91UZd9952DCtguDwe3zh53S7qKAAnVWuKgjmTAc8BTKYH5xF38qRU73s6NnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uduN5YKngZUnLoqtspjQMZTwzJp99o5C7RNzvwGVNGo1dqpMfJc9um3mPysCnzQNUma1AUUTNqxpa8D8hWovHZM",
  "key1": "2kdfQCv6NpY4K42cSsnzeFyck59wodaEcYMqqFt5ioAwHML4sWDSYEyvB1M6Csb3BYDjsNkiB9cbhKcUsEJhW62t",
  "key2": "4nkFFp8quhpBXqdefzv9pyagFkV3vK5cDDi52gsVmUDKPoEridyy9mBm6ncAMH5VzSPYJ9FZfpVSnpsEyKy4WVb6",
  "key3": "4yewNW5oF6j3VbYDDanbQFFaBPyNhW68kNoXZB8SogwTMXEy4JwC4n9ZuB7xV7w9b585LELdp6PY9HjdFtMd5A9K",
  "key4": "23D2qrYqoSymX2SgNQ7jfojm3g8uguUJHgDQjZthWadrQ9xCH5DxxBVQg67Cfib1RQ4zUz4bNZDfUctJmQLgC9dN",
  "key5": "37Ytj8PZHbn8HuM3XuM62SiAe65sUVDBwPqXW15C6RjDtADQXnyPp34zCAQ7ak8qcjZ2w4iHbAE2Kzonruz6ETus",
  "key6": "5NgYdRteHPtkhrwTyJFQqFhTH5cKrmcP7Bbsqs1PxiRBCV7fAc8MnDi2vGvh5sijNPr51fpZ784jkoWKqkqrxa69",
  "key7": "3dpTnDfi8XJ2TDiHDrPeyn7FfMSGLNJQ8RZPHWDuXvbPyEetuHjW5kYrnasENvnMvoTuj8iiYYd4uD8wWm1YWVA2",
  "key8": "3wRdxL35tRMnvSvFeRuN7PsZ2YAN9uZ825shgFV7dJf8dFAHtSnYhJ88XFZKuyg9kyJurN1rs7RzELcmv1QF9WRM",
  "key9": "eqghVjEAk262bd52JcazL1mnyQrViPRLDCtKqwKFJtScowikVnuCF3yrFi6WZFg7424N63wmfjBMUAKEnjFHbwA",
  "key10": "4cXCMhns2aJKramwWDkr2SUQSBFuvpbPRr8XSScaswffmaG3fMegHAwMKuFAgQZGX7pxuu7nNf6Z1e3tkexzzEVC",
  "key11": "4tNJLFUwK7nQVqXS6tSpaG7ayMbAUBvYHEphM9e7BF2wnVLLC76PfHyUw9EKfFp4pL5uzpxWbbz2nmzUztqWxKzQ",
  "key12": "zX9V4rDNPhcYkGXVFKrCPyyxChBSmGWa3SaLaTYfX1WFot8SpSqpRCPB4QzgGg48XCpUwj2kKXHLYBEi3t1dpow",
  "key13": "5E7WgVjqdarTZk12h35hQJVVzXtnm5FgR2hCvvpJ6tbqxtdAcydHrxSV5aZ6bnqxxo9P4WxRDpyw5DtR8KZAbSUK",
  "key14": "5wcXcD79HdJWRNiVog7qriqZPdQk3SUEJMktF4exeAbEyYFb4GoUh4hTDnKDdRcKAGEs7u1tgigQc9CjxCQT8xTa",
  "key15": "5mtK8kjHWM3MYamAMRKJWzZjUhyAjFw8YiPBSh4YeENPo3NDPN6dWzjd13SkWBaRrEUiPY83Af2UafdHgHLkguSR",
  "key16": "798A5mooFV4yZgKGXXqoH8iHXYkJL1yBbzaU8782ZznEb1QAi8hwuAv6HutQNE1rrS74abPbkX7DwbWe4cioFb8",
  "key17": "ZzCCbe7Chcia9HPuigcmZrELEdYehiWsYhaoH9zzaYyK5R5SwiZo7CnGngZLKpHdxKb6Wi3P7NAQXCzNAwHA5Uw",
  "key18": "2MH71ryfm4coVcCbJqzvN9u3S4gsj1fSnPX51NpAKUjnrnUMzHAmQcXtv6GVT5vF6kqcPqjvjTJxx8yMM9xBRK1U",
  "key19": "4djsZDMu6tiQ3oNygfSaJs11Bqayt14UXBYdTGTgY2B62t2r7CSrwZJhmuZ4vD3A1E9VvpsaaReu4JgvWCRdDZtS",
  "key20": "Fw1PabhsEHyLbaX3c9Eesja3ynHbE5sjHEJ9WFtHZJn8JPSYWRNosFUGTCkCRAseTMDAJwjUYN2CvunLjKQwtyU",
  "key21": "g3hXCAfarmtGzSc8d7G8uY2nYYu2ALQSVVrkPtdPgvP2cMJHyXXrhgxRi59BkksKcmR1yhgxxUn9dG1Y6zW8vam",
  "key22": "4fnq6BH1geBo49sjhiS9hQQXAJuZpZQsW5qatKjBJD8ukm9TM1qekw93kJLdbDxbbKrHin83mUoFrna6pwXznv8Z",
  "key23": "39DwmKeooBRMcL3k7eHko3DTsz2YDMLHiNJEV7XTDhfwb1mbkB1c4b7UtfeZVNQRHbZB2QehegEMnKqKXd7K37p",
  "key24": "3BKGkiUFT25XbY3e82aECVzPuR7RbJsMWwXAZJFxc6vmFRhUpPwfFHBaUT6Vhrxesz7eLez1YMJFb8mrVFavXQV4",
  "key25": "4RUgBCTQXwj7egPHsimYZpLnuJb1ti5fFQh3zpUtRSdrV3XkBPXL3fGtoVLM6tnDfpaAyqTRdyS56fv4kfnHVSDN",
  "key26": "5df5eeueRyBbGqnwSr2Le2zYDahjpHCMQkXKq9vv9eFBk1nBi2nM5dHxwgU9Dqd7TvQr3LBw6zHf3fr5oiby6kFq",
  "key27": "3LDiStCwx18BWvpApMXRt8E8A6Mx2eb4kTtopD8TsFa5AjnCLzAuQDAaGXGHHkEP6LgiJCado5iewNLxikG1XV8S"
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
