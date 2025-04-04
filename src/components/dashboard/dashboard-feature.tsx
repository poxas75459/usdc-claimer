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
    "1cbyUQ86U1YZaU54q76GUh6CLEvA2iMP6s8zir35orz559FFDdgwpHysLJvBtmmFLgqUrLBqnzNZ6Fqnv4W4Cjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53aVgLL2jLhFdnyYW1uZ8PwGNF2hje89cHgHtEN7aPQ2y9QMj2BEhVVmhcm31NUwLXRFqGdyyhh8FduZR41Jyx3z",
  "key1": "2UB5f2bDLcsVobjFnRePfXbYs2k4gM9Dcm6Cbeo9yfF4S7JAYkE6fJiLWSPRjZeEAwjkNiNtgAUvNkYDLcN1W4CD",
  "key2": "3NxZnq2w9wrKPZhTLxFkVsKByra8eoGiY8qu8YKD35srV7ajh9m4oCYMEFFeL21GNgh3ZdfcfhRFE5VXjAmuPEBH",
  "key3": "5pz4CW5VXp9XxnVtMFPouB8UNytwAXsuXHMKiagucQpjNUyoYxfBjfVjqtbfaeLTKTT9efhg5JCK1yszRYXf5ot9",
  "key4": "EG25zY9nCF3Jm3z8XSoffDAnopLgUCXQju2WX84xtANHZz1U98KqVLeMuScv9UYuUqFs3iG1YqX8P5seytubFkH",
  "key5": "2PBWNRsxkDXKo1KHk4vuh7xBLtBjfBC7iNntrKHrSm5Z4CRjWi9Xih5c6fP11dByMcmj6K359XZQEKbxBvXbWoeB",
  "key6": "4UEUZYJfpZgf5unNuceHWzmnaMAYHJ4HmenPApvbPVv9QCdfu9vVSyBHLVFd3oj8WvUX9hLM3Si7bJzCFh47H3jk",
  "key7": "ePsCoxtDY9JkVJ2kK9WKTfDR8Nbkzy53wSqNW9yUXBRvAkYEX79vJKq7wScpemNVPi6krubSQikvZrqEVy7d2FC",
  "key8": "3427XrVgcPf4EayFSVuC35TdGgLb8B4hEFNpNcwYfi6GUgUXuCnP3mwR1Y6HTHEAWemYgT1AMcvhhJm2J8SpE6uS",
  "key9": "2PWChNghYiHppKWnGudF8gYbJ9Y9nRDjEwnHDQVJW3CwknoskqEkrDj573KeXX99baWyWoCPYehsNYXdVGT9L7ab",
  "key10": "2eAnSJmQxjguZSGyEy5WhzYG5sRMpx1K35SqrYzM29SEuvJiJCqoJUU7K7HD5zaR16vdCM11dzamvRz798GJTiVC",
  "key11": "M8pFRkNS2ofDEkdxWaEryXcrig5MZC7qXiCDXgieFRY3rQmNuXuffvia6jU3nrydWwJyDqez2FK8MrkyUDvpXhr",
  "key12": "3ct4fmLabtF2Q2LNMDq1ETGZncQwxg67kHYcGYveTbiCQghCQAKajPLJ2Tx9maMznWY7r6X9kJNNdkiR7cJoW6Nk",
  "key13": "3PH1HEoD2Jo7iHDvNMJRdmV7Dv5z5aETEMafBsrQrqqXmG7v1XRvky3LxZsmWHw5iwCfLwitFwzVJpzNdNqawGHJ",
  "key14": "4bbTrEEs7Kb1958RPArAFyFsMXpMmwiFXvEoVqbDvh2EfrDyCbzXmUGxSo7ZnjYonifB1BAShxbxC8JWZ7yC9TQ9",
  "key15": "2JfYA4o3jVRMfjNQAN8obWR7jCo7TSk3FPNWkXFMEgvDHBaxt7AZHxoTr9k1CrTorby2gxzSorFydiHamJMpH2A4",
  "key16": "2BNKBmoEjemXKiHNvSi7F5LTDRetz8UeumPUZmkw837WmYc3itT7G33qtRFWhwoaG6Sk3yc21ZiFvyB88G2qKBMt",
  "key17": "61QcUsQ5RLwHFxZT6GVLJA1FScF4miDGZpkSnpqKBWzEGbeKY3PRuc9zNo9cYbYcXMerTgZ7qRugmSEvkJn5cT4V",
  "key18": "5d5Z2FWJaD91nz9ZxG7h5JEahGB1DrgSEKRC55iJCbvosUKdd6X2BE4QsnrSfzDbKuxYbcCwse7oUd1dPtVXQFxw",
  "key19": "2nYGkk4rXUb8fEdqnK8EeEXqCWUe26cP4K2ea11bSSGcR7Dp2Cdu4MWvCTUcaPNwcwM43h6RoLjSQk4rN9A4psED",
  "key20": "5gRKfNzdQjDxcGkYMQQrr88sSjysFBf7gGSFJDUzhRygoy7gS7rbHrRa7GsvLrh8XcdQy2m3A8GBzhgoAfJhtnBH",
  "key21": "4sjW18rLit3iHgnAY44GS2L8RJCLHXgt4HrdTHSjB6c1gKCsWiFamxPUfxQcKXGpixYnDSYcsfRYNMh5WxtzbHL4",
  "key22": "4Qc4b6j1VPrrZ8EfKVwbB7A22p3buGF1uDyMSiQs28oGR1YhA5FVQeZStNnCsdQHEsPARbT9oMWRdLbi5aeS28LY",
  "key23": "wSNBZDRCwGvv7NA1oRbmQCazns3BdXzZy7C8M5gyDxN23UgbmYUQWvXmiJPY42PS3hryCFp8am7f1CDzKrwc81g",
  "key24": "3EeHcPgdd1oFDT4yBztEyEFhbAxaJCbGYYyWHrpHL9UJuvyySPsCUSPWzCZ2H17uk1M4nTxpBVhJ7gzvtdpYisRC",
  "key25": "3yRxWjRKzfyxEWtvcPwukFR6qKtGoQQv2z7QRiVWv4wsQGXD1oPfq3Juo1jcC63LRFuV1bc8y1aXRNzJpaiQKSEw",
  "key26": "3sqVjki1bUeP43191ZQMhxk7zr1kiE97mz4dBspcVeo1zHJjepA3Lnmtz3JYdxhr33S9o9PmdB7bQ6AXjqGfcVG8",
  "key27": "daxRLeyFHBqoDiHq5porpQv6efzqa8ztpLLcCVtX5UHmFxHtS53iUB1KyUyycsNRmLeNB2PePB7yWsh8sE3648f",
  "key28": "3zkHriR3CvQaivk8yEQcx9daKRXxoC8XmsJUsBsCRGCTBoEunYQDDU2GMUUycVjYucYo12wkBAEj6YFTGPvNbt3k",
  "key29": "4xa4M1yjN3sBiFHVkBWZrzn7x9za2TLFzFLpnJfGnXCE8dzXiEEmWeUce5y7vEXCAGysATr6vYor9GFg3AMJf15F",
  "key30": "365kx6MDtoWzrhx2jU4Eq8eMBGv37YXaNcvDTSecDB2Tw58Lox1T2Cv5xW8roJVLXkGRa1Dutswkf7w3CT3zXs26",
  "key31": "36G8w2dnUDxmDmpRFHdNedcDXK9j4gF3Wf51Ackh5T6t9SdzQBuGe8EL4FBADoNgxT6cKWAFtTFRL5jAKLbwUmMD",
  "key32": "3yF1xvc8YXQWyvVCt5LyRG6CFtfzE924cZRH561WgwKSajGzTbRadyEDqVmuCxf1wJRMqu1tTnxQ6SnSeNnPyo9T",
  "key33": "261yGFx7bFpMyqW4ofbk3hVEHdsPdX1ohBC5VngQDPQvNwUuHx81hqjzPYK67f4o4kD8cE84VP9Mmadrzwj5AjtG",
  "key34": "42kiAnuUdds5vvHDYsP1M9wiY5cVbTTWmbbogz9tLwS74F96jmwSBCbCksxi2ncmfEMe6HczE7LPxRBURn7gfJVt",
  "key35": "2cWmvPky21EwQL42GoH81hj7ZhZ9erausH7k9nnDN7KSrggaZLmMGNGi3Jgmo6tYTnR3A9LN7ED2oFKf2XSq1Jxf",
  "key36": "3BbHU5RYr3xhMA1KcBPCUChZ6VeHTL9XviLyBMDgK9AG9obbdjg5KK7dCSoFzp4qZNjuyo58ftgSEdDDHKyNmChh",
  "key37": "2hYemZPJEGXVbM4Dgbh4ALSTrMBWPZNE5Mp2RQjUT2zDHV2fMawkSBtxaqXSPxYpyhU3eZEnuRrw7AYaD41AT6qF",
  "key38": "2G6iimDoirrTjsWa1jdiKQD2goWqZdFg1JnMDQY3MaEYrD2CpQsqTrY4RfHGvvnECpCFmw5opYGdi7vvu9TpS3jm",
  "key39": "494vSA75Jd5Q28pkQ9CCXhqwbV22TWcRwRsTqJdXHGtMYACSrzucZEPsJF7fXsRqPJQd9jsEDHMkA6qnwH7x8J8w",
  "key40": "2mU4hfrmX2DsRdsSZ7tAKmgbkkS1pH7r67QuMfPbQHV8pzuKaZbgHDdh24z4Z2a3LDTECqKQaUM4FeC1VbJLP6au"
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
