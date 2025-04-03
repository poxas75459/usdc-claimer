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
    "4emQQo6vnF3MXpPjBJUANkRmdbQwQygLhs52bYL1nstveVNrJN9DhYPTJHapwBdjRSZQVWSwPk5Mtf5TLUebZden"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pAvGXyJfCxpo395CSqWnEFCDaRgGPFvMAo5t9M5RCMrLgmwPHXSk6PgLarDcAVWxGmQ6W3uF2QsXxN8BM4kbcmT",
  "key1": "EuSKMu1Wx4pkUqtfc3zcqowmxCQDuZCkm8xrrvYbUGXbmcfrQcNC17ePx12qFaHFaX9VRNNrwodmimhscuLWa1k",
  "key2": "ptWwkJ48Xs6x3QY3pPeMrJyG2FgLxSjQubsNdzPhE5Dr13Hipc1Qe8gWPUN4fHprg1GiZ67z5c577SiQENV31RP",
  "key3": "4FGwFqSJkJ42nhfsuZUva72wAhGWM9XAru1EaCDzeM33aNDZVGw2EpNfVZNTxf3dfpXJj7otdL4HCEin9u2J7V7U",
  "key4": "n18NM4PkJ8jPZZE7yTDuQwg9tnuXdMa3hmQ8aePidRYNw8oFLHfXvBoCpJXD4GeWUwFMQPnZTAcDTrkTYu4jmnS",
  "key5": "2KEf3PXe9D8YkNfgXkY3YT6WrzP8HSKK94ZR6Jy1TAvwDyBieJgbgjpmxPPpvbSps6AirWACgnvADRps8maGv59t",
  "key6": "q4YvuHyL3E69o929WBmDhuuso1kfNNdYwXCnduW1SV9dBWgyxNJDuoiZXaEeFJ2e1J2eWHkopuyXZKcHMZ3KRHD",
  "key7": "42KK1fNqN7VWdzJesZ87Vowj2eKLqo6RLGmGr9oRN5rcYEUPJUsyEhpjuJ4toiceXAsPQzeMYjKxUKVyzBmu1ZQp",
  "key8": "3kLGBRvwzQbucCDzoz8KizKEk6u6c3Lchn6rL7QUaje338FcBigUHdp4vufoZJNDRthpuuxRkNBMGeF6BRMXckXu",
  "key9": "2BUaVZuFeLT8uGLfVSRarqPgwpBHzsio8EE5dQ9THd6QejRp1241qx71YgjooraW2GH6BGjAzkURWCGUwWKWTLK8",
  "key10": "2p7DJKJTMUUU6iEiUjbbvUPFSQfLb86JTQEU9hD7N56cVH4cMigw4BeXMfQkeb4kHntYYan9BAm1UeRhDTeFeRkn",
  "key11": "3rDKDnTWNpZgYvhokc1VEbR8ywY2UotzRbmjarxAf5b4FK6Ap7iwAihGaaZS6AZ4tTBR21HQxk8535tMbEta7Zh3",
  "key12": "2FktGjSpJ8GjkFR73cusEyREfYkRbXxcrqYKFkxJLDRKWjELXVLGiG4HSpKR3WzoRTD9sY3YcJrRchTSU2cz4K6Q",
  "key13": "29UFHkLzoihLxTxd5bCmw44CMEcQzDX5cF2gQjhCvbMthg5NnoY75ps4HensUD887NBxp8ejAt4r7QEv5cMhM8Xh",
  "key14": "3snqdZGJHMGEXdYQe5rtkzz72AC27V4bdcyGhaSCnD4aDAc7K5Ytake2Pk4ZP2kvVJzep8C3kexMhLsAEhgWVcSK",
  "key15": "4S6LM5VcAi8sHnusqqj3aA9jW3jd8K2iPCNCTmBeA3mrGde1ecfiEE3MFJdjJQU8NLvFBxx7rpxYJhzUSeJff3xR",
  "key16": "4f5fUMR8jXyhxvEfJCuLYVggymVTd4Jp5mhVgTACy8e3AEPGw1sNpXeLbnUhy8A9rGPYHA9sin67w7FVbULt9txd",
  "key17": "3iapvBM7DcwmkJYKvgU7poJ8perx4Y2T3eGF9YHMPHkFRVktVE481KMtJnTqzLqkRRx9VKZ6tArqJvTE1EP9K7Z2",
  "key18": "5fhdGrzvdq13pPREi6p76sR4UpErrBcZvWBxC3QNdkCEDdCiUpWM9NXWaim6quTKs3Y6WsTxz7E6JQPMvJZe7fWJ",
  "key19": "448jUZgMhPpMW52KKqs6Jd9FPybMvMQ256xvnMM6AFz6GckipQfyM8bVe3zPcLjNLtv8qiky3eCjAjFxGAEaDk3W",
  "key20": "4UZYqA3hjt64EeaQZxHsbArsfXfxs5AXRKQND6kFCdurFCMm87bZFTBq9KvySQPreJ4Ebesh28fpFeSFdNBpmkEm",
  "key21": "644TkMLKy5Rk1uuCLbhbMg4r5Fagt7czXBz8Tu2MrxRK2YppmhwLEkdXyz3csefPrcJz4YZSjwHYgdKAvZdBQEqr",
  "key22": "dQYHWM11jmEgsrqABV4iC3L5qCrBq6dTEWumtZjkkWGtNKqJrow6QwU92YRkrP8uzvRkwhd6hvdZfKA6hdRc9xL",
  "key23": "3VpZh5C7EDUxPbtZTDrBXvPoprL8B7VZXdfffMiSEm7zJaHu1ww7g9gyQszvkRU191JiQM4odUSn54JUZvAHHPuW",
  "key24": "5ZeKTD4u1rwDcBGnxoS2JS8PLeikEY83Ki4udkvETroptmQf9bgwGSfXYRkhikE4NMt1nDBtxKLeDgq68XeBhYrp",
  "key25": "4Gh3Ymxm3aCiBpSfwRGiD7v71mdhxXU8noGM2rvz6PzKcdMNfuCW6uWs1pRmCAjDug2r2Z1ELouqmdo1rtp9HEbK",
  "key26": "q1VST2hTXGRmw4UtEsv1D9cYqVLNangkw17eRp95BFiBdgwEszL6BfVfQYo4obd5oiQzjkzazDGUu3YyNGG5wLR",
  "key27": "vURxqkLL3GYyraLXtM2ZNfEirzJyJdi9F8z5NDeHZQL1RRfShr4MBAg53cyWp5bPLdGYDDWPkMf2X3JehEfAPoD",
  "key28": "5Rs3u2HTc6vjGLJxptZHsPanJ9pWtACyZXk4HmFxrGSkXrfRkNWZHx16zvfKVWBByYqwrrEbQeTWqrEgAbHiQ6zq",
  "key29": "5NHM3UpHeqvk5vz1cBj1BFNTkS4nizj3CSUyR1vRvAS9WambdUEVN9rXRSANEo3ub74XWxTzzsSnoAu3fzaeuG4T",
  "key30": "293vUF2SWiBUws3Sv9SqAYxFRG5nuFB4rYY5V8MUucHFeGKe4a54VcKU2cxDEUYgSmg1PRYHsFxE1CsbiqPrFxLe",
  "key31": "2mdCW6Mspq6E9TqzAvnieLpmkxLYXbfRSZgqKXaFVeWj42gvHM2XyaHvzhRhcHro9KT69rFRFLUYhdW4bNWvQxxm",
  "key32": "27netXcyyUZPvHqZs4texZoBnVZLs5gKCSuBiM2pSsNuXx2FCie14CkF7VaBuoxYWQZKxyNK5x1ixdySD7JUN4Na",
  "key33": "ZSKdtcMFjqm6ycuGfgrKBrLAaAFt9FvN6SJPhaAXK4CffPpC66EKpqorrhQqaFFYXqtjSFfN737oKYT6iHXAS83",
  "key34": "3DWLugvPqcJ87VF3uRKuVmbPBaVKnaL8Pa6qi5sj7zahFhHSEfR7fWeovzs835669XdURcELAUnps63BvkfNRTFx",
  "key35": "3KkmSsQGMxPiVpc9Cv3KWUcF7FLVUfYQCTScZyZ4n8LbsgbbW7HTD3HM9MLtpVvjas2G5hX47Spx3EgETRcWACiQ"
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
