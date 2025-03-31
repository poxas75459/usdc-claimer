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
    "K4Ek1Q73ELkcBG9woTMWtF8oCZhE3uDPxRQbgBHFrVcU1M9ipoxwFhge6QdJHK97pSRqhCGJAdwdDh2axLhZb4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TXFEshFcBov5dkBx73VK9Mm3KZqe6uBcxXpxfYEAXGM8eHhFP1LXfgdvJEyi21XMszQtoy17awN7YTrXBXuFoqd",
  "key1": "3fVtMyiuT9nJXPYiyBQJA4dQuvwwVHBVyEuKtwChb1wfTWYZaXxV445T5StHgoFR6ZMfFtVtqEtUJCdQhT2wbNDJ",
  "key2": "wxBG4TY2A3LAZfepk9nrt1XVWyHX9uyn74BLjqGVR5JnbHo44vZCM4Zveoe3QMJtdpdx71i64Py4p6nT21XoaFQ",
  "key3": "2m9nArLpV6VUE5CaXUwaGTwxr6h3TJHNtYFrSEzmDQnkRq8LGZVZKKuYnzvLUAFJGZ474L22oo8UDqtQ5vxGUcuk",
  "key4": "65bhsp8WwkCvrjoF2tf5Z34UcJQP51Ef38FDditLvuk8AYjo5EtNeFbTq4smWtgANmWpjWB6ZRSmWjtvdQGS9xma",
  "key5": "2Z69yX1qBSHv25E8Xq9od4Tux8YTG6Y3YZK1Yhzthhdcfrbbq6S2DX5hBkX2F3UZozoEb785UMDY6K7mE1uRPg1U",
  "key6": "3QkpNSU488Y5XxdvYstJkwzygJ9VSUN6AUzAz2PDahfDxacXe5HbGjmWvvRBcoDb8C4wxtSfQxSSvt9KcjcbG5pM",
  "key7": "3uvznLd7KGrbGk5uH3mipkkrC4ncQjdEJoXkutv99Sm2V7QpsB9wyvVQnyXQu61jw99zsNWZBDhYdQmuwVruCmAC",
  "key8": "4rQNE2TjmhCFbnxDawXpsEmhPCyUe3EkWvhBTiFKE6i8uBTpaY18JGU4JAEBffyQACuWy4PPt8cHz7F6cxAHeknR",
  "key9": "gma8VHijjQJjfSQF321ffgrZsKmAhC6Tv5oLvWJEzXy4Ze1AVhXC8LRcWXCjTaLGSkGWKgeCkYeeDZQXTJcCUKh",
  "key10": "PpDqHECYogE4T9bSYxeMqLSbAhTM3exjmZC68yELFb2XmPtzAtVRyhEY4zr2p9tKV7TXRhgoW131vNy2spcxTNr",
  "key11": "LcthKe1EXUoXhs4qHJfULP3UdnKEvstc3VBv9C1L1TCvwB9w3H1hH2SvV3gWm3zFPpCnt9SEbAdtXiTci5jGEVi",
  "key12": "2JhkmpJMby5rUNk7U7sknZe1L6zKrW3C4TdkDrbzauD3CjW2ivxCEEWLurg9sdRe4Z39Gvge3kpYxWm579ANFAJ7",
  "key13": "64os7fqdXG6w3XeUifxjsQoze3MdeUVXXVjyomir5KfjDZJ4LSgkQC6E1KotojP1gw2pKNEgrGyCg7ix5JxvzM5K",
  "key14": "CX6hFFdeNh5QLicSffe7Tno21FDaPS51xubpRA4sERtVNBEvjzGFyhma9NjnxTn2XdVY6wL1Q93DjCAJtRg7xLj",
  "key15": "5k4Gn3UpjHEV17majzhX7BuVc6ePDXnu5rRAfdknPwyVbH1LBXU3L682dMK8s4ZjmTmymvHhaBKppZgarnQrx2A6",
  "key16": "2cymFwZUREb6F1KgHxG7B6F5aw9jUQSmt6xCkiqmvrZ9rGAozec5s34X12umzvvyt8g9hKeTLhcAvGFog54pcS9P",
  "key17": "2t9tQCceyT7MAZvX6DdueUdEyGmk8f7vmixwHCWQcZArexKNtuLdAuEDp6h98HNYVVX7MC33fWuzBGs3KQQC55WL",
  "key18": "3LdzSNjkpkLFTqQ3DxaxJ5o3TtJ8g9cvWyp4Kk8JUoZ94RUnnVWt16QgTjfWHCHeDmvagz91aBXxbHGQtbtU345x",
  "key19": "5mgj6dsCZCdd5pxkcnGHEKyZMQkbdtysghVagqxFjnAaSmZZppbqDFhDrzvfHe85rFEkZMNMF58Gv9MKMZSPngYv",
  "key20": "3WhjtUsGX8tMLXWi4nniuMHsDaEqvWvL2QRNWUrR5evYNsbcz9VqVGy7Qu3i1Wd7bWjur9cEtvnqaFgPRDb3Hmkf",
  "key21": "3f8cn5JneY6VL1hhpsdHdS1r6Tu6Xha4rVa6WRQCMydnqKWepegrvD5mNdrRkKKDEJYWmD7qxpjuS4gPLYKKgbST",
  "key22": "5t2wSuD9RfkActeab7A57ib8jC21gfkVnc6P6k8J8xYBQnfgBFhbFLQxEJwTQmpVrafbq5iyMHzQrvd3MCjTjErV",
  "key23": "5LcDbmLCX9hXPJ2jqG5tXvBoyNfvCLh57nSYirrnncBTdzg5fj8eYqjHCnjuoJqCB5etgMdihA3AGo2w9GvpkQZR",
  "key24": "4uVkkpeoCMQm9d7EFYRxMspJAuLBL2s3UJdxmTxipWhJ7NLPf3M3kiYYw4JoLxdGUSSPH9c2Gq4do4VPRBFkVNxw",
  "key25": "3JcqS8U28M1u8NAQYFBxKqMa5Uy4QbKFrMdXqC3D6RGKnytEpfiFS1unZH76wBMv8qwQogZz9hVJX1BLE1kT9yRW",
  "key26": "dZSabRyDPtwNaRsMNxhTbKeTGjRuFAtUUujn6zv3FSVeY9rXk9GRW8HEgozGTjEcUhihKXdpUfQ6bXQqfMi25TN",
  "key27": "ziQHkJcrqBXQ1z1LW52iKc59mFEDvxJBH5UkeQkYhLhvEBpPUGVDY4YR7iSESvk6zgzs4SgbHcqGG9cuaXz9oog",
  "key28": "5VGESPPvZN4GDG12UqoL32rVmvmkqTN7Yz7gxNmESaJuYdNofHzDtGAzpEJM9QR2PzivzSBuynfh1XpUyjEb8PNb",
  "key29": "3WrqcCQr5hxNHLxHtsXQqU7Ksift5J6buMAktL6kaRULQuYZ32DCjK4KdVErxqbQhkXs6wbBjimH3MaLv3Q44B52",
  "key30": "3FBdSiHtfNQJdj94KvzoammScmtu71vCi7PkLTzAcSuLbCRMFaoCJ1g12TknXWwCMdTGpc7qA2BtHWe5TsTTWvED",
  "key31": "3khUJatDTDyN8xEnGtQSBMAQQJUyX4DAXDTvMGVrKrww7GaGCuw8gfnQ4ZV8K7Sc8hDoxSTffPcwCK8WLpYV6Y1t",
  "key32": "8s8kfWp16RY8TwgDHoxq73qjByMKB6dhEXpAudhufjVEegPH2U2dPwmhT1EYxEG4K9Jb5e98hK5c63VgGkt4Ln1",
  "key33": "3svR5WWqkzSbYNdZnRz89WWnEUxuPb8rWrqg4NroJoHwXZ4y2rjPpn6X9CobHMcz2mSh1SrLXrHtX3Bxx57KBipb",
  "key34": "pVmZ1Hc17rT5HjvUHs4ZVAbw5bFwDoC9SVy2XeCWnmkzqFsucpW8GcFFy1sZhPqFRTx1ag4FwCghu1rmW4uFSvK",
  "key35": "PZrqkhkJUFWv7WD8Ft6WfyKFxgXWHVVfVQjf83t9J4WpkDkXa1dPkWTfDxuATB9EWcezce85KqBkarkXAtcGzSS",
  "key36": "4cAN9KwRasc8atzimjGuuwLr5rfvHg9PkvHwRhztBiEQJh7YRKT8dCJRSeWPLxNEt7VrQZrWuUQ7zcws7RF4p1Hj"
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
