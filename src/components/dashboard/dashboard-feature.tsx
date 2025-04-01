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
    "2uhVxxBtgdKZGkrFzEoPKvjBMUcayvA9Xbq1EQMp2gYxT2jRg1wtvEjjRSvgUR9WXLxvsdDhUv8x6nJnogBqwuKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jBJyJ4bjciAbnXJaREDGNdhGkTynDtTz2zW53zMRm2TYCor8dBRBywAZBPSAnESVEADwm2i45ajnff115BkcDf",
  "key1": "4tq6PVFYoiXsqjBJ9cnGcwywjbdcRRBtWKdVHaNoJRGjv7By5hQwjraU3YLQbVkNpLtSdzBQuy3oiBd9yt9X1f9d",
  "key2": "2XuUWxoiN2VwFRuWm1qTVXTGEY9zudZa7rReeWAiiVM5Wyb56fuPPuttJa5cPytu8PFPbAynjCo58vcmfruKsiay",
  "key3": "5vLfsfPp4ZWPaUgSVV1sNwZu5Zvew5QDX5mgpVyuaA9Djip31aKbdtcDBKTCjfmJfmcWhTYYRTDbc4P1UTHBs9yf",
  "key4": "43uzrw6ah8Fytfovy6yZUoVrxkJhrdex97qnEmk5rx3Sj4Pmxm9jKP7U3EHXibqmc7qcq35xnczXbtpc6WajLeop",
  "key5": "isTLrXrnLq2nwbCogso71bWGSsXJLryfX5DgXXwrtVXMaN6xEoTcaLhdYurLBZyga5zJ4ogXJXqZMTrmj3DNqEp",
  "key6": "218dyLom8Mpx6kqYVubKDysBZYmh4rSrzDCpspMyReybKvQs69N6Z9Z6mwP4uBA7khBQyujC6CSceqDAQ6xCEnU8",
  "key7": "5x9WWmKVzNM7sYMVJhDKTSBWbRGAbXaoZPXRVNoUPCuF4suudqD7E7VaGJqkmSKStHTyoiuvXK2Du845CaxxrG2j",
  "key8": "2LJG1NA8e4M5VgseAY7PWeoZeKVi7iLoqTwXoKQAiZLqsgSKLaeEGyPjgouAmhT4fhbhjPaVwKFgmVqxktoRjpGj",
  "key9": "4pSzNPhDYyErRiGHzHbvKvJ7c4tGdBDGFP5yepHvA5MqwASyVfYAh3TavTqBD7GY6btA9rEmkCu22ikj1QG6QpkS",
  "key10": "3D4GQYNQ2aWb8ZFiutE5UT3CpPrumyyASbY7SDyPPAuLCZt2sNp45Q18s58UMQ4SjejtJY9BuseCxrqA27bHyQbY",
  "key11": "caxkzZPtzRNzyJqmYAr4G1oLrBUxC27ShSmr7Jb2DGDr7EvbDdpFtZxMhXvwUGYyGA9h8s6TssCTXLX5kjWQVYD",
  "key12": "5LMNAz2WWm3NoN4buDfxdYPEGaugANDZJR8BFfy783Votu657fbxC6t1Hxo6torqdMKVxbP4s1yb2BRZUHDiVCah",
  "key13": "4NMiFESLdSiijNqKek5MnHWKGHebHGyTLFGXp2YVH4WNEQfkAqCsKg3WrsAE8JKiSvD1uNNsXrnAGC2GNR8bKaaJ",
  "key14": "28AejxDpEpZQaEcWQMWkLWFeymsUxdb9UiyF5NT6MtHgAKG6Cqqmxasptdka8122rXDdmPFwbZFpSbsYvaFZBNZc",
  "key15": "2dgX2V34D2ZFAsW9kGG9DZTsi9oHDW1uV7TKztjU17bu3EWkHkgVtGRGyftSH6cte694d3adoRBfvtqy2GvqMf3f",
  "key16": "2RyNvdVBresuo5w4PbDeJo7M2jD5DdwD3Sopa8dkU9eEsaox7EHnhoMafZp8m7nuyFyBPGgLbJBJ7aThzhYL4XR2",
  "key17": "47zraWPZHHmjSasiqkvuiZJC3waXyGJFn1VXS6bAqHUfxRo9nKP58tdPrEy6dz7nZ2LwYJz4M5vcGfddh4wDKpQ6",
  "key18": "4fojF8TWSUTAojTau7vvd5CBThQ4YpagJTDiAjKjNkwA6oat95MXXxFeipBrCyk6HbqU1xYGfoxXxMPYpcyqiEu6",
  "key19": "sWgRVBGp6ZfBKLi9AGhALVoXtF94occ6533H1BHrkhzg1seKwP36ydP6v2MX1RKYQLnY76rXtGVmkVC1vn7YhbS",
  "key20": "34sLRVQjGSXNumXGDxxnZyF1VVKXCAxzoJFWLoDM5vFtkyxi7S6oRYY1MgEEgfq6288MWRqHG7Qms5QjoXVi2i1C",
  "key21": "3o5Vxm7toTFrfM177fYxiXrsxpyZPvq3BeJK3jKJrg6YgDDkcyTpQnaDoH2mcEQai4HEZQxr2eZFMQeXYyvvP5eZ",
  "key22": "22wPMuF4B9AUdUUp751fMuyHD3KtMzz3oXoUptCyAqnerHtQrPTt1WAzsPo4PLXCZ9fr3RTHy5ZSdS2y22fDK7JF",
  "key23": "4XBH8tVaPQ7gqtapXM2jYd8gXLgJA3Zfj8f7SL4ic6zoznYvETU8x9KagzRRDUyyXkPEtrMSmNy8mVNzpZBUqNfy",
  "key24": "4UiXvVmMeYWFtA4Lr5HnftxkJmUdD799DR2wEXnsRbrMnTEDUQTpJrBMkmHVGvGF7fVApXEP9P1UtnaW4Qxfx6Gz",
  "key25": "26EzWqK9fie1WmZ72BUzG57kUYAVChjS7jghNrDviTsahG5Y47XcKH2B3gtzUe9pfSmiwPPZXaPQqruz5bQ2MFfh"
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
