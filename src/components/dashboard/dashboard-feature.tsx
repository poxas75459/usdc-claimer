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
    "4VDg8sxq2pqhk4JGTqib6pnx87j9UgkXHqCTH5Rrp3ynYeM5SKeoVQmuirgUu4HS95JjJq8iZGWCnFCz3CdQBAR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjXJdCyDnhfDvWCjc9g3csnPFWXMECDdZESUg5fKPZPGBZmJxTCY189JgQT4rT5BxzJ53hx1CAZgGwS1Wr3GnK4",
  "key1": "4HAVEfotLjUH7jXrfX7moo1RU7Ja8zWxr5vVmFycSBDkWd5YRiYGxk8WipPGygTVw5qUzqDRiT98gGjFbfTUbanj",
  "key2": "2g14YdA64KbX1CN96C4Gp8QMNpz7UXhA7DVuCazwGE2HXdqVkaALLspT9RDE3sBpTFNV8ierjcXSwL21KUQ1jdRm",
  "key3": "42a6qyCMHxttSgXem1nPMkaukD2Nr5k2HJH3LrBy9M2na2NBotpR5YLxmBu61N1QM4vtJzUszKVsouCaA6trrVnj",
  "key4": "42hNtHnWbSBqBJpCpaDb7duL28qYf2Nc8cckcPjRkVvW28qQfwtLuxhkcfifiWCBAwVFWCup1Rnd1Uo7VJ1AaXfB",
  "key5": "44bkUbnG55jFpB65niTNeau94KsrJAXprS8cf4FDcRa8DCy9MAGHJxnrD2kKoh5Rxsr3VhZ8j89dwHcpsmn6exR",
  "key6": "fXHTozjQaRMXvd56M4LsgSTKozSdhb8hyTtmzzyXcPqnXeGVHsgtbNT6rXK78t9Ue1VvjtqjxhcoZqu5S17NcJH",
  "key7": "2E7NruihQLVyCFicxB6uKkmw1iGoPLrUScSPgjmMFzN8aA1qHDY1Z8zhZV5tctD335wBiZpsZNr4Jwhygshig3hx",
  "key8": "SwJj6uXE4BxEfqtTojYUVPDqwhH4RVBMCqQhexUBh97nX2dNZ5q6Rrvofbg6bNzWeooXiLMgqWWeS5CPGV4dFXW",
  "key9": "2ie53t91Dy7quuTDeWfytXgUCM6GtbXctZETe5cUdJmdt3fncV4yM4Xm4wLcdKPLHjRbQgcuZYUfQLwYJpWTC6YE",
  "key10": "3D6u6ogoLiSSzKarq2DX7nhP1W1XdLcyGQ8hKY6ZKG8um2hVcRhBnZGnMcCyF6fqLFmAYLZLvY4cpDNWMkw98LgM",
  "key11": "KUy7ncJ3RUwD3mxFuGfAzfMWvn6kBAaxQAa7PCC2k7RVL2XTVh9bbVEYqm5hZXPNGVGF9UVmSsWXD5S4WNbj3uM",
  "key12": "5v5jHC8ZcYFMBRVqkJ9wUiPGq7n7CByur7eK3jbByK2czBxufiDszGkEy3rSijG1irw6oVFjVyRehaNDDAUTcrqP",
  "key13": "5Y1hp7HQ8sdAgs4SSksuCiWpMABXwBH9hsgfrW58gE1Arero3prw62jiMUQmCeiFuMt2NhaE6bKC2jkzbdvxzX2j",
  "key14": "2rQKsvxioHBWAwbq1N1moRuTZk43wdeZgnrnVpBECXMydhW8fednh3NhD4u3ywEzW8wRNTC7kufXp9nHAqoYbZok",
  "key15": "4CFRoBQ8LZa2vEHgTQNfeTQ9WVmq4YzFfmoKrfpxbfLjjRdg6UAq2GZVKrCk8oBNnsehoHr8Q6gkZNPaaEGCg7m2",
  "key16": "2UrKmnUJBTZYBYokaYh34XVqoDzycphNZXAedRNmEnBz6o6qesGs6e8YviGSgw7BApBdZx3Vhn2shcZP5X2rtn7C",
  "key17": "3SkDdSy8pEN4mBm5grhTLRPCmb9W3jW1vWqHZpvpscboYFZQreBMeahgnMAVJf1tPaL5LuskhJZsXxQwUh9grL3",
  "key18": "26652ej8NuvVngAe6aN5FVrK2KH6HybeivMSD7RFw3HMcywpKU3Dfx3WMxJWHooZefC34iTrXq6TTxp2SyKuRsBT",
  "key19": "3wsEs3N3YtzKWdaBLqNgbNQeSZW7GeLAbJYGE5bVEU2i58exYFCcPGRaqe7uhnBUodaA6b1sLbDdAR9xJgoh5KBJ",
  "key20": "5VXEBKo8zd1Uhj5YSXbrc9ukV2iHZB9G4aKh4LUuPFY9QHL5HNonZFTn98j6Mb6iisgWv8vFF6kJ7kYxVPDkAQzo",
  "key21": "5hWbrzMLVSEVXkLFuf2rDZUu4k2hraLJqaNsFKkZjLuQCYtcVoqtmQtptpWNFo7N9HzzQQDF5v3Toj8sC1bUpep",
  "key22": "cdxJk3waFfGGLh1Hkdyzaq1Sokphi5YXfw2JfqPtBMX93e2rUs6HGbERmgPDX6iv8MBvq1kyyDvAkXDLwsqeXoS",
  "key23": "4To4uNwCmtAYH2ifrWRErybGMQbxy8yw2ebyUcBoRXwSbDosJeSbjhzFTrQ39J1WkYMfi6iSvm7CTrDHLaA7z7L7",
  "key24": "7whhjPApmNmBPc8F2gNNnY3v4mY14TCQZaLBhTNyfiGnaBYVY5VarVQAihDsC7yfJTAqNwLSDF51MUNe1btxdFu",
  "key25": "2gHDETdQwJYR4VGM9Xn19gtDVA5km53RbfTSvRp8L3iLMoE1i1EpuWQH45LqRp3N4PNCyqyMnLTFvGiBj1sip9dL",
  "key26": "3LHLwonKdh2gjcMXcsTq1HFFBeeBpT5Tk1ekzgq9D2ungbz8hPtsLQYEboR5EAGkDoYporryWAbrjTbA2uLhXriw",
  "key27": "hiMvaBzxNQuuSxTTBvN2fPxDwCoACYv8ZYcJHkygyZHqPuCz6dJN8FNEZ64sP2rEKpFZLyScCkDUyJfuZxGQP25",
  "key28": "4A5aXuracQ7bxG7vwSJZ3y4GPX4JBYTcqz8HAh5NgmobSHCQGJWrNMhEmY5noZbSCk7QMPnpB7ftoaNtS3YwsgWS",
  "key29": "vAx6BvExy3zsfgPaK9VxwFuDrb9DntBc2UpN9g4kkFm2feSnPWuCTN2tQJXdMobxQWWC8FsCLunwZPAqvqjAyPS",
  "key30": "4jz8Xy8HMkMsrBVZBZ2WdASop7LGLmkkmYNDJZTqS7dZMEwuj8Vawt5ERNmFks46Lt1r4Zky4uXLmDZXcXKE4VeC",
  "key31": "4H314Y1o4AsKXQcXP5kRM5aQNGpJdvqX6ZjMEK5FFR3unDub4NZkGiwd4G45nKomBsnGz3AjkDNn5EJ2sKQJzCGb",
  "key32": "pxXqBYwwsQg5aQQWJQza1q8s5c2xwYXRvFhDH5bKC1RhEZSqNkrnFRX4BT3VmkWBDFYwQk2gpSGSGCnrcy6saGm",
  "key33": "6tmY1MZcDRpy44bweMSsXvfdYABk4wGSXir7Pya3PuZ8rwjHM2qzu2Pq3U37W2cqJgjMqkTZx1A6RzHh7wGLLbh",
  "key34": "2UCRdERLwVpBFnn7bhP93urCvVetRhkHF2398YxukWDJJqJzJxkybiTsw2JKpsN6BXWB913XKsoKwiHJyE3G6SPD",
  "key35": "5uquM1df4gr9umpF6jZiHPxnVKP4FVUWbNganpY4CnibNiNZRVEfsiK3n2z7iTyW627BQVRcXoHmqigN1WN1aAnp",
  "key36": "51Q5a2JauJPsBi48nwRinhfh1DNh1Hr9bx9zHDnGibHsp3rwvzLav5MCnksjY5p51g9WfYwCnXS9EjS89wt59KHw",
  "key37": "2JEriaYiETSqfCcFMtSkd9bGEre4gKbRpNuqBn96jv3LV2epFyKVpeuKx9yZ2uUe4pYn4XwbsP2Ffqpv19VDnVyv",
  "key38": "Rh6vK2DgvrZqq7xuzUnMJgn1Eb5od91LN4nujub5eY4sMh7eNPcjMNrNWCaFXbw8giU1Y2sMptNykV6vkXugp9e",
  "key39": "5vdXtNhmzjHt3fkEBDUV7ch8b6Gc15zUhrKYUGFJBBKckDHLpiogh8GDJx4QczZLzCvWCmEjBh5nXdjnSvrqDgoc",
  "key40": "38C2f5YmmHZJEaJieHvcT8wspfwP9LxZPMGsTw1LAXC21EQiDq3xKt4CDb6bxKmhysEHdhC9FaXBXSTqkRrgHQsq",
  "key41": "3hroLfuFMX3f8Cj9pBYGzEYcYpmkfSLR1TWev3M6p21izgA9jZNdBfRxqQMzYBnAstdQBVd5wiUbokznzSrt2nH6",
  "key42": "NJWf4vswt5ZNZa2wxKQhF4b7rV4PDNuehFNDfLBaQwc2sBXzn5Uagp1VuP911Xq9oFnnk91hmbCWCNXsnGpa8DK"
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
