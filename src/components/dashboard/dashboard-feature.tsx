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
    "jWN515sMRQaojMS4QXZz58rigoVPKXE9cN5pBAHX5d9D1MY3qgo84BWQftgG4GZHqvmWn8EvvZG2kyZPDPWiy4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBgQqisxFZtwvVvf9x5CkBNnmPXiRrTfiPS8NidN7xnDxM4uP3UuW92PbfAyRmQarFLNvcJUkrKYf9wpSepBzPE",
  "key1": "P2ZzGxLjzocq9HojNbR4RzmAzry6CFav9nJ2ipC6EuKL98L7S1C3uMh9b3ugQ9Cez7tqD6H9QE1h4PTWKvLomfj",
  "key2": "7ECFhS8X5gZgbkp1LkEUCiXykcJgt1femJtmYVD3FJ7TsbtcFUcRS2FqJfbSeQMxBdDdDGMGBegtnn4ukUeVNej",
  "key3": "3nYUXzyPED9qNuaZkFXNM3wP4JWFKk4FDn5bbybufsjwV2bNWnZ1UBUquqj9QxGrPAMEPNHfcBWb2qohzowpJkyU",
  "key4": "rpXne1iYw8mpqf197jmHKcfMbKQU79LMygPymAsm7szxUGEs3KGBfN9nQTdzHXJ31p2fFFWyTBwYD7aRHDncAw8",
  "key5": "2SqXNBGQ9gNQZUghfL4tGY9RTMttzZRzymxp5XV2zU4Gdg9cmrEtZ5xp2UVdfi5R5BGhiQZpTGb4Meo2FLzYhEhn",
  "key6": "h345iFnHWj98n7gj9qpAQTTfr1Vo8k7AqCZxEKxD8pE4KWsg9SN2vrfnqt1g1KxGgnhKFMGKam9cxV6NJK4USuN",
  "key7": "5y7aWomY6GHoiegprSTuQyU4NTiCKH6DR1UXE23me2nStsUYh7V31eVt7boaooLF4Mq2X96FMAVswZGTBsT1kteg",
  "key8": "3kcBMHURM8NgVqMvvbGzQzvxMotfKBdjRH17EyDCX3Yo5oVEUqZzaLUjzwnaN1RKsX6uAN7A6eGn41rxKD2KzwcP",
  "key9": "2KFuoqaAdbfKj8kWKN8AoqJVf5Gwdenud6ZAQMvTkyuZU2d4TsFemgTJsJQQk71667qQck4TrHXHDGiS443V7HK4",
  "key10": "4XafC9AUVZjAyWwMyrws7qdQXE6bMJqkThGZVbP2D3kc76er9Lg5FGVvdgjaqgW3ZPzBbuXcpKquJBkkJghaBgML",
  "key11": "61tmNZu9jYQ4Rq8koD3vwqqngZgVLuWsfuuh6w4RcvN4thTNDnF6Sr5FaGvu694oTCm9GMU2HcYnu28F1c9Xtv71",
  "key12": "eSxhgQs7rP49jXNGPrQVkzu8d5XVi2FhdDM3g4HhpQubRqiSFV22PFBh4iEqRoW4AZXZUB4d3hQiZXRAHTAxuRM",
  "key13": "4Z78dGYfQUQkENTt4crkA315gf4DAWJTgtyMHFHeriJSsqcyPq3pyYbyiGHP8aWSLMJDRmeaxHaNANEdYAWARJPC",
  "key14": "45VGtEZcUNRKNCjzSrRzYLcLtHmpquVZ8xAyoEq8Dm2JqKvsanGezZj9TZDvLhzuVUuf4q5XkvvaLGZ6yB7WBNwF",
  "key15": "253ydHDRpSLhyP1F5ZHybCJCvAr6VNsHucBNc9ZKpx2HR1oPXWmPFSQWabXo43iHnV715NFYGXkUQRF4YNTrMydr",
  "key16": "3yHf96prsrZxa7ew7VVETxTcpphUdCcQoyuyG49Nrqpbg5dKAT5ocx2bFtkYZhRM6oiEEvtd9wYKVA6RaUy7RUJz",
  "key17": "3rJwWptWJGmmjdek3cR4VZVZakDc5w5MvN2oxaeBdRtCotXzergTwzYmyiobtsAertvL3RgbxLhHhuoNbEYKkYs5",
  "key18": "34GJ2KxwXtFRPyyCDrJantqbGdafkXMLb2SEXEA1NQXWPLfoaRQbPsM2DiUfancMLJkQVZz5crJzmoh66zdAYLAg",
  "key19": "N5Rpt7acWMjBCP7ZjngTkny4xVkeri8zAF7pfNsPtMJBPcH2uNJEbvpRgAxKi6apEpUzTe452qqkhsE8rQ7fGdT",
  "key20": "2JPFpDcPxNLsFa1d5tYZ1DY2jxwnVrGLo4Ty4XzGZxwZmPmeqADF4JEqSAqFSjkNgvKFEG83hfzq3FmQjhMwx9HJ",
  "key21": "5s4fdUZHeeJyd8M4qxwRLRazo1r3CiWNKtTLSU5BcXk1rydxcAw4mL9h5Swn9enGFQEnNjkfpPAGcc3omnxuv5qM",
  "key22": "cka4QdANsSUjnHsoNfxjzgdmhSycMHncWedXAabozxu5Q8f4rd2EZ4h8CF1SxUqPrP7WNWWoNhNvPLQichcDVCa",
  "key23": "4UkXtZwWweR7s87y2a5qLMVbUyBjhqBmVNtRFU6EcJqLTcPaTKh7owe5y7cg877YRy5V1sBrhaBN3R3dMx4nTjc",
  "key24": "odhmqLsUb24xQNDgDqTVZxSssYuSmcc9ngrksF2FnLRVTdAs86jTpndwx1iH32Dhp6p8GYAwM7xij6KRTKNNJUi",
  "key25": "35Hp73vetYHmXhpGpbCbvdeB5krYZSwYZhANLX3r947xyatn45MKxjqZs3p5A5Eo1p5d1cpdagNeBZ4kcKRfWKc1",
  "key26": "YS4Ka31FJBTRxKPdFAs2WaLHhAufKpkRbwD1pyV1niSxrom5HJHKrcC67Q9o81ijfHJyEuGc8crzB7Jsy8x73zY",
  "key27": "bH9NRJEusX95zyJP8YKY9t3PAtZFhMm2qYQCQdxJXrgnjGPP3AL2YUN3jtUBFZ4bYNZCmszopjH1DCcz96PquiW",
  "key28": "5FWrrmczsyvhoY7XpSL3Xg1akdPVpaqzYwfz25u1KSxCNXXEAuv9m7fe2zABkgkgLXd1zUL7TBJKwhy6JgkWYebh",
  "key29": "r12ceGZAnrV1nRj8EaFbw2KJey6T7nKPhuy93bDaD3GL5ZUFPnVXhriEomqLHJh5YZKk9t3SH7jeULNRjddqwxx",
  "key30": "3BWELM5MH2jg7xjors8Km4e8iETtU2EpZXKG6YixFfUgpeh3cCKsHYehPUMCEuTpVV2FdVaYGeyvN8Xg5FyenSB9",
  "key31": "ckiSkTCSWhjqifWRHiJxwtGUj2ryq6GxMRzhynEjRDVwREbnJwSJ5quqNseveMmouCJxVhC8c3D5gzb2TFXkYGB",
  "key32": "qdJBAgavK7h4qbn8DbpbBekqrMhbWxvjC5L9fwZcUuPK1C8kU77WsjAQjAaUBksySM7acW39EHx9dp3Ry9f1nHz",
  "key33": "53Aa4euJYo2ioMVuBtWWXUycXCGfG3vXUM5f5Azt25spDoubSFeHcSpThFQsB15cGJ7NB919sGva28a8y9RTX8Az"
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
