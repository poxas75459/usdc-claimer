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
    "5SiPmLU6gCgBaWJaJg9VnkWzBHN28mydRjhnmUrf9QJHER7Hnb6RURKPpKdSD9DQpQfYUhruaDi6FN3i3RQDBiwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ns2JgA9EwNngMbx9ZUJjA2Nw4R2WMWeZDhLBjVod8JT82xYAnFUqSkbPXa8ML5QMyjQbum5ZYZyeU6Sz3NQNSQg",
  "key1": "24mjpgWDsYGDVRAzThVNAqt7jeYNDfUbmLbNMXoMPvXgstppnfTFU6mpMhjcX5d76RsjpxpcXFGBqwktNyP85CLK",
  "key2": "34rogyyDQvU4QmWVoC5Dvi42kgN7sdEWLSVRTBBKSjDFCnXrq1SCB9UEtDM6xQ8Cvycc7Nfbn9swbskx1m22Xfoq",
  "key3": "5oCqRf3Ypt2F9auuwhfk759Knb6EwGVknbNreo5Z8HV83Enc9uk9k6wwGyq3ZwsN9kziVvJ4eVJwADzhduT66kLu",
  "key4": "3gge71BoLuBnhrtgdov53Ukq5jR2qYALTQv4jxfmX12hKwvkVQH5kCPwNr5wUsFN7pdSPC11y54y11RrD8kyom3s",
  "key5": "4k6FmUk749RA8U9RmVKhTffCwiTqyoU513GpC5VcAwwJkvFsUZeEqmrx9aZCjhrhZtQ4NZ3uc6fciDebYJ96cTK8",
  "key6": "4y6WqZiRei8YPhLMrzYerLmM7EbsfFvT8uA3J9VQM1Uq8LNNGFDdH7wLSJQemCEy5X7dmUDdV8tRwdN5q6rbNBk2",
  "key7": "4CgWAWgJaCTk4w7ubFACqniC3yoFvQHmtGj8uRcoeqWtm7XxnNcLra6v6vwzvZcwWRBYuGznW4vsiNp7Ycs1Dmw7",
  "key8": "xRCbmbsF67UxSzRX77eFQVhyz8eGqvG51MnR7DvKqhseFYs2keRHK81S7qWpdpwoAAB9MorcgsoLbYeTNiUfDn5",
  "key9": "5hhQf5VChYY42jVGRiPu5nW8UASNN7JCRgACrutDqT5N2KN1mXVoU8TqFHLtv44PfQGJpu8ocYb1ZNia1KRXjn3o",
  "key10": "3H98SZvcxD4jVYky5fvkGppbGsstNUrn1hFGEn17AUGJuCAXBeEPB4P7YVY7wt49jv4Wmi6TVAgzYsffb3thK4n1",
  "key11": "4PT6EpaVKb9BZ59gNEMvpbYaQ5HbnKyfeyD6NTNBcntdnaVHgMM9uoUW7BioQ8hCB2rwJyAffzt3WeJFpbBVnp2u",
  "key12": "617u2zejFKgCi1oMkF9ZZK1x2R2FqMzvmob6d11N4A5ruz4mKarFAY1SfkQkZH96s6LjD2p8FacEn6jDUxsx8j5e",
  "key13": "2EmAxdmc8afw19TwfyhvfZFWPAYoAWNzMErSN6vjFVFzhNGKkQ2fPenCg8xCGqjTkyEQrTKGwguM6ag9zCFQHPmo",
  "key14": "k8hJVLBRKjkHNTBfeo5to6PfKWofQGd9Yytpcns8srg4NPDY7EvR2CDhHD8DnB5To9WZSoE2n4bVosGWZ6S4G68",
  "key15": "QbD2ioACoxDfLSnLgLma8FZzF4z5s4S2JCzuRF1yTksWYmzAxYNeoQDJDt4xyGbNS25gH9TFntamcDEbua7P6w6",
  "key16": "5UQqhz5iZbJW3987MNiCzYFAAEF2K3bpL7yH9QHGvAGVXjYr4EW5FrfhpvUUG3s7gR72KqAxVtRGs1JSm6xyzjGk",
  "key17": "2j9gtVCH5JKfqGWx8zJbLtRRj9EtUv1UVXgMWe4KLDoemfDJSccXH2k6siA3KmiCZVkyxf2hmy1BugUDftyFE4ze",
  "key18": "42nacufKktCQgiLvEebomqwC3WzmFW2bbL1rwQqVWYtaperxH4z7ythMNREKPBzK2JwDUPnrz42Jk93x6Ba8REMz",
  "key19": "49hvkX4Nf7iYV5APheRdt7V2p9Vksho3YcPS6tEdwX1Vjrr7Z317g6HK1B5JE2ojY3ZeXhoFi3qXFW8rKwdSPzYe",
  "key20": "5zdZomwer78SDRzvaRbHBhBu7HPzgemT1H5i63LgYZCrAypgjcSePAMRXiPvyibjrZTPp7WNAv2ZjFtQrCpBWLFY",
  "key21": "4Cy8jTcLRFS391wAytD3Pg7uGamwSKoqD5WNrLibhPzLZcwsrLygYn7asTNqi5nJU7SSLVthVn4ta9TAF4PVkVGo",
  "key22": "nMvTqSTKmcLiNhRUNzMFZHbZMX36XUnqDy4DMBeAE5ffvx8wA19gysWHyEKfpw2h54x8UkgezRF9hapXMaUN6wq",
  "key23": "5KUKCKgzKGn74wGr55nuKGZrcG3Y1XBYHzJHawxXXEDhK396ckucTg7wNdVakoYwBtVLtrW39Piiq5QTodzevxJ",
  "key24": "15UqQGvhuy28nkbpU4RC887AdjzfmtBwwEJgjcVYj9ao7itBcLte3NKqqPxxCxgP9RMNZZffz3MPVjuERkvQT1A",
  "key25": "5Eo5C2PBgyFouSuAQwLJMNiVx19NYcxUj7cmFJ1NTR9JWWYWRh4qayUhvzdtFu7pzUC6qY3JGL4LpFyyZC18bN35",
  "key26": "4Hk8rzvCDjoXDNCTXL3D1mK8B4JSSeqoSi4LNjcFuXvwUDWqs5xcKyV295pdQH2r3AqVJshQxQb7Eei234FarCV6",
  "key27": "ZPxuKDWcY8pmroV5CVi4VtCZpmLnsEC6vGYZPGBtSeisd2dpTupoULuyQyJXNHjNyikwDPV1gdr2dL7FBBjguKH",
  "key28": "2hR1b716tbbLNg6GWAQGB8FNpaX3pNhJWVjBk9HqsvLLXmkhaCG4qkM7Qg3teHLSx3uqwkKtgUMaQbjrFpE5Rd3L",
  "key29": "5dUSBb7JtSr7B92MY3CYsh13q3BBRrGvCBe3FbdPKP9wn7S4wdZShdhQG9E1hgVgvK4PTFita7jjgXNCzyoVDJNM",
  "key30": "4Y3KKhv1DH9mQWYwpREvUpQGWpzzGj3KizR4U7AhdfpjsXNoV5WH5GzPk9tgFVoEMideHL1EDcFuYF42CYJbQnQZ",
  "key31": "43HoFntgJ2pEMfVS2AorX4rdBtG9mGjPbgnJZonyP9gJtrefrVZm3T26FmgKrHNLkyvGA11ta8pA4ngctVkzidjj",
  "key32": "5y8AGi1E7tpjSGAEH8R41eVQPLXTJfvtGzpM9EHzsnU4vU5oJwY86S6ZTpQ1kivYmsjGrkatYrBNXX6NT9ZB8gqd",
  "key33": "23Ja1hkwpuSCUXeTt58DZucmcCiTqPDAZMcEXkZhxZe3WE4AqqgESpGJ7sVymZHBBYZAtgYsnxdxx8rfA8HZqzLU",
  "key34": "61cZHC4BNLwPpZoa3mbJwp4wmicELVVdyvwQizHsiNt3dp157V2rjngsiz7N6ai8HEXDkCtAkLDj2MANFohCom4D",
  "key35": "shi1Z4ECauub1yHQLmV4JthkhR56nognNMDdJsBF2qNdAK9HMiLo5sGN7uVZJ4sYaX9xQ3BbomMa8KUZAA8hDyv",
  "key36": "3SpWS7BwES27fkna1t8fpqeGcEQCdQpvmyA8bgGhN1wB8uPiNrq35gTnHJfhiGKHs7rXqoeM3Tv4vYsYpVLpEAo4",
  "key37": "25Y8ZbawAThdjyg9nW2TKg2GGpJzh58zW5oixmdbetBm5cRUXS43bjCLBUiaeSU2QJTwrQuRTva9HsNXLkY3hMDi",
  "key38": "3nNfTXcwbJtN8354DbfC64MiQmxqyLGLzhEcMZmDUxJQgynsh9QBZLypmLz6bE1ge1TzAk9f9MHPiJXuEnhcqcYK",
  "key39": "fuXhjxV519E3fFRvPfQg8ZbAunwgserswJWdvAwPCM4L2DcZpqKwcKiJpRtugpooHbcqia2mVFK3RUWogiRVKpK",
  "key40": "6kgHSj3ThNeCJvosruyzUwCa8mfBerrpCzK4HK2mDwmpBEpamLczebDZXVVWZRv9y3P8u7whaEisi8gmKpxGKCL",
  "key41": "3KiDvZ798jWxWcvaAeMTbGq2LYZ84Gykrn6XRPU8xLN8o535ewpZcAuuJFsjEGweedkdVbWFU8rZU9Bt1dsbmBEx",
  "key42": "3cfLfFrLp7mJwTjf1xeJ6aMZ5iD2vrhv8hLnPbgxTMBU2XvAJQamoGBDY8R94hatFnZ4ZsXYi7KZK29fhJjWoYno",
  "key43": "1hkiB7uKM6nxpoZRPDBdT1LkVxZ5cjsmEgo2xeDF1E7sd6dgmou3yCkoRZb7ae6PXugYtNE3NykLLMBYwGMqBBH"
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
