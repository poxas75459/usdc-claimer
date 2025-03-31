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
    "5G4S2w87dNtput8rqYaub4TG2hxDPU7bQt4rcvovbLscSPye9V6TWRxdUC1n4svVpRJn9oUcvESpiWReuwsD4ANk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3opHeCX1sYwe4xPpKeAYTtszHZdir463LKnB6mtzuzA1RAH2TKHgRQjQVQcpmZ66D95gmCcNK8gsVzHRE6R8nF8S",
  "key1": "4geudBmZ5NuNbzGiKJtFBx1BH9CwoSQnn2gmVcVjajeB8ANZPt5ehtnHisgTp7f5hRnm5jAvRCxABgQcqxxV21vB",
  "key2": "ZeLzAxRYFboXQX3twYD2ejDC7rN4VddnFMsr8BqQpmSeYFZNXak9MXWbF1ySvppQY7m5XYeH6kmm8n5S1oRVeXU",
  "key3": "RpUKBU27LoAjfMAGaPDrhu8gyKB4VdrU5GJukuSDCBw7oYNQb27SQdX98RD86WRuDNr6kTiw82tPndLYNSvgfVF",
  "key4": "3137iTwGM8hLSHitNtEU48r5BquxigVYPQ9zFuFaL7vDfMyYdPutucchqTzBzQbFf1p5fHM4snL3fJaJTRrTPhJY",
  "key5": "51oZ8s3oJFwyxCHyBuujenZa1Bvwhq9v5nT2SPnvhwLZnhPsCuJvdzk2hPvRpVv7mqchDvj5jKb8feKWMN16vGKr",
  "key6": "2iYuqvYQ86SmRmzGmAAKC1Uk9fvKPYLxyu6TmxnsUp2WpZPZdWQwPQhnWbBbsNH81mqNPgehmipsT4BmcWMmL5yD",
  "key7": "gcYU6FLp2DNhc9VuXCfMsLVnmicZchgpyRCSmpGEEG8vmWNCG6xv1mK2mPUxfHoCXNSELP8b4vwiQ9n8yh1mWeD",
  "key8": "44PY5doFSmzewLwEVqBnXuVb8Xf6LgEbfeTWq8CH5BLZu26jUEMzbzohPrhanNaUJEdbYrD4n64fzby45Xa6veRL",
  "key9": "2tqmkTsAfLdT2g3qyba7hCKHFBj3UHzDyrdSVs4zpvV1coHnvhaiYtiWwphnRaCJwsKSA5buifY9M8nMnQfxy5SM",
  "key10": "3ThJfA7e3pZXokdTuwQEj839F6nqgiXnw3wfxo3jvzmbyFt1tUVwFgC1HLkfdh38KE6MhE4H6JMU7fB2bALNySRa",
  "key11": "2xSsds5F5Qoq72tdTshppkb2z5p6y8uGGXrciqeXkM2s2sUiEgXSoeXzujCrbaiqv26tQfVCsjuKoyYrEqPkDCLQ",
  "key12": "4G1tHnEJvrm8G1vys3gYw9V23X2hkZwDjQ37VMuSwfdFhipNw7gfmk9A6agbiovjf4ge5jma4DuGeCpygsyickmL",
  "key13": "4rEMXW1Xv97JEav7ya5vbwrLnW3WM2PUkRnNfyWQweRuJ6Ai3q7RpnBwTLmV4pZuvkVJHAeveJrEGbtL1sRVctyB",
  "key14": "2CYSezWct57Vw2kLt8UXhZRiC5HYGZ5qUxQacq7NMKcijeA7RnPErjvHijGPgzAPYyJFbaRvT5qaLTABLvFJeFxb",
  "key15": "3uVg8z9yLBEDz12i3Hmkkrfs48rieBQzvk2XvJxy3Lbz8179KDReboics7k4eASgn8dDzL2HYNp9jatfG72oUhot",
  "key16": "5ijJiBkKW9UoBduVmaf6dbfXnbkGtMar7q5yEsD37PcXW8GY2ihsCJGUo8ASiKXX8scJJV7BsAQdr1yskVZputKR",
  "key17": "3XabHHDKbBTsE7sonmMqsLtTV1CSCeNPmDbiEuL6Hy4fSaXvRHEVQWbG8Epmvu7nSRQ6JqmxeyZPUyiZw3jYrgkt",
  "key18": "5uSZKLHGkv7zCT7JvE48sWzs9zfChna5hX1Dht9e5dfvzf9CorExKnWfdZKx5M1jG7LyVgs13WjtEnmNzPvgAoXc",
  "key19": "2XihFQvezP5DaqdGgrbRaiSPLyUpaRLToznRHy8veEim6i4M8iHfGtiEfZYAXPftA1LzrJMSr6xGemM7peGnewyt",
  "key20": "59PFQNwcDwRXq9WEstpHuxHcAiL8RzrJrcf5PjvZVDGV95hA614qmNPXkynQi5MJp4fKrS63ZpZLhkF9tJ64qzmv",
  "key21": "2pToGaB6mmxqkaQi3R17NzrkZKdsTBWWuNq6YRyfcvqxENCWRjqU7P2UhoaehF8Y4G6GSyqLgqojjqB3ASZRNrhP",
  "key22": "62NtCms4GQjsgR9q78ictkt4cUKjESRpMJ77z51rddDrni52nvu8sqSPYnLyFfm657dJpUti6fmqga1wfvvjnHyP",
  "key23": "2sZHikH6DUGvNpG7D3s59YCrzaHVFgnsiv18AyAp6otZWpwc1t8qkdtgieMhmgNSihx3zyWP7ibbhZhdPeABhegi",
  "key24": "qo67qQukZNerJrg3VqS3MBKWhBJ7uFuoto85EvFab5HySStjSdqP9Wiw6rSRPxNzWpbr5DnMD5eUBMKdrNQKkHt",
  "key25": "2ZoH2ATFEhqNMdAhcyjYLUtJfH1E21CdRottnXmMtzvEh4aNn8SJCRVgPjMTW9qPEk3oMBhteZwgrswyVz62zSfE",
  "key26": "ZBwFbdYPaAKt8uaYjLAPZCwmRXTSRfZmKDYwfwB8CKmCcSCbJSsvoDiciNDX71kHjRZhJjM7qVCp7vzi4HyTFrX",
  "key27": "61Y8DnYBzJT8b4VtfgtB2kce2Xyn8rCHQ29gdY7hUgRheNJsvEBEcXeRs1qSF24D63X42K15ivY7pynmxvGV3Tyk",
  "key28": "3WQHqCgQTDhcaXYxkBgKuRrivZ5pSUjn7KcNffnTa9RJU87zQV2MpF8zdz8Aad8siN9cS9XxW7Vt55HJaWnGK7j2",
  "key29": "5q3gukd2YAyUjaUVtTo65B6Q6FbEjgxpn5bmrq8XpSAe4ePL4THfkCKZdfftL2bzieBeXaut5wsLe7Ud2Pyyr56i"
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
