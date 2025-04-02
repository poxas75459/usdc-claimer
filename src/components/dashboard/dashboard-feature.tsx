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
    "EF748afYQyVyGYLFz7yFHputa3Maw4hf3pmTxAUmDCfHJgbGPfnPYFZHGtHeNRru2hv2mirJBDc3PX1siHWbSSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34S62xQUBmD7Xe37dKnKNLhMXkP1rDffamgezdaFJLXvk5roEeNaQFKGcFj4n5o4KxgtNZkgywdcwLUNT9yZp7XS",
  "key1": "57eSw6PdQexiYx9jEU7EZrHwz6UxSKTPAR6sPComgRV2qtz75ueLgQyYUSKPE7zpfGCMncLEQVFxBYp4MwopKTep",
  "key2": "fA4QWqKwe8AySb2QnrgBQMu183PYbuJCnt3So5p52TjsujPV49JM7oHWsVkeg64KeV8r4goYT8Sr9WKSHDq1QNx",
  "key3": "5U9TaVJPeTCp4k3UVNd2c8YBkJDGj7FvxDk37tDV9aGkKRtxeSiP3QL8aUvYd5sVH4RRMLz9j4yuVPwZz9PZsSek",
  "key4": "3E3GaZXwtNKYWFpb2PDe7y2GgxeYjwwr7UtETPCRC6DyPm4vhjCHMHwYr7hv751S1Kq68Wn2VCSbkHWWV8y8QdvC",
  "key5": "Qjjj5hYhQEaznu2JWGhWsmfQraLNjr2PEhsbKTpnNbUpdA1ciXXpgo2HJooJ44iSe3XztpoT7hDcu5AZvyTbWFp",
  "key6": "8qaYNks7EYHaTbf5D3TTa26JFRS5UPqFJxvZnYJyuT9oHYf454wz4dBVDXv8nmpEiFcmsC47eRUouB1N2Juyoyh",
  "key7": "3NyJqgK1SxTWiindaZ314o9LyX75jpq9ebs2jCnGUJmkomzMa9ApVVFrrive1pNZaX8XLKN6k1DgRW4ArjHBAhri",
  "key8": "3ZWCo8s9vnJ67fYYqCW1WwNrTVqJB6U8iFRNqEa9Betc36vm7kCNiEh3L5UeuFU1fWCx4NRmiZxzLNnSzpH7danX",
  "key9": "3tKeb6St2uKEYmK3QB2rSSGcy2rDxDiCY3Sscdpug4TQAiEVooHbF8ypZkc3w9xdRYkBap7qLa8Hp1F8SVSqnqCQ",
  "key10": "53S72uZBKeGT43Jo9rtEaLVuzNT4gYA2ReeX9HGV5mNGP7ixrLKBsxjV87SMCJcS6CW1rQDjxK4ms6irPPLkEjUH",
  "key11": "ZrFwc3gu3LUfKXQWNK1yoMGxA12sFhdzNaL1UxK4LsGuCx4962KZEXvMVnJThkbNdECCgsCqyQ5CyHbAVxUPpeZ",
  "key12": "3aF1iQRiN3Vg3ofpPCeNWf8YF4CPUQxYHEK3zxdfbKW5Srb2YMgbe4WHLZ3TnAZkeDfqNv1Lo2jkDVB6XCGthn1w",
  "key13": "3GtZ6HiDiHQVxvFR8EhKLaAhpMf2YkATmeHAhwaKWoKJMpuz9fDNgBeTyL6uEY9vMBVYtVr4fGRFB7jNQ9rJ7gpw",
  "key14": "3ffxxGRuioVsppJLsQNW7Aa92nvp7X4XcDcAThSfWc9wvUvjZFFtPqNCZJizrCgUR8UrEMPDjbfB1XHHEoEGyMAH",
  "key15": "5MfesxpLnP5MAAv9AJyAPSC7eWLxdP2T6YZocku8r4KAwMG2ECqoHvZZuyP1n1CV1Bdu3wZ2L9o46tzCt9aQcLJH",
  "key16": "3LdWnYMZKSkHx3CJM7rwPNcoCznf1VoFLQX2Pe2gHtRRTBvbEgABy9qEbzPKx9tWLuXHJ7uXMNfQ4Vbq4pnThG7J",
  "key17": "54W3SUZgMtVccJrokfGAVeePQKay1ecZKdmsyaM8i41dvSMDUbmEDMxdoX7WVkWRbPN9KrYob4B8Jp7v6MCAcEiT",
  "key18": "4YCLcsYFJz8pbFKSNsGPkhzXScKoo29ABDWkPzq3SL5D2gx72jdTwr6ugGVFWJEhWHuNGhzuUciVQn6jqnC5hgd",
  "key19": "577QPTpdxhC9CWkkuPrgyx3hyhszZsCnRLnitzjno31UKUmeozJtWBY6voFHMXNDV54fFX3smqMQyuLRSHH1Zpwm",
  "key20": "29wpEtX1QfW5AwoPPDDAqaCZUQe4vfS4wihnMkXdEP3HqgzSH3KU5zmevsBCpFkcPp9ENDQHmE5PQkZMidqdkAx4",
  "key21": "2LHGhhVQ8ERA374PyecjKbmj8JoT5TQPQaBSg7ZuMzHDHMyjsG3SAeQx6RVBpsUqZPzFVaVDdzXTFyXGhuiZyf6Q",
  "key22": "5YuktsTedseuizou71Mko5kxWTrfN42fN5nWckkVDS2C4Xzvua6PFBY2SeaqGQvH7Y6Bo6M6P9vEBPPYTyDUyRGC",
  "key23": "2EvotCXhEqRFdCsR9XuNYZodX4WTkDtmreJETBkiRTmcvYZGcMdrm667hrhKH8q8361oLWFKHZtVQ5UvTdzjEEgB",
  "key24": "3NrMwTAAAu4ZtCtpxTdp4aqn8XQCdJEATvnBdGGpEGWS3fCGXN4Z7HJFBmwX9kyBmjnQrFY6hDbyKNhB2RZ4dEhY",
  "key25": "3srfridJJzspGzHdXm6HhtAgAfcd9DevzdX6g3oemJMGM4v4uqiZJ5gbsgoiMTEw6KDyaihWc6MYAKrdHsWx3vpV",
  "key26": "3TsH4Tei7VhhgrxvPjfGU5aE7dvNr32vn8QXsD3UzQoLmH8FqwATS8nycFb2CMd3SMcM5A7qEAMPv8GruiUyiVjV",
  "key27": "4BFfTZuhMrCi5PBBwSCS4BCLLrU3H2hZftQpYiKta2H98fpUcpgdWZAz3BFGwJrQ1ppfvffji5xcmwrXWkS9L8dg"
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
