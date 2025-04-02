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
    "gG2hcndnfqUJ3E7UyHBwtbAxsTRDKu9zpbcEbVKY54WQz3k7ZwFY3BJfsDAAoNk7xWVuxrN1bJuZqAamRbfcWEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKi4VzmjowLqUMyB6M4Xy5FRqPxZxjtXuQLRERocb7oj5JrqjLB7iyNkcizz58jY71S821sHcmKNH3H4sXt6rWu",
  "key1": "2yyZGhEeeiZsXhduMvhmSqxfMuJUFX44poe7ePNUM6oLB975aSPBPav1vhjcucE2ptg3dCXa4i2EzNQcQTG7vTAi",
  "key2": "2dYkyw7UCEbUh9r9DTaWMFp2iMW4D21AmNcFjiJkPFr35s5eQ2xfF87bnkbghFRJ6jbLaQRBPiZxa7RHA2JqbhZa",
  "key3": "13Awed1s6ZutUT5CJEgeayapGq28GSVhPAr32Kkv8t5paPmEScELxX8CMNEduhru4Cn3GHUiuqx518q8gjbwxAy",
  "key4": "3jVwEWZNDaAj9RNn1SFhxQuVS4FZ5xGmeLjQ8wMm3LLRuVdkfypzX7byVxQmuWrPUtczyQXxnfhuDm9Tu9zFsrSq",
  "key5": "51SgULMiLuNevG2eGGDph9XBjvXDqq5xFewtYeUzm5R3RiLPoCvZPpBdcb3zyBpd5TEeECGJ7buyo81RRtZj2ZMM",
  "key6": "62aSAaxufFPBkSFNSfKaJ1GnrmXWSA5LZydgKC3L9N71jXbwJtaWb1Cw6LW6bFEoE1hmaaeRZLhrNVCRz55AVAnn",
  "key7": "s8w5CddzrUoGyDzFs6zjb49sSiXX9USZDaUgnbzRmb4jXSkTyvzdHtRXyUDY5JC6j9jnxteHsQB1BbZ95Hd6HA4",
  "key8": "q8SqT8mTmPt59VGPnr2kzMC6mWN7NS8SJF462WQ531B1xTYb8dxpminyUi7Wv4LmYHLVD6y9mR5nCgJCXmDtH2m",
  "key9": "5sjnVTZ7bQQw86ysHbd5zV5mdmVttpaWWVtDhJy1EMfjJBS4pEMhNFDq7fUMAGPDw7n1JezamiQENVaf1PpwSQFp",
  "key10": "3S7J5iWMHVgBksMKHfpKEsvF9DR1LUyPM8Q1tMZ9dbBTzjvsfcE3TV8KQL75zuq6pXC2VvdJZF8v9Gi2LEC85iJd",
  "key11": "5UmafLSnCwxywq9BCQk2hKfevGrtMJHJ9CrQ9yeNmy2mTd1zF2QQQaLWysLBBdLnpF37uZAkMTQ2xLkyhYkXLUz3",
  "key12": "2YTKMjbLNnxLfrG7shM5E8RSN6491McmopE1eoAwPLSjy4NgpWL8pgsF8VfzPDizs4BwoqBZ6iKw1KU1qsBPwiqj",
  "key13": "3rh9rr8kzHvpYhhuBmwh2avDRjTgNDjyBUdT9vTJF3Wht9omUjXfG4zPHiBUUX1uxmSnwNdTzyHacqQwudBb8jKW",
  "key14": "5PCsMsgHQNJmvaKzuUYGFXnJivBAkKckpNpLqbQXzTYSopB8nLW8XC14hCT7Q7pBsPzkJcSBmEHHuE47Cm2ZN7E",
  "key15": "o8g4iU5tSACgzkVN16osLZ6cjrdJ2iJQeRq9VjaAT9WTi27HTcnTcC1UX1V5Awnzc9LSrJc8SVNU3ExKtVR21pL",
  "key16": "4oHU5qNVmcA3VHjLzpjTzW2MmabMZ3J885BnsYPcKJjSbPVC5Xyn14YqB7HPkdibJ6wX633rYo7HtNwbQVE5eUK9",
  "key17": "2APLXFDRMb6DPMe431s8kEiEYMpe4UtcPXz647b8KJjjp22WVNiDzaBDUoKjaB88mnS5boaQG58L5wkDjnrXKuxA",
  "key18": "5o99m1XvSxcsKxX3x3fzKWCtiCLmNBwRg45t1qvy3uaYrsm8KHEFAFTAwkP7CUf1SMTfQVfwVFJ7qbpuCcacWQoZ",
  "key19": "5ogFyAVZEFY9y6JBG4QfuKxdMFDm22avQyY4oqwBX5vZPJ65aEqvhgmcDeac4cvs6k3QaujttPGg23zVdTjH1GT3",
  "key20": "5hX5XTz6wPYPhCDAc5D6eZfuZAeiBZQAb4oJshfNXPdTeWL9JMvjSCcCqggBUwku5FBm6Bv5vRTqWhy7dF7P9PAu",
  "key21": "23KvAwi1AhB211mUfB6TAvEwhh8GAgpwSARCooAYarmQiZyLUc3XudGkSFDZivjXEZGBHAJNqv7HV6ycwPAEvcXq",
  "key22": "gVUv3KPpkQhWNnodxxRcZZzYMytuwEXwm8KV8T4AYoXqSbkkAzqbCyiFKXpTdsZdP437z5h8M2C7rKimejrDX5w",
  "key23": "YEHyEVZidCRM7ZHr7G1qrWey4UsAvB8BYRyrt3GCk4XfmHfh9cf7cjDc6qs4S8ixn3YXMpxoP9AaRn1TWqsvRTv",
  "key24": "1oCdRMKp3xStce9oreRbb2E8JRCt9ookdtC5CqmnBiDYFKBHpm1AuVHAfFdvde1c9ydTu5eV8PF79jviAdD2BgN",
  "key25": "5yHCc21tk6yoN1fMBWn8kqRaTCkbEi8hgJVPP41wGK2soFyVx8phBAE1fZhqQvEY8CgxACkc4YQrKS99gDhoQKuQ",
  "key26": "31DQV8sfWWWUeSvuDp12ezTdtKUNhyqBTs5kh4tMUL1rKz8umXyrnsfvtnE2g38kfuAKh8tMczbxYKmRDqCPsSfH",
  "key27": "4Xq8HVMvwjecr9jW5adTTqzipgAMPkGKduFtoa2FBXfuEsLCAeVxKKZy7XEK9Yirn5CUgeTKyp3WCeDzyemywEXQ",
  "key28": "3i44s1npzsj2KcqMtQfhc2kS578DgJCTADErGBYnrQC1tMEy4Kq6cBPdbhuGS5EqUTkCoDPY731WA62ffV8NCh8n",
  "key29": "4f4T8ume5hqaD38KHx6ybYfBJs4HAnzLyS39ewsg3cHSkMhRbnEZLVCGedtjccmCciFj8oA3Kcf3fn5Jh9ni7WB1",
  "key30": "zeyUKTJMnGEHiMDJXy6Rszo1c5BhPVdgGCmVjufZ4yFjGoFzj2fHg439poRV5AHikW5ioWkikte6CCWD3uuVoPz",
  "key31": "5R3PuCLxpcm4oDEXS1Dej8C27SwCmqEgETui4gXSbvAwJUgi7DTbUjYZxn9RUwrqqsXyut1FLaxM7j4FxyrZ1ckN",
  "key32": "nLzwaT5DiA5Wc3YWF5uQABr7zJkddTpsLbkqdhKLm67Egj2v6huYRczcvktytVpbkHfVvTDH9isbxfFZj3VA2xi",
  "key33": "5XpyvZVX89JzSra7iJE3cWWke8xSjn6kCRudaRT2BwqY7QtyiW9nnMNbBsVa5k6YQrdY7iVno9emRBTgovueUMFd",
  "key34": "3mZ6wenuddkXSLUrGrdSWURA1eYvE9YzFeJ67yMctmfBNMjosxcjdbTV7f6N6Fd49rTEXq5xPCq88KtyULLHRBzi",
  "key35": "5wPZT3XKruUKsk2H9zNLHvxdeQbUSbdGiQajFAqcHWrjfKUHKfR4msaN9EWX19rucd3JTX19gT13M4jvrbVuaGrV",
  "key36": "5t7vtPtsNXZL9sCfuBWGG3S6pE7M2zn5FcQjh7hXZPY4n5p9WwwSjPU8JmvU9nkDiGSfwk3jG2xP8bZmJxXsGq4A",
  "key37": "5Jx9zxsZmvugtcw88MX7chAo9ssPbYgsakW8GmfW5ELWjqd9e6qHcrP7HJBFXcc5fneg9adVcMeSv7LLLqVKFHUt",
  "key38": "2iGXkxppxUwApSgzyeUhzs9LmgSp1ZJWEph3sm2RSTDgmjVJXvXD6HWMULRoPeHGVx3UiSvoSp9shubNFzgM8avC",
  "key39": "5py72m1nApv4uomSvKNbCjJgmuw5MEPr4GYpJhWndDn5hPu7Qs2LC6vdrpoyt9EiyXqN5EhtSenKR2tDuFaXv1Qu",
  "key40": "4hSrJssjU1po65iLzWxsjx8f47gUqCesf8B9PTGTHuwvJYTGmkW4nB9xMSRjXPZmDFYeBsH9ZAqkScByGLS57qkn",
  "key41": "5fG5WyjYcA7RwvvMfgjW67P5vEsquvAUAgWt3W1vcNLa5F7bE2bXy5ZGQjPwJpk8gMVqUqdkqGTjwWi7soZxV123",
  "key42": "46gdqBh7NxpudSa1ohbCFdYrfQnb8JGGbWNKydA8gfhpxzV2XAMe4KNqSRYiEnPnptSrwihMr5rB3hk4yfvEFPBn",
  "key43": "4i4aMHUqk5LnQJ45ZwGs2Y1G15eViaSvXSdLwALLhFkuG9UDa87C3ACHaZ4k79jLX4GuYBRUQeMKdALde4Saf2Jq",
  "key44": "5KuBU2dUiZVkF8vmZWESvrfao9F7Y2rgS24rEy8xB74NHQst4JKFPPUshenmjYDd3ubc7DC55X7gQoG2iyomLoYZ",
  "key45": "3gqTE6ZVxkoEres5Ccq4Tz32iw577a8r182LiAY7mijtQqsQiBi425LHVnuP1BEkRyzRswYic84nt3wKm6ES8PfM",
  "key46": "M2D9ixTjpWaZbwx5Rke1WhZJZD8xhzfJ1vMpsuUdUaaHiXB9jUNUYv3TeMnpp4kXJbhogGW8nmUSKLfENLkvS5N",
  "key47": "kTQTLaDeooDV9gu2Y6RzuW6dgRX3favYMqURpo5yetNBXkkdwu6iZgNpBsrQfUNkWQ7shrpX1c6B3noatQpTCbC"
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
