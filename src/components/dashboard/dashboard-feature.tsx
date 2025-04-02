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
    "tVksBP1sng46pfjiGY6aR1LoU46YDwJUdwDTaVzrUDjCFWHax6ckm89ighVjy5jFCfBE9CPmBSYYWrSmCgztYdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Aso8JBroffBks8o8h8jtazUdZfXKZmMhGzch56omc9dJHbM5auPo96aLbL9J2zBVezJWDkyqzBqk5D57Q4uwQu",
  "key1": "2X1mRnJr83f4CmF3SruDj3xnTnWFidAnFcyuPp4KSQQPVURHj68CwJnLPpErcZsttivX4j6kJnoD71b8AqJw28hC",
  "key2": "29bGcPUtDiCTNpbqVtfQveoSoswqwCUUbH6JgReHRXiaMDGzou29jirXgGVkYRPmR8qvecWvJ8o4kfsjUWffUgou",
  "key3": "41swhKTAQ4pbaDVcxAzrgi2mC2r6F6LUCC1XyLxYYgetfcCvt5E8DvxZoq1rE8yZtaSSTtmAD3vgGnsRbaE9HM93",
  "key4": "4cwj8WLZtjmfRTsr2rFrLF3ZcLdB8h1TZ13rYpqNz5hFHvaVxTG12qCFKFosKgCujmaMakqJ4YpptEWpvgEhRn5o",
  "key5": "66JzaixudMx4VLbjsY5xFTqSXJAHTLjVyUyvRGkWiumNZWbfMk2uEEtSX1xWA3UCe6mfnPdFqj98wYrbJ3x26N35",
  "key6": "cDZ3f6KnmYPAVTHaw6G3xf8GQ8n8iZ4iqKrgjdMiPby6cesDaKfqRFkQL4k3UfPwCmuYn63ZUf14merUetXYGfM",
  "key7": "5YmE8jPH6MaetixjpXYgC5pyfutHLxSmoZD7D4pWMcrLgtG4Vt6D6vRBiUrAfwJxd6dBxwf5ha3onh38embbfXwc",
  "key8": "41J6pXPp94K6BR8fdF2QVakDLQYPqBa3b4qpwhJSuYb966JiZvU5oYQSmHsXX9cQBUfJ43gYJEBu25V3h5iLfmtp",
  "key9": "rCaptxDjA1KpD8Si852NHSvjj1sfzLbQCLWWSUEqy5qRZ7w3HkKUjyLq8PQy1ZaWEmYKBcn1zHTbJoisSxrHJtH",
  "key10": "2yMhhJbLxgC6H16Arrf5gFfFZspGCtu8UbxGkNoUknnmEe3VZaKf2rnyY2by1ccVXEJfEhRoDjrTjykUvWpjaRme",
  "key11": "mwZ9pmyjc3dysVAcjtfwMLvvXeWvGDCuipYLV1NUyN76QRbMTkCigmxtgiuTydyVFzspj8hC7Rmte8hSsD6uSJk",
  "key12": "yA9mymvo3QRd3zFrG4R68oMywpsqqhd3Ltpy2n3RkQxmS4nxxMcExpT9s3WsT3dno5X6UzHQLPfoWyXf9UsEjF7",
  "key13": "2eiLcfCuTNN7a89iRnEQ7jHhYWzRbjLg5v7FJH7hFuPK17cm1kzRHdPUAqZvxSoNnaMX66Z1pGf2PWj5LPK6enrJ",
  "key14": "2iNASECkBhkDiV9NJMMwDwVMtgt6dsNAvc6SbaHVrxKHJtc3rggRKrKEVUN9N84Nt6EnGnvdPCexPT44k2r4ETdj",
  "key15": "67jdxvfZbxvxiusSCLG4c5TARXCjuuDByGhXhgHBKSvxumiphG2K8cEt7daTye7Dq8n6pAjpEsqPCrihWpiFNzKH",
  "key16": "2SkXBDYuaB3VV3cHTfyyyGJPuuejehDcy17qtjmU1X4yWLCtVkcXL3UJimr77y3uoMGaczQTTHubwjXpdP1dq8Cp",
  "key17": "33JqrA1qHXQhuj8mN5wcwYiDqSYGFcT5xeLZeys4AY3ZZwK986w5m33ipDULKNP7nHkN5RhwF4BsWPTz7N3xPUdV",
  "key18": "2Rj3Z24hm1hk8oacnahRkWhgPACkA8zbhy3esTgfmBSf3Nt7XEaPdBHjw4JbVrAPUAzhYscBUWDH8RiKUixYVY7z",
  "key19": "2ttok6CGJiTURz5DZEfUUJhwa9zwfYdZYiJHu9sTpyfXgySN2gp6jYu9Rxwe94N7Z4EDwonTSSAGhB4JdAjHiZbG",
  "key20": "5ofZBvQ12fKWYMtoA98Xe7SajwJZaB9anMUhxf5ZSeRJ7g6dpSTdvDmS4UiXu5wBhvftBWjXVfNSP1pQbm8mnhf1",
  "key21": "4HrQKkCvPLfxLTcpFwncNbtHkzEDXW7kJYDBbbe7vZhEJMaHbFS9rViTUdSbctMZh2XrJRHi9tUuHBQY8jJSBTSp",
  "key22": "4EGdvh639CnzfgohjuKRTR6VWtzyQmvKe8uzzrdBDLz6pXzTTNVtAZgnePJr4Xz1kC1qwmMzqf6QB7imfPYaRC7i",
  "key23": "Z2sPtAz1nYJhzfyAaxfSyDrgbHutPL5sD59HYnJnpXC7SHGiJtfoxUTjnMD8jZvhKtTjru8UtbEczSetxbwfUEc",
  "key24": "2vQZkgMbNt8gCUuw6PJwCcHEsDcRdcGGR7dcadnmxMdbYadR22xRFBHjSJvUmVhtfbKKP5VVAzoQAXK4SBEaMUs8",
  "key25": "4MQieqEDYPwFYLnv6dDMXFXjSS6ofUo621FdiDx2P5yfpWmvR9CJD4v8Q1QhsnkwJog5V3ZoffvMuNAN366ppRnz",
  "key26": "5Lfzuvq7sXMgAxbhWunHTQmj4BiaZrAnjsHomBzCpxNRirrLicPGtEm1gXuR1nhUW2E33VCCji2qQ81hNBY2cUZb",
  "key27": "2Sfd3eSyjYJ4ehXVJYbky5RqykcWgjJ83jsf3mECTzjd2cqKb5wUWXnzptrzU5ZnaLKnokziZJzSGG2XLBBUAz5B",
  "key28": "3yisy1rwNva4S1gr1qkV7ddvmGkCeQViiG6X8Lq1zqEXQNN9CgarKaN8Yhp1adYE6cJuFLEcDYM2uoFhQ4PaShHn",
  "key29": "PAAVcvwsMoLARf8QxgA57sMqj8CW4uAwxHafC5mEWZaKbgBuZyw6AnTYJdjQU7nkCDpHoDhn8vCzhgszw8Uy88d",
  "key30": "2thkPbB7WJc5BQjVu6j7w3x4uYZ3KCwDTye27KDhjWbB6QD7NxDrHFm87SvAZ47LF9nYH7Dq68U3UczpiGLN3sw3",
  "key31": "32187jY6qwp9PH54xdCUz1MexzQyMHqPTBCwRj65tvXGcs3Z2PfTpsnqUHxxuuhjWd2dMDZzAiMnPhGEa44ECZQn",
  "key32": "5bfK4bXfWcHhAichn74rLRkqFALxUtyNme1wpiF9epnnF62j5iK3LJrY2vLtBN8Zx2VUv4wg4cjZY4GFTHmAUbdB",
  "key33": "4epCiLk7PP9CMyToEsRRM9rWZWFPiFon2p3XBngenFX7yNnKRN3ddqzjmn8mM536eiA3MWEqwhmVAS6BYuvPsoVP",
  "key34": "cL6WjPh6YqCgf6v9Cwr41KSR9zvZZQBs9se3KQPS4pNLqZT5zTewNj9uUHBPN4bY3uH8hT7Vn79gD7EwHe7N3uf",
  "key35": "2pfZNA9MH5bRtwMD2a155qHhr74ou9JYFcp9VXh7fqnWNEVt5v6LS52ch18NvZD348WFMbZx7sSLL4xxqFMv9ecF",
  "key36": "3rRxMZQB1goKYTwLFDVLAUuQyrK8JVLvKY663xyPr2WegKwpMHybjye4FdxELH3Ykrt65BkvJxsHR4DsHFT4k7DM",
  "key37": "2NQxXsXrhNEjG8AneWkPjyaG1csCFNS5k8CLYC8wZWogrcwVfkU6kTGJtBeFgiBhFuqjNqxmCumYKBiL9qGjCNNs",
  "key38": "2RijkXsg8A7tac9wKKvmrE2ywrSi5HAoxEKqWv9oZ6gpqMGtmtF5uo5UBj3b22xNM3pPz49EgHkEyADNiN1wQxYK",
  "key39": "Yp7NUUysWDyvaY9uxg4D29irL3SUiKEusKL9W1UpvZDi7HkpoeLyJ6Xqt9nXoDu7pezzGuzEeAVx52suJXxrZpG",
  "key40": "5gAh2W1ekfR5s4WFHEQ4o1mmFrCNr9VG2AQYCxLXdbX24kEUPwLRVfrGmxnPxiUiXZ4zTddBCYSZJNWt5wrXz9iz",
  "key41": "2wwiYd56i4MTACi6ke3eM9rxa8W9vL7EcuuCHrHscxxdp5a3878DNvZUyqLUuBncjddvAAS4hppjYiM6VmarCtNh",
  "key42": "3NF1SWpj2WDrWzH9z3pYGZJDGkCCvbq7TsfwbDA51MHUsxo92kujf3ofRTNUred19L3M3rEBxbraGXnsDJ7Gvmtm"
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
