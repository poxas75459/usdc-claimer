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
    "2yA1MLHxaiezjhUVSrWnQGh3V7CDVJTMAYX2rzsxgcx95eWi8i4wiBKrwgT9GHssQFuCrQ81H73iRniSMMADbnxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNLLh4ZNKUAHZKXghc4f21oGhVs4JFMXnn5cL9mH5tMa6gggLhQojzQzLnrVDKfZkBPKzL3qnKyFRZtXFWyvhMF",
  "key1": "3Xz7Domcxba5o2U6fQwYorke6Xd84E9V4dmMb8T7KwaQpxkRiFocM6AnyuqJjUmcMbvXd1C6pdaJmjfYyZqxWpSW",
  "key2": "2asYgH5xXjspWsgpjBGyEsWtbgyoEidP6qrX3jkBLx2kJV19KFMXeb5PJBzAtSPUSxgBzxPqSHjz49TaLD7PqxY4",
  "key3": "steeFoVHjn1eh7p5rE6hJDL3Zrp4QnjhkoXJZ3rHycWRtT6mBbVaZwSxFoPG7thfAtz9NeqExNUEYarGVg2zhJW",
  "key4": "51e6MtQeyTXyYbrX6EniRzk4myeJR9XsNdmo6jCZE3UQjZ7ebZ2ogRcpPpxQvNbaAJ5tt44K32RkdAw4Erkq7NoA",
  "key5": "49vdfdy8TMvkg4C1GjS8kW4vDe1c14j5MdpEqi2iDKttqV1NyaPcmeGegjMoR8oe3YgrjCk9e5g544SYJoPNadbA",
  "key6": "4ezVNbQue74kALPQr7srXKyjK4SsPc7LNjxWxW7o9aBQ1HnA3o9jQ4pTPzRAUtaD9hTJgqNBRRLwxP1ebyAJxV6z",
  "key7": "tCwduVWTy4jXJd2ZfEQ8Lpie7jDKGeURhF1s31kdpa8xk6qzBrvHwjtjH5oDyJwzTjJ3BaR7qvvqc8GptUDW9e4",
  "key8": "qynJeEmN2KXPTUXJKgtnBqU5ankkh9d7XKxCy2bgmEHUBkAiGV3Zmnh2HYzwfsZgn8UKn8qKAiaE5aq2rLqzXC7",
  "key9": "2gCQeivtmRCpQfArYq9i4C5rrH7fv2eDGQqLj5R98LJgN9ZYrw2NnrbfNtXDTmfy4DtBC6x2sU7x6dY4cgg43rTu",
  "key10": "4dQFyNaeqbDo5cuFFcvLdTpcxyZDQknY49YfRhj6h8FkYX6T3TLJWzNLyNEDzNroBBMgE2SsWbp9w78ZAqw8ykeD",
  "key11": "Va6Tf23hSxKsLfKjFQXpwH3JKL2GWAw2QYxkj456sy53ZHvsXJ5TW6Zs3DDMtKCQ5QymyCbz77AM1F7fdbfYWFe",
  "key12": "2YED7VcqK9vyTpTUvZWYKqKz7oDZfSa4xHAFaAdyMXSZXEpXK8aKXi2VPcw9a4XWZ8rYJ8n4axGAYJNzev7VAH9n",
  "key13": "5SSKYan5wx7THkYtM5jUdH8FsyiAeEKSpxcBWyWNHeCLnPcn86haaF7HrySY8svHhgdm8j3yJ68jMzcG1dmi5PTS",
  "key14": "4g322LWGbrtYqK7yi1vkJMKBJ4cETAdB45FUU9PfTrGjcybZyHuqG3zRwV857M5wRy6HEtzMSU1bjGNmkpbmLhbj",
  "key15": "3qpnpR2hQgmJjCn1x8Jf1L6KK7r8dVHKECs4EJEgLPnzkWWosNbunp9qiMJLXMgLaFhnWpiYtQfvddNDcdbPj9WE",
  "key16": "iEPwrrqucp2Dkf2smUcCvjQE2oWCnJcT3VkiGsLdParGUYnD5nkXq4gHeAzbNsPTdrHGe9SNMqi8SM1js1sQSnD",
  "key17": "5hDoL9jjnthReqoRpdfnxWDKW5JEYppXa8e7vvVvsPEv6MKzhVDPBwvUrCmgXv44MXtrJw2tYrKQ1AHk4QQa6YKt",
  "key18": "5ZxJ1s2SJvHLaKoHCd5q5iNTs7tjCeJoSc3rRQ8jxj4LPgxM2LXYShwVZPh3jSJ6j4AWMXrr3B4SaLX5FJbSc3u3",
  "key19": "4uNoZr3SFKjgudGWihA4Wdg8TPysQGzKsCdVQvFCiCw6WB8tNJJTmRwwhBzGoPfcmT3TokCYeG5GRDqNSM5yqzKS",
  "key20": "3K1MNSvpJFiDUGRaQpqLmaEGYcY8BXtdLMyaXZYu45a54UQ1zdoQ8PBKufZkwA8K1QkJA46gvjrXwB9GvvsS1QnH",
  "key21": "4aQ6dJrkFxGLb28GPXQBoE9nWntBB9E4Cok6ZKr56E4rFNcGs81KMB7QrkmT6omBz8jBVqoXCodpJjsxv7b5dTiZ",
  "key22": "29UQBM67YoXqEEJdVxtSEiWB8qACo2JwhpgjCYvRhjRe4HpaNLuzhk7bS3E5Tbc9V5CBs5o3L7TC4EvhvgbmykWA",
  "key23": "YV8k9iAf5DDr4eFhD9YtzKCf2xJV7zwDQQGqoqooAyjVUvjn7jEXa5xbCmwp9thVYtXXvZUwSUjyVZ2ShippFup",
  "key24": "4VrgXBkRWnHhH4yDwVxTUzKB31rRKMtq9knKAjAgRBSqY5CRD1XdqQD7av1mgZQyvoJatMZb1TYicVUPCErwCMKi",
  "key25": "4xLhKQsN3XbZwGPBinqPtbG3zy5GJYkNfum36AoYAdz3zM4RJZSmVcydddjF22uirpjZjQ1G4BX3yyHj2C4EeKFY",
  "key26": "Fww1X5gX2ASLDBvNyg8n1uGXHrySysij5ZitmhpE57bduhEFzSgUTq8AjW5stjz65sR28mKCHDhbXwqoJDxHTyd",
  "key27": "5Jf9BKPs2Ad48RgBG8Mc88Jykbkk1gmH8MrKrMwezegtRxVCUsWnQAyzY2SXbyorULdwJDt5hSk5C2Rn77fdJZGn",
  "key28": "2ui4ku6qLMvLRyBDZPgqupPDPYZzbLrX9cQJAG1rbB3etJhNbFX4PKuHr13bAj2MCtEHDcuuvqdimGM17Q5PRWPb",
  "key29": "4g1Jnu5nRNQYCy8mR2iFUYoqdyyxRYhv2gCQvXGra2HGNbWh1h6pDKyjHjH1Z7uBoTvZWeyJEpdBP1Upkt59qjpD",
  "key30": "35a85Vw3FimkfkYf6MTCT7uidEW3GaqGvgLAAjxbT3bPbg4YgLamYNcSSRNAWS3vD5CYkbLMJoqU2rhZASmypEdj",
  "key31": "4pn63RASGX63avWzwhkHFrqY1gPQZuGGtc1mGSTvhDdZC8zFBLjLpPCBTLmfZu6UtyXbTcDQZ5GfABfTXkQC2z4L",
  "key32": "3JRdhZeQiz1ZnWVU14deDPbdeqM1ECh9Nr8FETqpvfWU4C3u5YYYW5KkmRcSCzcQDkAqHAbh1dAR2ezW8GyWZ9Ye",
  "key33": "2Rp9cPgXMB8Q2N6EuAqq9b8GsfKkmAweVnY81LeAu8GAV5gXXhpptbZh46VrbhjmeKGsUq9LtJiARQRU5YX29P9s",
  "key34": "65QiciQT2vVGdpzGLriSaM5LmKHsRHRdabegmNmRYTyuNvw8J6sTXLy35xLoKwiVqB3BsdD4Xw2i8aoS3cNkQZQn",
  "key35": "3VXqSvmgqypVUPqjo2sncpNVz7c2nQG6YHXky97V6eDic8qfvPYB3Js37CAvanic12LWQWnnD3uNW34skWwg1wyR",
  "key36": "54QZUdCiBJbzKC8NrA814dpBxgmiJy8KjqjCX45n4fBDxxY3rCao8WfTX4qW5jZdSuHXKsHwcsfqMrBnb5d7zxyz",
  "key37": "3LN275XvtSH7HGGJSrcSppZAGwyHaCDqyokMJpqVTDYkUFjhNuZ35KkwuhjuGnD4Xg1cWopBfc4YVFwdDVhQYzAz",
  "key38": "18MDY1YxyoeejcZE2hRnEqcsy4m5TVEr5iqWwRUSYy3r5UMzYdSciVGusypNg6WSLBW4dY7DVNVmcdUWwJV3Zpb",
  "key39": "3attGL1W29XY97q8jF6d5qwdwkft9QcdLAuJj6cJZG48v93R8joQHHtTr9dXgp6WYazmhpfnZGz3TSXoZ25EcFRa"
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
