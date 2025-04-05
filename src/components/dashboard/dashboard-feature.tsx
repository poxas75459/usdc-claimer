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
    "2DSGprWzsrNdNXJDgvY6DV7JFUREyg4UH2s5oo6YiFUnbMjJLxcP3FQmyvDMQVtTYtUevBMWzKkrDamQfhM83qJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqYweJt28TP9NEzJbGDuyFB7L8SGHjVSeodvWBVfy4njK4p7P2emeVUNdiqJLVX2aJsV9JRmSLX9JTGEibznbTh",
  "key1": "GossK1frE3ow3PKrkninTZSKFsevTKiNCymD9qucDKQQER51FguxpbKDg2ywnSyo2pNk5Znfxw93Aqht5az4oVk",
  "key2": "4VjXWcDP5wfVkc8V5SQkMZxHJ7g7jifAo9GiuDUxmfDA1fxT82mZGh4Jzy8nncwBKWZmeicQQs7hdWmp7Kk24x2n",
  "key3": "4nBnXu5H8ET9vKHzhsc6P9EdLxfLzZg3zDFKRozds7cTRioEHqiepj4o5sbkNPciVeVmkZq76UKs48zqyVz61hr2",
  "key4": "27R3B39qzcatKAfABrs4PR1CSbLiuwBqVRuaEcLVMGj5sPEdWdYgyMGDVjGHEscKNwgpLuGaxEZMStRfuVLxkc17",
  "key5": "5REJp4uZfdpS8k3F89WS4Q3vosUN92uAAMCHuBZXHzBJMc6Rj43A9kvbQjMf76ZwPFzQ6y1uts72sWTeUKYpjcR",
  "key6": "jArDk3F85NSQmBGzZgTFvtGx7cAyeqKr3BgDpK4kL3yMshs3WwqmqXkaPGPkvTffYThq72dJ9eyQgpjy7pv83gZ",
  "key7": "X99yA9VjJjTcNZ4ebyz9zRsZQtaZzEQhoFzmiTKFd2fQvKgU5orDqm3W61GEskV9bgdzieEBgX2wiXbQWEPinER",
  "key8": "22vaoRJVZ2DcRFGrGUuVvZzha2JZ7bdHoCXud7sUgupAqHA91TS3sihZp4nwuT5xaq2yPtWpMHJ842E8TNSqJGtt",
  "key9": "25MPtVCnExkzuLERvQDh7EREgcz9mt9bnRSo4iERC9FkhD673Kf143isZhnHRjzHc2Rcz2eDgEGjiQwwHXsYkjFo",
  "key10": "3VMSGsevLb6birHqJRnGJxEzKb2pXKa8tLsNbphpmEd4iTLEFS5bRgSPwm3xLB3Fi7wa2PNn5CYLzWC9wU5beyqN",
  "key11": "5xr46PihxhSt4Ch5Pa6R4AF46Q7t8fu8QGRCHcTms7kr2AGcwH2UMSafJmTNYyj11cjLTuMJnPReVD4oi5NnCGF1",
  "key12": "3hNGihyVfqWwabcywD9MVF5V9Er1XLQz9tQS8VbKcNB2SbzwZjRNTfUYdH8rPqVjxeBmSrNQYvkdG4ENTF9rBpet",
  "key13": "W6paYEgtgTVDobUUu1V7oU9i6MxVdNyFWBZmLLshgbpmcH87Bmghi4jRibQnFVDhHDwwjeBEaXR2NN7ZT5yz3bk",
  "key14": "TuXEyf2XepTBoAJXKCyvH5gMsyebepXufDQJzKjQeGN5rQh3SCAPD4NKppkYk8pC3ammxnBiNu8QehYyxUNovVU",
  "key15": "24sTPX8496ctEvD6yaYdqifDjKoBXpxnagZahEo7ufLqMvwtnXeZ7QMamSbrDUMaYGxR7VXoa8q44pL54bJSWXrM",
  "key16": "2Pv7hRFJuFrfuabTaWXCukKL8n3X5P8QzYPczmDodWcneVfsccWqcLQord4Rr8kEtXRQgfERQND2ogFUBbSYeAzH",
  "key17": "4n3TBr2FuZtrHZhVUS816CeGWdRbW9Axg4iJmRjNuf3trpWuJePAoenXwbS6ToLJQJQsmcnrePFiQ6SefiApYAZf",
  "key18": "29AD9Mu4rMRbwmo7ooq5K6oGaeyjTYe2UhJvcxXGLig8EEY73jhtrM55PRaTFQ5eCWE2CAVpbvdDKpyHqo24reRZ",
  "key19": "5DXsfCbR3QLUm4ndPsCGkku7Uw4JjVPNo2iedJhSXiJ2GXnHvLcagnMcgiQeqB5pdd8KDbb7S8txaATKEp75pgPL",
  "key20": "4xFqTidy5oZ6L1rLvFHm22jWqE6kvQNFoXvDudoKQUipFwHeiGjTMmF2tBcHCGefrJCBkrV6vjBmj5N1HLX97scB",
  "key21": "5HztVXFSdLTYgXQST3vUbcF12Y2TKsRnNWK9jFyNPVTWqSRT22dqqg3n1TsrHu4sNoPR11koHYVCQz2pF5yNsDBr",
  "key22": "3Hbcq17ZWqWXoH7rfhoMXGaFWgJ6ExvLACLYLNVsGfQKYRS1xBi38NeJ7GHVYoCTjTsGdqNEsECbaEzm28PTJATY",
  "key23": "4yb47Y8pLa8LcrckLEW1Kzsc2bCWVcTATiiQfGhgBrPUVYxBBcG3ZWBAgCfnuRBVthe8LwQp4w1VLm1dMYPkQMcm",
  "key24": "Yvq1mpZmjLwA9eX8bFzBvWALgWTiV1GbRi3ifGMcMk2FyCtsRuoQ5mfUdbCw9Me1vkeSjUMuB8m3XB5AdXVXLw2",
  "key25": "2phB1JQoHmgvEPC6WC4V8LakaKEPXopetvnWMAgfP9hqyy5hdWiPpRXzs1kPq2VaNqniak4HZJJgZVdHY97zAVij",
  "key26": "35vAuyZM4hjmdW76c9ZSeLCRJq9bwDqJnpkNfoyEo7tMf1cWGBiyYQH3YQ2UyRZTzgjrEPiApYVoGan3nsqmNmFA",
  "key27": "32aceeb5yEmBbSyEhSaUpP43s5yTJLgBXv9FomCtYMpHozF3eukMmN31uiiHeVzHKC916RTzvRGvgyR3LK9EDJDV",
  "key28": "yhukYowmbi9buFKX4fJ8GqJWipfanheuGiJD5YeyKrPKRxScC5AbywxSUrUJ35aHknHv6y3wPhhkr5vGJSEdRUe",
  "key29": "2t6RBQ78jk73HJHw2wmg6S1AyV4gjABLFczyCBRgFhgdDtFTRtf6y9AQkNcecZUoiBDNtCWyJGRE1MWzZwzHzTNh",
  "key30": "rnkHxrQaUGRcdmTMy8ghNXCgQMnLxebdyHkSaB7XaKF78xDvPV6iAzg7YAFcEHkJjfZ79D1wcyg6Tn2TjWnvYgg",
  "key31": "K9JPuKFSccbspEXfc49XRjxEip7WerVfWw76ZyHe8qn1ZAGnw4PjycZbm5YSbai82rEXkbkuG7iD5fdZsfUAmrA",
  "key32": "ajwZ2q6pbjGwxD5QgU3i6LorLyfEF8h68CiiAKdHe3AoyP8gYHxGoenfeVguPmqfyR5Dy89GWyUBquupdQd9zjw",
  "key33": "3ruNMt7XHgxb4tuoHWsTQ1dE7oZ5Nm1e8LaYvhqEBwve3w8bGKfi6rxQJWnkE62TkWXFmHSgL3jxZX2vmGmiSfPW",
  "key34": "4NTTTzrJGSanHNbESH7oPQEekJMAGULEUEaN77CKyD48nJ5DGeWdEh7kYBSLq8TbaJhRC37pQo8LNigpDi7uYCzx",
  "key35": "4KbA7JqGTNqu7FD6W2rQLBZh3RaQg4x7KEWRtu8E6szYuJb3VdZPo2zFyprcCKtPT6cwXNNenZdx2AQu2t5bNMTB",
  "key36": "CnBndq1TTAtzqiy2D7WFAKrqqh7PUGUwebUAymyjuuQmt2ZynruQ9fkyhhyWutKcMkVRwctR6cszCfyMTFukryZ",
  "key37": "24Dfjyqi8c4bYmjXgcCMLNjLyiDjunXFhJ6T2P6KvMBaD928heUxgmY59qc4R7fYU8j6fJsinuiioT2QjCVLzKrt",
  "key38": "QvoqYkCphyHeq5GnbFbtqWKCoYwiLmhWrikXhWLdQKLopTaQfLynB8PVYjKhhLAXX4UHSUEEaZiixNTbcWxaj45",
  "key39": "jMjxxu5YaN4rrtYzyM7NisBdFXoqmCcEU82CVxb1GTA24CSQXhiJHu6r3YntHeDmPvUFN1jW1tY6xWWQjNrt9nL",
  "key40": "2ktrxMajdGryKX9zr4pGFwnPHhxhWxyzfx4M29i4TX3SUbyjFFEQpMrXU2neo1zqB5AuvbXqXypSpYy8h6tWhzzy",
  "key41": "b1ShBz4hpfDPjpQ8FHzgR1MPa5etGdzGBeJdsHPoSB79T2WJdJexJK9oyQk3PjQokW6ktZT5A8ERE9fNTzZpgDb",
  "key42": "4XZpZebxWV7k4Yz16eHGZ7JbtVA4cZun8arzNXau7wLExMK4R7ENRKRDTa3sGaHFsGmdU9Kgj2uFwztxkGaXW6gv",
  "key43": "2M6uVF1C8xUh8jLdnYahm3DPny4e1TBvJ2Vv5aLJBg6bScf2LbmkhNkJhqwXFzGQXrGhKoNqZjASaPCdRm2zqMN1",
  "key44": "5ZRDViJfZY14dMHMbe8qMyfN3LYJhuyTMA5Nn2cfL5p8CNTxx67BLubmtKNb8NRgNYmAKvYwyruayMu5skNoSt1a",
  "key45": "4MpVJwS5it5UBH8PfySXiaG4pDbcno2urdDDar4zdUHnm2yCsuRmCLP1fDxCG7TJ6Z3XDGwoEA5MejcS8M3YuKKb",
  "key46": "27dsiLLnJuM6cH3kAULH4JUGxPkbagN6XBDCogRjFPTXDMRuYDiSALPUvbStA7END5wkhisTdffK533xeBiyHbpp",
  "key47": "mGJyxWjDqx6k76Z4WJWevqhmMkraneQKZ28b7tB5DKrg9yvWhUjCRj4kfgVNN2JmekE6eUmdX4r5Qopw663mECy",
  "key48": "29GdKJsRBF4PvQ1ehbxwTf6pMuHDiZBhVjkgHfWdkjnkvH9h6ejtqas2EAZko9UzPGwMTwhxZedKM9TKCBEr7tDw"
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
