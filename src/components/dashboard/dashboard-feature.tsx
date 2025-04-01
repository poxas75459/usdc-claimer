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
    "Z7qrm84SPFSBMcQA93djF2nhcU9FruB8yvnWk3X8urFaZMZyhoYJb1HzeuE8LLRfF4BeAYzGvMTmPzPxYqcYLys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvPP52b6nsbYt3EJBFSnbtUrQbW3aJRq2jwn4TFQfxG4Siab2zjdCXRkXwyDRpbcJsJjJ53LoMa27aqYCjTXQYE",
  "key1": "5CexD2ZftPtVbsbUZWAh8GNXofbtrVtET5Tzpz74AhaGFihwZEbVEVHHKyd9mi3yNuFj2bxeBrrcApxGrZ3X5wog",
  "key2": "hScwBNs1soUGs9RSBAJNKfRCyGj2TXjXwJeVqNGPVqjHKQLXeKy4VFhWaP26Q66aDRH3Av1RQnT6q7qHMeDyodY",
  "key3": "4KRTMnPx3SgVYfwJ4aaH5LXL6i1r1Q1Vyxs16QLz4NQi336tynwaAi4U32c8XCGSgcrx5i5jCauNFyeF7NauJqSw",
  "key4": "4dCyuZfYNxtpTNNsb5rPWvX9MMmNtReHjCcLmAHTiVqWtSGR2Fw36X6uPvQ2zEvwP1GAU3t3B7oYBkRkLeJ97GNL",
  "key5": "igTyE8yipGjfnBQNyYuvq8uU3D7u4uLdm7f4nreHZA6BNUcZNwfZGNFpCXj95cmq9dYudFZoo5FyRGpDmzvH7nT",
  "key6": "3fspR7DCdGt8xR4LJgJXG2qFmLsMMfRx62tTFBXj6xzTmWmWfH71BxpUYwpcugrzuzcKrt1mmZDg7HfQJ8oZpdRq",
  "key7": "21TAdtgbKBMcEsyWkDjNdjrTmbfftLLVRMjrDH6NER9EDNbNE1CbnStHhuSpNyvCi3Lq8PUq9k63d5MP9ePSk7gr",
  "key8": "3XkRcSML5ExkrUA9q4vh1nz3BbGTgQy4NFgYQaWL8a52Wu54hfKgHBUgK3Y8nj8bbQoiVuL5HqxYuNhhXSRF59qf",
  "key9": "2MyEJFtWPcSrH63HhhzyXbp2KBsXQxXHRg4tjPbAvSSbtw6LUQ6rB2UCYnW5Aw3aTJxFQGLoKNx7bJAqKSmqMAr7",
  "key10": "zzhqZkJvVraL5XG4hfJgHdk5bt5cDatYnNMUgj1fiQq5JBzPce5KxyrfDcahNPs7ztd2wA9XGtKbhoZ1eoAcVTs",
  "key11": "2R6L2RisxFhTubdKBipX1d3MvE7UTdkkZ5xT7ZJxp42T5scJ7Yseez839oAvtnU8tJ8V5ijd5vXGKg9tnMfzABB5",
  "key12": "3wK1VAkGxYR4aBcQr7eG1KWRDjchLr1LRw484eknkuQ33uo2sSUwprVduCkVCRzQnheRGRnthzSB6STaVTfL3smy",
  "key13": "54R4BpeuYboWArQqxpFfeeZv7MwKmAi7GGGu6VobWGhRg55egfsWFUpQHeKrCgvUBjsYDo5fijbT3z7Lkwg481Y3",
  "key14": "5o1246g2Krn1gzaqT7uZ91rLzZfEWHD7yShbcsDssafka14mvbESpuDPtKTuvqajjSUcUpsUw2gthFBcu691U2Lk",
  "key15": "2JDT9yE3CKsWZn2Jac45bxZ9Jd3PLnnbm9Cir7N2Pu6jmsYuq9irjkqNH3aXrfjbpqUHvZak6BxzSXMDvArfnfbn",
  "key16": "3NrAToVxo37XGyrHXpy4AfgoR2CnnxMysjfLf3xJtrSJkFxNgiinVU2oNCXewtai9y7PPQRqTQWUYR6oVC1oBPMx",
  "key17": "3CJ54GyRNJyNHnotYReEpNNtwHnKESiNFQ8KNzphzYmzNkU7xXMLjHqrc1e8MdGajihZ5q9XiAJuY1NQHQBSvPph",
  "key18": "5mrPg7NDjGhnMYnhNvN3iZjjNskqTtDQBPxJPb2JHT5vQiWNeSH9xAEGKk61bUd6xKVWWLtXkiynwA4ifWqYCFAj",
  "key19": "3AUCwSmcAbNmJ2Z8wxqSofRcHkr42jsYXvGNb2CDmjFFEey9yGT2QLJx91Au5HhnZjq9Djncxa3cuxQWnqafK7wK",
  "key20": "k23SNnuQnpcodj2VMSRe8N5YzJKnBoZk2SskbAZFwPqQrCUoiLwVCpxurNNdRWSMVrvmoVVecZRCeaweheGjJ3K",
  "key21": "58EGNFqcr92x4jv4eUu5zEpiHo4bXBWf6ba8mpd23uTaHxgu1M2xZYykWytdz9AfSra6DhAD2yVHCEdsdzmoDqRd",
  "key22": "FAFg7gj4CJC15JCzf9Q6ENMeVTphsZiJD7hd2RkHncarADyk61XsDFGPgd1mkoRcUwbgpfZwrJL9aH2YJjckssT",
  "key23": "TgKeRkuHPAZxoAX5eqAiEw9zo4nKuqHEnsh4sHD18ZbtBtw272Rhp3nfhr4n3RiWJpdBuGaD6PzhnR1RjSr55mk",
  "key24": "5MrDA2HDXRQ3W4qYGcRPdLEnnJ7cwW5rP987roF9QpNp1jbi2XRHb4knxuRUqANfJeL9Hy7xsfdHU4aNV9KTDFKZ",
  "key25": "V6NG88sVhYFJUmiTdzD5h5K8vfwrZjZvBr4ThWSoXyJQgRV9hNRAY6DKgNdT8URkPgh7rMBoT5VrquayrjoLuej",
  "key26": "34hUSzGM7bMYfsmHE9rjJr4hyARwbARAJ1jVAvcPQgpMr5qn9DRYaBDvUUjvFHTKzeEbo1DX5TWs2nuZTdatHaKz"
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
