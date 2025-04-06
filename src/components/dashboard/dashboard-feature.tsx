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
    "4KLwqvv64CjHnzRSUq1EqTzeAapBnbX7dvFzp3EWLSQ95y424cXjctKNq5Qn5WU6cyWNp2vdXR3bBVk4CDneDPpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GL5USZ2Wbpe5b8BAUjEFyUMDrg1SbkbbNiSywsoUWN7ANawUw5Fz6NYzpG7oENL3UcT4NihMdw31FPDZfqCbz13",
  "key1": "5GATn3zV4n98jxa6TzefctiS9W898oXUwhSfaMGfcyivxssP656Anq8eqrY3XY3BVvWnJ5bWLj6yXaKpiW4zJnXU",
  "key2": "5sqk37tc3i4nkVHV73v7stptRZcrEEmTo9BvAjhzakmzMpaHx916B9KRpBfMg7Ezfckjcodey1GDCpKCeA4sRKZ4",
  "key3": "66YFeRaNNBXPcGT3Kg43oBEnGCe7JMsHTPQP3q7WhnkdT66UBmtZnsjN8VAox63BdYwAekwNCHEXKpyFF6guAxDv",
  "key4": "5gGudz3FjxK94gFFPhZPZ2jePjwKHnf52YCiT5bxPy7uU5uToL87MhFCQf36joQvkdYTno9Vz5aJLdDrmsxh4by1",
  "key5": "62wq63mXgK1KMkn6sndTWKzskTLJ8ceDgDVDKeGDNgtJo5Ecjc4kPbsumz21gFH5ZCJNJ5yEE8FxFVUd7H1witKZ",
  "key6": "knHfzMRc4itqevxsqNRE7yCot4Y1yvvGuqTNASyFoB2TUnrjpE6a1n5bpGq2hLEBEYyE66emDt1Vi5LiV1P5sK5",
  "key7": "3wX7QeoTEi5VqKkzgEJN4k9mW7rL1osF6HUcUCwEZbr6XwYKLJ7DXx76zZPVsiHStqSDFGAYP1JBoDRzNKNQfVEL",
  "key8": "4izYrWLtPitS4ATgMnebtphPoiquV5GcML4Bwx6HNDSmHgVUkQcqRLyZnhRTa1H5G4nBvsaCd5EFmVhVYyJr2bmV",
  "key9": "2Fa8L4kZ8qshutr32cpkExybmzyiKcADkao8WEihuiZDxi1HARqGjXzicXHuwL3QuEnyQvn7RRFrJx68APdeyPBX",
  "key10": "3cZmZsP7kXzwi3ZxQqevzZ6UVqavbs5YuFjaTasnGU4PmifpYGYkM5pVipJdAgTJR66vtWVKNx4UgDixV5zWiKWL",
  "key11": "5hbijT36yKSw4eiYc1TqEL8K47WocMWmo5Fz6s68pY6nXBifYGsKGCPdmpM9t8m9GLBcHvc8Ft8it1UYUyUzjW1w",
  "key12": "5XiYwvQCApX9sYATfAPozHoer6vqBHS3yWitpUoZgR1sk1sk1WVYG9uYT7nqHPrJDoBAemTqRdGuzHFQTXbDgjov",
  "key13": "22V3UvKfprMGRBqruBhjB6LCGjJmf4i8Ld36euqVgmR5Sa5CNzo3Yu8kTJX9XmPwstzr14Mfyr5WX8Qw6Wt6K9iB",
  "key14": "56aCQCZXnZZa9TZkQWCPKtWtdJcyh6P28wtYisFQbixiCEMwQRWroMS6k48BTLABvpw3KGifq87vNE4wBf8QGAYL",
  "key15": "3vdTpLwVThVKtXYS1soNX7FzdFTLcQzsEPtYFuHgfvwWuaSovTdYHMEFFkc9RfhRpkx4B8E3JgYSNx8XAnsue8Hy",
  "key16": "3cNxJhRqzgwr4xELYJomyF95g5HkF45EEm9an1TJ6i33KxhEyo7oXH8oKuhsBynzW57YetadyvvDpS1RXuDhVKZ3",
  "key17": "bpymDgyUwV1S6L6GJhRZCBNUeGUyYKo7is9rrMZ52RYDZwQ5NmXEEQ2ZC7dCr3hHrvdSayeE4ceMVPU3ErFnoAN",
  "key18": "4mnTpAtoUe7JVVTyRWkHxq9BeJAiVcrqjUt3LBcF81Fe8SXiHWcBLDdaBa3Bf7nitVP5h3ySjUtH8cTgaBHg1iR4",
  "key19": "3n7vjW9ArcVDFrHSgecAdGeWa1prAoWtfrimnNzpidzUpVCpSLQLNTTU2KF2Vr6LRgggirVYFAvHQMhhCeDfVR68",
  "key20": "2dENH6aKDAN6JHzSCoJMy5c3HHGRdQAHeCCq9CZZbiDUTSASMfeMrWgU1uJJHTjazUmiKoY5sL78rkPMLRxWsi1s",
  "key21": "3ehmLWNHgzJMzYuARHeVzto6khYaqYcTEe9CqrJq8ADfaJCGSJPihUesaimztzmn25ZaykZVJTicofJfAkqhHdky",
  "key22": "62uqsGtaL86SAbcorfeDnpqMgcLuz5oerZQH8DMvqhMVkW1r98vngqk8yAgjU2CrUp7HFhJXwDtZnktw4TAhwjDU",
  "key23": "29dugNGPAqvHka8xSSrVR8aXzLoemDVXPYfMFzirdbD1ZHTKxLbvV8kBMKmoXrJS1cs3J513epyD2qoqX29meFDM",
  "key24": "jxWQ338hesXaHELsazd7cJTMsCQgeNWwzGot1V4Re7rpBLVFh2G1wE2LSj4envsEexifGfrFrarYYogBAmQBWuT",
  "key25": "5SWfuU1F1ejNw3qFfYcaWvegZEHGQso2kFdQ3xvfrfQ2vgXhSq9kDpksQBHFbFq7tHfQqzRyYU9v41ds2CZnbJjC",
  "key26": "y7rVvN9EGU43nED34ZHu2pLRFprMWRQofWyiqqTW66BroYDoKzN9kPmAiEZZX6KjNPhQSKCB5MFzPT5h7TetNcX",
  "key27": "3hestau4TN8t4TRb4zU9umd4PJcedcMibXkCYXp85cFxNVsywcmpcZ2ENJs6CxeVK2WHBBYB72ntgmVPwUMXg7Qp",
  "key28": "57njjQjfTzabxdDsz8JP1TfDZHTKTuYAogv3xTaRiE4vxk8BnTdJGZ8oQScetCvsjt9opFzGaukcpbK3aTZoTMf3"
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
