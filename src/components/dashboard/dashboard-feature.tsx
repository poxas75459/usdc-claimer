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
    "23NZdMkeEx75wgExpGtbQ4HGCZobLrAmeSKjTt3XcT9Sd32A5wZJdUFtGdp78yCnfSGHLiwbWFxDUoGrnDFmUESS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCnHuhp2odpsYosJiJY7zrSLPFMh1myBzVEDmbiALBdPhCJVsdsXdmvqf1Ehg8gmCb3oeEjkpfsByvB3cFtQCxD",
  "key1": "4kdYencp5y8CURVRFAVCv6LmvHfCYHsDRVydaV1ZhCDRNkawuQ7D43hoHbBp9nxGhmrQFomq6wUQsgtSPUNJY7Lm",
  "key2": "44kcWDghE8Nah4wuFEGcBKGfLN3BN26FSm22PVWSnwXd8uiVzTMLkdRdzKfdrPjxpGe289RDVhGjb1Z7LwxL4zW7",
  "key3": "55ttDM3zeNokbd7Uz9XaKiQwdm5rdvEG2ojQ1dwfwZXYECSZyffgy3g7xLSaE3rpBi3ZFCvLpKuNKNZoXYAP4Mw7",
  "key4": "4asPsVfb9PHa74hskR4xryEbjhGfjP6uLkhxPNhLj4DF2bcajCvYJmDU1XcgG6pFwz4oQk91jDnynQ8RKNaHpjSy",
  "key5": "VtsjtTk4Vp8cfs5C7YWaehWb8QMscpze7fHFpBjUdA9JGAKbwD6WCwMV3qsKF49mC9sUEiRizsyRUAyqRkjNTPH",
  "key6": "22zSxxoscDppY8jRLv8d1hMmrpZrX4Jujq6VofzQAH3QG54puxLUjmmK69kgesXDXRzS2QcjfMK6Ti85xkMdzwgf",
  "key7": "3SoMv3SP2ZKeJAJBZpinrHZ9FezCBT8h7NewoSiLLnc86RfPjYT4iu2n63E4thGX3mwahVu3N1TyoBfKouDUADWf",
  "key8": "2i1dGLzwr4NCJuE52qi2USsCSa9hFZghj4vV4BDx2FMccqSPvGndfgXVPqpKZ9JkSC8wRgDaJ6ZSZ7KkSnxrU6fN",
  "key9": "53eZkAVp8Q9h6tYyvZe5cPae9ADbet9XRmRJTXDeLWNocnT1PkJRFua8tJzQCk13KF3FvtDQyaHrDaSGzpc4U9Kj",
  "key10": "4VZTF31eptPE3DV5sZJY45jYo5gCS5kxLdoDgh4dnxG9qqt4fevETswTvRUPvUWjGhJXoLM8pNgJz3CgPz1cJgo4",
  "key11": "4R4wyrMyvAHdaBtsNiVXhxUo1Ks9PfAjR9h4ZLRwPfRGrUJ7UBR5Kr6jvynHZiU1urxXtapLBxtbQmJyGvb2F7Wo",
  "key12": "2gk34wt6gBN9fdZdNRobFHbkHao538vJApSSQE5KiEoQMdNQ7jBgqX9ZY973jNc4xhJkbMH6BZXMWjzJx9zrELHY",
  "key13": "3Ed5HjdJSyd2ox1EF3azpERJM6H5aJeCp91RjTBXpRPnPVVeRcmZFUQAtiteWav4c8v7qEK9yZd4yJYMmHHorTEv",
  "key14": "4DamDUdFPCQXKgJSw8zS331jpuUWBk3RdznDdZHu273oPFVee99CEHTdemR3F4WdUASQ8cGeSQzeQ3uMptZi5T6T",
  "key15": "5hLHPHk4E5yDJ6yf6fiv35GAPGentANnTpc7JYhWjE25kycvYex8rBjpsTur4xBdyFpcdA5nPPjpde43oe2Wj8PL",
  "key16": "fdzKQFbfP5sLMUw4dNKutyfcVQPxdroHp5ouDEmMmUQAHWZNnFMFVLHi2tBDSostEiJD9rQ6XUos2CP1P9L3KQZ",
  "key17": "3TuzmPB8b7XuzxS4pQHLqkHBKiroF8C8bU8QJVrsohKtXvTfAHhJzGWt3PoWzYmyRz6cNYgX7m3u471BybYEf8BU",
  "key18": "5heHbXWhfiwuc5AiqYbjqgVzk5qGJQFk9nHEVGZHTZR2iftbPKYkQfUPf3Y4ipeCsftN8ruAzx7CL4LbCqHYnPmJ",
  "key19": "UC9stUgnbbqEoTkeacPcjBhuiewJrMUYP12sPZyWgdBxTy4Zk85dAAbeY1M2vu1wosrzHhDcxZWW2SgsERrnKfu",
  "key20": "25bswxXh4a9PjZbYg6iQBwHCPaFfFujUoFhWmBdMFvAfvcFaMW2PKhtQib6dah5LxUVPx64P4MhqmiHpweUAwBQR",
  "key21": "57QjxzWsYeSGbjckipzPVEp1B1BMbHuRYAtiiyKVbYXFhSRKUYR9SxSdgxhzZEpprdFuHNACDnsixvybDWJTygRK",
  "key22": "3jU97DU64yD1UA1KFmmeY251NSmuWkvVuDEsuRU7GRQxoagT4ABSsf3f8okSxhSrv6yUDFNdx144TGM63ociHa1H",
  "key23": "4kbPER4kwUsD3n6ADLbZFaoA7ZVQiMsHLRcRyDLtve3W7EJ1wtBnqMyrwnhRxjhtLHkMoTd9nVzHxx7XomFM51qY",
  "key24": "gLuaYn3aCNKf9AyJGSJ7JvSqVmBmcdbBwhrX2Ej5urmVd9kBVWpJruX4V8gSNu69XHbRdMubbqwhCR6us6D9YV7",
  "key25": "56nQJBDeGbHDoH57d1HdGKeFJTuNDeAYjK9PQkYyzB8YrXFXzTNX6nLQLXHzhMN2Zfx2Em1us5wKBXFuGc7Fr8p6",
  "key26": "TZW9BcxBn1h22FXtWTMoMJu3xcLBpEkMf5ij6EKcLfuxWxv1RZJi88TAn4fQJJnT55KFCXf5JM2y8DwYvVpkXj3",
  "key27": "4w2PkGHpBfmNrmQydaa6Su3UkKmSGvuiK6mSSwuVkEYuyBnyXUBoRGavaCsXnFbKK1NkK9TRcsp4khPix5pVpvVE",
  "key28": "5xRAMDLS4hoRtgefWxAPCYuWDxt6vJWEh3Vm68UHKX184zCLeNQ6opAbTNRqjhbFZW8TNkZakUHAynVwyLrnMWm8",
  "key29": "4y4ryx1K4WhCL1GhCqKeRPfLNNEL5rcmMd7o34HomkooKqxpWGAij9CQHLKVQdsPfarVxRA9rEWhANBYSZfreTYk",
  "key30": "239UAi1ddPN9gepcR9ChBBQkJGYN5sE2ZMGaSgN9zx5kHgYzczeKPkmf4gCvkNp6uckkS7R9axTJhxmu3bcrQDtL",
  "key31": "5qC63Zr32ZCazM5uS4onAWML83cim6NQfGeg3xMGkfbd8tqTRkiwUgpLSLBC4H4knr9tRzhoHbbpcPutTw6EsMZP",
  "key32": "5cDtFkrHjhSP3qAbXa69H823HUtcyiFNngzj7hHbXfogZqGUL33aqqkvSuhVWBwhoysquZbUfTacQZcT6i1mz8bA",
  "key33": "5K7t45nSfzw5tnWqVFSG6vNnWujuW3g7WFvVBDSCdEb11qaKybk5AaVvs1qZtUe5VCFS6fR6n5AUHDc6Ep79z9Yt",
  "key34": "4va5jmKKmVJFEuxveLfRd8cBEh66d8TzRrj3ovy2sGQeNd8Vvj9NKcguFDZhDCoG4PS5QvCGqCLQguQyVAbkgj3x",
  "key35": "fPQs7V1b7a1rXDzgiqReCUzJJs2EJGM3MJ6rtwvTifgr7kvjrVkdw8Eyswgy4fmjxAWdTYeQq5K31Uq1VeX7PyE",
  "key36": "4bBjA2eadz2BBwxd2cf3NeezrWaVcrfbCPtqaAFeK6eNDGijSsaxPVN8XqLYxf22zBEmtYDp1ng7Kcqi3eTrnDEC",
  "key37": "2t85YUWQy5K9wsWeFLuTLmbBBA2kLNDzoUFYrsJMPctHT2QS71pix2nzzzdAgudWz5MF9ZcEcxKEbcufd16XEd9M"
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
