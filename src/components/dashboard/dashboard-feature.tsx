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
    "5jh3EfB8LFx7wRRZkbmPB41JHvWA99tcGK6pUYV83jXptw87dyd8MAhwbu5oGKYijDYBv5UirR8JVjKeaz3pFDrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrAZrdfcCg8ixZybhKkwdCoZ7RRTbMmMmtf8J1S2Me517yfS13yGoLjWEfX5wZKKbHM6XLfs42ya36UwGuf5uZc",
  "key1": "4B2H5DzisDrdfGzFJ1XkgXXm6NHG7MXAAhCPu6cBfREefAsGNryKP3cqFJY6tC8b2ZbUG8iiHTtT5LmRmDRdTQhf",
  "key2": "4dCWx1HJoPK1xVDD4eqwsVqVskQdCq6gVqDg3kV5KbeQJafX8VzUgVeHZ8jLifZjv2njZytbdRDvxnXfPEGwrJov",
  "key3": "53H3BAEDZ2D1NY7fj8MagMUyGXKis8ZyqNUhQKbbo99Bsk9gPebdQVYAyY4ccTytnCMQncJeWKpApEeUxuDw9jMK",
  "key4": "3S3CmFrdMC6Npdr4mF6dnq1eKJe8jZMPDnQrCbpLVYgaVhn4ZW2msFtuAbBq2mnnHxEmUmAhMsjLbw3qNHd94WoP",
  "key5": "7zwaTxJeGSDwD89njJk5g8xgwX8AAMWNfbMPY4zbnACHzGYymWxWkVk8uMb6uqNE8nPMTdwKFHu4KMod3W7WbZ2",
  "key6": "5Uw82xpjkpuNzr4kcnQfgtHwCZnh43LPePadW3CDTLCwiUUPF69aaF5pPxVotUQSRZmarL27UzvA1MX74uXqdPTY",
  "key7": "5yBk5t4JBiNShyi7UVKBmjkwjJ5okc4LQSifuzFhqcsXGbF6ta8Pd6Q2x95XjpNnxaQ5pzXj9dqpeCgsMYYXdrvX",
  "key8": "4f27qiPmZYSGi89sg9JnutL6jH87fWaVkpe4j2yQ7a7mz5f2M2gN1WrCC38PwgjWdzgC81GGGd3QBnuTR4eo9a2o",
  "key9": "5Vn8HMQ2faZ6BJC71BfdVEnBbXTnfsn95cn2qkDU7nuciF6rHAGYUALK3nEXoPdbNFq16WUAUBBdkHDgLRdwB18n",
  "key10": "5tKctM2sQ3paDK9on6vjCsbYz271WmRe895DajtDBk5u9yj7Bp1KAty44DLigzgybo7rdjG4NdRY9feg7fwfJCFC",
  "key11": "mfRShUs5Zgn2XD1BVRCVoeuFeDfRJHxG4sVHnfnrNfbPbUYDkdajLFRBxGUZZiG1zNt1pt6d1RrwbH7cMf2VK75",
  "key12": "5v7PMdW3KpCKk4BMwVmspQaZ5iVp47C1YV4US1sUMqdrQt6FuXaMKLmm5WaN67ZAHW6icnKH6SycpBY8Ty6VMV5k",
  "key13": "5CCA5aYbBWojkonLMC8yQU3mSBn3S7YJsFxrqajmJPPkS9Ggdi2A4V9QS4b98tvwegvfManBZx9FhBEt7yYymahb",
  "key14": "3PV1T3U8SJQXgdwhKygm9waX1c2VwbkkCkbeAFA9fANxwVmRdTKbAe2VsTg9q5DCFjrNyhVETVrGGadMKfYpE3SH",
  "key15": "54Mjf1NZaZ1KjhiBCMHqF892PaUpYhpTLPq4mb3Vp96HaCXEfNguGEsWUu6yTUsLR7AqgQrK3bvGUPUCuExiYpxo",
  "key16": "5J6e2p7y3EdNvsrLZ7bmfhEDqEK9TazyqRc8hL89f1gS6eRHeHdRcVeJfXjpMYdfa7QcSXryhPKzfKTzgDTJL9KC",
  "key17": "2YkL4G7ZnxX1GGNzRXxjPY96rigqpVvhRacPu7Y7XTmNH6iKqn8UsY5BpocrhLMD8uPQ1tJyJCNYuqMXt1MQ7wve",
  "key18": "5iwUkZuirorjW2bYQqmBugchAh9S73rEoiwgCCdWPhdfT3SgviPQL3JiRRHe5WJKBfqGt68qah3o9hZCTNipMaVT",
  "key19": "2PyQcPJB7kdA73qQqXJUyjLbXqvTfgQGV8UGGMTPvuqNJ5fmxYXaCYYaPgfmuWEDo281ZP4YpwSvFzrquZ2iFfXj",
  "key20": "2CR32EqFcD2wvJKzuvGFoAM6Jua6MeQ433PWKvnY8aTVP5PEGfMAojF3YwgynSJa7ouosd4NBudB5uJALPes85NR",
  "key21": "cq7HcChdqiG78ALYeADvbhQLWEDFYvmYHQtzMCU8KjQiPjWrWhvB5LkNHe2YXjLi7QQRrLm4VqhUQzvbzR1bkMf",
  "key22": "25AqRqMDKJYBqnU22oamiDk2j2jsJcDpQD8n1oYhrpSUv7xkZohueQoz6UZBMTHAEm5gSFJ8hfRBV2xPvk7erQ4U",
  "key23": "5bEtZRYZsCSZsG5SuwfCVjEgteTAC7YUPpbgdu8LhggoPSJM2wWqFkCCgjDMgErQHuYDQv1eBbKeyMbBAggs3QHP",
  "key24": "4LFascXkaZ9sbMFeWXopVETjYkTW4Lxrx1GoJeeLi7Ezfa5gC3wbEsYmAxUV2besUnfCCVTL9UuQ4nfx9KJjaKiW",
  "key25": "2Rps3fVqyWetaGjx4bB9znQCiYtth2YweM4uqvxdNEv5D9TpkEnHM4haiAXEM39cRuyESJSJYxPNi7Wj55xi6aYw",
  "key26": "4En3EYK88mMND4MzHd1R2vncvNBXV9q9zTEZCfSAAesw4oEe2PffrmETKefCdd5wJkxYZ5rG5khJ6fwFmvWyQYN5",
  "key27": "WSJ7BXwVM8iAAV9tcc8Dz1ijN9AdvQbhFpniRrPp4y2A1AZoKa3QEHYyRsarJ3svB3ZnkXPsw19uaJWBZTCMkU9",
  "key28": "4qbE1zRbhmkCvVYpNuChdxK2BvdX47nKN6SkAXN6puTCKNdUdYk74FTnkzHTXBFYPfCAC8KjV8RDM9MY8Ng3F7MN",
  "key29": "5PGH2Nho9XtscWrzLADZFFpLq8VsJS4duUhiWHwsUujxxXbENVCH3nrHxe4YWQMs2VMwSGWTaiQfR7nUn3cJtigb",
  "key30": "4WvnjV3L7StZwZuufVn2E8P9LxHyBwcP22NNkdr34BpHVoHfYrzXvhjci7a9NmdP7TGYHrLrQkLA5DoAfFiramXR",
  "key31": "3rTeRfi5JyUmm9khmpjLxsrrPeAcMDxZDaGw2bDGrovmDQ26tXBggP8oN17UP1v7yFjuXQFY9LZqUQ8PoZ6EWwHe",
  "key32": "4VJFd3rzEwYWLao1AdD5pm63PAzn2PEQauJqMnNFRpsutpiYkgpTLpK2yDzNjcb4vbuiH3WTPu3HjdcBYGWWbhyT",
  "key33": "5kf5RCvdWT7P6j7NNeKDLocDJczUQyET3ZYQmYNsarNrJjRgxN8jxZLpTnnrAXSQqyhoWtxRzYsDHJNgGAe1JvPP"
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
