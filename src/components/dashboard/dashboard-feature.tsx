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
    "5BEeZ3EgyweiEAUQ14Zte51AfFEjAwHjae44FWzT9wPLD1zbmxzJ1YXpFjWJoqSUsr6KtrtSUrhbUmby3T8zzirq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tey6KTjSmHKSedsSZQxFpNApKxMzd5LYcGanjAnAM2XsNNJZxLEnWFNggkrHAyVH96tdh6oGwmg5iEFHmU1XbE",
  "key1": "2tX6RVrK83APU4ovGNpBXfE9wNdRfKDpqGrkF8eZALHb3zG55kiWADHg4mHpPGAa9QTTNomYrZt5JbqVVtsMUs88",
  "key2": "5hbXaAnfFA7u74A6U1cjtm3PwcvLQ9AKhyesB4KiwpcSaUDxnjGUAMLUvM28dAobzvD8ZiCdbmsKguJ5UxFehEcD",
  "key3": "66Em3h7XExTK3e51NLSymf6fLq2krCSu1qNXk6uSWojhUWdRPZfcnjEirXStpUKnGgu9J14jSPjf1yBUdLUtrHqV",
  "key4": "5fghvoV9my1NgWQkn9CfnYM5wQFGBFimeiRxqhvS838WeDzPgnAx83taq3FSXWEuUZpZQSk3jyvoCSiU5x2or6eb",
  "key5": "2aUGhisBQ1vUVNBA3B87bD4SKVy2KzBBLUuhdpr8hGkPT7Q4ivthvCKWUg9XWHq3rsAn9HU6fG6eRg8GMsRxPSQB",
  "key6": "3rednLGauRyjCBih62nmhJdTZTJhwrs8XD5B8YA8yLNTDM1t3V8weqZdwwxafbVwtfvK1Aqoc3K3rgARekyZSdyF",
  "key7": "2UvDAR6FdeMmJzmQNJVRKASHGz4WvKJ5Q578YncrwqfQrSnD3mSCQfhgyECBzT9ehLjqjdFq67Cyx2mjQUb8BxxR",
  "key8": "5rRUsuJs9x4WKtjFzJE3ngbDFDJ6tvLpUdpHx7rudWGRyxxbfdfohZ5XUHdnobQZqspe5zqKQK5TBwRUNLdW4i6o",
  "key9": "ZTRsXRkE3CEmVhXN5LoCtdNeSV4LFndLtnybTDfCHRVsyQ4FAjvkvccJXFAj9kTHgHva45fE9XRrr98pN1PKz5T",
  "key10": "5SADNJmJDnv5Xj6ZxcJNj4KkjEB4MfwMp4V2gpv37fzRdSsByNqTNcQyHCxQ4hmqfndPZmW6u9FsVPhQ7aatkd2t",
  "key11": "65UV1q8FEwLL8xJyEAXsSQmYDbjshyvdGor6iLWAZc9kexXXvKmENcy1FuUciTGZTBPo5cHjAm8uSBDVJVGJvbWQ",
  "key12": "31umMj6fvp7KbheEf2Tvdn1mnHRbBL9UVfx7rcgcuzuhkDASNdM33ok8vvEtXjwTbgqqg7aKsWgjauKoRzue7qia",
  "key13": "4y6ehGtSF1XP5Q8PqB5xSLHGiiiJLGJhfUTtsDUfdgHSFtpJ7FuwcGaMPxkxUoQKfdakXL9FKXQC6PMRTB5jjqmT",
  "key14": "5B8wtYUTnFgu34TVUnbyPhBUD2cu1z33T9xMWKPf9HgqMoJBDx9jhs54Nbv3Wjqq58GjwWgbPjxEXnuP6NHYH6rM",
  "key15": "2f32XQLc2tt74n1C68GYzyAFxLPC9iNoVy9dWncvMnZ7EL1HUmRVFbnC7VsSw7Q4JgAEhVqRxGRYtLQt9jVxfWPj",
  "key16": "4VZ6gruHSzYZgQNYysWjqzZFrWMY8JeXisnt1r6cu1UdmcXQVdZVSaBHZkhg15qCywyjxkWPPqywkuL6Lm5gUoRX",
  "key17": "675f7Bu3TNjiTm35XmjwSMnfAoe2PQzSa2UQ14ABUK7kCf6cqiPdtMCyPj7v6xa4r1J2coRvJmgwSS6DoaXgqWAU",
  "key18": "1zNzhE9pyaVJ2U2EHb94VSuuWaCutfCcBv7DZudqTYzvv1u7AsUAGE6FDGW58tvoUJDKtUXW9VNLvzWF5A2mdp2",
  "key19": "5JydXeC5XSDptaLyjdmW1pjWrrAJs1W3m5SM22qHzmiUTYUqsVhLK8iDZRA4rM1K59kjYzcqsrRsJNpRj2tEnrse",
  "key20": "2mWqqyPnwzdwrEcUERfnxNBcSDTQEVG5YZcu8fnGnh321qzdDSDndy7BbQvhJj2i4KSfiC7NBGbkcYpJTQucAPJt",
  "key21": "P7AsGZ7xtVmwvHmx5RRR3at4y8N86cFnCCHQhFsQ4ngVZzrGxCjnTJVxYUcYV51go7BHPqSohx3wZyAkmJWGfND",
  "key22": "2EvDfSKXRL3Lbk12kK1Dkeud1WWeKahGuovWj5JL5vvWCa3KhV1MmUBZW4H4vGiQqwdisejLJ5yVByGCcUkWEB8F",
  "key23": "2hcPNGf8HdGD87f7AD2g9AoBD1c8Q9zppTiruXgeXcWZajfsDP9x4oAdBzcZJDuS7ru957wkeigHgJSuRYzsQPtH",
  "key24": "J8oy9bBt9VzjJC7ZSSxyoc669M9Gc6aPnQWXBXB1soKpvFZV2DxLiEtECNHwa5mXWMr4ECpqZhmrYH5npQRGVkA",
  "key25": "5SgFuWM6s1wCM9VBrZBHZcPbc97JrPosFyxpwEhYuHtfYVuUsNDV9gpqM8Fo7d3ju9L3mppV2WKxeWfieK3PXzF",
  "key26": "jAYXkwG1Dmm1iKaq5jNXdhzec1osNcS3UfS6mCPPJMR8xkm3ydAhBYNbUPuCoXUx2H8LzCX8TrZt5keoSh3zrsd",
  "key27": "3ttjG5AVehcjNxj6vGpcFsbKP5weVgehYBYMhrHFKtF3gXhUeYWyZVGk2EhWjNZwcxfTADTEYMFpuSNx4CPBwnZ1",
  "key28": "27yC1ZXzs8VSi6rYdzT3ToLX2iob7S6fRrCJ1Q7gqvY5wyFZPRzuPmzznFuKPgQKVRpbncHsJ7woTXi7J13e2LDP",
  "key29": "VZyCWAGoa8LVUknkcZQs4VzQTLUDSjXRDzmBWGHiRv9boMZgMUcKggbYiQhRhUcAk9noqhamcLbvnuw2GEiMUJz",
  "key30": "3KazSmGMvBh2kTyCXCydvfZgDLy8zXKxGr45C7LoqGoAeRQ9CUQAkgtwRYSXkSxYMsvFdW6E2d3rNDd2L5HpW9dJ",
  "key31": "2jJ8iS1XuCqfaku4eNARMTShiQqx3APd6BeBhXngMfbsWutiUxRrr7rm182gFjm4m6seejBps2k9yUR9EZTPrGYq",
  "key32": "4t3RcMv5hiqy1uuji1D5xpgEygVt35s2myXqD6kKoZedkEGoVrWthGFrAG78Vz753pUNR8xtpydZy1Dc1ceMT1cC",
  "key33": "4kGAjh11JwVMmsFbGCZDR16PKbwx4yKbFEQwTkr2XJjz2cRwPixcAfCKZy2aL6Q5TwVQ736aDdeXeQycZxUsZWAj"
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
