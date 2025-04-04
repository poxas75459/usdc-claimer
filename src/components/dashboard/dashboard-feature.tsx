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
    "5oiVCRPZyMMzHUR1oiaUYkn27QAefxiUCwLh4K1UodDhNP4ZVRd49f614rNCL96azga2EEDiq8se8hKr3P5R22u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMomHVx4odoPUdJhgnyuyprkVJtBoKb5uGgfgfkMMT6s5Cr8FpQ8GWWeaj6D1VdBFrXtnugbDELWUNHTBHt28N4",
  "key1": "52YNe4T7oVSwQjkw1H7a8opnctpU9koFsBZByffPCPdKi8VSZXoyjADqPxCGjbp84dmkFpoFGvcrUkwkaiXg8Hpt",
  "key2": "384Xw4vfSBG3MET7qEesKUTEephznrHg6XCrytaXhEgBUQpz7CF5SR1BTssXTNMfLkAcorSi4so5HEYThbMYDHy9",
  "key3": "3BDcGMT5WqZLnxopCpjo5rkaSGWXcbuN5WH3GhVnqFcNe5WXhmRTQFHa18zEfFrx5oPUQoBeQRKpu9mdNQ3HVYDh",
  "key4": "3wumCzPymJ7vjKh6aApg9nturMvAAZr6TXgrbabwjibRbLkjgECqe8uNdcwFpzgAM3jrcsdnLV9AWPanUxFyaFuv",
  "key5": "4x2TUyKqLSi3qFq9i7aXqzsNzouFzduY3jJoy8Ftyi8Bv81jiQbW2ypXx9jS4nMsMqfNDBqaUU4HQ8CZbnakLpxE",
  "key6": "2u38JFUJArk7eWgLS99eM2NB2JVwUuBxRVbsHq9Nohzf6TAcqH6ybWvPgKgm3xnrRCJAp5bAKRQ6fYrcHVnQoRLo",
  "key7": "56z4B3ne2V8qTS9UqSqq2TCF6T7DaNeCwPSX6DikXfbCX7RexxiHe7EFtBXXkArLLbeem4gfinndiGrPB2DoNgNU",
  "key8": "2fphJ8jtkoaLMQhnu3a1utAS2YTvJJEPFiz9VUDBFccMMGQSNTCi6PwXqzVpYirJ1i7iZ6pDxxjXzxYdKK2PEDaM",
  "key9": "fQFbJJZKYjnkabvj736obDowhw2Rw9H9eUuhBSXLQFHdfnoEpeerWMLYAnkCutXYkuARkFSpcbcqsYLbimGdx8k",
  "key10": "3TyAVN3hf64dUR2sUvUgphgxKuN89NZ9XKWZgXwTTNEog8s2dGiBQenZbPhR3F2i2DTkiMuS1tyu2TG8DBP8n4BP",
  "key11": "3zR5XRAbcz6JHTvgcQ6xPX7iKV45zo3uaAUwPVURa5uMvFMpFFPEEdVQ8WZEagwaAjf2Lwiq2Z5RfbzwXUBV3QSN",
  "key12": "2wGPqHXCTQr1cGWkyV8wD8PbUt4E4ZK7497wjH7GhLPmqwazu8m3x8ba6GLXzpYjdMhcXPx3KFGoYwjje6SaN5Vj",
  "key13": "4ez7YRTbpTapELVMkqEAyM517q7Z4byTvAh9YGuRXcxabDFsyyxBtZfYCYuADPfzMARDVp6RtrnZ8oEENdKXbxma",
  "key14": "54i1rWAugkmnVzhcBd7Aen5k2CQsmH4YtV4q2TqWur8JAPLzav3ih3RU3YjPhzG6L1eCpLR43YiQGWhb3GBPHJz5",
  "key15": "LbDbYpserfGTRCY4obvRoU96c3ccPBHJDMdyoCqFkYwYsA8hkP8HtwdTWP6ZqFaGQErdCaHLPWHyL8eYEDgixpN",
  "key16": "U92BQPda2uzVTUCe89venL3wqk7jj7xRpRvypJWoZL9JoMWP2iNVpNFvByA62P7jr7iKdiuCiz4WrtZrgi2nygQ",
  "key17": "5TfXiw6JahyorjWj51XzhGKuxn23cD1MaYT64GD1cML6shnvxJDKiDuoszwb4X3Zucr5r575FKfE1oRw282PVjGX",
  "key18": "3k1vzFNFREBLwKSJzEYMRQ6EKVRtPnGp155FwZct6wn4AZASqJCFfiNKGGukAN1xFiDnFjZUp7wW5Fm965WXwq5q",
  "key19": "2Fh6xfx4Rd1JSy1tFUBuqkS6LoAVpwwGcixDedxHkK93cUcTBn8pfRKqTKr9rrVQYuiAsNZRJKwubZqkd51szRBs",
  "key20": "5egjPFQeUof1jhPCwcLe9WNwNBLE9atK4HUcL9VhP4yC53xU2yv6x3C6Mj9Le4KXxJy8W85A8swPpsueejd6uCAL",
  "key21": "4kLRp5ZgYtaQGVtchoCbH2a1fXKpK7AMndHVVRGoXy7N8KWbAX1PjrRjyvMFeEWm5uNp8cSUAKRgtXwQtXxBTR7S",
  "key22": "3pMndkT7kYzDfqzd6kYxQg4CGQS2nRALCBtuxJt57m1KUz9ZkNBFGSSkGDZ2mi3DXrpeTrfWJ5coXR51YZuajWR5",
  "key23": "2LrrebcU8Xan3D3hiH8GVs7MSBgu9xWUqLTg6gz9DPmttZS4k2ogU6NXgJxVbNKX1vm625wf5iXhz8auyQs1C6eT",
  "key24": "4MkjY12PhUxBNtLUoEyQSKB6dMRi7Mrdueb9f8DKaoHX8ES7fL3mdxMtV7ZuRVB63bWUX5M8x4tF6iR2ZkpVhkzG",
  "key25": "gAq9FmRcKzyiBwtHkv5RttfreJqXx7p8so9PsfQksUtCXDSRZdPRNPfssfSJCViTqwTNAGovDEd9Xvk2rS51D4r",
  "key26": "LJEa58U2h9VB9fZC8L8NhcU8TAt1zSj1kQi9z1P7rfLc2VMnCM2REtp1pxLWjMSenpigX9EVE3HPGMLanBxvtjU",
  "key27": "2N8H5UiQUZnWvfHoCdBvbQE9oEWuDwxWG6Ppb4weGy15g6HU8vpNd7P441wHgUrUX4NufqAgVocPBg6cdft4dU7C",
  "key28": "TrBSCAqLG4hPv8aq1fsMNBeM9An96coBeQyhbqgdLvM8DmDjKh58LpxKp94EtbgDv49AoF9t89vTs7ens7on2XN",
  "key29": "4U5iicXQtTYgaXjP9hvpdXHvqQsFCoFSmvnvGaRyRFaS4kWZVuTtgjZL53dPMuMj7RM4awcTZc5HUBuXfdJupqVT",
  "key30": "XXeG7CFbCy4b4duGvivX6q1tXTJCfNKr8PgWkmcHBShxs5Y3EtA7jMBwB15Aqws9gzVrWZDs69xDfZ9B3BWw6b6",
  "key31": "3gzmwgGXC8N2LmRRZAzb8nEALbrSTfyKgoDfcdC4qcy8oufd3xxMY4XTbkD7ch5yUXYyKGpgJA2vzbFMWskNoyGJ",
  "key32": "3dvend6WU1bhHX3Eetdm6ryfPZ7q49JaqYKpqMYmgimf6ZasYk4LSxxA2HndCkwaaYFAA9QJ7E72Uu6gfdTD1wH8",
  "key33": "4ejz8oi6rQacF4w81XdyH9KrcZoJiSxvXmmeqep6zq51biyMuJDXuR4PGhQ4hMPaPR1xTf2ooyUsSugKqAufRkTh",
  "key34": "23LxY7ynTdfJHcqs16rAKHY92NAgieQcgUqhcrs17f2iDMTmFMrcqm2TcVe6ZxS7wNTXcccFxRyJ6RdpAd3iyUTB",
  "key35": "3Nqh7Wukz8xw2c9RKjT7fmcbUwqRMPKH7hEMJFmNRKHcU6zCpieXQEQw8Xp6vkBawBozSViism8z6NBTDc5S6Uwq",
  "key36": "5X79y98TeMPdyV2jTJzbERxctrBdqFPTpsS6nKmEEJxtpTzs1nV6zCJYTLRFEg3aT4C7y7aTbaDD2eZtPT8k7Du3",
  "key37": "3yqNeLCe5Cgb1hfc7AD9HEHj1E3Ud7kfNpvX6zZW8CbmdMwzaTnybZNschuk7Yb7EcGUYcaazAEeayqbaJkbicms",
  "key38": "ccDujrybjX95K9pp9ZrCCA5KNt65UYkEWWA4Gu5sxWE3AhmHWWxNHw1iW2HGNvo9K5qCjUjbuoJ6FmCStUtkCNL",
  "key39": "9cQnfd29fN5zFP4MS8sJLib4s9HH6PYk5HWmaE2oEfXMjccjZ9uYDUVaKT6R3d8RCTpx6YnEN3JRyMRoPtNJEFx",
  "key40": "ce3Qg9jU9Uzb7fAfPnH4vaz9a6wr6Rep2eJH6eVQpxkUAazGAEBEBtHnmmNmHd2Vgo1d5UNVkZA6dmfChNB887y",
  "key41": "U3zHq4giFzryfXUFPEbGtSEr9ucEX2X3aZy1NkuM6w5m4pRScEFsGJHjbWDW9ePTrpgiLErJg9nYL2A37nprq9J",
  "key42": "3xWikYWxaWvB59fQLHbTqAuTxganyt96Zi2PSdUDRcu99W9CtR6rSrjmBWPSdWsXSwrGeAVmwz2oxTS7BvHQHXa2",
  "key43": "bZMANEhzvsRcWniFPWdNvQzh74QMiAxcj5DgpTX7m3TnnhHetkjfukG4Jox11tA4URpr2EfZp1Q4XUsvnVykkV9",
  "key44": "3fd69daC2EWU9fhkiE7yXXMeU81yYSr4QG45FDB9DH41V5CbBhZaWQ3bXR6jUh9nFmrk66rnRA5hgTSzqxB3PyB6",
  "key45": "zTAHa7JSJTG1Qw4wEiCLCXGYfKLVn86gCu9btihQwrWrc5V9m6vHgxX4kq2uqw4KMzubeDSAEGtg5rodubX3DK3",
  "key46": "zmY6oMfPB4r8RwF1LNArTYAs18mvZy1SYhoWmREYZtCV9d11tmpaqXq2Fyog9tsJMd5pkLQRBZc1pb8bSjkT72p",
  "key47": "5htmzK7cxKq4EybNY3WGNHmBYJfd3UDXChTQBT2F8DDoSEarBLsSNdSEzzzyd2tJrbHw6zWVDt36AyHea9pFkKh7",
  "key48": "4xpbPn1u3QQtU4AzZgv7E76DLZSoCs3Xibm5yBVxa64VxJPfd2edTSxfcyGtsUfCPWcNW5v6uSmagGeV1bWYfLBe"
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
