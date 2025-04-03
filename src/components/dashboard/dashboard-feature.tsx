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
    "dZq6ETraqfGB2FDLYLVLUvZRsDhbEk8HGPywEbYErHoCtXYJjkWdWTbNRd3gxtz3A8yAjRrmDoqeRLU1zC9pLh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365BhLGx1bds8jMxGAHqdReEdmf7AGBFiS5KbgHVBg1vn6yoaWW5u6yjzuinMvx2HLJ4QpXLjme77KppiZGYtcND",
  "key1": "2oqMnSUmc1fD7CfWqWqabkuQE2RpCHNo8h2YKwZiWjqZZqWinPLux1BWmsbEMYpqvZkah7zvjfKkeaDQoLM9mo3c",
  "key2": "66BJa4CCBKsm4NMpWDGe2iCirtGMZMPDeiR2etKjhueMBptKnR8Ejhn7pHLW3garC4WN5E4BsdiHt6pL4irMCqCS",
  "key3": "4wmvyZu9FMz83fuMAXK976Wo6NdvzQMZ4wrM3SDL6qhVSqY5QYpDdqJapBgvf92DqmvQy4yCg1g5tsGspLe3UuUY",
  "key4": "3BNeMzBF5JNBH1HMZ33Ei9p4mrTYRrTJs6fQCvPU8yJUpevkSfjxyiVCLhPBtvkjaRYaAukX9yL83DxSDohNgxDy",
  "key5": "4MpyisqcBGFssRdFtEgdDNEGC7nGpKuq49Hfmj9ZGkBKjmwc39e34XLRSSwpQFnUGY8zuokqZakccSiEB8h5pUXJ",
  "key6": "Q9m4dX4R8Gi2ENxbgsg3FjuRRX2T3izYX822m5LFp9Dc51p38Xn3B1uaQHMkRkjM2j4HCWRiCXANmDxDpudoJNC",
  "key7": "4qtnjgC1t8ybHsvmrjpd9u5vJqTNbyNT5rr2viwzFbMJvMVsArjjMCFCtFuQf1yJRJMVrkjLFZUy6xeAC8YmFUjH",
  "key8": "5HV8oAxst4ukBNBtkFj2C72PjQnKZXfkpu7Q7AbPeaKxCduRs5pcMtx8J9BzrDhGxjduoPFGEMUUqgt6jwvFmE8m",
  "key9": "yENdfRQrqGHw258rqgfaqLkaqexWtGYT9MEBf5NtzFfi5i7tJaqsk9Zz2CU2k3ER1sT1xfN98h34JvH6CjHscWQ",
  "key10": "5eo16h4Uf2uinpm2aRySG8X6hPSLKjw7futExyiiVgoAuwvSCLpQkPW527Wn1CCuNkHeNMDiYtuHVGEYqPGyLYK8",
  "key11": "2tsBDYBjnpV8thJud2aDRwNmza2zMyMMMVBSp8e8wN1RNFfivWc35zazBS75TnxaBzKXLZcau7x3rCP16Py9W9gV",
  "key12": "4apvcdTAR39t6ZvngqfHJLeztZMSKAuetivFiGhCdxR2Rq8eA7B6RgPmADLJ5rr4boAVasyEMJ1Ysexf2MwX8zP8",
  "key13": "5b221AbmQ7EvEjvAVsRiyuEaLbb1EhU4sAqQmoLT7PjcG9GW8UBxZ3zCvBx4MspBkgWZ9qQjSn7eHMPzFBZbv8SR",
  "key14": "5gANQWUAi6ayt7Wvesf6Bm7CqKUpTW2pGQ5yRmzAGr7JidUN4DW9pZ4zWUnUQGxnPSvdBaw9pNirtTrVorpLjrc1",
  "key15": "2A1crZ8v3EtMzz1qJgtThRqrHLVJwiJxK3xBrRg5J9s445jfXo3BKE9cLBBkzPMBp6Ps3sNvUpNpjC3SnAAEnk5V",
  "key16": "5njjwXDQuJfEsVvVBz9wtocxP94tRYUQxzZ7P7gLyne64FPff39rza1w4SsWkC4khoP5x6UfjWYHEipMwH4wJK5k",
  "key17": "3B9NkKRUBwVcRiYDioy8mxbEBu5m618HxCsYZwTMUyNfzHu8KpZCfnDRPRktqSHEMVjzboYvkqJu2Mnq4QTVCLYY",
  "key18": "4bUgjrQxezjm3uHZ3rP4kpfVVT7hWBojXLwhpTUTRWhZvkxshV5crT2uN1xMMybwzm12gu2zVF7SUrEEPjExViua",
  "key19": "2B3o2ToWHxsXV6eUnKNdUUP5VwZx24QNQ914jh21bWfPn5EvW51izchVo4dRTYPF2FbboQ4yRtDGJtGuqLcwZHXU",
  "key20": "3QimNYx75Mbj4jiRfW9utYec3VZDenb22j6ZEMrxhEdGDGMVBbMpVBQf79ioFNGGHEzU3Wj13meuYUY7PSYBXPmg",
  "key21": "4WobSn9zPJvAKM2ghKLewLaYurHRtThEkrzqT1skabxYzYcnvaoajYaVT5fKaxkBeoKcjwVyuAw7FTJNrYk31ox4",
  "key22": "5TsExNgEBFUx86oRX76qyizmuJ1Mb1x2aHzJ1Kjr3JMJKKEz3rXwS5zLVGpRNx2Y784sQ3hUM3GiB75AcPe8f7X9",
  "key23": "iWNct8PyL2pB128NEbGV1aZsFmDqZxqYeYYtXFEBqEQJqUaU2zRJMvu2rv4sZbQvYkJ87bS1Ez1tFXqrDkCcEaf",
  "key24": "3x3AKhWVYJVpoeemGowrYy5Hz18g2dTX2sN8WGNC3UUe7ypMdfgygE2iHYNhkBfohxaUwbN7mHfrTWtmSeXvwBh6",
  "key25": "3JfzQgTTH41VxrnhZMfQwJkPgrqjq2J79L6ySQ4tN23Zxkmm9PqsQYmA2B5fCTK2tGmokU7L5mGL7AL53Mw3a36t",
  "key26": "28RX6cdHB4qPFcTKd51HGWWdn1DHe5VZPVxEhZWF761B9aDVdK56TsxR2rznA7hDJw6PLmvdUpjdRoD9KZAkNZpu",
  "key27": "tb7ghnF19w6JNFedTCD2zEKkQjWohbaKmNCHcTQMrcReLChjhdxDXpm3rA4DfjuUjjke1M7XzABS6UWjwDdJLMx",
  "key28": "UUpjSXhdmePnq5KW6otRP3twNemQ1jnjPe284ugbEqTKFqiEYeY5KjewrUWytttrmGu9M6TomHxzJShK9ufsSk8",
  "key29": "4LztBdgMVZLrL8w7bjmjkZqZwRRjcgceCZTjzdV7yA3P5r2bCELnGRCr3qpUKEKahwNewx9yHM1X6hDLahkiWiW5",
  "key30": "5mFMrDf7UvnKRzrMAj4yAgWbJaozUe3qtR41JRB3BeHH8Rfo1BrWGeGPwDsBYq19tjMEUzsNpDAoFJBnzJS9Nvzq",
  "key31": "MgXqZiVQmbGTYghvmdRTXMEbvhzfXz49fayzyVTsovPA3ibtQczH1P4EmHuLhWY3Kmyq8HnfwGkTSYXnTZyAUFN",
  "key32": "2aHBFe6HGJzqn8RKFKYmpxQy72YxJJ6PXkEo6r3rNgo3ELuRRxidakY8YxM8915AE8bhhd3Z6ouaH12kdfvQNKQd",
  "key33": "36G7XBRV9CgaN6kX37HWKP9eZSYgXgD73hZERQQDLD2yPLbqHrdu6B2Ry7ehprkyxgLfKtvgiJRPEwWBQcmWKWU3",
  "key34": "5s2BxujHxsUZQBevTqW3BiB8PXgtw2mipuxa7iZ1xMMNhvK6JJxQZvpLuqtNZL2o3xYs7W6ZrtKifSfQBseFSBYM",
  "key35": "5K1rnERrfEfgzJV73GF1V4eJZmtQkUwa6MUBpYWfsVEm7DshsNCdYtHZkRv9sJTfXtwoXnvZXdxwJWHQ6kAwDzGY"
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
