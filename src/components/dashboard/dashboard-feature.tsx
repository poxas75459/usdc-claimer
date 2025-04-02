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
    "42RXqQVCAuGxGF56JAfc78YAdAZvxakrcLBKmZe5kAqBoVr7FdGf7U7M34p28ucgECvQDp6tHtuWtYvgD7xtho6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "adHw5ahSKqeEyU3m7qP5QfaaJESSkWs4P3MRb2TNWYt1n1TTvyL8vq4axkiBjPFdZTXNTUtn1tQjGo5utBziVwo",
  "key1": "4wmZ8RjDk16xv4bW32R1WziEZ8MLCKdB5JDehYLKKLYpbBk3npeYCwJjy3PzzBfHhTHQdeLQRQX8mw14d8wpLmcr",
  "key2": "xjvPPV1e2ynW8YN3pDXcst9f2fF1VsD34wb2KePAJqU6YVJZAm9VFuSjj9L8crhLuK5VMXDG1ZeCTA87VxoovW6",
  "key3": "4LZMc5ybwSYsRgAa3wSzvM4nBHzfxUKNaHcW3WktNMEpGCB7iZyzrfbLkSfmvgCA728HHF5xXC2B6NX84XvoFkxM",
  "key4": "2kptRRwERRrpmyN7dTrs8Z64ok73V75Bdny6goHbkncEbZ6wA71oQTtMiPVqH4atuCkELcq6juUqQgMBc5y65ABb",
  "key5": "46Pxif9cKKvAyTdZZMUnBEBkoDcqDDnrksCk21kuKf3bzioHjbbYy3P1fKS4FhQUKk1PF9nDpjFZ7Amr49VD5Gso",
  "key6": "3peA6V6rPUgf14iwEH7YQ4c8cke3VsLYVXcYTTL18gykXDN43Uc82NTiZQzXNscAZBRzMP3mRwNQRkXBz7JDBgPP",
  "key7": "4aJ6oNWDvtucuYkSvhZPzASPXMhAVLrbRHVvstJZkZMobR97f7JY9i1HB4ZEj62VBKy8TF1SWaKUmLgfZZkC6iXu",
  "key8": "36GBrTRxPsisY78rASfH34raMXhPDdYP2wqQ8A14Mmc6tzF1F1V4AtfipMke161zcDj361ebjsrnykp3uw339sL9",
  "key9": "5XTk6V9KDy2GzPn8zh5MhSHXab4tZEcDobh2M8BrUu9yAuHi3Le99bU67A6roRg2tdp2DjfNtm4yVXibB5YdprMU",
  "key10": "mYwSBqXy6M7sDmgWuivEnLqdxvnKK71CZ7ttBRCwch6tX9sZTQUF199SD7WTYKLfEsMMMDNoZZJg6mDe7ciEiLj",
  "key11": "2hnQg6AgYV4ok1BvvxhA9eXSbs7DEMdxK5Dpi4eYGVqgthQGkykbhCz5PZQ8fMqBNuV76funF6rirB2fX9FxAkkB",
  "key12": "xwoW7sdLAhsCGxFaS5CpcyqYkqVZAi3ihZNi8gpaX4zGsKhs3s2vDLyCsYcqJLjgh1kdQHa8SPEtu9mxTA6AiZ5",
  "key13": "h6jJonyRjBbxVXrZiBwWjimg8tKA3sbgGJKCHNjft2Vy2AnWuCzCqUpy5sZxF34uH7BX2N1XqR5aDzqNHFxcRmG",
  "key14": "EqaRTHXZCzaXCzsuBvUtFGmc2AyVvy4LxP1jeh9vm67b9Gem3r6jBJQTDwnZdHMfTRzwngSY3wn5nK174KE7z4S",
  "key15": "rZ6UyYPHW9YS2JxntqevBE7YFWLEhvyZ1Hw29BGMcNU2mkY5tPEmzrWnpBDBhoUCXNNAkUS8JNEtNdimeZDUSfC",
  "key16": "5JJRdvcXxhypghn2jJiVsLU9b95DTcN5tDKKmnAifmrv9Q2ffUJQAphcaTp7bigerZ7HFcCv96MWyKdauE1dJwbE",
  "key17": "cC8rxFqM1cEaxHMWM9CMLQraNrrASa8BxjGiCXhD8yFLLYirs7qeKbM21xyexTUZHTS2ti7fqS1QuCqwsgVLEfj",
  "key18": "2XREyKea8KYH4adngB8tNx2u9JTzr2yBQmNct6UsdC5JCfucCJxDrdnuqmX17qyXTsfgHGaDXhWAmMSCWrKPASDE",
  "key19": "4uktc9JwNGDynCRXTR9B7moJUrA9ZjEigV1iL68rSQBPXHV5oh7QddprmKp4A7GGtu8Ws4iQn5g9rvpb8kDb9jrM",
  "key20": "37UhkrxRdG1BVW8oLw127U3E52BQ5A3SwAj3H2j1LAsYGrAAhPS1gMjEsDxNGrnSMenqQ8RGpjzCsdQAM4Q9LpNz",
  "key21": "3pRwXD1V2pzgc3VPdYCGGYBG5xY2YTTdNtsfbrYmssPoRGgZDUB29qGYajCgXXkEMJppNnpHC9PK7bAptdL9Sbhc",
  "key22": "5YKPKknBFHtpzT7QC9SzQmzpR5tqGMDqEp1xJuhzawx5761UxLT6VaxrJZW2tcivRu6CyMZ6sCqAErgPw9kg981h",
  "key23": "5YHQdxmZd2eFub5SXcHdz8xbJLfiWXZmoC9Bo6xyEnfCnspM8QZVT7qCHSGAo9UkZqjfEBUW17bj94NBhDFtUhnm",
  "key24": "39vhiW5bFE3zRx8gLk9UGTiTrYrFdLUGeybrkVhYBgGZGmpChMqUNqNNJcBHHBmwJUe3W4pWCSFpBXSijkUiuEJa",
  "key25": "2CXtnMgwarfiq4nhmDbGno7eAguwhUj4zmjhW91xne9RW3jjLZvC5Wgu6rUWCY2Et2nngf2oLRx8pTRvn7Mv4fFH",
  "key26": "3adtgfzNRX9zmWesrfwAX2EikAhg8kKcMv6xr3kUhnHosSqYSuqtCYpj8isfy27ajmvb1VVSyZGBfrF9NURi3m6J",
  "key27": "2KrydY7yEp69pooLvaQSNSFStiwzgt4wuot7xGD5whWb1QJrzaxeRXshSho2kz1Zc3A2HKgHsyB2pnS1dNAEikrS",
  "key28": "3zAMQsip3XgL197fyMhfuPgChD2c7neC7tRVw9idxye3WEZHhayWPwAWk7bzdFGwxPkUvft9aEAyZjfy6RfmCvph",
  "key29": "2yWJg7oj6f6uh6AyfSCj74a38VSArx3Tai6cn8qVEiT9ezNrKEa9iTZiMZMT18czsxbFC9gd2kZtUNQfMXFB6jtq",
  "key30": "4VRgg6urDzeR7aYKzoihkBy1hcg49HG4CTozuuoM71e1NmCT2sK85mqQzaZs4ewHXBaNBCFVwQS2zGMSphBSBy49",
  "key31": "3nKhiJkgYETW1ZQ9gtanwGk7YRKLXC2a2QCNBgUFMFf6hTT6aV1Mi3L8w6k63NfAaVAmUHkTKSM3DdPYyZXNgujq"
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
