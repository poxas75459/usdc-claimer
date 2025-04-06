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
    "37BJf8MDMGJuVjb3itnvoUR2wcjuuJ4FViTjznsALskkAyZnwz1GTuW2wdcn8RH4HRifsv19fbZ6DC7ZkyyQcuQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdXchBzF27ddJ3nCnzZhcFQjJg2VTbNVqNBA7WwKwZfrXJApF4UDgqUUzT5bKtQJsu3yEHaXhhnEGZLpNcxZbVg",
  "key1": "48Qqw5id93eivR3igPnvXqQVQboRwBgLpK2tyvcxKKr48VrEN2i2CsoaALA4uWYFGEfafyP4r8VWvZYJQDPzKN4f",
  "key2": "saLp7PQ6XYf5BctyAncLm5Hsj4H1WJjag1Y5AsvoEvUw1nZEz1FMSRs6a4L1v9PyXgGPLixWSuCSuP83eZk5vhi",
  "key3": "3iXHEeYs4kTZtHLQxDtXVnpQHtNkkj16s2dRvufTcqmKe8ekNMR7gfmz8GmMwBKticGYiYdEU9BWwQnnCAiFMTxk",
  "key4": "5TyHTfMT5yxY9CnGNbvT56qvucfrwyDihd3nqSxFap7QwptWoGLpMSFgw1AFwNNWunDyBnXWF5BB1hJLcfAEAzbY",
  "key5": "gbbsoCi7AULmkiakN3WePp7v3Rmbis2nrysqg57yPz2v9LntmkuQzu13WGnD7nHL3WZ8zCx1Pk95GJrmMAbEvBw",
  "key6": "2MFsMM1iLJFMEqSwQ3goQERBN8z4Q1V8gEjK89JEqyv3Y7TMhYUG5sZpoxz9siSQDcByPAux6c8NuL34hxzJchZR",
  "key7": "4JgDzzw52kxXQibbRWFGuzKQtaK9iHAG1oABFnpWrHAxfJZSWyiWvKrKWXMSUqtXTefYiBbB5VLo7Ta95uZ5mUes",
  "key8": "4Tp9E4jXYXnk26CKGRUrn53LrBS1TBFS7yjzh9jjRfyxAeRATzFSWadcdvzrBhcN5kahBZiig1J6apkMHGNbuUgj",
  "key9": "36ZLpPSARLohw65RNLCyQPGvTiP74dRMFbWwEAA9Co9hjnokDaWH1jUo2ZtdeFZfWULgiY46XheAsndVHDhX1oPo",
  "key10": "4PH4BwMj8ybc5GZmpCcruRKbSRV86vNmPpMt8yRrPtVxy1LWyGhCL6eSoCMRWJ7RjUDtyxxc31PptepGd22sZYgo",
  "key11": "2qtn3ewo9r1L3xQxnUr287FCnj6RhmJVKqa8JDfLF1sdxTgfsyySy3pbpKGMuM7m7sGAAm9VS4h6hWQ4hJGmnYUM",
  "key12": "3wFT6b84MQCk4NYGkmVJWHndp4wJsMLVXE7RyaMFhMnKkHiRR8dfGGBSmg8kNSjV87qePsawVWjHRFs79ECsrxnQ",
  "key13": "3f8qnLkeTfb6FE6VFMaPwbAoWEo8kbizKvGugFfVB76BVeMqen6R3tt1W1qHtAyAv3DpNvzR1tUJp1jQ9KBqm6DB",
  "key14": "2RjLGzkEQVuZpiixRPwBF6vQ3QqcdrzaAw1ip58Pm8CKMXfxvrS3GPHVs3ocDuTVxboDoN8SsfYdCakRgb4UL4YL",
  "key15": "4ZNrE5de5NG9xiAWmTipvjUuRrL1se2BDrJe6cGetngspi4ewRusdUsXGkasBKeodtdQdS5YQpZsXbfwJFC5LufK",
  "key16": "8ipP3A4HwyzGzYBERBdDSq85S6GGqdrhzP6HWT8cHju5r6TirK7H5cxwo4HC4nsGhMkKC3KUCGeqLPq7CWvjbUs",
  "key17": "2Usov19EXA8EXR3RFwQeEnAx7tYDf9X7TGgbuYoay1YJRQFMcNbCb6qukKCM4qNg1dN1uLDoRcwQDa4XiDX1fdaB",
  "key18": "3izWfVcbKULKGjurPHjnjohQRMdU9bdqJZMXGA8BdsF7vsnphGutmg3NULXaeBKAV3sfkzhaNG648mc1ACePeHHL",
  "key19": "FCDUCKmTCjNYJP2rfrLXF18owAVQkpR5bLPjjx84uZ4UGtovMRP2CBBtZr5TRbcqa398PLTNahySnnNuc9SUBwi",
  "key20": "2MLF56R1XhZhA7UtQFa8ySYRyWENVpgCKMnDS5RTXBbgFd21DnWDKL4N3z48xzDCTeqWP1iUFArzXZ6uigB17bCZ",
  "key21": "3r7NmdY9aw9HYMZekyXkpiccdLHGhaXnBsvyqDa8maSWm4uWq8fWdYwnkhPZvTzy1cx7r5LZLXjNqdWx1mDbwk36",
  "key22": "2C7SmWsooBagsRmQvvqgSuFiVtfRLV8S5143U5M3z4nm3R6EcdHXJTQtFdYfgsBco9txw2PC9r9EDK7ScAGKBcQH",
  "key23": "3etuLcL9gkVz5e1gnW8ejMpFSS4AvvWXkfGPDeRyjXvQ3xV2GuWJ2XSfUcVg5JuVD7iU1XprsrUUq4CjXhwgpdG6",
  "key24": "3eiR5dqhapikaWqeQFXbwARLJsiB1rTYE2UXrxfndivhAnnfLKANc4zC5jxTuHCMegWQL1bwu8kVyN276zdwvuvT",
  "key25": "3eFBZbaNCot4nPoifTZ7gXBBUeafyTXUzZgnYSaiMbDxfq5GXYMP3fD2uxhSh27JSYAovDbUPP1JFFc8ZGFSt1Pz",
  "key26": "4eBVHtwgpfhktsVmHFhrytAQ4561VJJkj5KHhLuKFc5jRJKiKPCbzGw86btZiWhG3KXBLbX7R1iByA3SwoYBj3yo",
  "key27": "5r1JPb6RVoMNCw8Ky8uun4GCBLK7L9s1Fzx1Ag11A61JV3CRECYwqSMWUQZgtxV7rhL7E5ht8P4Z77maNNTU9iiE",
  "key28": "2faF2RGDYbnDf6JkCn3gjbvUgGu9iqUsv2FnbGBtmGAW4bGCiJgTK8z8pfjiPd9nGfbJas7dXYXkLcwizp4w3nwA",
  "key29": "4fKFZrVFjLJ17JntE4ixHiL3sGhNz4KVDGpuubF1uMaL55kGVsuWyCXjkypCnA4B611eGYdPJNto5vXZJkk8YJrh",
  "key30": "mxZug6DWBjUj9qYjdfZCixkSR5rn4GAf5X6yetf85T9Uc2bUUDQifRN1wXa1m4iu1TwMPiTavHErw96M9octryM"
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
