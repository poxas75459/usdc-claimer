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
    "5RsBEXH1DDoHXHApzGFUi6CLieu9Whs5NVx1pfrXPpYGRPPXG4fYzei9AWQDBgBqFrS5DkMRpnAsgs4E7XQMrcZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MgqT8Z4HQBtqf7foGXequA4wgrjayCM86gV4YoA3gdkBfsL3tHy1TuZJpSERibstaKMfnfQxS1oFJxeiaZPG1b",
  "key1": "4TL8cPKCZtjQGAokuchgqJL5zfiWVUfMtzeKW1BFsaKz2ZfvZ5a2UVCyJEBntY19xLua6VUA63cQKt3RRmbxcapb",
  "key2": "3mviNjASYjsHPajuYKeU8UNrCu3Q4SvoX1rdrtNwUkGFiNFCmGL5GB8jDWkaP7tRwTRkRWbRPGivozAxZ7KePa1x",
  "key3": "2d5NXYPCCayy9A8YyT1gnTpWTEbjnEBwg2h36VihtTAVjQquZGTCM89nYV6yyAj6tQPKxhnArfvGxe47ao6QRvU4",
  "key4": "25cJYn89nfTrRk1vp8juUFbVoV4tKsR6NkFZ5B2ZPQbhFYytF466Be2tMTKfMf3gMZH3Jt5mk85EoSyaKJYwyuuL",
  "key5": "BVk1EjHeE95HkNESdvwdSvg47XKHULo4etDZW5YDrKt7y2MAdQdHEpATSXiFCLzpShzbLYGQ1HijAeaNMDjucj6",
  "key6": "4xgtFWax6kTGNH8jBJxb8PyRxkuwrEX3fuw4zFguSc2U8iE7S9RdfTSqyCerDzd1WLU2r3H7znSqqayNFFr1Q91M",
  "key7": "4gLuKtXmtaWqnK1AHUSPRkAdLMSLMoEWMgPDon25FngfrGTt34ujiKAhVekMq3ydmENejQ29jH7P6ZuB1famghGJ",
  "key8": "KGEXbYMoqeSKyLU9kZuG5q8LuTy98mfgCS2QoxTRd47WfryqSoj5T1ppP9Vp9drVoDKsMdcUwdV2TQTkQXkYpgB",
  "key9": "4hM6ToZtoz78Yo6zDjaHMW2aaMPfFpxVMA2DEEnLyg1T5oRXFQo8HmEzoiKSUymntN9DrxAtV6ew5RkL2beoUCcV",
  "key10": "3c2M4uJXDDucukuCKo5dU7LKhyWpaeJaZH3JkaQQqQekeqL7LCVheXsHVqMfLGJNgTEnJpsYcreNg6nr63Ux3rU5",
  "key11": "4pAifDNmjvwtuXhoKSMd1e24a5h8xLqv6h5dDSHWfhTJoT6rpP4tPmXy5v42RdJ3coAfjXdzoP5J5yaXgnm8C4pF",
  "key12": "27q5ouYw75w3cYJBGv1R7vqRvnkfvwAFdCDLM4zL1TSDT9WSparVKz4EWzbJ5op3tv71stDVKFYjbc6cEV9wCJgx",
  "key13": "4azQ6T3nhsLChtZo4S4KZkqrio9XxPfpeyqVfwJENEEqJGMTd1EwnBEBwwrN9YgN9XAJWQYX7dsWrM78UTP22ddq",
  "key14": "5f2ci9sXBp5zg3oG3z92KB2dpUFpWVPMyc9CMeqxzZ3UKGxzzHy6hCdCzHSXgezrcjTSZnxVjhqQt6LSiAEKG14o",
  "key15": "4D67A1kfUJsrZK2CHefkoVgaM5TqBi57k1j5buBjrRJfYqi7gLshXW2NiDspxeGvFMRHEeK6mcKmfWtTNqyVBjaN",
  "key16": "4M5DHeDFFVLur7by6hSxqi6x6suNax38LvkDNYtKkwkw9Tja3aXYwgLMishj4Bx4mtcqyHnzXhyNghZ37UCeRiQW",
  "key17": "ha54PUpf1EAXCqzzQCFzKbw4ecgEATpY6HCbNX3dmBmuKVGBPAo55N6fkiaxXLaDrefsBAS8AJYWXdHHhi1kBQ5",
  "key18": "5LtPeupDiN8dZeMoaXtjPHAQd3J7Mjoxa7xWEDdnR9pheKm1Xo7jdciYGCUh6cRG2VitCKKbesHZm7nQwkmKdNJV",
  "key19": "2BpynXDn3HL2Q47qCeFX4WidRBtSRNUnoUMe9od639ikMwRuHBFYbEZtWB6aNUuJoC1XGojsi62sMDWQJYJ1k5hS",
  "key20": "4sR5ZKNqaUeAvaQ3z1oSjZJKF7W8YaJFL85ErWwwt89NEenFSUDuJMdyL4h1SvzfJ8dfRYuKT5m6j4bZT92GTE4",
  "key21": "3pwooku5ng8uT8jdHZCYPdxYmcojvPoftNxaHrVEhMgQys6Y74qSqFtdZRfFs91y448uVZNj3qQnh7dyrfXTFsH1",
  "key22": "3mmsXipsjvUofDuSpd6Tq4ZxHBZ1oNkb17tT98ZzTpdrTmxzgVUsUKKvX7BvgsqkcZLaZeZy2JgFGFSgQDwQXv2t",
  "key23": "3XsdqoNFmu4c9gp1axu9uqehcvmHAybs1DjuVrjZQSws62Lq1RuMk6voo3FzE4uyjaMmhsVUzjApCWAeukwZsiLo",
  "key24": "5vzu8eFpqsV2fYWQ4JHou4fFE7f5S5nAmcA7sfRqxE6qsGztEGy1RjB1CdV2p5wLssRwwuqVJWvQ5qwGJujcYniG",
  "key25": "4sC3JjwDtdS3CvBdkVKbH6d1CgdkWb4arkeE9RvDn85LBLQi5AYyLwxDysEwPR4GFAWH4bqheTQMreVPe9yWVkHs",
  "key26": "2fh8k28yUxAH3gCKVfpm2FxgTwP5bfEjRuuSYps2fqGPKVEbge91u934Vcrs5H8qc5Gw8fEVrHhJVifeonaas47L",
  "key27": "66pxAKkxqBGFzUgFDma7XaL2K11z8A2cQg3UVaGAXhmeMCwkrHAsVRRPvPPuo8oVcqgsaZrmfGqGFhpgSZvvuVTS",
  "key28": "3xSqN67AaQ97FNYgyKGD578pzvw3VE12mzdZCNtfadAjWs6y34zdgui52UocGt18gw8yeLdUXzBHg6p6mgswKXE3"
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
