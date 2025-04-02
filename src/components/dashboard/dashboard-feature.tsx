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
    "4Jb1jZPk8QcFb1FeuJEHJffS4JZtpTZc5KYf8SuJu2PNiV9c492R6XnqGVqGyDB2Cze26AcCF2gXb3ojH5nWbcWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FYzbCqKDTUAPFXhEBqzLNWg8BKU8x3DkLdXnmJfik3m3iA4atQrpoco9rAPfVkQhZG6LqkSTboxhAeQv45UMWAA",
  "key1": "S7niUX8YUNbmPfyVBqz6JbMMdkTFxNNE6HW17WvNsBsDQJfhxPm4ajwU6dFumt6PLUa4AeBCWsgStSCyDKZBJNp",
  "key2": "2Rg8TXk46sU2XmnYeP7FNR523rMuWaspNiZUCZJTimWE1oKEV86Jo3MjcPPkBGJd28cmNM3QzPNQ2qcXJHiwy1oE",
  "key3": "p2Ch3CmnfSX3ydN1RmfZCQiqvLGw9M9w3ek73J5hukDvFbXYBULHBNJTKPBUn6rihPn2Z3YT7uk8x5S2rBB528K",
  "key4": "3uKAiSurg7DvvoZTXgwh8ySVAjUastHuFFMU2myErWSV2nLqBVfcsALkyztg459W7zuGPgBM1zTvEsxkHmwrGNsZ",
  "key5": "3J5M7VewPsJjvwiWEtkN4TfdRJbzNitJrccptTgwN4gLT9TxY1dJh1v9Bve3ubAMZEgzS32mpTxmXK3CKohn2CGD",
  "key6": "4JR2LS5E3tArQqo3DVTojVXSEbWv3r9oquzutVToCxVLcD5vquQaBaWHn5ksMcuCqEShMjqmgYJfMFAUk8cJ5Pm2",
  "key7": "4DyfP5yddKadFhNcMghaHmYRDsi75bVFMEvbyap7pWeoaGiHNJo5xErePq465wDXJqs8j36d1LtpmaG9f9Anitt8",
  "key8": "5cYSjnKLM6LdcExLN9uCZVUy5koj9TADiA8LV3fR8cxGkHdHhJ37LDp7NSnNd7M5R6LqUL8TdaUrWqLtXoNNuYB6",
  "key9": "g2ZiRC899BZkBFogTT83tkHM1WeoBpMrp3ZJhBzcezKgpFhfAmgRqgf2q8udwQ5NWvs6QyW2o9F2Rs1ARLqin87",
  "key10": "1NomZsZD8ZSLNMSNBbMGApMQZRVW5WKB7cFzGXHBUoheaRpFTMvy4ExadJocQyrgBmHbQ1bWUEa9RLNwj1PtSJt",
  "key11": "2K87Pdc6sXPdsMVBwDoPJps7RfdjxdpiuzGAabQmMgpV5DnijDccnW6HgqSXVdPqQ93DaHyF4s6GJnHZ7iidi69u",
  "key12": "2HAPQ1BTvQ4shhHrJyJYRXsiUcYx8X5LGtmvrVShQPw3aZjzkeQzk3cddZ7UP1g8tdoFoZYd2rKTajU9XagJ6bB",
  "key13": "3nJHrXweHrEMoam9T26nTWXqnJuChE2Wu11p86dyBzmHAeDMzattVd5kAH5fyZWuopHQPuHEBxqxvSzearqR4qyb",
  "key14": "3Q1XiRieQT2EMfPojUmmaYMFTK9gExEEz42TkFQuPdEhx4avuRwWN4D896G6kVxaZHPnDzimwrwGrHzNCZ3mg1s6",
  "key15": "svNsxReex6PW126wHyizriiVtpqxSYnZrpiseoHG84ReVHsxSdELvRSoCaEyRXNTe1mhNpgw9S2hn5VYA7cNiyU",
  "key16": "sGqUQ7YuEtRMacfNVEJEHNQ9bx66AtxmmV7PDwc2nSwi94fz4AL292RAoLHYhhtGJDAHy8fbvPoFzMjXwo1RMFu",
  "key17": "2gUxxfiUS4SL4hwU5dZXaU7nbCXrvm2VbtzDVip67XFopxyU1yH1MFZ1h3GSoVN12HjHshbS7Dxe7fKf8pEqCVjX",
  "key18": "yt21bhBT83gNseAfb6teSD8HyxMSFvpzpzekSK7j4gHWPYk73u3nmveoZ5KvuH1EQoY5n6Y5mE3rY6FtbBagKfP",
  "key19": "tij6nibaGyqohxpR6BDzfJVLApLKJQ3qn3KMPzWe3b1dJQYh5n4RiryynCfVHsfoKpdJeTgXFAiEpqJNkbDrLiM",
  "key20": "3zyPXzt3yDDQE6FAtMWprT9ppoGJmGpcadPMunMvvnmE1TDfKGKLgzcBxZVvDKK6J7GZqP8xhNqeHfdCKAwsjR7J",
  "key21": "2qudbNKyp9BiPfPhgMTR9eDQXJciC5exLke1fYwowJeuUVKgbQVx3QJcQ8L3TAeAxvhCtcr3MgzBngbMK3eK237U",
  "key22": "5FUkES8t8CTB2Wyof6jvZmy5R8azco7C61BXTkSMrYgWpkRfpvvpa6TpkTsHhGc8CqBenWXDMg5E63PEmBmYbCmk",
  "key23": "njwZR3PydRuSJkcN8i65UKybof3o5oQMtGxPGS2Fq6dVjWsjWpJVCsxNhg1N1XrabKm5PrympFDDBR7okCtYHZ9",
  "key24": "3zVN9V5d6wUypSK4bh5UfthLRZDs4bKd1tbPfgsft3VKskDrgkKu8ZpeNKhWBDQ7YKvW3wEjzgNK3hM383JbxLp1",
  "key25": "gZq2ufhFg4eWBYHGskeuL6oVjCjUaZiGLabVQeSiUwedbKYdakn3TdbSCVXkJv7voxcuVEpVHKGysv5JZdYPkQf",
  "key26": "2z6NCViZmTJkwRy11NgNVrKAGzSXt3FEzC58mVfNgNh9DsZrtpAg9PmNRegva4HgBYBupGja9uHo33kDhaXNv1CF",
  "key27": "4DFQAfukEcCbsnuAmP6WDKRjoCdcrQT3ebLFpW9FqbJYrAPzELcuRcExG1K1GvBPEH4skuaAWqpW5Zsge99f1tH1",
  "key28": "2geiBBPR7ZQZ7SKT6UoUt9jY8vdg7L1a4kii66Ro79hW3tNVUKLWL2muDWNHYk9LTLQ1pGM1gJ81WfjYzZBoZBEa",
  "key29": "5Kdh2saJUMWZUuCciEfzUtBn4fvBDtPemB7mgsReBEboeZDt91T8kmS9c4evBPe2xADv1NoCnpjqJ8E7wX8aTLBP",
  "key30": "3Hihqg7nZYo6UCW7rDpiVBRK8aczRu3hHnMVimXihCY52F9J7N4pf2us6fSUd6VwR171wM99NK8VxLfRCiKeanu",
  "key31": "7WQTYrapZPo4bYkJqpRsfArVU5zaSJzS3nbKSKxwtpbbrhDHtrsFRSGTqiYRD4Pg5FHQPUWrbWsuJBNmSFFRsmi",
  "key32": "4ZvZDm1GEfdFiip7sTagFUHattZnk3QqXRrPzUcVJ4EtuHysLH6VMHF6DcR7Wj7nf4sm4Q3M8bD5QDNF4vqzTBUy",
  "key33": "4oRM557qVTfBKMMfE1JYqtabNx8vCUX8d69Ww3b5v1CrhurhpefBhxF8h83A2qWMTa4qfSebd8S4y7oY7i5NyRVG",
  "key34": "5HUrpDfkb2vcg3yhh44Y1BFou4vUZsA1fSxSH4gqxDuyUdveNWDtSYumgdWPt85tWvcp3K8KwDgxwRvAJncYpi9X",
  "key35": "44V5X2C4RVGGHfKpvjnw7Ts1oDQ8kgNqWGQf44ooDYfcgtqMWZXwQWaguM3Ea9GHgoAyUYMAm54YuXTGt4MFktMC",
  "key36": "4Trj8KgNcSXXfjvQDiaRmw1uvr2LYrxF2wW6HnJpqEoNJu9dxfYHeS1sqzwDpeNLWhW6xkKBxLqbrK7tyGatJdeU"
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
