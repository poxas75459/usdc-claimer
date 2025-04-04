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
    "4k1t59UnBYzF7gKMjP1aJB9NSCPKJHxYk4x6ZXoqM3cVdfxP28AywBrGtBnyQBiFkrJL9iD9YEe7SQGSxhJMtJbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9fPynnipN5DJZSbExMYBNZNZ1hxAE3vkxBGdvs1zFBErs6ueusBiBXhWg2vTwZfdjPsaP4rXvBdMEJ4SuMpFFRy",
  "key1": "jJHsoSTXoMYwaqPqWahRaqKq54aC48YoPDArwMzTzX26ApmeiTpY1qDUVxc81RNbEiHtbTa7RXeWCHWyhzUnEGr",
  "key2": "BrxQwgU1oYF9tmDRhquWXbyVnutajSu2e1haYUfrEj3UXTAH7tLxmoen8pxuRPJhPH2EgkqexsF5MPPiLGLq7vo",
  "key3": "2KKtCFt61V5umvb8d5ounhc1DvB1npKSMstzPuie1i22AA7kR4Wxmg4WQFXch1FCABVZdH3w1aE2X2ZgPHkKDfH9",
  "key4": "2RrdFFKqCjBpKcjnq2UTbCYJPvmLV2wqWqox1uF5qiBbq7pFWohfg4rh5g7S1eQoXeY7vKLBkdYSgWa9pRDe1pcF",
  "key5": "5G4CL9aYARrsujDQgivuV3EDfKRQi5VgzgBo298qrMFC1yD8DFFdSxCJQyRHun62CE5HW5F6FB2CfmTU1EMyA8Ty",
  "key6": "5a8JWXwcXzuMKiG99rFsGDpRDcveEC3ELz1sM1eesjMWEjmfkFkjdvbV15njNhwSquVGm31MZzq5U8PFxMPY73kf",
  "key7": "4cFKXgeypy6WnfaGMKW8bkCUWM3j7RSrszPFYRsjCnYi7SE1NjpcgSmiTAsoVFA9dzCKRFHT9pfx9voC8Lpc2i6A",
  "key8": "5JYPEJKQy3YTjLpzsbmKLqDHdebF8u58ZRQvVZU4dGSkVRGg2quDQMvBxKeQvySJ4d367679MVgoSoyxag6sz25y",
  "key9": "5P8LZKTvXhpG4zvNLxD6YguLpDr7vp8zaTHZojtfSrnPpGSM1NCeVtEkubjLhjX6pZsiYVbc37TAyRPcGyzwi8WM",
  "key10": "5YTub7LhwUY6pE8ksVWqoRGTBwjg7xvTFY3v279YkDWV4kj4KphEAsxfdDVHJagEY3hudwgsKGYKodgvdrHHyLtG",
  "key11": "65ihRpEdXmnPKckjFWYoWtctw95LRqt5GjX3xChEpeENkdyi2M5E4Uww8z4E7rtoBpkx2BuMfCohVdWiYzKrgoPk",
  "key12": "4tfngqydgquzwBBVoZMx22Bs3Tc4kBp96P9D5P2fT2FkGE9xCMJB6xFrRfm9JSHfcQUjCKDcPCjgFWEWo58ixjXA",
  "key13": "sRu91sE8LSEdTFd1CqH56yVreSL6FJaAF6JmNM2DFG8CZsB5HJx5myanavqt6FU7F3gXbWyn5Tf5btiRZaio8wv",
  "key14": "4wmFiDF7kcBzjYro74fPtKvtGDAPmnhan5dJxVgtmjVt4mtdgDridmrDdPGwXsg5X9XpUgg1rdA9qNb4ecC31Mot",
  "key15": "4H7A8VoBfNqRd33EFKcEpGpNABYVCzaH4Ym3VKRf9p6NwYTHRJyYQeptpmbuXcsJRgfEELU8Bx7vusTdNUdBSnwB",
  "key16": "4tNNvXnxQ1iyT3anAESy12iQfrXC4ge2BdJewArhF5TyvdqDpyJ47pzb8ZqRxGeBwe4FoSGzynrcUMa3T44uVqgq",
  "key17": "3B6EdQwh3KQvVGYBgt9YnFM333wXZWetHw2BoQeZi8HAvQSuLWmF82tNsFpVLBJ4ydTgDTemMfBqtaBMV2EJCaoP",
  "key18": "3fw814VEnqpKPBCJkuSr6Zdx9rYQ6cbJ2rqENFdKbH5Gdk5vnjosi4xZiSfTr1H38wFWRoJJXxgysDSGHnvmwbqS",
  "key19": "5kBJZFhxn7PQaoqeE3aZgiqNczKNudRH95DoZEJ6TF1sZKYoQ8cEfpfdvxQ1JZgXJXJgqebkWZyrNjhjUYqAFR14",
  "key20": "4oUDb9DLfA4yfuHLX4HPGDq6jmQcjkDo6sbQdpeEWwh7UPv3Fks95cNoTJHGTVuZwHSadEqip9B5a1KSrPhmtLcW",
  "key21": "49agorj8WCQEicqBnhHPSvvGyKzitdFPGUc7pGhndz7YVm8M9TQUz9bXMZkzBLM6Pi8M4HghGTPgt5yuE4vqKCs2",
  "key22": "3FwwmxD2pHPWEBJW4nvkVpuEGvrrT3vX4q58U17Q59vmgwjameDt3341XWx99XUFm7EMJzwxzsM3t4PrdNih7YTw",
  "key23": "628V65ViS5ikFBMHt5SYN2jP3dzxqNoYq8G5kakbSoe8F5nwmKupfQxFjkLhZCZkoLfvoiXF8GiRTAf2pJjevjH7",
  "key24": "5TbwimFwFMKGanstqYMwV9B7peLwtDUCimFfDh9XzVBMgeAwFwZ5N97y6k1EU4gxRFFCsnmMu5vQfoU9hTvC3odk",
  "key25": "65B9VMqF76P8oRezEi8gupP4nhGW6ZtioPcFq8jGMns6LRb83akNXiRN2yDE7ZJnsaqoGUZXgAvVxidQQJQyCeyz",
  "key26": "4A46fWx3of4dD3eqp6BM7wHKyxHjx3oxemJVySngrg4zT6jWqp8BQq7no6DKa9hTS2ATH93Jtrf35U5qw95YzRww",
  "key27": "5gir3N8EkiMKHQ5usvhDguoCDi1R7pnCLZRdVrSAGEpCLPcL27EYZK4wyrU7auWMAVCwqzLhZGtA8Mnj7omFQuQD",
  "key28": "4BajAp1Ggiv31NqwWXQorsX34rbi9ZRsNUypz29SYDQdwANNPPHpnmR15rnuk7pRTASMsjKSMcmXNdfHCLZQFRKC",
  "key29": "3eoJvjmob6ttcVxnHsef8LySQhnu5NPfoxna3XCzQFM9g2BjPxkFFmzazrWNcLwLjoXLvn36NeMCd5xV6ftTzS1U",
  "key30": "5mBgWu382s4eZao8F9yYrveZAZBDdvRUZrLhmFevFaLmAE4udp6jdHQ6W3DogDUL5ufLuLk4ZBh6Q9gUZ1fWo18Y",
  "key31": "2kmW1zPYFYA8gRY4i4ENVw1iL61yRbK1k9z1rBDTvPUERFTBKPDWAuV2h3QNaL9xH8CupFUdmZZpozsPS3L72h4R",
  "key32": "wAmJP8Ukyrm63A4VwyyS8eYoUeKjZiuXRcWwg8AxgfCvnKQCXwF2RS5TekxE7c4b7PKfFSSgvHDYRsFaZPMUysi",
  "key33": "4EX93gCuRV7yVaVAfwW7rhEkJuaZzNbVD3rKzT8Qc7gUAirJQTwKCPnGkGqd8cqcb4WcFm2iWCmbPQr2cuZi52qW",
  "key34": "d1bLPphy6cJj3o7ZxhgvDdVPd6io75THSUPDaUssAoE4YidxoQRiWtPqAcy31rVxUJh8AkLJEatJZNxjDKEHxLq",
  "key35": "9bKR5HD1nPKZ9dQmNKhtnVx8AGMDHXLk6L29CZiShsmgotACnXYBPYhyBdfmcnw4AboYkeswggxypgczHSpYmX8",
  "key36": "3tnwG3kgp5myW3vGJzdGR6J3XshiMiei9QLxAnfxEUnS2udpzPP8uUzF6m9e9ZztFSF669Uj5ZE5DF7j4LvsZazf",
  "key37": "4yUmrYVKxU5pXiMLnTx1Cd296vWYxCqhWFsdKindJ3ixHWELRoiviFY7fqhbyQJgcZUAmSQM6N7owFbM2z8ucJgG",
  "key38": "3odg5DEy5nkWu7JyPQJgiKVydh5BHPS673et3yY6qX3cNkmgKff92RUqTubVC9mTubsEUnTYyjXDoJWLEVcYMW2x",
  "key39": "3c7Hh7741FRTCKYX6AhwmJNKh5v8UXjbxA26bE9n2tKj3HySB7pzBfTgohyqjGdYsDHsdPXy4uK8UC7fn9FnGzjb",
  "key40": "3dNF1eeGrozK2hbgXdSKKkFxw9V1zasCMko9ao8BTmZMpr7gZrMyjvReZMcjL1EKzR8fdSkCWxXb7aKma61Mcevt",
  "key41": "4RS8EdYyXxn483tw3bj4gx865VWpkmrtS6TdxUcCYV5sQCuB48yeJbQUCZmUgM6PJmDMPhPja1uqVcFtchPDUB9R"
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
