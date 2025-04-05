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
    "QL3q4oxPC9baHhvdjpDVGLvAYcgvRopYGJW88E8iVGzfcNponcC6bdcYD2UhmAk167KPeAcDvCukfSLF2sWSH24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtMvmd25Q9j18QJspp8BiwwBoTjWH54YiXYbE48r8re8ybiLZ3asWcoesDYSQgX1o43ZHC3tAZjCMJpKQhm6Haq",
  "key1": "51f9FbRoTsj46Zq1spxphi5tnyohEKTLCP3urYiajzRU8ASQSFkDiVdpUCMvFbCAE9c2qZFGu2ksRCU6CyzGPGME",
  "key2": "42NESFNn8KqkeHbSbcK49q3fn8NHQeXfu6NYMmNbN2Vgc7HZuS2A4EprdHr8qtKqCE1tR2ew4zW51PnirhNncrX6",
  "key3": "2XUkxSXCJSSQPtx8rkSsLpzLtrd1tKPMj48BWM6GwzUaofhSZ34nW4TmusGeRiLd3DtgwReWwVvuYf1ALVCwmyxB",
  "key4": "2oH4FNEAJpmjtB8nWA2qWXxzCshmLenCmnhwsXVbtd2KS8Nu7Wn4AHsdARG9Riwii7gzDqsGyFWTGCJcSj7H5Nzt",
  "key5": "4KCQMVtd1PZtvboDdjhNLzL817pUWwh2A7iE3tuF1EjkqjQyKvyd2c1M377kU8XuX53wYPHcJBD8JecsXBUu4Fw3",
  "key6": "4R9rxrD3sfw1BsgRY9sg51RMQcHJ5KXRpGtrTkqViBWdePjw2sZ6SEFbsQJU4ZCZx7mqG8YksSvV5XPLtpbdT4ad",
  "key7": "2u5cfdAya1oYFdYT6qd2Y3XukPEbejYTpir72MW9ziAEzsayXYtPMq9etPT8mWBkouGAzZGLP1Vdzfjzt9rJticp",
  "key8": "2rMvVhu11cDNyDLUaeD2mihmNFXwyKYehkXUhaHzAqoSG8LHD6udjaXNke2QSM6UtiAm5Es4xzMJVgvoaqVx96rn",
  "key9": "3M1Cpr3FPN2i5CxVvboGjpvqgDJue76GLbaiPQQ1jzgDyxxT2q3ddC52khEGrBCN9So1LjtN6gibMgj94JaXuaT4",
  "key10": "3CFbqvuiu36juEzQkejwkmCxcPUyBRxcawrBZ3YCEEc8NuzFWgGeGYE1hUWHuYg4yFjAZwZHpmf9rJZmkxS7vaYX",
  "key11": "2qweBEghNYmNrZrHMD4PE213GfgZXYr5g9jend9hycfHtuwSRzC2xrTWKYazNDUwtsJNL6UqtdxhEW5UbnDXcUn6",
  "key12": "P6dtW39f5weT9YbcVNn5LFCetSmVrgC2Mu7rGH7iz74A2BHsr7canGoXAcwrtKfH5PtttYzQkGJihMWz8JL9eP4",
  "key13": "5gNvCvoKtFiPiUWBnqV98HCRLEkRAsoxfcYiCeHVDAdfj9gZHWG2qUGJgn72eGVoEZnaiXDgatWLpLToCzhuVPHN",
  "key14": "2j5ZYQ9yDGoeVa7Xj7GSpo3khfEMUdoaKey9dUFMSnMeivfuBddHLHPU9vx6mZNEVSDUAwSWBkMm6UzBDGTaL1GY",
  "key15": "2WLzuzHE5zDhFko8D21uDUMibnfc4k4mMQqvTzryWALfdm22YjjDQXnre2xsQhtB4fJ1MXPAmVK7i3mJeF1dLiXm",
  "key16": "4RCFr7FDcj8RgEXZK8Jo9j47PJvggAJAVyLmUZ6JAPVGf3rFha3SzMPd15iUmzzS5WZb7hNb23qC6x8z635aRYMD",
  "key17": "3rEx1ggcALgEszfWR48X9ccP8Fc6LUh2GGcFcjKTLoE4zzTXz51iwBN61kxbfW8hwkCKqpagWgDXqPmev1W8EKr",
  "key18": "3RjKmk6bDiigarYFk4y8NTstbCkefoWDrAPufyTWxK2USP6zGqFfTfU8yEGgZ3DrSKteWpzLhnkJGn1tnS81kPA6",
  "key19": "5fv1LTSLF22jRDg4rtMtzpEes4fCcuZ9TP8nSWscnJDDrc1p6AZBJdQDkT5SgH7AudN4VQA5tBDrRJqbXDC63RMG",
  "key20": "4utziiGuhga7aD3SVBmxZR2oF5xrG5cKjWUmvhk35BaYP1Zk4mLB8Fh7VR9agxC5gbLhJYeXeiygiB2L9wJRxei2",
  "key21": "4UQdoDm2aKwN4XwQ7Eq8hC1BXtnk3TgNcZHK486F1pvMUXyoDMwY3bTp48CbxGHz13akpA2NLiv1fTdAa8JxAKok",
  "key22": "4o3QjaeTGqTgvDjg46N6FkpgH841RvvxcutGEkS9iagqpBdfi9dk93QgiMHebVUqbLSnVCJPPMbZXwdhj86sHzRQ",
  "key23": "4UKBLnBzrg2u9BMXvseGiCKh1EeQKsFW5meNhianrjJUVponcBgQTmvNy6K6dCaN3hh7Druki5uChqjBPAv8rgUX",
  "key24": "yd9Ao3v3scJ5p9PLNCx4Le3EDad12uV2em4YgHK1uRbqqizMzwnwkmcJCeQ5nGNBiu6rmutouNNADEsT7g7kTtD",
  "key25": "2Rs4F5rmjfy3LdfnhPazkFi88QhDPiG5UCdjNCBTtv1DN9sgKLXmc5n3MXHw1rxz5aTvGVHLysjk3hYpt6NVZ2f3",
  "key26": "5A1QQdAYwUM1UqQXEFTUVQsJMZT6VmG3Jm9g1AcqbXDBzHHFZDMZjNQ4B5r9Q5XYb52oHHBjM8CHkvUahPc3Key8",
  "key27": "dQVNc5ZbSC6pThqNjBKetRFDW3YFnw5vQPG3XDbkk3c1t923g6iPmPNfSXKFFQxSRT3opsv3uBLcTFCjvYQrkyJ",
  "key28": "5aYqmYzBEHsq7ZTr5Cqqy4YcRd4HxLKrw5sNrQEv6454FbTK6XG8e2v6ebFiWK6ReSEEZphqAMRdJwJppYSDauTn",
  "key29": "2CJiAGVkMKDMjicd4Gt3jVRXvWAvfHNEX7xkA9jueVBfsfMbCQfpkztbjf2czQnTxvNh3aiLvuvuqJde7XKu1yXC",
  "key30": "2AWm9GHHCgzd4m1JKvThaJuA6CKCWCeKZ7TcgwpVfXPoiU2enW8EdVtaecwdNkcaWViXh5yohtK7mJa9hZmi3DSL",
  "key31": "4XLZggkeeDYyeNkK7A8WyXysD5w9AJrjzKZhN5joJG3C2QUbUEMeTEk4BwW1bdxLQPp15JxZJHPqjEPxqe3iq6j8",
  "key32": "5nojHfWLPmYLVH2kKZxUFiTML9UxfUgn5W6Bp746GushwXWVUixmiHGSHGoooLNVJJaVwo4cn7Nvp68ySUtDaN9n",
  "key33": "5jAQ5ADy1VyYFbz8K9iLZDz7UfPVAB1k75FRGLQFUWCF17bX6ULHbc2fwJmkRPQfLoCNJUuHQrXQqY5SC4FXjoGN",
  "key34": "2cRnZHTUsxa6T3FwQDcErp8UPhEE69uTH31c8CkuDBAUxBG8vqA48U8fvQP4B7aRFyNsF5JxX1nKRZLLHjMbyLK8",
  "key35": "3XnXujVzs8PxJuLbNns4B4so65zHepx9pkw4MaGATiJRJkYKnJ9BN9dSZotJvqGFVdNMzFNEwsCvxajVgn8zaDLk",
  "key36": "2XiDVyyZq1hcjbxwinMzbJ8ziMpyZ1wDSGy8og2CJf8RnHAcey3fnKPZy9MMqHuAnKMB3R3fZbkLa9vRPC5ry4Ct",
  "key37": "57s8W3owosKp58o8Gk2Yse11UwF6ScQWixw3326VwVbFhoEWqPvZ8nmvLAoVktTcanzVdx6k6iQVvc22bd36G4D9",
  "key38": "3Z86yH9aPJ9Lxv9Pn7zEsYy2sF8ZotNXuJReerUuMe7ZSrLfzvdukxSJPegnfiVjkMbpZyKxbeDn5M9AS9eWciVz",
  "key39": "NtSMdMkv8Ba2qqxPPEWQndzb1mj1XA5FV1Hq16Gvfv6JvaNo8YzwrGQF1JeZnUS5fH1Tn1HSjNbyamwd6MmUm76",
  "key40": "3LQ1ns62G9HgXHxncZj7CiXfUBjesRRbDYFiVzr1cTcZw4mQcCn7SB876wPg9FbFzEJbkzgLLaJsPLmXFoT9GtCe",
  "key41": "4HbUuPzE4aVNz3zjbpFy4duYKnxZsrtcjXdYrZ3xkb5qA8ZtamMB3Tu5FUL6dPNtKfmkVnkZQAQBrqLCZzDi6PDW",
  "key42": "2sPmLnW5L1EhvLQWZoVxg6VXj9obEfeQQgjZcP7CmNMEg7Ga4FyHcyJiojNynQ52GaJiECCdvt5XK1gt4TRCzcv6",
  "key43": "253cH8wxsT78QPikJCce6sgiUwtS8hMT7izc95xJiiNrXzSDxo8VwrmCJuotWWsL7rZ28oZNT2Z4L7BSPtp1fCRu",
  "key44": "kPbX3myPecRRMwcXBrA1C76VX7xQjKWNTB8PQB66h8hZEWWirzqeQwGoCKfyfnjm7pdw5dNn9ok5sw83jU9dwwH",
  "key45": "3XT7cejc5yeZZcWWbhCJdR9X2cEmx316RECCiyUXn57yQ7WoHQiDREv5CTj7eE9Eocj6Chh8GCs7aW7Zv7evj2jC",
  "key46": "hU9dFvnJJo1bRWr4JhJBdccTiQFAwd35LreXcYB3azz239Edn3xDEh51WJJsuhnEXgCXepXV8BfXBHtuntdNu92"
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
