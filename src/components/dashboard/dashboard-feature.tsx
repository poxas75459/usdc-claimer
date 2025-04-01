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
    "3aDgik6Pf5e2d3corsDzJhUY1HhMi5hMFJtLT5gixfFWyEUagPTdsV7W8rNfh6oFEaDMhYYZFPvXcf91JLDqEsee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kfz2ik6e3YUKTsbv7T5u68v2vcBLgqNcfBT3hdT52ToRd1BgTyfJLbQVWzWW551wTjHExYtoxXKHFDUW4jtM1Go",
  "key1": "4zmDhwZKZHQeeAApbgWGcpNDTvkwrtevrJeubRaFTufTqQsJCHJoxSSeJ26gXDJZDxnhiC8UENfJ2B1KZrrZo1XR",
  "key2": "5Db271jyqmPk26xdEqkVvC4Xb8oNAqgqgPrv8PuHjk8dBYx5US37bka82LQJZrvEvv17YoKPnvPHc5fDj9G2oGXY",
  "key3": "5j6nZmFAq6ratKXYSTfGvsuVsreCnkRViwPEYV1aPXKUFkY7FnFJV8VVY5QkYo5b8jSmKjoo6tCE7CFAgZsW4tra",
  "key4": "5ueEvytPgt9yvdMjewKpCABBxTw3Kjr3xheDboYJNrwimknAJUkxaNggXsU3HE5YJWGiT4BfUsxpYKp9wW13j8VN",
  "key5": "3nNDNLResMZrC3yrbZvAsnGWH5nAFzQnjbnkWBsbDHrEdCwXqepDPW6QKqn1DD1rmzkMtLLdehmXYb1MHLdrvCFk",
  "key6": "5M7UKFQweCf6ZBqfVPu7UVkP8aNfEDbWcygHaKunJW5unXcCUKa1Lh9uo8WRShQaJQkLLmjthvTAYiBw1EcPQBST",
  "key7": "8djth3cdx4JpWZjYhuFKrfKyeP15GFa8vWXfshkgBZjAmHqVUUnwPjFwiHt5cR43zPm9tJGSbpauYWL8s2iPYkh",
  "key8": "44zAZ91XKqaQtt3pMXgvGVt8HypyWqM4S6dPGCfiTvcGbdSU56iUT5oPQTW9tzFvGfZpokgKkwuQDTRmggjGrRak",
  "key9": "4sGVH3aV8vkFRNsZcEm3kYcQ4rqiHMSgjRe2Eyed4bMErpd2iRArk3v254R9KTWiPHZKx3kkmAzt5iZkrdtcSYhL",
  "key10": "GeG8iMt9fR6xdgthrnSYVnEZfBrkaoGkkA9wrrFrZNpt46sCHNZXmXizYeZjm2qyNyjowibcCT61TH2dVWrBkdN",
  "key11": "22itYKM5b72zbNAgTQpzMefcdu18BrUaMM8833E4h5rttwMMR1czNxBhSCzHk5Kt1x6ZKy9bnGZWNx4BjEj3ttyK",
  "key12": "2mZGy1fGdakTiKvwwQJ9peEqgtG2pFVpPgEwXJpJNvmWk2ha5BM9PVo9WmBZN6U9Fkr6CaZJH75fKhJH5kFKrp25",
  "key13": "4NMRdb5dK3yBYM5E9XftKtme1ub667t9Z2Cf9hwDckbCmKUUfpmaJkcDbbsQTuxb6t7p8546L7mnK2jMVpUNVvc5",
  "key14": "3Uv55cVzXvfX3zQm42pUhxxFkWnTCNeG2vdCqHtcpENRQHciPyT6J7JoskgdEndHwHLhiD5LdQbjPHRev2ZMpwcp",
  "key15": "5X4GG13eZnDo2fiUUZ4Nsm15PHWAz35ay3KxhGZDCtrbHFh9HtyFQtFYKhd4YYhPbz9AaKBshvM8WyE1Kmxvspj4",
  "key16": "2v7seyAPux9HvWjq3WJfyawTAVoV9X4b36PPFD8BE4WnakN7bmXaUdWGY3zD39SgaXTK8CvABmKakSuRF2qGSAmb",
  "key17": "4sT8Eapz585dQq67stL914BL2PV6xsD7DUnvLsdiwdoghZYuEFoDLSJru38E4BanAgTyBsdhRKw41rhsT4uCG7eJ",
  "key18": "2ptZ7uyxAU5rUm4EkiNwQcEe5nNMD3ZNajKjvP4JsZaC6uy57y3tJXHw4fJiHPosgpSaADMTg2cJofRRgbtUeRbE",
  "key19": "sUPLhzZry77tFx2xAmQhxRtv6nVZCH4ozvRiG9VZo7RnkQZ1urGMVwo6tPPupPqZEQFQquCrZ9p23z2kjiw3daU",
  "key20": "39gvG4N3tFmNbz6F8rowXQ4xx4W7eripzB2J3KJJiCaLGGR33oHQs37AAFrmdF3Pe9idysDgRNyQTHarqXVYXUpU",
  "key21": "5rkTHKiZbLxaZm4kbo97WGtVXbG5i8hAHAPXwdfY6PhhyLxZ4fWUyFr1GbBp6kKoRbmUvq1wQYTLCc2w5bNaaZCD",
  "key22": "38vhxByKh7Zh8PeWTeTCTXvsuNGe1a1yAjkXPDh2xD3bTTnvxRiv92wiV17HDvaKZWsG613PhXh7zh2cVdwhEDNW",
  "key23": "SSroFgXqzHjc1GZnTdCLgBezL7exYfzT7KeXJkT6JD7Z6SZJ7duvXQA5Ve3HUtj8sWo2NXyKGJjJSZf3E5Chz9x",
  "key24": "51XUjYGuZ6psSQbNsnrnhLcSxBqtZFZsQVqstgajeLwQ555g8j95TCtSjGyWTgHB7qMZnjR17PNYB2vzXB9bjeoL",
  "key25": "54kyC5k41YHBexJGNpjTufr8UkksD5ozkLQDmPYh6ybH9sJj9UUMuQXws5fiM6Cbdj649vxSc3GeHoZjC3ER8Q3s",
  "key26": "34hdiUYaRw6Lt8VJL2PJ4woj7SF2QtuB1b2B4PVipBKxJrGcmCbUx9v5bZgyeMn8nvHMQ9QVd1ejV1HnYbJM6N2L",
  "key27": "2HKYH7UUDXHqaFmBRL5iPQnrSFZM39PCC3WHfJT8pL48tqb9cRRx8ebXrGMRd1dZLbWR5cJ3stmcEuCXcDSamzJL",
  "key28": "2EZe6g6vAbyEkGADtMJo69bJuZnAZVjniry5US3i1jN8bRbFk4p7swUaPVkdWJVXb6fZLjXjVzfjRcrNEPwjHYnY",
  "key29": "42Zopzqq6St9okmByLCBacegib5JFVGbT1FziqfKCKXbkWhS7AxUciUz8uYY8j9diyTk3s19BpYv5Ac7JBiaGQQE",
  "key30": "4CS3UeC8S2it4SMcEsTMkPSutwX4Wj1NLbkvpPGhZaxchp7wrNim9Nu24RJyrgZYNZ5sCScTNivMPP3W2vqRZfR8",
  "key31": "5J1Si6JVt4i2mJEu3DmGyteqtnoAiKLTovFVYgKLQmxxouiG6mzUZrxgM3eQK9ypxzdZXHmtNxrTqjVin4EqCGNW"
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
