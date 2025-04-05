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
    "4wqCeBMp8x9xFGeSk9NKuNeYNBcaR3uMjF6JGBtA6CDQGFt975idpvkjVR5kkLg68SfMhUzgGr14rdMHuASesRrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUxvDzkjiyCvnkdksYiAj79aVrwbuRxChqis7PVCS7Txzh4JcCt753ZrkXUWuwGEGzHYGjvog8pFZ4vhhVihjbZ",
  "key1": "ZqZeCcS41nEBG8ASfn5mWotaxuyseMfzWeXJmtu6q6HsYeYMe4SBsjxnFagNs9ZWCzxpD2w31Keybhd7qDVPRdc",
  "key2": "bUfzjrz9KMrYNsH9r16YqbdVLxRPtPJQzne21qnGroGBejqhxi9pggGPfHHHedY6uoFzHHeN9czgZHM8f9u6HwT",
  "key3": "38jw5TaDhMs7wBeE6h69WwnBT5XCQzQmX1UQ8gZW3JtjLcsoQ9k28v7352tKSChg7WagmN1WZq6bDWB79qDWfXPo",
  "key4": "48EpewFCJZ6pUNWGabPKyfcmBgwyvU6MfaDjm5ociTrhpRyGbcjWy6V4kNfVpUmQMMqFoXAB7gUYWmJvFT5cyHpg",
  "key5": "21Ph2PL4gnrYwrCQnpJ2UT6hMC6vCFAuJhRSCXWp9m7NJtPLUNqdK8zKYjmf61UQ385M4FToW37spoJXd6zDywQd",
  "key6": "5jwd1d7AR3B63p8v5pihXxDe1eoQVuMgM2R8Bor345FUYR6KYhHPsPVpCukDdBZ3uSEofk1fdbBsn38Ahkiqf5ss",
  "key7": "437cVCGwx3sjDF67s8juu3Y6RiJQK9EpVeCfYKHJGigpfdwf5Lqh3o8NPibdRuwtBzv1ws4BAKoDufJW11ovrGWJ",
  "key8": "264Qn3eiMm7PUKLaybi2ao3jyPGY7th6Lm5xUptdpt6wwmtt3BPHhN6xCudeWSe3Dq1yKGdtHyQmtNQrWrdK9ZsC",
  "key9": "2FJowWW1tf5VkkuBMeKiq2nwxmT1WZAKtF5Ns6EmwWv1fiXifCxULfimyLTrGkqF6TeU6j3i8BZ42tqCVZ9z56Fy",
  "key10": "4UUmS5FJa4NcMx6nE6FCuAcQzotN8bPMwRSbNVDGWJUuUfdDwrcc2MvcyRbskqi8aAaZfAT3ZVB4DzJupweVTBiB",
  "key11": "3PBbBiMkpjjd9VGWXDQ8jAweMjCCMiX5H4R31iNGsDm4JzRyBzGaroLrdLTsuMSToaq1j1dF4ny3T7SvhEVQZuBE",
  "key12": "5BCZCUQiYh3569ELJmakxxUvqev5TqrALZ63VccKEz3ytpL3ZPSVVXJDR1x9rRZpE3mtxXbq3inMvmgD7AxBJ1Cu",
  "key13": "vVNnnks9sTSR3DiX2VJsVXzB4S7eF8fkWvJWs8MA4sFBBWWqRGmQqdCQJPZA7ssLpZpHkyHuQorYANXJLWR6aBi",
  "key14": "58hZQXHdQivcWs8HeCzqo5hfHWwF7bCYYBuDJJyeXn9xLgLXBkK2jdouQgH6Ls24wjkaR5yAfxygvMTm3j772cvQ",
  "key15": "2Hp9pdxm4SoMEncQBcRuhGAx1KpdqeboBsHZUBzQK6BDk2QeNUUNuTagDSJCZrHQAnXuqyb4csmBVXLvk1dij3py",
  "key16": "4PKE4fBvSMBkZV96wFzt3oZXaVPBPTUW38gtdgEbLNXLrPDfGw2bdStatLTuWhvbM2r6smGSSARMDD7xJpSJT4SN",
  "key17": "2bM968qGWNmSHQQXzjusm7tHTxGZrJcPQZyghFsvPaRrZ96ocwgUmeE3w6nWLjcZ7YvV2ero4XeBSXtJ8YbLhUZJ",
  "key18": "4b5Q2T7QqwybjYujWCqMMb81iVj8iGrQKFH4cjxRevTWcnZ1rLrKsZdq86BrmPYBSYiFeSQ29zCeobafGvzjXmRx",
  "key19": "9t9EHwpgSgL2qFfgRahmKnPWUbqa164z3WHRrMj3QsNYjggD7aFquUDkDEZmLGP3yXdHkyK2TeRFmjwXV4VCzrY",
  "key20": "3QqN3M8ch6iaRF1HcQ47WSyrB8g2kWJ5euZcqmdDgTVVoTKwhowdib4pNgTPenXama9WMGKpoaqXeLEUYsgBVknJ",
  "key21": "q1MrhY91h9ie4GELctuyKFyBBi13NnuF4t7No68MHLcdVCwhR7k3zawvmf1vkBmCPFJziNv5igz5qJrBtiyWq2i",
  "key22": "48PUcsa4hJY57wFm6daiPUCA6RtBVWEbEvFx2r1ni8f43cgAAeA9Ztts1WHDNTWvySFFvsTvNyCm13ZZnWGG5iCT",
  "key23": "4QrmnxEb9Smfgk3RbsQM3qBa9bS7mGS8SGfzbRCRMBks5y36YmQkknvEYYszeS7nNjvJeDPbiBy7o7AKrNiyAFVa",
  "key24": "3UHzWuRyXqW3LFmJ6AHpPL39Pccsb1LoV8Xt4AvNTWG6a5hTZnuVnR5DR7db2U4vhWRQMRjueucFJTxmaHSGG7aL",
  "key25": "5yFg8dx8zXbAsZuCQmbQHY8LjjvmKgAN2MEbxjB37ZGJt5baHP6XkZ8Uuia9zXeBoMxnFFYEByj4KbWWDgTkcmmh",
  "key26": "2fJFSHMTpE7QMqMLwFboFMLRMf34rjAhFuzVeVzDicLcxv894atGP1Qx5guhaSjCJK7izhaKRPj8JYnYjKmGneE4",
  "key27": "25vytqVXuwNueAh3SSBitxWBYhVy2nMEaezqAMLSMbbuGTFgoFfe3Eecr8ybJVFhj5JsVmEmMACUwNR5hmw5CciP",
  "key28": "5MwejYVsbGAnHYt9pz8Gqux3753tVDEfZmha9jPsTMDmZtBZ6P8qnpdBHCPrTKWAxWt3yDTcNi8aR1nucveCGqGg",
  "key29": "4oNA3kZXQKv3sQAYgt4Fuh2QCG1AShAe59oDmgzpdeD2jUqiVFidxj7GAwxHVX3TaEZbJHGp9Kv2V6fqh9pmS9yp",
  "key30": "RpgaB88Ag1cWVCggA6ohC4VWV4Y57huY4S7oEUANfv9UPBh7BUUEoFdASZyZPxSC3FwEcxdDXd4RWAM7sjPq5Fv",
  "key31": "su1zg9eGTRVjCysYfCVbY8pUCDHbzqrnr7RkcWjx6m5Vq4cTH4rJwwFxWtDy3cfzYvobaSxsFETjoX4PrWqyGut",
  "key32": "5qvdWeL2mww45Y4iWDhWLCwSmqB7nLtKsi538NDhRPK3uMoETPmUJWrvRPitn78BKsDzKUu3hTUYsqDacK51BLsZ",
  "key33": "9HiqwBQspYD98fbe1m4DX3kwrsGF9VFWfi97WzLXFvppChJVjaEF45eT8c829sjtt3EZncMQg2KMnpoE59Jn7kX"
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
