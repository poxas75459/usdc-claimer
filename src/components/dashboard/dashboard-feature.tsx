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
    "2b8tgQV9iNvRg2FtKFVPBzeuXcYUQ9UoLnH8hjc2KdBkoCzgFCapd2A1PUmMgHXtzafTg4WTeRbP5RR3VK3Qw2wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veU9C1SwwnGqVYHfmuTxTcXSuy5FdsSnQguXuUr7M5JEDYtWeHTSdht7eZeYR7f7TmDrcfyvwdyNHtzMyr8HjY9",
  "key1": "3TaM61Vv2qKuA8KZtgMuokCR8s9gu1D3A8zXS888nmVM4Eb8C5uvmEVKzSh9MqRF1j9iRGTUJzDzqde1oRBj6H9P",
  "key2": "APYyNZFS4u5xhvVgTzod1qhFFUBS9RWJGg8hJVutAAY3fwKtGz1dWC7eQQJzdJ5E6fN5g5FgpMY63J3Z1cEQXrF",
  "key3": "4zcLvJyahJN6HZgAegbhcwpY1itfpUyAN1RxEmthzc8PrMbm7x3zqAbJFCFdv8bTMLJt8fV3hqZoXXjPbUrb4Da1",
  "key4": "5JeGJDaveyc6YnEcroHVmFeLBGAo2pjdJZ3xFonYykLrsUGbw9nLhZNQoyz9w8xp8W9J6CSz4KqkWz8BAbHYtuDo",
  "key5": "2PLyggZXDUw4xugPzojp8xoWzwVVf1o2CEysZ1dQkY6VnNBktLe7V9UpGd1dh4n8xvwBB775K6aWLa84xQ9jtteA",
  "key6": "4K9ge3C5inL3AbxcxfnxdEFVecvaXX8Y4U21tYYZBxSdNf6jm3f82R4NCqj8RWc5Hj5YvRgyVJX9qx8wjUXHFzMz",
  "key7": "3PsXVznhEk6wkoiMPPDjLt7pya4SPmK9jNb8pTChJGEENBspAy7mVX98YyyWEGJWDvuwG3WMpSPYNzv7vu5nZwf2",
  "key8": "2KwwJ8Vbq33S2UXasMsD6nBu6sAmWhhVqabXE9U3sVCQ1wRQTfwt7MmTtCEY4NqzGrctLFJwQcYcb8q9X22j8LnX",
  "key9": "2P9Z8wsHhUFJRWX9qSXF5s7AHYTHA7N9g3J2G48wjPj3TEJ4s99somUZPGxLEzsRyJCUYnWnkXSwzUhLMbrKXYwC",
  "key10": "5bsaPvAjUmeN1GdncKwaCtrht17R5xPLyVDkgJwuFgbTag4BbPB46MgUQWNcAFaJfQHy5oBNSiUpYusMistXF8th",
  "key11": "2vGefAgBAV8BR8XEj4n768BuTYoh8wQAHQrpg27rz3dfa8YSzLXgeZL9cSbcqi7Qvk1ebXyK4N5ycqeUoyCc1Lcb",
  "key12": "3mUCS5wWUsSRWdnFaRjtS7X5igjwdAdQzc4JKxtVyyPosf283Z3xv4Yp9CSNYQfGfaxEJhi5sk1MYqRzUboxQQY9",
  "key13": "2j8pK5ygYHFoHBQkqhXWGk1p9VouvHV31sfNPFCx6QzsRhApSzZXqnWSQeeV9T1Xgqf3yNMAgNTBkJpeEDtfKmV2",
  "key14": "4WgrdoWddbpBm23oRY1mRrFEH24Tqvm4hKw7hbGoCzayscMigK1rkok8bYn7KJ75BZZLvTUxex5zqK5rq5UhYXcV",
  "key15": "UCY85SLKBvyFgqy24jFDhmGpMroVzbWxnv5Ef6N5Pcg7GYYKB9MzTYsosByTqvMkeVeHsqNNkaNupgmz1dCFsU2",
  "key16": "42fiHPZ2Xojaf5i7ePiJaxpaFX5Uj2gLTqiosqAc3vCtPa2FWY7Sjsa6PKCjJuc1D4BXgwvoCmRLu6PQEWhGGWCs",
  "key17": "4dF6otZN7w9ghxBXkxPVDwkddtQpwirwsSpSLsg6EoJMCi7fuwX4Ahg8obvvU3U98rbaqeM9ymZCdFegK74YfAti",
  "key18": "3WAcEPTL3Rya13ap1dmfdo7TqGnVJxmjgT6EyvYbdZ8mDzLtoVjBmydPysJvAXJ4zNC7DVY7EqJBPKczu1eEaeGC",
  "key19": "56i1D83TM6W3EctNHFrMXL1Aj3aryKw8rSCLPdX8QaFKGAhmhJd3uX2uP1EbbmBJYxx2BxpGPJ8v1yJC5LQASsY2",
  "key20": "4Seo5w5DDwHhA3bVahwMKzNkNwVaxLEPrHVJot2Q9iUfov4iLhaEGmoaTBfxAov5tTHNeX15U4LN3HMb9WguGU4Y",
  "key21": "3u1mtCsQfz3Vj1ZFCTsXd9zyz1Zg7coXfJzw1FgqnU9WxB56PFogf11iC44Xf4XLu3npLkcVjBF9fWYgFqbzeMqQ",
  "key22": "3WvAfVFWGMNUoSP2qmH32HatddLPVcc3fKQ72Cf4d1N5B9ZGUFxyDJaRmFJ5MFa3M9apfN4E2gLwe8yXupm6vST6",
  "key23": "56GNJce7QZUJh9p9AMY7SQywncUwcaM77CwBygUR2nkgzcuiA2hkRvPD7ip72mXgtSLiB6WmwVJeFqhpHabR3uyg",
  "key24": "4cMfSshHbbKZBSFHrLniFHWYK2MPUxorpa2oMwGSKCyp7ebh8g2hXepdPY2aJqcK1KTdnpkXV1ikR1qnYM8QcUG8",
  "key25": "2SZ87cXY9hb25PXXwQqnn6mki9Be8HHxs8PYwQLU7jLbiXmhoWLqz32qc85kqHZT4CCHhR2tbisHS3pEs31Xx15A",
  "key26": "2yZwJ3mSxJxbkNw5yocApYQLUf9kadYprC3w9ozXggemQAbbrtYGN99reAboMpSkavYqcsPef5Sy2mrxZR6Dp2sB",
  "key27": "2fzddw2bsiuQFdk91C2HKMWTSyALNYNeCtxBAtRuCVUhv3TFNRXmW988twSKpqr9kvd5Q6Zt4R8TerBxEriV6qCo",
  "key28": "3yMTET3ivmQktaPsyoG5DJtFkJd1Z2nL7L638S6Mtom4ca74qj2YPWgeQZgvNi1qymHPS3ZwGpvoMS2yMnoTZokF",
  "key29": "3nawkY8RZ4HPR29QpG6kDbB6iYSc8m6KxZHUiMTR6NRL3B47Ei6KtnBmqWppFN4LjYWb9ZPVjGE9RUi1txcVrTuH",
  "key30": "5SXvEhEtUnPTnyrQyvTbwvP722Em2JzVvtcyzweZCm9W3ZLrt1AFrEsKXQrPGT19tMpGLSfvhGVGAoHP9eeqkGb8",
  "key31": "4mh7h5hs6diD2eTv5EV9AitMzwiVb8DhnaiyjCHEJpQmT4aTcsL9Lk2X5HxtocUae3PERm1X37Wi7T9Gnjfqnfse",
  "key32": "VHevvvJRnGbXMUpbLFCu3Mb4FQWnhqV98Q9LdXESuiWLeFLPQkEppcjBHrHv3jYq1oDsJRNwgpn81EtuaHm3gg4",
  "key33": "5JHoy5j9JEpdKEZe8F4v3nbz7QrL8wTWT5yXJXHJqmbWePLrwqhRZ9WT5cUkMURhHoamrw2WqTBb97AUFjY6R5fA",
  "key34": "5i6ybx9eQ1v3kNb6PK2V7e3kzw3owajuWyWNh2fboXeevZhU7DDBUdV9nLbLyqf4mudrKzzeKRZTP4vbsYDoLqP2",
  "key35": "2ZHzXWdsuEtnL7fKoR8chMngFnrfBFcRvcnagLiKDPa33nnDjUKAYHT83ors7WcB7MkcNQBQG6HJegEvRUqc2Qtt",
  "key36": "g23k1fVVEu9JDDNkoEbpX2TV6EU1DzSP4vCHKK9KPyCnfkcuJE9kxkX1yB9QDXjHjqrBgmfCdrXwjBTmzHCfbKY",
  "key37": "53AfMqZP55fyYZSuJFtcQxsVQW3Vt3Y6HxYcgiYKauFxL9P7pNHPfKonEFHcKWepX3N81et2XfEBXTs2HhqMu122",
  "key38": "3dovsMYX7QfNLuB9ZdGfgrccCWGPukZ8TvPCuZwapzNRExDxkoF2CgpjcLhTiKaeaUiyE3UCFwWU3Kk2GjAqBiiq",
  "key39": "3MmUgcc8hf9md2Yi8bT8J4asEXMJKJR4gfiRPoaPseLRAMuNQzVQkB45EcbKB9Kt9SG7gb7VCvHk2ificqeFLj2g",
  "key40": "2noZtSJ3V6W7YAtVnuKngXnUHYpQ6v84MBcnAfZrjFnkPcFQsTYURZZimZuZuVeMvYeDdeP87FALZBFRDnYJZ7V7",
  "key41": "3qkdNkvgk851SjV2CdHrANSJ9rotySj3nQUp5ZhsZYarv7XJ8Rppqj8d5C5h2vZidgVx9kA87EGet1AVBTNj92qH",
  "key42": "5QZUKX7C8Eo4W8XppRnJ9VzJXx7bhGNXXNNpmWrmKavv67rne2o3pG1icbfefYGL61syBZ4i9nygAjJq9bTdG2xw",
  "key43": "3ywxkN9pX8NgdsYVjzpbQV4w4znjzwF7GVu3Bsd2G6vJ1aLexoxQkAqxtJwpHJdpS6z59iS8fDaTH3VGSbHP75xE",
  "key44": "2W9T5HD65vweyGPW1VQXxYpXiRc2YT6cEHhJaNkDHQUPtyV6qd6EUeQoppMchJp7YVMrY6LcxFXhcrmmGkEuaBAs",
  "key45": "5fHip9fenX3NVLsnNx5rKvhiuCE8o35APEvc6BGtxyHMg8PVmJrQfYthizukeWvFaT8FkyAqXe9RMhtdyZXLrBMD",
  "key46": "4KzTWaWAbPk76VRzpWVcfNNfmxVWnTftcwkCvLnWPSC3ZkjZ9cRdeuH5vikmUxT2Uv8nr9XFZwfTZbC9F1XBTieP",
  "key47": "4qa2zF4AvjRhK8UgJTeyUmgJu2yP4bvvKuGNd9tyG7SRHrBn1gWMoXYQBWHcmkvpWg4ziAGTjnpc4tvvd8ycbDFx",
  "key48": "5ujNXYYkXMxZcfCr72VJG91Jrc75efEb8ReQxtLFmFZCbRRGoQxKdcXBtLJLpM4PgcNDrhbZGNd8zBcpeRJmeBL5"
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
