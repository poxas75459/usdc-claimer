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
    "wNa1EfjCxCkaY4ojgivoN5Bvvf4hmBn1STpEcGG4VDrN4HMyKVA3RHBFMA4RYLyeLsJY3zq5GQaEVhRcKtKgiav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjQWBe1i49sghoeEuLALYfzUmhBe4rsJu9egCxZ7dDMdD4wma7xxV5HeJkExkvsztXHjtipu26Q1Gws8VJm14kH",
  "key1": "594eJFd8qLiy4GKuZxSwZaziEYWM9q2vTdV77jhCkJfs68NTCyHivnaYBm4vvAwyj7iMZaTnF4MxpzxrtuQRZCkK",
  "key2": "eWYKVUmDyDjMNRJP8uYVGoEeeprb1FedvXiGYThFjc7P8HwKB575Q4Z6w6GsnXizYo1rZoEXU2bXxyHZm4rrTqV",
  "key3": "5FcSHQRcLUSoqaAqpsHssyRo7AaaMneiixu2vr5VjtBiVWPp3yZUm5ufQDErQUFyBPsjSeWcgqsc1bv2DrsNidq2",
  "key4": "21yj5uvtE81pyyec7fF53P9otvVrTp7WMMpEtiWedvDXFdc4NrvzxJpBdZ59j3XsxRDDv1iPawijX3grgRmxhC29",
  "key5": "49gQE7vqWtyAUtKKnG1EQPB3gA8gzZNqCJFHnZVa1Xt6ooUV2ChTMXDR1FWfvCFcsdvcjtLUx9L9moPsU7xTZze7",
  "key6": "3JJbq2qjCARVyEbovVB52vpL1wQRnSYup466ii3pNv3CFvhqeAowijnHcEk5XyvjYdY5kUJmYhwqUA3UaNAdMusV",
  "key7": "4DHh1NW7hQg8XmjZ7b1amXWmw5uaYp8Svr77MAXmKGhCCmY45G2otpx8jagwqfRVDoncGXpxBb28d3D1fFLkWTnv",
  "key8": "5zoYrbEAhmdeET5JX84moVQNC2hWGqaTnj5MH1DqV84bEWfJbvtg4bjgE6Stg7kvjXZPdAFMET38HjNMZmShD1k",
  "key9": "23TP7kYsoanAwT3aV4iHWtUYxJR4pm834Z66TUKNmVBa5K4VkF7J4KFxGVzT5SMH9zAG6QaZKN519oNhg64GvJf6",
  "key10": "5N56miw33qyrreespPpdfExxjgY2SJv2WzEEdC5SEfxN9UHU1hA1XfHNVwoNm8Lt7HZCpCsLp7Z3rz7PPKhvCjyy",
  "key11": "2UJeM52eHQ58QguRCYKZ2qrqtgo45yDhBgQYPYVvHcXMTW9kX5jBofQfn6RiZGSxyBpgFammjfNegucsvu4TaPzZ",
  "key12": "3559QsuNbMi6XJHjznxdg3ap4bueKLxHHYyJutttGgMRPxbaNuyyHnT3GjWHMtxCsCQ1vGoUFM5JSoBbfvbQ6kk6",
  "key13": "tjEcKvn3j9T74rvr9bUvkyJXMzquwa74yWcjtDARFSjYcdkVKv6sLFuXQjHQ9K74RHpW6SREzMaPFSqCpesohQX",
  "key14": "3224rFz9VRHa6JsqjSwA8DiRWLeNbMT8CGGCoEvoXyVjcdCxk6EyiM5M3LyXimwoVfzjw5mEu776crsih3Cvd1sV",
  "key15": "tGiog1FtoNoaC4zohA8GxAzShHcnGDPgGxgJUic697aapkQ2qEsgQJjwW1X6k1VsMJoBsERDC4gPpszSHDLJQt4",
  "key16": "34gY3WxjZDzhDYTqVrysx88oZ7WL7Ycqnn84J6GZijiiAEtrbxPXtEM7ndJphnJGVEknzFvt6kSCwLyYCd4BTDMa",
  "key17": "2b9F6SzB3ymdZThVqKsWq2iGuNoNBAnpNcT9cbziJZfGS642e96gqTBe6QbnkRFfhDYLSe3jZd6jvzB2Jq31dSA3",
  "key18": "eshqWLAa6pnVdyNFQg7rTbfkLDpSASiwQZfs1drxuEjP89eeFNGF44Yj6sZiP6zE3AUVC4eM5CsBq2dp3DRMSHJ",
  "key19": "25WitrQWN5tPfYt3NRqK3kLgGGQcaj3xMawNaQqvjSzaFEqG3o59T2WbkLsBNNFfvtmgJu5cirqfidLEqZPDmjQ9",
  "key20": "67m7PPDuCdXJEagLiRH3fzwEL5RwsRSpHjw9kx3hY8xemqiTR6NSozZoJ9CV6teko8f3jSJY99BgsHPTTR9iYyGJ",
  "key21": "5s8sNRMfnveyMruhqyyQ4W7voKESujKUeNPXHWQSipc4Eb4f3Ld7nnWvoZHVdegrFJsvtjbk9TwPP47kaWRZAQ34",
  "key22": "5JUb5cX2ei4hUu333cirG9Rf5syPtL4XTuTCwgUH8aCmxj99rRS5NiEW5uvjJgBiek47aSZ9xQP3R3xEZzx3vPmm",
  "key23": "5n2uAgnT22hrdbEoAo4J4bomhrMwyiUofSsqzmNgvEs3vLYKxzqyEoN1tSzy5LdrLUVdmLabo9Cv9Z98TibToQCF",
  "key24": "34KyDsqVQW1gDbhuj9y14wg5hqLMWegQ4GWgcYZTnC8xm1aUoEGiwKxYw7yqYGftHKfo2A9hr9LfHDHvCZBgZ2vE",
  "key25": "2SUvXYi4bexNpf8wWdjWG9wQsVS2DyexuVo8VJiLEAxka3jcseoumMWcaNdtNdV4DLKRVbLSxGGeMqwvvJGpryN",
  "key26": "5SSpvoZ57FTE2efz7vEYief4KR8ND65kVD7mzUR3ety2chVZLoxFv2gKTeHWXTJYjcmMSupa7d2HXLuHQVPA38Do",
  "key27": "2i6dCbLxsPfensvGzq5vuFNxjpAunuDEbexQfT338Uh7GDVXWrFgRMUjm5fBfesanHDsrhzxUNW1F3etZ36HxPN",
  "key28": "2uiicgJWy44Q2kvPPwASZnZjeZXAYeBFKqP7eP9ncz2GXnoZcVimaKvq7CW3gAw2f1dtdRT6iPTvYprqtP6QdmT3",
  "key29": "ZdKdZ7UygKzXERPcKzZx4ChQHGgxcZbRoh2ytunhH8CgUNNYSqwF7y7xXeGB76vpjxHauAk2SytvGMEEo5eBeyW",
  "key30": "35C29163NYoPhcrLnTPXKzgnJrg42RmLfKBt6Ew7ix7ke4eEKXpFZfWV1iMkDKYo7LApn9UNNQgXnAKUygMC13Zo",
  "key31": "dE2aRpf8bbnjQ5gyTqS7Dg53Nk7mqch9t3kwXxQjLYQEPtiWiTbT11zgpkenoQZsyKL69E8EPUoGpSq3G1hevHD",
  "key32": "5CKSqVDBMPoBobfu9WQLukPXXxE48kkG9zDgUjqa3z1t1DBdQVFVL3x2jrbLLpXH87EBVsARQCNafcLTgid3TCQm",
  "key33": "5SdcpckHGRdG7i8P8aRgDyCHJQ1Kb9pi2WtmX3KTdGEL6vpv5QY3GWxWhzpTGvKkbyNWVGiffXoGogk1Dmh2WKQB",
  "key34": "7zB3hudEcaLR4cdL8kbpnAisKyjNvMjL4B5F8QD9X3usAK4SFsbMfi4Xhebi66xnLBRp7vqJdMA7BinbrKtUPqQ",
  "key35": "QpbTP6oKThELpj7tKfD7ojLxUCwNGvGLDEeYRrMkwUEWF6gJX2PMkK4HbTLQNhxYWJkSoKHQoAat7t9vYtrmyEg",
  "key36": "3dzEkyd2RbTmEG6qRr5cvzK6LbWEe1UnWmXd4hHQMC6QtYUjP1U3msdEaryeKeHyHfyWBhG5LmtgVJAgmFvP6E4J",
  "key37": "5F9nXJp2ipBNpAWHa3JCZdxmU7iqBphn9gkB1X4xwWgzYfnHaRMjy12S7nqKjs5NDbMHQWB2VyUJSyFPioQuutqb",
  "key38": "EWNGaQw8yMa8r2QamKcm3yfZmUFGyKLqkBvT5pbsXmf4tbrK5x3jYkSKDvofScirSydKd1rkvmXSfS1vvzG1Lrk"
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
