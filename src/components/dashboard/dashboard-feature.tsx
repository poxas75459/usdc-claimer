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
    "216Mgx9NsCHyn766NmrLEn2mkxtghAvkkJxqp8LWVrDvxXA3yNyeU6uTQGm8uPov6q3a3dvrDHeK5cYmUJALXzYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4for4MR5Ae6jJiq98dvtczVsDzxkFdZaTj6AYMXFZWnRhab3g5puXuKcEW4KdUaZnQ1eJ51i65zuaUck7VjcmR1C",
  "key1": "5Kekn1H91MoVfBgtJQeXx4nr6Z5arcCe3UmJEMEBvg3W6WV2ZVaNv7DPcNR9fUsddJrhjZB1aaRKwsT6zHeu2avb",
  "key2": "2WxHqpgZXaqjGDPtfRmuF3594aPFRhMupmxJJD82cfvWjSHb62ccC2FDSqWRDMftPxbB5aUvDFzU71Y7ES3mb8Ac",
  "key3": "5NbrjTuttopLPD5scFdenkox9PBXGDUaCpFpeaD8bw3sSF3267Zcn1ySNcDStAm797bepAbr4dHwWnJxLt9MTq7R",
  "key4": "3H747aSqyumbQ4TMaRFTAkZ6r7Jn93uceozGyXBkmcEwdU2dL4HjYC3wLxQv8vNh6utcPndA7SiFJuzFrfyoDBPc",
  "key5": "5XCpu5jxVSkCwve32UesNLJvuw1Yx5PZyMJ7UjuErtTYozwY6qjMkqdgwfiRTBHP2daXCzfxf8uZ68N2QyR8Za8A",
  "key6": "2CBgGDZBwwZBkBBtoGyXbVXzBLFEmRtzA41ji9HnMCrEvkppuNw1aPJaLJhbhY32UVUWTYaosePbyJtGEYz4Pwas",
  "key7": "2P3S357oFqPAvnqRjnX6HhZXbkWJeEb9zWKjqHEWUVJxaNeXvhxP9ETNh25bB9rrvxDyTv1pn7kc1VazescQnyGU",
  "key8": "2HMpuBE73v7oF5qpFos1AAMJsBBLbPfqNig9SRbPRPJYon2bCcnhKj6NG1Cfgk9TAtnTbNwMmo7WQaiUfctdUsCw",
  "key9": "TPaLEmT4aTvRWrMbQbHKPwx8KrB2ooNMWYGkBpgTHFLwGKeGhsuzTgDm11wHkHCbSGmQGPBxkBEgmJMekufNc8r",
  "key10": "L63pFMzDX5potor7hWhQZ9c8VojRDVAhSWKQUdvChXutRZiVx5o85jPhnLGmS62wSSQc5yH6Dt5Rb2HWJhpUyLf",
  "key11": "57Tvfr4En8eBy2P32Ebege2BxZ8FugsmdoMtZiqUZkBHJf6ArN2i3jND7JdbMHt2j2WsWH46wMTvhWBkvjynWYaV",
  "key12": "4SPQHXBkSU18fsttymEfmXBBDoEf6oJGdqr8vsSQqHEZAyPy9qtteeZHMpkHgnGFgTGF3fQ1A7gzFEeTzBo9vbCc",
  "key13": "47FSFryY2xiZ847w2rfRYNqJSLBkZ9LZpw67mA1z8RDDu6VhXePhZoPZfrEQ978PQF2E7iqK2UNDo46brifb1KU4",
  "key14": "438kVEMaq39ZdGw6Gd9Bm9PsmcxSdaPWP2ws86jg5rrSjJssS6QNW8o4tuuoz85nwjasZSQi6TLyFMNhPGjRCMzc",
  "key15": "5LQ9wvaHunAPCPyNCZhRsM5c4jyVeLHfDaZ8tzTdNp7DpAyWQ2jM2j2ZEioUvSyPvRTj7tDsAZrkVqZCH21F9DrE",
  "key16": "jXeuoi4cwuwkxyA6p21nmA7zzyxxuj4iWYpMYwZ3YTeTQ1tSWBc22NqMkKKufbAXZ6i9hAp34dXKD5LfaXcizwX",
  "key17": "3QMrJpXJUDMDookJFtSSKvPgzUCpiFZSo47UZ69nQd4NAFCtqVku9ntbK613PFskS2x6mE6NhCWnpc28eUpVkrbP",
  "key18": "5wfeieRSPJtkUMA9K3U2ZEE592iEdt7TdHCW1Hzkb7CSDGWqCgXjB37hxKE82SJrnGQGofLMA741mHb5JobZaYLd",
  "key19": "jxmGjx5yo7UyE7rRZWaafhKe2YrbWHYfQhYqbsmNgtfEbmSVuHW4b5T2sbQqQgwK7r94CDZnD1qLySXmHLW98yZ",
  "key20": "2sXKEesVfk27NW1vctkuQxQh4omV85crnEqyBuLBT2hCCS1p4sRSy6wVRGm79CymjHWTtLu8LsgoZqBnbcq3z3Ek",
  "key21": "5FyXx6eG8Hi1RUjqU7PwzeT8BbyUTjGBUgZexr48gdF94ADMHz9wpexRQQQbNSEww6A7Lub5vwVokUE8M5o5Eroe",
  "key22": "3mdfhbFFth4qRupysAYa93TKa1GfwXGx6UBiUif7r9dtm3vq5TAbMjfwKfQqwr1eC1QDxKMNBbY1MDsibViqCXB4",
  "key23": "3GxoUsqvAhPu9Z494jgMGbH951fLNUwyxKspwwbnR4UL5Edj1Nq691BdMZcJaECy3wJiid3p3KYiGYiZr33FL5kt",
  "key24": "C3RpvYfHW4jYQJQzWwd3ZYpkNQR9wpakjipHBFjPooieeb7JhkzqA9wGBr4rWuzYXg9UowPrExmucpBtaTrBJWP",
  "key25": "5PggFgxLXswJ5MzmYvjgpSHzBkXBLH3KNAfy7bUBzPfAWPz5t2HVCokX33htYzvj7JTXCTfxSHDZkN18bzyrdHhr",
  "key26": "38yCe43SM5dGbZxKpdRRR7QMPCSdyA4BjAshgNCRJwcPheG625qe7GDEMnB5AttxyERXsmAtooHthumDo9WzBXeP",
  "key27": "DcHTuZ12kQaWQkda3HmjP7AHJsWxVC4SncSsYhDJ6qPgHRY2JqwJ5WrrynhU7y1LcYCd9nJGZ1pqxaAxBeRdaYy",
  "key28": "2jjs5cHXjB3nRTuy362z3RakMxWD1HV5Hd4ymGiDrRVxed9KVDWewuGFsa2ygRzi9LWrhsHhmSWH5t7PgWDp8ToM",
  "key29": "1UoJnJt1216gUCNvmJii5qDmHsytT3XLPtAnG4TB6vRCFu1WBkQp4ifXtGdUQ92GQqLr2UEgF1n7Nef8A1zmzKZ",
  "key30": "3TbvESnTNweJTVYp2ERt5NvUKJ54PmYo4nLTezLx5h8MUQ8sxgTFFLN1ewVVRJH8gaMeT5EyUCpbQvhfi979G8bg",
  "key31": "5aJg8FauamvkjhznepCmicGsEXuMtJMzN4hvRw9YxhQxvYq5amyCA6dfZyeGpHrjWRicE6QUVNY1wWznWqnAkeYP"
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
