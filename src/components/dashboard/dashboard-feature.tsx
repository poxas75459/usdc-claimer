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
    "2ksz2PVZusdgrJM2F8x8dHzsMXTp4cGv1tCtfEj9j12PKsfrCXBnsJcVKZbXumTnErPcxPKvNrZWVJDYWXh4jRib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsgL4UN9EMvmi1K5QfG5PmbvySuKTkdmgSLZZybzVFh6w4svA8RWVA3oeWTKXKy68QYu4FkAUudMLJtjNBdHjsk",
  "key1": "5RcUR6PrCg7WVApprkzwPB5G8oEvtq83RfJt6wNfD28axTaRN18sYjP4sgvo56CZ3RfBzh1CgrajLiGiPgJbkGCN",
  "key2": "59F18B8gibWLKqUeiBTjWoJRxJjL6A8GhP45uLVgwUa9Xt7A6ersrVJijNd91uD1cmudjyPjLob9mhS42q9Bfe44",
  "key3": "2qTAsDqfB7apsxfkYxjoGkb33i4vHNPZVrHTgWxRwPVtfvPfWS3JqYWaCwTpGuCMFGExNdJmZkAzWsUgtgnaQNY3",
  "key4": "aiGftxRPjPsuvnJvF59iLvHgKGbQ34imCkHGpEQwBsdr9F44vNqBgAtDkZi8uU8APfmWZH7K6VgMyZw3EbEp3at",
  "key5": "4KPoC86Tx7C4JfMNaiyep9CuFFFaHqfvdjexjN8jfr8XnVHFwNS4BQBGHea6UEJsjsQaxh1e9bQTbw1LKhbX9DPP",
  "key6": "67bkxJpHojTKhf9DZunQtxuXHwHJ7r45Lp3CjbB6cyc5AxwvsE8sRYQBZAvQNjQ2dTjuU9dmRp2XqJ2bzSJwzFar",
  "key7": "4cpd1Vj3ARjswAtLCjT28HThxw3sdLDpLGQuQgnyfGTZTTZTWP5CtTJPrVX3oJHFZB7Fs9gyzC3G5GVBsWeRcAky",
  "key8": "2mkTsPrttxAVo9KVRc4d1w8EqnNrGyfhTWRE7nUDhNabccFA6KVWrFxH5bwZQaiMbfWAVJErq8vE1w64iPQFeaNM",
  "key9": "zvv8quR1JEAu5CwrRo1AQk1KrVyyWtjG4X5QJFAxq6ktJ13zRtzJayTdJxWyRjagVFMDTWxraZkULRotA39AZXt",
  "key10": "qUwEa6bd4pwTxQjF4gzWYmdAvntEuMS6yzJ5TTSfWCPkpZLw5m4ASd6XqKaZTj5hicA85A8TyBwXQq2gnh2CBKW",
  "key11": "XkuG6XtacDT6jXHXrq8awDRgEvntSGLKLbq5pErXm6yK4NCrs9K5wGTrxvL2iUfgWx9cPP2WccjUPhqERmzbaDg",
  "key12": "3EaeKobW2oV7pkf7mo94JU9EU7nhtaszwZdMo2qaZzcznqEpKXmjUBTB3ngm9gBHtwMMXWrppzQquNvu5c4v3u32",
  "key13": "2faMXijYGHvqf6feAzSx5TiKo8HBgoRdMMD3HC89X1CkYgH47XCshFCgfSC7BrGwYMtRwQPoATBRUCKdveJsfHWj",
  "key14": "B7cD15dxM48Zpw3eAN9R43veN5KjE3xMBatnWJzQZkwYMF1VXx8FN6ShFeMmyksN85BzPM4fqNLpNTStzXadR5L",
  "key15": "2iYUmssHgaWN5FGga3TET3o3qFuw3wpfaa5qWxbrTz2Q3m8KQ8FnZf5veNaDfodAkx17GDvCYoRzTVMLJwmZv7c8",
  "key16": "27c3PaHN1LwFHAEexet5YPzAhEq58MPBwTdBRcY3wLLovrMCrXn6fm8Xin5ZRUrT6ABB5DM7R4SCVhhq8fmhHdrp",
  "key17": "4VKbkPx5P7VX6rb6pcfhN7Byq3sdQjZUpUBdKX38BPhcG7jG72uAugnDwaapqnzCZcqRmqgfPrRquBcJEd3Wcxbq",
  "key18": "4jrvUWawYeiKDHF882vKYMrW8fdV1B1groEEY5daBdBnNih9xkWRyboVScTFuxszmXhkYcgDyVwW9NJ76iv9vaUh",
  "key19": "64WNHnoxtm8Nx4vw77DGqH578xmrgkwRCVmS2BRcpcRP4BPY3QsnmZ3wFPfURJ6nJqxKvxfoL9JJ1anFQs4pWzAn",
  "key20": "4UHrztokmtifNUKb9uCStKxQpzSj5MJH8UJQQtG3jH1JbKPgEAZZPBsP4g26G5rLMSTbxWwQtPik5LM1Ex2y4HQ2",
  "key21": "4orBotF49FRWK1SQ1ovS2hgCWFcrWvfLiMbd652BgcqxWqgBaejt1odrCdxaxtAt1VC1ogGUug18Tn6jjcqYewmm",
  "key22": "2fNYpeWFRfrcGxh3ELCN1RhuY9hyq7JsZHWyXKN5ZPPN3i9QBRTAcSyxG4mzzdegic5K57BVtSmDWK97hoNHUBsH",
  "key23": "3Vv4PLR1mwDECvxhzF3ceB8YjexPbfzForZb7hmDfTqkn5neF6ycH2a7K7cwWbWD8XjFjVtT8G6v4p41qtVZXBKa",
  "key24": "5dCihybJdpTKgTepTXu28uLVNYBZuJfSN8WTXbFpRNp7KUeaZoTEihagopyF4mqx5XboJQZ4gaphqoix5XSnp5Rg",
  "key25": "446eUVxVHGgiJyjQwvjCt2vJGqVHDxatjY3Lsat6Zw76AF4keujYMfyTpid1n5kffKWTkBbqjqbnVqeTt2uJBBPC",
  "key26": "5gUyAwDvMR42vnhLGcUzsVH2LN9dP5pfghE1QEynstBuRfsbc2MME1WiMBCLXAPfeuyccgLUwnKqzJsPjFnkMQ5U",
  "key27": "M8Y1Ym7XtLkX4RXGFVYCfCnvEdgo3jPuxPyCrkZe27qT3mYuy4KWx3vwtbL2mN3oZ9wjvWB7BtYn7sAxrTxjMMy",
  "key28": "5yFHGaffohMHTUFkQNLJH19MrGMK9Pc4b8ghoZMSsHpNSygmdwGQwvqtJLVZhQo7CSdxqR7CBwJ7rJ9dBD38dnnk",
  "key29": "4ZJmvVEXVXoJ8A6NnpTUh8cBn2vjWSbo3Y2ZskimQvWFQMgFieNAk2RGhZXuVXpAZ8SfyiyfNJABPmeZTChjSFbS",
  "key30": "PzWNJQXd4SSHrd8L4rgSYsruU93A6nEmUjaAeHonshd9Xz9vHmYTDkKj9FoBmALgf3MmLoTBWcHNT9T2AN9wiXs",
  "key31": "2YNDgDrT54pnHppesqtH2h2quLkUpbzfYxZp6sJ6i4vdZ4Yh4zx6oNx2j3KsZQgW7S6wj1iP3PwTVPC8wc43GpuQ",
  "key32": "2kGob9UoKxMoELmFvZBTo1D1ZMQcTRTirejjP2jaroEA9N3FcBajBr8bu3B4HY7mK6Utt6HfFdWVny7QTdVAytWj",
  "key33": "4wbX2FQ1ohU3xxqW75SHNpXcwCmQif8aNb2r7pcAv6Mur3Sw6GQFAFhNqc12o2j1Vs3DqMn5Yci8VgYWX78vMjxj",
  "key34": "3so4f7zppyUVohwsAAPUEreBA7ZD1AYaKxCSuSry4CVEMcgwWKrnD5pAJfWc4az9ypcf1hwyvXXpGS7pzcBDSfKb",
  "key35": "3VGSdtuzQMqa2ooFvwHj47X88LTd4NK8YNeuSVBBhp1PQtVm3xrB75pYMQPW6J6ZL7ynuqBqmFxeTN4aQirBrq5J",
  "key36": "225sikN1Sd92ZKhTf272az4kANVov9SCyRjXzZD2Yiy28oopuNPre2WUjGppZtG4QaEJNS3LFhr1QHjLu33fxBze",
  "key37": "4j16uCUXuzNnhuWmwLNTqocuQbnLp7YmkmEGuuiNEFScYtTVi6GUUPdXPkz8ygUyY7xZfHySq6nkLR5qBSqxj7FB",
  "key38": "3ZFBDTGT4s2fceGScdA5zH3zKdZT9eTfWK167won79XdLzKZsF7tsE7wan7oqRdmGX5sah8JNwzArNG35mHUdGZu",
  "key39": "5uVa3enW1q2zh7PjpzmDj4fnVrcmM49EdLEDBQXiGP5Q3RcGnfm92oyKV3u2UzLePKkyj3DNkMjnPK4PyYF4iMbk",
  "key40": "5vmcdEn89Y5QTmBNj33gLWdq3sNfRxAAVKKUK7zCxiZWAXEDsfH9NSvEz1Dgaw71Eo9VjaiS5RusjmDKuhp3Ai7R",
  "key41": "4tsAtQoxjMXYJfMzK4SdEdaB4UcmgjJ58csk8mTVdKXXL4qr2KgovDbn1MdJJB4h1gk4zapCY6NV7ZQL8UHpwpBo",
  "key42": "65Nt7SaM7Y51UEdwRooFw5tFnN1yKBhL2ekV3g9pyA8BJsz2zpzHJAnEgw7KwHUWFa9eeHtB55P4BLV1EySS8G2R",
  "key43": "5Fnkd6KszrV8KkCx6EYxsgQixqKj7Q95dteJ52ZJLeW1UThA9YEQaLEyEmyawQPTmTcEV6HfVikLcuwSx51fYoBZ",
  "key44": "3Y8SYQovvcENckDquM9qLSndZFzVXatPyPHkKu35sPgjgDU7XRyosWGEoYk7Y3z8L7EXMPk5q28c6o3w8MFavzBw"
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
