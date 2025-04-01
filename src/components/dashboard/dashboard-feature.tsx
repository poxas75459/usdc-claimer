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
    "3SZG2iLAcEHHbscmJNh7mb4ENkrG2sC8LpW4GxdtHVbmCxD2ztTkKLVbBYRDb9URUdu7kfKgy1C7Ab99qwzgMkEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUjcqFBRgKhX9sxitrTug29TsBi8F89AbgPp2zjHUWpcu3xrZmsSX2whmy8QZT7pF1Dsvgm9jhJ2jejtzxSneMn",
  "key1": "2ct3yN9k1NA43crL2qKi8ZPDuFZSZTmRKtz44RAZDrEmRDLBTxtwERZJmmVuiKoBq1QUiHr8N1oYcjShEoLVHfdm",
  "key2": "28h7dJdjfLvr9tbyHf51TLMDU5JwM8Rqa4qDeKGhpfinGk5ADKYVthDkXaDv6xpjB5QqJGdHWD6j5H9iBtDYe5pj",
  "key3": "WKNuLfco72cc3qGHkj1FyYKrChaJMErGELXKstWps9DJRSoAKKfE48LecycEvbLGZ1j7LnzAMXquSdNy7bMdDfH",
  "key4": "TJADbQHX9F3i4G78Yn63g8SA76H5XubnegP8G37XQ9QRdVkD3QfKq617CsiWbJ9k1PD1CLCWSGJEvKjUWLWREdi",
  "key5": "2E89BkozD5TWsrVtfoeL1mZpe3fMDeU6DXzKSfvEGi9GtHxALnoji8C1QY7hrwqWrgQAfeGRCkFoHVkJsKgBQkfA",
  "key6": "3t7hm4Auo945GBnyegp9BeJibQRRsfHjK2qEDSXCkqcZEigBxjhRQPvwyuKiZfbCVgi1NBLNtozpQip3wcTy7Zrz",
  "key7": "64LoXUgZJPVKiRksgz4m5gdHooAmqicEv1J6y5duJeDSdS99GqEANQu1A5ycbZpMuu1TspBHnHLu8hkTUAHnrysh",
  "key8": "4HZPVEJQdfHu8jZYXsmBCZhcfxJ9DgnUHjBRQinBVGKZaCcuKNqK5AJvUXceDicGAkHoDQYjcUxA13yipzvyf1Lg",
  "key9": "5bqKx1ZfZ7WAK5toLvYGwKEHoC1W2wj2sxgyQzt4vNuRC6csHff4HwNEMaBWtKuMsCXP7Cd9XddDi8Ae9jKTBdZL",
  "key10": "5sw4kZBxXTtwjGDczpUePgE4roMXVoSJckvdJjbrNRyBv3J1BPLAmGTrQNLGkaoMfBL6bLmdQA31ZRqPjyVciuHZ",
  "key11": "2hEjTcmWYQ8oP8gWGm59DoFn7HiFJCBgF3MwCGSAErDQyhHkttugfNTZMCUwTrqpNdSPTsS5Bww2Ekw1NHCj62Bb",
  "key12": "PLZYZtZSZ7oZJdZzijKUEMgMWi8rHk4P3JePTvN8XyjDn2XukHGtDXnwATBEXxEbbZWaapTLFWKZzAzMt4hMneS",
  "key13": "3fNHJtPBsLMD9ugCNhV579TFEKuucDtfpj4eYwTHsexqiJLHcKH85U6xy17JDv7rtw9dBeUYTsWYWPEnxrEuXRY6",
  "key14": "4hoFssoajxkSo75ayqnAxdYSNw6AaKqYjqXeMpiWYEzHGEH9eYd6CB1ciWjB3Wcod5U9ADGh2iZZfvCSCgfyhVkB",
  "key15": "5SZVbXdnJ2kAjTy8KDCE2CE7mpoRUK8YpT9245GaVqWzozd2h2GpBfptBHW6foi9Z8c3y4PjLGSEpNjvD4oqappu",
  "key16": "37xWd4RJLp9ot1BNKUohfTGC7QdtgvnFSSGXjPgpjbjn7oobdYWGBWiDQoZBv5jrvz6BedCjvChTwDxTHMfWJECD",
  "key17": "3AqmjMbDheY7HPq5g2sQqNupXG31qJfsPzLtfWE8PHxox7nGQSeP3ovU5ZMnHW28xxdY86jwoSYRvsCKPMzntN3M",
  "key18": "d5zLaoJ15bDazDaeQUXS28zsqMtWudXfKtEwbj7hVqyYQUTwsaudpyeAdHzjUcW22vEjfiprb8qAEiv6Kws5XVh",
  "key19": "4K6yCP9vb86CBH84TYLoM64K9LGgRLwxrSed9jGV7NppaEtM6hAHh9qSJ1AKB4XezrpTKYH1Sjjww3qsmxHo61LV",
  "key20": "3PGVUUE9hbL6XR18tQmCLfi7mcsV3opQgVrZiDBXiP8x8WfCRQaSUdoj1GW1oKNrMqpoF9Eoz1DPcQjLVRLfXXCv",
  "key21": "2X6DAHpHvQtnzfQFwaYSizBM4DwXPFgjKr5YHUHE6XBe8KCzC1suxtipAEC4A33ZXHG4SUSCMLw3iE2ud55p49VG",
  "key22": "4rwaMUnKugXcfis5ien9Byp1NMqSWY7LzXbsw4eGVUc74wfX9jXqSAv9bYHKV1W7W8mwXVDtTd3M11cH4ad5wzjF",
  "key23": "4XSL7jW7Uok3HCzCrvP3W2msrTBgToZ7xQbDJgvU6KC1rWTH3DxnRcsNDnC93ZoRuQgKLTRRBDysJNTaAeUmEGKw",
  "key24": "s4spSBfiyaLxEpvqb5yiP9zQSNL4Pyfh2UnJM7jp3Ajp9HEPgG4CGyzcetrzN5SdKBQs3xCa9jTD8StW4BoFyfx",
  "key25": "3uXr3zZeD9vRU9EcAG5RZzUEtUFaoMgwumWasWFK1j4k8vqpTPHDDjng6hgRmZhpfuaoBAYjXWNbrvkEVn2ypDML",
  "key26": "4GwTTBF7cyhQ4MmSiUcB97ntet2Xw64kzqtSP7CxJ6MftRg2fvxY2XyHd9DMoYLYeva7SXSkqADWgBMrgeyPU8Qe",
  "key27": "4GxvDRg8tpaCKQZZ9eNXBMB6hBLokAxaWPUbeH5UqCFs9pMaaPkn7aAFKkjSsbcD7ffquBRQRVdoYwutryGKYsjS"
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
