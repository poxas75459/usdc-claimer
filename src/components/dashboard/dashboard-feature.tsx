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
    "5Y6YxfuVozXnwtFxijjvuJ4ouwV5nkht4HdJFkvowVGjEK3f8wpYBGNghrwtRhjXDePBaaD8aJu5GNmzitKbULnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9huyaP5ph7ejWSo3PKqTUQBvsuyrTYH61j2VFFt9VAkXwsdaxDAh3ka4zG9QgkJwJGQ3ZAZ6Vdc8jdXYbmDTiu",
  "key1": "21R9Wc1JfejTRJ9iS3XzREfK92rK9xpCGjioxWUFwAzUweLeMSANjqN8jPEpow3274ycf3LEEQwegBzP4mR3df9g",
  "key2": "5K1vrdzByF6yLF7hFS2o74VPgYr7yi6274TxRMYP5QJ7aQL5vK8DexQNRXwemyMAafiW4CKeQGpvmnP1sXbDr8Q8",
  "key3": "659jqns5DEj5ejmxem5XWudBYv3ZWq7gJBJoDFwZsCBig7BSTtoSEd77B8g88Df34fZEWcKmpLt4zeAYd6qqHHi5",
  "key4": "iw4RJLqt9HBTiXVrbnvNmPbxnavvv8mFSR5oUmhLdrvMEtWEAFW2d8qg9Zn4g5rqRsvzpUUcDt44VfD2GXs8GFx",
  "key5": "QDAKwW5kLxw1jqkdZVvEZhkVPrRNrgRn3RapQHfFw5w9fqLpizRNhxCBV19PXwSxui8MRv3TLDictcNK7tMkStZ",
  "key6": "5HR5EQwhjWfGgEwyy71YMWU5Sz3CD1uRJedh88hVBQJPUM4Kc1j7MvaqF4V7HEawocv3qerSzowkvocyHdt8dWss",
  "key7": "3s29MzBXPbBgcnesCHjYEmvcNy6kkXiwqJfSN2Y1bTkesFtrmhNb5XEYkDtdgH6qXwWkSt8Jrnview7Z2iszBguM",
  "key8": "AjxsfdoW33PAsVUSGMjKirQSV3TQwt5rGPKuaEhJQdpdjyGtVH8oZTQtKhuYB5m47vmqNKFJfgtH3kantQPr8xL",
  "key9": "DDSU4B1HR7t7LAjwDQme47N7AauJZGyex3ANcaKWoY9gTwBoWDAYYYK73GozZuvcFy7PgQZMpE7ZDhFpwApTxoW",
  "key10": "57zphLhJd8FsbPKF7MnGCKVHtmd57cU4xazAWvgPB2VsJUWQoW1snYLf5E45WRgtHMewZmPvuVMezkLwsoEtSCjd",
  "key11": "5Pe8k7n24RM2qq9fF1x6TqrCcqwz83PXSJ4JP9QwrjCJkrSTQeaAYHRJvVLT1JRqcyndwwSiZXh2dJw7ADcbTgKo",
  "key12": "3qA7XJuh5pTWupNe17PtsxY79jPzt4U86Pe7FnosuLpphjibdaaj6CCHmkgJjkBHJwrC1yqNAiSxsuMwZLddV3yh",
  "key13": "4g9Lqq8D72mK2NqUed1ZVaiRc8funyMLH33itaybRZfGjdt6FRqKLjZgBRBiMoZWf168yvXAAHvjvaYExbjWRyKG",
  "key14": "NzKBkaGkgAdBoUBqxJtUVa2SoAGc9Pf699D1qss3RuVVdMBfqHoS98vq4hsNPA56XXTrvK8V4SsZiVyhG8WUGA4",
  "key15": "67HNYF1thoAZXGjhXFxwYP6GiritEUAcAuePjXCH9ZSssrk9oh9jjMiHBFhETFMkF2B8HiF7cXkrWmNYj1AhqZcA",
  "key16": "2cShYgS9BdZeACUBLQL8KYZbNskzmzZ8Sop3P8KKj4h9G1epFPxDKww7kugAPpxvyy2ZkCDgWpCL7J75qMCD62Ni",
  "key17": "3Rco4fo6hMMU5tLSvbYkevDSLfSVjej8GLjo8voudAXTRFnZEDeJYaDH2Lthgr9jv4xWPTTT3m4fuTbPEQCqLrjn",
  "key18": "4sx3nx6RJvKCjCGN1PKrMjp7AMtRK9v4eVrJrEbhuZGNC5wppPg3SeCk9htjjfYELdbs1w4bxWtEubN8Ws6YmBQW",
  "key19": "4ZR33aPFALomjSwiy949NvdyakVxMYngeeAZRCSRNWzDsR7bBkvf2cYmzXdpkZJyrb5PCse5HLRmLH3icELUeNaf",
  "key20": "2QSkEBaXLFB546gGtvAvn4Sz5PxEknfpScH6hXBPFbKyM8WjiG9dPzZw6d35Y4on4UuQr2dkhNGiSdViNkDGaU1F",
  "key21": "3GNXzu6ttLxdnx4vC5vC87ntnPCvKUQMYrRn4A6pSGqNN18oUmH5giEmvYYJxYBibyV3Pabc6c5yScdfeE2DTQV3",
  "key22": "4sAxyQZ8dqubUPEwfV3F93nFkwSLDG9zas3ALtGTT3wPbfaxap4PAHM9mUpGjAYWDgCxMbkJ3PzXWTJp7cKghuz6",
  "key23": "31vxqVMJ34NcBr83TfR9qwiVBkJ6YiYF8ok1CsjpMDSrwohbeAR1V1q7MTqVMCbYeM7oY2pBBK7a1iVBzSaSyFWW",
  "key24": "4HsNgcogRQrmqfTpzJYGstTgKHbvCcUYixwwYrgRkKSRNz7Ntc2efxuCpmMMBiRFiYj8cwF2SYLabieoxHWCNCU3",
  "key25": "2v8DZN58AaZLae37xFGsdo1RCHfH9bEsJ61csGc88b6qURytZamcJwQJFBSC6HFonr7QB9Y99ANUEbDyySneZFFH",
  "key26": "3ZeGYus2WCW49XA6J7eoH8va83NzFUAJohijaUc6uvSKA13vZLRhQDMNKNYWeJ7xQX15WhmbsUcFBeYhNSYED1gR",
  "key27": "2XdnRbd4UUhAEeUGpC32xx6bS3gHDdzM8w4esSpUkxBa3WeGhzaiXG1orrKK12BjhhrMTzZPees8DuWtXwPbytW",
  "key28": "35R86T4nvqvS1g1UZtZMUGM34DZWjd5qt8MbfmuJtGVzeGGQGj28QAjzqRDYrzNns9oLkFK5pXUCJ72vEYzrC56a",
  "key29": "Mfq1ivhgH6nXoBtgHZe3fca8aZek7vRPreHKxw8mjdy1gczdHuFVMutzh53mKTFQL6otKN4AF8xovMuri7BpbuB",
  "key30": "37XAWsMw8mBGqxrxxToPFrJnk4fj7LExb7Xupdj5G8MTKQXUoLv1PzwnYgYxd1JEHpjGfHgQRJg7xFXWS5o6hgPt",
  "key31": "jueeuF911WowCgayP7T3SYAive657hXTfQjLgkXVpq29uyKFVDVwBQVjKinyXUKHregUjUrNAzFDBWP1Ag8nQ9X",
  "key32": "56KJNbMe5P1tEpk5Hcb9vYGKgGuJAs4CnRoYr1rb57n2pAJc2Q92Z9LeH39HQkyZtJYEeU7nJtW3DZBaYGZXhHN8",
  "key33": "33FrhYm841E19p6eyL7iYTVMkCaM41qtBYYQ9k1SuzPSs1HYxKUdrqpqhyrt5mqxMnfMaxyUqZEjV4Dpoy1FWvTt",
  "key34": "3CZ2pCfgzFhGhPKnjvRFyyZbHfGpsAR3jKAnuDvGvXDqRXEv2DpuSmTWUjnaj87VXV8WXLiN7KAHptTbcT5s2A8J",
  "key35": "sNLSt8J1ZH7L2Ub3bFYpkwBHEzEPycAtfuuuHiybQtjneDYPd3cY3X9MLk4erAGfFfLVctVP7BS8qbPgxFeXtjm",
  "key36": "2ubigX9omQzkTVZoH7XWXzgQKcjvCLn7yeNkGgzEPFanXghCxvUyr7c951Y2UKdoFGEcs3cYpGMpd4p9jyq5tdpX",
  "key37": "5kVBTtw2Ym1u7yP34r2Eh6MUvp5LXPeL3quqxMP5TdBj1rQJUAJDhvXqaM8D76R7HRqdt6iKKzZ4XkHvsXpy1GDN",
  "key38": "4TST7gtravNKMaFXvWrccmms7LQRS8NmxXVnBsLhrZdiRL5BNz3wucuk8mgH6N1uFsSAWu9U9kNrDxvHrLXWYLdB",
  "key39": "58BkhZfoKBjoQrCc8E4Y9HYiLBym45wnZdzKBgbN72ZmG5a26TRGJd7QsfGd9n899N8mMURQvrfVJAnPLQXWnvyb",
  "key40": "hCBQfmJawMKJgNhBHUc56m7hDGzqH4XPqJkjF9Aqmm6e5oUunCujpxok4D9gFsCSNYWKnALePpgcw38Acc5nCXS",
  "key41": "4BMybKsajvERvh8eu6uvbJogfLg9NBhi7A12KpozDhDbtvNp8H9eQG6rV6LJv2xXZHXw6ArBG8vz845zo3Yhcr5J",
  "key42": "5gi32i7EjX5ZLqBvkUqVVkNcRbHdACbVDnDF3TWrYq47SUv4mm2FuDVPVGmwzK2gi2MQ46UtAxwpoTT5wSuVNFDx",
  "key43": "4iSxppoBdwJXimJwuSfsGLzvbGGsomWjqeYHYLjp6tDWgkPsDDdxNzmmvbN33XLR63Xme29TzBhNEy2dgWPHM6a1",
  "key44": "4i6BwggaYS8C6zeeS8xAZPJs1jeq8qPZZQBTTAUM8UuWuRV6hMpQmgpBoTStenPGAn7973bKcHQKRAwRzmx6Ybwz",
  "key45": "bbxxThBRdXELBkJs3PwfSARcCRrv9PsUCryitip8aQHEiBxM7qwNAB9RkWHaBg3BLRZm5vydu4rZydsFsdB5yby"
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
