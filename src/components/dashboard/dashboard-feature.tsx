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
    "2bsHw6FVbvsEQPx884HxNkxNFPKKyhh3MCKBG671GoyfXdYuZLo8zP9KXTgcekjBjeAYsbJN7R15arpdEo8HZG9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EbRKZQV9Jhnf8jGbnb1TVy11a7FNvdyRMZ1reHEBjKV9fKydQTAVbFTv7nLxLmpWGUauh8LsgAFsuiWz7ZPDQBM",
  "key1": "2Pgemc3CyGE3KGax3GMxQqjRxDKcTns5mkBRQqDJmo4tr4p8SoZaWNtaui98fG8TfHxSmtdZBbaG461dL2Rp54nG",
  "key2": "5hYgw8HKj763v9jst4UJahSSyRtCrBKUZrZgJFoJjywYuD7x6mycV91NdiUhWqZqFmVzMXS9Da5jxe6LEaUuFMod",
  "key3": "4h6PopsfbtUuHht44oCEbenvp9zVzQE8eYVdh3Kq8p617R5KdZBm6Sg65MJsqibXVfsBkrpJaz4jgPzgBCX9zjpD",
  "key4": "38ffwxQQgFC3B7aVfbZpCLjjePjr4EWjkJXCfTCxYrrPoaY9MmeUtrPgjib7nsqA4UhyoMH8zHrog57eRB5XosDv",
  "key5": "2wSe4EEyqTV6PcQ7wMEgmN28bR9TNL4t6PcbtVsqGUqqZS8yyci3LWvmooa5zB2SCJAeUGCX1oEdEisEfPyjbjjr",
  "key6": "5xcP9DyEmYcBJoirtW9w6jQ2QHur8xpUWgCykgju6kfMjzgX2RjT7fNzeAygL4kFv7iTMRWedihkSytscz9eDgZs",
  "key7": "2Uj2g99KseS8YVE4qScZrEGxaqpYdfEqKGZPYvoaLLKEra3G5qKUzWJ9iccebSM58XD3DNXb3AVXAjqfWD1oikP9",
  "key8": "4yh3Mk54yw4qzrPKDVYQ3eeX4StbbuZGyxmPNhW9CPzqsdmzXYNPSi2HQJNz3AicAu5e24LfXFF7BpMtnwA8ssuX",
  "key9": "nsEMMr4nkYd2cf8bLS98rfm38pXTZtunn8b1xbJbaHgNo8eiwsQSQa2J9MDhjYMMn6LR6JYiaRZzNvQd4uRkbhc",
  "key10": "4knuAns8aqrPJ5kvcGYixkX8sRSHQorvYS1GeZyST9UQLEmUkeXfMgsxfo4aeb6MK2qykNb8MbHHKPd6VMMWs1jU",
  "key11": "GCHuP7mx9SxycqRqkhbkNWQFsgzWD5WwgdUqwXasEiTZyuNThybuXTDyx1g9fkYCJhDGdv1Mf7be2tmf9FmQ3xz",
  "key12": "XZi4EVXdRHCKEbsFParXzwTMjRnhtvngRhzVsCa1LKeobbxBCNdXoESR6YLW7ooSkWDa3hKd8S4Rdn4ASuy7fwV",
  "key13": "51pvBrXC45NxyUZTpPK5qLtSzqYcuPCNmRq9SpUPeGZDZvjC2wZrqapEoXEjeHbiMp7TSNuBdSu495kh5LAnJXtw",
  "key14": "5XPSBPWBGwLMQhmcXsPMgsVrVLXZuEYtjBbW9jkij2F3y4XuWsyqvei3ZC2sBCryZeyZGgzDgL3w3iUqtqBs1R3c",
  "key15": "3bpdAipoeERpkFvNLH8gPEWNNSXnugbgWGtHxNu1KBnqaWRMN9aGLDnZcuLuZ7dZgVL3wRWFQwAUtRuqqoBmdihN",
  "key16": "g1vYcDkSwgJLom2P98RuqCdLA2mi9zeSK6Cu13u7FCFnY79tHvpnD9BUHT11EJXYfjtsrsAj4gL18EQLQLPSFLi",
  "key17": "2XNF3L4sKUY2vHiFEGr27PMS7kv4C5U7PDhFoyfhEvh7ZPk8ZUcsUpEtxt3uYnj2ae9TtFqDSTfdrjvpTJAn34Um",
  "key18": "2oPe48W525D8vfE96Y6JnFMcBw5i85ea7rkfmzXd8uTi2QREWjrW5k9wbqhSbUFoua7gLf773AvCnvLTUs1QWPa8",
  "key19": "1t63hEJhbvuuBUvHmcXGskRG3H7HFC1wN9udiXgh4ydXyvEz1ja3mDPCsXg4RdErBXkvUEbMFzyYKc2f8Y1bFj2",
  "key20": "59bdAx3voepaGrrY6vtzi4gEERVEsHyNVzEFd3iMFK8KHBeZjUQS5PueRGHyBtZ4oHJiKzAWKbwUnLJyN2LY51gS",
  "key21": "59i3XujdSMNYuWPkTXGVaVHFiWH2Pk7CaehoxeQWiXfz7mCw5V42mscuhedbvaE1tFz3ZHuR4TJuMB5XXxzBrRPi",
  "key22": "2vq7wPT49RSuuNWXjAeZRhYPqRTGsTvYNqSS9n8kbKxk8GVU5PuD3SPq8cNaMWkfTvXMebAowUV4Ud1Z5KwW6CDB",
  "key23": "2PcyqyRCbo8JoWGes4UhBZGKSkeCNZ3EfNgDh7CJExVPbQV4ML9XwnNQBNgkJTs4xyt1nHu43Q5v5TsCate35PfP",
  "key24": "L7ofFYN14JFniBUHBCVnLJopaj5iShSyjuA3TJpPqTsJdaw21TPYTbzPnjerNwdK463u917e3Wrc3QSqwab92Qv",
  "key25": "TQt2PySxomkrcWV4w9u3vzGtrFzMpKCg5AWWLPMhHU7FB5PA4nNwQqGs7bNvPC5FzpLzAgtBRj26e6khUxbowHU",
  "key26": "2T7wfSMscne63eCasNvB7WTrQAgAeXnabmfJHLgf8BQak4j4CgtnH2nYU9Kq4CMRzyYVCeN2tcnaJVx5oxmhRNhS",
  "key27": "3sALviRVSKWCSWpzdRudtEpuwiAnzz4PpCSaHzHq5duS8kxTKkBdxjR9hKGknt9rTMuJzJJohEb9PKydMzP73TcT",
  "key28": "64rEjFotSn7JCdGkZRt3FRzub5kffrjEj4KgTgbyqqYJJvgwTdoYFQHMTipTYX1cMHRiXWYgfR4VYDRhicV6WVu8",
  "key29": "4nVrXYZ2Whyt4gmwg1ZZgxFsJTuuQNqD6cWkdk6xustMgdz2j63aB9qe6HwMbAHPxtVsJoSQFntTbBWRXMF41BGi",
  "key30": "2KdpZZEy6Y7qZYwN9CjF5jM632PYupTooa7hGiHKve6mCSEF1bmUgGy4Q9gqmmQrU77eKrvfNkPyWTHFGbFCncGT",
  "key31": "2UyfCTZzazdtKzaejLge4DyjV3bjTeWzhqa8MnPfCbc7RLuQAsJGsrdiHNCMfQaE35ZdKNpcDz3aJbxcAacahqtf",
  "key32": "NpyM1wDDtD7AKvVdoH679KEuN8jMnMXmBiNS7nD9NmuEMkqTj1fBAjcWT2LbMcuopSvJ3kvdFryMyzh9QgxRiyb",
  "key33": "YVkuzgyedfmCbUJJ4FeMFcNYMHaWE8gy4HYeiZZwKrhuBaS1cmwmKfdghmkS3mzvjGWZGsXzHUVwyncv5Jmt8he",
  "key34": "4brUn1DQDW2Qg1hgYNU4QqoGB1GHW5HHh8xZs6XHTyQRYnrZ8Lhk2XwrbsLmAXq9TpCHkPs8TXWPQtX99nUMhkKf",
  "key35": "3ntRbGBWBGJQy6dJ8J8u118dBL6MmMcbQrg6ndWSgWLBZqTpmeYoZ4Syf7w8Z5tRojTgD5dUi3JMR1tspvUPVsCx",
  "key36": "4hqeJfjvona8TrsYvP4hKpkcEgoJGDUrFEWfowaSpMRuxd6678YbfmiMBSQgnaGMV5hD1hKkhkb5ehKYZL3pksQe",
  "key37": "sf7zHnGKumGNFdHNxnixkfxu1LvKs7ehecThizFbSrQDsmnvQdhwKy72Hq6hC6RJcTryhLG8tquCesDzvxqnNHy"
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
