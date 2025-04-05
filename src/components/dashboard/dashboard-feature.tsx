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
    "67jrc1wNehWfouJAUk2b8PYLWhiLyZZx6mUfPnxbe3fwjdmWMNEM41acdBGu1tHdUtGg9fnc38CNqDGQnikkqCFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9drYXQKXpdLTFHcuAvpdkPBcNrxkEY4Zava9reuNRSop7PJxibZDwJEB5prfnM5zQGyVe2rqkJyzEycaKLbUJM",
  "key1": "5FasFun7YXmd8JBVoKhgcAL3L25gPF6FDoE5zwLYAoh9XXMRFtqiuRKYEUWd7AcwSBX9is3J5SNH85MgJPyZx8mS",
  "key2": "3mVaRR3SC9Yq6HWbaMXZBf3ufDzvsg4NUChA5rppatopMQ6tVmqNrEmoS89qFH73JcVZbZoq5qfeVD8n1bd5JFE2",
  "key3": "2Z3Fyg77zzB1f1RW8a7QyNqrnTUZ85kEkzEJKEH49DNXigx7eAh2WLYQzCoRDYKi49KtgKKXuPZGXGZaGiv2Emko",
  "key4": "2J3MwNpcSuHKkGsozxjDEAYGjzd63Ht4SchePBqNLPmtVqUeMBDXk99W9z6w7CFcgj7pUT21pdr3aBNHHDix2Z3z",
  "key5": "J2MAYcRp8fCF3AxFeQeXz1zRWNtnHnD6E1JjQbHZ7xLnW36rFdvrfRrcc6GBw67k5Lx4MJL6u2XgPqt3NhdeMGt",
  "key6": "4kRye4qLir38wViHFkG58tgWDUWgvas1pg1qRMSEpFQKb7gu6ZTrjwtQ4WnuvFXqVPdL8VpMyWKz9T7tnpB7DLof",
  "key7": "3kgyx5JJrmQkABpGfQEJH7YBpVsrfxkPyhaYDGXuttPNhf25iNMe8GfFUcRfqHm2xq6t649Nvpiv9BjCjKH7MgCG",
  "key8": "2NyaEcwmXQUjAbv61hvrajgrEA8VJLrEAS2eNBnDVnxmHW2mgL3p5y43rD6z57tUj3CdMqB2MJHyiNCB9sE7cCUd",
  "key9": "2qRYHMFpryb4LbQfVPdkLhVkG9KsrHWnZUcStGKS2GGvnKqdqmG1ifKLNEWcZU8pLLqeZJrFxjk3mXW1ye51o3Bb",
  "key10": "3gHxyxdkr9a9chWwxhd5VukYdzNHBF4VmR9jfjiVJRqgCPJmHxrbLpxLrLwJzmcwBej1jpDg2GcPSSW8Z7MSBgq",
  "key11": "GSeNCGPFxxqYjDkTnqkgrf3cGTqVJtJFdodTJrm78JwiVMbVopyME35XEfFhBc3NRLWUbFoW4M5Bg9ESrL2UNVD",
  "key12": "4LAPkSGF7aSLZQLq9KMb3BnWFtMufMrjyqfcPrsKSDpkSn4NMLvftiamZ8ELt18qryomgJbFtn3Le7JqYBv1qkwA",
  "key13": "3F2aX5haV4XzwNHSePdisf34XzFRovHjeZpp8KnSimTqr7MnvJtAy97JVQ9QNpVbivAKoPfGx3dUhT3UjWPuCGLU",
  "key14": "5zqzWkYxLnTodWxcR8HuFR5JhN78XyiE4F95agStaWftNjdHX3bN2pWLGUDwSM9LQTNdM4SQwdijeHosfGWEWrmC",
  "key15": "5XvuTU5b3A6W68A7hR8tLjJnC7vDNCPL5HxFgvTj2s5o7GC3jMXQDfMCTnCq7ixxu9wT5cMypeFrG2a9dyxuMY19",
  "key16": "GopbQYoWKANT55LH6EYQb8sJ54BHLVE1mzutpchAtEHNubztuxAb84PawBGHjoy4nrGZfnB8UuLJZQi1VJDuCZZ",
  "key17": "VhYgqGs1BErALRRSNGiYZM5gFX8McXKKkPqd6qRDnfcg6JWtG9p2UDJTiQJRcbntqcyYod9mU3gWE8PJgrmbm2E",
  "key18": "36skZrBP8HG6a5aSpNfFig7TGexRefn1XXwy4xbXj56dyANc2djgKfPMGxvLkCBYXY33LqzC8UespeKMmLvNJ5h6",
  "key19": "3BB64MpsM6Y7owe9W83feLAnCUvLSQofp2UrjAEYcFVQxAwwxpMhwKaoRFQsq5Fua2RBtK2RENLuyTabAi6YYckq",
  "key20": "mVhmNg5qrPeqyeXTtZSVgTqJEp1aFHhUKoCBahkRjTJptuDd63hWsobV6ueG9rH7XTyQAUZ5JQMR7MAAXr3c2VJ",
  "key21": "5DWjLdeLU9vzE4JVTRWupoHqPe1sbHgDk5f8LHcMHbaRKQnTzQpZ5xHCJHRZk2Hf5dk87w5GSYb9PBLe4JuAzFch",
  "key22": "3aiV6ZPhwc557Uby48esmPxMN9J7CKik3CC967AWQCMza9m1eFfUju4GxgmKQyBqBg9QQNVPNvLfcfXVujMwk7r2",
  "key23": "3jTrFUCvCDVmWUkQVP44D4iN4MiEocTmXV2awics8aVHM1qioG2LXmW2EkJfqvUXWEp45Cv9MKcDqUwkbHb7KZv1",
  "key24": "5P5XixtUJVkSQYrXpaUYNJmUVGxWLtwf2bMN7WqBSnMjufCfhDKpy3mT59hsV1EFT8JcXcJgFzusFxYFkaYT5zEw",
  "key25": "5Mn5PymdGXdc8qBN39jn1kYYJtAThad9ei7kBou46pcKRTE2nkHrgr5Ya3WGZ3rA5oozSTqDX5ybBdBjz12SQPGn",
  "key26": "4pbcXnHSy5ENjaBmqVPbMPwRjbHV4goEqvk6iqsQVitjSjtj4sWeTXa4YLwTrbsELc2AiQNSS7JPNH4uYs1rJwMZ",
  "key27": "4cbR6rruomuykSSfy4SFrqxhmTzUmdSaVBRTnog4L5m7AEjnJB3Tgzj3qdVeDDjsXt6VVjo3tJTbRRFx36K2Y7SZ",
  "key28": "2v2PLSnTkdwNp61JitAYbkqmyp1Cid9WJmU7Lp8zS1dLZ3xPjb53k6egd7GVsh38raUTxMCbfbDbQp3c9GqvAnMb",
  "key29": "4ny2qgPpivHo79f9UKsWEEE15xD3SSGnMW9Qkw5b6oUvqiDwR8qJ7uPCh3mDdH6ZJQd81FEtz5ZKyixpiTjFeTjQ"
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
