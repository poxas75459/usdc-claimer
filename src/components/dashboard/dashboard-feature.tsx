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
    "XEbQHMMVeAqEJEfPD1uCibENFbLYso81K5mbKiCiTZ2rshJRAH6rmH4B7wG7bYJGoqG7zZyxADFnJL6BBBcz4HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "386wCs6Sky9L8MrvLe9aBoUjGZdFokWzauuKiykAE1TTTq98h1LveiuABSnGSd7JJ14PnMjvfb65CTWiN4fqGk5r",
  "key1": "9vJWWztkaG6aZukkGf5FjPYkdmYuqVEpjYS1GEaHUGAeBQzzpMYXfwBBjqeXR25EuChJcFbJemW78gfSnFPDeMB",
  "key2": "FfyEKuKPWaHgNE7xo9LPV2FfHsLpuz7SaRQMjvuoGzMPuHba98FRu3twgTDL1GpVRKX79TqQHjzHfGZrA73iGjU",
  "key3": "4G9Ep6cQabogM7qnmqdjQM9ENgK6NEiFumaiGYixYfTi845MPUpf78N8evxeHJAzynFEMNjX8DHsb4Mc7CXPyCCZ",
  "key4": "DZpbzW5xZUgjvsK7QfhiGqYEPdsxKF5JnprdTEzocyViEwcMnxLfX4BUfwj9s4KXfTy25KQwwFB7jvuACxGzPGQ",
  "key5": "Yd3NCJP4WcWX8Kb3ht1VgNYePvwXwmzvf5M3kjUS2kELP3LxS6bnBVg7MZPpC3b6oiRPFzFMSfPjXaYZuokwAYS",
  "key6": "JyLjnSNgzTaHaTZ5DP3kDDbJeJEssYuJKYpFT2dF8dczEDCZQ6kVQtYQFziomHGSDJznp7WjYEkjcxoF4QPPfug",
  "key7": "2qmuxpuw1E4jWh3MxifVyFBUpfWKEkUrbDKGAdB2E3zurmM1sCoRpo1SEN6nK969oXMSDzHVtzCHufssqydDFW34",
  "key8": "mo7Pbsh9bgq4GPsLQmJ5D8gwQAvjZFqhfyXcp9GwxBHJU3W1JJkKk1DrCHqy3nARePTjPyN24Kw99igNrFbV4i4",
  "key9": "35HuX6e6MGmRnBKk76mDjsvEZkPzyDyZRPu4NnHvm9Dc3ZjoRebFfWZWNjZuJ15NrTikyLKqH5FuxHgRvLeF74mC",
  "key10": "3CAYHiNgsxxAcSUxGjoex9fhV3fPPinZES9THrkZXRD1ehttpq1YTp1rB1xRKUFXUkVnqbVhC14vcd9zQeQEuv9G",
  "key11": "4hJ6SNS9qJVKzz953zjcDubUvWFc9phvL84kZpx8HyPTiec38ivFCR5Ynx6UjajBZH9xsgTc97s4s3f4Z9Sgw3gh",
  "key12": "5T6xpzgGYzaFd4conNqt8ujx971QyGpm8Gi3cTKMhCSWgrvVJfCeagD7moXCBhBp9Sy5wRreWcveyeEuYSxJVqkb",
  "key13": "qTVWTUqyAZpJyRT3zfgqGknDi35VRCtf39V5nssjmbqcgx7HZCoLMQPqwDwRMzBdzYeeqN7LWdRWqrghjS9pLkG",
  "key14": "2Q2o45VZXUuXxumAty6ejC6mDjJGxAXizo6PscJkociXUo4XcD6DmU11Q7dhsLtWq7mavZ8FUT4wJFBevhbsVRd6",
  "key15": "4B3YP4Jh8rFpKvnL5A4dJijg59onkdqBx6rBt1FQNF1PNMRSTQ6Up8gW5tLnQoSzrENeLxV1u85G1evDvuujXrkj",
  "key16": "3ULeFUzBxMaYj3W6GHYTxNuHCW6pDUnaCRrJrtRyKcN6HA9dFWfxv8a65o7Rv4A6JU1SktG9H6GoRbBcvBDucuqP",
  "key17": "jXye3Ceyd9zZhf4UrFxUV3ge1mG4aGzz13YVgwyyjwMQ9kjccuQSQGhxbKF3dUY6CbGgQWaLM4VQnZYez5o9a4Q",
  "key18": "2G2e5XDurcq6WNKhfahYSvxTxcG9SeRXkGJZrj2pBzzB2gocrpdXhkc5XmwjH3yTgQptwGbfpCLU2rSNfc9a5fGs",
  "key19": "3ehYTtmoPE26DbuUt1RXtSeuxtHoeUyRSJiygzz7zxdkBAB4nFiVgBEk3VKcbnYXKHybMoCV7u4o2uTp9cCZ1T55",
  "key20": "5W1ZiFUykwRarKYYYf1W4teuYgx6E2iRidkLESrCyjC6AdLadWtAcc6mW3nordmxhATh4pu2H1JrVRRVJU27PVPy",
  "key21": "2pGsq1i6MXgKN6ysoGK7MNuRm64pBfjpKBgWbCcDHvEypnNjUFzGyBBPhzMfGtU6mwErqQUjav7bet9L2w25HhzN",
  "key22": "MbR1UfvTkYwQozMtqT7AGf9ppUiuYixUUV1EY89ZGpCacRbA82WrrgFKKA49p3wTkrJu66zy7MKZqEvSDPgoCtv",
  "key23": "4k1C9Xs3MPFvvF7MNgkgvZot44amDzabAtASU1eHCAzAJHM4BdsQ5e8n7aqUd7U5BcjtiYnYqBXTnPQANyM2AVdE",
  "key24": "2majf9Ua2uRj8y5DwFUrWeQut8EshyrC7JEZBp6kiKMJY4CyA7gUttDYJGjt9uDX9QbNPcNXDccMu3qHGVhRD2eW",
  "key25": "5hXR5zFqGFbDpVbt9FVCwoNGYpC5nfsnYymAvAKL8ywL9j6iyQcTawyxtksy2ybJpv7LE7AQFYA38Thq3By8CVn8",
  "key26": "3zRzJVhHdPfQJjJGAhY9jwGvVyVrSjoqvc7iTMRRs4VFfj2GhwgZzcMcZ7ft4SG3LPnENLVcsQr6G36WDo9VMiXa",
  "key27": "FEhrhPXzYNsgD9p3hpJTwxQuEo3f45Z94KwMBLrc4nvRAGNmh18uUivPkawMU83JP8bu7wN41d4T9FVtHVKGjbP",
  "key28": "osRyNSLY1DjLDFSL9UKYpenGzXtmuB3uQbUD6ejFPNVXmz2LfE7ZdLeG24kz8GpskwrYYo1jc9qyBCFY9VmScTM",
  "key29": "2hnjoTVA99AepMVMj4Fz5SEHfUjejcadSZdD49EB5pQxAjTf3kGfsTMLsy3UJidXmhPCRut4PGFKpHfVphCMiqae",
  "key30": "2mwSNFgrSFokfy7MwXK3w9LKwLNGLubXEzwnMWdZWKMmoiKwdxtmDpsHF8HUZAKYZeuDcVwD8TiX5RSvX7hf6Bsp",
  "key31": "2eKMTnKN8QJbyWsSCAfZk8e1DKEBsR52w8FbcnjVpptRpHvuKjYLcUpLD9eypyEw852VQxU923MyEwEny5FXLQGv",
  "key32": "3vN44fuRkt6jEmPcgvZ2RzXKvQoy1g8y17vJyFqmXCmQ3DR1VQeD5b4HQdZDSNTGFP1mbSfngGLC5aZ26iHJfYzZ",
  "key33": "24mXRKs62nBq3bafwgm3BC2evkqL4SxFRqDwvqnYhGHmqFG7i9xvM5zHji32C5fyjPXVHUBJuD24f3eZrmzycB93",
  "key34": "3VvHmsPpZa7bCnAzL35i2aaxfRYpE5pHBix11z81ATnb8fNpxEEEs9qbPpmyDoXYk9og83P93ZsfSy4MptcjKnP1"
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
