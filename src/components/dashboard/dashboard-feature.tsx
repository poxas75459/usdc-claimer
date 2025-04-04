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
    "3fBG6bv8wbvt26CYSZUtp7SnUuxo9nqc3wVHsHRhohWZGoVgvKdWSD1UGLb1XSb3B3HB1B79H6ioyXvgrjQbUVVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9hM2Z2AWvDagLTzSedvDnCqU6uahVP85ZEVX3worEXh8TuRD3t7PqG4uTSUeVde6YmxSkTyKjHzbRQj5DaRCAL",
  "key1": "AvKB8AtFcnfhFEozHdgoSXoUzUk3kodMo7Q9Nf719h6tjzXmWDvGaZX4XegAbBSAzKo3HiaARyHmRdQdDdcNvpu",
  "key2": "4W3e69gmXuxaGsuxuRLoVYeqCdDTniS5Lm9SWnknEoHpkLjZtADDTyJxHeUN25djd8a4CYQzAeJoBa5WWAEAU5G7",
  "key3": "2W1ygKSeAfkxkAubub6ZdeWnwfJ6VwQVQe9cBiG5Ld7Xt2gPUzJYooAShjVmRaHB6c4scY33ss6dGzkRqWrzNSWD",
  "key4": "UenYiP6uCAR2Mh6CGprCTriERR3JWgFEMLmUnHyifAvNhwdXWPsJtesDYgcyCRAyL9Xt7bGnTX7Yp9ZYFg4vkCb",
  "key5": "3KzLx9uWXhbn2BXk7eyQ3eYvJQVEEFR6VxRjNPec9gMxKCLKqYk5DKW5aX7AxbTsCcBnSNCU7wjRFPHz7naXDSNz",
  "key6": "5ipFvHzRfM8RihHLpNoTcz1YW9Dkyc5qjQyzkYyj2P7dCy2JUX8J8zBqCLrEDzsxczeDYjitQkX5YpV32fvhCNC2",
  "key7": "24a6DGSw9tKHo8pszi1GBWj5YYQPUdm35ZezMyuHiuirbge8dNWt2kVJ8rsMdQS7oUiYpnGvrxgSNG61NrL4Kgnt",
  "key8": "5SnuLy4WbEi6hXbXTEwE8Zvb2VaS7b1TbcKbgdMX3swZHmaX2DXQUUVfq6XnDtZVeEGBUEi5j5ieGqutyKctfPdk",
  "key9": "3NotaiH4bP82WUW6iEzDowx6ypnUfZmUQnHA1i98owTNstCP3DEobhnpUjooVDdTkCCgbkhbh6enX3tfCuTy4qPZ",
  "key10": "46BYFoKKGui16aQHQq2wpKmuAbUhDu8hVvrhXyxVrDh1paW7JpZ1YunwPY1JmkKuNPCbPt4UTm4vBMwUhTzndHw2",
  "key11": "odsqpMYg5rmuuMbRDN5T18wH1ECzh2hgBMUrbtit18PnJSWr6cnm62HA3yfj9GCeFSTorsGAFot7utmoTy4BvUv",
  "key12": "L6JTJndmfvrJnowy2XAKNX7cCaNtcDASiyFP93m2SoA5jqea9wEYx4jaGgrnWUz3A1JvH9DJAvGUcq2pT62AnsU",
  "key13": "3baGjz7jXSEd3KBmYCfQiLowo31VfLMuwPhJTMk6ghqyWkSEpcEKoTYwEfYqHjQXtWfdseQeDWzfEy5ogGAvXSsa",
  "key14": "4hmQ5AP7NExD4q8uvb2ZiozYB1w8CYhJwfApwDzZQeRYaEnxAMJjHc3vfyJKnrbzhV2GoAnuvBTvkqCbfRnewGuP",
  "key15": "ie7vEy8B3sfkMGrcXm2Pr4RZMJxwyhZfywmbK6npahx8b1J4urkiVWfJ76qCtYnDxJq7hxcSf1txGayaGTXfe5D",
  "key16": "5JbVQQx2nrNfSb8ofXv3NY1fh4Eo6ydD9ewyAnydjRpbSaQ4DMvDtmM4v56Vzp9J3CV6tkWGsR4ieAvWJ94EFZwU",
  "key17": "53qdMv2LrwCFf4qmUK1fLJHWyreznyz7THA6yTzWShhEbo6HBYeJxKRkVGHfhK281L9hs7SposASGbHEdrkW2PUv",
  "key18": "3LiyQJDnAUgCZqGw5gjoKzpWZdqvnyBgssiayAj1QH9VZAXL5bjhZp2tEWYoYnpfedhSEMXzs2h4zY34nqKBwto1",
  "key19": "3p3KJAhcUSrymmRpzN5UiAFCUjkAjXvMPcEGHgN4pBJxXpHeRdZLhLGqB3462wTZmRjSPbsP3jKG3KYoX4aHqwCp",
  "key20": "3wbVYVByEoWN2u4Tm26AhuG3Bh3RTWvcnwZfSNEq1TMyugV7S3an5nfE66dN3QFYrvPPXyxkvs1bfNm91ZyRTFGV",
  "key21": "BmD2nwnbS7kyKdVdKbLAa5TL4zmoaHd6mFDQpPAzz8YtpAnqry4uJ3SrAr2RqSfQcMdqcrWV6DqF6wGkGJXBYPp",
  "key22": "3m9Y3p7vaEjXaDkH3e9LY379kNyUiuBi5wfPuVuntNkTi8frkhbKmSjVg8W7i3hsWuFaM4nXs9H3SgjLQqQ48sXq",
  "key23": "3YhRqdowBHiaP9Ftjr8VsJvoTQKQxsiDzs5FwX675YDuK2MuE9cw8vMa5Fs4XBDM9E3RPVYGBpjYmEuBJorKpYLx",
  "key24": "4EVeSNthqoP6gjmSwnCqkcPPwUDFg78g6TQdqBsiPiSud3zkauWxXhhmYecTvKGttqCBTnnb96d19wGtvG1z4vcR",
  "key25": "5kdjNWUg9McgJVpedYaJCbCPbTomZiXZT288FymvQwxCghsptCKA6dpq5pcNtLgduMgK1RJ7LLUq6DN9r56md5Lt",
  "key26": "2Se1UJk1eT6shSjrCrRhQvEG6syTH1Rib7qNZJDYNnNnUs537FxMrCG4Q7sXdmWsrYBBK1yLFMAheCN6fWD79JxX",
  "key27": "66QnAniuvKzpHG14JRmb944wNXNgVLwH5UZksJ4efhxznkqaetKVv9McjpaEqW9v7q17vei5CeFtU3keWvoyYdrN"
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
