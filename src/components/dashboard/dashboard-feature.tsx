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
    "3BANm45FU4e6v3RfL3Af1t8Lt5E4d1CEpHUjCpWFKMLuEnH3oRDHCpZGxVPMAUdR2xF87z9XT8hmrrxucmoAcPYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35sMqUReAuLf7ZNmvAKe1fCjAt4BgYUHdeq8WQUMLM2hU6xDxSu5QmBp9Rj2edUMz4MCRetwg5BZR7sobZsSgYKb",
  "key1": "3vFCjmWvcRF4X9sf5YVTrA2vsK49aLFCmCM8bteM9vJm4RCbyz3wQ8S9FnmMTvTnZteg3CzD7dpKVmiiMBrMCgjM",
  "key2": "2yMU4cLPPrgQBSAp4rihNneLfjFpdVvKseSr6z5Ke9xGyNGZ5jLWrJwMrSg6Eenx7UmbxMhhdbhyVKGudaCwrQr6",
  "key3": "4XvtXi4JY879y6z6kKnqzJ9bH8xy5sGmCkKXUq4am4pqyA3BC4Xe1ip3guKvQKcCM2vgq4JzZwRsuqx6RyLCtTrx",
  "key4": "5XYKV8oBJSMgtLjmov6zgKr1SnAvbC5pjxqrVU3NKfbvKtkcmyS5XhG5oCE4ncqpXfHM1kbe3yS9cbKWpSsUmXQe",
  "key5": "2euTKeCTDDYoi8kdkvorVHrzUcV2iJioYLFZQzK3k4fALC7yxnFN9U2Abyv9Z2HZ8hGmyayp32YUTNowVU2UmztK",
  "key6": "3y7SakFZSAA6gRdwyhtHH1RAXWo8CA5AKATjAtabTkQHWxej5gheju1CSdYgZnFd2UgVBSs7hXdGK3eNKEHhbts",
  "key7": "44odg1irzfQgz15WXQu35afRbuDAR1akhnHFAk9t693pq3YoTnzqe6ymAGyYxRyZZQkwiVGTHxwqHgByjWABMibz",
  "key8": "61qGiUenSs2CVxihGBYhZoXACp7w2wk6mSw3Xm5PqnZjTLqDTWXiGWVyXoUfmeh7RTy2zzPbZMnp9MXNbsCPJ7GS",
  "key9": "3HMy1qMZuDfmGPm3Qksiqvj9jdLDtoA9G7VJ91iFAyjort7YrESMEniqHbuJHe7p85G1BFGPhHyYx2YTrEFsdts7",
  "key10": "4TgPJ49pxWm3CnQEjmS9KceZKkGgocFb3GvTL9JUucfbWakCQqz8u282GTnDrnHThgwW24MxjU475jYgnymm6MAY",
  "key11": "5vE2npbqfs5NNwhDb2oTFvb4mqNMaFr3tw6Ge6maYqiehKtpb64q2Z72CYWhFZryppQFSaPo5mN1jwEcFkTEmziV",
  "key12": "2ypwkNMeFEXptFzhWCr7ETQruQWe7mfyKiErDwqecJFUFHBTBsD9nmbbyJUukamLPNwXbEyhBdoyyodUDhMa7WDD",
  "key13": "5GjsYQUwds6GY955ygWxSxXRF7NkGXrkysMaRAbCkrR1A8vQpVi3KHiis2KAhinqbGpxjtzH28kWMp5jRX9g7noL",
  "key14": "2ybLPFvWdtDoZt6JUmV4HYa84XGHU2YobucQogs3NeDBFFGcyB6m8mACYf4QUZsCcFKLpDrE3NBA9r8Ttp49Uxy8",
  "key15": "3AwusVWXvedSQNEd5yXd7qp4EQxnTgqrNN529GsUafFAAoxLZaEqYwCcxhgoE6APHZdwEPj89fJZLVsinrsxA8Sa",
  "key16": "rpVGhLs1mc99ixmWjFMP3G9mfLaubtu7wVY9Qtca3pG1YGRF27VZi4nCcMasCuAqG5SxPcTsiYUj1rE6itwt6Wj",
  "key17": "3kDEW8pf7qTpnVWyaPnF82bfRAKninAfbG1Kqne9m5NeDfrfqdgfryNuEVNi5Xf5Ypkwgv7ggzoQ6cWasS3WSaMr",
  "key18": "rg7ifde7GTMSRoToCoU1tqC6SpdrGiVRS8vUfxKWCNAPnjRnDSLj7FKCQuobsU6hDiu2eCocMBH1P7mVMFfkBKp",
  "key19": "SsW43y1Q8CENb78kDjQQMjrYZKVJufB7RbaKReMvG1yfHHjyFBVK9EVb33qauQXqmnm1sV3jTghs5uvcRXLzxgD",
  "key20": "2t7MHcbyCvJxgqhzyaF2Si3WsFRfcbkpri5SaQfUb91jKKigUNQa6XBVXMbhqesyxJbLynwvYyrvnxZCg7jmTE9s",
  "key21": "5E7B4gBShR8iEGtB3kbTYhGBtyTa3JBCd9SVXyFrgViHgUiSuNrpn3HJpJvx4rRFR94ikKfZVVoL5Een3BgwjG6w",
  "key22": "4dqT98BmpTjGLmZ5ZVxrmqHSpVYGZ43VQnud27jSwqkMwnMfWTHiaKGZ4885n9rXg7sdxhCpsRRDRVCpoYgPKf7x",
  "key23": "43uxmr6KpC5iszzJor5Sz2to65rVSwmpU9Pth7gU64geg3C69b9JfAL2QRVoE8JTScmS8pjB3LfrBDxt3g44Waiy",
  "key24": "5v6cw4FDNYvtz3pWpKxfWCWPRxYVCschVwiYZTBzYZSk6aJyk4uPoyoCAuRHRduzEGLSQ4Bqtof9r6fHEsWkZecM",
  "key25": "wyzbDZvThfkJrn8huwmcBYR1CX4tLBRQvP23FUEHCb9HWp7n5Nhhe7KC6CWtQGz1d9bis3R2gt8ijWJANQpdP5X",
  "key26": "3va4CedFdCDZ8TfbkUfM2uZdVtSJ3XQmukKZTStgXW6QWyvRvsj36QGrNe2XXc3qKA2qsXpFKF8LKayRCveu5MbS",
  "key27": "2aBGGDrMnGGn1HvxiPnRKRB8ntXX27GVkcES8WdwVDoi8oTpQihAhG37uENaq1r4iRpTcsDQk5tVqmTEMTXgZEDB",
  "key28": "aXSot3WUqv5QPM8g8ZoASZWGDyzaHF2d53LkVWL3RinLRrwuFUDTnHLfLGCo7QcPZUy3niTtpYyoPpNsmpsC5NE",
  "key29": "45J6shLF53mHNfW5SUT7iVBSsN1NV5pjTJbDHEzNfu6F1MBZuwXCsU4d4h5UGaXxqjfumn66u5LzpB7TBRF7cLJw",
  "key30": "4oMCZUHvhRBXbn1ZrfyNj6NK2fKPXkU71TbXzRVWfwSXo58JekPvSNeRuFjSmRZEHCzsYBmpnVDdtY23mGoc9rdB",
  "key31": "29nFkC76tqXr2cua7Wm1etTEdCCuCjFUhfoWfWpi1EppVhUiah2K66ySm88CTSEN42zfkcZSn2Sumz63PN4yXapd",
  "key32": "4Puz9GUinH5hBiNfF2dAysoSvmMFZ3BLjJP3bRYTeXNDmQUvumJLWjc5zRBoZaQCJ3cBwEeXJ3UtdUCmNcMoGyDR",
  "key33": "3xKX3kvKcsvPm8D7A5ZLQYevt2GpHSitkfvTeuhSt7mgXyTS99r1duouXnvKekbcuhvajw67HY3Bci15LfG3Ev7T",
  "key34": "oABFE55iYeWwJr3ybbhgnveqrmr2CS2K3j9VFjCq3FTbGZLLQxF1o9k3dh8EAFDdCBHEWPHwWQkMj7PQG2TyMJS",
  "key35": "3374hHJL2FDsvqrysH44SpKVYHjvVRd7UwMUw5KsFt1ZHaEgGC9ATDMnTfBjSN8zf24scB85Y5EP9W3txEaNQH8G",
  "key36": "3YZ2WrZrgXMqhNb7cQfQpzGVgAty3keryUMQZegfobKq756o96cCmL22Nc4wN8rUkhM6BBoqx23mQEUPREGHkM8Y",
  "key37": "3XDpfxj1Qxv3EefGALg95GJAGzRU661CDAJK1GihBjz7wYqbgkwEhY5fBVWiQZL5YWCZGGGraYdh2zDS9BQSAdP1",
  "key38": "64yHJQLj5D7kiHSGhMjw9dA7EyL1EnV6TRK9awahvmCcmvRLsysrkNBfL3Z7mcDMt4GLqcFCVQLYLshq3WrK5Ham",
  "key39": "uf6RQvpSSwE16UfJLDMDuTo19R9eGAB6CnhrU95SZ91rH9Qt8BAq8C5DsyZ8rDUJBMpehSzaxq5BhMfF3r7rjqz",
  "key40": "5ixuthx4hkNDZCF7U7gDcj9Vhs2bV6La2vNDxKFMPjFir7K4Je8Er26rvGCAjFJX1XvmfnMqN17VLyWKaEjJybe3",
  "key41": "pXkpqqYeqdDtVvXVtGcT1MoKFCZHsYUWx8gNCX41CHZBxdXFhZh1gCgMbK6GczwG5KxGdEA87ZXqKkiuKduD4Hh",
  "key42": "4LGDxfN243tcF5tnxeGk7dfe81YKc83VKu2T2coXRBNCikDqkKy75PuB72zipmSN18AjZe6b5C5ZcPTHCCLiKDfe",
  "key43": "449XJijmfo8m6js1YjVUtChZrTHzg5SNYVaUiPSsHuaFQsxTQ5u6SrcGuDjb9GM2MdsmRQ7rci4FXUdy5y8SkJ5o",
  "key44": "3aSzCKDMi3GbUH6mxkyBxJZHa2YrUVLmimFwcmCc4jDFdXG7ciNRamzxAGBPr6R5tH9c1PGji7y8Rxo3SXHuZ8pd"
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
