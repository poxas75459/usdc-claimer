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
    "3YaFgtKBi3Cm57KKejmiBkU6kNHnLCKRgFk8ghxzyx9UXsUQTpCDKGY7YmBAD8431GeRjEDP9SyYG6v88qjBMhbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gpEgPBd8JnZ8x2UpM6WMRwAzXt6unqM7wgh853UMDpS5WdUiGktnXPnQXR8aiFEpgqquKc744xJtBTc8u7d5BDh",
  "key1": "5DY454BxCxXUkGzvHbj6Wc1q9fSiXDAtPXEGL5TYFpj1rD8cjRPNNmjXo9mLv1RoELv3EV9iaoy4wVBBSa6m6Avv",
  "key2": "5fH6LHgo5CMR3WSTZxFGU9eNvR7MehXMadqAauuyi2DenYxsXiGd28pqnBb2p43tfxT7Wt1QuLY5YFLPAqsMeqmU",
  "key3": "4QgivPxuX6YuKykBbjt34EcAtmZbbXqkf7eDmuUvWd16pbVxMVbo7FBnysNWerzw4u2Lo6WdpSwfQ5N5aYF1UF8T",
  "key4": "BUewJZqdkLEQwT2Niv9yH9VPUQ77vUMi56oDXaiSQ8r6ATGMCMb24SHs4bBwQrwKzQBAj96PGoLbdu2T7GjGvg1",
  "key5": "2dQ7seHWUWHcSbVm3N7N95NiR7VxfHUg2Z87gV6PUokoGUM2X9cu5pMGhXcS8DZTyMokkJiY4LUPR51vpi52YUTB",
  "key6": "3QC7ra937zvkTv3kNVpnoXyBBNv6HUTMsqSoyXAz9PYdc7NLVn5e8ySP5rh4YNpZYwdTpho3uH6rAGSQVHMs5Uey",
  "key7": "q7Br64FztTJXdjKwfkDfdW2Sk3R5tffzv9zRugRVpsoHZ7f2pVUSS1XGowb4vSdwXY4oHZ5V5RT1cTVWsyTtLv6",
  "key8": "58EGghXEzUXiqKPZnsuqEg3D6sMzwwwf2Wiw29LVZFDBQ2SXfncF53uDJey87yom38iSFoDVsxWCALZoVRKTdnyq",
  "key9": "4FKY3ZWsERSiRX8QgruKvt7FB2wSGH3QvjmRagdGskXpM8KVPcgKKFQhdcBN5Q9kqYrLNnrbU7kHK9XrA2EppgTa",
  "key10": "4EMLHD5HCXi158V2s2MNAvMsAKLsfT57rVcncAPRJQkJryMJKqMhSnht53PRrS5ScMijYeAY1hEv4rbG3b93HqDL",
  "key11": "4rMUdN9WTdmpY7wnsxXhg3mU8RZNsdA2atLD9f9e7ewTYiS2X8Jkuf5Az3ScFHiSUuezDXf8JvvvRcYGjdthwqFP",
  "key12": "32pWjWD9PRSrbx66zFWi4AWnQ2ij7hRVFj8UvbjhvMiZpTTv58mBbp3ZkMkPkZnbm4ZLzrDUQ7xCMBUyAPPgyYCh",
  "key13": "23s3DobDgAvcxTmfqT4jedGYbXWjR24TcgSqqy5x5iwAkvKSyt3euZ8S7sswD76wR9PeoGWCLZgFJPQgbpGzvYT7",
  "key14": "4gfCtFGzNkstjyFerwe24UpeF8GUFeTL9ZF7fU2NydmqSyCJfUhCERPGdC51MCkH196pxKWaJQZ8h6yNxRkzuso6",
  "key15": "4EGQerJwr9QYo3j9bCKc1r1PkDc6GE7BhqahQVWaQax8szMNnFcE4gRRBsFFDoePBMyHzAk9KwPVKevuwWsdDnRo",
  "key16": "5btTfbrB2yWWBPFQVB9LdejeXaHTmXWhtsZk6KCUPAtmtZrn2pbNkXq3jgaYmqUtJAFygdcT2rbsEGG1HRgNH8zQ",
  "key17": "3jrL4V2dATnbFaf8Sn9qSwXYfGvcXtmu8gjcFHs5VdFtxzw6Pxt4YLop47GUhsSWMPPSxWQ6dYi2XsWg5qQUUUnj",
  "key18": "4ESvM4VP4DfwnWzS9Yn9xYrLgGN2ERENRTDqT8R35w9f6QqdPML41DWVZ25RYhcvEkeAdaTy6nTgkbzH1VrEWuZG",
  "key19": "3xuV7ZjzgDi66mZbpakyqrbG1d235aWBxxbMRHt4p83bPNYRLc7tdieLRaxSemJRu52VGHGnkWCQAZrUPkpT6D36",
  "key20": "64QpTLtN4dqUrQc5Ku4cwZUcEGXAV1FaofiK4QrKKMF5zp43CmqxYANCXXfrYUHv98fMWXHopsS7X7q1iC83dH4X",
  "key21": "2PW5RJKwsEuB1HZDmuzRC3YW94reZP2zHThZu6TbWgoC79zXo5hoxnaJLvvqUoAYXMqNaC1c68VH6xtSX7qwYUZc",
  "key22": "61qEZb2CyyZ7D37AVGvpT2KzMmw4whpYDh9FJitFcUvDXMjBQXCu9orY2jK6WkpoZrib7yZqp6QZediCwbqXFPVH",
  "key23": "kVWHEiNbm4joR57TQmuqFKRLR7tXmM7RpQUd9bjrAdDZsZptMdsWMgZuwqhTuC4n5ZqTamAeY1bNmxeE9fyh4or",
  "key24": "7211ttmpM7bhy4igYWZfkZinjj1wDLM2D3RFDJ4TuKNwv2sFJzgg8h3hhaRMRb9gzMzBGiXC9i3pibMErNBT17A",
  "key25": "4KHunWPe4sPHjovKnhhRsiVZnkxM61EPvooRt4LWfzjZuzzpofqG9BucvDq6jPLjo73qx77Y3qbXZwhRQqUV1Zjz",
  "key26": "3qmJ33wjDKGmW8uCabXPgzZqhhM3GK1GsGhrUCbLmhQY5XP3dC3ftJBx7SzGi4Dus3q1q23nttSuADN4KSFQvWtr",
  "key27": "3L4harcKfE4xxWU5LY2754gRAMwbtykrFLfhLZXhKLLwasWboR5KTYjqHpcq7RSACqbjnwwNATTPfHFQXWoQziAz",
  "key28": "4cdDkVqSKTepAteQM5hUs7G928jweKxtt7qtXYZe2QuNPkWV8Lj9mMVUe3UxmLkBHpa5Nt3fTRgKLobhpqF5TwcK",
  "key29": "3APUM5cKJYBe99KpkuGcd72RmE89UN5xcwk6BvcDdwDjxn2kE6TuHPZ2yqhqyS6Xb55nuLnuRnXeNWcKFxsqQf45",
  "key30": "PiCpvivhGePj8T7h8T8b7Fg21ZNVofJwJaML5YpNkBUbpCj44enThrHQS5vNvJatCUv4g9yDf2Pz9PNHumgV9id",
  "key31": "g6WZgaZYv9LradAWsn11dBonxY3utu8USjSQ12rn1gC4FyGJGhztoTX4er46S8kfQW1Wy5yXnYCRR7qGXNATZgU",
  "key32": "cJDZ6Vig6K8X6YpTU7wKiUXhWLB2bvsjt9GpYXyfgDKHz3SdBJtByg7LJr6PX7S8TBEXRRnPvqS4omx3H7qfGTP",
  "key33": "38tMxW4n2TEMSCka5srNfjHEsWUi3iakSQ5pp8DREZpMja6uCVP7K47XJs5V72Uxi5kdtVgPB4oRS1jw6Ex4m3yA",
  "key34": "hKZb3Dywu7LnoZEusWkf76dqM7xbFzyDMX5cGs3RfUrZkNfcuzNMeg7mAzHEfA46KYsPV1Q17qZERDw9EZ23JvM",
  "key35": "5xXGAEfhNpkBH76riE7AChnesXnwCgBmeAJmCeeRagttzvduwYim8SHAuMWv7eNFTDpTR6FX8GATqD4XjyFnhJyj",
  "key36": "2FYwHRcpXWViCZZTtzz7ae81YiaKqKh3ihtjBY9qby5vZk2vqfbwrrqeudM5zZGntLM2UBX2nU31SMRo2Jc1kt8X",
  "key37": "3XtAtYzmfMp8AZ5yaZpW2VEGVhyDRrtB8e4VcU135rTq8JgJe8Dp1rjMjyud9sifACmKntLZfu3PToTE5KZHDc3z",
  "key38": "34STyNMNT54dRyixZVzuE4wFJzcSyCAPBomCb58K4DLATTKwtSVrDgmPMCNPTo24AjexC9NuT6WZP67CTYFkaetA",
  "key39": "Va8HqfWzQvtjthqmoa5kTcpw6efiVa4XQ6QgWVmnHS4EeThkZFxwJhZks7kZHS12bSFhmevWpB4Q7B21pdGWcVx",
  "key40": "5KniQYgiFQYL4YFvMvsYvNimVvGveKaHZhdGSLYtMwpyAM5JM6sVE7erEdoFVPTB7C3dgSzs8G3tHBRnJxKMHdz7",
  "key41": "47GqQTMMBj6c9E8fTYHMzZdGTThsrB3q8uETwQpX9vcK5bUAcCGRL3wijB5vw56N12pT9EgiMTtjvx23oTt8YfsL"
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
