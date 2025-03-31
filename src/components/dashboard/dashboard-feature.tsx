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
    "4mV8aCAp2wtXj5sErmNabNCz8iJARXtRtjggUMhpqQLyyGsuJRd7eaNb97RXKCUvgU6ZJ4y7UQzgfj9z41bKj2kF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YjRz1y9m481JiMmRh9DjYZFxVcGpjBUjt5Zi3gSo8VKNPYE9QnbMzfR7ut8ZKQfbPDuwkVKettH4Djroubivxry",
  "key1": "2f5nhezbzBaQcaZF2TrsmEWAqmfRCsFyezJrVqpEYxujWc11Ux3PBAUvTkucNXsPqm57ZjhTe7seKkjpiwCCi3zq",
  "key2": "2mCSvrNJZxvqqpVqHJ1bC4rZRqGu9ftRk8hpxHGdpEnsCfENqVs6qCYtPFyKDb92jE4rKNGAGSL3mPFXg7bSEGM6",
  "key3": "4AZgyA4m7EYHczNfxNVS2y9PDF77jBKX4pUPLT1Ja5X87XzfFWR7yVibtMEAisTRvM8YYk9Weiy5zsr5HBSGKaW3",
  "key4": "5umSso2SaLzs352UFA7h3bk1ysPMw2YnkKCN6Y2HU12YWLgVapMijFQA57m2KEZRWkpPu9rhbGkADPFNRAk19qYa",
  "key5": "3hqaw5yNibbLUyUpm3Z6jdNWWwfWqRGtK1dBjR1UNNRVNJiZGG8RNAZ8Ehu5qnhfyp1ULmPBK9qmaDZWCc9WJXGe",
  "key6": "2N6v1V54YURTaySbCi1THmMMeQsETbWMB89TLXv1dFZiSkfbp7D98J1hWj55aTHf8Z3at3W6CjSoxuBNShWZt3qT",
  "key7": "vydpPXiA8VLUXLjmC8V8W96cRyS68xj3XTGtmHpEDrzGtrupZX4j7YLgCpRhGdtzVnPumyHaYh49UL1fjBP33uN",
  "key8": "62F9KqQhUqGy5sc3twy2xPhYKwVwjEuBeK7NFrZ795Mt93PzoDeJ96vsGx32ERUEmU1fBivyHTT2nVxZUGC3thm9",
  "key9": "yFZJWHXD5ADoQn1ZAAGzVeCFEmpgRcJE9EQp82nU1EYFfLZcGyCW8MH4xSpT91F3idsQVdVtJCowY9Lji5Mdd4c",
  "key10": "4n5GmJc2U9hXuoj7QaNsgTLJTiJXPw8dpjRBtEDeNnRgXM6K4oX4duCXkf7qgZVpGzX5kDAc9whqU2VNcK2YcqrL",
  "key11": "2TM9zUsuKju3k5UL47niGQYmHnsNuqsoUP45SqpCgr5oKXwRR6Pk7KU6jsSxUz8vsBPp65hbHGq6UuwLj7yZo83b",
  "key12": "5ezhhsJ7Tnrgcn8GBRnN7QfbF8RLRdb2UhiFg7Mc8Ho9fLiNFwMLvXM21DbdC6CXFUPwpY7HBbs8vnBrpkDGPxXX",
  "key13": "3A7qq2oqje2ufGfH6F8VBS77s5kapvaRNNmqXniNuq4XomACdGyDo8segmNqwcXR7RLRCqVxFEKtc9jpjrL5mqop",
  "key14": "2wS4LgqPDyGeQNf5RdhNekKz7DCRggMncZNFc8fpVWKAVcPrzb2Xa7a9EPRXKh1RUS9qXnX9ZRWESsvgXp12jDjz",
  "key15": "29HevqQsFMN5GpuuEFYEWkcte6wuTvytNLybH7jSmgY64xbaZmYFVcWmZEiinNH2QTXTPtDtmhT6kUHGJiPV3xk8",
  "key16": "52YPGmwGFPf19oGrVEQfBwxghnyfWiwXKfSTeeZkAt3ezyfXuia4tVMBNWpzSPS6RKx56d7TE9c2J9W3hwcKgjKa",
  "key17": "5timiUnjD4pG7tTcKypEPC4CGQEFcLjF8iTLno1PLpMyBp8aFsrhWVuybHQ2a1qfzYE58JK7Y83SZ84AtPqNyP6n",
  "key18": "3DMoFUFkVMrNeh3TZcca24kwFSTUoGBm5bNYGMmJcQra5xGfwAkE9wN4D76Uk4BT8PHzL45d9zzkJLnaEngvLpna",
  "key19": "36uobFybADg9nvLQ2TK8TFRkcdqzu2L2P5Mrmd9ZRANznWNjjBM9DjSh2pNDbNmqSoroJZXguzp6MXtiini7amLC",
  "key20": "uhdbWh7B5aQY5XvFWGAqjch6DVKRPBZVk1632EULqpGdLosRSYGJxog2ern6msWd91btk9FXyfLFdBCbs6WPsFU",
  "key21": "8pzZ1F83AQhFqxv9ctGkPTo76X58QzfSognRs4zFvooJpcZM8SBtwBtV86AfvbF5Vtnf7SJC8As7MpTro6LRs2v",
  "key22": "47q5V2vZqH8gMpCk22MQiRk4T2Lbj2FnVHoYhdac4SJNuUrjesyroboAPcHBvqYe6zwXaRxVuj7sefxv67yq6doX",
  "key23": "57t56Wyy6EVBYXMdTLX318fy19ZEVT6nmNLcc4saeVxVSorimtoRucvCF5Yh2bqXE2FiN3LuoJm7G4xxYE9BPSre",
  "key24": "27dMNMVcJ41zTPwQY9QTyEBxrkw4ubhVj5em9juT8ptU6JXnNH1xghPVtbXeoHu45n4niXP1f2ZGgZznzbHVFg8q",
  "key25": "3KBsyXEhpESEGMejXjrBhv2ZiAdw8JieeGa6LreyDZarJqyz7Nbq9CXKpTFAsjWh54DiyMmYsnW36CqcCN58cd3U",
  "key26": "2T9mwDGJGU7py7AFWcjTywCKyLE51BXGhmfieHemTyk9x62oRHj2BSj54bMK1ZePY9M3YHbbtNuDWvz2sJ7VRYoz",
  "key27": "4WXmCnUNm2CRUwDf8sSkGm61uun5YPoSNZRR18WrQJjpUDnQQgTEV9Lhkkzmsqumq1RHwnNbReij4mx2qguR5gzB",
  "key28": "3udGqE4pqxFo6UfNgHqmWfyRRuaZs8P2gJN8gQYM5FUQeAUCNv1bReDGsSTur3J9KXykCn1MCmrGY5Nv95rgCewd",
  "key29": "2k32MxTMGxF5BxT135U8UtouVTRYuMh24MzF8tqZ59hLoF6iqgJzyLtXMK6J3K5PAeBQPa4V5DMPPDMjsJeRRNQ7"
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
