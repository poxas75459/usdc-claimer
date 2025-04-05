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
    "3rnvRqrokfnKEFm2zYSfeCdf1CCqb8KFHV8BcwKP11qnbiV7AZg7nnEw4TuMGnjcHXJniZVoVhwBCRzXXf7LbkR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNY3tz83bWv8zkWRSjvT8aMfEfBbjZRzNQWBnXRQ1BJRK8nMsfgeWDX329okexEDEcJjd43aHv5n1eUqMLgTUTy",
  "key1": "M9MS9d45ZpGzeauurQaqYZQNHAp4cs3jqVrkyneaFiLbYXroya5iEb3MEgaJ7M5HP6QQSEE9MZ52AtoE8Yub7Mz",
  "key2": "2zuij4WtHY3JsG4kK92zZS9d3iDGxTQR2erPD7GRKT3TbXMv2QxBL14ZSi1A2gFFpR94b7U2N61ibPTVoEWyJiip",
  "key3": "2zssz7kRdeN5JxMjabqRaasxyeZqPkoJm96uazLTmpCiH35FR8xjnyBLtaxhR1tQQwxUiw9etWi8fdA4nWQV88f",
  "key4": "2fpB4aQxWU3u3vcezMVgSPrkwsdHNDKZyajGef4q7bktdNX5oV75ghcmJFynm64hz4Pgg12ZbdHwrMr9j8esE8MQ",
  "key5": "HxtNCh3ngSAEcR1vGpKP6VCQZdYNBmhSRRZEy2XKLZfDe2kTXvy2R2rHpvWMQ1vjHQ3p3L5jQUVQGDLCM61ACNb",
  "key6": "2RUZdy6dTUH6EQmjba9RmgCdwpjgRpB411AqTGkAPPXfMPHvxVESa9DgBDY77mvb6vjsY4segePJmJiJFaS3QFBn",
  "key7": "ptNd7Q5wFHWrcdBFrruz2tfEsmJgBVnjnj6S5AX58rz5xTL3AfqvJpSxsPMkkTa3qUhyjXp2WwfnVFdzHsmM3EX",
  "key8": "3ADANNKvfMWaLXJBFaKSaDbGpN7LoAS2ttK35mKcqzoZrKuXxDbV2KfvDUKQnpsi1MMKuZg3caL6yLHzmo9vMRv5",
  "key9": "2uTVWvtD3rhd9vUVfEANwTEQ6enUwQUrrfPE8tBinzdNYe3R3DsBW9XuV8JhuS3c49wywav9gonrRVpYcYzTiJmo",
  "key10": "2wjyNe1KeQovefF3mSkVbHKdVvFQbZFLcuQqvLqyeSJwKpCLLvfJpwTKHnQoWi5q4p4F3ERQ2Gam1rhZjznYBxV7",
  "key11": "3hdtiuvbVXxJBPSNSqj5Gd7fhkGz8pEsnqwt9WA5KsvNmSdYRbAvms71nRfgrpGWtqvrk1q3yPqVxbLBS6751CsH",
  "key12": "4q7pNo8DfPpYwNPgZFxEdYM3Kgbbp7GpyXaYSTE9bFZwHx4F8YpaAM8Y4a1CJWQqE8ivLdrsytjAcGhY4qWRZ6pE",
  "key13": "aGQr8NsS2rAq44bURnoEf6NCAMrxabtxnfUbmvzRSoeMjYjVGutvr86SmNkgnhuhEfJRcT2G2JxXhBsASPAukF8",
  "key14": "5f7R2kKgqnEKEqZ82eshWjc7WieXxsxqGFpiZiP1GYRyeVWZA8Goq9idxj2iU26fSwrf2yLjiKQ272QhfkY8Lrvc",
  "key15": "3Qveg6stKVEYkEVhL6k57jQoPPNAkrQEFSt6ErfUK9B7gDenfEKXQBjwi1WSqSzHW4AFusmSbUu1EA4nrbcjvsVJ",
  "key16": "JDzky2SFheWV2B5pRUb9JkCv12CvtdF5L6gXiKgrhuVS8JMjx7wA8ziwW5ovVKVVhpmVEAZCnsqSArtqbWL62ET",
  "key17": "7SV9wqxE8QygqzjYgkKrXi5jsr22yUFe89biD6bLAgPsU8YZg3Nu8bVdBBLjzz8HJnuu5McM3UDTFme552fWrRX",
  "key18": "4wGxJTdgbEq3s63fco2UAisBn8qZKcYAEehtwuFe3nWsufNt7PQQbJHKT6Y9WuEgAmX28JadT5wiek8eYD7Ac8HF",
  "key19": "37j7a3mJXrYd1WYHWtCGCxBEbqDiNAZsNu6UHQUkpWVZcaVP6xyQiuf6ad7YWcyrd5RVDttaBckDVDDR2FpUK6Lk",
  "key20": "3iVEAC1WMAZdsfUXHxczSibAYiJit5aHfT2PwqfHhsA1o3b8FQeGoQLNxmJWrkiTrDs9H77Kx3hFZW9RfbkW9FKd",
  "key21": "4fcoGf3ue8fdedUUniFTP1dLoZCKtC5MYmBe49jrbG25ZH7G933YSkX5gScCnC8siGydud1u1A2skDn3boahf92w",
  "key22": "3ZoWJoXZGusmCKgCpZohVBFpKNtd9Vq3kXZ41gfUptvaSVAj4M73wkLKYFkvFFxwJZu5H6bgouYh8XjA2wt6JFJk",
  "key23": "2Vug4XrYDHuuSSRVUnxpm2Db3WXwNP7tt9c2MvzQhGL6H431jBif52Xe3mdoYpJSrjLWpvZS43gvF3MBWxTm6tD3",
  "key24": "3rNZ8rvsjBQqwUQ3nBzWDh5PbMnc8HtZeBGC67wsfdDJiZQMZriYgZZ98prKvbtRCYLE3VsdbkD9FaqCC52Fj97F",
  "key25": "5NNJC1yZspiwGTgBhZrMffXv43KdZn9yffQEugeUBUGmZ9FcX8bmkQjZCqTnwj82pqBbf991RTgRaacd9AKjEGMw",
  "key26": "ZeNRtiVhh5zG3bmRdAUeSEdtzN8qqezuJN6LPXroim3RazUp8HpLqY7RwXS6n6P5TchfRd5cGsjHnKro1tWMuN3",
  "key27": "3QXZuQLci4SAdXfgJbxrUwydyGFevtoHPnHGphhqUZDMdNjGMhZexe8eJ263sZyPEKUxmXgZ5hLBRUvUmmiCKYWr",
  "key28": "2f16ZBCyP7hQmQJUWgit16qqaG6kfq4AXohtYPydH4exMxgFierhbNk69wFUJ8CKb4pKZqk1U9fKYPVU6hHhG1Yw",
  "key29": "3CF9edzV1S9Ddi1Xxx4mhoNq73vjW2Pz7nYuTHrjmeXg5fbZ1PiYadX9jm52hBcMP6gNvaJwMuZAfpAtp1fCYUZd",
  "key30": "3Cg3UwkQzXvKCNoSgwp8kd6GrceFSTuKFq12GLco9YKoCU7kPK2kGj24Sh7u2UtQhKKj2QFqU32jx33kKitxizCY",
  "key31": "R4VY9E2KzmcF77Me2PGF4izEVZUHPhdSnGpLGhsoZrzTcAFYfJD3pFvguFcZzrYfKRQup4i4S65B3LPvDoGsMKd",
  "key32": "4SJSMcUeDVnzp56HzY3hj1K1X6D7wkYhgN8sKXJeTS6PfUFJd3raDjQrpj7sNYwkLmcFYqtPbZoeWn2kUuqfHBBS",
  "key33": "3hCHRDQqakNip1oh5DhtXNneZ2JkuWbWrLX3ygSQ8iApyaZ9o5QWiQkfFRZrpsbvRJcmVrUfyaWEAAU58jG5hXJq",
  "key34": "41kkXicFvDzH8v1f6jnVyUzuo85ga2rgkveXST4RY3DZYbA61hRJay6qo4DRGWcNCP3Y3dp1ue2vUj7as1rc6oLZ",
  "key35": "2feRbfwnWaGjJiwcFYsQjkWwW7Uf7Pm5wDaTTrZ6qAit2X3HgDND1wWUoE2VbpDsw6ppUR71YsQpbmtvpx6giSDM",
  "key36": "26XAKCNQwDoHxHfPjcanjJHzibLVKWchFC69vGAtJWo9jHDZQwjcapWVTXXv7GwLNsNi1SqhDn3FsPv5gtkouoim",
  "key37": "2iUAK9brrU34JzJATmwfBQpwNZX4hPp7mBH8KLfaMzp2KpyoiHXb6d6dxt9UAeUDd6AoYTgz4tawkTxjw2r7Yiai",
  "key38": "432TLoYT9VVkCDvhE4hRbe5vwy4VAmSMeD9WsT3JW8VCBsSZkSPvzXggrgRMHGuhxJDaZaEuPLwL69FW3YUEo3go",
  "key39": "4z4vxkVW1hfku4vo6N6TpyFy1CmSbCNFHJZKHjEmdoY5YKmTwFaS6DiSVd8yE4kcPzmmKs4kFWnFYFiyX43j9wDn",
  "key40": "2h3oNFWvceY3bdV1s5JBLVRmV57EVtVMwA9ZwQvbE4p1fSY3hNpA6XNzViePQipNyhv89xU6u2BX5LjYQMPYDzeA",
  "key41": "6Y5PaUyRpucLAToZQYJChNJCjonehyjV3rGKfto8gLzHyXtPvsZCzv3GMYJrhxnyXT7e9Z2PpcpzPuKp2a1BXz5",
  "key42": "5rWLhzF2JEcxoYNzsZEoJUg2g8njFfZQNbX8GJxhoP9jDYKYh9y3jfGgwxhYjXkeMAzh89bUF8Sab31sdxmam4PA",
  "key43": "55jKVqmhrzFzQrPiYbcCAESNNsyV8owC9j7S3uKAiy5r1JHvK6kSRu5t1hgUXBgJbNBknL7QxSZ7p54XFwtwhiMt"
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
