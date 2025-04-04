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
    "WhbK3uzkie3zobGRb86Jk3qz1Kash2q8qgYY3npYaAzGn5RWYhEguh9o1iHeLHKEr674uF7w3QiMzETWWpvMA9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYSzL634XM9KPiaeZXroHKaMQGCb48PA5GKaJdxw8Vs5yfcB7bhnznpbHRWo5GNhmzk5VWQpWVGZeQ7bE3a25WS",
  "key1": "2YSQNQRBRckiMsBhuEBxfeJhWkBnUBp2zgfrM1mzPvKTRbb1PcbuDkFAYswa1ANpcZ2eBMdNgwyDFQYr4PaHx7XM",
  "key2": "5pJoEmrPVyT488e3uzC7n8VzPQy2rc3FAdGmpeutkCZxfcHyTrQBVg2y3jvrDMVmf8QchrTinq3hCwoehrQmY734",
  "key3": "3vUNpa7oMUZ71eqqrVFEMq1zVWdCJ4ib5BW9aiz24nBrWvm11rKFdabR8Q49qHTZKbQppzMcBBQ6R3NtcyfrL7oE",
  "key4": "5Bhvqz32fYioDgKrgKNv8NwjUBGBopHp3gHAULjwe34ytYP3AALm9URqWXSqs6gECTPR3McJNpx6G8CanJXEgjvN",
  "key5": "2ZEHJkrE99XPQWtbDNA1xggNsw5fvAykmbd47MqsjwCmwhi7VhVmzEzcd9u1je5RLdMWX4dpWBjiHvXAKXrvyVLc",
  "key6": "5HBQhRvQgZvu8KbSxLj1bH9RRctpgW9pWqwiq6E4CGDX1dGU8WG3XzZ9JNNrCJLJoeVaay9X7M7VZVLmG9n5sPW2",
  "key7": "xFPDhxonjuvKgVh7Lr3FhVyy8vCU6euxK35CteEgsBy2zmPCqun6u6sAKdCfe9CaBQgHfYNW9G9hKuuFG6dEHeS",
  "key8": "4UoANMMgqVU5UgqPvcx7fSX6Y9zi9drxAvP8CJuP8Xuxvpamz7CHwTR3MhyAKFuJ97bKncFqbevpxUxjcrdxZ7s9",
  "key9": "5vZq2JgRCr6cH7fbLtgVgp9WUigQaC2nynM4DW27q31vHTCqpS3LVRjiCnra5atMxhahVT9eYko1Ke9a3cSvHBe",
  "key10": "1tRnUby3A2q9cqFhf25Y14aeWBYZZUrUYqKhh99sAsP2bouo2JP8W1d8ygavNE1QvVGhCmDpwV2otMEugGiFWsn",
  "key11": "27gHqRUa4ZNKUQkiTKKnqh8pP4jU5LZHY6M51hrdKSSGTjdQJ7gqvgnp2uN9BWnYmMn22wi42D6ZuwzmPNx387uG",
  "key12": "2gLGgZsKyvhGaweW4ugViGKNhqmWAd3DUGXe6eNZbYkRNwRHB95P5Q4XVdhM6CRCo8tyEuCGFoi91XD4AutMmcQB",
  "key13": "5JQgvk9dHSgriX8dDgE7j5cQehofWS6j9Yawb3mQ8whGJ8kMpd8JVNuUmsUpD3ZTRhoiMsTv46bGSYKFyWFbKPY9",
  "key14": "c4Judfh7xqJ2bxkv7ygJ4NDXqUxcGLeDWdCmWbfdj16VMUXFpik7Vs6yuCrc3EdtcE3cYFBW9DE97Scmphf4VKX",
  "key15": "3xchCmXcHzhnzxzcEcfXmCJsiTn96MFZ5irFDQhBEp24wfTjHvpE3ordg4ZCUdE8G5FHDk4DhKDE4PzAu4XaHyW2",
  "key16": "3QNG6wbaGvF8XQvrDsUhEwo8DAb9NW9AkKCPMb36BeKyd2PgyfU1uhUSfW74Fxs2f87qqdyFwkPdnpNWSbSu6WVx",
  "key17": "38qLiGiWCS1u2eZPLAP98t7JfJHEsEtUPAY7at63oJLbAnY5g1wxB1bqTSVYRpa55k1t6qzyZgxLT2o5VcZoEZqm",
  "key18": "f8e5kqriZMGPWMhUaKYu5nQE4C698vDcXJ9h9FCtAzbWDgUjF7NfGrT2F262UUAyKDyPXNJoqyC14WEsEohJ4cQ",
  "key19": "4KEdzsi6tXLNDUj5K5arWDG186F1UKdXneorahpZW9HCmV5vRxykBtEEhae4jP1y6HGcQMSGQitBs22Lvr9xPbr9",
  "key20": "2NFhHpLYmV6qFAQbNBeSoGZPWXCETAH39KskqdV9LuJo8KbDtBsqY5qmqh6h2evESAVHe9oTXf8xHYFKYrXeiEdt",
  "key21": "2KJ12Yajs7PJNij8Q58JN7hQZKHuruXr59ouioS77fGhX9BsiTigNQV1koSoNfVBzp82vNa49onNTGCXBrza7jbB",
  "key22": "2LnvWxEUrnBMgmGF1akWA6cTngQqDjyWqUbjTSaTcCmmkJHyTM6vCEwTrekgnTtx3BXyGkwgfboXWPmqfH2MTYFN",
  "key23": "47r8rgPu1LDMqGsyfe57rzcSpFYW7zbJrNnsAapv4Rj2a3D2TCxSZ2S8s5AE5DYMdrQoinq3B1amcmzrsQLS3QN7",
  "key24": "4ghkzNp1vdXVPHPQjyU86iXU5TTLiuaaTmHdCZcUPuWk8JpbxXqPavJzhzFHnQyyLcQc9B9EqxaxjHtKnhzx2xsK",
  "key25": "5vmaAS2WMaH2nKgWsjyZG2yypJ3XtqCUn7FMFCb3yT7xUzCRjFW1B5jcdJrdJ21PHFuzxLTFZXqKPAncyByt3ixZ",
  "key26": "65CZRvepa3NWqCgjGqshT3D65nKjk51i9HMD3WB3T6ecuD5vAb9Q9YvphpBBBQHL5XvaZLm3dRxZkbnyUnJeCqxH",
  "key27": "A2toAkkpQsHUdsftESJC3dsDQqd4t9irz8d1ukw219Bh1pzQFGCesUSy4ozSo9mBoTjtMrcdaG6daBGUMZSeVFn",
  "key28": "3GxBbfeTCLaMXnjfs8TMgGfTEM8AhRdjwR8gu7a7VViT7FYDgQZJN8HtnbLfbfqwWP3qsAVnSUdi6zddbmAtmfMn",
  "key29": "4P94sAfezEtPiABdH978dMrfiWsuEZvVhoadUAHfWKNGC8zXNPn3HmFLX6fkmV2RyYBiQrZGd7Zpq7X3fF6QgH3A",
  "key30": "2J1HnpBeVJR14W4Eu5AZtHEpBSoXmySTd8mYb7xAgTMnJxBX4wPGookqCncz7tj24DTt8UrrVdov6j7ZpxyMrCBL",
  "key31": "2Sa82E65uqzonMe9dorRBL8bfGfdUzSdkpu7cge2rDo5rYB8o6AyP9kEtpHCvwDDHqYQoGj9z6toYBDtGkPWLNwt",
  "key32": "2E2zvK8cEdqgCG6vrUwMV2k9TdD74upWdYLc56Ao7iBYXh884Ba3G7GkmfFWrKvAPDWxXVfTzUwct1uFFQHpChYM",
  "key33": "6MDyUJGK4nC8fzpz1GypVqAYQQiW3qM6uZMkwwsgJDdFtUL4eHT7y9rNLFYbpRLcQ96wwE4j5Dj7Nmze9eqyDd4",
  "key34": "3P8orwM3ZEbb2dYL2jWyRxk1pQBkbmrghDV2ZGCFd5ak53RxP5PZySKXv4zpRLX4rn9GMe3f7UhjomcrwZBsKY1Q",
  "key35": "FDNYrZvZHobVEKTqRisdRwNiKMqQh3aHMRYYCFYXr8EFxMGhvSgugwoxzJPBdwhi1URdLWeAjXvkpRr5GSAriDA",
  "key36": "2PiePxeQgQgycjUoyJLxRNPyaQsTGheBL1noRZyNA9gYwQE43jBTi13ARsetfTKEQu8BAJg3wC5kMw9FMmHDBxTe",
  "key37": "4YXNiN2YQ7Z7HA8bfKAn5T7GTZZJv9rB9UMY4gMKvpVSyxVivZtWQD1UhujFNpsEj33xkR1GpaC6y9qdae22nPAi"
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
