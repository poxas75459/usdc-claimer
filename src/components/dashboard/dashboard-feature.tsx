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
    "5Jn9VJqa3p2eS1RGSedeJ9uS8awo51HQR9ZrSsGNZq7YfkPV1YFmeA69Vryw9KtPTP1AJemGncP6LFQLknPtbktn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNjKcPieVsREVjGpNVGxqSUh69CqGAXBjngmeKo6tb3hAbeEMHybYi7HhhecHp2FAMDX3LsL4pYhz4EWqCWfCGy",
  "key1": "51enNXS5qbec4V7kt7pnNDdsQ9DZezY8DdtGa7vRHuch2d37HREyshZoGrxTgo6swDGgWxcYB5vxy4caMsskt6RF",
  "key2": "EQLb1TGA4VFffgY1aQt2tycnygsKKcpzCe2gtnBF1WHp5jcd8jRgX9y96rJCPoUTyjnxKtKVBd1WYkGnEaaHEUT",
  "key3": "4Ha8D2xftfoCEPacfZt8Y7NtorTJeyHRhWTY45ehxtVCKzhsdxwN5tPnVvdDxN3DKg8w7kFEyGQ7avc7LDKSnXTo",
  "key4": "5QEPp1PmJvhDU8KWfD4853x7apaW6RNPsyB8j326GdG6z7UrgEg4VeyZKvVpqUdDGAuiApzrSNVjSwTgA531TxUW",
  "key5": "33kRgKGBjxHHR7VBu3uyuqn2i6i1KQKepqdDD7R5WEehYK3ht6ZKLCZAu5g4HFFHV6Cr6yKr5JDnw1HvJ5r5W15q",
  "key6": "2STa8VcbqMASrGtSGmAaprGzWFyjZRDtscvbJddLyDz6YvDRaq3c7YUMVQwx2kbaLoXYzw6cyXWycoaCSDEEQ3Lu",
  "key7": "2YB6XdLNUtSnW2qBqajgk1YvX7GbQoGRzBtgiob3TNMenGChvKHQsS9zvuEKLTaFhSKjvxcYTJ4kdLv1wRcZPnR9",
  "key8": "5NKcStvgoqUPKT4tGYWJH1hX7Mf8cGUw25ufmfwED4yJ5Z7u1KApYvfnuP52McVKhpeu1QqPjCvhi1zYdAMV58da",
  "key9": "2Nbn9V4pSK9jLqWQB2d9T4TkY5sf6znWeF4Khdbs7v4eAigN5EiqSavw8A4URgQGADonBUgMmk6U3GmkV7L7tEMB",
  "key10": "45Aub6Xnuhb7Lhgz96JVP5ZtdKBMB6EaVGke4AEY7AcYZtdiW4Zuu6pJ7W1Ar4AAwGUBqsGG1QPuVyocYE48ZS4S",
  "key11": "5ccnWpnTnbV8RNfWC2dBxhAaYnjotY5LvhiQTfpQS2wuqUarv3gyGesUUBrrFAGZXcyzgUevqQQrFCtqLH6PvXV7",
  "key12": "5se53rKDjnmGvyxGqFHDUHAgUZmMgVxe4z82DZQ7kEM9wYJ5eY17rNEwEBGfRVYM4mkC6jETmmcCHPUevZ2F9SRg",
  "key13": "57opjuB5R23ywqA7766LP3hQmLbCj9gafzmYQQ5dCdeVLh5hw2FW48hoshGRDncvpNRKG5zJKxTa1C65EmmtH1aZ",
  "key14": "2HXGhJWmvGcuuVtedVgqRG435r7U6v498oXZxMQB5QGFwdpbXZ6mgjNrCVVR6aVcEU9FdnNkmiCKPbn5thi5itVZ",
  "key15": "5CW16aoA8KTDBY26TgJa5Yp8NH9HekpMYcmUtU5GnN19XoMwDZVRNs5wj2NpPEi83kgiPu779sFSfURScNJhXDWu",
  "key16": "4wizfKMp5nzHuTvCZA2Yygn2DVbiu8ecJqCRXdDW3eTmWXhLBjf2CmSsYDpQ2zCFyaX89LuWdQAkLosycV7b1t41",
  "key17": "4JT8J4Vf8ZHZgSjxzvDJzDPrxp8YeutM5veuqGmUWVhtLuCufXEzi6DpuuKpXzsNNmmYREaR6kCX9miv2KirEYLU",
  "key18": "3xYRY5v6fEswdmmgAYvc5XJaBuQ8C2TZPpP5feTW5bhUkANW6bRForrwmfADr9HYxdnDEHpf49CNg9dCHom3uQ1X",
  "key19": "4Yhf7SjfBsg81GXqVGRZmc25ZKXV28ALTNa4R68j2av1waBD5TuhFi6hVKzJJhNuZLmBgn2JMxckgPvd1WyLDgFi",
  "key20": "3Y2x2n97CdGvKdabtkfpUo56NVXfbsgkJLLJd78hiBvHT69WMQZzMSK3Hw5ZQanC1LgqNdiJHwwh4vp3SR9rntHV",
  "key21": "fJNVBttNBzdorng2cdCRDDKTUb9yZLXDNtEuWavdJYQLEukMc3Bd5T46tXp7XYS9cV9RUPrps6hGH19seQRiijb",
  "key22": "2G3ADojCQaSe57mWoB3UYPGWK3SYnCnQxsZFaeXx3342yJVeyRsJ6Berwga5Utv2juERogNvvWcvFiaVyoj9EAcP",
  "key23": "v4xiEnvyRs1gwYJMThNdRMTM1gLVNdmfZRhHMMrzZbmnEbYLsBrAzLxN4RjWVvFb5nHWSpDqTLX3yr82ctNBE1J",
  "key24": "4RoKEvvv2np1F4oaAbpRoEpJtmKnWyJQnarkndLAevmbDAmnz8cq9qYbH2DTuHVot3VJXcRBaevV5HCfnYnkdTK7",
  "key25": "3UtW27GJbH5fGcGJXzd6gEjff9kvu27bdHxtsf4eK94ohEDXWg7nz31RSjsMGZ9uC2YBJ2r3w9oVhW6JEWAV1qHw",
  "key26": "oP1MXbeTiXytrexprsew4YtZ3tqUm2e7vu9wUQgYWpcbmVVZgWrkuheozEeTq7255hCGJfRyaqccVdNZb1YJzTN",
  "key27": "ibispYdEtSEK46oWdSkCGjXeMGBQPqGbAyUTXNFo8UTra1g3ZvCUoX5U4QCmp1GSzzQuicHvgwoXef53vsqWjNz",
  "key28": "3qKHPZTX2iiuoJU62omrSD138FUQ5N6Ssk9EgNPkfHimn4i4zYpX2BD7cW9NA1H2iNY5ubXWYr6P9pX8uqBvnFfL",
  "key29": "3USpvE525RQ6588cTLLJe8KQMhFTPMYC2F5d68LYUDsBievKxduVy4tXRSYua8UYP1LCmmEvoVNehRGzgS8jXUoM",
  "key30": "4DYxsBvd2dYu9h7TJAA6Dh6HBLYNQ81py8PBHqrwmLoT26R7d4bPdQdNjDCJR4srRbEBTfnirCrUWUEb8WJeCuMT",
  "key31": "3eiiBdbyCQmoXqJ3iy3XKPCUTe6csjfJpNjAFBzMN7aKgdDZc5ppbKtuBrFvmYnmo3tNRVdcVR92RaZsZaSLZybm",
  "key32": "2y9nqG5AbXqHy81rH5uV4xsPdGKHzeeQdczFU6i5JJFNgZzbdFiRDFZ4yLus7rQbYbDvx9HVb3nUxNiFHZEGz4SD",
  "key33": "25ebcMt8Bn9Uqv3tWPK7nUCPbrGTkzRqJwtwbL47ssKRdqKqbBsrvKoZuDxvciXHT7bSorRntjs3yfVobAMyGiMY",
  "key34": "5tweBcxBMU5cpXPBNLKiXbKa7oYqwP9RMjirfWajfG4D1ECBZafEn7isf1AJWZEUAzSh32mqJAQLX48gR9dEeW1w",
  "key35": "31G1BU7tamaY87z9nPMMVSrM26Q3uarXJ1fxGxJSYcgRnj47iD81izVC7HtuWboeAd29VF8dgrcZcrPLyCxRCP4h",
  "key36": "Zpjmej2P9SRipj4AAuSe2PgkyKLmyXWj8857SGMgkzd4jR9nm41Mv9C5YwdDQufDjLQGa7MUYaHfGTv6P5TnjMU",
  "key37": "AdvdyPbyn9SawuuQk6XGnKLwsfGfcqaJVRbRqnapN53VK56hJ52J9fZfrCndgoM7y4RUUYq4pUMUovXB8X2ZWqN",
  "key38": "57XvFKLsoKNnZCMknNPcTtoFvYdDv8huqtcS7NFfPX7vh8qBS2zemoGSppU4PRB3fJY78SWBYjGpubdpCgzPfwNd",
  "key39": "5TR8V3firKnjjz2RohdnpNH2Q35AsBX3BVRYHxVXBEM5ULiuKYPjvXB53VbVZCr2HuSHfjGX1FcGkxidUpQB1nJr",
  "key40": "4NASt4STYVRhi63fm4thAK4vURSPn6HJEBwkNPjY187apCSbXGskSVXMjiSxJqmR3JhfEyqHEqN6DzPXYnyoY1PE",
  "key41": "3PubPkhzicfuCsdzHWYBUCjKiyvXxXKa6VpCRZJJ1cRfzPvqDUjJyyW8vwyfo8MZCyPHriuqAyTddSUzhPsviw9E",
  "key42": "3jKuvihnAfuwR61F14A6QjHoqzECvbPsecbgwrjt4bm9Mc1YZ9KtEQV2KwFBkF46mcbd5m1A9siTBrEiWJZ7hHYh",
  "key43": "eqH9hjmLtdrf8Kj8368PPQpz9qfUMzBLCNZTzrRoqF1w8Qh8VqYs13XAuxHSBH9EmZmVSBut5BwhGMszQVDzqnv",
  "key44": "54Re5E64CsgKNdhwrG5rmkdtHDAK2ThuqQ4EarhDKWGYD5j1MdGXDyqgkDTutHuGMpugAeiPWH3zxrLJiziys1MY",
  "key45": "3RKusqmE1fZyE1uHivj3RMd4c9RV4eE3LswAvLh1VaohwgziJhAvu1dwc9zTJedzkBFzi6vFFYgQk2DSBr52JtHt"
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
