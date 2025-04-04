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
    "4GUAywkK1ruj3tCRzLr47njLxZvn71bHQQL2M1L4Gt8CVDrsvipXuES4UA9c2FaEVWZXYdnMU3Byx6zSEJX2hoSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmQTdUjJpCRYbBbbJyf59tvwbm2eqa3Mr45f3c6sha7MSTURwN7N6UPft17dhDSoiZLuwTz6Qnzi5YtroPuXHAm",
  "key1": "5428MW2ehq6jh6Fp9gyoAJ6cvkATLY3MXww9GH1DL6LWUYrHNhq3AqnmqrbXeUsg2RHUWAE7GHuPzSu9nNuKxmE3",
  "key2": "2PVYSQkMPcT8dpxh1oMZPkcXeHbXtEdVEN6pEidgiuxsuQdYMeMsvSTrMhu4Vrcie9pqir1t761mBVPBQTCcnbK2",
  "key3": "4B4aFRk4R5eD6uwbV1JBz29wzvR5sZwGPb5vUMS9YCsQgCQxgDubzSNCB2kCaF7M1go8vzzgmj7cWfVusrA9eGyQ",
  "key4": "2v1qcWH6WrECT6aJGSg8mc3GusbVgwqDD6nFVqXVGnSX7fANWxuCZ7z51ythKE1sU8hs4njWpoWVrPmHbb6uyKQc",
  "key5": "3ZQ464VsRppZGaCRRTW8bnTXZqvP5DPrzX1eibH95mBh5thf5yyDWcBu5F8M3goUjTbA5xe1QyMGkBhZWVLQ47rG",
  "key6": "S6GFqLRLEypPSNLo8qiEJGHEtotSuXFLrJeCiRPpowMQBw6w3pcvXtdCudZ21d7dqfonbqsMtBABgwqM8FuCm7r",
  "key7": "Ds8AEjvK21sEyW8mcZR1MDnmdghYNEyAZkrLgG2mtNbGFTzhRaY3Yb9g4VW9S5Zby7o57H9RMYHG3sD1T8YTbU8",
  "key8": "5camGkQPWNYLcPNZg9SCeM47QsvJo4o2GLpE3XbwRkwXGgsQZecZFnTS2BftuD9r8kzdGayAWGk1jNMeTiYTM1gp",
  "key9": "3RWyKjj7K5K1Zjm3gNMmmQP3NNcue2AgwXJeYBwLGVVUsu1NBc69xhozVwPy7Q7eFKNZ6nNvc1YjDsvrHcehN6ds",
  "key10": "47wec66GYrENEtuwZFM7sY7NYbdLq5313tmJxSsYS1KYnZWQxFhh9vdHJ9f5TbAyDmZH7rK6zz1A9mi9J2hL9M2C",
  "key11": "3eiaoi8cvZQNQ7D6GtUXoQ1hPdxkNuvfpPTiNKuwfH5BbLgPp8nxS5jVpaFuGGJvLt5DR2YgHhayDPGeF2baC2BG",
  "key12": "43qajx8dob9LonTAx3KPu5P3wbst1Lj73KnHAHp1QzhXs7EkRoniT5AXZeMJaA736tf5CNe3WJ462BVuuxiSiKVE",
  "key13": "5fBXBZFFwCDZAukMs2SF9Zzka2Rk8fRkMeicG4UWGNMdWefLaxFXacRJZ69y5dkPX1n1h5x54wCB829dPzCLwWx1",
  "key14": "ZWKsYMaA3gQVam6fkq6W5ZtrgeR3meKV8DVKqELNUbBDDefKtbnutM3bHMkvYSLXpVD4hUorfD7HrMpk3jXEpv9",
  "key15": "4qPW1a72FJ7UtFqXpeqLdDUwBaAnawNjWbhFTqT7rdvFoB4oPUTqcETwG7BHYVJ2mD16STWv3Mr2kNVWXiYP6TbK",
  "key16": "53QtXtT3ksXwyZSMEBFoyWxbsC8QBeSvbxMiSGkaS43ZHQmyugtgpYcEj2tmjQHCzg4YKPf475bRDp2Hh4fhw6ZV",
  "key17": "CnHKE5RB2by23ccNbHefQGVVHYAFc6wuJC9AveZ1jYQWaS5fxPwuUs27sTSDGHV7KW55NgZA3dZ1naurMxu9JWv",
  "key18": "5kkA4VkbDRT9nZmaDJ79JzmhFHo1kBxQd7i6teoW39KFDuX3etdSjJmoceLCMnKDvKqbnepD4GBKJmfEgb2VMTzq",
  "key19": "2qpE4tmfPTSk1QQnm7x9YCFQ5hduBYhMJA2hfC663NzBjKAkRwstNTCNC7scZNJ2NPDyS3uw7KEzCnQAgifxfb7g",
  "key20": "5c9iQiGNxZ3uyY9CZ3kYYb2QZJXUNc5PgHFb6fnKcMYqXsMHSnzrpjV3inNf2rAY2v8bT6VeNW9bh3eVgjtFo5ro",
  "key21": "YoWAdCz5nsb9iDhjYXWH7oRqz5kmsgX2KvD98prHGK2UUkeYHzjJpVhAtRAJxHU3g7RHMoijbW8eKCink4wwhGz",
  "key22": "3N3dJaYJ4otaUDydnTmuS4ryvJ3ZPNe5UTnU5gqkx633N4q1K6xKUkujizgqZdHdNVQSz63vRiW5R9i8muEPeu9w",
  "key23": "672iW4DzUNpy9AF3D6SmuTGZTugZ9rWe9SRwbsYWCDxd6SkBhosnqtt96G79N8s2uRjEQotBszerWhsugEfEwDPP",
  "key24": "CwLjgjdUtAspkZfhTDVknncNSPJvMKjPHvDPNRam57xEf5LYFTMidCBc9s28Bo1gufEM6X86bfxH3UrzDsW453f",
  "key25": "4dzrMEzbfjaCgG2w5uxnYtAuV7rpNGM1g1q5QEBkx1LhcEMFwZSWBQ7T4VorgMP5PMtK5BqbjEVYn2vfTB4VrjBS",
  "key26": "3KCAMb1v7Um37V9GGMG6BRJDYzC3vm5yaR3rQtk6dh76cTfiXi3EKfnMmmLpf2ZcmEonJYYA1L62bufraumaHFod",
  "key27": "4x8XAVaebL61YkPwaCV7yofaSog5BsSGzK6ktzQtKxEMWs29rMEspNiX1RumQkTzRx6zgRx2AbCa592r76JWZeR8",
  "key28": "3pdEbep7JvxnuQhKPpVTP9RW3fS9ZKHG5eTh5oTQNJ6DxLVjMNgsRmwCkMkRcbRwUZZHUQvVbbfX7fubBnD3PfXM",
  "key29": "2v4HWvApBndJhnKLM26XkQ2Mi8ncFAjHwidCPtCrsQdcjJ1U5x7LwhXfFf8F5nR2Wc5QFRqKjLR9CdMFcPpFycMG"
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
