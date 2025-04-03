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
    "xPCZbkjC3dvf45mYhF4MJq5cfbzxtz4wzerAcHE7sW56SQymaxViNrMbhGG3tSU6zNKggPBk3sqfmja3rPCsRmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iL6DQPRZoxc1GVv5TpUSsjzNxg2ne3jLkDQs2j8S5jaLwxPnrQt3DKH1DsxG8Q6ACthpCCRx8H8vsnsuMrB5ydp",
  "key1": "m5UVe66sy3uay8i9uhweUAWtBYYm2yH7QQkifCxMdgBwuy4NsZbGtNHJZKxh61TchYXCy2xnpcfZUYC4eqQVrp1",
  "key2": "5gSsDgzGwKN2rr7h18cyuyJfMDhGa9xp38opZCnGhtHkiMH9arwa6TA6aTmSpAFMNZoCC1HXMzTJKigeyMdcFeH7",
  "key3": "65aPkUquz5RjV4ZY7Mbzwj7TiYXJsx8BGmCwnQWGQPM2sMMoSCRrAzQK2QRgvPDLmaoiiBJf7DBUPGknkyoCnvBW",
  "key4": "5u5g1AnDdWAWiot9swHvBwXTUWcNCCLvLqJfZJzFMCdVCREAn97PdugQtCBP45rTfXwxW3sXEbn3odLBELqKsF4j",
  "key5": "22ZQU3gE9Yt7F1M5LCUnkUg4SyGF3EVVrqHRgkYFf8kp4e6Zdvg1atDnWUsUign4VQdaM5JCM8QJEHZ15gSznwyh",
  "key6": "2LcRe1PdsCtjsBFpQHv4XkrWj85cqm9TH62JCoDxfuXeCHW2C3wRgVgEiWgeARpBrTee4EYkM9HaR5Himp78Srz6",
  "key7": "5R1R3MZk5NQGcrzHXvcrusmiXLtG1KkaYKSBJfpjDQgN64AimviWBdNUjgtcUwMFq3pcRXsLCwRmDoKhvtPJKZFr",
  "key8": "5QKkhxtJJ4K3g7KPMF8QMm459e7gmJEpvJZHt1vWHYJbjeoG4g8GkaCiRgTCs3aKqm3KtiWWuoNGWQ2VEkCqrykq",
  "key9": "5eJ14MGNcP3QTtSxYiPgCfHqP9TdWTnBjtjVMsNLwDedEuj8qTCWTENQjeoqKqFnTfcSz4AyYBh5VfYav5c67KtK",
  "key10": "CNytf1UDhnD4z7W6h3vSWuMnZETW2DU24PAittDU74X3b2DpJxaKsL64t4DUzQ8cvNMoN7MYLitFNeMhBUNH7BL",
  "key11": "5T7qK83t6BHC5kjtnvkztZNFC7pAZYZ1daT92CLHXYvmWQSFRKHdfuNmk8HHxDQAx5NwyhZCtzfq1C4Zdevg6KQo",
  "key12": "2DMHgkCzch29uDrUDBsqRzideLk5i6tgDAAA6zmEFWsz7cgvpGsybLtR2KytM3ARwee6gqg88QnwPaXr94Xe92AJ",
  "key13": "4zjZ648U9hR7FEHfZuaLYtGN8FhiH6xiaLSTGKXHriWL69GVa1WM6CCzgq6EntGkAFeUqXj6uT84QfxfmEDjE1GS",
  "key14": "pZvRgjifdDYdTGbzTmerGhcR3SS3aqoRxZpGss4Tj8rRXs86Eozx8ouj7jBrQo9mpNWazg4NQ2HP3eSFbTMLzip",
  "key15": "3aJND1ZTE3z6TrSvypS8h97q9CME3DLjvdjprNsH3jxLF86hHM9J35AndFenaSnTSwKgac1kpnHjmiXZHu27LV14",
  "key16": "4fToFpMRB2p6aWDNoGgEsyYYjkpMxsE25suiH72L5kSQ5jAEcaMQeC9yhQC1eA6BcNF1q2kMnVsrPgitz74jRkmx",
  "key17": "nzri3yb9zgSvnBFX66pkKfRdSqF45FCjXdePQigqiX81gciL15uGN6pcGpPuEcdiECpgtoui1FRwUqUBPopyoC9",
  "key18": "3mrNzRmLcnGcodbchA2wtTTpaBoAhGcta11tBAjuvTWdq5WDZJNLvFGHZn7JCZKMdQGaqFfTZRcCwM7Uo1wZmrKd",
  "key19": "3H4R4CyXtsW4p1QSjfb8GcSsXGgBSthjHFUNCgdMv7STRchSPPmUKugothdzuwK9si4mi1mew7tBP9fDUnGiiL1i",
  "key20": "3E2HrkrUtFbiw8R3TA4dN2SxBYxvx9zj7G6oZiLJdXmepSGwARZnD4qUV8UR2mmXwbMUbnm6y58GdTbg6Jh4bz4c",
  "key21": "5GErgm9zLU57KJMUDX1tpotTvMYEXYVP77DwaY3pdaqNpABqfAFdg5RmzDSnMwjwDPeRidpmws4eRtLSW82BQpEK",
  "key22": "rAic79ewGfoudYFjhTbFj8EKBvgNDDEDgZQNwNsiEesQTTCAQy4AqvXLCCgK6H2Jm78yRnHrF4jTq1wthSAJYcD",
  "key23": "3rsygkEndjPT76tPEuMtwrALfDsDAiMBn7j9jaF3Wi46FuJiY4aoErt8TdPsFgbhRVWF86TvLaFXcNYY1SsWeucc",
  "key24": "32BFj3X2DfrVyQyEZ9JfxsazVY3rHezu1hLvZRfL4rBhbGunoN8vhnhnYUGJANcufvSMckTabbnVqqGV2qoANgwG",
  "key25": "2AsVd4ZjKQ32xg96izeCED3FgawpKtjUhVRp2cznuo7oyyG8x2DH6djNadCzr4EnUjgASDUBmUM6huFUNY8K27WU",
  "key26": "2mdGou9V6PmnwHky82HkoHbaJKSE1Ffk6aJJA3sS5ah2xp1hrLFHxTr6gt4vte7cpj8236tmQ7FXUPQjjfEHoFp7",
  "key27": "3Wwg5x8biiWpLaXYDA8FKCtMYqEAPhT4Hgr45ZmkuxnrTUQcUjVhK8wPY88ZLqMFXCNN9XNrw3c65aruG2XpQQ33",
  "key28": "4j4J6qdirDtpSY2yCwc5FjFrzapmcD8acD2bAQcGgPoq1cxfbNrcadaMCPbX27hsU28bT7oo7D6DBNja9VCvYhgS",
  "key29": "3SRvXSCWRbQ8c7quFq6fTR816ZacqCyFnkibRmkvcAjeXV6YfMS8XTzc2XnNCRC4vM57E2bF1z2WrUc2xDEnnacP",
  "key30": "2osXh7ZzSnd6FNnghjkE7c8x29HeTDFezFd7xXEWwwUddC2HK27pc3TBXFBgnj2uutQhsnjzT8LYEaFpbVpwh6GK",
  "key31": "5MrbKeZ1BNKYw34ZDN7TZdnhV8F8MgTGYu8KWCF9Cp6pucGjqWv2e2iFg45K3r3oDPUsRMwtGzsZcUaFpPy9Bw4q",
  "key32": "4iDupsEUQiLPEVDSEUsHGBE1d7XMUxRwem8s9XMWRhdtCJ5uVnRtvtDVUF1VQeSLZyhvdXH1rdT1xwmC4QNja3MX",
  "key33": "5CSrephdHBkg34BH3erLubCEPK6PqM38CAgBgWSrnmFF1WwQ5ttyH5K7wHXhbQkDi15TE3FBYWrbgSaLYxxgyFWM",
  "key34": "52XddZt1ofpHws1q7h1empy9qcruipaQy4tBoLkKpwDKMfj5K5zJB34VGVTfznM2URNvNr8NmxqBj4RSaqZNjF7b",
  "key35": "39sxAY4xPpJHmVN8Dc4ZCUQJjt39dys8ZfMAALPmgvFWJ8oAB2tZ3pw8Svz8Ekd7zVNZZe138v7eqgWHUYwUdyDi",
  "key36": "4WWpxd5FMpHghjjv6NF2TkCoUZnoGazgzAoBQYcSi7dsR4gekvVthTpcVnPgsBXMN213jDqDrsvg57zJadEPsqPk",
  "key37": "36sQUMVYXGTsifNU4UHr8LDMFDt1eEo6Q7QTq8MV1Rvd271czwDwx58iFLdkM4vuUZKy5LNgAzuoiDGwcwa7xqCF",
  "key38": "TpcvCGHN4vMFqdqXyaLaeGBcRGsWbMjjpWxzVw15Ryc6nGNF8FxB2eUhopEnzB4KmeFqkkkgBEnDCC53GsmU3A3",
  "key39": "4kf5L4gEQ17SVa7EMHtf8zyhX8tXaZq9KLAGhgofXH7WSADoHa99A9cUUhUndKtbSxJFqjaQAXYx8JJc14Cxqee4",
  "key40": "3TPs6s8nwa1J2Gcuic5Rme7WuHe9yFrXe6kuAia2pNmxG51Hkb3vgKjse5Mmd7jk2mqtKfjAoMkrRSPKaMg8tExG",
  "key41": "4dwpakzaPW8A2DykbPN6ogtbd4nsKnWbBhdSoLr72ji45TnhxppDy7Xx9H7C2AUXtX83BTZmgp8DjsLd6Ug6hbWN",
  "key42": "Uz1AY7xHurUNiBHHaeiYVrj3SZ1pTExHi3Uw8a7daWK2DyCjrzT1k1v3dWqn1fRhBSZcYTWbN2Wdt7rqBfRiKkV",
  "key43": "4uuY5rcDYv8dHNKQbtniHJGdv1yPBUmm7CRJGPT9hX6V1PKvsAum2KxLViAsGB7Jq79zXSuSgZc6EmSUa2ue6feM",
  "key44": "5jduPqGtHdwnKG6eryzVSkRzVqccr4xdJFi2wbwDz3fHbRYNf1UTdqMhCyKv2LnGvaoAXx727srdvofiHBZPpGez",
  "key45": "zeRMkpVLzCR9qqanrMeuX9HmxMDfdynspf2pZhErXYDB8SWX35i7M1jd4M42W7ZamRaZBBJPoFk5iHRntAjAsBC",
  "key46": "5uiZHVt3y5cnucL4gNB4rJ74jm7326gkV3md4a6K1S1czs6D4vsRpChjDKukY6s2sfqD55KNnYbXnkN2nXPsD1Es",
  "key47": "2dX7VbzkySWTGMMmh2SSEYKdx4j7TMbaSdijMPv2zHFn11DeFP8Fe4Nj9d75vJDbGUvtSe1L9qpFinMdc3Nmb8AC",
  "key48": "2RrE6UQk4ffqp8u52SsqerS4ZtCpth9ZkkG84cbf2xvjLAnkmSL7H51q8DuM3v5pzg5jNUNcTbLR1vvcYAXNzX3u"
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
