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
    "33NRCGKNHQQjzLz6toGKXABhUjEHfk7FUYcWgAJKTYdtVBnM1xmJ4wUJN3swc2sFeTiiA2MJ1wsumUnyN1kicigL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLQEYE4YkNA5xcX7jgkYKoaAPEJJc8Ak3vQb1QCUZA9MDUtt4B7dzqSWodmKQxKsyfMBvTNQ6YkAjqd4roubBQy",
  "key1": "4hRCff41HbYQHr79fz3oR81CUodrFt49eBaqjMwY9jvCAM9Ff1KyNHu1P2rPbtdSpaHakzZByvaU1hYQZWrM4wDp",
  "key2": "3di9DS3PYkq9A7nkGhKLVdmBuiB7rsSBoJhVKQSFT7Bnd3njPWACWcfCJAGVHERv6Kmuh3D6xyFvboFDssDpsGqf",
  "key3": "3LZEPpeucRKM3E5wNqyVkCrkpNxEopbT1qXHch7hAotwPpiQ2YfMNqiuUF3fhgWXk4uQDEBv2Ykxb8Ay91vGWza5",
  "key4": "5mVXCPGzNzeZfo4WYFpQL3FbFYMe54y1K6h88c1vLS7CDpqx9qPrDFG3cNcZSL74Q1R9hSESCDaXQ4uAFEGJgFVL",
  "key5": "53pBWwxxBem82pU6K8husnfYKXPYLMQTpGk8cZXnx93EX37DtQJkprkhWkHSR31btjFLJ4NBzcXgaAErD7dW2A6a",
  "key6": "5FLgjt5UvbcmbJ9uDBZ95RGDur9WTiahVCLWZMFHkX9wZi5WV1qfAnayLqjuNZmthyCFhYR6ToTfzAHbjooHsmbG",
  "key7": "3iSYQFpfgHmgsjG4fxR8yz83aWFKHvmoqrCaK36WKPxbHieT67qkMg2RSfvfPamrWgcaTxANXPsyh2oU2PKD5NxT",
  "key8": "4qhrcRDKBK4skRxY3KFVHepPzxJ1PN57onRPojj2oBzwbZ4Y7Cy5di426kxBm4FgYPFJ968xwk9x4fRXwquAi6Ge",
  "key9": "vg6KYdQeXLTqtgAe1zq47RZX8JamFR7aRPgCUACKV5ki6kjwrkaANYoF2wV77rp2XZdvWJrvX5KhnSfHMXT8sD7",
  "key10": "416dzovKSRC6WXGvthYBwPjWiHCmsZbPMKzSFvcgngHgMuNDA55eTdWLbUAXHc42xv1ZEmTWyrfkdLaQqDsJFqec",
  "key11": "678gqtpydYsrCUfLcQNuPisgeBjwR2pdjZuoYRa1n2euAdUXfLBr9Zx9MCJ4ZeSWLA8xm8ofLA9VsDrEKJsoNHcH",
  "key12": "51GNh2D1LGGiTPBpERYBPRvBf2a1c2aVqgSf8427hT3ZMEWjEaVnz6UfezsjKYhXEmJt2fk43fNZbGhYq4Wv6bNr",
  "key13": "3FDXxFraGshG2egXrHC1zQtiiZiLxe4FEHnKoRTRxopfwb8L1Z5z3EUVrsyQByQTWExzDM7LLoMLuFtx9H19P5BR",
  "key14": "2GXV9nU4735MpcBBhMaM82coNMGMEW4XSNzvJPCBigNtp83wmBS3gKUEt229uhjXQXprttoKSJ99QBUQj8z2GiR3",
  "key15": "3kaeNbWs41pPG5ERWpoA7DwjMxg994nbkSjGnKfzzZY9kHjB3zAaPa7Ex5ZoCXnHfESCswY8WftopCCDtvJACkfy",
  "key16": "5hpcNdtPwa6bsDR2kNbq5AxtD2aBECpauM6Vjgnsj4fetFoKzKkoBMsYKAXtep7qa1ntr5ir88YKSRU2Nf5yRKFs",
  "key17": "62YEXvKHjxL2whsU7tf5m8xSTjMjeAgP1PwA743mpptbispfpy6cR6Wti5a4WASH3K24LpnYrqGWRc1n6Mx63L7L",
  "key18": "7SU6v9gmQpXYxS9J6JvHJbLnXodA3wtGVhK4dgCEjWB1HGGJd44NT3ByrJRYwpQzfG6z6SM97TuMPrY2ykCXnki",
  "key19": "2TG2ZmzW9bWueFWwWWk54Sg4LoJzNWaEZC4L9gV4N8EUcWJtNfBiFZzZpBr7Sp2dtQC2DfXwMJ9GnbhTFqjmeU2h",
  "key20": "3AacvEqktDdSFxTPS9vM9HVmKpfJaGdo5WYnnqExzQRqMoU2xasgfH4VYQZgoMVWbfALvvn882yDfevcu7VhvVyT",
  "key21": "5JnoEGmLpqUkSBRrRpWkNTaahpHgaxi9AJEPsNd8TVpioPmR6nowJbEUc3VBFjPE9KC8XwTFZMBhcuxuaBvqunCa",
  "key22": "3dfMJwkmUKXkr6zWBc64323tSogqkja3Jvn2EQszeNaazHjSyjw2KLzbiUf4oRgCxwKW8WgUonT4FyVWV15EbSXi",
  "key23": "4NYTkWjkLTHTu42u35JaaN8s3m5apq4WEwoRC6RbM9XeR3MnhENgfstF9N7ZCEj4wBdRsJ5ecc5waetQtgphf84P",
  "key24": "2v2Nyc5NN4W6go8x5ZXGwYHDPLuo2P6VHz2RxEbjhurgKKrZvS43nZ4XL9chypn6ZcbiuxVxP1gPp67zH7AfGenD",
  "key25": "3vBD4smDCzhvBQyrTQt1B8JWFT923iNkm4HgwssJtwqvimfqkYPophGRNypH7ByQeQCNfdq9fpPPyuNVY9yJdUps"
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
