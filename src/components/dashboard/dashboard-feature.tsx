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
    "2XMU1hv8AiTctunfnyhwF5uGPRcztTyLM4nijkf6gayURCYGZvvReQr1iPdNdedDykiN4fy5frSbxnN1Y7bfLtuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YkjFTEMH2VSQohXbJaU4x9B2jhJQGN1tgBsRM3wMS9RTteqYqwD1oCGtBBd5ZiJTCHTX8jmHh1dPbqzuLVmnRZR",
  "key1": "2xQ1u4VW5LZ4YWvevf7PgfeNxL3RobqBPDYS8hMwa2mK2shw6q9P1oPNfXzgPBox2hg1TgjWZMysjLzPvHW8oPJb",
  "key2": "UbF8XbifLpFQnaC56ohUrzbMYWjZTJdhxCvuFGgjtYkKXGe6D7PS8fHKJyYSwtP6cGMz3JrR8HGnwBAfedZmTzh",
  "key3": "8QgagLjBE3fzo4H6paDPP3riYTVKsrvpyxeoL5GsPX4afqYopg4Ez5zrF6fJPZJAktHKEGjG69YXj6gZyvJirG8",
  "key4": "2XR1pxkn2hfRPtVNuz9VAVStBtAPJpyvUt9P79uTBvGZrTcGdGfY7YjSt1KDigt5trTXgAV3dvanbshgcHBjhTqL",
  "key5": "5GEbumLtieufa1BFGfwrWUgsKPFDuwrhaieBgajaYLRitxaQvdjuTob57SvYE3Tc6WwCzM47qRm8xrYgtC8WJTzr",
  "key6": "3cNWJAjKzgK2qLU17xDZPb8UsAuNZ16h5AFWZMe2civNVtVtHXfyZQaWd5owtFoqH4ozdnRXRVLJ9nCeKC4zh8kU",
  "key7": "2qt8JUomYVAFyT83HcQTwLAAth3XkXQvCTAabfZ4m7NLUepm3AYjsqSGW5MTjDJj84xJ3WMKLWzuQhraVfVcCgBQ",
  "key8": "XkEDoKXHpM2macEEz4aMkuNUdkiahwziNWfyqY64M4n4yeMLT5aMJdFf3TNPM1MUdbaNLHwNGWHQXnGovkeoZFN",
  "key9": "hF6VvjunG9YePLwz6G4YANGZuktPwUkuWBRVYLEoC4gHxHy8kFbfuEurhqqU2LneQVPE1Sn1zHWSSKZ6UjCKvZm",
  "key10": "3yqa2bigs6rR6zkXGvWhnjafqEykmm4Cfc8Cj8uuZugU6rTtk8jBmUEe8VUT15kswdZLvs5VpnxUzMrhWuHvxFvm",
  "key11": "uccSM7hH7HLX8p2KzqaBqiM7xcTs1ui5RteeYo2L96FEmmS49uSF515CWUnD4Ve6qrCK5fodcxk3ehsC2UvBDrX",
  "key12": "2sUDFdwRSnfwQ5Fsf829vG4itAZ8gyBKjsRrwzsoESTMGEVobWNPQfEhEzttc7GpASJG96dASCEjTmYcUXaLRj5S",
  "key13": "2tQtx7zKfgjVojYDxE47xRqAW2nv4JJcKkVfCY9San4jaSbog63F6ebzsee4L93k4frGthCBEQi6Gpz7hZVmnDM5",
  "key14": "2zDcg7yNdVGQb8FE9ZECT6hBVhddnwbqgzNxa53GteSCvgXch7qR61atEgt5WXxsmaGMZKuFbAsu5M6d3VKNKnMA",
  "key15": "3rwvhmEpktG6Sb8uLcy3iquhWGMuReYH9t5sQMPXod2Ks7uoLU7WNbsF7DapXjmSR6BT4yEhrsGENC9mEJKHYAGP",
  "key16": "w4dK1E2coFfwy4EUSMXo9xfmqetsc2fTSk4dXxzu1YyHg3ygEDP3zUzPHJqg5q4Fjd4ADe4ejsvVEBYxENxpdxs",
  "key17": "3VPx9cYbMNX83wtDr9fSRLeBjtbZvrPUAZPWB9ktkyGg62vw39Bb3qjDNoxRwJ6u3fY83uEKVb9YB1ZoB2MYLBcd",
  "key18": "4VCKHCRoihmR6NieKaBLd6sbxBm4QH6p7Hj14R5FS2mmhAp7mgMADxVMTjKAJSqpYBxhxkLLjzEGyzUPgJRzxXjz",
  "key19": "349NqyW7rLDWLeyF8hY52CWe3nieR91F7yY9tod6yykJQJjFAF2RCpkHhpSTPcsbc3H5MxVfV73j96L7KwyBZBY6",
  "key20": "2w741KhMkSs91NYGNzPcM72vY96WTg2MdfrE549oL6xmwMqZ7zH2xEMtRLzVRpz8s8LJ7CrfLfvtuaRqyFgZqQBh",
  "key21": "2AbMu4uonbWYcHSGzFfbodE9NRH6PEoXasW1JdYuvyeX8gE43tGVnUMoxRFq5hhatH1ymH9UF1zYmCNZPDc5BCog",
  "key22": "33Cig6UxMEyztFzgGVk5qHGV6yWuKiLaM6piw7fHjPYvVRuqgfMffjXPqBtgBd3K8dezTymSPKeJbwzHyQ35XvPg",
  "key23": "4a3fZhaN3U6UwM4Np1shmdMX9Lg5zuJTAHRknhmv9mTFhTV6tJVTbNeJh72HGnkU8jLVU31LH1TjPJZoVtTjfeKe",
  "key24": "3V45yLfRrEkXG4JGyAe5PyUy1ukuQzRBVFJm5puRRKi3p3fVWShGyWjPmdd5Gejccpo9gCxsUHMvVZXdpn4NCTJE",
  "key25": "49SpL2vKCeJyGN843LA2eKu1orCr448CGemAXQ4nBmoXvXsBCZHxycHpwfSTesGxsPb6gMkVToxcTb98caFa8NAF",
  "key26": "272xNNonCkdkzCTUtEh8Xd2gfdeBfkdNU62n6tFbxn3Ss358oewvGfCjgQf5qH7HJShvVxKMkPGh59BXFa62PBdD",
  "key27": "4m2hyDSu9zFi6JgYHdcRBwHnihZJ87UNFTLTmoyQxdSRcPCLth9CQoDxGvSQ2FxZkbRavCSDzS6xw4wxwusFuSqC",
  "key28": "3ZbnoVaCiGgfYbiLFAGzC3rYbw87WDEKVY3ZfFQdMY2b8KuhvennL8UwoJCy98JVoPNYH7ur98QL8WdDkEp9v6ug",
  "key29": "xurJJus6MkcV872q4mwrNpxiTVbjAsGB1d7RW5HnbLigjwDdtQksrvtdxzHMkGhSw4atAQANzMD69UKj8mTdDXo",
  "key30": "3XgP82g6JNst8QCQfmWELCGQ4XdyutPecSJydFKSut22tigCDCMy9nZFYZrx1TMddETLdfdHfVFwEzy56T8DUuJN",
  "key31": "2CLwUyuQJvxGwcXJ2ZWJvZ8QbueN9Hcp7Y6oXWwbgysPWXxNXZu1aPhubKf7kfGAnzt53RB6osrmhTC1sVfN7gZd",
  "key32": "3zusYCWhea3gNBeWVd68oavzYPD41RMzahzCZGspZw6MGy6uc1AFbas2QFF3XFBnKSx64QeGUS8Ukp6bpJ9Yifth",
  "key33": "GRCatQP5yTieR3zD7YQdReS9g5UrDuaUgDv4YjS3LUhsrMmcaP4e6FreNo8MsQS12dswkuzdTbkRJfWtBg2ckkT",
  "key34": "qeJDPJu2JmVBJbnDGESKgwNtwAWfkKWFNnGqrbWiZBkXw4dEZGgWshMS8SSAXb3AgMDqgDjYn5zaf9uJLTio5tv",
  "key35": "4VWjfTafjjDZnpDgnxT5DbyQC59fYbc8u3yWHNUoq21XscomVvaeXiJhk33JQQhhZHPc5pvkBt3Q9qLi88DgZTwA",
  "key36": "2HGP2tKKCWN6yf65EYc2RJwmrWDpPU4E9zPsPfFBXARgxxJXFisxY1EVYPRNuwGXKBNVgaPF2q9GCyRC2w96P5BH",
  "key37": "3EvWbzDAN6qFgCNxENj7uvQjt3JriWKtbNoqio3HxivzDC9fedtSFdjvFTifJAtFTouSgDt7G89mkLLbm51i7bsj",
  "key38": "22xPd9FSJErbw8jnWn9yAmjYJvVpdR1QLRKTgTdYukqmXE2AhT3zz5T64AEFGKwNhZmLTkjongnVjsGXupMx86t9",
  "key39": "wHVEfuLrvhWyNDRkjv8P1VLadTbcfWo8x65ybYr2dMw54WXiuVXLJZSRTNpbh22Dcdp8kjafbKqj6XpZr29naVs",
  "key40": "5HLcRbqhVCpsD33543EZjTosTVF3vCJzdN2ju8JKtG2p8n5dtNwK5BAFcVjv3jaPLXLRTJdueGkkZce1PR8fAWQo",
  "key41": "3cMQ6L2Q7d3ArdUW6NrQMkNDueo2uN92SUZsEHVjPtqTPSCUF77Y3SqPg4fpcgr1stVByjdy64JtvJZE9thHTCqz",
  "key42": "64LWRCTMbKisVTDT2yTFsdiAxQQVBGMQn8DAAopKANR3KqJxJ9jBvkifKNYvFst8ybJWgW8XUjsRWq6Xmjvbidh9"
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
