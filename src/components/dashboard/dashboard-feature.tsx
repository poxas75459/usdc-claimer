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
    "5Vqo5vn8mEH595rMuf5h7C2kMnBhvcEKQ3sEAdD893zGRP9xHdpWLijCGf8UvqXmuFg1Rsu7ApVXhrSrPCzVbyuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYDZSjXyzB17wLtp6tCDE6vHGB34VMtoATMEda6tpgi6dhxX7AoGr3wJoPKHt9CTEVrtDVyPNyNwzhAZ2kyXBqA",
  "key1": "5jU8Qb2NpNtQKDTyJQhHVCkf12LZjc3TL66qbUsdL2Yy5Au7VTArSWZEerRTf6q5o7RYWC3b6eSskF51jWLXX7jA",
  "key2": "48y47tNpyMb1WTgFqwtJ6KZXemSkkarimjrTB7UYwU5ES9CZ2B6ca74wvjanKvdCXyfS8CoB9cw8H2md2WvafnKp",
  "key3": "pQDM82AsH5FxP4xzYVTgvWDVye94UvDedS6y8tRS8Az9aLXqEtzDSNMmTFdZsjifo8ESZ7TT1PtUQhMB1JLzrfn",
  "key4": "3iPHa6kmFmaqJ7yUW8dRV7AB1S5UumYzp2AegWgBXLUHStrTqq9YpSxLENa17ygK17ZeaMgAgsJ9dHw3YxVr8uGd",
  "key5": "525yeAZ5KeHKtAGqzeZJo7Mth3KXSJqnH1tVZEyUXM3JgSrJS96qk3ywy1ny5nV9Mk4PSL17J9MesrHdkcn8JM4D",
  "key6": "TWEy7Exkxu23jaKKcirxVc2n5RYKTA83QESozNMmdC8DVH7qZmDnh4qhSmv7L7yzZugYXvDd6Ht868tvzBPyac7",
  "key7": "4waWdJgLTomUAzG1SmCSJqupJLBR1Ub5owwx4FwPCg1AsNX67emP515X2NSFN1MtM6kefq71SRrgXSaR2vqbSq2R",
  "key8": "5cFbsiXVHvWY7aoV8upbKVhgKaCxt6CU258Jc3GC7NRgQKYtxcZo8FSKt2FKj8w3bcFBTNZGs5UC4v4uTg1zqsi5",
  "key9": "3soRqXsNhSk7Us71LZP3H2jXE4prt9U2CVbFFNKoKGQs12xnMdMQM2NLRiaQDezCwTHubFqwm5asghMVUpj1NKiZ",
  "key10": "2qcgUC8cAm6oDYaw9K2a3XoaEChZFsVWcCZ1oSQ8mDHwSeSorUZaGPD4V2PzAiXp1HpZDjnPnSPBPXrEKnRbEc6k",
  "key11": "29mfnELuijRijio7m3cAESUD5gbBkU4QnTK2XLc47eZMzPgVe6RzNNSFK2Wep4L7EbRQjPpDmEEDMJNQFbxscwmp",
  "key12": "57MHJ2BqZKenCPuL9S6r8uTkBYCmg2pdKT3Lhrx2ayXgDF3VMfdEdJECPEQWDQXzNQoW7DRkNmGSyRpznSmYWyWz",
  "key13": "3NSr2a1LEonfvPFTYma1wJ3EifJndBwEWuZ6a98LbHJ9kwTi9ZFjGntS5FueRT6ae54FMR7EMGRvr5KjMekS7aDH",
  "key14": "4Sb4te5r6nXMkfYKCUkDWyXCaWYtRQMUB1cn9xp5CdUPazq8ZdiZ4L9EpiADkS4wNXac14YtKPLshk3xeBpNJzsZ",
  "key15": "5Az4wFT4hvcQBK69foRMTo3oUP8ky75fH15NdXfxNaBEEBQWWvWBNp3VJjTdjhVMKtCRpFkXg2RuHuEjjPhfTd2i",
  "key16": "goVCxxWUP6MpKtkJ9owpkCja27umyvsw6FFqXskq8oapwzfiyzBkUCAG26FjrAxiRvFCggu1QjvTTEL5aF5tAgH",
  "key17": "33wZNfyGsa27T4xufARoFKGxHKkrHkZHU5uTqRCAicEv2dPXFoc8cEu6sq9kNSUMfcQ9gW1AwQyzWy7g9YdZQQUJ",
  "key18": "5skPJpqirZAKnvkXUSofDgbmWeGjdurAZQ362wz5n53hP35f2vFtV1PVBtTrZDL6RhDz9W9Ake2yAbekPzcBxtCQ",
  "key19": "4f2WKXTDbgfFANUkMoccxhLLvvo6rcg1TfJwcsmJ9V8nyPMEPD2kWTRjNwutVwRgjDrMFY5LZuuPjDcs38YocR7E",
  "key20": "4MrAktC1scaHzYXjdvjcNtzZo4fHSnUf9MbArrPW5R2nJ3fetC8d4ZtzYH6NyViFFfjp9AmWRCek4yf7Vk4Y1jCU",
  "key21": "4u3CurVgZeSJTxndjiKJwq5e5mQjgC3s1sBavqFGzhHQvpQdrfM8Lu2Yv9TxdTcnMbGmnsBaSU96GzKhS1D6m5KX",
  "key22": "4iSr4VPCPa9i68nGVqPpA6tJUbfon2VVpdRF2c5mYULfccArKNxzZ32AAH77iLAggWwAWQCKxB4G191vf3bbsqh5",
  "key23": "5hKGBgAScTxuWh3RGq2dN8ZL5UBoG2guGNHENRJzHwAjkUz54eA2W39cGV7ES46PDAaHhR1LdBTcG5krgpqJ4UwS",
  "key24": "4h4oizqaESPUDWZYTe9BbM1yFWt6gGfjkmrkHthzyQKJ9WsJx3GfC9PcqTBzMUbQzpdXqjsMwDHhBttGPmRJYJ1c",
  "key25": "3iAhMFCCs28Gftjw88ydphFAaUZvtoAAubm5tyHB2fR211Exp77CY97Pc4szEKsmBByGk5jjRxVi31Knv8PQ7Gmd",
  "key26": "5z3QqHQHKKXq6oqDFdFaLUKrHXpTpi1Z4HqZLuCJubnHrHCvLfhZVhEJ9hHc7nXufcE9LnKy2K2Lr3qTBrfPh1dq",
  "key27": "2haJatQvovk37RFBRkjskbCnQ8tjshL6ho3hgS3dx3oNTYPN8FSzFbHUNuFrgCUezSsMHBhBCWMjaa6NLHgbB2tW",
  "key28": "5kHsZrYaiGPUbgbUaQB1uE31yCWde2sgCdsGYh2dQHQuARFAgMS2BK6egQUdgnTwUjWieV6fugQMzF13NRBPUFx5",
  "key29": "3MG817TpZzmEJVvD7N4kGVh8fyGWQLrSrYQHms2Wy56U6v27jLS5ncLYEMwvP9VgByw4gtLaD8gGcWHmcQ9ZQsN1",
  "key30": "3Xp9DNESkcUUn7mDRCBPR8CkPL8KbivpQHyAJxyZCtsmThw5NJXGafDHyA6RHFNAcpHCKgvTgwhbq7XepEkxWtNt",
  "key31": "2RujBKP9KnoKvCTuEbchdwgm3egnMwGbizfDMCqLY2DKoF3X4GS4DhXdcNza8rEizfBwDfMhXqiqBmyA2wheFJPq",
  "key32": "4U4Rn86kzX1VUDttK2WZ6SUJLLCbiezhbgPoT1hiiHHRshBpshiHPLsLrrRKXWLPvKdb3ar9fwW95XZKGm76akEd",
  "key33": "2GAmA14E29qWrbS2uwXJJaafnFqMmDNuFz4JYguSe9L7uCjarFi5xq93iVcj3tVxr6UaapJx2As8JXpZCvUMqzhP",
  "key34": "5faMDcVRmEAcRxu6UM8hf5p6PSzhre9gZHJaisdQSjZjBcWQdw15FKu7AhA6DXZUdYYzsECav3dFfDYtcCiVY741",
  "key35": "67EgtFpnSVBN7Uwvcc4gu4HqieY7gHahGGmT3XNbQ1Mm5ocn3fhvqjxBguUzXUfWPuAZGEyk3seeyU2yV4w2QPRx",
  "key36": "58BYjsSMsmcz2842qVJKr95aHsY9uJw9wS5cGqaoZBzTAJR2yn5MVtpyjBurT9fjWRNmqH9tVK5JmfXcUNWR5Cv9",
  "key37": "ZkSWGAvgnwBmsQ5BuzB4hdMnX2rF1PipGNiEuxoJiLkztK3ufCtjtWyMA3She8rPYrfx8DRw7msRtUELaVZviXi",
  "key38": "3SCgxGWCAnFs1XcpQsPjosrJKfw37b4PgHgLnhCmphUKzgCL5HCtw2FgqLaDSsa91C7DAyhTCJu1JyWyc37NH7Hc",
  "key39": "1tZNDqrUgn47Smooadzji5spPdH7j98ui2cSf5o8HqLzKMFHRmJoYNjdY6roFAKenx4h86uEYFnMJqb6UHMgEoa",
  "key40": "4mrDpeHf6KdQ1zDegu8i1zXowd5YqMfgpz3Q1ufjXMMFecGu4Fw8eVkVhcYoWQxTeL5YTMBdLYE6pBsx34qcpy65",
  "key41": "viTLmtvv21t63qwykkh4L2Hs1a9ifz57rSwApFe6MxAkJMwXmUECgL7FjvMJPrPiuWbrhg59mwAV23HS4wYHhud",
  "key42": "5i5Tux3TcZv7Jfa4yeLrybwzE8BXcj4grKKW9G6Z2xB44FoCaUohEvqQTywTdC2sTEKK9JwK5o9qPR3ZgXLf6cZ6",
  "key43": "tgzuasM89xuQHDAtQWT5pPq1CAnvR8LdSgcUH1KUmrCST2h14Jbs1JnAtg1xntssJRTXxYT8Tithn8i4fb7LoLx"
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
