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
    "3tbYLgiVUpoWDDE4yJjtUKRPAKBn3uD1oyLUuWaTpukvneCWNZ4Bae86TRHpu8eqQcUsoEhP5r4Kaotsc5KioFyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGAYHDMR2hruH8g5iKSpKtxUfE7yd7yDcBwYYEiiaZ69UfhStoTJSxjVLLfHepsUW4pgp566ECN6HiHiCzfDnS9",
  "key1": "3ozAiYz9rbeAQPDsXfAp1xf8XVook9j9wCiP4NVQhncDdj7jdvbZQwcqsokdSxGJC6j1k73aigeUSYW8Hwn6N1XF",
  "key2": "3VmDpJPbTZMuYHftHcAEGfNQXz7vaw1s9NjeTAKpGhQ6Bi9wycXcxCCAS9cmZe1eZG4QvE9NHC6pd8uoXM7x6o7Y",
  "key3": "RxxdmDTE5GNoccyS5miT1nZvab27y3XgyDVzk2AxivXrHB7KStghhhESfk4kZTMQkuicgDHEAAi4y3kJPVMFKzD",
  "key4": "4wvPRknHZALa3Vg9CnAkNbQTPmZMCNfMtkGbUaxeFvbTJzMu7Ubh7TYVcdgENqiZrE5hrkhekPbDoLVMe5jekqpi",
  "key5": "2gzvp5JgXAV8utLnNmuEWv95UfdpPxneHVWg6vE4taEDJTUPvG1nAWGcgU17iEt3GDM7CjTjFwmdJh51Bw1RsBjt",
  "key6": "5tAEJiQBoDuZZzbsayMsN6fWbadHYrkeqmtN1D7tswoddCfW3MZqKYg2FZ4e2tJSSvUfyy1hG995S33hm4Sx9VKr",
  "key7": "4Bmof6hcMnptTCy4cDrmfg7vXP4McQ6RYjaiZsfcMimb3nFh8BxminHoFjisGvYpUWqYKdnBRDJn62Y2rDrtvD1v",
  "key8": "4WWiY83yWodehnHz5SUh77dgb6wZZrVZiTfnxfqFS8sTbQu335KKuM9DKBRieSAPviarW48gxNX9GSRAy6Y1U2Mo",
  "key9": "4GGV451mZ1Jx154tXiqj96LNh4yEkVRiwKGreausccPvS5541cBRddDmFMFkQxC5soY4NiJbedWfyBpZKSSTUGay",
  "key10": "2ZtwCkmCDyEQYMViZk2pWtNKN5Uyh33tpXc97nQJWHLRU5A1kn6DXDwiQZ8t1BT92HKpJh2iB6wC3qd2ZujPdpib",
  "key11": "3bTJ8AdZPt69qafbYq6YiEvdjN7rvsRzB2YpodNXD7i19psTt6JWd673w24HzsgvMXb6iQC7tF6A4TewRhBnJT6Z",
  "key12": "2Z7yuwy2ZtGSEQH2hSss5pQvQ1RpGp8CPDGgbneiKf6ARcAGjzjXxqMWHmgvV4fEFBAWp5B26oxxgTjMwAF3AVkM",
  "key13": "3nHBNKeNPhhmqUSPUFMePcZDBbtZPFbQNphLry6udpioH25hSWRqtZqs9JXs62StdKHmiCzCGQMUACXhdn4kL4BH",
  "key14": "3SmECZG8ErHPkKnfN3C2csPCQKBCzyrY4Y7N5gDE9uAK4XMoD4d3mJYjMHgT5JZMcMmkuVd7BuB2fiUn6bDdmsKo",
  "key15": "3JyVFTJhvMt3Vgnbq5d4LcVm4hy6ga4oVd1oA3F1wrM3FZtRzHoW8DTPYxoGpo7ZV5BaK2LVtkRCt26gmroKtTFr",
  "key16": "514oCdM96hRWxkAHaQE3CRp3Dip7BCsSKTHTSUi38NUKVGTnBH6Xt8G67kUBvaRYqEck2nAq2E3tpsexftd717e1",
  "key17": "5AG8wmj2woTiJ2DGgV9ah2YwpPNnxkD5CyMmSf7U8hVUZDwYXspaT6ycT8pdqYCB1mioU8PkaUYGsFawUE7FHjpV",
  "key18": "4MZkQaxgodR7GbrARxmYKxoiHgkvccRTMNzyxTzPr1BNtYSdbz18trQRGXnfe1aAX8Pe5DmHmUvWyPXw1Vi57fPC",
  "key19": "3SGcDzy7TZq4SW6iCHo84mpSTuEwRZahD6E6cT1n5MGvBZBStjnFQSy9awbtJP6oJpiG1pSkx56hGPRwzY9oLzYq",
  "key20": "2NFy5VhbWKBYSNSmF3Wu9R5deJpyL8Cz4a3QtNWi4eTrrp3TWBh8Y7zzPZ9GSFHszEpywgSwtxMeMbBok8W5Kyer",
  "key21": "2rtqnrpNqBiLKnxFWTbVQkajKHSK5MLzjkcSs9RkV9aFVbfZE1ie5pHjRFDJx5LvEup9Jf46JBN29rFiDXtg5aLp",
  "key22": "5dQW7qmykYKRRuFU3VaQAeip9fYrwpwFizVvzTMX1ngqjHHWz11r8hrcrQaFPLEdvUd6SHVoiv8RVcQ1SvLo5QgX",
  "key23": "5kdcNfkp9YNeFoAdVXJxJNHSxpLbEPDSfU1Hyq8mJEBzmReQk1zeXLwdccXbU4znFd7wEXSrFQi8yuLYy75nNfFC",
  "key24": "V6bX6L1F5jVqpiyx4ATW8ag8wFn1asTa5oVAbGLpfKnfimaLVLKCEuZbZXQtK3PzXzVtQooFTGNP4WN9YBdLnwR",
  "key25": "4a7i6UkHdT1K3mxeA1HkzJS51kQcP2KVe3RMumSfa3Ea1NxyDVsHuFx5qq7ATi726ZwQ7MEdmZNNyzLvY6wHZpJk",
  "key26": "3WrHWakmJC5ZA8FGd21LqDntNxvoC87rrZnk2dF2BLgX8h6ZS6VxckexcjNk9Vi8bxB7uYQtTaYuhzMBpj9MrzgB",
  "key27": "28rG9VF8FwwUVbyA4ZinwN3aYuR9D8Bd4HsA5XRfQHdgRr4MEtz5VSbVNFWstnx68jLj5rf6c6KgVFYBGqUGnVjm",
  "key28": "5k3yVWTvBMM9wstZVzt6EpTWPC1i5jzDCv5XDumN48uY7kwruLtwyNe5HiyuWRXzgkeFfJVfnKVjM2Vn1pEr12SN",
  "key29": "5vZSN6avcCHw7WBiArVM9ncRCaUJv4rbqPWJGGKswWAjESE3yoh6C9pAyWy4eH37BtNFwsZ7noPnv9ZXVSjJj7sy",
  "key30": "3dymvTzEw4fWBdcPCFagDv17dS6P4ZEAibtnXRYL5gsk4UGMiQkCKCXW4F4bzH6d9v7rCS45LyvHFLTiYgcCmxsC",
  "key31": "36LALhbAK6ze1AXTcxmPffdTvKtBGbfDjabDDXdSKuMV3wYte9Q2t46ZA7WywYwZSy3zh1kxDGiUMdQkFu131qCu",
  "key32": "33f2zUv2eZciiGf45919t4Nx8Z99gjiQkfWVRztJLDUAoGreHZabSXQDrUQXYi1dWqF17AQgjrkTggmLzSNBiaXe",
  "key33": "4bcLDkDoqdLkD6DWdcNG9yYedqphVwSKdraJYcZ5ZbeuGDTQBk9NLMJj88Dr6ckCvz9fch3a5e5JK4n2dgLZPdLb",
  "key34": "4NyrzMKBwyHD2v87L6ewJsFGyfXCMMRzfsozU7xB3XhL9FRhBiSCd3m5MmrR45W83THt9JUPYTq7K7SuoVcGkxFL",
  "key35": "3fqsTE4tPof5zEALoUNMGqmTMUrpe9PNF7XAisG5Fd7kwa1UPxtK7Audq99VKwtqXRu3Xj74Vg5BGAcCsHGHfq8o",
  "key36": "NSGVR7CFs5ttWFeRS2MZTCR6YCfTBxzVqjBddER4RoREtFD6p9eXGHSPK1fMGt2TgyqDej3ERkTcBGcH4waYK2K"
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
