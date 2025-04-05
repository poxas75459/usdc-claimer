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
    "4GpeVERws4hfgrj6nWAyf1nhuPPdrdEaLootrUysdSYbx1a9mGKJvXga9XvUJg9hgsJNdLrQg1aP6EgLvdprhzRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hQinUwNsMHqSP9wcikADNHKhBKuk2pZpHeAxKrEfFen3i7mH2Hc21P3UfuPAmZvPjNdoyhvSdqseSinNpUQZ11P",
  "key1": "5ykTVXNttZ6iQ4njx9n3Q5MFnhbdPrk2whCX6dJyr3qDHJGPteVot7N79KMHYAz2RYGH2CWECf1nsQ4oXXGsvmeA",
  "key2": "3xQ81MTKrWQbW6PnLhct6rbXccXEocoN3TGLR14NmhjiaFaWpHCpnPKFws466jAFPDPQDZnEpXUVcbGie7SMuxqt",
  "key3": "3SncLU5gv1Wmt3tzQo4bRo55rAMgvKHJGTMh3XCZD7pQQRDeRVZuRyFJ1zrunkAAibrmNZCZ1cwZQK3qL8mAgbbV",
  "key4": "5RyuzzETbDjZBgSPu6qJ2C1afaR2kRgvoZBH1qqbx859ed6HuToyPZAmQkBeDG6XybtkXtNozGToQsZAQGukeM2x",
  "key5": "9LvAsLgZ71iN5VzEV7YBKxfEtHLd2ZXh8mrDejvu3WkGcem4D5S37scZgUPrfFEQ9VLuDCKT3YHYgoBywe78fct",
  "key6": "41VGSDzesF9CNraFD4xBERnvJWHM1Li9Jw5ZnZgQNKSddcUfYAgdv4LyW173LDh927j6P9CSC5zhqWvZ5yVSDdSH",
  "key7": "63VcK26zDisBbvpqKTxCH1bPAZvjkJ99iyQp1XNx7J2Fd8AxgskCYgpUo1EF2FN9bDFbuszdcQARibM6zMM6ZrLz",
  "key8": "4UBPVfaseiPKPF8ooNbBNJGhWcDXng2tgZSj1YZRWcX7QWrE74oqBMEbmb1n3wirvsb1x65nidy9gaDioiiFw3YM",
  "key9": "5Rh9u4TBk1P7afJwfmWoZjWA61FJ4BExaNUPXS1zneS5vHuToRgaE5jv1XscxixoFHA3cCX4fzbySNP8vftEdE7w",
  "key10": "4FpLSubnJ7fAPQ6ep8j89Py1LJa8Cp8Ce5gWUF9kWVZTpBCPmmoNe9hkVkktYWAG4ujehqbQNHjYEWFRAt4bQ6qC",
  "key11": "2VMnk798Yvtxo1iZTCK51m3FGr6FrTZ3NJ7RH3wqwTeKJiWCbV4Sc4fphhyNPN1SAtvW1wLAeK2BqdKETVuym18y",
  "key12": "23eBquByfASqiD6wfLjPc25c9JAXkam81APajHXxbhMMDJzhe3sE9P92J5wKqdJCvZhCg3iedi6r2HfpnwVdt3Rp",
  "key13": "2VLcNXpNv9LvNgDQMBEcDzeJsDdgUWDTnsaCCQom2EwFd6iCtv9ZqPwbRiYRsV9Edmm85Z7zhqxbJ8ourfqepeu9",
  "key14": "5u6aY9Xa3j44y4rqZpX86HMYefVkp6Adu758rDVxug5W593rBuDkuryJhPibubFtw3j3PJMR8YBs3M8Uad6ZvbWb",
  "key15": "Ye5GFtbQmzGH9LRaKVPAdtFf6vGAWYtLaRo5LxJfLgs5KhhFfn8bm6Rewnurhi11K2uH7Afom6TpRPYp3iP4c7j",
  "key16": "2xY7cjU594GfiEGruxSYVpkPn8dke4buJjm8XuoZ5FQxHBW9LWLbUVyZZKPiUYV3aXnzWRcrmeu6FCL7nxeYkjiW",
  "key17": "581BQf5sKNr7sfnV7KWce3cdT6q3ZnqUJF41FsVgznZNxo5B4pCKDya3HHi6Gak6uCmZPqXJnbnghj2VSYRPCQNt",
  "key18": "21KDxjRdKwwzdLijm5gACqkcNwBsbdQgUgFMeUVaGSgrCAQDANiEtKcneQorJo8XLeExewWGJX2Nifss3XoZj1jy",
  "key19": "5oLN8SkS1vC1X13JsYDyToGodJoUV9kQ7be2K5WBjCVtLEznY9z5Qma8R793e4YJqfhzuBD6hfMWXXj2o71ngP4S",
  "key20": "36znCz19wDzDtfpfp1pdwpzdgcM94jj9NDM7B48XeHac3WhEh4Z9CpLmDACUsDVxPTnLeWwLuPd6DLvnXsncfL9C",
  "key21": "412TY1AvavPRhpcptEh2ucH8fzidomo9oPQGd1uJUar6Ntva6BcAe3hobZ74WbECDShNMNazwQZmpjKUC9nakXaU",
  "key22": "SKWZruP3fSRnM5Z2Spv4zJvHq1aFLshxshYCPm9bU6hqLvA8jj9RC4BWTfTUnoriffQdjQDUmKidFpJaRWgvpgq",
  "key23": "6551QYvMbos2R8nzfLmNUyd86ZYe8DPyyYQYAvpevaTchKTqhyXpkAENJSRF4KjaXyyoPb1nBYaxCgWH3U1oJYRX",
  "key24": "aF3efSXHfcvLYpxBYqhs9mShC4fbP4G4kZZ5yKMEAjAHXN3HgPaSX3C7G1cysaYT6nciDTSNYq9UbzoTSmb445X",
  "key25": "5hjRirEMCNw91iBS2ugEMQs1sZumm4k22pBEwbEjKF2mjAAgUpgBNtfXNmsLavPLVqAypH332A7H7QPm4CgxvPP7",
  "key26": "mVuDgy4BWX19tiptY2dUXSrNcNUpHXubghwBWJksLhRKdATL4YZPdwqpGM28MtNoNbgPriCNekkao69gpohpBev",
  "key27": "SBB5uRiwDxKnhmM2YRYVyaLof1mmVHWTteiscdNynvkbAHjVuEd5LLXZNDLJZFZRgt8vRoCAHqLjja1dC5ATp49",
  "key28": "HvwshDqqCknL9RAYob11aRuEFaV8vAqQ7QWzwDewpGzpZWsLNTZYu4YCuE5iLxB6q9ns8K7XPu4QwkHxba5Loxd",
  "key29": "mA5ircydtzdjRmV5ifWCigij1nkCd9LLBVBXXcDAFaE6atHLSKKWZ2fqcuFMUbBQv1Bauva8bVDXCVLRmrqS5Yv",
  "key30": "4wpkKUqSQeaYPiCf91EbkYixYiJUpute3P8kfxMzfKf1Akn2geSgrru4b5H23VnoSaGVKTkE9KtJv92r6JnUzgBV",
  "key31": "2Khr6erTTy8fMJGsrikjWZJkB9MMVEBnQqD37zawGNjp1xMEUcXEGfkg5tX3dFAjdUEcpmFkBMyqSidLArx5Ep4f",
  "key32": "4Uq2tx5TxoRyMgVoFzP5knu3pVdPPxQwy1sKsvGn8UtgKoNaq3v3ZzZv5zV2GnNGw7ozQRT7aAXg2U7t5tGbSDF9",
  "key33": "5VH8Lk39CsBgV2S2LcLHJ6gMe8UnbW3TXRbAzTU7iYD6vTXFLsvL86CfsDmVJTxyUkduFxLNccDbkPdSKMu5zKPg",
  "key34": "2tMGWQ1qvZ2D33KLfQP5vriD3VQ6DVf61vFt9gyjaQQqQBMotizqJoTMuxFsE4zJzdwC8XGsgXWXkvCZ5GAU9y98",
  "key35": "5KmwKJZRWfeiKFSpmp7WfMVRD9HmQez6aofEu5eFnLPzHJyZnDQXySQ1GFmZFo8rymfjTgn1LaZMVpLFGe6tJEay",
  "key36": "3Rk1sRQFK86nySYJoW6SG58gLmVmX4zFSEEyxMeL52jg83b3CFoVRCMTttZhAy2aW2UuqRwZxU6FUYdEqqxqE9qa",
  "key37": "42YY5VSBG3zrh1GdZz5cDGGJCQKdVuZnXTT5qzTrnXrdQzZmB4mseYSfivEGi9DACjNuemr2aTpWQoA51P8GgAnm"
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
