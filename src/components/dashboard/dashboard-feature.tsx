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
    "31uq2DQxAYX1LVTosjr1NiYFVgCcnUTzqCxAjm27e9VZ5hWA4C7Dt3hTXNzr94T8kDt5WvPDHFiQ4u7yjEzc5wZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o8zYUopyHrErNcwLkitpiF1aP8W4Vcb26PgvB9fWVAKYHxW13bRPUJP5SnM5TjTyLWFpjceoSJkSnxJ4iW66EEC",
  "key1": "6uzxHd3zgNbmwmhyEUBX4SgTTBDifNjQD5cmGM48GT6DfGtdwYX93aYcfty4FSAcarWevLtmdUNQ2zroJdjsSEf",
  "key2": "5nnE5LEY3EjTJaFUt3xgkz8PgYDBsJX7LTDzaaGrdEzixwob73zCyBibs6PC1SwxZ8gbGmDyUthh6Vgj4YKEM2VB",
  "key3": "5zKG3sYMiUM5qVLLqFGjP12S3PEC43M7SsccN6nJEC3rVgtQ7kAhuzm2tkdcqu6nPtLD291UQX5E2Lpoz7iy2iWY",
  "key4": "2dm4w1txU28XKbtipsTXw1vfRKxXcRZYQVDnic4LNrXFgwoj1LtG7FWZtG9bqbKUJhnsEaq6VbumwHdhoR2xbHTF",
  "key5": "5uFTMSp2heJhSyGZ7awFxAYsU811aUsT1rZwvRypUZBPv27cmVKdnthcBAyrZjZYeCLfxW6L5vbCdjLwoLC6fnyB",
  "key6": "2BUdrWCoNQ7p92RVrSwWpJwsy62RrEYTHefTx2nZEiad8bHjB9eBi57xZdsx1arp6i5U8uEputMU1gfsYB7ewrni",
  "key7": "46Byp2dW7ZuQC1soFwSNhMepSHkghFDN54uXQqdjxAByWVnqRHKc5BpFSawh2YX9rkeHFkPZQHLZJXQyFURQ7n1B",
  "key8": "5G4uChCREugMZwY3i71WR19oMYthSseCaAsBujagPuptknNa7keirPHnNuS8N947wxjL8eDgrdYEkqX5phVJyRAh",
  "key9": "4bxoGrFrE6MHYvrqYpkXyquVRh6eqPKaH1tzrL81vkUuVzj3EykokVzKMgWqHUh2HkkLGqkXSnBdphDPVRyN8p2g",
  "key10": "r1YNMye8RvAzDud9M162B36wtuoQwRJPooettfVKUdw3vaCn4KdNGJ2qFXikda1qrq74EJzumKR4iKextwXANgE",
  "key11": "5ZQFkWqxa2aPUfcyQQMsWaVRcQ8Q55z1RTeJRPxikFFyJJtYodtuJ2uJMKSDSwC1zoDhHo7WTcpp5mpF9NJHVqPD",
  "key12": "2cJpd1CyLYLb2fJRPmc8kswW8RFr4wNvsKLtbV2u8HsYU6KBkWrhRu8jGUTqWi4tVd8fic4j9UESShbk1tcce4mz",
  "key13": "29tRh8R7NhjK9MBc73KWnzktTxywm2ztbzZsD3PGvbSMr4wWzMquhqfW9StyQhSSRKN5zscYJPHdEnVW5DBSwtVn",
  "key14": "iMy4opESLWgZ8bjuY2dEGu5VoaHNwCBM3tSQiU2VL9TDXbs8UV2iZTiPu4jPX4dRPdE7vuD9F2owdK6jWm5RRfr",
  "key15": "3CceDg25Yu8AyhanEbLUCm8en4j9oHTCcA5eAJZR5zgvZN7Q3vkgjJ5wLDmGDSgRdjCYpr9qyzjaohWRy7gZ6FFE",
  "key16": "2So6PRWjSvLyHZb5jkd38QxJKUZVVPUtFSNTbjjmdtbg1PN8U6bnDtgSgwbXrtC1wjpYNf2jemLsbWMuXwS43z32",
  "key17": "55295PhuAyqcZj8qzk6a8Pn1D4ZsXZbLS5t5M3Qp1GwSfSmQG1sd5EoXiFdBGUJZNDxKqbXJS5wxrfBHasLsaDZn",
  "key18": "2Q9S3EF1nhMdKFXn9xMzBmG7gKYZ4UgSCSGbXCLcm6Q5c5kJ2S7aArcLvVJjpjxJZLzda2t3Vsm47p4XJ7gSNnu9",
  "key19": "5hP4XDveq8iptwXhXpyeMRMnyLeE9uN3v4qv1wuGPvQN1BUT36fg2pV78fD9FNJFjfXVXbutDkfbNbKfEkZqCkTe",
  "key20": "MK1m6cih7RkN1sMu5KtUe9yxqKL7455EyY8RpgWE3yrtpYmHh6gJq2fuwp8zbUX6Dbb2WVH5nHHzcDrQqunmDtt",
  "key21": "dLW85A68BJmRADWELqUj7Pz7EzmnhQtsFd8bsbSjcTscygCGVhKepsyyk5EPr7wwK6nGTNqhZw4hSVW7mcpSA6p",
  "key22": "3uVRgSvqMM6jkwoURRAZaeRiLScjhQQso1MpyZRLC9sjjnBTNYXo1bKFzTks2UzLjpE4RyEENPnN9GXschFLfUcC",
  "key23": "3oakaNMZCHjmqZUT6vFwc7mqzTiL3HxDPegkemiiKevTH19UgWqR7W13zvohzQi7fJyZshigJUTPFtpQwYCN4USB",
  "key24": "1223ba1zG34HtsfNvByUyzwEUBapdeQ9ehGisJkfkkNbabP7oKchDpL77F6ysCibayfXcBrwdyPcFdaLfnZncMzW",
  "key25": "2T4dgG23m3sdGhQGvRLULprR1TNSBDjAazPr3WoBPSyDS2HDi7fukZE2MkzCDgFTW2YCqaCPYkhHi1kAADw73nuH",
  "key26": "5r6q4sbL5Zhe2PyxCX1fFt6WyEGgVneHoEA92Nr1r3jhh31oY1vDTp4SWJDrTKWsnShn2bPGE6fvr455abCGKx1S",
  "key27": "2yp6rkZrAEGsue15jHg723nTVAhbPnhD6JudMPXzHFPTKE9FzSC9BGzq5GVj467nVYhUG6J2n26ukbiNSSX3k4A8"
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
