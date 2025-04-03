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
    "3hMwUYM6jMWzJ7zpHqnTWHt76EbarvWDfru2PQALGhXowyZj5JsyzDBMChyq2CUxXRWP6qHxYyxWuytcfRy4HiWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZjjWb3voAWLTyxDNZK4PhjTndaFP2TvjJc6MpPs7LnWyWPQ2U1Q1hkorBQCvgBTyTJf2GK4gZJZHHSkgya4njz",
  "key1": "42HHXaaucn3Pn9ekBjg4sZoQ9ptaEFugmYJJjnGKHAbskYirDnShiR8EoMYFbMuJ9AXKhnVGmnoxgE4rxKxfrjm2",
  "key2": "9NNizwcPDvMWLHBZt3TQMwuLE1YUr6uZHdUsy42yRz5QRohwPFUG4jSLdgdHZCMosBKWPmKCrGqtyQ4TpPiy4iE",
  "key3": "3nkhs8HLZTw8JkPYJ1gDNKq8HFPXtWSTWt9TFwmj9ZPemSeGgMuq5cGnSH2qNEmHMzEkbioBm3Ymb2SNXfePRwJb",
  "key4": "2EBrbEqa84ZxSMj664qANPcjrDEEUcNcqHnDjaRUcu8yHAVKkvPCus7wX6esWK2i49SWuZ3DmQgzWYsUTJhasXKW",
  "key5": "4qCBGpeEeNdX72F8yhqJ2Z5BGtpjFzZT1aRsSCNnApRsPxj27yGodVTVzzCfRz9tP61yQWQu7yifzKw2MLhCtnPj",
  "key6": "mgTVF2t9JCggg2r3q97rFDCR3JVUqhrfLjZeMELdDJk5yEJ4ZosFrttRqJqm7kEzfjUFX3yHTpk88hNZgwxTaUp",
  "key7": "3gWuwRDHJTfePmQ9SWwrHyGhKysSLMumxbqFCgi5afhddMKHPUBf1cqDnbuvg7DNaZmV3z8hLibPJbiQrDdrJ7zt",
  "key8": "4o9xG7bFEW9mv5sompkzqyGDWHVtp5fVSf1oYNZRf2cvWWjFZLUabNtGWHLrQJMMKDRCC7TzaSmFTUZSS5aJ9mJ9",
  "key9": "YThpvVX1AG6runEoGRwgS162JahPhAWJARXo2UWVWsCu2uiAMZWLUazEUvBw6Hph4ikQTmBXMGFexrJRcpUc2VS",
  "key10": "2xY5w4VgdUwh3kaWnHGp2PQ6jhtnScBMkUmPZgG3LGQGgcBdufRhY5a1UAQE9zCSMZeiczAx5aNLFrHmtiERC6t4",
  "key11": "3uEd6SKBUHduTnUNNayvY2Gv6zGAmkm6GqkaDpdxZrQHJ5Uo9cmb8EwhtR1zzzR2AatYTjYSoVHJVXP9Z5bPXMWH",
  "key12": "4uTqdykSZLhzwr4q1QgtdqsYHcxkUGYN3UfBps184q8bpNxCU4Gz76v8XtKh4eskk3c4ymKhg3yVXcHF7oDATmLz",
  "key13": "3YyoQL8FVXAAhzuSiUZsjKBxmCgRS5UU3bCxmrRJ716bN4k8mAe1n134Ehz57CVtEwLiZ4i7royxrYK3nDKagiLU",
  "key14": "328ksBbNj189wGvbsrJSvLtY2uH5r95xJP7FiAWoacUL1Aqc15ZSYVAMay4LU8DoNDxjy34ZPjSVWewBWdjkmCV4",
  "key15": "62Wh4h1fWyAuNgd7Yije1SCdrmhMyS7gC3Rz5AscjmNkKQhgxcXjBZjKTQL6pnhnUJJ3NRMnsPjbNFSL1qjCDyab",
  "key16": "467GTVrgKuv9QwCbyaKxaSzXcxEYfKSk9ikFisGN2CRn31WyJiLYi9Aeyi5zGqggq9wdFd82HVy5TYGhjopdc7Vt",
  "key17": "kH8GkyTwFU5fVY4rsRkQvAxiKWWgCpUnAxrZWQMckudbPndwaLzGaZSWvCL8pX2HXbbX8pTsBBXQQQnTKRhYGo6",
  "key18": "XRAXET2JkxbZpQizyzUN2kMhfW323ZuzxstnDToymmhuuaKjfuJFjzmCxAqCEfnR4eeCUuDXybs7qRbjo1GKJsL",
  "key19": "2GE5fbuCBtj9L1aXEa9aotn7LUV1Zgn24WQ5oFyZEoXnoistEHAYqPwgY83jjVcpUjijMvTPiUvvVhCkAPbFXc9L",
  "key20": "2nfiyCaJyPh9aJppFskzUqHevYnzo5t4wtvLZADaWwzo8tsZRB54D4LSkfUryNppeXdczqSzBb7EpuvzTX9DQZeU",
  "key21": "3C3q8bRTXTKzJGSfpwbvr5jhNb6DFTJPSYnAHwbwzEQtvqrrczkA3fiV3KNtXDPngTcssvRCEGneJ8Q6RBpAJZLH",
  "key22": "5RrpeNPagyse6Wiifcyc65CmhSncBineeRMP2hoAyYPJhSy9m4cW8tLfxqgPXiFC7NDrZ1K2JQKC9HYVoX3rdqbo",
  "key23": "y1uT39waxJfesdvQNWyWzBz9EzdoW5s5BWuf8eiBz9PSkPvQRwNDQfqupG7VHxUiT5nMa35LNtdTj1vANCLzxre",
  "key24": "2a39UVM2XkVkTir3ADLnEZeVPrAr4eGfajAdqj4vc7V4MvjQ5TScb6AMA3UZ6PNKNYyzvhveoBY6SfeEjyifk7Ra",
  "key25": "35LcwtZmQRU58vzENCPbJ3gGFm1AYHzPPfWt4LpyGtFkiS5N7J2bHwt7qUr7RmxKUCB7jQo9UbXKzkbthuwP2YKw",
  "key26": "E9KyUbvndyutkxQZyreQZ59LYvRVqgSSSeiBS31kBvfyJLt5didA3ePwA35Cy1AubJfxcsaxnkp774QyMdX1wYD",
  "key27": "2VJxytZjt21o2ChEsDnCaJ9eRa7hsWHjqyJa3u1Wm3b6T34bL6vw1Kg3W24pNJnXpozwTzMpQmgpY2xrZkkSA2ug",
  "key28": "4W6p9RuPnhKHmVUQKhWZD6RKLJjW4F5USKXr88VdTg4RED7Uwx1qcnfhwwHmiTb1Zq26ZxQXvKkABnJP3gCWzgTc",
  "key29": "2GsgDHAfb4jkz1XpVPhJVjKr32qGskFVU5hw7iLMpSSYBD4dnVaAity2ZY2M6Spz3nqpFB8HtBKXKYWMmeHVK83q",
  "key30": "cP5ptdMRuNQxRAXVSyZ1a9rY1RKXnA61bVtaSek2GqUweCLmTi4n95JMyiVg7Qch3UbY8s4bdFpTiZH7ZABz1Rw",
  "key31": "kPXrb3o6faao8vPiDh9R5J3rypMaUfgXCivHDhicXwZXfG3tjXERYYffh1JqjSW7Y9LvKZe9tG5dqjYc4gRZiUm",
  "key32": "2ek23FJc1N132qw7sJtR2fbiSGqNt3kLAaPB17oPLExxFrfDjmgNvGGCWii8x1LBGeTmW8nDDbqg5nJrJLou8cz9",
  "key33": "4mNXcQpnRC7xppPXFrZB7Qd6XLjyp1R6zX15k9st8MZWihFTxD3AFgjdf7FDJJtZBCBrw1eaGyKfVmoMqJx6k5zn",
  "key34": "2mkteaNuraoZVSTZpaVFyDKkqp1gtZfjqp1DMptiWKzffmjtM8ceoWoaAXTVbifFfbH9hh9r22joDRnwZTRyoh5U",
  "key35": "ZdWZ5eoNmrmtBreyNCBd8x8gCZcqQawe6TNFy4yoeWwPmFnFXHkZdqni4VqwqYYqykd9WPsQ4MfHiv9xRo3s7Nr",
  "key36": "Gb71CxYV1HYch3SAZVeynvVBYMTRp5CikUyS4Fpvs9PBT8KcQgRmicBT3zLLHFnjWFvgT7jkrQgQzLum7MiVLST",
  "key37": "xqrG2TFT65Pmf4mKHhQ2T6fREBntobyN8hKKJHi6gNSPc1g9eWg6ygUXREDiKE7WKKNtJqCqbs564ogYw61r8Xn",
  "key38": "3X35fAPPjfnFXwyBadQ8ENxb1SaaxVTVFqUk368TtpwCow4teyiEqbAaDC638aiivJQvF1cGjApwQAsDxiV13pGZ",
  "key39": "5YrsDbrXNG5xXDGTr2S1n8hA6WNBtsojQ9sackaR4wD3VJxwALXrmYZjkEdUw58W6qVfKmhvyeVukELWVv6H4vh7",
  "key40": "46U5TDbbFbZRffLK8QPQCoAssMebA325uRfaEGmWjB4LBkbGZtRwdqj3fFovfuAJ6mDApRcFBEvVmx6acztKLJ4y",
  "key41": "3W3dYunXZo1ggZxh8hALpvSsAYPGmjJ7pnuBZH3co4AsEdnZ7yJBGokuQjtBQgM1fNVpnX9qYgN8jjKk8vp4FTJo",
  "key42": "2gDB97m8dxFKfH6t7DhbPhztBhsudZpQD3BjNexgVnsnp7wrUvE7oZ56ijCuMxABRotW9gbcskvFana27soLeYnS",
  "key43": "4wcMenPnRmjVvBB6JszAZmBJoEQAo1JQbRAAfzSnu3rQBLdyGF3SGJjbxdRS2zGU34CrpPsv6m27BkWLW6EBtvua",
  "key44": "2nG5AnEj1ozUMeJmCUWpQtyvCi3h5YJ3aqEidaY6nbvH6T5MkHWm9oXxxgNHABKZbK7vU9V1KVXjCtnNRYJ7V7AL",
  "key45": "5AY7DndWtJ8YUbPQngJFA7JP9fdXZ83z8uHeWPjqJHBhQpxFBB6xjBArh9kAWF3VpsTeoKkEUevrrMnQMXHgqtgM",
  "key46": "4f1qXzH3PEHcGWGBgQ9z5ng9YR2RCsYgUQFhqHi57WpqKQ2CJXPX992nnhBXr4YZz7via3hvpLuA1AND58yCASWn",
  "key47": "53BHFuR9gRwyw7eydW7EjNnhhSm8rpT6PZhQSsRmA7eJZYCa9JXaxTEHzuiuW4PLJqmfhzVynNQSAmTjjx3kDkHp"
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
