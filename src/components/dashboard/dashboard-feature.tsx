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
    "3etgwBxNP8cdTMJcMXjmzmfyFPfWCGRPV9ah5cGSwNQKDpMC4QBQxtkNY85WfCmdx32rF4XbZDeDND9ibNipzkzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nT54zUZkVw4zFo9KzH3oiDSf8hdLv4M4PcDqZuxABsC1r89DzEHP236QPb1XfSy2ByhGtSbMz5RZawLRE9gL1wM",
  "key1": "3yukYiSWNPAtb8xy9D1ip5Ky9ZBKA5LFMcQJ9uJMMUijxqUFUTyzyQz6q6sXMjhkPDrHZ7DnxnTXtV8PYBPg3S4J",
  "key2": "3Se7gofPBsX4jrB8m5YfAHsRZ6DJjDokFeD7aZbcfYEETsHkYXeeBEhxH6ARXADyZhGay1b2oN5H4F8cpz3MeVz",
  "key3": "5x19433LCudK6CX6ojgNJATLmepaP7xvPvTWGf859jbfHgeaSKiqRzSUZSJH2zmZUUQBVHpFCJD9RDVzvhkrgeNa",
  "key4": "42a9es83y8onPiuMnDkZ9PmLWMmwsf4rB8oF6YZY71NkaS4fquJ3tpWs5QXyxU9bZ4ZfeFfUaTP4g6zX2Erv231q",
  "key5": "vsJs1UgeXcH6mwXRg635hW8QyGkWAV5m4bPb8mwHzrKEG36FTERV8UQowiVue8ghYhNpHJ9Kry6rtZKzG46b5US",
  "key6": "54rsZ5oDEthT4XbwC1d7po55Z8NSmDe9n778FxkE2enkFcSLf9njX3kLuBNG9AQq5aLVLQfBVaJQcQV9FhJJQDp5",
  "key7": "3U45K69T5ruSJhvetf4cpFEvZmzc6u2jicp2Gom5ESm3JYneLgBVmyFNHSgT79r18LcCeuw8FAmiCgznHXadFjCb",
  "key8": "3KHgvdzuNaB2S1aJKoXWxHDjofhjxkQHPjXW7Mdt5ysvarnPbFq7NkYKjnbpmqQEnoYbBGdCEnBxpM4d3tj1VcDf",
  "key9": "YWKt5PJk8ia86f3ki7of1VsfFWDDhXnAz1QcjqTj96VwpM2UAQRdRuS4sdHFikFRaCEBS5TLnVhTNLVB4NQDtNn",
  "key10": "61Qn62CTyBC5eyFoeP9LhA7ZA1HFvTyv6juv1t5Ah4KVhfm4Zn1yCnX8B9d3eyqDtAaG43KrT9N8HQAHXc7ziUAq",
  "key11": "k9PF2gtEySWHExds9NQwtjAZTicxbefzNEcAukFHQhYqx4eGnWLugwx2b1mLekYe4x61xgUWhuvg9F6ArwTdLt5",
  "key12": "wsLdWH3dVpPemvouLYM215KV7r33ndt9JFj87ipHRAJW3HMLCMZiCTBjzhDKf2FRCubQK3c8iD52WVKizCf3Uam",
  "key13": "2tvoWss2h5F6yBJQmpRvycGBbvFiMbPYfUwtSNnudQefXnYHYV2GPchsa5rGeLfGSngtpWbUyx2LcbfywSjUsdRf",
  "key14": "5PxziHERzjPPusPb3xAoTKwMfkKT5d2JLw7XnFFjMh4FkdeKrknPrHqgYon81hopMfKDkUhbbxeKnYvqUNwq3fLs",
  "key15": "4Z9BsWjqWGwHDDwCFRiGyBWU1t8tUss5y86Y55cUsrb1BnbhcDG7QHaEGECvSyB53og2V2tXeC4nTGcFhLf448Hm",
  "key16": "zEnQvnWycWkv9BvbgieqYVE7MSsG89dpzesrJehZxMYo6Q8xTF7KjyyVbtseoji3afWJ1WuScbJXaCs3RBikwSE",
  "key17": "2dzGvgNhTcFDgvDsdQ6svNzpfCTmGLo5buDu59Qa1UWkNDTQX9ES5cantZUomqxuamsEH8BQ2ivFKR6Fan52QR7q",
  "key18": "45MHFExv2XuxpcNocZWecgKZmtrbmNTWZ42XubJx65g3JG9ccxUeUMLEeVuNJpYuajvWVAmXCAbmr1t9ponLbKEq",
  "key19": "5M2QDejfVCvmuN8qcg9cVutcjw1a4fbaxJNrY2YVyQGzwCPAFKHuJHMqCt8G6Brc3WbkvXPxnkpCZdjjCCqgN8qM",
  "key20": "3ZRWuvUxVbxGyrozyW7ShMDDn1JYgfKAgTDp1ExuX69g6u3P5dKk886PkFCZkmjZsYy8anhuk1m9s2ukx3SgXA3L",
  "key21": "29AL4X537T1yMFSZzPiJvk4qpCGKoqCPRjAnZp4rxedn3o4d5F8oV466z5YFEHNV6b3KVGHbHH2SpwvvYCkfcG6u",
  "key22": "2sFpBCkeVRfA1Xueqru7LfsyQxMc2WGsnx8QBfE68ZJbHeCJLChZHgEf8XXKwWeXWvcd2gVAbShspHvnnd349iyB",
  "key23": "2vasbYDMb4AxdZ66hnU3Wy3tnrt4aVQj8s8iNqZ2Ce9kewS5swx8sZSE9ekkEhuYTpAbf9Mg5wJe7cs9MwicK9tv",
  "key24": "39nZQ22EJuJ2NpVjDxxxcu8cELugZdGj7Co7CaNCHPU8hQ8ueM2PneK3QJCfczahGA71beVpXxrPoYUcYjH39CGG",
  "key25": "2tKHWGD9Feo9ix9oo5nGGxSw1KZDbeYqqj4cHYvfKdQh3DAFRXTcw4k5XVNPpecgaKmKiQNW38A5kifggyQQf4Ec",
  "key26": "u3TSYj2isx3MLE6VqKQtvpdJX8hmbKx5m17HGLzp9e3VMA97kANbHi1QMrNJJU23kKqns5STwsC79ksimfCLWqG",
  "key27": "51y73PiKd3rVHrxzBgPAoZf63KTqvEVaexEBXJZQLGZpyZkSBxZWYuNfn36rkB9suw7LRzivab6TtwuGot4pEprg",
  "key28": "afFGZ47pqWzniisSrQJXvfJgMZAxwsj5fRUze2uK5sPv7kvrSsCGYRr614dcQA6TDwyMA5kxaikxdp3m5NPdGgT",
  "key29": "3naKcQ5iN4Kf9QnCKTBapp1Wj1PgN7r5BoPc8nPiRy2QVNbi8RaxoENJbdNqZabyz3kPmvCPgVqep78bdjBFF9zq",
  "key30": "5o6yAFd9CDn1kkWRuDXbeGnEgr3vNxyjpG3Z98C8Dtw5SsaEYpr7XG5Zdms9TgHj8Cn6LukHs1h5aSMrXZkxAhAm",
  "key31": "38aLEVodcresUjf4CatJgzzR8unuYqAHo7tDP5U6895hhhNNVZqhWHoGxpWcPcBmhYadxiskeu3udCq2MqLL87xV",
  "key32": "254EQ783ZzRNrHmK13e7f9jUkdHiomCro5zZ1oN3qtdPLNnGarNjATxmquVkotmXF7CVH1sUHiJa7WfP5rjoCfiB",
  "key33": "3M1pS4udaYayp2tWrWoAvJWgLc6bMMG7cgkPQJ9XATbX4vqvdfYeNnMw49XejYUXNFQJ6bsxGGcu6kUVfYsdcBwG",
  "key34": "3iKEAGFhAcg484pP6WVy4UV9Yfvum3JdmYbAM5qWFhPTxZ9R4tmJXaKhcCc2tosn9NoqiULqvoAq8SrNYniNZi7j",
  "key35": "2fKkhY7qjHUYfFi3zt9g7Q31yg4GGxiU7RcUJyd6Ae9dfAGKz9q3L7r6jPbKXoa6kixdw49cgnrahWaubFWW7Rgm",
  "key36": "3RoTFmjdUN2ey6e4qpseNzDvRXaGvChTTfQ1H3H5pZuRxKoMyeAcZEefCJwbt4HFYF5GVo9m9pMzfmy8sSSZoXkg"
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
