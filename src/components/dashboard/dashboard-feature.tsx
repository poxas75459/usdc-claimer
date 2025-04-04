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
    "2ArqVZMeFAj5RLNhxRdX5W2mkq81P3p5sQnjT4Yy1wZU4is7LF3qWaGdYgBYxfMRbt2k8itBZwfbvDBcNvrqVERh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56y17v8mXGE3GgkrJNnszCh3c53qfK3p9XkAKM6wgjz1bhBaP8FNAquHr8ScF6JVBbSnYLfNkigsV5uUM6PA6HqX",
  "key1": "3Kb3enqkvjz17Xkmez31zF8sirPRVdou6vjpwbNwwxCrtEHKE66NSDwdwL3hzebG7wNiHg1Hc2W1jx479ZDuzYzd",
  "key2": "2nCHnrvP977RJH8n37LkqcCtiM8hWtrsd2MfvgZ1Ccqv5ncjTcHJUU1gcw1yx2DTudwAceEh48pBoVguLPfYm425",
  "key3": "47Ls38B4FozbQotNUWaWTErGDgySanUVaV6vLwqn4ZDhD1uNPhS1KsfsAnjM1xAuuSKei3mJfMqSfNGK4gms6MHq",
  "key4": "3tbgoDAdqfXfvcpMMUjm635T8G4arvNnw2Wjvw3HgqASsapo1j8KfM8FsLH5rV2v6JU5fjcqyqv1A731gGerb1zR",
  "key5": "25huPReYCtEqxRCsQkLAD1dBNd9KVt6A61Gif4TL41XwShENctp2vcy7xRnFptpztUQe9BbReWRDo9ni2S9hiMiQ",
  "key6": "2Auc3K87Xhqj2JTMPaK2w8aDXjFgpB1s9azdbGkGBiLwC5UyYTt5x8Db5qaXwyjkeWzS1uckkcMvsMpiiYLP1SWo",
  "key7": "3UDmcWqkUEryCSwFjdpvBL6mdGxNaRE1vLSteFj8ts2g3imhJpcm99zWhj1qCWbZgRZA3HTfvcL42QeaLEDsdjHQ",
  "key8": "3pXNdzPnNGWLEeuBr2bJxTvAN5DMaBdPqjWs9MC1ePYnFqxDQsvYgFBzx5iboJJGHU8UQfo7uvPkVFcKfg6NRapU",
  "key9": "3goxsQYzp24mv8KHR978SyYVfHhLNZas76xDpou61UGDda83J9hHDbq1XFr8DEjETWZUh7iuVu3kTA4BrKirn9Ev",
  "key10": "2P2iEgFX57daDhzEGePj9fs9HtHbGSz8tV8zVrtmpVwRBkqQLVqqfsFGPAYz1Y9bDRLdCVxXqyaQmYkTDquMXbDs",
  "key11": "2pZsd7zdrV66VjEceT52yMrW81YKXbAtqdEKnvM7jo74XB71xFqZ9A3n2priCM6QreLegjWp16MMVYt4Fon7uhP9",
  "key12": "2B3EmQEsN5FgMAEj8WvZWLTu2BPpsvVSuyvhQFr2Yo4jNqN4L2QFYLD7xj1oiRWUDpLS28q1A7Y37qkbZxuDchua",
  "key13": "4R4Jou9zF91DwXMeDLNjE1mhNdGDuDeHwXTqN9o6KGTDEYKWyuq2HQuFQw8iJNqBwyTao7QjASF8fia1quYLodDS",
  "key14": "3WpShvive5P3fm7o9LzrBrQzqrKuu9DfBYCxiH1BXmQVjf64KreVTgRUYoRjAD7EjNB8yNH5aNWExtPu2a4izZua",
  "key15": "3Rn1isVFLodorWNKQyg5VuDPKRbfX27GZB33x1wEpoowgM5EMEchY7TRphoE9X8baeucsXoiAcndK9ujMHrqWqa2",
  "key16": "3AkMjXo3fsJMtu2xCqbrLdxKhiZonsiKRpDPar9QmBHdDa6ykj3zgZEQnhPnk5RSpkyhKTSNtdp9DJ5wpsr5CAPa",
  "key17": "4yNWDmVJfHNMUpt33tietMCNAGCZq3TPkT19de7G5rLuaLGpt9nRHqJqPX6TN6ewdDAcqxAwDtPTR98vu7C5xEXT",
  "key18": "2AbatXMyBMfQRGpkLZbh7QJMcta3wvjKiZgA5DACFsKsMCLk34RXwQXMynVU21woT72kKS6on6vb83AXRAk2fTS7",
  "key19": "4fBbvuWJ6MhT5G3HUN7CqY8J1iHtd6ADi1Wcqc1DYjHZA1QjZBmDErbTy2MWzmAEgKjHwtkyQP26NYr4rJoPCKYi",
  "key20": "335DKCovrs1LKDYSroKZM9hsD3AmN8WnJ41RTXHY5XBDkFmDGBvwsUZ4b5JZSRSE56oNiuhuYGCpvhnsh5LSkmZM",
  "key21": "3DFqbauj2pTsTj3QjqVLwBWX89A7ux29nkKbjrVRDZKxhHMxrcePNE4yKGe5qSYoERV3ygYjij6eSHgZ6kYJExHw",
  "key22": "YMNE1JDQx8iKkK26NAJfqTBh4EFLHVtFjJu27XmbU4h8iQMyBw7nF9mDhhq4jXi2vgfiqsq1Padku1Me6WnYJKg",
  "key23": "3zTmvgFtKnkswy2QjnxxNvrT32Etog6cbYECsJ2ad8pNb78ivTR9ZdYQ49CBY4zcLbbmExfqesBEgFM77asQyJTS",
  "key24": "4vVTJr5R35SdGy8EF6mfv2rBVfbxb8GKEyfirTLCDsJS2SMARjPK2qzPGzy5ZietZxVEoMXiP6FtGw2MkEVdKob",
  "key25": "29Frp9VgvGqrAvvbYiVMhr5XCy2qYxf3zQQK4u35hk7CJBFqKJi2gCFrFyVVTg9zoYohy1vxoeBba4FT4n8q4Bja",
  "key26": "sEjuSmRzNDitpm2a6QFkXdui2RzQHedZDi57H1f3wYcEiYeCtNX11e4pLyDqSD3U1uCL6m7T228a48g5sjfJhEZ",
  "key27": "i3zFkp71TJY1FkVmtw9ZAaMV7EB6Uj4sARztZUaHv6arkRkmrsEPV8EnHjTrs5oiTkJTLsBriFGJQo2fKGHTzYp",
  "key28": "e1F2i9rKAKCJEjz1s1nzkQUXHN3Co4iaLQDStA8RcWdh8RtVX7QMxCLSBF9dLTjTS8TbPAtvUCi9SBvkCiUgiAX",
  "key29": "2iGEvohe3nse1LJTKTu52Qbb8Vu955k2WXKLZv71pBDCNwJ1iEEJrbWnRxm2WNsniNsSftcMuKsmojnHH5TRgKLr",
  "key30": "3SaWjvWgnUf1pAzY5GMtnHDjkCc9ndRtVzujKrbGTYZ4SEaktap8q2A8Yg3JK2NJCCjM2mF6MSG4eHA5TDXKHNmb",
  "key31": "3ZQTJyv2A7xkoodi8PdFC2FnCh2gkvYqvoe2ktr2k7xh4S7TUcAft5JDeVji44upQifT57U3mK4CxiFDGqAkxBoW"
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
