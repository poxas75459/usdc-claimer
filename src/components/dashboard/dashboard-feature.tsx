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
    "5nKs8yNfbwLkZYVHAK7tGExftzaN6eqNSr5uq2c51L3EzexTpbMmm9AkcUNbJRysZTAePpkjVRuGNVSwPipXiLB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbVdum3BLARda1GT6sEASCv49788vEfWgjdfEBi1d7NNa8b9BQr4XSKr8HbyajNbPV26EhdomwvFPf5q1eof6fn",
  "key1": "3sbfpWagokNB5M4kSfbdVB372L5QcpiDdb2ZDZwYRUhT5y7n6k7W3orBquRF8BZCAt5enJpvsgRnrNeFxhEnWDmw",
  "key2": "tDHLYJaenHU986tatPcF5HFHmQNAZyvgJFRpP53Kw82UC577F3QHqy4DVS4XjQDn8A93oJoWk1DqZmf15Pcw1Se",
  "key3": "BfTtUwRBbbfcEoWC4r9bgBZrvvpN39zxZp8GKccpNcK3VHXticgcrwPZzJ12e8EJrUKMM1fpvUJzjxSqbUvyBjb",
  "key4": "4EmjToYHvbUowwMhHCjY3yJERqvSicX7pYsBsaL6aUAeSzrJDGiSTqj4gREpzehwYGb9u9zFV4DkAugc5xiZ7fjv",
  "key5": "2Lv6owXwvgC42B5fw3cMcuRegBkiNDYUGEFE1h9VqBsJKwuFiUS1vRUzZshf3tA7HaLGJZBD2iUsMU3uFjt5Ta15",
  "key6": "4Ty4UfBvcwKEpKesy4pst6Ssk2ExDKic1iWShjwSRkgNSzReqRdvz5zmmcsnsDnGdin4AJnptAoneZcxAVEMC9K4",
  "key7": "3kKCHzf72xAVw8cfmNc3haNqyDL1sV5AJPX7L6ucLKPWGcDo7xLXnMZCqQqDVBLMAgoYhS8kasSBFPwzfrPashvH",
  "key8": "4rWHZctXNx5kRcw5c562vsbPpce8PK7BbXu9pKaAwwvxHSvN5gzXW9CzyRrAyfn8iiKr3dFjK2D95YtnGuhPgRKu",
  "key9": "5fvzxvdfcNBzWrsFEcU1p72hVZuGHjqR9hUMtGLwbL2tiji9MSFuyTUMepYyyrBDL241A95UwdstG4zfggn5mELw",
  "key10": "28GxhtgDYNPB7eqvsGpN44Bs74gcYkRXdZdeAsiPxwfxP2BQARRYFn7Sg2j7HMjER7TNA2qGNZnXVi1LKNRAZpr1",
  "key11": "s4qeKwSboCy5djCXTxJdmu8kztuL4S3RHUHqTdyEZqa3cjGQReTk4nDhY6hBB8BWi7u2iZ1G8kHF4517nXi12A8",
  "key12": "3Dw8eQkv6LPUNNJ8KWhhMrYZTkf6A82RPaqzk4s4A21QuzMmUzUnatvs4Vgr4TX5FMJQF2F66zBb1LhxqayM2qve",
  "key13": "4eo3h8QTstah8GwWrpwsLPoiJP1Re1CZCBDXrE6Vb2TFs1Npc5QGw6xydehuepnNYvf7nfjGvSobt6XeD3ncx2A6",
  "key14": "4d7DTrq4uzbmpHdqeqs8sExuHPgrAvJpX6QWSh3L3axBJ5tXr6CCifAJ9bJvjLfsruHGs22SLFHgP3EwDwMYGgYV",
  "key15": "3UnFmnF6tTQbuGPrWKW3jcB8uWLPNyXkrWyDwTtr1mqUqUBaSHETTJswZNVZ2gBmHSDEpYYG5BR6yESxPW9DCBk",
  "key16": "4TSdcrrRnqY4PCSuzqRfz2GJQdtP5R66DoN7pmYNdcL5QVZPvREW4MSaNXXWBwZ1RxFMiQ9grhNFJpbCjqjx19Nb",
  "key17": "3VNTMaKBnBvEjSHXW9Ug5h3xRfZwCuK2fZjN2S58MbSRCj1jTzxPGD2kDJ3L1g2vqqzGFuDgmkQzLSZyYHq357Eq",
  "key18": "5r6etHNXCa1rwQQQCkqCuRvJ2gwpzPxv4yoYPKRKyLAgQVoex1thZ1RLZQ9LEaRoJffBejxGcKn7v6Jjbx5bxX7w",
  "key19": "2GYxiLrknC1Cvu1KA11iLDrK8E68pixFD8STeQKPLe3fmW4VtK5PeGFW3yVdCXuMvj2MEqZJcmVuX7dy8z1qWzjg",
  "key20": "5624bxVSFdtzmK1ddm1bzbKgrSjam1i2BUEKSbK1rbD9EYkN8wBdoAodRD2W9fZFRbGmwa4jpsd5iXKawubuigZU",
  "key21": "3H4stwLzEJKKw2jADRT6JtFpspfZJCWe5jPE1eUnKzgza7NjBaXANxVQzxueFZ8yUmAr366TRCchD2UjeQiRDb1x",
  "key22": "2ZP97bVgsFsUxxnSh1FUXgh8AhdMu8er9rjBVjnZXhkrcNabpReKuER1p55RULM4oDYGXadXAHJiHcEYdYGUxCfa",
  "key23": "4ECK3CfesuTxKHo7oDP5jQBbvoSJTSMXCT7t7VA5ZyXarJDg9WPzVApMF2QHdow5zkvtvzyU4wBzY8Mo2tA9kZ8c",
  "key24": "3Xu43QQ6KRd4uvv7Jqya1ednABXceyWF4MEE3W8KHBoS7eAThiFFeCjXGm32kYEntYdBL9SqqUw7tYQfDTTonQYw",
  "key25": "3eHmqZcnViBYem2o8QbDujBuKuv46HLbDzq18uqhKZTZHGtJztv7GsBB5TqaGLCPAqx9Naw5NrmYi9VQ5HMEz4Bn",
  "key26": "5ruXZUkCiBRbxSYVoS2qU6yMHAPLt136XCDQ3tsyxCHqFeDxpHAJcUkCGvN6VAovZoQQHfpYQi8xAZHjQQXgSV3S",
  "key27": "5XWBRVFAZXLx2cTsewVKYhxyLrz8fAWVzb1wDHpRhcWvbyrMVDzAd8E2aL2pvCpLby6pA5TwueqvDunfUwBWWtcz",
  "key28": "4bCczP6bJ13VXh4NxuXfo356S6iCnfRPV5DZxsv1oxJ8Y4a8zyVxqvwD1Likfn9BXzVPJmyP6P7sBP4gUqrnaRJD",
  "key29": "3JKSJR7TBfvhyMkKyReWLd5PdWYNrRcUV9ACYZbEVJgNbFi6ELU7cmDKYsevPhKnEDsX25iZDFryLfTNPYsLVtFH",
  "key30": "4715Ga7SJ5vUwqRKCtWrsizY4p3frucEMxsPqNLyxphtcioGMT96ALKPHztw3VRnbzPLBcQ4x2XfNfhrqY3A2oUs",
  "key31": "xra6vyFFrGuFdYawpqLiPASREMJmmp8NeUJJxUU8ke8v7nUyQpeVQJbF4q8RF9eGjdufh4t55HTn3oeRXp7Wyir",
  "key32": "3PAzwHDV1kEtfHs3EWHyApdYgyESTBxVhKT2TqKG7wUcwAEgbEJig1uUBNJFWc1P7co57cHe3PjrXJvVszu7i8n7",
  "key33": "oxZPbdfvVKfp77hxXrUKwtR1EQeFVT6Kw6jwk2vzeZ6FVdGtBQUSWrvQcwdXYL1aXvMa3BeZqYAXsVYYtkPfsHb",
  "key34": "aiTx5RKeWEp1yYcWvoG3pHb6qkkLLZCjCaqbqjLFq6GA7NBLayBr4oDQMsLZRNtnD7X5P7adFjBkC5vKHuH9JWN",
  "key35": "4xwqnibFzuscCtEYZ1eR4TrceW7Ay6UjxgrQtM9suDkUnqj7UpMPpZx3Dfx2hSNiTmyWc1AQfZscsh7WyGsDQygp"
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
