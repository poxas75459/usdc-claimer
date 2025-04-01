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
    "5PjZk8gqTNsYH8znGw9F7bayFaZm172WphUrjqzKQr1rTyqpNeSKFsmF7vYCCCKNnqKbpykAriQPakfYgGHaD9wD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tyMeKmqCNeLfZUWY35yme5zecLvgazdbb9bMLtDuJBHrrCdUHUWRmA1usDVctqXK8HjWZLnKrcLorK8Jg6QUkf3",
  "key1": "3ibYxUvk3ejAQMi7s7oLvjdz3ahf4mi3wHTXVEMRtPAZm7qAMsCqjDeoGShkEpZix6CqqnV1Bq3QQZUw3Vtkks39",
  "key2": "4BcrnSiB2U3vRktJsRFogNdXX3KZ4YQq1HbSUgST1pnHnJ2NNnvRaS6sDvZcKpHMUgr5iFk5XAPRZ5DLB5FMSf38",
  "key3": "57owaXi8R5fvGb1TmA5vqRJc84qHnJyCpG4NXEyLNiaZAxXH5emFPUQuL3xjKRA6H7y5Xn3BToL9cW428RsrNcxr",
  "key4": "3gZGS4a9TCrocutUQuHJ2TD1tbx1EQbhi6VRqQqMxVWW8BLjxhA6DjhicK9hZQDsBUsap2tRRkSj4KDjEqx6FwDH",
  "key5": "5jDjQbAEazvpb7YJAvjmiVMXczRYSzoEmeTTqmPhLTUmn953SRbWMtxibzP32tAtccJ9m9XjLzKfddaBvXr5XRsh",
  "key6": "4WKUokHKFuP1arPY6u72GA3SqUjBrtxM28KKZCHchYGiRCL8wRDydLXdm1mdNGyKtJ5iewaK1auo3VWk6FMHbnB2",
  "key7": "3QooCYcYLVGZBsp31L53tWW8MtWpQQs3HhyKynxnqDdaMvcy75L1aK8kQUNJd9psTaq8qJrYyBrHchx5N4f2zaZb",
  "key8": "5xajEUe9u1qtUmH5GJeX5sEqgoXWkQfKHTvV4gpAhAa6kUSi8zF1iB71qQJjpLGg9G8THuhv1iZak5RWVRgmrUGa",
  "key9": "4fUEpRrbeWCi9utSEgNfYF1V4E5ex5tqq4A4FU2Y95eDdQ2pjepvoHvF59qyLeZ7rjjJjGLgkGs8MNChVpUmzsfz",
  "key10": "2BmBR98vywqDPfSURjuzTcajpEZV9Qn93cbaUEae585DjgMLs8mVeYvXfZhPpHxQj5askfNT4ngWQev3c1G1yBr5",
  "key11": "3RGtx3iv3qAB6NK1roUf8obKEwwp8HogVQvRhEB6fJombG8d8ZWWJUaYsGmNHwetPH7GNsCUD8UjvCPPrmu9kJKk",
  "key12": "4kHykBzvv3SP7c1PHTnrohCbbLMsiwkTDTDZycKtKLpZmegm1hgJShg8odwQE6iuDWeUPtvjZeMpj5QXHgXNfcXz",
  "key13": "3L4K1H9Uyuw2U6MryQGvhuf1KKbSYHTBQhUaaZWSLFAS1rgAsS4Wcd3rG8t8vQBonSyBsnw8XRJbYDbRpZ1vFoEC",
  "key14": "fGYu5x6u3FwEDTodY8hhb4y2pM87P1G3rwoMzuu9SYHLEaSGtdJu7eRNTg6pHwgfwTMsqH3fg3WntvtYrrcTbz9",
  "key15": "5hAUFqcB4xJkEqEB1UNfZ7nRKJgk65wShx1Ahno6zizjc82ABuHZq7pLPq9N6GkWHGyehgHGzqMxLhDhqNsdX6Gn",
  "key16": "5PeBaV7hQ5ZA6sQWjHW2Aipxo5X69kZiuzPW6xt4xWUmxS4Nr8SHNU2W3qhv2i31CKuXaupdJR4bVHgvddiuRCuk",
  "key17": "4a9YT72ihyDXXjbxqHTCGo88u5ZBUg9aktbW4ZRVVfjwSD93e6wieuhyJuzBuhsBLiDxnBCVKaJnzwH74pxMMGJy",
  "key18": "417D9JeYpy6W5otEFpiMGzmCgVpzxaEaVwej5WrJ2EZXVui6pMtTrc4bYLYDcSrFq1R3xxSGkyZ7UsewaVSBuz7A",
  "key19": "47qdkVAzikynU1PnyXueXz3ipi7S7nAJzkQQ9Szits9aVJFY1JWaBWEWhLSdUJwnXRnQEthTLWRV2v4P27qqYDUe",
  "key20": "35jGZCjsJRRpGcYn8Q5YWVsGPYzVTXKJN5gdJMS9pPaiorBcbAc9nNqvjKmnWoSTxxWfUD4qvAiDmaAbwzJFQV5F",
  "key21": "5vtsoFCtw3icAcC8XBDG1i12zP2u6ekdAUa9nF2zoNazMDoB1i81iFBH3FgwUT6jEcsTegL9FRZTjKoHN3SzjGHu",
  "key22": "5LxH28XbuweLaye5onMzpdt9kg8gLimEjzGdpfXBUtoh8uYV7WTGRUHBtDshemwtyAkWWQRFvDGUdcF7ZLXxgx6V",
  "key23": "xfdxY1houtZmQbodWW5oh1AKawzDpUx63pGynSsrim7r8cFbpXGVp6fJzqzDCm8sHhpH45bM2cbcfoS8N3FMX9k",
  "key24": "514wi7UxyxzXBK5438NpEvWiuqg7qCMFxF7p3BrRzUwqWkfVwmujffGdM4gorGJdkyjq5eDEPXukGScD5zg6JD4m",
  "key25": "4bA2PpeMJtM3dcLyUXTi4AbsxiTZZWNHAQha4HP8xdv2qvMTmZv87dUmsCgvhj5xbkuwYBYK1ePc7aHkFU5R1rYY",
  "key26": "3C2Br1yDB1yWXtuEGoUXcEoN8arU5keZd7aCLd6r5SJvDEqDF6bVuNCLkcmAqyji9kbB9FkXsgjhSFw9D3G9F5P5",
  "key27": "2iafXNX3qPVEKzkt1TKYxApzeAzAQKygo3h3LT8YeRiT1j8cvzhCbxZtsWzHaQrw1Ag3yuGMq9dyWYLzMakP6Jc8",
  "key28": "4RJdh448FtjDdXbHHQefjgbddo3mRaQ1uM4Fo7zBihD86NpdGk4bDrGKPTkvybkiVmV2RwJ5UGCg9jRUtvzcq2FK",
  "key29": "5VPtjTpHAUM694bL1998kdBqhthG4xUW7A5c1W7jTVhTKXGFpC2uusfQDoUFuFYCXzfW5JK9uHXeZVaCggeEDYJe",
  "key30": "25ZBsumvAGVzLgvqtkoAPgpxYYuwT8CLvBFYf9eWnfKrwxRVPEz1CRGxrQohVebd3nm3K8SuoJrnspYVgwSUq4Kj"
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
