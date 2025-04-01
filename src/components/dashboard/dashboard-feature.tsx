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
    "4KhFM3CejSFbdqJTppSSFhfQe2FgVPQp5YxWuBkwcD2LUywPPCQBPJd5kbPwVsEdUhLi2nqvC3c8Qp33iDpqeAGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLJ1Fp4Kyee2r9hJ1mPTLrXh3FJyA5jxv9EyyCav231Mcyez639WtdyGsSEBMBwn1PxGx5cZ5iVMVRLWuuXQsLJ",
  "key1": "FeowUAzNi7gyB5cWte8eBxWw48gTbRm54Xd8VK9KdHg8JeKNuvX3SFQkujx5MdoQ95uHGEmXPrQiToTKWsZa2FS",
  "key2": "29Z2umz4gSkFnkeUXbuZRJG79XoU9JBJasGVb2vXeMaFQwrcF49KU23M2GcTCZZ2EQ4SepdtQTnxztbcERDBU6j1",
  "key3": "5dnJufXFqMTVJhNejMEb5arLinTFzLgdSPomSCyBcfoLDuLoCfs6SHRDqkqDDPh426SMKPh6gZ7iRS8Y7suTkhRo",
  "key4": "334Y3uGXcdqEiTLLmwryCAHhBukDKFLqjNj1iLGZqP87pSWLjP6YrDMrggH9v24NLhiG6pBbFZpmRKcuT1RoJ2AC",
  "key5": "2AaZW3h8c5sKRM26gQxRdVUeeQEST7nNknBLPKx3zGMQo1n4iJZaDapy2CTbav4ySJdpWMMBAs9EF8ByyD2EV153",
  "key6": "a8WgL3wgRtu1PuEhDmwN9bpKcz3ikPS2adnSUQanHLdP5jpz96UwBEGun9NzNQPHQm9Y5z8j8a3jeoYMUUvrc7b",
  "key7": "3iau9eL4c5Tkkq6zCC3DB26p1sfekFom7YpaDQMAJqFEUZGFxF895WNRK1R9VeTWizx7BWAtkudzzWcZBYF5GMTq",
  "key8": "5Df4RGjA1Ns8kfnxb9fbvvem2gnAGcmYpkd88qDKEcotGBFX3tqP5KMYePnvZU9JLrT5d1opSLj97MmQVJDP3pZ6",
  "key9": "4bTJRg81eBYgVnxxzLoNxd9F2dh2j5rDyZvUy5k76FLwCJ3QpcKnYGsRqfpgDb1CaChcwyxiyyb84S6NDsYUUCVr",
  "key10": "3XrXspQZH1CT1Dy4EMZBnSvPjL9xW7maq9taz3daeoZPBV9mhWoPujWaDsnFyyoPpGBBEoScWwSgrPwsVyYaFkCc",
  "key11": "2tMFXAKAZ5F3CnwASF8UHHNpvHnkQRmPZQLBBxzAauo9GtTXC7GmBhgHqdfNoEzytYLjeudMtL6VDYn8uQvb6TGu",
  "key12": "3EMKmTDhfSDhygsnZBYa2XfRfrybBXTQhCE9oEPRmWKccCt8EbuQGSCewHksqyuVLM9HEL4p79xJJKTpmTqk853",
  "key13": "4XWFaunw1qr4Vr6d7eADXLnM3WSiG9XbFMgg15amGXsxixrL6dmihter86vnePgJ3xz4xtAgmiNrn5b6MNoZ4cyP",
  "key14": "2FgXnaZqnv3RDEn1eQRAFtE1hYLysGCtQ6kCbd7NhwNyHwKcRsciLLJmVDqZRJdn92QhU3aHHWz66MM1WRT7A7Pz",
  "key15": "4R6Fx9pHGHxVg8jdtNbDfkNJENCARACD9eNnqWfD5KjcgMxS7aVZECME33vxkiyhFTcDf335xZR9QtuPbAM189fV",
  "key16": "d4EpUEckFhqhAE7wMGvTQH9QxgqmhtYwKhqpRqesgGRKqybsDMQQyJ7WdqvMmmx6JnK2k11VY6Aze7ebJxr56P5",
  "key17": "4Ujd1CEp3mVB2RcdUHXjC6FT1p7NVggfPKcKaGAPeNwJpQcJpJNhaWbcUsb7LfHcwaUa7SektjMxCgVuQ4zi7jpq",
  "key18": "3FsUcWKM6Bxtx9zWjVMySnCVXoLgG51powJrbzY6CCmkNiEDeH1vFeTjejfvPgspMo6iw2xfBHYDrXwYuzPdMr3o",
  "key19": "5zYNduy5LY6L4RTECchihkwkvTZjcrKv83kcjuhXbSQ6AZisKuzkXpJQbvzs66NsZg4wxGQ5FejbRU6BwWHp9gmV",
  "key20": "43e4cLW4qDAira9nqkLDRxwHhjyrTd5YeLWmJQK3qFCPWDfb4HjtmL4CAF6Yo2HB3aVqmuCm9NP41kBeF38q1ZfY",
  "key21": "2ZJdSWa5qsbG3f2JEYpmoHKdwuvck7UWw1vpGgp8nqmrPkX7JQiLWvMN77kg5JyZvx1WTbcZJM5268HFe25iB3JY",
  "key22": "2kPSd53Rie6hFaFv47smYB9GjmYurjSy7SKNY6HEX1EKRxqwSeP6SxVJCGPr4QmaJ7s3vQci6MJQcWNTXFgLDEGo",
  "key23": "49N9wWVwNRrgdbkPbgdDJc6fsrqsAhTZU7F6To5Zg7scfBN6xgpnm1Vea8352QHBN9pjXXhTYuLEsAUGqUyn6Mqe",
  "key24": "3nmZ3JyBYhywm58ov5cmVqj6LKSazqVBix9FLDe2ednYFDmku4X4or4WxbkT3jihpACsZ9MtuLVWQ2xscaDeDW4b",
  "key25": "3ZJN6y6wGZLChkTi9nGEHhcc3WoNaHcwY4N1UumjUfEJmmEYQqWcmtoiCCaX8fR918UAdZ9K58ADpXDEiz4PQEh2",
  "key26": "3qrRLHBUZpgFmjAYYYwbkV4a69GVrsGU9E3WXoq4JDrzohcXy4ExkUYg9ejFLGCB9y6X51Cbqz8Eb2GvKFuXxa6s",
  "key27": "5YaXSSZnfLEqPbDfwLLH7ZBhL2KWbwizppJgjTGgGwVJ2bLpY7TZ9yepHTJWGgtWrrrYFeN5cTHccuYHW29fv5dH",
  "key28": "3FS2vgeSD4kDc1xeQqLPCC88C7JSK6EbkSroWqzawB9xM3r5UR3bUE8JFfGSNAmvZUFzbnQ1NENjKHES5MqqLxGF",
  "key29": "1agERbRaKiZVmQHgxg1g1JM2S9wYCTZm1QmngHncFso1sNyz7Whx5GVVH6ZrdabhLKGDcK3jpybNEtkHzYRhksL",
  "key30": "28sJnyeU1YSrzBcNU2Zis1TH5oUEo53k7jNov4T2Q1Z7PHPgCxKjeJAJiepkuJsr7FzQMeGfnUWeZwMZyQCPe2Xv"
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
