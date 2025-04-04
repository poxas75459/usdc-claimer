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
    "TkVfsycMQY7X5p3SfNnJKRkGBVwSwsY6XVRZVsLUTKJF9LPypaLR6JMfw8Pi5CUsxfaSvmd7Q7U7aGfuxuNG6Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GbgxpVjuNvVjTCTfBjMaB8xRT472jNx5DBo2G1iHFkPZNkoaMp3zaDJyuy3oZJUjtdZurXpTqHFjy2wts9Qip2X",
  "key1": "122TkTdzKQr24P4WgYHZA9bRuvVTuz3PncCGFyF1VrkL2U55KsB6Uwm3gLPPPuw61W5BRLLLCYStVnNHk7NhtYsn",
  "key2": "4CEKV7X92naG24VU5erE98PwZrewiVZ8eWBNhCMApiZyS6JDmu4JppLnRF6fzdfjrt4KUUKdo6goy9QGVDrNF84Q",
  "key3": "62iTQmLVaPyeVEhkmySP5BHMq7QJ5hp28osFeVjsf2hXKgVVEkuBzZwh9H2pntQDXPBE7XejNL32yCpdkby8Vwch",
  "key4": "38mFGqZRXXtWp5XVU4VXhnSxzNioYr1KE1E3igGhUF2v8ctLosDvXLqft6KvQ2WdZ3xrTMLsJaCAK2yYbK2pzP2u",
  "key5": "3AWLJ9pD6SuTHtnQZHnkp2NwhJqMLpwTuVNLFtzLAApLydGrffEuDt4VdmfMzdC4y4HF1Y9cZxj2MxmKEDmzxviU",
  "key6": "5Md6AL2P6Wr63jxekZ2PFQ3hUV2PFCUAhpjAibsVSJZGEJWaUxGEqESm5RjFcuGamXZQhkEWkaYoBrgi49TFoYBC",
  "key7": "2i9kyTjc4GpDgZjXaEwEdsj88k4zfg7JjD3aGDLF4hQQ1Am8DNi751CXLbWXNxg512Sf1G9xmXkSEvcjxLCoH2Yh",
  "key8": "4cPZQ7XpAYfvVfUEoqgWVpvur8c4S3hfK3n3tX7196D6dJMQj1Dd5gNXqs65FKp1Qw5VSkL35vgDKwJNHwH6HbGM",
  "key9": "5SQsdV8iWP9UGuLdFhQKw52Aww7EMjxZEzz5mptXEvMtPZGC3n3PvwfoiDY5RAzeXVc5CMD6tj3Pw5eTrUp55asm",
  "key10": "3GUBjeFkm6QMbit13YPJCMEJRGPBiX9HQZnK9gJQPNgd2EpZoMpxUaLkJfbNnUaPH6VTnFDpzCumr8Yt6edLiVxN",
  "key11": "2BTVwFUt4D2gTZZaYscwckqFSGVX9MJoEzpr8osarZjJF8c3ou8bu9KKnHrTyswWGm2vwEEe6PFXqj7qyat2jggq",
  "key12": "5RkMzfQUmdZZq5XWbYhxKTB7Uz1gdUx9JF1j1SyZoE7nJMVE3s87ST1LgnsFaqHGCBVpWxpPhXrSTgxQoi5G8Zs7",
  "key13": "59g6HAGk3s9G7NJu3RuzDfPPbRv2tcNKKzpG7vwkYitVeP9jyQs1rcGwpEbTvs58YJ4SZCQkqn7kUUGQNjCf9JSq",
  "key14": "bbFBrwaYsck7a3tanW9TSa5tS8XR4ww5cpGvdaGwDqbVVfSyZbpg49QL9pmoYeieCtf7783zEMwLrKhmuHQVk73",
  "key15": "1Zk9w9vxksH9cGRjpSPXVHT3QBydyg4cUgbcScynWupTY8z1BCczwaWw8AS1Drdr3JtmPYM9P2QDEpKY3bvZp9y",
  "key16": "5wZV7kciqnEYxSihyPehikBTYuWCgLUZCzq2JJheb1NPaP8GgUSUdUqt1B2PbxzTy5fQ1XJLJKhBbrNwpDd3jrDE",
  "key17": "Yrz8pF23DTMZkkAgZM8JpLk9VRaRAjL7i5n5gQbZhmP2aoQyuKYJNCoto4tax6HrEvExTd3235jBgg65R9mdKxP",
  "key18": "3XTTgHXNY8AoSKbSo2WU2JQHu3gHCECZk1tSo9PTPGNEdu7qtM7N3SAthM9L1uRPWWkd2Sjo64NXNQhHntnL2SVf",
  "key19": "vPEFePN7ZyVh91EewkE3VUbjC53LTGr4VddVcH7AKDVH6x5NhWMPWr73fzwLrZ4NJFJeMgMk3yskFnXMZ3HjiGi",
  "key20": "5paFdSA9G11oxMcDMKbd5SzPQBTRZTgkewLxmKkRFnSBeFQbdzWKfjZunb6FooAUWSuntGxW3LBivs3dSXH9SzDn",
  "key21": "BXyPNDZNXdVBzqqFnk93w5KW6BCFDvuuucp9cR1LfxY4VXURz1bduWNf5GKCiQMo7r66hkc28U6dZabGZSZR82a",
  "key22": "2i3sE33sTxWfbDF5BhLW3i8J1zHTG3hmPJU5PvQQeoErwnqAf6vzUAab37m3d6G2Ms5UvkEJ7GwM88YCbP5973Q7",
  "key23": "24tgUQfxRBNBYmYgXEMb2fQ27TrFxv6SqkPBer6EgyxCmU88p1NirU5krVEZ9fGmfNtoDZxZ8DDmkWWS9YpX48Mm",
  "key24": "4tkVe3JTojo2VytL6pep6UNfU6oDc3F2tAoF1numXF5HvUgHT5X1YsLNs3H2NQmXvw2Umo2b4xs853jNnumxp6yN",
  "key25": "53nJ9wJJ3RVQcbGLgzcVkQzG95kpBXHkYenyWe8jroY4nYNYRp4d4iwbMJSQF1gamWx6sCDPDS3hSjLtzw3t7R4V",
  "key26": "4o5ngqw9jAWw5W13GTd9Ye4Q6w23eL2zmZFpvLYGe9wwBw8dPcEEcp2ejoFzp1tRjcdDouihioGZfEJrETX6D998",
  "key27": "2venG1bEETjmY29yLW2AsCaCvU1V9NpET6Ue754DzvEVrjNju5cac5BxS9DN6Jsgifx6L8J2tSgJUbko6LYXo5kf",
  "key28": "2dXtW775cEtMMa24CZqiA5TVahsnMA8khQFkBYcFUxKWLEkLep7dKLqZatPvMGLdFM5xLAxEYry2tTJGbJ1o8N9",
  "key29": "5tXCW5JNGJ3dii4z3tX7eJW9hxeejY72ovs8sQgLBrtbdAJ9rS4fiQ4uq7e4pNfhubq4QbVmwrwYzKwUAbBRkgiV",
  "key30": "559nZAHUbKibP8rbDE9dpQny43tNNN4MUhkbZbGPdnULRhoiLjpXjwDWqqSdtb5QrE3FYJboWs8dUWekYtZud3zw",
  "key31": "3PdQYTmQ2Rb9fU1xbgQugrsAZYzrnr7GEvWKgdq29yqxqxdyHAgrbtfZnUmuPZinS1gqoLpdf61HZUuPcgGpHJQ2",
  "key32": "rc6efVzDHpQJk8b72ZLyoosbvoqkt43S6JZDQTEHo8pq73XTFcgXkEspJZTSWisEgs558nLTAiDpk2P9yjM4evV"
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
