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
    "5mVKX8EyJMUbgpapFY6TbgZ5QZfJVZmSvvyTvkvtJGEaHxvqmogVLEMEKK8ycA7RQWDZ3BQFmRfzKYzRPyeEaKda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2J7b78Bbocr44KzgpjL7qSo3kvnQ3ktyAr5hK9yuH5L66DojxvaqFEU8zt7yCMXr4FXqPh3jGdBqy2GUrYK2MC",
  "key1": "xEnwqG21oDmZEWdhh2MvbC2SXpyK5MvpLiXgoY9KVUB1zp7C33Yky3D6VXY9Ypcob6fhSBNnW6i8XEjFj3FGuu4",
  "key2": "jqccewAVBxijeiYN1CPEdMpzRsJc4Vi9qjszHVCGYLv8DwRp5zQCWfrq37SyUhsgCrFwg9prfwTHoeW65BFDzZy",
  "key3": "4dYNj275PUPHzqkNyFk7xkJ2kmYRyWgo92rGEWpdQNGJj6YSKNVBRaRe34QLRgjiDvXpghwNJTZiZB8bEYcPF4op",
  "key4": "5VqDCvhqSA6jhugqt3cRWABUTDUDzeqAJxvyk7hhSa1cusJD9Eg6iBzu14JqqMwvuE2K9Y91zg3LufAppaX8nphH",
  "key5": "3iPViis5Ni3qK53hLhYBUcrM5nQwB8qXdApj2nvEVFNqQ3PK8AUYE4UFD14WURmuuHnMedgUBncWsFwUe1SyNLJq",
  "key6": "hYH6Kibw14aEZSwg9UaAdazMMykYurhhwqaivvBvv96AJ2DWc6Ur6gkGNQxmdMYhUdCsoJ7jhjesiMmzgnY9vSd",
  "key7": "RdHmEncmFoDR4m2Htdhyuj94XujosnRxruGC9o366CF7HPPPr4DFKwDBRzTkbk19ibnmGiqMK12E7YPJTxqn4to",
  "key8": "5qLwWhgximuK1ht8QVhkiDE1qmb2Dr4zgw8scjkT4WoWr8xMX6j6WiPKE5KvXDGUj9mgHY8tC4oh3HksZAGaNEhb",
  "key9": "5ttpredXTeSMyP91p9TyvSH8qfk1yf9gNZGDsjtY16rkquoqLJQe4ztpB6kbmnGpsd3DG5ZgVaCVLoHj94CrAB7q",
  "key10": "CFFvwet9kBTyvuYVVXqo8tHXN7XXdeNkuC9tLpHBetsUDmSzKzwZQZEWPmF16PJhE94Nsh16BaVnkTL1zaSW9QU",
  "key11": "2SzJT1kMkZwZuBXCPAuuDjtJvaB7kKyWwHATA2VFC5dCNrncwqWcSF6PHXwG6tDgSupTW4bsJKmogmzy1smDFaZi",
  "key12": "2nZC5xkaPZErzzdpFn5q2wXdS297TPGkSEhnqrwm2gPoRakWSSQkGYaN4A1KTPXY7sLAh5LSBgbBkYJta8vC6Gpm",
  "key13": "sXRY9tY3oigeGjgALjML4pdFAks1XGDBGjbLdDZpfoT1uVk1exJMToC4XywthVHY33ksDg7fGoSyWwovcDLt6v9",
  "key14": "5WwXPQmtUgEWYPF8da6Mmd4SoRvW6ZHjr84XvtDMLAum4HwtraYDk1vxt31qG8xNpMSkTSqQStX7UdbrpHkAtMxz",
  "key15": "5DNqLyF1XMiUepPYFUeimFxnDXB6NgqHoY2NAiaoec3BALfrYNjs2LZjEfqsmq31eSMjQXrskWABj88C2wa91D65",
  "key16": "4AXASvpht7PG4LzGioMr7GX2s7F1PxCPY4kWPkuPp7ikNgPirjC44ZWsWvZjyVXJPqN3GEk2JzZfvyKMbjak2cFX",
  "key17": "67PRZv21pkpRVAym7WEZsafbCVBKtMAyPYYba7oZSsGxn7RgFNzg9Xr6hc8YiTWDyJ8athC2VZFZ9YuvRijuFFSr",
  "key18": "45HJKw3MHx3M6oTRUqhANArUeBGR5nhs6CLCpg8hkL796JQCE34fUEyT6g6HMZ1pDuDsUeLNxe3AE9UhKcc284X9",
  "key19": "2QKj27XGvv8bgTuLhrVM9gH9QcyxQq8YVyXuyyP6EDVdgyycA1i8DJ1xWaq6u1KrmXaJ63NR18uFfdhyB3TDt5h",
  "key20": "2HwiuQaHn7AjzbzPwbjNnZDN4U7psbcgCAyPYjou8jP1goYSsFE8Uxfkazej2ty4p1zpJm8t1tu8DHUoy4hPrVeu",
  "key21": "5UhTroQZycSZUzk7rXUj4fPnJ9yxF3UAY7359nLSwnXkNkmpjogFgeFNGBFF9HQjKzM5a9ZzBv2JRR9HxBWXMyX",
  "key22": "3CjQb1cH7NkEPDnr5FTRY8Lf3UadUafeajjAmgF255DafdtF1NqoaZPeafieFn4gsFLtvG4sV45yCdJ7nhijYpPJ",
  "key23": "5bqkJUeprQSy2duia1jkZ9yEjCV1yA9AK7go8Kw9AE8RoxwrDy71cbjdsjmzSAUEC5jsjKMSPaBZutR3Ncu2rhj8",
  "key24": "3VaQxQbULKfVnpynZRbVbGDRSATL1cVhVDPVUk9B91DCrFRc69oMpwTULPXqMYdHfsMmk66HYavEh2HvUhEuWHXG",
  "key25": "5527pxn1dQt5DEBuPjbEVctZ4WS7YY8oDzyaQQfni3nFpEsbWTHgYuKeNdViC4MDpgVL7tTRzazf1vjBzJvuhXQY",
  "key26": "5GcdxaNMd13wp9VjeMMx6zDsHD2du5NSmn4iEfNaxhK2sB4Pyx7h2abqLRKUFhwbJR8vRrQQjXVq5D6kFvXznPJb",
  "key27": "4w8Mod1n2kx2RAdYrQUJPhhQYp4Lh8Qe2pfRirbc1PupeTF5kkFLAiG3oEpeXKcvUi4EU49PyBZXoynH11mR9yTt",
  "key28": "3mvYzNLkzvii6FftzGUmrUr17jtrsAbwcLU4zW92ck8yW9cL494R1W7YXatcyykxhvfPgPBfGojknNQ44mfTvbKy",
  "key29": "3mG3KR3a9Q5GkeyFYjkCkL7unzgR5u54rbbvyBgaHZg8E3yfhcxMprkYhvhQ156kgwnYqHgVWXt8eVoSpMXDU4zY",
  "key30": "5r7y5R75fP2RvSEjABmwTexHtBP6UunV1qt37Dy9is6wPycoCipvMebhhiCLLTttFetY6wqf7jSvJ3ReMdY7AXdc",
  "key31": "29SgrBxa7u6PivL8LoiaZDoZEijzNWhkjGAUrXjMDHWGCkQwFiHdKv2Ro7HXbdyHeoouuDdvt7rwBbSEtpmJ8DuZ",
  "key32": "5qQYnifCG6b4Bo46nQJW6vv3G2dBfis9yurDzf6bSVbgw68oKvU1fkWDZfS9eX7WNrugVqgEemVePD3RK5w6X5xY",
  "key33": "3vhsP4ABCMuWZNVrR9kRHdz4kUhXwL53skVV6nmnexkrdHLtPH3knxiDiQGX6C6PAzAzMxPXxKjTdt4Ztn6yqz7y",
  "key34": "3ugcBy376GQdsMWVt63HHGsv6vM6Z5nL8qS3aALJsK6eeDpZmJhTKjAEegMqg9wXF8LujLQmdMZWggSa1Jz9mfp8",
  "key35": "2Qk2x8iURATFVqKXD5FJVYXGYupbRbJ2szoeRSLdpzcc2aSWDBZkRNGn9bhbrfmDnUWafVzKgUFgs2C96arL3x9P",
  "key36": "56c9JDi7YFEeqyobXLwCeZwW4gep4PEv6votTaV45TXHhmUvVPiu9ByeD7mWq7FnXTBisGXtVKcabgCXeo4puypP",
  "key37": "5VVPvVw3XUehonNmaQ8Nuaarr4ST24f3WQgn3d7Js9JbXvZSAU6R4H8tqKYJVn5oE3ugkbZAjQuD7bBJwcmNv1E4",
  "key38": "3ooh9fKUHFPXsyVpoz6SnS8cXW9nfjZt8fcRyaABxgpwCXSjjbznWj7ruZr7D7HQ9M8WqtfPugaz12iUeuAp6G3A",
  "key39": "38AfuY4yFzYbdfYmnZnN77nk9vCCX6ByTScTjMQmUDuA39UKX9dqPfBXCKbthXK71kCKycwBasRSzL3uCiVVewoj",
  "key40": "39mLkJZ1drRQjht5WtSLj8i6Q1R8EEzP5suDPdow7N2xTB3goPScmZhx8UGqEYvJ1KN88Kg7x5Zba143GVEid8h2",
  "key41": "3xJytZYk7YF9h6UAzqegsY9FaQFbBQkdnUANaMbQR2aFRXt1g5bHbYWEqV3KgfGuGVz8LGdmxomhvo2SqCTrDTV2",
  "key42": "27gUT6E9qXGrmRcaVzPLpwCczZdbLp75dMFxR45faS8nDECe9zXxTf9ZJg1KQ6ugcFLnxfYa8KPBdFGYRgGW7i8J",
  "key43": "54tTdtr7Q55yVi4wJbZRNxhbtjdciuCJJ5gXj5gdJ5eddf9pDK3UjeqAr5PPt3ZSsZgm96GrYaHU8AMRU7RZz1ov"
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
