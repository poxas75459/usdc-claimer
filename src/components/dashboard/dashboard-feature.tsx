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
    "48reePmKSfpba6wKxVt4daB3RB8Rr62VqHJyh9CqrSMpRBVBzTsngWAtP3JvGpixaW3ArKpZjGTKew5GdBYTaGwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbRy62L6DWkTRpAQQQ76NAZYLDnhuWbJz2hpy3y2RRTCAjp8uSvtEh4ESnf8sD9pToE3sUttJv6u47UWDwcrgBm",
  "key1": "66hNAG4E2Bn5dW5XfZykyGjgJSzA9m3gi2snHM7XchR3guau4sANdnpAYfTEiMsAJr2GdikWVp8zHFCdxBciD3WT",
  "key2": "2GqDLZEuqC7JLwrfHjxG1BKQvvNH41vac59LAopwwJNVRdNcyHCdyfnnET19oaMCK6E2oYsoAeP65aVcsnyHgXsE",
  "key3": "2KDQKqQzJeqD66j2Z6VxieU228ekacasHKtZpELYvyhDGHf6xWoMgm3FvP6pTVLUvuVaZJy4rjYa9G5Mr8CT9mNt",
  "key4": "36wuXi3LBprq2goLbusqC5pJpjJqWNeHPKKwXoPqv3okeW1TMPg5pt9VUNkZwNewTYEeALS3axgUTp6fJo4wgJYY",
  "key5": "3SD7upFk5ZcRjJWeftW5DeTSHLsbs4dNLgN9wGPzVgVgRLWnz4agfx7ndV7Mmr9tTHWLiJ7SK6xySwL1XtnoTNLK",
  "key6": "2viW7HHgFgv2gYdTTkczy3ffUD2jfZPpG1AF2En3tjfMSSyZri4BNWMEmhump2GvMkVUTvMTQtHaf4Z3QYbgfhkT",
  "key7": "4NVjHN9o4r1SbDdMRZnnfaVitS3BCJjm6ckv9ooBR3pcgXkMbNx2w9Vmfb6aMMpqFmqQ1zCMUCAXwozZjzZuCXLh",
  "key8": "27GuaX1TySSTVehSEy9pkeLJkdazpTLsckAktVgi3nQFXzXoF1Mo8FEA8nuw4MBim4CWnDkY5qbD81idE7DAirNr",
  "key9": "22gMykrGvS8BLEJoGcTg8QRuJpv6YBEEvxXUsUY2m9XDW6uYAgdF1Mggwtr8qXErFfSZAi4QbPSD9sbeMziqGJQF",
  "key10": "4vVtuNogz8yDiaEGxsBdxd2mpBagy1dsBUCXT2kfiNGz7dxXbmjy1C5GRAeeP6nx9W1AKFu6U1q7Pyu8s1nGUEMY",
  "key11": "5qxFdB48PhygkNt63U1dsLbioDtQMmNeJ32S4wdWARNHA3V4JsNgrU3a5nbb4sqLwJJigJQd7RW4qJiyv79Mzh5t",
  "key12": "5acjUZhaJfib8Rkv5UMqJj6nu88iL2yUGdE9XPYENVGsbBBcq2Fyv3ZvDZd7Lg4j6QipS88ZxiDeSkCKF7Q5t55o",
  "key13": "5LBKLDjWUFDKhh6hTJXNNdGaFkhgh6ztM46RREPTu2QtwDuzAkXX8NF5wp6AoHRYxFbdYYmzrZS8KEaDe5kgj8vM",
  "key14": "4ny5xb4pGEUvX2j3fdHedygptsur8LuyLeoX9PvrKj5urxxg7g1VBLbJmhuvq5uQ4SexADp3WDH6hudm7VK8n7gb",
  "key15": "4e6PSPsNC7Ggj3rqfMhp88b6BuVNGHyrgvjBBpvVJ1XHiWiFB82qwXm1FdHHBszrVwjm4gjuDHrPASpzrMLEACXm",
  "key16": "2aUzP1HXnHUAMXBL3ZVsbPSnFw4TMRwSjFdUu4DQmeULtQ7vWEYMgaV7f7rseF1a9tQz5LaYex5QVMuqXkzoYt4d",
  "key17": "5DzcHhgqLPNLZBpbQcS7fVNiK3TF35qopS55gh8bFmGmfFKDaby4tWz2HWpQ5mqprv8LmtNfiWiLAubF1YJfYHQL",
  "key18": "4sEzzxuZKQoQmLa1o96wnqiZJNddCEtRCvrR4gn1Pphrwo2m4FsBKijRwYzFNKxnsiL3ERfs9tLNbWmgYmrWTDqR",
  "key19": "2zZqQmnmnVAjLEuGCmTRvAdEnv2NhUbMTk9yMYBx9FU4XmnqqazLNGbYyLVnYeipvw2ixXDM3gxcmg5xHjYcCuSq",
  "key20": "3ok52E1WPdSNk4FpzX8TnWEL3p59DBKwBkdVUWZqghi5siLU2fvS4ysZF4asaTemyeFDBxeUeQKmidKN37JrjkuD",
  "key21": "2WZ7C1bTieRhVeUK6Yx1s6rpLZFMq5tGJtBk5DkpnY17beeLeitBmyYBqJPvEyyoY5iEtaFc73yctd37aTrmiMe6",
  "key22": "4u74hoMrMDMFRUdrabnU5D5rQGqBE3DbzQb8YmyDPBgtAFkPRz9XH63XHMqWF6uqLmonnXXxt4t7h4b6GHwC6sc7",
  "key23": "2gDSq51b45c8mh5LcfSQQ69Prs3e2Z6WTNPjksFPrMUx8ujKJJ7tdZPh28yApL144mtPoFSmLim9UYQCtqpdn5XJ",
  "key24": "31Kr3ASDhasMJhjPoaLiJ8h52wyeqBLfNMTYgtKMMn3vsyyWMoeqJUyed8i3pjmw9dYUpAKFLGMk9SPbQRJes2oY",
  "key25": "3RX7VZXKUmanCcAPfQLvfGff7VppZRtcep11rUafMtgGmDSBxpqEWYtcMoKPDMKzp3Vn99KVKqC2qAYyget8Kjk2"
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
