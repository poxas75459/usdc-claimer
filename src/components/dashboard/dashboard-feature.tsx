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
    "5NEUU11MYbcig47nWbQSnmzEAWxVnk8ay8gXJT3EHr4jNVbAJMtPbTCY8nrRakjdS15CSJ2cBrgqDdZqhFAkA8qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6KgcSEmMa3JiwWPJPqpzJ7DwCEvp2wXMfcGBxQrWkAmVFVgUBE2DrB1DoXKS2CxpLuAsqxvnVczXeJU584QgE3",
  "key1": "2b2gHhpUfkhne6TUmWp2VmKNsBZgu31yfaiVnmLqyC41JgtsaTaMzoWgeUwKdkrJjTvYfFAaSHTi6zW6LDiWMXJi",
  "key2": "4jZbDjsndotvvLUGYkXvwuBkXGoie9rruotCQLfpgkgrkwksCLUBTX8Cb9YNCiU6unmrcA5syQvRVQHBzfCP9kTK",
  "key3": "5JWqnUzdFxqACvgNzsGSKbuQkN3jN5U9Ajkrg42P7y1BA2BjWwALjitYCzi9pWCf9tTEBifiVPheDEscPVoXyqtQ",
  "key4": "64YzGMtp1PUyEgu71s3796fU7dj4E49ngaTN5c68YEHQBYxxczeuLdqiZ6E49xg7qRX24KsbfHzmrxf6J9FXaKtL",
  "key5": "45wbPZNB3PhXs8bDMdTEffdoJYB9BZmH1AsGhiXpiHEksppciPkquYPW4K9vENV3VeErG8ukfjpQDu5ZWoFXN9Pz",
  "key6": "5RAFvPM3mGVA2nNiWrWpWG2v7iDhitnaTyj1UXM2T46KMuD4PsimztsdK6mbV92spXYWGB9u5ZSAYsDZwS8ApQwG",
  "key7": "4wFYHfdpNjPbZAZEow37DMZGSrezgByhe3ArvoF4v4NRWnvWH32m9ioURjL1jXjhbU71UrPAnxw9DFSAXkZb6UwF",
  "key8": "2v32VVSABqi4EGkXyUfoh25LB68AwAK7DpY3CKKNtUYHR1N9wUrZbxMQJmsS2z5PYiSci54kQMhFDHLx2Xr6B5Vo",
  "key9": "2PBGGV5nacPwNrMV9MMeCkqkTiuWL9sbcctQQ48ehfhxaTb2eBJ2TfNkkiWWZuB9pysr1UBwt4odt4F3wHgoMHuS",
  "key10": "3bWf2jdTn69ZADTVnTQMCn7Lnv6gWmbKgpf8RFBLKEkf3i68u2iHWdwNiX98EVfv6sfAuGSfJmn1eLJMEUfWsS3w",
  "key11": "4KEyPLzW66RkHF8FPXrYGqkejcMp3MPiDoGWturychmtjZyu24XyUYQnpwQwAuLrwog7ffQd14wuommr2RKL6HCq",
  "key12": "3FCHbqhRXXdc92rs5VTr83x6Xt44DLJso9aZB3QYajHoLAsCJMuwhikjvBkpFMEASTmcMZB4JWEupB87hoc73Kea",
  "key13": "avfUcoqeHMi3qZt4U9j4CVUj9ZWDxEeMzYJf5frcA9WpwMscYy35GhQ8ebCjens8LwDmxJDAJe77iADvdotHhuF",
  "key14": "5A5341pSMYEmXqPrCjRTi7awmVxi1fXk4YRjiJYvjP4EEnQdxgBY6rcdZG6XDLmcpxY3VAGHRwpD2B3x1KGMcB2u",
  "key15": "Ku9kB9BzXQ93xSVNutxQ84nMdXFTTTwwfq7v6gJDsLwq6uxD4mFBt9tzEHbjyCEKSd9micwNPpB8BFaxMGU6woz",
  "key16": "2QHgjqEgtgCZzgiAtFa7kEjvXJQQNVnFc3GHvJBPX4bZ1rDFSempchPa34PyKGnZ6o2ttr3kyFQ1zWtkGhmz6td5",
  "key17": "3LYa5SfJjomXu1NpHj9WC8hjxBnNZtMmWArbpVgFxtvJbLjDQFo6QZDPotfLksduLuGa2GX921xvSkBjbsGPeDJ8",
  "key18": "2vURCXd3DkPwC4N8G5RAByX13LDpRHExQhHmE9CqMDcHNBUSKPetY6MnKdryyCEQbWUS7aqTGjGb65UVUWDHusab",
  "key19": "3LfZ6Rxap4jKRhwPschkGgFRxQJuCXYViEHww1k2LQwovoshf2Cfr7mG4SJXpiztQocas3UnuCqjg1ou3nhbWSuP",
  "key20": "7KrYYUHT7by7GMAG8aEyWomQVUH16mCi7D5d8qKMxKrVorcqNUX48KKnYpJqaz1FFsisnTi5kVKUVPGY5HTzhBG",
  "key21": "2UxRfs5JnjEwwU8Azt3AmT3xuxZ922abssiP7HE4xfsLUwVsXeyJ4YeTPSGFyF8QZSGWnGyyQyANg5z5izrBNzqY",
  "key22": "5hu15icdzFktmmFzMa6c3EeTqLfhKXRN5p3ZKKrRCBfiWMUHpVx7DRP4UT9L4gwYTT1p4YcHDv3c6EVkt9croN3i",
  "key23": "5iZo4ohbwxoHTeLYUxJP7ubdWY2KrvyGoeZf4xu1L9rxkEMudjVNd5Uew6n4qzVYw4kaSeAVAsvf339n4VPWv8gu",
  "key24": "DoRLFGmBqks53EHqU8L9y6a2h3gbYLifjxari833Se1uMQMZxXhWJozXPSnngQvY6VEj4R1cTMLLhNQbTbmr2e4",
  "key25": "3WugAeqJnVNGQdfM64eY3mkdrb8EJY13vKoD5Mx6TW3GzsJuBcwSvrEzSjjRJPRHDJqJnJ8iwZXmxzMcT78KXCxJ",
  "key26": "pCag679PvfVAJ1f9wbo21Zs1CxaT3iB9V2Xg5zRZZCauicsifrS1SszmvvqCmVkFkurFEfT92MZtnr5e7cZCqBc",
  "key27": "5LEebRK3WUd1qYk9mEcpf5rkThqd4gD3bEnurqGANPjKoiEjegqEX4vRvxsK7A46JMckfJfxKKWXE7bBbhjNQYPr",
  "key28": "2iRDcteQ9gCWVKdsFeuvWZwYj76qrhRwzhe6nUsCVwyrmn6gjjbMModv4DiThjZ3qQorinS39AW3LsP244at23tY",
  "key29": "2tETVuXdkjmvXgLxd1V4wpAJCBjKUyiKbaTZ2zeCjUSH792pfoUjUoNL7pV9PJebLFcJRLbk5XaneJv5KpeHKU6r",
  "key30": "4pdHXd9B9wf4ZCXBTWtcrffgv1pVajwxkYSTZnvGwyEyqhwU6WzmUFDYCHyhX9XpwisEXsENkHtAgXn2STFhqpv6",
  "key31": "3fU3hxtUrdMwXHPr43w3hmynXn7i1Gn2STv3p31jMeTy2xP1wGRn9Z9Cika3EvsjTEqvMBcB8GS8i3GcdwmrPvok",
  "key32": "27fyaSz5KScA5Dd9i64tQYxcnFgJLLzbcGttstpq4BvuiwTHLeK3koyx6p1Vfri3tZYvU6PYELkE9qsCqMpe5Pye",
  "key33": "4dBMx9mZoBy4mv5vopVjLkcM62LhzrNSGmSLm1VCbTHmxpL6MmmwC6tnHhm7UXfth14XbAWp6hsZpt3U4d6NK254",
  "key34": "4MBURVDs1smanuPb1LQa292XQueBYANUFzwp4mcrq1V2vWMcTLvjTmCeVgTF2J1vXm6deQ84JbHnz389q68fXpyQ",
  "key35": "9v7Brzar3iVHBUquThN8FQZciiGvTEb7PdgWA74wc1uCPWuXYVqyZvLgWuNaT39zFBgrzfyfENEENKSXh1quWki",
  "key36": "xTs1eqMr2FMZX9rWkWSZF6rLogZLMzAgEMEG8jHbAkRccuCtuM3av6G1evBtoDYoSWMNSkxZyehiCdE9mrR2E8h",
  "key37": "3Ywk521sTxDmWyHSSSFQchVjqHPduWbw879pm1YbzkJUnKXWBx6sqBGuo1qvdXUwmzfyNGrqaxiyzsSjKcEAk7HQ",
  "key38": "hwz7wRTZuRZv5PsLWb5rng1jVs7ai9oxbz4m5QpaCFMwkx9AxiWfvTxc7v3P1dSRf3bmQ1TgNFbvGw4woHfiato",
  "key39": "3Zjg2dpUdfR5XyJBE2PxrtrDhqDeHcZt2qXuGpj2bN31xyLGiawnjfxY4Jd1SaYtt9Ke2Yv2F3nhu7gQJcfZ5kWq",
  "key40": "3rRKkwjTiA5Dzbquny6ACz2McnEipgozcYM8pgVKtfxrpRNmqK5sXXyNFqAXjurXbagziaZM5e7B5XNLk1tztAWy",
  "key41": "3mB273frMKEm4qkWYugayR1TtkGQtG2uLjxiRz7aarvryp5c7f2NTgw9YjTrTsxusi9TqcHF6SYYGdhpqBftx4sD",
  "key42": "pLxdB8amcTZ9Hbtf7RpMHt8usxNYVcJVKivpmGg6RgMRxRUqQiPwGPcdcNVpaNjVWj4UbnR9G6kfJuUPf3Q26eA",
  "key43": "2HBYbSVVXxRuxRVoQnbDVxFXKcME3gHa6CPiWLj5jhK6gE2MgfRT5Uiauuce1vkogayRRQikHLNTH8zoo3Y447xR"
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
