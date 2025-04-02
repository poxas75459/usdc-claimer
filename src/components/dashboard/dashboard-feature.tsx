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
    "43kuDoLW3bwye8ThVYvDCw8wAMGd6vo6JymQd53UhWqdzAFqLXvuw3ye9peJQPL16Mmsw3rDFBSm26xXh23kpsbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jZo4gFAZYJjZRTG77Z2XhyJbwFBT2CMaAbyxVfwphVQP8V2X8KxgjT953wH7Lv4JyhhYW3iAURrfjyrYyAnTCGR",
  "key1": "4ShA6TLCeRdwWjkE45DB7jM9ad4KmL4JPGe3gjFZUZpoEpqQPYXmt2ngBhH32DtWZqKZzPfFQmYetAucR2EiBCsQ",
  "key2": "3pHY8Wy5YvqTGsBwrK8m4meWhPjS7JqUtnuWdKC3cAw5fRspzrdCMF4bNDkUGP3oNvcfAFSuofrQ75Vmac85EBey",
  "key3": "253czAZmyhMoHKuahcmMKkAQLBtQx8NVEKgjkJERSjZ1ZmiS6zHq8VSmtW2T1pJea2N9ZPw92V89RqXnQun5c3re",
  "key4": "3Duprk1MWxWvYLsWpi29vYWjk9YebZdFswvnmnGRDqaGatGd3J54FWGoL9YKH5KeK8i7C7ym13CKeaepd5HoyQo5",
  "key5": "4RF4CXNGFntzU5Xnx3yhim97btRh5e2nCjeEo2sKA3AjjtrwDoNJwSiYDnAeMZGfv3tS5zoyfyp4gDgh3UtkCJgx",
  "key6": "3Uf3AgRf7nv8Yy5oAN7mYPWLkXUb6yPjVbBXYkqnKdNxfr5vrmJSJwVnteJgKiWQqDaanBBFCpANdTqzS1WJG8NY",
  "key7": "4TUmwPoeEXp9x4fv8SFFvY3KtN4zfdavqLDKZ55q5wpHHrJgSEz5pAyq9dannz7oCcvYpwP5eLjcR2ocSgfBXNPN",
  "key8": "2qqp8cfpN83JMeGESHidk1o4fxEeWdGoNHBRv6SQdHX9ZHxABXvsM8DMUvSv71aaPeW2eKS1gasGwENpQqadWGQH",
  "key9": "2MGhMf9NeWvAJExXW4bSbbrjJ8ovVB68DvuMLSsdJSBYL6zFHinXAbGPoDsTnn8yfBxGxwt1tkcevrroCDQ1DbZk",
  "key10": "5GzvZhC5jwKhFpUBsNUCuv2uTrBA1cjWDQbC43fsqnVMjWA6FCz8go8EASF4UNMXa9x2rSiszu58c4d8FSM8bq6b",
  "key11": "5hRZWjhuKgt1L3NXGqG5DiiNk7PbDEFD1GAEYq5E3outMh8xV8Y5yuGwQE2xpvgWcEmF8Mm7QQ1Yj2Z39ejKEG9T",
  "key12": "MSinvuv9sf5apfvow6CNjKrYEf82Vi8wneGoGemrfgYoyExy2yoYJ6nun3nk9fkdxLsJ1EetCaFbeuDb2869Zzn",
  "key13": "5WHMKXUJZmfEG4ifaUiV7jAufc74sLfyi5qixx6qX2cuVpmRpZpW2kaXLThzK6KvcaJRyTw1DoKyhCnwivPuJjAe",
  "key14": "2hPe6BTH295fUDdgRWjWqMbACPcNiZHnxQkbkY4MbTLvBs2mDeoWxCAhbGiCxdbBJGzsha3W22WCMSRb3sappJ2h",
  "key15": "GJ9rj4EP1YxifTHFuFDyREUMPijRh6d61K9kKhnNxjU6RXiGJJ6N3CRryWXfr9FSbUE2CC2DXouwLM6ZMbwPvEk",
  "key16": "GYYgGeMV6zR7hJx8yjpbPuhtr8kS3oq5ojaP452DWcFHYTAmfGbWzjvEhr9njcCWFi8iMew2F5wXe2JcYJccWuf",
  "key17": "61CFm6DnWBsnxVZZ7uwmSikJR9wpXeHd797P1NUTCbp1R4rvyqrafADfrrXkrJG6o3q8Cfwmy3rm2nYa1NfAPeh8",
  "key18": "278eLvNWArDHY5yURVRqrKmaHf1RCrhU55BRW1BBNFMKJEFGW4gtBua2o2eK6LwM6RTeyGF8Nxp41HbTCTgVig7X",
  "key19": "5ihjn9YQLWQGPrg7QviWgMZrS6RNfmZWHBAAGCRcatTnc1gGfHF9s5XobYbWrqANWuBY9N2AvG2CEfgTBtPgq8xD",
  "key20": "4CY2YiFfg2gKFNJtbYh7zxTqoiJEv4WTTM5S6eGFUtqvtmm1fgsukhf7ohoW6BmTiv5MHBTpQ4T5ftTUdsNcj2ac",
  "key21": "3u68hde3efHerWJyPKWEZn8RyChQvjEQ8nUrA3TQdoaDR5D8c3YjGp5jtEYGhucyoc4BBjaKb96jeqpWd2e9HcRo",
  "key22": "2x6cwrzvCiMYeDt6ygJrhj6xtMCwcx7L398m6YXaati5r67o8Dt3ydZVcyyGsAqKDLvMpUS2ECd3meUUXndGLg5V",
  "key23": "2Xz41YTLoxtCeim7fAtM7REDhmkidLjpqxevMBmTM15wUcPcisFXdkb5Nb4EjEEn8BgcCRySqt8SX2UacL96jaf6",
  "key24": "67rPmhpfPyhMxfv99QToihYfvTBFZruaZumW4auzi5hD8yWrpicdF4vYXktdCoKfTXKSeREGYJtxT4RHoshK5cz6",
  "key25": "49L8ShZ3etia2PDyiH4rTGxjKBLZ3bF8xxpyRXUUoQkYhoUn8ZeGF7eNPSa7YxMDCpFRz14gnyzf95NF6DnohHda",
  "key26": "QLFe9ji7CzFsXh9ATXD5dXFWS8wA45pip3AvDmJq4oxJd2wsChf3N5b2PpCVYweg4pbXLDjiTHxESY1DQhmg62N",
  "key27": "2JZpCHHG1iWu87AFz9r3fk5fyXtCVG1TWngb9Zr6yJHZ2ZZmGsmo12DFUXYYRWPDWugodE14sBFJ68AocEgMj5va",
  "key28": "6aQ2ysgxL2QyEdJZLDzBGXJBbEzeBmpTbtp3sm4rtG7oAy3rcyZZMDB4CdTqCCAbmAuFBejgDJ8CHXZuZ8hD3rK",
  "key29": "vRexeUXzxAxsAdVXxhMyg2C4u7TD6JeayiH9ZYsEefyq5RwCHb5uA7EeK5ZpW7MnYtPfeYN89aRryj3kA4nziw5",
  "key30": "37ddysaWocgVGTfqgJdv7z8vnWMcGUALuYV2qUb8PdSdiwDj3CSrMFtpWuY3YeHK6Swpm7hDBCeWXtCEPTQ9eW4N",
  "key31": "5Wn6yZADkJFdXtWQCiSVAk3pKX4DCtmvg4BevVnrfNG7BjsjHm9k5oLCrSVjAmPtH2yJKQpfpEjZwXN6a3WAZpyv",
  "key32": "2hw1KzDuGjSSJYkSozRv7Pjyf2eVVpj6jeXstPiEjPvANYwmbiJ9c9A5SiHv2THyXxc6NCYqPddKUpiTXDufyJXY",
  "key33": "WTy4XWghdWfZeZvqFdW9xTwje5z5aG63YTsLMX2SbRxZ1M3KmzDCK4b2R8phmtxkRyr8mF82BRYuuTgnX3MqBhk",
  "key34": "HWRaMsveyC9Ce69gwkVBV1HrF4UrSckWVRbae2FGd77v996B4S9cqcXvj6jUmKB852JQawMVKYJQ5KYbn1kmwdJ",
  "key35": "e4piCpm1zRgdp7rsdoVLckhcFseqMMkVpbv95RdmoMMiHk73T7nghXerVuCHG7ntCVcCTDcmBr23w5aSDTDcZom",
  "key36": "2xB3m47ARbFtP2GuBzvqgQY5tZhnsUo5py7uj5nivF5fd3SnJcEYjpc85MCfJZ1Gc6pmoeLfGQgfENGbD3zBVPva",
  "key37": "f62JubZMoBiQS42jqX8sZyBem8y18eyWoNXsV8tL9VyJ8Zs9S6MpeHaGmK8Z5WP6sMatiybQHAN2ybga8RzyHQ6",
  "key38": "25r5uZbNn5QNLawgekNaFreRbJ8eMhZRDU5XnrTZVd7wxDuq2ZaSyPvprXTd36RKiV2TiFgFkxH3CkMud6WDeNN1",
  "key39": "2vZM6gqT3B758RAFMuenLE8ui1brkeie1yaKiGJiDHViYDVDzNe4vVcdp14bdECr5Cv8v8qWnKMi22gqF1JzQsJq"
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
