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
    "5aPm8D3ALpAA8yxSPcW9Ck7JfQF6ahqKqZP43FFJECgMNy8zvymzQnMbz9AUAumXrVU8MKTEYmZsAM6bYUCgd9w7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uLmCEfAqh7Ksubdrnrf9jGtWtsgGR2TNz8Lu95JzpTKcjESrhJK9iu2qGFaMXh5E7Nv48BugriDSnEUvWPfCYVS",
  "key1": "2cSPtoyyMP4ACsLWYZimLEnn9tfnvpoAJ1YstdwgwYXBXjZHEKkRJhp5enfbbsTMYD6SVJ4CCEwKvGijH23Z1sit",
  "key2": "ZNnmrNisJBkGcz6mRmtUsQXPWogVKbDM2MmQfMbA6ogz4Cyjeopnj89pdBAFRdiDMpkJoYax1wmNBWF2brJAwbe",
  "key3": "2yoruMiYWeUP6F4jCPJGBn6qKKtqhpGrWmGgTLbVvYkk41sxcw4CrmxJG1YBf1YHCoMfmkeXYEgWkXjHdT6kCjdC",
  "key4": "EXRFQkgei8edoxxwr2K4qzKGseyXXjAajEeqpFMDhmAX5cDp35CcdaFPRvVivXRaJs6SerXi5Fj3gJGexWeM2qw",
  "key5": "3SJKMMZet1B6tMhJ4kP5vdDpZSTQKbRPFSph6bX4NqDpTZdXnCKvBXwPadUMN5cpxQYXXq3zCoDjndNLmgwLsbWA",
  "key6": "3ow1F3ikJA8h1jXzs2SmTVebCbQJ7PWBV8DrEMw5LLgigzs74J2FtSJa5yfpFwKwao44xdKSxEsBNuPvFMBSfN7V",
  "key7": "4vAsp5TH3SVwDU2zEbdbWBFfLUUM5M3QkwoUt4UWBfnSZy7n1CJtpxYThPSRGbx3Pqo6E81Wnj2NWryLpxtPL4WJ",
  "key8": "acXF8a8Eai4oW1zmGjzL3k2Z1fMVatGqNhRe2seJL5nkfZ3dFzSRz4A7JEnGLnGpebfswZnd2PBaHNL6j4qQjxM",
  "key9": "5BvpcmiELuqFdc1JgnVu4S3D7zB7F1LR8ckKcfhHRyh4qA7b5DkwbqySMQegpqwVz293PYPCfEa1UonMdBE4fVTA",
  "key10": "2Sa2eLM9tj6VXnY5brejaHUSxNN48Ppf7Ct4yCWTrom2c7c43HpaTRE8B3fC5WbpVKjU3QWqRomFe9ao7G5yJLyd",
  "key11": "Ai56TgF3WWsRFUenU4rvAmATkqiHo18m5w4FrG3w7f9E7GbVWcCBPdRfMd1PvUqYEuBgcFg93w48AkMRQBJnhoy",
  "key12": "52DjqRrtXv1L27Gge4GkjqL2AUCaRidfzpa4yQhyUmv4jyiDeRA7SAZbYA1JFcB5zxMfXqxty1nzK7xyC284YM53",
  "key13": "5uDPvFaGJ3JDW2KxWd1CbfEvaJeYZxcP3CAvfnB6NU6SrJQdEUYqWtjTLBkprYtBMKRTqMf5nZ7woBrRy2EBGfu",
  "key14": "6H9fjRBtwLVdtBMntjZsdAQJSfGyGMPZb5AGYuGSbYsD7rS43EgkLDN6W2t1V5eucG6kb1fukcikVAFJvvvGWV1",
  "key15": "5G5D2RX7RfPV3VzuaoDpDpyYfVPok3N8KXS3o7SvDpCUMqQ4RTUdq3FVaZMgvpWhzGqJ8zpht1eYaZ4iGiRftkDi",
  "key16": "5k9WMCMCVwDfa9Cwney6zvJc4AN5JyaLQKu28eLBeCeToPnVGCpKHYxysTShntoWNWdaA6XRbZCB69x3Aq7wKFDe",
  "key17": "2fgdNi49btEzqBcfPYN5JutueGKyDe4jD25n6m6Tt8xk6HfUtrYB51FM62sW58uvJT4AecYemehaMEyY2G4nQ7hp",
  "key18": "REZo6cjwT6dxexwgS75kyXSa6inti14h3irC5kpLMfmz8heaoDw82q9yF6qKFsVWx5DUwMXkshpve29NyHswtkG",
  "key19": "4gAjEuF8g6YwboW5jpKqdyKYTE7tytMpHDHKsHW9ckocwSpS4Ej3mKkDwfWXQmHFLSf9tapy65Mzz7SdSd1BfiaZ",
  "key20": "35msc7M9dSusToiSCvqfmymU2aJWR2WgeFEhxGwZVhPRFMdAwMpF25ai6dpNom1K2KVjDgXGronoJ42xeEMEZYJ7",
  "key21": "595mc7MgvQkHaPLz34KeUZP8CjWTkTiPzoKoAwc4JzevMim82KM3YUJDEpzmBKEtH9gSQaLUVdwoH7C8gFbgP6sy",
  "key22": "3sRW4oj44BCWLTzQVgnLNtkbJ3sXNDKGpWk2JBWYDmePNtHP9vA1hfXwjkR3QJvaA5VxVwAdFxzKkJXthUkW18SA",
  "key23": "fAkgCWQXQt1yHyvug7ktWmmt7cLFqsvDuBii4H67hMKjLEiSVXFR9Nn4FEHqw2XBRVX6XRuTMpCdhpGpSdfFG4y",
  "key24": "3rDtf1ZfZDVBw1EXes8iSN2MpT3SSrGjvUZkskFpzZ2UU3NHdLfjhym6CKBLkNMz5zJnasCTnrkzG1XJzvSn6X1D",
  "key25": "4fyzGvPZ4Je6UJWjjMJ3rNgVAXM7mK16vCbzPific9qg7vE7wTiYgZo27f4juCP7H3tuyaEcw1YDE44UxoB4pDww",
  "key26": "48vp9sMD7Bun98oAgwgSqgYDqSdfAZey2a7jw6aiArvEL1W3AF8z1enCZ9qbHWbLQWETioLvgNSyCwayhbKQuns3",
  "key27": "pvs6smeYJh5AA17QhMFGfD7LZ9ADVbqKvfeX6rMZwEhmaoxSvqtiNiYeG8qWPSPpRG9jeyAmX4tT3dQaG5E5nAp",
  "key28": "5myR8o4YxvYEz6MMaoKc9MBjENSX2Nd82BcAsT9GAnGVjFGeW8kj6PP4Z41eQZUeHQkdEsLmr3rQxHhrwHfoyBjE",
  "key29": "4LE2ohUnGD4kWUNsWW7oFNYH9Mr1q47sBK8vnhFxsmDrC6LhYH3D94kWjm2PzkoZG6pCrisjaUtyiF6ZerfAaWSu",
  "key30": "3TEj5R1d2jTpkPt4n2a4ttQB2htG4SScq2M9e8su91Uw9e23ShPQS1UwZECDqU4ubPGbqArv9RLfQSqh7DoL6Qx9",
  "key31": "s4eBLhJVcqjL1RzcMn9JJvmtHAqaLDhdsmemE6seiEtVLxEz4yvwtX5X4NfUxJwpB2TRMmpGTULWoNWspRwwtcD",
  "key32": "5ZnnXTFHQqof2dQ6iJiF9hEWhU9egZA9yFbFLaFU5Uwj2fcqcFjZEZMQmfyZYE7sdtsMHWSB9EtfvnxPaGT63SnP",
  "key33": "27SoC3ud5copgkwuyQKoW1t5inNbywpTwXrLTnazMnRNTYGNCNYro3scxr1DAxrA1jkHJkY6muhzHrmgSaRQzZdc",
  "key34": "2sa4GecEAoiLKBgMzepCDsN4iokBJY9AdMLj4ZXd1J4Tne2Zr3rdSFtFTe9mBikZZY1ZLD4WMuaMdVmptdUSoXdf",
  "key35": "2HaHWFTM8tCh3UtgYABQJ7pm6yMdafMLceH13EYT2QxQewhnPexDu996hS6zheeGVYht1c9ywitQHCy5D5covrt3",
  "key36": "64rHxzJA4qUdfhVHD9zNLERbR6B24h3Wk3EyzRakHjRh9W5RpsXYzWwwyijzeB1FT593j7fydcD74ntMT8Tr4Wn",
  "key37": "59eVePSbrxf6iE3WMvRX2cjqoAXXWpw8K51fukwHU1JNRNQfcCvcP6Fv96s8WgWfnoV2kx47XUZFJG6pseXuKMWh",
  "key38": "3kvAb8kH78FQLJhxho2gusk6UjeThnwzAEw3qnj4Dsv8hS4YW9kaxWgksu8kp4sbARXGDSvmXSn8x7CaAMyd3j29",
  "key39": "4aGfvouUV2yc43aRruoTgp7uFNPHcKgs1iBeGzVSz1LAUHfvUeAzRigv5S4u4uFnVY3nFhkgx1tXwAhGnycWpgkN",
  "key40": "3ZgnTwHwu88wxGybEDhMEuLPyuYGgrccbzeE3pYRvgZSUL4xNuPVnH6D5d13vQe85LD8bTPS6pW8P1ff8jWLLxLV",
  "key41": "8gMjB3TUUhsHbjBGS1cwQpwx82cwPs4J4FVVYfjYncCvKVX3df1pt5wBnS75zp3E2jHUA5RtMwe5Ss68NJQPRXr",
  "key42": "3gfCVR3LAgmDSpHyamih67AmgX1EiFA5gupS1EXZCWVKCSR6MQ5UYqEXPaXLjjC8PjqSnZfYh9btpVChpsrA2CZr",
  "key43": "4bMfVqGoRU86rm7PWpenATzYPn9jcYQiTHFyey4Xc5Rh9J72zMHcfKdsEpAHETpXSeB1H7AyoztzZhJaajupFSV6",
  "key44": "5cfKWiaQXFpB5FMyuDLXr4EiA9tzhdKvsCWQpCCHcgwCRrcTfrLXXbdBki26zwd67vsVz1HF9cUa8ydqQGoHX7th"
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
