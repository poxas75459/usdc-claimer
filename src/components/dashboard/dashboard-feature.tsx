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
    "4H1r8ABTdsPdxS2U7ba2nLxKfWpn6pwYVo9is5QbrhjgT6t1f8pJEMRdZbxVziQviLpjg7wiJB7BE1Kdz7Lot61Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9cF1eRzwDR6UdRgXAxTbsgoLpJTfFHghTiwv8ZdcgyLsmCHHDUNHMRhHvYWE1qabA6ML2qGEPgJGkane1mnyYf",
  "key1": "3xT1rspnZE8w3efcWK6DEscnheRZNPRbKVgL5a9cz1s3sLikKDcJhafjqeEAyDBqdEr4LPXK36dsffVKSmzXkE1p",
  "key2": "1ZQeG73KiLTfmh2Y8aDRL14LaUWNGqCL7R55YB7ybAx6Zz6f1CZ5xqy4toqRNwM3dmb2k3FJWVi8RjWrVXjvTnP",
  "key3": "5xyMmRsdzfgxxL2smFzN8a85rS2AeA2iTYpB6mkMSCrVkkpvUkqyd9bScCAgw5nZ9hoRXP7FoNnSH3E3b5RcSVDK",
  "key4": "61Q9qRy2iWQUhMdhAbTnkRghxzKzrFVMUtrdD7BvDHdnVpcGMETiF4xXPqX91VvRV5vmuDebfYKk2ADypk8gPcqA",
  "key5": "oKMHYR7gmrV9vBLPXbE6fzfnStUxz7hpWikeVFKu8xHGC2zzG4cwxn9kQqJvhxxF6FypzwfsVn5Cr2e7omtQQGh",
  "key6": "4osZMihXUGTdrWisWqersHjU71KYrUHez46kyVkNR1FuV4Kube4g5gxWEzGKiAMgCp75rRnjeXmmPFTv2M5w9JPC",
  "key7": "4CK4HYrhY3kNyH9S4wrAND6xBB5h2UfpxKvumP851rcZ2FoYQLBR7ot4zQZbi2rxi9nxbAqk4TcN5feXiaHLrqnc",
  "key8": "3CLHubc4i3k7HdhtkA8K8ERpqveJ59UizVrf8TXo7m629C98zdYUW2avkhqYVUhmorf46CaG7uRJ2xmVYdoNdxZo",
  "key9": "5BLosBhmtJiPQt8wcy4fySCfBCZFtGecFb2rMtQcM9NSgA2qUHct1BfXg2uX5B2Ey12juW3Ri1Tvs1TqZn7x8gFb",
  "key10": "2T2ZEZJePGXvUeP5r2ygYBfRGjf7u7vCo1YLGBFToey1Fm5vP6rMj7cuJZVJRsemZXDFECCR53eXCMJ3dxkMwtij",
  "key11": "31q7n1vjTfLuSZqZeTzJDodYJVe4pECxj4evDQasWMKGbfcjV1VyL4nD8MX1BpC8X1dzCWQL8iirxW4geUrGAfKR",
  "key12": "4Q9tyYkbdEoqEFSRu1YNUxn1yUpuXD5dSg9esmkSxaR75nj4MiFcGoE6MCRicgDXCbCs1B1LE8KehhhpVc4Y5HK9",
  "key13": "M27PPMaj2k1ece17xJp2UVwrTUqJ6i9qmfMmzbu9aVxiG41ZC1UWCDd62hz2KVAuc9HnVPvXmkzaAjCamEAu7v5",
  "key14": "3aY62EMPgigfZ9u98qG8RVLxdkWwk1Hc88vgViEAmJTPhFR6ksxhzxXoz2oqPTb2bnGuy8smmb1tz6GGGs4D9Qy7",
  "key15": "4iiZi8QcU8p4a8ckaLXRMC8ZuPinUmhwX1A7qNcx3vA6fybfsdZ3CZunDhhSUhUG79KgroUMyYLjKx8RWS6a2Voh",
  "key16": "2xL2gHLSkyEwwC5UuxKaHKSaizAKCLUo7q2ZvNa2sYtZuE7CSzC9YKaeM1Ljd65uTAYbYtNrw5kJuDUJunQ1smtr",
  "key17": "2Hj9gH3Ere6TNiruKge9RaaRr3D69dcn5Wuc8K4Vje5Q2BZRFCF4358Df2N2yynmeGcTjpPvGCfsAERWxH2ieokr",
  "key18": "2k1oKgDQdv4YJG3kgoCGuuvrmz3QPnjQXr6pvrX211N6LkvUSDjYPpAcHJqfivwpAmMSghCazHHcktBGofC3oCVD",
  "key19": "4ZN8Hi4HVDzS8YtbdUG9tjMwYr48jnaF79UJmYsYod6352YQctpfBoQrGf9fi6xDyBBceZyfkHbpFzDaSU962dG4",
  "key20": "2tCDg7BiNNVGDmfgSaf7n4iStckR7Up4BHJtEwjNHVzTCBZP6YuKuCAgdHCtX32Q7pS7zXJDzQddJ5xAFpQZssUq",
  "key21": "4kRQ5HfGhCkSEoBUjNstWufPhKov7f3xQjd1QYTDc3jw1JM85ydsH5rSTwTqMSZeCHbtLnfMfY9jV1xH1cQVDHcm",
  "key22": "KGaSrzz6fMzCr8B5sYs26SA8o1Pkc6feTqWHBBsgzKPGbEAcc1tfth3ngb7jsfe9ZSUFZnkdm5yvvQ8CmiAQ8Z4",
  "key23": "iSCHyxbvzVUXqzs3orAK6mLgpdZ4y2LBEoiay8HaHzDf9YNEx4b8f7qoyHrQaqKvWmkdd7zzAEidpLNekcSTj94",
  "key24": "2gdydZZ221fHM3ZAncvcJdh6pxhUgzJfkD2DD8TBkPNXf5gmixooMb43b3BUPeYu8wLj4sJS4nDrh3hMnCQMEZ8x",
  "key25": "4rU1WJS5pFJy2mxWaP8sVS3jMZfHB2anyHuPQNX7MzGSdaVHsxs1zvB3hBzXtbVRYinDPybRtvryL5fWT5VtbEeG",
  "key26": "4fsg5atJjfvbvsP6WTf48KmMd46VcRA1nFNgfmetcYV1J2AniWtnv2pxm13D6Qxq7WFTrhprGJFfbW5VemSpDnvx",
  "key27": "2marQeem7R9YQ157VGRxd1JWRpFRC74pgwZQAs4ZoKY9aWjQuqn2p4H1FtN4fGmNe5N1X5uh75wC5GMpVch8W4sT",
  "key28": "3xrWwQbN8pDktVhevYb3HEYLehEaE2QV2mp5kidjFnjvEsLCGV3MNhfCMKFaswry8FsEAgu27YmAD9hGZZecFZ5Y",
  "key29": "TG3VwFmLB2oGfPyjTjNeMoqWEPUdWjgHx4ctHsBMbgXFmB1otYdCT3Y77qHFUGkqfMDDBPLC31JtzuMgYtuoqZU"
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
