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
    "63PVkD6hLB9kUxS852noNb4TRztRU9AMCrRYgx7LNaj8Deemyacu5q7NPVjmbhXHLX5cgjwy4aXPJHRdxLKNP2DX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hp2zu6zjNXqeDyd5BZdVVW33qW8h62Ti1YRt3tk6bGaXuQUr3Px1phBCb32zEgn2v4UArwAbijGS4kdNGSJaER",
  "key1": "3WW2tRMaQsHLU1YZ7yqQe3ZC9Y3cipXKJkJzLxmXoFunLigJrSGRQWiQq1QCAiviYDj4jGc3bNj5Zov4nu75yw1H",
  "key2": "e1ibXFePqGYNQKtPJKAcKKuwJZS5MPviWRmLFohVmdE8nQWCNw9fWZJkwcsNS37tudjGByoLdxzq2YdodGVa8Ds",
  "key3": "5qeKm8REiK8Y5i9XeRBX59bsPCACnBZEweRt37WdaJoBUz5D8Xyr9LEhwqytTMQP4oCiUVMnp8pp29vJ76fjD27e",
  "key4": "48bHWfXpXEoQTSJqU9iWu9gANGPE36ctbje5MgCBVxj97gpxEQRJ3fkWjWRgqTewDzaEqJxs5NEjEptx4qHtUdL7",
  "key5": "TWnvXBU5kB9YEfVx6YC7KoWFP84m85hYmQ9d3FGkANN14KFmUBGBkHHLhSERajjF1PLT1nbgxQSwzyac2VEW4sA",
  "key6": "51UNXZzRwEc1x9CyVgNgo46LZTEoBkMvuoEefVuHfHfosNVxKodr1dwBE8hh1Hx5aUqhVu6vmNFm71sHtn8n2ZkY",
  "key7": "3VsNhXr2WDuzf8e6bsAWNjwjjNPj2e2QfgaxAi9ZMxvhSExcYDJFN3L4LhoA5ZwoGMi8Yh5Lz2Thg3H2foHhd5o9",
  "key8": "3X2BpMLn9LMhrzXe3SD37ijSsUMuRH11JaxTmHCoWnAXyXiVDAZqoJvZXcp2gXkiJEBuH8pkCQUouYPqydnEMtXi",
  "key9": "hK964SGEt7kbiRMTXFe6zUQHRA2a3gVUHyD3o2h6WYXLYiLRhiVTdfdc28Jkv138ByRacpSjdGN4dE35UXHZy83",
  "key10": "2YdprYpsLdBYer2zTjbxDVG4Ubs6gFSR7pg2m4gPt9udUjTQbUTSHS9EtcKCnqvatYqn8R4KvYdMQCH3ygAjvaKn",
  "key11": "PRAk2qoGYPkB2aZ2uGdYGnpYHPWZLkRDT15LqU67qBEyDSgS6mRpGujo8JtPJJi3wJwCyGruYXFVbU8A7ZLjRCu",
  "key12": "4y2MLT31nkAJx7dfUYBbeRGdhwkPs4TsxyWge6zeaULFSLnjS1km69uVvTZMUj8Avx1PNNwdhGHY4hqrb7dwtsKK",
  "key13": "3n3YbFDy9bWUVfwWk8uqwGXAEc6hTprtvKSfb7MhyXSRovqKofjrHi89koBcMu6Yhe8Fnt2Ek2t5qFLeBLLLxzKV",
  "key14": "cbEqAkPwS3rFTc2R3BtGtF5Gc4srjm9cGGkdUuf4hf1os7Q8hPusRmrXaPt4kikxvVJv7c2a6HZmopUU7g9vuxr",
  "key15": "3xDwiKo7WX2aSH3pgwtPKAv1M9bTg8QLgtpvZTH1f8awX57ssnazQXoRK52hcjXFzpBKCcjwYL2c4KYRfb5xsSTB",
  "key16": "2B75cJeJwmGe4FYzSvAkgXSxgrtqx5pcCb6XZ7gTn7jZjn4abMxb7NJFVCJYZuyfkNPPvbnu8BckgsLfvgu93eGj",
  "key17": "4w4vFuFTDN9jgHiKKtP4x1usLweWbmVbMawQUpWBUhvQqQdQ4DToGhjEXDSvwrjCLzKHrQAHZPsTyzsDgowKQZSi",
  "key18": "nYKvAutGgaqPmJRbcnVwVFoHA5MnE1xe6m2wuNX3CdDQrJTEznYNWiTXpjvd1zp3mxnRQF9u4oK4dQgFGXYKH6M",
  "key19": "2GocEHKFKZ3RxodVf4fCkvDmvhmL31M2wv5U9o2dDygYi8jA8Tsgv3KcRZsq5bfcXP8tySDFxLC3wy58KHqd8UMC",
  "key20": "k199M6Vvso96da7JSDDs2j55Bd49ZVfrAyRwWZzL9gqC5tqFjL2xnQGkTD4S43Ke14RY79L6ZFd3uE1mvH7BpAv",
  "key21": "3uQHroNKqDT5LdUQQxR7iz4g1QN3Rs9Dn9YodiwJbSs672zYFvTKeZz1fXToCz7KcwnzsjgYbJZt5QBnJkMPGM9f",
  "key22": "2WscdWjHTvvq2UVh2Znc6ehaniXqEcd8faog45UXynXVtan44rDN6shsBgEjLAytF8Jk1uZSXZ8aTrNE9UYc8GhV",
  "key23": "3HVReCgGVeoxziHLbhgSBhYFJUrjRFk1umpTF3K91vWuoZDk6487T3cdJHctJ9tRRwkyjrugGcttu3VQ4LXA3zrM",
  "key24": "4ij7pztPDUxyvfHWa58EtVpitVmkJhNCfMdX2tGaoYMEhLcggipe9bAt1UAvL62VwNzTvapomQPQEcyj9Dq9QRqF",
  "key25": "JcuJHtAXmJHBG1aPUGFRVWmj24F4SfShbVmhARjkCXhFkhMjZNSyaSgHd1m5VvH8wxnTi1zF2fzCmpEjGTzdJPe",
  "key26": "5BeAwbczkYFReMewxxTQuMRAbDo7VQdBw3dq6tha66fojACNsURkYhQ9btqZ9rGsmS4zDtcjLTYsJcda72zecdKq"
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
