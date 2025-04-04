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
    "kNZGiLa9AvrSqqVLckDWHfmw3g6SyxQLoeo5HQvyRv5kW6rgyZTzULexJWsvCXAsyz5mhZzBq8EBMTjsoMemGX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWiU7pB1efLKTVVzYoHKZTE7u433D5ua2pdbpiUUfEsJbLemJDQj6BvgnAzG2XfgcJtwGyfLLXx2dP3vNZqwiws",
  "key1": "4Na3GZZogfMT73u6xhoZxz7UL39sGJrJqG3yh7K6v7LnosffDmqL6k8CHmUXKmVuNT3TcVFa29nToBEEwxqExMBu",
  "key2": "3Aeq6e4G8T1bNUvaXB5P6KDTRgriVZtU5EgCvZvpi2myzAtghFBswn3BKSqZuuv36L9dv5nCCzGpZuiEnabEAV6T",
  "key3": "34V4tui7NoRtm71GqG5NmfGK5rx6h5An7iAJXv9akNkbp57R9yURZ3U8oMEgnVPYevctNMSgmPjKp8iFxtTXDL84",
  "key4": "3myMps9sndG4Wuivp43nfyF2AiUyrnhNa9mDi1Tz7N1mcSRmH3B6gHNXtZzXJ2o331iRKARoX1N3gZ1Ku4K7jku6",
  "key5": "c9aKCbArjVJpJpBavCvq2fbHzRkow3J8Gi4ZEX5mmbT5W7x4k31Gq6acw9eV7onUXADTgeNohua177qwNyvLcMv",
  "key6": "53oJ6CXT6hgeZaMGJv76o4nBzsuWtrMz4LvcH9wAh8edEsM5XJGF8BrUZR7jcmKxWvMySwwbnCYnHUJK4TBqP2YY",
  "key7": "2yBwFtTDig9J5qhMsJtX128cfdETqpyaE1SMKSSJbeYKxoGBvj5rAz1jwR1LrU59J5VxBLdYCD8vgF7CeveQnZC4",
  "key8": "2cSEtKUi8fMT1CCcqi6V7MhGZ8biXSMWrazQdRz5zdHsZVgpsU6sP1UwXUFr75Uie6g6is64g9fmvQRXSuMzbsaq",
  "key9": "GDLrGsdpy3UpKwDcbATNmJPzjmqL81xD9GYxP8DsPzUdjiJtxtTNsoXoNZKzjz69YDPNuPvQr5eaRCpkvmDguJ3",
  "key10": "59BnLsYSarzi5JMgCbkG6kVqNryoKStDZbauGLqSGiAiG3krKMjmTTRDAGL2SJRAuAfSeU1niJmjmH7DeS5Azf5a",
  "key11": "x3Uoc8DruLXx4NQRJvJAm9ykUa1xbJ7KAQGVe2vpzYgzYJuwst4adaVGF6kCJp5RDsDPagEzDjoZkekHbKasGzb",
  "key12": "562STAnnBswqPaHaxTWuHvUEeLpiqbCZ8k11LE3zcsuzYveXmHQEG1X69FETFD1HbB89LB2s6c7zoeC2jT6YqMvS",
  "key13": "4KpptLFVSGNVFYubh32GMkUsM3Qh7SHDDBdupc7GQAFsx4QHqBwsc25qmBJnZPp4XgG8YhyLTjSAVMdnb24JLe8m",
  "key14": "3U8qQHbsPPkd1Ly92BAsqWVnT4N9jvtrcc8i8S1UZkCnQSENhjYkrUQFtPpUnofWCSGLE7FvdcfRGLNC6zr53Emg",
  "key15": "5SMM6DzLSLtyzUENE5pbYWVJ8EGVCz6HXQpbXpqvXLg546ePxt2fhDXXTTc7Ssg8CoVnAnuYmmP4rZGjrnjggJ3r",
  "key16": "4tU4T4nxurpfrjXruUg2KZr4Ye7PaMTxGXMiKspFAK9RF9YLgHDgerr1AFJ7KASnjEywS3qKdD556e1GiwNF4yxg",
  "key17": "2EjuAX1Sw6imn6QTpXv3oYowVwe3MZ8sHM23MLz7pCTCzTKisCdWEVLqhrE1HFFmci52dKTqkCQY2NtySRdZU5U6",
  "key18": "2mRA6SiWmXr5sbV6SzbxGVto3SjnmgztZCr348NgxsrSSAvLbofJVz1Z2GgQoxmNMRVy4Uw9T3Ee6YWnUCkAiaPV",
  "key19": "5ihPRYqoy6idiU9hjhGDfJQXVgKySHkaUGi9nHWvVZDW941aXj6HfXQWeWBTG1SszQofJXC2n2tGXr397QGJ13io",
  "key20": "BMEMvT7j5BzShkVqnmJou2aX7uSVcjKJ76P7QhSbGZRT7qU4MWGZQzQfmCnrYqBMx6VaE21iDNwvF2YZuzEwC2k",
  "key21": "4Gt68TYnJvafVoHLXeF7LAqgn5pk8e8ZoWjCipN7sAGcVh5XfgZQvARENwkUhJe4iNDmr658h56yNy7YkSdiqJyg",
  "key22": "5CAputzbSA1Bx1sj6ZcT3WGCVNoUP91cQDckh3xsQEwVPjG1KL9HjNmEgiQnQRGZAsqk9dT8NkjH7mze6Gxt6LJ1",
  "key23": "5jxr12raE2ByEduwtXjr5xnhiYxbUufeqmLxEUj7vd4TAipJQ7VhqWxsCZ5imUbQF9yhcgUfXTD11mtLHUW1BW2q",
  "key24": "4HcAz52ro7Fp1i565qrcQd1NqKkHEu3JwMvQ6VER9vphMUFFS4VVuLDEdKRWRTEpiXjLUAtmfDyY5q1nMo2FGykB",
  "key25": "43P5NHqXjvbQugVqEr7rpryUPi9Ng7DUxJe9jMGReZhGQAqCTnV3J5UeU1fbcbUtaVRMdEpghXVaREaAwNQAYVuD",
  "key26": "2UeaXxJLgW3wvvBbxASFTzLKpjMJd68YRF3BzFftP4zjJWoKMBcNzwMgRYhxjeBTPyBrKxV53PGXS42Zf9K1PqBw",
  "key27": "51b1vKLB5YTgUFVKLppA7rsnKYkSP8tqZ2Ns5KmTksjsUj2yCtNbhfCBxAtQ4TkyoPoz2rxeD4bTXzuWBJDvX2k3",
  "key28": "29CiAUfADvUDk534TGyDXXLvtN5z67E518FPyn4Xn4dJGoLvYV4dWdggyVE2rX7d2qJ61V6a3KvwMBMbZQUQF4rV",
  "key29": "54dSPg2vGi2maCvBVajRk99zvXe8Lr6XN4o32cNVFHVuCibs962ea82nE14U9DRzVMVeHst8Pg9aotxMbgfbveni",
  "key30": "hCj195thnUDtMqhiK3sipA6KKU3fDg1M31ZkSoZdKtKuiUkTLbDgVb6mwJdjZrfy51tGNmwPZ5H7SzJ5oLcG1aL",
  "key31": "46g4AixmSdP8utg9o3z6XRrET42cVEy54iPJXZZnf5UeGf3tprJaPtqNX3Yga4Bn5iXHSzM1caRyzAe2dXZeXise",
  "key32": "3RheteaQTn2afD2nNXL622SesqeQweKU9QTfzwv6PTTpvWkNhEY514nNqn9LfxD9j8LRCndbAkMNcJsjR2vj66si",
  "key33": "5bkczc7uoPjZr2TfYKjpfUCowsdTrr3uknWoEfnNZVqkYfG3x6Rog2syqD46QCEALBtbfiGMAf5LMjf1hLB2tcQx",
  "key34": "2LJ5FmqHenyNSCKBpGStVJDXR2CFhsCDkQihPseVqZeteWDSqwQsiJtMrs7afWh2HQTX2DAz96ZpcXiSZJMYGzGk",
  "key35": "4pdDbkPAYCgwZMWLkiF6DRpWSYnyBLoLo673NH8bKMkMZC4fDHREuXJVqveigrKctroGTDq76kCFkJV2BeaCe94K",
  "key36": "33q4Lo3bt97zMfrb9QtPDwiv7DtdtZo7KhsSXjdutEJiiV9mX9XxNSndVpcF6xXfogPcmnCqmiAmVgYoNeuvzqU5"
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
