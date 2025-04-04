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
    "KSJy56NnFhKUgAtuspqbsNAQvtE7GuhgETGYUvtdvXG6asFZiN1qeAmWaLBdwQ7kjhkhhu8oauH5VUbr76NDciA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31no6nSgvyvk27vgVD1VKkkeiGR5ExDUcn8NCtQs9PsMSMP9fx2w8kAqnFZ76HXQpuovEFCZvCJeEPNruBC2bLQH",
  "key1": "2jYmZXVRAmUnVUH16XenW8k1vfYQdPKAptWzmHsKRD6GXhs94RBLTYmAjcBdBe1x71D6XQ5UFiYdCBixxm2JqX9k",
  "key2": "3nGTPnmJHrPGctpyv8Sa8S2kwBBWdTWDZGp7fNvjkqfCrwybYZwZvS9hGoCC2iC2JCJ8j5ko4dpKB1f5xqAT2Zx1",
  "key3": "23hHcdwS3ufHnWqetSjhvKcgevswEGFUVryWmbBHeorChYHZbySEoEH9iQeQemS991JvsnzkBkYTrDJ3vAFgsUY2",
  "key4": "3zwNDifWuyx7KCvLP8wtGq4kH1sgMmQuA64cLGhPy8VrxcbW8x3PXKNSUs7iGFXe7PMfTLj6PPNrDN8yu5iH6KsK",
  "key5": "43H5Zm5UzVU7gEjzAEeQZsVmncdxsxxSwUQMi4VU8XrQPL6WarQbX3VizHY4aJYcDQAJyva6pyEKQVxZ5zyXhEWL",
  "key6": "3BQoEsethw7AHmk2r7XrznLq4TsTspBiDoCTGMKDijCLisQnJfCNHeQ823zzHm4tfWuaNzQnQZ3EgTX57nqpb8cw",
  "key7": "4mZoh28xwHRndnNcbF6mfhYjGMDMnmpw6hT4FYv244Xyw9NrU22pp73gUvcMNYouWn7catSCzgSWWYpwAXBG43Yk",
  "key8": "5MZQcHfWExg5kJyW3gVnhJiEsJGD2yJww2jKvK8FqZytp4PAafhR7bNJc4qQj2vFjzeCLdD5jcsR2HWeDT7zSBxh",
  "key9": "2RQBUo3aopzxwGXPyvNN1WPntGjqEknik1SasEEUFq197sSL6c2nkJXmWefaKopG5wKFf1EhCnWqA3xFyE9dopEu",
  "key10": "3yZneYu6LDZbdyGqCuoK44jmSDKBi4eMHTzyJmacBERzoGFhUTyC16LxdBorqKsc9UdkZo4YaiYW5GLzLkDniN8e",
  "key11": "ZjXKSfGAHUB6s1qj95TWB4y5KjQkYRDue8TgEQj9YfSzM6dQEke4x4TfZcG7ctfn9fMq1mMbkjUHQeE4tJnsXnu",
  "key12": "2H1WwqFNCmyULzYcD2bALxxUpYhwzD76KMmnEq5NWegkRzbyrC4gMnCk3Fp8gB1bcyjiEt2tUnAv4kJEX9z9ZdWh",
  "key13": "4eoYWaRE1CKu5JyMh23jGwRdLdorxDxy9HA5eaiLF83W6pp1fUi8QyMEGR45xkYEALXs3Na2BpmGFg3sfhctpn5R",
  "key14": "47c2nedVBtrnae14a1vRYHSLksQtg5c6vJWqp2HzkFzzUgjaZaeSwot4Qkwn18wJ7fLgsFMiEMchCR6SWDa2j7D9",
  "key15": "4xgVbLy7HY9YkMHJbS5jqaJyJSHUTahEj7RuEDPoqG9m8AwzVqYaJD2nAjbaf39XnzzvGfusnZE2XdkhE7nPSGW2",
  "key16": "bQf2QdtpEd7hcTF3ZbPhP7KoqmU1VRKpKDkfQAPHSjg23ECGa2YeMFs33NAEFwWxpKgneU9gyE9XTtvV9SnVZMY",
  "key17": "4wzE4N6BGKgSK2N5gwREeZCYLbfWUCmKV8vaSpMPq4QYzzhGBBvAXsiz5obnM4mQnCCrYnNYSFJBxok7VzBfjHj7",
  "key18": "x2S7AziPyyV4T6hRz21ViyBrf25CXwJMjDxNQBBtSCtuUjQoL3aRHKFprJ1QFjsgDG94fRoVw1aysARYDVk14Ai",
  "key19": "3bT9v7u8bXSYujVAkvqtgBYexFtFSNU6ngnw4vmGywc7W18QhpRjPh98yXMeSkLhpDDFMKFzrmryXMWeeJnYE2Xa",
  "key20": "2hviH8yKKFturStrtZHGFPBJkm9KcJnmBh5W5nfFWVUc5jHBr9eab9njYrJ6UxuSKVXy5sdvYeWESrnRRRK14NtJ",
  "key21": "5WN2xCV11TYJrCjjfJMAnkdjTNQEMh8AXhT1bjRtDpbHZmiNB2WtEeU3kMwhbj3gbfKALuyqfnjjNR8dAjn43PKi",
  "key22": "D9EGYF8wLFtzNRaeCLWSTW5M7sToh8xmh12Tf67Geyc7bfcfEESYSv1EmHTMF4qYE3XQmZcw8Vbo1efeSGjKn69",
  "key23": "3r9tdMnWm564aXU18yKuEmUjS6etArFjnGaWRikcEFKh9vDYLzGYpXSz7X7iie7m6ZBFwWA7QmS15WLHC5pTsS33",
  "key24": "4kE27E9hE2ujnhFPX2oKUppVyKG8jXznuWWLyEtW5jp7cWQbEUWcZj5TTaSrYbZSadis5WxS8xeL3KDgBT4m5Ne",
  "key25": "2GGS3Niz5gbqAQJQDqhLewgEA38oEKN81NBanq22xJ9qqXQqwsYvmi5EecBa5mTgBT7jD33kaTUZr99dgRADGZ7a"
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
