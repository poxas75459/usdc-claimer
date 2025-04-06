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
    "4d2RzXtsyNoD7xwy6QZRKtjmED9PtQKEShyANiHryF2sUqQgU4ys2A57d3zCpm1xDSKm9KNLRjheo7zB3zKMHkFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbChxxCbSqaGMEjZyktWKqY5W5au4kcDaEsBARGrjzkrdAmUBuxKfswGJD82beignueWkjHipgtXwavjoyrYFbB",
  "key1": "5emJcMf9Amn48oYcLS5BaQRRfbsczSpqQVUJmPnvKfSi1w9jH4mhxMQXWS2WrBJ5B6JQiA8Re64DNuaKEauHHm2R",
  "key2": "4VdVTboK9LEzx2LQKzzxCwJnZKwxTHxvz4oFbGwWo5G6qsZmHtB2b9QNgLEvWtqNr4fDHeGRtPaBYpUS8pkq9j44",
  "key3": "34xDa8ea4QVzsVW3AJcD3z3zg42piWxFeRSi7nWXcZyQ83tHBD7EqiRmppMbLJE6YBFz9kJrvpyAmDWkxrPXTKuV",
  "key4": "2oBHXyGSErNZTwCECCTaand9yGY1rASc7Mo6jz1DJPP5ZZrXomMrj4zCDuCxQd1knZvRBPHig7jbXF46H6JnzzYP",
  "key5": "4tk6YRSAUGVMXyYK6xysLwqfQjL7sXkBsZfXiz72o68cxov6SxrV8jom4zHYkMSHeJQtX6iS4Xskotf5nfFAq1uN",
  "key6": "2ErToevHJPCCDhCURBE878dKiEYgLpHKm4BWdnw7fTQgJLayDg7vvPz6DGftbwiwJJSVyw8KxTbc4gJatsJM48Xx",
  "key7": "2ejuNXTsAh9KxUVQTCJgV7E75JViepzbGyTT3Xojs4sNpMyh7yxsgqeBtGk9bgkqDApfbYxRXUhf9cMp7V82y4Rk",
  "key8": "5SbvtgCBjuisVTjDsb7PTKhM4ZvX7TYXziYrPNW9hZdDwBLi51G27R9KHVxWBUpHWCqAZYHrU2tb6PBeabXnetzf",
  "key9": "4PgktW5U1DMZv7tRbzdz8aF4Z67acTEF6W5Uu5Yfomdbv9xqLdq5eGW6BKTF7TFgiNaeziToLvR5JdSKxmab5soe",
  "key10": "5dvKiKgj23KknYESysuX2U71tpKGgDpznNghE5D4919Tivyj2S6FtE7RWVb8TN4SENxEq3jWDdgAoj5PMrLeqB3",
  "key11": "5NxktrnfwCFobh7dzqn144ekZUTLYhesVrcGDWM7VXgC52TescD7KE2Ws48ep2NUwL9SUKZmfCwRbgFztAupdy6p",
  "key12": "Kwy5Wfsnzom6ki45svqnyVVVD1oMXDpFAXVJHV24B4xaLx6vmQoZQzdmY514c3utSym44WSptDJNRLXLwSeEnpn",
  "key13": "323nQFQdcro8MGcbvK1MKRBkNT4MsFpvvZnyV9oseotr1Y6FsaS4YntzCSNEFbZcrmMqcTFycNEyrxMrhxwQXiE2",
  "key14": "4T5XAAyM8bq32uD2PUN4Xw7VwuYZnCex37htqLTnPtC7V8yWEdrhYfA81ohaKfpMztBAtstuuLwU4Sx9d4frFxg",
  "key15": "3V8z1SSqNMe4mjuAek4TtGb7tBjrrRZfQZGoARJFoHiczFVzh55vy1pvcY41M3wLrJxV39qgGYDgzi1D4Fx66Hp4",
  "key16": "46sb5EFatqKvWyp5bAswUc76tmrqRd1jpfetBzaX3K2JgepNGGSeN5DF9KjcDpMvcjdsoKJHCmUkTSRFW7rdb6ZU",
  "key17": "5nuqDaavtqvL5GrxB3fStgydybvqz3TuPChCtM7ny5bAELx2wwugj5Nk4igHNzrRrJnQavru5h7CyrNMPVeGhEwN",
  "key18": "5kjyWNa6N2ZFiNsPeDNzHVKuUTnYE2rhPJc5QmA5DQKDZ42VaN1bn1ox1SdXpk9k1WriJX4C2dUSf3zMJGS6YPwk",
  "key19": "7s67TVGzWU8SnAWgxRU4gAJgmvJGZWXYujjYhwJyoauASuPFnGAtrn48ByGatQdUbZ234joaCXNZJo1AQMV6FkQ",
  "key20": "4PjrJVNQ3b4551J9HmKQm2niHVbFY5USsZaMbjUHKnK27suVrWXqVxj9WLmxXz5Ldw73yeVvAekLntoMigSwvV1H",
  "key21": "4rNEU3cURCefTwpXp98YBKANg9GkGBEJgk5VsDa3jg7vuTsPj7cMSSaRYDTJoSuznNqgApLPArE5FJbCdtR5PxJ8",
  "key22": "273UB9EUhet6K6P5W2n3Sb7ajBtz9p6ozvwysRrThJS9KNjJu1vpNadFhxfHpz9Rk8Lxi9pmuonnNSAuC5ddfMrn",
  "key23": "5cFJ73piMrfuxQvyyVDRHDm5pNgcGMvpaZmb1UHACG7ji1ctdbLsDAhbDUvx2GTaak2yTxZzzJ5r3u4ni8cymQyG",
  "key24": "5i1bYs3twLhRd6V6n4b2PmLbcV4B7F4XyJznf2w7je5CuHiN3boAbCxHKt7AoXBHSraCqsKgmMPFPPHHFeB69vXN",
  "key25": "5262L7HeqmGTzsQ6x2deRUSnZVjKisYwxysWiTs6jHD77mDuz8CQydWaJtMzedEkAqE6xugF9uqyjPUTYx6owYkW",
  "key26": "5VPhgeQ2apGoZkcb5hfSbjhFUcMSYcB3ogZwtB4URjF8CaYCsSBN4mxVk9qGUsEP1TKpRtE88me3AfDcfQvD3r2J",
  "key27": "5SbRyFiFndxMF6USbocnQEdobYxsteg78FdNS5wuDxj8RJ56KC4QLKagWdtqc2VJk4r3jJ6y99AgpyG296dDqG2D",
  "key28": "3cnnMoqP6X5EsyvnDD1orarbZ5yKYgSrUQ1BgzsJtWRqccwhed9g2nzvn2WWib4Smw764AxekxK9CFJS4M5AjRKk",
  "key29": "5oPxQtgTS48XzeuaVqHzt9qamHAVa1G962a4Q7xSi3AxHreLbx5SXBTFmRkwzfWEsLeeYu3i8TowUngDtJHr95zM",
  "key30": "2fjwP41njKZdVP5dpJUMicRM4it22XA3SR73LvEoMpRHse8rsocxsG5Ygkx6PYCWdLYhRkkG1mhgqebFYeY9vxX5",
  "key31": "3PNyDCzaSrq7pCCYyVHwPfiXnh6mpUuBPZchdADbtBHawi74PhHyQrSQv9pgStRZn6F6mPqe9UiTnhB3J5n5XJsq",
  "key32": "49qjzt5PSHdME2zEuXTu15wvYYNrij8tzw7vy3ZgpgWToJjxiftcau6xHMRCQWGDwzot9x5xKtfAjte5iuprDw9X",
  "key33": "2tBiEdCpoT6TdHoFYVChbph1KMnAJgftBRcM3YAiBy5sUftRgNtLtHSZoidvPHjrJ6MU8kTcfmMBE4uCQLTxFfCk"
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
