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
    "Bi8cyegmHgMpXwkJBYLG1igaS2zvCZNQFoxWD2kGquEkioY8esBwVj5zfSB2SRf8C16grmDL6RU51KibyRz7abt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LN9T9PNr6WLss6M2GZ7n6GqZgCU4E2n4Bjj6hsiDRwcBaNpqykiieQULtdW1jZ3KaRcodVkfVuxRmjiXC21kvK",
  "key1": "5yRXHe4F56Jj7ZRCbHptMwSusFw71sp32aEmTHWmJnhBxt2N95P7oC399Y8rnFXNWCobs9knoK3kBnoMBgY3XZbH",
  "key2": "4Gywbh54j9C5fdatKGVfH4FFs8YbE7ooV6B3jDGvTpXYmawGwDs3gCU44ZEXDRCU3X3sev519GLeigNKyfWqZ9Qj",
  "key3": "383waEmYDJfEKBLysLfBKkB8h5zpk8uRqdQrR6d5pgM3RKNmqyj2Grt2CzYBqUhXhKaYYuNdEJmj32uQJnUqagTt",
  "key4": "2pzL9u9SqAHwpAghSdde8t64EJGWmLcgCqvKab4GE3Hmpx2uT1HAJ9fRPyM2kjd3xpswbpKYV1MP7YoYKeMzX6co",
  "key5": "46pdsCfZG8z79eSA378NV9pPi4gfLK7fcmrFwWwWoeg5FtxbWQvowMi5U3zagdHEdpAtY7X5LtEk3ccAi3PVa8VR",
  "key6": "5zJUY4jZkz7aCiYx2JjqVvteKNyR4nZbx5CR2THFMqFxneyF14N3cX9ihpAK1eU9SEfzJysp854GmjHX7ggqBMWw",
  "key7": "2uCEJXodiWG3YWfd9pBJSKW1EsxgdSKqYH7FgruWcenyToj3xSdCYph2nnVUx3DpiEkxz5ABfnuq7GkzGZdVyDkq",
  "key8": "4eJ2UMmRoVemovPNmPp6Fq4G8Qy9nAPCUCXNfwDuqsZxFrNz3NyhAh1rtSLRyZwF7T1wThyVHFYqiKMLJqXn7ukv",
  "key9": "2k9zYr9MBkw6y4fN9UJYyBHrXVqdZqVEsgo51fguuqXx2pbxxSSVVP18vJUE98kvxWeb4b9gjG6VV6U8obja4BKT",
  "key10": "4wqCayXKrejjQJgFWUyZMrRimxBazy2KbRc7xve5UpZbGre36HwFqRndwPdAqH8cbwJtVkLuyrWvEMsSCAPn1CMV",
  "key11": "5jQLafbD78eLVgnPXVYDX33qAeLANARTzod7UpfGRLsvoi4FgBYcXu5iCseRRXQG7esBaCpEFp1uy2vmbx4nQrof",
  "key12": "2EsQBhqNJTLsLyM8JYtQaKomsXNpzGZ7VvY3V7d5fX12yTjjS1FWb136mbpvrijkH5DMQ6ocDfs4ZmnEjgZHpTXt",
  "key13": "2ktYCzbKw1oHLQo16PWoQMzkEB3M3fSvRKoovF4JsukxyeFahMhdXEcvwaooCdVytZtQfuNnXD3Uu28mux3z5W8s",
  "key14": "2bR5b5VdgqaDNHt6oP1VfCY8pH1on9YeWNUgTZsgtCuxSeYVYRoZbnSJF37oSPjHhJtrphsgDnLUw6E9GSBkgRLq",
  "key15": "5bpXHFMrM41sAFqxjdSmasF1bbsAj42DGA4RY1QCcBytBwkxfNehPMemohtNVGs7btDqaQr7ekmtHo9d1SzpXErc",
  "key16": "2JmmH6TaDAxnY1ZWaQs1WrVBF1G4XvF5MFCwSYGrw9TRPqKtabenQJ5buqYgX2iqX2PpFbAU8CWRPHvGAXd6yg4X",
  "key17": "2ysCzGPrFchSrToQL8yW7GdmgBeSuSjA3HxuuAEaWKSKRXaARSwni1Cw9HzzEG5vsgdxYKnGZCASy3AjDxZZcLCx",
  "key18": "J8jPPRtrNwcn3bN1gRapJxESDcfJ82ZbFnGnR56AjvZzgD7nNmcYsqfyziGX891sNBpRrJ5bcAqiToE2Y5wwQqB",
  "key19": "HVDHdHLpJYdiKMTrHeMm6VWxp5Pi9zTqYLhtGBoxfuagPHFcYhXvBm2ZdcfqqGXgXsMpXiRCQD4i1RpaVtiPZrd",
  "key20": "63uYtbSixa9uqRGewcoEDdJ3C7Syrcu2DqEsjwNDhkTngvGnmGqXNfE1Vo4dXFBxnJtSbGSxKPrTJXPF15KqijYQ",
  "key21": "2suHAUv8XL9bynSA3sxrzyFPk6rST39tXexxzTfeKu1UDTFZZsfyeT8S7serm8wKyFnHVNkj5JLPPNCamKL15etq",
  "key22": "B8PQoPb6Sxhb4yBDCp9u2gnmQmojGzR48CWjC7seGMwNcfMSX1zLt9KyVGLEKyty52iX2oGDAcsh4gmuDV7xUL8",
  "key23": "5S8VQ2FEphfCUJqmjLEUK3qYt5pGGb9kF27Vc7iAZ5jnRXF3vb8CEcKnMCqwfRs55wuTcV5TBnSQQm7xWbmtDmW7",
  "key24": "49zThFJW3ZjgGWUF4oR9v3dEASae5a2mf2YbFimno6vnuES254Wuk1brpFK8WRUtrrnQjhev6JKVhHHLc6M5T1pe",
  "key25": "2XUgj2kTH3etSb3XhSze1qkaAMeDJ2xbmReY6QRVo5J58grEYV5W7uCDKD4hsZsXhryb2GRs6nJg5kYD7c7VgSB8",
  "key26": "47CkEUETXzh8JwmnoSeXXQvy1fSsAgGygoZD92ymxZhUXKUDE2uPM5MzsZmrftqnq3X6cUzfyhfQzNFgYZfjt1Ge",
  "key27": "K7WsEAZUFb4pzu5eiwaKbLzr4BopKVTbzUENKuzJ7j9HJP8PJrJgoSW6cHQ4qNQP4jow3TpG9dYvRekcWGKKqji",
  "key28": "4zAUMcTJMcmpUWThUESoziTVLhBVz8Tpq9cR2Tom2JwtRpf8v7YuxtsEKMiEr9fy54XcsVZiJPzcLLR8PoBwMcuq",
  "key29": "szjDqZhMHDnG49DzNZ4HsqbC3v85PHWnQeYn94VNHVR2Qu5nynzpCHN7mJCHsN6wCt3ax8HGjyan6YKp357LuyC",
  "key30": "3YDydJ1twXQQhAvbwSeVgnpzbytPyRaHnL6vVfyi1pkmJ4uYeYHdp3gHpqNGNjMr1kLFMsWHAfgy8RaHczxuLVkw",
  "key31": "5frBEPen3uUAR3ySYsFMeTVTmf44f9KLcgKoHKXbpZ3jUqkvjXKkXKV4FNBMELhMasuaq6LhPGaf3327YUsVMN3Y",
  "key32": "4Rxfz3J63uYXv3dMuN15dM6fc57YPmfWa8qpXpFLtDjyKh5JvG4YVXUmgXqQy1cPZLdL68wStsX4U4yRPTnmySpZ",
  "key33": "2Jhokh3wq7Gv8Lhi3pHeKFvTLh4df5FRgou8WEKZFEEJ3h8yJbn5kzpKCaDpRop97S2JNMpohtopyRN96vxWnG2R",
  "key34": "4bNC7CAG9mbHWgyoaFuXeXme6rqauGMobWjpSk5Eot4LwirEGVCDjWwTmyfEgMedvfSMZD1h7uzTbSHiE9LLbbig",
  "key35": "2wPQadfDhQbEWJPCJkWhARfXZg4zXTkZtgjC9c3fu4B32NaZrPBF53LokX15xyac1Y9wci2n9d6ZAiqVynn48eeq",
  "key36": "63JHvnbvQfG1yzu9Qzo516BHwEGp6fXVSLKTu2Eho8cRsYxrfeedbrLZZ2xhBE9ZJqJbA6H9nd5QwRG6NyP3mzpU"
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
