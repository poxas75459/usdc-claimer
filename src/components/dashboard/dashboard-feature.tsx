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
    "5pGfvzxEkhkDXjdSerJprcT3Jv2ZkXdpHGvbWrVhfY7XNNdXzCd91FKGN9HN6wCH5oZ2oquS8hiCBUSmvdLLVhui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJqdZftDyiWEfiBjEQoCVqACwbXdUDRAGYxiFzZsCW82mm4oHYewGFJUKxgiompoKtkXEUcfQUwTa6dVEnvXEpf",
  "key1": "32X9wRkkWczuYPv1USyFhuxSuYXwEycmbShAnLNavTsQu7yofDUTyAAUWZLXexcr4c5t8P6Gzjy1GmT1oYs37aSX",
  "key2": "3Z9QEYekPknKAGbh34aK432nNN1RHzXK6QaqxvoidrMwVn95tmr1u8QLLnnbRCRTLLC46yQHC3qwZw7xY1fqLVcF",
  "key3": "JgRKjw2iNiLrvWEjE1RDo62QpPLJyBNAqwBekYDRYnM8ShnAKKWRdyaiq2B4AVqcY1L6PyRHutkyn8P4rNfvHmB",
  "key4": "2bXP4kfAmZ7VeFopdHWn57vwFGqm1xXkCagv23wQe62gtpA3azbAvYUcADhakzETYXGhhacsuPVJotrd6siZCWdP",
  "key5": "wuMYWGNQUYbPEKPFiccGZ6q3ursnM2KoeKhVietVeGhGEccwEdpSVvHK5xK5j4PUAfgCjMGnHQLZ6Pa8FZhNBY7",
  "key6": "nnwBgvYJ69zyVWZceXctTAEe9UW5ZdFxL1654ApTzhhB6AfYm1gGBHMJ7Czp9Sbdgr7geFoUwhTRa46A8hDwKk5",
  "key7": "5NoaWaxzZfS4SXk1sJqWRm89iEaJrp9YnJkvg42kAsWUZLPzwZKFBvUGNyAJgEUXj9BaWu68pFMvCVH43YSrsgQn",
  "key8": "34DjfvvvCz1vLFg9X5xuSxsR3RMZVUSJuJCebHd9VwxXkpP5am3Ws2du1GneoZ7Tw8LHdXEi741kWRsR4H1vg9jP",
  "key9": "3VHB7WEd7hZyqx1QYy7YQ9FV3VrgCBjqDybsrKSCq6GXHQf4FXW3dVjFJkvaMFV5osMyesxgwc1LXN9QaasQgB47",
  "key10": "2PanQXXsPqRLqseA9jwAMLCvHngH23La1MRMPEtpvmQpdq4uaVoJSbRBgwRWizd1LCuowQsVURKJaTPqyL1N9Apo",
  "key11": "2ko5xPfsFaXFMeubpUSPy4eWEDF48V2atnt9KJVAfYDn7Be4yxhRAQT4N8tJpqJnXbhMT17Azrhw3nhpgoQjBnbi",
  "key12": "k4togUXiFrMV47YkZE9mbymhFxWyW9F4zKjstv56Z5DNnaKa8FDCd3VQHgpQ8Wx3pebbJBGpmzZtWFuthRCu6qC",
  "key13": "2LtvceASN1uGmNcivbW6RGVxU3aX4UA9vu8d1F82WXzbdPm3HVphdmHv33THEbEk62XKHtVSAgW2S1iwBrKvWWTb",
  "key14": "5RZaP4DuUDqmXtXvaRq24T9FtX8qHLBdBHT4Jpat9JRPBFswt2kTxJHwZcZTxwPHndax1WnkziijtgBDkevSpzSP",
  "key15": "2p2ZJfM63GMxzfD21yo3fCQwZMVnjA44VNGGqkvoRU68vYUgpaEKuVRnEnER41PZTeza6nQcHaeLnDqouDcwYVav",
  "key16": "cAaAJAadmW6aieTaZPUUnpBFtuyWp9Svi543QtaVrj131voSoFsFZSFG2rdjmwJE38WufTeP5EZTU6FnmzJnzTA",
  "key17": "3ssPz2uYidDCjqW9rvgu6x9aCuayZQg3LsgvSY5sDcrCyaLHTM37xsWjzV566Wzz1Xe7GGon7evAtthawS2KBwVt",
  "key18": "SaPm125wBodDhDcEm8jDkhnThoaB9e1JkgsyQ77FigSMDYsXmJmHHqDdMThwLUVk8UPMuCvnB6EdtxVfAFxQh5J",
  "key19": "24zQ3o9dDUvzwf19hGJEmC9FeC55DEZkdbxbn4YRS2imLr2urbmUNEXxcDAupvg595v7kkzbusrfGkP8tdjDBJTu",
  "key20": "33AADDEkYPe375fGRNEBgFuSXqhBEDigMjXHBatowqZMkNjSDnepvroAswHfNzv5jbRrNKfaueJX8PKBkBbwNJ61",
  "key21": "4JjobMTHGyc7qCqUxrTo7XAuoJixvVpKBP1JwkdVgCRNpVhqStZkARFihJ6uTamGtjYL9a3LhLJwGSesoJyrgybn",
  "key22": "4inqwGr7PsZMHh2bjsHZU6g29mG1HX4o28JdEm2y4VFKWPK1NMyJWvXSm3qH8qswhUCnsps8KjhyiMSXhszTkQZE",
  "key23": "3KWag2xvdCMM1Yeihs7dszCcMTY6f8GgombRaUdLHFwd5i8Wxy5QRUZxBXfPfu75M1J8YRM8Nd24ncW9vX9GDqFm",
  "key24": "NJThnuLqa4sgd22PkDi635qVhxGEmmxRZS2TAEkPJb6EaxLXpUMoLYoFNExTScZJ8XegTzTh53x8p8zUzV7z9bX",
  "key25": "3bLj5kNwFvVFm5yoFeTPcvHwDGfC2iuEKVHD51TXadWzMcoXtyDDG3uXGjuEFAReRPZaWWnzVjBe688dww53vuT5",
  "key26": "4XySYNwaZ1dZjyWTsCD8x7vkAm8qs2CGyGF2e3hjfVmC2VkrH6nd2hCpjZTip3oycYbD388tdTLKGZnjf9uQBPTc",
  "key27": "4fjj637L5KmcTWRp9CXnYMYRz21ZbXe7kHcpbqa515zuwxejio5kD61LYmSmewVAvNocV2Az67kPtMtsPsbyry9J",
  "key28": "3PkGAtkxUmZiHrZbRCLqhsXM4tm35n9FXM6MK9CjqtJRpi67CSK19jkop8V7F7WP1SX4tauuePteAeHMS4CTiHYf",
  "key29": "63vN4oWhqYfH4aJbFJ9NrrBX6DxtRw6ZGVjvjpwNbPtzbbU3GtPHtkt2e4wwaPiyD687xUmnKSew6dNohpZSfsx8",
  "key30": "2VYapdSrxrk9He82qXTzfsCjPkDbZjPaTUUxm6ane6J7f8dFubfjS2iZ3ybuBtei1DxZqfuoyYPdnp6V5UoCndTc",
  "key31": "2TgcG6kqzdkLPJJJfsnQo3Qqokp2U5BAp1A9oTecN1G7j2oVCoq7iwj5f7kp8Df5JTZunPY2ZY5d8LkGRFsztsDP",
  "key32": "2oebjW2M8G8ZwDykSjVAtZtkCELQR8HG5VpFzoh1zNZJEnRymw6Y8eAjYUyer74vW2b7CzYskDkS1ftiLK84QQAo",
  "key33": "2zvsWJEu1kXfJvWJFru2NBRpQKYPFosne6Ukfq89r6dfm88f3mzMEw5Eqbqm4wjyXSVdLsdcVsaJAkjB2NWczqPE",
  "key34": "x9JVNo8FhRcH3ekJcJvDZHky1DQRj2kZW2KzyPfSwMqKjFgR3t3VK9cwsYkiwfCRarHMWpC1WoenHRqLG3uyQWd",
  "key35": "2mz4FDnDrXSrb5oTzzaiNmraFJim9wjnYPjmXxMsJFcuVyQxGYQt36Bk9rVxG3boS8hzqPrrA59U2qkU9D8UZZuA"
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
