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
    "4aKfF2Lqb63XeQTvSaxzrY2Q6VM8Tz2AMYx6u7Xr2zMfHsCxdDi37eXBo9mxTTcHqVTRo51zEW4dfrFLatwQAixt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25RzQXtbwzvxLhmm7nx8p82NnS5Wz8g9VD3qVhvxjubRFa5FyhTK5BaPD1CdBExMHcPyZcfWtjNX5vafGuBgKRjt",
  "key1": "5s2peDmuzGUerfCqXnduXyyH3cGPBkuXGK1xffqxFPizmw2tj1QPtvyf9mKPrYy5X8rg7ifd1Gg5mMNzBb1Wtswt",
  "key2": "2mnZ2NXUrPvvsU8srNXv8SJG2EmoXa9A9e6QWfxrMicwuEke3eCRp9a1oXG7At35LLNaUmJUStmuyxjr2KjB6BkA",
  "key3": "3eXGngWgRpR4CKDVmvwCF5XZgpnuc5DLKAYicrKtgxJehJjBT9ZWdhkQxg6wbNTsHqC2ppzLwWqC631YKdNcQzJ8",
  "key4": "2SXjQtk2EALubTLymr2YiUvrTakeN7Nb1eMyZXqref3ac3MNiYTMkJnbua3xwvY9wCxRGmFNhHZMixYMX5EPjWnk",
  "key5": "3qb4KvpyNSKQpxy6SwsvV8K7H7uZFReLPWdqZ4iawXk2Ueo4vZkHDZbogBNuWM8LXaExxoCtQfN36reQgLmKSxrV",
  "key6": "3SdxqnDwHfoYb45gFiCYJWwVc6EXWcNt2Hy2YPTjmBE45U5Bct1K82oa6BfRya2kX3XSFM8usvNr5V7RmZX9JoqY",
  "key7": "4V2KWJfgnrZFw4QA4J7HpzzoEtmmKWofqb99ZXp2vhEJgfDkptoeQiHiDz4dQdimgxasx8GADrXH4VQDDLnzXZ2v",
  "key8": "4jHeePx7XBg4epih3AkXdHTTBp1sDvqeAGtcQ1HxVD9S5CTY4K4go2yCxSxeyqqqdmJyEGQNcbdCX2smM4Zu5U3",
  "key9": "442tGnhp2c3xvGSN36t4HM6ipcwuxzRX19WBV8axSkBAEPDJ9uhFM4BXtUT2mmciCM2jQvxrWc5SGj1gr4LsNciG",
  "key10": "3of1PbmV1C5SWmjUjs1QsUBTPj39HWLtnVNCQtSSd5vL4tJHS5dkgzbVDdDTJWUUcfkdaU8LVBrxb794mR48VDrx",
  "key11": "5xDAcGMXBqHBCseoNh3EoYFyTSEn2n15D1S2N3uNJNHT7stm3PZJKEAy9m24cDoqKj5jAeKZtSGbWcG5KTp7eTmB",
  "key12": "2B6cyrr9AXyCTDRoXMdt4ad6en9PbAd1uWxnhLaVqSwSCTACiuE4KpTuVAv2TeaUgbETaeCFLbazoxiXYR8ci6HH",
  "key13": "3wkyqNvkqykq8Z5kPFc9jTYMMTBi4hLhp3EA2qhG7GEby34uv1df56EnYapJ4CLanwZD62r8jeVe11CxUiAtZGKT",
  "key14": "3PtwGzrUPrqBweS91jK2C45wFuDoHvbUwctWcj4UcC8H4gz2sWjyajSbaV5YDZDHiUa2KEGucLZZ5gST7C3gSV5G",
  "key15": "5CFdTMjp2WxCXTmv7R8iysUFp9TuEmZjs987JhbWsTBKCMxmh49JjpLSSa3PSXiFhnDK1cbRuy2e4RLekQgGVMf5",
  "key16": "2HNgdeLqiraQ6rGmhHMFJhe2m52V5PFnvmbK2nUvxKykgu4x6UMDAsH1BMiGUyyfRxswHi4TShAkCbK5thGhpbFJ",
  "key17": "21ERWZePJ9mKs7JeVhy7EjGr2h3HdpKmbnhthVWspYsK7zwpiSxdvZurt5JbkgtSgBpy3YYf8MUU755UZY92SbKz",
  "key18": "5esqYN3QSPZkLNNVtFFwAtpKtP8fKZTbo9rP5RyrJ7spNiAcXHE5qp84Y6bPN77bkWYTsrAtM8oZmoEU6rBVL2Jx",
  "key19": "3EhuxtcF3MgxKVfVU14CpjmYDDAFCq7SctoW3AuCZFPiHG4sN5yPvhDzfmR5cciho8UoW7AVHzcbp6tnZHkdc6GJ",
  "key20": "3iSVQumsFqHCeGh3xxSPEwbVTguttsj8H8V1EhnBvHS2tbEyZokNP2LCnLsNmrCfRmPmdpfpt5Ga4NTJ9a65BXaR",
  "key21": "3JvrjA65SbUdKZJrbpad3nC4Q6Vi14EWxdLuuEfsyJBYnMjgZBWaj5maVSBgKR1nt8a6EJ21SR4PCzbGWjTWkXPi",
  "key22": "2NNxHGn7Yb2W7wFYutWHb7vTZvD87TZyZBrECGsHGV3evSFQWLT3X6qr2tWNYzpFWn9X4pVRCgaMFKe5bZKyCR39",
  "key23": "CUtbsFNLZxm7vm6nmhV7xJ1YbN367tyLMkJdcuJHixHLhBZhTRydsbZWyRn1LispWW3QteFrk6Nkcyz95fSpCB9",
  "key24": "2TJHCC8HbHSbtvjwrpqc74ssrwPFcVQPxLfJkQQAkgnMtCkgeF3q8KQDrmN2htL5qbUH2s9MgwuVFT8jRmEEFzJm",
  "key25": "5w6qKTdP4CsPcmFJqvpofYnAwieTTzrdSNhrR1G1LcgCek5BD6RiLJHpq2ny8WMcMNuNMeUNCADpnGzpMHirwxwU",
  "key26": "4SyG4oLLSqPi7DHot7NeEDviXcidPvYgQGyJHML1cJTuEvjR4jg8Xevvj8stAkgag62TFGwTbP4MsAcNW5Qk25pY",
  "key27": "3RaCtnvnN8VV9fZhFWRL2cwhm5k3rGEuQaSkvJCJptArkLWY7qp3mYMQUwMz4NYBg1UoyBqPVxTsXh5vEWETYK62",
  "key28": "tP85f1P7cBcVc2kjWGid854NNxwC3eE8BGCZHgHwv6FrjWNZinsndereYB3CNLe6fZ4KPL28Y3XGbRVo6vpX3Ga",
  "key29": "47HtaTBpdeaW8LNkuCgMzQ4Dv17cYYV9uL4ardo8ao5tEGyBkwYRb1Tg71VeDRAtDtTbxhfF45LpvCKer41uydzQ",
  "key30": "4A6vQ4UtFMxqnHaZpoJQJ4WmdE5A2DdGTNmvWk4ebr4UrhAVeyQybCFe8LXKKaTfBExMFSyTUCcE4vEeXfhfwEsb",
  "key31": "7NGsprzhA8kjNzgozuqP9mQPEGAebAJaaZPBqm3HukpfJ913CF1StNjGYrvaP3b3MszJqCYACNh1vfyXaoECQEY",
  "key32": "2tTWpxbraYj56QhHN4HfeHX3SWahRJNY6fmc85v7im3wkQveGQn6JKPEC2feh8Mfc5RyLyhsXK8LGEJqFV9q2cgm",
  "key33": "4TjrTJgAGMx9MkJMxWdziNcukVjUrjXbbjeVZamZDvG9ArQY9PFkax9b22cibQeAfBbCqnb2KqkJCbQkhFSHEU4j",
  "key34": "5mzX8fvi9QNaAC3VdLDeKqxx15jj6XYz1jydCtj7C95G6G2FFikanfgVwREkLxXdFJoCdVuE9zYLzgKvJF4trskE",
  "key35": "5jEUETZyroEVdVvftYWaxQv8RzWv7acZkrPu9E9xtFxHcfceLyZUFv9hp2q3juSYA9LJH9s2V2zfByXvyftuXkV1"
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
