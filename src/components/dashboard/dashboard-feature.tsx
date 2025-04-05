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
    "3WUFjB4EzWv1jkT41gCn8T33n3LGRVC8pHEhaidjcQQPBjx4Munr1q6Pa3LXyDwB84HAuxvMbrd7XQ5nHz8u6te8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rUdcPoyvhyVQXwAiz1P3mqTDYK5jHARwksvfHXFBYujHu2q5okkTPVSug1LhGNxcUYhqSLRZoZLKYpK9bspjML",
  "key1": "3nkFksx3P45eYorfDFGCiQ9ATD3e8Ewg7bARjmciMipAkpNMNFhvBYDKisPbb1UYimzC81kK5aULuAbFDUVbKzXy",
  "key2": "zqtztg7ermAmzbMECA45gM8gpKDUP5jCFxrRdR7SKzg3JjNCCchkzmJNUjcvHoqAnijuJUaMG8gjDLh9smiUmeJ",
  "key3": "4dSgD29kLR6qj4NEmVUgHj6K1iavDXe3VfVnVrZzswx6aw4qq67jP6kVTCcjRXihHfExkca4dxSv7dH1mPuzk3hg",
  "key4": "8bDhqHBXYapiJm3hYctZgtuWc2KBwzXmGvFD3sdwgHPRKPAxv9xhFvMNPy3DJAZptpyyt99AzRKWBC8cWuupgNV",
  "key5": "5dN8aKBo5ReJXNb5kaiaU5rCrP3okPNPrP6HiGvJsexe8BVHKrJGXd1SrLnjBqgUBJojHKYMAR3HT9H2DG55i5cB",
  "key6": "2hAzJmGc6VDNNjHWGuDVxc9tMsnrMpyb1T97456J7S9UidFbrDCJo2Q32iAiCwYuXGnATpajHpUX1NAF2mknx3aL",
  "key7": "4wZ5hUSCRHozbCdnK5KCpJoJYy7F6cKsKr1VLWnzc1zohvtQQkppJqBftoZCMjf4qcoHM8Gx2oZQafpHvCobX1a2",
  "key8": "Lgg2qYYceejoqiNYKrjufhrbAkNYi6S68xGrf9HuPKyP5YnQKXJjbwYFthXGTfYHRWGFhVW6XMisxoB3ZcNa3HA",
  "key9": "5jxp4w6aysQa8a6cBq9LYjoBJyBeQyt3iTcexkqbNbjXLLgGYidBHRQNRDYaMguH3721HZSLHBeh4UvD347wNL78",
  "key10": "259jLCsRTgE5RJAyCnxKguZkTp1MgrDgm5sqAJsDVfq94uUUsqpsG4D1CKxRsM2EaeJRMQPJBG8broqWxpxuX4eE",
  "key11": "67345qcNpf18ib1jmWTiVF9yy7KtekAAEsVLgfJfTjt9HZ8qfgyttgXZ9ydKgYCpTdwuAsUnLFBdeDGCvVWaok6j",
  "key12": "j1myUXmZ99VkgFRh8X68VK5jTY6bHMTE5SZfywe7WVQWeZFmApCZK6W5Kwk8353t3cSPBWhPYQPCCJoWvBX8dkk",
  "key13": "3Q8SmNsUz7nQASqi21uikixbKBzA5iDvmyida9x98iq3pNkjNxrjK1XGVpbhm9d38YTh1gTNrTdDjdGvAAW1Ndhn",
  "key14": "2aJooPf7Qwkyd5KAF25kocnVfx9wEgKva7jbtZ5U6pqMzbMmCrgmEe35zNZbkXuYYfcS6erq2wDk3M3PPq6ehvHq",
  "key15": "SjPo82MpLmQqVrL4Ceot8GffFTv8EHgLAJy8jJpcb6i4JbnST2TqhbpEnME1zP6WDocP9gcHdn9tStbfYTyCCSE",
  "key16": "3r4MrUWWPGweA1dkRxReEns9UTojNZ4oxTD1C3zXTm8x2XfM5P4rbWDGm9FjrJvEqbYDr7RZK6ERtDtSPTsYkEVu",
  "key17": "4TaSXqrKQPFLNg8BNUjqmytjVp63T8CtpkVUBsqeXxc5jthZsbbnZhaaxEv3Lx1Juy5eyMELtC86cR4b246cdUfW",
  "key18": "2P9fjr7K9UNvwZAHWT73mV6KnT1FdPQnFtS6Xbr27nbRg2kc4cwQysDE6xAJsi1uDUVtNgt2CvApDbjSPc3yaHF5",
  "key19": "93JbSx3xnkWqsofeSdP8i8QKzQiL3gSX3mcNwzmF1ibyb69PZBhGSnTD6E7z3shLej91YsCVFpBB7G6hXM7Km2e",
  "key20": "53g1EgsXQ9iL5nyqtYHaDx2U3KdZdqA2PbrxcbrFJZTLb4hDUsBTwgD7yA6uH1ACHVzE2kRqDfBNUyP4TUDU6Vpp",
  "key21": "2R7JP5Ewj6mJG1DcWYAYuU7Eb4QvHom1J6zepn798QzghKg3rykKSoLrSKYLHJXnzcYbZbF2QxPUmmvB1gPnKVmT",
  "key22": "21zxrZ8yCGRLj7xEraXYeJxVAaiwNNZm2BRgMYxSRvPyhvaYMUN7FXNa6g3cTtghZi7u64Ly3dzt18dYZTVApkPt",
  "key23": "2XirrgdxZaLBKBpvNgJWfBQf9Z1pbfRX6yPYsCTaJ1K6mACFrc87iB2bSeFF6MN5R2435y5FfNFgNr2q2PvqUfTs",
  "key24": "fVJy3v5qTqCdc5rDYWww29HU3dxaEB27UidrpSDxJqom2zXZYE93qSgdqqhiQ8Mh5ddgikXVurK7MUgaFpZXH7b",
  "key25": "Q1qyzELG6f1fZY7q4T2SnnKyQtK3spz1uSzVnTMdHbtUDGe9J675ZTQ52TkZTWFqBTdRxGcgLYc6AaEvjeuDPVz",
  "key26": "U4nruBi8xP5SPhP76TgReArF4ooNEwvdqKBQ7z7j8j8ZBdTUFNrSzm4gKYVFmKzChmjv7GcFqcb6Wbb11Cveffr",
  "key27": "5TbtQg1DgrzBbnQppyws1CYbiMsxnbkXWyspKe6S7bmF2dS3mUz3NwyUweYVQTUj2J6VYebfk9vy11YrKkap74sv",
  "key28": "3LbjfyupmeUH7ErWeqZCJM7J9KhgXtAGC9sQbVYeKVR3Q9V3Qgd1AQzK2z7NA2jyBvScKZAHAwpUNN45VcuCiP7E",
  "key29": "YWG4PdETZ3iWhGdSTDAn73Qz1cj89RXS2bJzBUDEKDdWmtyLGPn1LPshxW8Rtwjad6b2RtXr9mpGJg8fJVGdmPV",
  "key30": "38S9o6Wi4JmRFg182hRiu4KS1odgEHSs4aY2f2xwGBAYnrGVwGjfjmBZxgk7K7S6rPVEeqA6ZabU1bALmbYYaE5e",
  "key31": "5LQZxg39nRaBuvBbhJyaPAEDhmHJDJ6oW7NsFcJ9sAkCXP7bKEgJdU9QFPre3aM8eRh8ZD6a1LYTaufvTmjSEoQV",
  "key32": "5o1LiJk6nDN5auYj8vP5cpPntibJruTWQmCNB5S2zoiaDfHSFoUEwYdFo7ikuf6SgpyqfvgCZReC88YTL4bEdycq",
  "key33": "25vVj35NDufoiwbNavSZ7kwFJcRKqAnQfh9y7in4DBJnvcKiWpjryK5NSoPGDQyQJBLLF9qiw9PXeJQcSjqkj692",
  "key34": "5qmuSMWLYtZivRt2LpnWKem5GAzDB9UjpE4zeeEkgjQZdPgp2hhoarM6UiSjzuZtn86ybDyioJJEH25x2TLcQpAG",
  "key35": "51fLBKY7anAVCFj9HXGW1kwF8qfc5FDE8KstRo3XAcA3GMPGjYK5kaSBU15ufqocMeH2KQZjT37QNwUM35vk24Xg",
  "key36": "36PrsMcMxfyZCv3FsDYViZNX4XL9Xy6dhmCHRrhZqGNtMLumtMXxWzYmDkAZxeXCZWHZ9QgKFK8bf2SjXCYaytyc",
  "key37": "FPzjADtH3UzPNBJGa7TqTbW9U2YGAtBCLjSB81sVmbZJ13affStJ2fUeNy4cWLJsjg36wZ8oLuw3LDrb2arR7yc",
  "key38": "SWgHz9DoPCciggnmSUWpJKMQnjgc8KAvbBXyQq3VCLBnd85981SdpnDTU85TDbMRsstqkW4fmFFUGDcAmgy9kdR",
  "key39": "2dJJ6mV5RC7MBXwqJZ6qGEiHHMMfK9eW2qPAYtL8uq6JfQHp6N6yBTLJCBPbmSuFAs3P6eeJS3nfKQbsiCvXLYUE",
  "key40": "4amwfKymD2LZKV3xNncnpoM5mskN29NKJYXYyMuG6H88a3P8WAtNaogzEW9GXa7tMUYA38zHJtzH7zEYqoVjFRpr",
  "key41": "k6wMjMgkDJw1obzFh7p5SstAb8ZWfXpsDjMnwvUc9yGmt4jYwxsR71Nvmy55uZCL7f96YhjFPhEGd6mBvqvvuT2",
  "key42": "2DxFweTXTBeCdcvbUpKKezfLCizTxNpW4u1DEfe7Dqh9emhTXrhkMwQnTsM5oNkucariEK2z8AKi3fjBBP1NNysb",
  "key43": "5YFNohfLq2eqMKfTnjXrB14q3zZh5ZQxRZdD13vdPCeNzp42CF1xm1V8MBCE5CK6LK5QZ9Dro3f6LB7pGLKXj7PX",
  "key44": "5rmC7q4oadeNHzGu21HK9V4GHGSk14w1GK3HPcBbcAW4Uxm37rZBLpEjZxxea2hrn3APnQZGqdEYvdBxS2hf7JZP",
  "key45": "5y319dECYEnxs51KxvRVyXCJ22dDwWmNWeVcYw7dLbyir8kzB4CrVvU1k8qrSXoBFKPKAScDjeSRCRfKTdJRfV9t",
  "key46": "39wPSH5nEtC4k1EMG935FJLh9s7tY6EXv4nezcFGBSpLQv1yn7P7RdbVy2mWKWFz6eKAmKoGBLEG5PBXiJBD5zUE",
  "key47": "2oXm4iXAqmXPR3NsZgFsiKoyGyYXWFe4MpWB8cf6pwUux3nmS9yR31BeCY3JEbLGTAHLuvujPzgC7YC8agQauSJZ",
  "key48": "ebbsVJhuKDDq7AuucgP8oqzRAEDZzeK7vv44TFJkcnuUgyMrZbkyFYWBGAs2NEZMMiYKwXed2gTz4PtdJtBCrks",
  "key49": "4tdiUX2u6Vvv6kZVTbqGF9uLEjU15euQgYKZSYCWMz5NvQT1L5eKpTkfXJi55VzJAw272NijvFYbX3gVi2PvfJQS"
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
