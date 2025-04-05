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
    "35h2a7udW2cAGu1yQwC9yrxjunsZiAac6UMLuJq4aZYMcg33ESAeUUAWTx6j7vbrgXRCWkZNuMeniSgRapbksKTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnNomAGC5HQvjUscN8eDeMbdUXoVWCAFKCoBHSm3DQZe8uaGcm5Hqo1AG8NY3QgNpy7DvDyvHCPCS8ZrRfi7VWa",
  "key1": "36hFMFnTGAM6igjNEzZo8atuvMyvWw5tTyiSf4rWwQUsKPtaAk7qVSj6CnhmA5RTBtVttqRb4zBEasfhuw4FSVf",
  "key2": "529TuLh3jGrxbghqfKC3Ww3rjofgQ1HgGy2JJ5PnzE4Cs424qyUppVQas9B3ozas7pRPcLdTYU5Av5tgCTJFivLK",
  "key3": "2q9V7HrCifQuq9dG4XGo5oxrs1uBK7LihaQDHUHZzoNpdNrpCpW6meDFUGsdEk9KQsnqeHxqgEBb4f2pheMAVsws",
  "key4": "3hAJqBJ4eh6GHpv7r2zx68dvoUo8DKmSqjqSriEvDtY142FT23oki3paGS842q2i9frA2pi1911uZazQxPqUoaqL",
  "key5": "4ZdcL3LZb5NVjKgvBJAFsz9EvBpBqeGPNCkRMpmA5WfSAuUH9F6HmWe93cjHGNSxYv6vVKFwniKkmj5K9F4q4iz",
  "key6": "2RaXPAMw7jmdKfqfjHWvsPcJ3FHiPnZeay9Hn7hEZmiTdJRRbvBnJbUsqnEehQ4mhjPH51ustyaZE9xmMcE4oXAg",
  "key7": "3Zmq74L68dkVPXMGqmuaM8WQUhFoSdASUENXanr62UmEK331cMcDdGcYKHQfNv6RqyBfMs9tg7wDcZdAz2QAwncy",
  "key8": "5AbFSP9jpDu6bDzr1GUepV67jkgb9ZP5UAfmSsqsA8jQqTJ21Qm849nzQWLoMAK4TVMZSVfBnushyUy15HKGPG48",
  "key9": "5H4iMNvDitvZBwJF6dzXDyvM42gi6ogLJQ98S2xLEVx6tWR73iRtaW5NRvFEovFMRVQMPAv289iS7wtfcSDXjARN",
  "key10": "3qAyHkVFUzc2xCWbEEZ8hrnPqoy2d94hwzg9pwu5kx7nPKGpeXtXAvkr5vzH1fHCFUGTu6cQ3Jj8CbZd6c4dHTpD",
  "key11": "3y5f9DRcxzFeBLZHiaUXY4DToisCCxggoVRnt5KMvZ9LyFYdmqMaSULWm6ktLiag3iZFZyTHdd25Jn6UxTEY9T4p",
  "key12": "d8VsTw4brUoUJVwxTRGQNd6ARybdTHW5Ecv5PQLqQBaxHgLdsVAzdxb6wunekU53K6izVnw1CWaNRtvAbiSQDaH",
  "key13": "4vrUDPhEjy6n61kT9KPrV5YkzYJgtdtng9CKjQjzjWwHVBMKS3u2CUC8UqKjFmB9Jz13ranczHBxyy7GLFuJUTAL",
  "key14": "39v8uuZZxnFgB8ogUjr9UXf7cAmVQwt4JfhbQPB4E1QEB1KJzbhGPDu7TxtLH4CE1VdZzm4q6SqBuhvBEQX4FMyK",
  "key15": "4ZNj8hT2UF56YZBFVMtqRB5pSSdurSEKADz7yLQYxKzPWFzet7G923H5CDVzGmpv7rw6YDXcKYq9hSShnh6eFh1j",
  "key16": "3yPnmrAjbXRV3MTEgthwrYQ1mu6R3wv8dLdW8teurDQtw1G9HGZeJHZYc1DhmtQLqpervTqKuSce8WuvbXBtuN1P",
  "key17": "29ZbGuWwSjtzUVq28gKuqiSsZfE9SxrLYBAriz9PGA6M5fHqfoySiDnNdL93wfHtv2dBP3WXrjEU7CwvC2sWToPw",
  "key18": "4XfDy6v3m868cFFm5X92Danh7hHw9VtfuEr5YMh2UAUyRKuWdY32NV8bzbL4X3PFZLKVv4PU1duqiLzae9MUYDPi",
  "key19": "2kLde4Erk5M9B5VijEEiaCzY8MaWjwPMZvLPWhGKKanytBTHSpBvrRH8P5QqncG9jGwk1hb2ck3s3E7t6zQ5Jhv4",
  "key20": "9TfHrhJvXrZYJoA7gFDY5vXDenXZDWgJqyuvZFvx5ECV7MQg1vJy8PaC51hGzD1Ud6d8BXc9xM3Tb9DSD2SAgtm",
  "key21": "Vx9UtBfg1Sy1XHCoTe1yfobDFV2AvvDgm5KJEitsFanj3Hsss5x1SpioTkDFjsYurP6zbXqR3wN5YJ4XbdtgemQ",
  "key22": "5P16ToZbBwYQtnhKcJNswG85mQi3PM3c2HAoGWAJxycjPXQX8WcMksBvN5g8PsfEhjiMz35tt8MGzAngpnzqwQ4y",
  "key23": "Lrm17zVTXFBPpavCBdtjiZLy71pvn5G82VNkyuA9vXS3bnPvZuP6Y7yXv9YS3cPPVjgMYd4pxHFihGodP41hVd2",
  "key24": "5RfEhcDNnvS26yK119DWzLwiuB74fcEZeVWWVWmfP5fJkSsfBFNEFiQBKGTAPLGkrhXUcZwssFRtoLEH2vvP2Ucm",
  "key25": "58i8FU3QsjMXqnNSPuwafo1nCaLVSbTGbvNZrYbsahFz4yDPF84x4GuFLPBT881ijRuY2GPYySzmk6Hu4US2FLz5",
  "key26": "3aKuvRtqokQBcZTSKsWGQHmfxtC9Q81Q2f8ScwFHCDvGrxNBDwK93hwVDEGqzmNZEdjzYH593UpY9bHvESJZ8f9n",
  "key27": "5Ghx1wQ9JJpYLuF6eRvGGReSJLry77GATeuQXb72v4BkvMKxpeLmYMtscnqi8QtMB7gWcrFNZfwGs5QeYkX8B3K8",
  "key28": "eTiXvBxH5kjJiBriS8RRerjywVu8CQHTsyoA8kP5s7oRMrxh7irtRfgrFauspqdwLuhemSuKu4Uu5TngfsSp3D4",
  "key29": "v1QbCDK1cBToMM6KXNKWrpYEaqpJ3N8JoW1osNTgXxBLtiRbWLoKTCgtwFMppowTBwZGV9JLNDaC8mfzGt9mpyh",
  "key30": "2UjS73SrUMADbnihRQsdNRS7Jqk8UcjPhFJ9e7jFjRWwGYNhSNA6o592xr2PGxXt8K6ZnKocbKnWmAqvdxL1YK6N",
  "key31": "DstR31CtrheCsEmf4EimqHSVrwZMUyVuqprmAe2ka7W9yG5hAkyzdJ8Z11GNcLUWXahejZAQ4k2gdQgZ3PJAY2K",
  "key32": "5h75hDoLzJCqf77BHVm5Pvep2Rq1eB2DeZ3dpTNpfwhKbe1YVBSwVjq5xrnVCaybqTiKadiPRHbSWrDovX966cWC",
  "key33": "3sRk2XGn64kQgJjrADTh8ab5TQPg23ZQ4gGV7MHvFchpz5spM5HkTdNzhLJ6tkZq7jev9znovMU9uhp5qKVsrGY6",
  "key34": "5Vdni5rDeh79mP4cuXySAnRUNy5nZiKiXa3hTDqZP6nz2aeKxNGortWS4aBHvB9vAMLbRx1ws7GXLyTx2wXo5dYw",
  "key35": "4vVLD8SkYzWpoMQeTyDEMJmNJWj9LLr9mSHoPqUc6gNoGkeeE6F3Yn6LLSXQ3Cnn285HvNc4DMVgPGLhBnJr3nN5",
  "key36": "anamiw9yExGHfYUCPX7Pp2psEup6g5ksD8Tp2yT8kqasGKEyR2wPDXseiAnDW7pmbfGCdJW8YpwTFUXuqqFRx6e",
  "key37": "49dGvP2RcMwaRqq8bA4v58QgAE5ki3Mie9TPARBsCF8MJcmpai7oRzfGRrpvWEspSa9HACBLh1aNam6Fwh7nJXQC",
  "key38": "33CjS6rFUDdp2142MbDhjGPYrHwUR75i3FTaxcr3ExHrw5V1xcPZ4iccHiascS9MqbiC3xDFJD16BU3ufuXKwMdH",
  "key39": "4yzRmaeyZ21yJjaF4VYn9MNKUyTqHJ9B55hPdDUFWLkx24vPr4YKvxRhuG7QxgpgfmFfzUQaEAJdpCRrFFfQwkyF",
  "key40": "4FNeRzXfnWtvZ8kmR8snykhoX63PXMShMgNa14czeXny6mjcJGnwXxcMao7zTg4rwztifLsd2gBHAyin2XdS3xDi",
  "key41": "2UnSafwowHjmLfaRSDyBvzAk4MppvE9xdv8MDkSshuR25r1DrW2izQvjiNLqP7K1v315cQxBA4ZpECf8nMAMYV7J"
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
