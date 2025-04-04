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
    "57fXM2nocAz1qnLJG3MHzV3KVgN5zNmsVyCq2aVAXsECC9UX9bDhVKxGTjeWHkduSwaj4MTpRPHZurggLp7guwnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rigMXC331Mg1JRPrh219cKvL4qYsWXMFYEb7v8b1Rv657bKLEmRtAyP2UkLMyC4vVp2fZrJMxAPpprULqh2UZYP",
  "key1": "51z4rxSwU6ZyNbeKRHcZtkTXhC6GN5cDJk4L86kkqcEpK2bNkMhgdotQ9kSjziiW6CwFyaT7ssXP1tCMZRqKBq3o",
  "key2": "2w1USFpPxEPuYegbvoqdpZjoaCNsEqWpLjZs5ScGXrSRJyhhqbrJMuReKybCQGzFnCfHvAAKLajnUNogJGxkt9Mi",
  "key3": "2TUmDZo1uzeeWxB2hbFx5v8qKcTyAcT6P6ZvqnV5g2AwrE3A6GxGaz5xk8Vbjsc1bxcEbiv1nvbdR43hFFCyNiRQ",
  "key4": "AygHigqXaEh48pmL72Nk6BL5scYhxpcCcAL6fETtion8RD2xkiWZwHdxsYNmsFprwKDrrLenzqVDYP9JsWG6bQX",
  "key5": "3qBfRAhuKi3Lq7C6CCJR8xMuA54Jfutad7ygoVhpyZ33ZS6Gix1hRiiyMrXDTexkhunesBYHxzEU9WQasJh4TQVb",
  "key6": "Qwk15weHyXZmWrcmm7MAxnL4kE2hpNtMXdBLBNE4MCL4jh47hWm59FhZ6idd9bcKWNxJvmbEm9XC2SUgnMRU8AX",
  "key7": "3NnxSEoAebUbqQXTZgNvhTuEFUgr5juP2BtAFeRRnfJPpGfeia8giiUCMvLZRZGU4HnaAwkonCCnSCgE2f4TRqMJ",
  "key8": "3XEKVvGQNGkR8bHU7XC5AYZqbT3TtK8sJwRvjjDjEipFkJTUHMsuQ1HcaHRvMerZSHLnUUSMNt3baPvp9Ei8dwTx",
  "key9": "318585f64eKhZUgnfoPhhuTV9sYyv2Am9x7M2yMdj4XyHUh762kKia6vvXe6D8BAeooLg35K47yof9bQam87NeZ9",
  "key10": "3mSBu3LxFoPNg3LY4xRmLFp3Sy27RD9dSPbiQjViPotUtFb4t1U9Z5LKPNwmzfRjufZRuKEvEGiuCwL4giS9NdvB",
  "key11": "2ajkrkwKA1UFefn6fyoZSwsbYsrYNHzCMFMWrEgXFk6r14nfmjhhtnCqZBxXNJLZhWvap4ox3gpco6AytecGeX11",
  "key12": "3nerdpXdhJhU2b4QRbp3rxZTqv2hGm29saG5Np67wdc8HSSSm6AgKxuxx6gBcin6QJV4S17PeGvqdJ5XSFx1kd26",
  "key13": "2vVqpGABKxxdUhuWXUBLQ1tsUz7aSVa83XeLMxx1vcdPDAKsruTDiVsgZxZcWtDvAvZdD6TYGo24p3Mfueux2A3m",
  "key14": "3DLYK6Y2ciCCfGuJfrz67KYmVAprJ6dgqhbvrR8XcJa3Uo7UhZKoTJKC1wNNJtKo9Hg8WrBsjsKbMU8vopgWmgZY",
  "key15": "5nwk5Vq88TNf6qx22UsivCMNvABv3qso5Ptijc8ZHgpTiQN6GPNixhWw3WJeSvxSNGsctA5BRgR2RkWebhamfSPb",
  "key16": "5QdrdGMg78dwhs8vZNc4mayRu4o5zm52TbL4dJD19JyGrJabAy7DouyP42y5emBh3qewJRczpnG5J8N59DPciXZB",
  "key17": "o9EH5a9PPVnnX5mFK7b8YNDzrdPVptdFWWRJmhjT7DJfBWykjeUssUxEkccnYUszsnhwANtAiApf4H4qvNsJUYw",
  "key18": "5VPyKbkLy7Lw86LFvCEdyirFnNPfdaY6Y5fW98KZz5TaQLzwTdB73aeG7S68kgZMp59BYuQMUCi6BkncP1LiKLsT",
  "key19": "2RyUTchcLoey1eWUGJNT6hLZaMXcEZtRawABH3QrpBDDKu7P4BMuXgwppeyZG8RhQ9cAMfhCvizNHdV69srVzTYj",
  "key20": "eUnorT3tEhPJb9BBxCCMSHHU29GNP4dU3hhyPjy92mbF2voPDhG9mG37aCgYDqjN9B5VkuVkcC2cueSJ5FZ4Wp6",
  "key21": "5wUyHTJyMjsVKdybqngf9z59tPxSqenfyjes3J9BS3LHdhXuNdMu49PqCDJovJYs4riqyTxt2qaSKnpdUiJApHJu",
  "key22": "4ftb4MJxXdRBXkByPM6LNZJ4mpECkSrP7Brs8E1xaEVMxe6iDiPPbmHNiEWfmHF1jQZcA85nyquHhfh5299ZPiW8",
  "key23": "4K7BTDArV5cPesmHmhfEofmkj9vZF867c66hK8Q3kZ7paHsLueBPXaASV56w1qqtHBhAQj5NxR6moJNZiLhCH8s1",
  "key24": "4gs8QDpZcCNkn5gBNkPM6vnfcd9gbjrx9GfZc91J2frbmrACmpv3dtb8SAq2rvoeP31yC95Qx6ia6VK4fbr6Dads",
  "key25": "3UGSVHy1npRBcTdHc3VMy8SM9YwNq4PzXm9QFSVK1ihvv34gpZwgEtyHa7VGNJJybqqhMpVhnUS2HJSXMs5kAKGY",
  "key26": "bEQqmKNfCAkGv1VEEXfgZxVpceeLgDJYxfDxh3YzEFoYKhhhQnWnD7kxQaZ4cD5iDBsGpZ3Rmz5k1LvqEX5D3sr",
  "key27": "5TDVrAB992riomFPcqAXgoUCX8EdMhUoMFddmhqkQM26F79CrD1kP1HTpKendoKhhQc8GjWD9V8QgKj9SVECRWMs",
  "key28": "5eh7YBYz2P146AeiLSm2rNyT68oJxUtK4uNASg6bMrkk6nGHFdTd4K4FbG2VZpo8XxCDYQCsQj1qRLq6wTHiUMEV",
  "key29": "3PnWAtKTXceobMmdRZegSBPhStrkv9W48xDPWc1wV1N4zcQuUvFHL15pzy4HC9nMzNg34aNAnYpiCkTGU5a6uaL3"
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
