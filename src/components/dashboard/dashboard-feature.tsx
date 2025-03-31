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
    "2fmq1AGjJ36Uj7Ba7WzTwPDHQobeGNgFEkdwocbuSkdGByoC2ociYhu8yqLgoPyg8VF19ov4diR4N9yjgiCUawLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzwochgc8jBrfHRKoqySmavqaoKox9cXvke2pEZN2zThVeY9VqGoxdNgDdLbYGVXmMHgJKbtLBaWY1ZRFLVuFyA",
  "key1": "4rSMSP6Arv6S4AAcicJDhZhDnmwUhXkSN9dWhWDXBp7KGyK5jeWSP9hkKb8f3EPrwvZXKNigsw8fTBsizfnQ915G",
  "key2": "46mQZcGhCaJJfAZsNRweHXv7rxLJTCjCLuoJsGmeEvyjBFacDfj5q2vu5KZAT5FL4EkbFqzi8fB1UUNzfqjLS4b5",
  "key3": "2uMA25FhbURcyiwGyfKKrapWycefh1KPwZnYXYT11gcZxfV6QTNfL6j7DL5kVkYLqnyN6XQcjXiNwYdG4gMKUpqw",
  "key4": "25mP2xEMPeGmMyi3xCatRW5mPKHQqnxvGZWMiE84e8wAn94SaTF37hVrnHWRGogjbDUKmrHYRaMZJ6RN9EbBASQx",
  "key5": "56rrvGcjzitZVHoFWdinjFPdQYWryvsqB9oBCMVyqugZDcnGxM1HcxbC3fsdJnsUVie3uU5pRSc6b25GUAyVmwge",
  "key6": "2CkEeL1tMJH3Uz8iQQXVWkRqvx5JYPfZ1tnxs2qAJ9MR3NAwKdCfefuQY6TZRUmfTwtnAgT8LJHLPCE7HvA5ftkX",
  "key7": "4KzMCG13K1RibsrnpyfXFq1LD79kmKaqM1WzmbXS2xTu2m2Px7G1fqTpUxKsaq2oPHRF1dkzXx5aJnEHa6emMJgy",
  "key8": "5p2LSD2LSbwTDf1ESxvKhPGjEYwGXnZmgSEqdQgaD8kMnMHrqB5xE4DTNfQSfeGJ5WunAi3axK9EFz4AVTTGxJSR",
  "key9": "Kbp2c77QaNCzrPYk9mZAeCfasxmmbYi7N7LzkaPauw8gioAiwNi2Q9rvszHhWT2Mdnfu3X2cWqGi16go8oQLoD7",
  "key10": "4vGv6Mpm5PcykFkoZNm3NtfYRoq869ZM4bnyv2cuTFH2EHT1CKXkKva8Rn8zXAKEdnGEh26dbqM5MnoJfRG7LvvQ",
  "key11": "4yipxjWvbZA5r2aEXRgQsYwEkhjUqVGvxwTbwsr1J4xPM5F7BRAfv4EtRTUmBCVentMPdfsXAjo9krvBUsUe32iZ",
  "key12": "ixZcM41yArnUjzE9193FzaQ2vM8jj8zPnkgTKK2ubXJWzTFmabwJGaNhspGVBmCKpcgk9DQccnv4sDyEr69c6aT",
  "key13": "4B8b4nRfE8fKuarzwQGkxaxaF2aVYt38FzsLyNimrwR8Hz3iTTEcDEqQU3WsYTBaDCKeCKhmcLfC7mRMzQUAmR7Q",
  "key14": "38kbArHAhnygaiLfk7sDtjNEjvbfoj2QkUpsqW69cGEkcCjMSgKDhJtfXAERxL4Z8PQrYjamCTXStmJ8iE8wQnoK",
  "key15": "2wdJyrg6k4Cgad1xhJhcNwZk9p2itLVbKb4D42hKfAcybSt3fZtjsVT3arCAXemTmq4uDkBHv5PJTGe2gHtraT1U",
  "key16": "4Ecpy4s24XPBH1zS3pBYoUowc5erqGcLHSFSoeJiHMFy6ktRkNdB18ZgP8qxBNmVffEPGfx2AKz8BXmcCkrLKGDf",
  "key17": "xatX4mBZh4TQdW7UZw6c9HqJgcjRAKND4sCyordF4uT4QVmDqqYm5hQUpat5Ub8ueptqjsRNURhb5LQkzDEfXpe",
  "key18": "eixPtZXpoxpey9ebtJ8n8zbsLMvMnrGoVv4oyALhLgYZMJSS9FH9jxuqLe34C5LPx8gdca7NBHDvsrYpe3MbCaW",
  "key19": "5QmVJHkpo5X4vP1beS5NHzb8bcMuPJFbzi8mET7Uv6EyDGc1pPjsrqgkiJNi8o471pVHauzzDGpXCgQx7yDnrpDy",
  "key20": "4Dc82MnC1WdUKmJLaaMRgA1L4F6ZxxyvbuQFWgaHPiqBdWYpkoSxjwVrZmLGuTnFzCxnesKjtw55NXQaSy49KhEW",
  "key21": "4fkqEbamvNB2aky8gsFfSiYGiBuc61b1rfuTGi3NLGhnnxkhwTwHYNJnpSnuuNwMPsUoFxN6eyqLkP7HoVrhWJvW",
  "key22": "2MdGv9V5oPmx7Vvu5GCUBszBodVLikgbeupt2gcJppHdRRZaBZsYNjBUaPGPA7ApWhm4FLuJmbze5H6Sp6tuGEym",
  "key23": "ESpSUJ5JbMnSZErn5bV1QEvHNZpEwE194iiWEXm9W6W7xVnDf6QjECTVYQ9zq87CPcQYmiYPLHMRaAzyxavR9pc",
  "key24": "5B86feexbTpq7Hey3XAeJ9H7GM4cBE67Uk1VFyDSgdxSYJGyLcgG5RLYVnEUkxiZr3RYKdcQrwH7RBAkGwau7ieB",
  "key25": "4CdwNJ738UKHbpGj7Sx5EVK7RGCVNWAS1VQ6ZpTRAHCEu1kSC7CunPX7YoWeTXL5UFoo29f1CaA6UKsZABXtHUX5",
  "key26": "EX72KA5BB64oMKQus4EFLdBmfQYRYgweYmsZrC2kRQrrxkx5SJMGpCXn2BsUAHwuWwFgdVjo7TMn4takGCeGNxA",
  "key27": "3ia4ddzA3koZLPNrP7tvfxF7fio8Gypsgq9kTJZjSQDkjm9nM9gfBoEwkAyyVVqF4VrQikZETVpn6vCMiTNuSDaZ",
  "key28": "XzbfMQqxBgp9QTEzCmrw1iFknseqN13ZoM1uR3uiuMuFTSgRvjqRhioWAtGasVC4T4zq9zzmgo3EnCBi4RGvmit",
  "key29": "oR2gi32QjEYHuXYGJiMnmh6Am7M1XqGiXoHpy7sdXk7MUywKWbEg9J2YwHUqLPiHNr3wPTHLVTHSxJdvqksPGct",
  "key30": "2ZMmVwaEqDrSxd1upha9sXCes1xE8PY96fKHK1nTr3pzQFtZWaqcrTuizscjvfw5hbh4C6DSEwxpjVK4YrRVAdij",
  "key31": "31fptvTiPvu5WG1Wq6KC9LSsFG4PL4o9wnQL7FZ8292a6iR2nTVMPzHA4G98iTMdmq9H5ya3PGvy9mhGssKDgnbX",
  "key32": "BQykbZyviYwdhFje7ofjTnhBuRoUb2FpLox3MmKKp1yQEFLZ4LQ4CkekdpStQzdoUVfvCYTFsMCnwLXpMqLYKLi",
  "key33": "2Bu9UKQ5Q8ExmkLMwNhWxnewdvgsRmn9xu7LtH3u4rJ6S3RBWvJRZQKrcVM5vKVxpX8MXp8zMyTBgN5Pp7gEkX6X",
  "key34": "76opduhNXDyGMsBPWXpjqo9BLA2UysF9dtPnCXYkNYtRrPkKW3jLSULs8W2spM4ixX5wfXxQP1UVvQxn4AU9VUH",
  "key35": "Pm4kQdqL7bp7bZkTZhGQnFrPkWvS6Z8gH21dDRGk4BeF4tc836sRqL3T2Ayyw4x1KkDVacACRCUhJpU6qbZppfw",
  "key36": "P2Fqkuf7xEHUU7DvWXFnwc7zdFykcN9D78wHtdcBpCWjaPL9RZ9bg6o4joKfnnkywhw6b3RJuCnHcnDsRsFkfss",
  "key37": "5YynyMYsckPjFjGqG89FM7J42LZmak8uijBEj6jHfBUiS7tD8NUfX2qPtjK8FwtxUWKnccUdBGWbF1FjmqH7QdKt",
  "key38": "3qqvNaiu5rxNhVFmEDukHTH1n2nkpo7RidVE8qLCwMbapVrrwhGkwwY3hSBXdc1BHpySUs2MXPzNPFXv6Nnc1zLf",
  "key39": "5yJVBoemyKCfdyTo65zMisMip64RmoCF86tEHurMcGDMoEhHcpzZQ7E6Xa38bNxUgFxjMne1RDqfoHcvUAxxdfDU",
  "key40": "4migDnfrqb3MDPGSMyGuAtUYNEQSPP7hituKnEU5ZLTFWHDXmCBSahtTXtRKQfHoC3qds5FWWoMVChToYciFhYoX",
  "key41": "67mngeAzw2MSkTi3Si7byuhY5GubF6hgYC7QSS77QF3LUkLJypy5GGEotTMTnturx2AHwLQnjh7rck1PqwqJjSNH",
  "key42": "5CReRb28HSn1k7UMSa1k89cMqWny3UhG7C37QdnAHT6eMXpK9KcshmcekhYfTF69ndNkydqc2y55AVhVAQc3KKH5",
  "key43": "3oo28F5pi86PZhBjgoQR1rPtTwaDuCAQLgCkHtJp3soEERCnpC8LuwwrFzi1pU6kBqmH6G5zR8ohLVxLsLGJmU5U"
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
