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
    "3L2yzJbVLEj7oWhAeqXbbnyyna6UaPzFZS89LHHjXdivLfyo9zFr2X4BuNSiSvnMzTR7NnxAE5drJjgA5N5HC9ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7oh2Co3xAeEmig4ofnbpwCh27raXwo7oZTyiaVBNBZHpKGezSxPsGow1fxEUXkxaop6urDm6CgYyL9FzjNeLtM",
  "key1": "2mnoYp3FWca6SZ6TnqhpPZnJ5YDb73xroM8iucnz9cQvhRbV9mLfjxTZryqGieqK6MiWhbE6BscP8DbND6m4cLA9",
  "key2": "55EQGaAgkZZDEX6a7hSTQBautUn3AmvfNevwK3saCmjKQVH9K1HUERhLR1eX5MnHvcEeek6pKdmk7LSaHa4shoAL",
  "key3": "K3Pi8dWz7d8TzgrHMmu7iJk7Q2Fsnv4VW5ivc3H87iaYzHvYYcjKXY5VbB4QFeMfskbz11k4NVFN5gbwiJvT4jj",
  "key4": "4eKzSzGm3h8r8anD1hexkgDQwXuJwcJDxQE3RC53Nnnfm4oKSUaXW7HnpbJFK2xkYWjGDVj5L97BsmQiUUzLgdDg",
  "key5": "2KdiHkbQnRMDQtaKDVSsom5LEoNWQMfFg7524Ws27kRM9jFa2VykA46JuGpmKgrrTRrQSYQxcvFE6godv6icLmk3",
  "key6": "iu5fkzdbQmVBrPZkBx56HRXDJKzBJt2dX6VgjGR2Sto6mwbo2KVbrGk3PSVVsd3ZjcxQ15SNnwK2MFh1DdSuRwa",
  "key7": "4DMiqwM5GcTAcrJUXu4SF9FnYj9dAjyvBLsrMQj2dGg5DpWreiPgjLbHEBU2KD6ZUmFF2kF8Y5PUPXvE1Whn7s4f",
  "key8": "uqAhc7rS38QGikcriXm7C9SfR8wvB4jNRNcFsfuScqTv5zTWmt2T6TqJLugF1R1tY2WaamvzCviEQkDSYhbhKJo",
  "key9": "5PGFeYHgCfxiKJsaMZ8TMpQcUQqcj2FB1ofdyz8SBS9iPQunSAR7ypL7GBPrADRcE9oKkuwwfhSaPTaw2XsuTmWj",
  "key10": "4JUxLwvP1k9CCwj7HXGwghcPt9gcfZNnR3RTEPBTTUj7Coe3XxE8sBtLGfmqvLXiCQ7LzpGnx1kVvo9bvsduVhSA",
  "key11": "4L9LQDbbLGaihmaHkYRfxXNacR4uUiF17a7VpLRTVnbPzXzwYKs2BQsMp5WhjCNosQohzTZjzX5AsqCRka1qQGyD",
  "key12": "3C8f6weoNKF79wukBT4QMS4HtKNzHPz4gRpwH4QZkE7YvbJAmDXcxMrpFJXeDUXzCfSG3MfqFFjedBm1GrMvG1s4",
  "key13": "221gdFdCbmzbKt6HPGdNYBtwmD4DUkwjn5Gz5MkzDh3BdGee2haGYJgwCNHMaDq4J3HfhL9ycrqfd56czCgo9JPG",
  "key14": "5RXafCQrZsuURf87FzPjsx5hRQLyXiztHghZvgd4KR4N1WzGWSQk1UGQ71iyngnBivVSa2vzxbuZmmezs9unb5P2",
  "key15": "292QgB4KzD7dZZH6fpg1b8U45JMhVvroqXtFu7HPreQoNKZ25r9LBVLsMwNGEHEx1X1de13YeYNKc6ZcVggX7z3N",
  "key16": "4nYqUwMVJMsYz2KWT9gLzTscufWMTAWu8KDTQ4LtC1m3oCXHCoJpqWvNrntUY8AoVzht6bYTqwm499rVceE2Wu3o",
  "key17": "4U61kzYNtZpWEkbf9wdqGPuK1GfobH2PXE4A92rUkG9fx13t47VjaFw2CZNVFXRKuzcvczFQbFWHw3rfAJo7ERv5",
  "key18": "2JiojMBVeVLQAueuGUJMYc8MumgdEb8rSJEAa8kiBRdydiQ3HgCGwmr68mtuTeQHsbpfFzDEwc5cTQLXR8xyg13M",
  "key19": "sQ8YzwwhnWyMXnmDpbVoRpxWvrwKwTePrAsBdQagek31QpFf4bKbGLeQmDFoDXVGuc7VTadrGQGBrCjuT9JdQUP",
  "key20": "zE6i1H43bNh5qPkQVYsGDGXgFvETVMcQazw6iL56fvwXv88d5KBSkxsHicG1vNqcBXsHbtubLW7ZMnVWcSUFmGu",
  "key21": "2wvpFBgm3y65W5AVThN9GCWv7bFPDof5FoWrZ7tLYfW79SjjbWk5YWQXWAWWC4W8oE7aCV6Fa2sqYqzqnttg44ss",
  "key22": "ociAYS6Cfpk29TcKdNTePcBPHaRrYE7EfUHmqW8YZTEmzUbAfyzqxJkfSTsMgqL9dCwoBjSvMHmhuRFgcM2vtt6",
  "key23": "5zxYMyK5s17YMtng2GZhe932G4AP2Z5aRQCEec7GmVuk5VSGLjSXbW9XtCaANR9PFZh7masAjJgSWMPd7HayWaY9",
  "key24": "2JdaB741w8ykbVH3wF7AVAQVZYcAc399yxJMqB3FETC6R852q3o3XqyhtTrP6bVTW7Mm4573WrbshXLjdW3Hpd3T",
  "key25": "38jvgork563jobQ5C34sJZ54LozuuT7kNvHit6r7hT62hCpBNHpJEFxf14U9ARLEgCScmjB9ppZNTx27CsMsVJqq",
  "key26": "3iB8dia41aMbevqUJnZBZkjrtTAKWiUF3ESeSZcFr7QsVVDda7Je48GxuQ8wr9ZwWsC2eDVqEyWLftJKWZNebXmk",
  "key27": "jgP3S9AZ3xoSUeK9LunxBHsYdDnzE33ymiqqSpafS7uSL2ZnHFzvJqfD5vJEFPojwsH9owVA5kWwzh5CVuw3M55",
  "key28": "cixEjw5qAcVS8BPhsjxNTX2fJBZZ8WAqjFeeWjRx4nicjFMRsF5ni9SgqQc8HZ7bjqkeWrBA3gTxTfd5xNXJf5z"
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
