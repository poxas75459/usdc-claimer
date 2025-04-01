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
    "24v1kAuMNM3VCcR2vaTLwopCCduM6BuUJApEotmECQMtF41CGfo2V4fKUeGY2GBafyoC7ywHsxEvDpXFz13R719H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SEAzUHXPe6sVBZqvn24Ysbr4H6HbX4jJdfzjcHURZt8GJBpWprF2PJzBqgmQaYX2nd8ntG45FUdEcFsiEfGaXj8",
  "key1": "PNFUPWZFRrKfZAnt87YbhVV1Rpys5omE1jecU3cuX6YhvHN5EdHwAXKvEr9pNEzAyX5Nj1JT7kwFQfxPu5CaLfd",
  "key2": "4BYjetfgSCgjWp9fx6jwGvbFBTHCGSjvViDbJtrMKpYwVZphCDbWNDviC3awtjvhRTQ7HRyhjfj4KnH9MrTWywfT",
  "key3": "2geL7YqqzEgsWd6sdmV2r4bZenrtCedPHssVrto9xduv1pyUHqE8FoHnZ7VXbMCkXGR3ZXYQ8o8expNzqknHonRS",
  "key4": "58rBLZRtw3xRX7ByHUxLMhiwVyAGwZJ4KCR2zWorSi3biSyLdJugJNT1ppPTp4mzJRjFkyBPkCxw3HW2V3Z3zqZM",
  "key5": "2mb3C9nJHWxgC8Q941mN7mVPzXCp6qjvWygVqH6zvDj1kdgyBeaku5ghaw9HSZA5dUWqxubbrUpzeDPS4norEUuf",
  "key6": "2RMiNjErSseewFBBqy8SbwyLqe5Vsxp6Uzs9DPQRVxZzxeZRbmPkfYW9KhQ1exgqKXriCQa6pmYNDxRbj1p4Su2P",
  "key7": "3W78RCUqoGuuBDPTRddZKcdJpuzg6azfwmFFneLBmBzbMND9G8kMUWsc759Qbxgh7KKo1iWENh8gbkgHwbjhfrBb",
  "key8": "3NMuQynFzB3f6ZmchkXgkGbD8ZBupbmPCq9VxxTKZPuG53f7Nu1iBRHAnJs7DFrAkB2bz2uiU7DBsQqw7TSj4v6C",
  "key9": "4u8zF5bTfFcYb4Pdm2HeRQsSo5oHSzeuBoCBcEXhjxwLUFV7UbcU3tcy1odSsSKczTjBfyonHCDS9CQtAa7To5Tc",
  "key10": "5ZbRsnWCpyJLqP4SAjXQdkwnMwZbbzoFFoEqrLgdvGAQqWdtfw89eur256LdsoZV29BN4L5cXwPN4mqYt1Zw8VoE",
  "key11": "2JqctCQ75Tjc94P29AyGoAjr58H5Kpr1zqHumxhPEJd2CdEhSK7z3ehB7nT9nJ16gedZtVf6z74oemWKKM5b6Scn",
  "key12": "2t7MQE5EvTCok1CYaJiUC5FKi9UmWNSDykLeRbEmu5JbYXRiJVytpNDq8MKR42rJKNboNDPgVMGQGk4MtGZkxZd6",
  "key13": "3sZcnmAqJH4mBUGT7A2PqaRiF8iAjgXbU6kL9qtZF5jsRPMiybbMRpCqgiB8TKKxJWoDaKyQqZmbh1JfdE9XxYvn",
  "key14": "61n1Cgj9V97mBaxAiL6S4UQcCL8YoWN17MDzwYRq2GUY1RZTGDeYRNuB8KGSUCbCpxCkCw5k6EviBrK3M7Ai2HCf",
  "key15": "iYqDhmwDAJ8q49nRRGPdJXddZJVJDZZdVCB4DHsweZZdHTLKt57cckhQdAXB2SmoxBhiB2jBRhEWTN6MKtm7iRQ",
  "key16": "3cqXRTxNU6MBr3ueDznLHHzAoKZTaVSk2i1rHmxgpo16yNumF9YH7m2AENsXJQtWgE6QMo1gQs87dDiDiPoK6Tnc",
  "key17": "HgBbVJnt8WzR6UggPXp28w2rXXqKfDUJnuVFceDXK3vaxpVGTanyZtg4omt7pvWXgdG1aZQhBbjEuQoyjYER5mw",
  "key18": "5AssDqzFiwY94xkrwuBM9Z46GuAwu1HK1HmkL1heQQyQWjnkeo8Ep3iXqrVGGVnDgKE8x54fZVMiTuer8nXVQ2C1",
  "key19": "2FpqrZaysELD9j3cg1uR84NFcUfv7ybfCqWsF2JQc2sJK76838wvZjqm6B7rFkGmR5ZcamMjxpnvijTe8F3y5R3L",
  "key20": "J78BcuqhVmEKw9xfcT7hVvesfkxR5AffVvR5Qj97TgmBaStsQLsEVK95ayECBvR5eajLyo8mKQ1UDg5ACKRc4gB",
  "key21": "ydVkCVrsxsfvnYqA6H7PgMXb5YXDNG13mCY1sAvnmKgeA2FyWj4zfrVghb2QGKKXMdresTiyR7315rAe8acdcTR",
  "key22": "3kxK9ig3Sqpun5A2U7D8A1Fc7RB2xbwZNsQHtGVdQhBSqjLbFCsagJZawVGqw46H6GER93TZ6d5AjhZuUqqv8t6n",
  "key23": "5RBQhsS2DK3iNbVrhMukCRkRSSyCu5hBky2eCMpzF4AFHsxphqFHTvJw7xGfvTWq9AehaYRPjFAkFr6WGRWnUi5W",
  "key24": "3u4YgWvWHBmE4EJvYTzwLodHBCavGsaoU65yubRwm4pPFNrQFJu3LCTedahZGHnFeu6VKx8kyd3mxU5gP8KLeiY2",
  "key25": "4TRGs67T6CCPyrt2qWiebChECBZ75nBvfVWVNzhGAzcs9inUVi2YrEtzag4ZUnTKzXA5ghHAhPXCeiu6mCr9a6ik",
  "key26": "2Aoh5zjmGLFQtWDvx1FGMvqdSHx3Pgkn4aEvUFH88vtXtQFsjPyyEBWvr6NHMSzBHLFSSKYNbzg2ASa32ujrsgdS",
  "key27": "3RtQjGGGS1LvnYgAKiWuAZfd9TutzNdFE2x3AaMxwPNZ9QnVuAjpimrW5qD3dqsW3R73bBwUKfSeGd1utQzC1QU7",
  "key28": "4m83gtgo8j85qbMrehVvRTXimghQqQamAhwz4G1cKFaqnBb2t8WpFwDTEKWZtDbpkL26Sg2w7HD8TgaGH6K4qCYJ",
  "key29": "4ytvhZRFPdeXFBzcdYZwGKAkRPNtMPiRaa5AVLgRaeN8Rvo6yfWnXrenxKNCfnEx8wUtNgdPMxTr9pX5wzeyRtdx",
  "key30": "D88jgJGYw1F5xziYu6MywjYRQMjcqi1bhcqoHvSwC8AfmNPMf3NhfFaprHnhNfm1ZBKJQ7QE9hMEY4hjnK9WdKU",
  "key31": "5PG1uj8F3RJeAfx7FCYJCXdJAmczbpqSPapUjt7ZwxU6UM8xdzxReJbxtWT4mzMVspdAaSrU7rtV7ngf68rMG2SK",
  "key32": "2VRribqk1etBdYaEAcGNan7ua47rK169uvCBtumMyZ7TAVaDcq6QkbBFqLgEBMeGCttDqkkSfS3C49wQwHKGZMMW"
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
