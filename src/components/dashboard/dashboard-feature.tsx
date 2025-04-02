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
    "5Az53BYFHYfpFry6he53HTXssjNmmuKLW5Bvm4Km1w1AsEptFa2kLJpfM8yKRXYD2BiHXiEo396Vwj4buj9i4EbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54H63U5YjSqejSBdwGyEAEjKmWZyQX1S9AfjBANLn3ETeVFG3LzHhbouJh47nv8pzchk1qJ6978KPF9h5QGsEAGS",
  "key1": "2SG3QZVshJchHEtBhVwRVfjDaqNFFHMuswwtbct5pR9PpgL4pRFWrqxrErNpxtsDHasKrTqLN2mp4dKgZQpPby2i",
  "key2": "4sjH7ff4iKoEQeB9ffvjEAXPMxUg7BFqKaDw1qY84DhmuLbC5P12yBakJBnbVhbjpUeEUWuWydFdQDYDzxSJJ6QL",
  "key3": "58PMnF1k8Wpo43vSZB8rmnieZB5sLGuJKEiyCL4gb9jgA6osvuTCHibuwFgTJ5Joxz6NUMjZvp98Dt8VCVhWugSS",
  "key4": "26mVpQWTtT4jjwPzVPPtovxmrdPsAvpGq61UwmopN8NiUKk2RAigk7MuAJGbi6ph2u37qevEgjYX5ZSYsWVwBBkc",
  "key5": "6MDXczVRoc9dMADQpL6HGZ3B7NnboorkFgXA1k9bvBssHLpxYYnmLhbwhKzgeevrNpSyuZjTg7zVSV79Ae1cqWr",
  "key6": "aBDmpkzqVyZBwzcB9e43UtY58QCrd2xPNaxx5SUc884DsdZ2yr4UBPUYpL3j4PaHAk5L2cY9USMaN7uWfHjMdCm",
  "key7": "4VDzUny7uc4JC1afTFnNFa6UuefnPesLx1hXV5774ffHw118kLzqJjPTAzxerGkJLzNGRgbihRa8SUJT9XxWnMAP",
  "key8": "5RyNTKWuhdzKJX65tdKv64wL2QUWwaP7i4h26v3C1H4i7syYK6BZt32jcQPhW8Hr2HwauZQ7qRxg7JVgWmC8AuPH",
  "key9": "2t2iJ3981ZqmjyY3KNSBsjKF3juJiyutr4unpgeVe9z5DwKYVDhoqbHfxUMXDWFgQALgFTsr4baq16vZex7QMfV",
  "key10": "5YJMWD3Zrm5Aabv4AmtRHZnSCEotnHiyQ9yigcQwNqyEfGnWL7PTB4rRjXKLqZpVzpPW85Pp5FyeNMPQG94z44J8",
  "key11": "2pwCzfz5VU3ExpEHmA9LSNertBKfBdbZ6G4BC5x2EPqcotz4A4VGJVe615CtsvrkqdEDDudYmDpBqXAazUY1yB2w",
  "key12": "5DfW46R1RCd8GLdwJ5exupxoRsogGJTiiQ3ScXjcU1u7KbDrWEMpV8zbAFk5B1Xgt1tzGzPSXuschN1RXtLgmf7K",
  "key13": "3wBVp3JdnffSbaUmigJjBAAF6mim7XBZBtBT5oYfaeJ9EPyxLZc9LMerHJRhZQsJAtNBLKFzuSNNPWemqAV1AjDj",
  "key14": "2xE9ge2DUA44rarhNkDksVJghQxi1i1g5fK6qRGjXCYYP4b33twstd7P2r7CrtXorrzEEupFa7ueN8F92s527gy8",
  "key15": "3StHqWHNVZikyjfyUbD7Bozo5zTWhA7Br71kVtq6mrycb83C9Y9WeqKwHFrFoTuPcQi3ZwXDnmj2nKZMpx3RAVSM",
  "key16": "3AARXRipTLJRCmCLhib1xFKWqDx2vG6GLEyEpDAEZwLU8zba694idn9Jpc96sk26vqczYfJ9op6yQRzAvAnSWVfU",
  "key17": "5auZfZU2f9pudoQoayZD5owhASsfymboesPc1t3VuhuAjX8LYnhdTDquesZyJo5gKiF47nsHSMELNVMa5y29mFmw",
  "key18": "5g7m2HUzvgubrmkfN1xQmotsGae7j7pVrUTxo8fqLn67bvdE9Qojq9fnWFp8ADFcWxNkCywk5bxLxVqKXV5H3B4t",
  "key19": "53VdifjEvD2uumzzn2GVopAJgvcbcdwvzPRbyWSnCuiCKEX7RLWRYMEbHeVRYgaMagR4J62tEEwtS1qPykL4Lxev",
  "key20": "g6D4aSu4Uc2QWS25YsX9WZAtQ5nRRpnBW9rK21TC4jkFhz3bQpvjzWzf1scsM2H7qaN38NAK65RxT6EjgDzTYWh",
  "key21": "4kMm839k7CTSoWJPTnEfAHebB6BK1K3YiAQc7X9bqGYMFY3WHE6Wc8kr9xTRMEsXShFwFEnJLKGCzGPKu3q4XW3E",
  "key22": "43xUcF4EqYvXWhfxcHC2ZvyrsNDqq3jyo9iyLym63Jfwgx2pWU4F7md8jssxeP52m5hLLzVYLUakTTF9ugzbXVGi",
  "key23": "Ymz5e3SAjsjGK4eNX5wnDyDbcXBwBExqXqZwS81xSHFV6dpzjPRhAwQK6ujDRQiqcKMD3XVfG2TpGhkg2FpbMD5",
  "key24": "4HbwS7m4KwmXZ23SKMGy4B2YPbmF9Zr4scMpw2mC6i1GJ2jw1vJtdoeJnqXW4qSGgJPaD1ZjnNtnoJsTf8RjJfpX",
  "key25": "57DaGSwPCBmafR8j94DT2jsHgjrzVDSea3aaqWP5V9zseCGpVjVZ34eufAys28VwhsneGKvZDN8ySGnPVTDrbFua"
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
