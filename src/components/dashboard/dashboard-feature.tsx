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
    "2ZWenMTDd7DwvR2gyV5zvnBywja51UzNTj6FztSj2WTuNyyT9QJ9TVaq1GkENkZo7DhqcYzG245wxVbH3wBcKnQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sz1TeCN8YL3suX36q83w3WVE75cctyn6zJravZTMkbtxWP1GM1VMPhMtP59UCRTuvi5FSyDjCC5kq2csebazdrp",
  "key1": "2R95uT71pDpfhP37TuAKTyqCoL6uJjNG4c6ysV3NsEyw888Y3acoQ5EhsmCLfVSqMQapspzfJfz9axQHjTVHZQup",
  "key2": "5aonrrGTEmVP5oSCqBAEELKntsyczc3R4A1UFJwT4m7FQ5aRZmb1ZNeZsJPDEJ23NjkWuywJab7gQBgcA9cn6ud5",
  "key3": "66gnMRHxNZn4LNYwcFyQWKHN8zCNdVibU8aKw75eLUsrZuUTCWao8KowBzXTvUpAJHNG15fo8Vy94vLz5ghRUvuc",
  "key4": "43CrTfpuQPiW1xxAJbp1jroup3EivmjyD7rZJv2Gz2GRXjt8wELJuQ81NyZwSmy5fgsJ8Dg19jC6Aa1aVjffYNuy",
  "key5": "4c2TMqKBoT5SJd5UFZkxHDKH57TLfWmMAXVG4u28icqrpuFTXfkLTHux2HHXYarGvXvKypjH7Gu71RscVZcYMX8j",
  "key6": "4AAyzBPDsygZqcbjMiStbziouEChtwLUwei7g7DQ2viC1RcVBEsavDHrVTkJuoweRVcpG3aPDTsaM2aXm8nVyMN4",
  "key7": "5irJAk6k9LfaJt5DVHCwDvWmE4k53RQTnXdoLeTUjZURT4CGxnc4bGu6AS1eGQB42mHbY3TAh3Mj9PBHu9Qk6wpA",
  "key8": "H4SNbt8zZNEmzjQtXULpL3DPkWHCaPFVFk2p4CRCM7tiAUcWzpME9WA9wXJPQq5pG9p7LRKeuEBEXFrbpg6TEDB",
  "key9": "4cmeGrsLxk6zZo4EPYHDKvB9Bc9N1xh8rCJvwdrnNdjitWvSGHMniyr9Hq8uYnfScQe86m7B6bgtbntk9h1eQSFS",
  "key10": "4m7nzxCebFJG8hMV671oEJMNFLQvpthonE1inpvntMSGBi9qJAdny2toJ7dEyJHPnhSRYuFMaDZKmd2vpPYr8ARA",
  "key11": "4SktiBj8TwWft2TzBMQPNP5DUqySQ91tHCM5xiQ92agfBFqUwFcKXdj27fQ9ufphzXyH9QV2z8pRZ6cRmceb3Z4m",
  "key12": "3NQ2a81kkUM9DV5A6rHfNHST5VDrHG8yJ9NKF4wmQM9aqSVwGvSYFfNbf44DLrQrZX2EryukdkFFHzAoC7qhgD4T",
  "key13": "2hUiZv44urJu1JXPT2ExDx41EJK2xwChXmiTdyXsB76hp2f8niphoncVzdvN9rtWWeLKy4W6CrrBNQQvwFsMGKdu",
  "key14": "3fYxTYwZtTM5VuHfWuWRG6zjuo7KAPnofeATm2oozvnXaFdyyftqvhCxWccxcpAkGJFXVpNE1h8iiTnwLLMQzzvh",
  "key15": "3gWaMdP1c1jsqLS6PmtJXu6LjdBU8AAtrqPhho6SKvt34AehKP8jj41XGAZDeZX18Esyc6V5r3ChxzbGUaZVz9b4",
  "key16": "5isE6bZQupfJjoQJABxGExVocqhWWy5AMjnkHWVDhoRHSEZoB8GiAyC6ytZ75HWQxax5J8h3Vk9dqqPmG2Jh9bes",
  "key17": "55DW1dSsQ72TNqjDiuUpmWU1JTYb9DEaU1sQotnbL1p4FX26wdL8Nsma9738cZyKNFzbsgb6oRdr55ebVLpveQDM",
  "key18": "48rXTRtSsL6ex3yW4qjcdgYsMvAn2pYGTZQ99G43qtKyWsxemjJSCwgWqDc77gv9hosLMZBTH69BDeLstcksBqwp",
  "key19": "4h6YBs7f57PXuyWxYCdXEP6WusXqMZjGKTxi7DPUq4puGCdqgiY1BtV1qfmurAAkwduPeSYbbYB9WfZR8vexbJTT",
  "key20": "mcPJUvL2c1cUpAV36K7C6aqj3w4DyvHngdXTkt9n3gZGGndU7ArTP4QLwYJB3X3SPvUzXGrhk5QWXp2pcPNZs8y",
  "key21": "5YLffa1akztLv9W6CndPDPeofzMFFAR1kRH8cF1f3aK9oejQybgHM1iiBcoqM69mbWd55jkbiCuSDwNzy3g1njHs",
  "key22": "iDjzAq9QHcjCR9goGnGLPTx5e9HLYbCH6T5nyF17hzPvQ8mk4Luwbqjn4VfjiH1vyR6Ly9yN4xw7M8FCCpKDJim",
  "key23": "39crjNXebSTp4g7pp6CCWhWrPEBKZnzBs5GCeXTygCKmWEGWM7yhwHEJADie3LzVY62khq1PjURnsAqp7pJyPspS",
  "key24": "2u6TbFSvLR7BQKezoxx2CxsXLac2iPE5RgEeo8TBtcPnWQovWiAQkyJuV969HxUgAaMhqW83T7jsU96qy2jawUQe",
  "key25": "kdgBHbudC7bA1n3GGdGLVtJbScxax3SgKtJAg3YCh9CTwqiMcgcX72rpygZ7TLEgyhyC6qynEqxJCj1jDzafriF",
  "key26": "4dvaoPP2vNkYsg8WafwcUvnL6Raay1WUuu2mcnJoMfbFahfqbeEM9H8S9oR3KmoPQ5UbrgUYWZsjn3eShzpFaWes",
  "key27": "TAD6469cE2iWaV64tVT4Vq4rikMKgeFkzyLS2f6KJCVuN5m67obgsm72H9PEWhjxdxjTZdfdoo4LowEKHUom1JM",
  "key28": "57ckxpg9rHcE7gNwqqhY78yN5UCEVTg3M16pmv8qfteimmE33fQcvCuNRPePCjdH7QsjwnswKpSiSkdMf8BEyj6R",
  "key29": "22DcES25eifovB8CPTS9nmryo4YgxQ9eZ7haiTta8x1mBFfaxxXuXpkMA9gvBUHrrWx8cT6fVf9PoU3UJdrSNriU",
  "key30": "4YatibDcneH5m9fHhYib6LxZf6NJJSzzozyJrWCrGAbZf7tXM8qxiZEkMxqytzi4Jd6ikaEauo2FRimEqoNNEe2c",
  "key31": "45bn3meiivmk5C8ViyMqVC833kxoEvhod7adnYWTS2XHBo1f3gcZj5V3NocoRsFyVa7Pj3EZBbrmPaxTH49wkX3k"
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
