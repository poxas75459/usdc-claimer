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
    "3MoJbHuHACp8Dd1G1zaSL594JfP2zAUngLrDhAroumxkGcnnijsBeKvmDtjVRRFejgCAFKXW9XZdEZnmjuaRtwDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHuBY2XdsoMDxfpnH1rC3hCRNk66XUvnGHs6HUu8p6vmSmFfk5S9u1fiUniA27J7Newzqj1tE3qvcL8DwnXvGJx",
  "key1": "2PwoHp6mni9CczxZVfNcFJn53xhML24U99fvMisqUT3LzM33EnGg3CcSgAXK22Y3nRuo1VMrcpAet8QC3CDZmfHb",
  "key2": "3NxYCMs5GdYabKAV4iR82vwe7dZKhUKutYu14E97gCAwsEanVVWqVhnaK4bXWSthmEofLXVWmigrPCXUxS6pZhQw",
  "key3": "3wZ5cPfYJyj91Ep1g33AB7iyXVVrgayyUfKXgFEUDrUu9wrnuFNm51P78nizYeVu1y3qLzCFpN6MqhkkgWDuZn6A",
  "key4": "4DdFPC9d1ivL3D3ncttJi5kWGejQJ1QjS8o8c9TP34Cee6MGWFyrwwkmocLhbzKMkXY35Ya8AnCS5Gms2UQ5NH9V",
  "key5": "3NJA8oeSJTpFqmczoEPN8MBbAxaoAyPMcBxboJ2wdgvzSrJrbpH1e5EfY6ENkuGyiTuCTuQ5ViZybYfQYBYBcAME",
  "key6": "2EgYgCRjrt4DqYyukBDG82L4ppSyBa779BLrsPZWgeAwRrWHwgaqGhtMNdSgYD5Y2fwFQiRoSFGGpV5rDCkN66FN",
  "key7": "3AKem5VXd6MzcEbKUYUyUhBZ2mt2JDJKYGfsNRLPeRhRgMw135JVEZC6kFBYoRDnMtrR9bKjwKSPDBW6HfsNnjw",
  "key8": "3yNsR67bjyi2ggzKYtr4rbhLh7PRb2c6BAdyUrNnWh4iU7yu1NSBLMiLCkG6QmYDi919UXxpLPv3Sco9H7psFWV1",
  "key9": "62WyZJ82PdoYQNkNtCDfhDcoKjQwtEtuQcMDpNiE31nCcF9JtQ4tJmoYrwSUxbrid6TQP2BgiUQ6UApyPJjn6QA9",
  "key10": "uciXJNjXy9bTsB2ZK7mBaoAity4Ne4H1GUo7XEXTkq9W9gm7YcaA6LW75JqXU9sQQsYpEVSbMMznMRgMBFobnfe",
  "key11": "3Vs8DUxdmb7cime9TLricLCHURAcQDaKjzChAwYCYowZEinrfZDy2qP6AmfSM5XAnH8UcAL1eV3qXXU26mT4CLGV",
  "key12": "3AUuXGzce2K9C4kna9dMP5SbANT5CB41ueWfa1BKqRJq4pzu8TJvMr2xbkTNjp17LRs8zTJLcakVAcZ1Qtsc62VP",
  "key13": "4rpKWYWND3CYdoJur3CixQiDkTbM3HBnrqbgwaEpyzAXvZV5ijwNUKNMSyAEx2pNL3uWqRjMLQP3NUvmtU8xF8U4",
  "key14": "5D5eyfZ8tAd7HYmDZfFTNJavxSQeRie3o1kY1ea9YQnNknLEaYMnq8PfYNYTdVH6w2BhwHB4WfT5hFQAYbw9vQPb",
  "key15": "5KxvWMa1d9t7SpdGjpWeu8An4XfBfbGqbQfi8NRju7yiusUv9pbWDk2P3JoAjTe4LLaXfAt6maSaVVTGqTKohysQ",
  "key16": "2DRhSpU9ZTorb7KMPUbBhaKQE245f7pUBBmGHjdzT1soSutVCzAiCk8B7zWKbZwAcfje7qXQVwS95LMZiLivR9j7",
  "key17": "48We7DPPikTAeSanv1qVqJ8hRPuDJJkhBrZGYq3qg9H5NXUckByLgok5e8NQ1wyUgfHCaidJtJK8i4SfytR9BgaX",
  "key18": "3oTMPGeYHKfXX3GNcucw5hvj7FkkrExqbSVSUQ9eWfSpCHWC2XLShY5AvELbgB19bUe9DzC3UPMxSa3QcVyaTSm2",
  "key19": "4L7UHnDMZvkKRauYUwMWtiX3PyHrAYRbxQ6NHP5evWKV94wnZotkgmjfTDvpwvcZ3uofhaANDaBuwr5rEGHBFrny",
  "key20": "5kiH8wqDmsSsqRSnV33ay3rEWCySEUJuysjuMyz7RKguqR7TSzKy3wofiWwRxzxnsTv5wSkUJoku4D7wGtasgG92",
  "key21": "4DJgXQtb6tGv8gCLHcyRXER7dfvMoQm2oKrAYngLuYeR35YAet8aGe1n8gErEPUSDAhdQNudX6beumSwEJ53Zw9n",
  "key22": "3CkmdRcaHFA2XdHCc8dmRe6gmTKAoz6URmzhkw4bE3JLAyz6psGEHHWb5z9arbWHnamgAevRpzSyLi6uoCn2V32R",
  "key23": "51JEtKWtQ5rhTQ5m2H3gZ34XWEv9uWjYxKmLHx7Xt5L4iGe7BSKeSVmLtoTRSVxC1wz4yvsmBAdet4mR6shzgoiL",
  "key24": "3fStfVGCvWZ6FijbGFDgiBaKSTS6uCXJrtrYf8pk16bqG2pMC18Cg9ibz94JTdVRSLnoHsSE3Xvo7dzob9bgggsd",
  "key25": "gmFXfbdegvjnVnWtkBNGjThbexZmxJZPuvcvVyogbDsRdViKEZKCJW7NF2Ejpsm6uyZoWo8UfJ8yp3BzoKyPhtv",
  "key26": "2syAK27vddwoqgyHi5aw2QrsqNwSU9RX3hjsJrSPdSxcHYFo32q4XGT5uQA2DppzKB3wg1KDFbgEk9qN3BJfS68K",
  "key27": "2ar6VwNvPSbtuoVH6SvmjSwaxnu6jEHj6E6MdeqU2GhDDV3f5RgPCVrPcbMuq25JBDUCQnjRs7GTGX2BmTbUak2B",
  "key28": "2ksuiS4y7FVgXYhxyadzhWUSu8NFnso9myHoB97kEq9un3GRtcAAC6Q51exNiHR8uenqxMVBphUVCFXSAsdzwuiX",
  "key29": "4znpKnLNVhzckGduJUTBYvjCqfSnunH7vyHYkTX6FoevhUNPiyWgbBCKXcDWXDZaHCkqxpb1j14JB76WrBPCno7x",
  "key30": "44e5n66vabcR72EfgFNbhj6UnVf6sWJQS31toSLP3sfXLTHkeZfX1jwCdAEvY43SMmLhHQyKNp9WQVTKhNgk7XUp",
  "key31": "5aLBtpKycMcuJD8CMWK8eqex2jz2TiBo8TGG5czxqd2cC3mcMpkiQumovvHcGZyDvocuh6qPzz7j8oRUym2J2j7a",
  "key32": "2D4qtDsTmA2WvNQewz3SaE3vRQnYb6mHszXbSfz9wAeYBVdaSCRuh7CdVc2wAEYRvSWxcQa3zbadaxSzxJU9Go9S",
  "key33": "4kNanW9gdDZ9CDvVkxZJhQBai7dY5eqoTAVgEQkT8CJfabrL4Xsx86vSnyEGiEQRCbbsTkwPGuQZLPAe9gbXVuxB",
  "key34": "3HFF6LWPquQ6rCRzxNRHrTMBXZq1Nuk6cmdypw8aHwwSVKqvYby1tkff5RHg1pSpCX3WTHS73LXN4MFSuge8n5Nm",
  "key35": "MapCBKhYmUGtAcDhbTTeUy1XJh6mooFqeT2ooU39MUGfaNhXFuNUePRrWGEeYxP4fAG1qkLc9cbLcGm3bRXhTYZ",
  "key36": "3XBYZWHeC6YAqQdHwUEwkrNKTXxYxYDy43j9evzQiUMvM7d3wjayhbGgJEYqaGxkndZG7wULc639JbHruoNxtSwU",
  "key37": "2ZUtbwaWzMcZow1yLJ1ZpegHkv7SYrKZ4c6DhpJCbkt7dHNX435tn5VBnaDK4R23KJrVAMHUkiMhUkzSkLoQ987C",
  "key38": "2L1UZPPkzcv7v8SZuCLGd55X6cEHWcpMY5PpNm6JT9Wkf7pd6qP9NNFBrf1u6Nhsakr2uHA6PTPMRRWGkFcDH2T1",
  "key39": "37wVgLEgFfUAaes12vULiLnAdvQMrFFSvfuAQByJMRutnHCjwWG6TCWuAcZ5Pb7f2kNczjtCu5ZDC2wt5KKxo7FL",
  "key40": "4eP7bAGNHZwi1y3WYgdcQvWLPubucj2rSHvyZAdL4HLwVNThwKXrG6fBokB4vzytBfUB1Dpg59XBADP6aY1rbx2n",
  "key41": "3MS3xCp4fk7tGSUZFXt2qM4rf6sek3Y1digmbjdaqPCjz3uNXaTVhhsBf6pagaDWN4HEit41sGpnL4F2N5YwYFa6",
  "key42": "3cr2aVNtHbjPFLmDYY7m18RrwVuHvEByuD6E6ivSqZJQPmuKm4tgEZJ5WhzjUMw3ENrR2YD5hHUMwJ2QUU7q1ZPo",
  "key43": "2tqPRWxwxDhgeVuAk97i4GE2amVneHqstH7zBSVxdLxEvSyhd6ki361qNHYryxW8meP3MjSxkJnjgfzMBk2d1ibX",
  "key44": "3GiwFF2udfndBC1ZfWFsfUFX2itWMzr8RbyaLKbaZQn6CNczjYoYbBi7D7kpaamfSStPygjrd6PwYxm3FuWsEwrJ",
  "key45": "WMAwYG5cvMBCaTSSVa13uXvxLPesWznicXz6SEJHJQkU12aNq7fF7Q1Mfuczw7apgp9kN1xPA1KHtmCM1KKTitL",
  "key46": "2HxtY2wFE3o6BcexBwXJMKjoN4w3ZxesyQVJggQ1ceZahpEhnWfja8PmCSzgXSx2rUL3BeKSKJk9BsaYLdZ2CGHh",
  "key47": "3UdBHPX4Q7yrp1nj1hJKoN6rpCbcHF5WqN4Puno32UNyYXdFqZGoWnvhAg4aMX6NqNj2h6ahnDbKB8bc9iPqQYou",
  "key48": "32tJ58CzHKkP9g9vCDoMco2FkkziqKVAoRN3FrCWsTREoYxViT1JoNmEJKaMu8XCUdoE2y9fmDodcJGEM3Q9wf5V",
  "key49": "2a7vfjyjYJbNfcVd3L5QMBz68gEW1LVAK5uFwbT463CXU1BT7o3BkxBUAQUkuyDPGkBoPV7GHKsLyUVQ6SbxDAn2"
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
