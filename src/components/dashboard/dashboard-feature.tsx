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
    "2LmDfY4NJAf4GBhhU5gCo26eEQntRLasR9KLMgCExk6VHYgLwdjCp9HtTsYaAL4AFuGXWFrfpJ1fjGeq4gBGzmxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Em6yKFFAwKAchLVHVLcCPHTqMmoVKXKTezG6ZK5sdD7dKDZ32qWCXn2gAxeafWxqkriyRQnKVcynZ8xefj2rUPg",
  "key1": "5whKsvTG97pHWiZ2VpN8xfbXbxBRBqxo37tej469MXMMie2avKin6NvT4BX11ZXBTTTk8nvU5xYe2jr1dN36jJdY",
  "key2": "2JyCUuYBNhvVDYZwXjWN3VpKoro7gAywnpWRtUr5At77tZsaw7Lag1NtWd25dMJ7zJ1qSqCYmiQVz9FeVsxsnR8E",
  "key3": "8akfTPKWJCb5fmMMbfJE9bsfHAWv6EZM8W2neZNdsFHecyGBoc4mN9UwAoaeLFB3Ecr94uNBysCoFpmUy72AiBm",
  "key4": "3tEZMrdZnLbnPD287nat1rSsZbuSBKVidFEwvgEYEPeP3CGEtPKwpnKdWYB4s5icYgDV8UNA8QgUB5s23bEbt741",
  "key5": "4aYdmUwcGvF1otEUUUjip1LFbt3MrDxh9xDQ1YcvESPiU2HJKUadrcYexoCgB26oAkyEiaNXtDR4Fx8k9Ef29RD",
  "key6": "3Qt3E6YND5fM85kb4TUKeuE6toudiQPxCp9pJxkX4y8geRsKaohEJdG6t1uNhGknSfaN76bnWukSUcn5UxqzXaKK",
  "key7": "45NEJcbwJMvdFj5zBet5sU8ZuZ3WSEdWYHFBHN33kXGn6Sfm7YfofzJPqXihoT35dswZEEAo6ARhDJAfHgiEbk8E",
  "key8": "67d3Ez1A8F3jWEyfhPhiB2YgQGYfLPYgWPHKnxbtj8vujgWxzqP7JoguTVgYd3JNKohc2KNVgmmDsALsfsxDtdrc",
  "key9": "g9EUV5d5BdJ8faFPcEUwuqM5amUSF6j5BjdzNXjzxLv9sJKSxy68dcJC7Bs4LFZyAV1iPo6PRmfNNqGoPXnk5y8",
  "key10": "29v3Chyau2HVpiKDYK1Fc94agz9iEubHVHzLxHHVSs7Tp3snpXDEwuBajBnYKD5esfB38PhZU4nrgWhbxY6zX2Ep",
  "key11": "5fdJyeBbpdKeBQWHA9igy3nnzGGfXSrzWNWvWNqfZChwLbY3DgTG3qX11RoTUDkN6fgWoGG7saZEL3dPi8SQtfLM",
  "key12": "5qarU6DxszidkP6ziUoLjspJAx5uq6Lf4qk1mYDj8RoGnt3W8S7ZymFPzo5dDmjQzGx9ik13bY8w2FJ9XpdCSq8o",
  "key13": "5MYqxwvJkYtx96SbTE3f636FFcJudroDDUYMU727mzaPG8m2sEoNd1GcUvHtj6w4GukMyvzbprmBi5meefSmqLYS",
  "key14": "2FRQFRZbqmYYCiS8Uau9Y5TYDAxNrU7C95PLGo96XQP2HQh1Q9mRcFhBUTbXmhBiboydk8u6kg6P8Y7V4RnBoYJs",
  "key15": "Yk3f4jwpLQ4nwJ4vfTSbYmrsS2Ak8AreSmY3svS11pmvNe848TcdmpdD7XRbEXdzUAx9YoCpyDfWbMYhJZd8sHW",
  "key16": "67g46ecLEmn57iJ4rWfqdCzA9NwxvTWNRJmumf9f5Cdoexz1Mcww81iQkg6ZvsZ4KbcGYJCMtKL8j1oFCejvXFUz",
  "key17": "mv2igK3pKcj1eqc677dwAeDPC9AK94Np5yNkkzihaC8iX8GM49LpMC7aktBSXNc5n5XqjmjrA5CjKNhwVYDnLWW",
  "key18": "4a6fvdkMLQTpwqG4cHPXw3154QX2nMhGp6j6K1Acte4jucUQ3bjPimoytUYPpFeh27czLsXrUgKtAjGsKy2Mwp1i",
  "key19": "5ujMKYqWsSHSYmyz3whcP2cumY41r1BAkA5wqi1Mtdq2JWivAYkaEz63JWncm9ARead1v3phTpwwPM9sA1kUd7Uy",
  "key20": "2GyeZrBa3pKUuUVhGRtViU4jEB84vPb2pv6shAucDsxYo2kfrzwsEDEfV6uSPngn9zTpAbMJrB53nHZpxmJQRjut",
  "key21": "vfNgyWaNPvoUnmWJmXmJoThj7Nfqg91YFWnJrbFxhZfXHPXS8miyU9KJnRmuhyaCQYP78tNwdAYmdcySLhyxEj7",
  "key22": "5CquZy4QsiCxs5vxakbHLxj8oNQahaP6AQk5Hsg1LgNrqiLy2QtG6r8HRkPtHVM58uCg6Y2kyMPzJN7u4bBiYVMF",
  "key23": "49gYgXqSJrpMR5ERv8NX4uuxKniybCDMnwpT12vV3qazbCyhLBvJg4mBkxaq3pvaPAVe3zpV6NB73Z4BTBeDPoKm",
  "key24": "5vJLagwYttbk5NtSHTrV9PBSeb6PyuCzndE5WieBgp6YG2asPV1GcJGS3JKbEabH6vc4NUrRR7sWv75csmtitPES",
  "key25": "4BvgagveuZpvUfypVELdu6ZNvPF5ysKMYZb2rwfb4UdiVQWvC4QrUzH6EoPnQp2rtFtH8gNx6UXQgUd2W45j4d72",
  "key26": "5Gkx7KMF3bthDGtfXW9wHep9UQ8HuXPXbs8H7YuReB4tYScnAscKpDq2smMaSXTekMXX6uoz832VSadhRf6ko2cS",
  "key27": "38av4rXGRPJ2NQA26zirpEiRYdq6g1N7LZ6ZEoafjtuDGwk9eTXmViEkgiRPoUCc93kMMTxsuKoE2eWSGN1Cimbn"
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
