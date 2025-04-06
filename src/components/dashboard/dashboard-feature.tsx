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
    "4uf52ZnN6fS6MJx8pV8hjg7C8dce5GBHvqxDZgRdsDyqf58Vae2UoUoTdMSNq6nDyM5RDYnAJ1bDFuhXUDbJvAKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KKCUmtGFJDYwuDZC3q2byEeExtem8DGBgmFNVjHbzAWLQUvfB6vYtee1AiYDqsRickADWu6da5uR9hcgjxVaMsB",
  "key1": "23WQMnwVnKGjUCxZy4n31eaiWj7zcjifs9crvXtUGv8EWLLGhm6w6vckEeuG4KKZJMHyRbNcjK2tU1nQDK18NT3P",
  "key2": "66TYEEMFTpCaRdMopotjQgf3ERmmxV56XhsvL3qztnKxhQnensUBzNWtCTW4S8gq589dn69FLwTES6idRpoBwhTK",
  "key3": "Xiig9nDue4LYRx1L4uHkiEiechRGmqp12Wir2kJvBXJgExtwbpXR1vt4PqEuaS4VLVfRMzEwhR1fhX99pXLGTUz",
  "key4": "4ywdoXvWsFucbWy82cqg6Jd6VTJPtErtzeQs83DQiWHLS2RFbkHokayVkmLEXa3kjetsKajiaa31u6VU2x7qx4EA",
  "key5": "4jj8dApJmKXWTvoMdNah9mj1644CJyJpcQvNShZJ11rsqKxfYWm9yRoB6vCFEHy3XHd5pDExUiKFWw4orRRZtuS2",
  "key6": "4xf6AwCaQuWK2d4wijtHTrXMAxJ5hQrQymqPy75Fc3NdVTSzsJEQNGfbnNHYo73YGFrT87d8LU4L6Upf2GdGL21o",
  "key7": "3R6FjEPAJQqDSLfZjbmAZS46JLvJdAXYAua1qh4EYvqTf7HAxW9sQNKEtios4za6d8CQrkwW99EYbUVLhmStkkyN",
  "key8": "4izgfZ3puh9Qrg1wsLDRKBHaLjTkyeBnvA4eRjiAdsFxrYauBwsybHg6nagLdBt6zikgsoEjV84YTyA4G3odHAbL",
  "key9": "4DcKSmgEMp2BAPJmspHJmgEN5Nh6X4rMdjruJN4bmvTxmMmggD3PZSaqRFUjvc3FNfD9UCyGMEqU4ZkpSEsQo8ts",
  "key10": "4auBBf9gUWv6v2oTrVuMVHm78U27aq2Hr9DgyEMtvgx4Zpq9fLNvFZthU3bc68r1bBQBP3nHMHexgbgbRrN8TA1x",
  "key11": "4PxFtPcHLdekbRu5ZZE2paifzm68TaF5MEqQRwGhKLPDenaLGMpayKYyhPxpYmF1kpBmdkg5UrofXQftkXMGHzRJ",
  "key12": "34E3NmpgXqqc3aCF8aE3cwZGsoC6GtWQUkehXMGwsGzggVmhCgjBEtdManuoYiLL5WLpG8ayBxmCkjUfU9psKozm",
  "key13": "5dLZDWW5x9uCHZY2ctbQ79Stc3xDHrqKGDGH1SER9mVVnNvrwhPjp6RMv7LeEfZRs47QS3zroS1bBMHgfLibKRc3",
  "key14": "46dXmHz8v74bktj3sxxkBY5dmoG7na5maRirRzwyGUQoFnxMxeYkfrMWi7UJJQxWtFpp3x7bH5qivE1ueipYt7Ky",
  "key15": "5sbe1EWAddN2tK8nnPjiX8Kxto6qMZ4RCotSBnBKQDewwAt7AzFLjmuffkEFKPQ2So6pcKyrX9abXRP628oS55ta",
  "key16": "35t47xVKPmYGWLJxn6B7xzEZKRBvAkATbBRrksNYZoWoHDvxiWZqmCVCPNwzKzDFkD6iKSCL6BScxtCrwA8gjbpa",
  "key17": "WE81jDUJBAKJMYyk41wGftyoAQi9SUJiMYmvFoByHMxUH9ZEkAVmegv2ytHSBmNcmEJ37dRVrfE7Xs572xpPCHm",
  "key18": "3szbzxtBHZR6wDqfcTS3DS7zmiArRauNXUMSF4YXn6a12rMjkUZBasMRJUidVGH3wNSbCmmATY9LEDVrDtnYo5hv",
  "key19": "4E7L5KZPM5fdM1V3RyjEP3kX3omtcez29uVHMWPzUaKDW6SYmuvnc37ggGxoqrsnQT6g38LbXKZY4kweYMGMUvky",
  "key20": "4oY7w5YZNxweSRnJuVsshgHMspAmFtdHn2NgpH46rtznTmevmKdCdPcjPa8k4raGQiw6M9XtEu4fxfuyG73ikb5E",
  "key21": "4L3e4TWHyfisPy3S2LuUQyCHsorPL9FsobsucxKgtGgAbnsVft8uFUQ8WZmQgiKNLmaiCujRh4MUxd8j2YsX4DG9",
  "key22": "Zu9jevwqc8qVXAAwBwsy66wgeRUCudHxf11L5upX3i4E8FgrcbLFsoyy79u3JsHKAjJx3Mt1wVAcMYV5ZAAYuJn",
  "key23": "3Zn2aPpMGTP9f1FMzYMiLYMmemrhyaFuVBsYdWnwNyqMQVutjUpABctMuV3SuQeBE59vwbm7PSgem8RswtiEqbds",
  "key24": "5vJQZv61UnUsYhXiPQLuJXWNcDkBADFzArA1CwxFQmNP4AdDxkitNTMynvNJaqHSSNJpoG87a8DLUpxRaa4SxhBV",
  "key25": "5tfzi6qExyfUW95wJPzG9HcfXka3eD1GvFAdFPHcHtvsbRAgLcf9k6sJJRYSEVkru1TzSeC3s3AwqzW1djy27nbH",
  "key26": "MFKmaWk4eeChdgG2zTFkvRwHoDEhc5ALYmjnC3Z667AB7bK5431ryW52mEWrZphEqe9u4UEMHq71gD5ujbnPKyk",
  "key27": "62xqpZp3ansgiwJcdvYkYz35S9M8oKuzy98wAcwNyg9BwNw1k5jWnfG38kVCeo5FXzvdP5WsPGJ9chdJ4fxh5Ji3",
  "key28": "ezjbkoKk8w128tgB1WhVYRWeo6EC5xavmwBSurE5o5LtB1ZLrZKjGw2Yp5DNWHrXhGzYbfGZCy9DThSpybLfiNz",
  "key29": "4CfjDMqUzgnT7NcrhpWxiKQexDJjt6Nhr9kWzarYQSoapJUibsaRibHx5UaDAEMm2356cQAfWZ1jV1j6sfcVxJ5k",
  "key30": "fekzSM9oZFp36sQJhcWEsaCNzckdfMSn15DB5jWZYEikzGsdvfib5ZcT3jSRx24FieQArXnRUAmyp9Aae7nb8Fc",
  "key31": "2nFyPdPWuktP3jq391UH3mAXm6iX6haSdBzdCheVnM8dDAhoc4cC25765aoNxe3VZeZL6TZc8Cy8HNWVgjBNa539",
  "key32": "5iaaanLSV77MYsSF8y9NCDedSKnLSXDqRNfyMrxSfPcJ1KvU2AnmV49VLwuSQN9L2gqow43psbDq9dBq4XQABznu",
  "key33": "5kNFfEoLRQ8Ubr2mwA4biuyMgCneGnRQm1jcC15FRbc94CD1a5r9DoW9WgCUYJDozBoJyWDa6HtwW5buxCxdARxd",
  "key34": "2EvwR6YLUWfZ3A4XLoQkrTwKXp8LjZNw8UAZXYC3E7Zmjt6gBokvSUfMpZHd1hsa3eP4sSVdj26748Hhw7pk6snm",
  "key35": "C6MApX7ENBgsRrYTmsdvNBMBimTuQdcQyteehNaZAJ1nBNnUVhYUw53vdy1AXXjQtj7QsQTPa3X18jVkLQc27T8",
  "key36": "396Uux3wVKZm6dy7ChfHzgiiZmKpXxHQBbcrixFNhSQN3tsK9vNXELPpkytkKEdHFFa6xca6dKuLHR3tJyckE6iy",
  "key37": "2vHRegeAGVybQmJGGfwtJ8eVSYGgxpN9uyLB8jZ9mMUUvZnfNNcCM3Fo2QdGdZDcccMZtwfUN2SLG8G5bR82dKuN",
  "key38": "2LQKtJQvaCfRns9ygY1XZSSYaxHS3iJ6oRxrL9rHCzoBaU8ywgTbqbcfbRnh6fxRDHJLyL3GNZMTa82Hu6jGov5F",
  "key39": "UNKB2jbK27ubXdDVrwrfPPAem1FFPR9PHazpfNn5YUJeNGnvp5mip17THjtWaMoPLCH1RkQyL24t5X965gL1U1M",
  "key40": "5hTgTyzpTUWzviDevexdkgGLSDQJmKbhhTsk1Ao3HE4hxsYr1HAEp2epPMBVEoazpqYDovq1bHtDUn9kv6aSJxtu"
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
