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
    "4M5bHUubjeKTbFGHaj78MScLftZUNoPbC2tif3bdQyDxuJRUwDddB3aVGjkwELvJdc375px5f3xgUzVhNaT1jnC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHtgLcqvjaSChfCZcyREXodqYFNcHu74Jzr7d87Uf6mtXUsb3EWLXPuUaN5TPwD2rSWpX4vPaK44gU1KmxudsXQ",
  "key1": "4sivimDkrTTfCbSM5sa9Wti88gw8XTiN3dNoQN2oG6fQTVdWQpwEqX8pK3EPomHjsxXsUXZFGfVXFxJqHgLYnbUv",
  "key2": "x7U6Qyy1Y2A77UXFiXEXokrXY5AEABaxWxkAGrGxvLCzmwTo1ge1U7WR6E8zasTdDSiTBr4yWXNZocmQDw8B9CD",
  "key3": "3zGJKB6tXu2FB7kQqdhJn89UNY757GUXmHmarAJBGA3gDHZxpNxsVMBzc1ZAhSKxZseCDiC2rCf1AhmnTVGW3GhX",
  "key4": "C17oJuWze7jyEmswa3fYEkn7zvwciswu9RTRWvhY5N9HyF3wAp9FzgGckGywMerEesQjzfYjsfYmMrCJ9PpGBJV",
  "key5": "5tyyZ7cG5D1DNrmHS6uWZtiday2ZpKzSLFCALzxiJZkQUrU737n7EyRSWSVUPBSSkRCcd1CSorsi4G8oQLWPnTot",
  "key6": "3SUm7RXZh2hP5ihZXDW7MJwR85UsDDZFKbZ8otfofM5gNqMcD77BmZX46q3auowkuiCDAmwZVu9XFumUK1mLUtiD",
  "key7": "4yESqNEjKNzhdJrU8utkHoQM5Ve7KTHLz6Z6HLymDTkgMkQo5P9LxizFhuqSNXEK2T983VEw92dQ9f8TewWFzC68",
  "key8": "5h6mnzQNXYAEsRpfGiHCEAwD1Z3WXPFbwTTcyZhtdQigAU1vNAbTMAr6dY27nd7U9HVGNxvwTzbcQvBF7FX7bD24",
  "key9": "VqcGchg7sYhHE8Tuu2sX7WcLt6mi9Ydkcd7nV4FtRvPGdYTKFbKvnH4QJs446kedTZkcbSwreDCWpXdTrQFMSyh",
  "key10": "5Kz6KPh5eZQBeDWdYVfQiwCNL1xRsWFi2L7EdYgX7e2twXeJyA4rVdoPV8xScbEnKCxeYwqRPSeLuTdwC81KD4Kz",
  "key11": "4SG7UgbLDDPPMmaThqNTLXTHwT26aZVeX7YywfogRWEWsgQki7LbsEMZXDMdUmBaZyQKRTwwmh2EmQqFsTRBuZpf",
  "key12": "67MXcKgo1qe49uA5mHgB1NQ9gwAKEobBBbGSHjuW8ihgLanbknMEKToeArGRYdYU1uVJgRGyUyuBZ74vzhpuZSDk",
  "key13": "3QZEMzwrBL3Rts7X1heM92vhTJN2ArpcjZAgNU9Lw1c5LCjKgEWS22dNrDTtFPjvALE1jaGJTvuRWdrED9vx4f2p",
  "key14": "ge7VfeTfD3XQTAiJovvFZ1v5Q2UCZ33S9158acCTJsqgiCUQBxe5k37chkJGz7knRY3EQcMYZQJtksNs8zJeLyn",
  "key15": "4EBjruV9pyLrxMj9s5juzWB8BiDmcBtrwG9noaKDcEzNvL76B6E1viaf1rDj59SPstbwkSbA1Y3XtxzLqqcLsaFL",
  "key16": "5RBv5ft8AHpWDjEkRmTvJ8AVuuUj8uiCagESJasLhpELBHTGUsqCXij1qe8P7Jk27KSB9xgi8BLdQHxRPrbsfaKg",
  "key17": "5L1kFpCa71qUK7i2dHUrF7r6ePhZc27vZjp3PzFDf7VQs99yT4rdHSSwhUY6SX5zSDpA7p8uhJPKGbmtzrnv8fUj",
  "key18": "38urqrPo3uDJ5PsScvffTMDZ8GqHYzzerT4GMcpNCyvUBaxHvTC1r5iRZsGSvi2DhjLZ25wCrymVy21oRsBp7mC",
  "key19": "5FLknMABLZHyt1HffFLGbaB9eCEGgBYo54Z2oRcXFQH3cZLbMjib8uP6tfrsAZMBN49myqmgPvpWeUjC7ZZdnSAN",
  "key20": "4nGvwzwT2Uq4zSV9jug53npZTE2Xpqfgy9BGoGP4o8WyHGHqsQakvCbZYo9ykE8PQW4vZNeo12eiA2ff8N3H3HFw",
  "key21": "56EFpLY88tbw3TwzboukLj9ruZUCTZQEgkrWbkhK3HTpxF3nTPmcsDaBMCszyXGyGuEu8Bd8VuYo8Nt8pB5MzijE",
  "key22": "YoUkUbXDgVeHQ5G1auv2HHhyRp6TRh3gPYfsNSexE32tiGoCcNroQetx1YoxJ1VqRF4B2wjj2Khx4mydhiw5XYY",
  "key23": "4mqoD2yuESdspG6q4c4S9dVBzLNqLncyHA5LrfkRN9fHCAuLmetGSu7kuL5TUYRN6RgF2WrU5CC4ZQDvBxDrEUNR",
  "key24": "3SAQyzkr7tGvAwDyEywMUUTmCY2NKEJfxhfDPzKNLaJiHGd6zMx5PAFC8YzHrJZeaMjxmST7xRPz3TUSCHR4T71q",
  "key25": "5sbQbTX82Zbdibufys5Hz7byDWzy4wSQxYhDzRPfzAUxGmG6w7U5tiELCZ7QRYW5obrRZjEbTNVQeQF5ANBW3wFY",
  "key26": "4DWa2qzSfcrhhew762tSj4xYDkA2i1fEA6edLuKQXvvm6jZgUBhABmtbyM1CjjpmCveL7TpMwoM5pGLNJBkDFRs7",
  "key27": "4RC9WZPwQo3BDdH1UuEKjEb8JzkD1MUEPeFam3GvNr6GXuBfFeCseCCFuTYEZms9QFZ86Ga99FmwYyuJKbFcvEaS",
  "key28": "33iskCXpyBmuLYHfgDxYFTaNLYFTmqs3ULigJHwvS6GcGznMfJ6ermQdZd9DFEcwZnTjiukKZea35h1q7sxM1zig",
  "key29": "3gWfwBshFHU5sXBU4FPZASRPmVkj8ZByDpUNnSZ8BN6kZ6cyqKMAV3kFPu6NRY7682zCqYSGGgY5X9HDq4z68TGh",
  "key30": "3Wpr4c9jcP7qbsecZesvZLfTHcw7rxdAFhKKzWDdt6tTvjem532nmEvmXc2rsFWdYxUXKA8YQEjNE1WjPFmpqxRc",
  "key31": "4tYVdJMmTo8YeMk1fgX3zWR1AidV7aYSe2RK6boiB9QbcjXNphKRMSTbdiy2L5E4rP3dpHUzvud8SZ21qbGuYDuj"
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
