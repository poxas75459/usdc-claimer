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
    "5KtnSpEFr3uck4mu9oUoTNApn3NeMPn6vWcNyTSEAcJJjdw5xCgqUykbqai4U1aVr9C5S7bsuwywTdky5scLDDKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v18ghGgZpkyoZQU3wjMJoqwnjo877Tq4qamEBbJXzn2Zmk699N1SEEB6KmQpfhNzV9uXkxi8cdPTdmxiX7WhD5P",
  "key1": "2JeHzi8JQi9mgNHbq2GXBMFmH21d49eeciAnnDFjhrWdQAwPgiPDGyGesTYcHdtt7fFqRmMbSYgWjTtvA9jMVXa",
  "key2": "3bZU1cx75JZ5j7TTj5oPnujYPnpJWcjgL6iJ7PVYnh3q6QAKFxZEgTEyPGJitTkFAVvXtpWshnbiqhHL4EMb4Q8s",
  "key3": "335LYrfTkprFf3xboh8DsqpGnTuWNP5JtfgtkHZaW4k2p55KQjt3CtnXhrxAEi5Z9m5jqZMeDbcT2Fk3tLi8eA2",
  "key4": "3nA8j1j1yZjkirMzTdYpZBTDpxM2DwUDNpGLP7YoqmFyEhUzNZrxr2LfJT1AKwbJASyWQnMiXqn4sZZgaS9Btnuk",
  "key5": "5QiZFJu1E1WE7FYUbL1nPqo69SVKKvZ8kALc9sKHc4b8YF5Xfu36igf3mgERuqptqZ9QS1p9VJQrabC9Ku9qiLAE",
  "key6": "2owt8mu7KUHwcGKfPy1qtWkgyhJpNivjSdycP2o969jBYJWtR3tVHWJyZVJ43ogSXkzaRpUYHD2n7t4y4dqK57St",
  "key7": "2ZHuh3MAck9v3eZ227Xq7zJcTzFnC3gr5xBFPgw6HUpqdDL5eAe4txC9n8mg4aX6ppY5otKNkVccfyHJEdjzB3UW",
  "key8": "4xANNKZAKK8eSZLjuSW2ua2LGrjcgbxkBEYprHmgMCL16cvKxZcR8GQiA6nv246BMviF2zjKafvrCfnaVwefMcQf",
  "key9": "5GNpYhJZjBePo2Eaeo3JNZxiuaXxtHuTMUgYBHdThRAqFNLJ13wiNaxwCsNFZTkDSu49Qtq46Rmi34JbsgiQZDpU",
  "key10": "wHzQCZHLUx2Gp4yUn2LKHqDeJseXDC6jgUBJwmvBUM8wesWam58kK4vkowz8R1bR5sBhNYp5BfdUdTD4gfL43Zq",
  "key11": "4jBn3Zr1RxeS3eFgTRPTVMpXRKWLAKNR7VL84721xucp96udnroH6AZPnfNNVMgSMZnoFxyWoR3oYjyYZtGMdak8",
  "key12": "4QtAsXv9AYTPVQGtGxzzn17XyDKkHgtG7tCsHXbujRRefjWa8QpfQqvnfgtjkfvWZUeTRQiuGLsiHp2sPxWLCjUo",
  "key13": "QYh7zZVwj5BZsEfgF77ZqEDPC57VNXc8fe8AgSabRTiei8zJSbQNjK8ytpNPXLqnQtr7XTKcfe6Hit8sYoqFXLT",
  "key14": "eH6BVWH3wkh2YiTaqhPH8bMvdhWT3zm2AacZC9XniEkwT9qyarH6vwVawSSMTfsozF6yo9mZ9hbhu83ChPzgSuz",
  "key15": "3igdRBKHpT6LDYT1Y5kmjroffRyrcXDrobvWjNnTYjeUd2JXB3zpBKLpQKrGRDKnDGRLoF5cTgvTxiADnNLnwBNj",
  "key16": "3z5JYcnuuk4tb2PymUvB2Hyb9Ck9yanz6RS2Qv5nhnf5ktMk5yXfTqQXpuMj2sLmHzgMrfogAZTk8HJdQLxBUibD",
  "key17": "4o5rMGNsd1mqmBzaaYwofrryRx55ZsKRW2RUb6n3jCHJFLj4gNBKbnde4Huw85XBDkJHesn66ZJpUed4HuUf3uiA",
  "key18": "5NtsqdedsjCgH67Cxrx8UiFEAp5dMCCkfNEXar6gEGjaS69VkiLzGp7eW9jnFzdkyvJtMRXCUzsZeQanYX5mReTd",
  "key19": "3gnvY8cmjuJqkdFtaxhsVmGuV7HGEr2jXkQBoZFrsUXs31S54z5Q4obYKefDCaVcZ8TWGuqK1rTweeCyocrEdxtQ",
  "key20": "4DocWALU5ZLkfE9zLzqUoFRLoPjN6RQMLxHvnvsMiw5ZWezTNuK6coj1qggAyAwYQLswVZL4DmmrX7BZq46Bvr7J",
  "key21": "4BMAR4QCm3p1UUVZr5iZ9iQMkGApELibngW5rL5hH4Zr69WvyDnfYsUtgdvwB5G6kBoVx2p8e5SAtbCNQtoc5o5a",
  "key22": "3Pd6BhCMsR4rhy74DFj1VcnLKM1UXdzQvcPywoXUBD91Lvat9pnacujZC8GexqohPDPvPfnQH8JXLqYQ1M757VBU",
  "key23": "3gKHyRNvp22ura7cKF2sGQhLXj2YA69b6idJUr6BxkYcpt81SJywruc8AjdxCeRNS5ecJfKvRmNLm3ewvbuHCjFS",
  "key24": "4CcWXp2PbD6quUyZGeUWr1Ji9v7JHbhV5CR3GqiZAi3gvAwYe69ZH1JsXecKMZLd1uRYNqxpiTe23rrLgXh6tTLh",
  "key25": "3TGJ3u7bgykXnJJnarvq1DdqnTPJh8h91ARECuqttZRpgqcXvq5fuHBrHjDxVkyL2WjWDquQ5GpURnTWrxvi56iH",
  "key26": "5YicRYX8Sd33WLMaFibrJoLLQwDpLDzjiKyYxgosgMVUNhWrwfL9UXSjW5LHaM2rGkD6tvRcyEoTSbsrZG8BGFJ",
  "key27": "rt1PcvodNUHNzN4UygSWGQVYCVzWnNkSLVw3J9eWngkPZuD4f2gsq6FkCJtcWw3qVPEzWLEfxnfuPqaGumRwvZo",
  "key28": "4vsidzc9kNozZddYyUHhDa7ACTKLgbtJB71ehqNyoqWahN7YpFM3CHZojPmeeZNjgVen75p4pbgwU862f9YVgCSf",
  "key29": "3ENss3XthpYnos7qtJK52uKXt56h3mNbN5x5aYLnQNRbmmJdhfGazSCvLPJYRjdN6nxUBHN7qnTzFaUBbwmNzoH4",
  "key30": "2aMRRwCwULV4uiFZMLE13zcYQdPhL8B5aQksK63Gfxm15qveARN9x8PeMzoNgPxnWRf6HZwPpYKKqhrrJViHQQMa",
  "key31": "4EWgqL5CY74xykT2PbxCRunCNueY1UcqG4hy1vW6jQHFYv1x3UCz2FMBtQGESh9CDyJyjigCG1CaBgKBvMeRvwon"
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
