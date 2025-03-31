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
    "4SjZgY47XGnWWV4yMzP8gudec3oLrHixKic2yk8EUge74SgAanBA4VWRqU38nS5YVWnfUHAmWMt2YWPeUapBxebz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7B8GCcwCpys7ifJ8Ccuwtd1UzZoNmxxBZrDFxNpLBCHLs2PLtCVifF9d6VGvm42qr8f7H6BKPtuJ5ueCKgiWCd",
  "key1": "Jtx7wwtCTcjQGEqeZDvEMR6sjhjNRNsZCAsLyBX9XTWpUYmE4BuqUkegV1DuWknUUkLw7C1eVMJBfAwgc66j8oQ",
  "key2": "4avUKrLxdpU7Tw3FX4BUneBsBCr1cWAGcQhi5TuYvn5GRNqYiEZFtpnMxc2LLqaX6psQYuWwQV4GzqwPNkYqEzwf",
  "key3": "2hvTBGjD7SasKEaiASTQeUf2HFnZsqWPfDY8pE4Wx39y9wEb18tAk9e1BDHYjdhFjRCYCdv2ZjvgdG4uvHEdY7hi",
  "key4": "4Y4XAWTq4abmmy7G5YLjHAUTgaNnKbbabk6HMFttqkssqRbzAeP414SKENfJhrrJA3yB5nvQkZR6VKRP9GkNcVgg",
  "key5": "2BUYNjm6LfWU1YNGXH4NbBMnvo66EAdbLxiKGuAvxptTS48SYBC8tj3EFZFrPJYGkVZdDJfjErB6on8DjqN9R9kB",
  "key6": "2uR9eEHQXKYnbFnaW5CV1cVxfuEmLyAJ128NEy58MXFK2Po2K6ndmnTukiNerd4K9hV8RucTCNive4c7WHouLhFp",
  "key7": "4FYHiiTZJLhj5DKLQHebYrtL5oATSJZXV1GdNMNcGccunaSTkV4rL2XkmKHskwfapT8wquicAsxy8qvNjosjZJX7",
  "key8": "3umoPH1f2dHTfaH6Fp7YKY315HsCHGHajUq3SdHpY8r6k3nmj3SaZKCasThubGhDBBYhmC3QNFjZns5mjQbV8iwA",
  "key9": "3JCskRqpXBdZa9Tp2PzLH9AWaWEJwwBdRov7JAURLbkZt6PfQ5C5jsQzSqQpjP9St3vDS7ZqmPHU2fAsaRYRAZnK",
  "key10": "259shUkoMvbt7nirb5B1bdDtcJ4XxDLUAUzfL7fBzd7VBYWyCRThWhrZGzD5jonbTF9kh3RVJsjjzWQkTwKRvccv",
  "key11": "5Xw6qP9o7orjtQctbVKpvmNLNQkTqvj9sDwLYEZuSV14DUDW82LA5KGprKtq5snwv7pe3K5dxUFQb7GxzMrfo9Hr",
  "key12": "2NkD3uCkwt5vmYqYxHVkjg3Yc2Xeqh6gxSkyRa6GNRJejHAKYHgFFu1us4aJSL3AtKXn48HmdvRjqRQxgPcqZBTh",
  "key13": "2jsdmG7WS32KmdrPfkuvgUWmXn5VFPGujorWa53SyyiVNcHvcU4UMAJSU1JorT9saBf9TJg4HezjtGgbzEYmsR8u",
  "key14": "5SsW37TVMp6e1qKXVMd2WT9giRGRTy18LvjPgKRenandZ53u6pUMHq6G9vmQpYXVx4nrCYK5s2kdmd4fDe2bfbc9",
  "key15": "5Bk5Kf23gdryBrTvjsSgUh5e5gR7PRritRgefHH46bT7Evk6fDzP9iupKb3e31dWQv6PTizdQeBnr8dCkJS6ELWc",
  "key16": "45iwK57Y3LNKAGFa1r1Msco67uqd9a2GwLrEqdXNkL7PByihrm27347Mk4QAvB2vwVWXLLCwjQidxWob4vU9GZyA",
  "key17": "4FsrQZsEbXypHiXMoEu69kKRdStdMAtcKRz4Hk1tRtXLmvWYLSdoo8NJj3VJ1SL5X7Ejjgg8MuWnCL5CrSw4vpdF",
  "key18": "2yRHsjVex2TqxQ5X7ehkAVtjWRzfCCNrqm7bscG7NqpHfr9iJ7koaAa7k7LNFwg3kWmn4ekgQn4vkhMgSeQZQ6bf",
  "key19": "2R2vBP2rhpWLa1kVXFMN5UP3Xoghqz12y1MNuNVJpLN4hyupwzCJUKp8LW1sC46ie3xqGLN389Gjj9QStVzCcF7N",
  "key20": "2CPYu8sa7fk6bYbfRmsmotHsbQYG71QR8haxCaaZJ7Q6Qc2big8p4CKaoH4kGExfYen56v2DNYFga4f6zfnFXXwK",
  "key21": "52csVA2tAzSmeRSySwpczrs3NPVPn4kHZY3RU2Fjrm8pBZ5RUiqQXeqJogHah19VYRJEiFNs4Ji2ySp6CmNQ53rv",
  "key22": "5m4kugUNqFPWPXJ5ip4v5QMkxEYbg3Gwnz2TXA17sfJmz6Ck7MZfq7g5J2HhDLHgmcbs9f5F3vtYYnPUw3uunGjz",
  "key23": "3YyfTffhDm1Bj5JbDjc2ijBe2MsjE6XTnAUJ4RrchR6ZxcQWoE6WWdAXVa979kseqmt8gwv7k5guTPuiATAhJC7H",
  "key24": "44xcoWHwrtPz7jU6sRsRaBodk57FapVzJofUaK5FEzT9CMjkUrXS4y3n883NndKLssWzn3btBQSmxZf3YhQ8EqW9",
  "key25": "pfReASMpP9KsK5u3NEYTLtLbzE3er6YwBUk1F1E3QxvSP5E3P5bnAdfKNByKQnGuBVcUzYQZZvTsVTFySiXYDcn",
  "key26": "5jFymovEqLGyKS33LsQD2fgrQ2c32vUJrTdNeqccTp29WNNXnU1sBVbeeo8iTeUTDmKuV5JYhYjh1Ef4WLCoF72P",
  "key27": "hvCoGe6Mx89to63jLKeHjQyXSQUkdLr2pEEeSK9dwi8vj9KnJFGyUEfH5jynHWQDQmyTFawqHQjP2SZQeLRuH4M",
  "key28": "4TSaa6qYsSjUGoz1pMnrfc4riCfcvwh5S3vSJXa6ArKVWMMUmDPMRvNbrPfTKfr8vQGngPnFqQw3KcCkojcR5QKX",
  "key29": "8vhA56LG7fAREZydSULtLPtiC32CBb2DDj4vY9HfxXDD7XSZfF2WAQp1eEdZyAFEUSFjL9gRCBWKAVR7gSJy1pM",
  "key30": "4LMittbnRnaEhRfQgGN4TD4Egt6uXYHNxnVjhUiD33BzSEmSqN2Rz6TgA1bWMMVgXmuV9EwZiD65cSVph1zuGxGB",
  "key31": "5AySQK99vcH7Hjo8tAW843qE6N7KMEjzCBMRzXGnPtWdCubaxJzvj2p8p63ZcG4RJebyEwAdfkYzo5wHrSZXnGrW",
  "key32": "3wLVfWJWMtmJn4dK5rav27jAY7TeRDMGtDaZkLz2yBJDVjJM7TRhTUdiCJ5Gi7Ts3vT9dGCG8js25sfnvHNQXR3i",
  "key33": "3KzvLyEwxTv87UbVWLNvnTKZVqGgRFqLByfyoAHGJzUb8q5aQGtbTpzfZVyJxEDB1cWn1nX1eVB9fhZdGut7NpcM",
  "key34": "fRHrP9jFmpJX6iyT94BcM4NmMHyMy4xoN7bcHeBSAiZBSyX3qsfZYmrSyPMiKPyLhFsxuKk5SrYHDs7badUCxVh",
  "key35": "2Sx1J1D1osm4FBRsC5avk6F1fFY7QWFpQZBatuHjQezBa3SpiDziKn23vVVbgqJFSf8nugCZiAKQs9CxLENpnW7C"
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
