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
    "3SabVy2szeueqPWttTm3py7vDU3pPVur3FDZDhZ1rmSX2dSXo4xPHAC47E1RUCGsgEArnrQbzuByEvNUv4uZ63ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ucNSgzYfzdDGThBzLDBF9EEDUa1rnkx9Bh9A3mgvTWbkTsTPVdgNpHJTt2i1xaYqPAWXiTmczhAMCreshs1QpaP",
  "key1": "25tPgLvhpscDTVmPGhwo9zz7oBASdd1HNQyCoQMGcnswa9jcwnfEC5ZryiNMQPZNYmJBC7ceMpwh3SLoMmjLMw3y",
  "key2": "48co4mn6PRnzMBjq9jRNR3L1uqaKggsk6B45iA98i1nBGo4LLL8fzehTmKLLFSuLJ51jChQ3bhic6kLiNpYC1zUE",
  "key3": "4qBXJ2JD8jwb8dUCb5LX8S4sAUdzyo9EHj7SkX7uBg6U6464Z64oAUUtv6dk7r3Q5F5MnF383psbLG1hL7PRK38f",
  "key4": "5FH39f4wmSuWghSVUjKTasXgJQiCuGizXqqU4GZcDpB8hPgQVRxZHEcAhTY9tEkHY2fD2L8E4jfHCgr8GyMaA3An",
  "key5": "3moA6wdu4QZzHsUTPFu8WuXgSaALQ5fvTV2a1EAra6zLV8rJa4omtUfwv4B3Bmeh9TLTMaAprFXgPTfQLT9EWsgR",
  "key6": "47yQCS1qMwDoMQkgxBQEDu5z8z3jPt8c8ShNmNAczc1gyLQ2KEqKynoyF6a4ya96p1H2VrcG2uShhw9gZTfk8CCS",
  "key7": "3X9TKvacFR9v86B4XUCNaUk3pGiSUnbxPwkoQcwux9UaxdeFuMU47EJstLuCKXZosPMjqEHaFRhh1GmdigbSesAE",
  "key8": "5qdHcMqe4Ecr7FJo6MpPEgHbeR3tL2mQdBAUAf6LR8sB4NyD6cpoytzUBBZKoqRJFegzTQZB11Y8uBECHdfQ7AQf",
  "key9": "5on4nVk7xGW9XMYTqPuXvmLtBbwTftC8Qym8dLKgKUzbdvNxBRBxm3HgCR2P9wgVkFvxKqmFdJVZ4bTFQZTo9Gwx",
  "key10": "56evPNYTKsAVVSg6ztSu1oAEeh4QVY8Hmy6h6S9pBFKFFNvpvBxR25K1fLAzjgtKf8SGxL3qM7K5KL4FwLE94YA4",
  "key11": "4hmZ76kLJxsfBeEc1k4sf3XwJxDzQ2U28hgR1gnVQ7ooEXBCFGTotuQA7XzS6iF8wunUCiqtM6Dw6ckwSvQbyvrn",
  "key12": "2XB5TkVjr89SpjSr8rkZQAwaLgoSG4nhNBmjg78yLePDYqUv88T9ka8TqX4uwKLJyANcHUz9r4DHC7qkNrLR7C7f",
  "key13": "uQXj4AwUmvE4uFJFbzcga2jKgMF23AapVK2fTYWZeMYo11J7951y9AwmD4mQLeVPqDduM5aYRMdqe4tRJBjrQ1H",
  "key14": "oGTRrDJ4drNXLCA4SuopY3yfyMac4BaLvudQQhD5uJEfumfsB9DgAjDnwWkLGBzs83LRaADxiQvxFtdHTG4btJ5",
  "key15": "CkY5ULiJ5NFZck9boqGBWjjmcRgCzP2PkW9xoTVHJb333Th5hnEtv35vEZxz5QPgzpB6cABqwdp9jHpJL3FuPWt",
  "key16": "5XnGXT48KVzPZTBpCW9xL32J8vMSf8FgiHUSVUdGBFgUx8yuqgzfgCfiCw9xtviqq3u58BJPcWMamen3bntj13wc",
  "key17": "62x1w6YBzVHHPE4Mz8Cc5ZbgF7J3SrEY13fZ84wGPQBfBiunMNVPJrzYh9SHqbg7NR6t9C124zD7ug94iUt4cpbC",
  "key18": "iUMovxU9sC92wN4uRhmh36uiQPMqZtggJpJz5JpBtXdSPZGZbYny5J83WTbybQCR4EeyWG6CrgknVb2GJxz6NTc",
  "key19": "3MshHU4z2mjwimCEMZdFL4TgW9VPBAdwoZy5DMvjve3syNVcU1fYT3dGiA25ZJi9ooRTFTJDvXh5Ke4WcJmGnZV9",
  "key20": "5jzXSYUrYiWAtqY5tk7SiJgnDHMVKPyKrBpDxupvfVzgv12ejsVwj6KQP1s9W4HG5mFjHGpYzNdEgJtVv32477Lh",
  "key21": "3KHN1D3aL1Ua9838whUa2SseV2GKQB7kbh1KAFQ7k5ygrEHPDsK6odZ69VKECUj1qyCV75tjENMT5iCnx2xMVDBb",
  "key22": "4iMYCDoT3CPa5BKbSw3DMoS3beUCKifEnJVC5noqx4cgVU2Uv7qcdgXq2qQxuwhnYpqTfyUvpuj4cPpev94Bwuys",
  "key23": "3VfYmYb94uTRE7f7svMj9vZu7HQh8fdgPYJ6EEnKXa5yge7UYuBiPyvhuUcmKSm6RQqua4PB6xwxiComqywTDFpP",
  "key24": "5t4AjWZRMnTboCn8gvMYMHoig1bnqzfaAUbdtiuAD8zsNpDSkH2o8Jcw4KwHaY3C1ygv3ZosFMkhE6Jsx1Zf8vzG",
  "key25": "EkHipZmDnPKrXnZWwjWowXcbXqL4LsQKWuoGBgem3KG9kSiqfXD3EwwDjiPq36wAWomdAy8Vz9FFpKXGog7RcLD",
  "key26": "4T6f14yqHxUqVrog7N2hNfxKqTF7N37P6Tbmy5NLeFC3siXZ1ZufBEMo4og81DLzxUts77FVjEvomKcxjfYWM5H7",
  "key27": "bsLMBXiz2ftDspVtuAJuHHQfyZ6La5UdGEdJkGqE2Dww2FDZjjMyZgxNduqbQonWEGkVSEcqRDPhqfDsiGWL4sF",
  "key28": "5MJRH2eAn5rutnETBG4Ejrh9tGyVXLjXrbpbKZd1cnUs3dQZuVV7TJC9SgawiD2YChhJkXiVF7enMwTUntWuhV3k",
  "key29": "4HnKvNhZhtFc4BeqZs3UeNRNEeDwGYqWrJmJhNn7hGp88c2QCXxgpxv5B9jsAL3ysYpj5LW31pKCp5QffmCDFKoD"
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
