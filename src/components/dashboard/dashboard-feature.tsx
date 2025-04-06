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
    "2nZiDzhZTdJFoziEfMFSj4Mhe3jSBzoisXSHcqNjoMXj5C52g7kMSjkafSUbnHuGxWBRRNuaYXC58v8zwQz4uKw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcFinzAAHYVzbpPsF5rSYHeCWu6m2qe2rxKmmmQ7onpJTsv4CNUFnHk1NyruUtetfUc1CxkGVfRS1LiwBXHHvbu",
  "key1": "3AbJaSMXmou9whPYAPpdq38rkrJfgrzx4kULneRQJXerwsDakXiKfHqDYGKeXxdrBBqh9Cn4qwU9hetzu74xTNju",
  "key2": "Eezaoe67SmopmdLJH2DzGm2j9rKdn84HgZuhqtBS91BmtszR2eHYoYZnfy8C1b8ZbdUnamAg98fd3Hd854pVdTb",
  "key3": "62LDo9RXoRQixFTA7EJuJbqpF5AxQ64LE2FbnCNz5TLGrLGbSQEtBwjR2kLcUVgnkbC2dDmHwYGtzghqHYpSLvCH",
  "key4": "4TWK2g372RPQTTiZ7KUm3BdV8t9pQeMALZTdSrmcP9KP6pmgPkzL51Qd7nt9ADpXmpdzywFVJoyvkz2sL58AciuP",
  "key5": "4j9MCfaTFXQHMckjNrqv5Scngtc3EujiJZefJ4s57byQBd3aSqNgUPiTD7HfkzErmWg6gSRP5NZHqPyVATjQrqAd",
  "key6": "f9Yzdti1Tsq32BkabSr3nXb5C5XEQjZnXu86mPwThpocDKHCzsFQiCekeqF8KX41eRoWBFnh21dNjsoAG8JWNJm",
  "key7": "EpXXKrdGuound5QroBQ5tpk9rEuuD4gGvaZtacDv8Rt5wqbRJT2AFyecm2tWRAcAn9PcLKXkSRHbRg1jh1mtfUr",
  "key8": "2HWGSj5Tqba5nWbZUt3eTV1MtHbyfd5FUt3WX5MuYtJAWsH8xpoATkhMD8WbhKpsGQhQ4bMSR7UC9YvLRB5Kw6i3",
  "key9": "RWsvfmmkzH5yauBBR1qiVA9Xten3a8xkefKe5RDTht5Gxis1UXEUX86HwjaRHbgeMMe6RqiUuCzD9pNRk3eWcWC",
  "key10": "nvKa2pg4Y1hTZGUvxjmkqMMq8zv18qrgbdsU2W12zyTLjG8z4vfPogb7hAebzPGcg3JRtA6M1BzNZfssoHvnfeu",
  "key11": "vDqsxLXZ8RKQAmpyNEExTMEUxfxKiG1XR88XfPt8z2kqHw4fYFjHuA56JBb9i9DPhjG9hpVcZ6ToCquhRahrnbN",
  "key12": "25XhgB4bP3xcnhnfGFZEpNWmVwn6uVBATxNYZnfshqgXnZ2cAJsUWHgPBQ6DX2ZYhQXe3XiVFgbKWFm3D4YXrEdx",
  "key13": "WZN9kXbPiUkYu5kWQSyTwmyB4VFhehTonRwabu5gGWp8yScdjzJq4qDJjgcGFvEbxiEjxWkiY3fEcU6zWyGF3qf",
  "key14": "3fF9C7YNUHo3Nr3E4ijoD4rKQtiwWPTWDug8tZbvmqWExpoLHuvHByi6So7MnpZLNTaZiHb4a5ptCqWs2NaNp1nA",
  "key15": "4AnT4YwgNBLqP68mRomNTuuBN9AwMzt1dmMae98StqWyu2Tr2FyUUzKkpgX9cDJSbae7p3o4UUgrdra4mRVkcKeX",
  "key16": "4i1mV14UjLHoxYtrQwASVhLYcHby6ZswjUdJQc3yJEzLRhM6WA5WBXNRzzcBnKH8WMD2RJNJmVSdYzhMzFRHFck4",
  "key17": "CeRLBNRdpMxGjaQh2Z66c6TAuebrQWEgsMejT9HyjRoBGCrKbD92q5tSCDSY3i47PEZez9dYjpDk1YMBPM9cpM7",
  "key18": "32ssfPRvxM9QaBbWXk8JnSh67BM4X7hCQPbYr2kwTWxc7PNZ3nT5Cq7Sxi2jQ2pq3aGLLJBGEaP8Qj4X7oE4rvJ",
  "key19": "3Pq9oAuvWNJLTEr95CotgARN2N6xsvDUqmXfp1j8yMxHskebJ2nMdDSYChmHC8RXzcgboC3NwDgxoFX3EXwp8T9B",
  "key20": "iPMKNX5uUJfGoBiRPcafiNMpG6prLHxrV2Rozb5U8chP1YivSXH7S3eaomwL7qHVFHHuo3e22cUPc4JeKTmE9hn",
  "key21": "3hmayx8A7grzqiusoNRqXGxjjrYnoFWMsdPMAshLMRcorZp8TfSbCQu4P8JgKPrVqoT9TGG27KByvrJEC1vACM44",
  "key22": "4HPFozXLN4yRRd3trtEuCW31zS3BEae7ZWX3JpJV3J3QvYKguGvabX3pyfkw78o84n9VXrhZJznLwWtsMjPwkNRN",
  "key23": "rAkUgJ9LFLhrHcESCA1zm1NJDdS8bUpMBmvZLBFFVnAMebJ6XSDeNfuF3wBLbNtHAZrSc5PeegfZ2Qt8DFZWSGK",
  "key24": "3meay3Ncp6kgKiypJThPBxx6xDQb2NgcRnMuWUgBRr4ec1iFcKNmLocF1XTdN1ogQJHoCf9AMNtPBdntFmYmDH49",
  "key25": "2EQzvJy9nLU4RxrEyXC2wz6C6p3WPXpFGnJdKLKkBtrHytFHrdw5ZvmcVkcsZbtwau9aVh2iEQ4PEBxF3rJdxE9A",
  "key26": "5sPt7aYtMYVH1of5HHrrLm7JAUUJdF9NwkAFTVEPbfTn74Z79UzAPswXgi6nEgSo7uAtPv1p79YM22evv9k8RPb3",
  "key27": "J4pmbXxr5oeGApzYTBDBHs5fDyZB4VHA6VhcRvbqCMdQUoDhKReLmvrRDZzLkaYZ9j7riZDLgTH8xp7TXFiy5dH",
  "key28": "5hyq6F1591VzqSdePburinA2KDF8bRSJ6ofR1PGSfsQUaKBb8bq8tGtsCK5jNsUXmUQ4PcAQWvtyDJjPbuvXDFtn",
  "key29": "2cGhDFUABzXfaaUVK49tK7FED2KXQMFqnmcyauHFxJiG5ZVjPBnn7y9s7YacDNcpBQJGC3aV7csJFHVKmWh1Vkgn",
  "key30": "2z1CZApv5cnLaBUSre3baKNinzihc1x8fexhZhLVw1C3Tf4gqQd4wUVPiDbtsfJucrcdd7a1gWzp6Gpx7NQTmfB8",
  "key31": "2CJLWtAWg8AJPzuJX1vwyx9CXTxmDpQs3FTh2CzdGPUGcnkK7mAHsQQHifDBU4nZ6pPkbFyZ8wvygtNUAN4pTnCd",
  "key32": "UU8rkdS31cFitZAbrniBGtKkyw4e6Snv9mXQE4bqG2KRPd9DHSYXaJKjTrkAv6GdLqH5CTp1PgiXF55tAMNJrCS",
  "key33": "35XjjBoVEN9wf7fM4g1Vm3wDC7dKFLirgpCE4GAegNzWVLZnJj7SqGKc1AWyDNtCdSARrJF1wjr4h9Jq9Ar4f9zz",
  "key34": "vrzSoiEybmDYp9F3r9YmoFUwzyWh1sDr4prf47SorDqAuppffC5C53yNrQZDcVPUssTWL9JoGNNn9p3AFTAN2Nu",
  "key35": "4Dv5UY9z31H2vzzxn8A57NVDzT4eUGac8J6RJL3Z5jaGZWvSL7z52SrEXdKJGTL5Pdv1DHkLsC2ax8KxSNJRNtuB",
  "key36": "2d2DEqaP6btXeYb8JESZXFy6FSpmWTBEDabMZhawtJEqAK8kfMmf6doq89oHb1V2bMiJPs7r9F6bFt7HcaoXQrtq",
  "key37": "T93CZ4pRX84J7wX2T8L8XpL2hrWJvatLBtmSwfHjCjmBXv6RRa1PZq6kcdXkSAAZpwMkngAE5iQfTe3SPHT9ydJ",
  "key38": "53AB1TuUyjJFoEyixZbDCwnWCxhTXBLtVtp4bCMXGuGS9SK7FdiMA3KQHBVPfsLETBZnsxZTn4Kz15FwmpCtMhZp",
  "key39": "6EaYFnMchGAWEyEpgMseCZufX4rmPeTWFrAFy843gaCnNRDj6FTqvDSXfaVscy3wb666rQYB8VV4DZgu3yH2uph",
  "key40": "2cGzyai8QzZeVVg3Pwgn44Mm1cpka4VYmHsV1CthFNt4FQUQ11YGrjnHqygvBCcb8bwJrx6cTqSCDhWdUH6uMpEM",
  "key41": "2fB1bxiWCt1fsp2b36BVAtKJpQxmRWmdeD2ZBNEHQTTEeAZ5dqpbmG8cRjuzRQoPV3QzTfLQKkMJiNosEv41ePx9",
  "key42": "2L9L9D1WarwsDkhKFA1LYfMxWD4gfRG1miQN8wrHDtqpqFSwwipW3ryew1ZeMjZjLABkWcc8fxcA5ycsfUdRdeoB",
  "key43": "2Xq3cVWovU6EZZhWJvjz4Ybd3nu4NdJYic6E3gqfzedKfEBxM5e5jvmX8cP1iVhbANZ4TvoLxHDRNkeuHEjqBwdf",
  "key44": "2PJnTAdnpuumw1BgRtBuyQNU1qNZtHyReWew733uyW7yWZVGRJd3tWKfnAUzPyYd9HNrWyxwY7uRgLTyNM8MM2tN",
  "key45": "3aeZ7JqskQ6aZ8ijo5pkhP1Ly18cpjaTHoALZ5FikwT8N89fuEESQ5Uah6eoMjSD9fWgqVi8LJssSXmPCqiRkbbF",
  "key46": "3KcBpRnP8zo1RAJwi729cBXgE5NUrT85pBbSAx3Fm18roLmwT2gatorkGuct24ng3zRoqAxTtGFstEMdjCYTLciZ"
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
