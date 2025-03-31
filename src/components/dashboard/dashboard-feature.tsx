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
    "5p594fH53itZoaV9StdXrjzegtPTGBFgo9seMopa2bqucz3PtxHHK2GUJnsnapBSwRidjh3HQGLnqTzGcqFHRTqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSTCu85M3GXDTo6BJ7MAUfH6jejWJCzRPuT3jtza9Lq23CXs52Gc8E3oCDFDq15duMpHUYVHS5UgCF7Qh1yB8fR",
  "key1": "2ssbM8bGjW7Vb8T8YCBnwpQzbzb4qeXbL5KP8xgp8NEh66yLkEeJqTpas12mWQmxufSFVxthqkGVYFTZV765ez4k",
  "key2": "4w9iVUNgXfqsgXesV5AcB9Xu3j17dMwakrqT2qARxyMEfYQWmMnLE9JBZEBqubbvHDcwq4yXnii3B4wwwAjo1mg7",
  "key3": "3cFhf5vT19UhyyL5sbCyja7RukK7APna2TYBbrNuPWenAVYcRvfc8gGWKBfym3Z8HYZsu9aSoGHXjm61WTBedNB6",
  "key4": "44dpQNva9ZfpPyQx1jRYyLuSssKGdUGhXyAPyfhyoMNbfJ5Jggn4gRbKZci2prAt46373uD2e1MeW4dchva8vWZM",
  "key5": "3dG1HscrAhh4MNgaM4RMzf5WWBZDPqVscSMZBL4s6fM7gqd74ApKmuiidUMp2FdjrwYD72YQSpw5ozWM7qw8LECP",
  "key6": "y3ZkakwuEf29qCou3E1iWzfJdShL6KjCnjAhQnqnmq7vhfUtPr6aZrG2Qdz9n7e4sdYP3tjRadAHYG2t85VA5Mt",
  "key7": "2L9zrNqvj7PUtbBAP4bAA5NApeQzSi8HrLSyowD7sUeUhBWftspbLmS6Q2vMedtEzjA43eZqubZej5Tun7FekyPp",
  "key8": "55MU8UDCcjCSRNzahS5y6oVrMaZPXMCuoPVtBpcFmcJEi74dHoVoAtZYiPDcam2GzwFFFRiWv7N5jxSrc5ZbCUf",
  "key9": "3MHLcTgUGQKsUm2QKF7BXAdcXt7EfvsFB4y8anekbwP2gSy6Wya7vBJ57cVpdp3o7ViPF2i5Rc3GnbQeBM2exQ9i",
  "key10": "2rGuAr15BT3vjmErP2aqLQ9KZAycpmVQ5mcPEBkNXdWYF8r3cDZmnhfVk1TUzYG6yidgB2d8QTgjM3aRfdcq5jrw",
  "key11": "2vyqCBQBCmGvux3cJHFYLr8y6TxD42SmYZAaT9moc1rdJajvV8wqbsmFzHBWJnjPkbYZnGkEyUNpB5UvDKWF5zzK",
  "key12": "4snSU9octd8T2LNNKABKtwo2nE1e8QQzh9pPL2QXzcoj5sq49gt4nGJS3mwETziwoWfxbYPFSGStbtED1SQzHBjp",
  "key13": "49f9LQbfe1uhEUvpdgjCTCtZB17a12D2rsbfVroe2ddQY68ykZeGN1A11LfGtixmjG6rGGtMJAKMgsX5SSq3X7Ls",
  "key14": "k6V3NhLsjPfmsNBaugB1PNkHNyvr12upMVqAU36h4AveDKM6DQJGnMTnZFEAJ9masyUZ7fiHfyNaHZi2LwxeZHz",
  "key15": "2kkCUUkDYKRSxCGHUaVsVCatLUTFQoVKM834QMwV8uJ82SoBGEXFtb1atuUjGQkXYcyCbz5FEmkKgLab8wc9VvZ",
  "key16": "2YHvCuR5sverKsyYEVJjrfw6zm7Qf18yrQCqbh9aYiF3MGpYd3LqXfsQXM4eRVC87jHViwcPbSxXBjRcGpnXMjh4",
  "key17": "491ofuZqyTyBt4v4dFtCZqzpxpSuuzJC95Gg5trSmSDhYtbAca4GoW2nRQEYMnNaLDNXpV28vLX53rrxSZXuxzLV",
  "key18": "58eDd5Xgr1GFdRF6Urf8uLHZAdBMwjqzBcH948xtAYGsXTHRCbSssWFR4ob6qnuMFKy2EC34EprnPz35hkeUgbdH",
  "key19": "5oRGBnM7HHZpcsYKidNraDkpocjPCJyWZFXiBf1QxyKFCRThMnCosjzumkjhS2chbTjrictS4BZ9AZeN1cZdvGj",
  "key20": "27DqJ5VeUiBTHeyrxugZKYMoSpzPBQ7BG2dqeeSrBi67LaEoEy8UWSJS6DAE6bM41ohPYmLwCWLW9gfFmpRfvjRc",
  "key21": "2UeU1qGokvWXj9f5bMvvAtAoEy85jsSnxmqJqFbsNoJJkDXZ2vVJBq2gbzwPAXy9xM4tg7kkgyguEywRwd6q73wn",
  "key22": "4wEs7q5o2LhEdhrAbyHG5P4xKnT4KRfMsY3b9pfWjnQN14kjKiLKFd9fzYf3xSBGdTqg5vokevoFn2yKBsw5ybHN",
  "key23": "65Kpp6gorSRCBS6rwwUWQn5eSNwXQRaWm75oSaE7ZVsew5jdb49K8nAUhGycPmeh5Sfr7AkoSsj5hjMcpPcN3jok",
  "key24": "4uZ37GkaiSeUgd4NcyCcpoimLvYxYSkmCVCDzQbHDS7dHWpFBTA9iGia68vWgpnGo9bpBc4YPmF26cqZoLUJjNpK",
  "key25": "8o275y3KZfikaZG3FB5vvrawfWUsfpRccMCDeAf5uQvsNPdyUDpwc8wR5YoNBQW8za4ezVppY3NBMLRbCbHEgrE",
  "key26": "3kPE9QjXuQt6Q71ETXPCCes9HYfJDRRbm3ZsJ4C7uTWo5MRSgHBir9ZSQ2iSDx27DVxYVSB7vSiHhvNE9zF9zMsq",
  "key27": "2eSztcYBTfRdwFMrYRPeaLR2tc3Y2sq3h4TqRrJKZSzHh2p3xCCLZHwQoUVUCSRFGPnUbjn9MWffvxUuUPb3YbVS",
  "key28": "2zj7Fikq9pHR9RuhJoZyvdTKgaDKwoddFm3XpGJFkGmkmoxQs31QYHHvJL4ow4u8hd96fmqix5K3gJ8qWfFbc8KZ",
  "key29": "66Nyr3WRmqBJvjYTcxqkgeuNZSAmopvJbDufnb2xbcevbKo9nYPYeC9r7Kkvkq8igVXMwv4FhTWjJmxxEuZDYJ6t",
  "key30": "3JfwT2TSVQeQMuuPgWgbs19YS6HkaP2hPsygttymzJmiRCTMBAf1HXpbUVq5N4E7JQio2u5gKzpqMQ7fENd2Dd3k",
  "key31": "4nA4N9LNCfarRcSjnxavkpwL9VMDQFd86pZE8shaUJLLyhRJxMTaCS8ZNaQ7F5vQoMxkd9zYkq7AekMT3uHPXwzu",
  "key32": "Dcb7kWZtMVnNefXecb5CQWTwNczTqtRcBfJmJTbAWRjjZE2CoyEZC1djFt6U4sMD1YDpzCSzuVRRB3xKaxGs3fc",
  "key33": "2cG2s9kBZ6FCUWkRAV2LqVaHYYhXXs6q5ruxcmCfwWpZETMCH5GbZeSTqXW8xGccX4gxU1KtuVNatJwSg8yWEzR2",
  "key34": "4ShnqUNXo6sPhqPo34QCjgmZLzE3eYfk7rTp7UjfkX6dbxb9qTgG8dA6CnbZpMsYK1rqABjqUsk7pukuLRhPaeuK"
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
