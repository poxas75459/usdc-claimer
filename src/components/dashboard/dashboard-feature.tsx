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
    "fMMp4QfqKnEYXZb8Va8pCB4wKS6Myd9BBfqbTTz1ZpVk5WUfEFPp49jrB9WJyrs7KrRd3U2CUV1NEWyUeJP6oKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vSSkPfbZGWrUYxzEZMLCYGByEoTacT24CsT1iFdJ6azsXexxnmJTE5pFdf4zDWgujriyMHaM3bJ6bmhqeD45Uy",
  "key1": "3HPuLEFpLYpVQSYLZ4rX4EKFfdmnimGEAvJeJGzs3w8tQRT2dzVKmJuyRw3ApKZythJwxDGpkJsgjaaausRWM4Tx",
  "key2": "397tqx2iwdBxGJCorYZcAYmRtmtWDK5dcWvekmRyJabVZ8ZS15huei76R53GeGo3CNoeoZwkHkbS75UNGn5L5hid",
  "key3": "2TG1Djyfc3CVFD43bRW4fGh24kQtebb8rCAsQP5Hr2uTJytTFTHGW3TFAD9LqngsC6rx1pZ1TrLHN6WCPYrjEfL2",
  "key4": "2BLG42XJ6kebxpprtRXPuuTAgT3LdXPEppaFDW6JpXRYai8qxgQyot9pQ8JUDhQ3t5M9aGBu63NDwTzwMM5iNq7m",
  "key5": "5rpaxkD9HsrvBUcNraWT1xajXY5nTVuiwAK7VpTDhn4pxsTYW7AfrxSTHGZxQ4fbc5AUHmHZHLQ56avmTMSMmoTU",
  "key6": "Mq1vwYGGoVX9Jvm6UaV69EEoy3yVKCyB3u4EWDJYHqKSSB2rKqsasmHe2rJ1LSGxoxES5VYYEoNGBzPbeNabuYi",
  "key7": "5euqViftDrCZgMXsWMWvnRsZ7x5uNXjBw8FdAE3W9Hqwejgesz795f66mu5EA4McjG4Rgeq68PBJboMPx5g4xv9W",
  "key8": "2urYw8uVPpCoWVRCjRwX6bWmpawqVqv1y6jTWBdqg8yWTkcXqiAAGZmwPU1Ukx32k64PPdWfFVfBbygjESnAWRn9",
  "key9": "NREM11Jjvu63uzpH1NmTDYi8AXfbK9yuMjnGw7qAKAyz5PzXe7YeVBSqP5fLfmq1Fy5a8QC5yWMQWytejiuDy4Q",
  "key10": "DkNzQ1wdkYHAWYGgVrC3aKiMpoYSgBKmzHmqZnW5iD1usecpAm5d9awaUVNtxEev7SVqgs7hLCPyCyqpAke5L5i",
  "key11": "3rdkduLtYMYN5U4AUxJkyTqarhTjfLJaXeobu5dJ5T5eYYuLJkcWSV1UDeuYvXq4npckcTftDdR8HQafsERMDzEM",
  "key12": "2Cr32gubqEefwUDryPrCzPFagfVs1zrC2TQfyvGMFjn8zcZVAoLDx6FHhKs9PSJvinAcYrkRk5rRZvFTqeoQGdHt",
  "key13": "49dkfuokrz2bJN6vAsmAJD8RSo2RJo67UbEt6qyuTPCQcvmKRAAZNs5j1Lgk6h7mTxoeZQYEPeB7jtr8gB4UkmDX",
  "key14": "3u5ir55rtQHQorhXcRzHYDCaitq1jsaSzd87NbFJ7JxqfdcJDipaMjWNH7homHeqXNGsJc55ftFUwW6fk62dsE4c",
  "key15": "51VhLWPN1x2Q68Uvfzf5a6ibGhdQ46RiDgYxs4urm5sEj5F8PDXuZymzSGVR7DL4E3dsFvn3WkUhdYV6RjvpHA46",
  "key16": "rVEVkQumbGKoroLSMrkUoZT68vs4H64zUq5QVAgCP4hsz6DSKLtduZHFoGzrVAuaRsnMY58j8jPhH5eNt6f19vV",
  "key17": "3WE8xYaXhYDA5AeqbnqzMVFD5XEjBfWUDLZ6Z36nfLjKCQssBtKq1PvgrJZGG8bHuBiKhaaTNZ8QdcQnfJhzD3hQ",
  "key18": "5R3y2Cwg9aAWXtXNFVX4kYCotnh7UUmMBahfTXaMEHSjtdLjmMXPArcMP8nAnZScvApxDedRsF9nH5bFAGkSzWGJ",
  "key19": "4Lmz97GWWHPKX5NPwukCrctq3HK6dFM58er1gPpUTuuScfkcHsAtL54gxb6HexXfb6UwEWzMtfqRME6mB6uhqTx6",
  "key20": "5EBejajV9oE9Diq82Vddkptme7nsPX9WXEu38KCoUH3P7abqAcP1zE7upv8vbUqrEWULpjqX56WvHrmGAweVxvJj",
  "key21": "51TGS1NsyGo4Wx8mTRCwkdiToVkyUNKRH6qiB4xi2unfCyGHQRb6es5VwzWYayu9cJhAhNu3Qso5WPg5vwuNqfdX",
  "key22": "4t1FrUozuaBZ8FzWiHqwCkumqhK3hfPntNZaYpr53XLjaUHMDz6CX8YCMGPR7gNBQNgDSggYSyZDcissfnNAr2w3",
  "key23": "LTiRrZoJNDKxeST6S3J9LGUTpJa7VWiPCnuBs9ByXFLb8JSuUuuubJQa7KhpgdjgnWDz6bquWCgVxr1N4HexFmN",
  "key24": "2QGrXjqJ39VZ9E8gM2Rck6yUpyCHnM4D1jzFkuqZQW25ViQf7WS6eTH42KcjCYWMZ4iw1icDT37AhoVeqxX9kHdu",
  "key25": "4rKYSyYPC52YjBCAV4XAwg5za5TPMUxTyp7VpLUnAWFQyM5UZeDW9grz9DhCWRVQ6nL3wnNApyLJ8humXECGE3Te",
  "key26": "4fsmrnALZmGuyARCcHUYAeFs5fosWGLFDtRp8SWaDwhNzmLHWQPinybWbwVeqXZhFRGrUHPFNcGe4hrj2GwX6ueV",
  "key27": "3RpHEpDGAxEcuUumWyLYpWDQNrhVmY8LnAwN6swq2ZS8fPrHMZWWkWYY43hdibgGqS7CRdcVCdeHsqg4Cp85nE2K",
  "key28": "3j8h6N1CyghsS5TqKLjiEVMWSjASsCuVNcdA3DbvsppWBXQuEdczvJBpm9v2Trzu3AJNYBgZQopD7MGwiyrmKpKK",
  "key29": "5Vrew1EPNHb9iER1TLQ8G3zTgYrivrMBMZRDyCidXqht8PxrWd3exkXC9TUfpLE2ALWvQKgRVonoZDkDHFH56K2i",
  "key30": "4548wrpe2id5DkutsWzw7C1nSvSXYVuMUAev4QvJ8b18EyXpbgowY9hbLHfV5R8m5dsxQinu6hYF6nRTGS1KaLBD",
  "key31": "53GUsAqiGzbq4Gk3ow38kdxngb46SKbFptoYdZf5h4pgGHfrd5NRmp8HVf5AG33wco6RdcPr6dfBjcuRLYmWgJwg",
  "key32": "4nfoHnEpT9GgJDUoSgEt5nQzr218bXaNHvZaUtnbuY3AU2TEJFBT9GhLkr4k5AyoEh38SChHVCznp2dny49UnPPR",
  "key33": "3ZstDRfhZ911S3kWD7RyEZ27vPBFMSp5oN1jyctnNwy293A5MeuPkaY6pazDVks6UTGqN1S7oUePp5WCpJhWbEAw",
  "key34": "5cinJTswRioQctxG4nUf19uWFZ7EFi7rb1fWcAWwLqMHbaiuxgUVhxuqA14od2onjApM11k8hCgmD17QENf16kLM",
  "key35": "KUpm7CN4rtaF6bDNxsRPzkegsPb2L187DsjbTmcmgGhd3o7A6TFfUyoxemBz7go7wHjJ8fogNtX3kWbeBoJ5tgG",
  "key36": "3eXBuJVJ5bsx9oAf95TqoMDPcnFD8AgX5NmMKB27w4ApHi3d2wm1wbkrKouXvCJmYpx68t8k4To3GgGrjRjiArUU",
  "key37": "3y5Gtnc55yeDXoCVN2FioJEkbLcN19nLRMHdQUkwjKie8dCPgXy45TPCZswxDLv2sfHJX37GgdjdqxD1VgYyAWNy",
  "key38": "3RBKGwHgwcZgyqEPKawahNftHUPd4Qm7ZfCxAukYb9A9efd6J8RxnaGPKHTPnu6URiNdUcZDzvJzWp37GjkecW95",
  "key39": "4B1JP7j1LwC2UBKFYgcLFkFZ96kfHtkFWy8V3zEyBZ2zJnjyJ32sBfo6dLk5Dnq1pYjtifrBLoQLe4TiadaavCLd",
  "key40": "4VDFPiYmJaZG5qH8erAmb8vjw5SJ3Z8x5J1sHuar7BCcFZpMihwu9XrKxMwk3GuocBK8PReNwZwhVSCnnDqPxKNa",
  "key41": "2QGKmzWZ7Q3BqqgDRrUNGQuKKJKMirBUNE8R2XJnNJzDkdRRrXRZDQBnCYGnodpk8mBqn6SjzN6e4eY22LYxgbc2",
  "key42": "2Mw7BCwSVsSpGjcAGeXKArW452w9rwYqwPrYey5CXohocjjY3L31WQRCW86zKCqHMEkxe2gamnL8WvBk6RSwh45E",
  "key43": "5DgHyYXBLmSgUbtLFeWcoraWB9PWwu257Taww1zYbdRiHRDBhWmozaGiWY5R57bTjnbY8BGPvPrFSAFXatM4nrs8",
  "key44": "2jMWJjf5XMwmZ4vjYVGMfJBc5APzcuMVoMcbSapqfMYGs3P3txUMssJbckE7LTVkHVfCE2WJoGysaa8Vvy4GV9j2",
  "key45": "583WA89FjkuuHMHN6xDSLGYocZgpQg86dZZjTuVKGTEXEYqU4vetBZsC3BgHC57xyBDq2rWFYWPeTwRCiqr8s3B6"
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
