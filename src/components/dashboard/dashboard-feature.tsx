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
    "3HFZGy9SNY4BYwAK7A4ApDczRkvq8mUXM3rmfe34Svr1Nda8PATu5Tsf5G26hw48pYKH1tiH1qxwhgPg3P51gXwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hh9yFxnxEUj8PYuHydbBtQEnnx1ej8BL62D842aeLqEtCv5m6yk1SwfTeXPYMpkDFYHqeAt7Jhd7C2mkEyWucxK",
  "key1": "18eLE3872ED9N5y1UUxPEr13pPaN5QG71zFB4xKY9jYMoyUPQKydyNMCso62s7mwoCq3eyDbvNabwEVHhJZQPqN",
  "key2": "2HFuymuoTtbgRJKk33tZMhnQ9W2uGDscRqFBNtQFYDR9P8vZGjcHZDnn3SVqvdSD9y1oUHsnsAXuQMMCRBdkCNT3",
  "key3": "5UxvqX5apcvEX4pMsPcNsoXw36bta7EBzQP4M6SyqacSqQd6jpGnLvCMx2qfMtXJu8uqMbTzmGkjpjLDpMV4jowK",
  "key4": "3kxgzV1isjubi5AcmDPZcWVVKh6PkKoPczMhm637jjVZLTVMWY2nqFDbkS1P8vnqX1HzJssWBBsVok39qQsnJUXj",
  "key5": "31WvwYxxAdTA5gdizFdtPmWdfhN8u85BHUTomodoRJbm7dEGZWs8xBxQMXNEZP9HeaERkjsY84AThszUSkCx2nTU",
  "key6": "5QUHbeSzAnyd2coRUXuGeNQeJZAXDusL6FitcLDZHNHYQnrrsw7v4pinj3vnKN8ca2uWdykJm1fdzhagD8YfEJgF",
  "key7": "49mLh6fR8ipKgWAsNvLQNUb7g6d231bgPbzmLQ12uoydgsCqTZexYocR3anuTaSSJUy4ACgP3pGC4Q111q5ZAU4h",
  "key8": "3Ngx97s6fsV31M9eNavmRZrubqxKnYdQpbCrWL1cu5H1x6jFbiFEnRYPHBd614NCJw5dzHbBgbaW2gWxnEGvusgQ",
  "key9": "5j56zhYj4Ug9G8ShCGoMFxDm9UetGPrnaoKWgkBKamGEn2oA7rZf6jRKz4HCtkxRtXfg7tmkm4jfy61zQcJvJLZo",
  "key10": "4rbTjgs6cUhHxWzjX294NaDtm626YQBFcZCj7WpST1H9AE3GqjEsiytdsthANk5ut1hXP5BNG46F7hofDqsevNZe",
  "key11": "3C1vVdS1DYT3FFAjFpMTM6FzHZFEXiBum3S3A7sp1XuutmCr7XsSgnBHBrdFNqLExeqwQCPWhKuPSuB7PLG7j7kh",
  "key12": "437GB3EfPfhx59jCFh6hTFsAhm12notHSU8JbpC24BGmF7qAdRU7KWrpnHkhMYkcbW1T6seS1Et8kN3qQdBYsRvk",
  "key13": "2hdjBwBxHx7FT3F6ELzb32Z2zoC8Byd4faGSa9owesXZTHQ3XHRH7Zm74Ss3baT4h11qbviPNJXwBNQde656uax7",
  "key14": "5gWaisuh8HQEMKZkG4AEDHh1S69CL3TZQ9HeeFLcynuGStVY3ZTGyVFaQJvH6nnxnsBT8hpiXtRgTkwTDjajYh7z",
  "key15": "DHrAkQSoWQfAMFXuSYnvgiaTR2LtwwTpMnJ12a4maUPMNKq4BxT2CT5pbhXqbCThpSG2GRkBVBGCgTBjDkwsywn",
  "key16": "3kwTrN1eKQLQifebM7heEfinjSYMwxfhAyaTmBBhygPTULmXtN8bAydLQQgq7rZp4S4Xm81jiWTdB1EjGzeyuHfU",
  "key17": "3um6gd6FPQDhsFa5zQv2pcCP3Py1oh3A2c9ZxauREWqPGfqqs5oLdTMxwfqKB7VPPjKKoxYgPJtdvQxKUYYN1QMF",
  "key18": "4t8BGdMScEcx18i4uGvMcVukBmtjPb5CQ5SQ4QRQHhSNjmt95rpaUXrNnSTvXMUq87V13CkEMhqdzPxQgCa2wWG8",
  "key19": "3VtAG7bzkrMVgwd7nSA9k2jUDtH71DRo4d8oKtpWN32D7PCDAwsrSoLHZSbkREDxtrHvXBW9k6nXunGDcTcUKJfU",
  "key20": "3xHFWKHgropWPW5ZmvEV7QH4x6GrynepXDvnzFKoqJk6fHvtxLYsHoKLn5t1T5i88zFuo5ibeE7u3jJsGmxnm9jC",
  "key21": "4XHdosXTCqUoZucRjJ5EAGzLKtxJxWKMAwbW8vciRsWKpRJJQBHa4nZUrVv83XJNoeDsYkZhwwZujqosa72azPzP",
  "key22": "7ZdNVjCojoaJuxE3KhG8uC9D7LNvnAw29hUHswqd8WWRNtGbfKziMzBn7EHpF194i4adCMJskZpBNRApndXJKPD",
  "key23": "4WPjgYCDym86ETCZQyRRWb3nh5zMWy71F4kmFjMpLVGTJPhi67KwDyNamjYotnHyaxFWHhDzcL1M6Tt6umXB8dUu",
  "key24": "gAWJyRY1Q15bW7qS6pj36WAm1hsK1N1cSMXoK6oqEbQGPLWoymXLZKYTadQhh9AMhACem6y7F4Bqu13ARi3cgfS",
  "key25": "dPt79tqrvvyVwLv5mBz6zKaduX8xCYHKk5LHKmnLsqk8hhtGXnDiRvWsMPwHjokWzTThfGzHRz998mMtxmvy8Gr",
  "key26": "42cZhT66zx6KL5KxWHd1KTG9ZPdjXswDxdiAK8N7SVeUn7D4n1bxiy8KcHN2cggxu97u8pmbenFc5DrtRbWPgqyN",
  "key27": "2PtFNens2Ppjp48xfqdbdovTVvJVKNJyuDx24qVMuaqyVqcXR4YftXkNWFwStUtVGEqB7GGwovgedaZ6SjP8DjB8",
  "key28": "2SxvRxCeFp4MhAKabA7qMa8VZx38tTkK2gYmaDDRa7MhMGxYYeiof2PDZWcf2kf9Key6DTD3DaTvrKB5QpyR4MAb",
  "key29": "zBEiRP2bj6uipjGCpmLxcgwq3aN37LzARC9ABE596FdQLP6Law4ZUjBt4YExmEQBX67q4ccxxWBrRnSbn9sMNEg",
  "key30": "4HYYHZwZXnFPY2WpBe31rp7vJxCvkY7twETDubmpkdTkCEaN64AHfNrvHAuFBPsjb6Sc7kZXHmV6YNSU5nAn8nAi",
  "key31": "6unoALJWLMJbkHaPAcPR8ST8QewLwhzRr5QGLJnoVVUshou8mnPTmcBXr6Vmh16s3rwZuPJMifLrTjrrmJTsqfs",
  "key32": "3SLk2hd8VAhAMP3ChHndieycfXHgotfNAzy3DHEkwvfrnMSaZzt6QFnCgRFhzjNh312yGgmNSJEC6joJfWJwazq6",
  "key33": "6537R6CByAjTGuAdYgKKYZCFLDLo5hKNUJiGMPJUK6u2TjFuyF4hBCHLUjwWPAo1anS4epq5UiMRhT8mZYH5UPpJ",
  "key34": "5rWQKATFnaEcUN39LvS9DVkNRP57QArJazXCnATkEVbVhtMhicN5qNWVqAS6d5CvtVXLuCbcLu3RDLJ9fYdnak84",
  "key35": "5vdBYNhVrVaAKWSABYWRdUR61LkkFVDsweGH1icdnRKAKXv9QHxDAorEPA7rHYzQ6YUXrP1T4p4tCrAoEFbUd4ft",
  "key36": "2qY1npzdpVrKtRPRGG8KMXuM8hCppaqi3snQBm4ikQXejHY9CCFNrXVAqPPByx4dPXTGvQDGn2FW8cdHfJw4H1PL",
  "key37": "5nLAv1Z5CjFTSyrCmH8tngEuUPwFN4HBfjy46CdGMUhDAAmewkuS4HtrVWeNBHiLug6CwuxQsG7WraiEKkCcC3EM",
  "key38": "ywG6ZpP37m9MKRWUM7vMNhjHxarxa4SE1u3zcBM4BRwszZJD6pMWLhKxaNBFNFFqrkoK9HKdbd2LB5HWU1HtwrU",
  "key39": "3cRkZ7wkKLg5E1yVPE7ukmyXPLehsFEoYacBvqv96ruX4eCXxf2aa9s76jNq9T6nFvNq8WbhJs9VAYTEE6KJcaWs",
  "key40": "2Rr69Uyh8PzzK1VdnGTdnC5hmsMLyq9btbVHN2zSVbm5ZYhtdz9xC3JNf7pms8hvdUeRp2CrhtvWydkMTxpvBjtR",
  "key41": "4FNQtFpGGojsnv1q55o5BATxzqvH13LuDzsNKhKZ3S78cXNAbAKJpJaCfUepha3n2W7mEFZasfes9N16xrUVau7a",
  "key42": "bHUVp3BYeemjoxCamB1gLSCJ9CDHhA7SrAHouZyuKBkR5fGYWXnXT8jtn1id7dJRsWDXDFSVtKyHp92vMz8dFRH",
  "key43": "2MsVuoVgDu2wQ6z6FABeHu5kECm1T7QGjNeJp2e5BbtBWtEREMWexQrKYCPPbUke66AvtmHthUo2i8mTLpLtpRFq",
  "key44": "GLrVwZYsfUXMEDabtQZ5hrgb6MKp6oFXkiY9CTCnBDu1aG66ykh8FbJQiNsjQbDtyqSc54Hi434wCqbR4wHaGZj",
  "key45": "2pWhQB5ApjFgaZ1wa3U3DgCwebajZ7jJq3wAm3KGLyvsjiScNS1DfsfU9A8rLuZStGdDpHNycrHPnYdF9cK3jyR6",
  "key46": "NCLcbRQgZR1qKNFKAgUbe8PJmCiuc23k5dxKP4KDTCxvuxRhZBhd2BWtiaYyoDztwTJqEncLMLEYjxsav7SeFyJ",
  "key47": "5p8rWKuqt4StuyoCofahhwwnDb8oRVakYSSBDPovFcwGe1rZT2mdsZqQiVqxtRH69grzo2Qu8a5YGTu7mC271Hy3",
  "key48": "3tYtFvpj9L2uU2rPcjXu28L1FnDRTRYNW8sn95jUYu1KD2HjBpM9JPjsbnUXoYdRorJD3pr5ZioCLYT3WoakYmYz",
  "key49": "Dr1NPHLqmFPKnuBeyPx8yhPTyX3v6DahB82W3ZutzrDwYmRNUgkLMBmtLQkXPAeySqFCsWvSmJ5dXvyJ7AqLP3A"
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
