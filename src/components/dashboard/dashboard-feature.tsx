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
    "63AxUYxDXvCDrTayUhNHvoXw7391EmyVPs2ccWjfXqF9nhUycZPdVEbt9XXDaMUXndedgH8XY8QtuU9mPzkqBYgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KhasBpiGHy8eJ1K4zBTnRWgTpXDresS7eZumc9iAeFe3LovNZ8cUUdWCM7W3TeJGm3Hj3tZn64mt99CZtWPPXBW",
  "key1": "xovLjdZ6fPjVuebJF6E2MZtSJfWxV31hGgfCUj8SFmzx4MKvTNEictWjQb6VNh2TvQGopCSznj2AemckXounyno",
  "key2": "xExajepxpeHJy4rNCxfphEB5vA6ZEtWnoPayCbXkSo3VS2sWMLoimu2mAUwj9awxNVYkV2aKuW8qiqpcfgPpZ9M",
  "key3": "2xLCcG3huMraec3US2h1XeXgKMnt7MdmpoJc2tZJUEMFdMia3QrejR5BNyTKM1pW36iiE8iFtKgmXwocLigSJQFt",
  "key4": "3d7eQwa1AcJqYUdhBLrZhbZTmcKP5dz6BabQvhG7EqmLYPDYtf4BmgH43KBypGWRcVoUXq6hvfzfAKdqCPzQCjH1",
  "key5": "5CoUHvwwHcNYWEXBp5v2c2uUeRCBpwFqwxh7o1xr1BFy2rxLf2toNeTTA7YEFXHW3BofD5SfX1Z1wXcsFAxBWVoZ",
  "key6": "5oXmRCWhqNf2xftnkHkRJo3QepymhU25N99NuvLgypmYpi9dfk5UYb8MXzNMkjpTzj1EAXXBLeY1GhDDi22X4i8T",
  "key7": "3kLXv7wrUPoEuRHsUSHXBpMRLoFRLzALiwtbDAzaZ42kx2gcSPRMdciCWNuftF3UFWgvZ9uDHdR2BkRxc1Jeg1QH",
  "key8": "25rAm4S4xXkwFvd3JhbqyzMutEdmU7WFT9iFf4fBa47f94b3Gp4arSggcGnYyC4BMSmUohxsuNwHH5DYPogJWD7s",
  "key9": "3aW7Wa32D9Kw6FVrB4WqxQ99RdVXwm72SyGw6oGfM1P1szPZzi56eXUAYQB8Yqsx3FfPz4UUAxyPXKQvLFYpHi7e",
  "key10": "2gyVhM6XMC8sMmf9ucvuaFseJJsGGnkx9BiFmAfEaQU9ZxkQJSfpTVTSrhroWFd9npbxD7P6wN52X9k9oTVt5niw",
  "key11": "5y5zkRU2e9CwQqJhb3JB8ju9V9JbtFaxA5oMDCxgMU2zi93xg78XwHRiQ2J2Bm4WLos6gySPG17YWbGGYds9mfBF",
  "key12": "4jbNfwTUKdMMJDw2qvJPGeJNb3JK4R8ewTYA3G5sBUQCzStGkhcUGZzvbRornJ46USNFHSwjnT1Y3MxsUVxoixiW",
  "key13": "3x5hoZyGcyJnLZM6K7Y1qx8HhGg5xgmB2ivYGU6mVqQjFaNPbWA4Ku9AKKDj1GcG22sUshSC8UcP6yzgoZXi7drh",
  "key14": "WvqNLpoHiTbVsgQBwAH1dYXA1NLrSvyW6uaA5o7zLGmuzxfNvRymii6HmSFy4FWz5Rm3E572EX3bf8bWscuFcHj",
  "key15": "2FHVXgZFYg5Uabw1ShgpQ9XiPiVMcQDEho8MtF8ZWwdHyMHkUYusW47NGgGwcJrzW2BFaV1ZGP2dhV4Y1Z1tu5hT",
  "key16": "zUKnC1Lx3t6sL3vn1NNbHf5zarVcv3qxbtagXMPnRAvxwWhpzC8d3GWgHh17y8Gu8riuSMhNheCAS4UwzDDtLNN",
  "key17": "5jQKryv4Jsc4rVuVYxKUV8R4KaW3khp5KEWcPvfNhZjunxdgRGXNjtAwkmoc39MUeopu6cjRWGMwQ4JXJG3Hmw4",
  "key18": "5kx9drKpaJPjoUgded3wVrXsyqxjSW85C2frdRrcF71rUHrEgdxZeVnMKjzoGTNeodVFqFLtwf6ia4eu4nPokVb9",
  "key19": "4iSFEMGaBJrjGGSArtAKnY4zQpmPRis1HtGcuLFD9YqGoKyoxNqm9tiHcrx2B8h1QfB2cARuqfPBUoM6MKg2eFCF",
  "key20": "3w2BnKGB2eE2AfGpVqr46e8gp3e8FoxcWMdh6ewGmxBqQFzJ465JxFvJF4kKrzgd6bzZ2ymEJk5ehAafuGSPZJ25",
  "key21": "5qD8tB4HpUL3kLBSywPt7KnY8RWhvdd46u8SAPM3n4bjhpWhrBBfLmzWDDzDJQpEaxfE69H5axUcAEcp19tKikC8",
  "key22": "5bbwAwwpxkMBV1zv6BvCULdBBeVK2rDeNaaRV2AocqTX9BPM3WsYihp633b7m2kVmSB7UywHeKyiMnAYb2cKzFgy",
  "key23": "2aET5g8NcfueZ7sDH3HTixX7kqSA9tGZ1vt6qurxZUqEJyuM8UhkdaZjZN8gtRDfuFAQFRns7TpoQ2dHAoUCQePh",
  "key24": "puFmb4AUf9nY7rt6DGrjVwYG4c515N8TuJR3CgpvauMPYj2phYo3tNyXzQhpwprPeirHUvG7vArzEPK3pp4iead",
  "key25": "5Wz9gPfLqWanC1TjK1PFTJshjdsYZiHj1WsgNFciSZp7qi1p12qp321wn2Yh8FxUzMuW6GFZ2XMfN5nwUF9S4Jne",
  "key26": "2MzowbhmE8rgPPyFQBJkaiwJg5VMGRjq5L7YRG9VkrCNFfBtiTVUZsQLMqmGFXxGfND72UZP4EfM7JLM8S3TecsE",
  "key27": "5QiN4R5sWyRvqkdzABe2VBNf374tBaepHT6WQt79Gngca3gH4FVEFTfLrXRtNvVi2tCuHzoUrbxZYk4aMmW5ZVXK",
  "key28": "vj7qf6rKB4Dh7Sp1QyxCy6JQ4NZzgdRMAGUdNFBCp3k1vWmwikGyQ1mtZRZdNDk18hzxBrqrUPA3QuiCNYCunya",
  "key29": "3QYXNnsHogHCKqnMn4ybSG1Jop7jpeMcUibxNGZyXD2u31dEU9ajpnwuGsCUjg5niPwGbMUbAyZ5iLT8BUTBoR3R",
  "key30": "62tYGgpMi9Wytnj31EJgHzeQUTHDyd4pv4FDgMKkyzZKJvUaPM1od9ZdfQ7j5azWcSkwZiu1dnXGriu48NSo85ov",
  "key31": "3ne63iBucuCPPaXuRELZw1Y8hCrTHfQh6cdyCErXDGpg4dBaXfwyqJPAYJ1vTUtQ5PWzDXstWDH2SRSCKKbdMj73",
  "key32": "TAPiVDYJVynPL2owjRVy6msZSmFJM66iWZDyfZMVaXU19TgDrJSne7KD1UHv5imG76QLW2sTvHqhUGdxan65R9p",
  "key33": "39dC51VimwtbkdsUotYGPtc4a4ahQaszsxvME9iMUmdrTZbioMZ9PiBJCZsp2pt3jFSkTYLgvPcpkAavfj42wY8b",
  "key34": "5RVvYvzRXJ1YYGePCGfotsyqApSDAGFtsZQQJVA27kcGL5ZTjQQBnXigUW5aPAaiGmeanxAccGLiiNMiC5ARgddP",
  "key35": "2Y5HhPdpqU1hm7dMSZjVHGaQAuCW3B3kWBbJFnAqLyGhFtbe97nuHPXSN3Pp7fBbxAzHd4TopHSGR7UNFrJJ9XsT",
  "key36": "3pA71Ugo9jPHG8YJfttBW6FEAezMdP6mqADASFzSgCkqnfD6KKefGpPvhm5XBUFMR4F7kCckF1TnmCgmSCtXH58V",
  "key37": "49VGKJADoU4WcjX6u1Q5SCM33941SXZBfuSGSEPDppFtZTq1GPhE1w4yQJfkH9Mcufe6pbjhbD7ixtPN1pw29UUx",
  "key38": "2WSdogga26LwkRDwpJtXYXAaosqiPuZvRzPEAXfBQQKDwXrGuyvb8RfwGT9p4fAZ1A7VU2a9zrCq2v2msLZ8oiCP",
  "key39": "2iWDiRgJ2rosG7ZjXUjoEGBE2SQmKdv1x5VieDmS6zyWwonZwpD8ukweWtNRyN2ErXDrZTsDuouC83aMrKUbbHjn",
  "key40": "2Wq88dtiheyHrcErsZMi4MnHH4c3e6RyenyFauvc3fwNZZdZccrUWNG1eGc4GV78JrVX7ugcjCaHherhxP4ob8YU",
  "key41": "42YYppTn2RBv7wDDeTWwmdxKUowDaDTzT9TAE1CZPxXkjk1Sx5kP8gAaFha5mQ16T7ty6juyphEaEzonxxPJ6EFM",
  "key42": "3frmk1YLyx7t3GhHfafGdDLfNhVZbgRosCiEstQ6SyzXFGz8cXbEABVCFMNt1FQdeL5dFYejXChbJ74wdFxgPYEJ"
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
