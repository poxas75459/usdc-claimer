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
    "37CnZFRf41x8vTEMeVkyL1SCt6xiX5xXtjTGH1xJRWZrgD7EiJoEmwR2ALHatzmL7JPbjWR6uxXiwuwvvaPvkFFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTf7aCdHxgydSahe58Ds3Tkz4FNCk4jhtjiwnYZeFHfNrgF65XMoPGKwN3p5zRkeQfxzXCLci38JG1ruKDytdUu",
  "key1": "5FhNT6ZNHgZGW3LFi9kwMcHv3CU63dFXnzPVHK9oRT5haUHthfBGWu8UWeLefBkeT7oMqG7mQzaX3MXrKBEmuGbv",
  "key2": "2QR9LDt3SartN4F1H6SNwrqz2aZ9rHh9sg3VNjXGbM33nyx8X8qPk2gS62MYiAi2DpkcACoYxo4q9Fzafifdsm22",
  "key3": "56SE4kDMqQqZz97xLUvuW1CHHkPVZrnzELnNQ2RJ7ipYrM1cQeL4eyvmTT6MTUhQFSyiEes22ps3oDXfWLKh2hup",
  "key4": "3LbihWQk8ADbXwXbTSUBUtD3F4bgRMJPnz12VU6Qke8hbW8dnq5m8nCANHpYCh1Dcjrf5fhpSL9eexrHbzdhGXc4",
  "key5": "DH4VfR3fwoV8M2v5K9N7uwVNSLz8kTY43K5CynS33yxnQh79tepz6dnFQQ455CoofLcNuqgCToGCnErSYrWo7sh",
  "key6": "4jf6QZ2FPHyPRg4LkMzm8UZ1WVhWbmMrBaFatHHKmbZKMA2XAQY8wVx6iZaYTHBsn8zKRNi9veTrGDeJ41Ts9i59",
  "key7": "KkYs4Fwd126zkY4Sq8dKZva9fUGuRPinqGQUAAUA1oXmGhyv7R1vd6swogU2Fb7fpnrdKZzginJXb7UfyDiua3o",
  "key8": "3WickgE3BEPp38eBAWm635oJBQvievr5F8meuJvVD3Vu4qFhsqcGYRe6U57kQhPqL5k7XMJicmeBc7mpPAVpo4nd",
  "key9": "3EqzPYhvXC7KdHLsBJ38Gy7qHxgMCf7ZeVR3j1W4DvHHpFKzHr7QVngLq2FgZgSzsbn3j5xSmTUNpkWp4GVkKALz",
  "key10": "3J2ZxNVYHuZBL2gAwnt6xx1irxJrQsifrGZ7MbFryET5BhV1W9ih3aWBeWxWGJ5GKEkSgW62NFt9gbZV21TnyAVt",
  "key11": "3GhFurMsTjSn3E1ro2U4YFP2eiMit7TmJn8et6CCmzkQffa59CN22xjREZ5gGSGgi8aTexWvSb5f6eJNRoSUuMNu",
  "key12": "5Wj4m92Z4ydM5WFVhB8do8RRTSzJU78YkiMxUnEWwJQJKcsZxuryJf8pkU2zTjqNX1WG3YkaLKUyBzvNQKWbVzBU",
  "key13": "4y4SXjZ76Yriukf6SwhEoBGwx1hGpZgci4DR8DyKnoCYTDEftgCqLdUTnFK7cXDQcs28cUwo8Wd6wKzz6CcnRtv7",
  "key14": "4yQthS1fCcTod34zV8xCoGvxPicKNcWrrGVci5W2Yscs6dV3Hmxm35JyCQrToc9ykbm4G7kuNXfkLwxKZ31SmbLZ",
  "key15": "5pVu6Y3N2DfQRnra7c5MN31LHW3sWJ9yPMv9ujxMBZNNmhrXXoyirayHpCY4kDt6tYdAPRmZLVyBTG1fmUAtnXQ9",
  "key16": "3F5S4794VkUoUqPxXUzBmRY7eRHLGg5fPDAiunQsg186PcBkmbDfBR9FWeZeYccUxk76aXRLENBuZ5VQzZGaNYDu",
  "key17": "jM2syQ4QWcWCpnP2rWmZHW7WBQmVDRVXqc8QnEq3r59hX63BgtS7m62jEyPDbTXpNAqFsDM2zp3VmoBfA6d1atH",
  "key18": "2BHKxZWLiqS1s5BT1dNQm6UbybPdfWdnqa2UpzwR9CB4TWQAGxS2YfmAAvRbMNrh3BBBocDsWMTyNrvGM7tyojBm",
  "key19": "iXeiYtrXCw8W8tecYZXAF7CaiZibGShTYzP6iCV57UFayj6tGcbM1RiJhZkDvatMZS42SK2gcD1dqXS29SsEFpS",
  "key20": "4d4HT9WNVvYwQ7FsZnVrESLo4QNnNEKPobYry1VtMLgmgrVmH1TcwFJTzi64ZuhFvmP2Ss6vMtDUZtkGE3BGNEV",
  "key21": "3x9wWi3sKcqQe4U6MbNp5NBq3aAa54iQiSThB2AjsMM213ABFpyyvT8Lj6ineV62vE9ohT5S4CzQ8rLe9TojFP9y",
  "key22": "4P4KuneXLETJn1BwgxUYVj2ni7JDhruVNhmK9HcJYnc1fs5So1p4p9Cyk8Vzjkob7BLzPBw9WhYqjnz5x68US93a",
  "key23": "5uE2v7P8aLdNavAPS7y5AFgPVt7czrdSaHX1LHRHHjN9qv2VGXdpktwhzSLyjzZsCsCSRCHaYeupcoLHYHLCh49E",
  "key24": "5j9nHgbPPjxoJFtCyRVTtnPQbDXQSXxG9ZCmuE4Gt6Bb2oNrHvndDTkJUkD5ZaBshdRMtCWxgcVVcTtra8VKRvyW",
  "key25": "2c55wch4Qij36Vh1zqZeoZvQZj2BuYJHhjfpCcHyyptshcnu1dU7jYGZ6KPS7cEA99zCTpEyp7FvtvW9826dWATk",
  "key26": "4DP9abBQCijianaWKXX8cQoxxupnyQS2xYVyEyi3wAdbfC6Uwj5Whc8BjBdMMdhUWyoSCieGyMGam6BrK6Xsh91Q",
  "key27": "3oCdgGPjeqf3nDCCqBZNYX1fzM9QzJkdiWSMycFiNAh2EkfhV3GgcRH6HWjnWcfQihUu8cQvtFbWHCjityEhxvGP",
  "key28": "65QtVFCK9ZmzbQGCXH2gYR3UVbYoHxPxSKus7hPktPDSoy9Qoai9XFuT8w4q3A5TVeh7pTxEWxrZNs9t7bDuweze",
  "key29": "585i4ibys4kWyAxBQ2kUcvixAXXxamdz5a9ZV7zF9PHbYqj6hLTSjBYfA4BqiJ326mU3gAMWQuBCpvBvehQq1EJ",
  "key30": "3QtxCxjJLmVfbDvYZNeySrjrHB8nHRd4pGEdiR9eUKHeJkKQX8xEKKpVwRqJ8TQJpSK95MZJzkceoGNTBSHzUBLr",
  "key31": "3DHHcoC5fR5NfhV1ibsNEW1xQyBpQVFokBvhbknBxJLyQTiKYsnFWf5HEZx637CKaFeXgjus7J4KQsMphpHPmVJU",
  "key32": "4X6r9WRSADVay56w9LG7BuooQ1o89FZsjhqyqJonYAEfGZoutyDv94CYXzte4LkA3Fj5zodtWoaZzNPesTQqpiSw",
  "key33": "36mS1us8WyAPptfJiYgkAXWroCrNey8xJBdniZc49p7RRXRQbCQgqWh3QWYRgeKYmzyYgWhcxCTaHJK1D5XfKqGb",
  "key34": "5rPfpZ6A14DJQ5esqmaeiwcEEDLbhgdiXXZeWwiTgUxpD5MP2DYWnXyMvwGSGyuvss7K47qKXnq5eUn5bn7M8gTn",
  "key35": "292AgaUR8LiSkQafhpFJdTXDQJKiQECALLuFcfszdVvZq1Sojtt8VfiQgygrcWBqAJDJkXzN7bDgq853tdJXzcYP",
  "key36": "54rHLek7aF2ShcsCAtYRTukpEKCX9tuVijT9Nj1AMo8NbXduRR4fCmr8kMj9BVCXPP1UcdD3WaBdqYpPPcz8n6ic",
  "key37": "3AW8ZRyw6sAKpGVeRUSi3qYumH8ooqyPEGvE84k7BAWL2DNVRjCbZPePqduoiZv1z4jhL15WEErJ6CVy4d67spq7",
  "key38": "2uZKewzoH9LbnChrEWjpbxUL1Z8x1DgvoiGhNkTMU2endWAPH8ZdFnJkqeHG7AHLBJKLZsZS5QmxevEHNpdAVgr2",
  "key39": "3yajP8LXEqistB1MjEGFLfmHYnP5PxVoELcpfwemedfBe5JzFDnEZ15DWoAuZaeWfNxKJpsnrXGwBfqa1Kra5oZe",
  "key40": "5JqJzjpd5NxQ285rimnXAbbWEdQDXFWVfkdenuwMaMdoiErnWWQ5aex8kegMjJwKgTcBMLK3WS4RdPAm8k3uyLK2",
  "key41": "4M8RHjpKrXq3Lo1pWzmZ8t5tiQ6dcmeBApwEzqLFgwdQcuPbmmbmbiHo5rVCxhKpV6y1ego9XJrwT8PPfgf3hCuB",
  "key42": "3MZvgMjd6krkXVnLJjnKvBLNVTRDbwyXxA1TX7CNrfV3GcctiZHA742gc1VpUobajEBuW2Z8djxywAYRwEzfK3Vq",
  "key43": "292Q4uuw5t1DvAme4mtWp7A4ahbxNtkgW9jKY3MF8R97XEgWBJaJnFpPJ8eEaLEMn9hP5bc8i1bMXEzWGwUEdmZr",
  "key44": "4vYuGKAGuAqUE4aiQfW5aJ4PHmCuU79woXtZ8eu4NXksFZWyJoijWNz3LPz1rNo5cG8hZZFiatWedAPaqnCX3Gr5",
  "key45": "2AQTbKEGLqoHoWYy44926RVrVTYLkuhXfgmTU7iipgpybAZZqScXJN32Ku4fjYo77W4nir3M6NkHjMS5S3ahhh4g",
  "key46": "4TGefLx3uFAgUK3qCEbPsvW59Q5JPZUodKSiDtsnuSuy7Ur9Yz9AU8tBeTC13Q7xDNByjF4xGWD9AaKYszyRhQt6",
  "key47": "p8F9Gif5Zkp97nd2JWggCoW4ocSa8Ndtou5EBLHy6EcsMEihJRdgrhiNcWRRqrQ7n8puAvhXfKBCvjSeRZThHby",
  "key48": "CwapEqhe5LiQPPRzatHqPhoGf61Ue8cJZZEJYMHaUQ1HB7XPJdCvSegSobpVX6M6MX4e7iTw9RZUqYwcomeDfmw"
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
