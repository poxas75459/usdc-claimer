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
    "ZyPUxNWS32UGqEyRVdiqWAaQ3NjqfD21bpNWVVLfof1TBx9eB64oFENadYXBDpp6AP9MCwpSdkcFEqvBKgQXgnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uSc95DdWjkYzTFfSeHNd5koEabHo8C2YnGtE1gxvzXhe981MeXSABHqLzPT64nj4G6GprQfNALifbHyGn91jemC",
  "key1": "9frUXTdp5x8vNRaFngZkDuHwFFj2Jz7EkmuHJHUYFhEyAMz6cTwsC1uU5WPuUJnFhhZa6wuuBtvhnEv99qzVhkr",
  "key2": "3W1vRuUWZVv2dzrf873Pd3yXTycAhVCySDScPnenAXuZSq5nLKQA384N2tkMmk1AYDL2mvGtm9qs3kewswEHzptG",
  "key3": "UaufswFPrWFykXxSnwE6AYoCFxGuQYdmqHa6Gc2VgcMwbGPMyy4oN9r95xGzawzRJ67gXwY9Nt3MbmpaJARyp9s",
  "key4": "pMCwop8xKtX9sbsw77e5Jj3X1Vxa8YGTcgS15nB3Q2ManXWUafasE9buzKf67WwkPEd5WM4DcddN5nCbyz3N1QX",
  "key5": "5BGM1A1n2SKBSRGa1tgJd1tPVg9A2fwpV1zKPGpE2LZG5kAELrZbWowzcXQiSLtfEs4nv2CwQHLK8Quxt1yDnS8X",
  "key6": "Ezyn7nhsnNzRKnG7PC7NCkbXLvoyEyxDm7dRtP42sPoABYs8DEwHY3Pku79tKPDMWbLY2Wz3JF38HXJSZmzNd5M",
  "key7": "243vrkksrmb1ohDUdWzMFVFP7Y3HkiNFtPXrEguDRogRv8bMXXJa98Ry7EEq9VFEVwg4FxiNTc5UTDRQqqqAd1ER",
  "key8": "3gSFxqAh4tdLaK3ykDbD4rSFoe1DPDUSwfR74jM68tie5FQBip28XHWUxGAwCaj78qTg74i2NP46DRekCq5pbi8E",
  "key9": "3hNYKgrkQAwaMSWSn4TY5CrH7H5SAFsvLWvYyNfUSbWfvioTNBK9urj2NFPANxqsen6hEhD5BqSnCH7PuUBtMdfZ",
  "key10": "3FgkwWLVjyuQBzW6fu7JzhSEehC2T5WoaiCx8udA4DxFuFhmviqApaEd5DnNLbtQuo6TRerrTW8GurkTEdHUWnnn",
  "key11": "2wwHoVDonZLCix8g7mcixZmgsUuixW9gRL9KRVHp2HEggXfnyWa62mixFnuNszUaZVPMo6BUP6JpAaCtmJXAQBBs",
  "key12": "32JzZdATS1ZKm4XxDQKyPELs5pbDEYGQge3apT9AMBsUZZVtjdwcybHHrKCDkFvyWymeJTY4JqceiVkYxEZJzMXD",
  "key13": "4gsd1ss4y1SEv2mJrm9HH7Lz9hg43zGGj7gVSobabrYUSZKgy54k24czTnv58Bd5gHKJZscMpXW2ZtCbYKwFhAfb",
  "key14": "4ucAEW97sLA97XowbpGRDB5VU6xYUcmajcp8L8E1v5PZ47uLqxecrDUW94wnTUX4icwR8PqbV7cnSZ4hZSYbyz8M",
  "key15": "4wG6tfjPjUZWNVu4BphXnqSGbTtnpKCkPCCBm17ddKySURgidpvM18i71dz45GHboNnALJna7KKwfF4ciEoERejQ",
  "key16": "4cbgWVQ1irngEokRbK1xdKX1HiSsWqqSqYwMRwJw4HpX8SKNUDk6xL4r6ex4xNrnrf5wvywv5sTU9pQ13PmhjHkP",
  "key17": "5ywASr4yyumTAdYVBLUFypSiU391qpmZSRxrgbp1K8VrnBn68vm3umohFkn2bGGypQRkCVxzW3YPRiHZarm8ZMsh",
  "key18": "j9fmofZng6gDyW6M2bKFHAXHxGf5sCk3kEYQWhnkG6tPoGoeU86mgdmz5ockxqFm165efNDX3Mr1MjvvfUF3qu4",
  "key19": "67phr3DifAiy72TGmjRomoUwVQ6jN3bVHXEeQTksHjSrwDPUNPSbGmvA3iknQH2Mrw35ZjsdeQfD4bJ6SashvwCd",
  "key20": "2wTgzt7vpTgUUW4a6rH1rvPeyb3oVspNYLYLN2TFMbTtkcd6jbuJ6P5rg8cvtiWhmPmMh8C3U12YGWScjty8ro9p",
  "key21": "5papnm1mnUhjtPYJ1cWhEX74XkAP1uQPugu11yQDLi1FnKP1eL1Bu9LJru7JvpZDr5m2c9J95FSvpDPBdV7PdmvT",
  "key22": "4aY4Lt6EujBJqDEjHDuzZXmaaCdnK7xmFnRW522HS7FQdY3NwxaD2JQm9Pgnw6H75vo1S6LysEgkey1grjundqB7",
  "key23": "2YwNVfbKPszc6VWrCS5DnZWvWfpAbTYJepZbSEjC1YdGdDztiupvSYgwtjwAo8epM9rbujGEKSqtqZPgxCaQx8Zi",
  "key24": "3wXvinDPxadQJX9MdhWZGbeanXPJMTqgx1Sb3PpXZuAEVVi2btWUc17Zdh5SSeLothZ4Cjtotb5E6ZS2zspNNbKz",
  "key25": "5EJRzT6fLeYMXt4nCDkJssuKZNsgvuLheaNzJsKuGvTLeLoEWfkH4npemaU3XpRryRWeBHFpBQYjhzcRMK9Y6KJb",
  "key26": "62hHY2rpovSUs9toNsjS8FGYQ7ASVXnZ2S4u8yY3ezbNe7ESkxRTHHhH192o9SeMsfxs5VZWySKE8UuRTs7U7sNx",
  "key27": "4Y6MwmozMzqNtzjgMZWQGpsp11Wn4YUkfmoTHYBes2bpSaFXMjT4mzP6xFNZYfgtqd36L32xw4Xhvd8ZD7J2RSHN",
  "key28": "3QA8TD6wA6Qbt8Hx2b76VP8uQPAWkNvuL4S5rbatkQsyVKGhi5yEQmbpWKF8cs6GSvujuSrTdMqcXunhyWeUabmo",
  "key29": "4No1Jf2UomH1rf8mGEaBNCYqJL7RmNMW4otxe9v9GwFdpswx69nXexRWCCuv6zJY5L9x6CG6XfQVLg84sVzJ1ta8",
  "key30": "bvQAp483ePX4nkg8gQ8N9UXjqcF5cy2pT83ksMYFybAv6QMH8gxxxD6Tbig1DP6T7osS7hoAgCy6GqkfqWax4JJ",
  "key31": "4urTzLHk41fRvE51EzCeXqXmGHsmUVGNYFeByqLVAzWArB7SLhLgEc3J5AYLQzoZ88rvFSxnd2FRMwMJ5BkY7Mfe",
  "key32": "4fHnn4wNiLSGfC4C1bNdvE5kRvfioGiZvaG6hS8UNVqkR4Eoar6XG8wS4tCtpK5ie6bMBEBujNxYoPYKYwgkAJ8W",
  "key33": "5D8qFAjouZBUQCPKQxVuBdioPdm4pbE48knkVt765YK3aPRYoEqnBCS7tvKF5UYSrutq3oNp6CxqL7EejMyPpZ8e",
  "key34": "43MRwtZR9DuNN6P6YGAsBjD45JfF5Fnoyw6NxaXpeVcrjqUUkHAh4pDZKX4L41pxNowN1c294E5YhNFgALqwSBTS",
  "key35": "4eb7LX3QpW1VgEioEBRYuWhLaUd2UEwAtgNVwB2zq8pbiw5XbAgQLgqYk2N83ssHYYScyeXrW9QErqrfh195CJ5r",
  "key36": "3C7bFLjXqz49bnNoa6sBW7B7yDHJS9LuCWyHxm4un9i7MnScn5MroYPRZb6NJ6LfL9WjByGhdGYhuXGZEFKmiHe5",
  "key37": "4b6vjFSRvVjuS1X6FxZgLek7653YspgG5UPwHMxCZnWVtq8fTZ3yHgrqvyUs8Es6LS9SDGwL5d6Q7zKgQkN3HBij",
  "key38": "3K3J9y6gbspdWiSgiHY5gLfRWvPh2Ab69edby4vD6M9z2HymUh4KZn7bZMr2LsrS1N5dJHMCLjwbcycDTdXky8CH",
  "key39": "n69ngQqgGxTBPLJfrsbeRrUvjB2DKF6U4wK6KPrtmbUdCW8tqET3A9ZrfRHSuzsAXP8URgueBEdoaxqdVcS3JCv",
  "key40": "4t5fAhMpptVmNjAJgbrgEAPgcFWR4VVPeZinoqw4KrgEdHsezjo8TvWSDmrWzicem4wqMqYFhQp1QZjssLC8VzSH",
  "key41": "67oCZA28DyLghsDZQbFVNuMaZe4RQTPcyUTMjLjU3yBL7BqmwRzdZjjpZoaSaCxxwAipoBZ6mTPW69r4r5ehMwB6",
  "key42": "5Zq9kmYh5Gnt4D1YStYEjPYESHRQvW4hjzAyZrFFuUZ7wRuzf9QUaTERhZtzfToJQjGHP99bB2M6UdXwajt9quwz",
  "key43": "KrjbBAqC6pDGJ56JVw5zf96ute2tHWSrpjDbbYCtB237uw7vhSFyFNJYgpa59cXGuXZKXFi8SCWLMq9EoRP311a"
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
