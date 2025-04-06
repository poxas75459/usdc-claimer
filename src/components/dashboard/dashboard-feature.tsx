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
    "5iEdW4QXpCnjdw8yEtbr7Jf3uJmbtBMB9shSP7bNkvP2Tfp3XuS3Ya9b6yf7dC3Nyi7KkApCaxjkYtK3ywwHRsLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a69DwYsZnqzDLXwH74pvDNPpVvipU3TvDsJN34g1FwKWwSvoqNysf1gd5KsrGQcje6qStLR8ZdKvCpwi2vhhgJV",
  "key1": "4dXbn69BeVKmXURHVxm8VRESen7qCd3KnE5htb9WSAzW9Zwidq1r2KzB6LzoN4fFMqjNfBxjCBNit68EYykvzNhQ",
  "key2": "2kKp2UoKcuvpa9bLYP4aAbfeVG5ToDqZ5WeJRaUzxCdTfvAhiT4tMVSEdvu6GD1Nm9R3jhgyZXeWoGWPbmoxXRG8",
  "key3": "66EhV1wBBJga55BcacM3qgSnApRrave1qMMEHYbMEMcEMNNb9fhvNTsp1MjkcDi2ZWBqYdg7S3RUAP65g77Rxkwh",
  "key4": "67RonD4kXA9C7ExNp2PiUy5QG85zSemx1uZXenm4B1TycuRcn5Q2s3WSTW8G2e93UGg4hdxmUZShNwkHK19Kw9uF",
  "key5": "67YmCzonUR1vCa2fmb73vyhEjp78XCfiBRcRAmid2sq7u2jMWkFays7N25atQEXyKE4QVaL2FLisMoTu8Nm8Ep1z",
  "key6": "zaNcVKPAswe2dr65i8HbSywREFgKAzb9d7tGhYirZJu9QxR2AbW1fnTWSk4VZM3xR5RpJCr8NZC6g4zxBFDgyvo",
  "key7": "3AJUomtu4aFrbMmjtmjReDPgwzgPptEoUCYNdzjzz675pS1tBQD4nCgSpRgz8XbatBJURhGtx22DD3UNuT7LrbqJ",
  "key8": "4yuWz89D7xRaSQXjS7TD3ui18CU2cxPir99JMaxeeAM2YUJNGW5dopc3xbriMaGuqvkcLcVnqhCF5Rf5z86c3M3C",
  "key9": "2wbesT29h9x5ZV9d7mp6Qy7dfpJ9W87uo859JaGBMSYW7j49WCmEGjVTn6HvPqs4fTDk5L7oPaBPTHAo3fUhicqM",
  "key10": "5oMxW8RaxymCr2BRqwBcHqM5tDWFarHNh13P64FUXfKWi6FfHsdWNyqjPE7xiNmXB2Xb3AUGEgqmEdufs4QdtCYY",
  "key11": "5KQzSuy7Rx1gF7a45mpdKzrYSL6vR3BguRAP86CzZ9N5atFB6dyx2DrsLUx6pLLgaoyVqPWhisv7pK4LjHujAC32",
  "key12": "3RvH9pnbb5vupg9pDf4V8C8hvxxULQLpwmPKe4rWCzuux3u1Ejw151zYp6neUuspsGYVYs7DD3YrGkWsWsBo85XK",
  "key13": "4sBjA4YoHoYr9dzsZyTh4eLThRx8xSRx7Up8EgrrMWhSsdJaY3i98yk9F8SZrFxt4o7GqpJjfjkfoezn5JBvZ5Q9",
  "key14": "5qxG6ZCtGXEK51TzmicMMW4TAb1fo4S5Ew434FNpVPqCSf28Cb8H15jeL6Es2z3BtHMETfZNndAmoZ6WFUhKYfyP",
  "key15": "45LXFiWKCFJoGe2scvZEuj1yKTbR1vrXRhWvKbnnAoYNfRJFJ7nzJj9aDg3Bv6ZQYL8amjuvSY9UepqsvUoS6wwB",
  "key16": "2fT8zW3wxupxHjE3LDrqxeaoTiz8hnpTPouqaSVnyWkDq9Tx3fAA9PddZuNpP1xPp64tWQ21DmmnZLvicQT2q6XQ",
  "key17": "2U6FVoge9tmds8hAMKDXzqQsLMbRsidMnvbU45my4LpbXtLrCtNqU61dHsXPzzX4gzakNDT91abcQ3h1Z7cC3hMK",
  "key18": "GMF8KNrrCueb8V4P7o8wWrT6jGWziS85UZ5t5wxHJwd7JHFM2396Nv2YBGiBDzmL6V6TRPUpzPhmTiERoPmfkMU",
  "key19": "XNWGodsLtYhg7fkTA4mhvWSG8RjqEGXuSER9TqSh87gsgfnYT6iQRxQhEQrJrk3PJTq88VfWpsiP1WQZH8eZgBD",
  "key20": "2B6uzBefjp5UdQPGzbBKKUTdHat9fQDF7BYp1b7vbgwuQLjv4bBek7j2kp1XKLyrVvVbcKLMnJxL57zaCop6HnGg",
  "key21": "3nYZKhTYHJqkNZWeoGXfuhV4rxai8M7K6kPk9uXwiQwBnEee74igfxTdPLfT5sC3hNMbjYqEyNSibCmp6QygdnxZ",
  "key22": "2Ux7Uhb3jJqtnpQ8a7GSaKBMYhaRcN9nL8EgkFhppwddqQ5A4nMN96ih12TXy35Mm2J2VzXG5JWagJrLSF19wnKJ",
  "key23": "5174zDLjz4GZGtJaHQuTb2TpePc4yRyhKM4fcTN4JjiAYcbGM6tA8FkJt4uoNdCdLVcugZHCiiizsCSN9BogyPnP",
  "key24": "59nsMqwzCvgQw9ktkSekuvudBG6jz6CUQsWv6v9Nu7qYVBjLYXMVn298nbzc8EeaejStizE8akeSyn4hE6TrSYob",
  "key25": "5Csj5AQRMoy5fxB5ymtafR1mVKA7xNmucYZ9BgXWw6haN2tp3sFYhHFfG8yCPevL3mXwZfRUuE7jAkBUGzhqTzKd",
  "key26": "4rEcKXYk792GRixR2cS9Pi9hsTRttG1BYF41jpbPpz7TfPrTPM6dk5ZktUwDJWv3YcMNFLPgvmi18CsKFoY2Z87k",
  "key27": "491yEaJtN4VnBW9noxcdXb6LZCw9BpTncN5FbDwEbxzoaDyZsQGbALcVqNcHj3aJm1ZQctErTqwuUXbKcgDVH3d5",
  "key28": "48WAirtgxXiWwmCzjaZ9KBEHnhy3aGchzAn9ms6tD2g8EGahmQw2yNgJGpTiFdPRzM2Joja6jq7ezJnwvJenwXMF",
  "key29": "JJkrzPtkN6W8vryZWkkEQfw56sQdAJufT1bEEJq9uu8K1xHT22BCnx7q8UsKt6CY5HjwjfEygKhNmKmsDpLMkzs",
  "key30": "2AWaK37BzJWv1A4LfVFA5YZpJgfubypAg9bFTpmHCgfY834i7imuvLCpVJo9XmUUZhVktnrUFUv4NaD8eyDH91TM",
  "key31": "fzq2VR7GkduVMW7EBTRcHFGm14Xy8weFypqAub2emhbP3wDxyLLcFtmuGJpLT2aR3NNEZ3jMAbLta863GvzTaUr",
  "key32": "2vVo7sihvh4W6q2R2GZcZ8H39PFVLwZsZspCrmgpCbJbUtkRURBpSf7EyL27n94A89UWiSB8vPDpDr5qWkspRyNz",
  "key33": "2b3obhqJ8pu6FMqLeAoQUwSvmWyvcCydNAmcmN7vN9fCYeSndwaNg33h3L89pfZfJvwEsfCczdosv3Tt8iKTAmXH",
  "key34": "3iwamfARTKyK3XgcFbRYebykfM37VVmsQDEvqsMHtKJgihXhJZJQw8BPXw9mzFowgaE1hgNhEcA1FRVLtmsXbNfj",
  "key35": "3RHRcLBHnqJujhcMbwqYZCtmEyDRaijCAt9eHkpkzKw8c6xT1J28JLJaKkJdUYuj2Tkwb8zDNzSH7z75Bn6hSNnU",
  "key36": "3MYtkTKhudTPj8sKrT2PPBgdakUYaoK6rE5wMSe5Jky9ob9k5NwUdvH9z7LknaaGBXHx4x87Qtg46VqpKRxwVero",
  "key37": "2n9fFHRJAEPH3JtBsu94bfuUmYKD95mrnmG9eWUfiSDTXpPPa8DmrHiZ9Mmbm3KNPfBKaUZ86ExDBtPMuqh2N7Ta",
  "key38": "5T8vAeLQesQDfYBW7LMdCzdCNHoNg7UaYJhygPx4Wukp6sp9Cg8KgtesKF941CHa8nqkDEFfvJR2o23dFf7pWKLD",
  "key39": "FbjjgurQZm7TfMYTaMBMhizonPWGhgE2dTWgvXdqMBMe2eEEDBAZwd5An4Z7yeEp3pafNocTLohY1LKGfizhcwE",
  "key40": "4MgiDwxevLPaKb6e1v1wnKzhbSafBiSVgFsvYjeaZ7KcF8Vqs34peSwwuE2hv9TNQvHXA8gh8a3oZUwZM9u6wFYf",
  "key41": "5jAdy6epCHzaYtrKmbwGhzcg9YWJ2UhgDXLRd1X6LmFZZXf2Rqiyv7szPibmsv6diP8y7R4hhnSiYRd2Cb8w2ejj",
  "key42": "2zAheKk8EKApg5JMxRGMYrUvgd2Xm3YwMaasnfkHcBKokKzWu5uze62nxB9Na3aPv6HXah4WBnTk2DJSKZaWVZ5f",
  "key43": "rHXTSo6xRWfduNJcRTchp7eujRoYMV64xnh9UDNiz1536CcXdpQDHNefFG57fAjiNtR5dZg6BfxJSeZ3sy1pbvu",
  "key44": "4XQsiiAGbnnf5CofnVgRQNvr4rbcpYLAL4FVyWdyxdQqVHTsznjX6ATeMVW6munhvmSnBELJYftnG3xQYdpcmYq8",
  "key45": "iJRA3BASnQgrbxor17uLW2WpU6xSt7Qa7RxV2dQ2cdCtjoPXTpGg9mgAp7UnECtiLAfGqX4njHXZKkXATobd836",
  "key46": "63kMMtmRGamf74YuhMVN9DfhYqLqYJa4oeoEyv5fRvTFynPuNibkxFBc8g1HUknDbx6PeFwuobMfdN3VNot8pfcF"
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
