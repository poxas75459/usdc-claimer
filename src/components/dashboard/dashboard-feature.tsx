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
    "25jR8QRQNTNbB9z48xHzK5gjiG8zLLN48TPCL61YEHGfgWWK73bK1k8csJPxugTBAxc9sGTPGtTTvT27qUq8t9tA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qawtkznq77xpj6PAKrFs7nw9Lw67kLkPE44zuoKHLbe57TVuTvsQ7gQxV73wUTBPgwhQyJzNfWzezRRuWHEBF1K",
  "key1": "5cVCJsQ8xEEc8hzUBohyef6LZyeU3tuDKxU9yBodxLwVcuA9z4XrVgEkeRWekqzoKLJFamYQVnPGcZtsNZTzhRaD",
  "key2": "3mhB1jGnVnct7fauS9vgPogjnHtjM5wKax9AbQirxWZkPEsnJxQ65Hw1xCeFi1ANUR3MZPpmTyBSCRsrQnmescpj",
  "key3": "3GkaFzfjgZfKGtub6u7cWEBS9WdcNcoACqVC5veKYVgUXSRgtVgR422qHhtEQrxwBUKkgqdwKmHrKECqCfNbmRFB",
  "key4": "5tmzHgTHopEabZV6qakzrPrmyqnxcs8e89xTteZsVx1JTod6rWfUTbH8rVnD11JpN4tG7HNSX4NSrjANrDpfX2xG",
  "key5": "4h37uWhuaSuQQixCTsesXbFc6aNaS3S9yBuu7nBqadTZhZBVko4y1HikETDr91zuvp2eZeFWU6JY3bc96dxNcUQR",
  "key6": "3DwFsxn3DYMut2zuuuTGUxr1x6NyH3D6WEmpe7JaaRkmFgD7VqAb6QTkestfJPTciURjvA7Enjv5goZRc4Nn6XCu",
  "key7": "4Ja8E5HmrUPLjzZgi9UABsyW3YNWo3vByAfCAvQR5HQ6q7TvG6CdgK6i9NeZMKKCHHrjuPNV9E6XDgyHxX1H2JMo",
  "key8": "2mL96ea6y795gKx5xs3UQXexNecof7CA77t52ePq8eXsS1bBBiQS8a2qL5wn2GFEe4RFNqjurfHPSjijXxmmN4QX",
  "key9": "2xCSGYUyPcrHZfjf5UiCHegcz5v27Yi1mBLVEgmKq7JmntLvwZ6CrWXPvRRgVpoaa46jswSDqysrvNX2LjTQbUhd",
  "key10": "5U9aWGBHmqBv7krGhYW7jQNuMWEubHKpojKpbHWtUL2UTHREocCcQE8rUTA2NaT9ibVT66KgQdeGVJ8wjN3Bk32z",
  "key11": "2mXrvs5ToJRHSYjgzPjceFf8mitox2vpbbTkr6dknYDWapJAifto3nm3bp6SA3h6AqmzRAGbPv7p4q3VhfLXzgfK",
  "key12": "2srzDYiPNfAuNHLZWddphf3nWCxH3CRYC6UULqd1BMqpPhcgrmmyGpmXRNwcz9HsqondMWUTNkdRGiimqfWfcL2d",
  "key13": "8RaBj8CsJh6Hj8qDzesL1XVtsQTJkQWYvAwUFr9hzAhcAio9UUqKEsiHgTvwR7EnsftX9frwcXPpbMJ5UBJYEx6",
  "key14": "53NKxxcBbbFw26dLvkv7tsjXFG5F9PiN8kda6QJzTdt9myPAbPG62KQowYnqhQDNZPHSHSKNghPn34Dff3X2PNPo",
  "key15": "5iGyWe3CxPRYeJxVXSf4x5pwEsZYAufuexjA5QjYVS5rqe8YxNDvDfvJ6cPNNbZ5S8iCRhXr1bbVBm3vmLvtVZzY",
  "key16": "oXxfUvFpc8nSPhEocXAiYKNhkbShPUU1YMuj5PweKKaKBSQUFfqixxJxQgrX78H6FtXuJRdsXSZYntc7o2FmG4T",
  "key17": "2aTDF82yoQaUtFMndof7R3q1GZUifhteahKLEShe8UupHCMJR7osudqMdFsJ3NGsoCqkeSxPLWxyqSjp8zZcJSJ1",
  "key18": "4APxDpBbvAtJN5Hu7nZfRwukYP5cX7R7Ev4Nk1pRtZ5iRCpVL9yTyZz9gvz5yUY6MB1oFkCwbVunZZzYAUTycGc6",
  "key19": "46WvbUF9qqgTitLBr8fu5cyShtoe1agJ1GPxf8DD5UQ8pVnveAqjPLiCFJpgytbWFgQyMnR9zqiCZGjydP4hzmSJ",
  "key20": "2m28gPfc4LkuUuAwj8TVnxmaupKRkrmb9d1b21cy6GnK1YrUPDcvtuEqHUuoSKwJFvdLyZfxnRhjVa8xQ167teK3",
  "key21": "4mYgFqXmJQzQYksSo6NkZvtZ5gBP9xv9snydQowzXuETA33FopcS2d31zCKUH2vuJ8VcECAUaqvgEzMARDwTAgC5",
  "key22": "5b9wRvLgF11UGkfUtE1VpcbprtCBFwTU7KmwJnFRK16HSxNURg8VXgDwkxhHuaUfEidDZnnJw4aZ9oN9PfQFS9MP",
  "key23": "5fR4XqHLcBqKb5Rms1cWvj7LDiRABRuerhhB8hiHPqujqEzEN4e19GfZVrfsX6gS1rqaRGNR4MW5WEo9TAgERtqg",
  "key24": "3y9hgNWabBjJ3UC4hSCAejA8v7UVBb4vnzM9K1uWupJaZ7suhqew58wzUc3XMSncAhsWBEJyvGtRpAfVk1oKsnms",
  "key25": "5ZBaeYK6CXAhFnYMjfY28BPb3QBA6792ppHfKsXuweA6NHVsrH7t2S2dJ11gG2UQrM8yMmxdsJL4SFbiNZ1ZAA6e",
  "key26": "4PBvC7gxsBkNqHC6ThuDuTrdu6jdo1UiSsDD262EjsAiqjkdj1fy7tKMjczk6iQqZuSyYjhXnsmzYYf2rY6ShyNW",
  "key27": "325UMx979WaV2Fv5Yz3d26Ja7pwM8nF71AbKDsEj1SB55N5Xh2xg4gSgq1Lnjk9yir7yJh8ziRYirThq8kiPFtso",
  "key28": "3w7ERYhetSLq95hsRhXFSWf8twm2vHQvmYp7XM9qJWDtcGrkGM7rih2Q5kyUQR5hMQBs2UV8WBw7aW3G9XNAYShG",
  "key29": "5vZk6tJVY5CD6ztAB2o7QnDW4YaWgZqjdofv8Ft9VDdvfzWWQwwkyiZXY9oHE2dLkFVN32L1moJTxd52HhFHqYHz",
  "key30": "2FjebGY2CQ2q79f4MHVw16EcQ7BzxzBeUdTQdDJPUkiRMKLy7k42GaaDR2zMFMFtzXh3GtvPDbUpoQY2mijnQCxi",
  "key31": "2PuSD9aKsvcJZvwdHQSXWKiuwa3mm36K3V2tFgXaSqNXX78Ds4YdhhsrFY3RDgbtZTRtH8r3XSbYMu4v82ovkEZd",
  "key32": "2GwZw2cK11pgXwjPA8CRx4E8UWKEF1Be5sWzTAnSBu1E9swxtAs4RmpYkjMURcGo2qJnWB1pcg1GYWUyie9aqKxa",
  "key33": "5tS3mUpuXVM6vuEnKqqcEpffjkfpkKyBVyDPwAfe8qGLaSL3bWGkprcU6oDLNbVSVn7vJKuaxzjtQUG5AvHcJBsi",
  "key34": "3Ub8wRbK3y24auWQbhDQN39VD7hWLm7ZqpRc5YC9zy68ENQHc6rLCBMDC4xZBbha9HNj6pmRMw3y9CPYgbNLFSnY",
  "key35": "5ZuDKDW5c6A2k6um2G5Nze7VAcWuC8RYP3oWQNyAZNv2Ubgdsp1P4gd3m6PCiM5VkuTZQ9xPPhGNSgCNim6pU8FN",
  "key36": "5yVDpthdGaSa8wrVaHdrioobbH2kzWfPzrm33P3CW5UEW8iVhgexLdPiEMEEYt4GYqomLLMarhcfPVdWj5HqTKuh",
  "key37": "5C2utYAUA76HFKCAXcfXDfUCpxP8wBR845gfcp6P8UgHm2f46ZNr7ZV2M9w52qGhepjiipYcmSvG2hk8hujM2vrk",
  "key38": "5cgcSUme3EA3ZGcjgCrgideJuhYCfDnmo9nprJsJUq3FfzAb5fJsyCArMzWZvR2iJt54PCjJS34tWNmrLDnEt8mX",
  "key39": "5qtKYB8xTQhqc5s81sjqub42uQq7V7sRDDJ8Qgt94w7orsjRGPseiCkLhsXAU7TmQMVJmvF1CCYnCQDaf3o29bfV",
  "key40": "5zCCBcv1pwJdfvCpsimzeXyC73SLqR6gXEXuEd1wbtXTUqxWz5kmp4tNR2MDrkyuE9rK1LXt8zpCZYtPUhtCiGp5",
  "key41": "8ccRvMY4oxXGG1CDRc23kbp5YRPUqf5Umh3WnzrfJ3cqmEKCPuVwQ4zMB3FSWQuxZhcZAJjsr2Rn96VQCgbS3RS",
  "key42": "sGx7ob9UzvP6rhg2qxhjchj8QtQUsggV6wdpxLrzq7FYcAo6GN3gqqJgndauefN5xfUY7FzDCByUSvqyjTMJ6Vu"
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
