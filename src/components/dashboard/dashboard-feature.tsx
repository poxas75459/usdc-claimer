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
    "3qEtCjD9zjz8wCf7Dim4FCbVPkJNgU9Q4HzLhLvbieXsbh4QDxtFR3Q7PdhGiqFFqYfshLivEPFDVVx5JTNXqme5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUCBH2QbYyRQVKDYgeL9Gj2nYhVwvd6krD5AC5Hbb5fg7MDpPV6qJsaLVnhy4jX6kfdNZpKFgw5hcSHjiMpTLic",
  "key1": "2tzWa3ycsxJ55iQKua3ewaSby52jJB117VE842CNbNtbeSLSTRyk2cCeWrcDfx3wJ7KPXA1xTJb1rVZ4E7764Go3",
  "key2": "a5yHjpJLTUfWBSRN6PcjELhgNnaTsqS4RtRcfsFAJoiag7uZCu9CXngUjVGgGek28BAPCZNZasEh35jqFxy2fZX",
  "key3": "2PyCHKE65YiFZTBLRt6MWt9nN7imtRVjyxCUVAtuKGjM1dTcWhyMfK5He1VhtqQbdbdsRbCdSdU6BxpbXw2QdCDb",
  "key4": "2uefbNxpxTfa8xRfyBpCKi3smcPwi45zZhA3UxeX9nSg6p2vXhD4oqBK7n5ScTNczs1xmYFK3H5i8b26ezNpWuuK",
  "key5": "5rJ49NisnbmmWwPavtnP8ZizAR5uZaN2D9DZ2wcnpxEJWxyS11PNGBr1Ws61p18a8trhECLXbnmMKboUHbvCRoaq",
  "key6": "SaanUiSc2YDqJZ8LtsRKGrhpuhaEBE1VbDPUSL1Jv7JJ4Lz7PkWdrsho2woReShNH1Pubq4FSWPFEFbhH1rQbZ2",
  "key7": "4jHPP5tatxH83kC7Bw81yguWnBWviojQcrjUfJKUesBfWLVTn5JwhKCMk47Pwg7mgiKhc1fxFKr2HWFaDZK6w2ek",
  "key8": "64GixMbs2iV9y1CuoYXF5QrR2G5k5JxDXfm4GAeT5pvXpEL931bu8ejUbBk4vzQRZfEWD99ZWDyNM7nPVoibSd4V",
  "key9": "3fZZMuNdf5R5bsVWs2ywvuvN7r5q1q6x79rQi7yrL3BwbFBSz4TgxoopgqdvYomZfWYsCaU6zzhYsxWRjqfLQQTq",
  "key10": "37Q2xChKYXvj8UDg1ouYK7arcadBL3hwhvVv4Pc1TPRghp5goUH6JRw3BCGFARtsmHREEZUbzPnUa5wtn4o2m1h9",
  "key11": "2oxG3TrBYczHwzh27Y2RyVCRBHh3D2R5HBJtaqi3DTrpBpHFC3hY8B7Qxaru6G7WY9M5hKXiSaTQa2BFv9weLBRi",
  "key12": "3Xpe516JrsKv6fKtrWerR7PJAaRDVrtQoWQnPXeUSkHHYQFSsRTReVBHP8vLYNdwWuHWBt9XeHRL7P4GXQesbc5E",
  "key13": "2P2wEEWPquWEuh3kFEsKbbmBRDWoa9srtBXZH3CAPw4ZhntM7p5GP5tySfn4JvFSMxoLcGdBe9aVyJLtKzuag2nM",
  "key14": "5PEALBd3cFU2mcoAXVQfkvcRDeoxPpYEJoNBRxM9y93kYYK68S4etLVZ1MomjHWGuy31pHM9je6iN5P4WvpJVyDR",
  "key15": "3TVF2aVqLsaAUWNgoP2MqZ9iaB9AA7hDZ3EvZ5sYW5sQQD8KoLmcMMuxyndPggsMBVYfhVQDNFcb7VzSTsThsy6N",
  "key16": "59a4P4WnmjVBKPZkh5rwA1A59ghfpnYwbDeni8GQL5Z4U5UmptgGSqjZEPrFXrRdp6RawMsjN1asSEk5CL1yxFUM",
  "key17": "BHkSu7CdpE1LA2UBpP9xbw7mDYLTB9ARFsPZ9p69ketshd2LB1s6m3qszsAYvxTqHMAKrkmem5ZS3qQwjNRGtut",
  "key18": "4x7CRNYtC6kXs8iYGMXE7SvRhNTh6ssUTexs4pME7FVjyBWzcWZeErok6hQZ2M2gTkrQ8suryEet7jbmhenEmBu7",
  "key19": "3UKoqMVBc33Utu8sMjkBYSZjd9U2gKLDVVSSAhm1hA1tLB9CaYDaQ782hpNKKCAfDzny52RzCRDHAAwyRw7XifbT",
  "key20": "RN1qDaq7VaimXq2CA6yR36N7Cz7UsSYk6c1fn8n1XNLCg1tptxko8GLsKtJ2xbjs4YpeQNAtjzzcQg3WkeoU9JT",
  "key21": "4xYG34hvZ57MURqRXzqLdDtkW779sjXUdzib2n7Fs17MRt22BVBXdp9VZTwsvVjfsKAsHUjAtB9sqJkH3Tcffbq6",
  "key22": "59qJq5DTBfx9vJHR2pAmzAYamhZzDt2NGFe3tKjUUuUATJ5CqvLnDNXXNtfTovggeWF3DBhpZE8G5GrhFGhSHWJ5",
  "key23": "3rEgCU1oMMxsHbkwv1MUfq6dwdzABZUGNHq18gWwtCE8qTfRYUYTdHdZdeLgNRUKaKhwzvtDMrVx4vHyW6jz88Uw",
  "key24": "5oYPRbricDPGdX2iCB7rjSqojuvhSTysovXNwery4VMXv9A55odsUfhEhmSkjqVNZ3xaUgbtRy9KMM956raN1ffv",
  "key25": "2zeTK49VNo6zfKGYMk4xNsHPfXfEGE1YxQsons95MkGkRNEcdSi5yt1UH7sS3wkH9fbzCDKXtBKQjU2KfqzB3ry4",
  "key26": "5KcoPV6v2c2PSDfjsXKAWfLZENk1jLEhB9pajiak23UQc76337cmqfU2kvxEaTffE2WRv9xAujaCS1ZnWeET5Bfw",
  "key27": "4r2xKJrqneuij8oVxAakWWdpm81rmeK5V9L5W9FyiSB9xyY8UVoEjyBxJ4UXagfdkGqQcRUoKU1eXv44QNpGonG",
  "key28": "EcPUP5thgPvfNSjcfWNS5FrCUAvGDP4JDYbxgEQcVK8MGrqWeytpYjSJe4vvgVC8FxYRywcWhvcdegpkMM7mhg6",
  "key29": "5qaJVcaV4vedHapsymStxUXWZPFjkDMxp6NwymhJobJZFx1Jiig4bFu7Cn2MbD1vi81mnS4pYH1A2jXHxzmQbXtj",
  "key30": "J8cBZhwLJkvjW5GPD5ur5QsXh6pMN4x5XQVC7CzrkXHosfEmTVXiz1pguaJeZKC8awd3rab2zR32TmJx2Xzt6nU",
  "key31": "ibTBrmy8L11yniB6QJ3TvDPhKVP2VFtNjc88XFvM5oaBKHgtUySNBzf81tQneUzvzvpAZgK37CDFxcPJcRncGr5",
  "key32": "3zRR8pvNqaJwYwXYcxCJkhsgP8VVnXWkqgqbz3zHjK5jQb76JxEiHbVBZMJMc2Y4ZnPLknikWBHHFmoA1kDwdHv6",
  "key33": "5No7VvScTAa5PWYrJuQVTnpG83XdXsUAeZmYeN2CY5bPRqCHKxDguQbWNWbUW1TbTStsph4tQ2A1tyuPzbkEQ9Ee",
  "key34": "5JDcyhy2YHcnWXSMWc2DRM7ZfCQokKR2ygrncBp2xhG278UEQcUNN6dXTMkYkcq6FowMzS7NEEjLWPDVqHvnt3cU",
  "key35": "2PnYs9gftGPEmw4461JEatrwjgE7bL6tMprbf3LUWPEo2e5gzKsqZUoGnWLK162fZq3msBNb5VFQgCkZDSbVrG5b",
  "key36": "5UaYH38iPNJyHL1QsQv8aG36zzdyhGasWUGBZ94K9ELd4LcPy8QkEBmKFhVKuatJ1j7zHJGLEKETjHpWi3kqPP3X",
  "key37": "AP1qXDrR8d3DQh2eCQGc9oHD8itadWG5KWxGinwSMXuQcpcJn6EuQepHQK7itwAYVT958J5YHiCxbNKW3aQRbRo",
  "key38": "4ctE8iEXqwygvJ2KrgczFg36HD8b1ny55baC1qrPuQGF5XE753Ri6uiAZ9SkFhSiMzePntsRk2LsbJYXavHrHxxz",
  "key39": "1QNMuDNz1HHaBdCb1i9hRhsuP5T14bUmHTNBp491m8RkMCEuvy6QoC58EuM7inSSquNNnhRLTdgdYFH16Wz46Lj",
  "key40": "4Vv2G72szYfftShry22D7ZmbXNQiDBdXtHWE5w1AweWqq63YPxZ5Eg49jPK7pZsY76WfkT5hKwbJMwZ7bQxwHMox",
  "key41": "YsUVLnFb7ZFQeqjknA63v2BZKK36TmEQir8kewJ13FDwBJbD2jr3W3yKW3vA3icrk3Ze8djGZXKKB1LfT1JzBto"
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
