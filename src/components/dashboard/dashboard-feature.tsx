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
    "4Po9VehPzbX8jBT7PDdt91YYsU7shnU7CCQ2wDJcce6eWAPJNXj8bcfboYLMiJSH88YpiD9HKBffZ9k82gzLDqWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64N31ZA3TWbT6oayrwgxkRSYaEJ24Y24s7S8uQw3mSJ78drqn41nAdhK9z8roEVddiZ4h5PjwNTNGsA8Gzu68wZQ",
  "key1": "LkAEWdpwgnPgEwJSp4B8uU8kJdkd6uDnfhWVpa9Zx8BGWzFjK1vrtfBgmtqfqKeGFFT8WNTAjq5ToZGwaEGt9nR",
  "key2": "2VosmwVxRftegvKt7wRrA9YyAiqigTRorFuM9XPVnxURD6iDxjbqQ5SjFbM3VMH1cTZKTonvCiQENyFyXJwMNyFC",
  "key3": "3Xe2t3tmQ6GgPiYbWydvYmfPN6i3iSuuD9KEUCbringLZW5Tw2AX13cgH2wkUh6oPCZFGAzu9C197bg6ZvYnYXXW",
  "key4": "2hrvBBximmoDCBwkfARi1SGwMr8K5jPgMK2pe9X2u7DgH4kzL7G9epDUgtJZ2eFZtGpFyKic88n5gW1CgU83UaP6",
  "key5": "2HWCdUB8nQ5WETrQFduhPtvJRumtrSrT7GwiGSM1N7LNRymbKbS6CJSCegHt21q56AEYEQd1bxsgv646h2wdutrQ",
  "key6": "3F2QBb2DvRWFVKhMPRLEFBN8dho8PzwoVkdLccHjFg8EbEr3Lvh1SVqH2U8cNiVJquWB73Vu8sPAjn53nHCRzi6R",
  "key7": "EpguUZZN31c1AjzejUVSQyn3AYmSMs3dbbjTuwtBX5PUN1RQ71MpsnMZFQFuHkVPDtQWWPvgjXFvvAtXjuEEodB",
  "key8": "42XsWHnJ2eXJ4g4sxxgnfZMRof9sMJhTjWxT1nU7fEGBwtFzg7P1NFHzfzmmdJ59rDBw3NvLSpuxwWPhCi3oYiX3",
  "key9": "2Cat87rDh9vB47GnTsxgpGvhQxuqNXtNNvJCRXV7hSmsXwpkmdbBbhozZVfULfy4rfG8LRzmqRc3oXximcwcvvic",
  "key10": "48TAPF99L5htvhDr94AnJB4AqZA3JM1ngznNYiYFYFRroL8FMoNdJNXBpsVKAJUetgtXA2wFtRH9pGW3QeBngcjx",
  "key11": "2r8ySQ4bT4XCUSZA7crj1PJSg99qdf5xvWaNP5PkdbSCP2iWBCA2g3EmhsQwD5taVLCg8H315rgYyGFVqpnGsFrN",
  "key12": "5Ku4RjiGq7bEFsC9oRQwDNeEM6AN1dLxy3WZpUdZcz6sWR4jb3gUbCdaKaiBrRa56UJybwzC8qJmDbA4KVuohUUb",
  "key13": "2U3jxtci5ytZDUgq2BLP9E1E58osBjCYNJSzz1ZJudpPJRbSeUBRDAT9N5Xc8ftEApAfM2SXUQNCb8RyAAks3W8y",
  "key14": "QyKTVjumDSM2vXc8ZNnNJEgyyZmzJWrdTDcZ1Noq3DXxKdWrGXfcZnrMdEavSCfcRdMpEDDUguXSgQx6ERj92oK",
  "key15": "5qwAngM7R1F1hxjuSRtE6bwxkDFCoeAYnbyCs2si74AiW5nvP6HE9dcBdj1oY9zvE9z9Xsi3DQkVidawuZvK6AYF",
  "key16": "3NfZYFAPJwowS6CLcGENJWB6ZKiMT6ghHpiAnkL6hutcT3RsvM87x9iMUPEUsPqvkouGPy23mhsfWKdFSFXNGDBK",
  "key17": "2zpnByYoNHTNiZGx3cALsJAn398Dpq5pxjBZTKwQrLQhwC2rfBJtiKWLSQpw7eq7dSVb3Ff9R2mGJ9TRk4cTEDVc",
  "key18": "hE8cqx8FEnLwAdR2n3b7dmsMnhksCz3WSCxpCuoAmUsMj6d5SjgeDzrhc2v59HEF6J5qGNWELjM5RpPakDmAhfn",
  "key19": "FFUWeT2b98m3Ghea6tZM7SAPEUBagEMk7NR9pC46vZoQGWTdQAaWeAqWFxRRj3Jr4EoyjeHbZLre3ry9x8753ci",
  "key20": "3b6k7ZHVZbcJx7RgdJCKy1g6z37feHt15YRdnx6Aygueqyf2mLKZAwt3VWRxN9sSMu6rtYbwL8HM5w18xHSoSo3H",
  "key21": "42fq2jA6dsdHPonFKWoRtnoWxjjhZpHAxzCpeTiefikLzUVfL1CrgH6FkreRb14aU6HYMVdDmRPGhdNpkha9pqyf",
  "key22": "2qM55xqUeAatdR2ndUSEVoM3YhKgBpW8hGi1USKQ9xa8Zr3Dj89Kn8c3KfJ8L7b4vkRjrUc8dnahwSNrhoYWqcot",
  "key23": "3wEtoDwavDsEVc91SGMGutHY7xdNuYfNmch9a7naqttVyN5SK5MXGwNi66HtcW7MC1EgHVLKzhnnEJbo15cYi7p3",
  "key24": "5h8cgAzNcAYkGwGb8Q5tto9JZ3whQ8pz7NbPqsWG5Rd8LYFPkvJm2JRKCjTkDCh19nwVkhGWEYCpwh51F5GK9g2Z",
  "key25": "5nt5zUJ1ocRm2sYVAmttEhTBfui7Rdw9QLruUqLxLeQ3uQgkGxeXWZCzRkRW6XJBTQK5x16sDotpgo28a9XHsxPc",
  "key26": "2wtrKnF1yAW4ZKtkj6qhgeSUCtzcNzS7kuHXHWr2uSa2iMJzsqfM2ffsH6oxrPUtYQghpZgdNKTFfyNgSJvguB1U",
  "key27": "24ELTxj24WTnPoZZc5R2RydrwvtyNzGzQy6pfJfXE4RamwwgU977uXKYPKDrtrZtkKETWvdnNCeLVSWirqsnXBX2",
  "key28": "51aiGr8NLMbohkuZoP4erDJbMoRMihvjPAHZCFK5PvAHyQt2FpcaEZ3hrzbG8zhpBPgD7JP1ky156ksfDdbEihYj",
  "key29": "2zSBfmNuk1iLeua9UgF8Di5nbnSKGyUb1GbkywsrRRt6rxjZpYLstW95T1FP8bniaQdRFQ95SRcz71L9fRPj65i9",
  "key30": "4LMhqrEdSywQNGVj6pMN6E9RAGxUuF7yBLLSWfnisJ5WnU4VcHC1ngGqgcvSMAKR9x2r567SZAC4pHVc4g7PmsFt",
  "key31": "MecUPGQF9ZvZbyJ8kgQcg2xKKgVGe7DvTX33WELgVRtherRo2ea7w4JmAv2ZLxDaBmhm7QbBuUeUtKnArwhQZfJ",
  "key32": "4wXboJKanszhpdvzBJGsNw95vbZy3epgS7zw8S5HnGn1HpLeAS3PLa8JHtaLZmjFTYU8vxEgaUDnX1GDN4aGhzHA",
  "key33": "5UNtz52aHgm15rLfzFqnbULPe9TkofX1VrL5FVsbREhQLafye4zbvgAY14RwwjixYkdcDu4QFBZ34Dms7VaG3Kh",
  "key34": "4oAgwXwL2J8VBAdp6uHCPfVyCcZ1Lyt7Yc985WXXsYKxWAqtrDXHpnVFxScyTXDrfdMuvnfS5q2rC9p3sYrqRz57",
  "key35": "6CQzzZamfVKL9frJrwuYYNTuR3m2LsJGQGbmq8EgaeJRBVA3SG8DRWrk3TV12DXomVLrVzUSxQ9vzy2SYTXP9NW",
  "key36": "3t67Zo2pX35EUc1cb6R8mizgGtTtp4DM2CnrXmrGbfP3u1DEnS2S8oL7Ddnhqf1RyyoZYzphuK1YsdD1otpKKQUS",
  "key37": "PM1hkq9ixmQcDd3UfVPPjJLxGw1or6Ae5nPRdMLVbZLyBPpCDqhuVsAKoYckMLw6CtgrAFWfnr22Gw1nohWsB5R",
  "key38": "5UEfy5zGP3zgn1DqQ4BiLadHscvxaHo5Da3CcNvDxRxXpGJDkArtCVQBP1ik4kncv34ZpFpHfz4fMohqrXKB1iJn",
  "key39": "2jZYr1L9SD2ZXFHN3XJ8aFMb2vz4sE9zefmg5CPirvM963eqmaca7r6kUiPs7SG7yAFDQpjRaZuKZUbrwQVd8vwB"
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
