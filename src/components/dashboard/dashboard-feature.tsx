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
    "5gpWSgetN8Ry7pBUJfArTbKwSkQxq2f7XkDRdNwtvgf6Y1Gwq3rdQQ4pCucVMhkK6aFwkLWUGZ3otxGTbLpGvTMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZLqyU3wSW3HxPQqhncwjkK6U9seEgSLyS9Ba6AVdoMw3CHpaezMeGPRHoUJZjLMrbGoK4muasqhVbrR2SAn6ty",
  "key1": "3pBEPiQBn8CGGukpVNhKBSHo9xqD9CqgJz54mofSYuRf2ww7czwq7arWWzBXp3o5EX2KjgN7kvmDYTByxEL4qPZo",
  "key2": "5s76z5M1GU98ovbYXYqE6AfAyfkrDhiZnuQSwEcU2Uzd5zjyF2W9ppxjmiDFmzkVr8r1wyHh2V1bwmaaCrk6rP1f",
  "key3": "5D5erJDMLbP5SkkxyCb6Q2vo7M7fAiNj98EX77CCGyGnQhb83S5HWpqLmAULKbepcyBJbUmCc4NNTfwZ7FxANbNR",
  "key4": "3mpzFJKMEvp4PaH2mZ6CSAbYgsXCfKN4EfmmRwDYWsXasZJyucbCyFcWXC4noH2av8BXf78XDyqDbnnhXQ97BvMW",
  "key5": "BDerWHSTnoPohqSJY3PmLA6Dt7akngsuQVDGQmjfLtRD4QgpHms9ns8VgSBAKPSmuFuW9wQzQPFKuwWMX9rm9AC",
  "key6": "48FrpWdMikHZwZxRkJFbsFYKfar6xxmysGEpDLZssRqCiETf8QrkvHYjqzKZTr1TvZPvmhv91LmHUoVEFsBkqRGE",
  "key7": "3TJuVhaaUUm3AjqoM73FRNDSWtG7PandzQMA5p4o1b1JQhNHoFk4UHfm28DyYQrQeYc11hZPxrHXhkSrTaaBQafz",
  "key8": "5yx2dx5pDD6RhAoZRjjwpZZmbCcasFnTdofz6dPuBke2cNxt6dpTD4SNTYLVai1Z6zyfyvHL7BGfgdzpRFVTXQ2C",
  "key9": "3PdK2dCtgsnsTBZR7iZFk5TaqzNipEDsGbSafC8jnJTunfWjPMAVYPfBPG5bWNNN3jDbuBz4tvenyJh9ck3QpJJy",
  "key10": "QkMnqLgvuQp6r4FRNznoSmLQQNNrGGcmH6taDzCkBDYTXqUfegChQ5GiaJoBJCReSYAGJGnukGkNLctUxBCuJbK",
  "key11": "3CBkHzfaqFJAC3g4vHUwaxCUdxJnqEFzgzztucfcw6UE1dR9GqKzHovYnfjc1FURQjmQZX52NghtrVehxvYgMhqG",
  "key12": "G1rxem7JFrvJpGG6CFPhvn1PE2CaT42b6uZwAGcoxd24UvxmPWUSgyuwuWqwvhZ2UgeP5zikf4YpunfDqFtfA9s",
  "key13": "5E6arCVW8TNvm3vVgPNjDkR4TGyLoizTc1nb3b9DWevUnNcqA7H4ANQ3daRHEpLaswzHHrE51jXkupkCxem2irC",
  "key14": "5p4w1h6rrrt2MxsbmTan8Nvms4VD7BDX6xW4GBnTTWK4VDtuiBixUUSWqV7vxcpHcs5k2EPR54o7x7w1VkPpwuvD",
  "key15": "33697W2UmVzS4ZY7w73A5Vi5yD2wHRAdTr34Bvtn9KHeppWJdLDWP1wdYJoc6RJwg8RmhxXctngEcnhBYav8ssy4",
  "key16": "3uuLwG74TqemrWMonkcji1EJyJy3zPPS395iFp6B5nNt8QnyUb6VZTR3j235pSZqKwmkns78fV6ziQikfer4hYRs",
  "key17": "2d7vs9rZyzvaxYjgH1c2w1g5rZCJRikMQNDNcY2RrJ9VJ4sMHW1xMewnPaHSwuZgAKfSE39xLrQHtN8FdBwmbGbp",
  "key18": "3nJ2P4VVjAsqyhwe5NfqEokTmsaTzJ5ZT5TtEP8gpyvjeKSgtACLLJMXemCvQbGkHGTW1HbdWw3zyxYN3ymTapzY",
  "key19": "4QywgqTW2BDGtcv2ptLHGooSRKY7Xo3RKd5cJHik92TNz2WgiqQPS3rqCyv6hsK8PUMaUHcE9vHt2Pg4nQFhFprX",
  "key20": "ctMu6sPprs9cjeNm5LEmSp8HaDf6GJ4oiWJrSAGso59g2ydhykXmrmFhDNfmdmAoGCmUuF9byYzLUEcBLYWwF98",
  "key21": "nqdkdBVx6W5X6mgaudFTXRwruZDwRSDL9MhdM8ouZ45F4gfUxdL7fTrrs7FyENgcZNr5jb6t5RJfr8vaTSDH42s",
  "key22": "4hjz1AiXHsa9E8YNf8CkqHYCWjcZLgeBz7Q1R1e954z6XJCXrQTztL46yZqbZKQ7qT2BNTLRdgFESKt9UbK19V18",
  "key23": "4UEKNuwnh16MPXRuSjSmSaskQAfFM5bn8nt1kQi4LC1ENH2nN9qspiunnVRn48Tev1s2E13NUtR9JFZiePx79EU8",
  "key24": "tBfNVLmti9NPQSiKmH3wZ2vBpydfn8eDCVTmJ8Jx9x6AMboqQB54ePqM73GbuYpsPU47V4VpoTRKvZQB4EhGSqp",
  "key25": "5nj6Sp6WVboLgPps9sBKzKZkMsmYixGnBm2pCzdVmdvnwaRMwXzrvXD9qpKfHE2qw6LXeN3hNmCYWhXthPwmAQao",
  "key26": "8Qq5DwoVtwpfR1nLbd8nGjdWDNvAeLNyFtsbvdM3FNjoDx5ZrEYDnyYn1R4EjFHSJ6Y5pBNRNkRouJJcdQwF7M9",
  "key27": "41j29xrGJTYTy5yA66QkYMuKh2kaobPZkjvcVyc6965QvqyDsKS5NQNQMZF5B7sJZCwESLtb3iCUuvXzBZ9Epngx",
  "key28": "3oobVkNctPEzuAvdtXf2ZMbyYtNcTwGbpXiMX6Vy5M5sAM6W3sJXFRDCuUfttcQyPYLk5VvdV6SrFFkgMcL4pNW3",
  "key29": "5cpzYDRSndCdVWDkBVxc25X6VC6qnjFN1nGeQF9qPa3br5GHW3dcegayevPLZjNZasBSAfqGFbJ8GhAqkxUwEkcn",
  "key30": "56hoX5ByEShBxzLUNdxA5SZDWhmUPQLHo24K5UpMSRRafQvvKCLFGZmH43HifCo2vBxbkZc2WF7jqCxh2YApgfX1",
  "key31": "23WoMrHwUnmcstr92vXTLfqJFiMZ3AsMCAJjXhPsphszP73Pmuw2CHsRaeYasQBxuJBd8CYvteVdHqagZ9WK4DFx"
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
