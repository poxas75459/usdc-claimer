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
    "4GqiikhYVtHiUHrUnB2C4CYmkf6B72Vi2uJ5vqSDz9SYbWxsbDJ7vWm1T8wjwdrezrzpjceGfaeA7NyHk7PntdbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouCxcZHdyo7V5h3Cwfbuum5mc5VHuFVbtJe5oRhjxyK4uCnyoZr5o8HAtz4GGEQRnuJdBuTqmooqqFEDEAcZh6i",
  "key1": "5tmf2A3wLcNpH6mgRzpeH5j9cGJT4h9kefNpZ6desEPYPh6GdtCyzUzY7NZoo1ZFG9SCcrN8LG4kGeRdw1XpB3uo",
  "key2": "5C2CMXGSUf5A6rdDZcoyuMT5D1CxNBrC9393ZXVG9CSCX6se1cARjzSxzAH2j5cEL2PwAqh5rLcVffSLR6aF11N4",
  "key3": "UGu1odnYGqpQGihZ3qswRPmGxF2TUnqsMd33bVF9DHa4KmifzqyYsExE5neH5uGPVGVQG6rnYUNccXkR6hw9tb7",
  "key4": "RRDVZY4kcARJ6TDmC3h98EAXWbqxbHg5HXZXzWreN28TVfFxPU8iFissh1V1gM8yNA8xTZkwud2fCorY5jXG69a",
  "key5": "2LR8mJy1P7W4A7XQJLFFFAYBS88tKpGS6fAS1wct2q2MBGVciGfHp2vSAhLowEanB7judoGk3XVGvJkLNCANtuv3",
  "key6": "5vuJkxDV4bqS1acxvHVmUGcaXFzgHxp39TU93wXG1kcDLt8rrhmYqPVL2NQ78coBrTbebKRZi3USRBsQz6b5JbGw",
  "key7": "5EJodSZ1VdQuaTv76R95B42BYd1ud2JPoHEkkyJAtEE3A1YziZv2QjYmmMAK62SpLKLZnFbybiv7vJ5kn1PAdNzt",
  "key8": "5QmLsQ1fpYaQfL7ezjPjnzEC33VF8d9p3S2zuSjMF29fbqTeks5F4HTftbSmHJW9vBvrrWPevUSu1g59PAJseqz2",
  "key9": "4j5KCrkXXbHyD9fCoXxYxDXPf3BQdaMJcfTAswLffoaoTCBrnzaHejoMu7uK23DS4dsaeucq4QUtwaQC7efMYzEJ",
  "key10": "2Y1D61fmLQguqkxKBvn4M5ogo15M4LVncAMjYg1zTjDSC3buRYZvGzFaFta272P2Zwi7HSUUa4qSmTbfUi17MudM",
  "key11": "4MRphYSNhkdERD5AUmmaFpu4Dfoyakc244Szun2rG3ELSG64aGj6GWqNrGqahDsgDKXpWrJ5aeENE1pqYGwawNqF",
  "key12": "2aYDrUfyk7n72gEmMSfbQUNcTYYG2V7CkQk4GzGVmxSxVDnKHzQBGmg4oa8EZmKjkdPkQJek571yviAbm6JFKyRs",
  "key13": "2gxuRhdgPR4FdaqBSs7nnngcN814WNubzU5mN1tPmLRyyg7GYdtYsMr4ceqrb9xP3MY9GuDR2uXD143GikZk3dx6",
  "key14": "5L4eZPHqA2LutK1nKrtTLRDuWxFVtHhH2UZynbiprVQVn3wEerEMFDbuZ6pxgF8PBYae4riqMjUbg7mTEdewdyGq",
  "key15": "4Q51PaHM7ZtYFnmzEssj19tyXZ34TFJaHAJUVq9UbX53yvZdwbzNA2vA7VSkSC2W4zNLxZhhfubbUnU59ipWVCkr",
  "key16": "5XxEsDs8rWdonqGoNiMkdzTyP2Bxq2djFwLDzSezx19kzeszKfpbtNvhrACDqorascAT6cCp4h5gwWH3yWYoSidF",
  "key17": "3LE33vSQQXusK6mGtqG79p8fzBfDdt4JdQZtnnq8KSnCN7UWoveXLNedp75qUDRQZzYfBTL6r1KAcdzQkDWPN4nf",
  "key18": "4AjhCS3C8ceL6gMyjb6MuhkKFtuYwb3djbjGTknDjs6CTm3tBTFULCXED5stBcn2MkrqQQL12hr9hFNUjVa8JwwB",
  "key19": "54ZpDqHWfGp2qVvauiKuEfzQ9pJ1QAehAPzTzpcLTRZaxu8JV6LnTFppcy3HD7AduJCWdoBrsbapFeSFhg15hh3U",
  "key20": "4gqMXnM9W9RCktfj15WtNNSmsn4jrXfarHRjjUAvfF4XvUi5qajfSF4JzDzcJc22UTm2wHtZ9E7JP5PQSFtukyFP",
  "key21": "4FFfo18fJ6cZunuTrvDJzYWxn5eRKqW2rCAa2cRoZRDRnK86AsQfi9Xf6XHxsDbTZpMoybCqgk35CGQEKKo7gUwb",
  "key22": "2Nqnfse2XSLYWFSsm6MvXfQUUZaoMVAwSMCqGPNXJpwsSi5dnkwaS93AdhSs6Fc5EXVp6ru2PmXZKuF45wcxgVVx",
  "key23": "3x3eXVzn5zddJ4AMZKpZ4stseRjMDRf9FMCz3sFQHMZWR53PtpwQVHoyvWPWY2eKf42NRzKaHG2FinQpeAFvuxjc",
  "key24": "qvPVBb5rFjr2o67ShgtwX9uiiEmhGxn9hpjbbZfE9Rv79HfDvygCJNXkMy4LRtF91vEv9kgSJwGpaobV6iQ2hCF",
  "key25": "uer3VXu5jkPk9Hn8LbupL1My3t3cYtj91gtqdG4v44hwaSNEGcabp4oNssxn6hCED8K9FiBR9D8AZDd2VEEyo7x",
  "key26": "uUYuqJWQXzz49uBZr7aB9rDXNwgMVhuH6BhGoayc7rxao6Uk2Azxc5C48pN5QUU8fUV7kJaP7nKvRPJoF8XuazY",
  "key27": "4CuoDfSNr1ezMFe6JnFnnXDRXJZ82hfgA1wQmPDE3W3PzbTh95BrLGE1Q8SfcJPmf84n6uLkS2pDUECVMCXqkvGa",
  "key28": "25qojSEVZdUqFHi79iwx8hz4qw21athnfKyNpz5nU82W34x5FKLU2Cd4gg39De7J4wE8ZvvjVfncazmWBfJXKcGx",
  "key29": "5vT5Cw3jMuUFJaaUBP5otCp69wqvKNhWoZimqQE1bUX5CQYedHqUNgdYwveu6LpXboxa5m3m6FrxppiASshtBWCp",
  "key30": "Wk3duNHUw3tgLd4XoRertN3jLK3pFS9GwiTwhtjQAxJjSJ5AERq2oWUHZ6NnVjzYey7sdHFwDNAa12hKr83mHLL",
  "key31": "61r359otg1yZtmgZ8AYcNvwNSJLgG3S7e7KfXpsAotvEydyWLd5FYLQuuu67NUUbZ8K6yB6MG5sUuj1BbcbgaFvm"
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
