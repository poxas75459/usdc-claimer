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
    "2yEArQNyNUQZpxcGAXhC5m4D38JiAMedxKBSDCyHrKz7Nb6UMektzxYHAAYLsvqYCr6UHuh3uuoDDiECndovsnMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMwhif8y5W9xQa9bPKu5dV6jXsWjLoMMgmb9N31Mg51jzqtT8x31Er8ewYVi4spZQaLJWU9vQpLNpM15AaNvmo1",
  "key1": "4GJaSvLwxpG4YdjBHoV8bQvpcPt5mFcJwuv9hxTSqeEXASGJqiEV27N3Xa7p3FiYubZF32weoaT7mHcgP6Fa6FHL",
  "key2": "36NQspFjfeFUn3cUA8Spqjdk7RHDXQHPNZYWcSgHyRj1SM4VuTPWqY8n4SYjJWGUFxeYC8zo1f3D764jJ4BxtCAb",
  "key3": "4wzZRB5DZwvFnmzy1AeUw4QhjHXhaoHp4uyHVgTeVFithsuWfMhbTxJipaKZK9EbcwAVE1Tm685wjdF8FJcC1WBj",
  "key4": "3ABihtXfKwR2e5pQHkUNppMbyiWGhRU3iQBQYQvUGz6uZSE1pzXdX6Ln3kQXwAbGofsHtPAauN8uM1qfvrjxaEbh",
  "key5": "4soLoyuq22kopcaVwVpXKryChg1FyKREEeQYHjpnz8GKK4FvgAequ9tQydUw3ndAK9j2ivYgEJ8CfxyAzCg1dPaD",
  "key6": "4MMiwcMfoEKFv1SerFW2rBf8WBfJVqfPZVwzu3av2pD1pKuntciuomYSw2m6Pz4Gnj65yUeA7vccPu4rrofQeciX",
  "key7": "56moGbMrqXra35Bwt6LmEmJJMSpkDtsRciQWoZzUyLHuwfEo5MpHWowQyT2ixY1AWi4WsciX6vuLFj97Znfsz2yF",
  "key8": "5yDrBLrBPcPpXZRSQRW4WEFeyD416Q86K4WzQhpaPnbcWaohjiKJeRVm9WffeDaaYMZUqmKzrtFxL2QvX1AdrLwS",
  "key9": "2YMzgWMqA2zQ1kD2pkAa4MmJEcfAqeWJzRL4V8PVKpS27TD7jAHp9BX8h7oBEL6m36RH5Ay11RByRBRksEdq2su6",
  "key10": "ZziRBKvSqtoaWW3yn6XnNAZd41Ue4VvvKw1huqsMrhJnK3oMSnZdiTen2bkLj1DDoexP5Tm8urZ5NPVRGn6AN3V",
  "key11": "5jiMUmakcLKva4PB1DSn7erv8J7Y2d8NXF9QfiNiz5UZTpy4uCGGWT6pZHUmCCWYshxFQhbNcvP2o3HSMaomVNzL",
  "key12": "ChaG4sDgb9iSHmJraT4Ji2znvGGCquCa2bH2UfxHb6jUwzZFoz9ppnYuVM5F9ZrXL8HgX4hGc4mK3bvHnFdUnWq",
  "key13": "2M4WmHkwVa18KAfpVFS8gzy78GsWW7XcwU3zCjXtapGgrcggNV2shYwurX1TR2YnNpuThgxD8mJg3chSKvJL4wj6",
  "key14": "635ACe7MWpx8pVgib49eiNCD5omDxAqKLybuyYMGVFzvXoR2LTPmsvmHEhkY2AADnShs3oZDYRVxFbXxS3VQHfjw",
  "key15": "34FwHaRbizu6QTtm372Fcr6cJz5FprhWeKqMjwpSTmYfMkAvPKceneZYKjwzvYeUr2f7aMsVcR8UgDPL2T45ZwUa",
  "key16": "2wmeYiZQJHBs8c6kPGoiNahbqwa351Cujbo834cQX3HWrNxLjZKSESLZ6wBzuTqsHM4ekzMTBnMs95YyADcbdEdK",
  "key17": "5ouvZqW1VmzCnGNMk8FcyoE9yWZYmyvs8qbn4rvCcYxfhQVnKu6VqgatGnmkbHJGBHCLfVoV4poK9EkBRBYcnffE",
  "key18": "adapENkogCHtCDrXeFjhht7NYhCjXQJn5wvLL8AGVz7EJGhkuA7hBZAEhxCNxrKjAeKMGcCkfuGeTifRe2TSTvq",
  "key19": "5gDYZuSVmy9WvTZ9fhPgbLL4NCTHCD81nLPYnGoanRtPrFtsXGeu7FZ9qcsAJfXtrkxsPwfoWRun2qpHXSC59v2k",
  "key20": "5Bg8RiKyyTGMkW9jEKZZxQHgzvJpP4pnsvgCPH8v4UNhcSMm8L4CET9dAWAPfuEjYNSQGrhGT3YbK1NtDvRYRudv",
  "key21": "5sbP2zQ1AtCBH4832tknHnk9mWLeY1zSBJiGehFUrg4XvsprK9Ssx84HERGkwC6YewuYa2qFwHH4p7m8uWkZ56cn",
  "key22": "4PmkexNfcmmB2mFoqnmfZTQJi6CFnv8AFaDzzAFEUnLMC9ZStywhmHA5w2rYmGm4oHmcpRt1SmTAavCURhLSyLod",
  "key23": "3HBAKdEs9pRmSSNvyocPse4vjV7ka1XiZ6iLBsAP2HMovbnozPSZCLEFmRgsAp7ZMUEpyWXyJaB8aiGcPEZbaLkc",
  "key24": "2NtCSWzGopEYmthk3kYJCAPLGYByXBFnELBcdbBfXC1ZFFv29ox7A2GQb7GWwNvbXsfRkjNJUP2Fcy1ys5dD8JJy",
  "key25": "47XonXceJ6s8vR7CcKq4gG4xumbGgDMNfDWs2B6mvL4Ji1jbw2jjuJJtGmWL4QdiP1xsDBQL3FYLzB4nm9NC65N6",
  "key26": "5ohAs7Bqcz9GtbZNpoDMzws7t494F6ZCMCASn45JPakgChCGWkgWxi8ghwrTiR11Jh1KmPi9cErZQ7YcGEqRERh1"
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
