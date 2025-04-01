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
    "52yqZHoRYjvo2vcYkpFi3wcF2WKuKsEsu9gkB8X3EdcSLzsbroz94edvyuqMi5wpsXze9JJQmuarUKbSVbTaVURd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qDYqJdFVKwTYmJu5QxKa1WKsdUuWhQn9xCm5QKiEecFMnbTp5yuGCL5ULhqdv8m9CTMKe6KBGwdvFEq1ZUBNgjr",
  "key1": "KbznhQ7gk7Bu9YrLHDethGST11Jp3qX7MrVXeKdMZ2m7jSv3ZvyaPn1AeEPYWE48B7EDP51zqYk1zUZqQ4hudx3",
  "key2": "9VajTrbBvJq9tJXZbEV3uEDDvSecWGFjybVMZRJWb5EnhsT4fugS9WGpJ4AbE69RrtoS8qx16A61nfkgzBEHSMc",
  "key3": "3RPSWtiveJJ7KbquLJaiYSiWhd2qr2yKTAGgKF28nbsYPi9a2YNcoXU299J76hW2PDc2y91d2ywJFy1hp8C5ftAP",
  "key4": "2Rp22QSuEDiGv8YA3uZN6w2dwAg8dzRtbsDUttH68N6Wi9rmmtawekuLe8bm73AW2yHgN3iQe83njBYcgpyRQg31",
  "key5": "2BwXtGEz5So84GmdxwhMq33NsWB3qNZ7jexbzcJ7shNeDxApEan91m43paVMUfBWRt1SGG88y9U6FpmftrzeXo9V",
  "key6": "5kBhDMauaDb6TPnQ8p79pvrHQNo8f2Cgcto73HAZHBMsFERegzgqcaxTB1U6QHaZtXAjcMrsrfQbhCh7xBBEy3XF",
  "key7": "4X6DocpNiZgcY21gKXaN7bQxk1MzsgSoUHaxWt6aVB42qgCL4sxsUaioL35cbfNQskFoJXqJNhUHW7EcbVyMFs3z",
  "key8": "2JTEkSUBJ8YHaM1MnxuL73KFDbNp3Q9NW7Jp6FQ2K39aqvxHUsZCBeGwdCNpcPdiNDJ9NVGzEfYDMTbHf2LQKEff",
  "key9": "2C3ozM3L2Jt6mxj2VBYnsPX6QGCFfSqknQ8F1TxGTVy8x2zY9UUh2p7ND9K5eDy2J42GN4Yu6yCWjpeZwQu4XqT6",
  "key10": "qo4sWaudpGGCZNrWhu3uJTZefnTDofQBCpMP7HzsBkJuJZ5Y44ST4g8NNaMg6bNrNnFLSpaFCHaKCRhA7289SfJ",
  "key11": "3ywgEN3Xj61hDAcihCCKN2H7gFHCqGFrLrFXioRhHsC2jCFYsBZKNZhYBLbJUAYYdvPpViFRoe1oi8vioJwwBiER",
  "key12": "3iUinrmq9rW1pnGorC4XnePquvqH6oiCX4pfMRio2ifAGshn774zhRyPQUf9XpojVkMSH6UNWRy4vCKyHLmkVSK8",
  "key13": "5bUqGRdNWiKiYZ18M3ZfDzRfvi5vaXvZTXJEw4t7noKbF3AXro8TMkmyq3LQ7jmLk21Bx9A7CynVVytJVY3LTMhK",
  "key14": "3TpUmbtFVATHzJAPhkNDvPVmq3CpKVesqPLycVdeL5g1wBgxxCKsDusJ9zFPdF5TNe5cBPghEwRXtJS6aZnNSYbx",
  "key15": "cz4rzKsmA7NbLGqEQXTxwTkp6QyoBrKTHhsvu8EeSLacHcohkioSsVJbSxu39QSP4ugrz2FEJPz6mgongrVAetq",
  "key16": "5qPBAetVErWHAq5Xr4Tfk7e7qKBoWwSqPrF12MYLXVXkHhDAFUQ4TcEopH8DdFXKh48wFkyAhajsp2QtihoURd86",
  "key17": "46qZUdjvD6fs6JEgEXDzq72nDtXEvjFWHhYrBqXfWh5Q7gqgctA869X36PT8YDPCuGGqPyG8ieU3nHd3fRM2RNHw",
  "key18": "2dbaqR9u9k8sjS2XnnNtQsKsnEtNzzuWJDiEiA1id5gVAma21QpZhdByoWoVFLv7sMKuYsv6dq5ssvjGyac4CVc6",
  "key19": "PCsisgDq7C2FMWxKrE2iaeVrYzsu7GHenAiY8DRKudpak6Wk5XZWpYZw72bMhE8dntheTVGGZn8kqDy58XhwMka",
  "key20": "dgPYveKRmGxt5AhawcrERCR1Y6feZFBiJvE8mQdzNhyF7YJZW1FkrxcruS2BFHT5wxakKUxox71iZKmpwCT6BpT",
  "key21": "2N5cHJqqPS7ngESSq7LeWm2jin2KMMYn3EtVn1HemeKRL5Cqo4BRbhrBLycc7bnFt755s2nFvhkqeYYFd3sjMtgh",
  "key22": "3jwhikcf8chHqqaH1hXmaMb4sdyENhsBD6zwqCpRZWmCc7A2T4LzywkE9y7YYG76Q16nfEJCoQs8L4PyjvsGDGdQ",
  "key23": "2VAYr4DSkLccwsDsZPBePuZUTYRUEPWcGrrAFZVW7wTpE7ojaUHSaSfL6VvoCPmb8DoQXaqECH89skKRDWSokCL3",
  "key24": "4fyEQhX1wd6nBqZkyvwv3ToN7DdAuiCX7d4EHwaxWbSzr9XQReSBRPvv1uwsyseWvA9ijmPUksRD6BKapjdh6W4R",
  "key25": "3knDz2K7mN9HkwQfSWoZZ3J26pdrTuY2zmKXqsK54bAmUJVnkHUb9tM3UBoffgtMKz13tBvR6y9t6zKH1gDigd1C",
  "key26": "5TdeCwZBdxQ2P4zUFjsXxHPZJJNGVKTGGL4BEChSZAMWb44izmxop6za2EYU2uwYHhghmeGWaHZmDMCmMhmuYCiB",
  "key27": "4nm7jD61bkJgMqPMoJKarNatv8XP6rYNZ1eVLDC4dAkFqdL2A6MNqKk9bm825MnXrGrtjruodT9bgaPKz5YtBVZT",
  "key28": "4m37dTWHTuVgxR9BSjW3Shxa9mEwtc87ha3K8E3RJPvL71CFfLdnPZeHeUn19Myf1tC1hJEsiJFSVD9rHowDVHCW",
  "key29": "5VMDcaaBqT3ApnZuGX2vhkh1qmj28FyxCZnnRoSYDDUjCuv3Fssb6XjZdgzXKSSoascfhszAxLAN8wxxNSgJJjqt",
  "key30": "4yfLPjtbh4K8ix9tNufkhKwNGDoTudKmczDBGxCJ9V8aTW6sj8CmRxda9KCbTVLyGsA3Zvmq9amTEEBpGkm2q8Rw",
  "key31": "4F34e3AMfix34ty6dKKAMmUMZFjYNHVfPwFfb7bXt1w87nwUQDS5Q4kENgaUmAf9CUDD8QMPgVvRSmkjn97c9LAw",
  "key32": "2NXWFxYDbM7W3AEYBuE9HQ4i1WLmVWW9Eg8tVFvNg8nZCk3v7Xd5ncQkmZVEGcMjP3WbrZkVqwPJn9uw6rgbmw2L",
  "key33": "2nKhvW85maAH2ftBxQbDJvpRc44S1WNXtfSGiy6nMKNi336vkwfdKwwjX9rCsWJ86t8FRmEqwFTzLbmg8HZoRA62",
  "key34": "354rMLxUpoWNMYeGxzp2CsTvnXho8Y9uMJsBF4nQdaLgEfNDyjxW2S1DPxnufppm441aVoDQyTsiTRJ75uq8WkBP",
  "key35": "5TmcA6Vn2knFh2iSu6F7jU7nE7kfWxfBCXP2f79x777KbXWzThGpYUJMwXdpYpBwoqWPgLsH2ocyKucfHgTig2UY",
  "key36": "4w8bQ7Qs7YzLAS9M8RmciAgVzVWLDNsfUE1gmtsRx9e16Ao9XBmmeJibZvSpKYfdeQT4CsauqWTqGC3rVYdsQBeR",
  "key37": "4eR7JSVMjcr6HKuuknhXjNfLfgbr8kVsCzGDrqsrdXY2j8zZS2jGPQjvtRtvnoJLpniFU9VGftvMdJDUH4PDSSRE",
  "key38": "3QkNb8FutRSECYd46zC7A7NivASGDFwqQ3dtWbgej6fbxbR1r11Nxqto8AFzRWqbyfpqPSDzX6xC7LHrLoyUWSGE",
  "key39": "2eVvMumCMPHK6gLu3GZgtewN6Thohckf25aqkeMQDqAsw5KwwcgyuDGwe7rLTmEQ4jctnQSV5C3XNXJcjzj5RyPB",
  "key40": "5ZaLEebNs9YPU5ZVn68bgSoM2iu3drai8Y7HEPBVz1mY1ioTvEivKsM5cJe4FjewATcTjkEANqYJpKnqx61qcXS2",
  "key41": "2UmXcaqUz6T7NRKEkQnMu7XVVCZTbTph7PcTAfKCK1CDoXm5McNwVAW9nzQag63PfzrNgHDeem7aoQFPL7C1xC7E"
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
