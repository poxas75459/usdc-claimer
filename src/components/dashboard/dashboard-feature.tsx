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
    "5NsqEVuvJ1XYHfXBmXV511o1EvCGrzZFouYsc1pV25Xu8AQ2te1qkHZEPm75ASS8a7HFTPoBvwx4ZjuRduM59SbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56icagGY6KKexj8xRt843HHT5tHHrPoGPLaqxrJiaiWKRTXn2hwZPMMcYXgZiHKuLzZKF91BHgWGiWu4FxtpRkeU",
  "key1": "5nRzuysMMQmx1r6VXA52xgczF78U13bTyFHdJtU4JzpxKVfmnd7AscQPUaM18yM7RyGrcamaW28GAK5byFs7Dcji",
  "key2": "5TZQN2TBcr9vdZDMTNAJx5MyWGVJJRfte1E7XnyUHn8K4MqMofk1vAaQW5Pny7JCDuwYjs6kesWgUYL4imqGsmrb",
  "key3": "5DavxQ1dagvYuAmUtzb3ghEkKUhFsYcUSEjcAydDKsMadHzxG2nEo49qFvvDTenQ68mL92gz8J2Po2wHtik2LCw7",
  "key4": "3hJNLqk3T6U8aYynqS55CNPbug8VfXJYk35RCjWc3Lj6hHer2unvNVsAf53CTZm46bNL387ZtmTsXZE96qUDxT9V",
  "key5": "XCqeJRbSkENH3P3QabUsfcUAXcuYFPaVmThQZBAowjeZeMNQmocEQj6zw2r5bD6DZsS14QRVm5kUX6JWNyh4kNi",
  "key6": "A8ToNCqDXox8rW9QXvLrGLYNnBytNfx42YJQdoJ1fvevUp9t8AMw5tQveopnfo3FRKJm7KZJUVm1Tq8hytW1S63",
  "key7": "5d1Ln8j6v3G4xYw9zXzPYLCBdMvu63L9TbxfJBhS3z6KnL8VWo57vTtXRBHTbSAvhZFhTtAMqS7o2gQGVZXXLvqQ",
  "key8": "5XFWHz6hRMKzq9EoZR7qjK13qqVw5kom3eyErs9XhL5jugS8cc8Pmay1M58L1XM791WfpqRs1wziAcmLmvNnSBAn",
  "key9": "BJHVJbZkSibFcuHpPyzLXkhipFVdnnANSfq8ZeZRSuCynFdK7RcZoDWR1Bzx6vb8YSjQSFEVvD3gdNMNujiBbpw",
  "key10": "2g82R2eyVvXx6fzVE6NbTXVuwEJ8Rae9HbkxrnWxjhX8YRhpsaQBcDhoWVZSW9vbuBKn4CACkLmxiRNnJpL8mMWG",
  "key11": "2TzNdRVbs65RhU9F6Kzwt9hCFFksWU7zsJ5vVLCBP1awPQey7YnndwffCBSt6E1Nu7h6CsL4xvN2nH5xQGuokzmP",
  "key12": "TcTZXoN7p6z8AKG8iSU5RhajsyxhkvumLiVhAF1tRqBM835RLQE88ZD7hSRzczHqipPFPkgueLmyzfJGSCRE4aP",
  "key13": "5p5moEEBj8sMoqETFtYq6oNW48ikFr2FtcpRrnfqCRGGSsmCrqnLCUuCJAGiP31zGNupQR6k8GCb8AxVKmoHBpoY",
  "key14": "UT7GX3Mi7PRLm1jipJX3mede7vZmw6ciCw64HnGBrF3DvrhvtTqd2Z7fwp2xs9jAKrtnGw9mJ22oaGhziiapZLy",
  "key15": "ZsxfuxawpdvL7VGpDohK3mnx3ZPozoR3wHix4ESURz8Lkrf3HGH41KJMZKs5jvk1TuTL29wLGyxREckdf2uPpNY",
  "key16": "52GHLtP2b9BzxiNBajBDWGyW8yvk2Jant1PRdC1fRSWFZrfZbE4M3un41B25DbnVte1dNYgc6azZhFa5vstu2oH1",
  "key17": "5QVn1VFAYWYkj3xhU7uzLfAQUrqiy5U6biKqk5RKExwidhojqDs8A72LNCy64JCSrboz15CpoSvyUUhJb2kkU9uP",
  "key18": "EFoqDk2jNwPj9oZPDQqrG2BF8y7VU7T1Kook2rPMLmWN6bG2ez4FTfXtx3myjaiBrX3gezzPJXE4Kb1ZHiypRrL",
  "key19": "24ydnu4ibaqJbaSDfHAxhLt8qy9gGRWcMumwkqGovH1BL2bvrBy5vGux3AgAc6bDgU9MRu6iqAJ4AyU1vMAiBp92",
  "key20": "4CdKAHAsWVtyDxZzrgnN6PBR8ZKBJjnsYaxApALJkiysjptuWxnVPrZ3nBQqwP2NufGnAvvRoRbDdyGHG9LrB8py",
  "key21": "2BMJHdCrkVPE5j9R1aRsyNztCdpDS7KwBfLc5XuxcGpY3m28MGcAgUNB3vMimhUtdarncYVZ2PAUi9PMvdVHRqLf",
  "key22": "5EWz2PtrsKcgUFtfGp3CYTP1uTDHa4PUkUwDneFx1NhZRwCZ29LGLdFVjKTvWRYwrNp64o96us4Tcqw4tXoHZ7Nc",
  "key23": "3SR4UQmyDF9mScLkRw2wQ6No4UN5ZomQAMiE1onoJotzNenccwwMnv6mZcDDEPLu3ahRvsdUKotwL8fvDsXT3jAW",
  "key24": "5gtwjyC3WMztBPp458p3xHqFtryJFs6wjhsyT73AqNzWB3FvC96pMBzWzgWfwjWDQpvJumJn1DVYhXFuhvqhwiRB",
  "key25": "5e41apPYp7ezC9jB5skprBwdBvNDZ4qptyMKmFmP9WqmpUKRmYBA1g2Yg2HKpYrijtVZqDChJA93VqRfXw5rTYqR",
  "key26": "os3hdeGfLKznXeaAxDQGR29cXFDodtM34SJ6yL6AEvgDNqEuYnT6DiNuVMtZi77M68gnwcRTGXGyg9Sr64rVLWm",
  "key27": "gtoo4DkKg2wXNfBZcCQ1GsKnPXRHKWVAXPQ8pVzMnCbCuwEgYyKTJhi5NJpzWsg4T4PsampMhHLzt9N3LueP81Y",
  "key28": "3Cyjmnqj4rCxKPYckn5cpigFdPkNdoRpDX8QBFFJw5XW82Tv6a7unrVCBXsxqVrazKN9vH1DahofovQycaL8uLdt",
  "key29": "2d4Rfv9bW7sunHDHPQTTJ2z7iroceVxP4NuJmfjPKshU2ZaD98WXgSu8pHwkRHmqCbQRT7P1BC4i38GE6wPCGJij",
  "key30": "4EgNWYzTCVjHEEufE3NbDiaX3dMjAuATi8ZDU2eT3KPbvCtEz88rvqrVSqrAKEGtwneE1DPvWYLYqFDGZbEawRbb",
  "key31": "3dCy6CxmwneY97fZjitxQRMzbKwtyhd7tBTYufSxMo7Z3C5naShrRLpQo9eysxwJtK7xrNKbf8hB3tZGBQugzeK1",
  "key32": "4HCcx7juBwWoPeFV8g8dpc9HaeXWwDdjCuUQKfhvn3rpK5iCUfYjiatPk3fdEpEJkJgvxHVoQttV7gZdWtaQSA3a",
  "key33": "5rDJbpVh5znUA2VwjS1D2KkJfWGRcjsF6NbLWtvdJcpC1mxoJ33JTmgfupkqhEdFDnhgP9rAWopRwBqWL6dsJNBg",
  "key34": "3pRfoukqsNVFJvMiCsjouuAVxsjpyaEuMrsKFAQwa4kK12AMMSVjbKxfwXANHeH5knJcJM86LTNb52qKjEwQBHPb",
  "key35": "2WqAg5MmiZ5ZTbUtmqbKeR5Zg8z99e3cJwtiTat6e8aM9JotDNUvoNsNkoHXHe7RxRsWCS9ALc7uCiYaHHYG8tBk"
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
