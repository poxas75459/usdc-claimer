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
    "AvFY8RLC1ttc7hi3ZvhWpyQUYSh4BuvvF43u9wRbbrAt69Xee98zZ8GE3vPbX3CYyASgZLXfX25SriizmsM1ovt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Q2pVMkeCqD9yScSYn7KanxU2Zj5PtXEUemkgiZaAJhECoLmHjXsba6JaxjFuMwxp1gB4TXoGomjwkfBgowpfG3",
  "key1": "2VuEUmtYWrPah5XHKip7Z9ARft7erd6RXztzQc2JcgpEVtM9ag97MycDXX7KZHq2Ya4Y9pS7hkhZDnfbxkNQpviG",
  "key2": "wesG2NL8BpVYDhFMVCjCnUZ8QfhSU6GCWcwJEY7Km7JjufnYSKjp5mQRc1tjfpk1T743MGSdNp7eKwU2GqsUjuX",
  "key3": "3CeWvvbbADvyTCojVWtvF4djShVFpZURehWQ8FZS6SwpxjmZTtXTTZYsz3fyQUDkZMMGi8xgoKkVYXh9m955cuxo",
  "key4": "5dUM59pS7nhpUt33E1prnMxE7tPEqYLqaDMFrbaJuxFgbCEm4MbTfeFYaTKobaV3d1bQ3mnmPFSWn8a7yVeXSZVB",
  "key5": "2axEYvKwMa7ieuCeFGMAJGLVLS6iQn7qmWEbjt13JQQ3zUBQ82AzuKA48P7duTXb4eVL8N8t3mdxDa5DQpFQPG9B",
  "key6": "kcgYUeTMuGZpSMNf6cXo1WUncPkUsqBmcQto1JX2KMaeUnNNQnv9t3Amj2XSsEBPtc9985XFKnnrPihrFsXXMrx",
  "key7": "3Fb6isLyz36eR4GJRTPLWvw6rFLKQJyxxyiW3SiNqcF5KpDQoHjVBVXKdgDp9KS29Td1pvxTfcf7TzeiZ7zTDtE6",
  "key8": "dfJiMfPCgeFxMDHoH6YR3uVS1v5sU85UaN7T2vMoi9L1ifL7puYg8xxLYLMdH7SiJz6qr7F1TcH1pYXzDyQ3yKA",
  "key9": "4ss79fqRgdYXRbeEeNhqYznQAwFyA2t7fWyH7xhcPcxPrR2E1Hw7oeUpphjNYKqhuR8K759rZtAyzP53RZCmsnAr",
  "key10": "5g2NLRLHdJM5szRTdi2D33PdT8tCg8Z1UcF1KhQNwB8iJgjDZwnsrvXQ2iBCkLRttkHz4rSdEn9zo7zE3bnxadfi",
  "key11": "3iV8mCNWvHFaGSsmDGondoJspDP74wFFTK9qE5M3GbUKP2vBJypccoPCpHYopWaAGKEBeoA63E1Bgk3uG8f4Q4cR",
  "key12": "W6tYtRKFiAgnSQBx8HXgzRQputwk9cVcu6cx5GWVsfFmb9KXgd8VLssDqRuVJs4CC2SUAcJRe83r48ZdEMN1PQc",
  "key13": "3TsXUdySTomczzmruC4ToknXZSNTGec12esah24Bd7xuMQmnTM6d5gFfNaoHNrZ1g42tJn19nCAEE2qNfJiesKeP",
  "key14": "3rfTRrCzCNDMQWio5fHHBDHiKXdWD7Dzc9v8uDVF9CDgngZGzprqSf9UEPAKEceZvUQufwWmNs4CQ7nSvuV8nde7",
  "key15": "5teqe5hVDK7EVhQNHU4HuBKzLyu4JATDWq7EHGJEuYszzkN1rQAK9DijGvfAHBBJdZ9HJfQXpN4Sb5yDAsjze79v",
  "key16": "2Y93kcNhaknqA94mKrHzEvchhsFwmh2s6nTZdBZZ6cNboLyfPnnV22sbMghhj5UTwLGpfvgHWBvcJ74bSQdbNimF",
  "key17": "5wq435NtYM4U1JNoBcsQr5hCmqpTzpsPhNHrhPvU6ewH2PhjqjcDPJYTP8oQKmVfsPUqjFrnTMjJ8rkmTAsqsGEr",
  "key18": "5dphD8qPXCQMCpvE8r6j4g62KHeK6RheX5W8oLtYg1yvs9tUPdJCYd454StN96Cq64wW56GQwqLdWSE3vsYmBAvi",
  "key19": "4oSCHipxCqXYVed4SbaR5MRqckBR2CKeRTLUBX5zchvJsEAkL8K11eiKaxwmx6hduHTwEGiCWEpBqGmCKzvHxfNZ",
  "key20": "3drqjfgcgU19kN7RySB9sHhiDJBmiM5n587fijCXoQ4CbLvtbsMbiV6MrsAfygihMW7zyfW2FYiwmsWwq1iqEcMV",
  "key21": "2XXzzNGUSdAsXVKLX5poBQgc4XADopps512zEyrqWc3QJpKBYw9KuuuqwV2VHCu4nvMRDtdumoXDSboVDLV1iJQz",
  "key22": "64e8m3Mzhfkiq8MvgNtJLJGGFZAneUR5B1Q6opV2bRAdYaybieuEieSFwfwGsJUbfCdF9E8pTS5QYCxY3Pv1eRbZ",
  "key23": "3LBaRLfG44p6PjZz5VqieywgZUonPtPyStFU1G5ZU1WQKPYEKrE4qN7oRiCk23LQVcReioNn7rRkhceTTut4sCJu",
  "key24": "5T7BzderhKUK6XWGxAUyyGdSA29yHUda3LJ6cLJSAL4vamMp4GvJcKeNJdDk8XHHDLungJ7rwkQLebMkxy3EuKky",
  "key25": "2GJtMj45fNDgX4KzJmx22272CvZ6nkBNJKbU6BnrHbNboESeT9UAXt4boNPecBdvfUpV8QRLYyWN1PAaSp2QrSu8",
  "key26": "2H9MWLuiJJV7P5qF15PdJ12xvzyYekLub9uYD4oEZFGZ2KrPsFa315moH3yqTeYUXVpdtkx3R3cPVqS4piuQTXve",
  "key27": "3qpjaN5jiKvbDAUzwnTbgA1f2aAMpGWpL7QAJTJZGX1SZ5TVg8J8SQWei8rbdypMgvLmVjhnx3CGgt21JEqEtKbf",
  "key28": "iwpBRZ6mAv9iUCoC7SWePApqZ1oiiLoQLiZyyRkaYuJmE2sKMYTRHjxHkotQSB6jZRqoDB6s59u4cvZpdB8KwxW",
  "key29": "6d8Xfv8aBbRk4UoiAqzFSQtyJcajVaF3QiKNusWdtDuGr81ASkCsYYMXaveriDTvgmr5mytMJ3PCEceX2LWw8NQ",
  "key30": "3RUT5KQPL2E28TbMsxaa2dUPf9VsC18m4VErFB5JKpQ8NZSiopajZ8L46x4igTDVRHuSr6GUesg9pKgtEDB5FK3h",
  "key31": "66qHpnS6iuRnV2fy8CZzUJ6PTsnaY5Nyhp7aQzy1FaZHBtHziMpWoPmmK864XUPfhPLvEqspM4Mg3dT4MjQfHcej",
  "key32": "33Ena1GqdL6t3u3iGggvsDXFVHnuN5maimSrQDtPUZJ17uW9KAoFSzXgVxaUjHWmSGZQ99sxjXxbZzJVYTzRPCfM"
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
