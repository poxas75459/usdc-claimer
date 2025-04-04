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
    "3nMgHWjcVRpEGvwyhWtKPcJFBkjUKSzrJWZobofosgkXYaaX8bksz5r5qf1VMKXBfU9JCHZVKAJsxGxeh4KM2BSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZyT2zLupt9HgpHiT3erpAu43vmEmiNSPHhoB8jKsMJVCypxc3RHVMpAxgxwJR7wT9NGaBMsen6qUsHgcDUXQB9",
  "key1": "j2GEXNp2tRf4ZRuzAoWEaHr58DAocGcwimjdccnbnJXy81G1sVEpSh36vJiBJT9o9GJWnZeLT3eWURLcGCfjzZ2",
  "key2": "tswrMbriRcxKStDnvDrjFkUuB66TSDUzhi3JMRK1dCbJnQhc3D2w3HLqwzmPrZxUBTvQ5NDq9j2zd7DLTgNdkzw",
  "key3": "ffyC12Rih7oA7Kf2jbDR7SVQGZgiwAZevZp699x4JHJnUnw2hBaRhEBPUGrYWykvBa2hvmG7nd6rdM6HURnLt9F",
  "key4": "u3gqB81hH5LYUUtey6pcKbyzB6sp19MdufFDaUbakEHiu2uGuNc9X8JHSdB2e1iPQrH5Vgf9x5je9aTYJc7fEGH",
  "key5": "3hSgVh2tD6qJSnWjzvFrzd2cRCnNKTtus5q96RQKPXBeiTHfggR2HswKwMkNUyvVMK9Xp7EZ9ezg8r3tcNp68htt",
  "key6": "Utj1JoJasReAbXN7Vg1oCUEqKraTBkPLRFwYYJGW7VLyQC1KSVQnihBjHoAfXY129x9wDaFBCzXsStkvnziHSSn",
  "key7": "2S427ZfHf66TGRZhg5J81md6eA5YjJU5aZv4QXsMUBajnPFnimUmMUD4fpMpTQpJFCD2ecJnoLgpEdABYxZoo56V",
  "key8": "3UXVtJQbFQjjFWzUiMaB98gpAW1RLNRxpWd7h11UUcu9yzCWcebqqPcxtqpBy3rCWFBF4Y1gJLLPgV5KcrSiZSu3",
  "key9": "4E8ZojQ1MNwN5VKEF8sZqWyoA7u5mYsxLY3UfhM1zoEHMzMKtErFJ4Er9bfyoSdBA6ZPMojToEBjBsMQ4ZUyt8WZ",
  "key10": "ckDRrMUiUUYo8ZpJrrFQREzMzrof1oWScNSBZ8LBs4umTpY3SwseRiriwMsVKmToMDid7xbyzWSMjqVGHdV1WrG",
  "key11": "5fUayUdsXCKP2wNXPzzY2sRMuLtBe4D4Z2YDn5RFkmL8X24spoJokzGfRaHVPSM4deSqtRK2SrEo924nMQiKt43A",
  "key12": "5xGKGWj44JHpQya15RSf32UucTfarVSazkKr4cTxHCDgRvbu7eZ9EGat34WL5RvaCvdbeLvXR1PEt6erG2LvJNb1",
  "key13": "5b9kAUyFDgfwkpJZa2KwGyhR9vjCqjCEETb67MJd8ReBN3SbNuZU4yekuQaQ5MZ3xciqes8JuAhho4GyGEqsbqyz",
  "key14": "Wbyw7foSD4Tq5qmqdL9d7xknBoygyBmHUXwZcJWU3ZnNMzBfWvKAUf5QkkrjkdkWdGxUxDKgxM6MH22SYgeLF9J",
  "key15": "4tYXSxs6NWAjP4Q73QnhSFyzqK2L9ctcjZXjcomVUATtcXQzYd8kJRc9ZzNVvkowLJgMwvPnhWtYT2EGpgCx9zdb",
  "key16": "2WrWgvfPUBd6LDADZKUFnqXFiQz996U67VXkkvuFTx1AnDQXFpD3HdYWreHRUiAPRS4M6L3qd9R3YKBQ4VcfJzjA",
  "key17": "2amSoAJfaW7fU8p6TbdcKpz9wD9AtasrE9rPK916Yy9VJ4Tg2QNKg3Bmzbg1Q77jDachQ15GkXXkZatGTv7xKAtG",
  "key18": "3Fzv5bipatpnMMfUc29d4D2FGz7uWnDTyNLUxQEMFeEcpFZzhBLVSTQJ4fYioRDMbQ4GTZ6qMgaFfu8ewdwmwdAp",
  "key19": "tHhRPGvdiEWkTnwSoXVJVg76duXat3nMduVn1hFGtPYFBVyVCwwsbydknoK7kRTMTTacJqgqR1NXq5GvtDVswug",
  "key20": "2yZcZk4jsz6foe6u1BUVQ8Lp6hSQM5DcZfLZAGvWNiacRgPLqVCtys2i6zERana2UQCXUgSoiVcVsfRYadbCtJNo",
  "key21": "5ruc5EWQB7VbPaKhT2a7RQQqUEu2kuhNtXe5BkKP3zdrBF2HPrz5nyE7P7aaA9Z7P21fRVK3SiB5ThJKSxMLSor6",
  "key22": "5QiTnR98QVoVeNKCFY3JbugtjWFej6k7haD1MBHDZpN27vdTsrwBRgzccrsfpfrZrq98V8cTZVTh8BJbKZCsxejU",
  "key23": "chwxfgNuj3o81Gkx2Gt2QpnCBN5EUdQFToW8B7SGG3s3hGsRvPzvvddbwCUuKzpfUVj8RYzauDXZjgxZTFAhHnh",
  "key24": "4xy1eyi1NNfMJ9GG2D512qRonXZda71ZcEy9c7FRv2MEkSDtr1TwZywWrvm7AzbjQ6xHKSSo5V9MUApz33kQhJSD",
  "key25": "PQpX7cdhb3akb9xiLvNvGPyRrE3mFqYZsqGaD5qoDLvucvaum6xnuftYrnJTGieeXygzYuNmHUYjpf5spLvHMx6",
  "key26": "4oLUuWbRY31mbEEGBWiczjHdJQSi7X5NpEy2WmDzDGRfysVrNVz2k3eBnoWtetPEyCb1h4ezYvBj824Tz3feVfDb",
  "key27": "45QoYzsW3Z8SL1uDPhdzUdgTgiSGbT5gMH1dx74UEDw6XqyrJXnH7YAaVJVoPcQXUs14N4oR1K6x756471VGYCsC",
  "key28": "3Vtz32xdELJicAd6YugoNeGduvrwXWDDWu6X6Y44i3pruFFRvdFogED7LpqgAb7PYXbRBWPtvbKaCsXcS5LfFVtQ",
  "key29": "VD38pwYNuaWkWEoVLv7dnaQn3y7pJcF8LZ9TJEjYrGm6ghqNFRGBBY3PrmSv7k368ZZbD9eWEkvXTFwqvthPqP7"
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
