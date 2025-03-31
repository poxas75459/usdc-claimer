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
    "3hnXRLqmAKeFuZwpvWYwTQBy3TggQ554qWSD4BWs4Rk2TiWHzD69s7ucgNZHCFXCBYEMJ6VqY1C3vmhw1QwJKSzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ykxV1TovTimjQYPuxiwtkWaov9irC6GXbBzEtsY86E9kL6VxT9rPixM5ckWKbubmiBmKnquirqNEXJSaSEgGJg",
  "key1": "2W9CGDzMTs4Y56MRoZuCDqEpMdozEUxjjYJibJETeCvMEy5ZL26gVP5YckMRjN9zStiqgqVUtz9BqNpegcgkyQDw",
  "key2": "31NaiDosDdn1EpC8xvrzFPgxCaeoBLsnAvaMvYiaZ8i5dhYYSvQmx1mss4Lh3RViVhuo1ZLE2Bg57pcFiVjBnyex",
  "key3": "p8VEozNdYrt43JA9iDJuZeTAoXa2YVBdF4Y4K3xdpEcBpzadj9DAj4CTGY9fbjms1PVvnUoWSFAYNoStDjvDSJU",
  "key4": "2kdmLMjQBn1NDZ4wPqMWz2UB7GSHTySVHxxQH17EBusWUcSEEW6F4K6MJsr33GfbB8BSmKGgTGuYC1yqLt1rfPGK",
  "key5": "4wPoiV6aog9mkBqsY4qu4FLdT9vM2ghsoXCNdhEhd4fN1X1okrn3nZt3eB6GbvWybbG7tE9YYcW5gHaAi7KkXLSN",
  "key6": "24XhH3u1XNZbQCPsjvAfLh51shQmySWCrThrXgGtHXXCDppWMvnwgRW8wNy34EcmcSzbAjtS8xznLtxSG8nPEu1d",
  "key7": "22MDdRXkvX2Jpdk5khtkC1dLn7GwfnogWhevbwSmzB7jRWQUhf8ui1f46H2FDh2sMXTnZTih3zUT2Jx2stJ6oEBb",
  "key8": "38ND6vUvhg9Vn6tEN8H4Aob1Y1CcV2egAk8bSqeXtDRVYy9jAvT23pq9y4wNMBKySXPa1hCvyxiYckLTT98HULfu",
  "key9": "3ujckMPyV8V2vvUdAEiYtv9p3CFR8UcD2X9kXkxcJn9rwH7ukaWoEyiJGQX7uA2byqXp5yX5w6mpmSkHa3m6QaCk",
  "key10": "suYrVA4DJ1DUehZ4AizrDC7N2PXyHGy11yJ1mT5AaKTGMhmkvzAFfTvU2B3kfbecsdzDpCQwpLXxwmDzCTbgydz",
  "key11": "d4z3jPciQDE3cQuPvjSgcyhwiouXuY5JRNf28AuRDSfVy44CnYhwfgkFvYAqeGhDzoF7vwBGwkRkYwaXbPrJZui",
  "key12": "53f1joTJzxiw7dD2WsZXXoartQm4ExBadSuPSP5SeKc98J6ZrRkHd2CTWfnkp4CcPSz7WGJQ8GALgbdQzoDtTF4W",
  "key13": "SEeigddbNqYQZbxsPcxZiy9UKxyb2Xz79CuPHMZ37aQreWkP6j1tJmPPUBFGCP41XADHB2rSPq7c24XgG6b7rW9",
  "key14": "3pnzpuK82H9hvmhrV9EmZYJyuJWueEWQo69pR8GvAhHNFYXbYySGcHgyCwrtproXPuCG3qpywnx8Mi1YwYgDw9uU",
  "key15": "3He7LUYJeeqAxxS2KbvViFYijSeurXgRzpzhQvsiGwS17vCjwFsjR4kbq4Tu74KkKjJZwzFmmXq3NURhpdkYtaaf",
  "key16": "48r8oLvatxpBAYvASC25qyoweP8zes4efu2DaYeXXC5Ljcdpqwwv4uVQg6R7NppaNhGBY3e5o2YvPhHyfK26wMvx",
  "key17": "3paFuebcZd9mqV7UoKUnYaXmWymm4vvkbRNDizsMDue51XPCVyyAQmNqmRQCE3yCAoF2K9nNCMz5C1hyqrQLe6X7",
  "key18": "SpbXwQecD4bbmHpetWoHXPUiiLyHf4aBoS8HTW4aw7KqX415Wq9eCs4jDJAfWQmBr1XNE1bcRUfWmvEYyet1dsL",
  "key19": "kaec5e92jTfV9GbiaWRowiz4779TP3uvS8Vju9i9JDDpXCcdeDzfNZTiCp1wDMDLAv9ibpLK9LCyfZDMECm1Lhy",
  "key20": "4t7J1gqo147qLKuDAcsoiDaYLD8dAmLWwA4Htik1mKyhns8GkYbeKtba3aW51JZMgvaT6CTQY3eGjMscTWeJbStw",
  "key21": "3YQGHDfKEjxqmYJw7EJHbeR6U3Easv5CHFdysjo1dF7fszw8fx5Dn2LGQMedPBEu3PBcvc9iBwkQgoLzbRHjPDtL",
  "key22": "KFfxzXZEQpPanFN3SD5G9eY5wf3TskyXyhywTeF5PvAKWaMkpGU6HL3evnwyXGCqyU5Nj4mfi8yWVaE82ZDib33",
  "key23": "5spx18iMKUDF9JKSEHuZXcEewSSQfThMUP78QTe8i6MButLnU7FrkEHZosnBsiXAWHiTfpJqwKWjqAwLgtf5GCYx",
  "key24": "2CeWG3AVcr4P1spwFMF4Fu1dw4cvcRPhuXTprc8xayMdJMq19R9XULjdhvrmgJKV96utMDu9ni62SoB852soPkvP",
  "key25": "54qWEbgQL68icsfHb7EgsePbXg2563Ta2AMMbQG42gvjFo7WafHHP8vSmwHYzAdfNq9szEkq7iNQNeeGR2fXxsKS",
  "key26": "2jGco2fh9bRPSavpDknpsizU12eYyoqfxLR4NGHRhvTLBxAo45MfvW2xdkg3BHVofcypwShFNLAM22p4WHpPXFwo",
  "key27": "5EtP9b6nrUxfrL3fSEtxVFLAA6BjznEcw9rVWSS4Am2wPB4qD2Ki4XVyioFNo1QAgUGW6AxpsVXVwyub8GSYFnbc",
  "key28": "3o5zCsa7pCrhZgENL4ud2mQEBwr3KbfTV9FP1aXi25o3EKt7J1Pur5UtV96bFKN23b5zdxv7R9a2jpPoveSuuna7",
  "key29": "4HYJB879rPg5P6U9KwvPxGabof9YVegTSGLFF7G5vqyhSkhfaRYUFo954a99pE4SNuP92zY2WPAedJVod5cPPZWe",
  "key30": "2RkNNQMAUdqKnxdzmRUcy5Eq84Mf1391q5RR8W2z6zBQu1PgzjyFJZDTzzG2hXDVmcr9TLRnZoJssDZ7QLxt8kye",
  "key31": "5CdpEtdr4Vcyt5o3hwwZwxkLjbhYrozhiWQi7txLqAxNtscL65xqyozc5c8Qz3xqh7DN4RACJtEenKV76WniTYe8",
  "key32": "5wGHS2KayBXRrhu1vghXQXzKCz3tPJqdLk6zz9z1GrmEWfxXhfJgrg6FYE4a4DPoXFXjhtWTQnFcazarSbhSiska"
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
