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
    "uR5BRzjByc8JrgbBMKsbUFUS7JFTeFP54dBk3qjh41M5T1AzhuPedwqoKR1kA73Gca6HVE52LcHD8pAee7rGfGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1pXgbw4Qwwz4LDxzTc3Vt7CXqhusn3s8LE4Kk8JnAnTTf327Xxi6rRYu53Lq3nfn2KaD3bZPYtVpjGbLn3At3J",
  "key1": "uKeW2ivQqt4x6NMxCekiFSoXS645raNd7zUwhhhs3TT9gPFrK2UomSdbprGzjxkF8Bd39KBWWsDPfwwhc4kZF76",
  "key2": "31QRQ9XMfh3nMoQbDJhws7k3SZsfVZLqKFi4gCGr3F4mxYXcy4Lm9TE6ycVRQodoVP1U3u4sUxBCBzSgc59Sc3fa",
  "key3": "4wTuhoqBk2pboFQv3K52JFiVNeMDVyu387fhE4ueyDswYzPpEL15R9dTRzeBiMbBX4skcxByNwP72d7GVgfnnVDu",
  "key4": "ezrzNUeDfAccJJbWem4pqQftBVT8KNEgS4EEZAtF5KbDu9wFJHAARD6e12BZ4bqjx22DzSyKyoawnnJ632zD9tm",
  "key5": "5trs1qnu47grqk2MScnSz4psQBHsTwq78zzk4dWLwFbsJD1DReEj7RKqLRfmVrCHB37aUNKV7UM6KZZ93y91F7VE",
  "key6": "3Y9VT3FKwRDUjiZhRA9RnSouVpnuxG9yxpaVWBJxGn9oZoZUVqybcWYsRMjigp7hVNMr5EGEfVFVDEZxsFJEAYZh",
  "key7": "3HpHPo9R58AJSuxtRGNgtZpNNQK6jyLsYF2C1byeFX3WNo8iLreNu4uy2LRf1tL3jywzRsKLyJaw41gVkbMN46Xw",
  "key8": "3LRsFJghj75668NrtKkyjAXMVaNYk7rQALvGw36RdQv2ueMMpWkGp2Q79RaR1PndojXkb7ZWW4gLQTCKyCGbNh7t",
  "key9": "2Tvyemr4wBoCTvdpnYcPMaS6HN7AyhLz1ECcJ9HuBVAeQdx1gr8pLosnoF6Uus2EzgYzJSaMGRKx44QMW5YMcbKJ",
  "key10": "2KkGjds6hGJjn1YGdztFTVEt6oK6SGPT7bYhecL7Q4eRMngKgaWsCCs4QywAo7DQmqvfusThsqupi5HGLi4CUYrM",
  "key11": "5ShjnaJ1i2fWYdSwmVF4a9rA1uXiq3Rehg4MFnyEPVb1ZUk9RKMfaRq39ZH71jJiMMVnx4x6YUwV1YrCAQLSuFPQ",
  "key12": "5MMFsugzjxKwE2RYP3hSQPT7VrWyra2k6idhgEWGrHT7RPwQQUZTTiVazFugoW129GaCEBY1rnTdxoaYhg5iNkyU",
  "key13": "3dZ6U33KkJ2cpwaTAAmiDjJZK212gvTqfaFNGRi6V5xBjqU38BcRoUtUnNtitTynzkETTcYrVeqtzYm33jUJxKx",
  "key14": "a1CckxiyXrUedpthyxwcMEpemApY5vmgNQFEUxPtC4AjmUMZQgcoPV29H1ZHvGN6TxBCmcRhkHp4d9BB3ReP9jm",
  "key15": "3Q5Vb6oG4rURZ3QVYCvnr4cNgmJaSf68ANZWsQ58XB3ekAye99nkYc3EpFir5NPyVnkSKQmSse2wsenMYxdaDnFK",
  "key16": "YhjvoaPjFgAJAr4JSgoE1CDpgGs9uzkexZ81P9yWNmSxto4MWtrT2fsy6BucBPg3HUEVPguWAyuXykhisQDzrk3",
  "key17": "2Ucyxare8zfJords9QHuzNET3He86MMJ6jdmMS6bibnjEh8ECSJZcYWfCKgUa4QXo7txHXCW6LcUhCDaXxjYTDuL",
  "key18": "4ZAL6heTUCqyQUJPuteo78fK2eQEaJpMGEkTJDUGto3qdEHXo73jiYbM5VATwwFhKkK63p2putzMxmtBJthfYHae",
  "key19": "37gFmDrAuiA6mG8GqrRxbbA19aPnTp4aksHLLvJuFiYefTXZp1JZoqoVNX9upFxigTPkLMRMTERXeqYBZV6cbtbT",
  "key20": "2CjRMyWPwFCTFBNXzi5TWGTAHLpYcb1mwzY1NjKrbqhHG2Nx3FFxyC1W8riEGdPfQVhUeoXJdB6m5NKK2hHMk6qk",
  "key21": "7jdY6jUdVRE7GCPxXfctj6r9b3Ks3fMc9pBtoZXbbNWmwSQZocSPnX51Lt3z4cVuZxh2SxANjXDTLCwMWdWqoh2",
  "key22": "2zivmVgdD9QQVZeTKoGMY1vREou9vthh98kTvEcvaw2Rdr4YMVo4GuVRv8QFkM5rcoK2q5p8RLdGbGsXSQe3tS6q",
  "key23": "TpRrkDQaeEDY1g8KvBarBFXgEn4EBjwa21FofqXcKAYYVkKivSeEZtFzcG78CGAZPY7ox26XV7yGjiomb9EnjnE",
  "key24": "zJ361dFDxyeAKsoDJpkpndPfSjrQFQj4DLgRfWiUkM27B5PPVmqRdiLYtAz8dDy3T2MVFLgv9qFMhEzbrGAcUPs"
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
